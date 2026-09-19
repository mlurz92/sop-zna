/* ============================================================
   tools/lib/text.mjs
   ------------------------------------------------------------
   Textaufbereitung fuer den Build. Die hier definierte
   Normalisierung ist die VERBINDLICHE Referenz - js/core.js
   implementiert exakt dieselben Regeln fuer die Laufzeit.
   Weichen beide voneinander ab, findet die Suche Dinge nicht,
   die der Index verspricht.
   ============================================================ */

/* Benannte HTML-Entitaeten, die in den SOPs tatsaechlich vorkommen. */
const ENTITIES = {
    amp: '&', lt: '<', gt: '>', quot: '"', apos: "'",
    nbsp: ' ', shy: '', ndash: '–', mdash: '—',
    bdquo: '„', ldquo: '“', rdquo: '”', lsquo: '‘', rsquo: '’',
    hellip: '…', middot: '·', bull: '•',
    deg: '°', plusmn: '±', times: '×', divide: '÷',
    le: '≤', ge: '≥', ne: '≠', rarr: '→', larr: '←',
    uarr: '↑', darr: '↓', harr: '↔', infin: '∞',
    micro: 'µ', permil: '‰', sup2: '²', sup3: '³',
    frac12: '½', frac14: '¼', euro: '€', copy: '©',
    reg: '®', trade: '™', auml: 'ä', ouml: 'ö',
    uuml: 'ü', Auml: 'Ä', Ouml: 'Ö', Uuml: 'Ü',
    szlig: 'ß', eacute: 'é', egrave: 'è', agrave: 'à'
};

/** Entitaeten aufloesen (benannt und numerisch). */
export function decodeEntities(s) {
    return String(s).replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z][a-zA-Z0-9]*);/g, function (all, body) {
        if (body.charAt(0) === '#') {
            const hex = body.charAt(1) === 'x' || body.charAt(1) === 'X';
            const code = parseInt(hex ? body.slice(2) : body.slice(1), hex ? 16 : 10);
            if (!isFinite(code) || code < 0 || code > 0x10ffff) return all;
            try { return String.fromCodePoint(code); } catch (e) { return all; }
        }
        return Object.prototype.hasOwnProperty.call(ENTITIES, body) ? ENTITIES[body] : all;
    });
}

/**
 * HTML zu Reintext. Blockelemente erzeugen eine Wortgrenze, damit aus
 * "<li>Fieber</li><li>Schock</li>" nicht "FieberSchock" wird.
 */
export function htmlToText(html) {
    let s = String(html || '');
    s = s.replace(/<!--[\s\S]*?-->/g, ' ');
    s = s.replace(/<(script|style)\b[\s\S]*?<\/\1>/gi, ' ');
    s = s.replace(/<\s*(br|hr)\s*\/?>/gi, ' ');
    s = s.replace(/<\/?(p|div|li|ul|ol|tr|td|th|table|thead|tbody|section|article|h[1-6]|dt|dd|dl|figure|figcaption|blockquote)\b[^>]*>/gi, ' ');
    s = s.replace(/<[^>]+>/g, '');
    s = decodeEntities(s);
    s = s.replace(/[   ]/g, ' ');
    return s.replace(/\s+/g, ' ').trim();
}

/* ------------------------------------------------------------
   Normalisierung (Vorschlag 19)
   ------------------------------------------------------------
   fold()   - Umlaute werden auf den Grundbuchstaben gezogen
              (ä -> a, ö -> o, ü -> u, ß -> ss). Das ist die Form,
              in der der Index liegt.
   collapse() - zieht zusaetzlich ae/oe/ue auf a/o/u zusammen. Wird
              NUR auf die Eingabe angewandt, damit "Oesophagus" die
              indizierte Form "osophagus" trifft.
   Beide Richtungen werden bei jeder Anfrage geprueft; dadurch
   funktionieren "Ösophagus", "Oesophagus" und "Osophagus"
   gleichermassen, ohne dass der Index doppelt vorgehalten wird.
   ------------------------------------------------------------ */

/* Hoch- und tiefgestellte Ziffern zaehlen als Ziffern: "CHA₂DS₂" wird
   zu "cha2ds2" und ist damit so auffindbar, wie es getippt wird. */
const SUB_SUP = {
    '²': '2', '³': '3', '¹': '1',
    '⁰': '0', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
    '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4',
    '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9'
};

export function fold(s) {
    return String(s === undefined || s === null ? '' : s)
        .toLowerCase()
        .replace(/[²³¹⁰⁴-⁹₀-₉]/g, function (c) { return SUB_SUP[c] || ''; })
        .replace(/ß/g, 'ss')
        .replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u')
        .replace(/æ/g, 'ae').replace(/œ/g, 'oe')
        .normalize('NFD').replace(/[̀-ͯ]/g, '')
        .replace(/[‐-―−]/g, '-')
        .replace(/[^a-z0-9]+/g, ' ')
        .trim();
}

export function collapse(s) {
    return fold(s).replace(/ae/g, 'a').replace(/oe/g, 'o').replace(/ue/g, 'u');
}

/** Tokens ab drei Zeichen; Zahlen ab einem Zeichen bleiben erhalten. */
export function tokenize(s) {
    const parts = fold(s).split(' ');
    const out = [];
    for (let i = 0; i < parts.length; i++) {
        const p = parts[i];
        if (!p) continue;
        if (p.length >= 3 || /[0-9]/.test(p)) out.push(p);
    }
    return out;
}

/** Eindeutige Tokens in stabiler Reihenfolge. */
export function uniqueTokens(s) {
    const seen = Object.create(null);
    const out = [];
    const toks = tokenize(s);
    for (let i = 0; i < toks.length; i++) {
        if (seen[toks[i]]) continue;
        seen[toks[i]] = 1;
        out.push(toks[i]);
    }
    return out;
}
