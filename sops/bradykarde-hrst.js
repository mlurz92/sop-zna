// SOP: Bradykarde Herzrhythmusstörungen
// Kategorie: Kardiologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "bradykarde-hrst",
        title: "Bradykarde Herzrhythmusstörungen",
        category: "Kardiologie",
        catKey: "kardio",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Bradykardie:</strong> Herzfrequenz < 60/min</li>
<li><strong>Klinisch relevante Bradykardie:</strong> Herzfrequenz < 50/min atau jede Bradykardie mit hämodynamischer Beeinträchtigung (Hypotonie, Synkope, Bewusstseinseintrübung, Herzinsuffizienz, Schock)</li>
</ul>`
},
{
title: "Ursachen",
html: `<h3>Sinusknotenerkrankungen</h3>
<ul>
<li>Sinusbradykardie, Sinusarrest, SA-Block</li>
<li>Sick-Sinus-Syndrom (Bradykardie-Tachykardie-Syndrom)</li>
</ul>
<h3>AV-Überleitungsstörungen</h3>
<ul>
<li><strong>AV-Block I°:</strong> Verlängertes PQ-Intervall (> 200 ms), jeder P-Welle folgt ein QRS</li>
<li><strong>AV-Block II° Typ Wenckebach:</strong> Progressive PQ-Verlängerung bis Überleitung ausfällt</li>
<li><strong>AV-Block II° Typ Mobitz:</strong> Intermittierender Ausfall der Überleitung ohne progressive PQ-Verlängerung (Schrittmacherindikation!)</li>
<li><strong>AV-Block III°:</strong> Kompletter AV-Block, P-Wellen und QRS-Komplexe dissoziiert (Schrittmacherindikation!)</li>
</ul>
<h3>Ätiologie</h3>
<ul>
<li><strong>Medikamente:</strong> Betablocker, Calciumantagonisten (Verapamil, Diltiazem), Digoxin, Amiodaron, Clonidin, Ivabrandin</li>
<li><strong>Myokardinfarkt:</strong> Inferiorer STEMI (AV-Block II/III durch Ischämie des AV-Knotens)</li>
<li><strong>Degenerativ:</strong> Fibrose des Reizleitungssystems (häufigste Ursache im Alter)</li>
<li><strong>Metabolisch:</strong> Hyperkaliämie, Hypothermie, Hypothyreose</li>
<li><strong>Vagale Reaktion:</strong> Vasovagale Synkope, erhöhter Hirndruck</li>
<li><strong>Entzündlich:</strong> Myokarditis, Endokarditis, Borreliose</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li>ggf. <strong>asymptomatisch</strong> (Zufallsbefund)</li>
<li><strong>Schwindel</strong>, Präsynkope, <strong>Synkope</strong> (Adams-Stokes-Anfall)</li>
<li><strong>Dyspnoe</strong>, Belastungsintoleranz</li>
<li><strong>Müdigkeit</strong>, Schwäche</li>
<li>ggf. <strong>Thoraxschmerz</strong> (bei begleitender Ischämie)</li>
<li>ggf. <strong>Herzinsuffizienzsymptome</strong></li>
<li>ggf. <strong>Schock</strong> (Hypotonie, Kaltschweißigkeit, Bewusstseinseintrübung)</li>
</ul>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1x venöser Zugang</li>
<li><strong>12-Kanal-EKG</strong> (Rhythmusanalyse! P-Wellen? PQ-Zeit? QRS-Breite? AV-Dissoziation?)</li>
<li><strong>EKG-Monitoring</strong> (kontinuierlich)</li>
<li><strong>BGA</strong> (K⁺? Ca²⁺? pH? Laktat?)</li>
<li><strong>Labor:</strong> BB, E'lyte (K⁺, Ca²⁺, Mg²⁺), NW, TSH, hs-Troponin, Digoxin-Spiegel (falls eingenommen), ggf. Borrelien-Serologie</li>
</ul>
<h3>Klinische Untersuchung</h3>
<ul>
<li><strong>Anamnese:</strong> Symptome? Synkope? Schwindel? Belastungsintoleranz? Medikamente (Betablocker, Digoxin, Calciumantagonisten)? Vorbekannte Herzerkrankung? Schrittmacher? Vorerkrankungen?</li>
<li><strong>Körperliche Untersuchung:</strong> HF? RR? Perfusion? JVD (Cannon-A-Waves bei AV-Block III°)? Herzgeräusch?</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Instabile Bradykardie (nach ERC-Algorithmus)</h3>
<p>Zeichen der Instabilität: Schock, Synkope, Myokardischämie, Herzinsuffizienz</p>
<ul>
<li><strong>Atropin</strong> 0,5 mg i.v. alle 3–5 min (max. 3 mg) – 1. Wahl</li>
<li>Bei fehlendem Ansprechen auf Atropin:</li>
<li><strong>Transkutaner Schrittmacher</strong> (Defibrillator-Pads, Demand-Modus, Frequenz 60–80/min, Stromstärke steigern bis Capture) – Analgesie/Sedierung nicht vergessen!</li>
<li><strong>Adrenalin-Perfusor</strong> 2–10 µg/min i.v. sebagai Bridging</li>
<li><strong>Isoprenalin-Perfusor</strong> 5 µg/min i.v. (Alternative)</li>
<li><strong>Transvenöser Schrittmacher</strong> (definitive Überbrückung bis permanenter SM)</li>
</ul>
<h3>Stabile Bradykardie</h3>
<ul>
<li>Monitoring, Ursachensuche und -behandlung</li>
<li>Auslösende Medikamente pausieren/absetzen</li>
<li>Elektrolytstörungen korrigieren</li>
<li>Kardiologisches Konsil (Schrittmacherindikation?)</li>
</ul>
<h3>Schrittmacherindikation (Auswahl)</h3>
<ul>
<li>Symptomatischer AV-Block II° Typ Mobitz dan AV-Block III°</li>
<li>Symptomatisches Sick-Sinus-Syndrom</li>
<li>Alternierender Schenkelblock</li>
</ul>
<div class="callout callout-hinweis"><p><strong>Hinweis:</strong> Atropin adalah <strong>unwirksam</strong> bei infranodalen Blockierungen (AV-Block III° dengan breitem QRS, AV-Block II° Typ Mobitz) → hier frühzeitig transkutaner Schrittmacher!</p></div>`
},
{
title: "Merke",
html: `<ul>
<li>Stabile, asymptomatische Sinusbradykardie dan AV-Block I° erfordern keine Akuttherapie</li>
<li><strong>AV-Block II° Typ Mobitz dan AV-Block III°</strong> sind potenziell lebensbedrohlich → Schrittmacher!</li>
<li><strong>Atropin</strong> wirkt am AV-Knoten, aber <strong>nicht infranodal</strong> → bei breitem QRS unwirksam</li>
<li>Medikamentös induzierte Bradykardie: <strong>Auslöser absetzen!</strong> (Betablocker, Digoxin, Calciumantagonisten)</li>
<li>An <strong>Myokardinfarkt</strong> als Ursache denken (v.a. inferiorer STEMI)</li>
<li>An <strong>Hyperkaliämie</strong> denken (EKG: hohe spitze T-Wellen → QRS-Verbreiterung → Bradykardie)</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> instabile Bradykardie, Schrittmacherpflichtigkeit, AV-Block III°</li>
<li><strong>Überwachungsstation:</strong> symptomatische Bradykardie, AV-Block II° Typ Mobitz, Monitoring</li>
<li><strong>Normalstation:</strong> stabile AV-Block I°/II° Typ Wenckebach, kardiologisches Konsil geplant</li>
<li><strong>Ambulant:</strong> asymptomatische Sinusbradykardie, keine Hochrisiko-EKG-Befunde, gesicherte Wiedervorstellung</li>
</ul>`
}
],
        stand: "12/24",
        sources: `Brignole M et al. 2018 ESC Guidelines for the diagnosis and management of syncope. Eur Heart J. 2018;39(21):1883-1948.<br>Kusumoto FM et al. 2018 ACC/AHA/HRS Guideline on the Evaluation and Management of Patients With Bradycardia and Cardiac Conduction Delay. Circulation. 2019;140(13):e382-e482.<br>ERC Reanimationsleitlinien 2021.`
    });
})();
