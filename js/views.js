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
    App.clearViewMotion = clearViewMotion;

    App.finishActiveTransition = function() {
        if (activeTransition) {
            var t = activeTransition;
            activeTransition = null;
            t();
        }
    };

    // mode: 'push' | 'pop' | 'fade' | null (sofortiger Wechsel)
    function switchView(fromView, toView, mode, done) {
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
        fromView.classList.add('is-anim', 'is-leaving', 'anim-out-' + mode);

        toView.classList.add('active', 'is-anim', 'anim-in-' + mode);

        if (scroller) scroller.scrollTop = 0;

        activeTransition = App.afterMotion(toView, 'animationend', MOTION.view, function() {
            clearViewMotion(fromView);
            clearViewMotion(toView);
            if (scroller) scroller.classList.remove('is-transitioning');
            activeTransition = null;
            if (done) done();
        });
    }
    App.switchView = switchView;

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

        // 3) Ansicht wechseln
        var effectiveMode = mode;
        if (!effectiveMode && changed) effectiveMode = 'fade';

        switchView(fromView, toView, effectiveMode, function() {
            if (t === 'sop') {
                App.invalidateSectionOffsets();
                App.updateSegmentedPill(false);
                App.checkSegmentedScrollArrows();
            }
            App.uSticky(0);
            // Beim Zurueckgehen nicht in das Suchfeld springen -
            // sonst faehrt auf dem Telefon jedes Mal die Tastatur auf.
            if (t === 'search' && E.searchViewInput && effectiveMode !== 'pop') {
                E.searchViewInput.focus();
            }
            if (done) done();
        });

        App.rNav();

        // 4) Adresse angleichen: nur das Oeffnen einer SOP legt einen
        //    Verlaufseintrag an; Zurueckgehen und Tabwechsel ersetzen ihn.
        App.syncRoute(!(t === 'sop' && mode === 'push'));
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
                var isAct = bns[i].getAttribute('data-tab') === t;
                bns[i].classList.toggle('active', isAct);
                bns[i].setAttribute('aria-current', isAct ? 'page' : 'false');
            }
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
            if (E.desktopTocBtn) E.desktopTocBtn.style.display = '';
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
        lastScrollY = y;
    }

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

    // Aktuelle Ansicht neu aufbauen, ohne einen Verlaufseintrag zu erzeugen
    App.refreshCurrentView = function() {
        App.rHome();
        App.rSB();
        if (S.tab === 'browse') App.rBrowse();
        else if (S.tab === 'search') App.rSearch();
        else if (S.tab === 'sop') App.rSOP();
        else App.rNav();
        App.invalidateSectionOffsets();
    };

})(window.SOPApp);
