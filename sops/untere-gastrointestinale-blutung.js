(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "untere-gastrointestinale-blutung",
        title: "Untere Gastrointestinale Blutung",
        category: "Gastroenterologie",
        catKey: "gi",
        stand: "12/22",
        sections: [
            {
                title: "Definition",
                html: `<p><strong>Untere gastrointestinale Blutung (UGIB):</strong> Gastrointestinale Blutung distal des Treitz-Bandes (Übergang Duodenum-Jejunum).</p>`
            },
            {
                title: "Ursachen",
                html: `<ul>
                    <li><strong>Divertikelblutung</strong> (ca. 30 %).</li>
                    <li><strong>Hämorrhoiden.</strong></li>
                    <li><strong>Ischämien.</strong></li>
                    <li><strong>CED.</strong></li>
                    <li><strong>Sonstige:</strong> Tumoren, Rektalulcera, Angiodysplasien, Post-Polypektomie, etc.</li>
                </ul>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li><strong>Hämatochezie:</strong>
                        <ul>
                            <li>Frisches Blut, streifenförmig auf Stuhl aufliegend (Rektumblutung).</li>
                            <li>Dunkelrote, geleeartige Blutbeimischung bzw. Koagel (Kolonblutung).</li>
                        </ul>
                    </li>
                    <li><strong>Meläna.</strong></li>
                    <li><strong>Erhöhte Stuhlfrequenz und Hypermotilität des Darmes.</strong></li>
                    <li><strong>ggf. Begleitsymptome:</strong> z.B. Aspiration, Synkope, Schock.</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li><strong>Ersteindruck + ABCDE + Vitalparameter:</strong> RR, Puls, SpO₂, AF, Temperatur.</li>
                    <li><strong>1-2x großlumiger venöser Zugang.</strong></li>
                    <li><strong>Venöse BGA:</strong> Hb? pH? BE? Laktat?</li>
                    <li><strong>Kreuzblut abnehmen + ggf. EK (z.B. 2-4 Stück) anfordern.</strong></li>
                    <li><strong>Labor:</strong> BB, NW, Gerinnung, Leberwerte.</li>
                    <li><strong>12-Kanal-EKG:</strong> Ischämiezeichen?</li>
                    <li><strong>Anamnese:</strong> Symptome? Blutungsstigmata? Medikamente (NSAR, TAH, OAK, SSRI)? Vorerkrankungen (Divertikulose, Hämorrhoiden)? Letzte Endoskopie?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Rekap-Zeit? Blasse Konjunktiven? Abdomineller Druckschmerz? Hämorrhoiden? <strong>Blut/Teerstuhl in DRU?</strong></li>
                </ul>
                <div class="callout callout-wichtig">
                    <p>Frühzeitige Rücksprache mit Gastroenterologie bei kreislaufwirksamer Blutung!</p>
                </div>`
            },
            {
                title: "Therapie",
                html: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li>Stabilisierung der Vitalfunktionen gemäß ABCDE-Schema.</li>
                    <li><strong>Frühzeitige Schutzintubation bei Aspirationsgefahr:</strong> Anästhesie informieren.</li>
                    <li><strong>Patienten nüchtern lassen.</strong></li>
                    <li><strong>Kreislaufstabilisierung:</strong> Ziel: MAD > 65 mmHg, Normalisierung von Herzfrequenz und erhöhtem Laktatspiegel.
                        <ul>
                            <li>Bei Kreislaufinstabilität: Hochdosierte O₂-Gabe (auch bei normalem SpO₂) und <strong>Schocklagerung</strong> (Oberkörper flach mit angehobenen Beinen).</li>
                            <li>500-1000 ml Vollelektrolytlösung i.v.</li>
                            <li><strong>Transfusion von EK bei Hb < 7 g/dl:</strong> Ziel-Hb: 7-9 g/dl.</li>
                            <li>Bei anämischer Hypoxie (z.B. Typ 2 Myokardinfarkt) bereits bei <strong>Hb 8-10 g/dl</strong>.</li>
                            <li>Bei massiver Blutung nach klinischer Einschätzung unabhängig vom Hb-Wert (s. SOP Anämie).</li>
                        </ul>
                    </li>
                </ul>
                <h3>Optimierung der Gerinnung</h3>
                <ul>
                    <li>Antagonisierung von DOAK, TAH, NMH oder Vitamin-K-Antagonisten erwägen.</li>
                    <li><strong>DOAK periinterventionell pausieren:</strong> Ausnahme: Hohes Thromboembolierisiko oder mechanische Klappe, dann interdisziplinäre Absprache mit Gastroenterologen + Kardiologen; Wiederaufnahme frühestmöglich und innerhalb von 7 Tagen empfohlen.</li>
                    <li><strong>Thrombozytenaggregationshemmer:</strong> Bei Primärprophylaxe pausieren, bei Sekundärprophylaxe weitergeben (Ausnahme: akut lebensbedrohliche Blutung ggf. Antagonisierung mit TK).</li>
                </ul>
                <h3>Endoskopische Blutstillung</h3>
                <ul>
                    <li><strong>Bei hämorrhagischem Schock:</strong> Endoskopie < 12 h (ÖGD + ggf. Rekto-/Sigmoidoskopie oder Koloskopie).</li>
                    <li><strong>Bei hämodynamischer Stabilität:</strong> Koloskopie nach entsprechender Vorbereitung.</li>
                </ul>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li>Der Hb-Wert „hinkt“ bei aktiver Blutung hinterher, Vitalparameter (Puls, Blutdruck) sind viel sensitiver.</li>
                    <li><strong>Bei 10-15 % der Patienten mit Hämatochezie liegt eine massive OGIB vor</strong>, daher bei Verdacht entsprechende medikamentöse Therapie (s. SOP OGIB) und <strong>zuerst ÖGD</strong> (vor Spiegelung des unteren GI-Traktes).</li>
                    <li>Bei V.a. GI-Blutung immer digital rektale Untersuchung durchführen.</li>
                    <li>Auch bei Vorliegen von Hämorrhoiden sollte (im Verlauf) eine Koloskopie z.A. anderer Blutungsursachen erfolgen.</li>
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
                        <p class="dispo-spec">Nur bei minimaler, selbstlimitierender Blutung nach OA-Rücksprache.</p>
                        <p class="dispo-foot">Wiedervorstellung jederzeit bei Verschlechterung anbieten; Kontrollzeitpunkt durch den weiterbehandelnden Arzt festlegen.</p>
                    </section>
                    <section class="dispo-card dispo-gelb">
                        <header class="dispo-head"><span class="dispo-dot" aria-hidden="true"></span><h3>GELB &ndash; Stationäre Aufnahme (Normalstation / ZNA-Station)</h3></header>
                        <p class="dispo-sub">Regelpfad Fachabteilung</p>
                        <ul class="dispo-contacts">
                        <li class="dispo-contact"><span class="dispo-fach">Gastroenterologie</span><span class="dispo-tel">4006 / 4933</span><span class="dispo-note">Endoskopie: 2674 (tags) / 5663 (Dienst)</span></li>
                        </ul>
                        <p class="dispo-spec">Bei transfusionspflichtiger Blutung Endoskopie und ggf. interventionelle Radiologie (4573) avisieren.</p>
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
        sources: `Herold G et al. Innere Medizin 2019, S. 453 ff.<br>
        Götz M. et al. S2k-Leitlinie Gastrointestinale Blutung. Z Gastroenterol 2017; 55(09): 883-936.<br>
        Ghassemi KA et al. Lower GI bleeding: epidemiology and management. Curr Gastroenterol Rep. 2013 Jul;15(7):333.`
    });
})();