/* ============================================================
   platform.js - Erscheinungsbild und Laufzeitumgebung
   ------------------------------------------------------------
   Zugangssperre, Theme, Schriftgroesse, Safe-Area, Offline-
   Anzeige und der stille Versionswechsel.
   ============================================================ */
(function(App) {
    'use strict';

    var S = App.S;
    var E = App.E;
    var FS = App.FS;

    // ============================================
    // ZUGANGSSPERRE
    // ============================================
    // Beim ersten Oeffnen liegt die Anwendung unscharf hinter einer
    // Passwortabfrage. Die Klasse gate-locked setzt bereits das
    // Inline-Skript im <head> - vor dem ersten Bild.
    //
    // Das ist eine Zugangshuerde, kein Schutz: die Seite ist statisch,
    // wer den Quelltext liest, kommt an die Inhalte. Im Quelltext steht
    // deshalb nur eine Pruefsumme des Passworts, nicht das Passwort.
    //
    // Mit Haken:  localStorage 'sop-gate-until' = Ablaufzeitpunkt (30 Tage)
    // Ohne Haken: sessionStorage 'sop-gate'      = bis der Tab schliesst
    var GATE_HASH = 'df78bc7c';     // FNV-1a (32 Bit) des Passworts
    var GATE_DAYS = 30;

    function gateHash(s) {
        var h = 0x811c9dc5;
        for (var i = 0; i < s.length; i++) {
            h ^= s.charCodeAt(i);
            h = (h + (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24)) >>> 0;
        }
        return h.toString(16);
    }

    App.gateLocked = function() {
        return document.documentElement.classList.contains('gate-locked');
    };

    // Alles ausser der Sperre ist fuer Tastatur und Hilfstechnologien
    // unerreichbar, solange gesperrt ist.
    function setGateInert(on) {
        var kids = document.body.children;
        for (var i = 0; i < kids.length; i++) {
            if (kids[i].id === 'gate' || kids[i].tagName === 'SCRIPT') continue;
            if (on) kids[i].setAttribute('inert', '');
            else kids[i].removeAttribute('inert');
        }
    }

    App.initGate = function() {
        var gate = document.getElementById('gate');
        if (!gate) return;

        if (!App.gateLocked()) {
            gate.parentNode.removeChild(gate);
            return;
        }

        var form = document.getElementById('gateForm');
        var input = document.getElementById('gateInput');
        var remember = document.getElementById('gateRemember');
        var error = document.getElementById('gateError');

        setGateInert(true);
        setTimeout(function() { input.focus(); }, 60);

        input.addEventListener('input', function() {
            error.textContent = '';
            input.removeAttribute('aria-invalid');
        });

        form.addEventListener('submit', function(e) {
            e.preventDefault();

            if (gateHash(input.value.trim()) !== GATE_HASH) {
                error.textContent = 'Das Passwort ist nicht korrekt.';
                input.setAttribute('aria-invalid', 'true');
                input.select();
                gate.classList.remove('gate-shake');
                void gate.offsetWidth;
                gate.classList.add('gate-shake');
                if (App.haptic) App.haptic('heavy');
                return;
            }

            try {
                sessionStorage.setItem('sop-gate', '1');
                if (remember.checked) {
                    localStorage.setItem('sop-gate-until',
                        String(Date.now() + GATE_DAYS * 24 * 60 * 60 * 1000));
                }
            } catch (err) {}

            input.value = '';
            input.blur();
            setGateInert(false);
            document.documentElement.classList.remove('gate-locked');
            gate.parentNode.removeChild(gate);
        });
    };

    // ============================================
    // THEME
    // ============================================
    App.loadTheme = function() {
        var v = null;
        try { v = localStorage.getItem('sop-theme'); } catch (e) {}
        if (v === 'dark' || v === 'light') S.theme = v;
        else if (window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches) {
            S.theme = 'dark';
        }
    };

    App.applyTheme = function() {
        document.documentElement.setAttribute('data-theme', S.theme);
        try { localStorage.setItem('sop-theme', S.theme); } catch (e) {}

        var dk = S.theme === 'dark';
        var icon = dk ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
        var label = dk ? 'Light Mode einschalten' : 'Dark Mode einschalten';

        if (E.themeToggleIcon) E.themeToggleIcon.className = icon;
        if (E.themeToggleMobileIcon) E.themeToggleMobileIcon.className = icon;
        if (E.themeToggleLabel) E.themeToggleLabel.textContent = dk ? 'Light Mode' : 'Dark Mode';
        if (E.themeToggle) E.themeToggle.setAttribute('aria-label', label);
        if (E.themeToggleMobile) E.themeToggleMobile.setAttribute('aria-label', label);
        if (E.metaThemeColor) E.metaThemeColor.setAttribute('content', dk ? '#1e293b' : '#ffffff');
    };

    // Weicher Theme-Wechsel: wo die View Transition API verfuegbar ist,
    // faehrt der neue Zustand als Kreis vom ausloesenden Knopf auf. Der
    // Zustandswechsel selbst ist davon unabhaengig abgesichert - die API
    // ueberspringt ihren Rueckruf in manchen Umgebungen, und dann bliebe
    // das Theme sonst haengen.
    App.toggleTheme = function(originEl) {
        var next = S.theme === 'dark' ? 'light' : 'dark';
        var applied = false;

        function apply() {
            if (applied) return;
            applied = true;
            S.theme = next;
            App.applyTheme();
        }

        App.haptic('light');

        var canAnimate = !App.MOTION.reduced &&
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

        // Sicherheitsnetz: kommt der Rueckruf nicht zum Zuge,
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
    };

    // ============================================
    // SCHRIFTGROESSE
    // ============================================
    App.loadFontSize = function() {
        var v = NaN;
        try { v = parseInt(localStorage.getItem('sop-fontsize'), 10); } catch (e) {}
        if (v >= FS.min && v <= FS.max) S.fs = v;
    };

    App.applyFontSize = function() {
        document.documentElement.style.setProperty('--font-base', S.fs + 'px');
        try { localStorage.setItem('sop-fontsize', S.fs); } catch (e) {}

        if (E.fontIndicatorDesktop) E.fontIndicatorDesktop.textContent = S.fs;
        if (E.fontIndicatorMobile) E.fontIndicatorMobile.textContent = S.fs;

        // Schaltflaechen abschalten, sobald die Grenze erreicht ist
        var atMin = S.fs <= FS.min;
        var atMax = S.fs >= FS.max;
        if (E.fontDecDesktop) E.fontDecDesktop.disabled = atMin;
        if (E.fontDecMobile) E.fontDecMobile.disabled = atMin;
        if (E.fontIncDesktop) E.fontIncDesktop.disabled = atMax;
        if (E.fontIncMobile) E.fontIncMobile.disabled = atMax;

        // Hoehen aendern sich - gepufferte Positionen verwerfen
        App.invalidateSectionOffsets();
    };

    App.changeFontSize = function(d) {
        var next = Math.max(FS.min, Math.min(FS.max, S.fs + d));
        if (next === S.fs) return;
        S.fs = next;
        App.applyFontSize();
        App.haptic('light');
    };

    // ============================================
    // OFFLINE-ANZEIGE
    // ============================================
    // S.ts wurde bisher ausschliesslich im offline-Ereignis gesetzt.
    // Startete die Anwendung bereits ohne Netz, stand der Hinweis
    // damit ohne Zeitangabe da (Vorschlag 6). Der Zeitpunkt wird
    // deshalb beim ersten Erkennen gesetzt - egal woher es kommt.
    App.setOffline = function(off) {
        var was = S.off;
        S.off = !!off;
        if (S.off && !was) S.ts = new Date();
        if (!S.off) S.ts = null;
        App.updateOffline();
    };

    App.updateOffline = function() {
        if (!E.offlineBanner) return;
        E.offlineBanner.classList.toggle('show', S.off);
        if (!E.offlineTimestamp) return;
        E.offlineTimestamp.textContent = (S.off && S.ts)
            ? '(seit ' + S.ts.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }) + ' Uhr)'
            : '';
    };

    // ============================================
    // SAFE AREA
    // ============================================
    // env(safe-area-inset-bottom) liefert im iOS-Standalone-Modus 0px.
    // Der tatsaechliche Wert wird deshalb zur Laufzeit ermittelt und als
    // CSS-Variable gesetzt - niemals als Inline-Style am Element.

    var SAFE_AREA = { bottom: 0, isPWA: false, isIOS: false };
    App.SAFE_AREA = SAFE_AREA;

    function detectRuntimeEnvironment() {
        var isStandalone = !!(window.matchMedia &&
            window.matchMedia('(display-mode: standalone)').matches);
        var isIOSStandalone = window.navigator.standalone === true;
        var isAndroidWebApp = document.referrer.indexOf('android-app://') === 0;

        SAFE_AREA.isPWA = isStandalone || isIOSStandalone || isAndroidWebApp;
        SAFE_AREA.isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
        return SAFE_AREA.isPWA;
    }

    // Steht die Bildschirmtastatur offen? Dann sind alle Messwerte
    // verfaelscht und eine Neumessung wuerde das Layout springen lassen.
    function keyboardLikelyOpen() {
        var el = document.activeElement;
        if (el && /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName)) return true;
        if (window.visualViewport && window.innerHeight - window.visualViewport.height > 140) return true;
        return false;
    }

    function measureSafeArea() {
        var measured = 0;
        var i;

        // 1) Bekannte iOS-Bildschirmhoehen (zuverlaessigster Weg im PWA-Modus)
        if (SAFE_AREA.isIOS && SAFE_AREA.isPWA) {
            var screenH = window.screen.height;
            var withNotch = [812, 844, 852, 874, 896, 926, 932, 956];
            for (i = 0; i < withNotch.length; i++) {
                if (screenH >= withNotch[i] - 5 && screenH <= withNotch[i] + 5) {
                    measured = 34;
                    break;
                }
            }
            if (measured === 0 && screenH >= 1024 && /iPad/.test(navigator.userAgent)) {
                measured = 20;
            }
        }

        // 2) Testelement mit env() - in normalen Browsern der richtige Weg
        if (measured === 0) {
            var testEl = document.createElement('div');
            testEl.style.cssText = 'position:fixed;bottom:0;left:0;width:1px;height:0;' +
                'padding-bottom:env(safe-area-inset-bottom,0);visibility:hidden;pointer-events:none;';
            document.body.appendChild(testEl);
            var envValue = parseInt(getComputedStyle(testEl).paddingBottom, 10) || 0;
            document.body.removeChild(testEl);
            if (envValue > 0) measured = envValue;
        }

        // 3) Fensterdifferenz - nur im PWA-Modus und nur bei ruhendem Layout.
        //    Im Browser misst das die Adressleiste, nicht die Safe Area.
        if (measured === 0 && SAFE_AREA.isPWA && !keyboardLikelyOpen()) {
            var diff = window.screen.height - window.innerHeight;
            if (SAFE_AREA.isIOS && diff >= 34 && diff < 150) measured = 34;
            else if (diff >= 20 && diff < 50) measured = diff;
        }

        SAFE_AREA.bottom = measured;
        return measured;
    }

    function applySafeAreaCSS() {
        var sab = SAFE_AREA.bottom;
        document.documentElement.style.setProperty('--sab-js', sab + 'px');
        document.documentElement.classList.toggle('safe-area-detected', sab > 0);
    }

    function remeasure() {
        if (keyboardLikelyOpen()) return;
        measureSafeArea();
        applySafeAreaCSS();
    }

    App.initSafeArea = function() {
        detectRuntimeEnvironment();
        measureSafeArea();
        applySafeAreaCSS();

        window.addEventListener('orientationchange', function() {
            setTimeout(remeasure, 120);
        });

        window.addEventListener('resize', App.debounce(remeasure, 180));

        if (window.visualViewport) {
            window.visualViewport.addEventListener('resize', App.debounce(remeasure, 180));
        }
    };

    // ============================================
    // STILLER VERSIONSWECHSEL
    // ============================================
    // Weicht die Serverversion von der geladenen ab, werden die Caches
    // verworfen und die Seite genau einmal neu geladen - ohne Banner.
    App.checkForUpdate = function() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'version.json?_=' + new Date().getTime(), true);
        xhr.setRequestHeader('Cache-Control', 'no-cache');
        xhr.onreadystatechange = function() {
            if (xhr.readyState !== 4 || xhr.status !== 200) return;
            try {
                var serverData = JSON.parse(xhr.responseText);
                var serverVersion = serverData.version || App.VERSION;
                if (serverVersion === App.VERSION) {
                    try { localStorage.setItem('sop-app-version', serverVersion); } catch (e) {}
                    return;
                }
                applyUpdate(serverVersion);
            } catch (e) {
                // Kein Netz oder unerwartete Antwort: die App laeuft weiter.
            }
        };
        xhr.onerror = function() {};
        xhr.send();
    };

    function applyUpdate(serverVersion) {
        // Reload-Schleife verhindern: pro Version nur ein Neuladeversuch
        var guardKey = 'sop-reload-for';
        var already = null;
        try { already = sessionStorage.getItem(guardKey); } catch (e) {}
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
                return Promise.all(names.map(function(n) { return caches['delete'](n); }));
            }).then(reload, reload);
        } else {
            reload();
        }
    }

})(window.SOPApp);
