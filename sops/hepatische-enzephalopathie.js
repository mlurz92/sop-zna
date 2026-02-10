(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "hepatische-enzephalopathie",
        title: "Hepatische Enzephalopathie",
        category: "Gastroenterologie",
        catKey: "gi",
        sections: [
            {
                title: "Definition",
                content: `<p><strong>Hepatische Enzephalopathie (HE):</strong> Summe aller Störungen des Zentralen Nervensystems, die als Komplikation akuter oder chronischer Lebererkrankungen und/oder portosystemischer Kollateralkreisläufe auftreten können.</p>`
            },
            {
                title: "Ursachen (Triggerfaktoren)",
                content: `<ul>
                    <li><strong>Infektionen:</strong> SBP, Harnwegsinfekt, Pneumonie, etc.</li>
                    <li><strong>Gastrointestinale Blutung</strong></li>
                    <li><strong>Obstipation</strong></li>
                    <li><strong>Elektrolytentgleisungen:</strong> Hyponatriämie, Hypokaliämie</li>
                    <li><strong>Medikamente:</strong> Diuretika, PPI, Benzodiazepine, etc.</li>
                    <li><strong>Exsikkose:</strong> Parazentese, abführende Maßnahmen, etc., AKI</li>
                    <li><strong>Andere:</strong> Operation, Trauma, TIPS, Eiweißexzess</li>
                </ul>`
            },
            {
                title: "Symptome",
                content: `<h3>Neurologische Symptome</h3>
                <ul>
                    <li><strong>Geänderte Bewusstseinslage:</strong> Tagesmüdigkeit, Somnolenz bis zum Koma</li>
                    <li>Asterixis (Flapping Tremor), gestörte Feinmotorik, Ataxie, etc.</li>
                </ul>
                <h3>Neuropsychiatrische Symptome</h3>
                <ul>
                    <li>Stimmungsschwankungen, Konzentrationsdefizite</li>
                    <li>Verwahrlosungstendenz, Persönlichkeitsveränderungen, etc.</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                content: `<ul>
                    <li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur)</li>
                    <li>1x venöser Zugang</li>
                    <li><strong>Venöse BGA:</strong> (Hb? pH? BE? Elektrolyte? Laktat? Glukose?)</li>
                    <li><strong>Labor:</strong> BB, CRP, E'lyte, NW, GOT, GPT, AP, LDH, Bilirubin, Gerinnung, <strong>Ammoniak</strong>, ggf. PCT</li>
                    <li><strong>Anamnese:</strong> Symptome? Infektion? Obstipation? Unklare Stürze? Blutungsstigmata? Lebererkrankung bekannt? Medikamente? Eiweißexzess?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Leberhautzeichen? Exsikkose? <strong>Flapping Tremor?</strong> Neurologische Auffälligkeiten? Blut/Teerstuhl in DRU?</li>
                    <li><strong>POCUS:</strong> Zeichen der Leberzirrhose? Portosystemische Shunts? Obstipation? Volumenstatus? Aszites?</li>
                    <li><strong>cCT:</strong> Ausschluss anderer Differentialdiagnosen bei unklarer neurologisch-psychiatrischer Symptomatik</li>
                </ul>
                <div class="callout callout-hinweis">
                    <p><strong>Ausschluss Differentialdiagnosen:</strong> Metabolisch (BZ, Schilddrüse, Keto-/Laktatazidose), Intoxikationen (Alkohol, Drogen, Medikamente), Wernicke, Epilepsie, ICB, Raumforderung, Psychose.</p>
                </div>`
            },
            {
                title: "Therapie",
                content: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li>Stabilisierung der Vitalfunktionen gemäß ABCDE-Schema</li>
                    <li><strong>Ursachen beheben:</strong> Sanierung von Infektfokus, Stillung von Blutungen, Ausgleich von Elektrolyten/Volumen</li>
                    <li><strong>Ernährung:</strong> 30-35 kcal/kg KG/d, <strong>Eiweiß: 1,2-1,5 g/kg ideales KG</strong></li>
                    <li><strong>Häufige kleine Mahlzeiten:</strong> Vermeidung von Nüchternphasen > 4-6 h</li>
                    <li>ggf. Magensonde zur enteralen Ernährung (Vorsicht bei Ösophagusvarizen; bei reduzierten Schutzreflexen erst nach Intubation)</li>
                </ul>
                <h3>Medikamentöse Therapie</h3>
                <ul>
                    <li><strong>Lactulose:</strong> 10-30 ml p.o. 2-3 ×/d (Ziel: 2 × täglich weicher Stuhlgang)</li>
                    <li><strong>Lactulose rektal:</strong> (300 ml Lactulose mit 700 ml Wasser), insbesondere wenn orale Gabe nicht möglich</li>
                    <li><strong>Rifaximin (Xifaxan®):</strong> 550 mg 1-0-1 p.o. erwägen (bei Unverträglichkeit von Laktulose oder additiv bei Rezidiv)</li>
                    <li><strong>LOLA</strong> (L-Ornithin-L-Aspartat) oder <strong>BCAA</strong> (verzweigtkettige Aminosäuren) i.v. erwägen</li>
                    <li><strong>Flumazenil:</strong> bei Benzodiazepin-Exposition zur Klärung der HE-Auslösung erwägen</li>
                </ul>`
            },
            {
                title: "West-Haven-Klassifikation",
                content: `<div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Grad</th>
                                <th>Klinische Symptome</th>
                                <th>ISHEN</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Grad 0</strong></td>
                                <td>Minimale HE: Nur durch psychometrische Tests erfassbar</td>
                                <td>Verdeckte (covert) HE</td>
                            </tr>
                            <tr>
                                <td><strong>Grad 1</strong></td>
                                <td>Mentale Verlangsamung, Antriebsstörung, Konzentrationsschwäche, Schlafstörung, gestörte Feinmotorik</td>
                                <td>Verdeckte (covert) HE</td>
                            </tr>
                            <tr>
                                <td><strong>Grad 2</strong></td>
                                <td>Starke Müdigkeit (leichte Somnolenz), Lethargie, desorientiert, verwaschene Sprache, <strong>Flapping Tremor</strong></td>
                                <td>Offensichtliche (overt) HE</td>
                            </tr>
                            <tr>
                                <td><strong>Grad 3</strong></td>
                                <td>Somnolenz oder Sopor, zeitlich/örtlich desorientiert, unzusammenhängende Sprache, Hyper- oder Hyporeflexie, Asterixis, Rigor</td>
                                <td>Offensichtliche (overt) HE</td>
                            </tr>
                            <tr>
                                <td><strong>Grad 4</strong></td>
                                <td>Koma, Muskeleigenreflexe erloschen, Muskelsteife</td>
                                <td>Offensichtliche (overt) HE</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Merke",
                content: `<ul>
                    <li>Akutes Leberversagen und HE: Gefahr des progredienten Hirnödems &rarr; <strong>Frühzeitige Verlegung in Transplantationszentrum</strong></li>
                </ul>`
            },
            {
                title: "Disposition",
                content: `<ul>
                    <li><strong>&ge; 3 Grad nach West-Haven:</strong> Überwachungsstation (IMC/ICU)</li>
                </ul>`
            }
        ],
        stand: "12/22",
        sources: `Gerbes AL et al. Aktualisierte S2k-Leitlinie der Deutschen Gesellschaft für Gastroenterologie, Verdauungs- und Stoffwechselkrankheiten (DGVS) „Komplikationen der Leberzirrhose“. Z Gastroenterol 2019. – Wendon J et al. EASL Clinical Practice Guidelines on the management of acute (fulminant) liver failure. J Hepatol 2017.`
    });
})();