(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "spontan-bakterielle-peritonitis",
        title: "Spontan bakterielle Peritonitis",
        category: "Gastroenterologie",
        catKey: "gi",
        stand: "12/22",
        sections: [
            {
                title: "Definition",
                html: `<ul>
                    <li><strong>Spontan bakterielle Peritonitis (SBP):</strong> Bakterielle Entzündung der Peritonealhöhle ohne Hinweis auf eine anderweitige intraabdominelle Ursache der Infektion (z.B. Cholezystitis, Divertikulitis, etc.), Peritonealmetastasen oder Tuberkulose.</li>
                    <li><strong>Diagnosekriterium:</strong> > 250 Granulozyten/µl (≙ 0,25/nl) bzw. > 500 Zellen/µl (≙ 0,5/nl) im Aszites.</li>
                </ul>`
            },
            {
                title: "Ursachen",
                html: `<ul>
                    <li>Durchwanderung der Darmwand durch pathogene Keime (E. coli, Streptokokken, Klebsiellen).</li>
                    <li>Vorkommen meist bei Patienten mit Leberzirrhose.</li>
                    <li><strong>Risikofaktoren:</strong>
                        <ul>
                            <li>Stattgehabte SBP</li>
                            <li>Gastrointestinale Blutung</li>
                            <li>Niedriger Gesamteiweißgehalt im Aszites (< 1,5 g/dl)</li>
                            <li>Einnahme von Protonenpumpeninhibitoren (PPI)</li>
                            <li>Bilirubinerhöhung (> 3,2 mg/dl)</li>
                            <li>Thrombopenie (< 98.000/µl)</li>
                        </ul>
                    </li>
                </ul>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li>Häufig symptomarm.</li>
                    <li>ggf. Fieber.</li>
                    <li>Abdominelle Schmerzen.</li>
                    <li>Verschlechterung des Allgemeinzustandes (AZ).</li>
                    <li>Dekompensation einer Leberzirrhose.</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur).</li>
                    <li>1x venöser Zugang.</li>
                    <li><strong>Labor:</strong> BB, CRP, E'lyte, NW, Gerinnung, ggf.: GOT, GPT, γ-GT, AP, LDH, Bilirubin, Albumin, Lipase, PCT, β-HCG.</li>
                    <li><strong>≥ 2 Paar Blutkulturen.</strong></li>
                    <li><strong>Anamnese:</strong> Symptome? Schmerzen? Fieber? Vorerkrankungen? Lebererkrankung bekannt? Medikamente?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Leberhautzeichen? Aszites? Hinweise auf hepatische Enzephalopathie?</li>
                    <li><strong>POCUS:</strong> Asziteslokalisation/-menge? Punktionsfenster? Ausschluss sekundäre Peritonitis (Cholezystitis, etc.)?</li>
                    <li><strong>Diagnostische Aszitespunktion:</strong> EDTA-Monovette (Zellzahl, falls möglich Granulozyten); 1 Paar Blutkulturen direkt beimpfen.</li>
                    <li><strong>ggf. weitere Diagnostik:</strong> CT-Abdomen bei V.a. sekundäre Peritonitis.</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p>Jeder Patient mit neu aufgetretenem Aszites oder nicht elektiver stationärer Krankenhausaufnahme muss zum Ausschluss einer SBP umgehend diagnostisch punktiert werden!</p>
                </div>`
            },
            {
                title: "Diagnostischer Algorithmus",
                html: `<ul>
                    <li><strong>Verdacht auf SBP</strong> (bei neuem Aszites oder jedem nicht elektiv aufgenommenen Zirrhosepatienten) → <strong>Diagnostische Aszitespunktion</strong>.</li>
                    <li><strong>Befund > 500 Zellen/µl oder > 250 Granulozyten/µl</strong> → Diagnose SBP gesichert.</li>
                    <li><strong>Initiales Management:</strong>
                        <ul>
                            <li>Antibiotische Primärtherapie (siehe Therapie).</li>
                            <li>Albumingabe (siehe Therapie).</li>
                        </ul>
                    </li>
                    <li><strong>Verlaufskontrolle:</strong> Diagnostische Aszitespunktion nach 48 h.
                        <ul>
                            <li><strong>Abfall der Granulozyten auf < 0,25/nl (bzw. Zellen < 0,5/nl) und klinische Besserung:</strong> Antibiose nach weiteren 5 Tagen beenden → Beginn Sekundärprophylaxe.</li>
                            <li><strong>Kein Abfall der Granulozyten/Zellen um ≥ 25 %:</strong> Modifikation der antibiotischen Therapie (nach Resistogramm), Ausschluss einer sekundären Peritonitis.</li>
                        </ul>
                    </li>
                </ul>`
            },
            {
                title: "Therapie",
                html: `<h3>Antibiotische Therapie</h3>
                <h4>Primärtherapie</h4>
                <ul>
                    <li><strong>Ambulant erworbene unkomplizierte SBP:</strong>
                        <br>(Kein Schock, kein Ileus, keine GI-Blutung, keine schwergradige hepatische Enzephalopathie; Serumkreatinin < 3 mg/dl)
                        <br><strong>Ceftriaxon</strong> 2 g i.v. 1-0-0 (für 7 Tage).
                    </li>
                    <li><strong>Ambulant erworbene komplizierte SBP, nosokomial erworbene SBP bzw. Vorliegen von Risikofaktoren für ein Therapieversagen:</strong>
                        <br>(Risikofaktoren: lokale Resistenzlage, antibiotische Vorbehandlung in letzten 12 Wochen, MRE-Trägerstatus)
                        <br><strong>Piperacillin/Tazobactam</strong> 4,5 g i.v. 1-1-1 oder <strong>Carbapeneme</strong>.
                    </li>
                </ul>
                <h4>Sekundärprophylaxe</h4>
                <ul>
                    <li>Nach erfolgreicher Primärtherapie: <strong>Norfloxacin</strong> 400 mg/d p.o., ggf. alternativ: <strong>Rifaximin</strong> 1200 mg p.o./d solange bis Resolution des Aszites oder Verbesserung der Child-Pugh-Kategorie.</li>
                </ul>
                <h3>Albuminsubstitution</h3>
                <ul>
                    <li><strong>Am Tag der Diagnosestellung:</strong> 1,5 g/kg KG Albumin i.v.</li>
                    <li><strong>48 h nach Diagnosestellung:</strong> 1 g/kg KG Albumin i.v.</li>
                </ul>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li>Ein <strong>Bakteraszites</strong> (Nachweis von Bakterien im Aszites ohne signifikante Erhöhung der Granulozyten bzw. Zellzahl) wird wie eine SBP behandelt.</li>
                    <li>Antibiotische Therapie im Verlauf gemäß Resistogramm anpassen (schmales Spektrum, hohe antimikrobielle Aktivität).</li>
                    <li>Bei Verdacht auf SBP soll eine Aszitespunktion <strong>zeitnah (< 6 h)</strong> erfolgen.</li>
                    <li>Eine kompromittierte Gerinnung oder bestehende Antikoagulation stellen dabei keine absoluten Kontraindikationen dar.</li>
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
                        <p class="dispo-spec">Nicht vorgesehen.</p>
                        <p class="dispo-foot">Wiedervorstellung jederzeit bei Verschlechterung anbieten; Kontrollzeitpunkt durch den weiterbehandelnden Arzt festlegen.</p>
                    </section>
                    <section class="dispo-card dispo-gelb">
                        <header class="dispo-head"><span class="dispo-dot" aria-hidden="true"></span><h3>GELB &ndash; Stationäre Aufnahme (Normalstation / ZNA-Station)</h3></header>
                        <p class="dispo-sub">Regelpfad Fachabteilung</p>
                        <ul class="dispo-contacts">
                        <li class="dispo-contact"><span class="dispo-fach">Gastroenterologie</span><span class="dispo-tel">4006 / 4933</span><span class="dispo-note">Endoskopie: 2674 (tags) / 5663 (Dienst)</span></li>
                        <li class="dispo-contact"><span class="dispo-fach">Allgemeinchirurgie (ACH)</span><span class="dispo-tel">4881</span><span class="dispo-note">Dienstarzt bis 15:30 Uhr: 4004</span></li>
                        </ul>
                        <p class="dispo-spec">Diagnostische Aszitespunktion vor Antibiose; chirurgische Ursache ausschließen (ACH).</p>
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
                        <li class="dispo-contact"><span class="dispo-fach">IMC 2.0 (KAIM, 2 Erd)</span><span class="dispo-tel">4764</span><span class="dispo-note">internistische IMC</span></li>
                        <li class="dispo-contact"><span class="dispo-fach">ITS-Koordinator</span><span class="dispo-tel">3008</span><span class="dispo-note">zentraler ITS-Aufnahmekontakt</span></li>
                        </ul>
                        <p class="dispo-foot">Anmeldung immer über den ITS-Koordinator (3008); Transport erst nach Stabilisierung und mit ärztlicher Begleitung.</p>
                    </section>
                </div>
                <p class="dispo-actions"><button type="button" class="dispo-dir-btn" data-dir-open><i class="fa-solid fa-address-book"></i> Vollständiges Telefonverzeichnis öffnen</button></p>`
            }
        ],
        sources: `Gerbes AL et al. S2k-Leitlinie der DGVS „Komplikationen der Leberzirrhose“. Z Gastroenterol 2019.<br>
        Dever JB et al. Review article: spontaneous bacterial peritonitis-bacteriology, diagnosis, treatment, risk factors and prevention. Aliment Pharmacol Ther. 2015.<br>
        Salerno F et al. Albumin infusion improves outcomes of patients with spontaneous bacterial peritonitis: a meta-analysis of randomized trials. Clin Gastroenterol Hepatol. 2013.`
    });
})();