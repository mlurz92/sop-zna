/* ============================================================
   core.js - Konfiguration, Zustand, DOM-Puffer, Hilfsfunktionen
   ------------------------------------------------------------
   Erstes Modul der Kette. Legt den gemeinsamen Namensraum
   window.SOPApp an; alle weiteren Module haengen sich daran.
   ============================================================ */
(function(App) {
    'use strict';

    // ---------- Version (muss zu version.json passen) ----------
    App.VERSION = '3.3.0';

    // ---------- Kategorien ----------
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

    // Farbe je Kategorie
    var CC = {
        'kardio': '#ef4444',
        'pulmo': '#3b82f6',
        'gi': '#f59e0b',
        'neuro': '#8b5cf6',
        'nephro': '#06b6d4',
        'metab': '#10b981',
        'haem': '#ec4899',
        'infekt': '#84cc16',
        'tox': '#f97316',
        'leit': '#6366f1',
        'sonst': '#64748b'
    };

    // Rueckwaertssuche: Anzeigename -> Schluessel
    var CNM = {};
    (function() {
        var keys = Object.keys(CATS);
        for (var i = 0; i < keys.length; i++) {
            CNM[CATS[keys[i]].name.toLowerCase()] = keys[i];
        }
    })();

    // Symbol je Abschnittstitel
    var SIC = {
        'Definition': 'fa-book-open',
        'Ursachen': 'fa-magnifying-glass',
        'Symptome': 'fa-clipboard-list',
        'Diagnostik': 'fa-vials',
        'Therapie': 'fa-pills',
        'Merke': 'fa-lightbulb',
        'Disposition': 'fa-right-from-bracket',
        'Komplikationen': 'fa-triangle-exclamation',
        'Quellen': 'fa-quote-right'
    };

    // Diese Abschnitte stehen beim Oeffnen einer SOP bereits offen
    var AO = ['Diagnostik', 'Therapie'];

    App.CATS = CATS;
    App.CC = CC;
    App.CNM = CNM;
    App.SIC = SIC;
    App.AO = AO;

    // Schriftgroesse: Minimum, Maximum, Vorgabe
    App.FS = { min: 13, max: 20, def: 15 };

    // Schwellenwerte der Touch-Gesten
    App.GESTURE = {
        edgeMargin: 35,        // Randbereich fuer den Zurueck-Wisch
        swipeDistance: 60,     // Strecke, ab der ausgeloest wird
        swipeVelocity: 0.3,    // ... oder Geschwindigkeit
        directionLock: 8,      // ab hier steht die Richtung fest
        segTapSlop: 10         // Tippen vs. Wischen in der Kapitelleiste
    };

    // ---------- Anwendungszustand ----------
    App.S = {
        data: [],
        tab: 'home',
        sopId: null,
        catD: 'all',
        catB: 'all',
        bQ: '',
        sQ: '',
        spotQ: '',
        hQ: '',
        theme: 'light',
        fs: App.FS.def,
        mob: window.innerWidth < 1024,
        off: !navigator.onLine,
        ts: null,
        sCatOpen: false,
        bCatOpen: false,
        isNavigating: false
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
        'fabAction', 'bottomNav', 'metaThemeColor', 'sectionPickerOverlay', 'sectionPickerBackdrop',
        'sectionPickerClose', 'sectionPickerList', 'sectionPickerPrint', 'offlineBanner', 'offlineTimestamp',
        'fontDecMobile', 'fontIncMobile', 'fontIndicatorMobile',
        'fontDecDesktop', 'fontIncDesktop', 'fontIndicatorDesktop', 'pullIndicator',
        'sidebarCatToggle', 'browseCatToggle', 'viewContainer', 'toastHost',
        'readProgress', 'sectionPickerSubtitle',
        'spotlightOverlay', 'spotlightBackdrop', 'spotlightContainer', 'spotlightInput',
        'spotlightClear', 'spotlightResults', 'spotlightCancel', 'spotlightBtn',
        'pickerSheet', 'pickerHandle', 'appProgress',
        'dirBtn', 'dirBtnMobile', 'dirOverlay', 'dirBackdrop', 'dirClose',
        'dirInput', 'dirClear', 'dirBody'
    ];

    App.cache = function() {
        for (var i = 0; i < CACHED_IDS.length; i++) {
            E[CACHED_IDS[i]] = document.getElementById(CACHED_IDS[i]);
        }
    };

    // ---------- Text- und Datenhilfen ----------

    // Kategorie aus beliebiger Schreibweise aufloesen
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
        return CC[k] || '#64748b';
    };

    App.catName = function(k) {
        return CATS[k] ? CATS[k].name : '';
    };

    App.catIcon = function(k) {
        return CATS[k] ? CATS[k].icon : 'fa-circle-info';
    };

    var stripNode = null;

    App.strip = function(html) {
        if (!stripNode) stripNode = document.createElement('div');
        stripNode.innerHTML = html;
        return stripNode.textContent || stripNode.innerText || '';
    };

    // Reintext eines Abschnitts - einmal ermitteln, danach aus dem Puffer.
    App.secText = function(sec) {
        if (sec._text === undefined) sec._text = App.strip(sec.html || '');
        return sec._text;
    };

    App.secTextLower = function(sec) {
        if (sec._textLower === undefined) sec._textLower = App.secText(sec).toLowerCase();
        return sec._textLower;
    };

    App.sourcesTextLower = function(d) {
        if (d._srcLower === undefined) d._srcLower = App.strip(d.sources || '').toLowerCase();
        return d._srcLower;
    };

    // Text fuer den Einbau in HTML entschaerfen
    App.esc = function(t) {
        return String(t === undefined || t === null ? '' : t)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    };

    // Zusaetzlich fuer Attributwerte: Anfuehrungszeichen
    App.escAttr = function(t) {
        return App.esc(t).replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    };

    // Treffer hervorheben. Erwartet bereits entschaerften Text, damit
    // <mark> die einzige eingefuegte Auszeichnung bleibt.
    App.hl = function(escapedText, query) {
        if (!query) return escapedText;
        var needle = App.esc(query).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        if (!needle) return escapedText;
        return escapedText.replace(new RegExp('(' + needle + ')', 'gi'), '<mark>$1</mark>');
    };

    // Name einer SOP, entschaerft und optional hervorgehoben
    App.sopName = function(d, query) {
        return App.hl(App.esc(d.name || ''), query);
    };

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
    // Bestaetigt Aktionen, die sonst unsichtbar blieben (z.B. Kopieren).
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

    // ---------- SOP-Daten ----------
    App.findSop = function(id) {
        var S = App.S;
        if (!id) return null;
        for (var i = 0; i < S.data.length; i++) {
            if (S.data[i].id === id) return S.data[i];
        }
        return null;
    };

    App.hasSop = function(id) {
        return !!App.findSop(id);
    };

    // Fehlende Felder aus alternativen Schreibweisen ergaenzen.
    // Der fachliche Inhalt der SOP bleibt dabei unveraendert.
    App.normSop = function(d) {
        if (!d.name) d.name = d.title || 'Unbenannt';

        d.category = App.rc(d.category || d.catKey);

        if (!d.stand) d.stand = d.date || '';

        if (!d.sources) d.sources = d.quellen || d.references || '';

        if (!d.sections) {
            d.sections = (d.content && Object.prototype.toString.call(d.content) === '[object Array]')
                ? d.content : [];
        }

        for (var i = 0; i < d.sections.length; i++) {
            var sec = d.sections[i];
            if (!sec.title) sec.title = sec.name || sec.heading || ('Abschnitt ' + (i + 1));
            if (!sec.html) sec.html = sec.content || sec.body || sec.text || '';
        }

        return d;
    };

    App.sortData = function() {
        App.S.data.sort(function(a, b) {
            return (a.name || '').localeCompare(b.name || '', 'de');
        });
    };

    // Anzahl SOPs je Kategorie
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

    // Liste nach Kategorie und Namensteil filtern
    App.filterSops = function(catKey, query) {
        var out = [];
        var q = (query || '').toLowerCase();
        for (var i = 0; i < App.S.data.length; i++) {
            var d = App.S.data[i];
            if (catKey && catKey !== 'all' && d.category !== catKey) continue;
            if (q && (d.name || '').toLowerCase().indexOf(q) === -1) continue;
            out.push(d);
        }
        return out;
    };

})(window.SOPApp = window.SOPApp || {});
