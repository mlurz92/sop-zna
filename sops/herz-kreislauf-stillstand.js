// SOP: Herz-Kreislauf-Stillstand
// Kategorie: Kardiologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "herz-kreislauf-stillstand",
        title: "Herz-Kreislauf-Stillstand",
        category: "Kardiologie",
        catKey: "kardio",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Herz-Kreislauf-Stillstand:</strong> Abruptes Sistieren der mechanischen Herzaktion mit Verlust der Bewusstlosigkeit und fehlender Atmung/Schnappatmung</li>
</ul>
<h3>EKG-Rhythmen</h3>
<ul>
<li><strong>Schockbare Rhythmen:</strong> Kammerflimmern (VF), pulslose ventrikuläre Tachykardie (pVT)</li>
<li><strong>Nicht-schockbare Rhythmen:</strong> Asystolie, pulslose elektrische Aktivität (PEA)</li>
</ul>`
},
{
title: "Ursachen",
html: `<p><strong>4 H's und HITS:</strong></p>
<ul>
<li><strong>H</strong>ypoxie</li>
<li><strong>H</strong>ypovolämie</li>
<li><strong>H</strong>ypo-/Hyperkaliämie, metabolisch</li>
<li><strong>H</strong>ypothermie</li>
<li><strong>H</strong>erzbeuteltamponade</li>
<li><strong>I</strong>ntoxikation</li>
<li><strong>T</strong>hromboembolie (LAE, Koronarthrombose)</li>
<li><strong>S</strong>pannungspneumothorax</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Bewusstlosigkeit</strong></li>
<li><strong>Fehlende normale Atmung</strong> (keine Atmung oder Schnappatmung)</li>
<li><strong>Fehlender Puls</strong> (A. carotis, max. 10 Sekunden prüfen)</li>
</ul>`
},
{
title: "Diagnostik",
html: `<ul>
<li><strong>Keine aufwändige Diagnostik – sofort CPR beginnen!</strong></li>
<li>Patient nicht ansprechbar + keine normale Atmung → <strong>Reanimation starten!</strong></li>
<li>EKG/Defibrillator anschließen → Rhythmusanalyse</li>
<li>BGA, Labor, POCUS (in Pausen, ohne CPR-Unterbrechung)</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>ALS-Algorithmus (ERC 2021)</h3>
<ul>
<li><strong>Hochqualitative CPR:</strong> 30:2 (ohne erweiterten Atemweg), Drucktiefe 5–6 cm, Frequenz 100–120/min, vollständige Entlastung, Minimierung von Unterbrechungen (< 10 sec)</li>
<li><strong>Defibrillation</strong> bei schockbarem Rhythmus (VF/pVT): 150–200 J biphasisch → sofort weiter CPR 2 min → Rhythmuscheck</li>
</ul>
<h3>Medikamente</h3>
<ul>
<li><strong>Adrenalin 1 mg i.v.</strong>:
<ul>
<li>Schockbar: nach 3. Schock, dann alle 3–5 min</li>
<li>Nicht-schockbar: sofort, dann alle 3–5 min</li>
</ul>
</li>
<li><strong>Amiodaron</strong> (nur bei schockbarem Rhythmus):
<ul>
<li>300 mg i.v. nach 3. Schock</li>
<li>150 mg i.v. nach 5. Schock</li>
</ul>
</li>
</ul>
<h3>Reversible Ursachen behandeln (4H's + HITS)</h3>
<h3>Erweiterte Atemwegssicherung</h3>
<ul>
<li>Endotracheale Intubation oder supraglottischer Atemweg</li>
<li>Nach Atemwegssicherung: kontinuierliche Thoraxkompressionen + 10 Beatmungen/min</li>
</ul>
<h3>Post-Reanimation (ROSC)</h3>
<ul>
<li>12-Kanal-EKG (STEMI → sofortige PCI)</li>
<li><strong>Targeted Temperature Management (TTM):</strong> Zieltemperatur 32–36°C für 24h</li>
<li>Intensivstation</li>
<li>Hämodynamische Stabilisierung</li>
<li>Neuroprognostik frühestens nach 72h</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Frühe CPR + frühe Defibrillation</strong> = entscheidend für Überleben</li>
<li>CPR-Qualität ist der wichtigste modifizierbare Faktor</li>
<li><strong>Reversible Ursachen</strong> aktiv suchen und behandeln (4H's + HITS)</li>
<li>Bei STEMI nach ROSC: <strong>sofortige Koronarangiographie</strong></li>
<li><strong>POCUS</strong> zur Ursachensuche (Perikardtamponade, LAE, Hypovolämie) – ohne CPR-Unterbrechung!</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation</strong> (immer nach ROSC)</li>
<li>Cardiac Arrest Center bei Verfügbarkeit</li>
</ul>`
}
],
        stand: "12/24",
        sources: `Soar J et al. European Resuscitation Council Guidelines 2021: Adult advanced life support. Resuscitation. 2021;161:115-151.<br>Nolan JP et al. European Resuscitation Council and European Society of Intensive Care Medicine Guidelines 2021: Post-resuscitation care. Resuscitation. 2021;161:220-269.`
    });
})();
