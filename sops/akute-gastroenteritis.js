// SOP: Akute Gastroenteritis
// Kategorie: Gastroenterologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "akute-gastroenteritis",
        title: "Akute Gastroenteritis",
        category: "Gastroenterologie",
        catKey: "gi",
        sections: [
            {
                title: "Definition",
                html: `<ul>
                    <li><strong>Akute Gastroenteritis:</strong> Plötzliche Änderung der Stuhlfrequenz und -konsistenz über das individuell übliche Maß hinaus (≥ 3x/d).</li>
                </ul>`
            },
            {
                title: "Ursachen",
                html: `<ul>
                    <li><strong>Meist Viren</strong> (z.B. Noro-/Rotaviren)</li>
                    <li>Seltener Bakterien (z.B. Campylobacter, Salmonellen, E. coli, C. difficile)</li>
                    <li>Parasiten, Protozoen (z.B. Amöben)</li>
                </ul>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li><strong>Akute Diarrhoe</strong> (wässrig, breiig, schleimig, blutig)</li>
                    <li><strong>Übelkeit und Erbrechen</strong> (oft bereits vor Diarrhoe auftretend)</li>
                    <li>ggf. krampfartige abdominelle Schmerzen</li>
                    <li>ggf. Fieber bzw. Zeichen der systemischen Inflammation</li>
                    <li>ggf. erregerspezifische Symptome (z.B. reaktive Arthritis bei Yersiniose)</li>
                    <li>ggf. Zeichen von Komplikationen (z.B. Exsikkose bis hypovolämischer Schock, Elektrolytstörungen, akute Nierenschädigung)</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li><strong>Ersteindruck + ABCDE + Vitalparameter</strong> (RR, Puls, SpO₂, AF, Temperatur)</li>
                    <li><strong>1x venöser Zugang</strong></li>
                    <li><strong>Venöse BGA</strong> (pH? BE? E'lyte? Hb? Glukose? Laktat?)</li>
                    <li><strong>Labor:</strong> Diff-BB, CRP, E'lyte, NW, ggf.: Lipase, Leberwerte, Bilirubin, LDH, Haptoglobin, Fragmentozyten, TSH, PCT, hs-Troponin, Malaria-Diagnostik, β-HCG</li>
                    <li><strong>Blutkulturen:</strong> ≥ 2 Paar (bei Fieber oder Zeichen systemischer Inflammation)</li>
                    <li><strong>12-Kanal-EKG</strong> (Ischämiezeichen? Herzrhythmusstörungen? QTc-Zeit?)</li>
                    <li><strong>Anamnese:</strong> Symptome? Symptombeginn? Stuhlfrequenz? Blutige Diarrhoe? Erbrechen? Abdominelle Schmerzen? Fieber? Symptome bei Kontaktpersonen? Verzehr roher Nahrungsmittel? Reiseanamnese? Antibiotikaeinnahme oder Krankenhausaufenthalt in den letzten 3 Monaten? Tierkontakte? Berufsanamese? Sexuelle Praktiken? Vorerkrankungen? Immunsuppression? Medikamente? Ausreichende orale Flüssigkeitsaufnahme?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Vigilanz? Rekap-Zeit? Exsikkosezeichen? Darmgeräusche? Abdomineller Druckschmerz? Abwehrspannung?</li>
                    <li><strong>POCUS:</strong> Volumenstatus? Abdomineller Infektfokus? Freie Flüssigkeit? Ileus? Dilatierte Darmschlingen? Peristaltik?</li>
                    <li><strong>Stuhlprobe</strong> (bei stationärer Aufnahme): Noro-/Rotavirus, Salmonellen, Campylobacter, GDH bei V.a. C. difficile, ggf. Shigellen, Yersinien, EHEC, etc.</li>
                    <li>ggf. weiterführende Diagnostik (z.B. CT-Abdomen mit KM zum Ausschluss einer Mesenterialischämie)</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p><strong>Wichtige Fragen klären:</strong></p>
                    <ul>
                        <li>Liegt wirklich „nur“ eine Gastroenteritis vor? Wurden gefährliche Differentialdiagnosen bedacht?</li>
                        <li>Gibt es Hinweise für einen schweren Verlauf bzw. Komplikationen?</li>
                    </ul>
                </div>`
            },
            {
                title: "Gefährliche Differentialdiagnosen ('Gastroenteritis Mimics')",
                html: `<ul>
                    <li>Ileus, Mesenterialischämie, Hohlorganperforation</li>
                    <li>Abdominelle Entzündung (z.B. Appendizitis, Cholezystitis)</li>
                    <li>Toxisches Megacolon, Volvulus, Invagination</li>
                    <li>Hämolytisch urämisches Syndrom (HUS), Malaria</li>
                    <li>Akuter Myokardinfarkt, akutes Aortensyndrom</li>
                    <li>Intrakranielle Pathologie (z.B. Kleinhirninfarkt, Tumor)</li>
                    <li>Sepsis, akute Nebenniereninsuffizienz, diabetische Ketoazidose, Thyreotoxikose</li>
                </ul>
                <div class="callout callout-cave">
                    <p>„Denken Sie immer daran, dass ein Stromschlag durch ihren Stift gehen sollte, wenn Sie die Verdachtsdiagnose Gastroenteritis formulieren und fragen Sie sich jedes Mal, was der Patient wirklich haben könnte.“ (T. Fleischmann, C. Hohenstein)</p>
                </div>`
            },
            {
                title: "Therapie",
                html: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li><strong>Eigen-/Infektionsschutz:</strong> Kittel, Handschuhe, bei Erbrechen geeigneter MNS, viruzides Desinfektionsmittel, bei C. difficile zus. Händewaschen mit Seife</li>
                    <li><strong>Isolation:</strong> mit eigener Nasszelle (Isolationsdauer bis 48 h nach Sistieren von Erbrechen und Diarrhoen)</li>
                    <li><strong>Wunschkost:</strong> häufige, kleine, ballaststoff- und fettarme Mahlzeiten sinnvoll (z.B. Zwieback, Salzstangen, gekochtes Gemüse, Kartoffeln, Banane)</li>
                </ul>
                <h3>Supportive Therapie</h3>
                <ul>
                    <li><strong>Rehydrierung:</strong>
                        <ul>
                            <li>Falls möglich: orale Rehydratationslösung gemäß WHO-Empfehlung schluckweise trinken</li>
                            <li>Vollelektrolytlösung i.v. (Menge und Geschwindigkeit abhängig von Dehydratation und Komorbiditäten)</li>
                        </ul>
                    </li>
                    <li><strong>Ausgleich von Elektrolytstörungen:</strong> s. SOP Hypokaliämie / Hyponatriämie / Hypernatriämie</li>
                    <li><strong>Analgetische/spasmolytische Therapie:</strong>
                        <ul>
                            <li><strong>Paracetamol</strong> 1 g als Kurzinfusion i.v. (max. 4 g/d)</li>
                            <li><strong>Piritramid</strong> 3,75–7,5 mg als Kurzinfusion i.v.</li>
                            <li><strong>Butylscopolamin</strong> 20–40 mg als Kurzinfusion i.v. (max. 100 mg/d)</li>
                            <li><strong>Keine Verwendung von Metamizol</strong> in dieser Indikation aufgrund des Nebenwirkungsprofils (z.B. Agranulozytose)!</li>
                        </ul>
                    </li>
                    <li><strong>Antiemetische Therapie:</strong> s. SOP Erbrechen</li>
                </ul>
                <h3>Antibiotische Therapie (nur in Ausnahmefällen)</h3>
                <ul>
                    <li><strong>Indikation:</strong> Schweres Krankheitsbild (z.B. Sepsis, hohes Fieber, blutig-schleimige Diarrhoe), funktionell relevante Immundefizienz</li>
                    <li><strong>Therapie:</strong> <strong>Azithromycin</strong> 1000 mg 1x p.o. (alternativ: Aminopenicillin + Betalaktamase-Inhibitor i.v., z.B. Ampicillin/Sulbactam 3 g 1-1-1 i.v. für 3–5 Tage)</li>
                    <li><strong>Erregerspezifische Therapie:</strong> z.B. Vancomycin 125 mg 1-1-1-1 p.o. oder Fidaxomicin 200 mg 1-0-1 p.o. bei C. difficile-Infektion</li>
                </ul>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li>Bedenke gefährliche Differentialdiagnosen!</li>
                    <li>Die meisten Gastroenteritiden sind selbstlimitierend (≤ 7 Tage) und werden rein supportiv behandelt.</li>
                    <li>Patienten über Wichtigkeit einer ausreichenden oralen Flüssigkeitsaufnahme und Hygienemaßnahmen aufklären.</li>
                    <li>Bei vorangegangener Antibiotikatherapie oder Krankenhausaufenthalt ≤ 3 Monaten immer an <strong>C. difficile-Infektion</strong> denken!</li>
                    <li><strong>3 Stuhlproben</strong> gewinnen bei V.a. Parasitose oder V.a. C. difficile-Infektion bei chronisch entzündlicher Darmerkrankung.</li>
                    <li>Bei außereuropäischen Reiserückkehrern müssen auch <strong>exotische Erreger</strong> bedacht werden (z.B. Malaria, Amöben, Giardia lamblia).</li>
                    <li>Ärztliche <strong>Meldung</strong> an Gesundheitsamt gemäß § 6 IfSG (s. RKI, z.B. bei Cholera und HUS bereits bei Verdacht; ggf. bei C. difficile-Infektion).</li>
                </ul>`
            },
            {
                title: "Disposition",
                html: `<div class="callout callout-hinweis">
                    <p><strong>Risikofaktoren:</strong> Vigilanzminderung, deutlich pathologische Vitalparameter, schwere Dehydratation, unzureichende orale Flüssigkeitsaufnahme, schwere Elektrolytstörung, akute Nierenschädigung, anhaltend blutige Diarrhoe, starke Schmerzen, relevante Komorbiditäten, Immunsuppression, inadäquate häusliche Versorgung, hohes Lebensalter.</p>
                </div>
                <ul>
                    <li><strong>Gastroenteritis ohne Risikofaktoren:</strong> Ambulantes Procedere</li>
                    <li><strong>Gastroenteritis mit Risikofaktoren:</strong> Stationäre Aufnahme</li>
                </ul>`
            }
        ],
        stand: "01/24",
        sources: `S2k-Leitlinie Gastrointestinale Infektionen der DGVS, Version 2.1 (11/2023).<br>Geyer B. Diagnosis and management of acute gastroenteritis... Emerg Med Pract. 2020.<br>Fleischmann T et al. FAQ Klinische Notfallmedizin. 2016.`
    });
})();