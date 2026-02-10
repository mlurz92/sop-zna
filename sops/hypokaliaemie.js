(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "hypokaliaemie",
        title: "Hypokaliämie",
        category: "Metabolisch",
        catKey: "metab",
        sections: [
            {
                title: "Definition",
                html: `<p><strong>Hypokaliämie:</strong> Serum-Kalium &lt; 3,5 mmol/l</p>
                <ul>
                    <li><strong>Leichte Hypokaliämie:</strong> 3,4 - 3,0 mmol/l</li>
                    <li><strong>Mittlere Hypokaliämie:</strong> 2,9 - 2,5 mmol/l</li>
                    <li><strong>Schwere Hypokaliämie:</strong> &lt; 2,5 mmol/l</li>
                </ul>`
            },
            {
                title: "Ursachen",
                html: `<ul>
                    <li><strong>Mangelnde Kalium-Zufuhr:</strong> Malnutrition, Essstörung</li>
                    <li><strong>Umverteilung:</strong> Alkalose, Insulin, β2-Sympathomimetika, Magnesiummangel</li>
                    <li><strong>Medikamente:</strong> Diuretika, Glukokortikoide, etc.</li>
                    <li><strong>Endokrine Störungen:</strong> Hyperaldosteronismus, Hypercortisolismus</li>
                    <li><strong>Vermehrte Kaliumverluste:</strong> Diarrhoen, Erbrechen, Schwitzen, renal</li>
                </ul>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li><strong>Herzrhythmusstörungen:</strong> (VHF, VF)</li>
                    <li>Obstipation bis Ileus</li>
                    <li>Adynamie</li>
                    <li>Muskelschwäche, Paresen</li>
                    <li>Polyurie</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur)</li>
                    <li><strong>1x venöser Zugang</strong> <div class="callout callout-cave"><strong>CAVE:</strong> Sicherer Zugang! Kalium i.v. ist stark venenreizend.</div></li>
                    <li><strong>Venöse BGA:</strong> (Kalium? Alkalose?)</li>
                    <li><strong>Labor:</strong> E'lyte inkl. Magnesium, NW</li>
                    <li><strong>12-Kanal-EKG:</strong> Abgeflachte bis negative T-Wellen? Betonte U-Welle? TU-Verschmelzungswelle? ST-Streckensenkungen? Herzrhythmusstörungen?</li>
                    <li><strong>Anamnese:</strong> Symptome? Vorerkrankungen? Diuretika? Medikamente? Ernährung? Diarrhoen? Erbrechen?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Abgeschwächte Reflexe? Muskelschwäche? Herzrhythmusstörungen? Exsikkose?</li>
                </ul>`
            },
            {
                title: "Therapie",
                html: `<p><strong>Ursachen beheben:</strong> Diarrhoen behandeln, Diuretika anpassen, ausreichende orale Zufuhr (Bananen, Nüsse, etc.).</p>
                
                <h3>Leichte Hypokaliämie (3,4 - 3,0 mmol/l): Orale Substitution</h3>
                <ul>
                    <li><strong>Kalinor® Brausetabletten</strong> (1 Tabl. ≙ 40 mmol, Kaliumcitrat, Kaliumhydrogencarbonat): z.B. 1-1-0 (max. 4 x 1/d).</li>
                    <li><strong>Kalinor® retard P 600 mg Hartkapseln</strong> (1 Kapsel ≙ 8 mmol, Kaliumchlorid): z.B. 2-2-2 (max. 12/d).</li>
                </ul>

                <h3>Mittlere Hypokaliämie (2,9 - 2,5 mmol/l): Intravenöse Substitution</h3>
                <ul>
                    <li><strong>20 mmol KCl</strong> (≙ 1 Ampulle ≙ 20 ml 7,45% KCl) in 500 ml Vollelektrolytlösung über 1-2 h i.v. via Infusomat.</li>
                    <li><strong>40 mmol KCl</strong> (≙ 2 Ampullen ≙ 40 ml 7,45% KCl) in 1000 ml Vollelektrolytlösung über 2-4 h i.v. via Infusomat.</li>
                </ul>

                <h3>Schwere Hypokaliämie (&lt; 2,5 mmol/l): Intravenöse Substitution i.d.R. via ZVK</h3>
                <ul>
                    <li><strong>10-20 mmol KCl unverdünnt</strong> (≙ 1-2 Ampullen ≙ 20-40 ml 7,45% KCl) kontinuierlich pro Stunde via Perfusor über <strong>ZVK</strong>.</li>
                    <li><strong>Bei Periarrest:</strong> 20 mmol Kaliumchlorid (≙ 1 Ampulle ≙ 20 ml 7,45% KCl in 100 ml NaCl 0,9%) über 10 min i.v.</li>
                </ul>

                <h3>Bei Hypomagnesiämie</h3>
                <ul>
                    <li><strong>Magnesium Verla®</strong> 1-3 x/d p.o. (Brause ≙ 121 mg, Dragees ≙ 40 mg)</li>
                    <li><strong>oder 2 g Magnesium</strong> über 20 Minuten i.v. (≙ 4 ml 50% Mg-Sulfat in 50 ml NaCl 0,9%).</li>
                </ul>

                <h3>Sonstiges</h3>
                <ul>
                    <li>Kaliumsparendes Diuretikum (z.B. Spironolacton®) ergänzen, falls indiziert.</li>
                    <li>Bei Hyponatriämie führt eine Kaliumsubstitution auch zu einem Natriumanstieg.</li>
                </ul>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li>Bei normaler Nierenfunktion meist keine Gefahr der Überdosierung bei Kalium p.o. Gabe.</li>
                    <li>Gefahr der Überdosierung insbesondere bei i.v. Substitution und eingeschränkter Nierenfunktion bzw. RAAS-Blockade (Vorsicht und engmaschige Kontrollen!).</li>
                    <li><strong>Wahl des Präparats:</strong>
                        <ul>
                            <li>Bei <strong>metabolischer Alkalose</strong> bevorzugt Kaliumchlorid (Kalinor® retard P 600 mg Kapseln) geben.</li>
                            <li>Bei <strong>metabolischer Azidose</strong> bevorzugt Kaliumcitrat/-hydrogencarbonat (Kalinor Brause®) geben.</li>
                        </ul>
                    </li>
                    <li>Azidose führt zu Hyperkaliämie, Alkalose zu Hypokaliämie.</li>
                    <li><strong>pH-Abhängigkeit:</strong> Eine Änderung des pH-Wertes um 0,1 führt zu einer gegensinnigen Veränderung des Kaliums um ca. 0,5 mmol/l (normales Kalium bei Azidose ≙ Kaliummangel, normales Kalium bei Alkalose ≙ Kaliumüberschuss).</li>
                    <li>Bei Hypokaliämie liegt häufig auch eine Hypomagnesiämie vor; die Magnesiumsubstitution führt zu einem rascheren Kaliumanstieg.</li>
                    <li>Hypokaliämie führt zu verstärkter Digitalis-Wirkung bis hin zur Unverträglichkeit bzw. Intoxikation.</li>
                </ul>`
            },
            {
                title: "Disposition",
                html: `<ul>
                    <li><strong>Kalium &lt; 2,5 mmol/l:</strong> Überwachungsstation (IMC/ICU).</li>
                </ul>`
            }
        ],
        stand: "10/23",
        sources: `Herold G et al. Innere Medizin 2019, S. 581 ff.
        <br>Karow T. Allgemeine und spezielle Pharmakologie und Toxikologie 2018, S.466 ff.
        <br>Frimmel M. Klinische Notfälle griffbereit, 4. Auflage 2018; S. 99.
        <br>Gennari FJ. Hypokalemia. N Engl J Med. 1998.
        <br>Pepin J et al. Advances in diagnosis and management of hypokalemic and hyperkalemic emergencies. Emerg Med Pract. 2012.
        <br>Truhlář A et al. ERC Guidelines for Resuscitation 2015: Section 4. Cardiac arrest in special circumstances. Resuscitation, 95:148-201, 2015.
        <br>Fachinformationen der genannten Arzneimittel, Stand 12/22.`
    });
})();