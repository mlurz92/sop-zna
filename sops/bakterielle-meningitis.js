(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "bakterielle-meningitis",
        title: "Bakterielle Meningitis",
        category: "Infektiologie",
        catKey: "infekt",
        sections: [
            {
                title: "Definition",
                html: `<p><strong>Bakterielle Meningitis:</strong> Bakterielle Entzündung der Hirnhäute.</p>`
            },
            {
                title: "Ursachen",
                html: `<p>Bakterien (Pneumokokken, Meningokokken, Listerien, etc.).</p>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li><strong>Kardinalsymptome:</strong> Kopfschmerzen, Meningismus, Fieber, Vigilanzminderung.</li>
                    <li>ggf. Photophobie, Übelkeit, Erbrechen, Verwirrtheit.</li>
                    <li>ggf. Zeichen eines zugrundeliegenden <strong>Infektfokus</strong> (eitrige Otorrhoe bei Otitis media, gerötetes/geschwollenes Mastoid bei Mastoiditis, etc.).</li>
                    <li>ggf. Zeichen von <strong>Komplikationen</strong> (Hirnödem, Hydrozephalus, Krampfanfälle, Hirnnervenausfälle, cerebrale Ischämie/Blutung, Sinusthrombose, etc.).</li>
                    <li>ggf. Zeichen der Sepsis bis hin zu <strong>Waterhouse-Friderichsen-Syndrom</strong> (DIC, Petechien/großflächige Einblutungen, Nebenniereninfarkte).</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p>Fehlen einzelner Kardinalsymptome schließt eine Meningitis nicht aus!</p>
                </div>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur).</li>
                    <li>1-2x venöser Zugang.</li>
                    <li><strong>Venöse BGA:</strong> pH? BE? E’lyte? Glukose? Laktat?</li>
                    <li><strong>Labor:</strong> Diff-BB, CRP, E’lyte, NW, Bilirubin, Gerinnung, PCT, Gesamteiweiß, Glukose.</li>
                    <li><strong>&ge; 2 Paar Blutkulturen.</strong></li>
                    <li><strong>Anamnese:</strong> Symptome? Beginn? Vorangegangener Infekt? Vorerkrankungen? SHT? Neurochirurgische OP? Immunsuppression? Medikamente? Reise?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Pupillen? Brudzinski-/Kernig-/Bragard-/Lasègue-Zeichen? Petechien/Purpura? FND? Anderer Infektfokus?</li>
                    <li><strong>cCT</strong> (ICB? Ischämie? Hirnödem? Hydrozephalus? Abszess? Subdurales Empyem?) + <strong>CT-NNH</strong> (Infektfokus?).</li>
                    <li><strong>Lumbalpunktion:</strong> Zellzahl? Zelldifferenzierung? Liquoreiweiß? Liquorlaktat? Liquor/Serum-Glukose-Quotient? Kultur? Multiplex-PCR? (s. Anleitung).</li>
                    <li><strong>HNO-Konsil:</strong> Sinusitis? Mastoiditis? Frühzeitige operative Sanierung?</li>
                </ul>
                <div class="callout callout-hinweis">
                    <p>Frühzeitige Rücksprache mit Neurologie und Überwachungsstation (IMC/ICU)!</p>
                </div>`
            },
            {
                title: "Diagnostischer Algorithmus",
                html: `<p>Vorgehen bei V.a. bakterielle Meningitis:</p>
                <ol>
                    <li><strong>Sofortmaßnahme:</strong> Isolation.</li>
                    <li><strong>Basis-Diagnostik:</strong> Anamnese, KU, venöse BGA, Labor, &ge; 2 Paar Blutkulturen.</li>
                    <li><strong>Check:</strong> Schwere Bewusstseinsstörung, neues fokal-neurologisches Defizit (FND) oder epileptischer Anfall?
                        <ul>
                            <li><strong>JA:</strong> Dexamethason + Antiinfektiva <strong>innerhalb 1 h</strong> &rarr; cCT + CT-NNH &rarr; Lumbalpunktion (außer bei Hirndruckzeichen im CT).</li>
                            <li><strong>NEIN:</strong> Lumbalpunktion* &rarr; Dexamethason + Antiinfektiva <strong>innerhalb 1 h</strong> &rarr; cCT + CT-NNH.</li>
                        </ul>
                    </li>
                </ol>
                <div class="callout callout-cave">
                    <p>*Wenn die Lumbalpunktion nicht innerhalb 1 h gelingt, muss die Antibiotikagabe davor erfolgen!</p>
                </div>`
            },
            {
                title: "Therapie",
                html: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li>Eigen-/Infektionsschutz beachten (Kittel, Handschuhe, MNS).</li>
                    <li><strong>Isolation des Patienten:</strong> für mindestens 24 h nach Beginn einer wirksamen Antibiotikatherapie.</li>
                    <li>Stabilisierung der Vitalfunktionen gemäß ABCDE-Schema.</li>
                </ul>

                <h3>Antiinfektive Therapie</h3>
                <p>Frühestmöglich, d.h. &lt; 1 h nach Eintreffen, Anpassung nach Liquorbefund.</p>
                <ul>
                    <li><strong>Dexamethason:</strong> 10 mg i.v. unmittelbar vor oder zeitgleich mit Antibiotika (dann 4x/d).</li>
                    <li><strong>Ceftriaxon:</strong> 2 g i.v. (2x/d; alternativ: Cefotaxim).</li>
                    <li><strong>Ampicillin:</strong> 2 g i.v. (6x/d).</li>
                    <li><strong>In Sonderfällen (Immunsuppression, Shunt, NCH-OP, SHT):</strong> Vancomycin (2x 1g/d) + Meropenem (3x 2g/d).</li>
                    <li><strong>Aciclovir:</strong> zusätzlich 10 mg/kg KG (3x/d) bis zum Ausschluss einer Herpesenzephalitis.</li>
                    <li>Zusätzlich antimykotische Therapie bei Verdacht auf Pilz-Meningitis (z.B. bei AIDS) in Rücksprache erwägen.</li>
                </ul>

                <h3>Therapie möglicher Komplikationen</h3>
                <ul>
                    <li><strong>Erhöhter intrakranieller Druck:</strong> 30° Oberkörperhochlagerung, tiefe Sedierung, externe Ventrikeldrainage (EVD). Bei Beatmung Ziel-pCO₂ 32-35 mmHg, ggf. passager 20% Mannitol i.v.</li>
                    <li><strong>Epileptischer Anfall:</strong> Benzodiazepine (s. SOP Status Epilepticus).</li>
                    <li><strong>Sinusthrombose:</strong> Therapeutische Antikoagulation mit Heparin-Perfusor (Ziel-aPTT 1,5-2,5 fache der Norm).</li>
                    <li><strong>HNO-Fokus:</strong> Rasche Sanierung (meist innerhalb von 24 h).</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p>V.a. ambulant erworbene bakterielle Meningitis: Dexamethason, Ceftriaxon und Ampicillin innerhalb 1 h i.v.!</p>
                </div>`
            },
            {
                title: "Anleitung zur Lumbalpunktion",
                html: `<h3>1. Indikationen und Kontraindikationen</h3>
                <ul>
                    <li><strong>Indikationen:</strong> V.a. Meningitis, Enzephalitis, SAB, etc.</li>
                    <li><strong>Kontraindikationen:</strong> Erhöhter Hirndruck (radiologisch gesichert oder klinischer Verdacht), kompromittierte Gerinnung (INR > 1,8, Quick < 50%, Thrombozyten < 50.000/µl relativ / < 10.000/µl absolut), Infektion im Punktionsweg.</li>
                </ul>

                <h3>2. Patienten vorbereiten</h3>
                <ul>
                    <li>Aufklärung über das Vorgehen.</li>
                    <li>Ggf. Gerinnung optimieren (PPSB, TK-Gabe).</li>
                    <li><strong>Lagerung:</strong> 1. Wahl: sitzend ("Katzenbuckel", Füße erhöht); 2. Wahl: Seitenlage, Beine angezogen.</li>
                </ul>

                <h3>3. Durchführung</h3>
                <ul>
                    <li>Material richten (atraumatische Nadel 20-22 G, 4 sterile Röhrchen: Zellzahl, Eiweiß/Glukose/Laktat, Blutkultur-Beimpfung, PCR).</li>
                    <li>Punktionsstelle markieren (Beckenkämme -> Höhe LWK 3/4 bzw. 4/5).</li>
                    <li>Aseptische Bedingungen (Desinfektion, Lochtuch, sterile Handschuhe).</li>
                    <li>Lokalanästhesie (ca. 2 ml Lidocain oberflächlich).</li>
                    <li>Nadel kranial führen, Ring-/Kleinfinger abstützen. Bei "Loss of Resistance" Mandrin entfernen.</li>
                    <li>Entnahme: ca. 20 Tropfen (= 1 ml) pro Röhrchen.</li>
                </ul>

                <h3>4. Nach Punktion</h3>
                <ul>
                    <li>Patient für 1 h flach lagern (Prophylaxe postpunktioneller Kopfschmerz).</li>
                    <li>Liquor visuell beurteilen (klar? trüb? blutig?) und sofort ins Labor.</li>
                    <li>Erneute Blutabnahme zur Glukose/Eiweiß-Bestimmung bei Liquorpunktion.</li>
                </ul>`
            },
            {
                title: "Parameter im Liquor",
                html: `<div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Parameter</th>
                                <th>Bakteriell</th>
                                <th>Viral</th>
                                <th>Tuberkulös</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Liquorfarbe</strong></td>
                                <td>eitrig-trüb</td>
                                <td>klar</td>
                                <td>Spinnwebengerinnsel</td>
                            </tr>
                            <tr>
                                <td><strong>Zellzahl/µl</strong></td>
                                <td>> 1000</td>
                                <td>< 1000</td>
                                <td>< 1000</td>
                            </tr>
                            <tr>
                                <td><strong>Zytologie</strong></td>
                                <td>granulozytär</td>
                                <td>lymphozytär</td>
                                <td>gemischtzellig</td>
                            </tr>
                            <tr>
                                <td><strong>Glukose-Index</strong></td>
                                <td>stark erniedrigt</td>
                                <td>normal</td>
                                <td>erniedrigt</td>
                            </tr>
                            <tr>
                                <td><strong>Laktat (mmol/l)</strong></td>
                                <td>> 3,5</td>
                                <td>< 3,5</td>
                                <td>> 3,5</td>
                            </tr>
                            <tr>
                                <td><strong>Gesamteiweiß</strong></td>
                                <td>> 100 mg/dl</td>
                                <td>< 100 mg/dl</td>
                                <td>> 100 mg/dl</td>
                            </tr>
                            <tr>
                                <td><strong>Blut-Liquor-Schranke</strong></td>
                                <td>schwer gestört</td>
                                <td>normal/leicht gestört</td>
                                <td>schwer gestört</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p><small>*Abweichungen in frühen Stadien, bei Vorbehandlung oder Immunsuppression möglich.</small></p>`
            },
            {
                title: "Chemoprophylaxe der Meningokokken-Meningitis",
                html: `<p>RKI-Empfehlung (modifiziert nach Pfister et al. 2023)</p>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Antibiotikum</th>
                                <th>Altersgruppe</th>
                                <th>Dosierung</th>
                                <th>Besonderheit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Rifampicin</strong></td>
                                <td>Erwachsene (&ge; 60 kg)</td>
                                <td>600 mg alle 12 h (2 Tage) p.o.</td>
                                <td>Nicht bei Schwangerschaft</td>
                            </tr>
                            <tr>
                                <td><strong>Ciprofloxacin</strong></td>
                                <td>Erwachsene</td>
                                <td>500 mg Einmaldosis p.o.</td>
                                <td>Nicht bei Schwangerschaft/Stillzeit/<18J</td>
                            </tr>
                            <tr>
                                <td><strong>Ceftriaxon</strong></td>
                                <td>Erwachsene/Kinder &ge; 12 J</td>
                                <td>250 mg Einmaldosis i.m.</td>
                                <td>1. Wahl bei Schwangerschaft</td>
                            </tr>
                            <tr>
                                <td><strong>Azithromycin</strong></td>
                                <td>Erwachsene</td>
                                <td>500 mg Einmaldosis p.o.</td>
                                <td>2. Wahl bei Schwangerschaft</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li>Lebensbedrohliches Krankheitsbild mit hoher Komplikationsrate.</li>
                    <li>Bei jeglicher zeitlichen Verzögerung der Lumbalpunktion muss umgehend (noch vor LP) mit der Therapie begonnen werden.</li>
                    <li>Bei akuter bakterieller Meningitis ist das <strong>Procalcitonin</strong> im Serum fast immer erhöht.</li>
                    <li>Ärztliche Meldung an Gesundheitsamt gemäß § 6 IfSG bereits bei V.a. Meningokokken-Meningitis/-Sepsis.</li>
                    <li>Personen mit Kontakt (RD, Familie, Umfeld) aktiv Chemoprophylaxe anbieten.</li>
                </ul>`
            },
            {
                title: "Disposition",
                html: `<ul>
                    <li><strong>(Neuro-) Überwachungsstation (IMC/ICU).</strong></li>
                </ul>`
            }
        ],
        stand: "10/25",
        sources: `Pfister HW et al. Ambulant erworbene bakterielle Meningoenzephalitis im Erwachsenenalter, S2k-Leitlinie, 2023. – Tumani H et al. Lumbalpunktion und Liquordiagnostik, S1-Leitlinie, 2019. – RKI Ratgeber Meningokokken, Stand 08.05.2024. – Herold G et al. Innere Medizin 2023.`
    });
})();