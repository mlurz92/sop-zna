#!/usr/bin/env node
/* ============================================================
   tools/visual-regress.mjs
   ------------------------------------------------------------
   Visuelle Regressionspruefung (Vorschlag 55).

   Warum: die Formatierung ist in vier Layer umgebaut worden, und
   die Anwendung laeuft auf Telefon, Tablet und Desktop in je
   zwei Themes. Von Hand ist das nicht mehr nachzuhalten. Dieses
   Werkzeug faehrt eine feste Liste von Zustaenden an, macht von
   jedem ein Bild und vergleicht es mit dem hinterlegten Stand.

   Zusaetzlich laeuft bei jedem Durchgang eine Funktionspruefung
   mit: Konsolenfehler, fehlgeschlagene Anfragen, Anzahl der
   SOPs, Score-Rechner, Querverweise, Tabellenumbau, Dienstzeiten.
   Ein Bild kann gleich aussehen und die Anwendung trotzdem kaputt
   sein - deshalb beides.

   Aufruf:
     node tools/visual-regress.mjs --update   Stand neu festlegen
     node tools/visual-regress.mjs            gegen den Stand pruefen

   Ergebnis unter  tests/visual/  (baseline/, current/, diff/).
   Der Durchgang startet den Server selbst.
   ============================================================ */

import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { createRequire } from 'node:module';
import { ROOT } from './lib/load-sops.mjs';

const require = createRequire(import.meta.url);

let chromium;
try {
    ({ chromium } = require('playwright'));
} catch (err) {
    console.error('\n  Playwright fehlt. Einmalig:  npm i -D playwright\n');
    process.exit(2);
}

const UPDATE = process.argv.includes('--update');

/* Bilder und Funktionspruefung laufen hinter der Zugangssperre -
   die Sperre selbst wird eigens geprueft. */
const UNLOCK = () => { try { sessionStorage.setItem('sop-gate', '1'); } catch (e) {} };
const PORT = 8123;

const OUT = path.join(ROOT, 'tests', 'visual');
const BASELINE = path.join(OUT, 'baseline');
const CURRENT = path.join(OUT, 'current');
const DIFF = path.join(OUT, 'diff');

/* Abweichung je Bildpunkt, ab der sie zaehlt (0-255 je Kanal).
   Toleriert Schrift-Antialiasing, nicht aber Layoutwechsel. */
const PIXEL_TOLERANCE = 26;
/* Anteil abweichender Bildpunkte, ab dem der Durchgang faellt. */
const FAIL_RATIO = 0.004;

/* ------------------------------------------------------------
   Kleiner statischer Server - keine Abhaengigkeit noetig.
   ------------------------------------------------------------ */
const MIME = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.mjs': 'text/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.woff2': 'font/woff2',
    '.svg': 'image/svg+xml'
};

function serve() {
    return new Promise(function (resolve) {
        const server = http.createServer(function (req, res) {
            const url = decodeURIComponent((req.url || '/').split('?')[0]);
            const rel = url === '/' ? 'index.html' : url.replace(/^\/+/, '');
            const file = path.join(ROOT, rel);

            if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
                res.writeHead(404);
                res.end('not found');
                return;
            }

            res.writeHead(200, {
                'Content-Type': MIME[path.extname(file)] || 'application/octet-stream',
                'Cache-Control': 'no-store'
            });
            fs.createReadStream(file).pipe(res);
        });
        server.listen(PORT, '127.0.0.1', function () { resolve(server); });
    });
}

/* ------------------------------------------------------------
   Bildvergleich (PNG, ohne Fremdbibliothek)
   ------------------------------------------------------------ */

/* Minimaler PNG-Leser: nur das, was Chromium schreibt
   (8 Bit, RGBA bzw. RGB, kein Interlacing). */
import zlib from 'node:zlib';

function readPNG(buffer) {
    let pos = 8;
    let width = 0, height = 0, colorType = 6, bitDepth = 8;
    const idat = [];

    while (pos < buffer.length) {
        const len = buffer.readUInt32BE(pos);
        const type = buffer.toString('ascii', pos + 4, pos + 8);
        const data = buffer.subarray(pos + 8, pos + 8 + len);

        if (type === 'IHDR') {
            width = data.readUInt32BE(0);
            height = data.readUInt32BE(4);
            bitDepth = data[8];
            colorType = data[9];
            if (data[12] !== 0) throw new Error('Interlaced PNG wird nicht unterstuetzt.');
        } else if (type === 'IDAT') {
            idat.push(data);
        } else if (type === 'IEND') {
            break;
        }

        pos += 12 + len;
    }

    if (bitDepth !== 8) throw new Error('Nur 8 Bit je Kanal.');

    const channels = colorType === 6 ? 4 : (colorType === 2 ? 3 : 0);
    if (!channels) throw new Error('Unerwarteter PNG-Farbtyp: ' + colorType);

    const raw = zlib.inflateSync(Buffer.concat(idat));
    const stride = width * channels;
    const out = Buffer.alloc(height * stride);
    let prev = Buffer.alloc(stride);
    let at = 0;

    for (let y = 0; y < height; y++) {
        const filter = raw[at++];
        const line = raw.subarray(at, at + stride);
        at += stride;
        const cur = Buffer.alloc(stride);

        for (let x = 0; x < stride; x++) {
            const a = x >= channels ? cur[x - channels] : 0;
            const b = prev[x];
            const c = x >= channels ? prev[x - channels] : 0;
            let v = line[x];

            if (filter === 1) v += a;
            else if (filter === 2) v += b;
            else if (filter === 3) v += (a + b) >> 1;
            else if (filter === 4) {
                const p = a + b - c;
                const pa = Math.abs(p - a), pb = Math.abs(p - b), pc = Math.abs(p - c);
                v += (pa <= pb && pa <= pc) ? a : (pb <= pc ? b : c);
            }

            cur[x] = v & 0xff;
        }

        cur.copy(out, y * stride);
        prev = cur;
    }

    return { width: width, height: height, channels: channels, data: out };
}

function writePNG(width, height, rgba) {
    const stride = width * 4;
    const raw = Buffer.alloc((stride + 1) * height);
    for (let y = 0; y < height; y++) {
        raw[y * (stride + 1)] = 0;
        rgba.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride);
    }

    const chunk = function (type, data) {
        const len = Buffer.alloc(4);
        len.writeUInt32BE(data.length);
        const body = Buffer.concat([Buffer.from(type, 'ascii'), data]);
        const crc = Buffer.alloc(4);
        crc.writeUInt32BE(crc32(body) >>> 0);
        return Buffer.concat([len, body, crc]);
    };

    const ihdr = Buffer.alloc(13);
    ihdr.writeUInt32BE(width, 0);
    ihdr.writeUInt32BE(height, 4);
    ihdr[8] = 8; ihdr[9] = 6; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;

    return Buffer.concat([
        Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
        chunk('IHDR', ihdr),
        chunk('IDAT', zlib.deflateSync(raw, { level: 6 })),
        chunk('IEND', Buffer.alloc(0))
    ]);
}

let CRC_TABLE = null;
function crc32(buf) {
    if (!CRC_TABLE) {
        CRC_TABLE = new Int32Array(256);
        for (let n = 0; n < 256; n++) {
            let c = n;
            for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
            CRC_TABLE[n] = c;
        }
    }
    let c = -1;
    for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
    return c ^ -1;
}

function compare(aBuf, bBuf) {
    const a = readPNG(aBuf);
    const b = readPNG(bBuf);

    if (a.width !== b.width || a.height !== b.height) {
        return {
            ok: false,
            reason: 'Groesse ' + a.width + 'x' + a.height + ' gegen ' + b.width + 'x' + b.height,
            ratio: 1,
            diff: null
        };
    }

    const px = a.width * a.height;
    const diff = Buffer.alloc(px * 4);
    let changed = 0;

    for (let i = 0; i < px; i++) {
        const ai = i * a.channels;
        const bi = i * b.channels;
        const dr = Math.abs(a.data[ai] - b.data[bi]);
        const dg = Math.abs(a.data[ai + 1] - b.data[bi + 1]);
        const db = Math.abs(a.data[ai + 2] - b.data[bi + 2]);
        const worst = Math.max(dr, dg, db);

        const o = i * 4;
        if (worst > PIXEL_TOLERANCE) {
            changed++;
            diff[o] = 255; diff[o + 1] = 0; diff[o + 2] = 0; diff[o + 3] = 255;
        } else {
            // Unveraenderte Bereiche blass, damit die Abweichung auffaellt
            const grey = Math.round((a.data[ai] + a.data[ai + 1] + a.data[ai + 2]) / 3);
            const pale = Math.round(255 - (255 - grey) * 0.25);
            diff[o] = pale; diff[o + 1] = pale; diff[o + 2] = pale; diff[o + 3] = 255;
        }
    }

    const ratio = changed / px;
    return {
        ok: ratio <= FAIL_RATIO,
        reason: (ratio * 100).toFixed(3) + ' % der Bildpunkte abweichend',
        ratio: ratio,
        diff: writePNG(a.width, a.height, diff)
    };
}

/* ------------------------------------------------------------
   Zustaende, die abgefahren werden
   ------------------------------------------------------------ */

const VIEWPORTS = [
    { name: 'telefon', width: 390, height: 844, mobile: true },
    { name: 'tablet', width: 834, height: 1112, mobile: true },
    { name: 'desktop', width: 1440, height: 900, mobile: false }
];

const SCENES = [
    {
        name: 'start',
        go: async function (page) { await page.evaluate(() => window.SOPApp.goHome()); }
    },
    {
        name: 'uebersicht',
        go: async function (page) {
            await page.evaluate(() => { window.SOPApp.S.catB = 'all'; window.SOPApp.sTab('browse', null); });
        }
    },
    {
        name: 'sop-tabellen',
        go: async function (page) {
            await page.evaluate(() => window.SOPApp.pushNav('lungenarterienembolie'));
        }
    },
    {
        name: 'sop-dispo',
        go: async function (page) {
            await page.evaluate(() => window.SOPApp.pushNav('sepsis'));
            await page.evaluate(() => {
                var secs = document.querySelectorAll('.sop-section');
                for (var i = 0; i < secs.length; i++) window.SOPApp.setSectionOpen(secs[i], true, false);
            });
        }
    },
    {
        name: 'score-gcs',
        go: async function (page) {
            await page.evaluate(() => window.SOPApp.pushNav('unklare-vigilanzminderung'));
            await page.evaluate(() => {
                // Der Rechner steckt im Abschnitt "Glasgow Coma Scale",
                // der beim Oeffnen zugeklappt ist - erst aufklappen,
                // sonst zeigt das Bild nur die Kopfzeile.
                var secs = document.querySelectorAll('.sop-section');
                for (var i = 0; i < secs.length; i++) {
                    var t = secs[i].querySelector('.sec-title');
                    window.SOPApp.setSectionOpen(secs[i],
                        !!(t && /Glasgow/.test(t.textContent)), false);
                }
            });
            await page.evaluate(() => {
                var rows = document.querySelectorAll('[data-score-row]');
                if (rows[0]) rows[0].click();
                if (rows[5]) rows[5].click();
                if (rows[10]) rows[10].click();
                /* Feste Scrollposition statt scrollIntoView: letzteres
                   richtet sich nach dem Zustand des Layouts im Moment
                   des Aufrufs und landet je nach Timing um wenige
                   Pixel anders - das hat den Bildvergleich gelegentlich
                   falschen Alarm schlagen lassen. */
                var el = document.querySelector('.score-panel');
                var scroller = document.getElementById('contentScroll');
                if (el && scroller) scroller.scrollTop = Math.max(0, el.offsetTop - 320);
            });
        }
    },
    {
        name: 'suche-wirkstoff',
        go: async function (page) {
            await page.evaluate(() => {
                window.SOPApp.S.sQ = 'noradrenalin';
                window.SOPApp.S.scope = 'all';
                window.SOPApp.sTab('search', null);
            });
        }
    },
    {
        name: 'telefonverzeichnis',
        go: async function (page) {
            await page.evaluate(() => window.SOPApp.openDir());
        }
    },
    {
        // Der Zustand, den man am haeufigsten sieht: die Schnellsuche
        // unmittelbar nach dem Oeffnen, ohne Eingabe.
        name: 'schnellsuche',
        go: async function (page) {
            // Die Szenen laufen nacheinander auf DERSELBEN Seite - das
            // Telefonverzeichnis davor steht sonst noch offen und liegt
            // ueber der Schnellsuche.
            await page.evaluate(() => window.SOPApp.closeDir());
            await page.waitForTimeout(400);
            await page.evaluate(() => { window.SOPApp.goHome(); window.SOPApp.openSpotlight(); });
        }
    }
];

const THEMES = ['light', 'dark'];

/* ------------------------------------------------------------
   Durchgang
   ------------------------------------------------------------ */

function ensure(dir) {
    fs.mkdirSync(dir, { recursive: true });
}

async function settle(page) {
    await page.evaluate(() => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r))));
    await page.waitForTimeout(140);
}

const problems = [];
const checks = [];

function check(label, ok, detail) {
    checks.push({ label: label, ok: ok, detail: detail });
    if (!ok) problems.push('Funktionspruefung: ' + label + (detail ? ' - ' + detail : ''));
}

async function run() {
    ensure(BASELINE); ensure(CURRENT); ensure(DIFF);

    const server = await serve();
    const browser = await chromium.launch();
    const results = [];

    try {
        /* ---------- Funktionspruefung (einmal, Desktop) ---------- */
        /* ---------- Zugangssperre ---------- */
        const gp = await browser.newPage({ viewport: { width: 390, height: 844 } });
        await gp.goto('http://127.0.0.1:' + PORT + '/index.html', { waitUntil: 'networkidle' });
        const gLocked = await gp.evaluate(() => ({
            locked: document.documentElement.classList.contains('gate-locked'),
            visible: getComputedStyle(document.getElementById('gate')).display !== 'none',
            inert: document.getElementById('printSheet').hasAttribute('inert')
        }));
        check('Sperre beim ersten Oeffnen', gLocked.locked && gLocked.visible && gLocked.inert, JSON.stringify(gLocked));
        await gp.keyboard.press('/');
        check('Keine Tastenkuerzel hinter der Sperre',
            !(await gp.evaluate(() => document.getElementById('spotlightOverlay').classList.contains('show'))));
        await gp.fill('#gateInput', 'falsch');
        await gp.press('#gateInput', 'Enter');
        const gWrong = await gp.evaluate(() => ({
            locked: document.documentElement.classList.contains('gate-locked'),
            msg: document.getElementById('gateError').textContent
        }));
        check('Falsches Passwort abgewiesen', gWrong.locked && gWrong.msg.length > 0, JSON.stringify(gWrong));
        await gp.fill('#gateInput', 'stgeorg');
        await gp.check('#gateRemember');
        await gp.press('#gateInput', 'Enter');
        const gOpen = await gp.evaluate(() => ({
            locked: document.documentElement.classList.contains('gate-locked'),
            gone: !document.getElementById('gate'),
            inert: document.getElementById('printSheet').hasAttribute('inert'),
            days: (parseInt(localStorage.getItem('sop-gate-until'), 10) - Date.now()) / 864e5
        }));
        check('Richtiges Passwort entsperrt', !gOpen.locked && gOpen.gone && !gOpen.inert, JSON.stringify(gOpen));
        check('Haken merkt 30 Tage', gOpen.days > 29.9 && gOpen.days <= 30, gOpen.days.toFixed(2) + ' Tage');
        await gp.evaluate(() => sessionStorage.clear());
        await gp.reload({ waitUntil: 'networkidle' });
        check('Gemerkt: keine erneute Abfrage',
            !(await gp.evaluate(() => document.documentElement.classList.contains('gate-locked'))));
        await gp.evaluate(() => { localStorage.setItem('sop-gate-until', String(Date.now() - 1000)); sessionStorage.clear(); });
        await gp.reload({ waitUntil: 'networkidle' });
        check('Abgelaufen: Sperre wieder aktiv',
            await gp.evaluate(() => document.documentElement.classList.contains('gate-locked')));
        await gp.close();

        const probe = await browser.newPage({ viewport: { width: 1440, height: 900 } });
        await probe.addInitScript(UNLOCK);
        const consoleErrors = [];
        const failedRequests = [];
        probe.on('console', m => { if (m.type() === 'error') consoleErrors.push(m.text()); });
        probe.on('pageerror', e => consoleErrors.push(String(e.message)));
        probe.on('requestfailed', r => failedRequests.push(r.url()));

        await probe.goto('http://127.0.0.1:' + PORT + '/index.html', { waitUntil: 'networkidle' });
        await probe.waitForFunction(() => window.SOPApp && window.SOPApp.S.textReady, null, { timeout: 15000 });

        const base = await probe.evaluate(() => ({
            sops: window.SOPApp.S.data.length,
            scores: window.SOPApp.META.scores.length,
            drugs: window.SOPApp.META.drugs.length,
            figures: window.SOPApp.META.figures.length,
            version: window.SOPApp.VERSION
        }));

        check('73 Patientenpfade geladen', base.sops === 73, base.sops + ' gefunden');
        check('Score-Rechner vorhanden', base.scores === 11, base.scores + ' erkannt');
        check('Wirkstoffverzeichnis gefuellt', base.drugs > 100, base.drugs + ' Wirkstoffe');
        check('Abbildungen zugeordnet', base.figures === 2, base.figures + ' Abbildungen');

        await probe.evaluate(() => window.SOPApp.pushNav('lungenarterienembolie'));
        await probe.waitForTimeout(700);

        const sop = await probe.evaluate(() => {
            const t = document.querySelector('.sop-title');
            const b = document.querySelector('.sop-tools');
            const rt = t ? t.getBoundingClientRect() : null;
            const rb = b ? b.getBoundingClientRect() : null;
            return {
                open: Array.from(document.querySelectorAll('.sop-section.is-open .sec-title')).map(e => e.textContent),
                scorePanels: document.querySelectorAll('.score-panel').length,
                xrefs: document.querySelectorAll('.sop-xref').length,
                related: document.querySelectorAll('.related-card').length,
                hiddenBodies: document.querySelectorAll('.sop-section-body[hidden]').length,
                ariaOk: Array.from(document.querySelectorAll('.sop-section')).every(s => {
                    const open = s.classList.contains('is-open');
                    const head = s.querySelector('.sop-section-head');
                    return head && head.getAttribute('aria-expanded') === String(open);
                }),
                toolsBeside: rt && rb ? (rb.left >= rt.right - 1 &&
                    Math.abs((rt.top + rt.height / 2) - (rb.top + rb.height / 2)) < rt.height) : false
            };
        });

        check('Diagnostik und Therapie offen (Praefix)',
            sop.open.some(t => t.indexOf('Diagnostik') === 0) && sop.open.some(t => t.indexOf('Therapie') === 0),
            sop.open.join(' / '));
        check('Score-Rechner aufgebaut', sop.scorePanels === 2, sop.scorePanels + ' Rechner');
        check('Querverweise gesetzt', sop.xrefs > 0, sop.xrefs + ' Verweise');
        check('Verwandte Pfade angeboten', sop.related === 4, sop.related + ' Karten');
        check('Geschlossene Abschnitte sind hidden', sop.hiddenBodies > 0, sop.hiddenBodies);
        check('aria-expanded stimmt mit Zustand ueberein', sop.ariaOk);
        check('Inhalt und Drucken neben der Ueberschrift', sop.toolsBeside);

        const scoreRun = await probe.evaluate(() => {
            const rows = document.querySelectorAll('[data-score-row]');
            if (rows.length < 2) return null;
            rows[0].click(); rows[1].click();
            const two = document.querySelector('.score-total-value').textContent;
            document.querySelector('.score-reset').click();
            const zero = document.querySelector('.score-total-value').textContent;
            return { two: two, zero: zero };
        });
        check('Score zaehlt und laesst sich zuruecksetzen',
            scoreRun && scoreRun.two === '2' && scoreRun.zero === '0',
            scoreRun ? JSON.stringify(scoreRun) : 'kein Rechner');

        /* Zeilenzuordnung des Gruppenrechners.
           Sie war schon einmal um eine Zeile verschoben, weil der
           Druckbogen die Anwendung in ein <tbody> huellt und
           element.querySelectorAll('tbody tr') daraufhin auch die
           Kopfzeile traf. Ein um eine Zeile verschobener Punktwert
           ist in einem klinischen Nachschlagewerk kein Schoenheits-
           fehler - deshalb wird die Zuordnung ausdruecklich geprueft. */
        await probe.evaluate(() => window.SOPApp.pushNav('unklare-vigilanzminderung'));
        await probe.waitForTimeout(700);

        const gcs = await probe.evaluate(() => {
            const rows = document.querySelectorAll('[data-score-row]');
            const text = i => (rows[i].textContent || '').replace(/\s+/g, ' ').trim();
            // Augen 4, Verbal 5, Motorik 6 = 15 Zeilen
            rows[0].click();          // Augen: Spontan (4)
            rows[4].click();          // Verbal: Konversationsfaehig, orientiert (5)
            rows[9].click();          // Motorik: Befolgt Anforderungen (6)
            const total = document.querySelector('.score-total-value').textContent;
            const max = document.querySelector('.score-total-max').textContent;
            document.querySelector('.score-reset').click();
            return { n: rows.length, total: total, max: max, first: text(0), last: text(14) };
        });

        check('Glasgow Coma Scale: 15 Wahlzeilen', gcs.n === 15, gcs.n + ' Zeilen');
        check('Glasgow Coma Scale: keine Kopfzeile in der Auswahl',
            gcs.first.indexOf('Kriterium') !== 0, gcs.first);
        check('Glasgow Coma Scale: Bestwert ergibt 15 von 15',
            gcs.total === '15' && gcs.max.replace(/\s/g, '') === '/15',
            gcs.total + ' ' + gcs.max);

        await probe.evaluate(() => window.SOPApp.pushNav('lungenarterienembolie'));
        await probe.waitForTimeout(600);

        const queries = await probe.evaluate(() => {
            const q = s => window.SOPApp.query(s, { text: false }).sops[0];
            const first = s => { const r = q(s); return r ? r.sop.id : null; };
            return {
                lae: first('LAE'),
                hit: first('HIT'),
                oeso: first('Oesophageale Bolusimpaktion'),
                typo: first('Pankretitis'),
                umlaut: first('Hypokaliaemie'),
                drug: window.SOPApp.query('Rasburicase').drugs.length
            };
        });
        check('Abkuerzung LAE', queries.lae === 'lungenarterienembolie', queries.lae);
        check('Abkuerzung HIT', queries.hit === 'heparininduzierte-thrombozytopenie', queries.hit);
        check('Umlautschreibweise Oe', queries.oeso === 'oesophageale-bolusimpaktion', queries.oeso);
        check('Tippfehlertoleranz', queries.typo === 'akute-pankreatitis', queries.typo);
        check('Umlautschreibweise ae', queries.umlaut === 'hypokaliaemie', queries.umlaut);
        check('Wirkstoffsuche', queries.drug > 0, queries.drug + ' Treffer');

        /* Tabellen im Kartenmodus (Telefonbreite) */
        await probe.setViewportSize({ width: 390, height: 844 });
        await probe.waitForTimeout(400);
        const cards = await probe.evaluate(() => ({
            asCards: document.querySelectorAll('.table-wrap.as-cards').length,
            scoreTables: document.querySelectorAll('.table-wrap:not(.as-cards) table.is-score').length,
            labelled: document.querySelectorAll('td[data-label]').length
        }));
        check('Tabellen werden auf dem Telefon zu Karten', cards.asCards > 0, JSON.stringify(cards));
        check('Score-Tabellen bleiben Tabellen', cards.scoreTables > 0, JSON.stringify(cards));
        check('Spaltenkoepfe als data-label gesetzt', cards.labelled > 0, cards.labelled);

        /* Dienstzeiten */
        await probe.setViewportSize({ width: 1440, height: 900 });
        await probe.evaluate(() => window.SOPApp.openDir());
        await probe.waitForTimeout(300);
        const dir = await probe.evaluate(() => ({
            rows: document.querySelectorAll('.dir-row').length,
            shifts: document.querySelectorAll('.dir-shift').length
        }));
        check('Telefonverzeichnis vollstaendig', dir.rows === 56, dir.rows + ' Zeilen');
        check('Dienstzeiten erkannt', dir.shifts === 9, dir.shifts + ' Kennzeichnungen');

        /* Schnellsuche: Leerzustand, Beispiele, Uebernahme */
        await probe.evaluate(() => window.SOPApp.closeDir());
        await probe.waitForTimeout(300);
        await probe.evaluate(() => window.SOPApp.openSpotlight());
        await probe.waitForTimeout(300);

        const spotEmpty = await probe.evaluate(() => ({
            intro: !!document.querySelector('.spotlight-intro'),
            chips: document.querySelectorAll('.spotlight-chip').length,
            role: document.getElementById('spotlightResults').getAttribute('role'),
            // Die Tafel muss waagerecht mittig stehen - der Fehler, der
            // sie an den linken Rand geklebt hat, war von aussen nur am
            // Abstand zu erkennen.
            centered: (function () {
                var c = document.getElementById('spotlightContainer').getBoundingClientRect();
                return Math.abs((c.left) - (window.innerWidth - c.right)) <= 2;
            })()
        }));
        check('Schnellsuche zeigt Einstiege statt Leere',
            spotEmpty.intro && spotEmpty.chips === 3, JSON.stringify(spotEmpty));
        check('Schnellsuche steht mittig', spotEmpty.centered, JSON.stringify(spotEmpty));
        check('Leerer Zustand ist kein Listenfeld', spotEmpty.role === null, String(spotEmpty.role));

        // Jedes Beispiel muss auch etwas finden - ein Vorschlag, der ins
        // Leere fuehrt, waere schlimmer als gar keiner.
        const spotHits = await probe.evaluate(() => {
            var out = [];
            var chips = document.querySelectorAll('.spotlight-chip');
            for (var i = 0; i < chips.length; i++) {
                var q = chips[i].getAttribute('data-example');
                var r = window.SOPApp.query(q, { text: false, fuzzy: true, limit: 8 });
                out.push({ q: q, n: r.sops.length + r.drugs.length });
            }
            return out;
        });
        check('Alle drei Beispiele finden etwas',
            spotHits.length === 3 && spotHits.every(h => h.n > 0), JSON.stringify(spotHits));

        const spotTaken = await probe.evaluate(() => {
            document.querySelector('.spotlight-chip').click();
            return {
                value: document.getElementById('spotlightInput').value,
                results: document.querySelectorAll('.spotlight-result').length,
                role: document.getElementById('spotlightResults').getAttribute('role')
            };
        });
        check('Beispiel wird in das Feld uebernommen',
            spotTaken.value === 'LAE' && spotTaken.results > 1 && spotTaken.role === 'listbox',
            JSON.stringify(spotTaken));

        check('Kein "Strg K" mehr im Suchfeld',
            await probe.evaluate(() => !document.querySelector('.hero-search-kbd')
                && !/Strg/.test(document.querySelector('.hero-search') ? document.querySelector('.hero-search').textContent : '')),
            'Hero-Suchfeld');

        await probe.evaluate(() => window.SOPApp.closeSpotlight());
        await probe.waitForTimeout(300);

        check('Keine Konsolenfehler', consoleErrors.length === 0, consoleErrors.slice(0, 3).join(' | '));
        check('Keine fehlgeschlagenen Anfragen', failedRequests.length === 0, failedRequests.slice(0, 3).join(' | '));

        await probe.close();

        /* ---------- Bilder ---------- */
        for (const vp of VIEWPORTS) {
            for (const theme of THEMES) {
                const page = await browser.newPage({
                    viewport: { width: vp.width, height: vp.height },
                    deviceScaleFactor: 1,
                    hasTouch: vp.mobile,
                    isMobile: vp.mobile,
                    reducedMotion: 'reduce',
                    colorScheme: theme
                });

                await page.addInitScript(UNLOCK);
                await page.goto('http://127.0.0.1:' + PORT + '/index.html', { waitUntil: 'networkidle' });
                await page.waitForFunction(() => window.SOPApp && window.SOPApp.S.data.length > 0,
                    null, { timeout: 15000 });
                await page.evaluate(t => {
                    window.SOPApp.S.theme = t;
                    window.SOPApp.applyTheme();
                }, theme);
                // Inhalte vollstaendig, damit kein Platzhalter im Bild landet
                await page.evaluate(() => window.SOPApp.prefetchAll());
                await page.waitForFunction(() => window.SOPApp.S.data.every(d => d.sections),
                    null, { timeout: 20000 });

                for (const scene of SCENES) {
                    await scene.go(page);
                    await settle(page);

                    const name = scene.name + '--' + vp.name + '--' + theme + '.png';
                    const shot = await page.screenshot({ fullPage: false });

                    const basePath = path.join(BASELINE, name);
                    fs.writeFileSync(path.join(CURRENT, name), shot);

                    if (UPDATE || !fs.existsSync(basePath)) {
                        fs.writeFileSync(basePath, shot);
                        results.push({ name: name, status: UPDATE ? 'neu festgelegt' : 'angelegt' });
                        continue;
                    }

                    const cmp = compare(fs.readFileSync(basePath), shot);
                    if (cmp.ok) {
                        results.push({ name: name, status: 'unveraendert', detail: cmp.reason });
                    } else {
                        if (cmp.diff) fs.writeFileSync(path.join(DIFF, name), cmp.diff);
                        results.push({ name: name, status: 'ABWEICHUNG', detail: cmp.reason });
                        problems.push('Bild: ' + name + ' - ' + cmp.reason);
                    }
                }

                await page.close();
            }
        }
    } finally {
        await browser.close();
        server.close();
    }

    /* ---------- Bericht ---------- */
    console.log('');
    console.log('  FUNKTIONSPRUEFUNG');
    for (const c of checks) {
        console.log('    ' + (c.ok ? '  ok  ' : ' FEHLT') + '  ' + c.label
            + (c.detail && !c.ok ? '   (' + c.detail + ')' : ''));
    }

    console.log('');
    console.log('  BILDVERGLEICH  (' + VIEWPORTS.length + ' Breiten x ' + THEMES.length
        + ' Themes x ' + SCENES.length + ' Zustaende = ' + results.length + ')');

    const grouped = {};
    for (const r of results) grouped[r.status] = (grouped[r.status] || 0) + 1;
    for (const k of Object.keys(grouped)) console.log('    ' + String(grouped[k]).padStart(3) + '  ' + k);

    for (const r of results) {
        if (r.status === 'ABWEICHUNG') console.log('    -> ' + r.name + '   ' + r.detail);
    }

    console.log('');
    if (problems.length) {
        console.error('  ' + problems.length + ' Beanstandung(en). Bilder: tests/visual/diff/\n');
        process.exit(1);
    }
    console.log('  Alles unveraendert und funktionsfaehig.\n');
}

run().catch(function (err) {
    console.error('\n  Durchgang abgebrochen: ' + err.message + '\n' + (err.stack || ''));
    process.exit(1);
});
