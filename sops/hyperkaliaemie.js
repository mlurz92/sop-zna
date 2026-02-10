(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "hyperkaliaemie",
        title: "Hyperkaliämie",
        category: "Metabolisch",
        catKey: "metab",
        sections: [
            {
                title: "Definition",
                html: `<p><strong>Hyperkaliämie:</strong> Serum-Kalium ≥ 5,0 mmol/l, bzw. ≥ 5,5 mmol (ERC-Definition)</p>
                <ul>
                    <li><strong>Leichte Hyperkaliämie:</strong> 5,5 - 5,9 mmol/l</li>
                    <li><strong>Mittlere Hyperkaliämie:</strong> 6,0 - 6,4 mmol/l</li>
                    <li><strong>Schwere Hyperkaliämie:</strong> ≥ 6,5 mmol/l</li>
                </ul>`
            },
            {
                title: "Ursachen",
                html: `<ul>
                    <li><strong>Übermäßige Kalium-Zufuhr</strong></li>
                    <li><strong>Umverteilung</strong> (Insulinmangel, Azidose)</li>
                    <li><strong>Medikamente</strong> (RAAS-Hemmer, MRA, NSAR, etc.)</li>
                    <li><strong>Zelluntergang</strong> (Hämolyse, Rhabdomyolyse, Tumorlyse)</li>
                    <li><strong>Endokrine Störungen</strong> (Hypoaldosteronismus, Hypocortisolismus)</li>
                    <li><strong>Verminderte Kalium-Ausscheidung</strong> (Niereninsuffizienz)</li>
                </ul>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li><strong>Herzrhythmusstörungen:</strong> (Bradykardie, VT, Asystolie, PEA, Kammerflimmern)</li>
                    <li><strong>Neuromuskulär:</strong> Muskelschwäche, Parästhesien, Paresen</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur)</li>
                    <li>1x venöser Zugang</li>
                    <li><strong>Venöse BGA</strong> (Kalium? Azidose?)</li>
                    <li><strong>Labor:</strong> E'lyte, NW, ggf.: BB, Bilirubin, LDH, Haptoglobin, Retikulozyten, CK</li>
                    <li><strong>12-Kanal-EKG:</strong> Hohe T-Wellen? AV-Block I°? Verlust der P-Wellen? QRS-Komplex > 0,12 s? ST-Verschmelzungen? Sinuswelle? Bradykardie? VT?</li>
                    <li><strong>Anamnese:</strong> Symptome? Vorerkrankungen? Niereninsuffizienz? Medikamente?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Parästhesien? Paresen? Volumenstatus?</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p><strong>Cave:</strong> Zum Ausschluss einer Pseudohyperkaliämie immer schnelle Kontrolle mittels ungestauter venöser BGA!</p>
                </div>`
            },
            {
                title: "Therapie",
                html: `<p><strong>Ursachen beheben:</strong> Kaliumzufuhr reduzieren, Medikamente anpassen, Nierenfunktion verbessern, etc.</p>
                
                <h3>Leichte Hyperkaliämie (5,5 - 5,9 mmol/l)</h3>
                <ul>
                    <li>i.d.R. keine spezifische medikamentöse Therapie erforderlich, Ursachen beheben (s.o.)</li>
                </ul>

                <h3>Mittlere Hyperkaliämie (6,0 - 6,4 mmol/l)</h3>
                <ul>
                    <li><strong>Kardioprotektion (bei EKG-Veränderungen):</strong> 30 ml Calciumglukonat 10% (≙ 3 Ampullen) über 10 min langsam i.v., bei persistierenden EKG-Veränderungen erneute Gabe nach 5 Minuten erwägen.</li>
                    <li><strong>Kaliumverschiebung nach intrazellulär:</strong>
                        <ul>
                            <li>500 ml Glukose 10% + 10 IE Normalinsulin über ca. 30 min. i.v.</li>
                            <li>Salbutamol-Inhalation: 10-20 mg p.i.</li>
                            <li>Natriumbicarbonat 8,4% 50 ml als Bolus i.v. <em>nur</em> in der Reanimationssituation.</li>
                        </ul>
                    </li>
                    <li><strong>Elimination:</strong> Natrium-Zirkonium-Cyclosilikat (Lokelma®) 10 g 1-1-1 für bis zu 72 h oder Patiromer (Veltassa®) 8,4 g 1x/d.</li>
                </ul>

                <h3>Schwere Hyperkaliämie (≥ 6,5 mmol/l)</h3>
                <ul>
                    <li>s. mittlere Hyperkaliämie</li>
                    <li><strong>Dialyse erwägen:</strong> bei Anurie oder Versagen der medikamentösen Therapie (Rücksprache mit Nephrologen halten).</li>
                </ul>

                <h3>Sonstiges</h3>
                <ul>
                    <li>Bei Hypervolämie: Furosemid, z.B. 40-80 mg i.v.</li>
                    <li>Bei Hypovolämie: Volumensubstitution, z.B. 1-2 l Vollelektrolytlösung i.v.</li>
                </ul>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li><strong>Bei Insulin-Glukosegabe:</strong> Regelmäßige BZ-Kontrollen > 6 h (Gefahr der verzögerten Hypoglykämie).</li>
                    <li><strong>Kalziumgabe:</strong> Großlumiger, sicherer Zugang notwendig (Gefahr von Gewebenekrosen durch Paravasat).</li>
                    <li>Kalziumgabe ist auch bei bestehender Digitalis-Therapie möglich.</li>
                    <li><strong>Besonderheit:</strong> Bei Blutzucker > 360 mg/dl (ohne Zeichen einer DKA/HHS) Insulin ohne bzw. mit reduzierter Glukosegabe verabreichen.</li>
                </ul>`
            },
            {
                title: "Disposition",
                html: `<div class="callout callout-wichtig">
                    <p><strong>Überwachungsstation (IMC/ICU):</strong></p>
                    <ul>
                        <li>Kalium ≥ 6,0 mmol/l (akut)</li>
                        <li>Kalium ≥ 6,5 mmol/l (generell)</li>
                    </ul>
                </div>`
            }
        ],
        stand: "10/24",
        sources: `Alfonzo A et al. UKKA Clinical Practice Guideline. Management of Hyperkalaemia in Adults. October 2023.
        <br>Herold G et al. Innere Medizin 2019, S. 583 ff.
        <br>Lott C et al. ERC Guidelines 2021: Cardiac arrest in special circumstances. Resuscitation. 2021.
        <br>Sood MM et al. Emergency management and commonly encountered outpatient scenarios in patients with hyperkalemia. Mayo Clin Proc. 2007.
        <br>Palmer BF et al. Diagnosis and treatment of hyperkalemia. Cleve Clin J Med. 2017.
        <br>Harel Z et al. Optimal Dose and Method of Administration of Intravenous Insulin in the Management of Emergency Hyperkalemia. PLoS One. 2016.
        <br>Levine M et al. The effects of intravenous calcium in patients with digoxin toxicity. J Emerg Med. 2011.`
    });
})();