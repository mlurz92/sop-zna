/* ============================================================
   tools/data/aliases.mjs
   ------------------------------------------------------------
   Synonyme, Abkuerzungen und Umgangssprache (Vorschlag 20).

   Das ist ANWENDUNGSWISSEN, kein SOP-Inhalt: die Dateien in
   sops/ bleiben unangetastet. Der Build prueft jede Zuordnung
   gegen die vorhandenen SOP-Kennungen und bricht ab, sobald
   eine Kennung nicht existiert - so kann diese Tabelle nicht
   stillschweigend veralten.

   Schluessel = SOP-Kennung, Wert = Liste der Ausdruecke, unter
   denen in der ZNA tatsaechlich gesucht wird.
   ============================================================ */

export const ALIASES = {
    'abdominelle-schmerzen': [
        'Bauchschmerzen', 'Bauchschmerz', 'Akutes Abdomen', 'Abdominalschmerz',
        'Oberbauchschmerz', 'Unterbauchschmerz', 'Bauchweh', 'Abdomen'
    ],
    'aecopd': [
        'COPD', 'AECOPD', 'COPD-Exazerbation', 'Exazerbierte COPD',
        'Chronisch obstruktive Lungenerkrankung', 'Raucherlunge', 'Lungenemphysem'
    ],
    'akute-alkoholintoxikation': [
        'Alkoholintoxikation', 'Alkoholvergiftung', 'Ethanolintoxikation', 'Alkoholrausch',
        'Promille', 'Rausch', 'C2-Intoxikation', 'C2-Abusus', 'Betrunken', 'Alkohol'
    ],
    'akute-divertikulitis': [
        'Divertikulitis', 'Divertikel', 'Divertikelkrankheit', 'CDD', 'Sigmadivertikulitis'
    ],
    'akute-gastroenteritis': [
        'Gastroenteritis', 'Magen-Darm-Infekt', 'Magen-Darm', 'Durchfall', 'Diarrhoe',
        'Diarrhoea', 'Brechdurchfall', 'Norovirus', 'Rotavirus', 'Enteritis'
    ],
    'akute-herzinsuffizienz': [
        'Herzinsuffizienz', 'ADHF', 'AHF', 'Kardiale Dekompensation', 'Dekompensation',
        'Lungenoedem', 'Herzschwaeche', 'Rekompensation', 'Stauungszeichen'
    ],
    'akute-intoxikation': [
        'Intoxikation', 'Vergiftung', 'Toxidrom', 'Giftnotruf', 'Ueberdosis',
        'Tablettenintoxikation', 'Mischintoxikation', 'Antidot', 'Giftinformationszentrale'
    ],
    'akute-mesenterialischaemie': [
        'Mesenterialischaemie', 'Mesenterialinfarkt', 'Darminfarkt', 'Angina abdominalis',
        'Mesenterialarterienverschluss', 'NOMI'
    ],
    'akute-nebenniereninsuffizienz': [
        'Nebenniereninsuffizienz', 'Addison-Krise', 'Addisonkrise', 'Morbus Addison',
        'Nebennierenkrise', 'Hypokortisolismus', 'Addison', 'Hydrocortison-Krise'
    ],
    'akute-nierenschaedigung': [
        'Akutes Nierenversagen', 'Nierenversagen', 'ANV', 'AKI', 'Nierenschaedigung',
        'KDIGO', 'Kreatininanstieg', 'Oligurie', 'Anurie', 'Dialyseindikation'
    ],
    'akute-pankreatitis': [
        'Pankreatitis', 'Bauchspeicheldruesenentzuendung', 'Lipase', 'Pankreas',
        'Biliaere Pankreatitis'
    ],
    'tonsillitis': [
        'Tonsillitis', 'Angina tonsillaris', 'Mandelentzuendung', 'Halsschmerzen',
        'Centor', 'McIsaac', 'Streptokokkenangina', 'Peritonsillarabszess', 'Angina'
    ],
    'akuter-gichtanfall': [
        'Gicht', 'Gichtanfall', 'Arthritis urica', 'Harnsaeure', 'Podagra',
        'Kristallarthropathie', 'Gichtrechner'
    ],
    'akuter-harnverhalt': [
        'Harnverhalt', 'Harnverhaltung', 'Ischurie', 'Restharn', 'Blasenkatheter',
        'Dauerkatheter', 'Blasenentleerungsstoerung', 'Suprapubischer Katheter'
    ],
    'akutes-aortensyndrom': [
        'Aortendissektion', 'Aortensyndrom', 'AAS', 'ADD-RS', 'Dissektion',
        'Aortenaneurysma', 'Intramurales Haematom', 'Penetrierendes Aortenulkus'
    ],
    'anaemie': [
        'Anaemie', 'Blutarmut', 'Haemoglobinabfall', 'Hb-Abfall', 'Transfusion',
        'EK-Gabe', 'Erythrozytenkonzentrat', 'Transfusionsgrenze'
    ],
    'anaphylaxie': [
        'Anaphylaxie', 'Anaphylaktischer Schock', 'Allergischer Schock', 'Allergie',
        'Allergische Reaktion', 'Quincke-Oedem', 'Angiooedem', 'Adrenalin intramuskulaer'
    ],
    'asthmaexazerbation': [
        'Asthma', 'Asthmaanfall', 'Status asthmaticus', 'Bronchospasmus',
        'Asthma bronchiale', 'Obstruktion'
    ],
    'bakterielle-meningitis': [
        'Meningitis', 'Hirnhautentzuendung', 'Meningismus', 'Lumbalpunktion', 'Liquor',
        'Meningokokken', 'Nackensteife', 'LP', 'Meningoenzephalitis'
    ],
    'bradykarde-hrst': [
        'Bradykardie', 'Bradyarrhythmie', 'AV-Block', 'Sick-Sinus-Syndrom', 'Pacing',
        'TCP', 'Transkutanes Pacing', 'Schrittmacher', 'Sinusbradykardie', 'Pulsdefizit'
    ],
    'cannabinoid-hyperemesis-syndrom': [
        'CHS', 'Cannabinoid-Hyperemesis', 'Cannabis', 'Cannabinoid', 'THC',
        'Hyperemesis', 'Marihuana', 'Heisse Dusche'
    ],
    'delir': [
        'Delir', 'Delirium', 'Verwirrtheit', 'Durchgangssyndrom', 'Entzugsdelir',
        'Delirium tremens', 'CAM-ICU', 'Agitation', 'Desorientiertheit', 'Alkoholentzug'
    ],
    'diabetische-ketoazidose': [
        'DKA', 'Ketoazidose', 'Diabetische Ketoazidose', 'Ketone', 'Ketonkoerper',
        'Entgleister Diabetes', 'Azidose bei Diabetes', 'Kussmaul-Atmung'
    ],
    'dyspnoe': [
        'Dyspnoe', 'Atemnot', 'Luftnot', 'Kurzatmigkeit', 'Atembeschwerden',
        'Respiratorische Insuffizienz', 'Orthopnoe'
    ],
    'erbrechen': [
        'Erbrechen', 'Emesis', 'Vomitus', 'Uebelkeit', 'Nausea', 'Antiemese',
        'Antiemetikum', 'Brechreiz'
    ],
    'erysipel': [
        'Erysipel', 'Wundrose', 'Zellulitis', 'Phlegmone', 'Weichteilinfektion',
        'Hautinfektion', 'Rotlauf', 'Cellulitis'
    ],
    'fieber-in-der-neutropenie': [
        'Neutropenie', 'Febrile Neutropenie', 'Neutropenes Fieber', 'MASCC',
        'Agranulozytose', 'FN', 'Fieber unter Chemotherapie', 'Aplasie'
    ],
    'fremdkoerperingestion': [
        'Fremdkoerper', 'Ingestion', 'Verschluckt', 'Muenze', 'Knopfzelle', 'Batterie',
        'Fremdkoerperaspiration', 'Magnet verschluckt'
    ],
    'harnwegsinfektion': [
        'HWI', 'Harnwegsinfekt', 'Zystitis', 'Blasenentzuendung', 'Pyelonephritis',
        'Dysurie', 'Urinstatus', 'Nierenbeckenentzuendung', 'Urosepsis'
    ],
    'heparininduzierte-thrombozytopenie': [
        'HIT', 'HIT II', '4T-Score', 'Heparininduzierte Thrombozytopenie', 'Argatroban',
        'Heparin-Unvertraeglichkeit'
    ],
    'hepatische-enzephalopathie': [
        'HE', 'Leberenzephalopathie', 'Ammoniak', 'West-Haven', 'Laktulose',
        'Leberkoma', 'Hepatische Enzephalopathie', 'Asterixis', 'Flapping Tremor'
    ],
    'herz-kreislauf-stillstand': [
        'Reanimation', 'CPR', 'ALS', 'Kreislaufstillstand', 'Herzstillstand',
        'Wiederbelebung', 'ROSC', 'Defibrillation', 'Kammerflimmern', 'Asystolie',
        'PEA', 'Herzdruckmassage', 'Schockraum Reanimation', 'ACLS'
    ],
    'hitzschlag': [
        'Hitzschlag', 'Hyperthermie', 'Sonnenstich', 'Hitzeerschoepfung',
        'Heat Stroke', 'Hitzekrampf', 'Ueberhitzung'
    ],
    'hyperkaliaemie': [
        'Hyperkaliaemie', 'Kalium hoch', 'Kaliumerhoehung', 'Hohes Kalium', 'K hoch'
    ],
    'hyperkalzaemie': [
        'Hyperkalzaemie', 'Hyperkalziaemie', 'Kalzium hoch', 'Calcium hoch',
        'Hyperkalzaemische Krise', 'Tumorhyperkalzaemie'
    ],
    'hypernatriaemie': [
        'Hypernatriaemie', 'Natrium hoch', 'Hohes Natrium', 'Hypertone Dehydratation'
    ],
    'hyperosmolares-hyperglykaemisches-syndrom': [
        'HHS', 'Hyperosmolares Syndrom', 'Hyperglykaemie', 'Blutzuckerentgleisung',
        'Hyperosmolar', 'Diabetisches Koma', 'Hyperglykaemisches Koma'
    ],
    'hypertensiver-notfall': [
        'Hypertensive Krise', 'Hypertensiver Notfall', 'Bluthochdruck', 'Hypertonie',
        'RR-Krise', 'Blutdruckkrise', 'Hochdruckkrise', 'Entgleister Blutdruck'
    ],
    'hypoglykaemie': [
        'Hypoglykaemie', 'Unterzuckerung', 'Blutzucker niedrig', 'Glukose niedrig',
        'Traubenzucker', 'Glukagon', 'Zuckerschock', 'BZ niedrig'
    ],
    'hypokaliaemie': [
        'Hypokaliaemie', 'Kalium niedrig', 'Kaliummangel', 'Niedriges Kalium'
    ],
    'hypokalzaemie': [
        'Hypokalzaemie', 'Kalzium niedrig', 'Calcium niedrig', 'Tetanie',
        'Chvostek', 'Trousseau', 'Kalziummangel'
    ],
    'hyponatriaemie': [
        'Hyponatriaemie', 'Natrium niedrig', 'SIADH', 'Niedriges Natrium',
        'Wasserintoxikation', 'Hypotone Hyperhydratation'
    ],
    'ikterus': [
        'Ikterus', 'Gelbsucht', 'Bilirubin', 'Cholestase', 'Gelbfaerbung',
        'Hyperbilirubinaemie', 'Verschlussikterus'
    ],
    'kohlenmonoxidintoxikation': [
        'CO-Intoxikation', 'Kohlenmonoxid', 'CO', 'CO-Hb', 'Rauchgasintoxikation',
        'Rauchgas', 'Kohlenmonoxidvergiftung', 'Hyperbare Oxygenierung', 'Shisha'
    ],
    'kopfschmerzen': [
        'Kopfschmerz', 'Cephalgie', 'Zephalgie', 'Migraene', 'SNOOP',
        'Donnerschlagkopfschmerz', 'Clusterkopfschmerz', 'Spannungskopfschmerz',
        'Kopfweh', 'Thunderclap'
    ],
    'lungenarterienembolie': [
        'LAE', 'Lungenembolie', 'Pulmonalembolie', 'Wells-Score', 'D-Dimer',
        'PESI', 'Lungenarterienembolie', 'Embolie'
    ],
    'myxoedemkoma': [
        'Myxoedemkoma', 'Myxoedem', 'Hypothyreose', 'Schilddruesenunterfunktion',
        'Hypothyreotes Koma', 'TSH hoch'
    ],
    'nicht-st-hebungsinfarkt': [
        'NSTEMI', 'NSTE-ACS', 'Akutes Koronarsyndrom', 'ACS', 'AKS', 'Troponin',
        'Instabile Angina', 'Nicht-ST-Hebungsinfarkt', 'Myokardschaedigung',
        '0-1h-Algorithmus'
    ],
    'nierenkolik': [
        'Nierenkolik', 'Urolithiasis', 'Nierenstein', 'Harnleiterstein', 'Steinkolik',
        'Kolik', 'Ureterstein', 'Nephrolithiasis', 'Harnstau'
    ],
    'obere-gastrointestinale-blutung': [
        'OGIB', 'Obere GI-Blutung', 'Haematemesis', 'Bluterbrechen', 'Teerstuhl',
        'Melaena', 'Varizenblutung', 'Ulkusblutung', 'Blatchford', 'Kaffeesatzerbrechen'
    ],
    'oesophageale-bolusimpaktion': [
        'Bolusimpaktion', 'Bolus', 'Steckengebliebener Bissen', 'Oesophagusobstruktion',
        'Speiseroehre verlegt', 'Fleischbrocken', 'Steakhouse-Syndrom'
    ],
    'pleuraerguss': [
        'Pleuraerguss', 'Erguss', 'Pleurapunktion', 'Light-Kriterien', 'Thorakozentese',
        'Pleuraempyem', 'Punktion Thorax'
    ],
    'pneumonie': [
        'Pneumonie', 'Lungenentzuendung', 'CAP', 'HAP', 'CURB-65', 'Infiltrat',
        'Ambulant erworbene Pneumonie', 'Aspirationspneumonie'
    ],
    'schock': [
        'Schock', 'Kreislaufschock', 'RUSH', 'Schockformen', 'Katecholamine',
        'Hypovolaemer Schock', 'Kardiogener Schock', 'Distributiver Schock',
        'Obstruktiver Schock', 'Schockindex'
    ],
    'sepsis': [
        'Sepsis', 'Blutvergiftung', 'Septischer Schock', 'qSOFA', 'SOFA',
        'Blutkulturen', 'SIRS', 'Infektfokus', 'Sepsisbuendel'
    ],
    'spontan-bakterielle-peritonitis': [
        'SBP', 'Spontan bakterielle Peritonitis', 'Peritonitis', 'Aszites',
        'Aszitespunktion', 'Leberzirrhose', 'Bauchwasser'
    ],
    'st-hebungsinfarkt': [
        'STEMI', 'ST-Hebungsinfarkt', 'Myokardinfarkt', 'Herzinfarkt', 'Herzkatheter',
        'HKL', 'Reperfusion', 'Lyse', 'PCI', 'ST-Hebung', 'Infarkt'
    ],
    'status-epilepticus': [
        'Status epilepticus', 'Krampfanfall', 'Epilepsie', 'Anfall', 'Grand Mal',
        'Konvulsion', 'Krampf', 'Epileptischer Anfall', 'Zuckungen', 'Benzodiazepin-Gabe'
    ],
    'sterbephase-palliativ': [
        'Sterbephase', 'Palliativ', 'Palliativmedizin', 'Terminalphase',
        'Rasselatmung', 'Sterbebegleitung', 'Therapiezielaenderung',
        'Comfort Terminal Care', 'Finalphase'
    ],
    'stromunfall': [
        'Stromunfall', 'Elektrounfall', 'Stromschlag', 'Blitzschlag', 'Elektrotrauma',
        'Niederspannung', 'Hochspannung', 'Strommarke'
    ],
    'synkope': [
        'Synkope', 'Ohnmacht', 'Kollaps', 'Kreislaufkollaps', 'Bewusstseinsverlust',
        'Canadian Syncope Risk Score', 'Vasovagal', 'Umgekippt'
    ],
    'tachykarde-hrst': [
        'Tachykardie', 'Tachyarrhythmie', 'SVT', 'Supraventrikulaere Tachykardie', 'VT',
        'Kammertachykardie', 'Ventrikulaere Tachykardie', 'Kardioversion',
        'Schmalkomplextachykardie', 'Breitkomplextachykardie', 'AVNRT', 'Adenosin-Gabe'
    ],
    'thoraxschmerzen': [
        'Thoraxschmerz', 'Brustschmerz', 'Brustkorbschmerzen', 'Angina pectoris',
        'Big Five', 'Brustenge', 'Retrosternaler Schmerz'
    ],
    'thrombozytopenie': [
        'Thrombozytopenie', 'Thrombopenie', 'Thrombozyten niedrig', 'TK-Gabe',
        'Blutungsneigung', 'Petechien', 'ITP', 'TTP'
    ],
    'tiefe-venenthrombose': [
        'TVT', 'Thrombose', 'Beinvenenthrombose', 'Phlebothrombose',
        'Tiefe Beinvenenthrombose', 'Wells TVT', 'Beinschwellung'
    ],
    'transiente-globale-amnesie': [
        'TGA', 'Amnesie', 'Gedaechtnisverlust', 'Transiente globale Amnesie',
        'Gedaechtnisstoerung', 'Merkfaehigkeitsstoerung'
    ],
    'tumorlysesyndrom': [
        'TLS', 'Tumorlyse', 'Tumorlysesyndrom', 'Rasburicase', 'Cairo-Bishop',
        'Harnsaeure bei Tumor'
    ],
    'unklare-vigilanzminderung': [
        'Vigilanzminderung', 'Bewusstseinsstoerung', 'Koma', 'Somnolenz', 'Sopor',
        'GCS', 'Glasgow Coma Scale', 'Bewusstlos', 'Nicht ansprechbar', 'Eingetruebt'
    ],
    'untere-gastrointestinale-blutung': [
        'UGIB', 'Untere GI-Blutung', 'Haematochezie', 'Rektale Blutung',
        'Blut im Stuhl', 'Peranale Blutung', 'Divertikelblutung'
    ],
    'vena-cava-superior-syndrom': [
        'VCSS', 'Vena-cava-superior-Syndrom', 'Obere Einflussstauung',
        'Einflussstauung', 'Cava-Kompression', 'Stokes-Kragen'
    ],
    'vorhofflimmern': [
        'VHF', 'Vorhofflimmern', 'AFib', 'Absolute Arrhythmie', 'Tachyarrhythmia absoluta',
        'CHA2DS2-VA', 'Antikoagulation', 'Vorhofflattern', 'Frequenzkontrolle',
        'Rhythmuskontrolle', 'AA bei VHF'
    ],
    'zerebrale-metastasen': [
        'Hirnmetastasen', 'Zerebrale Metastasen', 'ZNS-Metastasen', 'Hirndruck',
        'Hirnoedem', 'Raumforderung zerebral', 'Dexamethason bei Hirndruck'
    ],
    'zerebrale-venen-sinusthrombose': [
        'Sinusvenenthrombose', 'Sinusthrombose', 'CVST', 'Hirnvenenthrombose',
        'Zerebrale Venenthrombose', 'SVT zerebral'
    ]
};

/* Leitsymptome, die auf mehrere Pfade zeigen. Reihenfolge = Rangfolge. */
export const TOPIC_ALIASES = {
    'Fieber': ['sepsis', 'pneumonie', 'fieber-in-der-neutropenie', 'harnwegsinfektion', 'bakterielle-meningitis', 'erysipel', 'tonsillitis'],
    'Brustschmerz': ['thoraxschmerzen', 'st-hebungsinfarkt', 'nicht-st-hebungsinfarkt', 'akutes-aortensyndrom', 'lungenarterienembolie'],
    'Atemnot': ['dyspnoe', 'akute-herzinsuffizienz', 'aecopd', 'asthmaexazerbation', 'lungenarterienembolie', 'pneumonie'],
    'Bewusstlos': ['unklare-vigilanzminderung', 'synkope', 'herz-kreislauf-stillstand', 'hypoglykaemie', 'status-epilepticus'],
    'Blutung': ['obere-gastrointestinale-blutung', 'untere-gastrointestinale-blutung', 'anaemie', 'thrombozytopenie'],
    'Hypotonie': ['schock', 'sepsis', 'anaphylaxie', 'akute-herzinsuffizienz'],
    'Elektrolyte': ['hyperkaliaemie', 'hypokaliaemie', 'hypernatriaemie', 'hyponatriaemie', 'hyperkalzaemie', 'hypokalzaemie'],
    'Blutzucker': ['hypoglykaemie', 'diabetische-ketoazidose', 'hyperosmolares-hyperglykaemisches-syndrom'],
    'Herzrhythmus': ['tachykarde-hrst', 'bradykarde-hrst', 'vorhofflimmern'],
    'Antikoagulation': ['vorhofflimmern', 'tiefe-venenthrombose', 'lungenarterienembolie', 'heparininduzierte-thrombozytopenie'],
    'Bauchschmerz': ['abdominelle-schmerzen', 'akute-pankreatitis', 'akute-divertikulitis', 'akute-mesenterialischaemie', 'nierenkolik'],
    'Krampfanfall': ['status-epilepticus', 'unklare-vigilanzminderung', 'hypoglykaemie', 'hyponatriaemie'],
    'Onkologie': ['tumorlysesyndrom', 'fieber-in-der-neutropenie', 'hyperkalzaemie', 'vena-cava-superior-syndrom', 'zerebrale-metastasen'],
    'Leberzirrhose': ['hepatische-enzephalopathie', 'spontan-bakterielle-peritonitis', 'obere-gastrointestinale-blutung', 'ikterus'],
    'Reanimation': ['herz-kreislauf-stillstand', 'schock', 'anaphylaxie'],
    'Vergiftung': ['akute-intoxikation', 'akute-alkoholintoxikation', 'kohlenmonoxidintoxikation', 'cannabinoid-hyperemesis-syndrom']
};
