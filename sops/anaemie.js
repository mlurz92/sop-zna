// SOP: Anämie
// Kategorie: Hämatologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "anaemie",
        title: "Anämie",
        category: "Hämatologie",
        catKey: "haema",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Anämie:</strong> Abnahme der Hämoglobinkonzentration unter den alters- und geschlechtsspezifischen Normbereich
<ul>
<li>Männer: Hb <13,5 g/dl (Hkt <40%)</li>
<li>Frauen: Hb <12,0 g/dl (Hkt <37%)</li>
</ul>
</li>
</ul>`
},
{
title: "Einteilung",
html: `<h3>Nach MCV (mittleres Korpuskuläres Volumen)</h3>
<ul>
<li><strong>Mikrozytär (MCV <80 fl):</strong> Eisenmangel, Thalassämie, Anämie bei chronischen Erkrankungen (früh), Sideroblastäre Anämie</li>
<li><strong>Normozytär (MCV 80–100 fl):</strong> Anämie bei chronischen Erkrankungen, akuter Blutverlust, Hämolyse, Knochenmarkserkrankungen, Niereninsuffizienz</li>
<li><strong>Makrozytär (MCV >100 fl):</strong> Vitamin-B12-/Folsäuremangel, Alkohol, Lebererkrankung, Hypothyreose, medikamentös (z.B. Zytostatika), myelodysplastisches Syndrom</li>
</ul>
<h3>Nach Pathomechanismus</h3>
<ul>
<li><strong>Produktionsstörung:</strong> Eisenmangel, Vitamin-B12-/Folsäuremangel, Knochenmarkserkrankungen, Niereninsuffizienz, Anämie bei chronischen Erkrankungen</li>
<li><strong>Verlust:</strong> akute Blutung, chronische Blutung (GI, gynäkologisch)</li>
<li><strong>Abbau (Hämolyse):</strong> korpuskulär (Sphärozytose, Sichelzellanämie, Thalassämie) oder extrakorpuskulär (mechanisch, immunologisch, infektiös)</li>
</ul>`
},
{
title: "Ursachen",
html: `<h3>Häufige Ursachen</h3>
<ul>
<li><strong>Eisenmangelanämie:</strong> chronischer Blutverlust (GI, Menstruation), Malabsorption, erhöhter Bedarf (Schwangerschaft)</li>
<li><strong>Anämie bei chronischen Erkrankungen (ACD):</strong> Entzündungen, Infektionen, Malignome, Autoimmunerkrankungen</li>
<li><strong>Niereninsuffizienz:</strong> Erythropoetinmangel</li>
<li><strong>Vitamin-B12-Mangel:</strong> perniziöse Anämie (Autoimmungastritis), Malabsorption, vegane Ernährung</li>
<li><strong>Folsäuremangel:</strong> Mangelernährung, Malabsorption, erhöhter Bedarf (Schwangerschaft), Alkohol</li>
<li><strong>Hämolytische Anämie:</strong> Autoimmunhämolyse, mechanisch (künstliche Herzklappe), Sphärozytose, Sichelzellanämie</li>
<li><strong>Knochenmarkserkrankungen:</strong> Leukämie, Myelodysplastisches Syndrom, Aplasie, Infiltration (Metastasen)</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Allgemeine Anämiezeichen:</strong> Müdigkeit, Leistungsminderung, Schwäche, Blässe, Kopfschmerzen, Schwindel, Tinnitus</li>
<li><strong>Kardiovaskulär:</strong> Tachykardie, Palpitationen, Belastungsdyspnoe, Angina pectoris (bei KHK), Herzinsuffizienz</li>
<li><strong>Neurologisch:</strong> Konzentrationsstörungen, Synkope</li>
</ul>
<h3>Symptome je nach Ursache</h3>
<ul>
<li><strong>Eisenmangel:</strong> Haarausfall, Brüchige Nägel, Koilonychie (Löffelnägel), Mundwinkelrhagaden, Atrophie der Zungenschleimhaut, Pruritus</li>
<li><strong>Vitamin-B12-Mangel:</strong> Glossitis (Hunter-Zunge), neurologische Symptome (Parästhesien, Ataxie, Pyramidenbahnzeichen, Demenz)</li>
<li><strong>Hämolyse:</strong> Ikterus, dunkler Urin, Splenomegalie</li>
</ul>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + Vitalparameter</li>
<li>venöser Zugang</li>
<li><strong>Labor:</strong>
<ul>
<li><strong>Basis:</strong> BB (Hb, Hkt, MCV, MCH, Retikulozyten), E'lyte, NW</li>
<li><strong>Eisenstoffwechsel:</strong> Eisen, Ferritin, Transferrin, Transferrinsättigung (TSAT)</li>
<li><strong>Vitamine:</strong> Vitamin B12, Folsäure</li>
<li><strong>Hämolyselabor:</strong> LDH, indirektes Bilirubin, Haptoglobin</li>
<li><strong>Nierenfunktion:</strong> Kreatinin, Harnstoff</li>
<li><strong>Entzündung:</strong> CRP</li>
</ul>
</li>
</ul>
<h3>Klinische Untersuchung</h3>
<ul>
<li><strong>Anamnese:</strong> Müdigkeit? Leistungsminderung? Blutungen (Meläna, Hämatemesis, Menorrhagie)? Ernährung (vegan)? Alkohol? Vorerkrankungen? Medikamente? Gewichtsverlust?</li>
<li><strong>Körperliche Untersuchung:</strong> Blässe? Ikterus? Tachykardie? Herzgeräusch? Splenomegalie? Lymphknoten? Mundwinkelrhagaden? Glossitis? Nagelveränderungen? Stuhl auf okkultes Blut?</li>
</ul>
<h3>Erweiterte Diagnostik (je nach Verdacht)</h3>
<ul>
<li><strong>Bei Eisenmangel:</strong> Gastroskopie (Ulcus, Karzinom?), Koloskopie (Karzinom, Angiodysplasie?), H.pylori-Test</li>
<li><strong>Bei V.a. Hämolyse:</strong> Coombs-Test (direkt/indirekt), Ausstrich (Fragmentozyten, Sphärozyten), Osmotische Resistenz</li>
<li><strong>Bei V.a. Knochenmarkserkrankung:</strong> Knochenmarkspunktion/Biopsie, Immunphänotypisierung</li>
<li><strong>Bei V.a. perniziöse Anämie:</strong> Anti-Intrinsic-Factor-AK, Anti-Parietalzellen-AK, Gastrin</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Allgemein</h3>
<ul>
<li>Kausale Therapie der Grunderkrankung</li>
<li>Absetzen auslösender Medikamente</li>
</ul>
<h3>Eisenmangelanämie</h3>
<ul>
<li><strong>Oral:</strong> Eisen(II)-sulfat oder Eisen(II)-glycin-sulfat 100–200 mg/d (nüchtern, mit Vitamin C zur Absorptionssteigerung)</li>
<li><strong>i.v.:</strong> bei Malabsorption, Unverträglichkeit, Notwendigkeit schnellerer Substitution (z.B. Eisen(III)-carboxymaltose)</li>
<li>Dauer: 3–6 Monate (Ferritin-Depots auffüllen!)</li>
</ul>
<h3>Vitamin-B12-Mangel</h3>
<ul>
<li><strong>Initial:</strong> Cyanocobalamin oder Hydroxycobalamin 1000 µg i.m. täglich für 7 Tage</li>
<li><strong>Erhaltung:</strong> 1000 µg i.m. alle 4 Wochen oder 1000 µg p.o. täglich (bei normaler Resorption)</li>
</ul>
<h3>Folsäuremangel</h3>
<ul>
<li>Folsäure 5 mg/d p.o. für 4 Wochen, dann 5 mg/Woche</li>
<li>CAVE: Vorher Vitamin-B12-Mangel ausschließen! (Folsäure kann neurologische Symptome bei B12-Mangel aggravieren!)</li>
</ul>
<h3>Anämie bei Niereninsuffizienz</h3>
<ul>
<li>Erythropoese-stimulierende Agenzien (ESA) + Eisen</li>
</ul>
<h3>Transfusion</h3>
<ul>
<li><strong>Erythrozytenkonzentrat (EK):</strong> bei symptomatischer Anämie (Dyspnoe, Angina, Tachykardie) oder Hb <7–8 g/dl (individuell)</li>
<li>CAVE: Transfusionsindikation bei kardiovaskulären Erkrankungen großzügiger stellen (Hb <8–10 g/dl)</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Bei akuter Blutung: Volumenersatz und Transfusion nach klinischer Einschätzung, nicht nach Hb-Wert! (Hb korreliert nicht mit Blutverlust!)</p></div>`
},
{
title: "Merke",
html: `<ul>
<li><strong>MCV</strong> ist der wichtigste Parameter zur Klassifikation der Anämie</li>
<li><strong>Retikulozyten</strong> helfen zwischen Produktionsstörung (↓) und Verlust/Hämolyse (↑) zu unterscheiden</li>
<li><strong>Ferritin</strong> ist der sensitivste Parameter für Eisenmangel (CAVE: Akute-Phase-Protein – bei Entzündung falsch hoch!)</li>
<li><strong>Vitamin-B12-Mangel</strong> kann irreversible neurologische Schäden verursachen – rechtzeitig behandeln!</li>
<li><strong>Folsäuregabe</strong> bei Vitamin-B12-Mangel kann die Anämie bessern, aber neurologische Symptome verschlimmern!</li>
<li>Bei Eisenmangel immer nach der <strong>Blutungsquelle</strong> suchen (GI, gynäkologisch)</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Ambulant:</strong> stabile Patienten mit leichter Anämie ohne akute Blutung</li>
<li><strong>Stationär:</strong> symptomatische Anämie, Notwendigkeit von Transfusionen, akute Blutung, schwere Anämie (Hb <8 g/dl), hämolytische Krise, unklare Anämie mit Verdacht auf maligne Grunderkrankung</li>
</ul>`
}
],
        stand: "12/24",
        sources: `Dignass A et al. S3-Leitlinie Eisenmangelanämie. AWMF-Register-Nr. 037-011, 2023.<br>
Stabler SP. Clinical practice. Vitamin B12 deficiency. N Engl J Med. 2013;368(2):149-60.<br>
Gafter-Gvili A et al. Anemia in the elderly. Clin Interv Aging. 2024;19:1-15.`
    });
})();
