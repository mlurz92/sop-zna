(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "herz-kreislauf-stillstand",
        title: "Herz-Kreislauf-Stillstand",
        category: "Kardiologie",
        catKey: "kardio",
        sections: [
            {
                title: "Definition",
                html: `<p><strong>Herz-Kreislauf-Stillstand:</strong> Sistieren einer effizienten Herzfunktion und somit der Blutzirkulation mit konsekutiver Gewebe-Hypoxie und Gefahr des Hirntods.</p>
                <h3>Symptome</h3>
                <ul>
                    <li>Plötzliche Bewusstlosigkeit</li>
                    <li>Atemstillstand bzw. Schnappatmung</li>
                    <li>Pulslosigkeit (fehlender Karotispuls)</li>
                    <li>ggf. krampfähnliche Bewegungen</li>
                    <li>ggf. blasse, graue, zyanotische Hautverfärbung</li>
                    <li>ggf. beidseits weite, reaktionslose Pupillen</li>
                </ul>`
            },
            {
                title: "Ursachen (H's und HITS)",
                html: `<p>Die Suche nach reversiblen Ursachen muss parallel zur CPR erfolgen:</p>
                <ul>
                    <li><strong>"H":</strong> Hypoxie, Hypovolämie, Hypo-/Hyperkaliämie/metabolisch, Hypo-/Hyperthermie</li>
                    <li><strong>"HITS":</strong> Herzbeuteltamponade, Intoxikation, Thrombose (koronar oder pulmonal), Spannungspneumothorax</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                html: `<h3>Diagnose des Herz-Kreislauf-Stillstands</h3>
                <ul>
                    <li>Laute Ansprache, Schmerzreiz, Atemwege öffnen, Atmung kontrollieren (max. 10 s) &rarr; Keine Reaktion, Atemstillstand</li>
                </ul>
                <h3>Während kardiopulmonaler Reanimation (CPR)</h3>
                <ul>
                    <li><strong>Fremd-Anamnese:</strong> Vorereignis? Wann zuletzt gesund gesehen? Vorerkrankungen? Medikamente? Patientenverfügung? Vorsorgebevollmächtigte? (s. Standard-Abfrage S.2)</li>
                    <li><strong>Körperliche Untersuchung:</strong> Anisokorie? Einseitig abgeschwächtes Atemgeräusch? Gespanntes Abdomen? Einseitige Beinschwellung? Ödeme?</li>
                    <li><strong>Temperaturmessung</strong></li>
                    <li><strong>Venöse bzw. arterielle BGA:</strong> pH? BE? pO₂? pCO₂? Kalium? Hb? Glukose? Laktat?</li>
                    <li><strong>Kapnometrie/-grafie:</strong> sobald Atemwegssicherung mittels SGA oder Endotrachealtubus erfolgt ist.</li>
                    <li><strong>POCUS:</strong> durch qualifizierten Untersucher (Perikardtamponade? Rechtsherzbelastungszeichen? Pneumothorax? Freie Flüssigkeit?)</li>
                </ul>
                <div class="callout callout-cave">
                    <p>Die diagnostischen Maßnahmen dürfen die CPR keinesfalls behindern oder die "No-Flow-Time" erhöhen!</p>
                </div>
                <h3>Nach Einsetzen eines Spontankreislauf (ROSC)</h3>
                <ul>
                    <li>ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur)</li>
                    <li><strong>12-Kanal-EKG:</strong> Herzrhythmusstörung? ST-Hebungen? STEMI-Äquivalente? Ischämiezeichen? Lagetyp? QTc-Zeit?</li>
                    <li><strong>ggf. Koronarangiografie:</strong> bei STEMI sofort; bei V.a. kardiale Genese des HKS erwägen &rarr; Rücksprache Kardiologie!</li>
                    <li><strong>Labor:</strong> BB, CRP, E'lyte, NW, Leberwerte, CK, LDH, Gerinnung, TSH, ggf.: hs-Troponin, CK-MB, Influenza-PCR, SARS-CoV-2-PCR.</li>
                    <li><strong>POCUS:</strong> s.o., falls noch nicht während CPR erfolgt.</li>
                    <li><strong>cCT+ CT-Thorax/Abdomen mit KM:</strong> ICB? LAE? Akutes Aortensyndrom? Pneumothorax? Infektfokus? Sonstige Pathologie? Reanimationsfolgen?</li>
                    <li>Anlage eines sicheren arteriellen Zugangs und <strong>zentralen Venenkatheters</strong> (ZVK bzw. ggf. direkt Kühlkatheter), BGA-Kontrolle, DK-Anlage.</li>
                </ul>`
            },
            {
                title: "Therapie",
                html: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li>Durchführen einer leitliniengerechten kardiopulmonalen Reanimation (s. Sektion CPR-Anleitung).</li>
                </ul>
                <h3>Kausale Therapie der reversiblen Ursachen</h3>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>"H und HITS"</th>
                                <th>Therapie</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Hypoxie</strong> (z.B. Aspiration, Pneumonie)</td>
                                <td>Frühzeitige Atemwegssicherung und hochdosierte Sauerstoffgabe</td>
                            </tr>
                            <tr>
                                <td><strong>Hypovolämie</strong> (z.B. Anaphylaxie, Sepsis, Blutung)</td>
                                <td>Volumengabe, bei Hämorrhagie sofortige Notfalltransfusion (0 negativ)</td>
                            </tr>
                            <tr>
                                <td><strong>Hypokaliämie</strong></td>
                                <td>20 mmol Kaliumchlorid über 10 min i.v., ggf. auch langsamere Gabe (s. SOP Hypokaliämie)</td>
                            </tr>
                            <tr>
                                <td><strong>Hyperkaliämie</strong></td>
                                <td>30 ml Calciumglukonat, 500 ml G10% + 10 IE Normalinsulin, ggf. 50 ml NaBic i.v. (s. SOP Hyperkaliämie)</td>
                            </tr>
                            <tr>
                                <td><strong>Hypoglykämie</strong></td>
                                <td>20 g Glukose = 5 Ampullen G40% á 10 ml i.v. (s. SOP Hypoglykämie)</td>
                            </tr>
                            <tr>
                                <td><strong>Hypothermie</strong></td>
                                <td>Passive Erwärmung, eCPR</td>
                            </tr>
                            <tr>
                                <td><strong>Hyperthermie</strong></td>
                                <td>Kühlung mit Zieltemperatur 32-36°C, bei V.a. maligne Hyperthermie: Stopp des Triggers, Dantrolengabe</td>
                            </tr>
                            <tr>
                                <td><strong>Herzbeuteltamponade</strong></td>
                                <td>Sofortige Entlastung (Perikardiozentese oder falls möglich chirurgische Thorakotomie)</td>
                            </tr>
                            <tr>
                                <td><strong>Intoxikation</strong></td>
                                <td>Sofortige Rücksprache mit Giftnotrufzentrale, spezifische Antidot-Therapie</td>
                            </tr>
                            <tr>
                                <td><strong>Thrombose (kardial)</strong></td>
                                <td>RS Kardiologie: Koronarangiografie unter CPR? (Hinweise: vorher Thoraxschmerz, CCS bekannt, initial VF/pVT)</td>
                            </tr>
                            <tr>
                                <td><strong>Thrombose (pulmonal)</strong></td>
                                <td>0,6 mg/kg KG (max. 50 mg) Alteplase über 15 min, CPR i.d.R. 60-90 min fortführen (s. SOP LAE)</td>
                            </tr>
                            <tr>
                                <td><strong>Spannungspneumothorax</strong></td>
                                <td>Thoraxentlastungspunktion/-Drainage</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h3>Post-Reanimationsbehandlung</h3>
                <ul>
                    <li><strong>Normovolämie, Normokapnie, Normoxie:</strong> (SpO₂: 94-98%), <strong>Normotension</strong> (RR > 100 mmHg bzw. MAD ≥ 65 mmHg) anstreben.</li>
                    <li><strong>Sedierung:</strong> (z.B. 5-10 mg Midazolam und 20 µg Sufentanil i.v.), wenn Patient nicht unmittelbar nach ROSC erwacht bzw. wenn intubiert.</li>
                    <li><strong>Gezieltes Temperaturmanagement:</strong> (32-36°C über ≥ 24 h; Fieber ≥ 72 h vermeiden), außer Patient erwacht unmittelbar nach ROSC.</li>
                </ul>`
            },
            {
                title: "Anleitung zur CPR",
                html: `<h3>Indikation & Kontraindikation</h3>
                <ul>
                    <li><strong>Indikation:</strong> Herz-Kreislauf-Stillstand (ohne spezielle Umstände).</li>
                    <li><strong>Kontraindikationen:</strong> Sichere Todeszeichen (Totenflecken, Leichenstarre, Fäulnis), CPR entspricht nicht mutmaßlichem Patientenwillen (DNR-Order). Im Zweifel: Reanimation einleiten!</li>
                </ul>
                <h3>Vorgehen</h3>
                <ul>
                    <li><strong>Thoraxkompressionen:</strong> Druckpunkt untere Hälfte des Brustbeins, Drucktiefe: 5-6 cm, Frequenz: 100-120/min. Vollständige Entlastung.</li>
                    <li><strong>Reanimationsalarm auslösen / Hilfe holen.</strong></li>
                    <li><strong>Defibrillator anschließen:</strong> Patches antero-lateral oder antero-posterior.</li>
                    <li><strong>Rhythmusanalyse (alle 2 Min):</strong>
                        <ul>
                            <li><strong>Defibrillierbarer Rhythmus (VF/pVT):</strong> Schock mit 150 Joule biphasisch. Nach 3. Schock: 1 mg Adrenalin + 300 mg Amiodaron i.v., dann Adrenalin alle 3-5 Min. Nach 5. Schock: 150 mg Amiodaron i.v.</li>
                            <li><strong>Nicht-defibrillierbarer Rhythmus (Asystolie/PEA):</strong> 1 mg Adrenalin i.v. sofort, dann alle 3-5 Min.</li>
                        </ul>
                    </li>
                    <li><strong>Atemwegsmanagement:</strong> Beutel-Maske-Beatmung (15 l O₂), dann SGA (Larynxmaske/tubus) oder endotracheale Intubation (max. 5 s Unterbrechung).</li>
                    <li><strong>Kapnometrie:</strong> etCO₂-Überwachung obligat.</li>
                </ul>
                <h3>Teamaufteilung (so früh wie möglich)</h3>
                <ol>
                    <li><strong>Teamleader:</strong> Überblick, Qualitätskontrolle, Zeitmanagement, Protokoll.</li>
                    <li><strong>Atemweg:</strong> Beatmung, Intubation, Kapnometrie.</li>
                    <li><strong>Kompressor:</strong> Thoraxkompressionen (Wechsel alle 2 Min).</li>
                    <li><strong>Defibrillator:</strong> Laden, Schockabgabe, Rhythmusansage.</li>
                    <li><strong>i.v.-Zugang / Medikamente:</strong> Aufziehen und Applikation nach Ansage.</li>
                    <li><strong>BGA und POCUS.</strong></li>
                </ol>
                <h3>Beendigung der CPR</h3>
                <ul>
                    <li><strong>Erfolgreich:</strong> ROSC (Lebenszeichen, signifikanter etCO₂-Anstieg).</li>
                    <li><strong>Frustran:</strong> Individuelle Entscheidung unter Berücksichtigung von: anhaltende Asystolie trotz 20 min CPR ohne reversible Ursache, unbeobachteter Stillstand mit initial nicht schockbarem Rhythmus, schwere Komorbiditäten. (Kriterien wie Pupillengröße oder etCO₂-Wert allein sind nicht ausreichend!)</li>
                </ul>`
            },
            {
                title: "Spezielle Umstände",
                html: `<div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Umstand</th>
                                <th>Maßnahmen</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Traumatischer Arrest</strong></td>
                                <td>1. Blutstillung (Druckverband, Tourniquet)<br>2. Atemweg/hochdosiert O₂<br>3. Beidseitige Thorakostomie<br>4. Notfallthorakotomie (Clamshell) bei Indikation<br>5. Beckenschlinge<br>6. Blutprodukte / Massivtransfusion</td>
                            </tr>
                            <tr>
                                <td><strong>Hypothermie</strong></td>
                                <td>T < 30°C: max. 3 Defibrillationsversuche, kein Adrenalin.<br>T 30-35°C: Adrenalinintervalle verdoppeln (alle 6-10 min).<br>T ≥ 35°C: Standard-CPR.</td>
                            </tr>
                            <tr>
                                <td><strong>Beobachteter Stillstand (Monitor)</strong></td>
                                <td>Bei initialem Kammerflimmern bis zu drei konsekutive Defibrillationen möglich.</td>
                            </tr>
                            <tr>
                                <td><strong>Schwangere</strong></td>
                                <td>Uterus nach links schieben (bei Fundus über Nabel).<br>Sofortige Hinzuziehung Gyn/Neo.<br><strong>Perimortale Sectio</strong> erwägen wenn CPR > 4 min (bei SSW > 20).</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Standard-Abfrage (Notarzt-Übergabe)",
                html: `<ol>
                    <li>Name, Geburtsdatum des Patienten?</li>
                    <li>Laufende CPR? ROSC? Hämodynamische Stabilität?</li>
                    <li>Sicherer Atemweg? Sedierung?</li>
                    <li>Initialer Rhythmus?</li>
                    <li>Hinweise auf ACS? (12-Kanal-EKG mit STEMI/Äquivalenten?)</li>
                    <li>Hinweise auf Sturz oder Trauma?</li>
                    <li>Komorbidität?</li>
                    <li>Eintreffzeitpunkt?</li>
                    <li>Name des Notarztes bzw. Rettungsmittels?</li>
                </ol>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li>Qualitativ hochwertige Thoraxkompressionen und frühe Defibrillation sind entscheidend für CPR-Erfolg.</li>
                    <li><strong>No-flow-time so kurz wie möglich:</strong> Kompressionen weiterführen während Defi lädt, Intubation ohne Unterbrechung.</li>
                    <li>Die reversiblen Ursachen ("H und HITS") müssen aktiv gesucht und behandelt werden.</li>
                    <li>Adrenalin sollte in standardisierter Dosis aufgezogen werden (1 mg mit 9 ml NaCl in 10 ml Spritze).</li>
                    <li><strong>Lidocain</strong> stellt gemäß aktueller Leitlinie eine Alternative zu Amiodaron dar (100 mg bwz. 50 mg).</li>
                    <li> Awareness während CPR beachten (ggf. Sedierung fortführen).</li>
                    <li>Konstruktives Debriefing nach jeder Reanimation mit allen Beteiligten.</li>
                </ul>`
            },
            {
                title: "Disposition",
                html: `<ul>
                    <li><strong>ICU</strong> (ggf. zuvor Herzkatheterlabor, OP oder CT).</li>
                </ul>`
            }
        ],
        stand: "03/23",
        sources: `Deutscher Rat für Wiederbelebung – German Resuscitation Council e. V. (GRC). Reanimation 2021 – Leitlinien kompakt. – Soar J et al. Erweiterte lebensrettende Maßnahmen für Erwachsene. Notfall Rettungsmed 2021. – Lott C et al. Kreislaufstillstand unter besonderen Umständen. Notfall Rettungsmed 2021. – Nolan JP et al. Postreanimationsbehandlung. Notfall Rettungsmed 2021. – Kersten C et al. Strategien zur Postreanimationsbehandlung ... Notaufnahme up2date 2022. – Fachinformationen der Arzneimittel.`
    });
})();