#!/usr/bin/env python3
"""
╔══════════════════════════════════════════════════════════════════════════════════╗
║         SOP-Konverter v2 — Klinikum St. Georg / ConSense Master                ║
║         Konvertiert SOP-JavaScript-Dateien → Word DOCX + optional PDF          ║
╚══════════════════════════════════════════════════════════════════════════════════╝

VERWENDUNG
──────────
  # Eine SOP konvertieren:
  python sop_converter_v2.py akute-divertikulitis.js

  # Eine SOP + sofort als PDF ausgeben:
  python sop_converter_v2.py akute-divertikulitis.js --pdf

  # Alle SOPs in einem Ordner konvertieren + PDFs erzeugen:
  python sop_converter_v2.py --all /pfad/zu/sop-ordner/ --pdf

  # Nur PDFs, keine DOCX behalten:
  python sop_converter_v2.py --all /pfad/zu/sop-ordner/ --pdf-only

  # Mit benutzerdefiniertem Template und Ausgabeordner:
  python sop_converter_v2.py --template vorlage.docx --output /ausgabe/ *.js --pdf

  # Stille Ausführung (kein Fortschrittsoutput):
  python sop_converter_v2.py --all . --pdf --quiet

ABHÄNGIGKEITEN
──────────────
  pip install beautifulsoup4

  Für PDF-Konvertierung: LibreOffice muss installiert sein
    Linux:   sudo apt install libreoffice
    macOS:   brew install --cask libreoffice
    Windows: https://www.libreoffice.org/download/

VORAUSSETZUNGEN
───────────────
  - SOP JavaScript-Dateien (*.js) mit window.SOP_DATA.push({...})-Struktur
  - ConSense Masterdatei DOCX (Standard: 2025_Masterdatei_Consense1.docx)
    → muss sich im selben Verzeichnis wie dieses Skript befinden,
      oder per --template angegeben werden
"""

import os
import re
import sys
import json
import shutil
import argparse
import tempfile
import zipfile
import subprocess
from pathlib import Path
from xml.sax.saxutils import escape as xml_escape

# ── Konfiguration ──────────────────────────────────────────────────────────────

SCRIPT_DIR = Path(__file__).parent
DEFAULT_TEMPLATE = SCRIPT_DIR / "2025_Masterdatei_Consense1.docx"

# Libreoffice-Befehl (wird automatisch gefunden)
LIBREOFFICE_CMD = None  # wird in _find_libreoffice() gesetzt

# Farben der Callout-Boxen (CSS-Klasse → Farben)
CALLOUT_COLORS = {
    "callout-wichtig": {"bg": "FFF3CD", "border": "FFC107", "label": "⚠ Wichtig"},
    "callout-cave":    {"bg": "F8D7DA", "border": "DC3545", "label": "⚠ Cave"},
    "callout-hinweis": {"bg": "D1ECF1", "border": "17A2B8", "label": "ℹ Hinweis"},
}

# ── LibreOffice-Erkennung ──────────────────────────────────────────────────────

def _find_libreoffice() -> str | None:
    """Sucht den LibreOffice-Befehl auf dem System."""
    candidates = [
        "libreoffice",
        "soffice",
        "/usr/bin/libreoffice",
        "/usr/bin/soffice",
        "/Applications/LibreOffice.app/Contents/MacOS/soffice",
        r"C:\Program Files\LibreOffice\program\soffice.exe",
        r"C:\Program Files (x86)\LibreOffice\program\soffice.exe",
    ]
    for cmd in candidates:
        if shutil.which(cmd) or Path(cmd).exists():
            return cmd
    return None


# ── JS-Parser ──────────────────────────────────────────────────────────────────

def parse_sop_js(js_text: str) -> dict:
    """
    Extrahiert SOP-Daten aus einer JavaScript-Datei.

    Erwartet das Format:
        window.SOP_DATA.push({
            id: '...',
            title: '...',
            category: '...',
            stand: '...',
            sections: [
                { title: '...', html: `...` },
                ...
            ],
            sources: `...`
        });

    Gibt ein dict mit den SOP-Feldern zurück.
    Wirf ValueError wenn kein SOP_DATA.push(...) gefunden.
    """
    # Kommentare entfernen
    js_text = re.sub(r'//[^\n]*\n', '\n', js_text)

    # SOP_DATA.push({...})-Block extrahieren
    match = re.search(r'window\.SOP_DATA\.push\((\{[\s\S]*?)\)\s*;', js_text)
    if not match:
        raise ValueError("Kein 'window.SOP_DATA.push(...)' gefunden")

    obj_str = match.group(1)

    # Template-Literale (`...`) → normale JSON-Strings umwandeln
    def replace_template_literal(m):
        content = m.group(1)
        content = content.replace('"', '\\"')
        content = content.replace('\\`', '`')
        return '"' + content + '"'

    obj_str = re.sub(r'`([\s\S]*?)`', replace_template_literal, obj_str)

    # Schlüssel ohne Anführungszeichen → mit Anführungszeichen
    obj_str = re.sub(r'(\w+):', r'"\1":', obj_str)
    obj_str = re.sub(r'""(\w+)":', r'"\1":', obj_str)

    try:
        return json.loads(obj_str)
    except json.JSONDecodeError:
        return _manual_parse_sop(js_text)


def _manual_parse_sop(js_text: str) -> dict:
    """
    Robusterer Fallback-Parser für SOP-JS-Dateien.
    Wird verwendet wenn JSON-Parsing fehlschlägt.
    Parst die Felder direkt mit regulären Ausdrücken.
    """
    result = {}

    for field in ('id', 'title', 'category', 'stand'):
        m = re.search(rf'{field}:\s*["\']([^"\']+)["\']', js_text)
        if m:
            result[field] = m.group(1)

    # sources: bevorzugt Template-Literal
    m = re.search(r'sources:\s*`([\s\S]*?)`', js_text)
    if m:
        result['sources'] = m.group(1)
    else:
        m = re.search(r'sources:\s*["\']([^"\']+)["\']', js_text)
        if m:
            result['sources'] = m.group(1)

    # sections: Array aus { title: '...', html: `...` }
    sections = []
    for title, html in re.findall(
        r'\{\s*title:\s*["\']([^"\']+)["\']\s*,\s*html:\s*`([\s\S]*?)`\s*\}',
        js_text
    ):
        sections.append({'title': title, 'html': html})
    result['sections'] = sections

    return result


# ── HTML → Word-XML Konverter ──────────────────────────────────────────────────

class HtmlToWordXml:
    """
    Konvertiert HTML-Fragmente (aus den SOP-JS-Dateien) in Word Open XML.

    Unterstützte HTML-Elemente:
        p               → Absatz
        h3, h4          → Unterüberschriften (fett, größer)
        ul, ol          → Aufzählungs-/Nummerierungsliste (verschachtelt bis Tiefe 9)
        table           → Tabelle (th/td, mit Kopfzeile)
        div.callout-*   → Farbige Hinweis-Box (wichtig / cave / hinweis)
        strong, b       → Fett
        em, i           → Kursiv
        br              → Zeilenumbruch im Absatz
        small           → Kleintext (grau, 8.5pt)
        span, a         → Inline, transparent (keine spezielle Formatierung)

    WICHTIG – Listengestaltung:
        Jede top-level <ul>/<ol> erhält eine eigene numId (Zähler ab 100 für
        bullets, ab 200 für nummerierte Listen). Sub-Listen erben die numId
        der Elternliste, aber ein tieferes ilvl-Attribut. Dadurch werden
        separate Listenabschnitte in Word NICHT als Fortsetzung einer
        einzigen Liste behandelt.

    WICHTIG – Bullet-Zeichen:
        Als Bullet-Zeichen wird '\\uf0b7' (Symbol-Font, Private Use) verwendet —
        dies ist das native Word-Bullet-Glyph. NICHT U+2022 (•) verwenden,
        da dieses in Word anders gerendert wird.

    WICHTIG – Border-Attribute:
        Tabellen-Border-Elemente heißen w:left/w:right (OOXML Compatibility).
        NICHT w:start/w:end verwenden — diese sind zwar OOXML-konform,
        werden aber von älterer Word-Software nicht unterstützt.
    """

    def __init__(self, content_width_dxa: int = 9638):
        # Seitenbreite minus Ränder in DXA (1 DXA = 1/1440 Zoll)
        # A4 (11906 DXA breit), linker + rechter Rand je 1134 DXA
        # → Nutzbreite: 11906 - 2*1134 = 9638 DXA
        self.content_width = content_width_dxa

        # Zähler für eindeutige numIds pro Listensekion
        # Bullets: 100, 101, 102, ...   Ordered: 200, 201, 202, ...
        self._bullet_num_counter = 100
        self._ordered_num_counter = 200

        # Verwendete numIds für generate_numbering_xml sammeln
        self.used_bullet_numids: list[int] = []
        self.used_ordered_numids: list[int] = []

    def _next_bullet_numid(self) -> str:
        nid = self._bullet_num_counter
        self._bullet_num_counter += 1
        self.used_bullet_numids.append(nid)
        return str(nid)

    def _next_ordered_numid(self) -> str:
        nid = self._ordered_num_counter
        self._ordered_num_counter += 1
        self.used_ordered_numids.append(nid)
        return str(nid)

    def convert(self, html: str) -> str:
        """Konvertiert HTML-String → Word-XML-String."""
        return '\n'.join(self.convert_to_list(html))

    def convert_to_list(self, html: str) -> list[str]:
        """
        Konvertiert HTML-String → Liste von Word-XML-Elementen.
        Gibt eine Liste aus <w:p>- und <w:tbl>-Strings zurück.
        Verwendet für Post-Processing (keepNext-Verkettung).
        """
        from bs4 import BeautifulSoup
        soup = BeautifulSoup(html, 'html.parser')
        parts: list[str] = []
        self._process_nodes(soup, parts, context={})
        return parts

    # ── interne Verarbeitungslogik ─────────────────────────────────────────────

    def _process_nodes(self, parent, parts: list, context: dict):
        """Rekursive Traversierung des BS4-Baums."""
        from bs4 import NavigableString, Tag

        for node in parent.children:
            if isinstance(node, NavigableString):
                text = node.strip()
                if text:
                    parts.append(self._para(text, context))

            elif isinstance(node, Tag):
                tag = node.name.lower() if node.name else ''

                if tag in ('h3', 'h4'):
                    parts.append(self._heading(node.get_text(strip=True), tag))

                elif tag == 'p':
                    runs = self._inline_content(node)
                    if runs:
                        parts.append(self._para_runs(runs, context))

                elif tag == 'ul':
                    num_id = self._next_bullet_numid()
                    self._process_list(node, parts, is_ordered=False, level=0, num_id=num_id)

                elif tag == 'ol':
                    num_id = self._next_ordered_numid()
                    self._process_list(node, parts, is_ordered=True, level=0, num_id=num_id)

                elif tag == 'table':
                    # Leerzeile VOR der Tabelle
                    parts.append('<w:p><w:pPr><w:spacing w:before="0" w:after="60"/></w:pPr></w:p>')
                    parts.append(self._table(node))

                elif tag == 'div':
                    classes = node.get('class', [])
                    callout_type = next((c for c in classes if c in CALLOUT_COLORS), None)
                    if callout_type:
                        # Leerzeile VOR der Callout-Box
                        parts.append('<w:p><w:pPr><w:spacing w:before="0" w:after="60"/></w:pPr></w:p>')
                        parts.extend(self._callout(node, callout_type))
                    else:
                        self._process_nodes(node, parts, context)

                elif tag == 'small':
                    text = node.get_text(strip=True)
                    if text:
                        parts.append(self._para(text, context, small=True))

                else:
                    self._process_nodes(node, parts, context)

    def _inline_content(self, node) -> list[tuple]:
        """
        Extrahiert Inline-Inhalte als Liste von (text, bold, italic)-Tupeln.
        Verarbeitet: strong/b → bold, em/i → italic, br → Zeilenumbruch,
                     span/small/a → transparent (kein Styling)
        """
        from bs4 import NavigableString, Tag
        runs = []

        def collect(n, bold=False, italic=False):
            if isinstance(n, NavigableString):
                t = str(n)
                if t:
                    runs.append((t, bold, italic))
            elif isinstance(n, Tag):
                tag = n.name.lower() if n.name else ''
                if tag in ('strong', 'b'):
                    for child in n.children:
                        collect(child, bold=True, italic=italic)
                elif tag in ('em', 'i'):
                    for child in n.children:
                        collect(child, bold=bold, italic=True)
                elif tag == 'br':
                    runs.append(('\n', bold, italic))
                else:  # span, small, a, etc.
                    for child in n.children:
                        collect(child, bold=bold, italic=italic)

        collect(node)
        return runs

    def _inline_content_node(self, node) -> list[tuple]:
        """Wie _inline_content, aber für einen einzelnen (nicht-<p>)-Knoten."""
        from bs4 import NavigableString, Tag
        runs = []

        def collect(n, bold=False, italic=False):
            if isinstance(n, NavigableString):
                t = str(n)
                if t:
                    runs.append((t, bold, italic))
            elif isinstance(n, Tag):
                tag = n.name.lower() if n.name else ''
                if tag in ('strong', 'b'):
                    for c in n.children:
                        collect(c, bold=True, italic=italic)
                elif tag in ('em', 'i'):
                    for c in n.children:
                        collect(c, bold=bold, italic=True)
                elif tag == 'br':
                    runs.append(('\n', bold, italic))
                else:
                    for c in n.children:
                        collect(c, bold=bold, italic=italic)

        collect(node)
        return runs

    def _runs_xml(self, runs: list[tuple],
                  font_size: str = None,
                  color: str = None) -> str:
        """
        Erzeugt <w:r>-Elemente aus einer Liste von (text, bold, italic)-Tupeln.

        font_size: Halbpunkte (z.B. '20' = 10pt, '24' = 12pt)
        color:     Hex-Farbe ohne # (z.B. '666666')
        """
        xml = ''
        for text, bold, italic in runs:
            if not text:
                continue
            rpr = '<w:rPr>'
            if bold:
                rpr += '<w:b/><w:bCs/>'
            if italic:
                rpr += '<w:i/><w:iCs/>'
            if font_size:
                rpr += f'<w:sz w:val="{font_size}"/><w:szCs w:val="{font_size}"/>'
            if color:
                rpr += f'<w:color w:val="{color}"/>'
            rpr += '</w:rPr>'

            if text == '\n':
                xml += f'<w:r>{rpr}<w:br/></w:r>'
            else:
                escaped = xml_escape(text)
                needs_preserve = (
                    text != text.strip() or
                    text.startswith(' ') or
                    text.endswith(' ')
                )
                space_attr = ' xml:space="preserve"' if needs_preserve else ''
                xml += f'<w:r>{rpr}<w:t{space_attr}>{escaped}</w:t></w:r>'
        return xml

    def _para(self, text: str, context: dict, small: bool = False) -> str:
        """Einfacher Text-Absatz (ohne Inline-Formatierung)."""
        font_size = '17' if small else None
        color = '666666' if small else None
        return self._para_runs([(text, False, False)], context,
                               font_size=font_size, color=color)

    def _para_runs(self, runs: list[tuple], context: dict,
                   font_size: str = None, color: str = None,
                   spacing_before: int = 60, spacing_after: int = 80,
                   keep_lines: bool = True) -> str:
        """
        Erzeugt einen <w:p>-Absatz mit Runs.

        spacing_before/after: in Twips (20 Twips = 1pt)
        keep_lines:           <w:keepLines/> verhindert Seitenumbruch
                              mitten im Absatz
        """
        ppr = '<w:pPr>'
        ppr += f'<w:spacing w:before="{spacing_before}" w:after="{spacing_after}"/>'
        if keep_lines:
            ppr += '<w:keepLines/>'
        ppr += '</w:pPr>'
        runs_xml = self._runs_xml(runs, font_size=font_size, color=color)
        return f'<w:p>{ppr}{runs_xml}</w:p>'

    def _heading(self, text: str, level: str) -> str:
        """
        Unterüberschrift h3 oder h4.

        h3: 11pt (22 Halbpunkte), 160/80 Abstand
        h4: 10pt (20 Halbpunkte), 120/60 Abstand
        Immer: fett, keepNext (hält Überschrift mit folgendem Absatz zusammen)
        """
        font_size, sp_before, sp_after = (
            ('22', '160', '80') if level == 'h3' else ('20', '120', '60')
        )
        escaped = xml_escape(text)
        return (
            f'<w:p>'
            f'<w:pPr>'
            f'<w:spacing w:before="{sp_before}" w:after="{sp_after}"/>'
            f'<w:keepNext/>'
            f'<w:keepLines/>'
            f'</w:pPr>'
            f'<w:r>'
            f'<w:rPr><w:b/><w:bCs/>'
            f'<w:sz w:val="{font_size}"/><w:szCs w:val="{font_size}"/>'
            f'</w:rPr>'
            f'<w:t>{escaped}</w:t>'
            f'</w:r>'
            f'</w:p>'
        )

    def _process_list(self, ul_node, parts: list,
                      is_ordered: bool, level: int, num_id: str):
        """
        Verarbeitet <ul>/<ol>-Knoten rekursiv.

        level:  Verschachtelungstiefe (0 = top-level, max. 8)
        num_id: Gemeinsame numId für diese Liste und alle ihre Sub-Listen.
                Jede top-level Liste erhält eine einzigartige numId.
                Sub-Listen erben die numId, erhöhen aber level (= ilvl).

        Listenelemente mit Inline-Inhalt werden als <w:p> mit <w:numPr> erzeugt.
        Verschachtelte Listen folgen direkt nach dem übergeordneten <w:p>.
        """
        from bs4 import Tag, NavigableString

        ilvl = str(min(level, 8))  # Word unterstützt maximal ilvl 0-8

        for li in [c for c in ul_node.children
                   if isinstance(c, Tag) and c.name == 'li']:

            inline_runs: list[tuple] = []
            sub_lists: list[tuple] = []

            for child in li.children:
                if isinstance(child, Tag) and child.name in ('ul', 'ol'):
                    sub_lists.append((child, child.name == 'ol'))
                else:
                    inline_runs.extend(self._inline_content_node(child))

            # Listenelement-Absatz
            if inline_runs or not sub_lists:
                runs_xml = self._runs_xml(inline_runs)
                ppr = (
                    f'<w:pPr>'
                    f'<w:numPr>'
                    f'<w:ilvl w:val="{ilvl}"/>'
                    f'<w:numId w:val="{num_id}"/>'
                    f'</w:numPr>'
                    f'<w:spacing w:before="40" w:after="40"/>'
                    f'<w:keepLines/>'
                    f'</w:pPr>'
                )
                parts.append(f'<w:p>{ppr}{runs_xml}</w:p>')

            # Verschachtelte Listen (gleiche numId, höheres level)
            for sub_node, sub_ordered in sub_lists:
                self._process_list(sub_node, parts, sub_ordered,
                                   level + 1, num_id=num_id)

    def _callout(self, node, callout_type: str) -> list[str]:
        """
        Erzeugt eine farbige Callout-Box als einspaltige Tabelle.

        Die Box umfasst:
          - Eine Tabelle mit 12pt-Rahmenlinie in der jeweiligen Akzentfarbe
          - Farbiger Zellhintergrund (bg-Farbe aus CALLOUT_COLORS)
          - Zellinhalt: alle HTML-Inhalte des div-Knotens (rekursiv konvertiert)
          - <w:cantSplit/> in der Tabellenzeile: kein Seitenumbruch mitten in der Box
          - Einen Leerabsatz nach der Box (für Abstand zum nächsten Element)

        HINWEIS: Die Leerzeile VOR der Box wird in _process_nodes eingefügt,
        nicht hier — damit sie auch bei verschachtelten Divs korrekt erscheint.
        """
        config = CALLOUT_COLORS[callout_type]
        bg = config['bg']
        bc = config['border']

        cell_parts: list[str] = []
        self._process_nodes(node, cell_parts, context={})
        if not cell_parts:
            return []

        cell_content = '\n'.join(cell_parts)
        w = self.content_width

        return [
            f'<w:tbl>'
            f'<w:tblPr>'
            f'<w:tblW w:w="{w}" w:type="dxa"/>'
            f'<w:tblBorders>'
            f'<w:top w:val="single" w:sz="12" w:space="0" w:color="{bc}"/>'
            f'<w:left w:val="single" w:sz="12" w:space="0" w:color="{bc}"/>'
            f'<w:bottom w:val="single" w:sz="4" w:space="0" w:color="{bc}"/>'
            f'<w:right w:val="single" w:sz="4" w:space="0" w:color="{bc}"/>'
            f'</w:tblBorders>'
            f'<w:tblCellMar>'
            f'<w:top w:w="100" w:type="dxa"/>'
            f'<w:left w:w="160" w:type="dxa"/>'
            f'<w:bottom w:w="100" w:type="dxa"/>'
            f'<w:right w:w="160" w:type="dxa"/>'
            f'</w:tblCellMar>'
            f'</w:tblPr>'
            f'<w:tblGrid><w:gridCol w:w="{w}"/></w:tblGrid>'
            f'<w:tr>'
            f'<w:trPr><w:cantSplit/></w:trPr>'
            f'<w:tc>'
            f'<w:tcPr>'
            f'<w:tcW w:w="{w}" w:type="dxa"/>'
            f'<w:tcBorders>'
            f'<w:top w:val="single" w:sz="12" w:space="0" w:color="{bc}"/>'
            f'<w:left w:val="single" w:sz="12" w:space="0" w:color="{bc}"/>'
            f'<w:bottom w:val="single" w:sz="4" w:space="0" w:color="{bc}"/>'
            f'<w:right w:val="single" w:sz="4" w:space="0" w:color="{bc}"/>'
            f'</w:tcBorders>'
            f'<w:shd w:val="clear" w:color="auto" w:fill="{bg}"/>'
            f'</w:tcPr>'
            f'{cell_content}'
            f'</w:tc>'
            f'</w:tr>'
            f'</w:tbl>',
            # Leerabsatz nach der Box
            '<w:p><w:pPr><w:spacing w:before="0" w:after="60"/></w:pPr></w:p>',
        ]

    def _table(self, table_node) -> str:
        """
        Konvertiert eine HTML-Tabelle (<table>) in eine Word-Tabelle.

        Besonderheiten:
          - Spaltenbreiten werden gleichmäßig auf die Gesamtbreite verteilt
          - Kopfzeilen (th-Elemente) erhalten blauen Hintergrund D9E2F3
            und fette Schrift
          - <w:cantSplit/> auf allen Zeilen: kein Seitenumbruch mitten in einer Zeile
          - Rahmenlinien: 4pt single, Farbe AAAAAA (dezentes Grau)

        ACHTUNG – Tabellen-Border-Attributnamen:
          Verwende w:left/w:right, NICHT w:start/w:end.
          (w:start/w:end ist OOXML-konform, aber inkompatibel mit Word 2013/2016)
        """
        from bs4 import Tag

        all_rows = table_node.find_all('tr')
        if not all_rows:
            return ''

        max_cols = max(
            len([c for c in tr.children
                 if isinstance(c, Tag) and c.name in ('th', 'td')])
            for tr in all_rows
        )
        if max_cols == 0:
            return ''

        # Spaltenbreiten gleichmäßig verteilen (Rundungsfehler auf letzte Spalte)
        col_width = self.content_width // max_cols
        col_widths = [col_width] * max_cols
        col_widths[-1] += self.content_width - sum(col_widths)

        grid_xml = ''.join(f'<w:gridCol w:w="{w}"/>' for w in col_widths)
        rows_xml = ''

        for tr in all_rows:
            cells = [c for c in tr.children
                     if isinstance(c, Tag) and c.name in ('th', 'td')]
            is_header = any(c.name == 'th' for c in cells)

            cells_xml = ''
            for i, cell in enumerate(cells):
                cw = col_widths[i] if i < len(col_widths) else col_widths[-1]
                bg = 'D9E2F3' if is_header else 'FFFFFF'
                runs = self._inline_content(cell)
                if is_header:
                    runs = [(t, True, it) for t, bl, it in runs]
                runs_xml = self._runs_xml(runs)
                cell_para = (
                    f'<w:p>'
                    f'<w:pPr>'
                    f'<w:spacing w:before="60" w:after="60"/>'
                    f'<w:keepLines/>'
                    f'</w:pPr>'
                    f'{runs_xml}'
                    f'</w:p>'
                )
                cells_xml += (
                    f'<w:tc>'
                    f'<w:tcPr>'
                    f'<w:tcW w:w="{cw}" w:type="dxa"/>'
                    f'<w:tcBorders>'
                    f'<w:top w:val="single" w:sz="4" w:space="0" w:color="AAAAAA"/>'
                    f'<w:left w:val="single" w:sz="4" w:space="0" w:color="AAAAAA"/>'
                    f'<w:bottom w:val="single" w:sz="4" w:space="0" w:color="AAAAAA"/>'
                    f'<w:right w:val="single" w:sz="4" w:space="0" w:color="AAAAAA"/>'
                    f'</w:tcBorders>'
                    f'<w:shd w:val="clear" w:color="auto" w:fill="{bg}"/>'
                    f'</w:tcPr>'
                    f'{cell_para}'
                    f'</w:tc>'
                )

            header_mark = '<w:tblHeader/>' if is_header else ''
            rows_xml += (
                f'<w:tr>'
                f'<w:trPr>{header_mark}<w:cantSplit/></w:trPr>'
                f'{cells_xml}'
                f'</w:tr>'
            )

        return (
            f'<w:tbl>'
            f'<w:tblPr>'
            f'<w:tblW w:w="{self.content_width}" w:type="dxa"/>'
            f'<w:tblBorders>'
            f'<w:top w:val="single" w:sz="4" w:space="0" w:color="AAAAAA"/>'
            f'<w:left w:val="single" w:sz="4" w:space="0" w:color="AAAAAA"/>'
            f'<w:bottom w:val="single" w:sz="4" w:space="0" w:color="AAAAAA"/>'
            f'<w:right w:val="single" w:sz="4" w:space="0" w:color="AAAAAA"/>'
            f'<w:insideH w:val="single" w:sz="4" w:space="0" w:color="AAAAAA"/>'
            f'<w:insideV w:val="single" w:sz="4" w:space="0" w:color="AAAAAA"/>'
            f'</w:tblBorders>'
            f'<w:tblCellMar>'
            f'<w:top w:w="80" w:type="dxa"/>'
            f'<w:left w:w="120" w:type="dxa"/>'
            f'<w:bottom w:w="80" w:type="dxa"/>'
            f'<w:right w:w="120" w:type="dxa"/>'
            f'</w:tblCellMar>'
            f'</w:tblPr>'
            f'<w:tblGrid>{grid_xml}</w:tblGrid>'
            f'{rows_xml}'
            f'</w:tbl>'
        )


# ── Dokument-XML-Komponenten ───────────────────────────────────────────────────

# Vollständige OOXML-Namespaces (aus der ConSense Masterdatei übernommen)
NAMESPACES = (
    'xmlns:o="urn:schemas-microsoft-com:office:office" '
    'xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" '
    'xmlns:v="urn:schemas-microsoft-com:vml" '
    'xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" '
    'xmlns:w10="urn:schemas-microsoft-com:office:word" '
    'xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" '
    'xmlns:wps="http://schemas.microsoft.com/office/word/2010/wordprocessingShape" '
    'xmlns:wpg="http://schemas.microsoft.com/office/word/2010/wordprocessingGroup" '
    'xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" '
    'xmlns:wp14="http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing" '
    'xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml" '
    'xmlns:w15="http://schemas.microsoft.com/office/word/2012/wordml" '
    'mc:Ignorable="w14 wp14 w15"'
)


def section_heading(title: str) -> str:
    """
    Abschnitts-Heading im SOP-Stil.

    Formatierung:
      - Text: 13pt (26 Halbpunkte), fett, Farbe #2E75B6
      - Unterstreichung: blaue Linie 3pt unter dem Absatz (pBdr/bottom)
      - Abstand: 200 Twip davor, 80 dahinter
      - keepNext: hält Überschrift immer mit dem folgenden Inhalt zusammen
    """
    escaped = xml_escape(title)
    return (
        f'<w:p>'
        f'<w:pPr>'
        f'<w:spacing w:before="200" w:after="80"/>'
        f'<w:keepNext/>'
        f'<w:keepLines/>'
        f'<w:pBdr>'
        f'<w:bottom w:val="single" w:sz="6" w:space="1" w:color="2E75B6"/>'
        f'</w:pBdr>'
        f'</w:pPr>'
        f'<w:r>'
        f'<w:rPr>'
        f'<w:b/><w:bCs/>'
        f'<w:color w:val="2E75B6"/>'
        f'<w:sz w:val="26"/><w:szCs w:val="26"/>'
        f'</w:rPr>'
        f'<w:t>{escaped}</w:t>'
        f'</w:r>'
        f'</w:p>'
    )


def title_block(title: str, category: str, stand: str = '') -> str:
    """
    Titelblock am Dokumentanfang.

    Zeile 1 – Titel:    18pt (36 Halbpunkte), fett, Farbe #1F3864 (dunkles Marineblau)
    Zeile 2 – Kategorie + Stand: 10pt (20 Halbpunkte), Farbe #4472C4 (mittleres Blau)
    """
    escaped_title = xml_escape(title)
    escaped_cat = xml_escape(category)
    stand_text = f' | Stand: {stand}' if stand else ''

    return (
        f'<w:p>'
        f'<w:pPr>'
        f'<w:spacing w:before="0" w:after="120"/>'
        f'<w:keepNext/>'
        f'</w:pPr>'
        f'<w:r>'
        f'<w:rPr>'
        f'<w:b/><w:bCs/>'
        f'<w:sz w:val="36"/><w:szCs w:val="36"/>'
        f'<w:color w:val="1F3864"/>'
        f'</w:rPr>'
        f'<w:t>{escaped_title}</w:t>'
        f'</w:r>'
        f'</w:p>'
        f'<w:p>'
        f'<w:pPr><w:spacing w:before="0" w:after="200"/></w:pPr>'
        f'<w:r>'
        f'<w:rPr>'
        f'<w:color w:val="4472C4"/>'
        f'<w:sz w:val="20"/><w:szCs w:val="20"/>'
        f'</w:rPr>'
        f'<w:t>{escaped_cat}{xml_escape(stand_text)}</w:t>'
        f'</w:r>'
        f'</w:p>'
    )


def sources_block(sources: str) -> str:
    """
    Quellenabschnitt am Dokumentende.

    - Grauer Trennstrich oben (4pt, Farbe #AAAAAA)
    - Überschrift "Quellen": 9pt (18 Halbpunkte), fett, #555555
    - Quellenzeilen: 8.5pt (17 Halbpunkte), #666666, hängender Einzug 360 DXA
    - HTML-Tags (insb. <br>) aus dem sources-Feld werden bereinigt
    """
    if not sources:
        return ''

    clean = re.sub(r'<br\s*/?>', '\n', sources)
    clean = re.sub(r'<[^>]+>', '', clean).strip()
    lines = [l.strip() for l in clean.split('\n') if l.strip()]

    paras = ''
    for line in lines:
        escaped = xml_escape(line)
        paras += (
            f'<w:p>'
            f'<w:pPr>'
            f'<w:spacing w:before="20" w:after="20"/>'
            f'<w:keepLines/>'
            f'<w:ind w:left="360" w:hanging="360"/>'
            f'</w:pPr>'
            f'<w:r>'
            f'<w:rPr>'
            f'<w:sz w:val="17"/><w:szCs w:val="17"/>'
            f'<w:color w:val="666666"/>'
            f'</w:rPr>'
            f'<w:t>{escaped}</w:t>'
            f'</w:r>'
            f'</w:p>'
        )

    heading = (
        f'<w:p>'
        f'<w:pPr>'
        f'<w:spacing w:before="240" w:after="60"/>'
        f'<w:keepNext/>'
        f'<w:pBdr>'
        f'<w:top w:val="single" w:sz="4" w:space="1" w:color="AAAAAA"/>'
        f'</w:pBdr>'
        f'</w:pPr>'
        f'<w:r>'
        f'<w:rPr><w:b/><w:sz w:val="18"/><w:szCs w:val="18"/>'
        f'<w:color w:val="555555"/></w:rPr>'
        f'<w:t>Quellen</w:t>'
        f'</w:r>'
        f'</w:p>'
    )
    return heading + paras


# ── Seitenumbruchschutz (keepNext-Kette) ──────────────────────────────────────

def _chain_section_with_keep_next(parts: list[str]) -> list[str]:
    """
    Verkettet alle Absätze eines Abschnitts mit <w:keepNext/>, sodass
    Word den gesamten Abschnitt als Block behandelt und ihn auf eine neue
    Seite verschiebt, wenn er nicht vollständig auf die aktuelle passt.

    Algorithmus:
      1. Letzten <w:p>-Index ermitteln
      2. Für jeden Absatz außer dem letzten: _inject_keep_next() aufrufen
      3. Absätze UNMITTELBAR vor einer <w:tbl> erhalten immer keepNext
         (auch wenn sie der letzte Absatz wären), damit Tabellen zusammen
         mit dem vorausgehenden Text bleiben

    Grenzen:
      - Bei Abschnitten, die länger als eine Druckseite sind, muss Word
        irgendwo umbrechen — keepNext wird dann ignoriert.
      - Tabellen selbst bekommen kein keepNext (sie haben <w:cantSplit/>
        auf Zeilenebene für interne Kohäsion).
    """
    if not parts:
        return parts

    result = list(parts)

    # Letzten Absatz-Index finden
    last_p_idx = -1
    for idx in range(len(result) - 1, -1, -1):
        if result[idx].lstrip().startswith('<w:p'):
            last_p_idx = idx
            break

    for idx, part in enumerate(result):
        is_para = part.lstrip().startswith('<w:p')
        next_is_table = (
            idx + 1 < len(result) and
            result[idx + 1].lstrip().startswith('<w:tbl')
        )

        if is_para and (idx != last_p_idx or next_is_table):
            result[idx] = _inject_keep_next(part)

    return result


def _inject_keep_next(para_xml: str) -> str:
    """
    Fügt <w:keepNext/> in einen bestehenden <w:p>-Absatz ein.

    Drei Fälle:
      1. <w:pPr> ohne Attribute → '<w:pPr>' ersetzen durch '<w:pPr><w:keepNext/>'
      2. <w:pPr ...> mit Attributen → Regex-Ersatz nach dem öffnenden Tag
      3. Kein <w:pPr> → <w:pPr><w:keepNext/></w:pPr> nach <w:p...> einfügen

    Idempotent: wenn bereits <w:keepNext/> vorhanden, keine Änderung.
    """
    if '<w:keepNext/>' in para_xml:
        return para_xml

    if '<w:pPr>' in para_xml:
        return para_xml.replace('<w:pPr>', '<w:pPr><w:keepNext/>', 1)
    elif '<w:pPr ' in para_xml:
        return re.sub(r'(<w:pPr[^>]*>)', r'\1<w:keepNext/>', para_xml, count=1)
    else:
        return re.sub(
            r'(<w:p(?:\s[^>]*)?>)',
            r'\1<w:pPr><w:keepNext/></w:pPr>',
            para_xml, count=1
        )


# ── Numbering XML ──────────────────────────────────────────────────────────────

def generate_numbering_xml(bullet_numids: list[int] = None,
                            ordered_numids: list[int] = None) -> str:
    """
    Erzeugt numbering.xml mit zwei abstractNum-Definitionen:
      abstractNumId=0 → Bullet-Listen
      abstractNumId=1 → Nummerierte Listen

    Jeder Listensezion im Dokument entspricht ein eigener <w:num>-Eintrag
    (mit eindeutiger numId), der auf eine der beiden abstractNum-Definitionen
    zeigt. Dies ist entscheidend, damit Word separate Listenabschnitte nicht
    als Fortsetzung einer einzigen globalen Liste behandelt.

    Bullet-Zeichen je Einzugstiefe:
      Level 0: \\uf0b7 in Symbol-Font  → ausgefüllter Kreis (nativer Word-Bullet)
      Level 1: ◦  (U+25E6)            → offener Kreis
      Level 2: ▪  (U+25AA)            → kleines ausgefülltes Quadrat
      Level 3+: Wiederholt Level 2

    WICHTIG: \\uf0b7 ist der Symbol-Font-Private-Use-Codepoint für den
    Word-Standard-Bullet. U+2022 (•) NICHT verwenden — wird in Word
    anders gerendert als \\uf0b7 + Symbol-Font.

    Einzüge: left = 360 + level*360 DXA, hanging = 360 DXA
    """
    bullet_chars = ['\uf0b7', '◦', '▪']
    levels_bullet = ''
    levels_ordered = ''

    for lvl in range(9):
        left = 360 + lvl * 360
        bullet = bullet_chars[min(lvl, len(bullet_chars) - 1)]
        levels_bullet += (
            f'<w:lvl w:ilvl="{lvl}">'
            f'<w:start w:val="1"/>'
            f'<w:numFmt w:val="bullet"/>'
            f'<w:lvlText w:val="{bullet}"/>'
            f'<w:lvlJc w:val="left"/>'
            f'<w:pPr><w:ind w:left="{left}" w:hanging="360"/></w:pPr>'
            f'<w:rPr><w:rFonts w:ascii="Symbol" w:hAnsi="Symbol" w:hint="default"/></w:rPr>'
            f'</w:lvl>'
        )
        levels_ordered += (
            f'<w:lvl w:ilvl="{lvl}">'
            f'<w:start w:val="1"/>'
            f'<w:numFmt w:val="decimal"/>'
            f'<w:lvlText w:val="%{lvl + 1}."/>'
            f'<w:lvlJc w:val="left"/>'
            f'<w:pPr><w:ind w:left="{left}" w:hanging="360"/></w:pPr>'
            f'</w:lvl>'
        )

    num_entries = ''
    for nid in (bullet_numids or []):
        num_entries += f'<w:num w:numId="{nid}"><w:abstractNumId w:val="0"/></w:num>'
    for nid in (ordered_numids or []):
        num_entries += f'<w:num w:numId="{nid}"><w:abstractNumId w:val="1"/></w:num>'
    if not num_entries:
        # Fallback: mindestens eine Bullet-Liste
        num_entries = '<w:num w:numId="100"><w:abstractNumId w:val="0"/></w:num>'

    return (
        '<?xml version="1.0" encoding="UTF-8"?>'
        '<w:numbering xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">'
        f'<w:abstractNum w:abstractNumId="0">{levels_bullet}</w:abstractNum>'
        f'<w:abstractNum w:abstractNumId="1">{levels_ordered}</w:abstractNum>'
        f'{num_entries}'
        '</w:numbering>'
    )


# ── Document XML ───────────────────────────────────────────────────────────────

def generate_document_xml(sop: dict) -> tuple[str, HtmlToWordXml]:
    """
    Erzeugt den vollständigen Inhalt von word/document.xml.

    Struktur des generierten Dokuments:
      1. Titelblock (title_block)
      2. Für jeden Abschnitt:
         a. section_heading()
         b. Konvertierter HTML-Inhalt (HtmlToWordXml.convert_to_list)
         c. keepNext-Verkettung (_chain_section_with_keep_next)
         d. Leerabsatz (außer nach dem letzten Abschnitt)
      3. Quellenabschnitt (sources_block), falls vorhanden
      4. <w:sectPr> mit Seiten- und Randeinstellungen (A4, 8cm Kopf, Ränder)

    Rückgabe: (xml_string, converter)
      converter enthält .used_bullet_numids / .used_ordered_numids
      → wird für generate_numbering_xml() benötigt
    """
    converter = HtmlToWordXml(content_width_dxa=9638)
    body_parts: list[str] = []

    body_parts.append(title_block(
        sop.get('title', 'SOP'),
        sop.get('category', ''),
        sop.get('stand', '')
    ))

    sections = sop.get('sections', [])
    for i, section in enumerate(sections):
        body_parts.append(section_heading(section.get('title', '')))

        content_parts = converter.convert_to_list(section.get('html', ''))
        content_parts = _chain_section_with_keep_next(content_parts)
        body_parts.append('\n'.join(content_parts))

        if i < len(sections) - 1:
            body_parts.append(
                '<w:p><w:pPr><w:spacing w:before="0" w:after="80"/></w:pPr></w:p>'
            )

    sources = sop.get('sources', '')
    if sources:
        body_parts.append(sources_block(sources))

    # Seiteneinstellungen – identisch mit ConSense Masterdatei
    # Papierformat: A4 (11906 × 16838 DXA)
    # Ränder: links/rechts 1134, oben 2126 (Platz für Kopfzeile), unten 1134
    # Kopfzeile: 567 DXA, Fußzeile: 301 DXA
    sect_pr = (
        '<w:sectPr>'
        '<w:headerReference w:type="default" r:id="rId2"/>'
        '<w:headerReference w:type="first" r:id="rId3"/>'
        '<w:footerReference w:type="default" r:id="rId4"/>'
        '<w:footerReference w:type="first" r:id="rId5"/>'
        '<w:type w:val="nextPage"/>'
        '<w:pgSz w:w="11906" w:h="16838"/>'
        '<w:pgMar w:left="1134" w:right="1134" w:gutter="0" '
        'w:header="567" w:top="2126" w:footer="301" w:bottom="1134"/>'
        '<w:pgNumType w:start="1" w:fmt="decimal"/>'
        '<w:formProt w:val="false"/>'
        '<w:titlePg/>'
        '<w:textDirection w:val="lrTb"/>'
        '<w:docGrid w:type="default" w:linePitch="360" w:charSpace="0"/>'
        '</w:sectPr>'
    )

    body_content = '\n'.join(body_parts)
    return (
        f'<?xml version="1.0" encoding="UTF-8"?>'
        f'<w:document {NAMESPACES}>'
        f'<w:body>'
        f'{body_content}'
        f'{sect_pr}'
        f'</w:body>'
        f'</w:document>'
    ), converter


# ── Haupt-Konvertierungsfunktion ───────────────────────────────────────────────

def convert_sop(js_path: Path,
                template_docx: Path,
                output_dir: Path,
                verbose: bool = True) -> Path | None:
    """
    Konvertiert eine SOP-JS-Datei in ein Word-Dokument (.docx).

    Prozess:
      1. JS-Datei lesen und parsen
      2. Temporäres Verzeichnis erstellen
      3. Template-DOCX entpacken (ZIP-Extraktion)
      4. word/document.xml durch generierten Inhalt ersetzen
      5. word/numbering.xml durch generierte Nummerierungsdefinition ersetzen
      6. Sicherstellen dass numbering.xml in _rels/document.xml.rels verknüpft ist
      7. Alle Dateien neu in ein DOCX-ZIP verpacken
      8. DOCX in output_dir speichern

    Gibt den Pfad zur erzeugten .docx zurück, oder None bei Fehler.
    """
    def log(msg):
        if verbose:
            print(msg)

    log(f"  → Lese: {js_path.name}")

    js_text = js_path.read_text(encoding='utf-8')
    try:
        sop = parse_sop_js(js_text)
    except Exception as e:
        log(f"    ⚠ Parsing-Fehler: {e}")
        return None

    if not sop.get('title'):
        log("    ⚠ Kein Titel gefunden — überspringe")
        return None

    log(f"    Titel: {sop['title']}")

    with tempfile.TemporaryDirectory() as tmpdir:
        work_dir = Path(tmpdir) / 'work'

        # Template entpacken
        with zipfile.ZipFile(template_docx, 'r') as z:
            z.extractall(work_dir)

        # document.xml ersetzen
        doc_xml, converter = generate_document_xml(sop)
        (work_dir / 'word' / 'document.xml').write_text(doc_xml, encoding='utf-8')

        # numbering.xml ersetzen
        num_xml = generate_numbering_xml(
            bullet_numids=converter.used_bullet_numids,
            ordered_numids=converter.used_ordered_numids
        )
        (work_dir / 'word' / 'numbering.xml').write_text(num_xml, encoding='utf-8')

        # Relationships: numbering.xml eintragen falls noch nicht vorhanden
        rels_path = work_dir / 'word' / '_rels' / 'document.xml.rels'
        rels = rels_path.read_text(encoding='utf-8')
        if 'numbering' not in rels:
            rels = rels.replace(
                '</Relationships>',
                '<Relationship Id="rId6" '
                'Type="http://schemas.openxmlformats.org/officeDocument/2006/'
                'relationships/numbering" '
                'Target="numbering.xml"/></Relationships>'
            )
            rels_path.write_text(rels, encoding='utf-8')

        # Ausgabepfad
        safe_id = re.sub(r'[^\w\-äöüÄÖÜß]', '_', sop.get('id', js_path.stem))
        out_path = output_dir / f'SOP_{safe_id}.docx'

        # Neu packen
        with zipfile.ZipFile(out_path, 'w', zipfile.ZIP_DEFLATED) as zout:
            for file_path in sorted(work_dir.rglob('*')):
                if file_path.is_file():
                    zout.write(file_path, file_path.relative_to(work_dir))

    log(f"    ✓ DOCX: {out_path.name}")
    return out_path


# ── PDF-Konvertierung ──────────────────────────────────────────────────────────

def convert_to_pdf(docx_path: Path,
                   output_dir: Path,
                   verbose: bool = True) -> Path | None:
    """
    Konvertiert ein Word-Dokument in ein PDF via LibreOffice.

    Verwendet LibreOffice im Headless-Modus:
        libreoffice --headless --convert-to pdf --outdir <output_dir> <docx>

    LibreOffice wird automatisch gefunden (Linux, macOS, Windows).
    Gibt den Pfad zur erzeugten PDF zurück, oder None bei Fehler.

    Fehlerfälle:
      - LibreOffice nicht installiert → Fehlermeldung + None
      - LibreOffice-Prozess schlägt fehl → Fehlermeldung + None
      - Erwartete PDF existiert nach Konvertierung nicht → Fehlermeldung + None
    """
    global LIBREOFFICE_CMD

    if LIBREOFFICE_CMD is None:
        LIBREOFFICE_CMD = _find_libreoffice()

    if not LIBREOFFICE_CMD:
        print(
            "  ⚠ LibreOffice nicht gefunden. PDF-Konvertierung nicht möglich.\n"
            "    Bitte installieren: sudo apt install libreoffice (Linux)\n"
            "    oder: brew install --cask libreoffice (macOS)"
        )
        return None

    expected_pdf = output_dir / (docx_path.stem + '.pdf')

    cmd = [
        LIBREOFFICE_CMD,
        '--headless',
        '--convert-to', 'pdf',
        '--outdir', str(output_dir),
        str(docx_path),
    ]

    try:
        result = subprocess.run(
            cmd,
            capture_output=True,
            text=True,
            timeout=120  # 2 Minuten Timeout pro Datei
        )
        if result.returncode != 0:
            if verbose:
                print(f"    ⚠ LibreOffice-Fehler: {result.stderr.strip()}")
            return None
    except subprocess.TimeoutExpired:
        if verbose:
            print("    ⚠ LibreOffice-Timeout nach 2 Minuten")
        return None
    except Exception as e:
        if verbose:
            print(f"    ⚠ PDF-Konvertierungsfehler: {e}")
        return None

    if expected_pdf.exists():
        if verbose:
            print(f"    ✓ PDF:  {expected_pdf.name}")
        return expected_pdf
    else:
        if verbose:
            print("    ⚠ PDF-Datei wurde nicht erstellt (LibreOffice-Ausgabe prüfen)")
        return None


# ── CLI ────────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(
        description=(
            'SOP-Konverter v2: Konvertiert SOP-JavaScript-Dateien in\n'
            'Word-Dokumente (.docx) und optional in PDFs.'
        ),
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Beispiele:
  %(prog)s akute-divertikulitis.js
  %(prog)s --all /pfad/zu/sops/ --pdf
  %(prog)s --all /pfad/zu/sops/ --pdf-only
  %(prog)s --template vorlage.docx --output /ausgabe/ *.js --pdf --quiet
        """
    )

    parser.add_argument(
        'input', nargs='*',
        help='SOP-JS-Dateien oder Verzeichnisse'
    )
    parser.add_argument(
        '--all', metavar='DIR',
        help='Alle *.js-Dateien in diesem Verzeichnis konvertieren'
    )
    parser.add_argument(
        '--template', metavar='DOCX', default=str(DEFAULT_TEMPLATE),
        help=f'Pfad zur Word-Vorlage (Standard: {DEFAULT_TEMPLATE.name})'
    )
    parser.add_argument(
        '--output', metavar='DIR', default='.',
        help='Ausgabeverzeichnis (Standard: aktuelles Verzeichnis)'
    )
    parser.add_argument(
        '--pdf', action='store_true',
        help='Nach DOCX-Erstellung auch PDF erzeugen (DOCX bleibt erhalten)'
    )
    parser.add_argument(
        '--pdf-only', action='store_true',
        help='PDF erzeugen und DOCX danach löschen'
    )
    parser.add_argument(
        '--quiet', '-q', action='store_true',
        help='Keine Fortschrittsausgabe (nur Fehler)'
    )

    args = parser.parse_args()
    verbose = not args.quiet
    make_pdf = args.pdf or args.pdf_only
    delete_docx = args.pdf_only

    # Template prüfen
    template_path = Path(args.template)
    if not template_path.exists():
        print(f"✗ Vorlage nicht gefunden: {template_path}")
        sys.exit(1)

    # Ausgabeverzeichnis anlegen
    output_dir = Path(args.output)
    output_dir.mkdir(parents=True, exist_ok=True)

    # JS-Dateien sammeln
    js_files: list[Path] = []
    if args.all:
        js_files = sorted(Path(args.all).glob('*.js'))
        if verbose:
            print(f"Gefunden: {len(js_files)} JS-Dateien in {args.all}")
    for inp in args.input:
        p = Path(inp)
        if p.is_dir():
            js_files.extend(sorted(p.glob('*.js')))
        elif p.suffix == '.js':
            js_files.append(p)
        else:
            if verbose:
                print(f"⚠ Überspringe '{inp}' (keine .js-Datei oder -Verzeichnis)")

    if not js_files:
        parser.print_help()
        sys.exit(0)

    if verbose:
        mode = 'DOCX + PDF' if make_pdf and not delete_docx else ('PDF' if delete_docx else 'DOCX')
        print(f"\nKonvertiere {len(js_files)} SOP(s) → {output_dir}/  [{mode}]\n")

    # Konvertierung
    stats = {'docx_ok': 0, 'pdf_ok': 0, 'failed': 0}

    for js_file in js_files:
        try:
            docx_path = convert_sop(js_file, template_path, output_dir, verbose)
            if not docx_path:
                stats['failed'] += 1
                continue
            stats['docx_ok'] += 1

            if make_pdf:
                pdf_path = convert_to_pdf(docx_path, output_dir, verbose)
                if pdf_path:
                    stats['pdf_ok'] += 1
                if delete_docx and docx_path.exists():
                    docx_path.unlink()
                    if verbose:
                        print(f"    ✓ DOCX gelöscht (--pdf-only)")

        except Exception as e:
            if verbose:
                print(f"    ✗ Unerwarteter Fehler: {e}")
            import traceback
            traceback.print_exc()
            stats['failed'] += 1

    if verbose:
        print(f"\n{'─'*60}")
        print(f"✓ Fertig: {stats['docx_ok']} DOCX", end='')
        if make_pdf:
            print(f", {stats['pdf_ok']} PDF", end='')
        if stats['failed']:
            print(f", {stats['failed']} Fehler", end='')
        print(f"\n  Ausgabe: {output_dir.resolve()}")


if __name__ == '__main__':
    main()
