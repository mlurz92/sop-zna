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
                content: `<p><strong>Stationäre Aufnahme</strong> bei kompliziertem Erysipel, klinischer Instabilität oder unsicherer oraler Medikamentenaufnahme.</p>`
            }
        ],
        date: "12/23",
        sources: "S2k Leitlinie „Kalkulierte parenterale Initialtherapie bakterieller Erkrankungen bei Erwachsenen – Update 2018“, 2. aktualisierte Version – Borst C et al. Pathogenese, Klinik und Therapie des Erysipels. hautnah 21, 55–62 (2022). – AWMF S1-Leitlinie Differentialdiagnose akuter und chronischer Rötungen im Bereich der Unterschenkel (013-100), 2021."
    });
})();