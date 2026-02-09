// SOP: Abdominelle Schmerzen
// Kategorie: Leitsymptom
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
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
    });
})();
