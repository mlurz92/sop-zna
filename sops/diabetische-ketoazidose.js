(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "diabetische-ketoazidose",
        title: "Diabetische Ketoazidose",
        category: "Metabolisch",
        catKey: "metab",
        sections: [
            {
                title: "Definition",
                content: `<p><strong>Diabetische Ketoazidose (DKA):</strong> Lebensbedrohliche Stoffwechselentgleisung aufgrund eines absoluten oder relativen Insulinmangels mit Ketonämie und konsekutiver metabolischer Azidose.</p>
                <h3>Diagnosekriterien:</h3>
                <ul>
                    <li><strong>Hyperglykämie:</strong> Blutglukose > 250 mg/dl</li>
                    <li><strong>Ketonämie:</strong> ≥ 3 mmol/l bzw. <strong>Ketonurie:</strong> ≥ 2x positiv im Urinstatus</li>
                    <li><strong>Azidose:</strong> pH < 7,35 arteriell bzw. < 7,3 venös mit erniedrigtem <strong>Serumbikarbonat</strong> (&lt; 15 mmol/l)</li>
                </ul>
                <div class="callout callout-hinweis">
                    <p><strong>Sonderfall: Euglykäme Ketoazidose</strong> (z.B. unter SGLT-2-Inhibitoren, bei Schwangeren): Hier ist das Vorliegen eines Diabetes mellitus als Diagnosekriterium ausreichend, auch wenn die Blutglukosewerte nicht > 250 mg/dl liegen.</p>
                </div>`
            },
            {
                title: "Ursachen",
                content: `<ul>
                    <li>Erstmanifestation eines Diabetes mellitus Typ 1</li>
                    <li>Unterbrochene Insulintherapie (fehlende Therapieadhärenz, Applikationsfehler, Insulinpumpendefekt, Suizidalität)</li>
                    <li>Infektion (Gastroenteritis, Harnwegsinfekt, Pneumonie, etc.)</li>
                    <li>Schwere Akuterkrankung (akuter Myokardinfarkt, Pankreatitis, zerebrovaskuläres Ereignis, etc.)</li>
                    <li>Medikamente (Glukokortikoide, Immuncheckpoint-Inhibitoren, SGLT-2-Inhibitoren, etc.)</li>
                </ul>`
            },
            {
                title: "Symptome",
                content: `<ul>
                    <li>Appetitlosigkeit, Übelkeit, Erbrechen, abdominelle Schmerzen bis <strong>Pseudoperitonitis</strong></li>
                    <li><strong>Zeichen der Exsikkose:</strong> reduzierter Hautturgor, Muskelkrämpfe, Hypotonie, Tachykardie, Oligo-/Anurie nach zunächst osmotischer Polyurie</li>
                    <li>Stark vertiefte, normofrequente bis leicht beschleunigte Atmung (<strong>"Kussmaul-Atmung"</strong>)</li>
                    <li>Somnolenz bis Koma</li>
                    <li>ggf. oligo- bis asymptomatisch oder Symptome der zugrundeliegenden Akuterkrankung führend</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                content: `<ul>
                    <li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur)</li>
                    <li><strong>2x großlumiger venöser Zugang</strong></li>
                    <li><strong>Venöse BGA:</strong> pH? pCO₂? BE? Hb? E’lyte? Glukose? Laktat? Anionenlücke?</li>
                    <li><strong>Labor:</strong> BB, CRP, E’lyte inkl. <strong>Magnesium und Phosphat</strong>, NW, HbA1c, ggf.: Serumosmolalität, 3-Hydroxybutyrat, PCT, hs-Troponin, Lipase, TSH, Alkohol, β-HCG</li>
                    <li><strong>12-Kanal EKG:</strong> Herzrhythmusstörungen? Ischämiezeichen? Hyperkaliämiezeichen?</li>
                    <li><strong>Urinstatus/-stix:</strong> Ketone ≥ 2x positiv? oder <strong>Blutketonkörpermessung</strong> (mittels validiertem POCT-Gerät)</li>
                    <li><strong>Anamnese:</strong> Symptombeginn? Polyurie/-dipsie? DM bekannt? Therapieadhärenz? Insulinmanagement? Abgelaufenes Insulin?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Vigilanz? Acetongeruch? Abdomineller Druckschmerz?</li>
                    <li><strong>ggf. cCT:</strong> Ausschluss einer intrakraniellen Akutpathologie bei schwerer Vigilanzminderung.</li>
                    <li><strong>ggf. Infektfokussuche:</strong> ≥ 2x BK, Urinstatus/-kultur, POCUS, Röntgen-Thorax.</li>
                </ul>
                <h3>Abhängig von dem Schweregrad der Ketoazidose:</h3>
                <ul>
                    <li>Anlage eines DK (Urinmonitoring, Bilanzierung)</li>
                    <li>Anlage einer Magensonde bei Gastroparese mit persistierendem Erbrechen (<strong>Aspirationsgefahr!</strong>)</li>
                    <li>Anlage eines zentralen Venenkatheters (bei Notwendigkeit hochdosierter Kaliumsubstitution)</li>
                    <li>Anlage eines arteriellen Zugangs (bei hämodynamischer Instabilität)</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p>Frühzeitige Rücksprache mit Überwachungsstation (IMC/ICU)!</p>
                </div>`
            },
            {
                title: "Therapie",
                content: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li>Ursachen beheben (Infektbehandlung, auslösende Medikamente absetzen).</li>
                    <li><strong>Insulinpumpe:</strong> falls vorhanden abschalten und diskonnektieren, NICHT weiterverwenden.</li>
                    <li><strong>Intensivmedizinische Überwachung:</strong>
                        <ul>
                            <li>Initial alle 30 Min.: Vitalparameter (RR, HF, SpO₂, AF).</li>
                            <li>Initial alle 60 Min.: Vigilanzkontrolle (GCS, Pupillen), BGA, E'lyte, Glukose, Urinausscheidung.</li>
                            <li>Regelmäßig (z.B. alle 8h): Ketonkörper im Urin.</li>
                        </ul>
                    </li>
                    <li><strong>BZ-Senkung:</strong> um 50 - (max.) 100 mg/dl pro Stunde, nicht unter 250 mg/dl in ersten 24h senken.</li>
                    <li><strong>Kriterien für Durchbrechung der DKA:</strong> Blutglukose < 200 mg/dl, Serumbikarbonat ≥ 18 mmol/l, venöser pH > 7,3.</li>
                </ul>

                <h3>1. Flüssigkeitssubstitution</h3>
                <ul>
                    <li>Initial <strong>1000 ml Sterofundin über 1 h i.v.</strong>, dann Reduktion auf 250-500 ml/h (s. Schema).</li>
                    <li>Gesamtvolumenbedarf ca. 100 ml/kg KG (z.B. 7 l bei 70 kg KG).</li>
                    <li>Ziel: MAD > 65 mmHg, Exsikkose-Ausgleich, Diurese > 0,5 ml/kg KG/h.</li>
                    <li><span class="callout-cave"><strong>CAVE:</strong> An Volumenstatus, Komorbiditäten und kardiale Leistungsfähigkeit anpassen!</span></li>
                </ul>

                <h3>2. Insulintherapie</h3>
                <ul>
                    <li><strong>Sofortiger Beginn</strong> mit Insulinperfusor (50 IE auf 50 ml): <strong>0,05-0,1 IE/kg KG/h i.v.</strong> (z.B. 4 IE/h bei 80 kg KG, max. LR: 15 IE/h).</li>
                    <li>Nur bei <strong>Hypokaliämie (Kalium < 3,3 mmol/l)</strong> verzögert beginnen bzw. pausieren.</li>
                    <li>Ab Blutglukose von <strong>250 mg/dl</strong> oder bei zu raschem Abfall: <strong>G10% parallel</strong> mitlaufen lassen (Start mit 125 ml/h).</li>
                    <li>Umstellung auf Insulin s.c.: erst wenn Patient isst. <span class="callout-cave"><strong>WICHTIG:</strong> Insulinperfusor mind. 60 min überlappend weiterführen!</span></li>
                </ul>

                <h3>3. Kaliumsubstitution</h3>
                <ul>
                    <li>Kaliumsubstitution bereits bei <strong>hochnormalen Werten</strong>, sofern keine Anurie vorliegt.</li>
                    <li><strong>Ziel-Kalium: 4-5 mmol/l.</strong></li>
                    <li>Ziel: Ersetzen des Gesamtkaliumdefizits, Vermeiden einer Hypokaliämie durch Insulinwirkung.</li>
                </ul>

                <h3>Sonstiges</h3>
                <ul>
                    <li><strong>Hypophosphatämie:</strong> Phosphat substituieren, falls Patient symptomatisch (Atem-/Skelettmuskelschwäche).</li>
                    <li><strong>Hypomagnesiämie:</strong> Magnesium substituieren (z.B. 2 g als Kurzinfusion i.v.).</li>
                    <li><strong>Natriumbikarbonat:</strong> (50 mmol 8,4 % NaBic über 1 h i.v.) allenfalls bei <strong>pH < 7,0</strong> erwägen, Pufferung nur bis pH 7,1.</li>
                </ul>`
            },
            {
                title: "Substitutionstabellen (S3-Leitlinie 2023)",
                content: `<div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Infusionslösung (Sterofundin)</th>
                                <th>Menge und Zeitraum</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>1000 ml Vollelektrolytlösung</td><td>über die erste Stunde</td></tr>
                            <tr><td>1000 ml mit Kaliumchlorid</td><td>über die nächsten zwei Stunden</td></tr>
                            <tr><td>1000 ml mit Kaliumchlorid</td><td>über die nächsten zwei Stunden</td></tr>
                            <tr><td>1000 ml mit Kaliumchlorid</td><td>über die nächsten vier Stunden</td></tr>
                            <tr><td>1000 ml mit Kaliumchlorid</td><td>über die nächsten vier Stunden</td></tr>
                            <tr><td>1000 ml mit Kaliumchlorid</td><td>über die nächsten sechs Stunden</td></tr>
                        </tbody>
                    </table>
                </div>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Kaliumspiegel (mmol/l)</th>
                                <th>Kaliumzugabe pro 1000 ml Infusion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>> 5,5</td><td>Keine</td></tr>
                            <tr><td>3,5 - 5,5</td><td>40 mval/l (≙ 40 mmol/l)</td></tr>
                            <tr><td>< 3,5</td><td>Hochdosiert über Perfusor via ZVK (z.B. 20 mval/h)</td></tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Merke",
                content: `<ul>
                    <li>Die drei Säulen: <strong>Flüssigkeit, Insulin, Kalium.</strong></li>
                    <li>Mischbild aus DKA und hyperosmolarem hyperglykämischem Syndrom (HHS) möglich.</li>
                    <li>Bei <strong>euglykämer DKA:</strong> Mit Beginn der Insulintherapie direkt auch G10% (z.B. 125 ml/h) starten, SGLT-2-Inhibitor absetzen.</li>
                    <li>Leukozytose bei DKA auch ohne Infekt häufig.</li>
                    <li><strong>Gefahr des Hirnödems:</strong> insb. bei &lt; 25-Jährigen durch zu schnelle Glukosesenkung oder zu aggressive Volumensubstitution.</li>
                    <li><strong>V.a. Hirnödem:</strong> sofortiges cCT und Beginn Hirndruck-senkender Maßnahmen (Oberkörper 30°, Mannitol), wenn Kopfschmerz, Vigilanzminderung oder Pupillenänderung unter Therapie auftreten.</li>
                    <li>Hypertone Hyponatriämie bei DKA häufig, i.d.R. KEINE Natriumsubstitution indiziert.</li>
                    <li>BGA-Geräte zeigen oft "high" &rarr; Laborabnahme für exakte Werte zwingend notwendig.</li>
                </ul>`
            },
            {
                title: "Disposition & Schweregrade",
                content: `<div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Parameter</th>
                                <th>Leicht</th>
                                <th>Mittel</th>
                                <th>Schwer</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>pH-Wert</strong></td><td>&lt; 7,3</td><td>&le; 7,2</td><td>&le; 7,1</td></tr>
                            <tr><td><strong>Bikarbonat</strong></td><td>&lt; 15 mmol/l</td><td>&le; 10 mmol/l</td><td>&lt; 5 mmol/l</td></tr>
                        </tbody>
                    </table>
                </div>
                <ul>
                    <li><strong>Leichte DKA:</strong> Normalstation, ggf. ambulantes Procedere.</li>
                    <li><strong>Mittlere oder schwere DKA:</strong> Überwachungsstation (IMC/ICU).</li>
                </ul>`
            }
        ],
        date: "10/24",
        sources: `Deutsche Diabetes Gesellschaft (DDG). S3-Leitlinie Therapie des Typ-1-Diabetes. Version 5.1, 2023. – Dhatariya KK et al. Diabetic ketoacidosis. Nat Rev Dis Primers. 2020. – JBDS-IP. The Management of Diabetic Ketoacidosis in Adults. 2013/2023. – Self WH et al. Clinical Effects of Balanced Crystalloids vs Saline in Adults With DKA. JAMA Netw Open. 2020. – Fachinformationen Stand 12/22.`
    });
})();