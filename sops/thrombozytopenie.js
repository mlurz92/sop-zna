(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "thrombozytopenie",
        title: "Thrombozytopenie",
        category: "Hämatologie",
        catKey: "haem",
        stand: "04/23",
        sections: [
            {
                title: "Definition",
                html: `<p><strong>Thrombozytopenie:</strong> Mangel an Thrombozyten.</p>
                <ul>
                    <li><strong>Diagnosekriterium:</strong> Thrombozyten < 150.000/µl.</li>
                </ul>`
            },
            {
                title: "Ursachen",
                html: `<h3>Bildungsstörung</h3>
                <ul>
                    <li><strong>Knochenmarkinsuffizienz:</strong> Neoplasie, toxisch, medikamentös, ionisierende Strahlen, Infektionen, autoimmun, etc.</li>
                    <li><strong>Substratmangel:</strong> Vitamin B12, Folsäure.</li>
                    <li><strong>Hepatopathie.</strong></li>
                    <li><strong>Hereditär:</strong> z.B. Wiskott-Aldrich-Syndrom.</li>
                </ul>
                <h3>Verlust / Verbrauch</h3>
                <ul>
                    <li><strong>Immunthrombozytopenie (ITP).</strong></li>
                    <li><strong>Thrombotische Mikroangiopathien (TMA):</strong> Hämolytisch-urämisches Syndrom (HUS), Thrombotisch-thrombozytopenische Purpura (TTP).</li>
                    <li><strong>Disseminierte intravasale Gerinnung (DIC), Sepsis.</strong></li>
                    <li><strong>Heparin-induzierte Thrombozytopenie (HIT)</strong>, Vaccine-induced immune thrombotic thrombocytopenia (VITT).</li>
                    <li><strong>Hypersplenismus.</strong></li>
                    <li><strong>Gestationsthrombozytopenie</strong>, (Prä-)Eklampsie, HELLP-Syndrom.</li>
                    <li><strong>Sonstige:</strong> Massenblutung, Posttransfusionsthrombozytopenie, mechanische Schädigung (z.B. Herzklappen, ECMO, Dialyse), etc.</li>
                </ul>`
            },
            {
                title: "Symptome & WHO-Blutungsgrade",
                html: `<ul>
                    <li>Häufig asymptomatisch (Blutungen i.d.R. erst bei Thrombozyten < 30.000/µl, sofern Funktion und plasmatische Gerinnung intakt).</li>
                    <li><strong>Petechiale Blutungen:</strong> insbesondere Mundschleimhaut und abhängige Körperpartien (Beine bei Mobilen, Rücken bei Bettlägerigen).</li>
                    <li>Nasen-/Zahnfleischbluten, Hämatomneigung, Hypermenorrhoe bzw. Metrorrhagie.</li>
                    <li>ggf. Symptome der Ursache (z.B. Thrombosen bei HIT II, blutige Diarrhoen bei EHEC-HUS).</li>
                </ul>
                <h3>WHO-Blutungsgrade</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Grad</th>
                                <th>Beschreibung</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Grad 1</strong></td><td>Kleinere Hämatome, Petechien, Zahnfleischbluten.</td></tr>
                            <tr><td><strong>Grad 2</strong></td><td>Kleinere Blutungen, die keine EK-Transfusion erfordern.</td></tr>
                            <tr><td><strong>Grad 3</strong></td><td>Transfusionsbedürftige Blutungen.</td></tr>
                            <tr><td><strong>Grad 4</strong></td><td>Organ- oder lebensbedrohliche Blutungen (z.B. Retina-Blutung mit Sehverlust, hämodynamische Instabilität).</td></tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li><strong>Ersteindruck + ABCDE + Vitalparameter</strong> (RR, Puls, SpO₂, AF, Temperatur).</li>
                    <li><strong>1 x venöser Zugang.</strong></li>
                    <li><strong>Venöse BGA:</strong> (Hb? pH? BE? Laktat?).</li>
                    <li><strong>Labor:</strong> Diff-BB, CRP, E'lyte, NW, Bilirubin, GOT, GPT, AP, γ-GT, Gerinnung, Retikulozyten, Fragmentozyten, Haptoglobin, LDH, Vitamin B12, Folsäure, TSH.
                    <br>Ggf. erweitert: D-Dimere, Fibrinogen, PF-4-Heparin-ELISA, HIPA, Coombs-Test, <strong>ADAMTS-13</strong>, unreife Thrombozytenfraktion, Hep. B/C/HIV-Serologie, β-HCG.</li>
                    <li><strong>Ausschluss Pseudothrombozytopenie:</strong> Abnahme mittels <strong>ThromboExact</strong> (bzw. Citrat).</li>
                    <li><strong>Kreuzblut abnehmen</strong> und ggf. TK anfordern (Indikationen s.u.).</li>
                    <li><strong>Blutausstrich:</strong> Suche nach Thrombozytenaggregaten, Fragmentozyten oder Blasten.</li>
                    <li><strong>Anamnese:</strong> Symptome? Blutungsstigmata? Bekannte Thrombozytopenie? Medikamente? Kürzliche Heparingabe? Transfusion? Chemo? B-Symptomatik? Alkoholabusus? Schwangerschaft?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Petechien? Ikterus? Hepato-/Splenomegalie? Lymphknoten? Thrombosezeichen? Neurologie?</li>
                    <li><strong>POCUS:</strong> Leberzirrhose? Splenomegalie?</li>
                    <li><strong>Ggf. Spezialdiagnostik:</strong> Knochenmarkpunktion, Immunphänotypisierung.</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p><strong>Sofortige Rücksprache mit:</strong>
                    <br>• Hämato-/Onkologie bei V.a. akute Leukämie.
                    <br>• Nephrologie bei V.a. TMA.
                    <br>• Gynäkologie bei V.a. Präeklampsie bzw. HELLP!</p>
                </div>`
            },
            {
                title: "Diagnostischer Algorithmus",
                html: `<p>Vorgehen bei ausgeprägter Thrombozytopenie:</p>
                <ol>
                    <li><strong>Ausschluss Pseudothrombozytopenie</strong> (z.B. mittels ThromboExact).</li>
                    <li><strong>Klinisches Assessment:</strong> Anamnese, KU, Labor, Blutausstrich.</li>
                    <li><strong>Prüfung auf akut lebensbedrohliche Erkrankungen:</strong>
                        <ul>
                            <li><strong>TMA (HUS, TTP):</strong> Neurologie? Niereninsuffizienz? Diarrhoe? Hämolyse? Fragmentozyten?</li>
                            <li><strong>DIC:</strong> Trauma? Sepsis? INR ↑? D-Dimere ↑? Fibrinogen ↓?</li>
                            <li><strong>Akute Leukämie:</strong> Leistungsminderung? B-Symptomatik? Leukozytose? Bi-/Trizytopenie? Blasten?</li>
                            <li><strong>HIT II:</strong> Heparinexposition? Thrombose/Embolie? Positiver 4T-Score?</li>
                            <li><strong>Schwere Präeklampsie / HELLP:</strong> Schwangerschaft? Blutdruck? Proteinurie?</li>
                            <li><strong>Sonstige:</strong> Posttransfusionelle Purpura, VITT.</li>
                        </ul>
                    </li>
                </ol>
                <div class="callout callout-hinweis">
                    <p>Bei "Ja" zu einem dieser Punkte: Sofortige Therapie und ggf. Verlegung in ein Zentrum!</p>
                </div>`
            },
            {
                title: "Therapie & Transfusionsgrenzen",
                html: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li><strong>TK-Gabe:</strong> Bei gegebener Indikation rasch transfundieren. Bei prophylaktischer Gabe unmittelbar vor dem Eingriff.</li>
                    <li><strong>Effekt:</strong> 1 TK hebt die Thrombozytenzahl um ca. 10.000–30.000/µl (bei fehlendem Verbrauch).</li>
                    <li><strong>Bestrahlte TK verwenden bei:</strong> angeborener Immundefizienz, vor/nach Stammzell-TX, lymphatischen Neoplasien, Purin-Analoga, Antithymozytenglobulin, Alemtuzumab.</li>
                    <li><strong>Medikamente prüfen:</strong> Wirkstoffe, die Thrombozytenfunktion oder Gerinnung beeinträchtigen, ggf. absetzen (Abwägung Blutung vs. Thrombose). Bei > 50.000 Thrombozyten i.d.R. keine Anpassung erforderlich.</li>
                </ul>
                <h3>Transfusion bei akuten Blutungen</h3>
                <ul>
                    <li><strong>Massive/bedrohliche Blutung:</strong> Frühzeitige TK-Gabe (ab 6 EK : 1 TK; danach im Verhältnis 4 EK : 1 TK).</li>
                    <li><strong>Transfusionsbedürftige Blutung:</strong> bei < 50.000 Thrombozyten/µl.</li>
                    <li><strong>Anhaltende Blutung / SHT:</strong> bei < 100.000 Thrombozyten/µl.</li>
                </ul>
                <h3>Spezifische Trigger nach Ursache</h3>
                <ul>
                    <li><strong>Chronische Thrombozytopenie (MDS, aplastisch):</strong> Gabe bei < 5.000/µl oder vor Eingriffen oder bei WHO Grad 3/4 Blutung.</li>
                    <li><strong>Erhöhter Umsatz (ITP, TTP, Sepsis):</strong>
                        <ul>
                            <li><strong>ITP:</strong> Nur bei bedrohlicher Blutung (WHO Grad 4).</li>
                            <li><strong>HUS/TTP:</strong> Nur bei bedrohlicher Blutung (WHO Grad 4) nach Ausschöpfung aller anderen Optionen.</li>
                            <li><strong>Sepsis/DIC:</strong> Nur bei bedrohlicher Blutung (WHO Grad 4).</li>
                        </ul>
                    </li>
                    <li><strong>Akute Bildungsstörung (Chemo, Leukämie):</strong>
                        <ul>
                            <li>≤ 10.000/µl ohne Zusatzrisiko.</li>
                            <li>≤ 20.000/µl mit Zusatzrisiko (Fieber > 38°C, Infektion, Leukozytose, steiler Abfall, Gerinnungsstörung, vorbestehende Nekrosen).</li>
                        </ul>
                    </li>
                </ul>
                <div class="callout callout-cave">
                    <p><strong>CAVE:</strong> Thrombozyten-Transfusion bei <strong>TTP, HIT und HUS</strong> nur bei vitaler Bedrohung (Gefahr der Verschlechterung der thrombotischen Situation!).</p>
                </div>`
            },
            {
                title: "Indikationen für prophylaktische TK-Gabe",
                html: `<div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Eingriff</th>
                                <th>Grenzwert für Transfusion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Lumbalpunktion</strong></td><td>< 50.000/µl (elektiv; bei Dringlichkeit > 10.000/µl möglich); < 100.000/µl bei dualer Plättchenhemmung (Cave: Ticagrelor).</td></tr>
                            <tr><td><strong>Leberpunktion</strong></td><td>< 10.000/µl (transjugulär); < 50.000/µl (transkutan).</td></tr>
                            <tr><td><strong>GI-Endoskopie</strong></td><td>< 20.000/µl bei geplanter Biopsie.</td></tr>
                            <tr><td><strong>Bronchoskopie</strong></td><td>< 20.000/µl; < 50.000/µl bei geplanter Biopsie.</td></tr>
                            <tr><td><strong>ZVK-Anlage</strong></td><td>< 10.000/µl; < 20.000/µl bei klinischer Blutungsneigung.</td></tr>
                            <tr><td><strong>Operative Eingriffe</strong></td><td>< 20.000/µl (Kardiochirurgie oder kleinere OPs mit Blutungssymptomatik); < 50.000/µl (größere OPs); < 70.000–100.000/µl (sehr hohes Risiko).</td></tr>
                            <tr><td><strong>Angiografie</strong></td><td>< 20.000/µl (nicht bei Diagnostik arterieller Verschluss, dann nur postinterventionell bei Blutung).</td></tr>
                            <tr><td><strong>Beckenkammbiopsie</strong></td><td>Keine prophylaktische Gabe (außer bei anatomischen Risiken).</td></tr>
                            <tr><td><strong>Regionalanästhesie</strong></td><td>< 50.000/µl (spinal); < 80.000/µl (epidural).</td></tr>
                            <tr><td><strong>Leberinsuffizienz</strong></td><td>< 20.000/µl oder bei ausgeprägten petechialen Blutungen (akut) / Blutungskomplikationen (chronisch).</td></tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li><strong>Vorlaborwerte</strong> sind extrem wertvoll (akut vs. chronisch?).</li>
                    <li><strong>Akute lebensbedrohliche Ursachen:</strong> Massenblutung, DIC, Sepsis, TTP, HUS, (Prä-)Eklampsie, HELLP, HIT II, akute Leukämie.</li>
                    <li><strong>Hämolytische Anämie plus Thrombozytopenie:</strong> Immer an TMA denken (Warnzeichen: Neurologie, Niere, Fieber).</li>
                    <li>Bei <strong>ITP und TMA:</strong> TK-Transfusion erst nach Ausschöpfung aller sonstigen Maßnahmen (oft ineffektiv bzw. komplikationsreich).</li>
                </ul>`
            },
            {
                title: "Disposition",
                html: `<div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Befund</th>
                                <th>Empfohlene Disposition</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Milde Thrombozytopenie</strong> ohne Hinweise auf akut lebensbedrohliche Ursache</td>
                                <td>Ambulante Abklärung</td>
                            </tr>
                            <tr>
                                <td><strong>Ausgeprägte Thrombozytopenie</strong> unklarer Ätiologie, Blutungsgefahr</td>
                                <td>Stationäre Abklärung</td>
                            </tr>
                            <tr>
                                <td>Hinweise auf <strong>akut lebensbedrohliche Ursache</strong> oder <strong>akute Blutung</strong> (WHO Grad 3 und 4)</td>
                                <td>Überwachungsstation (IMC/ICU)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            }
        ],
        sources: `Onkopedia Leitlinien: Thrombozytopenien (Stand 03/2023).<br>
        Querschnitts-Leitlinien (BÄK) zur Therapie mit Blutkomponenten und Plasmaderivaten (2020).<br>
        Herold G et al. Innere Medizin 2019.<br>
        Ashworth I et al. Clin Med (Lond). 2022.<br>
        Bergmann F et al. Thrombocytopenia in Pregnancy. Dtsch Arztebl Int. 2015.`
    });
})();