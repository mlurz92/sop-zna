# AGENTS.md – Dokumentation für KI-Agenten

Diese Datei dient als Referenz für KI-Assistenten und Agenten, die an diesem Projekt arbeiten oder Änderungen vornehmen möchten. Sie enthält eine vollständige Übersicht über die Architektur, den Aufbau und die Konventionen des SOP-ZNA Projekts.

## Projektübersicht

SOP-ZNA ist eine Progressive Web Application für die Darstellung von 73 evidenzbasierten Standard Operating Procedures (SOPs) in der Zentralen Notaufnahme des Klinikums St. Georg Leipzig. Die Anwendung ist als Single-Page-Application ohne Framework-Abhängigkeiten konzipiert und nutzt reines ES5-kompatibles JavaScript für maximale Browser-Kompatibilität.

Das Projekt besteht aus einer übersichtlichen Struktur mit drei Hauptdateien: `index.html` für die DOM-Struktur, `app.js` für die gesamte Anwendungslogik und `styles.css` für das vollständige Styling. Zusätzlich existieren 73 modulare SOP-Dateien im `sops/` Verzeichnis, die dynamisch geladen werden und jeweils ein Datenobjekt in das globale `SOP_DATA` Array pushen.

## Architektur und Komponenten

### View-Management System

Die Anwendung nutzt ein View-basiertes System mit vier Hauptansichten: Home (`viewHome`), Browse (`viewBrowse`), Search (`viewSearch`) und SOP (`viewSOP`). Jede Ansicht ist als DIV mit der Klasse `.v` implementiert, wobei nur die aktive Ansicht die Klasse `.active` trägt. Die View-Transitions werden durch CSS-Animationen mit den Klassen `push-enter`, `push-exit`, `pop-enter` und `pop-exit` gesteuert.

Das View-Management erfolgt über die Funktion `sTab(t)`, wobei `t` den Zieltab bezeichnet (`home`, `browse`, `search` oder `sop`). Diese Funktion aktualisiert den internen State `S.tab`, zeigt die entsprechende Ansicht an und rendert die passenden UI-Komponenten wie Breadcrumbs und Bottom-Navigation.

### Navigation Stack

Das Herzstück der Navigation ist der `S.navStack` Array, der die Navigationshistorie verwaltet. Bei jedem Aufruf von `pushNav(newSopId)` wird der aktuelle Zustand `{ sopId, tab }` auf den Stack gepusht. Die `popNav()` Funktion poppt den letzten Zustand und navigiert zurück. Wenn der Stack leer ist, wird intelligent zur Browse-Ansicht navigiert statt zum Startbildschirm.

Die Push-Navigation nutzt die `animatePush(callback)` Funktion für flüssige Übergänge nach rechts, während Pop-Navigation `animatePop(callback)` für Übergänge nach links verwendet. Beide Animationen sind GPU-beschleunigt und dauern etwa 400ms.

### State Management

Der globale State `S` (Store) enthält alle anwendungsweiten Variablen: `data` für alle SOP-Objekte, `tab` für aktuellen Tab, `sopId` für aktuell geöffnete SOP, `catD` und `catB` für Desktop- und Browse-Kategorien, `bQ` und `sQ` für Suchbegriffe, `theme` für Dark/Light-Mode, `fs` für Schriftgröße, `mob` für Breakpoint-Erkennung, sowie Flags für Animation-Status und Navigation-Stack.

### DOM Element Cache

Die Funktion `cache()` initialisiert das `E` Objekt mit Referenzen auf alle wichtigen DOM-Elemente. Diese Technik vermeidet wiederholte `document.getElementById()` Aufrufe und verbessert die Performance erheblich. Neue Elemente, die dynamisch erstellt werden (wie in `rBrowse()`), müssen nach dem Setzen von `innerHTML` erneut gecached werden.

## Schlüsselfunktionen und ihre Zwecke

### Render-Funktionen

Die `rSB()` Funktion rendert die Sidebar-Kategorien mit Count-Angaben. `rNav()` rendert die Sidebar-Navigationsliste basierend auf aktueller Kategorie und Suchfilter. `rHome()` erstellt die Hero-Section und Kategorien-Grid auf der Startseite. `rBrowse()` generiert die Browse-Ansicht mit Suchfeld, Kategorie-Filter und SOP-Liste. `rSearch()` führt die Volltextsuche durch und zeigt Ergebnisse mit Snippets an. `rSOP()` ist die komplexeste Funktion und rendert die vollständige SOP-Ansicht mit Header, Segmented Control und Sektionen.

### Navigation und Animation

`pushNav(id)` pusht den aktuellen Zustand auf den Stack und navigiert zur neuen SOP. `popNav()` poppt den vorherigen Zustand oder navigiert zur Browse-Ansicht, wenn der Stack leer ist. `animatePush()` und `animatePop()` steuern die View-Transitions mit CSS-Klassen und Timeouts. `handleTouchStart()`, `handleTouchMove()` und `handleTouchEnd()` implementieren die Swipe-to-Back Geste.

### Event-Bindings

Die `bind()` Funktion initialisiert alle Event-Listener einmalig beim Start. Wichtig: Dynamisch erstellte Elemente (wie in `rBrowse()` oder `rSOP()`) benötigen eigene Event-Bindings innerhalb der jeweiligen Render-Funktion.

## CSS-Organisation und Konventionen

### Custom Properties

Die Anwendung nutzt umfassend CSS Custom Properties (Variables) für konsistentes Theming. Die Farbpalette ist unter `--primary`, `--primary-light`, `--danger`, `--success`, `--warning` definiert. Layout-Variablen wie `--sidebar-w`, `--topbar-h`, `--btm-h` definieren Komponentengrößen. Animation-Timing ist unter `ease-out-expo`, `ease-out-cubic` und `spring-bounce` standardisiert.

### Responsive Breakpoints

Der Hauptbreakpoint liegt bei 1024px. Darunter erscheint die Mobile-Ansicht mit Topbar, Bottom-Navigation und ohne Sidebar. Ab 480px wird das Layout für kleine Smartphones angepasst. Landscape-Mode unter 1024px hat spezifische Anpassungen für vertikalen Platzmangel.

### Touch-Optimierung

Alle interaktiven Elemente nutzen `-webkit-tap-highlight-color: transparent` und `touch-action: manipulation` für optimale mobile Erfahrung. Touch-Targets sind mindestens 44px groß. Active-States nutzen kurze Transitions (0.1s) für sofortiges visuelles Feedback.

## SOP-Datenstruktur

Jede SOP ist ein Objekt mit folgenden Eigenschaften: `id` (eindeutiger String für URL-Hash), `name`/`title` (Anzeigename), `category` ( Schlüssel aus CATS-Konfiguration), `stand` (Datum der letzten Aktualisierung), `sources` (HTML-String mit Quellenangaben), und `sections` (Array von Sektions-Objekten).

Jede Sektion enthält `title` (Sections-Name wie "Diagnostik", "Therapie") und `html` (beliebiger HTML-Content mit Überschriften, Listen, Tables, Callouts). Sections können Icons aus der SIC-Konfiguration automatisch zugeordnet bekommen.

## Kategorien-Konfiguration

Die CATS-Objekt definiert alle verfügbaren Kategorien mit Name und FontAwesome-Icon. Jeder Kategorie ist eine Farbe in CC (Category Colors) zugeordnet. Diese Farben werden durchgc() helper-Funktion für CSS-Inline-Styles extrahiert.

## Wichtige Dateien und ihre Rolle

Die `index.html` enthält die grundlegende DOM-Struktur mit App-Container, Sidebar, Main-Content, Views, Bottom-Navigation und Modals. Wichtig ist das `<script>` Tag am Ende, das Service Worker und Caches deaktiviert – dies verhindert Probleme bei lokaler Entwicklung und sorgt für sofortige Updates bei WebApp-Nutzung.

Die `app.js` enthält alle Funktionen in einem IIFE-Gültigkeitsbereich. Wichtige globale Funktionen sind `registerSOP()` für dynamisches Hinzufügen von SOPs und alle init-Funktionen. APP_VERSION am Anfang des IIFEs definiert die aktuelle Version für den Update-Check.

Die `styles.css` nutzt keine CSS-Präprozessoren, sondern Plain CSS mit Custom Properties. Media Queries sind am Ende der Datei gruppiert. Die `prefers-reduced-motion` Query deaktiviert alle Animationen auf Wunsch.

## Entwicklungskonventionen

### JavaScript-Stil

Die Konvention folgt dem IIFE-Pattern mit 'use strict'. Variablen werden mit `var` deklariert (ES5-Kompatibilität). Helper-Funktionen haben einprägsame Namen wie `rc()` (resolve category), `gc()` (get color), `strip()` (HTML zu Text), `hl()` (highlight). Render-Funktionen beginnen mit `r` (rHome, rBrowse, rSOP). Navigation-Funktionen mit `sTab`, `pushNav`, `popNav`.

### CSS-Konventionen

Klassen nutzen BEM-ähnliche Benennung mit Bindestrichen (`sop-section-head`, `segmented-btn`). Modifier haben zusätzliche Klassen oder State-Attribute (`open`, `active`, `show`). Kommentare mit `================================` Trennern gliedern die Datei in logische Bereiche.

### Neue SOP hinzufügen

Eine neue SOP erfordert drei Schritte: Erstens die SOP-Datei unter `sops/` mit `window.SOP_DATA.push({...})` erstellen. Zweitens das Script in `index.html` vor `app.js` einbinden. Drittens die SOP testen und sicherstellen, dass `category` einem gültigen Schlüssel in CATS entspricht.

## Bekannte Eigenheiten und Fallstricke

### Dynamische Element-Referenzen

Elemente, die durch `innerHTML` erstellt werden, existieren nicht im DOM-Cache `E`. Nach `rBrowse()` müssen Referenzen wie `E.browseSearchInput` neu gesetzt werden. Dies geschieht durch `document.getElementById()` nach dem Setzen von `innerHTML`.

### Animation-Timing

CSS-Animationen dauern 400ms (push/pop) oder 300ms (andere). JavaScript-Callbacks in `setTimeout()` müssen mit diesem Timing synchronisiert sein. Falsches Timing führt zu unflüssigen Übergängen oder Race Conditions.

### View-Stack bei Tab-Wechsel

Wenn Nutzer zwischen Tabs wechseln (z.B. Home zu Browse), wird `S.navStack` geleert. Dies ist beabsichtigt, da Tab-Wechsel keine Hierarchiebeziehung darstellen. Nur SOP-zu-SOP Navigation nutzt den Stack.

### Service Worker Deaktivierung

Das `<script>` am Ende von `index.html` deaktiviert Service Worker und löscht Caches. Dies ist für lokale Entwicklung essentiell und verhindert, dass die WebApp alte Versionen anzeigt. Bei Deployment auf Produktivserver sollte dieser Code entfernt werden, wenn Service Worker gewünscht sind.

## Version und Update-Check

Die APP_VERSION Variable am Anfang von `app.js` definiert die aktuelle Version. Bei jedem Seitenaufruf (außer file://) wird `version.json` geladen und mit der lokal gespeicherten Version verglichen. Bei Unterschied erscheint eine Notification mit der Option zum Aktualisieren durch Seiten-Reload.

##Nützliche Entwickler-Befehle

Für lokale Entwicklung kann ein einfacher HTTP-Server verwendet werden. Python 3: `python3 -m http.server 8080`. Node.js: `npx serve .`. PHP: `php -S localhost:8080`. Nach Änderungen an SOP-Dateien ist kein Rebuild notwendig – die Änderungen sind sofort sichtbar.

## Support und Weiterentwicklung

Bei Fragen zur Architektur oder neuen Features kann diese Datei als Referenz dienen. Die README.md enthält zusätzliche Informationen für Endnutzer und Administratoren.
