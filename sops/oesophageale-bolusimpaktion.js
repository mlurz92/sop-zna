(function() {
    'use strict';

    if (!window.SOP_DATA) window.SOP_DATA = [];

    window.SOP_DATA.push({
        id: "oesophageale-bolusimpaktion",
        title: "Ösophageale Bolusimpaktion",
        category: "Gastroenterologie",
        catKey: "gi",
        date: "12/22",
        sections: [
            {
                title: "Definition",
                content: "<strong>Ösophageale Bolusimpaktion:</strong> Steckenbleiben von Nahrung in der Speiseröhre mit (in-)kompletter Verlegung des Lumens."
            },
            {
                title: "Ursachen",
                content: `<ul>
                    <li>Fleischstücke, Fischgräten, Knochen, etc.</li>
                    <li><strong>Ösophageale Pathologie (>75%):</strong> Striktur, eosinophile Ösophagitis, Malignom, Motilitätsstörung.</li>
                </ul>`
            },
            {
                title: "Symptome",
                content: `<ul>
                    <li>Fremdkörpergefühl, Schluckbeschwerden, Brustschmerzen, Würgen, Erbrechen.</li>
                    <li><strong>Hypersalivation:</strong> Unfähigkeit, den eigenen Speichel zu schlucken.</li>
                    <li>Stridor, Dyspnoe (durch Aspiration von Speichel oder Kompression der Trachea).</li>
                    <li><strong>Ggf. Komplikationen:</strong> Perforation, Mediastinitis, Abszess, Fistelbildung, etc.</li>
                </ul>`
            },
            {
                title: "Diagnostik",
                content: `<ul>
                    <li>Ersteindruck + ABCDE + Vitalparameter (RR, Puls, SpO₂, AF, Temperatur).</li>
                    <li>1x venöser Zugang.</li>
                    <li>Ggf. Labor (BB, Gerinnung).</li>
                    <li><strong>Anamnese:</strong> Symptome? Impaktionszeitpunkt? Beschaffenheit des Fremdkörpers? Vorerkrankungen der Speiseröhre? Unfähigkeit, Speichel zu schlucken?</li>
                    <li><strong>Körperliche Untersuchung:</strong> Speichelfluss? Hautemphysem als Zeichen einer Ösophagusruptur? Stridor? Pulmonale Rasselgeräusche?</li>
                    <li><strong>„Schluckversuch“:</strong> Der Patient soll einen kleinen Schluck Wasser trinken. Falls das Schlucken unmöglich ist → dringender Verdacht auf komplette Verlegung des Ösophagus (Aspirationsgefahr!).</li>
                    <li>Ggf. <strong>Röntgen-Thorax</strong> bei Verdacht auf Aspiration.</li>
                    <li>Ggf. <strong>CT-Thorax</strong> bei Verdacht auf operationsbedürftige Komplikationen (z.B. Perforation).</li>
                </ul>
                <div class="callout callout-wichtig">
                    <p>Sofortige Rücksprache mit der Gastroenterologie bei kompletter Okklusion oder spitzem/scharfkantigem Bolus!</p>
                </div>`
            },
            {
                title: "Therapie",
                content: `<h3>Endoskopische Fremdkörperentfernung</h3>
                <ul>
                    <li><strong>Sofort (&lt; 2 h bzw. &lt; max. 6 h):</strong> Bei kompletter Okklusion des Ösophagus oder spitzem/scharfkantigem Bolus.</li>
                    <li><strong>Dringlich (&lt; 24 h):</strong> Ösophagealer Bolus ohne komplette Okklusion des Ösophagus (und kein spitzer/scharfkantiger Bolus).</li>
                </ul>
                <h3>Chirurgische Intervention (selten!)</h3>
                <ul>
                    <li>Indiziert bei Komplikationen wie Perforation, Mediastinitis oder nach frustraner endoskopischer Therapie.</li>
                </ul>`
            },
            {
                title: "Merke",
                content: `<ul>
                    <li><strong>Hypersalivation</strong> und die Unfähigkeit, Flüssigkeiten zu schlucken, weisen auf eine komplette Okklusion des Ösophagus hin (hohe Aspirationsgefahr!).</li>
                    <li>Fremdkörpergefühl und Dysphagie können auch nach erfolgreichem Abgang oder Bergung des Fremdkörpers aufgrund von Schleimhautreizungen für mehrere Stunden persistieren.</li>
                </ul>`
            },
            {
                title: "Disposition",
                content: `<p>Nach komplikationsloser ÖGD (Ösophagogastroduodenoskopie) und erfolgreicher Bolusbergung:</p>
                <ul>
                    <li><strong>Ambulantes Procedere:</strong> Entlassung möglich.</li>
                </ul>
                <div class="callout callout-cave">
                    <p><strong>Fahrverbot für 24 h!</strong> Der Patient darf aufgrund der Analgosedierung während der Endoskopie für 24 Stunden nicht aktiv am Straßenverkehr teilnehmen.</p>
                </div>`
            }
        ],
        stand: "12/22",
        sources: "Birk M et al. Removal of foreign bodies in the upper gastrointestinal tract in adults: European Society of Gastrointestinal Endoscopy (ESGE) Clinical Guideline. Endoscopy 2016 May;48(5):489-96. – Ambe P et al. Swallowed foreign bodies in adults. Dtsch Arztebl Int 2012; 109(50): 869-75."
    });
})();