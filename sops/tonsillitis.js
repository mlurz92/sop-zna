(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "tonsillitis",
        title: "Akute Tonsillitis",
        category: "Infektiologie",
        catKey: "infekt",
        date: "10/24",
        sections: [
            {
                title: "Definition",
                html: `<p><strong>Akute Tonsillitis:</strong> Entzündung der Gaumenmandeln über ihre physiologische Form hinaus, also mit zusätzlich bestehender klinisch relevanter Symptomatik.</p>`
            },
            {
                title: "Ursachen",
                html: `<ul>
                    <li><strong>Viren:</strong> Rhino-/Adenoviren-/Coronaviren, etc.</li>
                    <li><strong>Bakterien:</strong> ß-hämolysierende Streptokokken, etc.</li>
                    <li><strong>Pilze:</strong> Candida-Spezies bei Immunsupprimierten möglich.</li>
                </ul>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li>Allgemeines Krankheitsgefühl, Halsschmerzen, Schluckbeschwerden, Fieber, zervikale Lymphadenopathie, Foetor ex ore.</li>
                    <li><strong>Zeichen von Komplikationen:</strong> z.B. Ohrenschmerzen bei Otitis media, Vorwölbung der seitlichen Rachenwand bei Peritonsillarabszess.</li>
                    <li><strong>Symptome einer zugrundeliegenden Erkrankung:</strong> z.B. Exanthem und Himbeerzunge bei Scharlach, Splenomegalie bei EBV.</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li><strong>Ersteindruck + ABCDE + Vitalparameter:</strong> RR, Puls, SpO₂, AF, Temperatur.</li>
                    <li><strong>Anamnese:</strong> Symptome? Beginn? Fieber? Husten? Medikamente? Vorerkrankungen? Immunsuppression? Rheumatisches Fieber oder EBV in Anamnese?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Stridor? Rachen gerötet? Tonsillenschwellung/-exsudat? Ein- oder beidseitig? Art des Belags? Foetor ex ore? Vorwölbung der seitlichen Rachenwand? Uvuladeviation? Zervikale Lymphadenopathie? Kieferklemme? Torticollis? Halsschwellung? Hepato-/Splenomegalie? Exanthem?</li>
                    <li><strong>Ggf. weitere Diagnostik:</strong> Labor (BB, CRP, Elyte, NW, Bilirubin, PCT, Blutkulturen), EBV-Schnelltest, SARS-CoV-2-PCR, CT bei V.a. Parapharyngealabszess, etc.</li>
                </ul>
                <div class="callout callout-wichtig">
                    <strong>Wichtige Fragen klären:</strong>
                    <ul>
                        <li>Könnte eine relevante Differentialdiagnose vorliegen (EBV, Scharlach, Diphterie, Epiglottitis, Mundbodenphlegmone, Tonsillitis agranulocytotica)?</li>
                        <li>Liegen lokale (Peritonsillar-/Retro-/Parapharyngealabszess) oder systemische (Lemierre-Syndrom, Exsikkose, Sepsis) Komplikationen vor?</li>
                        <li>Ist die Genese der Tonsillitis mutmaßlich viral oder bakteriell? (s. Sektion Antibiotikagabe)</li>
                    </ul>
                </div>
                <div class="callout callout-cave">
                    <p>Bei akutem A-Problem sofortige Info an Anästhesie, bei V.a. lokale Komplikation zeitnahe HNO-Mitbeurteilung!</p>
                </div>`
            },
            {
                title: "Therapie",
                html: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li>Körperliche Schonung, ausreichende orale Flüssigkeitsaufnahme.</li>
                    <li><strong>Lutschtabletten:</strong> ohne Antiseptika oder Antibiotika.</li>
                    <li><strong>Analgetische Therapie (bei Schmerzen):</strong> NSAR, z.B. Ibuprofen 400 mg 1-1-1 p.o. über 2-3 d bzw. bedarfsweise.</li>
                </ul>
                <h3>Antibiotische Therapie</h3>
                <p>Indikation siehe Algorithmus. Bei V.a. bakterielle Genese:</p>
                <ul>
                    <li><strong>Penicillin-V:</strong> 0,8-1 Mio IE 1-1-1 p.o. für 5 d (bei gutem Ansprechen).</li>
                    <li><strong>Bei Penicillin-Unverträglichkeit:</strong> Clarithromycin 250-500 mg 1-0-1 p.o. für 5 d.</li>
                </ul>
                <h3>Behandlung von Komplikationen</h3>
                <ul>
                    <li><strong>Exsikkose und Elektrolytstörungen:</strong> Vollelektrolytlösung i.v. bzw. Elektrolytsubstitution.</li>
                    <li><strong>Abszess:</strong> Operative Sanierung bzw. Tonsillektomie.</li>
                </ul>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li>Nutzen und Ziel der Antibiotikatherapie ist eine <strong>moderate Symptomverkürzung (max. 16 h)</strong>, nicht die Prävention von Komplikationen (Peritonsillarabszess, rheumatisches Fieber, etc.).</li>
                    <li>Keine Ansteckungsgefahr ab 24 h nach Beginn einer wirksamen Antibiotikatherapie bei bakterieller Tonsillitis.</li>
                    <li><strong>Keine Gabe von Aminopenicillinen</strong> bei potentieller EBV-Infektion (Exanthem in ca. 90 % der Fälle).</li>
                    <li><strong>Lemierre-Syndrom:</strong> Schweres septisches Krankheitsbild mit lokalem Voranschreiten der Infektion mit Thrombophlebitis der V. jugularis interna und septischen Embolien als seltene Komplikation einer vorangegangenen bakteriellen Pharyngitis.</li>
                    <li>Keine Bestimmung von Streptokokken-Antikörper-Titer (keine klinische Relevanz).</li>
                    <li><strong>Kein Rachenabstrich auf Streptokokken bei > 15-Jährigen</strong> (viele asymptomatische Träger).</li>
                </ul>`
            },
            {
                title: "Indikation für Antibiotikagabe (> 15 Jahre)",
                html: `<p><em>Adaptiert nach AWMF S3-Leitlinie Halsschmerzen.</em></p>
                <div class="callout callout-hinweis">
                    <strong>Schritt 1: Red-Flags prüfen</strong>
                    <ol>
                        <li>Hinweise auf lokale oder systemische Komplikationen?</li>
                        <li>V.a. Scharlach (Scharlachexanthem)?</li>
                        <li>V.a. infektiöse Mononukleose (EBV)?</li>
                        <li><strong>Immunsuppression</strong> (z.B. Chemotherapie, orale Glukokortikoide, Neutropenie < 1000/µl, Z.n. Stammzell-Transplantation, AIDS, Antikörpermangelsyndrome, angeborene Immundefekte).</li>
                        <li>Infektion mit anderem Fokus (Pneumonie, Bronchitis, Otitis media).</li>
                        <li>Erhöhtes Risiko für rheumatisches Fieber (häusliches Crowding, Migration aus Risikogebiet, Z.n. rheumatischem Fieber, Ethnie).</li>
                        <li>Schwere Komorbidität.</li>
                    </ol>
                    <p><strong>Bei "JA" zu Red-Flags:</strong> Individuelles Vorgehen notwendig.</p>
                </div>
                <div class="callout callout-wichtig">
                    <strong>Schritt 2: Centor-Score (bei "NEIN" zu Red-Flags)</strong>
                    <ul>
                        <li>Tonsillenexsudat (1 Punkt)</li>
                        <li>Zervikale Lymphadenopathie (1 Punkt)</li>
                        <li>Fieber in der Anamnese > 38°C (1 Punkt)</li>
                        <li>Kein Husten (1 Punkt)</li>
                    </ul>
                </div>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Punkte</th>
                                <th>Empfehlung</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>0 - 2 Punkte</strong></td>
                                <td>Kein Antibiotikum.</td>
                            </tr>
                            <tr>
                                <td><strong>3 Punkte</strong></td>
                                <td>Delayed Prescription erwägen.</td>
                            </tr>
                            <tr>
                                <td><strong>4 Punkte</strong></td>
                                <td>Antibiotikum oder Delayed Prescription.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Konzept der "Delayed Prescription"</h3>
                <p>Rezept für Antibiotika ausstellen. Einzulösen nur bei signifikanter Verschlechterung oder bei fehlender Besserung nach 3-5 Tagen. Im Kontext der Notaufnahme ist eine zeitnahe Vorstellung beim Hausarzt bzw. ärztlichen Bereitschaftsdienst praktikabel.</p>`
            },
            {
                title: "Disposition",
                html: `<ul>
                    <li><strong>Ambulantes Procedere:</strong> Akute Tonsillitis ohne Hinweise auf Komplikationen.</li>
                    <li><strong>Stationäre Aufnahme:</strong> Akute Tonsillitis mit Komplikationen.</li>
                </ul>`
            }
        ],
        stand: "10/24",
        sources: `S3-Leitlinie Therapie der Tonsillo-Pharyngitis, AWMF-Register-Nr. 017/024, Deutsche Gesellschaft für Hals-Nasen-Ohren-Heilkunde, Langfassung, 2024.<br>
        S3-Leitlinie Halsschmerzen, AWMF-Register-Nr. 053-010, DEGAM-Leitlinie Nr. 14, Langfassung, 2020.<br>
        Long B et al. Clinical Mimics: An Emergency Medicine Focused Review of Streptococcal Pharyngitis Mimics. J Emerg Med. 2018.<br>
        Krüger K et al. Clinical practice guideline: Sore throat. Dtsch Arztebl Int 2021.<br>
        S2k-Leitlinie Therapie entzündlicher Erkrankungen der Gaumenmandeln - Tonsillitis. Stand: 2015.<br>
        RKI Ratgeber / Epidemiologisches Bulletin: Wiederzulassungstabelle.<br>
        Lee WS et al. Lemierre's syndrome: A forgotten and re-emerging infection. J Microbiol Immunol Infect. 2020.`
    });
})();