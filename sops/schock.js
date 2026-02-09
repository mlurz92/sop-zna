// SOP: Schock
// Kategorie: Leitsymptom
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "schock",
        title: "Schock",
        category: "Leitsymptom",
        catKey: "leit",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Schock:</strong> Akutes Kreislaufversagen mit inadäquater Gewebeperfusion und zellulärer Sauerstoffschuld, die unbehandelt zu Multiorganversagen und Tod führt</li>
</ul>
<h3>Schockformen</h3>
<div class="table-wrap"><table>
<thead><tr><th>Schockform</th><th>Mechanismus</th><th>Beispiele</th></tr></thead>
<tbody>
<tr><td><strong>Hypovolämisch</strong></td><td>Volumenmangel</td><td>Blutung, Dehydratation, Verbrennung</td></tr>
<tr><td><strong>Kardiogen</strong></td><td>Pumpversagen</td><td>Myokardinfarkt, Myokarditis, Arrhythmie, Klappenversagen</td></tr>
<tr><td><strong>Distributiv</strong></td><td>Vasodilatation</td><td>Sepsis, Anaphylaxie, neurogen, Addison-Krise</td></tr>
<tr><td><strong>Obstruktiv</strong></td><td>Abflussbehinderung</td><td>Lungenarterienembolie, Perikardtamponade, Spannungspneumothorax</td></tr>
</tbody>
</table></div>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Hypovolämisch:</strong> Hämorrhagie (Trauma, GI-Blutung, Aortenruptur), Dehydratation (Diarrhoe, Erbrechen, DKA), Verbrennung, Pankreatitis</li>
<li><strong>Kardiogen:</strong> STEMI/NSTEMI, dekompensierte Herzinsuffizienz, akute Myokarditis, Klappenvitien, Arrhythmien, Kardiomyopathie</li>
<li><strong>Distributiv:</strong> Septischer Schock (häufigste Schockform auf Intensivstation!), anaphylaktischer Schock, neurogener Schock (SCI), Addison-Krise</li>
<li><strong>Obstruktiv:</strong> Massive LAE, Perikardtamponade, Spannungspneumothorax</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Tachykardie</strong> (> 100/min) – Ausnahme: neurogener Schock (Bradykardie!), Betablocker</li>
<li><strong>Hypotonie</strong> (RR syst. < 90 mmHg oder MAP < 65 mmHg)</li>
<li><strong>Kaltschweißigkeit</strong>, marmorierte Haut (CAVE: warme Peripherie bei distributivem Schock!)</li>
<li><strong>Tachypnoe</strong></li>
<li><strong>Oligurie</strong> (< 0,5 ml/kg/h)</li>
<li><strong>Bewusstseinseintrübung</strong> (Unruhe, Verwirrtheit, Somnolenz)</li>
<li><strong>Verlängerte Rekapillarisierungszeit</strong> (> 3 sec)</li>
<li><strong>Laktaterhöhung</strong> (> 2 mmol/l)</li>
</ul>`
},
{
title: "Diagnostik",
html: `<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li><strong>2x großlumige venöse Zugänge</strong></li>
<li><strong>BGA</strong> (Laktat! pH! Hb! Glukose! E'lyte!)</li>
<li><strong>Labor:</strong> BB, CRP, PCT, E'lyte, NW, GOT, GPT, LDH, Lipase, Gerinnung, D-Dimere, hs-Troponin, BNP, Kreuzblut, Blutkulturen</li>
<li><strong>12-Kanal-EKG</strong></li>
<li><strong>POCUS</strong> (RUSH-Protokoll): Perikarderguss? RV-Dilatation? LV-Funktion? VCI? Freie Flüssigkeit? Pneumothorax? B-Linien? Aorta?</li>
<li>ggf. Rö-Thorax, CT, Echokardiographie</li>
</ul>
<div class="callout callout-hinweis"><p><strong>Hinweis:</strong> <strong>POCUS (RUSH-Exam)</strong> ermöglicht eine schnelle Differenzierung der Schockursache am Bett: Pump (Herz) – Tank (Volumenstatus) – Pipes (Gefäße).</p></div>`
},
{
title: "Therapie",
html: `<h3>Allgemeine Sofortmaßnahmen</h3>
<ul>
<li>ABCDE-Schema, Hilfe rufen</li>
<li>Sauerstoff (Ziel-SpO₂ ≥ 94%)</li>
<li>2x großlumige Zugänge, ggf. intraossärer Zugang</li>
<li>Flüssigkeitsbolus 250–500 ml VEL (außer kardiogener Schock!)</li>
</ul>
<h3>Schockformspezifische Therapie</h3>
<div class="table-wrap"><table>
<thead><tr><th>Schockform</th><th>Therapie</th></tr></thead>
<tbody>
<tr><td><strong>Hypovolämisch</strong></td><td>Aggressive Volumengabe, Blutprodukte (Massivtransfusion bei Hämorrhagie 1:1:1), chirurgische Blutstillung, Tranexamsäure</td></tr>
<tr><td><strong>Kardiogen</strong></td><td>Vorsichtige Volumengabe, Dobutamin/Noradrenalin, PCI bei ACS, IABP/Impella, ECMO, Arrhythmie-Behandlung</td></tr>
<tr><td><strong>Septisch</strong></td><td>Volumengabe 30 ml/kg kristalloid, Noradrenalin (MAP ≥ 65), Antibiotika innerhalb 1h, Fokussanierung</td></tr>
<tr><td><strong>Anaphylaktisch</strong></td><td>Adrenalin 0,5 mg i.m., Volumengabe, O₂, Steroide, Antihistaminika (s. SOP Anaphylaxie)</td></tr>
<tr><td><strong>Obstruktiv</strong></td><td>LAE: Lyse; Tamponade: Perikardpunktion; Spannungspneumothorax: Nadeldekompression/Thoraxdrainage</td></tr>
</tbody>
</table></div>
<h3>Vasopressoren/Inotropika</h3>
<ul>
<li><strong>Noradrenalin</strong> (1. Wahl bei den meisten Schockformen): 0,1–1 µg/kg/min, Ziel MAP ≥ 65 mmHg</li>
<li><strong>Dobutamin:</strong> bei kardiogenem Schock (inotrop), 2–20 µg/kg/min</li>
<li><strong>Vasopressin:</strong> 0,01–0,04 U/min als Add-on bei septischem Schock</li>
<li><strong>Adrenalin:</strong> bei Anaphylaxie, Reanimation, refraktärem Schock</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Laktat</strong> ist der wichtigste Parameter zur Beurteilung der Gewebeperfusion</li>
<li><strong>POCUS</strong> zur schnellen Differenzierung der Schockursache</li>
<li><strong>Noradrenalin</strong> = Vasopressor der 1. Wahl (frühzeitig, nicht erst nach Litern Volumen!)</li>
<li>Bei <strong>kardiogenem Schock:</strong> vorsichtige Volumengabe (nicht überlasten!)</li>
<li>Bei <strong>septischem Schock:</strong> Antibiotika innerhalb von 1h, Volumen 30 ml/kg</li>
<li>An <strong>obstruktiven Schock</strong> denken: LAE, Tamponade, Spannungspneumothorax</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation</strong> (alle Schockpatienten)</li>
</ul>`
}
],
        stand: "12/24",
        sources: `Vincent JL et al. Circulatory Shock. N Engl J Med. 2013;369(18):1726-34.<br>Evans L et al. Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021. Intensive Care Med. 2021;47(11):1181-1247.`
    });
})();
