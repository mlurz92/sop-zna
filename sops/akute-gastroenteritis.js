// SOP: Akute Gastroenteritis
// Kategorie: Gastroenterologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
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
<li><strong>Stuhldiagnostik</strong> (indiziert bei: blutige Diarrhoe, schwerer Verlauf, Immunsuppression, Reiserückkehrer, V.a. C. difficile, nosokomiale Diarrhoe, Dauer > 7 Tage): Stuhlkultur, C. difficile-Toxin (GDH + Toxin-ELISA/PCR), ggf. Parasitologie</li>
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
    });
})();
