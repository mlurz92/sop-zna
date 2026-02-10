(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "anaphylaxie",
        title: "Anaphylaxie",
        category: "Sonstige",
        catKey: "sonst",
        sections: [
            {
                title: "Definition",
                html: `<p><strong>Anaphylaxie:</strong> Akute systemische Reaktion mit Symptomen einer allergischen Sofortreaktion, die den ganzen Organismus erfassen kann und potenziell lebensbedrohlich ist.</p>
                <h3>Diagnostische Kriterien:</h3>
                <ul>
                    <li>Plötzliches Auftreten von kutanen Symptomen zusammen mit plötzlichen respiratorischen Symptomen oder plötzlichem Blutdruckabfall bzw. dessen Manifestationen (Kollaps, Herzrasen, etc.) <strong>oder</strong></li>
                    <li>Plötzliches Auftreten von Symptomen an &ge; zwei Organsystemen (Haut, Atemwege, Gastrointestinaltrakt, Kreislaufsystem) <strong>nach</strong> einem Kontakt mit einem wahrscheinlichen Allergen oder Anaphylaxietrigger <strong>oder</strong></li>
                    <li>Blutdruckabfall nach Kontakt mit einem dem Patienten bekannten Allergen oder einem anderen Anaphylaxietrigger.</li>
                </ul>`
            },
            {
                title: "Ursachen",
                html: `<p>Reaktion auf Allergen (Insektengifte, Arzneimittel, Nahrungsmittel, etc.).</p>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li><strong>Haut:</strong> Juckreiz, Erythem, Flush, Urtikaria, Angioödem</li>
                    <li><strong>Atemwege:</strong> Schwellung der Zunge oder des Gaumens, Larynxödem, kloßige Sprache, Dysphagie, Heiserkeit, Dyspnoe, Bronchospasmus, Zyanose</li>
                    <li><strong>Gastrointestinaltrakt:</strong> Erbrechen, Übelkeit, Bauchkrämpfe, Stuhldrang, Durchfall</li>
                    <li><strong>Kardiovaskulär:</strong> Tachykardie, Arrhythmie, Hypotension, Synkope, Schock</li>
                    <li><strong>ggf. Allgemeinsymptome:</strong> Brennen an den Akren oder im Genitalbereich, metallischer Geschmack, Angst, Kopfschmerz, Desorientierung</li>
                </ul>`
            },
            {
                title: "Schweregrade",
                html: `<div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Grad</th>
                                <th>Haut</th>
                                <th>Abdomen</th>
                                <th>Respiration</th>
                                <th>Herz-Kreislauf</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>I</strong></td>
                                <td>Juckreiz, Flush, Urtikaria, Angioödem</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td><strong>II</strong></td>
                                <td>Juckreiz, Flush, Urtikaria, Angioödem</td>
                                <td>Nausea, Krämpfe, Erbrechen</td>
                                <td>Rhinorrhoe, Heiserkeit, Dyspnoe</td>
                                <td>Tachykardie (Anstieg > 20/min), Hypotension (Abfall > 20 mmHg), Arrhythmie</td>
                            </tr>
                            <tr>
                                <td><strong>III</strong></td>
                                <td>Juckreiz, Flush, Urtikaria, Angioödem</td>
                                <td>Erbrechen, Defäkation</td>
                                <td>Larynxödem, Bronchospasmus, Zyanose</td>
                                <td>Schock</td>
                            </tr>
                            <tr>
                                <td><strong>IV</strong></td>
                                <td>Juckreiz, Flush, Urtikaria, Angioödem</td>
                                <td>Erbrechen, Defäkation</td>
                                <td>Atemstillstand</td>
                                <td>Herz-Kreislaufstillstand</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="callout callout-hinweis">
                    <p><strong>Merke:</strong> Die Klassifizierung erfolgt nach den schwersten aufgetretenen Symptomen (kein Symptom ist obligatorisch).</p>
                </div>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur)</li>
                    <li>1-2x venöser Zugang</li>
                    <li><strong>Anamnese:</strong> Symptome? Symptombeginn? Trigger? Bekannte Allergien? Schwere Anaphylaxien in Vorgeschichte? Vorerkrankungen? Medikamente?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Zungen-/Rachen-/Uvulaschwellung? Stridor? Bronchospasmus? Rekap-Zeit? Urtikaria?</li>
                </ul>`
            },
            {
                title: "Therapie",
                html: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li><strong>Allergen beseitigen</strong> (Infusion/Transfusion stoppen, etc.)</li>
                    <li>Stabilisierung der Vitalfunktionen gemäß ABCDE-Schema</li>
                </ul>

                <h3>Medikamentöse Therapie</h3>
                <h4>Bei leichter Reaktion / Grad I</h4>
                <ul>
                    <li><strong>Dimetinden (Fenistil®):</strong> 4-8 mg (1-2 Ampullen) bzw. 0,1 mg/kg KG i.v.</li>
                    <li><strong>Prednisolon (Solu-Decortin®):</strong> 250-1000 mg i.v.</li>
                </ul>

                <h4>Bei schwerer Reaktion / Grad II-III</h4>
                <ul>
                    <li><strong>Adrenalin 0,5 mg i.m.</strong> (½ Ampulle = 0,5 ml 1:1000) in Oberschenkelaußenseite oder M. deltoideus.
                        <div class="callout callout-hinweis"><p>Ggf. nach 5-10 Minuten wiederholen (Nadellänge: 25 mm, adipöse Patienten: 40 mm).</p></div>
                    </li>
                    <li><strong>1000 ml Vollelektrolytlösung i.v.</strong> (ggf. mehr je nach Bedarf)</li>
                    <li><strong>Dimetinden und Prednisolon i.v.</strong> (wie bei leichter Reaktion)</li>
                    <li><strong>Bei Rachen-/Larynxschwellung:</strong> zusätzlich 3-5 mg Adrenalin pur vernebeln (≙ 3-5 ml).</li>
                    <li><strong>Bei bronchialer Obstruktion:</strong> zusätzlich 2,5 mg Salbutamol pur vernebeln (≙ 2,5 ml).</li>
                    <li><strong>Bei anaphylaktischem Schock:</strong> ggf. zusätzlich Adrenalin 10-50 µg repetitiv i.v. (1 mg Adrenalin in 100 ml NaCl, jeweils 1-5 ml).</li>
                </ul>

                <h4>Bei schwerster Reaktion / Grad IV</h4>
                <ul>
                    <li>Leitliniengerechte Reanimation (Adrenalin i.v., forcierte Volumengabe, etc.)</li>
                </ul>

                <div class="callout callout-cave">
                    <p><strong>Differentialdiagnose: Hereditäres Angioödem</strong> (Hautschwellungen, Larynxödem, Bauchattacken) durch C1-Inhibitor-Mangel. Adrenalin, Antihistaminika oder Glukokortikoide sind hier unwirksam!</p>
                    <ul>
                        <li>Bei Gesichtsschwellung/Larynxödem: sofortige Gabe von <strong>C1-Esterase-Inhibitor (Berinert®)</strong> 20 IE/kg KG langsam i.v. (ca. 1500 IE bei 70 kg) <strong>oder Icatibant (Firazyr®)</strong> 30 mg s.c.</li>
                    </ul>
                </div>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li><strong>Adrenalin i.m.</strong> ist das Mittel der Wahl bei Anaphylaxie &ge; Grad II (Ausnahme: reine GI-Symptomatik).</li>
                    <li>Klinisch relevante biphasische Reaktionen sind möglich, aber selten (ca. 5 %).</li>
                </ul>`
            },
            {
                title: "Disposition",
                html: `<ul>
                    <li>Indikation für Notfallset prüfen, allergologische Anbindung empfehlen, ggf. Allergieausweis ausstellen.</li>
                    <li>ggf. Mitgabe eines oralen Glukokortikoids (z.B. Prednisolon 50 mg 1-0-0) und Antihistaminikums (z.B. Cetirizin 10 mg 0-0-1) für 3 Tage.</li>
                </ul>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Zustand</th>
                                <th>Disposition</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Anaphylaxie Grad I</td>
                                <td><strong>Ambulantes Procedere</strong> (nach Überwachung individuell)</td>
                            </tr>
                            <tr>
                                <td>Anaphylaxie &ge; Grad II</td>
                                <td><strong>Stationäre Aufnahme (&gt; 24h)</strong></td>
                            </tr>
                            <tr>
                                <td>Persistierendes ABC-Problem</td>
                                <td><strong>Überwachungsstation (IMC/ICU)</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            }
        ],
        stand: "12/22",
        sources: `Ring J et al. Leitlinie zu Akuttherapie und Management der Anaphylaxie – Update 2021. Allergo J 30, 20–49 (2021). – Prince et al. Underuse of epinephrine for the treatment of anaphylaxis: missed opportunities. Journal of Asthma and Allergy 2018:11 143–151. – Grunau BE et al. Incidence of clinically important biphasic reactions in emergency department patients with allergic reactions or anaphylaxis. Ann Emerg Med. 2014 Jun;63(6):736-44.e2. – Rohacek M et al.Biphasic anaphylactic reactions: occurrence and mortality. Allergy. 2014 Jun;69(6):791-7. – Bork et al., Leitlinie: Hereditäres Angioödem durch C1-Inhibitor-Mangel. Allergo J Int 2019; 28: 16–29, AWMF-LeitlinienRegister-Nummer 061-029. – Fachinformationen Stand 12/22.`
    });
})();