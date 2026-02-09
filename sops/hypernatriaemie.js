// SOP: Hypernatriämie
// Kategorie: Metabolisch
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "hypernatriaemie",
        title: "Hypernatriämie",
        category: "Metabolisch",
        catKey: "metab",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Hypernatriämie:</strong> Serumnatrium > 145 mmol/l</li>
<li><strong>Schwere Hypernatriämie:</strong> Na⁺ > 155 mmol/l</li>
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
<div class="callout callout-hinweis"><p><strong>Hinweis:</strong> <strong>Urin-Osmolalität</strong> hilft bei der Differenzierung: > 800 mosm/kg = extrarenaler Wasserverlust; < 300 mosm/kg = Diabetes insipidus; 300–800 = partielle Konzentrationsstörung.</p></div>`
},
{
title: "Therapie",
html: `<h3>Korrekturgeschwindigkeit</h3>
<ul>
<li><strong>Akut (< 48h):</strong> rasche Korrektur möglich (1–2 mmol/l/h)</li>
<li><strong>Chronisch (> 48h oder unklar):</strong> langsame Korrektur! <strong>Max. 8–10 mmol/l/24h</strong> (zu schnelle Korrektur → Hirnödem!)</li>
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
<li><strong>Intensivstation:</strong> Na⁺ > 160 mmol/l, neurologische Symptome, Bewusstseinseintrübung</li>
<li><strong>Normalstation:</strong> milde/moderate Hypernatriämie mit Monitoring</li>
</ul>`
}
],
        stand: "12/24",
        sources: `Adrogué HJ et al. Hypernatremia. N Engl J Med. 2000;342(20):1493-9.<br>Sterns RH. Disorders of plasma sodium. N Engl J Med. 2015;372(1):55-65.`
    });
})();
