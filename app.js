(function() {
    'use strict';

    // ============================================
    // APP VERSION - Für Update-Erkennung
    // ============================================
    var APP_VERSION = '2.2.1';

    // ============================================
    // KATEGORIEN KONFIGURATION
    // ============================================
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

    // Category Name Mapping für Fallback-Suche
    var CNM = {};
    (function() {
        var keys = Object.keys(CATS);
        for (var i = 0; i < keys.length; i++) {
            CNM[CATS[keys[i]].name.toLowerCase()] = keys[i];
        }
    })();

    // Section Icons Configuration
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

    // Auto-Open Sections (immer aufgeklappt)
    var AO = ['Diagnostik', 'Therapie'];

    // Font Size Settings
    var FSN = 13, FSX = 20, FSD = 15;

    // Touch-Gesten Konstanten - Optimiert für iOS
    var EDGE_MARGIN = 35;  // Erhöht für bessere Erkennung außerhalb der Browser-Edge-Zone
    var SWIPE_THRESHOLD = 60;
    var SWIPE_VELOCITY = 0.3;
    var HORIZONTAL_THRESHOLD = 8;

    // Category Colors
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

    // ============================================
    // APPLICATION STATE
    // ============================================
    var S = {
        data: [],
        tab: 'home',
        sopId: null,
        catD: 'all',
        catB: 'all',
        bQ: '',
        sQ: '',
        hQ: '',
        theme: 'light',
        fs: FSD,
        mob: window.innerWidth < 1024,
        allO: false,
        off: !navigator.onLine,
        ts: null,
        pY0: 0,
        pY: 0,
        pX0: 0,
        pull: false,
        refr: false,
        sCatOpen: false,
        bCatOpen: false,
        navStack: [],
        isNavigating: false
    };

    // ============================================
    // DOM ELEMENT CACHE
    // ============================================
    var E = {};

    function cache() {
        var ids = [
            'app', 'mobileHeader', 'backBtn', 'mobileTitle', 'themeToggleMobile', 'themeToggleMobileIcon',
            'sidebar', 'appLogo', 'searchInput', 'searchClear', 'categoryFilters', 'navList',
            'themeToggle', 'themeToggleIcon', 'themeToggleLabel', 'mainContent', 'contentHeader',
            'breadcrumb', 'desktopTocBtn', 'contentScroll', 'viewHome', 'viewBrowse', 'viewSearch', 'viewSOP',
            'heroArea', 'catGrid', 'homeInfo', 'browseSearchInput', 'browseSearchClear',
            'browseCategoryFilters', 'browseList', 'searchViewInput', 'searchViewClear', 'searchResultsArea',
            'fabAction', 'bottomNav', 'metaThemeColor', 'sectionPickerOverlay', 'sectionPickerBackdrop',
            'sectionPickerClose', 'sectionPickerList', 'sectionPickerPrint', 'offlineBanner', 'offlineTimestamp',
            'stickySectionBar', 'stickySectionIcon', 'stickySectionTitle', 'stickySopName',
            'fontDecMobile', 'fontIncMobile', 'fontIndicatorMobile',
            'fontDecDesktop', 'fontIncDesktop', 'fontIndicatorDesktop', 'pullIndicator',
            'sidebarCatToggle', 'browseCatToggle', 'viewContainer',
            'spotlightOverlay', 'spotlightBackdrop', 'spotlightContainer', 'spotlightInput',
            'spotlightClear', 'spotlightResults', 'spotlightCancel', 'spotlightBtn',
            'skeletonOverlay', 'pickerSheet', 'pickerHandle'
        ];
        for (var i = 0; i < ids.length; i++) {
            E[ids[i]] = document.getElementById(ids[i]);
        }
    }

    // ============================================
    // HELPER FUNCTIONS
    // ============================================
    function rc(v) {
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
    }

    function gc(k) {
        return CC[k] || '#64748b';
    }

    function strip(html) {
        var d = document.createElement('div');
        d.innerHTML = html;
        return d.textContent || d.innerText || '';
    }

    function hl(text, query) {
        if (!query) return text;
        var e = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        return text.replace(new RegExp('(' + e + ')', 'gi'), '<mark>$1</mark>');
    }

    // ============================================
    // ANIMATION UTILITIES
    // ============================================
    function easeOutExpo(t) {
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    }

    function easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }

    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    function throttle(func, limit) {
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
    }

    function debounce(func, wait) {
        var timeout;
        return function() {
            var args = arguments;
            var context = this;
            clearTimeout(timeout);
            timeout = setTimeout(function() { func.apply(context, args); }, wait);
        };
    }

    // ============================================
    // PUSH/POP NAVIGATION
    // ============================================
    function pushNav(newSopId) {
        if (S.isNavigating) return;
        S.isNavigating = true;

        // Push current state to stack
        if (S.sopId) {
            S.navStack.push({
                sopId: S.sopId,
                tab: S.tab
            });
        }

        // Navigate to new SOP
        S.sopId = newSopId;

        // Animate views
        animatePush(function() {
            sTab('sop');
            S.isNavigating = false;
        });
    }

    function popNav() {
        if (S.isNavigating) return;

        // If we have previous states in the stack, go back to previous SOP
        if (S.navStack.length > 0) {
            S.isNavigating = true;
            var prevState = S.navStack.pop();

            // Animate back to previous SOP
            animatePop(function() {
                S.sopId = prevState.sopId;
                S.tab = prevState.tab || 'sop';
                sTab('sop');
                S.isNavigating = false;
            });
            return;
        }

        // No history - determine where to go based on current view
        S.isNavigating = true;
        S.sopId = null;

        // Check which view is currently active
        var isInBrowseView = E.viewBrowse.classList.contains('active');
        var isInHomeView = E.viewHome.classList.contains('active');

        if (isInHomeView) {
            // Already at home, nothing to do
            S.isNavigating = false;
            return;
        }

        if (isInBrowseView) {
            // In browse view - go to home
            var activeView = E.viewBrowse;

            // Transition to home view
            activeView.classList.remove('active');
            activeView.classList.add('pop-exit');

            E.viewHome.classList.add('pop-enter');
            void E.viewHome.offsetWidth;
            E.viewHome.classList.add('active');
            E.viewHome.classList.remove('pop-enter');

            setTimeout(function() {
                activeView.classList.remove('pop-exit');
                sTab('home');
                S.isNavigating = false;
            }, 400);
        } else {
            // In SOP view without history - go to browse view (SOP overview)
            var activeView = null;
            var views = ['viewHome', 'viewBrowse', 'viewSearch', 'viewSOP'];
            for (var i = 0; i < views.length; i++) {
                if (E[views[i]] && E[views[i]].classList.contains('active')) {
                    activeView = E[views[i]];
                    break;
                }
            }

            if (activeView) {
                activeView.classList.remove('active');
                activeView.classList.add('pop-exit');
            }

            E.viewBrowse.classList.add('pop-enter');
            void E.viewBrowse.offsetWidth;
            E.viewBrowse.classList.add('active');
            E.viewBrowse.classList.remove('pop-enter');

            setTimeout(function() {
                if (activeView) activeView.classList.remove('pop-exit');
                rBrowse();
                sTab('browse');
                S.isNavigating = false;
            }, 400);
        }
    }

    function animatePush(callback) {
        var viewContainer = E.viewContainer;
        var views = ['viewHome', 'viewBrowse', 'viewSearch', 'viewSOP'];

        // Find active view and next view
        var activeView = null;
        var nextView = E.viewSOP;

        for (var i = 0; i < views.length; i++) {
            if (E[views[i]] && E[views[i]].classList.contains('active')) {
                activeView = E[views[i]];
                break;
            }
        }

        if (activeView && activeView !== nextView) {
            // Add exit class to current view
            activeView.classList.remove('active');
            activeView.classList.add('push-exit');

            // Prepare next view
            nextView.classList.add('push-enter');

            // Force reflow
            void nextView.offsetWidth;

            // Activate next view and remove animation classes
            nextView.classList.add('active');
            nextView.classList.remove('push-enter');

            // Remove exit class after animation
            setTimeout(function() {
                activeView.classList.remove('push-exit');
                if (callback) callback();
            }, 400);
        } else {
            if (callback) callback();
        }
    }

    function animatePop(callback) {
        var viewContainer = E.viewContainer;
        var nextView = E.viewSOP;
        var activeView = null;
        var views = ['viewHome', 'viewBrowse', 'viewSearch', 'viewSOP'];

        for (var i = 0; i < views.length; i++) {
            if (E[views[i]] && E[views[i]].classList.contains('active')) {
                activeView = E[views[i]];
                break;
            }
        }

        if (activeView && activeView !== nextView) {
            // Add exit class to current view
            activeView.classList.remove('active');
            activeView.classList.add('pop-exit');

            // Prepare next view
            nextView.classList.add('pop-enter');

            // Force reflow
            void nextView.offsetWidth;

            // Activate next view
            nextView.classList.add('active');
            nextView.classList.remove('pop-enter');

            // Remove exit class after animation
            setTimeout(function() {
                activeView.classList.remove('pop-exit');
                if (callback) callback();
            }, 400);
        } else {
            if (callback) callback();
        }
    }

    // ============================================
    // SWIPE TO BACK GESTURE
    // ============================================
    var swipeData = {
        startX: 0,
        startY: 0,
        currentX: 0,
        isSwiping: false,
        canSwipe: false,
        startTime: 0
    };

    function initSwipeGestures() {
        var scrollArea = E.contentScroll;
        if (!scrollArea) return;

        scrollArea.addEventListener('touchstart', handleTouchStart, { passive: true });
        scrollArea.addEventListener('touchmove', handleTouchMove, { passive: false });
        scrollArea.addEventListener('touchend', handleTouchEnd, { passive: true });
        scrollArea.addEventListener('touchcancel', handleTouchEnd, { passive: true });
    }

    function handleTouchStart(e) {
        // Only handle swipe back in SOP view with history or in browse view
        if (S.tab !== 'sop' && S.tab !== 'browse') return;

        var touch = e.touches[0];
        swipeData.startX = touch.clientX;
        swipeData.startY = touch.clientY;
        swipeData.currentX = touch.clientX;
        swipeData.isSwiping = false;
        swipeData.canSwipe = false;
        swipeData.startTime = e.timeStamp;

        // Check if touch is in left edge zone
        if (touch.clientX < EDGE_MARGIN) {
            swipeData.canSwipe = true;
        }
    }

    function handleTouchMove(e) {
        if (!swipeData.canSwipe) return;

        // SOFORT preventDefault aufrufen, um Browser-Edge-Swipe zu verhindern
        // Muss VOR jeder Bewegungserkennung stehen, da OS-Level-Gesten sonst priorisiert werden
        e.preventDefault();

        var touch = e.touches[0];
        var deltaX = touch.clientX - swipeData.startX;
        var deltaY = touch.clientY - swipeData.startY;

        // Check if horizontal swipe dominates
        if (Math.abs(deltaX) > HORIZONTAL_THRESHOLD) {
            swipeData.isSwiping = true;
        }

        if (swipeData.isSwiping && deltaX > 0) {
            swipeData.currentX = touch.clientX;

            // Apply visual feedback with transform
            var progress = Math.min(deltaX / window.innerWidth, 1);

            var activeView = null;
            var views = ['viewHome', 'viewBrowse', 'viewSearch', 'viewSOP'];

            for (var i = 0; i < views.length; i++) {
                if (E[views[i]] && E[views[i]].classList.contains('active')) {
                    activeView = E[views[i]];
                    break;
                }
            }

            if (activeView) {
                // More pronounced visual feedback
                activeView.style.opacity = 1 - (progress * 0.4);
                activeView.style.transform = 'translateX(' + (progress * 50) + 'px) scale(' + (1 - progress * 0.02) + ')';
                activeView.style.transition = 'none';
                activeView.style.willChange = 'transform, opacity';
            }
        }
    }

    function handleTouchEnd(e) {
        if (!swipeData.canSwipe) return;

        var deltaX = swipeData.currentX - swipeData.startX;
        var deltaY = e.changedTouches ? Math.abs(e.changedTouches[0].clientY - swipeData.startY) : 0;

        // Calculate velocity for better detection
        var duration = e.timeStamp - (swipeData.startTime || e.timeStamp);
        var velocity = deltaX / duration;

        var shouldPop = deltaX > SWIPE_THRESHOLD ||
                       (deltaX > SWIPE_THRESHOLD * 0.5 && velocity > SWIPE_VELOCITY);

        // Reset view position with smooth transition
        var activeView = null;
        var views = ['viewHome', 'viewBrowse', 'viewSearch', 'viewSOP'];

        for (var i = 0; i < views.length; i++) {
            if (E[views[i]] && E[views[i]].classList.contains('active')) {
                activeView = E[views[i]];
                break;
            }
        }

        if (activeView) {
            activeView.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out';
            activeView.style.opacity = '';
            activeView.style.transform = '';
            activeView.style.willChange = '';
        }

        if (shouldPop) {
            // Trigger haptic feedback with pattern for better feedback
            if (navigator.vibrate) {
                navigator.vibrate(15);
                setTimeout(function() {
                    navigator.vibrate(10);
                }, 30);
            }
            popNav();
        }

        // Reset swipe state
        swipeData.isSwiping = false;
        swipeData.canSwipe = false;
    }

    // ============================================
    // DRAGGABLE BOTTOM SHEET
    // ============================================
    var pickerDragData = {
        startY: 0,
        currentY: 0,
        isDragging: false,
        startHeight: 0,
        sheet: null
    };

    function initDraggablePicker() {
        var picker = E.sectionPickerOverlay;
        var sheet = E.pickerSheet;
        var handle = E.pickerHandle;

        if (!sheet) return;

        pickerDragData.sheet = sheet;

        if (handle) {
            handle.addEventListener('touchstart', handleDragStart, { passive: true });
            handle.addEventListener('touchmove', handleDragMove, { passive: false });
            handle.addEventListener('touchend', handleDragEnd, { passive: true });
            handle.addEventListener('touchcancel', handleDragEnd, { passive: true });

            // Mouse events for desktop
            handle.addEventListener('mousedown', handleDragStart);
        }

        // Also allow dragging on sheet header
        var head = picker.querySelector('.picker-head');
        if (head) {
            head.addEventListener('touchstart', handleDragStart, { passive: true });
            head.addEventListener('touchmove', handleDragMove, { passive: false });
            head.addEventListener('touchend', handleDragEnd, { passive: true });
            head.addEventListener('touchcancel', handleDragEnd, { passive: true });

            head.addEventListener('mousedown', handleDragStart);
        }
    }

    function handleDragStart(e) {
        var sheet = pickerDragData.sheet;
        if (!sheet) return;

        pickerDragData.isDragging = true;
        pickerDragData.startY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
        pickerDragData.startHeight = sheet.offsetHeight;

        sheet.style.transition = 'none';
        sheet.style.cursor = 'grabbing';

        // Prevent page scroll
        document.body.style.overflow = 'hidden';
    }

    function handleDragMove(e) {
        if (!pickerDragData.isDragging) return;
        e.preventDefault();

        var sheet = pickerDragData.sheet;
        var currentY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;
        var deltaY = currentY - pickerDragData.startY;

        // Calculate new height
        var newHeight = pickerDragData.startHeight - deltaY;
        var maxHeight = window.innerHeight * 0.7;

        if (newHeight > maxHeight) newHeight = maxHeight;
        if (newHeight < 100) newHeight = 100;

        sheet.style.maxHeight = newHeight + 'px';
    }

    function handleDragEnd(e) {
        if (!pickerDragData.isDragging) return;

        var sheet = pickerDragData.sheet;
        if (!sheet) return;

        pickerDragData.isDragging = false;
        sheet.style.transition = 'max-height 0.3s ease-out';
        sheet.style.cursor = '';

        document.body.style.overflow = '';

        // Check if dragged far enough to close
        var maxHeight = parseFloat(getComputedStyle(sheet).maxHeight);
        if (maxHeight < window.innerHeight * 0.3) {
            cPk();
        } else {
            // Reset to default
            sheet.style.maxHeight = '70vh';
        }
    }

    // ============================================
    // SPOTLIGHT SEARCH
    // ============================================
    function openSpotlight() {
        if (!E.spotlightOverlay) return;

        E.spotlightOverlay.classList.add('show');
        document.body.style.overflow = 'hidden';

        // Focus input
        setTimeout(function() {
            if (E.spotlightInput) {
                E.spotlightInput.focus();
            }
        }, 100);

        // Haptic feedback
        if (navigator.vibrate) navigator.vibrate(10);
    }

    function closeSpotlight() {
        if (!E.spotlightOverlay) return;

        E.spotlightOverlay.classList.remove('show');
        document.body.style.overflow = '';

        if (E.spotlightInput) {
            E.spotlightInput.value = '';
            S.sQ = '';
        }

        renderSpotlightResults();
    }

    function renderSpotlightResults() {
        if (!E.spotlightResults) return;

        var query = S.sQ.trim().toLowerCase();
        var container = E.spotlightResults;

        if (!query) {
            container.innerHTML = '<div class="spotlight-empty"><i class="fa-solid fa-search"></i><p>SOP eingeben zum Suchen</p></div>';
            return;
        }

        var results = [];
        for (var i = 0; i < S.data.length; i++) {
            var d = S.data[i];
            var nameMatch = (d.name || '').toLowerCase().indexOf(query) !== -1;
            if (nameMatch) {
                results.push({ sop: d, match: 'name' });
            }
        }

        if (results.length === 0) {
            container.innerHTML = '<div class="spotlight-empty"><i class="fa-solid fa-circle-xmark"></i><p>Keine SOPs gefunden</p></div>';
            return;
        }

        var html = '';
        for (var i = 0; i < Math.min(results.length, 10); i++) {
            var r = results[i];
            var d = r.sop;
            var cl = gc(d.category);
            var catName = CATS[d.category] ? CATS[d.category].name : '';

            html += '<div class="spotlight-result" data-id="' + d.id + '">';
            html += '<div class="spotlight-result-icon" style="background:' + cl + ';color:#fff">';
            html += '<i class="fa-solid ' + (CATS[d.category] ? CATS[d.category].icon : 'fa-file-medical') + '"></i>';
            html += '</div>';
            html += '<div class="spotlight-result-info">';
            html += '<div class="spotlight-result-name">' + hl(d.name || '', query) + '</div>';
            html += '<div class="spotlight-result-cat">' + catName + '</div>';
            html += '</div>';
            html += '<i class="fa-solid fa-chevron-right" style="color:var(--text3);font-size:0.8rem"></i>';
            html += '</div>';
        }

        container.innerHTML = html;

        // Add click handlers
        var items = container.querySelectorAll('.spotlight-result');
        for (var j = 0; j < items.length; j++) {
            (function(item) {
                item.addEventListener('click', function() {
                    var id = item.getAttribute('data-id');
                    closeSpotlight();
                    pushNav(id);
                });
            })(items[j]);
        }
    }

    // ============================================
    // SKELETON SCREEN
    // ============================================
    function showSkeleton() {
        if (!E.skeletonOverlay) return;
        E.skeletonOverlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function hideSkeleton() {
        if (!E.skeletonOverlay) return;
        E.skeletonOverlay.classList.remove('show');
        document.body.style.overflow = '';
    }

    // ============================================
    // SEGMENTED CONTROL
    // ============================================
    function renderSegmentedControl(sopData) {
        if (!sopData || !sopData.sections) return '';

        var html = '<div class="segmented-control">';

        // Add "Alle" button
        html += '<button class="segmented-btn active" data-seg="all">';
        html += '<i class="fa-solid fa-list"></i> Alle';
        html += '</button>';

        // Add section buttons (max 5 for usability)
        var maxButtons = 5;
        var count = 0;

        for (var i = 0; i < sopData.sections.length && count < maxButtons; i++) {
            var sec = sopData.sections[i];
            var title = sec.title || 'Abschnitt ' + (i + 1);
            var icon = SIC[title] || 'fa-circle';

            html += '<button class="segmented-btn" data-seg="' + i + '">';
            html += '<i class="fa-solid ' + icon + '"></i> ' + title.substring(0, 10);
            html += '</button>';
            count++;
        }

        html += '</div>';
        return html;
    }

    function handleSegmentedClick(sopData, segIndex) {
        if (!sopData) return;

        // Update active state
        var buttons = document.querySelectorAll('.segmented-btn');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('active');
            if (buttons[i].getAttribute('data-seg') === String(segIndex)) {
                buttons[i].classList.add('active');
            }
        }

        if (segIndex === 'all') {
            // Open all sections
            var bodies = E.viewSOP.querySelectorAll('.sop-section-body');
            var toggles = E.viewSOP.querySelectorAll('.sec-toggle');
            for (var j = 0; j < bodies.length; j++) {
                bodies[j].classList.add('open');
                if (toggles[j]) toggles[j].classList.add('open');
            }
        } else {
            // Close all, then open specific
            var bodies = E.viewSOP.querySelectorAll('.sop-section-body');
            var toggles = E.viewSOP.querySelectorAll('.sec-toggle');
            for (var j = 0; j < bodies.length; j++) {
                bodies[j].classList.remove('open');
                if (toggles[j]) toggles[j].classList.remove('open');
            }

            var targetSection = E.viewSOP.querySelector('.sop-section[data-sec="' + segIndex + '"]');
            if (targetSection) {
                var body = targetSection.querySelector('.sop-section-body');
                var toggle = targetSection.querySelector('.sec-toggle');
                if (body) body.classList.add('open');
                if (toggle) toggle.classList.add('open');

                // Smooth scroll to section
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }

    // ============================================
    // SOP NORMALIZATION
    // ============================================
    function normSop(d) {
        if (!d.name) {
            if (d.title) d.name = d.title;
            else d.name = 'Unbenannt';
        }

        d.category = rc(d.category);

        if (!d.stand) {
            if (d.date) d.stand = d.date;
            else d.stand = '';
        }

        if (!d.sources) {
            if (d.quellen) d.sources = d.quellen;
            else if (d.references) d.sources = d.references;
            else d.sources = '';
        }

        if (!d.sections) {
            if (d.content && Array.isArray(d.content)) d.sections = d.content;
            else d.sections = [];
        }

        for (var i = 0; i < d.sections.length; i++) {
            var sec = d.sections[i];
            if (!sec.title) {
                if (sec.name) sec.title = sec.name;
                else if (sec.heading) sec.title = sec.heading;
                else sec.title = 'Abschnitt ' + (i + 1);
            }
            if (!sec.html) {
                if (sec.content) sec.html = sec.content;
                else if (sec.body) sec.html = sec.body;
                else if (sec.text) sec.html = sec.text;
                else sec.html = '';
            }
        }

        return d;
    }

    // ============================================
    // THEME & FONT MANAGEMENT
    // ============================================
    function lTh() {
        var v = localStorage.getItem('sop-theme');
        if (v === 'dark' || v === 'light') S.theme = v;
        else if (window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches) {
            S.theme = 'dark';
        }
    }

    function aTh() {
        document.documentElement.setAttribute('data-theme', S.theme);
        localStorage.setItem('sop-theme', S.theme);
        var dk = S.theme === 'dark';

        if (E.themeToggleIcon) E.themeToggleIcon.className = dk ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
        if (E.themeToggleMobileIcon) E.themeToggleMobileIcon.className = dk ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
        if (E.themeToggleLabel) E.themeToggleLabel.textContent = dk ? 'Light Mode' : 'Dark Mode';
        if (E.metaThemeColor) E.metaThemeColor.setAttribute('content', dk ? '#1e293b' : '#ffffff');
    }

    function lFs() {
        var v = parseInt(localStorage.getItem('sop-fontsize'));
        if (v >= FSN && v <= FSX) S.fs = v;
    }

    function aFs() {
        document.documentElement.style.setProperty('--font-base', S.fs + 'px');
        localStorage.setItem('sop-fontsize', S.fs);

        if (E.fontIndicatorDesktop) E.fontIndicatorDesktop.textContent = S.fs;
        if (E.fontIndicatorMobile) E.fontIndicatorMobile.textContent = S.fs;
    }

    function cFs(d) {
        S.fs = Math.max(FSN, Math.min(FSX, S.fs + d));
        aFs();
    }

    // ============================================
    // HAPTIC FEEDBACK
    // ============================================
    function haptic(type) {
        if (!navigator.vibrate) return;
        var patterns = {
            light: 10,
            medium: 20,
            heavy: 50
        };
        navigator.vibrate(patterns[type] || 10);
    }

    // ============================================
    // VERSION CHECK & UPDATE NOTIFICATION
    // ============================================
    function checkForUpdate() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'version.json?_=' + new Date().getTime(), true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    try {
                        var serverData = JSON.parse(xhr.responseText);
                        var serverVersion = serverData.version || '0.0.0';
                        var localVersion = localStorage.getItem('sop-app-version') || APP_VERSION;

                        // If server version is different, notify user
                        if (serverVersion !== localVersion) {
                            showUpdateNotification(serverData);
                        }

                        // Store current version
                        localStorage.setItem('sop-app-version', APP_VERSION);
                    } catch (e) {
                        console.log('Version check failed:', e);
                    }
                }
            }
        };
        xhr.onerror = function() {
            console.log('Version check network error');
        };
        xhr.send();
    }

    function showUpdateNotification(serverData) {
        var existing = document.getElementById('updateNotification');
        if (existing) existing.remove();

        var notification = document.createElement('div');
        notification.id = 'updateNotification';
        notification.innerHTML =
            '<div class="update-notif-content">' +
            '<i class="fa-solid fa-cloud-arrow-down"></i>' +
            '<div class="update-notif-text">' +
            '<strong>Neue Version verfügbar</strong>' +
            '<p>Tippen zum Aktualisieren</p>' +
            '</div>' +
            '<button id="updateNotifDismiss"><i class="fa-solid fa-xmark"></i></button>' +
            '</div>';

        var style = document.createElement('style');
        style.textContent =
            '#updateNotification {' +
            'position: fixed;' +
            'bottom: calc(var(--btm-h) + 80px + env(safe-area-inset-bottom, 0px));' +
            'left: 16px;' +
            'right: 16px;' +
            'background: var(--surface);' +
            'border: 1px solid var(--border);' +
            'border-radius: var(--radius-md);' +
            'box-shadow: var(--shadow-lg);'+
            'z-index: 100;' +
            'animation: slideUpFade 0.4s var(--ease-out-cubic) both;' +
            '}' +
            '@keyframes slideUpFade {' +
            'from { opacity: 0; transform: translateY(20px); }' +
            'to { opacity: 1; transform: translateY(0); }' +
            '}' +
            '.update-notif-content {' +
            'display: flex;' +
            'align-items: center;' +
            'gap: 12px;' +
            'padding: 14px 16px;' +
            '}' +
            '.update-notif-content > i {' +
            'font-size: 1.4rem;' +
            'color: var(--primary);' +
            'flex-shrink: 0;' +
            '}' +
            '.update-notif-text {' +
            'flex: 1;' +
            '}' +
            '.update-notif-text strong {' +
            'display: block;' +
            'font-size: 0.9rem;' +
            'color: var(--text);' +
            'margin-bottom: 2px;' +
            '}' +
            '.update-notif-text p {' +
            'font-size: 0.75rem;' +
            'color: var(--text3);' +
            'margin: 0;' +
            '}' +
            '#updateNotifDismiss {' +
            'background: none;' +
            'border: none;' +
            'color: var(--text3);' +
            'font-size: 1rem;' +
            'padding: 6px;' +
            'cursor: pointer;' +
            'border-radius: var(--radius);' +
            'min-width: 36px;' +
            'min-height: 36px;' +
            'display: flex;' +
            'align-items: center;' +
            'justify-content: center;' +
            '}' +
            '#updateNotifDismiss:hover {' +
            'background: var(--hover);' +
            'color: var(--text);' +
            '}';

        document.head.appendChild(style);
        document.body.appendChild(notification);

        notification.addEventListener('click', function(e) {
            if (e.target.closest('#updateNotifDismiss')) return;
            // Trigger page reload to get new version
            window.location.reload(true);
        });

        document.getElementById('updateNotifDismiss').addEventListener('click', function(e) {
            e.stopPropagation();
            notification.style.animation = 'slideDownFade 0.3s ease forwards';
            setTimeout(function() {
                notification.remove();
                style.remove();
            }, 300);
        });
    }

    // ============================================
    // INITIALIZATION
    // ============================================
    function init() {
        cache();
        lTh();
        aTh();
        lFs();
        aFs();

        // Initialize SOP data
        if (window.SOP_DATA && window.SOP_DATA.length) {
            for (var i = 0; i < window.SOP_DATA.length; i++) {
                var d = window.SOP_DATA[i];
                if (!d || !d.id) continue;
                normSop(d);
                S.data.push(d);
            }
        }

        // Sort alphabetically
        S.data.sort(function(a, b) {
            return (a.name || '').localeCompare(b.name || '', 'de');
        });

        rSB();
        rHome();
        bind();

        // Handle initial hash
        var h = window.location.hash;
        if (h && h.indexOf('#sop/') === 0) {
            var id = h.substring(5);
            var found = false;
            for (var j = 0; j < S.data.length; j++) {
                if (S.data[j].id === id) {
                    found = true;
                    break;
                }
            }
            if (found) {
                S.sopId = id;
                sTab('sop');
            } else {
                sTab('home');
            }
        } else {
            sTab('home');
        }

        uOff();

        // Initialize advanced features
        initSwipeGestures();
        initDraggablePicker();

        // Check for updates (only in web context, not local file)
        if (window.location.protocol !== 'file:') {
            setTimeout(checkForUpdate, 1000);
        }
    }

    // ============================================
    // EVENT BINDINGS
    // ============================================
    function bind() {
        // Theme toggles
        E.themeToggle.addEventListener('click', function() {
            S.theme = S.theme === 'dark' ? 'light' : 'dark';
            aTh();
        });

        E.themeToggleMobile.addEventListener('click', function() {
            S.theme = S.theme === 'dark' ? 'light' : 'dark';
            aTh();
        });

        // Sidebar search
        E.searchInput.addEventListener('input', function() {
            S.hQ = this.value;
            rNav();
            E.searchClear.classList.toggle('show', this.value.length > 0);
        });

        E.searchClear.addEventListener('click', function() {
            E.searchInput.value = '';
            S.hQ = '';
            rNav();
            E.searchClear.classList.remove('show');
            E.searchInput.focus();
        });

        // App logo
        E.appLogo.addEventListener('click', function(e) {
            e.preventDefault();
            S.sopId = null;
            S.navStack = [];
            sTab('home');
        });

        // Category toggle
        if (E.sidebarCatToggle) {
            E.sidebarCatToggle.addEventListener('click', function() {
                S.sCatOpen = !S.sCatOpen;
                E.sidebarCatToggle.classList.toggle('open', S.sCatOpen);
                E.categoryFilters.classList.toggle('open', S.sCatOpen);
            });
        }

        // Search view input
        E.searchViewInput.addEventListener('input', function() {
            S.sQ = this.value;
            rSearch();
            E.searchViewClear.classList.toggle('show', this.value.length > 0);
        });

        E.searchViewClear.addEventListener('click', function() {
            E.searchViewInput.value = '';
            S.sQ = '';
            rSearch();
            E.searchViewClear.classList.remove('show');
            E.searchViewInput.focus();
        });

        // Font controls
        E.fontDecDesktop.addEventListener('click', function() { cFs(-1); });
        E.fontIncDesktop.addEventListener('click', function() { cFs(1); });
        E.fontDecMobile.addEventListener('click', function() { cFs(-1); });
        E.fontIncMobile.addEventListener('click', function() { cFs(1); });

        // Back button with pop navigation
        E.backBtn.addEventListener('click', function() {
            popNav();
        });

        // TOC buttons
        E.desktopTocBtn.addEventListener('click', function() { oPk(); });
        E.fabAction.addEventListener('click', function() { oPk(); });

        // Picker
        E.sectionPickerBackdrop.addEventListener('click', function() { cPk(); });
        E.sectionPickerClose.addEventListener('click', function() { cPk(); });
        E.sectionPickerPrint.addEventListener('click', function() {
            cPk();
            setTimeout(function() {
                S.allO = true;
                rSOP();
                setTimeout(function() {
                    window.print();
                    S.allO = false;
                    rSOP();
                }, 300);
            }, 200);
        });

        // Bottom navigation
        var bns = E.bottomNav.querySelectorAll('.btm-btn');
        for (var i = 0; i < bns.length; i++) {
            (function(bn) {
                bn.addEventListener('click', function() {
                    var t = bn.getAttribute('data-tab');
                    if (t) {
                        S.sopId = null;
                        S.navStack = [];
                        if (t === 'browse') {
                            S.catB = 'all';  // Filter zurücksetzen
                            S.bQ = '';       // Suchbegriff zurücksetzen
                        }
                        sTab(t);
                    }
                });
            })(bns[i]);
        }

        // FAB visibility on scroll
        E.contentScroll.addEventListener('scroll', throttle(handleFabVisibility, 100), { passive: true });

        // Sticky section bar
        E.contentScroll.addEventListener('scroll', throttle(uSticky, 50), { passive: true });

        // Online/Offline
        window.addEventListener('online', function() { S.off = false; uOff(); });
        window.addEventListener('offline', function() { S.off = true; S.ts = new Date(); uOff(); });

        // Resize
        window.addEventListener('resize', function() {
            S.mob = window.innerWidth < 1024;
        });

        // Pull to refresh
        E.contentScroll.addEventListener('touchstart', handlePullStart, { passive: true });
        E.contentScroll.addEventListener('touchmove', handlePullMove, { passive: true });
        E.contentScroll.addEventListener('touchend', handlePullEnd, { passive: true });

        // Spotlight search
        if (E.spotlightBtn) {
            E.spotlightBtn.addEventListener('click', openSpotlight);
        }

        if (E.spotlightBackdrop) {
            E.spotlightBackdrop.addEventListener('click', closeSpotlight);
        }

        if (E.spotlightCancel) {
            E.spotlightCancel.addEventListener('click', closeSpotlight);
        }

        if (E.spotlightInput) {
            E.spotlightInput.addEventListener('input', function() {
                S.sQ = this.value;
                E.spotlightClear.classList.toggle('show', this.value.length > 0);
                renderSpotlightResults();
            });
        }

        if (E.spotlightClear) {
            E.spotlightClear.addEventListener('click', function() {
                if (E.spotlightInput) {
                    E.spotlightInput.value = '';
                    S.sQ = '';
                    E.spotlightClear.classList.remove('show');
                    renderSpotlightResults();
                    E.spotlightInput.focus();
                }
            });
        }

        // Keyboard shortcut for spotlight
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                if (E.spotlightOverlay && E.spotlightOverlay.classList.contains('show')) {
                    closeSpotlight();
                }
                if (E.sectionPickerOverlay && E.sectionPickerOverlay.classList.contains('show')) {
                    cPk();
                }
            }

            // Ctrl/Cmd + K for spotlight
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                openSpotlight();
            }
        });
    }

    // ============================================
    // FAB VISIBILITY
    // ============================================
    var lastScrollY = 0;
    var fabVisible = true;

    function handleFabVisibility() {
        var fab = E.fabAction;
        if (!fab || !fab.classList.contains('show')) return;

        var currentScrollY = E.contentScroll.scrollTop;
        var scrollDelta = currentScrollY - lastScrollY;

        if (scrollDelta > 5 && currentScrollY > 100 && fabVisible) {
            fab.style.transform = 'translateY(100px) scale(0.8)';
            fab.style.opacity = '0';
            fabVisible = false;
        } else if (scrollDelta < -5 && !fabVisible) {
            fab.style.transform = 'translateY(0) scale(1)';
            fab.style.opacity = '1';
            fabVisible = true;
        }

        lastScrollY = currentScrollY;
    }

    // ============================================
    // PULL TO REFRESH
    // ============================================
    var PTH = 70;
    var pullStartY = 0;

    function handlePullStart(e) {
        if (E.contentScroll.scrollTop !== 0) return;
        pullStartY = e.touches[0].clientY;
    }

    function handlePullMove(e) {
        if (E.contentScroll.scrollTop !== 0) return;
        var deltaY = e.touches[0].clientY - pullStartY;

        if (deltaY > 0 && deltaY < PTH) {
            E.pullIndicator.classList.add('show');
            E.pullIndicator.style.transform = 'translateX(-50%) translateY(' + (deltaY - 40) + 'px)';
        }
    }

    function handlePullEnd(e) {
        var deltaY = E.contentScroll.scrollTop > 0 ? 0 : (e.changedTouches ? e.changedTouches[0].clientY - pullStartY : 0);

        E.pullIndicator.classList.remove('show');
        E.pullIndicator.style.transform = '';

        if (deltaY > PTH / 2) {
            E.pullIndicator.classList.add('spin');
            haptic('medium');

            setTimeout(function() {
                rHome();
                rNav();
                if (S.tab === 'browse') rBrowse();
                if (S.tab === 'search') rSearch();
                if (S.tab === 'sop') rSOP();
                E.pullIndicator.classList.remove('show', 'spin');
            }, 600);
        }
    }

    // ============================================
    // OFFLINE STATUS
    // ============================================
    function uOff() {
        if (E.offlineBanner) {
            E.offlineBanner.classList.toggle('show', S.off);
            if (S.off && S.ts && E.offlineTimestamp) {
                E.offlineTimestamp.textContent = '(' + S.ts.toLocaleTimeString('de-DE') + ')';
            }
        }
    }

    // ============================================
    // TAB NAVIGATION
    // ============================================
    function sTab(t) {
        S.tab = t;

        var views = ['viewHome', 'viewBrowse', 'viewSearch', 'viewSOP'];
        for (var i = 0; i < views.length; i++) {
            if (E[views[i]]) {
                E[views[i]].classList.remove('active');
                E[views[i]].style.opacity = '';
                E[views[i]].style.transform = '';
            }
        }

        var bns = E.bottomNav.querySelectorAll('.btm-btn');
        for (var i = 0; i < bns.length; i++) {
            bns[i].classList.remove('active');
        }

        E.backBtn.classList.remove('show');
        E.desktopTocBtn.style.display = 'none';
        E.fabAction.classList.remove('show');
        E.stickySectionBar.classList.remove('show');

        dSO();

        if (t === 'home') {
            E.viewHome.classList.add('active');
            rBC([]);
            E.mobileTitle.textContent = 'Patientenpfade: ZNA';
            var hb = E.bottomNav.querySelector('[data-tab="home"]');
            if (hb) hb.classList.add('active');
        } else if (t === 'browse') {
            E.viewBrowse.classList.add('active');
            rBrowse();
            rBC([{ label: 'SOPs' }]);
            E.mobileTitle.textContent = 'SOPs';
            var bb = E.bottomNav.querySelector('[data-tab="browse"]');
            if (bb) bb.classList.add('active');
            // Show back button in browse view for navigation back to home
            if (S.navStack.length === 0) {
                E.backBtn.classList.add('show');
            }
        } else if (t === 'search') {
            E.viewSearch.classList.add('active');
            rSearch();
            rBC([{ label: 'Suche' }]);
            E.mobileTitle.textContent = 'Suche';
            var sb = E.bottomNav.querySelector('[data-tab="search"]');
            if (sb) sb.classList.add('active');
            setTimeout(function() { E.searchViewInput.focus(); }, 100);
        } else if (t === 'sop') {
            E.viewSOP.classList.add('active');
            rSOP();
            E.backBtn.classList.add('show');
            E.desktopTocBtn.style.display = '';
            E.fabAction.classList.add('show');

            var d = null;
            for (var i = 0; i < S.data.length; i++) {
                if (S.data[i].id === S.sopId) {
                    d = S.data[i];
                    break;
                }
            }

            if (d) {
                var cn = CATS[d.category] ? CATS[d.category].name : '';
                E.mobileTitle.textContent = d.name || '';
                rBC([
                    { label: 'SOPs', click: function() { S.sopId = null; sTab('browse'); } },
                    { label: d.name || '' }
                ]);
            }

            iSO();
        }

        E.contentScroll.scrollTop = 0;
        rNav();
    }

    // ============================================
    // RENDER FUNCTIONS
    // ============================================
    function rSB() {
        var counts = {};
        var keys = Object.keys(CATS);
        for (var i = 0; i < keys.length; i++) counts[keys[i]] = 0;

        for (var i = 0; i < S.data.length; i++) {
            var c = S.data[i].category;
            if (counts[c] !== undefined) counts[c]++;
        }

        var html = '<span class="sidebar-cat-chip' + (S.catD === 'all' ? ' active' : '') + '" data-cat="all">Alle <span class="cat-count">' + S.data.length + '</span></span>';
        for (var i = 0; i < keys.length; i++) {
            if (counts[keys[i]] > 0) {
                html += '<span class="sidebar-cat-chip' + (S.catD === keys[i] ? ' active' : '') + '" data-cat="' + keys[i] + '">' + CATS[keys[i]].name + ' <span class="cat-count">' + counts[keys[i]] + '</span></span>';
            }
        }

        E.categoryFilters.innerHTML = html;

        var chips = E.categoryFilters.querySelectorAll('.sidebar-cat-chip');
        for (var i = 0; i < chips.length; i++) {
            (function(ch) {
                ch.addEventListener('click', function() {
                    S.catD = ch.getAttribute('data-cat');
                    var all = E.categoryFilters.querySelectorAll('.sidebar-cat-chip');
                    for (var j = 0; j < all.length; j++) all[j].classList.remove('active');
                    ch.classList.add('active');
                    rNav();
                });
            })(chips[i]);
        }

        rNav();
    }

    function rNav() {
        var list = S.data;

        if (S.catD !== 'all') {
            list = [];
            for (var i = 0; i < S.data.length; i++) {
                if (S.data[i].category === S.catD) list.push(S.data[i]);
            }
        }

        if (S.hQ) {
            var q = S.hQ.toLowerCase();
            var f = [];
            for (var i = 0; i < list.length; i++) {
                if ((list[i].name || '').toLowerCase().indexOf(q) !== -1) f.push(list[i]);
            }
            list = f;
        }

        var html = '';
        for (var i = 0; i < list.length; i++) {
            var d = list[i];
            var cl = gc(d.category);
            var isAct = S.sopId === d.id && S.tab === 'sop';
            var nm = S.hQ ? hl(d.name || '', S.hQ) : (d.name || '');

            html += '<li><a href="#sop/' + d.id + '" class="' + (isAct ? 'active' : '') + '" data-id="' + d.id + '">';
            html += '<span class="nav-dot" style="background:' + cl + '"></span>';
            html += '<span class="nav-label">' + nm + '</span>';
            html += '</a></li>';
        }

        E.navList.innerHTML = html;

        var links = E.navList.querySelectorAll('a');
        for (var i = 0; i < links.length; i++) {
            (function(a) {
                a.addEventListener('click', function(e) {
                    e.preventDefault();
                    pushNav(a.getAttribute('data-id'));
                });
            })(links[i]);
        }
    }

    function rHome() {
        var now = new Date();
        var dd = String(now.getDate()).padStart(2, '0');
        var mm = String(now.getMonth() + 1).padStart(2, '0');
        var yy = now.getFullYear();
        var hh = String(now.getHours()).padStart(2, '0');
        var mi = String(now.getMinutes()).padStart(2, '0');

        E.heroArea.innerHTML = '<img class="hero-logo" src="img/Basislogo_farbig.png" alt="Klinikum St. Georg">' +
            '<h1 class="hero-title">Patientenpfade</h1>' +
            '<p class="hero-subtitle">Zentrale Notaufnahme</p>' +
            '<p class="hero-org">AG Klinische Pfade</p>' +
            '<div class="hero-search">' +
            '<i class="fa-solid fa-magnifying-glass"></i>' +
            '<input type="text" id="heroSearchInput" placeholder="SOP schnell finden..." autocomplete="off">' +
            '</div>';

        var hsi = document.getElementById('heroSearchInput');
        if (hsi) {
            hsi.addEventListener('input', function() {
                var v = this.value;
                if (v.length >= 1) {
                    S.sQ = v;
                    openSpotlight();
                    if (E.spotlightInput) E.spotlightInput.value = v;
                    E.spotlightClear.classList.toggle('show', v.length > 0);
                    renderSpotlightResults();
                }
            });
        }

        var counts = {};
        var keys = Object.keys(CATS);
        for (var i = 0; i < keys.length; i++) counts[keys[i]] = 0;

        for (var i = 0; i < S.data.length; i++) {
            var c = S.data[i].category;
            if (counts[c] !== undefined) counts[c]++;
        }

        var gh = '';

        // Add "Alle SOPs" card at the beginning - styled like category cards
        gh += '<div class="cat-card cat-card-all" data-cat="all" style="--cat-color:var(--primary)">';
        gh += '<i class="fa-solid fa-list cat-card-icon" style="color:var(--primary)"></i>';
        gh += '<span class="cat-card-name">Alle SOPs</span>';
        gh += '<span class="cat-card-count">' + S.data.length + ' Pfade</span>';
        gh += '</div>';

        // Add category cards
        for (var i = 0; i < keys.length; i++) {
            if (counts[keys[i]] > 0) {
                var cl = gc(keys[i]);
                var ic = CATS[keys[i]].icon;
                gh += '<div class="cat-card" data-cat="' + keys[i] + '" style="--cat-color:' + cl + '">';
                gh += '<i class="fa-solid ' + ic + ' cat-card-icon" style="color:' + cl + '"></i>';
                gh += '<span class="cat-card-name">' + CATS[keys[i]].name + '</span>';
                gh += '<span class="cat-card-count">' + counts[keys[i]] + ' SOPs</span>';
                gh += '</div>';
            }
        }

        E.catGrid.innerHTML = gh;

        var cards = E.catGrid.querySelectorAll('.cat-card');
        for (var i = 0; i < cards.length; i++) {
            (function(c) {
                c.addEventListener('click', function() {
                    S.catB = c.getAttribute('data-cat');
                    sTab('browse');
                });
            })(cards[i]);
        }

        E.homeInfo.innerHTML = '<p class="info-count">' + S.data.length + ' Patientenpfade verfügbar</p>' +
            '<p>Stand: ' + dd + '.' + mm + '.' + yy + ' ' + hh + ':' + mi + '</p>';
    }

    function rBrowse() {
        var html = '<div class="browse-bar-top">' +
            '<div class="browse-search">' +
            '<i class="fa-solid fa-magnifying-glass"></i>' +
            '<input type="text" id="browseSearchInput" placeholder="SOPs filtern..." autocomplete="off" value="' + (S.bQ || '') + '">' +
            '<button class="browse-search-clear' + (S.bQ ? ' show' : '') + '" id="browseSearchClear"><i class="fa-solid fa-xmark"></i></button>' +
            '</div>' +
            '<button class="browse-cat-toggle' + (S.bCatOpen ? ' open' : '') + '" id="browseCatToggle">' +
            '<i class="fa-solid fa-filter"></i> Kategorien' +
            (S.catB !== 'all' ? ' <span class="browse-active-cat">' + ((CATS[S.catB] && CATS[S.catB].name) || '') + '</span>' : '') +
            '<i class="fa-solid fa-chevron-down toggle-icon"></i>' +
            '</button>' +
            '<div class="browse-cats' + (S.bCatOpen ? ' open' : '') + '" id="browseCategoryFilters"></div>' +
            '</div>' +
            '<div class="browse-list" id="browseList"></div>';

        E.viewBrowse.innerHTML = html;

        E.browseSearchInput = document.getElementById('browseSearchInput');
        E.browseSearchClear = document.getElementById('browseSearchClear');
        E.browseCatToggle = document.getElementById('browseCatToggle');
        E.browseCategoryFilters = document.getElementById('browseCategoryFilters');
        E.browseList = document.getElementById('browseList');

        E.browseSearchInput.addEventListener('input', function() {
            S.bQ = this.value;
            E.browseSearchClear.classList.toggle('show', this.value.length > 0);
            rBrowseList();
        });

        E.browseSearchClear.addEventListener('click', function() {
            E.browseSearchInput.value = '';
            S.bQ = '';
            E.browseSearchClear.classList.remove('show');
            E.browseSearchInput.focus();
            rBrowseList();
        });

        E.browseCatToggle.addEventListener('click', function() {
            S.bCatOpen = !S.bCatOpen;
            E.browseCatToggle.classList.toggle('open', S.bCatOpen);
            E.browseCategoryFilters.classList.toggle('open', S.bCatOpen);
        });

        rBrowseCats();
        rBrowseList();
    }

    function rBrowseCats() {
        var counts = {};
        var keys = Object.keys(CATS);
        for (var i = 0; i < keys.length; i++) counts[keys[i]] = 0;

        for (var i = 0; i < S.data.length; i++) {
            var c = S.data[i].category;
            if (counts[c] !== undefined) counts[c]++;
        }

        var html = '<span class="browse-cat-chip' + (S.catB === 'all' ? ' active' : '') + '" data-cat="all">Alle</span>';
        for (var i = 0; i < keys.length; i++) {
            if (counts[keys[i]] > 0) {
                html += '<span class="browse-cat-chip' + (S.catB === keys[i] ? ' active' : '') + '" data-cat="' + keys[i] + '">' + CATS[keys[i]].name + ' (' + counts[keys[i]] + ')</span>';
            }
        }

        E.browseCategoryFilters.innerHTML = html;

        var chips = E.browseCategoryFilters.querySelectorAll('.browse-cat-chip');
        for (var i = 0; i < chips.length; i++) {
            (function(ch) {
                ch.addEventListener('click', function() {
                    S.catB = ch.getAttribute('data-cat');
                    var all = E.browseCategoryFilters.querySelectorAll('.browse-cat-chip');
                    for (var j = 0; j < all.length; j++) all[j].classList.remove('active');
                    ch.classList.add('active');
                    rBrowseList();

                    var toggleLabel = E.browseCatToggle.querySelector('.browse-active-cat');
                    if (S.catB !== 'all') {
                        if (!toggleLabel) {
                            var sp = document.createElement('span');
                            sp.className = 'browse-active-cat';
                            sp.textContent = (CATS[S.catB] && CATS[S.catB].name) || '';
                            E.browseCatToggle.insertBefore(sp, E.browseCatToggle.querySelector('.toggle-icon'));
                        } else {
                            toggleLabel.textContent = (CATS[S.catB] && CATS[S.catB].name) || '';
                        }
                    } else {
                        if (toggleLabel) toggleLabel.remove();
                    }
                });
            })(chips[i]);
        }
    }

    function rBrowseList() {
        var list = S.data;

        if (S.catB !== 'all') {
            list = [];
            for (var i = 0; i < S.data.length; i++) {
                if (S.data[i].category === S.catB) list.push(S.data[i]);
            }
        }

        if (S.bQ) {
            var q = S.bQ.toLowerCase();
            var f = [];
            for (var i = 0; i < list.length; i++) {
                if ((list[i].name || '').toLowerCase().indexOf(q) !== -1) f.push(list[i]);
            }
            list = f;
        }

        var html = '';
        for (var i = 0; i < list.length; i++) {
            var d = list[i];
            var cl = gc(d.category);
            var cn = CATS[d.category] ? CATS[d.category].name : '';
            var nm = S.bQ ? hl(d.name || '', S.bQ) : (d.name || '');

            html += '<div class="browse-item" data-id="' + d.id + '">';
            html += '<span class="bi-dot" style="background:' + cl + '"></span>';
            html += '<span class="bi-name">' + nm + '</span>';
            html += '<span class="bi-cat">' + cn + '</span>';
            html += '<i class="fa-solid fa-chevron-right bi-arrow"></i>';
            html += '</div>';
        }

        if (list.length === 0) {
            html = '<div class="search-empty"><i class="fa-solid fa-search"></i><p>Keine SOPs gefunden.</p></div>';
        }

        E.browseList.innerHTML = html;

        var items = E.browseList.querySelectorAll('.browse-item');
        for (var i = 0; i < items.length; i++) {
            (function(it) {
                it.addEventListener('click', function() {
                    pushNav(it.getAttribute('data-id'));
                });
            })(items[i]);
        }
    }

    function rSearch() {
        if (!S.sQ) {
            E.searchResultsArea.innerHTML = '<div class="search-empty"><i class="fa-solid fa-magnifying-glass"></i><p>Suchbegriff eingeben, um SOPs zu durchsuchen.</p></div>';
            return;
        }

        var q = S.sQ.toLowerCase();
        var results = [];

        for (var i = 0; i < S.data.length; i++) {
            var d = S.data[i];
            var score = 0;
            var nameMatch = (d.name || '').toLowerCase().indexOf(q) !== -1;
            if (nameMatch) score += 10;

            var secMatches = [];
            if (d.sections) {
                for (var j = 0; j < d.sections.length; j++) {
                    var sec = d.sections[j];
                    var secTitle = sec.title || '';
                    var secHtml = sec.html || '';
                    var txt = strip(secHtml).toLowerCase();
                    if (txt.indexOf(q) !== -1 || secTitle.toLowerCase().indexOf(q) !== -1) {
                        score += 3;
                        var idx = txt.indexOf(q);
                        var start = Math.max(0, idx - 60);
                        var end = Math.min(txt.length, idx + q.length + 60);
                        var snippet = (start > 0 ? '...' : '') + strip(secHtml).substring(start, end) + (end < txt.length ? '...' : '');
                        secMatches.push({ title: secTitle, snippet: snippet });
                    }
                }
            }

            if (d.sources) {
                var srcTxt = strip(d.sources).toLowerCase();
                if (srcTxt.indexOf(q) !== -1) score += 1;
            }

            if (score > 0) {
                results.push({ sop: d, score: score, nameMatch: nameMatch, secMatches: secMatches });
            }
        }

        results.sort(function(a, b) { return b.score - a.score; });

        if (results.length === 0) {
            E.searchResultsArea.innerHTML = '<div class="search-empty"><i class="fa-solid fa-circle-xmark"></i><p>Keine Ergebnisse für "' + hl(S.sQ, '') + '"</p></div>';
            return;
        }

        var html = '';
        for (var i = 0; i < results.length; i++) {
            var r = results[i];
            var d = r.sop;
            var cl = gc(d.category);
            var cn = CATS[d.category] ? CATS[d.category].name : '';

            html += '<div class="search-result" data-id="' + d.id + '">';
            html += '<h4>' + hl(d.name || '', S.sQ) + '</h4>';
            if (r.secMatches.length > 0) {
                html += '<p>' + hl(r.secMatches[0].snippet, S.sQ) + '</p>';
            }
            html += '<span class="sr-cat"><i class="fa-solid fa-circle" style="color:' + cl + ';font-size:.5rem"></i> ' + cn + '</span>';
            html += '</div>';
        }

        E.searchResultsArea.innerHTML = html;

        var items = E.searchResultsArea.querySelectorAll('.search-result');
        for (var i = 0; i < items.length; i++) {
            (function(it) {
                it.addEventListener('click', function() {
                    pushNav(it.getAttribute('data-id'));
                });
            })(items[i]);
        }
    }

    function rSOP() {
        var d = null;
        for (var i = 0; i < S.data.length; i++) {
            if (S.data[i].id === S.sopId) {
                d = S.data[i];
                break;
            }
        }

        if (!d) {
            E.viewSOP.innerHTML = '<div class="search-empty"><p>SOP nicht gefunden.</p></div>';
            return;
        }

        var ck = d.category;
        var cl = gc(ck);
        var cn = CATS[ck] ? CATS[ck].name : '';
        var ci = CATS[ck] ? CATS[ck].icon : 'fa-circle-info';
        var secCount = d.sections ? d.sections.length : 0;

        // Build header
        var html = '<div class="sop-header">' +
            '<div class="sop-header-top">' +
            '<span class="sop-cat-badge" style="background:' + cl + '"><i class="fa-solid ' + ci + '"></i> ' + cn + '</span>' +
            (d.stand ? '<span class="sop-meta-item"><i class="fa-solid fa-calendar"></i> Stand: ' + d.stand + '</span>' : '') +
            '</div>' +
            '<h1 class="sop-title">' + d.name + '</h1>' +
            '<div class="sop-meta">' +
            '<span class="sop-meta-item"><i class="fa-solid fa-layer-group"></i> ' + secCount + ' Abschnitte</span>' +
            '</div></div>';

        // Add segmented control
        html += renderSegmentedControl(d);

        // Build sections
        if (d.sections) {
            for (var i = 0; i < d.sections.length; i++) {
                var sec = d.sections[i];
                var secTitle = sec.title || 'Abschnitt ' + (i + 1);
                var secHtml = sec.html || '';
                var ic = SIC[secTitle] || 'fa-circle-info';
                var isAO = AO.indexOf(secTitle) !== -1;
                var op = S.allO || isAO;

                html += '<div class="sop-section" data-sec="' + i + '" style="animation-delay:' + (i * 0.05) + 's">';
                html += '<div class="sop-section-head" data-idx="' + i + '">';
                html += '<i class="fa-solid ' + ic + ' sec-icon" style="color:' + cl + '"></i>';
                html += '<span class="sec-title">' + secTitle + '</span>';
                html += '<i class="fa-solid fa-chevron-down sec-toggle' + (op ? ' open' : '') + '"></i>';
                html += '</div>';
                html += '<div class="sop-section-body' + (op ? ' open' : '') + '">' + secHtml + '</div>';
                html += '</div>';
            }
        }

        // Sources section
        if (d.sources) {
            html += '<div class="sop-section" style="animation-delay:' + (secCount * 0.05) + 's">';
            html += '<div class="sop-section-head" data-idx="sources">';
            html += '<i class="fa-solid fa-quote-right sec-icon" style="color:' + cl + '"></i>';
            html += '<span class="sec-title">Quellen</span>';
            html += '<i class="fa-solid fa-chevron-down sec-toggle"></i>';
            html += '</div>';
            html += '<div class="sop-section-body">';
            html += '<div class="sop-sources">' + d.sources + '</div>';
            html += '</div>';
            html += '</div>';
        }

        E.viewSOP.innerHTML = html;

        // Add segmented control handlers
        var segButtons = E.viewSOP.querySelectorAll('.segmented-btn');
        for (var i = 0; i < segButtons.length; i++) {
            (function(btn) {
                btn.addEventListener('click', function() {
                    var segIndex = btn.getAttribute('data-seg');
                    handleSegmentedClick(d, segIndex);
                });
            })(segButtons[i]);
        }

        // Add section click handlers
        var heads = E.viewSOP.querySelectorAll('.sop-section-head');
        for (var i = 0; i < heads.length; i++) {
            (function(hd) {
                hd.addEventListener('click', function() {
                    var bd = hd.nextElementSibling;
                    var tg = hd.querySelector('.sec-toggle');
                    var isOpen = bd.classList.contains('open');

                    if (isOpen) {
                        bd.classList.remove('open');
                        tg.classList.remove('open');
                    } else {
                        bd.classList.add('open');
                        tg.classList.add('open');
                    }
                });
            })(heads[i]);
        }

        rPk();
        rNav();

        if (!S.navStack.length || S.navStack[S.navStack.length - 1].sopId !== S.sopId) {
            history.replaceState(null, null, '#sop/' + S.sopId);
        }
    }

    function rBC(items) {
        if (!E.breadcrumb) return;

        var html = '<a href="#" class="bc-home">Start</a>';
        for (var i = 0; i < items.length; i++) {
            html += '<span class="sep"><i class="fa-solid fa-chevron-right"></i></span>';
            if (items[i].click) {
                html += '<a href="#" class="bc-link" data-idx="' + i + '">' + items[i].label + '</a>';
            } else {
                html += '<span>' + items[i].label + '</span>';
            }
        }

        E.breadcrumb.innerHTML = html;

        var hm = E.breadcrumb.querySelector('.bc-home');
        if (hm) hm.addEventListener('click', function(e) {
            e.preventDefault();
            S.sopId = null;
            S.navStack = [];
            sTab('home');
        });

        var lks = E.breadcrumb.querySelectorAll('.bc-link');
        for (var i = 0; i < lks.length; i++) {
            (function(l, idx) {
                l.addEventListener('click', function(e) {
                    e.preventDefault();
                    if (items[idx] && items[idx].click) items[idx].click();
                });
            })(lks[i], parseInt(lks[i].getAttribute('data-idx')));
        }
    }

    // ============================================
    // SECTION PICKER
    // ============================================
    function rPk() {
        if (!E.sectionPickerList) return;

        var d = null;
        for (var i = 0; i < S.data.length; i++) {
            if (S.data[i].id === S.sopId) {
                d = S.data[i];
                break;
            }
        }

        if (!d) return;

        var cl = gc(d.category);
        var html = '';

        if (d.sections) {
            for (var i = 0; i < d.sections.length; i++) {
                var sec = d.sections[i];
                var secTitle = sec.title || 'Abschnitt ' + (i + 1);
                var ic = SIC[secTitle] || 'fa-circle-info';
                html += '<li data-idx="' + i + '"><i class="fa-solid ' + ic + '" style="color:' + cl + '"></i> ' + secTitle + '</li>';
            }
        }

        if (d.sources) {
            html += '<li data-idx="sources"><i class="fa-solid fa-quote-right" style="color:' + cl + '"></i> Quellen</li>';
        }

        E.sectionPickerList.innerHTML = html;

        var lis = E.sectionPickerList.querySelectorAll('li');
        for (var i = 0; i < lis.length; i++) {
            (function(li) {
                li.addEventListener('click', function() {
                    var idx = li.getAttribute('data-idx');
                    cPk();

                    var sec;
                    if (idx === 'sources') {
                        var secs = E.viewSOP.querySelectorAll('.sop-section');
                        sec = secs[secs.length - 1];
                    } else {
                        sec = E.viewSOP.querySelector('.sop-section[data-sec="' + idx + '"]');
                    }

                    if (sec) {
                        var bd = sec.querySelector('.sop-section-body');
                        var tg = sec.querySelector('.sec-toggle');
                        if (bd && !bd.classList.contains('open')) {
                            bd.classList.add('open');
                            if (tg) tg.classList.add('open');
                        }
                        sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                });
            })(lis[i]);
        }
    }

    function oPk() {
        if (!E.sectionPickerOverlay) return;

        E.sectionPickerOverlay.classList.add('show');
        document.body.classList.add('picker-open');
        haptic('light');
    }

    function cPk() {
        if (!E.sectionPickerOverlay) return;

        E.sectionPickerOverlay.classList.remove('show');
        document.body.classList.remove('picker-open');
    }

    // ============================================
    // STICKY SECTION BAR
    // ============================================
    function uSticky() {
        if (S.tab !== 'sop') {
            E.stickySectionBar.classList.remove('show');
            return;
        }

        var secs = E.viewSOP.querySelectorAll('.sop-section');
        var ct = E.contentScroll.scrollTop + 120;
        var cur = null;

        for (var i = 0; i < secs.length; i++) {
            if (secs[i].offsetTop <= ct) cur = secs[i];
        }

        if (cur) {
            var hd = cur.querySelector('.sop-section-head');
            var ti = hd ? hd.querySelector('.sec-title') : null;
            var ic = hd ? hd.querySelector('.sec-icon') : null;

            if (ti) {
                E.stickySectionTitle.textContent = ti.textContent;
                if (ic) E.stickySectionIcon.className = ic.className;

                var d = null;
                for (var i = 0; i < S.data.length; i++) {
                    if (S.data[i].id === S.sopId) {
                        d = S.data[i];
                        break;
                    }
                }

                if (d) E.stickySopName.textContent = d.name || '';
                E.stickySectionBar.classList.add('show');
            }
        } else {
            E.stickySectionBar.classList.remove('show');
        }
    }

    // ============================================
    // INTERSECTION OBSERVER
    // ============================================
    var sObs = null;
    var sSec = '';

    function dSO() {
        if (sObs) {
            sObs.disconnect();
            sObs = null;
        }
        sSec = '';
    }

    function iSO() {
        if (!('IntersectionObserver' in window)) return;

        dSO();

        var secs = E.viewSOP.querySelectorAll('.sop-section');
        if (secs.length === 0) return;

        sObs = new IntersectionObserver(function(entries) {
            for (var i = 0; i < entries.length; i++) {
                if (entries[i].isIntersecting) {
                    var idx = entries[i].target.getAttribute('data-sec') || '';
                    if (idx !== sSec) {
                        sSec = idx;
                        var lis = E.sectionPickerList.querySelectorAll('li');
                        for (var j = 0; j < lis.length; j++) {
                            lis[j].classList.toggle('active', lis[j].getAttribute('data-idx') === idx);
                        }
                    }
                }
            }
        }, { root: E.contentScroll, threshold: 0.2 });

        for (var i = 0; i < secs.length; i++) {
            sObs.observe(secs[i]);
        }
    }

    // ============================================
    // GLOBAL API
    // ============================================
    window.registerSOP = function(d) {
        if (!d || !d.id) return;
        normSop(d);
        S.data.push(d);
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
