(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "myxoedemkoma",
        title: "Myxödemkoma",
        category: "Metabolisch",
        catKey: "metab",
        date: "12/22",
        sections: [
            {
                title: "Definition",
                content: `<p><strong>Myxödemkoma:</strong> Seltene, lebensbedrohliche Komplikation einer schweren Hypothyreose.</p>
                <div class="callout callout-wichtig">
                    <strong>Diagnosekriterien (beide müssen zutreffen):</strong>
                    <ul>
                        <li><strong>Labor:</strong> manifeste Hypothyreose</li>
                        <li><strong>Klinische Symptomatik:</strong> u.a. veränderte Bewusstseinslage, Hypothermie, Bradykardie, Hypotension</li>
                    </ul>
                </div>`
            },
            {
                title: "Ursachen",
                content: `<ul>
                    <li><strong>Hypothyreose:</strong> meist primär (Hashimoto-Thyreoiditis, nach Thyreoidektomie, Jodmangel, medikamenteninduziert); selten sekundär bzw. tertiär.</li>
                </ul>
                <h3>Triggerfaktoren bei bestehender Hypothyreose:</h3>
                <ul>
                    <li>Unzureichende Schilddrüsenhormonsubstitution (fehlende Therapieadhärenz, gestörte gastrointestinale Resorption, etc.).</li>
                    <li>Infektionen.</li>
                    <li>Kälteexposition.</li>
                    <li>Chirurgische Eingriffe.</li>
                    <li><strong>Medikamente:</strong> Sedativa, Narkotika, Opiate, Amiodaron, Lithium, etc.</li>
                    <li><strong>Schwere Akuterkrankungen:</strong> Infarkt, Trauma, GI-Blutung, etc.</li>
                </ul>`
            },
            {
                title: "Symptome",
                content: `<ul>
                    <li>Lethargie, Delir, Vigilanzminderung bis Koma.</li>
                    <li>Hypothermie.</li>
                    <li>Bradypnoe, Hypoventilation (Hypoxie und Hyperkapnie).</li>
                    <li>Bradykardie, AV-Blockierungen, QTc-Zeit-Verlängerung, Niedervoltage (im EKG).</li>
                    <li>Hypotonie, Schock ("Low-Output").</li>
                    <li>Perikarderguss, Pleuraergüsse.</li>
                    <li>Obstipation, paralytischer Ileus, Harnverhalt.</li>
                    <li><strong>Myxödem:</strong> trockene, kühle, ödematöse, teigige Haut; aufgedunsenes Gesicht, Makroglossie, heisere Stimme.</li>
                    <li><strong>Metabolische Störungen:</strong> Hypoglykämie, Hyponatriämie.</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                content: `<ul>
                    <li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur).</li>
                    <li>1x venöser Zugang.</li>
                    <li><strong>Venöse bzw. arterielle BGA:</strong> pH? pO₂? pCO₂? Natrium? Glukose? Laktat?.</li>
                    <li><strong>12-Kanal-EKG:</strong> Sinusbradykardie? AV-Block? QTc-Zeit? Niedervoltage?.</li>
                    <li><strong>Labor:</strong> BB, CRP, E'lyte, NW, TSH, fT3, fT4, <strong>Cortisol</strong>. Ggf.: PCT, NT-proBNP, hs-Troponin, CK, LDH, Gerinnung.</li>
                    <li><strong>Anamnese:</strong> Symptome? Kälteintoleranz? Obstipation? Lethargie? Vorerkrankungen/OP? Hypothyreose bekannt? Substitution? Adhärenz? Infekt?.</li>
                    <li><strong>Körperliche Untersuchung:</strong> Vigilanz? Rekap-Zeit? Struma? Thyreoidektomienarbe? Myxödem? Infektion? Sonstige Akuterkrankung?.</li>
                    <li><strong>POCUS:</strong> Volumenstatus (VCI)? Ventrikelfüllung? Pleuraergüsse? Pulmonale B-Linien? Perikarderguss? Paralytischer Ileus? Harnverhalt?.</li>
                    <li><strong>Bildgebung:</strong> Ggf. cCT (Ausschluss intrakranielle Akutpathologie bei schwerer Vigilanzminderung).</li>
                    <li><strong>Infektfokussuche:</strong> ≥ 2x BK, Urinstatus/-kultur, POCUS, Röntgen-Thorax.</li>
                </ul>
                <div class="callout callout-hinweis">
                    <p>Frühzeitige Rücksprache mit Überwachungsstation (IMC/ICU)!</p>
                </div>`
            },
            {
                title: "Therapie",
                content: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li>Triggerfaktoren beheben (z.B. Infektfokus behandeln, auslösende Akuterkrankung behandeln).</li>
                </ul>
                <h3>Glukokortikoidsubstitution</h3>
                <div class="callout callout-cave">
                    <p>Immer vor oder gleichzeitig mit der Schilddrüsenhormonsubstitution beginnen!</p>
                </div>
                <ul>
                    <li><strong>100 mg Hydrocortison i.v./i.m.</strong> (sofort als Bolus), dann 200 mg/24 h i.v./i.m. (s. SOP Akute Nebenniereninsuffizienz).</li>
                </ul>
                <h3>Schilddrüsenhormonsubstitution</h3>
                <ul>
                    <li><strong>L-Thyroxin (T4):</strong> 200-400 µg i.v. (sofort als Bolus).
                        <ul>
                            <li>Ab dem Folgetag: 1,2 µg/kg KG/d i.v. bzw. 1,6 µg/kg KG/d p.o.</li>
                        </ul>
                    </li>
                    <li><strong>Triiodthyronin (T3):</strong> Ggf. zusätzlich erwägen: 5-20 µg i.v. (sofort als Bolus), dann 2,5-10 µg i.v. alle 8 h (bis klinische Besserung).</li>
                </ul>
                <h3>Sonstiges</h3>
                <ul>
                    <li><strong>Atmung:</strong> Hypoxie bzw. akute Hyperkapnie: NIV, ggf. Intubation. <span class="callout-cave">CAVE: schwieriger Atemweg zu erwarten!</span></li>
                    <li><strong>Kreislauf:</strong> Hypotonie/Schock: Volumen- / Katecholamintherapie.</li>
                    <li><strong>Temperatur:</strong> Hypothermie: Patienten langsam <strong>passiv</strong> aufwärmen (warmer Raum, Decken).</li>
                    <li><strong>Stoffwechsel:</strong> 
                        <ul>
                            <li>Hypoglykämie: Blutzucker anheben (s. SOP Hypoglykämie).</li>
                            <li>Hyponatriämie: i.d.R. Ausgleich durch Schilddrüsenhormonsubstitution, ggf. NaCl-Bolus erwägen (s. SOP Hyponatriämie).</li>
                        </ul>
                    </li>
                </ul>`
            },
            {
                title: "Merke",
                content: `<ul>
                    <li>Der Begriff "Myxödemkoma" ist irreführend, da weder ein Myxödem noch ein manifestes Koma vorliegen müssen. Besser wäre es, das Krankheitsbild generell eine "dekompensierte Hypothyreose" zu nennen.</li>
                    <li>Die Höhe des TSH-Wertes ist <strong>kein akkurater Indikator</strong> für die Schwere einer dekompensierten Hypothyreose.</li>
                    <li>Bereits bei Verdacht auf eine dekompensierte Hypothyreose sollte eine sofortige Glukokortikoid- und L-Thyroxin-Gabe erfolgen (noch vor Erhalt der Laborergebnisse).</li>
                    <li>Bei leichten, älteren, kardial vorerkrankten Patienten oder Patienten mit Herzrhythmusstörungen sollte bei der initialen Bolusgabe eine tendenziell niedrigere Schilddrüsenhormondosis (z.B. 200 statt 400 µg L-Thyroxin) gewählt werden.</li>
                    <li>Die Gabe von Triiodthyronin (T3) wird kontrovers diskutiert (Wirkantritt ca. 2-3 h vs. 8-14 h bei L-Thyroxin; jedoch höheres Risiko für kardiale Arrhythmien).</li>
                    <li>Nach Schilddrüsenhormonsubstitution: Initial Kontrolle von TSH, fT3, fT4 alle 1-2 d mit ggf. Erhöhung der Substitution bei fehlendem Trend zur Normalisierung oder Reduktion bei hohem fT3-Wert.</li>
                    <li>In der langfristigen Therapie zeigen der TSH- und fT4-Wert ca. 6 Wochen nach Dosisanpassung einen "Steady State".</li>
                    <li>Hydrocortisongabe so lange, bis eine begleitende Nebenniereninsuffizienz ausgeschlossen wurde (endokrinologische Rücksprache).</li>
                </ul>`
            },
            {
                title: "Disposition",
                content: `<ul>
                    <li><strong>Überwachungsstation (IMC/ICU).</strong></li>
                </ul>`
            }
        ],
        stand: "12/22",
        sources: `Jonklaas J et al. Guidelines for the treatment of hypothyroidism: prepared by the american thyroid association task force on thyroid hormone replacement. Thyroid. 2014 Dec;24(12):1670-751.
        – Elkattawy et al. Myxedema Coma: Case Report and Literature Review. Cureus. 2021 May 27;13(5):e15277.
        – Acharya R et al. Myxedema Coma: A Forgotten Medical Emergency With a Precipitous Onset. Cureus. 2020 Sep 16;12(9):e10478.
        – Mathew V et al. Myxedema coma: a new look into an old crisis. J Thyroid Res. 2011;2011:493462.
        – Spitzweg C et al. Schilddrüsennotfälle. Internist 58, 1011–1019 (2017).
        – Ylli D et al. Thyroid emergencies. Pol Arch Intern Med. 2019 Aug 29;129(7-8):526-534.
        – Bridwell RE et al. Decompensated hypothyroidism: A review for the emergency clinician. Am J Emerg Med. 2021 Jan;39:207-212.`
    });
})();