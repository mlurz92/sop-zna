(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "fieber-in-der-neutropenie",
        title: "Fieber in der Neutropenie",
        category: "Hämatologie",
        catKey: "haem",
        sections: [
            {
                title: "Definition",
                html: `<p><strong>Fieber in der Neutropenie:</strong> Deutlich erhöhte Körpertemperatur bei Verminderung der neutrophilen Granulozyten im Blut.</p>
                <h3>Diagnosekriterien:</h3>
                <ul>
                    <li><strong>Neutrophile</strong> < 500/µl <strong>oder</strong> < 1.000/µl mit vorhersehbarem Abfall < 500/µl innerhalb der nächsten 2 Tage</li>
                    <li><strong>Temperatur</strong> ≥ 38,3°C (einmal oral gemessen) <strong>oder</strong> ≥ 38,0°C (mit Dauer über mindestens 1 h oder zweimal innerhalb von 12 h gemessen)</li>
                </ul>`
            },
            {
                title: "Ursachen",
                html: `<ul>
                    <li>Meist Infektion unter myelosuppressiver Chemotherapie</li>
                    <li><strong>Andere Fieberursachen:</strong> Medikamente, Transfusionsreaktion, B-Symptomatik, Zytokinfreisetzungssyndrom, etc.</li>
                    <li><strong>Andere Neutropenieursachen:</strong> Medikamente (z.B. Metamizol, Thyreostatika, etc.), Knochenmarkinfiltration, etc.</li>
                    <li><strong>Häufige Infektionsorte:</strong> Lunge, gastrointestinal, urogenital, Haut (auch katheterassoziiert), Oropharynx</li>
                </ul>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li>Fieber (s. Definition bei Diagnosekriterien)</li>
                    <li>ggf. Zeichen des zugrundeliegenden Infektionsortes (gerötete Eintrittsstellen bei liegenden Kathetern, Husten und Dyspnoe bei Pneumonie, etc.)</li>
                    <li>ggf. Zeichen der Sepsis (Vigilanzminderung, Tachypnoe, Hypotonie, marmorierte Haut, etc., s. SOP Sepsis)</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p>Klassische klinische Symptome für einen Infektfokus können bei neutropenen Patienten fehlen!</p>
                </div>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur)</li>
                    <li>1-2x venöser Zugang</li>
                    <li><strong>Venöse BGA</strong> (pH? BE? Laktat?)</li>
                    <li><strong>Labor:</strong> Diff-BB, CRP, E'lyte, NW, Bilirubin, GOT, GPT, AP, γ-GT, LDH, Gerinnung, PCT, ggf.: TSH, Influenza-PCR, SARS-CoV-2-PCR</li>
                    <li><strong>≥ 2 Paar Blutkulturen</strong> (bei liegenden Devices, wie z.B. Port, zusätzlich 1 Paar Blutkulturen hieraus gewinnen)</li>
                    <li><strong>Anamnese:</strong> Husten? Dysurie? Hals-, Kopf-, Rücken-, Gelenk-, Bauchschmerzen? Effloreszenzen? Diarrhoen? Fremdmaterial? Vorerkrankungen? Medikamente? Chemotherapie, welche Substanzen, welcher Zyklus? Letzter Krankenhausaufenthalt? MRE-Besiedelung? Antibiotikaprophylaxe?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Vigilanz? Rekap-Zeit? Meningismus? Rachen? Lunge? Herz? Abdomen? Gelenke? Port? Haut? Punktionsstellen? Analregion? (Untersuchung am vollständig entkleideten Patienten!)</li>
                    <li>Urinstatus/-kultur</li>
                    <li><strong>POCUS:</strong> Intraabdomineller Infektfokus? Volumenstatus? Kardiale Leistungsfähigkeit?</li>
                    <li><strong>ggf. zusätzliche symptombezogene Diagnostik:</strong>
                        <ul>
                            <li><strong>Respiratorische Symptome</strong> (Tachy-/Dyspnoe, Husten, pleuritische Symptome): CT-Thorax, Legionellen-AG, Sputumdiagnostik</li>
                            <li><strong>Verstopfte Nase bzw. Symptome einer Sinusitis:</strong> CT der Nasennebenhöhlen</li>
                            <li><strong>Gastrointestinale Symptome:</strong> CT-Abdomen + KM (bei fehlender sonografischer Beurteilbarkeit bzw. V.a. neutropenische Enterokolitis)</li>
                            <li><strong>Weitere Diagnostik:</strong> z.B. Stuhluntersuchung bei V.a. C. difficile-Infektion, Abstriche bei Mukositis, Lumbalpunktion bei V.a. Meningitis, etc.</li>
                        </ul>
                    </li>
                </ul>
                <div class="callout callout-hinweis">
                    <p>Rücksprache mit Hämato-/Onkologie, bei Sepsis frühzeitige Rücksprache mit Überwachungsstation (IMC/ICU)!</p>
                </div>`
            },
            {
                title: "Therapie",
                html: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li>Stabilisierung der Vitalfunktionen gemäß ABCDE-Schema</li>
                    <li><strong>Umkehrisolation:</strong> (Neutrophile < 500/µl bzw. erwarteter Abfall < 500/µl in den nächsten 2 Tagen; Berechnung: Leukozyten x Neutrophile in %)</li>
                </ul>
                <h3>Antiinfektive Therapie</h3>
                <p>Umgehend, d.h. innerhalb 1 h nach Vorstellung in der Notaufnahme:</p>
                <ul>
                    <li><strong>Bei Standardrisiko (MASCC ≥ 21 Punkte):</strong> Amoxicillin/Clavulansäure 875/125 mg 1-1-1 p.o. + Ciprofloxacin 500 mg 1-0-1 p.o.</li>
                    <li><strong>Bei Hochrisiko (MASCC ≤ 20 Punkte) bzw. stationär:</strong> Piperacillin/Tazobactam 4,5 g 1-1-1-1 i.v. (Penicillinallergie: Ceftazidim 2 g 1-1-1 i.v.)</li>
                    <li><strong>Bei bekannter ESBL-Besiedelung:</strong> Meropenem 2 g 1-1-1 i.v. (dann 1 g 1-1-1 i.v.)</li>
                    <li><strong>Bei bekannter MRSA-Besiedelung:</strong> zusätzlich Vancomycin 1 g 1-0-1 i.v. (Monitoring mittels Talspiegel)</li>
                    <li><strong>Bei septischem Schock:</strong> zusätzlich Vancomycin 1 g 1-0-1 i.v. und Caspofungin 70 mg i.v. (Initialdosis) erwägen</li>
                    <li><strong>Therapiedauer:</strong> abhängig von klinischem Zustand, Symptomen und Erholung der Neutropenie; Anpassung an Infektfokus</li>
                </ul>
                <h3>Fokussanierung</h3>
                <ul>
                    <li>Portexplantation bei Portinfektion, chirurgische Abszessdrainage, etc.</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p>Sofortiger Beginn einer angemessenen antibiotischen Therapie!</p>
                </div>`
            },
            {
                title: "MASCC-Score",
                html: `<p>Risikoeinschätzung der Neutropenie nach Multinational Association of Supportive Care in Cancer (MASCC)</p>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Kriterium</th>
                                <th>Punkte</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Keine/leichte bzw. moderate bzw. schwere Symptome</td>
                                <td>5 bzw. 3 bzw. 0</td>
                            </tr>
                            <tr>
                                <td>Keine Hypotonie (systolischer Blutdruck > 90 mm Hg)</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>Keine chronische obstruktive Lungenerkrankung</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>Solide Tumoren oder hämatologische Malignität ohne stattgehabte Fungalinfektionen</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>Keine Dehydratation mit Notwendigkeit parenteraler Flüssigkeit</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>Ambulante Behandlung</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>Alter < 60 Jahre</td>
                                <td>2</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p><em>≤ 20 Punkte: Hochrisiko; ≥ 21 Punkte: Standardrisiko</em></p>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li>Fieber in der Neutropenie stellt einen onkologisch-infektiologischen Notfall dar!</li>
                    <li>Bei Zeichen einer Infektion auch in Abwesenheit von Fieber (z.B. Verschleierung durch Analgetika/Glukokortikoide) analog behandeln.</li>
                    <li>Körperliche Untersuchung am vollständig entkleideten Patienten zur Detektion eines Infektfokus.</li>
                    <li>Bei V.a. pulmonalen Fokus → <strong>CT-Thorax</strong> (Röntgen-Thorax nicht sensitiv genug).</li>
                    <li>Keine routinemäßige Gabe von G-CSF (nur nach hämato-/onkologischer Maßgabe, abhängig von individuellen Faktoren).</li>
                </ul>`
            },
            {
                title: "Disposition",
                html: `<p><strong>Kriterien für ambulantes Procedere:</strong> Klinische Stabilität, sichere Medikamentenaufnahme, keine neue relevante Organbeeinträchtigung, keine ZNS-/Katheterinfektion, keine Pneumonie, keine Fluorchinolon-Prophylaxe innerhalb der letzten 7 Tage, Unterstützung im sozialen Umfeld & adäquates Follow-up & zeitnahe Erreichbarkeit einer adäquaten Klinik.</p>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Risikoprofil</th>
                                <th>Empfehlung</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>MASCC ≥ 21 Punkte UND o.g. Kriterien erfüllt UND erwartete Neutropenie ≤ 7 d</td>
                                <td><strong>Ambulant</strong> in Rücksprache mit Hämato-/Onkologie</td>
                            </tr>
                            <tr>
                                <td>Alle anderen Patienten</td>
                                <td><strong>Stationäre Aufnahme</strong></td>
                            </tr>
                            <tr>
                                <td>Sepsis</td>
                                <td><strong>Überwachungsstation (IMC/ICU)</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            }
        ],
        stand: "04/24",
        sources: `Wacker D et al. Managing patients with oncologic complications in the emergency department. Emerg Med Pract. 2018 Jan;20(1):1-24.<br>Heinz WJ et al. Diagnosis and empirical treatment of fever of unknown origin (FUO) in adult neutropenic patients: guidelines of the Infectious Diseases Working Party (AGIHO) of the German Society of Hematology and Medical Oncology (DGHO). Ann Hematol. 2017 Nov;96(11):1775-1792.<br>Kochanek M et al. Management of sepsis in neutropenic cancer patients: 2018 guidelines from the Infectious Diseases Working Party (AGIHO) and Intensive Care Working Party (iCHOP) of the German Society of Hematology and Medical Oncology (DGHO). Ann Hematol. 2019 May;98(5):1051-1069.`
    });
})();