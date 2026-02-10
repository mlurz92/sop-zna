(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "thoraxschmerzen",
        title: "Thoraxschmerzen",
        category: "Leitsymptom",
        catKey: "leit",
        stand: "10/24",
        sections: [
            {
                title: "Definition",
                html: `<p><strong>Thoraxschmerzen:</strong> Schmerzen im Bereich des Brustkorbs.</p>`
            },
            {
                title: "Ursachen",
                html: `<h3>Lebensbedrohlich (Big Five)</h3>
                <ul>
                    <li><strong>Akutes Koronarsyndrom</strong> (STEMI, NSTEMI, instabile Angina Pectoris)</li>
                    <li><strong>Lungenarterienembolie</strong> (LAE)</li>
                    <li><strong>Akutes Aortensyndrom</strong> (Aortendissektion, Aortitis)</li>
                    <li><strong>Spannungspneumothorax</strong></li>
                    <li><strong>Perikardtamponade / Boerhaave-Syndrom</strong></li>
                </ul>
                <h3>Kardial / Vaskulär</h3>
                <ul>
                    <li>Perimyokarditis, Perikarderguss, Klappenvitien, Herzrhythmusstörungen, hypertensiver Notfall.</li>
                </ul>
                <h3>Pulmonal</h3>
                <ul>
                    <li>Pneumonie, Pleuritis, einfacher Pneumothorax.</li>
                </ul>
                <h3>Gastrointestinal</h3>
                <ul>
                    <li>Refluxkrankheit, Ösophagitis, Achalasie, Gastritis, Ulcus, Gallenkolik, Cholezystitis, Pankreatitis, Milzinfarkt.</li>
                </ul>
                <h3>Muskuloskelettal / Psychogen / Sonstige</h3>
                <ul>
                    <li>Trauma, Interkostalneuralgie, Tietze-Syndrom.</li>
                    <li>Panikattacke, Somatisierungsstörung.</li>
                    <li>Herpes Zoster, Sichelzellkrise.</li>
                </ul>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li>Schmerzen im Bereich des Brustkorbs.</li>
                    <li><strong>Begleitsymptome:</strong> ggf. Dyspnoe, neurologische Ausfälle (Dissektion?), Fieber (Infekt?), Erbrechen.</li>
                    <li><strong>Vegetative Symptomatik:</strong> Hypertonie, Tachykardie, Schwitzen, Übelkeit.</li>
                    <li><strong>Zeichen der Ursache:</strong> z.B. Zeichen einer TVT bei LAE, einseitig aufgehobenes Atemgeräusch bei Pneumothorax.</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li><strong>Ersteindruck + ABCDE + Vitalparameter</strong> (RR, Puls, SpO₂, AF, Temperatur).</li>
                    <li><strong>RR-Messung an beiden Armen</strong> (Zwingend bei V.a. Aortendissektion).</li>
                    <li><strong>1-2x venöser Zugang.</strong></li>
                    <li><strong>Venöse BGA:</strong> (Hb? E’lyte? Laktat?).</li>
                    <li><strong>Labor:</strong> hs-Troponin. Standard: BB, CRP, E’lyte, NW, Gerinnung, Bilirubin, GOT, GPT, AP, γ-GT, Lipase, LDH, TSH.
                    <br>Ggf. erweitert: CK, CK-MB, NT-proBNP, D-Dimer, Lipide, HbA1c.</li>
                    <li><strong>12-Kanal-EKG innerhalb von 10 Min.:</strong> (Ischämiezeichen? Blockbilder? Lagetyp? Niedervoltage? Rhythmusstörungen?).
                    <br>Ggf. ergänzt um <strong>V3/4R</strong> (Rechtsherz) und <strong>V7-9</strong> (Hinterwand).</li>
                    <li><strong>Anamnese (OPQRST):</strong> Schmerzbeginn/-qualität/-intensität/-ausstrahlung, Provokationsfaktoren. Begleitsymptome, Vorerkrankungen (CCS, LAE/TVT, Aorta), kardiovaskuläre Risikofaktoren (CVRF), Medikamente.</li>
                    <li><strong>Körperliche Untersuchung:</strong> Rekap-Zeit, Pulsstatus, Hinweise auf LAE/Aortendissektion/Pneumothorax, Perikarderguss, Boerhaave-Syndrom. Schmerz auf Druck verstärkbar? Effloreszenzen? Traumazeichen?</li>
                    <li><strong>Point-of-Care-Ultraschall (POCUS):</strong> Perikarderguss/-tamponade? Rechtsherzbelastung? LV-Funktion? Wandbewegungsstörungen? Dissektionsmembran? Pneumothorax (Lungenpunkt)?</li>
                    <li><strong>Bildgebung:</strong> 
                        <ul>
                            <li><strong>Röntgen-Thorax:</strong> Stauung? Ergüsse? Infiltrate? Pneumothorax? Mediastinalverbreiterung?</li>
                            <li><strong>CT:</strong> CT-Angiographie bei V.a. LAE oder Aortensyndrom; Ösophagus-Darstellung bei V.a. Boerhaave.</li>
                        </ul>
                    </li>
                </ul>
                <div class="callout callout-wichtig">
                    <p>Sofortige Rücksprache mit Kardiologie bei STEMI bzw. mit Kardiochirurgie bei Akutem Aortensyndrom!</p>
                </div>`
            },
            {
                title: "Therapie",
                html: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li>Stabilisierung der Vitalfunktionen gemäß ABCDE-Schema.</li>
                    <li><strong>Analgetische Therapie:</strong> z.B. 2-3 mg Morphin repetitiv i.v.</li>
                </ul>
                <h3>Kausale Therapie</h3>
                <ul>
                    <li>Behandlung der zugrundeliegenden Ursache gemäß spezifischer SOP:
                        <ul>
                            <li>SOP STEMI / SOP NSTEMI</li>
                            <li>SOP Lungenarterienembolie</li>
                            <li>SOP Akutes Aortensyndrom</li>
                        </ul>
                    </li>
                </ul>`
            },
            {
                title: "Mögliche Diagnostik zum Ausschluss der „Big Five“",
                html: `<div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Diagnose</th>
                                <th>Spezifische Diagnostik</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>STEMI</strong></td>
                                <td>12-Kanal-EKG (Hebungen)</td>
                            </tr>
                            <tr>
                                <td><strong>NSTEMI</strong></td>
                                <td>hs-Troponin (Dynamik)</td>
                            </tr>
                            <tr>
                                <td><strong>LAE (hoher Verdacht)</strong></td>
                                <td>CTA-Thorax</td>
                            </tr>
                            <tr>
                                <td><strong>LAE (geringer Verdacht)</strong></td>
                                <td>PERC-Score, ggf. D-Dimere</td>
                            </tr>
                            <tr>
                                <td><strong>Aortensyndrom (hochgr. Verdacht)</strong></td>
                                <td>CTA-Aorta</td>
                            </tr>
                            <tr>
                                <td><strong>Aortensyndrom (geringer Verdacht)</strong></td>
                                <td>POCUS, Röntgen-Thorax, D-Dimere</td>
                            </tr>
                            <tr>
                                <td><strong>Pneumothorax</strong></td>
                                <td>POCUS, Röntgen-Thorax</td>
                            </tr>
                            <tr>
                                <td><strong>Boerhaave-Syndrom</strong></td>
                                <td>CT-Thorax</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li>Bedenke bei Thoraxschmerzen stets die <strong>„Big Five“</strong> (LAE, Akutes Aortensyndrom, akuter Myokardinfarkt, Pneumothorax, Boerhaave-Syndrom).</li>
                    <li>Die Kernaufgabe der Notaufnahme besteht darin, gefährliche Ursachen von Thoraxschmerzen oder anderweitigen thorakalen Beschwerden („chest discomfort“) sicher auszuschließen.</li>
                    <li><strong>Weitere „do not miss“-Diagnosen:</strong> Herzrhythmusstörungen, Perimyokarditis, Perikarderguss und hochgradige Klappenvitien (Ausschluss mittels EKG, POCUS, hs-Troponin).</li>
                </ul>`
            },
            {
                title: "Disposition",
                html: `<ul>
                    <li>Abhängig von der zugrundeliegenden Ursache.</li>
                    <li>Ambulantes Procedere bei sicherem Ausschluss gefährlicher Ursachen.</li>
                    <li>Stationäre Aufnahme, ggf. <strong>Überwachungsstation (IMC/ICU)</strong> bei instabilen Patienten oder bestätigten „Big Five“.</li>
                </ul>`
            }
        ],
        sources: `Collet JP et al. 2020 ESC Guidelines for the management of acute coronary syndromes. Eur Heart J. 2021.
        <br>Ibanez B et al. 2017 ESC Guidelines for the management of acute myocardial infarction. Eur Heart J. 2018.
        <br>Erbel R et al. 2014 ESC Guidelines on the diagnosis and treatment of aortic diseases. Eur Heart J. 2014.
        <br>Kontos MC et al. 2022 ACC Expert Consensus Decision Pathway on the Evaluation and Disposition of Acute Chest Pain in the ED. J Am Coll Cardiol. 2022.
        <br>Gröning I et al. Die Bedeutung von Laborleistungen bei der klinischen Notfallbehandlung beim Leitsymptom „Thoraxschmerz“. Notfall Rettungsmed 2024.`
    });
})();