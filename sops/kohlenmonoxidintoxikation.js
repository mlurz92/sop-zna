// SOP: Kohlenmonoxidintoxikation
// Kategorie: Toxikologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "kohlenmonoxidintoxikation",
        title: "Kohlenmonoxidintoxikation",
        category: "Toxikologie",
        catKey: "tox",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Kohlenmonoxidintoxikation (CO-Intoxikation):</strong> Vergiftung durch Einatmen von Kohlenmonoxid (CO), einem farb-, geruch- und geschmacklosen Gas, das mit ca. 250-fach höherer Affinität als Sauerstoff an Hämoglobin bindet (Carboxyhämoglobin, CO-Hb) und so die Sauerstofftransportkapazität und -abgabe kritisch reduziert</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Defekte Heizungsanlagen</strong> (häufigste Ursache!), Gasthermen, Kamine, Öfen</li>
<li><strong>Brände</strong> (Rauchgasinhalation)</li>
<li><strong>Autoabgase</strong> (geschlossener Raum)</li>
<li><strong>Holzkohlegrill/Shisha</strong> in geschlossenen Räumen</li>
<li><strong>Suizidale Absicht</strong></li>
<li>Generatoren, Motorsägen in geschlossenen Räumen</li>
</ul>`
},
{
title: "Symptome",
html: `<div class="table-wrap"><table>
<thead><tr><th>CO-Hb (%)</th><th>Symptome</th></tr></thead>
<tbody>
<tr><td>< 10</td><td>Meist asymptomatisch (Raucher: bis 10% physiologisch)</td></tr>
<tr><td>10–20</td><td>Kopfschmerzen, Schwindel, Übelkeit</td></tr>
<tr><td>20–30</td><td>Starke Kopfschmerzen, Erbrechen, Sehstörungen, Tachykardie</td></tr>
<tr><td>30–40</td><td>Verwirrtheit, Synkope, Tachypnoe</td></tr>
<tr><td>40–60</td><td>Bewusstlosigkeit, Krampfanfälle, Arrhythmien</td></tr>
<tr><td>> 60</td><td>Koma, Herz-Kreislauf-Stillstand, Tod</td></tr>
</tbody>
</table></div>
<ul>
<li>ggf. <strong>Kirschrote Hautfarbe</strong> (selten, eher bei Leichen)</li>
<li>ggf. <strong>Thoraxschmerzen</strong> (myokardiale Ischämie, ACS!)</li>
<li><strong>Verzögerte neurologische Spätschäden</strong> (Tage bis Wochen nach Exposition): kognitive Defizite, Parkinsonoid, Persönlichkeitsveränderungen</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Die <strong>Pulsoximetrie (SpO₂) ist falsch-normal!</strong> CO-Hb wird vom Pulsoximeter als O₂-Hb fehlinterpretiert → SpO₂ nicht verwertbar bei CO-Intoxikation!</p></div>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1–2x venöser Zugang</li>
<li><strong>BGA mit CO-Oxymetrie!</strong> (CO-Hb-Bestimmung → einzig zuverlässige Messung!)</li>
<li><strong>Labor:</strong> BB, E'lyte, NW, <strong>hs-Troponin</strong> (myokardiale Schädigung!), CK, Laktat, Gerinnung</li>
<li><strong>12-Kanal-EKG</strong> (Ischämiezeichen? Arrhythmien?)</li>
<li><strong>Anamnese:</strong> Expositionsquelle? Expositionsdauer? Geschlossener Raum? Weitere Betroffene? Suizidal? Bewusstlosigkeit? Schwangerschaft?</li>
<li>ggf. cCT (bei prolongierter Bewusstlosigkeit, fokal-neurologischem Defizit)</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>CO-Hb-Wert korreliert nicht zuverlässig</strong> mit dem klinischen Schweregrad! Ein niedriger Wert schließt eine schwere Intoxikation nicht aus (Zeitfaktor, O₂-Gabe vor Messung).</p></div>`
},
{
title: "Therapie",
html: `<h3>Sofortmaßnahmen</h3>
<ul>
<li><strong>Aus dem Gefahrenbereich entfernen!</strong> (Eigenschutz!)</li>
<li><strong>100% Sauerstoff über Non-Rebreather-Maske</strong> (15 l/min) → so früh wie möglich, so lange wie möglich (mindestens 6h oder bis CO-Hb < 3%)</li>
<li>HWZ von CO-Hb: bei Raumluft ca. 320 min, bei 100% O₂ ca. 80 min, bei HBO ca. 23 min</li>
</ul>
<h3>Hyperbare Sauerstofftherapie (HBO)</h3>
<p><strong>Indikationen:</strong></p>
<ul>
<li>CO-Hb > 25%</li>
<li>Bewusstlosigkeit (auch transient)</li>
<li>Neurologische Symptome (Verwirrtheit, Krampfanfälle, fokal-neurologisches Defizit)</li>
<li>Kardiale Ischämie/Arrhythmien</li>
<li>Schwangerschaft (fetales Hb hat höhere CO-Affinität!)</li>
<li>Persistierende Symptome trotz 100% O₂</li>
</ul>
<h3>Supportive Therapie</h3>
<ul>
<li>Atemwegssicherung bei Bewusstlosigkeit</li>
<li>Kardiovaskuläres Monitoring</li>
<li>ACS-Therapie bei myokardialer Ischämie</li>
<li>Krampfanfallbehandlung (Benzodiazepine)</li>
</ul>
<div class="callout callout-hinweis"><p><strong>Hinweis:</strong> An <strong>begleitende Zyanidintoxikation</strong> denken bei Rauchgasinhalation (Brandopfer)! Bei V.a. Zyanidintoxikation: <strong>Hydroxocobalamin</strong> 5 g i.v. (Cyanokit).</p></div>`
},
{
title: "Merke",
html: `<ul>
<li><strong>SpO₂ ist bei CO-Intoxikation nicht verwertbar!</strong> → BGA mit CO-Oxymetrie!</li>
<li><strong>100% O₂</strong> sofort und kontinuierlich geben</li>
<li>An <strong>weitere Betroffene</strong> denken (Familienmitglieder, Nachbarn) → Feuerwehr/Rettungsdienst informieren!</li>
<li><strong>HBO</strong> erwägen bei schwerer Intoxikation, Bewusstlosigkeit, Schwangerschaft</li>
<li><strong>Troponin</strong> bestimmen (myokardiale Schädigung häufig!)</li>
<li>An <strong>neurologische Spätschäden</strong> denken → Nachsorge empfehlen</li>
<li>Bei Brandopfern: an <strong>Zyanidintoxikation</strong> denken → Hydroxocobalamin</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> Bewusstlosigkeit, Krampfanfälle, kardiale Ischämie, CO-Hb > 25%</li>
<li><strong>Überwachung (mind. 6–12h):</strong> symptomatische Patienten</li>
<li><strong>HBO-Zentrum:</strong> bei Indikation zur hyperbaren Sauerstofftherapie</li>
<li><strong>Ambulant:</strong> nur bei asymptomatischen Patienten nach ausreichender O₂-Therapie, CO-Hb normalisiert, normales Troponin, unauffälliges EKG, gesicherte Elimination der CO-Quelle</li>
</ul>`
}
],
        stand: "12/24",
        sources: `Rose JJ et al. Carbon Monoxide Poisoning: Pathogenesis, Management, and Future Directions of Therapy. Am J Respir Crit Care Med. 2017;195(5):596-606.<br>Weaver LK. Carbon Monoxide Poisoning. N Engl J Med. 2009;360(12):1217-25.`
    });
})();
