(function() {
    'use strict';

    var CATEGORIES = {
        'kardio': { name: 'Kardiologie', icon: 'fa-heart-pulse' },
        'pulmo': { name: 'Pneumologie', icon: 'fa-lungs' },
        'gi': { name: 'Gastroenterologie', icon: 'fa-utensils' },
        'neuro': { name: 'Neurologie', icon: 'fa-brain' },
        'nephro': { name: 'Nephrologie', icon: 'fa-droplet' },
        'metab': { name: 'Metabolisch', icon: 'fa-flask' },
        'haem': { name: 'H\u00e4matologie', icon: 'fa-syringe' },
        'infekt': { name: 'Infektiologie', icon: 'fa-virus' },
        'tox': { name: 'Toxikologie', icon: 'fa-skull-crossbones' },
        'leit': { name: 'Leitsymptom', icon: 'fa-stethoscope' },
        'sonst': { name: 'Sonstige', icon: 'fa-circle-info' }
    };

    var CATEGORY_NAME_MAP = {};
    (function() {
        var keys = Object.keys(CATEGORIES);
        for (var i = 0; i < keys.length; i++) {
            CATEGORY_NAME_MAP[CATEGORIES[keys[i]].name.toLowerCase()] = keys[i];
        }
    })();

    var SECTION_ICONS = {
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

    var state = {
        data: [],
        activeTab: 'home',
        currentSopId: null,
        activeCatDesktop: 'all',
        activeCatBrowse: 'all',
        browseFilter: '',
        searchQuery: '',
        theme: 'light',
        isMobile: window.innerWidth < 1024
    };

    var el = {};

    function cacheElements() {
        var ids = [
            'app', 'mobileHeader', 'backBtn', 'mobileTitle',
            'themeToggleMobile', 'themeToggleMobileIcon',
            'sidebar', 'appLogo', 'searchInput', 'searchClear',
            'categoryFilters', 'navList', 'themeToggle', 'themeToggleIcon', 'themeToggleLabel',
            'mainContent', 'contentHeader', 'breadcrumb', 'desktopTocBtn',
            'contentScroll', 'viewHome', 'viewBrowse', 'viewSearch', 'viewSOP',
            'browseSearchInput', 'browseSearchClear', 'browseCategoryFilters', 'browseList',
            'searchViewInput', 'searchViewClear', 'searchResultsArea',
            'fabAction', 'bottomNav', 'metaThemeColor',
            'sectionPickerOverlay', 'sectionPickerBackdrop', 'sectionPickerClose',
            'sectionPickerList', 'sectionPickerPrint'
        ];
        for (var i = 0; i < ids.length; i++) {
            el[ids[i]] = document.getElementById(ids[i]);
        }
    }

    function safeStr(val) {
        if (val === undefined || val === null) return '';
        return String(val);
    }

    function resolveCategory(val) {
        if (!val) return 'sonst';
        var v = String(val).trim();
        if (CATEGORIES[v]) return v;
        var low = v.toLowerCase();
        if (CATEGORY_NAME_MAP[low]) return CATEGORY_NAME_MAP[low];
        var keys = Object.keys(CATEGORIES);
        for (var i = 0; i < keys.length; i++) {
            if (low.indexOf(keys[i]) !== -1 || keys[i].indexOf(low) !== -1) return keys[i];
        }
        return 'sonst';
    }

    function getSectionTitle(sec) {
        if (!sec) return '';
        if (typeof sec === 'string') return '';
        return safeStr(sec.title || sec.name || sec.heading || sec.label || sec.sectionTitle || '');
    }

    function getSectionContent(sec) {
        if (!sec) return '';
        if (typeof sec === 'string') return sec;
        return safeStr(sec.content || sec.html || sec.body || sec.text || sec.value || sec.sectionContent || '');
    }

    function normalizeItem(raw) {
        if (!raw || typeof raw !== 'object') return null;
        var title = safeStr(raw.title || raw.name || raw.heading || raw.label || '');
        var id = safeStr(raw.id || raw.sopId || raw.key || title.toLowerCase().replace(/[^a-z0-9\u00e4\u00f6\u00fc\u00df]+/g, '-').replace(/^-|-$/g, ''));
        var cat = resolveCategory(raw.category || raw.cat || raw.kategorie || raw.fach || '');
        var date = safeStr(raw.date || raw.datum || raw.lastUpdate || raw.stand || raw.version || '');
        var rawSections = raw.sections || raw.content || raw.abschnitte || raw.data || [];
        var sections = [];
        if (Array.isArray(rawSections)) {
            for (var i = 0; i < rawSections.length; i++) {
                var sec = rawSections[i];
                var st = getSectionTitle(sec);
                var sc = getSectionContent(sec);
                if (st || sc) {
                    sections.push({ title: st, content: sc });
                }
            }
        } else if (typeof rawSections === 'object' && rawSections !== null) {
            var secKeys = Object.keys(rawSections);
            for (var j = 0; j < secKeys.length; j++) {
                var val = rawSections[secKeys[j]];
                sections.push({
                    title: secKeys[j],
                    content: typeof val === 'string' ? val : (val && typeof val === 'object' ? safeStr(val.content || val.html || val.body || val.text || '') : safeStr(val))
                });
            }
        }
        if (!title && !id) return null;
        return { id: id, title: title, category: cat, date: date, sections: sections };
    }

    function loadData() {
        var raw = window.SOP_DATA;
        if (!raw) return [];
        if (!Array.isArray(raw)) {
            if (typeof raw === 'object') {
                var keys = Object.keys(raw);
                var arr = [];
                for (var k = 0; k < keys.length; k++) {
                    var item = raw[keys[k]];
                    if (item && typeof item === 'object') {
                        if (!item.id) item.id = keys[k];
                        arr.push(item);
                    }
                }
                raw = arr;
            } else {
                return [];
            }
        }
        var result = [];
        for (var i = 0; i < raw.length; i++) {
            var normalized = normalizeItem(raw[i]);
            if (normalized) result.push(normalized);
        }
        result.sort(function(a, b) {
            return a.title.localeCompare(b.title, 'de');
        });
        return result;
    }

    function clearStaleCaches() {
        if ('caches' in window) {
            try {
                caches.keys().then(function(names) {
                    for (var i = 0; i < names.length; i++) {
                        if (names[i].indexOf('sop-notaufnahme') === 0) {
                            caches.delete(names[i]);
                        }
                    }
                });
            } catch (e) {}
        }
    }

    function init() {
        cacheElements();
        loadTheme();
        clearStaleCaches();
        state.data = loadData();
        if (state.data.length > 0) {
            startApp();
        } else {
            setTimeout(function() {
                state.data = loadData();
                startApp();
            }, 500);
        }
    }

    function startApp() {
        renderHomeView();
        renderDesktopCategoryFilters();
        renderBrowseCategoryFilters();
        renderNavList();
        renderBrowseList();
        bindEvents();
        var hash = location.hash;
        if (hash.indexOf('#sop-') === 0) {
            var id = hash.substring(5);
            var sop = findSOP(id);
            if (sop) {
                history.replaceState(null, '', location.pathname + location.search);
                state.currentSopId = id;
                history.pushState(null, '', '#sop-' + id);
                showSOP(sop);
                return;
            }
        }
        showTab('home');
    }

    function findSOP(id) {
        for (var i = 0; i < state.data.length; i++) {
            if (state.data[i].id === id) return state.data[i];
        }
        return null;
    }

    function loadTheme() {
        var saved = localStorage.getItem('sop-theme');
        if (saved === 'dark' || saved === 'light') {
            state.theme = saved;
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            state.theme = 'dark';
        }
        applyTheme(state.theme);
    }

    function applyTheme(t) {
        state.theme = t;
        document.documentElement.setAttribute('data-theme', t);
        localStorage.setItem('sop-theme', t);
        var dark = t === 'dark';
        if (el.themeToggleIcon) el.themeToggleIcon.className = dark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
        if (el.themeToggleLabel) el.themeToggleLabel.textContent = dark ? 'Light Mode' : 'Dark Mode';
        if (el.themeToggleMobileIcon) el.themeToggleMobileIcon.className = dark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
        if (el.metaThemeColor) el.metaThemeColor.setAttribute('content', dark ? '#0b0f14' : '#ffffff');
    }

    function toggleTheme() {
        applyTheme(state.theme === 'dark' ? 'light' : 'dark');
    }

    function openSOP(id) {
        var sop = findSOP(id);
        if (!sop) return;
        state.currentSopId = id;
        history.pushState(null, '', '#sop-' + id);
        showSOP(sop);
    }

    function goBack() {
        state.currentSopId = null;
        closeSectionPicker();
        history.back();
    }

    function switchTab(tab) {
        if (state.currentSopId) {
            state.currentSopId = null;
            if (location.hash.indexOf('#sop-') === 0) {
                history.replaceState(null, '', location.pathname + location.search);
            }
        }
        state.activeTab = tab;
        showTab(tab);
    }

    function hideAllViews() {
        var views = [el.viewHome, el.viewBrowse, el.viewSearch, el.viewSOP];
        for (var i = 0; i < views.length; i++) {
            if (views[i]) {
                views[i].style.display = 'none';
                views[i].classList.remove('view-animate-in');
            }
        }
    }

    function activateView(v) {
        if (!v) return;
        v.style.display = 'block';
        void v.offsetWidth;
        v.classList.add('view-animate-in');
    }

    function showTab(tab) {
        state.activeTab = tab;
        state.currentSopId = null;
        closeSectionPicker();
        hideAllViews();
        if (tab === 'home') {
            activateView(el.viewHome);
        } else if (tab === 'browse') {
            activateView(el.viewBrowse);
        } else if (tab === 'search') {
            activateView(el.viewSearch);
            if (el.searchResultsArea && !el.searchResultsArea.innerHTML.trim()) {
                performSearch('');
            }
        }
        if (el.fabAction) el.fabAction.classList.remove('visible');
        if (el.contentScroll) el.contentScroll.scrollTop = 0;
        updateMobileHeader();
        updateBottomNav();
        updateBreadcrumb();
        updateDesktopNavActive();
        updateDesktopTocBtn();
    }

    function showSOP(sop) {
        closeSectionPicker();
        hideAllViews();
        renderSOP(sop);
        activateView(el.viewSOP);
        if (el.contentScroll) el.contentScroll.scrollTop = 0;
        if (el.fabAction) el.fabAction.classList.add('visible');
        updateMobileHeader();
        updateBottomNav();
        updateBreadcrumb();
        updateDesktopNavActive();
        updateDesktopTocBtn();
    }

    function updateMobileHeader() {
        if (!el.backBtn || !el.mobileTitle) return;
        if (state.currentSopId) {
            el.backBtn.classList.remove('hidden');
            var sop = findSOP(state.currentSopId);
            el.mobileTitle.textContent = sop ? sop.title : 'SOP';
        } else {
            el.backBtn.classList.add('hidden');
            if (state.activeTab === 'home') el.mobileTitle.textContent = 'Patientenpfade: ZNA';
            else if (state.activeTab === 'browse') el.mobileTitle.textContent = 'Alle SOPs';
            else if (state.activeTab === 'search') el.mobileTitle.textContent = 'Suche';
        }
    }

    function updateBottomNav() {
        if (!el.bottomNav) return;
        var items = el.bottomNav.querySelectorAll('.bottom-nav-item');
        for (var i = 0; i < items.length; i++) {
            items[i].classList.toggle('active', items[i].getAttribute('data-tab') === state.activeTab);
        }
    }

    function updateBreadcrumb() {
        if (!el.breadcrumb) return;
        if (state.currentSopId) {
            var sop = findSOP(state.currentSopId);
            el.breadcrumb.innerHTML = '<a class="breadcrumb-link" data-breadcrumb="home">Start</a>' +
                '<i class="fa-solid fa-chevron-right breadcrumb-sep"></i>' +
                '<span>' + (sop ? escapeHtml(sop.title) : '') + '</span>';
        } else if (state.activeTab === 'home') {
            el.breadcrumb.innerHTML = '<span>\u00dcbersicht</span>';
        } else if (state.activeTab === 'browse') {
            el.breadcrumb.innerHTML = '<span>Alle SOPs</span>';
        } else if (state.activeTab === 'search') {
            el.breadcrumb.innerHTML = '<span>Suche</span>';
        }
    }

    function updateDesktopNavActive() {
        if (!el.navList) return;
        var items = el.navList.querySelectorAll('.nav-item');
        for (var i = 0; i < items.length; i++) {
            items[i].classList.toggle('active', items[i].getAttribute('data-sop-id') === state.currentSopId);
        }
    }

    function updateDesktopTocBtn() {
        if (!el.desktopTocBtn) return;
        el.desktopTocBtn.style.display = state.currentSopId ? '' : 'none';
    }

    function escapeHtml(text) {
        var d = document.createElement('div');
        d.textContent = safeStr(text);
        return d.innerHTML;
    }

    function countByCategory(cat) {
        if (cat === 'all') return state.data.length;
        var c = 0;
        for (var i = 0; i < state.data.length; i++) {
            if (state.data[i].category === cat) c++;
        }
        return c;
    }

    function renderHomeView() {
        if (!el.viewHome) return;
        var totalSOPs = state.data.length;
        var catKeys = Object.keys(CATEGORIES);
        var usedCats = [];
        for (var c = 0; c < catKeys.length; c++) {
            if (countByCategory(catKeys[c]) > 0) usedCats.push(catKeys[c]);
        }
        var html = '<div class="home-hero">' +
            '<img src="Basislogo_farbig.png" alt="Klinikum St. Georg Leipzig" class="home-logo-image">' +
            '<h1 class="home-title">Patientenpfade: ZNA</h1>' +
            '<p class="home-subtitle">Standardarbeitsanweisungen f\u00fcr die Notaufnahme \u2013 AG Klinische Pfade</p>' +
            '<div class="home-stats">' +
            '<div class="home-stat"><div class="home-stat-value">' + totalSOPs + '</div><div class="home-stat-label">SOPs</div></div>' +
            '<div class="home-stat"><div class="home-stat-value">' + usedCats.length + '</div><div class="home-stat-label">Kategorien</div></div>' +
            '</div></div>' +
            '<h2 class="home-section-title">Kategorien</h2>' +
            '<div class="cat-grid">';
        for (var i = 0; i < usedCats.length; i++) {
            var k = usedCats[i];
            var cat = CATEGORIES[k];
            var cnt = countByCategory(k);
            html += '<div class="cat-card cat-' + k + '" data-category="' + k + '">' +
                '<div class="cat-card-icon"><i class="fa-solid ' + cat.icon + '"></i></div>' +
                '<div class="cat-card-info"><div class="cat-card-title">' + escapeHtml(cat.name) + '</div>' +
                '<div class="cat-card-count">' + cnt + ' SOP' + (cnt !== 1 ? 's' : '') + '</div></div></div>';
        }
        if (usedCats.length === 0 && totalSOPs === 0) {
            html += '<div class="browse-empty"><i class="fa-solid fa-database"></i><p>Keine SOP-Daten geladen.</p></div>';
        }
        html += '</div>';
        el.viewHome.innerHTML = html;
    }

    function buildCatPills(activeVal) {
        var html = '<button class="cat-pill' + (activeVal === 'all' ? ' active' : '') + '" data-cat="all">Alle</button>';
        var catKeys = Object.keys(CATEGORIES);
        for (var i = 0; i < catKeys.length; i++) {
            var k = catKeys[i];
            if (countByCategory(k) > 0) {
                html += '<button class="cat-pill' + (activeVal === k ? ' active' : '') + '" data-cat="' + k + '">' + escapeHtml(CATEGORIES[k].name) + '</button>';
            }
        }
        return html;
    }

    function renderDesktopCategoryFilters() {
        if (!el.categoryFilters) return;
        el.categoryFilters.innerHTML = buildCatPills(state.activeCatDesktop);
    }

    function renderBrowseCategoryFilters() {
        if (!el.browseCategoryFilters) return;
        el.browseCategoryFilters.innerHTML = buildCatPills(state.activeCatBrowse);
    }

    function getFilteredData(catFilter, textFilter) {
        var result = [];
        var q = (textFilter || '').toLowerCase().trim();
        for (var i = 0; i < state.data.length; i++) {
            var s = state.data[i];
            if (catFilter !== 'all' && s.category !== catFilter) continue;
            if (q) {
                var titleMatch = s.title.toLowerCase().indexOf(q) !== -1;
                var catName = CATEGORIES[s.category] ? CATEGORIES[s.category].name.toLowerCase() : '';
                var catMatch = catName.indexOf(q) !== -1;
                if (!titleMatch && !catMatch) continue;
            }
            result.push(s);
        }
        return result;
    }

    function renderNavList() {
        if (!el.navList) return;
        var items = getFilteredData(state.activeCatDesktop, el.searchInput ? el.searchInput.value : '');
        if (items.length === 0) {
            el.navList.innerHTML = '<div class="no-results-message">Keine SOPs gefunden</div>';
            return;
        }
        var html = '';
        for (var i = 0; i < items.length; i++) {
            var s = items[i];
            var catName = CATEGORIES[s.category] ? CATEGORIES[s.category].name : '';
            var isActive = s.id === state.currentSopId;
            html += '<a class="nav-item' + (isActive ? ' active' : '') + '" data-sop-id="' + s.id + '">' +
                '<div class="nav-item-dot cat-' + s.category + '"></div>' +
                '<div class="nav-item-content"><div class="nav-item-title">' + escapeHtml(s.title) + '</div>' +
                '<div class="nav-item-cat">' + escapeHtml(catName) + '</div></div></a>';
        }
        el.navList.innerHTML = html;
    }

    function renderBrowseList() {
        if (!el.browseList) return;
        var items = getFilteredData(state.activeCatBrowse, state.browseFilter);
        if (items.length === 0) {
            el.browseList.innerHTML = '<div class="browse-empty"><i class="fa-solid fa-folder-open"></i><p>Keine SOPs gefunden</p></div>';
            return;
        }
        var html = '';
        for (var i = 0; i < items.length; i++) {
            var s = items[i];
            var catName = CATEGORIES[s.category] ? CATEGORIES[s.category].name : '';
            html += '<a class="browse-item" data-sop-id="' + s.id + '">' +
                '<div class="browse-item-dot cat-' + s.category + '"></div>' +
                '<div class="browse-item-content"><div class="browse-item-title">' + escapeHtml(s.title) + '</div>' +
                '<div class="browse-item-cat">' + escapeHtml(catName) + '</div></div>' +
                '<i class="fa-solid fa-chevron-right browse-item-arrow"></i></a>';
        }
        el.browseList.innerHTML = html;
    }

    function getSectionIcon(title) {
        if (!title) return 'fa-file-lines';
        var keys = Object.keys(SECTION_ICONS);
        for (var i = 0; i < keys.length; i++) {
            if (title.indexOf(keys[i]) !== -1) return SECTION_ICONS[keys[i]];
        }
        return 'fa-file-lines';
    }

    function renderSOP(sop) {
        if (!el.viewSOP) return;
        var cat = sop.category || 'sonst';
        var catInfo = CATEGORIES[cat] || CATEGORIES['sonst'];
        var dateStr = sop.date || '';
        var html = '<div class="sop-view-pad">' +
            '<div class="sop-header">' +
            '<div class="sop-meta-row">' +
            '<span class="sop-badge cat-' + cat + '"><i class="fa-solid ' + catInfo.icon + '"></i> ' + escapeHtml(catInfo.name) + '</span>';
        if (dateStr) {
            html += '<span class="sop-date">Stand: ' + escapeHtml(dateStr) + '</span>';
        }
        html += '</div><h1 class="sop-title">' + escapeHtml(sop.title) + '</h1></div>';
        html += '<div class="sop-body">';
        if (sop.sections && sop.sections.length > 0) {
            for (var i = 0; i < sop.sections.length; i++) {
                var sec = sop.sections[i];
                var secTitle = sec.title || '';
                var secContent = sec.content || '';
                var icon = getSectionIcon(secTitle);
                html += '<div class="sop-section cat-' + cat + '">' +
                    '<div class="section-header" role="button" tabindex="0">' +
                    '<div class="section-title"><div class="section-icon"><i class="fa-solid ' + icon + '"></i></div>' +
                    '<span>' + escapeHtml(secTitle) + '</span></div>' +
                    '<i class="fa-solid fa-chevron-down section-chevron"></i></div>' +
                    '<div class="section-body"><div class="section-collapse">' +
                    '<div class="section-content">' + secContent + '</div>' +
                    '</div></div></div>';
            }
        } else {
            html += '<div class="browse-empty"><p>Keine Abschnitte verf\u00fcgbar</p></div>';
        }
        html += '</div></div>';
        el.viewSOP.innerHTML = html;
    }

    function stripHtml(h) {
        var tmp = document.createElement('div');
        tmp.innerHTML = safeStr(h);
        return tmp.textContent || tmp.innerText || '';
    }

    function highlightText(text, query) {
        if (!query) return escapeHtml(text);
        var escaped = escapeHtml(text);
        var q = escapeHtml(query);
        var re = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
        return escaped.replace(re, '<mark class="highlight">$1</mark>');
    }

    function performSearch(query) {
        if (!el.searchResultsArea) return;
        var q = (query || '').trim();
        if (!q) {
            el.searchResultsArea.innerHTML = '<div class="search-empty"><i class="fa-solid fa-magnifying-glass"></i><p>Suchbegriff eingeben, um in allen SOPs zu suchen</p></div>';
            return;
        }
        var ql = q.toLowerCase();
        var results = [];
        for (var i = 0; i < state.data.length; i++) {
            var sop = state.data[i];
            var titleMatch = sop.title.toLowerCase().indexOf(ql) !== -1;
            var contentMatches = [];
            if (sop.sections) {
                for (var j = 0; j < sop.sections.length; j++) {
                    var sec = sop.sections[j];
                    var plain = stripHtml(sec.content);
                    var idx = plain.toLowerCase().indexOf(ql);
                    if (idx !== -1) {
                        var start = Math.max(0, idx - 40);
                        var end = Math.min(plain.length, idx + q.length + 60);
                        var snippet = (start > 0 ? '\u2026' : '') + plain.substring(start, end) + (end < plain.length ? '\u2026' : '');
                        contentMatches.push({ section: sec.title || '', snippet: snippet });
                    }
                }
            }
            if (titleMatch || contentMatches.length > 0) {
                results.push({ sop: sop, titleMatch: titleMatch, matches: contentMatches });
            }
        }
        if (results.length === 0) {
            el.searchResultsArea.innerHTML = '<div class="search-empty"><i class="fa-solid fa-magnifying-glass"></i><p>Keine Ergebnisse f\u00fcr \u201E' + escapeHtml(q) + '\u201C</p></div>';
            return;
        }
        var html = '<div class="search-results-header"><h2>Ergebnisse</h2><span class="search-count-badge">' + results.length + '</span></div><div class="search-results-list">';
        for (var r = 0; r < results.length; r++) {
            var res = results[r];
            var title = highlightText(res.sop.title, q);
            var context = '';
            if (res.matches.length > 0) {
                context = '<div class="search-result-context">' + escapeHtml(res.matches[0].section) + ': ' + highlightText(res.matches[0].snippet, q) + '</div>';
            }
            html += '<div class="search-result-item" data-sop-id="' + res.sop.id + '"><div class="search-result-title">' + title + '</div>' + context + '</div>';
        }
        html += '</div>';
        el.searchResultsArea.innerHTML = html;
    }

    function openSectionPicker() {
        if (!state.currentSopId) return;
        renderSectionPicker();
        if (el.sectionPickerOverlay) el.sectionPickerOverlay.classList.add('open');
    }

    function closeSectionPicker() {
        if (el.sectionPickerOverlay) el.sectionPickerOverlay.classList.remove('open');
    }

    function isPickerOpen() {
        return el.sectionPickerOverlay && el.sectionPickerOverlay.classList.contains('open');
    }

    function renderSectionPicker() {
        if (!el.sectionPickerList) return;
        var sop = findSOP(state.currentSopId);
        if (!sop || !sop.sections || sop.sections.length === 0) {
            el.sectionPickerList.innerHTML = '';
            return;
        }
        var cat = sop.category || 'sonst';
        var html = '';
        for (var i = 0; i < sop.sections.length; i++) {
            var sec = sop.sections[i];
            var secTitle = sec.title || '';
            var icon = getSectionIcon(secTitle);
            html += '<div class="section-picker-item" data-section-idx="' + i + '">' +
                '<div class="section-picker-item-icon cat-' + cat + '"><i class="fa-solid ' + icon + '"></i></div>' +
                '<div class="section-picker-item-title">' + escapeHtml(secTitle) + '</div></div>';
        }
        el.sectionPickerList.innerHTML = html;
    }

    function jumpToSection(idx) {
        closeSectionPicker();
        setTimeout(function() {
            if (!el.viewSOP || !el.contentScroll) return;
            var sections = el.viewSOP.querySelectorAll('.sop-section');
            if (idx < 0 || idx >= sections.length) return;
            var target = sections[idx];
            if (!target.classList.contains('open')) {
                target.classList.add('open');
            }
            setTimeout(function() {
                var containerRect = el.contentScroll.getBoundingClientRect();
                var targetRect = target.getBoundingClientRect();
                var scrollTop = targetRect.top - containerRect.top + el.contentScroll.scrollTop - 12;
                el.contentScroll.scrollTo({ top: Math.max(0, scrollTop), behavior: 'smooth' });
            }, 80);
        }, 180);
    }

    function debounce(fn, delay) {
        var timer = null;
        return function() {
            var ctx = this, args = arguments;
            clearTimeout(timer);
            timer = setTimeout(function() { fn.apply(ctx, args); }, delay);
        };
    }

    function bindEvents() {
        if (el.themeToggle) el.themeToggle.addEventListener('click', toggleTheme);
        if (el.themeToggleMobile) el.themeToggleMobile.addEventListener('click', toggleTheme);
        if (el.backBtn) el.backBtn.addEventListener('click', goBack);

        if (el.appLogo) {
            el.appLogo.addEventListener('click', function() {
                state.currentSopId = null;
                if (location.hash) history.replaceState(null, '', location.pathname + location.search);
                showTab('home');
            });
        }

        if (el.bottomNav) {
            el.bottomNav.addEventListener('click', function(e) {
                var btn = e.target.closest('.bottom-nav-item');
                if (!btn) return;
                var tab = btn.getAttribute('data-tab');
                if (tab) switchTab(tab);
            });
        }

        if (el.viewHome) {
            el.viewHome.addEventListener('click', function(e) {
                var card = e.target.closest('.cat-card');
                if (card) {
                    var cat = card.getAttribute('data-category');
                    if (cat) {
                        state.activeCatBrowse = cat;
                        renderBrowseCategoryFilters();
                        renderBrowseList();
                        switchTab('browse');
                    }
                }
            });
        }

        if (el.searchInput) {
            el.searchInput.addEventListener('input', debounce(function() {
                var v = el.searchInput.value;
                if (el.searchClear) el.searchClear.classList.toggle('visible', v.length > 0);
                renderNavList();
            }, 120));
        }

        if (el.searchClear) {
            el.searchClear.addEventListener('click', function() {
                if (el.searchInput) el.searchInput.value = '';
                el.searchClear.classList.remove('visible');
                renderNavList();
            });
        }

        if (el.categoryFilters) {
            el.categoryFilters.addEventListener('click', function(e) {
                var pill = e.target.closest('.cat-pill');
                if (!pill) return;
                state.activeCatDesktop = pill.getAttribute('data-cat') || 'all';
                renderDesktopCategoryFilters();
                renderNavList();
            });
        }

        if (el.navList) {
            el.navList.addEventListener('click', function(e) {
                var item = e.target.closest('.nav-item');
                if (!item) return;
                e.preventDefault();
                var id = item.getAttribute('data-sop-id');
                if (id) openSOP(id);
            });
        }

        if (el.browseSearchInput) {
            el.browseSearchInput.addEventListener('input', debounce(function() {
                state.browseFilter = el.browseSearchInput.value;
                if (el.browseSearchClear) el.browseSearchClear.classList.toggle('visible', state.browseFilter.length > 0);
                renderBrowseList();
            }, 120));
        }

        if (el.browseSearchClear) {
            el.browseSearchClear.addEventListener('click', function() {
                if (el.browseSearchInput) el.browseSearchInput.value = '';
                state.browseFilter = '';
                el.browseSearchClear.classList.remove('visible');
                renderBrowseList();
            });
        }

        if (el.browseCategoryFilters) {
            el.browseCategoryFilters.addEventListener('click', function(e) {
                var pill = e.target.closest('.cat-pill');
                if (!pill) return;
                state.activeCatBrowse = pill.getAttribute('data-cat') || 'all';
                renderBrowseCategoryFilters();
                renderBrowseList();
            });
        }

        if (el.browseList) {
            el.browseList.addEventListener('click', function(e) {
                var item = e.target.closest('.browse-item');
                if (!item) return;
                e.preventDefault();
                var id = item.getAttribute('data-sop-id');
                if (id) openSOP(id);
            });
        }

        if (el.searchViewInput) {
            el.searchViewInput.addEventListener('input', debounce(function() {
                state.searchQuery = el.searchViewInput.value;
                if (el.searchViewClear) el.searchViewClear.classList.toggle('visible', state.searchQuery.length > 0);
                performSearch(state.searchQuery);
            }, 200));
        }

        if (el.searchViewClear) {
            el.searchViewClear.addEventListener('click', function() {
                if (el.searchViewInput) el.searchViewInput.value = '';
                state.searchQuery = '';
                el.searchViewClear.classList.remove('visible');
                performSearch('');
            });
        }

        if (el.searchResultsArea) {
            el.searchResultsArea.addEventListener('click', function(e) {
                var item = e.target.closest('.search-result-item');
                if (!item) return;
                var id = item.getAttribute('data-sop-id');
                if (id) openSOP(id);
            });
        }

        if (el.breadcrumb) {
            el.breadcrumb.addEventListener('click', function(e) {
                var link = e.target.closest('[data-breadcrumb]');
                if (!link) return;
                goBack();
            });
        }

        if (el.fabAction) {
            el.fabAction.addEventListener('click', openSectionPicker);
        }

        if (el.desktopTocBtn) {
            el.desktopTocBtn.addEventListener('click', openSectionPicker);
        }

        if (el.sectionPickerBackdrop) {
            el.sectionPickerBackdrop.addEventListener('click', closeSectionPicker);
        }

        if (el.sectionPickerClose) {
            el.sectionPickerClose.addEventListener('click', closeSectionPicker);
        }

        if (el.sectionPickerList) {
            el.sectionPickerList.addEventListener('click', function(e) {
                var item = e.target.closest('.section-picker-item');
                if (!item) return;
                var idx = parseInt(item.getAttribute('data-section-idx'), 10);
                if (!isNaN(idx)) jumpToSection(idx);
            });
        }

        if (el.sectionPickerPrint) {
            el.sectionPickerPrint.addEventListener('click', function() {
                closeSectionPicker();
                setTimeout(function() { window.print(); }, 250);
            });
        }

        document.addEventListener('click', function(e) {
            var header = e.target.closest('.section-header');
            if (!header) return;
            var section = header.parentElement;
            if (section && section.classList.contains('sop-section')) {
                section.classList.toggle('open');
            }
        });

        window.addEventListener('popstate', function() {
            closeSectionPicker();
            var hash = location.hash;
            if (hash.indexOf('#sop-') === 0) {
                var id = hash.substring(5);
                var sop = findSOP(id);
                if (sop) {
                    state.currentSopId = id;
                    showSOP(sop);
                    return;
                }
            }
            state.currentSopId = null;
            showTab(state.activeTab);
        });

        window.addEventListener('resize', debounce(function() {
            state.isMobile = window.innerWidth < 1024;
        }, 200));

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                if (isPickerOpen()) {
                    closeSectionPicker();
                } else if (state.currentSopId) {
                    goBack();
                }
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();