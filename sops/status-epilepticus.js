(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "status-epilepticus",
        title: "Status epilepticus",
        category: "Neurologie",
        catKey: "neuro",
        stand: "10/24",
        sections: [
            {
                title: "Definition",
                html: `<ul>
                    <li><strong>Status epilepticus:</strong> Prolongierter epileptischer Anfall (Dauer > 5 min.) bzw. rezidivierende epileptische Anfälle ohne zwischenzeitliche Wiedererlangung des präiktalen neurologischen Ausgangsstatus.</li>
                    <li><strong>Epileptischer Anfall:</strong> Pathologisch exzessive oder synchrone neuronale Aktivität im Gehirn (Dauer meist < 2 min.) mit breitem Symptomspektrum (Auren, Absencen, fokaler und generalisierter Anfall, etc.).</li>
                </ul>`
            },
            {
                title: "Ursachen",
                html: `<ul>
                    <li><strong>Strukturell:</strong> Schlaganfall, ICB, Tumor, etc.</li>
                    <li><strong>Metabolisch:</strong> Hypoglykämie, Alkoholentzug, Hypoxie, Hyponatriämie, Hypokalzämie, etc.</li>
                    <li><strong>Infektiös:</strong> ZNS-Infektion, Sepsis, etc.</li>
                    <li><strong>Medikamente, Intoxikationen, Drogen</strong></li>
                    <li><strong>Sonstige:</strong> immunologisch, genetisch, etc.</li>
                    <li><strong>Trigger:</strong> ggf. spezifische Reize (visuell, etc.).</li>
                </ul>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li><strong>Aura:</strong> Sehstörung, Sprachstörung, Déjà-vu-Erlebnisse, etc.</li>
                    <li><strong>Fokaler Anfall:</strong> orale Automatismen, komplexe Bewegungsabläufe, visuelle Halluzinationen.
                        <ul>
                            <li><strong>Einfach-fokal:</strong> bewusst erlebter Anfall bei erhaltenem Bewusstsein.</li>
                            <li><strong>Komplex-fokal:</strong> nicht bewusst erlebter Anfall mit Bewusstseinsveränderung.</li>
                            <li><strong>Sekundär-generalisierter Anfall:</strong> Übergang von fokalem zu bilateralem Anfall.</li>
                        </ul>
                    </li>
                    <li><strong>Generalisierter Anfall:</strong> motorisch (tonisch, klonisch, atonisch, Spasmen) oder nicht-motorisch (Absencen).</li>
                    <li><strong>Postiktale Phase:</strong> verzögerte Reorientierung, Verwirrtheit, Sprach- oder Gedächtnisstörung, Muskelkater, <strong>Todd’sche Parese</strong>, psychotische Episode (im Alter Dauer > 24 h möglich).</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li><strong>Ersteindruck + ABCDE + Vitalparameter</strong> (RR, Puls, SpO₂, AF, Temperatur).</li>
                    <li><strong>1-2x venöser Zugang:</strong> nicht in Gelenkpositionen.</li>
                    <li><strong>Venöse BGA:</strong> pH, pCO₂, Glukose, Elektrolyte, Laktat.</li>
                    <li><strong>Labor:</strong> BB, CRP, Elektrolyte, NW, Leberwerte, CK, TSH; ggf. Tox-Screen, Ethanol, Autoantikörper.</li>
                    <li><strong>Medikamentenspiegel:</strong> Spiegel der Antiepileptika bestimmen.</li>
                    <li><strong>Anamnese (Fremdanamnese):</strong> Beginn, Art, Dauer, Sturzfolgen, Bekannte Epilepsie, Medikamente (Präparatewechsel, Adhärenz), Augen offen/geschlossen, Blickwendung, Aura, Amnesie, Familienanamnese, Schwangerschaft, Alkoholabusus.</li>
                    <li><strong>Körperliche Untersuchung:</strong> Fokal-neurologisches Defizit, Meningismus, Urin-/Stuhlabgang, Zungenbiss, Verletzungen.</li>
                    <li><strong>Bildgebung:</strong> cCT (alternativ cMRT) bei erstmaligem Anfall immer, bei bekannter Epilepsie ggf.</li>
                    <li><strong>EEG:</strong> Hinweis auf epileptogene Läsionen, subtiler Status, nicht-konvulsiver Status.</li>
                    <li><strong>Ggf. Lumbalpunktion:</strong> V.a. Enzephalitis, autoimmun.</li>
                    <li><strong>Regelmäßige BGA:</strong> Kontrolle von Hyperkaliämie, Azidose, Laktat.</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p>Frühzeitige Rücksprache mit der Neurologie!</p>
                </div>`
            },
            {
                title: "Therapie",
                html: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li>Eigenschutz beachten.</li>
                    <li>Stabilisierung der Vitalfunktionen gemäß ABCDE-Schema.</li>
                    <li>Patienten vor Verletzungen schützen, <strong>kein Festhalten</strong> und <strong>kein Einsetzen eines Beißkeils</strong>.</li>
                    <li><strong>Ursachen beheben:</strong> Glukosegabe bei Hypoglykämie, <strong>Thiamin 250 mg i.v.</strong> bei alkoholassoziiertem Status, Temperatursenkung ab > 37,5 °C.</li>
                </ul>
                <h3>Medikamentöse Stufentherapie</h3>
                <h4>Stufe 1: Initialbehandlung (ca. 10-20 min)</h4>
                <ul>
                    <li><strong>Lorazepam (Tavor®):</strong> 4 mg i.v. (0,1 mg/kg KG, max. 2 mg/min, max. 4 mg pro Bolus, 1:1 Verdünnung mit NaCl 0,9%).</li>
                    <li><strong>Bei fehlender Verfügbarkeit i.v.:</strong>
                        <ul>
                            <li><strong>Diazepam (Valium®):</strong> 7,5-10 mg i.v. (0,15-0,2 mg/kg KG, max. 5 mg/min, max. 10 mg/Bolus, max. 30 mg total).</li>
                            <li><strong>Clonazepam (Rivotril®):</strong> 1 mg i.v. (0,015 mg/kg KG, max. 0,5 mg/min, 1:1 Verdünnung mit NaCl 0,9%).</li>
                            <li><strong>Midazolam (Dormicum®):</strong> 10 mg i.v. (0,2 mg/kg KG).</li>
                        </ul>
                    </li>
                    <li><strong>Bei fehlendem Venenzugang:</strong>
                        <ul>
                            <li><strong>Midazolam (Dormicum®):</strong> 10 mg i.m. / intranasal / bukkal (5 mg bei 13-40 kg KG).</li>
                            <li><strong>Diazepam:</strong> 10-20 mg rektal (0,2-0,5 mg/kg KG).</li>
                        </ul>
                    </li>
                </ul>
                <div class="callout callout-hinweis">
                    <p>Erwäge bei unzureichender initialer Dosis des Benzodiazepins eine erneute Gabe nach 5 min.</p>
                </div>
                <h4>Stufe 2: Benzodiazepin-refraktärer Status (ca. 30-60 min)</h4>
                <ul>
                    <li><strong>Levetiracetam (Keppra®):</strong> 60 mg/kg KG i.v. als Kurzinfusion (max. 500 mg/min, kumulativ <strong>max. 4500 mg</strong>).</li>
                    <li><strong>Valproat:</strong> 40 mg/kg KG i.v. als Kurzinfusion (max. 10 mg/kg/min, <strong>max. 3000 mg</strong>). (KI: Mitochondriopathie).</li>
                </ul>
                <h4>Stufe 3: Refraktärer Status (> 60 min)</h4>
                <ul>
                    <li>Narkoseeinleitung: <strong>Propofol</strong> 2 mg/kg KG i.v. ODER <strong>Midazolam</strong> 0,2 mg/kg KG i.v. ODER <strong>Thiopental (Trapanal®)</strong> 5 mg/kg KG i.v.</li>
                    <li>Erhaltungsdosis der Narkose: <strong>EEG-gesteuert</strong>.</li>
                </ul>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li>Ausreichend hohe Dosierung bei Gabe von Benzodiazepinen.</li>
                    <li>Beim erstmaligen epileptischen Anfall aktiv nach Ursache suchen (Enzephalitis, Hypoglykämie).</li>
                    <li>Suche nach epileptischem Anfall immer nach <strong>Begleitverletzungen</strong> (Wirbelfrakturen, Kopfverletzungen, Schulterluxation).</li>
                    <li>Komplikationen erkennen: respiratorische Azidose, Lungenödem, Rhabdomyolyse, akute Nierenschädigung, Laktatazidose.</li>
                </ul>`
            },
            {
                title: "Disposition",
                html: `<div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Klinik / Befund</th>
                                <th>Empfohlene Disposition</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Bekannte Epilepsie, keine reversible Ursache</td>
                                <td>Individuelle Entscheidung, ggf. ambulantes Procedere mit neurologischer Anbindung</td>
                            </tr>
                            <tr>
                                <td>Erstmaliger Krampfanfall</td>
                                <td>Überwachungsstation (IMC/ICU)</td>
                            </tr>
                            <tr>
                                <td>Status epilepticus</td>
                                <td>(Neuro-)Intensivstation mit EEG-Monitoring</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            }
        ],
        sources: `Holtkamp M., May TW et al. Erster epileptischer Anfall und Epilepsien im Erwachsenenalter, S2k-Leitlinie, 2023.<br>
        Rosenow F., Weber J. et al. Status epilepticus im Erwachsenenalter, S2k-Leitlinie, 2020.<br>
        Arya R et al. Efficacy of nonvenous medications for acute convulsive seizures. Neurology. 2015.<br>
        Fisher RS et al. Operationale Klassifikation der Anfallsformen. Z Epileptol 2018.<br>
        Fachinformationen der genannten Arzneimittel, Stand 12/22.`
    });
})();