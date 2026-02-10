(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "hyponatriaemie",
        title: "Hyponatriämie",
        category: "Metabolisch",
        catKey: "metab",
        sections: [
            {
                title: "Definition",
                html: `<ul>
                    <li><strong>Hyponatriämie:</strong> Serum-Natrium &lt; 135 mmol/l</li>
                    <li><strong>Milde Hyponatriämie:</strong> 134 - 130 mmol/l</li>
                    <li><strong>Moderate Hyponatriämie:</strong> 129 - 125 mmol/l</li>
                    <li><strong>Schwere Hyponatriämie:</strong> &lt; 125 mmol/l</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p><strong>Akuität:</strong></p>
                    <ul>
                        <li><strong>Akute Hyponatriämie:</strong> &lt; 48 h (laborchemisch dokumentiert bzw. Hinweise auf akutes Geschehen)</li>
                        <li><strong>Chronische Hyponatriämie:</strong> ≥ 48 h (bzw. Dauer unklar)</li>
                    </ul>
                </div>`
            },
            {
                title: "Ursachen",
                html: `<ul>
                    <li><strong>Mangelnde Natrium-Zufuhr:</strong> "Tea &amp; Toast-Diet", Alkoholiker</li>
                    <li><strong>Polydipsie:</strong> psychogen, Marathonläufer, "beer-potomania"</li>
                    <li><strong>Medikamente:</strong> Thiazide, RAAS-Hemmer, SSRI, Antipsychotika</li>
                    <li><strong>Drogen:</strong> Ecstasy, etc.</li>
                    <li><strong>SIADH:</strong> paraneoplastisch, Lungenerkrankungen, ZNS-Erkrankungen, Medikamente, Sonstige</li>
                    <li><strong>Organinsuffizienz:</strong> Herzinsuffizienz, Niereninsuffizienz, Leberzirrhose</li>
                    <li><strong>Vermehrte Natrium-Verluste:</strong> Erbrechen, Diarrhoe</li>
                    <li><strong>Endokrin:</strong> Hypothyreose, NNR-Insuffizienz, zerebrales Salzverlustsyndrom</li>
                </ul>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li><strong>Subklinisch:</strong> Gangunsicherheit, erhöhtes Sturzrisiko, Osteoporose, Adynamie, kognitive Leistungseinbußen</li>
                    <li><strong>Mittelschwere Symptome:</strong> Übelkeit (ohne Erbrechen), Kopfschmerzen, Verwirrtheit</li>
                    <li><strong>Schwere Symptome:</strong> Schwere Vigilanzminderung, Erbrechen, Krampfanfall, Ateminsuffizienz</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur)</li>
                    <li>1x venöser Zugang</li>
                    <li><strong>Venöse BGA:</strong> (Natrium? Glukose?)</li>
                    <li><strong>Labor:</strong> BB, E'lyte, NW, Serumosmolalität, Glukose, TSH, ggf. Leberwerte, NT-proBNP, Cortisol, Copeptin</li>
                    <li><strong>DK-Anlage</strong> (bei schwerer Hyponatriämie erwägen) und <strong>Urinuntersuchung</strong> (Urinosmolalität, Natrium im Urin)</li>
                    <li><strong>Anamnese:</strong> Symptome? Medikamente? Vorerkrankungen? B-Symptomatik? Polydipsie? Ernährung? Erbrechen? Diarrhoe?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Volumenstatus? Hinweise auf Begleiterkrankungen? Neurologische Auffälligkeiten?</li>
                    <li><strong>POCUS:</strong> Volumenstatus: VCI? Ventrikelfüllung? Pleuraergüsse? Vermehrte pulmonale B-Linien?</li>
                    <li><strong>ggf. cCT:</strong> z.A. einer anderen Ursache bei Vigilanzminderung</li>
                </ul>`
            },
            {
                title: "Therapie",
                html: `<p><strong>Ursachen beheben:</strong> Medikamente anpassen, exzessive Flüssigkeitsaufnahme stoppen, Grunderkrankung behandeln, etc.</p>
                
                <h3>Therapie in Abhängigkeit vom Volumenstatus:</h3>
                <ul>
                    <li><strong>Bei Hypovolämie:</strong> NaCl 0,9% oder VEL (0,5-1 ml/KG/h bis Euvolämie, bei hämodynamischer Instabilität forcierte Volumengabe)</li>
                    <li><strong>Bei Normovolämie:</strong> Trinkmengenbeschränkung &lt; 1 l/d</li>
                    <li><strong>Bei Hypervolämie:</strong> Trinkmengenbeschränkung &lt; 1 l/d + Schleifendiuretika (Furosemid i.v.)</li>
                </ul>

                <h3>Notfalltherapie</h3>
                <p><em>(Bei Hyponatriämie mit (mittel-) schweren Symptomen - unabhängig von Akuität):</em></p>
                <ul>
                    <li><strong>100 ml NaCl 3%</strong> (Herstellung: 60 ml 0,9% NaCl + 40 ml 5,85% NaCl) <strong>in 10 Minuten i.v.</strong></li>
                    <li><strong>ggf. 1-2x wiederholen</strong> (ein 100 ml 3% NaCl-Bolus erhöht den Natriumspiegel um ca. 2 mmol/l)</li>
                    <li><strong>Ziel:</strong> Symptombesserung durch Anheben des Natriumspiegels um 5 mmol/l in 1-2 h</li>
                    <li><strong>Engmaschige Natriumkontrollen:</strong> nach jeder Infusion, dann nach 6, 12, 24 h, täglich</li>
                    <li>Bei fehlender Symptombesserung trotz Natriumanstieg: Infusion beenden, Differentialdiagnosen bedenken</li>
                </ul>
                <div class="callout callout-cave">
                    <p><strong>CAVE:</strong> Insbesondere bei Na &lt; 125 mmol/l: Gefahr der Überkorrektur durch freie Wasserausscheidung &rarr; Urinmonitoring. 
                    <br><strong>Bei Überkorrektur:</strong> NaCl-Infusionen stoppen, Glukose 5% i.v. (10 ml/kg KG über 1 h) bzw. Desmopressin (2 µg i.v.) erwägen.</p>
                </div>
                <div class="callout callout-wichtig">
                    <p><strong>Maximaler Natrium-Anstieg:</strong> 10 mmol/l in ersten 24 h, 8 mmol/l alle weiteren 24 h bis Natrium 130 mmol/l!</p>
                </div>`
            },
            {
                title: "Diagnostischer Algorithmus",
                html: `<p>Vorgehen bei laborchemischer Hyponatriämie:</p>
                <ol>
                    <li><strong>Bestimmung der Serumosmolalität:</strong>
                        <ul>
                            <li><strong>Erhöht:</strong> Hypertone Hyponatriämie (Ursache: Glukose, Mannitol etc.)</li>
                            <li><strong>Normal:</strong> Isotone Hyponatriämie (Pseudohyponatriämie durch Triglyzeride, Cholesterin, Proteine)</li>
                            <li><strong>Erniedrigt (&lt; 275 mOsm/kg):</strong> Hypotone Hyponatriämie &rarr; <em>Weiter mit Schritt 2</em></li>
                        </ul>
                    </li>
                    <li><strong>Bestimmung der Urinosmolalität:</strong>
                        <ul>
                            <li><strong>≤ 100 mOsm/kg:</strong> Primäre Polydipsie, niedriger Salzkonsum, "Beer Potomania"</li>
                            <li><strong>&gt; 100 mOsm/kg:</strong> &rarr; <em>Weiter mit Schritt 3 (Urin-Natrium)</em></li>
                        </ul>
                    </li>
                    <li><strong>Bestimmung Natrium im Urin:</strong>
                        <ul>
                            <li><strong>≤ 30 mmol/l (Niedriges effektives arterielles Blutvolumen):</strong>
                                <ul>
                                    <li><strong>Extrazelluläres Volumen erhöht (Ödeme):</strong> Herzinsuffizienz, Leberzirrhose, Nephrotisches Syndrom</li>
                                    <li><strong>Extrazelluläres Volumen vermindert (Exsikkose):</strong> Durchfall und Erbrechen, "Third Spacing", zurückliegende Diuretikatherapie</li>
                                </ul>
                            </li>
                            <li><strong>&gt; 30 mmol/l:</strong>
                                <ul>
                                    <li><strong>Bei Diuretikaeinnahme / Nierenerkrankung:</strong> Nicht aussagekräftig</li>
                                    <li><strong>Ohne Diuretika / Nierenerkrankung:</strong>
                                        <ul>
                                            <li><strong>Extrazelluläres Volumen vermindert (Exsikkose):</strong> Erbrechen, primäre NNR-Insuffizienz, renaler Salzverlust, Zerebrales Salzverlustsyndrom, "verborgene" Diuretika</li>
                                            <li><strong>Extrazelluläres Volumen normal:</strong> SIADH, sekundäre NNR-Insuffizienz, (Hypothyreose), "verborgene" Diuretika</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ol>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li>Bei unglaubwürdig niedrigem Natrium: Immer schnelle Kontrolle mit BGA (Abnahmefehler?)</li>
                    <li><strong>Bei zu schnellem Ausgleich:</strong> Gefahr eines Hirnödems mit Einklemmung (insbesondere Kinder, junge Erwachsene) vs. Osmotische Demyelinisierungssyndrome (ODS) bei zu raschem Anstieg (> 12 mmol/24h)</li>
                    <li><strong>Urinosmolalität &lt; Serumosmolalität:</strong> spricht für eine renale Genese</li>
                    <li><strong>Korrigiertes Natrium bei Hyperglykämie:</strong> Na⁺ ist um <strong>2,4 mmol/l höher</strong> pro BZ-Erhöhung um 100 mg/dl (ab 100 mg/dl). <br><em>Beispiel: Na⁺ 125 mmol/l, BZ 600 mg/dl &rarr; korrigiertes Na⁺ 137 mmol/l.</em></li>
                    <li>Hyponatriämie ist häufig die Endstrecke bei schweren kognitiven Erkrankungen/Dysphagie &rarr; Therapieziele definieren</li>
                </ul>`
            },
            {
                title: "Disposition",
                html: `<ul>
                    <li><strong>Natrium &lt; 120 mmol/l</strong> oder <strong>(mittel-) schwere Symptome:</strong> Überwachungsstation (IMC/ICU)</li>
                </ul>`
            }
        ],
        stand: "12/22",
        sources: `Spasovski G et al. Clinical practice guideline on diagnosis and treatment of hyponatraemia. Eur J Endocrinol 2014, 170: G1–47.
        <br>Schumann U et al. Einfach und Praktisch: Hyponatriämie in der Notaufnahme. Notfall Rettungsmed. Ausgabe 5/2019.
        <br>Ayus JC et al. Misconceptions and Barriers to the Use of Hypertonic Saline to Treat Hyponatremic Encephalopathy. Front Med (Lausanne). 2019 Mar 15;6:47.
        <br>Moritz ML et al. 100 cc 3% sodium chloride bolus: a novel treatment for hyponatremic encephalopathy. Metab Brain Dis. 2010 Mar;25(1):91-6.`
    });
})();