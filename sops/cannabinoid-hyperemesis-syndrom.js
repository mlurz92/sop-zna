(function() {
    'use strict';
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "cannabinoid-hyperemesis-syndrom",
        title: "Cannabinoid-Hyperemesis-Syndrom",
        category: "Sonstige",
        catKey: "sonst",
        sections: [
            {
                title: "Definition",
                content: "<strong>Cannabinoid-Hyperemesis-Syndrom (CHS):</strong> Mit chronischem Cannabiskonsum assoziiertes Krankheitsbild, das durch wiederkehrende Episoden von starker Übelkeit, massivem Erbrechen und abdominellen Schmerzen gekennzeichnet ist."
            },
            {
                title: "Ursachen",
                content: "<ul><li>Langjähriger Cannabiskonsum (in der Regel mindestens wöchentlicher, häufig täglicher THC-Konsum > 1 Jahr)</li></ul>"
            },
            {
                title: "Symptome",
                content: "<ul><li>Zyklisch auftretende starke Übelkeit mit massivem Erbrechen, diffuse abdominelle Schmerzen</li><li>Beschwerdebesserung durch heißes, teils stundenlanges Duschen/Baden (bei meist fehlendem Ansprechen auf übliche Antiemetika)</li><li>Komplikationen: Exsikkose, prärenale Nierenschädigung, Störungen des Elektrolyt-/Säure-Basen-Haushalts, Hypoglykämie</li></ul><div class=\"callout callout-hinweis\"><p>Die Episoden dauern in der Regel 24-48 h (max. 7-10 d) und treten ≥ 3x/Jahr auf</p></div>"
            },
            {
                title: "Diagnostik",
                content: "<ul><li>Initiales Vorgehen entsprechend der SOPs Erbrechen/abdominelle Schmerzen (zusätzlich THC-Anamnese + ggf. THC-Drogenscreening)</li></ul><div class=\"callout callout-wichtig\"><p>Ziel: Relevante Differentialdiagnosen ausschließen, Verdachtsdiagnose CHS stellen, Komplikationen erfassen!</p></div>"
            },
            {
                title: "Therapie",
                content: "<h3>Symptomatische Therapie</h3><ul><li>Ausgleich von Flüssigkeitsverlusten durch Vollelektrolytlösung i.v.</li><li>Antiemetische Therapie: 0,075 % Capsaicincreme auf Abdomen auftragen <span class=\"callout-cave\"><strong>(CAVE: Handschuhe!)</strong></span>, Haloperidol 2,5 - 5 mg i.m.</li><li>Analgetische Therapie: <strong>Keine Opioidgabe</strong> (verstärkt Übelkeit und Gastroparese, birgt Abhängigkeitspotential in diesem Patientenkollektiv!)</li><li>Behandlung von Komplikationen (s. SOP Hypokaliämie, s. SOP Hyponatriämie, s. SOP Akute Nierenschädigung, s. SOP Hypoglykämie)</li></ul><h3>Kausale Therapie</h3><ul><li>Cannabis-Abstinenz bzw. qualifizierter Cannabis-Entzug (bis zum vollständigen Sistieren des CHS kann es 6 Monate dauern)</li></ul>"
            },
            {
                title: "Merke",
                content: "<ul><li>Zyklisch auftretende Übelkeit und Erbrechen: an CHS denken und THC-Konsum aktiv erfragen!</li></ul>"
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
                        <p class="dispo-spec">Nach Sistieren des Erbrechens, oraler Toleranz und Beratung zur Cannabiskarenz.</p>
                        <p class="dispo-foot">Wiedervorstellung jederzeit bei Verschlechterung anbieten; Kontrollzeitpunkt durch den weiterbehandelnden Arzt festlegen.</p>
                    </section>
                    <section class="dispo-card dispo-gelb">
                        <header class="dispo-head"><span class="dispo-dot" aria-hidden="true"></span><h3>GELB &ndash; Stationäre Aufnahme (Normalstation / ZNA-Station)</h3></header>
                        <p class="dispo-sub">Regelpfad Fachabteilung</p>
                        <ul class="dispo-contacts">
                        <li class="dispo-contact"><span class="dispo-fach">ZNA-Station / Aufnahme- und Beobachtungsstation</span><span class="dispo-tel">4812</span><span class="dispo-note">nur nach RS mit Facharzt / OA ZNA</span></li>
                        </ul>
                        <p class="dispo-spec">Regelpfad: Aufnahme- und Beobachtungsstation ZNA.</p>
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
                        </ul>
                        <p class="dispo-foot">Anmeldung immer über den ITS-Koordinator (3008); Transport erst nach Stabilisierung und mit ärztlicher Begleitung.</p>
                    </section>
                </div>
                <p class="dispo-actions"><button type="button" class="dispo-dir-btn" data-dir-open><i class="fa-solid fa-address-book"></i> Vollständiges Telefonverzeichnis öffnen</button></p>`
            }
        ],
        date: "10/25",
        sources: "Eichhorn D et al. Cannabis-associated emergencies. Dtsch Arztebl Int 2025; 122: 467–71. – Rubio-Tapia A et al. AGA Clinical Practice Update on Diagnosis and Management of Cannabinoid Hyperemesis Syndrome: Commentary. Gastroenterology. 2024 May;166(5):930-934.e1. – Lapoint J et al. Cannabinoid Hyperemesis Syndrome: Public Health Implications and a Novel Model Treatment Guideline. West J Emerg Med. 2018 Mar;19(2):380-386."
    });
})();