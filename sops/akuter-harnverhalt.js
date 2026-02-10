(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "akuter-harnverhalt",
        title: "Akuter Harnverhalt",
        category: "Nephrologie",
        catKey: "nephro",
        sections: [
            {
                title: "Definition",
                html: `<p><strong>Akuter Harnverhalt:</strong> Akutes Unvermögen, die gefüllte Harnblase zu entleeren.</p>`
            },
            {
                title: "Ursachen",
                html: `<ul>
                    <li><strong>Obstruktion</strong> (häufig: BPH; sonstige: Steine, Tumoren, Koagel, Fremdkörper, Striktur, etc.)</li>
                    <li><strong>Medikamente</strong> (siehe Tabelle im Abschnitt Medikamentenliste)</li>
                    <li><strong>Infektion/Inflammation</strong> (HWI, Prostatitis, Vulvovaginitis)</li>
                    <li><strong>Neurologisch</strong> (Bandscheibenvorfall, Schlaganfall, MS, etc.)</li>
                    <li><strong>Sonstige</strong> (iatrogen z.B. nach Spinalanästhesie, Alkohol, etc.)</li>
                </ul>`
            },
            {
                title: "Symptome",
                html: `<ul>
                    <li>Unfähigkeit zur Miktion</li>
                    <li>Unterbauchschmerzen, praller Unterbauchtumor</li>
                    <li>ggf. vegetative Symptomatik (Blässe, Schwitzen)</li>
                    <li>ggf. Agitation, Unruhe, Delir</li>
                    <li>ggf. Symptome einer zugrundeliegenden Erkrankung (z.B. Rückenschmerzen bei Bandscheibenvorfall)</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                html: `<ul>
                    <li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur)</li>
                    <li>1x venöser Zugang</li>
                    <li><strong>Labor:</strong> BB, CRP, E'lyte, NW, Gerinnung</li>
                    <li><strong>Anamnese:</strong> Symptome? Beginn? Erstereignis? Fieber? Algurie, Hämaturie, Urinträufeln? Trauma? Fremdkörper? Vorerkrankungen/-OP? Medikamente?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Unterbauch-Tumor? Vergrößerte/schmerzhafte/verhärtete Prostata? Sphinktertonus? Rekto-/Zystozele? Paraphimose? Sensibilität, Motorik und Reflexe der unteren Extremität?</li>
                    <li><strong>U-Status:</strong> Leukozyturie? Nitrit? Mikrohämaturie?</li>
                    <li><strong>POCUS:</strong> Harnblasenfüllung? Harnstau? Prostata vergrößert? Hinweise für Tumoren im Bereich von Blase/Uterus/Prostata?</li>
                    <li><strong>ggf. CT-Abdomen/Becken:</strong> bei V.a. Tumoren in diesem Bereich</li>
                    <li><strong>ggf. MRT der Wirbelsäule:</strong> bei V.a. spinalen Prozess</li>
                </ul>
                <div class="callout callout-hinweis">
                    <p><strong>Interdisziplinäre Zusammenarbeit:</strong> Abhängig von Ursache: Rücksprache mit Urologie/Chirurgie/Gynäkologie/Neurologie/Neurochirurgie!</p>
                </div>`
            },
            {
                title: "Therapie",
                html: `<h3>Allgemeinmaßnahmen</h3>
                <ul>
                    <li><strong>Anlage eines transurethralen DK</strong> (mit sofortiger vollständiger Entleerung der Harnblase)</li>
                    <li>Anlage eines transurethralen Spülkatheters bei Harnblasentamponade</li>
                    <li>ggf. Anlage eines SPK durch Urologie/Chirurgie (z.B. bei Unmöglichkeit oder Kontraindikationen einer transurethralen Anlage)</li>
                </ul>
                <h3>Kausale Therapie</h3>
                <ul>
                    <li><strong>Beseitigung der Obstruktion:</strong>
                        <ul>
                            <li><strong>BPH:</strong> Alphablocker, z.B. <strong>Tamsulosin 0,4 mg retard 0-0-1 p.o.</strong> oder <strong>Doxazosin 1-8 mg bzw. 4-8 mg retard 0-0-1 p.o.</strong></li>
                            <li>Sonstige Obstruktionen: Urologische bzw. ggf. gynäkologische oder chirurgische Intervention</li>
                        </ul>
                    </li>
                    <li>Absetzen von Medikamenten, die einen Harnverhalt auslösen können (sofern vertretbar, s. Tabelle Medikamentenliste)</li>
                    <li><strong>Antibiotikatherapie bei Infektion</strong> (gemäß lokalem Standard)</li>
                    <li>Neurochirurgische/Strahlentherapeutische Intervention bei spinalem Prozess (Abszess, Metastase, Cauda-Equina-Syndrom, etc.)</li>
                </ul>`
            },
            {
                title: "Merke",
                html: `<ul>
                    <li>Neben einer sofortigen Entlastung des Harnverhalts sollte stets auch eine Ursachensuche erfolgen.</li>
                    <li>Auch bei bekannter BPH auf <strong>Red Flags</strong> achten: Trauma? Neurologische Ausfälle? Fieber? AKI? Hämaturie?</li>
                    <li>Ursachen mit sofortiger Therapienotwendigkeit: <strong>Cauda-Equina-Syndrom, Paraphimose, Urosepsis, Blutung.</strong></li>
                    <li>Bei <strong>Anurie</strong> muss zwingend ein akuter Harnverhalt ausgeschlossen werden (als DD zur Anurie aufgrund prä-/intrarenaler AKI).</li>
                    <li>Bei Harnstauungsnieren nach Harnableitung <strong>Polyurie</strong> möglich (→ Bilanzierung und ggf. Ausgleich der Flüssigkeitsverluste).</li>
                    <li>Ein intermittierendes Wasserlassen schließt einen akuten Harnverhalt nicht aus (Stichwort: <strong>"Überlaufblase"</strong>).</li>
                    <li>Chronische Blasenentleerungsstörungen sind meist weniger schmerzhaft als ein akuter Harnverhalt.</li>
                    <li>Bei kognitiv eingeschränkten Patienten äußert sich der Harnverhalt häufig als Agitation/Delir (s. SOP Delir).</li>
                    <li>Bei Alphablockern (Tamsulosin, etc.) über Gefahr der <strong>orthostatischen Hypotonie</strong> und <strong>retrograden Ejakulation</strong> aufklären.</li>
                </ul>`
            },
            {
                title: "Disposition",
                html: `<ul>
                    <li><strong>BPH als Ursache des Harnverhalts:</strong>
                        <ul>
                            <li>Ambulantes Procedere mit DK (+ Beinbeutel)</li>
                            <li>+ Alphablocker und Termin bei Urologen ≤ 3 d</li>
                        </ul>
                    </li>
                    <li><strong>Harnverhalt mit akut behandlungsbedürftiger Pathologie:</strong>
                        <ul>
                            <li>Stationäre Aufnahme in entsprechende Abteilung erwägen</li>
                        </ul>
                    </li>
                </ul>`
            },
            {
                title: "Medikamentenliste",
                html: `<p><em>Mit Harnverhalt assoziierte Medikamente (modifiziert nach Verhamme et al. 2008 und Marshall et al. 2014)</em></p>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Medikamentenklasse</th>
                                <th>Beispiele</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Antiarrhythmika</strong></td>
                                <td>Flecainid, Procainamid</td>
                            </tr>
                            <tr>
                                <td><strong>Anticholinergika</strong></td>
                                <td>Atropin, Scopolamin, Glykopyrrolat</td>
                            </tr>
                            <tr>
                                <td><strong>Antidepressiva</strong></td>
                                <td>Amitriptylin, Imipramin, Doxepin</td>
                            </tr>
                            <tr>
                                <td><strong>Antihistaminika</strong></td>
                                <td>Diphenhydramin, Dimenhydrinat</td>
                            </tr>
                            <tr>
                                <td><strong>Antihypertensiva</strong></td>
                                <td>Hydralazin, Nifedipin</td>
                            </tr>
                            <tr>
                                <td><strong>Antiparkinson-Medikamente</strong></td>
                                <td>Amantadin, Bromocriptin, Levodopa, Biperiden</td>
                            </tr>
                            <tr>
                                <td><strong>Antipsychotika</strong></td>
                                <td>Haloperidol, Risperidon</td>
                            </tr>
                            <tr>
                                <td><strong>Sympathomimetika</strong></td>
                                <td>Ephedrin, Phenylephrin, Isoprenalin, Terbutalin</td>
                            </tr>
                            <tr>
                                <td><strong>Verschiedene</strong></td>
                                <td>Opiate, Benzodiazepine, NSAR, Amphetamine, Hormonpräparate, Detrusorrelaxantien, Carbamazepin, Baclofen</td>
                            </tr>
                        </tbody>
                    </table>
                </div>`
            }
        ],
        stand: "12/22",
        sources: `Marshall JR et al. An evidence-based approach to emergency department management of acute urinary retention. Emerg Med Pract. 2014 Jan;16(1):1-20; quiz 21. – Billet M et al. Urinary Retention. Emerg Med Clin North Am. 2019 Nov;37(4):649-660. – KMC Verhamme et al. Drug-induced urinary retention: incidence, management and prevention Drug Saf. 2008;31(5):373-88. – Boettcher S et al. Urinary retention: benefit of gradual bladder decompression - myth or truth? A randomized controlled trial. Urol Int. 2013;91(2):140-4. – Etafy MH et al. Rapid versus gradual bladder decompression in acute urinary retention. Urol Ann. Oct-Dec 2017;9(4):339-342. – McNeill S A. Spontaneous versus precipitated AUR: the same? World J Urol. 2006 Sep;24(4):354-9. – Harrison S et al. Post-Obstructive Diuresis: Physiopathology, Diagnosis and Management after Urological Treatment of Obstructive Renal Failure. (2018) Open Journal of Urology, 8, 267-274. – https://www.urologielehrbuch.de/harnverhalt.html, zuletzt abgerufen am 11/22. – Fachinformationen der genannten Arzneimittel, Stand 12/22.`
    });
})();