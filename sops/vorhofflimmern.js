(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "vorhofflimmern",
        title: "Vorhofflimmern",
        category: "Kardiologie",
        catKey: "kardio",
        date: "10/25",
        sections: [
            {
                title: "Definition",
                html: `<p><strong>Vorhofflimmern (VHF):</strong> Supraventrikuläre Herzrhythmusstörung mit unkoordinierter elektrischer atrialer Aktivität und daraus resultierender ineffektiver Vorhofkontraktion.</p>
                <h3>Diagnosekriterium:</h3>
                <ul>
                    <li>Unregelmäßige RR-Intervalle ohne erkennbare P-Wellen im 12-Kanal-EKG oder in einer 1-Kanal-EKG-Ableitung &ge; 30 s.</li>
                </ul>
                <h3>Klassifikation:</h3>
                <ul>
                    <li><strong>Erstdiagnostiziertes VHF:</strong> zum ersten Mal diagnostiziert, unabhängig von Dauer oder Symptomatik.</li>
                    <li><strong>Paroxysmales VHF:</strong> Spontankonversion oder Kardioversion in den Sinusrhythmus &le; 7 Tage.</li>
                    <li><strong>Persistierendes VHF:</strong> Dauer > 7 Tage, bzw. wird frühestens nach 7 Tagen kardiovertiert.</li>
                    <li><strong>Lang anhaltend persistierendes VHF:</strong> Dauer > 1 Jahr, bevor Entscheidung zur Rhythmisierung erfolgt.</li>
                    <li><strong>Permanentes VHF:</strong> von Arzt und Patienten akzeptiert; keine Rhythmisierung angestrebt.</li>
                </ul>`
            },
            {
                title: "Ursachen",
                html: `<h3>Multifaktoriell</h3>
                <ul>
                    <li>Höheres Alter, Art. Hypertonie, DM, CCS, Niereninsuffizienz, Rauchen, etc.</li>
                </ul>
                <h3>Sekundär durch (Akut-)Erkrankung (Akronym: PIRATES)</h3>
                <ul>
                    <li><strong>P</strong>ulmonale Erkrankung: LAE, COPD</li>
                    <li><strong>I</strong>schämie: Akuter Myokardinfarkt</li>
                    <li><strong>R</strong>heumatische Herzerkrankung: Mitralstenose</li>
                    <li><strong>A</strong>lkohol, Anämie, atriales Myxom</li>
                    <li><strong>T</strong>hyreotoxikose</li>
                    <li><strong>E</strong>lektrolytstörung (Hypokaliämie, Hypomagnesiämie)</li>
                    <li><strong>S</strong>epsis, Stress, Sonstige: Hypovolämie, Drogen</li>
                </ul>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li>ggf. asymptomatisch.</li>
                    <li>Palpitationen, innere Unruhe, Abgeschlagenheit.</li>
                    <li>(Belastungs-)Dyspnoe, Angina pectoris.</li>
                    <li>Schwindel, (Prä-)Synkope.</li>
                    <li>ggf. Zeichen der Herzinsuffizienz (Ödeme, etc.).</li>
                    <li>ggf. thromboembolische Komplikationen (Schlaganfall, Milzinfarkt, Mesenterialinfarkt, etc.).</li>
                    <li>ggf. Symptome einer zugrundeliegenden Erkrankung (s. Akronym "PIRATES").</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li><strong>Ersteindruck + ABCDE + Vitalparameter:</strong> RR, Puls, SpO₂, AF, Temperatur.</li>
                    <li><strong>1x venöser Zugang.</strong></li>
                    <li><strong>Venöse BGA:</strong> Hb? E'lyte?</li>
                    <li><strong>Labor:</strong> BB, CRP, E'lyte, NW, Gerinnung, <strong>TSH</strong>. Ggf.: hs-Troponin, D-Dimere, NT-proBNP.</li>
                    <li><strong>12-Kanal-EKG:</strong> Irreguläre RR-Abstände? Fehlende p-Wellen? Flimmerwellen? Herzfrequenz? Ischämiezeichen? Rechtsherzbelastungszeichen?</li>
                    <li><strong>Anamnese:</strong> Symptome? Beginn? VHF bekannt? Vorerkrankungen? Medikamente/-adhärenz? OAK und Antiarrhythmika? Hinweise auf sekundäre Ursache?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Rekap-Zeit? Zeichen der kardialen Dekompensation? Hinweise auf sekundäre Ursache? Struma? Exophthalmus?</li>
                    <li><strong>ggf. POCUS:</strong> VCI? Ventrikelfüllung? LV-EF? Pleuraergüsse? Vermehrte pulmonale B-Linien? Perikarderguss? Rechtsherzbelastungszeichen? Vitien?</li>
                    <li><strong>ggf. Röntgen-Thorax:</strong> Stauung? Ergüsse? Kardiomegalie? Infiltrate?</li>
                </ul>
                <div class="callout callout-wichtig">
                    <strong>Wichtige Fragen klären:</strong>
                    <ol>
                        <li>Ist das Vorhofflimmern das Hauptproblem oder nur „Bystander“ einer akuten anderen Ursache (Akronym “PIRATES”)?</li>
                        <li>Ist der Patient stabil oder instabil?</li>
                        <li>Benötigt der Patient eine Antikoagulation, bzw. besteht diese bereits?</li>
                    </ol>
                </div>`
            },
            {
                title: "CHA₂DS₂-VA-Score",
                html: `<div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Akronym</th>
                                <th>Risikofaktor</th>
                                <th>Punkte</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>C</strong></td><td>Chronische Herzinsuffizienz oder LV-Dysfunktion (EF < 40 %)</td><td>1</td></tr>
                            <tr><td><strong>H</strong></td><td>Hypertonus</td><td>1</td></tr>
                            <tr><td><strong>A₂</strong></td><td>Alter &ge; 75 Jahre</td><td>2</td></tr>
                            <tr><td><strong>D</strong></td><td>Diabetes mellitus</td><td>1</td></tr>
                            <tr><td><strong>S₂</strong></td><td>Schlaganfall, TIA oder Thromboembolie</td><td>2</td></tr>
                            <tr><td><strong>V</strong></td><td>Vaskuläre Vorerkrankung, chronisches Koronarsyndrom, pAVK oder Aortenplaque</td><td>1</td></tr>
                            <tr><td><strong>A</strong></td><td>Alter 65–74 Jahre</td><td>1</td></tr>
                        </tbody>
                    </table>
                </div>
                <div class="callout callout-hinweis">
                    <strong>Empfehlung zur Antikoagulation:</strong>
                    <ul>
                        <li><strong>Score = 0:</strong> Keine orale Antikoagulation.</li>
                        <li><strong>Score = 1:</strong> Antikoagulation gemäß individueller Nutzen-Risiko-Abwägung.</li>
                        <li><strong>Score &ge; 2:</strong> Antikoagulation empfohlen.</li>
                    </ul>
                </div>`
            },
            {
                title: "Therapie",
                html: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li>Stabilisierung der Vitalfunktionen gemäß ABCDE-Schema.</li>
                    <li><strong>Ursachen beheben:</strong> akut (PIRATES), chronisch (Modifikation der Risikofaktoren wie Hypertonie, DM, Rauchen).</li>
                    <li>Schutz vor thromboembolischen Ereignissen mittels therapeutischer Antikoagulation.</li>
                    <li><strong>Symptomkontrolle:</strong>
                        <ul>
                            <li><strong>Tachykardes VHF:</strong> Frequenzkontrolle oder Rhythmuskontrolle (s. Algorithmus).</li>
                            <li><strong>Bradykardes VHF:</strong> Absetzen bradykardisierender Medikamente, ggf. Therapie oder Pacing (s. SOP Bradykarde HRST).</li>
                        </ul>
                    </li>
                </ul>
                <h3>Frequenzkontrolle bei tachykardem VHF</h3>
                <p><strong>Ziel: Herzfrequenz < 110/min</strong> (bei persistierenden Beschwerden < 80/min).</p>
                <ul>
                    <li><strong>Metoprololtartrat (Beloc®):</strong> 2,5-5 mg i.v. (≙ ½-1 Ampulle), ggf. nach 5-10 min wiederholen (max. 15 mg/d).
                        <br>Zusätzlich/Alternativ oral: 50-100 mg 1-0-1 oder Metoprololsuccinat (Beloc-Zok®) 47,5-95 mg 1-0-0.
                        <br><span class="callout-cave">KI: (schweres) Asthma bronchiale, RRsys < 90 mmHg.</span></li>
                    <li><strong>Verapamil (Isoptin®):</strong> 5 mg langsam i.v. (≙ 1 Ampulle), nach 5-10 min ggf. wiederholen.
                        <br>Zusätzlich/Alternativ oral: 40-120 mg 1-1-1 oder 120-240 mg retard 1-0-1.
                        <br><span class="callout-cave">KI: eingeschränkte LV-EF (< 40%), RRsys < 90 mmHg. Kombination mit Betablockern vermeiden (Bradykardiegefahr!).</span></li>
                    <li><strong>Digoxin (Lanicor®):</strong> 0,25 mg i.v. (≙ 1 Ampulle). 
                        <br>Schema: Tag 1: 2-3x/d, Tag 2-3: 1x/d, ab Tag 3: 0,05-0,25 mg p.o./d.
                        <br><span class="callout-cave">KI: Hypokaliämie. CAVE: Kumulation bei Niereninsuffizienz (Spiegel!).</span></li>
                    <li><strong>Amiodaron (Cordarex®):</strong> 300 mg (≙ 2 Ampullen) in 250 ml G5%-Lösung über 20 min bis 2 h i.v.
                        <br>Einsatz sowohl zur Frequenzkontrolle als auch zur "medikamentösen" Kardioversion (Thrombenausschluss!).
                        <br><span class="callout-cave">KI: Schilddrüsenerkrankung, Jodallergie, Hypokaliämie, QTc-Zeit-Verlängerung.</span></li>
                </ul>
                <h3>Antikoagulation</h3>
                <ul>
                    <li><strong>Enoxaparin (Clexane®):</strong> 1,0 mg/kg KG s.c. alle 12 h.
                        <br><span class="callout-cave">GFR < 30 ml/min: alle 24 h; GFR < 15 ml/min: kontraindiziert.</span></li>
                    <li><strong>Heparinperfusor:</strong> 25.000 IE ad 50 ml NaCl 0,9%. Dosis: ca. 15-20 IE/kg KG/h (bei 70 kg ≙ 2,4 ml/h). Ziel-aPTT 1,5-2,5 fache der Norm.</li>
                    <li><strong>DOAK:</strong> z.B. Apixaban 5 mg 1-0-1 (Dosisanpassung s. Fachinfo).</li>
                    <li><strong>Marcumar:</strong> Ziel-INR 2-3, überlappend mit Heparin bis Ziel-INR erreicht.</li>
                    <li><span class="callout-cave"><strong>CAVE:</strong> Keine DOAK bei (mittel-)schwerer Mitralstenose oder mechanischer Herzklappe!</span></li>
                </ul>
                <h3>Sonstiges</h3>
                <ul>
                    <li><strong>Elektrolyte optimieren (hoch normal):</strong> Magnesium- und Kaliumsubstitution (s. SOP Hypokaliämie).</li>
                    <li><strong>Volumengabe:</strong> falls tachykardes VHF Ausdruck eines Volumenmangels ist.</li>
                </ul>`
            },
            {
                title: "Therapeutischer Algorithmus",
                html: `<div class="callout callout-hinweis">
                    <strong>Schritt 1: Akut reversible Ursache (PIRATES)?</strong>
                    <ul>
                        <li><strong>JA:</strong> Ursache identifizieren und behandeln. Zunächst KEINE Rhythmus- oder strikte Frequenzkontrolle (Tachykardie häufig "Bedarfstachykardie").</li>
                        <li><strong>NEIN:</strong> Gehe zu Schritt 2.</li>
                    </ul>
                </div>
                <div class="callout callout-wichtig">
                    <strong>Schritt 2: Patient instabil?</strong>
                    <p>(Kriterien: Schock, Synkope, Myokardischämie, schwere Herzinsuffizienz)</p>
                    <ul>
                        <li><strong>JA:</strong> <strong>Elektrische Kardioversion</strong> sofort.</li>
                        <li><strong>NEIN:</strong> Gehe zu Schritt 3.</li>
                    </ul>
                </div>
                <div class="callout callout-hinweis">
                    <strong>Schritt 3: Frequenz- oder Rhythmuskontrolle?</strong>
                    <ul>
                        <li><strong>Frequenzkontrolle:</strong> Metoprolol + ggf. Digitalis + ggf. Amiodaron oder Verapamil + ggf. Digitalis.</li>
                        <li><strong>Elektive Kardioversion (elektrisch/med.):</strong> Voraussetzung: Beginn VHF < 24 h und niedriges Risiko ODER wirksame OAK > 3 Wochen ODER TEE ohne Thromben.</li>
                    </ul>
                </div>
                <div class="callout callout-cave">
                    <strong>Bei 3x frustraner elektrischer Kardioversion:</strong>
                    <ul>
                        <li>Elektrolyte hoch normal einstellen.</li>
                        <li>Amiodaron-Kurzinfusion.</li>
                        <li>Patchposition optimieren + <strong>externer Druck</strong>.</li>
                    </ul>
                </div>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li><strong>Vorhofflattern</strong> wird analog behandelt (Frequenzkontrolle jedoch oft frustran).</li>
                    <li>Herzfrequenz < 150/min ist unwahrscheinlich als primärer Grund für hämodynamische Instabilität (&rarr; andere Ursachen suchen!).</li>
                    <li><strong>VHF + WPW-Syndrom:</strong> Adenosin, Beta-Blocker, Verapamil und Digitalis sind <strong>kontraindiziert</strong> (Gefahr von Kammerflimmern!). Elektrische Kardioversion ist Mittel der Wahl.</li>
                    <li>Bei elektrischer Kardioversion direkt mit maximal verfügbarer Joulezahl beginnen (höhere Erfolgsrate).</li>
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
                                <td>Suffiziente Frequenzkontrolle bzw. Konversion in SR, sichere orale Antikoagulation gewährleistet</td>
                                <td><strong>Ambulantes Procedere</strong></td>
                            </tr>
                            <tr>
                                <td>Akute behandlungsbedürftige Ursache, Erstdiagnose VHF zur Abklärung oder geplante elektive Kardioversion</td>
                                <td><strong>Stationäre Aufnahme</strong></td>
                            </tr>
                            <tr>
                                <td>Frustrane Frequenz-/Rhythmuskontrolle (z.B. HF > 120/min) oder instabiler Patient</td>
                                <td><strong>Überwachungsstation (IMC/ICU)</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            }
        ],
        stand: "10/25",
        sources: `Deutsche Gesellschaft für Kardiologie. S3-Leitlinie Vorhofflimmern – Version 1.<br>
        Van Gelder IC et al. 2024 ESC Guidelines for the management of atrial fibrillation. Eur Heart J. 2024.<br>
        Bauersachs J et al. Lieferengpass Digitoxin - Stellungnahme der DGK. Kardiologie 2023.<br>
        Scheuermeyer FX et al. Emergency Department Patients With Atrial Fibrillation or Flutter and an Acute Underlying Medical Illness. Ann Emerg Med. 2015.<br>
        Stiell IG et al. 2021 CAEP Acute Atrial Fibrillation/Flutter Best Practices Checklist. CJEM. 2021.`
    });
})();