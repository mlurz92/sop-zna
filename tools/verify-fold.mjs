#!/usr/bin/env node
/* ============================================================
   tools/verify-fold.mjs
   ------------------------------------------------------------
   Beweist, dass die Normalisierung in js/core.js und in
   tools/lib/text.mjs Zeichen fuer Zeichen dasselbe liefert.

   Warum das zaehlt: der Suchindex wird beim Build gefaltet, die
   Anfrage im Browser. Laufen beide Seiten auseinander, findet
   die Suche Dinge nicht, die der Index verspricht - und zwar
   lautlos. Genau solche Fehler sind in einem Nachschlagewerk
   am teuersten.

   Geprueft wird gegen den vollstaendigen Bestand: alle Namen,
   alle Abschnittstitel, alle Synonyme, alle Wirkstoffe und der
   gesamte Reintext der 73 SOPs.

   Aufruf: node tools/verify-fold.mjs
   ============================================================ */

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { ROOT, loadSops } from './lib/load-sops.mjs';
import { htmlToText, fold as foldRef, collapse as collapseRef } from './lib/text.mjs';
import { ALIASES } from './data/aliases.mjs';
import { DRUGS } from './data/drugs.mjs';

/* js/core.js in einer minimalen Browserattrappe ausfuehren. */
function loadCore() {
    const sandbox = {
        window: {},
        document: {
            getElementById: function () { return null; },
            createElement: function () { return { style: {}, classList: { add() {}, remove() {} } }; }
        },
        navigator: { onLine: true, vibrate: null },
        setTimeout: setTimeout,
        clearTimeout: clearTimeout
    };
    sandbox.window.innerWidth = 1280;
    sandbox.window.matchMedia = function () { return { matches: false, addEventListener() {} }; };
    sandbox.globalThis = sandbox;
    vm.createContext(sandbox);
    vm.runInContext(fs.readFileSync(path.join(ROOT, 'js', 'core.js'), 'utf8'),
        sandbox, { filename: 'js/core.js' });
    if (!sandbox.window.SOPApp || !sandbox.window.SOPApp.fold) {
        throw new Error('js/core.js stellt App.fold nicht bereit.');
    }
    return sandbox.window.SOPApp;
}

const App = loadCore();

/* ------------------------------------------------------------
   Pruefmenge einsammeln
   ------------------------------------------------------------ */
const samples = [];
const add = function (label, text) {
    if (text === undefined || text === null) return;
    const s = String(text);
    if (!s.trim()) return;
    samples.push({ label, text: s });
};

/* Handverlesene Faelle, die das Verhalten festnageln. */
const FIXTURES = [
    ['umlaut', 'Ösophageale Bolusimpaktion'],
    ['umlaut', 'Oesophageale Bolusimpaktion'],
    ['umlaut', 'Osophageale Bolusimpaktion'],
    ['umlaut', 'Hypokaliämie'],
    ['umlaut', 'Hypokaliaemie'],
    ['sz', 'Straße Maßnahme Fußpilz'],
    ['tief', 'CHA₂DS₂-VA-Score'],
    ['tief', 'SpO₂ 94 %'],
    ['hoch', 'm² und cm³'],
    ['akzent', 'Café Crème résumé naïve'],
    ['zeichen', '≥ 38,9 und < 47,9 mg/dl'],
    ['zeichen', '4-DMAP / N-Acetylcystein (ACC)'],
    ['leer', '   '],
    ['leer', '---'],
    ['gemischt', 'Piperacillin/Tazobactam 4,5 g i.v. alle 8 h'],
    ['gemischt', 'Akronym „LUCCAASS-PRO“ (Infektfokussuche)'],
    ['ligatur', 'Ævum Œuvre'],
    ['lang', 'Heparininduzierte Thrombozytopenie (HIT) II']
];
for (const [label, text] of FIXTURES) add('fixture:' + label, text);

for (const id of Object.keys(ALIASES)) {
    for (const a of ALIASES[id]) add('alias:' + id, a);
}
for (const entry of DRUGS) {
    for (const v of entry) add('drug', v);
}

const { data } = loadSops();
for (const d of data) {
    add('name:' + d.id, d.title || d.name);
    const sections = d.sections || d.content || [];
    for (const s of sections) {
        add('title:' + d.id, s.title);
        add('text:' + d.id, htmlToText(s.html || s.content || ''));
    }
    add('sources:' + d.id, htmlToText(d.sources || ''));
}

/* ------------------------------------------------------------
   Vergleichen
   ------------------------------------------------------------ */
let checked = 0;
let chars = 0;
const problems = [];

for (const { label, text } of samples) {
    checked++;
    chars += text.length;

    const a = foldRef(text);
    const b = App.fold(text);
    if (a !== b) {
        problems.push({ label, text, kind: 'fold', a, b });
        continue;
    }

    const ca = collapseRef(text);
    const cb = App.collapse(text);
    if (ca !== cb) {
        problems.push({ label, text, kind: 'collapse', a: ca, b: cb });
        continue;
    }

    /* Die Stellenzuordnung muss zur gefalteten Fassung passen -
       sonst setzt die Trefferhervorhebung <mark> an die falsche
       Stelle (Vorschlag 2). */
    const fm = App.foldMap(text);
    if (fm.f !== b || fm.map.length !== fm.f.length) {
        problems.push({ label, text, kind: 'foldMap', a: b, b: fm.f + ' / map ' + fm.map.length });
        continue;
    }
    for (let i = 0; i < fm.map.length; i++) {
        if (fm.map[i] < 0 || fm.map[i] >= text.length) {
            problems.push({ label, text, kind: 'map-range', a: String(i), b: String(fm.map[i]) });
            break;
        }
        if (i > 0 && fm.map[i] < fm.map[i - 1]) {
            problems.push({ label, text, kind: 'map-order', a: String(i), b: String(fm.map[i]) });
            break;
        }
    }
}

/* ------------------------------------------------------------
   Zusatzprobe: hebt die Hervorhebung wirklich richtig hervor?
   ------------------------------------------------------------ */
const HL_CASES = [
    ['Zielwerte & Medikamente', 'a'],
    ['Zielwerte & Medikamente', 'amp'],
    ['Ösophageale Bolusimpaktion', 'Oesophageale'],
    ['Hypokaliämie behandeln', 'hypokaliaemie'],
    ['Wells-Score < 2 Punkte', '<'],
    ['Fieber > 38 °C', '38'],
    ['Sepsis & septischer Schock', 'schock']
];

for (const [text, q] of HL_CASES) {
    const html = App.hl(text, q);
    const stripped = html.replace(/<\/?mark>/g, '')
        .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    if (stripped !== text) {
        problems.push({ label: 'hl', text: text + '  [' + q + ']', kind: 'roundtrip', a: text, b: stripped });
    }
    if (/&[a-z]+<mark>|<mark>[a-z]*;/.test(html)) {
        problems.push({ label: 'hl', text: text + '  [' + q + ']', kind: 'entity', a: '-', b: html });
    }
}

/* ------------------------------------------------------------
   Ausgabe
   ------------------------------------------------------------ */
console.log('');
if (problems.length) {
    console.error('  Normalisierung laeuft auseinander - ' + problems.length + ' Abweichung(en):\n');
    for (const p of problems.slice(0, 15)) {
        console.error('    [' + p.kind + '] ' + p.label);
        console.error('      Eingabe : ' + JSON.stringify(p.text.slice(0, 90)));
        console.error('      Build   : ' + JSON.stringify(String(p.a).slice(0, 90)));
        console.error('      Browser : ' + JSON.stringify(String(p.b).slice(0, 90)));
    }
    if (problems.length > 15) console.error('    ... und ' + (problems.length - 15) + ' weitere.');
    console.error('');
    process.exit(1);
}

console.log('  Normalisierung deckungsgleich.');
console.log('    Proben            ' + checked.toLocaleString('de-DE'));
console.log('    Zeichen geprueft  ' + chars.toLocaleString('de-DE'));
console.log('    Hervorhebung      ' + HL_CASES.length + " Faelle, keine zerrissene Entitaet");
console.log('');
