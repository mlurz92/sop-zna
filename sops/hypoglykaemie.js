(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "hypoglykaemie",
        title: "Hypoglykämie",
        category: "Metabolisch",
        catKey: "metab",
        sections: [
            {
                title: "Definition",
                html: `<ul>
                    <li><strong>Asymptomatische Hypoglykämie:</strong> Blutzucker &lt; 70 mg/dl ohne Symptome</li>
                    <li><strong>Symptomatische Hypoglykämie:</strong> Blutzucker &lt; 70 mg/dl mit Symptomen</li>
                    <li><strong>Milde Hypoglykämie:</strong> Durch Patienten selbstständig durch Kohlenhydrateinnahme therapierbar</li>
                    <li><strong>Schwere Hypoglykämie:</strong> Patient ist bei der Therapie der Hypoglykämie auf Fremdhilfe angewiesen</li>
                </ul>
                <div class="callout callout-wichtig">
                    <strong>Diagnostische Kriterien (= Whipple Trias):</strong>
                    <ul>
                        <li>Hypoglykämische Symptome</li>
                        <li>Niedriger Blutzuckerwert</li>
                        <li>Verbesserung der Symptomatik bei Anhebung des Glukosespiegels</li>
                    </ul>
                </div>`
            },
            {
                title: "Ursachen",
                html: `<ul>
                    <li><strong>Überdosierung</strong> blutzuckersenkender Medikamente (z.B. Insulin, Sulfonylharnstoffe)</li>
                    <li>Zu geringe exogene <strong>Glukosezufuhr</strong> (z.B. Mahlzeit ausgelassen)</li>
                    <li>Erhöhter <strong>Glukoseverbrauch</strong> (z.B. durch Sport)</li>
                    <li>Erhöhte <strong>Insulinsensitivität</strong> (z.B. verbesserter Trainingszustand)</li>
                    <li>Erniedrigte endogene Glukoseproduktion (z.B. <strong>Alkoholexzess</strong>)</li>
                    <li><strong>Reaktive (postprandiale) Hypoglykämie</strong> (z.B. Magenentleerungsstörung, "Spät"-Dumping)</li>
                    <li><strong>Seltene Ursachen:</strong> Insulinom, Nebennierenrindeninsuffizienz, schwere Leber- oder Niereninsuffizienz, Sepsis</li>
                </ul>`
            },
            {
                title: "Symptome",
                html: `<h3>Symptome der autonomen Gegenregulation</h3>
                <ul>
                    <li><strong>Aktivierung des Parasympathikus:</strong> Heißhunger, Erbrechen, Übelkeit, Schwäche</li>
                    <li><strong>Aktivierung des Sympathikus:</strong> Schwitzen, Tachykardie, Tremor</li>
                </ul>
                <h3>Neuroglukopenische Symptome</h3>
                <ul>
                    <li>Unruhe, Verwirrtheit, Reizbarkeit, Aggressivität</li>
                    <li>Kopfschmerzen, fokale Zeichen (Paresen, Aphasie, Sehstörungen)</li>
                    <li><strong>Primitive Automatismen:</strong> Grimassieren, Pfeifen, Schmatzen</li>
                    <li>Krampfanfall, Somnolenz, Koma</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur)</li>
                    <li><strong>1x venöser Zugang</strong> <div class="callout callout-cave"><strong>CAVE:</strong> Sicherer Zugang! Nekrosegefahr bei Paravasat von hochprozentiger Glukose!</div></li>
                    <li><strong>Venöse BGA</strong> (Glukose? Elektrolyte?)</li>
                    <li>ggf. Labor (BB, CRP, E'lyte, NW)</li>
                    <li><strong>Anamnese:</strong> DM bekannt? Letzte Nahrungsaufnahme? Menge, Art und Zeitpunkt eingenommener Antidiabetika? Sonstige Medikamente (z.B. β-Blocker)? Alkoholkonsum? Grund für Missverhältnis (akzidentell, suizidal, kriminell)?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Vigilanz? Fokal-neurologisches Defizit? <strong>Insulinpumpe am Körper?</strong></li>
                    <li><strong>ggf. cCT:</strong> zur Differenzierung anderer Ursachen einer Bewusstseinsstörung bei fehlender Besserung der Symptomatik trotz Glukosegabe</li>
                </ul>`
            },
            {
                title: "Therapie",
                html: `<h3>Bei erhaltenem Bewusstsein</h3>
                <ul>
                    <li><strong>20-30 g Kohlenhydrate</strong>, bevorzugt Glukose p.o.
                        <ul>
                            <li>z.B. <strong>Jubin®</strong> (1 Tube ≙ 31 g Glukose/Saccharose)</li>
                            <li>oder 200 ml Fruchtsaft bzw. Süßgetränk (mit Zucker) p.o.</li>
                        </ul>
                    </li>
                    <li><strong>Nach 15 Minuten BZ-Kontrolle:</strong> Falls Blutzucker weiterhin niedrig (50-60 mg/dl) &rarr; Therapie wiederholen</li>
                </ul>
                <h3>Bei Bewusstlosigkeit</h3>
                <ul>
                    <li>Stabile Seitenlage bzw. Atemwege freihalten</li>
                    <li><strong>20 g Glukose i.v.</strong>
                        <ul>
                            <li>z.B. <strong>50 ml G40%</strong> (≙ 5 Ampullen) unter laufender Vollelektrolytlösung über Dreiwegehahn i.v.</li>
                            <li>oder 200 ml G10% i.v.</li>
                        </ul>
                    </li>
                    <li>Bei fehlender Wirkung: Therapie nach spätestens <strong>5 Minuten wiederholen</strong></li>
                    <li><strong>Bei fehlendem venösen Zugang:</strong> 1 mg Glukagon i.m./s.c. oder <strong>3 mg i.n.</strong> <div class="callout callout-cave"><strong>CAVE:</strong> Erbrechen und Aspirationsgefahr!</div></li>
                </ul>
                <h3>Nachbehandlung</h3>
                <ul>
                    <li>Nach erfolgreicher initialer Therapie (BZ > 80-100 mg/dl): Mahlzeit mit <strong>langsam resorbierbaren Kohlenhydraten</strong></li>
                    <li>Bei länger andauernder Ursache (z.B. Sulfonylharnstoff, langwirksames Insulin): Infusion von z.B. <strong>50-100 ml/h G10% i.v.</strong></li>
                </ul>
                <h3>Sonstige Maßnahmen</h3>
                <ul>
                    <li>Bei Patienten mit Malnutrition oder Alkoholabusus immer auch an zeitnahe <strong>Thiamingabe</strong> (z.B. 100 mg i.v.) denken</li>
                </ul>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li>Bei jeder unklaren Vigilanzminderung, Verwirrtheit oder V.a. Schlaganfall: <strong>Blutzucker messen!</strong></li>
                    <li>Durch häufige Hypoglykämien verringert sich die Hypoglykämie-Wahrnehmung.</li>
                    <li>Bei schlecht eingestelltem Diabetes mellitus kann es bereits bei höheren Blutzuckerwerten zu Hypoglykämien kommen.</li>
                    <li>Abklärung der Hypoglykämieursache (akzidentell, suizidal, kriminell) und Prävention (Anpassung der Insulindosis, Patientenschulung, etc.).</li>
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
                        <p class="dispo-spec">Nach Normalisierung, Mahlzeit und Ursachenklärung; nicht bei Sulfonylharnstoffen oder Verzögerungsinsulin.</p>
                        <p class="dispo-foot">Wiedervorstellung jederzeit bei Verschlechterung anbieten; Kontrollzeitpunkt durch den weiterbehandelnden Arzt festlegen.</p>
                    </section>
                    <section class="dispo-card dispo-gelb">
                        <header class="dispo-head"><span class="dispo-dot" aria-hidden="true"></span><h3>GELB &ndash; Stationäre Aufnahme (Normalstation / ZNA-Station)</h3></header>
                        <p class="dispo-sub">Regelpfad Fachabteilung</p>
                        <ul class="dispo-contacts">
                        <li class="dispo-contact"><span class="dispo-fach">Gastroenterologie</span><span class="dispo-tel">4006 / 4933</span><span class="dispo-note">Endoskopie: 2674 (tags) / 5663 (Dienst)</span></li>
                        <li class="dispo-contact"><span class="dispo-fach">Endokrinologie / Innere Medizin</span><span class="dispo-tel">4006 / 4933</span><span class="dispo-note">Diensthabender Internist (BVZ)</span></li>
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
                </div>
                <p class="dispo-actions"><button type="button" class="dispo-dir-btn" data-dir-open><i class="fa-solid fa-address-book"></i> Vollständiges Telefonverzeichnis öffnen</button></p>`
            }
        ],
        stand: "10/23",
        sources: `Herold G et al. Innere Medizin 2019, S. 748 ff.
        <br>Deutsche Diabetes Gesellschaft (DDG). S3-Leitlinie Therapie des Typ-1-Diabetes. Version 5.1, AWMF-Registernummer: 057-013.
        <br>Seaquist ER et al. Hypoglycemia and diabetes: a report of a workgroup of the American Diabetes Association and the Endocrine Society. Diabetes Care 2013; 36: 1384–1395.
        <br>Fleischmann et al. Klinische Notfallmedizin Band 1 Wissen. Urban & Fischer 2020, S. 94.
        <br>Donnino MW et al. Myths and misconceptions of Wernicke's encephalopathy. Ann Emerg Med. 2007 Dec;50(6):715-21.`
    });
})();