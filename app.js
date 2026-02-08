(function() {
    'use strict';

    // --- Configuration ---

    const CONFIG = {
        animationDuration: 300,
        mobileBreakpoint: 1024,
        searchDebounce: 150
    };

    const CATEGORIES = {
        'kardio': { name: 'Kardiologie', icon: 'fa-heart-pulse', color: 'cat-kardio' },
        'pulmo': { name: 'Pneumologie', icon: 'fa-lungs', color: 'cat-pulmo' },
        'gi': { name: 'Gastroenterologie', icon: 'fa-utensils', color: 'cat-gi' },
        'neuro': { name: 'Neurologie', icon: 'fa-brain', color: 'cat-neuro' },
        'nephro': { name: 'Nephrologie', icon: 'fa-droplet', color: 'cat-nephro' },
        'metab': { name: 'Metabolisch', icon: 'fa-flask', color: 'cat-metab' },
        'haem': { name: 'Hämatologie', icon: 'fa-syringe', color: 'cat-haem' },
        'infekt': { name: 'Infektiologie', icon: 'fa-virus', color: 'cat-infekt' },
        'tox': { name: 'Toxikologie', icon: 'fa-skull-crossbones', color: 'cat-tox' },
        'leit': { name: 'Leitsymptom', icon: 'fa-stethoscope', color: 'cat-leit' },
        'sonst': { name: 'Sonstige', icon: 'fa-circle-info', color: 'cat-sonst' }
    };

    const SECTION_ICONS = {
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

    // --- State ---

    const state = {
        data: [],
        view: 'home', // 'home', 'sop', 'search'
        currentSopId: null,
        activeCategory: 'all',
        searchQuery: '',
        sidebarOpen: false,
        theme: 'light',
        isMobile: window.innerWidth < CONFIG.mobileBreakpoint
    };

    // --- DOM Cache ---

    const el = {};
    const elementIds = [
        'app', 'sidebar', 'mobileMenuBtn', 'sidebarOverlay', 'navList',
        'categoryFilters', 'themeToggle', 'searchInput', 'searchClear',
        'mainContent', 'contentScroll', 'breadcrumb', 'printBtn',
        'viewHome', 'viewSOP', 'viewSearch', 'searchResultsList', 'searchCount',
        'fabAction', 'appLogo', 'mobileTitle', 'mobileSearchBtn'
    ];

    function cacheElements() {
        elementIds.forEach(id => {
            el[id] = document.getElementById(id);
        });
    }

    // --- Initialization ---

    function init() {
        cacheElements();
        loadTheme();
        
        // Wait for data scripts to be executed
        if (window.SOP_DATA && Array.isArray(window.SOP_DATA)) {
            state.data = window.SOP_DATA.sort((a, b) => a.title.localeCompare(b.title, 'de'));
            startApp();
        } else {
            // Retry once after short delay if scripts loaded async
            setTimeout(() => {
                if (window.SOP_DATA) {
                    state.data = window.SOP_DATA.sort((a, b) => a.title.localeCompare(b.title, 'de'));
                    startApp();
                } else {
                    renderError('Daten konnten nicht geladen werden.');
                }
            }, 100);
        }
    }

    function startApp() {
        renderCategoryFilters();
        renderNavList();
        renderHomeGrid();
        bindEvents();
        handleRoute(); // Initial routing
        
        // Remove loading state if implemented
        document.body.classList.remove('loading');
    }

    // --- Routing ---

    function handleRoute() {
        const hash = window.location.hash;
        
        if (hash.startsWith('#sop-')) {
            const id = hash.substring(5);
            const sop = state.data.find(s => s.id === id);
            if (sop) {
                state.view = 'sop';
                state.currentSopId = id;
                renderSOP(sop);
                updateUIForView('sop');
            } else {
                window.location.hash = ''; // Reset if not found
            }
        } else if (hash.startsWith('#search=')) {
            const query = decodeURIComponent(hash.substring(8));
            state.view = 'search';
            state.searchQuery = query;
            if (el.searchInput) el.searchInput.value = query;
            performSearch(query);
            updateUIForView('search');
        } else {
            state.view = 'home';
            state.currentSopId = null;
            updateUIForView('home');
        }
        
        updateBreadcrumb();
        closeSidebar(); // Always close sidebar on route change on mobile
    }

    function navigateTo(hash) {
        window.location.hash = hash;
    }

    // --- Rendering Logic ---

    function updateUIForView(view) {
        // Hide all views
        el.viewHome.style.display = 'none';
        el.viewSOP.style.display = 'none';
        el.viewSearch.style.display = 'none';
        
        // Show active view
        if (view === 'home') {
            el.viewHome.style.display = 'block';
            el.mobileTitle.textContent = 'SOP Notaufnahme';
            el.fabAction.classList.remove('visible');
        } else if (view === 'sop') {
            el.viewSOP.style.display = 'block';
            el.mobileTitle.textContent = 'Detailansicht';
            // Scroll to top
            el.contentScroll.scrollTop = 0;
        } else if (view === 'search') {
            el.viewSearch.style.display = 'block';
            el.mobileTitle.textContent = 'Suche';
            el.fabAction.classList.remove('visible');
        }

        // Update Nav Active State
        const navItems = el.navList.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            if (view === 'sop' && item.dataset.id === state.currentSopId) {
                item.classList.add('active');
                // Scroll nav item into view if sidebar is visible
                if (!state.isMobile) {
                    item.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
                }
            } else {
                item.classList.remove('active');
            }
        });
    }

    function renderCategoryFilters() {
        const cats = ['all', ...Object.keys(CATEGORIES)];
        let html = '';
        
        cats.forEach(key => {
            const label = key === 'all' ? 'Alle' : CATEGORIES[key].name;
            const activeClass = key === state.activeCategory ? 'active' : '';
            html += `<button class="cat-pill ${activeClass}" data-cat="${key}">${label}</button>`;
        });
        
        el.categoryFilters.innerHTML = html;
    }

    function renderNavList() {
        const filteredData = state.activeCategory === 'all' 
            ? state.data 
            : state.data.filter(s => s.catKey === state.activeCategory);
            
        let html = '';
        
        if (filteredData.length === 0) {
            html = '<div style="padding: 20px; text-align: center; color: var(--text-tertiary);">Keine SOPs gefunden</div>';
        } else {
            filteredData.forEach(sop => {
                const cat = CATEGORIES[sop.catKey] || { name: 'Sonstige', color: 'cat-sonst' };
                html += `
                    <a href="#sop-${sop.id}" class="nav-item" data-id="${sop.id}">
                        <span class="nav-item-dot ${cat.color}"></span>
                        <div class="nav-item-content">
                            <span class="nav-item-title">${escapeHtml(sop.title)}</span>
                            <span class="nav-item-cat">${cat.name}</span>
                        </div>
                    </a>
                `;
            });
        }
        
        el.navList.innerHTML = html;
    }

    function renderHomeGrid() {
        let html = `
            <div class="home-hero">
                <div class="home-logo"><i class="fa-solid fa-heart-pulse"></i></div>
                <h1 class="home-title">SOP Notaufnahme</h1>
                <p class="home-subtitle">Standardisierte Handlungsanweisungen für die klinische Notfallmedizin. Schnell, offline verfügbar, evidenzbasiert.</p>
            </div>
            <div class="cat-grid">
        `;
        
        // Calculate counts
        const counts = {};
        state.data.forEach(sop => {
            counts[sop.catKey] = (counts[sop.catKey] || 0) + 1;
        });
        
        Object.keys(CATEGORIES).forEach(key => {
            const cat = CATEGORIES[key];
            const count = counts[key] || 0;
            if (count > 0) {
                html += `
                    <div class="cat-card ${cat.color}" data-cat="${key}">
                        <div class="cat-card-icon"><i class="fa-solid ${cat.icon}"></i></div>
                        <div class="cat-card-info">
                            <div class="cat-card-title">${cat.name}</div>
                            <div class="cat-card-count">${count} SOPs</div>
                        </div>
                        <i class="fa-solid fa-chevron-right" style="color: var(--text-tertiary); font-size: 0.8rem;"></i>
                    </div>
                `;
            }
        });
        
        html += '</div>';
        el.viewHome.innerHTML = html;
        
        // Bind Home Grid Clicks
        el.viewHome.querySelectorAll('.cat-card').forEach(card => {
            card.addEventListener('click', () => {
                const cat = card.dataset.cat;
                setCategory(cat);
                if (state.isMobile) {
                    openSidebar();
                } else {
                    // On desktop, maybe focus list
                    const firstItem = el.navList.querySelector('.nav-item');
                    if (firstItem) firstItem.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    function renderSOP(sop) {
        const cat = CATEGORIES[sop.catKey] || { name: 'Allgemein', icon: 'fa-file', color: 'cat-sonst' };
        
        let html = `
            <div class="sop-header">
                <div class="sop-meta-row">
                    <span class="sop-badge ${cat.color}"><i class="fa-solid ${cat.icon}"></i> ${cat.name}</span>
                    <span class="sop-date">Stand: ${sop.stand || 'Aktuell'}</span>
                </div>
                <h1 class="sop-title">${escapeHtml(sop.title)}</h1>
            </div>
            
            <div class="sop-actions">
                <button class="btn-ghost" id="expandAllBtn">
                    <i class="fa-solid fa-angles-down"></i> Alle öffnen
                </button>
            </div>
            
            <div class="sop-body">
        `;
        
        sop.sections.forEach((sec, index) => {
            const icon = SECTION_ICONS[sec.title] || 'fa-circle-dot';
            const isOpen = index === 0 ? 'open' : ''; // First section open by default
            
            html += `
                <div class="sop-section ${cat.color} ${isOpen}">
                    <div class="section-header">
                        <div class="section-title">
                            <div class="section-icon"><i class="fa-solid ${icon}"></i></div>
                            <span>${escapeHtml(sec.title)}</span>
                        </div>
                        <i class="fa-solid fa-chevron-down section-toggle-icon"></i>
                    </div>
                    <div class="section-content">
                        ${processHtmlContent(sec.html)}
                    </div>
                </div>
            `;
        });
        
        if (sop.sources) {
            html += `
                <div class="sop-section ${cat.color}">
                    <div class="section-header">
                        <div class="section-title">
                            <div class="section-icon"><i class="fa-solid fa-book"></i></div>
                            <span>Quellen</span>
                        </div>
                        <i class="fa-solid fa-chevron-down section-toggle-icon"></i>
                    </div>
                    <div class="section-content">
                        <p style="font-size: 0.85rem; color: var(--text-tertiary);">${sop.sources}</p>
                    </div>
                </div>
            `;
        }
        
        html += '</div>'; // End sop-body
        
        el.viewSOP.innerHTML = html;
        
        // Bind Section Toggles
        el.viewSOP.querySelectorAll('.section-header').forEach(header => {
            header.addEventListener('click', function() {
                const section = this.parentElement;
                toggleSection(section);
            });
        });
        
        // Bind Expand All
        const expandBtn = document.getElementById('expandAllBtn');
        if (expandBtn) {
            expandBtn.addEventListener('click', () => {
                const allSections = el.viewSOP.querySelectorAll('.sop-section');
                const anyClosed = Array.from(allSections).some(s => !s.classList.contains('open'));
                
                allSections.forEach(s => {
                    if (anyClosed) s.classList.add('open');
                    else s.classList.remove('open');
                });
                
                expandBtn.innerHTML = anyClosed 
                    ? '<i class="fa-solid fa-angles-up"></i> Alle schließen'
                    : '<i class="fa-solid fa-angles-down"></i> Alle öffnen';
            });
        }
    }

    function toggleSection(section) {
        section.classList.toggle('open');
    }

    // --- Search Logic ---

    function performSearch(query) {
        if (!query || query.length < 2) {
            el.searchResultsList.innerHTML = '<div style="padding: 20px; text-align: center; color: var(--text-tertiary);">Bitte mindestens 2 Zeichen eingeben</div>';
            el.searchCount.textContent = '0 Treffer';
            return;
        }
        
        const terms = query.toLowerCase().split(' ').filter(t => t.length > 0);
        const results = [];
        
        state.data.forEach(sop => {
            let score = 0;
            const titleLower = sop.title.toLowerCase();
            let context = '';
            
            // Title Match (High Priority)
            if (titleLower.includes(query.toLowerCase())) {
                score += 100;
                context = 'Treffer im Titel';
            } else {
                // Partial Title Match
                let matchCount = 0;
                terms.forEach(term => {
                    if (titleLower.includes(term)) matchCount++;
                });
                if (matchCount === terms.length) score += 50;
            }
            
            // Content Match
            sop.sections.forEach(sec => {
                const text = stripHtml(sec.html).toLowerCase();
                let termHits = 0;
                terms.forEach(term => {
                    if (text.includes(term)) termHits++;
                });
                
                if (termHits > 0) {
                    score += termHits * 10;
                    if (!context) context = `Treffer in: ${sec.title}`;
                }
            });
            
            if (score > 0) {
                results.push({ sop, score, context });
            }
        });
        
        results.sort((a, b) => b.score - a.score);
        
        renderSearchResults(results, query);
    }

    function renderSearchResults(results, query) {
        el.searchCount.textContent = `${results.length} Treffer`;
        
        if (results.length === 0) {
            el.searchResultsList.innerHTML = `
                <div style="text-align: center; padding: 40px; color: var(--text-tertiary);">
                    <i class="fa-solid fa-magnifying-glass" style="font-size: 2rem; margin-bottom: 16px; display: block; opacity: 0.5;"></i>
                    Keine Ergebnisse für "${escapeHtml(query)}"
                </div>
            `;
            return;
        }
        
        let html = '';
        results.forEach(res => {
            const cat = CATEGORIES[res.sop.catKey];
            html += `
                <div class="search-result-item" onclick="location.hash='#sop-${res.sop.id}'">
                    <div class="search-result-title">${highlightText(res.sop.title, query)}</div>
                    <div class="search-result-context">
                        <span style="color: var(--${cat.color}-text); font-weight: 500; font-size: 0.8rem;">${cat.name}</span>
                        • ${res.context}
                    </div>
                </div>
            `;
        });
        
        el.searchResultsList.innerHTML = html;
    }

    // --- UI Interactions ---

    function setCategory(key) {
        state.activeCategory = key;
        
        // Update Pills
        const pills = el.categoryFilters.querySelectorAll('.cat-pill');
        pills.forEach(p => {
            if (p.dataset.cat === key) {
                p.classList.add('active');
                p.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            } else {
                p.classList.remove('active');
            }
        });
        
        renderNavList();
        
        // If searching, clear search when switching category (optional UX choice)
        // For now, we keep logic separate.
    }

    function openSidebar() {
        state.sidebarOpen = true;
        el.sidebar.classList.add('open');
        el.sidebarOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent body scroll
    }

    function closeSidebar() {
        state.sidebarOpen = false;
        el.sidebar.classList.remove('open');
        el.sidebarOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    function updateBreadcrumb() {
        let html = '<a href="#" class="breadcrumb-link">Übersicht</a>';
        
        if (state.view === 'sop' && state.currentSopId) {
            const sop = state.data.find(s => s.id === state.currentSopId);
            if (sop) {
                html += ` <i class="fa-solid fa-chevron-right breadcrumb-sep"></i> <span>${escapeHtml(sop.title)}</span>`;
            }
        } else if (state.view === 'search') {
            html += ` <i class="fa-solid fa-chevron-right breadcrumb-sep"></i> <span>Suche</span>`;
        }
        
        el.breadcrumb.innerHTML = html;
    }

    // --- Theme Management ---

    function loadTheme() {
        const saved = localStorage.getItem('sop-theme');
        if (saved) {
            setTheme(saved);
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    function setTheme(theme) {
        state.theme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('sop-theme', theme);
        
        const icon = theme === 'dark' ? 'fa-sun' : 'fa-moon';
        const text = theme === 'dark' ? 'Helles Design' : 'Dunkles Design';
        el.themeToggle.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${text}</span>`;
    }

    function toggleTheme() {
        setTheme(state.theme === 'light' ? 'dark' : 'light');
    }

    // --- Utilities ---

    function escapeHtml(text) {
        if (!text) return '';
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function stripHtml(html) {
        const tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    }

    function processHtmlContent(html) {
        // Here we could add auto-linking or other processing
        // For now, just return (we trust the source data as it is internal)
        return html;
    }

    function highlightText(text, query) {
        if (!query) return escapeHtml(text);
        const escapedText = escapeHtml(text);
        const terms = query.split(' ').map(t => escapeHtml(t)).filter(t => t);
        
        let result = escapedText;
        terms.forEach(term => {
            const regex = new RegExp(`(${term})`, 'gi');
            result = result.replace(regex, '<span class="highlight">$1</span>');
        });
        return result;
    }

    function renderError(msg) {
        el.app.innerHTML = `<div style="padding: 40px; text-align: center;"><h2>Fehler</h2><p>${msg}</p></div>`;
    }

    // --- Event Binding ---

    function bindEvents() {
        // Mobile Toggle
        if (el.mobileMenuBtn) el.mobileMenuBtn.addEventListener('click', openSidebar);
        if (el.sidebarOverlay) el.sidebarOverlay.addEventListener('click', closeSidebar);
        
        // Mobile Search Button (Header)
        if (el.mobileSearchBtn) {
            el.mobileSearchBtn.addEventListener('click', () => {
                if (state.isMobile) {
                    openSidebar();
                    setTimeout(() => el.searchInput.focus(), 300);
                } else {
                    el.searchInput.focus();
                }
            });
        }

        // Category Pills
        if (el.categoryFilters) {
            el.categoryFilters.addEventListener('click', (e) => {
                if (e.target.classList.contains('cat-pill')) {
                    setCategory(e.target.dataset.cat);
                }
            });
        }

        // Theme Toggle
        if (el.themeToggle) el.themeToggle.addEventListener('click', toggleTheme);

        // Search Input
        if (el.searchInput) {
            let debounceTimer;
            el.searchInput.addEventListener('input', (e) => {
                const val = e.target.value;
                if (val.length > 0) el.searchClear.style.opacity = '1';
                else el.searchClear.style.opacity = '0';

                clearTimeout(debounceTimer);
                debounceTimer = setTimeout(() => {
                    if (val.length >= 2) {
                        navigateTo(`#search=${encodeURIComponent(val)}`);
                    } else if (val.length === 0 && state.view === 'search') {
                        navigateTo('');
                    }
                }, CONFIG.searchDebounce);
            });
            
            // Check for Enter key
            el.searchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.target.blur(); // Hide keyboard on mobile
                }
            });
        }

        // Search Clear
        if (el.searchClear) {
            el.searchClear.addEventListener('click', () => {
                el.searchInput.value = '';
                el.searchClear.style.opacity = '0';
                if (state.view === 'search') {
                    navigateTo('');
                }
                el.searchInput.focus();
            });
        }

        // Logo Click
        if (el.appLogo) {
            el.appLogo.addEventListener('click', () => {
                navigateTo('');
                if (state.isMobile) closeSidebar();
            });
        }

        // FAB (Scroll to top)
        if (el.fabAction) {
            el.fabAction.addEventListener('click', () => {
                el.contentScroll.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        // Scroll Spy for FAB
        if (el.contentScroll) {
            el.contentScroll.addEventListener('scroll', () => {
                if (el.contentScroll.scrollTop > 300) {
                    el.fabAction.classList.add('visible');
                } else {
                    el.fabAction.classList.remove('visible');
                }
            });
        }

        // Print
        if (el.printBtn) {
            el.printBtn.addEventListener('click', () => {
                // Open all sections before printing
                if (state.view === 'sop') {
                    const sections = el.viewSOP.querySelectorAll('.sop-section');
                    sections.forEach(s => s.classList.add('open'));
                    setTimeout(() => window.print(), 300);
                } else {
                    window.print();
                }
            });
        }

        // Window Resize
        window.addEventListener('resize', () => {
            state.isMobile = window.innerWidth < CONFIG.mobileBreakpoint;
            if (!state.isMobile && state.sidebarOpen) {
                closeSidebar();
            }
        });

        // Hash Change
        window.addEventListener('hashchange', handleRoute);
    }

    // --- Start ---
    
    // Check if DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();