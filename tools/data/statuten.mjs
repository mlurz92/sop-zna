/* ============================================================
   tools/data/statuten.mjs
   ------------------------------------------------------------
   Anwendungswissen zu den Statuten unter statuten/.

   Wie bei den SOPs gilt: der Wortlaut der Statuten steht in
   statuten/*.js und wird hier nicht wiederholt. Was diese Datei
   hinzufuegt, ist Navigation:

     STATUT_FIGURES      Abbildungen aus dem Original und die Stelle
                         (data-figure-slot), an der sie stehen
     STATUT_ALIASES      Suchbegriffe je Statut
     STATUT_LINKS        Wortstellen, die zum Statut fuehren - in den
                         SOPs ebenso wie zwischen den Statuten
     ABS_INDICATIONS     Diagnosebezogene Indikationen des Statuts
                         ABS (Kap. 6.1) und die SOPs, in deren
                         Dispositionsfeld sie angezeigt werden

   Der Build prueft jede Angabe gegen den Bestand und bricht bei
   einer Abweichung ab: unbekannte Kennung, fehlender Abschnitt,
   fehlende Bilddatei, verwaister Platzhalter, Wortstelle, die im
   Zieltext nicht vorkommt, Indikation, die nicht woertlich im
   Statut steht.
   ============================================================ */

export const STATUT_FIGURES = [
    {
        doc: 'statut-zna',
        section: 'organigramm',
        slot: 'organigramm',
        src: 'img/statuten/zna-organigramm.jpg',
        alt: 'Organigramm des Zentrums für Notfallmedizin: Zentrumsleitung und Chefarzt, darunter '
           + 'die Zentrale Interdisziplinäre Notaufnahme mit Aufnahme- und Beobachtungsstation '
           + '(konservative und operative Medizin, stationäre Versorgung), die Präklinik mit '
           + 'Notfallmedizin, die Ausbildung Notfallmedizin mit Gesundheitsakademie sowie die '
           + 'Betriebe und Kooperationspartner des Klinikums.',
        caption: 'Abb.1: Organigramm, Zentrale Interdisziplinäre Notaufnahme, Aufnahme- und Beobachtungsstation'
    },
    {
        doc: 'statut-zna',
        section: 'besetzung',
        slot: 'schichtplan-2024',
        src: 'img/statuten/zna-schichtplan-2024.png',
        alt: 'Schichtplan im Ärztlichen Dienst (2024) als Stundenraster von 7 bis 6 Uhr: '
           + 'Oberärzte Klinische Akut- und Notfallmedizin, operative und konservative Dienste '
           + 'mit ihren Dienstzeiten und die Summe des Personalaufkommens je Stunde.',
        caption: '6.2.1 Schichtplan im Ärztlichen Dienst'
    },
    {
        doc: 'statut-zna',
        section: 'besetzung',
        slot: 'schichtplan-2025',
        src: 'img/statuten/zna-schichtplan-2025.png',
        alt: 'Dienstmodell ab 2025 als Stundenraster: Werktage mit Oberarzt Klinische Akut- und '
           + 'Notfallmedizin, Fachärzten operativ und konservativ sowie Ärzten in Weiterbildung, '
           + 'Verlaufskurve des Personalaufkommens über 24 Stunden und die Wochenendbesetzung '
           + 'mit Tag-, Nacht- und Rufdiensten.',
        caption: '6.3 Dienstmodell ab 2025 – Werktage und Wochenende'
    },
    {
        doc: 'statut-zna',
        section: 'versorgungsprozess',
        slot: 'versorgungsprozess',
        src: 'img/statuten/zna-versorgungsprozess.png',
        alt: 'Behandlungs- und Versorgungsprozess: Zugang über Luftrettung, Rettungsdienst, Haus- '
           + 'oder Facharzt, Selbstvorstellung, Portalpraxis oder Klinik; Admin / Aufnahme und '
           + 'Triage in die Stufen Rot, Orange, Gelb, Grün und Blau; Rot führt über Arztkontakt, '
           + 'Schockraumbehandlung und -diagnostik zur Notfallintervention, OP oder ITS; die '
           + 'übrigen Stufen über Basisdiagnostik, Arztkontakt, Behandlung und Abschlussdiagnostik '
           + 'zur stationären Aufnahme, zur Kurzstationären ZNA Station oder zur ambulanten '
           + 'Entlassung. Rechts: Festlegung von Leitsymptom, Zuständigkeit, Dringlichkeit und '
           + 'Vitaleinschätzung, Wartezeit (0, 10, 30, 90, 120 min), Implikationen aus der Triage, '
           + 'Therapieentscheidung / Anschlussbehandlung.',
        caption: '7.1. Behandlungs- und Versorgungsprozess'
    },
    {
        doc: 'statut-zna',
        section: 'abrechnung',
        slot: 'abrechnung',
        src: 'img/statuten/zna-abrechnung.png',
        alt: 'Gliederung der Notfallversorgung: ambulante Behandlung (ambulante Notfallversorgung, '
           + 'AOP / ambulantes Operieren), teilstationäre Behandlung (vor- und nachstationäre '
           + 'Behandlung) und stationäre Behandlung.',
        caption: 'Notfallversorgung: ambulant, teilstationär, stationär'
    }
];

export const STATUT_ALIASES = {
    'statut-zna': [
        'Statut ZNA', 'Arbeitsordnung', 'Arbeitsordnung ZNA', 'Statut Notaufnahme',
        'Organigramm', 'Leistungsspektrum', 'Raumstruktur', 'Dienstmodell', 'Schichtplan',
        'Dienstzeiten', 'Regelbesetzung', 'Triagierung', 'Manchester Triage', 'MTS',
        'Crowding', 'CEDOCS', 'Abmeldung', 'IVENA', 'Besprechungsmatrix', 'Übergabe',
        'Dokumentationsaudit', 'Fehlermanagement', 'CIRS', 'Weiterbildung', 'Fortbildung',
        'Rotation', 'Famulatur', 'Abrechnung', 'Controlling'
    ],
    'statut-abs': [
        'Statut ABS', 'ABS', 'ZNA-Station', 'ZNA Station', 'A&B-Station', 'AB-Station',
        'Aufnahmestation', 'Beobachtungsstation', 'Aufnahme- und Beobachtungsstation',
        'Kurzlieger', 'Kurzstationär', 'Belegung', 'Aufnahmeindikation', 'G-AEP',
        'GAEP', 'Aufnahmekriterien', 'MD-Kriterien', 'Checkliste Aufnahme',
        'Checkliste Entlassung', 'Ausnüchterung', 'Reversbogen', 'Außenlieger'
    ]
};

/* Wortstellen, die auf ein Statut verweisen.
   in: '*' steht fuer alle SOPs; section ist der Abschnittstitel
   (SOP) bzw. der Abschnittsschluessel (Statut). */
export const STATUT_LINKS = [
    { in: '*', section: 'Disposition', phrase: 'Statut ZNA', to: 'statut-zna' },
    { in: '*', section: 'Disposition', phrase: 'Statut Aufnahme- und Beobachtungsstation', to: 'statut-abs' },
    { in: 'statut-zna', section: 'leistungsspektrum', phrase: 'gesondertes Statut', to: 'statut-abs' },
    { in: 'statut-zna', section: 'infrastruktur', phrase: 'diesem Bereich zugeordneten Dokumenten', to: 'statut-abs' },
    { in: 'statut-zna', section: 'prozess', phrase: 'Aufnahme auf A/ B-Station der ZNA', to: 'statut-abs' },
    { in: 'statut-abs', section: 'personal', phrase: 'Chefarztbereich der Zentralen Notaufnahme', to: 'statut-zna' }
];

/* Diagnosebezogene Indikationen (Statut ABS, Kap. 6.1).
   "text" muss woertlich im Statut stehen. Zugeordnet ist nur,
   was eindeutig ist - im Zweifel keine Zuordnung. Leitsymptome
   ohne eigenen Patientenpfad (Schaedel-Hirn-Trauma, Hochrasanz-
   trauma, Beckenprellung, Koprostase, cerebrale Ischaemie) bleiben
   deshalb ohne SOP. */
export const ABS_INDICATIONS = [
    { text: 'Elektrolytstörungen', sops: ['hyperkaliaemie', 'hypokaliaemie', 'hyponatriaemie', 'hypernatriaemie', 'hyperkalzaemie', 'hypokalzaemie'] },
    { text: 'Tachyarrhythmia absoluta', sops: ['vorhofflimmern'] },
    { text: 'Synkope (vasovagal oder orthostatisch)', sops: ['synkope'] },
    { text: 'Alkohol- oder Drogenintoxikation mit Beeinträchtigung des Bewusstseins', sops: ['akute-alkoholintoxikation', 'akute-intoxikation'] },
    { text: 'Thoraxschmerzen bei Verdacht auf myokardiale Ischämie', sops: ['thoraxschmerzen'] },
    { text: 'Gastroenteritis und Exsikkose', sops: ['akute-gastroenteritis'] },
    { text: 'Entgleister Hypertonus', sops: ['hypertensiver-notfall'] },
    { text: 'Palliative Versorgung bei bevorstehendem Eintritt des Todes', sops: ['sterbephase-palliativ'] }
];

/* Einstiege auf der Startseite: je ein Werkzeug aus den Statuten.
   section ist der Abschnittsschluessel im jeweiligen Statut. */
export const STATUT_TOOLS = [
    { doc: 'statut-abs', section: 'anhang-2', label: 'Aufnahme ZNA-Station', hint: 'Checkliste', icon: 'fa-clipboard-list' },
    { doc: 'statut-abs', section: 'anhang-3', label: 'Entlassung ZNA-Station', hint: 'Checkliste', icon: 'fa-right-from-bracket' },
    { doc: 'statut-abs', section: 'anhang-1', label: 'G-AEP-Kriterien', hint: 'Prüfhilfe', icon: 'fa-scale-balanced' },
    { doc: 'statut-abs', section: 'indikationen', label: 'Indikationen ABS', hint: 'Kap. 6', icon: 'fa-square-check' },
    { doc: 'statut-zna', section: 'prozess', label: 'Triage & Crowding', hint: 'Kap. 8', icon: 'fa-diagram-project' },
    { doc: 'statut-zna', section: 'besetzung', label: 'Dienstmodell', hint: 'Kap. 6', icon: 'fa-clock' },
    { doc: 'statut-zna', section: 'besprechungen', label: 'Besprechungen', hint: 'Kap. 10', icon: 'fa-calendar-check' },
    { doc: 'statut-zna', section: 'organigramm', label: 'Organigramm', hint: 'Kap. 1', icon: 'fa-sitemap' }
];
