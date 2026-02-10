(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "pneumonie",
        title: "Pneumonie",
        category: "Infektiologie",
        catKey: "infekt",
        date: "10/24",
        sections: [
            {
                title: "Definition & Einteilung",
                content: `<p><strong>Pneumonie:</strong> Akute oder chronische Entzündung der Lunge, die den Alveolarraum und/oder das Interstitium betrifft.</p>
                <h3>Einteilung:</h3>
                <ul>
                    <li><strong>Ambulant erworbene Pneumonie (CAP):</strong> außerhalb des Krankenhauses erworben.</li>
                    <li><strong>Nosokomiale Pneumonie (HAP):</strong> ≥ 48 h nach Krankenhausaufnahme erworben.</li>
                    <li><strong>Pneumonie unter Immunsuppression:</strong> unabhängig vom Ort des Erwerbens.</li>
                </ul>
                <div class="callout callout-hinweis">
                    <p><strong>Definition Immunsuppression:</strong> Neutropenie (&lt; 1000/µl), Prednisolon ≥ 20 mg/d über &gt; 14 d (oder Äquivalent), Z.n. Organ-/Stammzelltransplantation, HIV-Infektion bzw. CD4-Zellen &lt; 200/µl, Antikörpermangelsyndrome, angeborene Immundefekte.</p>
                </div>`
            },
            {
                title: "Ursachen",
                content: `<h3>Mikroorganismen</h3>
                <ul>
                    <li><strong>Bakterien:</strong> Pneumokokken, Mykoplasmen, H. influenzae, Legionellen, Staph. aureus, P. aeruginosa, Chlamydien, etc.</li>
                    <li><strong>Viren:</strong> Influenza-, Corona-, Adeno-, Cytomegalie-, RS-Viren.</li>
                    <li><strong>Pilze (insb. bei Immunsupprimierten):</strong> Aspergillus, Pneumocystis jirovecii.</li>
                </ul>
                <h3>Sonstige Noxen</h3>
                <ul>
                    <li>Physikalische Noxen (Strahlung, Fremdkörper).</li>
                    <li>Chemische Noxen (Aspiration).</li>
                    <li>Kreislaufstörungen (Stauungs- oder Infarktpneumonie).</li>
                </ul>`
            },
            {
                title: "Symptome",
                content: `<ul>
                    <li>Allgemeines Krankheitsgefühl, grippale Symptome (Myalgien, Arthralgien, Cephalgien).</li>
                    <li>Husten, ggf. mit eitrigem Auswurf.</li>
                    <li>Dyspnoe, Tachypnoe, atemabhängige Thoraxschmerzen (bei Begleitpleuritis).</li>
                    <li>Fieber oder Hypothermie.</li>
                    <li>Tachykardie, ggf. Hypotonie bis Schocksymptomatik.</li>
                    <li><strong>Bei älteren Patienten:</strong> häufig oligosymptomatisch bzw. unspezifische Beschwerden (z.B. Verwirrtheit, Diarrhoen).</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                content: `<ul>
                    <li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur).</li>
                    <li>1-2x venöser Zugang.</li>
                    <li><strong>Venöse bzw. arterielle BGA:</strong> (pH? pO₂? pCO₂? BE? Glukose? Laktat?).</li>
                    <li><strong>Labor:</strong> Diff-BB, CRP, E'lyte, NW, GOT, GPT, AP, γ-GT, Bilirubin. Ggf.: PCT, TSH, Gerinnung, D-Dimere, NT-proBNP, hs-Troponin.</li>
                    <li><strong>≥ 2 Paar Blutkulturen.</strong></li>
                    <li><strong>12-Kanal-EKG:</strong> (Ischämiezeichen? Herzrhythmusstörungen? QTc-Zeit?).</li>
                    <li><strong>Anamnese:</strong> Symptome? Beginn? Fieber? Auswurf? Sputumfarbe? Thoraxschmerz? Vorerkrankungen (kardial/pulmonal)? Medikamente? Immunsuppression? Kürzliche AB-Therapie/Krankenhausaufenthalt? Reiseanamnese? Tierkontakte?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Vigilanz? Zyanose? Mottling? Tachy-/Orthopnoe? Feinblasige RG? Abgeschwächtes AG? Bronchospasmus?.</li>
                    <li><strong>Röntgen-Thorax ≤ 4 Stunden:</strong> (Infiltrate? Interstitielle Pneumonie? Stauung? Komplikationen: Erguss, Empyem, Abszess).</li>
                    <li><strong>POCUS:</strong> (Infiltrate? Abszess? Pleuraerguss? Empyem? Stauung? Pneumothorax).</li>
                    <li><strong>CT-Thorax:</strong> Insbesondere bei Immunsuppression oder unklarem Röntgenbefund bei V.a. Komplikationen.</li>
                    <li><strong>Erregerdiagnostik:</strong> Influenza-/SARS-CoV-2-PCR, Legionellen-Antigen im Urin, Pneumokokken-Antigen im Urin.</li>
                    <li><strong>Sputumdiagnostik:</strong> Nur wenn Gramfärbung &lt; 4 h möglich.</li>
                    <li><strong>Pleurapunktion:</strong> Bei Erguss z.A. eines Empyems (s. SOP Pleuraerguss).</li>
                    <li><strong>Arterieller Zugang:</strong> Bei hämodynamischer Instabilität oder respiratorischer Kompromittierung.</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p><strong>Diagnosesicherung:</strong> Vorliegen von Hauptkriterium (Infiltrat im Röntgen/CT) + zwei Nebenkriterien (purulentes Sekret, Leukozytose/Leukopenie oder Fieber)!</p>
                </div>`
            },
            {
                title: "Schweregradeinteilung",
                content: `<h3>Ambulant erworbene Pneumonie (CAP)</h3>
                <p><em>Modifiziert nach Ewig et al. 2021</em></p>
                <ul>
                    <li><strong>Leichte Pneumonie:</strong> CRB-65 = 0 oder 1 Punkt (nur falls Alter ≥ 65), SpO₂ ≥ 92 % (Raumluft), keine instabile Komorbidität, mobil.</li>
                    <li><strong>Mittelschwere Pneumonie:</strong> Kein Majorkriterium, 1-2 Minorkriterien, instabile Komorbidität (v.a. kardial) oder Laktat &gt; 2 mmol/l.</li>
                    <li><strong>Schwere Pneumonie:</strong> 1 Majorkriterium oder ≥ 3 Minorkriterien.</li>
                </ul>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Kategorie</th>
                                <th>Definition / Kriterien</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>CRB-65-Score</strong></td>
                                <td>Neue Bewusstseinsstörung, AF ≥ 30/min, RR &lt; 90/60 mmHg, Alter ≥ 65 J.</td>
                            </tr>
                            <tr>
                                <td><strong>Majorkriterien</strong></td>
                                <td>Intubationspflichtigkeit oder Katecholaminpflichtigkeit.</td>
                            </tr>
                            <tr>
                                <td><strong>Minorkriterien</strong></td>
                                <td>Neue Bewusstseinsstörung, AF ≥ 30/min, PaO₂ ≤ 55 mmHg (bzw. SpO₂ &lt; 90 %), RR &lt; 90/60 mmHg mit Volumenbedarf, Temperatur &lt; 36 °C, Leukozyten &lt; 4.000/µl, Thrombozyten &lt; 100.000/µl, AKI, multilobuläre Infiltrate.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Therapie - Allgemeinmaßnahmen",
                content: `<ul>
                    <li>Stabilisierung der Vitalfunktionen (ABCDE).</li>
                    <li>Oberkörperhochlagerung, atemerleichternde Maßnahmen.</li>
                    <li>Patienten beruhigen, ggf. <strong>Morphin 2-3 mg i.v.</strong> repetitiv (oder 5 mg s.c.).</li>
                    <li><strong>O₂-Gabe:</strong> Ziel-SpO₂ 90-94 %. Ggf. NIV, HFNC oder Intubation bei respiratorischer Insuffizienz (Ultima Ratio).</li>
                    <li>Bronchospasmolytika bei Obstruktion (s. SOP AECOPD).</li>
                    <li><strong>Flüssigkeitssubstitution:</strong> Vollelektrolytlösung (30 ml/kg KG ≙ ca. 2 l) bei Hypoperfusion oder Schock innerhalb von 3 h (s. SOP Sepsis).
                        <br><span class="callout-cave">CAVE: An Volumenstatus, Komorbiditäten und kardiale Leistung anpassen!</span></li>
                    <li>Antipyretika (z.B. Paracetamol) bei hohem Fieber und Leidensdruck.</li>
                </ul>`
            },
            {
                title: "Therapie - Antiinfektive Strategie",
                content: `<h3>Grundsätze</h3>
                <ul>
                    <li>Beginn so früh wie möglich (&lt; 8 h), bei Sepsis/Schock <strong>innerhalb von 1 h</strong>.</li>
                    <li>Dauer i.d.R. 5-7 d (Makrolide nach 3 d beenden, wenn klinisch stabil).</li>
                    <li>Innerhalb der ersten 24 h <strong>volle Tagesdosis</strong> unabhängig von Nierenfunktion.</li>
                </ul>
                <h3>CAP (Ambulant erworben)</h3>
                <ul>
                    <li><strong>Leicht:</strong> Amoxicillin 1 g 1-1-1 p.o. (Alt: Doxycyclin oder Azithromycin).</li>
                    <li><strong>Leicht + Komorbidität:</strong> Amoxicillin/Clavulansäure 1 g 1-1-1 p.o. (Alt: Moxi-/Levofloxacin <span class="callout-cave">CAVE: Roter-Hand-Brief</span>).</li>
                    <li><strong>Mittelschwer:</strong> Ampicillin/Sulbactam 3 g 1-1-1(-1) i.v. ODER Ceftriaxon +/- Azithromycin 500 mg 1-0-0.</li>
                    <li><strong>Schwer:</strong> Piperacillin/Tazobactam 4,5 g 1-1-1(-1) i.v. (Alt: Ceftriaxon) + Azithromycin 500 mg 1-0-0 i.v.
                        <br>+ ggf. 200 mg Hydrocortison/d via Perfusor erwägen (solide NEJM-Daten 2023).</li>
                </ul>
                <h3>Nosokomiale Pneumonie (HAP)</h3>
                <ul>
                    <li><strong>Ohne MRE-Risiko:</strong> Ampicillin/Sulbactam 3 g i.v. (Alt: Ceftriaxon).</li>
                    <li><strong>Mit MRE-Risiko:</strong> Piperacillin/Tazobactam 4,5 g i.v. (Alt: Meropenem).
                        <ul>
                            <li>Bei V.a. MRSA/Sepsis: + Linezolid 600 mg 1-0-1 i.v. (Alt: Vancomycin).</li>
                            <li>Bei Schock: + Ciprofloxacin 400 mg 1-1-1 i.v.</li>
                        </ul>
                    </li>
                </ul>
                <p><small><strong>MRE-Risikofaktoren:</strong> AB-Therapie &gt; 24h in letzten 30 d, Hosp. ≥ 5 d, bekannte Besiedelung, Dialyse, ARDS, septischer Schock. <strong>Pseudomonas-Risiko:</strong> Fortg. COPD, Bronchiektasen.</small></p>
                <h3>Sonderfälle</h3>
                <ul>
                    <li><strong>Immunsuppression:</strong> Pip/Taz (Alt: Meropenem). Bei V.a. Aspergillose: + Voriconazol 6 mg/kg 1-0-1 an d1, dann 4 mg/kg.</li>
                    <li><strong>Aspirationspneumonie:</strong> Ampicillin/Sulbactam (Alt: Clindamycin + Ceftriaxon).</li>
                    <li><strong>Influenza-Pneumonie:</strong> Oseltamivir 75 mg 1-0-1 p.o. (&lt; 48 h nach Beginn).</li>
                </ul>`
            },
            {
                title: "Merke",
                content: `<ul>
                    <li>Ein fehlendes Infiltrat im Röntgen schließt eine Pneumonie initial nicht aus.</li>
                    <li>Bei V.a. Pneumonie unter Immunsuppression sollte primär ein <strong>CT-Thorax</strong> erfolgen.</li>
                    <li>Ältere Patienten präsentieren sich oft mit atypischen/unspezifischen Symptomen (Verwirrtheit!).</li>
                    <li>Bei COPD/Asthma-Patienten mit Pneumonie und Zunahme der Obstruktion orale Steroidgabe einleiten.</li>
                    <li>Rezidivierende Aspirationspneumonien (z.B. bei Demenz/Parkinson) sind oft Zeichen der Endstrecke &rarr; Therapieziele definieren.</li>
                    <li>Pflegeheimpneumonie entspricht erregerspezifisch meist einer CAP, individuelle Risikofaktoren (Vor-Antibiose) beachten.</li>
                </ul>`
            },
            {
                title: "Disposition",
                content: `<ul>
                    <li><strong>Ambulantes Procedere:</strong> Leichte Pneumonie (CRB-65 0-1) ohne Komplikationen, sichere Medikamenteneinnahme möglich; hausärztliche Vorstellung in 48-72 h.</li>
                    <li><strong>Stationäre Aufnahme:</strong> Leichte Pneumonie (falls ambulant nicht möglich), mittelschwere Pneumonie, HAP oder Pneumonie unter Immunsuppression.</li>
                    <li><strong>Überwachungsstation (IMC/ICU):</strong> Schwere Pneumonie bzw. jede Pneumonie mit klinischer Instabilität.</li>
                </ul>`
            }
        ],
        stand: "10/24",
        sources: `Herold G et al. Innere Medizin 2023, S. 371 ff. – Ewig S et al. S3-Leitlinie CAP - Update 2021. – Rademacher J et al. S3-Leitlinie HAP - Update 2024. – S2k Leitlinie Kalkulierte parenterale Initialtherapie bakterieller Erkrankungen - Update 2018. – Moeser A et al. Pneumonien bei immunsupprimierten Patienten. Pneumologe 2018. – Dequin PF et al. Hydrocortisone in Severe CAP. N Engl J Med. 2023.`
    });
})();