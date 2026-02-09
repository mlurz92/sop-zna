// SOP: Kopfschmerzen
// Kategorie: Leitsymptom
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "kopfschmerzen",
        title: "Kopfschmerzen",
        category: "Leitsymptom",
        catKey: "leit",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Primäre Kopfschmerzen:</strong> Eigenständige Erkrankung ohne strukturelle Ursache (Migräne, Spannungskopfschmerz, Clusterkopfschmerz)</li>
<li><strong>Sekundäre Kopfschmerzen:</strong> Symptom einer zugrundeliegenden Erkrankung (potenziell lebensbedrohlich!)</li>
</ul>`
},
{
title: "Ursachen",
html: `<h3>Red Flags – gefährliche sekundäre Ursachen</h3>
<ul>
<li><strong>Subarachnoidalblutung (SAB):</strong> Vernichtungskopfschmerz (Thunderclap Headache)</li>
<li><strong>Meningitis/Enzephalitis:</strong> Fieber + Meningismus</li>
<li><strong>Intrakranielle Blutung</strong> (ICB, SDH, EDH)</li>
<li><strong>Zerebrale Venen-/Sinusthrombose (CVST)</strong></li>
<li><strong>Hirntumor / Hirnmetastasen</strong></li>
<li><strong>Arteriitis temporalis (Riesenzellarteriitis)</strong></li>
<li><strong>Hypertensiver Notfall</strong></li>
<li><strong>Akuter Winkelblockglaukom</strong></li>
<li><strong>Dissektion der A. carotis/vertebralis</strong></li>
<li><strong>Idiopathische intrakranielle Hypertension (Pseudotumor cerebri)</strong></li>
<li><strong>CO-Intoxikation</strong></li>
</ul>
<h3>Häufige primäre Kopfschmerzen</h3>
<ul>
<li><strong>Migräne:</strong> episodisch, pulsierend, einseitig, Übelkeit, Photo-/Phonophobie, ggf. Aura</li>
<li><strong>Spannungskopfschmerz:</strong> bilateral, drückend-ziehend, holozephal</li>
<li><strong>Clusterkopfschmerz:</strong> streng einseitig, periorbitär, heftigst, autonome Begleitsymptome (Lakrimation, Rhinorrhoe, Miosis/Ptosis)</li>
</ul>`
},
{
title: "Symptome",
html: `<h3>Red Flags (SNOOP)</h3>
<ul>
<li><strong>S</strong>ystemic symptoms (Fieber, Gewichtsverlust, Malignom, HIV)</li>
<li><strong>N</strong>eurological symptoms (Fokalneurologie, Krampfanfall, Bewusstseinseintrübung)</li>
<li><strong>O</strong>nset: Thunderclap/sudden (perakut/Vernichtungskopfschmerz)</li>
<li><strong>O</strong>lder: Erstmanifestation > 50 Jahre (Arteriitis temporalis!)</li>
<li><strong>P</strong>attern change (neue Qualität, zunehmende Frequenz/Intensität, Änderung bekannter KS)</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Vernichtungskopfschmerz</strong> (Thunderclap Headache) = SAB bis zum Beweis des Gegenteils! cCT nativ → bei negativem cCT: Lumbalpunktion!</p></div>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter (RR! Fieber!)</li>
<li>1x venöser Zugang</li>
<li><strong>Labor:</strong> BB, CRP, BSG (Arteriitis temporalis!), E'lyte, NW, Gerinnung, ggf. D-Dimere, CO-Hb (BGA)</li>
</ul>
<h3>Klinische Untersuchung</h3>
<ul>
<li><strong>Anamnese:</strong> Beginn (perakut, akut, chronisch)? Qualität? Lokalisation? Intensität (0–10)? Begleitsymptome (Übelkeit, Aura, Fieber, Sehstörung, fokal-neurologisch)? Vorherige KS? Medikamente? Trauma? Malignom? Schwangerschaft? Antikoagulation?</li>
<li><strong>Körperliche Untersuchung:</strong> RR? Fieber? Meningismus? GCS? Pupillen? Fokal-neurologisches Defizit? Fundoskopie (Stauungspapille)? Druckschmerzhafte A. temporalis?</li>
</ul>
<h3>Erweiterte Diagnostik (bei Red Flags)</h3>
<ul>
<li><strong>cCT nativ:</strong> bei V.a. SAB, ICB, Raumforderung (Sensitivität für SAB: > 98% in den ersten 6h, danach abnehmend)</li>
<li><strong>Lumbalpunktion:</strong> bei V.a. SAB und negativem cCT (Xanthochromie? Siderophagen?), bei V.a. Meningitis</li>
<li><strong>CT-/MR-Angiographie:</strong> bei V.a. Aneurysma, Dissektion, CVST</li>
<li><strong>cMRT + KM-Venographie:</strong> bei V.a. CVST</li>
<li><strong>Duplexsonographie A. temporalis:</strong> Halo-Zeichen bei Arteriitis temporalis</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Sekundäre Kopfschmerzen</h3>
<ul>
<li>Therapie der Grunderkrankung (s. jeweilige SOP)</li>
</ul>
<h3>Migräne-Akuttherapie</h3>
<ul>
<li><strong>Leicht/moderat:</strong> NSAR (Ibuprofen 400–600 mg, ASS 1000 mg, Naproxen 500–1000 mg) ± MCP 10 mg oder Domperidon 10 mg</li>
<li><strong>Schwer:</strong> Triptane (z.B. Sumatriptan 50–100 mg p.o. oder 6 mg s.c., Rizatriptan 10 mg)</li>
<li><strong>Notfall:</strong> ASS 1000 mg i.v. + MCP 10 mg i.v., ggf. Sumatriptan 6 mg s.c.</li>
</ul>
<h3>Spannungskopfschmerz</h3>
<ul>
<li>Ibuprofen 400 mg, ASS 1000 mg, Paracetamol 1000 mg</li>
</ul>
<h3>Clusterkopfschmerz-Akuttherapie</h3>
<ul>
<li><strong>O₂-Inhalation</strong> 12–15 l/min über Non-Rebreather-Maske für 15–20 min</li>
<li><strong>Sumatriptan</strong> 6 mg s.c. oder Zolmitriptan 5 mg nasal</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Red Flags systematisch abfragen</strong> (SNOOP)!</li>
<li><strong>Vernichtungskopfschmerz = SAB bis zum Beweis des Gegenteils</strong> → cCT → LP</li>
<li>Erstmanifestation KS > 50 Jahre → an <strong>Arteriitis temporalis</strong> denken (BSG!)</li>
<li><strong>Fieber + Kopfschmerz + Meningismus</strong> → an Meningitis denken → sofort Antibiotika</li>
<li>Kopfschmerzen bei <strong>Schwangeren/Wochenbett</strong>: an CVST, Eklampsie, PRES denken</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Stationär/Intensiv:</strong> alle sekundären Kopfschmerzen mit gefährlicher Ursache</li>
<li><strong>Ambulant:</strong> primäre Kopfschmerzen nach Ausschluss von Red Flags</li>
</ul>`
}
],
        stand: "12/24",
        sources: `Do TP et al. Red and orange flags for secondary headaches in clinical practice: SNNOOP10 list. Neurology. 2019;92(3):134-144.<br>Diener HC et al. S1-Leitlinie Therapie der Migräneattacke und Prophylaxe der Migräne. AWMF-Register-Nr. 030-057, 2022.<br>Headache Classification Committee of the IHS. The International Classification of Headache Disorders, 3rd edition. Cephalalgia. 2018;38(1):1-211.`
    });
})();
