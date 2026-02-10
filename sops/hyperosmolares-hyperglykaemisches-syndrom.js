(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "hyperosmolares-hyperglykaemisches-syndrom",
        title: "Hyperosmolares Hyperglykämisches Syndrom (HHS)",
        category: "Metabolisch",
        catKey: "metab",
        sections: [
            {
                title: "Definition",
                content: `<p><strong>Hyperosmolares Hyperglykämisches Syndrom (HHS):</strong> Lebensbedrohliche Stoffwechselentgleisung aufgrund eines relativen Insulinmangels mit Hyperglykämie, Hyperosmolalität und Hypovolämie ohne relevante Ketonämie bzw. Azidose.</p>
                <h3>Diagnosekriterien:</h3>
                <ul>
                    <li><strong>Hyperglykämie:</strong> Blutglukose ≥ 540 mg/dl</li>
                    <li><strong>Hyperosmolalität:</strong> Serumosmolalität ≥ 320 mOsm/kg</li>
                    <li><strong>Ausgeprägte Hypovolämie</strong></li>
                    <li><strong>Keine relevante Ketonämie:</strong> (ß-Hydroxybutyrat ≤ 3 mmol/l) bzw. <strong>Ketonurie</strong> (< 2x positiv im Urinstatus)</li>
                    <li><strong>Keine relevante Azidose:</strong> (pH ≥ 7,3 und Serumbikarbonat ≥ 15 mmol/l)</li>
                </ul>`
            },
            {
                title: "Ursachen",
                content: `<ul>
                    <li><strong>Infektion:</strong> Harnwegsinfekt, Pneumonie, etc.</li>
                    <li><strong>Schwere Akuterkrankung:</strong> akuter Myokardinfarkt, zerebrovaskuläres Ereignis, Pankreatitis, etc.</li>
                    <li><strong>Unterbrochene antidiabetische Therapie:</strong> fehlende Therapieadhärenz, Applikationsfehler, Suizidalität.</li>
                    <li><strong>Medikamente:</strong> Glukokortikoide, Antipsychotika, etc.</li>
                    <li><strong>Erstmanifestation</strong> eines Diabetes mellitus Typ 2.</li>
                </ul>`
            },
            {
                title: "Symptome",
                content: `<ul>
                    <li>Polyurie, Polydipsie, Verschwommensehen.</li>
                    <li><strong>Zeichen der Exsikkose:</strong> reduzierter Hautturgor, Muskelkrämpfe, Hypotonie, Tachykardie.</li>
                    <li>Oligo-/Anurie nach zunächst osmotischer Polyurie.</li>
                    <li>Somnolenz bis Koma.</li>
                    <li>ggf. oligosymptomatisch oder Symptome der zugrundeliegenden Akuterkrankung führend.</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                content: `<ul>
                    <li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur).</li>
                    <li>2x großlumiger venöser Zugang.</li>
                    <li><strong>Venöse BGA:</strong> pH? pCO₂? BE? Hb? E’lyte? Glukose? Laktat?</li>
                    <li><strong>Labor:</strong> BB, CRP, E’lyte, NW, HbA1c, Serumosmolalität, 3-Hydroxybutyrat, PCT, hs-Troponin, Lipase, TSH, Alkohol, β-HCG.</li>
                    <li><strong>Formel zur Berechnung der Serumosmolalität:</strong><br>
                    <code>2x Natrium [mmol/l] + Glukose [mg/dl]/18 + Harnstoff [mg/dl]/6</code><br>
                    (Normwerte: 275-295 mOsm/kg)</li>
                    <li>12-Kanal EKG (Herzrhythmusstörungen? Ischämiezeichen?).</li>
                    <li><strong>DK-Anlage:</strong> Urinmonitoring, Bilanzierung + Urinstatus/-stix z.A. einer relevanten Ketonurie.</li>
                    <li><strong>Anamnese:</strong> Beginn? Polyurie/-dipsie? Gewichtsverlust? DM bekannt? Vorerkrankungen? Infektzeichen? Medikamente? Insulinmanagement?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Vigilanz? Fokal-neurologisches Defizit? Exsikkose? Infektion? Diabetisches Fußsyndrom?</li>
                    <li><strong>Bildgebung:</strong> ggf. cCT (Ausschluss intrakranielle Pathologie bei schwerer Vigilanzminderung) und Infektfokussuche (BK, Urinkultur, POCUS, Rö-Thorax).</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p><strong>Erweiterte Maßnahmen in der Notaufnahme:</strong></p>
                    <ul>
                        <li>Anlage eines <strong>ZVK</strong> (bei Notwendigkeit hochdosierter Kaliumsubstitution oder Katecholamintherapie).</li>
                        <li>Anlage eines <strong>arteriellen Zugangs</strong> (bei hämodynamischer Instabilität oder respiratorischer Kompromittierung).</li>
                    </ul>
                </div>`
            },
            {
                title: "Therapie",
                content: `<h3>Allgemeinmaßnahmen & Überwachung</h3>
                <ul>
                    <li>Ursachen beheben (Antibiotika bei Infekt, Akuterkrankung behandeln).</li>
                    <li><strong>Intensivmedizinische Überwachung:</strong>
                        <ul>
                            <li>Initial alle 30 Min.: Vitalparameter (RR, HF, SpO₂, AF).</li>
                            <li>Initial alle 60 Min.: Vigilanzkontrolle (GCS, Pupillen), BGA, Labor (E’lyte, Glukose, Harnstoff), Urinausscheidung, Serumosmolalität, Ketonkörper.</li>
                        </ul>
                    </li>
                    <li><strong>Senkungsziele:</strong>
                        <ul>
                            <li>BZ-Senkung: 50 - max. 90 mg/dl pro Stunde.</li>
                            <li>Nicht unter 180 mg/dl in den ersten 24 h senken (Zielbereich: 180-270 mg/dl).</li>
                            <li>Maximale Natrium-Senkung: 10-12 mmol/l pro Tag (s. SOP Hypernatriämie).</li>
                            <li>Kontinuierliche Senkung der Serumosmolalität: 3-8 mOsm/kg/h (konservativer: max. 1 mOsm/kg/h ≙ 24 mOsm/kg/d).</li>
                        </ul>
                    </li>
                </ul>

                <h3>1. Flüssigkeitssubstitution</h3>
                <ul>
                    <li>Initial <strong>1000 ml Sterofundin über 1 h i.v.</strong>, dann Reduktion auf 250-500 ml/h.</li>
                    <li>Gesamtvolumenbedarf: ca. <strong>100-220 ml/kg KG</strong> (z.B. 7-15 l bei 70 kg KG).</li>
                    <li>Ziel: MAD > 65 mmHg, Exsikkose-Ausgleich, Diurese > 0,5 ml/kg KG/h.</li>
                    <li><span class="callout callout-cave"><strong>CAVE:</strong> An Volumenstatus, Komorbiditäten und kardiale Leistungsfähigkeit anpassen!</span></li>
                </ul>

                <h3>2. Insulintherapie</h3>
                <ul>
                    <li>Erst starten, wenn BZ unter Volumensubstitution unzureichend fällt oder bei Ketonämie/Ketonurie.</li>
                    <li>Beginn mit <strong>Insulinperfusor: 0,05 IE/kg KG/h i.v.</strong> (z.B. 4 IE/h bei 80 kg KG).</li>
                    <li>Pausieren/verzögern bei <strong>Hypokaliämie (Kalium < 3,3 mmol/l)</strong>.</li>
                    <li>Ab BZ 250 mg/dl oder bei zu raschem Abfall: <strong>G10% parallel</strong> (Start mit 125 ml/h).</li>
                </ul>

                <h3>3. Kaliumsubstitution</h3>
                <ul>
                    <li>Substitution bereits bei hochnormalen Werten, sofern keine Anurie.</li>
                    <li><strong>Ziel-Kalium: 4-5 mmol/l.</strong></li>
                    <li>Ziel: Ersetzen des Gesamtkaliumdefizits, Vermeiden einer Hypokaliämie durch Insulinwirkung.</li>
                </ul>`
            },
            {
                title: "Substitutionstabellen",
                content: `<div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Infusionslösung (Sterofundin)</th>
                                <th>Zeitraum</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>1000 ml Vollelektrolytlösung</td><td>über die erste Stunde</td></tr>
                            <tr><td>1000 ml + Kaliumchlorid</td><td>über die nächsten zwei Stunden</td></tr>
                            <tr><td>1000 ml + Kaliumchlorid</td><td>über die nächsten zwei Stunden</td></tr>
                            <tr><td>1000 ml + Kaliumchlorid</td><td>über die nächsten vier Stunden</td></tr>
                            <tr><td>1000 ml + Kaliumchlorid</td><td>über die nächsten vier Stunden</td></tr>
                            <tr><td>1000 ml + Kaliumchlorid</td><td>über die nächsten sechs Stunden</td></tr>
                        </tbody>
                    </table>
                </div>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Kaliumspiegel (mmol/l)</th>
                                <th>Zugabe pro 1000 ml Lösung (mval)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>> 5,5</td><td>Keine</td></tr>
                            <tr><td>3,5 - 5,5</td><td>40</td></tr>
                            <tr><td>< 3,5</td><td>Hochdosiert via ZVK (z.B. 20 mval/h)</td></tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "HHS vs. DKA - Unterschiede",
                content: `<div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Parameter</th>
                                <th>DKA</th>
                                <th>HHS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Patienten</strong></td><td>meist Typ 1 DM, jung</td><td>meist Typ 2 DM, älter</td></tr>
                            <tr><td><strong>Entwicklung</strong></td><td>Stunden bis Tage</td><td>Tage bis Wochen</td></tr>
                            <tr><td><strong>Relevante Ketose</strong></td><td>ja</td><td>nein (ggf. spät)</td></tr>
                            <tr><td><strong>Relevante Azidose</strong></td><td>ja</td><td>nein</td></tr>
                            <tr><td><strong>Osmolalität</strong></td><td>normal</td><td>erhöht</td></tr>
                            <tr><td><strong>Atemmuster</strong></td><td>Kussmaul / Aceton</td><td>nein</td></tr>
                            <tr><td><strong>Volumenbedarf</strong></td><td>erhöht</td><td>deutlich erhöht</td></tr>
                            <tr><td><strong>Insulinperfusor</strong></td><td>sofort starten</td><td>verzögert starten</td></tr>
                            <tr><td><strong>Mortalität</strong></td><td>erhöht</td><td>deutlich erhöht</td></tr>
                        </tbody>
                    </table>
                </div>
                <p><em>Mischbild aus diabetischer Ketoazidose und HHS ist in ca. 1/3 der Fälle möglich.</em></p>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li>Bei sehr hohen BZ-Werten zeigen BGA-Geräte oft nur "high" oder > 541 mg/dl &rarr; <strong>Laborabnahme obligat!</strong></li>
                    <li><strong>Korrekturfaktor Natrium:</strong> Korrigiertes Natrium ist um 2,4 mmol/l höher pro 100 mg/dl Glukose-Erhöhung ab 100 mg/dl.<br>
                    <em>Beispiel: Na 125, BZ 600 &rarr; korrigiertes Na 137.</em></li>
                    <li>Natrium steigt "spontan" mit fallendem BZ an; hierbei besteht <strong>keine Gefahr</strong> eines osmotischen Demyelinisierungssyndroms trotz schnellem Anstieg.</li>
                    <li><strong>Hirnödem-Gefahr:</strong> Bei zu schneller Glukosesenkung und zu aggressiver Volumensubstitution.</li>
                    <li><strong>V.a. Hirnödem:</strong> Bei Vigilanzänderung, Kopfschmerz, Erbrechen oder Pupillendifferenz &rarr; sofortiges cCT und Hirndrucktherapie (30° Lagerung, Mannitol).</li>
                </ul>`
            },
            {
                title: "Disposition",
                html: `<ul>
                    <li><strong>Überwachungsstation (IMC/ICU)</strong></li>
                </ul>`
            }
        ],
        stand: "09/24",
        sources: `Deutsche Diabetes Gesellschaft (DDG). S3-Leitlinie Therapie des Typ-1-Diabetes. Version 5.1, 2023.
        <br>Mustafa OG et al. Joint British Diabetes Societies (JBDS). Management of hyperosmolar hyperglycaemic state (HHS) in adults: an updated guideline. 2023.
        <br>Umpierrez G et al. Hyperglycemic Crises in Adults With Diabetes: A Consensus Report. Diabetes Care 2024.
        <br>Najem M et al. Serum Osmolality. StatPearls [Internet], Stand 09.09.2024.`
    });
})();