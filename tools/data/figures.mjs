/* ============================================================
   tools/data/figures.mjs
   ------------------------------------------------------------
   Abbildungs-Verzeichnis (Vorschlag 12).

   In img/ZNA/ liegen Abbildungen, die von keiner SOP referenziert
   werden - die SOP-Dateien duerfen dafuer aber nicht angefasst
   werden. Dieses Verzeichnis haengt sie anwendungsseitig an den
   passenden Abschnitt: der fachliche Text bleibt unveraendert,
   die Abbildung tritt als eigene <figure> darunter.

   Der Build prueft:
     - existiert die SOP-Kennung?
     - existiert der Abschnittstitel in genau dieser SOP?
     - existiert die Bilddatei?
   Jede Abweichung bricht den Build ab.
   ============================================================ */

export const FIGURES = [
    {
        sop: 'akute-herzinsuffizienz',
        section: 'Diagnostik',
        src: 'img/ZNA/akute-herzinsuffizienz_diagnostischer_algorithmus.png',
        alt: 'Diagnostischer Algorithmus bei akuter Herzinsuffizienz: Vom Verdacht ueber '
           + 'EKG, Labor mit natriuretischen Peptiden und Echokardiographie bis zur '
           + 'Bestaetigung oder zum Ausschluss der Diagnose.',
        caption: 'Diagnostischer Algorithmus bei akuter Herzinsuffizienz'
    },
    {
        sop: 'akute-intoxikation',
        section: 'Symptome & Toxidrome',
        src: 'img/ZNA/akute-intoxikation_toxidrom.png',
        alt: 'Uebersicht der Toxidrome mit Leitbefunden zu Vigilanz, Pupillen, Haut, '
           + 'Temperatur, Herzfrequenz, Blutdruck, Atmung und Darmgeraeuschen.',
        caption: 'Toxidrome im Ueberblick'
    }
];
