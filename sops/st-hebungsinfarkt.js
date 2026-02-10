(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "st-hebungsinfarkt",
        title: "ST-Hebungsinfarkt (STEMI)",
        category: "Kardiologie",
        catKey: "kardio",
        stand: "10/23",
        sections: [
            {
                title: "Definition",
                html: `<p><strong>ST-Hebungsinfarkt (STEMI):</strong> Akuter Myokardinfarkt mit charakteristischen ST-Streckenhebungen im EKG (Dauer > 20 min) bzw. STEMI-Äquivalenten.</p>`
            },
            {
                title: "Ursachen",
                html: `<ul>
                    <li><strong>Typ 1-Myokardinfarkt:</strong> Arteriosklerotische Plaque-Ruptur mit thrombotischem Verschluss der Koronararterie(n).</li>
                    <li><strong>Typ 2-Myokardinfarkt:</strong> Missverhältnis der myokardialen Sauerstoffversorgung (Hypoxämie, Anämie, Koronarspasmen, Schock, etc.).</li>
                </ul>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li>Retrosternales Druckgefühl mit ggf. Ausstrahlung in Arme, Hals, Kiefer oder Oberbauch.</li>
                    <li><strong>Angina-Äquivalente:</strong> z.B. „Chest-Discomfort”, Luftnot, Oberbauchschmerzen.</li>
                    <li><strong>„Stumme“ Infarkte:</strong> insbesondere bei Diabetikern und älteren Patienten.</li>
                    <li>Schwäche, Angst, vegetative Begleitsymptomatik (Übelkeit, Erbrechen, Kaltschweißigkeit).</li>
                    <li>ggf. Symptome einer Herzinsuffizienz (Dyspnoe, Lungenödem, Halsvenenstauung, Hypotonie).</li>
                    <li>ggf. Synkope.</li>
                    <li>ggf. Herzrhythmusstörungen (Ventrikuläre Tachykardie, Kammerflimmern, AV-Blockierungen, Bradykardie, usw.).</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li><strong>Ersteindruck + ABCDE + Vitalparameter</strong> (RR, Puls, SpO₂, AF, Temperatur).</li>
                    <li><strong>RR-Messung an beiden Armen</strong> (Ausschluss Aortendissektion/Differenz).</li>
                    <li><strong>1-2x venöser Zugang.</strong></li>
                    <li><strong>Venöse BGA:</strong> (Hb? E’lyte? Glukose?).</li>
                    <li><strong>Labor:</strong> BB, CRP, NW, E’lyte, Gerinnung, hs-Troponin, TSH, Lipidprofil, HbA1c. Ggf.: GOT, LDH, CK, CK-MB, pro-BNP.</li>
                    <li><strong>12-Kanal-EKG innerhalb von 10 Minuten:</strong> (Ischämiezeichen? STEMI-Äquivalente? HRST?). Ggf. mit V3/4R, V7-9 zur lokalisatorischen Erweiterung.</li>
                    <li><strong>Anamnese:</strong> Symptome? Symptombeginn? CCS bekannt? Kardiovaskuläre Risikofaktoren? Medikamente? Letzte Echokardiografie und Koronarangiografie?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Rekap-Zeit? Systolikum? Feuchte Rasselgeräusche (RG)? Halsvenenstauung? Pulsstatus?</li>
                    <li><strong>POCUS:</strong> bei hämodynamischer Instabilität, diagnostischer Unsicherheit oder V.a. mechanische Komplikationen (jedoch ohne Verzögerung der PCI).</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p><strong>Sofortige Rücksprache mit Kardiologie, Herzkatheterpflege und Überwachungsstation (IMC/ICU)!</strong></p>
                </div>`
            },
            {
                title: "EKG-Zeichen & Äquivalente",
                html: `<h3>Klassische STEMI-Kriterien</h3>
                <ul>
                    <li><strong>STEMI:</strong> ST-Hebungen ≥ 1 mm in ≥ 2 zusammenhängenden Ableitungen.
                        <ul>
                            <li><strong>Ausnahme V2/V3:</strong> ≥ 2,5 mm (Männer < 40 J), ≥ 2 mm (Männer > 40 J) und ≥ 1,5 mm (Frauen).</li>
                        </ul>
                    </li>
                    <li><strong>Hyperakute T-Welle:</strong> Hohe, prominente T-Wellen in ≥ 2 Ableitungen als frühestes Zeichen.</li>
                </ul>
                <h3>Wichtige STEMI-Äquivalente</h3>
                <ul>
                    <li><strong>Posteriorer STEMI:</strong> ST-Senkungen ≥ 0,5 mm in V1-V3 bei endständiger positiver T-Welle mit ST-Hebung ≥ 0,5 mm in V7-V9 (Männer < 40 J ≥ 1 mm).</li>
                    <li><strong>De Winter Zeichen:</strong> Aszendierende ST-Senkung ≥ 1 mm mit Übergang in hohe, symmetrische T-Wellen in V1-V6, oft mit ST-Hebung in aVR (proximaler LAD-Verschluss).</li>
                    <li><strong>Shark Fin Zeichen:</strong> Verschmelzung von QRS-Komplex mit T-Welle bei massiver ST-Hebung.</li>
                    <li><strong>Hauptstamm-Verschluss / Mehrgefäßerkrankung:</strong> ST-Senkung ≥ 1 mm in ≥ 6 Ableitungen mit ST-Hebung in aVR und/oder V1.</li>
                    <li><strong>Rechtsventrikulärer Infarkt:</strong> ST-Hebung ≥ 0,5 mm in V3R und V4R (Männer < 30 J: 1 mm) bei inferiorem STEMI.</li>
                </ul>
                <h3>Linksschenkelblock (LSB) / Schrittmacher</h3>
                <p>Beurteilung mittels <strong>modifizierter Sgarbossa-Kriterien</strong>:</p>
                <ul>
                    <li><strong>Kriterium 1:</strong> Konkordante ST-Hebung ≥ 1 mm in Ableitung mit positivem QRS.</li>
                    <li><strong>Kriterium 2:</strong> Konkordante ST-Senkung ≥ 1 mm in V1-V3 mit negativem QRS.</li>
                    <li><strong>Kriterium 3:</strong> Diskordante ST-Hebung ≥ 1 mm, wenn diese ≥ 25% der S-Welle misst.</li>
                </ul>
                <div class="callout callout-hinweis">
                    <p>Sgarbossa nicht validiert bei Hyperkaliämie (> 5,5 mmol/l), HF > 130/min oder schwerer Hypertension.</p>
                </div>`
            },
            {
                title: "Therapie",
                html: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li>Stabilisierung der Vitalfunktionen gemäß ABCDE-Schema.</li>
                    <li>Oberkörperhochlagerung.</li>
                    <li><strong>O₂-Gabe</strong> nur bei SpO₂ < 90 % (keine unkontrollierte O₂-Gabe).</li>
                    <li><strong>Defibrillationsbereitschaft sicherstellen!</strong> (Gefahr von Kammerflimmern).</li>
                </ul>
                <h3>Medikamentöse Therapie</h3>
                <ul>
                    <li><strong>ASS:</strong> 150-300 mg p.o. oder 75-250 mg i.v.</li>
                    <li><strong>Unfraktioniertes Heparin (UFH):</strong> 70 IE/kg KG i.v. (max. 5000 IE als Bolus; unabhängig von bestehender oraler Antikoagulation).</li>
                    <li><strong>Analgesie / RR-Senkung:</strong> ggf. Nitroglycerin-Spray 1-3 Hub s.l. (≙ 0,4-1,2 mg).
                        <br><strong>Kontraindikationen:</strong> RRsys < 90 mmHg, PDE-5-Hemmer, RV-Infarkt.</li>
                    <li><strong>Morphin:</strong> 2-3 mg i.v. repetitiv zur Schmerzkontrolle.</li>
                    <li><strong>Metoprolol:</strong> 3-5 mg i.v. (wenn RR > 120 mmHg, keine Herzinsuffizienz, kein Asthma).</li>
                    <li><strong>Anxiolyse:</strong> z.B. Lorazepam 1 mg s.l.</li>
                    <li><strong>Insulin:</strong> BZ-Ziel < 180 mg/dl bei Vermeidung von Hypoglykämien.</li>
                </ul>
                <h3>Kausale Therapie</h3>
                <ul>
                    <li><strong>Typ 1-Infarkt:</strong> Revaskularisation mittels PCI ≤ 60 min ab Diagnosestellung bzw. ≤ 90 min bei Weiterverlegung.</li>
                    <li><strong>Falls PCI-Zeit > 120 min:</strong> Lyse mit <strong>Alteplase</strong> und Verlegung zur PCI.</li>
                    <li><strong>Typ 2-Infarkt:</strong> Behandlung der zugrunde liegenden Ursache (EK-Gabe bei Anämie, Schockbehandlung, etc.).</li>
                </ul>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li><strong>Vor-EKGs</strong> sind extrem wertvoll (LSB oder Hebungen neu?).</li>
                    <li><strong>Differentialdiagnosen bei ST-Hebung:</strong> Herzwandaneurysma, Perimyokarditis, Prinzmetal-Angina, Tako-Tsubo-Kardiomyopathie.</li>
                    <li>Eine vorhandene Q-Zacke sollte die Reperfusionsentscheidung nicht ändern.</li>
                    <li><strong>EKG im Kontext:</strong> Ein transmuraler Infarkt kann auch bei formal nicht signifikanten Hebungen vorliegen.</li>
                    <li>Bei anhaltenden Beschwerden: <strong>serielle EKG-Kontrollen</strong> (Dynamik?).</li>
                    <li><strong>Loading mit P2Y12-Antagonist:</strong> in der Regel erst im Herzkatheterlabor durch interventionelle Kardiologen.</li>
                    <li>Zur Detektion eines frühen Reinfarkts: klinisches Assessment (wie Index-Event?), 12-Kanal-EKG und serielle Bestimmung von hs-Troponin, CK, CK-MB.</li>
                </ul>`
            },
            {
                title: "Disposition",
                html: `<h3>Risikofaktoren</h3>
                <p>Hämodynamisch instabil, schwere Arrhythmien, LV-EF < 40 %, frustrane Reperfusion, kritische Koronarstenose oder Komplikationen bei PCI.</p>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Risikoprofil</th>
                                <th>Empfohlene Station</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Geringes Risiko</strong> für Herzrhythmusstörungen</td>
                                <td>Überwachungsstation (IMC/ICU) > 24 h</td>
                            </tr>
                            <tr>
                                <td><strong>Hohes Risiko</strong> für Herzrhythmusstörungen (min. 1 Risikofaktor)</td>
                                <td>Überwachungsstation (IMC/ICU) mit längerer Überwachung</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            }
        ],
        sources: `Byrne RA et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J. 2023.<br>
        Ibanez B et al. 2017 ESC Guidelines for the management of acute myocardial infarction in patients presenting with ST-segment elevation. Eur Heart J. 2018.<br>
        Thygesen K et al. Fourth universal definition of myocardial infarction (2018). Circulation. 2018.<br>
        ACC/AHA Expert Consensus Decision Pathway on Acute Chest Pain 2022.<br>
        Asatryan B et al. Electrocardiographic Diagnosis of Life-Threatening STEMI Equivalents. JACC Case Rep. 2019.<br>
        Smith SW et al. S-wave ratio in a modified Sgarbossa rule. Ann Emerg Med. 2012.`
    });
})();