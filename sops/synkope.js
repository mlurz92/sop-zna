// SOP: Synkope
// Kategorie: Leitsymptom
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "synkope",
        title: "Synkope",
        category: "Leitsymptom",
        catKey: "leit",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Synkope:</strong> Transienter Bewusstseinsverlust (T-LOC) durch eine vorübergehende globale zerebrale Minderperfusion, gekennzeichnet durch schnellen Beginn, kurze Dauer und spontane, vollständige Erholung</li>
</ul>
<h3>Einteilung</h3>
<ul>
<li><strong>Reflexsynkope (neurokardiogen):</strong> vasovagal, situativ (Husten, Miktion, Defäkation), Karotissinussyndrom</li>
<li><strong>Orthostatische Synkope:</strong> autonome Dysfunktion, medikamentös, Volumenmangel</li>
<li><strong>Kardiogene Synkope:</strong> Arrhythmien, strukturelle Herzerkrankung (HOCM, Aortenstenose, LAE, Tamponade)</li>
</ul>`
},
{
title: "Ursachen",
html: `<h3>Häufig (low-risk)</h3>
<ul>
<li><strong>Vasovagale Synkope</strong> (häufigste Ursache!): emotionaler Trigger, langes Stehen, Hitze, Schmerz</li>
<li><strong>Situativ:</strong> Miktionssynkope, Hustenstoß, Defäkation, Schlucksynkope</li>
<li><strong>Orthostatisch:</strong> Medikamente (Antihypertensiva, Diuretika, α-Blocker, trizyklische AD, Neuroleptika), Volumenmangel, autonome Neuropathie</li>
</ul>
<h3>Gefährlich (high-risk)</h3>
<ul>
<li><strong>Kardiale Arrhythmien:</strong> AV-Block III°, Sick-Sinus-Syndrom, VT, Torsade de Pointes, Brugada-Syndrom, Long-QT-Syndrom, Schrittmacherdysfunktion</li>
<li><strong>Strukturelle Herzerkrankung:</strong> Aortenstenose, HOCM, Myokardinfarkt, LAE, Perikardtamponade, Aortendissektion</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Synkope bei Belastung</strong> (Sport, Treppensteigen) → immer an <strong>kardiale Ursache</strong> denken (Aortenstenose, HOCM, Arrhythmie)!</p></div>`
},
{
title: "Symptome",
html: `<ul>
<li>Plötzlicher <strong>Bewusstseinsverlust</strong> mit Tonusverlust und Sturz</li>
<li>Kurze Dauer (Sekunden bis max. 1–2 min)</li>
<li><strong>Spontane, vollständige Erholung</strong></li>
<li>ggf. <strong>Prodromi bei vasovagaler Synkope:</strong> Schwindel, Übelkeit, Schwitzen, Wärmegefühl, Tunnelblick, Ohrensausen</li>
<li>ggf. kurze Myoklonien während der Synkope (DD epileptischer Anfall!)</li>
<li>ggf. <strong>keine Prodromi</strong> bei kardiogener Synkope (Alarmzeichen!)</li>
</ul>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter (inkl. orthostasetest: RR liegend + nach 3 min Stehen)</li>
<li>1x venöser Zugang</li>
<li><strong>12-Kanal-EKG</strong> (obligat bei jeder Synkope!)</li>
<li><strong>BGA</strong> (Hb? Glukose? Laktat?)</li>
<li><strong>Labor:</strong> BB, E'lyte, NW, Glukose, hs-Troponin, ggf. D-Dimere, β-HCG</li>
</ul>
<h3>Klinische Untersuchung</h3>
<ul>
<li><strong>Anamnese (WICHTIGSTE Diagnostik!):</strong> Auslöser? Position? Prodromi? Dauer? Zeugenbeobachtung? Zungenbiss (lateral = epi, Zungenspitze = Synkope)? Postiktale Verwirrtheit (> 5 min = epi)? Belastungssynkope? Palpitationen? Thoraxschmerz? Familienanamnese (plötzlicher Herztod!)?</li>
<li><strong>Körperliche Untersuchung:</strong> Herzgeräusch (Aortenstenose)? Karotisgeräusch? Neurologischer Status? Verletzungen durch Sturz?</li>
</ul>
<h3>Risikostratifizierung (High-Risk-Merkmale)</h3>
<ul>
<li>Synkope bei Belastung oder im Liegen</li>
<li>Keine/kurze Prodromi, Palpitationen vor Synkope</li>
<li>Pathologisches EKG (AV-Block, LSB, QTc > 460 ms, Brugada-Muster, WPW)</li>
<li>Strukturelle Herzerkrankung (HI, KHK, HOCM)</li>
<li>Familienanamnese für plötzlichen Herztod (< 40 J.)</li>
<li>Anämie, niedrige SpO₂, Troponin ↑</li>
</ul>`
},
{
title: "Therapie",
html: `<ul>
<li><strong>Ursachenbehandlung!</strong></li>
<li><strong>Vasovagal:</strong> Aufklärung, Trigger-Vermeidung, physische Gegenmanöver (Beine kreuzen, Hände zusammenpressen), ausreichende Flüssigkeitszufuhr</li>
<li><strong>Orthostatisch:</strong> Auslösende Medikamente reduzieren/absetzen, Kompressionsstrümpfe, Flüssigkeit + Kochsalz, ggf. Midodrin</li>
<li><strong>Kardiale Arrhythmie:</strong> Schrittmacher (bei Bradykardie/AV-Block), ICD (bei VT/VF), Katheterablation, Antiarrhythmika</li>
<li><strong>Strukturell:</strong> Aortenklappenersatz (Aortenstenose), PCI/ACVB (ACS), Therapie der LAE, Perikardpunktion</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Anamnese</strong> ist die wichtigste Diagnostik bei Synkope!</li>
<li><strong>EKG ist Pflicht</strong> bei jeder Synkope!</li>
<li><strong>High-Risk-Merkmale</strong> identifizieren → Kardiologische Abklärung!</li>
<li>DD <strong>Epilepsie:</strong> prolongierte Bewusstlosigkeit, postiktale Verwirrtheit > 5 min, lateraler Zungenbiss, Enuresis → eher epileptisch</li>
<li><strong>Synkope bei Belastung = kardiogen bis zum Beweis des Gegenteils!</strong></li>
<li>An <strong>LAE</strong> und <strong>Aortendissektion</strong> als lebensgefährliche Ursachen denken!</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Stationär:</strong> High-Risk-Merkmale, pathologisches EKG, strukturelle Herzerkrankung, Synkope bei Belastung, rezidivierende Synkopen, relevante Verletzungen</li>
<li><strong>Ambulant:</strong> Low-Risk, typische vasovagale Synkope, normales EKG, keine Risikofaktoren</li>
</ul>`
}
],
        stand: "12/24",
        sources: `Brignole M et al. 2018 ESC Guidelines for the diagnosis and management of syncope. Eur Heart J. 2018;39(21):1883-1948.<br>Costantino G et al. Syncope clinical management in the emergency department: a consensus from the first international workshop on syncope risk stratification in the emergency department. Eur Heart J. 2016;37(19):1493-8.`
    });
})();
