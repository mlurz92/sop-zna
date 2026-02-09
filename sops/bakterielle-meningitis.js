// SOP: Bakterielle Meningitis
// Kategorie: Infektiologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
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
<tr><td>Ältere (> 50J), Immunsupprimierte, Alkoholabhängige</td><td>Streptococcus pneumoniae, Listeria monocytogenes, gramnegative Enterobakterien</td></tr>
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
<li><strong>Vor LP:</strong> cCT nur bei: GCS < 10, fokal-neurologischem Defizit, neu aufgetretenem Krampfanfall, schwerer Immunsuppression, Stauungspapille → CT darf Antibiotikagabe NICHT verzögern!</li>
<li><strong>Liquor:</strong> Zellzahl + Differenzierung, Eiweiß, Glukose (+ Serumglukose simultan), Laktat, Gramfärbung, Kultur, ggf. PCR (Meningokokken, Pneumokokken, Listerien, HSV, Enteroviren)</li>
</ul>
<h3>Typischer Liquorbefund bei bakterieller Meningitis</h3>
<div class="table-wrap"><table>
<thead><tr><th>Parameter</th><th>Befund</th></tr></thead>
<tbody>
<tr><td>Zellzahl</td><td>↑↑↑ (> 1000/µl, überwiegend Granulozyten)</td></tr>
<tr><td>Eiweiß</td><td>↑↑ (> 100 mg/dl)</td></tr>
<tr><td>Glukose</td><td>↓ (Liquor/Serum-Quotient < 0,4)</td></tr>
<tr><td>Laktat</td><td>↑↑ (> 3,5 mmol/l)</td></tr>
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
<tr><td>Erwachsene (< 50J, immunkompetent)</td><td><strong>Ceftriaxon</strong> 2 g i.v. alle 12h</td></tr>
<tr><td>Erwachsene (> 50J, Alkohol, Immunsuppression)</td><td><strong>Ceftriaxon</strong> 2 g i.v. alle 12h + <strong>Ampicillin</strong> 2 g i.v. alle 4h (Listerienlücke!)</td></tr>
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
<li><strong>Postexpositionsprophylaxe</strong> bei Meningokokken für enge Kontaktpersonen: <strong>Rifampicin</strong> 600 mg 2x/d p.o. für 2 Tage atau <strong>Ciprofloxacin</strong> 500 mg p.o. Einmaldosis atau <strong>Ceftriaxon</strong> 250 mg i.m. Einmaldosis</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Time is brain!</strong> Empirische Antibiotikatherapie sofort bei klinischem Verdacht – <strong>KEINE Verzögerung durch CT oder LP!</strong></li>
<li>Reihenfolge: <strong>Blutkulturen → Dexamethason → Antibiotikum → CT → LP</strong></li>
<li>Dexamethason reduziert Komplikationen bei <strong>Pneumokokkenmeningitis</strong> – erste Dosis gleichzeitig mit dem Antibiotikum</li>
<li>Bei Alter > 50, Immunsuppression, Schwangerschaft: <strong>Ampicillin</strong> zusätzlich (Listerienabdeckung!)</li>
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
    });
})();
