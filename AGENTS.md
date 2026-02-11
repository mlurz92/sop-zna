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

Jede Ansicht ist als DIV mit der Klasse `.v` implementiert, wobei nur die aktive Ansicht die Klasse `.active` trägt. Die View-Transitions werden durch CSS-Animationen mit den Klassen `push-enter`, `push-exit`, `pop-enter` und `pop-exit` gesteuert.

Das View-Management erfolgt über die Funktion `sTab(t)`, wobei `t` den Zieltab bezeichnet (`home`, `browse`, `search` oder `sop`). Diese Funktion aktualisiert den internen State `S.tab`, zeigt die entsprechende Ansicht an und rendert die passenden UI-Komponenten wie Breadcrumbs und Bottom-Navigation.

### Navigation Stack

Das Herzstück der Navigation ist der `S.navStack` Array, der die Navigationshistorie verwaltet:

```javascript
// Push: Aktuellen Zustand speichern
S.navStack.push({ sopId: S.sopId, tab: S.tab });

// Pop: Vorherigen Zustand wiederherstellen
var prevState = S.navStack.pop();
S.sopId = prevState.sopId;
```

**Wichtig:** Bei leerem Stack navigiert `popNav()` zum Home-Bildschirm, nicht zur Browse-Ansicht.

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
| `S.navStack` | Array | Navigationshistorie |

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

### Navigation und Animation

| Funktion | Beschreibung | Dauer |
|----------|--------------|-------|
| `pushNav(id)` | Pusht Stack und navigiert zu SOP | 400ms Animation |
| `popNav()` | Poppt Stack oder navigiert zu Home | 400ms Animation |
| `animatePush()` | Push-Transition (rechts nach links) | 400ms |
| `animatePop()` | Pop-Transition (links nach rechts) | 400ms |

### Touch-Gesten

| Funktion | Beschreibung | Konstanten |
|----------|--------------|------------|
| `initSwipeGestures()` | Initialisiert Touch-Event-Listener | `EDGE_MARGIN = 20` |
| `handleTouchStart()` | Erkennt Swipe-Start im Randbereich | |
| `handleTouchMove()` | Verarbeitet Swipe-Bewegung | `HORIZONTAL_THRESHOLD = 8` |
| `handleTouchEnd()` | Beendet Swipe und triggert Aktion | `SWIPE_THRESHOLD = 60` |

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

### Dynamische Element-Referenzen

Elemente, die durch `innerHTML` erstellt werden, existieren nicht im DOM-Cache `E`. Nach `rBrowse()` müssen Referenzen wie `E.browseSearchInput` neu gesetzt werden:

```javascript
E.viewBrowse.innerHTML = html;
E.browseSearchInput = document.getElementById('browseSearchInput');
E.browseList = document.getElementById('browseList');
```

### Animation-Timing

CSS-Animationen dauern 400ms (push/pop) oder 300ms (andere). JavaScript-Callbacks in `setTimeout()` müssen mit diesem Timing synchronisiert sein.

### View-Stack bei Tab-Wechsel

Wenn Nutzer zwischen Tabs wechseln (z.B. Home zu Browse), wird `S.navStack` geleert. Dies ist beabsichtigt, da Tab-Wechsel keine Hierarchiebeziehung darstellen. Nur SOP-zu-SOP Navigation nutzt den Stack.

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

*Letzte Aktualisierung: Februar 2026*
*Version 2.2 – Optimiert für KI-Agenten*
