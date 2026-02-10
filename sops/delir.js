(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "delir",
        title: "Delir",
        category: "Neurologie",
        catKey: "neuro",
        sections: [
            {
                title: "Definition",
                content: `<p><strong>Delir:</strong> Reversible Störung der cerebralen Funktion. Diese ist charakterisiert durch einen akuten Beginn und fluktuierenden Verlauf von Symptomen einer Aufmerksamkeitsstörung und einer Änderung der vorbestehenden kognitiven Funktion. Ein Delir ist häufig die direkte Folge eines medizinischen Krankheitsfaktors (Akuterkrankung, Substanzeinwirkung/-entzug, etc.).</p>`
            },
            {
                title: "Ursachen",
                content: `<h3>Prädisponierende Faktoren</h3>
                <ul>
                    <li>Höheres Lebensalter, Demenz, Frailty, Malnutrition</li>
                    <li>Seh- und Hörstörung, Multimorbidität, Alkoholabusus, etc.</li>
                </ul>
                <h3>Triggerfaktoren</h3>
                <ul>
                    <li><strong>Delirogene Medikamente:</strong> Anticholinergika, Antihistaminika, Benzodiazepine, Opiate, Fluorchinolone, Glukokortikoide, Parkinson-Medikamente, etc.</li>
                    <li><strong>Schmerzen:</strong> unzureichend behandelt</li>
                    <li><strong>Verhalte:</strong> Harnverhalt, Stuhlverstopfung</li>
                    <li><strong>Exsikkose:</strong> Dehydration</li>
                    <li><strong>Infektionen:</strong> Sepsis, Pneumonie, HWI</li>
                    <li><strong>Metabolische Störungen:</strong> Elektrolytstörungen, Hypoglykämie, Hypoxie, Hyperthermie, Urämie, Leber-/Schilddrüsenfunktionsstörungen, etc.</li>
                    <li><strong>Drogen- oder Substanzentzug:</strong> Alkohol, Benzodiazepine, etc.</li>
                    <li><strong>ZNS-Pathologie:</strong> Subduralhämatom, Schlaganfall, Enzephalitis, etc.</li>
                    <li><strong>Operation, Trauma, schwere Akuterkrankung:</strong> z.B. akuter Myokardinfarkt</li>
                    <li><strong>Umgebungsfaktoren:</strong> ungewohntes Umfeld, fremde Menschen, Lärm, Kälte, piepsende Geräte, "Verkabelung", Störung des Tag-Nacht-Rhythmus, etc.</li>
                </ul>`
            },
            {
                title: "Symptome",
                content: `<ul>
                    <li><strong>Hyperaktives Delir:</strong> gesteigerte motorische Unruhe, Rastlosigkeit, ungeduldiges, ggf. aggressives Verhalten</li>
                    <li><strong>Hypoaktives Delir:</strong> motorische und kognitive Verlangsamung, reduzierte Aktivität, Antriebslosigkeit bis Apathie (wird oft übersehen!)</li>
                    <li><strong>Delir vom Mischtyp:</strong> hyperaktive und hypoaktive Anteile im Wechsel</li>
                    <li>ggf. <strong>psychotisches Erleben</strong> mit Halluzinationen, häufig Aggravation der Verwirrtheit gegen Abend ("Sundowning")</li>
                    <li>ggf. <strong>vegetative Begleitsymptome</strong> (v.a. bei Substanzentzug): Tachykardie, Hypertonie, Tremor, Schlaflosigkeit, Übelkeit, Übelkeit</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                content: `<ul>
                    <li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur)</li>
                    <li><strong>1x venöser Zugang</strong> (sicher fixieren)</li>
                    <li><strong>Venöse BGA:</strong> pH? pCO₂? BE? Hb? E'lyte? Glukose? Laktat?</li>
                    <li><strong>Labor:</strong> Diff-BB, CRP, E'lyte, NW, Gerinnung, Bilirubin, GOT, GPT, AP, γ-GT, CK, TSH, <strong>Ammoniak</strong></li>
                    <li><strong>12-Kanal-EKG:</strong> Herzrhythmusstörungen? Ischämiezeichen? QTc-Zeit?</li>
                    <li><strong>(Fremd-)Anamnese:</strong> Symptombeginn? Ist Patient verwirrter als sonst? Fluktuierender Verlauf? (Kopf-)Schmerzen? Vorerkrankungen? Demenz? Psychiatrische Erkrankungen? Medikamente? Alkohol-/Drogenabusus? Hinweise auf Entzug? Häusliche Situation? Pflegegrad? Vorheriger kognitiver Status?</li>
                    <li><strong>Standardisiertes Delir-Screening:</strong> (s. Diagnostischer Algorithmus)</li>
                    <li><strong>Körperliche Untersuchung:</strong> Fokal-neurologisches Defizit? Meningismus? Exsikkose? Infekt? Harnverhalt? Hinweise auf Trauma?</li>
                    <li>ggf. <strong>POCUS:</strong> akuter Harnverhalt?</li>
                    <li>ggf. <strong>Infektfokussuche:</strong> 2x BK, Röntgen-Thorax, Urinstatus, Abdomensonografie, etc.</li>
                    <li>ggf. <strong>cCT:</strong> bei neuem fokal-neurologischem Defizit, Trauma, gerinnungshemmender Therapie, bei onkologischen und immunsupprimierten Patienten</li>
                    <li>ggf. <strong>CT-Angiographie</strong> der Kopf-/Halsgefäße (bei V.a. Basilaristhrombose)</li>
                    <li>ggf. <strong>Liquorpunktion:</strong> bei Meningismus oder klinischen Hinweisen auf Meningitis/Enzephalitis</li>
                    <li>ggf. <strong>EEG:</strong> z.A. eines nicht konvulsiven Status epilepticus bei hypoaktivem Delir</li>
                    <li>ggf. <strong>Drogenscreening (Urin) bzw. Toxikologie:</strong> Lithium, Digitalis, Alkohol, etc.</li>
                    <li><strong>Einzelfälle:</strong> Antikörperdiagnostik (limbi. Enzephalitis), endokrin. Diagnostik (Hashimoto Enzephalopathie? Vitamin B1/B12?)</li>
                </ul>`
            },
            {
                title: "Diagnostischer Algorithmus",
                content: `<p><em>Modifiziert nach Grossmann et al. 2014 und Nickel et al. 2020</em></p>
                <div class="callout callout-hinweis">
                    <p>Zielgruppe: Jeder Patient &ge; 65 Jahre</p>
                </div>
                <h3>Stufe 1: Aufmerksamkeit (Monate-Rückwärtszähl-Test)</h3>
                <ul>
                    <li>Patient soll Monate rückwärts nennen (Dez, Nov, Okt...).</li>
                    <li><strong>Punkte:</strong> Pro ausgelassenem Monat: 1 Punkt; Benötigt der Patient &gt; 30 Sekunden: +1 Punkt.</li>
                    <li>&ge; 3 Punkte &rarr; Aufmerksamkeitsstörung vorhanden &rarr; Stufe 2.</li>
                </ul>
                <h3>Stufe 2: Kognition & Verlauf</h3>
                <ul>
                    <li><strong>MSQ (Mental Status Questionnaire):</strong>
                        <ol>
                            <li>Wie heißt das Krankenhaus?</li>
                            <li>Wo liegt es (ungefähre Adresse)?</li>
                            <li>Welchen Tag haben wir heute (+/- 1 Tag)?</li>
                            <li>Welchen Monat haben wir?</li>
                            <li>Welches Jahr haben wir?</li>
                            <li>Wie alt sind Sie?</li>
                            <li>In welchem Monat sind Sie geboren?</li>
                            <li>In welchem Jahr sind Sie geboren?</li>
                            <li>Wie heißt der aktuelle Bundeskanzler?</li>
                            <li>Wie hieß ein ehemaliger Bundeskanzler?</li>
                        </ol>
                        &lt; 8 richtige Antworten &rarr; <strong>Akute kognitive Störung</strong>
                    </li>
                    <li><strong>Verlauf (Fremdanamnese):</strong> Akute Veränderung? Fluktuierender Verlauf?</li>
                </ul>
                <h3>Stufe 3: Logisches Denken (4 Fragen)</h3>
                <ul>
                    <li>Schwimmt ein Stein auf dem Wasser?</li>
                    <li>Gibt es Fische im Meer?</li>
                    <li>Wiegt ein Kilo Äpfel mehr als zwei Kilo?</li>
                    <li>Kann man mit einem Hammer Nägel in die Wand schlagen?</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p><strong>Ergebnis:</strong> Aufmerksamkeitsstörung <strong>und</strong> akute kognitive Störung <strong>und</strong> formale Denkstörung <strong>oder</strong> Bewusstseinsstörung &rarr; <strong>DELIR</strong></p>
                </div>`
            },
            {
                title: "Therapie",
                content: `<h3>1. Ursachen beheben</h3>
                <ul>
                    <li>Delirogene Medikamente absetzen bzw. Polypharmazie meiden (PRISCUS-/FORTA-Liste).</li>
                    <li>Sufficiente Analgesie bei Schmerzen.</li>
                    <li>DK-Anlage nur bei akutem Harnverhalt (ansonsten vermeiden).</li>
                    <li>Abführende Maßnahmen bei Obstipation.</li>
                    <li>Flüssigkeitsgabe bei Exsikkose.</li>
                    <li>Niederschwellige Behandlung eines Infekts.</li>
                    <li>Herstellen einer metabolischen Homöostase (E'lyte, BZ, O₂).</li>
                    <li>Umgebungsfaktoren verbessern (Überwachungsmonitor auf "Privacy", unnötige Schläuche entfernen).</li>
                </ul>
                <h3>2. Allgemeinmaßnahmen (auch Prophylaxe)</h3>
                <ul>
                    <li>Angehörige frühzeitig einbeziehen (Besuche, "rooming-in").</li>
                    <li>Frühmobilisation ("Gehfrei", Physio- und Ergotherapie).</li>
                    <li>Förderung geistiger Aktivität (Vermeidung von Reizdeprivation).</li>
                    <li>Tag-Nacht-Rhythmus wahren (Tagsüber aktivieren, nachts Lichtreduktion, Ohrenstöpsel/Schlafmaske).</li>
                    <li>Orientierung geben (Uhr, Kalender, Brille, Hörgerät, vertraute Gegenstände).</li>
                </ul>
                <h3>3. Fixierung / Unmittelbarer Zwang</h3>
                <ul>
                    <li>Ultima ratio bei akuter Eigen- oder Fremdgefährdung.</li>
                    <li>Fixierungszeitraum auf Minimum beschränken!</li>
                    <li>Technisch sichere Durchführung, Fixierungsprotokoll anfertigen.</li>
                    <li>Rechtliche Voraussetzungen beachten (Angehörige informieren, Eilantrag an Gericht).</li>
                </ul>`
            },
            {
                title: "Medikamentöse Therapie",
                content: `<p>Nur zur Behandlung individueller Symptome (insgesamt schlechte Evidenz; vermeiden sofern möglich!).</p>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Indikation / Wirkstoff</th>
                                <th>Dosierung</th>
                                <th>Hinweise / CAVE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Melperon</strong></td>
                                <td>25-50 mg p.o. 1-3x/d</td>
                                <td>Sedierung &gt; antipsychotisch. HWZ ca. 5h. <strong>CAVE:</strong> Nicht bei Parkinson.</td>
                            </tr>
                            <tr>
                                <td><strong>Pipamperon</strong></td>
                                <td>12-40 mg p.o. 1-2x/d</td>
                                <td>Sedierung &gt; antipsychotisch. HWZ 17-22h. <strong>CAVE:</strong> Nicht bei Parkinson.</td>
                            </tr>
                            <tr>
                                <td><strong>Quetiapin</strong></td>
                                <td>25-75 mg p.o. 1-3x/d</td>
                                <td>HWZ ca. 7-12h. <strong>Merke:</strong> Auch bei Parkinson-Syndrom geeignet.</td>
                            </tr>
                            <tr>
                                <td><strong>Risperidon</strong></td>
                                <td>0,5-1 mg p.o. 1-3x/d</td>
                                <td>Antipsychotisch &gt; Sedierung. <strong>CAVE:</strong> Nicht bei Parkinson.</td>
                            </tr>
                            <tr>
                                <td><strong>Haloperidol</strong></td>
                                <td>1 mg p.o./s.c./i.m. 1-2x/d</td>
                                <td>Max. 20 mg/d; Alter &gt; 65 J: max. 5 mg/d. <strong>CAVE:</strong> Extrapyramidale NW.</td>
                            </tr>
                            <tr>
                                <td><strong>Notfalltherapie</strong> (Eigen-/Fremdgefährdung)</td>
                                <td>Midazolam 5 mg i.m./i.n. + ggf. 5 mg Haloperidol i.m.</td>
                                <td>Nur für akute Notfall-Sedierung. HWZ Midazolam ca. 2h.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="callout callout-cave">
                    <p><strong>WICHTIG:</strong> QTc-Zeit-Kontrollen (EKG) bei allen Antipsychotika obligat!</p>
                </div>`
            },
            {
                title: "Merke",
                content: `<ul>
                    <li>Ein Delir ist ein <strong>medizinischer Notfall</strong> (unbehandelt: Letalität &gt; 30 %).</li>
                    <li>Ein Delir kann das einzige Zeichen einer schweren akuten Erkrankung sein.</li>
                    <li>Nicht-medikamentöse Maßnahmen stehen an erster Stelle.</li>
                    <li>Basisdiagnostik bei neu aufgetretenem Delir: Vitalparameter, körperl. Untersuchung, BGA, Labor, Medikamentencheck.</li>
                    <li><strong>cCT</strong> bei jeder nicht anderweitig erklärbaren Vigilanzminderung (hypoaktives Delir ist eine Ausschlussdiagnose!).</li>
                    <li>Abgrenzung Delir vs. Demenz ist oft erst im zeitlichen Verlauf möglich (Re-Evaluation nach 6 Monaten).</li>
                    <li><strong>Delir bei Parkinson:</strong> Reduktion der dopaminergen Medikamente prüfen (insbesondere Dopaminagonisten).</li>
                </ul>`
            },
            {
                title: "Disposition",
                content: `<ul>
                    <li><strong>Ambulantes Procedere:</strong> Delir ohne behandelbare Ursache (nach Rücksprache mit Patientenumfeld).</li>
                    <li><strong>Normalstation:</strong> Delir mit behandelbarer Ursache bzw. häuslichem Versorgungsproblem ("Verkabelung" delirtofen!).</li>
                    <li><strong>Überwachungsstation (IMC/ICU):</strong> Schweres Delir mit akuter Eigen-/Fremdgefährdung, Notwendigkeit zur intravenösen Delirtherapie oder Fixierung.</li>
                    <li><strong>Gerontopsychiatrie:</strong> Bei primär psychiatrischem Fokus oder fehlender Besserung unter somatischer Therapie.</li>
                </ul>`
            }
        ],
        stand: "12/22",
        sources: `Zoremba N et al. Acute confusional states in hospital. Dtsch Arztebl Int 2019; 116: 101–6. – Maschke M et al. Delir und Verwirrtheitszustände inklusive Alkoholentzugsdelir, S1-Leitlinie, 2020. – Nickel CH et al. SOP Delir... Notaufnahme up2date 2020; 2: 207–210. – Grossmann FF et al. Screening, detection and management of delirium in the emergency department - a pilot study on the feasibility of a new algorithm for use in older emergency department patients: the modified Confusion Assessment Method for the Emergency Department (mCAM-ED). Scand J Trauma Resusc Emerg Med. 2014 Mar 13;22:19. – Fachinformationen der genannten Arzneimittel, Stand 12/22.`
    });
})();