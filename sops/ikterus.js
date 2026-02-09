// SOP: Ikterus
// Kategorie: Gastroenterologie
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "ikterus",
        title: "Ikterus",
        category: "Gastroenterologie",
        catKey: "gi",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Ikterus:</strong> Gelbfärbung von Haut, Skleren und Schleimhäuten durch Erhöhung des Serumbilirubins > 2 mg/dl (34 µmol/l)</li>
<li><strong>Subikterus:</strong> Gelbfärbung der Skleren ab Bilirubin > 1,5 mg/dl</li>
</ul>
<h3>Einteilung</h3>
<ul>
<li><strong>Prähepatisch:</strong> Hämolyse (indirektes Bilirubin ↑)</li>
<li><strong>Intrahepatisch (hepatozellulär):</strong> Hepatitis, Leberzirrhose, medikamentös-toxisch (direktes + indirektes Bilirubin ↑)</li>
<li><strong>Posthepatisch (cholestatisch/obstruktiv):</strong> Choledocholithiasis, Pankreaskopf-Ca, Cholangitis (direktes Bilirubin ↑)</li>
</ul>`
},
{
title: "Ursachen",
html: `<h3>Prähepatisch (Hämolyse)</h3>
<ul>
<li>Autoimmunhämolytische Anämie</li>
<li>Hämoglobinopathien (Sichelzellanämie, Thalassämie)</li>
<li>Mechanische Hämolyse (Herzklappenprothese, HUS, TTP)</li>
<li>Transfusionsreaktion</li>
<li>Ineffektive Erythropoese</li>
<li>Morbus Gilbert (harmlos, häufig!)</li>
</ul>
<h3>Intrahepatisch</h3>
<ul>
<li>Virushepatitis (A, B, C, E)</li>
<li>Alkoholische Hepatitis/Zirrhose</li>
<li>Medikamentös-toxisch (Paracetamol, Isoniazid, Statine, Phytotherapeutika)</li>
<li>Autoimmunhepatitis</li>
<li>Stauungsleber (Rechtsherzinsuffizienz)</li>
<li>Schwangerschaftsspezifisch (HELLP, akute Schwangerschaftsfettleber)</li>
<li>Morbus Wilson, Hämochromatose</li>
<li>Infiltrativ (Metastasen, Lymphom, Amyloidose)</li>
</ul>
<h3>Posthepatisch (obstruktiv)</h3>
<ul>
<li>Choledocholithiasis</li>
<li>Pankreaskopfkarzinom</li>
<li>Cholangiozelluläres Karzinom (Klatskin-Tumor)</li>
<li>Papillenkarzinom</li>
<li>Primär sklerosierende Cholangitis</li>
<li>Pankreatitis (Kompression)</li>
<li>Gallengangsstrikturen</li>
</ul>`
},
{
title: "Symptome",
html: `<ul>
<li><strong>Gelbfärbung</strong> der Skleren, Haut, Schleimhäute</li>
<li>ggf. <strong>Pruritus</strong> (v.a. bei cholestatischem Ikterus)</li>
<li>ggf. <strong>Acholischer Stuhl</strong> (hell/entfärbt, bei Obstruktion)</li>
<li>ggf. <strong>Dunkler Urin</strong> (Bilirubinurie, bei konjugierter Hyperbilirubinämie)</li>
<li>ggf. <strong>Oberbauchschmerzen</strong> (Cholezystitis, Choledocholithiasis, Pankreatitis)</li>
<li>ggf. <strong>Fieber, Schüttelfrost</strong> (Cholangitis!)</li>
<li>ggf. <strong>Gewichtsverlust</strong> (Malignom)</li>
<li>ggf. <strong>Zeichen der Leberzirrhose</strong> (Spider Naevi, Palmarerythem, Aszites, Caput medusae, Gynäkomastie)</li>
<li>ggf. <strong>Courvoisier-Zeichen</strong> (schmerzlose, palpable Gallenblase bei Pankreaskopf-Ca)</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> <strong>Charcot-Trias</strong> (Ikterus + Fieber/Schüttelfrost + rechtsseitiger Oberbauchschmerz) = <strong>akute Cholangitis</strong> → Notfall!</p></div>`
},
{
title: "Diagnostik",
html: `<h3>Basismaßnahmen</h3>
<ul>
<li>Ersteindruck + ABCDE + Vitalparameter</li>
<li>1x venöser Zugang</li>
<li><strong>Labor:</strong> BB, CRP, <strong>Bilirubin (gesamt + direkt)</strong>, GOT, GPT, AP, γ-GT, LDH, Albumin, Gerinnung (INR, Quick), Lipase, NW, E'lyte</li>
<li><strong>Differenzierung:</strong>
<ul>
<li>Indirektes Bilirubin ↑ → Hämolyse, Morbus Gilbert</li>
<li>Direktes Bilirubin ↑ → hepatozellulär oder obstruktiv</li>
</ul>
</li>
</ul>
<h3>Klinische Untersuchung</h3>
<ul>
<li><strong>Anamnese:</strong> Ikterus seit wann? Schmerzen? Fieber? Stuhlfarbe? Urinfarbe? Pruritus? Alkohol? Medikamente? Auslandsreisen? Bluttransfusionen? Vorerkrankungen? Gewichtsverlust?</li>
<li><strong>Körperliche Untersuchung:</strong> Ikterus? Hepatomegalie? Splenomegalie? Aszites? Murphy-Zeichen? Courvoisier-Zeichen? Leberzirrhose-Stigmata? Lymphadenopathie?</li>
</ul>
<h3>Erweiterte Diagnostik</h3>
<ul>
<li><strong>Abdomensonographie</strong> (1. Bildgebung!): Gallenblase? Gallenwege erweitert? Choledocholithiasis? Leberparenchym? Pankreaskopf? Aszites?</li>
<li><strong>Hämolyse-Diagnostik:</strong> LDH↑, Haptoglobin↓, Retikulozyten↑, indirektes Bilirubin↑, Coombs-Test</li>
<li><strong>Virusserologie:</strong> Hepatitis A (Anti-HAV-IgM), B (HBsAg, Anti-HBc), C (Anti-HCV), E (Anti-HEV-IgM)</li>
<li><strong>MRCP/CT-Abdomen:</strong> bei V.a. Obstruktion, Malignom</li>
<li><strong>ERC(P):</strong> therapeutisch bei Choledocholithiasis, Stent bei maligner Obstruktion</li>
</ul>`
},
{
title: "Therapie",
html: `<ul>
<li><strong>Therapie der Grunderkrankung!</strong></li>
<li><strong>Akute Cholangitis:</strong> Antibiotika (z.B. Piperacillin/Tazobactam 4,5 g i.v. 3x/d) + Notfall-ERC(P) mit Gallenwegsdrainage</li>
<li><strong>Choledocholithiasis:</strong> ERCP mit Steinextraktion</li>
<li><strong>Maligne Obstruktion:</strong> Stent-Einlage (ERCP/PTCD), onkologische Therapie</li>
<li><strong>Hepatitis:</strong> je nach Ätiologie (antiviral, Steroide, Absetzen des Auslösers)</li>
<li><strong>Hämolyse:</strong> je nach Ursache (Steroide bei AIHA, Transfusion, etc.)</li>
<li><strong>Pruritus:</strong> Colestyramin 4 g p.o. 1–3x/d, Ursodeoxycholsäure, ggf. Rifampicin, Naltrexon</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Bei Cholangitis mit Schock → <strong>Reynolds-Pentade</strong> (Charcot-Trias + Hypotonie + Bewusstseinseintrübung) → Intensivstation + Notfall-ERCP!</p></div>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Schmerzloser Ikterus</strong> = Malignom bis zum Beweis des Gegenteils (Pankreaskopf-Ca!)</li>
<li><strong>Charcot-Trias</strong> = Cholangitis → Notfall-ERCP!</li>
<li><strong>Abdomensonographie</strong> ist die erste Bildgebung (Gallenwege erweitert?)</li>
<li>Bilirubin-Differenzierung (direkt/indirekt) ist der Schlüssel zur Einordnung</li>
<li>An <strong>Morbus Gilbert</strong> denken bei isolierter indirekter Hyperbilirubinämie beim jungen Patienten (harmlos!)</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Intensivstation:</strong> Cholangitis mit Sepsis, akutes Leberversagen</li>
<li><strong>Stationär:</strong> Cholangitis, Choledocholithiasis (ERCP geplant), unklarer obstruktiver Ikterus, schwere Hepatitis</li>
<li><strong>Ambulant:</strong> Morbus Gilbert, milde Hepatitis, geplante ambulante Abklärung</li>
</ul>`
}
],
        stand: "12/24",
        sources: `Roche SP et al. Jaundice in the Adult Patient. Am Fam Physician. 2004;69(2):299-304.<br>EASL Clinical Practice Guidelines on the management of benign biliary strictures. J Hepatol. 2023;78(6):1118-1136.`
    });
})();
