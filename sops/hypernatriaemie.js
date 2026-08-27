(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "hypernatriaemie",
        title: "Hypernatriämie",
        category: "Metabolisch",
        catKey: "metab",
        sections: [
            {
                title: "Definition",
                content: `<ul>
                    <li><strong>Hypernatriämie:</strong> Serum-Natrium > 145 mmol/l</li>
                    <li><strong>Schwere Hypernatriämie:</strong> > 160 mmol/l</li>
                </ul>
                <div class="callout callout-hinweis">
                    <p><strong>Zeitliche Einteilung:</strong></p>
                    <ul>
                        <li><strong>Akute Hypernatriämie:</strong> < 48 h (laborchemisch dokumentiert bzw. Hinweise auf akutes Geschehen)</li>
                        <li><strong>Chronische Hypernatriämie:</strong> ≥ 48 h (bzw. Dauer unklar)</li>
                    </ul>
                </div>`
            },
            {
                title: "Ursachen",
                content: `<ul>
                    <li><strong>Mangelnde Wasserzufuhr:</strong> Demenzerkrankte, fehlender Zugang zu Wasser, Unfähigkeit zur Aufnahme (Dysphagie, Intubation).</li>
                    <li><strong>Vermehrte NaCl-Zufuhr:</strong> Meerwasser getrunken, iatrogen (NaBic, NaCl-haltige Trägerlösungen, hyperton. Ernährungslösungen).</li>
                    <li><strong>Endokrin:</strong> Hypercortisolismus, Hyperaldosteronismus.</li>
                    <li><strong>Vermehrte Wasserverluste:</strong>
                        <ul>
                            <li><strong>Extrarenal:</strong> Diarrhoen, Erbrechen, Fieber, Schwitzen, Verbrennungen.</li>
                            <li><strong>Renal:</strong> Diuretika, Diabetes insipidus (zentral/nephrogen), osmotische Diurese (Glucose, Mannitol).</li>
                        </ul>
                    </li>
                </ul>`
            },
            {
                title: "Symptome",
                content: `<ul>
                    <li>Lethargie, Verwirrtheit</li>
                    <li>Muskelschwäche / -krämpfe</li>
                    <li>Rhabdomyolyse</li>
                    <li>Krampfanfälle</li>
                    <li>Koma</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                content: `<ul>
                    <li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur)</li>
                    <li>1x venöser Zugang</li>
                    <li><strong>Venöse BGA:</strong> (Natrium? Glukose?)</li>
                    <li><strong>Labor:</strong> BB, CRP, E'lyte, NW, Serumosmolalität.</li>
                    <li><strong>Anamnese:</strong> Symptome? Medikamente? Vorerkrankungen? Trinkmenge? Flüssigkeitsverluste? Polyurie?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Volumenstatus? Neurologische Auffälligkeiten?</li>
                    <li><strong>Urinuntersuchung:</strong> Urinosmolalität (essentiell für Algorithmus).</li>
                    <li><strong>POCUS:</strong> VCI? Ventrikelfüllung? Pleuraergüsse? Vermehrte pulmonale B-Linien?</li>
                    <li><strong>ggf. cCT:</strong> zum Ausschluss einer anderen Ursache bei Vigilanzminderung.</li>
                </ul>`
            },
            {
                title: "Therapie",
                content: `<p><strong>Ursachen beheben:</strong> Ausreichende orale Flüssigkeitszufuhr, Diuretika anpassen, Grunderkrankung behandeln, etc.</p>
                
                <h3>Therapie in Abhängigkeit vom Volumenstatus:</h3>
                <ul>
                    <li><strong>Bei Hypovolämie:</strong> initial <strong>Vollelektrolytlösung</strong> (zur Kreislaufstabilisierung), dann Halbelektrolytlösung oder Glukose 5% i.v.</li>
                    <li><strong>Bei Euvolämie:</strong> Glukose 5% i.v. (zum Ausgleich des freien Wasser-Defizits).</li>
                    <li><strong>Bei Hypervolemie:</strong> Glukose 5% + Furosemid i.v. + ggf. Thiazid p.o., ggf. Dialyse bei AKI (Rücksprache mit Nephrologie halten!).</li>
                </ul>

                <h3>Sonstiges & Berechnung:</h3>
                <ul>
                    <li>Berechnung des freien Wasserdefizits z.B. mittels <strong>"Free Water Deficit in Hypernatremia"-Formel</strong> (s. MDCalc).</li>
                    <li><strong>24 h-Natrium-Zielwert:</strong> liegt 10 mmol unter aktuellem Natrium (z.B. Na⁺: 165 mmol/l, Ziel-Na⁺: 155 mmol/l; entspricht ca. 1,5–3 l G 5% in 24h).</li>
                    <li>Zusätzlich müssen Grundumsatz und weitere Flüssigkeitsverluste mit Vollelektrolytlösung ausgeglichen werden.</li>
                    <li><strong>Engmaschige Kontrollen</strong> des Natriums und der übrigen Elektrolyte (Kalium sinkt bei Gabe von G 5% durch Dilution ebenfalls).</li>
                </ul>

                <div class="callout callout-cave">
                    <p><strong>Wichtig:</strong> Bei <strong>chronischer Hypernatriämie</strong> langsamer Ausgleich (max. 12 mmol/24h)! Bei <strong>akuter Hypernatriämie</strong> ist ein rascher Ausgleich vermutlich sicher.</p>
                </div>`
            },
            {
                title: "Diagnostischer Algorithmus",
                content: `<p>Basierend auf der <strong>Urinosmolalität:</strong></p>
                <ul>
                    <li><strong>≤ 800 mOsm/kg &rarr; Renale Wasserverluste</strong>
                        <ul>
                            <li>z.B. Diabetes insipidus</li>
                        </ul>
                    </li>
                    <li><strong>≥ 800 mOsm/kg &rarr; Extrarenale Wasserverluste / Ungenügende Zufuhr</strong>
                        <ul>
                            <li><strong>Extrarenal:</strong> Diarrhoe, Erbrechen, Schwitzen, Perspiratio insensibilis, Verbrennungen.</li>
                            <li><strong>Ungenügende Zufuhr:</strong> Vermindertes Durstempfinden (Alter, Demenz, Psych.), fehlender Zugang zu Wasser (Pflegebedürftigkeit, "Alleine in der Wildnis"), Unfähigkeit zur Aufnahme (Intubation, Dysphagie).</li>
                        </ul>
                    </li>
                    <li><strong>≥ 1000 mOsm/kg &rarr; Osmotische Diurese / Übermäßige Salzzufuhr</strong>
                        <ul>
                            <li><strong>Osmotische Diurese:</strong> Mannitol, Glukose.</li>
                            <li><strong>Übermäßige Salzzufuhr (iatrogen):</strong> NaBic, NaCl-haltige Träger, Hyperton. Ernährung, Antibiotika.</li>
                            <li><strong>Übermäßige Salzzufuhr (selbst):</strong> Suizidversuch, Wettkampf, Trinken von Meerwasser ("Schiffbrüchiger").</li>
                        </ul>
                    </li>
                </ul>`
            },
            {
                title: "Merke",
                content: `<ul>
                    <li><strong>Gefahr des Hirnödems:</strong> Bei zu schnellem Ausgleich (insbesondere Kinder, junge Erwachsene).</li>
                    <li>Bei akuter Hypernatriämie: zu geringer Natriumabfall bzw. weiterer steigender Anstieg vermutlich schädlicher als zu rascher Abfall (> 12 mmol/24 h) aufgrund der Gefahr des <strong>osmotischen Demyelinisierungssyndroms</strong>.</li>
                    <li>Urinosmolalität < Serumosmolalität &rarr; V.a. renale Genese.</li>
                    <li>Hypernatriämie ist häufig die <strong>Endstrecke</strong> bei schweren kognitiven Erkrankungen / Dysphagie &rarr; Therapieziele definieren.</li>
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
                        <p class="dispo-spec">Nur bei leichter Hypernatriämie mit sicherer oraler Flüssigkeitsaufnahme.</p>
                        <p class="dispo-foot">Wiedervorstellung jederzeit bei Verschlechterung anbieten; Kontrollzeitpunkt durch den weiterbehandelnden Arzt festlegen.</p>
                    </section>
                    <section class="dispo-card dispo-gelb">
                        <header class="dispo-head"><span class="dispo-dot" aria-hidden="true"></span><h3>GELB &ndash; Stationäre Aufnahme (Normalstation / ZNA-Station)</h3></header>
                        <p class="dispo-sub">Regelpfad Fachabteilung</p>
                        <ul class="dispo-contacts">
                        <li class="dispo-contact"><span class="dispo-fach">Nephrologie</span><span class="dispo-tel">4006 / 4933</span><span class="dispo-note">Dialysearzt: 4494</span></li>
                        </ul>
                        <p class="dispo-spec">Korrekturgeschwindigkeit &le; 10 mmol/l/24 h auf Station vorgeben.</p>
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
        stand: "12/22",
        sources: `Herold G et al. Innere Medizin 2019, S. 581.
        <br>Muhsin SA et al. Diagnosis and treatment of hypernatremia. Best Pract Res Clin Endocrinol Metab. 2016.
        <br>Bataille S et al. Undercorrection of hypernatremia is frequent and associated with mortality. BMC Nephrol. 2014.
        <br>Chauhan K et al. Rate of Correction of Hypernatremia and Health Outcomes in Critically Ill Patients. Clin J Am Soc Nephrol. 2019.
        <br>Lindner G et al. Hypernatremia in critically ill patients. J Crit Care. 2013.
        <br>Bihari S et al. Addition of indapamide to frusemide increases natriuresis and creatinine clearance, but not diuresis, in fluid overloaded ICU patients. J Crit Care. 2016.
        <br>Maggs FG. The management of patients presenting with hypernatraemia: is aggressive management appropriate? Clin Med (Lond). 2014.
        <br>Sterns R. Evidence for Managing Hypernatremia Is It Just Hyponatremia in Reverse? Clin J Am Soc Nephrol 14: 645–647, 2019.`
    });
})();