# SOP-ZNA – Patientenpfade der Zentralen Notaufnahme

> Evidenzbasierte Standard Operating Procedures für die Zentrale Notaufnahme des Klinikums St. Georg Leipzig

## Projektübersicht

SOP-ZNA ist eine Progressive Web Application (PWA) zur Darstellung von **73 evidenzbasierten Standard Operating Procedures (SOPs)** in der Zentralen Notaufnahme. Die Anwendung ermöglicht medizinischem Personal schnellen Zugriff auf diagnostische und therapeutische Behandlungspfade – optimiert für Desktop- und mobile Nutzung.

Die Anwendung wird von der **AG Klinische Pfade** des Klinikums St. Georg Leipzig entwickelt und gepflegt.

### Einsatzgebiet

- **Notaufnahme-Teams:** Schneller Zugriff auf Behandlungsstandards
- **Fortbildung:** Evidenzbasierte Leitlinien für Schulungen
- **Qualitätssicherung:** Standardisierte Behandlungsabläufe

---

## Features

### Navigation & Suche

| Feature | Beschreibung |
|---------|--------------|
| **Kategorie-Navigation** | 11 medizinische Fachgebiete mit Farbcodierung |
| **Spotlight-Suche** | Schnellsuche mit Tastenkürzel `Strg/Cmd + K` |
| **Volltextsuche** | Durchsucht alle SOP-Inhalte mit Snippet-Vorschau |
| **Deep Linking** | Direkte Links zu einzelnen SOPs via URL-Hash |

### Benutzeroberfläche

| Feature | Beschreibung |
|---------|--------------|
| **Responsive Design** | Optimiert für Desktop, Tablet und Smartphone |
| **Dark/Light Mode** | Automatische Systemerkennung + manueller Toggle |
| **Schriftgröße** | Einstellbar (13–20px) für bessere Lesbarkeit |
| **Touch-Gesten** | Swipe-to-Back auf iOS/Android |

### SOP-Darstellung

| Feature | Beschreibung |
|---------|--------------|
| **Segmented Control** | Schnellnavigation zwischen SOP-Abschnitten |
| **Akkordeon-Sections** | Auf-/Zuklappen von Diagnostik, Therapie etc. |
| **Sticky Section Bar** | Aktueller Abschnitt bleibt sichtbar beim Scrollen |
| **Inhaltsverzeichnis** | Floating Action Button für schnellen Zugriff |
| **Druckfunktion** | Optimierte Druckansicht aller Abschnitte |

### Offline-Fähigkeit

| Feature | Beschreibung |
|---------|--------------|
| **Offline-Banner** | Anzeige bei fehlender Netzverbindung |
| **Cache-Strategie** | Anwendung bleibt ohne Internet nutzbar |
| **Pull-to-Refresh** | Manuelles Aktualisieren der Inhalte |

---

## Technologie-Stack

### Frontend

| Technologie | Version/Einsatz |
|-------------|-----------------|
| **JavaScript** | ES5-kompatibel (keine Frameworks) |
| **CSS** | Custom Properties, Flexbox, Grid |
| **HTML5** | Semantische Struktur |

### Externe Ressourcen

| Ressource | Zweck |
|-----------|-------|
| **Font Awesome 6.5.1** | Icons (CDN) |
| **Inter Font** | Typografie (Google Fonts) |

### Architektur-Prinzipien

- **Single-Page Application (SPA)** ohne Framework-Abhängigkeiten
- **Modulare SOP-Dateien** – jede SOP ist eine separate `.js`-Datei
- **IIFE-Pattern** für Kapselung des Anwendungscodes
- **CSS Custom Properties** für konsistentes Theming

---

## Installation & Deployment

### Voraussetzungen

- Webserver mit statischem File-Serving
- HTTPS für PWA-Funktionalität (empfohlen)
- Keine serverseitige Laufzeitumgebung erforderlich

### Deployment

1. **Dateien auf Webserver kopieren:**

   ```bash
   # Beispiel: SCP auf Server
   scp -r sop-zna/ user@server:/var/www/html/
   ```

2. **Version aktualisieren (optional):**
   
   In [`version.json`](version.json) die neue Version eintragen:
   ```json
   {
       "version": "2.2.3",
       "lastUpdated": "2026-02-15T10:00:00Z",
       "changelog": "Neue SOP hinzugefügt"
   }
   ```

3. **Cache leeren:**
   
   Die Anwendung löscht beim Laden automatisch alle Service Worker und Caches.

### Hosting-Optionen

| Plattform | Eignung |
|-----------|---------|
| **Firebase Hosting** | Empfohlen für PWA |
| **GitHub Pages** | Für Demos/Entwicklung |
| **Apache/Nginx** | On-Premise Hosting |
| **Netlify/Vercel** | Automatisches Deployment |

---

## Update-Mechanismus

### Funktionsweise

Die Anwendung prüft bei jedem Seitenaufruf automatisch auf Updates:

1. **Version-Check:** Beim Laden wird [`version.json`](version.json) vom Server abgerufen
2. **Vergleich:** Die Server-Version wird mit der lokal gespeicherten Version verglichen
3. **Benachrichtigung:** Bei Unterschied erscheint eine Update-Benachrichtigung
4. **Aktualisierung:** Nutzer tippt auf die Benachrichtigung → Seite wird neu geladen

### Implementierung

Der Update-Mechanismus ist in [`checkForUpdate()`](app.js:894) implementiert:

```javascript
function checkForUpdate() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'version.json?_=' + new Date().getTime(), true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var serverData = JSON.parse(xhr.responseText);
            var serverVersion = serverData.version;
            var localVersion = localStorage.getItem('sop-app-version') || APP_VERSION;

            // Benachrichtigung bei Versionsunterschied
            if (serverVersion !== localVersion) {
                showUpdateNotification(serverData);
            }

            // Version nur speichern wenn sie mit Server übereinstimmt
            // Dies verhindert Endlosschleifen nach dem Update
            if (serverVersion === APP_VERSION) {
                localStorage.setItem('sop-app-version', APP_VERSION);
            }
        }
    };
    xhr.send();
}
```

### Wichtiger Fix (Version 2.2.2)

**Problem:** Nach dem Aktualisieren der `version.json` erschien die Update-Benachrichtigung immer wieder, auch nach dem Neuladen.

**Ursache:** Die lokale `APP_VERSION` wurde immer im localStorage gespeichert, unabhängig davon, ob sie mit der Server-Version übereinstimmte.

**Lösung:** Die Version wird jetzt nur dann im localStorage gespeichert, wenn `APP_VERSION === serverVersion`. Dadurch wird die Benachrichtigung nach erfolgreichem Update nicht mehr angezeigt.

### Update durchführen

1. **Neue Version in `app.js` eintragen:**
   ```javascript
   var APP_VERSION = '2.2.3';
   ```

2. **`version.json` aktualisieren:**
   ```json
   {
       "version": "2.2.3",
       "lastUpdated": "2026-02-15T10:00:00Z",
       "changelog": "Beschreibung der Änderungen"
   }
   ```

3. **Dateien auf Server deployen**

4. **Nutzer erhalten beim nächsten Aufruf die Update-Benachrichtigung**

---

## SOP hinzufügen

### Schritt-für-Schritt-Anleitung

1. **Neue Datei erstellen:**
   
   Datei `sops/neue-sop.js` im Verzeichnis [`sops/`](sops/) anlegen.

2. **SOP-Datenstruktur:**
   
   ```javascript
   window.SOP_DATA = window.SOP_DATA || [];
   window.SOP_DATA.push({
       id: "eindeutige-id",           // Required: URL-freundlicher String
       name: "Titel der SOP",         // Required: Anzeigename
       category: "kardio",            // Required: Kategorie-Schlüssel
       stand: "02/26",                // Optional: Datum MM/YY
       sources: "<p>Quellen...</p>",  // Optional: HTML-String
       sections: [                    // Required: Array von Abschnitten
           {
               title: "Definition",
               html: "<p>Inhalt...</p>"
           },
           {
               title: "Diagnostik",
               html: "<p>Inhalt...</p>"
           },
           {
               title: "Therapie",
               html: "<p>Inhalt...</p>"
           }
       ]
   });
   ```

3. **In `index.html` einbinden:**
   
   Script-Tag vor [`app.js`](index.html:291) hinzufügen:
   ```html
   <script src="sops/neue-sop.js"></script>
   <script src="app.js"></script>
   ```

4. **Kategorie prüfen:**
   
   Sicherstellen, dass die Kategorie in [`CATS`](app.js:12) definiert ist:
   ```javascript
   var CATS = {
       'kardio': { name: 'Kardiologie', icon: 'fa-heart-pulse' },
       // ...
   };
   ```

### Verfügbare Kategorien

| Schlüssel | Name | Icon | Farbe |
|-----------|------|------|-------|
| `kardio` | Kardiologie | `fa-heart-pulse` | Rot |
| `pulmo` | Pneumologie | `fa-lungs` | Blau |
| `gi` | Gastroenterologie | `fa-utensils` | Orange |
| `neuro` | Neurologie | `fa-brain` | Violett |
| `nephro` | Nephrologie | `fa-droplet` | Cyan |
| `metab` | Metabolisch | `fa-flask` | Grün |
| `haem` | Hämatologie | `fa-syringe` | Pink |
| `infekt` | Infektiologie | `fa-virus` | Limette |
| `tox` | Toxikologie | `fa-skull-crossbones` | Orange |
| `leit` | Leitsymptom | `fa-stethoscope` | Indigo |
| `sonst` | Sonstige | `fa-circle-info` | Grau |

### Neue Kategorie hinzufügen

In [`app.js`](app.js:12) zwei Objekte erweitern:

```javascript
// Kategorien
var CATS = {
    // ... bestehende
    'neue-kat': { name: 'Neue Kategorie', icon: 'fa-icon-name' }
};

// Farben
var CC = {
    // ... bestehende
    'neue-kat': '#hexfarbe'
};
```

---

## Entwicklung

### Lokale Entwicklungsumgebung

```bash
# Python 3
python3 -m http.server 8080

# Node.js
npx serve .

# PHP
php -S localhost:8080
```

Die Anwendung ist dann unter `http://localhost:8080` erreichbar.

### Projektstruktur

```
sop-zna/
├── index.html              # Einstiegspunkt, HTML-Struktur
├── app.js                  # Hauptanwendungslogik (~2100 Zeilen)
├── styles.css              # Vollständiges Stylesheet (~3000 Zeilen)
├── version.json            # Versionsdatei für Update-Check
├── AGENTS.md               # Technische Dokumentation für KI-Agenten
├── README.md               # Diese Datei
├── img/
│   ├── Basislogo_farbig.png    # Logo für Hero-Section
│   ├── Patientenpfade.png      # App-Icon
│   └── ZNA/
│       └── *.png               # SOP-spezifische Abbildungen
└── sops/
    └── *.js                # 73 einzelne SOP-Module
```

### Wichtige Dateien

| Datei | Zweck |
|-------|-------|
| [`index.html`](index.html) | DOM-Struktur, Script-Einbindung |
| [`app.js`](app.js) | State Management, Rendering, Navigation |
| [`styles.css`](styles.css) | Theming, Layout, Animationen |
| [`version.json`](version.json) | Update-Erkennung |
| [`AGENTS.md`](AGENTS.md) | Detaillierte Architektur-Dokumentation |

### Debugging

- **Console:** `S` Objekt für State-Inspektion
- **DOM Cache:** `E` Objekt für Element-Referenzen
- **SOP-Daten:** `SOP_DATA` Array im globalen Scope

---

## Browser-Unterstützung

### Unterstützte Browser

| Browser | Version | Status |
|---------|---------|--------|
| **Chrome** | 80+ | ✅ Vollständig |
| **Firefox** | 75+ | ✅ Vollständig |
| **Safari** | 13+ | ✅ Vollständig |
| **Edge** | 80+ | ✅ Vollständig |
| **iOS Safari** | 13+ | ✅ Vollständig |
| **Android Chrome** | 80+ | ✅ Vollständig |

### Mobile Optimierung

- **iOS Safe Areas:** Berücksichtigt Notch und Home Indicator
- **Touch-Optimierung:** 44px Mindestgröße für Touch-Targets
- **Swipe-Gesten:** Edge-Swipe für Zurück-Navigation
- **Pull-to-Refresh:** Aktualisieren durch Herunterziehen

### iOS PWA Safe-Area-Unterstützung

Die Anwendung nutzt einen JavaScript-basierten Ansatz zur Erkennung der Safe-Area auf iOS-Geräten im PWA-Modus, da die CSS-Funktion `env(safe-area-inset-bottom)` im iOS standalone mode oft `0px` zurückgibt.

**Implementierte Lösung:**
- Laufzeit-Messung der Safe-Area beim Anwendungsstart
- iPhone-Screen-Height-Lookup-Table für präzise Erkennung
- CSS-Variable `--sab-js` wird dynamisch gesetzt
- Event-Handler für orientationchange und resize

**Unterstützte Geräte:**
- iPhone X/XS/11 Pro (34px Safe-Area)
- iPhone XR/11 (34px Safe-Area)
- iPhone 12/13/14/15 Mini (34px Safe-Area)
- iPhone 12/13/14/15/16 (34px Safe-Area)
- iPhone 12/13/14/15/16 Pro (34px Safe-Area)
- iPhone 12/13/14/15/16 Pro Max (34px Safe-Area)
- iPhone 14 Pro/15 Pro/16 Pro (59px Dynamic Island)
- iPhone 14 Pro Max/15 Pro Max/16 Pro Max (59px Dynamic Island)

### Bekannte Einschränkungen

- **Internet Explorer:** Nicht unterstützt
- **file:// Protocol:** Update-Check deaktiviert
- **Private Mode:** localStorage möglicherweise eingeschränkt

---

## Lizenz & Kontakt

### Lizenz

Internes Projekt des Klinikums St. Georg Leipzig. Alle Rechte vorbehalten.

### Kontakt

- **Entwicklung:** AG Klinische Pfade
- **Institution:** Klinikum St. Georg Leipzig gGmbH
- **Standort:** Delitzscher Straße 141, 04129 Leipzig

### Mitwirken

Bei Fragen zur Architektur oder neuen Features siehe [`AGENTS.md`](AGENTS.md) für technische Details.

---

*Letzte Aktualisierung: Februar 2026*  
*Version: 2.3.0*

---

## Versionshistorie

| Version | Datum | Änderungen |
|---------|-------|------------|
| **v2.3.0** | Feb 2026 | iOS PWA Safe-Area-Fix mit JavaScript-Laufzeiterkennung und iPhone Screen Height Lookup Table |
| **v2.2.4** | Feb 2026 | Robuste iOS PWA Bottom-Navbar Positionierung + "Stand: Datum/Uhrzeit" von Startseite entfernt |
| **v2.2.3** | Feb 2026 | Erste iOS PWA Bottom-Navbar Lösung (funktionierte nicht) |
| **v2.2.2** | Feb 2026 | Fix: Update-Benachrichtigung Endlosschleife verhindert |

---
