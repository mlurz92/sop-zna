(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "hypokalzaemie",
        title: "Hypokalzämie",
        category: "Metabolisch",
        catKey: "metab",
        sections: [
            {
                title: "Definition",
                html: `<p><strong>Hypokalzämie:</strong> Serumkalzium &lt; 2,2 mmol/l bzw. ionisiertes Kalzium &lt; 1,1 mmol/l.</p>
                <ul>
                    <li><strong>Milde Hypokalzämie:</strong> Serumkalzium 2,2 - 1,9 mmol/l, asymptomatisch.</li>
                    <li><strong>Schwere Hypokalzämie:</strong> Serumkalzium &lt; 1,9 mmol/l bzw. jede symptomatische Hypokalzämie.</li>
                </ul>`
            },
            {
                title: "Ursachen",
                html: `<ul>
                    <li><strong>Hypoparathyreoidismus:</strong> (z.B. nach Thyreoidektomie).</li>
                    <li><strong>Hypomagnesiämie:</strong> (PPI-Einnahme, Alkoholabusus, Malnutrition).</li>
                    <li><strong>Vitamin D-Mangel</strong></li>
                    <li><strong>Renale Genese:</strong> Dialyse (Zitrat-Effekt).</li>
                    <li><strong>Hyperphosphatämie:</strong> (Rhabdomyolyse, Tumorlyse, etc.).</li>
                    <li><strong>Pankreatitis</strong></li>
                    <li><strong>Alkalose:</strong> (z.B. respiratorisch durch Hyperventilation).</li>
                    <li><strong>Medikamente:</strong> Bisphosphonate, Schleifendiuretika, Zytostatika, etc.</li>
                    <li><strong>Massentransfusionen</strong></li>
                </ul>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li>Kribbelparästhesien, Tetanien, Hyperreflexie.</li>
                    <li>Laryngospasmus</li>
                    <li>Epileptischer Anfall</li>
                    <li>Depression, Angst</li>
                    <li>„Low-output”-Syndrom</li>
                    <li><strong>QT-Zeit-Verlängerung:</strong> (Gefahr von HRST, z.B. Torsades de pointes).</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur).</li>
                    <li>1x venöser Zugang <div class="callout callout-cave"><strong>CAVE:</strong> Sicherer Zugang! Kalzium i.v. ist stark venenreizend.</div></li>
                    <li><strong>Venöse BGA:</strong> (Ionisiertes Kalzium? Ausschluss Pseudohypokalzämie).</li>
                    <li><strong>Labor:</strong> NW, E'lyte inkl. Kalzium, Magnesium, Phosphat, Albumin, 25(OH)-Vitamin D3, 1,25(OH)2-Vitamin D3, PTH.</li>
                    <li><strong>12-Kanal-EKG:</strong> (QTc-Zeit-Verlängerung? Herzrhythmusstörungen?).</li>
                    <li><strong>Anamnese:</strong> Symptome? Vorerkrankungen? Vorangegangene Schilddrüsen-OP? Medikamente?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Chvostek-Zeichen? Trousseau-Zeichen? Generelle Hyperreflexie?</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p><strong>Cave:</strong> Bei Abweichungen des Serumkalziums immer <strong>ionisiertes Kalzium</strong> in der Blutgasanalyse betrachten!</p>
                </div>`
            },
            {
                title: "Therapie",
                html: `<p><strong>Ursachen beheben:</strong> Grunderkrankung behandeln, Medikamente anpassen, etc.</p>
                
                <h3>Milde Hypokalzämie (Gesamtkalzium > 1,9 mmol/l, asymptomatisch)</h3>
                <ul>
                    <li><strong>1000 mg Calciumcarbonat</strong> 1-0-1 p.o. (max. 1-1-1/d).</li>
                    <li><strong>Bei Vitamin-D-Mangel:</strong> 1000 IE Cholecalciferol (Vigantoletten®) 1-0-0 p.o., Calcitriol (Rocaltrol®) 0,25-0,5 µg 1-0-1 p.o.</li>
                </ul>

                <h3>Schwere Hypokalzämie (Gesamtkalzium < 1,9 mmol/l bzw. jede symptomatische)</h3>
                <ul>
                    <li><strong>10-20 ml 10% Calciumglukonat</strong> (als Kurzinfusion in 50 ml NaCl 0,9%) über 10 min i.v. unter EKG-Kontrolle. Ggf. wiederholen bis Symptome sistieren.</li>
                    <li><strong>Dauerinfusion im Anschluss:</strong> 100 ml 10% Calciumglukonat (10 Ampullen) in 1000 ml NaCl 0,9% über Infusomat.
                        <ul>
                            <li>Laufrate: 50-100 ml/h unter engmaschigen Kalziumkontrollen mit Anpassung der Laufrate.</li>
                            <li>Ziel: Normokalzämie bis Ursache gefunden und kausal behandelt.</li>
                        </ul>
                    </li>
                    <li>Orale Therapie im Verlauf (s. oben).</li>
                </ul>

                <h3>Sonstiges</h3>
                <ul>
                    <li><strong>Bei Hypomagnesiämie:</strong> Magnesium Verla® 1-3 x/d p.o. (Brause ≙ 121 mg, Dragees ≙ 40 mg) oder ggf. <strong>1 Ampulle Magnesium Verla® 50%</strong> (≙ 10 ml ≙ 20 mmol ≙ 5 g) in 500 ml NaCl 0,9% über 2-4 h (ggf. 24h) i.v.</li>
                    <li>Änderungen in der Dauermedikation erwägen: <strong>Thiazid</strong> statt Schleifendiuretikum.</li>
                    <li>Kalziumsubstitution bei Hyperphosphatämie (z.B. Rhabdomyolyse, Tumorlyse) <strong>nur bei symptomatischer</strong> Hypokalzämie.</li>
                </ul>`
            },
            {
                title: "Diagnostischer Algorithmus",
                html: `<p>Vorgehen bei Verdacht auf Hypokalzämie:</p>
                <ol>
                    <li>Bestimmung von <strong>ionisiertem Kalzium</strong> bzw. Albumin-korrigiertem Kalzium.
                        <ul>
                            <li>Wenn normal &rarr; Pseudohypokalzämie (behandlungsfrei).</li>
                            <li>Wenn erniedrigt &rarr; "Echte" Hypokalzämie &rarr; Schritt 2.</li>
                        </ul>
                    </li>
                    <li>Bestimmung von <strong>Magnesium (Mg), Phosphat (PO4), 25(OH)-Vitamin D3, 1,25(OH)2-Vitamin D3 und PTH</strong>.</li>
                    <li><strong>Pfade basierend auf Werten:</strong>
                        <ul>
                            <li><strong>Mg &darr; :</strong> Hypomagnesiämie.</li>
                            <li><strong>PO4 &uarr; :</strong> V.a. Pseudohypoparathyreoidismus, renale Erkrankungen oder Rhabdomyolyse.</li>
                            <li><strong>PO4 &darr; :</strong> 
                                <ul>
                                    <li>Wenn Vitamin D-Metabolite &darr; &rarr; Vitamin D-Mangel.</li>
                                    <li>Wenn PTH &darr; &rarr; Hypoparathyreoidismus.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ol>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li>Unterscheide immer <strong>“echte“ vs. Pseudohypokalzämie</strong> mittels ionisiertem Kalzium in der BGA.</li>
                    <li>Die Pseudohypokalzämie ist nicht behandlungsbedürftig (höchstens der zugrundeliegende Albuminmangel).</li>
                    <li><strong>Bei Hyperventilation:</strong> CO₂-Rückatmung mittels Tüte durchführen; keine Kalziumgabe indiziert, da es sich nur um eine Umverteilung handelt.</li>
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
                        <p class="dispo-spec">Leichte, asymptomatische Hypokalzämie: orale Substitution und Kontrolle.</p>
                        <p class="dispo-foot">Wiedervorstellung jederzeit bei Verschlechterung anbieten; Kontrollzeitpunkt durch den weiterbehandelnden Arzt festlegen.</p>
                    </section>
                    <section class="dispo-card dispo-gelb">
                        <header class="dispo-head"><span class="dispo-dot" aria-hidden="true"></span><h3>GELB &ndash; Stationäre Aufnahme (Normalstation / ZNA-Station)</h3></header>
                        <p class="dispo-sub">Regelpfad Fachabteilung</p>
                        <ul class="dispo-contacts">
                        <li class="dispo-contact"><span class="dispo-fach">Nephrologie</span><span class="dispo-tel">4006 / 4933</span><span class="dispo-note">Dialysearzt: 4494</span></li>
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
                        <li class="dispo-contact"><span class="dispo-fach">IMC 2.0 (KAIM, 2 Erd)</span><span class="dispo-tel">4764</span><span class="dispo-note">internistische IMC</span></li>
                        <li class="dispo-contact"><span class="dispo-fach">ITS-Koordinator</span><span class="dispo-tel">3008</span><span class="dispo-note">zentraler ITS-Aufnahmekontakt</span></li>
                        </ul>
                        <p class="dispo-foot">Anmeldung immer über den ITS-Koordinator (3008); Transport erst nach Stabilisierung und mit ärztlicher Begleitung.</p>
                    </section>
                </div>`
            }
        ],
        stand: "10/24",
        sources: `Herold G et al. Innere Medizin 2019, S. 586 f.
        <br>Miamed Amboss: „Hypokalzämie“, Stand 18.12.2020.
        <br>Walsh J et al. SOCIETY FOR ENDOCRINOLOGY ENDOCRINE EMERGENCY GUIDANCE: Emergency management of acute hypocalcaemia in adult patients. Endocr Connect. 2016.
        <br>Rosner MH. Hypocalcemia in a Patient with Cancer. Clin J Am Soc Nephrol. 2017.
        <br>Ñamendys-Silva SA et al. Tumor lysis syndrome in the emergency department: challenges and solutions. Open Access Emerg Med. 2015.
        <br>Kenny CM et al. Things We Do for No Reason™: Calculating a "Corrected Calcium" Level. J Hosp Med. 2021.
        <br>Fachinformationen der genannten Arzneimittel, Stand 12/22.`
    });
})();