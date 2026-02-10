(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "zerebrale-metastasen",
        title: "Zerebrale Metastasen",
        category: "Neurologie",
        catKey: "neuro",
        date: "12/24",
        sections: [
            {
                title: "Definition",
                html: `<p><strong>Zerebrale Metastasen:</strong> Absiedelung von malignen Zellen eines Primarius in das Hirngewebe (Parenchym, Meningen oder Schädelkalotte).</p>`
            },
            {
                title: "Ursachen",
                html: `<p>Häufige Primärtumoren:</p>
                <ul>
                    <li>Lungenkarzinom (häufigste Ursache!)</li>
                    <li>Mammakarzinom</li>
                    <li>Malignes Melanom</li>
                    <li>Nierenzellkarzinom</li>
                    <li>Kolorektales Karzinom</li>
                </ul>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li>Kopfschmerzen, Übelkeit, (morgendliches) Erbrechen.</li>
                    <li>Fokal-neurologisches Defizit, Sehstörungen, Schwindel.</li>
                    <li>Epileptischer Anfall.</li>
                    <li>Wesensveränderung, Verwirrtheit, Delir, psychiatrische Symptome.</li>
                    <li>Vigilanzminderung bis hin zum Koma.</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li><strong>Ersteindruck + ABCDE + Vitalparameter:</strong> (RR, Puls, SpO₂, AF, Temperatur).</li>
                    <li><strong>1x venöser Zugang.</strong></li>
                    <li><strong>Labor:</strong> BB, CRP, E'lyte, NW, Leberwerte, Gerinnung, <strong>TSH</strong>.</li>
                    <li><strong>(Fremd-)Anamnese:</strong> Symptome? Beginn? Kopfschmerzen? Sehstörungen? Erbrechen? Vorerkrankungen? Bekanntes Malignom? Therapie? Medikamente?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Vigilanz? GCS? Pupillen? Fokal-neurologisches Defizit? Gangstörung?</li>
                    <li><strong>cCT + KM:</strong> in der Notfallsituation.</li>
                    <li><strong>cMRT + KM:</strong> Goldstandard.</li>
                    <li><strong>Ggf. weitere Diagnostik:</strong> venöse BGA, erweitertes Labor, Blutkulturen, Lumbalpunktion (LP), CTA, EEG, etc. zum Ausschluss wichtiger Differenzialdiagnosen.</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p>Frühzeitige interdisziplinäre Rücksprache mit Onkologie, Neurochirurgie, Neurologie und Strahlentherapie!</p>
                </div>`
            },
            {
                title: "Wichtige Differenzialdiagnosen bei Tumorpatienten",
                html: `<ul>
                    <li><strong>Zerebrale Ischämie, Sinus-/Venenthrombose:</strong> begünstigt durch tumorinduzierte Hyperkoagulabilität.</li>
                    <li><strong>ICB:</strong> z.B. begünstigt durch DOAK-Einnahme nach paraneoplastischer Thromboembolie oder Thrombozytopenie unter Chemotherapie.</li>
                    <li><strong>Hyponatriämie:</strong> paraneoplastisches SIADH.</li>
                    <li><strong>Hyperkalzämie:</strong> durch Osteolysen, PTHrp oder gesteigerte 1-alpha-Hydroxylase.</li>
                    <li><strong>Hyper-/Hypoglykämie:</strong> z.B. durch Checkpointinhibitor induzierten Diabetes mellitus bzw. Hypophysitis/Adrenalitis.</li>
                    <li><strong>Enzephalopathie:</strong> z.B. septisch bei Infektion unter Neutropenie, hepatisch bei Metastasenleber, urämisch bei Tumorlysesyndrom, medikamentös-toxisch.</li>
                    <li><strong>Meningitis/Enzephalitis:</strong> z.B. opportunistische Infektionen unter Chemotherapie, paraneoplastisch, Immuncheckpoint-Inhibitor-induziert.</li>
                    <li><strong>Immuneffektorzell-assoziiertes Neurotoxizitätssyndrom (ICANs):</strong> durch CAR-T-Zell-Therapie.</li>
                    <li><strong>Radionekrose:</strong> nach Bestrahlung von Hirnmetastasen.</li>
                    <li><strong>Medikamentenintoxikation:</strong> z.B. akzidentelle Opiatüberdosierung.</li>
                </ul>`
            },
            {
                title: "Therapie",
                html: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li>Stabilisierung der Vitalfunktionen gemäß ABCDE-Schema.</li>
                </ul>
                <h3>Symptomatische Therapie: Peritumorales Ödem / Hirndruck</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Symptomatik</th>
                                <th>Dexamethason-Dosierung</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Keine Symptome</td>
                                <td>I.d.R. keine Dexamethasongabe indiziert.</td>
                            </tr>
                            <tr>
                                <td>Milde Symptome (z.B. Kopfschmerz)</td>
                                <td>2-4 mg/d (1-0-0) p.o.</td>
                            </tr>
                            <tr>
                                <td>Moderate/Schwere Symptome (z.B. Erbrechen, FND)</td>
                                <td>10 mg i.v. Bolus, dann 8-16 mg/d p.o./i.v. (in 1-4 Einzeldosen).</td>
                            </tr>
                            <tr>
                                <td>Hirndruck (Vigilanzminderung, Verwirrtheit)</td>
                                <td>10 mg i.v. Bolus, dann 16-40 mg/d p.o./i.v. (in 2-4 Einzeldosen).</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Zusätzliche Maßnahmen bei Hirndruck</h3>
                <ul>
                    <li>30°-Oberkörperhochlagerung.</li>
                    <li>Hals in Neutralstellung.</li>
                    <li>Hypertone NaCl-Lösung.</li>
                    <li>Hypo-/Normokapnie anstreben.</li>
                </ul>
                <h3>Epileptischer Anfall</h3>
                <ul>
                    <li>Anfallsdurchbrechung (s. SOP Status epilepticus).</li>
                    <li>Sekundärprophylaxe mit z.B. Levetiracetam und/oder Lacosamid (nach neuroonkologischer Maßgabe).</li>
                </ul>
                <h3>Kausale Therapie</h3>
                <ul>
                    <li>Resektion, Radiochirurgie (SRS), Ganzhirnbestrahlung (WBRT), medikamentöse Tumortherapie.</li>
                </ul>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li>Bildgebung der Wahl bei Verdacht auf zerebrale Metastasen: <strong>cMRT + KM</strong> (bzw. cCT + KM in der Notfallsituation).</li>
                    <li>Das Vorliegen von zerebralen Metastasen zeigt ein fortgeschrittenes Krankheitsstadium an, Hirnmetastasen können jedoch auch als <strong>Erstmanifestation</strong> eines malignen Tumors auftreten.</li>
                    <li>Bereits in der Notaufnahme sollten mit dem Patienten bzw. den Vorsorgebevollmächtigten die <strong>Therapieziele</strong> besprochen werden.</li>
                </ul>`
            },
            {
                title: "Disposition",
                html: `<p>Abhängig von klinischer Symptomatik und Therapiezielen:</p>
                <ul>
                    <li>Verlegung in Neurochirurgie / Strahlentherapie.</li>
                    <li>Intensivstation.</li>
                    <li>Normalstation.</li>
                    <li>Palliativstation.</li>
                    <li>Ambulant.</li>
                </ul>`
            }
        ],
        stand: "12/24",
        sources: `Zoghbi M et al. Brain Metastasis in the Emergency Department. Cancers (Basel). 2024.<br>
        Schmieder K et al. Interdisziplinäre Therapie von Hirnmetastasen. Dtsch Arztebl Int 2016.<br>
        Thakkar JP et al. Acute Neurological Complications of Brain Tumors and Immune Therapies. Curr Neurol Neurosci Rep. 2020.<br>
        Suarez-Meade P et al. Neuro-oncologic Emergencies. Curr Oncol Rep. 2022.<br>
        Roth P et al. EANO-ESMO Clinical Practice Guidelines. Ann Oncol. 2021.`
    });
})();