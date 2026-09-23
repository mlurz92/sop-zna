/* ============================================================
   lists.js - Seitenleiste, Startseite, Uebersicht, Volltextsuche
   ------------------------------------------------------------
   Alle Listenansichten der Anwendung.

   Namen, Abschnittstitel und Textausschnitte gehen als ROHTEXT
   durch App.hl(); die Entschaerfung passiert dort. <mark> ist
   damit die einzige Auszeichnung, die hinzukommt - und sie kann
   nicht mehr in einer Entitaet landen (Vorschlag 2).

   Gesucht wird ueberall mit demselben Werk aus js/core.js
   (Vorschlag 22).
   ============================================================ */
(function(App) {
    'use strict';

    var S = App.S;
    var E = App.E;
    var CATS = App.CATS;

    // Ein Listener je Liste statt einer je Zeile.
    function delegate(container, selector, handler) {
        if (!container) return;
        if (container._delegated && container._delegated[selector]) return;
        container._delegated = container._delegated || {};
        container._delegated[selector] = true;
        container.addEventListener('click', function(e) {
            var el = e.target && e.target.closest ? e.target.closest(selector) : null;
            if (!el || !container.contains(el)) return;
            handler(el, e);
        });
    }
    App.delegate = delegate;

    // ============================================
    // SEITENLEISTE
    // ============================================
    App.rSB = function() {
        if (!E.categoryFilters) return;

        var counts = App.categoryCounts();
        var keys = Object.keys(CATS);

        var html = '<button type="button" class="sidebar-cat-chip' + (S.catD === 'all' ? ' active' : '') +
            '" data-cat="all" aria-pressed="' + (S.catD === 'all') + '">Alle <span class="cat-count">' +
            S.data.length + '</span></button>';

        for (var i = 0; i < keys.length; i++) {
            if (!counts[keys[i]]) continue;
            html += '<button type="button" class="sidebar-cat-chip' + (S.catD === keys[i] ? ' active' : '') +
                '" data-cat="' + keys[i] + '" aria-pressed="' + (S.catD === keys[i]) +
                '" style="' + App.escAttr(App.catStyle(keys[i])) + '">' +
                App.esc(CATS[keys[i]].name) + ' <span class="cat-count">' + counts[keys[i]] + '</span></button>';
        }

        E.categoryFilters.innerHTML = html;

        delegate(E.categoryFilters, '.sidebar-cat-chip', function(ch) {
            S.catD = ch.getAttribute('data-cat');
            markActiveChip(E.categoryFilters, '.sidebar-cat-chip', ch);
            App.rNav();
        });

        App.rNav();
    };

    App.rNav = function() {
        if (!E.navList) return;

        var list = App.filterSops(S.catD, S.hQ);
        var html = '';

        for (var i = 0; i < list.length; i++) {
            var d = list[i];
            var isAct = S.sopId === d.id && S.tab === 'sop';
            html += '<li><a href="#sop/' + App.escAttr(d.id) + '" class="' + (isAct ? 'active' : '') + '"' +
                (isAct ? ' aria-current="page"' : '') + ' data-id="' + App.escAttr(d.id) + '">' +
                '<span class="nav-dot" style="background:' + App.gc(d.category) + '"></span>' +
                '<span class="nav-label">' + App.sopName(d, S.hQ) + '</span>' +
                '</a></li>';
        }

        // Statuten stehen als eigene Gruppe unter den Pfaden - sichtbar,
        // solange nicht nach einer Fachkategorie gefiltert wird.
        var docs = S.catD === 'all' ? App.filterDocs(S.hQ) : [];
        if (docs.length) {
            html += '<li class="nav-group" role="presentation"><i class="fa-solid fa-scale-balanced" aria-hidden="true"></i> Statuten</li>';
            for (var k = 0; k < docs.length; k++) {
                var doc = docs[k];
                var docAct = S.sopId === doc.id && S.tab === 'sop';
                html += '<li><a href="#statut/' + App.escAttr(doc.id) + '" class="nav-doc' + (docAct ? ' active' : '') + '"' +
                    (docAct ? ' aria-current="page"' : '') + ' data-id="' + App.escAttr(doc.id) + '">' +
                    '<span class="nav-dot" style="background:' + App.gc(doc.category) + '"></span>' +
                    '<span class="nav-label">' + App.hl(doc.short, S.hQ) + '</span>' +
                    '</a></li>';
            }
        }

        if (!list.length && !docs.length) {
            html = '<li class="nav-empty">Kein Treffer</li>';
        }

        E.navList.innerHTML = html;

        delegate(E.navList, 'a[data-id]', function(a, e) {
            e.preventDefault();
            App.pushNav(a.getAttribute('data-id'));
        });

        var act = E.navList.querySelector('a.active');
        if (act && act.scrollIntoView && !App.MOTION.reduced) {
            act.scrollIntoView({ block: 'nearest' });
        }
    };

    // ============================================
    // STARTSEITE (Vorschlag 24)
    // ============================================
    // In der ZNA wird gesucht, nicht geblaettert. Das Suchfeld ist
    // deshalb das erste und groesste Element - die Marke steht
    // darueber, aber knapp.
    App.rHome = function() {
        if (E.heroArea) {
            // Marke und Titel stehen in EINER Zeile nebeneinander -
            // auf dem Telefon genauso wie auf dem Desktop. Frueher
            // lag das Logo darueber (Telefon) bzw. frei schwebend in
            // der Ecke (Desktop); beides sind zwei Loesungen fuer
            // dieselbe Frage. Die Reihenfolge im Quelltext ist
            // Titel -> Marke, damit Vorlesewerkzeuge zuerst hoeren,
            // worum es geht.
            E.heroArea.innerHTML =
                '<div class="hero-head">' +
                '<div class="hero-heading">' +
                '<h1 class="hero-title">Patientenpfade</h1>' +
                '<p class="hero-subtitle">Zentrale Notaufnahme</p>' +
                '</div>' +
                '<div class="hero-brand">' +
                '<img class="hero-logo" src="img/Basislogo_farbig.png" alt="Klinikum St. Georg" width="160" height="27">' +
                '</div>' +
                '</div>' +
                '<button type="button" class="hero-search" id="heroSearchBtn">' +
                '<i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>' +
                '<span class="hero-search-label">Pfad, Abkürzung oder Wirkstoff suchen&hellip;</span>' +
                '<i class="fa-solid fa-chevron-right hero-search-go" aria-hidden="true"></i>' +
                '</button>';

            // Ein Knopf statt eines zweiten Eingabefeldes: frueher wurde
            // die Eingabe zeichenweise an das Spotlight weitergereicht -
            // bei schnellem Tippen ging der Suchbegriff dabei verloren.
            var hsb = document.getElementById('heroSearchBtn');
            if (hsb) {
                hsb.addEventListener('click', function() { App.openSpotlight(); });
            }
        }

        if (E.catGrid) {
            var counts = App.categoryCounts();
            var keys = Object.keys(CATS);

            var gh = '<button type="button" class="cat-card cat-card-all" data-cat="all"' +
                ' style="--cat-color:var(--primary);--cat-tint:var(--primary-light);--cat-ink:var(--primary-dark)">' +
                '<i class="fa-solid fa-list cat-card-icon" aria-hidden="true"></i>' +
                '<span class="cat-card-name">Alle SOPs</span>' +
                '<span class="cat-card-count">' + S.data.length + ' Pfade</span>' +
                '</button>';

            for (var i = 0; i < keys.length; i++) {
                if (!counts[keys[i]]) continue;
                gh += '<button type="button" class="cat-card" data-cat="' + keys[i] + '"' +
                    ' style="' + App.escAttr(App.catStyle(keys[i])) + '">' +
                    '<i class="fa-solid ' + CATS[keys[i]].icon + ' cat-card-icon" aria-hidden="true"></i>' +
                    '<span class="cat-card-name">' + App.esc(CATS[keys[i]].name) + '</span>' +
                    '<span class="cat-card-count">' + counts[keys[i]] + ' SOPs</span>' +
                    '</button>';
            }

            E.catGrid.innerHTML = gh;

            delegate(E.catGrid, '.cat-card', function(c) {
                S.catB = c.getAttribute('data-cat');
                S.bQ = '';
                App.forgetScroll('#browse');
                App.haptic('light');
                App.sTab('browse', 'push');
            });

        }

        App.rHomeStatuten();
        App.staggerHome();

        if (E.homeInfo) {
            // Der Stand der Erzeugung stand hier frueher mit. Er
            // beantwortet keine Frage am Krankenbett - der fachlich
            // massgebliche Stand haengt an der einzelnen SOP und wird
            // dort auch angezeigt. Die Fassung der Anwendung steht
            // weiterhin in den Einstellungen.
            E.homeInfo.innerHTML = '<p class="info-count">' + S.data.length +
                ' Patientenpfade' + (S.docs.length ? ' · ' + S.docs.length + ' Statuten' : '') +
                ' · AG Klinische Pfade</p>';
        }
    };

    // ============================================
    // STARTSEITE: STATUTEN & ORGANISATION
    // ============================================
    // Zwei Wege: das ganze Statut (Karte) oder direkt das Werkzeug,
    // das man am Tresen braucht (Checkliste, G-AEP, Crowding ...).
    App.rHomeStatuten = function() {
        if (!E.homeStatuten) return;
        if (!S.docs.length) {
            E.homeStatuten.innerHTML = '';
            return;
        }

        var html = '<div class="home-sec-head">' +
            '<h2 class="home-sec-title" id="homeStatutenTitle">' +
            '<i class="fa-solid fa-scale-balanced" aria-hidden="true"></i> Statuten &amp; Organisation</h2>' +
            '<p class="home-sec-sub">Regelwerk der Notaufnahme und der ZNA-Station</p>' +
            '</div><div class="statut-cards">';

        for (var i = 0; i < S.docs.length; i++) {
            var d = S.docs[i];
            var facts = [];
            if (d.stand) facts.push('Stand ' + d.stand);
            if (d.version) facts.push('Version ' + d.version);
            facts.push(d.secTitles.length + ' Kapitel');

            html += '<button type="button" class="statut-card" data-id="' + App.escAttr(d.id) + '"' +
                ' style="' + App.escAttr(App.catStyle(d.category)) + '">' +
                '<span class="statut-card-icon"><i class="fa-solid ' +
                (d.id === 'statut-abs' ? 'fa-bed' : 'fa-hospital') + '" aria-hidden="true"></i></span>' +
                '<span class="statut-card-body">' +
                '<span class="statut-card-name">' + App.esc(d.short) + '</span>' +
                '<span class="statut-card-title">' + App.esc(d.name) + '</span>' +
                (d.summary ? '<span class="statut-card-summary">' + App.esc(d.summary) + '</span>' : '') +
                '<span class="statut-card-meta">' + App.esc(facts.join(' · ')) + '</span>' +
                '</span>' +
                '<i class="fa-solid fa-chevron-right statut-card-go" aria-hidden="true"></i>' +
                '</button>';
        }
        html += '</div>';

        var tools = App.statutTools();
        if (tools.length) {
            html += '<div class="statut-tools" role="group" aria-label="Direkt zu">';
            for (var t = 0; t < tools.length; t++) {
                var tool = tools[t];
                html += '<button type="button" class="statut-tool" data-doc="' + App.escAttr(tool.doc) +
                    '" data-sec="' + tool.sec + '" style="' + App.escAttr(App.catStyle(App.DOC_CAT)) + '">' +
                    '<i class="fa-solid ' + App.escAttr(tool.icon) + '" aria-hidden="true"></i>' +
                    '<span class="statut-tool-label">' + App.esc(tool.label) + '</span>' +
                    '<span class="statut-tool-hint">' + App.esc(tool.hint) + '</span>' +
                    '</button>';
            }
            html += '</div>';
        }

        E.homeStatuten.innerHTML = html;

        delegate(E.homeStatuten, '.statut-card', function(c) {
            App.pushNav(c.getAttribute('data-id'));
        });
        delegate(E.homeStatuten, '.statut-tool', function(c) {
            App.pushNav(c.getAttribute('data-doc'), parseInt(c.getAttribute('data-sec'), 10));
        });

    };

    /**
     * Auftritt der Startseite als EINE Kaskade: erst die Kategorien,
     * dann - nahtlos anschliessend - Ueberschrift, Karten und
     * Werkzeuge des Bereichs "Statuten & Organisation". Beim Start
     * und bei jeder Rueckkehr zur Startseite (App.sTab).
     */
    App.staggerHome = function() {
        var cats = E.catGrid ? E.catGrid.querySelectorAll('.cat-card') : [];
        if (cats.length) App.applyStagger(cats, 'stagger-item');
        if (E.homeStatuten) {
            var docs = E.homeStatuten.querySelectorAll('.home-sec-head, .statut-card, .statut-tool');
            // Die Statuten setzen die Kaskade dort fort, wo die letzte
            // Kategoriekarte aufgehoert hat.
            if (docs.length) App.applyStagger(docs, 'stagger-item', Math.min(cats.length, App.MOTION.staggerMax));
        }
    };

    // ============================================
    // UEBERSICHT (BROWSE)
    // ============================================
    App.rBrowse = function() {
        if (!E.viewBrowse) return;

        E.viewBrowse.innerHTML = '<div class="view-heading"><p class="view-eyebrow">PATIENTENPFADE</p><h1>SOP-Übersicht</h1><p>Nach Titel, Abkürzung oder Fachgebiet eingrenzen.</p></div>' +
            '<div class="browse-bar-top">' +
            '<div class="browse-search">' +
            '<i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>' +
            '<input type="search" id="browseSearchInput" placeholder="SOPs filtern..." aria-label="SOPs filtern" autocomplete="off" value="' + App.escAttr(S.bQ) + '">' +
            '<button type="button" class="browse-search-clear' + (S.bQ ? ' show' : '') + '" id="browseSearchClear" aria-label="Suche leeren"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>' +
            '</div>' +
            '<button type="button" class="browse-cat-toggle' + (S.bCatOpen ? ' open' : '') + '" id="browseCatToggle" aria-controls="browseCategoryFilters" aria-expanded="' + (!!S.bCatOpen) + '">' +
            '<i class="fa-solid fa-filter" aria-hidden="true"></i> Kategorien' +
            (S.catB !== 'all' ? ' <span class="browse-active-cat">' + App.esc(App.catName(S.catB)) + '</span>' : '') +
            '<i class="fa-solid fa-chevron-down toggle-icon" aria-hidden="true"></i>' +
            '</button>' +
            '<div class="browse-cats' + (S.bCatOpen ? ' open' : '') + '" id="browseCategoryFilters"></div>' +
            '</div>' +
            '<p class="list-count" id="browseCount" aria-live="polite"></p>' +
            '<div class="browse-list" id="browseList"></div>';

        E.browseSearchInput = document.getElementById('browseSearchInput');
        E.browseSearchClear = document.getElementById('browseSearchClear');
        E.browseCatToggle = document.getElementById('browseCatToggle');
        E.browseCategoryFilters = document.getElementById('browseCategoryFilters');
        E.browseList = document.getElementById('browseList');
        E.browseCount = document.getElementById('browseCount');

        E.browseSearchInput.addEventListener('input', function() {
            S.bQ = this.value;
            E.browseSearchClear.classList.toggle('show', this.value.length > 0);
            App.rBrowseList();
        });

        E.browseSearchClear.addEventListener('click', function() {
            E.browseSearchInput.value = '';
            S.bQ = '';
            E.browseSearchClear.classList.remove('show');
            E.browseSearchInput.focus();
            App.rBrowseList();
        });

        E.browseCatToggle.addEventListener('click', function() {
            S.bCatOpen = !S.bCatOpen;
            E.browseCatToggle.classList.toggle('open', S.bCatOpen);
            E.browseCatToggle.setAttribute('aria-expanded', String(S.bCatOpen));
            E.browseCategoryFilters.classList.toggle('open', S.bCatOpen);
        });

        App.rBrowseCats();
        App.rBrowseList();
    };

    App.rBrowseCats = function() {
        if (!E.browseCategoryFilters) return;

        var counts = App.categoryCounts();
        var keys = Object.keys(CATS);

        var html = '<button type="button" class="browse-cat-chip' + (S.catB === 'all' ? ' active' : '') +
            '" data-cat="all" aria-pressed="' + (S.catB === 'all') + '">Alle</button>';

        for (var i = 0; i < keys.length; i++) {
            if (!counts[keys[i]]) continue;
            html += '<button type="button" class="browse-cat-chip' + (S.catB === keys[i] ? ' active' : '') +
                '" data-cat="' + keys[i] + '" aria-pressed="' + (S.catB === keys[i]) +
                '" style="' + App.escAttr(App.catStyle(keys[i])) + '">' +
                App.esc(CATS[keys[i]].name) + ' (' + counts[keys[i]] + ')</button>';
        }

        E.browseCategoryFilters.innerHTML = html;

        delegate(E.browseCategoryFilters, '.browse-cat-chip', function(ch) {
            S.catB = ch.getAttribute('data-cat');
            markActiveChip(E.browseCategoryFilters, '.browse-cat-chip', ch);
            App.rBrowseList();
            updateBrowseToggleLabel();
        });
    };

    function markActiveChip(container, selector, chosen) {
        var all = container.querySelectorAll(selector);
        for (var i = 0; i < all.length; i++) {
            var on = all[i] === chosen;
            all[i].classList.toggle('active', on);
            all[i].setAttribute('aria-pressed', on ? 'true' : 'false');
        }
    }

    function updateBrowseToggleLabel() {
        if (!E.browseCatToggle) return;
        var label = E.browseCatToggle.querySelector('.browse-active-cat');

        if (S.catB === 'all') {
            if (label && label.parentNode) label.parentNode.removeChild(label);
            return;
        }

        if (!label) {
            label = document.createElement('span');
            label.className = 'browse-active-cat';
            E.browseCatToggle.insertBefore(label, E.browseCatToggle.querySelector('.toggle-icon'));
        }
        label.textContent = App.catName(S.catB);
    }

    App.rBrowseList = function() {
        if (!E.browseList) return;

        var list = App.filterSops(S.catB, S.bQ);
        var docs = S.catB === 'all' ? App.filterDocs(S.bQ) : [];
        var html = '';

        for (var i = 0; i < list.length; i++) {
            var d = list[i];
            html += '<button type="button" class="browse-item" data-id="' + App.escAttr(d.id) + '"' +
                ' style="' + App.escAttr(App.catStyle(d.category)) + '">' +
                '<span class="bi-dot"></span>' +
                '<span class="bi-name">' + App.sopName(d, S.bQ) + '</span>' +
                '<span class="bi-cat">' + App.esc(App.catName(d.category)) + '</span>' +
                '<i class="fa-solid fa-chevron-right bi-arrow" aria-hidden="true"></i>' +
                '</button>';
        }

        if (docs.length) {
            html += '<p class="browse-group"><i class="fa-solid fa-scale-balanced" aria-hidden="true"></i> Statuten</p>';
            for (var j = 0; j < docs.length; j++) {
                var doc = docs[j];
                html += '<button type="button" class="browse-item browse-item-doc" data-id="' + App.escAttr(doc.id) + '"' +
                    ' style="' + App.escAttr(App.catStyle(doc.category)) + '">' +
                    '<span class="bi-dot"></span>' +
                    '<span class="bi-name">' + App.hl(doc.short, S.bQ) + '</span>' +
                    '<span class="bi-cat">Statut</span>' +
                    '<i class="fa-solid fa-chevron-right bi-arrow" aria-hidden="true"></i>' +
                    '</button>';
            }
        }

        if (!list.length && !docs.length) {
            html = '<div class="search-empty"><i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>' +
                '<p>Keine SOPs gefunden.</p>' +
                (S.catB !== 'all' || S.bQ ? '<button type="button" class="empty-reset" id="browseReset">Filter zurücksetzen</button>' : '') +
                '</div>';
        }

        E.browseList.innerHTML = html;

        if (E.browseCount) {
            E.browseCount.textContent = list.length === 1
                ? '1 Patientenpfad'
                : list.length + ' Patientenpfade';
        }

        var reset = document.getElementById('browseReset');
        if (reset) {
            reset.addEventListener('click', function() {
                S.catB = 'all';
                S.bQ = '';
                App.rBrowse();
            });
        }

        delegate(E.browseList, '.browse-item', function(it) {
            App.pushNav(it.getAttribute('data-id'));
        });

        App.applyStagger(E.browseList.querySelectorAll('.browse-item'), 'stagger-item');
    };

    // ============================================
    // VOLLTEXTSUCHE (Vorschlaege 22 - 25)
    // ============================================

    var SCOPES = [
        { key: 'all', label: 'Alles', icon: 'fa-layer-group' },
        { key: 'name', label: 'Pfadnamen', icon: 'fa-book-medical' },
        { key: 'text', label: 'Im Text', icon: 'fa-file-lines' },
        { key: 'drug', label: 'Wirkstoffe', icon: 'fa-prescription-bottle-medical' }
    ];

    App.rSearch = function() {
        if (!E.searchResultsArea) return;

        var query = S.sQ.trim();

        if (!query) {
            renderScopes(null);
            E.searchResultsArea.innerHTML = '<div class="search-empty">' +
                '<i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>' +
                '<p>Suchbegriff eingeben. Abkürzungen (LAE, STEMI, HIT), Umlaut­schreibweisen ' +
                'und Wirkstoffnamen werden erkannt.</p></div>';
            return;
        }

        var res = App.query(query, { fuzzy: true });
        renderScopes(res);

        var html = '';

        // --- Hinweis, solange der Volltext noch unterwegs ist ---
        if (!res.textSearched) {
            html += '<div class="search-state" role="status">' +
                '<i class="fa-solid fa-cloud-arrow-down fa-fw" aria-hidden="true"></i>' +
                '<span>Der Volltext wird noch geladen. Bis dahin werden Pfadnamen, ' +
                'Abkürzungen und Kapitelüberschriften durchsucht.</span></div>';
        }

        // --- Wirkstoffe (Vorschlag 23) ---
        if ((S.scope === 'all' || S.scope === 'drug') && res.drugs.length) {
            html += drugPanels(res.drugs, query);
        }

        // --- Pfade ---
        var sops = filterByScope(res.sops);

        if (!sops.length && !(S.scope !== 'name' && res.drugs.length)) {
            html += '<div class="search-empty">' +
                '<i class="fa-solid fa-circle-xmark" aria-hidden="true"></i>' +
                '<p>Keine Ergebnisse für &bdquo;' + App.esc(query) + '&ldquo;</p></div>';
            E.searchResultsArea.innerHTML = html;
            return;
        }

        if (sops.length) {
            var nDocs = 0;
            for (var n = 0; n < sops.length; n++) if (sops[n].sop.doc) nDocs++;
            var nPaths = sops.length - nDocs;
            var countParts = [];
            if (nPaths) countParts.push(nPaths === 1 ? '1 Patientenpfad' : nPaths + ' Patientenpfade');
            if (nDocs) countParts.push(nDocs === 1 ? '1 Statut' : nDocs + ' Statuten');
            html += '<p class="list-count">' + countParts.join(' · ') +
                (res.usedFuzzy ? ' · Schreibweise angenähert' : '') + '</p>';

            for (var i = 0; i < sops.length; i++) {
                html += resultMarkup(sops[i], query);
            }
        }

        E.searchResultsArea.innerHTML = html;

        delegate(E.searchResultsArea, '.sr-open', function(it) {
            App.pushNav(it.getAttribute('data-id'));
        });

        delegate(E.searchResultsArea, '.sr-hit', function(it, e) {
            e.stopPropagation();
            var sec = it.getAttribute('data-sec');
            App.pushNav(it.getAttribute('data-id'), sec === null ? undefined : parseInt(sec, 10));
        });

        delegate(E.searchResultsArea, '.drug-item', function(it) {
            var sec = it.getAttribute('data-sec');
            App.pushNav(it.getAttribute('data-id'), sec === null ? undefined : parseInt(sec, 10));
        });

        App.applyStagger(E.searchResultsArea.querySelectorAll('.search-result'), 'stagger-item');
    };

    function filterByScope(list) {
        if (S.scope === 'all') return list;
        if (S.scope === 'drug') return [];

        var out = [];
        for (var i = 0; i < list.length; i++) {
            var r = list[i];
            var byName = r.why === 'name' || r.why === 'alias' || r.why === 'fuzzy' || r.why === 'title';
            if (S.scope === 'name' && byName) out.push(r);
            else if (S.scope === 'text' && r.hits.length) out.push(r);
        }
        return out;
    }

    // ---------- Bereichswahl ----------
    function renderScopes(res) {
        var host = E.searchScope || document.getElementById('searchScope');
        if (!host) return;
        E.searchScope = host;

        if (!res) {
            host.innerHTML = '';
            return;
        }

        var counts = {
            all: res.sops.length + (res.drugs.length ? 1 : 0),
            name: 0,
            text: 0,
            drug: res.drugs.length
        };

        for (var i = 0; i < res.sops.length; i++) {
            var r = res.sops[i];
            if (r.why === 'name' || r.why === 'alias' || r.why === 'fuzzy' || r.why === 'title') counts.name++;
            if (r.hits.length) counts.text++;
        }

        // Ein Bereich ohne Treffer waere eine Sackgasse - er wird
        // erst gar nicht angeboten.
        if (!counts[S.scope]) S.scope = 'all';

        var html = '';
        for (var s = 0; s < SCOPES.length; s++) {
            var sc = SCOPES[s];
            if (sc.key !== 'all' && !counts[sc.key]) continue;
            html += '<button type="button" class="scope-chip" data-scope="' + sc.key + '"' +
                ' aria-pressed="' + (S.scope === sc.key) + '">' +
                '<i class="fa-solid ' + sc.icon + '" aria-hidden="true"></i> ' + sc.label +
                ' <span class="scope-chip-count">' + counts[sc.key] + '</span></button>';
        }

        host.innerHTML = html;

        delegate(host, '.scope-chip', function(chip) {
            S.scope = chip.getAttribute('data-scope');
            App.haptic('light');
            App.rSearch();
        });
    }

    // ---------- Ein Treffer ----------
    function resultMarkup(r, query) {
        var d = r.sop;
        var badge = badgeFor(r);

        var html = '<article class="search-result" style="' + App.escAttr(App.catStyle(d.category)) + '">' +
            '<button type="button" class="sr-open" data-id="' + App.escAttr(d.id) + '">' +
            '<span class="sr-title">' + App.sopName(d, query) + '</span>' +
            '<span class="sr-cat">' +
            '<i class="fa-solid fa-circle" style="color:var(--cat-color);font-size:.5rem" aria-hidden="true"></i> ' +
            App.esc(App.catName(d.category)) +
            (badge ? ' ' + badge : '') +
            '</span></button>';

        if (r.hits.length) {
            html += '<div class="sr-hits">';
            for (var i = 0; i < Math.min(r.hits.length, 3); i++) {
                var h = r.hits[i];
                html += '<button type="button" class="sr-hit" data-id="' + App.escAttr(d.id) +
                    '" data-sec="' + h.sec + '">' +
                    '<span class="sr-hit-sec">' + App.esc(h.title) + '</span>' +
                    '<span class="sr-hit-text">' + App.hl(h.snippet, query) + '</span>' +
                    '</button>';
            }
            if (r.hits.length > 3) {
                html += '<span class="sr-hit-more">+ ' + (r.hits.length - 3) + ' weitere Fundstellen</span>';
            }
            html += '</div>';
        }

        return html + '</article>';
    }

    function badgeFor(r) {
        if (r.why === 'alias') {
            return '<span class="sr-badge sr-badge-alias">' +
                '<i class="fa-solid fa-tag" aria-hidden="true"></i> Synonym</span>';
        }
        if (r.why === 'fuzzy') {
            return '<span class="sr-badge sr-badge-fuzzy">' +
                '<i class="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i> Schreibweise</span>';
        }
        if (r.why === 'title') {
            return '<span class="sr-badge">Kapitel</span>';
        }
        if (r.why === 'text') {
            return '<span class="sr-badge">Im Text</span>';
        }
        if (r.why === 'source') {
            return '<span class="sr-badge">Quellen</span>';
        }
        return '';
    }

    // ---------- Wirkstoffe (Vorschlag 23) ----------
    // Der Build hat vermerkt, in welchen SOPs ein Wirkstoff vorkommt.
    // Die zugehoerige Textstelle wird hier aus dem Reintext geholt -
    // so steht neben dem Pfadnamen gleich der Satz mit der Dosierung.
    function drugPanels(drugs, query) {
        var html = '';

        for (var i = 0; i < drugs.length; i++) {
            var drug = drugs[i];
            html += '<section class="drug-panel">' +
                '<h2 class="drug-head">' +
                '<i class="fa-solid fa-prescription-bottle-medical" aria-hidden="true"></i> Wirkstoff' +
                '<span class="drug-name">' + App.hl(drug.name, query) + '</span>' +
                '</h2><div class="drug-list">';

            var shown = 0;
            for (var s = 0; s < drug.sops.length && shown < 6; s++) {
                var d = App.findSop(drug.sops[s]);
                if (!d) continue;
                var place = findDrugPlace(d, drug.name);
                html += '<button type="button" class="drug-item" data-id="' + App.escAttr(d.id) + '"' +
                    (place ? ' data-sec="' + place.sec + '"' : '') + '>' +
                    '<span class="drug-item-sop">' + App.esc(d.name) + '</span>' +
                    '<span class="drug-item-where">' +
                    (place
                        ? '<strong>' + App.esc(place.title) + ':</strong> ' + App.hl(place.snippet, drug.name)
                        : App.esc(App.catName(d.category))) +
                    '</span></button>';
                shown++;
            }

            if (drug.sops.length > shown) {
                html += '<span class="sr-hit-more">+ ' + (drug.sops.length - shown) + ' weitere Pfade</span>';
            }

            html += '</div></section>';
        }

        return html;
    }

    function findDrugPlace(d, drugName) {
        if (!d.text || !d.text.s) return null;

        var needle = App.fold(drugName);
        if (!needle) return null;

        for (var i = 0; i < d.text.s.length; i++) {
            var folded = App.secTextFolded(d, i);
            var at = folded.indexOf(needle);
            if (at === -1) continue;

            var plain = d.text.s[i] || '';
            var fm = App.foldMap(plain);
            var srcAt = fm.map[at] !== undefined ? fm.map[at] : 0;

            // Satz bzw. Listenpunkt um die Fundstelle herum.
            var start = plain.lastIndexOf('. ', srcAt);
            start = start === -1 ? Math.max(0, srcAt - 80) : start + 2;
            var end = plain.indexOf('. ', srcAt);
            end = end === -1 ? Math.min(plain.length, srcAt + 160) : end + 1;
            if (end - start > 240) end = Math.min(plain.length, srcAt + 160);

            return {
                sec: i,
                title: d.secTitles[i] || ('Abschnitt ' + (i + 1)),
                snippet: (start > 0 ? '…' : '') +
                    plain.slice(start, end).replace(/\s+/g, ' ').trim() +
                    (end < plain.length ? '…' : '')
            };
        }

        return null;
    }

})(window.SOPApp);
