# SOP Notaufnahme — Klinische Pfade & Standards

![Status](https://img.shields.io/badge/Status-Stable-success)
![Platform](https://img.shields.io/badge/Platform-PWA%20%7C%20Web-blue)
![Tech](https://img.shields.io/badge/Tech-Vanilla%20JS%20%7C%20No%20Build-yellow)
![License](https://img.shields.io/badge/License-MIT-green)

Eine **Progressive Web App (PWA)** für die klinische Notfallmedizin.
Diese Anwendung stellt über **70 evidenzbasierte Standard Operating Procedures (SOPs)** für die Notaufnahme bereit. Sie ist für den **Offline-Einsatz** in Kliniken optimiert, bietet eine **Volltextsuche** und passt sich nahtlos an mobile Endgeräte sowie Desktop-Monitore an.

---

## 📋 Inhaltsverzeichnis

1.  [Funktionen & Highlights](#-funktionen--highlights)
2.  [Medizinische Fachbereiche](#-medizinische-fachbereiche)
3.  [Technischer Aufbau & Architektur](#-technischer-aufbau--architektur)
4.  [Installation & Nutzung](#-installation--nutzung)
5.  [Projektstruktur](#-projektstruktur)
6.  [Browser-Kompatibilität](#-browser-kompatibilität)
7.  [Haftungsausschluss](#-haftungsausschluss)

---

## ✨ Funktionen & Highlights

### 🚀 Performance & Offline-Fähigkeit
* **Offline-First:** Dank des Service Workers (`sw.js`) ist die gesamte Anwendung nach dem ersten Laden **vollständig ohne Internetverbindung** nutzbar – ideal für Bereiche mit schlechter Netzabdeckung.
* **Keine Ladezeiten:** Inhalte liegen lokal im Cache; Navigation zwischen SOPs erfolgt verzögerungsfrei.
* **Installierbar:** Kann als **PWA** auf iOS (via "Zum Home-Bildschirm") und Android installiert werden und verhält sich wie eine native App.

### 📱 User Interface (UI) & UX
* **Responsive Design:** "Mobile-First"-Ansatz, der sich automatisch an Smartphones, Tablets und Desktops anpasst.
* **Dark Mode:** Integrierter Dunkelmodus (automatisch per Systemeinstellung oder manuell umschaltbar) für augenschonendes Arbeiten in Nachtdiensten.
* **Intuitive Navigation:**
    * **Sidebar** (Desktop) / **Bottom-Nav** (Mobile) für schnellen Zugriff.
    * **Kategorie-Filter:** Farbcodierte "Pills" zum schnellen Filtern nach Fachrichtung.
    * **Inhaltsverzeichnis:** Automatisch generiertes "Table of Contents" für jede SOP zum schnellen Springen zu Abschnitten (Diagnostik, Therapie, etc.).

### 🔍 Mächtige Suche
* **Echtzeit-Filterung:** Ergebnisse erscheinen sofort während der Eingabe.
* **Tiefensuche:** Durchsucht nicht nur Titel, sondern den **kompletten Inhalt** aller SOPs.
* **Highlighting:** Suchbegriffe werden im Text farblich hervorgehoben.

### 🖨️ Druck-Optimierung
* Spezielles **Print-Stylesheet** entfernt störende UI-Elemente (Navigation, Buttons) und formatiert die SOP für den sauberen Papierausdruck (DIN A4).

---

## 📚 Medizinische Fachbereiche

Die SOPs sind in logische Kategorien unterteilt, die farblich und durch Icons (FontAwesome) kodiert sind:

* ❤️ **Kardiologie** (`kardio`): z.B. ACS, Herzinsuffizienz, Tachykarde/Bradykarde HRST, Lungenembolie.
* 🫁 **Pneumologie** (`pulmo`): z.B. COPD-Exazerbation, Pneumonie, Asthma, Pleuraerguss.
* 🧠 **Neurologie** (`neuro`): z.B. Status epilepticus, Delir, Zerebrale Blutungen.
* 🍽️ **Gastroenterologie** (`gi`): z.B. GI-Blutung, Pankreatitis, Mesenterialischämie, Leberversagen.
* 🦠 **Infektiologie** (`infekt`): z.B. Sepsis, Meningitis, Fieber in Neutropenie.
* 🧪 **Metabolisch** (`metab`): z.B. Diabetische Ketoazidose (DKA), Hyper-/Hyponatriämie, Hyper-/Hypokaliämie.
* 🩸 **Hämatologie** (`haem`): z.B. Thrombozytopenie, Tiefe Venenthrombose (TVT), Anämie.
* ☠️ **Toxikologie** (`tox`): z.B. Intoxikationen (Alkohol, Medikamente), Stromunfall.
* 💧 **Nephrologie** (`nephro`): z.B. Akute Nierenschädigung (AKI), Nierenkolik.
* 🩺 **Leitsymptome** (`leit`): z.B. Dyspnoe, Thoraxschmerz, Schock, Synkope, Kopfschmerzen.
* ℹ️ **Sonstige** (`sonst`): z.B. Palliativmedizin, Anaphylaxie.

---

## 🛠 Technischer Aufbau & Architektur

Das Projekt folgt dem **KISS-Prinzip** (Keep It Simple, Stupid) und verzichtet bewusst auf komplexe Frameworks oder Build-Tools.

### Technologie-Stack
* **HTML5:** Semantische Struktur.
* **CSS3:** Nutzung von **CSS Custom Properties (Variables)** für Theming (Light/Dark Mode) und konsistentes Design. Responsive Layouts mittels **Flexbox** und **Grid**.
* **JavaScript (Vanilla ES6):** Keine Frameworks (kein React/Vue/Angular).
    * `app.js`: Enthält die gesamte Business-Logik (Routing, Rendering, Suche, State Management).
    * `sw.js`: Service Worker für Caching und Offline-Funktionalität.

### Datenstruktur
Die medizinischen Inhalte sind **nicht** in einer Datenbank gespeichert, sondern liegen als statische JavaScript-Dateien im Ordner `sops/`.
Jede SOP wird über `window.SOP_DATA.push({...})` in ein globales Array geladen. Dies ermöglicht:
1.  Einfache Wartung und Versionierung via Git.
2.  Kein Backend-Server notwendig.
3.  Maximale Performance.

**Beispiel-Datenstruktur einer SOP:**
```javascript
{
    id: "akute-herzinsuffizienz",
    title: "Akute Herzinsuffizienz",
    category: "Kardiologie",
    catKey: "kardio",
    sections: [
        { title: "Definition", html: "<ul>...</ul>" },
        { title: "Diagnostik", html: "..." },
        { title: "Therapie", html: "..." }
    ],
    stand: "12/24",
    sources: "Literaturangaben..."
}

```

---

## 💻 Installation & Nutzung

### 1. Online Hosting (Empfohlen)

Laden Sie den gesamten Ordner auf einen beliebigen statischen Webserver hoch (z.B. GitHub Pages, Vercel, Netlify oder Klinik-Intranet).

* **Voraussetzung:** Der Server muss **HTTPS** unterstützen (oder `localhost` sein), damit der Service Worker funktioniert.

### 2. Lokale Entwicklung / Testen

Da moderne Browser Sicherheitsrichtlinien (CORS) für lokale Dateien (`file://`) durchsetzen und Service Worker eine sichere Umgebung benötigen, können Sie die `index.html` nicht einfach per Doppelklick öffnen.

**Option A: Python (vorinstalliert auf macOS/Linux)**
Öffnen Sie das Terminal im Projektordner und starten Sie einen einfachen HTTP-Server:

```bash
python3 -m http.server 8000

```

Öffnen Sie dann `http://localhost:8000` im Browser.

**Option B: VS Code Live Server**
Installieren Sie die Erweiterung "Live Server" in Visual Studio Code und klicken Sie unten rechts auf "Go Live".

### 3. Updates einspielen

Um neue Inhalte zu veröffentlichen:

1. Änderungen an den Dateien vornehmen.
2. In der `sw.js` die Konstante `CACHE_NAME` aktualisieren (z.B. von `v1` auf `v2`).
3. Dateien auf den Server laden. Die Browser der Nutzer aktualisieren den Cache beim nächsten Besuch automatisch.

---

## 📂 Projektstruktur

```text
SOP/
├── sops/                       # Ordner mit medizinischen Inhalten
│   ├── abdominelle-schmerzen.js
│   ├── aecopd.js
│   ├── akute-herzinsuffizienz.js
│   └── ... (weitere .js Dateien)
├── app.js                      # Hauptanwendungslogik (Router, UI, Suche)
├── styles.css                  # Zentrales Stylesheet (Theming, Layout)
├── index.html                  # Haupteinstiegspunkt (lädt alle Skripte)
├── sw.js                       # Service Worker (Offline-Cache Konfiguration)
├── Basislogo_farbig.png        # Anwendungs-Icon/Logo
└── README.md                   # Projektdokumentation

```

---

## 🌐 Browser-Kompatibilität

| Browser | Unterstützung | Anmerkung |
| --- | --- | --- |
| **Google Chrome** | ✅ Vollständig | Beste PWA-Unterstützung (Android/Desktop) |
| **Safari (iOS)** | ✅ Vollständig | PWA-Installation über "Teilen"-Menü |
| **Microsoft Edge** | ✅ Vollständig | Basiert auf Chromium |
| **Firefox** | ✅ Gut | PWA-Installation auf Desktop eingeschränkt |
| **Internet Explorer** | ❌ Nein | Nutzung von ES6 und CSS-Variablen nicht unterstützt |

---

## ⚖️ Haftungsausschluss

**Nur für medizinisches Fachpersonal.**

Die Inhalte dieser Anwendung wurden mit größter Sorgfalt erstellt und basieren auf aktuellen Leitlinien (Stand siehe jeweilige SOP). Dennoch übernehmen die Autoren und Entwickler **keine Gewähr** für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Informationen.

1. **Keine Diagnose:** Diese App dient als Gedächtnisstütze und ersetzt keine klinische Einschätzung.
2. **Dosierungen:** Medikamentendosierungen sind vom Anwender eigenverantwortlich anhand der Fachinformationen zu überprüfen.
3. **Haftung:** Haftungsansprüche gegen die Autoren, die sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung der dargebotenen Informationen verursacht wurden, sind grundsätzlich ausgeschlossen.
