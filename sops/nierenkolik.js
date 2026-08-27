(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "nierenkolik",
        title: "Nierenkolik",
        category: "Nephrologie",
        catKey: "nephro",
        date: "12/22",
        sections: [
            {
                title: "Definition",
                content: "<strong>Nierenkolik:</strong> Plötzlich einsetzende, krampfartige Schmerzen in der Flankengegend aufgrund einer Ureterobstruktion."
            },
            {
                title: "Ursachen",
                content: `<ul>
                    <li><strong>Häufig: Urolithiasis</strong> (Kalziumoxalat-/phosphat-, Urat-, Struvitsteine).</li>
                    <li><strong>Selten:</strong> Blutkoagel, Lymphadenopathie, etc.</li>
                </ul>`
            },
            {
                title: "Symptome",
                content: `<ul>
                    <li><strong>Plötzliche, stärkste, krampfartige Schmerzen in der Flankengegend</strong> (häufig mit Ausstrahlung in Unterbauch, Leisten, Hoden bzw. Labien).</li>
                    <li>Hämaturie, Dysurie.</li>
                    <li>Häufig Unruhe, vegetative Symptomatik (Schwitzen, Blässe, Übelkeit).</li>
                    <li>ggf. Bild eines akuten Abdomens mit paralytischem Ileus.</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                content: `<ul>
                    <li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur).</li>
                    <li>1x venöser Zugang.</li>
                    <li><strong>Labor:</strong> BB, CRP, E'lyte inklusive Kalzium, NW, Gerinnung, Albumin, Harnsäure, ggf. β-HCG.</li>
                    <li><strong>Anamnese:</strong> Symptome? Beginn? Erstereignis? Hämaturie? Dysurie? Harnsteine? Familienanamnese? Vorerkrankungen? Medikamente?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Flankenklopfschmerz? Hinweise für Differentialdiagnosen wie akutes Aortensyndrom, Hodentorsion.</li>
                    <li><strong>Urin-Status:</strong> pH? Hämaturie? Hinweise auf Harnwegsinfektion? + ggf. <strong>Urinkultur, Urinsieb</strong>.</li>
                    <li><strong>POCUS:</strong> Harnsteine? Harnstau? Nierenabszess? Hinweise für Differentialdiagnosen wie rupturiertes Bauchaortenaneurysma.</li>
                    <li><strong>ggf. natives CT-Abdomen:</strong> ("Low-Dose-CT" bzw. "Stein-CT").</li>
                    <li><strong>ggf. weitere Diagnostik z.A. von Differentialdiagnosen:</strong> 12-Kanal-EKG bei V.a. Myokardinfarkt, CTA bei V.a. akutes Aortensyndrom, etc.</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p>Rücksprache mit Urologie!</p>
                </div>`
            },
            {
                title: "Therapie",
                content: `<h3>Analgesie</h3>
                <ul>
                    <li><strong>Metamizol</strong> (Novalgin®) 1-2,5 g als Kurzinfusion i.v. (max. 5 g/d, CAVE: Blutdruckabfall, allergische Reaktion, Agranulozytose).</li>
                    <li><strong>Diclofenac</strong> 75 mg p.o. oder i.m. (max. 150 mg/d, CAVE: Nicht bei GFR &lt; 30 ml/min, Magen-/Duodenalulcera, kardial vorerkrankten Patienten).</li>
                    <li><strong>Paracetamol</strong> (Perfalgan®) 1 g als Kurzinfusion i.v. (max. 60 mg/kg bzw. 3-4 g/d, CAVE: Lebertoxisch! In Schwangerschaft/Stillzeit geeignet).</li>
                    <li><strong>ggf. zusätzlich Opiat:</strong> z.B. <strong>Piritramid</strong> (Dipidolor®) 7,5 mg als Kurzinfusion i.v. (In Schwangerschaft/Stillzeit kurzzeitig geeignet).</li>
                </ul>
                <p><strong>Ziel:</strong> NRS ≤ 3 im Ruheintervall, ≤ 5 während Kolik.</p>

                <h3>Medikamentöse expulsive Therapie (MET)</h3>
                <ul>
                    <li>Alphablocker, z.B. <strong>Tamsulosin 0,4 mg retard</strong> 0-0-1 p.o. (Off-Label).</li>
                    <li><strong>Ziel:</strong> Erhöhung der Wahrscheinlichkeit eines spontanen Steinabgangs und optimierte Bedingungen im Interventionsfall.</li>
                </ul>

                <h3>Antibiotische Therapie bei begleitender Harnwegsinfektion</h3>
                <ul>
                    <li>Gemäß lokalem Standard (z.B. Ampicillin/Sulbactam 3 g 1-1-1 i.v.).</li>
                </ul>

                <h3>Notfallmäßige Harnableitung durch Urologie</h3>
                <p>Anlage einer Harnleiterschiene oder perkutane Nephrostomie bei:</p>
                <ul>
                    <li>Medikamentös nicht beherrschbaren Koliken.</li>
                    <li>Hochgradiger Obstruktion mit Harnstauungsniere und/oder postrenalem Nierenversagen.</li>
                    <li>Infizierter Harnstauungsniere (mit drohender oder bereits eingetretener Sepsis).</li>
                </ul>

                <h3>Weiteres Procedere nach urologischer Maßgabe</h3>
                <ul>
                    <li><strong>Konservative Therapie:</strong> Ausreichende orale Flüssigkeitszufuhr (ca. 2 l/d) + Bewegung + Analgesie + MET.</li>
                    <li><strong>Interventionelle Therapie:</strong> z.B. extrakorporale Stoßwellenlithotripsie, Ureterorenoskopie.</li>
                </ul>`
            },
            {
                title: "Merke",
                content: `<ul>
                    <li><strong>Wichtige Differentialdiagnosen:</strong> Akutes Aortensyndrom, Hodentorsion, Pyelonephritis, akutes Abdomen (z.B. EUG, Appendizitis).</li>
                    <li>Bei Steinen <strong>≤ 7 mm</strong> kann ein Spontanabgang bei konservativer Therapie unter Kontrollen abgewartet werden.</li>
                    <li><strong>Kein Einsatz von Butylscopolamin</strong> (Buscopan®) bei Nierenkolik aufgrund fehlenden Nutzens.</li>
                    <li>Bei Alphablockern über Off-Label-Use, Gefahr der orthostatischen Hypotonie und retrograden Ejakulation aufklären.</li>
                    <li>Bei V.a. begleitende Urosepsis, Fieber oder Einzelniere: niederschwelliger CT-Einsatz und rasche Therapie.</li>
                </ul>`
            },
            {
                title: "Disposition",
                html: `<p class="dispo-intro">Verbindliche hausinterne Dispositionsrichtlinie der ZNA (Klinikum St. Georg). Die Farbstufe ergibt sich aus Klinik, Vitalparametern und Verlauf &ndash; nicht aus einem Einzelwert.</p>
                <div class="dispo">
                    <section class="dispo-card dispo-gruen">
                        <header class="dispo-head"><span class="dispo-dot" aria-hidden="true"></span><h3>GRÜN &ndash; Ambulanter Verbleib</h3></header>
                        <dl class="dispo-meta">
                            <dt>Entscheidung</dt><dd>Behandelnder Arzt ZNA</dd>
                            <dt>Pfad</dt><dd>Entlassung nach Hause, Anbindung an Hausarzt oder MVZ</dd>
                        </dl>
                        <p class="dispo-spec">Unkomplizierte Kolik bei suffizienter Analgesie: ambulante urologische Kontrolle.</p>
                        <p class="dispo-foot">Wiedervorstellung jederzeit bei Verschlechterung anbieten; Kontrollzeitpunkt durch den weiterbehandelnden Arzt festlegen.</p>
                    </section>
                    <section class="dispo-card dispo-gelb">
                        <header class="dispo-head"><span class="dispo-dot" aria-hidden="true"></span><h3>GELB &ndash; Stationäre Aufnahme (Normalstation / ZNA-Station)</h3></header>
                        <p class="dispo-sub">Regelpfad Fachabteilung</p>
                        <ul class="dispo-contacts">
                        <li class="dispo-contact"><span class="dispo-fach">Urologie</span><span class="dispo-tel">4079</span></li>
                        </ul>
                        <p class="dispo-spec">Stationär bei Fieber, Harnstau, Einzelniere oder Analgesieversagen.</p>
                        <div class="dispo-block">
                            <p class="dispo-sub">Entlassung am Folgetag angestrebt (ZNA-Station / A&amp;B-Station)</p>
                            <dl class="dispo-meta">
                                <dt>Indikation</dt><dd>gemäß Statut ZNA und Statut Aufnahme- und Beobachtungsstation</dd>
                                <dt>Bedingung</dt><dd>nur nach Rücksprache mit Facharzt ZNA / OA ZNA</dd>
                                <dt>Kontakt</dt><dd>ZNA-Station 4B: 4812 &middot; Bettenmanagement: 4299</dd>
                            </dl>
                        </div>
                    </section>
                    <section class="dispo-card dispo-rot">
                        <header class="dispo-head"><span class="dispo-dot" aria-hidden="true"></span><h3>ROT &ndash; Kritisch / Intensivmedizinische Überwachung</h3></header>
                        <p class="dispo-sub">Aufnahme ITS / IMC</p>
                        <ul class="dispo-contacts">
                        <li class="dispo-contact"><span class="dispo-fach">ITS-Koordinator</span><span class="dispo-tel">3008</span><span class="dispo-note">zentraler ITS-Aufnahmekontakt</span></li>
                        <li class="dispo-contact"><span class="dispo-fach">IMC 2.0 (KAIM, 2 Erd)</span><span class="dispo-tel">4764</span><span class="dispo-note">internistische IMC</span></li>
                        </ul>
                        <p class="dispo-foot">Anmeldung immer über den ITS-Koordinator (3008); Transport erst nach Stabilisierung und mit ärztlicher Begleitung.</p>
                    </section>
                </div>`
            }
        ],
        stand: "12/22",
        sources: `S2k-Leitlinie zur Diagnostik, Therapie und Metaphylaxe der Urolithiasis (AWMF Registernummer 043 - 025) Aktualisierung 2018. – Bultitude et al. Management of renal colic. BMJ. 2012 Aug 29;345:e5499. – https://www.urologielehrbuch.de/nierenkolik.html, zuletzt abgerufen am 11/22. – Fachinformationen der genannten Arzneimittel, Stand 12/22.`
    });
})();