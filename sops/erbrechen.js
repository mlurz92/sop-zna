(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "erbrechen",
        title: "Erbrechen",
        category: "Leitsymptom",
        catKey: "leit",
        sections: [
            {
                title: "Definition",
                content: "<strong>Erbrechen:</strong> Kraftvolles, meist mit Übelkeit verbundenes unwillkürliches Auswerfen von Magen-, selten Darminhalten."
            },
            {
                title: "Ursachen",
                content: `<ul>
                    <li><strong>Gastrointestinal:</strong> Gastroenteritis, Hepatitis, Pankreatitis, Gallenkolik, Ileus, Stenosen, Gastroparese, Magen-/Duodenalulcera, etc.</li>
                    <li><strong>ZNS:</strong> Hirndruck, Meningitis, Schlaganfall, Commotio cerebri, Migräne, etc.</li>
                    <li><strong>Vestibulär:</strong> M. Menière, Neuritis Vestibularis, Reisekrankheit, etc.</li>
                    <li><strong>Medikamentös-toxisch:</strong> Opiate, Chemotherapeutika, Narkotika, Digitalis, Alkohol, Cannabis, Nahrungsmittel, etc.</li>
                    <li><strong>Metabolisch/Endokrin:</strong> Schwangerschaft, Ketoazidose, Addison-Krise, Urämie, Hyperkalzämie, Thyreotoxikose, Leberversagen, Porphyrie, etc.</li>
                    <li><strong>Kardial:</strong> Akuter Myokardinfarkt.</li>
                    <li><strong>Sonstige:</strong> Blutdruckabfall/Schock, starke Schmerzen (z.B. bei Nierenkolik oder Glaukomanfall), Ekel, psychogen.</li>
                </ul>`
            },
            {
                title: "Symptome",
                content: `<ul>
                    <li>Erbrechen, meist verbunden mit Übelkeit.</li>
                    <li>ggf. <strong>vegetative Begleitsymptome:</strong> z.B. Tachykardie, Schwitzen.</li>
                    <li>ggf. <strong>Zeichen der zugrundeliegenden Ursache:</strong> z.B. abdominelle Schmerzen bei Ileus, Acetongeruch bei DKA, Kopfschmerzen bei Meningitis.</li>
                    <li>ggf. <strong>Zeichen von Komplikationen:</strong> z.B. Hypotonie bei Exsikkose, Herzrhythmusstörungen bei Elektrolytstörungen, Dyspnoe bei Aspiration.</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                content: `<ul>
                    <li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur).</li>
                    <li><strong>1-2x venöser Zugang.</strong></li>
                    <li><strong>Venöse BGA:</strong> pH? BE? pCO₂? <strong>COHb?</strong> E’lyte? Laktat? Glukose? Hb?</li>
                    <li><strong>Labor:</strong> BB, CRP, E’lyte, NW, Bilirubin, GOT, GPT, AP, γ-GT, Lipase, TSH, Gerinnung, hs-Troponin, Alkohol, Cortisol, β-HCG.</li>
                    <li><strong>12-Kanal-EKG:</strong> Herzrhythmusstörungen? Ischämiezeichen? <strong>QTc-Zeit!</strong></li>
                    <li><strong>Anamnese:</strong> Beginn? Frequenz? Art des Erbrochenen? Trigger? Begleitsymptome (Bauch-/Brust-/Kopfschmerz, Schwindel, Fieber, Diarrhoe)? Umfeld betroffen? Letzter Stuhlgang? Reiseanamnese? Vor-OPs? Medikamente/Drogen? Schwangerschaft? Orale Aufnahme möglich?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Darmgeräusche? Abdomineller Druckschmerz? Abwehrspannung? Nystagmus? Pupillen? Meningismus? FND? Exsikkose?</li>
                    <li><strong>POCUS:</strong> Ileus? Abdomineller Infektfokus? Freie Flüssigkeit? Volumenstatus (VCI, Ventrikelfüllung)?</li>
                    <li><strong>Weiterführende Diagnostik:</strong> cCT bei V.a. intrakraniellen Prozess, CT-Abdomen bei V.a. Ileus, Röntgen-Thorax bei V.a. Aspirationspneumonie.</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p>Ziel: Ursache(n) und mögliche Komplikationen des Erbrechens identifizieren!</p>
                </div>`
            },
            {
                title: "Therapie",
                content: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li>Stabilisierung der Vitalfunktionen gemäß ABCDE-Schema.</li>
                    <li><strong>Ursachen beheben:</strong> z.B. OP bei mechanischem Ileus, PCI bei Myokardinfarkt, Antibiotikatherapie bei Meningitis.</li>
                    <li><strong>Parenteraler Wechsel:</strong> Orale Medikation auf parenterale Gabe umstellen (z.B. NMH statt DOAK), Insulindosis ggf. reduzieren.</li>
                    <li><strong>Nicht medikamentös:</strong> Patienten an Alkoholtupfer riechen lassen.</li>
                </ul>

                <h3>Komplikationen behandeln</h3>
                <ul>
                    <li><strong>Exsikkose:</strong> Bedarfsgerechte Gabe von Vollelektrolytlösung (s. SOP Akute Nierenschädigung).</li>
                    <li><strong>Elektrolytstörungen:</strong> Ausgleich (s. SOP Hypokaliämie, SOP Hyponatriämie).</li>
                    <li><strong>Metabolische Alkalose:</strong> NaCl-Infusionen.</li>
                    <li><strong>Mallory-Weiss / Boerhaave:</strong> Endoskopische bzw. operative Therapie.</li>
                    <li><strong>Aspirationspneumonie:</strong> Therapie mit Antibiotika, bedarfsgerechte O₂-Gabe.</li>
                </ul>

                <h3>Medikamentöse Therapie der Übelkeit</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Wirkstoff</th>
                                <th>Dosierung</th>
                                <th>Kontraindikationen / CAVE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Ondansetron</strong> (Zofran®)</td>
                                <td>8 mg i.v. Kurzinfusion (bis 3x/d für max. 5 d)</td>
                                <td><strong>KI:</strong> Gleichzeitige Anwendung von Apomorphin.</td>
                            </tr>
                            <tr>
                                <td><strong>Metoclopramid</strong> (Paspertin®)</td>
                                <td>10 mg i.v. Kurzinfusion (bis 3x/d für max. 5 d)</td>
                                <td><strong>KI:</strong> M. Parkinson, mechanischer Ileus, Epilepsie, Phäochromozytom.<br><strong>CAVE:</strong> EPMS (Akathisie, Dyskinesien).</td>
                            </tr>
                            <tr>
                                <td><strong>Dimenhydrinat</strong> (Vomex®)</td>
                                <td>62 mg i.v. Kurzinfusion (bis 3x/d)</td>
                                <td><strong>KI:</strong> Asthmaanfall, Engwinkelglaukom, Epilepsie, BPH mit Restharn, Porphyrie, Phäochromozytom.<br><strong>CAVE:</strong> sedierend, delirogen.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="callout callout-cave">
                    <p><strong>WICHTIG:</strong> Die meisten Antiemetika verlängern die <strong>QTc-Zeit!</strong></p>
                </div>`
            },
            {
                title: "Merke",
                content: `<ul>
                    <li><strong>Gefährliche Ursachen:</strong> Erhöhter Hirndruck, Meningitis, Stamm- oder Kleinhirninfarkt, Ileus, akutes Abdomen, ACS, Schock.</li>
                    <li><strong>Mögliche Komplikationen:</strong> Exsikkose, Elektrolytstörungen, metabolische Alkalose, Aspiration, Boerhaave-Syndrom.</li>
                    <li>Bei jeder Frau im gebärfähigen Alter sollte ein <strong>β-HCG</strong> bestimmt werden.</li>
                    <li>Die akute Gastroenteritis ist ein häufiger Grund; die Diagnose sollte jedoch nicht vorschnell (ohne Ausschluss gefährlicher DDs) gestellt werden.</li>
                </ul>`
            },
            {
                title: "Disposition",
                html: `<p class="dispo-intro">Verbindliche hausinterne Dispositionsrichtlinie der ZNA (Klinikum St. Georg). Die Farbstufe ergibt sich aus Klinik, Vitalparametern und Verlauf &ndash; nicht aus einem Einzelwert.</p>
                <div class="dispo">
                    <section class="dispo-card dispo-gruen">
                        <header class="dispo-head"><span class="dispo-dot" aria-hidden="true"></span><h3>GRÜN &ndash; Ambulanter Verbleib</h3></header>
                        <dl class="dispo-meta">
                            <dt>Entscheidung</dt><dd>Behandelnder Arzt ZNA</dd>
                            <dt>Pfad</dt><dd>Entlassung nach Hause, Anbindung an Hausarzt oder MVZ</dd>
                        </dl>
                        <p class="dispo-spec">Bei gesicherter oraler Toleranz und fehlenden Warnzeichen ambulante Weiterbehandlung.</p>
                        <p class="dispo-foot">Wiedervorstellung jederzeit bei Verschlechterung anbieten; Kontrollzeitpunkt durch den weiterbehandelnden Arzt festlegen.</p>
                    </section>
                    <section class="dispo-card dispo-gelb">
                        <header class="dispo-head"><span class="dispo-dot" aria-hidden="true"></span><h3>GELB &ndash; Stationäre Aufnahme (Normalstation / ZNA-Station)</h3></header>
                        <p class="dispo-sub">Regelpfad Fachabteilung</p>
                        <ul class="dispo-contacts">
                        <li class="dispo-contact"><span class="dispo-fach">Gastroenterologie</span><span class="dispo-tel">4006 / 4933</span><span class="dispo-note">Endoskopie: 2674 (tags) / 5663 (Dienst)</span></li>
                        </ul>
                        
                        <div class="dispo-block">
                            <p class="dispo-sub">Entlassung am Folgetag angestrebt (ZNA-Station / A&amp;B-Station)</p>
                            <dl class="dispo-meta">
                                <dt>Indikation</dt><dd>gemäß Statut ZNA und Statut Aufnahme- und Beobachtungsstation</dd>
                                <dt>Bedingung</dt><dd>nur nach Rücksprache mit Facharzt ZNA / OA ZNA</dd>
                                <dt>Kontakt</dt><dd>ZNA-Station 4B: 4812 &middot; Bettenmanagement: 4299</dd>
                            </dl>
                        </div>
                    </section>
                    <section class="dispo-card dispo-rot">
                        <header class="dispo-head"><span class="dispo-dot" aria-hidden="true"></span><h3>ROT &ndash; Kritisch / Intensivmedizinische Überwachung</h3></header>
                        <p class="dispo-sub">Aufnahme ITS / IMC</p>
                        <ul class="dispo-contacts">
                        <li class="dispo-contact"><span class="dispo-fach">ITS-Koordinator</span><span class="dispo-tel">3008</span><span class="dispo-note">zentraler ITS-Aufnahmekontakt</span></li>
                        <li class="dispo-contact"><span class="dispo-fach">IMC 2.0 (KAIM, 2 Erd)</span><span class="dispo-tel">4764</span><span class="dispo-note">internistische IMC</span></li>
                        </ul>
                        <p class="dispo-foot">Anmeldung immer über den ITS-Koordinator (3008); Transport erst nach Stabilisierung und mit ärztlicher Begleitung.</p>
                    </section>
                </div>
                <p class="dispo-actions"><button type="button" class="dispo-dir-btn" data-dir-open><i class="fa-solid fa-address-book"></i> Vollständiges Telefonverzeichnis öffnen</button></p>`
            }
        ],
        stand: "07/23",
        sources: "Getto L et al. Vomiting, diarrhea, constipation, and gastroenteritis. Emerg Med Clin North Am. 2011 May. – Furyk JS et al. Drugs for the treatment of nausea and vomiting in adults. Cochrane Database Syst Rev. 2015. – Fleischmann T et al. Klinische Notfallmedizin - Band 1 Wissen. 2020. Kapitel 50: Erbrechen. – Tinawi M. Pathophysiology, Evaluation, and Management of Metabolic Alkalosis. Cureus. 2021. – Fachinformationen Stand 07/23."
    });
})();