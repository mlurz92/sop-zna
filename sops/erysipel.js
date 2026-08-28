(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "erysipel",
        title: "Erysipel",
        category: "Infektiologie",
        catKey: "infekt",
        sections: [
            {
                title: "Definition",
                content: `<ul>
                    <li><strong>Erysipel:</strong> Akut bakterielle, nicht-eitrige Infektion der Dermis, die die Lymphspalten und Lymphgefäße mit einbezieht.</li>
                    <li><strong>Kompliziertes Erysipel:</strong> Erysipel im Gesichtsbereich oder bullöses, hämorrhagisches oder nekrotisierendes Erysipel.</li>
                </ul>`
            },
            {
                title: "Ursachen",
                content: `<p>Meist <strong>ß-hämolysierende Streptokokken</strong> (häufig Vorliegen einer Eintrittspforte wie z.B. interdigitale Mykose, Ulcera, Wunden).</p>`
            },
            {
                title: "Symptome",
                content: `<ul>
                    <li>Akutes, überwärmtes, scharf begrenztes, leicht schmerzhaftes, hellrotes, glänzendes Erythem (meist untere Extremität, Gesicht).</li>
                    <li>ggf. <strong>Zeichen einer Lokalreaktion:</strong> bullöses, hämorrhagisches oder nekrotisierendes Erysipel bzw. Lymphadenopathie oder Lymphangitis.</li>
                    <li><strong>Zeichen der systemischen Entzündungsreaktion:</strong> ggf. bereits vor Hautrötung: Schüttelfrost, Fieber, Unwohlsein; erhöhte Entzündungsparameter.</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                content: `<ul>
                    <li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur).</li>
                    <li><strong>Anamnese:</strong> Symptome? Beginn? Fieber? Vorerkrankungen? Immunsuppression? Hinweise für andere Differentialdiagnosen?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Charakteristischer Hautbefund? Eintrittspforte? <br><strong>Wichtig:</strong> Ausdehnung des Erysipels mit Stift markieren.</li>
                    <li><strong>Labor:</strong> BB, CRP, ggf. Elyte, NW., Bilirubin, Gerinnung, PCT.</li>
                    <li>ggf. <strong>weitere Diagnostik:</strong> &ge; 2 Paar Blutkulturen, Wundabstriche, POCUS, etc.</li>
                </ul>`
            },
            {
                title: "Therapie",
                content: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li>Analgesie, Kühlung, Ruhigstellung, Hochlagern der betroffenen Extremität.</li>
                    <li><div class="callout callout-cave"><strong>CAVE:</strong> Thromboseprophylaxe, z.B. Enoxaparin 0,4 ml s.c. 1x/d.</div></li>
                    <li>Sanierung der Eintrittspforte (z.B. antimykotische Therapie).</li>
                </ul>
                <h3>Antibiotische Therapie</h3>
                <ul>
                    <li><strong>Unkompliziertes Erysipel:</strong> Penicillin V 1,2-1,5 Mio IE 1-1-1 p.o. für 7-14 d.</li>
                    <li><strong>Kompliziertes Erysipel bzw. starke systemische Entzündungsreaktion:</strong> Penicillin G 10 Mio IE 1-1-1 i.v. für 7-10 d.</li>
                    <li>Penicillin ist Mittel der Wahl; bei Penicillin-Allergie: Clindamycin 600 mg 1-1-1 p.o. bzw. i.v.</li>
                </ul>`
            },
            {
                title: "Merke",
                content: `<p><strong>Wichtige Differentialdiagnosen:</strong></p>
                <ul>
                    <li><strong>Phlegmone:</strong> Erythem dunkel, livide, unscharf begrenzt, schmerzhaft teigiges Ödem.</li>
                    <li><strong>Nekrotisierende Fasziitis:</strong> unscharf begrenzte Rötung, Ödem, Vernichtungsschmerz.</li>
                    <li><strong>Stauungsdermatitis:</strong> meist beidseitig, nicht überwärmt, schleichender Beginn, keine Entzündungszeichen.</li>
                    <li><strong>Tiefe Beinvenenthrombose (TVT):</strong> meist einseitig, livid-rote Verfärbung, Ödem, anamnestische Hinweise (s. SOP TVT).</li>
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
                        <p class="dispo-spec">Begrenztes Erysipel ohne Systemzeichen: orale Antibiose, Markierung und Kontrolle in 48 h.</p>
                        <p class="dispo-foot">Wiedervorstellung jederzeit bei Verschlechterung anbieten; Kontrollzeitpunkt durch den weiterbehandelnden Arzt festlegen.</p>
                    </section>
                    <section class="dispo-card dispo-gelb">
                        <header class="dispo-head"><span class="dispo-dot" aria-hidden="true"></span><h3>GELB &ndash; Stationäre Aufnahme (Normalstation / ZNA-Station)</h3></header>
                        <p class="dispo-sub">Regelpfad Fachabteilung</p>
                        <ul class="dispo-contacts">
                        <li class="dispo-contact"><span class="dispo-fach">Infektiologie</span><span class="dispo-tel">4005</span><span class="dispo-note">Infektionsambulanz: 4715</span></li>
                        </ul>
                        <p class="dispo-spec">Stationär bei Sepsiszeichen, Immunsuppression oder Therapieversagen.</p>
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
        date: "12/23",
        sources: "S2k Leitlinie „Kalkulierte parenterale Initialtherapie bakterieller Erkrankungen bei Erwachsenen – Update 2018“, 2. aktualisierte Version – Borst C et al. Pathogenese, Klinik und Therapie des Erysipels. hautnah 21, 55–62 (2022). – AWMF S1-Leitlinie Differentialdiagnose akuter und chronischer Rötungen im Bereich der Unterschenkel (013-100), 2021."
    });
})();