// SOP: Heparininduzierte Thrombozytopenie
// Kategorie: Hämatologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "heparininduzierte-thrombozytopenie",
        title: "Heparininduzierte Thrombozytopenie",
        category: "Hämatologie",
        catKey: "haem",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>HIT Typ II:</strong> Immunologisch vermittelte, durch Heparin ausgelöste Thrombozytopenie mit paradox erhöhtem Thromboserisiko durch Antikörper gegen den Komplex aus Plättchenfaktor 4 (PF4) und Heparin</li>
<li>Abgrenzung: <strong>HIT Typ I</strong> (nicht-immunologisch, milder Abfall in den ersten Tagen, klinisch nicht relevant, kein Heparin-Stopp nötig)</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li>IgG-Antikörper gegen PF4-Heparin-Komplexe → Thrombozytenaktivierung → <strong>Thrombozytopenie + Thrombose</strong></li>
<li><strong>Unfraktioniertes Heparin (UFH):</strong> höchstes HIT-Risiko (1–5%)</li>
<li><strong>Niedermolekulares Heparin (NMH):</strong> geringeres Risiko (0,1–0,7%)</li>
<li>Typischer Beginn: <strong>Tag 5–14</strong> nach Heparinexposition (bei Reexposition auch früher)</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Thrombozytopenie:</strong> Abfall > 50% des Ausgangswertes (selten < 20.000/µl)</li>
<li><strong>Thromboembolische Komplikationen</strong> (in 50%!): TVT, LAE, arterielle Thrombosen (Schlaganfall, periphere Arterienverschlüsse), Hautläsionen an Injektionsstellen</li>
<li>ggf. Hautnekrosen an Heparin-Injektionsstellen</li>
<li>ggf. anaphylaktoide Reaktion bei Heparin-Bolus</li>
</ul>`
},
{
title: "Diagnostik",
html: `<ul>
<li><strong>4T-Score</strong> (klinische Vortestwahrscheinlichkeit):
<ul>
<li><strong>T</strong>hrombozytenabfall (Ausmaß, Nadir)</li>
<li><strong>T</strong>iming (Tag 5–14?)</li>
<li><strong>T</strong>hrombose (neue Thrombose?)</li>
<li>Andere <strong>T</strong>hrombozytopenie-Ursachen (Sepsis, Medikamente, DIC)?</li>
<li>Score ≤ 3: HIT unwahrscheinlich; 4–5: intermediär; 6–8: hohe Wahrscheinlichkeit</li>
</ul>
</li>
<li><strong>Anti-PF4/Heparin-Antikörper (ELISA):</strong> Screening (hohe Sensitivität, moderate Spezifität)</li>
<li><strong>Funktionelle Tests:</strong> HIPA oder Serotonin-Release-Assay (Bestätigungstest, hohe Spezifität)</li>
<li>Labor: BB (Thrombozytenverlauf!), Gerinnung, D-Dimere</li>
<li>Bildgebung: Doppler-Sonographie bei V.a. TVT</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Sofortmaßnahmen bei klinischem Verdacht (4T-Score ≥ 4)</h3>
<ul>
<li><strong>Sofort alle Heparine stoppen!</strong> (UFH UND NMH, auch Heparin-Spülungen und Heparin-beschichtete Katheter)</li>
<li><strong>Alternative Antikoagulation</strong> sofort beginnen (auch ohne Thrombosenachweis, da hohes Thromboserisiko!):
<ul>
<li><strong>Argatroban</strong> i.v. (Perfusor, Ziel-aPTT 1,5–3× Ausgangswert, Dosisreduktion bei Leberinsuffizienz)</li>
<li><strong>Fondaparinux</strong> s.c. (Off-Label, aber gut belegt)</li>
<li><strong>Bivalirudin</strong> i.v. (bei PCI)</li>
<li><strong>DOAK</strong> (nach Akutphase, Umstellung von Argatroban)</li>
</ul>
</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Kein Vitamin-K-Antagonist (Marcumar/Warfarin)</strong> in der Akutphase! Risiko der Cumarin-Nekrose und venösen Gangrän! Erst nach Thrombozytenerhöhung und stabiler alternativer Antikoagulation umstellen.</p></div>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Keine Thrombozytentransfusion</strong> bei HIT (kann Thrombose aggravieren)!</p></div>`
},
{
title: "Merke",
html: `<ul>
<li>An HIT denken bei <strong>Thrombozytenabfall > 50%</strong> ab Tag 5–14 nach Heparinexposition</li>
<li><strong>4T-Score</strong> zur klinischen Vortestwahrscheinlichkeit</li>
<li><strong>Sofort alle Heparine stoppen</strong> und alternative Antikoagulation beginnen</li>
<li><strong>Kein Marcumar</strong> in der Akutphase!</li>
<li><strong>Keine Thrombozytentransfusion!</strong></li>
<li>Dokumentation: HIT-Ausweis ausstellen, Allergie-Pass</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Stationäre Aufnahme</strong> (alle Patienten mit V.a. HIT II)</li>
<li>Hämatologisches Konsil</li>
</ul>`
}
],
        stand: "12/24",
        sources: `Greinacher A et al. Heparininduzierte Thrombozytopenie. Dtsch Arztebl Int. 2020;117(10):166-173.<br>Cuker A et al. ASH 2018 guidelines for management of venous thromboembolism: heparin-induced thrombocytopenia. Blood Adv. 2018;2(22):3360-3392.`
    });
})();
