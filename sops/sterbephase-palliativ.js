// SOP: Sterbephase (Palliativ)
// Kategorie: Sonstige
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "sterbephase-palliativ",
        title: "Sterbephase (Palliativ)",
        category: "Sonstige",
        catKey: "sonst",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Sterbephase:</strong> Die letzten Stunden bis Tage des Lebens bei einem irreversibel verlaufenden Sterbeprozess. Die Erkennung der Sterbephase ist eine <strong>klinische Einschätzung</strong> und basiert auf dem Gesamtbild des Patienten</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li>Endstadium einer nicht-heilbaren Grunderkrankung (fortgeschrittenes Malignom, terminale Organinsuffizienz, fortgeschrittene neurodegenerative Erkrankung, etc.)</li>
</ul>`
},
{
title: "Symptome",
html: `<h3>Zeichen der Sterbephase</h3>
<ul>
<li><strong>Zunehmende Schwäche und Bettlägerigkeit</strong></li>
<li><strong>Zunehmende Bewusstseinsminderung</strong> (Somnolenz → Sopor → Koma)</li>
<li><strong>Interesselosigkeit</strong> an Nahrung und Flüssigkeit</li>
<li><strong>Schluckstörung</strong></li>
<li><strong>Veränderung der Atmung</strong> (Cheyne-Stokes-Atmung, Rasselatmung, agonale Atemmuster)</li>
<li><strong>Periphere Zyanose</strong>, Marmorierung der Haut, kühle Extremitäten</li>
<li><strong>Oligurie/Anurie</strong></li>
<li><strong>Veränderung der Vitalzeichen:</strong> Hypotonie, Tachykardie oder Bradykardie</li>
</ul>
<h3>Häufige belastende Symptome</h3>
<ul>
<li><strong>Schmerzen</strong></li>
<li><strong>Dyspnoe/Atemnot</strong></li>
<li><strong>Rasselatmung</strong> (terminales Rasseln)</li>
<li><strong>Unruhe/Agitation</strong> (terminale Unruhe)</li>
<li><strong>Angst</strong></li>
<li><strong>Übelkeit/Erbrechen</strong></li>
<li><strong>Mundtrockenheit</strong></li>
</ul>`
},
{
title: "Diagnostik",
html: `<ul>
<li><strong>Klinische Einschätzung</strong> im multiprofessionellen Team</li>
<li><strong>Kritische Reflexion:</strong> Ist der Sterbeprozess irreversibel? Gibt es potenziell reversible Ursachen (Opioidüberdosierung → Naloxon? Hyperkalzämie? Infekt?)?</li>
<li><strong>Überprüfung des Patientenwillens:</strong> Patientenverfügung? Vorsorgevollmacht? Mutmaßlicher Wille? Therapiezieländerung besprochen?</li>
<li><strong>Keine weitere belastende Diagnostik</strong> (Blutentnahmen, Bildgebung etc.) wenn Sterbephase erkannt</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Grundprinzipien</h3>
<ul>
<li><strong>Symptomkontrolle</strong> ist das oberste Therapieziel</li>
<li><strong>Nicht-indizierte Maßnahmen beenden:</strong> Kurative Medikamente absetzen (Antibiotika, Antidiabetika, Statine, Antihypertensiva, etc.)</li>
<li><strong>Monitoring beenden</strong> (Vitalzeichen, SpO₂, Laborkontollen)</li>
<li><strong>Venösen Zugang</strong> nur beibehalten wenn für Symptomkontrolle erforderlich, ggf. s.c.-Zugang (Butterfly)</li>
<li><strong>Flüssigkeits-/Nahrungszufuhr:</strong> Orale Zufuhr nur nach Patientenwunsch. Parenterale Flüssigkeit in der Sterbephase in der Regel beenden (keine Lebensverlängerung, kann Rasselatmung/Ödeme verschlechtern)</li>
</ul>
<h3>Schmerzen</h3>
<ul>
<li><strong>Morphin</strong> 2,5–5 mg s.c./i.v. alle 4h + Bedarfsdosis 1/6 der Tagesdosis alle 1h</li>
<li>Bei vorbestehender Opioidtherapie: Dosisanpassung, Umstellung auf s.c.-Perfusor</li>
<li>Ggf. <strong>Morphin-Perfusor s.c.:</strong> 10–30 mg/24h initial (Titration nach Bedarf)</li>
</ul>
<h3>Dyspnoe</h3>
<ul>
<li><strong>Morphin</strong> 2,5–5 mg s.c./i.v. alle 4h (Morphin ist das wirksamste Medikament gegen Atemnot!)</li>
<li>Sauerstoff nur bei subjektiver Erleichterung (nicht routinemäßig, SpO₂-Messung nicht sinnvoll)</li>
<li>Frischluftzufuhr, Ventilator, beruhigende Begleitung</li>
</ul>
<h3>Rasselatmung (terminales Rasseln)</h3>
<ul>
<li><strong>Butylscopolamin</strong> 20 mg s.c. alle 4–8h (oder Perfusor 60–120 mg/24h s.c.)</li>
<li>Alternativ: Glycopyrroniumbromid 0,2 mg s.c. alle 4–6h</li>
<li>Lagerung (Seitenlage, Oberkörperhochlagerung)</li>
<li>Absaugen nur in Ausnahmefällen (belastend!)</li>
<li>Angehörige aufklären (Rasseln belastet Angehörige mehr als den Patienten)</li>
</ul>
<h3>Unruhe/Agitation (terminale Unruhe)</h3>
<ul>
<li><strong>Midazolam</strong> 2,5–5 mg s.c./i.v. alle 2h bei Bedarf (oder Perfusor 10–30 mg/24h s.c.)</li>
<li>Ggf. Haloperidol 0,5–2 mg s.c. (bei Delir-Komponente)</li>
<li>Reversible Ursachen ausschließen: Harnverhalt? Obstipation? Schmerz? Angst?</li>
</ul>
<h3>Übelkeit/Erbrechen</h3>
<ul>
<li><strong>Haloperidol</strong> 0,5–1,5 mg s.c. 2x/d</li>
<li>Alternativ: Levomepromazin 2,5–5 mg s.c. 1–2x/d</li>
</ul>
<h3>Mundpflege</h3>
<ul>
<li>Regelmäßige Mundpflege (Befeuchtung, Lippenpflege)</li>
<li>Kleine Schlucke Wasser oder Eisstückchen nach Wunsch</li>
</ul>
<h3>Palliative Sedierung (Einzelfallentscheidung!)</h3>
<ul>
<li>Bei therapierefraktärem Leid als Ultima ratio</li>
<li>Interdisziplinäre Entscheidung, informierte Zustimmung</li>
<li>Midazolam-Perfusor s.c./i.v., Titration nach Leidenslinderung</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li>Die <strong>Erkennung der Sterbephase</strong> ist eine wichtige ärztliche Aufgabe</li>
<li>Oberstes Ziel: <strong>Symptomkontrolle und Würde</strong></li>
<li><strong>Morphin</strong> ist das Medikament der Wahl bei Schmerz UND Dyspnoe in der Sterbephase</li>
<li><strong>Nicht-indizierte Therapien beenden</strong> (einschließlich i.v.-Flüssigkeit, Monitoring)</li>
<li><strong>Angehörige einbeziehen</strong>, informieren und begleiten</li>
<li>Dokumentation der Therapiezieländerung, Patientenverfügung, Vorsorgevollmacht</li>
<li>Morphin in palliativer Dosierung führt <strong>nicht</strong> zur Lebensverkürzung (Doppelwirkung vs. Tötung)</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Betreuung dort, wo der Patient sich wohlfühlt:</strong> Station, Palliativstation, Hospiz, Zuhause (mit SAPV)</li>
<li>Verlegung auf Intensivstation ist in der Sterbephase <strong>nicht indiziert</strong></li>
</ul>`
}
],
        stand: "12/24",
        sources: `Leitlinienprogramm Onkologie: S3-Leitlinie Palliativmedizin für Patienten mit einer nicht-heilbaren Krebserkrankung. AWMF-Reg.-Nr. 128-001, 2020.<br>Ellershaw J et al. Care of the dying: a pathway to excellence. Oxford University Press. 2011.`
    });
})();
