// SOP: Harnwegsinfektion
// Kategorie: Infektiologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "harnwegsinfektion",
        title: "Harnwegsinfektion",
        category: "Infektiologie",
        catKey: "infekt",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Unkomplizierte HWI:</strong> HWI bei nicht-schwangeren, prämenopausalen Frauen ohne relevante Grunderkrankungen (Zystitis, Pyelonephritis)</li>
<li><strong>Komplizierte HWI:</strong> HWI bei Männern, Schwangeren, Kindern, bei anatomischen/funktionellen Anomalien, Katheter, Immunsuppression, Niereninsuffizienz</li>
<li><strong>Urosepsis:</strong> Sepsis mit Harnwegsinfekt als Fokus</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>E. coli</strong> (75–90%)</li>
<li>Staphylococcus saprophyticus (v.a. junge Frauen)</li>
<li>Klebsiella pneumoniae, Proteus mirabilis</li>
<li>Enterococcus faecalis</li>
<li>Pseudomonas aeruginosa (nosokomial, katheterassoziiert)</li>
</ul>`
},
{
title: "Symptome",
html: `<h3>Untere HWI (Zystitis)</h3>
<ul>
<li>Dysurie, Pollakisurie, Algurie</li>
<li>Suprapubischer Druckschmerz</li>
<li>ggf. Hämaturie</li>
<li>Kein Fieber</li>
</ul>
<h3>Obere HWI (Pyelonephritis)</h3>
<ul>
<li><strong>Flankenschmerz</strong>, <strong>Nierenlager-Klopfschmerz</strong></li>
<li><strong>Fieber</strong>, Schüttelfrost</li>
<li>Übelkeit, Erbrechen</li>
<li>ggf. Zystitis-Symptome</li>
</ul>
<h3>Urosepsis</h3>
<ul>
<li>Pyelonephritis-Symptome + Sepsis-Kriterien (Tachykardie, Hypotonie, Tachypnoe, Fieber/Hypothermie, Verwirrtheit)</li>
</ul>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1x venöser Zugang (bei Pyelonephritis/Urosepsis)</li>
<li><strong>Urin-Stix:</strong> Leukozyten, Nitrit, Erythrozyten</li>
<li><strong>Urinkultur + Resistenzbestimmung:</strong> bei Pyelonephritis, komplizierter HWI, Männern, Schwangeren, Therapieversagen, rezidivierender HWI</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte, NW, ggf. PCT, Laktat, Blutkulturen (bei Pyelonephritis/Sepsis)</li>
<li><strong>Sonographie Nieren/Blase:</strong> Harnstau? Abszess? Restharn?</li>
<li>ggf. CT-Abdomen (bei V.a. Komplikation: Abszess, Harnstau, emphysematöse Pyelonephritis)</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Unkomplizierte Zystitis</h3>
<ul>
<li><strong>Fosfomycin</strong> 3 g p.o. Einmaldosis (1. Wahl)</li>
<li><strong>Nitrofurantoin</strong> 100 mg 2x/d p.o. für 5 Tage</li>
<li><strong>Pivmecillinam</strong> 400 mg 3x/d p.o. für 3 Tage</li>
<li><strong>Nitroxolin</strong> 250 mg 3x/d p.o. für 5 Tage</li>
</ul>
<h3>Unkomplizierte Pyelonephritis (ambulant)</h3>
<ul>
<li><strong>Ciprofloxacin</strong> 500 mg 2x/d p.o. für 7 Tage</li>
<li><strong>Ceftriaxon</strong> 2 g i.v. Tag 1, dann Sequenztherapie mit Ciprofloxacin p.o.</li>
</ul>
<h3>Komplizierte HWI / Pyelonephritis (stationär)</h3>
<ul>
<li><strong>Piperacillin/Tazobactam</strong> 4,5 g i.v. 3x/d</li>
<li>Alternativ: <strong>Ceftriaxon</strong> 2 g i.v. 1x/d</li>
<li>Anpassung nach Antibiogramm</li>
</ul>
<h3>Urosepsis</h3>
<ul>
<li>s. SOP Sepsis + kalkulierte AB-Therapie</li>
<li><strong>Harnableitung</strong> bei Harnstau (DJ-Schiene oder Nephrostomie)</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li>Unkomplizierte Zystitis: <strong>klinische Diagnose</strong>, keine Urinkultur nötig (Ausnahme: Therapieversagen, Rezidiv)</li>
<li><strong>Fluorchinolone NICHT</strong> bei unkomplizierter Zystitis (Reserve für Pyelonephritis)</li>
<li>Bei <strong>Harnstau + Infektion</strong> = Notfall → Harnableitung!</li>
<li>Asymptomatische Bakteriurie nur bei <strong>Schwangeren</strong> und <strong>vor urologischen Eingriffen</strong> behandeln</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Stationär:</strong> Pyelonephritis mit Erbrechen/Sepsis, Urosepsis, Harnstau, komplizierte HWI, Schwangerschaft</li>
<li><strong>Ambulant:</strong> unkomplizierte Zystitis, leichte Pyelonephritis bei oraler Toleranz</li>
</ul>`
}
],
        stand: "12/24",
        sources: `S3-Leitlinie unkomplizierte Harnwegsinfektionen. AWMF-Register-Nr. 043-044, 2024.<br>Foxman B. Urinary Tract Infection Syndromes. Infect Dis Clin North Am. 2014;28(1):1-13.<br>EAU Guidelines on Urological Infections, 2024.`
    });
})();
