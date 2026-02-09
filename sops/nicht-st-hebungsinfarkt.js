// SOP: Nicht-ST-Hebungsinfarkt (NSTEMI)
// Kategorie: Kardiologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "nicht-st-hebungsinfarkt",
        title: "Nicht-ST-Hebungsinfarkt (NSTEMI)",
        category: "Kardiologie",
        catKey: "kardio",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>NSTEMI:</strong> Akuter Myokardinfarkt mit Troponin-Erhöhung (dynamischer Verlauf) OHNE persistierende ST-Hebungen im EKG. Gehört zusammen mit der instabilen Angina pectoris zum <strong>Nicht-ST-Hebungsinfarkt-Akuten Koronarsyndrom (NSTE-ACS)</strong></li>
<li><strong>Instabile Angina pectoris (iAP):</strong> Akute Brustschmerzen ohne Troponin-Erhöhung</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Atherosklerotische Plaqueruptur/-erosion</strong> mit nicht-okklusiver Thrombose (häufigste Ursache)</li>
<li>Koronarspasmen (Prinzmetal-Angina)</li>
<li>Koronardissektion (spontan, v.a. junge Frauen)</li>
<li><strong>Typ-2-Myokardinfarkt:</strong> Oxygen-Mismatch (Anämie, Tachyarrhythmie, Sepsis, hypertensive Krise, respiratorische Insuffizienz)</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Akuter Thoraxschmerz:</strong> retrosternal, drückend/engend, Ausstrahlung in linken Arm/Kiefer/Rücken/Epigastrium</li>
<li>ggf. Ruhe- oder Crescendo-Angina</li>
<li>Dyspnoe</li>
<li>Übelkeit, Erbrechen, Schwitzen</li>
<li>Angst, Vernichtungsgefühl</li>
<li>ggf. Synkope</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Atypische Präsentationen</strong> bei Frauen, Diabetikern und älteren Patienten! Dyspnoe, Übelkeit oder Oberbauchschmerzen können einziges Symptom sein.</p></div>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1–2x venöser Zugang</li>
<li><strong>12-Kanal-EKG innerhalb von 10 min!</strong> (ST-Senkung? T-Inversionen? Kein ST-Hebungs-Nachweis!)</li>
<li><strong>hs-Troponin</strong> (bei Aufnahme + nach 1–3h, 0h/1h- oder 0h/2h-Algorithmus gemäß ESC)</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte, NW, Gerinnung, BNP, Lipidprofil, HbA1c, Glukose</li>
<li>BGA (Laktat?)</li>
</ul>
<h3>0h/1h-Algorithmus (ESC 2023, hs-cTn)</h3>
<div class="table-wrap"><table>
<thead><tr><th>Zeitpunkt</th><th>Rule-Out</th><th>Observe</th><th>Rule-In</th></tr></thead>
<tbody>
<tr><td>0h hs-cTnT</td><td>< 5 ng/l</td><td>5–51 ng/l</td><td>≥ 52 ng/l</td></tr>
<tr><td>0h→1h Δ</td><td>< 3 ng/l</td><td>—</td><td>≥ 5 ng/l</td></tr>
</tbody>
</table></div>
<h3>Risikostratifizierung</h3>
<ul>
<li><strong>GRACE-Score:</strong> bestimmt das Kurzzeit- und Langzeitrisiko → leitet Invasivstrategie</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Initiale Therapie</h3>
<ul>
<li><strong>ASS</strong> 250–300 mg i.v. oder p.o. (Loading Dose)</li>
<li><strong>P2Y12-Inhibitor:</strong> Ticagrelor 180 mg p.o. oder Prasugrel 60 mg p.o. (Prasugrel nur bei geplanter PCI, nicht bei Alter > 75J, Gewicht < 60 kg, Z.n. Stroke/TIA)</li>
<li><strong>Antikoagulation:</strong> Fondaparinux 2,5 mg s.c. 1x/d (bei konservativem Vorgehen) oder UFH (bei geplanter PCI)</li>
<li><strong>Nitroglycerin</strong> 0,4 mg s.l. oder Perfusor (nicht bei RR syst. < 90 mmHg, nicht bei Einnahme von PDE-5-Inhibitoren)</li>
<li><strong>Morphin</strong> 2–5 mg i.v. bei persistierenden Schmerzen (CAVE: Übelkeit, Hypotonie, Atemdepression)</li>
<li><strong>Betablocker</strong> p.o. bei Tachykardie/Hypertonie (nicht bei akuter Herzinsuffizienz, Bradykardie, Schock)</li>
<li><strong>Sauerstoff</strong> nur bei SpO₂ < 90%</li>
</ul>
<h3>Invasive Strategie (Koronarangiographie)</h3>
<div class="table-wrap"><table>
<thead><tr><th>Timing</th><th>Indikation</th></tr></thead>
<tbody>
<tr><td><strong>Sofort (< 2h)</strong></td><td>Hämodynamische Instabilität, kardiogener Schock, therapierefraktäre Angina, lebensbedrohliche Arrhythmien, mechanische Komplikation, akute Herzinsuffizienz</td></tr>
<tr><td><strong>Früh (< 24h)</strong></td><td>GRACE-Score > 140, dynamische Troponin-Änderung, dynamische ST-/T-Veränderungen</td></tr>
<tr><td><strong>Selektiv (< 72h)</strong></td><td>GRACE-Score < 140, Diabetes, CKD, LVEF < 40%, Post-Infarkt-Angina</td></tr>
</tbody>
</table></div>`
},
{
title: "Merke",
html: `<ul>
<li><strong>EKG innerhalb von 10 min!</strong></li>
<li><strong>hs-Troponin</strong> 0h/1h-Algorithmus zur Diagnose</li>
<li><strong>GRACE-Score</strong> bestimmt Invasivstrategie</li>
<li>NSTEMI mit hämodynamischer Instabilität → sofortige Koronarangiographie</li>
<li><strong>STEMI ausschließen!</strong> (bei ST-Hebungen → SOP STEMI)</li>
<li>An <strong>Typ-2-Myokardinfarkt</strong> denken (Troponin-Erhöhung ohne Koronarthrombose)</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensiv/Chest Pain Unit:</strong> NSTEMI, instabile Angina pectoris</li>
<li>Kardiologisches Konsil, Koronarangiographie nach Risikostratifizierung</li>
</ul>`
}
],
        stand: "12/24",
        sources: `Byrne RA et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J. 2023;44(38):3720-3826.<br>Collet JP et al. 2020 ESC Guidelines for the management of acute coronary syndromes in patients presenting without persistent ST-segment elevation. Eur Heart J. 2021;42(14):1289-1367.`
    });
})();
