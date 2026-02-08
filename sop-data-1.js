const SOP_DATA_1 = [
{
id: "abdominelle-schmerzen",
title: "Abdominelle Schmerzen",
category: "Leitsymptom",
catKey: "leit",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Abdominelle Schmerzen:</strong> Schmerzen im Bereich des Bauches</li>
<li><strong>Akutes Abdomen:</strong> Potenziell lebensbedrohliches Krankheitsbild mit plötzlich auftretenden, starken Bauchschmerzen, abdomineller Abwehrspannung und Kreislaufinstabilität, das einer raschen Differentialdiagnostik und meist chirurgischer Therapie bedarf</li>
<li><strong>Unklares Abdomen:</strong> Akute Bauchschmerzen ohne Abwehrspannung, die einer Differentialdiagnostik bedürfen</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Rechter oberer Quadrant:</strong> Cholezystitis, Cholelithiasis, Cholangitis, Leberkapselreizung (Hepatitis, Abszess, Stauungsleber, etc.), Pankreatitis, ACS, Pleuritis</li>
<li><strong>Rechte Flanke:</strong> Pyelonephritis, Urolithiasis, retrozökale Appendizitis</li>
<li><strong>Rechter unterer Quadrant:</strong> Appendizitis, Ileitis terminalis, Urolithiasis, Leistenhernie, Psoas-Abszess</li>
<li><strong>Linker oberer Quadrant:</strong> Milzinfarkt/-abszess/-ruptur, Pankreatitis, ACS, Pleuritis</li>
<li><strong>Linke Flanke:</strong> Pyelonephritis, Urolithiasis</li>
<li><strong>Linker unterer Quadrant:</strong> Divertikulitis, Urolithiasis, Leistenhernie, Psoas-Abszess</li>
<li><strong>Epigastrium:</strong> Gastritis, Duodenitis, Ulcus, Pankreatitis, Aortenaneurysma, ACS</li>
<li><strong>Periumbilikal:</strong> Appendizitis (initial), Aortenaneurysma, ACS</li>
<li><strong>Suprapubisch, Unterbauch und Urogenital:</strong> Harnverhalt, Zystitis, EUG, stielgedrehtes Ovar, rupturierte Ovarialzyste, Adnexitis, Akutes Skrotum, Hodentorsion, etc.</li>
<li><strong>Diffus:</strong> Mesenterialischämie, Ileus, Gastroenteritis, Obstipation, diabetische Ketoazidose, Addisonkrise, akute intermittierende Porphyrie, Sichelzellkrise, familiäres Mittelmeerfieber, Opiatentzug, abdominelle Migräne, Angioödem, Bleivergiftung, etc.</li>
</ul>
<div class="callout callout-hinweis"><p><strong>Hinweis:</strong> Die Schmerzlokalisationen sind Anhaltspunkte, abweichende Präsentationen sind möglich!</p></div>`
},
{
title: "Symptome",
html: `<ul>
<li>Schmerzen im Bereich des Bauches</li>
<li>ggf. Bild eines <strong>akuten Abdomens</strong> (Abwehrspannung, Störung der Darmperistaltik, Kreislaufinstabilität)</li>
<li>ggf. <strong>Unruhe</strong> (i.d.R. bei viszeralem Schmerz) bzw. <strong>Schonhaltung</strong> (i.d.R. bei somatischem Schmerz)</li>
<li>ggf. <strong>vegetative Begleitsymptome</strong> (Kaltschweißigkeit, Tachykardie, Hypertonie)</li>
<li>ggf. <strong>Symptome der zugrundeliegenden Erkrankung</strong> (Diarrhoen bei Gastroenteritis, Acetongeruch bei DKA etc.)</li>
</ul>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur)</li>
<li>1–2x venöser Zugang</li>
<li>Venöse bzw. arterielle BGA (Hb? pH? BE? Laktat? Glukose?)</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte, NW, GOT, GPT, AP, γ-GT, Bilirubin, LDH, Lipase, Gerinnung, TSH, ggf.: hs-Troponin, D-Dimere, PCT, β-HCG, Kreuzblut, 2 Paar Blutkulturen</li>
<li>12-Kanal-EKG (Ischämiezeichen? Vorhofflimmern?)</li>
</ul>
<h3>Klinische Untersuchung</h3>
<ul>
<li><strong>Anamnese:</strong> Schmerzbeginn/-qualität/-intensität/-ausstrahlung? Provokationsfaktoren? Dynamik? Begleitsymptome wie Übelkeit, Erbrechen, Durchfall, Fieber, Blut im Stuhl? Letzter Stuhlgang? Miktion? Vorerkrankungen/-operationen? Medikamente, NSAR, Opiate? Gynäkologische/Familien-/Reise-Anamnese? Drogen?</li>
<li><strong>Körperliche Untersuchung:</strong> Schonhaltung? Narben? Bruchpforten? Hautverfärbungen? Fehlende oder hochgestellte Darmgeräusche? Abwehrspannung? Druck-/Loslassschmerz? Nierenlagerklopfschmerz? ggf. Blut/Teerstuhl in DRU? ggf. Schwellung/Rötung des Hodens?</li>
</ul>
<h3>Erweiterte Diagnostik (ggf.)</h3>
<ul>
<li><strong>Urin-Status</strong> (Erythrozyten? Leukozyten? Nitrit?) + Urinkultur (bei V.a. Harnwegsinfekt)</li>
<li><strong>POCUS:</strong> Freie Flüssigkeit? Cholezystitis? Cholelithiasis? Cholestase? Pankreatitis? Harnstau? Nephrolithiasis? Appendizitis? Divertikulitis? Aortenaneurysma? Ileus?</li>
<li><strong>Röntgen-Abdomen im Stehen:</strong> Freie Luft (Perforation)? Spiegel (Ileus)?</li>
<li><strong>CT-Abdomen + KM</strong> (i.v. + oral) bei unklarem Befund, V.a. akutes Abdomen, V.a. Mesenterialischämie, V.a. Perforation, V.a. Abszess, V.a. Ileus etc.</li>
<li>ggf. <strong>Gynäkologisches Konsil</strong> bei Frauen (EUG, Ovarialtorsion, Adnexitis?)</li>
<li>ggf. <strong>Urologisches Konsil</strong> (Hodentorsion, komplizierte Urolithiasis?)</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Allgemeinmaßnahmen</h3>
<ul>
<li>Stabilisierung der Vitalfunktionen gemäß ABCDE-Schema</li>
<li>Venöser Zugang + Vollelektrolytlösung nach Bedarf</li>
<li>Nahrungskarenz bis zur Diagnosestellung</li>
<li>Magensonde bei Ileus/Erbrechen</li>
</ul>
<h3>Analgesie</h3>
<ul>
<li><strong>Metamizol</strong> 1 g i.v. KI (CAVE: Agranulozytose, Hypotonie bei schneller Infusion)</li>
<li><strong>Paracetamol</strong> 1 g i.v. KI (CAVE: Leberschaden)</li>
<li><strong>Butylscopolamin</strong> 20 mg i.v. bei kolikartigen Schmerzen (CAVE: Tachykardie, Glaukom)</li>
<li><strong>Piritramid</strong> 3,75–7,5 mg i.v. titrierend bei starken Schmerzen</li>
<li><strong>Morphin</strong> 2–5 mg i.v. titrierend bei starken Schmerzen</li>
</ul>
<div class="callout callout-hinweis"><p><strong>Hinweis:</strong> Eine adäquate Analgesie maskiert nicht die klinische Beurteilbarkeit und soll nicht vorenthalten werden!</p></div>
<h3>Antiemese</h3>
<ul>
<li><strong>Ondansetron</strong> 4 mg i.v.</li>
<li><strong>Dimenhydrinat</strong> 62 mg i.v.</li>
<li><strong>MCP</strong> 10 mg i.v. (CAVE: EPMS, QTc-Verlängerung)</li>
</ul>
<h3>Spezifische Therapie</h3>
<ul>
<li>Therapie der zugrundeliegenden Erkrankung (s. jeweilige SOP)</li>
<li>Zeitnahe chirurgische Mitbeurteilung bei V.a. akutes Abdomen, Ileus, Perforation, Appendizitis, inkarzerierte Hernie</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li>Bei <strong>jedem Patienten</strong> mit abdominellen Schmerzen ein <strong>12-Kanal-EKG</strong> zum Ausschluss eines ACS durchführen!</li>
<li>Bei <strong>Frauen im gebärfähigen Alter</strong> immer einen <strong>β-HCG-Test</strong> durchführen (Ausschluss EUG)!</li>
<li>Ein <strong>akutes Abdomen</strong> erfordert eine notfallmäßige chirurgische Mitbeurteilung – Verzögerungen vermeiden!</li>
<li>An <strong>atypische Ursachen</strong> denken: DKA, Addisonkrise, Porphyrie, basale Pneumonie, Myokardinfarkt</li>
<li>Analgesie <strong>nicht vorenthalten</strong> – eine suffiziente Schmerztherapie beeinträchtigt nicht die diagnostische Beurteilbarkeit</li>
<li>Bei <strong>Laktaterhöhung</strong> und abdominellen Schmerzen immer an eine <strong>Mesenterialischämie</strong> denken!</li>
<li>Ältere und immunsupprimierte Patienten können trotz schwerer abdomineller Pathologie oligosymptomatisch sein (<strong>niedrige Abwehrspannung</strong>, <strong>kein Fieber</strong>)</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Akutes Abdomen:</strong> Notfall-OP / Intensivstation</li>
<li><strong>Stationäre Aufnahme:</strong> bei unklarer Diagnose, Notwendigkeit weiterer Diagnostik, relevanten Laborveränderungen, persistierenden Schmerzen, Infektionszeichen</li>
<li><strong>Ambulante Weiterbehandlung:</strong> bei milden, selbstlimitierenden Beschwerden mit sicherer Diagnose (z.B. unkomplizierte Gastroenteritis) und gesicherter Wiedervorstellung</li>
</ul>`
}
],
stand: "12/24",
sources: `Gans SL et al. Guideline for the Diagnostic Pathway in Patients with Acute Abdominal Pain. Dig Surg. 2015;32(1):23-31.<br>
Cartwright SL et al. Evaluation of acute abdominal pain in adults. Am Fam Physician. 2008 Apr 1;77(7):971-8.<br>
Macaluso CR et al. Evaluation and management of acute abdominal pain in the emergency department. Int J Gen Med. 2012;5:789-97.`
},
{
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
<li><strong>NIV (nicht-invasive Ventilation):</strong> Indikation bei respiratorischer Azidose (pH &lt; 7,35 und pCO₂ &gt; 45 mmHg) oder persistierender Dyspnoe trotz maximaler medikamentöser Therapie. Bevorzugt BiPAP/PSV-Modus</li>
<li><strong>Invasive Beatmung:</strong> bei NIV-Versagen, Bewusstlosigkeit, Kreislaufinstabilität, persistierender Hypoxämie trotz NIV</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Bei V.a. ventilatorische Erschöpfung (zunehmende Somnolenz, paradoxe Atmung, pH &lt; 7,25) frühzeitig Intensivstation kontaktieren!</p></div>`
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
<li><strong>Intensivstation:</strong> schwere Azidose (pH &lt; 7,30), Bewusstseinseintrübung, Intubationspflichtigkeit, hämodynamische Instabilität</li>
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
},
{
id: "akute-alkoholintoxikation",
title: "Akute Alkoholintoxikation",
category: "Toxikologie",
catKey: "tox",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Akute Alkoholintoxikation:</strong> Symptomkomplex infolge akuter Einnahme toxischer Mengen von Ethanol mit dosisabhängiger ZNS-Depression bis hin zum Koma und Atemstillstand</li>
</ul>
<div class="callout callout-hinweis"><p><strong>Hinweis:</strong> Der Schweregrad korreliert nicht immer mit der Blutalkoholkonzentration (BAK), da Gewöhnungseffekte eine Rolle spielen. Klinische Beurteilung ist entscheidend!</p></div>`
},
{
title: "Ursachen",
html: `<ul>
<li>Übermäßiger Alkoholkonsum (akzidentell oder suizidal)</li>
<li>Besondere Risikogruppen: Jugendliche (Komasaufen), Alkoholabhängige, psychiatrische Patienten</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Immer an <strong>Mischintoxikationen</strong> (Medikamente, Drogen) und begleitende Verletzungen (SHT, Wirbelsäule) denken!</p></div>`
},
{
title: "Symptome",
html: `<div class="table-wrap"><table>
<thead><tr><th>BAK (‰)</th><th>Stadium</th><th>Symptome</th></tr></thead>
<tbody>
<tr><td>0,5–1,5</td><td>Exzitation</td><td>Euphorie, Enthemmung, Dysarthrie, Ataxie, Nystagmus</td></tr>
<tr><td>1,5–2,5</td><td>Hypnose</td><td>Zunehmende Bewusstseinseintrübung, Koordinationsstörungen, Emesis</td></tr>
<tr><td>2,5–3,5</td><td>Narkose</td><td>Somnolenz bis Sopor, Hypothermie, Hyporeflexie</td></tr>
<tr><td>&gt; 3,5</td><td>Asphyxie</td><td>Koma, Atemdepression, Kreislaufversagen, potenziell letal</td></tr>
</tbody>
</table></div>
<ul>
<li><strong>Begleitende Komplikationen:</strong> Aspiration, Hypothermie, Hypoglykämie, Elektrolytstörungen (Hypokaliämie, Hypomagnesämie), Rhabdomyolyse, Krampfanfälle, metabolische Azidose</li>
</ul>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur)</li>
<li>1x venöser Zugang</li>
<li><strong>BGA</strong> (pH? Glukose? Laktat? E'lyte? Osmolalität?)</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte (inkl. Mg²⁺, Phosphat), NW, GOT, GPT, γ-GT, Lipase, CK, Gerinnung, Ethanol-Spiegel</li>
<li><strong>BZ-Messung</strong> (Hypoglykämie?)</li>
</ul>
<h3>Klinische Untersuchung</h3>
<ul>
<li><strong>Anamnese</strong> (Fremdanamnese!): Was? Wieviel? Wann? Begleitsubstanzen? Medikamente? Suizidabsicht? Vorerkrankungen? Alkoholabhängigkeit?</li>
<li><strong>Körperliche Untersuchung:</strong> GCS? Pupillen? Foetor? Verletzungszeichen? Kopfplatzwunde/SHT? Temperatur? Aspiration? Abdomen?</li>
</ul>
<h3>Erweiterte Diagnostik (ggf.)</h3>
<ul>
<li><strong>cCT nativ:</strong> bei V.a. SHT, unklarer Vigilanzminderung, fokal-neurologischem Defizit, inadäquatem Aufklaren</li>
<li><strong>Urin-Drogenscreening:</strong> bei V.a. Mischintoxikation</li>
<li>Berechnung der <strong>osmotischen Lücke</strong> (Hinweis auf toxische Alkohole wie Methanol/Ethylenglykol bei erhöhter Lücke)</li>
<li><strong>12-Kanal-EKG:</strong> QTc-Verlängerung? Arrhythmie?</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Allgemeinmaßnahmen</h3>
<ul>
<li>Stabilisierung gemäß ABCDE-Schema</li>
<li><strong>Atemwegssicherung:</strong> Stabile Seitenlage bei Bewusstlosigkeit, ggf. Intubation bei fehlendem Schutzreflex / Atemdepression</li>
<li><strong>Sauerstoff</strong> nach Bedarf (Ziel-SpO₂ ≥ 94%)</li>
<li><strong>Wärmeerhalt:</strong> Hypothermieschutz (Wärmedecke, warme Infusionen)</li>
</ul>
<h3>Spezifische Therapie</h3>
<ul>
<li><strong>Volumensubstitution:</strong> Vollelektrolytlösung i.v. (Rehydratation, Verdünnungseffekt)</li>
<li><strong>Glukose:</strong> 40 ml Glukose 40% i.v. bei Hypoglykämie (BZ &lt; 70 mg/dl)</li>
<li><strong>Thiamin (Vitamin B1):</strong> 100–300 mg i.v. <strong>vor Glukosegabe</strong> bei V.a. Alkoholabhängigkeit / Malnutrition (Prophylaxe Wernicke-Enzephalopathie)</li>
<li><strong>Elektrolytausgleich:</strong> Kalium, Magnesium, Phosphat nach BGA/Labor</li>
<li><strong>Antiemese:</strong> Ondansetron 4 mg i.v. bei Erbrechen</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Keine Gabe von Aktivkohle</strong> bei Alkoholintoxikation – Ethanol wird nicht an Aktivkohle gebunden! Aspirationsrisiko erhöht!</p></div>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Immer <strong>Thiamin vor Glukose</strong> verabreichen – Glukosegabe ohne Thiaminsubstitution kann eine Wernicke-Enzephalopathie auslösen!</p></div>`
},
{
title: "Merke",
html: `<ul>
<li>Alkoholintoxikation ist eine <strong>Ausschlussdiagnose</strong> – immer andere Ursachen einer Bewusstseinsstörung bedenken (SHT, Hypoglykämie, Intoxikation mit anderen Substanzen, Meningitis, Stroke)</li>
<li><strong>cCT großzügig indizieren</strong> bei Sturz/Trauma, inadäquatem Aufklaren oder fokal-neurologischem Defizit</li>
<li>Bei fehlendem Aufklaren nach Erwartung: Reevaluation und erweiterte Diagnostik!</li>
<li>Engmaschige Überwachung (Atmung, Bewusstsein) essenziell – <strong>Aspirationsgefahr!</strong></li>
<li>Bei Verdacht auf <strong>Methanol-/Ethylenglykolintoxikation</strong> (osmotische Lücke ↑, Anionenlücke ↑, Visusminderung): Giftnotruf kontaktieren, Fomepizol/Ethanol als Antidot</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> Koma, Atemdepression, Intubationspflichtigkeit, schwere Hypothermie, Kreislaufinstabilität</li>
<li><strong>Überwachungsstation:</strong> schwere Bewusstseinsstörung, V.a. Mischintoxikation, Aspirationsrisiko</li>
<li><strong>Notaufnahme/Beobachtung:</strong> moderate Intoxikation bis zum Aufklaren (engmaschige Überwachung)</li>
<li><strong>Psychiatrische Vorstellung</strong> bei V.a. Suizidalität nach Aufklaren</li>
<li>Entlassung erst bei <strong>sicherer Orientierung</strong>, stabilen Vitalzeichen und gesicherter Begleitung</li>
</ul>`
}
],
stand: "12/24",
sources: `Vonghia L et al. Acute alcohol intoxication. Eur J Intern Med. 2008;19(8):561-7.<br>
Hack JB. Ethanol. In: Nelson LS et al. (Hrsg.) Goldfrank's Toxicologic Emergencies. 11th ed. McGraw-Hill, 2019.<br>
Lamminpää A. Acute alcohol intoxication among children and adolescents. Eur J Pediatr. 1994;153:868-872.`
},
{
id: "akute-divertikulitis",
title: "Akute Divertikulitis",
category: "Gastroenterologie",
catKey: "gi",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Divertikel:</strong> Ausstülpungen der Darmschleimhaut durch Muskellücken der Kolonwand (Pseudodivertikel)</li>
<li><strong>Divertikulose:</strong> Vorhandensein von Divertikeln ohne Entzündungszeichen</li>
<li><strong>Akute Divertikulitis:</strong> Akute Entzündung eines oder mehrerer Divertikel, meist im Sigma lokalisiert</li>
</ul>
<h3>Klassifikation (CDD)</h3>
<div class="table-wrap"><table>
<thead><tr><th>Typ</th><th>Beschreibung</th></tr></thead>
<tbody>
<tr><td>Typ 1a</td><td>Unkomplizierte Divertikulitis ohne Umgebungsreaktion</td></tr>
<tr><td>Typ 1b</td><td>Divertikulitis mit phlegmonöser Umgebungsreaktion</td></tr>
<tr><td>Typ 2a</td><td>Mikroabszess (≤ 1 cm), gedeckte Perforation</td></tr>
<tr><td>Typ 2b</td><td>Makroabszess (&gt; 1 cm), gedeckte Perforation</td></tr>
<tr><td>Typ 2c</td><td>Freie Perforation, freie Luft/Flüssigkeit</td></tr>
<tr><td>Typ 2c1</td><td>Eitrige Peritonitis</td></tr>
<tr><td>Typ 2c2</td><td>Fäkale Peritonitis</td></tr>
<tr><td>Typ 3a</td><td>Chronisch-rezidivierend, symptomatische unkomplizierte Divertikelkrankheit</td></tr>
<tr><td>Typ 3b</td><td>Chronisch-rezidivierend mit Komplikationen (Stenose, Fisteln)</td></tr>
</tbody>
</table></div>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Stuhlimpaktierung</strong> in Divertikeln → Schleimhautirritation → Mikroperforation → Entzündung</li>
<li><strong>Risikofaktoren:</strong>
<ul>
<li>Alter (&gt; 50 Jahre)</li>
<li>Ballaststoffarme Ernährung</li>
<li>Adipositas</li>
<li>Bewegungsmangel</li>
<li>NSAR-/Steroideinnahme</li>
<li>Immunsuppression</li>
</ul>
</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Linksseitige Unterbauchschmerzen</strong> („Linksappendizitis")</li>
<li><strong>Fieber</strong></li>
<li><strong>Stuhlunregelmäßigkeiten</strong> (Obstipation oder Diarrhoe)</li>
<li>ggf. Übelkeit, Erbrechen</li>
<li>ggf. Dysurie (bei Blasenirritation durch entzündetes Sigma)</li>
<li>ggf. <strong>peritoneale Zeichen</strong> (Abwehrspannung, Loslassschmerz) bei Perforation/Peritonitis</li>
</ul>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur)</li>
<li>1x venöser Zugang</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte, NW, Gerinnung, ggf. PCT, Laktat, Kreuzblut</li>
<li>Urin-Status (Begleitende HWI? Makrohämaturie bei Kolongvesikaler Fistel?)</li>
</ul>
<h3>Klinische Untersuchung</h3>
<ul>
<li><strong>Anamnese:</strong> Schmerzbeginn/-dynamik? Lokalisation? Stuhlveränderungen? Fieber? Vorbekannte Divertikulose? Vorangegangene Divertikulitis-Episoden? Medikamente (NSAR, Steroide, Immunsuppressiva)?</li>
<li><strong>Körperliche Untersuchung:</strong> Druckschmerz linker Unterbauch? Walzenförmige Resistenz? Abwehrspannung? Peritonismus? DRU (Blut?)</li>
</ul>
<h3>Bildgebung</h3>
<ul>
<li><strong>CT-Abdomen/Becken mit i.v.-KM</strong> (Goldstandard): Divertikel + perikolische Fettgewebsimbibierung? Abszess? Perforation? Freie Luft/Flüssigkeit? Stenose? Fistel?</li>
<li><strong>Abdomen-Sonographie:</strong> Alternative bei unkomplizierter Präsentation, eingeschränkte Sensitivität</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Keine Koloskopie im akuten Schub (Perforationsgefahr)! Koloskopie im Intervall (6–8 Wochen) zum Ausschluss eines kolorektalen Karzinoms empfohlen.</p></div>`
},
{
title: "Therapie",
html: `<h3>Unkomplizierte Divertikulitis (CDD Typ 1)</h3>
<ul>
<li><strong>Typ 1a:</strong> Ambulante Behandlung möglich. Flüssigkost, Schmerztherapie (Metamizol, Paracetamol, CAVE: keine NSAR), ggf. Antibiotikatherapie bei Risikofaktoren</li>
<li><strong>Typ 1b:</strong> Stationäre Aufnahme, Nahrungskarenz initial, i.v.-Flüssigkeit, Antibiotikatherapie</li>
</ul>
<h3>Komplizierte Divertikulitis (CDD Typ 2)</h3>
<ul>
<li><strong>Typ 2a/2b:</strong> Stationär, Nahrungskarenz, i.v.-Antibiotikatherapie. Bei Makroabszess (&gt; 3–4 cm): <strong>CT-gestützte Drainage</strong></li>
<li><strong>Typ 2c:</strong> <strong>Notfall-OP</strong> (Peritonitis!), i.v.-Antibiotika, Kreislaufstabilisierung</li>
</ul>
<h3>Antibiotikatherapie</h3>
<ul>
<li><strong>Ambulant:</strong> Ciprofloxacin 500 mg 2x/d p.o. + Metronidazol 400 mg 3x/d p.o. für 7–10 Tage; oder Amoxicillin/Clavulansäure 875/125 mg 2x/d p.o.</li>
<li><strong>Stationär:</strong> Piperacillin/Tazobactam 4,5 g 3x/d i.v.; oder Ceftriaxon 2 g 1x/d i.v. + Metronidazol 500 mg 3x/d i.v.</li>
</ul>
<h3>Chirurgie</h3>
<ul>
<li><strong>Notfall-OP:</strong> freie Perforation mit Peritonitis (Hartmann-OP oder primäre Anastomose ± Ileostoma)</li>
<li><strong>Elektive OP:</strong> nach rezidivierenden komplizierten Episoden, Stenose, Fistel (individuell, im entzündungsfreien Intervall)</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li>Die unkomplizierte Divertikulitis kann bei immunkompetenten Patienten <strong>ohne Risikofaktoren auch ohne Antibiotika</strong> behandelt werden (Evidenz zunehmend)</li>
<li><strong>CT-Abdomen mit i.v.-KM</strong> ist der Goldstandard der Diagnostik – unverzichtbar bei V.a. komplizierte Divertikulitis</li>
<li>Keine Koloskopie im akuten Schub! Immer <strong>Intervall-Koloskopie</strong> nach 6–8 Wochen empfehlen (Karzinom-Ausschluss)</li>
<li>Bei freier Perforation mit Peritonitis: <strong>Notfall-OP</strong> – keine Verzögerung!</li>
<li>Bei immunsupprimierten Patienten ist die Symptomschwere oft geringer – <strong>niedrigere Verdachtsschwelle</strong> für CT-Diagnostik</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Notfall-OP / Intensivstation:</strong> freie Perforation, Peritonitis, Sepsis</li>
<li><strong>Normalstation:</strong> komplizierte Divertikulitis (Abszess, phlegmonöse Entzündung), i.v.-Antibiotikatherapie notwendig</li>
<li><strong>Ambulant:</strong> unkomplizierte Divertikulitis (Typ 1a) bei immunkompetenten Patienten mit oraler Nahrungsaufnahme, gesicherter Wiedervorstellung und häuslicher Versorgung</li>
</ul>`
}
],
stand: "12/24",
sources: `Leifeld L et al. S3-Leitlinie Divertikelkrankheit/Divertikulitis. AWMF-Register-Nr. 021-20, 2021.<br>
Stollman N et al. Diagnosis and management of diverticular disease of the colon in adults. Am J Gastroenterol. 2015;110(10):1589-600.<br>
Sartelli M et al. WSES/AAST guidelines: management of acute colonic diverticulitis in the emergency setting. World J Emerg Surg. 2024;19:2.`
},
{
id: "akute-gastroenteritis",
title: "Akute Gastroenteritis",
category: "Gastroenterologie",
catKey: "gi",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Akute Gastroenteritis:</strong> Akute Entzündung des Magen-Darm-Traktes, meist infektiöser Genese, mit Diarrhoe (≥ 3 ungeformte Stühle/24h) und/oder Erbrechen, typischerweise selbstlimitierend innerhalb von 7–14 Tagen</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Viral (50–70%):</strong> Noroviren (häufigste Ursache bei Erwachsenen), Rotaviren, Adenoviren, Astroviren</li>
<li><strong>Bakteriell (15–20%):</strong>
<ul>
<li><strong>Toxin-vermittelt:</strong> Staphylococcus aureus, Bacillus cereus, Clostridium perfringens (kurze Inkubationszeit 1–6h)</li>
<li><strong>Invasiv:</strong> Salmonellen, Campylobacter, Shigellen, EHEC, Yersinien</li>
<li><strong>Clostridioides difficile:</strong> insbesondere nach Antibiotikatherapie</li>
</ul>
</li>
<li><strong>Parasitär:</strong> Giardia lamblia, Entamoeba histolytica, Cryptosporidium (v.a. bei Immunsupprimierten, Reiseanamnese)</li>
</ul>
<div class="callout callout-hinweis"><p><strong>Hinweis:</strong> Norovirus und Rotavirus sind meldepflichtig! Bei V.a. auf EHEC, Salmonellose, Cholera etc. besteht ebenfalls Meldepflicht nach IfSG.</p></div>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Diarrhoe</strong> (wässrig, ggf. blutig bei invasiven Erregern)</li>
<li><strong>Übelkeit und Erbrechen</strong></li>
<li><strong>Abdominelle Krämpfe</strong></li>
<li>Fieber (eher bei bakterieller Genese)</li>
<li><strong>Dehydratation:</strong> trockene Schleimhäute, stehende Hautfalten, Tachykardie, Hypotonie, Oligurie</li>
<li>ggf. blutige Diarrhoe (EHEC, Shigellen, Campylobacter, Amöben, C. difficile)</li>
</ul>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur)</li>
<li>1x venöser Zugang bei Dehydratationszeichen</li>
<li><strong>BGA</strong> (E'lyte? pH? Laktat? Glukose? Nierenfunktion?)</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte, NW, ggf. Gerinnung, Laktat</li>
</ul>
<h3>Klinische Untersuchung</h3>
<ul>
<li><strong>Anamnese:</strong> Symptombeginn/-dynamik? Stuhlfrequenz/-konsistenz/-farbe? Blut/Schleim im Stuhl? Erbrechen? Fieber? Reiseanamnese? Nahrungsmittelanamnese (Lebensmittelvergiftung)? Kontaktpersonen mit gleichen Symptomen? Antibiotikatherapie in letzten 3 Monaten (C. difficile)? Immunsuppression?</li>
<li><strong>Körperliche Untersuchung:</strong> Dehydratationszeichen? Abdomen (diffuser DS, keine Abwehrspannung)? Darmgeräusche (gesteigert)?</li>
</ul>
<h3>Erweiterte Diagnostik (ggf.)</h3>
<ul>
<li><strong>Stuhldiagnostik</strong> (indiziert bei: blutige Diarrhoe, schwerer Verlauf, Immunsuppression, Reiserückkehrer, V.a. C. difficile, nosokomiale Diarrhoe, Dauer &gt; 7 Tage): Stuhlkultur, C. difficile-Toxin (GDH + Toxin-ELISA/PCR), ggf. Parasitologie</li>
<li><strong>Blutkultur</strong> bei Fieber, Sepsisverdacht, Immunsuppression</li>
<li><strong>Abdomen-Sonographie / CT-Abdomen:</strong> nur bei atypischer Präsentation oder V.a. Komplikation (toxisches Megakolon, Perforation, Ileus)</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Allgemeinmaßnahmen</h3>
<ul>
<li><strong>Rehydratation</strong> (wichtigste Maßnahme!):
<ul>
<li>Orale Rehydratation bei mildem Verlauf (ORS oder selbst zubereitete Lösung)</li>
<li>i.v.-Flüssigkeit (Vollelektrolytlösung) bei schwerer Dehydratation, Erbrechen, oraler Intoleranz</li>
</ul>
</li>
<li>Elektrolytausgleich (Kalium, ggf. Magnesium)</li>
<li>Kostaufbau nach Toleranz (keine strikte Nahrungskarenz nötig)</li>
</ul>
<h3>Symptomatische Therapie</h3>
<ul>
<li><strong>Antiemese:</strong> Ondansetron 4 mg i.v./p.o., Dimenhydrinat 62 mg i.v.</li>
<li><strong>Loperamid</strong> 2 mg p.o. (bei wässriger Diarrhoe ohne Fieber/blutige Stühle, max. 12 mg/d; CAVE: kontraindiziert bei invasiven Erregern, blutiger Diarrhoe, Fieber)</li>
<li><strong>Analgesie:</strong> Metamizol 1 g i.v., Butylscopolamin 20 mg i.v. bei Krämpfen</li>
</ul>
<h3>Antibiotische Therapie</h3>
<p>Nicht routinemäßig indiziert! Nur bei:</p>
<ul>
<li>Schwerer bakterieller Enteritis mit systemischen Infektionszeichen (Sepsis, hohes Fieber)</li>
<li>Immunsupprimierten Patienten</li>
<li>Nachgewiesener Infektion mit Shigellen, Campylobacter (bei schwerer Erkrankung), Salmonellose (nur bei Risikopatienten)</li>
<li><strong>Empirisch:</strong> Azithromycin 500 mg 1x/d p.o. für 3 Tage oder Ciprofloxacin 500 mg 2x/d p.o. für 3–5 Tage</li>
<li><strong>C. difficile:</strong> s. Separate Therapieempfehlung (Vancomycin p.o., Fidaxomicin)</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Bei V.a. <strong>EHEC</strong> (blutige Diarrhoe + HUS-Zeichen): <strong>keine Antibiotika</strong> (erhöhtes HUS-Risiko!) und <strong>kein Loperamid!</strong></p></div>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Rehydratation</strong> ist die wichtigste therapeutische Maßnahme – Antibiotika sind selten indiziert!</li>
<li>Bei blutiger Diarrhoe, Fieber oder schwerem Verlauf: <strong>Stuhldiagnostik</strong> einleiten</li>
<li>Bei V.a. <strong>C. difficile</strong> (Antibiotikatherapie in der Vorgeschichte, nosokomial): GDH + Toxin-Nachweis</li>
<li><strong>Kein Loperamid</strong> bei blutiger Diarrhoe, Fieber oder V.a. invasive Erreger (EHEC, C. difficile)</li>
<li>Meldepflicht beachten (IfSG): Norovirus, Rotavirus, EHEC, Salmonellose, Shigellose, Cholera, etc.</li>
<li>Auf Dehydratation besonders bei <strong>Älteren und Kindern</strong> achten (schnelle Dekompensation)</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Stationär:</strong> schwere Dehydratation, Elektrolytstörungen, Kreislaufinstabilität, Sepsis, blutige Diarrhoe mit schwerer Erkrankung, Immunsuppression, hohes Alter mit Komorbiditäten, orale Intoleranz trotz Antiemese</li>
<li><strong>Ambulant:</strong> milder Verlauf, orale Rehydratation möglich, gesicherte Wiedervorstellung</li>
</ul>`
}
],
stand: "12/24",
sources: `Hagel S et al. S2k-Leitlinie Gastrointestinale Infektionen. AWMF-Register-Nr. 021-024, 2023.<br>
Riddle MS et al. ACG Clinical Guideline: Diagnosis, Treatment, and Prevention of Acute Diarrheal Infections in Adults. Am J Gastroenterol. 2016;111(5):602-22.<br>
Shane AL et al. 2017 IDSA Clinical Practice Guidelines for the Diagnosis and Management of Infectious Diarrhea. Clin Infect Dis. 2017;65(12):e45-e80.`
},
{
id: "akute-herzinsuffizienz",
title: "Akute Herzinsuffizienz",
category: "Kardiologie",
catKey: "kardio",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Akute Herzinsuffizienz (AHF):</strong> Rasches Auftreten oder akute Verschlechterung von Symptomen und Zeichen der Herzinsuffizienz, die eine notfallmäßige Diagnostik und Therapie erfordert</li>
</ul>
<h3>Klinische Profile (nach ESC)</h3>
<div class="table-wrap"><table>
<thead><tr><th>Profil</th><th>Klinisch</th><th>Beschreibung</th></tr></thead>
<tbody>
<tr><td>Warm + Nass</td><td>Ausreichende Perfusion, Kongestion</td><td>Häufigstes Profil, Lungenödem, periphere Ödeme</td></tr>
<tr><td>Kalt + Nass</td><td>Minderperfusion + Kongestion</td><td>Kardiogener Schock mit Stauung</td></tr>
<tr><td>Kalt + Trocken</td><td>Minderperfusion, keine Kongestion</td><td>Low-Output, oft Volumenmangel</td></tr>
<tr><td>Warm + Trocken</td><td>Ausreichende Perfusion, keine Kongestion</td><td>Kompensiert, kein akuter Handlungsbedarf</td></tr>
</tbody>
</table></div>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Akute Dekompensation einer chronischen HI:</strong> Non-Compliance (Medikamente, Salz-/Flüssigkeitsrestriktion), Infektionen, Anämie, Niereninsuffizienz, Arrhythmien</li>
<li><strong>Akutes Koronarsyndrom:</strong> STEMI/NSTEMI mit akuter Pumpfunktionsstörung</li>
<li><strong>Hypertensive Krise:</strong> Akutes hypertensives Lungenödem</li>
<li><strong>Arrhythmien:</strong> Tachykardes Vorhofflimmern, VT, Bradykardie</li>
<li><strong>Akute Klappeninsuffizienz:</strong> Endokarditis, Papillarmuskelruptur, Aortendissektion</li>
<li><strong>Lungenarterienembolie:</strong> Akute Rechtsherzbelastung</li>
<li><strong>Perikardtamponade</strong></li>
<li><strong>Myokarditis</strong></li>
<li><strong>Takotsubo-Kardiomyopathie</strong></li>
<li><strong>Toxisch:</strong> Alkohol, Chemotherapeutika (Anthrazykline)</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Dyspnoe</strong> (Belastungs- bis Ruhedyspnoe), <strong>Orthopnoe</strong>, paroxysmale nächtliche Dyspnoe</li>
<li><strong>Rasselgeräusche</strong> beidseits basal (Lungenödem)</li>
<li><strong>Periphere Ödeme</strong> (Knöchel, prätibial, Anasarka)</li>
<li><strong>Jugularvenenstauung</strong>, positiver hepatojugulärer Reflux</li>
<li>Tachykardie, ggf. 3. Herzton (Galopprhythmus)</li>
<li>ggf. <strong>Schaumiges rosafarbenes Sputum</strong> (schweres Lungenödem)</li>
<li>ggf. Zeichen des <strong>kardiogenen Schocks</strong> (Hypotonie, Kaltschweißigkeit, Oligurie, Verwirrtheit)</li>
</ul>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur)</li>
<li>1–2x venöser Zugang</li>
<li><strong>BGA</strong> (Oxygenierung? pH? Laktat?)</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte, NW, GOT, GPT, <strong>BNP/NT-proBNP</strong>, hs-Troponin, Gerinnung, TSH, D-Dimere</li>
<li><strong>12-Kanal-EKG:</strong> Ischämie? Arrhythmie? Blockbilder? Hypertrophiezeichen?</li>
</ul>
<h3>Klinische Untersuchung</h3>
<ul>
<li><strong>Anamnese:</strong> Symptombeginn/-dynamik? Belastungsdyspnoe? Orthopnoe? Gewichtszunahme? Ödeme? Vorbekannte HI (LVEF? NYHA?)? Medikamente? Compliance? Auslöser (Infektion, Arrhythmie, Diätfehler)?</li>
<li><strong>Körperliche Untersuchung:</strong> Warm/Kalt? Nass/Trocken? Rasselgeräusche? Periphere Ödeme? JVD? Hepatomegalie? 3. Herzton? Herzgeräusch? Rekapillarisierungszeit?</li>
</ul>
<h3>Erweiterte Diagnostik</h3>
<ul>
<li><strong>Echokardiographie</strong> (notfallmäßig): LVEF? Wandbewegungsstörungen? Klappenvitien? Perikarderguss? Rechtsherzbelastung?</li>
<li><strong>Röntgen-Thorax:</strong> Stauungszeichen? Pleuraerguss? Kardiomegalie?</li>
<li><strong>POCUS (Lungensonographie):</strong> B-Linien (pulmonale Stauung)? Pleuraerguss?</li>
<li>ggf. CT-Thorax (bei V.a. LAE), Koronarangiographie (bei V.a. ACS)</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Profil: Warm + Nass (häufigstes Szenario)</h3>
<ul>
<li><strong>Oberkörperhochlagerung</strong>, Beine tief</li>
<li><strong>Sauerstoff:</strong> nur bei SpO₂ &lt; 90% (Ziel-SpO₂ ≥ 90%)</li>
<li><strong>NIV (CPAP/BiPAP):</strong> frühzeitig bei Lungenödem und respiratorischer Insuffizienz</li>
<li><strong>Furosemid i.v.:</strong>
<ul>
<li>Diuretika-naive Patienten: 20–40 mg i.v. Bolus</li>
<li>Vorbestehende Diuretika-Therapie: mindestens Äquivalent der oralen Tagesdosis als i.v. Bolus</li>
<li>Ziel: Urinproduktion &gt; 100 ml/h in den ersten 2 Stunden</li>
</ul>
</li>
<li><strong>Nitroglycerin</strong> 1–2 Hübe s.l. initial, dann ggf. Perfusor 1–10 mg/h i.v. (bei RR syst. &gt; 110 mmHg; besonders wirksam beim hypertensiven Lungenödem)</li>
</ul>
<h3>Profil: Kalt + Nass (kardiogener Schock)</h3>
<ul>
<li>Intensivmedizinische Betreuung</li>
<li><strong>Vasopressor:</strong> Noradrenalin (bei MAP &lt; 65 mmHg)</li>
<li><strong>Inotropikum:</strong> Dobutamin 2,5–20 µg/kg/min (bei Hypoperfusion trotz adäquatem Volumenstatus)</li>
<li>Zurückhaltende Diurese (erst nach Stabilisierung der Hämodynamik)</li>
<li>Ggf. mechanische Kreislaufunterstützung (IABP, Impella, ECMO) nach kardiologischer Evaluation</li>
</ul>
<h3>Profil: Kalt + Trocken</h3>
<ul>
<li>Vorsichtige Volumengabe (250 ml Bolus, Reevaluation)</li>
<li>Bei fehlender Besserung: Inotropika</li>
</ul>
<h3>Ursachenbezogene Therapie</h3>
<ul>
<li><strong>ACS:</strong> Koronarangiographie</li>
<li><strong>Arrhythmie:</strong> Kardioversion / Antiarrhythmika</li>
<li><strong>Perikardtamponade:</strong> Perikardpunktion</li>
<li><strong>Hypertensive Krise:</strong> Aggressive Nachlastsenkung</li>
<li><strong>Akute Klappeninsuffizienz:</strong> Chirurgisches Konsil</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Keine Betablocker</strong> in der akuten Dekompensation einleiten oder steigern! Bestehende Betablocker bei kardiogenem Schock pausieren.</p></div>`
},
{
title: "Merke",
html: `<ul>
<li>Klinisches Profil bestimmen: <strong>Warm/Kalt + Nass/Trocken</strong> → leitet die Therapie!</li>
<li><strong>BNP/NT-proBNP</strong> zur Diagnosebestätigung und zum Ausschluss (hoher negativ-prädiktiver Wert). Grenzwerte: NT-proBNP &gt; 300 pg/ml (akut) spricht für HI</li>
<li><strong>Frühzeitig NIV</strong> bei Lungenödem → reduziert Intubationsrate und Mortalität</li>
<li>Auslöser identifizieren und behandeln (<strong>CHAMP</strong>: Coronary syndrome, Hypertension, Arrhythmia, Mechanical cause, Pulmonary embolism)</li>
<li>Furosemid-Ansprechen nach 2h evaluieren, bei fehlendem Ansprechen Dosis verdoppeln oder Kombinationsdiurese (+ Thiazid)</li>
<li>Sauerstoff nur bei SpO₂ &lt; 90% – <strong>Hyperoxie vermeiden!</strong></li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> kardiogener Schock, Intubationspflichtigkeit, schwere hämodynamische Instabilität, akute Klappenpathologie</li>
<li><strong>Überwachungsstation/IMC:</strong> NIV-Pflichtigkeit, hämodynamische Instabilität, Troponin-Anstieg, Arrhythmie, i.v.-Inotropika</li>
<li><strong>Normalstation:</strong> stabile Patienten mit Kongestion und i.v.-Diuretikabedarf</li>
</ul>`
}
],
stand: "12/24",
sources: `McDonagh TA et al. 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure. Eur Heart J. 2021;42(36):3599-3726.<br>
Mebazaa A et al. Recommendations on pre-hospital and early hospital management of acute heart failure. Eur Heart J. 2015;36(30):1958-66.<br>
Ponikowski P et al. 2016 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure. Eur Heart J. 2016;37(27):2129-2200.`
},
{
id: "akute-intoxikation",
title: "Akute Intoxikation",
category: "Toxikologie",
catKey: "tox",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Akute Intoxikation:</strong> Akute Vergiftung durch exogene Substanzen (Medikamente, Chemikalien, Drogen, Pflanzen, Gase) mit potenziell lebensbedrohlichen Organschäden</li>
</ul>
<div class="callout callout-hinweis"><p><strong>Hinweis:</strong> Bei jeder unklaren Bewusstseinsstörung an eine Intoxikation denken! Die Therapie richtet sich primär nach der klinischen Symptomatik (Toxidrom), nicht nach der spezifischen Substanz.</p></div>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Medikamente:</strong> Paracetamol, Benzodiazepine, Opioide, Antidepressiva (TZA, SSRI), Antipsychotika, Betablocker, Calciumantagonisten, Digoxin, Lithium, Antikonvulsiva</li>
<li><strong>Drogen:</strong> Alkohol, Opiate, Kokain, Amphetamine, Cannabinoide, synthetische Cannabinoide, GHB, neue psychoaktive Substanzen (NPS)</li>
<li><strong>Chemikalien:</strong> Reinigungsmittel, Lösungsmittel, Pestizide, Organophosphate, Schwermetalle</li>
<li><strong>Gase:</strong> Kohlenmonoxid, Cyanid, Reizgase</li>
<li><strong>Pflanzen/Pilze:</strong> Knollenblätterpilz (Amatoxin), Tollkirsche, Eibe, etc.</li>
</ul>`
},
{
title: "Symptome",
html: `<h3>Toxidrome</h3>
<div class="table-wrap"><table>
<thead><tr><th>Toxidrom</th><th>Symptome</th><th>Beispiele</th></tr></thead>
<tbody>
<tr><td><strong>Sympathomimetisch</strong></td><td>Tachykardie, Hypertonie, Mydriasis, Hyperthermie, Agitation, Schwitzen</td><td>Kokain, Amphetamine, MDMA</td></tr>
<tr><td><strong>Sedativ-hypnotisch</strong></td><td>Somnolenz/Koma, Hypotonie, Bradykardie, Miosis/Mydriasis, Atemdepression</td><td>Benzodiazepine, Barbiturate, GHB</td></tr>
<tr><td><strong>Opioid</strong></td><td>Miosis (Stecknadelpupillen), Atemdepression, Bewusstlosigkeit, Bradykardie</td><td>Morphin, Heroin, Fentanyl, Methadon</td></tr>
<tr><td><strong>Anticholinerg</strong></td><td>Tachykardie, Mydriasis, trockene/warme Haut, Harnverhalt, Delir, Hyperthermie</td><td>TZA, Atropin, Antihistaminika, Tollkirsche</td></tr>
<tr><td><strong>Cholinerg</strong></td><td>Bradykardie, Miosis, Speichelfluss, Bronchospasmus, Diarrhoe, Schwitzen (SLUDGE)</td><td>Organophosphate, Physostigmin, Pilze</td></tr>
<tr><td><strong>Serotoninerg</strong></td><td>Tachykardie, Hypertonie, Hyperthermie, Mydriasis, Klonus, Agitation, Tremor</td><td>SSRI, MAO-Hemmer, Tramadol, MDMA</td></tr>
</tbody>
</table></div>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur)</li>
<li>1–2x venöser Zugang</li>
<li><strong>BGA</strong> (pH? Laktat? Glukose? E'lyte? MetHb? COHb?)</li>
<li><strong>BZ-Messung</strong> (Hypoglykämie?)</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte, NW, GOT, GPT, CK, Lipase, Gerinnung, Laktat, Paracetamol-Spiegel, Ethanol-Spiegel</li>
<li><strong>12-Kanal-EKG</strong> (QTc? QRS-Verbreiterung? Arrhythmie? AV-Block?)</li>
</ul>
<h3>Klinische Untersuchung</h3>
<ul>
<li><strong>Anamnese</strong> (Fremdanamnese, Rettungsdienst!): Welche Substanz? Menge? Zeitpunkt? Suizidabsicht? Zugängliche Medikamente/Substanzen? Vorerkrankungen? Dauermedikation?</li>
<li><strong>Körperliche Untersuchung:</strong> GCS? Pupillen (Miosis/Mydriasis)? Hautbefund (trocken/feucht, warm/kalt, Einstichstellen)? Foetor? Darmgeräusche? Blasenfüllung? Muskeltonus? Klonus? Tremor? Temperatur?</li>
</ul>
<h3>Erweiterte Diagnostik (ggf.)</h3>
<ul>
<li><strong>Urin-Drogenscreening</strong> (qualitativ – Ergebnis ändert selten das akute Management, aber kann diagnostisch hilfreich sein)</li>
<li><strong>Spezifische Medikamentenspiegel:</strong> Paracetamol, Salicylate, Digoxin, Lithium, Antikonvulsiva, Methanol, Ethylenglykol</li>
<li><strong>Anionenlücke und osmotische Lücke</strong> berechnen (toxische Alkohole?)</li>
<li><strong>cCT nativ</strong> bei unklarer Vigilanzminderung</li>
<li><strong>Rö-Thorax</strong> bei V.a. Aspiration</li>
<li><strong>Giftnotruf kontaktieren:</strong> z.B. Giftinformationszentrum-Nord (GIZ-Nord) 0551-19240</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Allgemeinmaßnahmen (bei JEDER Intoxikation)</h3>
<ul>
<li>Stabilisierung gemäß <strong>ABCDE-Schema</strong> (Atemwegssicherung hat Priorität!)</li>
<li>Monitoring: EKG, SpO₂, RR, GCS, Temperatur</li>
<li>i.v.-Zugang + Vollelektrolytlösung</li>
<li>Glukosetestung und Korrektur</li>
</ul>
<h3>Primäre Giftelimination</h3>
<ul>
<li><strong>Aktivkohle</strong> (1 g/kg KG, max. 50 g) p.o. oder über Magensonde:
<ul>
<li>Indikation: potenziell toxische Ingestion ≤ 1 Stunde</li>
<li>Kontraindikation: Bewusstseinseintrübung ohne gesicherten Atemweg, Säuren/Laugen, Alkohole, Schwermetalle, Lithium</li>
</ul>
</li>
<li><strong>Magenspülung:</strong> nur in Ausnahmefällen (≤ 1h, lebensbedrohliche Ingestion, nach Intubation)</li>
</ul>
<h3>Antidottherapie (Auswahl)</h3>
<div class="table-wrap"><table>
<thead><tr><th>Substanz</th><th>Antidot</th></tr></thead>
<tbody>
<tr><td>Opioide</td><td><strong>Naloxon</strong> 0,4–2 mg i.v./i.n. (titrierend)</td></tr>
<tr><td>Benzodiazepine</td><td><strong>Flumazenil</strong> 0,2 mg i.v. (titrierend; CAVE: Krampfanfälle bei Mischintox/BZD-Abhängigkeit)</td></tr>
<tr><td>Paracetamol</td><td><strong>N-Acetylcystein (NAC)</strong> i.v. nach Protokoll</td></tr>
<tr><td>Betablocker</td><td><strong>Glukagon</strong> 5–10 mg i.v., Katecholamine</td></tr>
<tr><td>Calciumantagonisten</td><td><strong>Calcium</strong> i.v., <strong>Insulin/Glukose</strong> (High-dose-Insulin), Katecholamine</td></tr>
<tr><td>Digitalis</td><td><strong>Digitalis-Antitoxin (Fab-Fragmente)</strong></td></tr>
<tr><td>Organophosphate</td><td><strong>Atropin</strong> titrierend + <strong>Obidoxim</strong></td></tr>
<tr><td>Methanol/Ethylenglykol</td><td><strong>Fomepizol</strong> (oder Ethanol) + Hämodialyse</td></tr>
<tr><td>Kohlenmonoxid</td><td><strong>100% O₂</strong>, ggf. hyperbare O₂-Therapie</td></tr>
<tr><td>TZA</td><td><strong>Natriumbikarbonat</strong> (bei QRS &gt; 100 ms)</td></tr>
</tbody>
</table></div>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Flumazenil</strong> nur bei isolierter Benzodiazepin-Intoxikation ohne Krampfanamnese und ohne Mischintoxikation (TZA!) verwenden – Krampfanfall-Risiko!</p></div>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Treat the patient, not the poison</strong> – Stabilisierung nach ABCDE hat immer Priorität!</li>
<li>An <strong>Paracetamol-Spiegel</strong> bei jeder unklaren Ingestion denken (häufig als Mischpräparat, späte Leberschädigung!)</li>
<li>Bei jeder Intoxikation: <strong>Suizidalität</strong> evaluieren und psychiatrische Vorstellung nach Aufklaren</li>
<li><strong>Giftnotruf</strong> frühzeitig kontaktieren für substanzspezifische Beratung</li>
<li>EKG-Veränderungen (QRS-Verbreiterung, QTc-Verlängerung) können auf lebensbedrohliche Intoxikationen hinweisen (TZA, Antipsychotika)</li>
<li><strong>Aktivkohle</strong> ist nur innerhalb 1 Stunde nach Ingestion sinnvoll und bei intaktem Atemwegsschutz</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> schwere Bewusstseinsstörung, Intubation, Kreislaufinstabilität, lebensbedrohliche Arrhythmien, Antidotperfusor</li>
<li><strong>Überwachungsstation:</strong> moderate Intoxikation, Antidotgabe, Monitoring notwendig</li>
<li><strong>Notaufnahme/Beobachtung:</strong> leichte Intoxikation bis zum Aufklaren</li>
<li><strong>Psychiatrische Vorstellung</strong> bei suizidaler Intoxikation nach medizinischer Stabilisierung</li>
</ul>`
}
],
stand: "12/24",
sources: `Brvar M. Poisoning. In: Tintinalli JE et al. (Hrsg.) Tintinalli's Emergency Medicine. 9th ed. McGraw-Hill, 2020.<br>
Nelson LS et al. Goldfrank's Toxicologic Emergencies. 11th ed. McGraw-Hill, 2019.<br>
Giftinformationszentrum-Nord (GIZ-Nord): www.giz-nord.de`
},
{
id: "akute-mesenterialischaemie",
title: "Akute Mesenterialischämie",
category: "Gastroenterologie",
catKey: "gi",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Akute Mesenterialischämie:</strong> Akute Minderdurchblutung des Darms mit drohender Darmnekrose und hoher Letalität (60–80%)</li>
</ul>
<h3>Formen</h3>
<ul>
<li><strong>Arterielle Embolie (50%):</strong> meist A. mesenterica superior (Emboliequelle: VHF, Endokarditis, Aortenaneurysma)</li>
<li><strong>Arterielle Thrombose (25%):</strong> auf dem Boden einer vorbestehenden Arteriosklerose</li>
<li><strong>Non-okklusive Mesenterialischämie (NOMI, 20%):</strong> funktionelle Minderdurchblutung bei Low-Output (kardiogener Schock, Sepsis, Vasopressortherapie)</li>
<li><strong>Mesenterialvenenthrombose (5%):</strong> Pfortaderthrombose, Thrombophilie, Leberzirrhose, Pankreatitis</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Risikofaktoren arterielle Embolie:</strong> Vorhofflimmern, Klappenersatz, Endokarditis, Z.n. Myokardinfarkt, Aortenaneurysma</li>
<li><strong>Risikofaktoren arterielle Thrombose:</strong> Arteriosklerose, Diabetes mellitus, pAVK, bekannte Mesenterialstenose</li>
<li><strong>Risikofaktoren NOMI:</strong> Kardiogener Schock, Sepsis, Herzchirurgie, Hämodialyse, hochdosierte Vasopressoren</li>
<li><strong>Risikofaktoren venöse Thrombose:</strong> Leberzirrhose, Thrombophilie, myeloproliferative Erkrankungen, Pankreatitis, abdominelle Operationen</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Leitsymptom:</strong> Akut einsetzender, <strong>heftigster abdomineller Schmerz</strong>, initial oft <strong>unverhältnismäßig</strong> im Vergleich zum Untersuchungsbefund (<strong>„Schmerz-Befund-Diskrepanz"</strong>)</li>
<li>Übelkeit, Erbrechen, Diarrhoe (ggf. blutig)</li>
<li>Hämatochezie oder Meläna (Zeichen der Darmnekrose)</li>
<li>Zunehmend <strong>Abwehrspannung</strong> und <strong>Peritonismus</strong> (Zeichen der Nekrose/Perforation – Spätstadium!)</li>
<li>Tachykardie, Hypotonie, Schockzeichen</li>
<li>Fehlende Darmgeräusche (paralytischer Ileus)</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Im Frühstadium kann der abdominelle Untersuchungsbefund blande sein, obwohl der Patient stärkste Schmerzen angibt! Die <strong>Schmerz-Befund-Diskrepanz</strong> ist hochverdächtig!</p></div>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1–2x großlumiger venöser Zugang</li>
<li><strong>BGA</strong> (Laktat! pH? BE? – <strong>Laktaterhöhung ist ein Alarmzeichen!</strong>)</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte, NW, GOT, GPT, LDH, Lipase, Gerinnung, Laktat, PCT, Kreuzblut</li>
<li>12-Kanal-EKG (Vorhofflimmern als Emboliequelle?)</li>
</ul>
<h3>Klinische Untersuchung</h3>
<ul>
<li><strong>Anamnese:</strong> Schmerzbeginn (akut?)? Schmerzcharakter? Vorerkrankungen (VHF, pAVK, Arteriosklerose)? Medikamente (Antikoagulation, Vasopressoren)? Vorangegangene kardiovaskuläre Ereignisse?</li>
<li><strong>Körperliche Untersuchung:</strong> Abdomen (initial weich trotz Schmerzen? Abwehrspannung? Peritonismus?), Darmgeräusche? Blut im Stuhl (DRU)?</li>
</ul>
<h3>Bildgebung</h3>
<ul>
<li><strong>CT-Angiographie (Abdomen + Becken)</strong> = Goldstandard: Gefäßverschluss? Darmwandverdickung? Pneumatosis intestinalis? Portale Gasansammlung? Freie Flüssigkeit/Luft?</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Bei begründetem klinischem Verdacht auf Mesenterialischämie keine Zeit durch andere Untersuchungen verlieren – <strong>sofortige CT-Angiographie!</strong></p></div>`
},
{
title: "Therapie",
html: `<h3>Allgemeinmaßnahmen</h3>
<ul>
<li>Stabilisierung gemäß ABCDE-Schema</li>
<li>Aggressive Volumentherapie (Vollelektrolytlösung)</li>
<li>Analgesie (Opioide i.v. titrierend)</li>
<li>Nahrungskarenz, Magensonde</li>
<li>Breitspektrum-Antibiotikatherapie (z.B. Piperacillin/Tazobactam 4,5 g i.v.)</li>
<li><strong>Therapeutische Antikoagulation</strong> mit UFH (Ziel-PTT 60–80s)</li>
</ul>
<h3>Spezifische Therapie</h3>
<ul>
<li><strong>Arterielle Embolie/Thrombose:</strong>
<ul>
<li>Interventionelle Therapie (Katheter-Thrombektomie, lokale Lyse) oder</li>
<li>Chirurgische Embolektomie/Thrombektomie ± Bypass</li>
<li>Bei Zeichen der Darmnekrose: <strong>Notfall-Laparotomie</strong> mit Resektion des nekrotischen Darms</li>
</ul>
</li>
<li><strong>NOMI:</strong> Behandlung der Grunderkrankung (Kreislaufstabilisierung, Vasopressoren reduzieren wenn möglich), intraarterielle Papaverin-Infusion, ggf. OP</li>
<li><strong>Mesenterialvenenthrombose:</strong> Therapeutische Antikoagulation, ggf. chirurgische Intervention bei Peritonitis</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Zeitfaktor!</strong> Die Prognose hängt entscheidend von der Zeitspanne bis zur Revaskularisierung ab. Jede Verzögerung erhöht die Letalität!</p></div>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Akute Mesenterialischämie = vaskulärer Notfall</strong> – Letalität 60–80% bei verzögerter Diagnose!</li>
<li>Daran denken bei: <strong>akuter Bauchschmerz + VHF + Laktaterhöhung</strong></li>
<li><strong>Schmerz-Befund-Diskrepanz</strong> (stärkste Schmerzen, weiches Abdomen) ist hochverdächtig – nicht abwarten!</li>
<li><strong>Laktat</strong> ist der wichtigste Labormarker (aber: normales Laktat schließt nicht aus!)</li>
<li>Goldstandard: <strong>CT-Angiographie</strong> – sofort durchführen bei Verdacht</li>
<li>Interdisziplinäre Zusammenarbeit: <strong>Viszeralchirurgie + Interventionelle Radiologie + Intensivmedizin</strong></li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation</strong> (immer)</li>
<li>Sofortige viszeralchirurgische und ggf. interventionell-radiologische Mitbeurteilung</li>
<li>OP-Bereitschaft</li>
</ul>`
}
],
stand: "12/24",
sources: `Bala M et al. Acute mesenteric ischemia: updated guidelines of the WSES. World J Emerg Surg. 2022;17(1):54.<br>
Klar E et al. Akute mesenteriale Ischämie – ein vaskulärer Notfall. Dtsch Arztebl Int. 2012;109(14):249-56.<br>
Clair DG et al. Mesenteric Ischemia. N Engl J Med. 2016;374(10):959-68.`
},
{
id: "akute-nebenniereninsuffizienz",
title: "Akute Nebenniereninsuffizienz",
category: "Metabolisch",
catKey: "metab",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Akute Nebenniereninsuffizienz (Addison-Krise):</strong> Lebensbedrohlicher Zustand durch akuten Cortisolmangel mit Kreislaufinsuffizienz, der einer sofortigen Glukokortikoidsubstitution bedarf</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Häufigste Ursache:</strong> Stresssituation bei bekannter NNR-Insuffizienz ohne adäquate Dosisanpassung (Infektion, Operation, Trauma, Erbrechen/Diarrhoe)</li>
<li><strong>Abruptes Absetzen</strong> einer Langzeit-Glukokortikoidtherapie (iatrogen, häufigste Ursache einer sekundären NNR-Insuffizienz)</li>
<li><strong>Primäre NNR-Insuffizienz (M. Addison):</strong> Autoimmun-Adrenalitis (häufigste Ursache), bilaterale NNR-Einblutung (Waterhouse-Friderichsen-Syndrom bei Meningokokkensepsis), Tuberkulose, Metastasen, CMV bei HIV</li>
<li><strong>Sekundäre NNR-Insuffizienz:</strong> Hypophyseninsuffizienz (Tumor, OP, Bestrahlung, Scheehan-Syndrom, Hypophysitis durch Checkpoint-Inhibitoren)</li>
<li><strong>Medikamenteninduziert:</strong> Ketoconazol, Etomidat, Checkpointinhibitoren</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Kreislaufinstabilität:</strong> Hypotonie (refraktär gegenüber Volumen- und Vasopressortherapie!), Tachykardie, Schock</li>
<li><strong>Übelkeit, Erbrechen, abdominelle Schmerzen</strong> (Pseudoperitonitis)</li>
<li><strong>Schwäche, Müdigkeit, Adynamie</strong></li>
<li><strong>Dehydratation</strong></li>
<li><strong>Hypoglykämie</strong></li>
<li>ggf. <strong>Fieber</strong> (ohne Infektfokus oder als Trigger)</li>
<li>ggf. <strong>Bewusstseinsstörung</strong> bis Koma</li>
<li>ggf. <strong>Hyperpigmentierung</strong> der Haut (bei primärer NNR-Insuffizienz, chronisch)</li>
</ul>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1–2x großlumiger venöser Zugang</li>
<li><strong>BGA</strong> (Hyperkaliämie? Hyponatriämie? Hypoglykämie? Azidose?)</li>
<li><strong>BZ-Messung</strong></li>
<li><strong>Labor:</strong> BB, CRP, E'lyte (Na⁺↓, K⁺↑), NW, BZ, <strong>Cortisol</strong> (Basalwert vor Hydrocortisongabe – Diagnostik darf Therapie aber NICHT verzögern!), ACTH, TSH, Gerinnung</li>
<li>12-Kanal-EKG (Hyperkaliämie-Zeichen?)</li>
</ul>
<h3>Klinische Untersuchung</h3>
<ul>
<li><strong>Anamnese:</strong> Bekannte NNR-Insuffizienz? Steroidtherapie (aktuell oder kürzlich abgesetzt)? Notfallausweis? Dosisanpassung bei Stress? Auslöser (Infektion, Erbrechen, OP, Trauma)? Checkpoint-Inhibitor-Therapie?</li>
<li><strong>Körperliche Untersuchung:</strong> RR? Schockzeichen? Dehydratation? Hyperpigmentierung? Abdominelle Schmerzen? Fieber? Bewusstseinslage?</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Die <strong>Therapie darf durch die Diagnostik nicht verzögert</strong> werden! Bei klinischem Verdacht sofort Hydrocortison verabreichen. Blutentnahme für Cortisol idealerweise VOR Therapie, aber: <strong>erst spritzen, dann diagnostizieren!</strong></p></div>`
},
{
title: "Therapie",
html: `<h3>Sofortmaßnahmen</h3>
<ul>
<li><strong>Hydrocortison 100 mg i.v. Bolus</strong> (sofort!)</li>
<li>Dann: <strong>Hydrocortison 200 mg/24h i.v.</strong> als Dauerinfusion oder 50 mg i.v. alle 6–8h</li>
<li><strong>Aggressive Volumentherapie:</strong> NaCl 0,9% (initial 1000 ml rasch, dann nach Bedarf)</li>
<li><strong>Glukosesubstitution:</strong> Glukose 10–40% i.v. bei Hypoglykämie</li>
<li><strong>Hyperkaliämie behandeln</strong> (s. SOP Hyperkaliämie)</li>
</ul>
<h3>Weiteres Vorgehen</h3>
<ul>
<li>Auslöser identifizieren und behandeln (Infektion, Sepsis → Antibiotika)</li>
<li>Monitoring auf Intensivstation</li>
<li>Schrittweise Reduktion auf orale Substitution nach Stabilisierung</li>
<li>Keine Mineralokortikoidsubstitution in der Akutphase nötig (Hydrocortison &gt; 50 mg hat ausreichende mineralokortikoide Wirkung)</li>
</ul>
<div class="callout callout-hinweis"><p><strong>Hinweis:</strong> <strong>Kein Dexamethason</strong> in der Akuttherapie verwenden, da es keine mineralokortikoide Wirkung hat! Hydrocortison ist das Mittel der Wahl.</p></div>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Addison-Krise = lebensbedrohlich</strong> – bei Verdacht sofort Hydrocortison 100 mg i.v. verabreichen, BEVOR Diagnostik abgeschlossen ist!</li>
<li>Klassische <strong>Laborkonstellation:</strong> Hyponatriämie + Hyperkaliämie + Hypoglykämie</li>
<li>An Addison-Krise denken bei: <strong>therapierefraktärer Hypotonie</strong> (kein Ansprechen auf Volumen/Katecholamine)</li>
<li>Häufigste Ursache: <strong>unzureichende Steroiddosis-Anpassung</strong> bei bekannter NNR-Insuffizienz in Stresssituationen</li>
<li>Patienten mit NNR-Insuffizienz sollten einen <strong>Notfallausweis</strong> und <strong>Notfall-Hydrocortison</strong> bei sich tragen</li>
<li>An <strong>Checkpoint-Inhibitor-induzierte Hypophysitis/Adrenalitis</strong> als neue Ursache denken!</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation</strong> bei hämodynamischer Instabilität, Schock, Bewusstseinsstörung</li>
<li><strong>Überwachungsstation</strong> bei rascher Stabilisierung</li>
<li>Endokrinologisches Konsil im Verlauf</li>
</ul>`
}
],
stand: "12/24",
sources: `Bornstein SR et al. Diagnosis and Treatment of Primary Adrenal Insufficiency: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab. 2016;101(2):364-89.<br>
Rushworth RL et al. Adrenal Crisis. N Engl J Med. 2019;381:852-61.<br>
Quinkler M et al. S1-Leitlinie Nebennieren­insuffizienz. Endokrinologie Informationen. 2020;Sonderheft.`
},
{
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
<tr><td><strong>1</strong></td><td>Anstieg ≥ 0,3 mg/dl in 48h oder 1,5–1,9× Ausgangswert in 7d</td><td>&lt; 0,5 ml/kg/h für 6–12h</td></tr>
<tr><td><strong>2</strong></td><td>2,0–2,9× Ausgangswert</td><td>&lt; 0,5 ml/kg/h für ≥ 12h</td></tr>
<tr><td><strong>3</strong></td><td>≥ 3× Ausgangswert oder Kreatinin ≥ 4 mg/dl oder Dialyseindikation</td><td>&lt; 0,3 ml/kg/h für ≥ 24h oder Anurie ≥ 12h</td></tr>
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
<li><strong>Oligurie/Anurie</strong> (&lt; 400 ml/24h bzw. &lt; 100 ml/24h)</li>
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
<div class="callout callout-hinweis"><p><strong>Hinweis:</strong> <strong>FENa &lt; 1%</strong> spricht für prärenale AKI, <strong>FENa &gt; 2%</strong> für renale/intrinsische AKI (CAVE: verfälscht durch Diuretika – dann FE-Harnstoff verwenden).</p></div>`
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
<li><strong>Metabolische Azidose:</strong> Natriumbikarbonat bei pH &lt; 7,15–7,20 (Einzelfallentscheidung)</li>
<li><strong>Lungenödem:</strong> Furosemid, NIV, ggf. Hämodialyse</li>
</ul>
<h3>Dialyseindikation (Notfall)</h3>
<ul>
<li><strong>Therapierefraktäre Hyperkaliämie</strong></li>
<li><strong>Therapierefraktäre Überwässerung</strong> (Lungenödem)</li>
<li><strong>Schwere metabolische Azidose</strong> (pH &lt; 7,1)</li>
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
},
{
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
<tr><td><strong>Moderat schwer</strong></td><td>Transiente Organinsuffizienz (&lt; 48h) und/oder lokale Komplikationen</td></tr>
<tr><td><strong>Schwer</strong></td><td>Persistierende Organinsuffizienz (&gt; 48h)</td></tr>
</tbody>
</table></div>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Gallensteine (40–50%):</strong> Häufigste Ursache (biliäre Pankreatitis)</li>
<li><strong>Alkohol (25–35%):</strong> Zweithäufigste Ursache</li>
<li><strong>Hypertriglyzeridämie (&gt; 1000 mg/dl)</strong></li>
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
},
{
id: "akuter-gichtanfall",
title: "Akuter Gichtanfall",
category: "Sonstige",
catKey: "sonst",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Akuter Gichtanfall (Arthritis urica):</strong> Akute Gelenkentzündung durch Ablagerung von Mononatriumuratkristallen in Gelenken und periartikulärem Gewebe bei Hyperurikämie</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Hyperurikämie</strong> (Serumharnsäure &gt; 6,8 mg/dl) als Voraussetzung
<ul>
<li><strong>Verminderte renale Ausscheidung (90%):</strong> Niereninsuffizienz, Diuretika (Thiazide, Schleifendiuretika), Ciclosporin, niedrig dosierte ASS, Alkohol</li>
<li><strong>Überproduktion (10%):</strong> Purinreiche Ernährung, Tumorlysesyndrom, myeloproliferative Erkrankungen, Psoriasis</li>
</ul>
</li>
<li><strong>Auslöser eines akuten Anfalls:</strong> Purinreiche Mahlzeiten, Alkohol (v.a. Bier), Dehydratation, akute Erkrankung, OP, Trauma, Beginn/Dosisänderung harnsäuresenkender Therapie</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Perakuter Gelenkschmerz</strong> (Beginn häufig nachts)</li>
<li><strong>Monarthritis</strong> (klassisch: Großzehengrundgelenk = <strong>Podagra</strong>, 60%)</li>
<li>Weitere Lokalisationen: Sprunggelenk, Knie, Handgelenk, Fingergelenke</li>
<li><strong>Schwellung, Rötung, Überwärmung</strong> des betroffenen Gelenks</li>
<li>Extreme Berührungsempfindlichkeit</li>
<li>ggf. Fieber</li>
<li>ggf. <strong>Tophi</strong> bei chronischer Gicht (Ohrmuschel, Ellenbogen, Finger, Achillessehne)</li>
</ul>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + Vitalparameter</li>
<li>1x venöser Zugang</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte, NW, <strong>Harnsäure</strong> (CAVE: kann im akuten Anfall normal oder sogar erniedrigt sein!), Gerinnung</li>
</ul>
<h3>Klinische Untersuchung</h3>
<ul>
<li><strong>Anamnese:</strong> Schmerzcharakter/-beginn? Betroffenes Gelenk? Vorherige Gichtanfälle? Bekannte Hyperurikämie? Medikamente (Diuretika, ASS)? Ernährung/Alkohol? Auslöser? Nierenerkrankung?</li>
<li><strong>Körperliche Untersuchung:</strong> Gelenkschwellung/-rötung/-überwärmung? Beweglichkeit? Tophi? Fieber?</li>
</ul>
<h3>Erweiterte Diagnostik (ggf.)</h3>
<ul>
<li><strong>Gelenkpunktion</strong> (Goldstandard, insbesondere bei Erstmanifestation oder DD septische Arthritis): Nachweis von <strong>Mononatriumuratkristallen</strong> (negativ doppelbrechend in Polarisationsmikroskopie), Zellzahl, Gramfärbung, Kultur</li>
<li><strong>Sonographie des Gelenks:</strong> Doppelkonturzeichen (Uratkristalle auf Knorpeloberfläche), Schneesturm-Phänomen</li>
<li><strong>Röntgen:</strong> bei DD, Gelenkerosionen bei chronischer Gicht</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Bei Fieber + Monarthritis + Rötung immer <strong>septische Arthritis ausschließen!</strong> Im Zweifel Gelenkpunktion!</p></div>`
},
{
title: "Therapie",
html: `<h3>Akute Therapie (so früh wie möglich!)</h3>
<ul>
<li><strong>NSAR</strong> (Mittel der 1. Wahl bei fehlenden KI):
<ul>
<li>Naproxen 750 mg, dann 250 mg 3x/d</li>
<li>Indometacin 50 mg 3x/d</li>
<li>CAVE: kontraindiziert bei Niereninsuffizienz, GI-Ulzera, Herzinsuffizienz</li>
</ul>
</li>
<li><strong>Colchicin:</strong> 0,5 mg 3x/d am Tag 1, dann 0,5 mg 2x/d (nur innerhalb 12h nach Symptombeginn ideal wirksam; CAVE: GI-NW, Dosisreduktion bei Niereninsuffizienz)</li>
<li><strong>Glukokortikoide</strong> (bei KI gegen NSAR und Colchicin):
<ul>
<li>Prednisolon 30–40 mg/d p.o. für 5 Tage, dann ausschleichen</li>
<li>intraartikuläre Injektion (z.B. Triamcinolon) bei Monarthritis nach Ausschluss einer Infektion</li>
</ul>
</li>
<li>Kühlung, Ruhigstellung, Hochlagerung des betroffenen Gelenks</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Bestehende <strong>harnsäuresenkende Therapie</strong> (Allopurinol, Febuxostat) im akuten Anfall <strong>NICHT absetzen</strong> und <strong>NICHT neu beginnen</strong> (kann den Anfall verlängern)! Erst nach Abklingen des Anfalls neu beginnen oder anpassen.</p></div>`
},
{
title: "Merke",
html: `<ul>
<li>Die <strong>Serumharnsäure kann im akuten Anfall normal sein</strong> – ein normaler Wert schließt einen Gichtanfall nicht aus!</li>
<li>Goldstandard der Diagnose: <strong>Nachweis von Uratkristallen im Gelenkpunktat</strong></li>
<li>Immer <strong>septische Arthritis ausschließen</strong> bei akuter Monarthritis mit Fieber!</li>
<li>Harnsäuresenkende Therapie im Anfall <strong>nicht beginnen und nicht absetzen</strong></li>
<li>Die Therapie sollte so <strong>früh wie möglich</strong> nach Symptombeginn erfolgen</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Ambulant:</strong> in den meisten Fällen ambulante Behandlung möglich</li>
<li><strong>Stationär:</strong> bei V.a. septische Arthritis, polyartikulärem Befall, schwerer Komorbidität, i.v.-Therapiebedarf, Niereninsuffizienz</li>
</ul>`
}
],
stand: "12/24",
sources: `Richette P et al. 2016 updated EULAR evidence-based recommendations for the management of gout. Ann Rheum Dis. 2017;76(1):29-42.<br>
FitzGerald JD et al. 2020 American College of Rheumatology Guideline for Management of Gout. Arthritis Care Res. 2020;72(6):744-760.<br>
Kiltz U et al. S3-Leitlinie Gicht: Evidenzbasierte fachübergreifende Leitlinie. AWMF-Register-Nr. 060-005, 2024.`
},
{
id: "akuter-harnverhalt",
title: "Akuter Harnverhalt",
category: "Nephrologie",
catKey: "nephro",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Akuter Harnverhalt:</strong> Akute Unfähigkeit, die gefüllte Harnblase spontan zu entleeren, trotz schmerzhaften Harndrangs. Urologischer Notfall!</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Obstruktiv (häufigste Ursache):</strong>
<ul>
<li><strong>Benigne Prostatahyperplasie (BPH):</strong> häufigste Ursache beim Mann</li>
<li>Prostatakarzinom</li>
<li>Harnröhrenstriktur</li>
<li>Blasenstein, Koagel</li>
<li>Phimose</li>
</ul>
</li>
<li><strong>Medikamentös:</strong> Anticholinergika, Sympathomimetika, Opioide, trizyklische Antidepressiva, Antihistaminika, Calciumantagonisten, Benzodiazepine</li>
<li><strong>Neurologisch:</strong> Cauda-equina-Syndrom, MS, diabetische autonome Neuropathie, Rückenmarksschädigung, Bandscheibenvorfall, Z.n. Apoplex</li>
<li><strong>Postoperativ:</strong> insbesondere nach Allgemein-/Spinalanästhesie, Becken-/Perineal-Eingriffen</li>
<li><strong>Infektiös:</strong> akute Prostatitis, schwere Harnwegsinfektion, Genitalherpes</li>
<li><strong>Sonstige:</strong> Obstipation (rektale Masse), Schwangerschaft, Myom</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Suprapubischer Schmerz/Druck</strong> und Harndrang</li>
<li><strong>Palpable und perkutierbare Harnblase</strong> (Blasenhochstand)</li>
<li>Unfähigkeit zur Miktion</li>
<li>Unruhe, Agitation</li>
<li>ggf. <strong>Überlaufinkontinenz</strong> (ständiges Tröpfeln bei übervoller Blase)</li>
<li>ggf. <strong>vegetative Begleitsymptome</strong> (Schwitzen, Tachykardie, Übelkeit)</li>
<li>ggf. Fieber (bei begleitendem Harnwegsinfekt/Prostatitis)</li>
<li>ggf. <strong>neurologische Symptome</strong> (Reithosenparästhesie, Beinparese, Sphinkterstörung bei Cauda-equina-Syndrom)</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Bei akutem Harnverhalt + Reithosenparästhesie + Beinparese + Sphinkterstörung an <strong>Cauda-equina-Syndrom</strong> denken → Notfall-MRT!</p></div>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur)</li>
<li>1x venöser Zugang</li>
<li><strong>BGA</strong> (Kalium? Kreatinin? pH? – bei prolongiertem Harnverhalt: Postrenale AKI?)</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte, NW, ggf. PSA (nicht bei V.a. akute Prostatitis), Gerinnung</li>
<li><strong>Urin-Status</strong> (nach Katheterisierung): Leukozyten? Nitrit? Erythrozyten?</li>
</ul>
<h3>Klinische Untersuchung</h3>
<ul>
<li><strong>Anamnese:</strong> Miktionsbeschwerden in der Vorgeschichte (LUTS)? Vorbekannte BPH? Letzte Miktion? Medikamente (Anticholinergika, Opioide, etc.)? Operation? Spinalanästhesie? Neurologische Symptome? Trauma? Hämaturie?</li>
<li><strong>Körperliche Untersuchung:</strong> Suprapubische Schwellung/Druckschmerz? Perkussion (gedämpft)? DRU (Prostatagröße? Druckschmerz bei Prostatitis? Konsistenz? Rektale Masse?)? Neurologischer Status (Perianal-Sensibilität? Analtonus? Beinreflexe? Kraft?)</li>
</ul>
<h3>Erweiterte Diagnostik (ggf.)</h3>
<ul>
<li><strong>Sonographie Blase:</strong> Restharnbestimmung (Volumen?), ggf. Harnstau beidseits?</li>
<li><strong>Sonographie Nieren:</strong> Hydronephrose (postrenale AKI)?</li>
<li><strong>MRT Wirbelsäule:</strong> notfallmäßig bei V.a. Cauda-equina-Syndrom</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Sofortmaßnahme: Blasenentlastung</h3>
<ul>
<li><strong>Transurethrale Katheterisierung</strong> (Methode der Wahl):
<ul>
<li>Sterile Einlage eines transurethralen Dauerkatheters (14–16 Ch beim Mann)</li>
<li>Dokumentation des Ablaufvolumens</li>
<li>Langsame Entleerung (CAVE: Entlastungshämaturie bei Volumina &gt; 1000 ml – fraktionierte Entleerung je 500 ml mit kurzen Pausen erwägen)</li>
</ul>
</li>
<li><strong>Suprapubische Katheteranlage:</strong> bei frustaner transurethraler Katheterisierung, Harnröhrenstriktur, Harnröhrentrauma/V.a. Harnröhrenruptur, akuter Prostatitis</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Bei V.a. <strong>Harnröhrenruptur</strong> (Blut am Meatus, Beckentrauma, perineales Hämatom): <strong>keine transurethrale Katheterisierung!</strong> → Urologisches Konsil, suprapubische Ableitung.</p></div>
<h3>Medikamentöse Therapie</h3>
<ul>
<li><strong>α-Blocker</strong> (z.B. Tamsulosin 0,4 mg 1x/d) → erleichtert Spontanmiktion nach Katheterentfernung bei BPH-assoziiertem Harnverhalt</li>
<li>Auslösende Medikamente identifizieren und möglichst absetzen</li>
<li>Antibiotikatherapie bei begleitendem Harnwegsinfekt</li>
</ul>
<h3>Monitoring nach Entlastung</h3>
<ul>
<li>Überwachung auf <strong>Postobstruktive Diurese</strong> (Polyurie &gt; 200 ml/h nach Entlastung): Flüssigkeit und Elektrolyte bilanzieren, ggf. i.v.-Substitution</li>
<li>Kontrolle der Retentionsparameter (Kreatinin, Kalium)</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Akuter Harnverhalt = Notfall</strong> – sofortige Blasenentlastung durch Katheterisierung!</li>
<li>An <strong>Cauda-equina-Syndrom</strong> denken bei neurologischen Symptomen (Reithosenparästhesie, Beinparese, Sphinkterstörung) → Notfall-MRT!</li>
<li>Bei V.a. <strong>Harnröhrenruptur: keine transurethrale Katheterisierung!</strong></li>
<li>Bei großen Restharnmengen (&gt; 1000 ml): <strong>Postobstruktive Diurese</strong> beachten (Elektrolytentgleisung möglich)</li>
<li><strong>Medikamentenanamnese</strong> ist essenziell – viele Substanzen können Harnverhalt auslösen!</li>
<li>Urologisches Konsil bei: frustraner Katheterisierung, Harnröhrenstriktur, rezidivierendem Harnverhalt, unklarer Ätiologie</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Stationäre Aufnahme:</strong> postrenale AKI, postobstruktive Diurese, Sepsis/Urosepsis, Cauda-equina-Syndrom, Notwendigkeit einer suprapubischen Katheteranlage</li>
<li><strong>Ambulant:</strong> erfolgreiche Katheterisierung, stabile Retentionsparameter, kein Anhalt für Komplikation, urologische Wiedervorstellung innerhalb 2–3 Tagen, Auslassversuch geplant</li>
</ul>`
}
],
stand: "12/24",
sources: `Selius BA et al. Urinary retention in adults: diagnosis and initial management. Am Fam Physician. 2008;77(5):643-50.<br>
Oelke M et al. EAU Guidelines on the Assessment and Non-surgical Management of Urinary Incontinence/Retention. Eur Urol. 2023.<br>
Marshall JR et al. Acute urinary retention. BMJ. 2024;386:e077089.`
},
{
id: "akutes-aortensyndrom",
title: "Akutes Aortensyndrom",
category: "Kardiologie",
catKey: "kardio",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Akutes Aortensyndrom (AAS):</strong> Akute, lebensbedrohliche Erkrankung der Aorta, die eine oder mehrere der folgenden Entitäten umfasst:
<ul>
<li><strong>Aortendissektion:</strong> Einriss der Intima mit Ausbildung eines falschen Lumens in der Media</li>
<li><strong>Intramurales Hämatom (IMH):</strong> Einblutung in die Aortenwand ohne Intimaeinriss (Vorstufe der Dissektion)</li>
<li><strong>Penetrierendes Aortenulkus (PAU):</strong> Ulzeration einer arteriosklerotischen Plaque mit Penetration in die Media</li>
</ul>
</li>
</ul>
<h3>Stanford-Klassifikation</h3>
<div class="table-wrap"><table>
<thead><tr><th>Typ</th><th>Lokalisation</th><th>Therapie</th></tr></thead>
<tbody>
<tr><td><strong>Typ A</strong></td><td>Aorta ascendens beteiligt (unabhängig vom Ursprungsort)</td><td><strong>Notfall-OP</strong></td></tr>
<tr><td><strong>Typ B</strong></td><td>Nur Aorta descendens (distal des Abgangs der A. subclavia sinistra)</td><td>Konservativ/endovaskulär bei Komplikation</td></tr>
</tbody>
</table></div>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Arterielle Hypertonie</strong> (Hauptrisikofaktor, 70–80%)</li>
<li><strong>Arteriosklerose</strong></li>
<li><strong>Bindegewebserkrankungen:</strong> Marfan-Syndrom, Ehlers-Danlos-Syndrom Typ IV, Loeys-Dietz-Syndrom</li>
<li><strong>Bikuspide Aortenklappe</strong></li>
<li><strong>Aortenaneurysma</strong></li>
<li><strong>Kokainabusus</strong></li>
<li><strong>Iatrogen:</strong> Z.n. Herz-OP, Katheterintervention</li>
<li><strong>Trauma:</strong> Dezelerationstrauma (Autounfall)</li>
<li><strong>Schwangerschaft</strong> (3. Trimenon)</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Leitsymptom:</strong> Akut einsetzender, <strong>stärkster (Vernichtungs-)Schmerz</strong> in Brust und/oder Rücken (zwischen den Schulterblättern)
<ul>
<li>Typ A: retrosternal, Ausstrahlung in Hals/Kiefer</li>
<li>Typ B: interscapulär, Ausstrahlung in Rücken/Abdomen</li>
<li>Wandernder Schmerz (Progression der Dissektion)</li>
</ul>
</li>
<li><strong>Blutdruckdifferenz</strong> zwischen den Armen (&gt; 20 mmHg systolisch)</li>
<li><strong>Pulsdefizit</strong> (abgeschwächte oder fehlende Pulse)</li>
<li>ggf. <strong>Aortenklappeninsuffizienz</strong> (neues Diastolikum, Typ A)</li>
<li>ggf. <strong>Perikardtamponade</strong> (Hypotonie, JVD, gedämpfte Herztöne = Beck-Trias, Typ A)</li>
<li>ggf. <strong>Malperfusionssyndrome:</strong> Myokardinfarkt (Koronarostien), Schlaganfall (Karotiden), Mesenterialischämie (Viszeralarterien), akute Extremitätenischämie, Niereninsuffizienz, Paraparese (Spinalarterien)</li>
<li>ggf. Synkope</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Die Aortendissektion ist ein Chamäleon! Sie kann einen STEMI, Schlaganfall, akutes Abdomen oder akute Extremitätenischämie imitieren!</p></div>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter (RR an <strong>beiden Armen</strong>)</li>
<li>2x großlumiger venöser Zugang</li>
<li><strong>BGA</strong> (Laktat? Hb?)</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte, NW, GOT, GPT, LDH, Lipase, Gerinnung, <strong>D-Dimere</strong>, hs-Troponin, Kreuzblut, Blutgruppe</li>
<li><strong>12-Kanal-EKG:</strong> STEMI-Zeichen (Koronarmalperfusion)? Oft unspezifisch</li>
</ul>
<h3>Klinische Untersuchung</h3>
<ul>
<li><strong>Anamnese:</strong> Akuter Schmerzbeginn? Lokalisation/Ausstrahlung? Wandernd? Vorerkrankungen (Hypertonie, Aortenaneurysma, Bindegewebserkrankung)? Medikamente? Kokain?</li>
<li><strong>Körperliche Untersuchung:</strong> RR-Differenz? Pulsdefizit? Neues Diastolikum (Aortenklappeninsuffizienz)? Neurologie (Paresen, Aphasie)? Abdomen? Extremitäten (Ischämie)?</li>
</ul>
<h3>Bildgebung</h3>
<ul>
<li><strong>CT-Angiographie (Aorta gesamt)</strong> = Goldstandard (Methode der Wahl in der Notaufnahme): Dissektion? Intimaflap? Falsches Lumen? IMH? PAU? Malperfusion? Perikarderguss?</li>
<li><strong>POCUS/TTE:</strong> Perikarderguss? Aortenklappeninsuffizienz? Dilatierte Aortenwurzel? (Screening, keine ausreichende Sensitivität zum Ausschluss!)</li>
<li>TEE: Alternative bei instabilen Patienten (intraoperativ, am Bett)</li>
</ul>
<div class="callout callout-hinweis"><p><strong>Hinweis:</strong> <strong>D-Dimere</strong> haben einen hohen negativ-prädiktiven Wert bei niedrigem klinischem Verdacht (Ausschlussdiagnostik innerhalb 14h nach Symptombeginn). Ein normaler D-Dimer-Wert bei niedrigem ADD-RS (Aortic Dissection Detection Risk Score) macht ein AAS unwahrscheinlich.</p></div>`
},
{
title: "Therapie",
html: `<h3>Sofortmaßnahmen (bei jedem AAS)</h3>
<ul>
<li>Stabilisierung gemäß ABCDE-Schema</li>
<li><strong>Schmerztherapie:</strong> Morphin 2–5 mg i.v. titrierend (Schmerzreduktion senkt Sympathikusaktivierung und RR)</li>
<li><strong>Anti-Impuls-Therapie (Ziel: HF &lt; 60/min, RR syst. 100–120 mmHg):</strong>
<ul>
<li><strong>Esmolol-Perfusor</strong> (Mittel der 1. Wahl): 500 µg/kg Bolus, dann 50–300 µg/kg/min</li>
<li>Alternativ: <strong>Labetalol</strong> 20 mg i.v. Bolus, dann Perfusor</li>
<li>Bei KI gegen Betablocker: Verapamil oder Diltiazem i.v.</li>
<li>Ggf. zusätzlich <strong>Urapidil</strong> i.v. bei unzureichender RR-Senkung</li>
</ul>
</li>
<li><strong>Kreuzblut und Blutprodukte bereitstellen</strong></li>
</ul>
<h3>Typ A: Notfall-OP</h3>
<ul>
<li><strong>Sofortige herzchirurgische Konsultation und OP-Vorbereitung</strong></li>
<li>Ersatz der Aorta ascendens ± Aortenklappenersatz/-rekonstruktion ± Bogenersatz</li>
<li>Letalität ohne OP: 1–2% pro Stunde in den ersten 24–48h</li>
</ul>
<h3>Typ B: Differenzierte Therapie</h3>
<ul>
<li><strong>Unkompliziert:</strong> Konservativ (Intensivüberwachung, Anti-Impuls-Therapie, Schmerztherapie)</li>
<li><strong>Kompliziert</strong> (Malperfusion, Ruptur, therapierefraktäre Schmerzen/Hypertonie, Progression): <strong>TEVAR</strong> (thorakale endovaskuläre Aortenreparatur)</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Bei Typ A Dissektion: <strong>keine Lyse/PCI</strong> bei begleitendem STEMI durch Koronarmalperfusion! Stattdessen Notfall-OP!</p></div>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Typ A = Notfall-OP!</strong> Jede Stunde Verzögerung erhöht die Letalität um 1–2%!</li>
<li><strong>RR an beiden Armen messen</strong> bei jedem Patienten mit akutem Thoraxschmerz!</li>
<li>Anti-Impuls-Therapie (<strong>Betablocker zuerst!</strong>): Ziel HF &lt; 60/min, RR syst. 100–120 mmHg</li>
<li>Die Aortendissektion kann STEMI, Stroke, akutes Abdomen und akute Extremitätenischämie <strong>imitieren</strong> – immer daran denken!</li>
<li>Bei V.a. AAS und hämodynamischer Instabilität: CT sofort, keine Verzögerung durch andere Diagnostik</li>
<li>An <strong>Bindegewebserkrankungen</strong> denken bei jungen Patienten (Marfan, Ehlers-Danlos)</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Typ A:</strong> Sofort OP / Herzchirurgische Intensivstation</li>
<li><strong>Typ B unkompliziert:</strong> Intensivstation (Monitoring, Anti-Impuls-Therapie)</li>
<li><strong>Typ B kompliziert:</strong> Interventionelle/chirurgische Versorgung + Intensivstation</li>
</ul>`
}
],
stand: "12/24",
sources: `Isselbacher EM et al. 2022 ACC/AHA Guideline for the Diagnosis and Management of Aortic Disease. Circulation. 2022;146(24):e334-e482.<br>
Erbel R et al. 2014 ESC Guidelines on the diagnosis and treatment of aortic diseases. Eur Heart J. 2014;35(41):2873-926.<br>
Nienaber CA et al. Aortic dissection. Nat Rev Dis Primers. 2016;2:16053.`
},
{
id: "anaemie",
title: "Anämie",
category: "Hämatologie",
catKey: "haem",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Anämie:</strong> Verminderung der Hämoglobinkonzentration unter den geschlechts- und altersabhängigen Normwert
<ul>
<li>Frauen: Hb &lt; 12 g/dl</li>
<li>Männer: Hb &lt; 13 g/dl</li>
</ul>
</li>
</ul>
<h3>Schweregradeinschätzung</h3>
<div class="table-wrap"><table>
<thead><tr><th>Schweregrad</th><th>Hb (g/dl)</th></tr></thead>
<tbody>
<tr><td>Leicht</td><td>10–12 (♀) / 10–13 (♂)</td></tr>
<tr><td>Moderat</td><td>8–10</td></tr>
<tr><td>Schwer</td><td>6,5–8</td></tr>
<tr><td>Lebensbedrohlich</td><td>&lt; 6,5</td></tr>
</tbody>
</table></div>`
},
{
title: "Ursachen",
html: `<h3>Mikrozytär (MCV &lt; 80 fl)</h3>
<ul>
<li><strong>Eisenmangelanämie</strong> (häufigste Ursache weltweit): chronische Blutung (GI, gynäkologisch), Malabsorption, Malnutrition</li>
<li>Thalassämie</li>
<li>Anämie der chronischen Erkrankung (kann auch normozytär sein)</li>
<li>Sideroblastische Anämie</li>
</ul>
<h3>Normozytär (MCV 80–100 fl)</h3>
<ul>
<li><strong>Akute Blutung</strong></li>
<li><strong>Anämie der chronischen Erkrankung</strong> (Infektion, Tumor, Autoimmunerkrankung)</li>
<li>Renale Anämie (EPO-Mangel)</li>
<li>Hämolytische Anämie (autoimmun, mechanisch, hereditär)</li>
<li>Knochenmarkserkrankung (Aplasie, Myelodysplasie, Infiltration)</li>
</ul>
<h3>Makrozytär (MCV &gt; 100 fl)</h3>
<ul>
<li><strong>Vitamin B12-Mangel</strong> (perniziöse Anämie, Malabsorption)</li>
<li><strong>Folsäuremangel</strong></li>
<li>Myelodysplastisches Syndrom</li>
<li>Alkoholabusus, Lebererkrankung</li>
<li>Medikamente (Methotrexat, Hydroxyurea)</li>
<li>Hypothyreose</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Allgemeinsymptome:</strong> Müdigkeit, Schwäche, Leistungsminderung, Konzentrationsstörungen</li>
<li><strong>Kardiovaskulär:</strong> Tachykardie, Palpitationen, Belastungsdyspnoe, Schwindel, ggf. Angina pectoris (bei KHK)</li>
<li><strong>Haut/Schleimhäute:</strong> Blässe (Konjunktiven, Handinnenflächen), ggf. Ikterus (hämolytische Anämie)</li>
<li><strong>Eisenmangelspezifisch:</strong> Mundwinkelrhagaden, brüchige Nägel (Koilonychie), Plummer-Vinson-Syndrom, Pica</li>
<li><strong>B12-Mangelspezifisch:</strong> funikuläre Myelose (Gangunsicherheit, Parästhesien, Pallhypästhesie), Glossitis (Hunter-Glossitis)</li>
<li><strong>Hämolysespezifisch:</strong> Ikterus, Splenomegalie, dunkler Urin</li>
<li>Bei <strong>akuter/schwerer Anämie:</strong> Ruhedyspnoe, Tachykardie, Hypotonie, Schock</li>
</ul>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1–2x venöser Zugang</li>
<li><strong>BGA</strong> (Hb? Laktat?)</li>
<li><strong>Labor:</strong> BB mit Differenzial-BB, <strong>Retikulozyten</strong>, MCV, MCH, MCHC, RDW, CRP, E'lyte, NW, GOT, GPT, LDH, <strong>Ferritin, Transferrin, Transferrinsättigung</strong>, Haptoglobin, Bilirubin (direkt/indirekt), ggf. Vitamin B12, Folsäure, Gerinnung, Kreuzblut</li>
<li><strong>12-Kanal-EKG</strong> (Ischämiezeichen? Tachykardie?)</li>
</ul>
<h3>Klinische Untersuchung</h3>
<ul>
<li><strong>Anamnese:</strong> Symptombeginn/-dynamik? Blutungszeichen (Meläna, Hämatemesis, Hämatochezie, Menorrhagie, Hämaturie)? Ernährung (vegan)? Alkohol? Medikamente (NSAR, Antikoagulantien, MTX)? Vorerkrankungen (Tumorleiden, CKD, Autoimmunerkrankung, Z.n. Magenresektion)? Familienanamnese (Hämoglobinopathien)?</li>
<li><strong>Körperliche Untersuchung:</strong> Blässe? Ikterus? Tachykardie? Petechien? Splenomegalie? Lymphadenopathie? DRU (Meläna, Blut)?</li>
</ul>
<h3>Erweiterte Diagnostik (nach Befundkonstellation)</h3>
<ul>
<li><strong>Hämolyse-Diagnostik:</strong> LDH↑, Haptoglobin↓, indirektes Bilirubin↑, Retikulozyten↑; Coombs-Test (AIHA?)</li>
<li><strong>Gastroskopie/Koloskopie:</strong> bei V.a. GI-Blutung als Ursache des Eisenmangels</li>
<li><strong>Knochenmarkbiopsie:</strong> bei V.a. hämatologische Systemerkrankung</li>
<li>Hb-Elektrophorese bei V.a. Hämoglobinopathie</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Akute/symptomatische Anämie</h3>
<ul>
<li>Stabilisierung gemäß ABCDE-Schema</li>
<li><strong>Transfusion von Erythrozytenkonzentraten (EK):</strong>
<ul>
<li>Restriktive Transfusionsstrategie: Transfusionstrigger Hb &lt; 7 g/dl (allgemein)</li>
<li>Bei kardiovaskulärer Erkrankung/Symptomatik: Transfusionstrigger Hb &lt; 8 g/dl</li>
<li>Bei aktiver Blutung + hämodynamischer Instabilität: sofort transfundieren (kein Warten auf Laborbefund!)</li>
<li>Faustregel: 1 EK hebt Hb um ca. 1 g/dl</li>
</ul>
</li>
<li>Behandlung der Blutungsquelle (endoskopisch, chirurgisch, interventionell)</li>
</ul>
<h3>Ursachenspezifische Therapie</h3>
<ul>
<li><strong>Eisenmangelanämie:</strong> Orale Eisensubstitution (Eisen-II-Sulfat 100–200 mg/d) oder i.v. Eisencarboxymaltose (bei Intoleranz, Malabsorption, schwerem Mangel); Blutungsquelle suchen und behandeln!</li>
<li><strong>Vitamin-B12-Mangel:</strong> Hydroxocobalamin 1000 µg i.m. initial täglich für 1 Woche, dann wöchentlich, dann monatlich (oder hochdosiert oral bei Malnutrition)</li>
<li><strong>Folsäuremangel:</strong> Folsäure 5 mg/d p.o.</li>
<li><strong>Anämie der chronischen Erkrankung:</strong> Behandlung der Grunderkrankung</li>
<li><strong>Autoimmunhämolytische Anämie:</strong> Prednisolon 1 mg/kg/d, ggf. Rituximab</li>
<li><strong>Renale Anämie:</strong> Erythropoietin-stimulierende Agenzien (ESA)</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li><strong>MCV und Retikulozyten</strong> sind der Schlüssel zur Differenzierung: MCV klassifiziert (mikro/normo/makrozytär), Retikulozyten unterscheiden hypo- vs. hyperregeneratorisch</li>
<li><strong>Ferritin &lt; 30 µg/l</strong> bestätigt Eisenmangel; bei Inflammation kann Ferritin falsch-normal sein (Akut-Phase-Protein!) → dann Transferrinsättigung &lt; 20% als Indikator</li>
<li>Bei <strong>Eisenmangelanämie</strong>: immer nach der <strong>Blutungsquelle</strong> suchen! Bei Männern und postmenopausalen Frauen: GI-Blutung bis zum Beweis des Gegenteils</li>
<li>Vor B12-Substitution: <strong>Folsäure allein NICHT</strong> bei V.a. B12-Mangel geben (kann funikuläre Myelose maskieren/verschlechtern)</li>
<li>Restriktive Transfusionsstrategie (Trigger Hb &lt; 7 g/dl) bei den meisten Patienten – liberaler nur bei aktiver kardialer Ischämie</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Stationär:</strong> symptomatische/schwere Anämie (Hb &lt; 7–8 g/dl), hämodynamische Instabilität, aktive Blutung, Transfusionsbedarf, unklare Panzytopenie, V.a. akute Leukämie</li>
<li><strong>Ambulant:</strong> leichte/moderate Anämie ohne hämodynamische Beeinträchtigung, geplante ambulante Abklärung (Gastroskopie, Koloskopie)</li>
</ul>`
}
],
stand: "12/24",
sources: `Camaschella C. Iron-Deficiency Anemia. N Engl J Med. 2015;372(19):1832-43.<br>
Stabler SP. Vitamin B12 Deficiency. N Engl J Med. 2013;368(2):149-60.<br>
Mueller MM et al. Querschnitts-Leitlinie zur Therapie mit Blutkomponenten und Plasmaderivaten. Bundesärztekammer, 5. Auflage, 2020.`
},
{
id: "anaphylaxie",
title: "Anaphylaxie",
category: "Sonstige",
catKey: "sonst",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Anaphylaxie:</strong> Akute, potenziell lebensbedrohliche systemische Überempfindlichkeitsreaktion (meist IgE-vermittelt, Typ-I-Allergie) mit Beteiligung von mindestens 2 Organsystemen oder isolierter schwerer Kreislauf-/Atemwegskomplikation nach Allergenexposition</li>
</ul>
<h3>Schweregrade (nach Ring & Messmer)</h3>
<div class="table-wrap"><table>
<thead><tr><th>Grad</th><th>Symptome</th></tr></thead>
<tbody>
<tr><td><strong>I</strong></td><td>Haut: Urtikaria, Flush, Pruritus, Angioödem</td></tr>
<tr><td><strong>II</strong></td><td>+ GI/Respiratorisch (leicht): Übelkeit, Rhinitis, leichte Dyspnoe, Tachykardie</td></tr>
<tr><td><strong>III</strong></td><td>+ Schwere Symptome: Bronchospasmus, Larynxödem, Schock (Hypotonie, Tachykardie)</td></tr>
<tr><td><strong>IV</strong></td><td>Atem-/Kreislaufstillstand</td></tr>
</tbody>
</table></div>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Nahrungsmittel:</strong> Erdnüsse, Baumnüsse, Schalentiere, Milch, Ei, Weizen, Soja (häufigste Ursache bei Kindern)</li>
<li><strong>Insektengifte:</strong> Biene, Wespe (häufigste Ursache bei Erwachsenen in Europa)</li>
<li><strong>Medikamente:</strong> Antibiotika (Penicilline, Cephalosporine), NSAR, Kontrastmittel, Muskelrelaxantien, Biologika</li>
<li><strong>Latex</strong></li>
<li><strong>Physikalisch:</strong> Anstrengung (Exercise-induced Anaphylaxis), Kälte</li>
<li><strong>Idiopathisch</strong> (in bis zu 20% kein Auslöser identifizierbar)</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Haut (90%):</strong> Urtikaria, Flush, Pruritus, Angioödem</li>
<li><strong>Respiratorisch (70%):</strong> Rhinitis, Heiserkeit, Stridor (Larynxödem), Giemen, Bronchospasmus, Dyspnoe, Atemstillstand</li>
<li><strong>Kardiovaskulär (45%):</strong> Tachykardie, Hypotonie, Schwindel, Synkope, Schock, Herzstillstand</li>
<li><strong>Gastrointestinal (45%):</strong> Übelkeit, Erbrechen, abdominelle Krämpfe, Diarrhoe</li>
<li><strong>Neurologisch:</strong> Angst, Verwirrtheit, Bewusstseinsverlust</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Eine Anaphylaxie kann auch <strong>ohne Hautsymptome</strong> auftreten! Insbesondere bei kardiovaskulärer Beteiligung (Anaphylaktischer Schock) können Hautsymptome initial fehlen.</p></div>`
},
{
title: "Diagnostik",
html: `<ul>
<li><strong>Klinische Diagnose!</strong> Keine Diagnostik darf die Therapie verzögern!</li>
<li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF)</li>
<li>1–2x großlumiger venöser Zugang</li>
<li><strong>BGA</strong> (Laktat? pH?)</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte, NW, <strong>Tryptase</strong> (1–2h nach Ereignis, Bestätigung der Mastzellaktivierung; Basalwert nach 24h)</li>
<li>12-Kanal-EKG</li>
<li><strong>Anamnese</strong> (parallel zur Therapie): Auslöser? Latenz? Vorherige Reaktionen? Bekannte Allergien? Medikamente (Betablocker, ACE-Hemmer → erschweren Therapie)?</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Sofortmaßnahmen (Grad II–IV)</h3>
<ul>
<li><strong>Allergenexposition stoppen</strong> (z.B. Infusion stoppen, Insektenstachel entfernen)</li>
<li><strong>Hilfe rufen</strong></li>
<li><strong>Lagerung:</strong> Trendelenburg/Schocklage bei Hypotonie; sitzend bei Dyspnoe; stabile Seitenlage bei Bewusstlosigkeit</li>
</ul>
<h3>Adrenalin (WICHTIGSTES Medikament!)</h3>
<ul>
<li><strong>Adrenalin i.m.</strong> (M. vastus lateralis, anterolateraler Oberschenkel):
<ul>
<li>Erwachsene: <strong>0,5 mg i.m.</strong> (= 0,5 ml Adrenalin 1:1000)</li>
<li>Wiederholung alle <strong>5–10 min</strong> bei ausbleibender Besserung</li>
</ul>
</li>
<li><strong>Adrenalin i.v.</strong> nur bei Kreislaufstillstand/schwerstem Schock und nur durch erfahrenes Personal:
<ul>
<li>Adrenalin 1:10.000: 0,1 mg (= 1 ml) i.v. Boli, titrierend</li>
<li>ggf. Adrenalin-Perfusor 0,05–1 µg/kg/min</li>
</ul>
</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Adrenalin i.m. ist die Therapie der 1. Wahl – <strong>nicht verzögern!</strong> Es gibt keine absolute Kontraindikation für Adrenalin bei Anaphylaxie.</p></div>
<h3>Weitere Medikamente</h3>
<ul>
<li><strong>Volumentherapie:</strong> Vollelektrolytlösung rasch 500–1000 ml i.v. (bei Schock bis 2–3 Liter)</li>
<li><strong>Sauerstoff:</strong> High-Flow O₂ (10–15 l/min)</li>
<li><strong>Salbutamol Vernebler</strong> 2,5–5 mg bei Bronchospasmus</li>
<li><strong>Prednisolon</strong> 250 mg i.v. (Wirkungseintritt erst nach Stunden, verhindert ggf. biphasische Reaktion)</li>
<li><strong>Clemastin</strong> 2 mg i.v. oder <strong>Dimetinden</strong> 4 mg i.v. (H1-Antihistaminikum)</li>
<li><strong>Ranitidin</strong> 50 mg i.v. (H2-Antihistaminikum) – ergänzend</li>
<li>Bei <strong>Betablocker-Einnahme</strong> und refraktärer Hypotonie: <strong>Glukagon</strong> 1–5 mg i.v.</li>
</ul>
<h3>Bei Atemwegsobstruktion</h3>
<ul>
<li><strong>Adrenalin-Vernebler</strong> 3–5 mg bei Larynxödem/Stridor</li>
<li>Frühzeitige Intubationsbereitschaft (ggf. chirurgischer Atemweg)</li>
</ul>
<h3>Bei Kreislaufstillstand</h3>
<ul>
<li>CPR nach ALS-Algorithmus</li>
<li>Adrenalin 1 mg i.v. alle 3–5 min</li>
<li>Aggressive Volumengabe</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Adrenalin i.m. = Therapie Nr. 1</strong> bei Anaphylaxie – frühzeitig und ohne Zögern verabreichen!</li>
<li>Es gibt <strong>keine Kontraindikation</strong> für Adrenalin bei Anaphylaxie (auch nicht bei Schwangeren oder Herzpatienten)</li>
<li><strong>Biphasische Reaktion</strong> in bis zu 20% der Fälle (Wiederauftreten nach 4–12h) → Überwachung für mindestens 6–24h</li>
<li>Tryptase-Bestimmung für retrospektive Diagnosebestätigung (1–2h nach Ereignis + Basalwert nach 24h)</li>
<li>Vor Entlassung: <strong>Adrenalin-Autoinjektor</strong> verordnen, <strong>Anaphylaxie-Pass</strong> ausstellen, <strong>allergologische Abklärung</strong> empfehlen</li>
<li>Patienten mit Betablocker-Medikation können refraktär auf Adrenalin sein → <strong>Glukagon</strong> als Alternative</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> schwere Anaphylaxie (Grad III–IV), Intubation, Vasopressorbedarf</li>
<li><strong>Überwachung (mindestens 6–24h):</strong> alle Patienten mit Anaphylaxie ≥ Grad II (Risiko biphasische Reaktion)</li>
<li><strong>Verlängerte Überwachung (24h):</strong> bei schwerem Verlauf, verzögertem Ansprechen auf Therapie, Asthmaanamnese, Betablocker-Einnahme, biphasische Reaktion in der Vorgeschichte</li>
</ul>`
}
],
stand: "12/24",
sources: `Ring J et al. S2k-Leitlinie Akuttherapie und Management der Anaphylaxie. AWMF-Register-Nr. 061-025, 2021.<br>
Cardona V et al. World Allergy Organization Anaphylaxis Guidance 2020. World Allergy Organ J. 2020;13(10):100472.<br>
Muraro A et al. EAACI Guidelines: Anaphylaxis (2021 update). Allergy. 2022;77(2):357-377.`
}
];

if (typeof window.SOP_DATA === "undefined") {
  window.SOP_DATA = [];
}
window.SOP_DATA = window.SOP_DATA.concat(SOP_DATA_1);