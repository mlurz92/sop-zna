// SOP: Lungenarterienembolie
// Kategorie: Kardiologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "lungenarterienembolie",
        title: "Lungenarterienembolie",
        category: "Kardiologie",
        catKey: "kardio",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Lungenarterienembolie (LAE):</strong> Akute Verlegung einer oder mehrerer Pulmonalarterien, meist durch einen aus dem venösen System embolisierten Thrombus, mit konsekutiver Rechtsherzbelastung und gestörtem Gasaustausch</li>
</ul>
<h3>Risikostratifizierung (ESC 2019)</h3>
<div class="table-wrap"><table>
<thead><tr><th>Risiko</th><th>Klinik</th><th>RV-Dysfunktion</th><th>Troponin</th></tr></thead>
<tbody>
<tr><td><strong>Hochrisiko</strong></td><td>Hämodynamische Instabilität / Schock</td><td>+</td><td>+</td></tr>
<tr><td><strong>Intermediär-hoch</strong></td><td>Stabil</td><td>+</td><td>+</td></tr>
<tr><td><strong>Intermediär-niedrig</strong></td><td>Stabil</td><td>+ oder −</td><td>+ oder −</td></tr>
<tr><td><strong>Niedrigrisiko</strong></td><td>Stabil</td><td>−</td><td>−</td></tr>
</tbody>
</table></div>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Virchow-Trias:</strong> Stase, Endothelschaden, Hyperkoagulabilität</li>
<li><strong>Risikofaktoren:</strong>
<ul>
<li>Tiefe Venenthrombose (TVT)</li>
<li>Immobilisation, lange Reisen</li>
<li>Operationen (v.a. orthopädisch, abdominal)</li>
<li>Malignom</li>
<li>Orale Kontrazeptiva, Hormonersatztherapie</li>
<li>Schwangerschaft, Wochenbett</li>
<li>Thrombophilie</li>
<li>Adipositas</li>
<li>Vorherige VTE</li>
</ul>
</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Akute Dyspnoe</strong> (häufigstes Symptom)</li>
<li><strong>Thoraxschmerz</strong> (pleuritisch oder retrosternal)</li>
<li><strong>Tachykardie</strong></li>
<li><strong>Tachypnoe</strong></li>
<li>Husten, ggf. Hämoptysen</li>
<li>Synkope</li>
<li>ggf. <strong>Zeichen der TVT</strong> (einseitige Beinschwellung)</li>
<li>ggf. <strong>Schock</strong> (Hypotonie, JVD, Zyanose → Hochrisiko-LAE!)</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Die LAE ist ein <strong>Chamäleon!</strong> Sie kann sich als isolierte Dyspnoe, Synkope, Thoraxschmerz, Tachykardie oder Herzstillstand präsentieren.</p></div>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1–2x venöser Zugang</li>
<li><strong>BGA</strong> (pO₂↓, pCO₂↓, Laktat↑?)</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte, NW, <strong>D-Dimere</strong>, <strong>hs-Troponin</strong>, BNP/NT-proBNP, Gerinnung</li>
<li><strong>12-Kanal-EKG:</strong> Sinustachykardie, S1Q3T3-Typ (selten), Rechtsschenkelblock, T-Inversionen V1–V4</li>
</ul>
<h3>Diagnostischer Algorithmus</h3>
<ul>
<li><strong>Hämodynamisch instabil (Schock):</strong> CT-Angiographie sofort (falls verfügbar) oder POCUS (RV-Dilatation? → empirische Lysetherapie bei hohem klinischem Verdacht und nicht verfügbarer CTA)</li>
<li><strong>Hämodynamisch stabil:</strong>
<ol>
<li><strong>Klinische Wahrscheinlichkeit:</strong> Wells-Score oder Geneva-Score</li>
<li>Niedrig/intermediär: <strong>D-Dimere</strong> (altersadaptiert: < 50 Jahre: < 500 ng/ml; ≥ 50 Jahre: Alter × 10 ng/ml) → negativ = LAE ausgeschlossen</li>
<li>Hoch oder D-Dimere positiv: <strong>CT-Angiographie Thorax</strong></li>
</ol>
</li>
</ul>
<h3>POCUS</h3>
<ul>
<li>RV-Dilatation (RV/LV-Ratio > 1:1), RV-Hypokinesie, D-Sign (Septumabflachung), dilatierte VCI ohne Atemvariabilität</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Hochrisiko-LAE (hämodynamisch instabil)</h3>
<ul>
<li>Stabilisierung gemäß ABCDE-Schema</li>
<li>Sauerstoff, ggf. Intubation</li>
<li>Vorsichtige Volumengabe (max. 500 ml kristalloid, RV-Vorlast nicht überlasten!)</li>
<li>Vasopressoren (Noradrenalin-Perfusor)</li>
<li><strong>Systemische Thrombolyse:</strong> <strong>Alteplase (rtPA)</strong> 10 mg i.v. Bolus, dann 90 mg über 2h (oder Tenecteplase gewichtsadaptiert)</li>
<li>Antikoagulation: <strong>UFH</strong> Bolus 80 IE/kg i.v., dann Perfusor (Ziel-aPTT 60–80 sec)</li>
<li>Bei Lyse-Kontraindikation: kathetergestützte Therapie oder chirurgische Embolektomie</li>
</ul>
<h3>Intermediär-hoch-Risiko (stabil, aber RV-Dysfunktion + Troponin ↑)</h3>
<ul>
<li>Therapeutische Antikoagulation (UFH oder NMH)</li>
<li>Intensivüberwachung</li>
<li>Rescue-Lyse bei hämodynamischer Verschlechterung</li>
</ul>
<h3>Intermediär-niedrig und Niedrigrisiko</h3>
<ul>
<li><strong>Antikoagulation:</strong> NMH s.c. gewichtsadaptiert oder DOAK (Rivaroxaban 15 mg 2x/d für 21d, dann 20 mg 1x/d; oder Apixaban 10 mg 2x/d für 7d, dann 5 mg 2x/d)</li>
<li>Niedrigrisiko-LAE: ggf. ambulante Behandlung (sPESI = 0, gute Compliance, keine relevanten Komorbiditäten)</li>
</ul>
<h3>Dauer der Antikoagulation</h3>
<ul>
<li>Provoziert (transient Risikofaktor): 3 Monate</li>
<li>Unprovoziert: mindestens 3–6 Monate, dann Reevaluation (erweiterte Antikoagulation erwägen)</li>
<li>Rezidivierend/Malignom: Langzeitantikoagulation</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li><strong>D-Dimere</strong> nur sinnvoll bei niedriger/intermediärer Vortestwahrscheinlichkeit → altersadaptierter Grenzwert</li>
<li><strong>CT-Angiographie</strong> ist der Goldstandard</li>
<li><strong>Hochrisiko-LAE = Lyseindikation!</strong></li>
<li><strong>Vorsichtige Volumengabe</strong> bei RV-Versagen (Überladung verschlechtert!)</li>
<li>POCUS als schnelle Bedside-Diagnostik (RV-Dilatation?)</li>
<li>An LAE denken bei jeder <strong>unklaren Dyspnoe, Tachykardie, Synkope, Herzstillstand</strong></li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> Hochrisiko-LAE, Lyse, hämodynamische Instabilität</li>
<li><strong>Überwachungsstation:</strong> Intermediär-hoch-Risiko</li>
<li><strong>Normalstation:</strong> Intermediär-niedrig-Risiko</li>
<li><strong>Ambulant:</strong> Niedrigrisiko (sPESI = 0), DOAK, engmaschige Nachsorge</li>
</ul>`
}
],
        stand: "12/24",
        sources: `Konstantinides SV et al. 2019 ESC Guidelines for the diagnosis and management of acute pulmonary embolism. Eur Heart J. 2020;41(4):543-603.<br>Freund Y et al. Effect of the Pulmonary Embolism Rule-Out Criteria on Subsequent Thromboembolic Events (PROPER). JAMA. 2018;319(6):559-566.`
    });
})();
