(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "oesophageale-bolusimpaktion",
        title: "Ösophageale Bolusimpaktion",
        category: "Gastroenterologie",
        catKey: "gi",
        date: "12/22",
        sections: [
            {
                title: "Definition",
                content: "<strong>Ösophageale Bolusimpaktion:</strong> Steckenbleiben von Nahrung in der Speiseröhre mit (in-)kompletter Verlegung des Lumens."
            },
            {
                title: "Ursachen",
                content: `<ul>
                    <li>Fleischstücke, Fischgräten, Knochen, etc.</li>
                    <li><strong>Ösophageale Pathologie (>75%):</strong> Striktur, eosinophile Ösophagitis, Malignom, Motilitätsstörung.</li>
                </ul>`
            },
            {
                title: "Symptome",
                content: `<ul>
                    <li>Fremdkörpergefühl, Schluckbeschwerden, Brustschmerzen, Würgen, Erbrechen.</li>
                    <li><strong>Hypersalivation:</strong> Unfähigkeit, den eigenen Speichel zu schlucken.</li>
                    <li>Stridor, Dyspnoe (durch Aspiration von Speichel oder Kompression der Trachea).</li>
                    <li><strong>Ggf. Komplikationen:</strong> Perforation, Mediastinitis, Abszess, Fistelbildung, etc.</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                content: `<ul>
                    <li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur).</li>
                    <li>1x venöser Zugang.</li>
                    <li>Ggf. Labor (BB, Gerinnung).</li>
                    <li><strong>Anamnese:</strong> Symptome? Impaktionszeitpunkt? Beschaffenheit des Fremdkörpers? Vorerkrankungen der Speiseröhre? Unfähigkeit, Speichel zu schlucken?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Speichelfluss? Hautemphysem als Zeichen einer Ösophagusruptur? Stridor? Pulmonale Rasselgeräusche?</li>
                    <li><strong>„Schluckversuch“:</strong> Der Patient soll einen kleinen Schluck Wasser trinken. Falls das Schlucken unmöglich ist → dringender Verdacht auf komplette Verlegung des Ösophagus (Aspirationsgefahr!).</li>
                    <li>Ggf. <strong>Röntgen-Thorax</strong> bei Verdacht auf Aspiration.</li>
                    <li>Ggf. <strong>CT-Thorax</strong> bei Verdacht auf operationsbedürftige Komplikationen (z.B. Perforation).</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p>Sofortige Rücksprache mit der Gastroenterologie bei kompletter Okklusion oder spitzem/scharfkantigem Bolus!</p>
                </div>`
            },
            {
                title: "Therapie",
                content: `<h3>Endoskopische Fremdkörperentfernung</h3>
                <ul>
                    <li><strong>Sofort (&lt; 2 h bzw. &lt; max. 6 h):</strong> Bei kompletter Okklusion des Ösophagus oder spitzem/scharfkantigem Bolus.</li>
                    <li><strong>Dringlich (&lt; 24 h):</strong> Ösophagealer Bolus ohne komplette Okklusion des Ösophagus (und kein spitzer/scharfkantiger Bolus).</li>
                </ul>
                <h3>Chirurgische Intervention (selten!)</h3>
                <ul>
                    <li>Indiziert bei Komplikationen wie Perforation, Mediastinitis oder nach frustraner endoskopischer Therapie.</li>
                </ul>`
            },
            {
                title: "Merke",
                content: `<ul>
                    <li><strong>Hypersalivation</strong> und die Unfähigkeit, Flüssigkeiten zu schlucken, weisen auf eine komplette Okklusion des Ösophagus hin (hohe Aspirationsgefahr!).</li>
                    <li>Fremdkörpergefühl und Dysphagie können auch nach erfolgreichem Abgang oder Bergung des Fremdkörpers aufgrund von Schleimhautreizungen für mehrere Stunden persistieren.</li>
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
                        <p class="dispo-spec">Erst nach erfolgreicher Bolusentfernung und gesicherter oraler Toleranz.</p>
                        <p class="dispo-foot">Wiedervorstellung jederzeit bei Verschlechterung anbieten; Kontrollzeitpunkt durch den weiterbehandelnden Arzt festlegen.</p>
                    </section>
                    <section class="dispo-card dispo-gelb">
                        <header class="dispo-head"><span class="dispo-dot" aria-hidden="true"></span><h3>GELB &ndash; Stationäre Aufnahme (Normalstation / ZNA-Station)</h3></header>
                        <p class="dispo-sub">Regelpfad Fachabteilung</p>
                        <ul class="dispo-contacts">
                        <li class="dispo-contact"><span class="dispo-fach">Gastroenterologie</span><span class="dispo-tel">4006 / 4933</span><span class="dispo-note">Endoskopie: 2674 (tags) / 5663 (Dienst)</span></li>
                        </ul>
                        <p class="dispo-spec">Notfallendoskopie bei kompletter Obstruktion/Speichelverhalt.</p>
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
                </div>
                <p class="dispo-actions"><button type="button" class="dispo-dir-btn" data-dir-open><i class="fa-solid fa-address-book"></i> Vollständiges Telefonverzeichnis öffnen</button></p>`
            }
        ],
        stand: "12/22",
        sources: "Birk M et al. Removal of foreign bodies in the upper gastrointestinal tract in adults: European Society of Gastrointestinal Endoscopy (ESGE) Clinical Guideline. Endoscopy 2016 May;48(5):489-96. – Ambe P et al. Swallowed foreign bodies in adults. Dtsch Arztebl Int 2012; 109(50): 869-75."
    });
})();