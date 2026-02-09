// SOP: Hypoglykämie
// Kategorie: Metabolisch
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "hypoglykaemie",
        title: "Hypoglykämie",
        category: "Metabolisch",
        catKey: "metab",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Hypoglykämie:</strong> BZ < 70 mg/dl (3,9 mmol/l)</li>
<li><strong>Schwere Hypoglykämie:</strong> BZ < 54 mg/dl (3,0 mmol/l) und/oder Notwendigkeit fremder Hilfe</li>
<li><strong>Unterzuckerungsschock:</strong> Bewusstlosigkeit, Krampfanfall, Koma</li>
</ul>
<div class="callout callout-hinweis"><p><strong>Klassifikation nach ADA:</strong><br>• Level 1: BZ < 70 mg/dl (3,9 mmol/l)<br>• Level 2: BZ < 54 mg/dl (3,0 mmol/l) – klinisch signifikant<br>• Level 3: Schwere Hypoglykämie – fremde Hilfe erforderlich</p></div>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Diabetes mellitus:</strong> Zu hohe Insulindosis, Sulfonylharnstoffe, Glinide, Mahlzeiten ausgelassen, körperliche Aktivität</li>
<li><strong>Exogene Faktoren:</strong> Alkohol, Medikamente (Chinin, Fluorchinolone, β-Blocker), Vergiftungen</li>
<li><strong>Endogene Ursachen:</strong> Insulinom, Nebennierenrindeninsuffizienz, Hypophyseninsuffizienz, Sepsis, Leberversagen, Nierenversagen</li>
<li><strong>Iatrogen:</strong> Insulinfehler (Verwechslung), bariatrische Chirurgie</li>
</ul>`
},
{
title: "Symptome",
html: `<h3>Neuroglykopenische Symptome (BZ < 54 mg/dl)</h3>
<ul>
<li>Konzentrationsstörungen, Verwirrtheit</li>
<li>Sprachstörungen, Sehstörungen</li>
<li>Ataxie, Koordinationsstörungen</li>
<li>Bewusstseinseintrübung, Somnolenz</li>
<li>Krampfanfälle, Koma</li>
</ul>
<h3>Adrenerge Symptome (Gegenregulation)</h3>
<ul>
<li>Schwitzen, Zittern, Tachykardie</li>
<li>Blässe, Unruhe, Angst</li>
<li>Hunger, Übelkeit</li>
</ul>
<div class="callout callout-hinweis"><p><strong>Hinweis:</strong> Bei langjährigem Diabetes kann die <strong>Gegenregulation gestört</strong> sein (Hypoglykämie-Wahrnehmungsstörung) → fehlende Warnsymptome!</p></div>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li><strong>BZ-Messung</strong> (kapillär oder BGA)</li>
<li><strong>BGA</strong> (BZ, E'lyte, Laktat)</li>
<li><strong>Labor:</strong> BB, E'lyte, Kreatinin, Leberwerte, bei unklarer Ursache: Insulin, C-Peptid, β-Hydroxybutyrat, Kortisol</li>
<li>12-Kanal-EKG</li>
<li>CT Kopf bei persistierender Bewusstseinsstörung</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Patient bei Bewusstsein, schluckfähig</h3>
<ul>
<li><strong>Orale Glukose:</strong> 15–20 g Kohlenhydrate (Traubenzucker, Glukoselösung, zuckerhaltige Getränke)</li>
<li>Warten (15 min), dann BZ erneut messen</li>
<li>Bei BZ weiterhin < 70 mg/dl: Vorgang wiederholen</li>
<li>Anschließend langsamer KH-Träger (z.B. Brot) zur Stabilisierung</li>
</ul>
<h3>Patient bewusstlos/nicht schluckfähig</h3>
<ul>
<li><strong>Glukose 40% i.v.:</strong> 50–100 ml (20–40 g Glukose) als Bolus</li>
<li>Alternative: <strong>Glukagon 1 mg i.m./s.c.</strong> (wenn kein i.v.-Zugang)</li>
<li>BZ-Kontrolle nach 10–15 min</li>
<li>Bei fehlendem Ansprechen: Glukose wiederholen, Ursache suchen</li>
</ul>
<h3>Weitere Maßnahmen</h3>
<ul>
<li><strong>Thiamin 100 mg i.v.</strong> bei Alkoholismus/Mangelernährung (Wernicke-Enzephalopathie verhindern)</li>
<li>Bei Sulfonylharnstoff-Überdosierung: <strong>Octreotid 50–100 µg s.c.</strong> alle 8h</li>
<li>Bei prolongierter Hypoglykämie: Glukose-Perfusor (5–10 g/h)</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Nach Glukagon-Gabe kann <strong>Erbrechen</strong> auftreten → Aspirationsgefahr bei bewusstlosen Patienten! Stabile Seitenlage.</p></div>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Bei Bewusstlosigkeit immer an Hypoglykämie denken!</strong> (Diabetiker, Alkoholiker)</li>
<li><strong>Glukose i.v.</strong> ist die sicherste Methode bei bewusstlosen Patienten</li>
<li><strong>Glukagon</strong> wirkt nicht bei Sulfonylharnstoff-induzierter Hypoglykämie oder Glykogenverarmung (Alkoholiker)</li>
<li>Bei Sulfonylharnstoff-Überdosierung: <strong>Stationäre Überwachung</strong> (Rebound-Hypoglykämie bis zu 24–48h möglich!)</li>
<li>Ursachenabklärung bei schwerer Hypoglykämie immer erforderlich</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> Bewusstlosigkeit, Krampfanfall, prolongierte Hypoglykämie</li>
<li><strong>Normalstation:</strong> Sulfonylharnstoff-induzierte Hypoglykämie (Überwachung 24–48h)</li>
<li><strong>ambulant:</strong> Leichte Hypoglykämie bei bekanntem Diabetiker mit schneller Erholung und klarer Ursache</li>
</ul>`
}
],
        stand: "12/24",
        sources: `American Diabetes Association. Standards of Medical Care in Diabetes—2024. Diabetes Care. 2024;47(Suppl 1).<br>Seaquist ER et al. Hypoglycemia and Diabetes: A Report of a Workgroup of the ADA and Endocrine Society. Diabetes Care. 2013;36(5):1384-95.`
    });
})();
