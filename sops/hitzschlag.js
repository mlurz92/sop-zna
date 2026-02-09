// SOP: Hitzschlag
// Kategorie: Sonstige
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "hitzschlag",
        title: "Hitzschlag",
        category: "Sonstige",
        catKey: "sonst",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Hitzschlag:</strong> Lebensbedrohlicher Notfall mit <strong>Körperkerntemperatur > 40°C</strong> und <strong>ZNS-Dysfunktion</strong> (Verwirrtheit, Krampfanfall, Koma) infolge einer Überwärmung des Organismus</li>
</ul>
<h3>Formen</h3>
<ul>
<li><strong>Klassischer Hitzschlag:</strong> passive Überwärmung (ältere, chronisch kranke Patienten, Hitzewelle)</li>
<li><strong>Anstrengungsbedingter Hitzschlag:</strong> körperliche Belastung bei Hitze (Sportler, Soldaten, Arbeiter)</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li>Hohe Umgebungstemperatur + hohe Luftfeuchtigkeit</li>
<li>Körperliche Anstrengung bei Hitze</li>
<li>Mangelnde Akklimatisierung</li>
<li>Dehydratation</li>
<li>Medikamente: Anticholinergika, Diuretika, Betablocker, Neuroleptika, SSRI, Sympathomimetika</li>
<li>Adipositas, hohes Alter, kardiovaskuläre Erkrankungen</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Körperkerntemperatur > 40°C</strong></li>
<li><strong>ZNS-Dysfunktion:</strong> Verwirrtheit, Agitation, Ataxie, Krampfanfälle, Koma</li>
<li><strong>Heiße, trockene Haut</strong> (klassisch) oder schweißnasse Haut (anstrengungsbedingt)</li>
<li>Tachykardie, Hypotonie</li>
<li>Tachypnoe</li>
<li>ggf. <strong>Multiorganversagen:</strong> AKI, Rhabdomyolyse, DIC, Leberversagen, ARDS</li>
</ul>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter + <strong>Körperkerntemperatur</strong> (rektal!)</li>
<li>1–2x venöser Zugang</li>
<li><strong>BGA</strong> (Laktat? pH? E'lyte? Glukose?)</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte, NW, <strong>CK</strong> (Rhabdomyolyse!), GOT, GPT, LDH, Bilirubin, Gerinnung (DIC?), Fibrinogen, Myoglobin, Laktat</li>
<li>12-Kanal-EKG</li>
<li>Urin-Status (Myoglobinurie?)</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Sofortige aggressive Kühlung (wichtigste Maßnahme!)</h3>
<ul>
<li><strong>Ziel:</strong> Kerntemperatur < 39°C innerhalb von 30 Minuten</li>
<li><strong>Goldstandard:</strong> Kaltwasser-Immersion (Eiswasserbad, 1–2°C, effektivste Methode)</li>
<li><strong>Alternativen:</strong> Evaporation (Besprühen mit Wasser + Ventilator), Eispacks (Leiste, Axilla, Hals), kalte i.v.-Infusionen (4°C kristalloid), Kühldecken</li>
<li>Kühlung stoppen bei Kerntemperatur 38–39°C (Overshoot vermeiden)</li>
</ul>
<h3>Supportive Therapie</h3>
<ul>
<li>Aggressive Volumentherapie (Vollelektrolytlösung)</li>
<li>Atemwegssicherung bei Bewusstlosigkeit</li>
<li>Krampfanfalldurchbrechung: Benzodiazepine (Midazolam 5 mg i.v.)</li>
<li>Elektrolytausgleich</li>
<li>Rhabdomyolyse-Management (forcierte Diurese, s. AKI)</li>
<li>DIC-Management</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Antipyretika (Paracetamol, Ibuprofen) sind wirkungslos</strong> beim Hitzschlag – es liegt keine Pyrogen-vermittelte Temperatursollwertverstellung vor! Nur physikalische Kühlung!</p></div>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Hitzschlag = lebensbedrohlicher Notfall</strong> – Letalität ohne Therapie 50–80%!</li>
<li><strong>Aggressives Kühlen</strong> ist die wichtigste und zeitkritische Maßnahme</li>
<li>Antipyretika sind unwirksam!</li>
<li>Kerntemperatur <strong>rektal</strong> messen (periphere Messung unzuverlässig)</li>
<li>An <strong>Rhabdomyolyse, DIC, AKI, Leberversagen</strong> denken</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation</strong> (immer bei Hitzschlag)</li>
</ul>`
}
],
        stand: "12/24",
        sources: `Epstein Y et al. Heatstroke. N Engl J Med. 2019;380(25):2449-2459.<br>Leon LR et al. Heat stroke: Role of the systemic inflammatory response. J Appl Physiol. 2010;109(6):1980-8.`
    });
})();
