(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "anaemie",
        title: "Anämie",
        category: "Hämatologie",
        catKey: "haem",
        sections: [
            {
                title: "Definition",
                html: `<p><strong>Anämie:</strong> Mangel an Erythrozyten bzw. Hämoglobin.</p>
                <h3>Diagnosekriterien:</h3>
                <ul>
                    <li><strong>Männer:</strong> Hb < 13 g/dl</li>
                    <li><strong>Frauen:</strong> Hb < 12 g/dl</li>
                    <li><strong>Schwangere Frauen:</strong> Hb < 11 g/dl</li>
                </ul>`
            },
            {
                title: "Ursachen",
                html: `<h3>Bildungsstörung</h3>
                <ul>
                    <li><strong>Substratmangel:</strong> Eisen, Vitamin B12, Folsäure</li>
                    <li><strong>Knochenmarkinsuffizienz:</strong> Neoplasie, toxisch, etc.</li>
                    <li><strong>Renale Anämie:</strong> bei chronischer Niereninsuffizienz</li>
                    <li><strong>Chronische Krankheit:</strong> "Anemia of chronic disease"</li>
                    <li><strong>Hereditär:</strong> Thalassämie, Fanconi-Anämie, etc.</li>
                </ul>
                <h3>Verlust</h3>
                <ul>
                    <li><strong>Blutung:</strong> akut oder chronisch</li>
                    <li><strong>Hämolyse:</strong> autoimmun, mechanisch, infektiös, hereditär, etc.</li>
                </ul>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li>ggf. asymptomatisch</li>
                    <li>Fatigue, verminderte Belastbarkeit</li>
                    <li>Kopfschmerzen, Schwindel</li>
                    <li>(Belastungs-) Dyspnoe, Tachypnoe</li>
                    <li>Angina Pectoris</li>
                    <li>Tachykardie, Hypotonie, Synkope, Schock</li>
                    <li><strong>Symptome der zugrundeliegenden Ursache:</strong> z.B. epigastrische Schmerzen bei blutendem Magenulcus, B-Symptomatik bei Neoplasien.</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur)</li>
                    <li>1-2x venöser Zugang</li>
                    <li><strong>Venöse BGA:</strong> Hb? pH? BE? Laktat?</li>
                    <li><strong>Labor:</strong> Diff-BB, CRP, E'lyte, NW, Bilirubin, GOT, GPT, AP, γ-GT, Gerinnung, Retikulozyten, Haptoglobin, LDH, Ferritin, Vitamin B12, Folsäure, TSH.
                        <ul>
                            <li><strong>Ggf. erweitert:</strong> sTfR, Transferrinsättigung, Erythropoetin, Blutausstrich, Coombs-Test.</li>
                        </ul>
                    </li>
                    <li><strong>12-Kanal-EKG:</strong> Tachykardie? Herzrhythmusstörung? Ischämiezeichen?</li>
                    <li><strong>Anamnese:</strong> Beginn? Vorerkrankungen? Blutungsstigmata (Hämatemesis, Hämatochezie, Meläna, Hämoptysen, Epistaxis, Hämaturie, Menorrhagie)? Trauma? Kürzliche Eingriffe? Transfusionen? Medikamente? B-Symptomatik? Ernährung/Alkohol? Herkunft (z.B. Mittelmeerraum)?</li>
                    <li><strong>Körperliche Untersuchung:</strong> inkl. <strong>DRU</strong> (Vigilanz? Rekap-Zeit? Blässe? Ikterus? Splenomegalie? Lymphknoten? Hämatome? Teerstuhl? Blut peranal?)</li>
                    <li><strong>Zusatzuntersuchungen:</strong>
                        <ul>
                            <li>U-Status (Hämaturie?), iFOBT (okkulter Blutverlust?)</li>
                            <li><strong>POCUS:</strong> Freie Flüssigkeit abdominell/pleural? Gefäße? Splenomegalie?</li>
                            <li><strong>CT-Thorax/Abdomen/Becken mit KM:</strong> bei V.a. Blutungsquelle.</li>
                            <li><strong>Endoskopie (ÖGD/Kolo/Sigmoido):</strong> bei V.a. GI-Blutung.</li>
                        </ul>
                    </li>
                    <li><strong>Spezialdiagnostik:</strong> Knochenmarkpunktion, Serum-Elektrophorese, Hb-Elektrophorese, Immunfixation/-phänotypisierung, ADAMTS-13.</li>
                </ul>
                <div class="callout callout-hinweis">
                    <p>Rücksprache mit entsprechender Fachabteilung abhängig von vermuteter Anämieursache!</p>
                </div>`
            },
            {
                title: "Diagnostischer Algorithmus",
                html: `<p>Vorgehen bei (ausgeprägter) Anämie in der BGA:</p>
                <ol>
                    <li><strong>Bestätigung:</strong> BGA-Kontrolle zum Ausschluss von Abnahme-/Verdünnungsfehlern.</li>
                    <li><strong>V.a. Akute Blutung?</strong>
                        <ul>
                            <li>Anamnese/KU (Trauma, Meläna, etc.), POCUS (freie Flüssigkeit).</li>
                            <li><strong>Aktion:</strong> Blutungsquelle stoppen.</li>
                        </ul>
                    </li>
                    <li><strong>V.a. Akute Hämolyse?</strong>
                        <ul>
                            <li>Körperliche Untersuchung (Ikterus), Labor (LDH ↑, Haptoglobin ↓, ind. Bilirubin ↑).</li>
                            <li><strong>Blutausstrich:</strong>
                                <ul>
                                    <li>Fragmentozyten? → <strong>TTP, HUS, DIC</strong></li>
                                    <li>Sichelzellen? → <strong>Sichelzellkrise</strong></li>
                                </ul>
                            </li>
                            <li><strong>Direkter Coombstest:</strong> positiv → Autoimmunhämolytische Anämie; negativ → Nicht-autoimmunhämolytische Anämie.</li>
                        </ul>
                    </li>
                    <li><strong>V.a. Akute Leukämie?</strong>
                        <ul>
                            <li>Labor (Bi-/Panzytopenien, Monozytose, ausgeprägte Leukozytose).</li>
                            <li><strong>Blutausstrich:</strong> Blasten? → Akute Leukämie.</li>
                        </ul>
                    </li>
                    <li><strong>Weitere systematische Anämie:</strong> Abklärung im stationären Verlauf (Substratmangel, chronische Erkrankung).</li>
                </ol>`
            },
            {
                title: "Therapie",
                html: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li>Stabilisierung der Vitalfunktionen gemäß ABCDE-Schema.</li>
                    <li>Bei instabilen Patienten: <strong>hochdosierte O₂-Gabe</strong> (auch bei normwertiger SpO₂).</li>
                    <li><strong>EK-Gabe:</strong> 1 EK hebt den Hb-Wert um ca. 1 g/dl (bei fehlendem Verbrauch). Im Notfall ungekreuzt als "0 negativ".</li>
                    <li><strong>Bestrahlte EK verwenden bei:</strong> angeborener Immundefizienz, vor/nach Stammzell-Transplantation, lymphatischen Neoplasien, Therapie mit Purin-Analoga, Antithymozytenglobulin oder Alemtuzumab.</li>
                </ul>
                <h3>Kausale Therapie</h3>
                <ul>
                    <li><strong>Blutungsquelle stoppen:</strong> z.B. endoskopisch bei GI-Blutung, chirurgisch bei Aortenaneurysma.</li>
                    <li><strong>Hämolyse stoppen:</strong> z.B. Glukokortikoide bei AIHA.</li>
                    <li><strong>Behandlung der Grunderkrankung:</strong> hämato-/onkologisch oder Behandlung des Substratmangels.</li>
                </ul>`
            },
            {
                title: "Indikationen zur EK-Gabe",
                html: `<p><em>Angelehnt an die Querschnittsleitlinie zur Therapie mit Blutkomponenten 2020.</em></p>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Hb-Wert</th>
                                <th>Empfehlung / Kriterien</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>&lt; 7 g/dl</strong></td>
                                <td>EK-Gabe indiziert.</td>
                            </tr>
                            <tr>
                                <td><strong>7 bis &lt; 8 g/dl</strong></td>
                                <td>EK-Gabe bei: eingeschränkter Kompensationsfähigkeit, Risikofaktoren (z.B. schwere KHK, Alter > 65 J.) oder physiologischen Transfusionstriggern (s.u.).</td>
                            </tr>
                            <tr>
                                <td><strong>8 bis &lt; 10 g/dl</strong></td>
                                <td>EK-Gabe nur bei Vorliegen physiologischer Transfusionstrigger (s.u.).</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="callout callout-wichtig">
                    <p><strong>Massive Blutung / hämorrhagischer Schock:</strong> EK-Gabe nach Klinik und Blutverlust. Ziel-Hb: 7-9 g/dl.</p>
                </div>
                <h3>Physiologische Transfusionstrigger:</h3>
                <ul>
                    <li><strong>Kardiopulmonale Symptome:</strong> Tachykardie, Hypotension, Dyspnoe, Blutdruckabfall unklarer Genese.</li>
                    <li><strong>EKG-Veränderungen:</strong> Neue ST-Strecken-Senkungen/-Hebungen oder neue Rhythmusstörungen.</li>
                    <li><strong>Echokardiografisch:</strong> neue regionale Wandbewegungsstörungen.</li>
                    <li><strong>Globale Ischämiezeichen:</strong> SvO₂ < 50%, ScvO₂ < 65-70% oder Laktatazidose.</li>
                </ul>`
            },
            {
                title: "Substitution bei Substratmangel",
                html: `<div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Mangel</th>
                                <th>Medikament</th>
                                <th>Dosierung</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Eisen</strong></td>
                                <td>Ferinject®<br>Ferro sanol®</td>
                                <td>500 mg 1x i.v. (ggf. wiederholen lt. Fachinfo)<br>100 mg 1-3x/d p.o. für ca. 3-6 Monate</td>
                            </tr>
                            <tr>
                                <td><strong>Vitamin B12</strong></td>
                                <td>Cyanocobalamin</td>
                                <td>1000 µg (1 Amp.) 2x/Woche für 2 Wochen i.m. (alt. i.v./s.c.), weitere Gabe nach Spiegel.</td>
                            </tr>
                            <tr>
                                <td><strong>Folsäure</strong></td>
                                <td>Folsan®</td>
                                <td>5 mg 1-3x/d p.o. (max. 5 mg/d in Schwangerschaft/Stillzeit).</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="callout callout-cave">
                    <p><strong>WICHTIG:</strong> Bei begleitendem Vitamin B12-Mangel <strong>stets auch B12 substituieren</strong>, bevor Folsäure gegeben wird (Gefahr der Verstärkung neurologischer Symptome!).</p>
                </div>
                <div class="callout callout-hinweis">
                    <p><strong>Merke:</strong> Bei Substitution von Folsäure oder B12 begleitende Eisengabe erwägen, da sich die Speicher bei wiedereinsetzender Hämatopoese rasch leeren.</p>
                </div>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li>Die Symptomatik hängt maßgeblich von der <strong>Akuität</strong> ab (Begleiterkrankungen/Kompensation).</li>
                    <li>Akute Blutung, Hämolyse oder Leukämie müssen bereits in der ZNA erkannt werden.</li>
                    <li><strong>Vorlaborwerte</strong> sind extrem wertvoll (akut vs. chronisch).</li>
                    <li>Der Hb-Wert "hinkt" bei aktiver Blutung hinterher; Vitalparameter (Puls, RR) sind sensitiver.</li>
                    <li><strong>Exsikkose:</strong> Hb-Wert "falsch" hoch.</li>
                    <li><strong>Hypervolämie:</strong> Hb-Wert "falsch" niedrig ("Dilutionsanämie").</li>
                </ul>`
            },
            {
                title: "Disposition",
                html: `<ul>
                    <li><strong>Ambulante Abklärung:</strong> Anämie als Zufallsbefund / asymptomatisch ohne Hinweis auf akute Blutung/Hämolyse/Leukämie.</li>
                    <li><strong>Normalstation:</strong> Symptomatische Anämie bzw. asymptomatisch mit relevanten Komorbiditäten.</li>
                    <li><strong>Überwachungsstation (IMC/ICU):</strong> Anämie-bedingte hämodynamische Instabilität oder V.a. relevante aktive Blutung.</li>
                </ul>`
            }
        ],
        stand: "10/23",
        sources: `Janz TG et al. Anemia in the emergency department: evaluation and treatment. Emerg Med Pract. 2013 Nov. – Vieth JT et al. Anemia. Emerg Med Clin North Am. 2014 Aug. – Querschnitts-Leitlinien (BÄK) zur Therapie mit Blutkomponenten 2020 – Long B et al. Emergency Medicine Evaluation and Management of Anemia. Emerg Med Clin North Am. 2018 Aug. – Fachinformationen Stand 12/22.`
    });
})();