/* ============================================================
   statuten/statut-zna.js
   ------------------------------------------------------------
   Statut / Arbeitsordnung Zentrale Interdisziplinaere Notaufnahme
   Quelle: docs/202510419_STATUT_ZNA_V1-01.docx (Version 1.01)

   Wortlaut unveraendert uebernommen - einschliesslich der
   Schreibweisen des Originals. Aus dem Word-Satz wurden nur
   Aufzaehlungen, Zwischenueberschriften, Tabellen und
   Hervorhebungen in HTML uebertragen.

   Abbildungen stehen NICHT im Text, sondern in
   tools/data/statuten.mjs. Ein Platzhalter
   <div data-figure-slot="..."></div> markiert die Stelle, an der
   die Anwendung sie einsetzt - genau dort, wo sie im Original
   steht. Der Build prueft, dass jeder Platzhalter eine Abbildung
   und jede Abbildung ihren Platzhalter hat.
   ============================================================ */
(function() {
    'use strict';

    if (!window.STATUT_DATA) window.STATUT_DATA = [];

    window.STATUT_DATA.push({
        id: 'statut-zna',
        title: 'Statut / Arbeitsordnung Zentrale Interdisziplinäre Notaufnahme',
        short: 'Statut ZNA',
        subtitle: 'Klinikum St. Georg gGmbH',
        unit: 'Zentrale Interdisziplinäre Notaufnahme / Aufnahme- und Beobachtungsstation',
        stand: '04/25',
        date: '19.04.2025',
        version: '1.01',
        author: 'CA Dr. R. Stöhr, S. Gusovius-Scheunpflug',
        release: 'ZL Dr. Stöhr, Fr. Pfefferle, Prof. Dr. Geißler',
        file: 'docs/202510419_STATUT_ZNA_V1-01.docx',
        summary: 'Organigramm, Leistungsspektrum, Räume, Personal, Dienstmodell, Versorgungsprozess, Triage, Crowding, Dokumentation und Weiterbildung.',
        sections: [
            {
                key: 'organigramm',
                title: '1. Organigramm',
                icon: 'fa-sitemap',
                html: `<p><strong>Zentrale Interdisziplinäre Notaufnahme &ndash; Organigramm</strong></p>
                <div data-figure-slot="organigramm"></div>`
            },
            {
                key: 'praeambel',
                title: '2. Grundlage / Präambel',
                icon: 'fa-book-open',
                html: `<p>Die Zentrale Interdisziplinäre Notaufnahme / Aufnahme und Beobachtungsstation am Klinikum St. Georg, Leipzig behandelt alle Notfallpatienten, welche sich eigeninitiiert in der Notaufnahme vorstellen, der Notaufnahme durch den Rettungsdienst zugeführt werden oder durch externe Zuweiser (Fachärzte, Hausärzte, ambulante Versorgungszentren, andere Krankenhäuser etc.) der Notaufnahme zugewiesen werden. Dabei ist es unerheblich, ob der Patient einen gültigen Versicherungsschutz vorweisen kann. Es gilt das Recht auf Notfallversorgung. Maßgeblich ist die Abwendung von Gefahren für &bdquo;Leib und Leben&ldquo;</p>
                <p>Die interdisziplinäre Notaufnahme steht für folgende Patientengruppen zur Verfügung:</p>
                <ul>
                    <li>Selbstzuweiser</li>
                    <li>Rettungsdienstpatienten</li>
                    <li>Externe Zuweisungen / Verlegungen</li>
                    <li>Zuweisungen aus der Portalpraxis</li>
                    <li>Interne Notfallpatienten</li>
                    <li>Interne Nutzung von Ressourcen für stationäre Patienten (OP, ZVK, stationäre Gipse, etc.)</li>
                </ul>`
            },
            {
                key: 'leistungsspektrum',
                title: '3. Leistungsspektrum',
                icon: 'fa-list-check',
                html: `<h3>3.1 Zentrale Interdisziplinäre Notaufnahme</h3>
                <ul>
                    <li>Administrative Aufnahme</li>
                    <li>Triagierung/ Ersteinschätzung von Patienten mit akuten Beschwerden nach Manchester Triage System &reg;</li>
                    <li>Zuordnung des Patienten in Strukturen des Klinikums (MVZ / Notaufnahme / Zentren)</li>
                    <li>Standardisierte Detektion von Patientenspezifischen Risiken (Delir, vd. Kontagiösität)</li>
                    <li>Sofortige Weiterleitung vital bedrohter Patienten in den Schockraum</li>
                    <li>Schockraumtherapie i.R. definierter Personal- und Managementstruktur (SOP)</li>
                    <li>Leitsymptomgetriggerter Beginn der Sofortdiagnostik i.R. von Anordnungspresets (SOP / Behandlungspfade Pflege)</li>
                    <li>Untersuchung von Patienten mit akuten Beschwerden durch Dienstarzt der Notaufnahme, ggf. sofortiger Behandlungs- und Therapiebeginn</li>
                    <li>Facharztstandard durch eigenständige Facharztdienstgruppen (konservativ/ operativ)</li>
                    <li>Oberarztrufbereitschaft mit ZWB Klinische Akut und Notfallmedizin (24/7)</li>
                    <li>Patientenbetreuung und Patientenüberwachung</li>
                    <li>Konsiliarische Untersuchung der Patienten durch einen Arzt spezialisierter Fachabteilungen</li>
                    <li>Vollständige Dokumentation gemäß Empfehlung &bdquo;Nationaler Datensatz Notaufnahme&ldquo;</li>
                    <li>Arztbriefschreibung / Notaufnahmedokumentation</li>
                    <li>Ambulante Entlassung / stationäre Aufnahme im Haus / Weiterleitung in spezialisierte Einrichtungen</li>
                    <li>Übergabe / Übernahme von Rettungsdienstpatienten als Rettungsdienst - Arzt oder Notarzt - Arztgespräch (Übergabe an Arzt der Notaufnahme)</li>
                    <li>telefonische Annahme von Einweisungen &ndash; Koordinator Interdisziplinäre Notaufnahme</li>
                    <li>elektronische Annahme von Zuweisungen über den Rettungsdienst (IVENA)</li>
                    <li>Durchführung der Abrechnung von in der Notaufnahme erbrachten Leistung</li>
                    <li>Vollständige Weiterbildung zum Erwerb der ZWB Klinische Akut- und Notfallmedizin</li>
                    <li>Befristete Weiterbildungen im Rahmen vorliegender Weiterbildungsermächtigungen</li>
                    <li>Betreuung und Ausbildung von Medizinstudenten im Rahmen der studentischen Ausbildung (Famulatur, Praktisches Jahr)</li>
                    <li>Beteiligung an Rotationsmodellen mit Kliniken im Rahmen von gesonderter Vereinbarungen</li>
                    <li>Mentoring von Studenten</li>
                    <li>Durchführung von Seminaren und interdisziplinären Weiterbildungen</li>
                    <li>Durchführung von Reviews, Mortalitäts- und Morbiditätsbesprechungen</li>
                    <li>Teilnahme am CIRS System des Krankenhauses</li>
                </ul>
                <h3>3.2 Leistungsspektrum Aufnahme- und Beobachtungsstation</h3>
                <p>Für die Aufnahme- und Beobachtungsstation (ABS) liegt ein gesondertes Statut vor.</p>`
            },
            {
                key: 'infrastruktur',
                title: '4. Infrastruktur, Ressourcen und Leistungen',
                icon: 'fa-hospital',
                html: `<p>Die ZNA am Klinikum St. Georg ist für die Versorgung ungeplanter Akut- und Notfallpatienten eingerichtet und ausgestattet. Die Strukturvoraussetzung sind das Patientenaufkommen und die Anwesenheit von Patienten in den jeweiligen Fallschweren des zur Vorstellung führenden Leitsymptomes, Beschwerdebildes oder vorliegender Verletzungen.</p>
                <p>In der Notaufnahme erfolgt die Versorgung von Patienten mit Krankheitsbildern aus operativen und konservativen Fachbereichen des Klinikums.</p>
                <p>In eigener Struktur der ZNA werden somit Besetzungsreihen für die jeweiligen Patientenkollektive vorgehalten. Darüber hinaus erfolgt die Besetzung der Notaufnahme durch Fachärzte mit abgeschlossener und vorliegender Zusatzweiterbildung &bdquo;Klinische- Akut und Notfallmedizin&ldquo;</p>
                <p>Näheres regelt das Kapitel: &bdquo;6 Ärztliche / Pflegerische Besetzung&ldquo;</p>
                <p>Sprechstunden finden in der Notaufnahme grundsätzlich nicht statt. Elektive stationäre Aufnahmen erfolgen direkt auf die entsprechenden Stationen. Für ungeplante, aber koordiniert eingehende Patientenzugänge durch externe Zuweiser kann die Zentrale Interdisziplinäre Notaufnahme nach vorheriger Absprache mit dem Notaufnahmedienstarzt (Diensthabender Oberarzt) genutzt werden, wenn die direkte stationäre Aufnahme und Versorgung des Patienten nicht möglich ist oder eine primäre Diagnostik zur Entscheidungsfindung indiziert ist.</p>
                <h3>4.1 Bereiche</h3>
                <p>In der Notaufnahme erfolgt die Versorgung von Patienten mit Krankheitsbildern aus operativen und konservativen Fachbereichen des Klinikums. Hierfür stehen generell jeweils fachbereichsbezogene Räumlichkeiten zur Verfügung, welche jedoch Interdisziplinär unter Berücksichtigung des tatsächlichen und individuellen Bedarfes (z.B. Überwachungs- oder Schockraumkapazitäten) genutzt werden.</p>
                <p>Im Weiteren wird in den vorhandenen Räumen und Strukturen die pädiatrische und kinderchirurgische Notfallversorgung sichergestellt. Die ärztliche Besetzung erfolgt direkt in Organisationsobliegenheit des Zentrums für Kinder und Jugendmedizin. Die pflegerisches Besetzung des Pädiatrischen und Kinderchirurgischen Notaufnahme wird durch das Pflegepersonal der Zentralen Interdisziplinären Notaufnahme sichergestellt und bedarfsweise durch Pflegende der Pädiatrischen Intensivstation jederzeit unterstützt.</p>
                <p>In die Gesamtfläche und die Raume der Notaufnahme integriert (ab Q1/2025) befindet sich die Aufnahme und Beobachtungsstation, deren Belegung exklusiv durch Notaufnahmepatienten erfolgt. Die ärztliche und pflegerische Betreuung der Aufnahme- und Beobachtungsstation erfolgt durch das der Funktionseinheit zugeordnete Personal selbst.</p>
                <p>Die Regelungen zum Versorgungsprozess der ABS sind in den diesem Bereich zugeordneten Dokumenten zu finden.</p>
                <h3>4.2 Räume / Raumstruktur:</h3>
                <ul>
                    <li>Triage / Sichtung 2 Plätze</li>
                    <li>Administration 2 Plätze</li>
                    <li>Wartebereich 28/35max Plätze (SOLL: 40)</li>
                    <li>Liegendwarten 10 Plätze</li>
                    <li>Behandlungsbereich 1 (Konservativ) 8 Plätze</li>
                    <li>Behandlungsbereich 2 (Operativ) 8 Plätze</li>
                    <li>Behandlungsraum Kinder</li>
                    <li>Untersuchungsraum 1</li>
                    <li>Untersuchungsraum 2</li>
                    <li>Schockraum 1</li>
                    <li>Eingriffsraum / Schockraum 2</li>
                    <li>Aufnahme- / Beobachtungsstation 6 Betten</li>
                    <li>Isolationsbereich mit Nasszelle 1</li>
                    <li>Isolations-/ Konsilbereich 2</li>
                </ul>
                <p>Bettplätze: 22 Behandlung, 10 Liegendwarten, 1 Kinder<br>
                Aufnahme-/ Beobachtungsstation 6 Bettplätze (Iso 2 zus.)</p>
                <h3>4.3 Sonstige Räume</h3>
                <ul>
                    <li>Lagerbereich ZNA</li>
                    <li>Lagerraum ZNA</li>
                    <li>Personalaufenthalt</li>
                    <li>Pflegerische Leitung</li>
                    <li>Arbeitsplätze Controller 2 Plätze</li>
                    <li>Oberarzt- / Dienstzimmer</li>
                    <li>Chefarztbüro</li>
                    <li>Chefarztsekretariat</li>
                </ul>`
            },
            {
                key: 'personal',
                title: '5. Personal ZNA und Aufnahme- und Beobachtungsstation',
                icon: 'fa-user-doctor',
                html: `<h3>5.1 Personalstruktur im Ärztlichen Dienst</h3>
                <p>Die Besetzung der Notaufnahme erfolgt eigenständig rund um die Uhr (24/7). Der Notaufnahme ist als eigenständiger Chefarztbereich eine entsprechende Dienstgruppe personalplanerisch zugeordnet um die Besetzung der ZNA und der Aufnahme- und Beobachtungstation im eigenständigen Schichtsystem 24/7 zu besetzen.</p>
                <ul class="doc-roles">
                    <li><span class="doc-role">Zentrumsleitung Zentrum für Notfallmedizin</span> <span class="doc-role-who">[Zentrumsleiter / Chefarzt]</span></li>
                    <li><span class="doc-role">Ärztliche Leitung NFA</span> <span class="doc-role-who">[Chefarzt]</span></li>
                    <li><span class="doc-role">Stellvertretung</span> <span class="doc-role-who">[Ltd. Oberarzt]</span></li>
                    <li><span class="doc-role">Zusatzweiterbildung Klin. Akut- und Notfallmedizin</span> <span class="doc-role-who">[Chefarzt mit ZWB]</span></li>
                    <li><span class="doc-role">Zusatzweiterbildung Notfallmedizin</span> <span class="doc-role-who">[Oberarzt mit ZWB]</span></li>
                    <li><span class="doc-role">Weiterbildung Chirurgie / Common Trunk</span> <span class="doc-role-who">[Oberarzt / FA f. Innere Medizin]</span></li>
                    <li><span class="doc-role">Weiterbildung Innere Medizin</span> <span class="doc-role-who">[Oberarzt / FA f. Chirurgie]</span></li>
                    <li><span class="doc-role">Weiterbildung Allgemeinmedizin</span> <span class="doc-role-who">[FA / FOA, ggf. anteilig]</span></li>
                    <li><span class="doc-role">Dienstplanung Ärzte</span> <span class="doc-role-who">[Facharzt]</span></li>
                    <li><span class="doc-role">Hygienebeauftragter Arzt</span> <span class="doc-role-who">[Facharzt]</span></li>
                    <li><span class="doc-role">Transfusionsbeauftragter Arzt</span> <span class="doc-role-who">[Facharzt]</span></li>
                    <li><span class="doc-role">Brandschutzbeauftragter Arzt</span> <span class="doc-role-who">[Facharzt]</span></li>
                </ul>
                <p>Grundlegend erfolgt patientenseitig die Trennung zwischen operativem und konservativem Bereich. Es stehen Dienstgruppen zur Versorgung der jeweiligen Patientenkollektive zur Verfügung.</p>
                <p>Darüber hinaus erfolgt die Besetzung der ZNA fachärztlich mit mindestens einem Facharzt von 07.30 &ndash; 20.00 Uhr. Regelhaft sind zwei Fachärzte im Dienst von 07.30 &ndash; 16.00 Uhr.</p>
                <p>Die Vorhaltung im Ärztlichen Dienst mit Zusatzbezeichnung Klinische Akut- und Notfallmedizin erfolgt 24/7 in Präsenz bzw. über ein Hintergrundrufdienstsystem.</p>
                <p>Die Personalstruktur setzt sich daher wie folgt zusammen:</p>
                <ul>
                    <li>Zentrumsleitung Zentrum für Notfallmedizin</li>
                    <li>Chefarzt Zentrale Notaufnahme und Aufnahme- und Beobachtungsstation</li>
                    <li>Oberärzte mit FA-Bezeichnung und vorliegender ZWB &bdquo;Klinische- Akut und Notfallmedizin&ldquo;</li>
                    <li>Fachärzte aus allen klinischen Fachrichtungen zum Erwerb der ZWB &bdquo;Klinische Akut und Notfallmedizin&ldquo;.</li>
                    <li>Arzte in Weiterbildung zum Erwerb das Facharztes (Innere Medizin oder i.R. Common-Trunk Chirurgie im Sinne einer 6-monatigen Entsendung durch die Kliniken.</li>
                </ul>
                <h3>5.2 Personalstruktur im Pflegedienst</h3>
                <p>Der Einsatz und die Beschäftigung von Mitarbeitern im Pflegedienst richtet sich nach den spezifischen Aufgaben und den strukturellen Voraussetzungen zum Betrieb der Zentralen Notaufnahme / Aufnahme- und Beobachtungsstation.</p>
                <p>Die hierfür in der ZNA eingesetzten Qualifikationen der nichtärztlichen Mitarbeiter:</p>
                <ul>
                    <li>Fachpflege Notaufnahme</li>
                    <li>Gesundheits- und Krankenpflege</li>
                    <li>Pflegefachmann, Pflegefachfrau</li>
                    <li>Med. Fachangestellte</li>
                    <li>Notfallsanitäter / Rettungsassistenten</li>
                    <li>Krankenpflegehelfer / pfleg. Hilfskräfte</li>
                    <li>ATA, MFA</li>
                    <li>Med. Verwaltungsangestellte</li>
                </ul>
                <p>Im Kontext der Akademisierung der Pflegeberufe erfolgt im Weiteren der Einsatz entsprechender Mitarbeiter mit abgeschlossenem Bachelor- / Masterstudium, ggf. mit fachspezifisch zugeordneten Aufgaben</p>
                <h3>5.2.1 Funktionsbereiche Pflegedienst</h3>
                <div class="table-wrap"><table>
                    <thead><tr><th>Aufgabe</th><th>Kurzbeschreibung</th></tr></thead>
                    <tbody>
                        <tr><td>Hygieneverantwortlicher MA</td><td><ul><li>Ansprechpartner für Fragen und Anregungen hygienischer Fachfragen ZNA</li><li>Teilnahme an hausinternen Fortbildungen (Hygiene)</li><li>Zuarbeit zur Pflichtbelehrung aller MA ZNA (1xjährlich)</li><li>Einweisung neuer MA Pflege ZNA über Fachthemen</li></ul></td></tr>
                        <tr><td>Gerätebeauftragte n MPR / MPBetr.Vo</td><td><ul><li>Ansprechpartner für Fragen und Anregungen der Geräte in der ZNA</li><li>Teilnahme an Erstschulungen neuer Gerätschaften</li><li>Einweisung aller MA Pflege ZNA über vorhandene Geräte</li></ul></td></tr>
                        <tr><td>Praxisanleiter Pflege</td><td><ul><li>Ansprechpartner für Fragen und Anregungen zum Thema Ausbildung von GuK, Pflege- Praktikanten/ -hospitanten</li><li>Teilnahme an hausinternen Fortbildungen (Praxisanleiter, min. 25 Stunde/ Jahr)</li><li>Vollumfängliche Betreuung von Azubis GuK</li></ul></td></tr>
                        <tr><td>MANV</td><td><ul><li>Ansprechpartner für Fragen und Anregungen zum Thema Versorgung bei Massenanfall von Verletzten (MANV)</li><li>regelmäßige Kontrolle der MANV- Kisten auf Vollständigkeit und Einsatzfähigkeit (Verfall etc.) inkl. Doku der Kontrolle</li><li>Einweisung neuer MA Pflege ZNA über Lagerungsort und Anwendung</li></ul></td></tr>
                        <tr><td>Lagerräume</td><td><ul><li>Ansprechpartner für Fragen und Anregungen zum Thema Lagervorhaltung ZNA</li><li>regelmäßige Kontrolle der Lagerbestände auf Aktualität und Anwendbarkeit</li></ul></td></tr>
                        <tr><td>Arbeitsschutz- /Brandschutzbeauftrage</td><td><ul><li>Ansprechpartner für Fragen und Anregungen Arbeits-/ Brandschutz</li><li>Teilnahme an hausinternen Fortbildungen (Feuerlöschen etc.)</li><li>Zuarbeit zur Pflichtbelehrung aller MA ZNA (3xjährlich)</li><li>Einweisung neuer MA Pflege ZNA über Fachthemen</li></ul></td></tr>
                        <tr><td>Ivena &reg;</td><td><ul><li>Kenntnisse Medizinische Richtline</li><li>Zugangsberechtigung IVENA Alarm- Web- App</li><li>Eintrag von Schließungen</li></ul></td></tr>
                        <tr><td>Fixiertrainer</td><td><ul><li>Ansprechpartner für Fragen und Anregungen Fixiertraining</li><li>Organisation von regelmäßigen Fixiertrainings in der ZNA mit Doku (min. 1 x monatlich)</li><li>Einweisung neuer MA Pflege ZNA im Thema &bdquo;Fixation&ldquo;</li></ul></td></tr>
                        <tr><td>Mentoren/ Praxisanleiter Auszubildende Rettungswesen</td><td><ul><li>Ansprechpartner für Fragen und Anregungen zum Thema Ausbildung von NotfallsanitäterInnen, RettungssanitäterInnen</li><li>Teilnahme an Fortbildungen (Praxisanleitertreffen der Branddirektion/ Johanniterakademie)</li><li>vollumfängliche Betreuung von Azubis Rettungswesen</li></ul></td></tr>
                        <tr><td>QM</td><td><ul><li>Ansprechpartner für Fragen und Anregungen zum Thema Qualitätssicherung ZNA</li><li>regelmäßige Kontrolle der vorhandenen Hefter (SOP, Zertifizierung etc.) auf Aktualität und Anwendbarkeit</li><li>Überarbeitung der Dokumentation Pflege anhand von hausinternen Anforderungen und gesetzlichen Vorgaben</li><li>Einweisung neuer MA ZNA über Doku in der ZNA</li></ul></td></tr>
                        <tr><td>Tresenverantwortlichkeiten</td><td><ul><li>Ansprechpartner für Fragen und Anregungen zum Thema Administration in der ZNA</li><li>regelmäßige Kontrolle der Schrankbestände auf Aktualität und Anwendbarkeit</li><li>Einweisung neuer MA Pflege ZNA über Lagerungsort und Anwendung</li></ul></td></tr>
                    </tbody>
                </table></div>
                <h3>5.2.2 Tätigkeitsprofil Triage (Anmeldung durch den RD (Tel. 909 4440 ) Anmeldung für Selbstvorsteller (Tel 909 4271)</h3>
                <p>Die Triagierung der Rettungsdienstpatienten obliegt der planerischen Zuordnung &bdquo;Rettungsdienst Triage&ldquo;. Dabei wird analog dem Vorgehen nach Manchester Triage System vorgegangen. Es erfolgt die Dokumentation von entsprechenden Pflichtdaten, wie Zuweisungsart, Mobilität, Leitsymptombezogenen Vitalwerten. Zudem erfolgt die Koordination der eintreffenden Rettungsmittel über den der Rettungsdienst Triage zugewiesenen Mitarbeiter geführt. Dabei erfolgt die jeweilige Weiterleitung der Anrufe/Informationen an den fachspezifischen ärztlichen Dienst. Im Falle einer Schockraum-Versorgung erfolgt die Koordination der im Schockraum anwesenden pflegerischen Kolleginnen und Kollegen über die Rettungsdienst Triage.</p>
                <h3>5.2.3 Tätigkeitsprofil Administration ZNA</h3>
                <ul>
                    <li>Administrative Aufnahme von Pat. nach der Triage</li>
                    <li>Erfassung eines definierten Patientenstammdatensatzes</li>
                    <li>Einlesen von radiologischen Befunden</li>
                    <li>Ausgabe von Behandlungsverträgen</li>
                    <li>Administrative Verlegung des Patienten</li>
                    <li>Erstellen von sonstigen Dokumenten</li>
                </ul>
                <h3>5.2.4 Tätigkeitsprofil PD ZNA</h3>
                <ul>
                    <li>Administrative Kurz- Aufnahme von Pat. (im Rahmen der RD-Triage)</li>
                    <li>Durchführung von täglichen Aufgaben innerhalb festgelegter Dienstverantwortlichkeiten mit Unterstützung bei benötigten Ressourcen innerhalb der Verantwortlichkeiten
                        <ul>
                            <li>Triage</li>
                            <li>Bettenzimmer</li>
                            <li>Schockraumleader Pflege</li>
                            <li>Schockraumassistent + Iso- Verantwortung</li>
                            <li>Chirurgische Pflegekraft</li>
                        </ul>
                    </li>
                    <li>Triagierung im SAP nach MTS</li>
                    <li>Erhebung der Vitalparameter bei allen Notfallpatienten nach Leitsymptom (fakultative und obligate Vitalparameter)</li>
                    <li>Dokumentation bis zu dem in der VA Dokumentation in der ZNA festgelegten Punkt</li>
                    <li>Dokumentation der eigenständig durchgeführten Maßnahmen</li>
                    <li>Durchführung und Dokumentation der Erfüllung der ärztlich angeordneten Maßnahmen und Medikationsgaben</li>
                    <li>Legen von periphervenösen Zugängen, Blasenverweilkathetern</li>
                    <li>Blutentnahme/ Abnahme von Blutkulturen/ Urinproben inkl. Anforderung des Labors im SAP</li>
                    <li>Verbringen der Blutentnahmen in die Rohrpost/Labor</li>
                    <li>Erbringen delegationsfähiger Leistung nach ärztlicher Anordnung</li>
                    <li>Verlaufsdokumentation</li>
                    <li>Vorbereitung, Assistenz, Nachbereitung bei chir. Eingriffen/ Versorgungen Anlage von Verbänden</li>
                    <li>Vorbereitung, Assistenz, Nachbereitung bei immobilisierenden Verbänden</li>
                    <li>Assistenz Wundversorgung</li>
                    <li>Grundpflege</li>
                    <li>OP-Vorbereitung von Patienten</li>
                    <li>Assistenz bei chirurgischen oder internistischen Eingriffen</li>
                    <li>Beschaffung chargenpflichtiger Medikamente und Blutprodukte aus dem Labor</li>
                    <li>Organisation und Transport von Patient*innen, insofern diese nicht vom Transportdienst erledigt werden können</li>
                </ul>
                <p>Des Weiteren fallen nicht patientenbezogene Tätigkeiten an, wie z.B.:</p>
                <ul>
                    <li>Auffüllen der Räumlichkeiten</li>
                    <li>Sicherung Betriebsfähigkeit der Räume</li>
                    <li>Desinfektion der Medizinprodukte</li>
                    <li>Bestellwesen</li>
                    <li>Mitkontrolle der Medizinprodukte</li>
                    <li>Auffüllen des Lagers</li>
                </ul>
                <h3>5.2.5 Tätigkeitsprofil ÄD ZNA</h3>
                <ul>
                    <li>Mitwirken bei der Triage, falls vom Aufkommen her mgl. zur frühen Entscheidungsfindung</li>
                    <li>Übernahme von Patienten / Rettungsdienstübergabe / Telefonische Patientendisposition</li>
                    <li>Anordnung der durchzuführenden Maßnahmen/Medikationsgaben auf Triage Blatt plus Dokumentation im Arztbrief</li>
                    <li>Dokumentation der eigenhändig durchgeführten Maßnahmen und Medikationsgaben</li>
                    <li>Anamnese und Körperliche Untersuchung</li>
                    <li>Durchführung oder Mitwirkung bei Interventionen entsprechend Weiterbildungsstand</li>
                    <li>Erhebung der Medikamentenanamnese im AID und Umsetzen auf die KH-Medikation bei ZNA-Kurzliegern</li>
                    <li>Anmeldung der nicht aufschiebbaren Interventionen und Diagnostik</li>
                    <li>Erstellen und Abschließen des Ambulanzarztbriefes</li>
                    <li>Bei mangelnder Bettenkapazität: Erstversorgung und Organisation der externen Verlegung (Vergleich MedRL 11)</li>
                    <li>Abschluss: alle Maßnahmen erledigt, offen Maßnahmen können übertragen werden</li>
                </ul>`
            },
            {
                key: 'besetzung',
                title: '6. Ärztliche / Pflegerische Besetzung',
                icon: 'fa-clock',
                html: `<h3>6.1 Mindestanforderungen 24/7</h3>
                <ul>
                    <li>Sicherstellung der Besetzung des Bereiches &bdquo;Interdisziplinäre Notaufnahme&ldquo; 24/7</li>
                    <li>24/7 Ärztliche Besetzung &bdquo;Konservativ und Operativ&ldquo;</li>
                    <li>24/7 Klinische Akut und Notfallmedizin (Rufbereitschat)</li>
                    <li>Oberärztliche Rufbereitschaft außerhalb der Regel-Dienstzeiten in allen einzelnen Fachbereichen (ACH, VCH, PCH, TCH, GCH, OUCH, Gastroenterologie/ Onkologie, Pneumologie und Kardiologie, Anästhesiologie und Intensivmedizin)</li>
                    <li>Tägliche pflegerische Besetzung innerhalb festgelegter Dienstverantwortlichkeiten (7 Mitarbeiter Pflege unterschiedlicher Qualifikation)</li>
                    <li>Administrative Besetzung mit zwei Verwaltungsangestellten in der ZNA</li>
                </ul>
                <h3>6.2 Regelbesetzung im Ärztlichen Dienst (2024)</h3>
                <p>Die Besetzung der ZNA erfolgt im Dienstsystem. Die Dienstreihen sind Qualifikationskompatibel, so dass der Einsatz von Fachärzten in allen Dienstarten möglich ist. Die Dienstgruppe mit vorliegender ZWB Klinische Akut- und Notfallmedizin ist Interdisziplinär.</p>
                <p>Hierzu sind folgende Dienstarten geführt:</p>
                <div class="table-wrap"><table>
                    <thead>
                        <tr><th>Operativ &ndash; Dienstart</th><th>Dienstzeit</th><th>Konservativ &ndash; Dienstart</th><th>Dienstzeit</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>FA Frühdienst</td><td>07.30 &ndash; 16.00</td><td>FA Frühdienst</td><td>07.30 &ndash; 16.00</td></tr>
                        <tr><td>FA Spätdienst</td><td>13.30 &ndash; 22.00</td><td>FA Spätdienst</td><td>13.30 &ndash; 20.00</td></tr>
                        <tr><td>Mitteldienst</td><td>11.45 &ndash; 20.15</td><td>Mitteldienst</td><td>10.00 &ndash; 18.30</td></tr>
                        <tr><td>Mitteldienst</td><td>14.00 &ndash; 20.00</td><td>Mitteldienst</td><td>11.45 &ndash; 20.15</td></tr>
                        <tr><td>Frühdienst</td><td>07.30 &ndash; 16.00</td><td>Frühdienst</td><td>07.30 &ndash; 16.00</td></tr>
                        <tr><td>Spätdienst</td><td>13.30 &ndash; 22.00</td><td>Spätdienst</td><td>15.30 &ndash; 00.00</td></tr>
                        <tr><td>Nachtdienst (UCH)</td><td>20.00 &ndash; 08.00</td><td>Nachtdienst</td><td>23.30 &ndash; 08.00</td></tr>
                    </tbody>
                </table></div>
                <div class="table-wrap"><table>
                    <thead>
                        <tr><th>Facharzt mit Zusatzbezeichnung Klinische Akut und Notfallmedizin (Interdisziplinär)</th><th>Dienstzeit</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>OA FD</td><td>07.30 &ndash; 16.00</td></tr>
                        <tr><td>OA SD</td><td>13.30 &ndash; 20.00</td></tr>
                        <tr><td>OA RD</td><td>20.0 &ndash; 07.30</td></tr>
                    </tbody>
                </table></div>
                <h3>6.2.1 Schichtplan im Ärztlichen Dienst</h3>
                <div data-figure-slot="schichtplan-2024"></div>
                <h3>6.2.2 Besetzung an Wochenenden</h3>
                <p>Die Wochenendbesetzung erfolgt im Zweischichtsystem. Es wird ein Rufdienst für Belastungssituationen vorgehalten. Ein Arzt mit der ZWB Klinische Akut- und Notfallmedizin ist 24/7 im Rufdienst verfügbar.</p>
                <h3>6.3 Anpassung des Dienstmodells ab 2025</h3>
                <p>Ab 01.01.2025 erfolgt die Anpassung des Dienstmodells. Der entsprechende Inhalt des Status wird dahingehend angepasst und explizit ausgeführt.</p>
                <p>Ab 2025 erfolgt die Besetzung der ZNA mit ZWB Klinische Akut und Notfallmedizin und Fachärzten:</p>
                <div class="table-wrap"><table>
                    <thead><tr><th>Besetzung ab 2025</th><th>Dienstzeit</th></tr></thead>
                    <tbody>
                        <tr><td>ZWB Klinische Akut- und Notfallmedizin:</td><td>07.30 &ndash; 21.30</td></tr>
                        <tr><td>ZWB Klinische Akut- und Notfallmedizin:</td><td>21.30 &ndash; 07.30 (RD, ab 2026 Präsenz)</td></tr>
                        <tr><td>Facharzt operativ:</td><td>07.30 &ndash; 24.00</td></tr>
                        <tr><td>Facharzt konservativ:</td><td>07.30 &ndash; 24.00</td></tr>
                        <tr><td>AIW operativ:</td><td>24/7 (Dreischichtsystem)</td></tr>
                        <tr><td>AIW konservativ:</td><td>24/7 (Dreischichtsystem)</td></tr>
                    </tbody>
                </table></div>
                <div data-figure-slot="schichtplan-2025"></div>`
            },
            {
                key: 'versorgungsprozess',
                title: '7. Grundlegender Versorgungsprozess',
                icon: 'fa-diagram-successor',
                html: `<ol class="doc-flow" aria-label="Grundlegender Versorgungsprozess">
                    <li>Ankunft</li>
                    <li>Triage</li>
                    <li>administrative Aufnahme</li>
                    <li>Notfallbehandlung Pflege</li>
                    <li>Arzt</li>
                    <li>Diagnostik</li>
                    <li>Therapie</li>
                    <li>Abschluss</li>
                </ol>
                <h3>7.1. Behandlungs- und Versorgungsprozess</h3>
                <div data-figure-slot="versorgungsprozess"></div>`
            },
            {
                key: 'prozess',
                title: '8. Prozessbeschreibung',
                icon: 'fa-diagram-project',
                html: `<p>Das Vorgehen richtet sich nach den Leitsymptomen des Patienten und beinhaltet:</p>
                <ul>
                    <li>Symptomorientierte Anamneseerhebung und Untersuchung der Patient*in</li>
                    <li>Dokumentation der erhobenen Befunde (Vitalparameter, erhobene Befunde, diagnostische und therapeutische Maßnahmen, Verlauf) in dem ambulanten Arztbrief im SAP</li>
                    <li>Einleitung der diagnostischen Maßnahmen incl. Durchführung apparativer Diagnostik, Blutentnahmen, BGAs, Blutkulturen, etc. und Dokumentation dieser Maßnahmen</li>
                    <li>Erstellung eines Befundberichtes in Form des &bdquo;Klinikum Sankt Georg Arztbriefes ZNA&ldquo;</li>
                    <li>Aufklärung über sofort notwendige Maßnahmen sowie Anmeldung dieser Maßnahmen</li>
                    <li>Übergabe der Patienten an die betreuende Fachabteilung/ Entlassung des Patienten in die ambulante Weiterversorgung</li>
                    <li>Bei Verlegung auf die Aufnahme- und Beobachtungsstation: Erstellung der Anordnungen für Station sowie Eingabe der Medikation im AiDKlinik sowie Anlage des Arztbriefes im SAP</li>
                </ul>
                <h3>8.1 Ablauf der Triagierung</h3>
                <ul>
                    <li>Erstkontakt / Erstmaßnahmen (Blutstillung, Lagerung, ABCDE Schema)</li>
                    <li>Abfrage Beschwerdebild (Präsentationsdiagramm MTS)</li>
                    <li>Erfassung Obligate und fakultative Vitalparameter</li>
                    <li>In Umsetzung: Führen von Checklisten zur Erfassung von Risiken für Infektionskrankheiten</li>
                    <li>In Umsetzung: Führen von Checklisten zur Erfassung von Risiken für Delir und Zustände mit Vigilanzminderung</li>
                    <li>Festlegen Behandlungsdringlichkeit (Einordnung in MTS Stufen)</li>
                    <li>Ggf. Erstdiagnostik (BE, BGA, EKG, Urin &ndash; Status entsprechend SOPs und Behandlungsleitpfaden)</li>
                </ul>
                <p>Patienten, welche sich selbstständig (Selbstzuweiser) in der Notaufnahme vorstellen, werden entsprechend dem o.g. Ablauf durch die verantwortliche Pflegekraft (MTS geschulte und ausgebildete Kraft) vor administrativer Aufnahme triagiert. Die Verantwortung für die Triage wird schichtaktuell festgelegt und ist in der Dienstverantwortlichkeit ZNA Pflege erfasst.</p>
                <p>Der jeweilige verantwortliche Mitarbeitende für die Ersteinschätzung führt diese umgehend nach Eintreffen der Patienten an einem EDV Arbeitsplatz durch. Diese soll gemittelt innerhalb von 5 Minuten VOR administrativer Erfassung erfolgen. Dabei gilt, abhängig vom Patientenaufkommen, folgende Aufgabenpriorisierung:</p>
                <ol>
                    <li>Unverzügliche Durchführung</li>
                    <li>Genaue Erfassung des klinischen Bildes</li>
                    <li>Erhebung Vitalwerte nach Leitsymptom (fakultative / obligate Vitalwerte)</li>
                    <li>Einleitung der Basis- bzw. Sofortdiagnostik</li>
                </ol>
                <p>(In Abhängigkeit der Möglichkeiten des Triageverantwortlichen übernehmen die zeitlich und strukturell nachgeordneten Instanzen die weiteren Aufgaben im Rahmen dieser Priorisierung.)</p>
                <p>Patienten, welche aus eigener Initiative, nach Über- bzw. Einweisung durch den Hausarzt oder anderen Ärzten in die Notaufnahme kommen, werden administrativ erfasst und umgehend (&lt;5min) durch die verantwortliche Pflegekraft (MTS Schulung vorliegend) triagiert.</p>
                <p>Patienten mit <strong>Schockraumindikation</strong> oder als <strong>SK I über IVENA</strong> zugewiesene Patienten (ROT) werden als bereits ersteingeschätzt gewertet und der Behandlungspriorität (Rot) zugeordnet, da hier durch den Arztkontakt bereits bei Übergabe des Patienten ein Leitsymptom festgelegt werden kann, ein Arzt/Arzt&ndash;Gespräch erfolgte und erste Untersuchungs- und Behandlungsmaßnahmen angewiesen werden können. Bei Unklarheiten erfolgt die Ersteinschätzung nach primärem Patientenkontakt.</p>
                <p>Patienten des Rettungsdienstes werden von der übernehmenden Pflegekraft reevaluiert und entsprechend des Beschwerdebildes und der Vitalwerte triagiert und situativ einem entsprechenden Behandlungsplatz zugeführt.</p>
                <p>Generell wird darüber hinaus im Rahmen der elektronisch unterstützten Triage erfasst:</p>
                <ul>
                    <li>Zuweisungsart</li>
                    <li>Mobilität bei Eintreffen</li>
                    <li>Vigilanz (GCS), obligate und fakulative Vitalwerte</li>
                    <li>Schmerzen</li>
                    <li>Durchführender Mitarbeitende (Personalkürzel)</li>
                    <li>Überprüfen der Vigilanz des Patienten (GCS / RAS)</li>
                    <li>Ggf. Überprüfen der Risikofaktoren für vorliegende Infektionskrankheiten (z.B. SARS-CoV2)</li>
                </ul>
                <h3>8.2 Patientenidentifikation</h3>
                <p>Nach Triage und administrativer Erfassung erhalten alle erwachsenen Patienten die in der Zentralen Interdisziplinären Notaufnahme am Klinikum St. Georg vorstellig werden, ein Patientenarmband zur Identifikation. Dieses wird durch die Pflegenden angebracht.</p>
                <h3>8.3 Zuweisung des Behandlungsplatzes</h3>
                <p>Im Anschluss an die Triagierung wird jedem Notfallpatienten ein geeigneter Behandlungs- oder Warteplatz zugewiesen. Es erfolgt ein Aufruf über das Patientenaufrufsystem.</p>
                <p>Die erhobenen Patientendaten und Parameter werden je nach Dringlichkeit durch die Triagekraft an das nachgeordnet zuständige Pflegepersonal übergeben. Bei Patienten der Behandlungsdringlichkeitsstufen Rot und Orange erfolgt ggf. parallel die Informationsweitergabe an den diensthabenden Arzt ZNA.</p>
                <p>Die Patienten werden innerhalb des der Behandlungspriorität entsprechenden Zeitintervalls, von dem Dienstarzt der Notaufnahme untersucht und die Diagnostik und Behandlung eingeleitet. Die festgelegte Behandlungspriorität ist grundsätzlich zu berücksichtigen.</p>
                <h3>8.4 Behandlung von Notfallpatienten</h3>
                <h4>8.4.1 Ablauforganisation der Behandlung von Notfallpatienten</h4>
                <p>Die Notaufnahme ist mit Behandlungs- und Untersuchungsplätzen ausgestattet. In die Notaufnahme integriert sind zwei spezifische Überwachungsbereiche für konservative und operative Patienten mit insgesamt <strong>13</strong> Bettplätzen und umfänglicher Überwachungsausstattung i.S. eines Fast-Track-Konzeptes bis zum Abschluss der Diagnostik und zur Entscheidungsreife über den weiteren Verbleib. Die Belegung kann bedarfsweise zu jedem Zeitpunkt bei Erfordernis interdisziplinär erfolgen.</p>
                <p>Notwendige Untersuchungen, Behandlungen und Beurteilungen können größtenteils in der Zentralen Interdisziplinären Notaufnahme durchgeführt werden. Zum Teil erfolgen spezielle Untersuchungen in den Funktionsabteilungen des Hauses (Gastroskopie, Sonographie, Duplex etc.).</p>
                <p>Es findet täglich eine ärztliche Übergabe zu jedem Schichtwechsel statt. Alle diensthabenden Ärzte haben durchgehend für die gesamte Zeit ihres Dienstes dafür Sorge zu tragen, dass ihr Aufenthalt und die dazugehörige Rufnummer in der Notaufnahme bekannt ist. Die Mitarbeitenden der Notaufnahme haben die jeweils aktuelle Rufnummer für alle Mitarbeitenden schriftlich sichtbar kenntlich zu machen.</p>
                <p>Der Schichtdienst gilt erst als beendet, wenn die nachfolgenden diensthabenden Ärzte anwesend sind. Zwischendienste und Mitteldienste beenden den Dienst in Abstimmung mit den weiteren anwesenden Kollegen. Überstunden müssen begründet angewiesen werden. Insoweit unmittelbare Patientengründe dies erzwingen ist dies ex post möglich. Notwendige Informationen für die nachfolgende Dienstbesetzung sind schriftlich und persönlich zu übergeben.</p>
                <p>Eine Übermittlung von Patienteninformationen durch Drittpersonen ist allein nicht statthaft.</p>
                <p>Generell tragen alle Mitarbeiter ein Namensschild entsprechend der Vorgaben des Hauses und stellen sich mit Namen und Funktion entsprechend bei Erstkontakten vor.</p>
                <h4>8.4.2 Grundsätze und Implikationen aus der klinischen Triage</h4>
                <p>Es erfolgt die Trennung des Patientenkollektives nach definierten Fachabteilungen, mindestens jedoch mit operativer / konservativer Zuordnung in der Triage. Ärztlichen Mitarbeitende sind den Teilbereichen abhängig von der Zuordnung in operative und konservative Fächer zugeordnet und für die Ärztliche Versorgung des ihnen zugeordneten Patientenkollektives zuständig. Dabei trägt mindesten ein Arzt für die Sicherstellung der ärztlichen Notfallversorgung der konservativen Patienten Sorge, der weitere Arzt führt die Behandlung der operativen Patienten durch.</p>
                <p>Im Falle einer Schockraumversorgung erfolgt diese durch den konservativ eingesetzten Arzt unter Hinzuziehung der weiteren ärztlichen und personellen Ressourcen entsprechend des Leitsymptoms und der SOP Schockraumbehandlung. Regelhaft erfolgt die Schockraumversorgung durch den anwesenden Facharzt mit ZWB Klinische Akut- und Notfallmedizin.</p>
                <p>Näheres regelt sie SOP Schockraumversorgung</p>
                <h4>8.4.3 Erstbehandlung</h4>
                <p>Dies beinhaltet die Schmerzbehandlung, Advanced Life Support, Initialisierung der Behandlung, falls noch nicht erfolgt - Labordiagnostik, BGA, EKG etc.)<br>
                Befundgestützte Erhebung einer Verdachtsdiagnose<br>
                SOP-gestützte Behandlung des Beschwerdebildes</p>
                <p>Basierend auf der Verdachtsdiagnose -<br>
                Notfalldiagnostik wird entsprechend des Leitsymptoms und klinischen Untersuchungsergebnisses ärztlich indiziert und durchgeführt, dabei hat diese gezielt zu erfolgen und dem Stand des medizinischen Wissens und dem Spektrum des Krankenhauses zu entsprechen.<br>
                Therapeutische Maßnahmen werden durch approbierte Ärzte indiziert und ggf. selbst durchgeführt.</p>
                <p>Dabei ist stets entsprechend dem medizinischen Stand des Wissens, der aktuell gültigen Leitlinienempfehlung und ggf. im Rahmen der Behandlungspfade und SOPs (welche gemeinsam mit den bettenführenden Abteilungen bzw. Kliniken des Hauses erarbeitet und gepflegt werden) in der Notaufnahme zu handeln und zu dokumentieren.</p>
                <p>Die Behandlung kann je nach Behandlungsergebnis zu einer Änderung der Verdachtsdiagnose, der Entscheidung über eine Aufnahme, der Entscheidung über die Versorgungsstufe und der Festlegung des Endpunktes der Notaufnahmebehandlung führen. Die Behandlungsdauer nach Arztkontakt in der ZNA soll regelhaft 120min nicht überschreiten.</p>
                <p>Insgesamt können kapazitätsabhängig Behandlungsdauern von mehr als 4 Stunden in der Notaufnahme nicht toleriert werden.</p>
                <p>In Einzelfällen sind davon unbenommen auch längere Therapiezeiten möglich, jedoch ist im Allgemeinen die verfügbare räumliche Kapazität der Notaufnahme nicht ausreichend.</p>
                <p>Endpunkte der Notaufnahmebehandlung sind:</p>
                <ol class="doc-endpoints">
                    <li>Stationäre Aufnahme</li>
                    <li>Aufnahme auf A/ B-Station der ZNA</li>
                    <li>Operative Versorgung</li>
                    <li>Ambulante Versorgung</li>
                    <li>Externe Verlegung</li>
                    <li>Versterben des Patienten</li>
                </ol>
                <p>Nach Abschluss aller notwendigen Untersuchungen werden Patienten entweder wieder entlassen (mit Befund / Therapieempfehlung) oder sie werden stationär aufgenommen.</p>
                <p>Jeder Patient erhält zum Behandlungsabschluss einen ärztlichen Befundbericht. Für Patienten des Verletztenartenverfahrens werden die entsprechenden Formulare und Berichte dem Patienten ausgehändigt.</p>
                <p>Nachstationäre Patienten erhalten einen entsprechenden Kurzbrief. Patienten welche in der Aufnahme- und Beobachtungsstation stationär behandelt wurden, erhalten einen Arztbrief bei Entlassung ausgehändigt.</p>
                <p>Im Anschluss an die Behandlung erfolgt die Abrechnung der Leistungen durch die Mitarbeiter des Med. Controllings mit ZNA-Zuordnung (s. Punkt 13.1).</p>
                <h4>8.4.4 Stationäre Aufnahme von Patienten der Zentralen Interdisziplinären Notaufnahme</h4>
                <p>Die Entscheidung über eine stationäre Aufnahme erfolgt unbenommen des Belegungsrechtes der ZNA im Benehmen mit der zuständigen Fachabteilung/ Klinik des Hauses. Hierbei ist der Facharztstandard einzuhalten.</p>
                <p>Zur Belegung des Hauses bei stationären Konversionen sind die nachfolgenden Regelung verbindlich geltend:</p>
                <ul>
                    <li>MRL 10 (Klinisch Administrative Fallsteuerung)</li>
                    <li>MRL 26 (Belegungsstatut)</li>
                    <li>SOP Kapazitätsnachweis zur Krankenhausbelegung</li>
                </ul>
                <h4>8.4.5 Vorgehen bei hohem Patientenaufkommen (Crowding)</h4>
                <p>Crowding ist definiert durch ein unerwartet hohes Patientenaufkommen mit der Unmöglichkeit einer zeitgerechten Versorgung im Rahmen der Vorgaben aus der Triage. Es sind folgende Stufen definiert:</p>
                <ul class="doc-levels">
                    <li data-level="1"><strong>Crowding 1:</strong> Die Wartezeit für Patienten der Triagekategorie &bdquo;Gelb&ldquo; wird regelhaft überschritten und beträgt im Mittel &gt;45 Minuten.</li>
                    <li data-level="2"><strong>Crowding 2:</strong> Die Wartezeit für Patienten der Triagekategorie &bdquo;Gelb&ldquo; wird in allen Fällen überschritten und beträgt im Mittel &gt;60 Minuten.</li>
                    <li data-level="3"><strong>Crowding 3:</strong> Es stehen keine Behandlungsplätze in der Interdisziplinären Notaufnahme zur Verfügung und es kommt zu Verzögerungen bei der Annahme von Notfallpatienten.</li>
                    <li data-level="4"><strong>Crowding 4:</strong> Es kommt aufgrund fehlender Kapazitäten zur Verzögerungen bei der Übernahme von Rettungsdienstpatienten und es fallen Wartezeiten für die Umlagerung von Rettungsdienstpatienten an.</li>
                </ul>
                <p>Grundsätzliches Ziel der Maßnahmen ist eine möglichst umgehende Beendigung der Crowding-Situation und eine zeitnahe Sicherstellung einer adäquaten Patientenversorgung.</p>
                <p>Um eine evidenzbasierte Objektivierung von Crowdingsituationen zu realisieren, wird der CEDOCS-Score erhoben. Eine Eskalation bei bestehenden Patientenrisiken kann ab einem Score von 160 oder größer erfolgen. Hierzu ist der Chefarzt ZNA/ LCA (Leitender Chefarzt) / LVD (Chefarzt, Leiter vom Dienst) bzw. die Geschäftsführung einzubeziehen. Außerhalb derer Arbeitszeiten, erfolgt eine Kommunikation von Versorgungsengpässen ausschliesslich über den LVD bzw. auf dessen Anordnung.</p>
                <p>Eine pauschale Abmeldung der Notaufnahme erfolgt generell nicht durch ärztliche Mitarbeiter der Interdisziplinären Notaufnahme.</p>
                <p>Aufgrund der Versorgung der Gebietskörperschaften mit IVENA, kann eine differenzierte Abmeldung von Teilbereichen, unbenommen der generellen Aufnahmebereitschaft des Klinikums (Sächs. KH-Gesetz: § 27Dienst- und Aufnahmebereitschaft, Alarm- und Einsatzpläne) erfolgen. Bspw. Über die Intensivstationen des Hauses bei fehlenden Beatmungskapazitäten oder bei Ressourcenengpässen durch fehlende Diagnostische Möglichkeiten.</p>
                <p><strong>Generell setzt eine Abmeldung von Teilbereichen des Krankenhauses oder der ZNA, vorraus, dass Patientenrisiken vorliegen und anderenfalls Patientenschäden in Kauf zu nehmen sind (siehe Med. RL 11).</strong></p>
                <h4>8.4.6 Besonderheiten der Ablauforganisation bei Patienten mit Schmerzzuständen</h4>
                <p>Grundlegend stehen folgende Instrumente zur Verfügung:</p>
                <ul>
                    <li>Erfassung und Verlaufs- sowie Entlassdokumentation von Schmerzen ist verpflichtend</li>
                    <li>Medikamentöse, interventionelle und konservative Schmerztherapiemaßnahmen</li>
                    <li>Einleiten und Beginn der Anschlussbehandlung für ambulante und stationäre Therapie</li>
                    <li>Pauschalisierte Anordnungen an den Pflegedienst der ZNA</li>
                    <li>Hinzuziehen der Fachabteilungen des Hauses bei erforderlichen Interventionen (Narkose, Analgosedierung durch Anästhesiedienst)</li>
                    <li>Konsilarische Mitbetreuung Schmerztherapie</li>
                </ul>
                <p>Patienten mit Schmerzzuständen werden regelhaft in der Triage erfasst. Hierbei ist die Erhebung des NRS-Score verpflichtend, dies resultiert bei Erfordernis stets in einer Schmerztherapie entsprechend aktuell gültiger SOP in Abstimmung mit dem Dienstarzt der Notaufnahme. Grundlegend können konservative Maßnahmen zur Schmerztherapie angezeigt sein und müssen zur Anwendung kommen. Eine Verlaufsdokumentation ist hierbei über die Erfassung der Vitalwerte in der Verlaufsdokumentation der elektronischen Notaufnahmedokumentation zu führen. Dahingehend wird der Verlauf und der Erfolg der Schmerztherapie kontrolliert und überwacht.</p>
                <p>Bei der Entlassung von Notaufnahmepatienten ist die Schmerzintensität zu erfassen. Dies erfolgt unbeschadet von der Art des Behandlungsendes.</p>`
            },
            {
                key: 'dokumentation',
                title: '9. Dokumentation',
                icon: 'fa-file-lines',
                html: `<p>Grundsätzlich erfolgt die digitale Dokumentation nach den Vorgaben der jeweiligen Fachgesellschaften auf Basis des &bdquo;Nationaler Datensatz Notaufnahme&ldquo; (Kulla, et.al. 2014 / 2015). Hierfür wird die klinische Dokumentationssoftware des Hauses in den jeweils gültigen Dokumentenfassungen der Notaufnahme verwendet. Entsprechende Pflichtdokumentationen sind elektronisch hinterlegt.</p>
                <p>Grundsätzlich erhält jeder Patient bei Entlassung aus der Notaufnahme einen ärztlich unterzeichneten Arztbrief / Ambulanzarztbrief der Notaufnahme.</p>
                <p>Im Falle eines Systemausfalles ist entsprechend der Vorgaben die Dokumentation des Ausfallkonzeptes zu verwenden. Auch dann erhält grundsätzlich jeder Patient bei Verlassen der Notaufnahme eine unterzeichnete abgeschlossene Dokumentation.</p>
                <p>Im Falle einer kurzstationären Behandlung in der Interdisziplinären Notaufnahme erfolgt die Arztbriefschreibung mit Aushändigen des Arztbriefes bei Entlassung des Patienten. Der Patient erhält als vorläufige Dokumentation einen Kurzbrief aus der klinischen Dokumentationssoftware.</p>
                <p>Nach Abschluss und Korrektur der Arztbriefschreibung wird der Arztbrief unterzeichnet und dem Chefarzt der Zentralen Interdisziplinären Notaufnahme zur Freigabe und Unterschrift vorgelegt.</p>
                <h3>9.1 Dokumentationsaudits</h3>
                <p>Vorliegende Dokumentationen werden regelmäßig überprüft und entsprechend der festgelegten Kriterien im Rahmen von Dokumentationsaudits dokumentiert. Die Auswahl erfolgt stichprobenweise und zufällig durch den Ärztlichen Leiter der Notaufnahme oder durch den Stellvertreter. Weiterhin werden alle aktiv dem Dokumentationsaudit zugeführten Dokumentationsbögen einbezogen. Mitarbeiter des ärztlichen Dienstes der Notaufnahme sind generell angehalten hier aktiv Fälle einzubringen.</p>
                <p>Es findet nach erfolgter Durchsicht der Dokumentation in jedem Fall eine Rückmeldung an den dokumentierenden Arzt. Dies kann schriftlich oder mündlich erfolgen. Generell erfolgt ein Rücklauf der Bögen mit Vermerken und Korrekturen.</p>
                <p>Die Auswertungsbögen sind als Formular im DMS hinterlegt.</p>`
            },
            {
                key: 'besprechungen',
                title: '10. Besprechungen',
                icon: 'fa-calendar-check',
                html: `<p>Für die Mitarbeiter der Zentralen Interdisziplinären Notaufnahme liegt eine Besprechungsmatrix vor.</p>
                <p>Generell erfolgt im Rahmen der Dienstübergabe eine strukturierte Übergabe von aktuell in Behandlung befindlichen Patienten bettseitig.</p>
                <p>Wochentäglich findet um 15:30 Uhr im Rahmen der Dienstübergabe eine fachärztlich supervidierte Patientenvorstellung statt. Die Teilnahme ist für alle Beteiligten des Schichtsystems des Ärztlichen Dienstes bindend und bildet ein tägliches Zusammentreffen aller Behandelnden ab.</p>
                <p>Pflegerische Teamsitzungen finden monatlich statt. Die Ärztliche Leitung oder Stellvertreter sind hier Anwesend.</p>
                <p>Ärztliche Teamsitzungen werden im 8-10- wöchigen Turnus durchgeführt. Üblicherweise erfolgen in diesem Rahmen Gastvorträge und Fallbesprechungen sowie Informationen zu aktuellen Belangen der Interdisziplinären Notaufnahme.</p>
                <p>Die Teilnahme an den Momo-Konferenzen aller Kliniken des Hauses ist für den ärztlichen Dienst der Interdisziplinären Notaufnahme stets möglich und erwünscht und bei Beteiligung an der Behandlung der Kasuistik verpflichtend.</p>
                <h3>10.1 Besprechungsmatrix ZNA</h3>
                <div class="table-wrap"><table class="doc-matrix">
                    <thead><tr><th>Turnus</th><th>Besprechung</th></tr></thead>
                    <tbody>
                        <tr><td>Täglich:</td><td>07.30 Uhr und 15.30 Uhr: Übergabebesprechung</td></tr>
                        <tr><td>Täglich:</td><td>08:00 Uhr Fachärztliche Visite auf Aufnahme- und Beobachtungsstation</td></tr>
                        <tr><td>Wöchentlich:</td><td>09:00 Uhr, Mittwoch, Leitungs-Jour-fixe, Hybrid</td></tr>
                        <tr><td>Monatlich:</td><td>Teamsitzung Pflegedienst, Hybrid</td></tr>
                        <tr><td>2-Monatlich:</td><td>Teamsitzung Ärztlicher Dienst, Hybrid</td></tr>
                        <tr><td>Ohne festen Termin:</td><td>MoMo-Konferenzen, Dienstberatungen mit Kliniken, Rotationsplanungsgespräche</td></tr>
                    </tbody>
                </table></div>`
            },
            {
                key: 'datenauswertung',
                title: '11. Datenauswertung in der Notaufnahme',
                icon: 'fa-table',
                html: `<p>Es erfolgt die grundsätzliche Datenerhebung und Auswertung von notfallmedizinisch und organisatorisch relevanten Kennzahlen der Interdisziplinären Notaufnahme.</p>
                <p>Als Datenbasis werden die elektronische Dokumentation im KIS sowie die entsprechenden Handakten und Aufzeichnungen verwendet.</p>
                <p>Mittels Datenanlysetool erfolgt ein Data- und Process-Mining aus diesen Datensätzen, sowie die Analyse auf Vollständigkeit der Datensätze.</p>
                <p>Die Primäranalyse erfasst Kennzahlen für folgende Prozessschritte im Behandlungsprozess</p>
                <ul>
                    <li>Fallzahlen</li>
                    <li>Patientenaufkommen</li>
                    <li>Zuweisungsart</li>
                    <li>Triagekategorie</li>
                    <li>Triagerfüllung</li>
                    <li>Leitsymptome</li>
                    <li>Behandlungszeiten
                        <ul>
                            <li>Eintreffzeit</li>
                            <li>Dauer bis Triage</li>
                            <li>Wartezeiten bis Arzt</li>
                            <li>Überschreitungen von Wartezeiten aus der Triage</li>
                            <li>Behandlungsdauer (ärztliche / pflegerische)</li>
                        </ul>
                    </li>
                    <li>Stationäre Aufnahmen
                        <ul>
                            <li>Nach Fachabteilung</li>
                            <li>Nach Fallschwere / Triagekategorie</li>
                            <li>Nach Leitsymptom (Triage)</li>
                        </ul>
                    </li>
                    <li>Ambulant verbleibende Patienten</li>
                    <li>Fallstorno, nicht ärztlich gesehene Patienten</li>
                </ul>`
            },
            {
                key: 'fehler',
                title: '12. Umgang mit Fehlern und Komplikationen',
                icon: 'fa-triangle-exclamation',
                html: `<p>Im Falle von unerwarteten Komplikationen und Fehlern bei der Behandlung von Notfallpatienten wird auf das Dokument <strong>&bdquo;Fehlermanagement ZNA&ldquo;</strong> verwiesen.</p>
                <p>Darüber hinaus steht das CIRS-System des Krankenhauses zur Verfügung.</p>
                <p>Grundsätzlich ist die gründliche Dokumentation unerlässlich. Eine Ergänzung um ein Gedächtnisprotokoll oder ein Ereignisbericht ist vorgesehen. Es hat eine Meldung an den Dienstvorgesetzten zu erfolgen. Die umgehende Information an den Abteilungsleiter ist verpflichtend. Weitere Schritte und die Außenkommunikation werden in Abstimmung mit den Dienstvorgesetzten vorgenommen.</p>
                <p>Für die Zentrale Interdisziplinäre Notaufnahme erfolgt das Beschwerdemanagement in Abstimmung und ausschließlich über den Chefarzt oder dessen Stellvertreter. Ein Beschwerdemanagementsystem ist im Haus über das Krankenhausbetriebsleitung und die Rechtsabteilung etabliert. Hierzu wird auf die dortigen Verfahrensanweisungen verwiesen.</p>`
            },
            {
                key: 'medizinprodukte',
                title: '13. Medizinprodukte / Geräte',
                icon: 'fa-stethoscope',
                html: `<p>Für jeden Mitarbeitenden ÄD / PD wird ein Gerätepass bzw. elektronischer Einweisungsnachweis im Bereich Medizinprodukte geführt. Dessen Vollständigkeit wird im Mitarbeiterjahresgespräch überprüft</p>
                <ul>
                    <li>Die Einweisungen nach MPG und Med.Pr.Betr.V werden zentral dokumentiert, Ersteinweisungen durch den Hersteller werden dabei gekennzeichnet</li>
                    <li>Es findet eine gesondert dokumentierte jährliche Unterweisungsveranstaltung durch den pflegerischen MPG-Beauftragten statt, diese ist allgemeinen Inhaltes und bezieht sich auf Aktualisierungen</li>
                </ul>`
            },
            {
                key: 'abrechnung',
                title: '14. Leistungsabrechnung / Controlling',
                icon: 'fa-calculator',
                html: `<h3>14.1 Abrechnung von Notfallpatienten</h3>
                <p>Die Abrechnung erfordert eine enge Verzahnung der klinisch tätigen Kollegen und der abrechnenden Stelle. Die Abrechnung erfordert eine umfassende Dokumentation und die vollständige Erfassung der erbrachten Leistung.</p>
                <p>Nach Abschluss der medizinischen Behandlung in der Zentralen Interdisziplinären Notaufnahme werden die Dokumente zur klinischen Dokumentation und dem fallbezogenen ambulanten Abrechnungsschein dem verantwortlichen Mitarbeitenden für die Abrechnung zugeführt. Hier erfolgt die Fallsteuerung und Fallselektion nach § 115a, b SGB V als ambulante, vor &ndash; oder nachstationäre Behandlung.</p>
                <p>Die Abrechnung der ambulanten Behandlungsfälle gemäß §115 b und der Patienten ohne gültiges Versicherungsverhältnis (Selbstzahler) erfolgt in der Notaufnahme durch den verantwortlichen Mitarbeitenden. Im Fokus stehen hierbei die Fallkosten gesetzlich versicherter Patienten, deren Behandlungsleistungen über den EBM mit der Kassenärztlichen Vereinigung abgerechnet werden (EBM-Fälle). Dabei werden die aktuellen Leistungsstrukturen der ambulanten Abrechnung zugrunde gelegt.</p>
                <p>Die Rechnungslegung an die Berufsgenossenschaften erfolgt in Organisationshoheit der Klinik für Orthopädie und Unfallchirurgie</p>
                <p>Die Abrechnung von Patienten mit Privatversicherungen erfolgt über das Controlling der ZNA.</p>
                <p>Patienten, bei denen die Behandlung in der Aufnahme- und Beobachtungsstation der ZNA gemäß § 39 Abs. 1 S. 1 SGB V vollstationär, vor- oder nachstationär (§ 115a SGB V) erbracht wurde, werden direkt über das Medizincontrolling des Klinikums St. Georg abgerechnet und die Erlöse der ZNA zu geordnet.</p>
                <div data-figure-slot="abrechnung"></div>`
            },
            {
                key: 'weiterbildung',
                title: '15. Aus-, Fort- und Weiterbildung',
                icon: 'fa-book-medical',
                html: `<p>Die Fort- und Weiterbildung wird durch die Fort- und Weiterbildungsordnung vom 01.01.2021 für alle Berufsgruppen der Notaufnahme geregelt.</p>
                <p>Es finden interdisziplinäre Fortbildungsveranstaltungen im Haus statt. Darüber hinaus findet unter der wissenschaftlichen Leitung der Interdisziplinären Notaufnahme ein monatliches Schockraumtraining statt.</p>
                <p>Jährliche Mitarbeitergespräche sind strukturiert in einem Leitfaden geregelt in und finden zwingend statt. Darüber hinaus finden die Weiterbildungsgespräche mit dem weiterbildungsermächtigten Arzt statt.</p>
                <h3>15.1. Weiterbildung</h3>
                <p>Für die Zentrale Interdisziplinäre Notaufnahme liegt die Weiterbildungsermächtigung für die Zusatzbezeichnung Klinisch Akut und Notfallmedizin vor.</p>
                <p>Im Fach Allgemeinmedizin werden Weiterbildungszeiten in für 12 Monate im Konservativen Teil der ZNA (Innere Medizin) und 12 Monate im operativen Teil der ZNA (Chirurgie) bescheinigt. Die fachliche Verantwortung obliegt dem weiterbildungsermächtigten Arzt.</p>
                <p>Der jeweils Weiterbildungsermächtigte Arzt erstellt die Weiterbildungszeugnisse im Rahmen der Weiterbildung, sowie ferner ein Curriculum für die Weiterbildungsinhalte und für die Dauer der Ausbildung. Die Inhalte entsprechen der Weiterbildungsordnung der Sächsischen Landesärztekammer. Es werden die entsprechenden e-Logbücher der Fachdisziplin geführt.</p>
                <p>Eine Förderung für die Weiterbildung erfolgt seitens der Abteilung Personal in direkter Zusammenarbeit mit der ärztlichen Leitung der Zentralen Interdisziplinären Notaufnahme.</p>
                <h3>15.2 Weiterbildung von Rotationsassistenten</h3>
                <p>In den operativen Common Trunk-Fächern und den konservativen Fächern, deren Weiterbildungsordnung den Abschnitt Notaufnahme (6 Monate gerechnet in Vollzeit) enthalten erfolgt die Rotation für obigen Zeitraum in den Weisungsbereich der ZNA. Hierzu erfolgt die Stellenplanerische Umbuchung der zugeordneten VK-Zahlen, die Einarbeitung der Rotationsassitenten (EAK für Rotationsassistenten) und der Einsatz der AIW im Dienstsystem der ZNA.</p>
                <p>Näheres regelt das mit den entsendenden Fachabteilungen abgestimmte Rotationsstatut ZNA (Link ConSense)</p>`
            },
            {
                key: 'fortbildungen',
                title: '16. Fortbildungen',
                icon: 'fa-lightbulb',
                html: `<h3>16.1 Fortbildung Ärztlicher Dienst</h3>
                <p>Im Rahmen der Weiterbildung zum Facharzt besteht grundsätzlich die Möglichkeit zur Freistellung mehrere Tage im Kalenderjahr zum Besuch von Fortbildungsveranstaltungen. Weitere Freistellungen sind mit entsprechend fachlicher Begründung in Abstimmung mit dem Chefarzt ZNA möglich. Es ist grundsätzlich eine Curriculare Staffelung vorgesehen. Es sind unabhängig von anderen Weiterbildungsveranstaltungen folgende Fortbildungen zu besuchen.</p>
                <p><strong>Klinische Akut- und Notfallmedizin:</strong></p>
                <ul>
                    <li>Erlangen der Fachkunde im Strahlenschutz (alternativ Aktualisierung)</li>
                    <li>Erlangen des DEGUM Zertifikates Sonografie (alternativ Kurs Notfallsonografie/ Echo)</li>
                    <li>Teilnahme an mind. einem regionalen oder überregionalen notfallmedizinischen Kongress (z.B. LIFEMED, DGINA-Kongress)</li>
                    <li>Besuch von regelmäßigen Fortbildungsveranstaltungen (z.B. Mittwochsfortbildung Universitätsklinik Leipzig oder Teilnahme am &bdquo;Refresherkurs Notfallmedizin&ldquo;, SLÄK)</li>
                    <li>Teilnahme am gem. §4, Abs.8 WBO anerkanntem 80-Stunden Kurs, z.B. &bdquo;Organisation in der Notaufnahme&ldquo; oder &bdquo;Allgemeine und spezielle Notfallbehandlung&ldquo;. Die Teilnahme ist verpflichtend.</li>
                    <li>Erlangen/ Vorliegen der Zusatzbezeichnung &bdquo;Notfallmedizin&ldquo; ist ausdrücklich erwünscht.</li>
                </ul>
                <p><strong>Allgemeinmedizin:</strong></p>
                <p>Im ersten und zweiten Weiterbildungsjahr:</p>
                <ul>
                    <li>Erlangen der Fachkunde im Strahlenschutz</li>
                    <li>Erlangen von Kenntnissen im Ultraschall (DGUM Zertifikat)</li>
                </ul>
                <p>Im dritten und vierten Weiterbildungsjahr:</p>
                <ul>
                    <li>Erlangen der Zusatzbezeichnung Notfallmedizin</li>
                </ul>
                <p>Im fünften Weiterbildungsjahr:</p>
                <ul>
                    <li>Vorbereitung auf die Facharztprüfung</li>
                </ul>
                <p>Grundsätzlich werden alle Mitarbeitenden des ärztlichen Dienstes der Interdisziplinären Notaufnahme ungeachtet des Weiterbildungsbudgets für die Erlangung der Fachkunde im Strahlenschutz freigestellt. Dies betrifft auch Kurse für den Erhalt einer bestehenden Fachkunde im Strahlenschutz. Die Kosten hierfür werden generell vom Haus getragen.</p>
                <p>Ärztliche Teamsitzungen finden im Turnus von 8 Wochen, mindestens jedoch vier Mal jährlich statt.</p>
                <h3>16.2. Fortbildung Pflegedienst</h3>
                <p>Monatlich findet eine Dienstberatung statt, in der eine fachliche Fortbildung durchgeführt wird. Diese wird in Form eines freien Kurzvortrages zu Symptomkomplexen oder Erkrankungen abgehalten. Die Vortragsdauer soll rund 15 Minuten betragen. Die Themen werden im Vorfeld abgestimmt. Generell besteht im Anschluss die Möglichkeit für Fragen und Diskussionen. Es erfolgt eine Protokollierung, die unmittelbar nach der Sitzung an alle Mitarbeiter ZNA Pflege per Mail gesendet wird. Alle Vorträge werden im Zentralen Ordner digital wie analog allen Mitarbeitern ZNA zur Verfügung gestellt.</p>
                <p>Jährliche Pflichtunterweisungen werden über die eLearning Plattform im Unternehmen abgebildet.</p>
                <p>Die Auszubildenden der hauseigenen Krankenpflegeschule werden durch die PraxisanleiterInnen der Abteilung begleitet.</p>
                <p>Mitarbeitende Pflege ZNA werden in der Fachweiterbildung Notfallmedizin ausgebildet.</p>
                <h3>16.3 Studentische Ausbildung</h3>
                <p>Die Interdisziplinäre Notaufnahme nimmt an der studentischen Ausbildung teil. Es können regelhaft maximal sechs studentische Praktika (Prakt. Jahr / Famulatur) simultan stattfinden. Es erfolgt für jeden Studenten ein Mentoring.</p>
                <p>Hierfür findet eine eigene studentische Dienstplanung und die Einteilung in Früh, Zwischen und Spätdienste statt, so dass stets ein diensthabender Arzt maximal einen Studenten betreut. Dieser sollte entsprechend der dienstplanerischen Möglichkeiten möglichst für den Praktikumszeitraum dem Studenten für Fragen zur Verfügung stehen. Diese Möglichkeit sollte den Vorgaben des DGINA Mentoring - Programm für Famulanten entsprechen.</p>
                <p>Für alle Studenten sind zumindest einmalig während einer Famulatur Seminare mit dem Ltd. Oberarzt / Chefarzt der Notaufnahme vorgesehen.</p>`
            }
        ]
    });
})();
