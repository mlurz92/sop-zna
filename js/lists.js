/* ============================================================
   lists.js - Seitenleiste, Startseite, Uebersicht, Volltextsuche
   ------------------------------------------------------------
   Alle Listenansichten der Anwendung. Namen und Ausschnitte
   werden vor dem Einbau entschaerft; einzig <mark> kommt aus
   der Trefferhervorhebung hinzu.
   ============================================================ */
(function(App) {
    'use strict';

    var S = App.S;
    var E = App.E;
    var CATS = App.CATS;

    // Ein Listener je Liste statt einer je Zeile. Bei 73 Eintraegen
    // sparte das 73 Registrierungen pro Aufbau - sie waren ein
    // spuerbarer Teil des ersten Frames eines Ansichtswechsels.
    function delegate(container, selector, handler) {
        if (!container || container._delegated === selector) return;
        container._delegated = selector;
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
                '" data-cat="' + keys[i] + '" aria-pressed="' + (S.catD === keys[i]) + '">' +
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

        if (!list.length) {
            html = '<li class="nav-empty">Kein Treffer</li>';
        }

        E.navList.innerHTML = html;

        delegate(E.navList, 'a[data-id]', function(a, e) {
            e.preventDefault();
            App.pushNav(a.getAttribute('data-id'));
        });

        // Aktiven Eintrag sanft in den Blick holen
        var act = E.navList.querySelector('a.active');
        if (act && act.scrollIntoView && !App.MOTION.reduced) {
            act.scrollIntoView({ block: 'nearest' });
        }
    };

    // ============================================
    // STARTSEITE
    // ============================================
    App.rHome = function() {
        if (E.heroArea) {
            E.heroArea.innerHTML = '<img class="hero-logo" src="img/Basislogo_farbig.png" alt="Klinikum St. Georg">' +
                '<h1 class="hero-title">Patientenpfade</h1>' +
                '<p class="hero-subtitle">Zentrale Notaufnahme</p>' +
                '<p class="hero-org">AG Klinische Pfade</p>' +
                '<button type="button" class="hero-search" id="heroSearchBtn">' +
                '<i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>' +
                '<span class="hero-search-label">SOP schnell finden&hellip;</span>' +
                '<kbd class="hero-search-kbd">Strg K</kbd>' +
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

            var gh = '<button type="button" class="cat-card cat-card-all" data-cat="all" style="--cat-color:var(--primary)">' +
                '<i class="fa-solid fa-list cat-card-icon" style="color:var(--primary)" aria-hidden="true"></i>' +
                '<span class="cat-card-name">Alle SOPs</span>' +
                '<span class="cat-card-count">' + S.data.length + ' Pfade</span>' +
                '</button>';

            for (var i = 0; i < keys.length; i++) {
                if (!counts[keys[i]]) continue;
                var cl = App.gc(keys[i]);
                gh += '<button type="button" class="cat-card" data-cat="' + keys[i] + '" style="--cat-color:' + cl + '">' +
                    '<i class="fa-solid ' + CATS[keys[i]].icon + ' cat-card-icon" style="color:' + cl + '" aria-hidden="true"></i>' +
                    '<span class="cat-card-name">' + App.esc(CATS[keys[i]].name) + '</span>' +
                    '<span class="cat-card-count">' + counts[keys[i]] + ' SOPs</span>' +
                    '</button>';
            }

            E.catGrid.innerHTML = gh;

            delegate(E.catGrid, '.cat-card', function(c) {
                S.catB = c.getAttribute('data-cat');
                S.bQ = '';
                App.haptic('light');
                App.sTab('browse', 'push');
            });

            App.applyStagger(E.catGrid.querySelectorAll('.cat-card'), 'stagger-item');
        }

        if (E.homeInfo) {
            E.homeInfo.innerHTML = '<p class="info-count">' + S.data.length + ' Patientenpfade verfügbar</p>';
        }
    };

    // ============================================
    // UEBERSICHT (BROWSE)
    // ============================================
    App.rBrowse = function() {
        if (!E.viewBrowse) return;

        E.viewBrowse.innerHTML = '<h1 class="sr-only">Alle SOPs</h1>' +
            '<div class="browse-bar-top">' +
            '<div class="browse-search">' +
            '<i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>' +
            '<input type="search" id="browseSearchInput" placeholder="SOPs filtern..." aria-label="SOPs filtern" autocomplete="off" value="' + App.escAttr(S.bQ) + '">' +
            '<button type="button" class="browse-search-clear' + (S.bQ ? ' show' : '') + '" id="browseSearchClear" aria-label="Suche leeren"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>' +
            '</div>' +
            '<button type="button" class="browse-cat-toggle' + (S.bCatOpen ? ' open' : '') + '" id="browseCatToggle" aria-expanded="' + (!!S.bCatOpen) + '">' +
            '<i class="fa-solid fa-filter" aria-hidden="true"></i> Kategorien' +
            (S.catB !== 'all' ? ' <span class="browse-active-cat">' + App.esc(App.catName(S.catB)) + '</span>' : '') +
            '<i class="fa-solid fa-chevron-down toggle-icon" aria-hidden="true"></i>' +
            '</button>' +
            '<div class="browse-cats' + (S.bCatOpen ? ' open' : '') + '" id="browseCategoryFilters"></div>' +
            '</div>' +
            '<p class="list-count" id="browseCount" aria-live="polite"></p>' +
            '<div class="browse-list" id="browseList"></div>';

        // Elemente aus innerHTML stehen nicht im Puffer - neu holen
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
                '" data-cat="' + keys[i] + '" aria-pressed="' + (S.catB === keys[i]) + '">' +
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
        var html = '';

        for (var i = 0; i < list.length; i++) {
            var d = list[i];
            html += '<button type="button" class="browse-item" data-id="' + App.escAttr(d.id) + '">' +
                '<span class="bi-dot" style="background:' + App.gc(d.category) + '"></span>' +
                '<span class="bi-name">' + App.sopName(d, S.bQ) + '</span>' +
                '<span class="bi-cat">' + App.esc(App.catName(d.category)) + '</span>' +
                '<i class="fa-solid fa-chevron-right bi-arrow" aria-hidden="true"></i>' +
                '</button>';
        }

        if (!list.length) {
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
    // VOLLTEXTSUCHE
    // ============================================
    // Liefert bewertete Treffer samt Textausschnitt. Die Reintexte der
    // Abschnitte stammen aus dem Puffer in core.js - ohne ihn wuerde bei
    // jedem Tastendruck das HTML aller SOPs neu ausgelesen.
    App.searchSops = function(query) {
        var q = (query || '').toLowerCase().trim();
        var results = [];
        if (!q) return results;

        for (var i = 0; i < S.data.length; i++) {
            var d = S.data[i];
            var score = 0;
            var name = (d.name || '').toLowerCase();

            if (name === q) score += 30;
            else if (name.indexOf(q) === 0) score += 20;
            else if (name.indexOf(q) !== -1) score += 10;

            var secMatches = [];
            if (d.sections) {
                for (var j = 0; j < d.sections.length; j++) {
                    var sec = d.sections[j];
                    var secTitle = sec.title || '';
                    var txt = App.secTextLower(sec);
                    var idx = txt.indexOf(q);
                    if (idx === -1 && secTitle.toLowerCase().indexOf(q) === -1) continue;

                    score += 3;
                    if (idx === -1) idx = 0;

                    var plain = App.secText(sec);
                    var start = Math.max(0, idx - 60);
                    var end = Math.min(plain.length, idx + q.length + 60);
                    var snippet = (start > 0 ? '…' : '') +
                        plain.substring(start, end).replace(/\s+/g, ' ').trim() +
                        (end < plain.length ? '…' : '');
                    secMatches.push({ title: secTitle, snippet: snippet, idx: j });
                }
            }

            if (d.sources && App.sourcesTextLower(d).indexOf(q) !== -1) score += 1;

            if (score > 0) {
                results.push({ sop: d, score: score, secMatches: secMatches });
            }
        }

        results.sort(function(a, b) {
            if (b.score !== a.score) return b.score - a.score;
            return (a.sop.name || '').localeCompare(b.sop.name || '', 'de');
        });

        return results;
    };

    App.rSearch = function() {
        if (!E.searchResultsArea) return;

        if (!S.sQ.trim()) {
            E.searchResultsArea.innerHTML = '<div class="search-empty">' +
                '<i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>' +
                '<p>Suchbegriff eingeben, um alle Patientenpfade zu durchsuchen.</p></div>';
            return;
        }

        var results = App.searchSops(S.sQ);

        if (!results.length) {
            E.searchResultsArea.innerHTML = '<div class="search-empty">' +
                '<i class="fa-solid fa-circle-xmark" aria-hidden="true"></i>' +
                '<p>Keine Ergebnisse für &bdquo;' + App.esc(S.sQ) + '&ldquo;</p></div>';
            return;
        }

        var html = '<p class="list-count">' +
            (results.length === 1 ? '1 Treffer' : results.length + ' Treffer') + '</p>';

        for (var i = 0; i < results.length; i++) {
            var r = results[i];
            var d = r.sop;

            html += '<button type="button" class="search-result" data-id="' + App.escAttr(d.id) + '">' +
                '<span class="sr-title">' + App.sopName(d, S.sQ) + '</span>';

            if (r.secMatches.length) {
                html += '<span class="sr-snippet"><span class="sr-sec">' +
                    App.esc(r.secMatches[0].title) + '</span> ' +
                    App.hl(App.esc(r.secMatches[0].snippet), S.sQ) + '</span>';
            }

            html += '<span class="sr-cat"><i class="fa-solid fa-circle" style="color:' + App.gc(d.category) +
                ';font-size:.5rem" aria-hidden="true"></i> ' + App.esc(App.catName(d.category));

            if (r.secMatches.length > 1) {
                html += ' <span class="sr-more">· ' + r.secMatches.length + ' Abschnitte</span>';
            }

            html += '</span></button>';
        }

        E.searchResultsArea.innerHTML = html;

        delegate(E.searchResultsArea, '.search-result', function(it) {
            App.pushNav(it.getAttribute('data-id'));
        });

        App.applyStagger(E.searchResultsArea.querySelectorAll('.search-result'), 'stagger-item');
    };

})(window.SOPApp);
