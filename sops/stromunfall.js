(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "stromunfall",
        title: "Stromunfall",
        category: "Toxikologie",
        catKey: "tox",
        stand: "10/25",
        sections: [
            {
                title: "Definition",
                html: `<p><strong>Stromunfall:</strong> Verletzung durch die Einwirkung von elektrischem Strom auf den Körper.</p>
                <p>Das Ausmaß der Schädigung ist abhängig von Stromstärke, Spannung, individuellem Widerstand, Art (Gleich- vs. Wechselstrom) und Weg des Stroms sowie der Fläche und Dauer des Kontakts mit der Stromquelle.</p>`
            },
            {
                title: "Ursachen",
                html: `<ul>
                    <li><strong>Niederspannungs-Unfall (≤ 1000 Volt):</strong> Haushaltsstrom, U-Bahn-Schienen, Bergwerk, etc.</li>
                    <li><strong>Hochspannungs-Unfall (> 1000 Volt):</strong> Bahnnetz, Hochspannungsleitung, Blitzeinschlag, etc.</li>
                </ul>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li><strong>ggf. Verbrennungen:</strong> Lokale Hautverbrennungen, großflächige Verbrennungen mit konsekutiver Infektion und Dehydratation, <strong>innere Verbrennungen</strong>.</li>
                    <li><strong>ggf. muskuloskelettal:</strong> Frakturen, Luxationen, Muskelschädigung, Kompartment-Syndrom, Rhabdomyolyse mit konsekutiver Nierenschädigung.</li>
                    <li><strong>ggf. kardiovaskulär:</strong> Herzrhythmusstörungen, Herzmuskelverletzung, Myokardinfarkt, Gerinnungsstörung.</li>
                    <li><strong>ggf. respiratorisch:</strong> Zwerchfellparalyse, zentrale Atemstörung.</li>
                    <li><strong>ggf. neurologisch:</strong> Bewusstlosigkeit, retrograde Amnesie, Paralyse, Sensibilitätsverlust.</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li><strong>Ersteindruck + ABCDE + Vitalparameter</strong> (RR, Puls, SpO₂, AF, Temperatur).</li>
                    <li><strong>1-2x venöser Zugang.</strong></li>
                    <li><strong>ggf. venöse BGA:</strong> (pH? E’lyte? Laktat?).</li>
                    <li><strong>Labor:</strong> hs-Troponin, BB, E’lyte, NW, CK, Gerinnung.</li>
                    <li><strong>ggf. Urinstatus:</strong> Prüfung auf Myoglobinurie.</li>
                    <li><strong>12-Kanal-EKG:</strong> Suche nach Sinusbradykardie/-tachykardie, Extrasystolen, Vorhofflimmern, Ventrikuläre Tachykardie, Blockbildern, QTc-Zeit-Verlängerung.</li>
                    <li><strong>Anamnese:</strong> Unfallhergang? Symptome? Bewusstlosigkeit? Palpitationen? Angina Pectoris? Art des Stroms? Spannung? Stromstärke? Dauer des Kontakts? Weg des Stroms durch den Körper? Kardiale Vorerkrankungen? Herzschrittmacher? Schwangerschaft? Medikamente? Begleitverletzungen? Tetanus-Impfstatus?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Strommarke? Verbrennungen? pDMS-Check? Hinweise auf Organschädigungen/Kompartmentsyndrom? Begleitverletzungen?</li>
                    <li><strong>ggf. Verlaufsdiagnostik:</strong> hs-Troponin-Messung und EKG wiederholen (analog zur SOP NSTEMI).</li>
                    <li><strong>ggf. weitere Diagnostik:</strong> Rö/CT bei Trauma, ICD/SM-Abfrage bei Trägern, CTG/Gyn-Vorstellung bei Schwangeren.</li>
                    <li><strong>ggf. D-ärztliche Vorstellung:</strong> Bei Arbeitsunfall (BG-spezifische Vorgaben beachten!).</li>
                </ul>`
            },
            {
                title: "Therapie",
                html: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li>Stabilisierung der Vitalfunktionen gemäß ABCDE-Schema.</li>
                </ul>
                <h3>Behandlung von Komplikationen</h3>
                <ul>
                    <li><strong>Traumafolgen:</strong> Analgesie, adäquate Versorgung, ggf. Tetanus-Schutz auffrischen.</li>
                    <li><strong>Verbrennungen:</strong> Analgesie, steriles Abdecken, Flüssigkeitssubstitution, Wärmeerhalt, adäquate Versorgung.</li>
                    <li><strong>Herzrhythmusstörungen:</strong> siehe entsprechende SOP Herzrhythmusstörungen.</li>
                    <li><strong>Rhabdomyolyse:</strong> Volumentherapie, Behandlung von Elektrolytstörungen.</li>
                    <li><strong>Kompartmentsyndrom:</strong> Analgesie, Fasziotomie.</li>
                    <li><strong>Herz-Kreislaufstillstand:</strong> Leitliniengerechte CPR.
                        <div class="callout callout-hinweis">
                            <p>Gutes Langzeitüberleben trotz prolongierter Reanimation bei jungen Patienten beschrieben; <strong>starre und weite Pupillen</strong> aufgrund einer strombedingten reversiblen autonomen Dysfunktion sollten <strong>nicht</strong> zu einem frühzeitigen Reanimationsabbruch führen!</p>
                        </div>
                    </li>
                </ul>`
            },
            {
                title: "Diagnostischer Algorithmus",
                html: `<p>Vorgehen basierend auf Risikofaktoren:</p>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Befund / Kriterium</th>
                                <th>Maßnahme</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    • Hochspannungsunfall (> 1000 Volt)<br>
                                    • Bewusstlosigkeit<br>
                                    • EKG-Veränderungen<br>
                                    • Signifikante Troponin-Erhöhung/-Dynamik*
                                </td>
                                <td><strong>Kardiales Monitoring für mindestens 24 h</strong></td>
                            </tr>
                            <tr>
                                <td>Schwangerschaft</td>
                                <td><strong>CTG / Gyn-Vorstellung</strong></td>
                            </tr>
                            <tr>
                                <td>Extrakardiale Verletzung</td>
                                <td><strong>Entsprechende fachspezifische Therapie</strong></td>
                            </tr>
                            <tr>
                                <td>SM / ICD-Träger</td>
                                <td><strong>SM / ICD-Abfrage</strong></td>
                            </tr>
                            <tr>
                                <td>Nichts von oben zutreffend</td>
                                <td><strong>Ambulante Entlassung erwägen</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p><small>*Stellenwert des hs-Troponin bei Stromunfall wird kontrovers diskutiert.</small></p>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li>Durch <strong>Strommarken</strong> lassen sich der Weg des Stroms und potentielle Schädigungen nachvollziehen.</li>
                    <li><strong>Wechselstrom:</strong> Gefahr von Tetanien (Patient kann Stromquelle nicht mehr loslassen) und Gefahr von Kammerflimmern.</li>
                    <li>Stromschläge durch Weidezäune sind trotz Hochspannung i.d.R. wegen kurzer Dauer und niedriger Stromstärke harmlos.</li>
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
                        <p class="dispo-spec">Niedervoltunfall ohne Bewusstlosigkeit, ohne EKG-Veränderungen und ohne Verletzungen; D-Arzt-Verfahren beachten.</p>
                        <p class="dispo-foot">Wiedervorstellung jederzeit bei Verschlechterung anbieten; Kontrollzeitpunkt durch den weiterbehandelnden Arzt festlegen.</p>
                    </section>
                    <section class="dispo-card dispo-gelb">
                        <header class="dispo-head"><span class="dispo-dot" aria-hidden="true"></span><h3>GELB &ndash; Stationäre Aufnahme (Normalstation / ZNA-Station)</h3></header>
                        <p class="dispo-sub">Regelpfad Fachabteilung</p>
                        <ul class="dispo-contacts">
                        <li class="dispo-contact"><span class="dispo-fach">Unfallchirurgie (UCH)</span><span class="dispo-tel">4835 / 4610</span></li>
                        <li class="dispo-contact"><span class="dispo-fach">Plastische Chirurgie (PCH)</span><span class="dispo-tel">4956</span></li>
                        </ul>
                        <p class="dispo-spec">Wundversorgung &rarr; PCH; Begleitverletzungen &rarr; UCH; Hochvoltunfall immer stationär.</p>
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
        sources: `Waldmann V et al. Electrical cardiac injuries. Eur Heart J 2018.<br>
        Waldmann V et al. Electrical injury. BMJ 2017.<br>
        ERC Guidelines 2015. Section 4. Cardiac arrest in special circumstances.<br>
        S2k-Leitlinie „Behandlung thermischer Verletzungen des Erwachsenen“ (August 2018).<br>
        Burke M et al. Electric fences and accidental death. Forensic Sci Med Pathol. 2017.`
    });
})();