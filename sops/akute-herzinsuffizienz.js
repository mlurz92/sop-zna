// SOP: Akute Herzinsuffizienz
// Kategorie: Kardiologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "akute-herzinsuffizienz",
        title: "Akute Herzinsuffizienz",
        category: "Kardiologie",
        catKey: "kardio",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Akute Herzinsuffizienz (AHF):</strong> Rasches Auftreten oder akute Verschlechterung von Symptomen und Zeichen der Herzinsuffizienz, die eine notfallmäßige Diagnostik und Therapie erfordert</li>
</ul>
<h3>Klinische Profile (nach ESC)</h3>
<div class="table-wrap"><table>
<thead><tr><th>Profil</th><th>Klinisch</th><th>Beschreibung</th></tr></thead>
<tbody>
<tr><td>Warm + Nass</td><td>Ausreichende Perfusion, Kongestion</td><td>Häufigstes Profil, Lungenödem, periphere Ödeme</td></tr>
<tr><td>Kalt + Nass</td><td>Minderperfusion + Kongestion</td><td>Kardiogener Schock mit Stauung</td></tr>
<tr><td>Kalt + Trocken</td><td>Minderperfusion, keine Kongestion</td><td>Low-Output, oft Volumenmangel</td></tr>
<tr><td>Warm + Trocken</td><td>Ausreichende Perfusion, keine Kongestion</td><td>Kompensiert, kein akuter Handlungsbedarf</td></tr>
</tbody>
</table></div>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Akute Dekompensation einer chronischen HI:</strong> Non-Compliance (Medikamente, Salz-/Flüssigkeitsrestriktion), Infektionen, Anämie, Niereninsuffizienz, Arrhythmien</li>
<li><strong>Akutes Koronarsyndrom:</strong> STEMI/NSTEMI mit akuter Pumpfunktionsstörung</li>
<li><strong>Hypertensive Krise:</strong> Akutes hypertensives Lungenödem</li>
<li><strong>Arrhythmien:</strong> Tachykardes Vorhofflimmern, VT, Bradykardie</li>
<li><strong>Akute Klappeninsuffizienz:</strong> Endokarditis, Papillarmuskelruptur, Aortendissektion</li>
<li><strong>Lungenarterienembolie:</strong> Akute Rechtsherzbelastung</li>
<li><strong>Perikardtamponade</strong></li>
<li><strong>Myokarditis</strong></li>
<li><strong>Takotsubo-Kardiomyopathie</strong></li>
<li><strong>Toxisch:</strong> Alkohol, Chemotherapeutika (Anthrazykline)</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Dyspnoe</strong> (Belastungs- bis Ruhedyspnoe), <strong>Orthopnoe</strong>, paroxysmale nächtliche Dyspnoe</li>
<li><strong>Rasselgeräusche</strong> beidseits basal (Lungenödem)</li>
<li><strong>Periphere Ödeme</strong> (Knöchel, prätibial, Anasarka)</li>
<li><strong>Jugularvenenstauung</strong>, positiver hepatojugulärer Reflux</li>
<li>Tachykardie, ggf. 3. Herzton (Galopprhythmus)</li>
<li>ggf. <strong>Schaumiges rosafarbenes Sputum</strong> (schweres Lungenödem)</li>
<li>ggf. Zeichen des <strong>kardiogenen Schocks</strong> (Hypotonie, Kaltschweißigkeit, Oligurie, Verwirrtheit)</li>
</ul>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur)</li>
<li>1–2x venöser Zugang</li>
<li><strong>BGA</strong> (Oxygenierung? pH? Laktat?)</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte, NW, GOT, GPT, <strong>BNP/NT-proBNP</strong>, hs-Troponin, Gerinnung, TSH, D-Dimere</li>
<li><strong>12-Kanal-EKG:</strong> Ischämie? Arrhythmie? Blockbilder? Hypertrophiezeichen?</li>
</ul>
<h3>Klinische Untersuchung</h3>
<ul>
<li><strong>Anamnese:</strong> Symptombeginn/-dynamik? Belastungsdyspnoe? Orthopnoe? Gewichtszunahme? Ödeme? Vorbekannte HI (LVEF? NYHA?)? Medikamente? Compliance? Auslöser (Infektion, Arrhythmie, Diätfehler)?</li>
<li><strong>Körperliche Untersuchung:</strong> Warm/Kalt? Nass/Trocken? Rasselgeräusche? Periphere Ödeme? JVD? Hepatomegalie? 3. Herzton? Herzgeräusch? Rekapillarisierungszeit?</li>
</ul>
<h3>Erweiterte Diagnostik</h3>
<ul>
<li><strong>Echokardiographie</strong> (notfallmäßig): LVEF? Wandbewegungsstörungen? Klappenvitien? Perikarderguss? Rechtsherzbelastung?</li>
<li><strong>Röntgen-Thorax:</strong> Stauungszeichen? Pleuraerguss? Kardiomegalie?</li>
<li><strong>POCUS (Lungensonographie):</strong> B-Linien (pulmonale Stauung)? Pleuraerguss?</li>
<li>ggf. CT-Thorax (bei V.a. LAE), Koronarangiographie (bei V.a. ACS)</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Profil: Warm + Nass (häufigstes Szenario)</h3>
<ul>
<li><strong>Oberkörperhochlagerung</strong>, Beine tief</li>
<li><strong>Sauerstoff:</strong> nur bei SpO₂ < 90% (Ziel-SpO₂ ≥ 90%)</li>
<li><strong>NIV (CPAP/BiPAP):</strong> frühzeitig bei Lungenödem und respiratorischer Insuffizienz</li>
<li><strong>Furosemid i.v.:</strong>
<ul>
<li>Diuretika-naive Patienten: 20–40 mg i.v. Bolus</li>
<li>Vorbestehende Diuretika-Therapie: mindestens Äquivalent der oralen Tagesdosis als i.v. Bolus</li>
<li>Ziel: Urinproduktion > 100 ml/h in den ersten 2 Stunden</li>
</ul>
</li>
<li><strong>Nitroglycerin</strong> 1–2 Hübe s.l. initial, dann ggf. Perfusor 1–10 mg/h i.v. (bei RR syst. > 110 mmHg; besonders wirksam beim hypertensiven Lungenödem)</li>
</ul>
<h3>Profil: Kalt + Nass (kardiogener Schock)</h3>
<ul>
<li>Intensivmedizinische Betreuung</li>
<li><strong>Vasopressor:</strong> Noradrenalin (bei MAP < 65 mmHg)</li>
<li><strong>Inotropikum:</strong> Dobutamin 2,5–20 µg/kg/min (bei Hypoperfusion trotz adäquatem Volumenstatus)</li>
<li>Zurückhaltende Diurese (erst nach Stabilisierung der Hämodynamik)</li>
<li>Ggf. mechanische Kreislaufunterstützung (IABP, Impella, ECMO) nach kardiologischer Evaluation</li>
</ul>
<h3>Profil: Kalt + Trocken</h3>
<ul>
<li>Vorsichtige Volumengabe (250 ml Bolus, Reevaluation)</li>
<li>Bei fehlender Besserung: Inotropika</li>
</ul>
<h3>Ursachenbezogene Therapie</h3>
<ul>
<li><strong>ACS:</strong> Koronarangiographie</li>
<li><strong>Arrhythmie:</strong> Kardioversion / Antiarrhythmika</li>
<li><strong>Perikardtamponade:</strong> Perikardpunktion</li>
<li><strong>Hypertensive Krise:</strong> Aggressive Nachlastsenkung</li>
<li><strong>Akute Klappeninsuffizienz:</strong> Chirurgisches Konsil</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Keine Betablocker</strong> in der akuten Dekompensation einleiten oder steigern! Bestehende Betablocker bei kardiogenem Schock pausieren.</p></div>`
},
{
title: "Merke",
html: `<ul>
<li>Klinisches Profil bestimmen: <strong>Warm/Kalt + Nass/Trocken</strong> → leitet die Therapie!</li>
<li><strong>BNP/NT-proBNP</strong> zur Diagnosebestätigung und zum Ausschluss (hoher negativ-prädiktiver Wert). Grenzwerte: NT-proBNP > 300 pg/ml (akut) spricht für HI</li>
<li><strong>Frühzeitig NIV</strong> bei Lungenödem → reduziert Intubationsrate und Mortalität</li>
<li>Auslöser identifizieren und behandeln (<strong>CHAMP</strong>: Coronary syndrome, Hypertension, Arrhythmia, Mechanical cause, Pulmonary embolism)</li>
<li>Furosemid-Ansprechen nach 2h evaluieren, bei fehlendem Ansprechen Dosis verdoppeln oder Kombinationsdiurese (+ Thiazid)</li>
<li>Sauerstoff nur bei SpO₂ < 90% – <strong>Hyperoxie vermeiden!</strong></li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> kardiogener Schock, Intubationspflichtigkeit, schwere hämodynamische Instabilität, akute Klappenpathologie</li>
<li><strong>Überwachungsstation/IMC:</strong> NIV-Pflichtigkeit, hämodynamische Instabilität, Troponin-Anstieg, Arrhythmie, i.v.-Inotropika</li>
<li><strong>Normalstation:</strong> stabile Patienten mit Kongestion und i.v.-Diuretikabedarf</li>
</ul>`
}
],
        stand: "12/24",
        sources: `McDonagh TA et al. 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure. Eur Heart J. 2021;42(36):3599-3726.<br>
Mebazaa A et al. Recommendations on pre-hospital and early hospital management of acute heart failure. Eur Heart J. 2015;36(30):1958-66.<br>
Ponikowski P et al. 2016 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure. Eur Heart J. 2016;37(27):2129-2200.`
    });
})();
