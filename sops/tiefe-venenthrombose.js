// SOP: Tiefe Venenthrombose
// Kategorie: Hämatologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "tiefe-venenthrombose",
        title: "Tiefe Venenthrombose",
        category: "Hämatologie",
        catKey: "haem",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Tiefe Venenthrombose (TVT):</strong> Thrombotischer Verschluss einer tiefen Vene, meist der unteren Extremität (V. poplitea, V. femoralis, V. iliaca)</li>
<li>Potenziell lebensbedrohliche Komplikation: <strong>Lungenarterienembolie</strong></li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Virchow-Trias:</strong> Stase, Endothelschaden, Hyperkoagulabilität</li>
<li><strong>Risikofaktoren:</strong> Immobilisation, OP (v.a. orthopädisch, abdominal), Malignom, orale Kontrazeptiva, Schwangerschaft, Thrombophilie, Adipositas, Alter, VTE in Vorgeschichte, lange Reisen</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Einseitige Beinschwellung</strong></li>
<li>Spannungsgefühl, Schwere</li>
<li>Schmerz (v.a. Wade)</li>
<li>Überwärmung, livide Verfärbung</li>
<li>Umfangsdifferenz (> 3 cm Wadenumfang Seitenvergleich)</li>
<li>Druckschmerz Wade (Mayer-Zeichen), Wadenschmerz bei Dorsalflexion (Homans-Zeichen – unspezifisch)</li>
<li>ggf. dilatierte Oberflächenvenen</li>
<li>ggf. Zeichen einer begleitenden LAE (Dyspnoe, Tachykardie, Thoraxschmerz)</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Phlegmasia coerulea dolens:</strong> Massive Becken-Bein-Venenthrombose mit vollständiger venöser Obstruktion → livide Schwellung, Schmerz, arterielle Kompromittierung → Notfall! Drohendes venöses Gangrän!</p></div>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Vitalparameter</li>
<li>1x venöser Zugang</li>
<li><strong>Klinische Wahrscheinlichkeit: Wells-Score TVT</strong>
<ul>
<li>≤ 1 Punkt: unwahrscheinlich → D-Dimere</li>
<li>≥ 2 Punkte: wahrscheinlich → Kompressionssonographie</li>
</ul>
</li>
<li><strong>D-Dimere:</strong> altersadaptiert (> 50 J.: Alter × 10 ng/ml). Negativ + geringe Wahrscheinlichkeit → TVT ausgeschlossen</li>
<li><strong>Kompressionssonographie (KUS):</strong> Goldstandard! Nicht-komprimierbare Vene = Thrombus</li>
</ul>
<h3>Erweiterte Diagnostik</h3>
<ul>
<li><strong>Labor:</strong> BB, CRP, NW, E'lyte, Gerinnung, ggf. Thrombophilie-Screening (nach Akutphase, nicht unter Antikoagulation)</li>
<li>Tumorsuche bei unprovozierter TVT (alters-/geschlechtsgerechte Vorsorge, CT Thorax/Abdomen erwägen)</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Antikoagulation (sofort bei hoher klinischer Wahrscheinlichkeit, noch vor Diagnosesicherung!)</h3>
<ul>
<li><strong>DOAK</strong> (Therapie der 1. Wahl):
<ul>
<li><strong>Rivaroxaban:</strong> 15 mg 2x/d für 21 Tage, dann 20 mg 1x/d</li>
<li><strong>Apixaban:</strong> 10 mg 2x/d für 7 Tage, dann 5 mg 2x/d</li>
</ul>
</li>
<li><strong>Alternativ:</strong> NMH (z.B. Enoxaparin 1 mg/kg 2x/d s.c.) → Übergang auf Edoxaban 60 mg 1x/d oder Dabigatran 150 mg 2x/d (nach mind. 5 Tagen NMH)</li>
<li><strong>Vitamin-K-Antagonisten:</strong> noch indiziert bei Antiphospholipid-Syndrom, mechanischer Herzklappe</li>
</ul>
<h3>Dauer der Antikoagulation</h3>
<ul>
<li>Provoziert (transient): 3 Monate</li>
<li>Unprovoziert: mindestens 3–6 Monate, dann Reevaluation (Langzeit-AC erwägen, Nutzen-Risiko)</li>
<li>Malignom: DOAK oder NMH, Dauer solange Risikofaktor besteht</li>
</ul>
<h3>Kompression</h3>
<ul>
<li>Kompressionstherapie zur Symptomlinderung, keine routinemäßige Empfehlung zur PTS-Prophylaxe mehr</li>
</ul>
<h3>Phlegmasia coerulea dolens</h3>
<ul>
<li>Notfall! Hochlagerung, sofortige Antikoagulation + kathetergestützte Thrombolyse/-ektomie, ggf. chirurgische Thrombektomie</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Wells-Score</strong> zur klinischen Einschätzung → D-Dimere oder direkt KUS</li>
<li><strong>Kompressionssonographie</strong> = Goldstandard</li>
<li><strong>DOAK = Therapie der 1. Wahl</strong></li>
<li>Antikoagulation sofort beginnen bei hoher klinischen Wahrscheinlichkeit!</li>
<li>Immer an <strong>begleitende LAE</strong> denken</li>
<li>Bei <strong>unprovozierter TVT</strong>: Tumorsuche erwägen</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Ambulant:</strong> unkomplizierte TVT, DOAK-Therapie, gute Compliance, Wiedervorstellung geplant</li>
<li><strong>Stationär:</strong> massive TVT, Phlegmasia, begleitende LAE, Nieren-/Leberinsuffizienz, Schwangerschaft, Blutungsrisiko, soziale Gründe</li>
</ul>`
}
],
        stand: "12/24",
        sources: `Konstantinides SV et al. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism. Eur Heart J. 2020;41(4):543-603.<br>Stevens SM et al. Antithrombotic Therapy for VTE Disease: Second Update of the CHEST Guideline. Chest. 2021;160(6):e545-e608.`
    });
})();
