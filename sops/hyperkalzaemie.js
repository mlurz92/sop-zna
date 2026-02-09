// SOP: Hyperkalzämie
// Kategorie: Metabolisch
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "hyperkalzaemie",
        title: "Hyperkalzämie",
        category: "Metabolisch",
        catKey: "metab",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Hyperkalzämie:</strong> Albumin-korrigiertes Serumcalcium > 2,65 mmol/l (oder ionisiertes Calcium > 1,35 mmol/l)</li>
<li><strong>Schwere Hyperkalzämie / hyperkalzämische Krise:</strong> Ca²⁺ > 3,5 mmol/l oder symptomatisch</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Primärer Hyperparathyreoidismus (pHPT, 50%):</strong> häufigste Ursache ambulant</li>
<li><strong>Malignome (30%):</strong> häufigste Ursache stationär
<ul>
<li>Osteolytische Metastasen (Mamma-Ca, Bronchial-Ca, Multiples Myelom)</li>
<li>PTHrP-Sekretion (Paraneoplastisch)</li>
</ul>
</li>
<li><strong>Sonstige:</strong> Vitamin-D-Intoxikation, Sarkoidose/Granulomatosen, Thiaziddiuretika, Immobilisation, Hyperthyreose, Nebenniereninsuffizienz, Milch-Alkali-Syndrom</li>
</ul>`
},
{
title: "Symptome",
html: `<p>Merkhilfe: <strong>Stones, Bones, Groans, Moans, Thrones, Psychiatric Overtones</strong></p>
<ul>
<li><strong>Renal (Stones/Thrones):</strong> Polyurie, Polydipsie, Nephrolithiasis, Niereninsuffizienz</li>
<li><strong>Skelett (Bones):</strong> Knochenschmerzen, Frakturen</li>
<li><strong>GI (Groans):</strong> Übelkeit, Erbrechen, Obstipation, Pankreatitis</li>
<li><strong>Muskulär (Moans):</strong> Muskelschwäche, Müdigkeit</li>
<li><strong>Neurologisch/Psychiatrisch:</strong> Verwirrtheit, Depression, Psychose, Bewusstseinseintrübung bis Koma</li>
<li><strong>Kardial:</strong> Verkürztes QT, Bradykardie, Arrhythmien</li>
</ul>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li><strong>BGA</strong> (ionisiertes Calcium! E'lyte? pH?)</li>
<li><strong>Labor:</strong> Albumin-korrigiertes Calcium, Phosphat, PTH, NW, BB, AP, 25-OH-Vitamin D, TSH, Gerinnung, Serum-/Urin-Eiweißelektrophorese</li>
<li>12-Kanal-EKG (QTc-Verkürzung?)</li>
<li>Bilanzierung</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Schwere Hyperkalzämie (> 3,5 mmol/l oder symptomatisch)</h3>
<ul>
<li><strong>Volumentherapie:</strong> NaCl 0,9% 200–500 ml/h initial (Dehydratation korrigieren, renale Ca²⁺-Ausscheidung fördern)</li>
<li><strong>Furosemid:</strong> 20–40 mg i.v. erst NACH ausreichender Rehydratation (fördert renale Ca²⁺-Elimination)</li>
<li><strong>Bisphosphonat:</strong> Zoledronsäure 4 mg i.v. über 15 min (Wirkung nach 2–4 Tagen, bei Tumorhyperkalzämie)</li>
<li><strong>Denosumab:</strong> 120 mg s.c. (bei Bisphosphonat-Refraktärität oder Niereninsuffizienz)</li>
<li><strong>Calcitonin:</strong> 4 IE/kg s.c. alle 12h (schnellste Wirkung in 4–6h, aber Tachyphylaxie nach 48h – Bridge bis Bisphosphonat wirkt)</li>
<li><strong>Glukokortikoide:</strong> Prednisolon 40–60 mg/d i.v. (bei Granulomatosen, Lymphom, Vitamin-D-Intoxikation)</li>
<li><strong>Dialyse:</strong> bei Nierenversagen oder lebensbedrohlicher Hyperkalzämie</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Furosemid erst NACH Rehydratation! Ohne Volumenauffüllung verschlechtert Furosemid die Dehydratation!</p></div>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Rehydratation = 1. Maßnahme</strong> (Volumen, Volumen, Volumen!)</li>
<li>Häufigste Ursachen: <strong>pHPT</strong> (ambulant) und <strong>Malignom</strong> (stationär)</li>
<li><strong>PTH</strong> differenziert: PTH↑ = pHPT, PTH↓ = malignombedingt/Vitamin D/Granulomatose</li>
<li>Immer korrigiertes Calcium oder ionisiertes Calcium verwenden!</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> Ca²⁺ > 3,5 mmol/l, Bewusstseinseintrübung, Arrhythmie</li>
<li><strong>Normalstation:</strong> moderate Hyperkalzämie mit Therapiebedarf</li>
</ul>`
}
],
        stand: "12/24",
        sources: `Minisola S et al. Update on the diagnosis and management of hypercalcaemia. BMJ. 2023;381:e073344.<br>Turner JJO. Hypercalcaemia – presentation and management. Clin Med. 2017;17(3):270-273.`
    });
})();
