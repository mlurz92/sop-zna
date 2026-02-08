const SOP_DATA_4 = [
{
id: "spontan-bakterielle-peritonitis",
title: "Spontan-bakterielle Peritonitis",
category: "Gastroenterologie",
catKey: "gi",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Spontan-bakterielle Peritonitis (SBP):</strong> Bakterielle Infektion des Aszites ohne chirurgisch sanierbare intraabdominelle Infektionsquelle, definiert durch <strong>≥ 250 neutrophile Granulozyten/µl im Aszites</strong></li>
<li>Tritt fast ausschließlich bei Patienten mit <strong>Leberzirrhose und Aszites</strong> auf</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Bakterielle Translokation</strong> aus dem Darm in die mesenterialen Lymphknoten und Blutbahn</li>
<li>Begünstigt durch intestinale Permeabilitätsstörung, portale Hypertension, gestörte Immunabwehr bei Zirrhose</li>
<li><strong>Häufigste Erreger:</strong>
<ul>
<li>Gramnegativ: <strong>E. coli</strong> (häufigster!), Klebsiella pneumoniae</li>
<li>Grampositiv: Streptokokken, Enterokokken, Staphylokokken</li>
</ul>
</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li>Häufig <strong>oligosymptomatisch</strong>!</li>
<li>Fieber (kann fehlen!)</li>
<li>Diffuse Bauchschmerzen</li>
<li>Zunahme des Aszites</li>
<li>Verschlechterung des Allgemeinzustands</li>
<li><strong>Hepatische Enzephalopathie</strong> (Verwirrtheit, Bewusstseinseintrübung – häufig einziges Zeichen!)</li>
<li>Ileus</li>
<li>Verschlechterung der Nierenfunktion (hepatorenales Syndrom)</li>
<li>ggf. Sepsis, septischer Schock</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Die SBP kann <strong>asymptomatisch oder oligosymptomatisch</strong> verlaufen! Bei jedem Zirrhosepatienten mit klinischer Verschlechterung, HE, Fieber oder AKI muss eine <strong>diagnostische Aszitespunktion</strong> erfolgen!</p></div>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1–2x venöser Zugang</li>
<li><strong>BGA</strong> (Laktat? pH? NH₃?)</li>
<li><strong>Labor:</strong> BB, CRP, PCT, E'lyte, NW, GOT, GPT, Bilirubin, Albumin, Gerinnung (INR), <strong>Blutkulturen</strong> (2 Paar)</li>
</ul>
<h3>Diagnostische Aszitespunktion (SCHLÜSSELUNTERSUCHUNG!)</h3>
<ul>
<li><strong>Indikation:</strong> Jeder Zirrhosepatient mit Aszites bei:
<ul>
<li>Neuem Aszites</li>
<li>Stationärer Aufnahme (Routinepunktion!)</li>
<li>Klinischer Verschlechterung, Fieber, Bauchschmerzen, HE, AKI, GI-Blutung</li>
</ul>
</li>
<li><strong>Aszitesanalyse:</strong>
<ul>
<li><strong>Zellzahl + Differenzierung</strong> (≥ 250 Neutrophile/µl = SBP!)</li>
<li>Asziteskultur (Beimpfung von Blutkulturflaschen direkt am Bett → Sensitivität ↑)</li>
<li>Gesamtprotein, Albumin, LDH, Glukose (DD sekundäre Peritonitis)</li>
</ul>
</li>
</ul>
<div class="callout callout-hinweis"><p><strong>Hinweis:</strong> <strong>Sekundäre (chirurgische) Peritonitis</strong> vermuten bei: ≥ 2 Erregern, Protein &gt; 1 g/dl, LDH &gt; oberer Serumnormwert, Glukose &lt; 50 mg/dl → CT-Abdomen + chirurgisches Konsil!</p></div>`
},
{
title: "Therapie",
html: `<h3>Antibiotikatherapie (sofort nach Punktion, nicht auf Kultur warten!)</h3>
<ul>
<li><strong>Ceftriaxon</strong> 2 g i.v. 1x/d für <strong>5–7 Tage</strong> (Mittel der 1. Wahl)</li>
<li>Alternativ: Cefotaxim 2 g i.v. 3x/d</li>
<li>Bei Nosokomialer SBP oder Versagen: Piperacillin/Tazobactam oder Meropenem</li>
</ul>
<h3>Albumin-Gabe (Prävention des hepatorenalen Syndroms!)</h3>
<ul>
<li><strong>Albumin 20%:</strong> 1,5 g/kg KG i.v. am Tag 1, 1 g/kg KG i.v. am Tag 3</li>
<li>Signifikante Reduktion der Mortalität und HRS-Inzidenz!</li>
</ul>
<h3>Therapiekontrolle</h3>
<ul>
<li><strong>Kontrollpunktion nach 48h:</strong> Neutrophile sollten um ≥ 25% abgefallen sein</li>
<li>Falls nicht → Antibiotikawechsel, DD sekundäre Peritonitis</li>
</ul>
<h3>Sekundärprophylaxe</h3>
<ul>
<li><strong>Norfloxacin</strong> 400 mg 1x/d p.o. dauerhaft (oder alternativ Trimethoprim/Sulfamethoxazol)</li>
<li>Primärprophylaxe bei Aszites-Protein &lt; 1,5 g/dl + zusätzlichen Risikofaktoren</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Albumingabe nicht vergessen!</strong> Signifikant reduzierte Mortalität durch Prävention des hepatorenalen Syndroms.</p></div>`
},
{
title: "Merke",
html: `<ul>
<li><strong>≥ 250 Neutrophile/µl im Aszites = SBP</strong> → sofortige Antibiotikatherapie!</li>
<li><strong>Diagnostische Aszitespunktion</strong> bei jedem Zirrhosepatienten mit Verschlechterung!</li>
<li><strong>Albuminsubstitution</strong> (Tag 1 + Tag 3) ist essenziell</li>
<li>Asziteskulturen direkt in Blutkulturflaschen am Bett beimpfen</li>
<li>Kontrollpunktion nach 48h</li>
<li>SBP hat eine <strong>hohe 1-Jahres-Mortalität</strong> (bis 60%) → Evaluation zur <strong>Lebertransplantation!</strong></li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Stationär</strong> (immer): Überwachung, i.v.-Antibiotika, Albumingabe</li>
<li><strong>Intensivstation:</strong> bei Sepsis, septischem Schock, HRS, schwerer HE</li>
</ul>`
}
],
stand: "12/24",
sources: `EASL Clinical Practice Guidelines on the management of ascites, spontaneous bacterial peritonitis, and hepatorenal syndrome. J Hepatol. 2024.<br>Biggins SW et al. Diagnosis, Evaluation, and Management of Ascites, SBP, and HRS: 2021 Practice Guidance by the AASLD. Hepatology. 2021;74(2):1014-1048.`
},
{
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
<li>≥ 2,5 mm in V2–V3 bei Männern &lt; 40 J.</li>
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
<li><strong>Akuter, schwerer Thoraxschmerz</strong> (retrosternal, drückend/engend, Dauer &gt; 20 min, kein Ansprechen auf Nitro)</li>
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
<li><strong>Herzkatheteraktivierung SOFORT</strong> (Contact-to-Wire-Time &lt; 90 min, bei Transfer &lt; 120 min)</li>
<li><strong>ASS</strong> 250 mg i.v. (Loading Dose)</li>
<li><strong>P2Y12-Inhibitor:</strong> Ticagrelor 180 mg p.o. oder Prasugrel 60 mg p.o. (CAVE: Prasugrel nicht bei Z.n. Stroke/TIA, Alter &gt; 75J, Gewicht &lt; 60 kg)</li>
<li><strong>Heparin:</strong> UFH 70–100 IE/kg i.v. Bolus (max. 5000 IE) bei PCI</li>
<li><strong>Nitroglycerin</strong> 0,4 mg s.l. (nicht bei RR syst. &lt; 90, RV-Infarkt, PDE-5-Hemmer)</li>
<li><strong>Morphin</strong> 2–5 mg i.v. bei Schmerzen (zurückhaltend, CAVE: Übelkeit, Hypotonie)</li>
<li><strong>Sauerstoff</strong> nur bei SpO₂ &lt; 90%</li>
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
<li>Innerhalb von <strong>12h</strong> nach Symptombeginn, idealerweise &lt; 10 min nach STEMI-Diagnose</li>
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
<li><strong>Time is Muscle!</strong> Jede Minute zählt. Ziel: Contact-to-Wire &lt; 90 min</li>
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
},
{
id: "status-epilepticus",
title: "Status epilepticus",
category: "Neurologie",
catKey: "neuro",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Status epilepticus (SE):</strong> Anhaltender epileptischer Anfall ≥ 5 min ODER ≥ 2 Anfälle ohne zwischenzeitliche Wiedererlangung des Bewusstseins</li>
<li><strong>Refraktärer SE:</strong> Persistierender SE trotz adäquater Therapie mit Benzodiazepin + einem Antikonvulsivum (Stufe 2)</li>
<li><strong>Superrefraktärer SE:</strong> SE &gt; 24h trotz Narkoseeinleitung (Stufe 3) oder Rezidiv nach Narkosereduktion</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Non-Compliance/Absetzen</strong> von Antikonvulsiva (häufigste Ursache bei bekannter Epilepsie)</li>
<li><strong>Akut symptomatisch:</strong>
<ul>
<li>Zerebrovaskulär (Ischämie, ICB, SAB)</li>
<li>Intrakranielle Infektion (Meningitis, Enzephalitis)</li>
<li>SHT</li>
<li>Hypoxie</li>
<li>Metabolisch (Hypoglykämie, Hyponatriämie, Hypokalzämie, Urämie, Leberversagen)</li>
<li>Intoxikation/Entzug (Alkohol, Benzodiazepine, Kokain, Amphetamine)</li>
<li>Autoimmunenzephalitis (Anti-NMDA-R)</li>
<li>Hirntumor/Metastasen</li>
<li>Eklampsie</li>
</ul>
</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Konvulsiver SE (GCSE):</strong> Bilateral tonisch-klonische Anfallsaktivität ≥ 5 min</li>
<li><strong>Non-konvulsiver SE (NCSE):</strong> Bewusstseinseintrübung ohne oder mit nur subtiler motorischer Aktivität (Augenbewegungen, Lidzucken, Automatismen) – nur per EEG diagnostizierbar!</li>
<li><strong>Fokaler SE:</strong> Anhaltende fokale Anfallsaktivität mit/ohne Bewusstseinsstörung</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Nach prolongiertem konvulsivem SE kann die motorische Aktivität sistieren, obwohl der elektrographische Anfall fortbesteht → <strong>non-konvulsiver SE!</strong> EEG-Monitoring bei persistierender Bewusstlosigkeit!</p></div>`
},
{
title: "Diagnostik",
html: `<ul>
<li><strong>Ersteindruck + ABCDE + Vitalparameter</strong></li>
<li>1–2x venöser Zugang</li>
<li><strong>BZ-Messung sofort!</strong> (Hypoglykämie?)</li>
<li><strong>BGA</strong> (pH? Laktat? Na⁺? Ca²⁺? Glukose?)</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte (Na⁺, Ca²⁺, Mg²⁺), NW, GOT, GPT, CK, <strong>Antikonvulsiva-Spiegel</strong>, Gerinnung, Laktat, Glukose, Ammoniak, Toxikologie-Screening, ggf. β-HCG</li>
<li>12-Kanal-EKG (nach Stabilisierung)</li>
<li><strong>Bildgebung:</strong> cCT nativ (Blutung? Raumforderung? Herniation?) → ggf. cMRT</li>
<li><strong>EEG:</strong> so schnell wie möglich, zwingend bei V.a. non-konvulsiven SE, Monitoring auf ICU</li>
<li>ggf. Lumbalpunktion (bei V.a. Meningitis/Enzephalitis, nach Bildgebung)</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Stufe 1: Initialtherapie (0–5 min) – Benzodiazepine</h3>
<ul>
<li><strong>Midazolam</strong> 10 mg i.m./intranasal/buccal (wenn kein i.v.-Zugang) ODER</li>
<li><strong>Lorazepam</strong> 0,1 mg/kg i.v. (max. 4 mg, Wiederholung nach 5 min möglich) ODER</li>
<li><strong>Diazepam</strong> 0,15–0,2 mg/kg i.v. (max. 10 mg)</li>
<li>Parallel: ABCDE, Sauerstoff, BZ-Messung, venöser Zugang</li>
<li>Bei Hypoglykämie: Glukose 40% 40–80 ml i.v.</li>
<li>Bei V.a. Alkoholentzug/Mangelernährung: Thiamin 100–300 mg i.v.</li>
</ul>
<h3>Stufe 2: 2. Therapiestufe (5–30 min) – Antikonvulsiva i.v.</h3>
<ul>
<li><strong>Levetiracetam</strong> 60 mg/kg i.v. über 10 min (max. 4500 mg) ODER</li>
<li><strong>Valproat</strong> 40 mg/kg i.v. über 10 min (max. 3000 mg; CAVE: nicht bei Lebererkrankung, Schwangerschaft, Mitochondriopathie) ODER</li>
<li><strong>Phenytoin/Fosphenytoin</strong> 20 mg/kg i.v. (max. 50 mg/min; CAVE: RR-Monitoring, EKG-Monitoring, nicht bei AV-Block)</li>
<li>Bei Versagen des 1. Medikaments: zweites Medikament aus dieser Stufe wählen</li>
</ul>
<h3>Stufe 3: Refraktärer SE (ab 30–60 min) – Narkose</h3>
<ul>
<li><strong>Intubation und Beatmung</strong> (RSI)</li>
<li><strong>Midazolam-Perfusor:</strong> 0,2 mg/kg Bolus, dann 0,1–2 mg/kg/h ODER</li>
<li><strong>Propofol-Perfusor:</strong> 2 mg/kg Bolus, dann 4–10 mg/kg/h (CAVE: PRIS bei Langzeitanwendung &gt; 48h) ODER</li>
<li><strong>Thiopental:</strong> 3–5 mg/kg Bolus, dann 3–7 mg/kg/h (CAVE: Immunsuppression, Ileus, Hypotonie)</li>
<li>Ziel: <strong>Burst-Suppression-Muster</strong> im EEG für 24–48h, dann langsames Ausschleichen</li>
</ul>
<h3>Behandelbare Ursachen parallel behandeln!</h3>
<ul>
<li>Hypoglykämie → Glukose</li>
<li>Hyponatriämie → NaCl 3%</li>
<li>Meningitis/Enzephalitis → Antibiotika/Aciclovir</li>
<li>Intoxikation → spezifisches Antidot</li>
<li>Eklampsie → Magnesiumsulfat</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Je länger der Status epilepticus andauert, desto <strong>schlechter das Ansprechen</strong> auf Benzodiazepine (Internalisierung der GABA-Rezeptoren) → <strong>frühzeitig eskalieren!</strong></p></div>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Jeder Anfall ≥ 5 min = Status epilepticus</strong> → sofortige Therapie!</li>
<li><strong>BZ messen!</strong> Hypoglykämie ist eine häufige behandelbare Ursache</li>
<li><strong>Stufe 1:</strong> Benzodiazepine (Midazolam i.m. oder Lorazepam i.v.)</li>
<li><strong>Stufe 2:</strong> Levetiracetam, Valproat oder Phenytoin i.v.</li>
<li><strong>Stufe 3:</strong> Intubation + Narkose (Midazolam/Propofol/Thiopental-Perfusor)</li>
<li>Nicht auf EEG oder Bildgebung warten → sofort behandeln!</li>
<li>An <strong>non-konvulsiven SE</strong> denken bei persistierender Bewusstlosigkeit → EEG!</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation</strong> (refraktärer SE, Intubation, Narkose, non-konvulsiver SE)</li>
<li><strong>Überwachungsstation / Stroke Unit:</strong> nach durchbrochenem SE</li>
</ul>`
}
],
stand: "12/24",
sources: `Trinka E et al. A Definition and Classification of Status Epilepticus – Report of the ILAE Task Force. Epilepsia. 2015;56(10):1515-23.<br>Glauser T et al. Evidence-Based Guideline: Treatment of Convulsive Status Epilepticus. Neurology. 2016;87(8):868-76.<br>Rosenow F et al. S2k-Leitlinie Status epilepticus im Erwachsenenalter. AWMF-Register-Nr. 030-079, 2020.`
},
{
id: "sterbephase-palliativ",
title: "Sterbephase (Palliativ)",
category: "Sonstige",
catKey: "sonst",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Sterbephase:</strong> Die letzten Stunden bis Tage des Lebens bei einem irreversibel verlaufenden Sterbeprozess. Die Erkennung der Sterbephase ist eine <strong>klinische Einschätzung</strong> und basiert auf dem Gesamtbild des Patienten</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li>Endstadium einer nicht-heilbaren Grunderkrankung (fortgeschrittenes Malignom, terminale Organinsuffizienz, fortgeschrittene neurodegenerative Erkrankung, etc.)</li>
</ul>`
},
{
title: "Symptome",
html: `<h3>Zeichen der Sterbephase</h3>
<ul>
<li><strong>Zunehmende Schwäche und Bettlägerigkeit</strong></li>
<li><strong>Zunehmende Bewusstseinsminderung</strong> (Somnolenz → Sopor → Koma)</li>
<li><strong>Interesselosigkeit</strong> an Nahrung und Flüssigkeit</li>
<li><strong>Schluckstörung</strong></li>
<li><strong>Veränderung der Atmung</strong> (Cheyne-Stokes-Atmung, Rasselatmung, agonale Atemmuster)</li>
<li><strong>Periphere Zyanose</strong>, Marmorierung der Haut, kühle Extremitäten</li>
<li><strong>Oligurie/Anurie</strong></li>
<li><strong>Veränderung der Vitalzeichen:</strong> Hypotonie, Tachykardie oder Bradykardie</li>
</ul>
<h3>Häufige belastende Symptome</h3>
<ul>
<li><strong>Schmerzen</strong></li>
<li><strong>Dyspnoe/Atemnot</strong></li>
<li><strong>Rasselatmung</strong> (terminales Rasseln)</li>
<li><strong>Unruhe/Agitation</strong> (terminale Unruhe)</li>
<li><strong>Angst</strong></li>
<li><strong>Übelkeit/Erbrechen</strong></li>
<li><strong>Mundtrockenheit</strong></li>
</ul>`
},
{
title: "Diagnostik",
html: `<ul>
<li><strong>Klinische Einschätzung</strong> im multiprofessionellen Team</li>
<li><strong>Kritische Reflexion:</strong> Ist der Sterbeprozess irreversibel? Gibt es potenziell reversible Ursachen (Opioidüberdosierung → Naloxon? Hyperkalzämie? Infekt?)?</li>
<li><strong>Überprüfung des Patientenwillens:</strong> Patientenverfügung? Vorsorgevollmacht? Mutmaßlicher Wille? Therapiezieländerung besprochen?</li>
<li><strong>Keine weitere belastende Diagnostik</strong> (Blutentnahmen, Bildgebung etc.) wenn Sterbephase erkannt</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Grundprinzipien</h3>
<ul>
<li><strong>Symptomkontrolle</strong> ist das oberste Therapieziel</li>
<li><strong>Nicht-indizierte Maßnahmen beenden:</strong> Kurative Medikamente absetzen (Antibiotika, Antidiabetika, Statine, Antihypertensiva, etc.)</li>
<li><strong>Monitoring beenden</strong> (Vitalzeichen, SpO₂, Laborkontollen)</li>
<li><strong>Venösen Zugang</strong> nur beibehalten wenn für Symptomkontrolle erforderlich, ggf. s.c.-Zugang (Butterfly)</li>
<li><strong>Flüssigkeits-/Nahrungszufuhr:</strong> Orale Zufuhr nur nach Patientenwunsch. Parenterale Flüssigkeit in der Sterbephase in der Regel beenden (keine Lebensverlängerung, kann Rasselatmung/Ödeme verschlechtern)</li>
</ul>
<h3>Schmerzen</h3>
<ul>
<li><strong>Morphin</strong> 2,5–5 mg s.c./i.v. alle 4h + Bedarfsdosis 1/6 der Tagesdosis alle 1h</li>
<li>Bei vorbestehender Opioidtherapie: Dosisanpassung, Umstellung auf s.c.-Perfusor</li>
<li>Ggf. <strong>Morphin-Perfusor s.c.:</strong> 10–30 mg/24h initial (Titration nach Bedarf)</li>
</ul>
<h3>Dyspnoe</h3>
<ul>
<li><strong>Morphin</strong> 2,5–5 mg s.c./i.v. alle 4h (Morphin ist das wirksamste Medikament gegen Atemnot!)</li>
<li>Sauerstoff nur bei subjektiver Erleichterung (nicht routinemäßig, SpO₂-Messung nicht sinnvoll)</li>
<li>Frischluftzufuhr, Ventilator, beruhigende Begleitung</li>
</ul>
<h3>Rasselatmung (terminales Rasseln)</h3>
<ul>
<li><strong>Butylscopolamin</strong> 20 mg s.c. alle 4–8h (oder Perfusor 60–120 mg/24h s.c.)</li>
<li>Alternativ: Glycopyrroniumbromid 0,2 mg s.c. alle 4–6h</li>
<li>Lagerung (Seitenlage, Oberkörperhochlagerung)</li>
<li>Absaugen nur in Ausnahmefällen (belastend!)</li>
<li>Angehörige aufklären (Rasseln belastet Angehörige mehr als den Patienten)</li>
</ul>
<h3>Unruhe/Agitation (terminale Unruhe)</h3>
<ul>
<li><strong>Midazolam</strong> 2,5–5 mg s.c./i.v. alle 2h bei Bedarf (oder Perfusor 10–30 mg/24h s.c.)</li>
<li>Ggf. Haloperidol 0,5–2 mg s.c. (bei Delir-Komponente)</li>
<li>Reversible Ursachen ausschließen: Harnverhalt? Obstipation? Schmerz? Angst?</li>
</ul>
<h3>Übelkeit/Erbrechen</h3>
<ul>
<li><strong>Haloperidol</strong> 0,5–1,5 mg s.c. 2x/d</li>
<li>Alternativ: Levomepromazin 2,5–5 mg s.c. 1–2x/d</li>
</ul>
<h3>Mundpflege</h3>
<ul>
<li>Regelmäßige Mundpflege (Befeuchtung, Lippenpflege)</li>
<li>Kleine Schlucke Wasser oder Eisstückchen nach Wunsch</li>
</ul>
<h3>Palliative Sedierung (Einzelfallentscheidung!)</h3>
<ul>
<li>Bei therapierefraktärem Leid als Ultima ratio</li>
<li>Interdisziplinäre Entscheidung, informierte Zustimmung</li>
<li>Midazolam-Perfusor s.c./i.v., Titration nach Leidenslinderung</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li>Die <strong>Erkennung der Sterbephase</strong> ist eine wichtige ärztliche Aufgabe</li>
<li>Oberstes Ziel: <strong>Symptomkontrolle und Würde</strong></li>
<li><strong>Morphin</strong> ist das Medikament der Wahl bei Schmerz UND Dyspnoe in der Sterbephase</li>
<li><strong>Nicht-indizierte Therapien beenden</strong> (einschließlich i.v.-Flüssigkeit, Monitoring)</li>
<li><strong>Angehörige einbeziehen</strong>, informieren und begleiten</li>
<li>Dokumentation der Therapiezieländerung, Patientenverfügung, Vorsorgevollmacht</li>
<li>Morphin in palliativer Dosierung führt <strong>nicht</strong> zur Lebensverkürzung (Doppelwirkung vs. Tötung)</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Betreuung dort, wo der Patient sich wohlfühlt:</strong> Station, Palliativstation, Hospiz, Zuhause (mit SAPV)</li>
<li>Verlegung auf Intensivstation ist in der Sterbephase <strong>nicht indiziert</strong></li>
</ul>`
}
],
stand: "12/24",
sources: `Leitlinienprogramm Onkologie: S3-Leitlinie Palliativmedizin für Patienten mit einer nicht-heilbaren Krebserkrankung. AWMF-Reg.-Nr. 128-001, 2020.<br>Ellershaw J et al. Care of the dying: a pathway to excellence. Oxford University Press. 2011.`
},
{
id: "stromunfall",
title: "Stromunfall",
category: "Toxikologie",
catKey: "tox",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Stromunfall:</strong> Schädigung des Organismus durch Einwirkung von elektrischem Strom auf den Körper</li>
</ul>
<h3>Einteilung</h3>
<ul>
<li><strong>Niederspannung:</strong> &lt; 1000 V (Haushaltsstrom 230 V) – häufiger, kardiogene Gefahr</li>
<li><strong>Hochspannung:</strong> ≥ 1000 V – thermische Gewebeschädigung, häufig letal</li>
<li><strong>Blitzschlag:</strong> bis 100 Mio. V, sehr kurze Einwirkzeit</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li>Unfälle im Haushalt (Kinder!)</li>
<li>Arbeitsunfälle (Elektriker, Bauarbeiter)</li>
<li>Blitzschlag</li>
<li>Suizidale Absicht (selten)</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Kardial:</strong> Herzrhythmusstörungen (VF bei Niederspannung! Asystolie bei Hochspannung!), ACS, Myokardschädigung</li>
<li><strong>Neurologisch:</strong> Bewusstlosigkeit, Krampfanfälle, Paresen, Parästhesien, Amnesie</li>
<li><strong>Verbrennungen:</strong> Strommarken (Ein- und Austritt), tiefe Gewebsverbrennungen bei Hochspannung (Eisbergphänomen!)</li>
<li><strong>Muskuloskelettal:</strong> Rhabdomyolyse, Kompartmentsyndrom, Frakturen (durch tetanische Muskelkontraktion oder Sturz)</li>
<li><strong>Renal:</strong> AKI durch Rhabdomyolyse/Myoglobinurie</li>
<li><strong>Respiratorisch:</strong> Atemstillstand (Zwerchfellspasmus, zentraler Atemstillstand)</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Eisbergphänomen</strong> bei Hochspannungsunfällen: Das Ausmaß der <strong>inneren Gewebsschädigung</strong> (Muskeln, Gefäße, Nerven) ist weit größer als die äußerlich sichtbaren Verbrennungen!</p></div>`
},
{
title: "Diagnostik",
html: `<ul>
<li><strong>Ersteindruck + ABCDE + Vitalparameter</strong></li>
<li>1–2x venöser Zugang</li>
<li><strong>12-Kanal-EKG</strong> (Arrhythmien? Ischämiezeichen?)</li>
<li><strong>Kontinuierliches EKG-Monitoring</strong> (Arrhythmien können verzögert auftreten!)</li>
<li><strong>BGA</strong> (Laktat? pH? K⁺?)</li>
<li><strong>Labor:</strong> BB, E'lyte, NW, <strong>CK, CK-MB</strong>, <strong>hs-Troponin</strong>, <strong>Myoglobin</strong>, LDH, GOT, GPT, Gerinnung, <strong>Urinstatus</strong> (Myoglobinurie?)</li>
<li><strong>Anamnese:</strong> Spannung? Stromstärke? Stromquelle? AC/DC? Kontaktdauer? Strompfad? Bewusstlosigkeit? Sturz? Tetanusimpfstatus?</li>
<li>Körperliche Untersuchung: <strong>Strommarken</strong> (Ein-/Austrittsstelle)? Verbrennungen? Frakturen? Kompartmentsyndrom?</li>
<li>Rö-Thorax, ggf. CT bei V.a. Frakturen, CT-Abdomen bei Hochspannung</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Sofortmaßnahmen</h3>
<ul>
<li><strong>Eigenschutz!</strong> Stromquelle abschalten, Verunglückten aus dem Stromkreis befreien</li>
<li>CPR bei Herz-Kreislauf-Stillstand (ALS-Algorithmus)</li>
<li>ABCDE-Stabilisierung</li>
<li>Atemwegssicherung bei Bewusstlosigkeit</li>
</ul>
<h3>Kardiales Management</h3>
<ul>
<li><strong>EKG-Monitoring für mindestens 24h</strong> bei: pathologischem EKG, Bewusstlosigkeit, Hochspannung, Strompfad durch Thorax, bekannter Herzerkrankung</li>
<li>Arrhythmie-Behandlung nach Standard-Algorithmen</li>
</ul>
<h3>Verbrennungsmanagement</h3>
<ul>
<li>Wundversorgung der Strommarken</li>
<li>Bei Hochspannung: Verbrennungszentrum (ausgedehnte tiefe Gewebsschädigung!)</li>
</ul>
<h3>Rhabdomyolyse-Prophylaxe/-Therapie</h3>
<ul>
<li><strong>Aggressive Volumengabe</strong> (Ziel-Urinmenge 200–300 ml/h bei CK ↑)</li>
<li>CK-Monitoring alle 6–12h</li>
<li>E'lyt-Kontrolle (Hyperkaliämie!)</li>
</ul>
<h3>Sonstiges</h3>
<ul>
<li>Tetanusprophylaxe aktualisieren</li>
<li>Fasziotomie bei Kompartmentsyndrom</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Eigenschutz hat oberste Priorität!</strong></li>
<li><strong>EKG-Monitoring</strong> bei allen relevanten Stromunfällen</li>
<li>Niederspannung: Hauptgefahr = <strong>Kammerflimmern</strong></li>
<li>Hochspannung: Hauptgefahr = <strong>Gewebedestruktion</strong> + Rhabdomyolyse + Asystolie</li>
<li><strong>Eisbergphänomen:</strong> Innere Schädigung &gt;&gt; äußere Sichtbarkeit</li>
<li><strong>CK, Troponin, Myoglobin</strong> bestimmen → Rhabdomyolyse? Myokardschaden?</li>
<li>Schwangere: fetales Monitoring (Gefahr fetaler Arrhythmien!)</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> Hochspannung, Blitzschlag, Reanimation, pathologisches EKG, Rhabdomyolyse, schwere Verbrennungen</li>
<li><strong>Überwachungsstation (24h):</strong> Niederspannung mit pathologischem EKG, Bewusstlosigkeit, Strompfad durch Thorax</li>
<li><strong>Verbrennungszentrum:</strong> Hochspannungsverbrennung</li>
<li><strong>Ambulant:</strong> Niederspannung, asymptomatisch, normales EKG, kein Bewusstseinsverlust, unauffälliges Labor</li>
</ul>`
}
],
stand: "12/24",
sources: `Waldmann V et al. Electrical injuries. N Engl J Med. 2022;387(16):1492-1502.<br>Pilecky D et al. Risk of cardiac arrhythmias after electrical accidents: a prospective study. Heart. 2019;105(16):1229-1234.`
},
{
id: "synkope",
title: "Synkope",
category: "Leitsymptom",
catKey: "leit",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Synkope:</strong> Transienter Bewusstseinsverlust (T-LOC) durch eine vorübergehende globale zerebrale Minderperfusion, gekennzeichnet durch schnellen Beginn, kurze Dauer und spontane, vollständige Erholung</li>
</ul>
<h3>Einteilung</h3>
<ul>
<li><strong>Reflexsynkope (neurokardiogen):</strong> vasovagal, situativ (Husten, Miktion, Defäkation), Karotissinussyndrom</li>
<li><strong>Orthostatische Synkope:</strong> autonome Dysfunktion, medikamentös, Volumenmangel</li>
<li><strong>Kardiogene Synkope:</strong> Arrhythmien, strukturelle Herzerkrankung (HOCM, Aortenstenose, LAE, Tamponade)</li>
</ul>`
},
{
title: "Ursachen",
html: `<h3>Häufig (low-risk)</h3>
<ul>
<li><strong>Vasovagale Synkope</strong> (häufigste Ursache!): emotionaler Trigger, langes Stehen, Hitze, Schmerz</li>
<li><strong>Situativ:</strong> Miktionssynkope, Hustenstoß, Defäkation, Schlucksynkope</li>
<li><strong>Orthostatisch:</strong> Medikamente (Antihypertensiva, Diuretika, α-Blocker, trizyklische AD, Neuroleptika), Volumenmangel, autonome Neuropathie</li>
</ul>
<h3>Gefährlich (high-risk)</h3>
<ul>
<li><strong>Kardiale Arrhythmien:</strong> AV-Block III°, Sick-Sinus-Syndrom, VT, Torsade de Pointes, Brugada-Syndrom, Long-QT-Syndrom, Schrittmacherdysfunktion</li>
<li><strong>Strukturelle Herzerkrankung:</strong> Aortenstenose, HOCM, Myokardinfarkt, LAE, Perikardtamponade, Aortendissektion</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Synkope bei Belastung</strong> (Sport, Treppensteigen) → immer an <strong>kardiale Ursache</strong> denken (Aortenstenose, HOCM, Arrhythmie)!</p></div>`
},
{
title: "Symptome",
html: `<ul>
<li>Plötzlicher <strong>Bewusstseinsverlust</strong> mit Tonusverlust und Sturz</li>
<li>Kurze Dauer (Sekunden bis max. 1–2 min)</li>
<li><strong>Spontane, vollständige Erholung</strong></li>
<li>ggf. <strong>Prodromi bei vasovagaler Synkope:</strong> Schwindel, Übelkeit, Schwitzen, Wärmegefühl, Tunnelblick, Ohrensausen</li>
<li>ggf. kurze Myoklonien während der Synkope (DD epileptischer Anfall!)</li>
<li>ggf. <strong>keine Prodromi</strong> bei kardiogener Synkope (Alarmzeichen!)</li>
</ul>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter (inkl. orthostasetest: RR liegend + nach 3 min Stehen)</li>
<li>1x venöser Zugang</li>
<li><strong>12-Kanal-EKG</strong> (obligat bei jeder Synkope!)</li>
<li><strong>BGA</strong> (Hb? Glukose? Laktat?)</li>
<li><strong>Labor:</strong> BB, E'lyte, NW, Glukose, hs-Troponin, ggf. D-Dimere, β-HCG</li>
</ul>
<h3>Klinische Untersuchung</h3>
<ul>
<li><strong>Anamnese (WICHTIGSTE Diagnostik!):</strong> Auslöser? Position? Prodromi? Dauer? Zeugenbeobachtung? Zungenbiss (lateral = epi, Zungenspitze = Synkope)? Postiktale Verwirrtheit (&gt; 5 min = epi)? Belastungssynkope? Palpitationen? Thoraxschmerz? Familienanamnese (plötzlicher Herztod!)?</li>
<li><strong>Körperliche Untersuchung:</strong> Herzgeräusch (Aortenstenose)? Karotisgeräusch? Neurologischer Status? Verletzungen durch Sturz?</li>
</ul>
<h3>Risikostratifizierung (High-Risk-Merkmale)</h3>
<ul>
<li>Synkope bei Belastung oder im Liegen</li>
<li>Keine/kurze Prodromi, Palpitationen vor Synkope</li>
<li>Pathologisches EKG (AV-Block, LSB, QTc &gt; 460 ms, Brugada-Muster, WPW)</li>
<li>Strukturelle Herzerkrankung (HI, KHK, HOCM)</li>
<li>Familienanamnese für plötzlichen Herztod (&lt; 40 J.)</li>
<li>Anämie, niedrige SpO₂, Troponin ↑</li>
</ul>`
},
{
title: "Therapie",
html: `<ul>
<li><strong>Ursachenbehandlung!</strong></li>
<li><strong>Vasovagal:</strong> Aufklärung, Trigger-Vermeidung, physische Gegenmanöver (Beine kreuzen, Hände zusammenpressen), ausreichende Flüssigkeitszufuhr</li>
<li><strong>Orthostatisch:</strong> Auslösende Medikamente reduzieren/absetzen, Kompressionsstrümpfe, Flüssigkeit + Kochsalz, ggf. Midodrin</li>
<li><strong>Kardiale Arrhythmie:</strong> Schrittmacher (bei Bradykardie/AV-Block), ICD (bei VT/VF), Katheterablation, Antiarrhythmika</li>
<li><strong>Strukturell:</strong> Aortenklappenersatz (Aortenstenose), PCI/ACVB (ACS), Therapie der LAE, Perikardpunktion</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Anamnese</strong> ist die wichtigste Diagnostik bei Synkope!</li>
<li><strong>EKG ist Pflicht</strong> bei jeder Synkope!</li>
<li><strong>High-Risk-Merkmale</strong> identifizieren → Kardiologische Abklärung!</li>
<li>DD <strong>Epilepsie:</strong> prolongierte Bewusstlosigkeit, postiktale Verwirrtheit &gt; 5 min, lateraler Zungenbiss, Enuresis → eher epileptisch</li>
<li><strong>Synkope bei Belastung = kardiogen bis zum Beweis des Gegenteils!</strong></li>
<li>An <strong>LAE</strong> und <strong>Aortendissektion</strong> als lebensgefährliche Ursachen denken!</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Stationär:</strong> High-Risk-Merkmale, pathologisches EKG, strukturelle Herzerkrankung, Synkope bei Belastung, rezidivierende Synkopen, relevante Verletzungen</li>
<li><strong>Ambulant:</strong> Low-Risk, typische vasovagale Synkope, normales EKG, keine Risikofaktoren</li>
</ul>`
}
],
stand: "12/24",
sources: `Brignole M et al. 2018 ESC Guidelines for the diagnosis and management of syncope. Eur Heart J. 2018;39(21):1883-1948.<br>Costantino G et al. Syncope clinical management in the emergency department: a consensus from the first international workshop on syncope risk stratification in the emergency department. Eur Heart J. 2016;37(19):1493-8.`
},
{
id: "tachykarde-hrst",
title: "Tachykarde Herzrhythmusstörungen",
category: "Kardiologie",
catKey: "kardio",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Tachykardie:</strong> Herzfrequenz &gt; 100/min</li>
</ul>
<h3>Einteilung</h3>
<div class="table-wrap"><table>
<thead><tr><th>Schmaler QRS-Komplex (&lt; 120 ms)</th><th>Breiter QRS-Komplex (≥ 120 ms)</th></tr></thead>
<tbody>
<tr><td>Sinustachykardie</td><td>Ventrikuläre Tachykardie (VT)</td></tr>
<tr><td>Vorhofflimmern/-flattern</td><td>SVT mit aberranter Leitung (Schenkelblock)</td></tr>
<tr><td>AV-Knoten-Reentry-Tachykardie (AVNRT)</td><td>Antidrome AV-Reentry-Tachykardie (WPW)</td></tr>
<tr><td>AV-Reentry-Tachykardie (AVRT)</td><td>Torsade de Pointes</td></tr>
<tr><td>Ektope atriale Tachykardie</td><td>Schrittmacher-vermittelte Tachykardie</td></tr>
</tbody>
</table></div>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Breitkomplextachykardie = VT bis zum Beweis des Gegenteils!</strong> Im Zweifel immer als VT behandeln.</p></div>`
},
{
title: "Symptome",
html: `<ul>
<li>Palpitationen, Herzrasen</li>
<li>Schwindel, Präsynkope, Synkope</li>
<li>Dyspnoe</li>
<li>Thoraxschmerz</li>
<li>ggf. Zeichen der <strong>hämodynamischen Instabilität</strong> (Hypotonie, Bewusstseinseintrübung, Schock, akute Herzinsuffizienz, akute Ischämie)</li>
</ul>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1–2x venöser Zugang</li>
<li><strong>12-Kanal-EKG</strong> (obligat! Regelmäßig/unregelmäßig? Schmal/breit? P-Wellen? Frequenz?)</li>
<li><strong>BGA</strong> (E'lyte! K⁺! Mg²⁺! pH! Laktat!)</li>
<li><strong>Labor:</strong> BB, E'lyte (K⁺, Mg²⁺, Ca²⁺), NW, hs-Troponin, TSH, Gerinnung, ggf. Digoxinspiegel</li>
<li>Anamnese: Beginn? Dauer? Trigger? Vorbekannte Rhythmusstörung? Medikamente? WPW? ICD/SM? Familienanamnese plötzlicher Herztod?</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Instabiler Patient (Hypotonie, Bewusstseinseintrübung, Schock, Ischämie)</h3>
<ul>
<li><strong>Synchronisierte Kardioversion!</strong>
<ul>
<li>Schmalkomplextachykardie: 70–120 J (biphasisch)</li>
<li>Breitkomplextachykardie/VF: 120–200 J (biphasisch)</li>
<li>Bei Bewusstlosigkeit: sofort. Bei Bewusstsein: Kurznarkose (Propofol/Midazolam/Etomidat)</li>
</ul>
</li>
</ul>
<h3>Stabiler Patient – Schmalkomplextachykardie</h3>
<h4>Regelmäßig (AVNRT, AVRT)</h4>
<ul>
<li><strong>Vagale Manöver:</strong> Valsalva-Manöver (modifiziert: pressen → Beine hoch), Karotissinusmassage (CAVE: nur einseitig, kein Geräusch, kein Stroke)</li>
<li><strong>Adenosin:</strong> 6 mg i.v. schnell als Bolus + 20 ml NaCl-Flush → Wirkung nach 10–20 sec → ggf. 12 mg → ggf. 18 mg (CAVE: Asthma = KI! → Verapamil als Alternative)</li>
<li><strong>Verapamil</strong> 5 mg i.v. über 2 min (CAVE: nicht bei WPW mit VHF! Nicht bei Betablocker-Therapie! Nicht bei Herzinsuffizienz!)</li>
</ul>
<h4>Unregelmäßig (Vorhofflimmern/-flattern → s. SOP VHF)</h4>
<h3>Stabiler Patient – Breitkomplextachykardie</h3>
<ul>
<li><strong>VT (oder unklare BKT):</strong>
<ul>
<li><strong>Amiodaron</strong> 300 mg i.v. über 20–60 min (dann 900 mg über 24h)</li>
<li>Alternativ: Procainamid (in DE eingeschränkt verfügbar)</li>
<li>Bei Pulslosigkeit: Defibrillation + ALS</li>
</ul>
</li>
<li><strong>Torsade de Pointes:</strong>
<ul>
<li><strong>Magnesiumsulfat</strong> 2 g i.v. über 10 min</li>
<li>Auslösende Medikamente absetzen</li>
<li>Frequenzsteigerung (Isoprenalin oder passagerer Schrittmacher)</li>
</ul>
</li>
<li><strong>SVT mit Schenkelblock:</strong> Behandlung wie Schmalkomplextachykardie (Adenosin als Diagnostikum)</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Vorhofflimmern bei WPW:</strong> Breitkomplex, unregelmäßig, sehr schnell → <strong>KEIN Adenosin, KEIN Verapamil, KEINE Betablocker, KEIN Digoxin!</strong> → Amiodaron oder Kardioversion!</p></div>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Instabil = sofortige Kardioversion!</strong></li>
<li><strong>Breitkomplextachykardie = VT</strong> bis zum Beweis des Gegenteils</li>
<li>Schmalkomplex + regelmäßig → Vagale Manöver → Adenosin</li>
<li>Adenosin = kontraindiziert bei Asthma → Alternative: Verapamil</li>
<li><strong>VHF bei WPW:</strong> keine AV-Knoten-blockierenden Medikamente!</li>
<li><strong>Torsade de Pointes:</strong> Magnesiumsulfat!</li>
<li>Immer <strong>E'lyte korrigieren</strong> (K⁺, Mg²⁺)</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> hämodynamische Instabilität, VT, Kardioversion, Amiodaron-Gabe</li>
<li><strong>Überwachungsstation:</strong> stabile SVT nach erfolgreicher Terminierung, Monitoring</li>
<li><strong>Ambulant:</strong> bekannte SVT nach erfolgreicher Terminierung, kardiologische Anbindung</li>
</ul>`
}
],
stand: "12/24",
sources: `Brugada J et al. 2019 ESC Guidelines for the management of patients with supraventricular tachycardia. Eur Heart J. 2020;41(5):655-720.<br>Zeppenfeld K et al. 2022 ESC Guidelines for the management of patients with ventricular arrhythmias and the prevention of sudden cardiac death. Eur Heart J. 2022;43(40):3997-4126.`
},
{
id: "thoraxschmerzen",
title: "Thoraxschmerzen",
category: "Leitsymptom",
catKey: "leit",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Thoraxschmerzen:</strong> Schmerzen im Bereich des Brustkorbs. Häufiges Leitsymptom in der Notaufnahme mit einem breiten Spektrum von harmlosen bis lebensbedrohlichen Ursachen</li>
</ul>`
},
{
title: "Ursachen",
html: `<h3>Lebensbedrohlich (Big Five)</h3>
<ul>
<li><strong>Akutes Koronarsyndrom</strong> (STEMI, NSTEMI, instabile AP)</li>
<li><strong>Lungenarterienembolie</strong></li>
<li><strong>Akutes Aortensyndrom</strong> (Aortendissektion)</li>
<li><strong>Spannungspneumothorax</strong></li>
<li><strong>Perikardtamponade / Boerhaave-Syndrom</strong></li>
</ul>
<h3>Kardiovaskulär</h3>
<ul>
<li>Stabile Angina pectoris, Perikarditis, Myokarditis, hypertensive Krise, Takotsubo</li>
</ul>
<h3>Pulmonal</h3>
<ul>
<li>Pneumonie, Pleuritis, Pneumothorax, Pleuraerguss</li>
</ul>
<h3>Gastrointestinal</h3>
<ul>
<li>Gastroösophagealer Reflux, Ösophagusspasmus, Boerhaave-Syndrom, Ulcus, Cholezystitis, Pankreatitis</li>
</ul>
<h3>Muskuloskelettal</h3>
<ul>
<li>Interkostalneuralgie, Kostochondritis (Tietze-Syndrom), BWS-Blockierung, Rippenfraktur</li>
</ul>
<h3>Sonstige</h3>
<ul>
<li>Herpes Zoster, Angststörung/Panikattacke</li>
</ul>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1–2x venöser Zugang</li>
<li><strong>12-Kanal-EKG innerhalb von 10 min!</strong></li>
<li><strong>BGA</strong></li>
<li><strong>Labor:</strong> BB, CRP, E'lyte, NW, <strong>hs-Troponin</strong> (0h + 1h oder 0h + 3h), <strong>D-Dimere</strong> (altersadaptiert), Gerinnung, Lipase</li>
</ul>
<h3>Anamnese (OPQRST)</h3>
<ul>
<li><strong>O</strong>nset: Wann? Plötzlich oder schleichend?</li>
<li><strong>P</strong>rovokation/Palliation: Belastung? Atmungsabhängig? Lageabhängig? Druck?</li>
<li><strong>Q</strong>ualität: Drückend? Stechend? Reißend? Brennend?</li>
<li><strong>R</strong>egion/Radiation: Retrosternal? Linksthorakal? Ausstrahlung?</li>
<li><strong>S</strong>everity: Intensität (0–10)?</li>
<li><strong>T</strong>ime: Dauer? Dynamik? Rezidivierend?</li>
</ul>
<h3>Erweiterte Diagnostik (gezielt)</h3>
<ul>
<li>Rö-Thorax (Pneumothorax, Infiltrat, Erguss, Mediastinalverbreiterung)</li>
<li>CT-Angiographie Thorax (LAE, Aortendissektion)</li>
<li>Echokardiographie (Perikarderguss, Wandbewegungsstörung, RV-Dilatation)</li>
<li>POCUS (Pneumothorax, Erguss, RV-Dilatation, Perikarderguss)</li>
</ul>`
},
{
title: "Therapie",
html: `<ul>
<li>Therapie der <strong>zugrundeliegenden Erkrankung</strong> (s. jeweilige SOP)</li>
<li><strong>Symptomatische Schmerztherapie</strong> nach Ursachenidentifikation</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Bei Thoraxschmerzen <strong>immer zuerst die Big Five ausschließen:</strong> ACS, LAE, Aortendissektion, Spannungspneumothorax, Perikardtamponade/Boerhaave!</p></div>`
},
{
title: "Merke",
html: `<ul>
<li><strong>EKG innerhalb von 10 min!</strong></li>
<li><strong>Big Five</strong> immer systematisch ausschließen</li>
<li><strong>hs-Troponin</strong> + 0h/1h-Algorithmus zum ACS-Ausschluss</li>
<li><strong>D-Dimere</strong> nur bei niedriger/intermediärer klinischer Wahrscheinlichkeit für LAE</li>
<li>Normales EKG + normales Troponin + normales D-Dimer = wichtige Ausschlussdiagnostik, aber: <strong>Aortendissektion kann mit diesen Parametern nicht ausgeschlossen werden!</strong></li>
<li>Muskuloskelettal/gastrointestinal = Ausschlussdiagnose!</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> Big Five bestätigt (ACS, LAE, Dissektion, Tamponade, Pneumothorax)</li>
<li><strong>Chest Pain Unit / Überwachung:</strong> ACS-Ausschluss läuft (Troponin-Verlauf)</li>
<li><strong>Ambulant:</strong> Big Five ausgeschlossen, stabile nicht-kardiale Ursache identifiziert</li>
</ul>`
}
],
stand: "12/24",
sources: `Byrne RA et al. 2023 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J. 2023.<br>Bruyninckx R et al. Signs and symptoms in diagnosing acute myocardial infarction and acute coronary syndrome: a diagnostic meta-analysis. Br J Gen Pract. 2008;58(547):105-111.`
},
{
id: "thrombozytopenie",
title: "Thrombozytopenie",
category: "Hämatologie",
catKey: "haem",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Thrombozytopenie:</strong> Thrombozyten &lt; 150.000/µl</li>
</ul>
<div class="table-wrap"><table>
<thead><tr><th>Schweregrad</th><th>Thrombozyten</th><th>Blutungsrisiko</th></tr></thead>
<tbody>
<tr><td>Mild</td><td>100.000–150.000/µl</td><td>Gering</td></tr>
<tr><td>Moderat</td><td>50.000–100.000/µl</td><td>Moderat bei Trauma/OP</td></tr>
<tr><td>Schwer</td><td>20.000–50.000/µl</td><td>Erhöht</td></tr>
<tr><td>Kritisch</td><td>&lt; 20.000/µl</td><td>Spontanblutungen möglich</td></tr>
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
<li>Indikation: Thrombo &lt; 10.000/µl (prophylaktisch), &lt; 50.000 bei aktiver Blutung/OP, &lt; 100.000 bei ZNS-Blutung/neurochirurgischer OP</li>
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
<li><strong>Stationär:</strong> schwere Thrombozytopenie (&lt; 20.000), aktive Blutung, neue Diagnose mit Abklärungsbedarf</li>
<li><strong>Ambulant:</strong> milde/moderate Thrombozytopenie, keine Blutung, bekannte stabile ITP</li>
</ul>`
}
],
stand: "12/24",
sources: `Neunert C et al. ASH 2019 Guidelines for Immune Thrombocytopenia. Blood Adv. 2019;3(23):3829-3866.<br>Provan D et al. Updated international consensus report on the investigation and management of primary immune thrombocytopenia. Blood Adv. 2019;3(22):3780-3817.`
},
{
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
<li>Umfangsdifferenz (&gt; 3 cm Wadenumfang Seitenvergleich)</li>
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
<li><strong>D-Dimere:</strong> altersadaptiert (&gt; 50 J.: Alter × 10 ng/ml). Negativ + geringe Wahrscheinlichkeit → TVT ausgeschlossen</li>
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
<li>Antikoagulation sofort beginnen bei hoher klinischer Wahrscheinlichkeit!</li>
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
},
{
id: "transiente-globale-amnesie",
title: "Transiente globale Amnesie",
category: "Neurologie",
catKey: "neuro",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Transiente globale Amnesie (TGA):</strong> Akut einsetzende, vorübergehende Episode einer anterograden Amnesie (Unfähigkeit, neue Gedächtnisinhalte zu speichern) mit repetitivem Fragen, ohne fokal-neurologisches Defizit, Dauer typischerweise 1–24h mit vollständiger Rückbildung</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li>Ätiologie <strong>nicht sicher geklärt</strong></li>
<li>Hypothesen: venöse Kongestion im Hippocampus (Valsalva-artige Manöver), Cortical Spreading Depression, transiente Ischämie</li>
<li><strong>Häufige Trigger:</strong> körperliche Anstrengung, emotionaler Stress, Geschlechtsverkehr, Kälteexposition, Valsalva-Manöver, Schmerz</li>
<li>Rezidivrate: ca. 5–8%/Jahr</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Akut einsetzende anterograde Amnesie</strong> (kann sich an nichts Neues erinnern)</li>
<li><strong>Repetitives Fragen</strong> (stellt immer wieder die gleichen Fragen)</li>
<li>Ggf. milde retrograde Amnesie (Stunden bis Tage vor dem Ereignis)</li>
<li><strong>Keine Bewusstseinstrübung</strong> (Patient ist wach, orientiert zu Person)</li>
<li><strong>Kein fokal-neurologisches Defizit</strong></li>
<li><strong>Keine epileptischen Anfälle</strong></li>
<li>Dauer typisch: 1–24h (Mittel: 4–8h)</li>
<li><strong>Vollständige Rückbildung</strong> (amnestische Lücke für die Episode bleibt)</li>
</ul>`
},
{
title: "Diagnostik",
html: `<h3>Diagnostische Kriterien (Hodges &amp; Warlow)</h3>
<ol>
<li>Anfall von einem Zeugen beobachtet</li>
<li>Akute anterograde Amnesie während des Anfalls</li>
<li>Kein Bewusstseinsverlust, keine Identitätsstörung</li>
<li>Kein fokal-neurologisches Defizit</li>
<li>Keine epileptischen Merkmale</li>
<li>Rückbildung innerhalb von 24h</li>
<li>Kein rezentes SHT oder aktive Epilepsie</li>
</ol>
<h3>Diagnostik</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1x venöser Zugang</li>
<li><strong>BZ-Messung</strong></li>
<li><strong>Labor:</strong> BB, CRP, E'lyte, NW, BZ, TSH</li>
<li><strong>12-Kanal-EKG</strong></li>
<li><strong>cMRT (DWI):</strong> kann punktförmige DWI-Restriktionen im Hippocampus zeigen (typisch, aber nicht immer vorhanden und erst nach 24–72h sichtbar)</li>
<li>cCT (zum Ausschluss von DD wie ICB)</li>
<li>Neurologischer Status (MUSS unauffällig sein!)</li>
</ul>`
},
{
title: "Therapie",
html: `<ul>
<li><strong>Keine spezifische Therapie erforderlich</strong></li>
<li>Beruhigung des Patienten und der Angehörigen</li>
<li>Beobachtung bis zur vollständigen Rückbildung</li>
<li>Keine Antikoagulation, keine Thrombozytenaggregationshemmer (TGA ist kein Schlaganfall!)</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li>TGA = <strong>benigne</strong>, selbstlimitierend, gute Prognose</li>
<li><strong>Ausschlussdiagnose!</strong> Immer DD Schlaganfall, Epilepsie, Intoxikation, Hypoglykämie, CVST ausschließen</li>
<li><strong>Fokal-neurologisches Defizit schließt TGA aus</strong> → Stroke-Diagnostik!</li>
<li>cMRT (DWI) kann hippocampale Läsionen zeigen (nach 24–72h)</li>
<li>Kein erhöhtes Schlaganfallrisiko nach TGA</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Überwachung</strong> bis zur vollständigen Rückbildung (wenige Stunden)</li>
<li>Entlassung nach Ausschluss gefährlicher DD und Rückbildung der Amnesie</li>
<li>Neurologische Nachsorge empfehlen</li>
</ul>`
}
],
stand: "12/24",
sources: `Arena JE et al. Transient Global Amnesia. Mayo Clin Proc. 2020;95(11):2522-2529.<br>Hodges JR et al. Transient global amnesia: towards a standardized definition. J Neurol Neurosurg Psychiatry. 1990;53(10):834-43.`
},
{
id: "tumorlysesyndrom",
title: "Tumorlysesyndrom",
category: "Hämatologie",
catKey: "haem",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Tumorlysesyndrom (TLS):</strong> Onkologischer Notfall durch massiven Zellzerfall (spontan oder therapieinduziert) mit Freisetzung intrazellulärer Bestandteile, die zu metabolischen Entgleisungen und Organversagen führen</li>
</ul>
<h3>Cairo-Bishop-Kriterien (Labor-TLS: ≥ 2 von 4)</h3>
<div class="table-wrap"><table>
<thead><tr><th>Parameter</th><th>Laborveränderung</th></tr></thead>
<tbody>
<tr><td>Harnsäure</td><td>≥ 8 mg/dl oder +25%</td></tr>
<tr><td>Kalium</td><td>≥ 6 mmol/l oder +25%</td></tr>
<tr><td>Phosphat</td><td>≥ 4,5 mg/dl oder +25%</td></tr>
<tr><td>Calcium</td><td>≤ 7 mg/dl oder −25%</td></tr>
</tbody>
</table></div>
<p><strong>Klinisches TLS:</strong> Labor-TLS + Organmanifestation (AKI, Herzrhythmusstörungen, Krampfanfälle, Tod)</p>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Hochproliferative Malignome</strong> mit hoher Tumorlast:
<ul>
<li>Akute lymphatische Leukämie (ALL) – höchstes Risiko!</li>
<li>Burkitt-Lymphom</li>
<li>Akute myeloische Leukämie (AML) bei hoher Leukozytenzahl</li>
<li>Aggressives NHL</li>
</ul>
</li>
<li>Selten bei soliden Tumoren</li>
<li>Auslöser: Chemotherapie, Bestrahlung, Steroide, Immuntherapie, spontan</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Hyperkaliämie:</strong> Muskelschwäche, Arrhythmien, Herzstillstand</li>
<li><strong>Hyperphosphatämie:</strong> sekundäre Hypokalzämie → Tetanie, Krampfanfälle, Arrhythmien</li>
<li><strong>Hyperurikämie:</strong> AKI durch Uratkristallnephropathie</li>
<li><strong>Hypokalzämie:</strong> Krämpfe, QTc-Verlängerung</li>
<li><strong>AKI</strong> (Oligurie/Anurie, Kreatinin ↑)</li>
<li>Übelkeit, Erbrechen, Diarrhoe</li>
</ul>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1–2x venöser Zugang</li>
<li><strong>12-Kanal-EKG</strong> (Hyperkaliämie-Zeichen? QTc?)</li>
<li><strong>BGA</strong> (K⁺! Ca²⁺! pH! Laktat!)</li>
<li><strong>Labor:</strong> BB, <strong>K⁺, Phosphat, Ca²⁺ (ionisiert), Harnsäure</strong>, NW, LDH, GOT, GPT, Gerinnung</li>
<li>Urin-Analyse (Uratkristalle? Urin-pH?)</li>
<li>Monitoring alle 4–6h (E'lyte, NW, Harnsäure)</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Prävention (bei Risikoentitäten VOR Therapiebeginn!)</h3>
<ul>
<li><strong>Aggressive Hydrierung:</strong> 2,5–3 l/m²/d i.v. (Ziel: Urinmenge 80–100 ml/m²/h)</li>
<li><strong>Rasburicase</strong> 0,2 mg/kg i.v. Einmaldosis (bei hohem Risiko) → enzymatischer Harnsäureabbau, schnelle Wirkung</li>
<li><strong>Allopurinol</strong> 300–600 mg/d p.o. (bei niedrigem/mittlerem Risiko) → hemmt Harnsäurebildung (nicht abbauend!)</li>
<li>Keine routinemäßige Urinalkalisierung mehr empfohlen</li>
</ul>
<h3>Therapie des manifesten TLS</h3>
<ul>
<li><strong>Rasburicase</strong> 0,2 mg/kg i.v. (bei erhöhter Harnsäure, sofortige Wirkung)</li>
<li><strong>Hyperkaliämie behandeln</strong> (s. SOP Hyperkaliämie): Calciumgluconat, Insulin/Glukose, Salbutamol, ggf. Dialyse</li>
<li><strong>Hyperphosphatämie:</strong> Phosphatbinder (Sevelamer, Calciumacetat), Hydrierung, Dialyse</li>
<li><strong>Hypokalzämie:</strong> Calciumsubstitution nur bei symptomatischer Hypokalzämie (CAVE: Calciumphosphat-Präzipitation!)</li>
<li><strong>AKI/Dialyse:</strong> Indikation zur Hämodialyse bei refraktärer Hyperkaliämie, Anurie, Volumenüberladung, therapierefraktärer Elektrolytentgleisung</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Rasburicase</strong> ist kontraindiziert bei <strong>G6PD-Mangel</strong> (Hämolyserisiko!) → vor Gabe fragen! Laborphänomen: Rasburicase baut Harnsäure auch im Probenröhrchen ab → Probe sofort auf Eis!</p></div>`
},
{
title: "Merke",
html: `<ul>
<li>TLS ist ein <strong>onkologischer Notfall</strong> – Prävention ist entscheidend!</li>
<li><strong>Aggressive Hydrierung</strong> ist die wichtigste Maßnahme</li>
<li><strong>Rasburicase</strong> bei hohem Risiko und erhöhter Harnsäure (CAVE: G6PD-Mangel!)</li>
<li>Monitoring alle <strong>4–6h</strong> (K⁺, Ca²⁺, PO₄, Harnsäure, Kreatinin)</li>
<li>Dialyse frühzeitig erwägen bei AKI/refraktärer Elektrolytentgleisung</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> manifestes klinisches TLS, Hyperkaliämie mit EKG-Veränderungen, AKI, Dialysebedarf</li>
<li><strong>Überwachungsstation:</strong> hohes Risiko für TLS, engmaschiges Monitoring</li>
</ul>`
}
],
stand: "12/24",
sources: `Cairo MS et al. Recommendations for the evaluation of risk and prophylaxis of tumour lysis syndrome (TLS) in adults and children with malignant diseases: an expert TLS panel consensus. Br J Haematol. 2010;149(4):578-86.<br>Howard SC et al. The Tumor Lysis Syndrome. N Engl J Med. 2011;364(19):1844-54.`
},
{
id: "unklare-vigilanzminderung",
title: "Unklare Vigilanzminderung",
category: "Leitsymptom",
catKey: "leit",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Vigilanzminderung:</strong> Quantitative Bewusstseinsstörung mit reduzierter Wachheit und Reaktionsfähigkeit</li>
</ul>
<div class="table-wrap"><table>
<thead><tr><th>Grad</th><th>Beschreibung</th></tr></thead>
<tbody>
<tr><td><strong>Somnolenz</strong></td><td>Abnorme Schläfrigkeit, durch Ansprache/leichte Reize erweckbar</td></tr>
<tr><td><strong>Sopor</strong></td><td>Nur durch starke Reize (Schmerzreiz) kurz erweckbar</td></tr>
<tr><td><strong>Koma</strong></td><td>Nicht erweckbar, keine gezielte Reaktion auf Schmerzreiz</td></tr>
</tbody>
</table></div>`
},
{
title: "Ursachen",
html: `<p><strong>Eselsbrücke: AEIOU-TIPS</strong></p>
<ul>
<li><strong>A</strong>lkohol / Azidose</li>
<li><strong>E</strong>pilepsie / Enzephalopathie / Elektrolyte</li>
<li><strong>I</strong>nsulin (Hypo-/Hyperglykämie)</li>
<li><strong>O</strong>piate / Intoxikation</li>
<li><strong>U</strong>rämie</li>
<li><strong>T</strong>rauma / Temperatur (Hypo-/Hyperthermie)</li>
<li><strong>I</strong>nfektion (Meningitis, Enzephalitis, Sepsis)</li>
<li><strong>P</strong>sychiatrie (psychogene Unresponsiveness)</li>
<li><strong>S</strong>troke (Ischämie, Blutung, SAB) / Schock</li>
</ul>`
},
{
title: "Diagnostik",
html: `<h3>Sofortmaßnahmen</h3>
<ul>
<li><strong>Ersteindruck + ABCDE + Vitalparameter</strong></li>
<li><strong>GCS</strong> (Glasgow Coma Scale) dokumentieren</li>
<li>1–2x venöser Zugang</li>
<li><strong>BZ sofort messen!</strong> (Hypoglykämie?)</li>
<li><strong>BGA</strong> (pH? Laktat? CO-Hb? Na⁺? K⁺? Ca²⁺? Glukose? NH₃?)</li>
<li><strong>Pupillen:</strong> Weite? Seitendifferenz? Lichtreaktion?</li>
<li><strong>Temperatur!</strong></li>
</ul>
<h3>Labor</h3>
<ul>
<li>BB, CRP, E'lyte (Na⁺, K⁺, Ca²⁺, Mg²⁺), NW, GOT, GPT, <strong>Ammoniak</strong>, LDH, TSH, Cortisol, <strong>Glukose</strong>, Gerinnung, <strong>hs-Troponin</strong>, Laktat, CK, <strong>Toxikologie-Screening</strong> (Urin + Serum), Ethanol, ggf. Medikamentenspiegel, ggf. Blutkulturen</li>
</ul>
<h3>Klinische Untersuchung</h3>
<ul>
<li><strong>Anamnese</strong> (Fremdanamnese!): Vorerkrankungen? Medikamente? Drogen? Letzte Nahrung? Trauma? Epilepsie? Diabetes? Lebererkrankung? Psychische Erkrankung? Suizidalität? Ablaufbeschreibung?</li>
<li><strong>Neurologischer Status:</strong> GCS? Pupillen? Hirnstammreflexe? Meningismus? Fokal-neurologisches Defizit? Muskeltonus? Reflexe? Babinski?</li>
<li><strong>Körperliche Untersuchung:</strong> Trauma? Einstichstellen? Zungenbiss? Einnässen? Foetor? Haut (Ikterus, Exanthem, Marmorierung)? Nadelstichmale?</li>
</ul>
<h3>Bildgebung</h3>
<ul>
<li><strong>cCT nativ</strong> (bei unklarer Ursache, immer bei V.a. intrakranielle Pathologie)</li>
<li>ggf. CT-Angiographie (Basilaristhrombose? Dissektion?)</li>
<li>ggf. cMRT (Enzephalitis? CVST? Hirnstammläsion?)</li>
</ul>
<h3>Weitere Diagnostik</h3>
<ul>
<li><strong>12-Kanal-EKG</strong></li>
<li>ggf. <strong>Lumbalpunktion</strong> (Meningitis? Enzephalitis? SAB?)</li>
<li>ggf. <strong>EEG</strong> (non-konvulsiver Status epilepticus?)</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Sofortmaßnahmen</h3>
<ul>
<li><strong>ABCDE-Stabilisierung</strong></li>
<li>Atemwegssicherung bei GCS ≤ 8 (Intubation)</li>
<li><strong>Hypoglykämie:</strong> Glukose 40% i.v.</li>
<li><strong>Opioidintoxikation:</strong> Naloxon 0,4–2 mg i.v. titrierend</li>
<li><strong>Benzodiazepinintoxikation:</strong> Flumazenil 0,2 mg i.v. (CAVE: Krampfanfälle bei Abhängigkeit!)</li>
<li><strong>Wernicke-Enzephalopathie:</strong> Thiamin 300–500 mg i.v. (bei V.a. Alkoholismus vor Glukosegabe!)</li>
</ul>
<h3>Ursachenspezifische Therapie</h3>
<ul>
<li>Meningitis → sofortige Antibiotika + Dexamethason</li>
<li>Status epilepticus → Antikonvulsiva (s. SOP SE)</li>
<li>Schlaganfall → Stroke-Unit, ggf. Lyse/Thrombektomie</li>
<li>Intoxikation → Antidot + supportive Therapie</li>
<li>Hepatische Enzephalopathie → Lactulose + Rifaximin</li>
<li>Sepsis → Antibiotika + Volumen + Vasopressoren</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li><strong>BZ sofort messen!</strong> (häufigste behandelbare Ursache)</li>
<li><strong>GCS</strong> dokumentieren und verlaufsmäßig kontrollieren</li>
<li><strong>Pupillen:</strong> Miosis (Opioide), Mydriasis (Sympathomimetika, Hirndruck), anisocor (Herniation!)</li>
<li><strong>GCS ≤ 8 → Atemwegssicherung!</strong></li>
<li>An <strong>reversible Ursachen</strong> denken: Hypoglykämie, Intoxikation, SE, Meningitis</li>
<li><strong>cCT bei jeder unklaren Vigilanzminderung</strong></li>
<li>An <strong>non-konvulsiven SE</strong> denken → EEG!</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> GCS ≤ 8, Intubation, hämodynamische Instabilität, intrakranielle Pathologie</li>
<li><strong>Überwachungsstation:</strong> leichte Vigilanzminderung mit identifizierter, behandelbarer Ursache</li>
</ul>`
}
],
stand: "12/24",
sources: `Horsting MWB et al. Systematic review of the management of patients presenting to the emergency department with an altered level of consciousness. Eur J Emerg Med. 2023;30(1):1-7.<br>Edlow JA et al. Diagnosis of DKA, nonconvulsive status epilepticus, and other causes of altered mental status in the emergency department. Emerg Med Clin North Am. 2023.`
},
{
id: "untere-gastrointestinale-blutung",
title: "Untere Gastrointestinale Blutung",
category: "Gastroenterologie",
catKey: "gi",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Untere GI-Blutung:</strong> Blutung aus dem Gastrointestinaltrakt distal des Treitz-Bandes (Jejunum, Ileum, Kolon, Rektum, Anus)</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Divertikulose/-blutung</strong> (häufigste Ursache im Alter!)</li>
<li><strong>Angiodysplasien</strong></li>
<li><strong>Kolorektales Karzinom / Polypen</strong></li>
<li><strong>Hämorrhoiden</strong> (häufigste Ursache rektaler Blutung!)</li>
<li><strong>Analfissur</strong></li>
<li><strong>Ischämische Kolitis</strong></li>
<li><strong>Chronisch-entzündliche Darmerkrankungen</strong> (M. Crohn, Colitis ulcerosa)</li>
<li><strong>Infektiöse Kolitis</strong></li>
<li>Meckel-Divertikel (jüngere Patienten)</li>
<li>Post-Polypektomie-Blutung</li>
<li>Strahlenkolitis</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Hämatochezie</strong> (frisches Blut per rectum) – Leitsymptom!</li>
<li>ggf. Meläna (bei langsamer Blutung aus rechtem Kolon/Dünndarm)</li>
<li>ggf. Hypovolämie-/Schockzeichen bei massiver Blutung</li>
<li>ggf. Bauchschmerzen, Krämpfe</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> 10–15% der <strong>Hämatochezien</strong> sind Ausdruck einer <strong>massiven oberen GI-Blutung!</strong> Immer obere GI-Blutung als Differentialdiagnose bedenken!</p></div>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li><strong>2x großlumige venöse Zugänge</strong></li>
<li><strong>BGA</strong> (Hb! Laktat!)</li>
<li><strong>Labor:</strong> BB, Gerinnung (INR, aPTT, Fibrinogen), <strong>Kreuzblut + Blutgruppe</strong>, E'lyte, NW</li>
<li><strong>DRU</strong> (Blut? Hämorrhoiden?)</li>
<li>Anamnese: Medikamente (Antikoagulantien, NSAR, ASS)? Vorherige GI-Blutung? Divertikelerkrankung? CED? Polypen/Ca?</li>
</ul>
<h3>Endoskopie</h3>
<ul>
<li><strong>Koloskopie</strong> (innerhalb von 24h nach Stabilisierung): Goldstandard für Diagnose und ggf. Intervention</li>
<li><strong>ÖGD:</strong> zum Ausschluss einer oberen GI-Blutung bei Hämatochezie + hämodynamischer Instabilität</li>
</ul>
<h3>Weitere Bildgebung (bei massiver, nicht-lokalisierbarer Blutung)</h3>
<ul>
<li><strong>CT-Angiographie:</strong> bei aktiver Blutung und instabilem Patienten (Blutungsquelle lokalisieren)</li>
<li>Angiographie + Embolisation (bei aktiver Blutung, endoskopisch nicht beherrschbar)</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Stabilisierung</h3>
<ul>
<li>ABCDE-Schema</li>
<li>Volumentherapie, Transfusion bei Hb &lt; 7 g/dl (restriktiv)</li>
<li>Antikoagulantien pausieren/antagonisieren bei relevanter Blutung</li>
</ul>
<h3>Endoskopische Therapie</h3>
<ul>
<li>Clipping, Thermokoagulation, Injektion bei identifizierter Blutungsquelle</li>
</ul>
<h3>Interventionelle/Chirurgische Therapie</h3>
<ul>
<li>Angiographische Embolisation bei endoskopisch nicht beherrschbarer Blutung</li>
<li>Chirurgische Resektion (Ultima ratio)</li>
</ul>
<h3>Spezifisch</h3>
<ul>
<li>Divertikelblutung sistiert in 80% spontan</li>
<li>Hämorrhoiden/Analfissur: konservative/lokale Therapie</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Hämatochezie ≠ automatisch untere GI-Blutung!</strong> Obere GI-Blutung ausschließen!</li>
<li><strong>Kreuzblut sofort!</strong></li>
<li><strong>Koloskopie innerhalb von 24h</strong></li>
<li>CT-Angiographie bei hämodynamisch instabiler Blutung</li>
<li>Divertikelblutung ist die häufigste Ursache der unteren GI-Blutung im Alter</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> hämodynamische Instabilität, massive Blutung</li>
<li><strong>Normalstation:</strong> stabile Blutung, Koloskopie geplant</li>
<li><strong>Ambulant:</strong> minimale Blutung (Hämorrhoiden, Fissur), stabil, ambulante Koloskopie geplant</li>
</ul>`
}
],
stand: "12/24",
sources: `Strate LL et al. ACG Clinical Guideline: Management of Patients With Acute Lower Gastrointestinal Bleeding. Am J Gastroenterol. 2016;111(4):459-474.`
},
{
id: "vena-cava-superior-syndrom",
title: "Vena-cava-superior-Syndrom",
category: "Hämatologie",
catKey: "haem",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Vena-cava-superior-Syndrom (VCSS):</strong> Obstruktion der Vena cava superior mit gestörtem venösem Rückfluss aus Kopf, Hals und oberen Extremitäten. Häufig onkologischer Notfall</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Maligne Ursachen (60–85%):</strong>
<ul>
<li>Bronchialkarzinom (häufigste Ursache, v.a. kleinzellig/rechtsseitig)</li>
<li>Lymphom (v.a. mediastinal)</li>
<li>Thymom</li>
<li>Mediastinale Metastasen</li>
</ul>
</li>
<li><strong>Nicht-maligne Ursachen (15–40%):</strong>
<ul>
<li>ZVK-assoziierte Thrombose (zunehmend häufig!)</li>
<li>Schrittmacher-/ICD-Sonden-Thrombose</li>
<li>Mediastinalfibrose</li>
<li>Aortenaneurysma</li>
</ul>
</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Gesichtsschwellung</strong> (morgens schlimmer, verstärkt beim Vorbeugen)</li>
<li><strong>Halsschwellung, Halsvenenstauung</strong></li>
<li><strong>Armschwellung</strong> (ein- oder beidseitig)</li>
<li><strong>Kollateralvenenzeichnung</strong> (Thoraxwand)</li>
<li><strong>Plethora</strong> (Gesichtsrötung/-zyanose)</li>
<li><strong>Dyspnoe</strong> (Larynxödem, Trachealödem)</li>
<li>Husten, Heiserkeit</li>
<li>Kopfschmerzen (venöse Stauung)</li>
<li>Sehstörungen, Schwindel</li>
<li>ggf. <strong>Stridor</strong> (Trachealobstruktion → Notfall!)</li>
<li>ggf. <strong>Hirnödem</strong> bei schwerer Obstruktion</li>
</ul>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1x venöser Zugang (<strong>in unterer Extremität!</strong> Nicht in oberer Extremität bei VCSS!)</li>
<li><strong>CT-Thorax mit KM</strong> (Goldstandard): Lokalisation/Ausmaß der Obstruktion, Thrombose? Tumor? Lymphadenopathie?</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte, NW, Gerinnung, LDH, ggf. Tumormarker</li>
<li><strong>Histologische Sicherung</strong> (wenn Diagnose nicht bekannt): Bronchoskopie, CT-gesteuerte Biopsie, Mediastinoskopie</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Venöse Zugänge und Blutentnahmen <strong>NICHT an der oberen Extremität</strong> bei VCSS (gestörter Abfluss, Medikamente erreichen nicht die Zirkulation)!</p></div>`
},
{
title: "Therapie",
html: `<h3>Allgemeinmaßnahmen</h3>
<ul>
<li>Oberkörperhochlagerung (30–45°)</li>
<li>Sauerstoff bei Dyspnoe</li>
<li>Atemwegssicherung bei Stridor (CAVE: Intubation kann schwierig sein bei Ödem!)</li>
</ul>
<h3>Dexamethason</h3>
<ul>
<li>Dexamethason 8–16 mg i.v. (Ödemreduktion, v.a. bei Lymphom und Trachealödem)</li>
</ul>
<h3>Antikoagulation</h3>
<ul>
<li>Bei Thrombose: therapeutische Antikoagulation (NMH/UFH)</li>
</ul>
<h3>Endovaskulärer Stent</h3>
<ul>
<li><strong>VCS-Stenting:</strong> schnelle Symptomlinderung (innerhalb von 24–72h), insbesondere bei schwerer Symptomatik</li>
</ul>
<h3>Onkologische Therapie</h3>
<ul>
<li>Chemotherapie (v.a. bei kleinzelligem Bronchialkarzinom, Lymphom → schnelles Ansprechen!)</li>
<li>Strahlentherapie</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li><strong>VCSS ist meist kein sofortiger Notfall</strong>, es sei denn: <strong>Stridor, Hirnödem, hämodynamische Instabilität</strong></li>
<li><strong>CT-Thorax mit KM</strong> ist die Schlüsseluntersuchung</li>
<li>Venöser Zugang nur an <strong>unterer Extremität!</strong></li>
<li><strong>Histologie vor Therapie</strong> anstreben (Therapie hängt von Tumorentität ab)</li>
<li>Stenting für schnelle Symptomkontrolle bei schwerer Symptomatik</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Stationär</strong> (immer): onkologische Abklärung und Therapie</li>
<li><strong>Intensivstation:</strong> bei Stridor, Hirnödem, hämodynamischer Kompromittierung</li>
</ul>`
}
],
stand: "12/24",
sources: `Wilson LD et al. Superior Vena Cava Syndrome with Malignant Causes. N Engl J Med. 2007;356(18):1862-9.<br>Defined A et al. Superior vena cava syndrome: a contemporary review. Clin Oncol (R Coll Radiol). 2021;33(5):e199-e207.`
},
{
id: "vorhofflimmern",
title: "Vorhofflimmern",
category: "Kardiologie",
catKey: "kardio",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Vorhofflimmern (VHF):</strong> Häufigste anhaltende Herzrhythmusstörung, charakterisiert durch unkoordinierte, hochfrequente Vorhoferregung (350–600/min) mit <strong>absoluter Arrhythmie</strong> der Kammerüberleitung</li>
</ul>
<h3>Einteilung</h3>
<div class="table-wrap"><table>
<thead><tr><th>Typ</th><th>Beschreibung</th></tr></thead>
<tbody>
<tr><td><strong>Erstdiagnostiziert</strong></td><td>Erstmalig diagnostiziert</td></tr>
<tr><td><strong>Paroxysmal</strong></td><td>Selbstlimitierend, &lt; 7 Tage</td></tr>
<tr><td><strong>Persistierend</strong></td><td>&gt; 7 Tage oder Kardioversion erforderlich</td></tr>
<tr><td><strong>Lang-persistierend</strong></td><td>&gt; 12 Monate</td></tr>
<tr><td><strong>Permanent</strong></td><td>Akzeptiert, keine Rhythmuskontrolle</td></tr>
</tbody>
</table></div>`
},
{
title: "Ursachen",
html: `<ul>
<li>Arterielle Hypertonie (häufigste Ursache!)</li>
<li>Herzklappenerkrankungen (v.a. Mitralvitien)</li>
<li>Herzinsuffizienz</li>
<li>KHK</li>
<li>Hyperthyreose</li>
<li>Alkohol (Holiday Heart Syndrome)</li>
<li>Lungenerkrankungen (COPD, LAE)</li>
<li>Adipositas, Schlafapnoe</li>
<li>Postoperativ (v.a. nach Herz-Thorax-OP)</li>
<li>Idiopathisch (Lone Atrial Fibrillation)</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li>Palpitationen, unregelmäßiger Herzschlag</li>
<li>Dyspnoe, Belastungsintoleranz</li>
<li>Schwindel, Präsynkope</li>
<li>Thoraxschmerz/Enge</li>
<li>Fatigue</li>
<li>ggf. asymptomatisch (Zufallsbefund!)</li>
<li>ggf. <strong>Komplikation als Erstmanifestation:</strong> Schlaganfall, akute Herzinsuffizienz, Tachymyopathie</li>
</ul>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1x venöser Zugang</li>
<li><strong>12-Kanal-EKG:</strong> Absolute Arrhythmie, fehlende P-Wellen, Flimmerwellen, unregelmäßige RR-Abstände</li>
<li><strong>Labor:</strong> BB, E'lyte (K⁺, Mg²⁺), NW, <strong>TSH</strong>, GOT, GPT, hs-Troponin, BNP, Gerinnung</li>
<li><strong>BGA</strong></li>
<li><strong>Echokardiographie:</strong> LV-Funktion? Klappenerkrankung? LA-Dilatation? Perikarderguss?</li>
<li><strong>CHA₂DS₂-VASc-Score</strong> (Thromboembolierisiko)</li>
<li><strong>HAS-BLED-Score</strong> (Blutungsrisiko)</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Instabiler Patient (Hypotonie, Schock, Ischämie, akute HI)</h3>
<ul>
<li><strong>Synchronisierte Kardioversion</strong> (biphasisch, 120–200 J)</li>
</ul>
<h3>Stabiler Patient: Frequenzkontrolle</h3>
<ul>
<li><strong>Ziel-HF &lt; 110/min</strong> (lenient) oder &lt; 80/min (strikt bei Symptomatik)</li>
<li><strong>Betablocker:</strong> Metoprolol 5 mg i.v. (Wiederholung alle 5 min, max. 15 mg), dann oral</li>
<li><strong>Verapamil/Diltiazem</strong> i.v. (CAVE: nicht bei HFrEF, nicht bei WPW!)</li>
<li><strong>Digoxin:</strong> bei Herzinsuffizienz, wenn Betablocker nicht ausreichen (0,5 mg i.v. initial)</li>
<li><strong>Amiodaron:</strong> als Frequenzkontrolle bei schwerer Herzinsuffizienz (LVEF &lt; 40%)</li>
</ul>
<h3>Stabiler Patient: Rhythmuskontrolle (Kardioversion)</h3>
<ul>
<li><strong>Indikation:</strong> symptomatisches VHF, Erstmanifestation, junger Patient, Herzinsuffizienz</li>
<li><strong>VHF &lt; 48h:</strong> Kardioversion ohne vorherige Antikoagulation (Heparin-Bolus vor Kardioversion)
<ul>
<li>Medikamentös: Flecainid 2 mg/kg i.v. über 10 min (CAVE: nur bei Herzgesunden!) oder Vernakalant 3 mg/kg i.v.</li>
<li>Elektrisch: synchronisierte Kardioversion 120–200 J biphasisch</li>
</ul>
</li>
<li><strong>VHF ≥ 48h oder Dauer unklar:</strong>
<ul>
<li>Antikoagulation ≥ 3 Wochen VOR Kardioversion ODER TEE zum Ausschluss von Vorhofthromben → dann Kardioversion</li>
<li>Antikoagulation für ≥ 4 Wochen NACH Kardioversion (unabhängig von CHA₂DS₂-VASc)</li>
</ul>
</li>
</ul>
<h3>Antikoagulation (Thromboembolieprophylaxe)</h3>
<div class="table-wrap"><table>
<thead><tr><th>CHA₂DS₂-VASc</th><th>Empfehlung</th></tr></thead>
<tbody>
<tr><td>0 (Männer) / 1 (Frauen)</td><td>Keine Antikoagulation</td></tr>
<tr><td>1 (Männer) / 2 (Frauen)</td><td>Antikoagulation erwägen</td></tr>
<tr><td>≥ 2 (Männer) / ≥ 3 (Frauen)</td><td>Antikoagulation empfohlen</td></tr>
</tbody>
</table></div>
<ul>
<li><strong>DOAK bevorzugt:</strong> Apixaban, Edoxaban, Dabigatran, Rivaroxaban</li>
<li><strong>VKA</strong> bei mechanischer Herzklappe, mittelschwerer/schwerer Mitralstenose</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>VHF bei WPW-Syndrom:</strong> KEINE AV-Knoten-blockierenden Medikamente (Betablocker, Verapamil, Digoxin, Adenosin)! → Amiodaron oder elektrische Kardioversion!</p></div>`
},
{
title: "Merke",
html: `<ul>
<li>Instabil → <strong>sofortige Kardioversion!</strong></li>
<li>Stabil → <strong>Frequenzkontrolle</strong> (Betablocker, Verapamil, Digoxin)</li>
<li><strong>TSH</strong> immer bestimmen (Hyperthyreose!)</li>
<li><strong>CHA₂DS₂-VASc</strong> bestimmt die Antikoagulation (DOAK bevorzugt)</li>
<li><strong>VHF ≥ 48h/unklar:</strong> Antikoagulation ≥ 3 Wochen ODER TEE vor Kardioversion</li>
<li><strong>VHF bei WPW:</strong> keine AV-Knoten-Blocker!</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Stationär:</strong> hämodynamische Instabilität, Kardioversion, neu diagnostiziert mit hoher Kammerfrequenz, Komplikation (Stroke, HI)</li>
<li><strong>Ambulant:</strong> bekanntes VHF, stabile Frequenzkontrolle, Antikoagulation gewährleistet</li>
</ul>`
}
],
stand: "12/24",
sources: `Van Gelder IC et al. 2024 ESC Guidelines for the management of atrial fibrillation. Eur Heart J. 2024;45(36):3314-3414.<br>Hindricks G et al. 2020 ESC Guidelines for the diagnosis and management of atrial fibrillation. Eur Heart J. 2021;42(5):373-498.`
},
{
id: "zerebrale-metastasen",
title: "Zerebrale Metastasen",
category: "Neurologie",
catKey: "neuro",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Zerebrale Metastasen:</strong> Absiedlungen extrazerebral gelegener Primärtumoren im Hirnparenchym, den Meningen oder der Schädelkalotte. Häufigste intrakranielle Tumoren im Erwachsenenalter</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Häufigste Primärtumoren:</strong>
<ul>
<li>Bronchialkarzinom (häufigste Ursache!)</li>
<li>Mammakarzinom</li>
<li>Malignes Melanom</li>
<li>Nierenzellkarzinom</li>
<li>Kolorektales Karzinom</li>
</ul>
</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Kopfschmerzen</strong> (v.a. morgendlich, lagerungsabhängig, zunehmend)</li>
<li><strong>Fokal-neurologische Defizite</strong> (Hemiparese, Aphasie, Ataxie, Sehstörungen – abhängig von Lokalisation)</li>
<li><strong>Epileptische Anfälle</strong> (in 20–30%)</li>
<li><strong>Hirndruckzeichen:</strong> Übelkeit, Erbrechen (nüchtern/schwallartig), Bewusstseinseintrübung, Stauungspapille</li>
<li><strong>Wesens-/Verhaltensänderung</strong></li>
<li>ggf. Erstmanifestation eines bisher unbekannten Malignoms</li>
</ul>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1x venöser Zugang</li>
<li><strong>cCT nativ</strong> (Notfallbildgebung: Blutung? Herniation? Hydrozephalus?)</li>
<li><strong>cMRT + KM</strong> (Goldstandard): Anzahl, Größe, Lokalisation, Ödem, Herniation?</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte, NW, Gerinnung, ggf. Tumormarker</li>
<li>12-Kanal-EKG</li>
<li>Staging (CT Thorax/Abdomen, PET-CT) bei unbekanntem Primarius</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Akute Hirndrucktherapie</h3>
<ul>
<li><strong>Dexamethason:</strong> 8–16 mg i.v. Bolus, dann 4–8 mg i.v. alle 6–8h (Ödemreduktion, schneller Wirkungseintritt)</li>
<li>Oberkörperhochlagerung 30°</li>
<li>Osmotherapie bei drohender Herniation: Mannitol 20% 0,5–1 g/kg i.v. oder NaCl 3% 150 ml i.v. über 20 min</li>
</ul>
<h3>Anfallstherapie</h3>
<ul>
<li>Bei epileptischem Anfall: Benzodiazepine (s. SOP Status epilepticus), dann Levetiracetam 500 mg 2x/d als Prophylaxe</li>
<li>Keine routinemäßige primäre Anfallsprophylaxe ohne stattgehabten Anfall</li>
</ul>
<h3>Definitive Therapie (interdisziplinäres Tumorboard!)</h3>
<ul>
<li><strong>Neurochirurgische Resektion:</strong> solitäre/große Metastase, Masseneffekt, guter Allgemeinzustand</li>
<li><strong>Stereotaktische Radiochirurgie (SRS):</strong> ≤ 4 Metastasen, &lt; 3 cm</li>
<li><strong>Ganzhirnbestrahlung (WBRT):</strong> multiple Metastasen, schlechter AZ</li>
<li><strong>Systemtherapie:</strong> je nach Tumorentität (Immuntherapie, zielgerichtete Therapie, Chemotherapie)</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Dexamethason</strong> bei V.a. ZNS-Lymphom möglichst <strong>NICHT vor Biopsie</strong> geben (maskiert Histologie → kann Lymphomzellen lysieren!).</p></div>`
},
{
title: "Merke",
html: `<ul>
<li>Zerebrale Metastasen sind die <strong>häufigsten intrakraniellen Tumoren</strong></li>
<li><strong>Dexamethason</strong> ist das wichtigste Medikament zur akuten Hirndrucksenkung bei Tumorödem</li>
<li><strong>cMRT mit KM</strong> ist der Goldstandard</li>
<li>Interdisziplinäre Therapieplanung im <strong>Tumorboard</strong></li>
<li>Keine routinemäßige Anfallsprophylaxe ohne stattgehabten Anfall</li>
<li>Bei V.a. ZNS-Lymphom: Dexamethason erst NACH Biopsie!</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Stationär:</strong> immer bei Diagnosestellung, Hirndruckzeichen, epileptischem Anfall, relevanter Neurologie</li>
<li><strong>Intensivstation:</strong> drohende Herniation, Status epilepticus, Bewusstlosigkeit</li>
</ul>`
}
],
stand: "12/24",
sources: `Schmieder K et al. Interdisziplinäre Therapie von Hirnmetastasen. Dtsch Arztebl Int 2016;113:415-21.<br>Vogelbaum MA et al. Treatment for Brain Metastases: ASCO-SNO-ASTRO Guideline. J Clin Oncol. 2022;40(5):492-516.`
},
{
id: "zerebrale-venen-sinusthrombose",
title: "Zerebrale Venen-/Sinusthrombose",
category: "Neurologie",
catKey: "neuro",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Zerebrale Venen- und Sinusthrombose (CVST):</strong> Thrombose der venösen Blutleiter im Gehirn mit Entwicklung einer venösen Abflussstörung und Gefahr von konsekutiver Ödembildung, Ischämien und Stauungsblutungen</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Aseptisch (90%):</strong>
<ul>
<li>Hormoneinnahme (kombinierte Kontrazeptiva, Hormonersatztherapie)</li>
<li>Thrombophilie (Protein-C/S-Mangel, Antiphospholipid-Syndrom)</li>
<li>Schwangerschaft (v.a. 3. Trimenon und Wochenbett)</li>
<li>Myeloproliferative Erkrankungen (JAK2V617F-Mutation)</li>
<li>Sonstige (idiopathisch, Vaskulitiden, Kollagenosen, Malignom)</li>
</ul>
</li>
<li><strong>Septisch (10%):</strong>
<ul>
<li>Lokale Infektionen (Otitis media, Mastoiditis, Sinusitis, Meningitis)</li>
</ul>
</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Kopfschmerzen</strong> (in 90% der Fälle, häufigstes Symptom)</li>
<li><strong>Epileptische Anfälle</strong></li>
<li><strong>Fokal-neurologische Defizite</strong></li>
<li><strong>Stauungspapille</strong>, Sehstörungen</li>
<li>Übelkeit, Erbrechen</li>
<li>Vigilanzminderung bis Koma</li>
</ul>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1x venöser Zugang</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte, NW, Gerinnung, TSH, ggf. β-HCG, D-Dimere, BSG</li>
<li><strong>Anamnese:</strong> Kopfschmerzen? Epileptischer Anfall? Fokal-neurologische Ausfälle? Sehstörungen? Kontrazeptivum? Schwangerschaft? Hormoneinnahme? Infektionen im Kopfbereich?</li>
<li><strong>Körperliche Untersuchung:</strong> Vigilanz? GCS? Fokal-neurologisches Defizit? Meningismus? Infektfokus?</li>
<li><strong>cMRT + KM-Venographie</strong> (Goldstandard!) <strong>oder cCT + KM-Venographie</strong></li>
<li>ggf. weitere Diagnostik z.A. von DD (BGA, EKG, Fundoskopie, CTA, Lumbalpunktion)</li>
<li><strong>Zeitnahe Rücksprache mit Neurologie!</strong></li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Nativ-CT ist nicht ausreichend</strong> zum Ausschluss einer CVST! Immer <strong>KM-Venographie</strong> (cMRT oder cCT) anfordern!</p></div>`
},
{
title: "Therapie",
html: `<h3>Allgemeinmaßnahmen</h3>
<ul>
<li>Stabilisierung gemäß ABCDE-Schema</li>
<li>Ursachen beheben (Kontrazeptivum absetzen, Fokussanierung bei septischer CVST, Antibiotikatherapie)</li>
<li>Bedarfsgerechte Analgesie und Antiemese</li>
<li>Anfallsdurchbrechung bei Anfall (s. SOP Status epilepticus), Anfallsprophylaxe nur nach stattgehabtem Anfall</li>
</ul>
<h3>Therapeutische Antikoagulation</h3>
<ul>
<li><strong>NMH s.c. gewichtsadaptiert</strong> (UFH bei GFR &lt; 15 ml/min oder falls Intervention geplant)</li>
<li>Nach Akutphase Umstellung auf DOAK</li>
</ul>
<h3>Spezifische Therapie</h3>
<ul>
<li>Neuroradiologische Intervention (Einzelfallentscheidung bei Verschlechterung trotz Antikoagulation)</li>
<li>Operative Dekompression (bei Stauungsödem/Hämorrhagie und drohender Einklemmung)</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Auch bei Vorliegen einer <strong>begleitenden Hirnblutung</strong> ist in der Akutphase eine <strong>therapeutische Antikoagulation indiziert!</strong></p></div>`
},
{
title: "Merke",
html: `<ul>
<li>CVST kann sich <strong>vielfältig</strong> präsentieren – Leitsymptom in 90%: <strong>Kopfschmerzen</strong></li>
<li>Vor allem an CVST denken bei: <strong>junge Frauen, Schwangerschaft/Wochenbett, hormonelle Kontrazeptiva, Thrombophilie</strong></li>
<li><strong>cMRT/cCT + KM-Venographie!</strong> (Nativ-CT nicht ausreichend!)</li>
<li><strong>D-Dimere</strong> können nur bei niedrig-Risiko-Fällen (isolierter Kopfschmerz, keine Neurologie, Dauer &lt; 30d) und negativem Ergebnis eine CVST unwahrscheinlich machen</li>
<li>Auch bei Hirnblutung → <strong>Antikoagulation!</strong></li>
<li>Frauen mit Z.n. CVST: <strong>keine kombinierten Kontrazeptiva, NMH in Schwangerschaft</strong></li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Überwachungsstation (Stroke-Unit / Neuro-ICU)</strong></li>
</ul>`
}
],
stand: "03/25",
sources: `Weimar C et al. Zerebrale Venen- und Sinusthrombose, S2k-Leitlinie, 2023; AWMF-Versionsnr.: 6.1.<br>Stam J. Thrombosis of the cerebral veins and sinuses. N Engl J Med. 2005;352(17):1791-8.<br>Agrawal K et al. Cerebral Sinus Thrombosis. Headache. 2016;56(8):1380-9.`
}
];

if (typeof window.SOP_DATA === "undefined") {
  window.SOP_DATA = [];
}
window.SOP_DATA = window.SOP_DATA.concat(SOP_DATA_4);