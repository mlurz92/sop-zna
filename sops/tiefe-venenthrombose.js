(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "tiefe-venenthrombose",
        title: "Tiefe Venenthrombose (TVT)",
        category: "Hämatologie",
        catKey: "haem",
        stand: "05/24",
        sections: [
            {
                title: "Definition",
                html: `<p><strong>Tiefe Venenthrombose (TVT):</strong> Partielle oder vollständige Verlegung der Leit- und/oder Muskelvenen durch Thromben.</p>
                <p>Ursächlich ist eine Beeinträchtigung des venösen Blutflusses, eine Schädigung des Endothels oder Veränderungen in der Zusammensetzung des Blutes zugunsten von prokoagulatorischen Faktoren (<strong>Virchow-Trias</strong>).</p>`
            },
            {
                title: "Ursachen",
                html: `<ul>
                    <li><strong>Unprovoziert:</strong> Idiopathisch, keine ersichtlichen Risikofaktoren.</li>
                    <li><strong>Provoziert:</strong> Transiente oder persistierende Risikofaktoren:
                        <ul>
                            <li>Immobilisation (Fraktur, Bettruhe, Langstreckenflug, etc.)</li>
                            <li>Tumorerkrankung</li>
                            <li>Hormoneinnahme, Schwangerschaft</li>
                            <li>Thrombophilien (angeboren oder erworben)</li>
                            <li>Medikamente (z.B. Heparin → Verdacht auf HIT II prüfen!)</li>
                        </ul>
                    </li>
                </ul>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li>Lokale Schwellung.</li>
                    <li>Spannungsgefühl, Schmerzen.</li>
                    <li>Verstärkte Venenzeichnung, Zyanose.</li>
                    <li>ggf. oligo- bis asymptomatisch.</li>
                </ul>
                <div class="callout callout-cave">
                    <p><strong>Symptome von Komplikationen:</strong></p>
                    <ul>
                        <li>Dyspnoe bei begleitender Lungenarterienembolie (LAE).</li>
                        <li><strong>Phlegmasia coerulea dolens:</strong> Massive Schwellung, fehlende Pulse und livide Verfärbung (Notfall!).</li>
                    </ul>
                </div>`
            },
            {
                title: "Diagnostik & Wells-Score",
                html: `<ul>
                    <li><strong>Ersteindruck + ABCDE + Vitalparameter.</strong></li>
                    <li><strong>Anamnese:</strong> Symptome? Krebserkrankung? OP? Immobilisation? Rauchen?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Umfangsdifferenz? Fußpulse? Kollateralvenen?</li>
                    <li><strong>Labor:</strong> BB, CRP, E'lyte, NW, CK, TSH, Gerinnung.
                    <br><strong>D-Dimere:</strong> Indikation abhängig von der Vortestwahrscheinlichkeit (Wells-Score).</li>
                </ul>
                <h3>Wells-Score (Tiefe Beinvenenthrombose)</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Kriterium</th>
                                <th>Punkte</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>Malignom (aktiv, palliativ oder Diagnose < 6 Monate)</td><td>1</td></tr>
                            <tr><td>Ruhigstellung eines Beines (Verband, Parese)</td><td>1</td></tr>
                            <tr><td>Bettruhe ≥ 3 d oder großer chir. Eingriff ≤ 3 Monate</td><td>1</td></tr>
                            <tr><td>Druckschmerz im Verlauf der tiefen Venen</td><td>1</td></tr>
                            <tr><td>Schwellung des gesamten Beines</td><td>1</td></tr>
                            <tr><td>Unterschenkelschwellung (Umfangsdiff. ≥ 3 cm zum Partnerbein)</td><td>1</td></tr>
                            <tr><td>Einseitiges Ödem am symptomatischen Bein</td><td>1</td></tr>
                            <tr><td>Prominente, nicht-variköse oberflächliche Kollateralvenen</td><td>1</td></tr>
                            <tr><td>Frühere dokumentierte TVT in der Vorgeschichte</td><td>1</td></tr>
                            <tr><td>Alternative Diagnose mindestens ebenso wahrscheinlich wie TVT</td><td>-2</td></tr>
                        </tbody>
                    </table>
                </div>
                <div class="callout callout-hinweis">
                    <p><strong>Auswertung:</strong><br>
                    • ≤ 1 Punkt: <strong>Niedrige Wahrscheinlichkeit</strong><br>
                    • ≥ 2 Punkte: <strong>Hohe Wahrscheinlichkeit</strong></p>
                </div>`
            },
            {
                title: "Diagnostischer Algorithmus (POCUS)",
                html: `<p>Vorgehen bei Erstereignis unter Anwendung limitierter Ultraschallprotokolle:</p>
                <ul>
                    <li><strong>Wells-Score ≤ 1 (Unwahrscheinlich):</strong>
                        <ul>
                            <li>D-Dimere bestimmen.</li>
                            <li>Grenzwerte: < 500 µg/l bzw. <strong>altersadaptiert</strong> (Alter x 10 µg/l ab dem 50. Lebensjahr, z.B. < 800 µg/l für 80-Jährige).</li>
                            <li>Unter Grenzwert &rarr; <strong>Ausschluss TVT</strong>.</li>
                            <li>Über Grenzwert &rarr; POCUS (2-Punkt-KUS).</li>
                        </ul>
                    </li>
                    <li><strong>Wells-Score ≥ 2 (Wahrscheinlich):</strong>
                        <ul>
                            <li>Direkt POCUS (2-Punkt-Kompressionsultraschall über Leiste und Knie).</li>
                            <li>TVT nachgewiesen &rarr; Antikoagulation.</li>
                            <li>TVT nicht nachweisbar &rarr; dv-KUS (vollständig) innerhalb von 4-7 Tagen.</li>
                        </ul>
                </ul>
                <div class="callout callout-hinweis">
                    <p>Falls POCUS nicht zeitnah möglich &rarr; Therapeutische Antikoagulation bis zur Durchführung eines dv-KUS innerhalb von 4-7 Tagen.</p>
                </div>`
            },
            {
                title: "Therapie",
                html: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li><strong>Kompressionstherapie:</strong> initial Kompressionsverband, im Verlauf Kompressionsstrümpfe Klasse II (CAVE: pAVK, PNP).</li>
                    <li><strong>Mobilisierung:</strong> Keine Bettruhe notwendig!</li>
                </ul>
                <h3>Therapeutische Antikoagulation</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Wirkstoff</th>
                                <th>Initialtherapie</th>
                                <th>Erhaltung</th>
                                <th>Nierenfunktion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td colspan="4"><strong>Direkte orale Antikoagulanzien (DOAK)</strong></td></tr>
                            <tr><td>Apixaban</td><td>10 mg p.o. 2x/d für 7 d</td><td>5 mg p.o. 2x/d</td><td>GFR ≥ 15 ml/min</td></tr>
                            <tr><td>Rivaroxaban</td><td>15 mg p.o. 2x/d für 21 d</td><td>20 mg p.o. 1x/d</td><td>GFR ≥ 15 ml/min</td></tr>
                            <tr><td>Dabigatran</td><td>NMH/UFH für min. 5 d</td><td>150 mg p.o. 2x/d</td><td>GFR ≥ 30 ml/min</td></tr>
                            <tr><td>Edoxaban</td><td>NMH/UFH für min. 5 d</td><td>60 mg p.o. 1x/d</td><td>GFR ≥ 50 ml/min</td></tr>
                            <tr><td colspan="4"><strong>Vitamin-K-Antagonisten (VKA)</strong></td></tr>
                            <tr><td>Phenprocoumon</td><td>6 mg d1+d2, überlappend NMH/UFH bis INR ≥ 2</td><td>INR-Ziel 2-3</td><td>Auch bei Dialyse*</td></tr>
                            <tr><td colspan="4"><strong>Parenterale Antikoagulation</strong></td></tr>
                            <tr><td>NMH (Enoxaparin)</td><td colspan="2">100 IE/kg KG s.c. 2x/d</td><td>GFR ≥ 30 ml/min</td></tr>
                            <tr><td>Fondaparinux</td><td colspan="2">7,5 mg s.c. 1x/d (<50kg: 5mg; >100kg: 10mg)</td><td>GFR ≥ 30 ml/min</td></tr>
                            <tr><td>UFH</td><td colspan="2">Bolus 5000 IE i.v., dann Perfusor 15-20 IE/kg/h (Ziel aPTT 1,5-2,5x Norm)</td><td>Auch bei Dialyse</td></tr>
                        </tbody>
                    </table>
                </div>
                <p><small>*Laut Fachinfo formal kontraindiziert, aber klinischer Standard bei Dialysepflicht.</small></p>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li>Alleinige D-Dimer-Bestimmung ohne Berücksichtigung der Vortestwahrscheinlichkeit ist zum Ausschluss nicht ausreichend.</li>
                    <li>Gefährliche Komplikationen: Lungenarterienembolie, paradoxe Embolien, Phlegmasia coerulea dolens.</li>
                    <li><strong>Verdacht auf HIT II:</strong> Bei Thrombose trotz bestehender Heparinisierung stets an Heparin-induzierte Thrombozytopenie Typ II denken!</li>
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
                        <p class="dispo-spec">Unkomplizierte TVT mit gesicherter Antikoagulation und Kompression: ambulante Weiterbehandlung.</p>
                        <p class="dispo-foot">Wiedervorstellung jederzeit bei Verschlechterung anbieten; Kontrollzeitpunkt durch den weiterbehandelnden Arzt festlegen.</p>
                    </section>
                    <section class="dispo-card dispo-gelb">
                        <header class="dispo-head"><span class="dispo-dot" aria-hidden="true"></span><h3>GELB &ndash; Stationäre Aufnahme (Normalstation / ZNA-Station)</h3></header>
                        <p class="dispo-sub">Regelpfad Fachabteilung</p>
                        <ul class="dispo-contacts">
                        <li class="dispo-contact"><span class="dispo-fach">Angiologie</span><span class="dispo-tel">4006 / 4933</span><span class="dispo-note">Gefäßchirurgie: 4923 / 2766</span></li>
                        </ul>
                        <p class="dispo-spec">Stationär bei Phlegmasia, Lyseindikation oder begleitender LAE.</p>
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
                        <li class="dispo-contact"><span class="dispo-fach">ITS-Koordinator</span><span class="dispo-tel">3008</span><span class="dispo-note">zentraler ITS-Aufnahmekontakt</span></li>
                        <li class="dispo-contact"><span class="dispo-fach">IMC 2.0 (KAIM, 2 Erd)</span><span class="dispo-tel">4764</span><span class="dispo-note">internistische IMC</span></li>
                        </ul>
                        <p class="dispo-foot">Anmeldung immer über den ITS-Koordinator (3008); Transport erst nach Stabilisierung und mit ärztlicher Begleitung.</p>
                    </section>
                </div>
                <p class="dispo-actions"><button type="button" class="dispo-dir-btn" data-dir-open><i class="fa-solid fa-address-book"></i> Vollständiges Telefonverzeichnis öffnen</button></p>`
            }
        ],
        sources: `AWMF-S2k-Leitlinie: Diagnostik und Therapie der Venenthrombose und Lungenembolie (02/2023).<br>
        ESVS 2021 Clinical Practice Guidelines on the Management of Venous Thrombosis. Eur J Vasc Endovasc Surg.<br>
        Herold G et al. Innere Medizin 2019, S. 826 ff.<br>
        Fachinformationen der Antikoagulanzien (Stand 06/23).`
    });
})();