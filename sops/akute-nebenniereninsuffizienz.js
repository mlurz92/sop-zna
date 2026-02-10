// SOP: Akute Nebenniereninsuffizienz
// Kategorie: Metabolisch
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "akute-nebenniereninsuffizienz",
        title: "Akute Nebenniereninsuffizienz",
        category: "Metabolisch",
        catKey: "metab",
        sections: [
            {
                title: "Definition",
                html: `<ul>
                    <li><strong>Akute Nebenniereninsuffizienz (= Nebennierenkrise):</strong> Akute Verschlechterung des Gesundheitszustandes mit Hypotonie (systolischer Blutdruck < 100 mmHg oder ≥ 20 mmHg niedriger als normalerweise) und Symptomen, die innerhalb von 1-2 Stunden nach parenteraler Glukokortikoid-Gabe deutlich rückläufig sind.</li>
                </ul>`
            },
            {
                title: "Ursachen",
                html: `<h3>Primär (Nebenniere betroffen)</h3>
                <ul>
                    <li>Autoimmun (M. Addison), Hämorrhagie (z.B. bei Waterhouse-Friderichsen-Syndrom), Metastasen, nach Adrenalektomie, Infektion (TBC, etc.), genetisch, medikamentös (Etomidat, Fluconazol, etc.)</li>
                </ul>
                <h3>Sekundär (Hypophyse betroffen) und Tertiär (Hypothalamus betroffen)</h3>
                <ul>
                    <li>Tumoren, Operationen, Bestrahlung, Infektionen, Trauma, Autoimmunhypophysitis, Hypophyseninfarkt (z.B. Sheehan-Syndrom), genetisch, Glukokortikoidtherapie (≥ 5 mg Prednisolonäquivalent/d > 4 Wochen)</li>
                </ul>
                <h3>Triggerfaktoren</h3>
                <ul>
                    <li><strong>Abruptes Absetzen</strong> einer bestehenden Glukokortikoidtherapie</li>
                    <li><strong>Erhöhter Bedarf</strong> (z.B. bei Infektionen, Stress, körperlicher Arbeit, OP, Trauma, Schwangerschaft, Hyperthyreose, CYP3A4-induzierende Medikamente)</li>
                </ul>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li>Schwäche, Abgeschlagenheit, Inappetenz, Gewichtsverlust, Fieber</li>
                    <li>Übelkeit, Erbrechen, abdominelle Schmerzen (Pseudoperitonitis)</li>
                    <li>Exsikkose, orthostatische Dysregulation, prärenales Nierenversagen, Schock</li>
                    <li><strong>Krämpfe und Spasmen</strong> in Rücken und Beinen</li>
                    <li>Verwirrtheit, Delir, Vigilanzminderung, Koma</li>
                    <li><strong>Metabolische Störungen:</strong> Hyponatriämie, Hyperkaliämie, Hyperkalzämie, Hypoglykämie, AKI</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur) + RR-Messung im Liegen und Stehen</li>
                    <li>2x großlumiger venöser Zugang</li>
                    <li><strong>Labor:</strong> Diff-BB, CRP, E'lyte, NW, TSH, fT4, zeitgleiche Abnahme von Serum-Cortisol und Plasma-ACTH, ggf.: PCT, β-HCG</li>
                    <li><strong>Venöse BGA</strong> (Hyponatriämie? Hyperkaliämie? Hypoglykämie? pH? BE?)</li>
                    <li><strong>12-Kanal-EKG</strong> (Hyperkaliämietypische EKG-Veränderungen? Herzrhythmusstörungen? Ischämiezeichen?)</li>
                    <li><strong>Anamnese:</strong> Symptome? Vorerkrankungen? Medikamente? Glukokortikoide p.o., Spray, Creme, Injektion, abruptes Absetzen/Reduktion? Infekt? Stress?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Vigilanz? Delir? Rekap-Zeit? Exsikkose? Hyperpigmentierung oder alabasterfarbene Haut? Abdominelle Abwehrspannung?</li>
                    <li>ggf. Infektfokussuche (≥ 2x BK, Urinstatus/-kultur, POCUS, Röntgen-Thorax)</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p>Frühzeitige Rücksprache mit Überwachungsstation (IMC/ICU)!</p>
                </div>`
            },
            {
                title: "Therapie",
                html: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li>Triggerfaktoren beheben (z.B. Infektfokus behandeln)</li>
                </ul>
                <h3>Glukokortikoidsubstitution</h3>
                <ul>
                    <li><strong>100 mg Hydrocortison i.v./i.m.</strong> (sofort als Bolus), dann 200 mg Hydrocortison über 24 h via Perfusor i.v. oder 50 mg Hydrocortison alle 6 h i.v./i.m.</li>
                </ul>
                <h4>Bei Nicht-Verfügbarkeit:</h4>
                <ul>
                    <li><strong>25 mg Prednisolon i.v.</strong> (sofort als Bolus), dann 25 mg alle 8 h i.v. (= 75 mg/24h), dann 1x 50 mg/24h i.v. oder</li>
                    <li><strong>4 mg Dexamethason i.v.</strong> (sofort als Bolus), dann 1x 4 mg/24 h i.v.</li>
                </ul>
                <ul>
                    <li>Nach erfolgreicher Therapie der NNR-Krise (normalerweise nach 24 h): Umstellung der Glukokortikoide auf p.o.-Gabe mit dem 2-3-fachen der Erhaltungsdosis und Reduktion über 3 Tage auf Erhaltungsdosis</li>
                    <li>Erhaltungsdosis individuell unterschiedlich (ca. 15-25 mg Hydrocortison/d): bei Hydrocortison meist 2-3 Einzeldosen/d p.o., z.B. Hydrocortison 10-5-5 mg oder 15-5-0 mg; bei Prednisolon 1x/d 3 mg oder 5 mg morgens</li>
                    <li>Bei primärer NNR-Insuffizienz sobald Hydrocortison-Dosis < 50 mg/24h: 0,05-0,1 mg Fludrocortison 1-0-0 ergänzen</li>
                </ul>
                <h3>Flüssigkeitssubstitution</h3>
                <ul>
                    <li><strong>1000 ml 0,9 % NaCl in einer Stunde i.v.</strong></li>
                    <li>ca. <strong>3-6 l Vollelektrolytlösung</strong> in 24 h i.v.</li>
                    <li><strong>CAVE:</strong> An Volumenstatus, Komorbiditäten und kardiale Leistungsfähigkeit anpassen! Weitere Volumengabe in Abhängigkeit von Hämodynamik und Volumenstatus (Orientierung an Vitalparametern, Rekap-Zeit, Diurese, Laktat, POCUS, "Passive Leg Raise", etc.)</li>
                </ul>
                <h3>Sonstiges</h3>
                <ul>
                    <li><strong>Hypoglykämie:</strong> Blutzucker anheben (s. SOP Hypoglykämie)</li>
                </ul>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li>Bei akut kranken Patienten mit Exsikkose, Hypotonie, Bauchschmerzen, Elektrolytstörungen, Fieber stets auch an eine akute NNR-Krise denken ("Sepsis mimic")</li>
                    <li>Bei fehlendem Blutdruckanstieg oder ausbleibender Besserung der Beschwerden 1-2 Stunden nach Glukokortikoidgabe an andere Differentialdiagnosen (z.B. Sepsis) denken</li>
                    <li>Bei V.a. akute Nebenniereninsuffizienz: <strong>Sofortige Glukokortikoidgabe!</strong> (auch bei begleitendem Infekt/Sepsis!)</li>
                    <li>Die Glukokortikoidtherapie muss in Stresssituationen angepasst werden (s. "Sick day rules" S.3)</li>
                    <li>Nach NNR-Krise: endokrinologische Anbindung mit Schulung, Notfallausweis/Armband, Notfallset (Glukokortikoid, etc.)</li>
                </ul>`
            },
            {
                title: "\"Sick-Day-Rules\"",
                html: `<h3>Zur Prophylaxe einer akuten Nebenniereninsuffizienz</h3>
                <div class="callout callout-hinweis">
                    <p><strong>Sick Day Rule 1</strong><br>
                    Notwendigkeit der Verdopplung der oralen Glukokortikoiddosis bei Patienten mit chronischer Nebenniereninsuffizienz im Falle einer Erkrankung mit Fieber, Erforderlichkeit von Bettruhe oder Antibiotikaeinnahme.</p>
                </div>
                <div class="callout callout-hinweis">
                    <p><strong>Sick Day Rule 2</strong><br>
                    Notwendigkeit der prophylaktischen i.v./i.m.-Applikation eines Glukokortikoids (idem zur akuten NNR-Insuffizienz) bei Patienten mit chronischer Nebenniereninsuffizienz bei prolongiertem Erbrechen oder Durchfällen, vor Koloskopie, bei schwerer Erkrankung, Geburt, Trauma oder Operation in Allgemeinanästhesie.</p>
                </div>`
            },
            {
                title: "Äquivalenzdosen",
                html: `<h3>Äquivalenzdosen verschiedener Steroide</h3>
                <p><em>modifiziert nach Liu et al. 2017</em></p>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Substanz</th>
                                <th>Glukokortikoid-Potenz</th>
                                <th>Mineralokortikoid-Potenz</th>
                                <th>Äquivalenzdosen</th>
                                <th>Halbwertszeit in Stunden</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Cortisol (= Hydrocortison)</td>
                                <td>1</td>
                                <td>1</td>
                                <td>30</td>
                                <td>8 - 12</td>
                            </tr>
                            <tr>
                                <td>Cortison</td>
                                <td>0,8</td>
                                <td>0,8</td>
                                <td>37,5</td>
                                <td>8 - 12</td>
                            </tr>
                            <tr>
                                <td>Prednison</td>
                                <td>4</td>
                                <td>0,8</td>
                                <td>7,5</td>
                                <td>18 - 36</td>
                            </tr>
                            <tr>
                                <td>Prednisolon</td>
                                <td>4</td>
                                <td>0,8</td>
                                <td>7,5</td>
                                <td>12 - 36</td>
                            </tr>
                            <tr>
                                <td>Methylprednisolon</td>
                                <td>5</td>
                                <td>0,5</td>
                                <td>6</td>
                                <td>18 - 36</td>
                            </tr>
                            <tr>
                                <td>Dexamethason</td>
                                <td>30 - 40</td>
                                <td>0</td>
                                <td>1 - 0,75</td>
                                <td>36 - 54</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Disposition",
                html: `<ul>
                    <li><strong>Überwachungsstation (IMC/ICU)</strong></li>
                </ul>`
            }
        ],
        stand: "12/22",
        sources: `Rushworth RL et al. Adrenal Crisis. N Engl J Med. 2019.<br>Arlt W, Society for Endocrinology Clinical Committee. SOCIETY FOR ENDOCRINOLOGY ENDOCRINE EMERGENCY GUIDANCE: Emergency management of acute adrenal insufficiency (adrenal crisis) in adult patients. Endocrine Connect. 2016.<br>Simpson H et al. Guidance for the prevention and emergency management of adult patients with adrenal insufficiency. Clin Med (Lond). 2020.<br>Quinkler M et al. Adrenal cortical insufficiency—a life threatening illness with multiple etiologies. Dtsch Arztebl Int 2013.<br>Trummer C et al. Addison-Krise – Strategien zu Therapie und Prävention. J. Klin. Endokrinol. Stoffw. 2019.<br>Bornstein SR et al. Diagnosis and Treatment of Primary Adrenal Insufficiency: An Endocrine Society Clinical Practice Guideline. J Clin Endocrinol Metab. 2016.<br>Liu MM et al. Perioperative Steroid Management: Approaches Based on Current Evidence. Anesthesiology. 2017.`
    });
})();