(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "nicht-st-hebungsinfarkt",
        title: "Nicht-ST-Hebungsinfarkt (NSTEMI)",
        category: "Kardiologie",
        catKey: "kardio",
        date: "07/24",
        sections: [
            {
                title: "Definition",
                content: `<p><strong>Nicht-ST-Hebungsinfarkt (NSTEMI):</strong> Akuter Myokardinfarkt, definiert über signifikante Troponinerhöhung bzw. Troponindynamik bei entsprechender Klinik.</p>
                <p>Es können folgende <strong>EKG-Veränderungen</strong> vorliegen:</p>
                <ul>
                    <li>Persistierende oder transiente ST-Senkungen</li>
                    <li>Transiente ST-Hebungen &lt; 20 min</li>
                    <li>T-Wellen-Inversion</li>
                    <li>Flache T-Welle</li>
                    <li>Pseudonormalisierung der T-Welle</li>
                    <li>Elektrokardiografischer Normalbefund</li>
                </ul>`
            },
            {
                title: "Ursachen",
                content: `<ul>
                    <li><strong>Typ 1-Myokardinfarkt:</strong> Arteriosklerotische Plaque-Ruptur mit thrombotischem Verschluss der Koronararterie(n).</li>
                    <li><strong>Typ 2-Myokardinfarkt:</strong> Missverhältnis der myokardialen Sauerstoffversorgung (Hypoxämie, Anämie, Koronarspasmen, Schock, etc.).</li>
                </ul>`
            },
            {
                title: "Symptome",
                content: `<ul>
                    <li>Retrosternales Druckgefühl mit ggf. Ausstrahlung in Arme, Hals, Kiefer.</li>
                    <li><strong>Angina-Äquivalente:</strong> z.B. „Chest-Discomfort”, Luftnot, Oberbauchschmerzen.</li>
                    <li><strong>„Stumme“ Infarkte:</strong> insbesondere bei Diabetikern und älteren Patienten.</li>
                    <li>Schwäche, Angst, vegetative Begleitsymptomatik (Übelkeit, Erbrechen, Kaltschweißigkeit).</li>
                    <li>ggf. Symptome einer <strong>Herzinsuffizienz</strong> (Dyspnoe, Lungenödem, Halsvenenstauung, Hypotonie).</li>
                    <li>ggf. (Prä-)Synkope.</li>
                    <li>ggf. <strong>Herzrhythmusstörungen</strong> (Bradykardie, AV-Blockierungen, Ventrikuläre Tachykardie, Kammerflimmern, etc.).</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                content: `<ul>
                    <li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur) + <strong>RR-Messung an beiden Armen</strong>.</li>
                    <li>1x venöser Zugang.</li>
                    <li><strong>Venöse BGA:</strong> (Hb? E’lyte? Glukose?).</li>
                    <li><strong>Labor:</strong> BB, CRP, NW, E’lyte, Gerinnung, hs-Troponin, TSH, Lipidprofil, HbA1c. Ggf.: GOT, LDH, CK, CK-MB, pro-BNP, D-Dimer.</li>
                    <li><strong>12-Kanal-EKG innerhalb von 10 Minuten:</strong> (Ischämiezeichen? STEMI-Äquivalente? HRST?). Ggf. mit <strong>V3/4R</strong> (Rechtsherz) und <strong>V7-9</strong> (Hinterwand).</li>
                    <li><strong>Anamnese:</strong> Symptome? Beginn? CCS bekannt? Kardiovaskuläre Risikofaktoren? Medikamente? Letzte Echokardiografie und Koronarangiografie?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Rekap-Zeit? Systolikum? Pulsstatus? Feuchte Rasselgeräusche? Halsvenenstauung? Beschwerden auslösbar durch externen Druck?</li>
                    <li><strong>POCUS:</strong> bei hämodynamischer Instabilität und bei 3h-Kontrolle (LV-Funktion? Wandbewegungsstörungen? Differentialdiagnosen?).</li>
                    <li>Ggf. nach 1, 2 oder 3h: <strong>hs-Troponin-Messung und EKG wiederholen</strong> (siehe diagnostischer Algorithmus).</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p>Frühzeitige Rücksprache mit Kardiologie (Zeitpunkt Revaskularisation?) und Überwachungsstation (IMC/ICU)!</p>
                </div>`
            },
            {
                title: "Grenzwerte für signifikante Troponinerhöhung",
                content: `<p>Modifiziert nach ESC-Guidelines 2023 und verwendeten Troponin-Assays (ng/l):</p>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Assay (Hersteller)</th>
                                <th>sehr niedrig (0h)</th>
                                <th>niedrig (0h)</th>
                                <th>hoch (0h)</th>
                                <th>Relevante 1h-Veränd.</th>
                                <th>Relevante 2h-Veränd.</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>hs-cTnT (Roche)</strong></td>
                                <td>&lt; 5</td>
                                <td>&lt; 12</td>
                                <td>≥ 52</td>
                                <td>≥ 5</td>
                                <td>≥ 10</td>
                            </tr>
                            <tr>
                                <td><strong>hs-cTnI (Abbott)</strong></td>
                                <td>&lt; 4</td>
                                <td>&lt; 5</td>
                                <td>≥ 64</td>
                                <td>≥ 6</td>
                                <td>≥ 15</td>
                            </tr>
                            <tr>
                                <td><strong>hs-cTnI (Siemens)</strong></td>
                                <td>&lt; 3</td>
                                <td>&lt; 6</td>
                                <td>≥ 120</td>
                                <td>≥ 12</td>
                                <td>≥ 20</td>
                            </tr>
                            <tr>
                                <td><strong>hs-cTnI (Beckman C.)</strong></td>
                                <td>&lt; 4</td>
                                <td>&lt; 5</td>
                                <td>≥ 50</td>
                                <td>≥ 15</td>
                                <td>≥ 20</td>
                            </tr>
                            <tr>
                                <td><strong>hs-cTnI (Singulex)</strong></td>
                                <td>&lt; 1</td>
                                <td>&lt; 2</td>
                                <td>≥ 30</td>
                                <td>≥ 6</td>
                                <td>n.a.</td>
                            </tr>
                            <tr>
                                <td><strong>hs-cTnI (Vitros)</strong></td>
                                <td>&lt; 1</td>
                                <td>&lt; 2</td>
                                <td>≥ 40</td>
                                <td>≥ 4</td>
                                <td>≥ 5</td>
                            </tr>
                            <tr>
                                <td><strong>hs-cTnI (Pathfast)</strong></td>
                                <td>&lt; 3</td>
                                <td>&lt; 4</td>
                                <td>≥ 90</td>
                                <td>≥ 20</td>
                                <td>≥ 55</td>
                            </tr>
                            <tr>
                                <td><strong>hs-cTnI (TriageTrue)</strong></td>
                                <td>&lt; 4</td>
                                <td>&lt; 5</td>
                                <td>≥ 60</td>
                                <td>≥ 8</td>
                                <td>n.a.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="callout callout-hinweis">
                    <p>Ein Troponin-Wert oberhalb der 99. Perzentile (= ULN) + signifikante Dynamik gilt als "Rule-In".</p>
                    <p>Beispiel hs-cTnT (Roche): 1 Wert > 14 ng/l (= ULN) und Delta von > 20%; bei initialem Wert ≤ 14 ng/l gilt eine Zunahme von > 7 ng/l nach 3h als signifikant.</p>
                </div>`
            },
            {
                title: "Diagnostischer Algorithmus",
                content: `<p>Vorgehen basierend auf 0h-Blutentnahme und klinischem Kontext:</p>
                <ol>
                    <li><strong>Rule-Out (sofort):</strong>
                        <ul>
                            <li>hs-Troponin <strong>sehr niedrig</strong> UND Ereignisbeginn > 3h</li>
                            <li>Ausschluss Myokardinfarkt &rarr; Differentialdiagnose Thoraxschmerz prüfen.</li>
                        </ul>
                    </li>
                    <li><strong>V.a. NSTEMI / Rule-In:</strong>
                        <ul>
                            <li>hs-Troponin <strong>hoch</strong> (siehe Tabelle "hoch 0h")</li>
                            <li>ODER relevante <strong>1h/2h-Veränderung</strong>.</li>
                            <li>Maßnahme: Rücksprache Kardiologie (PCI-Zeitpunkt) + Aufnahme IMC/ICU.</li>
                        </ul>
                    </li>
                    <li><strong>Observe / Abklärung:</strong>
                        <ul>
                            <li>hs-Troponin im intermediären Bereich (zwischen Rule-Out und Rule-In).</li>
                            <li>Maßnahme: Kontrolle nach <strong>3h</strong> (inkl. EKG und POCUS).</li>
                            <li>Wenn 3h-Veränderung relevant &rarr; V.a. NSTEMI.</li>
                            <li>Wenn 3h-Veränderung nicht relevant &rarr; Ausschluss Infarkt, Differentialdiagnosen bedenken.</li>
                        </ul>
                    </li>
                </ol>
                <div class="callout callout-cave">
                    <p>Bei anhaltenden oder wiederkehrenden Brustschmerzen sind <strong>wiederholte EKG- und Troponin-Kontrollen</strong> obligat, auch bei initial niedrigen Werten!</p>
                </div>`
            },
            {
                title: "Differentialdiagnosen der Myokardschädigung",
                content: `<p>Troponinerhöhungen können auch ohne Koronarverschluss auftreten:</p>
                <h3>Kardiale Ursachen</h3>
                <ul>
                    <li>Koronarspasmen</li>
                    <li>Herzrhythmusstörungen (Tachy- oder Bradykardie)</li>
                    <li>Entzündliche Herzerkrankungen (Myokarditis, Perikarditis)</li>
                    <li>Tako-Tsubo-Kardiomyopathie</li>
                    <li>Herzinsuffizienz</li>
                    <li>Strukturelle Herzerkrankungen</li>
                    <li>Kardiale Kontusion (Trauma)</li>
                </ul>
                <h3>Extrakardiale Ursachen</h3>
                <ul>
                    <li>Lungenarterienembolie (RV-Belastung)</li>
                    <li>Schwere Infektionen / Sepsis</li>
                    <li>Anämie</li>
                    <li>Nierenfunktionsstörung (verminderte Elimination)</li>
                    <li>Schilddrüsendysfunktion</li>
                    <li>Hypertensiver Notfall</li>
                    <li>Akutes neurologisches Ereignis (Schlaganfall, SAB)</li>
                    <li>Extreme Ausdauerbelastung</li>
                    <li>Rhabdomyolyse</li>
                    <li>Aortendissektion</li>
                    <li>Pulmonale Hypertonie</li>
                    <li>Myokardtoxische Medikamente oder Gifte</li>
                </ul>`
            },
            {
                title: "Risikostratifikation für Zeitpunkt der Reperfusion",
                content: `<div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Zeitpunkt</th>
                                <th>Kriterien</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Sofort invasiv</strong> (notfallmäßig)</td>
                                <td><strong>Very-High-Risk:</strong>
                                    <ul>
                                        <li>Hämodynamische Instabilität oder kardiogener Schock</li>
                                        <li>Wiederkehrender oder therapierefraktärer Thoraxschmerz</li>
                                        <li>Akute Herzinsuffizienz durch anhaltende Ischämie</li>
                                        <li>Lebensbedrohliche Arrhythmien oder Herzstillstand nach Vorstellung</li>
                                        <li>Mechanische Komplikationen</li>
                                        <li>Wiederkehrende dynamische EKG-Veränderungen (v.a. intermittierende ST-Hebungen)</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Früh invasiv</strong> (&lt; 24h)</td>
                                <td><strong>High-Risk:</strong>
                                    <ul>
                                        <li>Gesicherte Diagnose NSTEMI (Rule-In)</li>
                                        <li>Dynamische ST-Segment- oder T-Wellen-Veränderungen</li>
                                        <li>Transiente ST-Hebung (&lt; 20 min)</li>
                                        <li>Grace-Score &gt; 140 Punkte</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Therapie",
                content: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li>Stabilisierung der Vitalfunktionen gemäß ABCDE-Schema.</li>
                    <li>Oberkörperhochlagerung.</li>
                    <li><strong>O₂-Gabe</strong> nur bei SpO₂ &lt; 90% (keine unkontrollierte O₂-Gabe).</li>
                </ul>
                <h3>Medikamentöse Therapie</h3>
                <ul>
                    <li><strong>ASS:</strong> 150-300 mg p.o. oder 75-250 mg i.v.</li>
                    <li><strong>Unfraktioniertes Heparin (UFH):</strong> 70 IE/kg KG i.v. (max. 5000 IE i.v. als Bolus).
                        <ul>
                            <li>Unter Vitamin-K-Antagonist: falls INR ≤ 2,5.</li>
                            <li>Unter DOAK: 60 IE/kg KG i.v.</li>
                        </ul>
                    </li>
                    <li><strong>Analgesie / RR-Senkung:</strong> Ggf. Nitroglycerin-Spray 1-3 Hub s.l. (≙ 0,4-1,2 mg).
                        <div class="callout callout-cave"><p>KI: RRsys &lt; 90 mmHg, PDE-5-Hemmer, V.a. RV-Infarkt!</p></div>
                    </li>
                    <li><strong>Morphin:</strong> 2-3 mg repetitiv i.v. zur Analgesie.</li>
                    <li><strong>Metoprolol:</strong> 3-5 mg i.v. (wenn RR &gt; 120 mmHg, keine akute Herzinsuffizienz und keine anderen Kontraindikationen wie Asthma).</li>
                    <li><strong>Anxiolyse:</strong> Ggf. Lorazepam 1 mg s.l.</li>
                    <li><strong>Insulin:</strong> BZ-Ziel &lt; 180 mg/dl bei Vermeidung von Hypoglykämien.</li>
                </ul>
                <h3>Kausale Therapie</h3>
                <ul>
                    <li><strong>Typ 1-Myokardinfarkt:</strong> Revaskularisation mittels PCI (Zeitpunkt gemäß Risikostratifikation).</li>
                    <li><strong>Typ 2-Myokardinfarkt:</strong> Behandlung der zugrunde liegenden Ursache (z.B. EK-Gabe bei Anämie, Schockbehandlung).</li>
                </ul>`
            },
            {
                title: "Merke",
                content: `<ul>
                    <li>Bedenke bei Thoraxschmerzen immer die <strong>"Big Five"</strong> (LAE, Akutes Aortensyndrom, akuter Myokardinfarkt, Spannungspneumothorax, Boerhaave-Syndrom).</li>
                    <li><strong>Loading mit P2Y12-Antagonist:</strong> In der Regel erst während der Koronarangiografie durch den interventionellen Kardiologen.</li>
                    <li>Bei Vorliegen eines <strong>Very-High-Risk-Kriteriums</strong> muss eine sofortige PCI analog zum STEMI erfolgen!</li>
                </ul>`
            },
            {
                title: "Disposition",
                content: `<p>Basierend auf Risikofaktoren: hämodynamisch instabil, schwere Arrhythmien, LV-EF &lt; 40%, frustrane Reperfusion, kritische Koronarstenose oder Komplikationen.</p>
                <ul>
                    <li><strong>Geringes Risiko für Herzrhythmusstörungen:</strong> Überwachungsstation (IMC/ICU) &gt; 24 h.</li>
                    <li><strong>Hohes Risiko für Herzrhythmusstörungen:</strong> Überwachungsstation (IMC/ICU) mit längerer Überwachung (mind. 1 Risikofaktor vorhanden).</li>
                </ul>`
            }
        ],
        stand: "07/24",
        sources: `Byrne RA et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J. 2023 Aug 25:ehad191. – Collet JP et al. 2020 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J. 2021 Apr 7;42(14):1289-1367. – Thygesen K et al. Fourth universal definition of myocardial infarction (2018). Circulation. 2018;138:e618–e651. – Roffi M et al. 2015 ESC Guidelines. Eur Heart J. 2016 Jan 14;37(3):267-315. – Kontos MC et al. 2022 ACC Expert Consensus. J Am Coll Cardiol. 2022 Nov 15;80(20):1925-1960. – Fachinformationen der hs-Troponin Hersteller und Arzneimittel.`
    });
})();