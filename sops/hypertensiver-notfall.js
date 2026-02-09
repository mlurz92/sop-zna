// SOP: Hypertensiver Notfall
// Kategorie: Kardiologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "hypertensiver-notfall",
        title: "Hypertensiver Notfall",
        category: "Kardiologie",
        catKey: "kardio",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Hypertensiver Notfall:</strong> RR systolisch > 180 mmHg und/oder RR diastolisch > 120 mmHg <strong>mit</strong> akuter Endorganschädigung</li>
<li><strong>Hypertensive Dringlichkeit:</strong> RR systolisch > 180 mmHg und/oder RR diastolisch > 120 mmHg <strong>ohne</strong> akute Endorganschädigung</li>
</ul>
<div class="callout callout-hinweis"><p><strong>Endorganschäden:</strong> Enzephalopathie, Schlaganfall, akutes Koronarsyndrom, akute Herzinsuffizienz, Aortendissektion, Nierenversagen, Eklampsie</p></div>`
},
{
title: "Ursachen",
html: `<ul>
<li>Essentielle Hypertonie (Exazerbation)</li>
<li>Medikamenten-Non-Adhärenz (Absetzen von Antihypertensiva)</li>
<li>Sekundäre Hypertonie (Phäochromozytom, renovaskuläre Hypertonie)</li>
<li>Drogen (Kokain, Amphetamine)</li>
<li>Medikamente (NSAR, orale Kontrazeptiva, Steroide)</li>
<li>Schwangerschaft (Eklampsie, HELLP)</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Neurologisch:</strong> Kopfschmerzen, Sehstörungen, Verwirrtheit, Bewusstseinseintrübung, Krampfanfälle (Enzephalopathie)</li>
<li><strong>Kardial:</strong> Thoraxschmerzen, Dyspnoe, Palpitationen</li>
<li><strong>Renal:</strong> Oligurie, Hämaturie</li>
<li>Übelkeit, Erbrechen</li>
</ul>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter (beide Arme messen!)</li>
<li><strong>Blutdruckmessung</strong> (automatisch, alle 5–15 min)</li>
<li><strong>EKG</strong> (Ischämie, LVH)</li>
<li><strong>Labor:</strong> BB, E'lyte, Kreatinin, Harnstoff, Troponin, BNP/NT-proBNP, LDH, Haptoglobin (Hämolyse bei TTP/HUS), D-Dimere, Schwangerschaftstest</li>
<li><strong>BGA</strong> (Laktat)</li>
<li>Urin-Status (Erythrozytenzylinder)</li>
<li><strong>Fundoskopie</strong> (Papillenödem, Retinopathie)</li>
<li><strong>CT Kopf</strong> bei neurologischen Symptomen</li>
<li><strong>Echo</strong> bei Dyspnoe/Thoraxschmerzen</li>
<li><strong>CT Thorax/Abdomen</strong> bei Verdacht auf Aortendissektion</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Allgemeines</h3>
<ul>
<li><strong>RR-Ziel:</strong> In den ersten 60 min um max. <strong>20–25%</strong> senken (außer Aortendissektion, siehe unten)</li>
<li>Vermeide zu schnelle Senkung → Gefahr der zerebralen/peripheren Hypoperfusion!</li>
<li>Monitoring: EKG, SpO₂, invasive RR-Messung bei schwerer Symptomatik</li>
</ul>
<h3>Medikamente nach Endorganschaden</h3>
<table>
<thead>
<tr><th>Endorganschaden</th><th>Medikament der Wahl</th><th>Alternative</th></tr>
</thead>
<tbody>
<tr><td>Hypertensive Enzephalopathie</td><td>Nicardipin</td><td>Labetalol</td></tr>
<tr><td>Ischämischer Schlaganfall</td><td>Nicardipin, Labetalol</td><td>–</td></tr>
<tr><td>Intrazerebrale Blutung</td><td>Nicardipin, Labetalol</td><td>–</td></tr>
<tr><td>Akutes Koronarsyndrom</td><td>Nitroglycerin + β-Blocker</td><td>Labetalol</td></tr>
<tr><td>Akute Herzinsuffizienz</td><td>Nitroglycerin</td><td>Nesiritid</td></tr>
<tr><td><strong>Aortendissektion</strong></td><td><strong>Esmolol + Nicardipin</strong></td><td>Labetalol</td></tr>
<tr><td>Eklampsie</td><td>Magnesiumsulfat + Hydralazin</td><td>Labetalol</td></tr>
<tr><td>Phäochromozytom</td><td>Phentolamin</td><td>Nicardipin</td></tr>
</tbody>
</table>
<h3>Dosierungen</h3>
<ul>
<li><strong>Nicardipin:</strong> 5 mg/h i.v., alle 15–30 min um 2,5 mg/h steigern (max. 15 mg/h)</li>
<li><strong>Labetalol:</strong> 20 mg i.v. über 2 min, dann 40–80 mg alle 10 min (max. 300 mg)</li>
<li><strong>Esmolol:</strong> 500 µg/kg über 1 min, dann 50–200 µg/kg/min</li>
<li><strong>Nitroglycerin:</strong> 10–20 µg/min, alle 5 min um 5–10 µg/min steigern (max. 200 µg/min)</li>
<li><strong>Urapidil:</strong> 10–50 mg i.v. als Bolus, dann 5–40 mg/h</li>
<li><strong>Phentolamin:</strong> 1–5 mg i.v. als Bolus, wiederholen alle 5 min</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Bei <strong>Aortendissektion</strong> Ziel-RR systolisch < 120 mmHg innerhalb von 20 min! β-Blocker <strong>vor</strong> Vasodilatatoren (Vermeidung von Tachykardie und Scherkräften).</p></div>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Langsame Blutdrucksenkung!</strong> Max. 20–25% in der ersten Stunde (außer Aortendissektion)</li>
<li>Zu schnelle Senkung → zerebrale Ischämie, Nierenversagen, Myokardischämie</li>
<li><strong>β-Blocker</strong> vor Vasodilatatoren bei Aortendissektion</li>
<li>Immer nach Endorganschäden suchen!</li>
<li>Ursache abklären (Non-Adhärenz, sekundäre Hypertonie)</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> Hypertensiver Notfall mit Endorganschaden</li>
<li><strong>Überwachungsstation:</strong> Hypertensive Dringlichkeit, RR-Kontrolle</li>
<li><strong>ambulant:</strong> Nur bei hypertensiver Dringlichkeit mit guter Einstellung und Compliance</li>
</ul>`
}
],
        stand: "12/24",
        sources: `Whelton PK et al. 2017 ACC/AHA Guideline for the Prevention, Detection, Evaluation, and Management of High Blood Pressure in Adults. J Am Coll Cardiol. 2018;71(19):e127-e248.<br>van den Born BJH et al. ESC/ESH 2023 Guidelines on acute heart failure. Eur Heart J. 2023.`
    });
})();
