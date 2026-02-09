// SOP: Delir
// Kategorie: Neurologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "delir",
        title: "Delir",
        category: "Neurologie",
        catKey: "neuro",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Delir:</strong> Akute, fluktuierende Störung der Aufmerksamkeit und des Bewusstseins mit kognitiver Dysfunktion, die durch eine organische Ursache bedingt ist und sich nicht durch eine vorbestehende Demenz erklären lässt</li>
</ul>
<h3>Formen</h3>
<ul>
<li><strong>Hyperaktives Delir:</strong> Agitation, Unruhe, vegetative Entgleisung, Halluzinationen (ca. 25%)</li>
<li><strong>Hypoaktives Delir:</strong> Apathie, Somnolenz, reduzierte Spontanmotorik (ca. 25%, oft übersehen!)</li>
<li><strong>Gemischtes Delir:</strong> Wechsel zwischen hyper- und hypoaktiven Phasen (ca. 50%)</li>
</ul>`
},
{
title: "Ursachen",
html: `<p>Merkhilfe: <strong>I WATCH DEATH</strong></p>
<ul>
<li><strong>I</strong>nfektionen (Pneumonie, HWI, Sepsis, Meningitis)</li>
<li><strong>W</strong>ithdrawal (Alkohol-, Benzodiazepin-, Opioidentzug)</li>
<li><strong>A</strong>kute metabolische Störung (Elektrolytstörung, Hypoglykämie, Urämie, Leberinsuffizienz)</li>
<li><strong>T</strong>rauma (SHT, Schmerz, OP)</li>
<li><strong>C</strong>NS-Pathologie (Schlaganfall, Blutung, Tumor, Krampfanfall)</li>
<li><strong>H</strong>ypoxie (Lungenarterienembolie, COPD-Exazerbation, Anämie)</li>
<li><strong>D</strong>efizienzen (Thiamin-/B12-Mangel)</li>
<li><strong>E</strong>ndokrinopathien (Hypo-/Hyperthyreose, Addison-Krise)</li>
<li><strong>A</strong>kute vaskuläre Ereignisse (Myokardinfarkt, Schock)</li>
<li><strong>T</strong>oxine/Medikamente (Anticholinergika, Opioide, Benzodiazepine, Steroide, Antibiotika)</li>
<li><strong>H</strong>eavy Metals / Schwermetalle</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Delir ist immer ein <strong>Symptom einer zugrundeliegenden Erkrankung</strong> – die Ursachensuche ist entscheidend!</p></div>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Akuter Beginn</strong> und <strong>fluktuierender Verlauf</strong></li>
<li><strong>Aufmerksamkeitsstörung</strong> (Unfähigkeit, Aufmerksamkeit zu halten/umzulenken)</li>
<li><strong>Bewusstseinsstörung</strong> (Verwirrtheit, Desorientierung)</li>
<li><strong>Kognitive Störung</strong> (Gedächtnis, Sprache, Orientierung)</li>
<li>ggf. <strong>Wahrnehmungsstörungen</strong> (Halluzinationen, Illusionen)</li>
<li>ggf. <strong>psychomotorische Störung</strong> (Agitation oder Apathie)</li>
<li>ggf. <strong>Schlaf-Wach-Rhythmus-Störung</strong></li>
<li>ggf. <strong>vegetative Symptome</strong> (Tachykardie, Schwitzen, Tremor – v.a. bei Entzugsdelir)</li>
</ul>`
},
{
title: "Diagnostik",
html: `<h3>Screening</h3>
<ul>
<li><strong>CAM (Confusion Assessment Method):</strong> Akuter Beginn + fluktuierender Verlauf + Aufmerksamkeitsstörung + ENTWEDER Bewusstseinsveränderung ODER Denkstörung → Delir</li>
<li><strong>4AT-Score:</strong> Schnelles Screening (Wachheit, AMT-4, Aufmerksamkeit, akute Veränderung)</li>
</ul>
<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1x venöser Zugang</li>
<li><strong>BZ-Messung</strong> (Hypoglykämie?)</li>
<li><strong>BGA</strong> (O₂? CO₂? pH? E'lyte? Laktat?)</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte (Na⁺, K⁺, Ca²⁺, Mg²⁺), NW, GOT, GPT, Ammoniak, TSH, Gerinnung, Ethanol, ggf. Medikamentenspiegel (Digoxin, Lithium, Antikonvulsiva), Urin-Status</li>
<li><strong>12-Kanal-EKG</strong></li>
</ul>
<h3>Klinische Untersuchung</h3>
<ul>
<li><strong>Fremdanamnese!</strong> Akuter Beginn? Fluktuierend? Vorbestehende Demenz? Medikamentenänderung? Alkohol-/Benzodiazepinkonsum? Infektzeichen? Sturz/SHT? OP? Schmerzen? Harnverhalt? Obstipation?</li>
<li><strong>Körperliche Untersuchung:</strong> Orientierung? Aufmerksamkeit? Fokal-neurologisches Defizit? Meningismus? Exsikkose? Infektfokus? Harnverhalt? Obstipation? Sturzverletzungen?</li>
</ul>
<h3>Erweiterte Diagnostik (ggf.)</h3>
<ul>
<li><strong>cCT nativ:</strong> bei fokal-neurologischem Defizit, V.a. SHT, Krampfanfall, unklarer Ursache</li>
<li><strong>Urin-Drogenscreening</strong></li>
<li><strong>Rö-Thorax:</strong> bei V.a. Pneumonie</li>
<li><strong>LP:</strong> bei V.a. Meningitis/Enzephalitis</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Kausale Therapie (wichtigste Maßnahme!)</h3>
<ul>
<li>Behandlung der zugrundeliegenden Ursache (Infektion, Elektrolytstörung, Harnverhalt, Obstipation, Schmerz, Entzug, etc.)</li>
<li>Auslösende Medikamente absetzen/umstellen (Anticholinergika!)</li>
</ul>
<h3>Nicht-pharmakologische Maßnahmen</h3>
<ul>
<li>Reorientierung (Uhr, Kalender, vertraute Gegenstände, Bezugspersonen)</li>
<li>Ruhige Umgebung, Tag-Nacht-Rhythmus</li>
<li>Brille/Hörgerät bereitstellen</li>
<li>Frühmobilisation</li>
<li>Adäquate Schmerztherapie</li>
<li>Ausreichende Hydratation und Ernährung</li>
<li>Fixierung vermeiden (Verschlimmerung des Delirs!)</li>
</ul>
<h3>Pharmakologische Therapie (bei ausgeprägter Agitation/Eigengefährdung)</h3>
<ul>
<li><strong>Haloperidol</strong> 0,5–1 mg p.o./i.v. (titrierend, max. 5 mg/d; CAVE: QTc-Verlängerung, EPMS)</li>
<li>Alternativ: <strong>Risperidon</strong> 0,5 mg p.o., <strong>Quetiapin</strong> 25–50 mg p.o.</li>
<li>Bei <strong>Alkoholentzugsdelir:</strong> Benzodiazepine (z.B. Lorazepam 1–2 mg i.v., Diazepam), Clomethiazol (nur auf Station!)</li>
<li>Bei <strong>Parkinson-/Lewy-Body-Demenz:</strong> KEINE klassischen Neuroleptika → Quetiapin bevorzugen</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Benzodiazepine</strong> können ein Delir <strong>verschlechtern</strong> (Ausnahme: Alkohol-/Benzodiazepinentzugsdelir)! Haloperidol ist Mittel der 1. Wahl beim nicht-entzugsbedingten Delir.</p></div>`
},
{
title: "Merke",
html: `<ul>
<li>Delir ist ein <strong>medizinischer Notfall</strong> – die Ursachensuche hat Priorität!</li>
<li><strong>Hypoaktives Delir</strong> wird häufig übersehen – systematisches Screening (CAM, 4AT)!</li>
<li>Häufigste Trigger: <strong>Infektionen, Medikamente, Elektrolytstörungen, Harnverhalt, Schmerz</strong></li>
<li>Nicht-pharmakologische Maßnahmen sind <strong>effektiver als Medikamente</strong></li>
<li>Haloperidol bei Agitation, <strong>keine Benzodiazepine</strong> (außer bei Entzugsdelir)</li>
<li>An <strong>Wernicke-Enzephalopathie</strong> denken bei Alkoholabhängigkeit → Thiamin i.v.!</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> Entzugsdelir (Alkohol, Benzodiazepine), lebensbedrohliche Ursache, schwere Agitation, Intubationspflichtigkeit</li>
<li><strong>Überwachungsstation:</strong> delirante Patienten mit Monitoring-Bedarf</li>
<li><strong>Normalstation:</strong> mildes Delir mit identifizierter, behandelbarer Ursache</li>
</ul>`
}
],
        stand: "12/24",
        sources: `Inouye SK et al. Delirium in elderly people. Lancet. 2014;383(9920):911-22.<br>NICE Guideline CG103: Delirium: prevention, diagnosis and management. 2023.<br>Maldonado JR. Acute Brain Failure: Pathophysiology, Diagnosis, Management, and Sequelae of Delirium. Crit Care Clin. 2017;33(3):461-519.`
    });
})();
