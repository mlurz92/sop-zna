(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "asthmaexazerbation",
        title: "Asthmaexazerbation",
        category: "Pneumologie",
        catKey: "pulmo",
        sections: [
            {
                title: "Definition",
                html: `<p><strong>Asthmaexazerbation:</strong> Progrediente Zunahme der Asthma-Symptome/Abnahme der Lungenfunktion, die über das für den Patienten übliche Maß an Variabilität hinausgeht und eine Anpassung der Therapie über mehrere Tage erforderlich macht.</p>
                <div class="callout callout-cave">
                    <p><strong>Status asthmaticus:</strong> Vital bedrohliche, trotz adäquater Therapie schwer zu durchbrechende Asthmaexazerbation ≥ 24 h.</p>
                </div>`
            },
            {
                title: "Ursachen",
                html: `<ul>
                    <li><strong>Allergisch:</strong> Allergen-Exposition.</li>
                    <li><strong>Nicht allergisch:</strong>
                        <ul>
                            <li>Virale oder bakterielle Atemwegsinfekte.</li>
                            <li>Körperliche Belastung („Anstrengungsasthma“).</li>
                            <li>Medikamente (ASS, β-Blocker, etc.).</li>
                            <li>Kalte Luft, inhalative Reizstoffe.</li>
                            <li>Inadäquate Therapie.</li>
                        </ul>
                    </li>
                </ul>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li>Dyspnoe, Tachypnoe, Orthopnoe.</li>
                    <li>Einsatz der Atemhilfsmuskulatur, Zyanose.</li>
                    <li>Husten, Brustenge.</li>
                    <li><strong>Zeichen der bronchialen Obstruktion:</strong> Giemen, Brummen, Pfeifen, verlängertes Exspirium.</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur).</li>
                    <li>1x venöser Zugang.</li>
                    <li><strong>Venöse, ggf. arterielle BGA:</strong> pH? pO₂? pCO₂? BE? Laktat?</li>
                    <li><strong>Labor:</strong> Diff-BB, CRP, E’lyte, ggf. IgE, NT-proBNP, D-Dimere.</li>
                    <li><strong>Anamnese:</strong> Symptome? Beginn? Fieber? Auswurf? Trigger? Allergen? Anaphylaxie? Vorangegangene Exazerbationen? Medikamente? Adhärenz?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Vigilanz? Zyanose? Tachypnoe? Einsatz Atemhilfsmuskulatur? Verlängertes Exspirium? Bronchospasmus? „Silent Lung“?</li>
                    <li><strong>POCUS:</strong> Pneumothorax? Infiltrate? Differentialdiagnosen?</li>
                    <li><strong>ggf. Röntgen-Thorax:</strong> Pneumothorax? Infiltrate? Differentialdiagnosen?</li>
                    <li><strong>ggf. Peak-Flow-Messung:</strong> Falls möglich vor Therapiebeginn und im Verlauf zur Evaluation des Therapieansprechens.</li>
                    <li><strong>ggf. Anlage eines arteriellen Zugangs.</strong></li>
                </ul>`
            },
            {
                title: "Therapie",
                html: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li>Stabilisierung der Vitalfunktionen gemäß ABCDE-Schema.</li>
                    <li>Patienten beruhigen.</li>
                    <li>Sitzende Position bzw. Oberkörperhochlagerung und atemerleichternde Maßnahmen (z.B. Lippenbremse).</li>
                    <li><strong>Kontrollierte O₂-Gabe bei Hypoxie:</strong> ca. 2-4 l über Nasenbrille, Ziel-SpO₂: 92–96 % bzw. 88–92 % (bei Hyperkapnie-Risiko).</li>
                    <li><strong>ggf. NIV:</strong> (s. Anleitung SOP Dyspnoe) oder Intubation als Ultima Ratio (Ketamin-basierte Narkose) bei respiratorischer Insuffizienz.</li>
                </ul>

                <h3>Medikamentöse Therapie</h3>
                <ul>
                    <li><strong>Salbutamol (Sultanol® forte):</strong> Inhalation: 2,5 mg (1x Fertiginhalat ≙ 2,5 ml), ggf. nach 20 Minuten wiederholen.</li>
                    <li><strong>Ipratropiumbromid (Atrovent®):</strong> Inhalation: 0,5 mg (2x Fertiginhalat ≙ 4 ml), ggf. nach 30 Minuten wiederholen.</li>
                    <li><strong>Prednisolon (Solu-Decortin®):</strong> 20 mg p.o. einmalig bis 50–100 mg p.o. oder i.v. alle 4–6 h (je nach Schweregrad).</li>
                </ul>

                <h3>ggf. Therapieeskalation</h3>
                <ul>
                    <li><strong>Reproterol (Bronchospasmin®):</strong> 0,09 mg (1 Ampulle) langsam i.v. (ggf. nach 10 Minuten wiederholen).
                        <ul>
                            <li>Ggf. kontinuierlich als Perfusor 0,018–0,09 mg/h (≙ 5 Ampullen Reproterol auf 50 ml, Laufrate 2–10 ml/h).</li>
                        </ul>
                    </li>
                    <li><strong>Terbutalin (Bricanyl®):</strong> 0,25–0,5 mg (½–1 Ampulle) s.c. (max. alle 4 h, max. 4x/d).</li>
                    <li><strong>Magnesiumsulfat:</strong> 2 g über 20 Minuten i.v. (≙ 4 ml 50 % Magnesiumsulfat in 50 ml NaCl 0,9 %).</li>
                    <li><strong>Theophyllin (Euphylong®):</strong> 5 mg/kg KG als Kurzinfusion i.v. (Dosisreduktion bei vorbestehender Theophyllintherapie erwägen).</li>
                </ul>

                <div class="callout callout-hinweis">
                    <p><strong>Sonstiges:</strong> Adrenalin 0,5 mg i.m. (bei Asthmaanfall im Rahmen einer anaphylaktischen Reaktion, s. SOP Anaphylaxie).</p>
                </div>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li><strong>Sedativa</strong> (falls möglich) vermeiden (Gefahr der Atemdepression).</li>
                    <li><strong>β-Blocker, Mukopharmaka, Dimenhydrinat (Vomex®)</strong> sind im akuten Asthmaanfall kontraindiziert.</li>
                    <li>Keine großen Flüssigkeitsvolumina infundieren (kardiale Belastung).</li>
                    <li>Antibiotika nur bei begründetem Verdacht eines bakteriellen Auslösers der Exazerbation geben.</li>
                </ul>`
            },
            {
                title: "Schweregrade der Asthmaexazerbation",
                html: `<div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Merkmal</th>
                                <th>Leicht / Mittelschwer</th>
                                <th>Schwer</th>
                                <th>Lebensbedrohlich</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Sprechen</strong></td>
                                <td>unbeeinträchtigt</td>
                                <td>Sprech-Dyspnoe</td>
                                <td>unfähig / Silben</td>
                            </tr>
                            <tr>
                                <td><strong>Atemfrequenz</strong></td>
                                <td>&lt; 25/min</td>
                                <td>&ge; 25/min</td>
                                <td>flache Atmung</td>
                            </tr>
                            <tr>
                                <td><strong>Herzfrequenz</strong></td>
                                <td>&lt; 110/min</td>
                                <td>&ge; 110/min</td>
                                <td>Bradykardie / Schock</td>
                            </tr>
                            <tr>
                                <td><strong>Peak-Flow (PEF)</strong></td>
                                <td>&ge; 50 % Bestwert</td>
                                <td>&lt; 50 % Bestwert</td>
                                <td>&lt; 33 % Bestwert</td>
                            </tr>
                            <tr>
                                <td><strong>Sauerstoff (SaO₂)</strong></td>
                                <td>&ge; 92 %</td>
                                <td>&ge; 92 %</td>
                                <td>&lt; 92 %</td>
                            </tr>
                            <tr>
                                <td><strong>Besonderheiten</strong></td>
                                <td>-</td>
                                <td>Einsatz Atemhilfsmuskulatur</td>
                                <td>Silent Lung, Zyanose, Verwirrtheit, Koma, PaCO₂ norm/&gt;45 mmHg</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Disposition",
                html: `<p class="dispo-intro">Verbindliche hausinterne Dispositionsrichtlinie der ZNA (Klinikum St. Georg). Die Farbstufe ergibt sich aus Klinik, Vitalparametern und Verlauf &ndash; nicht aus einem Einzelwert.</p>
                <div class="dispo">
                    <section class="dispo-card dispo-gruen">
                        <header class="dispo-head"><span class="dispo-dot" aria-hidden="true"></span><h3>GRÜN &ndash; Ambulanter Verbleib</h3></header>
                        <dl class="dispo-meta">
                            <dt>Entscheidung</dt><dd>Behandelnder Arzt ZNA</dd>
                            <dt>Pfad</dt><dd>Entlassung nach Hause, Anbindung an Hausarzt oder MVZ</dd>
                        </dl>
                        <p class="dispo-spec">Nach Symptomfreiheit und PEF &gt; 70 % des Sollwertes mit Steroidplan und pneumologischer Kontrolle.</p>
                        <p class="dispo-foot">Wiedervorstellung jederzeit bei Verschlechterung anbieten; Kontrollzeitpunkt durch den weiterbehandelnden Arzt festlegen.</p>
                    </section>
                    <section class="dispo-card dispo-gelb">
                        <header class="dispo-head"><span class="dispo-dot" aria-hidden="true"></span><h3>GELB &ndash; Stationäre Aufnahme (Normalstation / ZNA-Station)</h3></header>
                        <p class="dispo-sub">Regelpfad Fachabteilung</p>
                        <ul class="dispo-contacts">
                        <li class="dispo-contact"><span class="dispo-fach">Pneumologie</span><span class="dispo-tel">4006 / 4933</span><span class="dispo-note">ITS Pneumologie (2.1): 4217</span></li>
                        </ul>
                        
                        <div class="dispo-block">
                            <p class="dispo-sub">Entlassung am Folgetag angestrebt (ZNA-Station / A&amp;B-Station)</p>
                            <dl class="dispo-meta">
                                <dt>Indikation</dt><dd>gemäß Statut ZNA und Statut Aufnahme- und Beobachtungsstation</dd>
                                <dt>Bedingung</dt><dd>nur nach Rücksprache mit Facharzt ZNA / OA ZNA</dd>
                                <dt>Kontakt</dt><dd>ZNA-Station 4B: 4812 &middot; Bettenmanagement: 4299</dd>
                            </dl>
                        </div>
                    </section>
                    <section class="dispo-card dispo-rot">
                        <header class="dispo-head"><span class="dispo-dot" aria-hidden="true"></span><h3>ROT &ndash; Kritisch / Intensivmedizinische Überwachung</h3></header>
                        <p class="dispo-sub">Aufnahme ITS / IMC</p>
                        <ul class="dispo-contacts">
                        <li class="dispo-contact"><span class="dispo-fach">ITS Pneumologie (2.1)</span><span class="dispo-tel">4217</span></li>
                        <li class="dispo-contact"><span class="dispo-fach">ITS-Koordinator</span><span class="dispo-tel">3008</span><span class="dispo-note">zentraler ITS-Aufnahmekontakt</span></li>
                        </ul>
                        <p class="dispo-foot">Anmeldung immer über den ITS-Koordinator (3008); Transport erst nach Stabilisierung und mit ärztlicher Begleitung.</p>
                    </section>
                </div>
                <p class="dispo-actions"><button type="button" class="dispo-dir-btn" data-dir-open><i class="fa-solid fa-address-book"></i> Vollständiges Telefonverzeichnis öffnen</button></p>`
            }
        ],
        stand: "10/24",
        sources: `Herold G et al. Innere Medizin 2019, S. 360 ff. – Bundesärztekammer (BÄK), Kassenärztliche Bundesvereinigung (KBV), Arbeitsgemeinschaft der Wissenschaftlichen Medizinischen Fachgesellschaften (AWMF). Nationale VersorgungsLeitlinie Asthma, Version 5.0. 2024. – S2k-Leitlinie Fachärztliche Diagnostik und Therapie von Asthma 2023. Version: 3.1. Registernummer 020 - 009 – Global Initiative for Asthma. Global Strategy for Asthma Management and Prevention, 2023. Updated July 2023. – Fachinformationen der genannten Arzneimittel, Stand 12/22.`
    });
})();