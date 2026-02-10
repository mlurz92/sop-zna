# 🏥 SOP-ZNA – Patientenpfade Zentrale Notaufnahme

![Version](https://img.shields.io/badge/Version-1.0.0-blue.svg)
![Status](https://img.shields.io/badge/Status-Produktiv-brightgreen.svg)
![Lizenz](https://img.shields.io/badge/Lizenz-Intern-orange.svg)
![Plattform](https://img.shields.io/badge/Plattform-Web%20%7C%20iOS%20%7C%20Android-lightgrey.svg)

<div align="center">
  <img src="img/Basislogo_farbig.png" alt="Klinikum St. Georg Leipzig Logo" width="200"/>
  <br><br>
  <img src="img/Patientenpfade.png" alt="Patientenpfade Logo" width="300"/>
</div>

---

## 📋 Beschreibung

**SOP-ZNA** ist eine Web-Anwendung zur strukturierten Darstellung klinischer **Standard Operating Procedures (SOPs)** für die Zentrale Notaufnahme. Die Anwendung bietet medizinischem Personal schnellen Zugriff auf **73 evidenzbasierte Patientenpfade** – optimiert für Desktop- und mobile Endgeräte.

> **Hinweis:** Diese Anwendung ist für den internen klinischen Gebrauch am Klinikum St. Georg Leipzig bestimmt.

### Zielgruppe

- 👨‍⚕️ Ärzte in der Zentralen Notaufnahme
- 👩‍⚕️ Pflegepersonal
- 🚑 Rettungsdienstpersonal
- 📚 Medizinstudenten und Assistenzärzte

---

## ✨ Features

### 📚 SOP-Verwaltung
- **73 klinische SOPs** mit strukturierten Sektionen:
  - Definition, Ursachen, Symptome, Diagnostik, Therapie, Merke, Disposition, Komplikationen, Quellen
- **11 Fachkategorien** mit farbcodierter Kennzeichnung
- **Automatisches Dosierungs-Highlighting** erkennt Medikamentendosierungen und Applikationswege

### 🔍 Suche & Navigation
- **Volltextsuche** über alle SOPs mit Snippet-Vorschau und Highlighting
- **Schnellsuche** auf der Startseite mit Echtzeit-Ergebnissen
- **Kategorie-Filter** in Sidebar und Browse-Ansicht
- **Breadcrumb-Navigation** zur einfachen Orientierung
- **Inhaltsverzeichnis** als Bottom-Sheet (mobil) oder Dialog (Desktop)

### 📱 Mobile Optimierung
- **Responsive Design** optimiert für:
  - iPhone 14 Pro Max (inkl. Dynamic Island / Safe Areas)
  - iPad und Tablets
  - Android-Geräte
- **Touch-optimierte Bedienung** (44px Touch-Targets nach Apple HIG)
- **iOS-Safe-Areas** Unterstützung (`env(safe-area-inset-*)`)
- **Pull-to-Refresh** auf der Startseite
- **Haptic Feedback** für unterstützte Geräte

### 🎨 Benutzeroberfläche
- **Dark Mode / Light Mode** mit:
  - Automatischer Systemerkennung (`prefers-color-scheme`)
  - Manueller Umschaltung
  - Persistenz via LocalStorage
- **Stufenlose Schriftgrößenanpassung** (13–20px)
- **Sticky Section Bar** zeigt beim Scrollen die aktuelle Sektion
- **Akkordeon-Sektionen** mit automatischer Öffnung von Diagnostik und Therapie
- **Smooth Animations** und Übergänge

### 🖨️ Druckfunktion
- **Druckoptimierung** mit automatischer Öffnung aller Sektionen
- Druckbutton im Inhaltsverzeichnis

### ⚡ Performance
- **Kein Caching** – Änderungen sind sofort sichtbar
- **Keine Build-Tools** – läuft direkt im Browser
- **Vanilla JavaScript** – keine Framework-Abhängigkeiten

---

## 🚀 Installation & Deployment

### Voraussetzungen

- Beliebiger Webserver (Apache, Nginx, IIS, etc.)
- Optional: HTTPS für erweiterte PWA-Features

### Lokale Entwicklung

```bash
# Repository klonen
git clone <repository-url>
cd sop-zna

# Einfachen HTTP-Server starten
# Python 3
python3 -m http.server 8080

# Node.js (npx)
npx serve .

# PHP
php -S localhost:8080
```

Anwendung im Browser öffnen: `http://localhost:8080`

### Produktiv-Deployment

Die Anwendung besteht ausschließlich aus statischen Dateien und kann auf jedem Webserver bereitgestellt werden:

| Plattform | Beschreibung |
|-----------|--------------|
| **Apache / Nginx** | Statische Dateien ins Webroot kopieren |
| **GitHub Pages** | Repository → Settings → Pages → Deploy |
| **Netlify** | Drag & Drop oder Git-Integration |
| **Vercel** | Automatisches Deployment via Git |
| **AWS S3 + CloudFront** | Statische Website-Hosting |

---

## 📖 Verwendung

### Startseite

1. **Schnellsuche:** Tippen Sie einen Suchbegriff ein, um direkt zu den Ergebnissen zu gelangen
2. **Kategorie-Karten:** Klicken Sie auf eine Kategorie, um alle SOPs dieser Fachrichtung zu durchsuchen

### SOPs durchsuchen

1. Navigieren Sie über die untere Navigation zum **"SOPs"**-Tab
2. Filtern Sie nach **Kategorien** oder nutzen Sie die **Suchleiste**
3. Klicken Sie auf eine SOP, um sie zu öffnen

### SOP-Ansicht

- **Sektionen:** Klicken Sie auf eine Sektion, um sie zu öffnen/schließen
- **Diagnostik & Therapie** sind standardmäßig geöffnet
- **Inhaltsverzeichnis:** Tippen Sie auf den FAB-Button (unten rechts) oder den TOC-Button (Desktop)
- **Drucken:** Nutzen Sie den Druckbutton im Inhaltsverzeichnis

### Einstellungen

- **Theme:** Klicken Sie auf das Sonne/Mond-Icon zum Wechseln zwischen Dark/Light Mode
- **Schriftgröße:** Nutzen Sie die +/- Buttons in der Sidebar (Desktop) oder im Menü (Mobile)

---

## 🛠️ Technologie-Stack

| Komponente | Technologie |
|------------|-------------|
| **Frontend** | Vanilla JavaScript (ES5-kompatibel), HTML5, CSS3 |
| **Icons** | Font Awesome 6.5.1 (CDN) |
| **Styling** | CSS Custom Properties, Flexbox, CSS Grid |
| **Responsive** | Media Queries, `env(safe-area-inset-*)`, `viewport-fit=cover` |
| **Theming** | `data-theme` Attribut mit `prefers-color-scheme` Erkennung |
| **Build** | Keine Build-Tools, kein Bundler, keine Frameworks |

---

## 📁 Projektstruktur

```
sop-zna/
├── index.html                 # Einstiegspunkt der Anwendung
├── app.js                     # Anwendungslogik (Rendering, Navigation, Suche)
├── styles.css                 # Vollständiges Stylesheet (Light/Dark, Responsive, Print)
├── README.md                  # Diese Datei
├── img/
│   ├── Basislogo_farbig.png   # Klinikum-Logo (Favicon, Touch-Icon)
│   ├── Patientenpfade.png     # App-Logo (Sidebar, Hero)
│   └── ZNA/                   # SOP-spezifische Abbildungen
│       ├── akute-herzinsuffizienz_diagnostischer_algorithmus.png
│       └── akute-intoxikation_toxidrom.png
└── sops/                      # 73 einzelne SOP-Dateien (JavaScript-Module)
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
    ├── st-hebungsinfarkt.js
    ├── status-epilepticus.js
    ├── sterbephase-palliativ.js
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

---

## 📚 SOP-Kategorien

| Kategorie | Schlüssel | Anzahl | Farbe |
|-----------|-----------|--------|-------|
| ❤️ Kardiologie | `kardio` | – | Rot |
| 🫁 Pneumologie | `pulmo` | – | Blau |
| 🍽️ Gastroenterologie | `gi` | – | Orange |
| 🧠 Neurologie | `neuro` | – | Violett |
| 💧 Nephrologie | `nephro` | – | Cyan |
| 🧪 Metabolisch | `metab` | – | Grün |
| 💉 Hämatologie | `haem` | – | Pink |
| 🦠 Infektiologie | `infekt` | – | Limette |
| ☠️ Toxikologie | `tox` | – | Orange |
| 🩺 Leitsymptom | `leit` | – | Indigo |
| ℹ️ Sonstige | `sonst` | – | Grau |

---

## 📝 Neue SOP hinzufügen

### 1. SOP-Datei erstellen

Erstellen Sie eine neue Datei unter `sops/` (z. B. `sops/neue-sop.js`):

```javascript
(function(){
    if(!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "eindeutige-id",              // URL-freundliche ID (keine Leerzeichen!)
        title: "Titel der SOP",            // Anzeigename
        name: "Titel der SOP",             // Alternativ: name statt title
        category: "kardio",                // Kategorie-Schlüssel (siehe Tabelle)
        stand: "03/25",                    // Aktualisierungsstand (MM/YY)
        sources: "<p>Quellenangaben...</p>", // HTML-String
        sections: [
            {
                title: "Definition",
                html: "<p>Definitionstext...</p>"
            },
            {
                title: "Ursachen",
                html: "<ul><li>Ursache 1</li><li>Ursache 2</li></ul>"
            },
            {
                title: "Symptome",
                html: "<p>Symptomatik...</p>"
            },
            {
                title: "Diagnostik",
                html: "<p>Diagnostische Schritte...</p>"
            },
            {
                title: "Therapie",
                html: "<p>Therapieoptionen...</p>"
            },
            {
                title: "Merke",
                html: "<div class=\"callout callout-wichtig\">Wichtiger Hinweis!</div>"
            },
            {
                title: "Disposition",
                html: "<p>Weiteres Vorgehen...</p>"
            },
            {
                title: "Komplikationen",
                html: "<p>Mögliche Komplikationen...</p>"
            }
        ]
    });
})();
```

### 2. Script einbinden

Fügen Sie in [`index.html`](index.html) vor `app.js` ein:

```html
<script src="sops/neue-sop.js"></script>
<script src="app.js"></script>
```

### Unterstützte Callout-Klassen

| CSS-Klasse | Verwendung | Farbe |
|------------|------------|-------|
| `callout callout-cave` | Warnhinweise, Kontraindikationen | Rot |
| `callout callout-wichtig` | Wichtige Hinweise | Blau |
| `callout callout-hinweis` | Allgemeine Tipps | Grün |

---

## 🌐 Browser-Kompatibilität

| Browser | Minimale Version |
|---------|------------------|
| Chrome / Edge | 80+ |
| Safari (iOS/macOS) | 14+ |
| Firefox | 78+ |
| Samsung Internet | 13+ |

---

## 🤝 Mitwirken

### Beiträge willkommen!

1. **Fehler melden:** Erstellen Sie ein Issue mit Beschreibung und Screenshots
2. **SOP aktualisieren:** Erstellen Sie einen Pull Request mit den Änderungen
3. **Neue SOP:** Folgen Sie der Anleitung oben und reichen Sie einen PR ein

### Entwicklungsrichtlinien

- **Code-Stil:** ES5-kompatibles JavaScript für maximale Browser-Unterstützung
- **SOP-Format:** Strikte Einhaltung des oben definierten Datenformats
- **Medizinische Inhalte:** Nur mit entsprechender Fachprüfung freigeben

---

## 📄 Lizenz

Dieses Projekt ist für den **internen klinischen Gebrauch** am Klinikum St. Georg Leipzig bestimmt.

Alle medizinischen Inhalte unterliegen dem Urheberrecht der jeweiligen Autoren und Leitlinienkommissionen. Eine Weitergabe oder Vervielfältigung ohne ausdrückliche Genehmigung ist nicht gestattet.

---

## 📞 Kontakt & Impressum

**Klinikum St. Georg Leipzig**  
Klinik für Radiologie und Nuklearmedizin  
AG Klinische Pfade

### Autor

**Dr. med. Markus Lurz**  
Klinikum St. Georg Leipzig  
Delitzscher Straße 141  
04129 Leipzig

---

<div align="center">

**[⬆ Nach oben](#-sop-zna--patientenpfade-zentrale-notaufnahme)**

*Stand: Februar 2026*

</div>
