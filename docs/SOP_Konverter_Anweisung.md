**TECHNISCHE AGENTEN-ANWEISUNG**

**SOP-Konverter: JavaScript → Word DOCX + PDF  
Vollständige Implementierungsanweisung**

Klinikum St. Georg / ConSense Master-Vorlage · Version 2.0

Diese Anweisung beschreibt vollständig und erschöpfend, wie ein KI-Agent aus SOP-JavaScript-Quelldateien und einer ConSense-Master-Word-Vorlage (2025_Masterdatei_Consense1.doc) professionelle DOCX-Dokumente erzeugen soll — und diese optional in PDF konvertiert. Jeder Parameter, jede OOXML-Besonderheit und jeder Grenzfall ist dokumentiert. Eine Implementierung, die dieser Anweisung exakt folgt, erzeugt Dokumente, die mit dem Referenzdokument (SOP_akute-alkoholintoxikation.docx) strukturell und visuell identisch sind.

**1 Übersicht und Voraussetzungen**

***

**1.1 Aufgabe**

Jede SOP-JavaScript-Datei enthält eine Standardvorlage mit Titelzeile, Kategorieinfo, Abschnitten (als HTML-Fragmente) und Quellen. Die Aufgabe besteht darin, diese Inhalte in ein voll formatiertes Word-Dokument (.docx) zu überführen, das Kopf- und Fußzeilen aus der ConSense-Masterdatei übernimmt und ein einheitliches Corporate-Design verwendet.

**1.2 Benötigte Dateien**

| **Datei**                       | **Zweck**                                                    | **Pflicht** |
|---------------------------------|--------------------------------------------------------------|-------------|
| SOP-JS-Dateien (\*.js)          | Quelldaten mit Titelzeile, Abschnitten, HTML-Inhalt          | ✓           |
| 2025_Masterdatei_Consense1.docx | Word-Vorlage mit Kopf-/Fußzeile, Stilen, Seiteneinstellungen | ✓           |
| LibreOffice ≥ 6.x               | Für PDF-Konvertierung (headless --convert-to pdf)            | nur für PDF |

**1.3 Python-Abhängigkeiten**

**Installation**

| pip install beautifulsoup4 |
|----------------------------|

Weitere Bibliotheken aus der Python-Standardbibliothek: os, re, sys, json, shutil, argparse, tempfile, zipfile, subprocess, pathlib.

**1.4 Architektur auf einen Blick**

Das Konvertierungsverfahren folgt diesen 7 Schritten:

1.  SOP-JS-Datei lesen und als dict parsen
2.  HtmlToWordXml-Konverter instanziieren (Inhaltbreite: 9638 DXA)
3.  word/document.xml aus dem SOP-dict generieren
4.  word/numbering.xml für Listen generieren
5.  Template-DOCX entpacken, XML-Dateien ersetzen, neu packen
6.  DOCX in Ausgabeverzeichnis speichern
7.  (Optional) LibreOffice aufrufen: DOCX → PDF

**2 Eingabeformat: SOP-JavaScript-Dateien**

***

**2.1 Dateistruktur**

Jede .js-Datei enthält genau einen Aufruf window.SOP_DATA.push({…}). Das übergebene Objekt hat folgende Felder:

**Dateistruktur (Beispiel)**

| window.SOP_DATA.push({<br> id: 'akute-divertikulitis', // URL-Slug, wird als Dateiname genutzt<br> title: 'Akute Divertikulitis', // Dokumenttitel (H1)<br> category: 'Viszeralchirurgie', // Kategorie / Fachbereich<br> stand: '03/2024', // Versionsstand (optional)<br> sections: [<br> {<br> title: 'Diagnosekriterien', // Abschnittsüberschrift<br> html: \`\<p\>…\</p\>\<ul\>…\</ul\>\` // HTML-Inhalt (Template-Literal)<br> },<br> // … weitere Abschnitte<br> ],<br> sources: \`Leitlinie AWMF 2023\<br\>…\` // Quellenangaben (Template-Literal)<br>}); |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

**2.2 HTML-Elemente im sections[].html-Feld**

Folgende HTML-Elemente können auftreten und müssen korrekt konvertiert werden:

| **HTML-Element**                | **Bedeutung**                              | **Word-Ausgabe**                   |
|---------------------------------|--------------------------------------------|------------------------------------|
| \<p\>…\</p\>                    | Absatz, mit Inline-Formatierung            | Normaler Textabsatz                |
| \<h3\>…\</h3\>                  | Unterüberschrift Ebene 1                   | Fett, 11pt, keepNext               |
| \<h4\>…\</h4\>                  | Unterüberschrift Ebene 2                   | Fett, 10pt, keepNext               |
| \<ul\>…\</ul\>                  | Aufzählungsliste (verschachtelt)           | Bullet-Liste, numId-eindeutig      |
| \<ol\>…\</ol\>                  | Nummerierte Liste                          | Dezimale Liste, numId-eindeutig    |
| \<li\>…\</li\>                  | Listenelement (ggf. mit Sub-\<ul\>/\<ol\>) | w:numPr mit ilvl                   |
| \<table\>                       | Datentabelle (th/td)                       | Word-Tabelle, gleichmäßige Spalten |
| \<div class="callout-wichtig"\> | Gelbe Warnbox                              | Tabelle mit FFF3CD Hintergrund     |
| \<div class="callout-cave"\>    | Rote Cave-Box                              | Tabelle mit F8D7DA Hintergrund     |
| \<div class="callout-hinweis"\> | Blaue Info-Box                             | Tabelle mit D1ECF1 Hintergrund     |
| \<strong\>, \<b\>               | Fettschrift                                | w:b / w:bCs im Run                 |
| \<em\>, \<i\>                   | Kursiv                                     | w:i / w:iCs im Run                 |
| \<br\>                          | Zeilenumbruch                              | w:br im Run                        |
| \<small\>                       | Kleinsttext                                | 8.5pt, \#666666                    |
| \<span\>, \<a\>                 | Inline-Wrapper                             | Kein Styling (transparent)         |

**3 Template-DOCX: Struktur und Verwendung**

***

**3.1 DOCX ist ein ZIP-Archiv**

Eine .docx-Datei ist ein ZIP-Archiv. Sie wird mit zipfile.ZipFile entpackt, die relevanten XML-Dateien werden ersetzt, und anschließend wird das Archiv neu gepackt. Das Template wird nie direkt modifiziert — es wird stets als Read-Only-Basis in ein temporäres Verzeichnis entpackt.

**Template entpacken, modifizieren, neu packen**

| with zipfile.ZipFile(template_docx, 'r') as z:<br> z.extractall(work_dir) \# Entpacken in tempfile.TemporaryDirectory<br>(work_dir / 'word' / 'document.xml').write_text(new_doc_xml, encoding='utf-8')<br>(work_dir / 'word' / 'numbering.xml').write_text(new_numbering_xml, encoding='utf-8')<br>with zipfile.ZipFile(out_path, 'w', zipfile.ZIP_DEFLATED) as zout:<br> for file_path in sorted(work_dir.rglob('\*')):<br> if file_path.is_file():<br> zout.write(file_path, file_path.relative_to(work_dir)) |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

**3.2 Relevante Dateien im ZIP**

| **Pfad im ZIP**               | **Inhalt / Verwendung**                                       |
|-------------------------------|---------------------------------------------------------------|
| word/document.xml             | Haupttext — wird vollständig durch generierten Inhalt ERSETZT |
| word/numbering.xml            | Listen-Nummerierungsdefinitionen — wird vollständig ERSETZT   |
| word/_rels/document.xml.rels  | Beziehungen — numbering.xml muss eingetragen sein             |
| word/header1.xml, header2.xml | Kopfzeilen des Templates — werden NICHT verändert             |
| word/footer1.xml, footer2.xml | Fußzeilen des Templates — werden NICHT verändert              |
| word/styles.xml               | Zeichenformate — wird NICHT verändert                         |
| [Content_Types].xml           | MIME-Typen — wird NICHT verändert                             |

**3.3 Relationship-Eintrag für numbering.xml**

Falls das Template kein numbering.xml enthält (oder der Relationship-Eintrag fehlt), muss dieser manuell in word/_rels/document.xml.rels eingefügt werden:

**Relationship sicherstellen**

| rels = rels_path.read_text(encoding='utf-8')<br>if 'numbering' not in rels:<br> rels = rels.replace(<br> '\</Relationships\>',<br> '\<Relationship Id="rId6" '<br> 'Type="http://schemas.openxmlformats.org/officeDocument/2006/'<br> 'relationships/numbering" '<br> 'Target="numbering.xml"/\>\</Relationships\>'<br> )<br> rels_path.write_text(rels, encoding='utf-8') |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

**4 JavaScript-Parsing**

***

**4.1 Hauptparser (JSON-basiert)**

Der Primärparser extrahiert den Objektliteral aus window.SOP_DATA.push(…) und konvertiert ihn schrittweise in valides JSON:

8.  Kommentare entfernen (// bis Zeilenende)
9.  Template-Literale (backtick-Strings) in JSON-kompatible Double-Quote-Strings umwandeln — doppelte Anführungszeichen im Inhalt werden escaped
10. Schlüssel ohne Anführungszeichen erhalten sie durch Regex-Substitution: r'(\\w+):' → r'"\\1":'
11. JSON-Parsing mit json.loads()

**4.2 Fallback-Parser (Regex-basiert)**

Falls JSON-Parsing fehlschlägt (z.B. bei ungewöhnlichen Sonderzeichen), parst der Fallback-Parser alle Felder direkt mit regulären Ausdrücken. Abschnitte werden mit dem Muster \\{\\s\*title:\\s\*["']([\^"']+)["']\\s\*,\\s\*html:\\s\*\`([\\s\\S]\*?)\`\\s\*\\} extrahiert.

| **⚠ Wichtig:** Das sources-Feld kann HTML-Tags (insbesondere \<br\>) enthalten. Diese müssen VOR der Ausgabe durch Newlines ersetzt und alle verbleibenden HTML-Tags entfernt werden. |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

**5 OOXML-Spezifikation für word/document.xml**

***

**5.1 Namespaces**

Das \<w:document\>-Root-Element muss exakt diese Namespace-Deklarationen tragen (aus der ConSense Masterdatei übernommen, mc:Ignorable für moderne Erweiterungen):

**Vollständige Namespace-Deklaration**

| xmlns:o = "urn:schemas-microsoft-com:office:office"<br>xmlns:r = "http://schemas.openxmlformats.org/officeDocument/2006/relationships"<br>xmlns:v = "urn:schemas-microsoft-com:vml"<br>xmlns:w = "http://schemas.openxmlformats.org/wordprocessingml/2006/main"<br>xmlns:w10 = "urn:schemas-microsoft-com:office:word"<br>xmlns:wp = "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing"<br>xmlns:wps = "http://schemas.microsoft.com/office/word/2010/wordprocessingShape"<br>xmlns:wpg = "http://schemas.microsoft.com/office/word/2010/wordprocessingGroup"<br>xmlns:mc = "http://schemas.openxmlformats.org/markup-compatibility/2006"<br>xmlns:wp14= "http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing"<br>xmlns:w14 = "http://schemas.microsoft.com/office/word/2010/wordml"<br>xmlns:w15 = "http://schemas.microsoft.com/office/word/2012/wordml"<br>mc:Ignorable = "w14 wp14 w15" |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

**5.2 Seiteneinstellungen (\<w:sectPr\>)**

Diese \<w:sectPr\> schließt den \<w:body\>-Inhalt ab (Werte aus ConSense Masterdatei):

| **Attribut / Element**   | **Wert** | **Bedeutung**                           |
|--------------------------|----------|-----------------------------------------|
| w:pgSz w:w               | 11906    | A4-Breite in DXA (1/1440 Zoll = 1 Twip) |
| w:pgSz w:h               | 16838    | A4-Höhe in DXA                          |
| w:pgMar w:left / w:right | 1134     | Seitenrand links/rechts (\~2 cm)        |
| w:pgMar w:top            | 2126     | Oberer Rand inkl. Kopfzeilen-Platz      |
| w:pgMar w:bottom         | 1134     | Unterer Rand                            |
| w:pgMar w:header         | 567      | Kopfzeilen-Abstand vom Rand             |
| w:pgMar w:footer         | 301      | Fußzeilen-Abstand vom Rand              |
| w:pgMar w:gutter         | 0        | Bundsteg (kein Heftrand)                |
| w:titlePg                | (leer)   | Erste Seite hat eigene Kopf-/Fußzeile   |
| headerReference rId2     | default  | Kopfzeile Seiten 2+                     |
| headerReference rId3     | first    | Kopfzeile Seite 1                       |
| footerReference rId4     | default  | Fußzeile Seiten 2+                      |
| footerReference rId5     | first    | Fußzeile Seite 1                        |

| **ℹ Hinweis:** Die rId-Werte (rId2–rId5) verweisen auf Kopf-/Fußzeilen-Dateien im Template-ZIP. Sie müssen exakt so übernommen werden — sie dürfen nicht neu vergeben werden. |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

**5.3 Seitennutzbreite**

Die Nutzbreite für alle Inhaltelemente (Tabellen, Callout-Boxen) berechnet sich:  
11906 − 1134 − 1134 = **9638 DXA** (≈ 17 cm). Dieser Wert muss für alle w:tblW-Attribute und Callout-Tabellenbreiten verwendet werden.

**6 Vollständige Styling-Referenz**

***

**6.1 Schriften und Farben**

| **Element**           | **Schriftgröße**      | **Farbe (Hex)** | **Besonderheiten**                   |
|-----------------------|-----------------------|-----------------|--------------------------------------|
| Titel (SOP-Name)      | 36 Halbpunkte = 18pt  | \#1F3864        | Fett, w:b + w:bCs, spacing_after=120 |
| Kategorie/Stand       | 20 Halbpunkte = 10pt  | \#4472C4        | spacing_after=200                    |
| Abschnitts-Heading    | 26 Halbpunkte = 13pt  | \#2E75B6        | Fett, blaue Unterlinie 3pt, keepNext |
| h3 (Unterüberschrift) | 22 Halbpunkte = 11pt  | Standard        | Fett, sp_before=160, sp_after=80     |
| h4 (Unterabschnitt)   | 20 Halbpunkte = 10pt  | Standard        | Fett, sp_before=120, sp_after=60     |
| Fließtext             | Standard (Vorlage)    | Standard        | spacing: 60/80, keepLines            |
| Listenelemente        | Standard              | Standard        | spacing: 40/40, keepLines            |
| Tabelleninhalt        | Standard              | Standard        | spacing: 60/60, keepLines            |
| Tabellenheader (th)   | Standard              | Standard        | Fett, Hintergrund \#D9E2F3           |
| Quellentext           | 17 Halbpunkte = 8.5pt | \#666666        | hängendes Einzug 360 DXA             |
| Quellen-Heading       | 18 Halbpunkte = 9pt   | \#555555        | Fett, grauer Trennstrich oben        |
| small-Text            | 17 Halbpunkte = 8.5pt | \#666666        | –                                    |

**6.2 Callout-Box-Farben**

| **CSS-Klasse**  | **Hintergrund (bg)** | **Rahmenfarbe (border)** | **Label** |
|-----------------|----------------------|--------------------------|-----------|
| callout-wichtig | \#FFF3CD (hellgelb)  | \#FFC107 (amber)         | ⚠ Wichtig |
| callout-cave    | \#F8D7DA (hellrot)   | \#DC3545 (rot)           | ⚠ Cave    |
| callout-hinweis | \#D1ECF1 (hellblau)  | \#17A2B8 (blau)          | ℹ Hinweis |

**6.3 Tabellenrahmen**

| **⚠ KRITISCH – Border-Attributnamen:** Tabellen-Border-Elemente MÜSSEN w:left und w:right heißen. NICHT w:start und w:end verwenden! Letztere sind zwar im neueren OOXML-Standard definiert, werden aber von Microsoft Word 2013/2016 nicht korrekt gerendert. Dies betrifft tblBorders, tcBorders und tblCellMar gleichermaßen. |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

**Korrekte Border-Benennung**

| \<!-- RICHTIG ✓ --\><br>\<w:tblBorders\><br> \<w:top w:val="single" w:sz="4" w:space="0" w:color="AAAAAA"/\><br> \<w:left w:val="single" w:sz="4" w:space="0" w:color="AAAAAA"/\><br> \<w:bottom w:val="single" w:sz="4" w:space="0" w:color="AAAAAA"/\><br> \<w:right w:val="single" w:sz="4" w:space="0" w:color="AAAAAA"/\><br>\</w:tblBorders\><br>\<!-- FALSCH ✗ — NICHT SO! --\><br>\<w:tblBorders\><br> \<w:start w:val="single" .../\> \<!-- VERBOTEN --\><br> \<w:end w:val="single" .../\> \<!-- VERBOTEN --\><br>\</w:tblBorders\> |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

**7 Listensystem: numbering.xml**

***

**7.1 Aufbau von numbering.xml**

Die Datei enthält zwei abstractNum-Blöcke und eine variable Anzahl von num-Einträgen. Die abstractNum-Blöcke definieren das Format für alle 9 Einzugstiefen (ilvl 0–8). Jeder num-Eintrag verweist auf einen abstractNum und stellt eine unabhängige Nummerierungsinstanz dar.

**Aufbau numbering.xml (gekürzt)**

| \<?xml version="1.0" encoding="UTF-8"?\><br>\<w:numbering xmlns:w="…"\><br> \<!-- abstractNumId=0: Bullet-Listen --\><br> \<w:abstractNum w:abstractNumId="0"\><br> \<w:lvl w:ilvl="0"\><br> \<w:start w:val="1"/\><br> \<w:numFmt w:val="bullet"/\><br> \<w:lvlText w:val="&\#xF0B7;"/\> \<!-- Symbol-Font Bullet! --\><br> \<w:lvlJc w:val="left"/\><br> \<w:pPr\>\<w:ind w:left="360" w:hanging="360"/\>\</w:pPr\><br> \<w:rPr\>\<w:rFonts w:ascii="Symbol" w:hAnsi="Symbol" w:hint="default"/\>\</w:rPr\><br> \</w:lvl\><br> \<!-- Level 1: ◦ Level 2+: ▪ Indent = 360 + level\*360 --\><br> \</w:abstractNum\><br> \<!-- abstractNumId=1: Nummerierte Listen --\><br> \<w:abstractNum w:abstractNumId="1"\><br> \<w:lvl w:ilvl="0"\><br> \<w:start w:val="1"/\><br> \<w:numFmt w:val="decimal"/\><br> \<w:lvlText w:val="%1."/\><br> \<w:lvlJc w:val="left"/\><br> \<w:pPr\>\<w:ind w:left="360" w:hanging="360"/\>\</w:pPr\><br> \</w:lvl\><br> \<!-- Weitere Level: %2., %3., ... --\><br> \</w:abstractNum\><br> \<!-- Ein w:num-Eintrag pro top-level Liste im Dokument --\><br> \<w:num w:numId="100"\>\<w:abstractNumId w:val="0"/\>\</w:num\> \<!-- Liste 1 --\><br> \<w:num w:numId="101"\>\<w:abstractNumId w:val="0"/\>\</w:num\> \<!-- Liste 2 --\><br> \<w:num w:numId="200"\>\<w:abstractNumId w:val="1"/\>\</w:num\> \<!-- Num-Liste 1 --\><br>\</w:numbering\> |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

**7.2 Eindeutige numIds pro Listensekion**

| **⚠ KRITISCH – numId-Eindeutigkeit:** Jede top-level \<ul\> oder \<ol\> MUSS eine eigene, einzigartige numId erhalten. Würde man allen Bullet-Listen dieselbe numId (z.B. 10) zuweisen, behandelt Word alle Listenabschnitte als Fortsetzung einer einzigen globalen Liste — visuelle Artefakte und falsche Bullet-Abstände sind die Folge. |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

Implementierungsregel:

-   Bullet-Listen erhalten numIds ab 100 (aufsteigend: 100, 101, 102, …)
-   Nummerierte Listen erhalten numIds ab 200 (aufsteigend: 200, 201, 202, …)
-   Sub-Listen (verschachtelte ul/ol) erben die numId der Elternliste, erhöhen aber ilvl
-   Die verwendeten numIds werden während der Konvertierung gesammelt und an generate_numbering_xml() übergeben

**7.3 Bullet-Zeichen: \\uf0b7 statt U+2022**

| **⚠ KRITISCH – Bullet-Zeichen:** Als Standard-Bullet (Level 0) MUSS der Symbol-Font-Private-Use-Codepoint \\uf0b7 (XML: &\#xF0B7;) verwendet werden — kombiniert mit w:rFonts w:ascii="Symbol" w:hAnsi="Symbol" w:hint="default". NICHT U+2022 (•, Unicode BULLET) verwenden! Dieses wird zwar korrekt angezeigt, aber Word erkennt es nicht als seinen nativen Bullet-Glyph und rendert es mit anderen Abständen. |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

**Korrekte Bullet-Definition**

| \# In Python:<br>bullet_chars = ['\\uf0b7', '◦', '▪']<br>\# Level 0 Level 1 Level 2+<br>\# Im XML für Level 0:<br>\<w:lvlText w:val="&\#xF0B7;"/\><br>\<w:rPr\><br> \<w:rFonts w:ascii="Symbol" w:hAnsi="Symbol" w:hint="default"/\><br>\</w:rPr\> |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

**8 Leerzeilen und Seitenumbruchschutz**

***

**8.1 Pflicht-Leerzeile vor Callout-Boxen und Tabellen**

Unmittelbar VOR jeder Callout-Box (\<div class="callout-\*"\> und jeder regulären Tabelle (\<table\>) muss ein Leerabsatz eingefügt werden:

**Leerzeile vor Callout/Tabelle**

| spacer = '\<w:p\>\<w:pPr\>\<w:spacing w:before="0" w:after="60"/\>\</w:pPr\>\</w:p\>'<br>parts.append(spacer) \# BEVOR die Tabelle/Box hinzugefügt wird<br>parts.append(callout_xml) \# dann die Box |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

Analog fügt die Callout-Methode NACH der Box ebenfalls einen Leerabsatz ein. Die Verantwortung für den Absatz VOR der Box liegt in \_process_nodes, nicht in der \_callout()/_table()-Methode.

**8.2 keepNext-Verkettung: Abschnitte zusammenhalten**

Um Seitenumbrüche mitten in inhaltlich zusammengehörigen Abschnitten zu verhindern, werden alle \<w:p\>-Elemente eines Abschnitts (außer dem letzten) mit \<w:keepNext/\> versehen. Word schiebt dann den gesamten Abschnitt auf eine neue Seite, wenn er nicht vollständig auf die aktuelle passt.

**Algorithmus der keepNext-Verkettung**

12. convert_to_list() liefert die Absätze als Python-Liste
13. Letzten \<w:p\>-Index in der Liste ermitteln
14. Alle \<w:p\>-Elemente außer dem letzten: \<w:keepNext/\> injizieren
15. Sonderfall: Absatz unmittelbar vor einer \<w:tbl\> bekommt IMMER keepNext (auch wenn er der letzte wäre)

**\_inject_keep_next() – drei Fälle**

| def \_inject_keep_next(para_xml: str) -\> str:<br> if '\<w:keepNext/\>' in para_xml:<br> return para_xml \# Idempotent<br> if '\<w:pPr\>' in para_xml: \# Fall 1: \<w:pPr\> ohne Attribute<br> return para_xml.replace('\<w:pPr\>', '\<w:pPr\>\<w:keepNext/\>', 1)<br> elif '\<w:pPr ' in para_xml: \# Fall 2: \<w:pPr mit Attributen\><br> return re.sub(r'(\<w:pPr[\^\>]\*\>)', r'\\1\<w:keepNext/\>', para_xml, count=1)<br> else: \# Fall 3: kein \<w:pPr\> vorhanden<br> return re.sub(<br> r'(\<w:p(?:\\s[\^\>]\*)?\>)',<br> r'\\1\<w:pPr\>\<w:keepNext/\>\</w:pPr\>',<br> para_xml, count=1<br> ) |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

| **ℹ Hinweis:** Bei Abschnitten, die länger als eine Druckseite sind, ignoriert Word keepNext zwangsweise — es ist unmöglich, etwas auf eine Seite zu packen, das nicht passt. In der Praxis betrifft das nur ungewöhnlich lange SOP-Abschnitte. |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

**8.3 keepLines auf allen Absätzen**

\<w:keepLines/\> verhindert zusätzlich, dass Word einen einzelnen Absatz in der Mitte umbrechen. Es wird auf allen erzeugten Absätzen gesetzt (Fließtext, Listenelemente, Tabelleninhalte).

**8.4 cantSplit auf Tabellenzeilen**

\<w:cantSplit/\> in \<w:trPr\> verhindert, dass eine Tabellenzeile durch einen Seitenumbruch geteilt wird. Es wird auf ALLEN Zeilen gesetzt — sowohl in Datentabellen als auch in Callout-Box-Tabellen.

**9 Callout-Boxen: vollständige XML-Spezifikation**

***

**Vollständige Callout-Box-XML-Struktur**

| \<w:tbl\><br> \<w:tblPr\><br> \<w:tblW w:w="9638" w:type="dxa"/\> \<!-- Volle Seitenbreite --\><br> \<w:tblBorders\><br> \<w:top w:val="single" w:sz="12" w:space="0" w:color="{border}"/\><br> \<w:left w:val="single" w:sz="12" w:space="0" w:color="{border}"/\><br> \<w:bottom w:val="single" w:sz="4" w:space="0" w:color="{border}"/\><br> \<w:right w:val="single" w:sz="4" w:space="0" w:color="{border}"/\><br> \</w:tblBorders\><br> \<w:tblCellMar\><br> \<w:top w:w="100" w:type="dxa"/\><br> \<w:left w:w="160" w:type="dxa"/\><br> \<w:bottom w:w="100" w:type="dxa"/\><br> \<w:right w:w="160" w:type="dxa"/\><br> \</w:tblCellMar\><br> \</w:tblPr\><br> \<w:tblGrid\>\<w:gridCol w:w="9638"/\>\</w:tblGrid\><br> \<w:tr\><br> \<w:trPr\>\<w:cantSplit/\>\</w:trPr\> \<!-- Kein Seitenumbruch in Box --\><br> \<w:tc\><br> \<w:tcPr\><br> \<w:tcW w:w="9638" w:type="dxa"/\><br> \<w:tcBorders\> \<!-- Gleiche Rahmen wie tblBorders --\><br> \<w:top w:val="single" w:sz="12" w:space="0" w:color="{border}"/\><br> \<w:left w:val="single" w:sz="12" w:space="0" w:color="{border}"/\><br> ...<br> \</w:tcBorders\><br> \<w:shd w:val="clear" w:color="auto" w:fill="{bg}"/\> \<!-- Hintergrundfarbe --\><br> \</w:tcPr\><br> \<!-- HIER: rekursiv konvertierter HTML-Inhalt des div --\><br> \</w:tc\><br> \</w:tr\><br>\</w:tbl\><br>\<!-- Leerabsatz nach Box: --\><br>\<w:p\>\<w:pPr\>\<w:spacing w:before="0" w:after="60"/\>\</w:pPr\>\</w:p\> |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

Rahmenbreite: oben und links 12pt (dick, auffällig), unten und rechts 4pt (dezent). Dies erzeugt optisch eine L-förmige Hervorhebung. Beide Angaben verwenden w:left/w:right — nicht w:start/w:end.

**10 Datentabellen: vollständige XML-Spezifikation**

***

**10.1 Spaltenberechnung**

Spaltenbreiten werden gleichmäßig verteilt. Rundungsfehler gehen auf die letzte Spalte:  
col_width = 9638 // n_cols; col_widths[-1] += 9638 − sum(col_widths)  
Maximale Spaltenanzahl wird aus allen tr-Zeilen ermittelt (max(len(th/td) for tr in all_rows)).

**10.2 Header-Zeilen**

Wenn eine Zeile mindestens ein \<th\>-Element enthält, gilt sie als Kopfzeile. Kopfzeilen erhalten: Hintergrund \#D9E2F3, fetten Text, und \<w:tblHeader/\> in \<w:trPr\>.

**10.3 Rahmen**

Alle Tabellen-Rahmen: 4pt single, Farbe \#AAAAAA. Die tblBorders enthält zusätzlich w:insideH und w:insideV (horizontale und vertikale Innenrahmen). tcBorders auf Zellebene wiederholen die äußeren Rahmen für konsistente Darstellung.

| **⚠ Erinnerung:** Auch in Datentabellen gilt: w:left/w:right verwenden, NICHT w:start/w:end! |
|----------------------------------------------------------------------------------------------|

**11 Abschnitte und Dokumentstruktur**

***

**11.1 Titelblock**

**Titelblock-XML**

| \<!-- Zeile 1: Titel --\><br>\<w:p\><br> \<w:pPr\><br> \<w:spacing w:before="0" w:after="120"/\><br> \<w:keepNext/\><br> \</w:pPr\><br> \<w:r\><br> \<w:rPr\><br> \<w:b/\>\<w:bCs/\><br> \<w:sz w:val="36"/\>\<w:szCs w:val="36"/\> \<!-- 18pt --\><br> \<w:color w:val="1F3864"/\> \<!-- Dunkelblau --\><br> \</w:rPr\><br> \<w:t\>Akute Divertikulitis\</w:t\><br> \</w:r\><br>\</w:p\><br>\<!-- Zeile 2: Kategorie \| Stand --\><br>\<w:p\><br> \<w:pPr\>\<w:spacing w:before="0" w:after="200"/\>\</w:pPr\><br> \<w:r\><br> \<w:rPr\><br> \<w:color w:val="4472C4"/\><br> \<w:sz w:val="20"/\>\<w:szCs w:val="20"/\> \<!-- 10pt --\><br> \</w:rPr\><br> \<w:t\>Viszeralchirurgie \| Stand: 03/2024\</w:t\><br> \</w:r\><br>\</w:p\> |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

**11.2 Abschnitts-Heading**

**Abschnitts-Heading-XML**

| \<w:p\><br> \<w:pPr\><br> \<w:spacing w:before="200" w:after="80"/\><br> \<w:keepNext/\> \<!-- Hält Überschrift mit folgendem Inhalt zusammen --\><br> \<w:keepLines/\><br> \<w:pBdr\><br> \<w:bottom w:val="single" w:sz="6" w:space="1" w:color="2E75B6"/\><br> \</w:pBdr\><br> \</w:pPr\><br> \<w:r\><br> \<w:rPr\><br> \<w:b/\>\<w:bCs/\><br> \<w:color w:val="2E75B6"/\><br> \<w:sz w:val="26"/\>\<w:szCs w:val="26"/\> \<!-- 13pt --\><br> \</w:rPr\><br> \<w:t\>Diagnosekriterien\</w:t\><br> \</w:r\><br>\</w:p\> |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

**11.3 Trennabsatz zwischen Abschnitten**

Zwischen zwei Abschnitten (außer nach dem letzten) wird ein leerer Absatz mit 80 Twips Nachfolgeabstand eingefügt:

**Trennabsatz**

| \<w:p\>\<w:pPr\>\<w:spacing w:before="0" w:after="80"/\>\</w:pPr\>\</w:p\> |
|----------------------------------------------------------------------------|

**11.4 Quellenabschnitt**

Die Quellen erscheinen am Dokumentende. Aus dem sources-String werden erst \<br\>-Tags durch Newlines ersetzt, dann alle HTML-Tags entfernt. Jede verbleibende Zeile wird als eigener Absatz mit hängendem Einzug (w:ind w:left=360 w:hanging=360) ausgegeben.

**12 PDF-Konvertierung via LibreOffice**

***

**12.1 Befehl**

**LibreOffice-Konvertierungsbefehl**

| libreoffice --headless --convert-to pdf --outdir /ausgabe/ dokument.docx |
|--------------------------------------------------------------------------|

In Python:

**PDF-Konvertierung in Python**

| import subprocess<br>result = subprocess.run(<br> ['libreoffice', '--headless', '--convert-to', 'pdf',<br> '--outdir', str(output_dir), str(docx_path)],<br> capture_output=True,<br> text=True,<br> timeout=120 \# 2 Minuten Timeout<br>)<br>\# LibreOffice benennt die PDF-Datei exakt wie die DOCX-Datei:<br>expected_pdf = output_dir / (docx_path.stem + '.pdf') |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

**12.2 LibreOffice-Erkennung**

LibreOffice muss auf dem System gefunden werden. Mögliche Befehlsnamen:

-   libreoffice (Linux, Standard-Paketinstallation)
-   soffice (LibreOffice alternative Bezeichnung)
-   /usr/bin/libreoffice oder /usr/bin/soffice
-   /Applications/LibreOffice.app/Contents/MacOS/soffice (macOS)
-   C:\\Program Files\\LibreOffice\\program\\soffice.exe (Windows)

shutil.which() prüft, ob der Befehl im PATH gefunden wird. Path.exists() prüft absolute Pfade.

**12.3 --pdf-only Modus**

Im --pdf-only Modus wird die DOCX-Datei nach erfolgreicher PDF-Konvertierung wieder gelöscht: docx_path.unlink(). Die PDF-Datei verbleibt im Ausgabeverzeichnis.

**12.4 Fehlerfälle**

| **Fehlerfall**                     | **Reaktion**                                                 |
|------------------------------------|--------------------------------------------------------------|
| LibreOffice nicht gefunden         | Fehlermeldung + None zurückgeben (kein Abbruch anderer SOPs) |
| returncode != 0                    | stderr ausgeben + None                                       |
| Timeout nach 120s                  | subprocess.TimeoutExpired abfangen + None                    |
| PDF-Datei fehlt nach Konvertierung | Fehlermeldung + None                                         |

**13 CLI-Schnittstelle**

***

| **Parameter**   | **Typ**           | **Standard**                    | **Beschreibung**                      |
|-----------------|-------------------|---------------------------------|---------------------------------------|
| input           | Positional (0..n) | –                               | JS-Dateien oder Verzeichnisse         |
| --all DIR       | Option            | –                               | Alle \*.js-Dateien in DIR             |
| --template DOCX | Option            | 2025_Masterdatei_Consense1.docx | Pfad zur Word-Vorlage                 |
| --output DIR    | Option            | . (aktuell)                     | Ausgabeverzeichnis (wird angelegt)    |
| --pdf           | Flag              | False                           | Zusätzlich PDF erzeugen (DOCX bleibt) |
| --pdf-only      | Flag              | False                           | PDF erzeugen, DOCX danach löschen     |
| --quiet / -q    | Flag              | False                           | Keine Fortschrittsausgabe             |

**Verwendungsbeispiele**

| \# Einzelne SOP:<br>python sop_converter_v2.py akute-divertikulitis.js<br>\# Alle SOPs + PDFs:<br>python sop_converter_v2.py --all /pfad/zu/sops/ --pdf<br>\# Nur PDFs, DOCX nicht behalten:<br>python sop_converter_v2.py --all /pfad/zu/sops/ --pdf-only<br>\# Eigenes Template + Ausgabeordner:<br>python sop_converter_v2.py --template vorlage.docx --output /out/ \*.js --pdf<br>\# Stille Ausführung (z.B. in Batch-Skripten):<br>python sop_converter_v2.py --all . --pdf --quiet |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

**14 Fehlerbehandlung und Grenzfälle**

***

| **Situation**                               | **Verhalten**                                                                 |
|---------------------------------------------|-------------------------------------------------------------------------------|
| window.SOP_DATA.push() nicht gefunden       | ValueError → Abschnitt wird als 'Parsing-Fehler' protokolliert, nächste Datei |
| Kein 'title'-Feld                           | Warnung ausgeben, Datei überspringen                                          |
| sections[]-Array leer                       | Nur Titelblock + Quellen ausgeben (kein Fehler)                               |
| HTML-Inhalt leer                            | Kein Absatz wird erzeugt (kein Absturz)                                       |
| Leere Listenelemente \<li\>\</li\>          | Leerer Absatz mit numPr (bleibt als Leerzeile in der Liste)                   |
| Tabelle ohne Zeilen / ohne Spalten          | Leeren String zurückgeben (Tabelle wird ausgelassen)                          |
| Callout-div ohne Inhalt                     | Leere Liste zurückgeben (Box wird ausgelassen)                                |
| Mehr als 8 Listenverschachtelungsebenen     | ilvl auf max. 8 gekappt (Word-Limit)                                          |
| Sonderzeichen im Titel/Text                 | xml.sax.saxutils.escape() wandelt &, \<, \> in XML-Entities um                |
| Leerzeichen am Anfang/Ende von Textinhalten | xml:space="preserve" wird auf w:t gesetzt                                     |
| Template-DOCX ohne numbering.xml            | numbering.xml wird erzeugt und Relationship wird in \_rels eingefügt          |
| LibreOffice nicht installiert               | Fehlermeldung (DOCX bleibt erhalten), kein Gesamtabbruch                      |

**15 Implementierungs-Checkliste**

***

Diese Checkliste fasst alle kritischen Punkte zusammen, die korrekt implementiert sein müssen, damit das Ergebnis mit der Referenz übereinstimmt:

-   **☑ OOXML-Namespaces:**  Vollständige Namespace-Deklaration im w:document-Root (14 Namespaces, mc:Ignorable)
-   **☑ Seitenformat:**  A4 (11906×16838 DXA), Ränder wie ConSense-Vorlage, Kopf-/Fußzeilen-Referenzen rId2–rId5
-   **☑ Inhaltbreite:**  9638 DXA für alle Tabellen und Callout-Boxen
-   **☑ Bullet-Zeichen:**  \\uf0b7 + Symbol-Font (NICHT U+2022 •)
-   **☑ Border-Benennung:**  w:left/w:right (NICHT w:start/w:end) in tblBorders, tcBorders, tblCellMar
-   **☑ Unique numIds:**  Jede top-level ul/ol erhält eine eigene numId (Bullets ab 100, Ordered ab 200)
-   **☑ Sub-Listen:**  Erben numId der Elternliste, erhöhen ilvl
-   **☑ keepNext-Kette:**  Alle Absätze eines Abschnitts außer dem letzten mit keepNext versehen
-   **☑ keepLines:**  Auf allen Textabsätzen, Listenelementen und Tabelleninhalten
-   **☑ cantSplit:**  Auf allen w:trPr-Elementen in Tabellen und Callout-Boxen
-   **☑ Leerzeile vor Box/Tabelle:**  Spacer-Absatz (spacing after=60) VOR jeder Callout-Box und Datentabelle
-   **☑ Leerzeile nach Box:**  Spacer-Absatz (spacing after=60) NACH jeder Callout-Box
-   **☑ HTML-Entities:**  xml.sax.saxutils.escape() für alle Textinhalte
-   **☑ xml:space=preserve:**  Bei w:t mit führenden/nachfolgenden Leerzeichen
-   **☑ sources-Bereinigung:**  \<br\> → \\n, HTML-Tags entfernen
-   **☑ Relationship-Eintrag:**  numbering.xml in \_rels/document.xml.rels eingetragen
-   **☑ ZIP-Komprimierung:**  ZIP_DEFLATED beim Neupacken des DOCX
-   **☑ LibreOffice-Timeout:**  120 Sekunden Timeout bei PDF-Konvertierung
-   **☑ Dateinamen-Sicherheit:**  Regex-Bereinigung des SOP-id-Feldes für Dateinamen
-   **☑ Temporäre Verzeichnisse:**  tempfile.TemporaryDirectory() — wird automatisch aufgeräumt

**Anhang Skriptverwendung (sop_converter_v2.py)**

***

Das vollständige Skript sop_converter_v2.py ist eigenständig ausführbar und implementiert alle beschriebenen Mechanismen. Kopfzeilen aus der Masterdatei werden automatisch übernommen. Das Skript erwartet 2025_Masterdatei_Consense1.docx im selben Verzeichnis (oder via --template).

**Vollständige Batch-Konvertierung**

| \# Alle 19 SOPs konvertieren, DOCX und PDF ausgeben:<br>python sop_converter_v2.py \\<br> --all /pfad/zu/sop-js-dateien/ \\<br> --template /pfad/zu/2025_Masterdatei_Consense1.docx \\<br> --output /pfad/zu/ausgabe/ \\<br> --pdf<br>\# Ergebnis-Struktur:<br>/ausgabe/<br>├── SOP_abdominelle-schmerzen.docx<br>├── SOP_abdominelle-schmerzen.pdf<br>├── SOP_aecopd.docx<br>├── SOP_aecopd.pdf<br>└── … |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
