// SOP: Hypokaliämie
// Kategorie: Metabolisch
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "hypokaliaemie",
        title: "Hypokaliämie",
        category: "Metabolisch",
        catKey: "metab",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Hypokaliämie:</strong> Serum-Kalium < 3,5 mmol/l</li>
<li><strong>Milde:</strong> 3,0–3,5 mmol/l</li>
<li><strong>Moderate:</strong> 2,5–3,0 mmol/l</li>
<li><strong>Schwere:</strong> < 2,5 mmol/l</li>
</ul>
<div class="callout callout-hinweis"><p><strong>Kaliumverteilung:</strong> 98% intrazellulär, 2% extrazellulär. Serum-K⁺ spiegelt nicht immer den Gesamtkörperbestand wider!</p></div>`
},
{
title: "Ursachen",
html: `<h3>1. Intrazellulärer Shift (Verlagerung)</h3>
<ul>
<li>Alkalose (metabolisch/respiratorisch)</li>
<li>Insulin (exogen, endogen)</li>
<li>β₂-Sympathomimetika (Salbutamol, Terbutalin)</li>
<li>Hypokaliämische periodische Lähmung (familiär, thyreotoxisch)</li>
</ul>
<h3>2. Renale Verluste</h3>
<ul>
<li>Schleifendiuretika, Thiazide</li>
<li>Mineralokortikoid-Exzess (Conn-Syndrom, Cushing, exogene Steroide)</li>
<li>Bartter-Syndrom, Gitelman-Syndrom</li>
<li>Renale tubuläre Azidose (RTA Typ 1 und 2)</li>
<li>Osmotische Diurese (Hyperglykämie)</li>
</ul>
<h3>3. Gastrointestinale Verluste</h3>
<ul>
<li>Erbrechen, Magensonde</li>
<li>Diarrhoe (chronisch)</li>
<li>Laxanzienabusus</li>
</ul>
<h3>4. Unzureichende Zufuhr</h3>
<ul>
<li>Mangelernährung, Alkoholismus</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Muskulär:</strong> Muskelschwäche, -krämpfe, Myalgien, Paralysen (schwere Hypokaliämie)</li>
<li><strong>Kardial:</strong> Palpitationen, Arrhythmien</li>
<li><strong>Renal:</strong> Polyurie, Polydipsie (Nephrogenes Diabetes insipidus)</li>
<li><strong>GI:</strong> Ileus, Obstipation</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> EKG-Veränderungen bei Hypokaliämie: T-Abflachung, U-Welle, ST-Senkung, QT-Verlängerung → Risiko für Torsades de pointes! Verstärkt Digitalis-Toxizität.</p></div>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li><strong>EKG</strong> (T-Abflachung, U-Welle, ST-Senkung, QT-Verlängerung)</li>
<li><strong>BGA</strong> (K⁺, pH, HCO₃⁻)</li>
<li><strong>Labor:</strong> BB, E'lyte, Kreatinin, Mg²⁺, Ca²⁺, Glukose</li>
<li><strong>Urin:</strong> K⁺, Cl⁻, Osmolalität</li>
<li>Bei Verdacht auf Hyperaldosteronismus: Aldosteron/Renin-Ratio</li>
</ul>
<div class="callout callout-hinweis"><p><strong>Transtubulärer Kaliumgradient (TTKG):</strong> Hilft bei der Unterscheidung renaler vs. extrarenaler Verluste. TTKG > 7 = renaler Verlust; TTKG < 3 = extrarenal.</p></div>`
},
{
title: "Therapie",
html: `<h3>Allgemeines</h3>
<ul>
<li><strong>Kalium-Mangel abschätzen:</strong> Bei K⁺ 3,0 mmol/l ca. 100–200 mmol Defizit; bei K⁺ 2,0 mmol/l ca. 300–400 mmol Defizit</li>
<li><strong>Ursache behandeln!</strong> (z.B. Diuretikum absetzen, Alkalose korrigieren)</li>
<li><strong>Magnesium</strong> immer mit substituieren (hypokaliämie-assoziiert!)</li>
</ul>
<h3>Orale Substitution (bevorzugt)</h3>
<ul>
<li><strong>Kaliumchlorid:</strong> 40–80 mmol/Tag in 2–3 Einzeldosen</li>
<li>Max. 40 mmol als Einzeldosis (Gastrointestinale Reizung)</li>
<li>Kaliumreiche Ernährung (Bananen, Orangensaft, Kartoffeln)</li>
</ul>
<h3>Parenterale Substitution</h3>
<ul>
<li><strong>Indikation:</strong> Schwere Hypokaliämie (< 2,5 mmol/l), orale Gabe nicht möglich, kardiale Symptome</li>
<li><strong>Kaliumchlorid:</strong> Max. 10 mmol/h über peripheren Zugang (max. 40 mmol/L)</li>
<li><strong>Zentralvenös:</strong> Max. 20 mmol/h (mit EKG-Monitoring!)</li>
<li><strong>CAVE:</strong> Keine Bolusgabe! Langsame Infusion über 4–6h</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Bei Niereninsuffizienz <strong>vorsichtig</strong> substituieren (Gefahr der Hyperkaliämie)! K⁺ alle 2–4h kontrollieren.</p></div>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Hypokaliämie + Alkalose</strong> = Klassisch für Erbrechen oder Diuretika</li>
<li><strong>Hypokaliämie + Azidose</strong> = Klassisch für Diarrhoe oder RTA</li>
<li><strong>Magnesium</strong> immer mit substituieren (ohne Mg²⁺ ist K⁺-Substitution oft ineffektiv)</li>
<li><strong>EKG-Monitoring</strong> bei parenteraler Substitution</li>
<li><strong>Langsam</strong> substituieren (max. 10–20 mmol/h)</li>
<li>Ursache abklären (Diuretika, Laxanzien, Hyperaldosteronismus)</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> K⁺ < 2,5 mmol/l, kardiale Arrhythmien, parenterale Substitution</li>
<li><strong>Normalstation:</strong> Moderate Hypokaliämie mit Monitoring</li>
<li><strong>ambulant:</strong> Milde Hypokaliämie, orale Substitution möglich</li>
</ul>`
}
],
        stand: "12/24",
        sources: `Gennari FJ. Hypokalemia. N Engl J Med. 1998;339(7):451-8.<br>Palmer BF, Clegg DJ. Physiology and Pathophysiology of Potassium Homeostasis. Adv Physiol Educ. 2019;43(4):548-560.`
    });
})();
