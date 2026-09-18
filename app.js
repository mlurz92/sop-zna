(function() {
    'use strict';

    // ============================================
    // APP VERSION - Für Update-Erkennung
    // ============================================
    var APP_VERSION = '2.10.0';

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

    // Schwelle für Segmented Control: ab hier gilt es als Wischen, nicht Tippen
    var SEG_TOUCH_THRESHOLD = 10;

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
        spotQ: '',
        hQ: '',
        theme: 'light',
        fs: FSD,
        mob: window.innerWidth < 1024,
        off: !navigator.onLine,
        ts: null,
        sCatOpen: false,
        bCatOpen: false,
        isNavigating: false
    };

    // Touch-State für Segmented Control
    var segTouchState = {
        startX: 0,
        startY: 0,
        targetBtn: null
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
            'fontDecMobile', 'fontIncMobile', 'fontIndicatorMobile',
            'fontDecDesktop', 'fontIncDesktop', 'fontIndicatorDesktop', 'pullIndicator',
            'sidebarCatToggle', 'browseCatToggle', 'viewContainer',
            'spotlightOverlay', 'spotlightBackdrop', 'spotlightContainer', 'spotlightInput',
            'spotlightClear', 'spotlightResults', 'spotlightCancel', 'spotlightBtn',
            'pickerSheet', 'pickerHandle', 'appProgress',
            'dirBtn', 'dirBtnMobile', 'dirOverlay', 'dirBackdrop', 'dirClose',
            'dirInput', 'dirClear', 'dirBody'
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

    var stripNode = null;

    function strip(html) {
        if (!stripNode) stripNode = document.createElement('div');
        stripNode.innerHTML = html;
        return stripNode.textContent || stripNode.innerText || '';
    }

    // Reintext eines Abschnitts - einmal ermitteln, danach aus dem Puffer.
    function secText(sec) {
        if (sec._text === undefined) sec._text = strip(sec.html || '');
        return sec._text;
    }

    function secTextLower(sec) {
        if (sec._textLower === undefined) sec._textLower = secText(sec).toLowerCase();
        return sec._textLower;
    }

    function sourcesTextLower(d) {
        if (d._srcLower === undefined) d._srcLower = strip(d.sources || '').toLowerCase();
        return d._srcLower;
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
    // MOTION-WERKZEUGKASTEN
    // ============================================
    // Alle Bewegungen laufen ausschliesslich ueber transform/opacity,
    // werden per requestAnimationFrame getaktet und respektieren die
    // Systemeinstellung "Bewegung reduzieren".

    var MOTION = {
        reduced: false,
        view: 360,        // Dauer eines Ansichtswechsels
        viewFast: 260,
        section: 320,     // Dauer des Auf-/Zuklappens
        micro: 180,
        staggerStep: 26,  // Verzoegerung je Listenelement
        staggerMax: 14    // ... hoechstens fuer so viele Elemente
    };

    function updateMotionPreference() {
        MOTION.reduced = !!(window.matchMedia &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    }

    function initMotionPreference() {
        updateMotionPreference();
        if (!window.matchMedia) return;
        var mq = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (mq.addEventListener) mq.addEventListener('change', updateMotionPreference);
        else if (mq.addListener) mq.addListener(updateMotionPreference);
    }

    function raf(fn) {
        if (window.requestAnimationFrame) return window.requestAnimationFrame(fn);
        return setTimeout(fn, 16);
    }

    // Zwei Frames warten: Frame 1 legt den Startzustand fest,
    // Frame 2 startet die Transition zuverlaessig.
    function nextFrame(fn) {
        raf(function() { raf(fn); });
    }

    function reflow(el) {
        if (el) return el.offsetHeight;
        return 0;
    }

    // Wartet auf das Ende einer Animation/Transition, mit Zeitlimit als
    // Sicherheitsnetz (falls das Event z.B. im Hintergrund-Tab ausbleibt).
    function afterMotion(el, eventName, duration, done) {
        var finished = false;
        var timer = null;

        function finish() {
            if (finished) return;
            finished = true;
            if (timer) clearTimeout(timer);
            if (el) el.removeEventListener(eventName, onEvent);
            done();
        }

        function onEvent(e) {
            if (e.target !== el) return;
            finish();
        }

        if (!el || MOTION.reduced) {
            raf(finish);
            return finish;
        }

        el.addEventListener(eventName, onEvent);
        timer = setTimeout(finish, duration + 90);
        return finish;
    }

    // Weiches Scrollen im Inhaltsbereich - eigene rAF-Schleife, damit
    // Dauer und Kurve auf allen Browsern identisch sind.
    var scrollAnimId = null;

    function stopSmoothScroll() {
        if (scrollAnimId && window.cancelAnimationFrame) {
            window.cancelAnimationFrame(scrollAnimId);
        }
        scrollAnimId = null;
    }

    function smoothScrollTo(container, targetTop, duration) {
        if (!container) return;
        stopSmoothScroll();

        var max = container.scrollHeight - container.clientHeight;
        var to = Math.max(0, Math.min(targetTop, max));
        var from = container.scrollTop;
        var delta = to - from;

        if (MOTION.reduced || Math.abs(delta) < 2 || !window.requestAnimationFrame) {
            container.scrollTop = to;
            return;
        }

        var dur = duration || Math.min(620, Math.max(260, Math.abs(delta) * 0.6));
        var start = null;

        function step(ts) {
            if (start === null) start = ts;
            var t = Math.min(1, (ts - start) / dur);
            container.scrollTop = from + delta * easeOutExpo(t);
            if (t < 1) scrollAnimId = window.requestAnimationFrame(step);
            else scrollAnimId = null;
        }

        scrollAnimId = window.requestAnimationFrame(step);
    }

    // Scrollt ein Element im Inhaltsbereich an den oberen Rand,
    // mit Platz fuer die eingeblendete Abschnittsleiste.
    function scrollElementIntoView(el, offset) {
        if (!el || !E.contentScroll) return;
        // Die angeheftete Kapitelleiste verdeckt den oberen Rand -
        // ihre Hoehe wird beim Sprungziel abgezogen.
        var pad = (offset === undefined) ? stickyOffset() + 12 : offset;
        smoothScrollTo(E.contentScroll, el.offsetTop - pad);
    }

    // Gestaffelter Auftritt: Verzoegerung wird gedeckelt, damit auch
    // lange Listen (73 SOPs) sofort vollstaendig sichtbar werden.
    function applyStagger(nodes, cls) {
        if (!nodes || !nodes.length) return;
        if (MOTION.reduced) return;

        var klass = cls || 'stagger-item';
        for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            var delay = Math.min(i, MOTION.staggerMax) * MOTION.staggerStep;
            node.style.setProperty('--stagger', delay + 'ms');
            node.classList.add(klass);
            (function(n, k) {
                afterMotion(n, 'animationend', 500 + MOTION.staggerMax * MOTION.staggerStep, function() {
                    n.classList.remove(k);
                    n.style.removeProperty('--stagger');
                });
            })(node, klass);
        }
    }

    // ============================================
    // RIPPLE (Tipp-Feedback)
    // ============================================
    var RIPPLE_SELECTOR = '.cat-card, .browse-item, .search-result, .btm-btn,' +
        ' .picker-list li, .spotlight-result, .sidebar-nav a, .browse-cat-chip,' +
        ' .sidebar-cat-chip, .segmented-btn';

    function spawnRipple(host, clientX, clientY) {
        if (MOTION.reduced || !host) return;

        var rect = host.getBoundingClientRect();
        if (!rect.width || !rect.height) return;

        var x = (clientX === undefined ? rect.left + rect.width / 2 : clientX) - rect.left;
        var y = (clientY === undefined ? rect.top + rect.height / 2 : clientY) - rect.top;
        var size = Math.max(rect.width, rect.height) * 2.2;

        var span = document.createElement('span');
        span.className = 'ripple';
        span.style.width = size + 'px';
        span.style.height = size + 'px';
        span.style.left = (x - size / 2) + 'px';
        span.style.top = (y - size / 2) + 'px';

        host.appendChild(span);

        afterMotion(span, 'animationend', 620, function() {
            if (span.parentNode) span.parentNode.removeChild(span);
        });
    }

    var pressedHost = null;

    function initRipples() {
        document.addEventListener('pointerdown', function(e) {
            if (e.pointerType === 'mouse' && e.button !== 0) return;
            var host = e.target && e.target.closest ? e.target.closest(RIPPLE_SELECTOR) : null;
            if (!host) return;
            spawnRipple(host, e.clientX, e.clientY);
            if (pressedHost) pressedHost.classList.remove('is-pressed');
            pressedHost = host;
            host.classList.add('is-pressed');
        }, { passive: true });

        var release = function() {
            if (!pressedHost) return;
            pressedHost.classList.remove('is-pressed');
            pressedHost = null;
        };

        document.addEventListener('pointerup', release, { passive: true });
        document.addEventListener('pointercancel', release, { passive: true });
    }

    // ============================================
    // ANSICHTSWECHSEL (Push / Pop / Fade / Replace)
    // ============================================
    // Frueher wurden die Enter-Klassen im selben Frame wieder entfernt und
    // die abgehende Ansicht auf display:none gesetzt - dadurch lief keine
    // einzige Uebergangsanimation. Der folgende Motor haelt beide Ansichten
    // waehrend des Wechsels sichtbar und raeumt erst nach dem
    // animationend-Event (mit Zeitlimit als Fallback) auf.

    var VIEW_IDS = ['viewHome', 'viewBrowse', 'viewSearch', 'viewSOP'];
    var VIEW_OF_TAB = {
        home: 'viewHome',
        browse: 'viewBrowse',
        search: 'viewSearch',
        sop: 'viewSOP'
    };

    var activeTransition = null;

    function currentView() {
        for (var i = 0; i < VIEW_IDS.length; i++) {
            var v = E[VIEW_IDS[i]];
            if (v && v.classList.contains('active')) return v;
        }
        return null;
    }

    function clearViewMotion(view) {
        if (!view) return;
        view.classList.remove(
            'is-anim', 'is-leaving', 'is-dragging',
            'anim-in-push', 'anim-out-push',
            'anim-in-pop', 'anim-out-pop',
            'anim-in-fade', 'anim-out-fade',
            'anim-in-replace', 'anim-in-replace-back'
        );
        view.style.top = '';
        view.style.transform = '';
        view.style.opacity = '';
        view.style.willChange = '';
    }

    function finishActiveTransition() {
        if (activeTransition) {
            var t = activeTransition;
            activeTransition = null;
            t();
        }
    }

    // mode: 'push' | 'pop' | 'fade' | null (sofortiger Wechsel)
    function switchView(fromView, toView, mode, done) {
        if (!toView) {
            if (done) done();
            return;
        }

        finishActiveTransition();

        var scroller = E.contentScroll;

        // Sofortwechsel: gleiche Ansicht, kein Modus oder Bewegungsreduktion
        if (!fromView || !mode || MOTION.reduced) {
            if (fromView && fromView !== toView) {
                fromView.classList.remove('active');
                clearViewMotion(fromView);
            }
            toView.classList.add('active');
            clearViewMotion(toView);
            if (scroller) scroller.scrollTop = 0;
            if (done) done();
            return;
        }

        // Gleiche Ansicht mit neuem Inhalt (SOP -> SOP): kurzer Austausch,
        // dessen Richtung der Navigationsrichtung folgt
        if (fromView === toView) {
            if (scroller) scroller.scrollTop = 0;
            clearViewMotion(toView);
            toView.classList.add('active', 'is-anim',
                mode === 'pop' ? 'anim-in-replace-back' : 'anim-in-replace');
            activeTransition = afterMotion(toView, 'animationend', MOTION.view, function() {
                clearViewMotion(toView);
                activeTransition = null;
                if (done) done();
            });
            return;
        }

        // Die abgehende Ansicht wird optisch an ihrer Scrollposition
        // festgehalten, damit der Reset auf scrollTop 0 nicht springt.
        var offset = scroller ? scroller.scrollTop : 0;

        if (scroller) {
            scroller.classList.add('is-transitioning');
            stopSmoothScroll();
        }

        clearViewMotion(fromView);
        clearViewMotion(toView);

        fromView.style.top = (-offset) + 'px';
        fromView.classList.remove('active');
        fromView.classList.add('is-anim', 'is-leaving', 'anim-out-' + mode);

        toView.classList.add('active', 'is-anim', 'anim-in-' + mode);

        if (scroller) scroller.scrollTop = 0;

        activeTransition = afterMotion(toView, 'animationend', MOTION.view, function() {
            clearViewMotion(fromView);
            clearViewMotion(toView);
            if (scroller) scroller.classList.remove('is-transitioning');
            activeTransition = null;
            if (done) done();
        });
    }

    // ============================================
    // PUSH/POP NAVIGATION
    // ============================================
    function pushNav(newSopId) {
        if (S.isNavigating) return;
        if (!newSopId) return;
        if (newSopId === S.sopId && S.tab === 'sop') return;

        S.isNavigating = true;
        S.sopId = newSopId;
        haptic('light');
        sTab('sop', 'push', function() { S.isNavigating = false; });
    }

    function popNav() {
        if (S.isNavigating) return;

        // Gibt es einen eigenen Verlaufseintrag, uebernimmt der Browser.
        // Der popstate-Handler wendet die Zieladresse an und waehlt
        // anhand des Eintragsindex die Rueckwaerts-Animation.
        if (hasRouteHistory()) {
            haptic('light');
            history.back();
            return;
        }

        // Ohne Verlauf (Deep Link): sinnvolles Ziel aus der Ansicht ableiten
        if (S.tab === 'home') return;

        S.isNavigating = true;
        S.sopId = null;
        haptic('light');

        var target = (S.tab === 'sop') ? 'browse' : 'home';
        sTab(target, 'pop', function() { S.isNavigating = false; });
    }

    // ============================================
    // WISCHGESTE "ZURUECK" (folgt dem Finger)
    // ============================================
    // Die Ansicht wird waehrend der Geste live mitbewegt; erst beim
    // Loslassen entscheidet Strecke oder Geschwindigkeit ueber Abschluss
    // oder Zuruecksetzen. Beides laeuft als reine Transform-Animation.

    var swipeData = {
        startX: 0,
        startY: 0,
        currentX: 0,
        lastX: 0,
        lastT: 0,
        velocity: 0,
        isSwiping: false,
        canSwipe: false,
        locked: false,
        view: null,
        frame: null,
        pending: 0
    };

    function initSwipeGestures() {
        var scrollArea = E.contentScroll;
        if (!scrollArea) return;

        scrollArea.addEventListener('touchstart', handleTouchStart, { passive: true });
        scrollArea.addEventListener('touchmove', handleTouchMove, { passive: false });
        scrollArea.addEventListener('touchend', handleTouchEnd, { passive: true });
        scrollArea.addEventListener('touchcancel', handleTouchEnd, { passive: true });
    }

    function canGoBack() {
        if (hasRouteHistory()) return true;
        return S.tab === 'sop' || S.tab === 'browse';
    }

    function handleTouchStart(e) {
        swipeData.isSwiping = false;
        swipeData.canSwipe = false;
        swipeData.locked = false;
        swipeData.velocity = 0;

        if (S.isNavigating || !canGoBack()) return;
        if (e.touches.length !== 1) return;

        var touch = e.touches[0];
        swipeData.startX = touch.clientX;
        swipeData.startY = touch.clientY;
        swipeData.currentX = touch.clientX;
        swipeData.lastX = touch.clientX;
        swipeData.lastT = e.timeStamp;

        if (touch.clientX < EDGE_MARGIN) swipeData.canSwipe = true;
    }

    function renderSwipeFrame() {
        swipeData.frame = null;
        var view = swipeData.view;
        if (!view) return;

        var progress = Math.max(0, Math.min(swipeData.pending / window.innerWidth, 1));
        // Leichter Widerstand am Ende der Strecke
        var shift = swipeData.pending * (1 - progress * 0.35);

        view.style.transform = 'translate3d(' + shift + 'px, 0, 0) scale(' + (1 - progress * 0.03) + ')';
        view.style.opacity = String(1 - progress * 0.35);
    }

    function handleTouchMove(e) {
        if (!swipeData.canSwipe || e.touches.length !== 1) return;

        var touch = e.touches[0];
        var deltaX = touch.clientX - swipeData.startX;
        var deltaY = touch.clientY - swipeData.startY;

        // Richtung erst festlegen, danach nicht mehr wechseln. So bleibt
        // senkrechtes Scrollen am linken Rand weiterhin moeglich.
        if (!swipeData.isSwiping && !swipeData.locked) {
            if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > HORIZONTAL_THRESHOLD) {
                swipeData.locked = true;
                swipeData.canSwipe = false;
                return;
            }
            if (deltaX > HORIZONTAL_THRESHOLD && Math.abs(deltaX) > Math.abs(deltaY)) {
                swipeData.isSwiping = true;
                swipeData.view = currentView();
                if (swipeData.view) {
                    swipeData.view.classList.add('is-dragging');
                    if (E.contentScroll) E.contentScroll.classList.add('is-swiping');
                }
            } else {
                return;
            }
        }

        if (!swipeData.isSwiping) return;

        // Erst jetzt den Browser-Rueckwaertswisch unterbinden
        if (e.cancelable) e.preventDefault();

        var now = e.timeStamp;
        var dt = now - swipeData.lastT;
        if (dt > 0) {
            swipeData.velocity = (touch.clientX - swipeData.lastX) / dt;
            swipeData.lastX = touch.clientX;
            swipeData.lastT = now;
        }

        swipeData.currentX = touch.clientX;
        swipeData.pending = Math.max(0, deltaX);

        if (!swipeData.frame) swipeData.frame = raf(renderSwipeFrame);
    }

    function releaseSwipeView(view, complete) {
        if (!view) return;

        view.classList.remove('is-dragging');
        if (E.contentScroll) E.contentScroll.classList.remove('is-swiping');

        if (complete) {
            // Der Ansichtswechsel uebernimmt die weitere Bewegung
            view.style.transform = '';
            view.style.opacity = '';
            return;
        }

        view.style.transition = 'transform 0.32s var(--ease-out-expo), opacity 0.28s ease';
        view.style.transform = 'translate3d(0, 0, 0)';
        view.style.opacity = '1';

        afterMotion(view, 'transitionend', 340, function() {
            view.style.transition = '';
            view.style.transform = '';
            view.style.opacity = '';
            view.style.willChange = '';
        });
    }

    function handleTouchEnd(e) {
        var wasSwiping = swipeData.isSwiping;
        var view = swipeData.view;

        swipeData.isSwiping = false;
        swipeData.canSwipe = false;
        swipeData.view = null;

        if (swipeData.frame && window.cancelAnimationFrame) {
            window.cancelAnimationFrame(swipeData.frame);
        }
        swipeData.frame = null;

        if (!wasSwiping) {
            swipeData.pending = 0;
            return;
        }

        var deltaX = swipeData.pending;
        swipeData.pending = 0;

        var shouldPop = deltaX > SWIPE_THRESHOLD ||
            (deltaX > SWIPE_THRESHOLD * 0.4 && swipeData.velocity > SWIPE_VELOCITY);

        releaseSwipeView(view, shouldPop);

        if (shouldPop) {
            haptic('light');
            popNav();
        }
    }

    // ============================================
    // ZIEHBARES BOTTOM SHEET
    // ============================================
    // Frueher wurde die max-height des Sheets veraendert - das erzwingt in
    // jedem Frame ein neues Layout und ruckelt. Jetzt wird ausschliesslich
    // translate3d animiert, also rein auf dem Compositor.

    var pickerDragData = {
        startY: 0,
        lastY: 0,
        lastT: 0,
        offset: 0,
        velocity: 0,
        isDragging: false,
        pointerId: null,
        frame: null,
        sheet: null,
        height: 0
    };

    function initDraggablePicker() {
        var picker = E.sectionPickerOverlay;
        var sheet = E.pickerSheet;
        var handle = E.pickerHandle;

        if (!sheet || !picker) return;

        pickerDragData.sheet = sheet;

        var grips = [handle, picker.querySelector('.picker-head')];
        for (var i = 0; i < grips.length; i++) {
            if (!grips[i]) continue;
            grips[i].addEventListener('pointerdown', handleDragStart);
        }

        sheet.addEventListener('pointermove', handleDragMove);
        sheet.addEventListener('pointerup', handleDragEnd);
        sheet.addEventListener('pointercancel', handleDragEnd);
    }

    function handleDragStart(e) {
        var sheet = pickerDragData.sheet;
        if (!sheet || pickerDragData.isDragging) return;
        if (e.pointerType === 'mouse' && e.button !== 0) return;

        pickerDragData.isDragging = true;
        pickerDragData.pointerId = e.pointerId;
        pickerDragData.startY = e.clientY;
        pickerDragData.lastY = e.clientY;
        pickerDragData.lastT = (e.timeStamp || Date.now());
        pickerDragData.offset = 0;
        pickerDragData.velocity = 0;
        pickerDragData.height = sheet.offsetHeight || 1;

        sheet.classList.add('is-dragging');
        if (sheet.setPointerCapture) {
            try { sheet.setPointerCapture(e.pointerId); } catch (err) {}
        }
    }

    function renderDragFrame() {
        pickerDragData.frame = null;
        var sheet = pickerDragData.sheet;
        if (!sheet || !pickerDragData.isDragging) return;
        sheet.style.transform = 'translate3d(0, ' + pickerDragData.offset + 'px, 0)';
    }

    function handleDragMove(e) {
        if (!pickerDragData.isDragging) return;
        if (pickerDragData.pointerId !== null && e.pointerId !== pickerDragData.pointerId) return;
        if (e.cancelable) e.preventDefault();

        var delta = e.clientY - pickerDragData.startY;
        // Nach oben nur mit deutlichem Widerstand
        pickerDragData.offset = delta < 0 ? delta * 0.22 : delta;

        var now = e.timeStamp || Date.now();
        var dt = now - pickerDragData.lastT;
        if (dt > 0) {
            pickerDragData.velocity = (e.clientY - pickerDragData.lastY) / dt;
            pickerDragData.lastY = e.clientY;
            pickerDragData.lastT = now;
        }

        if (!pickerDragData.frame) pickerDragData.frame = raf(renderDragFrame);
    }

    function handleDragEnd(e) {
        if (!pickerDragData.isDragging) return;

        var sheet = pickerDragData.sheet;
        pickerDragData.isDragging = false;

        if (pickerDragData.frame && window.cancelAnimationFrame) {
            window.cancelAnimationFrame(pickerDragData.frame);
        }
        pickerDragData.frame = null;

        if (sheet && sheet.releasePointerCapture && pickerDragData.pointerId !== null) {
            try { sheet.releasePointerCapture(pickerDragData.pointerId); } catch (err) {}
        }
        pickerDragData.pointerId = null;

        if (!sheet) return;

        sheet.classList.remove('is-dragging');

        var shouldClose = pickerDragData.offset > pickerDragData.height * 0.32 ||
            pickerDragData.velocity > 0.7;

        if (shouldClose) {
            // Das Schliessen uebernimmt die CSS-Transition des Overlays
            sheet.style.transform = '';
            cPk();
        } else {
            sheet.style.transform = '';
            haptic('light');
        }

        pickerDragData.offset = 0;
        pickerDragData.velocity = 0;
    }

    // ============================================
    // SPOTLIGHT SEARCH
    // ============================================
    function openSpotlight() {
        if (!E.spotlightOverlay) return;
        if (E.spotlightOverlay.classList.contains('show')) return;

        rememberFocus();
        E.spotlightOverlay.classList.add('show');
        document.body.classList.add('picker-open');
        haptic('light');

        // Fokus erst setzen, wenn die Einblendbewegung laeuft - sonst
        // springt die Tastatur vor der Animation ins Bild.
        setTimeout(function() {
            if (!E.spotlightInput) return;
            E.spotlightInput.focus();
            var v = E.spotlightInput.value;
            try { E.spotlightInput.setSelectionRange(v.length, v.length); } catch (e) {}
        }, MOTION.reduced ? 0 : 120);
    }

    function closeSpotlight() {
        if (!E.spotlightOverlay) return;
        if (!E.spotlightOverlay.classList.contains('show')) return;

        E.spotlightOverlay.classList.remove('show');
        document.body.classList.remove('picker-open');
        restoreFocus();

        if (E.spotlightInput) E.spotlightInput.value = '';
        S.spotQ = '';
        if (E.spotlightClear) E.spotlightClear.classList.remove('show');

        renderSpotlightResults();
    }

    function renderSpotlightResults() {
        if (!E.spotlightResults) return;

        var query = S.spotQ.trim().toLowerCase();
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

            html += '<div class="spotlight-result" data-id="' + d.id + '" role="option" tabindex="0">';
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

        applyStagger(items, 'stagger-item-x');
    }

    // ============================================
    // SEGMENTED CONTROL
    // ============================================

    function renderSegmentedControl(sopData) {
        if (!sopData || !sopData.sections) return '';

        // Aussenrahmen bleibt beim Scrollen am oberen Rand stehen
        var html = '<div class="sop-seg-sticky">';
        html += '<div class="segmented-control-wrapper" role="group" aria-label="Abschnitts-Navigation">';

        // Linker Scroll-Pfeil
        html += '<button class="segmented-scroll-arrow segmented-scroll-left" aria-label="Nach links scrollen" tabindex="-1">';
        html += '<i class="fa-solid fa-chevron-left"></i>';
        html += '</button>';

        html += '<div class="segmented-control" role="tablist" aria-label="SOP-Abschnitte">';

        // Gleitende Markierung hinter den Schaltflaechen
        html += '<span class="segmented-pill" aria-hidden="true"></span>';

        // Add "Alle" button
        html += '<button class="segmented-btn active" ';
        html += 'role="tab" aria-selected="true" ';
        html += 'data-seg="all" title="Alle Abschnitte anzeigen">';
        html += '<i class="fa-solid fa-list" aria-hidden="true"></i> ';
        html += '<span class="btn-text">Alle</span>';
        html += '</button>';

        // Add section buttons (all sections, scrollable)
        // CSS übernimmt die Ellipsis - kein JavaScript-Kürzung mehr nötig
        for (var i = 0; i < sopData.sections.length; i++) {
            var sec = sopData.sections[i];
            var title = sec.title || 'Abschnitt ' + (i + 1);
            var icon = SIC[title] || 'fa-circle';

            html += '<button class="segmented-btn" role="tab" aria-selected="false" ';
            html += 'data-seg="' + i + '" ';
            // Tooltip zeigt immer den vollständigen Titel bei Hover
            html += 'title="' + title.replace(/"/g, '&quot;') + '"';
            html += '>';
            html += '<i class="fa-solid ' + icon + '" aria-hidden="true"></i> ';
            // Vollständiger Titel - CSS kürzt bei Bedarf mit Ellipsis
            html += '<span class="btn-text">' + title + '</span>';
            html += '</button>';
        }

        html += '</div>';

        // Rechter Scroll-Pfeil
        html += '<button class="segmented-scroll-arrow segmented-scroll-right" aria-label="Nach rechts scrollen" tabindex="-1">';
        html += '<i class="fa-solid fa-chevron-right"></i>';
        html += '</button>';

        html += '</div>';
        html += '</div>';
        return html;
    }

    // Gleitende Markierung auf die aktive Schaltflaeche setzen.
    // Reines transform/width - laeuft auf dem Compositor.
    function updateSegmentedPill(animate) {
        var control = E.viewSOP ? E.viewSOP.querySelector('.segmented-control') : null;
        if (!control) return;

        var pill = control.querySelector('.segmented-pill');
        var active = control.querySelector('.segmented-btn.active');
        if (!pill || !active) return;

        if (animate === false || MOTION.reduced) {
            pill.style.transition = 'none';
        }

        pill.style.width = active.offsetWidth + 'px';
        pill.style.transform = 'translate3d(' + active.offsetLeft + 'px, 0, 0)';
        pill.classList.add('ready');
        control.classList.add('has-pill');

        if (animate === false || MOTION.reduced) {
            reflow(pill);
            pill.style.transition = '';
        }
    }

    // Aktive Schaltflaeche in den sichtbaren Bereich holen
    function revealSegmentedButton(btn) {
        var control = btn ? btn.parentNode : null;
        if (!control || control.scrollWidth <= control.clientWidth) return;

        var target = btn.offsetLeft - (control.clientWidth - btn.offsetWidth) / 2;
        target = Math.max(0, Math.min(target, control.scrollWidth - control.clientWidth));

        if (MOTION.reduced || !control.scrollTo) {
            control.scrollLeft = target;
            return;
        }
        control.scrollTo({ left: target, behavior: 'smooth' });
    }

    function handleSegmentedClick(sopData, segIndex) {
        if (!sopData) return;

        haptic('light');

        // Update active state and ARIA attributes
        var buttons = E.viewSOP.querySelectorAll('.segmented-btn');
        var activeBtn = null;
        for (var i = 0; i < buttons.length; i++) {
            var isTarget = buttons[i].getAttribute('data-seg') === String(segIndex);
            buttons[i].classList.toggle('active', isTarget);
            buttons[i].setAttribute('aria-selected', isTarget ? 'true' : 'false');
            if (isTarget) activeBtn = buttons[i];
        }

        updateSegmentedPill(true);
        revealSegmentedButton(activeBtn);

        var sections = E.viewSOP.querySelectorAll('.sop-section');

        if (segIndex === 'all') {
            for (var j = 0; j < sections.length; j++) {
                setSectionOpen(sections[j], true, true);
            }
            invalidateSectionOffsets();
            return;
        }

        var targetSection = E.viewSOP.querySelector('.sop-section[data-sec="' + segIndex + '"]');

        for (var k = 0; k < sections.length; k++) {
            setSectionOpen(sections[k], sections[k] === targetSection, true);
        }

        invalidateSectionOffsets();

        if (targetSection) {
            // Erst nach dem Aufklappen scrollen, sonst zielt der Scroll
            // auf eine Position, die es gleich nicht mehr gibt.
            setTimeout(function() {
                invalidateSectionOffsets();
                scrollElementIntoView(targetSection);
            }, MOTION.reduced ? 0 : Math.round(MOTION.section * 0.55));
        }
    }

    // Tastaturnavigation für Segmented Control
    function initSegmentedKeyboardNav(container) {
        if (!container) return;

        var buttons = container.querySelectorAll('.segmented-btn');
        if (buttons.length === 0) return;

        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('keydown', function(e) {
                var currentIndex = -1;
                var btns = container.querySelectorAll('.segmented-btn');

                // Find current button index
                for (var j = 0; j < btns.length; j++) {
                    if (btns[j] === e.target) {
                        currentIndex = j;
                        break;
                    }
                }

                var nextIndex = -1;

                switch (e.key) {
                    case 'ArrowRight':
                    case 'ArrowDown':
                        e.preventDefault();
                        nextIndex = (currentIndex + 1) % btns.length;
                        break;
                    case 'ArrowLeft':
                    case 'ArrowUp':
                        e.preventDefault();
                        nextIndex = (currentIndex - 1 + btns.length) % btns.length;
                        break;
                    case 'Home':
                        e.preventDefault();
                        nextIndex = 0;
                        break;
                    case 'End':
                        e.preventDefault();
                        nextIndex = btns.length - 1;
                        break;
                    case 'Enter':
                    case ' ':
                        // <button> loest dafuer nativ ein click-Ereignis aus
                        return;
                }

                if (nextIndex >= 0 && nextIndex < btns.length) {
                    btns[nextIndex].focus();
                    revealSegmentedButton(btns[nextIndex]);
                }
            });
        }
    }

    // === Aktivierung der Abschnitts-Schaltflaechen ===
    // Ausgeloest wird ausschliesslich ueber click. Das deckt Maus, Tippen,
    // Tastatur (Enter/Leertaste loesen bei <button> nativ ein click aus)
    // und Hilfstechnologien gleichermassen ab - und kann sich nicht mit
    // einem zweiten Pfad ueberlagern, wie es zuvor bei touchend plus
    // nachgereichtem click der Fall war.
    //
    // Die Pointer-Ereignisse dienen nur der Unterscheidung "Tippen" gegen
    // "Wischen zum Scrollen der Leiste": wurde gewischt, wird der darauf
    // folgende click verworfen.

    function bindSegmentedButton(btn, sopData, segIndex) {
        var dragged = false;

        btn.addEventListener('pointerdown', function(e) {
            if (e.pointerType === 'mouse' && e.button !== 0) return;
            dragged = false;
            segTouchState.startX = e.clientX;
            segTouchState.startY = e.clientY;
            segTouchState.targetBtn = btn;
            btn.classList.add('tap-active');
        });

        btn.addEventListener('pointermove', function(e) {
            if (segTouchState.targetBtn !== btn || dragged) return;
            var dx = Math.abs(e.clientX - segTouchState.startX);
            var dy = Math.abs(e.clientY - segTouchState.startY);
            if (dx > SEG_TOUCH_THRESHOLD || dy > SEG_TOUCH_THRESHOLD) {
                dragged = true;
                btn.classList.remove('tap-active');
            }
        });

        var settle = function() {
            btn.classList.remove('tap-active');
            if (segTouchState.targetBtn === btn) segTouchState.targetBtn = null;
        };

        btn.addEventListener('pointerup', settle);
        btn.addEventListener('pointercancel', function() {
            dragged = true;
            settle();
        });
        btn.addEventListener('pointerleave', settle);

        btn.addEventListener('click', function() {
            if (dragged) {
                dragged = false;
                return;
            }
            handleSegmentedClick(sopData, segIndex);
        });
    }

    // ============================================
    // SEGMENTED CONTROL SCROLL ARROWS
    // ============================================

    // Pfeile und Verlaufskanten an den Scrollzustand anpassen
    function checkSegmentedScrollArrows() {
        var wrapper = E.viewSOP ? E.viewSOP.querySelector('.segmented-control-wrapper') : null;
        if (!wrapper) return;

        var control = wrapper.querySelector('.segmented-control');
        var leftArrow = wrapper.querySelector('.segmented-scroll-left');
        var rightArrow = wrapper.querySelector('.segmented-scroll-right');

        if (!control || !leftArrow || !rightArrow) return;

        var hasOverflow = control.scrollWidth > control.clientWidth + 2;
        var canScrollLeft = hasOverflow && control.scrollLeft > 5;
        var canScrollRight = hasOverflow &&
            control.scrollLeft < (control.scrollWidth - control.clientWidth - 5);

        // Verlaufskanten (die zugehoerigen CSS-Klassen wurden bisher nie gesetzt)
        wrapper.classList.toggle('has-overflow-left', canScrollLeft);
        wrapper.classList.toggle('has-overflow-right', canScrollRight);

        leftArrow.style.opacity = canScrollLeft ? '0.6' : '0';
        leftArrow.style.pointerEvents = canScrollLeft ? 'auto' : 'none';

        rightArrow.style.opacity = canScrollRight ? '0.6' : '0';
        rightArrow.style.pointerEvents = canScrollRight ? 'auto' : 'none';
    }

    // Scroll-Animation für Pfeile
    function scrollSegmented(direction) {
        var control = E.viewSOP ? E.viewSOP.querySelector('.segmented-control') : null;
        if (!control) return;

        var scrollAmount = Math.max(120, Math.round(control.clientWidth * 0.7));
        var target = control.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);

        if (MOTION.reduced || !control.scrollTo) control.scrollLeft = target;
        else control.scrollTo({ left: target, behavior: 'smooth' });

        haptic('light');
    }

    // Event-Listener für Scroll-Pfeile initialisieren.
    // Wird bei jedem SOP-Aufbau erneut aufgerufen - der globale
    // resize-Listener darf deshalb nur ein einziges Mal entstehen.
    var segmentedResizeBound = false;

    function initSegmentedScrollArrows() {
        var wrapper = E.viewSOP ? E.viewSOP.querySelector('.segmented-control-wrapper') : null;
        if (!wrapper) return;

        var control = wrapper.querySelector('.segmented-control');
        var leftArrow = wrapper.querySelector('.segmented-scroll-left');
        var rightArrow = wrapper.querySelector('.segmented-scroll-right');

        if (!control) return;

        control.addEventListener('scroll', throttle(checkSegmentedScrollArrows, 60), { passive: true });

        if (leftArrow) {
            leftArrow.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                scrollSegmented('left');
            });
        }

        if (rightArrow) {
            rightArrow.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                scrollSegmented('right');
            });
        }

        // Breiten stehen erst nach dem Layout fest
        nextFrame(function() {
            checkSegmentedScrollArrows();
            updateSegmentedPill(false);
        });

        if (!segmentedResizeBound) {
            segmentedResizeBound = true;
            window.addEventListener('resize', debounce(function() {
                checkSegmentedScrollArrows();
                updateSegmentedPill(false);
            }, 150));
        }
    }

    // ============================================
    // AKKORDEON – ANIMIERTES AUF- UND ZUKLAPPEN
    // ============================================
    // Bisher wurde nur display umgeschaltet: der Inhalt sprang ohne
    // Uebergang auf. Jetzt wird die Hoehe animiert und danach wieder
    // freigegeben, damit der Abschnitt responsiv bleibt.

    function sectionBody(section) {
        return section ? section.querySelector('.sop-section-body') : null;
    }

    function isSectionOpen(section) {
        var body = sectionBody(section);
        return !!(body && body.classList.contains('open'));
    }

    function finishSectionAnimation(body) {
        if (body._motionStop) {
            body._motionStop();
            body._motionStop = null;
        }
    }

    function setSectionOpen(section, open, animate) {
        var body = sectionBody(section);
        if (!section || !body) return;

        var head = section.querySelector('.sop-section-head');
        var toggle = section.querySelector('.sec-toggle');

        if (head) head.setAttribute('aria-expanded', open ? 'true' : 'false');
        if (toggle) toggle.classList.toggle('open', open);

        var alreadyOpen = body.classList.contains('open');
        finishSectionAnimation(body);

        if (!animate || MOTION.reduced) {
            body.classList.toggle('open', open);
            body.classList.remove('is-animating');
            body.style.height = '';
            body.style.opacity = '';
            body.style.transition = '';
            return;
        }

        if (alreadyOpen === open) {
            body.style.height = '';
            body.style.opacity = '';
            body.style.transition = '';
            return;
        }

        var dur = MOTION.section;
        var trans = 'height ' + dur + 'ms cubic-bezier(0.16, 1, 0.3, 1), opacity ' +
            Math.round(dur * 0.8) + 'ms ease';

        if (open) {
            body.classList.add('open', 'is-animating');
            body.style.transition = 'none';
            body.style.height = 'auto';
            var target = body.scrollHeight;
            body.style.height = '0px';
            body.style.opacity = '0';
            reflow(body);
            body.style.transition = trans;
            body.style.height = target + 'px';
            body.style.opacity = '1';
        } else {
            body.classList.add('is-animating');
            body.style.transition = 'none';
            body.style.height = body.scrollHeight + 'px';
            body.style.opacity = '1';
            reflow(body);
            body.style.transition = trans;
            body.style.height = '0px';
            body.style.opacity = '0';
        }

        body._motionStop = afterMotion(body, 'transitionend', dur, function() {
            body._motionStop = null;
            body.classList.remove('is-animating');
            body.classList.toggle('open', open);
            body.style.height = '';
            body.style.opacity = '';
            body.style.transition = '';
            invalidateSectionOffsets();
        });
    }

    function toggleSection(section) {
        setSectionOpen(section, !isSectionOpen(section), true);
        invalidateSectionOffsets();
    }

    // ============================================
    // ABSCHNITTS-POSITIONEN (Cache für flüssiges Scrollen)
    // ============================================
    // uSticky() las früher bei jedem Scroll-Event offsetTop aller
    // Abschnitte aus und erzwang damit ein Layout pro Frame. Die
    // Positionen werden jetzt gepuffert und nur bei echten Änderungen neu
    // vermessen.

    var SEC_CACHE = { list: [], dirty: true, stickyHeight: 0, stickyTop: 0 };

    function invalidateSectionOffsets() {
        SEC_CACHE.dirty = true;
    }

    function sectionOffsets() {
        if (!SEC_CACHE.dirty) return SEC_CACHE.list;

        var out = [];
        if (E.viewSOP) {
            var bar = E.viewSOP.querySelector('.sop-seg-sticky');
            SEC_CACHE.stickyHeight = bar ? (bar.offsetHeight || 0) : 0;
            // offsetTop enthaelt bei position:sticky die Klebeverschiebung -
            // der Ruhewert wird deshalb nur im ungeklebten Zustand uebernommen.
            if (bar && !segStuck) SEC_CACHE.stickyTop = bar.offsetTop || 0;

            var secs = E.viewSOP.querySelectorAll('.sop-section');
            for (var i = 0; i < secs.length; i++) {
                var head = secs[i].querySelector('.sop-section-head');
                var title = head ? head.querySelector('.sec-title') : null;
                var icon = head ? head.querySelector('.sec-icon') : null;
                out.push({
                    el: secs[i],
                    top: secs[i].offsetTop,
                    idx: secs[i].getAttribute('data-sec') || '',
                    title: title ? title.textContent : '',
                    icon: icon ? icon.className : 'fa-solid fa-circle-info'
                });
            }
        }

        SEC_CACHE.list = out;
        SEC_CACHE.dirty = false;
        return out;
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
        var thLabel = dk ? 'Light Mode einschalten' : 'Dark Mode einschalten';
        if (E.themeToggle) E.themeToggle.setAttribute('aria-label', thLabel);
        if (E.themeToggleMobile) E.themeToggleMobile.setAttribute('aria-label', thLabel);
        if (E.metaThemeColor) E.metaThemeColor.setAttribute('content', dk ? '#1e293b' : '#ffffff');
    }

    // Weicher Theme-Wechsel: wo die View Transition API verfuegbar ist,
    // faehrt der neue Zustand als Kreis vom ausloesenden Knopf auf.
    // Der Zustandswechsel selbst ist davon unabhaengig abgesichert - die
    // API ueberspringt ihren Rueckruf in manchen Umgebungen (Hintergrund-
    // Tab, eingebettete Seite), und dann bliebe das Theme sonst haengen.
    function toggleTheme(originEl) {
        var next = S.theme === 'dark' ? 'light' : 'dark';
        var applied = false;

        function apply() {
            if (applied) return;
            applied = true;
            S.theme = next;
            aTh();
        }

        haptic('light');

        var canAnimate = !MOTION.reduced &&
            typeof document.startViewTransition === 'function' &&
            document.visibilityState === 'visible';

        if (!canAnimate) {
            apply();
            return;
        }

        var cx = window.innerWidth - 40;
        var cy = 40;
        if (originEl && originEl.getBoundingClientRect) {
            var r = originEl.getBoundingClientRect();
            if (r.width && r.height) {
                cx = r.left + r.width / 2;
                cy = r.top + r.height / 2;
            }
        }

        var radius = Math.sqrt(
            Math.pow(Math.max(cx, window.innerWidth - cx), 2) +
            Math.pow(Math.max(cy, window.innerHeight - cy), 2)
        );

        var root = document.documentElement;
        var transition;

        try {
            root.classList.add('theme-switching');
            transition = document.startViewTransition(apply);
        } catch (err) {
            root.classList.remove('theme-switching');
            apply();
            return;
        }

        // Sicherheitsnetz: wenn der Rueckruf nicht zum Zuge kommt,
        // wird der Wechsel trotzdem ausgefuehrt.
        var guard = setTimeout(function() {
            apply();
            root.classList.remove('theme-switching');
        }, 300);

        function done() {
            clearTimeout(guard);
            apply();
            root.classList.remove('theme-switching');
        }

        if (transition.ready && transition.ready.then) {
            transition.ready.then(function() {
                if (!root.animate) return;
                root.animate({
                    clipPath: [
                        'circle(0px at ' + cx + 'px ' + cy + 'px)',
                        'circle(' + radius + 'px at ' + cx + 'px ' + cy + 'px)'
                    ]
                }, {
                    duration: 480,
                    easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
                    pseudoElement: '::view-transition-new(root)'
                });
            })['catch'](function() {});
        }

        if (transition.finished && transition.finished.then) {
            transition.finished.then(done)['catch'](done);
        } else {
            done();
        }
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
    // FOKUS-MANAGEMENT FÜR OVERLAYS
    // ============================================
    var FOCUS_RETURN = null;

    function focusablesIn(root) {
        if (!root) return [];
        var sel = 'button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])';
        var all = root.querySelectorAll(sel);
        var out = [];
        for (var i = 0; i < all.length; i++) {
            var r = all[i].getBoundingClientRect();
            if (r.width > 0 && r.height > 0) out.push(all[i]);
        }
        return out;
    }

    function trapFocus(e) {
        if (e.key !== 'Tab') return;
        var root = document.querySelector('.dir-overlay.show .dir-modal, .picker-overlay.show .picker-sheet, .spotlight-overlay.show .spotlight-container');
        if (!root) return;
        var f = focusablesIn(root);
        if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && (document.activeElement === first || !root.contains(document.activeElement))) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    }

    function rememberFocus() {
        FOCUS_RETURN = document.activeElement;
    }

    function restoreFocus() {
        if (FOCUS_RETURN && FOCUS_RETURN.focus) {
            try { FOCUS_RETURN.focus(); } catch (e) {}
        }
        FOCUS_RETURN = null;
    }

    // ============================================
    // ROUTING (History-API, Zurück-Taste, Deep Links)
    // ============================================
    // Der Browser-Verlauf ist die einzige Quelle der Navigationstiefe.
    // Ein zusaetzlicher App-Stapel wuerde daneben herlaufen und beide
    // Richtungen auseinanderdriften lassen: frueher legte auch das
    // Zurueckgehen einen neuen Eintrag an, sodass die Zurueck-Taste des
    // Browsers anschliessend wieder vorwaerts fuehrte.
    //
    // Jeder Eintrag traegt einen laufenden Index. Beim popstate-Ereignis
    // zeigt der Vergleich mit dem aktuellen Index die Richtung an, sodass
    // vorwaerts und rueckwaerts unterschiedlich animiert werden koennen.

    var ROUTE_LOCK = false;
    var routeIndex = 0;

    function hashForState() {
        if (S.tab === 'sop' && S.sopId) return '#sop/' + S.sopId;
        if (S.tab === 'browse') return '#browse';
        if (S.tab === 'search') return '#search';
        return '#home';
    }

    function syncRoute(replace) {
        var target = hashForState();
        var state = history.state;
        if (window.location.hash === target && state && state.r === target) return;

        ROUTE_LOCK = true;
        var next = { r: target, i: replace ? routeIndex : routeIndex + 1 };

        try {
            if (replace) history.replaceState(next, '', target);
            else history.pushState(next, '', target);
            routeIndex = next.i;
        } catch (e) {
            window.location.hash = target;
        }

        setTimeout(function() { ROUTE_LOCK = false; }, 0);
    }

    // Gibt es einen eigenen Verlaufseintrag, zu dem zurueckgegangen
    // werden kann? Bei einem Deep Link ist das nicht der Fall.
    function hasRouteHistory() {
        return routeIndex > 0;
    }

    function hasSop(id) {
        for (var i = 0; i < S.data.length; i++) {
            if (S.data[i].id === id) return true;
        }
        return false;
    }

    // Wendet die aktuelle Adresse an, ohne einen neuen History-Eintrag zu erzeugen
    function applyRoute(mode) {
        var h = window.location.hash || '';
        if (h.indexOf('#sop/') === 0) {
            var id = h.substring(5);
            if (hasSop(id)) {
                S.sopId = id;
                sTab('sop', mode);
                return;
            }
        }
        S.sopId = null;
        if (h === '#browse') sTab('browse', mode);
        else if (h === '#search') sTab('search', mode);
        else sTab('home', mode);
    }

    function onPopState(e) {
        if (ROUTE_LOCK) return;

        var idx = (e && e.state && typeof e.state.i === 'number') ? e.state.i : 0;
        var mode = idx < routeIndex ? 'pop' : 'push';
        routeIndex = idx;

        S.isNavigating = false;
        finishActiveTransition();
        applyRoute(mode);
    }

    // Manuell geaenderte Adresse (Eingabezeile, externer Link).
    // popstate deckt Vor/Zurueck bereits ab - hier wird nur gehandelt,
    // wenn die Ansicht wirklich noch nicht zur Adresse passt.
    function onHashChange() {
        if (ROUTE_LOCK) return;
        if (hashForState() === (window.location.hash || '#home')) return;

        S.isNavigating = false;
        finishActiveTransition();
        applyRoute('fade');
    }

    // ============================================
    // TELEFONVERZEICHNIS
    // ============================================
    var PHONE_DIR = [
        {
            group: 'Notfall & Externe Kontakte',
            icon: 'fa-tower-broadcast',
            items: [
                { name: 'Leitstelle', tel: '19222', note: '' },
                { name: 'Polizeirevier Nord', tel: '59350', note: '' },
                { name: 'Security', tel: '4568', note: '' },
                { name: 'Dolmetscher', tel: '4530', note: '' }
            ]
        },
        {
            group: 'ITS & IMC (Disposition ROT)',
            icon: 'fa-heart-pulse',
            items: [
                { name: 'ITS-Koordinator', tel: '3008', note: 'Zentraler ITS-Aufnahmekontakt' },
                { name: 'ITS Innere', tel: '4488', note: '' },
                { name: 'ITS Anästhesie (KAIS, 21)', tel: '4054', note: '' },
                { name: 'ITS Pneumologie (2.1)', tel: '4217', note: '' },
                { name: 'KEIM ITS (2 Erd)', tel: 'Ziffer 2 ERD', note: '' },
                { name: 'ITO / Stroke Unit', tel: '4925', note: 'Identisch mit DA Neurologie' },
                { name: 'IMC 2.0 (2 Erd IMC)', tel: '4764', note: 'Internistische Intensivstation / IMC Station 2 Erd' },
                { name: 'IMC KAIS', tel: '4644', note: 'Arzt; alternativ 4640' }
            ]
        },
        {
            group: 'Chirurgische Fächer (Dienstarzt / Konsil)',
            icon: 'fa-scissors',
            items: [
                { name: 'Allgemeinchirurgie (ACH)', tel: '4881', note: 'DA bis 15:30 Uhr: 4004' },
                { name: 'Unfallchirurgie (UCH)', tel: '4835 / 4610', note: '' },
                { name: 'Polytrauma', tel: '4499', note: '' },
                { name: 'Kinderchirurgie (KCH)', tel: '4783 / 4909', note: '4783 (DA), 4909 (IST); Verweis auf Plan' },
                { name: 'Neurochirurgie (NCH)', tel: '4466', note: '' },
                { name: 'Gefäßchirurgie (GCH)', tel: '4923 / 2766', note: 'DA über Station 2235, ChA 4923' },
                { name: 'Plastische Chirurgie (PCH)', tel: '4956', note: '' },
                { name: 'Thoraxchirurgie (TCH)', tel: 'über Station 2245', note: '' }
            ]
        },
        {
            group: 'Konservative Fächer & Weitere',
            icon: 'fa-stethoscope',
            items: [
                { name: 'Internist (BVZ)', tel: '4006 / 4933', note: '' },
                { name: 'Neurologie', tel: '4925', note: '' },
                { name: 'Apoplex', tel: '4977', note: '' },
                { name: 'Infektiologie', tel: '4005', note: 'Infektionsambulanz: 4715' },
                { name: 'Onkologie (OA)', tel: '4600', note: '' },
                { name: 'Pädiatrie', tel: '4909 / 4040', note: 'Pädiater: 4308, Neo-Pädiatrie: 4949' },
                { name: 'Anästhesie ZNA', tel: '4441', note: '' },
                { name: 'Gynäkologie (GYN)', tel: '4912 / 4969', note: '' },
                { name: 'Urologie (URO)', tel: '4079', note: '' },
                { name: 'HNO', tel: '2388', note: 'HNO-Station: 2374' },
                { name: 'MKG', tel: '0172 2992689', note: 'MKG Praxis: 0341 33736925' }
            ]
        },
        {
            group: 'Diagnostik & Funktionseinheiten',
            icon: 'fa-microscope',
            items: [
                { name: 'Gastroskopie', tel: '2674 / 5663', note: 'Tags: 2674, Dienst: 5663' },
                { name: 'Bronchoskopie', tel: 'nach Dienstplan', note: '' },
                { name: 'HKL (Herzkatheter)', tel: '3333', note: '' },
                { name: 'Dialyse Arzt', tel: '4494', note: '' },
                { name: 'Radiologie (DA / Ärzte)', tel: '4573', note: 'Radiologie Kinder: 4728' },
                { name: 'Radiologie (MTR)', tel: '2716 / 2736', note: 'CT: 2716, Konventionell: 2736' },
                { name: 'Zentrallabor / Gerinnung', tel: '2508 / 2514', note: 'Zusätzliche Labornummer: 2506' }
            ]
        },
        {
            group: 'Infrastruktur & ZNA-Organisation',
            icon: 'fa-hospital',
            items: [
                { name: 'Bettenmanagement', tel: '4299', note: '' },
                { name: 'Schockraum / Aufwachraum', tel: '3470 / 1630', note: '' },
                { name: 'ZNA Triage / Tresen', tel: '4271 / 3404', note: 'ZNA Station 4B: 4812' },
                { name: 'Krankenträger', tel: '2208', note: '' },
                { name: 'IT', tel: '4863', note: '' },
                { name: 'Reinigung', tel: '4415 / 4094', note: 'Ab 19:30 Uhr: 1006' }
            ]
        },
        {
            group: 'Sprechstunden Ambulanzzentrum (Haus 61, Delitzscher Str. 141)',
            icon: 'fa-calendar-check',
            items: [
                { name: 'Zentraler Tresen / Anmeldung', tel: '0341 909 1810', note: '' },
                { name: 'D-Arzt / Unfallchirurgie – Fr. Dr. Dietze', tel: '0341 909 1810', note: 'Mi 09-12 & 13-17 Uhr, Fr 09-13 Uhr' },
                { name: 'D-Ambulanz (Akut) – Fr. Dr. Tiemann', tel: '0341 909 4170', note: 'Täglich 08-09 Uhr; Termin nur via Schw. Sindy' },
                { name: 'Gipskontrollen (UCH) – CA Dr. Esser', tel: '0341 909 1810', note: 'Mo 12-17 Uhr, Do 09-14 Uhr; ohne Termin möglich' },
                { name: 'Kinder D-Ambulanz – Fr. Laake', tel: '0341 909 3604', note: 'Mo/Di 09-11:30, Do 12-16 Uhr; Akut Mo-Fr 09-10; online via Doctolib' },
                { name: 'Plastische Chirurgie', tel: '0341 909 1815', note: 'Mo-Fr 07:30-08:30 Uhr; ambulanz.pch@sanktgeorg.de' },
                { name: 'Handchirurgie – Fr. Dr. Rothe', tel: '0341 909 1810', note: 'Mo, Di, Do, Fr 08-11 Uhr' },
                { name: 'Proktologie – OA Dr. Bley', tel: '0341 909 1810', note: 'Di 08-12 & 13-17:30 Uhr' },
                { name: 'Hernien – OA Dr. Braunert', tel: '0341 909 1810', note: 'Di 12-15 Uhr' },
                { name: 'CED – CA Dr. Jansen-Winkeln', tel: '0341 909 2200', note: 'Mo 12-16 Uhr; Termin nur via Sekr. Marinak' },
                { name: 'Gynäkologie (GYN)', tel: '0341 909 3515', note: '' },
                { name: 'HNO', tel: '0341 909 2383', note: '' }
            ]
        }
    ];

    function esc(t) {
        return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function rDir(q) {
        if (!E.dirBody) return;
        q = (q || '').toLowerCase().trim();
        var html = '';
        var hits = 0;

        for (var g = 0; g < PHONE_DIR.length; g++) {
            var grp = PHONE_DIR[g];
            var rows = '';
            for (var i = 0; i < grp.items.length; i++) {
                var it = grp.items[i];
                var hay = (it.name + ' ' + it.tel + ' ' + it.note + ' ' + grp.group).toLowerCase();
                if (q && hay.indexOf(q) === -1) continue;
                hits++;
                rows += '<li class="dir-row">' +
                    '<div class="dir-row-main">' +
                    '<span class="dir-name">' + esc(it.name) + '</span>' +
                    (it.note ? '<span class="dir-note">' + esc(it.note) + '</span>' : '') +
                    '</div>' +
                    '<span class="dir-tel">' + esc(it.tel) + '</span>' +
                    '</li>';
            }
            if (!rows) continue;
            html += '<section class="dir-group">' +
                '<h4><i class="fa-solid ' + grp.icon + '"></i>' + esc(grp.group) + '</h4>' +
                '<ul class="dir-rows">' + rows + '</ul>' +
                '</section>';
        }

        if (!hits) {
            html = '<div class="dir-empty"><i class="fa-solid fa-magnifying-glass"></i>' +
                '<p>Kein Eintrag gefunden</p></div>';
        }
        E.dirBody.innerHTML = html;

        var groups = E.dirBody.querySelectorAll('.dir-group');
        for (var k = 0; k < groups.length; k++) {
            groups[k].style.setProperty('--stagger',
                (Math.min(k, 8) * 45) + 'ms');
        }
    }

    function oDir() {
        if (!E.dirOverlay) return;
        if (E.dirOverlay.classList.contains('show')) return;
        rememberFocus();
        rDir(E.dirInput ? E.dirInput.value : '');
        E.dirOverlay.classList.add('show');
        document.body.classList.add('picker-open');
        haptic('light');
        setTimeout(function() {
            if (E.dirInput && window.innerWidth >= 900) E.dirInput.focus();
        }, 250);
    }

    function cDir() {
        if (!E.dirOverlay) return;
        if (!E.dirOverlay.classList.contains('show')) return;
        E.dirOverlay.classList.remove('show');
        document.body.classList.remove('picker-open');
        restoreFocus();
    }

    // ============================================
    // AUTOMATISCHE AKTUALISIERUNG (ohne Banner)
    // ============================================
    // Die App zieht immer den aktuellen Stand vom Server. Weicht die
    // Serverversion von der geladenen Version ab, werden Caches verworfen
    // und die Seite genau einmal still neu geladen - ohne Hinweisbanner.
    function checkForUpdate() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'version.json?_=' + new Date().getTime(), true);
        xhr.setRequestHeader('Cache-Control', 'no-cache');
        xhr.onreadystatechange = function() {
            if (xhr.readyState !== 4 || xhr.status !== 200) return;
            try {
                var serverData = JSON.parse(xhr.responseText);
                var serverVersion = serverData.version || APP_VERSION;
                if (serverVersion === APP_VERSION) {
                    localStorage.setItem('sop-app-version', serverVersion);
                    return;
                }
                applyUpdate(serverVersion);
            } catch (e) {
                console.log('Version check failed:', e);
            }
        };
        xhr.onerror = function() {
            console.log('Version check network error');
        };
        xhr.send();
    }

    function applyUpdate(serverVersion) {
        // Reload-Schleife verhindern: pro Version nur ein Neuladeversuch
        var guardKey = 'sop-reload-for';
        var already;
        try { already = sessionStorage.getItem(guardKey); } catch (e) { already = null; }
        if (already === serverVersion) return;
        try { sessionStorage.setItem(guardKey, serverVersion); } catch (e) {}
        try { localStorage.setItem('sop-app-version', serverVersion); } catch (e) {}

        if (E.appProgress) E.appProgress.classList.add('show');

        var reload = function() {
            var u = window.location.href.split('#')[0].split('?')[0];
            window.location.replace(u + '?v=' + encodeURIComponent(serverVersion) + window.location.hash);
        };

        if (window.caches && caches.keys) {
            caches.keys().then(function(names) {
                return Promise.all(names.map(function(n) { return caches.delete(n); }));
            }).then(reload, reload);
        } else {
            reload();
        }
    }

    // ============================================
    // SAFE AREA RUNTIME MEASUREMENT
    // ============================================
    // Problem: env(safe-area-inset-bottom) returns 0px in iOS PWA standalone mode
    // Solution: JavaScript-based detection with CSS variable setting (NO inline styles!)
    
    var SAFE_AREA_RUNTIME = {
        bottom: 0,
        top: 0,
        isPWA: false,
        isIOS: false,
        lastMeasurement: 0
    };
    
    function detectRuntimeEnvironment() {
        // PWA Detection - multiple methods for maximum compatibility
        var isStandalone = window.matchMedia('(display-mode: standalone)').matches;
        var isIOSStandalone = window.navigator.standalone === true;
        var isAndroidWebApp = document.referrer.indexOf('android-app://') === 0;
        
        SAFE_AREA_RUNTIME.isPWA = isStandalone || isIOSStandalone || isAndroidWebApp;
        
        // iOS Detection
        SAFE_AREA_RUNTIME.isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
        
        return SAFE_AREA_RUNTIME.isPWA;
    }
    
    function measureSafeAreaRuntime() {
        var measuredBottom = 0;
        
        // Methode 1: iOS Screen Height Lookup Table
        // Most reliable for iOS PWA where env() returns 0
        if (SAFE_AREA_RUNTIME.isIOS && SAFE_AREA_RUNTIME.isPWA) {
            var screenH = window.screen.height;
            
            // iPhone Modelle mit Safe-Area (34px bottom)
            // Toleranz von +/- 5px für Rundungsunterschiede
            var iPhoneWithNotch = [
                812,  // iPhone X, 11 Pro, 12 mini, 13 mini
                844,  // iPhone 12, 12 Pro, 13, 13 Pro, 14
                852,  // iPhone 14 Pro
                896,  // iPhone Xs Max, 11 Pro Max
                926,  // iPhone 12 Pro Max, 13 Pro Max, 14 Plus
                932   // iPhone 14 Pro Max
            ];
            
            for (var i = 0; i < iPhoneWithNotch.length; i++) {
                if (screenH >= iPhoneWithNotch[i] - 5 && screenH <= iPhoneWithNotch[i] + 5) {
                    measuredBottom = 34;
                    break;
                }
            }
            
            // iPad Pro 12.9" hat 20px Safe-Area
            if (measuredBottom === 0 && screenH >= 1024) {
                var isIPad = /iPad/.test(navigator.userAgent);
                if (isIPad) {
                    measuredBottom = 20;
                }
            }
        }
        
        // Methode 2: Viewport-Differenz (Fallback)
        if (measuredBottom === 0 && SAFE_AREA_RUNTIME.isPWA) {
            var viewportDiff = window.screen.height - window.innerHeight;
            if (viewportDiff > 0 && viewportDiff < 150) {
                // Bei iOS PWA ist die Differenz oft die Safe-Area
                if (SAFE_AREA_RUNTIME.isIOS && viewportDiff >= 34) {
                    measuredBottom = 34;
                } else if (viewportDiff >= 20 && viewportDiff < 50) {
                    // Android oder andere Geräte
                    measuredBottom = viewportDiff;
                }
            }
        }
        
        // Methode 3: visualViewport API (falls verfügbar)
        if (measuredBottom === 0 && window.visualViewport) {
            var vvHeight = window.visualViewport.height;
            var innerH = window.innerHeight;
            if (innerH > vvHeight) {
                var diff = innerH - vvHeight;
                if (diff > 0 && diff < 100) {
                    measuredBottom = diff;
                }
            }
        }
        
        // Methode 4: Test-Element mit env() (letzter Fallback)
        if (measuredBottom === 0) {
            var testEl = document.createElement('div');
            testEl.style.cssText = 'position:fixed;bottom:0;left:0;width:1px;height:0;padding-bottom:env(safe-area-inset-bottom,0);visibility:hidden;';
            document.body.appendChild(testEl);
            var envValue = parseInt(getComputedStyle(testEl).paddingBottom) || 0;
            document.body.removeChild(testEl);
            if (envValue > 0) {
                measuredBottom = envValue;
            }
        }
        
        // Cache-Wert aktualisieren
        SAFE_AREA_RUNTIME.bottom = measuredBottom;
        SAFE_AREA_RUNTIME.lastMeasurement = Date.now();
        
        return measuredBottom;
    }
    
    function applySafeAreaCSS() {
        var sab = SAFE_AREA_RUNTIME.bottom;
        
        // NUR CSS-Variablen setzen, KEINE inline-Styles!
        document.documentElement.style.setProperty('--sab-js', sab + 'px');
        document.documentElement.style.setProperty(
            '--btm-nav-total', 
            'calc(56px + ' + sab + 'px)'
        );
        
        // Klasse für CSS-Targeting
        if (sab > 0) {
            document.documentElement.classList.add('safe-area-detected');
        } else {
            document.documentElement.classList.remove('safe-area-detected');
        }
    }
    
    function initSafeAreaRuntime() {
        detectRuntimeEnvironment();
        measureSafeAreaRuntime();
        applySafeAreaCSS();
        
        // Event-Listener für Orientation-Change
        window.addEventListener('orientationchange', function() {
            setTimeout(function() {
                measureSafeAreaRuntime();
                applySafeAreaCSS();
            }, 100); // Kurze Verzögerung für iOS
        });
        
        // Debounced Resize-Handler
        var resizeTimeout;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(function() {
                measureSafeAreaRuntime();
                applySafeAreaCSS();
            }, 150);
        });
        
        // visualViewport-Handler (falls verfügbar)
        if (window.visualViewport) {
            window.visualViewport.addEventListener('resize', function() {
                measureSafeAreaRuntime();
                applySafeAreaCSS();
            });
        }
    }

    // ============================================
    // INITIALIZATION
    // ============================================
    function init() {
        cache();
        initMotionPreference();
        lTh();
        aTh();
        lFs();
        aFs();
        
        // Apply Safe Area Fix for iOS PWA
        // Run early to prevent layout flash - uses CSS variables only, NO inline styles
        initSafeAreaRuntime();

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

        // Adresse anwenden und History-Navigation aktivieren
        applyRoute();
        syncRoute(true);
        window.addEventListener('popstate', onPopState);
        window.addEventListener('hashchange', onHashChange);

        uOff();

        // Initialize advanced features
        initSwipeGestures();
        initDraggablePicker();
        initRipples();

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
        if (E.themeToggle) {
            E.themeToggle.addEventListener('click', function() { toggleTheme(E.themeToggle); });
        }

        if (E.themeToggleMobile) {
            E.themeToggleMobile.addEventListener('click', function() { toggleTheme(E.themeToggleMobile); });
        }

        // Telefonverzeichnis
        if (E.dirBtn) E.dirBtn.addEventListener('click', oDir);
        if (E.dirBtnMobile) E.dirBtnMobile.addEventListener('click', oDir);
        if (E.dirClose) E.dirClose.addEventListener('click', cDir);
        if (E.dirBackdrop) E.dirBackdrop.addEventListener('click', cDir);
        if (E.dirInput) {
            E.dirInput.addEventListener('input', function() {
                rDir(E.dirInput.value);
                if (E.dirClear) E.dirClear.classList.toggle('show', !!E.dirInput.value);
            });
        }
        if (E.dirClear) {
            E.dirClear.addEventListener('click', function() {
                E.dirInput.value = '';
                E.dirClear.classList.remove('show');
                rDir('');
                E.dirInput.focus();
            });
        }
        // Verweise aus dem Dispositionsfeld auf das Telefonverzeichnis
        document.addEventListener('click', function(e) {
            var trigger = e.target.closest ? e.target.closest('[data-dir-open]') : null;
            if (trigger) {
                e.preventDefault();
                oDir();
            }
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
            if (S.isNavigating) return;
            S.sopId = null;
            sTab('home', S.tab === 'home' ? null : 'pop');
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
        var runSearch = debounce(rSearch, 110);
        E.searchViewInput.addEventListener('input', function() {
            S.sQ = this.value;
            E.searchViewClear.classList.toggle('show', this.value.length > 0);
            runSearch();
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
            setTimeout(printSop, MOTION.reduced ? 0 : 220);
        });

        // Bottom navigation
        var TAB_ORDER = { home: 0, browse: 1, search: 2, sop: 3 };
        var bns = E.bottomNav.querySelectorAll('.btm-btn');
        for (var i = 0; i < bns.length; i++) {
            (function(bn) {
                bn.addEventListener('click', function() {
                    var t = bn.getAttribute('data-tab');
                    if (!t || S.isNavigating) return;
                    if (t === S.tab) {
                        // Erneuter Tipp auf den aktiven Tab: nach oben scrollen
                        smoothScrollTo(E.contentScroll, 0);
                        return;
                    }

                    haptic('light');

                    // Bewegungsrichtung folgt der Reihenfolge der Tabs
                    var mode = TAB_ORDER[t] > TAB_ORDER[S.tab] ? 'push' : 'pop';

                    S.sopId = null;
                    if (t === 'browse') {
                        S.catB = 'all';  // Filter zurücksetzen
                        S.bQ = '';       // Suchbegriff zurücksetzen
                    }
                    sTab(t, mode);
                });
            })(bns[i]);
        }

        // Ein gemeinsamer, per requestAnimationFrame getakteter Scroll-Handler.
        // Zuvor liefen zwei gedrosselte Listener nebeneinander und lasen in
        // jedem Durchlauf Layoutwerte - das kostete Frames beim Scrollen.
        E.contentScroll.addEventListener('scroll', onScroll, { passive: true });

        // Online/Offline
        window.addEventListener('online', function() { S.off = false; uOff(); });
        window.addEventListener('offline', function() { S.off = true; S.ts = new Date(); uOff(); });

        // Resize: Breakpoint merken, gepufferte Positionen verwerfen
        window.addEventListener('resize', debounce(function() {
            var wasMobile = S.mob;
            S.mob = window.innerWidth < 1024;
            invalidateSectionOffsets();
            updateSegmentedPill(false);
            if (wasMobile !== S.mob) uChrome();
        }, 140));

        // Orientierungswechsel: Positionen sind sofort ungültig
        window.addEventListener('orientationchange', function() {
            invalidateSectionOffsets();
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
                S.spotQ = this.value;
                E.spotlightClear.classList.toggle('show', this.value.length > 0);
                renderSpotlightResults();
            });
        }

        if (E.spotlightClear) {
            E.spotlightClear.addEventListener('click', function() {
                if (!E.spotlightInput) return;
                E.spotlightInput.value = '';
                S.spotQ = '';
                E.spotlightClear.classList.remove('show');
                renderSpotlightResults();
                E.spotlightInput.focus();
            });
        }

        // Fokus in geöffneten Overlays halten
        document.addEventListener('keydown', trapFocus);

        // Enter/Leertaste aktiviert Karten und Listeneinträge (Tastaturbedienung)
        document.addEventListener('keydown', function(e) {
            if (e.key !== 'Enter' && e.key !== ' ') return;
            var t = e.target;
            if (!t || !t.getAttribute) return;
            var role = t.getAttribute('role');
            if ((role !== 'button' && role !== 'option') || t.tagName === 'BUTTON' || t.tagName === 'A') return;
            e.preventDefault();
            t.click();
        });

        // Keyboard shortcut for spotlight
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                // Nur das oberste Overlay schliessen
                if (E.dirOverlay && E.dirOverlay.classList.contains('show')) {
                    cDir();
                } else if (E.spotlightOverlay && E.spotlightOverlay.classList.contains('show')) {
                    closeSpotlight();
                } else if (E.sectionPickerOverlay && E.sectionPickerOverlay.classList.contains('show')) {
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
    // SCROLL-REAKTIONEN (FAB + Abschnittsleiste)
    // ============================================
    var lastScrollY = 0;
    var fabTucked = false;
    var scrollTicking = false;

    function onScroll() {
        if (scrollTicking) return;
        scrollTicking = true;
        raf(onScrollFrame);
    }

    function onScrollFrame() {
        scrollTicking = false;
        var y = E.contentScroll ? E.contentScroll.scrollTop : 0;
        handleFabVisibility(y);
        uSticky(y);
        lastScrollY = y;
    }

    // Der FAB wird ueber eine Klasse bewegt, nicht mehr ueber Inline-Styles.
    // So kollidiert er nicht mehr mit den :hover/:active-Transforms.
    function handleFabVisibility(y) {
        var fab = E.fabAction;
        if (!fab || !fab.classList.contains('show')) return;

        var delta = y - lastScrollY;

        if (delta > 6 && y > 120 && !fabTucked) {
            fab.classList.add('is-tucked');
            fabTucked = true;
        } else if ((delta < -6 || y <= 60) && fabTucked) {
            fab.classList.remove('is-tucked');
            fabTucked = false;
        }
    }

    // ============================================
    // PULL TO REFRESH
    // ============================================
    // Gummiband-Charakteristik: der Weg wird gedaempft, das Symbol dreht
    // sich proportional mit. Gezeichnet wird ausschliesslich per
    // requestAnimationFrame und transform.

    var PTH = 76;
    var pullState = {
        startY: 0,
        distance: 0,
        active: false,
        armed: false,
        frame: null,
        refreshing: false
    };

    function renderPullFrame() {
        pullState.frame = null;
        var ind = E.pullIndicator;
        if (!ind) return;

        var progress = Math.min(pullState.distance / PTH, 1.4);
        var y = pullState.distance;
        var rotation = progress * 300;
        var scale = 0.6 + Math.min(progress, 1) * 0.4;

        ind.style.transform = 'translate3d(0, ' + y + 'px, 0) rotate(' + rotation + 'deg) scale(' + scale + ')';
        ind.style.opacity = String(Math.min(progress * 1.2, 1));
        ind.classList.toggle('is-armed', progress >= 1);
    }

    function resetPullIndicator() {
        var ind = E.pullIndicator;
        if (!ind) return;
        ind.classList.remove('show', 'spin', 'is-dragging', 'is-armed');
        ind.style.transform = '';
        ind.style.opacity = '';
    }

    function handlePullStart(e) {
        pullState.active = false;
        pullState.armed = false;
        pullState.distance = 0;

        if (pullState.refreshing || S.isNavigating) return;
        if (!E.contentScroll || E.contentScroll.scrollTop > 0) return;
        if (e.touches.length !== 1) return;

        pullState.startY = e.touches[0].clientY;
        pullState.active = true;
    }

    function handlePullMove(e) {
        if (!pullState.active || e.touches.length !== 1) return;
        if (E.contentScroll.scrollTop > 0) {
            pullState.active = false;
            resetPullIndicator();
            return;
        }

        var raw = e.touches[0].clientY - pullState.startY;
        if (raw <= 0) {
            if (pullState.distance !== 0) {
                pullState.distance = 0;
                if (!pullState.frame) pullState.frame = raf(renderPullFrame);
            }
            return;
        }

        // Gummiband: je weiter gezogen, desto zaeher
        pullState.distance = Math.min(raw * 0.55, PTH * 1.4);
        pullState.armed = pullState.distance >= PTH * 0.75;

        if (E.pullIndicator) E.pullIndicator.classList.add('show', 'is-dragging');
        if (!pullState.frame) pullState.frame = raf(renderPullFrame);
    }

    function handlePullEnd() {
        if (!pullState.active) return;
        pullState.active = false;

        if (pullState.frame && window.cancelAnimationFrame) {
            window.cancelAnimationFrame(pullState.frame);
        }
        pullState.frame = null;

        var ind = E.pullIndicator;
        var shouldRefresh = pullState.armed && !pullState.refreshing;
        pullState.distance = 0;
        pullState.armed = false;

        if (!shouldRefresh) {
            resetPullIndicator();
            return;
        }

        pullState.refreshing = true;
        haptic('medium');

        if (ind) {
            ind.classList.remove('is-dragging', 'is-armed');
            ind.classList.add('show', 'spin');
            ind.style.transform = 'translate3d(0, 24px, 0)';
            ind.style.opacity = '1';
        }

        setTimeout(function() {
            refreshCurrentView();
            resetPullIndicator();
            pullState.refreshing = false;
        }, 620);
    }

    // Aktuelle Ansicht neu aufbauen, ohne einen Verlaufseintrag zu erzeugen
    function refreshCurrentView() {
        rHome();
        rNav();
        if (S.tab === 'browse') rBrowse();
        else if (S.tab === 'search') rSearch();
        else if (S.tab === 'sop') rSOP();
        invalidateSectionOffsets();
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
    // Ablauf: Zielinhalt rendern -> Bedienleisten aktualisieren ->
    // Ansicht animiert wechseln -> Nacharbeiten (Beobachter, Adresse).
    // Der Inhalt steht damit fertig bereit, bevor die Bewegung startet.

    function sTab(t, mode, done) {
        var fromView = currentView();
        var toView = E[VIEW_OF_TAB[t]] || E.viewHome;
        var changed = S.tab !== t;

        S.tab = t;
        stopSmoothScroll();

        // 1) Inhalt der Zielansicht aufbauen
        if (t === 'browse') {
            rBrowse();
        } else if (t === 'search') {
            rSearch();
        } else if (t === 'sop') {
            rSOP();
        }

        // 2) Rahmen (Titel, Navigation, Breadcrumb, FAB) angleichen
        uChrome();

        // 3) Ansicht wechseln
        var effectiveMode = mode;
        if (!effectiveMode && changed) effectiveMode = 'fade';

        switchView(fromView, toView, effectiveMode, function() {
            if (t === 'sop') {
                invalidateSectionOffsets();
                updateSegmentedPill(false);
                checkSegmentedScrollArrows();
            }
            uSticky(0);
            if (t === 'search' && E.searchViewInput) {
                E.searchViewInput.focus();
            }
            if (done) done();
        });

        rNav();

        // 4) Adresse angleichen: nur das Oeffnen einer SOP legt einen
        //    Verlaufseintrag an; Zurueckgehen und Tabwechsel ersetzen ihn.
        syncRoute(!(t === 'sop' && mode === 'push'));
    }

    // Kopf-, Fuss- und Randbedienelemente an den aktuellen Tab anpassen
    function uChrome() {
        var t = S.tab;

        var bns = E.bottomNav.querySelectorAll('.btm-btn');
        for (var i = 0; i < bns.length; i++) {
            bns[i].classList.toggle('active', bns[i].getAttribute('data-tab') === t);
            bns[i].setAttribute('aria-current', bns[i].getAttribute('data-tab') === t ? 'page' : 'false');
        }

        E.backBtn.classList.remove('show');
        E.desktopTocBtn.style.display = 'none';
        E.fabAction.classList.remove('show', 'is-tucked');
        fabTucked = false;

        if (t === 'home') {
            rBC([]);
            E.mobileTitle.textContent = 'Patientenpfade: ZNA';
        } else if (t === 'browse') {
            rBC([{ label: 'SOPs' }]);
            E.mobileTitle.textContent = 'SOPs';
            E.backBtn.classList.add('show');
        } else if (t === 'search') {
            rBC([{ label: 'Suche' }]);
            E.mobileTitle.textContent = 'Suche';
            E.backBtn.classList.add('show');
        } else if (t === 'sop') {
            E.backBtn.classList.add('show');
            E.desktopTocBtn.style.display = '';
            E.fabAction.classList.add('show');

            var d = findSop(S.sopId);
            if (d) {
                E.mobileTitle.textContent = d.name || '';
                rBC([
                    { label: 'SOPs', click: function() { S.sopId = null; sTab('browse', 'pop'); } },
                    { label: d.name || '' }
                ]);
            }
        }
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

            html += '<li><a href="#sop/' + d.id + '" class="' + (isAct ? 'active' : '') + '"' +
                (isAct ? ' aria-current="page"' : '') + ' data-id="' + d.id + '">';
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

        // Aktiven Eintrag sanft in den Blick holen
        var act = E.navList.querySelector('a.active');
        if (act && act.scrollIntoView && !MOTION.reduced) {
            act.scrollIntoView({ block: 'nearest' });
        }
    }

    function rHome() {
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
                if (v.length < 1) return;

                // Eingabe an die Spotlight-Suche uebergeben und das Feld
                // wieder leeren, damit beide Felder nicht auseinanderlaufen.
                S.spotQ = v;
                this.value = '';
                if (E.spotlightInput) E.spotlightInput.value = v;
                if (E.spotlightClear) E.spotlightClear.classList.add('show');
                renderSpotlightResults();
                openSpotlight();
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
        gh += '<div class="cat-card cat-card-all" data-cat="all" role="button" tabindex="0" style="--cat-color:var(--primary)">';
        gh += '<i class="fa-solid fa-list cat-card-icon" style="color:var(--primary)"></i>';
        gh += '<span class="cat-card-name">Alle SOPs</span>';
        gh += '<span class="cat-card-count">' + S.data.length + ' Pfade</span>';
        gh += '</div>';

        // Add category cards
        for (var i = 0; i < keys.length; i++) {
            if (counts[keys[i]] > 0) {
                var cl = gc(keys[i]);
                var ic = CATS[keys[i]].icon;
                gh += '<div class="cat-card" data-cat="' + keys[i] + '" role="button" tabindex="0" style="--cat-color:' + cl + '">';
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
                    S.bQ = '';
                    haptic('light');
                    sTab('browse', 'push');
                });
            })(cards[i]);
        }

        applyStagger(cards, 'stagger-item');

        E.homeInfo.innerHTML = '<p class="info-count">' + S.data.length + ' Patientenpfade verfügbar</p>';
    }

    function rBrowse() {
        var html = '<h1 class="sr-only">Alle SOPs</h1>' +
            '<div class="browse-bar-top">' +
            '<div class="browse-search">' +
            '<i class="fa-solid fa-magnifying-glass"></i>' +
            '<input type="text" id="browseSearchInput" placeholder="SOPs filtern..." autocomplete="off" value="' + (S.bQ || '') + '">' +
            '<button class="browse-search-clear' + (S.bQ ? ' show' : '') + '" id="browseSearchClear" aria-label="Suche leeren"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>' +
            '</div>' +
            '<button class="browse-cat-toggle' + (S.bCatOpen ? ' open' : '') + '" id="browseCatToggle">' +
            '<i class="fa-solid fa-filter"></i> Kategorien' +
            (S.catB !== 'all' ? ' <span class="browse-active-cat">' + ((CATS[S.catB] && CATS[S.catB].name) || '') + '</span>' : '') +
            '<i class="fa-solid fa-chevron-down toggle-icon"></i>' +
            '</button>' +
            '<div class="browse-cats' + (S.bCatOpen ? ' open' : '') + '" id="browseCategoryFilters"></div>' +
            '</div>' +
            '<div class="browse-list" id="browseList" aria-live="polite"></div>';

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

            html += '<div class="browse-item" data-id="' + d.id + '" role="button" tabindex="0">';
            html += '<span class="bi-dot" style="background:' + cl + '"></span>';
            html += '<span class="bi-name">' + nm + '</span>';
            html += '<span class="bi-cat">' + cn + '</span>';
            html += '<i class="fa-solid fa-chevron-right bi-arrow" aria-hidden="true"></i>';
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

        applyStagger(items, 'stagger-item');
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
                    var txt = secTextLower(sec);
                    var idx = txt.indexOf(q);
                    if (idx === -1 && secTitle.toLowerCase().indexOf(q) === -1) continue;

                    score += 3;
                    if (idx === -1) idx = 0;

                    var plain = secText(sec);
                    var start = Math.max(0, idx - 60);
                    var end = Math.min(plain.length, idx + q.length + 60);
                    var snippet = (start > 0 ? '…' : '') +
                        plain.substring(start, end).replace(/\s+/g, ' ').trim() +
                        (end < plain.length ? '…' : '');
                    secMatches.push({ title: secTitle, snippet: snippet });
                }
            }

            if (d.sources && sourcesTextLower(d).indexOf(q) !== -1) score += 1;

            if (score > 0) {
                results.push({ sop: d, score: score, nameMatch: nameMatch, secMatches: secMatches });
            }
        }

        results.sort(function(a, b) { return b.score - a.score; });

        if (results.length === 0) {
            E.searchResultsArea.innerHTML = '<div class="search-empty"><i class="fa-solid fa-circle-xmark"></i><p>Keine Ergebnisse für &bdquo;' + esc(S.sQ) + '&ldquo;</p></div>';
            return;
        }

        var html = '';
        for (var i = 0; i < results.length; i++) {
            var r = results[i];
            var d = r.sop;
            var cl = gc(d.category);
            var cn = CATS[d.category] ? CATS[d.category].name : '';

            html += '<div class="search-result" data-id="' + d.id + '" role="button" tabindex="0">';
            html += '<h4>' + hl(d.name || '', S.sQ) + '</h4>';
            if (r.secMatches.length > 0) {
                html += '<p>' + hl(esc(r.secMatches[0].snippet), S.sQ) + '</p>';
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

        applyStagger(items, 'stagger-item');
    }

    function rSOP() {
        var d = findSop(S.sopId);

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
            '<span class="sop-cat-badge" style="--cat-color:' + cl + '"><i class="fa-solid ' + ci + '" aria-hidden="true"></i> ' + cn + '</span>' +
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
                var op = AO.indexOf(secTitle) !== -1;

                html += '<div class="sop-section" data-sec="' + i + '">';
                html += '<div class="sop-section-head" data-idx="' + i + '" role="button" tabindex="0" aria-expanded="' + (op ? 'true' : 'false') + '">';
                html += '<i class="fa-solid ' + ic + ' sec-icon" style="color:' + cl + '"></i>';
                html += '<span class="sec-title" role="heading" aria-level="2">' + secTitle + '</span>';
                html += '<i class="fa-solid fa-chevron-down sec-toggle' + (op ? ' open' : '') + '"></i>';
                html += '</div>';
                html += '<div class="sop-section-body' + (op ? ' open' : '') + '">' + secHtml + '</div>';
                html += '</div>';
            }
        }

        // Sources section
        if (d.sources) {
            html += '<div class="sop-section" data-sec="sources">';
            html += '<div class="sop-section-head" data-idx="sources" role="button" tabindex="0" aria-expanded="false">';
            html += '<i class="fa-solid fa-quote-right sec-icon" style="color:' + cl + '"></i>';
            html += '<span class="sec-title" role="heading" aria-level="2">Quellen</span>';
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
            bindSegmentedButton(segButtons[i], d, segButtons[i].getAttribute('data-seg'));
        }

        // Initialize keyboard navigation for segmented control
        var segControl = E.viewSOP.querySelector('.segmented-control');
        if (segControl) {
            initSegmentedKeyboardNav(segControl);
        }

        // Initialize scroll arrows for segmented control
        initSegmentedScrollArrows();

        // Abschnitte auf- und zuklappen (animierte Hoehe)
        var sections = E.viewSOP.querySelectorAll('.sop-section');
        for (var i = 0; i < sections.length; i++) {
            (function(section) {
                var head = section.querySelector('.sop-section-head');
                if (!head) return;
                head.addEventListener('click', function() {
                    haptic('light');
                    toggleSection(section);
                });
            })(sections[i]);
        }

        // Gestaffelter Auftritt der Abschnittskarten
        applyStagger(sections, 'stagger-in');

        invalidateSectionOffsets();
        segSpyIdx = null;
        segStuck = false;

        rPk();
        rNav();
    }

    // Alle Abschnitte oeffnen, drucken, vorherigen Zustand wiederherstellen.
    function printSop() {
        if (!E.viewSOP) return;

        var sections = E.viewSOP.querySelectorAll('.sop-section');
        var wasOpen = [];
        var i;

        for (i = 0; i < sections.length; i++) {
            wasOpen.push(isSectionOpen(sections[i]));
            setSectionOpen(sections[i], true, false);
        }

        try {
            window.print();
        } finally {
            for (i = 0; i < sections.length; i++) {
                setSectionOpen(sections[i], wasOpen[i], false);
            }
            invalidateSectionOffsets();
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
            if (S.isNavigating) return;
            S.sopId = null;
            sTab('home', S.tab === 'home' ? null : 'pop');
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
            lis[i].style.setProperty('--stagger',
                (Math.min(i, MOTION.staggerMax) * MOTION.staggerStep) + 'ms');
            (function(li) {
                li.addEventListener('click', function() {
                    var idx = li.getAttribute('data-idx');
                    cPk();

                    var sec = E.viewSOP.querySelector('.sop-section[data-sec="' + idx + '"]');
                    if (!sec) return;

                    var wasClosed = !isSectionOpen(sec);
                    if (wasClosed) setSectionOpen(sec, true, true);
                    invalidateSectionOffsets();

                    // Erst scrollen, wenn die Hoehenanimation greift -
                    // sonst zielt der Scroll auf eine veraltete Position.
                    setTimeout(function() {
                        invalidateSectionOffsets();
                        scrollElementIntoView(sec);
                    }, MOTION.reduced ? 0 : (wasClosed ? Math.round(MOTION.section * 0.5) : 60));
                });
            })(lis[i]);
        }
    }

    function oPk() {
        if (!E.sectionPickerOverlay) return;
        if (E.sectionPickerOverlay.classList.contains('show')) return;

        rememberFocus();
        E.sectionPickerOverlay.classList.add('show');
        document.body.classList.add('picker-open');
        haptic('light');

        setTimeout(function() {
            if (E.sectionPickerClose) E.sectionPickerClose.focus();
        }, MOTION.reduced ? 0 : 280);
    }

    function cPk() {
        if (!E.sectionPickerOverlay) return;
        if (!E.sectionPickerOverlay.classList.contains('show')) return;

        E.sectionPickerOverlay.classList.remove('show');
        document.body.classList.remove('picker-open');

        if (E.pickerSheet) E.pickerSheet.style.transform = '';
        restoreFocus();
    }

    // ============================================
    // STICKY ABSCHNITTSLEISTE
    // ============================================
    // Die Leiste mit den Kapiteln bleibt beim Scrollen am oberen Rand
    // stehen (CSS: position: sticky). Hier wird nur nachgehalten, welches
    // Kapitel gerade oben steht, damit es in der Leiste markiert werden
    // kann - und ob die Leiste "angeheftet" ist, um sie dann dezent
    // abzusetzen.

    var segSpyIdx = null;
    var segStuck = false;

    function segStickyEl() {
        return E.viewSOP ? E.viewSOP.querySelector('.sop-seg-sticky') : null;
    }

    // Hoehe der angehefteten Leiste - Sprungziele muessen darunter landen.
    // Der Wert kommt aus dem Positions-Cache, damit das Scrollen kein
    // zusaetzliches Layout erzwingt.
    function stickyOffset() {
        if (S.tab !== 'sop') return 0;
        sectionOffsets();
        return SEC_CACHE.stickyHeight;
    }

    function uSticky(y) {
        if (S.tab !== 'sop') {
            segSpyIdx = null;
            segStuck = false;
            return;
        }

        var sticky = segStickyEl();
        if (!sticky) return;

        var scrollTop = (y === undefined && E.contentScroll) ? E.contentScroll.scrollTop : (y || 0);

        // Alle Messwerte kommen aus dem Puffer - Scrollen erzwingt damit
        // kein Layout pro Frame.
        var secs = sectionOffsets();
        var barHeight = SEC_CACHE.stickyHeight;

        var stuck = scrollTop >= SEC_CACHE.stickyTop;
        if (stuck !== segStuck) {
            segStuck = stuck;
            sticky.classList.toggle('is-stuck', stuck);
        }

        // Welches Kapitel steht gerade unter der Leiste?
        var ct = scrollTop + barHeight + 16;
        var cur = null;

        for (var i = 0; i < secs.length; i++) {
            if (secs[i].top <= ct) cur = secs[i];
            else break;
        }

        var idx = (stuck && cur) ? cur.idx : null;
        if (idx === segSpyIdx) return;
        segSpyIdx = idx;

        // DOM nur bei echtem Wechsel anfassen
        var buttons = E.viewSOP.querySelectorAll('.segmented-btn');
        var currentBtn = null;
        for (var j = 0; j < buttons.length; j++) {
            var isCur = idx !== null && buttons[j].getAttribute('data-seg') === String(idx);
            buttons[j].classList.toggle('is-current', isCur);
            if (isCur) currentBtn = buttons[j];
        }

        for (var k = 0; k < secs.length; k++) {
            secs[k].el.classList.toggle('is-current', idx !== null && secs[k].idx === idx);
        }

        // Inhaltsverzeichnis folgt derselben Quelle - ein zweiter
        // Beobachter dafuer ist nicht noetig.
        if (E.sectionPickerList) {
            var lis = E.sectionPickerList.querySelectorAll('li');
            for (var m = 0; m < lis.length; m++) {
                lis[m].classList.toggle('active', idx !== null && lis[m].getAttribute('data-idx') === idx);
            }
        }

        // Liegt das markierte Kapitel ausserhalb der Leiste, wird es
        // hereingeholt - aber nur dann, damit die Leiste nicht bei jedem
        // Scrollen unter dem Finger wegwandert.
        if (currentBtn) revealSegmentedButtonIfHidden(currentBtn);
    }

    function revealSegmentedButtonIfHidden(btn) {
        var control = btn.parentNode;
        if (!control || control.scrollWidth <= control.clientWidth + 2) return;

        var left = btn.offsetLeft;
        var right = left + btn.offsetWidth;

        if (left >= control.scrollLeft && right <= control.scrollLeft + control.clientWidth) return;

        revealSegmentedButton(btn);
    }

    function findSop(id) {
        for (var i = 0; i < S.data.length; i++) {
            if (S.data[i].id === id) return S.data[i];
        }
        return null;
    }

    // ============================================
    // GLOBAL API
    // ============================================
    window.registerSOP = function(d) {
        if (!d || !d.id) return;
        normSop(d);
        S.data.push(d);

        // Nachtraeglich geladene SOPs muessen einsortiert und in den
        // Listen sichtbar werden - sonst tauchen sie erst nach einem
        // Neuladen auf.
        S.data.sort(function(a, b) {
            return (a.name || '').localeCompare(b.name || '', 'de');
        });

        if (E.categoryFilters) rSB();
        if (S.tab === 'browse' && E.browseList) rBrowseList();
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
