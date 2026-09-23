/* ============================================================
   core.js - Konfiguration, Zustand, DOM-Puffer, Suchwerk
   ------------------------------------------------------------
   Erstes Modul der Kette. Legt den gemeinsamen Namensraum
   window.SOPApp an; alle weiteren Module haengen sich daran.

   Neu in dieser Fassung:
     - Die SOP-Daten kommen aus den Artefakten unter dist/:
       Metadaten sofort, Inhalte paketweise (Vorschlag 17).
     - Ein einziges Suchwerk bedient Seitenleiste, Uebersicht,
       Schnellsuche und Volltextsuche (Vorschlag 22) - mit
       Umlauttoleranz (19), Synonymen (20), Tippfehlertoleranz
       (21) und Wirkstoffen (23).
   ============================================================ */
(function(App) {
    'use strict';

    // ---------- Version (wird von tools/build.mjs gesetzt) ----------
    App.VERSION = '4.1.0';

    // ---------- Kategorien ----------
    // Spiegel von tools/lib/cats.mjs. Der Build prueft beide Seiten
    // gegeneinander und bricht bei Abweichung ab.
    var CATS = {
        'kardio': { name: 'Kardiologie', icon: 'fa-heart-pulse' },
        'pulmo': { name: 'Pneumologie', icon: 'fa-lungs' },
        'gi': { name: 'Gastroenterologie', icon: 'fa-utensils' },
        'neuro': { name: 'Neurologie', icon: 'fa-brain' },
        'nephro': { name: 'Nephrologie', icon: 'fa-droplet' },
        'metab': { name: 'Metabolisch', icon: 'fa-flask' },
        'haem': { name: 'Hämatologie', icon: 'fa-syringe' },
        'infekt': { name: 'Infektiologie', icon: 'fa-virus' },
        'tox': { name: 'Toxikologie', icon: 'fa-skull-crossbones' },
        'leit': { name: 'Leitsymptom', icon: 'fa-stethoscope' },
        'sonst': { name: 'Sonstige', icon: 'fa-circle-info' }
    };

    // Rueckwaertssuche: Anzeigename -> Schluessel
    var CNM = {};
    (function() {
        var keys = Object.keys(CATS);
        for (var i = 0; i < keys.length; i++) {
            CNM[CATS[keys[i]].name.toLowerCase()] = keys[i];
        }
    })();

    // ---------- Symbole je Abschnittstitel ----------
    // Vorher trugen neun Titel ein eigenes Symbol, die uebrigen 76
    // bekamen einen anonymen Punkt. Jetzt entscheidet zuerst der
    // genaue Titel, danach ein Muster - damit hat jeder Abschnitt
    // ein Symbol, das etwas ueber seinen Inhalt sagt.
    var SIC = {
        'Definition': 'fa-book-open',
        'Ursachen': 'fa-magnifying-glass',
        'Symptome': 'fa-clipboard-list',
        'Diagnostik': 'fa-vials',
        'Therapie': 'fa-pills',
        'Merke': 'fa-lightbulb',
        'Disposition': 'fa-right-from-bracket',
        'Komplikationen': 'fa-triangle-exclamation',
        'Quellen': 'fa-quote-right',
        'Giftnotruf': 'fa-phone-volume',
        'Medikamentenliste': 'fa-prescription-bottle-medical',
        'Äquivalenzdosen': 'fa-scale-balanced',
        'Gichtrechner': 'fa-calculator',
        'Spezielle Umstände': 'fa-circle-exclamation',
        'Schweregrade': 'fa-layer-group',
        'Risikostratifikation': 'fa-scale-balanced'
    };

    // Muster in der Reihenfolge ihrer Genauigkeit.
    var SIC_PATTERNS = [
        [/algorithmus|vorgehen|protokoll/i, 'fa-diagram-project'],
        [/anleitung/i, 'fa-list-check'],
        [/score|rechner|kriterien|klassifikation|stadien|einteilung|grad|scale|skala|index/i, 'fa-calculator'],
        [/differen[tz]ialdiagnos|mimics|big five/i, 'fa-code-branch'],
        [/red flags|warnzeichen/i, 'fa-flag'],
        [/liquor|labor|parameter/i, 'fa-vial'],
        [/pocus|ultrasound|sonograph/i, 'fa-wave-square'],
        [/ekg/i, 'fa-heart-pulse'],
        [/medikament|dosis|dosier|substitution|antiinfekt|antibiotik|prophylaxe/i, 'fa-prescription-bottle-medical'],
        [/tabelle|zielwert|grenzwert|übersicht|uebersicht/i, 'fa-table'],
        [/zeitpunkt|zeitfenster|verlauf/i, 'fa-clock'],
        [/indikation/i, 'fa-square-check'],
        [/therapie/i, 'fa-pills'],
        [/diagnostik/i, 'fa-vials'],
        [/symptom|klinik|profil/i, 'fa-clipboard-list'],
        [/ursach|trigger/i, 'fa-magnifying-glass'],
        [/definition/i, 'fa-book-open'],
        [/disposition|aufnahme|entlass/i, 'fa-right-from-bracket'],
        [/quelle|literatur|leitlinie/i, 'fa-quote-right']
    ];

    App.secIcon = function(title) {
        if (!title) return 'fa-circle-info';
        if (SIC[title]) return SIC[title];
        for (var i = 0; i < SIC_PATTERNS.length; i++) {
            if (SIC_PATTERNS[i][0].test(title)) return SIC_PATTERNS[i][1];
        }
        return 'fa-circle-info';
    };

    App.CATS = CATS;
    App.CNM = CNM;
    App.SIC = SIC;

    // Abschnitte, die beim Oeffnen einer SOP bereits offen stehen.
    // Vorschlag 8: Praefix statt Gleichheit - sonst blieben
    // "Therapie - Allgemeinmassnahmen", "Therapie & Transfusions-
    // grenzen" und "Diagnostik & Wells-Score" zugeklappt, obwohl
    // sie genau das sind, was gesucht wird.
    var AO = ['Diagnostik', 'Therapie'];
    App.AO = AO;

    App.isAutoOpen = function(title) {
        if (!title) return false;
        for (var i = 0; i < AO.length; i++) {
            if (title.indexOf(AO[i]) === 0) return true;
        }
        return false;
    };

    // Schriftgroesse: Minimum, Maximum, Vorgabe
    App.FS = { min: 13, max: 20, def: 15 };

    // Schwellenwerte der Touch-Gesten
    App.GESTURE = {
        edgeMargin: 35,
        swipeDistance: 60,
        swipeVelocity: 0.3,
        directionLock: 8,
        segTapSlop: 10
    };

    // ---------- Anwendungszustand ----------
    App.S = {
        data: [],
        byId: {},
        tab: 'home',
        sopId: null,
        catD: 'all',
        catB: 'all',
        bQ: '',
        sQ: '',
        spotQ: '',
        hQ: '',
        scope: 'all',
        theme: 'light',
        fs: App.FS.def,
        mob: window.innerWidth < 1024,
        off: !navigator.onLine,
        ts: null,
        sCatOpen: false,
        bCatOpen: false,
        isNavigating: false,
        textReady: false,
        scrollMemory: {}
    };

    // ---------- DOM-Puffer ----------
    var E = {};
    App.E = E;

    var CACHED_IDS = [
        'app', 'mobileHeader', 'backBtn', 'mobileTitle', 'themeToggleMobile', 'themeToggleMobileIcon',
        'sidebar', 'appLogo', 'searchInput', 'searchClear', 'categoryFilters', 'navList',
        'themeToggle', 'themeToggleIcon', 'themeToggleLabel', 'mainContent', 'contentHeader',
        'breadcrumb', 'desktopTocBtn', 'contentScroll', 'viewHome', 'viewBrowse', 'viewSearch', 'viewSOP',
        'heroArea', 'catGrid', 'homeInfo', 'browseSearchInput', 'browseSearchClear',
        'browseCategoryFilters', 'browseList', 'searchViewInput', 'searchViewClear', 'searchResultsArea',
        'searchScope', 'fabAction', 'bottomNav', 'metaThemeColor', 'sectionPickerOverlay',
        'sectionPickerBackdrop', 'sectionPickerClose', 'sectionPickerList', 'sectionPickerPrint',
        'offlineBanner', 'offlineTimestamp',
        'fontDecMobile', 'fontIncMobile', 'fontIndicatorMobile',
        'fontDecDesktop', 'fontIncDesktop', 'fontIndicatorDesktop', 'pullIndicator',
        'sidebarCatToggle', 'browseCatToggle', 'viewContainer', 'toastHost',
        'readProgress', 'sectionPickerSubtitle',
        'spotlightOverlay', 'spotlightBackdrop', 'spotlightContainer', 'spotlightInput',
        'spotlightClear', 'spotlightResults', 'spotlightCancel', 'spotlightBtn',
        'pickerSheet', 'pickerHandle', 'appProgress',
        'dirBtn', 'dirBtnMobile', 'dirOverlay', 'dirBackdrop', 'dirClose',
        'dirInput', 'dirClear', 'dirBody', 'dirJump', 'dirClock',
        'printSheet', 'printHeadTitle', 'printHeadSub', 'printHeadCat',
        'printFootNote', 'printFootMeta'
    ];

    App.cache = function() {
        for (var i = 0; i < CACHED_IDS.length; i++) {
            E[CACHED_IDS[i]] = document.getElementById(CACHED_IDS[i]);
        }
    };

    // ============================================
    // TEXT: ENTSCHAERFEN UND NORMALISIEREN
    // ============================================

    App.esc = function(t) {
        return String(t === undefined || t === null ? '' : t)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    };

    App.escAttr = function(t) {
        return App.esc(t).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    };

    // ---------- Normalisierung (Vorschlag 19) ----------
    // Verbindliche Referenz: tools/lib/text.mjs. Beide Seiten muessen
    // dasselbe Ergebnis liefern, sonst findet die Suche Dinge nicht,
    // die der vorberechnete Index verspricht. tools/verify-fold.mjs
    // prueft genau das.

    var SUBSUP = {
        '²': '2', '³': '3', '¹': '1',
        '⁰': '0', '⁴': '4', '⁵': '5', '⁶': '6',
        '⁷': '7', '⁸': '8', '⁹': '9',
        '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4',
        '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9'
    };

    var UMLAUT = {
        'ä': 'a', 'ö': 'o', 'ü': 'u',
        'ß': 'ss', 'æ': 'ae', 'œ': 'oe'
    };

    var COMBINING = /[̀-ͯ]/g;

    // Ein einzelnes Zeichen falten. Rueckgabe: '' (faellt weg),
    // ' ' (Wortgrenze) oder eine Folge aus [a-z0-9].
    function foldChar(ch) {
        var low = ch.toLowerCase();

        if (SUBSUP[low] !== undefined) return SUBSUP[low];
        if (UMLAUT[low] !== undefined) return UMLAUT[low];
        if (low >= 'a' && low <= 'z') return low;
        if (low >= '0' && low <= '9') return low;

        if (low.normalize) {
            var base = low.normalize('NFD').replace(COMBINING, '');
            var acc = '';
            for (var i = 0; i < base.length; i++) {
                var c = base.charAt(i);
                if ((c >= 'a' && c <= 'z') || (c >= '0' && c <= '9')) acc += c;
            }
            if (acc) return acc;
        }

        return ' ';
    }

    /**
     * Faltet einen Text UND merkt sich, aus welcher Stelle des
     * Originals jedes gefaltete Zeichen stammt.
     *
     * Genau diese Zuordnung fehlte bisher: die Trefferhervorhebung
     * arbeitete auf bereits entschaerftem HTML und schrieb <mark>
     * mitten in Entitaeten hinein - aus "&amp;" wurde
     * "&<mark>a</mark>mp;" und damit sichtbarer Zeichensalat
     * (Vorschlag 2).
     */
    App.foldMap = function(text) {
        var src = String(text === undefined || text === null ? '' : text);
        var out = '';
        var map = [];
        var pendingSpace = false;
        var i, j, mapped;

        for (i = 0; i < src.length; i++) {
            mapped = foldChar(src.charAt(i));
            if (mapped === '') continue;
            if (mapped === ' ') {
                if (out.length) pendingSpace = true;
                continue;
            }
            if (pendingSpace) {
                out += ' ';
                map.push(i);
                pendingSpace = false;
            }
            for (j = 0; j < mapped.length; j++) {
                out += mapped.charAt(j);
                map.push(i);
            }
        }

        return { f: out, map: map, src: src };
    };

    App.fold = function(text) {
        return App.foldMap(text).f;
    };

    App.collapse = function(text) {
        return App.fold(text).replace(/ae/g, 'a').replace(/oe/g, 'o').replace(/ue/g, 'u');
    };

    // Beide Schreibrichtungen einer Anfrage. Damit trifft
    // "Oesophagus" die indizierte Form "osophagus" und umgekehrt.
    //
    // Nicht bei kurzen Anfragen: "LAE" wuerde zu "la" zusammengezogen
    // und traefe dann als Teilstring in fast jedem zweiten Wort
    // ("unklare", "Laktulose", "palliativ"). Die Zusammenziehung
    // hilft bei Wortstaemmen, nicht bei Abkuerzungen - deshalb erst
    // ab fuenf Zeichen.
    var COLLAPSE_MIN = 5;

    App.queryForms = function(text) {
        var f = App.fold(text);
        var forms = [f];
        if (f.length >= COLLAPSE_MIN) {
            var c = App.collapse(text);
            if (c && c !== f) forms.push(c);
        }
        return forms;
    };

    /** Enthaelt der Heuhaufen eine der Schreibweisen? */
    App.containsAny = function(hay, forms) {
        for (var i = 0; i < forms.length; i++) {
            if (forms[i] && hay.indexOf(forms[i]) !== -1) return true;
        }
        return false;
    };

    // ---------- Trefferhervorhebung (Vorschlag 2) ----------
    /**
     * Nimmt ROHTEXT und liefert entschaerftes HTML, in dem die
     * Fundstellen mit <mark> ausgezeichnet sind. <mark> ist damit
     * die einzige Auszeichnung, die hinzukommt - und sie kann
     * nicht mehr in einer Entitaet landen.
     *
     * Nebenwirkung mit Gewinn: weil ueber die gefaltete Fassung
     * gesucht wird, hebt die Suche nach "Oesophagus" auch
     * "Ösophagus" hervor.
     */
    App.hl = function(plainText, query) {
        var text = String(plainText === undefined || plainText === null ? '' : plainText);
        if (!query) return App.esc(text);

        var forms = App.queryForms(query);
        var fm = App.foldMap(text);
        if (!fm.f) return App.esc(text);

        // Alle Fundstellen aller Schreibweisen einsammeln ...
        var ranges = [];
        var i, at, needle;

        for (i = 0; i < forms.length; i++) {
            needle = forms[i];
            if (!needle) continue;
            at = fm.f.indexOf(needle);
            while (at !== -1) {
                var startSrc = fm.map[at];
                var lastFolded = at + needle.length - 1;
                var endSrc = (lastFolded < fm.map.length
                    ? fm.map[lastFolded]
                    : fm.map[fm.map.length - 1]) + 1;
                if (startSrc !== undefined && endSrc !== undefined && endSrc > startSrc) {
                    ranges.push([startSrc, endSrc]);
                }
                at = fm.f.indexOf(needle, at + Math.max(1, needle.length));
            }
        }

        if (!ranges.length) return App.esc(text);

        // ... und zu ueberschneidungsfreien Bereichen verschmelzen.
        ranges.sort(function(a, b) { return a[0] - b[0] || a[1] - b[1]; });

        var merged = [ranges[0]];
        for (i = 1; i < ranges.length; i++) {
            var last = merged[merged.length - 1];
            if (ranges[i][0] <= last[1]) last[1] = Math.max(last[1], ranges[i][1]);
            else merged.push(ranges[i]);
        }

        var html = '';
        var cursor = 0;
        for (i = 0; i < merged.length; i++) {
            html += App.esc(text.slice(cursor, merged[i][0]));
            html += '<mark>' + App.esc(text.slice(merged[i][0], merged[i][1])) + '</mark>';
            cursor = merged[i][1];
        }
        html += App.esc(text.slice(cursor));

        return html;
    };

    App.sopName = function(d, query) {
        return App.hl(d.name || '', query);
    };

    // ---------- Tippfehlertoleranz (Vorschlag 21) ----------
    // Damerau-Levenshtein mit Abbruch, sobald die erlaubte Distanz
    // ueberschritten ist. Bei 73 Namen und rund 700 Synonymen ist
    // das eine Rechnung im Mikrosekundenbereich.
    App.editDistance = function(a, b, limit) {
        var la = a.length, lb = b.length;
        if (Math.abs(la - lb) > limit) return limit + 1;
        if (!la) return lb;
        if (!lb) return la;

        var prev2 = [], prev = [], cur = [];
        var i, j;

        for (j = 0; j <= lb; j++) prev[j] = j;

        for (i = 1; i <= la; i++) {
            cur[0] = i;
            var best = cur[0];

            for (j = 1; j <= lb; j++) {
                var cost = a.charAt(i - 1) === b.charAt(j - 1) ? 0 : 1;
                var v = Math.min(cur[j - 1] + 1, prev[j] + 1, prev[j - 1] + cost);
                if (i > 1 && j > 1 &&
                    a.charAt(i - 1) === b.charAt(j - 2) &&
                    a.charAt(i - 2) === b.charAt(j - 1)) {
                    v = Math.min(v, prev2[j - 2] + 1);
                }
                cur[j] = v;
                if (v < best) best = v;
            }

            if (best > limit) return limit + 1;
            prev2 = prev.slice();
            prev = cur.slice();
        }

        return prev[lb];
    };

    // ============================================
    // KATEGORIEFARBEN
    // ============================================
    // Die Farbwerte stehen als Token in css/tokens.css und sind dort
    // fuer beide Themes auf Kontrast geprueft (tools/palette.mjs).
    // Hier wird nur noch auf sie verwiesen - kein Hexwert im Code.

    App.rc = function(v) {
        if (!v) return 'sonst';
        var s = String(v).trim();
        if (CATS[s]) return s;
        var l = s.toLowerCase();
        if (CNM[l]) return CNM[l];
        var keys = Object.keys(CATS);
        for (var i = 0; i < keys.length; i++) {
            if (l.indexOf(keys[i]) !== -1 || keys[i].indexOf(l) !== -1) return keys[i];
        }
        return 'sonst';
    };

    App.gc = function(k) {
        return CATS[k] ? 'var(--cat-' + k + ')' : 'var(--cat-sonst)';
    };

    /** Vollstaendiger Farbsatz einer Kategorie als Stilangabe. */
    App.catStyle = function(k) {
        var key = CATS[k] ? k : 'sonst';
        return '--cat-color:var(--cat-' + key + ');' +
            '--cat-tint:var(--cat-' + key + '-tint);' +
            '--cat-ink:var(--cat-' + key + '-ink);' +
            '--cat-line:var(--cat-' + key + '-line);';
    };

    App.catName = function(k) {
        return CATS[k] ? CATS[k].name : '';
    };

    App.catIcon = function(k) {
        return CATS[k] ? CATS[k].icon : 'fa-circle-info';
    };

    // ============================================
    // ALLGEMEINE HILFEN
    // ============================================

    App.easeOutExpo = function(t) {
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    App.throttle = function(func, limit) {
        var inThrottle;
        return function() {
            var args = arguments;
            var context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(function() { inThrottle = false; }, limit);
            }
        };
    };

    App.debounce = function(func, wait) {
        var timeout;
        return function() {
            var args = arguments;
            var context = this;
            clearTimeout(timeout);
            timeout = setTimeout(function() { func.apply(context, args); }, wait);
        };
    };

    App.haptic = function(type) {
        if (!navigator.vibrate) return;
        var patterns = { light: 10, medium: 20, heavy: 50 };
        try { navigator.vibrate(patterns[type] || 10); } catch (e) {}
    };

    // ---------- Kurzhinweis ("Toast") ----------
    var toastTimer = null;

    App.toast = function(message, icon) {
        var host = E.toastHost;
        if (!host) return;

        host.innerHTML = '<i class="fa-solid ' + App.escAttr(icon || 'fa-circle-check') +
            '" aria-hidden="true"></i><span>' + App.esc(message) + '</span>';
        host.classList.add('show');

        if (toastTimer) clearTimeout(toastTimer);
        toastTimer = setTimeout(function() {
            host.classList.remove('show');
            toastTimer = null;
        }, 2200);
    };

    // ============================================
    // SOP-DATEN
    // ============================================
    // Metadaten liegen sofort vor (dist/sop-meta.js, rund 90 KB).
    // Reintext und Abschnitts-HTML kommen nach (Vorschlag 17).

    var META = null;
    App.META = null;

    App.findSop = function(id) {
        if (!id) return null;
        return App.S.byId[id] || null;
    };

    App.hasSop = function(id) {
        return !!App.findSop(id);
    };

    /** Metadaten uebernehmen und den Zustand aufbauen. */
    App.initData = function() {
        META = window.SOP_META || null;
        App.META = META;

        if (!META || !META.sops) {
            App.S.data = [];
            App.S.byId = {};
            return false;
        }

        var list = [];
        var byId = {};

        for (var i = 0; i < META.sops.length; i++) {
            var m = META.sops[i];
            var d = {
                id: m.id,
                name: m.n,
                category: m.c,
                stand: m.d,
                chunk: m.k,
                secTitles: m.t || [],
                hasSources: !!m.q,
                aliases: m.a || [],
                xref: m.x || [],
                related: m.r || [],
                // vorberechnete Normalformen (Vorschlag 48)
                nf: m.nf || '',
                nc: m.nc || '',
                af: m.af || [],
                tf: m.tf || '',
                // wird nachgeladen
                sections: null,
                sources: null,
                text: null
            };
            list.push(d);
            byId[d.id] = d;
        }

        App.S.data = list;
        App.S.byId = byId;

        if (META.version) App.VERSION = META.version;

        return true;
    };

    /** Alle Score-Rechner einer SOP (Vorschlag 32). */
    App.scoresOf = function(sopId) {
        if (!META || !META.scores) return [];
        var out = [];
        for (var i = 0; i < META.scores.length; i++) {
            if (META.scores[i].sop === sopId) out.push(META.scores[i]);
        }
        return out;
    };

    /** Alle Abbildungen einer SOP (Vorschlag 12). */
    App.figuresOf = function(sopId) {
        if (!META || !META.figures) return [];
        var out = [];
        for (var i = 0; i < META.figures.length; i++) {
            if (META.figures[i].sop === sopId) out.push(META.figures[i]);
        }
        return out;
    };

    // ---------- Reintext (Volltextsuche) ----------
    App.acceptText = function(payload) {
        if (!payload) return;
        for (var id in payload) {
            if (!Object.prototype.hasOwnProperty.call(payload, id)) continue;
            var d = App.S.byId[id];
            if (!d) continue;
            d.text = payload[id];
            d._sf = null;
        }
        App.S.textReady = true;
        if (App.onTextReady) App.onTextReady();
    };

    /** Gefalteter Reintext eines Abschnitts - einmal berechnet. */
    App.secTextFolded = function(d, idx) {
        if (!d.text || !d.text.s) return '';
        if (!d._sf) d._sf = [];
        if (d._sf[idx] === undefined) d._sf[idx] = App.fold(d.text.s[idx] || '');
        return d._sf[idx];
    };

    App.secText = function(d, idx) {
        return (d.text && d.text.s && d.text.s[idx]) || '';
    };

    // ---------- Abschnittsinhalte (Pakete) ----------
    var chunkState = {};     // index -> 'loading' | 'ready' | 'error'
    var chunkWaiters = {};   // index -> [callbacks]

    function flushWaiters(idx, ok) {
        var waiting = chunkWaiters[idx] || [];
        chunkWaiters[idx] = [];
        for (var i = 0; i < waiting.length; i++) waiting[i](ok);
    }

    App.acceptContent = function(payload, chunkIdx) {
        if (payload) {
            for (var id in payload) {
                if (!Object.prototype.hasOwnProperty.call(payload, id)) continue;
                var d = App.S.byId[id];
                if (!d) continue;
                var c = payload[id];
                d.sections = [];
                for (var i = 0; i < c.s.length; i++) {
                    d.sections.push({
                        title: d.secTitles[i] || ('Abschnitt ' + (i + 1)),
                        html: c.s[i]
                    });
                }
                d.sources = c.q || '';
            }
        }

        chunkState[chunkIdx] = 'ready';
        flushWaiters(chunkIdx, true);
    };

    App.chunkReady = function(idx) {
        return chunkState[idx] === 'ready';
    };

    /** Ein Paket laden. Mehrfachaufrufe teilen sich eine Anfrage. */
    App.loadChunk = function(idx, done) {
        if (chunkState[idx] === 'ready') {
            if (done) done(true);
            return;
        }

        if (done) {
            chunkWaiters[idx] = chunkWaiters[idx] || [];
            chunkWaiters[idx].push(done);
        }

        if (chunkState[idx] === 'loading') return;
        chunkState[idx] = 'loading';

        var src = (META && META.chunks && META.chunks[idx]) || null;
        if (!src) {
            chunkState[idx] = 'error';
            flushWaiters(idx, false);
            return;
        }

        var s = document.createElement('script');
        s.src = src + '?v=' + encodeURIComponent(App.VERSION);
        s.async = true;
        s.onerror = function() {
            chunkState[idx] = 'error';
            flushWaiters(idx, false);
        };
        // Der Erfolgsfall meldet sich ueber acceptContent(), nicht
        // ueber onload: erst dann sind die Daten wirklich da.
        document.head.appendChild(s);
    };

    /** Erneuter Versuch nach einem Fehlschlag. */
    App.retryChunk = function(idx, done) {
        if (chunkState[idx] === 'error') chunkState[idx] = null;
        App.loadChunk(idx, done);
    };

    /**
     * Alles im Hintergrund nachziehen.
     *
     * Ohne diesen Schritt waere das paketweise Laden ein Rueckschritt:
     * bricht die Verbindung nach dem Start ab, liesse sich keine SOP
     * mehr oeffnen, die noch niemand angefasst hat. Die Pakete werden
     * deshalb nacheinander vollstaendig geholt - nacheinander, damit
     * sie einer gerade geoeffneten SOP nicht die Leitung wegnehmen.
     */
    App.prefetchAll = function() {
        if (!META || !META.chunks) return;
        var i = 0;

        function next() {
            while (i < META.chunks.length && chunkState[i] === 'ready') i++;
            if (i >= META.chunks.length) return;
            var idx = i++;
            App.loadChunk(idx, function() {
                if (window.requestIdleCallback) window.requestIdleCallback(next, { timeout: 1200 });
                else setTimeout(next, 60);
            });
        }

        next();
    };

    /** Inhaltslage einer SOP: 'ready' | 'loading' | 'error' | 'missing'. */
    App.sopLoadState = function(d) {
        if (!d) return 'missing';
        if (d.sections) return 'ready';
        if (chunkState[d.chunk] === 'error') return 'error';
        return 'loading';
    };

    App.sortData = function() {
        App.S.data.sort(function(a, b) {
            return (a.name || '').localeCompare(b.name || '', 'de');
        });
    };

    App.categoryCounts = function() {
        var counts = {};
        var keys = Object.keys(CATS);
        var i;
        for (i = 0; i < keys.length; i++) counts[keys[i]] = 0;
        for (i = 0; i < App.S.data.length; i++) {
            var c = App.S.data[i].category;
            if (counts[c] !== undefined) counts[c]++;
        }
        return counts;
    };

    // ============================================
    // SUCHWERK (Vorschlaege 19 - 25)
    // ============================================
    // Ein Werk, vier Oberflaechen: Seitenleiste, Uebersicht,
    // Schnellsuche und Volltextsuche fragen dieselbe Funktion.
    // Vorher filterten drei Stellen nach Namen und eine nach
    // Volltext - mit drei verschiedenen Ergebnissen (Vorschlag 22).

    var W = {
        nameExact: 120,
        namePrefix: 80,
        nameWord: 56,
        namePart: 38,
        // Eine Abkuerzung, die genau passt, wiegt schwerer als ein
        // Name, der zufaellig mit denselben Buchstaben beginnt:
        // "HIT" meint die heparininduzierte Thrombozytopenie, nicht
        // den Hitzschlag.
        aliasExact: 90,
        aliasPrefix: 46,
        aliasPart: 26,
        titlePart: 14,
        textSection: 7,
        textCap: 28,
        sourcePart: 2,
        fuzzyBase: 30,
        fuzzyStep: 9
    };

    function wordStart(hay, needle) {
        if (!needle) return false;
        if (hay.indexOf(needle) === 0) return true;
        return hay.indexOf(' ' + needle) !== -1;
    }

    /**
     * Ab welcher Laenge darf eine Anfrage MITTEN in einem Wort
     * treffen?
     *
     * Bei drei Zeichen ist ein Teilstringtreffer praktisch immer
     * Zufall: "LAE" steckt in "Malaena", "TVT" in nichts, "CO" in
     * jedem zweiten Wort. Kurze Eingaben sind in der ZNA fast immer
     * Abkuerzungen - und die stehen als ganzes Wort oder als
     * Synonym im Index. Deshalb gilt fuer sie Wortgrenze.
     */
    var SUBSTRING_MIN = 4;

    function mayMatchInside(needle) {
        return needle.length >= SUBSTRING_MIN;
    }

    /** Bewertet eine SOP gegen die Anfrage. */
    function scoreSop(d, forms) {
        var score = 0;
        var why = null;
        var i, f;

        for (i = 0; i < forms.length; i++) {
            f = forms[i];
            if (!f) continue;
            if (d.nf === f || d.nc === f) { score = Math.max(score, W.nameExact); why = 'name'; }
            else if (d.nf.indexOf(f) === 0 || d.nc.indexOf(f) === 0) { score = Math.max(score, W.namePrefix); why = why || 'name'; }
            else if (wordStart(d.nf, f) || wordStart(d.nc, f)) { score = Math.max(score, W.nameWord); why = why || 'name'; }
            else if (mayMatchInside(f) && (d.nf.indexOf(f) !== -1 || d.nc.indexOf(f) !== -1)) { score = Math.max(score, W.namePart); why = why || 'name'; }
        }

        var aliasScore = 0;
        for (var a = 0; a < d.af.length; a++) {
            var al = d.af[a];
            if (!al) continue;
            for (i = 0; i < forms.length; i++) {
                f = forms[i];
                if (!f) continue;
                if (al === f) aliasScore = Math.max(aliasScore, W.aliasExact);
                else if (wordStart(al, f)) aliasScore = Math.max(aliasScore, W.aliasPrefix);
                else if (mayMatchInside(f) && al.indexOf(f) !== -1) aliasScore = Math.max(aliasScore, W.aliasPart);
            }
        }
        if (aliasScore > 0) {
            if (aliasScore > score) why = 'alias';
            score = Math.max(score, aliasScore);
        }

        if (mayMatchInside(forms[0]) && App.containsAny(d.tf, forms)) {
            score += W.titlePart;
            why = why || 'title';
        }

        return score > 0 ? { score: score, why: why || 'name' } : null;
    }

    /** Textausschnitt um eine gefaltete Fundstelle, auf Wortgrenzen. */
    function snippetAround(plain, foldedAt) {
        var fm = App.foldMap(plain);
        var srcAt = fm.map[foldedAt] !== undefined ? fm.map[foldedAt] : 0;

        var start = Math.max(0, srcAt - 70);
        var end = Math.min(plain.length, srcAt + 120);

        if (start > 0) {
            var sp = plain.indexOf(' ', start);
            if (sp !== -1 && sp < srcAt) start = sp + 1;
        }
        if (end < plain.length) {
            var ep = plain.lastIndexOf(' ', end);
            if (ep > srcAt) end = ep;
        }

        return (start > 0 ? '…' : '') +
            plain.slice(start, end).replace(/\s+/g, ' ').trim() +
            (end < plain.length ? '…' : '');
    }

    /** Volltexttreffer einer SOP; setzt geladenen Reintext voraus. */
    function textHits(d, forms, tokens, limit) {
        if (!d.text || !d.text.s) return [];

        var hits = [];
        for (var i = 0; i < d.text.s.length && hits.length < limit; i++) {
            var folded = App.secTextFolded(d, i);
            if (!folded) continue;

            var at = -1;
            for (var f = 0; f < forms.length && at === -1; f++) {
                if (forms[f]) at = folded.indexOf(forms[f]);
            }

            // Mehrwortanfrage: alle Bestandteile muessen im selben
            // Abschnitt stehen, sonst ist es kein Treffer.
            if (at === -1 && tokens.length > 1) {
                var all = true;
                var first = -1;
                for (var t = 0; t < tokens.length; t++) {
                    var pos = folded.indexOf(tokens[t]);
                    if (pos === -1) { all = false; break; }
                    if (first === -1 || pos < first) first = pos;
                }
                if (all) at = first;
            }

            if (at === -1) continue;

            hits.push({
                sec: i,
                title: d.secTitles[i] || ('Abschnitt ' + (i + 1)),
                snippet: snippetAround(d.text.s[i] || '', at)
            });
        }

        return hits;
    }

    /** Wirkstofftreffer (Vorschlag 23). */
    function drugMatches(forms) {
        if (!META || !META.drugs) return [];
        var out = [];

        for (var i = 0; i < META.drugs.length; i++) {
            var entry = META.drugs[i];
            var best = 0;
            for (var v = 0; v < entry.v.length; v++) {
                for (var f = 0; f < forms.length; f++) {
                    if (!forms[f]) continue;
                    if (entry.v[v] === forms[f]) best = Math.max(best, 3);
                    else if (entry.v[v].indexOf(forms[f]) === 0 && forms[f].length >= 3) best = Math.max(best, 2);
                    else if (forms[f].length >= 5 && entry.v[v].indexOf(forms[f]) !== -1) best = Math.max(best, 1);
                }
            }
            if (best) out.push({ name: entry.n, rank: best, sops: entry.s });
        }

        out.sort(function(a, b) {
            if (b.rank !== a.rank) return b.rank - a.rank;
            return a.name.localeCompare(b.name, 'de');
        });

        return out.slice(0, 4);
    }

    /**
     * Die zentrale Abfrage.
     *
     * opts.text   - Volltext mitdurchsuchen (Vorgabe: ja, sobald
     *               dist/sop-text.js geladen ist)
     * opts.fuzzy  - Tippfehlertoleranz zulassen (Vorgabe: ja)
     * opts.cat    - auf eine Kategorie eingrenzen
     * opts.limit  - Hoechstzahl Treffer
     * opts.drugs  - Wirkstoffe mitsuchen (Vorgabe: ja)
     */
    App.query = function(raw, opts) {
        opts = opts || {};

        var text = String(raw || '').trim();
        var result = {
            q: text,
            sops: [],
            drugs: [],
            usedFuzzy: false,
            textSearched: false
        };

        if (!text) return result;

        var forms = App.queryForms(text);
        if (!forms[0]) return result;

        var tokens = forms[0].split(' ').filter(function(t) { return t.length >= 2; });
        var wantText = opts.text !== false && App.S.textReady;
        var cat = opts.cat && opts.cat !== 'all' ? opts.cat : null;

        result.textSearched = wantText;

        var scored = [];
        var i, d, base;

        for (i = 0; i < App.S.data.length; i++) {
            d = App.S.data[i];
            if (cat && d.category !== cat) continue;

            base = scoreSop(d, forms);
            var hits = [];

            if (wantText) {
                hits = textHits(d, forms, tokens, 4);
                if (hits.length) {
                    var add = Math.min(W.textCap, hits.length * W.textSection);
                    if (!base) base = { score: add, why: 'text' };
                    else base.score += add;
                }
            }

            if (!base && wantText && d.text && d.text.q &&
                App.containsAny(App.fold(d.text.q), forms)) {
                base = { score: W.sourcePart, why: 'source' };
            }

            if (!base) continue;

            scored.push({ sop: d, score: base.score, why: base.why, hits: hits });
        }

        // --- Tippfehlertoleranz, nur wenn sonst kaum etwas da ist ---
        if (opts.fuzzy !== false && scored.length < 3 && forms[0].length >= 4) {
            var limit = forms[0].length <= 5 ? 1 : 2;
            var seen = {};
            for (i = 0; i < scored.length; i++) seen[scored[i].sop.id] = 1;

            for (i = 0; i < App.S.data.length; i++) {
                d = App.S.data[i];
                if (seen[d.id]) continue;
                if (cat && d.category !== cat) continue;

                var bestDist = limit + 1;
                var candidates = [d.nf].concat(d.af);

                for (var c = 0; c < candidates.length && bestDist > 0; c++) {
                    var cand = candidates[c];
                    if (!cand) continue;
                    // Wortweise vergleichen: "Pankretitis" gegen
                    // "Akute Pankreatitis" darf nicht daran scheitern,
                    // dass der ganze Name viel laenger ist.
                    var words = cand.split(' ');
                    words.push(cand);
                    for (var w = 0; w < words.length; w++) {
                        if (words[w].length < 4) continue;
                        if (Math.abs(words[w].length - forms[0].length) > limit) continue;
                        var dist = App.editDistance(forms[0], words[w], limit);
                        if (dist < bestDist) bestDist = dist;
                    }
                }

                if (bestDist <= limit) {
                    result.usedFuzzy = true;
                    scored.push({
                        sop: d,
                        score: Math.max(4, W.fuzzyBase - bestDist * W.fuzzyStep),
                        why: 'fuzzy',
                        hits: []
                    });
                }
            }
        }

        scored.sort(function(a, b) {
            if (b.score !== a.score) return b.score - a.score;
            return a.sop.name.localeCompare(b.sop.name, 'de');
        });

        result.sops = opts.limit ? scored.slice(0, opts.limit) : scored;
        if (opts.drugs !== false) result.drugs = drugMatches(forms);

        return result;
    };

    /**
     * Schlanke Namensfilterung fuer Seitenleiste und Uebersicht.
     * Nutzt dasselbe Werk, blendet aber Volltext und Wirkstoffe aus -
     * dort wird gefiltert, nicht recherchiert.
     */
    App.filterSops = function(catKey, queryText) {
        var q = String(queryText || '').trim();

        if (!q) {
            var out = [];
            for (var i = 0; i < App.S.data.length; i++) {
                var d = App.S.data[i];
                if (catKey && catKey !== 'all' && d.category !== catKey) continue;
                out.push(d);
            }
            return out;
        }

        var res = App.query(q, { cat: catKey, text: false, fuzzy: true, drugs: false });
        var list = [];
        for (var j = 0; j < res.sops.length; j++) list.push(res.sops[j].sop);
        return list;
    };

})(window.SOPApp = window.SOPApp || {});
