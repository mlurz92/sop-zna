const SOP_DATA_3 = [
{
id: "ikterus",
title: "Ikterus",
category: "Gastroenterologie",
catKey: "gi",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Ikterus:</strong> Gelbfärbung von Haut, Skleren und Schleimhäuten durch Erhöhung des Serumbilirubins &gt; 2 mg/dl (34 µmol/l)</li>
<li><strong>Subikterus:</strong> Gelbfärbung der Skleren ab Bilirubin &gt; 1,5 mg/dl</li>
</ul>
<h3>Einteilung</h3>
<ul>
<li><strong>Prähepatisch:</strong> Hämolyse (indirektes Bilirubin ↑)</li>
<li><strong>Intrahepatisch (hepatozellulär):</strong> Hepatitis, Leberzirrhose, medikamentös-toxisch (direktes + indirektes Bilirubin ↑)</li>
<li><strong>Posthepatisch (cholestatisch/obstruktiv):</strong> Choledocholithiasis, Pankreaskopf-Ca, Cholangitis (direktes Bilirubin ↑)</li>
</ul>`
},
{
title: "Ursachen",
html: `<h3>Prähepatisch (Hämolyse)</h3>
<ul>
<li>Autoimmunhämolytische Anämie</li>
<li>Hämoglobinopathien (Sichelzellanämie, Thalassämie)</li>
<li>Mechanische Hämolyse (Herzklappenprothese, HUS, TTP)</li>
<li>Transfusionsreaktion</li>
<li>Ineffektive Erythropoese</li>
<li>Morbus Gilbert (harmlos, häufig!)</li>
</ul>
<h3>Intrahepatisch</h3>
<ul>
<li>Virushepatitis (A, B, C, E)</li>
<li>Alkoholische Hepatitis/Zirrhose</li>
<li>Medikamentös-toxisch (Paracetamol, Isoniazid, Statine, Phytotherapeutika)</li>
<li>Autoimmunhepatitis</li>
<li>Stauungsleber (Rechtsherzinsuffizienz)</li>
<li>Schwangerschaftsspezifisch (HELLP, akute Schwangerschaftsfettleber)</li>
<li>Morbus Wilson, Hämochromatose</li>
<li>Infiltrativ (Metastasen, Lymphom, Amyloidose)</li>
</ul>
<h3>Posthepatisch (obstruktiv)</h3>
<ul>
<li>Choledocholithiasis</li>
<li>Pankreaskopfkarzinom</li>
<li>Cholangiozelluläres Karzinom (Klatskin-Tumor)</li>
<li>Papillenkarzinom</li>
<li>Primär sklerosierende Cholangitis</li>
<li>Pankreatitis (Kompression)</li>
<li>Gallengangsstrikturen</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Gelbfärbung</strong> der Skleren, Haut, Schleimhäute</li>
<li>ggf. <strong>Pruritus</strong> (v.a. bei cholestatischem Ikterus)</li>
<li>ggf. <strong>Acholischer Stuhl</strong> (hell/entfärbt, bei Obstruktion)</li>
<li>ggf. <strong>Dunkler Urin</strong> (Bilirubinurie, bei konjugierter Hyperbilirubinämie)</li>
<li>ggf. <strong>Oberbauchschmerzen</strong> (Cholezystitis, Choledocholithiasis, Pankreatitis)</li>
<li>ggf. <strong>Fieber, Schüttelfrost</strong> (Cholangitis!)</li>
<li>ggf. <strong>Gewichtsverlust</strong> (Malignom)</li>
<li>ggf. <strong>Zeichen der Leberzirrhose</strong> (Spider Naevi, Palmarerythem, Aszites, Caput medusae, Gynäkomastie)</li>
<li>ggf. <strong>Courvoisier-Zeichen</strong> (schmerzlose, palpable Gallenblase bei Pankreaskopf-Ca)</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Charcot-Trias</strong> (Ikterus + Fieber/Schüttelfrost + rechtsseitiger Oberbauchschmerz) = <strong>akute Cholangitis</strong> → Notfall!</p></div>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1x venöser Zugang</li>
<li><strong>Labor:</strong> BB, CRP, <strong>Bilirubin (gesamt + direkt)</strong>, GOT, GPT, AP, γ-GT, LDH, Albumin, Gerinnung (INR, Quick), Lipase, NW, E'lyte</li>
<li><strong>Differenzierung:</strong>
<ul>
<li>Indirektes Bilirubin ↑ → Hämolyse, Morbus Gilbert</li>
<li>Direktes Bilirubin ↑ → hepatozellulär oder obstruktiv</li>
</ul>
</li>
</ul>
<h3>Klinische Untersuchung</h3>
<ul>
<li><strong>Anamnese:</strong> Ikterus seit wann? Schmerzen? Fieber? Stuhlfarbe? Urinfarbe? Pruritus? Alkohol? Medikamente? Auslandsreisen? Bluttransfusionen? Vorerkrankungen? Gewichtsverlust?</li>
<li><strong>Körperliche Untersuchung:</strong> Ikterus? Hepatomegalie? Splenomegalie? Aszites? Murphy-Zeichen? Courvoisier-Zeichen? Leberzirrhose-Stigmata? Lymphadenopathie?</li>
</ul>
<h3>Erweiterte Diagnostik</h3>
<ul>
<li><strong>Abdomensonographie</strong> (1. Bildgebung!): Gallenblase? Gallenwege erweitert? Choledocholithiasis? Leberparenchym? Pankreaskopf? Aszites?</li>
<li><strong>Hämolyse-Diagnostik:</strong> LDH↑, Haptoglobin↓, Retikulozyten↑, indirektes Bilirubin↑, Coombs-Test</li>
<li><strong>Virusserologie:</strong> Hepatitis A (Anti-HAV-IgM), B (HBsAg, Anti-HBc), C (Anti-HCV), E (Anti-HEV-IgM)</li>
<li><strong>MRCP/CT-Abdomen:</strong> bei V.a. Obstruktion, Malignom</li>
<li><strong>ERC(P):</strong> therapeutisch bei Choledocholithiasis, Stent bei maligner Obstruktion</li>
</ul>`
},
{
title: "Therapie",
html: `<ul>
<li><strong>Therapie der Grunderkrankung!</strong></li>
<li><strong>Akute Cholangitis:</strong> Antibiotika (z.B. Piperacillin/Tazobactam 4,5 g i.v. 3x/d) + Notfall-ERC(P) mit Gallenwegsdrainage</li>
<li><strong>Choledocholithiasis:</strong> ERCP mit Steinextraktion</li>
<li><strong>Maligne Obstruktion:</strong> Stent-Einlage (ERCP/PTCD), onkologische Therapie</li>
<li><strong>Hepatitis:</strong> je nach Ätiologie (antiviral, Steroide, Absetzen des Auslösers)</li>
<li><strong>Hämolyse:</strong> je nach Ursache (Steroide bei AIHA, Transfusion, etc.)</li>
<li><strong>Pruritus:</strong> Colestyramin 4 g p.o. 1–3x/d, Ursodeoxycholsäure, ggf. Rifampicin, Naltrexon</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Bei Cholangitis mit Schock → <strong>Reynolds-Pentade</strong> (Charcot-Trias + Hypotonie + Bewusstseinseintrübung) → Intensivstation + Notfall-ERCP!</p></div>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Schmerzloser Ikterus</strong> = Malignom bis zum Beweis des Gegenteils (Pankreaskopf-Ca!)</li>
<li><strong>Charcot-Trias</strong> = Cholangitis → Notfall-ERCP!</li>
<li><strong>Abdomensonographie</strong> ist die erste Bildgebung (Gallenwege erweitert?)</li>
<li>Bilirubin-Differenzierung (direkt/indirekt) ist der Schlüssel zur Einordnung</li>
<li>An <strong>Morbus Gilbert</strong> denken bei isolierter indirekter Hyperbilirubinämie beim jungen Patienten (harmlos!)</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> Cholangitis mit Sepsis, akutes Leberversagen</li>
<li><strong>Stationär:</strong> Cholangitis, Choledocholithiasis (ERCP geplant), unklarer obstruktiver Ikterus, schwere Hepatitis</li>
<li><strong>Ambulant:</strong> Morbus Gilbert, milde Hepatitis, geplante ambulante Abklärung</li>
</ul>`
}
],
stand: "12/24",
sources: `Roche SP et al. Jaundice in the Adult Patient. Am Fam Physician. 2004;69(2):299-304.<br>EASL Clinical Practice Guidelines on the management of benign biliary strictures. J Hepatol. 2023;78(6):1118-1136.`
},
{
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
<tr><td>&lt; 10</td><td>Meist asymptomatisch (Raucher: bis 10% physiologisch)</td></tr>
<tr><td>10–20</td><td>Kopfschmerzen, Schwindel, Übelkeit</td></tr>
<tr><td>20–30</td><td>Starke Kopfschmerzen, Erbrechen, Sehstörungen, Tachykardie</td></tr>
<tr><td>30–40</td><td>Verwirrtheit, Synkope, Tachypnoe</td></tr>
<tr><td>40–60</td><td>Bewusstlosigkeit, Krampfanfälle, Arrhythmien</td></tr>
<tr><td>&gt; 60</td><td>Koma, Herz-Kreislauf-Stillstand, Tod</td></tr>
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
<li><strong>100% Sauerstoff über Non-Rebreather-Maske</strong> (15 l/min) → so früh wie möglich, so lange wie möglich (mindestens 6h oder bis CO-Hb &lt; 3%)</li>
<li>HWZ von CO-Hb: bei Raumluft ca. 320 min, bei 100% O₂ ca. 80 min, bei HBO ca. 23 min</li>
</ul>
<h3>Hyperbare Sauerstofftherapie (HBO)</h3>
<p><strong>Indikationen:</strong></p>
<ul>
<li>CO-Hb &gt; 25%</li>
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
<li><strong>Intensivstation:</strong> Bewusstlosigkeit, Krampfanfälle, kardiale Ischämie, CO-Hb &gt; 25%</li>
<li><strong>Überwachung (mind. 6–12h):</strong> symptomatische Patienten</li>
<li><strong>HBO-Zentrum:</strong> bei Indikation zur hyperbaren Sauerstofftherapie</li>
<li><strong>Ambulant:</strong> nur bei asymptomatischen Patienten nach ausreichender O₂-Therapie, CO-Hb normalisiert, normales Troponin, unauffälliges EKG, gesicherte Elimination der CO-Quelle</li>
</ul>`
}
],
stand: "12/24",
sources: `Rose JJ et al. Carbon Monoxide Poisoning: Pathogenesis, Management, and Future Directions of Therapy. Am J Respir Crit Care Med. 2017;195(5):596-606.<br>Weaver LK. Carbon Monoxide Poisoning. N Engl J Med. 2009;360(12):1217-25.`
},
{
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
<li><strong>O</strong>lder: Erstmanifestation &gt; 50 Jahre (Arteriitis temporalis!)</li>
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
<li><strong>cCT nativ:</strong> bei V.a. SAB, ICB, Raumforderung (Sensitivität für SAB: &gt; 98% in den ersten 6h, danach abnehmend)</li>
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
<li>Erstmanifestation KS &gt; 50 Jahre → an <strong>Arteriitis temporalis</strong> denken (BSG!)</li>
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
},
{
id: "lungenarterienembolie",
title: "Lungenarterienembolie",
category: "Kardiologie",
catKey: "kardio",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Lungenarterienembolie (LAE):</strong> Akute Verlegung einer oder mehrerer Pulmonalarterien, meist durch einen aus dem venösen System embolisierten Thrombus, mit konsekutiver Rechtsherzbelastung und gestörtem Gasaustausch</li>
</ul>
<h3>Risikostratifizierung (ESC 2019)</h3>
<div class="table-wrap"><table>
<thead><tr><th>Risiko</th><th>Klinik</th><th>RV-Dysfunktion</th><th>Troponin</th></tr></thead>
<tbody>
<tr><td><strong>Hochrisiko</strong></td><td>Hämodynamische Instabilität / Schock</td><td>+</td><td>+</td></tr>
<tr><td><strong>Intermediär-hoch</strong></td><td>Stabil</td><td>+</td><td>+</td></tr>
<tr><td><strong>Intermediär-niedrig</strong></td><td>Stabil</td><td>+ oder −</td><td>+ oder −</td></tr>
<tr><td><strong>Niedrigrisiko</strong></td><td>Stabil</td><td>−</td><td>−</td></tr>
</tbody>
</table></div>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Virchow-Trias:</strong> Stase, Endothelschaden, Hyperkoagulabilität</li>
<li><strong>Risikofaktoren:</strong>
<ul>
<li>Tiefe Venenthrombose (TVT)</li>
<li>Immobilisation, lange Reisen</li>
<li>Operationen (v.a. orthopädisch, abdominal)</li>
<li>Malignom</li>
<li>Orale Kontrazeptiva, Hormonersatztherapie</li>
<li>Schwangerschaft, Wochenbett</li>
<li>Thrombophilie</li>
<li>Adipositas</li>
<li>Vorherige VTE</li>
</ul>
</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Akute Dyspnoe</strong> (häufigstes Symptom)</li>
<li><strong>Thoraxschmerz</strong> (pleuritisch oder retrosternal)</li>
<li><strong>Tachykardie</strong></li>
<li><strong>Tachypnoe</strong></li>
<li>Husten, ggf. Hämoptysen</li>
<li>Synkope</li>
<li>ggf. <strong>Zeichen der TVT</strong> (einseitige Beinschwellung)</li>
<li>ggf. <strong>Schock</strong> (Hypotonie, JVD, Zyanose → Hochrisiko-LAE!)</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Die LAE ist ein <strong>Chamäleon!</strong> Sie kann sich als isolierte Dyspnoe, Synkope, Thoraxschmerz, Tachykardie oder Herzstillstand präsentieren.</p></div>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1–2x venöser Zugang</li>
<li><strong>BGA</strong> (pO₂↓, pCO₂↓, Laktat↑?)</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte, NW, <strong>D-Dimere</strong>, <strong>hs-Troponin</strong>, BNP/NT-proBNP, Gerinnung</li>
<li><strong>12-Kanal-EKG:</strong> Sinustachykardie, S1Q3T3-Typ (selten), Rechtsschenkelblock, T-Inversionen V1–V4</li>
</ul>
<h3>Diagnostischer Algorithmus</h3>
<ul>
<li><strong>Hämodynamisch instabil (Schock):</strong> CT-Angiographie sofort (falls verfügbar) oder POCUS (RV-Dilatation? → empirische Lysetherapie bei hohem klinischem Verdacht und nicht verfügbarer CTA)</li>
<li><strong>Hämodynamisch stabil:</strong>
<ol>
<li><strong>Klinische Wahrscheinlichkeit:</strong> Wells-Score oder Geneva-Score</li>
<li>Niedrig/intermediär: <strong>D-Dimere</strong> (altersadaptiert: &lt; 50 Jahre: &lt; 500 ng/ml; ≥ 50 Jahre: Alter × 10 ng/ml) → negativ = LAE ausgeschlossen</li>
<li>Hoch oder D-Dimere positiv: <strong>CT-Angiographie Thorax</strong></li>
</ol>
</li>
</ul>
<h3>POCUS</h3>
<ul>
<li>RV-Dilatation (RV/LV-Ratio &gt; 1:1), RV-Hypokinesie, D-Sign (Septumabflachung), dilatierte VCI ohne Atemvariabilität</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Hochrisiko-LAE (hämodynamisch instabil)</h3>
<ul>
<li>Stabilisierung gemäß ABCDE-Schema</li>
<li>Sauerstoff, ggf. Intubation</li>
<li>Vorsichtige Volumengabe (max. 500 ml kristalloid, RV-Vorlast nicht überlasten!)</li>
<li>Vasopressoren (Noradrenalin-Perfusor)</li>
<li><strong>Systemische Thrombolyse:</strong> <strong>Alteplase (rtPA)</strong> 10 mg i.v. Bolus, dann 90 mg über 2h (oder Tenecteplase gewichtsadaptiert)</li>
<li>Antikoagulation: <strong>UFH</strong> Bolus 80 IE/kg i.v., dann Perfusor (Ziel-aPTT 60–80 sec)</li>
<li>Bei Lyse-Kontraindikation: kathetergestützte Therapie oder chirurgische Embolektomie</li>
</ul>
<h3>Intermediär-hoch-Risiko (stabil, aber RV-Dysfunktion + Troponin ↑)</h3>
<ul>
<li>Therapeutische Antikoagulation (UFH oder NMH)</li>
<li>Intensivüberwachung</li>
<li>Rescue-Lyse bei hämodynamischer Verschlechterung</li>
</ul>
<h3>Intermediär-niedrig und Niedrigrisiko</h3>
<ul>
<li><strong>Antikoagulation:</strong> NMH s.c. gewichtsadaptiert oder DOAK (Rivaroxaban 15 mg 2x/d für 21d, dann 20 mg 1x/d; oder Apixaban 10 mg 2x/d für 7d, dann 5 mg 2x/d)</li>
<li>Niedrigrisiko-LAE: ggf. ambulante Behandlung (sPESI = 0, gute Compliance, keine relevanten Komorbiditäten)</li>
</ul>
<h3>Dauer der Antikoagulation</h3>
<ul>
<li>Provoziert (transient Risikofaktor): 3 Monate</li>
<li>Unprovoziert: mindestens 3–6 Monate, dann Reevaluation (erweiterte Antikoagulation erwägen)</li>
<li>Rezidivierend/Malignom: Langzeitantikoagulation</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li><strong>D-Dimere</strong> nur sinnvoll bei niedriger/intermediärer Vortestwahrscheinlichkeit → altersadaptierter Grenzwert</li>
<li><strong>CT-Angiographie</strong> ist der Goldstandard</li>
<li><strong>Hochrisiko-LAE = Lyseindikation!</strong></li>
<li><strong>Vorsichtige Volumengabe</strong> bei RV-Versagen (Überladung verschlechtert!)</li>
<li>POCUS als schnelle Bedside-Diagnostik (RV-Dilatation?)</li>
<li>An LAE denken bei jeder <strong>unklaren Dyspnoe, Tachykardie, Synkope, Herzstillstand</strong></li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> Hochrisiko-LAE, Lyse, hämodynamische Instabilität</li>
<li><strong>Überwachungsstation:</strong> Intermediär-hoch-Risiko</li>
<li><strong>Normalstation:</strong> Intermediär-niedrig-Risiko</li>
<li><strong>Ambulant:</strong> Niedrigrisiko (sPESI = 0), DOAK, engmaschige Nachsorge</li>
</ul>`
}
],
stand: "12/24",
sources: `Konstantinides SV et al. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism. Eur Heart J. 2020;41(4):543-603.<br>Freund Y et al. Effect of the Pulmonary Embolism Rule-Out Criteria on Subsequent Thromboembolic Events (PROPER). JAMA. 2018;319(6):559-566.`
},
{
id: "myxoedemkoma",
title: "Myxödemkoma",
category: "Metabolisch",
catKey: "metab",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Myxödemkoma:</strong> Schwerste, lebensbedrohliche Dekompensation einer Hypothyreose mit Bewusstseinseintrübung, Hypothermie und Multiorganversagen. Letalität 30–60%!</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Dekompensation einer vorbestehenden Hypothyreose</strong> (meist Hashimoto, Z.n. Thyreoidektomie, Z.n. Radioiodtherapie) durch:
<ul>
<li>Infektionen (häufigster Auslöser)</li>
<li>Kälteexposition</li>
<li>Medikamente (Sedativa, Opioide, Amiodaron, Lithium)</li>
<li>Trauma, Operation</li>
<li>Non-Compliance mit L-Thyroxin</li>
<li>Myokardinfarkt, Schlaganfall</li>
</ul>
</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Bewusstseinseintrübung</strong> bis Koma</li>
<li><strong>Hypothermie</strong> (&lt; 36°C, oft &lt; 35°C)</li>
<li><strong>Bradykardie, Hypotonie</strong></li>
<li><strong>Hypoventilation</strong> (CO₂-Retention)</li>
<li><strong>Generalisierte Myxödeme</strong> (teigige, nicht-eindrückbare Schwellung)</li>
<li>Makroglossie</li>
<li>Hypoglykämie</li>
<li>Hyponatriämie</li>
<li>Paralytischer Ileus</li>
<li>Verlängerte Reflexe (pseudomyotone Reflexe)</li>
<li>ggf. Pleura-/Perikarderguss</li>
<li>ggf. Krampfanfälle</li>
</ul>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter (Kerntemperatur!)</li>
<li>1–2x venöser Zugang</li>
<li><strong>BGA</strong> (pH? pCO₂? Na⁺? Glukose? Laktat?)</li>
<li><strong>Labor:</strong> <strong>TSH, fT3, fT4</strong>, BB, CRP, E'lyte, NW, GOT, GPT, CK, LDH, <strong>Cortisol</strong>, Gerinnung, Lipase, Laktat, BZ, Blutkulturen</li>
<li>12-Kanal-EKG (Bradykardie? Niedervoltage? QTc-Verlängerung?)</li>
<li>Rö-Thorax (Pleuraerguss? Kardiomegalie?)</li>
<li>ggf. Echokardiographie (Perikarderguss?)</li>
</ul>
<div class="callout callout-hinweis"><p><strong>Hinweis:</strong> <strong>Cortisol</strong> immer mitbestimmen! Eine begleitende <strong>Nebenniereninsuffizienz</strong> (Schmidt-Syndrom = polyglanduläre Autoimmunerkrankung) muss vor oder zeitgleich mit der Schilddrüsenhormonsubstitution behandelt werden!</p></div>`
},
{
title: "Therapie",
html: `<h3>Sofortmaßnahmen</h3>
<ul>
<li>Intensivstation!</li>
<li>Atemwegssicherung (Intubation bei Hypoventilation/Bewusstlosigkeit)</li>
<li>Vorsichtige passive Erwärmung (aktive Erwärmung kann periphere Vasodilatation → Schock verursachen)</li>
<li>Volumengabe (CAVE: Hyponatriämie! Keine hypotonen Lösungen!)</li>
<li>Vasopressoren bei Schock</li>
<li>Hypoglykämie behandeln</li>
</ul>
<h3>Schilddrüsenhormonsubstitution</h3>
<ul>
<li><strong>L-Thyroxin (T4):</strong> Initial <strong>300–500 µg i.v.</strong> (Loading Dose), dann 50–100 µg i.v. 1x/d</li>
<li>ggf. zusätzlich <strong>Liothyronin (T3):</strong> 5–20 µg i.v. alle 8h (schnellerer Wirkungseintritt, CAVE: Arrhythmie bei KHK)</li>
<li>Umstellung auf oral nach klinischer Besserung</li>
</ul>
<h3>Hydrocortison</h3>
<ul>
<li><strong>Hydrocortison 100 mg i.v. Bolus, dann 50 mg i.v. alle 8h</strong></li>
<li>Bis eine begleitende Nebenniereninsuffizienz ausgeschlossen ist (Cortisol-Ergebnis)</li>
<li>Schilddrüsenhormon NICHT ohne Steroidschutz geben (kann Addison-Krise auslösen!)</li>
</ul>
<h3>Auslöser behandeln</h3>
<ul>
<li>Infektion → Antibiotika</li>
<li>Auslösende Medikamente absetzen</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Immer Hydrocortison VOR oder GLEICHZEITIG mit Schilddrüsenhormonen geben!</strong> Eine beschleunigte Cortisol-Clearance durch T4 kann eine latente NNR-Insuffizienz demaskieren → Addison-Krise!</p></div>`
},
{
title: "Merke",
html: `<ul>
<li>Myxödemkoma = <strong>klinische Diagnose!</strong> Nicht auf Laborergebnisse warten!</li>
<li><strong>Trias:</strong> Bewusstseinseintrübung + Hypothermie + Bradykardie/Hypotonie → an Myxödemkoma denken</li>
<li><strong>Hydrocortison vor/gleichzeitig mit Schilddrüsenhormonen!</strong></li>
<li>Auslöser suchen und behandeln (Infektion!)</li>
<li>Vorsichtige Erwärmung (passive Erwärmung!)</li>
<li>Letalität 30–60% trotz Therapie</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation</strong> (immer)</li>
</ul>`
}
],
stand: "12/24",
sources: `Mathew V et al. Myxedema Coma: A New Look into an Old Crisis. J Thyroid Res. 2011;2011:493462.<br>Wall CR. Myxedema Coma: Diagnosis and Treatment. Am Fam Physician. 2000;62(11):2485-90.`
},
{
id: "nicht-st-hebungsinfarkt",
title: "Nicht-ST-Hebungsinfarkt (NSTEMI)",
category: "Kardiologie",
catKey: "kardio",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>NSTEMI:</strong> Akuter Myokardinfarkt mit Troponin-Erhöhung (dynamischer Verlauf) OHNE persistierende ST-Hebungen im EKG. Gehört zusammen mit der instabilen Angina pectoris zum <strong>Nicht-ST-Hebungsinfarkt-Akuten Koronarsyndrom (NSTE-ACS)</strong></li>
<li><strong>Instabile Angina pectoris (iAP):</strong> Akute Brustschmerzen ohne Troponin-Erhöhung</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Atherosklerotische Plaqueruptur/-erosion</strong> mit nicht-okklusiver Thrombose (häufigste Ursache)</li>
<li>Koronarspasmen (Prinzmetal-Angina)</li>
<li>Koronardissektion (spontan, v.a. junge Frauen)</li>
<li><strong>Typ-2-Myokardinfarkt:</strong> Oxygen-Mismatch (Anämie, Tachyarrhythmie, Sepsis, hypertensive Krise, respiratorische Insuffizienz)</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Akuter Thoraxschmerz:</strong> retrosternal, drückend/engend, Ausstrahlung in linken Arm/Kiefer/Rücken/Epigastrium</li>
<li>ggf. Ruhe- oder Crescendo-Angina</li>
<li>Dyspnoe</li>
<li>Übelkeit, Erbrechen, Schwitzen</li>
<li>Angst, Vernichtungsgefühl</li>
<li>ggf. Synkope</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Atypische Präsentationen</strong> bei Frauen, Diabetikern und älteren Patienten! Dyspnoe, Übelkeit oder Oberbauchschmerzen können einziges Symptom sein.</p></div>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1–2x venöser Zugang</li>
<li><strong>12-Kanal-EKG innerhalb von 10 min!</strong> (ST-Senkung? T-Inversionen? Kein ST-Hebungs-Nachweis!)</li>
<li><strong>hs-Troponin</strong> (bei Aufnahme + nach 1–3h, 0h/1h- oder 0h/2h-Algorithmus gemäß ESC)</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte, NW, Gerinnung, BNP, Lipidprofil, HbA1c, Glukose</li>
<li>BGA (Laktat?)</li>
</ul>
<h3>0h/1h-Algorithmus (ESC 2023, hs-cTn)</h3>
<div class="table-wrap"><table>
<thead><tr><th>Zeitpunkt</th><th>Rule-Out</th><th>Observe</th><th>Rule-In</th></tr></thead>
<tbody>
<tr><td>0h hs-cTnT</td><td>&lt; 5 ng/l</td><td>5–51 ng/l</td><td>≥ 52 ng/l</td></tr>
<tr><td>0h→1h Δ</td><td>&lt; 3 ng/l</td><td>—</td><td>≥ 5 ng/l</td></tr>
</tbody>
</table></div>
<h3>Risikostratifizierung</h3>
<ul>
<li><strong>GRACE-Score:</strong> bestimmt das Kurzzeit- und Langzeitrisiko → leitet Invasivstrategie</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Initiale Therapie</h3>
<ul>
<li><strong>ASS</strong> 250–300 mg i.v. oder p.o. (Loading Dose)</li>
<li><strong>P2Y12-Inhibitor:</strong> Ticagrelor 180 mg p.o. oder Prasugrel 60 mg p.o. (Prasugrel nur bei geplanter PCI, nicht bei Alter &gt; 75J, Gewicht &lt; 60 kg, Z.n. Stroke/TIA)</li>
<li><strong>Antikoagulation:</strong> Fondaparinux 2,5 mg s.c. 1x/d (bei konservativem Vorgehen) oder UFH (bei geplanter PCI)</li>
<li><strong>Nitroglycerin</strong> 0,4 mg s.l. oder Perfusor (nicht bei RR syst. &lt; 90 mmHg, nicht bei Einnahme von PDE-5-Inhibitoren)</li>
<li><strong>Morphin</strong> 2–5 mg i.v. bei persistierenden Schmerzen (CAVE: Übelkeit, Hypotonie, Atemdepression)</li>
<li><strong>Betablocker</strong> p.o. bei Tachykardie/Hypertonie (nicht bei akuter Herzinsuffizienz, Bradykardie, Schock)</li>
<li><strong>Sauerstoff</strong> nur bei SpO₂ &lt; 90%</li>
</ul>
<h3>Invasive Strategie (Koronarangiographie)</h3>
<div class="table-wrap"><table>
<thead><tr><th>Timing</th><th>Indikation</th></tr></thead>
<tbody>
<tr><td><strong>Sofort (&lt; 2h)</strong></td><td>Hämodynamische Instabilität, kardiogener Schock, therapierefraktäre Angina, lebensbedrohliche Arrhythmien, mechanische Komplikation, akute Herzinsuffizienz</td></tr>
<tr><td><strong>Früh (&lt; 24h)</strong></td><td>GRACE-Score &gt; 140, dynamische Troponin-Änderung, dynamische ST-/T-Veränderungen</td></tr>
<tr><td><strong>Selektiv (&lt; 72h)</strong></td><td>GRACE-Score &lt; 140, Diabetes, CKD, LVEF &lt; 40%, Post-Infarkt-Angina</td></tr>
</tbody>
</table></div>`
},
{
title: "Merke",
html: `<ul>
<li><strong>EKG innerhalb von 10 min!</strong></li>
<li><strong>hs-Troponin</strong> 0h/1h-Algorithmus zur Diagnose</li>
<li><strong>GRACE-Score</strong> bestimmt Invasivstrategie</li>
<li>NSTEMI mit hämodynamischer Instabilität → sofortige Koronarangiographie</li>
<li><strong>STEMI ausschließen!</strong> (bei ST-Hebungen → SOP STEMI)</li>
<li>An <strong>Typ-2-Myokardinfarkt</strong> denken (Troponin-Erhöhung ohne Koronarthrombose)</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensiv/Chest Pain Unit:</strong> NSTEMI, instabile Angina pectoris</li>
<li>Kardiologisches Konsil, Koronarangiographie nach Risikostratifizierung</li>
</ul>`
}
],
stand: "12/24",
sources: `Byrne RA et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J. 2023;44(38):3720-3826.<br>Collet JP et al. 2020 ESC Guidelines for the management of acute coronary syndromes in patients presenting without persistent ST-segment elevation. Eur Heart J. 2021;42(14):1289-1367.`
},
{
id: "nierenkolik",
title: "Nierenkolik",
category: "Nephrologie",
catKey: "nephro",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Nierenkolik:</strong> Akuter, krampfartiger Flankenschmerz durch Obstruktion des oberen Harntrakts, meist durch Urolithiasis (Nieren-/Harnleiterstein)</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Urolithiasis</strong> (häufigste Ursache):
<ul>
<li>Calciumoxalat (70–80%)</li>
<li>Calciumphosphat</li>
<li>Harnsäure (10%)</li>
<li>Struvit (Infektsteine)</li>
<li>Cystin (selten)</li>
</ul>
</li>
<li>Blutkoagel (nach Blutung)</li>
<li>Papillennekrose (Diabetes, Analgetikanephropathie)</li>
<li>Tumor (selten)</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Akuter, heftigster kolikartiger Flankenschmerz</strong> (wellenförmig, plötzlicher Beginn)</li>
<li><strong>Ausstrahlung:</strong> je nach Steinlokalisation in Leiste, Labien/Hoden, Oberschenkelinnenseite</li>
<li><strong>Motorische Unruhe</strong> (Patient kann nicht still liegen – DD zu Peritonitis/Schonhaltung!)</li>
<li>Übelkeit, Erbrechen</li>
<li>ggf. Hämaturie (Mikro-/Makrohämaturie)</li>
<li>ggf. Dysurie, Pollakisurie (bei distal gelegenem Stein)</li>
<li>ggf. Fieber (bei begleitendem Infekt → CAVE: Urosepsis!)</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Fieber + Harnstau + Infektzeichen = Urosepsis → Notfall!</strong> Sofortige Antibiotikatherapie und Harnableitung!</p></div>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1x venöser Zugang</li>
<li><strong>BGA</strong> (Kreatinin? Laktat?)</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte, NW, Harnsäure, Gerinnung, ggf. PCT</li>
<li><strong>Urin-Status:</strong> Hämaturie? Leukozyturie? Nitrit? pH?</li>
<li><strong>Anamnese:</strong> Schmerzcharakter? Lokalisation? Ausstrahlung? Vorherige Steinerkrankung? Flüssigkeitszufuhr? Medikamente? Fieber?</li>
<li><strong>Körperliche Untersuchung:</strong> Nierenlagerklopfschmerz? Abdomen? Fieber?</li>
</ul>
<h3>Bildgebung</h3>
<ul>
<li><strong>Nativ-CT Abdomen (Low-Dose):</strong> Goldstandard! Sensitivität &gt; 95%, zeigt Steingröße/-lokalisation, Harnstau</li>
<li><strong>Sonographie:</strong> Harnstau? Nierenstein? (gute Verfügbarkeit, kein KM, als Erstuntersuchung geeignet, aber geringere Sensitivität als CT)</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Analgesie (Priorität!)</h3>
<ul>
<li><strong>NSAR</strong> (Mittel der 1. Wahl):
<ul>
<li>Diclofenac 75 mg i.v./i.m. oder Ibuprofen 600 mg p.o.</li>
<li>Wirkt analgetisch + antiödematös am Ureter</li>
</ul>
</li>
<li><strong>Metamizol</strong> 1 g i.v. (Zweitwahl, spasmolytisch)</li>
<li><strong>Paracetamol</strong> 1 g i.v.</li>
<li><strong>Opioide:</strong> Piritramid 3,75–7,5 mg i.v. oder Morphin 2–5 mg i.v. bei refraktären Schmerzen</li>
<li><strong>Butylscopolamin</strong> 20 mg i.v. (Zusatz, Evidenz gering)</li>
</ul>
<h3>Konservative Therapie (Medical Expulsive Therapy, MET)</h3>
<ul>
<li>Bei Steinen <strong>&lt; 5–6 mm</strong>: hohe spontane Abgangsrate (80–90%)</li>
<li><strong>Tamsulosin</strong> 0,4 mg 1x/d p.o. (erleichtert Steinabgang bei distalem Harnleiterstein 5–10 mm)</li>
<li>Ausreichende Flüssigkeitszufuhr (aber nicht forcierte Hydratation in der Akutphase!)</li>
</ul>
<h3>Interventionelle Therapie</h3>
<ul>
<li><strong>Indikation:</strong> Steine &gt; 6–10 mm (geringe Spontanabgangswahrscheinlichkeit), therapierefraktäre Schmerzen, persistierender Harnstau, Urosepsis, Einzelniere, beidseitige Obstruktion</li>
<li><strong>URS</strong> (Ureterorenoskopie) + Laserlithotripsie</li>
<li><strong>ESWL</strong> (Extrakorporale Stoßwellenlithotripsie)</li>
<li><strong>Harnableitung</strong> (DJ-Stent oder Nephrostomie) bei Urosepsis, infiziertem Harnstau</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li><strong>NSAR</strong> sind das Analgetikum der 1. Wahl bei Nierenkolik</li>
<li><strong>Low-Dose-Nativ-CT</strong> ist der Goldstandard der Bildgebung</li>
<li>Steine &lt; 5 mm: meist spontaner Abgang</li>
<li><strong>Fieber + Harnstau = Urosepsis</strong> → sofortige AB + Harnableitung!</li>
<li>DD beachten: Aortenaneurysma, Appendizitis, EUG, Ovarialzystentorsion</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Stationär:</strong> Urosepsis, infizierter Harnstau, therapierefraktäre Schmerzen, AKI, Einzelniere, beidseitige Obstruktion, große Steine (&gt; 10 mm)</li>
<li><strong>Ambulant:</strong> Stein &lt; 5–6 mm, Schmerzkontrolle, keine Infektzeichen, normale Nierenfunktion, urologische Wiedervorstellung</li>
</ul>`
}
],
stand: "12/24",
sources: `Türk C et al. EAU Guidelines on Urolithiasis, 2024.<br>Gottlieb M et al. Management of Nephrolithiasis. Ann Emerg Med. 2023;82(1):80-91.`
},
{
id: "obere-gastrointestinale-blutung",
title: "Obere Gastrointestinale Blutung",
category: "Gastroenterologie",
catKey: "gi",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Obere GI-Blutung:</strong> Blutung aus dem Gastrointestinaltrakt proximal des Treitz-Bandes (Ösophagus, Magen, Duodenum)</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Ulcus ventriculi/duodeni</strong> (35–50%, häufigste Ursache)</li>
<li><strong>Ösophagus-/Fundusvarizen</strong> (10–20%, bei Leberzirrhose)</li>
<li><strong>Erosive Gastritis/Duodenitis</strong> (NSAR, Stress, Alkohol)</li>
<li><strong>Mallory-Weiss-Syndrom</strong> (Schleimhautriss am ösophagogastralen Übergang durch Erbrechen)</li>
<li><strong>Angiodysplasien</strong></li>
<li><strong>Malignome</strong> (Magen-Ca, Ösophagus-Ca)</li>
<li><strong>Dieulafoy-Läsion</strong></li>
<li><strong>Aorto-enterale Fistel</strong> (bei Z.n. Aorten-OP → Sentinel-Blutung → massive Blutung!)</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Hämatemesis</strong> (Bluterbrechen: frischrot oder kaffeesatzartig)</li>
<li><strong>Meläna</strong> (Teerstuhl: schwarz, glänzend, übelriechend) – ab ca. 100 ml Blut im oberen GI-Trakt</li>
<li>ggf. <strong>Hämatochezie</strong> (frischrote rektale Blutung bei massiver oberer GI-Blutung)</li>
<li><strong>Hypovolämie-/Schockzeichen:</strong> Tachykardie, Hypotonie, Blässe, Kaltschweißigkeit, Bewusstseinseintrübung</li>
<li>ggf. Bauchschmerzen (Ulcus)</li>
</ul>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li><strong>2x großlumige venöse Zugänge</strong></li>
<li><strong>BGA</strong> (Hb! Laktat!)</li>
<li><strong>Labor:</strong> BB, Gerinnung (INR, aPTT, Fibrinogen), <strong>Kreuzblut + Blutgruppe</strong>, E'lyte, NW, GOT, GPT, Albumin</li>
<li>12-Kanal-EKG</li>
</ul>
<h3>Klinische Untersuchung</h3>
<ul>
<li><strong>Anamnese:</strong> Hämatemesis? Meläna? Stuhlfarbe? Medikamente (NSAR, Antikoagulantien, ASS)? Alkohol? Bekannte Leberzirrhose/Varizen? Vorherige GI-Blutung? Z.n. Aorten-OP?</li>
<li><strong>Körperliche Untersuchung:</strong> Schockzeichen? Abdomen? DRU (Teerstuhl, Blut)? Leberzirrhose-Stigmata? Magensonde (Blut, Kaffeesatz)?</li>
</ul>
<h3>Risikostratifizierung</h3>
<ul>
<li><strong>Glasgow-Blatchford-Score (GBS):</strong> Identifikation von Niedrigrisiko-Patienten (GBS = 0–1: ambulante Behandlung möglich)</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Stabilisierung</h3>
<ul>
<li>ABCDE-Schema, Schockbehandlung</li>
<li><strong>Volumentherapie:</strong> Vollelektrolytlösung, ggf. balancierte kristalloide Lösung</li>
<li><strong>Transfusion:</strong> EK bei Hb &lt; 7 g/dl (restriktiv!), bei aktiver Blutung und Schock sofort</li>
<li>FFP, Thrombozytenkonzentrate, Fibrinogen nach Bedarf bei Koagulopathie</li>
<li><strong>Antikoagulantien pausieren/antagonisieren</strong> (Vitamin K bei Marcumar, Idarucizumab bei Dabigatran, Andexanet alfa bei Xa-Inhibitoren, PPSB bei Notfall)</li>
</ul>
<h3>Medikamentöse Therapie</h3>
<ul>
<li><strong>PPI hochdosiert:</strong> Esomeprazol/Pantoprazol 80 mg i.v. Bolus, dann 8 mg/h Perfusor (vor und nach Endoskopie)</li>
<li><strong>Erythromycin</strong> 250 mg i.v. 30–120 min vor Endoskopie (prokinetisch, verbessert Sichtverhältnisse)</li>
</ul>
<h3>Varizenblutung (zusätzlich)</h3>
<ul>
<li><strong>Terlipressin</strong> 1–2 mg i.v. Bolus, dann 1 mg i.v. alle 4–6h (oder Octreotid/Somatostatin)</li>
<li><strong>Antibiotika:</strong> Ceftriaxon 2 g i.v. 1x/d (Infektionsprophylaxe bei Leberzirrhose)</li>
<li>Kein PPI bei reiner Varizenblutung (kein Benefit)</li>
</ul>
<h3>Endoskopie</h3>
<ul>
<li><strong>ÖGD innerhalb von 24h</strong> (bei allen Patienten mit oberer GI-Blutung)</li>
<li><strong>ÖGD innerhalb von 12h</strong> bei Hochrisikopatienten (hämodynamische Instabilität, Hämatemesis, Varizenblutung)</li>
<li>Endoskopische Hämostase: Clipping, Injektion (Adrenalin), Thermokoagulation, Gummibandligatur (Varizen)</li>
</ul>
<h3>Bei refraktärer Blutung</h3>
<ul>
<li>Interventionelle Angiographie + Embolisation</li>
<li>Sengstaken-Blakemore-Sonde (Bridging bei Varizenblutung, max. 24h)</li>
<li>TIPS (bei refraktärer Varizenblutung)</li>
<li>Chirurgie (Ultima ratio)</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li><strong>2 großlumige Zugänge + Kreuzblut</strong> sofort!</li>
<li><strong>Restriktive Transfusionsstrategie</strong> (Hb &lt; 7), bei Varizenblutung besonders streng (Hb-Ziel 7–8 g/dl)</li>
<li><strong>PPI-Bolus + Perfusor</strong> bei nicht-variköser Blutung</li>
<li><strong>Terlipressin + Ceftriaxon</strong> bei V.a. Varizenblutung</li>
<li><strong>Erythromycin</strong> vor ÖGD (Magen leer machen)</li>
<li>An <strong>aorto-enterale Fistel</strong> denken bei Z.n. Aorten-OP!</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> hämodynamische Instabilität, Massivtransfusion, Varizenblutung</li>
<li><strong>Überwachungsstation:</strong> stabile Patienten nach Endoskopie mit Hochrisiko-Stigmata</li>
<li><strong>Ambulant:</strong> GBS 0–1, stabil, keine Endoskopie-Indikation in &lt; 24h, gesicherte ambulante ÖGD</li>
</ul>`
}
],
stand: "12/24",
sources: `Laine L et al. ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding. Am J Gastroenterol. 2021;116(5):899-917.<br>de Franchis R et al. Baveno VII – Renewing consensus in portal hypertension. J Hepatol. 2022;76(4):959-974.`
},
{
id: "oesophageale-bolusimpaktion",
title: "Ösophageale Bolusimpaktion",
category: "Gastroenterologie",
catKey: "gi",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Ösophageale Bolusimpaktion:</strong> Akute Verlegung des Ösophaguslumens durch impaktierten Nahrungsbolus (meist Fleisch), die zu einer teilweisen oder vollständigen Obstruktion führt</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Zugrunde liegende ösophageale Pathologie (in &gt; 75%!):</strong>
<ul>
<li>Eosinophile Ösophagitis (häufig bei jungen Patienten!)</li>
<li>Peptische Striktur</li>
<li>Schatzki-Ring</li>
<li>Ösophaguskarzinom</li>
<li>Postoperative Stenose (Z.n. Fundoplikatio)</li>
</ul>
</li>
<li>Hastiges Essen, unzureichendes Kauen</li>
<li>Zahnprothesen (reduzierte Sensibilität im Gaumen)</li>
<li>Alkoholkonsum</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Akute Dysphagie/Aphagie</strong></li>
<li><strong>Speicheln</strong> (Hypersalivation, Schluckunfähigkeit)</li>
<li>Retrosternales Druckgefühl/Schmerz</li>
<li>Würgen, Erbrechen (regurgitiertes Essen)</li>
<li>Fremdkörpergefühl</li>
<li>ggf. Stridor, Dyspnoe (bei hoher Obstruktion/Aspiration)</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Vollständige Obstruktion mit Speicheln/Aphagie → <strong>endoskopische Intervention innerhalb von 6h</strong> (Perforations-/Aspirationsrisiko steigt mit Dauer!).</p></div>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li><strong>Anamnese:</strong> Was? Wann? Fleisch? Vorbekannte Schluckstörung? Bekannte ösophageale Pathologie?</li>
<li><strong>Röntgen-Thorax:</strong> bei V.a. Fremdkörper (röntgendicht?), freie Luft (Perforation)?</li>
<li>Keine bariumhaltige KM-Schluck-Untersuchung (Aspirationsrisiko!)</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Konservative Maßnahmen (bei partiellem Bolus, Toleranz von Flüssigkeiten)</h3>
<ul>
<li>Beobachtung über max. 6h (spontane Passage in ca. 30%)</li>
<li><strong>Butylscopolamin</strong> 20 mg i.v. (Relaxation der glatten Muskulatur)</li>
<li>Ggf. Glucagon 1 mg i.v. (Evidenz schwach, aber niedrige NW)</li>
</ul>
<h3>Endoskopische Therapie</h3>
<ul>
<li><strong>Flexible Ösophagogastroduodenoskopie (ÖGD)</strong> = Methode der Wahl</li>
<li><strong>Innerhalb von 6h</strong> bei kompletter Obstruktion (Speicheln/Aphagie)</li>
<li>Push-Technik (Bolus in den Magen schieben) oder Extraktion</li>
<li><strong>Biopsien des Ösophagus</strong> zur Abklärung der Grunderkrankung (Eosinophile Ösophagitis!)</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Kein Versuch der blinden Bougierung!</strong> Keine Coca-Cola-Methode bei komplettem Verschluss. Kein Versuch, den Bolus mit Druck zu lösen ohne endoskopische Sicht → Perforationsgefahr!</p></div>`
},
{
title: "Merke",
html: `<ul>
<li>Komplette Obstruktion → <strong>ÖGD innerhalb von 6h!</strong></li>
<li>In &gt; 75% liegt eine <strong>ösophageale Grunderkrankung</strong> vor → Biopsien!</li>
<li>An <strong>eosinophile Ösophagitis</strong> denken bei jungen Patienten mit rezidivierender Bolusimpaktion</li>
<li>Atemwegsschutz: Aspirationsrisiko beachten!</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Stationär:</strong> bei Intervention, Perforation, Aspiration, persistierender Symptomatik</li>
<li><strong>Ambulant:</strong> nach erfolgreicher Endoskopie/Spontanpassage, Nachsorge-ÖGD zur Ursachenabklärung planen</li>
</ul>`
}
],
stand: "12/24",
sources: `Birk M et al. ESGE Guideline: Removal of foreign bodies in the upper gastrointestinal tract in adults. Endoscopy. 2016;48(5):489-496.<br>Sengupta N et al. Urgent endoscopy for food impaction. Gastrointest Endosc. 2021;93(4):804-810.`
},
{
id: "pleuraerguss",
title: "Pleuraerguss",
category: "Pneumologie",
catKey: "pulmo",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Pleuraerguss:</strong> Pathologische Flüssigkeitsansammlung im Pleuraspalt</li>
<li><strong>Transsudat:</strong> Ultrafiltrat des Plasmas, nicht-entzündlich (hydrostatisch/onkotisch bedingt)</li>
<li><strong>Exsudat:</strong> Proteinreiche Flüssigkeit, entzündlich/infektiös/maligne</li>
</ul>`
},
{
title: "Ursachen",
html: `<h3>Transsudat</h3>
<ul>
<li><strong>Herzinsuffizienz</strong> (häufigste Ursache überhaupt!)</li>
<li>Leberzirrhose (hepatischer Hydrothorax)</li>
<li>Nephrotisches Syndrom</li>
<li>Peritonealdialyse</li>
</ul>
<h3>Exsudat</h3>
<ul>
<li><strong>Pneumonie/Parapneumonischer Erguss</strong> (häufigste Ursache des Exsudats)</li>
<li><strong>Maligner Pleuraerguss</strong> (Bronchial-Ca, Mamma-Ca, Lymphom, Mesotheliom)</li>
<li><strong>Lungenarterienembolie</strong></li>
<li>Tuberkulose</li>
<li>Autoimmunerkrankungen (SLE, RA)</li>
<li>Pankreatitis</li>
</ul>
<h3>Sonstige</h3>
<ul>
<li><strong>Hämatothorax:</strong> Trauma, Aortendissektion, iatrogen</li>
<li><strong>Chylothorax:</strong> Verletzung des Ductus thoracicus (OP, Trauma, Lymphom)</li>
<li><strong>Empyem:</strong> Eiter im Pleuraraum</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Dyspnoe</strong> (abhängig von Menge und Geschwindigkeit der Ergussbildung)</li>
<li><strong>Trockener Husten</strong> (Kompression des Lungenparenchyms)</li>
<li><strong>Pleuritischer Schmerz</strong> (v.a. bei Exsudat/Pleuritis)</li>
<li>Gedämpfter Klopfschall</li>
<li>Abgeschwächtes/fehlendes Atemgeräusch</li>
<li>ggf. Fieber (bei Empyem/Pneumonie)</li>
</ul>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1x venöser Zugang</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte, NW, GOT, GPT, Albumin, LDH, Gerinnung, ggf. BNP</li>
</ul>
<h3>Bildgebung</h3>
<ul>
<li><strong>Sonographie (POCUS):</strong> Ergussnachweis, Menge, Septierung, optimale Punktionsstelle</li>
<li><strong>Röntgen-Thorax:</strong> Verschattung, Meniskuszeichen (ab ca. 200–300 ml sichtbar)</li>
<li><strong>CT-Thorax:</strong> bei unklarer Ursache, V.a. Malignom, Empyem, komplizierter Erguss</li>
</ul>
<h3>Pleurapunktion (diagnostisch)</h3>
<ul>
<li><strong>Indikation:</strong> Jeder klinisch signifikante Erguss unklarer Ätiologie</li>
<li><strong>Light-Kriterien</strong> (Unterscheidung Exsudat vs. Transsudat – Exsudat wenn ≥ 1 Kriterium erfüllt):
<ul>
<li>Protein Pleura/Serum &gt; 0,5</li>
<li>LDH Pleura/Serum &gt; 0,6</li>
<li>LDH Pleura &gt; 2/3 des oberen Serum-Normwerts</li>
</ul>
</li>
<li><strong>Pleurapunktat-Analyse:</strong> Protein, LDH, pH, Glukose, Zellzahl + Differenzierung, Mikrobiologie (Gramfärbung, Kultur), Zytologie (Malignomzellen), ggf. Albumin, Amylase, Triglyceride, Adenosindeaminase (ADA, Tbc)</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Therapeutische Pleurapunktion/Drainage</h3>
<ul>
<li><strong>Symptomatische Entlastung</strong> bei großem, symptomatischem Erguss (max. 1000–1500 ml pro Sitzung, CAVE: Re-Expansionsödem!)</li>
</ul>
<h3>Ursachenspezifische Therapie</h3>
<ul>
<li><strong>Herzinsuffizienz:</strong> Diuretika (Furosemid), Behandlung der HI</li>
<li><strong>Parapneumonisch/Empyem:</strong> Antibiotika, Thoraxdrainage (bei komplizierten parapneumonischen Ergüssen: pH &lt; 7,2, Glukose &lt; 60 mg/dl, pos. Gramfärbung/Kultur, Eiter → Drainage!)</li>
<li><strong>Maligner Erguss:</strong> Therapeutische Punktion, ggf. Talkpleurodese, Dauerdrainage (Pleurakatheter), Onkologische Therapie</li>
<li><strong>Hämatothorax:</strong> Thoraxdrainage, ggf. operative Versorgung</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Bei <strong>Empyem</strong> (Eiter, pH &lt; 7,2, positiver Gramfärbung) → <strong>sofortige Thoraxdrainage!</strong> Antibiotika allein sind nicht ausreichend.</p></div>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Sonographie</strong> ist die beste Methode zur Ergussdetektion und Punktionsplanung</li>
<li><strong>Light-Kriterien</strong> zur Differenzierung Transsudat vs. Exsudat</li>
<li>Häufigste Ursache des Transsudats: <strong>Herzinsuffizienz</strong></li>
<li>Häufigste Ursache des Exsudats: <strong>Parapneumonischer Erguss</strong></li>
<li><strong>pH &lt; 7,2</strong> im Punktat → Drainage!</li>
<li>Max. 1000–1500 ml pro Punktion (Re-Expansionsödem!)</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Stationär:</strong> großer symptomatischer Erguss, Empyem, unklarer Erguss mit Abklärungsbedarf, Thoraxdrainage</li>
<li><strong>Ambulant:</strong> kleiner, asymptomatischer Erguss bei bekannter Ursache (z.B. Herzinsuffizienz), geplante ambulante Punktion</li>
</ul>`
}
],
stand: "12/24",
sources: `Feller-Kopman D et al. Pleural Disease. N Engl J Med. 2018;378(8):740-751.<br>Light RW. Pleural Effusions. Med Clin North Am. 2011;95(6):1055-70.<br>BTS Pleural Disease Guideline, 2023.`
},
{
id: "pneumonie",
title: "Pneumonie",
category: "Infektiologie",
catKey: "infekt",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Pneumonie:</strong> Akute Infektion des Lungenparenchyms mit Inflammation und Exsudation in den Alveolarraum</li>
</ul>
<h3>Einteilung</h3>
<ul>
<li><strong>CAP</strong> (Community-acquired Pneumonia): ambulant erworben</li>
<li><strong>HAP</strong> (Hospital-acquired Pneumonia): ≥ 48h nach stationärer Aufnahme</li>
<li><strong>VAP</strong> (Ventilator-associated Pneumonia): ≥ 48h nach Intubation</li>
</ul>`
},
{
title: "Ursachen",
html: `<h3>CAP</h3>
<ul>
<li><strong>Streptococcus pneumoniae</strong> (häufigster Erreger!)</li>
<li>Haemophilus influenzae</li>
<li>Mycoplasma pneumoniae (v.a. jüngere Patienten)</li>
<li>Legionella pneumophila</li>
<li>Chlamydophila pneumoniae</li>
<li>Influenza-/RS-/SARS-CoV-2-Viren</li>
</ul>
<h3>HAP/VAP</h3>
<ul>
<li>Gramnegative Erreger (Pseudomonas, Klebsiella, E. coli, Acinetobacter)</li>
<li>S. aureus (inkl. MRSA)</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Husten</strong> (produktiv, ggf. eitiges Sputum)</li>
<li><strong>Fieber</strong>, Schüttelfrost</li>
<li><strong>Dyspnoe</strong>, Tachypnoe</li>
<li><strong>Pleuritischer Thoraxschmerz</strong></li>
<li>Rasselgeräusche, Bronchialatmen bei Auskultation</li>
<li>ggf. reduzierter AZ, Verwirrtheit (v.a. ältere Patienten)</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Bei <strong>älteren Patienten</strong> kann Fieber fehlen! Leitsymptom ist oft nur <strong>Verwirrtheit/Bewusstseinseintrübung</strong> + Tachypnoe.</p></div>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1x venöser Zugang</li>
<li><strong>BGA</strong> (pO₂? Laktat?)</li>
<li><strong>Labor:</strong> BB, CRP, <strong>PCT</strong>, E'lyte, NW, GOT, GPT, LDH, Gerinnung</li>
<li><strong>Blutkulturen</strong> (2 Paar, bei stationärer Aufnahme)</li>
<li><strong>Rö-Thorax</strong> (2 Ebenen): Infiltrat? Erguss? Abszess?</li>
<li><strong>Urin-Antigentest:</strong> Legionella, Pneumokokken (bei schwerer CAP)</li>
<li><strong>Sputumkultur</strong> (bei schwerer CAP, HAP)</li>
<li><strong>CRB-65-Score</strong> (ambulant) / <strong>CURB-65-Score</strong> (stationär):
<ul>
<li><strong>C</strong>onfusion, <strong>U</strong>rea &gt; 7 mmol/l, <strong>R</strong>espiratory rate ≥ 30/min, <strong>B</strong>lood pressure syst. &lt; 90 / diast. ≤ 60, <strong>65</strong> Jahre</li>
</ul>
</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>CAP ambulant (CRB-65 = 0)</h3>
<ul>
<li><strong>Amoxicillin</strong> 1 g 3x/d p.o. für 5 Tage</li>
<li>Penicillinallergie: Azithromycin 500 mg 1x/d für 3 Tage oder Moxifloxacin 400 mg 1x/d für 5 Tage</li>
</ul>
<h3>CAP stationär (CRB-65 ≥ 1–2)</h3>
<ul>
<li><strong>Ampicillin/Sulbactam</strong> 3 g i.v. 3x/d ± Azithromycin 500 mg i.v./p.o. 1x/d</li>
<li>Alternativ: Ceftriaxon 2 g i.v. 1x/d + Azithromycin</li>
<li>Therapiedauer: 5–7 Tage (Reevaluation nach 48–72h)</li>
</ul>
<h3>Schwere CAP (ICU, CRB-65 ≥ 3)</h3>
<ul>
<li><strong>Piperacillin/Tazobactam</strong> 4,5 g i.v. 3x/d + Azithromycin 500 mg i.v. 1x/d</li>
<li>Alternativ: Meropenem 1 g i.v. 3x/d + Azithromycin</li>
</ul>
<h3>Supportive Therapie</h3>
<ul>
<li>Sauerstoff: Ziel-SpO₂ ≥ 92% (bei COPD: 88–92%)</li>
<li>Volumentherapie bei Dehydratation/Sepsis</li>
<li>Thromboseprophylaxe</li>
<li>Reevaluation nach 48–72h (klinische Besserung? Deeskalation? orale Sequenztherapie?)</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li><strong>CRB-65-Score</strong> bestimmt den Behandlungsort (ambulant/stationär/ICU)</li>
<li><strong>Therapiestart</strong> innerhalb von 4–8h nach Diagnose, bei Sepsis innerhalb von 1h</li>
<li><strong>Restriktive Therapiedauer:</strong> 5 Tage bei unkomplizierter CAP ausreichend</li>
<li>Reevaluation nach 48–72h → Deeskalation, Sequenztherapie, Entlassung</li>
<li>An <strong>Legionellen</strong> denken bei schwerer CAP (Urin-Antigentest!)</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Ambulant:</strong> CRB-65 = 0, keine Hypoxie, orale Aufnahme möglich</li>
<li><strong>Normalstation:</strong> CRB-65 = 1–2</li>
<li><strong>Intensivstation:</strong> CRB-65 ≥ 3, Sepsis, respiratorisches Versagen, Vasopressorbedarf</li>
</ul>`
}
],
stand: "12/24",
sources: `Ewig S et al. S3-Leitlinie Behandlung von erwachsenen Patienten mit ambulant erworbener Pneumonie. AWMF-Register-Nr. 020-020, 2021.<br>Metlay JP et al. ATS/IDSA Guideline: Diagnosis and Treatment of Adults with Community-acquired Pneumonia. Am J Respir Crit Care Med. 2019;200(7):e45-e67.`
},
{
id: "schock",
title: "Schock",
category: "Leitsymptom",
catKey: "leit",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Schock:</strong> Akutes Kreislaufversagen mit inadäquater Gewebeperfusion und zellulärer Sauerstoffschuld, die unbehandelt zu Multiorganversagen und Tod führt</li>
</ul>
<h3>Schockformen</h3>
<div class="table-wrap"><table>
<thead><tr><th>Schockform</th><th>Mechanismus</th><th>Beispiele</th></tr></thead>
<tbody>
<tr><td><strong>Hypovolämisch</strong></td><td>Volumenmangel</td><td>Blutung, Dehydratation, Verbrennung</td></tr>
<tr><td><strong>Kardiogen</strong></td><td>Pumpversagen</td><td>Myokardinfarkt, Myokarditis, Arrhythmie, Klappenversagen</td></tr>
<tr><td><strong>Distributiv</strong></td><td>Vasodilatation</td><td>Sepsis, Anaphylaxie, neurogen, Addison-Krise</td></tr>
<tr><td><strong>Obstruktiv</strong></td><td>Abflussbehinderung</td><td>Lungenarterienembolie, Perikardtamponade, Spannungspneumothorax</td></tr>
</tbody>
</table></div>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Hypovolämisch:</strong> Hämorrhagie (Trauma, GI-Blutung, Aortenruptur), Dehydratation (Diarrhoe, Erbrechen, DKA), Verbrennung, Pankreatitis</li>
<li><strong>Kardiogen:</strong> STEMI/NSTEMI, dekompensierte Herzinsuffizienz, akute Myokarditis, Klappenvitien, Arrhythmien, Kardiomyopathie</li>
<li><strong>Distributiv:</strong> Septischer Schock (häufigste Schockform auf Intensivstation!), anaphylaktischer Schock, neurogener Schock (SCI), Addison-Krise</li>
<li><strong>Obstruktiv:</strong> Massive LAE, Perikardtamponade, Spannungspneumothorax</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Tachykardie</strong> (&gt; 100/min) – Ausnahme: neurogener Schock (Bradykardie!), Betablocker</li>
<li><strong>Hypotonie</strong> (RR syst. &lt; 90 mmHg oder MAP &lt; 65 mmHg)</li>
<li><strong>Kaltschweißigkeit</strong>, marmorierte Haut (CAVE: warme Peripherie bei distributivem Schock!)</li>
<li><strong>Tachypnoe</strong></li>
<li><strong>Oligurie</strong> (&lt; 0,5 ml/kg/h)</li>
<li><strong>Bewusstseinseintrübung</strong> (Unruhe, Verwirrtheit, Somnolenz)</li>
<li><strong>Verlängerte Rekapillarisierungszeit</strong> (&gt; 3 sec)</li>
<li><strong>Laktaterhöhung</strong> (&gt; 2 mmol/l)</li>
</ul>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li><strong>2x großlumige venöse Zugänge</strong></li>
<li><strong>BGA</strong> (Laktat! pH! Hb! Glukose! E'lyte!)</li>
<li><strong>Labor:</strong> BB, CRP, PCT, E'lyte, NW, GOT, GPT, LDH, Lipase, Gerinnung, D-Dimere, hs-Troponin, BNP, Kreuzblut, Blutkulturen</li>
<li><strong>12-Kanal-EKG</strong></li>
<li><strong>POCUS</strong> (RUSH-Protokoll): Perikarderguss? RV-Dilatation? LV-Funktion? VCI? Freie Flüssigkeit? Pneumothorax? B-Linien? Aorta?</li>
<li>ggf. Rö-Thorax, CT, Echokardiographie</li>
</ul>
<div class="callout callout-hinweis"><p><strong>Hinweis:</strong> <strong>POCUS (RUSH-Exam)</strong> ermöglicht eine schnelle Differenzierung der Schockursache am Bett: Pump (Herz) – Tank (Volumenstatus) – Pipes (Gefäße).</p></div>`
},
{
title: "Therapie",
html: `<h3>Allgemeine Sofortmaßnahmen</h3>
<ul>
<li>ABCDE-Schema, Hilfe rufen</li>
<li>Sauerstoff (Ziel-SpO₂ ≥ 94%)</li>
<li>2x großlumige Zugänge, ggf. intraossärer Zugang</li>
<li>Flüssigkeitsbolus 250–500 ml VEL (außer kardiogener Schock!)</li>
</ul>
<h3>Schockformspezifische Therapie</h3>
<div class="table-wrap"><table>
<thead><tr><th>Schockform</th><th>Therapie</th></tr></thead>
<tbody>
<tr><td><strong>Hypovolämisch</strong></td><td>Aggressive Volumengabe, Blutprodukte (Massivtransfusion bei Hämorrhagie 1:1:1), chirurgische Blutstillung, Tranexamsäure</td></tr>
<tr><td><strong>Kardiogen</strong></td><td>Vorsichtige Volumengabe, Dobutamin/Noradrenalin, PCI bei ACS, IABP/Impella, ECMO, Arrhythmie-Behandlung</td></tr>
<tr><td><strong>Septisch</strong></td><td>Volumengabe 30 ml/kg kristalloid, Noradrenalin (MAP ≥ 65), Antibiotika innerhalb 1h, Fokussanierung</td></tr>
<tr><td><strong>Anaphylaktisch</strong></td><td>Adrenalin 0,5 mg i.m., Volumengabe, O₂, Steroide, Antihistaminika (s. SOP Anaphylaxie)</td></tr>
<tr><td><strong>Obstruktiv</strong></td><td>LAE: Lyse; Tamponade: Perikardpunktion; Spannungspneumothorax: Nadeldekompression/Thoraxdrainage</td></tr>
</tbody>
</table></div>
<h3>Vasopressoren/Inotropika</h3>
<ul>
<li><strong>Noradrenalin</strong> (1. Wahl bei den meisten Schockformen): 0,1–1 µg/kg/min, Ziel MAP ≥ 65 mmHg</li>
<li><strong>Dobutamin:</strong> bei kardiogenem Schock (inotrop), 2–20 µg/kg/min</li>
<li><strong>Vasopressin:</strong> 0,01–0,04 U/min als Add-on bei septischem Schock</li>
<li><strong>Adrenalin:</strong> bei Anaphylaxie, Reanimation, refraktärem Schock</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Laktat</strong> ist der wichtigste Parameter zur Beurteilung der Gewebeperfusion</li>
<li><strong>POCUS</strong> zur schnellen Differenzierung der Schockursache</li>
<li><strong>Noradrenalin</strong> = Vasopressor der 1. Wahl (frühzeitig, nicht erst nach Litern Volumen!)</li>
<li>Bei <strong>kardiogenem Schock:</strong> vorsichtige Volumengabe (nicht überlasten!)</li>
<li>Bei <strong>septischem Schock:</strong> Antibiotika innerhalb von 1h, Volumen 30 ml/kg</li>
<li>An <strong>obstruktiven Schock</strong> denken: LAE, Tamponade, Spannungspneumothorax</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation</strong> (alle Schockpatienten)</li>
</ul>`
}
],
stand: "12/24",
sources: `Vincent JL et al. Circulatory Shock. N Engl J Med. 2013;369(18):1726-34.<br>Evans L et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021. Intensive Care Med. 2021;47(11):1181-1247.`
},
{
id: "sepsis",
title: "Sepsis",
category: "Infektiologie",
catKey: "infekt",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Sepsis (Sepsis-3):</strong> Lebensbedrohliche Organdysfunktion infolge einer fehlregulierten Wirtsantwort auf eine Infektion. Operationalisiert durch: Infektion + <strong>SOFA-Score ≥ 2</strong> (oder Anstieg ≥ 2 Punkte)</li>
<li><strong>Septischer Schock:</strong> Sepsis + Vasopressorbedarf (MAP ≥ 65 mmHg) + Laktat &gt; 2 mmol/l trotz adäquater Volumentherapie</li>
</ul>
<h3>qSOFA (Screening, nicht mehr empfohlen als alleiniges Screening-Tool)</h3>
<ul>
<li>Atemfrequenz ≥ 22/min</li>
<li>Systolischer Blutdruck ≤ 100 mmHg</li>
<li>Veränderter Bewusstseinszustand (GCS &lt; 15)</li>
</ul>`
},
{
title: "Ursachen",
html: `<h3>Häufigste Infektfoci</h3>
<ul>
<li><strong>Pneumonie</strong> (häufigster Fokus!)</li>
<li><strong>Intraabdominelle Infektion</strong> (Peritonitis, Cholangitis, Appendizitis)</li>
<li><strong>Harnwegsinfektion/Urosepsis</strong></li>
<li><strong>Haut-/Weichteilinfektion</strong></li>
<li><strong>Katheterinfektionen</strong></li>
<li><strong>Endokarditis</strong></li>
<li><strong>Meningitis</strong></li>
</ul>
<h3>Häufigste Erreger</h3>
<ul>
<li>Gramnegativ: E. coli, Klebsiella, Pseudomonas</li>
<li>Grampositiv: S. aureus, Streptokokken, Enterokokken</li>
<li>Pilze: Candida (bei Immunsuppression, ZVK, Langzeit-AB)</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Fieber</strong> (&gt; 38,3°C) oder <strong>Hypothermie</strong> (&lt; 36°C)</li>
<li><strong>Tachykardie</strong> (&gt; 90/min)</li>
<li><strong>Tachypnoe</strong> (≥ 22/min)</li>
<li><strong>Hypotonie</strong> (RR syst. &lt; 100 mmHg)</li>
<li><strong>Bewusstseinsveränderung</strong> (Verwirrtheit, Unruhe, Somnolenz)</li>
<li><strong>Oligurie</strong></li>
<li>Kaltschweißigkeit, Marmorierung</li>
<li>ggf. Symptome des Infektfokus (Husten, Dysurie, Bauchschmerzen, Hautrötung)</li>
</ul>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li><strong>2x großlumige venöse Zugänge</strong></li>
<li><strong>BGA</strong> (Laktat! pH! pO₂! Glukose! E'lyte!)</li>
<li><strong>Labor:</strong> BB, CRP, <strong>PCT</strong>, E'lyte, NW, GOT, GPT, Bilirubin, LDH, Gerinnung (INR, Fibrinogen, D-Dimere → DIC?), <strong>Laktat</strong>, BZ</li>
<li><strong>Blutkulturen:</strong> mindestens 2 Paar (aerob + anaerob) VOR Antibiotikagabe!</li>
<li><strong>Urin-Status + Urinkultur</strong></li>
<li>12-Kanal-EKG</li>
<li><strong>Fokussuche:</strong> Rö-Thorax, Abdomen-Sonographie, ggf. CT, Wundabstriche, Katheterinspektionen</li>
<li>SOFA-Score Berechnung</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Hour-1-Bundle (Surviving Sepsis Campaign 2021)</h3>
<ol>
<li><strong>Laktat messen</strong> (Relaktat nach 2–4h wenn &gt; 2 mmol/l)</li>
<li><strong>Blutkulturen</strong> VOR Antibiotika</li>
<li><strong>Breitspektrum-Antibiotika</strong> innerhalb von 1h!</li>
<li><strong>Volumentherapie</strong> mit 30 ml/kg balancierter kristalloider Lösung bei Hypotonie oder Laktat ≥ 4 mmol/l (innerhalb von 3h beginnen)</li>
<li><strong>Vasopressoren</strong> bei MAP &lt; 65 mmHg trotz Volumengabe (Noradrenalin 1. Wahl)</li>
</ol>
<h3>Empirische Antibiotikatherapie</h3>
<ul>
<li><strong>Unklarer Fokus:</strong> Piperacillin/Tazobactam 4,5 g i.v. alle 6h (oder Meropenem 1–2 g i.v. alle 8h bei schwerer Sepsis/Schock)</li>
<li>Anpassung nach Fokus, Erregern und Antibiogramm</li>
<li>Tägliche Reevaluation: Deeskalation, Fokussanierung</li>
</ul>
<h3>Fokussanierung</h3>
<ul>
<li>Chirurgische/interventionelle Sanierung innerhalb von 6–12h (Abszessdrainage, ERCP, Cholezystektomie, Katheterentfernung, etc.)</li>
</ul>
<h3>Supportive Therapie</h3>
<ul>
<li><strong>Noradrenalin</strong> 0,1–1 µg/kg/min (Ziel MAP ≥ 65 mmHg)</li>
<li>Vasopressin 0,01–0,04 U/min als Add-on</li>
<li><strong>Hydrocortison</strong> 200 mg/d i.v. (50 mg alle 6h) nur bei refraktärem septischem Schock</li>
<li>Ziel-Laktat-Clearance</li>
<li>Restriktive Transfusion (Hb &lt; 7 g/dl)</li>
<li>BZ-Kontrolle (Ziel &lt; 180 mg/dl)</li>
<li>Thromboseprophylaxe (NMH)</li>
<li>Stressulkusprophylaxe (PPI bei Risikopatienten)</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Sepsis = Notfall!</strong> Jede Stunde Verzögerung der Antibiotikagabe erhöht die Letalität!</li>
<li><strong>Hour-1-Bundle:</strong> Laktat, Blutkulturen, Antibiotika, Volumen, Vasopressoren</li>
<li><strong>Laktat</strong> = wichtigster Verlaufsparameter</li>
<li><strong>Fokussuche und -sanierung</strong> sind essenziell</li>
<li>Noradrenalin frühzeitig (nicht erst nach Litern Volumen!)</li>
<li>Hydrocortison nur bei <strong>refraktärem</strong> septischem Schock</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation</strong> (alle Patienten mit Sepsis, insbesondere septischem Schock)</li>
<li><strong>Überwachungsstation/IMC:</strong> Sepsis ohne Organdysfunktion nach initialer Stabilisierung</li>
</ul>`
}
],
stand: "12/24",
sources: `Evans L et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021. Intensive Care Med. 2021;47(11):1181-1247.<br>Singer M et al. The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3). JAMA. 2016;315(8):801-810.`
}
];

if (typeof window.SOP_DATA === "undefined") {
  window.SOP_DATA = [];
}
window.SOP_DATA = window.SOP_DATA.concat(SOP_DATA_3);