# SOP-ZNA – Patientenpfade Zentrale Notaufnahme

<div align="center">
  <img src="img/Basislogo_farbig.png" alt="Klinikum St. Georg Leipzig Logo" width="180"/>
  <br><br>
  <img src="img/Patientenpfade.png" alt="Patientenpfade Logo" width="280"/>
  <br><br>
  <p><strong>73 evidenzbasierte Standard Operating Procedures für die Notfallmedizin</strong></p>
</div>

---

## Übersicht

SOP-ZNA ist eine Progressive Web Application zur Darstellung klinischer Standard Operating Procedures (SOPs) für die Zentrale Notaufnahme des Klinikums St. Georg Leipzig. Die Anwendung bietet medizinischem Personal schnellen Zugriff auf 73 evidenzbasierte Patientenpfade – optimiert für Desktop, Tablet und Smartphone mit nativer mobiler UX.

Die Anwendung wurde entwickelt, um die kognitive Last für Notfallpersonal zu minimieren. Durch intuitive Navigation, visuelle Hierarchie und flüssige Animationen können sich Ärzte und Pflegekräfte vollständig auf die Patientenversorgung konzentrieren, ohne sich in die Anwendung „einlernen" zu müssen.

---

## Neue Funktionen (Version 2.2)

### Optimierte Mobile Navigation mit Safe Area Support

Die Bottom Navigation und das gesamte mobile Layout wurden grundlegend überarbeitet, um auf allen iOS-Geräten perfekt zu funktionieren. Die wichtigsten Verbesserungen umfassen die korrekte Handhabung der iOS Safe Areas, insbesondere für Geräte mit Dynamic Island wie das iPhone 14 Pro Max.

Die Viewport-Konfiguration wurde erweitert und nutzt nun die modernen `dvh` (dynamic viewport height), `svh` (small viewport height) und `vh` Einheiten parallel, um maximale Browser-Kompatibilität zu gewährleisten. Der neue `interactive-widget=resizes-content` Meta-Tag sorgt dafür, dass die Anwendung korrekt auf virtuelle Tastaturen und andere interaktive Widgets reagiert.

Die Bottom Navigation ist jetzt als `position: fixed` Element implementiert und nutzt `backdrop-filter` mit Saturation- und Blur-Effekten für einen modernen, durchscheinenden Look, der dem nativen iOS-Design entspricht. Die Höhe wird dynamisch mit `max()` berechnet, um sowohl die Safe Area als auch den Mindestinhalt zu berücksichtigen. Die FAB-Position wurde entsprechend angepasst und ragt nicht mehr in den Bereich der Bottom Navigation.

### Intelligente Back-Navigation mit Home-Rückkehr

Die Navigation wurde weiter verbessert, sodass der Zurück-Button in der SOP-Übersicht nun zum Home-Bildschirm führt statt zur Browse-Ansicht. Dies entspricht dem natürlichen Nutzerverhalten und ermöglicht einen schnellen Neustart der Anwendung von jedem Punkt aus.

Der Navigation-Stack wurde entsprechend angepasst und merkt sich jetzt zuverlässig, woher der Benutzer kam. Wenn keine vorherige Navigation im Stack vorhanden ist, wird automatisch zum Home-Bildschirm navigiert, der die beste Orientierung bietet.

### Alle SOPs Kachel auf dem Home-Bildschirm

Der Home-Bildschirm enthält nun eine prominent gestaltete „Alle SOPs" Kachel, die direkt zur vollständigen SOP-Liste führt. Diese Kabel nutzt ein besonderes Farbschema mit einem Gradient von `--primary-light` zu `--primary` und hebt sich visuell von den Kategoriekarten ab. Ein Hover-Effekt verstärkt den Gradient und sorgt für klares visuelles Feedback.

Die Kabel ist als erstes Element im Kategorie-Grid positioniert und ermöglicht schnellen Zugriff auf alle Patientenpfade ohne vorherige Kategorieauswahl. Die Schriftfarben passen sich dynamisch an und werden beim Hover weiß für maximalen Kontrast.

### Optimierte Touch-Gesten-Steuerung

Die Touch-Bedienung wurde für noch flüssigere Interaktionen auf mobilen Geräten optimiert. Die Swipe-to-Back Geste am linken Bildschirmrand reagiert jetzt noch schneller durch reduzierte Erkennungsschwellen.

Der `EDGE_MARGIN` wurde von 25px auf 20px reduziert, um mehr Fläche für die Wischgeste zu bieten. Der `SWIPE_THRESHOLD` wurde von 80px auf 60px gesenkt, sodass die Zurück-Aktion bereits nach einer kürzeren Wischbewegung ausgelöst wird. Der `HORIZONTAL_THRESHOLD` für die Erkennung der Wischrichtung wurde von 10px auf 8px reduziert, was zu einer früheren Erkennung des Wischens führt.

Die visuelle Rückmeldung während des Wischens wurde intensiviert. Die Opacity-Abnahme geht jetzt von 1 auf 0,6 statt auf 0,7, und die Verschiebung beträgt 50px statt 30px für deutlicheres Feedback. Zusätzlich wurde ein leichter Scale-Effekt von 2% hinzugefügt, der die Tiefe der Navigation suggeriert.

Das Haptic-Feedback wurde verbessert und nutzt nun ein zweistufiges Vibrationsmuster mit 15ms und anschließend 10ms für eine natürlichere taktile Rückmeldung. Die `will-change` CSS-Eigenschaft wird während der Wischgeste gesetzt, um dem Browser GPU-Beschleunigung zu signalisieren und flüssigere Animationen zu ermöglichen.

---

## Funktionen

### SOP-Verwaltung

Die Anwendung enthält 73 klinische SOPs mit strukturierten Sektionen. Jede SOP ist in logische Abschnitte unterteilt: Definition, Ursachen, Symptome, Diagnostik, Therapie, Merke, Disposition, Komplikationen und Quellen. Die Sektionen sind Akkordeons, die Nutzer ein- und ausklappen können. Diagnostik und Therapie sind standardmäßig geöffnet, da sie die wichtigsten Informationen enthalten.

Die SOPs sind in 11 Fachkategorien organisiert: Kardiologie, Pneumologie, Gastroenterologie, Neurologie, Nephrologie, Metabolisch, Hämatologie, Infektiologie, Toxikologie, Leitsymptom und Sonstige. Jede Kategorie hat eine eindeutige Farbcodierung, die sich durch die gesamte Anwendung zieht und die visuelle Orientierung erleichtert.

### Native Push und Pop Navigation

Die Navigation zwischen Ansichten erfolgt mit nativen Smartphone-Übergängen, die dem mentalen Modell der Navigationstiefe entsprechen. Beim Öffnen einer SOP wischen neue Screens von rechts nach links herein. Beim Zurückgehen wischt der aktuelle Screen nach rechts heraus. Ein vollständiger History-Stack verwaltet die Navigationshistorie für konsistentes Navigieren. Alle Animationen sind GPU-beschleunigt und laufen mit 60fps durch CSS-Transform und Opacity.

Die Animationen nutzen kubische Bézier-Kurven für organische, natürlich wirkende Bewegungen, die iOS und Android Systemübergängen ähneln. Das Timing ist sorgfältig abgestimmt: 400ms für Push/Pop-Animationen, 300ms für UI-Interaktionen.

### Swipe-to-Back Gestensteuerung

Für mobile Geräte wurde eine vollständige Wischgeste am linken Bildschirmrand implementiert. Berührungen im 20-Pixel-Randbereich werden als potenzielle Wischgeste erkannt. Horizontale Bewegungen dominieren über vertikale, um versehentliches Auslösen zu vermeiden. Während des Wischens wird der aktuelle View transparenter und verschiebt sich leicht nach rechts für visuelles Feedback. Mindestens 60 Pixel位移 oder entsprechende Geschwindigkeit löst die Zurück-Navigation aus. Auf unterstützten Geräten erfolgt Vibration (Haptic Feedback) bei erfolgreicher Geste.

Diese Funktion ermöglicht die Einhandbedienung ohne Daumen zum oberen Bildschirmrand strecken zu müssen. Die Wischgeste ist konsistent mit dem Back-Button und der Breadcrumb-Navigation.

### Interaktives Draggable Bottom Sheet

Das Inhaltsverzeichnis (Section Picker) ist als vollständig interaktives Bottom Sheet implementiert. Nutzer können das Sheet durch Herunterziehen schließen (Drag-to-Close). Das Sheet folgt der Fingerbewegung in Echtzeit mit physikalischem Feedback. Beim Losen springt das Sheet entweder in die offene Position oder schließt vollständig (Spring-Animation). Ein Grifffläche oben zeigt die Interaktionsmöglichkeit an (Handle-Indikator). Der Overscroll-Schutz verhindert unerwünschtes Bounce-Verhalten auf iOS.

### Spotlight-Suche

Eine globale Suche mit iOS Spotlight-Feeling ermöglicht schnellen Zugriff auf alle SOPs. Die Suche erscheint als Modal-Overlay über dem aktuellen Inhalt ohne neue Seite zu laden. Der Hintergrund wird mit Backdrop-Blur unscharf dargestellt für Fokus auf die Suche. Die Tastatur fährt sofort aus. Ein Cancel-Button oben rechts schließt die Suche sofort. Ergebnisse werden während des Tippens live aktualisiert. Ctrl/Cmd + K öffnet die Spotlight-Suche per Tastaturkürzel.

### Suche und Navigation

Die Volltextsuche durchsucht alle SOPs inklusive Titel, Sektionsinhalte und Quellen. Bei Treffern wird ein relevanter Ausschnitt mit dem Suchbegriff hervorgehoben angezeigt. Die Suchergebnisse sind nach Relevanz sortiert, wobei exakte Titelübereinstimmungen höher gewichtet werden.

Die Kategorie-Filter ermöglichen eine schnelle Einschränkung auf eine Fachrichtung. Die Filter können in der Sidebar (Desktop) oder in der Browse-Ansicht (Mobile) gesetzt werden. Ein Breadcrumb zeigt jederzeit die aktuelle Position in der Navigationshierarchie und ermöglicht direktes Navigieren zu übergeordneten Ebenen.

### Responsive Design

Die Anwendung ist für alle Bildschirmgrößen optimiert. Auf Desktop-Geräten erscheint eine Sidebar mit Navigation, Suche und Kategorie-Filtern. Auf mobilen Geräten wird die Sidebar ausgeblendet und durch eine Bottom-Navigation ersetzt. Die Touch-Targets sind mindestens 44 × 44 Pixel groß, wie von Apple empfohlen.

Safe Areas für iOS-Geräte mit Dynamic Island und Home-Indicator werden korrekt berücksichtigt. Das Layout passt sich automatisch an Notch, Dynamic Island und die untere Gestenleiste an. Alle Viewports erhalten optimierte Abstände und Schriftgrößen. Die neue `100svh` Einheit sorgt dafür, dass die Anwendung auch bei eingeblendeten Browser-UI-Elementen den korrekten Viewport nutzt.

### Dark Mode

Die Anwendung unterstützt einen vollständigen Dark Mode, der automatisch basierend auf den Systemeinstellungen aktiviert wird. Nutzer können auch manuell zwischen Light und Dark Mode wechseln. Die Einstellung wird im LocalStorage gespeichert und bleibt über Sitzungen hinweg erhalten.

Die Farbpalette ist für beide Modi optimiert, mit angepassten Kontrastwerten für Lesbarkeit in dunklen Umgebungen. Die Transition zwischen den Modi erfolgt fließend mit sanften Farbübergängen.

### Schriftgrößenanpassung

Die Schriftgröße kann stufenlos von 13px bis 20px angepasst werden. Diese Einstellung wird ebenfalls persistent gespeichert und verbessert die Lesbarkeit für verschiedene Sehstärken und Nutzungssituationen. Separate Controls für Desktop (Sidebar) und Mobile (Topbar) ermöglichen situative Anpassung.

---

## Technische Architektur

### iOS Safe Area und Viewport-Optimierung

Die Anwendung nutzt moderne CSS-Techniken für perfekte iOS-Kompatibilität. Der Viewport-Meta-Tag enthält `viewport-fit=cover` für randlose Darstellung und `interactive-widget=resizes-content` für korrekte Reaktion auf virtuelle Tastaturen.

Die Viewport-Höhen werden mit drei Einheiten definiert: `100dvh` für die dynamische Höhe, die sich mit Browser-UI ändert, `100vh` als Fallback und `100svh` als garantierte kleine Höhe ohne Browser-UI. Diese Kombination gewährleistet korrekte Darstellung auf allen iOS-Versionen und Browser-Konfigurationen.

Die Bottom Navigation nutzt `position: fixed` mit `bottom: 0` für zuverlässige Positionierung. Die Höhe wird mit `max(var(--btm-h), calc(var(--btm-h) + var(--sab)))` berechnet, um sowohl den Mindestinhalt als auch die Safe Area zu berücksichtigen. Das `backdrop-filter: saturate(180%) blur(20px)` erzeugt den charakteristischen iOS-Effekt.

### Frontend-Stack

Die Anwendung ist als reine Single-Page-Application ohne Framework-Abhängigkeiten implementiert. Als Sprache dient ES5-kompatibles JavaScript für maximale Browser-Unterstützung. Das Rendering erfolgt vollständig client-seitig durch DOM-Manipulation.

Die Styles sind in einer einzigen CSS-Datei zusammengefasst, die Custom Properties (CSS Variables) für das Theming nutzt. Flexbox und CSS Grid werden für das Layout verwendet, Media Queries für die Responsive-Optimierung. Die gesamte Anwendung wiegt unter 200KB (komprimiert) und lädt instantan.

### Performance-Optimierung

Alle Animationen nutzen GPU-beschleunigte CSS-Eigenschaften (transform, opacity) für flüssige 60fps. Die Shimmer-Animation der Skeleton Screens ist vollständig in CSS implementiert ohne JavaScript-Overhead. Transitions sind mit kubischen Bézier-Kurven optimiert für organische Bewegung.

Throttle- und Debounce-Funktionen begrenzen die Häufigkeit von Event-Handlern bei Scroll- und Resize-Events. Der Intersection Observer API wird für Lazy-Rendering und Scroll-Tracking genutzt. Das DOM Element Caching vermeidet wiederholte `document.getElementById()` Aufrufe.

Die Touch-Gesten nutzen passive Event-Listener wo möglich und `will-change` für GPU-Beschleunigung während aktiver Gesten. Das Haptic-Feedback nutzt kurze Vibrationsimpulse von 10-15ms für subtile taktile Rückmeldung.

### Navigation-Stack

Die Implementierung nutzt einen internen History-Stack, der die Navigationshierarchie verwaltet. Jeder Push-Navigation wird der aktuelle Zustand `{sopId, tab}` hinzugefügt. Pop-Navigation stellt den vorherigen Zustand wieder her oder navigiert intelligent zum Home-Bildschirm. Die View-Transitions werden synchronisiert mit dem Stack-Ablauf.

### Touch-Gesten

Das Touch-Event-System unterscheidet zwischen verschiedenen Gesten: Swipe-to-Back am linken Rand (20px), Pull-to-Refresh am oberen Rand des Scroll-Bereichs, Draggable-Bottom-Sheet am Picker-Handle. Die Bewegungserkennung nutzt Delta-Berechnungen für X und Y, um die dominante Richtung zu bestimmen. Die Schwellenwerte sind für schnelle Reaktion optimiert: 8px für Richtungserkennung, 60px für vollständiges Swipe-Back.

### Version-Check-System

Das Update-System besteht aus drei Komponenten: Der `version.json` Datei mit aktueller Version und Metadaten, der `checkForUpdate()` Funktion in `app.js` die periodisch prüft, und der `showUpdateNotification()` Funktion die bei Bedarf eine Notification anzeigt. Das System vermeidet wiederholte Benachrichtigungen durch Speicherung der erkannten Version in `localStorage`.

---

## Projektstruktur

```
sop-zna/
├── index.html              # Einstiegspunkt mit HTML-Struktur
├── app.js                  # Hauptanwendungslogik (ca. 2000 Zeilen)
├── styles.css              # Vollständiges Stylesheet (ca. 3000 Zeilen)
├── version.json            # Versionsdatei für Update-Check
├── AGENTS.md               # Dokumentation für KI-Agenten
├── README.md               # Diese Dokumentation
├── img/
│   ├── Basislogo_farbig.png
│   ├── Patientenpfade.png
│   └── ZNA/                # SOP-spezifische Abbildungen
└── sops/                   # 73 einzelne SOP-Dateien
    ├── abdominelle-schmerzen.js
    ├── herz-kreislauf-stillstand.js
    └── ...                 # 71 weitere SOPs
```

Jede SOP-Datei ist ein eigenständiges JavaScript-Modul, das ein Data-Objekt in das globale SOP_DATA-Array pusht. Das ermöglicht modulares Laden und einfaches Hinzufügen neuer SOPs ohne Build-Prozess. Die AGENTS.md Datei bietet zusätzliche Informationen für Entwickler und KI-Assistenten.

---

## SOP-Kategorien

| Kategorie | Schlüssel | Farbcode |
|-----------|-----------|----------|
| Kardiologie | `kardio` | #ef4444 (Rot) |
| Pneumologie | `pulmo` | #3b82f6 (Blau) |
| Gastroenterologie | `gi` | #f59e0b (Orange) |
| Neurologie | `neuro` | #8b5cf6 (Violett) |
| Nephrologie | `nephro` | #06b6d4 (Cyan) |
| Metabolisch | `metab` | #10b981 (Grün) |
| Hämatologie | `haem` | #ec4899 (Pink) |
| Infektiologie | `infekt` | #84cc16 (Limette) |
| Toxikologie | `tox` | #f97316 (Dunkelorange) |
| Leitsymptom | `leit` | #6366f1 (Indigo) |
| Sonstige | `sonst` | #64748b (Grau) |

---

## Neue SOP hinzufügen

### SOP-Datei erstellen

Erstellen Sie eine neue Datei unter `sops/` mit folgendem Format:

```javascript
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "eindeutige-id",
        title: "Titel der SOP",
        name: "Titel der SOP",
        category: "kardio",
        stand: "02/26",
        sources: "<p>Quellenangaben...</p>",
        sections: [
            {
                title: "Definition",
                html: "<p>Definitionstext...</p>"
            },
            {
                title: "Ursachen",
                html: "<p>Ursachen...</p>"
            },
            {
                title: "Diagnostik",
                html: "<p>Diagnostische Maßnahmen...</p>"
            },
            {
                title: "Therapie",
                html: "<p>Therapieoptionen...</p>"
            },
            {
                title: "Merke",
                html: "<div class='callout callout-wichtig'>Wichtiger Hinweis!</div>"
            },
            {
                title: "Disposition",
                html: "<p>Weiteres Vorgehen...</p>"
            }
        ]
    });
})();
```

### Script einbinden

Fügen Sie in `index.html` vor `app.js` ein:

```html
<script src="sops/neue-sop.js"></script>
```

### Callout-Klassen

| CSS-Klasse | Bedeutung |
|------------|-----------|
| `callout callout-cave` | Warnung, Kontraindikation |
| `callout callout-wichtig` | Wichtiger Hinweis |
| `callout callout-hinweis` | Tipp oder Hinweis |
| `callout callout-info` | Information |

---

## Browser-Unterstützung

Die Anwendung unterstützt alle modernen Browser mit ES5-Unterstützung:

- Chrome und Edge ab Version 80
- Safari ab Version 14
- Firefox ab Version 78
- Samsung Internet ab Version 13

Für ältere Browser wird die Anwendung ohne Animationen und mit grundlegender Funktionalität dargestellt. Die `prefers-reduced-motion` Medienabfrage deaktiviert alle Animationen auf Wunsch des Nutzers. Das `touch-action` Attribut stellt sicher, dass Touch-Gesten nur auf unterstützten Geräten aktiviert werden.

Die Viewport-Unit-Varianten (`dvh`, `svh`, `lvh`) werden von allen modernen Browsern unterstützt. Als Fallback dient die klassische `vh` Einheit.

---

## Installation und Deployment

### Lokale Entwicklung

Die Anwendung benötigt keinen Build-Prozess und kann direkt im Browser geöffnet werden:

```bash
# Python 3
python3 -m http.server 8080

# Node.js
npx serve .

# PHP
php -S localhost:8080
```

### Produktiv-Deployment

Da es sich um statische Dateien handelt, kann die Anwendung auf jedem Webserver bereitgestellt werden:

- **Apache/Nginx:** Dateien ins Webroot kopieren
- **GitHub Pages:** Automatisches Deployment via Git
- **Netlify/Vercel:** Drag & Drop oder Git-Integration
- **AWS S3:** Statisches Website-Hosting

### Wichtig für WebApp-Installation

Die `version.json` Datei muss bei Deployment auf dem Server verfügbar sein, damit der Version-Check funktioniert. Das Script am Ende von `index.html`, das Service Worker deaktiviert und Caches löscht, ist für lokale Entwicklung essentiell und sollte bei Produktiv-Deployment entfernt werden, wenn Service Worker gewünscht sind.

---

## Changelog

### Version 2.2 (Februar 2026)

- Optimierte Mobile Navigation mit Safe Area Support für iPhone 14 Pro Max
- Viewport-Optimierung mit dvh, svh und vh Einheiten
- Fixed Bottom Navigation mit Backdrop-Blur
- Intelligente Back-Navigation mit Home-Rückkehr
- Alle SOPs Kachel auf dem Home-Bildschirm
- Verbesserte Touch-Gesten mit optimierten Schwellenwerten
- Intensivierte visuelle Rückmeldung beim Swipen
- Zweistufiges Haptic-Feedback für bessere taktile Rückmeldung
- GPU-Beschleunigung mit will-change für Touch-Animationen

### Version 2.1 (Februar 2026)

- Intelligente Back-Navigation mit Breadcrumb-Support
- Automatischer Version-Check für WebApp-Installation
- Erweiterte Touch-Optimierung für mobile Geräte
- Responsive Segmented Control mit Scroll-Snap
- Verbesserte Touch-Targets (min. 44px)
- Optimiertes Active-Feedback für alle interaktiven Elemente

### Version 2.0 (Februar 2026)

- Native Push und Pop Navigation
- Swipe-to-Back Gestensteuerung
- Interaktives Draggable Bottom Sheet
- Segmented Control für SOPs
- Card-basiertes Design
- Skeleton Screens
- Spotlight-Suche
- GPU-beschleunigte Animationen

---

## Autor und Kontakt

**Klinikum St. Georg Leipzig**
AG Klinische Pfade
Zentrale Notaufnahme

---

*Version 2.2 – Februar 2026*
*Alle 73 SOPs vollständig implementiert mit nativer mobiler UX, optimiertem iOS-Support und intelligenter Navigation*
