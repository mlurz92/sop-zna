/* ============================================================
   tools/lib/cats.mjs
   ------------------------------------------------------------
   Spiegel der Kategorientabelle aus js/core.js. Beide Seiten
   muessen identisch bleiben - der Build prueft das am Ende
   selbst (siehe tools/build.mjs, assertCategoryMirror).
   ============================================================ */

export const CAT_KEYS = [
    'kardio', 'pulmo', 'gi', 'neuro', 'nephro', 'metab',
    'haem', 'infekt', 'tox', 'leit', 'sonst'
];

export const CAT_NAMES = {
    kardio: 'Kardiologie',
    pulmo: 'Pneumologie',
    gi: 'Gastroenterologie',
    neuro: 'Neurologie',
    nephro: 'Nephrologie',
    metab: 'Metabolisch',
    haem: 'Hämatologie',
    infekt: 'Infektiologie',
    tox: 'Toxikologie',
    leit: 'Leitsymptom',
    sonst: 'Sonstige'
};

/** Entspricht App.rc() in js/core.js. */
export function resolveCategory(value) {
    if (!value) return 'sonst';
    const s = String(value).trim();
    if (CAT_NAMES[s]) return s;
    const l = s.toLowerCase();
    for (const k of CAT_KEYS) {
        if (CAT_NAMES[k].toLowerCase() === l) return k;
    }
    for (const k of CAT_KEYS) {
        if (l.indexOf(k) !== -1 || k.indexOf(l) !== -1) return k;
    }
    return 'sonst';
}
