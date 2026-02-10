// SOP: Akute Nierenschädigung
// Kategorie: Nephrologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "akute-nierenschaedigung",
        title: "Akute Nierenschädigung",
        category: "Nephrologie",
        catKey: "nephro",
        sections: [
            {
                title: "Definition",
                html: `<ul>
                    <li><strong>Akute Nierenschädigung (AKI):</strong> Akut einsetzende, potentiell reversible Abnahme der Nierenfunktion</li>
                </ul>
                <h3>Diagnosekriterien nach KDIGO</h3>
                <ul>
                    <li>Anstieg des Serumkreatinins um ≥ 0,3 mg/dl innerhalb von 48 Stunden <em>oder</em></li>
                    <li>Anstieg des Serumkreatinins auf das ≥ 1,5-Fache innerhalb von 7 Tagen <em>oder</em></li>
                    <li>Neu aufgetretene Reduktion der Urinmenge < 0,5 ml/kg KG/h über 6 Stunden</li>
                </ul>`
            },
            {
                title: "Ursachen",
                html: `<h3>Prärenal: Renale Minderperfusion (ca. 60%)</h3>
                <ul>
                    <li><strong>Hypovolämie:</strong> Unzureichende Flüssigkeitszufuhr bzw. vermehrte Verluste</li>
                    <li><strong>Abfall des arteriellen Blutdrucks:</strong> Sepsis, Herzinsuffizienz, Leberzirrhose, etc.</li>
                </ul>
                <h3>Intrarenal: Direkte Schädigung der Nephrone (ca. 35%)</h3>
                <ul>
                    <li><strong>Tubulär:</strong> Ischämisch, medikamentös-toxisch, infektiös (z.B. Hanta-Virus), Crush-Niere bei Rhabdomyolyse, „Myelomniere“, Uratnephropathie bei Tumorlyse</li>
                    <li><strong>Makrovaskulär:</strong> Nierenarterienstenose, Nierenvenenthrombose, Niereninfarkt, Aortendissektion</li>
                    <li><strong>Mikrovaskulär:</strong> Cholesterinembolie, Thrombotische Mikroangiopathien (DIC, TTP, HUS, HELLP-Syndrom)</li>
                    <li><strong>Glomerulonephritiden:</strong> z.B. Minimal-Change-Glomerulonephritis</li>
                    <li><strong>Lokale bakterielle Infektionen:</strong> Pyelonephritis, Nierenabszess</li>
                </ul>
                <h3>Postrenal: Abflussbehinderung des Harns (ca. 5%)</h3>
                <ul>
                    <li>BPH, Steine, Tumoren, Urethrastrikturen, retroperitoneale Fibrose (M. Ormond)</li>
                    <li>Verstopfter bzw. abgeklemmter DK, medikamentös (s. SOP Akuter Harnverhalt)</li>
                </ul>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li>Keine spezifischen Symptome</li>
                    <li>ggf. Polyurie oder Oligurie/Anurie</li>
                    <li>ggf. Zeichen der <strong>Exsikkose</strong> oder <strong>Hypervolämie</strong></li>
                    <li>ggf. Zeichen der <strong>Urämie</strong> (Foetor urämicus, urämische Gastritis, Enzephalopathie, Perikarderguss, Erbrechen)</li>
                    <li>ggf. Zeichen der zugrundeliegenden Erkrankung</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li><strong>Ersteindruck + ABCDE + Vitalparameter</strong> (RR, Puls, SpO₂, AF, Temperatur)</li>
                    <li>1x venöser Zugang</li>
                    <li><strong>Venöse BGA</strong> (Kalium? Metabolische Azidose?)</li>
                    <li><strong>Labor:</strong> BB, CRP, E‘lyte, NW, CK, LDH, ggf.: Cystatin C, immunologische Diagnostik, Blutausstrich</li>
                    <li><strong>12-Kanal-EKG</strong> (Zeichen der Hyperkaliämie? Niedervoltage?)</li>
                    <li><strong>Vergleich der aktuellen Laborwerte mit Vorwerten</strong> (Niereninsuffizienz bekannt? Dynamik?)</li>
                    <li><strong>Anamnese:</strong> Symptome? Vorerkrankungen? Medikamente? Trinkmenge? Flüssigkeitsverluste? Ausscheidung? KM-Exposition? Kürzliche Hypotonien?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Volumenstatus? Flankenklopfschmerz? Harnverhalt? Zeichen der Urämie?</li>
                    <li><strong>POCUS:</strong> Postrenale Genese? Nierenmorphologie? Auffälligkeiten an Nieren? Volumenstatus: VCI? Ventrikelfülling? Pleurarergüsse? Pulmonale B-Linien?</li>
                    <li><strong>DK-Anlage</strong> (Bilanzierung mit Urinflasche/ tägl. Wiegen bei milden Verläufen) + Urinstatus (Nitrit? Leukos? Hämaturie? Proteinurie?) + ggf. Kultur</li>
                    <li>ggf. <strong>Urinsediment</strong> (Mikroskopie: Leukozyturie? Zahlreiche Tubuluszellen? Glomeruläre Hämaturie?)</li>
                    <li>ggf. <strong>Furosemid-Stresstest</strong> (s. unten)</li>
                    <li>ggf. weitere Diagnostik (z.B. CT bei V.a. makrovaskuläre Ursache, Blutausstrich bei V.a. TTP, Nierenbiopsie bei V.a. RPGN)</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p>Frühzeitige Rücksprache mit Nephrologie bei drohender Dialysenotwendigkeit oder V.a. Glomerulonephritis!</p>
                </div>`
            },
            {
                title: "Therapie",
                html: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li>Absetzen bzw. Pausieren nephrotoxischer Medikamente (NSAR, RAAS-Hemmer, Diuretika - außer bei Hypervolämie)</li>
                    <li>Dosisanpassung von Medikamenten an aktuelle Nierenfunktion gemäß Fachinformation</li>
                    <li>Kontrolle des Wasser-, pH- und Elektrolythaushalts, ggf. mittels Dialyse (siehe Indikationen unten)</li>
                </ul>
                <h3>Prärenale Nierenschädigung</h3>
                <ul>
                    <li>Gabe balancierter <strong>Vollelektrolytlösung</strong> (z.B. 2 l VEL i.v.)</li>
                    <li><strong>Ziel:</strong> Euvolämie und Kreislaufstabilisierung (MAD > 65 mmHg)</li>
                    <li><strong>CAVE:</strong> An Volumenstatus, Komorbiditäten und kardiale Leistungsfähigkeit anpassen!</li>
                </ul>
                <h3>Intrarenale Nierenschädigung</h3>
                <ul>
                    <li>Therapie je nach Grunderkrankung (z.B. Immunsuppression, Revaskularisation, etc.)</li>
                </ul>
                <h3>Postrenale Nierenschädigung</h3>
                <ul>
                    <li>Beseitigung der Abflussbehinderung (z.B. DK-Anlage bei BPH mit Harnverhalt, Spülkatheter bei Blasentamponade)</li>
                    <li>ggf. Verlegung in Urologie</li>
                </ul>
                <h3>Sonstiges</h3>
                <ul>
                    <li><strong>Bei Hypervolämie:</strong> Furosemid i.v. (Dosis abhängig von bestehender diuretischer Therapie)</li>
                </ul>`
            },
            {
                title: "KDIGO-Klassifikation & Dialyseindikationen",
                html: `<h3>KDIGO-Klassifikation der akuten Nierenschädigung</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Grad</th>
                                <th>Serumkreatinin</th>
                                <th>Urinausscheidung</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Anstieg um ≥ 0,3 mg/dl innerhalb von 48 h oder 1,5-1,9-facher Anstieg innerhalb von 7 Tagen</td>
                                <td>< 0,5 ml/kg KG/h für 6-12 h</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>2-2,9-facher Anstieg innerhalb von 7 Tagen</td>
                                <td>< 0,5 ml/kg KG/h für ≥ 12 h</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>≥ 3-facher Anstieg innerhalb von 7 Tagen oder Anstieg auf ≥ 4 mg/dl oder Beginn einer Nierenersatztherapie oder < 18 Jahren: Abfall der eGFR < 35 ml/min/1,73 m²</td>
                                <td>< 0,3 ml/kg KG/h für ≥ 24 h oder Anurie ≥ 12 h</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p><em>Falls Serumkreatinin und Ausscheidung nicht korrespondieren, zählt jeweils das höher erreichte Stadium.</em></p>
                <h3>Indikationen für Notfalldialyse</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Indikation</th>
                                <th>Charakteristika</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Azidose</strong></td>
                                <td>pH < 7,2 oder BE < -10 mmol/l</td>
                            </tr>
                            <tr>
                                <td><strong>Elektrolytentgleisung</strong></td>
                                <td>Kalium > 6,5 mmol/l + EKG-Veränderungen, Schwere Hyperkalzämie</td>
                            </tr>
                            <tr>
                                <td><strong>Intoxikation</strong></td>
                                <td>Lithium, Methanol, andere dialysierbare Toxine</td>
                            </tr>
                            <tr>
                                <td><strong>Overload</strong></td>
                                <td>Diuretika-refraktäre Volumenüberladung (Lungenödem, etc.)</td>
                            </tr>
                            <tr>
                                <td><strong>Urämie</strong></td>
                                <td>Serumharnstoff > 200 mg/dl, Urämische Symptome (Perikarderguss, Enzephalopathie, Erbrechen etc.)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p><em>Richtwerte bei Versagen der konservativen Therapie → Dialysebeginn immer Einzelfallentscheidung.</em></p>`
            },
            {
                title: "Furosemid-Stresstest",
                html: `<p>Der Furosemid-Stresstest darf ausschließlich bei <strong>euvolämen</strong> bzw. hypervolämen Patienten durchgeführt werden und soll nicht bei Patienten mit GFR < 30 ml/min/1,73m² durchgeführt werden. Bei euvolämen Patienten müssen die durch Furosemid induzierten Flüssigkeitsverluste im Anschluss wieder ausgeglichen werden.</p>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Patientengruppe</th>
                                <th>Furosemid-Dosis</th>
                                <th>Keine drohende Dialysepflichtigkeit, wenn Diurese</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Keine Schleifendiuretika in Dauermedikation</td>
                                <td>1 mg/kg KG i.v.</td>
                                <td>> 200 ml Urin innerhalb von 2 h</td>
                            </tr>
                            <tr>
                                <td>Schleifendiuretika in Dauermedikation</td>
                                <td>1,5 mg/kg KG i.v.</td>
                                <td>> 200 ml Urin innerhalb von 2 h</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li>Bei der akuten Nierenschädigung ist eine <strong>regelmäßige Kontrolle der Urinausscheidung</strong> obligat.</li>
                    <li>Keine zeitgleiche Gabe von Schleifendiuretika und Flüssigkeit zur „Nierenspülung“ (DGIM - Klug entscheiden).</li>
                    <li>Keine Gabe von Schleifendiuretika beim oligoanurischen Patienten mit akuter Nierenschädigung (DGIM - Klug entscheiden).</li>
                    <li><strong>Schleifendiuretika nur bei „Überwässerung“</strong> zum Volumenmanagement anwenden.</li>
                    <li>Die Existenz einer Kontrastmittel-Nephropathie bei venöser KM-Applikation wird zunehmend infrage gestellt.</li>
                </ul>`
            },
            {
                title: "Disposition",
                html: `<ul>
                    <li><strong>Keine Dialyseindikation:</strong> Ambulantes Procedere oder stationäre Aufnahme (je nach Schwere und Komorbidität)</li>
                    <li><strong>Bei akuter Dialysenotwendigkeit:</strong> Überwachungsstation (IMC/ICU)</li>
                </ul>`
            }
        ],
        stand: "10/24",
        sources: `Miamed Amboss: „Akutes Nierenversagen“. Stand 16.09.2019.<br>Herold G et al. Innere Medizin 2019.<br>Bienholz A. et al.: KDIGO Leitlinien zum akuten Nierenversagen; Der Nephrologe 2013.<br>Galle, J. Klug entscheiden: ... in der Nephrologie; Dtsch Arztebl 2016.<br>Chawla LS et al. Development and Standardization of a Furosemide Stress Test... Crit Care 2013.<br>Kielstein T et al. Akute Nierenschädigung. Intensivmedizin up2date 2015.<br>Moore PK et al. Management of Acute Kidney Injury. Am J Kidney Dis. 2018.`
    });
})();