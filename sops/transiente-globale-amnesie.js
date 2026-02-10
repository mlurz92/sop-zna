(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "transiente-globale-amnesie",
        title: "Transiente globale Amnesie",
        category: "Neurologie",
        catKey: "neuro",
        date: "09/25",
        sections: [
            {
                title: "Definition",
                html: `<p><strong>Transiente globale Amnesie (TGA):</strong> Akut einsetzende, maximal 24 Stunden andauernde, isolierte Gedächtnisstörung im Sinne einer anterograden und retrograden Amnesie.</p>`
            },
            {
                title: "Ursachen",
                html: `<ul>
                    <li>Unklare passagere Funktionsstörung des Hippocampus.</li>
                    <li>Typisches Manifestationsalter zwischen 50–70 Jahren.</li>
                    <li><strong>Häufig vorausgehend:</strong> Körperliche/emotional-psychische Belastung, Sprung in kaltes Wasser, Sexualverkehr, Valsalva-Manöver.</li>
                </ul>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li><strong>Anterograde Amnesie:</strong> Behaltensspanne für neue Informationen auf 30 s bis 3 min reduziert.</li>
                    <li><strong>Retrograde Amnesie:</strong> Unfähigkeit, Ereignisse der vorangegangenen Stunden oder Tage vollständig zu rekonstruieren.</li>
                    <li><strong>Klinische Präsentation:</strong> Fehlende Orientierung zu Zeit und Situation (Unfähigkeit Fragen wie: „Wie sind Sie hierher gekommen?“ oder „Was haben Sie davor gemacht?“ zu beantworten), Ratlosigkeit, Unruhe, repetitive Fragen nach Zeit und situativen Umständen („Was ist los?“).</li>
                    <li>ggf. milde vegetative Begleitsymptome (Übelkeit, Kopfschmerzen, Schwindel, etc.).</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p>Patienten sind <strong>immer wach</strong>, zur Person orientiert, können zuvor erlernte komplexe Handlungen tätigen; übrige kognitive Bereiche wie z.B. Langzeitgedächtnis, Faktenwissen und Abstraktionsvermögen sind stets erhalten!</p>
                </div>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li><strong>Ersteindruck + ABCDE + Vitalparameter:</strong> RR, Puls, SpO₂, AF, Temperatur.</li>
                    <li><strong>(Fremd-)Anamnese:</strong> Selektiver Gedächtnisverlust? Vorangegangenes Ereignis? Medikamente? Drogen? Vorerkrankungen (insbes. Epilepsie, Schlaganfall, kognitive Störungen)? CVRF? Trauma? Fieber?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Vigilanz? Pupillen? Okulomotorik? Fokal-neurologisches Defizit? Aphasie? Apraxie? Ataxie? Zungenbiss? Prellmarke?</li>
                    <li><strong>Venöse BGA:</strong> Natrium? Glukose? pCO₂? <strong>CO-Hb?</strong> Laktat?</li>
                    <li><strong>Labor:</strong> BB, CRP, E'lyte, NW, ggf.: TSH, Leberwerte, PCT.</li>
                    <li><strong>ggf. cMRT nach 24–72 h</strong> nach Auftreten der TGA (Nachweis von DWI-Läsionen im Hippocampus).</li>
                    <li><strong>ggf. Notfall-Diagnostik bei V.a. Differentialdiagnosen:</strong> kranielle Bildgebung (cMRT bevorzugt, alt. cCT+CTA), Lumbalpunktion, Tox-/Drogen-Screening.</li>
                </ul>
                <div class="callout callout-hinweis">
                    <strong>Kriterien der klinischen Diagnose:</strong>
                    <p>Akut beginnende und ausgeprägte Neugedächtnisstörung, Dauer 1–24 h, kein fokal-neurologisches Defizit und keine zusätzlichen kognitiven Defizite, keine quantitative Bewusstseinsstörung, erhaltene Orientierung zur Person, kein vorheriges Trauma oder Epilepsie!</p>
                </div>`
            },
            {
                title: "Wichtige Differentialdiagnosen",
                html: `<div class="table-wrap">
                    <table>
                        <tbody>
                            <tr>
                                <td>Zerebrale Ischämie / Blutung</td>
                                <td>Schädel-Hirn-Trauma</td>
                            </tr>
                            <tr>
                                <td>Delir</td>
                                <td>Intoxikationen / Medikamentennebenwirkung</td>
                            </tr>
                            <tr>
                                <td>Metabolisch (Hypoglykämie, Hyponatriämie)</td>
                                <td>Psychogene bzw. dissoziative Gedächtnisstörung</td>
                            </tr>
                            <tr>
                                <td>Initialstadium einer Herpesenzephalitis</td>
                                <td>Epileptischer Anfall, transiente epileptische Amnesie (TEA)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Therapie",
                html: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li>Patienten und Angehörige beruhigen.</li>
                    <li>Über selbstlimitierenden Verlauf und Gutartigkeit der Erkrankung aufklären.</li>
                </ul>
                <h3>Spezifische Therapie</h3>
                <ul>
                    <li>Keine (auch keine Sekundärprophylaxe).</li>
                </ul>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li>Die Diagnose einer TGA darf nicht vorschnell gestellt werden, Red Flags müssen beachtet werden.</li>
                    <li>Bei unsicherer Diagnose oder Vorliegen von Red Flags müssen eine weitere Abklärung und stationäre Aufnahme erfolgen.</li>
                    <li>Somnolenz, starke Kopfschmerzen, Erbrechen, Fieber oder eine inkomplette Rückbildung > 24 h sprechen gegen eine TGA.</li>
                    <li>Die Prognose der TGA ist ausgezeichnet; sie ist <strong>kein</strong> Risikofaktor für Schlaganfälle oder eine dementielle Entwicklung.</li>
                </ul>`
            },
            {
                title: "Diagnostischer Algorithmus",
                html: `<div class="callout callout-hinweis">
                    <strong>Hinweise für eine TGA:</strong>
                    <ul>
                        <li>Vorangegangene anstrengende körperliche oder emotionale Ereignisse.</li>
                        <li>Selektiver Gedächtnisverlust (antero- und retrograde Amnesie).</li>
                        <li>Patient stellt wiederholt die gleichen Fragen.</li>
                        <li>Patient ist kooperativ und hat keine weiteren kognitiven Defizite.</li>
                    </ul>
                </div>
                <div class="callout callout-cave">
                    <strong>Red Flags (Sprechen gegen TGA / Erfordern Notfalldiagnostik):</strong>
                    <ul>
                        <li>Vigilanzminderung oder fokal-neurologisches Defizit.</li>
                        <li>Fehlende Orientierung zur Person.</li>
                        <li>Weitere kognitive Störungen/Symptome außer Amnesie.</li>
                        <li>Zeitlich zusammenhängendes Kopf-Trauma.</li>
                        <li>Fieber bzw. erhöhte Entzündungsparameter.</li>
                        <li>Vorbekannte Epilepsie oder häufige amnestische Episoden (> 3/Jahr).</li>
                        <li>Drogenanamnese/-konsum oder V.a. Medikamentenintoxikation.</li>
                        <li>Hinweise auf metabolische Störungen (E'lyte, Glukose).</li>
                        <li>Alter < 50 Jahre (tendenziell zu jung).</li>
                        <li>Patient kann Details des amnestischen Intervalls schildern.</li>
                        <li>Alleinige retrograde Amnesie.</li>
                    </ul>
                </div>`
            },
            {
                title: "Disposition",
                html: `<ul>
                    <li><strong>Stationäre Aufnahme:</strong> Unsichere Diagnose, anhaltende oder progrediente Symptomatik, häusliche Betreuung nicht gewährleistet oder Vorliegen von Red Flags.</li>
                    <li><strong>Ambulant mit Bezugsperson:</strong> Im Einzelfall bei sicherer klinischer Diagnose, rückläufiger Symptomatik und gewährleisteter häuslicher Betreuung.</li>
                </ul>`
            }
        ],
        stand: "09/25",
        sources: `Sander D et al. Transiente globale Amnesie, S1-Leitlinie, 2022, DGN, in: Deutsche Gesellschaft für Neurologie (Hrsg.), Leitlinien für Diagnostik und Therapie in der Neurologie.<br>
        Eschle, D. Akuter Gedächtnisverlust: Ist es eine transiente globale Amnesie?. Notfall Rettungsmed 27, 426–432 (2024).`
    });
})();