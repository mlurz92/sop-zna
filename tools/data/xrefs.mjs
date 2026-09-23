/* ============================================================
   tools/data/xrefs.mjs
   ------------------------------------------------------------
   Querverweis-Begriffe: unter welchen Woertern ein Patientenpfad
   (oder ein Statut) im Fliesstext eines anderen Dokuments zum
   Sprungziel wird.

   Automatisch gilt der Name ohne Klammerzusatz und ohne das
   fuehrende "Akute/Akuter/Akutes" ("Akute Pankreatitis" ->
   "Pankreatitis"). Hier stehen die ZUSAETZLICHEN Begriffe.

   Aufgenommen werden nur Krankheitsbilder, Syndrome und
   Leitsymptome - keine Laborwerte, Scores, Medikamente oder
   Prozeduren. "Troponin" ist kein Verweis auf den NSTEMI,
   "Bilirubin" keiner auf den Ikterus, "Angina" keiner auf die
   Tonsillitis. Mehrdeutiges ("Myokardinfarkt": STEMI oder
   NSTEMI?) bleibt draussen.

   Der Build prueft: jede Kennung existiert, kein Begriff zeigt auf
   zwei Ziele, kein Begriff ist kuerzer als vier Zeichen.
   ============================================================ */

export const XREF_TERMS = {
    'abdominelle-schmerzen': ['akutes Abdomen', 'Bauchschmerzen'],
    'aecopd': ['AECOPD', 'COPD-Exazerbation'],
    'akute-alkoholintoxikation': ['Alkoholintoxikation'],
    'akute-gastroenteritis': ['Diarrhoe', 'Durchfall'],
    'akute-herzinsuffizienz': ['kardiale Dekompensation'],
    'akute-intoxikation': ['Mischintoxikation', 'Vergiftung'],
    'akute-mesenterialischaemie': ['Mesenterialinfarkt', 'Mesenterialischämie'],
    'akute-nebenniereninsuffizienz': ['Nebenniereninsuffizienz', 'Addisonkrise', 'Addison-Krise'],
    'akute-nierenschaedigung': ['akutes Nierenversagen', 'Nierenversagen'],
    'akutes-aortensyndrom': ['Aortendissektion'],
    'asthmaexazerbation': ['Asthma bronchiale', 'Asthmaanfall'],
    'bakterielle-meningitis': ['Meningitis'],
    'bradykarde-hrst': ['Bradykardie', 'AV-Block', 'Sick-Sinus-Syndrom', 'Sinusbradykardie'],
    'delir': ['Entzugsdelir'],
    'diabetische-ketoazidose': ['Ketoazidose'],
    'dyspnoe': ['Atemnot', 'Luftnot'],
    'fieber-in-der-neutropenie': ['Neutropenie', 'febrile Neutropenie', 'Agranulozytose'],
    'harnwegsinfektion': ['Harnwegsinfekt', 'Pyelonephritis', 'Urosepsis', 'Zystitis'],
    'heparininduzierte-thrombozytopenie': ['HIT II', 'HIT Typ II'],
    'herz-kreislauf-stillstand': ['Kreislaufstillstand', 'Reanimation', 'Kammerflimmern', 'Asystolie'],
    'hypoglykaemie': ['Unterzuckerung'],
    'kohlenmonoxidintoxikation': ['CO-Intoxikation', 'Kohlenmonoxid'],
    'kopfschmerzen': ['Kopfschmerz'],
    'lungenarterienembolie': ['Lungenembolie'],
    'nicht-st-hebungsinfarkt': ['NSTEMI', 'instabile Angina'],
    'nierenkolik': ['Nephrolithiasis', 'Urolithiasis'],
    'st-hebungsinfarkt': ['STEMI'],
    'status-epilepticus': ['Krampfanfall', 'epileptischer Anfall'],
    'sterbephase-palliativ': ['Sterbephase'],
    'stromunfall': ['Stromschlag'],
    'thoraxschmerzen': ['Thoraxschmerz', 'Angina pectoris', 'Brustschmerz'],
    'thrombozytopenie': ['Thrombopenie'],
    'tiefe-venenthrombose': ['Beinvenenthrombose'],
    'tumorlysesyndrom': ['Tumorlyse'],
    'unklare-vigilanzminderung': ['Vigilanzminderung'],
    'untere-gastrointestinale-blutung': ['Divertikelblutung'],
    'vorhofflimmern': ['Tachyarrhythmia absoluta'],
    'zerebrale-metastasen': ['Hirnmetastasen'],
    'zerebrale-venen-sinusthrombose': ['Sinusvenenthrombose', 'Sinusthrombose'],

    // Statuten als Ziel
    'statut-abs': ['Aufnahme- und Beobachtungsstation', 'A&B-Station', 'ZNA-Station'],
    'statut-zna': ['Statut ZNA', 'Arbeitsordnung']
};
