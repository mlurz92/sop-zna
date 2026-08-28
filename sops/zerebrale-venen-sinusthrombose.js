(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "zerebrale-venen-sinusthrombose",
        title: "Zerebrale Venen-/Sinusthrombose",
        category: "Neurologie",
        catKey: "neuro",
        date: "03/25",
        sections: [
            {
                title: "Definition",
                html: `<p><strong>Zerebrale Venen- und Sinusthrombose (CVST):</strong> Thrombose der venösen Blutleiter im Gehirn mit Entwicklung einer venösen Abflussstörung und Gefahr von konsekutiver Ödembildung, Ischämien und Stauungsblutungen.</p>`
            },
            {
                title: "Ursachen",
                html: `<h3>Aseptisch (90%)</h3>
                <ul>
                    <li><strong>Hormoneinnahme:</strong> z.B. kombinierte Kontrazeptiva, Hormonersatztherapie.</li>
                    <li><strong>Thrombophilie:</strong> z.B. Protein-C/S-Mangel, Antiphospholipid-Syndrom.</li>
                    <li><strong>Schwangerschaft:</strong> insbesondere 3. Trimenon und Wochenbett.</li>
                    <li><strong>Myeloproliferative Erkrankungen:</strong> z.B. bei JAK2V617F-Mutation.</li>
                    <li><strong>Sonstige:</strong> z.B. idiopathisch, Vaskulitiden, Kollagenosen, Malignom.</li>
                </ul>
                <h3>Septisch (10%)</h3>
                <ul>
                    <li><strong>Lokale Infektionen:</strong> z.B. Otitis media, Mastoiditis, Sinusitis, Meningitis.</li>
                </ul>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li><strong>Kopfschmerzen:</strong> Leitsymptom in 90 % der Fälle.</li>
                    <li>Epileptische Anfälle.</li>
                    <li>Fokal-neurologische Defizite.</li>
                    <li>Stauungspapille, Sehstörungen.</li>
                    <li>Übelkeit, Erbrechen.</li>
                    <li>Vigilanzminderung bis hin zum Koma.</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li><strong>Ersteindruck + ABCDE + Vitalparameter:</strong> RR, Puls, SpO₂, AF, Temperatur.</li>
                    <li><strong>1x venöser Zugang.</strong></li>
                    <li><strong>Labor:</strong> BB, CRP, E'lyte, NW, Gerinnung, TSH.
                    <br>Ggf. zusätzlich: <strong>beta-HCG, D-Dimere, BSG</strong>.</li>
                    <li><strong>Anamnese:</strong> Kopfschmerzen? Epileptischer Anfall? Fokal-neurologische Ausfälle? Sehstörungen? Vorerkrankungen? Gerinnungsstörung? Medikamente? Kombiniertes Kontrazeptivum? Schwangerschaft? Hormoneinnahme? Infektionen im Kopfbereich?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Vigilanz? GCS? Fokal-neurologisches Defizit? Meningismus? <strong>Infektfokus im Zahn-/Kiefer-/HNO-Bereich?</strong></li>
                    <li><strong>Bildgebung (Mittel der Wahl):</strong>
                        <ul>
                            <li><strong>cMRT + KM-Venografie:</strong> Goldstandard, keine Strahlenbelastung.</li>
                            <li><strong>cCT + KM-Venografie:</strong> gute Verfügbarkeit, schnelle Durchführbarkeit.</li>
                        </ul>
                    </li>
                    <li>Ggf. weitere Diagnostik zum Ausschluss von Differentialdiagnosen (BGA, 12-Kanal-EKG, Fundoskopie, CTA, Lumbalpunktion, etc.).</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p>Zeitnahe Rücksprache mit Neurologie + ggf. weiteren Fachdisziplinen (Neuroradiologie/-chirurgie, HNO, MKG)!</p>
                </div>`
            },
            {
                title: "Therapie",
                html: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li>Stabilisierung der Vitalfunktionen gemäß ABCDE-Schema.</li>
                    <li><strong>Ursachen beheben:</strong> z.B. Kontrazeptivum absetzen, Fokussanierung und antibiotische Therapie bei septischer CVST.</li>
                    <li>Bedarfsgerechte analgetische und antiemetische Therapie.</li>
                    <li><strong>Anfallsdurchbrechung:</strong> (s. SOP Status epilepticus), Anfallsprophylaxe nur nach stattgehabtem epileptischem Anfall.</li>
                </ul>
                <h3>Therapeutische Antikoagulation</h3>
                <ul>
                    <li><strong>NMH s.c. gewichtsadaptiert:</strong> Mittel der Wahl.</li>
                    <li><strong>UFH i.v.:</strong> bei GFR < 15 ml/min oder falls eine neurochirurgische Intervention geplant ist.</li>
                    <li>Nach Akutphase Umstellung auf DOAK (nach neurologischer Maßgabe).</li>
                </ul>
                <div class="callout callout-cave">
                    <p><strong>WICHTIG:</strong> Auch bei Vorliegen einer begleitenden Hirnblutung ist in der Akutphase eine therapeutische Antikoagulation indiziert!</p>
                </div>
                <h3>Spezifische Therapie</h3>
                <ul>
                    <li><strong>Neuroradiologische Intervention:</strong> Einzelfallentscheidung bei Verschlechterung der Symptomatik trotz suffizienter Antikoagulation.</li>
                    <li><strong>Operative Dekompression:</strong> bei Stauungsödem/Hämorrhagie und drohender Einklemmung.</li>
                </ul>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li>Die CVST kann sich vielfältig präsentieren, Leitsymptom sind in 90 % der Fälle Kopfschmerzen.</li>
                    <li>Eine CVST sollte vor allem bei jungen Frauen, in Schwangerschaft/Wochenbett, bei Einnahme von hormonellen Kontrazeptiva sowie bei hereditären Thrombophilien in Betracht gezogen werden.</li>
                    <li>Bei Verdacht auf eine CVST &rarr; notfallmäßige Bildgebung: <strong>cMRT/cCT + KM-Venografie</strong> (CAVE: Nativ-CT nicht ausreichend!).</li>
                    <li>Kein sicherer Ausschluss einer CVST durch D-Dimer-Testung möglich (&rarr; keine routinemäßige D-Dimer-Bestimmung).</li>
                    <li>Lediglich bei <strong>ausgewählten Fällen</strong> (geringe klinische Wahrscheinlichkeit bei lediglich isoliertem Kopfschmerz, fehlenden neurologischen Symptomen und Symptomdauer < 30 Tage) kann bei negativen D-Dimeren auf eine Schnittbildgebung verzichtet werden.</li>
                    <li>Frauen mit stattgehabter CVST sollten keine kombinierten hormonellen Kontrazeptiva einnehmen und im Falle einer Schwangerschaft (und bis 6 Wochen danach) eine NMH-Prophylaxe erhalten.</li>
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
                        <p class="dispo-spec">Nicht vorgesehen.</p>
                        <p class="dispo-foot">Wiedervorstellung jederzeit bei Verschlechterung anbieten; Kontrollzeitpunkt durch den weiterbehandelnden Arzt festlegen.</p>
                    </section>
                    <section class="dispo-card dispo-gelb">
                        <header class="dispo-head"><span class="dispo-dot" aria-hidden="true"></span><h3>GELB &ndash; Stationäre Aufnahme (Normalstation / ZNA-Station)</h3></header>
                        <p class="dispo-sub">Regelpfad Fachabteilung</p>
                        <ul class="dispo-contacts">
                        <li class="dispo-contact"><span class="dispo-fach">Neurologie</span><span class="dispo-tel">4925</span><span class="dispo-note">identisch mit ITO / Stroke Unit</span></li>
                        <li class="dispo-contact"><span class="dispo-fach">Stroke Unit / Apoplex</span><span class="dispo-tel">4977</span><span class="dispo-note">ITO: 4925</span></li>
                        </ul>
                        <p class="dispo-spec">Antikoagulation und Stroke-Unit-Monitoring frühzeitig festlegen.</p>
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
        stand: "03/25",
        sources: `Weimar C et al. Zerebrale Venen- und Sinusthrombose, S2k-Leitlinie, 2023; in: Deutsche Gesellschaft für Neurologie (Hrsg.), Leitlinien für Diagnostik und Therapie in der Neurologie. AWMF-Versionsnr.: 6.1.<br>
        Hendin A et al. Just the facts: how to assess for cerebral venous thrombosis. CJEM. 2021.<br>
        Stam J. Thrombosis of the cerebral veins and sinuses. N Engl J Med. 2005.<br>
        Agrawal K et al. Cerebral Sinus Thrombosis. Headache. 2016.`
    });
})();