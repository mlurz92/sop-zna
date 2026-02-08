const SOP_DATA_2 = [
{
id: "asthmaexazerbation",
title: "Asthmaexazerbation",
category: "Pneumologie",
catKey: "pulmo",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Asthmaexazerbation:</strong> Akute oder subakute Verschlechterung der Asthmasymptome (Dyspnoe, Giemen, Husten, Thoraxenge) mit Abfall der Lungenfunktion, die über die normale Tagesvariabilität hinausgeht und eine Therapieeskalation erfordert</li>
</ul>
<h3>Schweregrade</h3>
<div class="table-wrap"><table>
<thead><tr><th>Parameter</th><th>Moderat</th><th>Schwer</th><th>Lebensbedrohlich</th></tr></thead>
<tbody>
<tr><td>Sprechen</td><td>Sätze</td><td>Worte</td><td>Unfähig</td></tr>
<tr><td>AF</td><td>Erhöht</td><td>&gt; 25/min</td><td>Bradypnoe/Erschöpfung</td></tr>
<tr><td>HF</td><td>100–120/min</td><td>&gt; 120/min</td><td>Bradykardie</td></tr>
<tr><td>SpO₂</td><td>90–95%</td><td>&lt; 90%</td><td>&lt; 90%</td></tr>
<tr><td>PEF</td><td>50–75% Soll</td><td>&lt; 50% Soll</td><td>Nicht durchführbar</td></tr>
<tr><td>Sonstiges</td><td>—</td><td>Atemhilfsmuskulatur</td><td>Silent Chest, Zyanose, Bewusstseinseintrübung</td></tr>
</tbody>
</table></div>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Allergene:</strong> Pollen, Hausstaubmilben, Tierhaare, Schimmelpilze</li>
<li><strong>Infektionen:</strong> Virale Atemwegsinfekte (häufigster Trigger), bakterielle Superinfektion</li>
<li><strong>Umweltfaktoren:</strong> Luftverschmutzung, Tabakrauch, Kaltluft, Reizgase</li>
<li><strong>Medikamente:</strong> NSAR, Betablocker (auch Augentropfen!), ASS (Analgetika-Asthma)</li>
<li><strong>Körperliche Anstrengung</strong> (Exercise-induced Bronchoconstriction)</li>
<li><strong>Non-Compliance</strong> mit inhalativer Dauertherapie (ICS)</li>
<li><strong>Psychischer Stress</strong></li>
<li><strong>Gastroösophagealer Reflux</strong></li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Zunehmende Dyspnoe</strong>, Tachypnoe</li>
<li><strong>Giemen</strong>, verlängertes Exspirium</li>
<li><strong>Trockener Husten</strong></li>
<li><strong>Thorakale Enge</strong></li>
<li>Einsatz der <strong>Atemhilfsmuskulatur</strong></li>
<li>Unfähigkeit, vollständige Sätze zu sprechen</li>
<li>Agitation, Angst</li>
<li>ggf. <strong>Silent Chest</strong> (fehlendes Atemgeräusch bei schwerstem Bronchospasmus – Alarmzeichen!)</li>
<li>ggf. <strong>Zyanose</strong></li>
<li>ggf. <strong>Bewusstseinseintrübung</strong> (Hypoxie/Hyperkapnie – Notfallintubation!)</li>
</ul>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur)</li>
<li>1x venöser Zugang</li>
<li><strong>BGA</strong> (pO₂? pCO₂? pH? Laktat? – CAVE: normales oder steigendes pCO₂ bei Asthmaexazerbation ist ein Alarmzeichen für ventilatorische Erschöpfung!)</li>
<li><strong>Peak-Flow-Messung</strong> (PEF in % des Sollwerts oder persönlichen Bestwerts)</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte, NW, ggf. hs-Troponin, BNP</li>
<li>12-Kanal-EKG</li>
</ul>
<h3>Klinische Untersuchung</h3>
<ul>
<li><strong>Anamnese:</strong> Symptombeginn? Auslöser? Vorbekanntes Asthma? Aktuelle Dauertherapie? ICS-Compliance? Häufigkeit der Bedarfsmedikation? Vorherige Exazerbationen? Z.n. Intubation/Intensivaufenthalt? Letzte Steroideinnahme? Allergien?</li>
<li><strong>Körperliche Untersuchung:</strong> AF? Atemhilfsmuskulatur? Giemen? Silent Chest? SpO₂? Sprechfähigkeit?</li>
</ul>
<h3>Erweiterte Diagnostik (ggf.)</h3>
<ul>
<li><strong>Röntgen-Thorax:</strong> bei Fieber, V.a. Pneumothorax, V.a. Pneumonie, Erstmanifestation, fehlendem Ansprechen auf Therapie</li>
<li><strong>CT-Thorax:</strong> bei V.a. Lungenarterienembolie oder andere DD</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Ein <strong>normaler oder erhöhter pCO₂</strong> bei einer Asthmaexazerbation ist ein <strong>Alarmzeichen</strong> für ventilatorische Erschöpfung – normalerweise hyperventilieren Asthmapatienten (pCO₂ ↓)!</p></div>`
},
{
title: "Therapie",
html: `<h3>Moderate Exazerbation</h3>
<ul>
<li><strong>Salbutamol</strong> 2,5–5 mg Vernebler oder 4–8 Hübe über Spacer, alle 20 min wiederholen</li>
<li><strong>Ipratropiumbromid</strong> 0,5 mg Vernebler oder 4 Hübe über Spacer</li>
<li><strong>Prednisolon</strong> 50 mg p.o. oder i.v. (innerhalb der ersten Stunde!)</li>
<li><strong>Sauerstoff:</strong> Ziel-SpO₂ 93–95%</li>
</ul>
<h3>Schwere Exazerbation</h3>
<ul>
<li>Wie oben, zusätzlich:</li>
<li><strong>Salbutamol-Dauerverneblung</strong> (kontinuierlich 5–10 mg/h)</li>
<li><strong>Ipratropiumbromid</strong> 0,5 mg Vernebler alle 20 min in der ersten Stunde</li>
<li><strong>Magnesiumsulfat</strong> 2 g i.v. über 20 min (Einzeldosis, wirkt bronchospasmolytisch)</li>
<li><strong>Prednisolon</strong> 50–100 mg i.v.</li>
</ul>
<h3>Lebensbedrohliche Exazerbation / Near-Fatal Asthma</h3>
<ul>
<li>Intensivstation / Notfallteam</li>
<li>Alle oben genannten Maßnahmen</li>
<li><strong>Adrenalin:</strong> 0,3–0,5 mg i.m. (bei Anaphylaxie-Komponente) oder Adrenalin-Vernebler 3–5 mg</li>
<li><strong>Reproterol</strong> 0,09 mg langsam i.v. (über 10 min), ggf. Perfusor</li>
<li><strong>Ketamin</strong> 0,5–1 mg/kg i.v. Bolus (bronchospasmolytisch, als Narkoseinduktion bei RSI)</li>
<li><strong>NIV:</strong> Versuch bei kooperativem Patient (CAVE: Keine Verzögerung der Intubation!)</li>
<li><strong>Intubation und invasive Beatmung:</strong> bei Erschöpfung, Bewusstlosigkeit, Atemstillstand. RSI mit Ketamin bevorzugt, niedrige Atemfrequenz, langes Exspirium, Plateau-Druck-limitiert</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Intubation und Beatmung beim Status asthmaticus ist hochriskant (Hypotonie, Pneumothorax). <strong>Nicht-invasive Maßnahmen maximal ausschöpfen!</strong> Bei Intubation: erfahrenstes Personal, RSI mit Ketamin, permissive Hyperkapnie.</p></div>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Systemische Steroide frühzeitig</strong> (innerhalb der ersten Stunde) – reduzieren Rückfallrate und Hospitalisierung</li>
<li><strong>Silent Chest</strong> = fehlende Atemgeräusche bei schwerstem Bronchospasmus → lebensbedrohlich!</li>
<li><strong>Normales/erhöhtes pCO₂</strong> = ventilatorische Erschöpfung → Intensivstation!</li>
<li>MgSO₄ i.v. bei schwerer Exazerbation, die auf initiale Therapie nicht ausreichend anspricht</li>
<li>Keine Sedierung (Benzodiazepine, Opioide) bei nicht-intubierten Patienten → Atemdepressionsgefahr!</li>
<li>Asthma ≠ COPD: Ziel-SpO₂ <strong>93–95%</strong> (nicht 88–92% wie bei COPD)</li>
<li>Nach Entlassung: ICS-Therapie sicherstellen, Asthmaschulung, Notfallplan, Wiedervorstellung</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> lebensbedrohliche Exazerbation, Intubation, NIV, fehlende Besserung trotz maximaler Therapie, pCO₂ ↑</li>
<li><strong>Normalstation:</strong> schwere Exazerbation mit Besserung unter Therapie, persistierender O₂-Bedarf</li>
<li><strong>Ambulant:</strong> gutes Ansprechen auf Therapie (PEF &gt; 75%, SpO₂ &gt; 94%, stabil über 1h), Prednisolon 40–50 mg p.o. für 5–7 Tage, Inhalationstechnik geprüft, Wiedervorstellung gesichert</li>
</ul>`
}
],
stand: "12/24",
sources: `GINA 2024. Global Strategy for Asthma Management and Prevention.<br>Buhl R et al. S2k-Leitlinie zur Diagnostik und Therapie von Patienten mit Asthma. AWMF-Register-Nr. 020-009, 2023.<br>BTS/SIGN British Guideline on the Management of Asthma. 2019.`
},
{
id: "bakterielle-meningitis",
title: "Bakterielle Meningitis",
category: "Infektiologie",
catKey: "infekt",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Bakterielle Meningitis:</strong> Akute bakterielle Entzündung der Hirnhäute (Leptomeningen), die unbehandelt eine hohe Letalität (bis 70%) aufweist und eine sofortige empirische Antibiotikatherapie erfordert</li>
</ul>`
},
{
title: "Ursachen",
html: `<h3>Häufigste Erreger nach Alter</h3>
<div class="table-wrap"><table>
<thead><tr><th>Altersgruppe</th><th>Häufigste Erreger</th></tr></thead>
<tbody>
<tr><td>Neugeborene</td><td>Streptococcus agalactiae (GBS), E. coli, Listeria monocytogenes</td></tr>
<tr><td>Kinder/Jugendliche</td><td>Neisseria meningitidis, Streptococcus pneumoniae</td></tr>
<tr><td>Erwachsene</td><td>Streptococcus pneumoniae (häufigster Erreger!), Neisseria meningitidis</td></tr>
<tr><td>Ältere (&gt; 50J), Immunsupprimierte, Alkoholabhängige</td><td>Streptococcus pneumoniae, Listeria monocytogenes, gramnegative Enterobakterien</td></tr>
<tr><td>Neurochirurgisch/Shunt</td><td>Staphylococcus aureus, koagulasenegative Staphylokokken, gramnegative Erreger</td></tr>
</tbody>
</table></div>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Klassische Trias:</strong> Kopfschmerzen + Fieber + Meningismus (Nackensteifigkeit) – nur bei ca. 50% komplett vorhanden!</li>
<li><strong>Kopfschmerzen</strong> (häufig stark, diffus)</li>
<li><strong>Fieber</strong></li>
<li><strong>Meningismus</strong> (Nackensteifigkeit, Kernig-, Brudzinski-Zeichen)</li>
<li><strong>Bewusstseinseintrübung</strong> (Somnolenz bis Koma)</li>
<li>Photophobie, Übelkeit, Erbrechen</li>
<li>ggf. <strong>Petechien</strong> (insb. bei Meningokokkenmeningitis → V.a. Meningokokkensepsis/Waterhouse-Friderichsen-Syndrom)</li>
<li>ggf. <strong>epileptische Anfälle</strong></li>
<li>ggf. <strong>fokal-neurologische Defizite</strong> (Hirnnervenparesen, Hemiparese)</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Insbesondere bei älteren und immunsupprimierten Patienten kann die Symptomatik <strong>atypisch</strong> und oligosymptomatisch sein (z.B. nur Verwirrtheit und Fieber)!</p></div>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1–2x venöser Zugang</li>
<li><strong>Labor:</strong> BB, CRP, PCT, E'lyte, NW, Gerinnung, Laktat, <strong>2 Paar Blutkulturen</strong> (VOR Antibiotikagabe!)</li>
<li><strong>BZ-Messung</strong></li>
</ul>
<h3>Klinische Untersuchung</h3>
<ul>
<li><strong>Anamnese:</strong> Symptombeginn? Kopfschmerzen? Fieber? Bewusstseinsveränderung? Photophobie? Krampfanfall? Vorerkrankungen? Immunsuppression? Z.n. neurochirurgischer OP/Shunt? Sinusitis/Otitis? Kontakt zu Meningitispatienten? Impfstatus? Reiseanamnese?</li>
<li><strong>Körperliche Untersuchung:</strong> Meningismus? Kernig-/Brudzinski-Zeichen? GCS? Petechien? Fokal-neurologisches Defizit? Hirnnervenparesen? Stauungspapille? Otitis/Sinusitis?</li>
</ul>
<h3>Lumbalpunktion</h3>
<ul>
<li><strong>Vor LP:</strong> cCT nur bei: GCS &lt; 10, fokal-neurologischem Defizit, neu aufgetretenem Krampfanfall, schwerer Immunsuppression, Stauungspapille → CT darf Antibiotikagabe NICHT verzögern!</li>
<li><strong>Liquor:</strong> Zellzahl + Differenzierung, Eiweiß, Glukose (+ Serumglukose simultan), Laktat, Gramfärbung, Kultur, ggf. PCR (Meningokokken, Pneumokokken, Listerien, HSV, Enteroviren)</li>
</ul>
<h3>Typischer Liquorbefund bei bakterieller Meningitis</h3>
<div class="table-wrap"><table>
<thead><tr><th>Parameter</th><th>Befund</th></tr></thead>
<tbody>
<tr><td>Zellzahl</td><td>↑↑↑ (&gt; 1000/µl, überwiegend Granulozyten)</td></tr>
<tr><td>Eiweiß</td><td>↑↑ (&gt; 100 mg/dl)</td></tr>
<tr><td>Glukose</td><td>↓ (Liquor/Serum-Quotient &lt; 0,4)</td></tr>
<tr><td>Laktat</td><td>↑↑ (&gt; 3,5 mmol/l)</td></tr>
</tbody>
</table></div>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Die <strong>Antibiotikagabe darf NIEMALS</strong> durch Diagnostik (CT, LP) verzögert werden! Bei klinischem Verdacht: <strong>Blutkulturen → Dexamethason → Antibiotika → dann CT/LP!</strong></p></div>`
},
{
title: "Therapie",
html: `<h3>Sofortige empirische Therapie</h3>
<p>Reihenfolge bei V.a. bakterielle Meningitis:</p>
<ol>
<li><strong>Blutkulturen</strong> abnehmen</li>
<li><strong>Dexamethason</strong> 10 mg i.v. (gleichzeitig mit oder kurz vor dem Antibiotikum)</li>
<li><strong>Antibiotikum</strong> i.v.</li>
<li>Dann: cCT (falls indiziert) → Lumbalpunktion</li>
</ol>
<h3>Empirische Antibiotikatherapie</h3>
<div class="table-wrap"><table>
<thead><tr><th>Patientengruppe</th><th>Empirische Therapie</th></tr></thead>
<tbody>
<tr><td>Erwachsene (&lt; 50J, immunkompetent)</td><td><strong>Ceftriaxon</strong> 2 g i.v. alle 12h</td></tr>
<tr><td>Erwachsene (&gt; 50J, Alkohol, Immunsuppression)</td><td><strong>Ceftriaxon</strong> 2 g i.v. alle 12h + <strong>Ampicillin</strong> 2 g i.v. alle 4h (Listerienlücke!)</td></tr>
<tr><td>Nosokomial / Z.n. Neurochirurgie</td><td><strong>Meropenem</strong> 2 g i.v. alle 8h + <strong>Vancomycin</strong> 15 mg/kg i.v. alle 8–12h</td></tr>
</tbody>
</table></div>
<h3>Dexamethason</h3>
<ul>
<li><strong>Dexamethason</strong> 10 mg i.v. alle 6h für 4 Tage</li>
<li>Erste Gabe <strong>gleichzeitig mit oder kurz vor</strong> dem Antibiotikum</li>
<li>Reduziert Letalität und neurologische Komplikationen bei Pneumokokkenmeningitis</li>
<li>Absetzen, wenn kein Pneumokokkennachweis</li>
</ul>
<h3>Supportive Maßnahmen</h3>
<ul>
<li>Intensivüberwachung</li>
<li>Hirndruckmanagement (Oberkörperhochlagerung 30°, ggf. osmotische Therapie)</li>
<li>Anfallsdurchbrechung (s. SOP Status epilepticus)</li>
<li>Fiebersenkung</li>
</ul>
<h3>Meldepflicht und Postexpositionsprophylaxe</h3>
<ul>
<li><strong>Meldepflicht</strong> bei Meningokokken (namentlich nach IfSG)</li>
<li><strong>Postexpositionsprophylaxe</strong> bei Meningokokken für enge Kontaktpersonen: <strong>Rifampicin</strong> 600 mg 2x/d p.o. für 2 Tage oder <strong>Ciprofloxacin</strong> 500 mg p.o. Einmaldosis oder <strong>Ceftriaxon</strong> 250 mg i.m. Einmaldosis</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Time is brain!</strong> Empirische Antibiotikatherapie sofort bei klinischem Verdacht – <strong>KEINE Verzögerung durch CT oder LP!</strong></li>
<li>Reihenfolge: <strong>Blutkulturen → Dexamethason → Antibiotikum → CT → LP</strong></li>
<li>Dexamethason reduziert Komplikationen bei <strong>Pneumokokkenmeningitis</strong> – erste Dosis gleichzeitig mit dem Antibiotikum</li>
<li>Bei Alter &gt; 50, Immunsuppression, Schwangerschaft: <strong>Ampicillin</strong> zusätzlich (Listerienabdeckung!)</li>
<li>An Meningokokkensepsis denken bei <strong>Petechien + Fieber</strong> → fulminanter Verlauf möglich</li>
<li>Postexpositionsprophylaxe für enge Kontaktpersonen bei Meningokokkenmeningitis</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation</strong> (alle Patienten mit V.a. bakterielle Meningitis bis zur Stabilisierung)</li>
<li>Neurologisches Konsil</li>
</ul>`
}
],
stand: "12/24",
sources: `Pfister HW et al. S2k-Leitlinie Ambulant erworbene bakterielle Meningoenzephalitis im Erwachsenenalter. AWMF-Register-Nr. 030-089, 2024.<br>van de Beek D et al. ESCMID guideline: diagnosis and treatment of acute bacterial meningitis. Clin Microbiol Infect. 2016;22 Suppl 3:S37-62.<br>McGill F et al. Acute bacterial meningitis in adults. Lancet. 2016;388(10063):3036-3047.`
},
{
id: "bradykarde-hrst",
title: "Bradykarde Herzrhythmusstörungen",
category: "Kardiologie",
catKey: "kardio",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Bradykardie:</strong> Herzfrequenz &lt; 60/min</li>
<li><strong>Klinisch relevante Bradykardie:</strong> Herzfrequenz &lt; 50/min oder jede Bradykardie mit hämodynamischer Beeinträchtigung (Hypotonie, Synkope, Bewusstseinseintrübung, Herzinsuffizienz, Schock)</li>
</ul>`
},
{
title: "Ursachen",
html: `<h3>Sinusknotenerkrankungen</h3>
<ul>
<li>Sinusbradykardie, Sinusarrest, SA-Block</li>
<li>Sick-Sinus-Syndrom (Bradykardie-Tachykardie-Syndrom)</li>
</ul>
<h3>AV-Überleitungsstörungen</h3>
<ul>
<li><strong>AV-Block I°:</strong> Verlängertes PQ-Intervall (&gt; 200 ms), jeder P-Welle folgt ein QRS</li>
<li><strong>AV-Block II° Typ Wenckebach:</strong> Progressive PQ-Verlängerung bis Überleitung ausfällt</li>
<li><strong>AV-Block II° Typ Mobitz:</strong> Intermittierender Ausfall der Überleitung ohne progressive PQ-Verlängerung (Schrittmacherindikation!)</li>
<li><strong>AV-Block III°:</strong> Kompletter AV-Block, P-Wellen und QRS-Komplexe dissoziiert (Schrittmacherindikation!)</li>
</ul>
<h3>Ätiologie</h3>
<ul>
<li><strong>Medikamente:</strong> Betablocker, Calciumantagonisten (Verapamil, Diltiazem), Digoxin, Amiodaron, Clonidin, Ivabrandin</li>
<li><strong>Myokardinfarkt:</strong> Inferiorer STEMI (AV-Block II/III durch Ischämie des AV-Knotens)</li>
<li><strong>Degenerativ:</strong> Fibrose des Reizleitungssystems (häufigste Ursache im Alter)</li>
<li><strong>Metabolisch:</strong> Hyperkaliämie, Hypothermie, Hypothyreose</li>
<li><strong>Vagale Reaktion:</strong> Vasovagale Synkope, erhöhter Hirndruck</li>
<li><strong>Entzündlich:</strong> Myokarditis, Endokarditis, Borreliose</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li>ggf. <strong>asymptomatisch</strong> (Zufallsbefund)</li>
<li><strong>Schwindel</strong>, Präsynkope, <strong>Synkope</strong> (Adams-Stokes-Anfall)</li>
<li><strong>Dyspnoe</strong>, Belastungsintoleranz</li>
<li><strong>Müdigkeit</strong>, Schwäche</li>
<li>ggf. <strong>Thoraxschmerz</strong> (bei begleitender Ischämie)</li>
<li>ggf. <strong>Herzinsuffizienzsymptome</strong></li>
<li>ggf. <strong>Schock</strong> (Hypotonie, Kaltschweißigkeit, Bewusstseinseintrübung)</li>
</ul>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1x venöser Zugang</li>
<li><strong>12-Kanal-EKG</strong> (Rhythmusanalyse! P-Wellen? PQ-Zeit? QRS-Breite? AV-Dissoziation?)</li>
<li><strong>EKG-Monitoring</strong> (kontinuierlich)</li>
<li><strong>BGA</strong> (K⁺? Ca²⁺? pH? Laktat?)</li>
<li><strong>Labor:</strong> BB, E'lyte (K⁺, Ca²⁺, Mg²⁺), NW, TSH, hs-Troponin, Digoxin-Spiegel (falls eingenommen), ggf. Borrelien-Serologie</li>
</ul>
<h3>Klinische Untersuchung</h3>
<ul>
<li><strong>Anamnese:</strong> Symptome? Synkope? Schwindel? Belastungsintoleranz? Medikamente (Betablocker, Digoxin, Calciumantagonisten)? Vorbekannte Herzerkrankung? Schrittmacher? Vorerkrankungen?</li>
<li><strong>Körperliche Untersuchung:</strong> HF? RR? Perfusion? JVD (Cannon-A-Waves bei AV-Block III°)? Herzgeräusch?</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Instabile Bradykardie (nach ERC-Algorithmus)</h3>
<p>Zeichen der Instabilität: Schock, Synkope, Myokardischämie, Herzinsuffizienz</p>
<ul>
<li><strong>Atropin</strong> 0,5 mg i.v. alle 3–5 min (max. 3 mg) – 1. Wahl</li>
<li>Bei fehlendem Ansprechen auf Atropin:</li>
<li><strong>Transkutaner Schrittmacher</strong> (Defibrillator-Pads, Demand-Modus, Frequenz 60–80/min, Stromstärke steigern bis Capture) – Analgesie/Sedierung nicht vergessen!</li>
<li><strong>Adrenalin-Perfusor</strong> 2–10 µg/min i.v. als Bridging</li>
<li><strong>Isoprenalin-Perfusor</strong> 5 µg/min i.v. (Alternative)</li>
<li><strong>Transvenöser Schrittmacher</strong> (definitive Überbrückung bis permanenter SM)</li>
</ul>
<h3>Stabile Bradykardie</h3>
<ul>
<li>Monitoring, Ursachensuche und -behandlung</li>
<li>Auslösende Medikamente pausieren/absetzen</li>
<li>Elektrolytstörungen korrigieren</li>
<li>Kardiologisches Konsil (Schrittmacherindikation?)</li>
</ul>
<h3>Schrittmacherindikation (Auswahl)</h3>
<ul>
<li>Symptomatischer AV-Block II° Typ Mobitz und AV-Block III°</li>
<li>Symptomatisches Sick-Sinus-Syndrom</li>
<li>Alternierender Schenkelblock</li>
</ul>
<div class="callout callout-hinweis"><p><strong>Hinweis:</strong> Atropin ist <strong>unwirksam</strong> bei infranodalen Blockierungen (AV-Block III° mit breitem QRS, AV-Block II° Typ Mobitz) → hier frühzeitig transkutaner Schrittmacher!</p></div>`
},
{
title: "Merke",
html: `<ul>
<li>Stabile, asymptomatische Sinusbradykardie und AV-Block I° erfordern keine Akuttherapie</li>
<li><strong>AV-Block II° Typ Mobitz und AV-Block III°</strong> sind potenziell lebensbedrohlich → Schrittmacher!</li>
<li><strong>Atropin</strong> wirkt am AV-Knoten, aber <strong>nicht infranodal</strong> → bei breitem QRS unwirksam</li>
<li>Medikamentös induzierte Bradykardie: <strong>Auslöser absetzen!</strong> (Betablocker, Digoxin, Calciumantagonisten)</li>
<li>An <strong>Myokardinfarkt</strong> als Ursache denken (v.a. inferiorer STEMI)</li>
<li>An <strong>Hyperkaliämie</strong> denken (EKG: hohe spitze T-Wellen → QRS-Verbreiterung → Bradykardie)</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> instabile Bradykardie, Schrittmacherpflichtigkeit, AV-Block III°</li>
<li><strong>Überwachungsstation:</strong> symptomatische Bradykardie, AV-Block II° Typ Mobitz, Monitoring</li>
<li><strong>Normalstation:</strong> stabile AV-Block I°/II° Typ Wenckebach, kardiologisches Konsil geplant</li>
<li><strong>Ambulant:</strong> asymptomatische Sinusbradykardie, keine Hochrisiko-EKG-Befunde, gesicherte Wiedervorstellung</li>
</ul>`
}
],
stand: "12/24",
sources: `Brignole M et al. 2018 ESC Guidelines for the diagnosis and management of syncope. Eur Heart J. 2018;39(21):1883-1948.<br>Kusumoto FM et al. 2018 ACC/AHA/HRS Guideline on the Evaluation and Management of Patients With Bradycardia and Cardiac Conduction Delay. Circulation. 2019;140(13):e382-e482.<br>ERC Reanimationsleitlinien 2021.`
},
{
id: "cannabinoid-hyperemesis-syndrom",
title: "Cannabinoid-Hyperemesis-Syndrom",
category: "Sonstige",
catKey: "sonst",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Cannabinoid-Hyperemesis-Syndrom (CHS):</strong> Rezidivierendes, stereotyp ablaufendes Syndrom mit schwerer Übelkeit, Erbrechen und abdominellen Schmerzen bei chronischem Cannabiskonsum, das typischerweise durch heiße Duschen/Bäder temporär gelindert wird</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Chronischer Cannabiskonsum</strong> (in der Regel über Monate bis Jahre, meist täglich/mehrmals wöchentlich)</li>
<li>Pathophysiologie nicht vollständig geklärt, vermutlich Dysregulation des Endocannabinoidsystems (CB1-Rezeptoren im GI-Trakt)</li>
</ul>
<h3>Diagnostische Kriterien (Rome IV)</h3>
<ul>
<li>Stereotypes episodisches Erbrechen</li>
<li>Aktuell regelmäßiger Cannabiskonsum</li>
<li>Besserung durch heiße Duschen/Bäder</li>
<li>Besserung nach Cannabiskarenz</li>
<li>Ausschluss anderer Ursachen</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Schweres episodisches Erbrechen</strong> (teils bis zu 20x/d)</li>
<li><strong>Starke Übelkeit</strong></li>
<li><strong>Abdominelle Schmerzen</strong> (krampfartig, periumbilikal/epigastrisch)</li>
<li><strong>Kompulsives heißes Duschen/Baden</strong> (pathognomonisch! Patient berichtet über Besserung)</li>
<li><strong>Dehydratation</strong></li>
<li>Gewichtsverlust bei rezidivierenden Episoden</li>
<li>Symptomfreiheit zwischen den Episoden</li>
</ul>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1x venöser Zugang</li>
<li><strong>BGA</strong> (Dehydratation? Alkalose? E'lyte?)</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte, NW, Lipase, GOT, GPT, Gerinnung, β-HCG</li>
<li><strong>Urin-Drogenscreening</strong> (THC-Nachweis)</li>
<li><strong>Anamnese:</strong> Cannabiskonsum (Frequenz, Dauer, Menge)? Stereotypes Erbrechen? Linderung durch heiße Duschen? Symptomfreiheit bei Abstinenz? Ausschluss anderer Ursachen?</li>
<li><strong>Ausschlussdiagnostik:</strong> Urin-Status, ggf. Abdomen-Sonographie, ggf. CT-Abdomen bei atypischer Präsentation</li>
</ul>
<div class="callout callout-hinweis"><p><strong>Hinweis:</strong> CHS ist eine <strong>Ausschlussdiagnose!</strong> Andere Ursachen des zyklischen Erbrechens müssen ausgeschlossen werden (Gastroparese, Pankreatitis, Ileus, zentralnervöse Ursachen, Schwangerschaft, Addison-Krise).</p></div>`
},
{
title: "Therapie",
html: `<h3>Akuttherapie</h3>
<ul>
<li><strong>i.v.-Rehydratation</strong> (Vollelektrolytlösung)</li>
<li>Elektrolytausgleich</li>
<li><strong>Capsaicin-Creme 0,075%</strong> topisch auf die Bauchdecke (periumbilikal) – Evidenz zunehmend, wirkt über TRPV1-Rezeptoren</li>
<li><strong>Haloperidol</strong> 2,5–5 mg i.v. (effektivstes Antiemetikum bei CHS!)</li>
<li><strong>Ondansetron</strong> 4–8 mg i.v. (oft weniger wirksam als bei anderen Ursachen)</li>
<li><strong>Benzodiazepine:</strong> Lorazepam 0,5–1 mg i.v. (anxiolytisch, antiemetisch)</li>
<li>Heiße Dusche/warme Auflagen (symptomatische Linderung)</li>
</ul>
<h3>Kausale Therapie</h3>
<ul>
<li><strong>Dauerhafte Cannabiskarenz</strong> (einzige kausale Therapie!)</li>
<li>Beratung, Suchtmedizinische Anbindung</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Standardantiemetika (Ondansetron, MCP) wirken bei CHS oft <strong>nicht ausreichend!</strong> Haloperidol und Capsaicin sind wirksamer.</p></div>`
},
{
title: "Merke",
html: `<ul>
<li>An CHS denken bei: <strong>rezidivierendes Erbrechen + chronischer Cannabiskonsum + Linderung durch heiße Duschen</strong></li>
<li>CHS ist eine <strong>Ausschlussdiagnose</strong></li>
<li><strong>Haloperidol</strong> ist das effektivste Antiemetikum bei CHS</li>
<li>Einzige kausale Therapie: <strong>dauerhafte Cannabiskarenz</strong></li>
<li>Patienten stellen sich oft <strong>wiederholt</strong> in Notaufnahmen vor – gezielte Anamnese zum Cannabiskonsum!</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Stationär:</strong> schwere Dehydratation, Elektrolytstörungen, Niereninsuffizienz, therapierefraktäres Erbrechen</li>
<li><strong>Ambulant:</strong> bei Besserung nach Rehydratation und Antiemese, mit Empfehlung zur Cannabiskarenz und Wiedervorstellungsempfehlung</li>
</ul>`
}
],
stand: "12/24",
sources: `Sorensen CJ et al. Cannabinoid Hyperemesis Syndrome: Diagnosis, Pathophysiology, and Treatment. J Emerg Med. 2017;52(4):544-551.<br>Richards JR. Cannabinoid Hyperemesis Syndrome: Pathophysiology and Treatment in the Emergency Department. J Emerg Med. 2018;54(3):354-363.`
},
{
id: "delir",
title: "Delir",
category: "Neurologie",
catKey: "neuro",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Delir:</strong> Akute, fluktuierende Störung der Aufmerksamkeit und des Bewusstseins mit kognitiver Dysfunktion, die durch eine organische Ursache bedingt ist und sich nicht durch eine vorbestehende Demenz erklären lässt</li>
</ul>
<h3>Formen</h3>
<ul>
<li><strong>Hyperaktives Delir:</strong> Agitation, Unruhe, vegetative Entgleisung, Halluzinationen (ca. 25%)</li>
<li><strong>Hypoaktives Delir:</strong> Apathie, Somnolenz, reduzierte Spontanmotorik (ca. 25%, oft übersehen!)</li>
<li><strong>Gemischtes Delir:</strong> Wechsel zwischen hyper- und hypoaktiven Phasen (ca. 50%)</li>
</ul>`
},
{
title: "Ursachen",
html: `<p>Merkhilfe: <strong>I WATCH DEATH</strong></p>
<ul>
<li><strong>I</strong>nfektionen (Pneumonie, HWI, Sepsis, Meningitis)</li>
<li><strong>W</strong>ithdrawal (Alkohol-, Benzodiazepin-, Opioidentzug)</li>
<li><strong>A</strong>kute metabolische Störung (Elektrolytstörung, Hypoglykämie, Urämie, Leberinsuffizienz)</li>
<li><strong>T</strong>rauma (SHT, Schmerz, OP)</li>
<li><strong>C</strong>NS-Pathologie (Schlaganfall, Blutung, Tumor, Krampfanfall)</li>
<li><strong>H</strong>ypoxie (Lungenarterienembolie, COPD-Exazerbation, Anämie)</li>
<li><strong>D</strong>efizienzen (Thiamin-/B12-Mangel)</li>
<li><strong>E</strong>ndokrinopathien (Hypo-/Hyperthyreose, Addison-Krise)</li>
<li><strong>A</strong>kute vaskuläre Ereignisse (Myokardinfarkt, Schock)</li>
<li><strong>T</strong>oxine/Medikamente (Anticholinergika, Opioide, Benzodiazepine, Steroide, Antibiotika)</li>
<li><strong>H</strong>eavy Metals / Schwermetalle</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Delir ist immer ein <strong>Symptom einer zugrundeliegenden Erkrankung</strong> – die Ursachensuche ist entscheidend!</p></div>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Akuter Beginn</strong> und <strong>fluktuierender Verlauf</strong></li>
<li><strong>Aufmerksamkeitsstörung</strong> (Unfähigkeit, Aufmerksamkeit zu halten/umzulenken)</li>
<li><strong>Bewusstseinsstörung</strong> (Verwirrtheit, Desorientierung)</li>
<li><strong>Kognitive Störung</strong> (Gedächtnis, Sprache, Orientierung)</li>
<li>ggf. <strong>Wahrnehmungsstörungen</strong> (Halluzinationen, Illusionen)</li>
<li>ggf. <strong>psychomotorische Störung</strong> (Agitation oder Apathie)</li>
<li>ggf. <strong>Schlaf-Wach-Rhythmus-Störung</strong></li>
<li>ggf. <strong>vegetative Symptome</strong> (Tachykardie, Schwitzen, Tremor – v.a. bei Entzugsdelir)</li>
</ul>`
},
{
title: "Diagnostik",
html: `<h3>Screening</h3>
<ul>
<li><strong>CAM (Confusion Assessment Method):</strong> Akuter Beginn + fluktuierender Verlauf + Aufmerksamkeitsstörung + ENTWEDER Bewusstseinsveränderung ODER Denkstörung → Delir</li>
<li><strong>4AT-Score:</strong> Schnelles Screening (Wachheit, AMT-4, Aufmerksamkeit, akute Veränderung)</li>
</ul>
<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1x venöser Zugang</li>
<li><strong>BZ-Messung</strong> (Hypoglykämie?)</li>
<li><strong>BGA</strong> (O₂? CO₂? pH? E'lyte? Laktat?)</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte (Na⁺, K⁺, Ca²⁺, Mg²⁺), NW, GOT, GPT, Ammoniak, TSH, Gerinnung, Ethanol, ggf. Medikamentenspiegel (Digoxin, Lithium, Antikonvulsiva), Urin-Status</li>
<li><strong>12-Kanal-EKG</strong></li>
</ul>
<h3>Klinische Untersuchung</h3>
<ul>
<li><strong>Fremdanamnese!</strong> Akuter Beginn? Fluktuierend? Vorbestehende Demenz? Medikamentenänderung? Alkohol-/Benzodiazepinkonsum? Infektzeichen? Sturz/SHT? OP? Schmerzen? Harnverhalt? Obstipation?</li>
<li><strong>Körperliche Untersuchung:</strong> Orientierung? Aufmerksamkeit? Fokal-neurologisches Defizit? Meningismus? Exsikkose? Infektfokus? Harnverhalt? Obstipation? Sturzverletzungen?</li>
</ul>
<h3>Erweiterte Diagnostik (ggf.)</h3>
<ul>
<li><strong>cCT nativ:</strong> bei fokal-neurologischem Defizit, V.a. SHT, Krampfanfall, unklarer Ursache</li>
<li><strong>Urin-Drogenscreening</strong></li>
<li><strong>Rö-Thorax:</strong> bei V.a. Pneumonie</li>
<li><strong>LP:</strong> bei V.a. Meningitis/Enzephalitis</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Kausale Therapie (wichtigste Maßnahme!)</h3>
<ul>
<li>Behandlung der zugrundeliegenden Ursache (Infektion, Elektrolytstörung, Harnverhalt, Obstipation, Schmerz, Entzug, etc.)</li>
<li>Auslösende Medikamente absetzen/umstellen (Anticholinergika!)</li>
</ul>
<h3>Nicht-pharmakologische Maßnahmen</h3>
<ul>
<li>Reorientierung (Uhr, Kalender, vertraute Gegenstände, Bezugspersonen)</li>
<li>Ruhige Umgebung, Tag-Nacht-Rhythmus</li>
<li>Brille/Hörgerät bereitstellen</li>
<li>Frühmobilisation</li>
<li>Adäquate Schmerztherapie</li>
<li>Ausreichende Hydratation und Ernährung</li>
<li>Fixierung vermeiden (Verschlimmerung des Delirs!)</li>
</ul>
<h3>Pharmakologische Therapie (bei ausgeprägter Agitation/Eigengefährdung)</h3>
<ul>
<li><strong>Haloperidol</strong> 0,5–1 mg p.o./i.v. (titrierend, max. 5 mg/d; CAVE: QTc-Verlängerung, EPMS)</li>
<li>Alternativ: <strong>Risperidon</strong> 0,5 mg p.o., <strong>Quetiapin</strong> 25–50 mg p.o.</li>
<li>Bei <strong>Alkoholentzugsdelir:</strong> Benzodiazepine (z.B. Lorazepam 1–2 mg i.v., Diazepam), Clomethiazol (nur auf Station!)</li>
<li>Bei <strong>Parkinson-/Lewy-Body-Demenz:</strong> KEINE klassischen Neuroleptika → Quetiapin bevorzugen</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Benzodiazepine</strong> können ein Delir <strong>verschlechtern</strong> (Ausnahme: Alkohol-/Benzodiazepinentzugsdelir)! Haloperidol ist Mittel der 1. Wahl beim nicht-entzugsbedingten Delir.</p></div>`
},
{
title: "Merke",
html: `<ul>
<li>Delir ist ein <strong>medizinischer Notfall</strong> – die Ursachensuche hat Priorität!</li>
<li><strong>Hypoaktives Delir</strong> wird häufig übersehen – systematisches Screening (CAM, 4AT)!</li>
<li>Häufigste Trigger: <strong>Infektionen, Medikamente, Elektrolytstörungen, Harnverhalt, Schmerz</strong></li>
<li>Nicht-pharmakologische Maßnahmen sind <strong>effektiver als Medikamente</strong></li>
<li>Haloperidol bei Agitation, <strong>keine Benzodiazepine</strong> (außer bei Entzugsdelir)</li>
<li>An <strong>Wernicke-Enzephalopathie</strong> denken bei Alkoholabhängigkeit → Thiamin i.v.!</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> Entzugsdelir (Alkohol, Benzodiazepine), lebensbedrohliche Ursache, schwere Agitation, Intubationspflichtigkeit</li>
<li><strong>Überwachungsstation:</strong> delirante Patienten mit Monitoring-Bedarf</li>
<li><strong>Normalstation:</strong> mildes Delir mit identifizierter, behandelbarer Ursache</li>
</ul>`
}
],
stand: "12/24",
sources: `Inouye SK et al. Delirium in elderly people. Lancet. 2014;383(9920):911-22.<br>NICE Guideline CG103: Delirium: prevention, diagnosis and management. 2023.<br>Maldonado JR. Acute Brain Failure: Pathophysiology, Diagnosis, Management, and Sequelae of Delirium. Crit Care Clin. 2017;33(3):461-519.`
},
{
id: "diabetische-ketoazidose",
title: "Diabetische Ketoazidose",
category: "Metabolisch",
catKey: "metab",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Diabetische Ketoazidose (DKA):</strong> Akute, lebensbedrohliche metabolische Entgleisung bei absolutem oder relativem Insulinmangel, charakterisiert durch:
<ul>
<li><strong>Hyperglykämie</strong> (BZ &gt; 250 mg/dl, selten auch euglykämisch bei SGLT2-Inhibitoren!)</li>
<li><strong>Ketonämie/Ketonurie</strong></li>
<li><strong>Metabolische Azidose</strong> (pH &lt; 7,3, Bikarbonat &lt; 18 mmol/l)</li>
</ul>
</li>
</ul>
<h3>Schweregrade</h3>
<div class="table-wrap"><table>
<thead><tr><th>Parameter</th><th>Mild</th><th>Moderat</th><th>Schwer</th></tr></thead>
<tbody>
<tr><td>pH</td><td>7,25–7,30</td><td>7,00–7,24</td><td>&lt; 7,00</td></tr>
<tr><td>Bikarbonat</td><td>15–18 mmol/l</td><td>10–15 mmol/l</td><td>&lt; 10 mmol/l</td></tr>
<tr><td>Bewusstsein</td><td>Wach</td><td>Somnolent</td><td>Stupor/Koma</td></tr>
</tbody>
</table></div>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Erstmanifestation Diabetes mellitus Typ 1</strong></li>
<li><strong>Insulinpause/-fehler</strong> (Non-Compliance, Insulinpumpenversagen, fehlerhafte Injektion)</li>
<li><strong>Erhöhter Insulinbedarf:</strong> Infektion (häufigster Trigger!), OP, Trauma, Schwangerschaft, Myokardinfarkt, Steroidtherapie</li>
<li><strong>SGLT2-Inhibitoren</strong> (Dapagliflozin, Empagliflozin) → euglykämische DKA!</li>
<li><strong>Alkoholexzess</strong></li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Polyurie, Polydipsie</strong></li>
<li><strong>Dehydratation</strong> (trockene Schleimhäute, stehende Hautfalten, Tachykardie, Hypotonie)</li>
<li><strong>Übelkeit, Erbrechen, abdominelle Schmerzen</strong> (Pseudoperitonitis)</li>
<li><strong>Kussmaul-Atmung</strong> (tiefe, schnelle Atmung als respiratorische Kompensation)</li>
<li><strong>Acetongeruch</strong> (fruchtig/nagellackentfernerähnlich)</li>
<li><strong>Bewusstseinseintrübung</strong> bis Koma</li>
<li><strong>Schwäche, Müdigkeit</strong></li>
</ul>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1–2x venöser Zugang</li>
<li><strong>BZ-Messung</strong></li>
<li><strong>BGA</strong> (pH? BE? Bikarbonat? Laktat? K⁺? Na⁺? Glukose? Anionenlücke?)</li>
<li><strong>Ketone</strong> (Blut-Ketone bevorzugt: β-Hydroxybutyrat &gt; 3 mmol/l; alternativ Urin-Ketone)</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte (K⁺! Na⁺ korrigiert!), NW, Phosphat, GOT, GPT, Lipase, Gerinnung, HbA1c, ggf. Blutkulturen, PCT</li>
<li>12-Kanal-EKG (Hyperkaliämie-/Hypokaliämie-Zeichen?)</li>
<li><strong>Urin-Status</strong> (Ketone, Infektzeichen)</li>
</ul>
<h3>Klinische Untersuchung</h3>
<ul>
<li><strong>Anamnese:</strong> Bekannter Diabetes? Insulintherapie? Compliance? Auslöser (Infektion, Erbrechen, OP)? SGLT2-Inhibitor? Symptombeginn? Flüssigkeitsaufnahme?</li>
<li><strong>Körperliche Untersuchung:</strong> Dehydratation? Kussmaul-Atmung? Acetongeruch? Bewusstseinslage? Infektfokus? Abdomen?</li>
</ul>
<div class="callout callout-hinweis"><p><strong>Hinweis:</strong> <strong>Korrigiertes Natrium</strong> berechnen: Na⁺_korr = Na⁺_gemessen + 1,6 × (Glukose [mg/dl] − 100) / 100. Das Kalium ist initial oft normal/erhöht, fällt aber unter Insulintherapie rasch ab!</p></div>`
},
{
title: "Therapie",
html: `<h3>1. Volumentherapie (Priorität!)</h3>
<ul>
<li><strong>NaCl 0,9%</strong> 1000 ml/h in der 1. Stunde, dann 250–500 ml/h (Anpassung an Klinik)</li>
<li>Typisches Flüssigkeitsdefizit: 5–7 Liter</li>
<li>Wechsel auf NaCl 0,45% bei korrigiertem Na⁺ &gt; 145 mmol/l</li>
<li>Glukose 5–10% hinzufügen wenn BZ &lt; 250 mg/dl (um Insulintherapie fortsetzen zu können)</li>
</ul>
<h3>2. Insulintherapie</h3>
<ul>
<li><strong>Normalinsulin-Perfusor:</strong> 0,1 IE/kg/h i.v. (ca. 5–7 IE/h)</li>
<li>Kein initialer Bolus empfohlen</li>
<li>Ziel: BZ-Senkung um 50–70 mg/dl/h</li>
<li>BZ alle 1–2h kontrollieren</li>
<li>Insulinperfusor fortsetzen bis: pH &gt; 7,3, Bikarbonat &gt; 18 mmol/l, Anionenlücke normalisiert, Ketone rückläufig</li>
<li>Umstellung auf s.c.-Insulin erst bei Besserung + orale Nahrungsaufnahme (30 min Überlappung!)</li>
</ul>
<h3>3. Kaliumsubstitution</h3>
<ul>
<li><strong>K⁺ &gt; 5,5 mmol/l:</strong> Kein Kalium, Kontrolle alle 2h</li>
<li><strong>K⁺ 3,5–5,5 mmol/l:</strong> 20–30 mmol KCl pro Liter Infusion</li>
<li><strong>K⁺ &lt; 3,5 mmol/l:</strong> Aggressiver Kaliumersatz, Insulin pausieren bis K⁺ &gt; 3,5 mmol/l!</li>
</ul>
<h3>4. Bikarbonat</h3>
<ul>
<li>Nur bei pH &lt; 6,9: Natriumbikarbonat 100 mmol in 400 ml NaCl 0,45% über 2h</li>
<li>Routinemäßig NICHT empfohlen (verschlechtert ggf. intrazelluläre Azidose)</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Kalium</strong> engmaschig kontrollieren! Unter Insulintherapie kann K⁺ rasch abfallen → lebensbedrohliche Hypokaliämie! Bei K⁺ &lt; 3,5: Insulin pausieren!</p></div>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Hirnödem</strong> bei zu rascher BZ-Senkung (v.a. bei Kindern) – BZ nicht schneller als 50–70 mg/dl/h senken!</p></div>`
},
{
title: "Merke",
html: `<ul>
<li>Reihenfolge der Therapie: <strong>Volumen → Kalium → Insulin</strong> (erst Volumen, dann Kalium prüfen, dann Insulin!)</li>
<li><strong>Kalium</strong> ist der kritischste Parameter – engmaschig kontrollieren!</li>
<li>An <strong>euglykämische DKA</strong> bei SGLT2-Inhibitoren denken (BZ kann &lt; 250 mg/dl sein!)</li>
<li><strong>Anionenlücke</strong> als Verlaufsparameter (nicht nur BZ!) – Insulinperfusor erst beenden, wenn Anionenlücke normalisiert</li>
<li><strong>Infektfokus</strong> suchen (häufigster Auslöser!)</li>
<li>Bikarbonatgabe nur bei pH &lt; 6,9</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> schwere DKA (pH &lt; 7,0), Bewusstseinseintrübung, hämodynamische Instabilität, K⁺ &lt; 3,5 oder &gt; 6,0</li>
<li><strong>Überwachungsstation/IMC:</strong> moderate DKA</li>
<li><strong>Normalstation:</strong> milde DKA nach initialer Stabilisierung</li>
</ul>`
}
],
stand: "12/24",
sources: `Kitabchi AE et al. Hyperglycemic Crises in Adult Patients With Diabetes. Diabetes Care. 2009;32(7):1335-43.<br>Dhatariya KK et al. The Management of Diabetic Ketoacidosis in Adults. Joint British Diabetes Societies Inpatient Care Group, 2023.<br>S3-Leitlinie Therapie des Typ-1-Diabetes. DDG/DGIM, AWMF-Register-Nr. 057-013, 2023.`
},
{
id: "dyspnoe",
title: "Dyspnoe",
category: "Leitsymptom",
catKey: "leit",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Dyspnoe:</strong> Subjektiv empfundene Atemnot oder erschwerte Atmung unterschiedlicher Intensität</li>
</ul>`
},
{
title: "Ursachen",
html: `<h3>Pulmonale Ursachen</h3>
<ul>
<li>COPD-Exazerbation, Asthmaexazerbation</li>
<li>Pneumonie</li>
<li>Lungenarterienembolie</li>
<li>Pneumothorax</li>
<li>Pleuraerguss</li>
<li>Obere Atemwegsobstruktion (Fremdkörper, Larynxödem, Epiglottitis)</li>
</ul>
<h3>Kardiale Ursachen</h3>
<ul>
<li>Akute Herzinsuffizienz / Lungenödem</li>
<li>Akutes Koronarsyndrom</li>
<li>Perikardtamponade</li>
<li>Herzrhythmusstörungen</li>
</ul>
<h3>Sonstige Ursachen</h3>
<ul>
<li>Anaphylaxie</li>
<li>Metabolische Azidose (DKA, Urämie, Intoxikation)</li>
<li>Anämie (schwer)</li>
<li>Psychogen (Hyperventilationssyndrom, Panikattacke)</li>
<li>Neuromuskulär (Guillain-Barré, Myasthenie)</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li>Subjektive Atemnot, Erstickungsgefühl</li>
<li>Tachypnoe, Einsatz der Atemhilfsmuskulatur</li>
<li>ggf. Stridor (inspiratorisch: obere Obstruktion; exspiratorisch: untere Obstruktion)</li>
<li>ggf. Giemen, Rasselgeräusche, abgeschwächtes AG</li>
<li>ggf. Zyanose</li>
<li>ggf. Begleitsymptome der Grunderkrankung (Thoraxschmerz, Fieber, Ödeme etc.)</li>
</ul>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur)</li>
<li>1–2x venöser Zugang</li>
<li><strong>BGA</strong> (pO₂? pCO₂? pH? Laktat? Hb? MetHb? COHb?)</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte, NW, BNP/NT-proBNP, hs-Troponin, D-Dimere, Gerinnung, TSH</li>
<li><strong>12-Kanal-EKG</strong> (Ischämie? Rechtsherzbelastung? Arrhythmie?)</li>
</ul>
<h3>Klinische Untersuchung</h3>
<ul>
<li><strong>Anamnese:</strong> Akut/subakut/chronisch? Belastungs-/Ruhedyspnoe? Orthopnoe? Begleitsymptome? Vorerkrankungen? Medikamente? Allergie?</li>
<li><strong>Körperliche Untersuchung:</strong> Auskultation (Giemen, RG, Silent Chest, fehlendes AG)? JVD? Ödeme? Stridor? Zyanose? Fieber?</li>
</ul>
<h3>Erweiterte Diagnostik (ggf.)</h3>
<ul>
<li><strong>POCUS:</strong> Pleuraerguss? Pneumothorax? B-Linien? Perikarderguss? RV-Dilatation?</li>
<li><strong>Röntgen-Thorax</strong></li>
<li><strong>CT-Angiographie Thorax:</strong> bei V.a. LAE</li>
<li><strong>Peak-Flow:</strong> bei V.a. Asthma/COPD</li>
</ul>`
},
{
title: "Therapie",
html: `<ul>
<li>Stabilisierung gemäß ABCDE-Schema</li>
<li><strong>Sauerstoff</strong> nach Bedarf (Ziel-SpO₂ ≥ 94%, bei COPD 88–92%)</li>
<li>Oberkörperhochlagerung</li>
<li><strong>Therapie der Grunderkrankung</strong> (s. jeweilige SOP)</li>
<li>ggf. NIV, ggf. Intubation</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li>Dyspnoe erfordert eine <strong>rasche Differentialdiagnostik</strong> der lebensbedrohlichen Ursachen (LAE, Pneumothorax, ACS, Anaphylaxie, Perikardtamponade)</li>
<li><strong>BGA</strong> ist die wichtigste initiale Untersuchung</li>
<li><strong>POCUS</strong> am Bett ermöglicht eine rasche Eingrenzung der Ursache</li>
<li>Psychogene Dyspnoe ist eine Ausschlussdiagnose!</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li>Abhängig von der Grunderkrankung</li>
<li>s. jeweilige SOP</li>
</ul>`
}
],
stand: "12/24",
sources: `Berliner D et al. The Differential Diagnosis of Dyspnea. Dtsch Arztebl Int. 2016;113(49):834-845.<br>Parshall MB et al. An Official American Thoracic Society Statement: Update on the Mechanisms, Assessment, and Management of Dyspnea. Am J Respir Crit Care Med. 2012;185(4):435-52.`
},
{
id: "erbrechen",
title: "Erbrechen",
category: "Leitsymptom",
catKey: "leit",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Erbrechen (Emesis):</strong> Aktive, retrograde Entleerung von Mageninhalt durch den Mund, gesteuert durch das Brechzentrum in der Medulla oblongata</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Gastrointestinal:</strong> Gastroenteritis, Gastroparese, Ileus, Appendizitis, Cholezystitis, Pankreatitis, Ulcus, hepatische Enzephalopathie</li>
<li><strong>ZNS:</strong> Erhöhter Hirndruck (Tumor, Blutung, Hydrozephalus), Meningitis, Migräne, Vestibularisausfall, Kinetose</li>
<li><strong>Metabolisch:</strong> DKA, Urämie, Addison-Krise, Hyperkalzämie, Hyponatriämie, Schwangerschaft (Hyperemesis gravidarum)</li>
<li><strong>Medikamente/Toxine:</strong> Opioide, Chemotherapie, Digoxin, SSRI, Antibiotika, Alkohol</li>
<li><strong>Kardial:</strong> Myokardinfarkt (v.a. Hinterwand)</li>
<li><strong>Sonstige:</strong> Cannabinoid-Hyperemesis-Syndrom, postoperativ, psychogen, Bulimie</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li>Übelkeit, Würgen, Erbrechen</li>
<li>ggf. <strong>Hämatemesis</strong> (kaffeesatzartig oder frisch-blutig)</li>
<li>ggf. <strong>Miserere</strong> (fäkulentes Erbrechen bei Ileus)</li>
<li>ggf. Dehydratation, Elektrolytstörungen</li>
<li>ggf. Begleitsymptome der Grunderkrankung</li>
</ul>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1x venöser Zugang</li>
<li><strong>BGA</strong> (Alkalose? E'lyte? Glukose?)</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte, NW, GOT, GPT, Lipase, Gerinnung, ggf. β-HCG, hs-Troponin, TSH</li>
<li>12-Kanal-EKG</li>
<li><strong>Anamnese:</strong> Akut/chronisch? Frequenz? Zeitlicher Bezug zur Nahrungsaufnahme? Aspekt des Erbrochenen (gallig, blutig, fäkulent)? Medikamente? Schwangerschaft? Kopfschmerz? Schwindel? Diarrhoe? Abdominelle Schmerzen?</li>
<li>ggf. Abdomen-Sonographie, CT-Abdomen, cCT (bei V.a. zentrale Ursache)</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Allgemeinmaßnahmen</h3>
<ul>
<li>Rehydratation (i.v. Vollelektrolytlösung bei schwerer Dehydratation)</li>
<li>Elektrolytausgleich</li>
<li>Behandlung der Grunderkrankung</li>
</ul>
<h3>Antiemetische Therapie</h3>
<div class="table-wrap"><table>
<thead><tr><th>Medikament</th><th>Dosis</th><th>Hinweis</th></tr></thead>
<tbody>
<tr><td><strong>Ondansetron</strong></td><td>4–8 mg i.v./p.o.</td><td>Breite Wirksamkeit, Mittel der 1. Wahl</td></tr>
<tr><td><strong>Dimenhydrinat</strong></td><td>62 mg i.v.</td><td>Gut bei vestibulärem Erbrechen, sedierend</td></tr>
<tr><td><strong>MCP</strong></td><td>10 mg i.v./p.o.</td><td>CAVE: EPMS, QTc; max. 5 Tage</td></tr>
<tr><td><strong>Dexamethason</strong></td><td>4–8 mg i.v.</td><td>Insb. bei Chemotherapie-induziertem Erbrechen</td></tr>
<tr><td><strong>Haloperidol</strong></td><td>0,5–2 mg i.v.</td><td>Bei CHS, Opioid-induziertem Erbrechen</td></tr>
<tr><td><strong>Droperidol</strong></td><td>0,625–1,25 mg i.v.</td><td>Postoperatives Erbrechen</td></tr>
</tbody>
</table></div>`
},
{
title: "Merke",
html: `<ul>
<li>Erbrechen ist ein <strong>Symptom</strong> – die Ursachensuche ist entscheidend!</li>
<li>An <strong>lebensbedrohliche Ursachen</strong> denken: Ileus, SHT, Meningitis, DKA, Myokardinfarkt, Addison-Krise</li>
<li>Bei <strong>Hämatemesis</strong> → SOP Obere GI-Blutung</li>
<li>Bei <strong>Frauen im gebärfähigen Alter</strong>: β-HCG!</li>
<li>Bei persistierendem Erbrechen: an <strong>Dehydratation und Elektrolytstörungen</strong> denken (hypochlorämische Alkalose, Hypokaliämie)</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li>Abhängig von der Grunderkrankung</li>
<li><strong>Stationär:</strong> schwere Dehydratation, Elektrolytstörungen, chirurgische Ursache, Hämatemesis, Bewusstseinseintrübung</li>
<li><strong>Ambulant:</strong> selbstlimitierend, orale Rehydratation möglich</li>
</ul>`
}
],
stand: "12/24",
sources: `Scorza K et al. Evaluation of Nausea and Vomiting. Am Fam Physician. 2007;76(1):76-84.<br>Hasler WL et al. Nausea, Vomiting, and Indigestion. In: Harrison's Principles of Internal Medicine. 21st ed. McGraw-Hill, 2022.`
},
{
id: "erysipel",
title: "Erysipel",
category: "Infektiologie",
catKey: "infekt",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Erysipel (Wundrose):</strong> Akute, sich flächenhaft ausbreitende bakterielle Infektion der Dermis und des oberen subkutanen Gewebes mit Lymphgefäßbeteiligung, fast ausschließlich durch β-hämolysierende Streptokokken der Gruppe A (Streptococcus pyogenes) verursacht</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Erreger:</strong> β-hämolysierende Streptokokken der Gruppe A (selten Gruppe B, C, G); selten Staphylococcus aureus (dann eher Phlegmone)</li>
<li><strong>Eintrittspforte:</strong> Kleine Hautläsionen (Rhagaden, Tinea pedis, Ulcus cruris, Insektenstiche, Traumata, postoperativ)</li>
<li><strong>Risikofaktoren:</strong> Lymphödem, chronisch-venöse Insuffizienz, Adipositas, Diabetes mellitus, Immunsuppression, Z.n. Erysipel (Rezidivrate 30%)</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Scharf begrenzte</strong>, flammenförmige, <strong>flächenhafte Rötung</strong> mit Überwärmung und Schwellung</li>
<li><strong>Schmerzhafte</strong> Induration der Haut</li>
<li><strong>Fieber</strong>, Schüttelfrost, Krankheitsgefühl (Allgemeinsymptome oft vor Hautsymptomen!)</li>
<li>ggf. <strong>Lymphangitis</strong> (roter Streifen zum regionalen Lymphknoten)</li>
<li>ggf. <strong>Lymphadenitis</strong> (schmerzhafte regionäre Lymphknoten)</li>
<li>ggf. <strong>Blasenbildung</strong> (bullöses Erysipel)</li>
<li>ggf. <strong>Hämorrhagien</strong> (hämorrhagisches Erysipel)</li>
<li><strong>Häufigste Lokalisation:</strong> Unterschenkel (80%), Gesicht (15%)</li>
</ul>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1x venöser Zugang</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte, NW, Gerinnung, ggf. PCT, Blutkulturen (bei Fieber/Sepsisverdacht), ASL-Titer (im Verlauf)</li>
<li><strong>Klinische Diagnose!</strong> Kein Abstrich oder Biopsie routinemäßig nötig</li>
<li><strong>Anamnese:</strong> Symptombeginn? Fieber? Vorangegangene Hautläsion? Eintrittspforte? Vorheriges Erysipel? Risikofaktoren?</li>
<li><strong>Körperliche Untersuchung:</strong> Scharf begrenzte Rötung? Überwärmung? Schwellung? Lymphangitis? Lymphadenitis? Blasen? Eintrittspforte?</li>
<li>Markierung der Erythemgrenzen (Verlaufskontrolle!)</li>
<li>ggf. <strong>Sonographie/Doppler:</strong> bei V.a. TVT (DD!), Abszess</li>
</ul>
<div class="callout callout-hinweis"><p><strong>Hinweis:</strong> Differentialdiagnose: <strong>Tiefe Venenthrombose</strong> (Schwellung, Schmerz, Rötung), Phlegmone (unscharf begrenzt, tiefer), Kontaktdermatitis, Gichttophus, Erysipeloid.</p></div>`
},
{
title: "Therapie",
html: `<h3>Antibiotische Therapie</h3>
<ul>
<li><strong>Mittel der 1. Wahl (ambulant):</strong> Phenoxymethylpenicillin (Penicillin V) 1,5 Mega 3x/d p.o. für 10–14 Tage</li>
<li><strong>Mittel der 1. Wahl (stationär):</strong> Penicillin G 10 Mega 3x/d i.v.</li>
<li><strong>Penicillin-Allergie:</strong> Clindamycin 600 mg 3x/d i.v./p.o.</li>
<li>Umstellung i.v. → p.o. bei klinischer Besserung nach 48–72h</li>
</ul>
<h3>Begleitmaßnahmen</h3>
<ul>
<li>Ruhigstellung und Hochlagerung der betroffenen Extremität</li>
<li>Sanierung der Eintrittspforte (Tinea pedis behandeln, Rhagaden versorgen)</li>
<li>Analgesie (NSAR, Paracetamol)</li>
<li>Thromboseprophylaxe (NMH s.c.) bei Immobilisation</li>
<li>Kompressionstherapie bei CVI (nach Abklingen der Akutphase)</li>
</ul>
<h3>Rezidivprophylaxe</h3>
<ul>
<li>Bei ≥ 3 Erysipelen/Jahr: <strong>Penicillin V 250 mg 2x/d p.o.</strong> Langzeitprophylaxe (6–12 Monate) oder Benzathin-Penicillin 1,2 Mega i.m. alle 2–4 Wochen</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li>Erysipel = <strong>klinische Diagnose</strong> (scharf begrenzte Rötung + Fieber + Streptokokken)</li>
<li><strong>Penicillin</strong> ist Mittel der 1. Wahl (Streptokokken sind immer Penicillin-sensibel!)</li>
<li><strong>Eintrittspforte</strong> suchen und sanieren (Tinea pedis!)</li>
<li>DD <strong>Tiefe Venenthrombose</strong> beachten (ggf. Doppler-Sonographie)</li>
<li>Rezidivrate 30% → Risikofaktoren modifizieren, ggf. Langzeitprophylaxe</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Stationär:</strong> Schweres Erysipel (Sepsis, bullös, hämorrhagisch), Gesichtserysipel, relevante Komorbidität (Immunsuppression, Diabetes), orale Einnahme nicht möglich</li>
<li><strong>Ambulant:</strong> Unkompliziertes Erysipel, orale Antibiotikatherapie möglich, Wiedervorstellung in 48h zur Reevaluation</li>
</ul>`
}
],
stand: "12/24",
sources: `Stevens DL et al. IDSA Practice Guidelines for the Diagnosis and Management of Skin and Soft Tissue Infections: 2014 Update. Clin Infect Dis. 2014;59(2):e10-52.<br>Sunderkötter C et al. S2k-Leitlinie Haut- und Weichgewebeinfektionen. AWMF-Register-Nr. 013-044, 2019.`
},
{
id: "fieber-in-der-neutropenie",
title: "Fieber in der Neutropenie",
category: "Hämatologie",
catKey: "haem",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Neutropenie:</strong> Neutrophile Granulozyten &lt; 500/µl (oder &lt; 1000/µl mit erwartetem Abfall &lt; 500/µl)</li>
<li><strong>Fieber in der Neutropenie (FN):</strong> Einmalig Temperatur ≥ 38,3°C oral oder ≥ 38,0°C über 1 Stunde anhaltend bei Neutropenie</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Fieber in der Neutropenie ist ein <strong>onkologischer Notfall!</strong> Jede Verzögerung der empirischen Antibiotikatherapie erhöht die Mortalität.</p></div>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Häufigste Ursache der Neutropenie:</strong> Chemotherapie-induzierte Myelosuppression</li>
<li><strong>Infektionserreger:</strong>
<ul>
<li>Grampositive Erreger: Staphylokokken (koagulasenegative Staph., S. aureus), Streptokokken, Enterokokken</li>
<li>Gramnegative Erreger: E. coli, Klebsiella, Pseudomonas aeruginosa</li>
<li>Pilze: Candida, Aspergillus (insb. bei prolongierter Neutropenie &gt; 7 Tage)</li>
</ul>
</li>
<li>In 40–60% kein Erreger nachweisbar (Fieber unklarer Genese)</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Fieber</strong> (oft einziges Symptom!)</li>
<li>ggf. <strong>Schüttelfrost</strong></li>
<li>ggf. Symptome des Infektfokus (Husten, Diarrhoe, Dysurie, Hautinfektionen, Mukositis)</li>
<li>ggf. <strong>Sepsiszeichen</strong> (Tachykardie, Hypotonie, Tachypnoe, Verwirrtheit)</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Klassische Entzündungszeichen können bei Neutropenie <strong>fehlen</strong> (kein Eiter, geringe Infiltrate, wenig lokale Rötung). Fieber kann das einzige Zeichen einer lebensbedrohlichen Infektion sein!</p></div>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1–2x venöser Zugang</li>
<li><strong>Labor:</strong> BB mit Differenzial-BB, CRP, PCT, E'lyte, NW, GOT, GPT, LDH, Gerinnung, Laktat</li>
<li><strong>2 Paar Blutkulturen</strong> (aerob + anaerob, mindestens 1 Paar aus ZVK falls vorhanden + 1 Paar peripher) – <strong>VOR Antibiotikagabe!</strong></li>
<li>Urin-Status + Urinkultur</li>
<li>Rö-Thorax (Infiltrat?)</li>
<li><strong>Anamnese:</strong> Chemotherapie? Welches Schema? Letzter Zyklus? Nadir? Aktuelle Neutrophilenzahl? Fieberbeginn? Infektsymptome? Katheter? Mukositis? Medikamente? G-CSF?</li>
<li><strong>Körperliche Untersuchung:</strong> Infektfokus suchen! Mundschleimhaut? Perianalregion? Kathetereintrittsstelle? Haut? Lunge?</li>
<li>ggf. CT-Thorax (bei pulmonalen Symptomen, unauffälligem Rö), CT-Abdomen, Aspergillus-Galactomannan, β-D-Glucan</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Sofortige empirische Antibiotikatherapie (innerhalb von 60 min!)</h3>
<ul>
<li><strong>Piperacillin/Tazobactam</strong> 4,5 g i.v. alle 6h (oder als prolongierte Infusion)</li>
<li>Alternativ: <strong>Meropenem</strong> 1 g i.v. alle 8h (bei Penicillinallergie, Vortherapie, Pseudomonas-Risiko)</li>
<li>Alternativ: <strong>Cefepim</strong> 2 g i.v. alle 8h</li>
</ul>
<h3>Erweiterung der Therapie (bei Indikation)</h3>
<ul>
<li><strong>Vancomycin</strong> 15 mg/kg i.v. alle 12h: bei Katheterinfektion, Weichteilinfektion, Pneumonie, hämodynamischer Instabilität, MRSA-Risiko</li>
<li><strong>Antimykotische Therapie:</strong> bei persistierendem Fieber &gt; 72–96h trotz Breitspektrum-AB → <strong>Caspofungin</strong> 70 mg i.v. Tag 1, dann 50 mg/d oder liposomales Amphotericin B</li>
</ul>
<h3>Supportive Maßnahmen</h3>
<ul>
<li>Volumentherapie bei Sepsis</li>
<li><strong>G-CSF</strong> (Filgrastim): erwägen bei erwartet prolongierter Neutropenie, Sepsis, Pneumonie</li>
<li>Rücksprache mit Onkologie/Hämatologie</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Antibiotikagabe <strong>innerhalb von 60 Minuten</strong> nach Fieberbeginn! Jede Stunde Verzögerung bei neutropener Sepsis erhöht die Mortalität!</p></div>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Fieber + Neutropenie = Notfall</strong> – sofortige empirische Breitspektrum-Antibiotikatherapie!</li>
<li>Blutkulturen VOR Antibiotika, aber <strong>Antibiotika nicht verzögern!</strong></li>
<li>Klassische Infektzeichen können fehlen – <strong>Fieber ist oft das einzige Symptom!</strong></li>
<li>Keine rektale Temperaturmessung, keine DRU (Mukosaverletzung → Bakteriämie!)</li>
<li>An <strong>Pilzinfektionen</strong> denken bei persistierendem Fieber trotz Antibiotika (&gt; 72–96h)</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Stationäre Aufnahme</strong> (alle Patienten mit Hochrisiko-FN)</li>
<li><strong>Intensivstation:</strong> septischer Schock, Organdysfunktion</li>
<li>Ambulante Behandlung nur bei Niedrigrisiko-Patienten (MASCC-Score ≥ 21, stabile Klinik, orale Einnahme möglich, engmaschige Kontrolle möglich)</li>
</ul>`
}
],
stand: "12/24",
sources: `Taplitz RA et al. ASCO Guideline: Outpatient Management of Fever and Neutropenia. J Clin Oncol. 2018;36(14):1443-1453.<br>Heinz WJ et al. S2k-Leitlinie Diagnostik und empirische Therapie bei neutropenischem Fieber. AWMF-Register-Nr. 042-005, 2023.<br>Klastersky J et al. Management of febrile neutropaenia: ESMO Clinical Practice Guidelines. Ann Oncol. 2016;27(suppl 5):v111-v118.`
},
{
id: "fremdkoerperingestion",
title: "Fremdkörperingestion",
category: "Gastroenterologie",
catKey: "gi",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Fremdkörperingestion:</strong> Verschlucken von Fremdkörpern oder Nahrungsbolusimpaktion im oberen Gastrointestinaltrakt</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Kinder:</strong> Münzen, Spielzeugteile, Batterien, Magnete</li>
<li><strong>Erwachsene:</strong> Knochenstücke, Zahnstocher, Zahnprothesen, Nahrungsboli (Fleisch)</li>
<li><strong>Psychiatrische Patienten/Häftlinge:</strong> absichtliche Ingestion (Klingen, Nadeln, Drogenbeutel)</li>
<li><strong>Risikogruppen:</strong> Kinder, psychiatrische Patienten, ältere Menschen (Zahnprothesen), Patienten mit ösophagealer Pathologie</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li>ggf. asymptomatisch</li>
<li><strong>Dysphagie</strong>, Odynophagie</li>
<li><strong>Speicheln</strong> (Hypersalivation), Schluckunfähigkeit</li>
<li>Fremdkörpergefühl, retrosternale Schmerzen</li>
<li>ggf. Erbrechen</li>
<li>ggf. <strong>Stridor</strong>, Husten, Dyspnoe (bei trachealer Kompression/Aspiration)</li>
<li>ggf. <strong>Peritonitis</strong>-Zeichen (bei Perforation)</li>
</ul>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li><strong>Röntgen HWS/Thorax/Abdomen:</strong> Röntgendichte Fremdkörper? Freie Luft (Perforation)?</li>
<li>Anamnese: Was? Wann? Absichtlich? Symptome? Vorerkrankungen Ösophagus?</li>
<li>Körperliche Untersuchung: Atemwege frei? Speicheln? Peritonismus?</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Indikationen zur notfallmäßigen Endoskopie (&lt; 2h)</h3>
<ul>
<li><strong>Komplette ösophageale Obstruktion</strong> (Speicheln, Schluckunfähigkeit)</li>
<li><strong>Knopfbatterien im Ösophagus</strong> (Verätzungsgefahr!)</li>
<li><strong>Spitze/scharfe Gegenstände im Ösophagus</strong></li>
</ul>
<h3>Dringliche Endoskopie (&lt; 24h)</h3>
<ul>
<li>Stumpfe ösophageale Fremdkörper ohne komplette Obstruktion</li>
<li>Spitze/scharfe Gegenstände im Magen/Duodenum</li>
<li>Magnete (&gt; 1 oder Magnet + Metall)</li>
</ul>
<h3>Konservativ (Beobachtung)</h3>
<ul>
<li>Stumpfe, kleine Fremdkörper (&lt; 2,5 cm) im Magen (passieren in 80–90% spontan)</li>
<li>Klinische Kontrolle, ggf. Röntgen-Kontrolle nach 3–4 Wochen</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Knopfbatterien im Ösophagus</strong> = absoluter Notfall! Innerhalb von 2h schwere Verätzungen möglich! Sofortige endoskopische Entfernung!</p></div>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Knopfbatterien im Ösophagus</strong> = sofortige Entfernung!</li>
<li>Spitze Gegenstände im Ösophagus = notfallmäßige Endoskopie</li>
<li>Stumpfe FK im Magen können oft konservativ beobachtet werden</li>
<li>Bei <strong>Body-Packing</strong> (Drogenbeutel): KEINE Endoskopie (Rupturgefahr!) → chirurgische Entfernung bei Komplikation</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Stationär:</strong> ösophageale FK, spitze/scharfe FK, Knopfbatterien, Komplikationen, Body-Packing</li>
<li><strong>Ambulant:</strong> kleine stumpfe FK im Magen, asymptomatisch, Verlaufs-Röntgen geplant</li>
</ul>`
}
],
stand: "12/24",
sources: `Birk M et al. ESGE Guideline: Removal of foreign bodies in the upper gastrointestinal tract in adults. Endoscopy. 2016;48(5):489-496.<br>Ikenberry SO et al. ASGE Guideline: Management of ingested foreign bodies and food impactions. Gastrointest Endosc. 2011;73(6):1085-91.`
},
{
id: "harnwegsinfektion",
title: "Harnwegsinfektion",
category: "Infektiologie",
catKey: "infekt",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Unkomplizierte HWI:</strong> HWI bei nicht-schwangeren, prämenopausalen Frauen ohne relevante Grunderkrankungen (Zystitis, Pyelonephritis)</li>
<li><strong>Komplizierte HWI:</strong> HWI bei Männern, Schwangeren, Kindern, bei anatomischen/funktionellen Anomalien, Katheter, Immunsuppression, Niereninsuffizienz</li>
<li><strong>Urosepsis:</strong> Sepsis mit Harnwegsinfekt als Fokus</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>E. coli</strong> (75–90%)</li>
<li>Staphylococcus saprophyticus (v.a. junge Frauen)</li>
<li>Klebsiella pneumoniae, Proteus mirabilis</li>
<li>Enterococcus faecalis</li>
<li>Pseudomonas aeruginosa (nosokomial, katheterassoziiert)</li>
</ul>`
},
{
title: "Symptome",
html: `<h3>Untere HWI (Zystitis)</h3>
<ul>
<li>Dysurie, Pollakisurie, Algurie</li>
<li>Suprapubischer Druckschmerz</li>
<li>ggf. Hämaturie</li>
<li>Kein Fieber</li>
</ul>
<h3>Obere HWI (Pyelonephritis)</h3>
<ul>
<li><strong>Flankenschmerz</strong>, <strong>Nierenlager-Klopfschmerz</strong></li>
<li><strong>Fieber</strong>, Schüttelfrost</li>
<li>Übelkeit, Erbrechen</li>
<li>ggf. Zystitis-Symptome</li>
</ul>
<h3>Urosepsis</h3>
<ul>
<li>Pyelonephritis-Symptome + Sepsis-Kriterien (Tachykardie, Hypotonie, Tachypnoe, Fieber/Hypothermie, Verwirrtheit)</li>
</ul>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1x venöser Zugang (bei Pyelonephritis/Urosepsis)</li>
<li><strong>Urin-Stix:</strong> Leukozyten, Nitrit, Erythrozyten</li>
<li><strong>Urinkultur + Resistenzbestimmung:</strong> bei Pyelonephritis, komplizierter HWI, Männern, Schwangeren, Therapieversagen, rezidivierender HWI</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte, NW, ggf. PCT, Laktat, Blutkulturen (bei Pyelonephritis/Sepsis)</li>
<li><strong>Sonographie Nieren/Blase:</strong> Harnstau? Abszess? Restharn?</li>
<li>ggf. CT-Abdomen (bei V.a. Komplikation: Abszess, Harnstau, emphysematöse Pyelonephritis)</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Unkomplizierte Zystitis</h3>
<ul>
<li><strong>Fosfomycin</strong> 3 g p.o. Einmaldosis (1. Wahl)</li>
<li><strong>Nitrofurantoin</strong> 100 mg 2x/d p.o. für 5 Tage</li>
<li><strong>Pivmecillinam</strong> 400 mg 3x/d p.o. für 3 Tage</li>
<li><strong>Nitroxolin</strong> 250 mg 3x/d p.o. für 5 Tage</li>
</ul>
<h3>Unkomplizierte Pyelonephritis (ambulant)</h3>
<ul>
<li><strong>Ciprofloxacin</strong> 500 mg 2x/d p.o. für 7 Tage</li>
<li><strong>Ceftriaxon</strong> 2 g i.v. Tag 1, dann Sequenztherapie mit Ciprofloxacin p.o.</li>
</ul>
<h3>Komplizierte HWI / Pyelonephritis (stationär)</h3>
<ul>
<li><strong>Piperacillin/Tazobactam</strong> 4,5 g i.v. 3x/d</li>
<li>Alternativ: <strong>Ceftriaxon</strong> 2 g i.v. 1x/d</li>
<li>Anpassung nach Antibiogramm</li>
</ul>
<h3>Urosepsis</h3>
<ul>
<li>s. SOP Sepsis + kalkulierte AB-Therapie</li>
<li><strong>Harnableitung</strong> bei Harnstau (DJ-Schiene oder Nephrostomie)</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li>Unkomplizierte Zystitis: <strong>klinische Diagnose</strong>, keine Urinkultur nötig (Ausnahme: Therapieversagen, Rezidiv)</li>
<li><strong>Fluorchinolone NICHT</strong> bei unkomplizierter Zystitis (Reserve für Pyelonephritis)</li>
<li>Bei <strong>Harnstau + Infektion</strong> = Notfall → Harnableitung!</li>
<li>Asymptomatische Bakteriurie nur bei <strong>Schwangeren</strong> und <strong>vor urologischen Eingriffen</strong> behandeln</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Stationär:</strong> Pyelonephritis mit Erbrechen/Sepsis, Urosepsis, Harnstau, komplizierte HWI, Schwangerschaft</li>
<li><strong>Ambulant:</strong> unkomplizierte Zystitis, leichte Pyelonephritis bei oraler Toleranz</li>
</ul>`
}
],
stand: "12/24",
sources: `S3-Leitlinie unkomplizierte Harnwegsinfektionen. AWMF-Register-Nr. 043-044, 2024.<br>Foxman B. Urinary Tract Infection Syndromes. Infect Dis Clin North Am. 2014;28(1):1-13.<br>EAU Guidelines on Urological Infections, 2024.`
},
{
id: "heparininduzierte-thrombozytopenie",
title: "Heparininduzierte Thrombozytopenie",
category: "Hämatologie",
catKey: "haem",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>HIT Typ II:</strong> Immunologisch vermittelte, durch Heparin ausgelöste Thrombozytopenie mit paradox erhöhtem Thromboserisiko durch Antikörper gegen den Komplex aus Plättchenfaktor 4 (PF4) und Heparin</li>
<li>Abgrenzung: <strong>HIT Typ I</strong> (nicht-immunologisch, milder Abfall in den ersten Tagen, klinisch nicht relevant, kein Heparin-Stopp nötig)</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li>IgG-Antikörper gegen PF4-Heparin-Komplexe → Thrombozytenaktivierung → <strong>Thrombozytopenie + Thrombose</strong></li>
<li><strong>Unfraktioniertes Heparin (UFH):</strong> höchstes HIT-Risiko (1–5%)</li>
<li><strong>Niedermolekulares Heparin (NMH):</strong> geringeres Risiko (0,1–0,7%)</li>
<li>Typischer Beginn: <strong>Tag 5–14</strong> nach Heparinexposition (bei Reexposition auch früher)</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Thrombozytopenie:</strong> Abfall &gt; 50% des Ausgangswertes (selten &lt; 20.000/µl)</li>
<li><strong>Thromboembolische Komplikationen</strong> (in 50%!): TVT, LAE, arterielle Thrombosen (Schlaganfall, periphere Arterienverschlüsse), Hautläsionen an Injektionsstellen</li>
<li>ggf. Hautnekrosen an Heparin-Injektionsstellen</li>
<li>ggf. anaphylaktoide Reaktion bei Heparin-Bolus</li>
</ul>`
},
{
title: "Diagnostik",
html: `<ul>
<li><strong>4T-Score</strong> (klinische Vortestwahrscheinlichkeit):
<ul>
<li><strong>T</strong>hrombozytenabfall (Ausmaß, Nadir)</li>
<li><strong>T</strong>iming (Tag 5–14?)</li>
<li><strong>T</strong>hrombose (neue Thrombose?)</li>
<li>Andere <strong>T</strong>hrombozytopenie-Ursachen (Sepsis, Medikamente, DIC)?</li>
<li>Score ≤ 3: HIT unwahrscheinlich; 4–5: intermediär; 6–8: hohe Wahrscheinlichkeit</li>
</ul>
</li>
<li><strong>Anti-PF4/Heparin-Antikörper (ELISA):</strong> Screening (hohe Sensitivität, moderate Spezifität)</li>
<li><strong>Funktionelle Tests:</strong> HIPA oder Serotonin-Release-Assay (Bestätigungstest, hohe Spezifität)</li>
<li>Labor: BB (Thrombozytenverlauf!), Gerinnung, D-Dimere</li>
<li>Bildgebung: Doppler-Sonographie bei V.a. TVT</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Sofortmaßnahmen bei klinischem Verdacht (4T-Score ≥ 4)</h3>
<ul>
<li><strong>Sofort alle Heparine stoppen!</strong> (UFH UND NMH, auch Heparin-Spülungen und Heparin-beschichtete Katheter)</li>
<li><strong>Alternative Antikoagulation</strong> sofort beginnen (auch ohne Thrombosenachweis, da hohes Thromboserisiko!):
<ul>
<li><strong>Argatroban</strong> i.v. (Perfusor, Ziel-aPTT 1,5–3× Ausgangswert, Dosisreduktion bei Leberinsuffizienz)</li>
<li><strong>Fondaparinux</strong> s.c. (Off-Label, aber gut belegt)</li>
<li><strong>Bivalirudin</strong> i.v. (bei PCI)</li>
<li><strong>DOAK</strong> (nach Akutphase, Umstellung von Argatroban)</li>
</ul>
</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Kein Vitamin-K-Antagonist (Marcumar/Warfarin)</strong> in der Akutphase! Risiko der Cumarin-Nekrose und venösen Gangrän! Erst nach Thrombozytenerhöhung und stabiler alternativer Antikoagulation umstellen.</p></div>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Keine Thrombozytentransfusion</strong> bei HIT (kann Thrombose aggravieren)!</p></div>`
},
{
title: "Merke",
html: `<ul>
<li>An HIT denken bei <strong>Thrombozytenabfall &gt; 50%</strong> ab Tag 5–14 nach Heparinexposition</li>
<li><strong>4T-Score</strong> zur klinischen Vortestwahrscheinlichkeit</li>
<li><strong>Sofort alle Heparine stoppen</strong> und alternative Antikoagulation beginnen</li>
<li><strong>Kein Marcumar</strong> in der Akutphase!</li>
<li><strong>Keine Thrombozytentransfusion!</strong></li>
<li>Dokumentation: HIT-Ausweis ausstellen, Allergie-Pass</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Stationäre Aufnahme</strong> (alle Patienten mit V.a. HIT II)</li>
<li>Hämatologisches Konsil</li>
</ul>`
}
],
stand: "12/24",
sources: `Greinacher A et al. Heparininduzierte Thrombozytopenie. Dtsch Arztebl Int. 2020;117(10):166-173.<br>Cuker A et al. ASH 2018 guidelines for management of venous thromboembolism: heparin-induced thrombocytopenia. Blood Adv. 2018;2(22):3360-3392.`
},
{
id: "hepatische-enzephalopathie",
title: "Hepatische Enzephalopathie",
category: "Gastroenterologie",
catKey: "gi",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Hepatische Enzephalopathie (HE):</strong> Potenziell reversible Funktionsstörung des Gehirns infolge einer Leberinsuffizienz bzw. eines portosystemischen Shunts mit Akkumulation neurotoxischer Substanzen (v.a. Ammoniak)</li>
</ul>
<h3>West-Haven-Klassifikation</h3>
<div class="table-wrap"><table>
<thead><tr><th>Grad</th><th>Klinik</th></tr></thead>
<tbody>
<tr><td>0 (minimal)</td><td>Psychometrisch nachweisbar, klinisch unauffällig</td></tr>
<tr><td>I</td><td>Konzentrationsstörung, Stimmungsschwankung, Schlafstörung</td></tr>
<tr><td>II</td><td>Lethargie, Desorientiertheit, Asterixis (Flapping Tremor)</td></tr>
<tr><td>III</td><td>Somnolenz, Verwirrtheit, Asterixis, Hyperreflexie</td></tr>
<tr><td>IV</td><td>Koma</td></tr>
</tbody>
</table></div>`
},
{
title: "Ursachen",
html: `<p><strong>Auslöser einer HE-Episode:</strong></p>
<ul>
<li><strong>GI-Blutung</strong> (häufigster Trigger!)</li>
<li><strong>Infektion/Sepsis</strong> (SBP!)</li>
<li><strong>Obstipation</strong></li>
<li><strong>Elektrolytstörungen</strong> (Hypokaliämie, Hyponatriämie)</li>
<li><strong>Medikamente</strong> (Benzodiazepine, Opioide, Diuretika-Überdosierung)</li>
<li><strong>Dehydratation</strong></li>
<li><strong>TIPS</strong></li>
<li><strong>Diätfehler</strong> (exzessive Proteinzufuhr – eher selten)</li>
<li><strong>Pfortaderthrombose</strong></li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li>Bewusstseinseintrübung (Somnolenz bis Koma)</li>
<li>Verwirrtheit, Desorientierung</li>
<li><strong>Asterixis</strong> (Flapping Tremor / Leberflattern)</li>
<li>Verlangsamung, Apathie</li>
<li>Foetor hepaticus (süßlich-faulig)</li>
<li>Hyperreflexie, positiver Babinski (Grad III–IV)</li>
<li>ggf. Agitation (bei Alkoholentzug überlagert)</li>
</ul>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1x venöser Zugang</li>
<li><strong>BGA</strong> (NH₃? pH? E'lyte? Laktat? Glukose?)</li>
<li><strong>Ammoniak</strong> (venös, auf Eis transportieren!) – korreliert nicht immer mit Schweregrad, aber erhöhte Werte unterstützen die Diagnose</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte, NW, GOT, GPT, Bilirubin, Albumin, Gerinnung (INR), Ammoniak, Laktat, Blutkulturen</li>
<li>BZ-Messung</li>
<li><strong>Anamnese:</strong> Bekannte Leberzirrhose? Auslöser (Blutung, Infektion, Obstipation, Medikamente)? Compliance mit Laktulose?</li>
<li><strong>Körperliche Untersuchung:</strong> Bewusstseinslage (West-Haven)? Asterixis? Foetor hepaticus? Ikterus? Aszites? Caput medusae? GI-Blutung?</li>
<li><strong>Ausschluss anderer Ursachen</strong> der Bewusstseinsstörung: cCT, BZ, Na⁺, Infektdiagnostik, Urin-Drogenscreening</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Allgemeinmaßnahmen</h3>
<ul>
<li>Stabilisierung gemäß ABCDE-Schema</li>
<li>Atemwegssicherung bei Grad III–IV</li>
<li>Auslöser identifizieren und behandeln!</li>
</ul>
<h3>Spezifische Therapie</h3>
<ul>
<li><strong>Laktulose</strong> p.o./per Magensonde/rektal: 20–30 ml 3–4x/d p.o. (Ziel: 2–3 weiche Stühle/d); bei Grad III–IV: Laktulose-Einlauf (300 ml in 700 ml Wasser rektal)</li>
<li><strong>Rifaximin</strong> 550 mg 2x/d p.o. (Rezidivprophylaxe, ergänzend zu Laktulose)</li>
<li><strong>Eiweißzufuhr NICHT einschränken!</strong> (1,2–1,5 g/kg/d, bevorzugt pflanzlich/Milchprotein)</li>
</ul>
<h3>Auslöserbehandlung</h3>
<ul>
<li>GI-Blutung → Endoskopie, Transfusion</li>
<li>Infektion → Antibiotika (SBP: Ceftriaxon 2 g i.v.)</li>
<li>Obstipation → Laktulose, Einlauf</li>
<li>Elektrolytstörungen → Korrektur</li>
<li>Sedativa → Absetzen</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Keine Benzodiazepine, keine Opioide</strong> bei HE! Falls Sedierung nötig (z.B. für Intubation): Propofol bevorzugen.</p></div>`
},
{
title: "Merke",
html: `<ul>
<li>HE ist eine <strong>klinische Diagnose</strong> – Ammoniak unterstützt, ist aber nicht beweisend</li>
<li><strong>Auslöser suchen und behandeln</strong> ist die wichtigste Maßnahme!</li>
<li><strong>Laktulose</strong> = Therapie der 1. Wahl</li>
<li>Eiweißrestriktion ist <strong>obsolet</strong>!</li>
<li>Keine Sedativa (Benzodiazepine, Opioide)!</li>
<li>An <strong>SBP</strong> als Auslöser denken → diagnostische Aszitespunktion!</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> Grad III–IV, Atemwegs-/Aspirationsgefahr, GI-Blutung, Sepsis</li>
<li><strong>Normalstation:</strong> Grad I–II mit identifiziertem Auslöser</li>
</ul>`
}
],
stand: "12/24",
sources: `Vilstrup H et al. Hepatic Encephalopathy in Chronic Liver Disease: AASLD/EASL Practice Guideline. Hepatology. 2014;60(2):715-35.<br>Rose CF et al. Hepatic encephalopathy: Novel insights into classification, pathophysiology and therapy. J Hepatol. 2020;73(6):1526-1547.`
},
{
id: "herz-kreislauf-stillstand",
title: "Herz-Kreislauf-Stillstand",
category: "Kardiologie",
catKey: "kardio",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Herz-Kreislauf-Stillstand:</strong> Abruptes Sistieren der mechanischen Herzaktion mit Verlust der Bewusstlosigkeit und fehlender Atmung/Schnappatmung</li>
</ul>
<h3>EKG-Rhythmen</h3>
<ul>
<li><strong>Schockbare Rhythmen:</strong> Kammerflimmern (VF), pulslose ventrikuläre Tachykardie (pVT)</li>
<li><strong>Nicht-schockbare Rhythmen:</strong> Asystolie, pulslose elektrische Aktivität (PEA)</li>
</ul>`
},
{
title: "Ursachen",
html: `<p><strong>4 H's und HITS:</strong></p>
<ul>
<li><strong>H</strong>ypoxie</li>
<li><strong>H</strong>ypovolämie</li>
<li><strong>H</strong>ypo-/Hyperkaliämie, metabolisch</li>
<li><strong>H</strong>ypothermie</li>
<li><strong>H</strong>erzbeuteltamponade</li>
<li><strong>I</strong>ntoxikation</li>
<li><strong>T</strong>hromboembolie (LAE, Koronarthrombose)</li>
<li><strong>S</strong>pannungspneumothorax</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Bewusstlosigkeit</strong></li>
<li><strong>Fehlende normale Atmung</strong> (keine Atmung oder Schnappatmung)</li>
<li><strong>Fehlender Puls</strong> (A. carotis, max. 10 Sekunden prüfen)</li>
</ul>`
},
{
title: "Diagnostik",
html: `<ul>
<li><strong>Keine aufwändige Diagnostik – sofort CPR beginnen!</strong></li>
<li>Patient nicht ansprechbar + keine normale Atmung → <strong>Reanimation starten!</strong></li>
<li>EKG/Defibrillator anschließen → Rhythmusanalyse</li>
<li>BGA, Labor, POCUS (in Pausen, ohne CPR-Unterbrechung)</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>ALS-Algorithmus (ERC 2021)</h3>
<ul>
<li><strong>Hochqualitative CPR:</strong> 30:2 (ohne erweiterten Atemweg), Drucktiefe 5–6 cm, Frequenz 100–120/min, vollständige Entlastung, Minimierung von Unterbrechungen (&lt; 10 sec)</li>
<li><strong>Defibrillation</strong> bei schockbarem Rhythmus (VF/pVT): 150–200 J biphasisch → sofort weiter CPR 2 min → Rhythmuscheck</li>
</ul>
<h3>Medikamente</h3>
<ul>
<li><strong>Adrenalin 1 mg i.v.</strong>:
<ul>
<li>Schockbar: nach 3. Schock, dann alle 3–5 min</li>
<li>Nicht-schockbar: sofort, dann alle 3–5 min</li>
</ul>
</li>
<li><strong>Amiodaron</strong> (nur bei schockbarem Rhythmus):
<ul>
<li>300 mg i.v. nach 3. Schock</li>
<li>150 mg i.v. nach 5. Schock</li>
</ul>
</li>
</ul>
<h3>Reversible Ursachen behandeln (4H's + HITS)</h3>
<h3>Erweiterte Atemwegssicherung</h3>
<ul>
<li>Endotracheale Intubation oder supraglottischer Atemweg</li>
<li>Nach Atemwegssicherung: kontinuierliche Thoraxkompressionen + 10 Beatmungen/min</li>
</ul>
<h3>Post-Reanimation (ROSC)</h3>
<ul>
<li>12-Kanal-EKG (STEMI → sofortige PCI)</li>
<li><strong>Targeted Temperature Management (TTM):</strong> Zieltemperatur 32–36°C für 24h</li>
<li>Intensivstation</li>
<li>Hämodynamische Stabilisierung</li>
<li>Neuroprognostik frühestens nach 72h</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Frühe CPR + frühe Defibrillation</strong> = entscheidend für Überleben</li>
<li>CPR-Qualität ist der wichtigste modifizierbare Faktor</li>
<li><strong>Reversible Ursachen</strong> aktiv suchen und behandeln (4H's + HITS)</li>
<li>Bei STEMI nach ROSC: <strong>sofortige Koronarangiographie</strong></li>
<li><strong>POCUS</strong> zur Ursachensuche (Perikardtamponade, LAE, Hypovolämie) – ohne CPR-Unterbrechung!</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation</strong> (immer nach ROSC)</li>
<li>Cardiac Arrest Center bei Verfügbarkeit</li>
</ul>`
}
],
stand: "12/24",
sources: `Soar J et al. European Resuscitation Council Guidelines 2021: Adult advanced life support. Resuscitation. 2021;161:115-151.<br>Nolan JP et al. European Resuscitation Council and European Society of Intensive Care Medicine Guidelines 2021: Post-resuscitation care. Resuscitation. 2021;161:220-269.`
},
{
id: "hitzschlag",
title: "Hitzschlag",
category: "Sonstige",
catKey: "sonst",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Hitzschlag:</strong> Lebensbedrohlicher Notfall mit <strong>Körperkerntemperatur &gt; 40°C</strong> und <strong>ZNS-Dysfunktion</strong> (Verwirrtheit, Krampfanfall, Koma) infolge einer Überwärmung des Organismus</li>
</ul>
<h3>Formen</h3>
<ul>
<li><strong>Klassischer Hitzschlag:</strong> passive Überwärmung (ältere, chronisch kranke Patienten, Hitzewelle)</li>
<li><strong>Anstrengungsbedingter Hitzschlag:</strong> körperliche Belastung bei Hitze (Sportler, Soldaten, Arbeiter)</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li>Hohe Umgebungstemperatur + hohe Luftfeuchtigkeit</li>
<li>Körperliche Anstrengung bei Hitze</li>
<li>Mangelnde Akklimatisierung</li>
<li>Dehydratation</li>
<li>Medikamente: Anticholinergika, Diuretika, Betablocker, Neuroleptika, SSRI, Sympathomimetika</li>
<li>Adipositas, hohes Alter, kardiovaskuläre Erkrankungen</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Körperkerntemperatur &gt; 40°C</strong></li>
<li><strong>ZNS-Dysfunktion:</strong> Verwirrtheit, Agitation, Ataxie, Krampfanfälle, Koma</li>
<li><strong>Heiße, trockene Haut</strong> (klassisch) oder schweißnasse Haut (anstrengungsbedingt)</li>
<li>Tachykardie, Hypotonie</li>
<li>Tachypnoe</li>
<li>ggf. <strong>Multiorganversagen:</strong> AKI, Rhabdomyolyse, DIC, Leberversagen, ARDS</li>
</ul>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter + <strong>Körperkerntemperatur</strong> (rektal!)</li>
<li>1–2x venöser Zugang</li>
<li><strong>BGA</strong> (Laktat? pH? E'lyte? Glukose?)</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte, NW, <strong>CK</strong> (Rhabdomyolyse!), GOT, GPT, LDH, Bilirubin, Gerinnung (DIC?), Fibrinogen, Myoglobin, Laktat</li>
<li>12-Kanal-EKG</li>
<li>Urin-Status (Myoglobinurie?)</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Sofortige aggressive Kühlung (wichtigste Maßnahme!)</h3>
<ul>
<li><strong>Ziel:</strong> Kerntemperatur &lt; 39°C innerhalb von 30 Minuten</li>
<li><strong>Goldstandard:</strong> Kaltwasser-Immersion (Eiswasserbad, 1–2°C, effektivste Methode)</li>
<li><strong>Alternativen:</strong> Evaporation (Besprühen mit Wasser + Ventilator), Eispacks (Leiste, Axilla, Hals), kalte i.v.-Infusionen (4°C kristalloid), Kühldecken</li>
<li>Kühlung stoppen bei Kerntemperatur 38–39°C (Overshoot vermeiden)</li>
</ul>
<h3>Supportive Therapie</h3>
<ul>
<li>Aggressive Volumentherapie (Vollelektrolytlösung)</li>
<li>Atemwegssicherung bei Bewusstlosigkeit</li>
<li>Krampfanfalldurchbrechung: Benzodiazepine (Midazolam 5 mg i.v.)</li>
<li>Elektrolytausgleich</li>
<li>Rhabdomyolyse-Management (forcierte Diurese, s. AKI)</li>
<li>DIC-Management</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Antipyretika (Paracetamol, Ibuprofen) sind wirkungslos</strong> beim Hitzschlag – es liegt keine Pyrogen-vermittelte Temperatursollwertverstellung vor! Nur physikalische Kühlung!</p></div>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Hitzschlag = lebensbedrohlicher Notfall</strong> – Letalität ohne Therapie 50–80%!</li>
<li><strong>Aggressives Kühlen</strong> ist die wichtigste und zeitkritische Maßnahme</li>
<li>Antipyretika sind unwirksam!</li>
<li>Kerntemperatur <strong>rektal</strong> messen (periphere Messung unzuverlässig)</li>
<li>An <strong>Rhabdomyolyse, DIC, AKI, Leberversagen</strong> denken</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation</strong> (immer bei Hitzschlag)</li>
</ul>`
}
],
stand: "12/24",
sources: `Epstein Y et al. Heatstroke. N Engl J Med. 2019;380(25):2449-2459.<br>Leon LR et al. Heat stroke: Role of the systemic inflammatory response. J Appl Physiol. 2010;109(6):1980-8.`
},
{
id: "hyperkaliaemie",
title: "Hyperkaliämie",
category: "Metabolisch",
catKey: "metab",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Hyperkaliämie:</strong> Serumkalium &gt; 5,0 mmol/l</li>
<li><strong>Schwere Hyperkaliämie:</strong> Serumkalium &gt; 6,0 mmol/l oder EKG-Veränderungen</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Verminderte renale Ausscheidung:</strong> AKI, CKD, Nebenniereninsuffizienz (Aldosteronmangel), Medikamente (ACE-I, ARB, MRA, Kaliumsparende Diuretika, NSAR, Trimethoprim, Ciclosporin, Tacrolimus, Heparin)</li>
<li><strong>Kaliumshift nach extrazellulär:</strong> Azidose, Insulinmangel (DKA), Betablocker, Rhabdomyolyse, Tumorlysesyndrom, Hämolyse, Gewebsnekrose, Succinylcholin, Digitalisintoxikation</li>
<li><strong>Erhöhte Zufuhr:</strong> Kaliumsubstitution (iatrogen), kaliumreiche Ernährung (bei CKD)</li>
<li><strong>Pseudohyperkaliämie:</strong> Hämolyse bei Blutentnahme, Thrombozytose, Leukozytose, Faust-Pumpen</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li>ggf. asymptomatisch</li>
<li><strong>Muskelschwäche</strong>, Parästhesien, schlaffe Paresen</li>
<li><strong>Herzrhythmusstörungen</strong> (potenziell letal!)</li>
</ul>
<h3>EKG-Veränderungen (progressiv)</h3>
<ol>
<li><strong>Hohe, spitze T-Wellen</strong> (frühestes Zeichen, ab ca. 5,5–6,0 mmol/l)</li>
<li>Verkürztes QT-Intervall</li>
<li>PR-Verlängerung, flache P-Wellen</li>
<li><strong>QRS-Verbreiterung</strong></li>
<li>Sinuswellenform (Verschmelzung von QRS und T)</li>
<li><strong>Kammerflimmern / Asystolie</strong></li>
</ol>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1x venöser Zugang</li>
<li><strong>12-Kanal-EKG</strong> (sofort!)</li>
<li><strong>BGA</strong> (K⁺ am schnellsten! pH? Azidose?)</li>
<li><strong>Labor:</strong> BB, E'lyte, NW, CK, Gerinnung, BZ, ggf. Cortisol</li>
<li>Pseudohyperkaliämie ausschließen (Kontrolle bei unklarem Befund)</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Schwere Hyperkaliämie (K⁺ &gt; 6,0 oder EKG-Veränderungen) – Notfall!</h3>
<h4>1. Kardioprotektion (sofort!)</h4>
<ul>
<li><strong>Calciumgluconat 10%</strong> 10–20 ml i.v. über 2–3 min (stabilisiert Myokard, senkt K⁺ nicht!)</li>
<li>Wiederholung nach 5–10 min bei persistierenden EKG-Veränderungen</li>
</ul>
<h4>2. Kaliumshift nach intrazellulär</h4>
<ul>
<li><strong>Insulin + Glukose:</strong> 10 IE Normalinsulin + 25 g Glukose (250 ml G10%) i.v. über 15–30 min (Wirkung nach 15–30 min)</li>
<li><strong>Salbutamol</strong> 10–20 mg Vernebler (additiv zu Insulin/Glukose)</li>
<li><strong>Natriumbikarbonat</strong> 50–100 mmol i.v. (nur bei gleichzeitiger Azidose)</li>
</ul>
<h4>3. Kaliumelimination</h4>
<ul>
<li><strong>Furosemid</strong> 40–80 mg i.v. (bei erhaltener Nierenfunktion)</li>
<li><strong>Natrium-Zirkonium-Cyclosilikat (Lokelma)</strong> 10 g p.o. 3x/d initial oder <strong>Patiromer (Veltassa)</strong> 8,4 g p.o.</li>
<li><strong>Hämodialyse:</strong> bei therapierefraktärer Hyperkaliämie, Nierenversagen</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>BZ-Kontrolle</strong> nach Insulin-Glukose-Gabe (Hypoglykämie-Risiko! BZ-Kontrolle nach 30 und 60 min!).</p></div>`
},
{
title: "Merke",
html: `<ul>
<li><strong>EKG sofort!</strong> – EKG-Veränderungen bestimmen die Dringlichkeit der Therapie</li>
<li><strong>Calcium</strong> schützt das Herz, senkt K⁺ aber NICHT – weitere Maßnahmen sofort einleiten!</li>
<li><strong>Insulin + Glukose</strong> senkt K⁺ am zuverlässigsten (Wirkdauer ca. 4–6h)</li>
<li>Auslöser identifizieren: <strong>Medikamente</strong> (ACE-I, ARB, MRA, NSAR) pausieren!</li>
<li>Pseudohyperkaliämie ausschließen bei unplausiblem Befund</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> schwere Hyperkaliämie mit EKG-Veränderungen, Dialyseindikation</li>
<li><strong>Überwachungsstation:</strong> K⁺ 6,0–6,5 ohne EKG-Veränderungen</li>
<li><strong>Normalstation:</strong> milde Hyperkaliämie (5,0–6,0) nach Korrektur des Auslösers</li>
</ul>`
}
],
stand: "12/24",
sources: `Clase CM et al. Potassium homeostasis and management of dyskalemia in kidney diseases: conclusions from a KDIGO Controversies Conference. Kidney Int. 2020;97(1):42-61.<br>Rossignol P et al. Emergency management of severe hyperkalemia: Guideline for best practice. Eur J Emerg Med. 2016;23(4):235-240.`
},
{
id: "hyperkalzaemie",
title: "Hyperkalzämie",
category: "Metabolisch",
catKey: "metab",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Hyperkalzämie:</strong> Albumin-korrigiertes Serumcalcium &gt; 2,65 mmol/l (oder ionisiertes Calcium &gt; 1,35 mmol/l)</li>
<li><strong>Schwere Hyperkalzämie / hyperkalzämische Krise:</strong> Ca²⁺ &gt; 3,5 mmol/l oder symptomatisch</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Primärer Hyperparathyreoidismus (pHPT, 50%):</strong> häufigste Ursache ambulant</li>
<li><strong>Malignome (30%):</strong> häufigste Ursache stationär
<ul>
<li>Osteolytische Metastasen (Mamma-Ca, Bronchial-Ca, Multiples Myelom)</li>
<li>PTHrP-Sekretion (Paraneoplastisch)</li>
</ul>
</li>
<li><strong>Sonstige:</strong> Vitamin-D-Intoxikation, Sarkoidose/Granulomatosen, Thiaziddiuretika, Immobilisation, Hyperthyreose, Nebenniereninsuffizienz, Milch-Alkali-Syndrom</li>
</ul>`
},
{
title: "Symptome",
html: `<p>Merkhilfe: <strong>Stones, Bones, Groans, Moans, Thrones, Psychiatric Overtones</strong></p>
<ul>
<li><strong>Renal (Stones/Thrones):</strong> Polyurie, Polydipsie, Nephrolithiasis, Niereninsuffizienz</li>
<li><strong>Skelett (Bones):</strong> Knochenschmerzen, Frakturen</li>
<li><strong>GI (Groans):</strong> Übelkeit, Erbrechen, Obstipation, Pankreatitis</li>
<li><strong>Muskulär (Moans):</strong> Muskelschwäche, Müdigkeit</li>
<li><strong>Neurologisch/Psychiatrisch:</strong> Verwirrtheit, Depression, Psychose, Bewusstseinseintrübung bis Koma</li>
<li><strong>Kardial:</strong> Verkürztes QT, Bradykardie, Arrhythmien</li>
</ul>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li><strong>BGA</strong> (ionisiertes Calcium! E'lyte? pH?)</li>
<li><strong>Labor:</strong> Albumin-korrigiertes Calcium, Phosphat, PTH, NW, BB, AP, 25-OH-Vitamin D, TSH, Gerinnung, Serum-/Urin-Eiweißelektrophorese</li>
<li>12-Kanal-EKG (QTc-Verkürzung?)</li>
<li>Bilanzierung</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Schwere Hyperkalzämie (&gt; 3,5 mmol/l oder symptomatisch)</h3>
<ul>
<li><strong>Volumentherapie:</strong> NaCl 0,9% 200–500 ml/h initial (Dehydratation korrigieren, renale Ca²⁺-Ausscheidung fördern)</li>
<li><strong>Furosemid:</strong> 20–40 mg i.v. erst NACH ausreichender Rehydratation (fördert renale Ca²⁺-Elimination)</li>
<li><strong>Bisphosphonat:</strong> Zoledronsäure 4 mg i.v. über 15 min (Wirkung nach 2–4 Tagen, bei Tumorhyperkalzämie)</li>
<li><strong>Denosumab:</strong> 120 mg s.c. (bei Bisphosphonat-Refraktärität oder Niereninsuffizienz)</li>
<li><strong>Calcitonin:</strong> 4 IE/kg s.c. alle 12h (schnellste Wirkung in 4–6h, aber Tachyphylaxie nach 48h – Bridge bis Bisphosphonat wirkt)</li>
<li><strong>Glukokortikoide:</strong> Prednisolon 40–60 mg/d i.v. (bei Granulomatosen, Lymphom, Vitamin-D-Intoxikation)</li>
<li><strong>Dialyse:</strong> bei Nierenversagen oder lebensbedrohlicher Hyperkalzämie</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Furosemid erst NACH Rehydratation! Ohne Volumenauffüllung verschlechtert Furosemid die Dehydratation!</p></div>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Rehydratation = 1. Maßnahme</strong> (Volumen, Volumen, Volumen!)</li>
<li>Häufigste Ursachen: <strong>pHPT</strong> (ambulant) und <strong>Malignom</strong> (stationär)</li>
<li><strong>PTH</strong> differenziert: PTH↑ = pHPT, PTH↓ = malignombedingt/Vitamin D/Granulomatose</li>
<li>Immer korrigiertes Calcium oder ionisiertes Calcium verwenden!</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> Ca²⁺ &gt; 3,5 mmol/l, Bewusstseinseintrübung, Arrhythmie</li>
<li><strong>Normalstation:</strong> moderate Hyperkalzämie mit Therapiebedarf</li>
</ul>`
}
],
stand: "12/24",
sources: `Minisola S et al. Update on the diagnosis and management of hypercalcaemia. BMJ. 2023;381:e073344.<br>Turner JJO. Hypercalcaemia – presentation and management. Clin Med. 2017;17(3):270-273.`
},
{
id: "hypernatriaemie",
title: "Hypernatriämie",
category: "Metabolisch",
catKey: "metab",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Hypernatriämie:</strong> Serumnatrium &gt; 145 mmol/l</li>
<li><strong>Schwere Hypernatriämie:</strong> Na⁺ &gt; 155 mmol/l</li>
<li>Spiegelt in den meisten Fällen einen <strong>Wasserverlust</strong> wider (relative Natriumkonzentration steigt)</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Wasserverlust</strong> (häufigste Ursache):
<ul>
<li>Unzureichende Flüssigkeitszufuhr (ältere Patienten, Demenz, immobile Patienten, Bewusstseinseintrübung)</li>
<li>Renaler Wasserverlust: Diabetes insipidus (zentral/nephrogen), osmotische Diurese (Hyperglykämie, Mannitol)</li>
<li>Extrarenaler Wasserverlust: Diarrhoe, Erbrechen, Schwitzen, Fieber, Verbrennungen</li>
</ul>
</li>
<li><strong>Natriumzufuhr:</strong> Iatrogen (hypertone NaCl, Natriumbikarbonat), Salzwasseraspiration</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li>Durst (wenn Bewusstsein erhalten)</li>
<li>Trockene Schleimhäute, Exsikkose</li>
<li><strong>Neurologische Symptome:</strong> Verwirrtheit, Lethargie, Reizbarkeit, Hyperreflexie, Krampfanfälle, Koma</li>
<li>ggf. Zeichen der Grunderkrankung</li>
</ul>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li><strong>BGA</strong> (Na⁺, K⁺, Glukose, Osmolalität)</li>
<li><strong>Labor:</strong> BB, E'lyte, NW, Serum-Osmolalität, Urin-Osmolalität, Urin-Natrium</li>
<li>Volumenstatusbeurteilung (klinisch)</li>
</ul>
<div class="callout callout-hinweis"><p><strong>Hinweis:</strong> <strong>Urin-Osmolalität</strong> hilft bei der Differenzierung: &gt; 800 mosm/kg = extrarenaler Wasserverlust; &lt; 300 mosm/kg = Diabetes insipidus; 300–800 = partielle Konzentrationsstörung.</p></div>`
},
{
title: "Therapie",
html: `<h3>Korrekturgeschwindigkeit</h3>
<ul>
<li><strong>Akut (&lt; 48h):</strong> rasche Korrektur möglich (1–2 mmol/l/h)</li>
<li><strong>Chronisch (&gt; 48h oder unklar):</strong> langsame Korrektur! <strong>Max. 8–10 mmol/l/24h</strong> (zu schnelle Korrektur → Hirnödem!)</li>
</ul>
<h3>Therapie</h3>
<ul>
<li><strong>Hypovolämische Hypernatriämie:</strong> Vollelektrolytlösung initial (Volumen stabilisieren), dann freies Wasser (Glukose 5% i.v. oder Wasser oral/per Sonde)</li>
<li><strong>Euvolämische Hypernatriämie</strong> (z.B. Diabetes insipidus): Freies Wasser (Glukose 5% i.v.), bei zentralem DI: Desmopressin</li>
<li><strong>Hypervolämische Hypernatriämie:</strong> Furosemid + Glukose 5% i.v.; ggf. Dialyse</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Bei chronischer Hypernatriämie <strong>nicht schneller als 8–10 mmol/l/24h</strong> korrigieren → Risiko eines <strong>Hirnödems!</strong></p></div>`
},
{
title: "Merke",
html: `<ul>
<li>Hypernatriämie = fast immer <strong>Wasserdefizit</strong></li>
<li>Besonders gefährdet: ältere, demente, immobile Patienten ohne Zugang zu Wasser</li>
<li><strong>Langsame Korrektur</strong> bei chronischer Hypernatriämie (max. 8–10 mmol/l/24h)</li>
<li>Engmaschige Na⁺-Kontrollen (alle 4–6h)</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> Na⁺ &gt; 160 mmol/l, neurologische Symptome, Bewusstseinseintrübung</li>
<li><strong>Normalstation:</strong> milde/moderate Hypernatriämie mit Monitoring</li>
</ul>`
}
],
stand: "12/24",
sources: `Adrogué HJ et al. Hypernatremia. N Engl J Med. 2000;342(20):1493-9.<br>Sterns RH. Disorders of plasma sodium. N Engl J Med. 2015;372(1):55-65.`
},
{
id: "hyperosmolares-hyperglykaemisches-syndrom",
title: "Hyperosmolares Hyperglykämisches Syndrom",
category: "Metabolisch",
catKey: "metab",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Hyperosmolares hyperglykämisches Syndrom (HHS):</strong> Lebensbedrohliche hyperglykämische Entgleisung, typischerweise bei Typ-2-Diabetes, charakterisiert durch:
<ul>
<li>BZ &gt; 600 mg/dl</li>
<li>Serumosmolalität &gt; 320 mosm/kg</li>
<li>Schwere Dehydratation</li>
<li>Keine oder nur milde Ketose (pH &gt; 7,3, Bikarbonat &gt; 18)</li>
</ul>
</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Letalität 10–20% (höher als bei DKA!), v.a. bei älteren Patienten mit Komorbiditäten. HHS und DKA können auch als Mischbild auftreten!</p></div>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Infektionen</strong> (häufigster Auslöser: Pneumonie, HWI, Sepsis)</li>
<li>Akute Erkrankungen (Myokardinfarkt, Schlaganfall)</li>
<li>Medikamente (Steroide, Thiazide)</li>
<li>Non-Compliance mit antidiabetischer Medikation</li>
<li>Erstmanifestation Diabetes mellitus Typ 2</li>
<li>Unzureichende Flüssigkeitszufuhr (ältere Patienten)</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Schwere Dehydratation</strong> (Flüssigkeitsdefizit 8–12 Liter!)</li>
<li><strong>Polyurie, Polydipsie</strong> (initial, dann Oligurie)</li>
<li><strong>Bewusstseinseintrübung</strong> bis Koma (korreliert mit Osmolalität)</li>
<li>Tachykardie, Hypotonie, Schock</li>
<li>ggf. Krampfanfälle</li>
<li>ggf. fokal-neurologische Defizite (Hemiparese!)</li>
<li>Kein Acetongeruch, keine Kussmaul-Atmung (Abgrenzung zur DKA)</li>
</ul>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1–2x venöser Zugang</li>
<li><strong>BZ-Messung</strong></li>
<li><strong>BGA</strong> (BZ, E'lyte, pH, Osmolalität, Laktat)</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte, NW, GOT, GPT, Lipase, CK, Gerinnung, HbA1c, Serumosmolalität, Ketonkörper (Abgrenzung DKA), Blutkulturen</li>
<li>Serumosmolalität berechnen: 2 × Na⁺ + Glukose/18 + BUN/2,8</li>
<li>12-Kanal-EKG</li>
<li>Urin-Status, Rö-Thorax (Infektfokus)</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>1. Aggressive Volumentherapie (Priorität!)</h3>
<ul>
<li><strong>NaCl 0,9%</strong> 1000–1500 ml/h initial (erste 1–2h), dann 250–500 ml/h</li>
<li>Wechsel auf NaCl 0,45% wenn korrigiertes Na⁺ normal/erhöht</li>
<li>Glukose 5% wenn BZ &lt; 300 mg/dl</li>
<li>Typisches Flüssigkeitsdefizit: <strong>8–12 Liter</strong></li>
</ul>
<h3>2. Insulintherapie</h3>
<ul>
<li>Insulin erst beginnen, wenn <strong>Kalium ≥ 3,5 mmol/l</strong></li>
<li><strong>Normalinsulin-Perfusor:</strong> 0,05–0,1 IE/kg/h (niedrigere Dosis als bei DKA, da höhere Insulinsensitivität)</li>
<li>Ziel: BZ-Senkung um max. 50–70 mg/dl/h</li>
<li>Osmolalität nicht schneller als 3–8 mosm/kg/h senken</li>
</ul>
<h3>3. Kaliumsubstitution</h3>
<ul>
<li>Analog zur DKA</li>
</ul>
<h3>4. Thromboseprophylaxe</h3>
<ul>
<li>NMH s.c. (hohes Thromboserisiko durch Dehydratation und Hyperviskosität!)</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Zu rasche Osmolalitätssenkung</strong> kann ein Hirnödem verursachen! Langsame Korrektur anstreben.</p></div>`
},
{
title: "Merke",
html: `<ul>
<li>HHS hat eine <strong>höhere Letalität</strong> als DKA (10–20% vs. 1–5%)</li>
<li><strong>Volumentherapie</strong> ist die wichtigste initiale Maßnahme (Flüssigkeitsdefizit 8–12 L!)</li>
<li>Insulindosis <strong>niedriger</strong> als bei DKA</li>
<li><strong>Langsame Korrektur</strong> der Osmolalität (Hirnödemrisiko!)</li>
<li><strong>Thromboseprophylaxe</strong> nicht vergessen!</li>
<li>Infektfokus suchen und behandeln</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation</strong> (immer bei HHS)</li>
</ul>`
}
],
stand: "12/24",
sources: `Kitabchi AE et al. Hyperglycemic Crises in Adult Patients With Diabetes. Diabetes Care. 2009;32(7):1335-43.<br>Scott AR et al. Management of hyperosmolar hyperglycaemic state in adults with diabetes. JBDS-IP Guideline, 2023.`
},
{
id: "hypertensiver-notfall",
title: "Hypertensiver Notfall",
category: "Kardiologie",
catKey: "kardio",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Hypertensive Krise:</strong> RR syst. &gt; 180 mmHg und/oder diast. &gt; 120 mmHg</li>
<li><strong>Hypertensiver Notfall (Emergency):</strong> Hypertensive Krise MIT akuter Endorganschädigung (Herz, Gehirn, Niere, Aorta, Auge)</li>
<li><strong>Hypertensive Dringlichkeit (Urgency):</strong> Hypertensive Krise OHNE akute Endorganschädigung</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li>Non-Compliance mit antihypertensiver Therapie (häufigste Ursache)</li>
<li>Rebound-Hypertonie (Absetzen von Clonidin, Betablocker)</li>
<li>Renovaskuläre Hypertonie, Nierenarterienstenose</li>
<li>Phäochromozytom</li>
<li>Präeklampsie/Eklampsie</li>
<li>Kokain, Amphetamine</li>
<li>Aortenisthmusstenose</li>
</ul>`
},
{
title: "Symptome",
html: `<h3>Endorganschäden</h3>
<ul>
<li><strong>Zerebral:</strong> Kopfschmerzen, Verwirrtheit, Sehstörungen, Krampfanfall, Schlaganfall, hypertensive Enzephalopathie, intrakranielle Blutung</li>
<li><strong>Kardial:</strong> Akute Herzinsuffizienz / Lungenödem, ACS, Aortendissektion</li>
<li><strong>Renal:</strong> Akute Nierenschädigung, Hämaturie, Proteinurie</li>
<li><strong>Okulär:</strong> Papillenödem, hypertensive Retinopathie</li>
<li><strong>Vaskulär:</strong> Akutes Aortensyndrom</li>
</ul>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter (RR an beiden Armen!)</li>
<li>1–2x venöser Zugang</li>
<li><strong>Labor:</strong> BB, E'lyte, NW, GOT, GPT, LDH, hs-Troponin, BNP, Gerinnung, Urin-Status (Proteinurie?)</li>
<li><strong>BGA</strong></li>
<li><strong>12-Kanal-EKG</strong> (Ischämie? LVH? Arrhythmie?)</li>
<li><strong>Anamnese:</strong> Vorbekannte Hypertonie? Medikamente? Compliance? Symptome der Endorganschädigung?</li>
<li>ggf. cCT (Stroke, Blutung), CT-Angiographie (Dissektion), Rö-Thorax (Stauung), Echokardiographie, Fundoskopie</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Hypertensiver Notfall</h3>
<ul>
<li>Behandlung auf Intensiv-/Überwachungsstation</li>
<li>Ziel: <strong>RR-Senkung um 20–25%</strong> in der ersten Stunde (NICHT normalisieren!), dann schrittweise auf 160/100 mmHg in den nächsten 2–6h</li>
</ul>
<h3>Medikamente (i.v.)</h3>
<div class="table-wrap"><table>
<thead><tr><th>Medikament</th><th>Dosis</th><th>Indikation</th></tr></thead>
<tbody>
<tr><td><strong>Urapidil</strong></td><td>12,5–25 mg i.v. Bolus, dann Perfusor 5–40 mg/h</td><td>Universell einsetzbar, ZNS-Pathologie</td></tr>
<tr><td><strong>Nitroglycerin</strong></td><td>1–10 mg/h Perfusor</td><td>Lungenödem, ACS</td></tr>
<tr><td><strong>Esmolol</strong></td><td>500 µg/kg Bolus, dann 50–300 µg/kg/min</td><td>Aortendissektion, Tachykardie</td></tr>
<tr><td><strong>Clevidipin</strong></td><td>1–32 mg/h Perfusor</td><td>Gut steuerbar, perioperativ</td></tr>
<tr><td><strong>Nitroprussid</strong></td><td>0,3–10 µg/kg/min</td><td>Refraktäre Hypertonie (CAVE: Cyanidtoxizität)</td></tr>
</tbody>
</table></div>
<h3>Hypertensive Dringlichkeit</h3>
<ul>
<li>Orale Therapie möglich: Captopril 25 mg p.o., Amlodipin 5–10 mg p.o., Moxonidin 0,2 mg p.o.</li>
<li>RR-Senkung über 24–48h</li>
<li>Medikamentencompliance evaluieren und Therapie anpassen</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Bei <strong>Schlaganfall</strong> gelten spezielle RR-Zielwerte! Ischämischer Stroke: RR nur senken bei &gt; 220/120 (oder &gt; 185/110 vor Lyse). Bei ICB: Ziel syst. &lt; 140 mmHg.</p></div>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Nifedipin sublingual (Adalat)</strong> ist kontraindiziert → unkontrollierbare RR-Senkung mit Reflextachykardie!</p></div>`
},
{
title: "Merke",
html: `<ul>
<li>Entscheidend ist nicht die RR-Höhe, sondern ob eine <strong>Endorganschädigung</strong> vorliegt</li>
<li><strong>Notfall:</strong> i.v.-Therapie, Intensivstation, RR-Senkung 20–25% in 1h</li>
<li><strong>Dringlichkeit:</strong> orale Therapie, RR-Senkung über 24–48h</li>
<li><strong>Nicht zu rasch senken!</strong> → Ischämiegefahr (Stroke, ACS, AKI)</li>
<li>An Aortendissektion denken bei Thoraxschmerz + Hypertonie</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> hypertensiver Notfall mit Endorganschaden</li>
<li><strong>Überwachungsstation:</strong> hypertensive Dringlichkeit mit Hochrisikoprofil</li>
<li><strong>Ambulant:</strong> hypertensive Dringlichkeit, gute orale RR-Kontrolle, Reevaluation in 24–72h</li>
</ul>`
}
],
stand: "12/24",
sources: `Mancia G et al. 2023 ESH Guidelines for the management of arterial hypertension. J Hypertens. 2023;41(12):1874-2071.<br>van den Born BJH et al. ESC Council on Hypertension position document on the management of hypertensive emergencies. Eur Heart J Cardiovasc Pharmacother. 2019;5(1):37-46.`
},
{
id: "hypoglykaemie",
title: "Hypoglykämie",
category: "Metabolisch",
catKey: "metab",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Hypoglykämie:</strong> BZ &lt; 70 mg/dl (3,9 mmol/l)</li>
<li><strong>Klinisch signifikant:</strong> BZ &lt; 54 mg/dl (3,0 mmol/l)</li>
<li><strong>Schwere Hypoglykämie:</strong> Fremdhilfe zur Behandlung erforderlich</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Diabetesbehandlung</strong> (häufigste Ursache): Insulin-Überdosierung, Sulfonylharnstoffe, Glinide; Mahlzeitenauslassen, ungewohnte körperliche Aktivität, Alkohol</li>
<li><strong>Alkohol</strong> (Hemmung der Glukoneogenese)</li>
<li><strong>Sepsis</strong></li>
<li><strong>Nebenniereninsuffizienz</strong></li>
<li><strong>Leberinsuffizienz</strong></li>
<li><strong>Insulinom</strong></li>
<li><strong>Medikamente:</strong> Betablocker (maskieren Symptome!), Chinin, Pentamidin</li>
<li><strong>Factitious Hypoglykämie</strong> (heimliche Insulininjektion)</li>
</ul>`
},
{
title: "Symptome",
html: `<h3>Autonome (adrenerge) Symptome (BZ &lt; 70)</h3>
<ul>
<li>Schwitzen, Tremor, Palpitationen, Tachykardie, Angst, Hunger</li>
</ul>
<h3>Neuroglykopene Symptome (BZ &lt; 50)</h3>
<ul>
<li>Verwirrtheit, Konzentrationsstörung, Schwindel, Sehstörungen, Sprachstörungen, Paresen (kann Schlaganfall imitieren!), Krampfanfälle, Bewusstlosigkeit, Koma</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Hypoglycemia unawareness:</strong> Bei langjährigem Diabetes und rezidivierenden Hypoglykämien können autonome Warnsymptome fehlen!</p></div>`
},
{
title: "Diagnostik",
html: `<ul>
<li><strong>BZ-Messung</strong> (sofort! Point-of-Care)</li>
<li><strong>Whipple-Trias:</strong> Hypoglykämiesymptome + BZ &lt; 50 mg/dl + Besserung nach Glukosegabe</li>
<li><strong>Labor:</strong> BZ, E'lyte, NW, GOT, GPT, ggf. Insulin, C-Peptid, Cortisol, Sulfonylharnstoff-Spiegel (bei unklarer Hypoglykämie ohne Diabetes)</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Patient wach und schluckfähig</h3>
<ul>
<li><strong>15–20 g schnell resorbierbare Kohlenhydrate</strong> oral (Traubenzucker, Saft, zuckerhaltige Getränke)</li>
<li>BZ-Kontrolle nach 15 min, ggf. wiederholen</li>
<li>Anschließend komplexe Kohlenhydrate (Brot) als Nachlauf</li>
</ul>
<h3>Patient bewusstlos oder schluckunfähig</h3>
<ul>
<li><strong>Glukose 40%:</strong> 40–80 ml (= 16–32 g) i.v. als Bolus</li>
<li>Alternativ: <strong>Glukose 10%</strong> als Infusion</li>
<li>Alternativ (kein i.v.-Zugang): <strong>Glukagon</strong> 1 mg i.m./s.c./i.n.</li>
<li>BZ-Kontrolle alle 15–30 min</li>
</ul>
<h3>Spezielle Situationen</h3>
<ul>
<li><strong>Sulfonylharnstoff-induzierte Hypoglykämie:</strong> Protrahierter Verlauf möglich! Glukoseinfusion (G10%) über Stunden, engmaschige BZ-Kontrollen über 24–72h, stationäre Überwachung!</li>
<li><strong>Alkohol-induzierte Hypoglykämie:</strong> Thiamin 100–300 mg i.v. VOR Glukosegabe (Wernicke-Prophylaxe!)</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Bei Sulfonylharnstoff-Überdosierung: <strong>verlängerte Überwachung</strong> (24–72h), da prolongierte und rezidivierende Hypoglykämien auftreten können!</p></div>`
},
{
title: "Merke",
html: `<ul>
<li><strong>BZ-Messung bei jeder Bewusstseinsstörung!</strong></li>
<li>Hypoglykämie kann einen <strong>Schlaganfall imitieren</strong> → immer BZ vor CT!</li>
<li>Bei Alkoholabhängigkeit: <strong>Thiamin vor Glukose!</strong></li>
<li>Sulfonylharnstoff-Hypoglykämie erfordert <strong>prolongierte Überwachung</strong></li>
<li>Ursache klären und zukünftige Hypoglykämien verhindern (Schulung, Therapieanpassung)</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Stationär:</strong> Sulfonylharnstoff-induzierte Hypoglykämie, rezidivierende Hypoglykämien, unklare Ursache, schwere Hypoglykämie bei alleinlebenden Patienten</li>
<li><strong>Ambulant:</strong> Insulin-induzierte Hypoglykämie nach BZ-Normalisierung und Identifikation des Auslösers, orale Nahrungsaufnahme möglich, nicht alleinlebend oder Betreuung gewährleistet</li>
</ul>`
}
],
stand: "12/24",
sources: `Seaquist ER et al. Hypoglycemia and Diabetes: A Report of a Workgroup of the ADA and the Endocrine Society. Diabetes Care. 2013;36(5):1384-95.<br>Yale JF et al. Hypoglycemia. Can J Diabetes. 2018;42:S104-S108.`
},
{
id: "hypokaliaemie",
title: "Hypokaliämie",
category: "Metabolisch",
catKey: "metab",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Hypokaliämie:</strong> Serumkalium &lt; 3,5 mmol/l</li>
<li><strong>Schwere Hypokaliämie:</strong> K⁺ &lt; 2,5 mmol/l</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Renale Verluste:</strong>
<ul>
<li>Diuretika (Schleifendiuretika, Thiazide) – häufigste Ursache!</li>
<li>Hyperaldosteronismus (primär/sekundär)</li>
<li>Renale tubuläre Azidose</li>
<li>Magnesiummangel (→ renaler Kaliumverlust!)</li>
<li>Medikamente: Amphotericin B, Cisplatin, Aminoglykoside</li>
</ul>
</li>
<li><strong>Gastrointestinale Verluste:</strong> Erbrechen, Diarrhoe, Laxantienabusus, Magensonde, Fisteln</li>
<li><strong>Kaliumshift nach intrazellulär:</strong> Insulin, β₂-Sympathomimetika (Salbutamol!), Alkalose, Refeeding-Syndrom, Hypothermie</li>
<li><strong>Verminderte Zufuhr:</strong> Mangelernährung, Alkoholismus, Anorexia nervosa</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li>ggf. asymptomatisch bei milder Hypokaliämie</li>
<li><strong>Muskulär:</strong> Muskelschwäche, Muskelkrämpfe, Myalgien, Rhabdomyolyse (bei schwerer Hypokaliämie)</li>
<li><strong>Gastrointestinal:</strong> Obstipation, Meteorismus, paralytischer Ileus</li>
<li><strong>Kardial:</strong> Herzrhythmusstörungen (potenziell letal!)</li>
<li><strong>Renal:</strong> Polyurie (nephrogener Diabetes insipidus bei chronischer Hypokaliämie)</li>
</ul>
<h3>EKG-Veränderungen</h3>
<ul>
<li>ST-Senkung</li>
<li>T-Abflachung / T-Inversion</li>
<li><strong>U-Wellen</strong> (pathognomonisch)</li>
<li>QT-Verlängerung</li>
<li>Supraventrikuläre und ventrikuläre Arrhythmien (VES, VT, Torsade de Pointes)</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Hypokaliämie potenziert die Toxizität von <strong>Digitalis</strong> → erhöhtes Arrhythmierisiko bei Digoxin-Therapie!</p></div>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1x venöser Zugang</li>
<li><strong>12-Kanal-EKG</strong> (sofort!)</li>
<li><strong>BGA</strong> (K⁺, pH, Na⁺, Ca²⁺, Mg²⁺)</li>
<li><strong>Labor:</strong> BB, E'lyte (inkl. Mg²⁺!), NW, CK, Gerinnung, ggf. Aldosteron, Renin, Cortisol</li>
<li><strong>Urin-Kalium:</strong> &gt; 20 mmol/l = renaler Verlust; &lt; 20 mmol/l = extrarenaler Verlust</li>
<li>Anamnese: Diuretika? Erbrechen? Diarrhoe? Laxantien? Insulin? Salbutamol?</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Milde Hypokaliämie (3,0–3,5 mmol/l, asymptomatisch)</h3>
<ul>
<li><strong>Orale Substitution:</strong> KCl 40–80 mmol/d p.o. (z.B. Kalinor-Brausetabletten 40 mmol = 1 Tablette 2x/d)</li>
<li>Kaliumreiche Ernährung (Bananen, Trockenobst, Kartoffeln)</li>
</ul>
<h3>Moderate Hypokaliämie (2,5–3,0 mmol/l)</h3>
<ul>
<li>Orale + ggf. i.v.-Substitution</li>
<li><strong>KCl i.v.:</strong> max. 20 mmol/h über peripheren Zugang (max. 40 mmol/l Konzentration peripher), max. 40 mmol/h über ZVK unter Monitoring</li>
</ul>
<h3>Schwere Hypokaliämie (&lt; 2,5 mmol/l oder Arrhythmie)</h3>
<ul>
<li><strong>KCl i.v.:</strong> 20–40 mmol/h über ZVK, EKG-Monitoring!</li>
<li>Engmaschige Kaliumkontrollen (alle 1–2h)</li>
</ul>
<h3>Begleitmaßnahmen</h3>
<ul>
<li><strong>Magnesiummangel korrigieren!</strong> (ohne Magnesiumkorrektur ist die Kaliumsubstitution oft ineffektiv!)</li>
<li>Auslöser identifizieren und behandeln (Diuretika-Dosis anpassen, kaliumsparende Diuretika erwägen)</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Maximale i.v.-Infusionsgeschwindigkeit peripher: 20 mmol/h!</strong> Schnellere Gabe nur über ZVK und unter EKG-Monitoring! Kalium nie unverdünnt oder als Bolus i.v. → Herzstillstand!</p></div>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Immer <strong>Magnesium</strong> mitbestimmen und korrigieren! Hypomagnesiämie verhindert die renale Kaliumretention → Kaliumsubstitution allein ist ineffektiv!</p></div>`
},
{
title: "Merke",
html: `<ul>
<li><strong>EKG sofort!</strong> – U-Wellen und QT-Verlängerung sind Alarmzeichen</li>
<li><strong>Magnesium immer mitkorrigieren!</strong></li>
<li>Kalium nie als Bolus i.v. → letal!</li>
<li>Peripher max. 20 mmol/h, ZVK max. 40 mmol/h</li>
<li>Häufigste Ursache: <strong>Diuretikatherapie</strong></li>
<li>Digoxin-Toxizität wird durch Hypokaliämie verstärkt</li>
<li>Bei Alkalose: Kalium fällt ca. 0,3 mmol/l pro 0,1 pH-Anstieg</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> K⁺ &lt; 2,5 mmol/l, symptomatische Arrhythmien, Digitalis-Toxizität</li>
<li><strong>Überwachungsstation:</strong> K⁺ 2,5–3,0 mmol/l mit EKG-Veränderungen</li>
<li><strong>Normalstation:</strong> moderate Hypokaliämie unter i.v.-Substitution</li>
<li><strong>Ambulant:</strong> milde, asymptomatische Hypokaliämie mit oraler Substitution</li>
</ul>`
}
],
stand: "12/24",
sources: `Kardalas E et al. Hypokalemia: a clinical update. Endocr Connect. 2018;7(4):R135-R146.<br>Unwin RJ et al. Pathophysiology and management of hypokalemia: a clinical perspective. Nat Rev Nephrol. 2011;7(2):75-84.`
},
{
id: "hypokalzaemie",
title: "Hypokalzämie",
category: "Metabolisch",
catKey: "metab",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Hypokalzämie:</strong> Albumin-korrigiertes Serumcalcium &lt; 2,2 mmol/l (oder ionisiertes Calcium &lt; 1,15 mmol/l)</li>
<li><strong>Schwere Hypokalzämie:</strong> ionisiertes Ca²⁺ &lt; 0,9 mmol/l oder symptomatisch</li>
</ul>
<div class="callout callout-hinweis"><p><strong>Hinweis:</strong> Immer <strong>albumin-korrigiertes</strong> oder <strong>ionisiertes Calcium</strong> verwenden! Gesamtcalcium wird durch Albumin beeinflusst (Korrekturformel: Ca²⁺_korr = Ca²⁺_gemessen + 0,8 × (4 − Albumin [g/dl])).</p></div>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Hypoparathyreoidismus:</strong> Z.n. Schilddrüsen-/Nebenschilddrüsen-OP (häufigste Ursache!), autoimmun, infiltrativ</li>
<li><strong>Vitamin-D-Mangel:</strong> Malabsorption, Leberinsuffizienz, Niereninsuffizienz, mangelnde Sonnenexposition</li>
<li><strong>Chronische Niereninsuffizienz</strong> (verminderte 1,25-(OH)₂-Vitamin-D-Synthese)</li>
<li><strong>Hypomagnesiämie</strong> (hemmt PTH-Sekretion und PTH-Wirkung)</li>
<li><strong>Akute Pankreatitis</strong> (Verseifung)</li>
<li><strong>Massive Bluttransfusion</strong> (Citrat bindet Calcium)</li>
<li><strong>Tumorlysesyndrom</strong> (Hyperphosphatämie → Calciumphosphatpräzipitation)</li>
<li><strong>Sepsis</strong></li>
<li><strong>Medikamente:</strong> Bisphosphonate, Denosumab, Calcitonin, Foscarnet, Cinacalcet</li>
<li><strong>Hungry-Bone-Syndrom:</strong> nach Parathyreoidektomie</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Neuromuskuläre Übererregbarkeit:</strong>
<ul>
<li>Parästhesien (perioral, Finger, Zehen)</li>
<li>Muskelkrämpfe, Karpopedalspasmen</li>
<li><strong>Chvostek-Zeichen</strong> (Beklopfen des N. facialis → ipsilaterale Gesichtsmuskeln zucken)</li>
<li><strong>Trousseau-Zeichen</strong> (RR-Manschette &gt; syst. RR für 3 min aufpumpen → Karpopedalspasmen)</li>
<li>Tetanie</li>
</ul>
</li>
<li><strong>Kardial:</strong> QTc-Verlängerung, Herzrhythmusstörungen, Herzinsuffizienz</li>
<li><strong>ZNS:</strong> Krampfanfälle, Verwirrtheit</li>
<li><strong>Laryngospasmus, Bronchospasmus</strong></li>
</ul>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1x venöser Zugang</li>
<li><strong>12-Kanal-EKG</strong> (QTc-Verlängerung?)</li>
<li><strong>BGA</strong> (ionisiertes Ca²⁺! Mg²⁺? pH? K⁺?)</li>
<li><strong>Labor:</strong> Calcium (gesamt + ionisiert), Albumin, Phosphat, Magnesium, NW, <strong>PTH</strong>, 25-OH-Vitamin D, AP</li>
<li>Anamnese: Z.n. Schilddrüsen-/Nebenschilddrüsen-OP? Niereninsuffizienz? Medikamente? Pankreatitis? Transfusionen?</li>
</ul>
<h3>Differentialdiagnostik nach PTH</h3>
<div class="table-wrap"><table>
<thead><tr><th>PTH</th><th>Phosphat</th><th>Diagnose</th></tr></thead>
<tbody>
<tr><td>↓</td><td>↑</td><td>Hypoparathyreoidismus</td></tr>
<tr><td>↑</td><td>↓/n</td><td>Vitamin-D-Mangel, Pseudohypoparathyreoidismus</td></tr>
<tr><td>↑</td><td>↑</td><td>Niereninsuffizienz</td></tr>
</tbody>
</table></div>`
},
{
title: "Therapie",
html: `<h3>Schwere/symptomatische Hypokalzämie – Notfall!</h3>
<ul>
<li><strong>Calciumgluconat 10%:</strong> 10–20 ml (= 2,25–4,5 mmol Ca²⁺) i.v. über 10–20 min unter EKG-Monitoring</li>
<li>Wiederholung bei Bedarf</li>
<li>Dann: <strong>Calciumgluconat-Dauerinfusion:</strong> 60–80 ml Calciumgluconat 10% in 1000 ml NaCl 0,9% über 24h (ca. 0,5–2 mg/kg/h)</li>
<li>Engmaschige Calcium-Kontrollen (alle 4–6h)</li>
</ul>
<h3>Begleitmaßnahmen</h3>
<ul>
<li><strong>Magnesium korrigieren!</strong> (MgSO₄ 2–4 g i.v.) – Hypokalzämie ist bei Magnesiummangel therapierefraktär!</li>
<li><strong>Vitamin D:</strong> Calcitriol 0,25–0,5 µg 2x/d p.o. (bei Vitamin-D-Mangel oder Hypoparathyreoidismus)</li>
<li>Orale Calciumsubstitution: Calciumcarbonat 1000–3000 mg/d p.o. (im Verlauf)</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Calciumgluconat</strong> verwenden, NICHT Calciumchlorid peripher (Gewebsnekrose bei Paravasation!). Calciumchlorid nur über ZVK.</p></div>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Calcium und <strong>Bikarbonat</strong> nicht über denselben Zugang infundieren (Ausfällung!).</p></div>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Bei <strong>Digitalis-Therapie</strong> Calciumgabe sehr vorsichtig und langsam (Verstärkung der Digitalis-Toxizität!).</p></div>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Ionisiertes Calcium</strong> ist der relevante Parameter (nicht Gesamtcalcium allein)</li>
<li>Häufigste Ursache: <strong>Z.n. Schilddrüsen-/Nebenschilddrüsen-OP</strong></li>
<li><strong>Magnesium immer mitkorrigieren!</strong></li>
<li>Calciumgluconat peripher, Calciumchlorid nur ZVK</li>
<li>QTc-Verlängerung → Arrhythmierisiko → EKG-Monitoring</li>
<li>Trousseau- und Chvostek-Zeichen klinisch prüfen</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> schwere/symptomatische Hypokalzämie, Tetanie, Krampfanfälle, Arrhythmie, Laryngospasmus</li>
<li><strong>Normalstation:</strong> moderate Hypokalzämie unter i.v.-Substitution</li>
<li><strong>Ambulant:</strong> milde, asymptomatische Hypokalzämie mit oraler Substitution</li>
</ul>`
}
],
stand: "12/24",
sources: `Fong J et al. Hypocalcemia: Updates in Diagnosis and Management for Primary Care. Can Fam Physician. 2012;58(2):158-62.<br>Cooper MS et al. Diagnosis and management of hypocalcaemia. BMJ. 2008;336(7656):1298-302.`
},
{
id: "hyponatriaemie",
title: "Hyponatriämie",
category: "Metabolisch",
catKey: "metab",
sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Hyponatriämie:</strong> Serumnatrium &lt; 135 mmol/l</li>
<li><strong>Schwere Hyponatriämie:</strong> Na⁺ &lt; 120 mmol/l</li>
</ul>
<h3>Einteilung nach Schwere</h3>
<div class="table-wrap"><table>
<thead><tr><th>Schweregrad</th><th>Na⁺ (mmol/l)</th></tr></thead>
<tbody>
<tr><td>Mild</td><td>130–134</td></tr>
<tr><td>Moderat</td><td>125–129</td></tr>
<tr><td>Schwer</td><td>&lt; 125</td></tr>
</tbody>
</table></div>
<h3>Einteilung nach Zeitverlauf</h3>
<ul>
<li><strong>Akut:</strong> Entwicklung innerhalb &lt; 48h (höheres Risiko für Hirnödem)</li>
<li><strong>Chronisch:</strong> Entwicklung über &gt; 48h oder unklar (höheres Risiko für osmotische Demyelinisierung bei zu rascher Korrektur)</li>
</ul>`
},
{
title: "Ursachen",
html: `<h3>Hypovolämisch (Natrium- und Wasserverlust, Na⁺-Verlust überwiegt)</h3>
<ul>
<li>Diuretika (v.a. Thiazide!)</li>
<li>GI-Verluste (Erbrechen, Diarrhoe)</li>
<li>Nebenniereninsuffizienz (Morbus Addison)</li>
<li>Zerebrale Salzverlust-Syndrome (CSWS)</li>
<li>Renale Salzverluste</li>
</ul>
<h3>Euvolämisch</h3>
<ul>
<li><strong>SIADH</strong> (Syndrom der inadäquaten ADH-Sekretion) – häufigste Ursache der euvolämischen Hyponatriämie!
<ul>
<li>Medikamente: SSRI, Carbamazepin, Oxcarbazepin, Cyclophosphamid, NSAR, Desmopressin</li>
<li>ZNS-Erkrankungen: SAB, SHT, Meningitis, Tumoren</li>
<li>Pulmonale Erkrankungen: Pneumonie, COPD, Tuberkulose</li>
<li>Malignome: kleinzelliges Bronchialkarzinom</li>
<li>Postoperativ, Schmerz, Übelkeit</li>
</ul>
</li>
<li>Hypothyreose (schwer)</li>
<li>Polydipsie</li>
<li>Marathonläufer (Exercise-associated Hyponatremia)</li>
</ul>
<h3>Hypervolämisch</h3>
<ul>
<li>Herzinsuffizienz</li>
<li>Leberzirrhose</li>
<li>Nephrotisches Syndrom</li>
<li>Fortgeschrittene Niereninsuffizienz</li>
</ul>
<div class="callout callout-hinweis"><p><strong>Hinweis:</strong> <strong>Pseudohyponatriämie</strong> bei Hyperproteinämie oder Hyperlipidämie ausschließen (Serumosmolalität normal). <strong>Translokationale Hyponatriämie</strong> bei Hyperglykämie (korrigiertes Na⁺ berechnen).</p></div>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Mild/moderat:</strong> Übelkeit, Kopfschmerzen, Verwirrtheit, Konzentrationsstörung, Gangunsicherheit, Sturzneigung</li>
<li><strong>Schwer:</strong> Erbrechen, Somnolenz bis Koma, Krampfanfälle, Atemstillstand (Hirnödem)</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Die Schwere der Symptome hängt mehr von der <strong>Geschwindigkeit der Entwicklung</strong> als vom absoluten Na⁺-Wert ab. Akute Hyponatriämie ist gefährlicher als chronische!</p></div>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1x venöser Zugang</li>
<li><strong>BGA</strong> (Na⁺, K⁺, Glukose, pH)</li>
<li><strong>Labor:</strong> E'lyte, NW, <strong>Serumosmolalität</strong>, <strong>Urin-Osmolalität</strong>, <strong>Urin-Natrium</strong>, Glukose, TSH, Cortisol, Gerinnung, BB, CRP, Leberwerte, Albumin</li>
</ul>
<h3>Diagnostischer Algorithmus</h3>
<ol>
<li><strong>Serumosmolalität:</strong>
<ul>
<li>&lt; 275 mosm/kg = hypoosmolar (echte Hyponatriämie) → weiter</li>
<li>275–295 = isoton (Pseudohyponatriämie)</li>
<li>&gt; 295 = hyperton (Hyperglykämie, Mannitol)</li>
</ul>
</li>
<li><strong>Volumenstatus</strong> klinisch beurteilen (hypo-/eu-/hypervolämisch)</li>
<li><strong>Urin-Natrium:</strong>
<ul>
<li>&lt; 30 mmol/l = extrarenaler Verlust, Herzinsuffizienz, Zirrhose</li>
<li>&gt; 30 mmol/l = renaler Verlust, SIADH, Nebenniereninsuffizienz, Diuretika</li>
</ul>
</li>
<li><strong>Urin-Osmolalität:</strong>
<ul>
<li>&lt; 100 mosm/kg = Polydipsie, niedrige Solute-Aufnahme</li>
<li>&gt; 100 mosm/kg = ADH-abhängig (SIADH, Volumenmangel, etc.)</li>
</ul>
</li>
</ol>`
},
{
title: "Therapie",
html: `<h3>Schwere Symptome (Krampfanfall, Koma, Atemstillstand) – NOTFALL!</h3>
<ul>
<li><strong>NaCl 3% (hyperton):</strong> 100–150 ml i.v. über 20 min</li>
<li>Wiederholung nach 20 min bei persistierenden Symptomen (max. 3x)</li>
<li>Ziel: <strong>Na⁺-Anstieg um 4–6 mmol/l</strong> in den ersten 1–2h (Symptombesserung)</li>
<li>Dann: Verlangsamung der Korrektur</li>
</ul>
<h3>Korrekturgeschwindigkeit</h3>
<ul>
<li><strong>Akut (&lt; 48h):</strong> rasche Korrektur möglich (bis 1–2 mmol/l/h initial)</li>
<li><strong>Chronisch (&gt; 48h oder unklar):</strong> <strong>max. 8 mmol/l in 24h, max. 18 mmol/l in 48h</strong></li>
<li>Bei Hochrisikopatienten für ODS (Alkoholismus, Mangelernährung, Hypokaliämie, Na⁺ &lt; 105): <strong>max. 6 mmol/l in 24h</strong></li>
</ul>
<h3>Ursachenspezifische Therapie</h3>
<ul>
<li><strong>Hypovolämisch:</strong> NaCl 0,9% i.v. (Volumenauffüllung → ADH-Suppression → Aquarese)</li>
<li><strong>SIADH:</strong> Flüssigkeitsrestriktion (800–1000 ml/d), ggf. NaCl-Tabletten + Furosemid, Tolvaptan in Ausnahmefällen (unter Monitoring!)</li>
<li><strong>Hypervolämisch:</strong> Flüssigkeitsrestriktion, Furosemid, Therapie der Grunderkrankung</li>
<li><strong>Nebenniereninsuffizienz:</strong> Hydrocortison (s. SOP NNR-Insuffizienz)</li>
<li><strong>Medikamente:</strong> Auslöser absetzen</li>
</ul>
<h3>Overcorrection (zu rasche Korrektur)</h3>
<ul>
<li>Risiko: <strong>Osmotische Demyelinisierung (ODS, zentrale pontine Myelinolyse)</strong> → schwere neurologische Schäden!</li>
<li>Bei zu rascher Korrektur: <strong>Desmopressin</strong> 2 µg i.v. alle 8h + Glukose 5% i.v. (Natrium aktiv senken)</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Osmotische Demyelinisierung (ODS)</strong> bei zu rascher Korrektur einer chronischen Hyponatriämie! Max. 8 mmol/l/24h bei chronischer Hyponatriämie! Engmaschige Na⁺-Kontrollen (alle 2–4h)!</p></div>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Nach Volumengabe bei hypovolämischer Hyponatriämie kann es zu einem <strong>raschen Na⁺-Anstieg</strong> kommen (ADH-Suppression → massive Aquarese). Engmaschiges Monitoring!</p></div>`
},
{
title: "Merke",
html: `<ul>
<li>Hyponatriämie ist die <strong>häufigste Elektrolytstörung</strong> im klinischen Alltag</li>
<li><strong>Symptome + Geschwindigkeit</strong> bestimmen die Dringlichkeit der Therapie</li>
<li>Bei schweren Symptomen: <strong>NaCl 3% 100–150 ml i.v. über 20 min</strong></li>
<li><strong>Max. 8 mmol/l/24h</strong> bei chronischer Hyponatriämie (ODS-Prävention!)</li>
<li>Na⁺-Kontrollen alle <strong>2–4h</strong> während aktiver Korrektur</li>
<li><strong>Serumosmolalität, Urin-Osmolalität, Urin-Natrium</strong> = Schlüssel zur Differentialdiagnose</li>
<li>Häufigste Ursachen: Thiazide, SIADH, Herzinsuffizienz</li>
<li>An <strong>Nebenniereninsuffizienz</strong> als behandelbare Ursache denken!</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> schwere/symptomatische Hyponatriämie (Krampfanfälle, Koma), Na⁺ &lt; 120 mmol/l, Therapie mit NaCl 3%</li>
<li><strong>Überwachungsstation:</strong> Na⁺ 120–125 mmol/l, engmaschiges Monitoring der Korrekturgeschwindigkeit</li>
<li><strong>Normalstation:</strong> milde/moderate Hyponatriämie mit identifizierter Ursache</li>
</ul>`
}
],
stand: "12/24",
sources: `Spasovski G et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. Eur J Endocrinol. 2014;170(3):G1-47.<br>Verbalis JG et al. Diagnosis, Evaluation, and Treatment of Hyponatremia: Expert Panel Recommendations. Am J Med. 2013;126(10 Suppl 1):S1-42.<br>Sterns RH. Disorders of plasma sodium. N Engl J Med. 2015;372(1):55-65.`
}
];

if (typeof window.SOP_DATA === "undefined") {
  window.SOP_DATA = [];
}
window.SOP_DATA = window.SOP_DATA.concat(SOP_DATA_2);