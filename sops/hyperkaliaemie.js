// SOP: Hyperkaliämie
// Kategorie: Metabolisch
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "hyperkaliaemie",
        title: "Hyperkaliämie",
        category: "Metabolisch",
        catKey: "metab",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Hyperkaliämie:</strong> Serumkalium > 5,0 mmol/l</li>
<li><strong>Schwere Hyperkaliämie:</strong> Serumkalium > 6,0 mmol/l oder EKG-Veränderungen</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Verminderte renale Ausscheidung:</strong> AKI, CKD, Nebenniereninsuffizienz (Aldosteronmangel), Medikamente (ACE-I, ARB, MRA, Kaliumsparende Diuretika, NSAR, Trimethoprim, Ciclosporin, Tacrolimus, Heparin)</li>
<li><strong>Kaliumshift nach extrazellulär:</strong> Azidose, Insulinmangel (DKA), Betablocker, Rhabdomyolyse, Tumorlysesyndrom, Hämolyse, Gewebsnekrose, Succinylcholin, Digitalisintoxikation</li>
<li><strong>Erhöhte Zufuhr:</strong> Kaliumsubstitution (iatrogen), kaliumreiche Ernährung (bei CKD)</li>
<li><strong>Pseudohyperkaliämie:</strong> Hämolyse bei Blutentnahme, Thrombozytose, Leukozytose, Faust-Pumpen</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li>ggf. asymptomatisch</li>
<li><strong>Muskelschwäche</strong>, Parästhesien, schlaffe Paresen</li>
<li><strong>Herzrhythmusstörungen</strong> (potenziell letal!)</li>
</ul>
<h3>EKG-Veränderungen (progressiv)</h3>
<ol>
<li><strong>Hohe, spitze T-Wellen</strong> (frühestes Zeichen, ab ca. 5,5–6,0 mmol/l)</li>
<li>Verkürztes QT-Intervall</li>
<li>PR-Verlängerung, flache P-Wellen</li>
<li><strong>QRS-Verbreiterung</strong></li>
<li>Sinuswellenform (Verschmelzung von QRS und T)</li>
<li><strong>Kammerflimmern / Asystolie</strong></li>
</ol>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1x venöser Zugang</li>
<li><strong>12-Kanal-EKG</strong> (sofort!)</li>
<li><strong>BGA</strong> (K⁺ am schnellsten! pH? Azidose?)</li>
<li><strong>Labor:</strong> BB, E'lyte, NW, CK, Gerinnung, BZ, ggf. Cortisol</li>
<li>Pseudohyperkaliämie ausschließen (Kontrolle bei unklarem Befund)</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Schwere Hyperkaliämie (K⁺ > 6,0 oder EKG-Veränderungen) – Notfall!</h3>
<h4>1. Kardioprotektion (sofort!)</h4>
<ul>
<li><strong>Calciumgluconat 10%</strong> 10–20 ml i.v. über 2–3 min (stabilisiert Myokard, senkt K⁺ nicht!)</li>
<li>Wiederholung nach 5–10 min bei persistierenden EKG-Veränderungen</li>
</ul>
<h4>2. Kaliumshift nach intrazellulär</h4>
<ul>
<li><strong>Insulin + Glukose:</strong> 10 IE Normalinsulin + 25 g Glukose (250 ml G10%) i.v. über 15–30 min (Wirkung nach 15–30 min)</li>
<li><strong>Salbutamol</strong> 10–20 mg Vernebler (additiv zu Insulin/Glukose)</li>
<li><strong>Natriumbikarbonat</strong> 50–100 mmol i.v. (nur bei gleichzeitiger Azidose)</li>
</ul>
<h4>3. Kaliumelimination</h4>
<ul>
<li><strong>Furosemid</strong> 40–80 mg i.v. (bei erhaltener Nierenfunktion)</li>
<li><strong>Natrium-Zirkonium-Cyclosilikat (Lokelma)</strong> 10 g p.o. 3x/d initial oder <strong>Patiromer (Veltassa)</strong> 8,4 g p.o.</li>
<li><strong>Hämodialyse:</strong> bei therapierefraktärer Hyperkaliämie, Nierenversagen</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>BZ-Kontrolle</strong> nach Insulin-Glukose-Gabe (Hypoglykämie-Risiko! BZ-Kontrolle nach 30 und 60 min!).</p></div>`
},
{
title: "Merke",
html: `<ul>
<li><strong>EKG sofort!</strong> – EKG-Veränderungen bestimmen die Dringlichkeit der Therapie</li>
<li><strong>Calcium</strong> schützt das Herz, senkt K⁺ aber NICHT – weitere Maßnahmen sofort einleiten!</li>
<li><strong>Insulin + Glukose</strong> senkt K⁺ am zuverlässigsten (Wirkdauer ca. 4–6h)</li>
<li>Auslöser identifizieren: <strong>Medikamente</strong> (ACE-I, ARB, MRA, NSAR) pausieren!</li>
<li>Pseudohyperkaliämie ausschließen bei unplausiblem Befund</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> schwere Hyperkaliämie mit EKG-Veränderungen, Dialyseindikation</li>
<li><strong>Überwachungsstation:</strong> K⁺ 6,0–6,5 ohne EKG-Veränderungen</li>
<li><strong>Normalstation:</strong> milde Hyperkaliämie (5,0–6,0) nach Korrektur des Auslösers</li>
</ul>`
}
],
        stand: "12/24",
        sources: `Clase CM et al. Potassium homeostasis and management of dyskalemia in kidney diseases: conclusions from a KDIGO Controversies Conference. Kidney Int. 2020;97(1):42-61.<br>Rossignol P et al. Emergency management of severe hyperkalemia: Guideline for best practice. Eur J Emerg Med. 2016;23(4):235-240.`
    });
})();
