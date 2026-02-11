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

Die Anwendung wurde entwickelt, um die kognitive Last für Notfallpersonal zu minimieren. Durch intuitive Navigation, visuelle Hierarchie und flüssige Animationen können sich Ärzte und Pflegekräfte vollständig auf die Patientenversorgung konzentrieren, ohne sich in die Anwendung „einlernen“ zu müssen.

---

## Neue Funktionen (Version 2.1)

### Intelligente Back-Navigation mit Breadcrumb-Support

Die Navigation wurde grundlegend überarbeitet, um eine natürlichere Benutzererfahrung zu ermöglichen. Der Back-Button führt jetzt nicht mehr direkt zum Startbildschirm, sondern respektiert die Navigationshistorie und die Breadcrumb-Struktur der Anwendung.

Wenn ein Nutzer von der Startseite eine SOP öffnet und dann auf Back klickt, gelangt er zurück zur Browse-Ansicht mit allen SOPs, anstatt zum leeren Startbildschirm. Diese Änderung entspricht dem mentalen Modell der Nutzer, die erwarten, nach dem Betrachten einer SOP zur Liste zurückzukehren. Die Breadcrumb-Navigation in der Desktop-Ansicht zeigt jederzeit den aktuellen Pfad und ermöglicht das direkte Springen zu übergeordneten Ebenen. Klickbare Breadcrumb-Elemente navigieren direkt zum entsprechenden Kontext, ohne die Historie zu beeinflussen.

### Automatischer Version-Check für WebApp-Installation

Ein neues Update-Benachrichtigungssystem sorgt dafür, dass installierte WebApp-Instanzen immer die aktuelle Version anzeigen. Vor dieser Änderung blieb die installierte Version im Cache erhalten, bis die WebApp entfernt und neu über den Browser installiert wurde.

Das neue System lädt bei jedem Seitenaufruf die Datei `version.json` vom Server und vergleicht die Version mit der lokal gespeicherten Version in `localStorage`. Bei Abweichung erscheint eine slide-in Notification am unteren Bildschirmrand mit der Aufforderung zum Aktualisieren. Ein Tippen auf die Benachrichtigung oder das Ausführen des X-Buttons aktualisiert die Seite sofort. Der Version-Check erfolgt mit einem Cache-Buster (`?_=timestamp`), um sicherzustellen, dass immer die aktuelle Version abgefragt wird. Bei `file://` Protokoll (lokale Entwicklung) wird der Check automatisch deaktiviert, da keine Serververbindung besteht.

### Erweiterte Touch-Optimierung für mobile Geräte

Die Touch-Bedienung wurde umfassend optimiert, um eine fehlerfreie und komfortable Bedienung auf Smartphones zu gewährleisten. Alle interaktiven Elemente verfügen jetzt über mindestens 44 Pixel große Touch-Targets, wie von Apple empfohlen.

Die Category-Cards auf der Startseite zeigen verbessertes Active-Feedback mit sofortiger visueller Reaktion bei Berührung. Das `-webkit-tap-highlight-color: transparent` Attribut entfernt den standardmäßigen blauen Touch-Highlight, während `touch-action: manipulation` den 300ms-Delay aufhebt und sofortiges Feedback ermöglicht. Die Browse-Items und Search-Results haben größere Touch-Flächen und klarere visuelle Zustände für gedrückt und aktiv. SOP-Section-Headers sind jetzt 56 Pixel hoch mit optimiertem Padding für bessere Trefferquote mitdem Daumen.

### Responsive Segmented Control mit Scroll-Snap

Die Segmented Control unter SOP-Titeln wurde für mobile Geräte grundlegend überarbeitet. Die bisherige Implementierung führte bei schmalen Viewports zu überlappenden Labels und abgeschnittenem Text.

Die neue Lösung nutzt horizontales Scrollen mit CSS `scroll-snap-type: x mandatory` für präzises Einrasten an den Buttons. Jeder Button hat eine feste Mindestbreite von 60 Pixeln und maximale Breite von 100 Pixeln mit automatischem Text-Truncating durch `text-overflow: ellipsis`. Die Icons sind `flex-shrink: 0`, um nicht verzerrt zu werden. Buttons sind mindestens 44 Pixel hoch mit Scroll-Snap-Alignment für ein iOS-ähnliches Scrollverhalten. Das `touch-action: pan-x` ermöglicht horizontales Wischen ohne vertikales Scrollen zu blockieren.

---

## Funktionen

### SOP-Verwaltung

Die Anwendung enthält 73 klinische SOPs mit strukturierten Sektionen. Jede SOP ist in logische Abschnitte unterteilt: Definition, Ursachen, Symptome, Diagnostik, Therapie, Merke, Disposition, Komplikationen und Quellen. Die Sektionen sind Akkordeons, die Nutzer ein- und ausklappen können. Diagnostik und Therapie sind standardmäßig geöffnet, da sie die wichtigsten Informationen enthalten.

Die SOPs sind in 11 Fachkategorien organisiert: Kardiologie, Pneumologie, Gastroenterologie, Neurologie, Nephrologie, Metabolisch, Hämatologie, Infektiologie, Toxikologie, Leitsymptom und Sonstige. Jede Kategorie hat eine eindeutige Farbcodierung, die sich durch die gesamte Anwendung zieht und die visuelle Orientierung erleichtert.

### Native Push und Pop Navigation

Die Navigation zwischen Ansichten erfolgt mit nativen Smartphone-Übergängen, die dem mentalen Modell der Navigationstiefe entsprechen. Beim Öffnen einer SOP wischen neue Screens von rechts nach links herein. Beim Zurückgehen wischt der aktuelle Screen nach rechts heraus. Ein vollständiger History-Stack verwaltet die Navigationshistorie für konsistentes Navigieren. Alle Animationen sind GPU-beschleunigt und laufen mit 60fps durch CSS-Transform und Opacity.

Die Animationen nutzen kubische Bézier-Kurven für organische, natürlich wirkende Bewegungen, die iOS und Android Systemübergängen ähneln. Das Timing ist sorgfältig abgestimmt: 400ms für Push/Pop-Animationen, 300ms für UI-Interaktionen.

### Swipe-to-Back Gestensteuerung

Für mobile Geräte wurde eine vollständige Wischgeste am linken Bildschirmrand implementiert. Berührungen im 25-Pixel-Randbereich werden als potenzielle Wischgeste erkannt. Horizontale Bewegungen dominieren über vertikale, um versehentliches Auslösen zu vermeiden. Während des Wischens wird der aktuelle View transparenter und verschiebt sich leicht nach rechts für visuelles Feedback. Mindestens 80 Pixel位移 oder entsprechende Geschwindigkeit löst die Zurück-Navigation aus. Auf unterstützten Geräten erfolgt leichte Vibration (Haptic Feedback) bei erfolgreicher Geste.

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

Safe Areas für iOS-Geräte mit Dynamic Island und Home-Indicator werden korrekt berücksichtigt. Das Layout passt sich automatisch an Notch, Dynamic Island und die untere Gestenleiste an. Alle Viewports erhalten optimierte Abstände und Schriftgrößen.

### Dark Mode

Die Anwendung unterstützt einen vollständigen Dark Mode, der automatisch basierend auf den Systemeinstellungen aktiviert wird. Nutzer können auch manuell zwischen Light und Dark Mode wechseln. Die Einstellung wird im LocalStorage gespeichert und bleibt über Sitzungen hinweg erhalten.

Die Farbpalette ist für beide Modi optimiert, mit angepassten Kontrastwerten für Lesbarkeit in dunklen Umgebungen. Die Transition zwischen den Modi erfolgt fließend mit sanften Farbübergängen.

### Schriftgrößenanpassung

Die Schriftgröße kann stufenlos von 13px bis 20px angepasst werden. Diese Einstellung wird ebenfalls persistent gespeichert und verbessert die Lesbarkeit für verschiedene Sehstärken und Nutzungssituationen. Separate Controls für Desktop (Sidebar) und Mobile (Topbar) ermöglichen situative Anpassung.

---

## Technische Architektur

### Frontend-Stack

Die Anwendung ist als reine Single-Page-Application ohne Framework-Abhängigkeiten implementiert. Als Sprache dient ES5-kompatibles JavaScript für maximale Browser-Unterstützung. Das Rendering erfolgt vollständig client-seitig durch DOM-Manipulation.

Die Styles sind in einer einzigen CSS-Datei zusammengefasst, die Custom Properties (CSS Variables) für das Theming nutzt. Flexbox und CSS Grid werden für das Layout verwendet, Media Queries für die Responsive-Optimierung. Die gesamte Anwendung wiegt unter 200KB (komprimiert) und lädt instantan.

### Performance-Optimierung

Alle Animationen nutzen GPU-beschleunigte CSS-Eigenschaften (transform, opacity) für flüssige 60fps. Die Shimmer-Animation der Skeleton Screens ist vollständig in CSS implementiert ohne JavaScript-Overhead. Transitions sind mit kubischen Bézier-Kurven optimiert für organische Bewegung.

Throttle- und Debounce-Funktionen begrenzen die Häufigkeit von Event-Handlern bei Scroll- und Resize-Events. Der Intersection Observer API wird für Lazy-Rendering und Scroll-Tracking genutzt. Das DOM Element Caching vermeidet wiederholte `document.getElementById()` Aufrufe.

### Navigation-Stack

Die Implementierung nutzt einen internen History-Stack, der die Navigationshierarchie verwaltet. Jeder Push-Navigation wird der aktuelle Zustand `{sopId, tab}` hinzugefügt. Pop-Navigation stellt den vorherigen Zustand wieder her oder navigiert intelligent zur Browse-Ansicht. Die View-Transitions werden synchronisiert mit dem Stack-Ablauf.

### Touch-Gesten

Das Touch-Event-System unterscheidet zwischen verschiedenen Gesten: Swipe-to-Back am linken Rand (25px), Pull-to-Refresh am oberen Rand des Scroll-Bereichs, Draggable-Bottom-Sheet am Picker-Handle. Die Bewegungserkennung nutzt Delta-Berechnungen für X und Y, um die dominante Richtung zu bestimmen.

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

**Dr. med. Markus Lurz**
Klinikum St. Georg Leipzig gGmbH
AG Klinische Pfade


---

*Version 2.1 – Februar 2026*
*Alle 73 SOPs vollständig implementiert mit nativer mobiler UX und intelligentem Version-Check*
