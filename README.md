# Patientenpfade: ZNA

**Standardisierte Handlungsanweisungen für die Zentrale Notaufnahme**

Klinikum St. Georg Leipzig – Klinik für Radiologie und Nuklearmedizin

---

## Übersicht

Patientenpfade: ZNA ist eine progressive Web-App (PWA) zur strukturierten Darstellung klinischer Standard Operating Procedures (SOPs) für die Zentrale Notaufnahme. Die Anwendung bietet schnellen, offline-fähigen Zugriff auf aktuell 73 evidenzbasierte Patientenpfade, gegliedert nach medizinischen Fachkategorien.

## Features

- **73 klinische SOPs** mit strukturierten Sektionen (Definition, Ursachen, Symptome, Diagnostik, Therapie, Merke, Disposition, Komplikationen, Quellen)
- **11 Fachkategorien**: Kardiologie, Pneumologie, Gastroenterologie, Neurologie, Nephrologie, Metabolisch, Hämatologie, Infektiologie, Toxikologie, Leitsymptom, Sonstige
- **Volltextsuche** über alle SOPs mit Snippet-Vorschau und Highlighting
- **Schnellsuche** auf der Startseite mit Echtzeit-Ergebnissen
- **Kategorie-Filter** in Sidebar und Browse-Ansicht
- **Automatisches Dosierungs-Highlighting** erkennt Dosierungsangaben und Applikationswege im Fließtext und hebt diese farblich hervor
- **Akkordeon-Sektionen** mit automatischer Öffnung von Diagnostik und Therapie
- **Sticky Section Bar** zeigt beim Scrollen die aktuelle Sektion an
- **Inhaltsverzeichnis** als Bottom-Sheet (mobil) oder Dialog (Desktop) mit Druckfunktion
- **Dark Mode / Light Mode** mit automatischer Systemerkennung und manueller Umschaltung
- **Stufenlose Schriftgrößenanpassung** (13–20 px)
- **Offline-Modus** via Service Worker mit vollständigem Asset-Caching
- **Pull-to-Refresh** auf der Startseite (mobil)
- **Responsive Design** optimiert für Desktop, Tablet, iPhone (inkl. Dynamic Island / Safe Areas) und Android
- **Druckoptimierung** mit automatischer Öffnung aller Sektionen

## Projektstruktur

```
sop-zna/
├── index.html                 Einstiegspunkt der Anwendung
├── app.js                     Anwendungslogik (Rendering, Navigation, Suche, Events)
├── styles.css                 Vollständiges Stylesheet (Light/Dark, Responsive, Print)
├── sw.js                      Service Worker für Offline-Caching
├── README.md                  Diese Datei
├── img/
│   ├── Basislogo_farbig.png   Klinikum-Logo (Favicon, Touch-Icon)
│   ├── Patientenpfade.png     App-Logo (Sidebar, Hero)
│   └── ZNA/                   SOP-spezifische Abbildungen
│       ├── akute-herzinsuffizienz_diagnostischer_algorithmus.png
│       └── akute-intoxikation_toxidrom.png
└── sops/                      73 einzelne SOP-Dateien (JavaScript-Module)
    ├── abdominelle-schmerzen.js
    ├── aecopd.js
    ├── akute-alkoholintoxikation.js
    ├── akute-divertikulitis.js
    ├── akute-gastroenteritis.js
    ├── akute-herzinsuffizienz.js
    ├── akute-intoxikation.js
    ├── akute-mesenterialischaemie.js
    ├── akute-nebenniereninsuffizienz.js
    ├── akute-nierenschaedigung.js
    ├── akute-pankreatitis.js
    ├── akuter-gichtanfall.js
    ├── akuter-harnverhalt.js
    ├── akutes-aortensyndrom.js
    ├── anaemie.js
    ├── anaphylaxie.js
    ├── asthmaexazerbation.js
    ├── bakterielle-meningitis.js
    ├── bradykarde-hrst.js
    ├── cannabinoid-hyperemesis-syndrom.js
    ├── delir.js
    ├── diabetische-ketoazidose.js
    ├── dyspnoe.js
    ├── erbrechen.js
    ├── erysipel.js
    ├── fieber-in-der-neutropenie.js
    ├── fremdkoerperingestion.js
    ├── harnwegsinfektion.js
    ├── heparininduzierte-thrombozytopenie.js
    ├── hepatische-enzephalopathie.js
    ├── herz-kreislauf-stillstand.js
    ├── hitzschlag.js
    ├── hyperkaliaemie.js
    ├── hyperkalzaemie.js
    ├── hypernatriaemie.js
    ├── hyperosmolares-hyperglykaemisches-syndrom.js
    ├── hypertensiver-notfall.js
    ├── hypoglykaemie.js
    ├── hypokaliaemie.js
    ├── hypokalzaemie.js
    ├── hyponatriaemie.js
    ├── ikterus.js
    ├── kohlenmonoxidintoxikation.js
    ├── kopfschmerzen.js
    ├── lungenarterienembolie.js
    ├── myxoedemkoma.js
    ├── nicht-st-hebungsinfarkt.js
    ├── nierenkolik.js
    ├── obere-gastrointestinale-blutung.js
    ├── oesophageale-bolusimpaktion.js
    ├── pleuraerguss.js
    ├── pneumonie.js
    ├── schock.js
    ├── sepsis.js
    ├── spontan-bakterielle-peritonitis.js
    ├── status-epilepticus.js
    ├── sterbephase-palliativ.js
    ├── st-hebungsinfarkt.js
    ├── stromunfall.js
    ├── synkope.js
    ├── tachykarde-hrst.js
    ├── thoraxschmerzen.js
    ├── thrombozytopenie.js
    ├── tiefe-venenthrombose.js
    ├── tonsillitis.js
    ├── transiente-globale-amnesie.js
    ├── tumorlysesyndrom.js
    ├── unklare-vigilanzminderung.js
    ├── untere-gastrointestinale-blutung.js
    ├── vena-cava-superior-syndrom.js
    ├── vorhofflimmern.js
    ├── zerebrale-metastasen.js
    └── zerebrale-venen-sinusthrombose.js
```

## Technologie

| Komponente | Technologie |
|------------|-------------|
| Frontend | Vanilla JavaScript (ES5-kompatibel), HTML5, CSS3 |
| Icons | Font Awesome 6.5.1 (CDN) |
| Offline | Service Worker API mit Cache-First-Strategie |
| Styling | CSS Custom Properties, Flexbox, CSS Grid |
| Responsive | Media Queries, `env(safe-area-inset-*)`, `viewport-fit=cover` |
| Theming | `data-theme` Attribut mit `prefers-color-scheme` Erkennung |

Keine Build-Tools, kein Bundler, keine Frameworks – die Anwendung läuft direkt im Browser.

## Installation und Deployment

### Lokale Entwicklung

```bash
git clone <repository-url>
cd sop-zna
```

Die Anwendung benötigt einen HTTP-Server (Service Worker funktionieren nicht über `file://`):

```bash
# Python 3
python3 -m http.server 8080

# Node.js (npx)
npx serve .

# PHP
php -S localhost:8080
```

Anschließend im Browser öffnen: `http://localhost:8080`

### Produktiv-Deployment

Die Anwendung besteht ausschließlich aus statischen Dateien und kann auf jedem Webserver oder Static-Hosting-Dienst bereitgestellt werden:

- Apache / Nginx
- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront

Für HTTPS-Betrieb (empfohlen, erforderlich für Service Worker) genügt ein einfaches SSL-Zertifikat.

## SOP-Datenformat

Jede SOP-Datei unter `sops/` registriert sich über das globale Array `window.SOP_DATA`:

```javascript
(function(){
    if(!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "eindeutige-id",
        title: "Titel der SOP",
        category: "kardio",          // Kategorie-Schlüssel
        sections: [
            {
                title: "Definition",  // Sektionsname
                html: "<p>...</p>"    // HTML-Inhalt
            },
            {
                title: "Diagnostik",
                html: "<ul><li>...</li></ul>"
            }
        ],
        stand: "03/25",              // Aktualisierungsstand
        sources: "Quellenangaben als HTML-String"
    });
})();
```

### Verfügbare Kategorien

| Schlüssel | Bezeichnung |
|-----------|-------------|
| `kardio` | Kardiologie |
| `pulmo` | Pneumologie |
| `gi` | Gastroenterologie |
| `neuro` | Neurologie |
| `nephro` | Nephrologie |
| `metab` | Metabolisch |
| `haem` | Hämatologie |
| `infekt` | Infektiologie |
| `tox` | Toxikologie |
| `leit` | Leitsymptom |
| `sonst` | Sonstige |

### Unterstützte HTML-Elemente in SOP-Sektionen

| Element | CSS-Klasse | Beschreibung |
|---------|-----------|--------------|
| Callout CAVE | `callout callout-cave` | Roter Warnhinweis |
| Callout Wichtig | `callout callout-wichtig` | Blauer Hinweis |
| Callout Hinweis | `callout callout-hinweis` | Grüner Hinweis |
| Tabelle | `table-wrap` (Wrapper) | Responsive Tabelle |
| Bild | `<img>` | Automatisch responsive |

## Neue SOP hinzufügen

1. Neue Datei unter `sops/` erstellen (z. B. `sops/neue-sop.js`)
2. SOP-Daten im oben beschriebenen Format einfügen
3. `<script src="sops/neue-sop.js"></script>` in `index.html` vor `app.js` einfügen
4. Dateiname in das `urlsToCache`-Array in `sw.js` aufnehmen
5. Cache-Version in `sw.js` hochzählen

## Browser-Kompatibilität

| Browser | Version |
|---------|---------|
| Chrome / Edge | 80+ |
| Safari (iOS) | 14+ |
| Firefox | 78+ |
| Samsung Internet | 13+ |

## Offline-Verhalten

Beim ersten Laden werden alle Assets (HTML, CSS, JS, Bilder, SOP-Dateien) vom Service Worker gecacht. Bei nachfolgenden Aufrufen werden Inhalte aus dem Cache geladen (Cache-First-Strategie). Der Offline-Status wird in der Anwendung durch ein gelbes Banner angezeigt.

Zum Aktualisieren des Caches:

- **Mobil**: Pull-to-Refresh auf der Startseite
- **Desktop**: Browser-Cache leeren oder Service Worker in den DevTools aktualisieren

## Lizenz

Dieses Projekt ist für den internen klinischen Gebrauch am Klinikum St. Georg Leipzig bestimmt. Alle medizinischen Inhalte unterliegen dem Urheberrecht der jeweiligen Autoren und Leitlinienkommissionen.

## Autor

**Dr. med. Markus Lurz**
Klinikum St. Georg Leipzig

---

