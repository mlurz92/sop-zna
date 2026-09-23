/* ============================================================
   router.js - Adresse, Verlauf, Vor- und Zurueck
   ------------------------------------------------------------
   Der Browser-Verlauf ist die einzige Quelle der Navigations-
   tiefe. Ein zusaetzlicher App-Stapel wuerde daneben herlaufen
   und beide Richtungen auseinanderdriften lassen.

   Jeder Eintrag traegt einen laufenden Index. Beim popstate-
   Ereignis zeigt der Vergleich mit dem aktuellen Index die
   Richtung an, sodass vorwaerts und rueckwaerts unterschiedlich
   animiert werden koennen.
   ============================================================ */
(function(App) {
    'use strict';

    var S = App.S;

    var ROUTE_LOCK = false;
    var routeIndex = 0;

    // ============================================
    // SCROLLPOSITION MERKEN (Vorschlag 4)
    // ============================================
    // Jeder Ansichtswechsel setzte die Scrollposition hart auf 0.
    // Wer sich in der 73 Eintraege langen Liste bis "Tumorlyse-
    // syndrom" gescrollt hatte, eine SOP oeffnete und zurueckging,
    // stand wieder ganz oben. Die Position wird deshalb je Adresse
    // gemerkt und beim Zurueckgehen wiederhergestellt.
    //
    // Das ist keine Verlaufsfunktion und keine Personalisierung:
    // nichts wird gespeichert, nichts ueberdauert das Schliessen
    // des Fensters.
    App.rememberScroll = function() {
        var scroller = App.E.contentScroll;
        if (!scroller) return;
        S.scrollMemory[hashForState()] = scroller.scrollTop;
    };

    App.recallScroll = function() {
        var value = S.scrollMemory[hashForState()];
        return typeof value === 'number' ? value : 0;
    };

    App.forgetScroll = function(key) {
        if (key === undefined) S.scrollMemory = {};
        else delete S.scrollMemory[key];
    };

    // Statuten stehen unter einer eigenen Adresse (#statut/...), laufen
    // aber durch dieselbe Ansicht wie die SOPs.
    function hashForState() {
        if (S.tab === 'sop' && S.sopId) {
            return (App.isDoc(App.findSop(S.sopId)) ? '#statut/' : '#sop/') + S.sopId;
        }
        if (S.tab === 'browse') return '#browse';
        if (S.tab === 'search') return '#search';
        return '#home';
    }
    App.hashForState = hashForState;

    App.syncRoute = function(replace) {
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
    };

    // Gibt es einen eigenen Verlaufseintrag, zu dem zurueckgegangen
    // werden kann? Bei einem Deep Link ist das nicht der Fall.
    function hasRouteHistory() {
        return routeIndex > 0;
    }
    App.hasRouteHistory = hasRouteHistory;

    // Wendet die aktuelle Adresse an, ohne einen neuen Eintrag zu erzeugen
    function applyRoute(mode) {
        var h = window.location.hash || '';
        var prefix = h.indexOf('#sop/') === 0 ? 5 : (h.indexOf('#statut/') === 0 ? 8 : 0);
        if (prefix) {
            var id;
            try { id = decodeURIComponent(h.substring(prefix)); }
            catch (e) { id = ''; }
            if (App.hasSop(id)) {
                S.sopId = id;
                App.sTab('sop', mode);
                return;
            }
        }
        S.sopId = null;
        if (h === '#browse') App.sTab('browse', mode);
        else if (h === '#search') App.sTab('search', mode);
        else App.sTab('home', mode);
    }
    App.applyRoute = applyRoute;

    App.onPopState = function(e) {
        if (ROUTE_LOCK) return;

        var idx = (e && e.state && typeof e.state.i === 'number') ? e.state.i : 0;
        var mode = idx < routeIndex ? 'pop' : 'push';
        routeIndex = idx;

        S.isNavigating = false;
        App.closeAllOverlays();
        App.finishActiveTransition();
        applyRoute(mode);
    };

    // Manuell geaenderte Adresse (Eingabezeile, externer Link).
    // popstate deckt Vor/Zurueck bereits ab - hier wird nur gehandelt,
    // wenn die Ansicht wirklich noch nicht zur Adresse passt.
    App.onHashChange = function() {
        if (ROUTE_LOCK) return;
        if (hashForState() === (window.location.hash || '#home')) return;

        S.isNavigating = false;
        App.finishActiveTransition();
        applyRoute('fade');
    };

    // ============================================
    // OEFFNEN UND ZURUECK
    // ============================================
    App.pushNav = function(newSopId, sectionIndex) {
        if (S.isNavigating) return;
        if (!newSopId) return;
        if (newSopId === S.sopId && S.tab === 'sop') return;

        S.isNavigating = true;
        S.sopId = newSopId;
        App.haptic('light');
        App.sTab('sop', 'push', function() {
            S.isNavigating = false;
            if (typeof sectionIndex === 'number' && sectionIndex >= 0) App.revealSection(sectionIndex);
        });
    };

    App.popNav = function() {
        if (S.isNavigating) return;

        // Gibt es einen eigenen Verlaufseintrag, uebernimmt der Browser.
        // Der popstate-Handler wendet die Zieladresse an und waehlt
        // anhand des Eintragsindex die Rueckwaerts-Animation.
        if (hasRouteHistory()) {
            App.haptic('light');
            history.back();
            return;
        }

        // Ohne Verlauf (Deep Link): sinnvolles Ziel aus der Ansicht ableiten
        if (S.tab === 'home') return;

        // Ein Statut kommt von der Startseite, ein Pfad aus der Uebersicht.
        var target = (S.tab === 'sop' && !App.isDoc(App.findSop(S.sopId))) ? 'browse' : 'home';

        S.isNavigating = true;
        S.sopId = null;
        App.haptic('light');

        App.sTab(target, 'pop', function() { S.isNavigating = false; });
    };

    App.goHome = function() {
        if (S.isNavigating) return;
        S.sopId = null;
        App.sTab('home', S.tab === 'home' ? null : 'pop');
    };

    // Kann die Wischgeste nach rechts etwas bewirken?
    App.canGoBack = function() {
        if (hasRouteHistory()) return true;
        return S.tab === 'sop' || S.tab === 'browse';
    };

})(window.SOPApp);
