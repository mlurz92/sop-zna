// SOP: Pneumonie
// Kategorie: Infektiologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "pneumonie",
        title: "Pneumonie",
        category: "Infektiologie",
        catKey: "infekt",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Pneumonie:</strong> Akute Infektion des Lungenparenchyms mit Inflammation und Exsudation in den Alveolarraum</li>
</ul>
<h3>Einteilung</h3>
<ul>
<li><strong>CAP</strong> (Community-acquired Pneumonia): ambulant erworben</li>
<li><strong>HAP</strong> (Hospital-acquired Pneumonia): ≥ 48h nach stationärer Aufnahme</li>
<li><strong>VAP</strong> (Ventilator-associated Pneumonia): ≥ 48h nach Intubation</li>
</ul>`
},
{
title: "Ursachen",
html: `<h3>CAP</h3>
<ul>
<li><strong>Streptococcus pneumoniae</strong> (häufigster Erreger!)</li>
<li>Haemophilus influenzae</li>
<li>Mycoplasma pneumoniae (v.a. jüngere Patienten)</li>
<li>Legionella pneumophila</li>
<li>Chlamydophila pneumoniae</li>
<li>Influenza-/RS-/SARS-CoV-2-Viren</li>
</ul>
<h3>HAP/VAP</h3>
<ul>
<li>Gramnegative Erreger (Pseudomonas, Klebsiella, E. coli, Acinetobacter)</li>
<li>S. aureus (inkl. MRSA)</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Husten</strong> (produktiv, ggf. eitiges Sputum)</li>
<li><strong>Fieber</strong>, Schüttelfrost</li>
<li><strong>Dyspnoe</strong>, Tachypnoe</li>
<li><strong>Pleuritischer Thoraxschmerz</strong></li>
<li>Rasselgeräusche, Bronchialatmen bei Auskultation</li>
<li>ggf. reduzierter AZ, Verwirrtheit (v.a. ältere Patienten)</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Bei <strong>älteren Patienten</strong> kann Fieber fehlen! Leitsymptom ist oft nur <strong>Verwirrtheit/Bewusstseinseintrübung</strong> + Tachypnoe.</p></div>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1x venöser Zugang</li>
<li><strong>BGA</strong> (pO₂? Laktat?)</li>
<li><strong>Labor:</strong> BB, CRP, <strong>PCT</strong>, E'lyte, NW, GOT, GPT, LDH, Gerinnung</li>
<li><strong>Blutkulturen</strong> (2 Paar, bei stationärer Aufnahme)</li>
<li><strong>Rö-Thorax</strong> (2 Ebenen): Infiltrat? Erguss? Abszess?</li>
<li><strong>Urin-Antigentest:</strong> Legionella, Pneumokokken (bei schwerer CAP)</li>
<li><strong>Sputumkultur</strong> (bei schwerer CAP, HAP)</li>
<li><strong>CRB-65-Score</strong> (ambulant) / <strong>CURB-65-Score</strong> (stationär):
<ul>
<li><strong>C</strong>onfusion, <strong>U</strong>rea > 7 mmol/l, <strong>R</strong>espiratory rate ≥ 30/min, <strong>B</strong>lood pressure syst. < 90 / diast. ≤ 60, <strong>65</strong> Jahre</li>
</ul>
</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>CAP ambulant (CRB-65 = 0)</h3>
<ul>
<li><strong>Amoxicillin</strong> 1 g 3x/d p.o. für 5 Tage</li>
<li>Penicillinallergie: Azithromycin 500 mg 1x/d für 3 Tage oder Moxifloxacin 400 mg 1x/d für 5 Tage</li>
</ul>
<h3>CAP stationär (CRB-65 ≥ 1–2)</h3>
<ul>
<li><strong>Ampicillin/Sulbactam</strong> 3 g i.v. 3x/d ± Azithromycin 500 mg i.v./p.o. 1x/d</li>
<li>Alternativ: Ceftriaxon 2 g i.v. 1x/d + Azithromycin</li>
<li>Therapiedauer: 5–7 Tage (Reevaluation nach 48–72h)</li>
</ul>
<h3>Schwere CAP (ICU, CRB-65 ≥ 3)</h3>
<ul>
<li><strong>Piperacillin/Tazobactam</strong> 4,5 g i.v. 3x/d + Azithromycin 500 mg i.v. 1x/d</li>
<li>Alternativ: Meropenem 1 g i.v. 3x/d + Azithromycin</li>
</ul>
<h3>Supportive Therapie</h3>
<ul>
<li>Sauerstoff: Ziel-SpO₂ ≥ 92% (bei COPD: 88–92%)</li>
<li>Volumentherapie bei Dehydratation/Sepsis</li>
<li>Thromboseprophylaxe</li>
<li>Reevaluation nach 48–72h (klinische Besserung? Deeskalation? orale Sequenztherapie?)</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li><strong>CRB-65-Score</strong> bestimmt den Behandlungsort (ambulant/stationär/ICU)</li>
<li><strong>Therapiestart</strong> innerhalb von 4–8h nach Diagnose, bei Sepsis innerhalb von 1h</li>
<li><strong>Restriktive Therapiedauer:</strong> 5 Tage bei unkomplizierter CAP ausreichend</li>
<li>Reevaluation nach 48–72h → Deeskalation, Sequenztherapie, Entlassung</li>
<li>An <strong>Legionellen</strong> denken bei schwerer CAP (Urin-Antigentest!)</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Ambulant:</strong> CRB-65 = 0, keine Hypoxie, orale Aufnahme möglich</li>
<li><strong>Normalstation:</strong> CRB-65 = 1–2</li>
<li><strong>Intensivstation:</strong> CRB-65 ≥ 3, Sepsis, respiratorisches Versagen, Vasopressorbedarf</li>
</ul>`
}
],
        stand: "12/24",
        sources: `Ewig S et al. S3-Leitlinie Behandlung von erwachsenen Patienten mit ambulant erworbener Pneumonie. AWMF-Register-Nr. 020-020, 2021.<br>Metlay JP et al. ATS/IDSA Guideline: Diagnosis and Treatment of Adults with Community-acquired Pneumonia. Am J Respir Crit Care Med. 2019;200(7):e45-e67.`
    });
})();
