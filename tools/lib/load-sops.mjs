/* ============================================================
   tools/lib/load-sops.mjs
   ------------------------------------------------------------
   Liest die unveraenderten Dateien aus sops/ ein und gibt ihre
   Datenobjekte zurueck. Die Dateien werden dafuer in einer
   abgeschotteten VM ausgefuehrt - genau so, wie der Browser es
   taete, nur ohne DOM. Es wird nichts geschrieben und nichts
   veraendert: sops/ ist und bleibt die fachliche Quelle.
   ============================================================ */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

export const ROOT = path.resolve(fileURLToPath(new URL('../../', import.meta.url)));
export const SOPS_DIR = path.join(ROOT, 'sops');

/** Alle SOP-Dateien in stabiler (alphabetischer) Dateireihenfolge. */
export function sopFiles() {
    return fs.readdirSync(SOPS_DIR)
        .filter(function (f) { return f.endsWith('.js'); })
        .sort();
}

/**
 * Fuehrt alle SOP-Dateien aus und liefert { data, files }.
 * data ist window.SOP_DATA in Ladereihenfolge.
 */
export function loadSops() {
    const files = sopFiles();
    const sandbox = { window: {} };
    sandbox.globalThis = sandbox;
    vm.createContext(sandbox);

    const perFile = [];

    for (const file of files) {
        const src = fs.readFileSync(path.join(SOPS_DIR, file), 'utf8');
        const before = sandbox.window.SOP_DATA ? sandbox.window.SOP_DATA.length : 0;
        try {
            vm.runInContext(src, sandbox, { filename: 'sops/' + file, timeout: 5000 });
        } catch (err) {
            throw new Error('sops/' + file + ' laesst sich nicht auswerten: ' + err.message);
        }
        const after = sandbox.window.SOP_DATA ? sandbox.window.SOP_DATA.length : 0;
        if (after === before) {
            throw new Error('sops/' + file + ' hat kein Datenobjekt in SOP_DATA gelegt.');
        }
        for (let i = before; i < after; i++) perFile.push({ file: file, sop: sandbox.window.SOP_DATA[i] });
    }

    return { data: sandbox.window.SOP_DATA || [], entries: perFile, files: files };
}
