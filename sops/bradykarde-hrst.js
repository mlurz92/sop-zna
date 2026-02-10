(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "bradykarde-hrst",
        title: "Bradykarde Herzrhythmusstörungen",
        category: "Kardiologie",
        catKey: "kardio",
        sections: [
            {
                title: "Definition",
                html: `<p><strong>Bradykarde Herzrhythmusstörung:</strong> Herzrhythmusstörung mit einer Herzfrequenz &lt; 60/min.</p>`
            },
            {
                title: "Ursachen",
                html: `<ul>
                    <li><strong>Medikamente:</strong> Betablocker, Calciumantagonisten vom Nicht-Dihydropyridin-Typ, Digitalis, Amiodaron, α2-Agonisten, Neostigmin, Opiate, etc.</li>
                    <li><strong>Metabolisch:</strong> Hyperkaliämie, Hypokaliämie, Hypoxie, Hyperkapnie, Hypothermie, Hypothyreose, Azidose, etc.</li>
                    <li><strong>Ischämie:</strong> bei akutem Myokardinfarkt, insbesondere bei inferiorem Hinterwandinfarkt; bei chronischem Koronarsyndrom, etc.</li>
                    <li><strong>Vagusreiz:</strong> Hypersensitiver Carotis-Sinus, bei Defäkation oder Erbrechen, endotrachealem Absaugen, intraabdomineller Blutung, etc.</li>
                    <li><strong>Neurologisch:</strong> Hirndruck mit "Cushing-Trias" (Hypertonie, Bradykardie, pathologisches Atemmuster).</li>
                    <li><strong>Infektion/Infiltration/Autoimmun:</strong> Myokarditis, Lyme-Borreliose, Chagas-Krankheit, Sarkoidose, Lupus erythematodes, Amyloidose, etc.</li>
                    <li><strong>Iatrogen:</strong> Nach kardialen Interventionen (TAVI, Katheterablation, Septumablation, etc.), bei <strong>Schrittmacherdefekt bzw. Fehlfunktion.</strong></li>
                    <li><strong>Idiopathisch:</strong> Kongenital oder degenerativ bedingte Störung des Reizleitungssystems.</li>
                </ul>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li><strong>Asymptomatisch</strong></li>
                    <li><strong>Symptomatisch ohne Anzeichen für Lebensgefahr (= Patient stabil):</strong> z.B. Abgeschlagenheit, Belastungsdyspnoe.</li>
                    <li><strong>Symptomatisch mit Anzeichen für Lebensgefahr (= Patient instabil):</strong>
                        <ul>
                            <li><strong>Schock:</strong> systolischer Blutdruck &lt; 90 mmHg mit Symptomen erhöhter sympathischer Aktivität und verminderter zerebraler Durchblutung.</li>
                            <li><strong>Synkope</strong></li>
                            <li><strong>Myokardiale Ischämie:</strong> Angina pectoris und/oder ischämie-typische EKG-Veränderungen.</li>
                            <li><strong>Schwere Herzinsuffizienz:</strong> Linksherzversagen mit Lungenödem oder Rechtsherzversagen mit erhöhtem jugular-venösen Druck.</li>
                        </ul>
                    </li>
                </ul>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur).</li>
                    <li>1-2x venöser Zugang.</li>
                    <li><strong>Venöse BGA:</strong> pH? pCO₂? BE? E'lyte? Glukose? Laktat?</li>
                    <li><strong>Labor:</strong> BB, CRP, E'lyte inklusive Magnesium, NW, TSH, hs-Troponin, NT-proBNP, Gerinnung, Digitalis-Spiegel, ggf. kardiotrope Erreger, rheumatologische Diagnostik.</li>
                    <li><strong>12-Kanal-EKG:</strong> Sinusbradykardie? Sick-Sinus-Syndrom? AV-Block? Bradyarrhythmia absoluta? Hyperkaliämiezeichen? Ischämiezeichen?</li>
                    <li><strong>Anamnese:</strong> Symptome? Schwindel? Synkope? AP? Dyspnoe? Medikamente? Vorerkrankungen? Kardiale Eingriffe? Infekt? Zeckenbiss? Tropische Reisen?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Vigilanz? Rekap-Zeit? Hinweise für kardiale Dekompensation? Niereninsuffizienz? Schrittmacher?</li>
                    <li><strong>ggf. POCUS:</strong> VCI? Pulmonale B-Linien? Pleuraergüsse? LV-EF? Wandbewegungsstörungen?</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p><strong>Wichtige Fragen klären:</strong></p>
                    <ul>
                        <li>Ist der Patient hämodynamisch stabil oder instabil?</li>
                        <li>Besteht ein <strong>Risikofaktor für eine Asystolie?</strong> (AV-Block III°, AV-Block II° Mobitz, ventrikuläre Pause > 3s, kürzliche Asystolie).</li>
                    </ul>
                    <p>Frühzeitige Rücksprache mit Kardiologie (passagerer Schrittmacher?) und Überwachungsstation (IMC/ICU)!</p>
                </div>`
            },
            {
                title: "Therapie",
                html: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li>Stabilisierung der Vitalfunktionen gemäß ABCDE-Schema.</li>
                    <li>Ursachen beheben: bradykardisierende Medikamente absetzen, Elektrolytstörungen behandeln, PCI bei Myokardinfarkt, etc.</li>
                </ul>

                <h3>Medikamentöse Therapie</h3>
                <ul>
                    <li><strong>Atropin:</strong> 0,5 mg i.v. (ggf. alle 3-5 min. repetitiv bis max. 3 mg).
                        <div class="callout callout-cave"><p>CAVE: Nicht bei Herztransplantierten, i.d.R. wirkungslos bei AV-Block III° und II° Mobitz.</p></div>
                    </li>
                    <li><strong>Adrenalin (Suprarenin®):</strong>
                        <ul>
                            <li><strong>Repetitiv:</strong> 10 µg/min i.v. (1 mg Adrenalin in 100 ml NaCl 0,9 %, davon 1 ml repetitiv).</li>
                            <li><strong>Perfusor:</strong> 1 mg / 50 ml, Laufrate 6-30 ml/h (entspricht 2-10 µg/min).</li>
                        </ul>
                    </li>
                </ul>

                <h3>Spezifische medikamentöse Therapie</h3>
                <ul>
                    <li><strong>Hyperkaliämie:</strong> siehe SOP Hyperkaliämie.</li>
                    <li><strong>Kalziumkanal-/Betablockerüberdosierung:</strong>
                        <ul>
                            <li>Calciumgluconat 10% 30 ml langsam i.v.</li>
                            <li>Glukagon 3-10 mg i.v., dann Infusion 3-5 mg/h (CAVE: emetogen).</li>
                            <li><strong>High-Dose-Insulin:</strong> Normalinsulin 1 IE/kg KG als Bolus i.v., dann 0,5 IE/kg KG/h als Infusion (CAVE: Glukose und Kalium ausgleichen!).</li>
                        </ul>
                    </li>
                    <li><strong>Digitalisüberdosierung:</strong> DigiFab®/-bind® ca. 10 Ampullen (empirisch) als Kurzinfusion (> 30 min) i.v. oder Dosierung nach Serumspiegel.</li>
                    <li><strong>Besondere Patientengruppen (Herztransplantierte, Rückenmarkverletzte, inferiorer Myokardinfarkt):</strong> Theophyllin (Euphylong®) 200 mg langsam i.v. erwägen.</li>
                </ul>

                <h3>Elektrische Therapie</h3>
                <ul>
                    <li><strong>Transkutanes Pacing:</strong> (s. Anleitung unten).</li>
                    <li><strong>Transvenöses Pacing:</strong> als Überbrückungsmaßnahme bis zur definitiven Schrittmacher-Anlage.</li>
                </ul>`
            },
            {
                title: "Anleitung zum transkutanen Pacing (TCP)",
                html: `<h3>1. Periprozedurales Management</h3>
                <ul>
                    <li>O₂-Gabe via Maske mit Reservoir (z.B. 12 l O₂).</li>
                    <li>Kontinuierliches Monitoring (RR, Puls, SpO₂).</li>
                    <li><strong>Analgosedierung:</strong> z.B. 2-3 mg Midazolam und 3,75 mg Piritramid i.v. vor Beginn des Pacings.
                        <div class="callout callout-hinweis"><p>Ausnahme: Periarrest, kritisch instabile Patienten.</p></div>
                    </li>
                </ul>
                <h3>2. Durchführung</h3>
                <ul>
                    <li><strong>Patches:</strong> Anterior-Posterior oder Anterior-Lateral ("Reanimations-Position"). Bei SM-Trägern > 8 cm Sicherheitsabstand zum Device.</li>
                    <li><strong>Modus:</strong> Schrittmacher auf "Demand"-Modus stellen, richtige Ableitung wählen (Eigenzacken müssen registriert werden).</li>
                    <li><strong>Start:</strong> Frequenz 60-80/min wählen. Stromstärke bei 0 mA starten und in 5-10 mA Schritten hoch-titrieren bis "Capture" (jedem SM-Spike folgt ein QRS-Komplex).</li>
                    <li><strong>Sicherheitsreserve:</strong> + 5-10 mA oberhalb der Reizschwelle (i.d.R. Stimulation bei 40-80 mA, bei Adipositas höher).</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p><strong>Pulskontrolle:</strong> Unbedingt Puls in der Leiste tasten! Folgt jeder SM-Stimulation ein suffizienter Auswurf? (Alternativ: Pulskonturkurve bei Pulsoxymeter).</p>
                </div>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li>Die <strong>"3 M"</strong> als häufige reversible Ursachen: <strong>M</strong>edikamente, <strong>M</strong>etabolische Störungen, <strong>M</strong>yokardinfarkt.</li>
                    <li><strong>Atropin</strong> mindestens als 0,5 mg Bolus applizieren; bei niedrigeren Dosierungen besteht die Gefahr paradoxer Bradykardien.</li>
                    <li>Bei transkutanem Pacing immer mittels Leistenpulskontrolle überprüfen, ob ein suffizienter Auswurf vorhanden ist.</li>
                </ul>`
            },
            {
                title: "Disposition",
                html: `<div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Klinik / Risiko</th>
                                <th>Empfohlene Station</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>(A-)symptomatisch, keine Anzeichen für Lebensgefahr UND kein Risikofaktor für Asystolie</td>
                                <td><strong>Normalstation</strong></td>
                            </tr>
                            <tr>
                                <td>Symptomatisch mit Anzeichen für Lebensgefahr ODER Vorliegen von Risikofaktoren für Asystolie</td>
                                <td><strong>Überwachungsstation (IMC/ICU)</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p><strong>Risikofaktoren für Asystolie:</strong> AV-Block III°, AV-Block II° Mobitz, ventrikuläre Pause > 3s, kürzliche Asystolie.</p>`
            }
        ],
        stand: "12/22",
        sources: `Kusumoto FM et al. 2018 ACC/AHA/HRS Guideline on the Evaluation and Management of Patients With Bradycardia and Cardiac Conduction Delay. Circulation. 2019. – GRC Reanimation 2021 – Leitlinien kompakt 1. Auflage 2021. – Sodeck GH et al. Compromising bradycardia: management in the emergency department. Resuscitation. 2007. – Nathan D. Evaluation and management of bradyarrhythmias in the emergency department. Emerg Med Pract. 2013. – Marraffa JM et al. Antidotes for toxicological emergencies: a practical review. Am J Health Syst Pharm. 2012. – Fachinformationen Stand 12/22.`
    });
})();