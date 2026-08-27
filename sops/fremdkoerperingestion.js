(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "fremdkoerperingestion",
        title: "Fremdkörperingestion",
        category: "Gastroenterologie",
        catKey: "gi",
        sections: [
            {
                title: "Definition",
                content: `<p><strong>Fremdkörperingestion:</strong> Orale Aufnahme eines Fremdkörpers (akzidentell oder absichtlich).</p>`
            },
            {
                title: "Ursachen",
                content: `<ul>
                    <li>Knochen, Fischgräten, Zahnprothesen, Scherben, Münzen, Rasierklingen, Batterien, Magnete, Drogenpakete, etc.</li>
                </ul>
                <h3>Begünstigende Faktoren</h3>
                <ul>
                    <li>Höheres Alter</li>
                    <li>Psychiatrische Erkrankung, mentale Retardierung</li>
                    <li>Alkoholintoxikation</li>
                    <li>Sekundärer Krankheitsgewinn (z.B. Gefängnisinsassen)</li>
                </ul>`
            },
            {
                title: "Symptome",
                content: `<ul>
                    <li>Häufig symptomlos</li>
                </ul>
                <h3>Symptome einer ösophagealen Impaktion</h3>
                <ul>
                    <li>Fremdkörpergefühl, Schluckbeschwerden, Brustschmerzen</li>
                    <li>Würgen, Erbrechen, Hypersalivation</li>
                    <li>Unfähigkeit, eigenen Speichel zu schlucken</li>
                    <li>Stridor, Dyspnoe</li>
                </ul>
                <h3>Weitere Symptome</h3>
                <ul>
                    <li>Abdominelle Schmerzen, Erbrechen</li>
                </ul>
                <h3>Symptome von Komplikationen</h3>
                <ul>
                    <li>Perforation, Emphysem, Mediastinitis, Abszess, Fistelbildung, Ileus, etc.</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                content: `<ul>
                    <li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur)</li>
                    <li>1x venöser Zugang</li>
                    <li><strong>Labor:</strong> BB, Gerinnung</li>
                    <li><strong>Anamnese:</strong> Umstände der Ingestion? Art des FK? Symptome? Schmerzen? Fieber? Erbrechen? Letzter Stuhlgang? Vorerkrankungen? Medikamente?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Speichelfluss? Hautemphysem? Stridor? Pulmonale RG? Hinweise auf Ileus? Abdominelle Abwehrspannung?</li>
                    <li><strong>Röntgen Hals/Thorax/Abdomen:</strong> in einer bzw. zwei Ebenen bei V.a. röntgendichte/unbekannte Fremdkörper (Anzahl, Größe und Lokalisation? Hinweise auf Komplikationen?)</li>
                    <li><strong>Serielle Röntgen-Kontrollen:</strong> bei fehlender Passage unter konservativer Therapie
                        <ul>
                            <li>Wöchentlich: stumpfe FK</li>
                            <li>Täglich: endoskopisch nicht bergbare scharfkantige FK</li>
                            <li>Alle 3–4 Tage: Batterien distal des Duodenums</li>
                        </ul>
                    </li>
                    <li><strong>CT:</strong> bei V.a. operationsbedürftige Komplikationen (Perforation, Fistelbildung, Abszess, etc.)</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p>Frühzeitige Rücksprache mit Gastroenterologie!</p>
                </div>
                <h3>Darstellbarkeit ingestierter Fremdkörper mittels Röntgen</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>In Röntgen-Untersuchung identifizierbar?</th>
                                <th>Fremdkörper</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Ja, meist identifizierbar</strong></td>
                                <td>"Wahre" Fremdkörper (keine Nahrungsmittel), Steak-Knochen</td>
                            </tr>
                            <tr>
                                <td><strong>Nein, meist nicht identifizierbar</strong></td>
                                <td>Nahrungsbolus, Fisch- oder Hühnchen-Knochen, Holz, Plastik, Glas, Dünne Metallobjekte</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Therapie",
                content: `<h3>Konservativ ("watch and wait")</h3>
                <ul>
                    <li>Therapie der Wahl bei <strong>stumpfen, kurzen (&lt; 5-6 cm) und schmalen (&lt; 2,5 cm Durchmesser) Fremdkörpern</strong> (Ausnahme: Magnete, Batterien → Nekrosegefahr!), die den Ösophagus passiert haben und asymptomatischen Patienten.</li>
                    <li>80–90 % der ingestierten Fremdkörper passieren den Magen-Darm-Trakt spontan und komplikationslos.</li>
                    <li>Spontaner Abgang meist nach 4–6 Tagen, selten bis 4 Wochen.</li>
                    <li>Patient soll normal weiteressen und seinen Stuhlgang kontinuierlich auf Abgang des Fremdkörpers beobachten.</li>
                </ul>
                <h3>Endoskopische Fremdkörperentfernung</h3>
                <ul>
                    <li>Abhängig von Lokalisation und Beschaffenheit des ingestierten Fremdkörpers (s. Tabelle Dringlichkeit).</li>
                    <li>Bei Versagen des konservativen Procederes (Verbleib des Fremdkörpers im Magen &gt; 3-4 Wochen).</li>
                </ul>
                <h3>Chirurgische Intervention (selten!)</h3>
                <ul>
                    <li>Bei Komplikationen (Perforation, Abszess, Ileus, frustraner endoskopischer Bergeversuch, endoskopisch nicht stillbare Blutung, etc.).</li>
                    <li>Bei gefährlichen Objekten distal des Treitz-Bandes, die nach 3 Tagen nicht spontan ausgeschieden wurden.</li>
                </ul>
                <h3>Dringlichkeit der Endoskopie</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Art des Fremdkörpers</th>
                                <th>Ösophagus</th>
                                <th>Magen/Dünndarm</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Batterie</strong></td>
                                <td>&lt; 2 h bis max. 6 h</td>
                                <td>&lt; 24 h</td>
                            </tr>
                            <tr>
                                <td><strong>Magnet</strong></td>
                                <td>&lt; 24 h</td>
                                <td>&lt; 24 h</td>
                            </tr>
                            <tr>
                                <td><strong>Scharfkantiger Fremdkörper</strong></td>
                                <td>&lt; 2 h bis max. 6 h</td>
                                <td>&lt; 24 h</td>
                            </tr>
                            <tr>
                                <td><strong>Stumpfer, kleiner FK (&lt; 2-2,5 cm)</strong></td>
                                <td>&lt; 24 h</td>
                                <td>&lt; 72 h (bzw. fehlende Passage nach 4 W)</td>
                            </tr>
                            <tr>
                                <td><strong>Stumpfer, mittl. FK (&gt; 2-2,5 cm)</strong></td>
                                <td>&lt; 24 h</td>
                                <td>&lt; 72 h</td>
                            </tr>
                            <tr>
                                <td><strong>Großer Fremdkörper (&gt; 5-6 cm Länge)</strong></td>
                                <td>&lt; 24 h</td>
                                <td>&lt; 24 h</td>
                            </tr>
                            <tr>
                                <td><strong>Nahrungsbolus</strong></td>
                                <td>&lt; 2 h bis max. 6 h (bei vollst. Okklusion) / &lt; 24 h</td>
                                <td>-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Merke",
                content: `<ul>
                    <li>Bei V.a. operationsbedürftige Komplikationen immer <strong>CT</strong> (Röntgen hier nicht sensitiv genug).</li>
                    <li><strong>Bei Bodypacking:</strong> Konservatives Vorgehen (Gefahr der Ruptur der Drogenpäckchen).
                        <ul>
                            <li>Bei Ruptur der Drogenpäckchen oder Komplikationen (z.B. Ileus) → chirurgische Intervention.</li>
                        </ul>
                    </li>
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
                        <p class="dispo-spec">Stumpfe, kleine Fremdkörper distal des Ösophagus ohne Symptome: ambulante Verlaufskontrolle.</p>
                        <p class="dispo-foot">Wiedervorstellung jederzeit bei Verschlechterung anbieten; Kontrollzeitpunkt durch den weiterbehandelnden Arzt festlegen.</p>
                    </section>
                    <section class="dispo-card dispo-gelb">
                        <header class="dispo-head"><span class="dispo-dot" aria-hidden="true"></span><h3>GELB &ndash; Stationäre Aufnahme (Normalstation / ZNA-Station)</h3></header>
                        <p class="dispo-sub">Regelpfad Fachabteilung</p>
                        <ul class="dispo-contacts">
                        <li class="dispo-contact"><span class="dispo-fach">Gastroenterologie</span><span class="dispo-tel">4006 / 4933</span><span class="dispo-note">Endoskopie: 2674 (tags) / 5663 (Dienst)</span></li>
                        <li class="dispo-contact"><span class="dispo-fach">HNO</span><span class="dispo-tel">2388</span><span class="dispo-note">HNO-Station: 2374</span></li>
                        </ul>
                        <p class="dispo-spec">Zeitkritisch bei Batterien, Magneten und ösophagealer Impaktion &rarr; sofortige Endoskopie.</p>
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
        stand: "12/22",
        sources: `Birk M et al. Removal of foreign bodies in the upper gastrointestinal tract in adults: European Society of Gastrointestinal Endoscopy (ESGE) Clinical Guideline. Endoscopy 2016 May;48(5):489-96. – Ambe P et al. Swallowed foreign bodies in adults. Dtsch Arztebl Int 2012; 109(50): 869–75.`
    });
})();