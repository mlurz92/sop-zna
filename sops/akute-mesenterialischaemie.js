// SOP: Akute Mesenterialischämie
// Kategorie: Gastroenterologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "akute-mesenterialischaemie",
        title: "Akute Mesenterialischämie",
        category: "Gastroenterologie",
        catKey: "gi",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Akute Mesenterialischämie:</strong> Akute Minderdurchblutung des Darms mit drohender Darmnekrose und hoher Letalität (60–80%)</li>
</ul>
<h3>Formen</h3>
<ul>
<li><strong>Arterielle Embolie (50%):</strong> meist A. mesenterica superior (Emboliequelle: VHF, Endokarditis, Aortenaneurysma)</li>
<li><strong>Arterielle Thrombose (25%):</strong> auf dem Boden einer vorbestehenden Arteriosklerose</li>
<li><strong>Non-okklusive Mesenterialischämie (NOMI, 20%):</strong> funktionelle Minderdurchblutung bei Low-Output (kardiogener Schock, Sepsis, Vasopressortherapie)</li>
<li><strong>Mesenterialvenenthrombose (5%):</strong> Pfortaderthrombose, Thrombophilie, Leberzirrhose, Pankreatitis</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Risikofaktoren arterielle Embolie:</strong> Vorhofflimmern, Klappenersatz, Endokarditis, Z.n. Myokardinfarkt, Aortenaneurysma</li>
<li><strong>Risikofaktoren arterielle Thrombose:</strong> Arteriosklerose, Diabetes mellitus, pAVK, bekannte Mesenterialstenose</li>
<li><strong>Risikofaktoren NOMI:</strong> Kardiogener Schock, Sepsis, Herzchirurgie, Hämodialyse, hochdosierte Vasopressoren</li>
<li><strong>Risikofaktoren venöse Thrombose:</strong> Leberzirrhose, Thrombophilie, myeloproliferative Erkrankungen, Pankreatitis, abdominelle Operationen</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Leitsymptom:</strong> Akut einsetzender, <strong>heftigster abdomineller Schmerz</strong>, initial oft <strong>unverhältnismäßig</strong> im Vergleich zum Untersuchungsbefund (<strong>„Schmerz-Befund-Diskrepanz"</strong>)</li>
<li>Übelkeit, Erbrechen, Diarrhoe (ggf. blutig)</li>
<li>Hämatochezie oder Meläna (Zeichen der Darmnekrose)</li>
<li>Zunehmend <strong>Abwehrspannung</strong> und <strong>Peritonismus</strong> (Zeichen der Nekrose/Perforation – Spätstadium!)</li>
<li>Tachykardie, Hypotonie, Schockzeichen</li>
<li>Fehlende Darmgeräusche (paralytischer Ileus)</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Im Frühstadium kann der abdominelle Untersuchungsbefund blande sein, obwohl der Patient stärkste Schmerzen angibt! Die <strong>Schmerz-Befund-Diskrepanz</strong> ist hochverdächtig!</p></div>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1–2x großlumiger venöser Zugang</li>
<li><strong>BGA</strong> (Laktat! pH? BE? – <strong>Laktaterhöhung ist ein Alarmzeichen!</strong>)</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte, NW, GOT, GPT, LDH, Lipase, Gerinnung, Laktat, PCT, Kreuzblut</li>
<li>12-Kanal-EKG (Vorhofflimmern als Emboliequelle?)</li>
</ul>
<h3>Klinische Untersuchung</h3>
<ul>
<li><strong>Anamnese:</strong> Schmerzbeginn (akut?)? Schmerzcharakter? Vorerkrankungen (VHF, pAVK, Arteriosklerose)? Medikamente (Antikoagulation, Vasopressoren)? Vorangegangene kardiovaskuläre Ereignisse?</li>
<li><strong>Körperliche Untersuchung:</strong> Abdomen (initial weich trotz Schmerzen? Abwehrspannung? Peritonismus?), Darmgeräusche? Blut im Stuhl (DRU)?</li>
</ul>
<h3>Bildgebung</h3>
<ul>
<li><strong>CT-Angiographie (Abdomen + Becken)</strong> = Goldstandard: Gefäßverschluss? Darmwandverdickung? Pneumatosis intestinalis? Portale Gasansammlung? Freie Flüssigkeit/Luft?</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Bei begründetem klinischem Verdacht auf Mesenterialischämie keine Zeit durch andere Untersuchungen verlieren – <strong>sofortige CT-Angiographie!</strong></p></div>`
},
{
title: "Therapie",
html: `<h3>Allgemeinmaßnahmen</h3>
<ul>
<li>Stabilisierung gemäß ABCDE-Schema</li>
<li>Aggressive Volumentherapie (Vollelektrolytlösung)</li>
<li>Analgesie (Opioide i.v. titrierend)</li>
<li>Nahrungskarenz, Magensonde</li>
<li>Breitspektrum-Antibiotikatherapie (z.B. Piperacillin/Tazobactam 4,5 g i.v.)</li>
<li><strong>Therapeutische Antikoagulation</strong> mit UFH (Ziel-PTT 60–80s)</li>
</ul>
<h3>Spezifische Therapie</h3>
<ul>
<li><strong>Arterielle Embolie/Thrombose:</strong>
<ul>
<li>Interventionelle Therapie (Katheter-Thrombektomie, lokale Lyse) oder</li>
<li>Chirurgische Embolektomie/Thrombektomie ± Bypass</li>
<li>Bei Zeichen der Darmnekrose: <strong>Notfall-Laparotomie</strong> mit Resektion des nekrotischen Darms</li>
</ul>
</li>
<li><strong>NOMI:</strong> Behandlung der Grunderkrankung (Kreislaufstabilisierung, Vasopressoren reduzieren wenn möglich), intraarterielle Papaverin-Infusion, ggf. OP</li>
<li><strong>Mesenterialvenenthrombose:</strong> Therapeutische Antikoagulation, ggf. chirurgische Intervention bei Peritonitis</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Zeitfaktor!</strong> Die Prognose hängt entscheidend von der Zeitspanne bis zur Revaskularisierung ab. Jede Verzögerung erhöht die Letalität!</p></div>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Akute Mesenterialischämie = vaskulärer Notfall</strong> – Letalität 60–80% bei verzögerter Diagnose!</li>
<li>Daran denken bei: <strong>akuter Bauchschmerz + VHF + Laktaterhöhung</strong></li>
<li><strong>Schmerz-Befund-Diskrepanz</strong> (stärkste Schmerzen, weiches Abdomen) ist hochverdächtig – nicht abwarten!</li>
<li><strong>Laktat</strong> ist der wichtigste Labormarker (aber: normales Laktat schließt nicht aus!)</li>
<li>Goldstandard: <strong>CT-Angiographie</strong> – sofort durchführen bei Verdacht</li>
<li>Interdisziplinäre Zusammenarbeit: <strong>Viszeralchirurgie + Interventionelle Radiologie + Intensivmedizin</strong></li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation</strong> (immer)</li>
<li>Sofortige viszeralchirurgische und ggf. interventionell-radiologische Mitbeurteilung</li>
<li>OP-Bereitschaft</li>
</ul>`
}
],
        stand: "12/24",
        sources: `Bala M et al. Acute mesenteric ischemia: updated guidelines of the WSES. World J Emerg Surg. 2022;17(1):54.<br>
Klar E et al. Akute mesenteriale Ischämie – ein vaskulärer Notfall. Dtsch Arztebl Int. 2012;109(14):249-56.<br>
Clair DG et al. Mesenteric Ischemia. N Engl J Med. 2016;374(10):959-68.`
    });
})();
