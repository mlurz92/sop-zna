(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "ikterus",
        title: "Ikterus",
        category: "Gastroenterologie",
        catKey: "gi",
        date: "04/24",
        sections: [
            {
                title: "Definition",
                content: `<p><strong>Ikterus:</strong> Gelbfärbung von Skleren und Haut durch Ablagerung von Bilirubin.</p>`
            },
            {
                title: "Ursachen",
                content: `<h3>Prähepatisch: Vermehrter Anfall von indirektem Bilirubin durch Hämolyse</h3>
                <ul>
                    <li><strong>Hämolyse:</strong> z.B. autoimmun, thrombotische Mikroangiopathie, Hämoglobinopathie, Membran-/Enzymdefekt, Medikamente, mechanisch, Vitamin B-12-Mangel.</li>
                </ul>
                <h3>Intrahepatisch: Glukuronidierung von Bilirubin oder intrahepatische Gallenausscheidung gestört</h3>
                <p><em>(Erhöhung von indirektem bzw. direktem Bilirubin)</em></p>
                <ul>
                    <li><strong>Hereditär:</strong> z.B. Morbus Meulengracht, Crigler-Najjar-Syndrom, Dubin-Johnson-Syndrom, Rotor-Syndrom.</li>
                    <li><strong>Akuter oder chronischer Leberschaden:</strong> z.B. infektiös, medikamenteninduziert, autoimmun, Speicherkrankheit.</li>
                    <li><strong>Tumoren:</strong> z.B. hepatozelluläres Karzinom, cholangiozelluläres Karzinom, Lebermetastasen.</li>
                    <li><strong>Verschiedene:</strong> z.B. Sepsis, Budd-Chiari-Syndrom, Pfortaderthrombose, Rechtsherzinsuffizienz, Schockleber.</li>
                </ul>
                <h3>Posthepatisch: Vermehrter Anfall von direktem Bilirubin durch gestörte extrahepatische Gallenausscheidung</h3>
                <ul>
                    <li><strong>Tumoren:</strong> z.B. Pankreaskopfkarzinom.</li>
                    <li><strong>Choledocholithiasis</strong></li>
                </ul>`
            },
            {
                title: "Symptome",
                content: `<ul>
                    <li><strong>Gelbfärbung von Skleren:</strong> ab einem Bilirubinwert von ca. 2 mg/dl.</li>
                    <li><strong>Gelbfärbung der Haut:</strong> ab einem Bilirubinwert von ca. 3 mg/dl.</li>
                    <li><strong>Symptome der zugrundeliegenden Erkrankung:</strong> z.B. Leberhautzeichen bei Leberzirrhose, Fieber und Oberbauchschmerzen bei Cholangitis.</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                content: `<ul>
                    <li><strong>Ersteindruck + ABCDE + Vitalparameter</strong> (RR, Puls, SpO₂, AF, Temperatur).</li>
                    <li><strong>1x venöser Zugang</strong></li>
                    <li><strong>Venöse BGA:</strong> pH? BE? Hb? Laktat? <strong>Bilirubin?</strong> Glukose?</li>
                    <li><strong>Labor:</strong> BB, CRP, E'lyte, NW, GOT, GPT, AP, γ-GT, Lipase, <strong>direktes und indirektes Bilirubin</strong>, Gerinnung, LDH.
                        <br>Ggf. zusätzlich: Haptoglobin, Retikulozyten, Cholinesterase, Albumin, Ammoniak, TSH, β-HCG, PCT, ≥ 2 Paar Blutkulturen.</li>
                    <li><strong>Anamnese:</strong> Beginn? Begleitsymptome? Abdominelle Schmerzen? Erbrechen? Fieber? Gewichtsverlust? Nachtschweiß? Juckreiz? Entfärbter Stuhl? Dunkler Urin? Vorerkrankungen (insb. Leberzirrhose, Gallensteine)? Medikamente (auch OTC-Präparate/Kräuter)? Alkohol? Drogen? Reise-/Nahrungs-/Berufs-/Sexualanamnese?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Skleren-/Hautkolorit? Leberhautzeichen? Abdomineller Druckschmerz? Murphy-Zeichen? Courvoisier-Zeichen? Hinweise für Grunderkrankung?</li>
                    <li><strong>Urin-Status:</strong> Bilirubin? Urobilinogen?</li>
                    <li><strong>POCUS:</strong> Doppelflintenphänomen? DHC? Double-Duct-Sign? Chole(docho)lithiasis? Tumor? Leberzirrhose? VCI-Füllung? Lebervenen-/Pfortaderfluss? Milzgröße?</li>
                    <li><strong>Zielgerichtete weitere Diagnostik:</strong>
                        <ul>
                            <li><strong>Hämolyse:</strong> Erweitertes Labor (direkter Coombs-Test, Fragmentozyten, Blutausstrich, Vitamin-B12, s. SOP Anämie).</li>
                            <li><strong>Unklare Hepatopathie:</strong> Erweitertes Labor (Hepatitis A/B/C/E, EBV, CMV, Autoimmun-AK, Hämochromatose-Parameter, M. Wilson, PBC/PSC-Diagnostik, nutritiv-toxische Marker).</li>
                            <li><strong>Mechanisches Abflusshindernis:</strong> Endosonografie, MRCP, ERC, ggf. CT-Abdomen + KM (insb. bei V.a. Pankreas-CA).</li>
                        </ul>
                    </li>
                </ul>
                <div class="callout callout-hinweis">
                    <p>Abhängig von der vermuteten Ursache: Frühzeitige Rücksprache mit Gastroenterologie oder Hämatologie!</p>
                </div>`
            },
            {
                title: "Differentialdiagnose des Ikterus",
                content: `<div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Genese</th>
                                <th>Indirektes Bili (Serum)</th>
                                <th>Direktes Bili (Serum)</th>
                                <th>Urinfarbe</th>
                                <th>Bilirubin im Urin</th>
                                <th>Urobilinogen im Urin</th>
                                <th>Stuhlfarbe</th>
                                <th>Weitere Befunde</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Prähepatisch</strong></td>
                                <td>↑↑</td>
                                <td>Normal</td>
                                <td>Normal</td>
                                <td>-</td>
                                <td>↑↑</td>
                                <td>Braun</td>
                                <td>Hämolysezeichen, Anämie</td>
                            </tr>
                            <tr>
                                <td><strong>Intrahepatisch</strong></td>
                                <td>↑</td>
                                <td>↑</td>
                                <td>Dunkel bis bierbraun</td>
                                <td>↑</td>
                                <td>↑</td>
                                <td>Hell</td>
                                <td>Transaminasen & Cholestaseparameter ↑</td>
                            </tr>
                            <tr>
                                <td><strong>Posthepatisch</strong></td>
                                <td>Normal</td>
                                <td>↑↑</td>
                                <td>Dunkel bis bierbraun</td>
                                <td>↑↑</td>
                                <td>-</td>
                                <td>Hell</td>
                                <td>Cholestaseparameter ↑↑, gestaute Gallenwege</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p><small>Transaminasen: GOT, GPT | Cholestaseparameter: dir. Bilirubin, AP, γ-GT</small></p>`
            },
            {
                title: "Therapie",
                content: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li>Stabilisierung der Vitalfunktionen gemäß ABCDE-Schema.</li>
                </ul>
                <h3>Kausale Therapie</h3>
                <ul>
                    <li><strong>Prähepatisch:</strong> Hämolyse stoppen (z.B. Glukokortikoide bei autoimmunhämolytischer Anämie, Plasmapherese bei TTP).</li>
                    <li><strong>Intrahepatisch:</strong> Zugrundeliegende Lebererkrankung behandeln.</li>
                    <li><strong>Posthepatisch:</strong> Abflusshindernis beseitigen (z.B. ERC mit Steinextraktion bei Choledocholithiasis oder Stenteinlage bei Pankreaskopfkarzinom).</li>
                </ul>
                <h3>Therapie bei Notfällen</h3>
                <ul>
                    <li><strong>Akute Cholangitis:</strong> Frühzeitige antibiotische Therapie und zeitnahe Beseitigung des Abflusshindernisses.</li>
                </ul>`
            },
            {
                title: "Merke",
                content: `<ul>
                    <li><strong>Häufige Ursachen:</strong> Virushepatitis, medikamentös-toxisch, dekompensierte Leberzirrhose, Choledocholithiasis, Tumore.</li>
                    <li><strong>Akut gefährliche Ursachen:</strong> Massive Hämolyse, akutes Leberversagen, akute Cholangitis.</li>
                    <li>Bei <strong>akuter Cholangitis</strong> müssen eine frühzeitige Antibiotika-Therapie und die Beseitigung des Abflusshindernisses erfolgen.</li>
                    <li>Bei <strong>akutem Leberversagen</strong> muss eine sofortige Rücksprache mit einem Transplantationszentrum erfolgen!</li>
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
                        <p class="dispo-spec">Nur bei fehlender Cholestase-Komplikation und gesicherter kurzfristiger Kontrolle.</p>
                        <p class="dispo-foot">Wiedervorstellung jederzeit bei Verschlechterung anbieten; Kontrollzeitpunkt durch den weiterbehandelnden Arzt festlegen.</p>
                    </section>
                    <section class="dispo-card dispo-gelb">
                        <header class="dispo-head"><span class="dispo-dot" aria-hidden="true"></span><h3>GELB &ndash; Stationäre Aufnahme (Normalstation / ZNA-Station)</h3></header>
                        <p class="dispo-sub">Regelpfad Fachabteilung</p>
                        <ul class="dispo-contacts">
                        <li class="dispo-contact"><span class="dispo-fach">Gastroenterologie</span><span class="dispo-tel">4006 / 4933</span><span class="dispo-note">Endoskopie: 2674 (tags) / 5663 (Dienst)</span></li>
                        </ul>
                        <p class="dispo-spec">Cholangitis: Endoskopie/ERCP frühzeitig avisieren.</p>
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
                </div>`
            }
        ],
        stand: "04/24",
        sources: `Todd T et al. Jaundice in the emergency department: meeting the challenges of diagnosis and treatment. Emerg Med Pract. 2018 Apr;20(4):1-24.<br>
        Fleischmann T et al. Klinische Notfallmedizin - Band 1 Wissen. 2020. Kapitel 40: Ikterus von Muche M und Somasundaram R, S. 464-467.<br>
        Herold G et al. Innere Medizin 2023, S. 518 ff.`
    });
})();