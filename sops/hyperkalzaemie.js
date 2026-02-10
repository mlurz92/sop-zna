(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "hyperkalzaemie",
        title: "Hyperkalzämie",
        category: "Metabolisch",
        catKey: "metab",
        sections: [
            {
                title: "Definition",
                html: `<p><strong>Hyperkalzämie:</strong> Serumkalzium > 2,6 mmol/l bzw. ionisiertes Kalzium > 1,3 mmol/l.</p>
                <ul>
                    <li><strong>Leichte Hyperkalzämie:</strong> Serumkalzium 2,6 - 2,9 mmol/l</li>
                    <li><strong>Mittlere Hyperkalzämie:</strong> Serumkalzium 3,0 - 3,5 mmol/l</li>
                    <li><strong>Schwere Hyperkalzämie:</strong> Serumkalzium > 3,5 mmol/l</li>
                </ul>`
            },
            {
                title: "Ursachen",
                html: `<h3>Nebenschilddrüsenbedingt:</h3>
                <ul>
                    <li>Primärer und tertiärer Hyperparathyreoidismus</li>
                    <li>Familiäre hypokalziurische Hyperkalzämie (FHH)</li>
                </ul>
                <h3>Nicht nebenschilddrüsenbedingt:</h3>
                <ul>
                    <li><strong>Tumoren:</strong> (häufigste Ursache neben pHPT)</li>
                    <li>Sarkoidose, Hyperthyreose, Immobilisation</li>
                    <li><strong>Medikamente:</strong> Thiazide, Lithium, Vitamin D, Vitamin A</li>
                    <li>Milch-Alkali-Syndrom</li>
                </ul>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li><strong>Renal:</strong> Polyurie, Exsikkose, Niereninsuffizienz, Nephrolithiasis</li>
                    <li><strong>Gastrointestinal:</strong> Übelkeit, Erbrechen, Obstipation, Pankreatitis, peptische Ulcera</li>
                    <li><strong>Kardial:</strong> QTc-Zeit-Verkürzung, Arrhythmien, AV-Block</li>
                    <li><strong>Neuromuskulär:</strong> Muskelschwäche, Paresen</li>
                    <li><strong>ZNS/Psychiatrisch:</strong> Verwirrtheit, Psychose, Depression, Koma</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur)</li>
                    <li>1x venöser Zugang</li>
                    <li><strong>Venöse BGA:</strong> (Ionisiertes Kalzium? Pseudohyperkalzämie ausschließen!)</li>
                    <li><strong>Labor:</strong> NW, Elyte inkl. Kalzium, Phosphat, Albumin, 25(OH)-Vitamin D3, 1,25(OH)2-Vitamin D3, PTH, PTHrP, TSH, ggf. Serumelektrophorese</li>
                    <li><strong>12-Kanal-EKG:</strong> (QTc-Zeit-Verkürzung? Herzrhythmusstörungen?)</li>
                    <li><strong>Anamnese:</strong> Symptome? Vorerkrankungen? Tumoren? B-Symptomatik? Medikamente? Vitamin-D-Einnahme? Familienanamnese?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Volumenstatus? Neuropsychiatrische Auffälligkeiten? Hinweise auf Tumorerkrankung?</li>
                    <li><strong>ggf. weitere Diagnostik:</strong> 24 h-Sammelurin (Kalzium/Kreatinin-Clearance), Tumorsuche (Röntgen-Thorax, Abdomensonografie, etc.)</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p><strong>Merke:</strong> Bei Abweichungen des Serumkalziums immer <strong>ionisiertes Kalzium</strong> in der Blutgasanalyse betrachten!</p>
                </div>`
            },
            {
                title: "Therapie",
                html: `<p><strong>Ursachen beheben:</strong> Parathyreoidektomie bei pHPT, Tumorbehandlung, Absetzen auslösender Medikamente.</p>
                
                <h3>Leichte Hyperkalzämie (2,6 - 2,9 mmol/l)</h3>
                <p>Oder mittlere Hyperkalzämie, wenn chronisch und asymptomatisch:</p>
                <ul>
                    <li>Ausreichende orale Hydrierung i.d.R. ausreichend.</li>
                </ul>

                <h3>Mittlere Hyperkalzämie (3,0 - 3,5 mmol/l)</h3>
                <p>Wenn akut oder symptomatisch:</p>
                <ul>
                    <li><strong>Forcierte Volumengabe:</strong> 4-6 l NaCl 0,9%/d i.v., z.B. als Bolus von 1-2 l, dann 200 ml/h i.v. (engmaschige Elektrolytkontrollen!).
                        <br><strong>CAVE:</strong> An Volumenstatus, Komorbiditäten und kardiale Leistungsfähigkeit anpassen!</li>
                    <li><strong>Schleifendiuretika:</strong> (z.B. Furosemid 20 mg i.v. 1-1-1) <em>nur</em> bei drohender Volumenüberladung.</li>
                    <li><strong>Antiresorptive Therapie:</strong> (Wirkeintritt nach Tagen)
                        <ul>
                            <li><strong>Denosumab</strong> 120 mg s.c.</li>
                            <li><strong>Zoledronat (Zometa®)</strong> 4 mg über 15 min i.v. (Nebenwirkungen: aseptische Kiefernekrose, Arzneimittelfieber, nephrotoxisch; bei vitaler Bedrohung auch bei GFR < 30 ml/min möglich).</li>
                        </ul>
                    </li>
                </ul>

                <h3>Schwere Hyperkalzämie (> 3,5 mmol/l)</h3>
                <ul>
                    <li>Maßnahmen der mittleren Hyperkalzämie PLUS:</li>
                    <li><strong>Calcitonin:</strong> 100 IE alle 6 h s.c./i.m. (Wirkeintritt 4-6 h, Wirkverlust nach ca. 48 h; NW: Übelkeit, Flush).</li>
                    <li><strong>Dialyse erwägen:</strong> mit calciumfreiem Dialysat (Rücksprache mit Nephrologie).</li>
                </ul>

                <h3>Sonstiges (Spezialfälle)</h3>
                <p>Bei granulomatösen Erkrankungen, Lymphomen, Multiplem Myelom, Vitamin D-Intoxikation:</p>
                <ul>
                    <li><strong>Glukokortikoide:</strong> z.B. 200 mg Hydrocortison/d via Perfusor i.v. für 3-5 d oder 20 mg Prednisolon p.o. für 7 d.</li>
                </ul>`
            },
            {
                title: "Diagnostischer Algorithmus",
                html: `<p>Vorgehen bei bestätigter Hyperkalzämie:</p>
                <ol>
                    <li><strong>Bestimmung Parathormon (PTH):</strong>
                        <ul>
                            <li><strong>PTH > 20 pg/ml (PTH-abhängig):</strong> Bestimmung Kalzium/Kreatinin-Clearance-Ratio.
                                <ul>
                                    <li>Ratio < 0,01 &rarr; <strong>Familiäre hypokalziurische Hyperkalzämie (FHH)</strong>.</li>
                                    <li>Ratio > 0,02 &rarr; <strong>Primärer Hyperparathyreoidismus</strong>.</li>
                                </ul>
                            </li>
                            <li><strong>PTH < 20 pg/ml (PTH-unabhängig):</strong> Bestimmung von PTHrP, 25(OH)-Vit. D3, 1,25(OH)₂-Vit. D3.
                                <ul>
                                    <li>PTHrP &uarr; &rarr; <strong>Paraneoplastisch</strong>.</li>
                                    <li>25(OH)-Vit. D3 &uarr; &rarr; <strong>Vitamin D-Intoxikation</strong>.</li>
                                    <li>1,25(OH)₂-Vit. D3 &uarr; &rarr; <strong>Lymphome, Sarkoidose</strong>.</li>
                                    <li>Alles normal &rarr; Suche nach <strong>Multiplem Myelom, Immobilisation, Hyperthyreose, Vitamin A-Intoxikation</strong>.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ol>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li>Jede unklare Hyperkalzämie soll abgeklärt werden (DGIM - Klug entscheiden).</li>
                    <li>90 % der Hyperkalzämien sind bedingt durch einen primären Hyperparathyreoidismus oder eine maligne Erkrankung.</li>
                </ul>`
            },
            {
                title: "Disposition",
                html: `<ul>
                    <li><strong>Überwachungsstation (IMC/ICU):</strong> Kalzium > 3 (akut) bzw. > 3,5 mmol/l.</li>
                </ul>`
            }
        ],
        stand: "10/24",
        sources: `Walsh J et al. SOCIETY FOR ENDOCRINOLOGY ENDOCRINE EMERGENCY GUIDANCE: Emergency management of acute hypercalcaemia in adult patients. Endocr Connect. 2016.
        <br>Schumann C et al. Hyperkalzämie. Der Onkologe 2018.
        <br>Renaghan A et al. Hypercalcemia: etiology and management. Nephrol Dial Transplant 2018.
        <br>LeGrand SB et al. Narrative review: furosemide for hypercalcemia: an unproven yet common practice. Ann Intern Med. 2008.
        <br>Reagan P et al. Approach to diagnosis and treatment of hypercalcemia in a patient with malignancy. Am J Kidney Dis. 2014.
        <br>Fuleihan G E-H et al. Treatment of Hypercalcemia of Malignancy in Adults: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab. 2023.`
    });
})();