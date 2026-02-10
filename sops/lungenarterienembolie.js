(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "lungenarterienembolie",
        title: "Lungenarterienembolie",
        category: "Kardiologie",
        catKey: "kardio",
        date: "10/24",
        sections: [
            {
                title: "Definition",
                content: "<strong>Lungenarterienembolie (LAE):</strong> Verschluss einer Lungenarterie durch Einschwemmen eines Embolus."
            },
            {
                title: "Ursachen",
                content: "<ul><li><strong>Häufig:</strong> venöse Thromboembolie aus tiefer Venenthrombose (TVT). Risikofaktoren siehe Wells-Score.</li><li><strong>Selten:</strong> Fruchtwasser-, Luft-, Fett- oder Knochenzement-Embolie (nicht Inhalt dieser SOP).</li></ul>"
            },
            {
                title: "Symptome",
                content: "<ul><li>Dyspnoe, Tachypnoe.</li><li>Thoraxschmerzen (häufig atemabhängig).</li><li>Infarktpneumonie, Pleuraerguss, Hämoptysen.</li><li>Tachykardie, Hypotonie, (Prä-)Synkope, Schock.</li></ul>"
            },
            {
                title: "Diagnostik",
                content: "<ul><li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur).</li><li>1-2x venöser Zugang.</li><li><strong>Venöse bzw. arterielle BGA:</strong> Hypoxie? Hypokapnie? Laktat?.</li><li><strong>Labor:</strong> BB, CRP, E'lyte, NW, TSH, hs-Troponin, NT-proBNP; je nach Vortest-Wahrscheinlichkeit: D-Dimere.</li><li><strong>12-Kanal-EKG:</strong> Sinustachykardie? T-Negativierungen V1-4? SI/SII/SIII-Typ? SI/QIII-Typ? Rechts-Typ? (In-)kompletter RSB? P-Pulmonale? Vorhofflimmern?.</li><li><strong>Anamnese:</strong> Wadenschmerz? Vorerkrankungen? Medikamente? Hormoneinnahme? Immobilisation? Krebserkrankung? Gerinnungsstörung?.</li><li><strong>Körperliche Untersuchung:</strong> Zyanose? Rekap-Zeit? Zeichen des obstruktiven Schocks? Zeichen einer TVT? Pulmonale RG bei Infarktpneumonie?.</li><li><strong>POCUS (Point of Care Ultrasound):</strong><ul><li><strong>Rechtsherzbelastungszeichen:</strong> Basales RV/LV-Verhältnis > 1, D-Sign, paradoxe Septumbewegung, starre VCI? RV-Hypertrophie > 5 mm bei chronischer Rechtsherzbelastung.</li><li><strong>TVT:</strong> Fehlende Komprimierbarkeit der Beinvenen?.</li><li><strong>Lunge:</strong> ≥ 2 dreieckige/runde echoarme subpleurale Läsionen ≥ 5 mm?.</li></ul></li><li><strong>CT-Pulmonalisangiografie (CTPA):</strong> des Thorax; alternativ: Lungenperfusionsszintigrafie.</li></ul>"
            },
            {
                title: "Diagnostische Scores",
                content: "<h3>Vereinfachter Wells-Score</h3><div class=\"table-wrap\"><table><thead><tr><th>Kriterium</th><th>Punkte</th></tr></thead><tbody><tr><td>Klinische Zeichen einer TVT</td><td>1</td></tr><tr><td>LAE wahrscheinlicher als andere Diagnose</td><td>1</td></tr><tr><td>Frühere LAE oder TVT</td><td>1</td></tr><tr><td>Herzfrequenz > 100/min</td><td>1</td></tr><tr><td>Operation oder Immobilisierung ≤ 1 Monat</td><td>1</td></tr><tr><td>Hämoptysen</td><td>1</td></tr><tr><td>Malignom (unter Therapie, palliativ oder Diagnose < 6 Monate)</td><td>1</td></tr></tbody></table></div><p><strong>Auswertung:</strong> ≤ 1 Punkt: LAE unwahrscheinlich | ≥ 2 Punkte: LAE wahrscheinlich.</p><h3>Pulmonary Embolism Rule-out Criteria (PERC)</h3><div class=\"table-wrap\"><table><thead><tr><th>Kriterium</th><th>Punkte</th></tr></thead><tbody><tr><td>Alter ≥ 50 Jahre</td><td>1</td></tr><tr><td>Herzfrequenz ≥ 100/min</td><td>1</td></tr><tr><td>Sättigung unter Raumluft < 95 %</td><td>1</td></tr><tr><td>Einseitige Beinschwellung</td><td>1</td></tr><tr><td>Hämoptysen</td><td>1</td></tr><tr><td>Frühere LAE oder TVT</td><td>1</td></tr><tr><td>Operation oder Immobilisierung ≤ 1 Monat</td><td>1</td></tr><tr><td>Hormoneinnahme (orale Kontrazeptiva, Östrogene)</td><td>1</td></tr></tbody></table></div><p><strong>Auswertung:</strong> 0 Punkte: LAE ausgeschlossen | ≥ 1 Punkt: LAE nicht ausgeschlossen.</p>"
            },
            {
                title: "Diagnostischer Algorithmus",
                content: "<h3>Hämodynamisch instabile Patienten</h3><ul><li><strong>Instabilitätskriterien:</strong><ol><li>Herzstillstand.</li><li><strong>Obstruktiver Schock:</strong> RRsyst < 90 mmHg oder > 90 mmHg (mit Vasopressoren) trotz Euvolämie UND Endorganminderdurchblutung (Vigilanzstörung, kalte feuchte Haut, Olig-/Anurie, Laktat > 2 mmol/l).</li><li><strong>Anhaltende Hypotonie:</strong> RRsyst < 90 mmHg oder Abfall > 40 mmHg über > 15 min (nicht durch Arrhythmie, Hypovolämie oder Sepsis bedingt).</li></ol></li><li><strong>Vorgehen:</strong> TTE (RV/LV Durchmesser > 1?) -> wenn Ja: Antikoagulation -> CTPA sofort verfügbar? -> wenn Nein: Lyse-Therapie.</li></ul><h3>Hämodynamisch stabile Patienten</h3><ul><li>Wells ≤ 1 (unwahrscheinlich) -> PERC-Score -> wenn ≥ 1 Punkt: D-Dimere bestimmen -> über Grenzwert: CTPA.</li><li>Wells ≥ 2 (wahrscheinlich) -> Antikoagulation -> CTPA.</li></ul><div class=\"callout callout-hinweis\"><p><strong>D-Dimer-Grenzwerte:</strong> < 500 µg/l bzw. altersadaptiert (Alter x 10 µg/l bei Alter > 50 J). Alternativ YEARS-Kriterien: bei 0 Kriterien Grenzwert < 1000 µg/l, sonst < 500 µg/l.</p></div><h3>Schwangerschaft & 6 Wochen post-partum</h3><ul><li>Klinische Wahrscheinlichkeit (Wells) -> bei Wells ≥ 2 oder Wells ≤ 1 mit positiven D-Dimeren (YEARS) -> Antikoagulation mit NMH -> POCUS (Beinvenen, Lunge, Herz).</li><li>Bei negativem POCUS: Röntgen-Thorax (wenn negativ: Szintigrafie, wenn auffällig: CTPA). Geringste Strahlenbelastung für Fetus gewährleisten!</li></ul>"
            },
            {
                title: "Risikostratifikation",
                content: "<div class=\"table-wrap\"><table><thead><tr><th>Frühsterberisiko</th><th>Instabilität</th><th>sPESI ≥ 1</th><th>RV-Dysfunktion</th><th>Troponin ↑</th></tr></thead><tbody><tr><td><strong>Hoch</strong></td><td>+</td><td>(+)</td><td>+</td><td>+</td></tr><tr><td><strong>Intermediär-hoch</strong></td><td>-</td><td>+</td><td>+</td><td>+</td></tr><tr><td><strong>Intermediär-niedrig</strong></td><td>-</td><td>+</td><td>eins oder keins positiv</td><td>eins oder keins positiv</td></tr><tr><td><strong>Niedrig</strong></td><td>-</td><td>-</td><td>-</td><td>-</td></tr></tbody></table></div><h3>sPESI-Score (simplified Pulmonary Embolism Severity Index)</h3><p>Jeweils 1 Punkt für:</p><ul><li>Alter > 80 Jahre.</li><li>Krebserkrankung.</li><li>Chronische Lungen- oder Herzerkrankung.</li><li>Herzfrequenz ≥ 110/min.</li><li>RRsyst < 100 mmHg.</li><li>SpO₂ < 90 %.</li></ul>"
            },
            {
                title: "Therapie",
                content: "<h3>Allgemeinmaßnahmen</h3><ul><li>Stabilisierung (ABCDE).</li><li>Oberkörperhochlagerung.</li><li>O₂-Gabe bei SpO₂ < 90 %.</li><li>Morphin 2-3 mg i.v. bei Schmerzen/Dyspnoe.</li><li>Vorsichtige Volumengabe (500 ml VEL über 15-30 min) und Katecholamine (Noradrenalin, Dobutamin).</li></ul><h3>Niedrig- und Intermediär-Risiko</h3><ul><li><strong>Antikoagulation:</strong> Enoxaparin (Clexane®) 1,0 mg/kg KG s.c. alle 12 h. (Bei GFR < 30 ml/min alle 24 h; bei GFR < 15 ml/min kontraindiziert).</li><li>Alternativ: DOAK (Apixaban, Rivaroxaban) oder unfraktioniertes Heparin (UFH).</li><li>Bei intermediär-hohem Risiko: kathetergeführte lokale Lyse (EKOS®) in RS Kardiologie erwägen.</li></ul><h3>Hochrisiko-LAE</h3><ul><li><strong>Antikoagulation:</strong> UFH Bolus 5000 IE i.v., dann Perfusor (Ziel-aPTT 1,5-2,5 fache der Norm).</li><li><strong>Systemische Thrombolyse:</strong> Alteplase (Actilyse®) Bolus 10 mg über 1-2 min i.v., dann 90 mg über 2 h.</li><li><strong>Unter CPR:</strong> 0,6 mg/kg KG Alteplase über 15 min (max. 50 mg).</li><li>Bei Versagen/Kontraindikation: chirurgische Embolektomie oder kathetergeführte Lyse (+ ggf. ECMO).</li></ul><h3>Kontraindikationen für systemische Thrombolyse</h3><div class=\"callout callout-cave\"><p><strong>Absolut:</strong> hämorrhagischer Insult (immer), ischämischer Insult (< 6 Mon.), ZNS-Neoplasie, schwere Blutung, Trauma/OP/Kopfverletzung (< 3 Wochen).</p><p><strong>Relativ:</strong> TIA (< 6 Mon.), orale Antikoagulation, Schwangerschaft/Woche 1 post-partum, traumatische Reanimation, RRsys > 180 mmHg, fortgeschrittene Lebererkrankung, Endokarditis.</p><strong>Merke:</strong> Im Peri-Arrest gibt es keine Kontraindikation!</div>"
            },
            {
                title: "Merke",
                content: "<ul><li>Bedenke bei Thoraxschmerzen die <strong>Big Five</strong> (LAE, Aortensyndrom, Myokardinfarkt, Pneumothorax, Boerhaave).</li><li>Bei unklarem Fieber, Tachykardie oder Synkopen an (rezidivierende) LAE denken.</li><li>Instabiler Patient = Hochrisiko-LAE = <strong>Systemische Thrombolyse</strong>.</li><li>Lyse unter Reanimation: CPR für 60-90 Minuten fortführen.</li></ul>"
            },
            {
                title: "Disposition",
                content: "<ul><li><strong>Niedriges Risiko:</strong> Normalstation, ggf. ambulantes Procedere (bei sPESI 0, stabiler Versorgung).</li><li><strong>Intermediär-niedriges Risiko:</strong> Normalstation.</li><li><strong>Intermediär-hohes und hohes Risiko:</strong> Überwachungsstation (IMC/ICU).</li></ul>"
            }
        ],
         stand: "10/24",
        sources: "AWMF-S2k-Leitlinie: Diagnostik und Therapie der Venenthrombose und Lungenembolie (02/2023). – ESC Guidelines for the diagnosis and management of acute pulmonary embolism (2019). – Fandler M. Fokus Notaufnahme: Lungenembolie. Notaufnahme up2date 2019. – van Es N et al. J Thromb Haemost. 2017. – Freund Y et al. JAMA. 2018 & 2021. – Fachinformationen Alteplase."
    });
})();