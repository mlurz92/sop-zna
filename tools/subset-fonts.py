#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
tools/subset-fonts.py
---------------------------------------------------------------
Verkleinert die mitgelieferten Schriften auf das, was die
Anwendung tatsaechlich braucht (Vorschlag 18).

FontAwesome
    Der vollstaendige Solid-Satz enthaelt ueber 1.300 Symbole
    (156 KB WOFF2 + 100 KB CSS). Verwendet werden knapp 70.
    Erzeugt werden:
        vendor/fontawesome/fa-solid-subset.woff2
        vendor/fontawesome/fontawesome-subset.css

Inter
    Variable Schrift, bereits nach Unicode-Bereichen getrennt.
    Subsettet auf die Zeichen, die im gesamten Projekt (Oberflaeche
    UND SOP-Inhalte) vorkommen, zuzueglich des kompletten
    Latin-1-Bereichs als Sicherheitsnetz.
        vendor/inter/inter-latin-subset.woff2
        vendor/inter/inter-latin-ext-subset.woff2
        vendor/inter/inter-subset.css

Die Originaldateien bleiben liegen - sie sind die Quelle fuer
jeden weiteren Durchlauf.

Aufruf:  python3 tools/subset-fonts.py [--check]
"""

import os
import re
import sys
import glob

try:
    from fontTools import subset
    from fontTools.ttLib import TTFont
except ImportError:                                     # pragma: no cover
    sys.stderr.write(
        "\n  fonttools fehlt. Einmalig installieren:\n"
        "      pip3 install fonttools brotli\n\n")
    sys.exit(2)

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CHECK_ONLY = "--check" in sys.argv

FA_DIR = os.path.join(ROOT, "vendor", "fontawesome")
INTER_DIR = os.path.join(ROOT, "vendor", "inter")

# ---------------------------------------------------------------
# Symbole, die erst zur Laufzeit erzeugt werden und deshalb in
# keiner Quelldatei als Zeichenkette auftauchen koennen bzw. neu
# hinzukommen. Fehlt eines hier, faellt es im Browser als leeres
# Kaestchen auf - deshalb grosszuegig, aber bewusst gefuehrt.
# ---------------------------------------------------------------
EXTRA_ICONS = [
    "fa-calculator", "fa-list-check", "fa-diagram-project", "fa-code-branch",
    "fa-prescription-bottle-medical", "fa-phone-volume", "fa-table",
    "fa-wave-square", "fa-flag", "fa-vial", "fa-clock", "fa-link",
    "fa-circle-exclamation", "fa-chevron-up", "fa-image", "fa-arrow-right",
    "fa-bolt", "fa-user-doctor", "fa-tablets", "fa-notes-medical",
    "fa-bed", "fa-truck-medical", "fa-temperature-half", "fa-scale-balanced",
    "fa-circle-nodes", "fa-square-check", "fa-stopwatch", "fa-bell",
    "fa-shield-heart", "fa-hand-dots", "fa-person-falling", "fa-head-side-cough",
    "fa-diagram-successor", "fa-arrows-left-right", "fa-sitemap",
]

# Symbole, die FontAwesome-intern sind und nie als Icon dienen.
NOT_ICONS = {"fa-solid", "fa-solid-900", "fa-solid-subset", "fa-regular", "fa-brands", "fa-classic",
             "fa-sharp", "fa-1x", "fa-2x", "fa-3x", "fa-4x", "fa-5x", "fa-6x",
             "fa-7x", "fa-8x", "fa-9x", "fa-10x", "fa-2xs", "fa-xs", "fa-sm",
             "fa-lg", "fa-xl", "fa-2xl", "fa-fw", "fa-ul", "fa-li", "fa-border",
             "fa-pull-left", "fa-pull-right", "fa-spin", "fa-pulse", "fa-beat",
             "fa-fade", "fa-flip", "fa-shake", "fa-bounce", "fa-spin-reverse",
             "fa-spin-pulse", "fa-rotate-by", "fa-stack", "fa-stack-1x",
             "fa-stack-2x", "fa-inverse", "fa-layers", "fa-swap-opacity",
             "fa-rotate-90", "fa-rotate-180", "fa-rotate-270", "fa-flip-horizontal",
             "fa-flip-vertical", "fa-flip-both", "fa-style-family"}


def scan_sources():
    """Alle Dateien, in denen Symbolnamen stehen koennen."""
    files = [os.path.join(ROOT, "index.html")]
    for pattern in ("js/*.js", "css/*.css", "sops/*.js"):
        files.extend(sorted(glob.glob(os.path.join(ROOT, pattern))))
    return [f for f in files if os.path.isfile(f)]


def used_icon_names():
    names = set(EXTRA_ICONS)
    pat = re.compile(r"\bfa-[a-z0-9]+(?:-[a-z0-9]+)*\b")
    for path in scan_sources():
        with open(path, encoding="utf-8") as fh:
            for m in pat.findall(fh.read()):
                names.add(m)
    return {n for n in names if n not in NOT_ICONS}


def fa_codepoints(css_text):
    """Abbildung Symbolname -> Codepoint aus all.min.css."""
    out = {}
    for name, hexcode in re.findall(
            r"\.(fa-[a-z0-9-]+):before\{content:\"\\([0-9a-fA-F]+)\"\}", css_text):
        out[name] = int(hexcode, 16)
    # Mehrfachselektoren: .fa-a:before,.fa-b:before{content:"\fxxx"}
    for group, hexcode in re.findall(
            r"((?:\.fa-[a-z0-9-]+:before,)+\.fa-[a-z0-9-]+:before)\{content:\"\\([0-9a-fA-F]+)\"\}",
            css_text):
        for name in re.findall(r"\.(fa-[a-z0-9-]+):before", group):
            out[name] = int(hexcode, 16)
    return out


def project_charset():
    """Alle Zeichen, die im Projekt vorkommen (Oberflaeche und Inhalte)."""
    chars = set()
    # Latin-1 vollstaendig als Sicherheitsnetz
    for cp in range(0x20, 0x100):
        chars.add(chr(cp))
    # Typografie und Masseinheiten, die in medizinischem Text ueblich sind
    chars.update("‐‑‒–—―‘’‚“”„†‡•…‰′″‹›€™←↑→↓↔−∕∞≈≠≤≥·×÷µ‱"
                 "⁰¹²³⁴⁵⁶⁷⁸⁹₀₁₂₃₄₅₆₇₈₉ΔαβγμσΩ□■●○◦✓✗")
    targets = [os.path.join(ROOT, "index.html")]
    for pattern in ("js/*.js", "css/*.css", "sops/*.js",
                    "dist/sop-meta.js", "dist/sop-text.js"):
        targets.extend(sorted(glob.glob(os.path.join(ROOT, pattern))))
    for path in targets:
        if not os.path.isfile(path):
            continue
        with open(path, encoding="utf-8") as fh:
            chars.update(fh.read())
    # Steuerzeichen raus
    return {c for c in chars if ord(c) >= 0x20 and ord(c) != 0x7f}


def subset_font(src, dst, unicodes, flavor="woff2"):
    font = TTFont(src)
    options = subset.Options()
    options.flavor = flavor
    options.with_zopfli = False
    options.desubroutinize = False
    options.hinting = True
    options.legacy_kern = False
    options.name_IDs = ["*"]
    options.name_legacy = True
    options.notdef_outline = True
    options.recalc_bounds = True
    options.layout_features = ["*"]
    options.drop_tables = []
    subsetter = subset.Subsetter(options=options)
    subsetter.populate(unicodes=sorted(unicodes))
    subsetter.subset(font)
    font.flavor = flavor
    font.save(dst)
    font.close()
    return os.path.getsize(dst)


def kb(path):
    return os.path.getsize(path) / 1024.0


def main():
    report = []

    # ---------------- FontAwesome ----------------
    fa_css_path = os.path.join(FA_DIR, "all.min.css")
    fa_font_path = os.path.join(FA_DIR, "fa-solid-900.woff2")
    for p in (fa_css_path, fa_font_path):
        if not os.path.isfile(p):
            sys.exit("  Fehlt: " + os.path.relpath(p, ROOT))

    with open(fa_css_path, encoding="utf-8") as fh:
        fa_css = fh.read()

    table = fa_codepoints(fa_css)
    wanted = sorted(used_icon_names())
    known, unknown = [], []
    for name in wanted:
        (known if name in table else unknown).append(name)

    if unknown:
        report.append("  Hinweis: ohne Entsprechung in FontAwesome 6.5.1 Free Solid -> "
                      + ", ".join(unknown))

    codepoints = {table[n] for n in known}
    out_font = os.path.join(FA_DIR, "fa-solid-subset.woff2")
    out_css = os.path.join(FA_DIR, "fontawesome-subset.css")

    if not CHECK_ONLY:
        size = subset_font(fa_font_path, out_font, codepoints)
    else:
        size = os.path.getsize(out_font) if os.path.isfile(out_font) else 0

    rules = "".join(
        ".%s::before{content:\"\\%x\"}\n" % (n, table[n]) for n in sorted(known))

    css = (
        "/* Font Awesome Free 6.5.1 - Solid, auf den Bestand dieser Anwendung\n"
        "   reduziert (%d Symbole). Lizenz: CC BY 4.0 (Symbole), SIL OFL 1.1\n"
        "   (Schrift), MIT (Code). Copyright 2023 Fonticons, Inc.\n"
        "\n"
        "   ERZEUGT VON tools/subset-fonts.py - NICHT VON HAND BEARBEITEN.\n"
        "   Neues Symbol noetig? In der Quelle verwenden (oder in EXTRA_ICONS\n"
        "   eintragen) und \"npm run fonts\" ausfuehren.\n"
        "*/\n"
        "@font-face{\n"
        "  font-family:\"Font Awesome 6 Free\";\n"
        "  font-style:normal;\n"
        "  font-weight:900;\n"
        "  font-display:block;\n"
        "  src:url(./fa-solid-subset.woff2) format(\"woff2\");\n"
        "}\n"
        ".fa-solid,.fas,.fa{\n"
        "  font-family:\"Font Awesome 6 Free\";\n"
        "  font-weight:900;\n"
        "  -moz-osx-font-smoothing:grayscale;\n"
        "  -webkit-font-smoothing:antialiased;\n"
        "  display:var(--fa-display,inline-block);\n"
        "  font-style:normal;\n"
        "  font-variant:normal;\n"
        "  line-height:1;\n"
        "  text-rendering:auto;\n"
        "}\n"
        ".fa-fw{text-align:center;width:1.25em}\n"
        ".fa-spin{animation:fa-spin 2s linear infinite}\n"
        "@media (prefers-reduced-motion:reduce){.fa-spin{animation-delay:-1ms;"
        "animation-duration:1ms;animation-iteration-count:1}}\n"
        "@keyframes fa-spin{0%%{transform:rotate(0)}to{transform:rotate(360deg)}}\n"
        "\n"
        "%s" % (len(known), rules))

    if not CHECK_ONLY:
        with open(out_css, "w", encoding="utf-8") as fh:
            fh.write(css)

    report.append("  FontAwesome  %4d Symbole   %6.1f KB -> %5.1f KB (Schrift)   "
                  "%6.1f KB -> %5.1f KB (CSS)"
                  % (len(known), kb(fa_font_path), size / 1024.0,
                     kb(fa_css_path), len(css.encode("utf-8")) / 1024.0))

    # ---------------- Inter ----------------
    charset = project_charset()
    inter_css_lines = [
        "/* Inter (SIL Open Font License 1.1), auf den Zeichenbestand dieser\n"
        "   Anwendung reduziert.\n"
        "\n"
        "   ERZEUGT VON tools/subset-fonts.py - NICHT VON HAND BEARBEITEN.\n"
        "*/\n"
    ]

    inter_sources = [
        ("inter-latin.woff2", "inter-latin-subset.woff2",
         "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, "
         "U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2190-2193, "
         "U+2202, U+2212, U+2215, U+FEFF, U+FFFD"),
        ("inter-latin-ext.woff2", "inter-latin-ext-subset.woff2",
         "U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, "
         "U+0308, U+0329, U+0370-03FF, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, "
         "U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF"),
    ]

    for src_name, dst_name, unicode_range in inter_sources:
        src = os.path.join(INTER_DIR, src_name)
        dst = os.path.join(INTER_DIR, dst_name)
        if not os.path.isfile(src):
            sys.exit("  Fehlt: " + os.path.relpath(src, ROOT))

        font = TTFont(src)
        available = set()
        for table_ in font["cmap"].tables:
            available.update(table_.cmap.keys())
        font.close()

        wanted_cps = {ord(c) for c in charset} & available
        if not wanted_cps:
            report.append("  Inter        %-26s keine passenden Zeichen - uebersprungen"
                          % src_name)
            continue

        if not CHECK_ONLY:
            size = subset_font(src, dst, wanted_cps)
        else:
            size = os.path.getsize(dst) if os.path.isfile(dst) else 0

        inter_css_lines.append(
            "@font-face {\n"
            "  font-family: 'Inter';\n"
            "  font-style: normal;\n"
            "  font-weight: 300 800;\n"
            "  font-display: swap;\n"
            "  src: url(./%s) format('woff2');\n"
            "  unicode-range: %s;\n"
            "}\n" % (dst_name, unicode_range))

        report.append("  Inter        %-26s %6.1f KB -> %5.1f KB (%d Zeichen)"
                      % (src_name, kb(src), size / 1024.0, len(wanted_cps)))

    if not CHECK_ONLY:
        with open(os.path.join(INTER_DIR, "inter-subset.css"), "w", encoding="utf-8") as fh:
            fh.write("\n".join(inter_css_lines))

    print("")
    for line in report:
        print(line)
    print("")


if __name__ == "__main__":
    main()
