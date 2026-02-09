// SOP: Hyponatriämie
// Kategorie: Metabolisch
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "hyponatriaemie",
        title: "Hyponatriämie",
        category: "Metabolisch",
        catKey: "metab",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Hyponatriämie:</strong> Serumnatrium < 135 mmol/l</li>
<li><strong>Leicht:</strong> 130–135 mmol/l</li>
<li><strong>Moderat:</strong> 125–129 mmol/l</li>
<li><strong>Schwer:</strong> < 125 mmol/l</li>
</ul>
<div class="callout callout-hinweis"><p><strong>Hypoosmolare Hyponatriämie</strong> ist die häufigste Form (echtes Wasserüberschuss). Von <strong>pseudohyponatriämie</strong> (Hyperlipidämie, Hyperproteinämie) und <strong>translokatorischer Hyponatriämie</strong> (Hyperglykämie) abgrenzen!</p></div>`
},
{
title: "Ursachen (nach Volumenstatus)",
html: `<h3>Hypovolämische Hyponatriämie (Volumensalzverlust)</h3>
<ul>
<li><strong>Renale Verluste:</strong> Diuretika (Thiazide!), Nebennierenrindeninsuffizienz, Salzverlustniere</li>
<li><strong>Extrarenale Verluste:</strong> Erbrechen, Diarrhoe, Verbrennungen, Pankreatitis</li>
</ul>
<h3>Euvolämische Hyponatriämie</h3>
<ul>
<li><strong>SIADH</strong> (Syndrom der inadäquaten ADH-Sekretion): Tumoren (SCLC), ZNS-Erkrankungen, Medikamente (SSRIs, Carbamazepin, Opiate), Pneumonie</li>
<li><strong>Endokrin:</strong> Hypothyreose, Nebennierenrindeninsuffizienz</li>
<li><strong>Primäre Polydipsie</strong> (psychogene Polydipsie)</li>
</ul>
<h3>Hypervolämische Hyponatriämie</h3>
<ul>
<li>Herzinsuffizienz</li>
<li>Leberzirrhose mit Aszites</li>
<li>Nephrotisches Syndrom</li>
<li>Nierenversagen</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Grad der Symptomatik abhängig von:</strong> Ausprägung und Geschwindigkeit der Entwicklung</li>
<li><strong>Leicht:</strong> Übelkeit, Kopfschmerzen, Konzentrationsstörungen</li>
<li><strong>Moderat:</strong> Verwirrtheit, Desorientierung, Lethargie</li>
<li><strong>Schwer:</strong> Krampfanfälle, Koma, Hirnstammeinklemmung (Hirnödem!)</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Akute Hyponatriämie (< 48h) ist ein Notfall! Hirnödem mit Hirnstammeinklemmung möglich. Chronische Hyponatriämie wird oft gut toleriert (zerebrale Anpassung).</p></div>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li><strong>BGA</strong> (Na⁺, Glukose, Osmolalität)</li>
<li><strong>Labor:</strong> BB, E'lyte, Kreatinin, Harnstoff, Serumosmolalität, Urinosmolalität, Urin-Natrium, Kortisol, TSH</li>
<li><strong>Volumenstatus</strong> klinisch beurteilen (Hautturgor, JVD, Ödeme, RR, Herzfrequenz)</li>
</ul>
<div class="callout callout-hinweis"><p><strong>Urin-Natrium und Osmolalität zur Differenzierung:</strong><br>• Urin-Na⁺ < 20 mmol/l + hohe Urin-Osm: extrarenale Verluste (Erbrechen, Diarrhoe)<br>• Urin-Na⁺ > 20 mmol/l + niedrige Urin-Osm: Diuretika, Nebenniereninsuffizienz<br>• Urin-Na⁺ > 20 mmol/l + hohe Urin-Osm: SIADH</p></div>`
},
{
title: "Therapie",
html: `<h3>Allgemeine Grundsätze</h3>
<ul>
<li><strong>Akut (< 48h):</strong> Rasche Korrektur möglich (1–2 mmol/l/h)</li>
<li><strong>Chronisch (> 48h oder unklar):</strong> Langsame Korrektur! <strong>Max. 8–10 mmol/l/24h</strong></li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Zu schnelle Korrektur bei chronischer Hyponatriämie → <strong>Zentrale pontine Myelinolyse (CPM)</strong>! irreversible Hirnschädigung!</p></div>
<h3>Hypovolämische Hyponatriämie</h3>
<ul>
<li><strong>NaCl 0,9%</strong> i.v. (Volumen- und Natriumsubstitution)</li>
<li>Ursache behandeln (Diuretika absetzen, Nebenniereninsuffizienz)</li>
</ul>
<h3>Euvolämische Hyponatriämie (SIADH)</h3>
<ul>
<li><strong>Flüssigkeitsrestriktion</strong> 500–1000 ml/Tag (erste Wahl!)</li>
<li><strong>NaCl 0,9%</strong> bei Symptomatik (Vorsicht: kann SIADH verschlimmern)</li>
<li><strong>Hyperton (3%) NaCl:</strong> Bei schwerer Symptomatik (100 ml über 10–15 min, wiederholen)</li>
<li><strong>Medikamente:</strong> Tolvaptan (V2-Rezeptor-Antagonist), Demeclocyclin</li>
<li>Ursache behandeln (Medikamente absetzen, Tumortherapie)</li>
</ul>
<h3>Hypervolämische Hyponatriämie</h3>
<ul>
<li><strong>Flüssigkeitsrestriktion</strong> (800–1500 ml/Tag)</li>
<li><strong>Schleifendiuretika</strong> (Furosemid)</li>
<li>Grunderkrankung behandeln (Herzinsuffizienz, Leberzirrhose)</li>
</ul>
<h3>Berechnung der NaCl-Menge</h3>
<ul>
<li>Na⁺-Anstieg pro Liter Infusion = (Infusions-Na⁺ – Serum-Na⁺) / (Gesamtkörperwasser + 1)</li>
<li>NaCl 0,9% = 154 mmol/l Na⁺</li>
<li>NaCl 3% = 513 mmol/l Na⁺</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Langsame Korrektur</strong> bei chronischer Hyponatriämie (max. 8–10 mmol/l/24h) → CPM verhindern!</li>
<li><strong>Flüssigkeitsrestriktion</strong> ist die wichtigste Maßnahme bei SIADH</li>
<li><strong>Hyperton (3%) NaCl</strong> nur bei schwerer Symptomatik (Krampfanfälle, Koma)</li>
<li><strong>Urin-Natrium und Osmolalität</strong> helfen bei der Ursachendifferenzierung</li>
<li><strong>Thiaziddiuretika</strong> sind eine häufige Ursache (immer anamnestisch erfragen!)</li>
<li>Engmaschige Na⁺-Kontrollen (alle 2–4h bei akuter Therapie)</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> Na⁺ < 120 mmol/l, neurologische Symptome, Krampfanfälle, Koma</li>
<li><strong>Normalstation:</strong> Moderate Hyponatriämie mit Monitoring</li>
<li><strong>ambulant:</strong> Leichte asymptomatische Hyponatriämie</li>
</ul>`
}
],
        stand: "12/24",
        sources: `Verbalis JG et al. Diagnosis, Evaluation, and Treatment of Hyponatremia: Expert Panel Recommendations. Am J Med. 2013;126(10 Suppl 1):S1-42.<br>Sterns RH. Disorders of plasma sodium. N Engl J Med. 2015;372(1):55-65.`
    });
})();
