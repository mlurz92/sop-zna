(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "hypertensiver-notfall",
        title: "Hypertensiver Notfall",
        category: "Kardiologie",
        catKey: "kardio",
        sections: [
            {
                title: "Definition",
                html: `<ul>
                    <li><strong>Hypertensive Entgleisung:</strong> Blutdruckanstieg ≥ 180/110 mmHg</li>
                    <li><strong>Hypertensiver Notfall:</strong> Blutdruckanstieg ≥ 180/110 mmHg + <strong>akuter Endorganschaden</strong></li>
                </ul>`
            },
            {
                title: "Ursachen",
                html: `<ul>
                    <li>Fehlende Medikamentenadhärenz</li>
                    <li><strong>Medikamente:</strong> NSAR, Glukokortikoide, etc.</li>
                    <li><strong>Drogen:</strong> Kokain, Amphetamine, Ecstasy, etc.</li>
                    <li><strong>Sonstige Erkrankungen:</strong> Phäochromozytom, akute Glomerulonephritis, Präeklampsie, etc.</li>
                    <li><strong>Zerebrale Ischämie:</strong> "Bedarfshypertonie"</li>
                    <li><strong>Sympathikus-Aktivierung:</strong> Schmerzen, Stress, Angst, Panikattacke, Alkoholentzug, akuter Harnverhalt, etc.</li>
                </ul>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li><strong>Bei hypertensiver Entgleisung:</strong> Häufig asymptomatisch, ggf. unspezifische Symptome wie leichte Kopfschmerzen, Nasenbluten, Unwohlsein, Schwindel.</li>
                    <li><strong>Bei hypertensivem Notfall:</strong> Zeichen der akuten Endorganschädigung (z.B. Dyspnoe bei hypertensivem Lungenödem, Angina Pectoris, neurologische Defizite).</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur)</li>
                    <li><strong>RR-Messung an beiden Armen wiederholen</strong> (Korrekte Manschettengröße? Korrekte Messung? Seitendifferenz?)</li>
                    <li><strong>Anamnese:</strong> Symptome (insb. AP, Dyspnoe, Neurologie)? Vorerkrankungen? Häusliche Werte? Adhärenz? Drogen? Alkohol?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Hinweise auf akute Endorganschädigung? Fokal neurologisches Defizit?</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p><strong>Wichtige Fragen klären:</strong></p>
                    <ul>
                        <li>Patient symptomatisch oder asymptomatisch?</li>
                        <li>Erhöhtter Blutdruck Ursache oder Folge der Symptome?</li>
                        <li>Handelt es sich um einen hypertensiven Notfall?</li>
                    </ul>
                </div>
                <p><strong>Bei V.a. hypertensiven Notfall (Red Flags: AP, Dyspnoe, neurologische Symptome, starke Kopfschmerzen, Sehstörungen):</strong></p>
                <ul>
                    <li>1-2x venöser Zugang</li>
                    <li><strong>Venöse BGA:</strong> (pH? BE? Hb? Laktat?)</li>
                    <li><strong>Labor:</strong> BB, E'lyte, NW, LDH, Haptoglobin, Bilirubin, ggf.: Fibrinogen, β-HCG</li>
                    <li><strong>12-Kanal-EKG:</strong> (Ischämiezeichen?)</li>
                    <li><strong>ggf. Urinstatus:</strong> (Proteinurie?) + <strong>Urinmikroskopie</strong> (Erythrozyten, Leukozyten und Zylinder?)</li>
                    <li><strong>ggf. Fundoskopie:</strong> (Papillenödem? Hämorrhagien?)</li>
                    <li><strong>Gezielte Diagnostik:</strong> (POCUS, Röntgen-Thorax, cCT, CTA-Aorta, Blutausstrich, etc.)</li>
                    <li>Etablierung eines <strong>arteriellen Zugangs</strong> (invasive RR-Kontrollen)</li>
                </ul>
                <div class="callout callout-hinweis">
                    <p>Bei hypertensivem Notfall frühzeitige Rücksprache mit Überwachungsstation (IMC/ICU)!</p>
                </div>`
            },
            {
                title: "Therapie",
                html: `<h3>Hypertensive Entgleisung</h3>
                <ul>
                    <li><strong>Ursachen beheben:</strong> Analgesie, DK bei Harnverhalt, Lorazepam 1 mg s.l. bei Angst.</li>
                    <li>Patienten in <strong>ruhigen Raum</strong> legen, Blutdruck in 30 Minuten kontrollieren (in > 30 % dadurch bereits gebessert).</li>
                    <li><strong>Orale Therapie:</strong> z.B. 5 mg Amlodipin oder 2,5 mg Ramipril p.o. (bei bestehender Therapie: Dosis erhöhen oder erweitern).</li>
                </ul>
                <div class="callout callout-cave">
                    <p><strong>CAVE:</strong> Keine aggressive Blutdrucksenkung notwendig! Überschießende Senkung unbedingt vermeiden!</p>
                </div>

                <h3>Hypertensiver Notfall</h3>
                <ul>
                    <li><strong>Sofortige Blutdrucksenkung:</strong> Wahl des Mittels und Aggressivität abhängig vom Endorganschaden (s. Tabelle unten).</li>
                    <li>Behandlung des Endorganschadens (z.B. OP bei Stanford A-Dissektion, Neurochirurgie bei ICB).</li>
                </ul>

                <h3>Auswahl von Antihypertensiva (i.v. / s.c.)</h3>
                <ul>
                    <li><strong>Urapidil (Ebrantil®):</strong> 5-10 mg Boli i.v. (1 Amp. ≙ 50 mg/10 ml). 
                        <br>ggf. Perfusor (250 mg/50 ml): Start 4 ml/h, Titration meist 1-8 ml/h.
                        <br><em>Merke:</em> Bevorzugt bei den meisten Notfällen, auch Schwangerschaft (off-label).</li>
                    <li><strong>Nitroglycerin (Nitrolingual®):</strong> 0,4-1,2 mg (1-3 Hub) s.l. 
                        <br>ggf. Perfusor (50 mg/50 ml): Start 1 ml/h, Titration meist 2-8 ml/h.
                        <br><strong>KI:</strong> PDE-5-Hemmer, Hirndruck. 
                        <br><em>Merke:</em> Bevorzugt bei Lungenödem und ACS.</li>
                    <li><strong>Clonidin (Catapresan®):</strong> 0,075-0,150 mg s.c. (bis max. 6x/d).
                        <br>ggf. Perfusor (1,5 mg/50 ml): Start 1 ml/h, Titration meist 1-3 ml/h.
                        <br><strong>KI:</strong> Bradykardie, SSS, AV-Block II-III, Depression.
                        <br><em>Merke:</em> Bevorzugt bei Alkoholentzug.</li>
                </ul>`
            },
            {
                title: "Zielwerte & Medikamente",
                html: `<div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Krankheitsbild</th>
                                <th>Blutdruck Zielwerte</th>
                                <th>Medikamente</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Akute Aortendissektion</strong></td>
                                <td>Sofortige Senkung RRsys < 120 mmHg + Hf 60-80/min</td>
                                <td>Metoprolol, Urapidil</td>
                            </tr>
                            <tr>
                                <td><strong>Akutes Koronarsyndrom</strong></td>
                                <td>Sofortige Senkung RRsys < 140 mmHg</td>
                                <td>Nitroglycerin, Urapidil</td>
                            </tr>
                            <tr>
                                <td><strong>Hypertensives Lungenödem</strong></td>
                                <td>Sofortige Senkung RRsys < 140 mmHg</td>
                                <td>Nitroglycerin, Urapidil, Furosemid</td>
                            </tr>
                            <tr>
                                <td><strong>Hypertensive Enzephalopathie</strong></td>
                                <td>Sofortige Senkung des MAD um 20-25 %</td>
                                <td>Urapidil</td>
                            </tr>
                            <tr>
                                <td><strong>Ischämischer Schlaganfall</strong></td>
                                <td><strong>Keine Lyse:</strong> Senkung erst ab ≥ 220/120 mmHg (MAD um 15 % in 1. h)
                                <br><strong>Thrombolyse:</strong> Senkung erst ab > 185/110 mmHg (Ziel ≤ 180/105 mmHg)</td>
                                <td>Urapidil</td>
                            </tr>
                            <tr>
                                <td><strong>Hämorrhagischer Schlaganfall</strong></td>
                                <td>Senkung RRsys ≤ 140 mmHg innerhalb 2 h (Delta nicht > 90 mmHg, nicht < 110 mmHg)</td>
                                <td>Urapidil</td>
                            </tr>
                            <tr>
                                <td><strong>Eklampsie, schwere Präeklampsie, HELLP</strong></td>
                                <td>Sofortige Senkung RRsys < 160 mmHg und RRdia < 105 mmHg</td>
                                <td>Urapidil, Furosemid, Nitroglycerin, Magnesium</td>
                            </tr>
                            <tr>
                                <td><strong>Maligne Hypertonie</strong> (mit AKI / TMA)</td>
                                <td>Senkung des MAD um 20-25 % (innerhalb mehrerer Stunden)</td>
                                <td>Urapidil</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li><strong>Keine aggressive Blutdruck-Kosmetik</strong> bei asymptomatischen Patienten (Gefahr der zerebralen Ischämie durch zu schnelle Senkung!).</li>
                    <li><strong>Unretardiertes Nifedipin (Adalat®)</strong> ist aufgrund schlechter Steuerbarkeit und Gefahr der Reflextachykardie <strong>obsolet</strong>.</li>
                    <li>Bei überschießender Senkung: Pausieren der Therapie, Schocklagerung, Volumen, ggf. Katecholamine.</li>
                </ul>`
            },
            {
                title: "Disposition",
                html: `<div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Befund</th>
                                <th>Disposition</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Hypertensive Entgleisung</strong></td>
                                <td>Ambulantes Procedere mit zeitnaher hausärztlicher Vorstellung</td>
                            </tr>
                            <tr>
                                <td><strong>Hypertensiver Notfall</strong></td>
                                <td>Überwachungsstation (IMC/ICU)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            }
        ],
        stand: "10/24",
        sources: `Nationale Versorgungsleitlinie Hypertonie 2023. Kurzfassung 1.0. AWMF-Register-Nr. nvl-009.
        <br>van den Born BJH et al. ESC position document on the management of hypertensive emergencies. Eur Heart J Cardiovasc Pharmacother. 2019.
        <br>Bress AP et al. The Management of Elevated Blood Pressure in the Acute Care Setting. AHA Statement. Hypertension. 2024.
        <br>Ringleb P et al. Akuttherapie des ischämischen Schlaganfalls, S2e Leitlinie, 2021 (DGN).
        <br>Steiner T et al. Behandlung von spontanen intrazerebralen Blutungen, S2k-Leitlinie, 2021 (DGN).
        <br>Isselbacher EM et al. Guideline for the Diagnosis and Management of Aortic Disease. Circulation. 2022.
        <br>Hypertensive Disorders in Pregnancy. Guideline of the DGGG (AWMF 015/018, June 2024).`
    });
})();