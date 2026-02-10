(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "synkope",
        title: "Synkope",
        category: "Leitsymptom",
        catKey: "leit",
        stand: "12/22",
        sections: [
            {
                title: "Definition",
                html: `<ul>
                    <li><strong>Synkope:</strong> Vorübergehender Bewusstseinsverlust infolge einer zerebralen Hypoperfusion, gekennzeichnet durch rasches Einsetzen, kurze Dauer und spontane, vollständige Erholung.</li>
                    <li><strong>Präsynkope:</strong> Prodromalstadium einer Synkope (Schwarzwerden vor den Augen, Benommenheit, Schweißausbruch, etc.).</li>
                </ul>`
            },
            {
                title: "Ursachen",
                html: `<h3>Kardial</h3>
                <ul>
                    <li><strong>Strukturell kardial:</strong> Aortenklappenstenose, akuter Myokardinfarkt, HOCM, etc.</li>
                    <li><strong>Rhythmogen:</strong> Sick-Sinus-Syndrom, AV-Block II°-III°, Bradyarrhythmia absoluta, supra- und ventrikuläre Tachykardie, etc.</li>
                    <li><strong>Kardiopulmonal und große Gefäße:</strong> Aortendissektion, Lungenarterienembolie, etc.</li>
                </ul>
                <h3>Reflex-Synkope</h3>
                <ul>
                    <li><strong>Vasovagal:</strong> im Stehen, seltener im Sitzen oder wegen emotionalem Stress wie Furcht, Schmerz, Geruch, Geräusch, Phobie.</li>
                    <li><strong>Situativ:</strong> Miktion, Defäkation, Husten, Lachen, nach körperlicher Anstrengung, etc.</li>
                    <li><strong>Karotissinus-Syndrom:</strong> bei Kopfdrehung, Rasieren, Tumor im Halsbereich, etc.</li>
                    <li><strong>Nichtklassische Form:</strong> ohne Prodromi oder ohne ersichtlichen Trigger.</li>
                </ul>
                <h3>Orthostatisch</h3>
                <ul>
                    <li><strong>Medikamentös:</strong> Vasodilatatoren, Diuretika, Antidepressiva.</li>
                    <li><strong>Volumenmangel:</strong> Diarrhoe, Erbrechen, Blutung, etc.</li>
                    <li><strong>Neurogen:</strong> Morbus Parkinson, Polyneuropathie etc.</li>
                </ul>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li>Kurzzeitiger Bewusstseinsverlust mit spontaner vollständiger Erholung.</li>
                    <li>ggf. Verletzungen als Folge eines Sturzes.</li>
                    <li>ggf. Symptome einer zugrundeliegenden Erkrankung (z.B. Dyspnoe bei LAE, Teerstuhl bei GI-Blutung).</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li><strong>Ersteindruck + ABCDE + Vitalparameter</strong> (RR, Puls, SpO₂, AF, Temperatur).</li>
                    <li><strong>1x venöser Zugang.</strong></li>
                    <li><strong>Venöse BGA:</strong> Hb? E'lyte? Glukose?</li>
                    <li><strong>Labor:</strong> BB, CRP, E'lyte, NW, ggf.: hs-Troponin, D-Dimere, NT-proBNP.</li>
                    <li><strong>12-Kanal-EKG:</strong> Herzrhythmusstörung? Ischämiezeichen? Blockbild? Brugada-Muster? Hypertrophiezeichen? QTc-Zeit? Delta-/Epsilon-Welle?</li>
                    <li><strong>(Fremd-)Anamnese:</strong> Situation? Rasche Re-Orientierung? Provokationsfaktoren? Körperposition? Prodromi? Erstereignis? Hochrisikomerker? Schmerzen? Palpitationen? Dyspnoe? Medikamente? Vorerkrankungen? Herzerkrankung? Plötzlicher Herztod in Familienanamnese?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Systolikum? Fokal-neurologisches Defizit? Sturzfolgen? Blut/Teerstuhl in DRU?</li>
                    <li><strong>Orthostase-Test:</strong> minütliche Messung von Blutdruck und Herzfrequenz im Liegen und während aktiven Stehens über 3 min.</li>
                    <li><strong>POCUS:</strong> Strukturelle Herzerkrankung? Klappenvitien? LV-EF? Akute Rechtsherzbelastungszeichen? Dissektionsmembran? Freie Flüssigkeit?</li>
                    <li><strong>ggf. weiterführende Diagnostik</strong> bei Hinweisen für andere akute Erkrankung.</li>
                </ul>`
            },
            {
                title: "Therapie",
                html: `<h3>Kardiale Synkope oder Synkope als Symptom einer anderen akuten Erkrankung</h3>
                <ul>
                    <li>Kausale Behandlung der Grunderkrankung.</li>
                </ul>
                <h3>Reflex-Synkope oder orthostatische Synkope ohne Anhalt für akute Erkrankung</h3>
                <ul>
                    <li><strong>Kausale Behandlung:</strong> Reduktion der Antihypertensiva, Volumengabe, etc.</li>
                    <li><strong>Aufklärung, Beruhigung und Information über präventive Maßnahmen:</strong>
                        <ul>
                            <li>Langsamer Lagewechsel.</li>
                            <li>Ausreichende Salz- und Flüssigkeitszufuhr.</li>
                            <li>Tragen von Kompressionsstrümpfen.</li>
                            <li>Isometrische Manöver (z.B. Beine kreuzen, Hände ineinander verhaken und ziehen).</li>
                        </ul>
                    </li>
                </ul>`
            },
            {
                title: "Risikostratifizierung (Risikomerkmale)",
                html: `<div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Kategorie</th>
                                <th>Hochrisiko (V.a. kardial/ernst)</th>
                                <th>Intermediär</th>
                                <th>Niedrigrisiko (V.a. Reflex/Ortho)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Anamnese</strong></td>
                                <td>Plötzliche Palpitationen unmittelbar vor Synkope; Belastung oder im Liegen; Neu einsetzende Atemnot, Thorax-, Abdominal- oder Kopfschmerz.</td>
                                <td>Keine Warnsymptome oder kurze (< 10 s) Prodromi; Plötzlicher Herztod in jungen Jahren in Familienanamnese; Synkope im Sitzen.</td>
                                <td>Typische Prodromi (> 10s) wie Übelkeit, Schwitzen; Typische Charakteristika einer Reflex- oder orthostatischen Synkope.</td>
                            </tr>
                            <tr>
                                <td><strong>Vorgeschichte</strong></td>
                                <td>Schwere kardiale Erkrankung (Herzinsuffizienz, niedrige LVEF oder früherer Myokardinfarkt).</td>
                                <td>-</td>
                                <td>Keine kardiale Erkrankung; Jahrelang rezidivierende Synkopen mit identischem Charakter.</td>
                            </tr>
                            <tr>
                                <td><strong>Untersuchung</strong></td>
                                <td>Unklarer RR-systolisch < 90 mmHg; Verdacht auf GI-Blutung (DRU); Bradykardie < 40/min im Wachzustand; Undiagnostiziertes Systolikum.</td>
                                <td>-</td>
                                <td>Normalbefund.</td>
                            </tr>
                            <tr>
                                <td><strong>EKG</strong></td>
                                <td>Akute Ischämiezeichen; AV-Block II° Mobitz oder AV-Block III°; HF < 40/min oder Sinusarrest > 3s; Kompletter Schenkelblock; Hypertrophiezeichen; Ventrikuläre Tachykardie; Schrittmacherfehlfunktion; Brugada-Muster; QTc > 460 ms.</td>
                                <td>AV-Block II° Wenckebach; AV-Block I° mit deutlich verlängertem PR; Asymptomatische Bradykardie (40-50/min); Paroxysmales SVT/VHF; QRS-Komplex mit Präexzitation; Verkürzte QTc-Zeit (< 340 ms); Atypische Brugada-Muster; Negative T-Wellen rechtspräkordial/Epsilon-Welle (ARVC).</td>
                                <td>Normalbefund.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li>Präsynkope und Synkope haben den gleichen Pathomechanismus, die gleiche Prognose und erfordern die gleiche Abklärung.</li>
                    <li><strong>Rasche Reorientierung</strong> ist das wichtigste Abgrenzungsmerkmal zum Krampfanfall.</li>
                    <li>Niedrigrisikokonstellation: Vitalparameter, Anamnese, körperliche Untersuchung und 12-Kanal-EKG sind alle ausreichend/unauffällig.</li>
                    <li>Typische <strong>„PPP“-Synkopen</strong> (Prodromi und Provokationsfaktor vorhanden, Position = Stehen bzw. Lagewechsel) sind meist benigner Natur.</li>
                </ul>`
            },
            {
                title: "Disposition",
                html: `<div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Risikoprofil</th>
                                <th>Empfohlene Disposition</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Niedrigrisikomerkmale</strong></td>
                                <td>Ambulantes Procedere</td>
                            </tr>
                            <tr>
                                <td><strong>Intermediäre Risikomerkmale oder rezidivierende Synkopen</strong></td>
                                <td>Einzelfallentscheidung</td>
                            </tr>
                            <tr>
                                <td><strong>Hochrisikomerkmale</strong></td>
                                <td>Stationäre Aufnahme, häufig Überwachungsstation (IMC/ICU)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            }
        ],
        sources: `Fleischmann T et al. Fälle Klinische Notfallmedizin: Die 100 wichtigsten Diagnosen, 2018.<br>
        D'Ascenzo F et al. Incidence, etiology and predictors of adverse outcomes in patients presenting to the ED with syncope. Int J Cardiol. 2013.<br>
        ESC Guidelines for the diagnosis and management of syncope (2018).<br>
        Bruno RR et al. Syncope oder „...auf einmal war ich weg“... Notaufnahme up2date 2019.<br>
        Brignole M et al. Practical Instructions for the 2018 ESC Guidelines for the diagnosis and management of syncope. Eur Heart J. 2018.`
    });
})();