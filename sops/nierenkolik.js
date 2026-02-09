// SOP: Nierenkolik
// Kategorie: Nephrologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "nierenkolik",
        title: "Nierenkolik",
        category: "Nephrologie",
        catKey: "nephro",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Nierenkolik:</strong> Akuter, krampfartiger Flankenschmerz durch Obstruktion des oberen Harntrakts, meist durch Urolithiasis (Nieren-/Harnleiterstein)</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Urolithiasis</strong> (häufigste Ursache):
<ul>
<li>Calciumoxalat (70–80%)</li>
<li>Calciumphosphat</li>
<li>Harnsäure (10%)</li>
<li>Struvit (Infektsteine)</li>
<li>Cystin (selten)</li>
</ul>
</li>
<li>Blutkoagel (nach Blutung)</li>
<li>Papillennekrose (Diabetes, Analgetikanephropathie)</li>
<li>Tumor (selten)</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Akuter, heftigster kolikartiger Flankenschmerz</strong> (wellenförmig, plötzlicher Beginn)</li>
<li><strong>Ausstrahlung:</strong> je nach Steinlokalisation in Leiste, Labien/Hoden, Oberschenkelinnenseite</li>
<li><strong>Motorische Unruhe</strong> (Patient kann nicht still liegen – DD zu Peritonitis/Schonhaltung!)</li>
<li>Übelkeit, Erbrechen</li>
<li>ggf. Hämaturie (Mikro-/Makrohämaturie)</li>
<li>ggf. Dysurie, Pollakisurie (bei distal gelegenem Stein)</li>
<li>ggf. Fieber (bei begleitendem Infekt → CAVE: Urosepsis!)</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Fieber + Harnstau + Infektzeichen = Urosepsis → Notfall!</strong> Sofortige Antibiotikatherapie und Harnableitung!</p></div>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1x venöser Zugang</li>
<li><strong>BGA</strong> (Kreatinin? Laktat?)</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte, NW, Harnsäure, Gerinnung, ggf. PCT</li>
<li><strong>Urin-Status:</strong> Hämaturie? Leukozyturie? Nitrit? pH?</li>
<li><strong>Anamnese:</strong> Schmerzcharakter? Lokalisation? Ausstrahlung? Vorherige Steinerkrankung? Flüssigkeitszufuhr? Medikamente? Fieber?</li>
<li><strong>Körperliche Untersuchung:</strong> Nierenlagerklopfschmerz? Abdomen? Fieber?</li>
</ul>
<h3>Bildgebung</h3>
<ul>
<li><strong>Nativ-CT Abdomen (Low-Dose):</strong> Goldstandard! Sensitivität > 95%, zeigt Steingröße/-lokalisation, Harnstau</li>
<li><strong>Sonographie:</strong> Harnstau? Nierenstein? (gute Verfügbarkeit, kein KM, als Erstuntersuchung geeignet, aber geringere Sensitivität als CT)</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Analgesie (Priorität!)</h3>
<ul>
<li><strong>NSAR</strong> (Mittel der 1. Wahl):
<ul>
<li>Diclofenac 75 mg i.v./i.m. oder Ibuprofen 600 mg p.o.</li>
<li>Wirkt analgetisch + antiödematös am Ureter</li>
</ul>
</li>
<li><strong>Metamizol</strong> 1 g i.v. (Zweitwahl, spasmolytisch)</li>
<li><strong>Paracetamol</strong> 1 g i.v.</li>
<li><strong>Opioide:</strong> Piritramid 3,75–7,5 mg i.v. oder Morphin 2–5 mg i.v. bei refraktären Schmerzen</li>
<li><strong>Butylscopolamin</strong> 20 mg i.v. (Zusatz, Evidenz gering)</li>
</ul>
<h3>Konservative Therapie (Medical Expulsive Therapy, MET)</h3>
<ul>
<li>Bei Steinen <strong>< 5–6 mm</strong>: hohe spontane Abgangsrate (80–90%)</li>
<li><strong>Tamsulosin</strong> 0,4 mg 1x/d p.o. (erleichtert Steinabgang bei distalem Harnleiterstein 5–10 mm)</li>
<li>Ausreichende Flüssigkeitszufuhr (aber nicht forcierte Hydratation in der Akutphase!)</li>
</ul>
<h3>Interventionelle Therapie</h3>
<ul>
<li><strong>Indikation:</strong> Steine > 6–10 mm (geringe Spontanabgangswahrscheinlichkeit), therapierefraktäre Schmerzen, persistierender Harnstau, Urosepsis, Einzelniere, beidseitige Obstruktion</li>
<li><strong>URS</strong> (Ureterorenoskopie) + Laserlithotripsie</li>
<li><strong>ESWL</strong> (Extrakorporale Stoßwellenlithotripsie)</li>
<li><strong>Harnableitung</strong> (DJ-Stent oder Nephrostomie) bei Urosepsis, infiziertem Harnstau</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li><strong>NSAR</strong> sind das Analgetikum der 1. Wahl bei Nierenkolik</li>
<li><strong>Low-Dose-Nativ-CT</strong> ist der Goldstandard der Bildgebung</li>
<li>Steine < 5 mm: meist spontaner Abgang</li>
<li><strong>Fieber + Harnstau = Urosepsis</strong> → sofortige AB + Harnableitung!</li>
<li>DD beachten: Aortenaneurysma, Appendizitis, EUG, Ovarialzystentorsion</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Stationär:</strong> Urosepsis, infizierter Harnstau, therapierefraktäre Schmerzen, AKI, Einzelniere, beidseitige Obstruktion, große Steine (> 10 mm)</li>
<li><strong>Ambulant:</strong> Stein < 5–6 mm, Schmerzkontrolle, keine Infektzeichen, normale Nierenfunktion, urologische Wiedervorstellung</li>
</ul>`
}
],
        stand: "12/24",
        sources: `Türk C et al. EAU Guidelines on Urolithiasis, 2024.<br>Gottlieb M et al. Management of Nephrolithiasis. Ann Emerg Med. 2023;82(1):80-91.`
    });
})();
