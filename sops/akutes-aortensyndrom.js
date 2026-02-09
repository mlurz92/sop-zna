// SOP: Akutes Aortensyndrom
// Kategorie: Kardiologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "akutes-aortensyndrom",
        title: "Akutes Aortensyndrom",
        category: "Kardiologie",
        catKey: "kardio",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Akutes Aortensyndrom (AAS):</strong> Sammelbegriff für akute, lebensbedrohliche Erkrankungen der Aorta mit Einriss der Gefäßwand</li>
<li>Umfasst:
<ul>
<li><strong>Aortendissektion (Typ A/B):</strong> Einriss der Intima mit Bildung eines falschen Lumens</li>
<li><strong>Intramurales Hämatom (IMH):</strong> Blutung in die Media ohne Intimaeinriss</li>
<li><strong>Penetrierendes Aortenulkus (PAU):</strong> Ulzeration einer atherosklerotischen Plaque mit Perforation der Lamina elastica interna</li>
</ul>
</li>
</ul>`
},
{
title: "Klassifikation",
html: `<h3>Stanford-Klassifikation</h3>
<ul>
<li><strong>Typ A:</strong> Beteiligung der Aorta ascendens (ca. 65%) → <strong>operative Therapie</strong></li>
<li><strong>Typ B:</strong> Beteiligung der Aorta descendens distal der linken A. subclavia (ca. 35%) → <strong>konservative/endovaskuläre Therapie</strong></li>
</ul>
<h3>DeBakey-Klassifikation</h3>
<ul>
<li><strong>Typ I:</strong> Aorta ascendens + Aortenbogen + Aorta descendens</li>
<li><strong>Typ II:</strong> Nur Aorta ascendens</li>
<li><strong>Typ III:</strong> Nur Aorta descendens</li>
</ul>`
},
{
title: "Risikofaktoren",
html: `<ul>
<li><strong>Arterielle Hypertonie</strong> (wichtigster Risikofaktor, 70% der Patienten)</li>
<li><strong>Bindegewebserkrankungen:</strong> Marfan-Syndrom, Ehlers-Danlos-Syndrom, Loeys-Dietz-Syndrom</li>
<li><strong>Atherosklerose</strong></li>
<li><strong>Bikuspidale Aortenklappe</strong></li>
<li><strong>Vorherige Aortenoperationen</strong> / Aneurysma</li>
<li><strong>Trauma</strong> (stumpf/penetrierend)</li>
<li><strong>Iatrogen:</strong> Kathetermanöver, Herzoperation</li>
<li><strong>Schwangerschaft</strong></li>
<li><strong>Kokainkonsum</strong></li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Plötzlich einsetzender, stärkster Thoraxschmerz</strong> (90%):
<ul>
<li>Charakteristisch: <strong>reißend, messerstichartig</strong></li>
<li>Typ A: präkordial, vorderer Thorax</li>
<li>Typ B: interskapulär, Rücken</li>
</ul>
</li>
<li><strong>Wandernder Schmerz</strong> (Pulsationsschmerz) bei Fortleitung der Dissektion</li>
<li><strong>Blutdruckdifferenz</strong> >20 mmHg zwischen beiden Armen (30–50%)</li>
<li><strong>Pulsdefizit</strong> (Karotis, Aa. radiales, Femoralis)</li>
<li><strong>Neurologische Symptome:</strong> Synkope (10–15%), Schlaganfall, Paraplegie (Spinalischämie)</li>
<li><strong>Abdominelle Schmerzen</strong> (Beteiligung abdomineller Aorta/Mesenterialgefäße)</li>
<li><strong>Dyspnoe</strong> (Aortenklappeninsuffizienz, Hämoperikard, Pleuraerguss)</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Bei plötzlichem, stärkstem Thoraxschmerz + Blutdruckdifferenz/Pulsdefizit → <strong>hochgradiger V.a. AAS!</strong></p></div>`
},
{
title: "Komplikationen",
html: `<ul>
<li><strong>Ruptur</strong> (Hämoperikard → Perikardtamponade, Hämatothorax, Hämoabdomen)</li>
<li><strong>Aortenklappeninsuffizienz</strong> (Typ A)</li>
<li><strong>Koronarischämie</strong> (v.a. rechte Koronararterie bei Typ A)</li>
<li><strong>Schlaganfall</strong> (Beteiligung der Karotiden)</li>
<li><strong>Spinalischämie/Paraplegie</strong> (Beteiligung der Aa. spinales)</li>
<li><strong>Viszeralischämie</strong> (Mesenterialgefäße, Nierenarterien)</li>
<li><strong>Extremitätenischämie</strong> (Iliakal-/Femoralarterien)</li>
</ul>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li><strong>Blutdruck an BEIDEN Armen messen!</strong> (Differenz?)</li>
<li><strong>Pulse an allen 4 Extremitäten</strong> prüfen (Pulsdefizit?)</li>
<li>2x großvolumiger venöser Zugang</li>
<li><strong>12-Kanal-EKG:</strong> DD Myokardinfarkt (ST-Hebungen möglich bei Koronarbeteiligung!)</li>
<li><strong>Labor:</strong> BB, E'lyte, NW, Troponin, D-Dimer (negativer D-Dimer schließt AAS nicht sicher aus!), LDH (Hämolyse?), Gerinnung, Blutgruppe (Kreuzprobe)</li>
</ul>
<h3>Klinische Untersuchung</h3>
<ul>
<li><strong>Anamnese:</strong> Schmerzcharakter? Beginn? Wanderung? Bekanntes Aneurysma? Bindegewebserkrankung? Hypertonie? Trauma?</li>
<li><strong>Körperliche Untersuchung:</strong> Blutdruckdifferenz? Pulsdefizite? Herzgeräusch (Aortenklappeninsuffizienz)? Perikardreiben? Neurologische Ausfälle? Abdominelle Symptomatik? Beinischämie?</li>
</ul>
<h3>Bildgebung (notfallmäßig!)</h3>
<ul>
<li><strong>CT-Angiographie (CTA) Thorax/Abdomen:</strong> Goldstandard! (Sensitivität/Spezifität >95%)
<ul>
<li>Zeigt: Dissektionsmembran, wahres/falsches Lumen, Entry/Re-entry, Beteiligung von Seitenästen</li>
</ul>
</li>
<li><strong>TEE (transösophageale Echokardiographie):</strong> alternativ bei Kontraindikationen für CTA, instabilem Patienten, intraoperativ</li>
<li><strong>MRT-Angiographie:</strong> alternativ bei Kontraindikationen für CTA (zeitintensiver)</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Röntgen Thorax kann unauffällig sein! Verbreitertes Mediastinum, doppeltes Aortenkontur, Pleuraerguss sind Hinweise, aber nicht beweisend.</p></div>`
},
{
title: "Therapie",
html: `<h3>Sofortmaßnahmen</h3>
<ul>
<li><strong>Analgesie:</strong> i.v. Opioid (z.B. Morphin 2–5 mg, Fentanyl 50–100 µg)</li>
<li><strong>Blutdrucksenkung:</strong> Ziel systolisch <120 mmHg, Herzfrequenz <60/min
<ul>
<li><strong>β-Blocker</strong> (z.B. Esmolol 500 µg/kg über 1 min, dann 50–200 µg/kg/min i.v.) – <strong>zuerst!</strong></li>
<li><strong>Nitro</strong> (z.B. Nitroglycerin 1–10 mg/h i.v.) – erst nach β-Blockade! (CAVE: Reflextachykardie)</li>
<li>Alternativ: Urapidil (10–50 mg i.v., dann 5–40 mg/h)</li>
</ul>
</li>
<li><strong>2 großvolumige venöse Zugänge</strong></li>
<li><strong>Notfallmäßige kardiochirurgische Vorstellung</strong> bei Typ A!</li>
</ul>
<h3>Weiteres Vorgehen nach Typ</h3>
<ul>
<li><strong>Typ A:</strong> <strong>Notfall-OP</strong> (Suprakommissurale Aortenklappenersatz, Ascendens-Ersatz, ggf. Bogenersatz) – Letalität ohne OP 1–2%/h!</li>
<li><strong>Typ B (unkompliziert):</strong> konservativ (Blutdrucksenkung, Analgesie, Überwachung)</li>
<li><strong>Typ B (kompliziert):</strong> endovaskuläre Therapie (TEVAR) bei Ruptur, Malperfusion, therapieresistentem Schmerz, rascher Größenzunahme</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Thrombolyse bei V.a. AAS absolut kontraindiziert! (Rupturgefahr!)</p></div>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Typ A = Notfall-OP!</strong> Letalität ohne OP 1–2% pro Stunde!</li>
<li><strong>Blutdruck an beiden Armen messen!</strong> Differenz >20 mmHg verdächtig auf AAS</li>
<li><strong>Thrombolyse absolut kontraindiziert</strong> bei V.a. AAS!</li>
<li><strong>CTA = Goldstandard</strong> in der Diagnostik</li>
<li><strong>β-Blocker zuerst!</strong> Vor Nitro (sonst Reflextachykardie mit erhöhter Wandspannung)</li>
<li>Typ B wird primär konservativ behandelt, außer bei Komplikationen (Ruptur, Malperfusion)</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Typ A:</strong> Notfallmäßige Verlegung in ein Zentrum mit Herzchirurgie zur <strong>Notfall-OP</strong></li>
<li><strong>Typ B (unkompliziert):</strong> Überwachung auf ICU, konservative Therapie</li>
<li><strong>Typ B (kompliziert):</strong> Endovaskuläre Therapie (TEVAR) in gefäßchirurgischem Zentrum</li>
</ul>`
}
],
        stand: "12/24",
        sources: `Erbel R et al. 2014 ESC Guidelines on the diagnosis and treatment of aortic diseases. Eur Heart J. 2014;35(41):2873-926.<br>
Conzelmann LO et al. German Registry for Acute Aortic Dissection Type A (GERAADA) – Update 2024. Eur J Cardiothorac Surg. 2024.<br>
Hiratzka LF et al. 2010 ACCF/AHA/AATS/ACR/ASA/SCAI/SIR/STS/SVM Guidelines for the diagnosis and management of patients with thoracic aortic disease. Circulation. 2010;121(13):e266-369.`
    });
})();
