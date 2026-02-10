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
                content: `<div class="callout callout-cave">
                    <p><strong>Red Flags:</strong> Fieber, Harnsteine bei Einzelniere oder Nierentransplantierten, bilaterale Harnsteine, steigende Nierenwerte, Harnstauungsniere, Versagen der medikamentösen Schmerztherapie, Fornixruptur.</p>
                </div>
                <ul>
                    <li><strong>Ambulantes Procedere:</strong> Keine Red Flags, suffiziente Schmerzkontrolle, geplante konservative Therapie mit zeitnaher urologischer Vorstellung.</li>
                    <li><strong>Stationäre Aufnahme:</strong> Bei Vorliegen von Red Flags (in Urologie), ggf. IMC/ICU.</li>
                </ul>`
            }
        ],
        stand: "12/22",
        sources: `S2k-Leitlinie zur Diagnostik, Therapie und Metaphylaxe der Urolithiasis (AWMF Registernummer 043 - 025) Aktualisierung 2018. – Bultitude et al. Management of renal colic. BMJ. 2012 Aug 29;345:e5499. – https://www.urologielehrbuch.de/nierenkolik.html, zuletzt abgerufen am 11/22. – Fachinformationen der genannten Arzneimittel, Stand 12/22.`
    });
})();