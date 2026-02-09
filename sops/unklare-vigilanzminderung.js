// SOP: Unklare Vigilanzminderung
// Kategorie: Leitsymptom
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "unklare-vigilanzminderung",
        title: "Unklare Vigilanzminderung",
        category: "Leitsymptom",
        catKey: "leit",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Vigilanzminderung:</strong> Quantitative Bewusstseinsstörung mit reduzierter Wachheit und Reaktionsfähigkeit</li>
</ul>
<div class="table-wrap"><table>
<thead><tr><th>Grad</th><th>Beschreibung</th></tr></thead>
<tbody>
<tr><td><strong>Somnolenz</strong></td><td>Abnorme Schläfrigkeit, durch Ansprache/leichte Reize erweckbar</td></tr>
<tr><td><strong>Sopor</strong></td><td>Nur durch starke Reize (Schmerzreiz) kurz erweckbar</td></tr>
<tr><td><strong>Koma</strong></td><td>Nicht erweckbar, keine gezielte Reaktion auf Schmerzreiz</td></tr>
</tbody>
</table></div>`
},
{
title: "Ursachen",
html: `<p><strong>Eselsbrücke: AEIOU-TIPS</strong></p>
<ul>
<li><strong>A</strong>lkohol / Azidose</li>
<li><strong>E</strong>pilepsie / Enzephalopathie / Elektrolyte</li>
<li><strong>I</strong>nsulin (Hypo-/Hyperglykämie)</li>
<li><strong>O</strong>piate / Intoxikation</li>
<li><strong>U</strong>rämie</li>
<li><strong>T</strong>rauma / Temperatur (Hypo-/Hyperthermie)</li>
<li><strong>I</strong>nfektion (Meningitis, Enzephalitis, Sepsis)</li>
<li><strong>P</strong>sychiatrie (psychogene Unresponsiveness)</li>
<li><strong>S</strong>troke (Ischämie, Blutung, SAB) / Schock</li>
</ul>`
},
{
title: "Diagnostik",
html: `<h3>Sofortmaßnahmen</h3>
<ul>
<li><strong>Ersteindruck + ABCDE + Vitalparameter</strong></li>
<li><strong>GCS</strong> (Glasgow Coma Scale) dokumentieren</li>
<li>1–2x venöser Zugang</li>
<li><strong>BZ sofort messen!</strong> (Hypoglykämie?)</li>
<li><strong>BGA</strong> (pH? Laktat? CO-Hb? Na⁺? K⁺? Ca²⁺? Glukose? NH₃?)</li>
<li><strong>Pupillen:</strong> Weite? Seitendifferenz? Lichtreaktion?</li>
<li><strong>Temperatur!</strong></li>
</ul>
<h3>Labor</h3>
<ul>
<li>BB, CRP, E'lyte (Na⁺, K⁺, Ca²⁺, Mg²⁺), NW, GOT, GPT, <strong>Ammoniak</strong>, LDH, TSH, Cortisol, <strong>Glukose</strong>, Gerinnung, <strong>hs-Troponin</strong>, Laktat, CK, <strong>Toxikologie-Screening</strong> (Urin + Serum), Ethanol, ggf. Medikamentenspiegel, ggf. Blutkulturen</li>
</ul>
<h3>Klinische Untersuchung</h3>
<ul>
<li><strong>Anamnese</strong> (Fremdanamnese!): Vorerkrankungen? Medikamente? Drogen? Letzte Nahrung? Trauma? Epilepsie? Diabetes? Lebererkrankung? Psychische Erkrankung? Suizidalität? Ablaufbeschreibung?</li>
<li><strong>Neurologischer Status:</strong> GCS? Pupillen? Hirnstammreflexe? Meningismus? Fokal-neurologisches Defizit? Muskeltonus? Reflexe? Babinski?</li>
<li><strong>Körperliche Untersuchung:</strong> Trauma? Einstichstellen? Zungenbiss? Einnässen? Foetor? Haut (Ikterus, Exanthem, Marmorierung)? Nadelstichmale?</li>
</ul>
<h3>Bildgebung</h3>
<ul>
<li><strong>cCT nativ</strong> (bei unklarer Ursache, immer bei V.a. intrakranielle Pathologie)</li>
<li>ggf. CT-Angiographie (Basilaristhrombose? Dissektion?)</li>
<li>ggf. cMRT (Enzephalitis? CVST? Hirnstammläsion?)</li>
</ul>
<h3>Weitere Diagnostik</h3>
<ul>
<li><strong>12-Kanal-EKG</strong></li>
<li>ggf. <strong>Lumbalpunktion</strong> (Meningitis? Enzephalitis? SAB?)</li>
<li>ggf. <strong>EEG</strong> (non-konvulsiver Status epilepticus?)</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Sofortmaßnahmen</h3>
<ul>
<li><strong>ABCDE-Stabilisierung</strong></li>
<li>Atemwegssicherung bei GCS ≤ 8 (Intubation)</li>
<li><strong>Hypoglykämie:</strong> Glukose 40% i.v.</li>
<li><strong>Opioidintoxikation:</strong> Naloxon 0,4–2 mg i.v. titrierend</li>
<li><strong>Benzodiazepinintoxikation:</strong> Flumazenil 0,2 mg i.v. (CAVE: Krampfanfälle bei Abhängigkeit!)</li>
<li><strong>Wernicke-Enzephalopathie:</strong> Thiamin 300–500 mg i.v. (bei V.a. Alkoholismus vor Glukosegabe!)</li>
</ul>
<h3>Ursachenspezifische Therapie</h3>
<ul>
<li>Meningitis → sofortige Antibiotika + Dexamethason</li>
<li>Status epilepticus → Antikonvulsiva (s. SOP SE)</li>
<li>Schlaganfall → Stroke-Unit, ggf. Lyse/Thrombektomie</li>
<li>Intoxikation → Antidot + supportive Therapie</li>
<li>Hepatische Enzephalopathie → Lactulose + Rifaximin</li>
<li>Sepsis → Antibiotika + Volumen + Vasopressoren</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li><strong>BZ sofort messen!</strong> (häufigste behandelbare Ursache)</li>
<li><strong>GCS</strong> dokumentieren und verlaufsmäßig kontrollieren</li>
<li><strong>Pupillen:</strong> Miosis (Opioide), Mydriasis (Sympathomimetika, Hirndruck), anisocor (Herniation!)</li>
<li><strong>GCS ≤ 8 → Atemwegssicherung!</strong></li>
<li>An <strong>reversible Ursachen</strong> denken: Hypoglykämie, Intoxikation, SE, Meningitis</li>
<li><strong>cCT bei jeder unklaren Vigilanzminderung</strong></li>
<li>An <strong>non-konvulsiven SE</strong> denken → EEG!</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> GCS ≤ 8, Intubation, hämodynamische Instabilität, intrakranielle Pathologie</li>
<li><strong>Überwachungsstation:</strong> leichte Vigilanzminderung mit identifizierter, behandelbarer Ursache</li>
</ul>`
}
],
        stand: "12/24",
        sources: `Horsting MWB et al. Systematic review of the management of patients presenting to the emergency department with an altered level of consciousness. Eur J Emerg Med. 2023;30(1):1-7.<br>Edlow JA et al. Diagnosis of DKA, nonconvulsive status epilepticus, and other causes of altered mental status in the emergency department. Emerg Med Clin North Am. 2023.`
    });
})();
