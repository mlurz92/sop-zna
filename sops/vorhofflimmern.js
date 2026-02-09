// SOP: Vorhofflimmern
// Kategorie: Kardiologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "vorhofflimmern",
        title: "Vorhofflimmern",
        category: "Kardiologie",
        catKey: "kardio",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Vorhofflimmern (VHF):</strong> Häufigste anhaltende Herzrhythmusstörung, charakterisiert durch unkoordinierte, hochfrequente Vorhoferregung (350–600/min) mit <strong>absoluter Arrhythmie</strong> der Kammerüberleitung</li>
</ul>
<h3>Einteilung</h3>
<div class="table-wrap"><table>
<thead><tr><th>Typ</th><th>Beschreibung</th></tr></thead>
<tbody>
<tr><td><strong>Erstdiagnostiziert</strong></td><td>Erstmalig diagnostiziert</td></tr>
<tr><td><strong>Paroxysmal</strong></td><td>Selbstlimitierend, < 7 Tage</td></tr>
<tr><td><strong>Persistierend</strong></td><td>> 7 Tage oder Kardioversion erforderlich</td></tr>
<tr><td><strong>Lang-persistierend</strong></td><td>> 12 Monate</td></tr>
<tr><td><strong>Permanent</strong></td><td>Akzeptiert, keine Rhythmuskontrolle</td></tr>
</tbody>
</table></div>`
},
{
title: "Ursachen",
html: `<ul>
<li>Arterielle Hypertonie (häufigste Ursache!)</li>
<li>Herzklappenerkrankungen (v.a. Mitralvitien)</li>
<li>Herzinsuffizienz</li>
<li>KHK</li>
<li>Hyperthyreose</li>
<li>Alkohol (Holiday Heart Syndrome)</li>
<li>Lungenerkrankungen (COPD, LAE)</li>
<li>Adipositas, Schlafapnoe</li>
<li>Postoperativ (v.a. nach Herz-Thorax-OP)</li>
<li>Idiopathisch (Lone Atrial Fibrillation)</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li>Palpitationen, unregelmäßiger Herzschlag</li>
<li>Dyspnoe, Belastungsintoleranz</li>
<li>Schwindel, Präsynkope</li>
<li>Thoraxschmerz/Enge</li>
<li>Fatigue</li>
<li>ggf. asymptomatisch (Zufallsbefund!)</li>
<li>ggf. <strong>Komplikation als Erstmanifestation:</strong> Schlaganfall, akute Herzinsuffizienz, Tachymyopathie</li>
</ul>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1x venöser Zugang</li>
<li><strong>12-Kanal-EKG:</strong> Absolute Arrhythmie, fehlende P-Wellen, Flimmerwellen, unregelmäßige RR-Abstände</li>
<li><strong>Labor:</strong> BB, E'lyte (K⁺, Mg²⁺), NW, <strong>TSH</strong>, GOT, GPT, hs-Troponin, BNP, Gerinnung</li>
<li><strong>BGA</strong></li>
<li><strong>Echokardiographie:</strong> LV-Funktion? Klappenerkrankung? LA-Dilatation? Perikarderguss?</li>
<li><strong>CHA₂DS₂-VASc-Score</strong> (Thromboembolierisiko)</li>
<li><strong>HAS-BLED-Score</strong> (Blutungsrisiko)</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Instabiler Patient (Hypotonie, Schock, Ischämie, akute HI)</h3>
<ul>
<li><strong>Synchronisierte Kardioversion</strong> (biphasisch, 120–200 J)</li>
</ul>
<h3>Stabiler Patient: Frequenzkontrolle</h3>
<ul>
<li><strong>Ziel-HF < 110/min</strong> (lenient) oder < 80/min (strikt bei Symptomatik)</li>
<li><strong>Betablocker:</strong> Metoprolol 5 mg i.v. (Wiederholung alle 5 min, max. 15 mg), dann oral</li>
<li><strong>Verapamil/Diltiazem</strong> i.v. (CAVE: nicht bei HFrEF, nicht bei WPW!)</li>
<li><strong>Digoxin:</strong> bei Herzinsuffizienz, wenn Betablocker nicht ausreichen (0,5 mg i.v. initial)</li>
<li><strong>Amiodaron:</strong> als Frequenzkontrolle bei schwerer Herzinsuffizienz (LVEF < 40%)</li>
</ul>
<h3>Stabiler Patient: Rhythmuskontrolle (Kardioversion)</h3>
<ul>
<li><strong>Indikation:</strong> symptomatisches VHF, Erstmanifestation, junger Patient, Herzinsuffizienz</li>
<li><strong>VHF < 48h:</strong> Kardioversion ohne vorherige Antikoagulation (Heparin-Bolus vor Kardioversion)
<ul>
<li>Medikamentös: Flecainid 2 mg/kg i.v. über 10 min (CAVE: nur bei Herzgesunden!) oder Vernakalant 3 mg/kg i.v.</li>
<li>Elektrisch: synchronisierte Kardioversion 120–200 J biphasisch</li>
</ul>
</li>
<li><strong>VHF ≥ 48h oder Dauer unklar:</strong>
<ul>
<li>Antikoagulation ≥ 3 Wochen VOR Kardioversion ODER TEE zum Ausschluss von Vorhofthromben → dann Kardioversion</li>
<li>Antikoagulation für ≥ 4 Wochen NACH Kardioversion (unabhängig von CHA₂DS₂-VASc)</li>
</ul>
</li>
</ul>
<h3>Antikoagulation (Thromboembolieprophylaxe)</h3>
<div class="table-wrap"><table>
<thead><tr><th>CHA₂DS₂-VASc</th><th>Empfehlung</th></tr></thead>
<tbody>
<tr><td>0 (Männer) / 1 (Frauen)</td><td>Keine Antikoagulation</td></tr>
<tr><td>1 (Männer) / 2 (Frauen)</td><td>Antikoagulation erwägen</td></tr>
<tr><td>≥ 2 (Männer) / ≥ 3 (Frauen)</td><td>Antikoagulation empfohlen</td></tr>
</tbody>
</table></div>
<ul>
<li><strong>DOAK bevorzugt:</strong> Apixaban, Edoxaban, Dabigatran, Rivaroxaban</li>
<li><strong>VKA</strong> bei mechanischer Herzklappe, mittelschwerer/schwerer Mitralstenose</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>VHF bei WPW-Syndrom:</strong> KEINE AV-Knoten-blockierenden Medikamente (Betablocker, Verapamil, Digoxin, Adenosin)! → Amiodaron oder elektrische Kardioversion!</p></div>`
},
{
title: "Merke",
html: `<ul>
<li>Instabil → <strong>sofortige Kardioversion!</strong></li>
<li>Stabil → <strong>Frequenzkontrolle</strong> (Betablocker, Verapamil, Digoxin)</li>
<li><strong>TSH</strong> immer bestimmen (Hyperthyreose!)</li>
<li><strong>CHA₂DS₂-VASc</strong> bestimmt die Antikoagulation (DOAK bevorzugt)</li>
<li><strong>VHF ≥ 48h/unklar:</strong> Antikoagulation ≥ 3 Wochen ODER TEE vor Kardioversion</li>
<li><strong>VHF bei WPW:</strong> keine AV-Knoten-Blocker!</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Stationär:</strong> hämodynamische Instabilität, Kardioversion, neu diagnostiziert mit hoher Kammerfrequenz, Komplikation (Stroke, HI)</li>
<li><strong>Ambulant:</strong> bekanntes VHF, stabile Frequenzkontrolle, Antikoagulation gewährleistet</li>
</ul>`
}
],
        stand: "12/24",
        sources: `Van Gelder IC et al. 2024 ESC Guidelines for the management of atrial fibrillation. Eur Heart J. 2024;45(36):3314-3414.<br>Hindricks G et al. 2020 ESC Guidelines for the diagnosis and management of atrial fibrillation. Eur Heart J. 2021;42(5):373-498.`
    });
})();
