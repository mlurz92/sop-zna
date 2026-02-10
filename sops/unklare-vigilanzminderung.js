(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "unklare-vigilanzminderung",
        title: "Unklare Vigilanzminderung",
        category: "Leitsymptom",
        catKey: "leit",
        date: "10/24",
        sections: [
            {
                title: "Definition",
                html: `<p><strong>Unklare Vigilanzminderung:</strong> Quantitative Bewusstseinsstörung, deren Ursache initial unklar ist.</p>
                <h3>Schweregrade:</h3>
                <ul>
                    <li><strong>Somnolenz:</strong> Patient schläfrig, auf Ansprache erweckbar.</li>
                    <li><strong>Sopor:</strong> Patient nur durch kräftigen Schmerzreiz kurzfristig erweckbar.</li>
                    <li><strong>Koma:</strong> Patient auch durch massiven Schmerzreiz nicht erweckbar, Abwehrreaktionen möglich.</li>
                </ul>`
            },
            {
                title: "Ursachen",
                html: `<div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Primär intrakranielle Erkrankung</th>
                                <th>Grunderkrankung mit sekundärer Störung</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    • <strong>Blutung:</strong> epidural, subdural, subarachnoidal, intrazerebral<br>
                                    • <strong>Ischämie:</strong> Hirnstamm, Basilaris-/Sinusvenenthrombose<br>
                                    • <strong>Entzündung:</strong> Meningitis, Enzephalitis, Abszess<br>
                                    • <strong>Malignom:</strong> Tumor, Lymphom<br>
                                    • <strong>Liquorzirkulatorisch:</strong> Aufstau<br>
                                    • <strong>Epilepsie:</strong> non-konvulsiver Status epilepticus, postiktale Phase
                                </td>
                                <td>
                                    • <strong>Respiratorisch:</strong> Hypoxie, Hyperkapnie<br>
                                    • <strong>Kardiozirkulatorisch:</strong> Hypotonie, hypertensive Enzephalopathie<br>
                                    • <strong>Metabolisch/endokrin:</strong> Hypo-/Hyperglykämie, Elektrolytstörungen, urämische/hepatische/Wernicke-Enzephalopathie, Myxödem, Addison<br>
                                    • <strong>Sepsis:</strong> Septische Enzephalopathie<br>
                                    • <strong>Intoxikation:</strong> Alkohol, Drogen, Medikamente, CO, etc.<br>
                                    • <strong>Sonstige:</strong> Hypoaktives Delir, Hypo-/Hyperthermie
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li>Quantitative Bewusstseinsstörung (Somnolenz, Sopor, Koma).</li>
                    <li><strong>Begleitsymptome / Zeichen der Ursache:</strong>
                        <ul>
                            <li><strong>Miosis:</strong> V.a. Opiatintoxikation.</li>
                            <li><strong>Foetor alcoholicus:</strong> V.a. Alkoholintoxikation.</li>
                            <li><strong>Prellmarken:</strong> Hinweis auf Sturz/Trauma.</li>
                        </ul>
                    </li>
                </ul>`
            },
            {
                title: "Glasgow Coma Scale (GCS)",
                html: `<div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Kriterium</th>
                                <th>Reaktion</th>
                                <th>Punkte</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowspan="4"><strong>Augen öffnen</strong></td>
                                <td>Spontan</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>Auf Ansprache</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>Auf Schmerzreiz</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Keine Reaktion</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td rowspan="5"><strong>Beste verbale Reaktion</strong></td>
                                <td>Konversationsfähig, orientiert</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>Konversationsfähig, desorientiert</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>Unzusammenhängende Worte</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>Unverständliche Laute</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Keine Reaktion</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td rowspan="6"><strong>Beste motorische Reaktion</strong></td>
                                <td>Befolgt Anforderungen</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td>Gezielte Schmerzabwehr</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>Ungezielte Schmerzabwehr</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>Auf Schmerzreiz Beugesynergismen</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>Auf Schmerzreiz Strecksynergismen</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Keine Reaktion</td>
                                <td>1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li><strong>Ersteindruck + ABCDE + Vitalparameter:</strong> RR, Puls, SpO₂, AF, Temperatur.</li>
                    <li><strong>1-2x venöser Zugang.</strong></li>
                    <li><strong>Venöse bzw. arterielle BGA:</strong> pH? BE? pCO₂? pO₂? Hb? <strong>COHb? MetHb?</strong> Natrium? Kalzium? Glukose? Laktat?</li>
                    <li><strong>Labor:</strong> BB, CRP, E'lyte inkl. Kalzium und Magnesium, NW, Gerinnung, GOT, GPT, LDH, Bilirubin, AP, γ-GT, CK, Alkohol, TSH.
                    <br>Ggf.: β-HCG, <strong>Ammoniak</strong>, Cortisol, hs-Troponin, D-Dimere, PCT, Medikamentenspiegel, Drogenscreening.</li>
                    <li><strong>&ge; 2 Paar Blutkulturen:</strong> bei V.a. Sepsis.</li>
                    <li><strong>12-Kanal-EKG:</strong> Herzrhythmusstörungen? Ischämiezeichen? QTc-Zeit?</li>
                    <li><strong>Urin/Drogen:</strong> DK-Anlage + Urinstatus/-kultur + Drogenscreening im Urin (Opiate, Benzodiazepine, Amphetamine, THC, Trizyklische Antidepressiva).</li>
                    <li><strong>Anamnese (Fremdanamnese):</strong> Vorangegangene Symptome? Vorereignis? Dynamik? Krampfanfall? Sturz/Trauma? Wann zuletzt gesund gesehen? Auffindesituation? Tablettenblister? CO-Quelle? Vorerkrankungen (Epilepsie, Psychiatrie)? Medikamente (OAK)? Suizidabsichten? Substanzabusus?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Atemmuster? Foetor? Rekap-Zeit? GCS? Pupillen? Meningismus? Fokal-neurologisches Defizit? Reflexe? Prellmarken? Zungenbiss? <strong>Opiatpflaster? Einstichstellen?</strong> Infektfokus? Zeichen der Exsikkose?</li>
                    <li><strong>POCUS (bei Schock):</strong> VCI? Perikardtamponade? RHB-Zeichen? LV-EF? Pneumothorax? Aortendissektion? Freie Flüssigkeit?</li>
                    <li><strong>Bildgebung:</strong> 
                        <ul>
                            <li><strong>cCT:</strong> Blutung? Ischämie? Tumor?</li>
                            <li><strong>CT-Angiografie:</strong> arteriell (Basilaristhrombose?), venös (Sinusvenenthrombose?).</li>
                            <li><strong>CT-HWS:</strong> bei Trauma.</li>
                        </ul>
                    </li>
                    <li><strong>Ggf. zusätzliche Diagnostik:</strong> Lumbalpunktion, EEG, etc.</li>
                </ul>`
            },
            {
                title: "Systematisches diagnostisches Vorgehen",
                html: `<div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Untersuchung</th>
                                <th>Mögliche Pathologien</th>
                                <th>Mögliche Erkrankungen</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Untersuchung (ABCDE)</strong></td>
                                <td>Pathol. Atemmuster, Zyanose, verlängerte Rekap-Zeit, Fokal-neurol. Defizit, Prellmarken, Exsikkose/Infekt</td>
                                <td>Herzkreislaufstillstand, A/B/C-Problem, intrakranielle Pathologie / Hirndruck</td>
                            </tr>
                            <tr>
                                <td><strong>Fremdanamnese</strong></td>
                                <td>Sturz? Krampfanfall? Psychiatrie? Substanzabusus?</td>
                                <td>Trauma, ICB, Epilepsie, Intoxikation</td>
                            </tr>
                            <tr>
                                <td><strong>Pulsoxymetrie</strong></td>
                                <td>Hypoxie</td>
                                <td>A- oder B-Problem</td>
                            </tr>
                            <tr>
                                <td><strong>Herzfrequenz</strong></td>
                                <td>Bradykardie, Tachykardie</td>
                                <td>Herzrhythmusstörung, Sepsis, Hitzschlag</td>
                            </tr>
                            <tr>
                                <td><strong>Atemfrequenz</strong></td>
                                <td>Tachypnoe, Bradypnoe, pathol. Atemmuster</td>
                                <td>B-Problem, Kompensation Azidose, Opiatintoxikation, Hirndruck</td>
                            </tr>
                            <tr>
                                <td><strong>Blutdruck</strong></td>
                                <td>Hypotonie, Hypertonie</td>
                                <td>Schock, Hypertensive Enzephalopathie</td>
                            </tr>
                            <tr>
                                <td><strong>Temperatur</strong></td>
                                <td>Fieber, Hypothermie</td>
                                <td>Meningitis, Sepsis, Hitzschlag, umweltbedingt</td>
                            </tr>
                            <tr>
                                <td><strong>BGA / Labor</strong></td>
                                <td>pH + BE (Azidose)</td>
                                <td>Metabolische Azidose</td>
                            </tr>
                            <tr>
                                <td><strong>BGA</strong></td>
                                <td>pCO₂ hoch, pO₂ niedrig</td>
                                <td>Hyperkapnisches Atemversagen, Respiratorische Insuffizienz</td>
                            </tr>
                            <tr>
                                <td><strong>BGA</strong></td>
                                <td>COHb / MetHb erhöht</td>
                                <td>CO-Intoxikation, Methämoglobinämie</td>
                            </tr>
                            <tr>
                                <td><strong>Labor</strong></td>
                                <td>Harnstoff / Kreatinin erhöht</td>
                                <td>Akutes Nierenversagen, V.a. OGIB (bei isoliertem Harnstoff)</td>
                            </tr>
                            <tr>
                                <td><strong>Labor</strong></td>
                                <td>Ammoniak erhöht</td>
                                <td>Hepatische Enzephalopathie</td>
                            </tr>
                            <tr>
                                <td><strong>Labor</strong></td>
                                <td>TSH erniedrigt/erhöht</td>
                                <td>Myxödemkoma, Thyreotoxikose</td>
                            </tr>
                            <tr>
                                <td><strong>Labor</strong></td>
                                <td>Beta-HCG positiv</td>
                                <td>Eklampsie</td>
                            </tr>
                            <tr>
                                <td><strong>Labor</strong></td>
                                <td>CK erhöht</td>
                                <td>Rhabdomyolyse / Liegetrauma</td>
                            </tr>
                            <tr>
                                <td><strong>EKG</strong></td>
                                <td>Ischämie, QTc-Zeit verlängert</td>
                                <td>Akuter Myokardinfarkt, Intoxikation</td>
                            </tr>
                            <tr>
                                <td><strong>Bildgebung (cCT/CTA)</strong></td>
                                <td>Blutung, Ischämie, Tumor, Gefäßverschluss</td>
                                <td>Stroke, ICB, Basilaristhrombose, SVT</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="callout callout-hinweis">
                    <p>Die genannten Maßnahmen werden parallel durch ein interprofessionelles und interdisziplinäres Team durchgeführt!</p>
                </div>`
            },
            {
                title: "Therapie",
                html: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li>Stabilisierung der Vitalfunktionen gemäß ABCDE-Schema.</li>
                    <li><strong>Intubation:</strong> bei fehlenden Schutzreflexen (i.d.R. <strong>GCS < 9</strong>) und fehlender akut reversibler Ursache (z.B. Hypoglykämie).</li>
                </ul>
                <h3>Kausale Therapie</h3>
                <ul>
                    <li>Behandlung der zugrundeliegenden Ursache(n).</li>
                </ul>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li>Bei jeder unklaren Vigilanzminderung <strong>muss der Blutzucker kontrolliert werden!</strong></li>
                    <li>Es liegen häufig mehrere Ursachen gleichzeitig vor (systematisches Vorgehen wichtig!).</li>
                    <li>Stets auch seltene Ursachen ausschließen (Myxödem, CO-Intoxikation, etc.).</li>
                    <li>Eine <strong>Basilaristhrombose</strong> sollte mittels CT-Angiografie ausgeschlossen werden.</li>
                </ul>`
            },
            {
                title: "Disposition",
                html: `<ul>
                    <li><strong>i.d.R. Überwachungsstation (IMC/ICU).</strong></li>
                    <li>Ggf. Verlegung in entsprechende Fachabteilung oder Zentrum (z.B. Neurochirurgie, Stroke Unit).</li>
                </ul>`
            }
        ],
        stand: "10/24",
        sources: `Schmidt WU et al. Causes of brain dysfunction in acute coma. Scand J Trauma Resusc Emerg Med. 2019.
        <br>Erbguth FJ et al. Bewusstseinsstörungen: Erscheinungsformen, Differenzialdiagnose und Management. Notaufnahme Up2date 2020.
        <br>Traub SJ et al. Initial Diagnosis and Management of Coma. Emerg Med Clin North Am. 2016.
        <br>Weiglein T et al. Acute Onset of Impaired Consciousness: Diagnostic Evaluation in the Emergency Department. Dtsch Arztebl Int. 2024.`
    });
})();