// SOP: Abdominelle Schmerzen
// Kategorie: Leitsymptom
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "abdominelle-schmerzen",
        title: "Abdominelle Schmerzen",
        category: "Leitsymptom",
        catKey: "leit",
        sections: [
            {
                title: "Definition",
                html: `<ul>
                    <li><strong>Abdominelle Schmerzen:</strong> Schmerzen im Bereich des Bauches</li>
                    <li><strong>Akutes Abdomen:</strong> Potenziell lebensbedrohliches Krankheitsbild mit plötzlich auftretenden, starken Bauchschmerzen, abdomineller Abwehrspannung und Kreislaufinstabilität, das einer raschen Differentialdiagnostik und meist chirurgischer Therapie bedarf</li>
                    <li><strong>Unklares Abdomen:</strong> Akute Bauchschmerzen ohne Abwehrspannung, die einer Differentialdiagnostik bedürfen</li>
                </ul>`
            },
            {
                title: "Ursachen",
                html: `<ul>
                    <li><strong>Rechter oberer Quadrant:</strong><br>Cholezystitis, Cholelithiasis, Cholangitis, Leberkapselreizung (Hepatitis, Abszess, Stauungsleber, etc.), Pankreatitis, ACS, Pleuritis</li>
                    <li><strong>Rechte Flanke:</strong><br>Pyelonephritis, Urolithiasis, retrozökale Appendizitis</li>
                    <li><strong>Rechter unterer Quadrant:</strong><br>Appendizitis, Ileitis terminalis, Urolithiasis, Leistenhernie, Psoas-Abszess</li>
                    <li><strong>Linker oberer Quadrant:</strong><br>Milzinfarkt/-abszess/-ruptur, Pankreatitis, ACS, Pleuritis</li>
                    <li><strong>Linke Flanke:</strong><br>Pyelonephritis, Urolithiasis</li>
                    <li><strong>Linker unterer Quadrant:</strong><br>Divertikulitis, Urolithiasis, Leistenhernie, Psoas-Abszess</li>
                    <li><strong>Epigastrium:</strong><br>Gastritis, Duodenitis, Ulcus, Pankreatitis, Aortenaneurysma, ACS</li>
                    <li><strong>Periumbilikal:</strong><br>Appendizitis (initial), Aortenaneurysma, ACS</li>
                    <li><strong>Suprapubisch, Unterbauch und Urogenital:</strong><br>Harnverhalt, Zystitis, ♀: EUG, stielgedrehtes Ovar, rupturierte Ovarialzyste, Adnexitis, ♂: Akutes Skrotum, Hodentorsion, etc.</li>
                    <li><strong>Diffus:</strong><br>Mesenterialischämie, Ileus, Gastroenteritis, Obstipation, diabetische Ketoazidose, Addisonkrise, akute intermittierende Porphyrie, Sichelzellkrise, familiäres Mittelmeerfieber, Opiatentzug, abdominelle Migräne, Angioödem, Bleivergiftung, etc.</li>
                </ul>
                <div class="callout callout-hinweis">
                    <p>Die Schmerzlokalisationen sind Anhaltspunkte, abweichende Präsentationen sind möglich!</p>
                </div>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li>Schmerzen im Bereich des Bauches</li>
                    <li>ggf. Bild eines <strong>akuten Abdomens</strong> (Abwehrspannung, Störung der Darmperistaltik, Kreislaufinstabilität)</li>
                    <li>ggf. <strong>Unruhe</strong> (i.d.R. bei viszeralem Schmerz) bzw. <strong>Schonhaltung</strong> (i.d.R. bei somatischem Schmerz)</li>
                    <li>ggf. <strong>vegetative Begleitsymptome</strong> (Kaltschweißigkeit, Tachykardie, Hypertonie)</li>
                    <li>ggf. <strong>Symptome der zugrundeliegenden Erkrankung</strong> (Diarrhoen bei Gastroenteritis, Acetongeruch bei DKA etc.)</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li><strong>Ersteindruck + ABCDE + Vitalparameter</strong> (RR, Puls, SpO₂, AF, Temperatur)</li>
                    <li><strong>1–2x venöser Zugang</strong></li>
                    <li><strong>Venöse bzw. arterielle BGA</strong> (Hb? pH? BE? Laktat? Glukose?)</li>
                    <li><strong>Labor:</strong> BB, CRP, E'lyte, NW, GOT, GPT, AP, γ-GT, Bilirubin, LDH, Lipase, Gerinnung, TSH, ggf.: hs-Troponin, D-Dimere, PCT, β-HCG, Kreuzblut, ≥ 2 Paar Blutkulturen</li>
                    <li><strong>12-Kanal-EKG</strong> (Ischämiezeichen? Vorhofflimmern?)</li>
                    <li><strong>Anamnese:</strong> Schmerzbeginn/-qualität/-intensität/-ausstrahlung? Provokationsfaktoren? Dynamik? Begleitsymptome wie Übelkeit, Erbrechen, Durchfall, Fieber, Blut im Stuhl? Letzter Stuhlgang? Miktion? Vorerkrankungen/-operationen? Medikamente, NSAR, Opiate? Gynäkologische/Familien-/Reise-Anamnese? Drogen?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Schonhaltung? Narben? Bruchpforten? Hautverfärbungen? Fehlende oder hochgestellte Darmgeräusche? Abwehrspannung? Druck-/Loslassschmerz? Nierenlagerklopfschmerz? ggf. Blut/Teerstuhl in DRU? ggf. Schwellung/Rötung des Hodens?</li>
                    <li><strong>ggf. Urin-Status</strong> (Erythrozyten? Leukozyten? Nitrit?) + Urinkultur (bei V.a. Harnwegsinfekt)</li>
                    <li><strong>POCUS:</strong> Freie Flüssigkeit? Cholezystitis? Cholelithiasis? Cholestase? Pankreatitis? Harnstau? Nephrolithiasis? Appendizitis? Divertikulitis? Aneurysma? Ileus?</li>
                    <li><strong>ggf. CT-Abdomen</strong> (+ ggf. KM i.v., oral, rektal) bei unklarer Diagnose nach POCUS oder bei V.a. Mesenterialischämie direkt primär</li>
                    <li><strong>ggf. Hinzuziehen weiterer Fachdisziplinen</strong> (z.B. Chirurgie bei unklarem/akutem Abdomen, Gynäkologie bei jungen Frauen mit Unterbauchschmerzen)</li>
                    <li><strong>ggf. weitere Diagnostik:</strong> V.a. Pneumonie: Röntgen-Thorax, V.a. Porphyrie: Porphobilinogen + δ-Aminolävulinsäure in Urin, MRT-Abdomen bei Schwangeren</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p>Bei akutem Abdomen sofortige interdisziplinäre Beurteilung!</p>
                </div>`
            },
            {
                title: "Therapie",
                html: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li>Stabilisierung der Vitalfunktionen gemäß ABCDE-Schema</li>
                    <li>Lagerung gemäß Patientenwunsch; häufig leichte Oberkörperhochlagerung und Knierolle hilfreich</li>
                    <li>Patienten nüchtern lassen (bis Diagnose und Therapie geklärt sind)</li>
                    <li><strong>Analgetische Therapie:</strong>
                        <ul>
                            <li>z.B. <strong>Paracetamol</strong> 1 g und/oder</li>
                            <li><strong>Metamizol</strong> 1–2,5 g und/oder</li>
                            <li><strong>Piritramid</strong> 3,75–15 mg als Kurzinfusion i.v.</li>
                        </ul>
                    </li>
                </ul>
                <h3>Kausale Therapie</h3>
                <ul>
                    <li>Behandlung der zugrundeliegenden Ursache (Cholezystektomie bei Cholezystitis, Antibiotika bei Pyelonephritis, PCI bei Myokardinfarkt, etc.)</li>
                </ul>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li><strong>"Do not miss"-Diagnosen:</strong> Rupturiertes Bauchaortenaneurysma, inkarzerierte Hernie, Hodentorsion, Hohlorganperforation, Ileus, Mesenterialischämie, Milzruptur, Myokardinfarkt</li>
                    <li>Bei älteren oder immunsupprimierten Patienten können Warnzeichen auf einen akuten lebensbedrohlichen Verlauf fehlen</li>
                    <li><strong>Unklaren Bauchschmerz</strong> (ca. 30%) bei unergiebiger Diagnostik als solchen benennen (statt Verlegenheitsdiagnose wie Obstipation o.Ä.)</li>
                    <li>Bei allen Frauen im gebärfähigen Alter muss ein <strong>β-HCG</strong> bestimmt werden</li>
                    <li>Kein Vorenthalten von Schmerzmitteln unter falscher Vorstellung einer leichteren Diagnosestellung</li>
                    <li>Die Ursache für abdominelle Schmerzen kann auch <strong>extraabdominell</strong> liegen (z.B. Hinterwandinfarkt, diabetische Ketoazidose, etc.)</li>
                    <li>Der diagnostische Wert eines Röntgen-Abdomen bei Bauchschmerzen ist mit wenigen Ausnahmen (V.a. Ileus) nicht gegeben</li>
                </ul>`
            },
            {
                title: "Disposition",
                html: `<ul>
                    <li>Abhängig von zugrundeliegendem Krankheitsbild und Krankheitsschwere; ggf. zunächst Observation mit klinischen und laborchemischen Kontrollen mit anschließender Entscheidung über weiteres Procedere.</li>
                </ul>`
            }
        ],
        stand: "10/24",
        sources: `Fleischmann T et al. Klinische Notfallmedizin - Band 1 Wissen. 2020. Kapitel 28: Bauchschmerzen.<br>Stoker J et al. Imaging patients with acute abdominal pain. Radiology. 2009.<br>Kühn F et al. Acute Mesenteric Ischemia. Visc Med. 2020.<br>Laméris W et al. Imaging strategies for detection of urgent conditions... BMJ. 2009.<br>Macaluso CR et al. Evaluation and management of acute abdominal pain... Int J Gen Med. 2012.<br>Müller G. Leitsymptom akuter Bauchschmerz. Notaufnahme up2date 2020.<br>Helbig, L et al. Die Abdominal Pain Unit als Behandlungspfad. Med Klin Intensivmed Notfmed (2021).<br>Abdolrazaghnejad A et al. The Role of Ultrasonography... Adv J Emerg Med. 2019.<br>Cartwright SL et al. Diagnostic imaging of acute abdominal pain in adults. Am Fam Physician. 2015.`
    });
})();