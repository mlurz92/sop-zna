(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "sepsis",
        title: "Sepsis",
        category: "Infektiologie",
        catKey: "infekt",
        stand: "10/25",
        sections: [
            {
                title: "Definition",
                html: `<ul>
                    <li><strong>Sepsis:</strong> Akut lebensbedrohliche Organdysfunktion aufgrund einer inadäquaten Wirtsantwort auf eine Infektion.</li>
                    <li><strong>Septischer Schock:</strong> Sepsis mit trotz adäquater Volumentherapie persistierender arterieller Hypotonie und Laktatwert im Blut > 2 mmol/l mit Notwendigkeit einer Vasopressortherapie, um einen mittleren arteriellen Blutdruck ≥ 65 mmHg zu erreichen.</li>
                    <li><strong>Organdysfunktion:</strong> Anstieg des SOFA-Scores ≥ 2 Punkte.</li>
                </ul>`
            },
            {
                title: "Ursachen",
                html: `<ul>
                    <li><strong>Meist bakterielle Infektion</strong>, selten Viren, Pilze oder Parasiten.</li>
                    <li><strong>Häufige Infektionsorte:</strong>
                        <ul>
                            <li>Pulmonal</li>
                            <li>Urogenital</li>
                            <li>Abdominell</li>
                            <li>Sonstige (Haut- und Weichteile, ZNS, Blutstrominfektion, etc.)</li>
                        </ul>
                    </li>
                </ul>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li>Keine spezifischen Symptome.</li>
                    <li>Reduktion des Allgemeinzustandes, schweres Krankheitsgefühl.</li>
                    <li>Fieber, Schüttelfrost, aber auch Normo- oder Hypothermie.</li>
                    <li>Tachypnoe, Verwirrtheit, Hypotonie (Leitsymptome des qSOFA-Scores).</li>
                    <li>Symptome entsprechend dem zugrundeliegenden Infektionsort.</li>
                    <li>Symptome der Organdysfunktion (Anurie, Hypoxämie, etc.).</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li><strong>Ersteindruck + ABCDE + Vitalparameter</strong> (RR, Puls, SpO₂, AF, Temperatur).</li>
                    <li><strong>2x großlumige venöse Zugänge.</strong></li>
                    <li><strong>Venöse bzw. arterielle BGA</strong> (pO₂? pH? BE? Laktat? Glukose?).</li>
                    <li><strong>Labor:</strong> BB, CRP, E'lyte, NW, Bilirubin, Gerinnung, PCT, ggf.: Leberwerte, TSH, Influenza-PCR, SARS-CoV-2-PCR.</li>
                    <li><strong>≥ 2 Paar Blutkulturen</strong>, ggf. Gewinnung von weiteren Mibi-Probematerialien (z.B. Sputum, Wundabstrich).</li>
                    <li><strong>12-Kanal-EKG</strong> (Ischämiezeichen? Herzrhythmusstörungen?).</li>
                    <li><strong>Anamnese:</strong> Husten? Dysurie? Hals-, Kopf-, Rücken-, Gelenk-, Bauchschmerzen? Effloreszenzen? Kürzlich erfolgte Eingriffe? Fremdmaterial? Medikamente? Immunsuppression? Letzter Krankenhausaufenthalt? Vorerkrankungen? Reiseanamnese?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Vigilanz? Rekap-Zeit? Marmorierte Haut? Herzgeräusch? Pulmo? Abdomen? Erysipel? Petechien? Gelenke? Fremdmaterial?</li>
                    <li><strong>DK-Anlage</strong> (Urinmonitoring und Bilanzierung) + <strong>Urinstatus/-kultur</strong>.</li>
                    <li><strong>POCUS:</strong> Infektfokus? Volumenstatus? Kardiale Leistungsfähigkeit?</li>
                    <li><strong>Röntgen-Thorax:</strong> Infiltrate?</li>
                    <li><strong>ggf. erweiterte Infektfokussuche:</strong> z.B. CT-Thorax/Abdomen, Lumbalpunktion, TEE.</li>
                    <li><strong>Abhängig vom klinischen Zustand des Patienten:</strong>
                        <ul>
                            <li>Anlage eines <strong>zentralen Venenkatheters</strong> (bei Notwendigkeit einer längerfristigen Katecholamintherapie, Monitoring der ScvO₂).</li>
                            <li>Anlage eines <strong>arteriellen Zugangs</strong> (bei hämodynamischer Instabilität oder respiratorischer Kompromittierung).</li>
                        </ul>
                    </li>
                </ul>
                <div class="callout callout-wichtig">
                    <p><strong>Frühzeitige Rücksprache mit Überwachungsstation (IMC/ICU)!</strong></p>
                </div>`
            },
            {
                title: "SOFA (Sequential Organ Failure Assessment) - Score",
                html: `<div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Organ / Parameter</th>
                                <th>Einheit</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>4</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Lunge</strong> (PaO₂/FiO₂)</td>
                                <td>mmHg</td>
                                <td>< 400</td>
                                <td>< 300</td>
                                <td>< 200¹</td>
                                <td>< 100¹</td>
                            </tr>
                            <tr>
                                <td><strong>Nieren</strong> (Kreatinin)</td>
                                <td>mg/dl</td>
                                <td>1,2–1,9</td>
                                <td>2,0–3,4</td>
                                <td>3,5–4,9²</td>
                                <td>≥ 5³</td>
                            </tr>
                            <tr>
                                <td><strong>Leber</strong> (Bilirubin)</td>
                                <td>mg/dl</td>
                                <td>1,2–1,9</td>
                                <td>2,0–5,9</td>
                                <td>6–11,9</td>
                                <td>≥ 12</td>
                            </tr>
                            <tr>
                                <td><strong>Kreislauf</strong> (MAD / Kat.)</td>
                                <td>mmHg</td>
                                <td>< 70</td>
                                <td>niedrig⁴</td>
                                <td>mittel⁴</td>
                                <td>hoch⁴</td>
                            </tr>
                            <tr>
                                <td><strong>Blutbild</strong> (Thrombozyten)</td>
                                <td>/nl</td>
                                <td>< 150</td>
                                <td>< 100</td>
                                <td>< 50</td>
                                <td>< 20</td>
                            </tr>
                            <tr>
                                <td><strong>ZNS</strong> (GCS)</td>
                                <td>Punkte</td>
                                <td>13–14</td>
                                <td>10–12</td>
                                <td>6–9</td>
                                <td>< 6</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p><small>¹ unter mechanischer Beatmung (CPAP, invasive Beatmung, etc.)<br>
                ² bzw. Oligurie < 500 ml Urin/d | ³ bzw. Anurie < 200 ml Urin/d<br>
                ⁴ Katecholamine (jeweils über mindestens 1h):<br>
                → <strong>niedrig:</strong> Dobutamin in jeglicher Dosierung<br>
                → <strong>mittel:</strong> (Nor-)Adrenalin ≤ 0,1 μg/kgKG/min<br>
                → <strong>hoch:</strong> (Nor-)Adrenalin > 0,1 μg/kgKG/min</small></p>`
            },
            {
                title: "Therapie",
                html: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li>Stabilisierung der Vitalfunktionen gemäß ABCDE-Schema.</li>
                </ul>
                <h3>Kreislaufstabilisierung</h3>
                <ul>
                    <li><strong>Vollelektrolytlösung</strong> (mind. 30 ml/kg KG ≙ ca. 2 l) bei Hypoperfusion oder Schock spätestens innerhalb von 3 h infundieren.
                        <div class="callout callout-cave"><p><strong>CAVE:</strong> An Volumenstatus, Komorbiditäten und kardiale Leistungsfähigkeit anpassen!</p></div>
                    </li>
                    <li>Weitere Volumengabe in Abhängigkeit von Hämodynamik und Volumenstatus (Orientierung an Vitalparametern, Rekap-Zeit, Diurese, Laktat, POCUS, „Passive Leg Raise“, etc.).</li>
                    <li><strong>ggf. Noradrenalin (Arterenol®)</strong> (wenn MAD < 65 mmHg trotz adäquater Volumensubstitution bzw. ggf. gleich zu Beginn parallel):
                        <ul>
                            <li><strong>Push Dose Pressor:</strong> initial 10 µg repetitiv i.v. (1 mg Noradrenalin auf 100 ml NaCl 0,9 % verdünnt, davon jeweils 1 ml Boli).</li>
                            <li><strong>Perfusor peripher:</strong> (1 kleine Ampulle Noradrenalin ≙ 1 mg/1 ml + 49 ml NaCl 0,9 % ≙ 1 mg/50 ml ≙ 0,02 mg/ml): <strong>Start mit 20 ml/h.</strong></li>
                            <li><strong>Perfusor zentral:</strong> (1 große Ampulle Noradrenalin ≙ 10 mg/10 ml + 40 ml NaCl 0,9 % ≙ 10 mg/50 ml ≙ 0,2 mg/ml): <strong>Start mit 2 ml/h.</strong></li>
                        </ul>
                    </li>
                </ul>
                <h3>Zielparameter</h3>
                <ul>
                    <li>Kreislaufstabilisierung (MAD ≥ 65 mmHg).</li>
                    <li>Normalisierung des Laktatwerts (Kontrolle innerhalb von 2–4 h).</li>
                    <li>Normalisierung der Rekap-Zeit.</li>
                </ul>
                <h3>Antiinfektive Therapie</h3>
                <ul>
                    <li><strong>Breitspektrumantibiotikum i.v.</strong> nach Klinikstandard (z.B. Piperacillin/Tazobactam 4,5 g 1-1-1-1 i.v. bei unbekanntem Fokus, ambulant erworben).</li>
                    <li><strong>Schnellstmöglich</strong>, bei septischem Schock idealerweise <strong>≤ 1 h</strong>.</li>
                    <li>Bei V.a. Sepsis ohne Schocksymptomatik <strong>≤ 3 h</strong> (wenn V.a. Sepsis nach Diagnostik weiterhin besteht).</li>
                </ul>
                <h3>Fokussanierung</h3>
                <ul>
                    <li>Sofortiger Wechsel der Zugänge bzw. Devices (z.B. DK, ZVK, etc.) bei vermutetem Infektfokus in diesem Bereich.</li>
                    <li>Schnellstmögliche Sanierung (z.B. Cholezystektomie, Drainieren eines Abszesses, etc.).</li>
                </ul>`
            },
            {
                title: "Diagnostischer Algorithmus",
                html: `<h3>Verdacht auf Infektion</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>SIRS (≥ 2 Kriterien)</th>
                                <th>qSOFA Score (≥ 2 Kriterien)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    • Temperatur > 38 oder < 36 °C<br>
                                    • Herzfrequenz > 90/min<br>
                                    • AF > 20/min bzw. pCO₂ < 33 mmHg und/oder Beatmung<br>
                                    • Leukozyten < 4/nl / > 12/nl oder ≥ 10 % unreife Neutrophile
                                </td>
                                <td>
                                    • Atemfrequenz ≥ 22/min<br>
                                    • Systolischer Blutdruck ≤ 100 mmHg<br>
                                    • Verändertes Bewusstsein
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="callout callout-hinweis">
                    <p>Liegen ≥ 2 Kriterien eines Scores vor → <strong>V.a. Sepsis</strong></p>
                </div>
                <h3>Sepsis-Bundle & Fokussuche</h3>
                <ul>
                    <li><strong>Sepsis-Bundle:</strong>
                        <ul>
                            <li>BGA mit Laktatmessung</li>
                            <li>≥ 2 Paar Blutkulturen (vor Antibiotikatherapie)</li>
                            <li>Breitspektrumantibiotikum i.v.</li>
                            <li>Volumen (30 ml/kg KG VEL) bei Hypoperfusion oder Schock</li>
                            <li>Katecholamine bei MAD < 65 mmHg trotz Volumengabe</li>
                        </ul>
                    </li>
                    <li><strong>Infektfokussuche:</strong> Urinstatus, POCUS, Röntgen-Thorax, ggf. CT, LP, TEE.</li>
                </ul>`
            },
            {
                title: "Akronym „LUCCAASS-PRO“ (Infektfokussuche)",
                html: `<p>Merkhilfe wichtiger Infektfoki:</p>
                <ul>
                    <li><strong>L</strong>ung: z.B. Pneumonie</li>
                    <li><strong>U</strong>rine: z.B. Harnwegsinfekt, Pyelonephritis</li>
                    <li><strong>C</strong>entral nervous system: z.B. Meningitis, Enzephalitis</li>
                    <li><strong>C</strong>ardiac: z.B. Endokarditis</li>
                    <li><strong>A</strong>bdomen: z.B. Abszess, Cholezystitis, Appendizitis</li>
                    <li><strong>A</strong>rthritis: septische Arthritis</li>
                    <li><strong>S</strong>kin: z.B. Erysipel, nekrotisierende Fasziitis, Katheter-/Portinfektion</li>
                    <li><strong>S</strong>pine: z.B. Spondylodiszitis</li>
                    <li><strong>P</strong>rostatitis</li>
                    <li><strong>R</strong>ecent Operation: z.B. Anastomoseninsuffizienz, Wundinfektion</li>
                    <li><strong>O</strong>ther: Infektfoki im HNO-/Zahnbereich, einliegende Fremdkörper wie z.B. Tampons</li>
                </ul>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li><strong>Sepsis = zeitkritischer Notfall!</strong></li>
                    <li><strong>Sepsis-Bundle:</strong> Blutkulturen, BGA mit Laktatmessung, Breitspektrumantibiotikum, Volumen + ggf. Katecholamintherapie.</li>
                    <li>Bei Patienten mit septischem Schock sollte die <strong>Rekap-Zeit</strong> zur Beurteilung der Gewebeperfusion genutzt werden.</li>
                    <li>Entnahme von <strong>≥ 2 Paar Blutkulturen</strong> aus einer Entnahmestelle (bei intravaskulären Devices zusätzliche BK hieraus) unabhängig von der Körpertemperatur und vor Antibiotikatherapie (ohne diese zu verzögern).</li>
                    <li>Kombination von verschiedenen Sepsis-Screening-Tools sinnvoll (z.B. qSOFA + SIRS).</li>
                    <li>Sepsis + positiver Urinstatus nicht immer gleich Urosepsis, eine gründliche Fokussuche bleibt obligat (s. LUCCAASS-PRO).</li>
                </ul>`
            },
            {
                title: "Disposition",
                html: `<ul>
                    <li><strong>Überwachungsstation (IMC/ICU) < 6 h.</strong></li>
                </ul>`
            }
        ],
        sources: `S3-Leitlinie: Sepsis – Prävention, Diagnose, Therapie und Nachsorge Update 2025 (AWMF 079-001).<br>
        Surviving Sepsis Campaign 2021. Intensive Care Med. 2021.<br>
        Wolfertz N et al. EpiSEP study. Front Med 2022.<br>
        Long et al. Practical Considerations in Sepsis Resuscitation. J Emerg Med. 2017.`
    });
})();