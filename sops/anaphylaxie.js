// SOP: Anaphylaxie
// Kategorie: Sonstige
(function() {
    if (!window.SOP_DATA) window.SOP_DATA = [];
    window.SOP_DATA.push({
        id: "anaphylaxie",
        title: "Anaphylaxie",
        category: "Sonstige",
        catKey: "sonst",
        sections: [
{
title: "Definition",
html: `<ul>
<li><strong>Anaphylaxie:</strong> Schwere, systemische, potenziell lebensbedrohliche Überempfindlichkeitsreaktion vom Typ I (IgE-vermittelt) oder nicht-IgE-vermittelt (anaphylaktoid), die rasch fortschreitet und mehrere Organsysteme betreffen kann</li>
</ul>`
},
{
title: "Auslöser",
html: `<ul>
<li><strong>Medikamente:</strong> β-Laktam-Antibiotika (Penicilline, Cephalosporine), NSAID, Muskelrelaxantien, Kontrastmittel, Latex</li>
<li><strong>Insektengifte:</strong> Bienen, Wespen, Hornissen</li>
<li><strong>Nahrungsmittel:</strong> Nüsse (Erdnuss, Haselnuss), Schalentiere, Fisch, Milch, Ei, Weizen, Soja</li>
<li><strong>Andere:</strong> Impfstoffe, Blutprodukte, Seminalflüssigkeit, Kälte/Wärme, körperliche Anstrengung</li>
<li><strong>Idiopathisch</strong> (kein Auslöser identifizierbar)</li>
</ul>`
},
{
title: "Symptome",
html: `<h3>Graduierung nach Ring & Messmer</h3>
<ul>
<li><strong>Grad I:</strong> Haut, Schleimhaut
<ul>
<li>Pruritus, Flush, Urtikaria, Quincke-Ödem, Konjunktivitis, Rhinitis</li>
</ul>
</li>
<li><strong>Grad II:</strong> Haut, Schleimhaut + gastrointestinale + respiratorische Symptome
<ul>
<li>Haut: wie Grad I</li>
<li>GI: Übelkeit, Erbrechen, Bauchschmerzen, Stuhldrang</li>
<li>Respiratorisch: Dyspnoe, Stridor, Giemen</li>
<li>Kardiovaskulär: Tachykardie (↑20%), Hypotonie (↓20 mmHg), Arrhythmie</li>
</ul>
</li>
<li><strong>Grad III:</strong> Schock, Bewusstlosigkeit
<ul>
<li>Schock, Bewusstlosigkeit, Spastik der Bronchien, Larynxödem, Herzrhythmusstörungen</li>
</ul>
</li>
<li><strong>Grad IV:</strong> Herz-Kreislauf-Stillstand
<ul>
<li>Atem- und/oder Herzstillstand</li>
</ul>
</li>
</ul>`
},
{
title: "Diagnostik",
html: `<h3>Klinische Diagnostik (Notfall!)</h3>
<ul>
<li><strong>Ersteindruck + ABCDE</strong></li>
<li><strong>Vitalparameter:</strong> RR, Puls, SpO₂, AF, Temperatur</li>
<li><strong>Klinische Kriterien</strong> (nach WAO):
<ul>
<li>Akuter Beginn (Minuten bis Stunden) mit Beteiligung von Haut/Schleimhaut (Pruritus, Flush, Urtikaria, Angioödem) UND mindestens einem der folgenden:
<ul>
<li>Respiratorische Symptome (Dyspnoe, Stridor, Giemen, Hypoxie)</li>
<li>Kardiovaskuläre Symptome (Hypotonie, Synkope)</li>
</ul>
</li>
<li>ODER: ≥2 der folgenden Symptome nach Exposition mit wahrscheinlichem Auslöser:
<ul>
<li>Haut/Schleimhaut</li>
<li>Respiratorisch</li>
<li>Kardiovaskulär</li>
<li>GI (Krämpfe, Erbrechen)</li>
</ul>
</li>
<li>ODER: Akute Hypotonie nach Exposition mit bekanntem Auslöser</li>
</ul>
</li>
</ul>
<h3>Labor (retrospektiv)</h3>
<ul>
<li><strong>Tryptase</strong> (Peak 1–2h nach Reaktionsbeginn, Normalwert schließt Anaphylaxie nicht aus)</li>
<li><strong>Histamin</strong> (kurze Halbwertszeit, schwierig zu erfassen)</li>
</ul>`
},
{
title: "Therapie",
html: `<h3>Sofortmaßnahmen</h3>
<ul>
<li><strong>Auslöser stoppen</strong> (Infusion stoppen, Insektenstachel entfernen)</li>
<li><strong>Notruf</strong> (Reanimationsteam rufen bei Grad III/IV)</li>
<li><strong>Positionierung:</strong>
<ul>
<li>Bei Bewusstsein: Flachlagerung, Beine hoch</li>
<li>Bei Bewusstlosigkeit: stabile Seitenlage</li>
<li>Bei Dyspnoe: Oberkörper hoch</li>
</ul>
</li>
</ul>
<h3>Medikamentöse Therapie</h3>
<ul>
<li><strong>Adrenalin (Mittel der 1. Wahl!):</strong>
<ul>
<li><strong>i.m. in den lateralen Oberschenkel:</strong> 0,3–0,5 mg (0,3–0,5 ml 1:1000) bei Erwachsenen</li>
<li>Bei Kindern: 0,01 mg/kg (max. 0,3 mg)</li>
<li>Wiederholung alle 5–15 min möglich</li>
<li><strong>i.v.:</strong> nur bei Schock/Herzstillstand durch Erfahrene! 0,05–0,1 mg (0,5–1 ml 1:10.000) langsam, titriert</li>
</ul>
</li>
<li><strong>Volumengabe:</strong> Kristalloide (NaCl 0,9% oder Ringer) 500–1000 ml rasch i.v. (bei Kindern 20 ml/kg)</li>
<li><strong>Glukokortikoide:</strong> Prednisolon 250–500 mg i.v. (Wirkungseintritt erst nach 4–6h – zur Verhinderung der Spätphase!)</li>
<li><strong>Antihistaminika:</strong> Dimetinden 4–8 mg i.v. oder Clemastin 2 mg i.v. (H1-Blocker) + ggf. Ranitidin 50 mg i.v. (H2-Blocker)</li>
<li><strong>Bronchodilatatoren:</strong> Salbutamol 2,5–5 mg vernebelt bei Bronchospasmus</li>
</ul>
<h3>Therapie nach Schweregrad</h3>
<ul>
<li><strong>Grad I:</strong> Überwachung, ggf. Antihistaminika p.o.</li>
<li><strong>Grad II:</strong> Adrenalin i.m., Volumen, Glukokortikoid, Antihistaminikum, Überwachung</li>
<li><strong>Grad III:</strong> Adrenalin i.m./i.v., aggressive Volumentherapie, Glukokortikoid, Antihistaminikum, Bronchodilatator, Intubation bei Larynxödem, Katecholamine bei therapierefraktärem Schock</li>
<li><strong>Grad IV:</strong> CPR nach ERC-Leitlinien, Adrenalin i.v., Volumen</li>
</ul>
<div class="callout callout-cave"><p><strong>CAVE:</strong> Adrenalin i.v. nur durch Erfahrene und bei lebensbedrohlichen Zuständen! Risiko von Tachyarrhythmien, Hypertonie, Myokardischämie!</p></div>`
},
{
title: "Merke",
html: `<ul>
<li><strong>Adrenalin i.m. = Mittel der 1. Wahl</strong> bei Anaphylaxie Grad II–IV!</li>
<li>Adrenalin <strong>nicht zu spät</strong> geben – zögern verschlechtert die Prognose!</li>
<li><strong>Glukokortikoide und Antihistaminika sind KEINE Akutmedikamente</strong> – sie wirken erst verzögert!</li>
<li>Bei Schock: <strong>großvolumige Volumengabe</strong> (Kristalloide)</li>
<li>Immer <strong>Auslöser identifizieren und stoppen</strong></li>
<li>Überwachung mindestens 6–12h (Gefahr der biphasischen Reaktion!)</li>
</ul>`
},
{
title: "Disposition",
html: `<ul>
<li><strong>Grad I:</strong> kurze Überwachung (2–4h), Entlassung möglich mit Antihistaminikum p.o. und Instruktionen</li>
<li><strong>Grad II:</strong> Überwachung 6–12h, ggf. stationäre Aufnahme</li>
<li><strong>Grad III/IV:</strong> stationäre Aufnahme, Überwachung auf ICU, ggf. Intubation/Beatmung</li>
</ul>`
},
{
title: "Nachsorge",
html: `<ul>
<li>Allergologische Abklärung (Prick-Test, spezifisches IgE)</li>
<li><strong>Notfallset</strong> für Patienten:
<ul>
<li>Adrenalin-Autoinjektor (z.B. Emerade®, EpiPen®, Jext®)</li>
<li>Antihistaminikum (z.B. Cetirizin)</li>
<li>Glukokortikoid (z.B. Prednisolon)</li>
</ul>
</li>
<li>Schulung im Umgang mit dem Notfallset</li>
<li>Anlage eines <strong>Allergiepasses</strong></li>
</ul>`
}
],
        stand: "12/24",
        sources: `Ring J et al. Guideline for acute therapy and management of anaphylaxis. Allergy. 2014;69(1):1-25.<br>
Muraro A et al. Anaphylaxis: guidelines from the European Academy of Allergy and Clinical Immunology. Allergy. 2014;69(8):1026-45.<br>
Simons FE et al. 2015 Update: World Allergy Organization Anaphylaxis Guidelines. J Allergy Clin Immunol. 2015;135(1):e1-54.`
    });
})();
