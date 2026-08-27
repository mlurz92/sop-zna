(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "kopfschmerzen",
        title: "Kopfschmerzen",
        category: "Leitsymptom",
        catKey: "leit",
        date: "07/25",
        sections: [
            {
                title: "Definition",
                content: `<ul>
                    <li><strong>Primäre Kopfschmerzen:</strong> Kopfschmerzen als Hauptsymptom ohne andere zugrundeliegende Erkrankung.</li>
                    <li><strong>Sekundäre Kopfschmerzen:</strong> Kopfschmerzen als Symptom einer anderen zugrundeliegenden Erkrankung.</li>
                </ul>`
            },
            {
                title: "Ursachen",
                content: `<h3>Primäre Kopfschmerzen</h3>
                <ul>
                    <li>Migräne</li>
                    <li>Spannungskopfschmerz</li>
                    <li>Trigemino-autonome Kopfschmerzen (z.B. Clusterkopfschmerz)</li>
                    <li>Andere primäre Kopfschmerzen</li>
                </ul>
                <h3>Sekundäre Kopfschmerzen</h3>
                <ul>
                    <li><strong>Trauma:</strong> z.B. SHT, HWS-Distorsion.</li>
                    <li><strong>Vaskulär:</strong> z.B. SAB, ICB, SVT (Sinusvenenthrombose), Dissektion, Riesenzellarteriitis.</li>
                    <li><strong>Intrakranielle Pathologie:</strong> z.B. Tumor, Metastase, Liquordruck ↑/↓.</li>
                    <li><strong>Substanz bzw. deren Entzug:</strong> z.B. Alkohol, CO-Intoxikation, Medikamente.</li>
                    <li><strong>Infektion:</strong> z.B. Meningitis, Enzephalitis, systemische Infektionen.</li>
                    <li><strong>Gestörte Homöostase:</strong> z.B. Hypertonie, Hyponatriämie, Fasten.</li>
                    <li><strong>Augen/HNO/Zahn-Pathologie:</strong> z.B. Glaukom, Sinusitis, Abszess.</li>
                    <li><strong>Psychiatrische Störungen:</strong> z.B. Somatisierungsstörung, Psychose.</li>
                </ul>`
            },
            {
                title: "SNOOP-Kriterien (Red Flags)",
                content: `<p>Akronym zum Erkennen von gefährlichen sekundären Kopfschmerzen:</p>
                <ul>
                    <li><strong>S</strong>ystemic symptoms (z.B. Fieber, protrahiertes Erbrechen) oder systemische Erkrankungen (z.B. Malignom, HIV).</li>
                    <li><strong>N</strong>eurologische Symptome (Fokal-neurologisches Defizit, Meningismus, Bewusstseinsstörung, Sehstörungen, Horner-Syndrom, epileptische Anfälle).</li>
                    <li><strong>O</strong>nset (schlagartiger Beginn, Vernichtungskopfschmerz, Donnerschlagkopfschmerz).</li>
                    <li><strong>O</strong>lder age (erstmaliges Auftreten nach dem 50. Lebensjahr).</li>
                    <li><strong>P</strong>attern change (neuartige Kopfschmerzen, Veränderung von Charakter, Frequenz oder Ausprägung).</li>
                    <li><strong>P</strong>osttraumatic (nach Kopf/Hals-Trauma).</li>
                    <li><strong>P</strong>ositional (lageabhängige Kopfschmerzen).</li>
                    <li><strong>P</strong>recipitated (ausgelöst durch Niesen, Husten, Valsalva-Manöver, Anstrengung).</li>
                    <li><strong>P</strong>regnant/postpartum (Schwangerschaft bzw. unmittelbar postpartal).</li>
                </ul>`
            },
            {
                title: "Gefährliche sekundäre Ursachen",
                content: `<div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Kategorie</th>
                                <th>Pathologien</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Akut bedrohlich</strong></td>
                                <td>Intrakranielle Blutung (SAB, ICB, SDH), Meningitis/Meningoenzephalitis, Karotis-/Vertebralisdissektion, Zerebrale Sinus-/Venenthrombose, Glaukomanfall, Präeklampsie.</td>
                            </tr>
                            <tr>
                                <td><strong>Strukturell / Vaskulär</strong></td>
                                <td>Intrakranielle Raumforderung (Tumor, Metastase, Abszess), Riesenzellarteriitis (RZA), Idiopathische intrakranielle Hypertension (IIH), RCVS, PRES.</td>
                            </tr>
                            <tr>
                                <td><strong>Toxisch</strong></td>
                                <td>CO-Intoxikation.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Diagnostik",
                content: `<h3>Basisdiagnostik</h3>
                <ul>
                    <li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur).</li>
                    <li><strong>Anamnese:</strong> Bekannte Kopfschmerzen? Änderung des Charakters? Beginn/Qualität/Intensität/Ausstrahlung/Dynamik/Lokalisation? Trauma? Begleitsymptome (neurologische Ausfälle, Fieber, Nackensteife, Übelkeit, Erbrechen, Sehstörungen, Photophobie, Kauschmerzen)? Trigger (Lageänderung)? Medikamente? Antikoagulation? Vorerkrankungen? Schwangerschaft?</li>
                    <li><strong>Körperliche Untersuchung:</strong> GCS, Pupillen, Meningismus, fokal-neurologisches Defizit, Prellmarken, Augen, Nervenaustrittspunkte, Temporalarterien.</li>
                </ul>
                <h3>Zusätzliche Diagnostik bei V.a. sekundäre Ursache / Red Flags</h3>
                <ul>
                    <li>1x venöser Zugang.</li>
                    <li><strong>Venöse BGA:</strong> Natrium? <strong>COHb?</strong> pCO₂? Glukose?</li>
                    <li><strong>Labor:</strong> BB, CRP, E'lyte, NW, Gerinnung. Ggf.: TSH, β-HCG, PCT, <strong>BSG</strong> (bei V.a. RZA), Leberwerte.</li>
                    <li><strong>Bildgebung:</strong> Meist kranielle Schnittbildgebung (CT oder MRT).</li>
                    <li><strong>Ggf. weitere Diagnostik:</strong> Lumbalpunktion (nach Bildgebung), Duplexsonografie der hirnversorgenden Gefäße, Funduskopie.</li>
                </ul>
                <div class="callout callout-hinweis">
                    <p>Frühzeitige Rücksprache mit Neurologie/Neurochirurgie, HNO, Augenheilkunde, MKG oder Rheumatologie abhängig von der Verdachtsdiagnose.</p>
                </div>`
            },
            {
                title: "Bildgebung bei V.a. sekundäre Kopfschmerzen",
                content: `<div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Modalität</th>
                                <th>Indikation / Fragestellung</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>cCT nativ</strong></td>
                                <td>Basis-Notfalldiagnostik: Intrakranielle Blutung, Hirnödem, Liquoraufstau, größere Raumforderungen.</td>
                            </tr>
                            <tr>
                                <td><strong>+ CT-HWS / Mittelgesicht</strong></td>
                                <td>Zusätzlich bei Trauma.</td>
                            </tr>
                            <tr>
                                <td><strong>+ CTA (Kopf/Hals)</strong></td>
                                <td>Karotis-/Vertebralisdissektion, SAB (bei unauffälligem Nativ-CT und Symptombeginn > 6 h), RCVS.</td>
                            </tr>
                            <tr>
                                <td><strong>+ KM (CT oder MRT)</strong></td>
                                <td>Tumor, Abszess.</td>
                            </tr>
                            <tr>
                                <td><strong>+ KM-Venografie</strong></td>
                                <td>Zerebrale Sinus-/Venenthrombose.</td>
                            </tr>
                            <tr>
                                <td><strong>cMRT nativ</strong></td>
                                <td>Ischämie, PRES.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="callout callout-wichtig">
                    <p>Die Nativ-CT ist die Basisdiagnostik, muss aber je nach Verdacht um KM oder Gefäßdarstellung ergänzt werden!</p>
                </div>`
            },
            {
                title: "Charakteristika der primären Kopfschmerzen",
                content: `<div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Kriterium</th>
                                <th>Migräne</th>
                                <th>Spannungskopfschmerz</th>
                                <th>Clusterkopfschmerz</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Lokalisation</strong></td>
                                <td>hemikraniell / holozephal</td>
                                <td>holozephal</td>
                                <td>streng einseitig peri-/retroorbital</td>
                            </tr>
                            <tr>
                                <td><strong>Qualität</strong></td>
                                <td>drückend / schmerzend / pochend</td>
                                <td>drückend</td>
                                <td>glühend / brennend / stechend</td>
                            </tr>
                            <tr>
                                <td><strong>Intensität</strong></td>
                                <td>mittelstark bis stark</td>
                                <td>leicht bis mittelstark</td>
                                <td>sehr stark</td>
                            </tr>
                            <tr>
                                <td><strong>Dauer</strong></td>
                                <td>4 bis 72 Stunden</td>
                                <td>30 Minuten bis 7 Tage</td>
                                <td>15 bis 180 Minuten</td>
                            </tr>
                            <tr>
                                <td><strong>Begleitsymptome</strong></td>
                                <td>Übelkeit, Erbrechen, Photo-/Phonophobie, Osmophobie, Aura, Rückzugbedürfnis (Dunkelheit)</td>
                                <td>Phono- oder Photophobie</td>
                                <td>Einseitige Lakrimation, konjunktivale Injektion, Miosis, Ptosis, Rhinorrhö, motorische Unruhe</td>
                            </tr>
                            <tr>
                                <td><strong>Akutmedikation</strong></td>
                                <td>ASS 1000mg iv, Ibu 400-800mg po, Metamizol 1000mg iv, Triptane (po/sc/nasal). Status migraenosus: + 50-100mg Prednisolon iv.</td>
                                <td>Ibuprofen 400mg po, Paracetamol 1000mg po, ASS 500-1000mg po.</td>
                                <td><strong>100% O₂</strong> (12L/min via Reservoir, 15-20 min), Sumatriptan 6mg sc, Lidocain 4-10% in.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Therapie",
                content: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li>Stabilisierung der Vitalfunktionen gemäß ABCDE-Schema.</li>
                </ul>
                <h3>Analgetische Therapie</h3>
                <ul>
                    <li><strong>Paracetamol:</strong> 500 mg p.o. oder 1000 mg als Kurzinfusion i.v.</li>
                    <li><strong>NSAR:</strong> z.B. Ibuprofen 400-800 mg p.o., ASS 1000 mg als Kurzinfusion i.v.
                        <div class="callout callout-cave"><p>NSAR-Gabe nur, wenn eine intrakranielle Blutung ausgeschlossen ist!</p></div>
                    </li>
                    <li><strong>Metamizol:</strong> 1000 mg als Kurzinfusion i.v. (CAVE: Agranulozytoserisiko, allergisches Potential).</li>
                    <li><strong>Triptane:</strong> Bei gesicherter Migräne oder Cluster-Kopfschmerz, z.B. Sumatriptan 6 mg s.c.</li>
                </ul>
                <h3>Antiemetische Therapie</h3>
                <ul>
                    <li><strong>Metoclopramid (MCP):</strong> 10 mg als Kurzinfusion i.v. (CAVE: Kontraindiziert bei M. Parkinson).</li>
                </ul>
                <h3>Kausale Therapie</h3>
                <ul>
                    <li>Behandlung der zugrundeliegenden Ursache gemäß spezifischer SOP (z.B. SOP Zerebrale Venen-/Sinusthrombose, SOP Meningitis, SOP zerebrale Metastasen).</li>
                </ul>`
            },
            {
                title: "Merke",
                content: `<ul>
                    <li>Primäre Kopfschmerzen sind häufig; sekundäre Formen sind selten, aber oft <strong>vital bedrohlich</strong>.</li>
                    <li>Eine suffiziente Analgesie und die rasche Identifikation sekundärer Kopfschmerzen haben oberste Priorität.</li>
                    <li>Bei Vorliegen von <strong>Red Flags</strong> muss eine sofortige weitere Abklärung, meist mittels zerebraler Schnittbildgebung, erfolgen.</li>
                    <li>Keine Bildgebung bei bekannten primären Kopfschmerzen ohne Veränderung der Schmerzcharakteristik oder neue Red Flags.</li>
                    <li>Ein gutes Ansprechen auf Schmerzmittel hilft <strong>nicht</strong> bei der Unterscheidung zwischen primären und sekundären Kopfschmerzen.</li>
                    <li>Bei Kopfschmerzen bei mehreren Personen aus dem gleichen Umfeld stets an eine <strong>CO-Intoxikation</strong> denken.</li>
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
                        <p class="dispo-spec">Primäre Kopfschmerzen ohne Red Flags: ambulante Therapie und neurologische Anbindung.</p>
                        <p class="dispo-foot">Wiedervorstellung jederzeit bei Verschlechterung anbieten; Kontrollzeitpunkt durch den weiterbehandelnden Arzt festlegen.</p>
                    </section>
                    <section class="dispo-card dispo-gelb">
                        <header class="dispo-head"><span class="dispo-dot" aria-hidden="true"></span><h3>GELB &ndash; Stationäre Aufnahme (Normalstation / ZNA-Station)</h3></header>
                        <p class="dispo-sub">Regelpfad Fachabteilung</p>
                        <ul class="dispo-contacts">
                        <li class="dispo-contact"><span class="dispo-fach">Neurologie</span><span class="dispo-tel">4925</span><span class="dispo-note">identisch mit ITO / Stroke Unit</span></li>
                        <li class="dispo-contact"><span class="dispo-fach">Stroke Unit / Apoplex</span><span class="dispo-tel">4977</span><span class="dispo-note">ITO: 4925</span></li>
                        </ul>
                        <p class="dispo-spec">Red Flags &rarr; Bildgebung vor Verlegung, Neurologie einbinden.</p>
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
        stand: "07/25",
        sources: `Deutsche Gesellschaft für Neurologie (DGN). Leitlinien für Diagnostik und Therapie in der Neurologie. – Do TP et al. Red and orange flags for secondary headaches in clinical practice: SNNOOP10 list. Neurology. 2019. – Kamm K et al. Differenzialdiagnose und Notfallversorgung akuter Kopfschmerzen. Fortschr Neurol Psychiatr. 2018. – Diener HC et al. Therapie der Migräneattacke und Prophylaxe der Migräne, S1-Leitlinie, 2022.`
    });
})();