// SOP: Akute Divertikulitis
// Kategorie: Gastroenterologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
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
<tr><td>Typ 2b</td><td>Makroabszess (> 1 cm), gedeckte Perforation</td></tr>
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
<li>Alter (> 50 Jahre)</li>
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
<li><strong>Typ 2a/2b:</strong> Stationär, Nahrungskarenz, i.v.-Antibiotikatherapie. Bei Makroabszess (> 3–4 cm): <strong>CT-gestützte Drainage</strong></li>
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
    });
})();
