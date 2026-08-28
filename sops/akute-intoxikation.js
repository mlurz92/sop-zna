// SOP: Akute Intoxikation
// Kategorie: Toxikologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "akute-intoxikation",
        title: "Akute Intoxikation",
        category: "Toxikologie",
        catKey: "tox",
        sections: [
            {
                title: "Definition",
                html: `<ul>
                    <li><strong>Akute Intoxikation:</strong> Akute Aufnahme schädlich wirkender Substanzen (Gifte) in den menschlichen Körper, die zu Störungen des Allgemeinbefindens und der Vitalfunktionen führen.</li>
                    <li><strong>Toxidrom:</strong> Klinisches Syndrom, das durch eine Intoxikation verursacht wird.</li>
                </ul>`
            },
            {
                title: "Ursachen",
                html: `<ul>
                    <li><strong>Medikamente:</strong> Antidepressiva, Opioide, Glykoside, etc.</li>
                    <li><strong>Drogen:</strong> Alkohol, Kokain, Heroin, MDMA, etc.</li>
                    <li><strong>Chemikalien:</strong> Pestizide, Rohrreiniger, Säuren, Laugen, etc.</li>
                    <li><strong>Umweltnoxen:</strong> Blei, Quecksilber, Kohlenstoffmonoxid, etc.</li>
                    <li><strong>Tiere, Pflanzen, Pilze:</strong> Kugelfisch, Eibe, Knollenblätterpilz, etc.</li>
                    <li><strong>Aufnahmegrund:</strong> akzidentell, suizidal, kriminell, etc.</li>
                    <li><strong>Aufnahmeweg:</strong> oral, intravenös, inhalativ, transdermal, etc.</li>
                </ul>`
            },
            {
                title: "Symptome & Toxidrome",
                html: `<p>Vielfältigste Symptome möglich. Es muss nicht immer das klassische Vollbild eines Toxidroms vorliegen.</p>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Toxidrom</th>
                                <th>Pupillen</th>
                                <th>ZNS</th>
                                <th>Haut</th>
                                <th>Temperatur</th>
                                <th>HF und AF</th>
                                <th>Darm</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Opioid</strong></td>
                                <td>eng</td>
                                <td>sedierend</td>
                                <td>normal</td>
                                <td>normal</td>
                                <td>niedrig</td>
                                <td>erniedrigt</td>
                            </tr>
                            <tr>
                                <td><strong>Cholinerg</strong></td>
                                <td>eng</td>
                                <td>Verwirrung, Agitation bis Koma</td>
                                <td>sehr feucht</td>
                                <td>normal</td>
                                <td>niedrig</td>
                                <td>erhöht</td>
                            </tr>
                            <tr>
                                <td><strong>Sedativ-hypnotisch</strong></td>
                                <td>normal bis weit</td>
                                <td>sedierend</td>
                                <td>normal</td>
                                <td>normal</td>
                                <td>normal bis niedrig</td>
                                <td>normal</td>
                            </tr>
                            <tr>
                                <td><strong>Anticholinerg</strong></td>
                                <td>weit</td>
                                <td>Verwirrung, Agitation bis Koma</td>
                                <td>trocken</td>
                                <td>erhöht</td>
                                <td>erhöht</td>
                                <td>erniedrigt</td>
                            </tr>
                            <tr>
                                <td><strong>Sympathomimetisch</strong></td>
                                <td>weit</td>
                                <td>Verwirrung, Agitation bis Koma</td>
                                <td>feucht</td>
                                <td>erhöht</td>
                                <td>erhöht</td>
                                <td>normal</td>
                            </tr>
                            <tr>
                                <td><strong>Serotonerg</strong></td>
                                <td>weit</td>
                                <td>Verwirrung, Agitation bis Koma</td>
                                <td>feucht</td>
                                <td>erhöht</td>
                                <td>erhöht</td>
                                <td>normal bis erhöht</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li><strong>Ersteindruck + ABCDE + Vitalparameter</strong> (RR, Puls, SpO₂, AF, Temperatur)</li>
                    <li><strong>1x venöser Zugang</strong></li>
                    <li><strong>BGA</strong> (venös bzw. arteriell): pH? BE? pCO₂? pO₂? Hb? COHb? MetHb? Laktat? Glukose? Anionenlücke?</li>
                    <li><strong>Labor:</strong> individuell, häufig: BB, E'lyte, NW, Leberwerte, CK, Gerinnung, TSH, ggf. Alkohol, Medikamenten-Spiegel, toxikologisches Screening</li>
                    <li><strong>12-Kanal-EKG:</strong> Herzrhythmusstörungen? Ischämiezeichen? QTc-Zeit?</li>
                    <li><strong>(Fremd-)Anamnese:</strong> Art, Menge, Weg, Zeitpunkt und Grund der Giftaufnahme? Größe und Gewicht? Symptome? Vorerkrankungen? Medikamente?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Vigilanz? Pupillen? Rekap-Zeit? Schleimhäute? Haut? Herz? Lunge? Abdomen? Neurologie? Hinweise auf Toxidrom?</li>
                    <li><strong>ggf. Asservation:</strong> Blut, Urin, Speichel, Erbrochenes, Essensreste, Verpackungen, etc.</li>
                    <li><strong>ggf. cCT:</strong> z.B. bei potentiellem Schädel-Hirn-Trauma bzw. Diskrepanz zwischen Intoxikation und Schweregrad der Vigilanzminderung</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p><strong>Rasche Kontaktaufnahme mit Giftnotruf!</strong></p>
                </div>`
            },
            {
                title: "Giftnotruf",
                html: `<h3>Wichtige Informationen für den Giftnotruf</h3>
                <ul>
                    <li>Patientenname, Geburtsdatum, Fallnummer</li>
                    <li>Art, Menge, Weg, Zeitpunkt und Grund der Giftaufnahme</li>
                    <li>Körpergewicht und Körpergröße</li>
                    <li>Vitalparameter (RR, Puls, SpO₂, AF, Temperatur)</li>
                    <li>Aktueller Zustand (akutes ABCDE-Problem? Schmerzen?)</li>
                    <li>Vorerkrankungen</li>
                    <li>Je nach Art der Intoxikation weitere Informationen: BGA, EKG, etc.</li>
                </ul>
                <div class="callout callout-hinweis">
                    <p>Bei Vorliegen leerer Tablettenblister von der Einnahme <strong>aller Tabletten auf einmal</strong> ausgehen ("Worst Case")!</p>
                </div>
                <h3>Giftnotrufnummern</h3>
                <div class="table-wrap">
                    <table>
                        <tbody>
                            <tr><td>Berlin</td><td>030-19240</td><td>Mainz</td><td>06131-19240</td></tr>
                            <tr><td>Bonn</td><td>0228-19240</td><td>München</td><td>089-19240</td></tr>
                            <tr><td>Erfurt</td><td>0361-730730</td><td>Wien</td><td>0043-14064343</td></tr>
                            <tr><td>Freiburg</td><td>0761-19240</td><td>Zürich</td><td>0041-442515151</td></tr>
                            <tr><td>Göttingen</td><td>0551-383180</td><td></td><td></td></tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Therapie",
                html: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li><strong>Eigenschutz beachten</strong> (z.B. Polizei bei Fremdaggressivität hinzuziehen; Handschuhe und Schutzkittel bei transdermalen Giften i.d.R. ausreichend)</li>
                    <li>Stabilisierung der Vitalfunktionen gemäß ABCDE-Schema</li>
                    <li>Supportive Therapie (z.B. physikalische Kühlmaßnahmen bei Hyperthermie, Benzodiazepine bei Agitation)</li>
                </ul>
                <h3>Spezifische Therapie</h3>
                <ul>
                    <li><strong>Primäre Giftelimination:</strong> Resorption vermeiden (z.B. Dekontamination der Haut, ÖGD zum Bergen von Tabletten, Einsatz von Aktivkohle)</li>
                    <li><strong>Sekundäre Giftelimination:</strong> Beschleunigung der Elimination (Hydratation, Hämodialyse, etc.)</li>
                    <li><strong>Antidotgabe</strong> (siehe Tabelle unten)</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p>Die spezifische Therapie richtet sich nach Art, Menge, Weg, Zeitpunkt der Giftaufnahme + klinischem Zustand!</p>
                </div>
                <h3>Wichtige Antidote</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Vergiftung</th>
                                <th>Antidot & Dosierung</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Anticholinerges Toxidrom</strong><br><small>(z.B. TCA, Tollkirsche, Engelstrompete)</small></td>
                                <td><strong>Schwere zentrale Form:</strong> 0,5–1 mg Physostigmin i.v., dann Wiederholung nach 10–15 Minuten nach Wirkung, dann alle 30–60 Minuten oder als Perfusor 0,02 mg/kg KG/h<br><br><strong>CAVE:</strong> Überdosierung führt zu cholinergem Syndrom, Krampfanfällen, Bradyarrhythmien. Benzodiazepine bei Agitation, Blasenkatheter bei Harnverhalt.</td>
                            </tr>
                            <tr>
                                <td><strong>Benzodiazepine</strong></td>
                                <td>0,5 mg Flumazenil titriert i.v.<br><strong>CAVE:</strong> Senkt die Krampfschwelle! Kürzere Halbwertszeit als Benzodiazepine!</td>
                            </tr>
                            <tr>
                                <td><strong>Cholinerges Toxidrom</strong><br><small>(z.B. E605, Saringas)</small></td>
                                <td>2–3 mg Atropin i.v., Bolusdosis alle 5 min verdoppeln bis Kontrolle der Bronchorrhoe und RR > 80 mmHg, anschließend Perfusor mit 10–20 % der kumulierten Bolusdosis/Stunde</td>
                            </tr>
                            <tr>
                                <td><strong>Ingestion von Tensiden</strong><br><small>(z.B. Waschmittel, Spülmittel)</small></td>
                                <td>≥ 5 ml Dimeticon p.o.</td>
                            </tr>
                            <tr>
                                <td><strong>Kohlenmonoxid</strong></td>
                                <td>100% Sauerstoff inhalativ, ggf. NIV, ggf. hyperbare Oxygenation</td>
                            </tr>
                            <tr>
                                <td><strong>Methanol, Ethylenglykol</strong></td>
                                <td>15 mg/kg KG Fomepizol über 30–45 min i.v. (weitere Dosis abhängig von Niere und Plasmaspiegel)</td>
                            </tr>
                            <tr>
                                <td><strong>Methämoglobin-Bildner</strong></td>
                                <td>1–2 mg/kg KG Methylenblau über 5 min i.v., wiederholen bei Persistenz oder Rezidiv nach 60 min<br>2–4 mg/kg KG Toluidinblau i.v., meist 90–150 mg ausreichend, ggf. nach 30 min wiederholen</td>
                            </tr>
                            <tr>
                                <td><strong>Opioide</strong><br><small>(z.B. Morphin, Heroin, Fentanyl)</small></td>
                                <td>0,1–0,2 mg Naloxon alle 2–3 min, Ziel: ausreichende Spontanatmung<br><strong>CAVE:</strong> Kürzere Halbwertszeit als Opioide!</td>
                            </tr>
                            <tr>
                                <td><strong>Paracetamol</strong></td>
                                <td>Acetylcystein i.v., z.B. nach Prescott-Schema</td>
                            </tr>
                            <tr>
                                <td><strong>Rauchgas</strong></td>
                                <td>Sauerstoff-Gabe, ggf. Hydroxycobalamin (bei begleitender Zyanidintoxikation)</td>
                            </tr>
                            <tr>
                                <td><strong>Zyanide (Blausäure)</strong><br><small>(z.B. Bittermandeln, Brandgase)</small></td>
                                <td>70 mg/kg KG Hydroxycobalamin i.v. (meist 1 Ampulle mit 5 g)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li>Frühzeitige Rücksprache mit <strong>Giftnotruf</strong> und Umsetzung der gegebenen Empfehlungen!</li>
                    <li>Es muss nicht immer das klassische Vollbild eines Toxidroms vorliegen.</li>
                    <li>Bei Diskrepanz zwischen Intoxikation und Schweregrad der Vigilanzminderung → <strong>cCT</strong> ("Läuse und Flöhe", z.B. C2-Intox + ICB).</li>
                    <li>Jeder Patient nach Suizidversuch muss auch gegen seinen Willen umgehend <strong>psychiatrisch vorgestellt</strong> werden.</li>
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
                        <p class="dispo-spec">Entlassung erst nach Ablauf der substanzspezifischen Überwachungszeit und psychiatrischer Einschätzung bei Intention.</p>
                        <p class="dispo-foot">Wiedervorstellung jederzeit bei Verschlechterung anbieten; Kontrollzeitpunkt durch den weiterbehandelnden Arzt festlegen.</p>
                    </section>
                    <section class="dispo-card dispo-gelb">
                        <header class="dispo-head"><span class="dispo-dot" aria-hidden="true"></span><h3>GELB &ndash; Stationäre Aufnahme (Normalstation / ZNA-Station)</h3></header>
                        <p class="dispo-sub">Regelpfad Fachabteilung</p>
                        <ul class="dispo-contacts">
                        <li class="dispo-contact"><span class="dispo-fach">ZNA-Station / Aufnahme- und Beobachtungsstation</span><span class="dispo-tel">4812</span><span class="dispo-note">nur nach RS mit Facharzt / OA ZNA</span></li>
                        <li class="dispo-contact"><span class="dispo-fach">Giftnotruf Erfurt</span><span class="dispo-tel">Nummer siehe Aushang ZNA</span><span class="dispo-note">toxikologische Beratung</span></li>
                        </ul>
                        <p class="dispo-spec">Überwachung auf ZNA-/A&amp;B-Station; toxikologische Beratung über Giftnotruf.</p>
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
                        <li class="dispo-contact"><span class="dispo-fach">ITS Anästhesie (KAIS, Haus 21)</span><span class="dispo-tel">4054</span></li>
                        <li class="dispo-contact"><span class="dispo-fach">IMC KAIS</span><span class="dispo-tel">4744</span><span class="dispo-note">alternativ 4640</span></li>
                        <li class="dispo-contact"><span class="dispo-fach">ITS-Koordinator</span><span class="dispo-tel">3008</span><span class="dispo-note">zentraler ITS-Aufnahmekontakt</span></li>
                        </ul>
                        <p class="dispo-foot">Anmeldung immer über den ITS-Koordinator (3008); Transport erst nach Stabilisierung und mit ärztlicher Begleitung.</p>
                    </section>
                </div>
                <p class="dispo-actions"><button type="button" class="dispo-dir-btn" data-dir-open><i class="fa-solid fa-address-book"></i> Vollständiges Telefonverzeichnis öffnen</button></p>`
            }
        ],
        stand: "02/24",
        sources: `Herold G et al. Innere Medizin 2023.<br>Hüser C et al. Toxidrome in der Notaufnahme. Notaufnahme up2date 2023.<br>Müller D et al. Common causes of poisoning. Dtsch Arztebl Int 2013.<br>Giftinformationszentrum-Nord: www.giz-nord.de`
    });
})();