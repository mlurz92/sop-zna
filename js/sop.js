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
            // Vorgemerkter Abschnitt (Link, Suchtreffer, Werkzeug) -
            // steht erst jetzt sicher im Dokument.
            if (S.pendingSec && S.pendingSec.id === d.id && !S.isNavigating) {
                setTimeout(function() { App.flushPendingSection(); }, 0);
            }
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
        if (App.isDoc(d)) return docHeaderMarkup(d);

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
            '<button type="button" class="utility-btn" id="sopLink" title="Link auf diese Stelle kopieren">' +
            '<i class="fa-solid fa-link" aria-hidden="true"></i>' +
            '<span class="utility-btn-label">Link</span></button>' +
            '</div>' +
            '</div>' +
            '</article>';
    }

    // ---------- Kopfbereich eines Statuts ----------
    // Dieselbe Form wie bei einer SOP, dazu die Angaben aus dem
    // Deckblatt des Originals (Version, Datum, Erstellt, Freigabe).
    function docHeaderMarkup(d) {
        var secCount = d.secTitles.length;
        var facts = '';
        var addFact = function(label, value) {
            if (!value) return;
            facts += '<div class="doc-fact"><dt>' + App.esc(label) + '</dt><dd>' + App.esc(value) + '</dd></div>';
        };
        addFact('Datum', d.date);
        addFact('Version', d.version);
        addFact('Erstellt / Inhalt', d.author);
        addFact('Freigabe', d.release);
        addFact('Bereich', d.unit);

        return '<article class="sop-header sop-header-doc" style="' + App.escAttr(App.catStyle(d.category)) + '">' +
            '<div class="sop-header-top">' +
            '<span class="sop-cat-badge">' +
            '<i class="fa-solid ' + App.catIcon(d.category) + '" aria-hidden="true"></i> Statut</span>' +
            (d.stand
                ? '<span class="sop-meta-item"><i class="fa-solid fa-calendar" aria-hidden="true"></i> Stand: ' + App.esc(d.stand) + '</span>'
                : '') +
            (d.version
                ? '<span class="sop-meta-item"><i class="fa-solid fa-tag" aria-hidden="true"></i> Version ' + App.esc(d.version) + '</span>'
                : '') +
            '<span class="sop-meta-item"><i class="fa-solid fa-layer-group" aria-hidden="true"></i> ' +
            secCount + (secCount === 1 ? ' Abschnitt' : ' Abschnitte') + '</span>' +
            '</div>' +
            '<div class="sop-header-main">' +
            '<div class="doc-title-block">' +
            '<h1 class="sop-title">' + App.esc(d.name) + '</h1>' +
            (d.subtitle ? '<p class="doc-subtitle">' + App.esc(d.subtitle) + '</p>' : '') +
            '</div>' +
            '<div class="sop-tools" role="group" aria-label="Werkzeuge">' +
            '<button type="button" class="utility-btn" id="sopContents" title="Inhaltsverzeichnis">' +
            '<i class="fa-solid fa-list-ul" aria-hidden="true"></i>' +
            '<span class="utility-btn-label">Inhalt</span></button>' +
            '<button type="button" class="utility-btn" id="sopPrint" title="Drucken">' +
            '<i class="fa-solid fa-print" aria-hidden="true"></i>' +
            '<span class="utility-btn-label">Drucken</span></button>' +
            '<button type="button" class="utility-btn" id="sopLink" title="Link auf diese Stelle kopieren">' +
            '<i class="fa-solid fa-link" aria-hidden="true"></i>' +
            '<span class="utility-btn-label">Link</span></button>' +
            '</div>' +
            '</div>' +
            (facts ? '<dl class="doc-facts">' + facts + '</dl>' : '') +
            '</article>';
    }

    function wireHeader(d) {
        var contents = document.getElementById('sopContents');
        var print = document.getElementById('sopPrint');
        var link = document.getElementById('sopLink');
        if (contents) contents.addEventListener('click', function() { App.openPicker(); });
        if (print) print.addEventListener('click', function() { App.printSop(); });
        if (link) link.addEventListener('click', function() { App.copySopLink(); });
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
            // Ein Statut oeffnet mit seinem ersten Kapitel; alles
            // Weitere erreicht man ueber Kapitelleiste und Inhalt.
            var open = App.isDoc(d) ? i === 0 : App.isAutoOpen(title);
            html += sectionMarkup(i, title, App.secIconOf(d, i), sec.html || '', open);
        }

        if (d.sources) {
            html += sectionMarkup('sources', 'Quellen', 'fa-quote-right',
                '<div class="sop-sources">' + d.sources + '</div>', false);
        }

        html += App.isDoc(d) ? docRelatedMarkup(d) : relatedMarkup(d);
        html += xrefIndexMarkup(d);
        return html;
    }

    // ---------- Querverweise gesammelt ----------
    // Im Text wird jedes Ziel nur an seiner ersten Fundstelle
    // verlinkt. Hier stehen alle - und in Gegenrichtung, wer auf
    // dieses Dokument verweist. Damit ist jede Verbindung in beide
    // Richtungen mit einem Tipp erreichbar.
    function xrefIndexMarkup(d) {
        var out = byName(d.xref);
        // Bei Statuten waeren die Rueckverweise alle 73 Dispositions-
        // felder - dafuer gibt es die eigenen Karten.
        var back = App.isDoc(d) ? [] : byName(d.back);
        if (!out.length && !back.length) return '';

        var row = function(label, icon, items) {
            if (!items.length) return '';
            var chips = '';
            for (var i = 0; i < items.length; i++) {
                var it = items[i];
                chips += '<button type="button" class="xref-chip" data-id="' + App.escAttr(it.id) + '"' +
                    ' style="' + App.escAttr(App.catStyle(it.category)) + '">' +
                    '<span class="xref-chip-dot" aria-hidden="true"></span>' +
                    App.esc(it.short || it.name) + '</button>';
            }
            return '<div class="xref-row"><p class="xref-row-label"><i class="fa-solid ' + icon +
                '" aria-hidden="true"></i> ' + label + ' <span class="xref-row-count">' + items.length + '</span></p>' +
                '<div class="xref-chips">' + chips + '</div></div>';
        };

        return '<nav class="sop-related sop-xref-index" aria-label="Querverweise">' +
            '<h2 class="sop-related-title"><i class="fa-solid fa-link" aria-hidden="true"></i> Querverweise</h2>' +
            row('Im Text genannt', 'fa-arrow-right', out) +
            row('Verweist hierher', 'fa-arrow-right-to-bracket', back) +
            '</nav>';
    }

    function byName(ids) {
        var list = [];
        for (var i = 0; i < (ids || []).length; i++) {
            var it = App.findSop(ids[i]);
            if (it) list.push(it);
        }
        list.sort(function(a, b) {
            if (!!a.doc !== !!b.doc) return a.doc ? 1 : -1;
            return (a.short || a.name).localeCompare(b.short || b.name, 'de');
        });
        return list;
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
        linkStatutes(d);
        if (App.isDoc(d)) enhanceDocTools(d);
        else attachAbsPanel(d);
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
            // Ein Antippen der Abbildung oeffnet sie in voller Groesse
            // (App.openFigure) - auf dem Telefon sind Schichtplaene und
            // Algorithmen in Spaltenbreite sonst nicht lesbar.
            fig.innerHTML = '<button type="button" class="sop-figure-zoom" data-figure-zoom' +
                ' aria-label="' + App.escAttr(f.caption + ' in voller Größe öffnen') + '">' +
                '<img src="' + App.escAttr(f.src) + '" alt="' + App.escAttr(f.alt) +
                '" loading="lazy" decoding="async">' +
                '<span class="sop-figure-hint" aria-hidden="true"><i class="fa-solid fa-magnifying-glass"></i> Vergrößern</span>' +
                '</button>' +
                '<figcaption><i class="fa-solid fa-image" aria-hidden="true"></i>' +
                '<span>' + App.esc(f.caption) + '</span></figcaption>';

            // Statuten markieren die Stelle der Abbildung im Text
            // (data-figure-slot) - dort steht sie auch im Original.
            var slot = f.slot ? body.querySelector('[data-figure-slot="' + f.slot + '"]') : null;
            if (slot) slot.parentNode.replaceChild(fig, slot);
            else body.appendChild(fig);
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

        var xterms = (App.META && App.META.xterms) || {};
        var terms = [];
        var i, j;

        // Begriffe je Ziel stammen aus dem Build (Name plus kuratierte
        // Begriffe aus tools/data/xrefs.mjs) und sind dort auf
        // Eindeutigkeit geprueft.
        for (i = 0; i < d.xref.length; i++) {
            var other = App.findSop(d.xref[i]);
            if (!other || other.id === d.id) continue;
            var list = xterms[other.id] || [];
            for (j = 0; j < list.length; j++) {
                terms.push({ id: other.id, name: other.short || other.name, folded: list[j] });
            }
        }

        if (!terms.length) return;

        // Laengste zuerst: "Akute Pankreatitis" gewinnt gegen "Pankreatitis".
        terms.sort(function(a, b) { return b.folded.length - a.folded.length; });

        var bodies = E.viewSOP.querySelectorAll('.sop-section-body');
        var linked = 0;
        var MAX_LINKS = 80;
        // Je Ziel genau EIN Verweis im ganzen Dokument - an der ersten
        // Fundstelle. Alle Ziele stehen zusaetzlich gesammelt am Ende
        // ("Querverweise"); im Text entsteht so kein Linkteppich.
        var used = {};

        for (i = 0; i < bodies.length && linked < MAX_LINKS; i++) {
            linked += linkInside(bodies[i], terms, MAX_LINKS - linked, used);
        }
    }

    function linkInside(root, terms, budget, used) {
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
        var targetDoc = App.findSop(found.term.id);
        link.href = (App.isDoc(targetDoc) ? '#statut/' : '#sop/') + encodeURIComponent(found.term.id);
        if (App.isDoc(targetDoc)) link.className = 'sop-xref sop-xref-doc';
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
    // VERWEISE AUF DIE STATUTEN
    // ============================================
    // Alle 73 Dispositionsfelder nennen als Indikation fuer die
    // ZNA-Station das "Statut ZNA" und das "Statut Aufnahme- und
    // Beobachtungsstation". Genau diese Wortstellen werden zum
    // Sprungziel - ebenso Verweise zwischen den Statuten. Welche
    // Stellen das sind, legt tools/data/statuten.mjs fest; der Build
    // hat geprueft, dass sie im Text stehen.
    function linkStatutes(d) {
        var links = App.statutLinksFor(d);
        if (!links.length) return;

        for (var i = 0; i < links.length; i++) {
            var l = links[i];
            var target = App.findSop(l.to);
            if (!target) continue;

            var bodies = [];
            if (l.in === '*') {
                var idx = d.secTitles.indexOf(l.sec);
                if (idx === -1) continue;
                bodies = E.viewSOP.querySelectorAll('.sop-section[data-sec="' + idx + '"] .sop-section-body');
            } else {
                bodies = E.viewSOP.querySelectorAll('.sop-section[data-sec="' + l.sec + '"] .sop-section-body');
            }

            for (var b = 0; b < bodies.length; b++) {
                wrapPhrase(bodies[b], l.p, target);
            }
        }
    }

    /** Erste Fundstelle einer Wortfolge in einen Verweis verwandeln. */
    function wrapPhrase(root, phrase, target) {
        if (!document.createTreeWalker) return false;
        var needle = App.fold(phrase);
        var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
            acceptNode: function(node) {
                var p = node.parentNode;
                while (p && p !== root) {
                    if (p.nodeName === 'A' || p.nodeName === 'BUTTON') return NodeFilter.FILTER_REJECT;
                    p = p.parentNode;
                }
                return NodeFilter.FILTER_ACCEPT;
            }
        });

        var node;
        while ((node = walker.nextNode())) {
            var fm = App.foldMap(node.nodeValue);
            var at = fm.f.indexOf(needle);
            if (at === -1) continue;

            var start = fm.map[at];
            var end = fm.map[at + needle.length - 1] + 1;
            var text = node.nodeValue;

            var link = document.createElement('a');
            link.className = 'sop-xref sop-xref-doc';
            link.href = '#statut/' + encodeURIComponent(target.id);
            link.setAttribute('data-xref', target.id);
            link.setAttribute('title', target.short + ' öffnen');
            link.innerHTML = '<i class="fa-solid fa-scale-balanced" aria-hidden="true"></i>';
            link.appendChild(document.createTextNode(text.slice(start, end)));

            var parent = node.parentNode;
            parent.insertBefore(document.createTextNode(text.slice(0, start)), node);
            parent.insertBefore(link, node);
            parent.insertBefore(document.createTextNode(text.slice(end)), node);
            parent.removeChild(node);
            return true;
        }
        return false;
    }

    // ============================================
    // ZNA-STATION IM DISPOSITIONSFELD
    // ============================================
    // Das GELB-Feld jeder SOP enthaelt einen Block "Entlassung am
    // Folgetag angestrebt (ZNA-Station / A&B-Station)". Darunter
    // steht jetzt, was das Statut dazu sagt: ob die Diagnose dort
    // als Indikation genannt ist, und die beiden Checklisten und
    // die G-AEP-Pruefhilfe als direkte Wege. Der SOP-Text bleibt,
    // wie er ist - der Hinweis tritt als eigener Block hinzu.
    function attachAbsPanel(d) {
        var abs = App.findSop('statut-abs');
        if (!abs) return;

        var blocks = E.viewSOP.querySelectorAll('.dispo-gelb .dispo-block');
        if (!blocks.length) return;
        var block = blocks[0];
        if (block.querySelector('.dispo-statut')) return;

        var indications = App.absIndicationsFor(d.id);
        var go = function(key, icon, label) {
            var idx = App.docSectionIndex('statut-abs', key);
            if (idx === -1) return '';
            return '<button type="button" class="dispo-statut-btn" data-doc="statut-abs" data-doc-sec="' + idx + '">' +
                '<i class="fa-solid ' + icon + '" aria-hidden="true"></i> ' + App.esc(label) + '</button>';
        };

        var panel = document.createElement('div');
        panel.className = 'dispo-statut' + (indications.length ? ' has-indication' : '');
        panel.innerHTML =
            '<p class="dispo-statut-head"><i class="fa-solid fa-scale-balanced" aria-hidden="true"></i> ' +
            'Statut ABS / ZNA-Station</p>' +
            (indications.length
                ? '<p class="dispo-statut-text">Als diagnosebezogene Indikation genannt (Kap. 6.1): <strong>' +
                  App.esc(indications.join(' · ')) + '</strong></p>'
                : '<p class="dispo-statut-text">Aufnahme nach G-AEP-Kriterien oder den diagnosebezogenen Indikationen (Kap. 6), ' +
                  'nur nach Rücksprache mit dem diensthabenden Arzt / Oberarzt ZNA.</p>') +
            '<div class="dispo-statut-actions">' +
            go('anhang-2', 'fa-clipboard-list', 'Checkliste Aufnahme') +
            go('anhang-1', 'fa-scale-balanced', 'G-AEP-Kriterien') +
            go('indikationen', 'fa-square-check', 'Indikationen') +
            '</div>';

        block.appendChild(panel);
    }

    // ============================================
    // WERKZEUGE IN DEN STATUTEN
    // ============================================
    // Checklisten (Anhang 2 und 3), G-AEP-Pruefhilfe (Anhang 1),
    // Ausschlusskriterien (Kap. 4) und antippbare Rufnummern. Wie
    // beim Score-Rechner gilt: Wortlaut und Reihenfolge stammen aus
    // dem Statut, hinzu kommt nur die Anfassbarkeit. Nichts wird
    // gespeichert - es ist eine Abhakhilfe, keine Dokumentation.
    function enhanceDocTools(d) {
        var i;
        var lists = E.viewSOP.querySelectorAll('[data-checklist]');
        for (i = 0; i < lists.length; i++) buildChecklist(lists[i]);

        var gaep = E.viewSOP.querySelectorAll('[data-gaep-list]');
        for (i = 0; i < gaep.length; i++) buildGaep(gaep[i]);

        var excl = E.viewSOP.querySelectorAll('[data-exclusion]');
        for (i = 0; i < excl.length; i++) buildExclusion(excl[i]);

        var bodies = E.viewSOP.querySelectorAll('.sop-section-body');
        for (i = 0; i < bodies.length; i++) markPhoneNumbers(bodies[i]);

        linkIndications();
    }

    /**
     * Diagnosebezogene Indikationen (Statut ABS, Kap. 6.1): hinter
     * jede Indikation, zu der es Patientenpfade gibt, treten diese als
     * Sprungziele - "Elektrolytstoerungen" fuehrt so zu allen sechs
     * Elektrolyt-SOPs. Zuordnung: tools/data/statuten.mjs.
     */
    function linkIndications() {
        var list = E.viewSOP.querySelector('.doc-indications');
        var map = App.META && App.META.absIndications;
        if (!list || !map) return;

        var items = list.querySelectorAll(':scope > li');
        for (var i = 0; i < items.length; i++) {
            var text = App.fold(items[i].textContent || '');
            for (var m = 0; m < map.length; m++) {
                if (App.fold(map[m].t) !== text) continue;
                var html = '';
                for (var s = 0; s < map[m].s.length; s++) {
                    var sop = App.findSop(map[m].s[s]);
                    if (!sop) continue;
                    // Schon im Text verlinkt ("Synkope") - kein zweiter Weg daneben.
                    if (items[i].querySelector('a[data-xref="' + sop.id + '"]')) continue;
                    html += '<button type="button" class="xref-chip xref-chip-sm" data-id="' + App.escAttr(sop.id) + '"' +
                        ' style="' + App.escAttr(App.catStyle(sop.category)) + '">' +
                        '<span class="xref-chip-dot" aria-hidden="true"></span>' + App.esc(sop.name) + '</button>';
                }
                if (html) {
                    var box = document.createElement('span');
                    box.className = 'ind-links';
                    box.innerHTML = html;
                    items[i].appendChild(box);
                }
            }
        }
    }

    /** Ein Listenpunkt wird zum Kontrollkaestchen. */
    function makeCheckable(li, onToggle) {
        li.classList.add('check-item');
        li.setAttribute('role', 'checkbox');
        li.setAttribute('aria-checked', 'false');
        li.setAttribute('tabindex', '0');

        var box = document.createElement('span');
        box.className = 'check-box';
        box.setAttribute('aria-hidden', 'true');
        box.innerHTML = '<i class="fa-solid fa-check"></i>';
        li.insertBefore(box, li.firstChild);

        var toggle = function(e) {
            // Rufnummern und Verweise im Punkt behalten ihre eigene Aufgabe.
            if (e && e.target && e.target.closest && e.target.closest('a, button')) return;
            var on = li.getAttribute('aria-checked') !== 'true';
            li.setAttribute('aria-checked', on ? 'true' : 'false');
            App.haptic('light');
            onToggle(li, on);
        };

        li.addEventListener('click', toggle);
        li.addEventListener('keydown', function(e) {
            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                toggle(e);
            }
        });
    }

    function buildChecklist(box) {
        var items = box.querySelectorAll('li');
        if (!items.length) return;
        var total = items.length;
        var label = box.getAttribute('data-label') || 'Checkliste';

        var panel = document.createElement('div');
        panel.className = 'check-panel';
        panel.innerHTML =
            '<div class="check-bar">' +
            '<span class="check-count" role="status" aria-live="polite"><strong>0</strong> von ' + total + ' erledigt</span>' +
            '<span class="check-bar-actions">' +
            '<button type="button" class="check-print"><i class="fa-solid fa-print" aria-hidden="true"></i> Als Vorlage drucken</button>' +
            '<button type="button" class="check-reset" disabled>Zurücksetzen</button>' +
            '</span>' +
            '</div>' +
            '<div class="check-meter" aria-hidden="true"><span></span></div>' +
            '<p class="check-hint"><strong>Abhakhilfe.</strong> ' + App.esc(label) +
            ' aus dem Statut. Die Auswahl wird nicht gespeichert und ersetzt nicht die Dokumentation im KIS.</p>';
        box.appendChild(panel);

        // Nur im Ausdruck: Kopf- und Unterschriftsfelder, damit die
        // Papierfassung als ausgefuellte Checkliste taugt (Schreibhoehe
        // 8 mm, Unterschrift 14 mm). Auf dem Bildschirm unsichtbar.
        var head = document.createElement('div');
        head.className = 'check-print-fields';
        head.setAttribute('aria-hidden', 'true');
        head.innerHTML = '<span class="write-field">Patient / Etikett</span>' +
            '<span class="write-field">Datum, Uhrzeit</span>' +
            '<span class="write-field">Durchgeführt von</span>';
        box.insertBefore(head, box.firstChild);

        var sign = document.createElement('div');
        sign.className = 'check-print-sign';
        sign.setAttribute('aria-hidden', 'true');
        sign.innerHTML = '<span class="write-field write-sign">Unterschrift Arzt / Ärztin</span>' +
            '<span class="write-field write-sign">Unterschrift Pflege</span>';
        box.insertBefore(sign, panel);

        var countEl = panel.querySelector('.check-count');
        var meterEl = panel.querySelector('.check-meter > span');
        var resetEl = panel.querySelector('.check-reset');

        function render() {
            var done = box.querySelectorAll('.check-item[aria-checked="true"]').length;
            countEl.innerHTML = done === total
                ? '<i class="fa-solid fa-circle-check" aria-hidden="true"></i> Alle ' + total + ' Punkte erledigt'
                : '<strong>' + done + '</strong> von ' + total + ' erledigt';
            meterEl.style.transform = 'scaleX(' + (done / total) + ')';
            panel.classList.toggle('is-complete', done === total);
            resetEl.disabled = done === 0;
        }

        for (var i = 0; i < items.length; i++) makeCheckable(items[i], render);

        panel.querySelector('.check-print').addEventListener('click', function() {
            var sec = box.closest('.sop-section');
            if (sec) App.printSection(sec.getAttribute('data-sec'));
        });

        resetEl.addEventListener('click', function() {
            var marked = box.querySelectorAll('.check-item[aria-checked="true"]');
            for (var m = 0; m < marked.length; m++) marked[m].setAttribute('aria-checked', 'false');
            App.haptic('light');
            render();
        });

        render();
    }

    /**
     * G-AEP-Pruefhilfe. Ausgewertet wird nur, was das Statut selbst
     * sagt: A-Kriterien "ohne Zusatzkriterium B" genuegen allein,
     * A-Kriterien "mit Zusatzkriterium B" verlangen ein B-Kriterium.
     * Fuer alle uebrigen Gruppen trifft der Auszug keine Aussage -
     * sie werden gesammelt, aber nicht bewertet.
     */
    function buildGaep(box) {
        var items = box.querySelectorAll('li[data-gaep]');
        if (!items.length) return;

        var panel = document.createElement('div');
        panel.className = 'gaep-panel';
        panel.innerHTML =
            '<div class="gaep-verdict" role="status" aria-live="polite"></div>' +
            '<div class="gaep-actions">' +
            '<button type="button" class="gaep-copy" disabled><i class="fa-solid fa-copy" aria-hidden="true"></i> Auswahl für den Arztbrief kopieren</button>' +
            '<button type="button" class="check-reset gaep-reset" disabled>Zurücksetzen</button>' +
            '</div>' +
            '<p class="check-hint"><strong>Prüfhilfe.</strong> Bewertet wird nur die im Statut genannte Verknüpfung ' +
            'von A- und B-Kriterien. Die Auswahl wird nicht gespeichert.</p>';
        box.appendChild(panel);

        var verdict = panel.querySelector('.gaep-verdict');
        var copyBtn = panel.querySelector('.gaep-copy');
        var resetBtn = panel.querySelector('.gaep-reset');

        function chosen() {
            var out = [];
            var sel = box.querySelectorAll('li[data-gaep][aria-checked="true"]');
            for (var i = 0; i < sel.length; i++) {
                out.push({
                    code: sel[i].getAttribute('data-gaep'),
                    group: sel[i].getAttribute('data-group'),
                    b: sel[i].getAttribute('data-b') || '',
                    text: (sel[i].textContent || '').replace(/\s+/g, ' ').trim()
                });
            }
            return out;
        }

        function render() {
            var list = chosen();
            var codes = list.map(function(c) { return c.code; });
            var aAlone = list.filter(function(c) { return c.group === 'A' && c.b === 'ohne'; });
            var aNeedsB = list.filter(function(c) { return c.group === 'A' && c.b === 'mit'; });
            var aOther = list.filter(function(c) { return c.group === 'A' && !c.b; });
            var bSel = list.filter(function(c) { return c.group === 'B'; });

            var state = 'idle';
            var msg = 'Zutreffende Kriterien antippen.';

            if (list.length) {
                if (aAlone.length) {
                    state = 'ok';
                    msg = aAlone.map(function(c) { return c.code; }).join(', ') +
                        ': laut Statut ohne Zusatzkriterium B ausreichend.';
                } else if (aNeedsB.length && bSel.length) {
                    state = 'ok';
                    msg = aNeedsB.map(function(c) { return c.code; }).join(', ') + ' mit Zusatzkriterium ' +
                        bSel.map(function(c) { return c.code; }).join(', ') + ' erfüllt.';
                } else if (aNeedsB.length) {
                    state = 'warn';
                    msg = aNeedsB.map(function(c) { return c.code; }).join(', ') +
                        ': laut Statut nur mit einem Zusatzkriterium aus B.';
                } else if (aOther.length) {
                    state = 'info';
                    msg = aOther.map(function(c) { return c.code; }).join(', ') +
                        ' gewählt. Das Statut nennt hierzu keine Verknüpfung mit B.';
                } else {
                    state = 'info';
                    msg = 'Kein Kriterium der Schwere (A) gewählt.';
                }
            }

            verdict.className = 'gaep-verdict is-' + state;
            verdict.innerHTML =
                '<span class="gaep-codes">' + (codes.length ? App.esc(codes.join(' · ')) : 'Keine Auswahl') + '</span>' +
                '<span class="gaep-msg">' + App.esc(msg) + '</span>';
            copyBtn.disabled = !list.length;
            resetBtn.disabled = !list.length;
        }

        for (var i = 0; i < items.length; i++) makeCheckable(items[i], render);

        copyBtn.addEventListener('click', function() {
            var list = chosen();
            if (!list.length) return;
            var text = 'G-AEP-Kriterien zur Aufnahme:\n' + list.map(function(c) {
                // "A1: Ploetzliche ..." - Kennung steht im Text bereits vorn.
                return '- ' + (c.text.indexOf(c.code) === 0 ? c.text : c.code + ': ' + c.text);
            }).join('\n');
            App.copyText(text, function() {
                App.haptic('light');
                App.toast('G-AEP-Auswahl kopiert', 'fa-copy');
            }, function() {
                App.toast('Kopieren nicht möglich', 'fa-triangle-exclamation');
            });
        });

        resetBtn.addEventListener('click', function() {
            var marked = box.querySelectorAll('li[data-gaep][aria-checked="true"]');
            for (var m = 0; m < marked.length; m++) marked[m].setAttribute('aria-checked', 'false');
            App.haptic('light');
            render();
        });

        render();
    }

    /** Ausschlusskriterien (Statut ABS, Kap. 4): trifft eines zu, sagt es der Hinweis. */
    function buildExclusion(list) {
        var items = list.querySelectorAll('[data-exclusion-item]');
        if (!items.length) return;

        var note = document.createElement('div');
        note.className = 'excl-note';
        note.setAttribute('role', 'status');
        note.setAttribute('aria-live', 'polite');
        list.parentNode.insertBefore(note, list.nextSibling);

        function render() {
            var hit = list.querySelectorAll('[data-exclusion-item][aria-checked="true"]').length;
            note.classList.toggle('is-hit', hit > 0);
            note.innerHTML = hit
                ? '<i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i> ' +
                  '<span><strong>Ausschlusskriterium zutreffend.</strong> Keine Aufnahme auf die ZNA-Station.</span>'
                : '<i class="fa-solid fa-circle-info" aria-hidden="true"></i> ' +
                  '<span>Zutreffendes Ausschlusskriterium antippen.</span>';
        }

        for (var i = 0; i < items.length; i++) makeCheckable(items[i], render);
        render();
    }

    /**
     * "Tel. 4006", "Tel 909 4271": die Nummer wird antippbar und
     * landet - wie im Telefonverzeichnis - in der Zwischenablage.
     */
    function markPhoneNumbers(root) {
        if (!document.createTreeWalker) return;
        var re = /(Tel\.?\s*)((?:909\s*)?\d{4})(?!\d)/;
        var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
            acceptNode: function(node) {
                if (!re.test(node.nodeValue || '')) return NodeFilter.FILTER_REJECT;
                var p = node.parentNode;
                while (p && p !== root) {
                    if (p.nodeName === 'A' || p.nodeName === 'BUTTON') return NodeFilter.FILTER_REJECT;
                    p = p.parentNode;
                }
                return NodeFilter.FILTER_ACCEPT;
            }
        });

        var nodes = [];
        var node;
        while ((node = walker.nextNode())) nodes.push(node);

        for (var n = 0; n < nodes.length; n++) {
            var text = nodes[n].nodeValue;
            var frag = document.createDocumentFragment();
            var m;
            var rest = text;
            while ((m = re.exec(rest))) {
                var numStart = m.index + m[1].length;
                frag.appendChild(document.createTextNode(rest.slice(0, numStart)));
                var num = m[2].replace(/\s+/g, ' ');
                var btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'doc-tel';
                btn.setAttribute('data-tel', num);
                btn.setAttribute('title', 'Nummer kopieren');
                btn.innerHTML = '<i class="fa-solid fa-phone" aria-hidden="true"></i>';
                btn.appendChild(document.createTextNode(m[2]));
                frag.appendChild(btn);
                rest = rest.slice(numStart + m[2].length);
            }
            frag.appendChild(document.createTextNode(rest));
            nodes[n].parentNode.replaceChild(frag, nodes[n]);
        }
    }

    // ---------- Am Ende eines Statuts ----------
    // Statt "verwandter Pfade": das jeweils andere Statut und - beim
    // Statut ABS - die Patientenpfade zu den diagnosebezogenen
    // Indikationen. Damit fuehrt der Weg in beide Richtungen.
    function docRelatedMarkup(d) {
        var i;
        var cards = '';

        for (i = 0; i < S.docs.length; i++) {
            var other = S.docs[i];
            if (other.id === d.id) continue;
            cards += relatedCard(other, other.short, 'Statut');
        }

        var html = '';
        if (cards) {
            html += '<nav class="sop-related" aria-label="Weitere Statuten">' +
                '<h2 class="sop-related-title"><i class="fa-solid fa-scale-balanced" aria-hidden="true"></i> Weitere Statuten</h2>' +
                '<div class="sop-related-grid">' + cards + '</div></nav>';
        }

        if (d.id === 'statut-abs' && App.META && App.META.absIndications) {
            var seen = {};
            var sops = '';
            for (i = 0; i < App.META.absIndications.length; i++) {
                var ind = App.META.absIndications[i];
                for (var j = 0; j < ind.s.length; j++) {
                    var sop = App.findSop(ind.s[j]);
                    if (!sop || seen[sop.id]) continue;
                    seen[sop.id] = 1;
                    sops += relatedCard(sop, sop.name, ind.t);
                }
            }
            if (sops) {
                html += '<nav class="sop-related" aria-label="Patientenpfade zu den Indikationen">' +
                    '<h2 class="sop-related-title"><i class="fa-solid fa-circle-nodes" aria-hidden="true"></i> ' +
                    'Patientenpfade zu den Indikationen (Kap. 6.1)</h2>' +
                    '<div class="sop-related-grid">' + sops + '</div></nav>';
            }
        }

        return html;
    }

    function relatedCard(item, name, sub) {
        return '<button type="button" class="related-card" data-id="' + App.escAttr(item.id) + '"' +
            ' style="' + App.escAttr(App.catStyle(item.category)) + '">' +
            '<span class="related-card-icon">' +
            '<i class="fa-solid ' + App.catIcon(item.category) + '" aria-hidden="true"></i></span>' +
            '<span class="related-card-text">' +
            '<span class="related-card-name">' + App.esc(name) + '</span>' +
            '<span class="related-card-cat">' + App.esc(sub) + '</span>' +
            '</span></button>';
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

        // Sammelblock "Querverweise"
        App.delegate(E.viewSOP, '.xref-chip', function(chip) {
            App.pushNav(chip.getAttribute('data-id'));
        });

        // Wege aus dem Dispositionsfeld in einen Abschnitt eines Statuts
        App.delegate(E.viewSOP, '[data-doc-sec]', function(btn, e) {
            e.preventDefault();
            App.pushNav(btn.getAttribute('data-doc'), parseInt(btn.getAttribute('data-doc-sec'), 10));
        });

        // Rufnummern in den Statuten
        App.delegate(E.viewSOP, '.doc-tel', function(btn, e) {
            e.preventDefault();
            e.stopPropagation();
            App.copyPhoneNumber(btn.getAttribute('data-tel'), null);
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
        if (App.isDoc(d)) return prepareDocPrintSheet(d);
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

    // Ein Statut traegt auf jedem Blatt den Hinweis seines Originals.
    function prepareDocPrintSheet(d) {
        if (E.printHeadTitle) E.printHeadTitle.textContent = d.name || '';
        if (E.printHeadSub) E.printHeadSub.textContent = d.unit || 'Zentrale Notaufnahme · Klinikum St. Georg Leipzig';
        if (E.printHeadCat) E.printHeadCat.textContent = 'Statut';
        if (E.printFootNote) E.printFootNote.textContent = 'Ausgedruckte Dokumente unterliegen nicht der Aktualisierung.';
        if (E.printFootMeta) {
            var now = new Date();
            var parts = [];
            if (d.version) parts.push('Version ' + d.version);
            if (d.stand) parts.push('Stand ' + d.stand);
            if (d.release) parts.push('Freigabe: ' + d.release);
            parts.push('Abruf ' + now.toLocaleDateString('de-DE'));
            E.printFootMeta.textContent = parts.join(' · ');
        }
    }

    App.preparePrintSheet = preparePrintSheet;

    /** Vorgemerkten Abschnitt oeffnen, sobald er im Dokument steht. */
    App.flushPendingSection = function() {
        var p = S.pendingSec;
        if (!p || p.id !== S.sopId || S.tab !== 'sop' || !E.viewSOP) return;
        if (!E.viewSOP.querySelector('.sop-section[data-sec="' + p.sec + '"]')) return;
        S.pendingSec = null;
        App.revealSection(p.sec);
    };

    /**
     * Link auf die geoeffnete SOP kopieren - mit dem Abschnitt, der
     * gerade im Blick ist. Zum Weitergeben in Teams oder per Mail:
     * der Empfaenger landet genau dort.
     */
    App.copySopLink = function() {
        var d = App.findSop(S.sopId);
        if (!d) return;
        var cur = E.viewSOP ? E.viewSOP.querySelector('.sop-section.is-current') : null;
        var raw = cur ? cur.getAttribute('data-sec') : null;
        var sec = raw === 'sources' ? 'sources' : (raw !== null ? parseInt(raw, 10) : null);
        var url = App.linkFor(d.id, sec);
        var label = (sec !== null && sec !== 'sources' && d.secTitles[sec]) ? d.secTitles[sec] : (d.short || d.name);
        App.copyText(url, function() {
            App.haptic('light');
            App.toast('Link kopiert: ' + label, 'fa-link');
        }, function() {
            App.toast(url, 'fa-link');
        });
    };

    /**
     * Nur einen Abschnitt drucken (z. B. eine Checkliste als
     * Papiervorlage). Kopf und Fuss des Bogens bleiben, alle anderen
     * Abschnitte treten fuer den Druck zurueck.
     */
    App.printSection = function(idx) {
        var d = App.findSop(S.sopId);
        if (!d || !E.viewSOP) return;
        var sec = E.viewSOP.querySelector('.sop-section[data-sec="' + idx + '"]');
        if (!sec) return;

        preparePrintSheet(d);
        E.viewSOP.classList.add('print-one');
        sec.classList.add('print-target');

        var cleanup = function() {
            E.viewSOP.classList.remove('print-one');
            sec.classList.remove('print-target');
            window.removeEventListener('afterprint', cleanup);
        };
        window.addEventListener('afterprint', cleanup);
        App.haptic('light');
        window.print();
        // Browser ohne afterprint (aeltere Safari): nach der Rueckkehr aufraeumen.
        // Nur dort - wo afterprint existiert, kehrt window.print() mitunter
        // sofort zurueck, und ein fester Zeitgeber raeumte dann auf, waehrend
        // die Druckvorschau noch offen ist (gedruckt wuerde das ganze Dokument).
        if (!('onafterprint' in window)) setTimeout(cleanup, 1500);
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

        setTimeout(function() {
            App.invalidateSectionOffsets();
            App.invalidateScrollMetrics();
            App.scrollElementIntoView(sec);
        }, App.MOTION.reduced ? 0 : (wasClosed ? Math.round(App.MOTION.section * 0.5) : 60));
    };

})(window.SOPApp);
