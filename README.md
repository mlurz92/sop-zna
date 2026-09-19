# SOP-ZNA – Patientenpfade der Zentralen Notaufnahme

Nachschlagewerk für 73 evidenzbasierte Standard Operating Procedures der Zentralen Notaufnahme am Klinikum St. Georg Leipzig. Läuft mobil am Bett, am Tablet im Schockraum und stationär am Tresenrechner.

<!-- BUILD:STATS -->
| Kennzahl | Wert |
| --- | --- |
| Fassung | `4.0.0` |
| Patientenpfade | 73 |
| Abschnitte | 593 |
| Eigene Synonyme | 581 |
| Leitsymptom-Gruppen | 16 |
| Indizierte Wirkstoffe | 137 |
| Abbildungen | 2 |
| Score-Rechner | 11 |
| Startlast (`dist/sop-meta.js`) | 95 KB |
| Inhaltspakete | 9 × ~105 KB |
| Stand der Erzeugung | 2026-09-19 |
<!-- /BUILD:STATS -->

---

## Projektübersicht

Eine Single-Page-Anwendung ohne Framework. ES5-kompatibles JavaScript in zehn Modulen, kein Build-Zwang zur Laufzeit, keine Abhängigkeit von einem CDN. Alles, was die Anwendung braucht, liegt im Projekt.

**Die SOPs sind fachlicher Inhalt.** Die Dateien in [`sops/`](sops/) werden nicht verändert – weder Wortlaut noch HTML. Alles, was die Anwendung hinzufügt (Suche, Querverweise, Abbildungen, Score-Rechner, Druckbogen), entsteht aus ihnen, ohne sie anzufassen.

### Einsatzgebiet

| Gerät | Nutzung |
|---|---|
| Smartphone | Am Patienten, einhändig, mit Handschuhen |
| Tablet | Im Schockraum und bei der Visite |
| Desktop | Am Tresen, beim Diktat, für den Ausdruck |

---

## Was die Anwendung kann

### Suchen

Ein einziges Suchwerk bedient Seitenleiste, Übersicht, Schnellsuche und Volltextsuche – vorher filterten drei Stellen nach Namen und eine nach Volltext, mit drei verschiedenen Ergebnissen.

| Eingabe | Findet |
|---|---|
| `LAE`, `STEMI`, `HIT`, `TVT`, `SBP`, `qSOFA` | über rund 700 gepflegte Synonyme und Abkürzungen |
| `Oesophageale`, `Osophageale`, `Ösophageale` | dieselbe SOP – Umlaute in jeder Schreibweise |
| `Hypokaliaemie` | `Hypokaliämie` |
| `Pankretitis`, `Meningits` | über Tippfehlertoleranz (Damerau-Levenshtein) |
| `Blutvergiftung`, `Unterzuckerung`, `Krampfanfall` | Umgangssprache |
| `Noradrenalin`, `Rasburicase`, `Piperacillin` | Wirkstoff-Direktsuche: zeigt jeden Pfad mit der zugehörigen Dosierungsstelle |
| `CHA2DS2` | auch als `CHA₂DS₂` geschrieben |

Die Trefferliste lässt sich auf **Pfadnamen**, **Im Text** oder **Wirkstoffe** eingrenzen. Jeder Treffer führt nicht nur zur SOP, sondern direkt zum Abschnitt mit der Fundstelle.

Kurze Eingaben (unter vier Zeichen) treffen nur an Wortgrenzen. Sonst läge bei `LAE` halb Leipzig in der Liste.

### Lesen

- **Kapitelleiste** heftet sich beim Scrollen an den oberen Rand und markiert, in welchem Kapitel man gerade steht.
- **Hinweisblöcke** in drei Stufen: CAVE (Gefahr), WICHTIG (zentrale Aussage), HINWEIS (Einordnung) – jeweils mit Signalkante, Symbol und eigener Fläche, in hellem und dunklem Modus kontrastgeprüft.
- **Tabellen** bleiben auf dem Desktop Tabellen, mit klebender Kopfzeile. Unterhalb von 640 px werden sie zu Karten, in denen jede Zelle ihren Spaltenkopf vor sich her trägt.
- **Querverweise**: Nennt eine SOP eine andere beim Namen, wird daraus ein Sprungziel.
- **Verwandte Pfade** am Ende jeder SOP, berechnet aus gemeinsamem Wortschatz, Fachgebiet und kuratierten Leitsymptom-Gruppen.
- **Abbildungen** aus `img/ZNA/` werden am passenden Abschnitt eingeblendet.
- **Ziffern in Tabellenbreite**: Dosierungen, Zeiten und Grenzwerte stehen stellengenau untereinander.

### Rechnen

Elf Score-Rechner entstehen **aus den Tabellen, die ohnehin in den SOPs stehen**:

| Score | SOP | Maximum |
|---|---|---|
| Glasgow Coma Scale | Unklare Vigilanzminderung | 15 |
| 4T-Score | Heparininduzierte Thrombozytopenie | 8 |
| Modifizierter Glasgow-Blatchford | Obere Gastrointestinale Blutung | 16 |
| MASCC | Fieber in der Neutropenie | 26 |
| CHA₂DS₂-VA | Vorhofflimmern | 9 |
| Wells-Score | Lungenarterienembolie | 7 |
| PERC | Lungenarterienembolie | 8 |
| Wells-Score TVT | Tiefe Venenthrombose | 9 |
| Gichtrechner | Akuter Gichtanfall | 13 |
| ADD-RS | Akutes Aortensyndrom | 3 |
| BISAP | Akute Pankreatitis | 5 |

Die Tabelle **wird** der Rechner: Zeilen bzw. Punktspalten werden anklickbar, darunter läuft die Summe mit. Kriterien, Punktwerte und Auswertungstext stammen wörtlich aus der SOP – es wird nichts erfunden und nichts gespeichert. Es ist ein Rechenschieber, keine Akte.

### Drucken

Der Ausdruck ist ein Dokument für die Übergabemappe, nicht ein Bildschirmfoto:

- A4 mit gesetzten Rändern, laufender Kopf (Logo, Titel, Fachgebiet) und Fuß (Verbindlichkeitshinweis, Abrufdatum, Fassung) **auf jeder Seite**
- alle Abschnitte werden gedruckt, unabhängig davon, was auf dem Bildschirm auf- oder zugeklappt ist
- CAVE bleibt CAVE: Fläche, Signalkante und Symbol werden mitgedruckt
- Tabellenkopfzeilen wiederholen sich, Zeilen werden nicht zerschnitten
- die Quellen stehen auf jedem Blatt, das die Klinik verlässt

### Telefonieren

Das Telefonverzeichnis liest die Dienstzeiten aus den vorhandenen Notizen und zeigt, **was jetzt gilt**: neun Sprechstundeneinträge tragen eine Zeitkennung (`bis 12:00` grün, wenn sie gerade gilt; sonst `Di 08:00`). Ein Filter blendet auf Wunsch alles aus, was gerade nicht erreichbar ist. Sprungmarken führen zu den Gruppen. Auf Telefonen steht neben jeder Zeile ein Wählknopf; am Stationsrechner bleibt es beim Kopieren in die Zwischenablage.

Die Erkennung ist bewusst zurückhaltend: Notizen wie `DA bis 15:30 Uhr: 4004` beziehen die Zeit auf eine **Zweitnummer**, nicht auf die Zeile. Solche Einträge bekommen keine Kennzeichnung – eine Falschaussage würde im Zweifel einen Anruf verhindern.

---

## Architektur

### Auslieferung

Die SOP-Dateien werden **nicht mehr einzeln in die Seite eingebunden**. Sie sind die Quelle, aus der [`tools/build.mjs`](tools/build.mjs) die Artefakte unter `dist/` erzeugt:

| Datei | Größe | Wann geladen |
|---|---|---|
| `dist/sop-meta.js` | ~95 KB | sofort – Titel, Kategorien, Kapitel, Suchindex, Synonyme, Wirkstoffe, Score-Beschreibungen |
| `dist/sop-text.js` | ~460 KB | nach dem ersten Bild – Reintext für die Volltextsuche, beim Build vorberechnet |
| `dist/sop-content-01…09.js` | 9 × ~105 KB | auf Abruf beim Öffnen einer SOP, danach vollständig im Hintergrund |

Vorher lud die Startseite 73 Skripte mit rund 1 MB, bevor überhaupt etwas zu sehen war.

Das vollständige Vorladen im Hintergrund ist kein Beiwerk: ohne es ließe sich bei abbrechender Verbindung keine SOP mehr öffnen, die noch niemand angefasst hat.

### Zehn Module

Ladereihenfolge ist Teil der Architektur:

```
core → motion → platform → router → views → lists → segmented → sop → overlays → main
```

| Modul | Aufgabe |
|---|---|
| [`js/core.js`](js/core.js) | Zustand, DOM-Puffer, Normalisierung, Suchwerk, Datenübernahme |
| [`js/motion.js`](js/motion.js) | Bewegungssteuerung; liest Dauern aus den CSS-Token |
| [`js/platform.js`](js/platform.js) | Theme, Schriftgröße, Safe-Area, Offline-Anzeige, Versionsabgleich |
| [`js/router.js`](js/router.js) | Adresse, Verlauf, Scrollgedächtnis |
| [`js/views.js`](js/views.js) | Ansichtswechsel, Tabs, Kopfzeile, Scrollmaße |
| [`js/lists.js`](js/lists.js) | Seitenleiste, Startseite, Übersicht, Volltextsuche |
| [`js/segmented.js`](js/segmented.js) | Angeheftete Kapitelleiste |
| [`js/sop.js`](js/sop.js) | SOP-Ansicht, Akkordeon, Tabellen, Score-Rechner, Querverweise, Druck |
| [`js/overlays.js`](js/overlays.js) | Schnellsuche, Inhaltsverzeichnis, Telefonverzeichnis |
| [`js/main.js`](js/main.js) | Gesten, Ereignisbindung, Start |

Objekte (`App.S`, `App.E`, `App.MOTION`) dürfen am Modulanfang aliasiert werden. **Funktionen werden stets als `App.foo()` aufgerufen** – sonst friert ein Modul eine noch nicht definierte Funktion ein.

### Vier CSS-Layer

Bis Fassung 3.3 entschied allein die Position in `styles.css`, welche Regel gewinnt: 16 nacheinander angehängte Abschnitte, deren Vorrang niemand mehr überblickte. Jetzt ist die Rangfolge erklärt statt zufällig:

```
legacy  <  tokens  <  components  <  print
```

| Datei | Layer | Inhalt |
|---|---|---|
| [`css/legacy.css`](css/legacy.css) | `legacy` | die gewachsene Formatierung, unverändert übernommen |
| [`css/tokens.css`](css/tokens.css) | `tokens` | **alle Werte**: Typografie, Raster, Tiefe, Kategoriefarben, klinische Semantik, Bewegung |
| [`css/components.css`](css/components.css) | `components` | die neu gestalteten Bausteine |
| [`css/print.css`](css/print.css) | `print` | die gesamte Druckausgabe an einer Stelle |

Was später kommt, gewinnt – unabhängig von der Spezifität des Selektors. **Neue Gestaltung gehört nach `components.css`, neue Werte nach `tokens.css`.**

### Kategoriefarben mit Nachweis

Die elf Kategoriefarben stehen nicht mehr als Hexwert im JavaScript, sondern als Token-Satz je Kategorie (Akzent, getönte Fläche, Schrift darauf, Kante) für hell und dunkel. [`tools/palette.mjs`](tools/palette.mjs) rechnet sie aus und **weist nach**, dass sie die WCAG-Schwellen halten:

```bash
node tools/palette.mjs
```

Der Durchlauf endet mit Fehlercode, sobald eine Kombination unter 3,0 : 1 (Nicht-Text) bzw. 4,5 : 1 (Text) fällt. Der Build prüft zusätzlich, dass `css/tokens.css` und die Rechnung nicht auseinandergelaufen sind.

*Infektiologie* ist dabei von Lime auf Teal gewechselt: Lime erreichte auf Weiß nur 1,9 : 1 und war als Signalpunkt praktisch unsichtbar.

---

## Entwicklung

### Einrichten

```bash
npm install          # nur für Playwright (Sichtprüfung), sonst nichts nötig
pip3 install fonttools brotli   # einmalig, für das Schrift-Subsetting
```

### Befehle

| Befehl | Wirkung |
|---|---|
| `npm run build` | Artefakte unter `dist/` aus `sops/` erzeugen, Version überall gleichziehen |
| `npm run check` | prüfen, ob die Artefakte aktuell sind (Exit 1, wenn nicht) |
| `npm run fonts` | Schriften und Symbole auf den tatsächlichen Bestand reduzieren |
| `npm run serve` | lokaler Server auf Port 8080 |
| `npm run visual` | Sicht- und Funktionsprüfung gegen den hinterlegten Stand |
| `npm run baseline` | den hinterlegten Stand neu festlegen |
| `npm run verify` | `check` und `visual` nacheinander |
| `node tools/verify-fold.mjs` | beweist, dass Build und Browser identisch normalisieren |
| `node tools/palette.mjs` | Kontrastnachweis der Kategoriefarben |

### Eine SOP ändern oder hinzufügen

1. Datei in [`sops/`](sops/) anlegen bzw. bearbeiten – Aufbau wie bei den bestehenden 73.
2. `npm run build` ausführen.
3. `npm run verify`.

Der Build bricht ab, wenn eine Kennung doppelt vergeben ist, ein Abschnitt leer bleibt, eine Kategorie sich nicht auflösen lässt oder ein Synonymeintrag fehlt. **`index.html` muss nicht angefasst werden.**

Für jede SOP ist ein Eintrag in [`tools/data/aliases.mjs`](tools/data/aliases.mjs) Pflicht – der Build erzwingt das. Damit kann die Synonymtabelle nicht stillschweigend veralten.

### Kuratierte Zusatzdaten

| Datei | Inhalt |
|---|---|
| [`tools/data/aliases.mjs`](tools/data/aliases.mjs) | Synonyme, Abkürzungen, Umgangssprache je SOP + Leitsymptom-Gruppen |
| [`tools/data/drugs.mjs`](tools/data/drugs.mjs) | Wirkstoff-Lexikon; indiziert wird nur, was im Bestand vorkommt |
| [`tools/data/figures.mjs`](tools/data/figures.mjs) | Zuordnung Abbildung → SOP → Abschnitt |

Das ist **Anwendungswissen, kein SOP-Inhalt**. Der Build prüft jede Zuordnung gegen den Bestand.

### Sicht- und Funktionsprüfung

```bash
npm run visual
```

Fährt 3 Breiten × 2 Themes × 7 Zustände an (42 Bilder) und prüft parallel 28 Funktionsmerkmale: Anzahl der Pfade, Score-Rechner samt Zeilenzuordnung, Querverweise, Umbau der Tabellen, Dienstzeiten, Umlaut- und Tippfehlertoleranz, Konsolenfehler.

Beide Teile sind nötig: ein Bild kann gleich aussehen und die Anwendung trotzdem kaputt sein. Genau das ist beim Umbau der Druckausgabe passiert – der Bildvergleich hat eine um eine Zeile verschobene Glasgow Coma Scale aufgedeckt.

Abweichungen liegen als rot markierte Bilder unter `tests/visual/diff/`.

### Projektstruktur

```
sop-zna/
├── index.html              Einstiegspunkt
├── package.json            Version (die einzige Quelle) und Befehle
├── version.json            erzeugt
├── css/
│   ├── legacy.css          Layer legacy
│   ├── tokens.css          Layer tokens
│   ├── components.css      Layer components
│   └── print.css           Layer print
├── js/                     zehn Module
├── dist/                   erzeugt – nicht von Hand bearbeiten
├── sops/                   73 SOP-Dateien (fachlicher Inhalt)
├── tools/
│   ├── build.mjs           Artefakte, Prüfungen, Version
│   ├── palette.mjs         Kategoriefarben mit Kontrastnachweis
│   ├── subset-fonts.py     Schrift- und Symbol-Subsetting
│   ├── verify-fold.mjs     Normalisierung Build gegen Browser
│   ├── visual-regress.mjs  Sicht- und Funktionsprüfung
│   ├── data/               kuratierte Zusatzdaten
│   └── lib/                gemeinsame Bausteine
├── tests/visual/           hinterlegter Stand, aktuelle Bilder, Abweichungen
├── vendor/                 Inter und FontAwesome, lokal und reduziert
└── img/
```

---

## Installation & Deployment

### Voraussetzungen

- Webserver mit statischem File-Serving
- HTTPS empfohlen
- Keine serverseitige Laufzeitumgebung

### Vorgehen

```bash
npm run build && npm run verify     # Artefakte erzeugen und prüfen
scp -r sop-zna/ user@server:/var/www/html/
```

Die Fassung steht **nur** in `package.json`. `npm run build` trägt sie in `version.json`, `js/core.js` und die Kennzahlenblöcke dieser Datei sowie in `AGENTS.md` ein. Von Hand wird sie nirgends gepflegt.

Nicht ausgeliefert werden müssen: `tools/`, `tests/`, `sops/` und die unreduzierten Schriftdateien in `vendor/`. Ausgeliefert werden müssen `dist/`, `css/`, `js/`, `img/`, `index.html`, `version.json` und die `*-subset.*`-Dateien in `vendor/`.

### Hosting-Optionen

| Plattform | Eignung |
|---|---|
| **Apache/Nginx** | On-Premise, empfohlen im Klinikbetrieb |
| **Firebase Hosting** | wenn extern gehostet werden darf |
| **GitHub Pages** | für Demos und Entwicklung |
| **Netlify/Vercel** | automatisches Deployment |

---

## Update-Mechanismus

Beim Start vergleicht die Anwendung die geladene Fassung mit `version.json`. Weichen sie ab, werden Caches verworfen und die Seite genau einmal neu geladen – ohne Banner. Ein Wächter in `sessionStorage` verhindert Neulade-Schleifen; nachgeladene Artefakte tragen die Fassung als Parameter.

Die früheren `http-equiv`-Angaben zu Cache-Control, Pragma und Expires sind entfallen: Browser werten sie in einem Dokument nicht aus.

Die Anwendung bringt **keinen** Service Worker mit; alte Registrierungen aus früheren Fassungen werden beim Start abgeräumt.

---

## Dispositionsfeld & Telefonverzeichnis

### Dispositionsfeld (alle 73 SOPs)

Jede SOP enthält den Abschnitt **Disposition** mit den verbindlichen hausinternen Dispositionsrichtlinien der ZNA im Ampelschema:

| Stufe | Inhalt |
|-------|--------|
| 🟢 **GRÜN** | Ambulanter Verbleib: Entscheidung durch behandelnden Arzt ZNA, Pfad Hausarzt/MVZ, SOP-spezifische Entlasskriterien |
| 🟡 **GELB** | Stationäre Aufnahme: krankheitsbildspezifischer Regelpfad (Fachabteilung inkl. Telefonnummer) sowie ZNA-/A&B-Station mit Indikation und Bedingung |
| 🔴 **ROT** | Kritisch: passende Intensivbereiche (ITS-Koordinator, KAIM-/KAIS-IMC, ITS Pneumologie, ITO/Stroke Unit, HKL) |

Die Karten sind farbcodiert, auf Desktop dreispaltig, auf Mobilgeräten einspaltig und für den Druck optimiert. Am Ende jedes Dispositionsfeldes öffnet ein Button das vollständige Telefonverzeichnis.

### Telefonverzeichnis

56 interne und externe Nummern in sieben Gruppen: Notfall & externe Kontakte, ITS & IMC (Disposition ROT), chirurgische Fächer, konservative Fächer, Diagnostik & Funktionseinheiten, Infrastruktur & ZNA-Organisation, Sprechstunden des Ambulanzzentrums.

Gepflegt wird die Liste im Array `PHONE_DIR` in [`js/overlays.js`](js/overlays.js). Die Dienstzeiterkennung liest ausschließlich die dort vorhandenen Notizen – es müssen keine Zeiten zusätzlich gepflegt werden.

---

## Bedienung & Barrierefreiheit

### Tastatur

| Taste | Wirkung |
|---|---|
| `Strg`/`Cmd` + `K`, `/` | Schnellsuche öffnen |
| `↑` `↓` `↵` | in der Schnellsuche wählen und öffnen |
| `Esc` | oberstes Overlay schließen |
| `Rücktaste` | zurück |
| `←` `→` `Pos1` `Ende` | in der Kapitelleiste |
| `Leertaste` `↵` | Abschnitt auf-/zuklappen, Score-Kriterium wählen |

### Barrierefreiheit

- Kategoriefarben in beiden Themes nachweislich über den WCAG-Schwellen (`node tools/palette.mjs`)
- `aria-expanded` folgt dem **tatsächlichen** Zustand, nicht dem angestrebten; geschlossene Abschnitte tragen `hidden` und sind damit weder im Zugänglichkeitsbaum noch in der Browsersuche
- Fokusfalle und Fokusrückgabe in allen Overlays, Sprunglink, Überschriftenstruktur
- Bedienelemente auf Zeigegeräten ohne Feinsteuerung mindestens **48 px** – in der ZNA wird mit Handschuhen bedient, die 44 px der Plattformvorgaben sind dafür zu knapp
- `prefers-reduced-motion` stellt alle Bewegung an einer Stelle still
- Signale tragen nie allein Farbe: CAVE hat zusätzlich Kante, Symbol und Wortlabel

### Responsives Verhalten

| Breite | Verhalten |
|---|---|
| < 480 px | einspaltig, engere Ränder |
| ≤ 560 px | „Inhalt" und „Drucken" schrumpfen auf ihr Symbol, bleiben aber neben der Überschrift |
| ≤ 640 px | Tabellen werden zu Karten (Score-Tabellen ausgenommen) |
| < 1024 px | mobiles Layout mit Fußnavigation |
| ≥ 1024 px | Seitenleiste, Breadcrumb, kein FAB |

Ein Wechsel zwischen diesen Stufen baut die betroffenen Ansichten neu auf – ein gedrehtes Tablet behält nicht länger die Telefonentscheidungen.

---

## Browser-Unterstützung

| Browser | Ab Version |
|---|---|
| Chrome / Edge | 99 |
| Safari (macOS/iOS) | 15.4 |
| Firefox | 97 |

Voraussetzung ist `@layer` (CSS Cascade Layers). Ältere Browser zeigen die Anwendung ohne die neue Gestaltungsschicht, bleiben aber bedienbar.

### Bekannte Einschränkungen

- Der laufende Kopf im Ausdruck setzt eine echte Tabelle voraus; in Engines ohne wiederholte Tabellenköpfe erscheint er nur auf der ersten Seite.
- Ohne Netz sind nur die Pakete verfügbar, die bereits vorgeladen wurden. Das Vorladen beginnt unmittelbar nach dem ersten Bild und ist in aller Regel nach wenigen Sekunden abgeschlossen. Die Anwendung bringt bewusst keinen Service Worker mit.
- `tel:`-Wählknöpfe erscheinen nur auf Geräten mit Touch-Bedienung unter 900 px.

---

## Lizenz & Kontakt

Internes Projekt des Klinikums St. Georg Leipzig. Alle Rechte vorbehalten.

- **Entwicklung:** AG Klinische Pfade
- **Institution:** Klinikum St. Georg Leipzig gGmbH
- **Standort:** Delitzscher Straße 141, 04129 Leipzig

Technische Einzelheiten und Konventionen: [`AGENTS.md`](AGENTS.md).

---

## Versionshistorie

| Version | Datum | Änderungen |
|---------|-------|------------|
| **v4.0.0** | Sep 2026 | **Suchwerk, Auslieferung und Gestaltung neu.** Suche: ein Werk für alle vier Oberflächen, mit Umlauttoleranz in beide Richtungen, rund 700 kuratierten Synonymen und Abkürzungen, Tippfehlertoleranz, Wirkstoff-Direktsuche über 137 Wirkstoffe und Sprung zur Fundstelle; kurze Eingaben treffen nur an Wortgrenzen. Auslieferung: die 73 SOP-Skripte sind einem Build gewichen – Start mit 95 KB Index statt 1 MB, Inhalte in neun Paketen auf Abruf und im Hintergrund; Schriften und Symbole auf den Bestand reduziert (389 KB → 54 KB). Gestaltung: vier CSS-Layer mit erklärter Rangfolge statt 16 gewachsener Schichten, vollständiges Token-System (Typografie, 8-px-Raster, Tiefe, Bewegung), Kategoriefarben mit nachgerechnetem Kontrast in beiden Themes, Hinweisblöcke als Warnstufen, Tabellen auf dem Telefon als Karten, „Inhalt" und „Drucken" neben der Überschrift. Neu: elf Score-Rechner aus den SOP-eigenen Tabellen, Querverweise, verwandte Pfade, zwei bislang verwaiste Abbildungen, Dienstzeitkennung im Telefonverzeichnis, Druckausgabe mit laufendem Kopf und Fuß. Behoben: Trefferhervorhebung zerriss HTML-Entitäten; Druck war ein Wettlauf gegen `window.print()`; Scrollposition ging beim Zurückgehen verloren; Lesefortschritt erzwang ein Layout je Frame; `aria-expanded` widersprach dem Zustand; „Therapie – …" und „Diagnostik & …" klappten nicht auf; `Esc` konnte die Tastaturbedienung mitreißen; das Inhaltsverzeichnis schloss sich beim Scrollen; Breakpoint-Wechsel baute die Ansichten nicht neu auf; `fa-wifi-slash` gibt es im Free-Satz nicht. SOP-Dateien unverändert. |
|---------|-------|------------|
| **v3.3.0** | Sep 2026 | Kompakter, modusabhängiger Kopfbereich, größeres Logo und Kategorie-Symbole, Kartenanimation bei Rückkehr, überarbeitetes Telefonverzeichnis mit Kopierfeedback; Suchtreffer springen zum Abschnitt, robustere Akkordeons, Dialoge und Direktlinks. SOP-Dateien unverändert. |
| **v3.2.0** | Sep 2026 | **Bewegungen durchgehend flüssig.** Behoben: der Ansichtswechsel setzte erst nach rund einem Fünftel seiner Strecke sichtbar ein, weil der Browser die neue Ansicht anordnen und zeichnen musste, während die Animationsuhr bereits lief – die Bildfolge wird jetzt im Zustand „angehalten" vorbereitet und startet erst, wenn der Inhalt steht (Startwert 100,0 % statt 80,8 %, null verworfene Frames statt vier); eine in v3.1 eingeführte animierte Helligkeitsstufe auf der abgehenden Ansicht halbierte die Bildrate des Wechsels (33,3 statt 16,7 ms je Frame) und ist entfallen; die Kapitelleiste wurde beim Anheften flacher, was in jedem Frame ein Layout erzwang, den Inhalt wandern ließ und die gepufferte Leistenhöhe ungültig machte, an der alle Sprungziele hängen; das Aufklappen animierte jedes Kind eines Abschnitts einzeln – bei langen Abschnitten leicht fünfzig Animationen. Neu: die gleitenden Markierungen in Kapitelleiste und Fußnavigation dehnen sich in Laufrichtung und ziehen sich am Ziel zusammen, statt zu springen; die Startseite tritt als Kaskade auf; Kurven haben feste Aufgaben (`--ease-view`, `--ease-settle`, `--ease-spring`, `--ease-snap`), Dauern sind gestrafft (Ansichtswechsel 340 ms, Akkordeon 300 ms) und werden von einem Testlauf gegen ihre Spiegelung in JavaScript geprüft; Rückmeldung auf Berührung an Kopfzeilen-Schaltflächen, Abschnittsköpfen und Listeneinträgen. Nacharbeiten liegen hinter der Bewegung: die Navigationsliste wird über `requestIdleCallback` nachgezogen, das Inhaltsverzeichnis entsteht erst beim Öffnen. Gemessen: zehn von zehn geprüften Bewegungen mit 16,7 ms Median und null verworfenen Frames |
| **v3.1.0** | Sep 2026 | **Darstellung, Bedienung und Bewegung überarbeitet.** Layout: alle Ansichten teilen sich einen zentrierten Satzspiegel – vorher stand der Inhalt auf Tablet und breitem Desktop linksbündig in einer sehr breiten Spalte; die SOP-Übersicht ist ab 768 px zweispaltig; Kopfzeile und Breadcrumb tragen dieselbe Fläche wie der Inhalt und setzen sich erst beim Scrollen ab. SOP-Ansicht: der Text läuft unter der angehefteten Kapitelleiste weich aus, statt mitten im Buchstaben abgeschnitten zu werden; die Leiste wird beim Anheften flacher; die Scroll-Pfeile sitzen bündig am Rand und bringen ihre eigene Blende mit, statt über der letzten Schaltfläche zu schweben; das aktuelle Kapitel bekommt einen kurzen Streifen am Kopf statt eines ringsum eingefärbten Rahmens (der eine zweite blaue Linie auf der Gegenseite zog); neu ist eine Fortschrittslinie unter der Kopfzeile. Inhaltsverzeichnis: höheres Blatt (zehn statt sechs sichtbare Kapitel), einzeilige Fußleiste, Name der SOP im Kopf, auslaufende Kante als Hinweis auf mehr Inhalt, und der Fokus landet auf dem Blatt statt mit Fokusring auf der Schließen-Schaltfläche. Bewegung: durchgängige Dauer- und Kurven-Tokens, ruhigere Ein- und Austritte, gleitende Markierung in der Fußnavigation, abgestimmte Zustände für Zeigegerät und Finger. Messbar behoben: der bildschirmfüllende `backdrop-filter` hinter den Overlays drückte das Öffnen der Schnellsuche von 60 auf 20 Bilder je Sekunde und ist einem Verlauf gewichen; die 73 Einzel-Listener je Liste und die 73 Auftrittsanimationen sind Ereignisdelegation und einer Begrenzung auf 18 sichtbare Einträge gewichen; `content-visibility` nimmt dem Browser die Arbeit für alles unterhalb des Sichtfensters ab |
| **v3.0.0** | Sep 2026 | **Anwendungslogik in zehn Module aufgeteilt.** `app.js` (3.495 Zeilen) ist zugunsten von [`js/core.js`](js/core.js) bis [`js/main.js`](js/main.js) entfallen; die Module teilen sich den Namensraum `window.SOPApp`, der Funktionsumfang bleibt vollständig erhalten. Behoben: das Suchfeld der Startseite reichte die Eingabe zeichenweise an die Schnellsuche weiter und verlor bei schnellem Tippen den Suchbegriff (jetzt eine Schaltfläche, die die Schnellsuche öffnet); der Filterbegriff der Übersicht wurde unmaskiert in ein HTML-Attribut geschrieben, ein Anführungszeichen zerlegte damit die Ansicht; SOP-Namen und Textausschnitte wurden ohne Maskierung eingebaut; die Schaltfläche „Alle" der Kapitelleiste war beim Öffnen einer SOP markiert, obwohl nur Diagnostik und Therapie offen standen, und blieb es auch nach dem Zuklappen eines Abschnitts; die Fokusfalle wählte das im Dokument erste statt das oberste Overlay, und beim Schließen eines von zwei Overlays verlor der Hintergrund seine Sperre; die Safe-Area wurde beim Aufziehen der Bildschirmtastatur neu vermessen und ließ das Layout springen; die Quellen einer SOP waren über die Kapitelleiste nicht erreichbar; `Enter` in der Schnellsuche blieb ohne Wirkung, obwohl die Fußzeile es ankündigte. Neu: Tastaturauswahl in der Schnellsuche samt direktem Einstieg in die Volltextsuche, Trefferanzahl und Abschnittsangabe in Such- und Übersichtsliste, Zurücksetzen leerer Filterergebnisse, Telefonnummern per Tipp in die Zwischenablage mit Kurzhinweis, `/` und `Rücktaste` als Tastenkürzel, Abschnittsköpfe als `<h2>` mit `aria-controls`, echte `<button>`-Elemente statt `div` mit `role="button"`, Schriftgrößen-Schaltflächen am Anschlag abgeschaltet, Seitentitel folgt der geöffneten SOP |
| **v2.10.0** | Sep 2026 | **Kapitelleiste bleibt oben.** Die Abschnittsleiste einer geöffneten SOP heftet sich beim Scrollen an den oberen Rand und wird nicht mehr durch eine separate Abschnittsleiste ersetzt; das gerade sichtbare Kapitel wird darin markiert, Sprungziele landen darunter. Behoben: der Spotlight teilte sich den Suchbegriff mit der Volltextsuche und löschte beim Schließen deren Ergebnisse, während im Eingabefeld weiter Text stand; das Zurückgehen legte einen zusätzlichen Verlaufseintrag an, sodass die Zurück-Taste des Browsers anschließend wieder vorwärts führte; die Volltextsuche parste bei jedem Tastendruck das HTML aller 73 SOPs; der Druck baute die Ansicht zweimal neu auf und verlor dabei die Scrollposition. Aufgeräumt: Schrift und Symbole liegen im Projekt statt auf zwei CDNs, Abschnittswahl läuft über einen einzigen Ereignispfad statt über touch plus nachgereichtes click, der parallele Navigationsstapel und ein redundanter IntersectionObserver entfallen, tote Regeln und Markup entfernt |
| **v2.9.0** | Sep 2026 | **Darstellung und Bewegung überarbeitet.** Behoben: Ansichtswechsel liefen nie an (Enter-Klasse wurde im selben Frame entfernt, abgehende Ansicht stand auf `display:none`); Zurück-Pfeil und alle Such-Leeren-Knöpfe waren wegen doppelter `display`-Deklaration dauerhaft sichtbar; Overlays sprangen auf, statt einzufahren; senkrechtes Scrollen am linken Rand war durch die Wischgeste blockiert; Auswahl im Segmented Control löste auf Touch doppelt aus; die Verlaufskanten des Segmented Control wurden nie geschaltet; jeder SOP-Aufbau legte einen weiteren `resize`-Listener an; Trefferhervorhebung war im Dunkelmodus praktisch unlesbar; der Druck konnte Abschnitte leer ausgeben, weil die Auftrittsanimation noch lief. Neu: durchgängige Push-/Pop-/Fade-Übergänge, animiertes Akkordeon, gleitende Abschnittsmarkierung, fingerfolgende Wischgeste, Bottom-Sheet und Pull-to-Refresh auf `transform` umgestellt, gestaffelter Listenauftritt, Ripple-Feedback, Theme-Wechsel als Kreisblende, ein gemeinsamer `requestAnimationFrame`-Scroll-Handler mit gepufferten Abschnittspositionen, toter Skeleton-Code entfernt |
| **v2.8.1** | Sep 2026 | Korrektur Telefonverzeichnis: IMC KAIS (Arzt) lautet 4644 statt 4744 |
| **v2.8.0** | Aug 2026 | **UI/UX- und Barrierefreiheits-Überarbeitung**: echte Verlaufsnavigation über die History-API (`pushState`/`popstate`/`hashchange`), Tastaturbedienung für Karten, Listen und Abschnitte, Fokusfalle und Fokusrückgabe in allen Overlays, Sprunglink, `aria`-Auszeichnung und Überschriftenstruktur, kontrastgeprüfte Farbtokens (axe-core: 0 Verstöße in beiden Designs), größere Touch-Ziele, kein `user-scalable=no`, kompaktere Startseite und SOP-Liste, Schriftgrößen-Steuerung im Inhalts-Sheet, Bootstrap entfernt, Skripte mit `defer`, `prefers-reduced-motion` |
| **v2.7.0** | Aug 2026 | Stilles Auto-Update ohne Hinweisbanner, Telefonverzeichnis-Modal, Verweis darauf im Dispositionsfeld |
| **v2.6.0** | Aug 2026 | Dispositionsfeld aller 73 SOPs auf die hausinternen Dispositionsrichtlinien (Ampelschema GRÜN/GELB/ROT) umgestellt |
| **v2.5.0** | Feb 2026 | **Touch-Optimierung für Segmented Control**: Tap vs. Scroll Unterscheidung durch Bewegungserkennung (10px Schwelle), Ghost Tap Prevention - keine unbeabsichtigten Aktionen mehr beim Scrollen, visuelles Feedback bei Touch mit `.tap-active` Klasse, 300ms Click-Delay entfernt durch `touch-action: manipulation`, Passive Event Listeners für optimale Scroll-Performance, iOS PWA standalone mode vollständig unterstützt |
| **v2.4.2** | Feb 2026 | **Segmented Control Titel-Verbesserung**: JavaScript-Kürzung entfernt, CSS-basierte Ellipsis, Responsive Button-Breiten (Desktop: 150px, Mobile: 100px), Tooltip zeigt immer vollständigen Titel bei Hover |
| **v2.4.1** | Feb 2026 | **Segmented Control Scroll-Pfeile**: Dezent eingeblendete Pfeile bei Overflow, Smooth Scroll-Animation (120px), Automatische Sichtbarkeit basierend auf Scroll-Position, Haptic Feedback bei Klick, Resize-Event-Handling |
| **v2.4.0** | Feb 2026 | **Segmented Control Optimierung (Phase 1)**: Intelligente Titel-Kürzung mit Wort-Erhaltung (12 Zeichen), Tooltips bei gekürzten Buttons, ARIA-Attribute für Barrierefreiheit, Tastaturnavigation (Pfeiltasten, Home/End, Enter/Space), Haptic Feedback (10ms Vibration), Fokus-Styles für Tastatur-Nutzer |
| **v2.3.2** | Feb 2026 | **Segmented Control Fix**: Begrenzung auf 5 Sections aufgehoben - alle Sections sind nun in der horizontalen Button-Leiste sichtbar und bei vielen Sections horizontal scrollbar |
| **v2.3.1** | Feb 2026 | Section Picker Fix: CSS Flexbox-Layout-Problem behoben - `.picker-list` mit `min-height: 0` für korrektes Overflow-Verhalten |
| **v2.3.0** | Feb 2026 | iOS PWA Safe-Area-Fix mit JavaScript-Laufzeiterkennung und iPhone Screen Height Lookup Table |
| **v2.2.4** | Feb 2026 | Robuste iOS PWA Bottom-Navbar Positionierung + "Stand: Datum/Uhrzeit" von Startseite entfernt |
| **v2.2.3** | Feb 2026 | Erste iOS PWA Bottom-Navbar Lösung (funktionierte nicht) |
| **v2.2.2** | Feb 2026 | Fix: Update-Benachrichtigung Endlosschleife verhindert |

---
