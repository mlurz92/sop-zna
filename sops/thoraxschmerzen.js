// SOP: Thoraxschmerzen
// Kategorie: Leitsymptom
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
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
    });
})();
