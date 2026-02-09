# Patientenpfade: ZNA

![Status](https://img.shields.io/badge/Status-Stable-success)
![Platform](https://img.shields.io/badge/Platform-PWA%20%7C%20Web-blue)
![Content](https://img.shields.io/badge/SOPs-73-orange)
![License](https://img.shields.io/badge/License-MIT-green)

Eine **Progressive Web App (PWA)** für klinische Standard Operating Procedures (SOPs) in der Zentralen Notaufnahme. Diese Anwendung stellt 73 evidenzbasierte Behandlungspfade bereit – offline verfügbar, blitzschnell durchsuchbar und für die mobile Nutzung optimiert.

---

## 📋 Inhaltsverzeichnis

1. [Über das Projekt](#-über-das-projekt)
2. [Funktionen](#-funktionen)
3. [Medizinische Inhalte](#-medizinische-inhalte)
4. [Technologie-Stack](#-technologie-stack)
5. [Projektstruktur](#-projektstruktur)
6. [Installation & Nutzung](#-installation--nutzung)
7. [Entwicklung & Wartung](#-entwicklung--wartung)
8. [Browser-Support](#-browser-support)
9. [Medizinischer Haftungsausschluss](#-medizinischer-haftungsausschluss)

---

## 🏥 Über das Projekt

In der Notaufnahme zählt jede Sekunde. **Patientenpfade: ZNA** wurde entwickelt, um Ärzten und pflegerischem Personal schnellen Zugriff auf strukturierte Handlungsanweisungen zu geben.

Die Anwendung enthält **73 modulare SOP-Dateien**, die nach dem Separation-of-Concerns-Prinzip organisiert sind. Jede SOP ist eine eigenständige Datei, was die Wartung, Erweiterung und kollaborative Bearbeitung erheblich vereinfacht.

### Logo & Branding

Die Anwendung verwendet das **Patientenpfade-Logo** ([`img/Patientenpfade.png`](img/Patientenpfade.png)) als Haupterkennungsmerkmal. Dieses wird sowohl als App-Icon für die PWA-Installation als auch im Header der Anwendung angezeigt. Ein zusätzliches Logo ([`img/Basislogo_farbig.png`](img/Basislogo_farbig.png)) steht für weitere Branding-Zwecke zur Verfügung.

### Zielgruppe

- Ärzte in der Notaufnahme
- Pflegepersonal
- Medizinstudenten im Praktischen Jahr
- Weiterbildungsassistenten

---

## ✨ Funktionen

### 📱 User Interface & UX

| Funktion | Beschreibung |
|----------|--------------|
| **Mobile-First Design** | Optimiert für die Einhand-Bedienung auf Smartphones, skaliert nahtlos auf Tablets und Desktop-PCs |
| **Dark/Light Mode** | Automatische Erkennung der Systemeinstellung sowie manueller Umschalter – augenschonend bei Nachtschichten |
| **Intuitive Navigation** | Sidebar-Menü mit Kategorienfilter und visuellen Indikatoren für Fachbereiche |
| **Responsive Design** | Passt sich automatisch an jede Bildschirmgröße an |

### 🚀 Performance & Technik

| Funktion | Beschreibung |
|----------|--------------|
| **Offline-Ready (PWA)** | Dank Service Worker ist die App nach dem ersten Laden vollständig ohne Internetverbindung nutzbar |
| **Zero-Dependencies** | Geschrieben in reinem Vanilla JavaScript, HTML5 und CSS3 – keine Frameworks, keine Build-Tools |
| **Installierbar** | Kann über "Zum Startbildschirm hinzufügen" wie eine native App installiert werden |
| **Schnelle Ladezeiten** | Statische Dateien ohne Backend-Calls ermöglichen extrem schnelle Ladezeiten |

### 🔍 Suche & Struktur

| Funktion | Beschreibung |
|----------|--------------|
| **Echtzeit-Volltextsuche** | Filtert SOPs über Titel und alle Inhalte in Echtzeit |
| **Kategoriefilter** | Schnelle Filterung nach Fachdisziplinen |
| **Strukturierte Inhalte** | Jede SOP ist in logische Abschnitte unterteilt (Definition, Ursachen, Symptome, Diagnostik, Therapie, Merke, Disposition) |
| **Interaktive Elemente** | Abschnitte sind ein-/ausklappbar, um den Fokus auf relevante Informationen zu lenken |

---

## 📚 Medizinische Inhalte

Die Anwendung umfasst **73 SOPs**, die nach Leitsymptomen und Fachdisziplinen organisiert sind.

### Kategorien-Übersicht

Die SOPs sind farblich kodiert und folgenden Kategorien zugeordnet:

| Kategorie | Beschreibung | Beispiele |
|-----------|--------------|-----------|
| ❤️ **Kardiologie** | Herz-Kreislauf-Erkrankungen | ST-Hebungsinfarkt, Herzinsuffizienz, HRST, Akutes Aortensyndrom |
| 🫁 **Pneumologie** | Atemwegs- und Lungenerkrankungen | AECOPD, Pneumonie, Lungenarterienembolie, Asthmaexazerbation |
| 🧠 **Neurologie** | Erkrankungen des Nervensystems | Status epilepticus, Kopfschmerzen, Bakterielle Meningitis |
| 🍽️ **Gastroenterologie** | Magen-Darm-Erkrankungen | GI-Blutung, Pankreatitis, Akute Divertikulitis |
| 🦠 **Infektiologie** | Infektionskrankheiten | Sepsis, Harnwegsinfektion, Erysipel |
| 🧪 **Metabolisch** | Stoffwechselerkrankungen | DKA, Elektrolytstörungen, Hyperglykämie |
| 🩸 **Hämatologie** | Bluterkrankungen | TVT, Anämie, Thrombozytopenie |
| ☠️ **Toxikologie** | Vergiftungen und Intoxikationen | Akute Intoxikation, Kohlenmonoxidintoxikation, Stromunfall |
| 🩺 **Leitsymptome** | Symptomorientierte Ansätze | Dyspnoe, Thoraxschmerzen, Schock, Synkope |
| 💧 **Nephrologie** | Nierenerkrankungen | Nierenkolik, Akute Nierenschädigung |
| ℹ️ **Sonstige** | Diverse Erkrankungen | Delir, Hitzschlag, Sterbephase/Palliativ |

### Alle 73 SOPs im Überblick

| A | B | D |
|---|---|---|
| [`abdominelle-schmerzen`](sops/abdominelle-schmerzen.js) | [`bakterielle-meningitis`](sops/bakterielle-meningitis.js) | [`delir`](sops/delir.js) |
| [`aecopd`](sops/aecopd.js) | [`bradykarde-hrst`](sops/bradykarde-hrst.js) | [`diabetische-ketoazidose`](sops/diabetische-ketoazidose.js) |
| [`akute-alkoholintoxikation`](sops/akute-alkoholintoxikation.js) | | [`dyspnoe`](sops/dyspnoe.js) |
| [`akute-divertikulitis`](sops/akute-divertikulitis.js) | **C** | |
| [`akute-gastroenteritis`](sops/akute-gastroenteritis.js) | [`cannabinoid-hyperemesis-syndrom`](sops/cannabinoid-hyperemesis-syndrom.js) | **E** |
| [`akute-herzinsuffizienz`](sops/akute-herzinsuffizienz.js) | | [`erbrechen`](sops/erbrechen.js) |
| [`akute-intoxikation`](sops/akute-intoxikation.js) | | [`erysipel`](sops/erysipel.js) |
| [`akute-mesenterialischaemie`](sops/akute-mesenterialischaemie.js) | | |
| [`akute-nebenniereninsuffizienz`](sops/akute-nebenniereninsuffizienz.js) | | **F** |
| [`akute-nierenschaedigung`](sops/akute-nierenschaedigung.js) | | [`fieber-in-der-neutropenie`](sops/fieber-in-der-neutropenie.js) |
| [`akute-pankreatitis`](sops/akute-pankreatitis.js) | | [`fremdkoerperingestion`](sops/fremdkoerperingestion.js) |
| [`akuter-gichtanfall`](sops/akuter-gichtanfall.js) | | |
| [`akuter-harnverhalt`](sops/akuter-harnverhalt.js) | | |
| [`akutes-aortensyndrom`](sops/akutes-aortensyndrom.js) | | |
| [`anaemie`](sops/anaemie.js) | | |
| [`anaphylaxie`](sops/anaphylaxie.js) | | |
| [`asthmaexazerbation`](sops/asthmaexazerbation.js) | | |

| H | I | K |
|---|---|---|
| [`harnwegsinfektion`](sops/harnwegsinfektion.js) | [`ikterus`](sops/ikterus.js) | [`kohlenmonoxidintoxikation`](sops/kohlenmonoxidintoxikation.js) |
| [`heparininduzierte-thrombozytopenie`](sops/heparininduzierte-thrombozytopenie.js) | | [`kopfschmerzen`](sops/kopfschmerzen.js) |
| [`hepatische-enzephalopathie`](sops/hepatische-enzephalopathie.js) | | |
| [`herz-kreislauf-stillstand`](sops/herz-kreislauf-stillstand.js) | | |
| [`hitzschlag`](sops/hitzschlag.js) | | |
| [`hyperkaliaemie`](sops/hyperkaliaemie.js) | | |
| [`hyperkalzaemie`](sops/hyperkalzaemie.js) | | |
| [`hypernatriaemie`](sops/hypernatriaemie.js) | | |
| [`hyperosmolares-hyperglykaemisches-syndrom`](sops/hyperosmolares-hyperglykaemisches-syndrom.js) | | |
| [`hypertensiver-notfall`](sops/hypertensiver-notfall.js) | | |
| [`hypoglykaemie`](sops/hypoglykaemie.js) | | |
| [`hypokaliaemie`](sops/hypokaliaemie.js) | | |
| [`hypokalzaemie`](sops/hypokalzaemie.js) | | |
| [`hyponatriaemie`](sops/hyponatriaemie.js) | | |

| L | M | N |
|---|---|---|
| [`lungenarterienembolie`](sops/lungenarterienembolie.js) | [`myxoedemkoma`](sops/myxoedemkoma.js) | [`nicht-st-hebungsinfarkt`](sops/nicht-st-hebungsinfarkt.js) |
| | | [`nierenkolik`](sops/nierenkolik.js) |

| O | P | S |
|---|---|---|
| [`obere-gastrointestinale-blutung`](sops/obere-gastrointestinale-blutung.js) | [`pleuraerguss`](sops/pleuraerguss.js) | [`schock`](sops/schock.js) |
| [`oesophageale-bolusimpaktion`](sops/oesophageale-bolusimpaktion.js) | [`pneumonie`](sops/pneumonie.js) | [`sepsis`](sops/sepsis.js) |
| | | [`spontan-bakterielle-peritonitis`](sops/spontan-bakterielle-peritonitis.js) |
| | | [`st-hebungsinfarkt`](sops/st-hebungsinfarkt.js) |
| | | [`status-epilepticus`](sops/status-epilepticus.js) |
| | | [`sterbephase-palliativ`](sops/sterbephase-palliativ.js) |
| | | [`stromunfall`](sops/stromunfall.js) |
| | | [`synkope`](sops/synkope.js) |

| T | U | V |
|---|---|---|
| [`tachykarde-hrst`](sops/tachykarde-hrst.js) | [`unklaere-vigilanzminderung`](sops/unklaere-vigilanzminderung.js) | [`vena-cava-superior-syndrom`](sops/vena-cava-superior-syndrom.js) |
| [`thoraxschmerzen`](sops/thoraxschmerzen.js) | [`untere-gastrointestinale-blutung`](sops/untere-gastrointestinale-blutung.js) | [`vorhofflimmern`](sops/vorhofflimmern.js) |
| [`thrombozytopenie`](sops/thrombozytopenie.js) | | |
| [`tiefe-venenthrombose`](sops/tiefe-venenthrombose.js) | | |
| [`tonsillitis`](sops/tonsillitis.js) | | |
| [`transiente-globale-amnesie`](sops/transiente-globale-amnesie.js) | | |
| [`tumorlysesyndrom`](sops/tumorlysesyndrom.js) | | |

| Z |
|---|
| [`zerebrale-metastasen`](sops/zerebrale-metastasen.js) |
| [`zerebrale-venen-sinusthrombose`](sops/zerebrale-venen-sinusthrombose.js) |

---

## 🛠 Technologie-Stack

| Komponente | Technologie |
|------------|-------------|
| **Frontend** | Vanilla JavaScript (ES6+) |
| **Styling** | CSS3 mit CSS-Variablen |
| **Offline** | Service Worker API |
| **Architektur** | Single Page Application (SPA) |
| **Build-Tools** | Keine erforderlich |

### Architektur-Prinzipien

- **Zero-Dependencies**: Keine externen Bibliotheken oder Frameworks
- **No-Build**: Kein Build-Prozess erforderlich – direkte Nutzung der Quelldateien
- **Modular**: Jede SOP ist eine eigenständige Datei
- **Offline-First**: Vollständige Funktionalität ohne Internetverbindung

---

## 📂 Projektstruktur

```
SOP/
├── index.html                # Einstiegspunkt, Layout-Gerüst, Script-Tags
├── styles.css                # Alle Styles, CSS-Variablen, Responsive Design
├── app.js                    # Kernlogik: Routing, Suche, DOM-Manipulation
├── sw.js                     # Service Worker für Offline-Funktionalität
├── README.md                 # Diese Dokumentation
│
├── img/                      # Bilder und Logos
│   ├── Patientenpfade.png    # Hauptlogo und App-Icon
│   └── Basislogo_farbig.png  # Zusätzliches Logo
│
├── plans/                    # Planungsunterlagen
│   └── sop-refactoring-plan.md
│
└── sops/                     # 73 modulare SOP-Dateien
    ├── abdominelle-schmerzen.js
    ├── aecopd.js
    ├── akute-alkoholintoxikation.js
    ├── akute-divertikulitis.js
    ├── ... (73 Dateien insgesamt)
    └── zerebrale-venen-sinusthrombose.js
```

### Dateiformat einer SOP

Jede SOP-Datei folgt einem einheitlichen Format:

```javascript
// sops/beispiel-sop.js
(function() {
  'use strict';
  
  var sop = {
    id: "beispiel-sop",              // Eindeutiger Identifikator (kebab-case)
    title: "Beispiel SOP",           // Anzeigename
    category: "Kategorie",           // Fachbereich (z.B. "Kardiologie")
    catKey: "kuerzel",               // Kategorie-Kürzel (z.B. "kardio")
    sections: [                      // Array von Inhaltsabschnitten
      {
        title: "Definition",
        html: `<ul><li>Inhalt...</li></ul>`
      },
      {
        title: "Diagnostik",
        html: `<p>Weitere Inhalte...</p>`
      }
    ],
    stand: "MM/YY",                  // Stand-Datum der SOP
    sources: `Quellenangaben`        // Literaturquellen
  };
  
  // Selbstregistrierung am globalen Array
  window.SOP_DATA = window.SOP_DATA || [];
  window.SOP_DATA.push(sop);
})();
```

---

## 💻 Installation & Nutzung

### Voraussetzungen

- Ein moderner Webbrowser (Chrome, Firefox, Safari, Edge)
- Ein HTTP-Server für lokale Entwicklung (Service Worker benötigen `localhost` oder `https`)

### Hosting

Die Anwendung kann überall gehostet werden, wo statische Dateien bereitgestellt werden können:

- **GitHub Pages** (kostenlos)
- **Netlify** / **Vercel** (kostenlos)
- **Apache** / **Nginx** (eigener Server)
- **Lokaler Webserver** (Entwicklung)

### Lokale Entwicklung

1. **Repository klonen**
   ```bash
   git clone <repository-url>
   cd SOP
   ```

2. **Lokalen Webserver starten**
   
   Mit Python:
   ```bash
   python3 -m http.server 8000
   ```
   
   Mit Node.js:
   ```bash
   npx serve
   ```
   
   Mit VS Code: "Live Server" Extension nutzen

3. **Browser öffnen**
   ```
   http://localhost:8000
   ```

### Installation als PWA auf dem Endgerät

| Plattform | Installation |
|-----------|--------------|
| **iOS (Safari)** | Teilen-Button → "Zum Home-Bildschirm" |
| **Android (Chrome)** | Menü → "App installieren" |
| **Desktop (Chrome/Edge)** | Install-Symbol in der Adressleiste → "Installieren" |

Nach der Installation erscheint die App mit dem **Patientenpfade-Logo** auf dem Startbildschirm und kann wie eine native Anwendung genutzt werden.

---

## 🔧 Entwicklung & Wartung

### Neue SOP hinzufügen

1. Neue Datei im Ordner `/sops/` erstellen: `{sop-id}.js`
2. Das Standard-Format verwenden (siehe oben)
3. Script-Tag in [`index.html`](index.html) hinzufügen
4. Pfad in [`sw.js`](sw.js) zur `ASSETS_TO_CACHE` Liste hinzufügen
5. Cache-Version in `sw.js` aktualisieren

### SOP bearbeiten

Die entsprechende Datei im `/sops/` Ordner öffnen und bearbeiten. Die Änderungen sind nach dem Speichern und Aktualisieren des Browsers sofort wirksam.

### Cache aktualisieren

Nach Änderungen an SOPs muss die Cache-Version im Service Worker aktualisiert werden:

```javascript
// sw.js
var CACHE_NAME = 'sop-notaufnahme-v20260209c'; // Neue Version
```

---

## 🌐 Browser-Support

Die Anwendung nutzt moderne Web-Standards (ES6, CSS Grid/Flexbox, CSS Variables).

| Browser | Support | PWA |
|:--------|:--------|:----|
| Chrome / Edge | ✅ Vollständig | ✅ |
| Safari (iOS/macOS) | ✅ Vollständig | ✅ |
| Firefox | ✅ Vollständig | ⚠️ Eingeschränkt unter iOS |
| Internet Explorer | ❌ Nicht unterstützt | ❌ |

---

## ⚖️ Medizinischer Haftungsausschluss

**WICHTIG:** Diese Anwendung dient ausschließlich als **Nachschlagewerk und Gedächtnisstütze** für medizinisches Fachpersonal.

1. **Keine Diagnose:** Die Inhalte ersetzen keine professionelle ärztliche Diagnose, Beratung oder Behandlung.

2. **Aktualität:** Trotz sorgfältiger Prüfung können sich Leitlinien und Dosierungsempfehlungen ändern. Der Nutzer ist verpflichtet, Dosierungen (insbesondere bei Medikamenten) eigenverantwortlich anhand der aktuellen Fachinformationen zu überprüfen.

3. **Haftung:** Die Entwickler übernehmen keine Haftung für Schäden, die aus der Nutzung der bereitgestellten Informationen entstehen.

4. **Verwendung:** Die Anwendung ist ausschließlich für medizinisches Fachpersonal bestimmt.

---

## 📄 Lizenz

Dieses Projekt steht unter der MIT-Lizenz.

---

*Zuletzt aktualisiert: Februar 2026*
