// SOP: Tumorlysesyndrom
// Kategorie: Hämatologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "tumorlysesyndrom",
        title: "Tumorlysesyndrom",
        category: "Hämatologie",
        catKey: "haem",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Tumorlysesyndrom (TLS):</strong> Onkologischer Notfall durch massiven Zellzerfall (spontan oder therapieinduziert) mit Freisetzung intrazellulärer Bestandteile, die zu metabolischen Entgleisungen und Organversagen führen</li>
</ul>
<h3>Cairo-Bishop-Kriterien (Labor-TLS: ≥ 2 von 4)</h3>
<div class="table-wrap"><table>
<thead><tr><th>Parameter</th><th>Laborveränderung</th></tr></thead>
<tbody>
<tr><td>Harnsäure</td><td>≥ 8 mg/dl oder +25%</td></tr>
<tr><td>Kalium</td><td>≥ 6 mmol/l oder +25%</td></tr>
<tr><td>Phosphat</td><td>≥ 4,5 mg/dl oder +25%</td></tr>
<tr><td>Calcium</td><td>≤ 7 mg/dl oder −25%</td></tr>
</tbody>
</table></div>
<p><strong>Klinisches TLS:</strong> Labor-TLS + Organmanifestation (AKI, Herzrhythmusstörungen, Krampfanfälle, Tod)</p>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Hochproliferative Malignome</strong> mit hoher Tumorlast:
<ul>
<li>Akute lymphatische Leukämie (ALL) – höchstes Risiko!</li>
<li>Burkitt-Lymphom</li>
<li>Akute myeloische Leukämie (AML) bei hoher Leukozytenzahl</li>
<li>Aggressives NHL</li>
</ul>
</li>
<li>Selten bei soliden Tumoren</li>
<li>Auslöser: Chemotherapie, Bestrahlung, Steroide, Immuntherapie, spontan</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Hyperkaliämie:</strong> Muskelschwäche, Arrhythmien, Herzstillstand</li>
<li><strong>Hyperphosphatämie:</strong> sekundäre Hypokalzämie → Tetanie, Krampfanfälle, Arrhythmien</li>
<li><strong>Hyperurikämie:</strong> AKI durch Uratkristallnephropathie</li>
<li><strong>Hypokalzämie:</strong> Krämpfe, QTc-Verlängerung</li>
<li><strong>AKI</strong> (Oligurie/Anurie, Kreatinin ↑)</li>
<li>Übelkeit, Erbrechen, Diarrhoe</li>
</ul>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1–2x venöser Zugang</li>
<li><strong>12-Kanal-EKG</strong> (Hyperkaliämie-Zeichen? QTc?)</li>
<li><strong>BGA</strong> (K⁺! Ca²⁺! pH! Laktat!)</li>
<li><strong>Labor:</strong> BB, <strong>K⁺, Phosphat, Ca²⁺ (ionisiert), Harnsäure</strong>, NW, LDH, GOT, GPT, Gerinnung</li>
<li>Urin-Analyse (Uratkristalle? Urin-pH?)</li>
<li>Monitoring alle 4–6h (E'lyte, NW, Harnsäure)</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Prävention (bei Risikoentitäten VOR Therapiebeginn!)</h3>
<ul>
<li><strong>Aggressive Hydrierung:</strong> 2,5–3 l/m²/d i.v. (Ziel: Urinmenge 80–100 ml/m²/h)</li>
<li><strong>Rasburicase</strong> 0,2 mg/kg i.v. Einmaldosis (bei hohem Risiko) → enzymatischer Harnsäureabbau, schnelle Wirkung</li>
<li><strong>Allopurinol</strong> 300–600 mg/d p.o. (bei niedrigem/mittlerem Risiko) → hemmt Harnsäurebildung (nicht abbauend!)</li>
<li>Keine routinemäßige Urinalkalisierung mehr empfohlen</li>
</ul>
<h3>Therapie des manifesten TLS</h3>
<ul>
<li><strong>Rasburicase</strong> 0,2 mg/kg i.v. (bei erhöhter Harnsäure, sofortige Wirkung)</li>
<li><strong>Hyperkaliämie behandeln</strong> (s. SOP Hyperkaliämie): Calciumgluconat, Insulin/Glukose, Salbutamol, ggf. Dialyse</li>
<li><strong>Hyperphosphatämie:</strong> Phosphatbinder (Sevelamer, Calciumacetat), Hydrierung, Dialyse</li>
<li><strong>Hypokalzämie:</strong> Calciumsubstitution nur bei symptomatischer Hypokalzämie (CAVE: Calciumphosphat-Präzipitation!)</li>
<li><strong>AKI/Dialyse:</strong> Indikation zur Hämodialyse bei refraktärer Hyperkaliämie, Anurie, Volumenüberladung, therapierefraktärer Elektrolytentgleisung</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Rasburicase</strong> ist kontraindiziert bei <strong>G6PD-Mangel</strong> (Hämolyserisiko!) → vor Gabe fragen! Laborphänomen: Rasburicase baut Harnsäure auch im Probenröhrchen ab → Probe sofort auf Eis!</p></div>`
},
{
title: "Merke",
html: `<ul>
<li>TLS ist ein <strong>onkologischer Notfall</strong> – Prävention ist entscheidend!</li>
<li><strong>Aggressive Hydrierung</strong> ist die wichtigste Maßnahme</li>
<li><strong>Rasburicase</strong> bei hohem Risiko und erhöhter Harnsäure (CAVE: G6PD-Mangel!)</li>
<li>Monitoring alle <strong>4–6h</strong> (K⁺, Ca²⁺, PO₄, Harnsäure, Kreatinin)</li>
<li>Dialyse frühzeitig erwägen bei AKI/refraktärer Elektrolytentgleisung</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> manifestes klinisches TLS, Hyperkaliämie mit EKG-Veränderungen, AKI, Dialysebedarf</li>
<li><strong>Überwachungsstation:</strong> hohes Risiko für TLS, engmaschiges Monitoring</li>
</ul>`
}
],
        stand: "12/24",
        sources: `Cairo MS et al. Recommendations for the evaluation of risk and prophylaxis of tumour lysis syndrome (TLS) in adults and children with malignant diseases: an expert TLS panel consensus. Br J Haematol. 2010;149(4):578-86.<br>Howard SC et al. The Tumor Lysis Syndrome. N Engl J Med. 2011;364(19):1844-54.`
    });
})();
