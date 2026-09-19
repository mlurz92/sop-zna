/* ============================================================
   tools/lib/scores.mjs
   ------------------------------------------------------------
   Erkennt die Score-Tabellen, die BEREITS in den SOPs stehen,
   und beschreibt ihre Struktur (Vorschlag 32).

   Entscheidend fuer die fachliche Sicherheit: es wird KEIN
   Kriterium und KEIN Punktwert erfunden. Beides wird aus der
   Tabelle der SOP ausgelesen. Die Anwendung macht daraus zur
   Laufzeit nur eine anklickbare Fassung derselben Tabelle mit
   laufender Summe - der Wortlaut auf dem Bildschirm ist
   weiterhin exakt der Wortlaut der SOP.

   Erkannt werden drei Bauformen:

     sum         Jede Zeile traegt einen eigenen Punktwert in der
                 letzten Spalte. Mehrfachauswahl, Summe.
                 (Wells, PERC, MASCC, CHA2DS2-VA, Gichtrechner ...)

     group-rows  Die erste Spalte fasst per rowspan mehrere Zeilen
                 zu einer Gruppe zusammen; innerhalb der Gruppe ist
                 genau eine Zeile zu waehlen.  (Glasgow Coma Scale)

     group-cols  Die Kopfzeile besteht aus Punktspalten
                 ("2 Punkte", "1 Punkt", "0 Punkte"); je Zeile ist
                 genau eine Spalte zu waehlen.  (4T-Score)

     sum-flat    Wie sum, aber der Punktwert steht nicht in einer
                 eigenen Spalte, sondern in der Kopfzeile
                 ("... = 1 Punkt pro Kategorie").  (ADD-RS)

   Alles, was sich keiner dieser Formen eindeutig zuordnen laesst,
   bleibt eine normale Tabelle. Im Zweifel lieber kein Rechner.
   ============================================================ */

import { htmlToText } from './text.mjs';

/* ------------------------------------------------------------
   Sehr kleiner, toleranter Tabellenleser. Das HTML in sops/ ist
   von Hand gepflegt, aber durchgaengig regelmaessig: <table>,
   optional <thead>, <tbody>, <tr>, <th>/<td> mit rowspan.
   ------------------------------------------------------------ */

export function findTables(html) {
    return html.match(/<table[\s\S]*?<\/table>/gi) || [];
}

/* Zeilenumbrueche in der Zelle sind bedeutungstragend: in mehreren
   Score-Tabellen stehen Auspraegung und zugehoerige Punktzahl als
   parallele, durch <br> getrennte Listen in zwei Zellen. */
const BR = '\u0001';

function cellsOf(rowHtml) {
    const out = [];
    const re = /<(t[hd])\b([^>]*)>([\s\S]*?)<\/\1>/gi;
    let m;
    while ((m = re.exec(rowHtml)) !== null) {
        const attrs = m[2] || '';
        const rowspan = /rowspan\s*=\s*"?(\d+)"?/i.exec(attrs);
        const colspan = /colspan\s*=\s*"?(\d+)"?/i.exec(attrs);
        const marked = m[3].replace(/<\s*br\s*\/?>/gi, BR);
        const text = htmlToText(marked);
        out.push({
            tag: m[1].toLowerCase(),
            text: text.split(BR).join(' ').replace(/\s+/g, ' ').trim(),
            lines: text.split(BR).map(function (s) { return s.trim(); })
                .filter(function (s) { return s.length > 0; }),
            rowspan: rowspan ? parseInt(rowspan[1], 10) : 1,
            colspan: colspan ? parseInt(colspan[1], 10) : 1
        });
    }
    return out;
}

export function parseTable(tableHtml) {
    const headHtml = (/<thead[\s\S]*?<\/thead>/i.exec(tableHtml) || [''])[0];
    const bodyHtml = (/<tbody[\s\S]*?<\/tbody>/i.exec(tableHtml) || [''])[0]
        || tableHtml.replace(headHtml, '');

    const headRows = headHtml.match(/<tr[\s\S]*?<\/tr>/gi) || [];
    const headers = headRows.length ? cellsOf(headRows[0]).map(function (c) { return c.text; }) : [];

    const bodyRows = (bodyHtml.match(/<tr[\s\S]*?<\/tr>/gi) || [])
        .map(function (r) { return cellsOf(r); })
        .filter(function (cells) { return cells.length > 0; });

    return { headers: headers, rows: bodyRows };
}

/* ------------------------------------------------------------
   Hilfen
   ------------------------------------------------------------ */

/** "2 Punkte", "1 Punkt", "0 Punkte" -> 2 / 1 / 0, sonst null. */
function headerPoints(text) {
    const m = /^\s*([+-]?\d+)\s*Punkte?\s*$/i.exec(String(text).trim());
    return m ? parseInt(m[1], 10) : null;
}

/**
 * Reiner Zahlenwert einer Zelle: "1", "+2", "-1", "0", auch mit
 * deutschem Dezimalkomma ("0,5", "2,5" - so steht es im Gichtrechner).
 */
function cellPoints(text) {
    const m = /^\s*([+-]?\d+(?:[.,]\d+)?)\s*$/.exec(String(text).trim());
    return m ? parseFloat(m[1].replace(',', '.')) : null;
}

/**
 * Eine Zelle in Wahlmoeglichkeiten zerlegen. Zwei Schreibweisen
 * kommen in den SOPs vor:
 *   - durch <br> getrennte, parallele Listen (Glasgow-Blatchford)
 *   - "a bzw. b bzw. c" in einer Zeile (MASCC)
 */
function optionSplit(cell) {
    if (cell.lines && cell.lines.length > 1) return cell.lines;
    const parts = String(cell.text).split(/\s+bzw\.\s+/i);
    if (parts.length > 1) {
        return parts.map(function (s) { return s.trim(); })
            .filter(function (s) { return s.length > 0; });
    }
    return [String(cell.text).trim()];
}

function looksLikePointsHeader(text) {
    return /punkt/i.test(String(text));
}

/** "... = 1 Punkt pro Kategorie" -> 1 */
function implicitPoints(text) {
    const m = /=\s*([+-]?\d+)\s*Punkte?\b/i.exec(String(text));
    return m ? parseInt(m[1], 10) : null;
}

function joinLabel(parts) {
    return parts.map(function (p) { return String(p).trim(); })
        .filter(Boolean).join(' · ');
}

/* ------------------------------------------------------------
   Klassifikation
   ------------------------------------------------------------ */

export function classifyTable(tableHtml) {
    const t = parseTable(tableHtml);
    const H = t.headers;
    const rows = t.rows;

    if (!H.length || rows.length < 2) return null;

    /* --- group-cols: Kopfzeile besteht aus Punktspalten --- */
    const colPoints = H.map(headerPoints);
    const pointCols = [];
    for (let i = 1; i < H.length; i++) if (colPoints[i] !== null) pointCols.push(i);

    if (pointCols.length >= 2 && pointCols.length === H.length - 1) {
        const groups = [];
        for (let ri = 0; ri < rows.length; ri++) {
            const cells = rows[ri];
            if (cells.length !== H.length) return null;
            groups.push({
                row: ri,
                label: cells[0].text,
                options: pointCols.map(function (ci) {
                    return { label: cells[ci].text, points: colPoints[ci], col: ci };
                })
            });
        }
        return {
            kind: 'group-cols',
            columns: pointCols,
            groups: groups,
            max: groups.reduce(function (n, g) {
                return n + Math.max.apply(null, g.options.map(function (o) { return o.points; }));
            }, 0)
        };
    }

    /* --- sum-flat: der Punktwert steht in der Kopfzeile, nicht in
       einer eigenen Spalte ("... = 1 Punkt pro Kategorie", ADD-RS).
       Muss VOR der Punktspalten-Pruefung stehen, weil eine solche
       Kopfzeile das Wort "Punkt" ebenfalls enthaelt. --- */
    if (H.length === 2) {
        let flat = null;
        for (const h of H) {
            const v = implicitPoints(h);
            if (v !== null) { flat = v; break; }
        }
        const lastNumeric = rows.every(function (cells) {
            return cellPoints(cells[cells.length - 1].text) !== null;
        });
        if (flat !== null && !lastNumeric) {
            const items = rows.map(function (cells, ri) {
                return {
                    row: ri,
                    label: cells[0] ? cells[0].text : '',
                    detail: cells[1] ? cells[1].text : '',
                    points: flat
                };
            });
            if (items.some(function (i) { return !i.label; })) return null;
            return {
                kind: 'sum',
                items: items,
                max: items.reduce(function (n, i) { return n + i.points; }, 0)
            };
        }
    }

    /* Ab hier muss die LETZTE Spalte die Punktspalte sein. */
    const lastIdx = H.length - 1;
    if (!looksLikePointsHeader(H[lastIdx])) return null;

    /* --- group-rows: erste Spalte fasst per rowspan zusammen --- */
    const hasRowspan = rows.some(function (cells) {
        return cells.some(function (c) { return c.rowspan > 1; });
    });

    if (hasRowspan && H.length >= 3) {
        const groups = [];
        let current = null;
        let remaining = 0;

        for (let ri = 0; ri < rows.length; ri++) {
            const cells = rows[ri];
            let cursor = 0;
            if (remaining <= 0) {
                if (!cells.length || cells.length < 2) return null;
                current = { label: cells[0].text, options: [] };
                groups.push(current);
                remaining = cells[0].rowspan;
                cursor = 1;
            }
            if (!current) return null;
            const rest = cells.slice(cursor);
            if (rest.length < 2) return null;
            const pts = cellPoints(rest[rest.length - 1].text);
            if (pts === null) return null;
            current.options.push({
                row: ri,
                label: joinLabel(rest.slice(0, -1).map(function (c) { return c.text; })),
                points: pts
            });
            remaining--;
        }

        if (groups.length < 2) return null;
        return {
            kind: 'group-rows',
            groups: groups,
            max: groups.reduce(function (n, g) {
                return n + Math.max.apply(null, g.options.map(function (o) { return o.points; }));
            }, 0)
        };
    }

    /* --- sum: je Zeile ein Punktwert, wahlweise mit mehreren
       Auspraegungen in derselben Zeile --- */
    const items = [];
    for (let ri = 0; ri < rows.length; ri++) {
        const cells = rows[ri];
        if (cells.length < 2) return null;
        if (cells.some(function (c) { return c.rowspan > 1 || c.colspan > 1; })) return null;

        const last = cells[cells.length - 1];
        const label = cells[0].text;
        if (!label) return null;

        const ptsParts = optionSplit(last);
        const ptsValues = ptsParts.map(cellPoints);
        if (ptsValues.some(function (v) { return v === null; })) return null;

        if (ptsValues.length === 1) {
            items.push({
                row: ri,
                label: label,
                detail: cells.length > 2
                    ? joinLabel(cells.slice(1, -1).map(function (c) { return c.text; }))
                    : '',
                points: ptsValues[0]
            });
            continue;
        }

        /* Mehrere Punktwerte in einer Zeile: es muss genau eine
           andere Zelle geben, die sich in gleich viele Teile
           zerlegen laesst - sonst ist die Zuordnung nicht
           eindeutig und der Rechner entfaellt. */
        let labelParts = null;
        let labelCol = -1;
        for (let ci = cells.length - 2; ci >= 0; ci--) {
            const parts = optionSplit(cells[ci]);
            if (parts.length === ptsValues.length) { labelParts = parts; labelCol = ci; break; }
        }
        if (!labelParts) return null;

        items.push({
            row: ri,
            label: label,
            optCol: labelCol,
            ptsCol: cells.length - 1,
            options: labelParts.map(function (t, i) {
                return { label: t, points: ptsValues[i] };
            })
        });
    }

    if (items.length < 3) return null;

    return {
        kind: 'sum',
        items: items,
        max: items.reduce(function (n, i) {
            if (i.options) {
                return n + Math.max.apply(null, i.options.map(function (o) {
                    return Math.max(0, o.points);
                }));
            }
            return n + Math.max(0, i.points);
        }, 0)
    };
}

/* ------------------------------------------------------------
   Deutungstext: der Absatz unmittelbar hinter der Tabelle, sofern
   er sich erkennbar auf die Auswertung bezieht. Wird woertlich
   uebernommen - die Anwendung deutet nichts selbst.
   ------------------------------------------------------------ */

export function interpretationAfter(html, tableHtml) {
    const at = html.indexOf(tableHtml);
    if (at === -1) return '';
    const tail = html.slice(at + tableHtml.length, at + tableHtml.length + 1200);
    const blocks = tail.match(/<p[\s\S]*?<\/p>/gi) || [];
    for (const b of blocks.slice(0, 2)) {
        const text = htmlToText(b);
        if (/auswertung|punkte?\b|score|interpretation|ergebnis|variiert/i.test(text)) {
            return text;
        }
    }
    return '';
}

/**
 * Alle Rechner einer SOP.
 * Rueckgabe: [{ sec, table, kind, title, max, ... , note }]
 */
export function scoresOfSop(sections) {
    const out = [];
    sections.forEach(function (sec, si) {
        const tables = findTables(sec.html);
        tables.forEach(function (tableHtml, ti) {
            const spec = classifyTable(tableHtml);
            if (!spec) return;
            /* Ein Rechner mit weniger als zwei Entscheidungen ist keiner. */
            const decisions = spec.kind === 'sum' ? spec.items.length : spec.groups.length;
            if (decisions < 3) return;
            out.push(Object.assign({
                sec: si,
                table: ti,
                title: sec.title,
                note: interpretationAfter(sec.html, tableHtml)
            }, spec));
        });
    });
    return out;
}
