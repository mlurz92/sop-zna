(function() {
'use strict';

/**
 * Konfiguration der Kategorien
 * Mappt interne Keys auf Anzeigenamen, Icons und Sortierreihenfolge.
 */
var CATEGORIES = {
  kardio: { name: 'Kardiologie', icon: 'fa-heart-pulse', order: 1 },
  pulmo: { name: 'Pneumologie', icon: 'fa-lungs', order: 2 },
  gi: { name: 'Gastroenterologie', icon: 'fa-utensils', order: 3 },
  neuro: { name: 'Neurologie', icon: 'fa-brain', order: 4 },
  nephro: { name: 'Nephrologie', icon: 'fa-droplet', order: 5 },
  metab: { name: 'Metabolisch', icon: 'fa-flask-vial', order: 6 },
  haem: { name: 'Hämatologie', icon: 'fa-syringe', order: 7 },
  infekt: { name: 'Infektiologie', icon: 'fa-virus', order: 8 },
  tox: { name: 'Toxikologie', icon: 'fa-skull-crossbones', order: 9 },
  leit: { name: 'Leitsymptom', icon: 'fa-stethoscope', order: 10 },
  sonst: { name: 'Sonstige', icon: 'fa-circle-info', order: 11 }
};

/**
 * Icons für spezifische SOP-Abschnitte
 */
var SECTION_ICONS = {
  'Definition': 'fa-book-open',
  'Ursachen': 'fa-magnifying-glass',
  'Symptome': 'fa-clipboard-list',
  'Diagnostik': 'fa-vials',
  'Therapie': 'fa-pills',
  'Merke': 'fa-lightbulb',
  'Disposition': 'fa-right-from-bracket',
  'Komplikationen': 'fa-triangle-exclamation'
};

/**
 * Globaler State der Anwendung
 */
var state = {
  view: 'home',           // 'home' oder 'sop'
  sopId: null,            // Aktuell angezeigte SOP ID
  query: '',              // Suchbegriff
  activeCategory: 'all',  // Aktiver Filter in der Sidebar
  sidebarOpen: false,     // Mobile Sidebar Status
  allExpanded: false,     // Status des "Alle aufklappen" Buttons
  theme: 'light'          // 'light' oder 'dark'
};

// Interne Variablen
var suppressHashChange = false;
var el = {}; // DOM Element Cache
var sopData = []; // Lokale Referenz auf die Daten

/**
 * Initialisierung der Anwendung
 */
function init() {
  loadTheme();
  cacheElements();
  
  // Daten laden (aus globalem Window-Objekt, da statisch eingebunden)
  if (window.SOP_DATA && Array.isArray(window.SOP_DATA) && window.SOP_DATA.length > 0) {
    sopData = window.SOP_DATA;
    // Daten alphabetisch sortieren für konsistente Anzeige
    sopData.sort(function(a, b) {
      return a.title.localeCompare(b.title, 'de');
    });
  } else {
    renderError('Keine SOP-Daten gefunden. Bitte prüfen Sie die Einbindung der JavaScript-Dateien.');
    return;
  }

  applyTheme(state.theme);
  renderCategoryFilters();
  buildSidebar();
  renderHome();
  bindEvents();
  
  // Initiales Routing basierend auf Hash
  handleHashChange();
  
  // Entfernen des Loading-Status falls vorhanden
  document.body.classList.remove('loading');
}

/**
 * DOM-Elemente cachen um Zugriffe zu minimieren
 */
function cacheElements() {
  var ids = [
    'sidebar', 'sidebarNav', 'sidebarClose', 'sidebarLogo',
    'searchInput', 'searchClear', 'searchResults', 'categoryFilters',
    'overlay', 'menuToggle', 'breadcrumb',
    'themeToggle', 'printBtn', 'contentWrapper',
    'homeView', 'sopView', 'backToTop', 'keyboardHint'
  ];
  
  for (var i = 0; i < ids.length; i++) {
    el[ids[i]] = document.getElementById(ids[i]);
  }
}

/**
 * Theme aus LocalStorage laden oder Systempräferenz nutzen
 */
function loadTheme() {
  try {
    var saved = localStorage.getItem('sop-theme');
    if (saved === 'dark' || saved === 'light') {
      state.theme = saved;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      state.theme = 'dark';
    }
  } catch (e) {
    state.theme = 'light';
  }
}

/**
 * Theme anwenden und speichern
 */
function applyTheme(t) {
  state.theme = t;
  document.documentElement.setAttribute('data-theme', t);
  try {
    localStorage.setItem('sop-theme', t);
  } catch (e) {}
  
  if (el.themeToggle) {
    el.themeToggle.innerHTML = t === 'dark' 
      ? '<i class="fa-solid fa-sun"></i>' 
      : '<i class="fa-solid fa-moon"></i>';
    el.themeToggle.title = t === 'dark' ? 'Helles Design' : 'Dunkles Design';
  }
}

function toggleTheme() {
  applyTheme(state.theme === 'dark' ? 'light' : 'dark');
}

/**
 * Event Listener binden
 */
function bindEvents() {
  // Suche
  if (el.searchInput) {
    el.searchInput.addEventListener('input', onSearchInput);
    el.searchInput.addEventListener('focus', function() {
      if (state.query.length >= 2) handleSearch(state.query);
    });
  }
  if (el.searchClear) el.searchClear.addEventListener('click', onSearchClear);

  // Sidebar & Navigation
  if (el.menuToggle) el.menuToggle.addEventListener('click', function() { toggleSidebar(true); });
  if (el.sidebarClose) el.sidebarClose.addEventListener('click', function() { toggleSidebar(false); });
  if (el.overlay) el.overlay.addEventListener('click', function() { toggleSidebar(false); });
  if (el.sidebarLogo) el.sidebarLogo.addEventListener('click', function() { navigateTo('home'); toggleSidebar(false); });
  if (el.sidebarNav) el.sidebarNav.addEventListener('click', onSidebarClick);
  
  // Header Actions
  if (el.themeToggle) el.themeToggle.addEventListener('click', toggleTheme);
  if (el.printBtn) el.printBtn.addEventListener('click', printSOP);
  if (el.breadcrumb) el.breadcrumb.addEventListener('click', onBreadcrumbClick);

  // Content Actions
  if (el.homeView) el.homeView.addEventListener('click', onHomeClick);
  if (el.searchResults) el.searchResults.addEventListener('click', onSearchResultClick);
  if (el.sopView) el.sopView.addEventListener('click', onSopViewClick);
  if (el.categoryFilters) el.categoryFilters.addEventListener('click', onCategoryFilterClick);

  // Global
  if (el.contentWrapper) el.contentWrapper.addEventListener('scroll', onScroll);
  if (el.backToTop) el.backToTop.addEventListener('click', scrollToTop);
  
  window.addEventListener('hashchange', handleHashChange);
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && state.sidebarOpen) toggleSidebar(false);
  });
  document.addEventListener('keydown', onKeyDown);
}

/**
 * Hilfsfunktion: SOP anhand ID finden
 */
function findSOP(id) {
  if (!id) return null;
  for (var i = 0; i < sopData.length; i++) {
    if (sopData[i].id === id) return sopData[i];
  }
  return null;
}

/**
 * Hilfsfunktion: Sortierte Keys der Kategorien
 */
function sortedCatKeys() {
  return Object.keys(CATEGORIES).sort(function(a, b) {
    return CATEGORIES[a].order - CATEGORIES[b].order;
  });
}

/**
 * HTML Escaping
 */
function escHtml(s) {
  if (typeof s !== 'string') return '';
  return s.replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#039;");
}

function stripHtml(html) {
  var tmp = document.createElement("DIV");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

/**
 * Suchbegriff highlighten
 */
function highlight(text, query) {
  if (!query || query.length < 2) return escHtml(text);
  var escapedText = escHtml(text);
  var escapedQuery = escHtml(query).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  var re = new RegExp('(' + escapedQuery + ')', 'gi');
  return escapedText.replace(re, '<span class="search-highlight">$1</span>');
}

/**
 * Routing Logik
 */
function handleHashChange() {
  if (suppressHashChange) return;
  
  var hash = window.location.hash.replace('#', '');
  
  if (hash.indexOf('sop-') === 0) {
    var id = hash.substring(4);
    var sop = findSOP(id);
    if (sop) {
      navigateTo('sop', id);
    } else {
      // Unbekannte ID -> Home
      navigateTo('home');
    }
  } else {
    navigateTo('home');
  }
}

function updateHash(sopId) {
  suppressHashChange = true;
  if (sopId) {
    window.location.hash = 'sop-' + sopId;
  } else {
    // Hash entfernen ohne History-Eintrag wenn möglich
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, null, window.location.pathname + window.location.search);
    } else {
      window.location.hash = '';
    }
  }
  // Timeout um das Hashchange-Event zu ignorieren, das wir selbst ausgelöst haben
  setTimeout(function() { suppressHashChange = false; }, 100);
}

function navigateTo(view, sopId) {
  state.view = view;
  state.sopId = sopId || null;
  
  // UI Updates
  if (view === 'home') {
    if (el.homeView) el.homeView.style.display = 'block';
    if (el.sopView) el.sopView.style.display = 'none';
    if (el.printBtn) el.printBtn.style.display = 'none';
    updateBreadcrumb();
    setActiveSidebarItem(null);
    updateHash(null);
    document.title = 'SOP Notaufnahme';
  } else if (view === 'sop' && sopId) {
    var sop = findSOP(sopId);
    if (sop) {
      renderSOP(sopId);
      if (el.homeView) el.homeView.style.display = 'none';
      if (el.sopView) el.sopView.style.display = 'block';
      if (el.printBtn) el.printBtn.style.display = 'flex';
      updateBreadcrumb();
      setActiveSidebarItem(sopId);
      updateHash(sopId);
      document.title = sop.title + ' | SOP Notaufnahme';
    } else {
      navigateTo('home');
    }
  }
  
  // Scroll to top
  if (el.contentWrapper) el.contentWrapper.scrollTop = 0;
}

/**
 * Sidebar Rendering
 */
function renderCategoryFilters() {
  if (!el.categoryFilters) return;
  
  var keys = sortedCatKeys();
  var h = '<button class="cat-pill active" data-cat="all">Alle</button>';
  
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i];
    var cat = CATEGORIES[k];
    h += '<button class="cat-pill" data-cat="' + k + '">' + escHtml(cat.name) + '</button>';
  }
  
  el.categoryFilters.innerHTML = h;
}

function onCategoryFilterClick(e) {
  if (e.target.classList.contains('cat-pill')) {
    var cat = e.target.dataset.cat;
    setCategoryFilter(cat);
  }
}

function setCategoryFilter(cat) {
  state.activeCategory = cat;
  
  // Pills aktualisieren
  var pills = el.categoryFilters.querySelectorAll('.cat-pill');
  for (var i = 0; i < pills.length; i++) {
    if (pills[i].dataset.cat === cat) {
      pills[i].classList.add('active');
      pills[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    } else {
      pills[i].classList.remove('active');
    }
  }
  
  buildSidebar();
}

function buildSidebar() {
  if (!el.sidebarNav) return;
  
  var activeCat = state.activeCategory;
  var items = [];
  
  // Filtern
  if (activeCat === 'all') {
    items = sopData;
  } else {
    items = sopData.filter(function(s) { return s.catKey === activeCat; });
  }
  
  if (items.length === 0) {
    el.sidebarNav.innerHTML = '<div class="sop-nav-empty"><i class="fa-solid fa-filter"></i><br>Keine SOPs in dieser Kategorie</div>';
    return;
  }
  
  var h = '';
  for (var i = 0; i < items.length; i++) {
    var s = items[i];
    var isActive = (state.view === 'sop' && state.sopId === s.id) ? ' active' : '';
    
    h += '<a class="sop-item' + isActive + '" data-sop-id="' + s.id + '">';
    h += '<span class="sop-item-dot dot-' + s.catKey + '"></span>';
    h += '<div class="sop-item-text">';
    h += '<div class="sop-item-title">' + escHtml(s.title) + '</div>';
    if (activeCat === 'all') {
      var catName = CATEGORIES[s.catKey] ? CATEGORIES[s.catKey].name : s.category;
      h += '<div class="sop-item-cat">' + escHtml(catName) + '</div>';
    }
    h += '</div></a>';
  }
  
  el.sidebarNav.innerHTML = h;
}

function setActiveSidebarItem(id) {
  if (!el.sidebarNav) return;
  
  // Alle actives entfernen
  var activeItems = el.sidebarNav.querySelectorAll('.sop-item.active');
  for (var i = 0; i < activeItems.length; i++) {
    activeItems[i].classList.remove('active');
  }
  
  if (!id) return;
  
  // Wenn der Filter das Item versteckt, Filter zurücksetzen
  var target = el.sidebarNav.querySelector('.sop-item[data-sop-id="' + id + '"]');
  if (!target) {
    // SOP ist in aktueller Liste nicht sichtbar -> Filter auf 'all' setzen und neu bauen
    if (state.activeCategory !== 'all') {
      setCategoryFilter('all');
      target = el.sidebarNav.querySelector('.sop-item[data-sop-id="' + id + '"]');
    }
  }
  
  if (target) {
    target.classList.add('active');
    setTimeout(function() {
      target.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }, 100);
  }
}

function toggleSidebar(open) {
  state.sidebarOpen = open;
  if (el.sidebar) el.sidebar.classList.toggle('open', open);
  if (el.overlay) el.overlay.classList.toggle('visible', open);
  document.body.style.overflow = open ? 'hidden' : '';
}

function onSidebarClick(e) {
  var item = e.target.closest('.sop-item');
  if (item) {
    e.preventDefault();
    var id = item.dataset.sopId;
    navigateTo('sop', id);
    if (window.innerWidth <= 768) {
      toggleSidebar(false);
    }
  }
}

/**
 * Home View Rendering
 */
function renderHome() {
  if (!el.homeView) return;
  
  var h = '';
  h += '<div class="home-hero">';
  h += '<div class="home-hero-icon"><i class="fa-solid fa-book-medical"></i></div>';
  h += '<h1>Standard Operating Procedures</h1>';
  h += '<p>Evidenzbasierte Handlungsanweisungen für die klinische Notfallmedizin. Schnell, strukturiert und jederzeit verfügbar.</p>';
  h += '</div>';
  
  // Stats berechnen
  var stats = { total: sopData.length, cats: 0 };
  var catCounts = {};
  for (var i = 0; i < sopData.length; i++) {
    var k = sopData[i].catKey;
    if (!catCounts[k]) catCounts[k] = 0;
    catCounts[k]++;
  }
  stats.cats = Object.keys(catCounts).length;
  
  h += '<div class="home-stats">';
  h += '<div class="home-stat"><div class="home-stat-num">' + stats.total + '</div><div class="home-stat-label">SOPs</div></div>';
  h += '<div class="home-stat"><div class="home-stat-num">' + stats.cats + '</div><div class="home-stat-label">Kategorien</div></div>';
  h += '</div>';
  
  h += '<div class="home-section-title">Kategorien</div>';
  h += '<div class="home-categories">';
  
  var keys = sortedCatKeys();
  for (var j = 0; j < keys.length; j++) {
    var key = keys[j];
    var cat = CATEGORIES[key];
    var count = catCounts[key] || 0;
    
    if (count > 0) {
      h += '<div class="home-cat-card" data-cat="' + key + '">';
      h += '<div class="home-cat-icon cat-' + key + '"><i class="fa-solid ' + cat.icon + '"></i></div>';
      h += '<div class="home-cat-info">';
      h += '<div class="home-cat-name">' + escHtml(cat.name) + '</div>';
      h += '<div class="home-cat-count">' + count + ' SOPs</div>';
      h += '</div></div>';
    }
  }
  
  h += '</div>';
  el.homeView.innerHTML = h;
}

function onHomeClick(e) {
  var card = e.target.closest('.home-cat-card');
  if (card) {
    var cat = card.dataset.cat;
    setCategoryFilter(cat);
    if (window.innerWidth <= 768) {
      toggleSidebar(true);
    } else {
      // Auf Desktop Fokus auf Sidebar setzen oder zumindest sicherstellen, dass sie sichtbar ist
      var firstItem = el.sidebarNav.querySelector('.sop-item');
      if (firstItem) firstItem.scrollIntoView();
    }
  }
}

/**
 * SOP View Rendering
 */
function renderSOP(id) {
  if (!el.sopView) return;
  
  var sop = findSOP(id);
  if (!sop) return;
  
  state.allExpanded = false;
  var cat = CATEGORIES[sop.catKey] || { name: 'Allgemein', icon: 'fa-file' };
  
  var h = '<div class="sop-content">';
  
  // Header
  h += '<div class="sop-title-bar">';
  h += '<h1>' + escHtml(sop.title) + '</h1>';
  h += '<div class="sop-meta">';
  h += '<span class="cat-badge cat-' + sop.catKey + '"><i class="fa-solid ' + cat.icon + '"></i> ' + escHtml(cat.name) + '</span>';
  if (sop.stand) h += '<span class="sop-stand">Stand: ' + escHtml(sop.stand) + '</span>';
  h += '</div></div>';
  
  // Expand Button
  h += '<div class="expand-all-bar">';
  h += '<button class="expand-all-btn" id="expandAllBtn"><i class="fa-solid fa-angles-down"></i> Alle aufklappen</button>';
  h += '</div>';
  
  // Sections
  for (var i = 0; i < sop.sections.length; i++) {
    var sec = sop.sections[i];
    var icon = SECTION_ICONS[sec.title] || 'fa-circle-dot';
    var isFirst = (i === 0);
    
    h += '<div class="sop-section' + (isFirst ? ' open' : '') + '">';
    h += '<div class="sop-section-header">';
    h += '<h2><i class="fa-solid ' + icon + ' callout-icon"></i> ' + escHtml(sec.title) + '</h2>';
    h += '<div class="sop-section-chevron"><i class="fa-solid fa-chevron-down"></i></div>';
    h += '</div>';
    h += '<div class="sop-section-body" style="' + (isFirst ? 'max-height:none' : '') + '">';
    h += '<div class="sop-section-inner">' + sec.html + '</div>'; // HTML aus Data ist "trusted"
    h += '</div></div>';
  }
  
  // Sources
  if (sop.sources) {
    h += '<div class="sop-sources">';
    h += '<div class="sop-sources-toggle">';
    h += '<i class="fa-solid fa-chevron-right"></i> Quellen anzeigen';
    h += '</div>';
    h += '<div class="sop-sources-content">';
    h += '<p>' + sop.sources + '</p>';
    h += '</div></div>';
  }
  
  h += '</div>';
  
  el.sopView.innerHTML = h;
}

function onSopViewClick(e) {
  // Section Toggle
  var header = e.target.closest('.sop-section-header');
  if (header) {
    var section = header.parentElement;
    toggleSection(section);
    return;
  }
  
  // Expand All
  var expBtn = e.target.closest('#expandAllBtn');
  if (expBtn) {
    toggleAllSections();
    return;
  }
  
  // Sources Toggle
  var srcToggle = e.target.closest('.sop-sources-toggle');
  if (srcToggle) {
    var container = srcToggle.parentElement;
    var content = container.querySelector('.sop-sources-content');
    var icon = srcToggle.querySelector('i');
    
    var isOpen = content.classList.contains('open');
    if (isOpen) {
      content.classList.remove('open');
      srcToggle.classList.remove('open');
      icon.style.transform = 'rotate(0deg)';
    } else {
      content.classList.add('open');
      srcToggle.classList.add('open');
      icon.style.transform = 'rotate(90deg)';
    }
  }
}

function toggleSection(section) {
  var body = section.querySelector('.sop-section-body');
  var isOpen = section.classList.contains('open');
  
  if (isOpen) {
    section.classList.remove('open');
    // Animation Hack: Set height explicitly before collapsing
    body.style.maxHeight = body.scrollHeight + 'px';
    setTimeout(function() { body.style.maxHeight = '0'; }, 10);
  } else {
    section.classList.add('open');
    body.style.maxHeight = body.scrollHeight + 'px';
    // Reset to none after transition to allow content resizing
    setTimeout(function() { 
      if (section.classList.contains('open')) body.style.maxHeight = 'none'; 
    }, 400);
  }
}

function toggleAllSections() {
  state.allExpanded = !state.allExpanded;
  var btn = el.sopView.querySelector('#expandAllBtn');
  var sections = el.sopView.querySelectorAll('.sop-section');
  
  if (state.allExpanded) {
    btn.innerHTML = '<i class="fa-solid fa-angles-up"></i> Alle zuklappen';
    for (var i = 0; i < sections.length; i++) {
      sections[i].classList.add('open');
      var body = sections[i].querySelector('.sop-section-body');
      body.style.maxHeight = 'none';
    }
  } else {
    btn.innerHTML = '<i class="fa-solid fa-angles-down"></i> Alle aufklappen';
    for (var j = 0; j < sections.length; j++) {
      sections[j].classList.remove('open');
      var b = sections[j].querySelector('.sop-section-body');
      b.style.maxHeight = '0';
    }
  }
}

/**
 * Suche
 */
function onSearchInput(e) {
  var q = e.target.value.trim();
  state.query = q;
  
  if (q.length > 0) {
    el.searchClear.style.display = 'flex';
    el.searchBox.classList.add('has-value');
  } else {
    el.searchClear.style.display = 'none';
    el.searchBox.classList.remove('has-value');
    clearSearch();
    return;
  }
  
  if (q.length >= 2) {
    handleSearch(q);
  } else {
    clearSearch();
  }
}

function onSearchClear() {
  el.searchInput.value = '';
  state.query = '';
  el.searchClear.style.display = 'none';
  el.searchBox.classList.remove('has-value');
  clearSearch();
  el.searchInput.focus();
}

function handleSearch(q) {
  var terms = q.toLowerCase().split(' ');
  var results = [];
  
  for (var i = 0; i < sopData.length; i++) {
    var sop = sopData[i];
    var score = 0;
    var titleLower = sop.title.toLowerCase();
    
    // Scoring
    // Voller Match im Titel
    if (titleLower.indexOf(q.toLowerCase()) !== -1) score += 100;
    
    // Check alle Suchbegriffe
    var allTermsFound = true;
    for (var t = 0; t < terms.length; t++) {
      var term = terms[t];
      if (!term) continue;
      
      var termFound = false;
      // Im Titel?
      if (titleLower.indexOf(term) !== -1) {
        score += 20;
        termFound = true;
      }
      
      // Im Inhalt?
      if (!termFound) {
        for (var s = 0; s < sop.sections.length; s++) {
          if (stripHtml(sop.sections[s].html).toLowerCase().indexOf(term) !== -1) {
            score += 5;
            termFound = true;
            break;
          }
        }
      }
      
      if (!termFound) {
        allTermsFound = false;
        break;
      }
    }
    
    if (allTermsFound && score > 0) {
      results.push({ sop: sop, score: score });
    }
  }
  
  results.sort(function(a, b) { return b.score - a.score; });
  
  renderSearchResults(results, q);
}

function renderSearchResults(results, q) {
  if (!el.searchResults) return;
  
  if (results.length === 0) {
    el.searchResults.innerHTML = '<div class="sop-nav-empty"><i class="fa-solid fa-magnifying-glass"></i><br>Keine Treffer</div>';
    el.searchResults.style.display = 'block';
    el.categoryFilters.style.display = 'none';
    el.sidebarNav.style.display = 'none';
    return;
  }
  
  var h = '';
  var limit = Math.min(results.length, 50); // Performance Limit
  
  for (var i = 0; i < limit; i++) {
    var r = results[i];
    var s = r.sop;
    var cat = CATEGORIES[s.catKey];
    
    h += '<div class="sop-item" data-sop-id="' + s.id + '">';
    h += '<span class="sop-item-dot dot-' + s.catKey + '"></span>';
    h += '<div class="sop-item-text">';
    h += '<div class="sop-item-title">' + highlight(s.title, q) + '</div>';
    h += '<div class="sop-item-cat">' + escHtml(cat ? cat.name : '') + '</div>';
    h += '</div></div>';
  }
  
  el.searchResults.innerHTML = h;
  el.searchResults.style.display = 'block';
  el.categoryFilters.style.display = 'none';
  el.sidebarNav.style.display = 'none';
}

function clearSearch() {
  if (el.searchResults) {
    el.searchResults.style.display = 'none';
    el.searchResults.innerHTML = '';
  }
  if (el.categoryFilters) el.categoryFilters.style.display = 'flex';
  if (el.sidebarNav) el.sidebarNav.style.display = 'block';
}

function onSearchResultClick(e) {
  var item = e.target.closest('.sop-item');
  if (item) {
    var id = item.dataset.sopId;
    navigateTo('sop', id);
    if (window.innerWidth <= 768) {
      toggleSidebar(false);
    }
    // Suche zurücksetzen nach Klick
    state.query = '';
    if (el.searchInput) el.searchInput.value = '';
    onSearchClear();
  }
}

/**
 * Breadcrumb
 */
function updateBreadcrumb() {
  if (!el.breadcrumb) return;
  
  var h = '';
  if (state.view === 'home') {
    h = '<span class="breadcrumb-current">Übersicht</span>';
  } else if (state.view === 'sop' && state.sopId) {
    var sop = findSOP(state.sopId);
    if (sop) {
      h += '<a href="#" class="breadcrumb-link" onclick="app.navigateTo(\'home\'); return false;">Übersicht</a>';
      h += '<i class="fa-solid fa-chevron-right breadcrumb-sep"></i>';
      h += '<span class="breadcrumb-current">' + escHtml(sop.title) + '</span>';
    }
  }
  el.breadcrumb.innerHTML = h;
}

function onBreadcrumbClick(e) {
  if (e.target.tagName === 'A') {
    e.preventDefault();
    navigateTo('home');
  }
}

/**
 * Hilfsfunktionen (Scroll, Print, Error)
 */
function onScroll() {
  if (!el.contentWrapper || !el.backToTop) return;
  if (el.contentWrapper.scrollTop > 300) {
    el.backToTop.classList.add('visible');
  } else {
    el.backToTop.classList.remove('visible');
  }
}

function scrollToTop() {
  if (el.contentWrapper) {
    el.contentWrapper.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function printSOP() {
  if (state.view !== 'sop') return;
  
  // Vor dem Drucken alle Sektionen öffnen
  var sections = el.sopView.querySelectorAll('.sop-section');
  for (var i = 0; i < sections.length; i++) {
    sections[i].classList.add('open');
    var b = sections[i].querySelector('.sop-section-body');
    b.style.maxHeight = 'none';
  }
  
  // Sources öffnen
  var srcContent = el.sopView.querySelector('.sop-sources-content');
  if (srcContent) srcContent.classList.add('open');
  
  setTimeout(function() {
    window.print();
  }, 300);
}

function renderError(msg) {
  var root = document.getElementById('app');
  if (root) {
    root.innerHTML = '<div style="padding:40px;text-align:center;color:#e74c3c;">' +
      '<h2>Fehler beim Laden</h2><p>' + msg + '</p></div>';
  }
}

/**
 * Keyboard Shortcuts
 */
function onKeyDown(e) {
  // Suche fokussieren: /
  if (e.key === '/' && document.activeElement !== el.searchInput) {
    e.preventDefault();
    if (el.searchInput) {
      el.searchInput.focus();
      el.searchInput.select();
      if (window.innerWidth <= 768 && !state.sidebarOpen) {
        toggleSidebar(true);
      }
    }
  }
  
  // Sidebar schließen / Suche clearen: Escape
  if (e.key === 'Escape') {
    if (state.query.length > 0) {
      onSearchClear();
    } else if (state.sidebarOpen) {
      toggleSidebar(false);
    } else if (state.view === 'sop') {
      navigateTo('home');
    }
  }
}

// Public API für Event-Handler im HTML String (falls nötig)
window.app = {
  navigateTo: navigateTo
};

// Start
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

})();