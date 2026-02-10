// SOP: Akute Alkoholintoxikation
// Kategorie: Toxikologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "akute-alkoholintoxikation",
        title: "Akute Alkoholintoxikation",
        category: "Toxikologie",
        catKey: "tox",
        sections: [
            {
                title: "Definition",
                html: `<ul>
                    <li><strong>Akute Alkoholintoxikation:</strong> Akute Vergiftung durch übermäßigen Konsum von Ethanol</li>
                </ul>`
            },
            {
                title: "Ursachen",
                html: `<ul>
                    <li><strong>Übermäßiger Alkoholkonsum</strong></li>
                    <li><strong>Gründe:</strong> Alkoholabhängigkeit, soziale Faktoren (Feier, Gruppenzwang, Aufnahmerituale), Stressbewältigung, Suizidalität</li>
                </ul>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li>Entspannung, Redseligkeit, Reaktionszeit ↑, Urteilsvermögen ↓, Affektlabilität, Enthemmung bis Kontrollverlust</li>
                    <li>Schwindel, Ataxie, Dysarthrie, Sehstörungen, Nystagmus, Amnesie (“Filmriss”)</li>
                    <li>Übelkeit, Erbrechen, Diarrhoe</li>
                    <li><strong>Vigilanzminderung bis Koma</strong></li>
                    <li>ggf. Verlust der Schutzreflexe mit Aspiration oder Verlegung der Atemwege (Weichteile, Erbrochenes)</li>
                    <li><strong>Zentrale Atemdepression</strong> (insbesondere bei Mischintoxikation z.B. mit Opioiden oder Benzodiazepinen)</li>
                    <li>Elektrolytstörungen, Hypoglykämie, Hypothermie, Hypovolämie, Hypotonie, metabolische Azidose, Sturzfolgen</li>
                </ul>
                <div class="callout callout-cave">
                    <p>Der Schweregrad einer Alkoholintoxikation hängt neben der Blutalkoholkonzentration maßgeblich von der individuellen Alkoholtoleranz ab, eine Blutalkoholkonzentration > 5 ‰ ist meist tödlich!</p>
                </div>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li><strong>Ersteindruck + ABCDE + Vitalparameter</strong> (RR, Puls, SpO₂, AF, Temperatur)</li>
                    <li><strong>(Fremd-)Anamnese:</strong> Symptome? Menge, Art, Zeitpunkt, Motivation und Umstände der Alkoholaufnahme? Bekannte Alkoholabhängigkeit? Weitere Drogeneinnahme? Sturz bzw. Kopftrauma? Vorerkrankungen? Medikamente?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Vigilanz? Pupillen? Neurologie? Foetor alcoholicus? Prellmarken? Leberhautzeichen? Zungenbiss? Exsikkose? Infekt?</li>
                    <li><strong>Blutzuckermessung</strong> mittels Glukose-Stix (verzichtbar, wenn BGA abgenommen wird)</li>
                    <li>ggf. 1x venöser Zugang</li>
                    <li>ggf. venöse <strong>BGA</strong> (pH? pCO₂? BE? E’lyte? Laktat? Glukose?)</li>
                    <li>ggf. <strong>Labor</strong> (BB, CRP, E‘lyte, NW, Bilirubin, Gerinnung, CK, Alkohol, ggf.: GOT, GPT, AP, γ-GT, PCT, TSH, Ammoniak, Drogenscreening)</li>
                    <li>ggf. <strong>Drogenscreening im Urin</strong> (Hinweise auf Mischintoxikation?)</li>
                    <li>ggf. <strong>cCT (+ CT-HWS)</strong> (niederschwelliger Einsatz bei V.a. Kopftrauma oder Diskrepanz zwischen Ausmaß der Vigilanzminderung und Blutalkoholspiegel → "Läuse und Flöhe")</li>
                    <li>ggf. weitere Diagnostik (z.B. 12-Kanal-EKG: HRST? QTc-Zeit? Röntgen-Thorax bei V.a. Aspiration, U-Stix bei V.a. alkoholische Ketoazidose)</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p><strong>Eigenschutz vor Diagnostik!</strong> Engmaschige Reevaluation des Patientenzustandes!</p>
                </div>`
            },
            {
                title: "Wichtige Differentialdiagnosen",
                html: `<p>Bei Alkoholkonsum und Vigilanzminderung:</p>
                <ul>
                    <li><strong>Mischintoxikation</strong> (mit Opioiden, Benzodiazepinen, etc.)</li>
                    <li><strong>Intrakranielle Blutung</strong> (z.B. traumatisches Subduralhämatom)</li>
                    <li><strong>Metabolische Störungen</strong> (Hypoglykämie, Hyponatriämie, etc.)</li>
                    <li><strong>Postiktale Phase</strong> (z.B. im Rahmen eines "Alkohol-Entzugskrampfs")</li>
                    <li><strong>Sepsis</strong> (Alkoholismus mit gestörter Immunlage assoziiert)</li>
                    <li><strong>Methanolintoxikation</strong> (z.B. "Selbstgebranntes")</li>
                    <li><strong>Hepatische Enzephalopathie</strong> (bei ausgeprägter Leberschädigung)</li>
                    <li><strong>Wernicke-Enzephalopathie</strong> (bei ausgeprägtem Thiaminmangel)</li>
                </ul>`
            },
            {
                title: "Therapie",
                html: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li><strong>Eigenschutz beachten</strong> (Handschuhe, Schutzkittel; bei fremdaggressivem Verhalten: niederschwelliges Hinzuziehen der Polizei)</li>
                    <li>Stabilisierung der Vitalfunktionen gemäß ABCDE-Schema</li>
                    <li>Stabile Seitenlage, Absaugbereitschaft herstellen</li>
                    <li><strong>Endotracheale Intubation</strong> bei fehlenden Schutzreflexen (Strenge individuelle Indikationsstellung, "GCS ≤8 = Intubation"-Dogma gilt hier nicht)</li>
                    <li>Kontinuierliche Überwachung: Vitalparameter (bei unkooperativen Patienten minimum: Pulsoxymetrie), klinische Verlaufskontrollen</li>
                    <li><strong>Schutz vor Sturz/Verletzungen:</strong> Bodennahe Lagerung in idealerweise videoüberwachtem Raum</li>
                    <li>V.a. chronischen Alkoholkonsum: <strong>Thiamin 100 mg i.v.</strong> (z.B. in 100 ml NaCl als Kurzinfusion, 1-0-0 für 3 Tage)</li>
                    <li>V.a. Wernicke-Enzephalopathie: <strong>Thiamin 200-500 mg i.v.</strong> (z.B. in 100 ml NaCl als Kurzinfusion, 1-1-1 für 5-7 Tage)</li>
                </ul>
                <h3>Behandlung von Komplikationen</h3>
                <ul>
                    <li><strong>Agitation, Aggressivität:</strong> Verbale Deeskalation, Abschirmung vor Reizen, auf Bedürfnisse eingehen (z.B. Wasser, warme Decke)
                        <ul>
                            <li>Akute Eigen- oder Fremdgefährdung: Polizei hinzuziehen, <strong>5 mg Midazolam</strong> (Dormicum®) i.m./i.n. (≙ 1 ml von einer Ampulle 15 mg/3 ml) + ggf. <strong>5 mg Haloperidol</strong> (Haldol®) i.m. (≙ 1 Ampulle mit 5 mg/ml), Fixierung als Ultima ratio (wann immer möglich vermeiden)</li>
                        </ul>
                    </li>
                    <li><strong>Elektrolytstörungen:</strong> Ausgleich (s. SOP Hyponatriämie, SOP Hypokaliämie)</li>
                    <li><strong>Hypoglykämie:</strong> Blutzucker anheben (s. SOP Hypoglykämie, zeitnahe Thiamingabe obligat!)</li>
                    <li><strong>Hypothermie:</strong> Aufwärmen (Warmer Raum, Decken, Wärmedecke)</li>
                    <li><strong>Hypovolämie:</strong> Vollelektrolytlösung i.v. (CAVE: Keine routinemäßige i.v.-Flüssigkeitssubstitution; fehlender Benefit in Studien bei längerer Verweildauer)</li>
                    <li><strong>Hypotonie:</strong> Vollelektrolytlösung i.v., ggf. Katecholamine (z.B. Noradrenalin, Dosierung s. SOP Sepsis)</li>
                    <li><strong>Laktatazidose:</strong> Vollelektrolytlösung und Thiamin (s.o.) i.v., bei alkoholischer Ketoazidose: zusätzlich Glukose G10 i.v.</li>
                    <li><strong>Sturzfolgen, Verletzungen:</strong> Adäquate Versorgung, ggf. Tetanus-Schutz auffrischen</li>
                </ul>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li>Auch bei offensichtlicher Alkoholintoxikation mögliche begleitende Ursachen der Vigilanzminderung bedenken!</li>
                    <li>Die Gefahr der Atemdepression besteht vor allem bei Einnahme weiterer sedierender Substanzen (Mischintoxikation = gefährlich!)</li>
                    <li>Patienten mit akuter Alkoholintoxikation auf das Vorliegen einer Alkoholabhängigkeit screenen (z.B. mittels CAGE-Test)</li>
                    <li>Patienten mit chronischem Alkoholabusus auf entsprechende Hilfsangebote aufmerksam machen (ggf. direkt bahnen)</li>
                    <li>Die Disposition hängt nicht von einem starren Promille-Wert, sondern von der klinischen Präsentation ab</li>
                    <li>Alkoholabhängigkeit + stationäre Aufnahme: Bedarfsmedikamente (z.B. Benzodiazepin) gegen Entzugssymptomatik anordnen</li>
                    <li>Den Entlassstatus stets sorgfältig dokumentieren (“Patient bei Entlassung wach, zu allen Qualitäten orientiert, gang-/stand-/ handlungssicher”)</li>
                </ul>`
            },
            {
                title: "Disposition",
                html: `<ul>
                    <li><strong>Ambulant:</strong> Patient wach, zu allen Qualitäten orientiert, gang-/stand- und handlungssicher, kein kürzlicher “Nachtrunk”, keine behandlungspflichtigen Komplikationen, keine Suizidalität → Entlassung in Begleitung eines Angehörigen (Verbot aktiver Teilnahme am Straßenverkehr!)</li>
                    <li><strong>Überwachung (Notaufnahme/Beobachtungsstation/IMC):</strong> Schwere Intoxikation, Schutzreflexe erhalten → bis Kriterien für ambulant erfüllt</li>
                    <li><strong>ICU:</strong> Schwere Intoxikation mit fehlenden Schutzreflexen, drohender Atemdepression oder sonstigen Komplikationen mit vitaler Gefährdung</li>
                </ul>`
            }
        ],
        stand: "09/25",
        sources: `Vonghia L et al. Acute alcohol intoxication. Eur J Intern Med. 2008.<br>Mirijello A et al. Identification and management of acute alcohol intoxication. Eur J Intern Med. 2023.<br>Hans FP et al. Akute Alkoholintoxikation. Notfall Rettungsmed 2016.<br>Latt N et al. Thiamine in the treatment of Wernicke encephalopathy. Intern Med J. 2014.<br>Nanah A et al. Outcomes and Practices of Endotracheal Intubation... J Intensive Care Med. 2024.`
    });
})();