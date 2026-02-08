# SOP Notaufnahme — Klinische Standards

![Status](https://img.shields.io/badge/Status-Stable-success)
![Platform](https://img.shields.io/badge/Platform-PWA%20%7C%20Web-blue)
![Content](https://img.shields.io/badge/SOPs-73-orange)
![License](https://img.shields.io/badge/License-MIT-green)

Eine **Progressive Web App (PWA)** für die klinische Notfallmedizin. Diese Anwendung stellt 73 evidenzbasierte Standard Operating Procedures (SOPs) für die Notaufnahme bereit – offline verfügbar, blitzschnell durchsuchbar und für die mobile Nutzung optimiert.

---

## 📋 Inhaltsverzeichnis

1. [Über das Projekt](#-über-das-projekt)
2. [Funktionen & Highlights](#-funktionen--highlights)
3. [Medizinische Inhalte](#-medizinische-inhalte)
4. [Technischer Aufbau](#-technischer-aufbau)
5. [Installation & Nutzung](#-installation--nutzung)
6. [Projektstruktur](#-projektstruktur)
7. [Browser-Support](#-browser-support)
8. [Disclaimer](#-medizinischer-haftungsausschluss)

---

## 🏥 Über das Projekt

In der Notaufnahme zählt jede Sekunde. "SOP Notaufnahme" wurde entwickelt, um Ärzten und pflegerischem Personal schnellen Zugriff auf strukturierte Handlungsanweisungen zu geben.

Die Anwendung basiert auf ursprünglich 73 Markdown-Dateien, die in eine leistungsfähige Single-Page-Application (SPA) transformiert wurden. Der Fokus liegt auf maximaler Performanz, Offline-Verfügbarkeit (für Funklöcher in Kliniken) und einer klaren visuellen Hierarchie der medizinischen Informationen.

---

## ✨ Funktionen & Highlights

### 📱 User Interface & UX
*   **Mobile-First Design:** Optimiert für die Einhand-Bedienung auf Smartphones, skaliert jedoch nahtlos auf Tablets und Desktop-PCs.
*   **Dark Mode:** Automatische Erkennung der Systemeinstellung sowie manueller Umschalter (Augenschonend bei Nachtschichten).
*   **Intuitive Navigation:** Sidebar-Menü mit Kategorienfilter und visuellen Indikatoren für Fachbereiche.

### 🚀 Performance & Technik
*   **Offline-Ready (PWA):** Dank Service Worker (`sw.js`) ist die App nach dem ersten Laden vollständig ohne Internetverbindung nutzbar.
*   **Zero-Dependencies:** Geschrieben in reinem Vanilla JavaScript, HTML5 und CSS3 – keine Frameworks, keine Build-Tools, extrem geringer Speicherbedarf.
*   **Installierbar:** Kann über "Zum Startbildschirm hinzufügen" wie eine native App auf iOS und Android installiert werden.

### 🔍 Suche & Struktur
*   **Echtzeit-Suche:** Filtert SOPs über Titel und Volltextinhalte.
*   **Strukturierte Inhalte:** Jede SOP ist in logische Abschnitte unterteilt (Definition, Ursachen, Symptome, Diagnostik, Therapie, Merke, Disposition).
*   **Interaktive Elemente:** Abschnitte sind ein-/ausklappbar, um den Fokus auf relevante Informationen zu lenken.

---

## 📚 Medizinische Inhalte

Die Anwendung umfasst **73 SOPs**, die nach Leitsymptomen und Fachdisziplinen organisiert sind.

### Fachbereiche (Kategorien)
Die SOPs sind farblich kodiert und folgenden Kategorien zugeordnet:
*   ❤️ **Kardiologie** (z.B. ACS, Herzinsuffizienz, HRST)
*   🫁 **Pneumologie** (z.B. AECOPD, Pneumonie, LE)
*   🧠 **Neurologie** (z.B. Stroke, Status epilepticus, Kopfschmerz)
*   🍽️ **Gastroenterologie** (z.B. GI-Blutung, Pankreatitis)
*   🦠 **Infektiologie** (z.B. Sepsis, Meningitis)
*   🧪 **Metabolisch** (z.B. DKA, Elektrolytstörungen)
*   🩸 **Hämatologie** (z.B. TVT, Anämie)
*   ☠️ **Toxikologie** (z.B. Intoxikationen, Stromunfall)
*   🩺 **Leitsymptome** (z.B. Dyspnoe, Thoraxschmerz, Schock)
*   💧 **Nephrologie** (z.B. Nierenkolik, ANV)
*   ℹ️ **Sonstige**

### Enthaltene SOPs (Auszug)
Eine vollständige Liste aller 73 SOPs ist in der Anwendung über die Sidebar oder die Suche einsehbar. Beispiele:
*   *Reanimation (ALS)*
*   *Polytrauma-Management (implizit in Schock/Trauma SOPs)*
*   *Sepsis (Hour-1-Bundle)*
*   *Stroke Management*

---

## 🛠 Technischer Aufbau

Die Architektur folgt dem **Separation of Concerns** Prinzip, jedoch ohne Build-Step, um das Hosting so einfach wie möglich zu halten (einfaches Kopieren der Dateien reicht).

### Datenhaltung
Die Inhalte liegen nicht in einer Datenbank, sondern in statischen JavaScript-Dateien (`sop-data-*.js`). Dies ermöglicht:
1.  Extrem schnelle Ladezeiten (kein Backend-Call).
2.  Vollständige Offline-Speicherung im Browser-Cache.
3.  Einfache Versionierung über Git.

Das Datenformat ist ein Array von Objekten:
```javascript
{
  id: "sop-id",
  title: "Titel der SOP",
  category: "Fachbereich",
  catKey: "interner_key",
  sections: [
    { title: "Diagnostik", html: "<ul><li>Inhalt...</li></ul>" },
    // ...
  ]
}
```

### Caching Strategie (Service Worker)
Der Service Worker (`sw.js`) nutzt eine **Stale-While-Revalidate** Strategie:
1.  Inhalte werden sofort aus dem Cache geladen (maximale Geschwindigkeit).
2.  Im Hintergrund wird geprüft, ob eine neuere Version auf dem Server liegt.
3.  Bei Updates wird der Cache für den nächsten Start aktualisiert.

---

## 💻 Installation & Nutzung

### Hosting (Server)
Da es sich um eine statische Seite handelt, kann sie überall gehostet werden:
*   GitHub Pages
*   Netlify / Vercel
*   Apache / Nginx
*   Lokaler Webserver (z.B. Python SimpleHTTPServer)

### Lokale Entwicklung
1.  Repository klonen.
2.  Ordner auf einem lokalen Webserver öffnen (Service Worker benötigen `localhost` oder `https`, sie funktionieren nicht über das `file://` Protokoll).
    *   Beispiel mit Python: `python3 -m http.server 8000`
    *   Beispiel mit VS Code: "Live Server" Extension nutzen.
3.  Browser öffnen: `http://localhost:8000`

### Installation auf dem Endgerät
*   **iOS (Safari):** Teilen-Button → "Zum Home-Bildschirm".
*   **Android (Chrome):** Menü → "App installieren".
*   **Desktop (Chrome/Edge):** Symbol in der Adressleiste → "Installieren".

---

## 📂 Projektstruktur

```text
SOP/
├── index.html          # Haupt-Einstiegspunkt, Layout-Gerüst
├── styles.css          # Alle Styles, CSS-Variablen, Responsive Design
├── app.js              # Kernlogik: Routing, Suche, DOM-Manipulation
├── sw.js               # Service Worker für Offline-Funktionalität
├── sop-data-1.js       # SOP Daten (A - Akute N)
├── sop-data-2.js       # SOP Daten (Akute P - Hypertensiver)
├── sop-data-3.js       # SOP Daten (Hypo - Sepsis)
└── sop-data-4.js       # SOP Daten (Spontan - Z)
```

---

## 🌐 Browser-Support

Die Anwendung nutzt moderne Web-Standards (ES6, CSS Grid/Flexbox, CSS Variables).

| Browser | Support |
| :--- | :--- |
| Chrome / Edge | ✅ Vollständig (inkl. PWA) |
| Safari (iOS/macOS) | ✅ Vollständig (inkl. PWA) |
| Firefox | ✅ Vollständig (PWA eingeschränkt unter iOS) |
| Internet Explorer | ❌ Nicht unterstützt |

---

## ⚖️ Medizinischer Haftungsausschluss

**WICHTIG:**
Diese Anwendung dient ausschließlich als **Nachschlagewerk und Gedächtnisstütze** für medizinisches Fachpersonal.

1.  **Keine Diagnose:** Die Inhalte ersetzen keine professionelle ärztliche Diagnose, Beratung oder Behandlung.
2.  **Aktualität:** Trotz sorgfältiger Prüfung können sich Leitlinien und Dosierungsempfehlungen ändern. Der Nutzer ist verpflichtet, Dosierungen (insbesondere bei Medikamenten) eigenverantwortlich anhand der aktuellen Fachinformationen zu überprüfen.
3.  **Haftung:** Die Entwickler übernehmen keine Haftung für Schäden, die aus der Nutzung der bereitgestellten Informationen entstehen.

---
