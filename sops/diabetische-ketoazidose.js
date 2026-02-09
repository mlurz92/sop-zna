// SOP: Diabetische Ketoazidose
// Kategorie: Metabolisch
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "diabetische-ketoazidose",
        title: "Diabetische Ketoazidose",
        category: "Metabolisch",
        catKey: "metab",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Diabetische Ketoazidose (DKA):</strong> Akute, lebensbedrohliche metabolische Entgleisung bei absolutem oder relativem Insulinmangel, charakterisiert durch:
<ul>
<li><strong>Hyperglykämie</strong> (BZ > 250 mg/dl, selten auch euglykämisch bei SGLT2-Inhibitoren!)</li>
<li><strong>Ketonämie/Ketonurie</strong></li>
<li><strong>Metabolische Azidose</strong> (pH < 7,3, Bikarbonat < 18 mmol/l)</li>
</ul>
</li>
</ul>
<h3>Schweregrade</h3>
<div class="table-wrap"><table>
<thead><tr><th>Parameter</th><th>Mild</th><th>Moderat</th><th>Schwer</th></tr></thead>
<tbody>
<tr><td>pH</td><td>7,25–7,30</td><td>7,00–7,24</td><td>< 7,00</td></tr>
<tr><td>Bikarbonat</td><td>15–18 mmol/l</td><td>10–15 mmol/l</td><td>< 10 mmol/l</td></tr>
<tr><td>Bewusstsein</td><td>Wach</td><td>Somnolent</td><td>Stupor/Koma</td></tr>
</tbody>
</table></div>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Erstmanifestation Diabetes mellitus Typ 1</strong></li>
<li><strong>Insulinpause/-fehler</strong> (Non-Compliance, Insulinpumpenversagen, fehlerhafte Injektion)</li>
<li><strong>Erhöhter Insulinbedarf:</strong> Infektion (häufigster Trigger!), OP, Trauma, Schwangerschaft, Myokardinfarkt, Steroidtherapie</li>
<li><strong>SGLT2-Inhibitoren</strong> (Dapagliflozin, Empagliflozin) → euglykämische DKA!</li>
<li><strong>Alkoholexzess</strong></li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Polyurie, Polydipsie</strong></li>
<li><strong>Dehydratation</strong> (trockene Schleimhäute, stehende Hautfalten, Tachykardie, Hypotonie)</li>
<li><strong>Übelkeit, Erbrechen, abdominelle Schmerzen</strong> (Pseudoperitonitis)</li>
<li><strong>Kussmaul-Atmung</strong> (tiefe, schnelle Atmung als respiratorische Kompensation)</li>
<li><strong>Acetongeruch</strong> (fruchtig/nagellackentfernerähnlich)</li>
<li><strong>Bewusstseinseintrübung</strong> bis Koma</li>
<li><strong>Schwäche, Müdigkeit</strong></li>
</ul>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1–2x venöser Zugang</li>
<li><strong>BZ-Messung</strong></li>
<li><strong>BGA</strong> (pH? BE? Bikarbonat? Laktat? K⁺? Na⁺? Glukose? Anionenlücke?)</li>
<li><strong>Ketone</strong> (Blut-Ketone bevorzugt: β-Hydroxybutyrat > 3 mmol/l; alternativ Urin-Ketone)</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte (K⁺! Na⁺ korrigiert!), NW, Phosphat, GOT, GPT, Lipase, Gerinnung, HbA1c, ggf. Blutkulturen, PCT</li>
<li>12-Kanal-EKG (Hyperkaliämie-/Hypokaliämie-Zeichen?)</li>
<li><strong>Urin-Status</strong> (Ketone, Infektzeichen)</li>
</ul>
<h3>Klinische Untersuchung</h3>
<ul>
<li><strong>Anamnese:</strong> Bekannter Diabetes? Insulintherapie? Compliance? Auslöser (Infektion, Erbrechen, OP)? SGLT2-Inhibitor? Symptombeginn? Flüssigkeitsaufnahme?</li>
<li><strong>Körperliche Untersuchung:</strong> Dehydratation? Kussmaul-Atmung? Acetongeruch? Bewusstseinslage? Infektfokus? Abdomen?</li>
</ul>
<div class="callout callout-hinweis"><p><strong>Hinweis:</strong> <strong>Korrigiertes Natrium</strong> berechnen: Na⁺_korr = Na⁺_gemessen + 1,6 × (Glukose [mg/dl] − 100) / 100. Das Kalium ist initial oft normal/erhöht, fällt aber unter Insulintherapie rasch ab!</p></div>`
},
{
title: "Therapie",
html: `<h3>1. Volumentherapie (Priorität!)</h3>
<ul>
<li><strong>NaCl 0,9%</strong> 1000 ml/h in der 1. Stunde, dann 250–500 ml/h (Anpassung an Klinik)</li>
<li>Typisches Flüssigkeitsdefizit: 5–7 Liter</li>
<li>Wechsel auf NaCl 0,45% bei korrigiertem Na⁺ > 145 mmol/l</li>
<li>Glukose 5–10% hinzufügen wenn BZ < 250 mg/dl (um Insulintherapie fortsetzen zu können)</li>
</ul>
<h3>2. Insulintherapie</h3>
<ul>
<li><strong>Normalinsulin-Perfusor:</strong> 0,1 IE/kg/h i.v. (ca. 5–7 IE/h)</li>
<li>Kein initialer Bolus empfohlen</li>
<li>Ziel: BZ-Senkung um 50–70 mg/dl/h</li>
<li>BZ alle 1–2h kontrollieren</li>
<li>Insulinperfusor fortsetzen bis: pH > 7,3, Bikarbonat > 18 mmol/l, Anionenlücke normalisiert, Ketone rückläufig</li>
<li>Umstellung auf s.c.-Insulin erst bei Besserung + orale Nahrungsaufnahme (30 min Überlappung!)</li>
</ul>
<h3>3. Kaliumsubstitution</h3>
<ul>
<li><strong>K⁺ > 5,5 mmol/l:</strong> Kein Kalium, Kontrolle alle 2h</li>
<li><strong>K⁺ 3,5–5,5 mmol/l:</strong> 20–30 mmol KCl pro Liter Infusion</li>
<li><strong>K⁺ < 3,5 mmol/l:</strong> Aggressiver Kaliumersatz, Insulin pausieren bis K⁺ > 3,5 mmol/l!</li>
</ul>
<h3>4. Bikarbonat</h3>
<ul>
<li>Nur bei pH < 6,9: Natriumbikarbonat 100 mmol in 400 ml NaCl 0,45% über 2h</li>
<li>Routinemäßig NICHT empfohlen (verschlechtert ggf. intrazelluläre Azidose)</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Kalium</strong> engmaschig kontrollieren! Unter Insulintherapie kann K⁺ rasch abfallen → lebensbedrohliche Hypokaliämie! Bei K⁺ < 3,5: Insulin pausieren!</p></div>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Hirnödem</strong> bei zu rascher BZ-Senkung (v.a. bei Kindern) – BZ nicht schneller als 50–70 mg/dl/h senken!</p></div>`
},
{
title: "Merke",
html: `<ul>
<li>Reihenfolge der Therapie: <strong>Volumen → Kalium → Insulin</strong> (erst Volumen, dann Kalium prüfen, dann Insulin!)</li>
<li><strong>Kalium</strong> ist der kritischste Parameter – engmaschig kontrollieren!</li>
<li>An <strong>euglykämische DKA</strong> bei SGLT2-Inhibitoren denken (BZ kann < 250 mg/dl sein!)</li>
<li><strong>Anionenlücke</strong> als Verlaufsparameter (nicht nur BZ!) – Insulinperfusor erst beenden, wenn Anionenlücke normalisiert</li>
<li><strong>Infektfokus</strong> suchen (häufigster Auslöser!)</li>
<li>Bikarbonatgabe nur bei pH < 6,9</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> schwere DKA (pH < 7,0), Bewusstseinseintrübung, hämodynamische Instabilität, K⁺ < 3,5 oder > 6,0</li>
<li><strong>Überwachungsstation/IMC:</strong> moderate DKA</li>
<li><strong>Normalstation:</strong> milde DKA nach initialer Stabilisierung</li>
</ul>`
}
],
        stand: "12/24",
        sources: `Kitabchi AE et al. Hyperglycemic Crises in Adult Patients With Diabetes. Diabetes Care. 2009;32(7):1335-43.<br>Dhatariya KK et al. The Management of Diabetic Ketoacidosis in Adults. Joint British Diabetes Societies Inpatient Care Group, 2023.<br>S3-Leitlinie Therapie des Typ-1-Diabetes. DDG/DGIM, AWMF-Register-Nr. 057-013, 2023.`
    });
})();
