/* ============================================================
   motion.js - Bewegungssteuerung
   ------------------------------------------------------------
   Alle Bewegungen laufen ueber transform/opacity/clip-path,
   werden per requestAnimationFrame getaktet und respektieren
   die Systemeinstellung "Bewegung reduzieren".
   ============================================================ */
(function(App) {
    'use strict';

    var E = App.E;

    var MOTION = {
        reduced: false,
        view: 360,        // Dauer eines Ansichtswechsels
        viewFast: 260,
        section: 320,     // Dauer des Auf-/Zuklappens
        micro: 180,
        staggerStep: 26,  // Verzoegerung je Listenelement
        staggerMax: 14,   // ... hoechstens fuer so viele Elemente
        staggerLimit: 18  // ... und ueberhaupt nur fuer so viele
    };
    App.MOTION = MOTION;

    function updateMotionPreference() {
        MOTION.reduced = !!(window.matchMedia &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    }

    App.initMotionPreference = function() {
        updateMotionPreference();
        if (!window.matchMedia) return;
        var mq = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (mq.addEventListener) mq.addEventListener('change', updateMotionPreference);
        else if (mq.addListener) mq.addListener(updateMotionPreference);
    };

    var raf = function(fn) {
        if (window.requestAnimationFrame) return window.requestAnimationFrame(fn);
        return setTimeout(fn, 16);
    };
    App.raf = raf;

    // Zwei Frames warten: Frame 1 legt den Startzustand fest,
    // Frame 2 startet die Transition zuverlaessig.
    App.nextFrame = function(fn) {
        raf(function() { raf(fn); });
    };

    App.reflow = function(el) {
        return el ? el.offsetHeight : 0;
    };

    // Wartet auf das Ende einer Animation/Transition, mit Zeitlimit als
    // Sicherheitsnetz (falls das Ereignis z.B. im Hintergrund-Tab ausbleibt).
    App.afterMotion = function(el, eventName, duration, done) {
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
    };

    // ---------- Weiches Scrollen ----------
    var scrollAnimId = null;

    App.stopSmoothScroll = function() {
        if (scrollAnimId && window.cancelAnimationFrame) {
            window.cancelAnimationFrame(scrollAnimId);
        }
        scrollAnimId = null;
    };

    App.smoothScrollTo = function(container, targetTop, duration) {
        if (!container) return;
        App.stopSmoothScroll();

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
            container.scrollTop = from + delta * App.easeOutExpo(t);
            if (t < 1) scrollAnimId = window.requestAnimationFrame(step);
            else scrollAnimId = null;
        }

        scrollAnimId = window.requestAnimationFrame(step);
    };

    // Element an den oberen Rand holen, mit Platz fuer die
    // angeheftete Kapitelleiste.
    App.scrollElementIntoView = function(el, offset) {
        if (!el || !E.contentScroll) return;
        var pad = (offset === undefined) ? App.stickyOffset() + 12 : offset;
        App.smoothScrollTo(E.contentScroll, el.offsetTop - pad);
    };

    // Gestaffelter Auftritt. Zwei Deckel halten den Aufwand klein:
    // die Verzoegerung waechst nur bis staggerMax, und ueberhaupt
    // animiert werden nur die Elemente, die anfangs sichtbar sein
    // koennen. Bei 73 Eintraegen sparte das 57 Animationen samt
    // Ereignis-Listenern - genau die Arbeit, die den ersten Frame
    // eines Ansichtswechsels kostete.
    App.applyStagger = function(nodes, cls) {
        if (!nodes || !nodes.length) return;
        if (MOTION.reduced) return;

        var klass = cls || 'stagger-item';
        var count = Math.min(nodes.length, MOTION.staggerLimit);
        var timeout = 500 + MOTION.staggerMax * MOTION.staggerStep;

        for (var i = 0; i < count; i++) {
            var node = nodes[i];
            var delay = Math.min(i, MOTION.staggerMax) * MOTION.staggerStep;
            node.style.setProperty('--stagger', delay + 'ms');
            node.classList.add(klass);
            (function(n, k) {
                App.afterMotion(n, 'animationend', timeout, function() {
                    n.classList.remove(k);
                    n.style.removeProperty('--stagger');
                });
            })(node, klass);
        }
    };

    // ---------- Tipp-Rueckmeldung ("Ripple") ----------
    var RIPPLE_SELECTOR = '.cat-card, .browse-item, .search-result, .btm-btn,' +
        ' .picker-list li, .spotlight-result, .sidebar-nav a, .browse-cat-chip,' +
        ' .sidebar-cat-chip, .segmented-btn, .dir-row';

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

        App.afterMotion(span, 'animationend', 620, function() {
            if (span.parentNode) span.parentNode.removeChild(span);
        });
    }

    var pressedHost = null;

    App.initRipples = function() {
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
    };

})(window.SOPApp);
