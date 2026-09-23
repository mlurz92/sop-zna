/* ============================================================
   statuten/statut-abs.js
   ------------------------------------------------------------
   Statut der Aufnahme- und Beobachtungsstation (ABS / ZNA-Station)
   Quelle: docs/20260227_Statut_ABS-2026.doc

   Wortlaut unveraendert uebernommen. Aus dem Word-Satz wurden nur
   Aufzaehlungen, Zwischenueberschriften und Hervorhebungen in HTML
   uebertragen; die Kaestchen "[ ]" der Checklisten werden in der
   Anwendung zu antippbaren Punkten.

   Auszeichnungen fuer die Anwendung (keine inhaltliche Aenderung):
     data-checklist   Checkliste: Punkte abhaken, Fortschritt
     data-gaep        G-AEP-Kriterium (Anhang 1), data-b = "mit" |
                      "ohne" Zusatzkriterium B, wie im Text genannt
     data-exclusion   Ausschlusskriterium (Kapitel 4)
   ============================================================ */
(function() {
    'use strict';

    if (!window.STATUT_DATA) window.STATUT_DATA = [];

    window.STATUT_DATA.push({
        id: 'statut-abs',
        title: 'Statut der Aufnahme- und Beobachtungsstation (ABS / ZNA-Station)',
        short: 'Statut ABS / ZNA-Station',
        subtitle: 'Zentrum für Notfallmedizin, Klinikum St. Georg, Leipzig',
        unit: 'Zentrum für Notfallmedizin · Zentrale Interdisziplinäre Notaufnahme / Aufnahme- und Beobachtungsstation',
        stand: '02/26',
        date: '27.02.2026',
        file: 'docs/20260227_Statut_ABS-2026.doc',
        summary: 'Rahmen, Belegung, Indikationen, G-AEP-Kriterien und Checklisten für Aufnahme und Entlassung auf der ZNA-Station.',
        sections: [
            {
                key: 'praeambel',
                title: '1. Präambel',
                icon: 'fa-book-open',
                html: `<p>Die Zentrale Interdisziplinäre Notaufnahme (ZNA) mit integrierter Aufnahme- und Beobachtungsstation ist ein struktureller Bestandteil des Zentrums für Notfallmedizin am Klinikum St. Georg, Leipzig.</p>
                <p>Dieses Statut regelt die medizinischen, personellen und organisatorischen Rahmenbedingungen der ZNA-Station. Ziel ist die Sicherstellung einer leitliniengerechten, patientenzentrierten und wirtschaftlichen Versorgung im Rahmen der umfassenden Notfallversorgung.</p>`
            },
            {
                key: 'struktur',
                title: '2. Struktur und Infrastruktur',
                icon: 'fa-hospital',
                html: `<ul>
                    <li><strong>Räumlichkeiten:</strong> Die Aufnahme- und Beobachtungsstation ist baulich in die Zentrale Interdisziplinäre Notaufnahme integriert. Es stehen 6 Bettplätze in drei Patientenzimmern zur Verfügung.</li>
                    <li><strong>Infrastruktur:</strong> Es handelt sich um einen abgegrenzten vollstationären Bereich der Zentralen Notaufnahme. Es erfolgt die volle Integration in den stationären Behandlungsprozess am Klinikum, dieser sieht neben der stationären Speisen- und Apothekenversorgung ebenso die eigenständige Versorgung der Patienten nach den stationären Standards vor. Die Pflegerische Besetzung ergibt in konkreter Zuordnung eine 1:3 Versorgung von Patienten vor, mindestens wird eine 1:6 Versorgung zu jedem Zeitpunkt (24/7) sichergestellt.</li>
                    <li><strong>Ausstattung:</strong> Alle Bettplätze sind mit vollumfänglichen Monitoring und Sauerstoffversorgung ausgestattet. Das Monitoring und die lückenlose Überwachung der Patienten erfolgen nach ärztlicher Anordnung durch eine automatisierte Übertragung der Vitaldaten direkt in das Krankenhausinformationssystem (KIS).</li>
                    <li><strong>Therapieziel:</strong> Ziel einer stationären Versorgung auf ZNA Station ist eine fallabschließende Behandlung und Versorgung mit einer regulären Entlassung nach 24 bis maximal 48 Stunden stationärem Aufenthalt.</li>
                </ul>`
            },
            {
                key: 'personal',
                title: '3. Personelle Besetzung und Verantwortung',
                icon: 'fa-user-doctor',
                html: `<ul>
                    <li><strong>Leitung:</strong> Die Aufnahme- und Beobachtungsstation ist dem Chefarztbereich der Zentralen Notaufnahme zugeordnet. Die Betriebsverantwortung obliegt dem Chefarzt der Zentralen Interdisziplinären Notaufnahme.</li>
                    <li><strong>Ärztlicher Dienst:</strong> Die Station wird grundsätzlich interdisziplinär geführt. Die klinische Überwachung, Zuständigkeit und Verantwortung obliegen 24/7 dem ärztlichen Dienst der ZNA. Die Betreuung erfolgt erkrankungsabhängig jeweils in der Zuständigkeit des konservativen oder operativen Dienstarztes in Präsenz. Die Hinzuziehung von Konsildiensten anderer Fachabteilungen des Klinikums ist uneingeschränkt gewährleistet.</li>
                    <li><strong>Pflegedienst:</strong> Pflegerisch untersteht die Station der Pflegedienstleitung der ZNA. Die Belegung bedingt eine Information an den Pflegedienst der ZNA, welcher die Betreuung der stationären Betten und der Patienten sicherstellt. Die jeweils zuständigen Pflegenden werden namentlich im Dienstplan ausgewiesen und stellen eine Betreuung rund um die Uhr sicher.</li>
                </ul>`
            },
            {
                key: 'belegung',
                title: '4. Belegungsmanagement und Patientensteuerung',
                icon: 'fa-bed',
                html: `<ul>
                    <li><strong>Aufnahmeprozess:</strong> Die Betten der Aufnahme- und Beobachtungsstation werden ausschließlich nach Rücksprache mit dem diensthabenden Arzt oder Oberarzt der ZNA (<em>Tel. 4006</em>) belegt. Das Stellen der Aufnahmeindikation hat zwingend nach dem Facharztstandard zu erfolgen. Über den Zugang ist neben dem Fach- / Oberarzt auch die Pflege der Aufnahme- und Beobachtungsstation (Tel. 4257) zu informieren.</li>
                    <li><strong>Fachabteilungen:</strong> Die Aufnahme ist prinzipiell für Patienten aus allen Fachgebieten bzw. Fachrichtungen möglich. Die Patienten werden zwingend in der ZNA und ausdrücklich NICHT als Außenlieger der zuweisenden Fachrichtungen geführt.</li>
                </ul>
                <ul class="doc-exclusion" data-exclusion>
                    <li data-exclusion-item><strong>Ausschlusskriterien:</strong> Eine Aufnahme von BG-Fällen (DAV, VAV, SAV) ist ausdrücklich nicht möglich, da die Dokumentation und die D-Ärztliche Versorgung nicht innerhalb der Strukturen erfolgen kann.</li>
                    <li data-exclusion-item>Es erfolgt keine Aufnahme von pädiatrischen Patienten.</li>
                    <li data-exclusion-item>Es erfolgt KEINE Aufnahme bei rein sozialen Problemen, sofern diese nicht innerhalb von 24 Stunden abschließend und ohne Einbezug des Sozialdienstes geklärt werden können.</li>
                </ul>`
            },
            {
                key: 'dokumentation',
                title: '5. Dokumentation und Verweildauer',
                icon: 'fa-file-lines',
                html: `<ul>
                    <li><strong>Elektronische Patientenakte:</strong> Die Dokumentation des stationären Aufenthaltes erfolgt elektronisch im KIS, alle Arztbriefe werden nach Freigabe in die ePA des Patienten geladen.</li>
                    <li><strong>Arztbriefschreibung:</strong> Mit der Aufnahme auf die Beobachtungsstation erfolgt die Anlage des stationären Arztbriefes durch den aufnehmenden Arzt. Im Rahmen des Nachtdienstes ist die Verlaufsdokumentation und Arztbriefschreibung sicherzustellen.</li>
                    <li><strong>Visite:</strong> Am darauffolgenden Morgen erfolgt um 08:00 Uhr die Visite durch den zuständigen operativen bzw. konservativen Oberarzt oder Facharzt. Am Wochenende erfolgt die Visite fachrichtungsbezogen, die Visite ist zu dokumentieren.</li>
                    <li><strong>Abschluss:</strong> Die Freigabe und Abschlussdokumentation erfolgt umgehend nach der Visite, sodass Patienten stets einen inhaltlich abgeschlossenen Arztbrief bei der Entlassung erhalten.</li>
                </ul>`
            },
            {
                key: 'indikationen',
                title: '6. Medizinische Indikationen zur Aufnahme',
                icon: 'fa-square-check',
                html: `<h3>6.1. Diagnosebezogene Indikationen</h3>
                <p>Die Aufnahme auf die ZNA-Station erfolgt unter anderem bei den folgenden Leitsymptomen und Diagnosen:</p>
                <ul class="doc-indications">
                    <li>Elektrolytstörungen</li>
                    <li>Tachyarrhythmia absoluta</li>
                    <li>Synkope (vasovagal oder orthostatisch)</li>
                    <li>Alkohol- oder Drogenintoxikation mit Beeinträchtigung des Bewusstseins</li>
                    <li>Thoraxschmerzen bei Verdacht auf myokardiale Ischämie</li>
                    <li>Beobachtung bei Zustand nach Krampfanfall</li>
                    <li>Ausschluss cerebrale Ischämie</li>
                    <li>Gastroenteritis und Exsikkose</li>
                    <li>Koprostase oder Subileus</li>
                    <li>Entgleister Hypertonus</li>
                    <li>Beckenprellung mit immobilisierendem Schmerz (zur i.v.-Analgesie)</li>
                    <li>Schädel-Hirn-Trauma</li>
                    <li>Beobachtung nach Hochrasanztrauma</li>
                    <li>Palliative Versorgung bei bevorstehendem Eintritt des Todes</li>
                </ul>
                <h3>6.2. Besondere Fallkonstellationen</h3>
                <ul>
                    <li><strong>Intoxikationen:</strong> Alkoholisierte oder anderweitig intoxikierte Patienten, die nicht aus zwingenden medizinischen Gründen (z.B. insuffiziente Spontanatmung, Eigen-/Fremdgefährdung, Suizidalität) auf eine IMC/ITS aufgenommen werden müssen, werden der Aufnahme- und Beobachtungsstation zugeordnet und entsprechend des standardisiertem Prozesses integriert und medizinisch (z.B. Monitoring etc.) versorgt, auch wenn diese ggf. in einem gesonderten Raum oder bodennah untergebracht werden müssen. Dies erfordert den Vermerk "Aufnahme ZNA-Station zur Ausnüchterung unter Überwachung", sowie Einweisungsschein, Akte, Anordnungsbogen und eine geführte Intensiv-Kurve. Der Vermerk der Entlassungszeit auf der Intensiv -Kurve ist dabei zwingend erforderlich.</li>
                    <li><strong>Verlegungen &amp; Entlassungen:</strong> Entlassungen gegen ärztlichen Rat werden entsprechend dokumentiert, es wird stets ein &bdquo;Reversbogen&ldquo; angelegt, die Kausalkette ist dabei bis zu einer möglichen Todesfolge zu erfassen und der Patient darüber aufzuklären. Verlegungen in externe Krankenhäuser bei fehlender Bettenkapazität sind mit adäquater Dokumentation des Aufwands durchzuführen (CAVE: Bundessozialgericht, B 1 KR 11/20 R vom 18.05.2021).</li>
                </ul>`
            },
            {
                key: 'anhang-1',
                title: 'Anhang 1: G-AEP-Kriterien zur Aufnahme',
                icon: 'fa-scale-balanced',
                html: `<p class="doc-anhang"><u>ANHANG 1: Zu dokumentierende G-AEP Kriterien zur Aufnahme</u></p>
                <p><em>(German Appropriateness Evaluation Protocol &ndash; Auszug der stationären Aufnahmekriterien)</em></p>
                <div class="doc-gaep" data-gaep-list>
                    <h3>A &ndash; Schwere der Erkrankung</h3>
                    <ul>
                        <li data-gaep="A1" data-group="A" data-b="ohne"><strong>A1:</strong> Plötzliche Bewusstlosigkeit oder akuter Verwirrtheitszustand (ohne Zusatzkriterium B).</li>
                        <li data-gaep="A2/A3" data-group="A" data-b="mit"><strong>A2/A3:</strong> Pulsfrequenz &lt; 50/min oder &gt; 140/min; Blutdruck systolisch &lt; 90 oder &gt; 200mmHg / diastolisch &lt; 60 oder &gt; 120mmHg (mit Zusatzkriterium B).</li>
                        <li data-gaep="A4/A5" data-group="A"><strong>A4/A5:</strong> Akuter Verlust des Seh-, Gleichgewichts- oder Hörsinnes.</li>
                        <li data-gaep="A6" data-group="A" data-b="mit"><strong>A6:</strong> Akute Lähmung oder progrediente Lähmung / akute neurologische Symptomatik (mit Zusatzkriterium B).</li>
                        <li data-gaep="A7" data-group="A" data-b="ohne"><strong>A7:</strong> Lebensbedrohliche Infektion oder Fieber &gt; 38,0°C Kerntemperatur (ohne Zusatzkriterium B).</li>
                        <li data-gaep="A8/A9" data-group="A" data-b="mit"><strong>A8/A9:</strong> Akute Blutung, interventionsbedürftiger Hb-Abfall, schwere Elektrolytstörung oder Entgleisung harnpflichtiger Substanzen (mit Zusatzkriterium B).</li>
                        <li data-gaep="A10" data-group="A" data-b="mit"><strong>A10:</strong> Akute funktionelle, zirkulatorische, respiratorische Störungen oder Schmerzzustände, die nachdrücklich behindern/gefährden (mit Zusatzkriterium B).</li>
                        <li data-gaep="A11" data-group="A" data-b="ohne"><strong>A11:</strong> Dringender Verdacht oder Nachweis einer myokardialen Ischämie (ohne Zusatzkriterium B).</li>
                    </ul>
                    <h3>B &ndash; Intensität der Behandlung</h3>
                    <ul>
                        <li data-gaep="B1" data-group="B"><strong>B1:</strong> Kontinuierliche/intermittierende i.v. Medikation/Infusion.</li>
                        <li data-gaep="B2" data-group="B"><strong>B2:</strong> Operation, Intervention oder spezielle Diagnostik innerhalb 24h, die Krankenhausmittel erfordert.</li>
                        <li data-gaep="B3" data-group="B"><strong>B3:</strong> Mehrfache Kontrolle der Vitalzeichen (auch Monitor) mindestens alle 4 Stunden.</li>
                        <li data-gaep="B4/B5" data-group="B"><strong>B4/B5:</strong> Behandlung auf Intensivstation oder assistierte/kontrollierte Beatmung.</li>
                    </ul>
                    <h3>C &ndash; Operation / Invasive Maßnahme</h3>
                    <ul>
                        <li data-gaep="C1/C2" data-group="C"><strong>C1/C2:</strong> Operationen/Prozeduren, die unstrittig nicht ambulant erbracht werden können, oder Leistungen nach § 115b SGB V, die Ausnahmetatbestände erfüllen.</li>
                    </ul>
                    <h3>D &ndash; Komorbiditäten</h3>
                    <ul>
                        <li data-gaep="D1-D6" data-group="D"><strong>D1-D6:</strong> Signifikant pathologische Lungenparameter, schweres Schlafapnoe-Syndrom, Blutkrankheiten, manifeste Herzerkrankungen (NYHA III/IV), maligne Hyperthermie in Anamnese, sowie besonders überwachungspflichtige Erkrankungen (Diabetes, Schlaganfall, Nieren-/Leberfunktionsstörungen, schwere Immundefekte).</li>
                    </ul>
                    <h3>E / F &ndash; Intensivbetreuung / Soziale Faktoren</h3>
                    <ul>
                        <li data-gaep="E" data-group="E/F">Voraussichtliche postoperative Überwachung &gt; 12h, Drainagen mit kontinuierlicher Kontrolle.</li>
                        <li data-gaep="F" data-group="E/F">Fehlende Kommunikations-/Transportmöglichkeit im Notfall, fehlende Versorgungsmöglichkeiten (geprüft und dokumentiert!).</li>
                    </ul>
                </div>`
            },
            {
                key: 'anhang-2',
                title: 'Anhang 2: Checkliste Aufnahme ZNA-Station',
                icon: 'fa-clipboard-list',
                html: `<p class="doc-anhang"><strong><u>ANHANG 2 &ndash; Checkliste Aufnahme ZNA-Station</u></strong></p>
                <div class="doc-checklist" data-checklist="aufnahme" data-label="Checkliste Aufnahme ZNA-Station">
                    <h3>1. Indikationsstellung &amp; Triage</h3>
                    <ul>
                        <li>Facharztstandard erfüllt: Indikation zur stationären Aufnahme durch/mit Facharzt/Oberarzt ZNA bestätigt.</li>
                        <li>MD-Kriterien erfüllt: Abgleich mit G-AEP Kriterien oder diagnosebezogenen Indikationen (z.B. Synkope, TAA) dokumentiert.</li>
                        <li>Zuweisung geklärt: Patient läuft unter Führung der ZNA (kein Außenlieger).</li>
                    </ul>
                    <h3>2. Abschluss der Ambulanz-Behandlung</h3>
                    <ul>
                        <li>Finalisierung des Ambulanz-Arztbriefes (inkl. klarer Begründung, <em>warum</em> eine ambulante Weiterbehandlung nicht möglich ist und unter welchem klaren Behandlungs- und/oder Diagnostikauftrag die Aufnahme erfolgt).</li>
                        <li>Information an ZNA-Pflege, ZNA-Station (Tel. 4257) und diensthabenden Oberarzt (Tel. 4006).</li>
                    </ul>
                    <h3>3. Administrative &amp; Medizinische Aufnahme</h3>
                    <ul>
                        <li>Anlage des stationären Arztbriefes durch den aufnehmenden Arzt.</li>
                        <li>Einweisungsschein für "ZNA-Station 20.0 ZNA" ausgestellt und Info an administrative Aufnahme (Tel. 4667).</li>
                        <li>Vollständige Epikrise erstellt (Aufnahmegrund, Hausarzt, Allergien, Medikamente inkl. Dosierung).</li>
                    </ul>
                    <h3>4. Anordnungen &amp; Medikation</h3>
                    <ul>
                        <li>Vollständiger Eintrag der Dauer- und Bedarfsmedikation</li>
                        <li>ärztliche Anordnungen vollständig ausgefüllt (inkl. Telefonnummer für Rückfragen).</li>
                        <li>Anordnung von diagnostischen und pflegerischen Maßnahmen in der ePA.</li>
                        <li>Anordnung der Überwachungsintervallen (z.B. Monitor, Vitalzeichen) zur automatisierten KIS-Übertragung.</li>
                    </ul>
                    <h3>5. Dokumentation für den weiteren Verlauf</h3>
                    <ul>
                        <li>Kurzer Behandlungsplan und Hinweise für die klinische Weiterbehandlung in der elektronischen Patientenakte (ePA) hinterlegt.</li>
                        <li>Anlage des Entlassbriefs für den nächsten Tag vorbereitet.</li>
                    </ul>
                </div>`
            },
            {
                key: 'anhang-3',
                title: 'Anhang 3: Checkliste Entlassung ZNA-Station',
                icon: 'fa-right-from-bracket',
                html: `<p class="doc-anhang"><strong>ANHANG 3 &ndash; Checkliste Entlassung ZNA-Station</strong></p>
                <div class="doc-checklist" data-checklist="entlassung" data-label="Checkliste Entlassung ZNA-Station">
                    <h3>1. Ärztliche Visite &amp; Evaluation</h3>
                    <ul>
                        <li>Visite durchgeführt (wochentags 08:00 Uhr durch OA/FA operativ/konservativ; am Wochenende durch Dienstarzt mit fachärztlichem Hintergrund).</li>
                        <li>Evaluation der Verweildauer, Entlassungszeitpunkt für SHT festgelegt (Ziel: 24h, max. 48h).</li>
                        <li>Entscheidung über Entlassung nach Hause oder Verlegung in zuständige Fachklinik getroffen.</li>
                    </ul>
                    <h3>2. Dokumentation &amp; Arztbrief</h3>
                    <ul>
                        <li>Verlaufsdokumentation im KIS / in der ePA abgeschlossen.</li>
                        <li>Freigabe und Abschlussdokumentation des stationären Arztbriefes durchgeführt.</li>
                        <li>Sichergestellt, dass der Patient einen inhaltlich vollständig abgeschlossenen Arztbrief und die Laborbefundübersicht zur Entlassung erhält.</li>
                        <li>Bei Verlegung/Entlassung gegen ärztlichen Rat: Adäquate und rechtssichere Dokumentation erfolgt. Reversschein unterzeichnet.</li>
                    </ul>
                    <h3>3. Patientenaufklärung &amp; Abschluss</h3>
                    <ul>
                        <li>Aushändigung des Arztbriefes an den Patienten.</li>
                        <li>Ärztliches Abschluss- und Aufklärungsgespräch über weiteres Vorgehen (z.B. Hausarztvorstellung) erfolgt.</li>
                    </ul>
                    <h3>4. Pflegerischer &amp; Administrativer Abschluss</h3>
                    <ul>
                        <li>Pflegerischer Abschluss (z.B. Entfernung von Flexülen, Monitor-Abmeldung).</li>
                        <li>Administrative Verlegung/ Entlassung aus dem KIS-System gebucht (bei Ausnüchterungen: Entlassungszeit auf Intensiv- Kurve vermerkt).</li>
                        <li>Bettplatz-Reinigung und Freimeldung des Bettplatzes.</li>
                    </ul>
                </div>`
            }
        ]
    });
})();
