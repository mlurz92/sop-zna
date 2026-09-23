# AGENTS.md – Dokumentation für KI-Agenten

> **WICHTIG:** Diese Datei ist die Referenz für KI-Assistenten und Agenten, die an diesem Projekt arbeiten. Sie beschreibt Architektur, Aufbau und Konventionen des SOP-ZNA-Projekts vollständig.

<!-- BUILD:STATS -->
| Kennzahl | Wert |
| --- | --- |
| Fassung | `4.4.1` |
| Patientenpfade | 73 |
| Abschnitte | 593 |
| Eigene Synonyme | 581 |
| Leitsymptom-Gruppen | 16 |
| Indizierte Wirkstoffe | 137 |
| Statuten | 2 (25 Abschnitte) |
| Abbildungen | 7 (2 in SOPs, 5 in Statuten) |
| Score-Rechner | 11 |
| Startlast (`dist/sop-meta.js`) | 107 KB |
| Inhaltspakete | 9 × ~105 KB |
| Stand der Erzeugung | 2026-09-23 |
<!-- /BUILD:STATS -->

---

## Die eine Regel

> **Die SOPs sind fachlicher Inhalt.** Dateien in `sops/` werden nicht verändert – weder Wortlaut noch HTML –, solange das nicht ausdrücklich verlangt wird. **Dasselbe gilt für `statuten/`** (Statut ZNA, Statut ABS): Wortlaut wie im Word-Original unter `docs/`, einschließlich seiner Schreibweisen.

Alles, was die Anwendung darüber hinaus zeigt (Suche, Querverweise, Abbildungen, Score-Rechner, Druckbogen), wird **aus** den SOPs abgeleitet, ohne sie anzufassen. Wo Anwendungswissen nötig ist, liegt es in `tools/data/` und wird vom Build gegen den Bestand geprüft.

---

## Projektübersicht

Single-Page-Anwendung ohne Framework, ES5-kompatibles JavaScript in **zehn Modulen** unter `js/`. Dazu `index.html`, vier CSS-Layer unter `css/`, 73 SOP-Dateien unter `sops/` und die daraus erzeugten Auslieferungsartefakte unter `dist/`.

**Die Obergrenze von zehn Modulen bleibt bestehen.** Neue Funktionalität gehört in das Modul, dessen Aufgabe sie berührt.

---

## Verzeichnisstruktur

```
sop-zna/
├── index.html              Einstiegspunkt, DOM-Struktur, Druckbogen, Zugangssperre
├── robots.txt, ai.txt      Absage an Robots und KI-Crawler
├── .htaccess, _headers     X-Robots-Tag (Apache bzw. Netlify/Cloudflare)
├── package.json            Version (einzige Quelle) und Befehle
├── version.json            ERZEUGT von tools/build.mjs
├── js/
│   ├── core.js             Zustand, DOM-Puffer, Normalisierung, Suchwerk, Daten
│   ├── motion.js           Bewegungssteuerung (liest Dauern aus den Tokens)
│   ├── platform.js         Zugangssperre, Theme, Schrift, Safe-Area, Offline, Versionswechsel
│   ├── router.js           Adresse, Verlauf, Scrollgedächtnis
│   ├── views.js            Ansichtswechsel, Tabs, Kopfzeile, Scrollmaße
│   ├── lists.js            Seitenleiste, Startseite, Übersicht, Volltextsuche
│   ├── segmented.js        Angeheftete Kapitelleiste
│   ├── sop.js              SOP-Ansicht, Akkordeon, Tabellen, Scores, Druck
│   ├── overlays.js         Schnellsuche, Inhaltsverzeichnis, Telefonverzeichnis
│   └── main.js             Gesten, Ereignisbindung, Start
├── css/
│   ├── legacy.css          @layer legacy     – gewachsene Formatierung
│   ├── tokens.css          @layer tokens     – ALLE Werte
│   ├── components.css      @layer components – neue Bausteine
│   └── print.css           @layer print      – gesamte Druckausgabe
├── dist/                   ERZEUGT – niemals von Hand bearbeiten
│   ├── sop-meta.js         Metadaten + vorberechneter Suchindex
│   ├── sop-text.js         Reintext aller Abschnitte
│   ├── sop-content-NN.js   Abschnitts-HTML in neun Paketen
│   └── statut-content.js   Abschnitts-HTML der Statuten (eigenes Paket)
├── sops/                   73 SOP-Dateien (QUELLE, fachlicher Inhalt)
├── statuten/               statut-zna.js, statut-abs.js (QUELLE, fachlicher Inhalt)
├── docs/                   Word-Originale der Statuten, SOP-Konverter
├── tools/
│   ├── build.mjs           Artefakte, Prüfungen, Version
│   ├── palette.mjs         Kategoriefarben mit Kontrastnachweis
│   ├── subset-fonts.py     Schrift- und Symbol-Subsetting
│   ├── verify-fold.mjs     Normalisierung Build gegen Browser
│   ├── visual-regress.mjs  Sicht- und Funktionsprüfung
│   ├── data/               aliases.mjs, drugs.mjs, figures.mjs, statuten.mjs, xrefs.mjs
│   └── lib/                load-sops, text, cats, scores
├── tests/visual/           baseline/, current/, diff/
├── vendor/                 Inter, FontAwesome – Original + Subset
└── img/
```

---

## Zugangssperre und Robots

- **Frühprüfung** als Inline-Skript im `<head>` von `index.html`: setzt `gate-locked` auf `<html>`, wenn weder `sessionStorage['sop-gate'] === '1'` noch `localStorage['sop-gate-until']` (Ablaufzeitpunkt in ms) in der Zukunft liegt. Abgelaufene Werte werden gelöscht.
- **Dialog** `#gate` steht als erstes Kind von `<body>`; Gestaltung in `css/components.css`, Abschnitt 18. Unschärfe über `backdrop-filter` auf der Sperrfläche – **nicht** über `filter` auf `#app` (nähme fest positionierten Kindern den Bezugsrahmen; `#printSheet` ist `display: contents`).
- **Prüfung** in `App.initGate()` (`js/platform.js`), aufgerufen als Erstes in `init()` (`js/main.js`). Verglichen wird die FNV-1a-Prüfsumme `GATE_HASH`, nie das Passwort im Klartext. Solange gesperrt: alle übrigen Kinder von `<body>` tragen `inert`, `onGlobalKey` kehrt über `App.gateLocked()` sofort zurück, im Druck ist die Seite leer.
- Mit Haken: `sop-gate-until = jetzt + 30 Tage`; immer zusätzlich `sop-gate` in `sessionStorage` (übersteht den stillen Versionswechsel).
- `tools/visual-regress.mjs` prüft die Sperre eigens (sieben Prüfungen) und entsperrt alle übrigen Seiten per `addInitScript(UNLOCK)`. **Neue Prüfseiten brauchen dieses `UNLOCK`**, sonst fotografiert der Durchgang den Dialog.
- Robots: `robots.txt` (alle + KI-Crawler namentlich), `<meta name="robots">`, `.htaccess`/`_headers` (`X-Robots-Tag`), `ai.txt`. Wer ausliefert, muss diese Dateien mitnehmen.

---

## Datenfluss

```
sops/*.js      ─┐
statuten/*.js  ─┴tools/build.mjs──▶  dist/sop-meta.js  (sofort, ~105 KB, mit "docs")
                                 dist/statut-content.js (Paket hinter den SOP-Paketen)
                                 dist/sop-text.js      (nach dem ersten Bild)
                                 dist/sop-content-NN.js (auf Abruf + Vorladen)
                                        │
                                        ▼
                         App.initData / acceptText / acceptContent
                                        │
                                        ▼
                                   App.S.data
```

`index.html` bindet **nur** `dist/sop-meta.js` synchron ein. `window.registerSOP()` ist entfallen.

Trifft ein Artefakt ein, bevor `js/core.js` geladen ist, legt es sich in `window.__SOP_TEXT__` bzw. `window.__SOP_CONTENT__`; `js/main.js` arbeitet diese Warteschlangen beim Start ab.

### Zustand einer SOP im Speicher

```javascript
{
    id, name, category, stand, chunk,     // aus sop-meta.js
    secTitles: [], hasSources, aliases: [],
    xref: [],      // Kennungen, die im Text vorkommen (Vorberechnung)
    related: [],   // vier verwandte Pfade (Vorberechnung)
    nf, nc, af, tf,// vorberechnete Normalformen für die Suche
    sections: null,// erst nach dem Paket: [{ title, html }]
    sources: null, // erst nach dem Paket
    text: null     // erst nach sop-text.js: { s: [...], q: '' }
}
```

`App.sopLoadState(d)` liefert `'ready' | 'loading' | 'error' | 'missing'`.

---

## Modulsystem

```javascript
(function(App) {
    'use strict';

    var S = App.S;   // Objekte duerfen beim Laden aliasiert werden -
    var E = App.E;   // ihre Identitaet aendert sich nie.

    App.machWas = function() {
        App.andereFunktion();   // Funktionen immer ueber App.<name>()
    };

})(window.SOPApp);
```

1. **Objekte** (`App.S`, `App.E`, `App.MOTION`, `App.CATS`) dürfen aliasiert werden – sie werden nie ersetzt.
2. **Funktionen** werden stets als `App.foo()` aufgerufen. Sonst friert ein Modul eine noch nicht definierte Funktion ein.

Ladereihenfolge `core → motion → platform → router → views → lists → segmented → sop → overlays → main` ist Teil der Architektur.

---

## Suchwerk (js/core.js)

Ein Werk, vier Oberflächen. `App.query(text, opts)` liefert:

```javascript
{
    q, sops: [{ sop, score, why, hits: [{ sec, title, snippet }] }],
    drugs: [{ name, rank, sops: [] }],
    usedFuzzy, textSearched
}
```

`why` ist `'name' | 'alias' | 'title' | 'text' | 'source' | 'fuzzy'` und steuert die Kennzeichnung im Treffer.

`App.filterSops(cat, q)` ist die schlanke Namensfilterung für Seitenleiste und Übersicht – dasselbe Werk, ohne Volltext und Wirkstoffe.

### Normalisierung

| Funktion | Wirkung |
|---|---|
| `App.fold(s)` | `ä→a`, `ö→o`, `ü→u`, `ß→ss`, Akzente weg, tiefgestellte Ziffern zu Ziffern, alles andere zu Wortgrenze |
| `App.collapse(s)` | zusätzlich `ae→a`, `oe→o`, `ue→u` |
| `App.queryForms(s)` | beide Formen – die zusammengezogene aber **erst ab fünf Zeichen** |
| `App.foldMap(s)` | gefaltete Fassung **plus Stellenzuordnung** zum Original |

> **`tools/lib/text.mjs` ist die verbindliche Referenz.** Weichen Build und Browser voneinander ab, findet die Suche Dinge nicht, die der Index verspricht – lautlos. `node tools/verify-fold.mjs` prüft beide Seiten gegen den gesamten Bestand (2.254 Proben, 480.625 Zeichen).

### Trefferhervorhebung

```javascript
App.hl(rohtext, anfrage)   // -> entschaerftes HTML mit <mark>
```

**Nimmt Rohtext, nicht entschärftes HTML.** Die frühere Fassung setzte `<mark>` per Regex in bereits entschärften Text und zerriss dabei Entitäten (`&amp;` wurde zu `&<mark>a</mark>mp;`). Über `foldMap` wird jetzt auf der gefalteten Fassung gesucht und auf das Original zurückgerechnet – nebenbei hebt die Suche nach „Oesophagus" damit auch „Ösophagus" hervor.

### Kurze Anfragen

Unter vier Zeichen zählt nur ein Treffer an einer Wortgrenze (`SUBSTRING_MIN`). Ein exakter Synonymtreffer (`aliasExact: 90`) wiegt schwerer als ein Name, der zufällig gleich beginnt (`namePrefix: 80`) – sonst gewänne bei `HIT` der Hitzschlag.

---

## CSS: vier Layer

```
legacy  <  tokens  <  components  <  print
```

Die Reihenfolge steht als `@layer`-Anweisung am Kopf von `css/legacy.css` und gilt unabhängig von der Ladereihenfolge. **Was später kommt, gewinnt – unabhängig von der Spezifität.**

| Wohin gehört was? | Datei |
|---|---|
| Ein Wert (Farbe, Größe, Abstand, Dauer, Radius) | `css/tokens.css` |
| Eine neue oder überarbeitete Komponente | `css/components.css` |
| Etwas, das nur im Druck gilt | `css/print.css` |
| **Nichts.** Nur Altbestand. | `css/legacy.css` |

### Token-Gruppen in `css/tokens.css`

| Gruppe | Beispiele |
|---|---|
| Typografie | `--fs-2xs … --fs-3xl`, `--fs-display`, `--lh-*`, `--ls-*`, `--fw-*`, `--measure`, `--num-tabular` |
| Raster | `--sp-05 … --sp-12` (8-px-Maß), `--radius-*`, `--tap-min` (48 px) |
| Tiefe | `--elev-0 … --elev-5` (Dunkelmodus mit heller Oberkante) |
| Kategorien | `--cat-<key>`, `-tint`, `-ink`, `-line` für elf Kategorien × zwei Themes |
| Klinische Semantik | `--cave`, `--alert`, `--dose`, `--info`, `--ok`, `--warn` je mit `-tint`, `-ink`, `-line` |
| Bewegung | `--dur-*`, `--stagger-*`, `--ease-*` |

Alle Größen leiten sich aus `--font-base` ab; die Schriftgrößen-Wippe verschiebt damit die gesamte Skala geschlossen.

### Kategoriefarben

Nicht mehr im JavaScript. `App.gc(key)` liefert `var(--cat-<key>)`, `App.catStyle(key)` den vollständigen Satz als Stilangabe für das Element.

```bash
node tools/palette.mjs          # Kontrasttabelle, Exit 1 bei Unterschreitung
node tools/palette.mjs --css    # Block für css/tokens.css
```

Der Build prüft, dass `css/tokens.css` und die Rechnung deckungsgleich sind.

### Bewegung: eine Quelle

`css/tokens.css` führt die Dauern; `App.readMotionTokens()` liest sie beim Start aus dem berechneten Stil. Die Zahlen in `js/motion.js` sind reine Rückfallwerte. **Dauern nicht mehr an zwei Stellen pflegen.**

---

## SOP-Ansicht (js/sop.js)

Reihenfolge in `wireSections()` – sie ist Absicht:

```
attachFigures → enhanceTables → attachScores → relayoutSopTables
              → linkCrossReferences → linkStatutes
              → enhanceDocTools (Statut) | attachAbsPanel (SOP) → wireRelated
```

`relayoutSopTables()` muss **nach** `attachScores()` laufen: erst dann steht fest, welche Tabelle ein Rechner ist, und nur Nicht-Rechner werden auf dem Telefon zu Karten.

### Fallstrick: `element.querySelectorAll('tbody tr')`

Der Druckbogen hüllt die gesamte Anwendung in ein `<tbody>`. Damit ist **jede** Zeile im Dokument Nachfahrin eines `tbody`, und `table.querySelectorAll('tbody tr')` trifft auch die Kopfzeile – der Score-Rechner war dadurch um eine Zeile verschoben.

> Innerhalb einer Tabelle immer über `bodyRowsOf(table)` / `headCellsOf(table)` gehen (`:scope > tbody > tr`). CSS-Selektoren sind nicht betroffen, weil sie an `.sop-section-body` verankert sind.

### Score-Rechner

`tools/lib/scores.mjs` erkennt beim Build vier Bauformen in den SOP-eigenen Tabellen:

| Form | Beispiel | Bedienung |
|---|---|---|
| `sum` | Wells, PERC, CHA₂DS₂-VA, MASCC, BISAP, Gicht, ADD-RS | Mehrfachauswahl je Zeile |
| `sum` mit `options` | Glasgow-Blatchford, MASCC-Zeile 1 | eine Ausprägung je Zeile |
| `group-rows` | Glasgow Coma Scale (rowspan) | eine Zeile je Gruppe |
| `group-cols` | 4T-Score (Kopfzeile „2 Punkte / 1 Punkt / 0 Punkte") | eine Spalte je Zeile |

Alles andere bleibt eine normale Tabelle. **Im Zweifel kein Rechner.**

Die Auswahlmarke hängt an `.score-mark` – bei `group-rows` ist das **nicht** die erste Zelle, dort steht per rowspan der Gruppenname (`.score-group`).

Der Rechner ist zustandslos: nichts wird gespeichert, nichts überdauert das Schließen.

### Abschnitte und Hilfstechnologien

`aria-expanded` folgt dem tatsächlichen Zustand; geschlossene Rümpfe tragen `hidden` (aus Zugänglichkeitsbaum und Browsersuche entfernt). Die Druckregeln setzen `display` mit `!important` und stechen `hidden` aus – im Ausdruck steht der Abschnitt trotzdem.

`App.isSectionTargetOpen()` liefert den **Zielzustand** (`.is-open` an der Section), `App.isSectionOpen()` den **Ist-Zustand** (`.open` am Rumpf). Während der Höhenanimation unterscheiden sie sich.

Standardmäßig offen: Abschnitte, deren Titel mit `Diagnostik` oder `Therapie` **beginnt** (`App.isAutoOpen`). Der frühere Gleichheitsvergleich ließ „Therapie – Allgemeinmaßnahmen" und „Diagnostik & Wells-Score" zugeklappt.

---

## Statuten

Zwei Statuten unter `statuten/` (`window.STATUT_DATA.push({...})`, Abschnitte mit `key`, `title`, `icon`, `html`). Sie laufen durch **dieselbe Pipeline und dieselbe Ansicht** wie die SOPs, bleiben aber ein eigener Bestand:

| | SOP | Statut |
|---|---|---|
| Quelle | `sops/` | `statuten/` |
| Meta | `META.sops` | `META.docs` (zusätzlich `s` Kurzname, `ks` Schlüssel, `ic` Symbole, `v`, `dt`, `au`, `rl`, `sm`) |
| Zustand | `S.data` **und** `S.byId` | **nur** `S.docs` und `S.byId` – Listen, Kategorien, Zähler meinen weiter die 73 Pfade |
| Kategorie | Fachkategorie | Pseudokategorie `'doc'` (`App.DOC_CAT`), Farbsatz `--doc-*` in `css/tokens.css`, **nicht** in `CATS`/`cats.mjs` |
| Adresse | `#sop/<id>` | `#statut/<id>` (`#sop/<id>` wird ebenfalls angenommen) |
| Paket | `sop-content-NN.js` | `statut-content.js`, Index `chunks.length` |

- `App.isDoc(d)`, `App.docSectionIndex(id, key)`, `App.filterDocs(q)`, `App.secIconOf(d, i)`.
- `App.query()` sucht Statuten mit, außer bei `opts.docs === false` oder Kategorie-Eingrenzung; `App.filterSops()` schließt sie aus.
- **Abbildungen:** `STATUT_FIGURES` in `tools/data/statuten.mjs`; im Text markiert `<div data-figure-slot="…">` die Stelle. `attachFigures()` ersetzt den Platzhalter (ohne `slot`: anhängen wie bei SOPs). Jede `.sop-figure` öffnet über `[data-figure-zoom]` die Vollbildfläche `#figOverlay` (`App.openFigure`, im Overlay-Stapel, `Esc` schließt).
- **Werkzeuge** (`enhanceDocTools`): `[data-checklist]` → Checkliste mit Zähler; `[data-gaep-list]` + `li[data-gaep][data-group][data-b]` → G-AEP-Prüfhilfe (bewertet **nur** „mit/ohne Zusatzkriterium B"); `[data-exclusion]` → Ausschlusshinweis; `Tel. NNNN` → `.doc-tel` (kopiert über `App.copyPhoneNumber`). Alles zustandslos.
- **Verknüpfungen:** `STATUT_LINKS` (Wortstellen → Statut; `in: '*'` = Abschnitt „Disposition" aller SOPs), `ABS_INDICATIONS` (Kap. 6.1 → SOPs, Text muss wörtlich im Statut stehen), `STATUT_TOOLS` (Startseite). Der Build prüft alles gegen den Bestand.
- `attachAbsPanel()` hängt `.dispo-statut` an den **ersten** `.dispo-gelb .dispo-block` – das SOP-HTML bleibt unberührt.
- Druck: `prepareDocPrintSheet()` – Fuß „Ausgedruckte Dokumente unterliegen nicht der Aktualisierung." wie im Original; leere Zähler werden nicht gedruckt, Checklisten drucken als Kästchen.
- `tools/subset-fonts.py` scannt `statuten/` und `tools/data/statuten.mjs` mit – Symbole der Statuten brauchen keinen `EXTRA_ICONS`-Eintrag.

---

## Druckausgabe

`index.html` enthält eine **echte** `<table class="print-sheet" role="presentation">` mit `<thead>`, `<tbody>` und `<tfoot>`, die die gesamte Anwendung umschließt.

- Auf dem Bildschirm: `display: contents` auf Tabelle, `tbody`, `tr`, `td` – der Rahmen verschwindet vollständig aus dem Layout, Kopf und Fuß sind ausgeblendet.
- Im Druck: `<thead>` und `<tfoot>` werden vom Browser auf **jeder Seite** wiederholt.

> Nachgemessen: Nur bei einer echten Tabelle wiederholt Chromium den Kopf. Mit `display: table-header-group` auf `<div>` erscheint er ausschließlich auf der ersten Seite; mit `position: fixed` liegt er über dem Text, weil er keinen Platz im Fluss beansprucht.

`App.printSop()` füllt Kopf und Fuß und ruft `window.print()`. **Kein Auf- und Zuklappen von Abschnitten mehr** – `css/print.css` setzt jeden Rumpf auf `display: block`. Die frühere Fassung war ein Wettlauf gegen ein `window.print()`, das in manchen Browsern sofort zurückkehrt.

---

## Schnellsuche

Die Tafel steht waagerecht mittig über der Anwendung (`css/components.css`, Abschnitt 17). Sie war früher als Blatt gebaut, das von der oberen Fensterkante herunterfährt – eckige obere Ecken, Rundung nur unten, Startlage `translate3d(0, -110%, 0)`. Angeheftet war sie aber nie: `justify-content: flex-start` klebte sie an den linken Rand, 60 px unter die Kante. Das Ergebnis war ein abgerissenes Blatt in der linken oberen Ecke.

`SPOT_EXAMPLES` in `js/overlays.js` führt die drei Beispiele des leeren Zustands – eine Abkürzung, ein Leitsymptom, ein Wirkstoff.

> **Ein Beispiel, das nichts findet, wäre schlimmer als gar keines.** `npm run visual` ruft jedes der drei gegen `App.query()` auf und fällt, wenn eines leer ausgeht.

`App.setSpotlightQuery(q)` ist die **eine** Stelle, an der die Anfrage gesetzt wird: Feld, `S.spotQ`, Lösch-Schaltfläche und Ergebnisliste gehen sonst auseinander.

Der Ergebnisbereich trägt `role="listbox"` **nur**, solange Einträge darin stehen. Im leeren Zustand wird die Rolle abgelegt und `aria-expanded` auf `false` gesetzt – sonst meldet der Screenreader ein leeres Listenfeld.

---

## Telefonverzeichnis

`PHONE_DIR` in `js/overlays.js` (60 Einträge in sieben Gruppen, vier davon aus den Statuten). `App.parseShiftWindows(note)` leitet Zeitfenster aus den vorhandenen Notizen ab.

> **Bewusst zurückhaltend:** Ein Fenster entsteht nur, wenn die Notiz ausdrücklich Tage nennt (`Mo-Fr`, `Di`, `Täglich`). In `DA bis 15:30 Uhr: 4004` gilt die Zeit für eine **Zweitnummer**, nicht für die Zeile. Neun der 60 Einträge tragen dadurch eine Kennzeichnung – genau die Sprechstunden.

---

## Entwicklungskonventionen

### JavaScript

- `var`, `function`, keine Pfeilfunktionen, kein `const`/`let` in `js/` (ES5-Kompatibilität)
- In `tools/` ist modernes JavaScript erlaubt (Node ≥ 20, ESM)
- Kein globaler Namensraum außer `window.SOPApp`

### Text im HTML entschärfen

| Funktion | Einsatz |
|---|---|
| `App.esc(t)` | Text zwischen Tags |
| `App.escAttr(t)` | Attributwerte |
| `App.hl(rohtext, q)` | Text **mit** Trefferhervorhebung |

SOP-HTML wird unverändert eingebaut – es ist eigener, vertrauenswürdiger Inhalt.

### Ereignisdelegation

`App.delegate(container, selector, handler)` registriert je Container **und Selektor** genau einmal. Listen mit 73 Einträgen bekommen einen Listener, nicht 73.

### Neue Symbole

In der Quelle verwenden (`tools/subset-fonts.py` scannt `js/`, `css/`, `index.html`) oder in `EXTRA_ICONS` eintragen, dann `npm run fonts`. Fehlt ein Symbol im Subset, erscheint ein leeres Kästchen.

---

## Statut ändern – Checkliste

1. `statuten/<kennung>.js` bearbeiten; Abschnittsschlüssel (`key`) nicht umbenennen – `STATUT_LINKS`, `STATUT_TOOLS` und Abbildungen hängen daran.
2. Neue Abbildung: Datei nach `img/statuten/`, Eintrag in `STATUT_FIGURES`, Platzhalter `data-figure-slot` im Text.
3. Neues Statut: zusätzlich Eintrag in `STATUT_ALIASES` (Pflicht).
4. `npm run build`, `npm run verify`.

## SOP hinzufügen – Checkliste

1. `sops/<kennung>.js` anlegen (Aufbau wie bestehende Dateien: `id`, `title`, `category`, `catKey`, `stand`, `sections[]`, `sources`).
2. Eintrag in `tools/data/aliases.mjs` ergänzen – **Pflicht**, der Build erzwingt ihn.
3. `npm run build`
4. `npm run verify`
5. `index.html` **nicht** anfassen.

Der Build bricht ab bei doppelter Kennung, leerem Abschnitt, unauflösbarer Kategorie, fehlendem Synonymeintrag, fehlender Bilddatei oder auseinandergelaufener Palette.

---

## Befehle

| Befehl | Wirkung |
|---|---|
| `npm run build` | Artefakte erzeugen, Version überall gleichziehen |
| `npm run check` | prüfen, ob die Artefakte aktuell sind |
| `npm run fonts` | Schriften und Symbole reduzieren |
| `npm run serve` | lokaler Server, Port 8080 |
| `npm run visual` | 60 Bilder + 61 Funktionsprüfungen gegen den Stand |
| `npm run baseline` | Stand neu festlegen |
| `npm run verify` | `check` + `visual` |
| `node tools/verify-fold.mjs` | Normalisierung Build gegen Browser |
| `node tools/palette.mjs` | Kontrastnachweis |

### Debugging in der Konsole

```javascript
SOPApp.S                       // Zustand
SOPApp.META                    // Metadaten, Scores, Wirkstoffe, Abbildungen
SOPApp.query('LAE')            // Suchergebnis samt Bewertung
SOPApp.sopLoadState(SOPApp.findSop('sepsis'))
SOPApp.parseShiftWindows('Mo-Fr 07:30-08:30 Uhr')
SOPApp.prefetchAll()           // alle Pakete sofort holen
```

---

## Version

Die Fassung steht **ausschließlich** in `package.json`. `npm run build` trägt sie in `version.json`, `js/core.js` (`App.VERSION`) und die `BUILD:STATS`-Blöcke in `README.md` und `AGENTS.md` ein.

`App.checkForUpdate()` vergleicht beim Start gegen `version.json`; bei Abweichung werden Caches verworfen und die Seite genau einmal neu geladen. Ein Wächter in `sessionStorage` verhindert Schleifen.

Die Anwendung bringt **keinen** Service Worker mit; alte Registrierungen werden beim Start abgeräumt.

---

## Bekannte Eigenheiten und Fallstricke

| Thema | Worauf zu achten ist |
|---|---|
| `querySelectorAll` in Tabellen | siehe oben – `:scope >` verwenden |
| Reihenfolge in `wireSections()` | `attachScores` vor `relayoutSopTables` |
| Ziel- gegen Zwischenzustand | `isSectionTargetOpen` vs. `isSectionOpen` |
| Overlays | bleiben im DOM; `display` niemals umschalten, sonst greift keine Transition |
| Overlay-Stapel | `App.closeTopOverlay()` arbeitet über den Stapel, nicht über die Dokumentreihenfolge |
| Abschnittspositionen | gepuffert in `SEC_CACHE`; nach jeder Höhenänderung `App.invalidateSectionOffsets()` |
| Scrollmaße | gepuffert; `App.invalidateScrollMetrics()` bzw. der `ResizeObserver` |
| Dynamische Referenzen | Elemente aus `innerHTML` stehen nicht im Puffer und müssen neu geholt werden |
| Safe Area auf iOS | `env()` liefert im Standalone-Modus 0; `js/platform.js` misst zur Laufzeit und setzt `--sab-js` |
| Breakpoints | `breakpointState()` in `js/main.js` verfolgt 1024, 640 und 480 px; ein Wechsel baut die Ansichten neu auf |
| Ein Ereignispfad | ausgelöst wird über `click`; Pointer-Ereignisse dienen nur der Unterscheidung Tippen/Wischen |
| Schnellsuche beim ersten Öffnen | `App.openSpotlight()` muss `App.renderSpotlightResults()` rufen; sonst steht beim allerersten Öffnen nichts im Ergebnisbereich |
| `SPOT_EXAMPLES` | jedes Beispiel muss im Bestand etwas finden – `npm run visual` prüft das |
| Szenen der Sichtprüfung | laufen nacheinander auf **derselben** Seite; ein Overlay der vorigen Szene erst schliessen |
| Statut vs. SOP | nie `S.data` nach Statuten durchsuchen – sie stehen nur in `S.docs`/`S.byId`; `App.isDoc(d)` entscheidet Adresse, Kopf, Breadcrumb, Fußleisten-Markierung, Druck |
| Sprung in einen Abschnitt | nie direkt `App.revealSection()` nach dem Öffnen – `S.pendingSec` setzen (macht `App.pushNav(id, sec)`), `App.flushPendingSection()` löst ein, sobald der Abschnitt im Dokument steht (auch nach Paket-Nachladen in `App.rSOP()`) |
| Abschnitts-Links | `#sop/<id>/<Nr. 1-basiert | quellen>`, `#statut/<id>/<key>`; `App.resolveSectionRef()` / `App.linkFor()` in `js/router.js`. Die Adresse wird danach auf die Dokumentebene zurückgesetzt (`syncRoute`) |
| Querverweise | Begriffe: Name + `XREF_TERMS` (`tools/data/xrefs.mjs`), **nicht** die Such-Synonyme. Build liefert `x` je Dokument und `META.xterms`; Rückverweise (`d.back`) rechnet `App.initData()`. `linkCrossReferences()` verlinkt je Ziel genau einmal pro Dokument (gemeinsames `used`), der Sammelblock `xrefIndexMarkup()` zeigt alle |
| Auftritt der Startseite | nie einzelne Gruppen staffeln – `App.staggerHome()` animiert Kategorien und Statuten als eine Kaskade (`App.applyStagger(nodes, cls, offset)`), aufgerufen in `App.rHome()` und bei jeder Rückkehr in `App.sTab('home')` |
| Einzelabschnittsdruck | `App.printSection(idx)` setzt `.print-one` / `.print-target`; aufgeräumt über `afterprint`, Zeitgeber nur ohne `afterprint`. Formularfelder (`.check-print-fields`, `.check-print-sign`) drucken **nur** in `.print-one` |
| Externe Ressourcen | bewusst keine CDNs – Schriften, Symbole und Skripte liegen im Projekt, weil die Anwendung im Klinik-Intranet ohne Internet laufen muss |
| `popNav` bei Deep Link | Ziel (Start bzw. Übersicht) **vor** dem Zurücksetzen von `S.sopId` bestimmen |
