// SOP: Tachykarde Herzrhythmusstörungen
// Kategorie: Kardiologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "tachykarde-hrst",
        title: "Tachykarde Herzrhythmusstörungen",
        category: "Kardiologie",
        catKey: "kardio",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Tachykardie:</strong> Herzfrequenz > 100/min</li>
</ul>
<h3>Einteilung</h3>
<div class="table-wrap"><table>
<thead><tr><th>Schmaler QRS-Komplex (< 120 ms)</th><th>Breiter QRS-Komplex (≥ 120 ms)</th></tr></thead>
<tbody>
<tr><td>Sinustachykardie</td><td>Ventrikuläre Tachykardie (VT)</td></tr>
<tr><td>Vorhofflimmern/-flattern</td><td>SVT mit aberranter Leitung (Schenkelblock)</td></tr>
<tr><td>AV-Knoten-Reentry-Tachykardie (AVNRT)</td><td>Antidrome AV-Reentry-Tachykardie (WPW)</td></tr>
<tr><td>AV-Reentry-Tachykardie (AVRT)</td><td>Torsade de Pointes</td></tr>
<tr><td>Ektope atriale Tachykardie</td><td>Schrittmacher-vermittelte Tachykardie</td></tr>
</tbody>
</table></div>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Breitkomplextachykardie = VT bis zum Beweis des Gegenteils!</strong> Im Zweifel immer als VT behandeln.</p></div>`
},
{
title: "Symptome",
html: `<ul>
<li>Palpitationen, Herzrasen</li>
<li>Schwindel, Präsynkope, Synkope</li>
<li>Dyspnoe</li>
<li>Thoraxschmerz</li>
<li>ggf. Zeichen der <strong>hämodynamischen Instabilität</strong> (Hypotonie, Bewusstseinseintrübung, Schock, akute Herzinsuffizienz, akute Ischämie)</li>
</ul>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1–2x venöser Zugang</li>
<li><strong>12-Kanal-EKG</strong> (obligat! Regelmäßig/unregelmäßig? Schmal/breit? P-Wellen? Frequenz?)</li>
<li><strong>BGA</strong> (E'lyte! K⁺! Mg²⁺! pH! Laktat!)</li>
<li><strong>Labor:</strong> BB, E'lyte (K⁺, Mg²⁺, Ca²⁺), NW, hs-Troponin, TSH, Gerinnung, ggf. Digoxinspiegel</li>
<li>Anamnese: Beginn? Dauer? Trigger? Vorbekannte Rhythmusstörung? Medikamente? WPW? ICD/SM? Familienanamnese plötzlicher Herztod?</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Instabiler Patient (Hypotonie, Bewusstseinseintrübung, Schock, Ischämie)</h3>
<ul>
<li><strong>Synchronisierte Kardioversion!</strong>
<ul>
<li>Schmalkomplextachykardie: 70–120 J (biphasisch)</li>
<li>Breitkomplextachykardie/VF: 120–200 J (biphasisch)</li>
<li>Bei Bewusstlosigkeit: sofort. Bei Bewusstsein: Kurznarkose (Propofol/Midazolam/Etomidat)</li>
</ul>
</li>
</ul>
<h3>Stabiler Patient – Schmalkomplextachykardie</h3>
<h4>Regelmäßig (AVNRT, AVRT)</h4>
<ul>
<li><strong>Vagale Manöver:</strong> Valsalva-Manöver (modifiziert: pressen → Beine hoch), Karotissinusmassage (CAVE: nur einseitig, kein Geräusch, kein Stroke)</li>
<li><strong>Adenosin:</strong> 6 mg i.v. schnell als Bolus + 20 ml NaCl-Flush → Wirkung nach 10–20 sec → ggf. 12 mg → ggf. 18 mg (CAVE: Asthma = KI! → Verapamil als Alternative)</li>
<li><strong>Verapamil</strong> 5 mg i.v. über 2 min (CAVE: nicht bei WPW mit VHF! Nicht bei Betablocker-Therapie! Nicht bei Herzinsuffizienz!)</li>
</ul>
<h4>Unregelmäßig (Vorhofflimmern/-flattern → s. SOP VHF)</h4>
<h3>Stabiler Patient – Breitkomplextachykardie</h3>
<ul>
<li><strong>VT (oder unklare BKT):</strong>
<ul>
<li><strong>Amiodaron</strong> 300 mg i.v. über 20–60 min (dann 900 mg über 24h)</li>
<li>Alternativ: Procainamid (in DE eingeschränkt verfügbar)</li>
<li>Bei Pulslosigkeit: Defibrillation + ALS</li>
</ul>
</li>
<li><strong>Torsade de Pointes:</strong>
<ul>
<li><strong>Magnesiumsulfat</strong> 2 g i.v. über 10 min</li>
<li>Auslösende Medikamente absetzen</li>
<li>Frequenzsteigerung (Isoprenalin oder passagerer Schrittmacher)</li>
</ul>
</li>
<li><strong>SVT mit Schenkelblock:</strong> Behandlung wie Schmalkomplextachykardie (Adenosin als Diagnostikum)</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Vorhofflimmern bei WPW:</strong> Breitkomplex, unregelmäßig, sehr schnell → <strong>KEIN Adenosin, KEIN Verapamil, KEINE Betablocker, KEIN Digoxin!</strong> → Amiodaron oder Kardioversion!</p></div>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Instabil = sofortige Kardioversion!</strong></li>
<li><strong>Breitkomplextachykardie = VT</strong> bis zum Beweis des Gegenteils</li>
<li>Schmalkomplex + regelmäßig → Vagale Manöver → Adenosin</li>
<li>Adenosin = kontraindiziert bei Asthma → Alternative: Verapamil</li>
<li><strong>VHF bei WPW:</strong> keine AV-Knoten-Blocker!</li>
<li><strong>Torsade de Pointes:</strong> Magnesiumsulfat!</li>
<li>Immer <strong>E'lyte korrigieren</strong> (K⁺, Mg²⁺)</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> hämodynamische Instabilität, VT, Kardioversion, Amiodaron-Gabe</li>
<li><strong>Überwachungsstation:</strong> stabile SVT nach erfolgreicher Terminierung, Monitoring</li>
<li><strong>Ambulant:</strong> bekannte SVT nach erfolgreicher Terminierung, kardiologische Anbindung</li>
</ul>`
}
],
        stand: "12/24",
        sources: `Brugada J et al. 2019 ESC Guidelines for the management of patients with supraventricular tachycardia. Eur Heart J. 2020;41(5):655-720.<br>Zeppenfeld K et al. 2022 ESC Guidelines for the management of patients with ventricular arrhythmias and the prevention of sudden cardiac death. Eur Heart J. 2022;43(40):3997-4126.`
    });
})();
