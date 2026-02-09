// SOP: AECOPD
// Kategorie: Pneumologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "aecopd",
        title: "AECOPD",
        category: "Pneumologie",
        catKey: "pulmo",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>COPD:</strong> Chronisch obstruktive Lungenerkrankung mit persistierender Atemflusslimitation, die meist progredient verläuft und mit einer verstärkten chronischen Entzündungsreaktion der Atemwege assoziiert ist</li>
<li><strong>AECOPD (Akute Exazerbation der COPD):</strong> Akute Verschlechterung der respiratorischen Symptome über das übliche Maß der täglichen Variabilität hinaus, die eine Therapieeskalation erfordert</li>
</ul>
<div class="callout callout-hinweis"><p><strong>Hinweis:</strong> Die Einteilung der Exazerbationsschwere erfolgt nach GOLD 2024: leicht (ambulant behandelbar), moderat (systemische Steroide und/oder Antibiotika), schwer (Hospitalisierung oder Notaufnahmebesuch erforderlich).</p></div>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Infektiös (70–80%):</strong>
<ul>
<li><strong>Viral:</strong> Rhinoviren, Influenza, RSV, SARS-CoV-2, Parainfluenza</li>
<li><strong>Bakteriell:</strong> Haemophilus influenzae, Streptococcus pneumoniae, Moraxella catarrhalis, Pseudomonas aeruginosa (bei schwerer COPD, häufige Exazerbationen, Bronchiektasen)</li>
</ul>
</li>
<li><strong>Nicht-infektiös (20–30%):</strong>
<ul>
<li>Luftverschmutzung, Feinstaub, Temperaturänderungen</li>
<li>Non-Compliance mit Dauertherapie</li>
<li>Lungenarterienembolie</li>
<li>Pneumothorax</li>
<li>Kardiale Dekompensation</li>
</ul>
</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li>Zunehmende <strong>Dyspnoe</strong></li>
<li>Zunahme von <strong>Husten</strong> und <strong>Sputummenge/-purulenz</strong></li>
<li><strong>Tachypnoe</strong>, Einsatz der Atemhilfsmuskulatur</li>
<li><strong>Giemen</strong>, verlängertes Exspirium, abgeschwächtes Atemgeräusch</li>
<li>ggf. <strong>Zyanose</strong></li>
<li>ggf. <strong>Bewusstseinseintrübung</strong> (Zeichen der ventilatorischen Erschöpfung / CO₂-Narkose)</li>
<li>ggf. Zeichen der <strong>Rechtsherzbelastung</strong> (Halsvenenstauung, periphere Ödeme)</li>
</ul>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur)</li>
<li>1x venöser Zugang</li>
<li><strong>Arterielle BGA</strong> (pH? pCO₂? pO₂? Laktat? BE? – Hyperkapnie? Respiratorische Azidose?)</li>
<li><strong>Labor:</strong> BB, CRP, PCT, E'lyte, NW, GOT, GPT, BNP/NT-proBNP, Gerinnung, ggf. D-Dimere, hs-Troponin</li>
<li>12-Kanal-EKG (Rechtsherzbelastung? Arrhythmie? Ischämie?)</li>
</ul>
<h3>Klinische Untersuchung</h3>
<ul>
<li><strong>Anamnese:</strong> Symptombeginn/-dynamik? Sputumfarbe/-menge? Fieber? Vorbekannte COPD-Schwere (GOLD-Stadium, FEV1)? Sauerstoff-Langzeittherapie? Häusliche NIV? Vorherige Exazerbationen/Hospitalisierungen? Intubationen? Aktuelle Dauermedikation? Raucherstatus?</li>
<li><strong>Körperliche Untersuchung:</strong> Atemfrequenz? Einsatz der Atemhilfsmuskulatur? Lippenbremse? Giemen? Brummen? Abgeschwächtes AG? Silent Chest? Zyanose? Periphere Ödeme? Jugularvenenstauung?</li>
</ul>
<h3>Erweiterte Diagnostik (ggf.)</h3>
<ul>
<li><strong>Röntgen-Thorax:</strong> Infiltrat (Pneumonie)? Pneumothorax? Pleuraerguss? Stauung? Überblähung?</li>
<li><strong>CT-Thorax + KM (CT-Angiographie):</strong> bei V.a. Lungenarterienembolie, unklarem Infiltrat</li>
<li><strong>POCUS:</strong> Pleuraerguss? Pneumothorax? B-Linien (Stauung)? Rechtsherzbelastung?</li>
<li>Sputumkultur bei purulentem Sputum und häufigen Exazerbationen</li>
<li>Virologie (Influenza-/RSV-/COVID-19-Schnelltest)</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Allgemeinmaßnahmen</h3>
<ul>
<li>Stabilisierung gemäß ABCDE-Schema</li>
<li><strong>Sauerstoff:</strong> Ziel-SpO₂ 88–92% (CAVE: hyperkapnische Ateminsuffizienz bei unkontrollierter O₂-Gabe), kontrollierte O₂-Gabe über Venturi-Maske bevorzugt</li>
<li>Oberkörperhochlagerung, Kutschersitz</li>
</ul>
<h3>Medikamentöse Therapie</h3>
<ul>
<li><strong>Salbutamol</strong> 2,5–5 mg Vernebler alle 20 min (oder 4–8 Hübe über Spacer), ggf. als Dauerverneblung</li>
<li><strong>Ipratropiumbromid</strong> 0,5 mg Vernebler alle 20 min (oder 4 Hübe über Spacer)</li>
<li><strong>Prednisolon</strong> 40–50 mg p.o. oder i.v. 1x/d für 5 Tage (nicht länger)</li>
<li><strong>Magnesiumsulfat</strong> 1,2–2 g i.v. über 20 min bei schwerer Exazerbation (Einzelfallentscheidung)</li>
</ul>
<h3>Antibiotische Therapie</h3>
<p>Indikation: purulentes Sputum + Dyspnoe und/oder erhöhte Sputummenge, oder mechanische Beatmung</p>
<ul>
<li><strong>Amoxicillin/Clavulansäure</strong> 875/125 mg p.o. 2x/d für 5 Tage</li>
<li>Alternativ: <strong>Azithromycin</strong> 500 mg p.o. 1x/d für 3 Tage oder <strong>Levofloxacin</strong> 500 mg p.o. 1x/d für 5 Tage</li>
<li>Bei V.a. Pseudomonas (schwere COPD, Bronchiektasen, häufige AB-Therapien): <strong>Piperacillin/Tazobactam</strong> 4,5 g i.v. 3x/d oder Ciprofloxacin</li>
</ul>
<h3>Ventilatorische Unterstützung</h3>
<ul>
<li><strong>NIV (nicht-invasive Ventilation):</strong> Indikation bei respiratorischer Azidose (pH < 7,35 und pCO₂ > 45 mmHg) oder persistierender Dyspnoe trotz maximaler medikamentöser Therapie. Bevorzugt BiPAP/PSV-Modus</li>
<li><strong>Invasive Beatmung:</strong> bei NIV-Versagen, Bewusstlosigkeit, Kreislaufinstabilität, persistierender Hypoxämie trotz NIV</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Bei V.a. ventilatorische Erschöpfung (zunehmende Somnolenz, paradoxe Atmung, pH < 7,25) frühzeitig Intensivstation kontaktieren!</p></div>`
},
{
title: "Merke",
html: `<ul>
<li>Ziel-SpO₂ bei COPD-Patienten: <strong>88–92%</strong> – unkontrollierte Sauerstoffgabe kann die Hyperkapnie verschlechtern!</li>
<li>BGA ist die <strong>wichtigste Untersuchung</strong> zur Einschätzung der Exazerbationsschwere (pH und pCO₂)!</li>
<li>NIV ist die Therapie der Wahl bei hyperkapnischem Versagen mit Azidose – frühzeitig einsetzen!</li>
<li>Systemische Steroide für maximal <strong>5 Tage</strong> – eine längere Gabe bringt keinen zusätzlichen Nutzen</li>
<li>Antibiotika nur bei <strong>purulentem Sputum</strong> oder Beatmungspflichtigkeit</li>
<li>Differentialdiagnosen beachten: Pneumonie, LAE, Pneumothorax, kardiale Dekompensation</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> schwere Azidose (pH < 7,30), Bewusstseinseintrübung, Intubationspflichtigkeit, hämodynamische Instabilität</li>
<li><strong>Überwachungsstation/IMC:</strong> NIV-Pflichtigkeit, moderate Azidose</li>
<li><strong>Normalstation:</strong> stabile Patienten mit Notwendigkeit i.v.-Therapie oder O₂-Bedarf</li>
<li><strong>Ambulant:</strong> leichte Exazerbation, gute häusliche Versorgung, gesicherte Wiedervorstellung</li>
</ul>`
}
],
        stand: "12/24",
        sources: `GOLD 2024 Report. Global Strategy for the Diagnosis, Management, and Prevention of Chronic Obstructive Pulmonary Disease.<br>
Vogelmeier CF et al. S2k-Leitlinie zur Diagnostik und Therapie von Patienten mit COPD. AWMF-Register-Nr. 020-006, 2018.<br>
Wedzicha JA et al. Management of COPD exacerbations: a European Respiratory Society/American Thoracic Society guideline. Eur Respir J. 2017;49(3):1600791.`
    });
})();
