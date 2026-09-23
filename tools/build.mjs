#!/usr/bin/env node
/* ============================================================
   tools/build.mjs
   ------------------------------------------------------------
   Erzeugt aus den unveraenderten SOP-Dateien (sops/) und den
   Statuten (statuten/) die Auslieferungsartefakte unter dist/:

     sop-meta.js        Metadaten + vorberechneter Suchindex
                        (klein, wird sofort geladen)
     sop-text.js        Reintext aller Abschnitte fuer die
                        Volltextsuche (vorberechnet - zur Laufzeit
                        wird kein HTML mehr zerlegt)
     sop-content-NN.js  Der Abschnitts-HTML-Code in Paketen
                        (auf Abruf und im Hintergrund nachgeladen)
     statut-content.js  Die Statuten der ZNA und der ZNA-Station
                        als eigenes Paket - gleicher Ladeweg

   Ausserdem wird die Version an genau einer Stelle gefuehrt
   (package.json) und in version.json, js/core.js, README.md und
   AGENTS.md eingetragen - damit Stand und Dokumentation nicht
   auseinanderlaufen koennen.

   Die Dateien in sops/ und statuten/ werden ausschliesslich
   GELESEN.

   Aufruf:
     node tools/build.mjs           erzeugen
     node tools/build.mjs --check   nur pruefen, nichts schreiben
                                    (Exit 1, wenn etwas veraltet ist)
   ============================================================ */

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { ROOT, loadSops, loadStatuten } from './lib/load-sops.mjs';
import { htmlToText, fold, collapse, tokenize, uniqueTokens } from './lib/text.mjs';
import { CAT_KEYS, CAT_NAMES, resolveCategory } from './lib/cats.mjs';
import { ALIASES, TOPIC_ALIASES } from './data/aliases.mjs';
import { DRUGS } from './data/drugs.mjs';
import { FIGURES } from './data/figures.mjs';
import { XREF_TERMS } from './data/xrefs.mjs';
import { STATUT_FIGURES, STATUT_ALIASES, STATUT_LINKS, ABS_INDICATIONS, STATUT_TOOLS } from './data/statuten.mjs';
import { scoresOfSop } from './lib/scores.mjs';

const CHECK_ONLY = process.argv.includes('--check');
const DIST = path.join(ROOT, 'dist');
const CHUNK_SIZE = 8;

/* Abschnitte, die beim Oeffnen einer SOP bereits offen stehen.
   Praefix-Vergleich - siehe Vorschlag 8. */
const AUTO_OPEN_PREFIXES = ['Diagnostik', 'Therapie'];

/* Woerter, die in jeder zweiten SOP stehen und deshalb nichts
   ueber Verwandtschaft aussagen (Vorschlag 28). */
const STOP = new Set(('aber alle allem allen aller alles als also auch auf aus bei beim bis '
    + 'dann das dass dem den der des die dies diese diesem diesen dieser dieses doch dort '
    + 'durch ein eine einem einen einer eines etc fuer ggf haben hat hier ihre ist kann '
    + 'kein keine mehr mit nach nicht noch nur oder sich sie sind soll sollte ueber und '
    + 'vom von vor was wenn werden wie wird zum zur bzw evtl ggfs inkl max min ca dabei '
    + 'dazu damit sowie sowohl jedoch bereits weitere weiteren weiterer moeglich moegliche '
    + 'patient patienten patientin klinik klinisch klinische klinischen therapie diagnostik '
    + 'befund befunde symptome ursachen definition merke disposition quellen station '
    + 'aufnahme ambulant stationaer indikation kontrolle gabe dosis mg ml iv po '
    + 'siehe beachte cave immer oft haeufig selten typisch ggf').split(/\s+/));

/* ============================================================
   Hilfen
   ============================================================ */

function fail(msg) {
    console.error('\n  BUILD ABGEBROCHEN: ' + msg + '\n');
    process.exit(1);
}

function readJSON(p) {
    return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function sha1(s) {
    return crypto.createHash('sha1').update(s).digest('hex').slice(0, 12);
}

/** Schreibt nur, wenn sich der Inhalt geaendert hat. Meldet, ob geschrieben wurde. */
const written = [];
const stale = [];

function emit(relPath, content) {
    const abs = path.join(ROOT, relPath);
    const prev = fs.existsSync(abs) ? fs.readFileSync(abs, 'utf8') : null;
    if (prev === content) return false;
    if (CHECK_ONLY) {
        stale.push(relPath);
        return true;
    }
    fs.mkdirSync(path.dirname(abs), { recursive: true });
    fs.writeFileSync(abs, content, 'utf8');
    written.push(relPath);
    return true;
}

/**
 * Kompaktes JSON, aber mit einer Zeile je Schluessel der obersten Ebene.
 * Die Datei bleibt damit im Diff lesbar, ohne dass Einrueckung Bytes
 * kostet - bei knapp einem Megabyte Nutzlast ist das kein Detail.
 */
function jsonLines(obj) {
    if (Array.isArray(obj)) {
        return '[\n' + obj.map(function (v) { return JSON.stringify(v); }).join(',\n') + '\n]';
    }
    const keys = Object.keys(obj);
    return '{\n' + keys.map(function (k) {
        return JSON.stringify(k) + ':' + JSON.stringify(obj[k]);
    }).join(',\n') + '\n}';
}

const BANNER = function (title, note) {
    return '/* ' + title + '\n'
        + '   ERZEUGT VON tools/build.mjs - NICHT VON HAND BEARBEITEN.\n'
        + '   Quelle: sops/*.js (unveraendert). Neu erzeugen: npm run build\n'
        + (note ? '   ' + note + '\n' : '')
        + '*/\n';
};

/* ============================================================
   1) SOPs einlesen und pruefen
   ============================================================ */

console.log('  [1/7] SOP-Dateien einlesen ...');
const { entries } = loadSops();

if (!entries.length) fail('sops/ enthaelt keine auswertbaren Dateien.');

const seenIds = Object.create(null);
const records = [];

for (const { file, sop } of entries) {
    if (!sop.id) fail('sops/' + file + ' hat keine id.');
    if (seenIds[sop.id]) {
        fail('Doppelte SOP-Kennung "' + sop.id + '" in sops/' + file
            + ' und sops/' + seenIds[sop.id] + '.');
    }
    seenIds[sop.id] = file;

    const name = sop.title || sop.name;
    if (!name) fail('sops/' + file + ' hat keinen Titel.');

    const sections = Array.isArray(sop.sections) ? sop.sections
        : (Array.isArray(sop.content) ? sop.content : []);
    if (!sections.length) fail('sops/' + file + ' hat keine Abschnitte.');

    const catKey = resolveCategory(sop.catKey || sop.category);
    if (CAT_KEYS.indexOf(catKey) === -1) {
        fail('sops/' + file + ': Kategorie "' + sop.category + '" laesst sich nicht aufloesen.');
    }

    const secs = sections.map(function (s, i) {
        const title = s.title || s.name || s.heading || ('Abschnitt ' + (i + 1));
        const html = s.html || s.content || s.body || s.text || '';
        if (!String(html).trim()) {
            fail('sops/' + file + ': Abschnitt "' + title + '" ist leer.');
        }
        return { title: String(title), html: String(html), text: htmlToText(html) };
    });

    records.push({
        file: file,
        id: String(sop.id),
        name: String(name),
        cat: catKey,
        stand: String(sop.stand || sop.date || ''),
        sections: secs,
        sourcesHtml: String(sop.sources || sop.quellen || sop.references || ''),
        sourcesText: htmlToText(sop.sources || sop.quellen || sop.references || '')
    });
}

records.sort(function (a, b) { return a.name.localeCompare(b.name, 'de'); });

const byId = Object.create(null);
records.forEach(function (r, i) { r.idx = i; byId[r.id] = r; });

console.log('        ' + records.length + ' SOPs, '
    + records.reduce(function (n, r) { return n + r.sections.length; }, 0) + ' Abschnitte.');

const missingStand = records.filter(function (r) { return !r.stand; });
if (missingStand.length) {
    console.log('        Hinweis: ohne Standangabe -> '
        + missingStand.map(function (r) { return r.id; }).join(', '));
}

/* ============================================================
   1b) Statuten einlesen und pruefen
   ------------------------------------------------------------
   Die Statuten laufen durch dieselbe Aufbereitung wie die SOPs
   (Reintext, Suchindex, Pakete), bleiben aber ein eigener
   Bestand: sie zaehlen nicht als Patientenpfad, haben keine
   Kategorie, keine Wirkstoffe und keine "verwandten Pfade".
   ============================================================ */

console.log('  [1b ] Statuten einlesen ...');
const { entries: docEntries } = loadStatuten();
const docs = [];
const docById = Object.create(null);

for (const { file, doc } of docEntries) {
    const where = 'statuten/' + file;
    if (!doc.id) fail(where + ' hat keine id.');
    if (seenIds[doc.id] || docById[doc.id]) fail('Kennung "' + doc.id + '" in ' + where + ' ist bereits vergeben.');
    if (!doc.title || !doc.short) fail(where + ' braucht title und short.');
    if (!Array.isArray(doc.sections) || !doc.sections.length) fail(where + ' hat keine Abschnitte.');

    const keys = Object.create(null);
    const secs = doc.sections.map(function (s, i) {
        if (!s.key) fail(where + ': Abschnitt ' + (i + 1) + ' hat keinen Schluessel (key).');
        if (keys[s.key]) fail(where + ': Abschnittsschluessel "' + s.key + '" doppelt.');
        keys[s.key] = 1;
        if (!s.title) fail(where + ': Abschnitt "' + s.key + '" hat keinen Titel.');
        if (!String(s.html || '').trim()) fail(where + ': Abschnitt "' + s.title + '" ist leer.');
        if (s.icon && !/^fa-[a-z0-9-]+$/.test(s.icon)) fail(where + ': Symbol "' + s.icon + '" ist ungueltig.');
        return { key: s.key, title: String(s.title), icon: s.icon || '', html: String(s.html), text: htmlToText(s.html) };
    });

    const rec = {
        file: file,
        id: String(doc.id),
        name: String(doc.title),
        short: String(doc.short),
        subtitle: String(doc.subtitle || ''),
        unit: String(doc.unit || ''),
        stand: String(doc.stand || ''),
        date: String(doc.date || ''),
        version: String(doc.version || ''),
        author: String(doc.author || ''),
        release: String(doc.release || ''),
        summary: String(doc.summary || ''),
        sections: secs
    };
    rec.secIdx = function (key) {
        return rec.sections.findIndex(function (s) { return s.key === key; });
    };
    docs.push(rec);
    docById[rec.id] = rec;
}

docs.sort(function (a, b) { return a.name.localeCompare(b.name, 'de'); });

console.log('        ' + docs.length + ' Statuten, '
    + docs.reduce(function (n, r) { return n + r.sections.length; }, 0) + ' Abschnitte.');

/* Abbildungen der Statuten: Platzhalter und Verzeichnis muessen
   genau zueinander passen - eine Abbildung ohne Platz ginge still
   verloren, ein Platz ohne Abbildung liesse eine Luecke. */
const slotRe = /data-figure-slot="([a-z0-9-]+)"/g;
const slotsSeen = Object.create(null);
for (const r of docs) {
    r.sections.forEach(function (s, i) {
        for (const m of s.html.matchAll(slotRe)) {
            const k = r.id + '/' + m[1];
            if (slotsSeen[k]) fail('statuten/' + r.file + ': Platzhalter "' + m[1] + '" doppelt.');
            slotsSeen[k] = { sec: i };
        }
    });
}
for (const fig of STATUT_FIGURES) {
    const r = docById[fig.doc];
    if (!r) fail('tools/data/statuten.mjs: Abbildung verweist auf unbekanntes Statut "' + fig.doc + '".');
    const secIdx = r.secIdx(fig.section);
    if (secIdx === -1) fail('tools/data/statuten.mjs: "' + fig.doc + '" hat keinen Abschnitt "' + fig.section + '".');
    const slot = slotsSeen[fig.doc + '/' + fig.slot];
    if (!slot) fail('tools/data/statuten.mjs: Platzhalter "' + fig.slot + '" fehlt in ' + fig.doc + '.');
    if (slot.sec !== secIdx) fail('tools/data/statuten.mjs: Platzhalter "' + fig.slot + '" steht nicht in Abschnitt "' + fig.section + '".');
    if (slot.used) fail('tools/data/statuten.mjs: Platzhalter "' + fig.slot + '" ist doppelt belegt.');
    slot.used = true;
    if (!fs.existsSync(path.join(ROOT, fig.src))) fail('tools/data/statuten.mjs: Bilddatei fehlt -> ' + fig.src);
    if (!fig.alt || !fig.caption) fail('tools/data/statuten.mjs: Abbildung "' + fig.slot + '" braucht alt und caption.');
    fig._secIdx = secIdx;
}
for (const k of Object.keys(slotsSeen)) {
    if (!slotsSeen[k].used) fail('Platzhalter ' + k + ' hat keine Abbildung in tools/data/statuten.mjs.');
}

for (const id of Object.keys(STATUT_ALIASES)) {
    if (!docById[id]) fail('STATUT_ALIASES verweist auf unbekanntes Statut "' + id + '".');
}
for (const r of docs) {
    if (!STATUT_ALIASES[r.id]) fail('STATUT_ALIASES hat keinen Eintrag fuer "' + r.id + '".');
}

/* ============================================================
   2) Kuratierte Zusatzdaten pruefen
   ============================================================ */

console.log('  [2/7] Synonyme, Wirkstoffe und Abbildungen pruefen ...');

for (const id of Object.keys(ALIASES)) {
    if (!byId[id]) fail('tools/data/aliases.mjs verweist auf unbekannte SOP "' + id + '".');
}
for (const id of records.map(function (r) { return r.id; })) {
    if (!ALIASES[id]) fail('tools/data/aliases.mjs hat keinen Eintrag fuer "' + id + '".');
}
for (const topic of Object.keys(TOPIC_ALIASES)) {
    for (const id of TOPIC_ALIASES[topic]) {
        if (!byId[id]) {
            fail('TOPIC_ALIASES["' + topic + '"] verweist auf unbekannte SOP "' + id + '".');
        }
    }
}

for (const fig of FIGURES) {
    const rec = byId[fig.sop];
    if (!rec) fail('tools/data/figures.mjs verweist auf unbekannte SOP "' + fig.sop + '".');
    const secIdx = rec.sections.findIndex(function (s) { return s.title === fig.section; });
    if (secIdx === -1) {
        fail('tools/data/figures.mjs: SOP "' + fig.sop + '" hat keinen Abschnitt "'
            + fig.section + '". Vorhanden: ' + rec.sections.map(function (s) { return s.title; }).join(' | '));
    }
    if (!fs.existsSync(path.join(ROOT, fig.src))) {
        fail('tools/data/figures.mjs: Bilddatei fehlt -> ' + fig.src);
    }
    fig._secIdx = secIdx;
}

/* Verweise auf die Statuten: jede Wortstelle muss dort, wo sie
   verlinkt werden soll, tatsaechlich stehen. */
const statutLinks = [];
for (const link of STATUT_LINKS) {
    if (!docById[link.to]) fail('STATUT_LINKS: unbekanntes Ziel "' + link.to + '".');
    const needle = fold(link.phrase);
    if (link.in === '*') {
        const hits = records.filter(function (r) {
            const s = r.sections.find(function (x) { return x.title === link.section; });
            return s && fold(s.text).indexOf(needle) !== -1;
        });
        if (!hits.length) fail('STATUT_LINKS: "' + link.phrase + '" steht in keinem Abschnitt "' + link.section + '".');
        console.log('        Verweis "' + link.phrase + '" -> ' + link.to + ' in ' + hits.length + ' SOPs.');
        statutLinks.push({ in: '*', sec: link.section, p: link.phrase, to: link.to });
    } else {
        const r = docById[link.in];
        if (!r) fail('STATUT_LINKS: unbekanntes Statut "' + link.in + '".');
        const idx = r.secIdx(link.section);
        if (idx === -1) fail('STATUT_LINKS: "' + link.in + '" hat keinen Abschnitt "' + link.section + '".');
        if (fold(r.sections[idx].text).indexOf(needle) === -1) {
            fail('STATUT_LINKS: "' + link.phrase + '" steht nicht in ' + link.in + '/' + link.section + '.');
        }
        statutLinks.push({ in: link.in, sec: idx, p: link.phrase, to: link.to });
    }
}

const absDoc = docById['statut-abs'];
const absIndications = [];
if (ABS_INDICATIONS.length) {
    if (!absDoc) fail('ABS_INDICATIONS: Statut "statut-abs" fehlt.');
    const secIdx = absDoc.secIdx('indikationen');
    if (secIdx === -1) fail('ABS_INDICATIONS: Statut ABS hat keinen Abschnitt "indikationen".');
    const hay = fold(absDoc.sections[secIdx].text);
    for (const ind of ABS_INDICATIONS) {
        if (hay.indexOf(fold(ind.text)) === -1) fail('ABS_INDICATIONS: "' + ind.text + '" steht nicht woertlich im Statut ABS.');
        for (const id of ind.sops) {
            if (!byId[id]) fail('ABS_INDICATIONS: unbekannte SOP "' + id + '".');
        }
        absIndications.push({ t: ind.text, s: ind.sops });
    }
}

const statutTools = STATUT_TOOLS.map(function (t) {
    const r = docById[t.doc];
    if (!r) fail('STATUT_TOOLS: unbekanntes Statut "' + t.doc + '".');
    const idx = r.secIdx(t.section);
    if (idx === -1) fail('STATUT_TOOLS: "' + t.doc + '" hat keinen Abschnitt "' + t.section + '".');
    return { doc: t.doc, sec: idx, label: t.label, hint: t.hint, icon: t.icon };
});

/* ============================================================
   3) Wirkstoff-Verzeichnis (Vorschlag 23)
   ============================================================ */

console.log('  [3/7] Wirkstoff-Verzeichnis aufbauen ...');

const foldedCorpus = records.map(function (r) {
    return ' ' + fold(r.sections.map(function (s) { return s.text; }).join(' ')) + ' ';
});

const drugIndex = [];
for (const entry of DRUGS) {
    const display = entry[0];
    const variants = entry.map(function (v) { return fold(v); })
        .filter(function (v, i, a) { return v && a.indexOf(v) === i; });
    const hits = [];
    for (let i = 0; i < records.length; i++) {
        const hay = foldedCorpus[i];
        const found = variants.some(function (v) {
            return hay.indexOf(' ' + v + ' ') !== -1
                || hay.indexOf(' ' + v) !== -1 && new RegExp('(^| )' + v.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '($| )').test(hay);
        });
        if (found) hits.push(records[i].id);
    }
    if (hits.length) drugIndex.push({ n: display, v: variants, s: hits });
}
drugIndex.sort(function (a, b) { return a.n.localeCompare(b.n, 'de'); });
console.log('        ' + drugIndex.length + ' von ' + DRUGS.length + ' Wirkstoffen im Bestand gefunden.');

/* ============================================================
   3b) Score-Rechner aus den vorhandenen Tabellen (Vorschlag 32)
   ------------------------------------------------------------
   Kriterien und Punktwerte stammen ausnahmslos aus der Tabelle
   der jeweiligen SOP. Erfunden wird nichts - die Anwendung macht
   daraus zur Laufzeit lediglich eine anklickbare Fassung
   derselben Tabelle mit laufender Summe.
   ============================================================ */

console.log('  [3b ] Score-Rechner aus SOP-Tabellen ableiten ...');

const scoreIndex = [];
records.forEach(function (r) {
    for (const s of scoresOfSop(r.sections)) {
        scoreIndex.push(Object.assign({ sop: r.id }, s));
    }
});

console.log('        ' + scoreIndex.length + ' Rechner: '
    + scoreIndex.map(function (s) {
        return s.sop + '/' + s.sec + ' (' + s.kind + ', max ' + s.max + ')';
    }).join(', '));

/* Sicherheitsnetz: ein Rechner ohne obere Grenze oder ohne
   Entscheidungen waere ein Bedienfehler in Serie. */
for (const s of scoreIndex) {
    const decisions = s.kind === 'sum' ? s.items.length : s.groups.length;
    if (!(s.max > 0) || decisions < 3) {
        fail('Score in ' + s.sop + ' (Abschnitt ' + s.sec + ') ist nicht auswertbar.');
    }
}

/* ============================================================
   4) Verwandte Pfade (Vorschlag 28)
   ============================================================ */

console.log('  [4/7] Verwandte Pfade berechnen ...');

const df = Object.create(null);
const docTokens = records.map(function (r) {
    const text = r.sections.map(function (s) { return s.title + ' ' + s.text; }).join(' ');
    const counts = Object.create(null);
    for (const t of tokenize(text)) {
        if (STOP.has(t) || t.length < 4) continue;
        counts[t] = (counts[t] || 0) + 1;
    }
    for (const t of Object.keys(counts)) df[t] = (df[t] || 0) + 1;
    return counts;
});

const N = records.length;
const vectors = docTokens.map(function (counts) {
    const v = Object.create(null);
    let norm = 0;
    for (const t of Object.keys(counts)) {
        if (df[t] > N * 0.55) continue;          // zu haeufig -> nichtssagend
        const w = (1 + Math.log(counts[t])) * Math.log(N / df[t]);
        v[t] = w;
        norm += w * w;
    }
    norm = Math.sqrt(norm) || 1;
    for (const t of Object.keys(v)) v[t] /= norm;
    return v;
});

/* Themenverwandtschaft aus der kuratierten Tabelle verstaerkt das Ergebnis. */
const topicMates = Object.create(null);
for (const topic of Object.keys(TOPIC_ALIASES)) {
    const ids = TOPIC_ALIASES[topic];
    for (const a of ids) {
        topicMates[a] = topicMates[a] || Object.create(null);
        for (const b of ids) if (a !== b) topicMates[a][b] = (topicMates[a][b] || 0) + 1;
    }
}

records.forEach(function (r, i) {
    const scored = [];
    for (let j = 0; j < records.length; j++) {
        if (i === j) continue;
        let sim = 0;
        const a = vectors[i], b = vectors[j];
        const keys = Object.keys(a);
        for (let k = 0; k < keys.length; k++) {
            if (b[keys[k]]) sim += a[keys[k]] * b[keys[k]];
        }
        if (records[j].cat === r.cat) sim += 0.06;
        const mate = topicMates[r.id] && topicMates[r.id][records[j].id];
        if (mate) sim += 0.18 * mate;
        scored.push({ id: records[j].id, sim: sim });
    }
    scored.sort(function (x, y) {
        if (y.sim !== x.sim) return y.sim - x.sim;
        return x.id.localeCompare(y.id, 'de');
    });
    r.related = scored.slice(0, 4)
        .filter(function (s) { return s.sim > 0.045; })
        .map(function (s) { return s.id; });
});

/* ============================================================
   5) Querverweis-Kandidaten (Vorschlag 27)
   ============================================================ */

console.log('  [5/7] Querverweise bestimmen ...');

/* Begriffe, unter denen ein Dokument im Fliesstext eines anderen
   erkannt wird: der Name (ohne Klammerzusatz, ohne fuehrendes
   "Akute/Akuter/Akutes") plus die kuratierten Begriffe aus
   tools/data/xrefs.mjs. Synonyme aus aliases.mjs werden NICHT
   verwendet - dort stehen auch Laborwerte und Massnahmen, die im
   Fliesstext keine Verweise sind. */
const allDocs = records.concat(docs);
const docIndex = Object.create(null);
allDocs.forEach(function (r) { docIndex[r.id] = r; });

for (const id of Object.keys(XREF_TERMS)) {
    if (!docIndex[id]) fail('tools/data/xrefs.mjs verweist auf unbekannte Kennung "' + id + '".');
}

const termOwner = Object.create(null);
const xterms = Object.create(null);
allDocs.forEach(function (r) {
    const list = [];
    const add = function (term, from) {
        const f = fold(term);
        if (!f || f.length < 4) {
            if (from === 'kuratiert') fail('tools/data/xrefs.mjs: "' + term + '" ist kuerzer als vier Zeichen.');
            return;
        }
        if (termOwner[f] && termOwner[f] !== r.id) {
            fail('Querverweis-Begriff "' + term + '" zeigt auf "' + termOwner[f] + '" und "' + r.id + '".');
        }
        termOwner[f] = r.id;
        if (list.indexOf(f) === -1) list.push(f);
    };
    if (!r.short) {
        const base = r.name.replace(/\s*\([^)]*\)\s*$/, '').trim();
        add(base, 'name');
        add(base.replace(/^Akut(e|er|es)\s+/i, ''), 'name');
    }
    for (const t of (XREF_TERMS[r.id] || [])) add(t, 'kuratiert');
    list.sort(function (a, b) { return b.length - a.length; });
    xterms[r.id] = list;
});

/* Fuer jedes Dokument: welche anderen kommen in seinem Text als
   ganzes Wort vor? Nur diese Begriffe sucht die Laufzeit im DOM. */
const unusedTerms = new Set(Object.keys(termOwner));
allDocs.forEach(function (r) {
    const hay = ' ' + fold(r.sections.map(function (s) { return s.text; }).join(' ')) + ' ';
    const hits = [];
    for (const other of allDocs) {
        if (other.id === r.id) continue;
        let found = false;
        for (const f of xterms[other.id]) {
            if (hay.indexOf(' ' + f + ' ') !== -1) { found = true; unusedTerms.delete(f); }
        }
        if (found) hits.push(other.id);
    }
    r.xref = hits;
});

/* Rueckverweise: wer nennt dieses Dokument? */
allDocs.forEach(function (r) { r.back = []; });
allDocs.forEach(function (r) {
    for (const id of r.xref) docIndex[id].back.push(r.id);
});

const xrefCount = allDocs.reduce(function (n, r) { return n + r.xref.length; }, 0);
console.log('        ' + xrefCount + ' Querverweise zwischen ' + allDocs.length + ' Dokumenten, Median '
    + (function () {
        const v = records.map(function (r) { return r.xref.length; }).sort(function (a, b) { return a - b; });
        return v[Math.floor(v.length / 2)];
    })() + ' je SOP.');
const orphans = records.filter(function (r) { return !r.back.length; }).map(function (r) { return r.id; });
if (orphans.length) console.log('        Ohne Rueckverweis: ' + orphans.join(', '));

/* ============================================================
   6) Artefakte erzeugen
   ============================================================ */

console.log('  [6/7] Artefakte schreiben ...');

const pkg = readJSON(path.join(ROOT, 'package.json'));
const VERSION = pkg.version;
if (!/^\d+\.\d+\.\d+$/.test(VERSION)) fail('package.json: "version" ist keine gueltige Fassung.');

/* ---------- Pakete bilden ---------- */
/* Gleichmaessig aufteilen statt "Rest in den letzten Eimer": ein
   10-KB-Restpaket neben neun 100-KB-Paketen waere eine unnoetige
   Anfrage, und das Vorladen im Hintergrund wuerde ungleich takten. */
const chunkCount = Math.max(1, Math.round(records.length / CHUNK_SIZE));
const chunks = [];
{
    const base = Math.floor(records.length / chunkCount);
    const rest = records.length % chunkCount;
    let at = 0;
    for (let i = 0; i < chunkCount; i++) {
        const size = base + (i < rest ? 1 : 0);
        chunks.push(records.slice(at, at + size));
        at += size;
    }
}
chunks.forEach(function (list, ci) {
    list.forEach(function (r) { r.chunk = ci; });
});

const chunkName = function (ci) {
    return 'sop-content-' + String(ci + 1).padStart(2, '0') + '.js';
};

/* Die Statuten bekommen ein eigenes Paket hinter den SOP-Paketen.
   Es laeuft ueber denselben Ladeweg (App.loadChunk) und wird wie
   diese im Hintergrund vorgeladen. */
const DOC_CHUNK = chunks.length;
const DOC_CHUNK_FILE = 'statut-content.js';
docs.forEach(function (r) { r.chunk = DOC_CHUNK; });

/* ---------- dist/sop-meta.js ---------- */
const meta = {
    version: VERSION,
    built: '',   // wird unten aus version.json/Pruefsumme gesetzt
    chunkSize: CHUNK_SIZE,
    chunks: chunks.map(function (_, ci) { return 'dist/' + chunkName(ci); })
        .concat(docs.length ? ['dist/' + DOC_CHUNK_FILE] : []),
    categories: CAT_NAMES,
    autoOpen: AUTO_OPEN_PREFIXES,
    topics: TOPIC_ALIASES,
    drugs: drugIndex,
    scores: scoreIndex,
    figures: FIGURES.map(function (f) {
        return { sop: f.sop, sec: f._secIdx, src: f.src, alt: f.alt, caption: f.caption };
    }).concat(STATUT_FIGURES.map(function (f) {
        return { sop: f.doc, sec: f._secIdx, slot: f.slot, src: f.src, alt: f.alt, caption: f.caption };
    })),
    xterms: xterms,
    statutLinks: statutLinks,
    absIndications: absIndications,
    statutTools: statutTools,
    docs: docs.map(function (r) {
        return {
            id: r.id,
            n: r.name,
            s: r.short,
            sub: r.subtitle,
            u: r.unit,
            d: r.stand,
            dt: r.date,
            v: r.version,
            au: r.author,
            rl: r.release,
            sm: r.summary,
            k: r.chunk,
            t: r.sections.map(function (s) { return s.title; }),
            ks: r.sections.map(function (s) { return s.key; }),
            ic: r.sections.map(function (s) { return s.icon; }),
            a: STATUT_ALIASES[r.id] || [],
            x: r.xref,
            nf: fold(r.name),
            nc: collapse(r.name),
            af: (STATUT_ALIASES[r.id] || []).concat([r.short]).map(function (a) { return fold(a); }),
            tf: fold(r.sections.map(function (s) { return s.title; }).join(' '))
        };
    }),
    sops: records.map(function (r) {
        return {
            id: r.id,
            n: r.name,
            c: r.cat,
            d: r.stand,
            k: r.chunk,
            t: r.sections.map(function (s) { return s.title; }),
            q: r.sourcesHtml ? 1 : 0,
            a: ALIASES[r.id] || [],
            x: r.xref,
            r: r.related,
            /* vorberechnete Normalform - die Laufzeit faltet nichts mehr */
            nf: fold(r.name),
            nc: collapse(r.name),
            af: (ALIASES[r.id] || []).map(function (a) { return fold(a); }),
            tf: fold(r.sections.map(function (s) { return s.title; }).join(' '))
        };
    })
};

/* Reintext-Nutzlast - wird fuer die Pruefsumme schon hier gebraucht. */
const textPayload = {};
records.forEach(function (r) {
    textPayload[r.id] = {
        s: r.sections.map(function (s) { return s.text; }),
        q: r.sourcesText
    };
});
docs.forEach(function (r) {
    textPayload[r.id] = { s: r.sections.map(function (s) { return s.text; }), q: '' };
});

/* Der Build muss idempotent sein: zweimal hintereinander aufgerufen,
   darf er nichts mehr schreiben. Sonst meldet "--check" jeden Lauf als
   veraltet, nur weil ein Zeitstempel weitergelaufen ist - und wird
   damit wertlos.

   Deshalb haengen Zeitstempel und Erzeugungsdatum an einer Pruefsumme
   ueber die tatsaechliche Nutzlast. Sie wandern nur, wenn sich am
   Inhalt etwas geaendert hat. */
const payloadHash = sha1([
    VERSION,
    jsonLines(meta),
    JSON.stringify(textPayload),
    chunks.map(function (list) {
        return list.map(function (r) { return r.id + ':' + r.sections.length; }).join(',');
    }).join('|'),
    JSON.stringify(docs.map(function (r) { return r.sections.map(function (s) { return s.html; }); }))
].join('\u0000'));

let stamp = new Date().toISOString().replace(/\.\d+Z$/, 'Z');
const versionPath = path.join(ROOT, 'version.json');

if (fs.existsSync(versionPath)) {
    try {
        const prev = readJSON(versionPath);
        if (prev.hash === payloadHash && prev.lastUpdated) stamp = prev.lastUpdated;
    } catch (e) { /* unlesbar - dann eben neu stempeln */ }
}

const buildDate = stamp.slice(0, 10);


/* Das Erzeugungsdatum gehoert in die Metadaten - aber erst,
   nachdem die Pruefsumme darueber gebildet wurde. */
meta.built = buildDate;

/* Eine Zeile je SOP: im Diff ist dann genau ablesbar, was sich
   geaendert hat, ohne dass Einrueckung Bytes kostet. */
const metaHead = {};
for (const k of Object.keys(meta)) if (k !== 'sops' && k !== 'docs') metaHead[k] = meta[k];

emit('dist/sop-meta.js',
    BANNER('dist/sop-meta.js - Metadaten und vorberechneter Suchindex',
        'Enthaelt KEINE SOP-Inhalte, nur Titel, Kategorien und Suchhilfen.')
    + 'window.SOP_META = '
    + jsonLines(metaHead).replace(/\n\}$/, ',\n"docs":' + jsonLines(meta.docs)
        + ',\n"sops":' + jsonLines(meta.sops) + '\n}')
    + ';\n');

/* ---------- dist/sop-text.js ---------- */
emit('dist/sop-text.js',
    BANNER('dist/sop-text.js - Reintext aller Abschnitte (Volltextsuche)',
        'Vorberechnet: zur Laufzeit wird kein SOP-HTML mehr zerlegt (Vorschlag 48).')
    + '(function(){\n'
    + 'var T = ' + jsonLines(textPayload) + ';\n'
    /* eine Zeile je SOP - siehe oben */
    + 'if (window.SOPApp && window.SOPApp.acceptText) window.SOPApp.acceptText(T);\n'
    + 'else window.__SOP_TEXT__ = T;\n'
    + '})();\n');

/* ---------- dist/sop-content-NN.js ---------- */
chunks.forEach(function (list, ci) {
    const payload = {};
    list.forEach(function (r) {
        payload[r.id] = {
            s: r.sections.map(function (s) { return s.html; }),
            q: r.sourcesHtml
        };
    });
    emit('dist/' + chunkName(ci),
        BANNER('dist/' + chunkName(ci) + ' - Abschnittsinhalte '
            + (ci + 1) + '/' + chunks.length,
            'Wortlaut und HTML stammen unveraendert aus sops/.')
        + '(function(){\n'
        + 'var C = ' + JSON.stringify(payload) + ';\n'
        + 'if (window.SOPApp && window.SOPApp.acceptContent) window.SOPApp.acceptContent(C, ' + ci + ');\n'
        + 'else (window.__SOP_CONTENT__ = window.__SOP_CONTENT__ || []).push([C, ' + ci + ']);\n'
        + '})();\n');
});

/* ---------- dist/statut-content.js ---------- */
if (docs.length) {
    const payload = {};
    docs.forEach(function (r) {
        payload[r.id] = { s: r.sections.map(function (s) { return s.html; }), q: '' };
    });
    emit('dist/' + DOC_CHUNK_FILE,
        BANNER('dist/' + DOC_CHUNK_FILE + ' - Statuten der ZNA und der ZNA-Station',
            'Wortlaut und HTML stammen unveraendert aus statuten/.').replace('Quelle: sops/*.js', 'Quelle: statuten/*.js')
        + '(function(){\n'
        + 'var C = ' + JSON.stringify(payload) + ';\n'
        + 'if (window.SOPApp && window.SOPApp.acceptContent) window.SOPApp.acceptContent(C, ' + DOC_CHUNK + ');\n'
        + 'else (window.__SOP_CONTENT__ = window.__SOP_CONTENT__ || []).push([C, ' + DOC_CHUNK + ']);\n'
        + '})();\n');
}

/* ============================================================
   7) Version an einer Stelle fuehren (Vorschlag 56)
   ============================================================ */

console.log('  [7/7] Version und Dokumentation gleichziehen ...');

const bytes = function (rel) {
    const p = path.join(ROOT, rel);
    return fs.existsSync(p) ? fs.statSync(p).size : 0;
};

const metaBytes = Buffer.byteLength(fs.existsSync(path.join(DIST, 'sop-meta.js'))
    ? fs.readFileSync(path.join(DIST, 'sop-meta.js'), 'utf8') : '', 'utf8');

emit('version.json', JSON.stringify({
    version: VERSION,
    lastUpdated: stamp,
    hash: payloadHash,
    sops: records.length,
    sections: records.reduce(function (n, r) { return n + r.sections.length; }, 0),
    statuten: docs.length,
    changelog: pkg.changelog || ''
}, null, 4) + '\n');

/* js/core.js: App.VERSION nachziehen */
const corePath = path.join(ROOT, 'js', 'core.js');
let coreSrc = fs.readFileSync(corePath, 'utf8');
const coreNext = coreSrc.replace(/App\.VERSION = '[^']*';/, "App.VERSION = '" + VERSION + "';");
if (coreNext === coreSrc && coreSrc.indexOf("App.VERSION = '" + VERSION + "'") === -1) {
    fail('js/core.js: die Zeile "App.VERSION = ..." wurde nicht gefunden.');
}
emit('js/core.js', coreNext);

/* Markierte Bloecke in README.md und AGENTS.md */
const statLines = [
    '| Kennzahl | Wert |',
    '| --- | --- |',
    '| Fassung | `' + VERSION + '` |',
    '| Patientenpfade | ' + records.length + ' |',
    '| Abschnitte | ' + records.reduce(function (n, r) { return n + r.sections.length; }, 0) + ' |',
    '| Eigene Synonyme | ' + Object.keys(ALIASES).reduce(function (n, k) { return n + ALIASES[k].length; }, 0) + ' |',
    '| Leitsymptom-Gruppen | ' + Object.keys(TOPIC_ALIASES).length + ' |',
    '| Indizierte Wirkstoffe | ' + drugIndex.length + ' |',
    '| Statuten | ' + docs.length + ' (' + docs.reduce(function (n, r) { return n + r.sections.length; }, 0) + ' Abschnitte) |',
    '| Abbildungen | ' + (FIGURES.length + STATUT_FIGURES.length) + ' (' + FIGURES.length + ' in SOPs, ' + STATUT_FIGURES.length + ' in Statuten) |',
    '| Score-Rechner | ' + scoreIndex.length + ' |',
    '| Startlast (`dist/sop-meta.js`) | ' + Math.round(metaBytes / 1024) + ' KB |',
    '| Inhaltspakete | ' + chunks.length + ' × ~' + Math.round(
        chunks.reduce(function (n, _, ci) { return n + bytes('dist/' + chunkName(ci)); }, 0)
        / chunks.length / 1024) + ' KB |',
    '| Stand der Erzeugung | ' + buildDate + ' |'
].join('\n');

for (const doc of ['README.md', 'AGENTS.md']) {
    const p = path.join(ROOT, doc);
    if (!fs.existsSync(p)) continue;
    const src = fs.readFileSync(p, 'utf8');
    const re = /(<!-- BUILD:STATS -->)[\s\S]*?(<!-- \/BUILD:STATS -->)/;
    if (!re.test(src)) {
        console.log('        Hinweis: ' + doc + ' hat keinen BUILD:STATS-Block - uebersprungen.');
        continue;
    }
    emit(doc, src.replace(re, '$1\n' + statLines + '\n$2'));
}

/* ============================================================
   Abschluss
   ============================================================ */

/* Spiegelprobe: steht in css/tokens.css noch genau die Palette,
   die tools/palette.mjs als kontrastgeprueft ausrechnet? */
(function assertPaletteMirror() {
    const tokensPath = path.join(ROOT, 'css', 'tokens.css');
    if (!fs.existsSync(tokensPath)) return;
    const css = fs.readFileSync(tokensPath, 'utf8');
    const computed = execFileSync(process.execPath,
        [path.join(ROOT, 'tools', 'palette.mjs'), '--css'], { encoding: 'utf8' });
    const drift = [];
    for (const [, prop, value] of computed.matchAll(/(--cat-[a-z-]+):\s*(#[0-9a-f]{6});/g)) {
        /* Jeder Wert muss in tokens.css vorkommen - hell wie dunkel. */
        if (css.indexOf(prop + ': ' + value + ';') === -1) drift.push(prop + ' -> ' + value);
    }
    if (drift.length) {
        fail('css/tokens.css und tools/palette.mjs sind auseinandergelaufen:\n    '
            + drift.slice(0, 12).join('\n    ')
            + (drift.length > 12 ? '\n    ... (' + drift.length + ' insgesamt)' : '')
            + '\n\n  Neu einsetzen: node tools/palette.mjs --css');
    }
})();

/* Spiegelprobe: stimmen die Kategorien in js/core.js noch mit
   tools/lib/cats.mjs ueberein? */
(function assertCategoryMirror() {
    const src = fs.readFileSync(corePath, 'utf8');
    for (const k of CAT_KEYS) {
        const re = new RegExp("'" + k + "'\\s*:\\s*\\{\\s*name:\\s*'" + CAT_NAMES[k].replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + "'");
        if (!re.test(src)) {
            fail('js/core.js und tools/lib/cats.mjs sind nicht mehr deckungsgleich: "'
                + k + '" / "' + CAT_NAMES[k] + '".');
        }
    }
})();

if (CHECK_ONLY) {
    if (stale.length) {
        console.error('\n  Diese Artefakte sind nicht mehr aktuell:\n    - '
            + stale.join('\n    - ') + '\n\n  Bitte "npm run build" ausfuehren.\n');
        process.exit(1);
    }
    console.log('\n  Alle Artefakte sind aktuell.\n');
    process.exit(0);
}

const totalContent = chunks.reduce(function (n, _, ci) { return n + bytes('dist/' + chunkName(ci)); }, 0);
console.log('\n  Fertig. Fassung ' + VERSION + ', Pruefsumme ' + sha1(jsonLines(meta)) + '.');
console.log('    Startlast   ' + (metaBytes / 1024).toFixed(1) + ' KB (sop-meta.js)');
console.log('    Volltext    ' + (bytes('dist/sop-text.js') / 1024).toFixed(1) + ' KB (sop-text.js)');
console.log('    Inhalte     ' + (totalContent / 1024).toFixed(1) + ' KB in ' + chunks.length + ' Paketen');
if (docs.length) console.log('    Statuten    ' + (bytes('dist/' + DOC_CHUNK_FILE) / 1024).toFixed(1) + ' KB (' + DOC_CHUNK_FILE + ')');
console.log('    Geschrieben ' + (written.length ? written.length + ' Datei(en)' : 'nichts (alles aktuell)'));
console.log('');
