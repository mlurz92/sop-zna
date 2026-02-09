// SOP: Status epilepticus
// Kategorie: Neurologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "status-epilepticus",
        title: "Status epilepticus",
        category: "Neurologie",
        catKey: "neuro",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Status epilepticus (SE):</strong> Anhaltender epileptischer Anfall ≥ 5 min ODER ≥ 2 Anfälle ohne zwischenzeitliche Wiedererlangung des Bewusstseins</li>
<li><strong>Refraktärer SE:</strong> Persistierender SE trotz adäquater Therapie mit Benzodiazepin + einem Antikonvulsivum (Stufe 2)</li>
<li><strong>Superrefraktärer SE:</strong> SE > 24h trotz Narkoseeinleitung (Stufe 3) oder Rezidiv nach Narkosereduktion</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Non-Compliance/Absetzen</strong> von Antikonvulsiva (häufigste Ursache bei bekannter Epilepsie)</li>
<li><strong>Akut symptomatisch:</strong>
<ul>
<li>Zerebrovaskulär (Ischämie, ICB, SAB)</li>
<li>Intrakranielle Infektion (Meningitis, Enzephalitis)</li>
<li>SHT</li>
<li>Hypoxie</li>
<li>Metabolisch (Hypoglykämie, Hyponatriämie, Hypokalzämie, Urämie, Leberversagen)</li>
<li>Intoxikation/Entzug (Alkohol, Benzodiazepine, Kokain, Amphetamine)</li>
<li>Autoimmunenzephalitis (Anti-NMDA-R)</li>
<li>Hirntumor/Metastasen</li>
<li>Eklampsie</li>
</ul>
</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Konvulsiver SE (GCSE):</strong> Bilateral tonisch-klonische Anfallsaktivität ≥ 5 min</li>
<li><strong>Non-konvulsiver SE (NCSE):</strong> Bewusstseinseintrübung ohne oder mit nur subtiler motorischer Aktivität (Augenbewegungen, Lidzucken, Automatismen) – nur per EEG diagnostizierbar!</li>
<li><strong>Fokaler SE:</strong> Anhaltende fokale Anfallsaktivität mit/ohne Bewusstseinsstörung</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Nach prolongiertem konvulsivem SE kann die motorische Aktivität sistieren, obwohl der elektrographische Anfall fortbesteht → <strong>non-konvulsiver SE!</strong> EEG-Monitoring bei persistierender Bewusstlosigkeit!</p></div>`
},
{
title: "Diagnostik",
html: `<ul>
<li><strong>Ersteindruck + ABCDE + Vitalparameter</strong></li>
<li>1–2x venöser Zugang</li>
<li><strong>BZ-Messung sofort!</strong> (Hypoglykämie?)</li>
<li><strong>BGA</strong> (pH? Laktat? Na⁺? Ca²⁺? Glukose?)</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte (Na⁺, Ca²⁺, Mg²⁺), NW, GOT, GPT, CK, <strong>Antikonvulsiva-Spiegel</strong>, Gerinnung, Laktat, Glukose, Ammoniak, Toxikologie-Screening, ggf. β-HCG</li>
<li>12-Kanal-EKG (nach Stabilisierung)</li>
<li><strong>Bildgebung:</strong> cCT nativ (Blutung? Raumforderung? Herniation?) → ggf. cMRT</li>
<li><strong>EEG:</strong> so schnell wie möglich, zwingend bei V.a. non-konvulsiven SE, Monitoring auf ICU</li>
<li>ggf. Lumbalpunktion (bei V.a. Meningitis/Enzephalitis, nach Bildgebung)</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Stufe 1: Initialtherapie (0–5 min) – Benzodiazepine</h3>
<ul>
<li><strong>Midazolam</strong> 10 mg i.m./intranasal/buccal (wenn kein i.v.-Zugang) ODER</li>
<li><strong>Lorazepam</strong> 0,1 mg/kg i.v. (max. 4 mg, Wiederholung nach 5 min möglich) ODER</li>
<li><strong>Diazepam</strong> 0,15–0,2 mg/kg i.v. (max. 10 mg)</li>
<li>Parallel: ABCDE, Sauerstoff, BZ-Messung, venöser Zugang</li>
<li>Bei Hypoglykämie: Glukose 40% 40–80 ml i.v.</li>
<li>Bei V.a. Alkoholentzug/Mangelernährung: Thiamin 100–300 mg i.v.</li>
</ul>
<h3>Stufe 2: 2. Therapiestufe (5–30 min) – Antikonvulsiva i.v.</h3>
<ul>
<li><strong>Levetiracetam</strong> 60 mg/kg i.v. über 10 min (max. 4500 mg) ODER</li>
<li><strong>Valproat</strong> 40 mg/kg i.v. über 10 min (max. 3000 mg; CAVE: nicht bei Lebererkrankung, Schwangerschaft, Mitochondriopathie) ODER</li>
<li><strong>Phenytoin/Fosphenytoin</strong> 20 mg/kg i.v. (max. 50 mg/min; CAVE: RR-Monitoring, EKG-Monitoring, nicht bei AV-Block)</li>
<li>Bei Versagen des 1. Medikaments: zweites Medikament aus dieser Stufe wählen</li>
</ul>
<h3>Stufe 3: Refraktärer SE (ab 30–60 min) – Narkose</h3>
<ul>
<li><strong>Intubation und Beatmung</strong> (RSI)</li>
<li><strong>Midazolam-Perfusor:</strong> 0,2 mg/kg Bolus, dann 0,1–2 mg/kg/h ODER</li>
<li><strong>Propofol-Perfusor:</strong> 2 mg/kg Bolus, dann 4–10 mg/kg/h (CAVE: PRIS bei Langzeitanwendung > 48h) ODER</li>
<li><strong>Thiopental:</strong> 3–5 mg/kg Bolus, dann 3–7 mg/kg/h (CAVE: Immunsuppression, Ileus, Hypotonie)</li>
<li>Ziel: <strong>Burst-Suppression-Muster</strong> im EEG für 24–48h, dann langsames Ausschleichen</li>
</ul>
<h3>Behandelbare Ursachen parallel behandeln!</h3>
<ul>
<li>Hypoglykämie → Glukose</li>
<li>Hyponatriämie → NaCl 3%</li>
<li>Meningitis/Enzephalitis → Antibiotika/Aciclovir</li>
<li>Intoxikation → spezifisches Antidot</li>
<li>Eklampsie → Magnesiumsulfat</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Je länger der Status epilepticus andauert, desto <strong>schlechter das Ansprechen</strong> auf Benzodiazepine (Internalisierung der GABA-Rezeptoren) → <strong>frühzeitig eskalieren!</strong></p></div>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Jeder Anfall ≥ 5 min = Status epilepticus</strong> → sofortige Therapie!</li>
<li><strong>BZ messen!</strong> Hypoglykämie ist eine häufige behandelbare Ursache</li>
<li><strong>Stufe 1:</strong> Benzodiazepine (Midazolam i.m. oder Lorazepam i.v.)</li>
<li><strong>Stufe 2:</strong> Levetiracetam, Valproat oder Phenytoin i.v.</li>
<li><strong>Stufe 3:</strong> Intubation + Narkose (Midazolam/Propofol/Thiopental-Perfusor)</li>
<li>Nicht auf EEG oder Bildgebung warten → sofort behandeln!</li>
<li>An <strong>non-konvulsiven SE</strong> denken bei persistierender Bewusstlosigkeit → EEG!</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation</strong> (refraktärer SE, Intubation, Narkose, non-konvulsiver SE)</li>
<li><strong>Überwachungsstation / Stroke Unit:</strong> nach durchbrochenem SE</li>
</ul>`
}
],
        stand: "12/24",
        sources: `Trinka E et al. A Definition and Classification of Status Epilepticus – Report of the ILAE Task Force. Epilepsia. 2015;56(10):1515-23.<br>Glauser T et al. Evidence-Based Guideline: Treatment of Convulsive Status Epilepticus. Neurology. 2016;87(8):868-76.<br>Rosenow F et al. S2k-Leitlinie Status epilepticus im Erwachsenenalter. AWMF-Register-Nr. 030-079, 2020.`
    });
})();
