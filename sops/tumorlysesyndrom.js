(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "tumorlysesyndrom",
        title: "Tumorlysesyndrom",
        category: "Hämatologie",
        catKey: "haem",
        date: "10/24",
        sections: [
            {
                title: "Definition",
                html: `<p><strong>Tumorlysesyndrom (TLS):</strong> Spontaner oder Chemotherapie-induzierter massiver Tumorzellzerfall, der zur Freisetzung intrazellulärer Elektrolyte und Nukleinsäuren mit konsekutiver Hyperkaliämie, Hyperphosphatämie, Hypokalzämie, Hyperurikämie und potentiell lebensbedrohlichen Folgen führt.</p>
                <h3>Klassifikation (nach Cairo-Bishop 2004)</h3>
                <p><strong>Laborchemisches TLS:</strong> &ge; 2 der folgenden Veränderungen bei maligner Erkrankung bzw. unter Therapie (innerhalb von 3-7 Tagen):</p>
                <ul>
                    <li>Harnsäure &ge; 8 mg/dl oder 25 % Zunahme vom Ausgangswert</li>
                    <li>Kalium &ge; 6 mmol/l oder 25 % Zunahme vom Ausgangswert</li>
                    <li>Phosphat &ge; 1,45 mmol/l oder 25 % Zunahme vom Ausgangswert</li>
                    <li>Kalzium &le; 1,75 mmol/l oder 25 % Abnahme vom Ausgangswert</li>
                </ul>
                <p><strong>Klinisches TLS:</strong> Laborchemisches TLS + &ge; 1 der folgenden Symptome:</p>
                <ul>
                    <li>Kreatinin &ge; 1,5 x des oberen Referenzbereichs</li>
                    <li>Herzrhythmusstörungen</li>
                    <li>Krampfanfall</li>
                    <li>Plötzlicher Tod</li>
                </ul>`
            },
            {
                title: "Ursachen",
                html: `<ul>
                    <li><strong>Tumorzerfall:</strong> Meist unter Therapie (Strahlen-/Chemotherapie), seltener spontan bei hoher Proliferationsrate.</li>
                    <li><strong>Risikofaktoren:</strong>
                        <ul>
                            <li>Hohe Tumorlast (LDH-Erhöhung).</li>
                            <li>Tumore mit hoher Proliferationsrate (z.B. Burkitt-Lymphom, ALL, AML).</li>
                            <li>Eingeschränkte Nierenfunktion.</li>
                            <li>Volumenmangel / Exsikkose.</li>
                            <li>Höheres Alter.</li>
                            <li>Hämatologische Neoplasien.</li>
                        </ul>
                    </li>
                </ul>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li><strong>ZNS:</strong> Lethargie, Koma, Krampfanfall.</li>
                    <li><strong>Kardial:</strong> Herzrhythmusstörungen, QTc-Zeit Verlängerung.</li>
                    <li><strong>Gastrointestinal:</strong> Übelkeit, Erbrechen, Diarrhoe.</li>
                    <li><strong>Renal:</strong> Akute Nierenschädigung (Oligurie/Anurie).</li>
                    <li><strong>Neuromuskulär:</strong> Parästhesien, Muskelkrämpfe.</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li><strong>Ersteindruck + ABCDE + Vitalparameter:</strong> RR, Puls, SpO₂, AF, Temperatur.</li>
                    <li><strong>1-2x großlumiger venöser Zugang.</strong></li>
                    <li><strong>Venöse BGA:</strong> pH? BE? Kalium? Kalzium?</li>
                    <li><strong>Labor:</strong> Diff-BB, CRP, E'lyte inkl. Kalzium und Phosphat, NW (Kreatinin, Harnstoff), LDH, Albumin, Harnsäure.</li>
                    <li><strong>12-Kanal-EKG:</strong> Herzrhythmusstörungen? Hyperkaliämietypische EKG-Veränderungen? QTc-Zeit-Verlängerung?</li>
                    <li><strong>Anamnese:</strong> Vorerkrankungen? Medikamente? Welche Chemotherapie-Substanzen? Welcher Zyklus?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Volumenstatus? Hyperreflexie? <strong>Chvostek-Zeichen? Trousseau-Zeichen?</strong> Parästhesien?</li>
                    <li><strong>DK-Anlage:</strong> Für Urinmonitoring und Bilanzierung.</li>
                    <li><strong>Urinstatus / Urinsediment:</strong> Abgrenzung anderer Genesen einer akuten Nierenschädigung (Uratkristalle).</li>
                    <li><strong>POCUS:</strong> Volumenstatus? Ausschluss postrenale Genese bei akuter Nierenschädigung? Kardiale Leistungsfähigkeit?</li>
                    <li><strong>Ggf. weitere Diagnostik:</strong> z.B. cCT bei Krampfanfall.</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p>Frühzeitige Rücksprache mit Hämato-/Onkologie, Nephrologie und Überwachungsstation (IMC/ICU)!</p>
                </div>`
            },
            {
                title: "Therapie",
                html: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li>Stabilisierung der Vitalfunktionen gemäß ABCDE-Schema.</li>
                    <li><strong>Engmaschige Laborkontrollen:</strong> (mind. alle 4-6 Stunden) E'lyte (inkl. Phosphat und Kalzium), NW, Harnsäure, LDH.</li>
                </ul>
                <h3>Hydrierung</h3>
                <ul>
                    <li><strong>Vollelektrolytlösung i.v.:</strong> 2-3 l/m² KOF/24 h (≙ meist 4-6 l/24 h).</li>
                    <li><span class="callout-cave"><strong>CAVE:</strong> An Volumenstatus, Komorbiditäten und kardiale Leistungsfähigkeit anpassen!</span></li>
                    <li>Nur bei drohender Volumenüberladung: zusätzlich Schleifendiuretika (z.B. Furosemid 20 mg i.v. 1-1-1).</li>
                    <li><strong>Ziel:</strong> adäquate Diurese von 80-100 ml/m² KOF/h (≙ meist 150-200 ml/h).</li>
                </ul>
                <h3>Behandlung von Komplikationen</h3>
                <ul>
                    <li><strong>Hyperurikämie:</strong> Rasburicase 0,2 mg/kg KG als Kurzinfusion über 30 min i.v. für 3-7 Tage (abhängig von Therapieansprechen).
                        <br><strong>Kontraindikation:</strong> Glukose-6-Phosphat-Dehydrogenase-Mangel (G6PD).</li>
                    <li><strong>Elektrolytstörungen:</strong>
                        <ul>
                            <li>Hyperkaliämie: s. SOP Hyperkaliämie.</li>
                            <li>Hypokalzämie: s. SOP Hypokalzämie. <span class="callout-cave">CAVE: Kalziumsubstitution nur bei symptomatischer Hypokalzämie und nur zur Symptomkontrolle!</span></li>
                            <li>Hyperphosphatämie: ggf. orale Phosphatbinder.</li>
                        </ul>
                    </li>
                    <li><strong>Akute Nierenschädigung:</strong> s. SOP Akute Nierenschädigung.</li>
                </ul>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li>Das Tumorlysesyndrom ist ein hämato-/onkologischer Notfall!</li>
                    <li>Tritt meist ca. 12-72 h nach Therapiebeginn auf, präventive Maßnahmen (Hydrierung) sind essentiell.</li>
                    <li>Es besteht die Gefahr lebensbedrohlicher Herzrhythmusstörungen und einer akuten Nierenschädigung mit Dialyseindikation.</li>
                    <li><strong>Keine Evidenz für Harnalkalisierung</strong> beim Tumorlysesyndrom.</li>
                    <li><strong>Kalziumsubstitution:</strong> Nur bei symptomatischer Hypokalzämie, da Kalzium mit Phosphat ausfällt (Kalzium-Phosphat-Produkt ↑) -> vermehrte Kristalle und Verschlechterung der Nierenschädigung.</li>
                </ul>`
            },
            {
                title: "Disposition",
                html: `<ul>
                    <li><strong>Überwachungsstation (IMC/ICU).</strong></li>
                </ul>`
            }
        ],
        stand: "10/24",
        sources: `Perissinotti AJ et al. Expert consensus guidelines for the prophylaxis and management of tumor lysis syndrome in the United States: Results of a modified Delphi panel. Cancer Treat Rev. 2023 Nov.<br>
        Jones GL et al. Guidelines for the management of tumour lysis syndrome in adults and children with haematological malignancies. Br J Haematol. 2015.<br>
        Wacker D et al. Managing patients with oncologic complications in the emergency department. Emerg Med Pract. 2018 Jan.`
    });
})();