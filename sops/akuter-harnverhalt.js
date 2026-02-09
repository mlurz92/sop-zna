// SOP: Akuter Harnverhalt
// Kategorie: Nephrologie
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
html: `<ul>
<li><strong>Akuter Harnverhalt:</strong> Akute Unfähigkeit, die gefüllte Harnblase spontan zu entleeren, trotz schmerzhaften Harndrangs. Urologischer Notfall!</li>
</ul>`
},
{
title: "Ursachen",
html: `<ul>
<li><strong>Obstruktiv (häufigste Ursache):</strong>
<ul>
<li><strong>Benigne Prostatahyperplasie (BPH):</strong> häufigste Ursache beim Mann</li>
<li>Prostatakarzinom</li>
<li>Harnröhrenstriktur</li>
<li>Blasenstein, Koagel</li>
<li>Phimose</li>
</ul>
</li>
<li><strong>Medikamentös:</strong> Anticholinergika, Sympathomimetika, Opioide, trizyklische Antidepressiva, Antihistaminika, Calciumantagonisten, Benzodiazepine</li>
<li><strong>Neurologisch:</strong> Cauda-equina-Syndrom, MS, diabetische autonome Neuropathie, Rückenmarksschädigung, Bandscheibenvorfall, Z.n. Apoplex</li>
<li><strong>Postoperativ:</strong> insbesondere nach Allgemein-/Spinalanästhesie, Becken-/Perineal-Eingriffen</li>
<li><strong>Infektiös:</strong> akute Prostatitis, schwere Harnwegsinfektion, Genitalherpes</li>
<li><strong>Sonstige:</strong> Obstipation (rektale Masse), Schwangerschaft, Myom</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Suprapubischer Schmerz/Druck</strong> und Harndrang</li>
<li><strong>Palpable und perkutierbare Harnblase</strong> (Blasenhochstand)</li>
<li>Unfähigkeit zur Miktion</li>
<li>Unruhe, Agitation</li>
<li>ggf. <strong>Überlaufinkontinenz</strong> (ständiges Tröpfeln bei übervoller Blase)</li>
<li>ggf. <strong>vegetative Begleitsymptome</strong> (Schwitzen, Tachykardie, Übelkeit)</li>
<li>ggf. Fieber (bei begleitendem Harnwegsinfekt/Prostatitis)</li>
<li>ggf. <strong>neurologische Symptome</strong> (Reithosenparästhesie, Beinparese, Sphinkterstörung bei Cauda-equina-Syndrom)</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Bei akutem Harnverhalt + Reithosenparästhesie + Beinparese + Sphinkterstörung an <strong>Cauda-equina-Syndrom</strong> denken → Notfall-MRT!</p></div>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur)</li>
<li>1x venöser Zugang</li>
<li><strong>BGA</strong> (Kalium? Kreatinin? pH? – bei prolongiertem Harnverhalt: Postrenale AKI?)</li>
<li><strong>Labor:</strong> BB, CRP, E'lyte, NW, ggf. PSA (nicht bei V.a. akute Prostatitis), Gerinnung</li>
<li><strong>Urin-Status</strong> (nach Katheterisierung): Leukozyten? Nitrit? Erythrozyten?</li>
</ul>
<h3>Klinische Untersuchung</h3>
<ul>
<li><strong>Anamnese:</strong> Miktionsbeschwerden in der Vorgeschichte (LUTS)? Vorbekannte BPH? Letzte Miktion? Medikamente (Anticholinergika, Opioide, etc.)? Operation? Spinalanästhesie? Neurologische Symptome? Trauma? Hämaturie?</li>
<li><strong>Körperliche Untersuchung:</strong> Suprapubische Schwellung/Druckschmerz? Perkussion (gedämpft)? DRU (Prostatagröße? Druckschmerz bei Prostatitis? Konsistenz? Rektale Masse?)? Neurologischer Status (Perianal-Sensibilität? Analtonus? Beinreflexe? Kraft?)</li>
</ul>
<h3>Erweiterte Diagnostik (ggf.)</h3>
<ul>
<li><strong>Sonographie Blase:</strong> Restharnbestimmung (Volumen?), ggf. Harnstau beidseits?</li>
<li><strong>Sonographie Nieren:</strong> Hydronephrose (postrenale AKI)?</li>
<li><strong>MRT Wirbelsäule:</strong> notfallmäßig bei V.a. Cauda-equina-Syndrom</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Sofortmaßnahme: Blasenentlastung</h3>
<ul>
<li><strong>Transurethrale Katheterisierung</strong> (Methode der Wahl):
<ul>
<li>Sterile Einlage eines transurethralen Dauerkatheters (14–16 Ch beim Mann)</li>
<li>Dokumentation des Ablaufvolumens</li>
<li>Langsame Entleerung (CAVE: Entlastungshämaturie bei Volumina > 1000 ml – fraktionierte Entleerung je 500 ml mit kurzen Pausen erwägen)</li>
</ul>
</li>
<li><strong>Suprapubische Katheteranlage:</strong> bei frustaner transurethraler Katheterisierung, Harnröhrenstriktur, Harnröhrentrauma/V.a. Harnröhrenruptur, akuter Prostatitis</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Bei V.a. <strong>Harnröhrenruptur</strong> (Blut am Meatus, Beckentrauma, perineales Hämatom): <strong>keine transurethrale Katheterisierung!</strong> → Urologisches Konsil, suprapubische Ableitung.</p></div>
<h3>Medikamentöse Therapie</h3>
<ul>
<li><strong>α-Blocker</strong> (z.B. Tamsulosin 0,4 mg 1x/d) → erleichtert Spontanmiktion nach Katheterentfernung bei BPH-assoziiertem Harnverhalt</li>
<li>Auslösende Medikamente identifizieren und möglichst absetzen</li>
<li>Antibiotikatherapie bei begleitendem Harnwegsinfekt</li>
</ul>
<h3>Monitoring nach Entlastung</h3>
<ul>
<li>Überwachung auf <strong>Postobstruktive Diurese</strong> (Polyurie > 200 ml/h nach Entlastung): Flüssigkeit und Elektrolyte bilanzieren, ggf. i.v.-Substitution</li>
<li>Kontrolle der Retentionsparameter (Kreatinin, Kalium)</li>
</ul>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Akuter Harnverhalt = Notfall</strong> – sofortige Blasenentlastung durch Katheterisierung!</li>
<li>An <strong>Cauda-equina-Syndrom</strong> denken bei neurologischen Symptomen (Reithosenparästhesie, Beinparese, Sphinkterstörung) → Notfall-MRT!</li>
<li>Bei V.a. <strong>Harnröhrenruptur: keine transurethrale Katheterisierung!</strong></li>
<li>Bei großen Restharnmengen (> 1000 ml): <strong>Postobstruktive Diurese</strong> beachten (Elektrolytentgleisung möglich)</li>
<li><strong>Medikamentenanamnese</strong> ist essenziell – viele Substanzen können Harnverhalt auslösen!</li>
<li>Urologisches Konsil bei: frustraner Katheterisierung, Harnröhrenstriktur, rezidivierendem Harnverhalt, unklarer Ätiologie</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Stationäre Aufnahme:</strong> postrenale AKI, postobstruktive Diurese, Sepsis/Urosepsis, Cauda-equina-Syndrom, Notwendigkeit einer suprapubischen Katheteranlage</li>
<li><strong>Ambulant:</strong> erfolgreiche Katheterisierung, stabile Retentionsparameter, kein Anhalt für Komplikation, urologische Wiedervorstellung innerhalb 2–3 Tagen, Auslassversuch geplant</li>
</ul>`
}
],
        stand: "12/24",
        sources: `Selius BA et al. Urinary retention in adults: diagnosis and initial management. Am Fam Physician. 2008;77(5):643-50.<br>
Oelke M et al. EAU Guidelines on the Assessment and Non-surgical Management of Urinary Incontinence/Retention. Eur Urol. 2023.<br>
Marshall JR et al. Acute urinary retention. BMJ. 2024;386:e077089.`
    });
})();
