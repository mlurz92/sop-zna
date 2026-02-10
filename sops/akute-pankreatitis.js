(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "akute-pankreatitis",
        title: "Akute Pankreatitis",
        category: "Gastroenterologie",
        catKey: "gi",
        sections: [
            {
                title: "Definition",
                html: `<p><strong>Akute Pankreatitis:</strong> Primär sterile Entzündung der Bauchspeicheldrüse, gekennzeichnet durch eine unphysiologische Enzymaktivierung, die zu einer Entzündungsreaktion mit Ödem, Gefäßschädigung und Zelluntergang führt.</p>
                <h3>Diagnosekriterien (≥ 2 müssen vorliegen):</h3>
                <ul>
                    <li>Typische Abdominalschmerzen</li>
                    <li>Erhöhung der Serum-Lipase auf mindestens das Dreifache der oberen Norm</li>
                    <li>Charakteristische bildmorphologische Befunde</li>
                </ul>`
            },
            {
                title: "Ursachen",
                html: `<ul>
                    <li><strong>Häufig:</strong> Biliär und Alkohol</li>
                    <li><strong>Gelegentlich:</strong> Hypertriglyzeridämie (> 1000 mg/dl), idiopathisch, iatrogen (nach ERCP/Ballonenteroskopie)</li>
                    <li><strong>Selten:</strong> Hyperkalzämie, autoimmun, hereditär</li>
                    <li><strong>Medikamente:</strong> z. B. Furosemid, Steroide, Simvastatin, Valproat</li>
                    <li><strong>Mechanisch:</strong> z. B. Malignom, Papillenstenose, Pankreas divisum</li>
                    <li><strong>Infektionen:</strong> z. B. CMV, Mumps</li>
                    <li><strong>Sonstige:</strong> Ischämisch, traumatisch</li>
                </ul>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li>Akute, häufig gürtelförmige Oberbauchschmerzen</li>
                    <li>Übelkeit, Erbrechen</li>
                    <li>Meteorismus</li>
                    <li>Zeichen eines paralytischen (Sub-)Ileus</li>
                    <li>ggf. Schockzeichen</li>
                    <li>ggf. livide Hautverfärbungen/Ekchymosen an Nabel/Flanken/Leiste (Cullen-/Grey-Turner-/Fox-Zeichen)</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur)</li>
                    <li>2x großlumiger venöser Zugang</li>
                    <li><strong>Venöse BGA:</strong> pH? BE? Hb? ionisiertes Kalzium? Glukose? Laktat?</li>
                    <li><strong>Labor:</strong> BB, CRP, E'lyte inkl. Kalzium, NW, Gerinnung, GOT, GPT, LDH, Bilirubin, AP, γ-GT, Lipase, Triglyceride, TSH, Albumin, ggf.: hs-Troponin, PCT, IgG4, β-HCG</li>
                    <li><strong>12-Kanal-EKG:</strong> z. A. ST-Hebungsinfarkt als Differentialdiagnose bei Oberbauchschmerzen</li>
                    <li><strong>Anamnese:</strong> Symptome? Erstereignis? Vorerkrankungen/-OP? Gallensteine? Alkoholkonsum? Medikamente? FA für Pankreatitis, Malignome?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Ikterus? Druckschmerz im Oberbauch? "Gummibauch"? Peritonismus? Verminderte Darmgeräusche? Hautverfärbungen?</li>
                    <li><strong>POCUS:</strong> Ödematöses Pankreas? Peripankreat. Flüssigkeit? Nekrosen? Choledocho-/Zystolithiasis? Cholestase? Choledocholithiasis? Aszites? Pleuraergüsse?</li>
                    <li><strong>ggf. CT-Abdomen mit KM:</strong> nur bei diagnostischer Unsicherheit oder V. a. akute lokale Komplikationen wie z. B. Gefäßarrosion</li>
                    <li><strong>ggf. Endosonografie und ERCP:</strong> bei akuter biliärer Pankreatitis mit Choledocholithiasis/Gallengangsobstruktion und/oder Cholangitis</li>
                    <li><strong>ggf. MRT/MRCP:</strong> bei unklarer Genese der Pankreatitis und Nicht-Durchführbarkeit der Endosonografie und ERCP</li>
                </ul>
                <h3>Abhängig vom klinischen Zustand des Patienten:</h3>
                <ul>
                    <li>Anlage eines DK (Monitoring der Diurese, Bilanz, ggf. Messung des intraabdominellen Drucks bei V. a. intraabdominelles Kompartment-Syndrom)</li>
                    <li>Anlage einer Magensonde bei rezidivierendem Erbrechen und zur frühen enteralen Ernährung</li>
                    <li>Anlage eines zentralen Venenkatheters (bei Notwendigkeit einer Katecholamintherapie)</li>
                    <li>Anlage eines arteriellen Zugangs (bei hämodynamischer Instabilität oder respiratorischer Kompromittierung)</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p>Rücksprache mit Gastroenterologie bei V. a. biliäre Pankreatitis zwecks Planung Endosonografie und ERCP!</p>
                </div>`
            },
            {
                title: "Therapie",
                html: `<h3>Volumentherapie</h3>
                <ul>
                    <li><strong>Vollelektrolytlösung:</strong> z. B. 1000 ml 1-1-1-1 i.v. (bzw. Bolus von 500 ml über 30 min., dann 200-250 ml/h, dann zielgerichtete Volumentherapie)</li>
                    <li><strong>CAVE:</strong> An Volumenstatus, Komorbiditäten und kardiale Leistungsfähigkeit anpassen!</li>
                    <li><strong>Faustformel:</strong> ca. 3-4 l Volumengabe in ersten 24 h häufig ausreichend.</li>
                    <li>Zielgerichtete Volumentherapie durchführen (Orientierung an Vitalparametern, Rekap-Zeit, Diurese, Labor, POCUS, "Passive Leg Raise", etc.).</li>
                    <li>Sowohl zu geringe als auch übermäßige Volumenzufuhr sind mit schlechterem Outcome assoziiert!</li>
                </ul>
                <h3>Analgesie</h3>
                <ul>
                    <li><strong>Metamizol</strong> (Novalgin®) 1 g 1-1-1-1 als Kurzinfusion i.v.</li>
                    <li>ggf. zusätzlich <strong>Piritramid</strong> (Dipidolor®) 7,5 mg 1-1-1-1 als Kurzinfusion i.v.</li>
                    <li>ggf. <strong>PDA durch Anästhesie:</strong> bei starken, medikamentös nicht kontrollierbaren Schmerzen; zur Opiateinsparung bei paralytischem Ileus.</li>
                </ul>
                <h3>Enterale Ernährung</h3>
                <ul>
                    <li>Enterale Ernährung so früh wie möglich beginnen (Fasten zur "Ruhigstellung" des Pankreas ist obsolet!).</li>
                    <li>Innerhalb des ersten Tages nach Krankenhausaufnahme orale Kost anbieten (fettreduzierte Vollkost).</li>
                    <li>Falls keine orale Ernährung möglich: Enterale Ernährung via Magensonde beginnen (bei fehlenden Kontraindikationen innerhalb 48 h bei schwerer Pankreatitis, innerhalb von 5 Tagen bei milder Pankreatitis).</li>
                </ul>
                <h3>Antibiotika</h3>
                <ul>
                    <li><strong>Keine routinemäßige Gabe von Antibiotika</strong> bei Pankreatitis (weder prophylaktisch noch therapeutisch!).</li>
                    <li>Antibiotische Therapie indiziert bei Pankreatitis mit Verdacht auf:
                        <ul>
                            <li>Begleitende Cholangitis (z. B. Metronidazol 500 mg 1-1-1 i.v. + Ceftriaxon 2 g 1-0-0 i.v.)</li>
                            <li>Infizierte Nekrosen, infizierte Pseudozysten, Abszess (z. B. Meropenem 1 g 1-1-1 i.v. für 7-10 d, ggf. Initialdosis am 1. Tag von 2 g 1-1-1 i.v.)</li>
                            <li>Infektiöse Begleiterkrankung (Harnwegsinfekt, Pneumonie, etc.): Antibiotikum nach hausinternem Standard.</li>
                        </ul>
                    </li>
                </ul>
                <h3>ERCP + Sphinkterotomie</h3>
                <ul>
                    <li>Bei biliärer Pankreatitis und begleitender Cholangitis <strong>innerhalb von 24 h</strong>.</li>
                    <li>Bei biliärer Pankreatitis und Choledocholithiasis und/oder Gallengangsobstruktion <strong>innerhalb von 72 h</strong>.</li>
                </ul>
                <h3>Sonstiges</h3>
                <ul>
                    <li>Behandlung von Komplikationen (Pankreaspseudozysten, paralytischer Ileus, Blutungen, intraabdominelles Kompartment, Pleuraergüsse, etc.).</li>
                    <li>Vermeidung von nephrotoxischen Medikamenten.</li>
                </ul>`
            },
            {
                title: "Klassifikation & Scores",
                html: `<h3>Schweregrade (Revidierte Atlanta-Klassifikation)</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Schweregrad</th>
                                <th>Definition</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Milde Pankreatitis</strong></td>
                                <td>Kein Organversagen¹, keine lokalen² oder systemischen³ Komplikationen</td>
                            </tr>
                            <tr>
                                <td><strong>Moderate Pankreatitis</strong></td>
                                <td>Transientes (&lt; 48 h) Organversagen¹ und/oder lokale² bzw. systemische³ Komplikationen</td>
                            </tr>
                            <tr>
                                <td><strong>Schwere Pankreatitis</strong></td>
                                <td>Persistierendes (&gt; 48 h) Organ- bzw. Multiorganversagen¹</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p><small>¹ Organversagen bezieht sich auf Atmungs- und Herz-Kreislaufsystem sowie Nierenfunktion.<br>
                ² Lokale Komplikationen: Peripankreatische Flüssigkeitsansammlung, Nekrosen, Pseudozysten, Blutungen, Venenthrombosen, gastrale bzw. duodenale Stenosen.<br>
                ³ Systemische Komplikationen: Exazerbation bestehender Komorbiditäten durch die Pankreatitis.</small></p>

                <h3>BISAP-Score (Bedside Index of Severity in Acute Pancreatitis)</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Parameter</th>
                                <th>Kriterium</th>
                                <th>Punkte</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>BUN (bzw. Harnstoff)</strong></td>
                                <td>BUN &gt; 25 mg/dl bzw. Harnstoff &gt; 54 mg/dl</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><strong>Impaired mental status</strong></td>
                                <td>Desorientiertheit, Lethargie oder Vigilanzminderung</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><strong>SIRS</strong></td>
                                <td>≥ 2 Kriterien erfüllt (Temp. &gt; 38 oder &lt; 36°C; HF &gt; 90; AF &gt; 20 oder pCO2 &lt; 32; Leukozyten &lt; 4 oder &gt; 12/nl oder ≥ 10% unreife Neutrophile)</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><strong>Alter</strong></td>
                                <td>&gt; 60 Jahre</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td><strong>Pleuraerguss</strong></td>
                                <td>vorhanden</td>
                                <td>1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li>Die Höhe der Lipase korreliert nicht mit der Krankheitsschwere.</li>
                    <li>Eine Pankreatitis ist eine sterile Entzündung, daher AB-Gabe ausschließlich bei V. a. bakterielle Superinfektion.</li>
                    <li>Hyperkalzämie kann eine Pankreatitis auslösen, ein niedriger oder fallender Kalziumwert zeigt schweren Verlauf an.</li>
                    <li>Keine generelle Nahrungskarenz, frühe enterale Ernährung anstreben (senkt u.a. Rate an Organversagen).</li>
                    <li>Keine routinemäßige CT-Untersuchung bei akuter Pankreatitis in der Frühphase (&lt; 48 h nach Schmerzbeginn).</li>
                    <li>Hinweise für biliäre Pankreatitis: Anamnese (bekanntes Gallensteinleiden, bierbrauner Urin, heller Stuhlgang), Bildgebung (Cholezysto-/docholithiasis, Gallengangserweiterung), Labor (GPT &gt; 3 x der Norm; Bilirubin, AP, γ-GT erhöht).</li>
                    <li>Wenn bei Aufnahme der Kreatininwert &lt; 2 mg/dl und der Hämatokrit &lt; 43 % (Männer) bzw. &lt; 39,6 % (Frauen) liegen und kein Peritonismus besteht (= Harmless Acute Pancreatitis Score von 0 Punkten), ist ein schwerer Verlauf unwahrscheinlich.</li>
                </ul>`
            },
            {
                title: "Disposition",
                html: `<ul>
                    <li><strong>Normalstation:</strong> BISAP &lt; 3 Punkte und effiziente medikamentöse Schmerzkontrolle.</li>
                    <li><strong>Überwachungsstation (IMC/ICU):</strong> BISAP ≥ 3 Punkte oder V. a. moderaten/schweren Verlauf oder Notwendigkeit zur PDA.</li>
                </ul>`
            }
        ],
        stand: "12/22",
        sources: `Beyer G et al. S3-Leitlinie Pankreatitis. Leitlinie der Deutschen Gesellschaft für Gastroenterologie, Verdauungs- und Stoffwechselkrankheiten (DGVS). September 2021 – AWMF Registernummer 021 - 003.<br>
        Waller A et al. Acute Pancreatitis: Updates for Emergency Clinicians. J Emerg Med. 2018 Dec;55(6):769-779.<br>
        Goodchild G et al. Practical guide to the management of acute pancreatitis. Frontline Gastroenterol. 2019 Jul;10(3):292-299.<br>
        Rinninella E et al. Nutritional support in acute pancreatitis: from pathophysiology to practice. An evidence-based approach. Eur Rev Med Pharmacol Sci. 2017 Jan;21(2):421-432.<br>
        Ona XB et al. Opioids for acute pancreatitis pain. Cochrane Database Syst Rev. 2013 Jul 26;(7):CD009179.<br>
        S2k-Leitlinie "Kalkulierte parenterale Initialtherapie bakterieller Erkrankungen bei Erwachsenen – Update 2018" (AWMF-Register-Nr. 082-006).<br>
        Fachinformationen der genannten Arzneimittel, Stand 12/22.`
    });
})();