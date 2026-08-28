(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "akutes-aortensyndrom",
        title: "Akutes Aortensyndrom",
        category: "Kardiologie",
        catKey: "kardio",
        sections: [
            {
                title: "Definition",
                html: `<p><strong>Akutes Aortensyndrom (AAS):</strong> Sammelbegriff für lebensbedrohliche Erkrankungen der Aorta, die sich klinisch ähnlich präsentieren:</p>
                <ul>
                    <li><strong>Aortendissektion (AD):</strong> Durch Intima-Einriss und Blutfluss in Media bedingte Separation der Aortenwand mit Ausbildung eines falschen Lumens.
                        <ul>
                            <li><strong>Typ A:</strong> Aorta ascendens betroffen (unabhängig von Beginn und distaler Ausbreitung).</li>
                            <li><strong>Typ B:</strong> Aorta descendens betroffen (nach Abgang der A. subclavia sinistra).</li>
                        </ul>
                    </li>
                    <li><strong>Intramurales Hämatom (IMH)</strong></li>
                    <li><strong>Penetrierendes atherosklerotisches Ulcus (PAU)</strong></li>
                </ul>`
            },
            {
                title: "Ursachen",
                html: `<ul>
                    <li>Arterielle Hypertonie, Atherosklerose</li>
                    <li>Genetische Bindegewebserkrankungen (z.B. Marfan-Syndrom, Ehlers-Danlos-Syndrom)</li>
                    <li>Positive Familienanamnese bzw. bekanntes Aortenaneurysma</li>
                    <li>Aortenklappenerkrankung (z.B. bikuspide Aortenklappe)</li>
                    <li>Vorangegangener aortaler Eingriff, Trauma</li>
                    <li>Amphetamin/Kokain-Abusus</li>
                </ul>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li><strong>Plötzlicher, stärkster, scharfer bzw. reißender Schmerz</strong> im Bereich von Thorax, Abdomen oder Rücken ("Vernichtungsschmerz")</li>
                    <li>ggf. Wanderung des Schmerzes mit Ausbreitung der Dissektionsmembran</li>
                    <li><strong>Symptome des malperfundierten Endorgans:</strong>
                        <ul>
                            <li><strong>Koronar:</strong> Bild eines ST-Hebungsinfarkts</li>
                            <li><strong>Zerebral:</strong> Bild eines Schlaganfalls</li>
                            <li><strong>Extremitäten:</strong> Bild eines akuten arteriellen Verschlusses</li>
                            <li><strong>Spinal:</strong> segmentale Sensibilitätsstörung bis komplette Paraplegie (hoher Querschnitt)</li>
                            <li><strong>Viszeral/Renal:</strong> Bauchschmerzen, Diarrhoe, akute Nierenschädigung</li>
                        </ul>
                    </li>
                    <li>ggf. vegetative Begleitsymptomatik (z.B. Kaltschweißigkeit, Übelkeit)</li>
                    <li>ggf. lokale Komplikationen (Perikarderguss, Hämatomediastinum/-peritoneum, Aortenklappeninsuffizienz, Pleuraerguss)</li>
                    <li><strong>Schockformen:</strong>
                        <ul>
                            <li>Kardiogen (bei Aortenklappeninsuffizienz oder Myokardischämie)</li>
                            <li>Obstruktiv (bei Perikardtamponade)</li>
                            <li>Hämorrhagisch (bei Aortenruptur)</li>
                        </ul>
                    </li>
                    <li>ggf. unspezifische Beschwerden (z.B. Synkope)</li>
                </ul>`
            },
            {
                title: "Aortic Dissection Detection Risk Score (ADD-RS)",
                html: `<div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Kategorie</th>
                                <th>Merkmale (mind. 1 erfüllt = 1 Punkt pro Kategorie)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Hochrisiko-Anamnese</strong></td>
                                <td>Marfan-Syndrom (oder andere Bindegewebserkrankung), Familienanamnese f. Aortenerkrankungen, bekannte Aortenklappenerkrankung, bekanntes thorakales Aortenaneurysma, vorangegangene Manipulation an der Aorta (einschl. Herz-OP).</td>
                            </tr>
                            <tr>
                                <td><strong>Hochrisiko-Schmerz</strong></td>
                                <td>Brust-, Rücken- oder abdominelle Schmerzen mit: Abruptem Beginn, hoher Schmerzintensität UND zerreißendem Charakter.</td>
                            </tr>
                            <tr>
                                <td><strong>Hochrisiko-Untersuchung</strong></td>
                                <td>Pulsdefizit, RR-Unterschied (systolisch), fokale neurologische Defizite (im Zusammenhang mit Schmerz), neu aufgetretenes Diastolikum (im Zusammenhang mit Schmerz), Hypotonie oder Schock.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p><em>Der Score variiert von 0-3 Punkten. Pro Kategorie wird maximal 1 Punkt vergeben.</em></p>`
            },
            {
                title: "Diagnostischer Algorithmus",
                html: `<div class="callout callout-hinweis">
                    <p><strong>Vorgehen basierend auf ADD-RS:</strong></p>
                    <ul>
                        <li><strong>0-1 Punkte (Niedrigrisiko):</strong>
                            <ul>
                                <li>TTE, D-Dimere (Cutoff: 500 µg/l), Röntgen-Thorax</li>
                                <li>Bei ≥ 1 Auffälligkeit (oder positiven D-Dimeren) → direkt <strong>CT-Angiografie</strong></li>
                                <li>Sind alle unauffällig → Aortendissektion unwahrscheinlich</li>
                            </ul>
                        </li>
                        <li><strong>2-3 Punkte (Hochrisiko):</strong>
                            <ul>
                                <li>Sofortige <strong>EKG-getriggerte CT-Angiografie</strong> der gesamten Aorta.</li>
                            </ul>
                        </li>
                    </ul>
                    <p><strong>Merke:</strong> Bei hämodynamischer Instabilität rasches TTE bzw. TEE!</p>
                </div>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li>Ersteindruck + ABCDE + Vitalparameter + <strong>RR-Messung an beiden Armen</strong></li>
                    <li>2x großlumiger venöser Zugang</li>
                    <li><strong>BGA:</strong> Hb? pH? BE? Laktat?</li>
                    <li><strong>Kreuzblut</strong> abnehmen und ggf. EK anfordern</li>
                    <li><strong>Labor:</strong> BB, CRP, E’lyte, NW, Gerinnung, GOT, GPT, CK, LDH, TSH, hs-Troponin, D-Dimere, β-HCG</li>
                    <li><strong>12-Kanal-EKG:</strong> Ischämiezeichen? Niedervoltage?</li>
                    <li><strong>Anamnese:</strong> Fokus auf Schmerzcharakter, Vorerkrankungen, Marfan, KHK, Drogenabusus.</li>
                    <li><strong>Körperliche Untersuchung:</strong> Vigilanz, Rekap-Zeit, Pulsstatus, neues Diastolikum, leise Herztöne, fokale Neurologie.</li>
                    <li><strong>POCUS:</strong> Suche nach Dissektionsmembran, Perikarderguss, Aorteninsuffizienz, freier Flüssigkeit, Pleuraerguss.</li>
                    <li><strong>Röntgen-Thorax:</strong> Verbreitertes Mediastinum? Abnormale Aortenkontur? Trachealkompression?</li>
                    <li><strong>TEE</strong> bei hämodynamischer Instabilität oder Nicht-Verfügbarkeit von CT-A.</li>
                    <li><strong>CT-Angiografie (EKG-getriggert):</strong> Gesamte Aorta zur Lokalisation des ersten Entry und OP-Planung.</li>
                    <li><strong>Invasive Blutdruckmessung:</strong> Bei RR-Differenz stets am Arm mit den höheren Werten (ohne OP-Verzögerung).</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p>Sofortige Rücksprache mit Gefäß- oder Herzchirurgie halten!</p>
                </div>`
            },
            {
                title: "Therapie",
                html: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li>Stabilisierung der Vitalfunktionen gemäß ABCDE-Schema.</li>
                    <li>Bei Hypotonie: Ursachensuche, 1000 ml Sterofundin i.v., Katecholamine meiden sofern möglich.</li>
                    <li><strong>Analgesie:</strong> Morphin repetitiv 3-5 mg i.v.</li>
                    <li><strong>Anxiolyse:</strong> ggf. zusätzlich Midazolam 1-2 mg i.v.</li>
                    <li><strong>Bei Perikardtamponade:</strong> ggf. notfallmäßige Perikardiozentese (CAVE: Keine OP-Verzögerung).</li>
                </ul>

                <h3>Herzfrequenzsenkung (Ziel: 60-80/min)</h3>
                <ul>
                    <li><strong>Metoprololtartrat:</strong> 2,5-5 mg (1 Amp. = 5 mg/5 ml ≙ 1 mg/ml) langsam i.v., ggf. nach 5-10 min wiederholen (max. 15 mg/d).</li>
                    <li><strong>Esmolol-Perfusor:</strong> (≙ 50 mg/ml), Bolus 1-2 ml, Start mit 4 ml/h, nach Wirkung titrieren.</li>
                    <li><strong>Alternative (β-Blocker-Unverträglichkeit):</strong> Verapamil 5 mg i.v. (1 Amp. = 5 mg/2 ml ≙ 2,5 mg/ml) langsam i.v., ggf. nach 5-10 min wiederholen.</li>
                </ul>

                <h3>Blutdrucksenkung (Ziel: systolisch < 120 mmHg)</h3>
                <p><em>Ziel ist der niedrigste Blutdruck mit noch adäquater Organperfusion.</em></p>
                <ul>
                    <li><strong>Urapidil:</strong> 5-10 mg Boli i.v., ggf. als Perfusor (≙ 250 mg/50 ml ≙ 5 mg/ml), Start mit 1 ml/h, Titration meist 1-8 ml/h.</li>
                    <li><strong>Nitroglycerin-Perfusor:</strong> (50 mg/50 ml ≙ 1 mg/ml), Start mit 1 ml/h, Titration meist 2-8 ml/h.</li>
                    <li><strong>Clonidin-Perfusor:</strong> (1,5 mg/50 ml ≙ 0,03 mg/ml), Start mit 1 ml/h, Titration meist 1-3 ml/h.</li>
                </ul>
                <div class="callout callout-cave">
                    <p><strong>WICHTIG:</strong> Gabe von Vasodilatatoren (z.B. Nitroglycerin) erst <strong>NACH</strong> vorheriger Reduktion der Herzfrequenz!</p>
                </div>

                <h3>Kausale Therapie</h3>
                <ul>
                    <li><strong>AD Typ A:</strong> Notfall-Operation bzw. Intervention.</li>
                    <li><strong>AD Typ B:</strong> Konservativ, außer bei Komplikationen (Malperfusion, Ruptur, Expansion, retrograde Typ-A-AD, therapierefraktäre Hypertonie/Schmerz).</li>
                    <li><strong>IMH / PAU:</strong> Behandlung i.d.R. analog zur Aortendissektion.</li>
                </ul>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li>Bei Thoraxschmerzen + 1 (Synkope, neurologische Ausfälle, etc.) stets an AAS denken!</li>
                    <li>Die AD Typ A bzw. Typ B mit Komplikationen stellt einen herzchirurgischen Notfall dar.</li>
                    <li>Therapeutische Grundpfeiler: Suffiziente Analgesie, HF- und RR-Kontrolle sowie rasche OP/Intervention.</li>
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
                        <p class="dispo-spec">Nicht vorgesehen &ndash; jeder Verdacht ist ein zeitkritischer Notfall.</p>
                        <p class="dispo-foot">Wiedervorstellung jederzeit bei Verschlechterung anbieten; Kontrollzeitpunkt durch den weiterbehandelnden Arzt festlegen.</p>
                    </section>
                    <section class="dispo-card dispo-gelb">
                        <header class="dispo-head"><span class="dispo-dot" aria-hidden="true"></span><h3>GELB &ndash; Stationäre Aufnahme (Normalstation / ZNA-Station)</h3></header>
                        <p class="dispo-sub">Regelpfad Fachabteilung</p>
                        <ul class="dispo-contacts">
                        <li class="dispo-contact"><span class="dispo-fach">Kardiologie</span><span class="dispo-tel">4006 / 4933</span><span class="dispo-note">Diensthabender Internist (BVZ) &middot; HKL: 3333</span></li>
                        <li class="dispo-contact"><span class="dispo-fach">Gefäßchirurgie (GCH)</span><span class="dispo-tel">4923 / 2766</span><span class="dispo-note">Dienstarzt über Station 2235</span></li>
                        </ul>
                        <p class="dispo-spec">Typ A &rarr; sofortige herzchirurgische Verlegung anbahnen, Typ B &rarr; Gefäßchirurgie/Kardiologie.</p>
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
                        <li class="dispo-contact"><span class="dispo-fach">ITS-Koordinator</span><span class="dispo-tel">3008</span><span class="dispo-note">zentraler ITS-Aufnahmekontakt</span></li>
                        </ul>
                        <p class="dispo-foot">Anmeldung immer über den ITS-Koordinator (3008); Transport erst nach Stabilisierung und mit ärztlicher Begleitung.</p>
                    </section>
                </div>
                <p class="dispo-actions"><button type="button" class="dispo-dir-btn" data-dir-open><i class="fa-solid fa-address-book"></i> Vollständiges Telefonverzeichnis öffnen</button></p>`
            }
        ],
        stand: "10/23",
        sources: `Isselbacher EM et al. Guideline for the Diagnosis and Management of Aortic Disease. Circulation. 2022 Dec 13;146(24). – Erbel R et al. 2014 ESC Guidelines on the diagnosis and treatment of aortic diseases. Eur Heart J. 2014 Nov 1;35(41):2873-926. – Ohle R et al. Diagnosing acute aortic syndrome: a Canadian clinical practice guideline. CMAJ 2020 July 20. – Leick J et al. Standard operating procedures zur Diagnostik und Therapie des akuten Aortensyndroms. Kardiologe. 2013. 7:326–345. – DGTHG S2k Leitlinie 011-018: Behandlung der Thorakalen Aortendissektion Typ A. – Fachinformationen Stand 12/22.`
    });
})();