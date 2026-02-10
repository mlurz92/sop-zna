// SOP: Akute Mesenterialischämie
// Kategorie: Gastroenterologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "akute-mesenterialischaemie",
        title: "Akute Mesenterialischämie",
        category: "Gastroenterologie",
        catKey: "gi",
        sections: [
            {
                title: "Definition",
                html: `<ul>
                    <li><strong>Akute Mesenterialischämie:</strong> Plötzliche Unterbrechung des intestinalen Blutflusses durch eine Embolie, eine Thrombose oder einen Zustand mit langsamer Strömungsgeschwindigkeit mit konsekutiver intestinaler Ischämie</li>
                </ul>`
            },
            {
                title: "Ursachen",
                html: `<ul>
                    <li><strong>Arteriell okklusiv (OMI):</strong> Embolus (z.B. bei Vorhofflimmern, Endokarditis, Ventrikelthrombus, postinterventionell), Thrombus (Atherosklerose)</li>
                    <li><strong>Arteriell nicht-okklusiv (NOMI):</strong> HZV ↓ mit intestinaler Vasokonstriktion (z.B. bei Schock, Hämodialyse, schwerer Herzinsuffizienz)</li>
                    <li><strong>Venöse Thrombose (VAMI):</strong> z.B. bei Faktor-V-Leiden-Mutation, paraneoplastisch, bei Pankreatitis, portaler Hypertension, idiopathisch</li>
                </ul>`
            },
            {
                title: "Symptome",
                html: `<h3>OMI (Arteriell okklusiv)</h3>
                <ul>
                    <li><strong>Plötzlich aufgetretene stärkste abdominelle Schmerzen</strong> (bei in Frühphase unauffälligem abdominellem Untersuchungsbefund)</li>
                    <li>Häufig Übelkeit, Erbrechen, Durchfall, ggf. rektaler Blutabgang</li>
                    <li>ggf. akutes Abdomen mit paralytischem Ileus, Durchwanderungsperitonitis und Schocksymptomatik (Spätstadium)</li>
                    <li><strong>Verlauf:</strong>
                        <ul>
                            <li><strong>0-6 h:</strong> Schmerzen ↑ (Initialstadium)</li>
                            <li><strong>6-12 h:</strong> Schmerzen ↓ (<strong>"fauler Friede"</strong>)</li>
                            <li><strong>> 12 h:</strong> Schmerzen ↑ (Spätstadium, Schock)</li>
                        </ul>
                    </li>
                    <li>Bei atherosklerotischem Verschluss ggf. vorangehend: Gewichtsverlust, "food fear", Angina abdominalis</li>
                </ul>
                <h3>NOMI (Nicht-okklusiv)</h3>
                <ul>
                    <li>Häufig initial unbemerkt, distendiertes Abdomen, peranaler Blutabgang (Patienten meist invasiv beatmet + katecholaminpflichtig auf ICU)</li>
                </ul>
                <h3>VAMI (Venöse Thrombose)</h3>
                <ul>
                    <li>Oft unspezifische Abdominalbeschwerden über mehrere Tage, seltenere Infarzierung mit Peritonitis</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur)</li>
                    <li>1-2x venöser Zugang</li>
                    <li><strong>Venöse bzw. arterielle BGA</strong> (Hb? pH? BE? Laktat?)</li>
                    <li><strong>Kreuzblut abnehmen</strong> und ggf. EK anfordern</li>
                    <li><strong>Labor:</strong> BB, CRP, E'lyte, NW, Gerinnung, GOT, GPT, γ-GT, AP, LDH, Bilirubin, Lipase, TSH, ggf.: D-Dimere, hs-Troponin, PCT, β-HCG</li>
                    <li><strong>12-Kanal-EKG</strong> (Vorhofflimmern? Ischämiezeichen?)</li>
                    <li><strong>Anamnese:</strong> Symptome? Schmerzfreies Intervall? Blut peranal? Vorerkrankungen? Medikamente? RF für Atherosklerose, Embolie, venöse Thrombose?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Abwehrspannung? Darmgeräusche? Blut in DRU?</li>
                    <li><strong>CT-Angiographie Abdomen</strong> mit arterieller und venöser Phase (Verdachtsdiagnose "Akute Mesenterialischämie" Radiologen explizit mitteilen!)</li>
                    <li>Digitale Subtraktionsangiografie bei hochgradigem V.a. NOMI (gleichzeitig lokale Therapie möglich)</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p>Sofortige Rücksprache mit Chirurgie/Gefäßchirurgie/interventioneller Radiologie!</p>
                </div>`
            },
            {
                title: "Therapie",
                html: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li>Stabilisierung der Vitalfunktionen gemäß ABCDE-Schema</li>
                    <li>Patienten nüchtern lassen, ggf. Anlage einer <strong>Magensonde</strong> (nasogastrale Dekompression bei Erbrechen)</li>
                    <li>Kreislaufstabilisierung mittels <strong>Volumengabe</strong> (Katecholamine und Digitalis aufgrund Vasokonstriktion des Splanchnikusgebietes eher meiden)</li>
                    <li><strong>Analgesie:</strong> <strong>Metamizol</strong> (Novalgin®) 1-2,5 g als Kurzinfusion i.v. + ggf. <strong>Piritramid</strong> (Dipidolor®) 7,5 mg als Kurzinfusion i.v.</li>
                    <li><strong>Therapeutische Antikoagulation</strong> mit unfraktioniertem Heparin in Rücksprache (Gefäß-)Chirurgie:
                        <ul>
                            <li><strong>Bolus von 5000 IE i.v.</strong>, dann Heparinperfusor (25.000 IE ad 50 ml NaCl 0,9 %, Start mit 2 ml/h, Ziel-aPTT 1,5-2,5 fache der Norm)</li>
                        </ul>
                    </li>
                    <li><strong>Antibiotikatherapie:</strong> z.B. <strong>Cefuroxim</strong> (Rocephin®) 1,5 g 1-1-1 i.v. + <strong>Metronidazol</strong> (Clont®) 500 mg 1-1-1 i.v.</li>
                </ul>
                <h3>Kausale Therapie</h3>
                <ul>
                    <li><strong>OMI:</strong> Endovaskuläre oder offen chirurgische Revaskularisation, ggf. Darmresektion</li>
                    <li><strong>NOMI:</strong> Ursache beheben, Hämodynamik optimieren, Katecholamine ↓, intraart. Vasodilatatorgabe, ggf. Darmresektion</li>
                    <li><strong>VAMI:</strong> meist therapeutische Antikoagulation ausreichend, ggf. TIPS/portal-venöse Rekanalisation, ggf. Darmresektion</li>
                </ul>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li>Akute Mesenterialischämie: vaskulärer Notfall mit hoher Mortalität und sofortiger Interventionsnotwendigkeit!</li>
                    <li><strong>Interdisziplinäre Zusammenarbeit</strong> (Chirurgie, Gefäßchirurgie, Radiologie, Anästhesie) für erfolgreiche Therapie der AMI essentiell!</li>
                    <li>Bei V.a. Mesenterialischämie: sofortige <strong>CT-Angiografie des Abdomens</strong> (keine Zeitverzögerung durch Röntgen/Sonografie)</li>
                    <li>Typische klinische Konstellation: abdominelle Schmerzen, Vorhofflimmern und erhöhte Laktatwerte</li>
                    <li>Initial häufig Diskrepanz zwischen Schmerzangabe und eher unauffälligem abdominellen Untersuchungsbefund ("Schmerz-Befund-Diskrepanz")</li>
                    <li><strong>CAVE:</strong> Ein normwertiges Laktat schließt eine akute Mesenterialischämie nicht aus</li>
                </ul>`
            },
            {
                title: "Disposition",
                html: `<ul>
                    <li><strong>OMI:</strong> Notfall-OP/Intervention mit anschließender Aufnahme auf ICU</li>
                    <li><strong>NOMI:</strong> Intraarterielle Vasodilatatorgabe mit anschließender Verlegung auf ICU (Patient i.d.R bereits dort)</li>
                    <li><strong>VAMI:</strong> Meist konservatives Procedere auf Überwachungsstation (IMC/ICU)</li>
                </ul>`
            }
        ],
        stand: "12/22",
        sources: `Bala M et al. Acute mesenteric ischemia: guidelines of the World Society of Emergency Surgery. World J Emerg Surg. 2017.<br>Tilsed JVT et al. ESTES guidelines: acute mesenteric ischaemia. Eur J Trauma Emerg Surg. 2016.<br>Cudnik MT et al. The diagnosis of acute mesenteric ischemia: A systematic review and meta-analysis. Acad Emerg Med. 2013.<br>Kühn F et al. Acute Mesenteric Ischemia. Visc Med. 2020.<br>Liao G et al. Review: Acute superior mesenteric artery embolism: A vascular emergency cannot be ignored by physicians. Medicine (Baltimore). 2019.<br>Klar E et al. Acute mesenteric ischemia: a vascular emergency. Dtsch Arztebl Int 2012.<br>Salsano G et al. What is the Best Revascularization Strategy for Acute Occlusive Arterial Mesenteric Ischemia. J Vas Interv Radiol 2018.`
    });
})();