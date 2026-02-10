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
                content: `<div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Befund / Procedere</th>
                                <th>Disposition</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Komplikationslose ÖGD mit Bergen des Fremdkörpers <strong>oder</strong> konservativer Therapieansatz</td>
                                <td><strong>Ambulantes Procedere</strong></td>
                            </tr>
                            <tr>
                                <td>Schleimhautschäden (durch FK oder ÖGD) <strong>oder</strong> scharfkantiger FK <strong>oder</strong> Batterien, die nicht geborgen werden können <strong>oder</strong> Bodypacking</td>
                                <td><strong>Stationäre Aufnahme</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            }
        ],
        stand: "12/22",
        sources: `Birk M et al. Removal of foreign bodies in the upper gastrointestinal tract in adults: European Society of Gastrointestinal Endoscopy (ESGE) Clinical Guideline. Endoscopy 2016 May;48(5):489-96. – Ambe P et al. Swallowed foreign bodies in adults. Dtsch Arztebl Int 2012; 109(50): 869–75.`
    });
})();