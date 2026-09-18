# AGENTS.md – Dokumentation für KI-Agenten

> **WICHTIG:** Diese Datei dient als Referenz für KI-Assistenten und Agenten, die an diesem Projekt arbeiten oder Änderungen vornehmen möchten. Sie enthält eine vollständige Übersicht über die Architektur, den Aufbau und die Konventionen des SOP-ZNA Projekts.

## Projektübersicht

SOP-ZNA ist eine Progressive Web Application für die Darstellung von 73 evidenzbasierten Standard Operating Procedures (SOPs) in der Zentralen Notaufnahme des Klinikums St. Georg Leipzig. Die Anwendung ist als Single-Page-Application ohne Framework-Abhängigkeiten konzipiert und nutzt reines ES5-kompatibles JavaScript für maximale Browser-Kompatibilität.

Das Projekt besteht aus einer übersichtlichen Struktur mit drei Hauptdateien: `index.html` für die DOM-Struktur, `app.js` für die gesamte Anwendungslogik und `styles.css` für das vollständige Styling. Zusätzlich existieren 73 modulare SOP-Dateien im `sops/` Verzeichnis, die dynamisch geladen werden und jeweils ein Datenobjekt in das globale `SOP_DATA` Array pushen.

---

## Verzeichnisstruktur

```
sop-zna/
├── index.html              # Einstiegspunkt mit HTML-Struktur
├── app.js                  # Hauptanwendungslogik (ca. 2000 Zeilen)
├── styles.css              # Vollständiges Stylesheet (ca. 3000 Zeilen)
├── version.json            # Versionsdatei für Update-Check
├── AGENTS.md               # Diese Dokumentation für KI-Agenten
├── README.md               # Benutzerdokumentation
├── img/
│   ├── Basislogo_farbig.png
│   ├── Patientenpfade.png
│   └── ZNA/
│       └── *.png           # SOP-spezifische Abbildungen
├── vendor/                 # Schrift und Symbole, lokal eingebunden
│   ├── fontawesome/        # all.min.css + fa-solid-900.woff2
│   └── inter/              # inter.css + latin/latin-ext woff2
└── sops/
    └── *.js                # 73 einzelne SOP-Module
```

**Wichtig:** Alle SOP-Dateien werden in `index.html` vor `app.js` eingebunden, um im globalen Scope verfügbar zu sein.

---

## Architektur und Komponenten

### View-Management System

Die Anwendung nutzt ein View-basiertes System mit vier Hauptansichten:

| View-ID | Beschreibung | Container |
|---------|--------------|-----------|
| `viewHome` | Startseite mit Hero-Section und Kategorien | `#viewHome` |
| `viewBrowse` | SOP-Liste mit Suchfeld und Filter | `#viewBrowse` |
| `viewSearch` | Volltextsuche mit Snippets | `#viewSearch` |
| `viewSOP` | Einzelne SOP mit Segmented Control | `#viewSOP` |

Jede Ansicht ist als DIV mit der Klasse `.v` implementiert, wobei nur die aktive Ansicht die Klasse `.active` trägt. Während eines Wechsels tragen beide beteiligten Ansichten zusätzlich `.is-anim` (hält sie sichtbar) und eine Richtungsklasse: `anim-in-push` / `anim-out-push`, `anim-in-pop` / `anim-out-pop`, `anim-in-fade` / `anim-out-fade` sowie `anim-in-replace` / `anim-in-replace-back` für den Austausch innerhalb derselben Ansicht (SOP → SOP).

Das View-Management erfolgt über `sTab(t, mode, done)`:

- `t` – Zieltab (`home`, `browse`, `search`, `sop`)
- `mode` – `'push'`, `'pop'`, `'fade'` oder `null` für einen sofortigen Wechsel
- `done` – optionaler Rückruf nach Abschluss der Bewegung

Der Ablauf ist fest: Zielinhalt rendern → `uChrome()` für Kopfzeile, Breadcrumb, Bottom-Navigation und FAB → `switchView()` für die Bewegung → Nacharbeiten (Abschnittspositionen, Kapitelleiste, Adresse). `switchView()` räumt die Animationsklassen erst nach dem `animationend`-Ereignis auf; ein Zeitlimit dient als Sicherheitsnetz.

**Wichtig:** Die abgehende Ansicht wird während des Wechsels über `style.top = -scrollTop` optisch festgehalten, damit das Zurücksetzen der Scrollposition keinen Sprung erzeugt.

### Navigationstiefe

Es gibt **keinen** eigenen Navigationsstapel in der Anwendung. Die Tiefe steckt allein im Browser-Verlauf – Einzelheiten im Abschnitt „Verlauf und Routing".

```javascript
// Oeffnen: legt einen Verlaufseintrag an
pushNav(sopId);

// Zurueck: der Browser liefert das Ziel, popstate wendet es an
popNav();   // -> history.back(), sonst Ersatzroute
```

**Wichtig:** Ein zweiter Stapel neben dem Verlauf driftet unweigerlich auseinander – genau daran scheiterte die frühere Lösung, bei der auch das Zurückgehen einen neuen Eintrag anlegte.

### State Management

Der globale State `S` (Store) enthält alle anwendungsweiten Variablen:

| Variable | Typ | Beschreibung |
|----------|-----|--------------|
| `S.data` | Array | Alle SOP-Objekte |
| `S.tab` | String | Aktueller Tab (`home`, `browse`, `search`, `sop`) |
| `S.sopId` | String\|null | Aktuell geöffnete SOP |
| `S.catD` | String | Sidebar-Kategoriefilter (`all` oder Key) |
| `S.catB` | String | Browse-Kategoriefilter (`all` oder Key) |
| `S.bQ` | String | Browse-Suchbegriff |
| `S.sQ` | String | Spotlight-Suchbegriff |
| `S.hQ` | String | Home-Suchbegriff |
| `S.theme` | String | Theme (`light` oder `dark`) |
| `S.fs` | Number | Schriftgröße (13-20px) |
| `S.mob` | Boolean | Mobile Breakpoint (width < 1024px) |
| `S.spotQ` | String | Suchbegriff des Spotlights (getrennt von `S.sQ`) |

### DOM Element Cache

Die Funktion `cache()` initialisiert das `E` Objekt mit Referenzen auf alle wichtigen DOM-Elemente. Diese Technik vermeidet wiederholte `document.getElementById()` Aufrufe und verbessert die Performance erheblich.

**Wichtig:** Neue Elemente, die dynamisch erstellt werden (wie in `rBrowse()`), müssen nach dem Setzen von `innerHTML` erneut gecached werden durch `document.getElementById()`.

---

## Schlüsselfunktionen

### Render-Funktionen

| Funktion | Beschreibung | Wichtig |
|----------|--------------|---------|
| `rSB()` | Rendert Sidebar-Kategorien mit Counts | Nutzt `CATS` und `CC` |
| `rNav()` | Rendert Sidebar-Navigationsliste | Gefiltert nach Kategorie und Suche |
| `rHome()` | Erstellt Hero-Section und Kategorien-Grid | Hier neue "Alle SOPs" Kachel |
| `rBrowse()` | Generiert Browse-Ansicht | Dynamische Elemente benötigen Recaching |
| `rSearch()` | Führt Volltextsuche durch | Zeigt Snippets und Highlights |
| `rSOP()` | Rendert vollständige SOP | Komplexeste Funktion |

### Angeheftete Kapitelleiste

Das Segmented Control steckt in einem Rahmen `.sop-seg-sticky`, der über `position: sticky` am oberen Rand des Inhaltsbereichs stehen bleibt. Der vollflächige Hintergrund kommt aus einem `::before`, das seitlich über die Polsterung der Ansicht hinausragt; `.scroll-area` beschneidet den Überstand.

`uSticky(y)` ist der Scroll-Spy: Er setzt `.is-stuck` am Rahmen, markiert das gerade sichtbare Kapitel mit `.is-current` (an Schaltfläche **und** Abschnitt) und aktualisiert das Inhaltsverzeichnis. Ein zusätzlicher `IntersectionObserver` dafür existiert bewusst nicht mehr – eine Quelle, zwei Anzeigen.

**Wichtig:** `.is-current` (Scrollposition) und `.active` (getroffene Auswahl, hinterlegte Pille) sind getrennte Zustände und dürfen nicht vermischt werden.

**Fallstrick:** Bei `position: sticky` enthält `offsetTop` in Chrome die Klebeverschiebung. Die Ruheposition wird deshalb in `sectionOffsets()` nur übernommen, solange `segStuck` falsch ist.

### Verlauf und Routing

Der Browser-Verlauf ist die einzige Quelle der Navigationstiefe – einen `S.navStack` gibt es nicht mehr. `syncRoute(replace)` schreibt in jeden Eintrag einen laufenden Index (`{ r, i }`); `onPopState` vergleicht ihn mit `routeIndex` und leitet daraus die Richtung (`push`/`pop`) für die Animation ab. `popNav()` ruft `history.back()`, sofern `hasRouteHistory()` zutrifft, sonst greift die Ersatzroute (SOP → Übersicht → Start).

### Navigation und Animation

| Funktion | Beschreibung | Dauer |
|----------|--------------|-------|
| `pushNav(id)` | Öffnet eine SOP und legt einen Verlaufseintrag an | 360 ms |
| `popNav()` | `history.back()`, sonst Ersatzroute zu Übersicht/Start | 360 ms |
| `uSticky(y)` | Scroll-Spy für Kapitelleiste, Abschnitte und Inhaltsverzeichnis | – |
| `switchView(from, to, mode, done)` | Führt den Ansichtswechsel aus und räumt danach auf | `--dur-view` |
| `setSectionOpen(sec, open, animate)` | Klappt einen Abschnitt mit animierter Höhe auf/zu | `--dur-section` |
| `updateSegmentedPill(animate)` | Setzt die gleitende Markierung auf die aktive Schaltfläche | 380 ms |
| `applyStagger(nodes, cls)` | Gestaffelter Auftritt, Verzögerung bei 14 Elementen gedeckelt | 420 ms |
| `smoothScrollTo(container, top)` | Weiches Scrollen über eine eigene rAF-Schleife | adaptiv |

### Touch-Gesten

| Funktion | Beschreibung | Konstanten |
|----------|--------------|------------|
| `initSwipeGestures()` | Initialisiert Touch-Event-Listener | `EDGE_MARGIN = 35` |
| `handleTouchStart()` | Erkennt Swipe-Start im Randbereich | |
| `handleTouchMove()` | Legt die Richtung einmalig fest und bewegt die Ansicht mit | `HORIZONTAL_THRESHOLD = 8` |
| `handleTouchEnd()` | Entscheidet über Strecke oder Geschwindigkeit | `SWIPE_THRESHOLD = 60`, `SWIPE_VELOCITY = 0.3` |

**Wichtig:** `preventDefault()` wird erst aufgerufen, nachdem die waagerechte Richtung feststeht. Würde es wie früher sofort erfolgen, wäre senkrechtes Scrollen im linken Randbereich blockiert.

### Bewegungssteuerung

Das Objekt `MOTION` bündelt alle Dauern und die Systemeinstellung `prefers-reduced-motion`:

```javascript
MOTION.reduced      // true, wenn Bewegung reduziert werden soll
MOTION.view         // 360 ms – Ansichtswechsel
MOTION.section      // 320 ms – Akkordeon
MOTION.staggerStep  // 26 ms je Listenelement
MOTION.staggerMax   // gedeckelt bei 14 Elementen
```

Hilfsfunktionen: `afterMotion(el, event, dauer, cb)` wartet auf `animationend`/`transitionend` mit Zeitlimit, `nextFrame(cb)` überspringt zwei Frames, `reflow(el)` erzwingt einen Layoutdurchlauf zwischen Start- und Zielzustand.

**Regel:** Es werden ausschließlich `transform`, `opacity` und `clip-path` animiert. Eigenschaften, die Layout auslösen (`width`, `height`, `top`, `max-height`), gehören nicht in laufende Animationen – die einzige Ausnahme ist die bewusst per JavaScript gesteuerte Höhe des Akkordeons.

---

## CSS-Organisation und Konventionen

### Custom Properties

Die Anwendung nutzt umfassend CSS Custom Properties für konsistentes Theming:

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
    --sab: env(safe-area-inset-bottom, 0px);
    
    /* Animation */
    --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
}
```

### Viewport-Einheiten

Die Anwendung nutzt drei Viewport-Einheiten für maximale iOS-Kompatibilität:

```css
html, body, #app {
    height: 100dvh;   /* Dynamic VH - reagiert auf Browser-UI */
    height: 100vh;    /* Fallback */
    height: 100svh;   /* Small VH - ohne Browser-UI */
}
```

### Responsive Breakpoints

| Breakpoint | Max-Breite | Änderungen |
|------------|------------|------------|
| Desktop | ≥ 1024px | Sidebar sichtbar, Bottom-Nav ausgeblendet |
| Tablet | 481-1023px | Keine Sidebar, angepasste Abstände |
| Mobile | ≤ 480px | Kompakte Darstellung, Grid mit 2 Spalten |

### Touch-Optimierung

```css
.interactive {
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
}

.cat-card, .btm-btn, .sop-section-head {
    min-height: 44px; /* Apple-Empfehlung */
}
```

---

## SOP-Datenstruktur

Jede SOP ist ein Objekt mit folgenden Eigenschaften:

```javascript
{
    id: "eindeutige-id",           // Eindeutiger String für URL-Hash
    name: "Titel der SOP",         // Anzeigename
    title: "Titel der SOP",        // Fallback für name
    category: "kardio",            // Schlüssel aus CATS-Konfiguration
    stand: "02/26",// Datum der letzten Aktualisierung
    sources: "<p>Quellen...</p>",  // HTML-String mit Quellen
    sections: [                    // Array von Sektions-Objekten
        {
            title: "Diagnostik",   // Sections-Name
            html: "<p>Content</p>" // Beliebiger HTML-Content
        }
    ]
}
```

### Kategorien-Konfiguration

Die `CATS`-Objekt definiert alle verfügbaren Kategorien:

```javascript
var CATS = {
    'kardio': { name: 'Kardiologie', icon: 'fa-heart-pulse' },
    'pulmo': { name: 'Pneumologie', icon: 'fa-lungs' },
    // ... weitere Kategorien
};
```

Jeder Kategorie ist eine Farbe in `CC` (Category Colors) zugeordnet:

```javascript
var CC = {
    'kardio': '#ef4444',
    'pulmo': '#3b82f6',
    // ... weitere Farben
};
```

Die Funktion `gc(k)` extrahiert die Farbe für CSS-Inline-Styles:

```javascript
function gc(k) {
    return CC[k] || '#64748b'; // Fallback: Grau
}
```

---

## Entwicklungskonventionen

### JavaScript-Stil

Die Konvention folgt dem IIFE-Pattern mit `'use strict'`:

```javascript
(function() {
    'use strict';
    // Code hier
})();
```

**Wichtige Konventionen:**
- Variablen werden mit `var` deklariert (ES5-Kompatibilität)
- Helper-Funktionen haben einprägsame Namen
- Render-Funktionen beginnen mit `r` (rHome, rBrowse, rSOP)
- Navigation-Funktionen: `sTab`, `pushNav`, `popNav`

### Helper-Funktionen

| Funktion | Beschreibung | Beispiel |
|----------|--------------|----------|
| `rc(v)` | Kategorie auflösen | `rc('kardio')` → `'kardio'` |
| `gc(k)` | Farbe holen | `gc('kardio')` → `'#ef4444'` |
| `strip(html)` | HTML zu Text | `strip('<p>Hi</p>')` → `'Hi'` |
| `hl(text, query)` | Highlight | `hl('Hi Max', 'Max')` → `'Hi <mark>Max</mark>'` |

### CSS-Konventionen

- Klassen nutzen BEM-ähnliche Benennung: `.sop-section-head`, `.segmented-btn`
- Modifier haben zusätzliche Klassen: `.open`, `.active`, `.show`
- Kommentare mit `====` Trennern gliedern die Datei

---

## Bekannte Eigenheiten und Fallstricke

### Ein Ereignispfad je Bedienelement

Die Abschnitts-Schaltflächen werden ausschließlich über `click` ausgelöst (`bindSegmentedButton`). Das deckt Maus, Tippen, Tastatur und Hilfstechnologien gleichermaßen ab. Die Pointer-Ereignisse dienen nur dazu, ein Wischen zum Scrollen der Leiste zu erkennen und den darauf folgenden `click` zu verwerfen.

**Nicht wieder einführen:** ein zweiter Pfad über `touchend`, der zusätzlich zum nachgereichten `click` feuert. Das löste jede Auswahl doppelt aus und ließ sich nur mit einem globalen Zeitstempel notdürftig abfangen.

### Gepufferte Textsuche

`secTextLower(sec)` und `sourcesTextLower(d)` lösen den Volltext einmalig aus dem HTML und legen ihn am SOP-Objekt ab (`_text`, `_textLower`, `_srcLower`). Ohne diesen Puffer wurde bei jedem Tastendruck das HTML aller 73 SOPs neu geparst.

### Dynamische Element-Referenzen

Elemente, die durch `innerHTML` erstellt werden, existieren nicht im DOM-Cache `E`. Nach `rBrowse()` müssen Referenzen wie `E.browseSearchInput` neu gesetzt werden:

```javascript
E.viewBrowse.innerHTML = html;
E.browseSearchInput = document.getElementById('browseSearchInput');
E.browseList = document.getElementById('browseList');
```

### Animation-Timing

Dauern stehen als CSS Custom Properties (`--dur-view`, `--dur-view-fast`, `--dur-section`, `--dur-micro`) und gespiegelt im `MOTION`-Objekt. Wird eine Dauer geändert, müssen beide Stellen angepasst werden. Auf Ereignisse wird über `afterMotion()` gewartet, nicht über feste `setTimeout()`-Werte.

### Overlays sind immer im DOM

Spotlight, Inhalts-Sheet und Telefonverzeichnis wechseln nicht mehr zwischen `display:none` und `display:block` – ein Wechsel der `display`-Eigenschaft unterbindet CSS-Transitions. Stattdessen bleiben sie im Layout und werden über `visibility`, `opacity` und `transform` ein- und ausgeblendet.

### Abschnittspositionen sind gepuffert

`sectionOffsets()` liefert die Positionen der SOP-Abschnitte aus einem Cache. Nach jeder Änderung, die Höhen beeinflusst (Aufklappen, Neuaufbau, Größenänderung), muss `invalidateSectionOffsets()` aufgerufen werden.

### Verlauf bei Tab-Wechsel

Tabwechsel **ersetzen** den Verlaufseintrag (`replaceState`), da sie keine Hierarchiebeziehung darstellen. Nur das Öffnen einer SOP legt einen neuen Eintrag an. Die Bewegungsrichtung des Wechsels leitet sich aus der Reihenfolge Start → SOPs → Suche ab und ist unabhängig davon, was im Verlauf passiert.

### Safe Area auf iOS

Die Safe Areas werden über CSS-Variablen verwaltet. Für zuverlässige mobile Darstellung:
- Nutze `padding-bottom: max(20px, var(--sab))` für Bottom-Elemente
- Nutze `height: max(var(--btm-h), calc(var(--btm-h) + var(--sab)))` für Navigation

### Touch-Gesten-Schwellenwerte

Die Touch-Erkennung nutzt optimierte Schwellenwerte:
- `EDGE_MARGIN = 20px` (Randbereich für Swipe)
- `SWIPE_THRESHOLD = 60px` (für Pop-Auslösung)
- `HORIZONTAL_THRESHOLD = 8px` (Richtungserkennung)

---

## SOP hinzufügen – Checkliste

1. **Datei erstellen:** `sops/neue-sop.js`
2. **Datenstruktur:** `window.SOP_DATA.push({...})` mit `id`, `name`, `category`, `stand`, `sections`
3. **Einbinden:** Script-Tag in `index.html` vor `app.js` hinzufügen
4. **Testen:** Kategorie in `CATS` vorhanden? Farbe in `CC` definiert?

---

## Nützliche Entwickler-Befehle

### Lokaler Server

```bash
# Python 3
python3 -m http.server 8080

# Node.js
npx serve .

# PHP
php -S localhost:8080
```

### Deployment

Die Anwendung benötigt keinen Build-Prozess. Alle Änderungen sind sofort sichtbar.

---

## Version und Update-Check

Die `APP_VERSION` Variable am Anfang von `app.js` definiert die aktuelle Version. Bei jedem Seitenaufruf (außer `file://`) wird `version.json` geladen und mit der lokal gespeicherten Version verglichen. Bei Unterschied erscheint eine Notification mit der Option zum Aktualisieren durch Seiten-Reload.

---

## Support und Weiterentwicklung

Bei Fragen zur Architektur oder neuen Features kann diese Datei als Referenz dienen. Die `README.md` enthält zusätzliche Informationen für Endnutzer und Administratoren.

---

*Letzte Aktualisierung: September 2026*
*Version 2.4 – Optimiert für KI-Agenten*
