// SOP: Akute Pankreatitis
// Kategorie: Gastroenterologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "akute-pankreatitis",
        title: "Akute Pankreatitis",
        category: "Gastroenterologie",
        catKey: "gi",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Akute Pankreatitis:</strong> Akute Entzündung des Pankreas mit lokalen und ggf. systemischen Komplikationen. Diagnosestellung durch ≥ 2 von 3 Kriterien:
<ul>
<li>Typische abdominelle Schmerzen (gürtelförmiger Oberbauchschmerz)</li>
<li>Lipase ≥ 3× oberer Normwert</li>
<li>Typische Bildgebungsbefunde (CT/MRT/Sonographie)</li>
</ul>
</li>
</ul>
<h3>Schweregrade (Revidierte Atlanta-Klassifikation)</h3>
<div class="table-wrap"><table>
<thead><tr><th>Schweregrad</th><th>Definition</th></tr></thead>
<tbody>
<tr><td><strong>Mild</strong></td><td>Keine Organinsuffizienz, keine lokalen Komplikationen</td></tr>
<tr><td><strong>Moderat schwer</strong></td><td>Transiente Organinsuffizienz (< 48h) und/oder lokale Komplikationen</td></tr>
<tr><td><strong>Schwer</strong></td><td>Persistierende Organinsuffizienz (> 48h)</td></tr>
</tbody>
</table></div>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Gallensteine (40–50%):</strong> Häufigste Ursache (biliäre Pankreatitis)</li>
<li><strong>Alkohol (25–35%):</strong> Zweithäufigste Ursache</li>
<li><strong>Hypertriglyzeridämie (> 1000 mg/dl)</strong></li>
<li><strong>Post-ERCP</strong></li>
<li><strong>Medikamente:</strong> Azathioprin, Valproat, Mesalazin, etc.</li>
<li><strong>Autoimmun</strong></li>
<li><strong>Sonstige:</strong> Hyperkalzämie, Pankreas divisum, Trauma, Tumor, Infektion (Mumps), hereditär, idiopathisch (10–15%)</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Akuter gürtelförmiger Oberbauchschmerz</strong> mit Ausstrahlung in den Rücken</li>
<li><strong>Übelkeit, Erbrechen</strong></li>
<li><strong>Druckschmerzhaftes Abdomen</strong> (Gummibauch), ggf. Abwehrspannung</li>
<li>Fieber</li>
<li>Tachykardie, ggf. Hypotonie (Volumenverlust ins Retroperitoneum)</li>
<li>ggf. <strong>Ikterus</strong> (bei biliärer Pankreatitis mit Choledocholithiasis)</li>
<li>ggf. Zeichen der Organdysfunktion (Dyspnoe, Oligurie, Verwirrtheit) bei schwerem Verlauf</li>
</ul>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1–2x venöser Zugang</li>
<li><strong>BGA</strong> (Laktat? Glukose? Ca²⁺?)</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte (Ca²⁺!), NW, GOT, GPT, AP, γ-GT, Bilirubin, <strong>Lipase</strong> (≥ 3× oberer Normwert), LDH, Triglyzeride, Gerinnung, ggf. PCT</li>
<li>Urin-Status</li>
</ul>
<h3>Klinische Untersuchung</h3>
<ul>
<li><strong>Anamnese:</strong> Schmerzbeginn/-charakter/-ausstrahlung? Alkoholanamnese? Gallensteinanamnese? Medikamente? Vorherige Pankreatitiden? ERCP in letzter Zeit?</li>
<li><strong>Körperliche Untersuchung:</strong> Epigastrischer Druckschmerz? Gummibauch? Abwehrspannung? Ikterus? Grey-Turner-Zeichen (Flankenekchymose)? Cullen-Zeichen (periumbilikale Ekchymose)?</li>
</ul>
<h3>Bildgebung</h3>
<ul>
<li><strong>Abdomen-Sonographie:</strong> Cholezystolithiasis? Choledocholithiasis? Gallengangerweiterung? Pankreasödem? Freie Flüssigkeit?</li>
<li><strong>CT-Abdomen mit KM:</strong> Nicht routinemäßig initial indiziert! Indiziert bei: unklarer Diagnose, fehlender Besserung nach 48–72h, V.a. Nekrose/Komplikation</li>
<li>ggf. MRCP/EUS (bei V.a. Choledocholithiasis ohne eindeutigen Sonographiebefund)</li>
</ul>
<div class="callout callout-hinweis"><p><strong>Hinweis:</strong> Die <strong>Lipase</strong> ist sensitiver und spezifischer als die Amylase. Ein Normwert schließt eine Pankreatitis nicht aus bei späterer Präsentation (Lipase kann bereits wieder abgefallen sein).</p></div>`
},
{
title: "Therapie",
html: `<h3>Allgemeinmaßnahmen</h3>
<ul>
<li><strong>Aggressive Volumentherapie:</strong> Vollelektrolytlösung (Ringer-Laktat bevorzugt) 1,5 ml/kg/h in den ersten 24h, Reevaluation alle 6h (Ziel: Urinproduktion ≥ 0,5 ml/kg/h)</li>
<li><strong>Analgesie:</strong> Metamizol 1 g i.v., Paracetamol 1 g i.v., ggf. Piritramid/Morphin i.v. titrierend bei starken Schmerzen (Opioide sind NICHT kontraindiziert!)</li>
<li><strong>Antiemese:</strong> Ondansetron 4 mg i.v.</li>
<li><strong>Frühzeitige enterale Ernährung:</strong> Orale Nahrungsaufnahme so bald wie toleriert (keine prolongierte Nahrungskarenz!), bei Intoleranz: nasojejunale Sonde</li>
</ul>
<h3>Spezifische Therapie</h3>
<ul>
<li><strong>Biliäre Pankreatitis + Cholangitis oder persistierender Gallengansverschluss:</strong> ERCP innerhalb von 24h</li>
<li><strong>Biliäre Pankreatitis ohne Cholangitis:</strong> ERCP nicht routinemäßig indiziert; Cholezystektomie im selben Aufenthalt (bei milder Pankreatitis) oder im Intervall</li>
<li><strong>Infizierte Nekrose:</strong> Antibiotika (Meropenem 1 g 3x/d i.v.), minimalinvasive Nekrosektomie (Step-up-Approach)</li>
<li><strong>Keine prophylaktischen Antibiotika</strong> bei steriler Nekrose!</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Aggressive Volumengabe ist essenziell in den ersten 24h! Unzureichende Flüssigkeitszufuhr verschlechtert die Prognose signifikant.</p></div>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Lipase ≥ 3× ULN + typische Schmerzen</strong> = Diagnose – keine CT nötig zur Diagnosestellung!</li>
<li><strong>Volumengabe, Analgesie, frühzeitige Ernährung</strong> = Eckpfeiler der Therapie</li>
<li>Bei biliärer Pankreatitis mit Cholangitis: <strong>ERCP innerhalb von 24h</strong></li>
<li>CT-Abdomen erst nach 48–72h bei V.a. Komplikation (Nekrose, Abszess) – nicht initial!</li>
<li>Keine prophylaktischen Antibiotika bei steriler Nekrose</li>
<li><strong>Opioide sind nicht kontraindiziert</strong> – adäquate Schmerztherapie sicherstellen!</li>
<li>Cholezystektomie bei biliärer Pankreatitis möglichst <strong>im selben stationären Aufenthalt</strong> (bei milder Pankreatitis)</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> schwere Pankreatitis mit Organdysfunktion (Schock, resp. Insuffizienz, AKI)</li>
<li><strong>Überwachungsstation/IMC:</strong> moderat schwere Pankreatitis, engmaschiges Monitoring</li>
<li><strong>Normalstation:</strong> milde Pankreatitis</li>
</ul>`
}
],
        stand: "12/24",
        sources: `Boxhoorn L et al. Acute pancreatitis. Lancet. 2020;396(10252):726-734.<br>
Leppäniemi A et al. 2019 WSES guidelines for the management of severe acute pancreatitis. World J Emerg Surg. 2019;14:27.<br>
Beyer G et al. S3-Leitlinie Pankreatitis. AWMF-Register-Nr. 021-003, 2022.`
    });
})();
