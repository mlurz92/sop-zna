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
| **Verlaufsnavigation** | Zurück-Taste von Browser und Android navigiert in der App |

### Benutzeroberfläche

| Feature | Beschreibung |
|---------|--------------|
| **Responsive Design** | Optimiert für Desktop, Tablet und Smartphone |
| **Dark/Light Mode** | Automatische Systemerkennung + manueller Toggle |
| **Schriftgröße** | Einstellbar (13–20px) für bessere Lesbarkeit |
| **Touch-Gesten** | Swipe-to-Back auf iOS/Android |
| **Barrierefreiheit** | WCAG 2.1 AA: Tastaturbedienung, Fokusführung, geprüfte Kontraste |
| **Telefonverzeichnis** | Modal mit allen ZNA-Rufnummern inkl. Live-Suche |

### SOP-Darstellung

| Feature | Beschreibung |
|---------|--------------|
| **Segmented Control** | Schnellnavigation zwischen SOP-Abschnitten |
| **Akkordeon-Sections** | Auf-/Zuklappen von Diagnostik, Therapie etc. |
| **Sticky Section Bar** | Aktueller Abschnitt bleibt sichtbar beim Scrollen |
| **Inhaltsverzeichnis** | Floating Action Button für schnellen Zugriff |
| **Druckfunktion** | Optimierte Druckansicht aller Abschnitte |
| **Dispositionsfeld** | Hausinterne Dispositionsrichtlinien im Ampelschema mit Direktkontakten |

### Offline-Fähigkeit

| Feature | Beschreibung |
|---------|--------------|
| **Offline-Banner** | Anzeige bei fehlender Netzverbindung |
| **Cache-Strategie** | Anwendung bleibt ohne Internet nutzbar |
| **Pull-to-Refresh** | Manuelles Aktualisieren der Inhalte |
| **Auto-Update** | Stiller Abgleich mit `version.json`, kein Update-Banner |

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

Weitere Abhängigkeiten bestehen nicht: Bootstrap wurde entfernt (ungenutzt), alle SOP-Skripte und `app.js` werden mit `defer` geladen und blockieren das Rendern nicht.

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

Die Anwendung nutzt **immer automatisch den aktuellen Stand vom Server** &ndash; ohne Hinweisbanner und ohne Zutun der Nutzer:

1. **Version-Check:** Beim Laden wird [`version.json`](version.json) mit Cache-Busting vom Server abgerufen
2. **Vergleich:** Die Server-Version wird mit der geladenen `APP_VERSION` verglichen
3. **Stille Aktualisierung:** Bei Abweichung werden alle Caches verworfen und die Seite genau einmal automatisch neu geladen
4. **Schleifenschutz:** Ein Marker im `sessionStorage` sorgt dafür, dass pro Version höchstens ein Reload erfolgt

Zusätzlich werden Service Worker beim Start abgemeldet und alle Cache-Storage-Einträge gelöscht ([`index.html`](index.html)); `Cache-Control`-Meta-Tags verhindern das Ausliefern veralteter HTML-Dateien.

### Implementierung

```javascript
function checkForUpdate() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'version.json?_=' + new Date().getTime(), true);
    xhr.setRequestHeader('Cache-Control', 'no-cache');
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4 || xhr.status !== 200) return;
        var serverVersion = JSON.parse(xhr.responseText).version || APP_VERSION;
        if (serverVersion === APP_VERSION) {
            localStorage.setItem('sop-app-version', serverVersion);
            return;
        }
        applyUpdate(serverVersion);   // Caches leeren + einmaliger Reload
    };
    xhr.send();
}
```

`applyUpdate()` löscht alle Cache-Storage-Einträge, merkt sich die Zielversion im `sessionStorage` und lädt die Seite mit dem Parameter `?v=<version>` neu. Ein Update-Banner existiert nicht mehr.

### Update durchführen

1. **Neue Version in `app.js` eintragen:**
   ```javascript
   var APP_VERSION = '2.7.1';
   ```

2. **`version.json` aktualisieren:**
   ```json
   {
       "version": "2.7.1",
       "lastUpdated": "2026-08-28T10:00:00Z",
       "changelog": "Beschreibung der Änderungen"
   }
   ```

3. **Dateien auf Server deployen** &ndash; offene Sitzungen aktualisieren sich beim nächsten Version-Check selbst.

---

## Dispositionsfeld & Telefonverzeichnis

### Dispositionsfeld (alle 73 SOPs)

Jede SOP enthält den Abschnitt **Disposition** mit den verbindlichen hausinternen Dispositionsrichtlinien der ZNA im Ampelschema:

| Stufe | Inhalt |
|-------|--------|
| 🟢 **GRÜN** | Ambulanter Verbleib: Entscheidung durch behandelnden Arzt ZNA, Pfad Hausarzt/MVZ, SOP-spezifische Entlasskriterien |
| 🟡 **GELB** | Stationäre Aufnahme: krankheitsbildspezifischer Regelpfad (Fachabteilung inkl. Telefonnummer) sowie ZNA-/A&B-Station mit Indikation und Bedingung |
| 🔴 **ROT** | Kritisch: passende Intensivbereiche (ITS-Koordinator, KAIM-/KAIS-IMC, ITS Pneumologie, ITO/Stroke Unit, HKL) |

Die Karten sind farbcodiert, auf Desktop dreispaltig, auf Mobilgeräten einspaltig und für den Druck optimiert. Jede Kontaktzeile zeigt Fachbereich, Durchwahl und einen Zusatzhinweis (z. B. abweichende Dienstzeiten). Am Ende jedes Dispositionsfeldes öffnet ein Button das vollständige Telefonverzeichnis.

### Telefonverzeichnis

Neben dem Dark-/Light-Mode-Umschalter (Sidebar und mobile Kopfzeile) öffnet der Button **Telefonverzeichnis** ein Modal mit allen internen und externen Nummern der ZNA:

- Notfall & externe Kontakte
- ITS & IMC (Disposition ROT)
- Chirurgische Fächer
- Konservative Fächer & Weitere
- Diagnostik & Funktionseinheiten
- Infrastruktur & ZNA-Organisation
- Sprechstunden des Ambulanzzentrums

Ein Suchfeld filtert live über Fachbereich, Nummer und Zusatzhinweis; `Esc` schließt das Modal. Gepflegt wird die Liste im Array `PHONE_DIR` in [`app.js`](app.js).

---

## Navigation, Bedienung & Barrierefreiheit

### Routing und Verlauf

Die Ansichten sind adressierbar und über den Verlauf navigierbar:

| Adresse | Ansicht |
|---------|---------|
| `#home` | Startseite |
| `#browse` | SOP-Übersicht |
| `#search` | Volltextsuche |
| `#sop/<id>` | Einzelne SOP |

Das Öffnen einer SOP erzeugt einen History-Eintrag (`pushState`), Ansichtswechsel ersetzen ihn (`replaceState`). `popstate` und `hashchange` werden ausgewertet – die Zurück-Taste des Browsers bzw. des Android-Geräts führt damit zurück in die App statt aus ihr heraus, und Deep Links funktionieren sowohl beim Laden als auch zur Laufzeit.

### Tastaturbedienung

| Taste | Funktion |
|-------|----------|
| `Strg/Cmd + K` | Spotlight-Suche öffnen |
| `Tab` / `Umschalt + Tab` | Fokus bewegen; in geöffneten Overlays wird der Fokus gehalten |
| `Enter` / `Leertaste` | Kategorie-Karte, Listeneintrag oder Abschnitt aktivieren |
| `Esc` | Spotlight, Inhalts-Sheet oder Telefonverzeichnis schließen |

Beim Schließen eines Overlays kehrt der Fokus auf das auslösende Element zurück. Ein Sprunglink („Zum Inhalt springen") ist die erste fokussierbare Stelle der Seite.

### Barrierefreiheit (WCAG 2.1 AA)

- **Automatisiert geprüft:** axe-core meldet auf Start-, Übersichts-, Such- und SOP-Ansicht sowie in allen Overlays (Spotlight, Inhalts-Sheet, Telefonverzeichnis) in hellem und dunklem Design **keine Verstöße** – inklusive der Best-Practice-Regeln.
- **Kontraste:** Sekundärtexte, Breadcrumbs, Kategorie-Badges und die Farbstufen des Dispositionsfeldes erfüllen mindestens 4,5:1; die Ampelfarben tragen zusätzlich Text („GRÜN/GELB/ROT"), Farbe ist nie alleiniger Informationsträger.
- **Semantik:** je Ansicht genau eine `<h1>`, Abschnittsköpfe als Ebene 2, `aria-expanded` an aufklappbaren Abschnitten, `aria-live` für Suchergebnisse, beschriftete Icon-Schaltflächen, dekorative Icons mit `aria-hidden`.
- **Bewegung:** `prefers-reduced-motion: reduce` deaktiviert Animationen und Übergänge.
- **Fokus:** einheitlicher, sichtbarer Fokusring (`:focus-visible`), der bei Mausklicks nicht stört.

### Responsives Verhalten

Geprüft bei 320, 390, 768, 1024 und 1440 px – ohne horizontales Überlaufen:

| Breite | Verhalten |
|--------|-----------|
| ≤ 360 px | Kompakte Kopfzeile, zweispaltiges Kartenraster mit reduzierten Abständen |
| ≤ 640 px | Kompakter Hero-Bereich, Bottom-Navigation, Inhalts-Sheet als Bottom-Sheet |
| ≥ 900 px | Sidebar-Navigation, Breadcrumbs, Inhalts-Button in der Kopfzeile |
| ≥ 1024 px | FAB entfällt (Inhalt liegt in der Kopfzeile) |
| ≥ 1280 px | Inhaltsbreite auf 1180 px begrenzt, Fließtext auf 92 Zeichen |
| ≥ 1600 px | Sechsspaltiges Kategorie-Raster |

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
- **Touch-Optimierung:** 44 px Mindestgröße für Touch-Targets auf Touchgeräten (`pointer: coarse`)
- **Swipe-Gesten:** Edge-Swipe für Zurück-Navigation
- **Zurück-Taste:** Hardware-/Browser-Zurück navigiert innerhalb der App (History-API)
- **Pull-to-Refresh:** Aktualisieren durch Herunterziehen
- **Zoom erlaubt:** Kein `user-scalable=no` – Pinch-to-Zoom bleibt möglich (WCAG 1.4.4)
- **Kompakte Kopfbereiche:** Startseite zeigt mehr Kategorien oberhalb der Falz; die Schriftgrößen-Steuerung liegt im Inhalts-Sheet

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
*Version: 2.5.0*

---

## Versionshistorie

| Version | Datum | Änderungen |
|---------|-------|------------|
| **v2.8.0** | Aug 2026 | **UI/UX- und Barrierefreiheits-Überarbeitung**: echte Verlaufsnavigation über die History-API (`pushState`/`popstate`/`hashchange`), Tastaturbedienung für Karten, Listen und Abschnitte, Fokusfalle und Fokusrückgabe in allen Overlays, Sprunglink, `aria`-Auszeichnung und Überschriftenstruktur, kontrastgeprüfte Farbtokens (axe-core: 0 Verstöße in beiden Designs), größere Touch-Ziele, kein `user-scalable=no`, kompaktere Startseite und SOP-Liste, Schriftgrößen-Steuerung im Inhalts-Sheet, Bootstrap entfernt, Skripte mit `defer`, `prefers-reduced-motion` |
| **v2.7.0** | Aug 2026 | Stilles Auto-Update ohne Hinweisbanner, Telefonverzeichnis-Modal, Verweis darauf im Dispositionsfeld |
| **v2.6.0** | Aug 2026 | Dispositionsfeld aller 73 SOPs auf die hausinternen Dispositionsrichtlinien (Ampelschema GRÜN/GELB/ROT) umgestellt |
| **v2.5.0** | Feb 2026 | **Touch-Optimierung für Segmented Control**: Tap vs. Scroll Unterscheidung durch Bewegungserkennung (10px Schwelle), Ghost Tap Prevention - keine unbeabsichtigten Aktionen mehr beim Scrollen, visuelles Feedback bei Touch mit `.tap-active` Klasse, 300ms Click-Delay entfernt durch `touch-action: manipulation`, Passive Event Listeners für optimale Scroll-Performance, iOS PWA standalone mode vollständig unterstützt |
| **v2.4.2** | Feb 2026 | **Segmented Control Titel-Verbesserung**: JavaScript-Kürzung entfernt, CSS-basierte Ellipsis, Responsive Button-Breiten (Desktop: 150px, Mobile: 100px), Tooltip zeigt immer vollständigen Titel bei Hover |
| **v2.4.1** | Feb 2026 | **Segmented Control Scroll-Pfeile**: Dezent eingeblendete Pfeile bei Overflow, Smooth Scroll-Animation (120px), Automatische Sichtbarkeit basierend auf Scroll-Position, Haptic Feedback bei Klick, Resize-Event-Handling |
| **v2.4.0** | Feb 2026 | **Segmented Control Optimierung (Phase 1)**: Intelligente Titel-Kürzung mit Wort-Erhaltung (12 Zeichen), Tooltips bei gekürzten Buttons, ARIA-Attribute für Barrierefreiheit, Tastaturnavigation (Pfeiltasten, Home/End, Enter/Space), Haptic Feedback (10ms Vibration), Fokus-Styles für Tastatur-Nutzer |
| **v2.3.2** | Feb 2026 | **Segmented Control Fix**: Begrenzung auf 5 Sections aufgehoben - alle Sections sind nun in der horizontalen Button-Leiste sichtbar und bei vielen Sections horizontal scrollbar |
| **v2.3.1** | Feb 2026 | Section Picker Fix: CSS Flexbox-Layout-Problem behoben - `.picker-list` mit `min-height: 0` für korrektes Overflow-Verhalten |
| **v2.3.0** | Feb 2026 | iOS PWA Safe-Area-Fix mit JavaScript-Laufzeiterkennung und iPhone Screen Height Lookup Table |
| **v2.2.4** | Feb 2026 | Robuste iOS PWA Bottom-Navbar Positionierung + "Stand: Datum/Uhrzeit" von Startseite entfernt |
| **v2.2.3** | Feb 2026 | Erste iOS PWA Bottom-Navbar Lösung (funktionierte nicht) |
| **v2.2.2** | Feb 2026 | Fix: Update-Benachrichtigung Endlosschleife verhindert |

---
