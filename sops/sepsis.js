// SOP: Sepsis
// Kategorie: Infektiologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "sepsis",
        title: "Sepsis",
        category: "Infektiologie",
        catKey: "infekt",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Sepsis (Sepsis-3):</strong> Lebensbedrohliche Organdysfunktion infolge einer fehlregulierten Wirtsantwort auf eine Infektion. Operationalisiert durch: Infektion + <strong>SOFA-Score ≥ 2</strong> (oder Anstieg ≥ 2 Punkte)</li>
<li><strong>Septischer Schock:</strong> Sepsis + Vasopressorbedarf (MAP ≥ 65 mmHg) + Laktat > 2 mmol/l trotz adäquater Volumentherapie</li>
</ul>
<h3>qSOFA (Screening, nicht mehr empfohlen als alleiniges Screening-Tool)</h3>
<ul>
<li>Atemfrequenz ≥ 22/min</li>
<li>Systolischer Blutdruck ≤ 100 mmHg</li>
<li>Veränderter Bewusstseinszustand (GCS < 15)</li>
</ul>`
},
{
title: "Ursachen",
html: `<h3>Häufigste Infektfoci</h3>
<ul>
<li><strong>Pneumonie</strong> (häufigster Fokus!)</li>
<li><strong>Intraabdominelle Infektion</strong> (Peritonitis, Cholangitis, Appendizitis)</li>
<li><strong>Harnwegsinfektion/Urosepsis</strong></li>
<li><strong>Haut-/Weichteilinfektion</strong></li>
<li><strong>Katheterinfektionen</strong></li>
<li><strong>Endokarditis</strong></li>
<li><strong>Meningitis</strong></li>
</ul>
<h3>Häufigste Erreger</h3>
<ul>
<li>Gramnegativ: E. coli, Klebsiella, Pseudomonas</li>
<li>Grampositiv: S. aureus, Streptokokken, Enterokokken</li>
<li>Pilze: Candida (bei Immunsuppression, ZVK, Langzeit-AB)</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Fieber</strong> (> 38,3°C) oder <strong>Hypothermie</strong> (< 36°C)</li>
<li><strong>Tachykardie</strong> (> 90/min)</li>
<li><strong>Tachypnoe</strong> (≥ 22/min)</li>
<li><strong>Hypotonie</strong> (RR syst. < 100 mmHg)</li>
<li><strong>Bewusstseinsveränderung</strong> (Verwirrtheit, Unruhe, Somnolenz)</li>
<li><strong>Oligurie</strong></li>
<li>Kaltschweißigkeit, Marmorierung</li>
<li>ggf. Symptome des Infektfokus (Husten, Dysurie, Bauchschmerzen, Hautrötung)</li>
</ul>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li><strong>2x großlumige venöse Zugänge</strong></li>
<li><strong>BGA</strong> (Laktat! pH! pO₂! Glukose! E'lyte!)</li>
<li><strong>Labor:</strong> BB, CRP, <strong>PCT</strong>, E'lyte, NW, GOT, GPT, Bilirubin, LDH, Gerinnung (INR, Fibrinogen, D-Dimere → DIC?), <strong>Laktat</strong>, BZ</li>
<li><strong>Blutkulturen:</strong> mindestens 2 Paar (aerob + anaerob) VOR Antibiotikagabe!</li>
<li><strong>Urin-Status + Urinkultur</strong></li>
<li>12-Kanal-EKG</li>
<li><strong>Fokussuche:</strong> Rö-Thorax, Abdomen-Sonographie, ggf. CT, Wundabstriche, Katheterinspektionen</li>
<li>SOFA-Score Berechnung</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Hour-1-Bundle (Surviving Sepsis Campaign 2021)</h3>
<ol>
<li><strong>Laktat messen</strong> (Relaktat nach 2–4h wenn > 2 mmol/l)</li>
<li><strong>Blutkulturen</strong> VOR Antibiotika</li>
<li><strong>Breitspektrum-Antibiotika</strong> innerhalb von 1h!</li>
<li><strong>Volumentherapie</strong> mit 30 ml/kg balancierter kristalloider Lösung bei Hypotonie oder Laktat ≥ 4 mmol/l (innerhalb von 3h beginnen)</li>
<li><strong>Vasopressoren</strong> bei MAP < 65 mmHg trotz Volumengabe (Noradrenalin 1. Wahl)</li>
</ol>
<h3>Empirische Antibiotikatherapie</h3>
<ul>
<li><strong>Unklarer Fokus:</strong> Piperacillin/Tazobactam 4,5 g i.v. alle 6h (oder Meropenem 1–2 g i.v. alle 8h bei schwerer Sepsis/Schock)</li>
<li>Anpassung nach Fokus, Erregern und Antibiogramm</li>
<li>Tägliche Reevaluation: Deeskalation, Fokussanierung</li>
</ul>
<h3>Fokussanierung</h3>
<ul>
<li>Chirurgische/interventionelle Sanierung innerhalb von 6–12h (Abszessdrainage, ERCP, Cholezystektomie, Katheterentfernung, etc.)</li>
</ul>
<h3>Supportive Therapie</h3>
<ul>
<li><strong>Noradrenalin</strong> 0,1–1 µg/kg/min (Ziel MAP ≥ 65 mmHg)</li>
<li>Vasopressin 0,01–0,04 U/min als Add-on</li>
<li><strong>Hydrocortison</strong> 200 mg/d i.v. (50 mg alle 6h) nur bei refraktärem septischem Schock</li>
<li>Ziel-Laktat-Clearance</li>
<li>Restriktive Transfusion (Hb < 7 g/dl)</li>
<li>BZ-Kontrolle (Ziel < 180 mg/dl)</li>
<li>Thromboseprophylaxe (NMH)</li>
<li>Stressulkusprophylaxe (PPI bei Risikopatienten)</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Sepsis = Notfall!</strong> Jede Stunde Verzögerung der Antibiotikagabe erhöht die Letalität!</li>
<li><strong>Hour-1-Bundle:</strong> Laktat, Blutkulturen, Antibiotika, Volumen, Vasopressoren</li>
<li><strong>Laktat</strong> = wichtigster Verlaufsparameter</li>
<li><strong>Fokussuche und -sanierung</strong> sind essenziell</li>
<li>Noradrenalin frühzeitig (nicht erst nach Litern Volumen!)</li>
<li>Hydrocortison nur bei <strong>refraktärem</strong> septischem Schock</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation</strong> (alle Patienten mit Sepsis, insbesondere septischem Schock)</li>
<li><strong>Überwachungsstation/IMC:</strong> Sepsis ohne Organdysfunktion nach initialer Stabilisierung</li>
</ul>`
}
],
        stand: "12/24",
        sources: `Evans L et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021. Intensive Care Med. 2021;47(11):1181-1247.<br>Singer M et al. The Third International Consensus Definitions for Sepsis and Septic Shock (Sepsis-3). JAMA. 2016;315(8):801-810.`
    });
})();
