// SOP: AECOPD
// Kategorie: Pneumologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "aecopd",
        title: "Akute Exazerbation der COPD",
        category: "Pneumologie",
        catKey: "pulmo",
        sections: [
            {
                title: "Definition",
                html: `<ul>
                    <li><strong>Akute Exazerbation der COPD (AECOPD):</strong> Ereignis, das durch verstärkte Dyspnoe und/oder Husten sowie Auswurf gekennzeichnet ist, sich innerhalb von < 14 Tagen verschlimmert, mit Tachypnoe und/oder Tachykardie einhergehen kann und häufig von einer verstärkten lokalen und systemischen Entzündung begleitet wird, die durch eine Infektion, Schadstoffbelastung oder eine andere Beeinträchtigung der Atemwege verursacht wird.</li>
                </ul>
                <h3>Schweregrade</h3>
                <ul>
                    <li><strong>Milde Exazerbation:</strong> Dyspnoe VAS < 5, AF < 24/min, HF < 95/min, SpO₂ ≥ 92 % (unter Raumluft oder mit gewöhnlichem Sauerstoffbedarf) und Änderung ≤ 3 %, CRP < 10 mg/l (wenn bestimmt)</li>
                    <li><strong>Moderate Exazerbation</strong> (≥ 3 Kriterien müssen zutreffen): Dyspnoe VAS ≥ 5, AF ≥ 24/min, HF ≥ 95/min, SpO₂ < 92 % (unter Raumluft oder mit gewöhnlichem Sauerstoffbedarf) und/oder Änderung > 3 % (wenn bekannt), CRP ≥ 10 mg/l</li>
                    <li><strong>Schwere Exazerbation:</strong> Dyspnoe, AF, HF, SaO₂ und CRP wie bei moderater Exazerbation; in arterieller BGA: neue oder verschlechternde <strong>Hyperkapnie</strong> (PaCO₂ > 45 mmHg) und <strong>respiratorische Azidose</strong> (pH < 7,35)</li>
                </ul>`
            },
            {
                title: "Ursachen",
                html: `<ul>
                    <li>Virale oder bakterielle Infektionen</li>
                    <li>Fehlende Medikamentenadhärenz</li>
                    <li>Ursache teilweise unklar (Umweltfaktoren wie Luftverschmutzung, meteorologische Effekte, etc.)</li>
                </ul>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li>Zunahme der Dyspnoe, Tachypnoe, Orthopnoe, Zyanose, Einsatz der Atemhilfsmuskulatur</li>
                    <li>Vermehrter Husten, Brustenge</li>
                    <li>Zeichen der bronchialen Obstruktion (Giemen, Brummen, Pfeifen, verlängertes Exspirium)</li>
                    <li>Zunahme des Sputumvolumens, ggf. Sputumpurulenz</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li><strong>Ersteindruck + ABCDE + Vitalparameter</strong> (RR, Puls, SpO₂, AF, Temperatur)</li>
                    <li><strong>1x venöser Zugang</strong></li>
                    <li><strong>Venöse, ggf. arterielle BGA</strong> (pH? pO₂? pCO₂? BE? Laktat?)</li>
                    <li><strong>Labor:</strong> Diff-BB, CRP, E'lyte, NW, ggf.: Bilirubin, Gerinnung, TSH, PCT, NT-proBNP, hs-Troponin, D-Dimere</li>
                    <li><strong>12-Kanal-EKG</strong> (Ischämiezeichen? Herzrhythmusstörungen?)</li>
                    <li><strong>Anamnese:</strong> Symptome? Fieber? Auswurf? Sputumfarbe? Medikamentenadhärenz? Vorerkrankungen? Heim-O₂/NIV? Vorangegangene Exazerbationen?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Vigilanz? Zyanose? Tachypnoe? Einsatz der Atemhilfsmuskulatur? Bronchospasmus? „Silent Lung“? Ödeme?</li>
                    <li><strong>Röntgen-Thorax</strong> (Pneumothorax? Infiltrate? Stauung? Ergüsse?)</li>
                    <li>ggf. <strong>POCUS</strong> (Pneumothorax? Infiltrate? Pulmonale B-Linien? Pleuraergüsse?)</li>
                    <li>ggf. <strong>CT-Thorax</strong> (Abszess? Empyem? Lungenarterienembolie?)</li>
                    <li>ggf. Sputumdiagnostik, ≥ 2 Paar Blutkulturen, Influenza-PCR, SARS-CoV-2-PCR, Legionellen-Antigen im Urin</li>
                    <li>ggf. Anlage eines arteriellen Zugangs</li>
                </ul>`
            },
            {
                title: "Therapie",
                html: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li>Stabilisierung der Vitalfunktionen gemäß ABCDE-Schema</li>
                    <li>Patienten beruhigen</li>
                    <li>Sitzende Position bzw. Oberkörperhochlagerung und atemerleichternde Maßnahmen (z.B. Lippenbremse)</li>
                    <li><strong>Kontrollierte O₂-Gabe</strong> bei Hypoxie, Ziel-SpO₂: 88–92 %</li>
                    <li><strong>NIV</strong> frühzeitig bei respiratorischer Azidose, schwerer Dyspnoe mit Einsatz der Atemhilfsmuskulatur bzw. Zeichen muskulärer Erschöpfung oder persistierender Hypoxämie trotz O₂-Gabe (s. NIV-Anleitung SOP Dyspnoe)</li>
                    <li>Intubation (als Ultima Ratio) bei respiratorischer Insuffizienz und Versagen nicht-invasiver Maßnahmen</li>
                </ul>
                <h3>Medikamentöse Therapie</h3>
                <ul>
                    <li><strong>Salbutamol</strong> (Sultanol® forte) - Inhalation: 2,5 mg (1x Fertiginhalat ≙ 2,5 ml), ggf. nach 20 Minuten wiederholen</li>
                    <li><strong>Ipratropiumbromid</strong> (Atrovent®) - Inhalation: 0,5 mg (2 x Fertiginhalat ≙ 4 ml), ggf. nach 30 Minuten wiederholen</li>
                    <li><strong>Prednisolon</strong> (Solu-Decortin®): 40 mg p.o. für 5 Tage (ggf. initial 50–100 mg i.v.)</li>
                </ul>
                <h3>ggf. Therapieeskalation</h3>
                <ul>
                    <li><strong>Reproterol</strong> (Bronchospasmin®): 0,09 mg (1 Ampulle) langsam i.v. (ggf. nach 10 Minuten wiederholen), ggf. kontinuierlich als Perfusor 0,018–0,09 mg/h (≙ 5 Ampullen Reproterol auf 50 ml, Laufrate 2–10 ml/h)</li>
                    <li><strong>Terbutalin</strong> (Bricanyl®): 0,25–0,5 mg (½–1 Ampulle) s.c. (max. alle 4 h, max. 4x/d)</li>
                    <li><strong>Morphin:</strong> 2 mg i.v. oder 5 mg s.c. bei Tachypnoe und Agitation</li>
                    <li><strong>Furosemid</strong> (Lasix®): 40 mg i.v. bei peripheren Ödemen</li>
                </ul>
                <h3>Antibiotische Therapie</h3>
                <ul>
                    <li><strong>Indikationen:</strong>
                        <ul>
                            <li>Vorliegen folgender <strong>drei Kardinalsymptome</strong>: Zunahme von Dyspnoe, Sputummenge, Sputumpurulenz</li>
                            <li>Zunahme der Sputumpurulenz + Zunahme von Dyspnoe oder Sputummenge</li>
                            <li>Notwendigkeit zur invasiven oder nicht-invasiven Beatmung</li>
                        </ul>
                    </li>
                    <li><strong>Therapiedauer:</strong> i.d.R. 5–7 Tage</li>
                    <li><strong>Wirkstoffe:</strong> z.B. <strong>Ampicillin/Sulbactam</strong> 3 g 1-1-1 i.v. oder Piperacillin/Tazobactam 4,5 g 1-1-1(-1) i.v. (bei Pseudomonasrisiko)</li>
                </ul>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li>Bei V.a. AECOPD immer Differentialdiagnosen bedenken (Herzinsuffizienz, LAE, ACS, Pneumonie, Pneumothorax, etc.)</li>
                    <li>Häusliche Dauertherapie (LAMAs, LABAs, etc.) in bisheriger Dosierung auch in der Exazerbation weiterführen</li>
                    <li>Titrierte O₂-Gabe und regelmäßige Blutgaskontrollen (nach 20 min) zur Vermeidung einer Hyperkapnie</li>
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
                        <p class="dispo-spec">Ambulante Weiterführung nur bei stabiler Oxygenierung und gesicherter pneumologischer Anbindung.</p>
                        <p class="dispo-foot">Wiedervorstellung jederzeit bei Verschlechterung anbieten; Kontrollzeitpunkt durch den weiterbehandelnden Arzt festlegen.</p>
                    </section>
                    <section class="dispo-card dispo-gelb">
                        <header class="dispo-head"><span class="dispo-dot" aria-hidden="true"></span><h3>GELB &ndash; Stationäre Aufnahme (Normalstation / ZNA-Station)</h3></header>
                        <p class="dispo-sub">Regelpfad Fachabteilung</p>
                        <ul class="dispo-contacts">
                        <li class="dispo-contact"><span class="dispo-fach">Pneumologie</span><span class="dispo-tel">4006 / 4933</span><span class="dispo-note">ITS Pneumologie (2.1): 4217</span></li>
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
                        <li class="dispo-contact"><span class="dispo-fach">ITS Pneumologie (2.1)</span><span class="dispo-tel">4217</span></li>
                        <li class="dispo-contact"><span class="dispo-fach">ITS-Koordinator</span><span class="dispo-tel">3008</span><span class="dispo-note">zentraler ITS-Aufnahmekontakt</span></li>
                        </ul>
                        <p class="dispo-foot">Anmeldung immer über den ITS-Koordinator (3008); Transport erst nach Stabilisierung und mit ärztlicher Begleitung.</p>
                    </section>
                </div>
                <p class="dispo-actions"><button type="button" class="dispo-dir-btn" data-dir-open><i class="fa-solid fa-address-book"></i> Vollständiges Telefonverzeichnis öffnen</button></p>`
            }
        ],
        stand: "10/23",
        sources: `Herold G et al. Innere Medizin 2019.<br>Vogelmeier C et al. Leitlinie... COPD. Pneumologie 2018.<br>GOLD Report 2023.<br>Klemmer A et al. COPD... Dtsch Med Wochenschr 2023.<br>S2k Leitlinie „Kalkulierte parenterale Initialtherapie bakterieller Erkrankungen bei Erwachsenen“. 2018.<br>Ko FW et al. Acute Exacerbation of COPD. Respirology 2016.<br>Abdo WF et al. Oxygen-induced hypercapnia in COPD. Critical Care 2012.`
    });
})();