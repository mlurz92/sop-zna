/* ============================================================
   overlays.js - Spotlight, Inhaltsverzeichnis, Telefonverzeichnis
   ------------------------------------------------------------
   Alle Overlays bleiben im DOM und werden ueber visibility,
   opacity und transform ein- und ausgeblendet. Ein Wechsel der
   display-Eigenschaft wuerde jede CSS-Transition unterbinden.

   Neu in dieser Fassung:
     - Die Schnellsuche nutzt dasselbe Werk wie die Volltextsuche
       und findet damit Abkuerzungen, Umlautschreibweisen und
       Tippfehler                           (Vorschlaege 20-22, 24)
     - Das Telefonverzeichnis liest die Dienstzeiten aus den
       vorhandenen Notizen und kennzeichnet, was gerade gilt
                                                   (Vorschlag 29)
   ============================================================ */
(function(App) {
    'use strict';

    var S = App.S;
    var E = App.E;

    // ============================================
    // FOKUS-VERWALTUNG
    // ============================================
    var FOCUS_RETURN = null;

    function focusablesIn(root) {
        if (!root) return [];
        var sel = 'button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])';
        var all = root.querySelectorAll(sel);
        var out = [];
        for (var i = 0; i < all.length; i++) {
            var r = all[i].getBoundingClientRect();
            if (r.width > 0 && r.height > 0) out.push(all[i]);
        }
        return out;
    }

    // Das zuletzt geoeffnete Overlay liegt oben - danach richtet sich
    // die Fokusfalle, nicht nach der Reihenfolge im Dokument.
    var overlayStack = [];

    function topOverlayRoot() {
        for (var i = overlayStack.length - 1; i >= 0; i--) {
            var o = overlayStack[i];
            if (o.overlay && o.overlay.classList.contains('show')) return o.root;
        }
        return null;
    }

    function pushOverlay(overlay, root) {
        overlayStack.push({ overlay: overlay, root: root });
        if (overlayStack.length === 1) FOCUS_RETURN = document.activeElement;
        document.body.classList.add('picker-open');
    }

    function popOverlay(overlay) {
        for (var i = overlayStack.length - 1; i >= 0; i--) {
            if (overlayStack[i].overlay === overlay) {
                overlayStack.splice(i, 1);
                break;
            }
        }
        if (!overlayStack.length) {
            document.body.classList.remove('picker-open');
            if (FOCUS_RETURN && FOCUS_RETURN.focus) {
                try { FOCUS_RETURN.focus(); } catch (e) {}
            }
            FOCUS_RETURN = null;
        } else {
            var root = topOverlayRoot();
            var items = focusablesIn(root);
            if (items.length) items[0].focus();
        }
    }

    App.trapFocus = function(e) {
        if (e.key !== 'Tab') return;
        var root = topOverlayRoot();
        if (!root) return;

        var f = focusablesIn(root);
        if (!f.length) return;

        var first = f[0], last = f[f.length - 1];
        var active = document.activeElement;

        if (active === root) {
            e.preventDefault();
            (e.shiftKey ? last : first).focus();
            return;
        }

        if (e.shiftKey && (active === first || !root.contains(active))) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && (active === last || !root.contains(active))) {
            e.preventDefault();
            first.focus();
        }
    };

    /**
     * Das oberste offene Overlay schliessen.
     *
     * Der Zugriff auf E.dirOverlay & Co. war bisher ungeprueft: fehlte
     * eines der Overlays im DOM, warf bereits ein Druck auf Escape
     * eine Ausnahme - und riss die gesamte Tastaturbedienung mit
     * (Vorschlag 9). Jetzt wird die Zuordnung ueber den Stapel selbst
     * getroffen, in dem ohnehin steht, was offen ist.
     */
    var CLOSERS = [];

    function registerCloser(overlayGetter, closeFn) {
        CLOSERS.push({ get: overlayGetter, close: closeFn });
    }

    App.closeTopOverlay = function() {
        var root = topOverlayRoot();
        if (!root) return false;

        for (var i = 0; i < CLOSERS.length; i++) {
            var overlay = CLOSERS[i].get();
            if (overlay && overlay.contains(root)) {
                CLOSERS[i].close();
                return true;
            }
        }

        // Unbekanntes Overlay: sauber vom Stapel nehmen, statt haengen
        // zu bleiben.
        for (var j = overlayStack.length - 1; j >= 0; j--) {
            if (overlayStack[j].root === root) {
                if (overlayStack[j].overlay) overlayStack[j].overlay.classList.remove('show');
                popOverlay(overlayStack[j].overlay);
                return true;
            }
        }

        return false;
    };

    App.closeAllOverlays = function() {
        var guard = 0;
        while (App.closeTopOverlay() && guard++ < 10) { /* bis keines mehr offen ist */ }
    };

    // ============================================
    // SPOTLIGHT (Vorschlaege 21, 22, 24)
    // ============================================
    var spotIndex = -1;

    // Drei feste Beispiele fuer den leeren Zustand - je eines fuer die
    // drei Wege, auf denen diese Suche etwas findet. Sie sind bewusst
    // hart hinterlegt und werden vom Testlauf gegen den Bestand
    // geprueft: ein Beispiel, das nichts findet, waere schlimmer als
    // gar keines.
    var SPOT_EXAMPLES = [
        { q: 'LAE',           kind: 'Abk\u00fcrzung', icon: 'fa-font'  },
        { q: 'Thoraxschmerz', kind: 'Leitsymptom',  icon: 'fa-heart-pulse' },
        { q: 'Amiodaron',     kind: 'Wirkstoff',    icon: 'fa-prescription-bottle-medical' }
    ];

    // Eine Stelle, an der die Anfrage gesetzt wird: Feld, Zustand,
    // Loesch-Schaltflaeche und Ergebnisliste gehen sonst auseinander.
    App.setSpotlightQuery = function(q) {
        S.spotQ = q || '';
        if (E.spotlightInput) E.spotlightInput.value = S.spotQ;
        if (E.spotlightClear) E.spotlightClear.classList.toggle('show', S.spotQ.length > 0);
        App.renderSpotlightResults();
        if (E.spotlightInput) E.spotlightInput.focus();
    };

    App.openSpotlight = function() {
        if (!E.spotlightOverlay || E.spotlightOverlay.classList.contains('show')) return;

        pushOverlay(E.spotlightOverlay, E.spotlightContainer);
        E.spotlightOverlay.classList.add('show');
        App.haptic('light');

        // Ohne diesen Aufruf stand beim ALLERERSTEN Oeffnen nichts im
        // Ergebnisbereich: gezeichnet wurde bisher nur bei Eingabe und
        // beim Schliessen. Das Feld schwebte dann ueber einem leeren
        // weissen Streifen.
        App.renderSpotlightResults();

        setTimeout(function() {
            if (!E.spotlightInput || topOverlayRoot() !== E.spotlightContainer) return;
            E.spotlightInput.focus();
            var v = E.spotlightInput.value;
            try { E.spotlightInput.setSelectionRange(v.length, v.length); } catch (e) {}
        }, App.MOTION.reduced ? 0 : 120);
    };

    App.closeSpotlight = function() {
        if (!E.spotlightOverlay || !E.spotlightOverlay.classList.contains('show')) return;

        E.spotlightOverlay.classList.remove('show');
        popOverlay(E.spotlightOverlay);

        if (E.spotlightInput) E.spotlightInput.value = '';
        S.spotQ = '';
        if (E.spotlightClear) E.spotlightClear.classList.remove('show');

        App.renderSpotlightResults();
    };

    registerCloser(function() { return E.spotlightOverlay; }, function() { App.closeSpotlight(); });

    App.renderSpotlightResults = function() {
        if (!E.spotlightResults) return;

        var query = S.spotQ.trim();
        var container = E.spotlightResults;

        spotIndex = -1;

        if (E.spotlightInput) E.spotlightInput.setAttribute('aria-activedescendant', '');

        if (!query) {
            // Der leere Zustand ist der Zustand, den man am haeufigsten
            // sieht - jedes Oeffnen beginnt hier. Statt eines Hinweises
            // ins Leere zeigt er, WAS diese Suche kann, an drei Beispielen
            // zum Antippen: eine Abkuerzung, ein Leitsymptom, ein
            // Wirkstoff. Das sind keine gemerkten Eingaben, sondern drei
            // feste Beispiele - es wird nichts gespeichert.
            var hints = '';
            for (var h = 0; h < SPOT_EXAMPLES.length; h++) {
                hints += '<button type="button" class="spotlight-chip" data-example="' +
                    App.escAttr(SPOT_EXAMPLES[h].q) + '">' +
                    '<i class="fa-solid ' + SPOT_EXAMPLES[h].icon + '" aria-hidden="true"></i>' +
                    '<span class="spotlight-chip-q">' + App.esc(SPOT_EXAMPLES[h].q) + '</span>' +
                    '<span class="spotlight-chip-kind">' + App.esc(SPOT_EXAMPLES[h].kind) + '</span>' +
                    '</button>';
            }

            // Ohne Treffer ist der Bereich keine Auswahlliste: Rolle und
            // aria-expanded werden abgelegt, sonst meldet der Screenreader
            // ein leeres Listenfeld.
            container.removeAttribute('role');
            if (E.spotlightInput) E.spotlightInput.setAttribute('aria-expanded', 'false');

            container.innerHTML = '<div class="spotlight-intro" role="presentation">' +
                '<p class="spotlight-intro-lead">' + S.data.length +
                ' Patientenpfade' + (S.docs.length ? ' und ' + S.docs.length + ' Statuten' : '') +
                ' \u2013 nach Name, Abk\u00fcrzung, Synonym, ' +
                'Leitsymptom oder Wirkstoff.</p>' +
                '<div class="spotlight-chips">' + hints + '</div>' +
                '</div>';

            App.delegate(container, '.spotlight-chip', function(c) {
                App.setSpotlightQuery(c.getAttribute('data-example') || '');
            });
            return;
        }

        // Dieselbe Abfrage wie die Volltextsuche, nur ohne Textstellen:
        // die Schnellsuche soll Wege oeffnen, nicht Text anzeigen.
        var res = App.query(query, { text: false, fuzzy: true, limit: 8 });

        container.setAttribute('role', 'listbox');
        if (E.spotlightInput) E.spotlightInput.setAttribute('aria-expanded', 'true');

        var html = '';
        var idx = 0;
        var i;

        for (i = 0; i < res.sops.length; i++) {
            var d = res.sops[i].sop;
            var why = res.sops[i].why;

            html += '<button type="button" class="spotlight-result" id="spot-opt-' + idx +
                '" data-id="' + App.escAttr(d.id) + '" role="option" aria-selected="false"' +
                ' style="' + App.escAttr(App.catStyle(d.category)) + '">' +
                '<span class="spotlight-result-icon">' +
                '<i class="fa-solid ' + App.catIcon(d.category) + '" aria-hidden="true"></i></span>' +
                '<span class="spotlight-result-info">' +
                '<span class="spotlight-result-name">' + App.sopName(d, query) + '</span>' +
                '<span class="spotlight-result-cat">' + App.esc(App.catName(d.category)) +
                (why === 'alias' ? ' · Synonym' : '') +
                (why === 'fuzzy' ? ' · ähnliche Schreibweise' : '') +
                '</span></span>' +
                '<i class="fa-solid fa-chevron-right" aria-hidden="true"></i></button>';
            idx++;
        }

        // Kapitel: "Checkliste", "G-AEP", "Crowding", "Wells" fuehren
        // direkt in den Abschnitt, nicht nur in das Dokument.
        var secHits = sectionMatches(query, 3);
        for (i = 0; i < secHits.length; i++) {
            var h = secHits[i];
            html += '<button type="button" class="spotlight-result spotlight-section" id="spot-opt-' + idx +
                '" data-id="' + App.escAttr(h.d.id) + '" data-sec="' + h.sec + '" role="option" aria-selected="false"' +
                ' style="' + App.escAttr(App.catStyle(h.d.category)) + '">' +
                '<span class="spotlight-result-icon">' +
                '<i class="fa-solid ' + App.secIconOf(h.d, h.sec) + '" aria-hidden="true"></i></span>' +
                '<span class="spotlight-result-info">' +
                '<span class="spotlight-result-name">' + App.hl(h.d.secTitles[h.sec], query) + '</span>' +
                '<span class="spotlight-result-cat">Kapitel · ' + App.esc(h.d.short || h.d.name) + '</span></span>' +
                '<i class="fa-solid fa-chevron-right" aria-hidden="true"></i></button>';
            idx++;
        }

        // Wirkstoffe: direkt zum Pfad mit der Dosierung.
        for (i = 0; i < res.drugs.length && i < 2; i++) {
            var drug = res.drugs[i];
            html += '<button type="button" class="spotlight-result spotlight-drug" id="spot-opt-' + idx +
                '" data-drug="' + App.escAttr(drug.name) + '" role="option" aria-selected="false">' +
                '<span class="spotlight-result-icon spotlight-icon-drug">' +
                '<i class="fa-solid fa-prescription-bottle-medical" aria-hidden="true"></i></span>' +
                '<span class="spotlight-result-info">' +
                '<span class="spotlight-result-name">' + App.hl(drug.name, query) + '</span>' +
                '<span class="spotlight-result-cat">Wirkstoff · ' + drug.sops.length +
                (drug.sops.length === 1 ? ' Pfad' : ' Pfade') + '</span></span>' +
                '<i class="fa-solid fa-chevron-right" aria-hidden="true"></i></button>';
            idx++;
        }

        // Immer erreichbar: die Volltextsuche ueber alle Abschnitte
        html += '<button type="button" class="spotlight-result spotlight-fulltext" id="spot-opt-' + idx +
            '" data-fulltext="1" role="option" aria-selected="false">' +
            '<span class="spotlight-result-icon spotlight-icon-full">' +
            '<i class="fa-solid fa-file-lines" aria-hidden="true"></i></span>' +
            '<span class="spotlight-result-info">' +
            '<span class="spotlight-result-name">Volltextsuche nach &bdquo;' + App.esc(query) + '&ldquo;</span>' +
            '<span class="spotlight-result-cat">Alle Abschnitte durchsuchen</span>' +
            '</span>' +
            '<i class="fa-solid fa-chevron-right" aria-hidden="true"></i></button>';

        if (!res.sops.length && !res.drugs.length && !secHits.length) {
            html = '<div class="spotlight-empty" role="presentation"><i class="fa-solid fa-circle-xmark" aria-hidden="true"></i>' +
                '<p>Kein Pfad und kein Wirkstoff mit diesem Namen</p></div>' + html;
        }

        container.innerHTML = html;

        App.delegate(container, '.spotlight-result', activateSpotlightItem);
        App.applyStagger(container.querySelectorAll('.spotlight-result'), 'stagger-item-x');
        highlightSpotlight(0);
    };

    function activateSpotlightItem(item) {
        if (!item) return;

        if (item.getAttribute('data-fulltext') || item.getAttribute('data-drug')) {
            var q = item.getAttribute('data-drug') || S.spotQ;
            App.closeSpotlight();
            S.sQ = q;
            S.scope = item.getAttribute('data-drug') ? 'drug' : 'all';
            if (E.searchViewInput) E.searchViewInput.value = q;
            if (E.searchViewClear) E.searchViewClear.classList.toggle('show', q.length > 0);
            App.sTab('search', 'fade');
            return;
        }

        var id = item.getAttribute('data-id');
        var sec = item.getAttribute('data-sec');
        App.closeSpotlight();
        App.pushNav(id, sec === null ? undefined : parseInt(sec, 10));
    }

    // Kapitel, deren Ueberschrift die Anfrage traegt. Allgemeine
    // Kapitel ("Therapie", "Disposition") stehen in jeder SOP und
    // waeren als Treffer nur Laerm - sie bleiben aussen vor.
    var GENERIC_SECTIONS = /^(definition|ursachen|symptome|diagnostik|therapie|merke|disposition|komplikationen|quellen)$/;

    function sectionMatches(query, limit) {
        var forms = App.queryForms(query);
        if (!forms[0] || forms[0].length < 4) return [];
        var pool = S.docs.concat(S.data);
        var out = [];
        for (var i = 0; i < pool.length && out.length < limit; i++) {
            var d = pool[i];
            for (var j = 0; j < d.secTitles.length && out.length < limit; j++) {
                var f = App.fold(d.secTitles[j]);
                if (GENERIC_SECTIONS.test(f)) continue;
                if (App.containsAny(f, forms)) out.push({ d: d, sec: j });
            }
        }
        return out;
    }

    function highlightSpotlight(index) {
        if (!E.spotlightResults) return;

        var items = E.spotlightResults.querySelectorAll('.spotlight-result');
        if (!items.length) { spotIndex = -1; return; }

        spotIndex = Math.max(0, Math.min(index, items.length - 1));

        for (var i = 0; i < items.length; i++) {
            var on = i === spotIndex;
            items[i].classList.toggle('is-active', on);
            items[i].setAttribute('aria-selected', on ? 'true' : 'false');
            if (on && items[i].scrollIntoView) items[i].scrollIntoView({ block: 'nearest' });
        }

        if (E.spotlightInput) {
            E.spotlightInput.setAttribute('aria-activedescendant', items[spotIndex].id || '');
        }
    }

    App.onSpotlightKey = function(e) {
        if (!E.spotlightOverlay || !E.spotlightOverlay.classList.contains('show')) return;

        var items = E.spotlightResults ? E.spotlightResults.querySelectorAll('.spotlight-result') : [];
        if (!items.length) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            highlightSpotlight(spotIndex + 1 >= items.length ? 0 : spotIndex + 1);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            highlightSpotlight(spotIndex - 1 < 0 ? items.length - 1 : spotIndex - 1);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            activateSpotlightItem(items[Math.max(0, spotIndex)]);
        }
    };

    // ============================================
    // INHALTSVERZEICHNIS (Bottom Sheet)
    // ============================================
    App.rPk = function() {
        if (!E.sectionPickerList) return;

        var d = App.findSop(S.sopId);
        if (E.sectionPickerSubtitle) {
            E.sectionPickerSubtitle.textContent = d ? (d.name || '') : '';
        }
        if (!d) {
            E.sectionPickerList.innerHTML = '';
            return;
        }

        var html = '';
        var i;
        var titles = d.secTitles || [];

        for (i = 0; i < titles.length; i++) {
            var title = titles[i] || ('Abschnitt ' + (i + 1));
            html += '<li data-idx="' + i + '" tabindex="0" role="button"' +
                ' style="' + App.escAttr(App.catStyle(d.category)) + '">' +
                '<i class="fa-solid ' + App.secIconOf(d, i) + '" style="color:var(--cat-color)" aria-hidden="true"></i> ' +
                App.esc(title) + '</li>';
        }

        if (d.hasSources) {
            html += '<li data-idx="sources" tabindex="0" role="button"' +
                ' style="' + App.escAttr(App.catStyle(d.category)) + '">' +
                '<i class="fa-solid fa-quote-right" style="color:var(--cat-color)" aria-hidden="true"></i> Quellen</li>';
        }

        E.sectionPickerList.innerHTML = html;

        var lis = E.sectionPickerList.querySelectorAll('li');
        for (i = 0; i < lis.length; i++) {
            lis[i].style.setProperty('--stagger',
                (Math.min(i, App.MOTION.staggerMax) * App.MOTION.staggerStep) + 'ms');
        }

        App.delegate(E.sectionPickerList, 'li[data-idx]', function(li) {
            var idx = li.getAttribute('data-idx');
            App.closePicker();
            App.revealSection(idx);
        });

        markCurrentPickerEntry();
    };

    function markCurrentPickerEntry() {
        if (!E.sectionPickerList || !E.viewSOP) return;

        var current = E.viewSOP.querySelector('.sop-section.is-current');
        var idx = current ? current.getAttribute('data-sec') : null;
        var lis = E.sectionPickerList.querySelectorAll('li');

        for (var i = 0; i < lis.length; i++) {
            lis[i].classList.toggle('active', idx !== null && lis[i].getAttribute('data-idx') === idx);
        }
    }

    App.openPicker = function() {
        if (!E.sectionPickerOverlay || E.sectionPickerOverlay.classList.contains('show')) return;

        App.rPk();

        pushOverlay(E.sectionPickerOverlay, E.pickerSheet);
        E.sectionPickerOverlay.classList.add('show');
        App.haptic('light');

        setTimeout(function() {
            if (E.pickerSheet && topOverlayRoot() === E.pickerSheet) E.pickerSheet.focus();
        }, App.MOTION.reduced ? 0 : 280);
    };

    App.closePicker = function() {
        if (!E.sectionPickerOverlay || !E.sectionPickerOverlay.classList.contains('show')) return;

        E.sectionPickerOverlay.classList.remove('show');
        if (E.pickerSheet) E.pickerSheet.style.transform = '';
        popOverlay(E.sectionPickerOverlay);
    };

    registerCloser(function() { return E.sectionPickerOverlay; }, function() { App.closePicker(); });

    // ============================================
    // TELEFONVERZEICHNIS
    // ============================================
    var PHONE_DIR = [
        {
            group: 'Notfall & Externe Kontakte',
            icon: 'fa-tower-broadcast',
            items: [
                { name: 'Leitstelle', tel: '19222', note: '' },
                { name: 'Polizeirevier Nord', tel: '59350', note: '' },
                { name: 'Security', tel: '4568', note: '' },
                { name: 'Dolmetscher', tel: '4530', note: '' }
            ]
        },
        {
            group: 'ITS & IMC (Disposition ROT)',
            icon: 'fa-heart-pulse',
            items: [
                { name: 'ITS-Koordinator', tel: '3008', note: 'Zentraler ITS-Aufnahmekontakt' },
                { name: 'ITS Innere', tel: '4488', note: '' },
                { name: 'ITS Anästhesie (KAIS, 21)', tel: '4054', note: '' },
                { name: 'ITS Pneumologie (2.1)', tel: '4217', note: '' },
                { name: 'KEIM ITS (2 Erd)', tel: 'Ziffer 2 ERD', note: '' },
                { name: 'ITO / Stroke Unit', tel: '4925', note: 'Identisch mit DA Neurologie' },
                { name: 'IMC 2.0 (2 Erd IMC)', tel: '4764', note: 'Internistische Intensivstation / IMC Station 2 Erd' },
                { name: 'IMC KAIS', tel: '4644', note: 'Arzt; alternativ 4640' }
            ]
        },
        {
            group: 'Chirurgische Fächer (Dienstarzt / Konsil)',
            icon: 'fa-scissors',
            items: [
                { name: 'Allgemeinchirurgie (ACH)', tel: '4881', note: 'DA bis 15:30 Uhr: 4004' },
                { name: 'Unfallchirurgie (UCH)', tel: '4835 / 4610', note: '' },
                { name: 'Polytrauma', tel: '4499', note: '' },
                { name: 'Kinderchirurgie (KCH)', tel: '4783 / 4909', note: '4783 (DA), 4909 (IST); Verweis auf Plan' },
                { name: 'Neurochirurgie (NCH)', tel: '4466', note: '' },
                { name: 'Gefäßchirurgie (GCH)', tel: '4923 / 2766', note: 'DA über Station 2235, ChA 4923' },
                { name: 'Plastische Chirurgie (PCH)', tel: '4956', note: '' },
                { name: 'Thoraxchirurgie (TCH)', tel: 'über Station 2245', note: '' }
            ]
        },
        {
            group: 'Konservative Fächer & Weitere',
            icon: 'fa-stethoscope',
            items: [
                { name: 'Internist (BVZ)', tel: '4006 / 4933', note: '' },
                { name: 'Neurologie', tel: '4925', note: '' },
                { name: 'Apoplex', tel: '4977', note: '' },
                { name: 'Infektiologie', tel: '4005', note: 'Infektionsambulanz: 4715' },
                { name: 'Onkologie (OA)', tel: '4600', note: '' },
                { name: 'Pädiatrie', tel: '4909 / 4040', note: 'Pädiater: 4308, Neo-Pädiatrie: 4949' },
                { name: 'Anästhesie ZNA', tel: '4441', note: '' },
                { name: 'Gynäkologie (GYN)', tel: '4912 / 4969', note: '' },
                { name: 'Urologie (URO)', tel: '4079', note: '' },
                { name: 'HNO', tel: '2388', note: 'HNO-Station: 2374' },
                { name: 'MKG', tel: '0172 2992689', note: 'MKG Praxis: 0341 33736925' }
            ]
        },
        {
            group: 'Diagnostik & Funktionseinheiten',
            icon: 'fa-microscope',
            items: [
                { name: 'Gastroskopie', tel: '2674 / 5663', note: 'Tags: 2674, Dienst: 5663' },
                { name: 'Bronchoskopie', tel: 'nach Dienstplan', note: '' },
                { name: 'HKL (Herzkatheter)', tel: '3333', note: '' },
                { name: 'Dialyse Arzt', tel: '4494', note: '' },
                { name: 'Radiologie (DA / Ärzte)', tel: '4573', note: 'Radiologie Kinder: 4728' },
                { name: 'Radiologie (MTR)', tel: '2716 / 2736', note: 'CT: 2716, Konventionell: 2736' },
                { name: 'Zentrallabor / Gerinnung', tel: '2508 / 2514', note: 'Zusätzliche Labornummer: 2506' }
            ]
        },
        {
            group: 'Infrastruktur & ZNA-Organisation',
            icon: 'fa-hospital',
            items: [
                { name: 'Bettenmanagement', tel: '4299', note: '' },
                { name: 'Schockraum / Aufwachraum', tel: '3470 / 1630', note: '' },
                { name: 'ZNA Triage / Tresen', tel: '4271 / 3404', note: 'ZNA Station 4B: 4812' },
                { name: 'Rettungsdienst-Anmeldung (Triage)', tel: '4440', note: 'Statut ZNA 5.2.2: Anmeldung durch den RD, Tel. 909 4440' },
                { name: 'Diensthabender Arzt / Oberarzt ZNA', tel: '4006', note: 'Statut ABS: Belegung der ZNA-Station nur nach Rücksprache' },
                { name: 'Pflege Aufnahme- und Beobachtungsstation', tel: '4257', note: 'Statut ABS: bei jedem Zugang auf die ZNA-Station informieren' },
                { name: 'Administrative Aufnahme', tel: '4667', note: 'Statut ABS: Einweisungsschein "ZNA-Station 20.0 ZNA"' },
                { name: 'Krankenträger', tel: '2208', note: '' },
                { name: 'IT', tel: '4863', note: '' },
                { name: 'Reinigung', tel: '4415 / 4094', note: 'Ab 19:30 Uhr: 1006' }
            ]
        },
        {
            group: 'Sprechstunden Ambulanzzentrum (Haus 61, Delitzscher Str. 141)',
            icon: 'fa-calendar-check',
            items: [
                { name: 'Zentraler Tresen / Anmeldung', tel: '0341 909 1810', note: '' },
                { name: 'D-Arzt / Unfallchirurgie – Fr. Dr. Dietze', tel: '0341 909 1810', note: 'Mi 09-12 & 13-17 Uhr, Fr 09-13 Uhr' },
                { name: 'D-Ambulanz (Akut) – Fr. Dr. Tiemann', tel: '0341 909 4170', note: 'Täglich 08-09 Uhr; Termin nur via Schw. Sindy' },
                { name: 'Gipskontrollen (UCH) – CA Dr. Esser', tel: '0341 909 1810', note: 'Mo 12-17 Uhr, Do 09-14 Uhr; ohne Termin möglich' },
                { name: 'Kinder D-Ambulanz – Fr. Laake', tel: '0341 909 3604', note: 'Mo/Di 09-11:30, Do 12-16 Uhr; Akut Mo-Fr 09-10; online via Doctolib' },
                { name: 'Plastische Chirurgie', tel: '0341 909 1815', note: 'Mo-Fr 07:30-08:30 Uhr; ambulanz.pch@sanktgeorg.de' },
                { name: 'Handchirurgie – Fr. Dr. Rothe', tel: '0341 909 1810', note: 'Mo, Di, Do, Fr 08-11 Uhr' },
                { name: 'Proktologie – OA Dr. Bley', tel: '0341 909 1810', note: 'Di 08-12 & 13-17:30 Uhr' },
                { name: 'Hernien – OA Dr. Braunert', tel: '0341 909 1810', note: 'Di 12-15 Uhr' },
                { name: 'CED – CA Dr. Jansen-Winkeln', tel: '0341 909 2200', note: 'Mo 12-16 Uhr; Termin nur via Sekr. Marinak' },
                { name: 'Gynäkologie (GYN)', tel: '0341 909 3515', note: '' },
                { name: 'HNO', tel: '0341 909 2383', note: '' }
            ]
        }
    ];
    App.PHONE_DIR = PHONE_DIR;

    // ---------- Dienstzeiten (Vorschlag 29) ----------
    // Die Notizen der Eintraege tragen bereits Zeitangaben:
    // "DA bis 15:30 Uhr", "Ab 19:30 Uhr", "Mo-Fr 07:30-08:30 Uhr",
    // "Mi 09-12 & 13-17 Uhr, Fr 09-13 Uhr".
    //
    // Sie werden gelesen und in Zeitfenster uebersetzt, damit im
    // Verzeichnis steht, was JETZT gilt. Die Nummern selbst bleiben
    // unveraendert - und wer ausserhalb anrufen will, kann das:
    // ein Eintrag wird gekennzeichnet, nie gesperrt.

    var DAY_TOKENS = {
        'mo': 1, 'di': 2, 'mi': 3, 'do': 4, 'fr': 5, 'sa': 6, 'so': 0,
        'montag': 1, 'dienstag': 2, 'mittwoch': 3, 'donnerstag': 4,
        'freitag': 5, 'samstag': 6, 'sonntag': 0
    };

    var DAY_NAMES = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];

    function minutesOf(h, m) {
        return h * 60 + (m || 0);
    }

    /** "09", "09:30", "7.30" -> Minuten seit Mitternacht. */
    function parseClock(raw) {
        var m = /^(\d{1,2})(?:[:.](\d{2}))?$/.exec(String(raw).trim());
        if (!m) return null;
        var h = parseInt(m[1], 10);
        var min = m[2] ? parseInt(m[2], 10) : 0;
        if (h > 24 || min > 59) return null;
        return minutesOf(h, min);
    }

    /** Tagesangaben eines Textstuecks: "Mo-Fr", "Mo/Di", "Täglich". */
    function parseDays(text) {
        var lower = text.toLowerCase();

        if (/t(ä|ae)glich|jeden tag|rund um die uhr|24\s*h/.test(lower)) {
            return [0, 1, 2, 3, 4, 5, 6];
        }
        if (/werktags/.test(lower)) return [1, 2, 3, 4, 5];

        var days = [];
        // Bereiche: "Mo-Fr"
        var range = /\b(mo|di|mi|do|fr|sa|so)\s*[-–]\s*(mo|di|mi|do|fr|sa|so)\b/gi;
        var m;
        while ((m = range.exec(lower)) !== null) {
            var from = DAY_TOKENS[m[1]];
            var to = DAY_TOKENS[m[2]];
            var cursor = from;
            var guard = 0;
            while (guard++ < 8) {
                days.push(cursor);
                if (cursor === to) break;
                cursor = (cursor + 1) % 7;
            }
        }

        // Einzelne Tage: "Mo", "Mo/Di", "Mi &"
        var single = /\b(mo|di|mi|do|fr|sa|so)\b/gi;
        while ((m = single.exec(lower)) !== null) {
            var d = DAY_TOKENS[m[1]];
            if (days.indexOf(d) === -1) days.push(d);
        }

        return days;
    }

    /**
     * Zeitfenster aus einer Notiz. Rueckgabe: Liste aus
     * { days: [0..6], from, to } in Minuten.
     *
     * BEWUSST ZURUECKHALTEND: ein Fenster entsteht nur, wenn die
     * Notiz ausdrueckliche Tage nennt ("Mo-Fr", "Di", "Taeglich").
     *
     * Der Grund ist ein fachlicher: in Notizen wie
     *     "DA bis 15:30 Uhr: 4004"   oder   "Ab 19:30 Uhr: 1006"
     * gilt die Zeit NICHT fuer die Nummer der Zeile, sondern fuer
     * eine darin genannte Zweitnummer. Wuerde daraus ein Zeitfenster,
     * stuende neben einer rund um die Uhr erreichbaren Nummer
     * "ausserhalb der Dienstzeit" - eine Falschaussage, die im
     * Zweifel einen Anruf verhindert.
     *
     * Gekennzeichnet werden dadurch genau die Eintraege, bei denen
     * die Notiz tatsaechlich eine Sprechzeit beschreibt.
     */
    function parseWindows(note) {
        if (!note) return [];

        var text = String(note);
        var windows = [];

        // Die Notiz kann mehrere Angaben tragen, getrennt durch
        // Komma, Semikolon oder "&". Tage stehen dabei oft in einer
        // eigenen Teilangabe ("Mo, Di, Do, Fr 08-11 Uhr") - sie
        // werden deshalb mitgefuehrt, bis eine Uhrzeit folgt.
        var parts = text.split(/[;,]|\s&\s/);
        var pending = [];
        var lastDays = null;
        var i, j;

        for (i = 0; i < parts.length; i++) {
            var part = parts[i];
            var days = parseDays(part);

            if (!/\d/.test(part) || !/uhr|\d{1,2}\s*[-\u2013]\s*\d{1,2}|[:.]\d{2}/i.test(part)) {
                // Keine Uhrzeit in diesem Stueck: Tage vormerken.
                for (j = 0; j < days.length; j++) {
                    if (pending.indexOf(days[j]) === -1) pending.push(days[j]);
                }
                continue;
            }

            var useDays = days.slice();
            for (j = 0; j < pending.length; j++) {
                if (useDays.indexOf(pending[j]) === -1) useDays.push(pending[j]);
            }

            // Fortsetzung derselben Angabe: "Di 08-12 & 13-17:30 Uhr"
            // - der zweite Teil traegt die Tage des ersten.
            if (!useDays.length && lastDays) useDays = lastDays.slice();

            // Ohne ausdrueckliche Tagesangabe wird nichts behauptet.
            if (!useDays.length) continue;
            pending = [];
            useDays.sort(function(a, b) {
                // Montag zuerst, Sonntag zuletzt - so wird es gelesen.
                return ((a + 6) % 7) - ((b + 6) % 7);
            });
            lastDays = useDays;

            // "08-09", "07:30-08:30 Uhr", "09-11:30"
            var rangeRe = /(\d{1,2}(?:[:.]\d{2})?)\s*[-\u2013]\s*(\d{1,2}(?:[:.]\d{2})?)/g;
            var r;
            var found = false;

            while ((r = rangeRe.exec(part)) !== null) {
                var from = parseClock(r[1]);
                var to = parseClock(r[2]);
                if (from === null || to === null || to <= from) continue;
                windows.push({ days: useDays, from: from, to: to });
                found = true;
            }

            if (found) continue;

            // "bis 15:30 Uhr" / "ab 19:30 Uhr" - nur mit Tagesangabe.
            var until = /\bbis\s+(\d{1,2}(?:[:.]\d{2})?)\s*uhr/i.exec(part);
            if (until) {
                var t = parseClock(until[1]);
                if (t !== null) windows.push({ days: useDays, from: 0, to: t });
                continue;
            }

            var from2 = /\bab\s+(\d{1,2}(?:[:.]\d{2})?)\s*uhr/i.exec(part);
            if (from2) {
                var f = parseClock(from2[1]);
                if (f !== null) windows.push({ days: useDays, from: f, to: 24 * 60 });
            }
        }

        return windows;
    }

    /** Gilt eines der Fenster gerade? Sonst: wann das naechste beginnt. */
    function shiftStatus(windows, now) {
        if (!windows.length) return null;

        var day = now.getDay();
        var minute = now.getHours() * 60 + now.getMinutes();
        var i, w;

        for (i = 0; i < windows.length; i++) {
            w = windows[i];
            if (w.days.indexOf(day) === -1) continue;
            if (minute >= w.from && minute < w.to) {
                return { now: true, until: w.to };
            }
        }

        // Naechstes Fenster innerhalb der kommenden sieben Tage
        var best = null;
        for (var ahead = 0; ahead < 8; ahead++) {
            var d = (day + ahead) % 7;
            for (i = 0; i < windows.length; i++) {
                w = windows[i];
                if (w.days.indexOf(d) === -1) continue;
                if (ahead === 0 && w.from <= minute) continue;
                var score = ahead * 1440 + w.from;
                if (!best || score < best.score) {
                    best = { score: score, day: d, from: w.from, ahead: ahead };
                }
            }
            if (best) break;
        }

        return { now: false, next: best };
    }

    function clockText(minutes) {
        var h = Math.floor(minutes / 60);
        var m = minutes % 60;
        return (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m;
    }

    function shiftBadge(status) {
        if (!status) return '';

        if (status.now) {
            return '<span class="dir-shift dir-shift-now">' +
                '<i class="fa-solid fa-clock" aria-hidden="true"></i> bis ' +
                App.esc(clockText(status.until)) + '</span>';
        }

        if (status.next) {
            var label = status.next.ahead === 0
                ? 'ab ' + clockText(status.next.from)
                : (status.next.ahead === 1 ? 'morgen ' : DAY_NAMES[status.next.day] + ' ')
                    + clockText(status.next.from);
            return '<span class="dir-shift dir-shift-off">' +
                '<i class="fa-solid fa-clock" aria-hidden="true"></i> ' + App.esc(label) + '</span>';
        }

        return '';
    }

    // ---------- Aufbau ----------
    var dirOnlyNow = false;

    App.rDir = function(q, animate) {
        if (!E.dirBody) return;

        q = (q || '').toLowerCase().trim();
        var forms = q ? App.queryForms(q) : null;
        var now = new Date();

        var html = '';
        var hits = 0;
        var hidden = 0;

        for (var g = 0; g < PHONE_DIR.length; g++) {
            var grp = PHONE_DIR[g];
            var rows = '';

            for (var i = 0; i < grp.items.length; i++) {
                var it = grp.items[i];
                var hay = App.fold(it.name + ' ' + it.tel + ' ' + it.note + ' ' + grp.group);
                if (forms && !App.containsAny(hay, forms)) continue;

                var windows = parseWindows(it.note);
                var status = shiftStatus(windows, now);

                if (dirOnlyNow && status && !status.now) { hidden++; continue; }

                hits++;

                var dialable = /^[0-9 +\/-]+$/.test(it.tel) && /\d{3}/.test(it.tel);
                var firstNumber = (it.tel.match(/[0-9][0-9 ]*[0-9]|\d/) || [''])[0].replace(/\s/g, '');

                rows += '<li>' +
                    '<button type="button" class="dir-row' +
                    (status && !status.now ? ' is-off' : '') +
                    '" data-tel="' + App.escAttr(it.tel) + '" title="Nummer kopieren">' +
                    '<span class="dir-row-main">' +
                    '<span class="dir-name">' + App.hl(it.name, q) + shiftBadge(status) + '</span>' +
                    (it.note ? '<span class="dir-note">' + App.hl(it.note, q) + '</span>' : '') +
                    '</span>' +
                    '<span class="dir-tel">' + App.hl(it.tel, q) +
                    '<i class="fa-solid fa-copy dir-copy" aria-hidden="true"></i></span>' +
                    '</button>' +
                    (dialable
                        ? '<a class="dir-call" href="tel:' + App.escAttr(firstNumber) +
                          '" aria-label="' + App.escAttr(it.name) + ' anrufen">' +
                          '<i class="fa-solid fa-phone" aria-hidden="true"></i></a>'
                        : '') +
                    '</li>';
            }

            if (!rows) continue;
            html += '<section class="dir-group" id="dir-group-' + g + '">' +
                '<h4><i class="fa-solid ' + grp.icon + '" aria-hidden="true"></i>' + App.esc(grp.group) + '</h4>' +
                '<ul class="dir-rows">' + rows + '</ul></section>';
        }

        if (!hits) {
            html = '<div class="dir-empty"><i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>' +
                '<p>Kein Eintrag gefunden' +
                (hidden ? ' – ' + hidden + ' außerhalb der Dienstzeit ausgeblendet' : '') +
                '</p></div>';
        }

        E.dirBody.innerHTML = html;
        E.dirBody.classList.toggle('dir-enter', !!animate);

        var count = document.getElementById('dirCount');
        if (count) {
            count.textContent = hits + (hits === 1 ? ' Kontakt' : ' Kontakte')
                + (hidden ? ' · ' + hidden + ' ausgeblendet' : '');
        }

        var groups = E.dirBody.querySelectorAll('.dir-group');
        for (var k = 0; k < groups.length; k++) {
            groups[k].style.setProperty('--stagger', (Math.min(k, 8) * 45) + 'ms');
        }

        App.delegate(E.dirBody, '.dir-row', function(row) {
            copyPhoneNumber(row.getAttribute('data-tel'), row);
        });

        renderDirJump(now);
    };

    /** Sprungleiste ueber den Gruppen plus Filter "jetzt erreichbar". */
    function renderDirJump(now) {
        var host = E.dirJump || document.getElementById('dirJump');
        if (!host) return;
        E.dirJump = host;

        var html = '<button type="button" class="dir-jump-chip' + (dirOnlyNow ? ' is-on' : '') +
            '" data-only-now="1" aria-pressed="' + dirOnlyNow + '">' +
            '<i class="fa-solid fa-clock" aria-hidden="true"></i> Jetzt erreichbar</button>';

        var groups = E.dirBody.querySelectorAll('.dir-group');
        for (var i = 0; i < groups.length; i++) {
            var heading = groups[i].querySelector('h4');
            var label = heading ? (heading.textContent || '').trim() : '';
            // Der erste Bestandteil reicht als Sprungmarke.
            label = label.split(/[&(]/)[0].trim();
            html += '<button type="button" class="dir-jump-chip" data-jump="' +
                App.escAttr(groups[i].id) + '">' + App.esc(label) + '</button>';
        }

        host.innerHTML = html;

        App.delegate(host, '[data-jump]', function(chip) {
            var target = document.getElementById(chip.getAttribute('data-jump'));
            if (!target || !E.dirBody) return;
            App.smoothScrollTo(E.dirBody, target.offsetTop - 8);
        });

        App.delegate(host, '[data-only-now]', function() {
            dirOnlyNow = !dirOnlyNow;
            App.haptic('light');
            App.rDir(E.dirInput ? E.dirInput.value : '', true);
        });

        if (E.dirClock) {
            E.dirClock.textContent = DAY_NAMES[now.getDay()] + ' ' +
                now.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }) + ' Uhr';
        }
    }

    // Nummer in die Zwischenablage legen. Im Klinikbetrieb wird sie
    // meist am Stationstelefon gewaehlt - tel:-Links helfen dort nicht.
    function copyPhoneNumber(tel, row) {
        if (!tel) return;

        var done = function() {
            App.haptic('light');
            App.toast(tel + ' kopiert', 'fa-copy');
            if (row) {
                row.classList.add('is-copied');
                var icon = row.querySelector('.dir-copy');
                if (icon) icon.className = 'fa-solid fa-check dir-copy';
                if (row._copyTimer) clearTimeout(row._copyTimer);
                row._copyTimer = setTimeout(function() {
                    row.classList.remove('is-copied');
                    if (icon) icon.className = 'fa-solid fa-copy dir-copy';
                }, 1600);
            }
        };
        var failed = function() {
            App.toast(tel, 'fa-phone');
        };

        App.copyText(tel, done, failed);
    }
    App.copyPhoneNumber = copyPhoneNumber;

    /**
     * Text in die Zwischenablage legen - mit Rueckfall fuer Browser
     * ohne Clipboard-API (aeltere Stationsrechner, http im Intranet).
     */
    App.copyText = function(text, done, failed) {
        done = done || function() {};
        failed = failed || function() {};

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(done, function() { legacyCopy(); });
            return;
        }
        legacyCopy();

        function legacyCopy() {
            try {
                var ta = document.createElement('textarea');
                ta.value = text;
                ta.setAttribute('readonly', '');
                ta.style.cssText = 'position:fixed;top:-1000px;opacity:0;';
                document.body.appendChild(ta);
                ta.select();
                var ok = document.execCommand('copy');
                document.body.removeChild(ta);
                if (ok) done(); else failed();
            } catch (e) {
                failed();
            }
        }
    };

    App.openDir = function() {
        if (!E.dirOverlay || E.dirOverlay.classList.contains('show')) return;

        var modal = E.dirOverlay.querySelector('.dir-modal');
        pushOverlay(E.dirOverlay, modal);
        App.rDir(E.dirInput ? E.dirInput.value : '', true);
        E.dirOverlay.classList.add('show');
        App.haptic('light');

        setTimeout(function() {
            var root = topOverlayRoot();
            if (E.dirInput && window.innerWidth >= 900 && root && E.dirOverlay.contains(root)) {
                E.dirInput.focus();
            }
        }, 250);
    };

    App.closeDir = function() {
        if (!E.dirOverlay || !E.dirOverlay.classList.contains('show')) return;
        E.dirOverlay.classList.remove('show');
        popOverlay(E.dirOverlay);
    };

    registerCloser(function() { return E.dirOverlay; }, function() { App.closeDir(); });

    // ============================================
    // ABBILDUNG IN VOLLER GROESSE
    // ============================================
    // Schichtplaene und Organigramm sind auf dem Telefon in
    // Spaltenbreite nicht lesbar. Die Abbildung oeffnet deshalb in
    // einer eigenen Flaeche in Originalgroesse - waagerecht und
    // senkrecht scrollbar, mit der Zoomgeste des Geraets.
    App.openFigure = function(src, alt, caption) {
        var ov = document.getElementById('figOverlay');
        if (!ov || !src || ov.classList.contains('show')) return;

        var img = document.getElementById('figOverlayImg');
        var cap = document.getElementById('figOverlayCaption');
        var fit = document.getElementById('figOverlayFit');
        var stage = document.getElementById('figOverlayStage');

        img.src = src;
        img.alt = alt || '';
        cap.textContent = caption || '';
        stage.classList.add('is-fit');
        if (fit) {
            fit.setAttribute('aria-pressed', 'true');
            fit.querySelector('span').textContent = 'Originalgröße';
        }

        pushOverlay(ov, ov.querySelector('.fig-modal'));
        ov.classList.add('show');
        App.haptic('light');

        setTimeout(function() {
            var close = document.getElementById('figOverlayClose');
            if (close && topOverlayRoot() === ov.querySelector('.fig-modal')) close.focus();
        }, App.MOTION.reduced ? 0 : 200);
    };

    App.closeFigure = function() {
        var ov = document.getElementById('figOverlay');
        if (!ov || !ov.classList.contains('show')) return;
        ov.classList.remove('show');
        popOverlay(ov);
    };

    App.initFigureOverlay = function() {
        var ov = document.getElementById('figOverlay');
        if (!ov) return;

        var stage = document.getElementById('figOverlayStage');
        var fit = document.getElementById('figOverlayFit');

        document.getElementById('figOverlayClose').addEventListener('click', App.closeFigure);
        document.getElementById('figOverlayBackdrop').addEventListener('click', App.closeFigure);

        // Einpassen <-> Originalgroesse
        if (fit) {
            fit.addEventListener('click', function() {
                var fitted = stage.classList.toggle('is-fit');
                fit.setAttribute('aria-pressed', fitted ? 'true' : 'false');
                fit.querySelector('span').textContent = fitted ? 'Originalgröße' : 'Einpassen';
                App.haptic('light');
            });
        }

        // Jede Abbildung - in SOPs wie in Statuten - oeffnet hier.
        document.addEventListener('click', function(e) {
            var trigger = e.target && e.target.closest ? e.target.closest('[data-figure-zoom]') : null;
            if (!trigger) return;
            e.preventDefault();
            var fig = trigger.closest('figure');
            var img = fig ? fig.querySelector('img') : null;
            if (!img) return;
            var cap = fig.querySelector('figcaption span');
            App.openFigure(img.getAttribute('src'), img.getAttribute('alt'), cap ? cap.textContent : '');
        });
    };

    registerCloser(function() { return document.getElementById('figOverlay'); }, function() { App.closeFigure(); });

    // Fuer die Sichtpruefung und die Dokumentation zugaenglich machen.
    App.parseShiftWindows = parseWindows;
    App.shiftStatus = shiftStatus;

})(window.SOPApp);
