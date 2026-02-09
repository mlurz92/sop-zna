// SOP: Asthmaexazerbation
// Kategorie: Pneumologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "asthmaexazerbation",
        title: "Asthmaexazerbation",
        category: "Pneumologie",
        catKey: "pulmo",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Asthmaexazerbation:</strong> Akute oder subakute Verschlechterung der Asthmasymptome (Dyspnoe, Giemen, Husten, Thoraxenge) mit Abfall der Lungenfunktion, die über die normale Tagesvariabilität hinausgeht und eine Therapieeskalation erfordert</li>
</ul>
<h3>Schweregrade</h3>
<div class="table-wrap"><table>
<thead><tr><th>Parameter</th><th>Moderat</th><th>Schwer</th><th>Lebensbedrohlich</th></tr></thead>
<tbody>
<tr><td>Sprechen</td><td>Sätze</td><td>Worte</td><td>Unfähig</td></tr>
<tr><td>AF</td><td>Erhöht</td><td>> 25/min</td><td>Bradypnoe/Erschöpfung</td></tr>
<tr><td>HF</td><td>100–120/min</td><td>> 120/min</td><td>Bradykardie</td></tr>
<tr><td>SpO₂</td><td>90–95%</td><td>< 90%</td><td>< 90%</td></tr>
<tr><td>PEF</td><td>50–75% Soll</td><td>< 50% Soll</td><td>Nicht durchführbar</td></tr>
<tr><td>Sonstiges</td><td>—</td><td>Atemhilfsmuskulatur</td><td>Silent Chest, Zyanose, Bewusstseinseintrübung</td></tr>
</tbody>
</table></div>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Allergene:</strong> Pollen, Hausstaubmilben, Tierhaare, Schimmelpilze</li>
<li><strong>Infektionen:</strong> Virale Atemwegsinfekte (häufigster Trigger), bakterielle Superinfektion</li>
<li><strong>Umweltfaktoren:</strong> Luftverschmutzung, Tabakrauch, Kaltluft, Reizgase</li>
<li><strong>Medikamente:</strong> NSAR, Betablocker (auch Augentropfen!), ASS (Analgetika-Asthma)</li>
<li><strong>Körperliche Anstrengung</strong> (Exercise-induced Bronchoconstriction)</li>
<li><strong>Non-Compliance</strong> mit inhalativer Dauertherapie (ICS)</li>
<li><strong>Psychischer Stress</strong></li>
<li><strong>Gastroösophagealer Reflux</strong></li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Zunehmende Dyspnoe</strong>, Tachypnoe</li>
<li><strong>Giemen</strong>, verlängertes Exspirium</li>
<li><strong>Trockener Husten</strong></li>
<li><strong>Thorakale Enge</strong></li>
<li>Einsatz der <strong>Atemhilfsmuskulatur</strong></li>
<li>Unfähigkeit, vollständige Sätze zu sprechen</li>
<li>Agitation, Angst</li>
<li>ggf. <strong>Silent Chest</strong> (fehlendes Atemgeräusch bei schwerstem Bronchospasmus – Alarmzeichen!)</li>
<li>ggf. <strong>Zyanose</strong></li>
<li>ggf. <strong>Bewusstseinseintrübung</strong> (Hypoxie/Hyperkapnie – Notfallintubation!)</li>
</ul>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur)</li>
<li>1x venöser Zugang</li>
<li><strong>BGA</strong> (pO₂? pCO₂? pH? Laktat? – CAVE: normales oder steigendes pCO₂ bei Asthmaexazerbation ist ein Alarmzeichen für ventilatorische Erschöpfung!)</li>
<li><strong>Peak-Flow-Messung</strong> (PEF in % des Sollwerts oder persönlichen Bestwerts)</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte, NW, ggf. hs-Troponin, BNP</li>
<li>12-Kanal-EKG</li>
</ul>
<h3>Klinische Untersuchung</h3>
<ul>
<li><strong>Anamnese:</strong> Symptombeginn? Auslöser? Vorbekanntes Asthma? Aktuelle Dauertherapie? ICS-Compliance? Häufigkeit der Bedarfsmedikation? Vorherige Exazerbationen? Z.n. Intubation/Intensivaufenthalt? Letzte Steroideinnahme? Allergien?</li>
<li><strong>Körperliche Untersuchung:</strong> AF? Atemhilfsmuskulatur? Giemen? Silent Chest? SpO₂? Sprechfähigkeit?</li>
</ul>
<h3>Erweiterte Diagnostik (ggf.)</h3>
<ul>
<li><strong>Röntgen-Thorax:</strong> bei Fieber, V.a. Pneumothorax, V.a. Pneumonie, Erstmanifestation, fehlendem Ansprechen auf Therapie</li>
<li><strong>CT-Thorax:</strong> bei V.a. Lungenarterienembolie oder andere DD</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Ein <strong>normaler oder erhöhter pCO₂</strong> bei einer Asthmaexazerbation ist ein <strong>Alarmzeichen</strong> für ventilatorische Erschöpfung – normalerweise hyperventilieren Asthmapatienten (pCO₂ ↓)!</p></div>`
},
{
title: "Therapie",
html: `<h3>Moderate Exazerbation</h3>
<ul>
<li><strong>Salbutamol</strong> 2,5–5 mg Vernebler oder 4–8 Hübe über Spacer, alle 20 min wiederholen</li>
<li><strong>Ipratropiumbromid</strong> 0,5 mg Vernebler oder 4 Hübe über Spacer</li>
<li><strong>Prednisolon</strong> 50 mg p.o. oder i.v. (innerhalb der ersten Stunde!)</li>
<li><strong>Sauerstoff:</strong> Ziel-SpO₂ 93–95%</li>
</ul>
<h3>Schwere Exazerbation</h3>
<ul>
<li>Wie oben, zusätzlich:</li>
<li><strong>Salbutamol-Dauerverneblung</strong> (kontinuierlich 5–10 mg/h)</li>
<li><strong>Ipratropiumbromid</strong> 0,5 mg Vernebler alle 20 min in der ersten Stunde</li>
<li><strong>Magnesiumsulfat</strong> 2 g i.v. über 20 min (Einzeldosis, wirkt bronchospasmolytisch)</li>
<li><strong>Prednisolon</strong> 50–100 mg i.v.</li>
</ul>
<h3>Lebensbedrohliche Exazerbation / Near-Fatal Asthma</h3>
<ul>
<li>Intensivstation / Notfallteam</li>
<li>Alle oben genannten Maßnahmen</li>
<li><strong>Adrenalin:</strong> 0,3–0,5 mg i.m. (bei Anaphylaxie-Komponente) oder Adrenalin-Vernebler 3–5 mg</li>
<li><strong>Reproterol</strong> 0,09 mg langsam i.v. (über 10 min), ggf. Perfusor</li>
<li><strong>Ketamin</strong> 0,5–1 mg/kg i.v. Bolus (bronchospasmolytisch, als Narkoseinduktion bei RSI)</li>
<li><strong>NIV:</strong> Versuch bei kooperativem Patient (CAVE: Keine Verzögerung der Intubation!)</li>
<li><strong>Intubation und invasive Beatmung:</strong> bei Erschöpfung, Bewusstlosigkeit, Atemstillstand. RSI mit Ketamin bevorzugt, niedrige Atemfrequenz, langes Exspirium, Plateau-Druck-limitiert</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Intubation und Beatmung beim Status asthmaticus ist hochriskant (Hypotonie, Pneumothorax). <strong>Nicht-invasive Maßnahmen maximal ausschöpfen!</strong> Bei Intubation: erfahrenstes Personal, RSI mit Ketamin, permissive Hyperkapnie.</p></div>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Systemische Steroide frühzeitig</strong> (innerhalb der ersten Stunde) – reduzieren Rückfallrate und Hospitalisierung</li>
<li><strong>Silent Chest</strong> = fehlende Atemgeräusche bei schwerstem Bronchospasmus → lebensbedrohlich!</li>
<li><strong>Normales/erhöhtes pCO₂</strong> = ventilatorische Erschöpfung → Intensivstation!</li>
<li>MgSO₄ i.v. bei schwerer Exazerbation, die auf initiale Therapie nicht ausreichend anspricht</li>
<li>Keine Sedierung (Benzodiazepine, Opioide) bei nicht-intubierten Patienten → Atemdepressionsgefahr!</li>
<li>Asthma ≠ COPD: Ziel-SpO₂ <strong>93–95%</strong> (nicht 88–92% wie bei COPD)</li>
<li>Nach Entlassung: ICS-Therapie sicherstellen, Asthmaschulung, Notfallplan, Wiedervorstellung</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> lebensbedrohliche Exazerbation, Intubation, NIV, fehlende Besserung trotz maximaler Therapie, pCO₂ ↑</li>
<li><strong>Normalstation:</strong> schwere Exazerbation mit Besserung unter Therapie, persistierender O₂-Bedarf</li>
<li><strong>Ambulant:</strong> gutes Ansprechen auf Therapie (PEF > 75%, SpO₂ > 94%, stabil über 1h), Prednisolon 40–50 mg p.o. für 5–7 Tage, Inhalationstechnik geprüft, Wiedervorstellung gesichert</li>
</ul>`
}
],
        stand: "12/24",
        sources: `GINA 2024. Global Strategy for Asthma Management and Prevention.<br>Buhl R et al. S2k-Leitlinie zur Diagnostik und Therapie von Patienten mit Asthma. AWMF-Register-Nr. 020-009, 2023.<br>BTS/SIGN British Guideline on the Management of Asthma. 2019.`
    });
})();
