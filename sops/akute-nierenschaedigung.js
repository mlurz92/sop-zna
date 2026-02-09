// SOP: Akute Nierenschädigung
// Kategorie: Nephrologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "akute-nierenschaedigung",
        title: "Akute Nierenschädigung",
        category: "Nephrologie",
        catKey: "nephro",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Akute Nierenschädigung (AKI, Acute Kidney Injury):</strong> Akuter Abfall der Nierenfunktion innerhalb von Stunden bis Tagen</li>
</ul>
<h3>KDIGO-Klassifikation</h3>
<div class="table-wrap"><table>
<thead><tr><th>Stadium</th><th>Serumkreatinin</th><th>Urinausscheidung</th></tr></thead>
<tbody>
<tr><td><strong>1</strong></td><td>Anstieg ≥ 0,3 mg/dl in 48h oder 1,5–1,9× Ausgangswert in 7d</td><td>< 0,5 ml/kg/h für 6–12h</td></tr>
<tr><td><strong>2</strong></td><td>2,0–2,9× Ausgangswert</td><td>< 0,5 ml/kg/h für ≥ 12h</td></tr>
<tr><td><strong>3</strong></td><td>≥ 3× Ausgangswert oder Kreatinin ≥ 4 mg/dl oder Dialyseindikation</td><td>< 0,3 ml/kg/h für ≥ 24h oder Anurie ≥ 12h</td></tr>
</tbody>
</table></div>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Prärenal (60–70%):</strong> Volumenmangel (Dehydratation, Blutung, Erbrechen/Diarrhoe), Herzinsuffizienz, Sepsis, Leberversagen, NSAR, ACE-Hemmer/Sartane, hepatorenales Syndrom</li>
<li><strong>Renal/Intrinsisch (25–30%):</strong>
<ul>
<li><strong>Akute Tubulusnekrose (ATN):</strong> Ischämisch (Schock, OP) oder toxisch (Aminoglykoside, Röntgen-KM, Myoglobin, Cisplatin)</li>
<li><strong>Akute interstitielle Nephritis:</strong> Medikamentös (NSAR, PPI, Antibiotika), autoimmun</li>
<li><strong>Glomerulonephritis:</strong> Rapid-progressive GN, Vaskulitis, Lupusnephritis</li>
<li><strong>Vaskuläre Ursachen:</strong> Nierenarterienthrombose, HUS/TTP, Cholesterinembolie</li>
</ul>
</li>
<li><strong>Postrenal (5–10%):</strong> Ureterobstruktion bds. (Steine, Tumor, retroperitoneale Fibrose), Blasenauslassobstruktion (BPH, Karzinom, Koagel), Harnleiterkompression</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li>Ggf. <strong>asymptomatisch</strong> (Zufallsbefund im Labor)</li>
<li><strong>Oligurie/Anurie</strong> (< 400 ml/24h bzw. < 100 ml/24h)</li>
<li>Zeichen der <strong>Überwässerung:</strong> Periphere Ödeme, Lungenödem, Dyspnoe</li>
<li>Zeichen der <strong>Urämie:</strong> Übelkeit, Erbrechen, Verwirrtheit, Pruritus, Perikardreiben</li>
<li><strong>Elektrolytstörungen:</strong> Hyperkaliämie (Herzrhythmusstörungen!), metabolische Azidose</li>
<li>Symptome der Grunderkrankung (Sepsis, Schock, Blutung, etc.)</li>
</ul>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1x venöser Zugang</li>
<li><strong>BGA</strong> (K⁺? pH? BE? Laktat?)</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte (Na⁺, K⁺, Ca²⁺, Phosphat), <strong>Kreatinin, Harnstoff</strong>, GOT, GPT, LDH, CK, Gerinnung, BNP/NT-proBNP</li>
<li><strong>Urin-Diagnostik:</strong> Urin-Status, Urin-Sediment, Urin-Na⁺, Urin-Kreatinin, <strong>Fraktionelle Na⁺-Exkretion (FENa)</strong></li>
<li>12-Kanal-EKG (Hyperkaliämie-Zeichen?)</li>
<li><strong>Bilanzierung:</strong> Ein-/Ausfuhr, Dauerkatheter zur Urinmengenmessung</li>
</ul>
<h3>Klinische Untersuchung</h3>
<ul>
<li><strong>Anamnese:</strong> Vorbekannte Nierenerkrankung? Ausgangswert Kreatinin? Medikamente (NSAR, ACE-I/ARB, Aminoglykoside, KM-Exposition)? Volumenstatus (Trinkmenge, Erbrechen, Diarrhoe, Blutung)? Urinmenge? Hämaturie?</li>
<li><strong>Körperliche Untersuchung:</strong> Volumenstatus (Dehydratation vs. Überwässerung)? Ödeme? Rasselgeräusche? Blasenhochstand? Hautveränderungen (Vaskulitis)?</li>
</ul>
<h3>Erweiterte Diagnostik</h3>
<ul>
<li><strong>Sonographie Nieren/Blase:</strong> Nierengröße? Harnstau (Hydronephrose)? Blasenfüllung? Restharn?</li>
<li>ggf. Immunologische Diagnostik bei V.a. Glomerulonephritis/Vaskulitis (ANA, ANCA, Anti-GBM, Komplement C3/C4)</li>
<li>ggf. Nierenbiopsie (nach nephrologischem Konsil)</li>
</ul>
<div class="callout callout-hinweis"><p><strong>Hinweis:</strong> <strong>FENa < 1%</strong> spricht für prärenale AKI, <strong>FENa > 2%</strong> für renale/intrinsische AKI (CAVE: verfälscht durch Diuretika – dann FE-Harnstoff verwenden).</p></div>`
},
{
title: "Therapie",
html: `<h3>Allgemeinmaßnahmen</h3>
<ul>
<li>Behandlung der <strong>Grundursache</strong> (wichtigste Maßnahme!)</li>
<li><strong>Nephrotoxische Medikamente absetzen/pausieren:</strong> NSAR, ACE-Hemmer, Sartane, Aminoglykoside, etc.</li>
<li>Dosisanpassung renal eliminierter Medikamente</li>
<li>Bilanzierung: Dauerkatheter, Ein-/Ausfuhr</li>
<li>12-Kanal-EKG-Monitoring bei Hyperkaliämie</li>
</ul>
<h3>Volumenmanagement</h3>
<ul>
<li><strong>Prärenale AKI:</strong> Volumensubstitution (Vollelektrolytlösung; Ziel: Euvolämie)</li>
<li><strong>Hypervolämie/Lungenödem:</strong> Diuretika (Furosemid i.v.), ggf. Ultrafiltration</li>
<li><strong>Postrenale AKI:</strong> Harnableitung (Dauerkatheter, Nephrostomie, Ureterschienung)</li>
</ul>
<h3>Behandlung von Komplikationen</h3>
<ul>
<li><strong>Hyperkaliämie:</strong> s. SOP Hyperkaliämie</li>
<li><strong>Metabolische Azidose:</strong> Natriumbikarbonat bei pH < 7,15–7,20 (Einzelfallentscheidung)</li>
<li><strong>Lungenödem:</strong> Furosemid, NIV, ggf. Hämodialyse</li>
</ul>
<h3>Dialyseindikation (Notfall)</h3>
<ul>
<li><strong>Therapierefraktäre Hyperkaliämie</strong></li>
<li><strong>Therapierefraktäre Überwässerung</strong> (Lungenödem)</li>
<li><strong>Schwere metabolische Azidose</strong> (pH < 7,1)</li>
<li><strong>Urämische Komplikationen</strong> (Enzephalopathie, Perikarditis)</li>
<li><strong>Dialysepflichtige Intoxikation</strong> (Methanol, Ethylenglykol, Lithium)</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Sonographie</strong> der Nieren/Blase bei jeder AKI – Harnstau (postrenale Ursache) muss sofort ausgeschlossen werden!</li>
<li>Häufigste Ursache: <strong>prärenal</strong> (Volumenmangel, Sepsis) – adäquate Volumengabe kann die Nierenfunktion oft rasch verbessern</li>
<li><strong>Nephrotoxische Medikamente sofort identifizieren und absetzen!</strong></li>
<li><strong>Hyperkaliämie</strong> ist die gefährlichste akute Komplikation – EKG-Veränderungen sind ein Notfall!</li>
<li>Frühzeitig <strong>nephrologisches Konsil</strong> bei unklarer Ätiologie, KDIGO-Stadium 3, V.a. Glomerulonephritis/Vaskulitis, Dialyseindikation</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> Dialyseindikation, therapierefraktäre Hyperkaliämie, Lungenödem, Schock, Oligurie/Anurie mit Komplikationen</li>
<li><strong>Überwachungsstation/Normalstation:</strong> AKI Stadium 1–2 mit Monitoring-Bedarf, i.v.-Therapie</li>
<li>Nephrologisches Konsil</li>
</ul>`
}
],
        stand: "12/24",
        sources: `KDIGO AKI Guideline. Kidney Int Suppl. 2012;2(1):1-138.<br>
Ronco C et al. Acute kidney injury. Lancet. 2019;394(10212):1949-1964.<br>
Zarbock A et al. Update on Perioperative Acute Kidney Injury. Anesth Analg. 2018;127(4):1236-1245.`
    });
})();
