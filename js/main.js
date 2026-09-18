/* ============================================================
   main.js - Gesten, Ereignisbindung, Start
   ------------------------------------------------------------
   Letztes Modul der Kette. Verdrahtet die Bedienelemente und
   startet die Anwendung.
   ============================================================ */
(function(App) {
    'use strict';

    var S = App.S;
    var E = App.E;
    var G = App.GESTURE;

    // ============================================
    // WISCHGESTE "ZURUECK"
    // ============================================
    // Die Ansicht wird waehrend der Geste live mitbewegt; erst beim
    // Loslassen entscheidet Strecke oder Geschwindigkeit ueber Abschluss
    // oder Zuruecksetzen. Beides laeuft als reine Transform-Animation.
    var swipe = {
        startX: 0, startY: 0, lastX: 0, lastT: 0,
        velocity: 0, isSwiping: false, canSwipe: false, locked: false,
        view: null, frame: null, pending: 0
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
        swipe.isSwiping = false;
        swipe.canSwipe = false;
        swipe.locked = false;
        swipe.velocity = 0;

        if (S.isNavigating || !App.canGoBack()) return;
        if (e.touches.length !== 1) return;

        var touch = e.touches[0];
        swipe.startX = touch.clientX;
        swipe.startY = touch.clientY;
        swipe.lastX = touch.clientX;
        swipe.lastT = e.timeStamp;

        if (touch.clientX < G.edgeMargin) swipe.canSwipe = true;
    }

    function renderSwipeFrame() {
        swipe.frame = null;
        var view = swipe.view;
        if (!view) return;

        var progress = Math.max(0, Math.min(swipe.pending / window.innerWidth, 1));
        // Leichter Widerstand am Ende der Strecke
        var shift = swipe.pending * (1 - progress * 0.35);

        view.style.transform = 'translate3d(' + shift + 'px, 0, 0) scale(' + (1 - progress * 0.03) + ')';
        view.style.opacity = String(1 - progress * 0.35);
    }

    function handleTouchMove(e) {
        if (!swipe.canSwipe || e.touches.length !== 1) return;

        var touch = e.touches[0];
        var deltaX = touch.clientX - swipe.startX;
        var deltaY = touch.clientY - swipe.startY;

        // Richtung erst festlegen, danach nicht mehr wechseln. So bleibt
        // senkrechtes Scrollen am linken Rand weiterhin moeglich.
        if (!swipe.isSwiping && !swipe.locked) {
            if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > G.directionLock) {
                swipe.locked = true;
                swipe.canSwipe = false;
                return;
            }
            if (deltaX > G.directionLock && Math.abs(deltaX) > Math.abs(deltaY)) {
                swipe.isSwiping = true;
                swipe.view = App.currentView();
                if (swipe.view) {
                    swipe.view.classList.add('is-dragging');
                    if (E.contentScroll) E.contentScroll.classList.add('is-swiping');
                }
            } else {
                return;
            }
        }

        if (!swipe.isSwiping) return;

        // Erst jetzt den Browser-Rueckwaertswisch unterbinden
        if (e.cancelable) e.preventDefault();

        var now = e.timeStamp;
        var dt = now - swipe.lastT;
        if (dt > 0) {
            swipe.velocity = (touch.clientX - swipe.lastX) / dt;
            swipe.lastX = touch.clientX;
            swipe.lastT = now;
        }

        swipe.pending = Math.max(0, deltaX);
        if (!swipe.frame) swipe.frame = App.raf(renderSwipeFrame);
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

        App.afterMotion(view, 'transitionend', 340, function() {
            view.style.transition = '';
            view.style.transform = '';
            view.style.opacity = '';
            view.style.willChange = '';
        });
    }

    function handleTouchEnd() {
        var wasSwiping = swipe.isSwiping;
        var view = swipe.view;

        swipe.isSwiping = false;
        swipe.canSwipe = false;
        swipe.view = null;

        if (swipe.frame && window.cancelAnimationFrame) {
            window.cancelAnimationFrame(swipe.frame);
        }
        swipe.frame = null;

        if (!wasSwiping) {
            swipe.pending = 0;
            return;
        }

        var deltaX = swipe.pending;
        swipe.pending = 0;

        var shouldPop = deltaX > G.swipeDistance ||
            (deltaX > G.swipeDistance * 0.4 && swipe.velocity > G.swipeVelocity);

        releaseSwipeView(view, shouldPop);

        if (shouldPop) {
            App.haptic('light');
            App.popNav();
        }
    }

    // ============================================
    // ZIEHBARES BOTTOM SHEET
    // ============================================
    // Es wird ausschliesslich translate3d animiert, also rein auf dem
    // Compositor - eine Aenderung der max-height wuerde in jedem Frame
    // ein neues Layout erzwingen.
    var drag = {
        startY: 0, lastY: 0, lastT: 0, offset: 0, velocity: 0,
        isDragging: false, pointerId: null, frame: null, sheet: null, height: 0
    };

    function initDraggablePicker() {
        var picker = E.sectionPickerOverlay;
        var sheet = E.pickerSheet;
        if (!sheet || !picker) return;

        drag.sheet = sheet;

        var grips = [E.pickerHandle, picker.querySelector('.picker-head')];
        for (var i = 0; i < grips.length; i++) {
            if (grips[i]) grips[i].addEventListener('pointerdown', handleDragStart);
        }

        sheet.addEventListener('pointermove', handleDragMove);
        sheet.addEventListener('pointerup', handleDragEnd);
        sheet.addEventListener('pointercancel', handleDragEnd);
    }

    function handleDragStart(e) {
        var sheet = drag.sheet;
        if (!sheet || drag.isDragging) return;
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        // Auf der Schliessen-Schaltflaeche keine Ziehgeste starten
        if (e.target && e.target.closest && e.target.closest('button') &&
            e.target.closest('button') !== E.pickerHandle) return;

        drag.isDragging = true;
        drag.pointerId = e.pointerId;
        drag.startY = e.clientY;
        drag.lastY = e.clientY;
        drag.lastT = (e.timeStamp || Date.now());
        drag.offset = 0;
        drag.velocity = 0;
        drag.height = sheet.offsetHeight || 1;

        sheet.classList.add('is-dragging');
        if (sheet.setPointerCapture) {
            try { sheet.setPointerCapture(e.pointerId); } catch (err) {}
        }
    }

    function renderDragFrame() {
        drag.frame = null;
        var sheet = drag.sheet;
        if (!sheet || !drag.isDragging) return;
        sheet.style.transform = 'translate3d(0, ' + drag.offset + 'px, 0)';
    }

    function handleDragMove(e) {
        if (!drag.isDragging) return;
        if (drag.pointerId !== null && e.pointerId !== drag.pointerId) return;
        if (e.cancelable) e.preventDefault();

        var delta = e.clientY - drag.startY;
        // Nach oben nur mit deutlichem Widerstand
        drag.offset = delta < 0 ? delta * 0.22 : delta;

        var now = e.timeStamp || Date.now();
        var dt = now - drag.lastT;
        if (dt > 0) {
            drag.velocity = (e.clientY - drag.lastY) / dt;
            drag.lastY = e.clientY;
            drag.lastT = now;
        }

        if (!drag.frame) drag.frame = App.raf(renderDragFrame);
    }

    function handleDragEnd() {
        if (!drag.isDragging) return;

        var sheet = drag.sheet;
        drag.isDragging = false;

        if (drag.frame && window.cancelAnimationFrame) {
            window.cancelAnimationFrame(drag.frame);
        }
        drag.frame = null;

        if (sheet && sheet.releasePointerCapture && drag.pointerId !== null) {
            try { sheet.releasePointerCapture(drag.pointerId); } catch (err) {}
        }
        drag.pointerId = null;

        if (!sheet) return;
        sheet.classList.remove('is-dragging');

        var shouldClose = drag.offset > drag.height * 0.32 || drag.velocity > 0.7;

        // Das Schliessen uebernimmt die CSS-Transition des Overlays
        sheet.style.transform = '';
        if (shouldClose) App.closePicker();
        else if (drag.offset > 4) App.haptic('light');

        drag.offset = 0;
        drag.velocity = 0;
    }

    // ============================================
    // ZUM AKTUALISIEREN ZIEHEN
    // ============================================
    // Gummiband-Charakteristik: der Weg wird gedaempft, das Symbol dreht
    // sich proportional mit - gezeichnet per requestAnimationFrame.
    var PTH = 76;
    var pull = {
        startY: 0, distance: 0, active: false,
        armed: false, frame: null, refreshing: false
    };

    function renderPullFrame() {
        pull.frame = null;
        var ind = E.pullIndicator;
        if (!ind) return;

        var progress = Math.min(pull.distance / PTH, 1.4);
        var rotation = progress * 300;
        var scale = 0.6 + Math.min(progress, 1) * 0.4;

        ind.style.transform = 'translate3d(0, ' + pull.distance + 'px, 0) rotate(' +
            rotation + 'deg) scale(' + scale + ')';
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
        pull.active = false;
        pull.armed = false;
        pull.distance = 0;

        if (pull.refreshing || S.isNavigating) return;
        if (!E.contentScroll || E.contentScroll.scrollTop > 0) return;
        if (e.touches.length !== 1) return;

        pull.startY = e.touches[0].clientY;
        pull.active = true;
    }

    function handlePullMove(e) {
        if (!pull.active || e.touches.length !== 1) return;
        if (E.contentScroll.scrollTop > 0) {
            pull.active = false;
            resetPullIndicator();
            return;
        }

        var raw = e.touches[0].clientY - pull.startY;
        if (raw <= 0) {
            if (pull.distance !== 0) {
                pull.distance = 0;
                if (!pull.frame) pull.frame = App.raf(renderPullFrame);
            }
            return;
        }

        // Gummiband: je weiter gezogen, desto zaeher
        pull.distance = Math.min(raw * 0.55, PTH * 1.4);
        pull.armed = pull.distance >= PTH * 0.75;

        if (E.pullIndicator) E.pullIndicator.classList.add('show', 'is-dragging');
        if (!pull.frame) pull.frame = App.raf(renderPullFrame);
    }

    function handlePullEnd() {
        if (!pull.active) return;
        pull.active = false;

        if (pull.frame && window.cancelAnimationFrame) {
            window.cancelAnimationFrame(pull.frame);
        }
        pull.frame = null;

        var ind = E.pullIndicator;
        var shouldRefresh = pull.armed && !pull.refreshing;
        pull.distance = 0;
        pull.armed = false;

        if (!shouldRefresh) {
            resetPullIndicator();
            return;
        }

        pull.refreshing = true;
        App.haptic('medium');

        if (ind) {
            ind.classList.remove('is-dragging', 'is-armed');
            ind.classList.add('show', 'spin');
            ind.style.transform = 'translate3d(0, 24px, 0)';
            ind.style.opacity = '1';
        }

        setTimeout(function() {
            App.refreshCurrentView();
            resetPullIndicator();
            pull.refreshing = false;
        }, 620);
    }

    // ============================================
    // EREIGNISBINDUNG
    // ============================================
    function bind() {
        // --- Theme ---
        if (E.themeToggle) {
            E.themeToggle.addEventListener('click', function() { App.toggleTheme(E.themeToggle); });
        }
        if (E.themeToggleMobile) {
            E.themeToggleMobile.addEventListener('click', function() { App.toggleTheme(E.themeToggleMobile); });
        }

        // --- Telefonverzeichnis ---
        if (E.dirBtn) E.dirBtn.addEventListener('click', App.openDir);
        if (E.dirBtnMobile) E.dirBtnMobile.addEventListener('click', App.openDir);
        if (E.dirClose) E.dirClose.addEventListener('click', App.closeDir);
        if (E.dirBackdrop) E.dirBackdrop.addEventListener('click', App.closeDir);

        if (E.dirInput) {
            E.dirInput.addEventListener('input', function() {
                App.rDir(E.dirInput.value);
                if (E.dirClear) E.dirClear.classList.toggle('show', !!E.dirInput.value);
            });
        }
        if (E.dirClear) {
            E.dirClear.addEventListener('click', function() {
                E.dirInput.value = '';
                E.dirClear.classList.remove('show');
                App.rDir('');
                E.dirInput.focus();
            });
        }

        // Verweise aus dem Dispositionsfeld auf das Telefonverzeichnis
        document.addEventListener('click', function(e) {
            var trigger = e.target && e.target.closest ? e.target.closest('[data-dir-open]') : null;
            if (!trigger) return;
            e.preventDefault();
            App.openDir();
        });

        // --- Seitenleiste ---
        if (E.searchInput) {
            E.searchInput.addEventListener('input', function() {
                S.hQ = this.value;
                App.rNav();
                if (E.searchClear) E.searchClear.classList.toggle('show', this.value.length > 0);
            });
        }
        if (E.searchClear) {
            E.searchClear.addEventListener('click', function() {
                E.searchInput.value = '';
                S.hQ = '';
                App.rNav();
                E.searchClear.classList.remove('show');
                E.searchInput.focus();
            });
        }
        if (E.appLogo) {
            E.appLogo.addEventListener('click', function(e) {
                e.preventDefault();
                App.goHome();
            });
        }
        if (E.sidebarCatToggle) {
            E.sidebarCatToggle.addEventListener('click', function() {
                S.sCatOpen = !S.sCatOpen;
                E.sidebarCatToggle.classList.toggle('open', S.sCatOpen);
                E.sidebarCatToggle.setAttribute('aria-expanded', String(S.sCatOpen));
                E.categoryFilters.classList.toggle('open', S.sCatOpen);
            });
        }

        // --- Volltextsuche ---
        if (E.searchViewInput) {
            var runSearch = App.debounce(App.rSearch, 110);
            E.searchViewInput.addEventListener('input', function() {
                S.sQ = this.value;
                if (E.searchViewClear) E.searchViewClear.classList.toggle('show', this.value.length > 0);
                runSearch();
            });
        }
        if (E.searchViewClear) {
            E.searchViewClear.addEventListener('click', function() {
                E.searchViewInput.value = '';
                S.sQ = '';
                App.rSearch();
                E.searchViewClear.classList.remove('show');
                E.searchViewInput.focus();
            });
        }

        // --- Schriftgroesse ---
        bindClick(E.fontDecDesktop, function() { App.changeFontSize(-1); });
        bindClick(E.fontIncDesktop, function() { App.changeFontSize(1); });
        bindClick(E.fontDecMobile, function() { App.changeFontSize(-1); });
        bindClick(E.fontIncMobile, function() { App.changeFontSize(1); });

        // --- Kopfzeile, Inhaltsverzeichnis ---
        bindClick(E.backBtn, function() { App.popNav(); });
        bindClick(E.desktopTocBtn, App.openPicker);
        bindClick(E.fabAction, App.openPicker);
        bindClick(E.sectionPickerBackdrop, App.closePicker);
        bindClick(E.sectionPickerClose, App.closePicker);
        bindClick(E.sectionPickerPrint, function() {
            App.closePicker();
            setTimeout(App.printSop, App.MOTION.reduced ? 0 : 220);
        });

        // --- Fussnavigation ---
        if (E.bottomNav) {
            var bns = E.bottomNav.querySelectorAll('.btm-btn');
            for (var i = 0; i < bns.length; i++) {
                (function(bn) {
                    bn.addEventListener('click', function() {
                        App.gotoTab(bn.getAttribute('data-tab'));
                    });
                })(bns[i]);
            }
        }

        // --- Scrollen ---
        // Ein gemeinsamer, per requestAnimationFrame getakteter Handler.
        if (E.contentScroll) {
            E.contentScroll.addEventListener('scroll', App.onScroll, { passive: true });
            E.contentScroll.addEventListener('touchstart', handlePullStart, { passive: true });
            E.contentScroll.addEventListener('touchmove', handlePullMove, { passive: true });
            E.contentScroll.addEventListener('touchend', handlePullEnd, { passive: true });
            E.contentScroll.addEventListener('touchcancel', handlePullEnd, { passive: true });
        }

        // --- Netzstatus ---
        window.addEventListener('online', function() { S.off = false; App.updateOffline(); });
        window.addEventListener('offline', function() { S.off = true; S.ts = new Date(); App.updateOffline(); });

        // --- Groessenaenderung ---
        window.addEventListener('resize', App.debounce(function() {
            var wasMobile = S.mob;
            S.mob = window.innerWidth < 1024;
            App.invalidateSectionOffsets();
            App.updateSegmentedPill(false);
            if (wasMobile !== S.mob) App.uChrome();
        }, 140));

        window.addEventListener('orientationchange', function() {
            App.invalidateSectionOffsets();
        });

        // --- Spotlight ---
        bindClick(E.spotlightBtn, App.openSpotlight);
        bindClick(E.spotlightBackdrop, App.closeSpotlight);
        bindClick(E.spotlightCancel, App.closeSpotlight);

        if (E.spotlightInput) {
            E.spotlightInput.addEventListener('input', function() {
                S.spotQ = this.value;
                if (E.spotlightClear) E.spotlightClear.classList.toggle('show', this.value.length > 0);
                App.renderSpotlightResults();
            });
            E.spotlightInput.addEventListener('keydown', App.onSpotlightKey);
        }
        if (E.spotlightClear) {
            E.spotlightClear.addEventListener('click', function() {
                if (!E.spotlightInput) return;
                E.spotlightInput.value = '';
                S.spotQ = '';
                E.spotlightClear.classList.remove('show');
                App.renderSpotlightResults();
                E.spotlightInput.focus();
            });
        }

        // --- Tastatur ---
        document.addEventListener('keydown', App.trapFocus);
        document.addEventListener('keydown', onGlobalKey);
    }

    function bindClick(el, fn) {
        if (el) el.addEventListener('click', fn);
    }

    function isTypingTarget(el) {
        if (!el) return false;
        if (/^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName)) return true;
        return el.isContentEditable === true;
    }

    function onGlobalKey(e) {
        // Enter/Leertaste aktiviert Listeneintraege, die keine
        // Schaltflaechen sind (Inhaltsverzeichnis).
        if ((e.key === 'Enter' || e.key === ' ') && e.target && e.target.getAttribute) {
            if (e.target.getAttribute('role') === 'button' &&
                e.target.tagName !== 'BUTTON' && e.target.tagName !== 'A') {
                e.preventDefault();
                e.target.click();
                return;
            }
        }

        if (e.key === 'Escape') {
            if (App.closeTopOverlay()) e.preventDefault();
            return;
        }

        // Strg/Cmd + K oeffnet die Schnellsuche
        if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
            e.preventDefault();
            App.openSpotlight();
            return;
        }

        if (isTypingTarget(e.target)) return;

        // "/" oeffnet die Schnellsuche, Backspace geht zurueck
        if (e.key === '/') {
            e.preventDefault();
            App.openSpotlight();
        } else if (e.key === 'Backspace') {
            e.preventDefault();
            App.popNav();
        }
    }

    // ============================================
    // START
    // ============================================
    function init() {
        App.cache();
        App.initMotionPreference();

        App.loadTheme();
        App.applyTheme();
        App.loadFontSize();
        App.applyFontSize();

        // Frueh ausfuehren, damit das Layout nicht sichtbar springt
        App.initSafeArea();

        // SOP-Daten uebernehmen
        if (window.SOP_DATA && window.SOP_DATA.length) {
            for (var i = 0; i < window.SOP_DATA.length; i++) {
                var d = window.SOP_DATA[i];
                if (!d || !d.id) continue;
                if (App.findSop(d.id)) continue;
                App.normSop(d);
                S.data.push(d);
            }
        }
        App.sortData();

        App.rSB();
        App.rHome();
        bind();

        // Adresse anwenden und Verlaufssteuerung aktivieren
        App.applyRoute();
        App.syncRoute(true);
        window.addEventListener('popstate', App.onPopState);
        window.addEventListener('hashchange', App.onHashChange);

        App.updateOffline();

        initSwipeGestures();
        initDraggablePicker();
        App.initRipples();

        document.documentElement.classList.add('app-ready');

        // Versionsabgleich nur im Webkontext, nicht bei file://
        if (window.location.protocol !== 'file:') {
            setTimeout(App.checkForUpdate, 1000);
        }
    }

    // ============================================
    // OEFFENTLICHE SCHNITTSTELLE
    // ============================================
    // Nachtraeglich geladene SOPs einsortieren und sichtbar machen.
    window.registerSOP = function(d) {
        if (!d || !d.id) return;
        if (App.findSop(d.id)) return;

        App.normSop(d);
        S.data.push(d);
        App.sortData();

        if (E.categoryFilters) App.rSB();
        if (E.catGrid) App.rHome();
        if (S.tab === 'browse' && E.browseList) App.rBrowseList();
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})(window.SOPApp);
