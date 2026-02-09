// SOP: Thrombozytopenie
// Kategorie: Hämatologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "thrombozytopenie",
        title: "Thrombozytopenie",
        category: "Hämatologie",
        catKey: "haem",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Thrombozytopenie:</strong> Thrombozyten < 150.000/µl</li>
</ul>
<div class="table-wrap"><table>
<thead><tr><th>Schweregrad</th><th>Thrombozyten</th><th>Blutungsrisiko</th></tr></thead>
<tbody>
<tr><td>Mild</td><td>100.000–150.000/µl</td><td>Gering</td></tr>
<tr><td>Moderat</td><td>50.000–100.000/µl</td><td>Moderat bei Trauma/OP</td></tr>
<tr><td>Schwer</td><td>20.000–50.000/µl</td><td>Erhöht</td></tr>
<tr><td>Kritisch</td><td>< 20.000/µl</td><td>Spontanblutungen möglich</td></tr>
</tbody>
</table></div>`
},
{
title: "Ursachen",
html: `<h3>Verminderte Produktion</h3>
<ul>
<li>Knochenmarkserkrankungen (Leukämie, MDS, Aplastische Anämie, Myelofibrose)</li>
<li>Knochenmarksinfiltration (Metastasen, Lymphom)</li>
<li>Chemotherapie, Bestrahlung</li>
<li>Virusinfektionen (HIV, HCV, EBV, CMV, Parvovirus B19)</li>
<li>Alkohol (toxisch + Folsäuremangel)</li>
<li>Vitamin-B12-/Folsäuremangel</li>
</ul>
<h3>Gesteigerter Verbrauch/Abbau</h3>
<ul>
<li><strong>Immunthrombozytopenie (ITP)</strong></li>
<li><strong>TTP</strong> (Thrombotisch-thrombozytopenische Purpura) – Notfall!</li>
<li><strong>HUS</strong> (Hämolytisch-urämisches Syndrom)</li>
<li><strong>DIC</strong> (Disseminierte intravasale Gerinnung)</li>
<li><strong>HIT</strong> (Heparininduzierte Thrombozytopenie Typ II)</li>
<li>Sepsis</li>
<li>Medikamentös (zahlreiche Medikamente!)</li>
<li>Massive Blutung/Massivtransfusion</li>
</ul>
<h3>Verteilungsstörung</h3>
<ul>
<li>Hypersplenismus (Leberzirrhose, portale Hypertension)</li>
</ul>
<h3>Pseudothrombozytopenie</h3>
<ul>
<li>EDTA-induzierte Thrombozytenaggregation (Citratblut nachfordern!)</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li>Petechien (v.a. Unterschenkel, Druckstellen)</li>
<li>Purpura</li>
<li>Epistaxis, Zahnfleischbluten</li>
<li>Menorrhagie</li>
<li>GI-Blutung</li>
<li>Hämaturie</li>
<li>ggf. intrakranielle Blutung (bei schwerer Thrombozytopenie)</li>
</ul>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1x venöser Zugang</li>
<li><strong>Labor:</strong> BB + <strong>Differentialblutbild</strong>, Retikulozyten, <strong>Blutausstrich</strong>, CRP, E'lyte, NW, GOT, GPT, LDH, Haptoglobin, Bilirubin (Hämolysezeichen?), Gerinnung (INR, aPTT, Fibrinogen, D-Dimere → DIC?), Vitamin B12, Folsäure</li>
<li>Bei V.a. TTP: <strong>ADAMTS13-Aktivität</strong> (SOFORT abnehmen!)</li>
<li>Bei V.a. HIT: <strong>4T-Score</strong>, PF4/Heparin-AK, funktioneller HIT-Test</li>
<li><strong>Citratblut</strong> zur Ausschluss Pseudothrombozytopenie</li>
<li>Medikamentenanamnese!</li>
<li>ggf. Knochenmarkspunktion (bei unklarer Ursache, V.a. Knochenmarkserkrankung)</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>TTP-Pentade:</strong> Thrombozytopenie + mikroangiopathische hämolytische Anämie (Fragmentozyten!) + Fieber + Nierenbeteiligung + neurologische Symptome → <strong>ADAMTS13 sofort!</strong> Plasmaseparation ohne Ergebnis abzuwarten beginnen!</p></div>`
},
{
title: "Therapie",
html: `<ul>
<li><strong>Therapie der Grunderkrankung!</strong></li>
<li><strong>Thrombozytentransfusion:</strong>
<ul>
<li>Indikation: Thrombo < 10.000/µl (prophylaktisch), < 50.000 bei aktiver Blutung/OP, < 100.000 bei ZNS-Blutung/neurochirurgischer OP</li>
<li><strong>KONTRAINDIZIERT</strong> bei TTP, HIT, HUS! (Verschlechterung!)</li>
</ul>
</li>
<li><strong>ITP:</strong> Prednisolon 1 mg/kg/d, ggf. IVIG 1 g/kg/d × 2 Tage (bei schwerer Blutung)</li>
<li><strong>TTP:</strong> Sofortige Plasmapherese, Steroide, Caplacizumab</li>
<li><strong>HIT:</strong> Heparin sofort absetzen, Antikoagulation mit Argatroban oder Fondaparinux</li>
<li><strong>DIC:</strong> Grunderkrankung behandeln, supportiv (FFP, Fibrinogen, Thrombozyten bei Blutung)</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Pseudothrombozytopenie ausschließen</strong> (Citratblut!)</li>
<li><strong>Blutausstrich</strong> → Fragmentozyten? (TTP/HUS/DIC)</li>
<li>Bei V.a. <strong>TTP: ADAMTS13 sofort, Plasmaseparation nicht verzögern!</strong></li>
<li><strong>Thrombozyten NICHT transfundieren</strong> bei TTP, HIT, HUS!</li>
<li>Medikamenten-induzierte Thrombozytopenie ist häufig → Medikamentenanamnese!</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> TTP (Plasmapherese), schwere Blutung, DIC</li>
<li><strong>Stationär:</strong> schwere Thrombozytopenie (< 20.000), aktive Blutung, neue Diagnose mit Abklärungsbedarf</li>
<li><strong>Ambulant:</strong> milde/moderate Thrombozytopenie, keine Blutung, bekannte stabile ITP</li>
</ul>`
}
],
        stand: "12/24",
        sources: `Neunert C et al. ASH 2019 Guidelines for Immune Thrombocytopenia. Blood Adv. 2019;3(23):3829-3866.<br>Provan D et al. Updated international consensus report on the investigation and management of primary immune thrombocytopenia. Blood Adv. 2019;3(22):3780-3817.`
    });
})();
