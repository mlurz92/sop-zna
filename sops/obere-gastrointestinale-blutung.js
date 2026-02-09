// SOP: Obere Gastrointestinale Blutung
// Kategorie: Gastroenterologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "obere-gastrointestinale-blutung",
        title: "Obere Gastrointestinale Blutung",
        category: "Gastroenterologie",
        catKey: "gi",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Obere GI-Blutung:</strong> Blutung aus dem Gastrointestinaltrakt proximal des Treitz-Bandes (Ösophagus, Magen, Duodenum)</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Ulcus ventriculi/duodeni</strong> (35–50%, häufigste Ursache)</li>
<li><strong>Ösophagus-/Fundusvarizen</strong> (10–20%, bei Leberzirrhose)</li>
<li><strong>Erosive Gastritis/Duodenitis</strong> (NSAR, Stress, Alkohol)</li>
<li><strong>Mallory-Weiss-Syndrom</strong> (Schleimhautriss am ösophagogastralen Übergang durch Erbrechen)</li>
<li><strong>Angiodysplasien</strong></li>
<li><strong>Malignome</strong> (Magen-Ca, Ösophagus-Ca)</li>
<li><strong>Dieulafoy-Läsion</strong></li>
<li><strong>Aorto-enterale Fistel</strong> (bei Z.n. Aorten-OP → Sentinel-Blutung → massive Blutung!)</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Hämatemesis</strong> (Bluterbrechen: frischrot oder kaffeesatzartig)</li>
<li><strong>Meläna</strong> (Teerstuhl: schwarz, glänzend, übelriechend) – ab ca. 100 ml Blut im oberen GI-Trakt</li>
<li>ggf. <strong>Hämatochezie</strong> (frischrote rektale Blutung bei massiver oberer GI-Blutung)</li>
<li><strong>Hypovolämie-/Schockzeichen:</strong> Tachykardie, Hypotonie, Blässe, Kaltschweißigkeit, Bewusstseinseintrübung</li>
<li>ggf. Bauchschmerzen (Ulcus)</li>
</ul>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li><strong>2x großlumige venöse Zugänge</strong></li>
<li><strong>BGA</strong> (Hb! Laktat!)</li>
<li><strong>Labor:</strong> BB, Gerinnung (INR, aPTT, Fibrinogen), <strong>Kreuzblut + Blutgruppe</strong>, E'lyte, NW, GOT, GPT, Albumin</li>
<li>12-Kanal-EKG</li>
</ul>
<h3>Klinische Untersuchung</h3>
<ul>
<li><strong>Anamnese:</strong> Hämatemesis? Meläna? Stuhlfarbe? Medikamente (NSAR, Antikoagulantien, ASS)? Alkohol? Bekannte Leberzirrhose/Varizen? Vorherige GI-Blutung? Z.n. Aorten-OP?</li>
<li><strong>Körperliche Untersuchung:</strong> Schockzeichen? Abdomen? DRU (Teerstuhl, Blut)? Leberzirrhose-Stigmata? Magensonde (Blut, Kaffeesatz)?</li>
</ul>
<h3>Risikostratifizierung</h3>
<ul>
<li><strong>Glasgow-Blatchford-Score (GBS):</strong> Identifikation von Niedrigrisiko-Patienten (GBS = 0–1: ambulante Behandlung möglich)</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Stabilisierung</h3>
<ul>
<li>ABCDE-Schema, Schockbehandlung</li>
<li><strong>Volumentherapie:</strong> Vollelektrolytlösung, ggf. balancierte kristalloide Lösung</li>
<li><strong>Transfusion:</strong> EK bei Hb < 7 g/dl (restriktiv!), bei aktiver Blutung und Schock sofort</li>
<li>FFP, Thrombozytenkonzentrate, Fibrinogen nach Bedarf bei Koagulopathie</li>
<li><strong>Antikoagulantien pausieren/antagonisieren</strong> (Vitamin K bei Marcumar, Idarucizumab bei Dabigatran, Andexanet alfa bei Xa-Inhibitoren, PPSB bei Notfall)</li>
</ul>
<h3>Medikamentöse Therapie</h3>
<ul>
<li><strong>PPI hochdosiert:</strong> Esomeprazol/Pantoprazol 80 mg i.v. Bolus, dann 8 mg/h Perfusor (vor und nach Endoskopie)</li>
<li><strong>Erythromycin</strong> 250 mg i.v. 30–120 min vor Endoskopie (prokinetisch, verbessert Sichtverhältnisse)</li>
</ul>
<h3>Varizenblutung (zusätzlich)</h3>
<ul>
<li><strong>Terlipressin</strong> 1–2 mg i.v. Bolus, dann 1 mg i.v. alle 4–6h (oder Octreotid/Somatostatin)</li>
<li><strong>Antibiotika:</strong> Ceftriaxon 2 g i.v. 1x/d (Infektionsprophylaxe bei Leberzirrhose)</li>
<li>Kein PPI bei reiner Varizenblutung (kein Benefit)</li>
</ul>
<h3>Endoskopie</h3>
<ul>
<li><strong>ÖGD innerhalb von 24h</strong> (bei allen Patienten mit oberer GI-Blutung)</li>
<li><strong>ÖGD innerhalb von 12h</strong> bei Hochrisikopatienten (hämodynamische Instabilität, Hämatemesis, Varizenblutung)</li>
<li>Endoskopische Hämostase: Clipping, Injektion (Adrenalin), Thermokoagulation, Gummibandligatur (Varizen)</li>
</ul>
<h3>Bei refraktärer Blutung</h3>
<ul>
<li>Interventionelle Angiographie + Embolisation</li>
<li>Sengstaken-Blakemore-Sonde (Bridging bei Varizenblutung, max. 24h)</li>
<li>TIPS (bei refraktärer Varizenblutung)</li>
<li>Chirurgie (Ultima ratio)</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li><strong>2 großlumige Zugänge + Kreuzblut</strong> sofort!</li>
<li><strong>Restriktive Transfusionsstrategie</strong> (Hb < 7), bei Varizenblutung besonders streng (Hb-Ziel 7–8 g/dl)</li>
<li><strong>PPI-Bolus + Perfusor</strong> bei nicht-variköser Blutung</li>
<li><strong>Terlipressin + Ceftriaxon</strong> bei V.a. Varizenblutung</li>
<li><strong>Erythromycin</strong> vor ÖGD (Magen leer machen)</li>
<li>An <strong>aorto-enterale Fistel</strong> denken bei Z.n. Aorten-OP!</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> hämodynamische Instabilität, Massivtransfusion, Varizenblutung</li>
<li><strong>Überwachungsstation:</strong> stabile Patienten nach Endoskopie mit Hochrisiko-Stigmata</li>
<li><strong>Ambulant:</strong> GBS 0–1, stabil, keine Endoskopie-Indikation in < 24h, gesicherte ambulante ÖGD</li>
</ul>`
}
],
        stand: "12/24",
        sources: `Laine L et al. ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding. Am J Gastroenterol. 2021;116(5):899-917.<br>de Franchis R et al. Baveno VII – Renewing consensus in portal hypertension. J Hepatol. 2022;76(4):959-974.`
    });
})();
