(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "sterbephase-palliativ",
        title: "Sterbephase in palliativer Situation",
        category: "Sonstige",
        catKey: "sonst",
        stand: "12/22",
        sections: [
            {
                title: "Definition",
                html: `<p><strong>Sterbephase:</strong> Die letzten Tage des Lebens, in denen die körperlichen und geistigen Fähigkeiten des Sterbenden durch die Erkrankung zunehmend eingeschränkt sind.</p>`
            },
            {
                title: "Ursachen",
                html: `<ul>
                    <li>Frailty bei Hochbetagten</li>
                    <li>Unheilbare Erkrankung</li>
                    <li>(Potentiell) heilbare Erkrankung, bei der medizinische Maßnahmen aufgrund des Patientenwunschs unterbleiben</li>
                </ul>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li>Zunehmende Schwäche und reduzierter Allgemeinzustand</li>
                    <li>Verlust des Interesses an Nahrungs- und Flüssigkeitszufuhr</li>
                    <li>Veränderung von Emotionen und Bewusstsein, Verwirrtheit, Delir</li>
                    <li>Veränderungen der Atmung (z.B. Cheyne-Stokes-Atmung, Rasselatmung)</li>
                    <li>Zeichen der Kreislaufinsuffizienz (z.B. Mottling, Anurie)</li>
                    <li>ggf. krankheitsspezifische Symptome (z.B. Schmerzen, Luftnot, Übelkeit)</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li><strong>Patientenwillen</strong> im Gespräch mit dem Patienten eruieren (Therapieziele, Sterbeort, Wünsche, etc.).</li>
                    <li>Bei fehlender Einwilligungsfähigkeit (z.B. Vigilanzminderung, Delir, fortgeschrittene Demenz): mutmaßlichen Patientenwillen mit Angehörigen/Betreuern/Vorsorgebevollmächtigten unter Würdigung der <strong>Patientenverfügung</strong>, Vorsorgevollmacht und sonstigen notierten Wertevorstellungen des Patienten eruieren.</li>
                    <li><strong>Therapieziele</strong> (z.B. DNR, DNI, DND, no NIV, no ICU, no IMC, palliatives Procedere) in Akte gut sichtbar dokumentieren (Unterschrift + Stempel).</li>
                    <li>Klären, wer im Falle des Versterbens informiert werden soll (Name, Telefonnummer in Akte notieren) <strong>und wann</strong> (auch nachts sofort?).</li>
                    <li><strong>Keine</strong> Blutdruck-/Temperatur-/Pulsoxymetrie-/Blutzucker-/Labormessungen mehr vornehmen (fehlende Konsequenz).</li>
                    <li>Engmaschiges Beobachten auf Anzeichen für Dyspnoe, Angst, Schmerz, Stress (Unruhe, Schwitzen, Mimik, Abwehrreaktion).</li>
                </ul>`
            },
            {
                title: "Therapie - Allgemeinmaßnahmen",
                html: `<ul>
                    <li>Ruhige Umgebung schaffen.</li>
                    <li>Angehörige in Sterbebegleitung miteinbeziehen (sofern gewünscht).</li>
                    <li>Möglichkeiten zur seelischen Entlastung anbieten (Seelsorger, Pfarrer, etc.).</li>
                    <li>Alle Maßnahmen unterlassen, die Wohlbefinden des Patienten nicht verbessern (routinemäßiger Wechsel des Bettzeugs, etc.).</li>
                    <li><strong>Alle Medikamente absetzen</strong>, die Patienten-Lebensqualität nicht verbessern (OAK, Statine, Antihypertensiva, Antibiotika, Insulin, etc.).</li>
                    <li><strong>Keine künstliche Ernährung oder parenterale Flüssigkeitsgabe</strong> (Gefahr eines Lungenödems! Durstempfinden hingegen meist herabgesetzt).</li>
                    <li>Defibrillationsfunktion bei vorhandenem <strong>ICD deaktivieren</strong> (durch Magnetauflage oder Umprogrammierung durch Kardiologen).</li>
                    <li><strong>Subkutane Medikamentengabe bevorzugen</strong> (viele Medikamente können "off-label" s.c. verabreicht werden, z.B. auch Levetiracetam als Kurzinfusion bei Patienten mit Epilepsie in der Sterbephase); bereits vorhandene intravenöse Zugänge können jedoch weiter verwendet werden.</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p>Bei strikt palliativem Procedere gilt die <strong>Symptomkontrolle als einziges Therapieziel!</strong></p>
                </div>`
            },
            {
                title: "Symptomorientierte Therapie",
                html: `<h3>Atemnot / Schmerzen</h3>
                <ul>
                    <li><strong>Morphin (MSI®):</strong> z.B. 2,5 mg s.c. alle 4–6 h (b.B. alle 30 min) oder als <strong>Perfusor</strong> (50 mg/50 ml): Start mit 0,5 ml/h s.c./i.v.
                        <ul>
                            <li>Individuelle Dosierung abhängig von Symptomlast, Alter, Gewicht, Opiatvorbehandlung.</li>
                            <li>Bei vorbestehender Opiattherapie: Erhöhung der Morphin-Äquivalenzdosis um 25 %.</li>
                        </ul>
                    </li>
                    <li>Persistierende Atemnot trotz Opioiddosissteigerung: ergänzend <strong>Midazolam (Dormicum®)</strong> 1–2 mg s.c./i.v. (b.B. alle 30 min).</li>
                    <li>O₂-Gabe allenfalls übergangsweise bei Hypoxämie bis ausreichende Morphindosis etabliert (belastende Mundtrockenheit).</li>
                </ul>
                <h3>Angst, Unruhe, Delir</h3>
                <ul>
                    <li>Dem Patienten Vertrautes präsentieren (Angehörige, Musik, etc.).</li>
                    <li><strong>Midazolam (Dormicum®):</strong> 1–2 mg s.c./i.v. (b.B. alle 30 min) oder als Perfusor (10 mg/50 ml): Start mit 2 ml/h s.c./i.v.</li>
                    <li>Psychotisches Erleben: ggf. <strong>Haloperidol (Haldol®)</strong> z.B. 2,5 mg s.c. oder als Perfusor (5 mg/50 ml): 2 ml/h s.c. (max. 20 mg/d).</li>
                </ul>
                <h3>Übelkeit und Erbrechen</h3>
                <ul>
                    <li><strong>Haloperidol (Haldol®):</strong> z.B. 1–2,5 mg s.c. oder als Perfusor (5 mg/50 ml): 2 ml/h s.c. (max. 20 mg/d, i.d.R. 5 mg/d ausreichend).</li>
                    <li>Bei anhaltendem Erbrechen Anlage einer Entlastungsmagensonde erwägen.</li>
                </ul>
                <h3>Mundtrockenheit (Xerostomie)</h3>
                <ul>
                    <li>Regelmäßige Lippen-/Mundbefeuchtung ist die wichtigste Maßnahme gegen Durstempfinden.</li>
                </ul>
                <h3>Rasselatmung</h3>
                <ul>
                    <li><strong>Kein Absaugen</strong> des Trachealsekrets (außer ggf. bei Patienten mit Tracheostoma oder Endotrachealtubus).</li>
                    <li>Bei belastender Rasselatmung geeignete Lagerungsmethoden für Sekretmobilisation/-ablauf wählen.</li>
                    <li><strong>Medikamentös:</strong> Glycopyrrolat (Robinul®) 0,2 mg s.c. alle 4–6 h oder <strong>Butylscopolamin (Buscopan®)</strong> 20–40 mg s.c. alle 4–6 h.</li>
                </ul>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li><strong>Die 3 wichtigsten Medikamente in der Sterbephase:</strong>
                        <ul>
                            <li><strong>Morphin</strong> (Atemnot, Schmerz)</li>
                            <li><strong>Midazolam</strong> (Agitation, Unruhe, Atemnot)</li>
                            <li><strong>Haloperidol</strong> (Übelkeit, Erbrechen, psychotisches Erleben)</li>
                        </ul>
                    </li>
                    <li><strong>Palliative Sedierung</strong> erwägen bei nicht kontrollierbarem, unerträglicher Symptomlast (Palliativmediziner hinzuziehen).</li>
                    <li>Rasselatmung ist Zeichen für fortgeschrittenen Sterbeprozess und für das Umfeld belastender als für den Patienten.</li>
                    <li>Aktive Sterbehilfe ist in Deutschland gesetzlich verboten. Bei ausgeprägter Symptomlast kann in Einzelfällen die benötigte Morphindosis eine Lebenszeitverkürzung nach sich ziehen. Dies stellt <strong>keine</strong> aktive Sterbehilfe dar, wenn Symptomlast und Morphindosis in nachvollziehbarem Verhältnis stehen (Morphintitration!).</li>
                </ul>`
            },
            {
                title: "Disposition",
                html: `<ul>
                    <li><strong>Einzelzimmer auf Normalstation oder Palliativstation</strong> (lange Liegedauer in Notaufnahme vermeiden).</li>
                    <li><strong>Verlegung nach Hause mit SAPV-Anbindung</strong> (falls Patient dies wünscht und häusliche Versorgung gewährleistet ist).</li>
                </ul>`
            }
        ],
        sources: `Bausewein C et al. Atemnot und Husten bei Palliativpatienten. Dtsch Arztebl Int 2013; 110(33-34): 563-72.<br>
        Erweiterte S3-Leitlinie Palliativmedizin für Patienten mit einer nicht heilbaren Krebserkrankung, Kurzversion 2.2 – September 2020. AWMF-Registernummer: 128/001OL.<br>
        Waltenberger J. et al. Verantwortlicher Umgang mit ICDs. Stellungnahme der Deutschen Gesellschaft für Kardiologie und ihrer Schwester-Gesellschaften. Kardiologe 2017. 11:383-397.<br>
        Nehls W. et al. Handlungsempfehlung zur Therapie von Patient*innen mit COVID-19 aus palliativmedizinischer Perspektive. Deutsche Gesellschaft für Palliativmedizin / Deutsche Gesellschaft für Pneumologie und Beatmungsmedizin. Stand 29.06.2021. AWMF-Registernummer 128-002.`
    });
})();