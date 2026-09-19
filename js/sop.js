/* ============================================================
   sop.js - Einzelansicht einer SOP
   ------------------------------------------------------------
   Aufbau der Ansicht, animiertes Auf- und Zuklappen der
   Abschnitte, gepufferte Abschnittspositionen und der
   Scroll-Spy der angehefteten Kapitelleiste.

   Neu in dieser Fassung:
     - Inhalte kommen paketweise; bis dahin steht ein
       Platzhalter in der Form des Erwarteten    (Vorschlag 17)
     - Abbildungen aus img/ZNA/                  (Vorschlag 12)
     - Querverweise auf andere Pfade             (Vorschlag 27)
     - Verwandte Pfade am Ende                   (Vorschlag 28)
     - Score-Rechner aus der SOP-eigenen Tabelle (Vorschlag 32)
     - Tabellen auf dem Telefon als Karten       (Vorschlag 37)
     - Druckausgabe ohne Handgriffe im Ablauf    (Vorschlaege 3, 31)

   DER FACHLICHE INHALT DER SOP WIRD UNVERAENDERT UEBERNOMMEN.
   Alles, was hinzukommt, ist Navigation, Auszeichnung oder eine
   anklickbare Fassung dessen, was ohnehin dort steht.
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

    // Zustand, auf den ein Abschnitt gerade zulaeuft.
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

    /**
     * Endzustand eines Abschnitts fuer Hilfstechnologien setzen.
     *
     * Bisher wurde aria-expanded sofort umgestellt, waehrend der
     * Inhalt noch zugeklappt war - Screenreader meldeten also
     * "aufgeklappt", obwohl nichts zu lesen war. Und der geschlossene
     * Inhalt blieb im Zugaenglichkeitsbaum stehen, obwohl er
     * unsichtbar war. Beides wird jetzt am Ende der Bewegung
     * geradegezogen (Vorschlag 7).
     */
    function settleSectionA11y(section, body, open) {
        var head = section.querySelector('.sop-section-head');
        if (head) head.setAttribute('aria-expanded', open ? 'true' : 'false');

        if (open) {
            body.removeAttribute('hidden');
            body.removeAttribute('aria-hidden');
        } else {
            // hidden nimmt den Inhalt aus dem Zugaenglichkeitsbaum UND
            // aus der Suchfunktion des Browsers. Die Druckregeln setzen
            // display mit !important und stechen es damit aus - im
            // Ausdruck steht der Abschnitt trotzdem.
            body.setAttribute('hidden', '');
        }
    }

    App.setSectionOpen = function(section, open, animate) {
        var body = sectionBody(section);
        if (!section || !body) return;

        var toggle = section.querySelector('.sec-toggle');
        var head = section.querySelector('.sop-section-head');

        if (toggle) toggle.classList.toggle('open', open);
        section.classList.toggle('is-open', open);

        finishSectionAnimation(body);
        var alreadyOpen = body.classList.contains('open');

        // Waehrend der Bewegung muss der Inhalt sichtbar und messbar
        // sein - hidden wuerde beides verhindern.
        if (open) body.removeAttribute('hidden');
        if (head) head.setAttribute('aria-expanded', open ? 'true' : 'false');

        if (!animate || App.MOTION.reduced) {
            body.classList.toggle('open', open);
            body.classList.remove('is-animating');
            body.style.height = '';
            body.style.opacity = '';
            body.style.transition = '';
            settleSectionA11y(section, body, open);
            return;
        }

        if (alreadyOpen === open) {
            body.classList.remove('is-animating');
            body.style.height = '';
            body.style.opacity = '';
            body.style.transition = '';
            settleSectionA11y(section, body, open);
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
            settleSectionA11y(section, body, open);
            App.invalidateSectionOffsets();
            App.invalidateScrollMetrics();
        });
    };

    App.toggleSection = function(section) {
        App.setSectionOpen(section, !App.isSectionTargetOpen(section), true);
        App.invalidateSectionOffsets();
        App.invalidateScrollMetrics();
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

        var secs = sectionOffsets();
        var barHeight = SEC_CACHE.stickyHeight;

        var stuck = scrollTop >= SEC_CACHE.stickyTop;
        if (stuck !== segStuck) {
            segStuck = stuck;
            sticky.classList.toggle('is-stuck', stuck);
        }

        var ct = scrollTop + barHeight + 16;
        var cur = null;

        for (var i = 0; i < secs.length; i++) {
            if (secs[i].top <= ct) cur = secs[i];
            else break;
        }

        var idx = (stuck && cur) ? cur.idx : null;
        if (idx === segSpyIdx) return;
        segSpyIdx = idx;

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

        var state = App.sopLoadState(d);

        E.viewSOP.innerHTML = headerMarkup(d) +
            App.renderSegmentedControl(d) +
            (state === 'ready' ? sectionsMarkup(d) : placeholderMarkup(d, state));

        wireHeader(d);

        if (state === 'ready') {
            wireSections(d);
        } else {
            // Die Kapitelleiste steht schon, ihre Ziele noch nicht.
            // Sie wird deshalb als "in Arbeit" gekennzeichnet, statt
            // Knoepfe anzubieten, die ins Leere fuehren.
            var bar = E.viewSOP.querySelector('.segmented-control');
            if (bar) {
                bar.setAttribute('aria-busy', 'true');
                var waiting = bar.querySelectorAll('.segmented-btn');
                for (var w = 0; w < waiting.length; w++) waiting[w].disabled = true;
            }
            wirePlaceholder(d);
            // Paket anfordern und die Ansicht neu aufbauen, sobald es da
            // ist - aber nur, wenn inzwischen niemand weitergeblaettert hat.
            App.loadChunk(d.chunk, function() {
                if (S.tab === 'sop' && S.sopId === d.id) App.rSOP();
            });
        }

        App.invalidateSectionOffsets();
        App.invalidateScrollMetrics();
        segSpyIdx = null;
        segStuck = false;
    };

    // ---------- Kopfbereich ----------
    // "Inhalt" und "Drucken" stehen auf der Hoehe der Ueberschrift,
    // nicht darunter: auf dem Desktop bleibt damit die erste
    // Bildschirmhoehe fuer den Inhalt frei, und auf dem Telefon sind
    // beide Wege ohne Scrollen erreichbar. Unterhalb von 560 px
    // schrumpfen sie auf ihr Symbol (siehe css/components.css).
    function headerMarkup(d) {
        var ck = d.category;
        var secCount = d.secTitles.length;

        return '<article class="sop-header" style="' + App.escAttr(App.catStyle(ck)) + '">' +
            '<div class="sop-header-top">' +
            '<span class="sop-cat-badge">' +
            '<i class="fa-solid ' + App.catIcon(ck) + '" aria-hidden="true"></i> ' +
            App.esc(App.catName(ck)) + '</span>' +
            (d.stand
                ? '<span class="sop-meta-item"><i class="fa-solid fa-calendar" aria-hidden="true"></i> Stand: ' + App.esc(d.stand) + '</span>'
                : '') +
            '<span class="sop-meta-item"><i class="fa-solid fa-layer-group" aria-hidden="true"></i> ' +
            secCount + (secCount === 1 ? ' Abschnitt' : ' Abschnitte') + '</span>' +
            '</div>' +
            '<div class="sop-header-main">' +
            '<h1 class="sop-title">' + App.esc(d.name) + '</h1>' +
            '<div class="sop-tools" role="group" aria-label="SOP-Werkzeuge">' +
            '<button type="button" class="utility-btn" id="sopContents" title="Inhaltsverzeichnis">' +
            '<i class="fa-solid fa-list-ul" aria-hidden="true"></i>' +
            '<span class="utility-btn-label">Inhalt</span></button>' +
            '<button type="button" class="utility-btn" id="sopPrint" title="Drucken">' +
            '<i class="fa-solid fa-print" aria-hidden="true"></i>' +
            '<span class="utility-btn-label">Drucken</span></button>' +
            '</div>' +
            '</div>' +
            '</article>';
    }

    function wireHeader(d) {
        var contents = document.getElementById('sopContents');
        var print = document.getElementById('sopPrint');
        if (contents) contents.addEventListener('click', function() { App.openPicker(); });
        if (print) print.addEventListener('click', function() { App.printSop(); });
    }

    // ---------- Platzhalter waehrend des Ladens ----------
    function placeholderMarkup(d, state) {
        if (state === 'error') {
            return '<div class="sop-load-error" role="alert">' +
                '<strong><i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i> ' +
                'Inhalt konnte nicht geladen werden.</strong>' +
                '<span>Die Kapitelübersicht steht bereits, der Text fehlt noch. ' +
                'Ohne Netz hilft nur ein erneuter Versuch.</span>' +
                '<button type="button" class="sop-load-retry" id="sopRetry">' +
                '<i class="fa-solid fa-arrow-rotate-right" aria-hidden="true"></i> Erneut versuchen</button>' +
                '</div>';
        }

        // Platzhalter in der Form des Erwarteten: so viele Bloecke wie
        // Abschnitte, damit beim Eintreffen nichts springt.
        var html = '<div class="sop-skeleton" aria-hidden="true">';
        var blocks = Math.min(d.secTitles.length, 6);
        for (var i = 0; i < blocks; i++) {
            html += '<div class="skeleton-line" style="width:38%;height:1.1em"></div>';
            for (var j = 0; j < 3; j++) html += '<div class="skeleton-line"></div>';
        }
        html += '</div>' +
            '<p class="sr-only" role="status">Inhalt wird geladen.</p>';
        return html;
    }

    function wirePlaceholder(d) {
        var retry = document.getElementById('sopRetry');
        if (!retry) return;
        retry.addEventListener('click', function() {
            retry.disabled = true;
            App.retryChunk(d.chunk, function() {
                if (S.tab === 'sop' && S.sopId === d.id) App.rSOP();
            });
        });
    }

    // ---------- Abschnitte ----------
    function sectionsMarkup(d) {
        var cl = App.gc(d.category);
        var html = '';
        var i;

        for (i = 0; i < d.sections.length; i++) {
            var sec = d.sections[i];
            var title = sec.title || ('Abschnitt ' + (i + 1));
            html += sectionMarkup(i, title, App.secIcon(title), sec.html || '',
                App.isAutoOpen(title));
        }

        if (d.sources) {
            html += sectionMarkup('sources', 'Quellen', 'fa-quote-right',
                '<div class="sop-sources">' + d.sources + '</div>', false);
        }

        html += relatedMarkup(d);
        return html;
    }

    function sectionMarkup(idx, title, icon, bodyHtml, open) {
        var headId = 'sec-head-' + idx;
        var bodyId = 'sec-body-' + idx;

        return '<section class="sop-section' + (open ? ' is-open' : '') + '" data-sec="' + idx + '">' +
            '<h2 class="sop-section-heading">' +
            '<button type="button" class="sop-section-head" id="' + headId + '" data-idx="' + idx + '"' +
            ' aria-expanded="' + (open ? 'true' : 'false') + '" aria-controls="' + bodyId + '">' +
            '<i class="fa-solid ' + icon + ' sec-icon" aria-hidden="true"></i>' +
            '<span class="sec-title">' + App.esc(title) + '</span>' +
            '<i class="fa-solid fa-chevron-down sec-toggle' + (open ? ' open' : '') + '" aria-hidden="true"></i>' +
            '</button></h2>' +
            '<div class="sop-section-body' + (open ? ' open' : '') + '" id="' + bodyId + '"' +
            ' role="region" aria-labelledby="' + headId + '"' + (open ? '' : ' hidden') + '>' +
            bodyHtml +
            '</div></section>';
    }

    function wireSections(d) {
        var sections = E.viewSOP.querySelectorAll('.sop-section');
        var s;

        for (s = 0; s < sections.length; s++) {
            (function(section) {
                var head = section.querySelector('.sop-section-head');
                if (!head) return;
                head.addEventListener('click', function() {
                    App.haptic('light');
                    App.toggleSection(section);
                });
            })(sections[s]);
        }

        // Kapitelleiste verdrahten
        var segButtons = E.viewSOP.querySelectorAll('.segmented-btn');
        for (var b = 0; b < segButtons.length; b++) {
            App.bindSegmentedButton(segButtons[b], segButtons[b].getAttribute('data-seg'));
        }

        App.initSegmentedKeyboardNav(E.viewSOP.querySelector('.segmented-control'));
        App.initSegmentedScrollArrows();

        // Inhaltliche Anreicherung - alles nicht-fachlich, alles
        // ausschliesslich ergaenzend.
        attachFigures(d);
        enhanceTables(d);
        attachScores(d);
        // Erst JETZT steht fest, welche Tabelle ein Rechner ist -
        // und nur danach laesst sich entscheiden, welche auf dem
        // Telefon zu Karten wird. Die Reihenfolge ist Absicht.
        App.relayoutSopTables();
        linkCrossReferences(d);
        wireRelated(d);

        App.applyStagger(sections, 'stagger-in');
        App.observeView(E.viewSOP);

        syncSegmentedWithSections();
    }

    // ============================================
    // ABBILDUNGEN (Vorschlag 12)
    // ============================================
    // In img/ZNA/ liegen Abbildungen, auf die keine SOP verweist. Sie
    // werden hier an den Abschnitt gehaengt, zu dem sie gehoeren -
    // die SOP-Datei bleibt unangetastet.
    function attachFigures(d) {
        var figures = App.figuresOf(d.id);
        if (!figures.length) return;

        for (var i = 0; i < figures.length; i++) {
            var f = figures[i];
            var body = E.viewSOP.querySelector('.sop-section[data-sec="' + f.sec + '"] .sop-section-body');
            if (!body) continue;

            var fig = document.createElement('figure');
            fig.className = 'sop-figure';
            fig.innerHTML = '<img src="' + App.escAttr(f.src) + '" alt="' + App.escAttr(f.alt) +
                '" loading="lazy" decoding="async">' +
                '<figcaption><i class="fa-solid fa-image" aria-hidden="true"></i>' +
                '<span>' + App.esc(f.caption) + '</span></figcaption>';

            body.appendChild(fig);
        }
    }

    // ============================================
    // TABELLEN (Vorschlag 37)
    // ============================================
    // Auf dem Desktop bleibt die Tabelle eine Tabelle. Unterhalb von
    // 640 px wird jede Zeile zu einer Karte, in der jede Zelle ihren
    // Spaltenkopf vor sich her traegt. Die Spaltenkoepfe werden hier
    // als data-label gesetzt - im HTML der SOP aendert sich nichts.
    function enhanceTables(d) {
        var wraps = E.viewSOP.querySelectorAll('.table-wrap');

        for (var w = 0; w < wraps.length; w++) {
            var wrap = wraps[w];
            var table = wrap.querySelector('table');
            if (!table) continue;

            // Scrollflaeche einziehen, damit die Kopfzeile kleben kann
            // und der Ueberlauf eine eigene Kante bekommt.
            if (!wrap.querySelector('.table-scroll')) {
                var scroller = document.createElement('div');
                scroller.className = 'table-scroll';
                wrap.insertBefore(scroller, table);
                scroller.appendChild(table);
                bindTableOverflow(wrap, scroller);
            }

            labelCells(table);
        }

        App.relayoutSopTables();
    }

    /**
     * Zeilen und Kopfzellen GENAU dieser Tabelle.
     *
     * Wichtig: element.querySelectorAll('tbody tr') waehlt den
     * Selektor gegen das gesamte Dokument aus und filtert erst
     * danach auf Nachfahren. Seit der Druckbogen die Anwendung in
     * ein <tbody> einschliesst, ist JEDE Zeile im Dokument Nachfahrin
     * eines tbody - die Kopfzeile waere damit als Datenzeile
     * mitgezaehlt worden und der Score-Rechner um eine Zeile
     * verschoben. ":scope >" verankert die Abfrage an der Tabelle.
     */
    function bodyRowsOf(table) {
        var rows = table.querySelectorAll(':scope > tbody > tr');
        if (!rows.length) rows = table.querySelectorAll(':scope > tr');
        return rows;
    }

    function headCellsOf(table) {
        return table.querySelectorAll(':scope > thead > tr:first-child > th');
    }

    function labelCells(table) {
        var headCells = headCellsOf(table);
        if (!headCells.length) return;

        var labels = [];
        for (var h = 0; h < headCells.length; h++) {
            labels.push((headCells[h].textContent || '').replace(/\s+/g, ' ').trim());
        }

        var rows = bodyRowsOf(table);
        for (var r = 0; r < rows.length; r++) {
            var cells = rows[r].children;
            // rowspan verschiebt die Spaltenzuordnung. In den betroffenen
            // Tabellen (Glasgow Coma Scale) wird deshalb von hinten
            // gezaehlt - die letzte Spalte ist dort verlaesslich.
            var offset = labels.length - cells.length;
            for (var c = 0; c < cells.length; c++) {
                var labelIdx = offset > 0 ? c + offset : c;
                var label = labels[labelIdx] || '';
                if (c === 0 && offset <= 0) cells[c].setAttribute('data-lead', '');
                if (label) cells[c].setAttribute('data-label', label);
            }
        }
    }

    function bindTableOverflow(wrap, scroller) {
        var update = function() {
            var over = scroller.scrollWidth > scroller.clientWidth + 2;
            var atEnd = scroller.scrollLeft >= scroller.scrollWidth - scroller.clientWidth - 2;
            wrap.classList.toggle('has-overflow-right', over && !atEnd);
        };

        scroller.addEventListener('scroll', App.throttle(update, 80), { passive: true });
        wrap._updateOverflow = update;
        App.nextFrame(update);
    }

    /**
     * Nach einem Breakpoint-Wechsel neu entscheiden, welche Tabelle
     * als Karten laeuft (Vorschlag 11 in Verbindung mit 37).
     * Score-Tabellen bleiben immer Tabellen: dort traegt gerade die
     * Gegenueberstellung der Spalten die Aussage.
     */
    App.relayoutSopTables = function() {
        if (!E.viewSOP) return;
        var wraps = E.viewSOP.querySelectorAll('.table-wrap');

        for (var i = 0; i < wraps.length; i++) {
            var wrap = wraps[i];
            var table = wrap.querySelector('table');
            if (!table) continue;

            var isScore = table.classList.contains('is-score');
            var cols = headCellsOf(table).length;
            wrap.classList.toggle('as-cards', !isScore && cols >= 2);

            if (wrap._updateOverflow) wrap._updateOverflow();
        }
    };

    // ============================================
    // SCORE-RECHNER (Vorschlag 32)
    // ============================================
    // Die Tabelle der SOP WIRD der Rechner. Kriterien, Punktwerte und
    // Deutung stammen woertlich aus der SOP; hinzu kommen nur die
    // Anfassbarkeit und die laufende Summe.
    //
    // Bewusst zustandslos: nichts wird gespeichert, nichts ueberdauert
    // das Schliessen der SOP. Es ist ein Rechenschieber, keine Akte.
    function attachScores(d) {
        var scores = App.scoresOf(d.id);
        if (!scores.length) return;

        for (var i = 0; i < scores.length; i++) {
            var spec = scores[i];
            var body = E.viewSOP.querySelector('.sop-section[data-sec="' + spec.sec + '"] .sop-section-body');
            if (!body) continue;

            var tables = body.querySelectorAll('.table-wrap table');
            var table = tables[spec.table];
            if (!table) continue;

            buildScore(table, spec);
        }
    }

    function buildScore(table, spec) {
        table.classList.add('is-score');

        var rows = bodyRowsOf(table);
        var state = { value: 0, chosen: {} };

        var panel = document.createElement('div');
        panel.className = 'score-panel';
        panel.innerHTML =
            '<div class="score-bar">' +
            '<span class="score-label">Punktwert nach dieser Tabelle</span>' +
            '<span class="score-total">' +
            '<span class="score-total-value">0</span>' +
            '<span class="score-total-max">/ ' + formatPoints(spec.max) + '</span>' +
            '</span>' +
            '<button type="button" class="score-reset" disabled>Zurücksetzen</button>' +
            '</div>' +
            '<div class="score-meter" aria-hidden="true"><span></span></div>' +
            (spec.note ? '<p class="score-note">' + App.esc(spec.note) + '</p>' : '') +
            '<p class="score-hint"><strong>Rechenhilfe.</strong> Kriterien, Punkte und Auswertung ' +
            'stammen unverändert aus dieser SOP. Die Auswahl wird nicht gespeichert.</p>';

        var wrap = table.closest ? table.closest('.table-wrap') : null;
        if (wrap && wrap.parentNode) wrap.parentNode.insertBefore(panel, wrap.nextSibling);
        else return;

        var valueEl = panel.querySelector('.score-total-value');
        var meterEl = panel.querySelector('.score-meter > span');
        var resetEl = panel.querySelector('.score-reset');

        function render() {
            var total = 0;
            var any = false;
            for (var k in state.chosen) {
                if (!Object.prototype.hasOwnProperty.call(state.chosen, k)) continue;
                total += state.chosen[k];
                any = true;
            }
            valueEl.textContent = formatPoints(total);
            if (meterEl) {
                meterEl.style.transform = 'scaleX(' +
                    Math.max(0, Math.min(1, spec.max ? total / spec.max : 0)) + ')';
            }
            resetEl.disabled = !any;
            panel.setAttribute('aria-label', 'Punktwert ' + formatPoints(total) +
                ' von ' + formatPoints(spec.max));
        }

        function clearAll() {
            state.chosen = {};
            var marked = table.querySelectorAll('[aria-checked="true"]');
            for (var i = 0; i < marked.length; i++) marked[i].setAttribute('aria-checked', 'false');
            render();
            App.haptic('light');
        }

        resetEl.addEventListener('click', clearAll);

        if (spec.kind === 'sum') buildSumScore(rows, spec, state, render);
        else if (spec.kind === 'group-rows') buildRowGroupScore(rows, spec, state, render);
        else if (spec.kind === 'group-cols') buildColGroupScore(rows, spec, state, render);

        render();
    }

    /** Die Zelle bestimmen, die das Auswahlzeichen traegt. */
    function markCell(row, index) {
        var cell = row.children[index];
        if (cell) cell.classList.add('score-mark');
    }

    function formatPoints(n) {
        if (Math.abs(n - Math.round(n)) < 1e-9) return String(Math.round(n));
        return String(n).replace('.', ',');
    }

    /** Ein Kriterium je Zeile, Mehrfachauswahl. */
    function buildSumScore(rows, spec, state, render) {
        for (var i = 0; i < spec.items.length; i++) {
            (function(item) {
                var row = rows[item.row];
                if (!row) return;

                if (item.options) {
                    buildInRowOptions(row, item, state, render);
                    return;
                }

                row.setAttribute('data-score-row', String(item.row));
                row.setAttribute('role', 'checkbox');
                row.setAttribute('aria-checked', 'false');
                row.setAttribute('tabindex', '0');
                markCell(row, 0);

                var toggle = function() {
                    var on = row.getAttribute('aria-checked') === 'true';
                    if (on) delete state.chosen['r' + item.row];
                    else state.chosen['r' + item.row] = item.points;
                    row.setAttribute('aria-checked', on ? 'false' : 'true');
                    App.haptic('light');
                    render();
                };

                row.addEventListener('click', toggle);
                row.addEventListener('keydown', function(e) {
                    if (e.key === ' ' || e.key === 'Enter') {
                        e.preventDefault();
                        toggle();
                    }
                });
            })(spec.items[i]);
        }
    }

    /**
     * Mehrere Auspraegungen in derselben Zeile (Glasgow-Blatchford,
     * MASCC). Die Zelle mit den Auspraegungen wird durch Schaltflaechen
     * ersetzt - Text und Punktwerte bleiben dieselben.
     */
    function buildInRowOptions(row, item, state, render) {
        var cell = row.children[item.optCol];
        var ptsCell = row.children[item.ptsCol];
        if (!cell) return;

        cell.innerHTML = '';
        for (var i = 0; i < item.options.length; i++) {
            (function(opt, idx) {
                var btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'score-opt';
                btn.setAttribute('role', 'radio');
                btn.setAttribute('aria-checked', 'false');
                btn.innerHTML = '<span class="score-opt-points">' + App.esc(formatPoints(opt.points)) + '</span>' +
                    App.esc(opt.label);

                btn.addEventListener('click', function() {
                    var on = btn.getAttribute('aria-checked') === 'true';
                    var siblings = cell.querySelectorAll('.score-opt');
                    for (var s = 0; s < siblings.length; s++) {
                        siblings[s].setAttribute('aria-checked', 'false');
                    }
                    if (on) {
                        delete state.chosen['r' + item.row];
                    } else {
                        btn.setAttribute('aria-checked', 'true');
                        state.chosen['r' + item.row] = opt.points;
                    }
                    App.haptic('light');
                    render();
                });

                cell.appendChild(btn);
            })(item.options[i], i);
        }

        // Die Punktspalte wiederholt nur, was jetzt an der Auswahl
        // steht - sie wird zur Ruhe gebracht, nicht entfernt.
        if (ptsCell) ptsCell.setAttribute('aria-hidden', 'true');
    }

    /** Gruppen per rowspan; je Gruppe genau eine Zeile (GCS). */
    function buildRowGroupScore(rows, spec, state, render) {
        for (var g = 0; g < spec.groups.length; g++) {
            (function(group, gi) {
                for (var o = 0; o < group.options.length; o++) {
                    (function(opt) {
                        var row = rows[opt.row];
                        if (!row) return;

                        row.setAttribute('data-score-row', String(opt.row));
                        row.setAttribute('data-score-exclusive', String(gi));
                        row.setAttribute('role', 'radio');
                        row.setAttribute('aria-checked', 'false');
                        row.setAttribute('tabindex', '0');

                        // In der ersten Zeile einer Gruppe steht per
                        // rowspan der Gruppenname in Zelle 0 - die
                        // Wahlmoeglichkeit beginnt dann erst bei Zelle 1.
                        var lead = row.children.length > 2;
                        if (lead) {
                            row.children[0].classList.add('score-group');
                            row.setAttribute('data-score-lead', '');
                        }
                        markCell(row, lead ? 1 : 0);

                        var choose = function() {
                            var on = row.getAttribute('aria-checked') === 'true';
                            for (var s = 0; s < group.options.length; s++) {
                                var sib = rows[group.options[s].row];
                                if (sib) sib.setAttribute('aria-checked', 'false');
                            }
                            if (on) {
                                delete state.chosen['g' + gi];
                            } else {
                                row.setAttribute('aria-checked', 'true');
                                state.chosen['g' + gi] = opt.points;
                            }
                            App.haptic('light');
                            render();
                        };

                        row.addEventListener('click', choose);
                        row.addEventListener('keydown', function(e) {
                            if (e.key === ' ' || e.key === 'Enter') {
                                e.preventDefault();
                                choose();
                            }
                        });
                    })(group.options[o]);
                }
            })(spec.groups[g], g);
        }
    }

    /** Punktspalten in der Kopfzeile; je Zeile eine Spalte (4T-Score). */
    function buildColGroupScore(rows, spec, state, render) {
        for (var g = 0; g < spec.groups.length; g++) {
            (function(group, gi) {
                var row = rows[group.row];
                if (!row) return;

                for (var o = 0; o < group.options.length; o++) {
                    (function(opt) {
                        var cell = row.children[opt.col];
                        if (!cell) return;

                        var text = (cell.textContent || '').replace(/\s+/g, ' ').trim();
                        cell.innerHTML = '';

                        var btn = document.createElement('button');
                        btn.type = 'button';
                        btn.className = 'score-opt';
                        btn.setAttribute('role', 'radio');
                        btn.setAttribute('aria-checked', 'false');
                        btn.innerHTML = '<span class="score-opt-points">' +
                            App.esc(formatPoints(opt.points)) + '</span>' + App.esc(text);

                        btn.addEventListener('click', function() {
                            var on = btn.getAttribute('aria-checked') === 'true';
                            var siblings = row.querySelectorAll('.score-opt');
                            for (var s = 0; s < siblings.length; s++) {
                                siblings[s].setAttribute('aria-checked', 'false');
                            }
                            if (on) {
                                delete state.chosen['g' + gi];
                            } else {
                                btn.setAttribute('aria-checked', 'true');
                                state.chosen['g' + gi] = opt.points;
                            }
                            App.haptic('light');
                            render();
                        });

                        cell.appendChild(btn);
                    })(group.options[o]);
                }
            })(spec.groups[g], g);
        }
    }

    // ============================================
    // QUERVERWEISE (Vorschlag 27)
    // ============================================
    // Nennt eine SOP eine andere beim Namen, wird daraus ein
    // Sprungziel. Gearbeitet wird auf den Textknoten der bereits
    // eingebauten Fassung - die Quelldatei bleibt unberuehrt.
    //
    // Der Build hat vorgerechnet, welche SOPs in dieser ueberhaupt
    // vorkommen (d.xref). Nur nach diesen wenigen Begriffen wird
    // gesucht, nicht nach allen 73.
    function linkCrossReferences(d) {
        if (!d.xref || !d.xref.length) return;

        var terms = [];
        var i, j;

        for (i = 0; i < d.xref.length; i++) {
            var other = App.findSop(d.xref[i]);
            if (!other || other.id === d.id) continue;
            // Nur der Name ohne Klammerzusatz - Synonyme sind im
            // Fliesstext zu mehrdeutig, um sie automatisch zu verlinken.
            var name = other.name.replace(/\s*\([^)]*\)\s*$/, '').trim();
            if (name.length < 6) continue;
            terms.push({ id: other.id, name: name, folded: App.fold(name) });
        }

        if (!terms.length) return;

        // Laengste zuerst: "Akute Pankreatitis" gewinnt gegen "Pankreatitis".
        terms.sort(function(a, b) { return b.folded.length - a.folded.length; });

        var bodies = E.viewSOP.querySelectorAll('.sop-section-body');
        var linked = 0;
        var MAX_LINKS = 60;

        for (i = 0; i < bodies.length && linked < MAX_LINKS; i++) {
            linked += linkInside(bodies[i], terms, MAX_LINKS - linked);
        }
    }

    function linkInside(root, terms, budget) {
        if (!window.document.createTreeWalker || budget <= 0) return 0;

        var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
            acceptNode: function(node) {
                if (!node.nodeValue || node.nodeValue.length < 6) return NodeFilter.FILTER_REJECT;
                var p = node.parentNode;
                while (p && p !== root) {
                    var tag = p.nodeName;
                    // Nicht in Verweisen, Ueberschriften, Tabellenkoepfen,
                    // Dispositionsfeldern oder bereits gesetzten Verweisen.
                    if (tag === 'A' || tag === 'BUTTON' || tag === 'TH' ||
                        tag === 'H1' || tag === 'H2' || tag === 'H3' || tag === 'H4' ||
                        (p.classList && (p.classList.contains('sop-xref') ||
                            p.classList.contains('dispo') ||
                            p.classList.contains('sop-figure') ||
                            p.classList.contains('score-panel')))) {
                        return NodeFilter.FILTER_REJECT;
                    }
                    p = p.parentNode;
                }
                return NodeFilter.FILTER_ACCEPT;
            }
        });

        var nodes = [];
        var node;
        while ((node = walker.nextNode())) nodes.push(node);

        var used = {};
        var count = 0;

        for (var n = 0; n < nodes.length && count < budget; n++) {
            count += linkTextNode(nodes[n], terms, used, budget - count);
        }

        return count;
    }

    function linkTextNode(node, terms, used, budget) {
        var text = node.nodeValue;
        var fm = App.foldMap(text);
        if (!fm.f) return 0;

        var found = null;
        var t, at;

        for (t = 0; t < terms.length; t++) {
            // Je SOP hoechstens ein Verweis - sonst ist der Text
            // nach drei Absaetzen ein Linkteppich.
            if (used[terms[t].id]) continue;
            at = fm.f.indexOf(terms[t].folded);
            if (at === -1) continue;
            // Nur an einer Wortgrenze.
            if (at > 0 && fm.f.charAt(at - 1) !== ' ') continue;
            var after = at + terms[t].folded.length;
            if (after < fm.f.length && fm.f.charAt(after) !== ' ') continue;
            found = { term: terms[t], at: at, end: after };
            break;
        }

        if (!found || budget <= 0) return 0;

        var startSrc = fm.map[found.at];
        var endSrc = (found.end - 1 < fm.map.length
            ? fm.map[found.end - 1]
            : fm.map[fm.map.length - 1]) + 1;

        if (startSrc === undefined || endSrc === undefined || endSrc <= startSrc) return 0;

        var parent = node.parentNode;
        if (!parent) return 0;

        var before = document.createTextNode(text.slice(0, startSrc));
        var after2 = document.createTextNode(text.slice(endSrc));

        var link = document.createElement('a');
        link.className = 'sop-xref';
        link.href = '#sop/' + encodeURIComponent(found.term.id);
        link.setAttribute('data-xref', found.term.id);
        link.setAttribute('title', found.term.name + ' öffnen');
        link.textContent = text.slice(startSrc, endSrc);

        parent.insertBefore(before, node);
        parent.insertBefore(link, node);
        parent.insertBefore(after2, node);
        parent.removeChild(node);

        used[found.term.id] = 1;
        return 1;
    }

    // ============================================
    // VERWANDTE PFADE (Vorschlag 28)
    // ============================================
    // Vom Build berechnet: gemeinsamer Wortschatz, gleiche Kategorie
    // und kuratierte Leitsymptom-Gruppen.
    function relatedMarkup(d) {
        if (!d.related || !d.related.length) return '';

        var html = '<nav class="sop-related" aria-label="Verwandte Patientenpfade">' +
            '<h2 class="sop-related-title">' +
            '<i class="fa-solid fa-circle-nodes" aria-hidden="true"></i> Verwandte Pfade</h2>' +
            '<div class="sop-related-grid">';

        for (var i = 0; i < d.related.length; i++) {
            var other = App.findSop(d.related[i]);
            if (!other) continue;
            html += '<button type="button" class="related-card" data-id="' + App.escAttr(other.id) + '"' +
                ' style="' + App.escAttr(App.catStyle(other.category)) + '">' +
                '<span class="related-card-icon">' +
                '<i class="fa-solid ' + App.catIcon(other.category) + '" aria-hidden="true"></i></span>' +
                '<span class="related-card-text">' +
                '<span class="related-card-name">' + App.esc(other.name) + '</span>' +
                '<span class="related-card-cat">' + App.esc(App.catName(other.category)) + '</span>' +
                '</span></button>';
        }

        return html + '</div></nav>';
    }

    function wireRelated(d) {
        var grid = E.viewSOP.querySelector('.sop-related-grid');
        if (grid) {
            App.delegate(grid, '.related-card', function(card) {
                App.pushNav(card.getAttribute('data-id'));
            });
        }

        // Querverweise im Fliesstext
        App.delegate(E.viewSOP, 'a[data-xref]', function(link, e) {
            e.preventDefault();
            App.pushNav(link.getAttribute('data-xref'));
        });
    }

    // ============================================
    // DRUCKEN (Vorschlaege 3 und 31)
    // ============================================
    /**
     * Frueher wurden vor window.print() alle Abschnitte per JavaScript
     * geoeffnet und danach wiederhergestellt. Das war doppelt
     * unguenstig: es flackerte sichtbar auf dem Bildschirm, und in
     * Browsern, die print() sofort zurueckgeben, lief das
     * Wiederherstellen gegen die noch laufende Druckaufbereitung.
     *
     * Beides entfaellt. css/print.css setzt jeden Abschnittsrumpf auf
     * display:block - gedruckt wird immer die vollstaendige SOP,
     * unabhaengig davon, was auf dem Bildschirm auf- oder zugeklappt
     * ist. Hier bleibt nur noch, Kopf und Fuss des Bogens zu fuellen.
     */
    App.printSop = function() {
        var d = App.findSop(S.sopId);
        if (!d) return;

        if (App.sopLoadState(d) !== 'ready') {
            App.toast('Inhalt wird noch geladen', 'fa-hourglass-half');
            App.loadChunk(d.chunk, function(ok) {
                if (ok && S.sopId === d.id) App.printSop();
            });
            return;
        }

        preparePrintSheet(d);
        App.haptic('light');
        window.print();
    };

    function preparePrintSheet(d) {
        if (E.printHeadTitle) E.printHeadTitle.textContent = d.name || '';
        if (E.printHeadSub) {
            E.printHeadSub.textContent = 'Patientenpfade der Zentralen Notaufnahme · '
                + 'Klinikum St. Georg Leipzig';
        }
        if (E.printHeadCat) E.printHeadCat.textContent = App.catName(d.category);

        if (E.printFootNote) {
            E.printFootNote.textContent = 'Hausinterner Patientenpfad. Verbindlich ist die '
                + 'jeweils aktuelle Fassung in der Anwendung; ein Ausdruck ist eine Momentaufnahme.';
        }

        if (E.printFootMeta) {
            var now = new Date();
            var parts = [];
            if (d.stand) parts.push('Stand ' + d.stand);
            parts.push('Abruf ' + now.toLocaleDateString('de-DE') + ', '
                + now.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }) + ' Uhr');
            parts.push('Fassung ' + App.VERSION);
            E.printFootMeta.textContent = parts.join(' · ');
        }
    }

    App.preparePrintSheet = preparePrintSheet;

    // Abschnitt oeffnen und anspringen (Inhaltsverzeichnis, Suchtreffer)
    App.revealSection = function(idx) {
        if (!E.viewSOP) return;

        var sec = E.viewSOP.querySelector('.sop-section[data-sec="' + idx + '"]');
        if (!sec) return;

        var wasClosed = !App.isSectionOpen(sec);
        if (wasClosed) App.setSectionOpen(sec, true, true);
        App.invalidateSectionOffsets();
        syncSegmentedWithSections();

        setTimeout(function() {
            App.invalidateSectionOffsets();
            App.invalidateScrollMetrics();
            App.scrollElementIntoView(sec);
        }, App.MOTION.reduced ? 0 : (wasClosed ? Math.round(App.MOTION.section * 0.5) : 60));
    };

})(window.SOPApp);
