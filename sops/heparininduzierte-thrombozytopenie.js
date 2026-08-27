(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "heparininduzierte-thrombozytopenie",
        title: "Heparininduzierte Thrombozytopenie (HIT) II",
        category: "Hämatologie",
        catKey: "haem",
        sections: [
            {
                title: "Definition",
                html: `<p><strong>Heparininduzierte Thrombozytopenie (HIT) II:</strong> Prothrombotische Arzneimittelnebenwirkung, die durch IgG-Antikörper gegen einen Komplex aus Plättchenfaktor 4 und Heparin ausgelöst wird.</p>`
            },
            {
                title: "Ursachen",
                html: `<ul>
                    <li>Heparinexposition</li>
                    <li><strong>Inzidenz:</strong> Unfraktioniertes Heparin (UFH) > niedermolekulares Heparin (NMH); therapeutische > prophylaktische Gabe.</li>
                </ul>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li>ggf. asymptomatisch bzw. isolierter Thrombozytenabfall.</li>
                    <li><strong>Thrombozytenabfall:</strong> > 50%, meist < 100.000/µl, i.d.R. 5–10 Tage nach Heparingabe (bei kürzlicher Sensibilisierung innerhalb von Stunden möglich).</li>
                    <li><strong>Thrombosen/Embolien:</strong> in ca. 50% der Fälle.</li>
                    <li><strong>Anaphylaktoide Reaktion:</strong> Fieber, Schüttelfrost, Hypotonie, Tachykardie, Dyspnoe, akute Kopfschmerzen, TIA, Hautnekrosen an Heparingabestelle.</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                html: `<h3>Allgemein</h3>
                <ul>
                    <li>Differentialdiagnostisches Vorgehen bei unklarer Thrombozytopenie &rarr; s. SOP Thrombozytopenie.</li>
                </ul>
                <h3>Spezielle Diagnostik</h3>
                <ul>
                    <li><strong>4T-Score</strong> (s. Tabelle unten).</li>
                    <li><strong>ggf. Antigentest:</strong> (z.B. Plättchenfaktor-4-Heparin-ELISA) und <strong>ggf. Funktionstest</strong> (z.B. HIPA).</li>
                    <li><strong>ggf. POCUS:</strong> (Thrombose?).</li>
                    <li><strong>ggf. weiterführende Diagnostik:</strong> CT (LAE? Sinusvenenthrombose? Mesenterialvenenthrombose? Pfortaderthrombose?).</li>
                </ul>`
            },
            {
                title: "4T-Score",
                html: `<div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>HIT-Verdachtskriterien</th>
                                <th>2 Punkte</th>
                                <th>1 Punkt</th>
                                <th>0 Punkte</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>T</strong>hrombozytopenie</td>
                                <td>Niedrigster Wert ≥ 20.000/µl und > 50% Abfall</td>
                                <td>Niedrigster Wert 10–19.000/µl oder 30–50% Abfall (oder > 50% unmittelbar postoperativ)</td>
                                <td>Niedrigster Wert < 10.000/µl oder < 30% Abfall</td>
                            </tr>
                            <tr>
                                <td><strong>T</strong>ag des Auftretens</td>
                                <td>Tag 5–10 oder ≤ Tag 1 bei früherer Heparintherapie (letzte 30 Tage)</td>
                                <td>Unbekannt, aber könnte zur HIT II passen, bzw. > Tag 10 bzw. ≤ Tag 1 bei früherer Heparintherapie (letzte 30 bis 90 Tage)</td>
                                <td>Tag < 4 (keine frühere Heparintherapie)</td>
                            </tr>
                            <tr>
                                <td><strong>T</strong>hrombosen oder Komplikationen</td>
                                <td>Gesicherte neue Thrombose, Hautnekrosen, anaphylaktoide Reaktion (nach Heparinbolus)</td>
                                <td>Fortschreitende oder rezidivierende Thrombose, V.a. Thrombose (noch nicht bestätigt) oder nicht nekrotisierende Hautläsionen</td>
                                <td>Keine Komplikationen</td>
                            </tr>
                            <tr>
                                <td>Andere (<strong>"oTher"</strong>) Gründe</td>
                                <td>Keine</td>
                                <td>Denkbar</td>
                                <td>Definitiv</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p><em>0–3 Punkte = niedrige Wahrscheinlichkeit // 4–5 Punkte = mittlere Wahrscheinlichkeit // 6–8 Punkte = hohe Wahrscheinlichkeit</em></p>`
            },
            {
                title: "Therapie",
                html: `<h3>Gesicherte HIT II (mit oder ohne Thrombose)</h3>
                <ul>
                    <li><strong>Sofortiger Stopp der Heparingabe.</strong></li>
                    <li><strong>Sofortige therapeutische Antikoagulation mit Nicht-Heparin-Antikoagulans:</strong>
                        <ul>
                            <li><strong>Danaparoid (Orgaran®):</strong> 2250 E i.v. Bolus (&lt; 55 kg: 1500 E; &gt; 90 kg: 3750 E), dann 400 E/h über 4 h, dann 300 E/h über 4 h, dann 150–200 E/h über 5–7 d. Steuerung mittels <strong>Anti-Xa-Plasmaspiegel</strong>.</li>
                            <li><strong>Argatroban (Argatra®):</strong> 2 µg/kg/min i.v. (Leberzirrhose Child-Pugh B oder kritisch Kranke: Start mit 0,5 µg/kg/min i.v.). Steuerung mittels <strong>aPTT</strong> (Ziel-aPTT 1,5–3,0-fache der Norm).</li>
                            <li><strong>Fondaparinux (Arixtra®):</strong> 7,5 mg s.c. (&lt; 50 kg: 5 mg; &gt; 100 kg: 10 mg) 1x/d. (CAVE: Off-Label-Use, keine Anwendung bei GFR &lt; 30 ml/min). Steuerung mittels Anti-Xa-Plasmaspiegel.</li>
                        </ul>
                    </li>
                </ul>
                <h3>Verdacht auf HIT II</h3>
                <ul>
                    <li><strong>4T-Score ≥ 6 Punkte</strong> (hoher Verdacht) oder <strong>4T-Score 4–5 Punkte</strong> (mittlerer Verdacht) + <strong>pos. Antigentest:</strong> Vorgehen wie bei gesicherter HIT II.</li>
                    <li><strong>Besonderheit bei 4T-Score von 4–5 Punkten und ausstehendem Antigentest:</strong>
                        <ul>
                            <li>Keine Thrombose nachweisbar, keine zusätzliche Indikation für therapeutische Antikoagulation, hohes Blutungsrisiko, hohe Wahrscheinlichkeit für andere Genese &rarr; <strong>Prophylaktische Antikoagulation mit Nicht-Heparin-Antikoagulans</strong> (z.B. Danaparoid 750 IE s.c. 1-1-1 oder Fondaparinux 2,5 mg s.c. 1x/d), bis Testergebnisse vorliegen.</li>
                        </ul>
                    </li>
                    <li><strong>Therapiestopp,</strong> falls sich Verdacht nicht bestätigt.</li>
                </ul>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li>Eine HIT II ist auch bei Patienten in der Notaufnahme möglich (kürzlich vorangegangener Krankenhausaufenthalt? postinterventionell?).</li>
                    <li>Standardisiertes Vorgehen nach 4T-Score, <strong>KEIN "Screening" bei 4T-Score ≤ 3 Punkten</strong> (falsch positive Ergebnisse möglich).</li>
                    <li><strong>HIT I:</strong> Nicht-immunologisch-vermittelter, milder Thrombozytenabfall (max. um 30%) in den ersten 5 d nach Heparinexposition mit spontaner Normalisierung ohne Krankheitswert &rarr; Heparingabe weiterführen.</li>
                </ul>`
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
                        <p class="dispo-spec">Nicht vorgesehen bei begründetem HIT-Verdacht.</p>
                        <p class="dispo-foot">Wiedervorstellung jederzeit bei Verschlechterung anbieten; Kontrollzeitpunkt durch den weiterbehandelnden Arzt festlegen.</p>
                    </section>
                    <section class="dispo-card dispo-gelb">
                        <header class="dispo-head"><span class="dispo-dot" aria-hidden="true"></span><h3>GELB &ndash; Stationäre Aufnahme (Normalstation / ZNA-Station)</h3></header>
                        <p class="dispo-sub">Regelpfad Fachabteilung</p>
                        <ul class="dispo-contacts">
                        <li class="dispo-contact"><span class="dispo-fach">Hämatologie</span><span class="dispo-tel">4006 / 4933</span><span class="dispo-note">Onkologischer Oberarzt: 4600</span></li>
                        </ul>
                        <p class="dispo-spec">Heparin sofort absetzen und alternative Antikoagulation vor Verlegung festlegen.</p>
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
                        <li class="dispo-contact"><span class="dispo-fach">IMC 2.0 (KAIM, 2 Erd)</span><span class="dispo-tel">4764</span><span class="dispo-note">internistische IMC</span></li>
                        <li class="dispo-contact"><span class="dispo-fach">ITS-Koordinator</span><span class="dispo-tel">3008</span><span class="dispo-note">zentraler ITS-Aufnahmekontakt</span></li>
                        </ul>
                        <p class="dispo-foot">Anmeldung immer über den ITS-Koordinator (3008); Transport erst nach Stabilisierung und mit ärztlicher Begleitung.</p>
                    </section>
                </div>`
            }
        ],
        stand: "05/23",
        sources: `Herold G et al. Innere Medizin 2019, S. 834 f. – Greinacher A et al. Heparininduzierte Thrombozytopenie. Gefässchirurgie 23, 193–207 (2018). – Greinacher A. Heparin-Induced Thrombocytopenia. N Engl J Med. 2015 Nov 5;373(19):1883-4. – Cuker A et al. American Society of Hematology 2018 guidelines for management of venous thromboembolism: heparin-induced thrombocytopenia. Blood Adv. 2018 Nov 27;2(22):3360-3392. – Fachinformationen der genannten Arzneimittel, Stand 05/23.`
    });
})();