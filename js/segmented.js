/* ============================================================
   segmented.js - Angeheftete Kapitelleiste einer SOP
   ------------------------------------------------------------
   Die Leiste filtert die Abschnitte ("Alle" oder ein Kapitel).
   Sie ist eine Werkzeugleiste, kein Registerkartensatz: die
   Abschnitte bleiben untereinander lesbar, es wird lediglich
   auf- und zugeklappt.

   Ausgeloest wird ausschliesslich ueber click - das deckt Maus,
   Tippen, Tastatur und Hilfstechnologien gleichermassen ab.
   Die Pointer-Ereignisse dienen nur der Unterscheidung
   "Tippen" gegen "Wischen zum Scrollen der Leiste".
   ============================================================ */
(function(App) {
    'use strict';

    var E = App.E;

    var segTouchState = { startX: 0, startY: 0, targetBtn: null };

    // ============================================
    // AUFBAU
    // ============================================
    // Gebaut wird aus den METADATEN, nicht aus den Abschnittsinhalten.
    // Die Kapiteltitel liegen ab dem ersten Bild vor; das Paket mit dem
    // Text kommt erst danach (Vorschlag 17). Dadurch steht die Leiste
    // sofort, das Layout springt beim Eintreffen des Inhalts nicht, und
    // die Meldung im Ladezustand ("Die Kapitelübersicht steht bereits")
    // stimmt auch.
    App.renderSegmentedControl = function(sopData) {
        if (!sopData) return '';

        var titles = sopData.secTitles ||
            (sopData.sections || []).map(function(sec) { return sec.title; });
        if (!titles.length) return '';

        // Aussenrahmen bleibt beim Scrollen am oberen Rand stehen
        var html = '<div class="sop-seg-sticky">' +
            '<div class="segmented-control-wrapper">' +
            '<button type="button" class="segmented-scroll-arrow segmented-scroll-left" aria-label="Kapitelleiste nach links scrollen" tabindex="-1">' +
            '<i class="fa-solid fa-chevron-left" aria-hidden="true"></i></button>' +
            '<div class="segmented-control" role="toolbar" aria-label="Kapitel der SOP" aria-orientation="horizontal">' +
            '<span class="segmented-pill" aria-hidden="true"></span>' +
            '<button type="button" class="segmented-btn" data-seg="all" aria-pressed="false" title="Alle Abschnitte aufklappen">' +
            '<i class="fa-solid fa-list" aria-hidden="true"></i> <span class="btn-text">Alle</span></button>';

        // Alle Abschnitte - die Leiste selbst ist waagerecht scrollbar.
        // Die Kuerzung des Titels uebernimmt CSS (Ellipsis).
        for (var i = 0; i < titles.length; i++) {
            var title = titles[i] || ('Abschnitt ' + (i + 1));
            var icon = App.secIconOf(sopData, i);

            html += '<button type="button" class="segmented-btn" data-seg="' + i + '" aria-pressed="false"' +
                ' title="' + App.escAttr(title) + '">' +
                '<i class="fa-solid ' + icon + '" aria-hidden="true"></i> ' +
                '<span class="btn-text">' + App.esc(title) + '</span></button>';
        }

        if (sopData.hasSources || sopData.sources) {
            html += '<button type="button" class="segmented-btn" data-seg="sources" aria-pressed="false" title="Quellen">' +
                '<i class="fa-solid fa-quote-right" aria-hidden="true"></i> ' +
                '<span class="btn-text">Quellen</span></button>';
        }

        html += '</div>' +
            '<button type="button" class="segmented-scroll-arrow segmented-scroll-right" aria-label="Kapitelleiste nach rechts scrollen" tabindex="-1">' +
            '<i class="fa-solid fa-chevron-right" aria-hidden="true"></i></button>' +
            '</div></div>';

        return html;
    };

    // ============================================
    // GLEITENDE MARKIERUNG
    // ============================================
    // Reines transform/width - laeuft auf dem Compositor.
    App.updateSegmentedPill = function(animate) {
        var control = E.viewSOP ? E.viewSOP.querySelector('.segmented-control') : null;
        if (!control) return;

        var pill = control.querySelector('.segmented-pill');
        var active = control.querySelector('.segmented-btn.active');

        if (!pill) return;

        // Ohne getroffene Auswahl bleibt die Markierung aus: sie wuerde
        // sonst eine Auswahl behaupten, die es nicht gibt.
        if (!active) {
            pill.classList.remove('ready');
            control.classList.remove('has-pill');
            pill.removeAttribute('data-left');
            pill.removeAttribute('data-width');
            return;
        }

        App.movePill(pill, active.offsetLeft, active.offsetWidth, animate);
        pill.classList.add('ready');
        control.classList.add('has-pill');
    };

    // Aktive Schaltflaeche in den sichtbaren Bereich holen
    function revealSegmentedButton(btn) {
        var control = btn ? btn.parentNode : null;
        if (!control || control.scrollWidth <= control.clientWidth) return;

        var target = btn.offsetLeft - (control.clientWidth - btn.offsetWidth) / 2;
        target = Math.max(0, Math.min(target, control.scrollWidth - control.clientWidth));

        if (App.MOTION.reduced || !control.scrollTo) {
            control.scrollLeft = target;
            return;
        }
        control.scrollTo({ left: target, behavior: 'smooth' });
    }
    App.revealSegmentedButton = revealSegmentedButton;

    // Nur holen, wenn die Schaltflaeche wirklich ausserhalb liegt -
    // sonst wandert die Leiste beim Scrollen unter dem Finger weg.
    App.revealSegmentedButtonIfHidden = function(btn) {
        var control = btn ? btn.parentNode : null;
        if (!control || control.scrollWidth <= control.clientWidth + 2) return;

        var left = btn.offsetLeft;
        var right = left + btn.offsetWidth;
        if (left >= control.scrollLeft && right <= control.scrollLeft + control.clientWidth) return;

        revealSegmentedButton(btn);
    };

    // ============================================
    // AUSWAHL
    // ============================================
    App.setSegmentedActive = function(segIndex) {
        if (!E.viewSOP) return null;

        var buttons = E.viewSOP.querySelectorAll('.segmented-btn');
        var activeBtn = null;

        for (var i = 0; i < buttons.length; i++) {
            var isTarget = segIndex !== null && buttons[i].getAttribute('data-seg') === String(segIndex);
            buttons[i].classList.toggle('active', isTarget);
            buttons[i].setAttribute('aria-pressed', isTarget ? 'true' : 'false');
            if (isTarget) activeBtn = buttons[i];
        }

        App.updateSegmentedPill(true);
        return activeBtn;
    };

    function handleSegmentedClick(segIndex) {
        if (!E.viewSOP) return;

        App.haptic('light');

        var activeBtn = App.setSegmentedActive(segIndex);
        if (activeBtn) revealSegmentedButton(activeBtn);

        var sections = E.viewSOP.querySelectorAll('.sop-section');
        var i;

        if (segIndex === 'all') {
            for (i = 0; i < sections.length; i++) App.setSectionOpen(sections[i], true, true);
            App.invalidateSectionOffsets();
            // Nach oben, damit der Anfang der SOP sichtbar wird
            App.smoothScrollTo(E.contentScroll, 0);
            return;
        }

        var targetSection = E.viewSOP.querySelector('.sop-section[data-sec="' + segIndex + '"]');

        for (i = 0; i < sections.length; i++) {
            App.setSectionOpen(sections[i], sections[i] === targetSection, true);
        }

        App.invalidateSectionOffsets();

        if (targetSection) {
            // Erst nach dem Aufklappen scrollen, sonst zielt der Scroll
            // auf eine Position, die es gleich nicht mehr gibt.
            setTimeout(function() {
                App.invalidateSectionOffsets();
                App.scrollElementIntoView(targetSection);
            }, App.MOTION.reduced ? 0 : Math.round(App.MOTION.section * 0.55));
        }
    }
    App.handleSegmentedClick = handleSegmentedClick;

    App.bindSegmentedButton = function(btn, segIndex) {
        var dragged = false;
        var slop = App.GESTURE.segTapSlop;

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
            if (Math.abs(e.clientX - segTouchState.startX) > slop ||
                Math.abs(e.clientY - segTouchState.startY) > slop) {
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
            handleSegmentedClick(segIndex);
        });
    };

    // ============================================
    // TASTATURBEDIENUNG
    // ============================================
    App.initSegmentedKeyboardNav = function(container) {
        if (!container) return;

        container.addEventListener('keydown', function(e) {
            var btns = container.querySelectorAll('.segmented-btn');
            if (!btns.length) return;

            var currentIndex = -1;
            for (var j = 0; j < btns.length; j++) {
                if (btns[j] === e.target) { currentIndex = j; break; }
            }
            if (currentIndex === -1) return;

            var nextIndex = -1;

            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                nextIndex = (currentIndex + 1) % btns.length;
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                nextIndex = (currentIndex - 1 + btns.length) % btns.length;
            } else if (e.key === 'Home') {
                nextIndex = 0;
            } else if (e.key === 'End') {
                nextIndex = btns.length - 1;
            } else {
                // Enter und Leertaste loesen bei <button> nativ ein click aus
                return;
            }

            e.preventDefault();
            btns[nextIndex].focus();
            revealSegmentedButton(btns[nextIndex]);
        });
    };

    // ============================================
    // SCROLL-PFEILE
    // ============================================
    App.checkSegmentedScrollArrows = function() {
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

        wrapper.classList.toggle('has-overflow-left', canScrollLeft);
        wrapper.classList.toggle('has-overflow-right', canScrollRight);

        leftArrow.classList.toggle('is-available', canScrollLeft);
        rightArrow.classList.toggle('is-available', canScrollRight);
        leftArrow.disabled = !canScrollLeft;
        rightArrow.disabled = !canScrollRight;
    };

    function scrollSegmented(direction) {
        var control = E.viewSOP ? E.viewSOP.querySelector('.segmented-control') : null;
        if (!control) return;

        var amount = Math.max(120, Math.round(control.clientWidth * 0.7));
        var target = control.scrollLeft + (direction === 'left' ? -amount : amount);

        if (App.MOTION.reduced || !control.scrollTo) control.scrollLeft = target;
        else control.scrollTo({ left: target, behavior: 'smooth' });

        App.haptic('light');
    }

    // Wird bei jedem SOP-Aufbau erneut aufgerufen - der globale
    // resize-Listener darf deshalb nur ein einziges Mal entstehen.
    var segmentedResizeBound = false;

    App.initSegmentedScrollArrows = function() {
        var wrapper = E.viewSOP ? E.viewSOP.querySelector('.segmented-control-wrapper') : null;
        if (!wrapper) return;

        var control = wrapper.querySelector('.segmented-control');
        if (!control) return;

        var leftArrow = wrapper.querySelector('.segmented-scroll-left');
        var rightArrow = wrapper.querySelector('.segmented-scroll-right');

        control.addEventListener('scroll', App.throttle(App.checkSegmentedScrollArrows, 60), { passive: true });

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
        App.nextFrame(function() {
            App.checkSegmentedScrollArrows();
            App.updateSegmentedPill(false);
        });

        if (!segmentedResizeBound) {
            segmentedResizeBound = true;
            window.addEventListener('resize', App.debounce(function() {
                App.checkSegmentedScrollArrows();
                App.updateSegmentedPill(false);
            }, 150));
        }
    };

})(window.SOPApp);
