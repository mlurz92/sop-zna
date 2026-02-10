(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "tachykarde-hrst",
        title: "Tachykarde Herzrhythmusstörungen",
        category: "Kardiologie",
        catKey: "kardio",
        stand: "12/22",
        sections: [
            {
                title: "Definition",
                html: `<p><strong>Tachykarde Herzrhythmusstörung:</strong> Herzrhythmusstörung mit einer Herzfrequenz > 100/min.</p>`
            },
            {
                title: "Ursachen",
                html: `<ul>
                    <li><strong>Medikamente:</strong> Betasympathomimetika, Theophyllin, Nitrate, Anticholinergika, etc.</li>
                    <li><strong>Stimulantien / Drogen:</strong> Alkohol, Koffein, Kokain, Amphetamine, etc.</li>
                    <li><strong>Elektrolytstörung:</strong> Hypokaliämie, Hypokalzämie, Hypomagnesiämie, etc.</li>
                    <li><strong>Ischämie:</strong> z. B. als Reperfusionsarrhythmien bei akutem Myokardinfarkt.</li>
                    <li><strong>Sympathikusaktivierung:</strong> Angst, Stress, Schmerzen, körperliche Betätigung, Hypoglykämie, Hyperthermie, Anämie, Hypovolämie, Substanz-Entzug, etc.</li>
                    <li><strong>Extrakardiale Akuterkrankung:</strong> Lungenarterienembolie, Hyperthyreose, Phäochromozytom, etc.</li>
                    <li><strong>Infektion / Infiltration / Autoimmun:</strong> Myokarditis, Sarkoidose, Amyloidose, etc.</li>
                    <li><strong>Strukturelle kardiale Pathologien:</strong> akzessorische Leitungsbahnen, Narben, Fibrosierungen, Vitien, Kardiomyopathien, etc.</li>
                    <li><strong>Long-QT-Syndrom:</strong> angeboren oder erworben.</li>
                    <li><strong>Nach kardialen Interventionen:</strong> z. B. atriale Tachykardien nach Pulmonalvenenisolation, bei Schrittmacherfehlfunktion.</li>
                </ul>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li>Asymptomatisch.</li>
                    <li>Symptomatisch <strong>ohne Anzeichen für Lebensgefahr</strong> (= Patient stabil): z. B. Palpitationen, Unruhegefühl, Belastungsdyspnoe.</li>
                    <li>Symptomatisch <strong>mit Anzeichen für Lebensgefahr</strong> (= Patient instabil):
                        <ul>
                            <li><strong>Schock:</strong> systolischer Blutdruck < 90 mmHg mit Symptomen erhöhter sympathischer Aktivität und verminderter zerebraler Durchblutung.</li>
                            <li><strong>Synkope.</strong></li>
                            <li><strong>Myokardiale Ischämie:</strong> Angina pectoris und/oder ischämietypische EKG-Veränderungen.</li>
                            <li><strong>Schwere Herzinsuffizienz:</strong> Linksherzversagen mit Lungenödem oder Rechtsherzversagen mit erhöhtem jugular-venösem Druck.</li>
                        </ul>
                    </li>
                </ul>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur).</li>
                    <li>1-2x venöser Zugang.</li>
                    <li><strong>Venöse BGA:</strong> (pH? pCO₂? BE? E'lyte? Glukose? Laktat?).</li>
                    <li><strong>Labor:</strong> BB, CRP, E'lyte inklusive Magnesium, NW, TSH, ggf. hs-Troponin, NT-proBNP, D-Dimere, Gerinnung.</li>
                    <li><strong>12-Kanal-EKG:</strong> (Schmal- oder Breitkomplextachykardie? Regelmäßig oder unregelmäßig? Ischämiezeichen? Zeichen für Elektrolytstörungen?).</li>
                    <li><strong>Anamnese:</strong> Symptome? Symptombeginn? Trigger? Palpitationen? Schwindel? Synkope? AP? Dyspnoe? Medikamente? Vorerkrankungen, insbesondere kardial?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Vigilanz? Rekap-Zeit? Hinweise für kardiale Dekompensation? Sternotomienarben? Struma? Endokrine Orbitopathie?</li>
                    <li><strong>ggf. POCUS:</strong> VCI? Pulmonale B-Linien? Pleuraergüsse? LV-EF? Wandbewegungsstörungen? Rechtsherzbelastungszeichen? Perikarderguss?</li>
                </ul>
                <div class="callout callout-hinweis">
                    <p><strong>Wichtige Fragen klären:</strong></p>
                    <ol>
                        <li>Handelt es sich um eine Sinustachykardie oder Tachyarrhythmia absoluta als "Bedarfstachykardie"?</li>
                        <li>Ist der Patient stabil oder instabil?</li>
                        <li>Handelt es sich um eine Breit- oder Schmalkomplextachykardie?</li>
                        <li>Ist die Tachykardie regelmäßig oder unregelmäßig?</li>
                    </ol>
                </div>
                <div class="callout callout-wichtig">
                    <p>Frühzeitige Rücksprache mit Kardiologie und Überwachungsstation (IMC/ICU) bei instabilen Patienten!</p>
                </div>`
            },
            {
                title: "Therapie",
                html: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li>Stabilisierung der Vitalfunktionen gemäß ABCDE-Schema.</li>
                    <li>Ursachen beheben (Elektrolytstörungen behandeln, PCI bei Myokardinfarkt, etc.).</li>
                    <li><strong>Bei Anzeichen für Lebensgefahr (= Patient instabil):</strong> Sofortige <strong>elektrische Kardioversion</strong> (s. Anleitung).</li>
                    <li><strong>Keine Anzeichen für Lebensgefahr (= Patient stabil):</strong> medikamentöse Therapie, falls frustran: ggf. elektrische Kardioversion.</li>
                </ul>
                <h3>Spezifische Therapie</h3>
                <h4>Sinustachykardie</h4>
                <ul>
                    <li><strong>Kausale Therapie:</strong> z. B. Volumenmangel ausgleichen, Glukose bei Hypoglykämie, adäquate Analgesie, Entzug behandeln, LAE behandeln.</li>
                    <li>Nur in Ausnahmefällen bei symptomatischer inadäquater Sinustachykardie: Ivabradin und/oder Betablocker.</li>
                </ul>
                <h4>Vorhofflimmern / Vorhofflattern</h4>
                <ul>
                    <li>siehe spezifische SOP Vorhofflimmern.</li>
                </ul>
                <h4>Supraventrikuläre Tachykardie (SVT)</h4>
                <p>z. B. AVNRT, AVRT (+ ggf. Schenkelblock, falls sicher nachgewiesen)</p>
                <ul>
                    <li><strong>Modifiziertes Valsalva-Manöver gemäß REVERT-Trial:</strong> Patient soll in 30° Oberkörperhochlagerung 15 s in eine 10 ml Spritze mit maximaler Kraft pusten, dann Kopfteil rasch flach stellen und Füße des Patienten passiv 45° für 15 s anheben.</li>
                    <li><strong>Falls frustran: Adenosin (Adrekar®):</strong> 6 mg (12, 18 mg) über großen, proximalen Zugang schnell i.v. (Defibrillationsbereitschaft!).
                        <ul>
                            <li>Vorsicht bei Asthma bronchiale.</li>
                            <li>Patienten vor Adenosingabe über potenziell unangenehmes Gefühl ("wie wenn Herz stehenbleibt") aufklären und beruhigen.</li>
                            <li><strong>Merke:</strong> Während Valsalva-Manöver oder Adenosin-Gabe stets 12-Kanal-EKG-Rhythmusstreifen schreiben!</li>
                        </ul>
                    </li>
                </ul>
                <h4>AVRT (z. B. WPW-Syndrom) + Vorhofflimmern</h4>
                <p><strong>(= "Fast Broad Irregular"-Tachykardie)</strong></p>
                <ul>
                    <li>Elektrische Kardioversion.</li>
                    <li><div class="callout callout-cave">Medikamente, die die AV-Knoten-Überleitung bremsen, sind <strong>kontraindiziert</strong>: Adenosin, Betablocker, Digitalis, Verapamil!</div></li>
                </ul>
                <h4>Ventrikuläre Tachykardie (VT) oder unklare regelmäßige Breitkomplextachykardie</h4>
                <ul>
                    <li>Elektrische Kardioversion und/oder</li>
                    <li><strong>Amiodaron (Cordarex®):</strong> 300 mg (≙ 2 Ampullen) in 250 ml G5%-Lösung über 10 bis 60 min i.v.</li>
                    <li><strong>Kontraindikationen:</strong> Schilddrüsenerkrankung, Jodallergie, Hypokaliämie, QTc-Zeit-Verlängerung.</li>
                </ul>
                <h4>Torsade-de-Pointes-Tachykardie</h4>
                <ul>
                    <li>Elektrische Kardioversion.</li>
                    <li><strong>2 g Magnesium</strong> (≙ 4 ml 50% Magnesiumsulfat in 50 ml NaCl 0,9%) als Kurzinfusion über 10 min i.v., ggf. wiederholen.</li>
                    <li><strong>Kaliumsubstitution</strong> (Ziel: 4,5 mmol/l), siehe SOP Hypokaliämie.</li>
                    <li>QTc-Zeit-verlängernde Medikamente absetzen.</li>
                    <li>Keine Amiodarongabe (QTc-Zeit-Verlängerung!).</li>
                    <li>ggf. herzfrequenzsteigernde Maßnahmen (u. a. Atropin, Pacing, Zielfrequenz > 90/min), sobald Sinusrhythmus hergestellt.</li>
                </ul>`
            },
            {
                title: "Anleitung zur elektrischen Kardioversion",
                html: `<h3>Periprozedurales Management</h3>
                <ul>
                    <li>O₂-Gabe via Maske mit Reservoir (z. B. 12 l O₂).</li>
                    <li>Kontinuierliches Monitoring (RR, Puls, SpO₂, EKG).</li>
                    <li><strong>Analgosedierung:</strong> z. B. 2-3 mg <strong>Midazolam</strong> und 3,75 mg <strong>Piritramid</strong> i.v. vor elektrischer Kardioversion.
                        <ul>
                            <li>Ausnahmen: Periarrest, kritisch instabile Patienten.</li>
                            <li>Alternativ: 0,5 mg/kg ideales KG <strong>Propofol</strong> mono (bei stabilen Patienten) + 30 mg Boli titriert bis Liedreflex erloschen.</li>
                        </ul>
                    </li>
                </ul>
                <h3>Durchführung</h3>
                <ul>
                    <li><strong>Patches anbringen:</strong> Anterior-Posterior oder Anterior-Lateral ("Reanimations-Position"). Bei SM-Trägern > 8 cm Sicherheitsabstand zum Device.</li>
                    <li><strong>Joulezahl wählen & Synchronisieren:</strong> "Synchronisieren"-Taste drücken und richtige Ableitung wählen (jede R-Zacke muss vom Defibrillator registriert werden).</li>
                    <li><strong>Empfohlene Joulezahl (biphasisch):</strong></li>
                </ul>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Rhythmus</th>
                                <th>Energie (Joule)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Vorhofflimmern</td>
                                <td>maximal verfügbare Energie, z. B. 270 J</td>
                            </tr>
                            <tr>
                                <td>Vorhofflattern oder SVT</td>
                                <td>70 - 120 J</td>
                            </tr>
                            <tr>
                                <td>Ventrikuläre Tachykardie</td>
                                <td>120 - 150 J</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="callout callout-cave">
                    <p><strong>CAVE:</strong> Bei manchen Geräten muss vor jeder erneuten eCV wieder "synchronisieren" gewählt werden (sonst Defibrillation!).</p>
                </div>
                <ul>
                    <li><strong>Schockabgabe:</strong> "Alles weg vom Patienten", Schock auslösen.</li>
                    <li>12-Kanal-EKG zur Dokumentation des Sinusrhythmus nach erfolgreicher Kardioversion.</li>
                </ul>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li>Einer Sinustachykardie liegt fast immer eine akute behandelbare Ursache zugrunde (kausale Therapie, keine Frequenzkontrolle!).</li>
                    <li>Breitkomplextachykardien sind bis zum Beweis des Gegenteils als ventrikuläre Tachykardie zu werten und zu behandeln.</li>
                    <li>Bei kardialer Vorerkrankung ist eine Breitkomplextachykardie zu > 90 % eine VT.</li>
                </ul>`
            },
            {
                title: "Disposition",
                html: `<div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Szenario</th>
                                <th>Empfohlene Disposition</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Bekanntes VHF/SVT und Konversion in Sinusrhythmus</td>
                                <td><strong>Ambulantes Procedere</strong> erwägen (s. SOP Vorhofflimmern)</td>
                            </tr>
                            <tr>
                                <td>Erstdiagnose VHF/SVT</td>
                                <td><strong>Stationäre Aufnahme</strong> (zur weiteren Diagnostik)</td>
                            </tr>
                            <tr>
                                <td>Ventrikuläre Tachykardie (auch wenn terminiert)</td>
                                <td>i. d. R. <strong>Überwachungsstation (IMC/ICU)</strong></td>
                            </tr>
                            <tr>
                                <td>Hämodynamisch instabil (unabhängig von Rhythmusart)</td>
                                <td><strong>Überwachungsstation (IMC/ICU)</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            }
        ],
        sources: `Deutscher Rat für Wiederbelebung – GRC. Reanimation 2021 – Leitlinien kompakt. S. 60 f.<br>
        Brugada J et al. 2019 ESC Guidelines for the management of patients with supraventricular tachycardia. Eur Heart J. 2020.<br>
        Zeppenfeld K et al. 2022 ESC Guidelines for the management of patients with ventricular arrhythmias. Eur Heart J. 2022.<br>
        Appelboam A et al. Postural modification to the standard Valsalva manoeuvre (REVERT): a randomised controlled trial. Lancet. 2015.<br>
        Fachinformationen der genannten Arzneimittel, Stand 12/22.`
    });
})();