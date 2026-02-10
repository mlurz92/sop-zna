(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "obere-gastrointestinale-blutung",
        title: "Obere Gastrointestinale Blutung",
        category: "Gastroenterologie",
        catKey: "gi",
        date: "10/23",
        sections: [
            {
                title: "Definition",
                content: `<ul>
                    <li><strong>Obere gastrointestinale Blutung (OGIB):</strong> Gastrointestinale Blutung proximal des Treitz-Bandes (Übergang Duodenum-Jejunum).</li>
                    <li><strong>Variköse Blutung:</strong> Gastrointestinale Blutung aus Ösophagus- bzw. Fundusvarizen.</li>
                    <li><strong>Nicht-variköse Blutung:</strong> Gastrointestinale Blutung, die nicht von Ösophagus- bzw. Fundusvarizen ausgeht.</li>
                </ul>`
            },
            {
                title: "Ursachen",
                content: `<ul>
                    <li><strong>Ulcus duodeni und ventriculi</strong> (ca. 50 %).</li>
                    <li><strong>Ösophagusvarizenblutung.</strong></li>
                    <li><strong>Erosive Gastritis, Duodenitis, Refluxösophagitis.</strong></li>
                    <li><strong>Sonstige:</strong> Mallory-Weiss-Läsion, Tumor, Angiodysplasien, etc.</li>
                </ul>`
            },
            {
                title: "Symptome",
                content: `<ul>
                    <li>Hämatemesis (Bluterbrechen).</li>
                    <li>Hämatinerbrechen (kaffeesatzartig).</li>
                    <li>Meläna (Teerstuhl).</li>
                    <li>Hämatochezie (frisches Blut per rectum) bei massiven Blutungen.</li>
                    <li>ggf. Begleitsymptome (z.B. Aspiration, Synkope, Schock).</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                content: `<ul>
                    <li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur).</li>
                    <li><strong>1-2x großlumiger venöser Zugang.</strong></li>
                    <li><strong>Venöse BGA:</strong> (Hb? pH? BE? Laktat?).</li>
                    <li><strong>Kreuzblut abnehmen + ggf. EK (z.B. 2-4 Stück) anfordern.</strong></li>
                    <li><strong>Labor:</strong> BB, Gerinnung, NW, Leberwerte, ggf. Fibrinogen.</li>
                    <li><strong>12-Kanal-EKG:</strong> (Ischämiezeichen?).</li>
                    <li><strong>Anamnese:</strong> Symptome? Blutungsstigmata? Medikamente (TAH, OAK, NSAR, SSRI)? Vorerkrankungen (insb. Leber, Malignom, Ulcus)? Letzte Endoskopie?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Rekap-Zeit? Blasse Konjunktiven? Abdomineller Druckschmerz? Zeichen der Leberzirrhose? Blut/Teerstuhl in DRU?</li>
                    <li><strong>ggf. POCUS:</strong> (Freie Flüssigkeit? Zeichen der Leberzirrhose?).</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p>Frühzeitige Rücksprache mit Gastroenterologie bei Instabilität, Hämatemesis oder V.a. variköse Blutung!</p>
                </div>`
            },
            {
                title: "Modifizierter Glasgow-Blatchford-Score",
                content: `<p>Risikostratifizierung bei nicht-variköser OGIB (Niedrigrisiko-Gruppe: 0-1 Punkt):</p>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Kriterium</th>
                                <th>Ausprägung</th>
                                <th>Punkte</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Herzfrequenz</td>
                                <td>≥ 100/min</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>Systolischer Blutdruck</td>
                                <td>100-109 mmHg<br>90-99 mmHg<br>&lt; 90 mmHg</td>
                                <td>1<br>2<br>3</td>
                            </tr>
                            <tr>
                                <td>Harnstoff</td>
                                <td>≥ 38,9 und &lt; 47,9 mg/dl<br>≥ 47,9 und &lt; 59,9 mg/dl<br>≥ 59,9 und &lt; 149,8 mg/dl<br>≥ 149,8 mg/dl</td>
                                <td>2<br>3<br>4<br>6</td>
                            </tr>
                            <tr>
                                <td>Hämoglobin</td>
                                <td>12-12,9 g/dl (nur ♂)<br>10,0-11,9 g/dl<br>&lt; 10,0 g/dl</td>
                                <td>1<br>3<br>6</td>
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
                    <li><strong>Frühzeitige Schutzintubation</strong> bei Aspirationsgefahr (Anästhesie informieren).</li>
                    <li>Patienten <strong>nüchtern lassen</strong>.</li>
                    <li><strong>Kreislaufstabilisierung:</strong> (Ziel: MAD > 65 mmHg, Normalisierung von HF und Laktat).
                        <ul>
                            <li>Bei Instabilität: Hochdosierte O₂-Gabe (auch bei normalem SpO₂), Schocklagerung, 500-1000 ml VEL i.v.</li>
                        </ul>
                    </li>
                    <li><strong>Transfusion:</strong> EK bei Hb &lt; 7 g/dl (Ziel-Hb: 7-9 g/dl).
                        <ul>
                            <li>Bei anämischer Hypoxie (z.B. Typ 2 Myokardinfarkt) bereits bei Hb 8-10 g/dl.</li>
                            <li>Bei massiver Blutung nach klinischer Einschätzung unabhängig vom Hb-Wert.</li>
                        </ul>
                    </li>
                </ul>
                <h3>Medikamentöse Therapie</h3>
                <ul>
                    <li><strong>Pantoprazol:</strong> 80 mg i.v. Bolus, anschließend Perfusor 8-10 mg/h (oder 40 mg Bolus alle 8 h).</li>
                    <li><strong>Erythromycin:</strong> 250 mg i.v. (30-120 min vor Notfallendoskopie).</li>
                    <li><strong>Bei V.a. variköse Blutung:</strong> 
                        <ul>
                            <li><strong>Terlipressin:</strong> 2 mg i.v. Bolus, danach 1 mg alle 6 h für 3 Tage.</li>
                            <li><strong>Ceftriaxon:</strong> 2 g i.v. für 5-7 Tage (Infektionsprophylaxe).</li>
                        </ul>
                    </li>
                </ul>
                <h3>Optimierung der Gerinnung</h3>
                <ul>
                    <li>Antagonisierung von DOAK, TAH, NMH oder Vitamin-K-Antagonisten erwägen.</li>
                    <li><strong>DOAK periinterventionell pausieren:</strong> Wiederaufnahme frühestmöglich und innerhalb von 7 Tagen empfohlen (Ausnahme: mechanische Klappe/hohes Risiko).</li>
                    <li><strong>TAH:</strong> Bei Primärprophylaxe pausieren, bei Sekundärprophylaxe weitergeben (Ausnahme: lebensbedrohliche Blutung → ggf. TK-Gabe).</li>
                </ul>
                <h3>Endoskopische Blutstillung (Zeitfenster)</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Blutungsart</th>
                                <th>Status</th>
                                <th>Zeitfenster</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Varikös</td>
                                <td>Schock<br>Stabil</td>
                                <td>Frühestmöglich<br>&lt; 12 h</td>
                            </tr>
                            <tr>
                                <td>Nicht-varikös</td>
                                <td>Schock<br>Hohes Risiko*<br>Stabil</td>
                                <td>Unmittelbar (&lt; 12 h)<br>Zeitnah (&lt; 24 h)<br>Frühelektiv (&lt; 72 h)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p><small>*Hohes Risiko: z.B. Ulcus, vorangegangene Blutung, Tumor, TAH/AK, Alter, Multimorbidität, Laktat > 5 mmol/l.</small></p>`
            },
            {
                title: "Merke",
                content: `<ul>
                    <li>Der Hb-Wert <strong>"hinkt"</strong> bei aktiver Blutung hinterher, die Vitalparameter (Puls, Blutdruck) sind viel sensitiver.</li>
                    <li>Bei V.a. OGIB auch an Differentialdiagnosen wie Epistaxis, Hämoptysen oder Ileus (Stuhlerbrechen statt Hämatin) denken.</li>
                    <li>Bei V.a. GI-Blutung <strong>immer</strong> eine digital rektale Untersuchung (DRU) durchführen.</li>
                </ul>`
            },
            {
                title: "Disposition",
                content: `<ul>
                    <li><strong>V.a. variköse Blutung:</strong> Stationäre Aufnahme.</li>
                    <li><strong>V.a. nicht-variköse Blutung:</strong> Stationäre Aufnahme; ggf. ambulantes Procedere nur bei mGBS von 0-1.</li>
                    <li><strong>Kreislaufinstabilität:</strong> Überwachungsstation (IMC/ICU).</li>
                </ul>`
            }
        ],
        stand: "10/23",
        sources: `Herold G et al. Innere Medizin 2019, S. 453 ff. – Götz M. et al. S2k-Leitlinie Gastrointestinale Blutung. Z Gastroenterol 2017; 55(09): 883-936. – Baumbach R et al. Akute obere gastrointestinale Blutung. Dtsch Med Wochenschr 2016; 141(13): 922-922. – Fandler M et al. Obere Gastrointestinale Blutung… Notaufnahme up2date 2020; 2: 6–8.`
    });
})();