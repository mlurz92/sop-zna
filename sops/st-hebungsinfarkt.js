// SOP: ST-Hebungsinfarkt (STEMI)
// Kategorie: Kardiologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "st-hebungsinfarkt",
        title: "ST-Hebungsinfarkt (STEMI)",
        category: "Kardiologie",
        catKey: "kardio",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>STEMI (ST-Elevation Myocardial Infarction):</strong> Akuter Myokardinfarkt durch vollständigen thrombotischen Verschluss einer Koronararterie mit <strong>persistierenden ST-Hebungen</strong> im 12-Kanal-EKG</li>
</ul>
<h3>EKG-Kriterien (ESC 2023)</h3>
<ul>
<li><strong>ST-Hebung in ≥ 2 zusammenhängenden Ableitungen:</strong>
<ul>
<li>≥ 2,5 mm in V2–V3 bei Männern < 40 J.</li>
<li>≥ 2,0 mm in V2–V3 bei Männern ≥ 40 J.</li>
<li>≥ 1,5 mm in V2–V3 bei Frauen</li>
<li>≥ 1,0 mm in allen anderen Ableitungen</li>
</ul>
</li>
<li><strong>Neuer Linksschenkelblock (LSB) oder Rechtsschenkelblock (RSB)</strong> mit typischer Klinik</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Atherothrombose:</strong> Plaqueruptur/-erosion mit okklusiver Thrombose einer Koronararterie (häufigste Ursache)</li>
<li>Koronarspasmus (Prinzmetal)</li>
<li>Spontane Koronardissektion (SCAD)</li>
<li>Koronarembolie (Vorhofflimmern, Endokarditis)</li>
<li>Takotsubo-Syndrom (kann STEMI-Kriterien imitieren)</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Akuter, schwerer Thoraxschmerz</strong> (retrosternal, drückend/engend, Dauer > 20 min, kein Ansprechen auf Nitro)</li>
<li>Ausstrahlung in linken Arm, Kiefer, Rücken, Epigastrium</li>
<li><strong>Vernichtungsgefühl</strong>, Todesangst</li>
<li>Kaltschweißigkeit, Blässe</li>
<li>Dyspnoe</li>
<li>Übelkeit, Erbrechen</li>
<li>ggf. Synkope</li>
<li>ggf. Zeichen des <strong>kardiogenen Schocks</strong></li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Atypische Präsentation</strong> bei Frauen, Diabetikern, älteren Patienten! Dyspnoe, Übelkeit, Oberbauchschmerz können führend sein. <strong>EKG innerhalb von 10 min!</strong></p></div>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1–2x venöser Zugang</li>
<li><strong>12-Kanal-EKG innerhalb von 10 min!</strong> (ST-Hebungen? LSB/RSB? Spiegelbild-ST-Senkungen?)</li>
<li>Rechtspräkordiale Ableitungen (V3R, V4R) bei Hinterwandinfarkt (II, III, aVF) → RV-Infarkt?</li>
<li><strong>hs-Troponin</strong> (abnehmen, aber NICHT auf Ergebnis warten → sofortige Reperfusion!)</li>
<li><strong>Labor:</strong> BB, E'lyte, NW, Gerinnung, BZ, Laktat</li>
<li>BGA</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Beim STEMI bestimmt das <strong>EKG</strong> die Diagnose und Therapieentscheidung – <strong>NICHT auf Troponin warten!</strong> Sofortige Aktivierung des Herzkatheterlabors!</p></div>`
},
{
title: "Therapie",
html: `<h3>Sofortmaßnahmen</h3>
<ul>
<li><strong>Herzkatheteraktivierung SOFORT</strong> (Contact-to-Wire-Time < 90 min, bei Transfer < 120 min)</li>
<li><strong>ASS</strong> 250 mg i.v. (Loading Dose)</li>
<li><strong>P2Y12-Inhibitor:</strong> Ticagrelor 180 mg p.o. oder Prasugrel 60 mg p.o. (CAVE: Prasugrel nicht bei Z.n. Stroke/TIA, Alter > 75J, Gewicht < 60 kg)</li>
<li><strong>Heparin:</strong> UFH 70–100 IE/kg i.v. Bolus (max. 5000 IE) bei PCI</li>
<li><strong>Nitroglycerin</strong> 0,4 mg s.l. (nicht bei RR syst. < 90, RV-Infarkt, PDE-5-Hemmer)</li>
<li><strong>Morphin</strong> 2–5 mg i.v. bei Schmerzen (zurückhaltend, CAVE: Übelkeit, Hypotonie)</li>
<li><strong>Sauerstoff</strong> nur bei SpO₂ < 90%</li>
<li>Monitoring: EKG, RR, SpO₂</li>
</ul>
<h3>Primäre PCI (pPCI) – Therapie der 1. Wahl!</h3>
<ul>
<li><strong>Koronarangiographie + PCI</strong> der Infarktarterie so schnell wie möglich</li>
<li>Ziel: <strong>Door-to-Balloon ≤ 60 min</strong> (im PCI-Zentrum) bzw. <strong>≤ 90–120 min</strong> bei Transfer</li>
</ul>
<h3>Fibrinolyse (nur wenn pPCI nicht innerhalb von 120 min möglich!)</h3>
<ul>
<li><strong>Tenecteplase</strong> gewichtsadaptiert i.v. Bolus</li>
<li>Innerhalb von <strong>12h</strong> nach Symptombeginn, idealerweise < 10 min nach STEMI-Diagnose</li>
<li>Nach Fibrinolyse: Transfer zur Koronarangiographie innerhalb von 2–24h</li>
</ul>
<h3>Begleittherapie</h3>
<ul>
<li>Betablocker p.o. (nicht bei Schock, Bradykardie, AV-Block)</li>
<li>ACE-Hemmer/ARB innerhalb von 24h (bei LVEF ↓, Herzinsuffizienz)</li>
<li>Statin hochdosiert (Atorvastatin 80 mg)</li>
</ul>
<h3>Bei kardiogenem Schock</h3>
<ul>
<li>Sofortige PCI + hämodynamische Unterstützung (Noradrenalin, Dobutamin, ggf. Impella/IABP, VA-ECMO)</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Time is Muscle!</strong> Jede Minute zählt. Ziel: Contact-to-Wire < 90 min</li>
<li><strong>EKG innerhalb von 10 min</strong> → STEMI-Diagnose → sofortige HKL-Aktivierung</li>
<li><strong>Nicht auf Troponin warten!</strong></li>
<li>Primäre PCI ist die Therapie der 1. Wahl</li>
<li>Fibrinolyse nur wenn PCI nicht zeitgerecht möglich</li>
<li>An <strong>RV-Infarkt</strong> denken bei Hinterwand-STEMI (V3R/V4R ableiten!) → keine Nitrate, vorsichtige Volumengabe</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Herzkatheterlabor</strong> → danach Coronary Care Unit / Intensivstation</li>
</ul>`
}
],
        stand: "12/24",
        sources: `Byrne RA et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J. 2023;44(38):3720-3826.<br>Ibanez B et al. 2017 ESC Guidelines for the management of acute myocardial infarction in patients presenting with ST-segment elevation. Eur Heart J. 2018;39(2):119-177.`
    });
})();
