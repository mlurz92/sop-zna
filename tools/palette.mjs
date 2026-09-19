#!/usr/bin/env node
/* ============================================================
   tools/palette.mjs
   ------------------------------------------------------------
   Waehlt die Kategoriefarben und weist nach, dass sie in BEIDEN
   Themes die Kontrastschwellen der WCAG 2.1 erfuellen
   (Vorschlag 35).

   Geprueft wird:
     Akzent (Punkt, Symbol, Kante)  >= 3.0 : 1 gegen die Flaeche
                                             (1.4.11 Nicht-Text)
     Schrift auf getoenter Flaeche  >= 4.5 : 1   (1.4.3 Text)
     Kategoriename auf Grundflaeche >= 4.5 : 1

   Gewaehlt wird je Kategorie die HELLSTE Stufe der Farbfamilie,
   die die Schwelle noch haelt - so bleibt die Farbigkeit erhalten,
   ohne die Lesbarkeit zu opfern.

   Aufruf: node tools/palette.mjs          Tabelle ausgeben
           node tools/palette.mjs --css    CSS-Block ausgeben
   ============================================================ */

/* Farbfamilien, jeweils von hell nach dunkel. */
const RAMPS = {
    red: ['#fef2f2', '#fee2e2', '#fecaca', '#fca5a5', '#f87171', '#ef4444', '#dc2626', '#b91c1c', '#991b1b', '#7f1d1d', '#450a0a'],
    blue: ['#eff6ff', '#dbeafe', '#bfdbfe', '#93c5fd', '#60a5fa', '#3b82f6', '#2563eb', '#1d4ed8', '#1e40af', '#1e3a8a', '#172554'],
    amber: ['#fffbeb', '#fef3c7', '#fde68a', '#fcd34d', '#fbbf24', '#f59e0b', '#d97706', '#b45309', '#92400e', '#78350f', '#451a03'],
    violet: ['#f5f3ff', '#ede9fe', '#ddd6fe', '#c4b5fd', '#a78bfa', '#8b5cf6', '#7c3aed', '#6d28d9', '#5b21b6', '#4c1d95', '#2e1065'],
    cyan: ['#ecfeff', '#cffafe', '#a5f3fc', '#67e8f9', '#22d3ee', '#06b6d4', '#0891b2', '#0e7490', '#155e75', '#164e63', '#083344'],
    emerald: ['#ecfdf5', '#d1fae5', '#a7f3d0', '#6ee7b7', '#34d399', '#10b981', '#059669', '#047857', '#065f46', '#064e3b', '#022c22'],
    pink: ['#fdf2f8', '#fce7f3', '#fbcfe8', '#f9a8d4', '#f472b6', '#ec4899', '#db2777', '#be185d', '#9d174d', '#831843', '#500724'],
    lime: ['#f7fee7', '#ecfccb', '#d9f99d', '#bef264', '#a3e635', '#84cc16', '#65a30d', '#4d7c0f', '#3f6212', '#365314', '#1a2e05'],
    orange: ['#fff7ed', '#ffedd5', '#fed7aa', '#fdba74', '#fb923c', '#f97316', '#ea580c', '#c2410c', '#9a3412', '#7c2d12', '#431407'],
    indigo: ['#eef2ff', '#e0e7ff', '#c7d2fe', '#a5b4fc', '#818cf8', '#6366f1', '#4f46e5', '#4338ca', '#3730a3', '#312e81', '#1e1b4b'],
    slate: ['#f8fafc', '#f1f5f9', '#e2e8f0', '#cbd5e1', '#94a3b8', '#64748b', '#475569', '#334155', '#1e293b', '#0f172a', '#020617'],
    teal: ['#f0fdfa', '#ccfbf1', '#99f6e4', '#5eead4', '#2dd4bf', '#14b8a6', '#0d9488', '#0f766e', '#115e59', '#134e4a', '#042f2e']
};

/* Kategorie -> Farbfamilie. Die Zuordnung folgt der bisherigen
   Farbigkeit, damit sich niemand umgewoehnen muss. "infekt" wechselt
   von Lime auf Teal: Lime erreicht auf Weiss keine 3:1 und war damit
   als Signalpunkt untauglich. */
const FAMILY = {
    kardio: 'red',
    pulmo: 'blue',
    gi: 'amber',
    neuro: 'violet',
    nephro: 'cyan',
    metab: 'emerald',
    haem: 'pink',
    infekt: 'teal',
    tox: 'orange',
    leit: 'indigo',
    sonst: 'slate'
};

const NAMES = {
    kardio: 'Kardiologie', pulmo: 'Pneumologie', gi: 'Gastroenterologie',
    neuro: 'Neurologie', nephro: 'Nephrologie', metab: 'Metabolisch',
    haem: 'Hämatologie', infekt: 'Infektiologie', tox: 'Toxikologie',
    leit: 'Leitsymptom', sonst: 'Sonstige'
};

/* Grundflaechen, gegen die geprueft wird (siehe css/tokens.css). */
const SURFACE_LIGHT = '#ffffff';
const SURFACE_DARK = '#1e293b';

/* ---------- Kontrastrechnung (WCAG 2.1) ---------- */

function rgb(hex) {
    const h = hex.replace('#', '');
    return [0, 2, 4].map(function (i) { return parseInt(h.substr(i, 2), 16); });
}

function channel(c) {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
}

function luminance(hex) {
    const [r, g, b] = rgb(hex);
    return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

function contrast(a, b) {
    const la = luminance(a), lb = luminance(b);
    return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

/** Mischung, um getoente Flaechen aus Rampe + Grundflaeche zu bilden. */
function mix(a, b, t) {
    const ca = rgb(a), cb = rgb(b);
    const out = ca.map(function (v, i) { return Math.round(v + (cb[i] - v) * t); });
    return '#' + out.map(function (v) { return v.toString(16).padStart(2, '0'); }).join('');
}

/**
 * Hellste Stufe (kleinster Index), die gegen `bg` die Schwelle haelt.
 * `from`/`to` grenzen den Suchbereich ein.
 */
function pick(ramp, bg, min, from, to, reverse) {
    const order = [];
    if (reverse) { for (let i = to; i >= from; i--) order.push(i); }
    else { for (let i = from; i <= to; i++) order.push(i); }
    for (const i of order) {
        if (contrast(ramp[i], bg) >= min) return { hex: ramp[i], step: i };
    }
    return { hex: ramp[reverse ? from : to], step: reverse ? from : to };
}

/* ---------- Auswahl ---------- */

const ACCENT_MIN = 3.0;   // 1.4.11 Nicht-Text-Kontrast
const TEXT_MIN = 4.5;     // 1.4.3 Text

const result = {};
const rows = [];

for (const key of Object.keys(FAMILY)) {
    const ramp = RAMPS[FAMILY[key]];

    /* Hell: Akzent moeglichst farbig, aber >= 3:1 auf Weiss. */
    const accentL = pick(ramp, SURFACE_LIGHT, ACCENT_MIN, 4, 9, false);
    /* Getoente Flaeche: Stufe 0 auf die Grundflaeche gezogen. */
    const tintL = mix(SURFACE_LIGHT, ramp[1], 0.75);
    /* Schrift darauf: >= 4.5:1. */
    const inkL = pick(ramp, tintL, TEXT_MIN, 6, 10, false);
    /* Kante: sichtbar, aber ruhig. */
    const lineL = mix(SURFACE_LIGHT, ramp[3], 0.9);

    /* Dunkel: Akzent muss auf der dunklen Flaeche >= 3:1 haben. */
    const accentD = pick(ramp, SURFACE_DARK, ACCENT_MIN, 2, 5, true);
    const tintD = mix(SURFACE_DARK, ramp[9], 0.55);
    const inkD = pick(ramp, tintD, TEXT_MIN, 0, 4, true);
    const lineD = mix(SURFACE_DARK, ramp[7], 0.6);

    result[key] = {
        light: { accent: accentL.hex, tint: tintL, ink: inkL.hex, line: lineL },
        dark: { accent: accentD.hex, tint: tintD, ink: inkD.hex, line: lineD }
    };

    rows.push({
        key: key,
        family: FAMILY[key],
        aL: accentL.hex, aLc: contrast(accentL.hex, SURFACE_LIGHT),
        iL: inkL.hex, iLc: contrast(inkL.hex, tintL),
        aD: accentD.hex, aDc: contrast(accentD.hex, SURFACE_DARK),
        iD: inkD.hex, iDc: contrast(inkD.hex, tintD)
    });
}

/* ---------- Ausgabe ---------- */

if (process.argv.includes('--css')) {
    const lines = [];
    lines.push(':root {');
    for (const key of Object.keys(result)) {
        const c = result[key].light;
        lines.push('    --cat-' + key + ': ' + c.accent + ';');
        lines.push('    --cat-' + key + '-tint: ' + c.tint + ';');
        lines.push('    --cat-' + key + '-ink: ' + c.ink + ';');
        lines.push('    --cat-' + key + '-line: ' + c.line + ';');
    }
    lines.push('}');
    lines.push('');
    lines.push('[data-theme="dark"] {');
    for (const key of Object.keys(result)) {
        const c = result[key].dark;
        lines.push('    --cat-' + key + ': ' + c.accent + ';');
        lines.push('    --cat-' + key + '-tint: ' + c.tint + ';');
        lines.push('    --cat-' + key + '-ink: ' + c.ink + ';');
        lines.push('    --cat-' + key + '-line: ' + c.line + ';');
    }
    lines.push('}');
    console.log(lines.join('\n'));
    process.exit(0);
}

console.log('');
console.log('  Kategorie        Familie   | hell: Akzent   Kontr.  Schrift  Kontr. '
    + '| dunkel: Akzent  Kontr.  Schrift  Kontr.');
console.log('  ' + '-'.repeat(122));

let worstAccent = Infinity, worstInk = Infinity;
for (const r of rows) {
    worstAccent = Math.min(worstAccent, r.aLc, r.aDc);
    worstInk = Math.min(worstInk, r.iLc, r.iDc);
    console.log('  ' + NAMES[r.key].padEnd(18) + r.family.padEnd(10)
        + '|       ' + r.aL + '  ' + r.aLc.toFixed(2).padStart(5)
        + '  ' + r.iL + '   ' + r.iLc.toFixed(2).padStart(5)
        + '  |         ' + r.aD + '  ' + r.aDc.toFixed(2).padStart(5)
        + '  ' + r.iD + '   ' + r.iDc.toFixed(2).padStart(5));
}

console.log('  ' + '-'.repeat(122));
console.log('  Schlechtester Akzentkontrast : ' + worstAccent.toFixed(2)
    + ' : 1   (Schwelle 3.00 - ' + (worstAccent >= ACCENT_MIN ? 'erfuellt' : 'VERFEHLT') + ')');
console.log('  Schlechtester Schriftkontrast: ' + worstInk.toFixed(2)
    + ' : 1   (Schwelle 4.50 - ' + (worstInk >= TEXT_MIN ? 'erfuellt' : 'VERFEHLT') + ')');
console.log('');

if (worstAccent < ACCENT_MIN || worstInk < TEXT_MIN) process.exit(1);
