(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "hitzschlag",
        title: "Hitzschlag",
        category: "Sonstige",
        catKey: "sonst",
        sections: [
            {
                title: "Definition",
                html: `<p><strong>Hitzschlag:</strong> Lebensbedrohlicher Anstieg der Körperkerntemperatur auf <strong>&gt; 40 °C</strong> mit <strong>zerebraler Dysfunktion</strong>.</p>`
            },
            {
                title: "Ursachen",
                html: `<div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Klassischer Hitzschlag</th>
                                <th>Anstrengungshitzschlag</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Hohe Umgebungstemperatur (z.B. im Rahmen von Hitzewellen)</td>
                                <td>Übermäßige körperliche Anstrengung (+/- heiße Umgebung)</td>
                            </tr>
                            <tr>
                                <td><strong>Risikofaktoren:</strong>
                                    <ul>
                                        <li>Höheres Lebensalter, Multimorbidität</li>
                                        <li>Soziale Faktoren (Isolation, Pflegebedürftigkeit)</li>
                                        <li>Medikamente (β-Blocker, Diuretika, Anticholinergika, etc.)</li>
                                    </ul>
                                </td>
                                <td><strong>Risikofaktoren:</strong>
                                    <ul>
                                        <li>Übergewicht, unzureichendes Fitnesslevel, Infekt</li>
                                        <li>Dehydratation, Schlafmangel, fehlende Akklimatisation</li>
                                        <li>Drogenkonsum (Amphetamine, Kokain, MDMA, LSD, Alkohol, etc.)</li>
                                        <li>Soziale Faktoren (Übermotivation, Wettkampf, Militärübung)</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li><strong>Hyperthermie</strong></li>
                    <li><strong>ZNS-Symptome:</strong> Verwirrtheit, Wesensveränderung, Agitation, Delir, epileptische Anfälle, Übelkeit, Erbrechen, Hirnödem, Koma</li>
                    <li>Tachypnoe, Tachykardie, Hypotonie</li>
                    <li><strong>Hautzustand:</strong>
                        <ul>
                            <li>Heiße und <strong>trockene</strong> Haut (typisch bei klassischem Hitzschlag)</li>
                            <li><strong>Feuchte</strong> Haut (typisch bei Anstrengungshitzschlag)</li>
                        </ul>
                    </li>
                    <li><strong>Komplikationen:</strong> Elektrolytstörungen, akute Nierenschädigung (AKI), metabolische Azidose, Rhabdomyolyse, akuter Leberschaden, disseminierte intravasale Gerinnung (DIC), ARDS, SIRS mit Multiorganversagen</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur)</li>
                    <li><strong>2x großlumiger venöser Zugang</strong></li>
                    <li><strong>Venöse bzw. arterielle BGA:</strong> (pH? BE? pCO₂? Laktat? Elektrolyte?)</li>
                    <li><strong>Labor:</strong> BB, CRP, E'lyte inkl. Kalzium, Phosphat, Magnesium, NW, Gerinnung, CK, Leberwerte, Harnsäure, LDH, TSH, ggf.: β-HCG, PCT, Cortisol, Troponin, D-Dimere</li>
                    <li><strong>12-Kanal-EKG:</strong> Herzrhythmusstörungen? Ischämiezeichen?</li>
                    <li><strong>Anamnese:</strong> Hitzeexposition? Starke körperliche Anstrengung? Auffindesituation? Vorerkrankungen? Medikamente? Drogenkonsum? Infektzeichen?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Vigilanz? GCS? Heiße/trockene oder feuchte Haut? Hinweise auf Differentialdiagnosen: Infektfokus? Meningismus? etc.</li>
                    <li><strong>DK-Anlage:</strong> Zwingend erforderlich für kontinuierliches Monitoring von Temperatur und Diurese.</li>
                    <li><strong>ggf. weitere Diagnostik z.A. von Differentialdiagnosen:</strong> cCT, Lumbalpunktion, Infektfokussuche, Drogenscreening, etc.</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p>Frühzeitige Rücksprache mit Überwachungsstation (IMC/ICU)!</p>
                </div>`
            },
            {
                title: "Wichtige Differentialdiagnosen",
                html: `<ul>
                    <li><strong>Infektion:</strong> Meningitis/Enzephalitis, Sepsis</li>
                    <li><strong>Endokrin:</strong> Thyreotoxische Krise, Akute Nebenniereninsuffizienz</li>
                    <li><strong>Metabolisch:</strong> Belastungsinduzierte schwere Hyponatriämie</li>
                    <li><strong>Medikamentös-toxisch:</strong> Malignes neuroleptisches Syndrom, Serotonerges Syndrom, Anticholinerges Syndrom</li>
                </ul>`
            },
            {
                title: "Therapie",
                html: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li>Stabilisierung der Vitalfunktionen gemäß ABCDE-Schema</li>
                    <li>Patienten vor weiterer Hitzeexposition schützen und vollständig entkleiden</li>
                    <li><strong>Gekühlte Vollelektrolytlösung:</strong> 1-2 l schnell i.v.</li>
                    <li>Behandlung von Komplikationen (s. SOP Status Epilepticus, s. SOP Akute Nierenschädigung, etc.)</li>
                </ul>
                <h3>Kausale Therapie: Kühlung</h3>
                <p><strong>Ziel:</strong> Aktive Kühlung auf <strong>&lt; 39 °C innerhalb von 30 Minuten</strong>; bei <strong>≤ 38 °C beenden</strong> (um überschießenden Temperaturabfall zu vermeiden).</p>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Methode</th>
                                <th>Bewertung</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Eiswasserimmersion</strong> (Patienten in Eiswasserbad legen)</td>
                                <td><strong>Vorteile:</strong> Goldstandard, effektivste Kühlung, beste Datenlage.<br><strong>Nachteile:</strong> Fehlende Verfügbarkeit, fehlende Überwachungs- und Interventionsmöglichkeiten.</td>
                            </tr>
                            <tr>
                                <td><strong>Modifizierte Eiswasserimmersion</strong> ("body bag"-Methode oder "tarp taco")</td>
                                <td><strong>Vorteile:</strong> Effektive Kühlung, einfacher durchführbar, eingeschränktes Monitoring möglich.<br><strong>Nachteile:</strong> Weniger effektiv als "richtige" Eiswasserimmersion.</td>
                            </tr>
                            <tr>
                                <td><strong>Evaporation</strong> (Wasserübergießen + Ventilator + Eispacks in Leiste/Axilla/Hals)</td>
                                <td><strong>Vorteile:</strong> Sehr gute Verfüg- und Durchführbarkeit, gute Überwachungs- und Interventionsmöglichkeiten.<br><strong>Nachteile:</strong> Weniger effektiv als (modifizierte) Eiswasserimmersion.</td>
                            </tr>
                            <tr>
                                <td><strong>Intravaskulärer Kühlkatheter</strong></td>
                                <td><strong>Vorteile:</strong> Gute Steuerbarkeit.<br><strong>Nachteile:</strong> Verzögerter Therapiebeginn (Anlagedauer), invasiv, teuer, geringe Datenlage.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Sonstiges</h3>
                <ul>
                    <li><strong>Benzodiazepine:</strong> z.B. Midazolam 2 mg i.v. repetitiv bei Agitation oder <strong>Shivering</strong> (Kältezittern erhöht Muskelarbeit und Wärmebildung; keine mechanische Fixierung!).</li>
                    <li><strong>Antibiotika:</strong> Breitspektrumantibiotikum bei V.a. Sepsis (als wichtige Differentialdiagnose, s. SOP Sepsis).</li>
                </ul>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li><strong>Hitzschlag = klinische Diagnose:</strong> Hyperthermie > 40° C + ZNS-Störung nach Hitzeexposition und/oder starker körperlicher Anstrengung.</li>
                    <li>Ein frühzeitiges Erkennen sowie eine <strong>sofortige rasche Kühlung</strong> sind essentiell zur Verhinderung von hitzebedingten Organschäden!</li>
                    <li><strong>Temperaturmessung:</strong> Für valide Ergebnisse muss die Körpertemperatur <strong>rektal</strong>, in der Blase oder im Ösophagus (bei Intubierten) gemessen werden.</li>
                    <li><strong>Fieber ≠ Hyperthermie:</strong>
                        <ul>
                            <li><strong>Fieber:</strong> Hypothalamische Sollwertverstellung durch Zytokine (z.B. Infekt).</li>
                            <li><strong>Hyperthermie:</strong> Unkontrollierte Überhitzung des Körpers (Hitzschlag).</li>
                        </ul>
                    </li>
                    <li class="callout callout-cave"><strong>Keine Gabe von Antipyretika/NSAR!</strong> Potentiell schädlich und nutzlos, da keine hypothalamische Sollwertverstellung vorliegt.</li>
                    <li><strong>Keine Gabe von Dantrolen:</strong> Im Gegensatz zur malignen Hyperthermie gibt es keine Evidenz für einen Nutzen beim Hitzschlag.</li>
                </ul>`
            },
            {
                title: "Disposition",
                html: `<ul>
                    <li><strong>Überwachungsstation (IMC/ICU)</strong></li>
                </ul>`
            }
        ],
        stand: "07/25",
        sources: `Barletta JF et al. Society of Critical Care Medicine Guidelines for the Treatment of Heat Stroke. Crit Care Med. 2025 Feb 1;53(2):e490-e500. – Epstein Y et al. Heatstroke. N Engl J Med. 2019 Jun 20;380(25):2449-2459. – Eifling K et al. Wilderness Medical Society Clinical Practice Guidelines for the Prevention and Treatment of Heat Illness: 2024 Update. Wilderness & Environmental Medicine 2024. – Leyk D et al. Health risks and interventions in exertional heat stress. Dtsch Arztebl Int 2019; 116: 537–44. – Kim DA et al. A body bag can save your life: a novel method of cold water immersion for heat stroke treatment. J Am Coll Emerg Physicians Open. 2020 Jan 8;1(1):49-52.`
    });
})();