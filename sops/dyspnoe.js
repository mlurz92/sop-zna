// SOP: Dyspnoe
// Kategorie: Leitsymptom
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "dyspnoe",
        title: "Dyspnoe",
        category: "Leitsymptom",
        catKey: "leit",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Dyspnoe:</strong> Subjektiv empfundene Atemnot oder erschwerte Atmung unterschiedlicher Intensität</li>
</ul>`
},
{
title: "Ursachen",
html: `<h3>Pulmonale Ursachen</h3>
<ul>
<li>COPD-Exazerbation, Asthmaexazerbation</li>
<li>Pneumonie</li>
<li>Lungenarterienembolie</li>
<li>Pneumothorax</li>
<li>Pleuraerguss</li>
<li>Obere Atemwegsobstruktion (Fremdkörper, Larynxödem, Epiglottitis)</li>
</ul>
<h3>Kardiale Ursachen</h3>
<ul>
<li>Akute Herzinsuffizienz / Lungenödem</li>
<li>Akutes Koronarsyndrom</li>
<li>Perikardtamponade</li>
<li>Herzrhythmusstörungen</li>
</ul>
<h3>Sonstige Ursachen</h3>
<ul>
<li>Anaphylaxie</li>
<li>Metabolische Azidose (DKA, Urämie, Intoxikation)</li>
<li>Anämie (schwer)</li>
<li>Psychogen (Hyperventilationssyndrom, Panikattacke)</li>
<li>Neuromuskulär (Guillain-Barré, Myasthenie)</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li>Subjektive Atemnot, Erstickungsgefühl</li>
<li>Tachypnoe, Einsatz der Atemhilfsmuskulatur</li>
<li>ggf. Stridor (inspiratorisch: obere Obstruktion; exspiratorisch: untere Obstruktion)</li>
<li>ggf. Giemen, Rasselgeräusche, abgeschwächtes AG</li>
<li>ggf. Zyanose</li>
<li>ggf. Begleitsymptome der Grunderkrankung (Thoraxschmerz, Fieber, Ödeme etc.)</li>
</ul>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur)</li>
<li>1–2x venöser Zugang</li>
<li><strong>BGA</strong> (pO₂? pCO₂? pH? Laktat? Hb? MetHb? COHb?)</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte, NW, BNP/NT-proBNP, hs-Troponin, D-Dimere, Gerinnung, TSH</li>
<li><strong>12-Kanal-EKG</strong> (Ischämie? Rechtsherzbelastung? Arrhythmie?)</li>
</ul>
<h3>Klinische Untersuchung</h3>
<ul>
<li><strong>Anamnese:</strong> Akut/subakut/chronisch? Belastungs-/Ruhedyspnoe? Orthopnoe? Begleitsymptome? Vorerkrankungen? Medikamente? Allergie?</li>
<li><strong>Körperliche Untersuchung:</strong> Auskultation (Giemen, RG, Silent Chest, fehlendes AG)? JVD? Ödeme? Stridor? Zyanose? Fieber?</li>
</ul>
<h3>Erweiterte Diagnostik (ggf.)</h3>
<ul>
<li><strong>POCUS:</strong> Pleuraerguss? Pneumothorax? B-Linien? Perikarderguss? RV-Dilatation?</li>
<li><strong>Röntgen-Thorax</strong></li>
<li><strong>CT-Angiographie Thorax:</strong> bei V.a. LAE</li>
<li><strong>Peak-Flow:</strong> bei V.a. Asthma/COPD</li>
</ul>`
},
{
title: "Therapie",
html: `<ul>
<li>Stabilisierung gemäß ABCDE-Schema</li>
<li><strong>Sauerstoff</strong> nach Bedarf (Ziel-SpO₂ ≥ 94%, bei COPD 88–92%)</li>
<li>Oberkörperhochlagerung</li>
<li><strong>Therapie der Grunderkrankung</strong> (s. jeweilige SOP)</li>
<li>ggf. NIV, ggf. Intubation</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li>Dyspnoe erfordert eine <strong>rasche Differentialdiagnostik</strong> der lebensbedrohlichen Ursachen (LAE, Pneumothorax, ACS, Anaphylaxie, Perikardtamponade)</li>
<li><strong>BGA</strong> ist die wichtigste initiale Untersuchung</li>
<li><strong>POCUS</strong> am Bett ermöglicht eine rasche Eingrenzung der Ursache</li>
<li>Psychogene Dyspnoe ist eine Ausschlussdiagnose!</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li>Abhängig von der Grunderkrankung</li>
<li>s. jeweilige SOP</li>
</ul>`
}
],
        stand: "12/24",
        sources: `Berliner D et al. The Differential Diagnosis of Dyspnea. Dtsch Arztebl Int. 2016;113(49):834-845.<br>Parshall MB et al. An Official American Thoracic Society Statement: Update on the Mechanisms, Assessment, and Management of Dyspnea. Am J Respir Crit Care Med. 2012;185(4):435-52.`
    });
})();
