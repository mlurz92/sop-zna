(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "pleuraerguss",
        title: "Pleuraerguss",
        category: "Pneumologie",
        catKey: "pulmo",
        date: "01/23",
        sections: [
            {
                title: "Definition",
                content: "<strong>Pleuraerguss:</strong> Pathologische Flüssigkeitsansammlung im Pleuraraum."
            },
            {
                title: "Ursachen",
                content: `<h3>Transsudat</h3>
                <ul>
                    <li><strong>Herzinsuffizienz</strong></li>
                    <li>Leberzirrhose</li>
                    <li>Nephrotisches Syndrom</li>
                    <li>Hypalbuminämie</li>
                    <li><strong>Sonstige:</strong> Myxödem, Peritonealdialyse, LAE, etc.</li>
                </ul>
                <h3>Exsudat</h3>
                <ul>
                    <li><strong>Malignom:</strong> Lungenkarzinom, Mammakarzinom, Lymphom, etc.</li>
                    <li><strong>Infektion:</strong> parapneumonisch, Empyem, Tuberkulose, etc.</li>
                    <li><strong>Inflammatorisch:</strong> Pankreatitis, Rheumatoide Arthritis, SLE, etc.</li>
                    <li><strong>Medikamente:</strong> Nitrofurantoin, Minoxidil, etc.</li>
                    <li><strong>Sonstige:</strong> Hämato-/Chylothorax, LAE, Meigs-Syndrom, etc.</li>
                </ul>`
            },
            {
                title: "Symptome",
                content: `<ul>
                    <li>Abhängig von Ursache und Größe: <strong>Dyspnoe, Husten, Thoraxschmerzen</strong>.</li>
                    <li>ggf. Symptome der zugrundeliegenden Erkrankung (z.B. Gewichtsverlust bei Malignom, Ödeme bei Herzinsuffizienz, Husten bei Pneumonie).</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                content: `<ul>
                    <li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur).</li>
                    <li>1x venöser Zugang.</li>
                    <li><strong>Venöse bzw. arterielle BGA:</strong> (Hb? pH? BE? pO₂? pCO₂?).</li>
                    <li><strong>Labor:</strong> BB, CRP, E'lyte, NW, Gerinnung, Bilirubin, GOT, GPT, LDH, γ-GT, AP, Albumin, Gesamteiweiß, NT-proBNP. Ggf.: TSH, D-Dimere.</li>
                    <li><strong>12-Kanal-EKG:</strong> Ischämiezeichen? Lagetyp? Herzrhythmusstörungen? Niedervoltage?.</li>
                    <li><strong>Anamnese:</strong> Symptome? Beginn? Dynamik? Vorerkrankungen? Husten, Fieber, Krankheitsgefühl, Gewichtsverlust? Medikamente? <strong>Asbestexposition?</strong>.</li>
                    <li><strong>Körperliche Untersuchung:</strong> Abgeschwächtes Atemgeräusch? Hinweise für Grunderkrankung wie Ödeme, Rasselgeräusche, Aszites?.</li>
                    <li><strong>POCUS:</strong> Pleuraerguss ein-/beidseitig, Größe, Septierung? Infiltrat? VCI? Ventrikelfüllung? LV-EF? Perikarderguss? Pulmonale B-Linien? Aszites? Leberzirrhose?.</li>
                    <li><strong>Röntgen-Thorax:</strong> Pleuraerguss ein-/beidseitig? Stauung? Infiltrate? Malignom?.</li>
                    <li><strong>ggf. CT:</strong> z.B. bei V.a. Empyem; häufig auch nach Pleurapunktion sinnvoll, da sich dann pleuropulmonale Veränderungen wie z.B. Tumoren demaskieren.</li>
                    <li><strong>ggf. diagnostische Punktion:</strong> (siehe Anleitung).</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p>Bei V.a. Pleuraempyem muss bereits in der Notaufnahme eine diagnostische Pleurapunktion erfolgen!</p>
                </div>`
            },
            {
                title: "Therapie",
                content: `<h3>Kausale Therapie</h3>
                <ul>
                    <li>Behandlung der zugrundeliegenden Ursache (z.B. diuretische Therapie bei Herzinsuffizienz, Antibiotika bei Pneumonie).</li>
                </ul>
                <h3>Intervention</h3>
                <ul>
                    <li><strong>Notfallmäßige therapeutische Pleurapunktion:</strong> bei erheblicher Dyspnoe und entsprechender Ergussgröße.</li>
                    <li><strong>Notfallmäßige Anlage einer Thoraxdrainage:</strong> bei Empyem bzw. parapneumonischem Erguss mit <strong>pH &lt; 7,2</strong>.</li>
                </ul>
                <div class="callout callout-hinweis">
                    <p>Bei nachgewiesenem Pleuraempyem chirurgische Rücksprache halten (frühzeitige VATS?!).</p>
                </div>`
            },
            {
                title: "Anleitung zur Pleurapunktion",
                content: `<h3>1. Indikationen und Kontraindikationen</h3>
                <ul>
                    <li><strong>Diagnostische Punktion:</strong> Unklare Ätiologie des Pleuraergusses, parapneumonischer Erguss (z.B. Empyem).</li>
                    <li><strong>Therapeutische Punktion:</strong> Dyspnoe, Thoraxschmerzen.</li>
                    <li><strong>Kontraindikationen:</strong> Bei vitaler Bedrohung durch respiratorische Insuffizienz bestehen keine absoluten Kontraindikationen.</li>
                    <li><strong>Kompromittierte Gerinnung:</strong> INR &gt; 1,5, Quick &lt; 50 %, PTT &gt; 50 s, Thrombozyten &lt; 50.000/µl, therapeutische Antikoagulation, duale Plättchenhemmung.</li>
                </ul>
                <h3>2. Vorbereitung</h3>
                <ul>
                    <li>Über geplantes Vorgehen informieren und aufklären.</li>
                    <li><strong>Gerinnung optimieren:</strong> rechtzeitiges Pausieren einer Antikoagulation, ggf. Antagonisierung, TK-Gabe, etc.</li>
                    <li><strong>Positionierung:</strong> Sitzende Position, Arme aufgestützt und in leichter Katzenbuckelhaltung; bei Bettlägerigkeit: Seitenlage (auf Ergussseite).</li>
                    <li>Monitoring etablieren (mindestens Pulsoxymetrie).</li>
                </ul>
                <h3>3. Materialien</h3>
                <ul>
                    <li>Sterile Handschuhe, Mundschutz, Haube, Lochtuch, Desinfektionsmittel, Tupfer.</li>
                    <li>Venenverweilkanüle (16-18 G), Lokalanästhetikum (z.B. 2 % Mepivacain), Spritzen (5, 10, 20, 50 ml).</li>
                    <li>Ablaufsystem mit Dreiwegehahn, Kanülen, Pflasterstreifen.</li>
                    <li><strong>Diagnostik-Röhrchen:</strong> Klinische Chemie (LDH, Gesamteiweiß), BGA (pH), 1x Paar Blutkulturen, Pathologie, ggf. weitere.</li>
                    <li>Ultraschallgerät.</li>
                </ul>
                <h3>4. Durchführung</h3>
                <ul>
                    <li>Sonografisches Aufsuchen eines sicheren Punktionsfensters und Markieren der Punktionsstelle.</li>
                    <li><strong>Punktionsort:</strong> Im Bereich der Skapularlinie (&gt; 5-10 cm von Wirbelsäule entfernt) <strong>direkt am Oberrand der Rippe</strong> (unterhalb verläuft Gefäßnervenstraße!).</li>
                    <li>Herstellen aseptischer Bedingungen.</li>
                    <li>Applikation von ca. 5 ml Lokalanästhetikum unter ständigem Wechsel aus Aspiration und Spritzen, einwirken lassen.</li>
                    <li>Konus von Venenverweilkanüle entfernen, 10 ml Spritze aufsetzen, unter ständiger Aspiration vorschieben bis Pleuraflüssigkeit aspirabel, dann ca. 0,5-1 cm weiter vorschieben, Mandrin zurückziehen, Öffnung mit Daumen verschließen.</li>
                    <li>Ablaufsystem anschließen, Diagnostik abnehmen, Erguss mit 50 ml Spritze drainieren.</li>
                    <li><span class="callout-cave"><strong>Max. 1,5 l drainieren</strong>, sonst Gefahr eines Reexpansionsödems!</span></li>
                    <li>Wenn Pleurapunktion beendet werden soll (Hustenreiz kündigt häufig Ende an): VVK in Endexpiration entfernen, Pflaster anbringen.</li>
                </ul>
                <h3>5. Nach Punktion</h3>
                <ul>
                    <li>Bei unkomplizierter Punktion gemäß Leitlinien keine Röntgen-Thoraxkontrolle erforderlich.</li>
                    <li>Bei komplizierter Punktion Röntgen-Thoraxkontrolle ab 2 h postpunktionell.</li>
                    <li><strong>Merke:</strong> Generell in einer Sitzung nur eine Seite punktieren!</li>
                </ul>`
            },
            {
                title: "Merke",
                content: `<ul>
                    <li>Häufige Ursachen eines Pleuraergusses sind Herzinsuffizienz, Pneumonie und Malignom.</li>
                    <li>Bei ungeklärtem Pleuraerguss: <strong>Lungenarterienembolie häufig</strong> (Diskrepanz zwischen Größe des Pleuraergusses und Ausmaß der Dyspnoe).</li>
                </ul>
                <h3>Light-Kriterien</h3>
                <p>Unterscheidung Exsudat vs. Transsudat; Exsudat liegt vor, falls ≥ 1 der folgenden Kriterien zutrifft:</p>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Parameter</th>
                                <th>Kriterium für Exsudat</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Pleura-Gesamteiweiß / Serum-Gesamteiweiß</td>
                                <td>&gt; 0,5</td>
                            </tr>
                            <tr>
                                <td>Pleura-LDH / Serum-LDH</td>
                                <td>&gt; 0,6</td>
                            </tr>
                            <tr>
                                <td>Pleura-LDH</td>
                                <td>&gt; 200 U/l</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Disposition",
                content: "<ul><li>Individuelle Entscheidung, abhängig von zugrundeliegendem Krankheitsbild und Krankheitsschwere.</li></ul>"
            }
        ],
        stand: "01/23",
        sources: `Jany B et al. Pleural effusion in adults—etiology, diagnosis, and treatment. Dtsch Arztebl Int 2019; 116: 377–86.
        – Thomsen TW et al. Videos in clinical medicine. Thoracentesis. N Engl J Med. 2006 Oct 12;355(15):e16.
        – Diaz-Guzman E et al. Diagnosis and management of pleural effusions: a practical approach. Compr Ther. 2007 Winter;33(4):237-46.
        – Scarci M et al. EACTS expert consensus statement for surgical management of pleural empyema. Eur J Cardiothorac Surg. 2015 Nov;48(5):642-53.
        – Bintcliffe OJ et al. Unilateral Pleural Effusions with More Than One Apparent Etiology. A Prospective Observational Study. Ann Am Thorac Soc. 2016 Jul;13(7):1050-6.`
    });
})();