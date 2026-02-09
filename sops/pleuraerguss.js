// SOP: Pleuraerguss
// Kategorie: Pneumologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
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
<li>Protein Pleura/Serum > 0,5</li>
<li>LDH Pleura/Serum > 0,6</li>
<li>LDH Pleura > 2/3 des oberen Serum-Normwerts</li>
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
<li><strong>Parapneumonisch/Empyem:</strong> Antibiotika, Thoraxdrainage (bei komplizierten parapneumonischen Ergüssen: pH < 7,2, Glukose < 60 mg/dl, pos. Gramfärbung/Kultur, Eiter → Drainage!)</li>
<li><strong>Maligner Erguss:</strong> Therapeutische Punktion, ggf. Talkpleurodese, Dauerdrainage (Pleurakatheter), Onkologische Therapie</li>
<li><strong>Hämatothorax:</strong> Thoraxdrainage, ggf. operative Versorgung</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Bei <strong>Empyem</strong> (Eiter, pH < 7,2, positiver Gramfärbung) → <strong>sofortige Thoraxdrainage!</strong> Antibiotika allein sind nicht ausreichend.</p></div>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Sonographie</strong> ist die beste Methode zur Ergussdetektion und Punktionsplanung</li>
<li><strong>Light-Kriterien</strong> zur Differenzierung Transsudat vs. Exsudat</li>
<li>Häufigste Ursache des Transsudats: <strong>Herzinsuffizienz</strong></li>
<li>Häufigste Ursache des Exsudats: <strong>Parapneumonischer Erguss</strong></li>
<li><strong>pH < 7,2</strong> im Punktat → Drainage!</li>
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
    });
})();
