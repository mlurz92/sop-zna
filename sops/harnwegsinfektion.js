(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "harnwegsinfektion",
        title: "Harnwegsinfektion",
        category: "Infektiologie",
        catKey: "infekt",
        sections: [
            {
                title: "Definition",
                content: `<ul>
                    <li><strong>Harnwegsinfektion (HWI):</strong> Infektion der Harnwege</li>
                    <li><strong>Zystitis (= untere Harnwegsinfektion):</strong> Entzündung der Harnblase</li>
                    <li><strong>Pyelonephritis (= obere Harnwegsinfektion):</strong> Interstitielle eitrige Entzündung der Niere</li>
                </ul>
                <h3>Zusätzliche Einteilung:</h3>
                <ul>
                    <li><strong>Unkompliziert vs. kompliziert:</strong> bei Vorliegen von ≥ 1 komplizierendem Faktor (s. Abschnitt unten)</li>
                    <li><strong>Rezidivierende Harnwegsinfektion:</strong> ≥ 2 Infektionen/Halbjahr oder ≥ 3 Infektionen/Jahr</li>
                </ul>`
            },
            {
                title: "Ursachen",
                content: `<ul>
                    <li><strong>Meist bakterielle Infektion:</strong> 80% E. coli, P. mirabilis, S. saprophyticus, K. pneumoniae, P. aeruginosa etc.</li>
                    <li><strong>Selten:</strong> Viren, Pilze oder Parasiten</li>
                    <li><strong>Prädisponierende Faktoren:</strong> weibliches Geschlecht, sexuelle Aktivität, komplizierende Faktoren (s. unten), etc.</li>
                </ul>`
            },
            {
                title: "Symptome",
                content: `<ul>
                    <li><strong>Zystitis:</strong> Algurie, imperativer Harndrang, Pollakisurie, Schmerzen oberhalb der Symphyse</li>
                    <li><strong>Pyelonephritis:</strong> Fieber, Schüttelfrost, Flankenschmerz, Übelkeit/Erbrechen, klopfschmerzhaftes Nierenlager</li>
                    <li><strong>Bei älteren Patienten:</strong> häufiger oligosymptomatisch bzw. unspezifische Beschwerden (z.B. Fieber, neue Harninkontinenz, Delir)</li>
                    <li><strong>ggf. Zeichen einer begleitenden Prostatitis:</strong> perineale Schmerzen, Schmerzen bei Defäkation, Myalgien, Fieber, Krankheitsgefühl</li>
                    <li><strong>ggf. Zeichen einer Urosepsis:</strong> Tachypnoe, Hypotonie, Vigilanzminderung, etc.</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                content: `<h3>Basisdiagnostik</h3>
                <p><em>(Bei ansonsten gesunden, nicht schwangeren Frauen und typischer Anamnese für unkomplizierte Zystitis ausreichend!)</em></p>
                <ul>
                    <li><strong>Ersteindruck + Anamnese:</strong> Algurie, Pollakisurie, Nykturie, Hämaturie, imperativer Harndrang, Inkontinenz? Urinfarbe/-geruch? Erbrechen? Fieber? Flankenschmerz? Frühere HWI? Komplizierende Faktoren? Reise-/Sexualanamnese?</li>
                    <li><strong>Abgrenzung zu sexuell übertragbaren Krankheiten:</strong> Vaginaler Juckreiz/Ausfluss?</li>
                </ul>
                <h3>Zusätzlich bei V.a. komplizierte, rezidivierende oder therapierefraktäre HWI, Pyelonephritis oder Urosepsis</h3>
                <ul>
                    <li><strong>ABCDE + Vitalparameter</strong> (RR, Puls, SpO₂, AF, Temperatur)</li>
                    <li><strong>Körperliche Untersuchung:</strong> Suprapubischer Druckschmerz? Nierenlagerklopfschmerz? Dauerkatheter? ♀: Uterusprolaps? ♂: Phimose? DRU: Prostatitis?</li>
                    <li><strong>Urinstatus</strong> (Leukozyten? Nitrit? Hämaturie? Proteinurie?) und <strong>Urinkultur</strong></li>
                    <li><strong>POCUS:</strong> Harnstau? Harnverhalt? Pyelonephritis? Abszess? Hinweise für komplizierende Faktoren? Differentialdiagnosen?</li>
                    <li><strong>ggf. 1-2 x venöser Zugang</strong></li>
                    <li><strong>ggf. Labor:</strong> BB, CRP, E'lyte, NW, ggf.: PCT, Bilirubin, β-HCG</li>
                    <li><strong>venöse BGA</strong> (Laktat?)</li>
                    <li><strong>ggf. ≥ 2 Paar Blutkulturen</strong></li>
                    <li><strong>ggf. weiterführende Diagnostik:</strong> z.B. gynäkologische/urologische/venerologische Vorstellung</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p>Bei entsprechender Indikation interdisziplinäre Rücksprache mit Urologie/Gynäkologie/Venerologie!</p>
                </div>`
            },
            {
                title: "Weitere Differentialdiagnosen bei Dysurie",
                content: `<ul>
                    <li><strong>♀:</strong> Urethritis, Vulvovaginitis, Salpingitis, Adnexitis, Endometriose</li>
                    <li><strong>♂:</strong> Balanitis, Urethritis, Prostatitis, Epididymitis, benignes Prostatasyndrom</li>
                    <li><strong>♀ + ♂:</strong> Harnleiterstriktur, Harnverhalt, Uro-/Nephrolithiasis, Schmerzen nach Katheteranlage, interstitielle Zystitis, Tumoren</li>
                </ul>
                <div class="callout callout-hinweis">
                    <p>Genitaler Juckreiz/Ausfluss spricht gegen Harnwegsinfektion und für eine sexuell übertragbare Krankheit!</p>
                </div>`
            },
            {
                title: "Therapie",
                content: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li>Bedarfsgerechte analgetische Therapie, z.B. mit <strong>Ibuprofen</strong> und/oder <strong>Paracetamol</strong> (Kontraindikationen beachten)</li>
                    <li>Empirische Antibiotika-Therapie gemäß ABS-Hausleitlinie unter Berücksichtigung individueller Faktoren (Vorbefunde/-therapien, resistente Keime, Krankenhausaufenthalte, komplizierende Faktoren, Reiseanamnese) und der lokalen Resistenzlage</li>
                    <li><strong>Ursache/komplizierenden Faktor behandeln:</strong> DK wechseln bzw. entfernen, Doppel-J-Schiene bei Harnstauungsniere, Behandlung einer BPH, etc.</li>
                    <li><strong>Präventionsberatung:</strong> ausreichende Trinkmenge (> 2l/d, CAVE: KI wie HFrEF beachten), Miktion nach Geschlechtsverkehr, etc.</li>
                    <li>Bei unsicherer Diagnose und klinischer Stabilität kann das Ergebnis der Urinkultur abgewartet werden</li>
                </ul>
                <h3>Zystitis</h3>
                <h4>Unkompliziert:</h4>
                <ul>
                    <li>ggf. rein symptomatische Therapie (z.B. Trinkmenge 2-3 Liter, Wärmflasche, Ibuprofen 400 mg 1-1-1 für 3-5 d) mit <strong>"Delayed Prescription"</strong> (Antibiotika-Rezeptierung, Einlösung und Einnahme bei fehlender Besserung nach 48 h)</li>
                    <li>meist empirische orale Antibiotikatherapie mit z.B.:
                        <ul>
                            <li><strong>Fosfomycin</strong> 3 g 0-0-0-1 p.o. einmalig (Mittel der Wahl in Schwangerschaft)</li>
                            <li><strong>Nitrofurantoin retard</strong> 100 mg 1-0-1 p.o. für 5 d (CAVE: nicht bei GFR < 45 ml/min, potentiell lebertoxisch)</li>
                            <li><strong>Nitroxolin</strong> 250 mg 1-1-1 p.o. für 5 d (begrenzte Datenlage)</li>
                            <li><strong>Pivmecillinam</strong> 400 mg 1-1-1 p.o. für 3 d (Mittel der Wahl in Schwangerschaft, CAVE: Penicillin-Allergie)</li>
                            <li><strong>Trimethoprim</strong> 200 mg 1-0-1 p.o. für 3 d (nicht bei lokaler Resistenzlage von E.coli > 20%)</li>
                        </ul>
                    </li>
                </ul>
                <h4>Kompliziert:</h4>
                <ul>
                    <li>bei leichtem Verlauf: Antibiotikum abhängig von komplizierendem Faktor, optimal gemäß Antibiogramm, empirisch z.B.:
                        <ul>
                            <li><strong>♀ in Schwangerschaft</strong> ohne weitere Risikofaktoren: Pivmecillinam oder Fosfomycin (s. unkomplizierte Zystitis)</li>
                            <li><strong>♂ jüngeren Alters</strong> ohne begleitende Prostatitis: Pivmecillinam oder Nitrofurantoin (s. unkomplizierte Zystitis)</li>
                            <li><strong>♂ mit begleitender Prostatitis:</strong> Ciprofloxacin 500-750 mg 1-0-1 p.o. für 14 d</li>
                        </ul>
                    </li>
                    <li>bei schwerem Verlauf: <strong>Ceftriaxon</strong> 2 g 1-0-0 i.v. für 5-7 d</li>
                </ul>
                <h3>Pyelonephritis</h3>
                <h4>Unkompliziert:</h4>
                <ul>
                    <li>bei leichtem Verlauf: <strong>Cefpodoxim</strong> 200 mg 1-0-1 p.o. für 10 d (Alternativ: Ciprofloxacin 500-750 mg 1-0-1 p.o. für 7-10 d)</li>
                    <li>bei schwerem Verlauf: <strong>Ceftriaxon</strong> 2 g 1-0-0 i.v. für 5-7 d (Alternativ: Ciprofloxacin 400 mg 1-1-1 i.v. für 5-7 d)</li>
                </ul>
                <h4>Kompliziert:</h4>
                <ul>
                    <li><strong>Ceftriaxon</strong> 2 g 1-0-0 i.v. für 5-7 d</li>
                </ul>
                <h3>Urosepsis</h3>
                <ul>
                    <li>Stabilisierung der Vitalfunktionen gemäß ABCDE-Schema</li>
                    <li><strong>Vollelektrolytlösung</strong> (mind. 30 ml/kg KG ≙ ca. 2 l) bei Hypoperfusion oder Schock ≤ 3 h infundieren (s. SOP Sepsis)
                        <br><strong>CAVE:</strong> An Volumenstatus, Komorbiditäten und kardiale Leistungsfähigkeit anpassen!</li>
                    <li><strong>Antibiotikatherapie schnellstmöglich</strong> (d.h. ≤ 1 h):
                        <ul>
                            <li><strong>Piperacillin/Tazobactam</strong> 4,5 g 1-1-1-1 i.v.</li>
                            <li>(ambulant erworben/kein Risiko für Resistenzen/P. aeruginosa: Ceftriaxon 2 g 1-0-1 i.v., dann 1-0-0 i.v.)</li>
                        </ul>
                    </li>
                </ul>
                <h4>Nosokomial erworben / V.a. resistente Erreger / V.a. P. aeruginosa und schwerer Verlauf:</h4>
                <ul>
                    <li><strong>Piperacillin/Tazobactam</strong> 4,5 g 1-1-1-1 i.v. oder</li>
                    <li><strong>Meropenem</strong> 2 g 1-1-1 i.v., dann 1 g 1-1-1 i.v.</li>
                </ul>
                <h3>Asymptomatische Bakteriurie</h3>
                <p><em>(Positiver Urinstatus ohne klinische Beschwerden)</em></p>
                <ul>
                    <li><strong>Keine Antibiotikatherapie</strong> (Ausnahme: antibiogrammgerechte Therapie vor Intervention im Harntrakt oder bei Schwangeren)</li>
                </ul>`
            },
            {
                title: "Merke",
                content: `<ul>
                    <li>Positive Urinkultur ≠ HWI → asymptomatische Bakteriurie bzw. Kontamination bedenken</li>
                    <li>Urinstatus/Urinkultur nur bei begründetem Verdacht auf HWI anfordern</li>
                    <li>Strenge Indikationsstellung für DK und Überprüfung der Notwendigkeit bei bereits liegendem DK (Vermeidung iatrogener HWI)</li>
                    <li>Bei HWI und liegendem DK muss ein DK-Wechsel erfolgen (bzw. DK-Entfernung bei fehlender Indikation)</li>
                    <li>Kein routinemäßiger Einsatz von Fluorchinolonen bei unkomplizierter Zystitis (Resistenzen und Nebenwirkungen, s. „Rote-Hand-Briefe“)</li>
                    <li>Nach Beendigung der Antibiotikatherapie bei Schwangeren, Männern, Pyelonephritis und komplizierten Harnwegsinfektionen sollte eine erneute Urinkultur angelegt werden</li>
                    <li>Eine Pyelonephritis bei Schwangeren sollte stationär intravenös behandelt werden</li>
                </ul>`
            },
            {
                title: "Komplizierende Faktoren bei Harnwegsinfektionen",
                content: `<p><em>Harnwegsinfektionen bei Männern und Schwangeren werden in der Regel als kompliziert gewertet!</em></p>
                <h3>Anatomische Veränderungen</h3>
                <ul>
                    <li><strong>Angeboren:</strong> z.B. Ureterabgangsstenose, Harnblasendivertikel, Phimose</li>
                    <li><strong>Erworben:</strong> z.B. Urolithiasis, Strikturen, Tumoren, Prostatavergrößerung, postoperativ, nach Radiatio, Schwangerschaft</li>
                </ul>
                <h3>Funktionelle Veränderungen</h3>
                <ul>
                    <li>Niereninsuffizienz, Harntransportstörungen, Entleerungsstörungen der Harnblase</li>
                    <li>Immunsuppression, z.B. HIV, medikamentös, Leberinsuffizienz, entgleister/schlecht eingestellter Diabetes mellitus</li>
                    <li><strong>Eingebrachte Fremdkörper:</strong> z.B. Harnblasenkatheter, Harnleiterschienen, Nephrostomie</li>
                </ul>`
            },
            {
                title: "Disposition",
                content: `<div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Klinik</th>
                                <th>Empfehlung</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Leichter Krankheitsverlauf</strong></td>
                                <td>Ambulant; bei Pyelonephritis oder komplizierter Zystitis <strong>immer</strong> ambulante Nachsorge</td>
                            </tr>
                            <tr>
                                <td><strong>Schwerer Krankheitsverlauf</strong></td>
                                <td>Stationäre Aufnahme</td>
                            </tr>
                            <tr>
                                <td><strong>Urosepsis</strong></td>
                                <td>Überwachungsstation (IMC/ICU)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            }
        ],
        stand: "02/25",
        sources: `Deutsche Gesellschaft für Urologie e.V. (Hrsg.): S3 Leitlinie: Epidemiologie, Diagnostik, Therapie, Prävention und Management unkomplizierter, bakterieller, ambulant erworbener Harnwegsinfektionen bei Erwachsenen, Aktualisierung 2024. Langversion, 3.0, AWMF Register-nummer: 043/044.
        <br>S2k Leitlinie „Kalkulierte parenterale Initialtherapie bakterieller Erkrankungen bei Erwachsenen - Update 2018“, 2. aktualisierte Version.
        <br>Kranz J et al. European Association of Urology Guidelines on Urological Infections: Summary of the 2024 Guidelines. Eur Urol. 2024 Jul;86(1):27-41.
        <br>Schulz L et al. Top Ten Myths Regarding the Diagnosis and Treatment of Urinary Tract Infections. J Emerg Med. 2016 Jul;51(1):25-30.
        <br>Bremnor JD et al. Evaluation of dysuria in adults. Am Fam Physician. 2002 Apr 15;65(8):1589-96.
        <br>Erneut bestätigt - keine Schmerzmittel allein gegen unkomplizierte Zystitis; arznei-telegramm 2018; 49(6):5.
        <br>urologielehrbuch.de, akdae.de (zuletzt abgerufen 29.01.2025).`
    });
})();