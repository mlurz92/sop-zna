// SOP: Akute Alkoholintoxikation
// Kategorie: Toxikologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "akute-alkoholintoxikation",
        title: "Akute Alkoholintoxikation",
        category: "Toxikologie",
        catKey: "tox",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Akute Alkoholintoxikation:</strong> Symptomkomplex infolge akuter Einnahme toxischer Mengen von Ethanol mit dosisabhängiger ZNS-Depression bis hin zum Koma und Atemstillstand</li>
</ul>
<div class="callout callout-hinweis"><p><strong>Hinweis:</strong> Der Schweregrad korreliert nicht immer mit der Blutalkoholkonzentration (BAK), da Gewöhnungseffekte eine Rolle spielen. Klinische Beurteilung ist entscheidend!</p></div>`
},
{
title: "Ursachen",
html: `<ul>
<li>Übermäßiger Alkoholkonsum (akzidentell oder suizidal)</li>
<li>Besondere Risikogruppen: Jugendliche (Komasaufen), Alkoholabhängige, psychiatrische Patienten</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Immer an <strong>Mischintoxikationen</strong> (Medikamente, Drogen) und begleitende Verletzungen (SHT, Wirbelsäule) denken!</p></div>`
},
{
title: "Symptome",
html: `<div class="table-wrap"><table>
<thead><tr><th>BAK (‰)</th><th>Stadium</th><th>Symptome</th></tr></thead>
<tbody>
<tr><td>0,5–1,5</td><td>Exzitation</td><td>Euphorie, Enthemmung, Dysarthrie, Ataxie, Nystagmus</td></tr>
<tr><td>1,5–2,5</td><td>Hypnose</td><td>Zunehmende Bewusstseinseintrübung, Koordinationsstörungen, Emesis</td></tr>
<tr><td>2,5–3,5</td><td>Narkose</td><td>Somnolenz bis Sopor, Hypothermie, Hyporeflexie</td></tr>
<tr><td>> 3,5</td><td>Asphyxie</td><td>Koma, Atemdepression, Kreislaufversagen, potenziell letal</td></tr>
</tbody>
</table></div>
<ul>
<li><strong>Begleitende Komplikationen:</strong> Aspiration, Hypothermie, Hypoglykämie, Elektrolytstörungen (Hypokaliämie, Hypomagnesämie), Rhabdomyolyse, Krampfanfälle, metabolische Azidose</li>
</ul>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur)</li>
<li>1x venöser Zugang</li>
<li><strong>BGA</strong> (pH? Glukose? Laktat? E'lyte? Osmolalität?)</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte (inkl. Mg²⁺, Phosphat), NW, GOT, GPT, γ-GT, Lipase, CK, Gerinnung, Ethanol-Spiegel</li>
<li><strong>BZ-Messung</strong> (Hypoglykämie?)</li>
</ul>
<h3>Klinische Untersuchung</h3>
<ul>
<li><strong>Anamnese</strong> (Fremdanamnese!): Was? Wieviel? Wann? Begleitsubstanzen? Medikamente? Suizidabsicht? Vorerkrankungen? Alkoholabhängigkeit?</li>
<li><strong>Körperliche Untersuchung:</strong> GCS? Pupillen? Foetor? Verletzungszeichen? Kopfplatzwunde/SHT? Temperatur? Aspiration? Abdomen?</li>
</ul>
<h3>Erweiterte Diagnostik (ggf.)</h3>
<ul>
<li><strong>cCT nativ:</strong> bei V.a. SHT, unklarer Vigilanzminderung, fokal-neurologischem Defizit, inadäquatem Aufklaren</li>
<li><strong>Urin-Drogenscreening:</strong> bei V.a. Mischintoxikation</li>
<li>Berechnung der <strong>osmotischen Lücke</strong> (Hinweis auf toxische Alkohole wie Methanol/Ethylenglykol bei erhöhter Lücke)</li>
<li><strong>12-Kanal-EKG:</strong> QTc-Verlängerung? Arrhythmie?</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Allgemeinmaßnahmen</h3>
<ul>
<li>Stabilisierung gemäß ABCDE-Schema</li>
<li><strong>Atemwegssicherung:</strong> Stabile Seitenlage bei Bewusstlosigkeit, ggf. Intubation bei fehlendem Schutzreflex / Atemdepression</li>
<li><strong>Sauerstoff</strong> nach Bedarf (Ziel-SpO₂ ≥ 94%)</li>
<li><strong>Wärmeerhalt:</strong> Hypothermieschutz (Wärmedecke, warme Infusionen)</li>
</ul>
<h3>Spezifische Therapie</h3>
<ul>
<li><strong>Volumensubstitution:</strong> Vollelektrolytlösung i.v. (Rehydratation, Verdünnungseffekt)</li>
<li><strong>Glukose:</strong> 40 ml Glukose 40% i.v. bei Hypoglykämie (BZ < 70 mg/dl)</li>
<li><strong>Thiamin (Vitamin B1):</strong> 100–300 mg i.v. <strong>vor Glukosegabe</strong> bei V.a. Alkoholabhängigkeit / Malnutrition (Prophylaxe Wernicke-Enzephalopathie)</li>
<li><strong>Elektrolytausgleich:</strong> Kalium, Magnesium, Phosphat nach BGA/Labor</li>
<li><strong>Antiemese:</strong> Ondansetron 4 mg i.v. bei Erbrechen</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Keine Gabe von Aktivkohle</strong> bei Alkoholintoxikation – Ethanol wird nicht an Aktivkohle gebunden! Aspirationsrisiko erhöht!</p></div>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Immer <strong>Thiamin vor Glukose</strong> verabreichen – Glukosegabe ohne Thiaminsubstitution kann eine Wernicke-Enzephalopathie auslösen!</p></div>`
},
{
title: "Merke",
html: `<ul>
<li>Alkoholintoxikation ist eine <strong>Ausschlussdiagnose</strong> – immer andere Ursachen einer Bewusstseinsstörung bedenken (SHT, Hypoglykämie, Intoxikation mit anderen Substanzen, Meningitis, Stroke)</li>
<li><strong>cCT großzügig indizieren</strong> bei Sturz/Trauma, inadäquatem Aufklaren oder fokal-neurologischem Defizit</li>
<li>Bei fehlendem Aufklaren nach Erwartung: Reevaluation und erweiterte Diagnostik!</li>
<li>Engmaschige Überwachung (Atmung, Bewusstsein) essenziell – <strong>Aspirationsgefahr!</strong></li>
<li>Bei Verdacht auf <strong>Methanol-/Ethylenglykolintoxikation</strong> (osmotische Lücke ↑, Anionenlücke ↑, Visusminderung): Giftnotruf kontaktieren, Fomepizol/Ethanol als Antidot</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> Koma, Atemdepression, Intubationspflichtigkeit, schwere Hypothermie, Kreislaufinstabilität</li>
<li><strong>Überwachungsstation:</strong> schwere Bewusstseinsstörung, V.a. Mischintoxikation, Aspirationsrisiko</li>
<li><strong>Notaufnahme/Beobachtung:</strong> moderate Intoxikation bis zum Aufklaren (engmaschige Überwachung)</li>
<li><strong>Psychiatrische Vorstellung</strong> bei V.a. Suizidalität nach Aufklaren</li>
<li>Entlassung erst bei <strong>sicherer Orientierung</strong>, stabilen Vitalzeichen und gesicherter Begleitung</li>
</ul>`
}
],
        stand: "12/24",
        sources: `Vonghia L et al. Acute alcohol intoxication. Eur J Intern Med. 2008;19(8):561-7.<br>
Hack JB. Ethanol. In: Nelson LS et al. (Hrsg.) Goldfrank's Toxicologic Emergencies. 11th ed. McGraw-Hill, 2019.<br>
Lamminpää A. Acute alcohol intoxication among children and adolescents. Eur J Pediatr. 1994;153:868-872.`
    });
})();
