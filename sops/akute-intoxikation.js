// SOP: Akute Intoxikation
// Kategorie: Toxikologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "akute-intoxikation",
        title: "Akute Intoxikation",
        category: "Toxikologie",
        catKey: "tox",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Akute Intoxikation:</strong> Akute Vergiftung durch exogene Substanzen (Medikamente, Chemikalien, Drogen, Pflanzen, Gase) mit potenziell lebensbedrohlichen Organschäden</li>
</ul>
<div class="callout callout-hinweis"><p><strong>Hinweis:</strong> Bei jeder unklaren Bewusstseinsstörung an eine Intoxikation denken! Die Therapie richtet sich primär nach der klinischen Symptomatik (Toxidrom), nicht nach der spezifischen Substanz.</p></div>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Medikamente:</strong> Paracetamol, Benzodiazepine, Opioide, Antidepressiva (TZA, SSRI), Antipsychotika, Betablocker, Calciumantagonisten, Digoxin, Lithium, Antikonvulsiva</li>
<li><strong>Drogen:</strong> Alkohol, Opiate, Kokain, Amphetamine, Cannabinoide, synthetische Cannabinoide, GHB, neue psychoaktive Substanzen (NPS)</li>
<li><strong>Chemikalien:</strong> Reinigungsmittel, Lösungsmittel, Pestizide, Organophosphate, Schwermetalle</li>
<li><strong>Gase:</strong> Kohlenmonoxid, Cyanid, Reizgase</li>
<li><strong>Pflanzen/Pilze:</strong> Knollenblätterpilz (Amatoxin), Tollkirsche, Eibe, etc.</li>
</ul>`
},
{
title: "Symptome",
html: `<h3>Toxidrome</h3>
<div class="table-wrap"><table>
<thead><tr><th>Toxidrom</th><th>Symptome</th><th>Beispiele</th></tr></thead>
<tbody>
<tr><td><strong>Sympathomimetisch</strong></td><td>Tachykardie, Hypertonie, Mydriasis, Hyperthermie, Agitation, Schwitzen</td><td>Kokain, Amphetamine, MDMA</td></tr>
<tr><td><strong>Sedativ-hypnotisch</strong></td><td>Somnolenz/Koma, Hypotonie, Bradykardie, Miosis/Mydriasis, Atemdepression</td><td>Benzodiazepine, Barbiturate, GHB</td></tr>
<tr><td><strong>Opioid</strong></td><td>Miosis (Stecknadelpupillen), Atemdepression, Bewusstlosigkeit, Bradykardie</td><td>Morphin, Heroin, Fentanyl, Methadon</td></tr>
<tr><td><strong>Anticholinerg</strong></td><td>Tachykardie, Mydriasis, trockene/warme Haut, Harnverhalt, Delir, Hyperthermie</td><td>TZA, Atropin, Antihistaminika, Tollkirsche</td></tr>
<tr><td><strong>Cholinerg</strong></td><td>Bradykardie, Miosis, Speichelfluss, Bronchospasmus, Diarrhoe, Schwitzen (SLUDGE)</td><td>Organophosphate, Physostigmin, Pilze</td></tr>
<tr><td><strong>Serotoninerg</strong></td><td>Tachykardie, Hypertonie, Hyperthermie, Mydriasis, Klonus, Agitation, Tremor</td><td>SSRI, MAO-Hemmer, Tramadol, MDMA</td></tr>
</tbody>
</table></div>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur)</li>
<li>1–2x venöser Zugang</li>
<li><strong>BGA</strong> (pH? Laktat? Glukose? E'lyte? MetHb? COHb?)</li>
<li><strong>BZ-Messung</strong> (Hypoglykämie?)</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte, NW, GOT, GPT, CK, Lipase, Gerinnung, Laktat, Paracetamol-Spiegel, Ethanol-Spiegel</li>
<li><strong>12-Kanal-EKG</strong> (QTc? QRS-Verbreiterung? Arrhythmie? AV-Block?)</li>
</ul>
<h3>Klinische Untersuchung</h3>
<ul>
<li><strong>Anamnese</strong> (Fremdanamnese, Rettungsdienst!): Welche Substanz? Menge? Zeitpunkt? Suizidabsicht? Zugängliche Medikamente/Substanzen? Vorerkrankungen? Dauermedikation?</li>
<li><strong>Körperliche Untersuchung:</strong> GCS? Pupillen (Miosis/Mydriasis)? Hautbefund (trocken/feucht, warm/kalt, Einstichstellen)? Foetor? Darmgeräusche? Blasenfüllung? Muskeltonus? Klonus? Tremor? Temperatur?</li>
</ul>
<h3>Erweiterte Diagnostik (ggf.)</h3>
<ul>
<li><strong>Urin-Drogenscreening</strong> (qualitativ – Ergebnis ändert selten das akute Management, aber kann diagnostisch hilfreich sein)</li>
<li><strong>Spezifische Medikamentenspiegel:</strong> Paracetamol, Salicylate, Digoxin, Lithium, Antikonvulsiva, Methanol, Ethylenglykol</li>
<li><strong>Anionenlücke und osmotische Lücke</strong> berechnen (toxische Alkohole?)</li>
<li><strong>cCT nativ</strong> bei unklarer Vigilanzminderung</li>
<li><strong>Rö-Thorax</strong> bei V.a. Aspiration</li>
<li><strong>Giftnotruf kontaktieren:</strong> z.B. Giftinformationszentrum-Nord (GIZ-Nord) 0551-19240</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Allgemeinmaßnahmen (bei JEDER Intoxikation)</h3>
<ul>
<li>Stabilisierung gemäß <strong>ABCDE-Schema</strong> (Atemwegssicherung hat Priorität!)</li>
<li>Monitoring: EKG, SpO₂, RR, GCS, Temperatur</li>
<li>i.v.-Zugang + Vollelektrolytlösung</li>
<li>Glukosetestung und Korrektur</li>
</ul>
<h3>Primäre Giftelimination</h3>
<ul>
<li><strong>Aktivkohle</strong> (1 g/kg KG, max. 50 g) p.o. oder über Magensonde:
<ul>
<li>Indikation: potenziell toxische Ingestion ≤ 1 Stunde</li>
<li>Kontraindikation: Bewusstseinseintrübung ohne gesicherten Atemweg, Säuren/Laugen, Alkohole, Schwermetalle, Lithium</li>
</ul>
</li>
<li><strong>Magenspülung:</strong> nur in Ausnahmefällen (≤ 1h, lebensbedrohliche Ingestion, nach Intubation)</li>
</ul>
<h3>Antidottherapie (Auswahl)</h3>
<div class="table-wrap"><table>
<thead><tr><th>Substanz</th><th>Antidot</th></tr></thead>
<tbody>
<tr><td>Opioide</td><td><strong>Naloxon</strong> 0,4–2 mg i.v./i.n. (titrierend)</td></tr>
<tr><td>Benzodiazepine</td><td><strong>Flumazenil</strong> 0,2 mg i.v. (titrierend; CAVE: Krampfanfälle bei Mischintox/BZD-Abhängigkeit)</td></tr>
<tr><td>Paracetamol</td><td><strong>N-Acetylcystein (NAC)</strong> i.v. nach Protokoll</td></tr>
<tr><td>Betablocker</td><td><strong>Glukagon</strong> 5–10 mg i.v., Katecholamine</td></tr>
<tr><td>Calciumantagonisten</td><td><strong>Calcium</strong> i.v., <strong>Insulin/Glukose</strong> (High-dose-Insulin), Katecholamine</td></tr>
<tr><td>Digitalis</td><td><strong>Digitalis-Antitoxin (Fab-Fragmente)</strong></td></tr>
<tr><td>Organophosphate</td><td><strong>Atropin</strong> titrierend + <strong>Obidoxim</strong></td></tr>
<tr><td>Methanol/Ethylenglykol</td><td><strong>Fomepizol</strong> (oder Ethanol) + Hämodialyse</td></tr>
<tr><td>Kohlenmonoxid</td><td><strong>100% O₂</strong>, ggf. hyperbare O₂-Therapie</td></tr>
<tr><td>TZA</td><td><strong>Natriumbikarbonat</strong> (bei QRS > 100 ms)</td></tr>
</tbody>
</table></div>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Flumazenil</strong> nur bei isolierter Benzodiazepin-Intoxikation ohne Krampfanamnese und ohne Mischintoxikation (TZA!) verwenden – Krampfanfall-Risiko!</p></div>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Treat the patient, not the poison</strong> – Stabilisierung nach ABCDE hat immer Priorität!</li>
<li>An <strong>Paracetamol-Spiegel</strong> bei jeder unklaren Ingestion denken (häufig als Mischpräparat, späte Leberschädigung!)</li>
<li>Bei jeder Intoxikation: <strong>Suizidalität</strong> evaluieren und psychiatrische Vorstellung nach Aufklaren</li>
<li><strong>Giftnotruf</strong> frühzeitig kontaktieren für substanzspezifische Beratung</li>
<li>EKG-Veränderungen (QRS-Verbreiterung, QTc-Verlängerung) können auf lebensbedrohliche Intoxikationen hinweisen (TZA, Antipsychotika)</li>
<li><strong>Aktivkohle</strong> ist nur innerhalb 1 Stunde nach Ingestion sinnvoll und bei intaktem Atemwegsschutz</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> schwere Bewusstseinsstörung, Intubation, Kreislaufinstabilität, lebensbedrohliche Arrhythmien, Antidotperfusor</li>
<li><strong>Überwachungsstation:</strong> moderate Intoxikation, Antidotgabe, Monitoring notwendig</li>
<li><strong>Notaufnahme/Beobachtung:</strong> leichte Intoxikation bis zum Aufklaren</li>
<li><strong>Psychiatrische Vorstellung</strong> bei suizidaler Intoxikation nach medizinischer Stabilisierung</li>
</ul>`
}
],
        stand: "12/24",
        sources: `Brvar M. Poisoning. In: Tintinalli JE et al. (Hrsg.) Tintinalli's Emergency Medicine. 9th ed. McGraw-Hill, 2020.<br>
Nelson LS et al. Goldfrank's Toxicologic Emergencies. 11th ed. McGraw-Hill, 2019.<br>
Giftinformationszentrum-Nord (GIZ-Nord): www.giz-nord.de`
    });
})();
