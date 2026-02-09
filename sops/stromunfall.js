// SOP: Stromunfall
// Kategorie: Toxikologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "stromunfall",
        title: "Stromunfall",
        category: "Toxikologie",
        catKey: "tox",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Stromunfall:</strong> Schädigung des Organismus durch Einwirkung von elektrischem Strom auf den Körper</li>
</ul>
<h3>Einteilung</h3>
<ul>
<li><strong>Niederspannung:</strong> < 1000 V (Haushaltsstrom 230 V) – häufiger, kardiogene Gefahr</li>
<li><strong>Hochspannung:</strong> ≥ 1000 V – thermische Gewebeschädigung, häufig letal</li>
<li><strong>Blitzschlag:</strong> bis 100 Mio. V, sehr kurze Einwirkzeit</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li>Unfälle im Haushalt (Kinder!)</li>
<li>Arbeitsunfälle (Elektriker, Bauarbeiter)</li>
<li>Blitzschlag</li>
<li>Suizidale Absicht (selten)</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Kardial:</strong> Herzrhythmusstörungen (VF bei Niederspannung! Asystolie bei Hochspannung!), ACS, Myokardschädigung</li>
<li><strong>Neurologisch:</strong> Bewusstlosigkeit, Krampfanfälle, Paresen, Parästhesien, Amnesie</li>
<li><strong>Verbrennungen:</strong> Strommarken (Ein- und Austritt), tiefe Gewebsverbrennungen bei Hochspannung (Eisbergphänomen!)</li>
<li><strong>Muskuloskelettal:</strong> Rhabdomyolyse, Kompartmentsyndrom, Frakturen (durch tetanische Muskelkontraktion oder Sturz)</li>
<li><strong>Renal:</strong> AKI durch Rhabdomyolyse/Myoglobinurie</li>
<li><strong>Respiratorisch:</strong> Atemstillstand (Zwerchfellspasmus, zentraler Atemstillstand)</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Eisbergphänomen</strong> bei Hochspannungsunfällen: Das Ausmaß der <strong>inneren Gewebsschädigung</strong> (Muskeln, Gefäße, Nerven) ist weit größer als die äußerlich sichtbaren Verbrennungen!</p></div>`
},
{
title: "Diagnostik",
html: `<ul>
<li><strong>Ersteindruck + ABCDE + Vitalparameter</strong></li>
<li>1–2x venöser Zugang</li>
<li><strong>12-Kanal-EKG</strong> (Arrhythmien? Ischämiezeichen?)</li>
<li><strong>Kontinuierliches EKG-Monitoring</strong> (Arrhythmien können verzögert auftreten!)</li>
<li><strong>BGA</strong> (Laktat? pH? K⁺?)</li>
<li><strong>Labor:</strong> BB, E'lyte, NW, <strong>CK, CK-MB</strong>, <strong>hs-Troponin</strong>, <strong>Myoglobin</strong>, LDH, GOT, GPT, Gerinnung, <strong>Urinstatus</strong> (Myoglobinurie?)</li>
<li><strong>Anamnese:</strong> Spannung? Stromstärke? Stromquelle? AC/DC? Kontaktdauer? Strompfad? Bewusstlosigkeit? Sturz? Tetanusimpfstatus?</li>
<li>Körperliche Untersuchung: <strong>Strommarken</strong> (Ein-/Austrittsstelle)? Verbrennungen? Frakturen? Kompartmentsyndrom?</li>
<li>Rö-Thorax, ggf. CT bei V.a. Frakturen, CT-Abdomen bei Hochspannung</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Sofortmaßnahmen</h3>
<ul>
<li><strong>Eigenschutz!</strong> Stromquelle abschalten, Verunglückten aus dem Stromkreis befreien</li>
<li>CPR bei Herz-Kreislauf-Stillstand (ALS-Algorithmus)</li>
<li>ABCDE-Stabilisierung</li>
<li>Atemwegssicherung bei Bewusstlosigkeit</li>
</ul>
<h3>Kardiales Management</h3>
<ul>
<li><strong>EKG-Monitoring für mindestens 24h</strong> bei: pathologischem EKG, Bewusstlosigkeit, Hochspannung, Strompfad durch Thorax, bekannter Herzerkrankung</li>
<li>Arrhythmie-Behandlung nach Standard-Algorithmen</li>
</ul>
<h3>Verbrennungsmanagement</h3>
<ul>
<li>Wundversorgung der Strommarken</li>
<li>Bei Hochspannung: Verbrennungszentrum (ausgedehnte tiefe Gewebsschädigung!)</li>
</ul>
<h3>Rhabdomyolyse-Prophylaxe/-Therapie</h3>
<ul>
<li><strong>Aggressive Volumengabe</strong> (Ziel-Urinmenge 200–300 ml/h bei CK ↑)</li>
<li>CK-Monitoring alle 6–12h</li>
<li>E'lyt-Kontrolle (Hyperkaliämie!)</li>
</ul>
<h3>Sonstiges</h3>
<ul>
<li>Tetanusprophylaxe aktualisieren</li>
<li>Fasziotomie bei Kompartmentsyndrom</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Eigenschutz hat oberste Priorität!</strong></li>
<li><strong>EKG-Monitoring</strong> bei allen relevanten Stromunfällen</li>
<li>Niederspannung: Hauptgefahr = <strong>Kammerflimmern</strong></li>
<li>Hochspannung: Hauptgefahr = <strong>Gewebedestruktion</strong> + Rhabdomyolyse + Asystolie</li>
<li><strong>Eisbergphänomen:</strong> Innere Schädigung >> äußere Sichtbarkeit</li>
<li><strong>CK, Troponin, Myoglobin</strong> bestimmen → Rhabdomyolyse? Myokardschaden?</li>
<li>Schwangere: fetales Monitoring (Gefahr fetaler Arrhythmien!)</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> Hochspannung, Blitzschlag, Reanimation, pathologisches EKG, Rhabdomyolyse, schwere Verbrennungen</li>
<li><strong>Überwachungsstation (24h):</strong> Niederspannung mit pathologischem EKG, Bewusstlosigkeit, Strompfad durch Thorax</li>
<li><strong>Verbrennungszentrum:</strong> Hochspannungsverbrennung</li>
<li><strong>Ambulant:</strong> Niederspannung, asymptomatisch, normales EKG, kein Bewusstseinsverlust, unauffälliges Labor</li>
</ul>`
}
],
        stand: "12/24",
        sources: `Waldmann V et al. Electrical injuries. N Engl J Med. 2022;387(16):1492-1502.<br>Pilecky D et al. Risk of cardiac arrhythmias after electrical accidents: a prospective study. Heart. 2019;105(16):1229-1234.`
    });
})();
