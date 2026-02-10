(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "akuter-gichtanfall",
        title: "Akuter Gichtanfall",
        category: "Sonstige",
        catKey: "sonst",
        sections: [
            {
                title: "Definition",
                html: `<p><strong>Akuter Gichtanfall:</strong> Rasch einsetzende Gelenkentzündung, die durch Ablagerung von Harnsäurekristallen ausgelöst wird.</p>`
            },
            {
                title: "Ursachen",
                html: `<ul>
                    <li><strong>Hyperurikämie</strong></li>
                    <li><strong>Risikofaktoren für Hyperurikämie:</strong> Alter, männliches Geschlecht, metabolisches Syndrom, Medikamente (z.B. Thiazide), etc.</li>
                    <li><strong>Triggerfaktoren für Gichtanfall:</strong> Alkoholexzess, Festessen, Fasten, Beginn einer harnsäuresenkenden Therapie, etc.</li>
                </ul>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li><strong>Rasche Entwicklung:</strong> i.d.R. &lt; 24 h ohne Prodromi einer sehr schmerzhaften Monarthritis, die sich klinisch als gerötetes, geschwollenes, überwärmtes, berührungsempfindliches und bewegungseingeschränktes Gelenk präsentiert.</li>
                    <li><strong>Manifestationsorte:</strong>
                        <ul>
                            <li><strong>60% Großzehengrundgelenk</strong> (“Podagra”)</li>
                            <li><strong>15% Sprunggelenk/Fußwurzel</strong></li>
                            <li><strong>10% Kniegelenk</strong> (“Gonagra”)</li>
                            <li><strong>5% Zehengelenke</strong></li>
                            <li><strong>5% Fingergelenke</strong> (“Chiragra”), insbesondere Daumengrundgelenk, Handgelenk, Ellenbogengelenk</li>
                        </ul>
                    </li>
                    <li>ggf. <strong>Gichttophi</strong> von früheren Gichtanfällen (z.B. an Ellenbogen, Fingern, Ohren)</li>
                    <li>ggf. systemische Entzündungszeichen wie Fieber und erhöhte Infektwerte</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur)</li>
                    <li><strong>Labor:</strong> BB, CRP, NW, Harnsäure, ggf.: LDH, GOT, GPT, γ-GT, HbA1c, Lipidprofil</li>
                    <li><strong>Anamnese:</strong> Symptome? Beginn? Gichtanfälle bekannt? Vorerkrankungen? Medikamente? Trauma? OP oder intraartikuläre Injektion? Prothesen?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Gelenk mit Kardinalzeichen der Entzündung? Ein Gelenk oder mehrere betroffen? Gichttophi? Offene Stellen?</li>
                    <li><strong>ggf. Gelenkpunktion:</strong> s. Gichtrechner; Goldstandard zur Diagnosesicherung; bei V.a. septische Arthritis umgehend durchzuführen!</li>
                    <li><strong>ggf. weitere Diagnostik:</strong> z.B. Gelenksonografie, Röntgen, Dual-Energy-CT</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p>Bei diagnostischer Unsicherheit oder Vorliegen von <strong>Red Flags</strong> wie Trauma, Z.n. OP bzw. intraartikulärer Injektion, Immunsuppression oder akut eingetretenem schlechten Allgemeinzustand rheumatologische bzw. orthopädische Mitbeurteilung!</p>
                </div>`
            },
            {
                title: "Gichtrechner",
                html: `<p><em>adaptiert von Kienhorst et al. 2015</em></p>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Kriterium</th>
                                <th>Punkte</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Männliches Geschlecht</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Früherer Arthritisanfall</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Beginn innerhalb eines Tages</td>
                                <td>0,5</td>
                            </tr>
                            <tr>
                                <td>Rötung des Gelenkes</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>Befall des Metatarsophalangeal-Gelenk-I</td>
                                <td>2,5</td>
                            </tr>
                            <tr>
                                <td>Hypertonie oder Herz-Kreislauferkrankung</td>
                                <td>1,5</td>
                            </tr>
                            <tr>
                                <td>Serumharnsäure &gt; 5,88 mg/dl (&gt; 350 µmol/l)</td>
                                <td>3,5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="callout callout-hinweis">
                    <ul>
                        <li><strong>&le; 4 Punkte:</strong> Keine Gicht, DD bedenken (septische Arthritis, etc.), weitere Diagnostik (z.B. Gelenkpunktion) entsprechend der Verdachtsdiagnose indiziert.</li>
                        <li><strong>&gt; 4 und &lt; 8 Punkte:</strong> Unklar, Gelenkpunktion und Untersuchung des Aspirats, u.a. mittels Polarisationsmikroskop.</li>
                        <li><strong>&ge; 8 Punkte:</strong> Diagnose Gicht kann gestellt werden.</li>
                    </ul>
                </div>`
            },
            {
                title: "Therapie",
                html: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li>Gelenk hochlagern und kühlen</li>
                    <li>Patienten über Lebensstilmaßnahmen zur Rezidivprophylaxe aufklären (z.B. Reduktion des Alkoholkonsums und gesüßter Getränke)</li>
                    <li>Bei fehlender Beschwerdebesserung innerhalb von 24-72 h: Re-Evaluation mit ggf. Therapieanpassung</li>
                </ul>
                <h3>Medikamentöse Therapie</h3>
                <ul>
                    <li>Möglichst rascher Beginn der medikamentösen Therapie (am besten &le; 12-24 h nach Schmerzbeginn)</li>
                    <li>Therapiedauer bis Ende der Symptomatik, jedoch maximal 2 Wochen</li>
                    <li>Die Wahl der Medikamente richtet sich nach den Komorbiditäten bzw. Kontraindikationen (Niereninsuffizienz, Ulcera, etc.)</li>
                    <li>Drei First-Line-Medikamente kommen alleine oder bei fehlender Besserung kombiniert zum Einsatz:
                        <ul>
                            <li><strong>NSAR in max. Dosierung:</strong> z.B. Ibuprofen 800 mg 1-1-1 p.o. oder Naproxen 500 mg 1-0-1 p.o. (Kein ASS, da Harnsäure-steigernd)
                                <div class="callout callout-cave"><p><strong>CAVE:</strong> Nicht bei GFR &lt; 30 ml/min, schweren kardiovaskulären Erkrankungen oder gastroduodenalen Ulcera.</p></div>
                            </li>
                            <li><strong>Glukokortikoide:</strong> z.B. Prednisolon 30 mg 1-0-0 p.o. für 5 Tage
                                <div class="callout callout-cave"><p><strong>CAVE:</strong> Verschlechterung der Blutzuckerwerte bei Patienten mit Diabetes mellitus.</p></div>
                            </li>
                            <li><strong>Colchicin:</strong> d1: 3-4x 0,5 mg p.o., d2+d3: 2-3x 0,5 mg p.o., ab d4: 2x 0,5 mg p.o. (maximal 6 mg/Gichtanfall)
                                <div class="callout callout-cave"><p><strong>CAVE:</strong> Nicht bei GFR &lt; 30 ml/min, nicht bei Einnahme von CYP3A4-Hemmern (z.B. Clarithromycin, Verapamil, Statine). Diarrhoen als häufige Nebenwirkung.</p></div>
                            </li>
                        </ul>
                    </li>
                </ul>
                <h3>Sonstiges</h3>
                <ul>
                    <li>Medikamente absetzen/austauschen, die Harnsäurespiegel erhöhen (z.B. Losartan statt Thiazid zur antihypertensiven Therapie einsetzen)</li>
                    <li>Bei Gabe von NSAR/Glukokortikoiden begleitende PPI-Gabe (z.B. 40 mg Pantoprazol) erwägen</li>
                    <li>Eine harnsäuresenkende Therapie z.B. mit Allopurinol sollte begonnen werden bei &ge; 1 stark einschränkendem/beeinträchtigendem Gichtanfall oder &ge; 2 Gichtanfällen/Jahr oder Uratablagerungen (Tophi, Nephrolithiasis)</li>
                </ul>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li>Bedenke mögliche Differentialdiagnosen: Septische Arthritis, Trauma, CPPD-Arthritis, aktivierte Arthrose, reaktive Arthritis.</li>
                    <li>Die <strong>septische Arthritis</strong> stellt die gefährlichste Differentialdiagnose dar und muss rasch erkannt (Gelenkpunktion, Analyse und Kultivierung des Aspirats, Abnahme von &ge; 2 Paar Blutkulturen peripher) und adäquat therapiert werden (Antibiotika, ggf. Arthroskopie, OP, etc.).</li>
                    <li>Der Harnsäurespiegel muss im Anfall <strong>nicht zwingend erhöht sein</strong> (durch Ausfällung von Harnsäure sinkt die Harnsäure oft ab).</li>
                </ul>`
            },
            {
                title: "Disposition",
                html: `<ul>
                    <li>i.d.R. ambulantes Procedere mit hausärztlicher Anbindung</li>
                </ul>`
            }
        ],
        stand: "10/24",
        sources: `Deutsche Gesellschaft für Rheumatologie und Klinische Immunologie e.V. (DGRh). Diagnostik und Therapie der Gicht. Version 2024. Verfügbar unter: https://register.awmf.org/de/leitlinien/detail/060-005<br>
        FitzGerald JD et al. 2020 American College of Rheumatology Guideline for the Management of Gout. Arthritis Care Res (Hoboken). 2020 Jun;72(6):744-760.<br>
        Schlesinger N et al. Diagnosis and Treatment of Acute Gout at a University Hospital Emergency Department. Open Rheumatol J. 2015 Jun 12;9:21-6.<br>
        Abhishek A et al. Gout - a guide for the general and acute physicians. Clin Med (Lond). 2017 Feb;17(1):54-59.<br>
        Engel B et al. Therapieoptionen bei Gicht. Dtsch Arztebl Int 2017; 114: 215-22.<br>
        Tausche AK. Gicht. Internist 62, 513–525.<br>
        S2e-Leitlinie der DEGAM für die primärärztliche Versorgung. Häufige Gichtanfälle und chronische Gicht. Gültig bis 31.03.2024 (2021).<br>
        Herold G et al. Innere Medizin 2019, S.705 ff.<br>
        Kienhorst LBE et al. The validation of a diagnostic rule for gout without joint fluid analysis: a prospective study Rheumatology (Oxford). 2015 Apr;54(4):609-14.<br>
        Lee K-H et al. Application of a Novel Diagnostic Rule in the Differential Diagnosis between Acute Gouty Arthritis and Septic Arthritis. J Korean Med Sci. 2015 Jun;30(6):700-4.<br>
        Long B et al. Evaluation and Management of Septic Arthritis and its Mimics in the Emergency Department. West J Emerg Med. 2019 Mar;20(2):331-341.<br>
        Fachinformationen der genannten Arzneimittel, Stand 12/22.`
    });
})();