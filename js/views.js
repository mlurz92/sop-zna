/* ============================================================
   views.js - Ansichtswechsel, Tab-Steuerung, Kopf- und Fussleiste
   ------------------------------------------------------------
   Der Wechselmotor haelt beide Ansichten waehrend des Uebergangs
   sichtbar und raeumt erst nach dem animationend-Ereignis auf
   (mit Zeitlimit als Sicherheitsnetz).
   ============================================================ */
(function(App) {
    'use strict';

    var S = App.S;
    var E = App.E;

    var VIEW_IDS = ['viewHome', 'viewBrowse', 'viewSearch', 'viewSOP'];
    var VIEW_OF_TAB = {
        home: 'viewHome',
        browse: 'viewBrowse',
        search: 'viewSearch',
        sop: 'viewSOP'
    };
    var TAB_ORDER = { home: 0, browse: 1, search: 2, sop: 3 };
    App.TAB_ORDER = TAB_ORDER;

    var activeTransition = null;

    function currentView() {
        for (var i = 0; i < VIEW_IDS.length; i++) {
            var v = E[VIEW_IDS[i]];
            if (v && v.classList.contains('active')) return v;
        }
        return null;
    }
    App.currentView = currentView;

    function clearViewMotion(view) {
        if (!view) return;
        view.classList.remove(
            'is-anim', 'is-leaving', 'is-dragging', 'is-prepped',
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
    App.clearViewMotion = clearViewMotion;

    App.finishActiveTransition = function() {
        if (activeTransition) {
            var t = activeTransition;
            activeTransition = null;
            t();
        }
    };

    // mode: 'push' | 'pop' | 'fade' | null (sofortiger Wechsel)
    // restoreTop: Scrollposition, auf die die Zielansicht gesetzt wird
    //             (Vorschlag 4 - beim Zurueckgehen die gemerkte Stelle,
    //             sonst der Anfang)
    function switchView(fromView, toView, mode, done, restoreTop) {
        var top = typeof restoreTop === 'number' ? Math.max(0, restoreTop) : 0;

        if (!toView) {
            if (done) done();
            return;
        }

        App.finishActiveTransition();

        var scroller = E.contentScroll;
        var MOTION = App.MOTION;

        // Sofortwechsel: keine Ausgangsansicht, kein Modus oder Bewegungsreduktion
        if (!fromView || !mode || MOTION.reduced) {
            if (fromView && fromView !== toView) {
                fromView.classList.remove('active');
                clearViewMotion(fromView);
            }
            toView.classList.add('active');
            clearViewMotion(toView);
            if (scroller) scroller.scrollTop = top;
            if (done) done();
            return;
        }

        // Gleiche Ansicht mit neuem Inhalt (SOP -> SOP): kurzer Austausch,
        // dessen Richtung der Navigationsrichtung folgt
        if (fromView === toView) {
            if (scroller) scroller.scrollTop = top;
            clearViewMotion(toView);
            toView.classList.add('active', 'is-anim', 'is-prepped',
                mode === 'pop' ? 'anim-in-replace-back' : 'anim-in-replace');
            startWhenPainted([toView]);
            activeTransition = App.afterMotion(toView, 'animationend', MOTION.view, function() {
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
            App.stopSmoothScroll();
        }

        clearViewMotion(fromView);
        clearViewMotion(toView);

        fromView.style.top = (-offset) + 'px';
        fromView.classList.remove('active');
        fromView.classList.add('is-anim', 'is-leaving', 'is-prepped', 'anim-out-' + mode);

        toView.classList.add('active', 'is-anim', 'is-prepped', 'anim-in-' + mode);

        if (scroller) scroller.scrollTop = top;

        startWhenPainted([fromView, toView]);

        activeTransition = App.afterMotion(toView, 'animationend', MOTION.view, function() {
            clearViewMotion(fromView);
            clearViewMotion(toView);
            if (scroller) scroller.classList.remove('is-transitioning');
            activeTransition = null;
            if (done) done();
        });
    }
    App.switchView = switchView;

    // Die Bewegung beginnt erst, wenn der neue Inhalt steht.
    //
    // Zuvor wurden Inhalt und Bewegung im selben Frame angestossen: der
    // Browser musste die gesamte neue Ansicht anordnen und zeichnen,
    // waehrend die Animation bereits lief. Gemessen dauerte dieser eine
    // Frame 83 ms - die Bewegung sprang also mit einem Fuenftel ihrer
    // Strecke an, statt zu starten.
    //
    // Die Ansichten bekommen deshalb zuerst ihre Bildfolge im Zustand
    // "angehalten" (.is-prepped). Das legt den Startzustand fest, ohne
    // dass die Uhr laeuft. Ein erzwungener Layoutdurchlauf zieht die
    // teure Arbeit in diesen Frame; im naechsten faellt die Bremse.
    function startWhenPainted(views) {
        var i;
        for (i = 0; i < views.length; i++) App.reflow(views[i]);

        App.nextFrame(function() {
            for (var j = 0; j < views.length; j++) {
                if (views[j]) views[j].classList.remove('is-prepped');
            }
        });
    }

    // ============================================
    // TAB-WECHSEL
    // ============================================
    // Ablauf: Zielinhalt rendern -> Bedienleisten aktualisieren ->
    // Ansicht animiert wechseln -> Nacharbeiten (Kapitelleiste, Adresse).
    // Der Inhalt steht damit fertig bereit, bevor die Bewegung startet.
    App.sTab = function(t, mode, done) {
        var fromView = currentView();
        var toView = E[VIEW_OF_TAB[t]] || E.viewHome;
        var changed = S.tab !== t;

        S.tab = t;
        App.stopSmoothScroll();

        // 1) Inhalt der Zielansicht aufbauen
        if (t === 'browse') App.rBrowse();
        else if (t === 'search') App.rSearch();
        else if (t === 'sop') App.rSOP();

        // 2) Rahmen (Titel, Navigation, Breadcrumb, FAB) angleichen
        App.uChrome();

        if (t === 'home' && E.catGrid) {
            App.applyStagger(E.catGrid.querySelectorAll('.cat-card'), 'stagger-item');
        }

        // 3) Ansicht wechseln
        var effectiveMode = mode;
        if (!effectiveMode && changed) effectiveMode = 'fade';

        // Beim Zurueckgehen die gemerkte Stelle wiederherstellen
        // (Vorschlag 4). Eine SOP beginnt immer oben: dort steht der
        // Titel, und bei paketweise geladenem Inhalt gaebe es zum
        // Zeitpunkt des Wechsels ohnehin noch keine passende Hoehe.
        var restoreTop = (effectiveMode === 'pop' && t !== 'sop')
            ? App.recallScroll()
            : 0;

        switchView(fromView, toView, effectiveMode, function() {
            if (t === 'sop') {
                App.invalidateSectionOffsets();
                App.updateSegmentedPill(false);
                App.checkSegmentedScrollArrows();
            }
            App.uSticky(0);
            updateReadProgress(0);
            setScrolled(false);
            App.updateBottomNavPill();
            // Beim Zurueckgehen nicht in das Suchfeld springen -
            // sonst faehrt auf dem Telefon jedes Mal die Tastatur auf.
            if (t === 'search' && E.searchViewInput && effectiveMode !== 'pop') {
                E.searchViewInput.focus();
            }
            if (done) done();
        }, restoreTop);

        // 4) Nacharbeiten, die niemand sofort sieht, laufen erst nach der
        //    Bewegung. Die Navigationsliste (73 Eintraege) und das
        //    waehrend der ersten Frames neu aufzubauen kostete genau
        //    dort Zeit, wo die Bewegung sie braucht.
        App.afterTransition(App.rNav);

        // 5) Adresse angleichen: nur das Oeffnen einer SOP legt einen
        //    Verlaufseintrag an; Zurueckgehen und Tabwechsel ersetzen ihn.
        App.syncRoute(!(t === 'sop' && mode === 'push'));
    };

    // Arbeit hinter die laufende Bewegung legen. requestIdleCallback
    // nutzt die erste ruhige Luecke, das Zeitlimit ist das Sicherheitsnetz
    // fuer Browser, die keine ruhige Luecke melden.
    var pendingIdle = null;

    App.afterTransition = function(fn) {
        if (pendingIdle) {
            if (pendingIdle.idle && window.cancelIdleCallback) window.cancelIdleCallback(pendingIdle.id);
            else clearTimeout(pendingIdle.id);
            pendingIdle = null;
        }

        var run = function() {
            pendingIdle = null;
            fn();
        };

        if (App.MOTION.reduced) {
            run();
            return;
        }

        if (window.requestIdleCallback) {
            pendingIdle = { idle: true, id: window.requestIdleCallback(run, { timeout: App.MOTION.view + 60 }) };
        } else {
            pendingIdle = { idle: false, id: setTimeout(run, App.MOTION.view) };
        }
    };

    // Tab ueber die Fussleiste wechseln (Richtung folgt der Reihenfolge)
    App.gotoTab = function(t) {
        if (!t || S.isNavigating) return;

        if (t === S.tab) {
            // Erneuter Tipp auf den aktiven Tab: nach oben scrollen
            App.smoothScrollTo(E.contentScroll, 0);
            return;
        }

        App.haptic('light');
        var mode = TAB_ORDER[t] > TAB_ORDER[S.tab] ? 'push' : 'pop';

        S.sopId = null;
        if (t === 'browse') {
            S.catB = 'all';
            S.bQ = '';
        }
        App.sTab(t, mode);
    };

    // ============================================
    // KOPF-, FUSS- UND RANDBEDIENELEMENTE
    // ============================================
    App.uChrome = function() {
        var t = S.tab;

        if (E.bottomNav) {
            var bns = E.bottomNav.querySelectorAll('.btm-btn');
            for (var i = 0; i < bns.length; i++) {
                var isAct = bns[i].getAttribute('data-tab') === (t === 'sop' ? 'browse' : t);
                bns[i].classList.toggle('active', isAct);
                bns[i].setAttribute('aria-current', isAct ? 'page' : 'false');
            }
            App.updateBottomNavPill();
        }

        if (E.backBtn) E.backBtn.classList.remove('show');
        if (E.desktopTocBtn) E.desktopTocBtn.style.display = 'none';
        if (E.fabAction) E.fabAction.classList.remove('show', 'is-tucked');
        App.resetFabState();

        if (t === 'home') {
            App.rBC([]);
            setTitle('Patientenpfade: ZNA');
        } else if (t === 'browse') {
            App.rBC([{ label: 'SOPs' }]);
            setTitle('SOPs');
            if (E.backBtn) E.backBtn.classList.add('show');
        } else if (t === 'search') {
            App.rBC([{ label: 'Suche' }]);
            setTitle('Suche');
            if (E.backBtn) E.backBtn.classList.add('show');
        } else if (t === 'sop') {
            if (E.backBtn) E.backBtn.classList.add('show');
            // Der fruehere "Inhalt"-Knopf in der Breadcrumb-Leiste
            // entfaellt: die Werkzeuge stehen jetzt neben der
            // Ueberschrift, und waehrend des Scrollens uebernimmt die
            // angeheftete Kapitelleiste dieselbe Aufgabe. Zwei
            // gleichnamige Knoepfe nebeneinander waren eine Wahl
            // ohne Unterschied.
            if (E.fabAction) E.fabAction.classList.add('show');

            var d = App.findSop(S.sopId);
            if (d) {
                setTitle(d.name || '');
                App.rBC([
                    { label: 'SOPs', click: function() { S.sopId = null; App.sTab('browse', 'pop'); } },
                    { label: d.name || '' }
                ]);
            } else {
                setTitle('SOP');
                App.rBC([{ label: 'SOPs', click: function() { App.sTab('browse', 'pop'); } }]);
            }
        }
    };

    function setTitle(text) {
        if (E.mobileTitle) E.mobileTitle.textContent = text;
        document.title = text === 'Patientenpfade: ZNA' ? text : (text + ' – Patientenpfade: ZNA');
    }

    // ============================================
    // BREADCRUMB
    // ============================================
    App.rBC = function(items) {
        if (!E.breadcrumb) return;

        var html = '<a href="#home" class="bc-home">Start</a>';
        for (var i = 0; i < items.length; i++) {
            html += '<span class="sep" aria-hidden="true"><i class="fa-solid fa-chevron-right"></i></span>';
            if (items[i].click) {
                html += '<a href="#" class="bc-link" data-idx="' + i + '">' + App.esc(items[i].label) + '</a>';
            } else {
                html += '<span aria-current="page">' + App.esc(items[i].label) + '</span>';
            }
        }

        E.breadcrumb.innerHTML = html;

        var hm = E.breadcrumb.querySelector('.bc-home');
        if (hm) {
            hm.addEventListener('click', function(e) {
                e.preventDefault();
                App.goHome();
            });
        }

        var lks = E.breadcrumb.querySelectorAll('.bc-link');
        for (var k = 0; k < lks.length; k++) {
            (function(l, idx) {
                l.addEventListener('click', function(e) {
                    e.preventDefault();
                    if (items[idx] && items[idx].click) items[idx].click();
                });
            })(lks[k], parseInt(lks[k].getAttribute('data-idx'), 10));
        }
    };

    // ============================================
    // SCROLL-REAKTIONEN (FAB + Kapitelleiste)
    // ============================================
    var lastScrollY = 0;
    var fabTucked = false;
    var scrollTicking = false;

    App.resetFabState = function() {
        fabTucked = false;
        lastScrollY = 0;
    };

    App.onScroll = function() {
        if (scrollTicking) return;
        scrollTicking = true;
        App.raf(onScrollFrame);
    };

    function onScrollFrame() {
        scrollTicking = false;
        var y = E.contentScroll ? E.contentScroll.scrollTop : 0;
        handleFabVisibility(y);
        App.uSticky(y);
        updateReadProgress(y);
        App.updateSegmentedProgress(y);
        setScrolled(y > 4);
        // Position fortlaufend merken - beim Zurueckgehen wird genau
        // diese Stelle wiederhergestellt (Vorschlag 4).
        App.rememberScroll();
        lastScrollY = y;
    }

    // Kopfzeile und Breadcrumb setzen sich ab, sobald der Inhalt darunter
    // wegwandert - eine Klasse, keine Inline-Styles.
    var scrolledState = false;

    function setScrolled(on) {
        if (on === scrolledState) return;
        scrolledState = on;
        if (E.app) E.app.classList.toggle('is-scrolled', on);
    }
    App.setScrolled = setScrolled;

    // Der FAB wird ueber eine Klasse bewegt, nicht ueber Inline-Styles.
    // So kollidiert er nicht mit den :hover/:active-Transforms.
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

    // Die Markierung der Fussnavigation gleitet auf die aktive Schaltflaeche.
    // Eine SOP gehoert zum Tab "SOPs" - dort bleibt die Markierung stehen.
    App.updateBottomNavPill = function() {
        if (!E.bottomNav) return;

        var pill = E.bottomNav.querySelector('.btm-nav-pill');
        if (!pill) return;

        var key = S.tab === 'sop' ? 'browse' : S.tab;
        var target = E.bottomNav.querySelector('.btm-btn[data-tab="' + key + '"]');
        if (!target || !target.offsetWidth) return;

        App.movePill(pill, target.offsetLeft, target.offsetWidth, pill.classList.contains('ready'));
        pill.classList.add('ready');
    };

    // ---------- Scrollmasse (Vorschlaege 5 und 50) ----------
    // scrollHeight und clientHeight in jedem Frame auszulesen zwingt
    // den Browser zu einem Layoutdurchlauf je Frame - genau die
    // Rechnung, die js/sop.js mit seinem Puffer bewusst vermeidet.
    // Die Werte aendern sich nur, wenn sich das Layout aendert; ein
    // ResizeObserver meldet das zuverlaessiger als ein resize-Ereignis
    // (er merkt auch Aufklappen, Schriftgroessenwechsel und die
    // eingeblendete Bildschirmtastatur).
    var scrollMetrics = { max: 0, dirty: true };

    App.invalidateScrollMetrics = function() {
        scrollMetrics.dirty = true;
    };

    function scrollMax() {
        if (!E.contentScroll) return 0;
        if (scrollMetrics.dirty) {
            scrollMetrics.max = E.contentScroll.scrollHeight - E.contentScroll.clientHeight;
            scrollMetrics.dirty = false;
        }
        return scrollMetrics.max;
    }
    App.scrollMax = scrollMax;

    var scrollObserver = null;

    App.initScrollObserver = function() {
        if (!window.ResizeObserver || !E.contentScroll) return;

        var invalidate = function() {
            App.invalidateScrollMetrics();
            App.invalidateSectionOffsets();
        };

        scrollObserver = new ResizeObserver(invalidate);
        scrollObserver.observe(E.contentScroll);
        if (E.viewContainer) scrollObserver.observe(E.viewContainer);
    };

    /** Zielansicht beobachten, damit Aufklappen sofort zaehlt. */
    App.observeView = function(el) {
        if (scrollObserver && el) {
            try { scrollObserver.observe(el); } catch (e) {}
        }
    };

    // Lesefortschritt der geoeffneten SOP als feine Linie unter der Kopfzeile
    function updateReadProgress(y) {
        var bar = E.readProgress;
        if (!bar) return;

        if (S.tab !== 'sop' || !E.contentScroll) {
            bar.classList.remove('show');
            return;
        }

        var max = scrollMax();
        if (max < 120) {
            bar.classList.remove('show');
            return;
        }

        bar.classList.add('show');
        var fill = bar.firstElementChild;
        if (fill) fill.style.transform = 'scaleX(' + Math.max(0, Math.min(1, y / max)) + ')';
    }
    App.updateReadProgress = updateReadProgress;

    // Aktuelle Ansicht neu aufbauen, ohne einen Verlaufseintrag zu erzeugen
    App.refreshCurrentView = function() {
        App.rHome();
        App.rSB();
        if (S.tab === 'browse') App.rBrowse();
        else if (S.tab === 'search') App.rSearch();
        else if (S.tab === 'sop') App.rSOP();
        else App.rNav();
        App.invalidateSectionOffsets();
        App.invalidateScrollMetrics();
    };

    /**
     * Wechsel zwischen Telefon-/Tablet- und Desktoplayout (Vorschlag 11).
     *
     * Bisher wurde dabei nur S.mob umgesetzt und uChrome() aufgerufen.
     * Die Ansichten selbst blieben in der Form stehen, in der sie
     * aufgebaut worden waren - ein gedrehtes Tablet behielt also die
     * Telefonentscheidungen, bis man die Ansicht wechselte. Sichtbar
     * wurde das an der Uebersicht, der Startseite und den Tabellen,
     * die unterhalb von 640 px als Karten laufen.
     */
    App.onBreakpointChange = function() {
        App.uChrome();
        App.rHome();
        App.rSB();

        if (S.tab === 'browse') App.rBrowse();
        else if (S.tab === 'search') App.rSearch();
        else if (S.tab === 'sop') App.relayoutSopTables();

        App.invalidateSectionOffsets();
        App.invalidateScrollMetrics();
        App.updateBottomNavPill();
        App.updateSegmentedPill(false);
        App.checkSegmentedScrollArrows();
    };

})(window.SOPApp);
