// SOP: Akute Herzinsuffizienz
// Kategorie: Kardiologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "akute-herzinsuffizienz",
        title: "Akute Herzinsuffizienz",
        category: "Kardiologie",
        catKey: "kardio",
        sections: [
            {
                title: "Definition",
                html: `<ul>
                    <li><strong>Akute Herzinsuffizienz:</strong> Rasches oder allmähliches Auftreten von Symptomen und/oder klinischen Untersuchungsbefunden von Herzinsuffizienz, deren Schwere zur ungeplanten Krankenhausaufnahme oder zum Besuch einer Notaufnahme führt.</li>
                    <li>Eine akute Herzinsuffizienz kann die Erstmanifestation einer Herzinsuffizienz sein (Neuerkrankung) oder häufiger auf eine akute Dekompensation von chronischer Herzinsuffizienz zurückzuführen sein.</li>
                </ul>`
            },
            {
                title: "Ursachen",
                html: `<ul>
                    <li><strong>Kardial:</strong> Myokardinfarkt, HRST, Klappenvitien, Hypertensiver Notfall, Perikardtamponade, LAE, akutes Aortensyndrom, etc.</li>
                    <li><strong>Komorbiditäten:</strong> Niereninsuffizienz, Infektionen, Anämie, Schilddrüsendysfunktion, etc.</li>
                    <li><strong>Patientenverhalten:</strong> Fehlende Medikamenten-Adhärenz, Substanzmissbrauch, etc.</li>
                    <li><strong>Arzneimittelwirkungen:</strong> NSAR, Verapamil, Diltiazem, verminderte Medikamenten-Resorption bei intestinalem Schleimhautödem, etc.</li>
                </ul>`
            },
            {
                title: "Symptome (Klinische Profile)",
                html: `<h3>Stauung („feucht“)</h3>
                <ul>
                    <li>Periphere Ödeme, Aszites</li>
                    <li>Gestaute Halsvenen, Stauungsgastritis/-leber</li>
                    <li>Pleuraergüsse, pulmonale Stauung (Asthma cardiale, Lungenödem)</li>
                    <li>Dyspnoe, Orthopnoe, Tachypnoe</li>
                </ul>
                <h3>Hypoperfusion („kalt“)</h3>
                <ul>
                    <li>Kaltschweißigkeit, kalte Extremitäten, marmorierte Haut</li>
                    <li>Bewusstseinsstörung</li>
                    <li>Oligurie, Laktatanstieg, akute Nierenschädigung, metabolische Azidose</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li><strong>Ersteindruck + ABCDE + Vitalparameter</strong> (RR, Puls, SpO₂, AF, Temperatur)</li>
                    <li>1-2x venöser Zugang</li>
                    <li><strong>Venöse bzw. arterielle BGA</strong> (pH? pO₂? pCO₂? BE? Laktat?)</li>
                    <li><strong>Labor:</strong> BB, CRP, E'lyte, NW, TSH, Leberwerte, <strong>NT-proBNP</strong>, ggf. hs-Troponin, D-Dimere, Gerinnung, PCT</li>
                    <li><strong>12-Kanal-EKG</strong> (Ischämiezeichen? Herzrhythmusstörungen?)</li>
                    <li><strong>Anamnese:</strong> AP-Beschwerden? Dyspnoe? Nykturie? Gewichtszunahme? Palpitationen? Vorerkrankungen? Medikamente? Adhärenz? Letzte TTE und Koro?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Vigilanz? Hautkolorit? Rekap-Zeit? Halsvenenstauung? Periphere Ödeme? Pulmonale RG? Abgeschwächte AG basal?</li>
                    <li><strong>DK-Anlage:</strong> Bilanzierung mit Urinflasche/täglichem Wiegen bei milden Verläufen</li>
                    <li><strong>POCUS:</strong> VCI? Ventrikelfüllung? Pleuraergüsse? Vermehrte pulmonale B-Linien? Perikarderguss? Rechtsherzbelastungszeichen? Vitien?</li>
                    <li><strong>Röntgen-Thorax:</strong> Kardiomegalie? Stauung? Ergüsse? Infiltrate?</li>
                    <li>Abhängig vom klinischen Zustand Etablierung eines erweiterten hämodynamischen Monitorings (arterieller Zugang, ZVK, etc.)</li>
                </ul>`
            },
            {
                title: "Therapie",
                html: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li>Stabilisierung der Vitalfunktionen gemäß ABCDE-Schema</li>
                    <li>Patienten beruhigen</li>
                    <li>Oberkörperhochlagerung bzw. sitzende Position mit herabhängenden Beinen</li>
                    <li><strong>O₂-Gabe</strong> bei Dyspnoe oder SpO₂ < 90 % bzw. PaO₂ < 60 mmHg</li>
                    <li>ggf. <strong>Morphin</strong> 2-3 mg i.v. bei Schmerzen oder Dyspnoe</li>
                    <li><strong>NIV-Therapie frühzeitig</strong> (bei Atemfrequenz > 25/min, SpO₂ < 90 % trotz O₂-Gabe)</li>
                    <li><strong>Invasive Beatmung</strong> (bei kardiogenem Schock/Versagen nicht-invasiver Maßnahmen mit PaO₂ < 60 mmHg, PaCO₂ > 50 mmHg, pH < 7,35)</li>
                </ul>
                <h3>Akut reversible Ursachen beheben (CHAMPIT)</h3>
                <ul>
                    <li><strong>C:</strong> Akutes Coronarsyndrom → Koronarangiografie</li>
                    <li><strong>H:</strong> Hypertensiver Notfall → Blutdrucksenkung</li>
                    <li><strong>A:</strong> Arrhythmien → Antiarrhythmische Therapie (Medikamente, Herzschrittmacher, Kardioversion)</li>
                    <li><strong>M:</strong> Mechanische Ursachen → (Chirurgische) Intervention</li>
                    <li><strong>P:</strong> Pulmonalarterienembolie → Antikoagulation, ggf. EKOS®-Lyse bzw. systemische Lyse</li>
                    <li><strong>I:</strong> Infektionen → Behandlung der Infektion</li>
                    <li><strong>T:</strong> Tamponade → Perikardiozentese</li>
                </ul>
                <h3>Medikamentöse Therapie (nach Profil)</h3>
                <ul>
                    <li><strong>Warm + Trocken</strong> (= noch kompensiert): Optimierung der oralen medikamentösen Therapie</li>
                    <li><strong>Warm + Feucht</strong> (meist normaler/erhöhter Blutdruck): Diuretikum, ggf. Vasodilatator (bei RRsys ≥ 110 mmHg), ggf. Dialyse</li>
                    <li><strong>Kalt + Trocken:</strong> Vorsichtige Volumengabe (z.B. 250 ml Vollelektrolytlösung i.v.), ggf. Inotropikum</li>
                    <li><strong>Kalt + Feucht</strong> (= kardiogener Schock):
                        <ul>
                            <li>RR systolisch < 90 mmHg: Inotropikum, ggf. Vasopressor, ggf. Diuretikum (nach Korrektur der Perfusion), ggf. mechanische Kreislaufunterstützung (Impella®, ECMO)</li>
                            <li>RR systolisch > 90 mmHg: Vasodilatator (vorsichtig!), Diuretikum, ggf. Inotropikum</li>
                            <li><em>CAVE: Hypoperfusion ist nicht synonym mit Hypotonie!</em></li>
                        </ul>
                    </li>
                </ul>
                <h3>Medikamente im Detail</h3>
                <ul>
                    <li><strong>Diuretikum: Furosemid (Lasix®)</strong>
                        <ul>
                            <li><strong>20-40 mg i.v.</strong> (bzw. mind. bestehende orale Dosis i.v.)</li>
                            <li>Bei niedriger Diurese (< 100 ml/h): Wiederholung nach 30-60 Min, ggf. mit doppelter Dosis</li>
                            <li>ggf. Perfusor (500 mg/50ml ≙ 10mg/ml, max. 1500 mg/d ≙ max. Laufrate 6,25 ml/h)</li>
                            <li><em>Kontraindikation:</em> schwere Hypokaliämie</li>
                        </ul>
                    </li>
                    <li><strong>Vasodilatator: Nitroglycerin (Nitrolingual akut®)</strong>
                        <ul>
                            <li>Spray: 0,4-0,8 mg (≙ 1-2 Hub) s.l., ggf. alle 10 Minuten wiederholen</li>
                            <li>ggf. Perfusor (50mg/50ml ≙ 1 mg/ml): Start mit 1 ml/h, nach Wirkung titrieren, meist 2-8 ml/h</li>
                            <li><em>Vorsichtige Anwendung:</em> Höhergradige Aortenklappenstenose, HOCM, Schwangerschaft, Stillzeit</li>
                            <li><em>Kontraindikationen:</em> Einnahme von PDE-5-Hemmern, Hirndruck, kardiogener Schock (RR sys. < 90 mmHg)</li>
                        </ul>
                    </li>
                    <li><strong>Vasopressor: Noradrenalin (Arterenol®)</strong>
                        <ul>
                            <li>Dosierung: s. SOP Sepsis</li>
                        </ul>
                    </li>
                    <li><strong>Inotropikum: Dobutamin (Dobutrex®)</strong>
                        <ul>
                            <li>Perfusor (250mg/50ml ≙ 5mg/ml), Start mit 2 ml/h, nach Wirkung titrieren</li>
                            <li><em>CAVE:</em> Meist Kombination mit Noradrenalin notwendig (periphere Vasodilatation)</li>
                        </ul>
                    </li>
                </ul>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li>Bei Patienten mit akuter Herzinsuffizienz stets reversible Ursachen beheben (<strong>“CHAMPIT”</strong>)</li>
                    <li>Akute Verschlechterung bei Flachlagerung des Patienten (z.B. für CT/Koronarangiografie) möglich!</li>
                    <li>Bei kardial dekompensierten Patienten initial tägliche Kontrollen von NW, El’yten und Gewicht bzw. Bilanz</li>
                    <li>Bestehende Betablockertherapie in der Dekompensation weiterführen (Ausnahmen: Bradykardie, Schock, höhergradiger AV-Block)</li>
                    <li>Keine strenge (≙ 1 l/d) Flüssigkeitsrestriktion</li>
                    <li>Bei Diuretika-Resistenz sequentielle Nephronblockade (Schleifendiuretikum + Thiazid, z.B. 10 mg Xipamid p.o.) erwägen</li>
                    <li>Die Bolusgabe von Schleifendiuretika ist der kontinuierlichen Gabe über Perfusor gleichwertig</li>
                    <li>40 mg Furosemid oral ≙ 10 mg Torasemid oral; 40 mg Furosemid i.v. ≙ 10-20 mg Torasemid i.v.</li>
                    <li>Bei hypertensivem Lungenödem: O₂-Gabe, 2 Hub Nitroglycerin s.l., Morphin + Furosemid i.v, NIV, Nitroglycerin-Perfusor</li>
                </ul>`
            },
            {
                title: "Disposition",
                html: `<ul>
                    <li><strong>Ambulantes Procedere erwägen:</strong> Kompensiert ("Warm und Trocken")</li>
                    <li><strong>Normalstation:</strong> Dekompensiert, stabil</li>
                    <li><strong>Überwachungsstation (IMC/ICU):</strong> Dekompensiert und instabil oder relevante Komorbiditäten</li>
                    <li><strong>ICU:</strong> Kardiogener Schock</li>
                </ul>`
            }
        ],
        stand: "12/22",
        sources: `ESC Pocket Guidelines. Akute und chronische Herzinsuffizienz, Version 2021.<br>2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure. European Heart Journal; 2021.<br>Nationale VersorgungsLeitlinie Chronische Herzinsuffizienz Langfassung 3.Auflage, 2019 Version 2.<br>Fandler M et al. Akute Herzinsuffizienz. Notaufnahme up2date 2020.`
    });
})();