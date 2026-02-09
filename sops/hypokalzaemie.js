// SOP: Hypokalzämie
// Kategorie: Metabolisch
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "hypokalzaemie",
        title: "Hypokalzämie",
        category: "Metabolisch",
        catKey: "metab",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Hypokalzämie:</strong> Serum-Kalzium (korrigiert) < 2,2 mmol/l (< 8,8 mg/dl)</li>
<li><strong>Schwere Hypokalzämie:</strong> < 1,9 mmol/l (< 7,6 mg/dl)</li>
</ul>
<div class="callout callout-hinweis"><p><strong>Kalziumkorrektur bei Hypalbuminämie:</strong><br>Korrigiertes Ca²⁺ = gemessenes Ca²⁺ + 0,02 × (40 – Albumin g/l) mmol/l<br>oder: Korrigiertes Ca²⁺ = gemessenes Ca²⁺ + 0,8 × (4 – Albumin g/dl) mg/dl</p></div>`
},
{
title: "Ursachen",
html: `<h3>Hypoparathyreoidismus</h3>
<ul>
<li>Postoperativ (nach Thyreoidektomie, Parathyreoidektomie)</li>
<li>Autoimmun</li>
</ul>
<h3>Vitamin-D-Mangel</h3>
<ul>
<li>Mangelnde Sonnenexposition, Malabsorption</li>
<li>Schwere Leber-/Nierenerkrankung</li>
</ul>
<h3>Weitere Ursachen</h3>
<ul>
<li><strong>Hypomagnesiämie</strong> (häufigste Ursache! Hemmt PTH-Sekretion)</li>
<li>Pankreatitis (Verfettung des Omentums)</li>
<li>Rhabdomyolyse (Kalziumsequestration)</li>
<li>Sepsis („Hungry bone syndrome" nach Parathyreoidektomie)</li>
<li>Medikamente: Bisphosphonate, Denosumab, Cisplatin, Furosemid</li>
<li>Massive Transfusion (Zitrat-Toxizität)</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Neuromuskuläre Übererregbarkeit:</strong>
<ul>
<li>Parästhesien (perioral, Hände, Füße)</li>
<li>Muskelkrämpfe, Tetanie</li>
<li><strong>Chvostek-Zeichen:</strong> Zucken der Gesichtsmuskulatur bei Beklopfen des N. facialis</li>
<li><strong>Trousseau-Zeichen:</strong> Pfötchenstellung der Hand nach Blutdruckmanschetten-Ischämie (3 min)</li>
</ul>
</li>
<li><strong>Kardial:</strong> QT-Verlängerung, Arrhythmien, Herzinsuffizienz</li>
<li><strong>ZNS:</strong> Verwirrtheit, Krampfanfälle</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> QT-Verlängerung → Risiko für Torsades de pointes! EKG-Monitoring bei schwerer Hypokalzämie.</p></div>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li><strong>EKG</strong> (QT-Verlängerung)</li>
<li><strong>Labor:</strong> BB, E'lyte inkl. Mg²⁺, korrigiertes Ca²⁺, Phosphat, Albumin, Kreatinin, PTH, 25-OH-Vitamin D, 1,25-OH-Vitamin D</li>
<li><strong>BGA</strong> (ionisiertes Ca²⁺, pH)</li>
</ul>
<div class="callout callout-hinweis"><p><strong>Ionisiertes Kalzium</strong> (freies Ca²⁺) ist physiologisch relevanter als Gesamt-Kalzium. Normal: 1,1–1,35 mmol/l.</p></div>`
},
{
title: "Therapie",
html: `<h3>Asymptomatische Hypokalzämie</h3>
<ul>
<li><strong>Orale Substitution:</strong> Kalziumkarbonat oder Kalziumzitrat 1–3 g/Tag</li>
<li><strong>Vitamin D:</strong> Bei Vitamin-D-Mangel: Cholekalziferol 1000–4000 IE/Tag oder Kolekalziferol</li>
</ul>
<h3>Symptomatische Hypokalzämie (Notfall!)</h3>
<ul>
<li><strong>Kalziumglukonat 10%:</strong> 10–20 ml i.v. über 10–20 min (2,2–4,5 mmol Ca²⁺)</li>
<li>Alternative: <strong>Kalziumchlorid 10%:</strong> 5–10 ml i.v. (nur zentralvenös! Gewebenekrose bei Paravasat)</li>
<li>Anschließend: <strong>Kalziumglukonat-Perfusor:</strong> 50 ml Kalziumglukonat 10% in 500 ml NaCl 0,9% oder Glukose 5% über 6–12h</li>
<li>Wiederholung der Bolusgabe nach 30–60 min möglich</li>
</ul>
<h3>Begleitende Hypomagnesiämie</h3>
<ul>
<li><strong>Mg²⁺ substituieren!</strong> Ohne Mg²⁺-Korrektur bleibt Ca²⁺-Substitution oft ineffektiv</li>
<li>Magnesiumsulfat 2–4 g i.v. über 10–20 min</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Kalziumchlorid <strong>nur zentralvenös</strong> geben (hohe Gewebetoxizität, Nekrosegefahr bei Paravasat!). Kalziumglukonat kann peripher gegeben werden.</p></div>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Hypomagnesiämie</strong> ist eine häufige Ursache für therapieresistente Hypokalzämie → immer Mg²⁺ mitbestimmen und substituieren!</li>
<li><strong>Chvostek- und Trousseau-Zeichen</strong> sind klinische Hinweise auf neuromuskuläre Übererregbarkeit</li>
<li><strong>QT-Verlängerung</strong> im EKG → Arrhythmiegefahr</li>
<li><strong>Kalziumglukonat</strong> bevorzugen (peripher möglich), <strong>Kalziumchlorid nur zentral</strong></li>
<li>Bei Digitalistherapie: Vorsicht bei i.v. Kalzium (Digitalis-Toxizität verstärkt!)</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> Symptomatische Hypokalzämie, QT-Verlängerung, Arrhythmien</li>
<li><strong>Normalstation:</strong> Asymptomatische Hypokalzämie mit Monitoring</li>
<li><strong>ambulant:</strong> Milde Hypokalzämie, orale Substitution</li>
</ul>`
}
],
        stand: "12/24",
        sources: `Cooper MS, Gittoes NJL. Diagnosis and management of hypocalcaemia. BMJ. 2008;336(7656):1298-302.<br>Shoback D. Hypocalcemia: Definition, Etiology, and Pathogenesis. J Clin Endocrinol Metab. 2023;108(5):e1-e10.`
    });
})();
