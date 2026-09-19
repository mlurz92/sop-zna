/* ============================================================
   sop.js - Einzelansicht einer SOP
   ------------------------------------------------------------
   Aufbau der Ansicht, animiertes Auf- und Zuklappen der
   Abschnitte, gepufferte Abschnittspositionen und der
   Scroll-Spy der angehefteten Kapitelleiste.

   Der fachliche Inhalt der SOP wird unveraendert uebernommen.
   ============================================================ */
(function(App) {
    'use strict';

    var S = App.S;
    var E = App.E;

    // ============================================
    // AKKORDEON
    // ============================================
    function sectionBody(section) {
        return section ? section.querySelector('.sop-section-body') : null;
    }

    App.isSectionOpen = function(section) {
        var body = sectionBody(section);
        return !!(body && body.classList.contains('open'));
    };

    // Zustand, auf den ein Abschnitt gerade zulaeuft. Waehrend der
    // Hoehenanimation traegt der Inhalt noch die alte Klasse - wer die
    // Auswahl abgleicht, braucht aber das Ziel, nicht den Zwischenstand.
    function isSectionTargetOpen(section) {
        return !!(section && section.classList.contains('is-open'));
    }
    App.isSectionTargetOpen = isSectionTargetOpen;

    function finishSectionAnimation(body) {
        if (body._motionStop) {
            body._motionStop();
            body._motionStop = null;
        }
    }

    App.setSectionOpen = function(section, open, animate) {
        var body = sectionBody(section);
        if (!section || !body) return;

        var head = section.querySelector('.sop-section-head');
        var toggle = section.querySelector('.sec-toggle');

        if (head) head.setAttribute('aria-expanded', open ? 'true' : 'false');
        if (toggle) toggle.classList.toggle('open', open);
        section.classList.toggle('is-open', open);

        finishSectionAnimation(body);
        var alreadyOpen = body.classList.contains('open');

        if (!animate || App.MOTION.reduced) {
            body.classList.toggle('open', open);
            body.classList.remove('is-animating');
            body.style.height = '';
            body.style.opacity = '';
            body.style.transition = '';
            return;
        }

        if (alreadyOpen === open) {
            body.classList.remove('is-animating');
            body.style.height = '';
            body.style.opacity = '';
            body.style.transition = '';
            return;
        }

        var dur = App.MOTION.section;
        var trans = 'height ' + dur + 'ms cubic-bezier(0.16, 1, 0.3, 1), opacity ' +
            Math.round(dur * 0.8) + 'ms ease';

        if (open) {
            body.classList.add('open', 'is-animating');
            body.style.transition = 'none';
            body.style.height = 'auto';
            var target = body.scrollHeight;
            body.style.height = '0px';
            body.style.opacity = '0';
            App.reflow(body);
            body.style.transition = trans;
            body.style.height = target + 'px';
            body.style.opacity = '1';
        } else {
            body.classList.add('is-animating');
            body.style.transition = 'none';
            body.style.height = body.scrollHeight + 'px';
            body.style.opacity = '1';
            App.reflow(body);
            body.style.transition = trans;
            body.style.height = '0px';
            body.style.opacity = '0';
        }

        body._motionStop = App.afterMotion(body, 'transitionend', dur, function() {
            body._motionStop = null;
            body.classList.remove('is-animating');
            body.classList.toggle('open', open);
            body.style.height = '';
            body.style.opacity = '';
            body.style.transition = '';
            App.invalidateSectionOffsets();
        });
    };

    App.toggleSection = function(section) {
        App.setSectionOpen(section, !App.isSectionTargetOpen(section), true);
        App.invalidateSectionOffsets();
        // Die Auswahl in der Kapitelleiste stimmt nach dem Handgriff
        // nicht mehr - sie wird zurueckgenommen statt falsch zu bleiben.
        syncSegmentedWithSections();
    };

    // "Alle" nur markieren, wenn wirklich alle Abschnitte offen stehen;
    // ein einzelnes Kapitel nur, wenn es als einziges offen ist.
    function syncSegmentedWithSections() {
        if (!E.viewSOP) return;

        var sections = E.viewSOP.querySelectorAll('.sop-section');
        if (!sections.length) return;

        var openCount = 0;
        var lastOpen = null;

        for (var i = 0; i < sections.length; i++) {
            if (isSectionTargetOpen(sections[i])) {
                openCount++;
                lastOpen = sections[i];
            }
        }

        if (openCount === sections.length) App.setSegmentedActive('all');
        else if (openCount === 1 && lastOpen) App.setSegmentedActive(lastOpen.getAttribute('data-sec'));
        else App.setSegmentedActive(null);
    }
    App.syncSegmentedWithSections = syncSegmentedWithSections;

    // ============================================
    // ABSCHNITTS-POSITIONEN (Puffer)
    // ============================================
    // uSticky() las frueher bei jedem Scroll-Ereignis offsetTop aller
    // Abschnitte aus und erzwang damit ein Layout pro Frame.
    var SEC_CACHE = { list: [], dirty: true, stickyHeight: 0, stickyTop: 0 };

    App.invalidateSectionOffsets = function() {
        SEC_CACHE.dirty = true;
    };

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
                out.push({
                    el: secs[i],
                    top: secs[i].offsetTop,
                    idx: secs[i].getAttribute('data-sec') || ''
                });
            }
        }

        SEC_CACHE.list = out;
        SEC_CACHE.dirty = false;
        return out;
    }
    App.sectionOffsets = sectionOffsets;

    // ============================================
    // SCROLL-SPY DER KAPITELLEISTE
    // ============================================
    var segSpyIdx = null;
    var segStuck = false;

    // Hoehe der angehefteten Leiste - Sprungziele muessen darunter landen.
    App.stickyOffset = function() {
        if (S.tab !== 'sop') return 0;
        sectionOffsets();
        return SEC_CACHE.stickyHeight;
    };

    App.uSticky = function(y) {
        if (S.tab !== 'sop') {
            segSpyIdx = null;
            segStuck = false;
            return;
        }

        var sticky = E.viewSOP ? E.viewSOP.querySelector('.sop-seg-sticky') : null;
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

        // Das Inhaltsverzeichnis folgt derselben Quelle - ein zweiter
        // Beobachter dafuer ist nicht noetig.
        if (E.sectionPickerList) {
            var lis = E.sectionPickerList.querySelectorAll('li');
            for (var m = 0; m < lis.length; m++) {
                lis[m].classList.toggle('active', idx !== null && lis[m].getAttribute('data-idx') === idx);
            }
        }

        if (currentBtn) App.revealSegmentedButtonIfHidden(currentBtn);
    };

    // ============================================
    // AUFBAU DER ANSICHT
    // ============================================
    App.rSOP = function() {
        if (!E.viewSOP) return;

        var d = App.findSop(S.sopId);

        if (!d) {
            E.viewSOP.innerHTML = '<div class="search-empty">' +
                '<i class="fa-solid fa-circle-question" aria-hidden="true"></i>' +
                '<p>Diese SOP ist nicht verfügbar.</p>' +
                '<button type="button" class="empty-reset" id="sopMissingBack">Zur Übersicht</button></div>';

            var back = document.getElementById('sopMissingBack');
            if (back) {
                back.addEventListener('click', function() {
                    S.sopId = null;
                    App.sTab('browse', 'pop');
                });
            }
            App.rPk();
            return;
        }

        var ck = d.category;
        var cl = App.gc(ck);
        var secCount = d.sections ? d.sections.length : 0;

        var html = '<article class="sop-header">' +
            '<div class="sop-header-top">' +
            '<span class="sop-cat-badge" style="--cat-color:' + cl + '">' +
            '<i class="fa-solid ' + App.catIcon(ck) + '" aria-hidden="true"></i> ' +
            App.esc(App.catName(ck)) + '</span>' +
            (d.stand ? '<span class="sop-meta-item"><i class="fa-solid fa-calendar" aria-hidden="true"></i> Stand: ' + App.esc(d.stand) + '</span>' : '') +
            '</div>' +
            '<h1 class="sop-title">' + App.esc(d.name) + '</h1>' +
            '<div class="sop-meta">' +
            '<span class="sop-meta-item"><i class="fa-solid fa-layer-group" aria-hidden="true"></i> ' +
            secCount + (secCount === 1 ? ' Abschnitt' : ' Abschnitte') + '</span>' +
            '</div>' +
            '<div class="sop-tools" aria-label="SOP-Werkzeuge">' +
            '<button type="button" class="utility-btn" id="sopContents"><i class="fa-solid fa-list-ul" aria-hidden="true"></i> Inhalt</button>' +
            '<button type="button" class="utility-btn" id="sopPrint"><i class="fa-solid fa-print" aria-hidden="true"></i> Drucken</button>' +
            '</div></article>';

        html += App.renderSegmentedControl(d);

        // Abschnitte - der HTML-Inhalt stammt unveraendert aus der SOP-Datei
        if (d.sections) {
            for (var i = 0; i < d.sections.length; i++) {
                var sec = d.sections[i];
                var secTitle = sec.title || ('Abschnitt ' + (i + 1));
                var op = App.AO.indexOf(secTitle) !== -1;
                html += sectionMarkup(i, secTitle, App.SIC[secTitle] || 'fa-circle-info', sec.html || '', cl, op);
            }
        }

        if (d.sources) {
            html += sectionMarkup('sources', 'Quellen', 'fa-quote-right',
                '<div class="sop-sources">' + d.sources + '</div>', cl, false);
        }

        E.viewSOP.innerHTML = html;
        document.getElementById('sopContents').addEventListener('click', function() { App.openPicker(); });
        document.getElementById('sopPrint').addEventListener('click', function() { App.printSop(); });

        // Kapitelleiste verdrahten
        var segButtons = E.viewSOP.querySelectorAll('.segmented-btn');
        for (var b = 0; b < segButtons.length; b++) {
            App.bindSegmentedButton(segButtons[b], segButtons[b].getAttribute('data-seg'));
        }

        App.initSegmentedKeyboardNav(E.viewSOP.querySelector('.segmented-control'));
        App.initSegmentedScrollArrows();

        // Abschnitte auf- und zuklappen
        var sections = E.viewSOP.querySelectorAll('.sop-section');
        for (var s = 0; s < sections.length; s++) {
            (function(section) {
                var head = section.querySelector('.sop-section-head');
                if (!head) return;
                head.addEventListener('click', function() {
                    App.haptic('light');
                    App.toggleSection(section);
                });
            })(sections[s]);
        }

        App.applyStagger(sections, 'stagger-in');

        App.invalidateSectionOffsets();
        segSpyIdx = null;
        segStuck = false;

        // Die Leiste zeigt den tatsaechlichen Zustand: beim Oeffnen sind
        // nur die Standardabschnitte offen, also ist "Alle" nicht aktiv.
        syncSegmentedWithSections();

        // Inhaltsverzeichnis und Navigationsliste baut der Aufrufer auf,
        // sobald die Bewegung durch ist - sie sind hier nicht sichtbar.
    };

    function sectionMarkup(idx, title, icon, bodyHtml, color, open) {
        var headId = 'sec-head-' + idx;
        var bodyId = 'sec-body-' + idx;

        return '<section class="sop-section' + (open ? ' is-open' : '') + '" data-sec="' + idx + '">' +
            '<h2 class="sop-section-heading">' +
            '<button type="button" class="sop-section-head" id="' + headId + '" data-idx="' + idx + '"' +
            ' aria-expanded="' + (open ? 'true' : 'false') + '" aria-controls="' + bodyId + '">' +
            '<i class="fa-solid ' + icon + ' sec-icon" style="color:' + color + '" aria-hidden="true"></i>' +
            '<span class="sec-title">' + App.esc(title) + '</span>' +
            '<i class="fa-solid fa-chevron-down sec-toggle' + (open ? ' open' : '') + '" aria-hidden="true"></i>' +
            '</button></h2>' +
            '<div class="sop-section-body' + (open ? ' open' : '') + '" id="' + bodyId + '" role="region" aria-labelledby="' + headId + '">' +
            bodyHtml +
            '</div></section>';
    }

    // ============================================
    // DRUCKEN
    // ============================================
    // Alle Abschnitte oeffnen, drucken, vorherigen Zustand wiederherstellen.
    App.printSop = function() {
        if (!E.viewSOP) return;

        var sections = E.viewSOP.querySelectorAll('.sop-section');
        var wasOpen = [];
        var i;

        for (i = 0; i < sections.length; i++) {
            wasOpen.push(App.isSectionOpen(sections[i]));
            App.setSectionOpen(sections[i], true, false);
        }

        try {
            window.print();
        } finally {
            for (i = 0; i < sections.length; i++) {
                App.setSectionOpen(sections[i], wasOpen[i], false);
            }
            App.invalidateSectionOffsets();
            syncSegmentedWithSections();
        }
    };

    // Abschnitt oeffnen und anspringen (Inhaltsverzeichnis, Suchtreffer)
    App.revealSection = function(idx) {
        if (!E.viewSOP) return;

        var sec = E.viewSOP.querySelector('.sop-section[data-sec="' + idx + '"]');
        if (!sec) return;

        var wasClosed = !App.isSectionOpen(sec);
        if (wasClosed) App.setSectionOpen(sec, true, true);
        App.invalidateSectionOffsets();
        syncSegmentedWithSections();

        // Erst scrollen, wenn die Hoehenanimation greift - sonst zielt
        // der Scroll auf eine veraltete Position.
        setTimeout(function() {
            App.invalidateSectionOffsets();
            App.scrollElementIntoView(sec);
        }, App.MOTION.reduced ? 0 : (wasClosed ? Math.round(App.MOTION.section * 0.5) : 60));
    };

})(window.SOPApp);
