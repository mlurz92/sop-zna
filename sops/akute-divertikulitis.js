// SOP: Akute Divertikulitis
// Kategorie: Gastroenterologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "akute-divertikulitis",
        title: "Akute Divertikulitis",
        category: "Gastroenterologie",
        catKey: "gi",
        sections: [
            {
                title: "Definition",
                html: `<ul>
                    <li><strong>Akute Divertikulitis:</strong> Akute Entzündung von Divertikeln</li>
                    <li><strong>Unkomplizierte Divertikulitis:</strong> Divertikulitis ohne Perforation</li>
                    <li><strong>Komplizierte Divertikulitis:</strong> Divertikulitis mit Perforation (+/- Abszess/Fistel)</li>
                </ul>`
            },
            {
                title: "Ursachen",
                html: `<ul>
                    <li>Verstopfung des Divertikelhalses durch Stuhl mit konsekutiver Entzündung</li>
                    <li><strong>Risikofaktoren:</strong> Alter > 50 Jahre, Lebensstil, Multimorbidität, Komorbiditäten (z.B. Hypothyreose, DM, Immunsuppression), etc.</li>
                </ul>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li><strong>Akute Schmerzen im linken Unterbauch</strong> („Linksappendizitis“), i.d.R. Schmerzzunahme bei Bewegung bzw. Erschütterung</li>
                    <li>Schmerzlokalisation auch suprapubisch oder im rechten Unterbauch möglich (z.B. bei Sigma elongatum oder Zökumdivertikulitis)</li>
                    <li>Zeichen der systemischen Inflammation (Fieber, erhöhte Entzündungswerte)</li>
                    <li>ggf. unspezifische Symptome (z.B. rektaler Luftabgang, spontane Stuhlentleerung, Übelkeit, Obstipation, Diarrhoe)</li>
                    <li>ggf. Zeichen von Komplikationen (z.B. akutes Abdomen bei Perforation mit Peritonitis, Pneumaturie bei kolovesikaler Fistel)</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p><strong>Typische Trias:</strong> Schmerzen im linken Unterbauch, Fieber, erhöhte Entzündungswerte!</p>
                </div>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur)</li>
                    <li>1x venöser Zugang</li>
                    <li><strong>Labor:</strong> BB, CRP, ggf.: E'lyte, NW, Bilirubin, Gerinnung, TSH, PCT, β-HCG</li>
                    <li><strong>Anamnese:</strong> Schmerzbeginn/-qualität/-intensität/-ausstrahlung? Provokationsfaktoren? Begleitsymptome? Fieber? Letzter Stuhlgang? Hämatochezie? Dysurie? Pneumaturie? Medikamente? Immunsuppression? Stattgehabte Divertikulitis? Vorerkrankungen? Abdominelle Voroperationen?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Schonhaltung? Bruchpforten? Hernien? DG? Abdomineller DS? Abwehrspannung? Palpable Walze im linken Unterbauch?</li>
                    <li><strong>Urin-Status</strong> (Erythrozyten? Leukozyten? Nitrit?) + ggf. Urinkultur</li>
                    <li><strong>POCUS:</strong> Echoreicher Kuppenreflex mit Schallschatten? Echoarme, hypervaskularisierte Wand mit echoreicher Umgebung? Perforation? Abszess? Ileuszeichen?</li>
                    <li>ggf. <strong>CT-Abdomen + KM</strong> (Divertikulitis? Hinweise für Komplikationen? Differentialdiagnosen?), ggf. MRT-Abdomen (junge Patienten, Schwangere)</li>
                    <li>ggf. <strong>chirurgische Mitbeurteilung</strong> (immer bei akutem Abdomen und/oder bei Divertikulitis ab CDD Stadium ≥ Typ 2 b)</li>
                    <li>ggf. gynäkologische/urologische Mitbeurteilung z.A. von Differentialdiagnosen (EUG, Adnexitis, Hodentorsion, Nephrolithiasis, etc.)</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p>Bei akutem Abdomen sofortige interdisziplinäre Beurteilung!</p>
                </div>`
            },
            {
                title: "Stadieneinteilung (CDD)",
                html: `<h3>Stadieneinteilung der Divertikelkrankheit nach CDD (Classification of Diverticular Disease)</h3>
                <div class="table-wrap">
                    <table>
                        <tbody>
                            <tr><td><strong>Typ 0</strong></td><td>Asymptomatische Divertikulose</td></tr>
                            <tr><td><strong>Typ 1</strong></td><td><strong>Unkomplizierte Divertikulitis</strong><br>a: Divertikulitis ohne phlegmonöse Umgebungsreaktion<br>b: Divertikulitis mit phlegmonöser Umgebungsreaktion</td></tr>
                            <tr><td><strong>Typ 2</strong></td><td><strong>Komplizierte Divertikulitis</strong><br>a: Gedeckte Perforation mit Mikroabszess (≤ 3 cm)<br>b: Gedeckte Perforation mit Makroabszess (> 3 cm)<br>c: Freie Perforation</td></tr>
                            <tr><td><strong>Typ 3</strong></td><td>Chronische Divertikelkrankheit</td></tr>
                            <tr><td><strong>Typ 4</strong></td><td>Divertikelblutung</td></tr>
                        </tbody>
                    </table>
                </div>
                <p><em>modifiziert nach S3 Leitlinie</em></p>`
            },
            {
                title: "Therapie",
                html: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li>Stabilisierung der Vitalfunktionen gemäß ABCDE-Schema</li>
                    <li>Patienten nüchtern lassen (bis Diagnose und Therapie geklärt sind)</li>
                    <li><strong>Analgetische Therapie:</strong> z.B. Paracetamol 1 g und/oder Metamizol 1–2,5 g und/oder Piritramid 3,75–15 mg als Kurzinfusion i.v.</li>
                </ul>
                <h3>Antibiotische Therapie</h3>
                <ul>
                    <li><strong>Indikation:</strong>
                        <ul>
                            <li><strong>Typ 1:</strong> bei Vorliegen von <strong>Risikoindikatoren</strong> (hohe[s] Fieber/Entzündungswerte, Sepsis, schlechter AZ, Immunsuppression, Komorbidität, NSAR)</li>
                            <li><strong>Typ 2:</strong> immer</li>
                        </ul>
                    </li>
                    <li><strong>Medikamente:</strong>
                        <ul>
                            <li><strong>Amoxicillin/Clavulansäure</strong> 875/125 mg 1-1-1 p.o. für 4-7 Tage (Typ 1, klinisch stabiler Zustand)</li>
                            <li><strong>Cefuroxim</strong> 1,5 g 1-1-1 i.v. + <strong>Metronidazol</strong> 500 mg 1-1-1 i.v. für 4-7 Tage (Typ 2 oder Typ 1 mit Sepsis oder schlechtem AZ)</li>
                        </ul>
                    </li>
                </ul>
                <h3>Interventionelle Therapie bzw. Operation</h3>
                <ul>
                    <li><strong>Indikation:</strong>
                        <ul>
                            <li><strong>Typ 2 b:</strong> CT- oder sonografisch gesteuerte Abszessdrainage erwägen</li>
                            <li><strong>Typ 2 c:</strong> Notfall-OP innerhalb von 6 h</li>
                        </ul>
                    </li>
                </ul>
                <div class="callout callout-hinweis">
                    <p>Bei Stadium 2 b muss eine Abszessdrainage erwogen werden, bei Stadium 2 c muss eine Notfall-OP erfolgen!</p>
                </div>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li>Für die Diagnosestellung bedarf es eines bildmorphologischen Nachweises (POCUS oder CT-Abdomen).</li>
                    <li>Bei fehlender sonografischer Beurteilbarkeit → CT-Abdomen (ggf. MRT, z.B. bei Schwangeren oder jungen Patienten).</li>
                    <li>Die korrekte Stadien-Einordnung der Divertikulitis ist entscheidend für eine angemessene Therapie und Disposition.</li>
                </ul>`
            },
            {
                title: "Disposition",
                html: `<h3>Kriterien für ambulantes Procedere</h3>
                <p>Klinische Stabilität, sichere Medikamentenaufnahme, suffiziente Schmerzkontrolle, keine relevanten Komorbiditäten, keine Immunsuppression, Unterstützung im sozialen Umfeld & adäquates Follow-up.</p>
                <ul>
                    <li><strong>Ambulant, engmaschige Kontrolle beim Hausarzt:</strong><br>Unkomplizierte Divertikulitis (Typ 1) und alle Kriterien für ambulantes Procedere erfüllt.</li>
                    <li><strong>Stationäre Aufnahme:</strong><br>Unkomplizierte Divertikulitis (Typ 1), aber Kriterien für ambulantes Procedere nicht erfüllt <strong>oder</strong> komplizierte Divertikulitis (Typ 2).</li>
                    <li><strong>Notfall-OP innerhalb von 6 h:</strong><br>Komplizierte Divertikulitis Typ 2 c.</li>
                </ul>`
            }
        ],
        stand: "02/24",
        sources: `Herold G et al. Innere Medizin 2024.<br>S3-Leitlinie Divertikelkrankheit/Divertikulitis (DGVS/DGAV), Stand 10/2021.`
    });
})();