(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "schock",
        title: "Schock",
        category: "Leitsymptom",
        catKey: "leit",
        date: "10/25",
        sections: [
            {
                title: "Definition",
                content: "<strong>Schock:</strong> Akutes zirkulatorisches Versagen, das zu einem Missverhältnis von Sauerstoffangebot und Sauerstoffbedarf führt."
            },
            {
                title: "Ursachen",
                content: `<ul>
                    <li><strong>Hypovolämie:</strong> reduzierte Flüssigkeitsaufnahme oder -verluste (gastrointestinal, renal, Verbrennungen), Blutverlust (Trauma, GI-Blutung, etc.).</li>
                    <li><strong>Kardial:</strong> myokardiales Pumpversagen, rhythmogen, dekompensierte Klappenvitien, mechanische Komplikationen.</li>
                    <li><strong>Distributiv:</strong> Sepsis, Anaphylaxie, neurogen, SIRS (z.B. bei Pankreatitis), exogen durch vasodilatatorische Medikamente.</li>
                    <li><strong>Obstruktiv:</strong> Lungenarterienembolie, Perikardtamponade, Spannungspneumothorax, Beatmung mit hohem PEEP, Vena-cava-Kompressionssyndrom, etc.</li>
                </ul>`
            },
            {
                title: "Symptome",
                content: `<ul>
                    <li><strong>Hypotonie:</strong> bzw. Blutdruckabfall (bei Patienten mit vorbestehender Hypertonie kann der Blutdruck normwertig erscheinen!).</li>
                    <li><strong>Tachykardie:</strong> kann bei Einnahme von Betablockern fehlen.</li>
                    <li><strong>Tachypnoe:</strong> häufig Kompensationsversuch bei metabolischer Azidose / Hyperlaktatämie.</li>
                    <li><strong>Kalte, feuchte, marmorierte Haut:</strong> verlängerte Rekap-Zeit (Ausnahme: bei distributivem Schock initial oft warme Extremitäten).</li>
                    <li><strong>Vigilanzminderung:</strong> Verwirrtheit, Delir.</li>
                    <li><strong>Oligurie, Anurie.</strong></li>
                    <li>Hyperlaktatämie, metabolische Azidose.</li>
                    <li><strong>Symptome der Ursache:</strong> z.B. Blutungsstigmata, Urtikaria, akutes Abdomen.</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                content: `<ul>
                    <li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur).</li>
                    <li><strong>2x großlumiger venöser Zugang.</strong></li>
                    <li><strong>Venöse bzw. arterielle BGA:</strong> (Hb? pH? BE? pO₂? pCO₂? Laktat? Glukose?).</li>
                    <li><strong>Labor:</strong> BB, CRP, E'lyte, NW, Gerinnung, GOT, GPT, LDH, Bilirubin, AP, γ-GT, TSH. Ggf.: β-HCG, hs-Troponin, PCT.</li>
                    <li>Ggf. ≥ 2 Paar Blutkulturen (bei V.a. Sepsis).</li>
                    <li>Ggf. Kreuzblut abnehmen und <strong>Blutprodukte anfordern</strong> (bei V.a. Hämorrhagie).</li>
                    <li><strong>12-Kanal-EKG:</strong> Ischämiezeichen? Herzrhythmusstörungen? Niedervoltage? Lagetyp?.</li>
                    <li><strong>DK-Anlage</strong> (Urinmonitoring / Bilanzierung) + Urinstatus/-kultur (bei V.a. Urosepsis).</li>
                    <li><strong>(Fremd)-Anamnese:</strong> Vorereignis (Infektion, Trauma, Blutung, Allergen)? Vorerkrankungen? Medikation?.</li>
                    <li><strong>Körperliche Untersuchung:</strong> Vigilanz? Rekap-Zeit? Mottling? Infektfokus? Exsikkose? Blutungsstigmata? Traumazeichen? Halsvenenstauung? Urtikaria?.</li>
                    <li><strong>POCUS gemäß RUSH-Protokoll</strong> (siehe entsprechende Sektion).</li>
                    <li>Ggf. weiterführende Diagnostik (CT-Angiografie bei V.a. retroperitoneale Blutung, etc.).</li>
                    <li>Ggf. bereits in der Notaufnahme: Etablierung eines <strong>erweiterten hämodynamischen Monitorings</strong> (arterieller Zugang, ZVK, etc.).</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p>Frühzeitige Rücksprache mit ICU!</p>
                </div>`
            },
            {
                title: "Therapie - Allgemein & Noradrenalin",
                content: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li>Stabilisierung der Vitalfunktionen gemäß ABCDE-Schema.</li>
                    <li><strong>Schocklagerung:</strong> Oberkörper flach mit angehobenen Beinen. <span class="callout-cave">CAVE: bei kardiogenem Schock individuelle Lagerung!</span></li>
                    <li>Bedarfsgerechte Volumen- +/- Katecholamintherapie.</li>
                    <li><strong>Vollelektrolytlösung rasch i.v.:</strong> <br>CAVE: An Volumenstatus, Komorbiditäten und kardiale Leistungsfähigkeit anpassen! Weitere Gabe nach Klinik (POCUS, Passive Leg Raise).</li>
                </ul>
                <h3>Noradrenalin (Arterenol®) - Vasopressor der 1. Wahl</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Applikationsform</th>
                                <th>Dosierung / Herstellung</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Push Dose Pressor</strong></td>
                                <td>10 µg repetitiv i.v. (Herstellung: 1 mg Noradrenalin auf 100 ml NaCl 0,9% verdünnt, davon jeweils 1 ml Boli).</td>
                            </tr>
                            <tr>
                                <td><strong>Perfusor peripher</strong></td>
                                <td>1 mg (1 kl. Ampulle) auf 50 ml NaCl 0,9% (0,02 mg/ml). <strong>Start: 20 ml/h.</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Perfusor zentral (ZVK)</strong></td>
                                <td>10 mg (1 gr. Ampulle) auf 50 ml NaCl 0,9% (0,2 mg/ml). <strong>Start: 2 ml/h.</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p><strong>Zielparameter:</strong> Kreislaufstabilisierung (MAD ≥ 65 mmHg), Normalisierung des Laktatwerts und der Rekap-Zeit.</p>`
            },
            {
                title: "Therapie - Kausale Therapie",
                content: `<h3>Hypovolämischer Schock</h3>
                <ul>
                    <li><strong>Volumenmangelschock:</strong> Flüssigkeitsverluste stoppen und ersetzen.</li>
                    <li><strong>Hämorrhagischer Schock:</strong> Blutung stoppen, Gabe von Blutprodukten (EK, TK, FFP), Gerinnungsfaktoren, Tranexamsäure (nicht bei GI-Blutung).</li>
                    <li><strong>Permissive Hypotonie:</strong> MAD ~ 65 mmHg bzw. RRsys ~ 80 mmHg anstreben bis Blutung gestoppt (<span class="callout-cave">NICHT bei SHT oder Schwangerschaft</span>).</li>
                </ul>
                <h3>Kardiogener Schock</h3>
                <ul>
                    <li><strong>Pumpversagen:</strong> Revaskularisation (PCI) bei Myokardinfarkt, ggf. Inotropika (s. SOP Akute Herzinsuffizienz).</li>
                    <li><strong>Arrhythmie:</strong> Kardioversion bei tachykarden, Pacing bei bradykarden HRST.</li>
                    <li><strong>Mechanisch:</strong> chirurgische/interventionelle Therapie bei Klappenvitien.</li>
                </ul>
                <h3>Distributiver Schock</h3>
                <ul>
                    <li><strong>Septischer Schock:</strong> Schnellstmögliche Antibiotikatherapie (&lt; 1 h), Fokussanierung (s. SOP Sepsis).</li>
                    <li><strong>Anaphylaktischer Schock:</strong> Allergenzufuhr stoppen, Adrenalin i.m., H1-Blocker, Steroide (s. SOP Anaphylaxie).</li>
                    <li><strong>Neurogener Schock:</strong> Ursache beseitigen.</li>
                </ul>
                <h3>Obstruktiver Schock</h3>
                <ul>
                    <li><strong>Lungenarterienembolie:</strong> Systemische Lyse (s. SOP Lungenarterienembolie).</li>
                    <li><strong>Perikardtamponade:</strong> Perikardiozentese.</li>
                    <li><strong>Spannungspneumothorax:</strong> Entlastungspunktion, Anlage einer Thoraxdrainage.</li>
                </ul>`
            },
            {
                title: "Rapid Ultrasound in Shock (RUSH)-Protokoll",
                content: `<div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Bereich</th>
                                <th>Einstellung</th>
                                <th>Fragestellungen</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>"PUMP"</strong></td>
                                <td>Parasternal l/k Achse, Apikal, Subxiphoidal</td>
                                <td>Perikarderguss / Tamponade? LV-Funktion (normal, hyperdynam, eingeschränkt)? RV-Dilatation? Paradoxe Septumbewegung? D-Sign?</td>
                            </tr>
                            <tr>
                                <td><strong>"TANK"</strong></td>
                                <td>Subxiphoidal (VCI), E-FAST, Thorax apikal frontal</td>
                                <td>VCI weit/atemstarr oder schmal/kollaptisch? Freie Flüssigkeit abdominell/pleural? B-Linien? Lungenpunkt (Pneumothorax)?</td>
                            </tr>
                            <tr>
                                <td><strong>"PIPES"</strong></td>
                                <td>Aorta epigastrisch/supraumbilikal, Suprasternal, 2-Punkt-Kompression (Beinvenen)</td>
                                <td>Aorta &gt; 3 cm? Aortenwurzel &gt; 3,8 cm? Dissektionsmembran? Thorakale Aorta &gt; 5 cm? Beinvenenthrombose (Komprimierbarkeit)?</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="callout callout-hinweis">
                    <p>Das RUSH-Protokoll muss nicht immer vollständig durchgeführt werden, sondern sollte an den klinischen Kontext angepasst werden.</p>
                </div>`
            },
            {
                title: "Merke",
                content: `<ul>
                    <li>Kardinalsymptome des Schocks: Vigilanzstörung, marmorierte Haut, Oligurie/Anurie.</li>
                    <li>Gleichzeitiges Vorliegen mehrerer Schockformen möglich (z.B. hämorrhagisch und obstruktiv bei Trauma).</li>
                    <li>Ein positiver <strong>Schockindex (HF/RRsys &gt; 1)</strong> ist ein wichtiges Warnsignal, aber nicht sensitiv für alle Schockformen.</li>
                    <li>Schock kann auch bei <strong>Normotension</strong> und erhöhtem kardialen Output vorliegen.</li>
                    <li>Der septische Schock ist mit ca. 60 % die häufigste Schockform &rarr; bei geringstem Verdacht: <strong>sofortige Antibiotikagabe!</strong></li>
                </ul>`
            },
            {
                title: "Disposition",
                content: "<ul><li><strong>ICU (Intensivstation)</strong></li></ul>"
            }
        ],
        stand: "10/25",
        sources: `Standl T et al. The nomenclature, definition and distinction of types of shock. Dtsch Arztebl Int 2018. 
        – Seif D et al. Bedside ultrasound in resuscitation and the rapid ultrasound in shock protocol. Crit Care Res Pract. 2012. 
        – Gidwani H et al. The crashing patient: hemodynamic collapse. Curr Opin Crit Care. 2017. 
        – Kislitsina ON et al. Shock - Classification and Pathophysiological Principles of Therapeutics. Curr Cardiol Rev. 2019. 
        – Vincent JL et al. Circulatory shock N Engl J Med. 2013.`
    });
})();