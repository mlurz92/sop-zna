# AGENTS.md – Dokumentation für KI-Agenten

> **WICHTIG:** Diese Datei ist die Referenz für KI-Assistenten und Agenten, die an diesem Projekt arbeiten. Sie beschreibt Architektur, Aufbau und Konventionen des SOP-ZNA-Projekts vollständig.

## Projektübersicht

SOP-ZNA ist eine Progressive Web Application für die Darstellung von 73 evidenzbasierten Standard Operating Procedures (SOPs) in der Zentralen Notaufnahme des Klinikums St. Georg Leipzig. Die Anwendung ist eine Single-Page-Application ohne Framework-Abhängigkeiten und nutzt ES5-kompatibles JavaScript für maximale Browser-Kompatibilität.

Die Anwendungslogik liegt in **zehn Modulen** unter `js/`. Dazu kommen `index.html` für die DOM-Struktur, `styles.css` für das Styling und 73 SOP-Dateien in `sops/`, die jeweils ein Datenobjekt in das globale `SOP_DATA` Array legen.

> **Die SOPs selbst sind fachlicher Inhalt.** Dateien in `sops/` werden nicht verändert – weder Wortlaut noch HTML –, solange das nicht ausdrücklich verlangt wird.

---

## Verzeichnisstruktur

```
sop-zna/
├── index.html              # Einstiegspunkt mit HTML-Struktur
├── js/
│   ├── core.js             # Konfiguration, Zustand, DOM-Puffer, Hilfsfunktionen
│   ├── motion.js           # Bewegungssteuerung
│   ├── platform.js         # Theme, Schrift, Safe-Area, Offline, Versionswechsel
│   ├── router.js           # Adresse, Verlauf, Öffnen und Zurück
│   ├── views.js            # Ansichtswechsel, Tabs, Kopfzeile, Breadcrumb, Scrollen
│   ├── lists.js            # Seitenleiste, Startseite, Übersicht, Volltextsuche
│   ├── segmented.js        # Angeheftete Kapitelleiste
│   ├── sop.js              # SOP-Ansicht, Akkordeon, Scroll-Spy, Drucken
│   ├── overlays.js         # Schnellsuche, Inhaltsverzeichnis, Telefonverzeichnis
│   └── main.js             # Gesten, Ereignisbindung, Start
├── styles.css              # Vollständiges Stylesheet (ca. 4700 Zeilen)
├── version.json            # Versionsdatei für Update-Check
├── AGENTS.md               # Diese Dokumentation
├── README.md               # Benutzerdokumentation
├── img/
│   ├── Basislogo_farbig.png
│   ├── Patientenpfade.png
│   └── ZNA/*.png           # SOP-spezifische Abbildungen
├── vendor/                 # Schrift und Symbole, lokal eingebunden
│   ├── fontawesome/        # all.min.css + fa-solid-900.woff2
│   └── inter/              # inter.css + latin/latin-ext woff2
└── sops/*.js               # 73 einzelne SOP-Module
```

**Wichtig:** Alle SOP-Dateien werden in `index.html` vor den Anwendungsmodulen eingebunden, damit `SOP_DATA` beim Start vollständig vorliegt.

---

## Modulsystem

Jedes Modul ist eine IIFE, die ihre öffentlichen Teile an den gemeinsamen Namensraum `window.SOPApp` hängt:

```javascript
(function(App) {
    'use strict';

    var S = App.S;   // Objekte duerfen beim Laden aliasiert werden -
    var E = App.E;   // ihre Identitaet aendert sich nie.

    App.machWas = function() {
        App.andereFunktion();   // Funktionen immer ueber App.<name>() aufrufen
    };

})(window.SOPApp);
```

`js/core.js` legt den Namensraum an (`window.SOPApp = window.SOPApp || {}`); alle weiteren Module setzen ihn voraus.

**Zwei Regeln:**

1. **Objekte** (`App.S`, `App.E`, `App.MOTION`, `App.CATS`, …) dürfen am Modulanfang in eine lokale Variable gelegt werden – sie werden nie ersetzt, nur verändert.
2. **Funktionen** werden stets als `App.foo()` aufgerufen, nie beim Laden in eine lokale Variable gelegt. Sonst würde ein Modul eine noch nicht definierte Funktion einfrieren.

**Wichtig:** Die Ladereihenfolge in `index.html` (`core → motion → platform → router → views → lists → segmented → sop → overlays → main`) ist Teil der Architektur. Wird ein neues Modul ergänzt, gehört es an die passende Stelle dieser Kette – und die Obergrenze von zehn Modulen bleibt bestehen.

---

## Architektur und Komponenten

### View-Management System

Vier Hauptansichten:

| View-ID | Beschreibung | Container |
|---------|--------------|-----------|
| `viewHome` | Startseite mit Hero-Bereich und Kategorien | `#viewHome` |
| `viewBrowse` | SOP-Liste mit Suchfeld und Filter | `#viewBrowse` |
| `viewSearch` | Volltextsuche mit Ausschnitten | `#viewSearch` |
| `viewSOP` | Einzelne SOP mit Kapitelleiste | `#viewSOP` |

Jede Ansicht ist ein DIV mit der Klasse `.v`; nur die aktive trägt `.active`. Während eines Wechsels tragen beide beteiligten Ansichten zusätzlich `.is-anim` (hält sie sichtbar) und eine Richtungsklasse: `anim-in-push` / `anim-out-push`, `anim-in-pop` / `anim-out-pop`, `anim-in-fade` / `anim-out-fade` sowie `anim-in-replace` / `anim-in-replace-back` für den Austausch innerhalb derselben Ansicht (SOP → SOP).

Das View-Management erfolgt über `App.sTab(t, mode, done)` (`js/views.js`):

- `t` – Zieltab (`home`, `browse`, `search`, `sop`)
- `mode` – `'push'`, `'pop'`, `'fade'` oder `null` für einen sofortigen Wechsel
- `done` – optionaler Rückruf nach Abschluss der Bewegung

Der Ablauf ist fest: Zielinhalt rendern → `App.uChrome()` für Kopfzeile, Breadcrumb, Fussnavigation und FAB → `App.switchView()` für die Bewegung → Nacharbeiten (Abschnittspositionen, Kapitelleiste, Adresse). `switchView()` räumt die Animationsklassen erst nach dem `animationend`-Ereignis auf; ein Zeitlimit dient als Sicherheitsnetz.

**Wichtig:** Die abgehende Ansicht wird während des Wechsels über `style.top = -scrollTop` optisch festgehalten, damit das Zurücksetzen der Scrollposition keinen Sprung erzeugt.

### Navigationstiefe

Es gibt **keinen** eigenen Navigationsstapel. Die Tiefe steckt allein im Browser-Verlauf – Einzelheiten im Abschnitt „Verlauf und Routing".

```javascript
App.pushNav(sopId);   // Oeffnen: legt einen Verlaufseintrag an
App.popNav();         // Zurueck: history.back(), sonst Ersatzroute
```

**Wichtig:** Ein zweiter Stapel neben dem Verlauf driftet unweigerlich auseinander – genau daran scheiterte die frühere Lösung, bei der auch das Zurückgehen einen neuen Eintrag anlegte.

### State Management

Der globale Zustand `App.S` enthält alle anwendungsweiten Variablen:

| Variable | Typ | Beschreibung |
|----------|-----|--------------|
| `S.data` | Array | Alle SOP-Objekte, alphabetisch sortiert |
| `S.tab` | String | Aktueller Tab (`home`, `browse`, `search`, `sop`) |
| `S.sopId` | String\|null | Aktuell geöffnete SOP |
| `S.catD` | String | Seitenleisten-Kategoriefilter (`all` oder Key) |
| `S.catB` | String | Übersichts-Kategoriefilter (`all` oder Key) |
| `S.bQ` | String | Filterbegriff der Übersicht |
| `S.sQ` | String | Begriff der Volltextsuche |
| `S.spotQ` | String | Begriff der Schnellsuche (getrennt von `S.sQ`) |
| `S.hQ` | String | Filterbegriff der Seitenleiste |
| `S.theme` | String | Theme (`light` oder `dark`) |
| `S.fs` | Number | Schriftgröße (13–20 px) |
| `S.mob` | Boolean | Mobiler Breakpoint (Breite < 1024 px) |
| `S.off` | Boolean | Keine Netzverbindung |
| `S.isNavigating` | Boolean | Sperre während eines laufenden Wechsels |

### DOM Element Cache

`App.cache()` (in `js/core.js`) füllt `App.E` mit Referenzen auf alle Elemente aus der ID-Liste `CACHED_IDS`. Das vermeidet wiederholte `document.getElementById()`-Aufrufe.

**Wichtig:** Elemente, die dynamisch über `innerHTML` entstehen (etwa in `App.rBrowse()`), existieren zum Zeitpunkt von `cache()` noch nicht. Sie werden nach dem Setzen von `innerHTML` erneut geholt:

```javascript
E.viewBrowse.innerHTML = html;
E.browseSearchInput = document.getElementById('browseSearchInput');
E.browseList = document.getElementById('browseList');
```

---

## Schlüsselfunktionen

### Render-Funktionen

| Funktion | Modul | Beschreibung |
|----------|-------|--------------|
| `App.rSB()` | lists.js | Kategorie-Chips der Seitenleiste mit Anzahl |
| `App.rNav()` | lists.js | Navigationsliste der Seitenleiste |
| `App.rHome()` | lists.js | Hero-Bereich und Kategorien-Raster |
| `App.rBrowse()` | lists.js | Übersicht inkl. Filterleiste (holt Referenzen neu) |
| `App.rBrowseCats()` | lists.js | Kategorie-Chips der Übersicht |
| `App.rBrowseList()` | lists.js | Liste der Übersicht mit Trefferanzahl |
| `App.searchSops(q)` | lists.js | Bewertete Treffer der Volltextsuche |
| `App.rSearch()` | lists.js | Ergebnisliste der Volltextsuche |
| `App.rSOP()` | sop.js | Vollständige SOP-Ansicht |
| `App.rPk()` | overlays.js | Inhaltsverzeichnis |
| `App.rDir(q)` | overlays.js | Telefonverzeichnis |
| `App.rBC(items)` | views.js | Breadcrumb |

### Angeheftete Kapitelleiste

Die Kapitelleiste steckt in einem Rahmen `.sop-seg-sticky`, der über `position: sticky` am oberen Rand des Inhaltsbereichs stehen bleibt. Der vollflächige Hintergrund kommt aus einem `::before`, das seitlich über die Polsterung der Ansicht hinausragt; `.scroll-area` beschneidet den Überstand.

`App.uSticky(y)` (`js/sop.js`) ist der Scroll-Spy: Er setzt `.is-stuck` am Rahmen, markiert das gerade sichtbare Kapitel mit `.is-current` (an Schaltfläche **und** Abschnitt) und aktualisiert das Inhaltsverzeichnis. Ein zusätzlicher `IntersectionObserver` dafür existiert bewusst nicht – eine Quelle, zwei Anzeigen.

**Wichtig:** `.is-current` (Scrollposition) und `.active` (getroffene Auswahl, hinterlegte Pille) sind getrennte Zustände und dürfen nicht vermischt werden. `App.syncSegmentedWithSections()` hält `.active` ehrlich: „Alle" nur, wenn wirklich alle Abschnitte offen stehen, ein Kapitel nur, wenn es als einziges offen ist – sonst ist nichts markiert und die Pille verschwindet.

**Fallstrick:** Bei `position: sticky` enthält `offsetTop` in Chrome die Klebeverschiebung. Die Ruheposition wird deshalb in `sectionOffsets()` nur übernommen, solange `segStuck` falsch ist.

### Verlauf und Routing

Der Browser-Verlauf ist die einzige Quelle der Navigationstiefe. `App.syncRoute(replace)` schreibt in jeden Eintrag einen laufenden Index (`{ r, i }`); `App.onPopState` vergleicht ihn mit `routeIndex` und leitet daraus die Richtung (`push`/`pop`) für die Animation ab. `App.popNav()` ruft `history.back()`, sofern `hasRouteHistory()` zutrifft, sonst greift die Ersatzroute (SOP → Übersicht → Start).

### Navigation und Animation

| Funktion | Modul | Beschreibung |
|----------|-------|--------------|
| `App.pushNav(id)` | router.js | Öffnet eine SOP und legt einen Verlaufseintrag an |
| `App.popNav()` | router.js | `history.back()`, sonst Ersatzroute |
| `App.gotoTab(t)` | views.js | Tabwechsel über die Fussnavigation |
| `App.switchView(from, to, mode, done)` | views.js | Führt den Ansichtswechsel aus und räumt danach auf |
| `App.uSticky(y)` | sop.js | Scroll-Spy für Kapitelleiste, Abschnitte, Inhaltsverzeichnis |
| `App.setSectionOpen(sec, open, animate)` | sop.js | Klappt einen Abschnitt mit animierter Höhe auf/zu |
| `App.updateSegmentedPill(animate)` | segmented.js | Setzt die gleitende Markierung auf die aktive Schaltfläche |
| `App.applyStagger(nodes, cls)` | motion.js | Gestaffelter Auftritt, Verzögerung bei 14 Elementen gedeckelt |
| `App.smoothScrollTo(container, top)` | motion.js | Weiches Scrollen über eine eigene rAF-Schleife |

### Touch-Gesten

Alle Gesten liegen in `js/main.js`; die Schwellenwerte stehen zentral in `App.GESTURE` (`js/core.js`):

| Schwelle | Wert | Bedeutung |
|----------|------|-----------|
| `edgeMargin` | 35 px | Randbereich, in dem der Zurück-Wisch beginnen darf |
| `swipeDistance` | 60 px | Strecke, ab der ausgelöst wird |
| `swipeVelocity` | 0.3 | ... oder Geschwindigkeit |
| `directionLock` | 8 px | Ab hier steht die Richtung fest |
| `segTapSlop` | 10 px | Tippen gegen Wischen in der Kapitelleiste |

**Wichtig:** `preventDefault()` wird erst aufgerufen, nachdem die waagerechte Richtung feststeht. Würde es wie früher sofort erfolgen, wäre senkrechtes Scrollen im linken Randbereich blockiert.

### Gestaltungsschicht in `styles.css`

Am Ende von `styles.css` steht eine zusammenhaengende Gestaltungsschicht (nummerierte Abschnitte 1–16). Sie enthaelt Rhythmus, Tiefe und Bewegung und hat im Zweifel Vorrang vor den Regeln darueber. Wer an der Darstellung arbeitet, sucht zuerst dort.

Zentrale Tokens dieser Schicht:

| Token | Bedeutung |
|-------|-----------|
| `--content-max` / `--content-narrow` | Satzspiegel aller Ansichten bzw. der Listen |
| `--gutter` | Seitenrand, je Breakpoint gesetzt |
| `--dur-tiny` … `--dur-enter` | Bewegungsdauern (zusaetzlich zu den bestehenden) |
| `--ease-settle`, `--ease-spring` | Kurven fuer gleitende Markierungen und Antippen |

**Zwei Regeln aus Messungen, die nicht zurueckgedreht werden sollten:**

1. **Kein `backdrop-filter` auf bildschirmfuellenden Flaechen.** Die Backdrops von Schnellsuche, Inhalts-Sheet und Telefonverzeichnis tragen einen radialen Verlauf, keinen Weichzeichner. Gemessen kostete der Weichzeichner zwei Drittel der Bildrate beim Oeffnen der Schnellsuche – unabhaengig davon, ob die Transparenz animiert wurde. Der kleine Weichzeichner der Fussnavigation ist davon nicht betroffen (schmaler Streifen).
2. **`content-visibility: auto` nur auf flachen Listeneintraegen** (`.browse-item`, `.search-result`, `#navList li`, `.dir-rows > li`), nie auf `.sop-section`. Dort wird `scrollHeight` des Inhalts fuer die Aufklapp-Animation gemessen; uebersprungene Teilbaeume wuerden falsche Hoehen liefern.

### Ereignisdelegation

`App.delegate(container, selector, handler)` (in `js/lists.js`) haengt **einen** `click`-Listener an die Liste statt einen an jede Zeile und merkt sich das am Element (`_delegated`), damit ein erneuter Aufbau nicht doppelt bindet. So arbeiten Seitenleiste, Uebersicht, Suchtreffer, Kategorie-Chips, Startkacheln, Schnellsuche, Inhaltsverzeichnis und Telefonverzeichnis.

**Wichtig:** Container, die per `innerHTML` neu entstehen (z.B. `E.browseList` nach `rBrowse()`), sind neue Elemente ohne `_delegated` – sie werden korrekt neu gebunden. Container, die bestehen bleiben (`E.navList`, `E.searchResultsArea`, `E.spotlightResults`, `E.sectionPickerList`, `E.dirBody`), werden nur einmal gebunden.

### Auftritt langer Listen

`App.applyStagger` animiert hoechstens `MOTION.staggerLimit` (18) Elemente. Alles darunter erscheint sofort – bei 73 Eintraegen sparte das 57 Animationen samt Ereignis-Listenern, und genau die waren ein spuerbarer Teil des ersten Frames eines Ansichtswechsels.

### Kopfzeile, Fortschritt und Fussnavigation

| Funktion | Modul | Wirkung |
|----------|-------|---------|
| `App.setScrolled(bool)` | views.js | setzt `#app.is-scrolled`; Kopfzeile und Breadcrumb bekommen dann Kante und Schatten |
| `App.updateReadProgress(y)` | views.js | skaliert `#readProgress > span`; nur in der SOP-Ansicht und nur bei nennenswerter Laenge sichtbar |
| `App.updateBottomNavPill()` | views.js | setzt Breite und Versatz der gleitenden Markierung; eine geoeffnete SOP zaehlt zum Tab „SOPs" |

Alle drei laufen im gemeinsamen `requestAnimationFrame`-Handler bzw. nach einem Ansichtswechsel – kein zusaetzlicher Scroll-Listener.

### Bewegungssteuerung

`App.MOTION` (`js/motion.js`) bündelt alle Dauern und die Systemeinstellung `prefers-reduced-motion`:

```javascript
App.MOTION.reduced      // true, wenn Bewegung reduziert werden soll
App.MOTION.view         // 360 ms – Ansichtswechsel
App.MOTION.section      // 320 ms – Akkordeon
App.MOTION.staggerStep  // 26 ms je Listenelement
App.MOTION.staggerMax   // gedeckelt bei 14 Elementen
```

Hilfsfunktionen: `App.afterMotion(el, event, dauer, cb)` wartet auf `animationend`/`transitionend` mit Zeitlimit, `App.nextFrame(cb)` überspringt zwei Frames, `App.reflow(el)` erzwingt einen Layoutdurchlauf zwischen Start- und Zielzustand.

**Regel:** Es werden ausschließlich `transform`, `opacity` und `clip-path` animiert. Eigenschaften, die Layout auslösen (`width`, `height`, `top`, `max-height`), gehören nicht in laufende Animationen – die einzige Ausnahme ist die bewusst per JavaScript gesteuerte Höhe des Akkordeons.

---

## CSS-Organisation und Konventionen

### Custom Properties

```css
:root {
    /* Farben */
    --primary: #2563eb;
    --surface: #ffffff;
    --text: #0f172a;

    /* Layout */
    --sidebar-w: 280px;
    --topbar-h: 56px;
    --btm-h: 64px;

    /* Safe Areas */
    --sat: env(safe-area-inset-top, 0px);
    --sab-js: 0px;   /* zur Laufzeit gemessen, siehe platform.js */

    /* Animation */
    --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
}
```

### Bedienelemente sind `<button>`

Karten, Listeneinträge, Filterchips, Abschnittsköpfe und Verzeichniszeilen sind echte `<button>`-Elemente, keine `div` mit `role="button"`. Damit funktionieren Tastaturbedienung, Fokus und Hilfstechnologien ohne Zusatzlogik.

Direkt unter dem globalen `*`-Reset in `styles.css` steht ein Block, der die Browservorgaben dieser Schaltflächen zurücknimmt (Schrift, Farbe, Rahmen, Ausrichtung). Er steht bewusst **weit oben**: die spezifischeren Regeln weiter unten (Hintergrund, Rahmen, Layout) behalten Vorrang.

**Fallstrick:** Der Inhalt eines `<button>` ist „phrasing content". Blockelemente wie `<p>`, `<h4>` oder `<div>` gehören nicht hinein – stattdessen `<span>` mit `display: block`. Deshalb tragen `.sr-title`, `.sr-snippet`, `.spotlight-result-info` und `.dir-row-main` eigene `display`-Regeln.

### Viewport-Einheiten

```css
html, body, #app {
    height: 100dvh;   /* reagiert auf Browser-UI */
    height: 100vh;    /* Fallback */
    height: 100svh;   /* ohne Browser-UI */
}
```

### Responsive Breakpoints

| Breakpoint | Breite | Änderungen |
|------------|--------|------------|
| Desktop | ≥ 1024 px | Seitenleiste sichtbar, Fussnavigation und FAB ausgeblendet |
| Tablet | 481–1023 px | Keine Seitenleiste, angepasste Abstände |
| Mobil | ≤ 480 px | Kompakte Darstellung, Raster mit 2 Spalten |

### Touch-Optimierung

```css
.cat-card, .btm-btn, .sop-section-head {
    min-height: 44px; /* Apple-Empfehlung */
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
}
```

---

## SOP-Datenstruktur

```javascript
{
    id: "eindeutige-id",           // Eindeutiger String für URL-Hash
    name: "Titel der SOP",         // Anzeigename (Fallback: title)
    title: "Titel der SOP",
    category: "kardio",            // Schlüssel oder Anzeigename aus CATS
    stand: "02/26",                // Datum der letzten Aktualisierung
    sources: "<p>Quellen...</p>",  // HTML-String
    sections: [
        { title: "Diagnostik", html: "<p>Inhalt</p>" }
    ]
}
```

`App.normSop(d)` ergänzt fehlende Felder aus alternativen Schreibweisen (`title`, `date`, `quellen`, `references`, `content`, `body`, `text`) und löst die Kategorie über `App.rc()` auf. **Der fachliche Inhalt bleibt dabei unverändert.**

### Kategorien-Konfiguration

`CATS`, `CC` (Farben) und `SIC` (Symbole je Abschnittstitel) stehen in `js/core.js`. `App.gc(k)` liefert die Farbe, `App.catName(k)` den Anzeigenamen, `App.catIcon(k)` das Symbol.

---

## Entwicklungskonventionen

### JavaScript-Stil

- Variablen mit `var` (ES5-Kompatibilität), `'use strict'` in jedem Modul
- Render-Funktionen beginnen mit `r` (`rHome`, `rBrowse`, `rSOP`)
- Navigation: `sTab`, `pushNav`, `popNav`, `gotoTab`
- Cross-Modul-Aufrufe immer über `App.<name>()`

### Text im HTML entschärfen

| Funktion | Zweck |
|----------|-------|
| `App.esc(t)` | Text für den Einbau in HTML (`&`, `<`, `>`) |
| `App.escAttr(t)` | Zusätzlich Anführungszeichen – für Attributwerte |
| `App.hl(escapedText, query)` | Hebt Treffer mit `<mark>` hervor; erwartet **bereits entschärften** Text |
| `App.sopName(d, query)` | Kurzform: entschärfter, hervorgehobener SOP-Name |

**Regel:** Jeder Wert, der aus Daten oder Eingaben in eine HTML-Zeichenkette wandert, läuft durch `esc()` bzw. `escAttr()`. Einzige Ausnahme ist der HTML-Inhalt der SOP-Abschnitte und -Quellen – er stammt aus den gepflegten Dateien in `sops/` und wird bewusst unverändert eingesetzt.

### CSS-Konventionen

- BEM-ähnliche Benennung: `.sop-section-head`, `.segmented-btn`
- Modifier als zusätzliche Klassen: `.open`, `.active`, `.is-current`, `.show`
- Kommentare mit `====` Trennern gliedern die Datei

---

## Bekannte Eigenheiten und Fallstricke

### Ein Ereignispfad je Bedienelement

Die Schaltflächen der Kapitelleiste werden ausschließlich über `click` ausgelöst (`App.bindSegmentedButton`). Das deckt Maus, Tippen, Tastatur und Hilfstechnologien gleichermaßen ab. Die Pointer-Ereignisse dienen nur dazu, ein Wischen zum Scrollen der Leiste zu erkennen und den darauf folgenden `click` zu verwerfen.

**Nicht wieder einführen:** ein zweiter Pfad über `touchend`, der zusätzlich zum nachgereichten `click` feuert. Das löste jede Auswahl doppelt aus.

### Ziel- gegen Zwischenzustand eines Abschnitts

Während der Höhenanimation trägt `.sop-section-body` noch die alte `.open`-Klasse – sie wird erst im `transitionend`-Rückruf umgesetzt. Wer den Zustand direkt nach einem Umschalten auswertet, braucht das Ziel, nicht den Zwischenstand:

| Funktion | Liefert |
|----------|---------|
| `App.isSectionOpen(sec)` | Tatsächlicher Zustand des Inhalts |
| `App.isSectionTargetOpen(sec)` | Zustand, auf den der Abschnitt zuläuft (`.is-open` am `<section>`) |

`syncSegmentedWithSections()` nutzt die zweite Variante – sonst bliebe „Alle" nach dem Zuklappen eines Abschnitts fälschlich markiert.

### Gepufferte Textsuche

`App.secTextLower(sec)` und `App.sourcesTextLower(d)` lösen den Volltext einmalig aus dem HTML und legen ihn am SOP-Objekt ab (`_text`, `_textLower`, `_srcLower`). Ohne diesen Puffer würde bei jedem Tastendruck das HTML aller 73 SOPs neu geparst.

### Dynamische Element-Referenzen

Elemente aus `innerHTML` existieren nicht im DOM-Puffer `E`. Nach `rBrowse()` werden `E.browseSearchInput`, `E.browseList`, `E.browseCount` usw. neu gesetzt.

### Animation-Timing

Dauern stehen als CSS Custom Properties (`--dur-view`, `--dur-view-fast`, `--dur-section`, `--dur-micro`) und gespiegelt im `App.MOTION`-Objekt. Wird eine Dauer geändert, müssen **beide** Stellen angepasst werden. Auf Ereignisse wird über `App.afterMotion()` gewartet, nicht über feste `setTimeout()`-Werte.

### Overlays sind immer im DOM

Schnellsuche, Inhaltsverzeichnis und Telefonverzeichnis wechseln nicht zwischen `display:none` und `display:block` – ein Wechsel der `display`-Eigenschaft unterbindet CSS-Transitions. Stattdessen bleiben sie im Layout und werden über `visibility`, `opacity` und `transform` ein- und ausgeblendet.

### Overlay-Stapel und Fokus

`js/overlays.js` führt einen Stapel der geöffneten Overlays. Daraus ergeben sich drei Dinge:

- Die Fokusfalle (`App.trapFocus`) greift am **zuletzt geöffneten** Overlay, nicht am im Dokument ersten.
- `body.picker-open` (friert den Hintergrund ein) wird erst entfernt, wenn das **letzte** Overlay geschlossen ist.
- `Esc` schließt über `App.closeTopOverlay()` genau ein Overlay; `App.closeAllOverlays()` räumt bei einer Verlaufsnavigation alle ab.

### Abschnittspositionen sind gepuffert

`sectionOffsets()` liefert die Positionen der SOP-Abschnitte aus einem Cache. Nach jeder Änderung, die Höhen beeinflusst (Aufklappen, Neuaufbau, Größenänderung, Schriftgröße), muss `App.invalidateSectionOffsets()` aufgerufen werden.

### Verlauf bei Tab-Wechsel

Tabwechsel **ersetzen** den Verlaufseintrag (`replaceState`), da sie keine Hierarchiebeziehung darstellen. Nur das Öffnen einer SOP legt einen neuen Eintrag an. Die Bewegungsrichtung leitet sich aus der Reihenfolge Start → SOPs → Suche ab und ist unabhängig davon, was im Verlauf passiert.

### Safe Area auf iOS

`env(safe-area-inset-bottom)` liefert im iOS-Standalone-Modus 0px. `js/platform.js` misst den Wert zur Laufzeit und setzt ihn als `--sab-js`; CSS rechnet ausschließlich mit dieser Variablen.

**Fallstrick:** Beim Aufziehen der Bildschirmtastatur ändern sich `innerHeight` und `visualViewport.height`. Eine Neumessung in diesem Moment liefert Unsinn und lässt das Layout springen. `keyboardLikelyOpen()` bricht die Neumessung deshalb ab, solange ein Eingabefeld den Fokus hat oder der sichtbare Bereich deutlich verkürzt ist.

---

## SOP hinzufügen – Checkliste

1. **Datei erstellen:** `sops/neue-sop.js`
2. **Datenstruktur:** `window.SOP_DATA.push({...})` mit `id`, `name`/`title`, `category`, `stand`, `sections`
3. **Einbinden:** `<script defer src="sops/neue-sop.js">` in `index.html` **vor** `js/core.js`
4. **Prüfen:** Kategorie in `CATS` vorhanden? Farbe in `CC` definiert?

Zur Laufzeit nachgeladene SOPs meldet man über `window.registerSOP({...})` an – die Funktion normalisiert, sortiert ein und frischt die betroffenen Listen auf.

---

## Nützliche Entwickler-Befehle

### Lokaler Server

```bash
python3 -m http.server 8080   # Python 3
npx serve .                   # Node.js
php -S localhost:8080         # PHP
```

### Debugging in der Konsole

```javascript
SOPApp.S           // Zustand
SOPApp.E           // DOM-Puffer
SOPApp.S.data      // normalisierte SOP-Daten
SOPApp.rSOP()      // aktuelle SOP neu aufbauen
```

### Deployment

Die Anwendung benötigt keinen Build-Prozess. Alle Änderungen sind sofort sichtbar.

---

## Version und Update-Check

`App.VERSION` am Anfang von `js/core.js` definiert die aktuelle Version. Bei jedem Seitenaufruf (außer `file://`) wird `version.json` geladen und verglichen. Bei Abweichung werden die Caches verworfen und die Seite genau einmal still neu geladen; ein Marker im `sessionStorage` verhindert eine Reload-Schleife.

**Wichtig:** `App.VERSION` und `version.json` müssen bei jeder Veröffentlichung gemeinsam angehoben werden.

---

*Letzte Aktualisierung: September 2026*
*Version 3.1 – Modulare Fassung mit Gestaltungsschicht*
