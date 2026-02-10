(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "dyspnoe",
        title: "Dyspnoe",
        category: "Leitsymptom",
        catKey: "leit",
        sections: [
            {
                title: "Definition",
                content: "<strong>Dyspnoe:</strong> Subjektives Empfinden von Atembeschwerden."
            },
            {
                title: "Ursachen",
                content: `<ul>
                    <li><strong>Obere Atemwege:</strong> Fremdkörper, Angioödem, Infektion, Tracheomalazie, Vocal Chord Dysfunction, Kompression durch Raumforderung, etc.</li>
                    <li><strong>Pulmonal:</strong> AECOPD, Asthmaexazerbation, ARDS, Pneumonie, Aspiration, LAE, Pneumothorax, Lungengerüsterkrankung, Pleuraerguss, Tumor, etc.</li>
                    <li><strong>Kardial:</strong> Herzinsuffizienz, akutes Koronarsyndrom, Herzrhythmusstörungen, Klappenvitien, Perikarderguss, etc.</li>
                    <li><strong>Blut:</strong> Anämie, metabolische Azidose, Hämoglobinopathie, Intoxikation mit Organophosphaten, Salizylaten, Kohlenstoffmonoxid, etc.</li>
                    <li><strong>Neurogen:</strong> Zwerchfellparese, Guillain-Barré-Syndrom, Amyotrophe Lateralsklerose, Myasthenia gravis, etc.</li>
                    <li><strong>Mechanisch:</strong> ausgeprägte Adipositas, Aszites, Schwangerschaft, instabiler Thorax, schwere Kyphoskoliose, etc.</li>
                    <li><strong>Psychogen:</strong> Panikattacke, Angststörung, etc.</li>
                    <li><strong>Sonstige:</strong> Anaphylaxie, Rauchgasinhalation, Volumenüberladung (iatrogen oder renal), Fieber, Schmerz, Long-COVID-Syndrom, etc.</li>
                </ul>`
            },
            {
                title: "Symptome",
                content: `<ul>
                    <li>Subjektives Empfinden von Atembeschwerden.</li>
                    <li>ggf. Tachypnoe, Orthopnoe, Sprechdyspnoe.</li>
                    <li>ggf. Einsatz von Atemhilfsmuskulatur (z.B. Kutschersitz) und/oder Lippenbremse, Schaukelatmung/paradoxe Atmung.</li>
                    <li>ggf. <strong>Zyanose</strong> (ab ca. 5 g/dl desoxygeniertes Hämoglobin sichtbar; <span class="callout-cave">CAVE: kann bei ausgeprägter Anämie fehlen</span>).</li>
                    <li>ggf. Angst, Unruhe, Verwirrtheit, Delir, Vigilanzminderung.</li>
                    <li>ggf. vegetative Begleitsymptomatik (Hypertonie, Tachykardie, Schwitzen; Periarrest: Bradykardie, Hypotonie/Blutdruckabfall).</li>
                    <li>ggf. Zeichen der zugrundeliegenden Ursache (z.B. Zungenschwellung bei Anaphylaxie, periphere Ödeme bei kardialer Dekompensation).</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                content: `<ul>
                    <li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur).</li>
                    <li>1x venöser Zugang.</li>
                    <li><strong>Venöse bzw. arterielle BGA:</strong> Hb? pH? BE? pO₂? pCO₂? Laktat? Glukose? CO-Hb? Met-Hb?</li>
                    <li><strong>Labor:</strong> BB, CRP, E’lyte, NW, Gerinnung, TSH, ggf.: hs-Troponin, D-Dimere, NT-proBNP, PCT, Influenza-PCR, Sars-CoV-2-PCR.</li>
                    <li><strong>12-Kanal-EKG:</strong> Herzrhythmusstörungen? Ischämiezeichen? Hypertrophiezeichen? Niedervoltage?</li>
                    <li><strong>Anamnese:</strong> Onset, Dynamik, Umstände? Thoraxschmerzen, Fieber, Husten, Auswurf, Ödeme? Vorerkrankungen? Medikamente? Trauma? Allergien?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Vigilanz? Zyanose? Atemmuster? Stridor? Pulmonale RG? Abgeschwächtes AG? Halsvenenstauung, Beinödeme, TVT?</li>
                    <li><strong>POCUS gemäß "Radius"-Protokoll</strong> (siehe Sektion unten).</li>
                    <li><strong>Röntgen-Thorax:</strong> Infiltrate? Stauung? Ergüsse? Pneumothorax? Raumforderung?</li>
                    <li><strong>ggf. CT-Thorax:</strong> z.B. bei hoher Vortestwahrscheinlichkeit (Wells-Score) z.A. Lungenarterienembolie.</li>
                    <li><strong>ggf. weitere Diagnostik:</strong> z.B. Peak-Flow-Messung, Bedside-Spirometrie.</li>
                </ul>`
            },
            {
                title: "Therapie",
                content: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li>Stabilisierung der Vitalfunktionen gemäß ABCDE-Schema.</li>
                    <li>Sitzende Position bzw. Oberkörperhochlagerung und atemerleichternde Maßnahmen (z.B. beengende Kleidung entfernen).</li>
                    <li>Patienten beruhigen, ggf. medikamentöse Anxiolyse mit <strong>Morphin 2-3 mg repetitiv i.v. oder 5 mg s.c.</strong></li>
                    <li><strong>Bedarfsgerechte O₂-Gabe:</strong>
                        <ul>
                            <li>Ziel-SpO₂ 92–96 % bei Patienten ohne Hyperkapnierisiko sowie bei invasiv-beatmeten Patienten.</li>
                            <li>Ziel-SpO₂ 88–92 % bei Patienten mit Hyperkapnierisiko (z.B. COPD).</li>
                            <li>Applikation via Nasenbrille (&lt; 6 l/min) oder (Reservoir-)Maske (&ge; 6 l/min).</li>
                        </ul>
                    </li>
                    <li>ggf. NIV-Beatmung (siehe Anleitung) oder High-Flow-Oxygen-Therapie beginnen.</li>
                    <li>Intubation bei Kontraindikationen bzw. Versagen der nicht-invasiven Maßnahmen.</li>
                </ul>
                <h3>Kausale Therapie</h3>
                <ul>
                    <li>Abhängig von zugrundeliegender Ursache (s. SOP AECOPD, SOP Akute Herzinsuffizienz, SOP Anaphylaxie, SOP Asthmaexazerbation, etc.).</li>
                </ul>`
            },
            {
                title: "Radius-Protokoll (POCUS)",
                content: `<div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Einstellung</th>
                                <th>Fragestellungen</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Herz + VCI</strong><br><small>Parasternal l/k Achse, apikal, subxiphoidal</small></td>
                                <td>Perikarderguss/Tamponade (diastol. RA/RV-Kollaps)?<br>LV-Funktion normal, hyperdynam, leicht/schwer eingeschränkt?<br>RV-Dilatation? Paradoxe Septumbewegung? D-Sign?<br>VCI weit/atemstarr oder schmal/atemkollaptisch?</td>
                            </tr>
                            <tr>
                                <td><strong>Lunge/Thorax</strong><br><small>apikal frontal, frontal lateral, basal dorsolateral (bds.)</small></td>
                                <td>Fehlendes Pleuragleiten? Nachweis des Lungenpunktes?<br>Fokale oder ubiquitäre B-Linien? Hepatisation der Lunge? Pleuraergüsse?</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Anleitung zur Nicht-invasiven Beatmung (NIV)",
                content: `<h3>1. Indikationen</h3>
                <ul>
                    <li><strong>Ventilatorisches Versagen</strong> (= Atempumpversagen): AECOPD, neurodegenerative Erkrankung.</li>
                    <li><strong>Hypoxämisches Versagen</strong> (= Lungenparenchymversagen): kardiales Lungenödem, Pneumonie.</li>
                </ul>
                <h3>2. Kontraindikationen</h3>
                <ul>
                    <li><strong>Absolut:</strong> Fehlende Spontanatmung, Schnappatmung, Verlegung der Atemwege, GI-Blutung oder Ileus, nicht-hyperkapnisch bedingtes Koma.</li>
                    <li><strong>Relativ:</strong> Hyperkapnisch bedingtes Koma, massive Agitation, massiver Sekretverhalt, pH &lt; 7,1, hämodynamische Instabilität (Schock), Z.n. oberer GI-OP.</li>
                </ul>
                <h3>3. Durchführung (Spontan CPAP + ASB)</h3>
                <ul>
                    <li><strong>Unklare Situation:</strong> PEEP: 5 mbar, PS: +5 mbar, Trigger: 3 l/min, O₂: 100 %.</li>
                    <li><strong>Ventilatorisches Versagen:</strong> PEEP: 4 mbar, PS: +8 mbar, Trigger: 3 l/min, Rampe steil, O₂: nach Bedarf.</li>
                    <li><strong>Hypoxämisches Versagen:</strong> PEEP: 5 mbar, PS: +3 mbar, Trigger: 3 l/min, O₂: 100 %.</li>
                </ul>
                <div class="callout callout-cave">
                    <p><strong>Pmax Sicherheit:</strong> Pmax (= PEEP + PS) muss <strong>&le; 25 mbar</strong> bleiben, um Magenüberblähung und Aspiration zu vermeiden!</p>
                </div>
                <h3>4. Evaluation (nach 20–30 Min.)</h3>
                <ul>
                    <li>Abnahme von Dyspnoe, AF, Herzfrequenz, PaCO₂.</li>
                    <li>Zunahme von Vigilanz, SaO₂ &ge; 85 %, pH-Wert.</li>
                </ul>`
            },
            {
                title: "Merke",
                content: `<ul>
                    <li>Häufige Ursachen: Kardiales Lungenödem, Pneumonie, AECOPD, LAE, Asthma.</li>
                    <li>Ältere Patienten haben oft mehrere Dyspnoeursachen gleichzeitig.</li>
                    <li>Zur Unterscheidung AECOPD vs. kardiale Dekompensation sind NT-proBNP und POCUS (B-Linien) hilfreich.</li>
                    <li>Bei unklarer Dyspnoe soll ein natriuretisches Peptid bestimmt werden (DGIM-Klug entscheiden!).</li>
                    <li>Eine Dyspnoe kann ohne Hypoxie (z.B. bei ACS) und eine Hypoxie ohne Dyspnoe ("Silent Hypoxia") vorliegen.</li>
                    <li>Anämie oder metabolische Azidose stets als Genese mitbedenken.</li>
                    <li><strong>SpO₂-Messung nicht valide bei:</strong> Hypothermie, Schock, CO-Intoxikation oder Methämoglobinämie.</li>
                </ul>`
            },
            {
                title: "Disposition",
                content: "Individuelle Entscheidung, abhängig von zugrundeliegendem Krankheitsbild und Krankheitsschwere."
            }
        ],
        stand: "10/25",
        sources: `Simon PM et al. Distinguishable types of dyspnea... Am Rev Respir Dis. 1990. – DeVos E et al. Approach to Adult Patients with Acute Dyspnea. Emerg Med Clin North Am. 2016. – Lamsam L et al. POCUS for Detecting the Etiology... Cureus. 2018. – Rosin C et al. SOP Akute Dyspnoe... Notaufnahme up2date 2019. – Westhoff M et al. Nicht-invasive Beatmung... Pneumologie 2015. – Ventzke MM et al. Einfach und praktisch: nichtinvasive Beatmung. Notfall Rettungsmed 2020.`
    });
})();