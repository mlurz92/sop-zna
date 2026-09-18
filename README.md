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
| **Spotlight-Suche** | Schnellsuche mit Tastenkürzel `Strg/Cmd + K` oder `/`; Auswahl mit den Pfeiltasten, Öffnen mit `Enter` |
| **Volltextsuche** | Durchsucht alle SOP-Inhalte mit Snippet-Vorschau, Trefferanzahl und Angabe des Abschnitts; aus der Schnellsuche direkt erreichbar |
| **Deep Linking** | Direkte Links zu einzelnen SOPs via URL-Hash |
| **Verlaufsnavigation** | Zurück-Taste von Browser und Android navigiert in der App |

### Benutzeroberfläche

| Feature | Beschreibung |
|---------|--------------|
| **Responsive Design** | Optimiert für Desktop, Tablet und Smartphone |
| **Dark/Light Mode** | Automatische Systemerkennung + manueller Toggle |
| **Schriftgröße** | Einstellbar (13–20px) für bessere Lesbarkeit |
| **Touch-Gesten** | Wischen zum Zurückgehen – die Ansicht folgt dem Finger und wird bei Abbruch zurückgefedert |
| **Bewegung** | Alle Wechsel laufen als Transform-/Opacity-Animation auf dem Compositor (60 fps und mehr) |
| **Barrierefreiheit** | WCAG 2.1 AA: Tastaturbedienung, Fokusführung, geprüfte Kontraste |
| **Telefonverzeichnis** | Modal mit allen ZNA-Rufnummern inkl. Live-Suche; ein Tipp auf die Zeile legt die Nummer in die Zwischenablage |

### SOP-Darstellung

| Feature | Beschreibung |
|---------|--------------|
| **Kapitelleiste** | Schnellnavigation zwischen den Abschnitten einer SOP, inklusive Quellen |
| **Akkordeon-Sections** | Auf-/Zuklappen von Diagnostik, Therapie etc. mit animierter Höhe |
| **Gleitende Markierung** | Die getroffene Auswahl wird von einer mitlaufenden Pille hinterlegt – sie erscheint erst, wenn wirklich eine Auswahl besteht |
| **Kapitelleiste bleibt oben** | Die Abschnittsleiste heftet sich beim Scrollen an den oberen Rand und bleibt bedienbar; das gerade sichtbare Kapitel wird darin markiert |
| **Inhaltsverzeichnis** | Floating Action Button für schnellen Zugriff |
| **Druckfunktion** | Optimierte Druckansicht aller Abschnitte |
| **Dispositionsfeld** | Hausinterne Dispositionsrichtlinien im Ampelschema mit Direktkontakten |

### Netzverhalten und Aktualisierung

| Feature | Beschreibung |
|---------|--------------|
| **Offline-Banner** | Anzeige, sobald die Netzverbindung wegbricht |
| **Keine externen Abhängigkeiten** | Schrift und Symbole liegen im Projekt – die Anwendung bleibt vollständig dargestellt, auch wenn ein CDN nicht erreichbar ist |
| **Pull-to-Refresh** | Manuelles Aktualisieren der Inhalte |
| **Auto-Update** | Stiller Abgleich mit `version.json`, kein Update-Banner |

> **Zur Offline-Nutzung:** Eine bereits geöffnete Sitzung läuft ohne Netz vollständig weiter – alle 73 SOPs sind im Speicher, und seit Version 2.10 stammen auch Schrift und Symbole aus dem Projekt. Ein **Neuladen** ohne Netzverbindung funktioniert dagegen nicht: Die Anwendung meldet beim Start bewusst alle Service Worker ab und löscht sämtliche Caches ([`index.html`](index.html)), damit im Klinikbetrieb niemals ein veralteter Behandlungspfad ausgeliefert wird. Aktualität hat hier Vorrang vor Offline-Start.

---

## Technologie-Stack

### Frontend

| Technologie | Version/Einsatz |
|-------------|-----------------|
| **JavaScript** | ES5-kompatibel (keine Frameworks) |
| **CSS** | Custom Properties, Flexbox, Grid |
| **HTML5** | Semantische Struktur |

### Mitgelieferte Ressourcen

| Ressource | Ablage | Lizenz |
|-----------|--------|--------|
| **Font Awesome Free 6.5.1** (nur `fa-solid`) | [`vendor/fontawesome/`](vendor/fontawesome/) | CC BY 4.0 (Icons), SIL OFL 1.1 (Schrift), MIT (Code) |
| **Inter** (variabel, 300–800, latin + latin-ext) | [`vendor/inter/`](vendor/inter/) | SIL OFL 1.1 |

Zur Laufzeit werden **keine** externen Adressen angefragt. Zuvor kamen Schrift und Symbole von `cdnjs.cloudflare.com` und `fonts.googleapis.com`; war eines davon nicht erreichbar, verlor die Anwendung sämtliche Symbole und ihre Typografie – im Klinikbetrieb ein reales Ausfallrisiko. Außerdem verlässt so kein Aufruf mehr das Haus.

Mitgeliefert wird bewusst nur der Solid-Stil von Font Awesome, weil ausschließlich dieser verwendet wird. Wer Symbole aus `fa-regular` oder `fa-brands` einsetzen möchte, muss die zugehörige `.woff2` und den `@font-face`-Block in [`vendor/fontawesome/all.min.css`](vendor/fontawesome/all.min.css) ergänzen.

Weitere Abhängigkeiten bestehen nicht: Bootstrap wurde entfernt (ungenutzt), alle SOP-Skripte und die zehn Anwendungsmodule werden mit `defer` geladen und blockieren das Rendern nicht.

### Architektur-Prinzipien

- **Single-Page Application (SPA)** ohne Framework-Abhängigkeiten
- **Modulare SOP-Dateien** – jede SOP ist eine separate `.js`-Datei
- **Zehn Anwendungsmodule** in [`js/`](js/) statt einer einzelnen Datei; jedes Modul ist eine IIFE, die ihre öffentlichen Funktionen an den gemeinsamen Namensraum `window.SOPApp` hängt
- **CSS Custom Properties** für konsistentes Theming

Die Reihenfolge der Module ist die Ladereihenfolge in [`index.html`](index.html) – jedes Modul darf nur Zustand aus bereits geladenen Modulen zum Ladezeitpunkt lesen; Funktionsaufrufe laufen zur Laufzeit stets über `App.<name>()` und sind damit von der Reihenfolge unabhängig.

| Modul | Inhalt |
|-------|--------|
| [`js/core.js`](js/core.js) | Version, Kategorien, Zustand `S`, DOM-Puffer `E`, Text- und Datenhilfen, Kurzhinweis |
| [`js/motion.js`](js/motion.js) | Bewegungsdauern, `requestAnimationFrame`-Helfer, weiches Scrollen, gestaffelter Auftritt, Tipp-Feedback |
| [`js/platform.js`](js/platform.js) | Theme, Schriftgröße, Safe-Area, Offline-Anzeige, stiller Versionswechsel |
| [`js/router.js`](js/router.js) | Adresse, Verlauf, Öffnen und Zurück |
| [`js/views.js`](js/views.js) | Ansichtswechsel, Tab-Steuerung, Kopfzeile, Breadcrumb, Scroll-Reaktionen |
| [`js/lists.js`](js/lists.js) | Seitenleiste, Startseite, Übersicht, Volltextsuche |
| [`js/segmented.js`](js/segmented.js) | Angeheftete Kapitelleiste inkl. Markierung, Pfeilen und Tastaturbedienung |
| [`js/sop.js`](js/sop.js) | Aufbau einer SOP, Akkordeon, Abschnittspositionen, Scroll-Spy, Drucken |
| [`js/overlays.js`](js/overlays.js) | Fokusverwaltung, Schnellsuche, Inhaltsverzeichnis, Telefonverzeichnis |
| [`js/main.js`](js/main.js) | Gesten, Ereignisbindung, Start |

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
2. **Vergleich:** Die Server-Version wird mit der geladenen `App.VERSION` aus [`js/core.js`](js/core.js) verglichen
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
        var serverVersion = JSON.parse(xhr.responseText).version || App.VERSION;
        if (serverVersion === App.VERSION) {
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

1. **Neue Version in [`js/core.js`](js/core.js) eintragen:**
   ```javascript
   App.VERSION = '3.0.1';
   ```

2. **`version.json` aktualisieren:**
   ```json
   {
       "version": "3.0.1",
       "lastUpdated": "2026-09-18T12:00:00Z",
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

Ein Suchfeld filtert live über Fachbereich, Nummer und Zusatzhinweis; `Esc` schließt das Modal. Ein Tipp auf eine Zeile legt die Nummer in die Zwischenablage und bestätigt das mit einem Kurzhinweis – im Klinikbetrieb wird meist am Stationstelefon gewählt, `tel:`-Links helfen dort nicht weiter. Gepflegt wird die Liste im Array `PHONE_DIR` in [`js/overlays.js`](js/overlays.js).

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

Der Browser-Verlauf ist die **einzige** Quelle der Navigationstiefe; einen zweiten Stapel in der Anwendung gibt es nicht mehr. Das Öffnen einer SOP erzeugt einen Eintrag (`pushState`), Tabwechsel ersetzen ihn (`replaceState`). Die Zurück-Schaltfläche der App ruft `history.back()` auf – Zurückgehen legt damit keinen neuen Eintrag an.

Jeder Eintrag trägt einen laufenden Index. Beim `popstate`-Ereignis zeigt der Vergleich mit dem aktuellen Index die Richtung an, sodass vorwärts und rückwärts unterschiedlich animiert werden. Die Zurück-Taste des Browsers bzw. des Android-Geräts führt damit zurück in die App statt aus ihr heraus, und Deep Links funktionieren sowohl beim Laden als auch zur Laufzeit. Wird die Anwendung direkt über einen Deep Link geöffnet, gibt es keinen eigenen Eintrag – dann führt die Zurück-Schaltfläche in die Übersicht und von dort zur Startseite.

### Tastaturbedienung

| Taste | Funktion |
|-------|----------|
| `Strg/Cmd + K` oder `/` | Schnellsuche öffnen |
| `↑` / `↓` | In den Ergebnissen der Schnellsuche wählen |
| `Enter` | Gewähltes Ergebnis öffnen |
| `Tab` / `Umschalt + Tab` | Fokus bewegen; in geöffneten Overlays wird der Fokus gehalten – maßgeblich ist das zuletzt geöffnete |
| `Enter` / `Leertaste` | Kategorie-Karte, Listeneintrag oder Abschnitt aktivieren |
| `←` / `→` / `Pos1` / `Ende` | In der Kapitelleiste einer SOP bewegen |
| `Rücktaste` | Eine Ebene zurück (außerhalb von Eingabefeldern) |
| `Esc` | Oberstes Overlay schließen |

Beim Schließen eines Overlays kehrt der Fokus auf das auslösende Element zurück. Ein Sprunglink („Zum Inhalt springen") ist die erste fokussierbare Stelle der Seite.

### Barrierefreiheit (WCAG 2.1 AA)

- **Automatisiert geprüft:** axe-core meldet auf Start-, Übersichts-, Such- und SOP-Ansicht sowie in allen Overlays (Spotlight, Inhalts-Sheet, Telefonverzeichnis) in hellem und dunklem Design **keine Verstöße** – inklusive der Best-Practice-Regeln.
- **Kontraste:** Sekundärtexte, Breadcrumbs, Kategorie-Badges und die Farbstufen des Dispositionsfeldes erfüllen mindestens 4,5:1; die Ampelfarben tragen zusätzlich Text („GRÜN/GELB/ROT"), Farbe ist nie alleiniger Informationsträger.
- **Semantik:** je Ansicht genau eine `<h1>`, Abschnittsköpfe als `<h2>` mit enthaltener Schaltfläche (Standardmuster für Akkordeons), `aria-expanded` und `aria-controls` an aufklappbaren Abschnitten, `aria-live` für Suchergebnisse, beschriftete Icon-Schaltflächen, dekorative Icons mit `aria-hidden`.
- **Echte Bedienelemente:** Karten, Listeneinträge, Filterchips und Abschnittsköpfe sind `<button>`-Elemente statt `div` mit `role="button"` – Tastaturbedienung, Fokus und Hilfstechnologien funktionieren damit ohne Zusatzlogik. Die Kapitelleiste ist eine Werkzeugleiste (`role="toolbar"`, `aria-pressed`), kein Registerkartensatz: die Abschnitte bleiben untereinander lesbar.
- **Bewegung:** `prefers-reduced-motion: reduce` deaktiviert Animationen und Übergänge – in CSS wie in JavaScript (siehe Abschnitt „Darstellung & Bewegung“).
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

## Darstellung & Bewegung

Die Oberfläche ist so gebaut, dass jede sichtbare Zustandsänderung eine eigene Bewegung hat und diese Bewegung durchgängig flüssig bleibt.

### Grundregel

Animiert werden ausschließlich `transform`, `opacity` und `clip-path`. Diese Eigenschaften verarbeitet der Browser auf dem Compositor, ohne Layout oder Neuzeichnen – dadurch laufen die Übergänge auch auf älteren Mobilgeräten mit voller Bildrate. Alle Dauern sind als Custom Properties zentral hinterlegt (`--dur-view`, `--dur-view-fast`, `--dur-section`, `--dur-micro`).

### Übergänge im Überblick

| Aktion | Bewegung | Dauer |
|--------|----------|-------|
| SOP öffnen (Push) | Neue Ansicht fährt von rechts ein, alte zieht gedämpft nach links ab | 360 ms |
| Zurück (Pop) | Umgekehrte Richtung | 360 ms |
| Tabwechsel | Richtung folgt der Reihenfolge Start → SOPs → Suche | 360 ms |
| SOP → SOP | Kurzer seitlicher Austausch innerhalb derselben Ansicht | 360 ms |
| Abschnitt auf-/zuklappen | Animierte Höhe plus Einblendung, danach wird die Höhe wieder freigegeben | 320 ms |
| Kapitelleiste heftet an | Beim Erreichen des oberen Randes setzt sich die Leiste mit einer weichen Kante ab | 280 ms |
| Abschnittswahl | Gleitende Pille wandert auf die aktive Schaltfläche | 380 ms |
| Listen und Kacheln | Gestaffelter Auftritt, Verzögerung bei 14 Elementen gedeckelt | 420 ms |
| Overlays | Bottom-Sheet, Spotlight und Telefonverzeichnis fahren ein statt zu erscheinen | 260–420 ms |
| Theme-Wechsel | Kreisförmige Blende vom auslösenden Knopf (View Transition API, mit Rückfallebene) | 480 ms |
| Tipp-Feedback | Ripple am Berührungspunkt, Karten senken sich kurz ab | 180–560 ms |

### Angeheftete Kapitelleiste

In der SOP-Ansicht bleibt die Leiste mit den Kapiteln beim Scrollen am oberen Rand stehen (`position: sticky`) und ist dort jederzeit bedienbar. Sie wird **nicht** durch eine andere Leiste ersetzt.

- Beim Anheften setzt sich die Leiste mit einer dezenten Kante vom Inhalt ab (`.is-stuck`).
- Das Kapitel, das gerade unter der Leiste steht, wird darin mit einem Strich markiert (`.is-current`). Diese Markierung ist bewusst von der Auswahl (`.active`, hinterlegte Pille) unterschieden: die eine zeigt die Scrollposition, die andere die getroffene Wahl.
- Liegt das markierte Kapitel außerhalb des sichtbaren Ausschnitts, scrollt die Leiste es waagerecht heran – nur beim Wechsel, damit sie nicht unter dem Finger wegwandert.
- Sprungziele (Kapitelwahl, Inhaltsverzeichnis) landen unterhalb der Leiste; ihre Höhe wird vom Zielpunkt abgezogen.
- Das Inhaltsverzeichnis im Bottom-Sheet markiert denselben Abschnitt – beide werden aus einer Quelle gespeist.

### Gesten

- **Wischen zum Zurückgehen:** Die Geste startet am linken Rand, die Richtung wird einmalig festgelegt. Senkrechtes Scrollen am linken Rand bleibt dadurch möglich. Die Ansicht folgt dem Finger mit Widerstand am Ende der Strecke; über Strecke *oder* Geschwindigkeit entscheidet sich, ob zurückgegangen oder zurückgefedert wird.
- **Bottom-Sheet:** Das Inhaltsverzeichnis wird über `translate3d` gezogen; über Zugstrecke oder Wischgeschwindigkeit schließt es.
- **Pull-to-Refresh:** Gummiband-Charakteristik, das Symbol dreht sich proportional zur Zugstrecke.

### Bildrate und Scrollverhalten

- Scroll-Reaktionen (eingeblendeter FAB, Abschnittsleiste) laufen in **einem** `requestAnimationFrame`-getakteten Handler statt in mehreren gedrosselten Listenern.
- Die Positionen der SOP-Abschnitte sowie Höhe und Ruheposition der Kapitelleiste werden gepuffert und nur bei echten Änderungen neu vermessen – das Scrollen erzwingt damit kein Layout mehr pro Frame.
- Der Volltext jedes Abschnitts wird einmalig aus dem HTML gelöst und gepuffert; die Suche entprellt Eingaben. Zuvor wurde bei **jedem Tastendruck** der HTML-Inhalt aller 73 SOPs neu geparst.
- Weiches Scrollen läuft über eine eigene `requestAnimationFrame`-Schleife mit einheitlicher Kurve, statt über das global gesetzte `scroll-behavior: smooth` (das zuvor auch jeden Positions-Reset animierte).
- Auf Zeigegeräten reserviert `scrollbar-gutter: stable` den Platz des Scrollbalkens, sodass beim Ansichtswechsel keine Breite springt.

### Bewegungsreduktion

`prefers-reduced-motion: reduce` wird an einer einzigen Stelle ausgewertet und wirkt auf CSS **und** JavaScript: Dauern fallen auf 1 ms, Ansichten wechseln ohne Übergang, Ripple und Schwebeeffekte entfallen, das Akkordeon schaltet direkt um.

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
   
   Script-Tag vor den Anwendungsmodulen hinzufügen:
   ```html
   <script defer src="sops/neue-sop.js"></script>
   <!-- ... danach erst js/core.js bis js/main.js -->
   ```

4. **Kategorie prüfen:**
   
   Sicherstellen, dass die Kategorie in `CATS` in [`js/core.js`](js/core.js) definiert ist:
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

In [`js/core.js`](js/core.js) zwei Objekte erweitern:

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
├── js/                     # Anwendungslogik in zehn Modulen
│   ├── core.js                 # Konfiguration, Zustand, DOM-Puffer, Hilfsfunktionen
│   ├── motion.js               # Bewegungssteuerung
│   ├── platform.js             # Theme, Schrift, Safe-Area, Offline, Versionswechsel
│   ├── router.js               # Adresse, Verlauf, Öffnen und Zurück
│   ├── views.js                # Ansichtswechsel, Tabs, Kopfzeile, Breadcrumb
│   ├── lists.js                # Seitenleiste, Startseite, Übersicht, Volltextsuche
│   ├── segmented.js            # Angeheftete Kapitelleiste
│   ├── sop.js                  # SOP-Ansicht, Akkordeon, Scroll-Spy, Drucken
│   ├── overlays.js             # Schnellsuche, Inhaltsverzeichnis, Telefonverzeichnis
│   └── main.js                 # Gesten, Ereignisbindung, Start
├── styles.css              # Vollständiges Stylesheet (~4700 Zeilen)
├── version.json            # Versionsdatei für Update-Check
├── AGENTS.md               # Technische Dokumentation für KI-Agenten
├── README.md               # Diese Datei
├── img/
│   ├── Basislogo_farbig.png    # Logo für Hero-Section
│   ├── Patientenpfade.png      # App-Icon
│   └── ZNA/
│       └── *.png               # SOP-spezifische Abbildungen
├── vendor/                 # Schrift und Symbole (keine CDN-Abhängigkeit)
│   ├── fontawesome/            # all.min.css + fa-solid-900.woff2
│   └── inter/                  # inter.css + latin/latin-ext woff2
└── sops/
    └── *.js                # 73 einzelne SOP-Module
```

### Wichtige Dateien

| Datei | Zweck |
|-------|-------|
| [`index.html`](index.html) | DOM-Struktur, Script-Einbindung |
| [`js/`](js/) | Anwendungslogik: Zustand, Rendering, Navigation, Overlays (zehn Module, siehe „Architektur-Prinzipien") |
| [`styles.css`](styles.css) | Theming, Layout, Animationen |
| [`version.json`](version.json) | Update-Erkennung |
| [`AGENTS.md`](AGENTS.md) | Detaillierte Architektur-Dokumentation |

### Debugging

- **Namensraum:** `window.SOPApp` bündelt alle Module
- **Zustand:** `SOPApp.S` für State-Inspektion
- **DOM-Puffer:** `SOPApp.E` für Element-Referenzen
- **SOP-Daten:** `SOP_DATA` Array im globalen Scope, normalisiert in `SOPApp.S.data`
- **Nachladen:** `window.registerSOP({...})` fügt eine SOP zur Laufzeit hinzu

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

*Letzte Aktualisierung: September 2026*  
*Version: 3.0.0*

---

## Versionshistorie

| Version | Datum | Änderungen |
|---------|-------|------------|
| **v3.0.0** | Sep 2026 | **Anwendungslogik in zehn Module aufgeteilt.** `app.js` (3.495 Zeilen) ist zugunsten von [`js/core.js`](js/core.js) bis [`js/main.js`](js/main.js) entfallen; die Module teilen sich den Namensraum `window.SOPApp`, der Funktionsumfang bleibt vollständig erhalten. Behoben: das Suchfeld der Startseite reichte die Eingabe zeichenweise an die Schnellsuche weiter und verlor bei schnellem Tippen den Suchbegriff (jetzt eine Schaltfläche, die die Schnellsuche öffnet); der Filterbegriff der Übersicht wurde unmaskiert in ein HTML-Attribut geschrieben, ein Anführungszeichen zerlegte damit die Ansicht; SOP-Namen und Textausschnitte wurden ohne Maskierung eingebaut; die Schaltfläche „Alle" der Kapitelleiste war beim Öffnen einer SOP markiert, obwohl nur Diagnostik und Therapie offen standen, und blieb es auch nach dem Zuklappen eines Abschnitts; die Fokusfalle wählte das im Dokument erste statt das oberste Overlay, und beim Schließen eines von zwei Overlays verlor der Hintergrund seine Sperre; die Safe-Area wurde beim Aufziehen der Bildschirmtastatur neu vermessen und ließ das Layout springen; die Quellen einer SOP waren über die Kapitelleiste nicht erreichbar; `Enter` in der Schnellsuche blieb ohne Wirkung, obwohl die Fußzeile es ankündigte. Neu: Tastaturauswahl in der Schnellsuche samt direktem Einstieg in die Volltextsuche, Trefferanzahl und Abschnittsangabe in Such- und Übersichtsliste, Zurücksetzen leerer Filterergebnisse, Telefonnummern per Tipp in die Zwischenablage mit Kurzhinweis, `/` und `Rücktaste` als Tastenkürzel, Abschnittsköpfe als `<h2>` mit `aria-controls`, echte `<button>`-Elemente statt `div` mit `role="button"`, Schriftgrößen-Schaltflächen am Anschlag abgeschaltet, Seitentitel folgt der geöffneten SOP |
| **v2.10.0** | Sep 2026 | **Kapitelleiste bleibt oben.** Die Abschnittsleiste einer geöffneten SOP heftet sich beim Scrollen an den oberen Rand und wird nicht mehr durch eine separate Abschnittsleiste ersetzt; das gerade sichtbare Kapitel wird darin markiert, Sprungziele landen darunter. Behoben: der Spotlight teilte sich den Suchbegriff mit der Volltextsuche und löschte beim Schließen deren Ergebnisse, während im Eingabefeld weiter Text stand; das Zurückgehen legte einen zusätzlichen Verlaufseintrag an, sodass die Zurück-Taste des Browsers anschließend wieder vorwärts führte; die Volltextsuche parste bei jedem Tastendruck das HTML aller 73 SOPs; der Druck baute die Ansicht zweimal neu auf und verlor dabei die Scrollposition. Aufgeräumt: Schrift und Symbole liegen im Projekt statt auf zwei CDNs, Abschnittswahl läuft über einen einzigen Ereignispfad statt über touch plus nachgereichtes click, der parallele Navigationsstapel und ein redundanter IntersectionObserver entfallen, tote Regeln und Markup entfernt |
| **v2.9.0** | Sep 2026 | **Darstellung und Bewegung überarbeitet.** Behoben: Ansichtswechsel liefen nie an (Enter-Klasse wurde im selben Frame entfernt, abgehende Ansicht stand auf `display:none`); Zurück-Pfeil und alle Such-Leeren-Knöpfe waren wegen doppelter `display`-Deklaration dauerhaft sichtbar; Overlays sprangen auf, statt einzufahren; senkrechtes Scrollen am linken Rand war durch die Wischgeste blockiert; Auswahl im Segmented Control löste auf Touch doppelt aus; die Verlaufskanten des Segmented Control wurden nie geschaltet; jeder SOP-Aufbau legte einen weiteren `resize`-Listener an; Trefferhervorhebung war im Dunkelmodus praktisch unlesbar; der Druck konnte Abschnitte leer ausgeben, weil die Auftrittsanimation noch lief. Neu: durchgängige Push-/Pop-/Fade-Übergänge, animiertes Akkordeon, gleitende Abschnittsmarkierung, fingerfolgende Wischgeste, Bottom-Sheet und Pull-to-Refresh auf `transform` umgestellt, gestaffelter Listenauftritt, Ripple-Feedback, Theme-Wechsel als Kreisblende, ein gemeinsamer `requestAnimationFrame`-Scroll-Handler mit gepufferten Abschnittspositionen, toter Skeleton-Code entfernt |
| **v2.8.1** | Sep 2026 | Korrektur Telefonverzeichnis: IMC KAIS (Arzt) lautet 4644 statt 4744 |
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
