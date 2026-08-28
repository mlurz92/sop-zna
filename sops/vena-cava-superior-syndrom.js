(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "vena-cava-superior-syndrom",
        title: "Vena-cava-superior-Syndrom",
        category: "Hämatologie",
        catKey: "haem",
        date: "04/25",
        sections: [
            {
                title: "Definition",
                html: `<p><strong>Vena-cava-superior-Syndrom (VCSS):</strong> Symptomkomplex aufgrund einer venösen Abflussstörung durch externe Kompression oder intraluminale Okklusion der oberen Hohlvene.</p>`
            },
            {
                title: "Ursachen",
                html: `<ul>
                    <li><strong>Malignom:</strong> Lungenkarzinome, Lymphome, Metastasen, etc.</li>
                    <li><strong>Thrombose:</strong> Meist begünstigt durch Schrittmacher-Sonden oder zentralvenöse Katheter (ZVK).</li>
                    <li><strong>Sonstige:</strong> Infektionskrankheiten (z.B. bei TBC oder Syphilis), Struma, Aortenaneurysma, fibrosierende Mediastinitis, etc.</li>
                </ul>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li>Ödem im Gesichts- und Armbereich.</li>
                    <li><strong>Plethora:</strong> Gesichtsrötung, Zyanose.</li>
                    <li>Gestaute Hals- und Brustvenen.</li>
                    <li>Dyspnoe, Husten, Heiserkeit, Stridor.</li>
                    <li>Kopfschmerzen, Synkope.</li>
                    <li>Vigilanzminderung bis hin zum Koma.</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li><strong>Ersteindruck + ABCDE + Vitalparameter:</strong> RR, Puls, SpO₂, AF, Temperatur.</li>
                    <li><strong>1x venöser Zugang.</strong></li>
                    <li><strong>Labor:</strong> BB, CRP, E'lyte, NW, Gerinnung, <strong>TSH</strong>.</li>
                    <li><strong>Anamnese:</strong> Symptome? Beginn? Vorerkrankungen (insbesondere Malignome)? Rauchen? Intravaskuläre Devices (ZVK/SM)?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Vigilanz? Zyanose? Stridor? Halsvenenstauung? Ödem im Gesichts-/Armbereich? Neurologie?</li>
                    <li><strong>CT-Thorax mit KM (Goldstandard)</strong>.</li>
                    <li>Ggf. cCT (bei V.a. Hirnödem).</li>
                    <li>Ggf. weitere Diagnostik zum Ausschluss von Differentialdiagnosen (BGA, NT-proBNP, 12-Kanal-EKG, POCUS).</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p>Interdisziplinäre Rücksprache mit interventioneller Radiologie, Gefäßchirurgie, Onkologie und Strahlentherapie!</p>
                </div>`
            },
            {
                title: "Differenzialdiagnosen",
                html: `<div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Fokus: Halsvenenstauung</th>
                                <th>Fokus: Gesichtsödem</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    • Herzinsuffizienz<br>
                                    • Lungenarterienembolie<br>
                                    • Spannungspneumothorax<br>
                                    • Perikardtamponade<br>
                                    • AECOPD / schwerer Asthmaanfall<br>
                                    • Höhergradige Trikuspidalklappeninsuffizienz
                                </td>
                                <td>
                                    • Angioödem (allergisch, hereditär, ACE-Hemmer-induziert, etc.)<br>
                                    • Myxödem (bei Hypothyreose)<br>
                                    • Cushing Syndrom
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            },
            {
                title: "Therapie",
                html: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li>Stabilisierung der Vitalfunktionen gemäß ABCDE-Schema.</li>
                    <li><strong>Oberkörperhochlagerung (30-45°).</strong></li>
                    <li>Ggf. Glukokortikoidgabe (z.B. Dexamethason 4 mg 1-1-1-1 p.o./i.v.); gute Wirkung z.B. bei Lymphomen oder nach Bestrahlung, ansonsten geringe Evidenz.</li>
                    <li>Ggf. Diuretika (z.B. Furosemid 40 mg i.v.); klinisch gebräuchlich, jedoch geringe Evidenz.</li>
                </ul>
                <h3>Spezifische Therapie</h3>
                <ul>
                    <li><strong>Bei Malignom:</strong> Endovaskuläre Therapie (z.B. Stent), Radiatio (bei strahlensensiblen Tumoren), Chemotherapie.</li>
                    <li><strong>Bei Thrombose:</strong> Therapeutische Antikoagulation (z.B. UFH PTT-gesteuert oder NMH), ggf. endovaskuläre Therapie, ggf. Katheter-Explantation.</li>
                </ul>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li>Die häufigsten Ursachen des VCSS sind Malignome und Device-assoziierte Thrombosen.</li>
                    <li>Ein VCSS kann bei bekanntem Tumorleiden auftreten oder als Erstmanifestation auf ein bisher unerkanntes Malignom hindeuten.</li>
                    <li>Sichtbare Kollateralvenen an der Brustwand sprechen für einen <strong>subakuten Beginn</strong> (z.B. graduelle Tumorkompression).</li>
                    <li>Bei Hirn- oder Larynxödem infolge der venösen Abflussstörung besteht <strong>akute Lebensgefahr</strong> (selten!).</li>
                    <li>Die endovaskuläre Therapie mittels Stent ist bei akuter Lebensgefahr das Mittel der Wahl.</li>
                    <li>Zielgerichtete Tumortherapie erfolgt erst nach histologischer Sicherung und Staging.</li>
                    <li>Die Therapie erfordert eine enge interdisziplinäre Abstimmung.</li>
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
                        <p class="dispo-spec">Nicht vorgesehen bei akuter Symptomatik.</p>
                        <p class="dispo-foot">Wiedervorstellung jederzeit bei Verschlechterung anbieten; Kontrollzeitpunkt durch den weiterbehandelnden Arzt festlegen.</p>
                    </section>
                    <section class="dispo-card dispo-gelb">
                        <header class="dispo-head"><span class="dispo-dot" aria-hidden="true"></span><h3>GELB &ndash; Stationäre Aufnahme (Normalstation / ZNA-Station)</h3></header>
                        <p class="dispo-sub">Regelpfad Fachabteilung</p>
                        <ul class="dispo-contacts">
                        <li class="dispo-contact"><span class="dispo-fach">Allgemeinchirurgie (ACH)</span><span class="dispo-tel">4881</span><span class="dispo-note">Dienstarzt bis 15:30 Uhr: 4004</span></li>
                        <li class="dispo-contact"><span class="dispo-fach">Thoraxchirurgie (TCH)</span><span class="dispo-tel">über Station 2245</span></li>
                        <li class="dispo-contact"><span class="dispo-fach">Onkologie</span><span class="dispo-tel">4600</span><span class="dispo-note">Onkologischer Oberarzt</span></li>
                        </ul>
                        <p class="dispo-spec">Bildgebung und onkologische/thoraxchirurgische Mitbeurteilung vor Therapieentscheidung.</p>
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
                        <li class="dispo-contact"><span class="dispo-fach">IMC 2.0 (KAIM, 2 Erd)</span><span class="dispo-tel">4764</span><span class="dispo-note">internistische IMC</span></li>
                        <li class="dispo-contact"><span class="dispo-fach">ITS-Koordinator</span><span class="dispo-tel">3008</span><span class="dispo-note">zentraler ITS-Aufnahmekontakt</span></li>
                        </ul>
                        <p class="dispo-foot">Anmeldung immer über den ITS-Koordinator (3008); Transport erst nach Stabilisierung und mit ärztlicher Begleitung.</p>
                    </section>
                </div>
                <p class="dispo-actions"><button type="button" class="dispo-dir-btn" data-dir-open><i class="fa-solid fa-address-book"></i> Vollständiges Telefonverzeichnis öffnen</button></p>`
            }
        ],
        stand: "04/25",
        sources: `Wright K et al. Malignant Superior Vena Cava Syndrome: A Scoping Review. J Thorac Oncol. 2023.<br>
        Wilson LD et al. Clinical practice. Superior vena cava syndrome with malignant causes. N Engl J Med. 2007.<br>
        Lepper PM et al. Superior vena cava syndrome in thoracic malignancies. Respir Care. 2011.<br>
        Kühn JP et al. Interventionelle Behandlung des akuten und subakuten Vena-cava-superior-Syndroms. Pneumologie 2013.`
    });
})();