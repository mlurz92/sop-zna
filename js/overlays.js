/* ============================================================
   overlays.js - Spotlight, Inhaltsverzeichnis, Telefonverzeichnis
   ------------------------------------------------------------
   Alle Overlays bleiben im DOM und werden ueber visibility,
   opacity und transform ein- und ausgeblendet. Ein Wechsel der
   display-Eigenschaft wuerde jede CSS-Transition unterbinden.
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

        // Liegt der Fokus auf dem Blatt selbst (so wird ein Overlay
        // geoeffnet), fuehrt Tab nach vorn und Umschalt+Tab nach hinten.
        if (active === root) {
            e.preventDefault();
            (e.shiftKey ? last : first).focus();
            return;
        }

        if (e.shiftKey && (active === first || !root.contains(active))) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && active === last) {
            e.preventDefault();
            first.focus();
        }
    };

    // Das oberste offene Overlay schliessen. Gibt true zurueck,
    // wenn tatsaechlich eines geschlossen wurde.
    App.closeTopOverlay = function() {
        if (E.dirOverlay && E.dirOverlay.classList.contains('show')) { App.closeDir(); return true; }
        if (E.spotlightOverlay && E.spotlightOverlay.classList.contains('show')) { App.closeSpotlight(); return true; }
        if (E.sectionPickerOverlay && E.sectionPickerOverlay.classList.contains('show')) { App.closePicker(); return true; }
        return false;
    };

    App.closeAllOverlays = function() {
        while (App.closeTopOverlay()) { /* bis keines mehr offen ist */ }
    };

    // ============================================
    // SPOTLIGHT
    // ============================================
    var spotIndex = -1;

    App.openSpotlight = function() {
        if (!E.spotlightOverlay || E.spotlightOverlay.classList.contains('show')) return;

        pushOverlay(E.spotlightOverlay, E.spotlightContainer);
        E.spotlightOverlay.classList.add('show');
        App.haptic('light');

        // Fokus erst setzen, wenn die Einblendbewegung laeuft - sonst
        // springt die Tastatur vor der Animation ins Bild.
        setTimeout(function() {
            if (!E.spotlightInput) return;
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

    App.renderSpotlightResults = function() {
        if (!E.spotlightResults) return;

        var query = S.spotQ.trim();
        var container = E.spotlightResults;

        spotIndex = -1;

        if (E.spotlightInput) E.spotlightInput.setAttribute('aria-activedescendant', '');

        if (!query) {
            container.innerHTML = '<div class="spotlight-empty">' +
                '<i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>' +
                '<p>Namen eines Patientenpfads eingeben</p></div>';
            return;
        }

        var q = query.toLowerCase();
        var hits = [];
        for (var i = 0; i < S.data.length; i++) {
            var name = (S.data[i].name || '').toLowerCase();
            var pos = name.indexOf(q);
            if (pos === -1) continue;
            hits.push({ sop: S.data[i], pos: pos });
        }

        // Treffer am Wortanfang zuerst
        hits.sort(function(a, b) {
            if (a.pos !== b.pos) return a.pos - b.pos;
            return (a.sop.name || '').localeCompare(b.sop.name || '', 'de');
        });

        var html = '';
        var max = Math.min(hits.length, 10);

        for (var j = 0; j < max; j++) {
            var d = hits[j].sop;
            var cl = App.gc(d.category);

            html += '<button type="button" class="spotlight-result" id="spot-opt-' + j + '" data-id="' +
                App.escAttr(d.id) + '" role="option" aria-selected="false">' +
                '<span class="spotlight-result-icon" style="background:' + cl + ';color:#fff">' +
                '<i class="fa-solid ' + App.catIcon(d.category) + '" aria-hidden="true"></i></span>' +
                '<span class="spotlight-result-info">' +
                '<span class="spotlight-result-name">' + App.sopName(d, query) + '</span>' +
                '<span class="spotlight-result-cat">' + App.esc(App.catName(d.category)) + '</span>' +
                '</span>' +
                '<i class="fa-solid fa-chevron-right" aria-hidden="true"></i></button>';
        }

        // Immer erreichbar: die Volltextsuche ueber alle Abschnitte
        html += '<button type="button" class="spotlight-result spotlight-fulltext" id="spot-opt-' + max +
            '" data-fulltext="1" role="option" aria-selected="false">' +
            '<span class="spotlight-result-icon" style="background:var(--primary);color:#fff">' +
            '<i class="fa-solid fa-file-lines" aria-hidden="true"></i></span>' +
            '<span class="spotlight-result-info">' +
            '<span class="spotlight-result-name">Volltextsuche nach &bdquo;' + App.esc(query) + '&ldquo;</span>' +
            '<span class="spotlight-result-cat">Alle Abschnitte durchsuchen</span>' +
            '</span>' +
            '<i class="fa-solid fa-chevron-right" aria-hidden="true"></i></button>';

        if (!hits.length) {
            html = '<div class="spotlight-empty"><i class="fa-solid fa-circle-xmark" aria-hidden="true"></i>' +
                '<p>Kein Patientenpfad mit diesem Namen</p></div>' + html;
        }

        container.innerHTML = html;

        App.delegate(container, '.spotlight-result', activateSpotlightItem);
        App.applyStagger(container.querySelectorAll('.spotlight-result'), 'stagger-item-x');
        highlightSpotlight(0);
    };

    function activateSpotlightItem(item) {
        if (!item) return;

        if (item.getAttribute('data-fulltext')) {
            var q = S.spotQ;
            App.closeSpotlight();
            S.sQ = q;
            if (E.searchViewInput) E.searchViewInput.value = q;
            if (E.searchViewClear) E.searchViewClear.classList.toggle('show', q.length > 0);
            App.sTab('search', 'fade');
            return;
        }

        var id = item.getAttribute('data-id');
        App.closeSpotlight();
        App.pushNav(id);
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

    // Pfeiltasten und Eingabetaste im Spotlight
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

        var cl = App.gc(d.category);
        var html = '';
        var i;

        if (d.sections) {
            for (i = 0; i < d.sections.length; i++) {
                var title = d.sections[i].title || ('Abschnitt ' + (i + 1));
                html += '<li data-idx="' + i + '" tabindex="0" role="button">' +
                    '<i class="fa-solid ' + (App.SIC[title] || 'fa-circle-info') + '" style="color:' + cl + '" aria-hidden="true"></i> ' +
                    App.esc(title) + '</li>';
            }
        }

        if (d.sources) {
            html += '<li data-idx="sources" tabindex="0" role="button">' +
                '<i class="fa-solid fa-quote-right" style="color:' + cl + '" aria-hidden="true"></i> Quellen</li>';
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
    };

    App.openPicker = function() {
        if (!E.sectionPickerOverlay || E.sectionPickerOverlay.classList.contains('show')) return;

        pushOverlay(E.sectionPickerOverlay, E.pickerSheet);
        E.sectionPickerOverlay.classList.add('show');
        App.haptic('light');

        setTimeout(function() {
            if (E.pickerSheet) E.pickerSheet.focus();
        }, App.MOTION.reduced ? 0 : 280);
    };

    App.closePicker = function() {
        if (!E.sectionPickerOverlay || !E.sectionPickerOverlay.classList.contains('show')) return;

        E.sectionPickerOverlay.classList.remove('show');
        if (E.pickerSheet) E.pickerSheet.style.transform = '';
        popOverlay(E.sectionPickerOverlay);
    };

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

    App.rDir = function(q) {
        if (!E.dirBody) return;

        q = (q || '').toLowerCase().trim();
        var html = '';
        var hits = 0;

        for (var g = 0; g < PHONE_DIR.length; g++) {
            var grp = PHONE_DIR[g];
            var rows = '';

            for (var i = 0; i < grp.items.length; i++) {
                var it = grp.items[i];
                var hay = (it.name + ' ' + it.tel + ' ' + it.note + ' ' + grp.group).toLowerCase();
                if (q && hay.indexOf(q) === -1) continue;
                hits++;

                rows += '<li><button type="button" class="dir-row" data-tel="' + App.escAttr(it.tel) +
                    '" title="Nummer kopieren">' +
                    '<span class="dir-row-main">' +
                    '<span class="dir-name">' + App.hl(App.esc(it.name), q) + '</span>' +
                    (it.note ? '<span class="dir-note">' + App.hl(App.esc(it.note), q) + '</span>' : '') +
                    '</span>' +
                    '<span class="dir-tel">' + App.hl(App.esc(it.tel), q) +
                    '<i class="fa-solid fa-copy dir-copy" aria-hidden="true"></i></span>' +
                    '</button></li>';
            }

            if (!rows) continue;
            html += '<section class="dir-group">' +
                '<h4><i class="fa-solid ' + grp.icon + '" aria-hidden="true"></i>' + App.esc(grp.group) + '</h4>' +
                '<ul class="dir-rows">' + rows + '</ul></section>';
        }

        if (!hits) {
            html = '<div class="dir-empty"><i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>' +
                '<p>Kein Eintrag gefunden</p></div>';
        }

        E.dirBody.innerHTML = html;

        var groups = E.dirBody.querySelectorAll('.dir-group');
        for (var k = 0; k < groups.length; k++) {
            groups[k].style.setProperty('--stagger', (Math.min(k, 8) * 45) + 'ms');
        }

        App.delegate(E.dirBody, '.dir-row', function(row) {
            copyPhoneNumber(row.getAttribute('data-tel'));
        });
    };

    // Nummer in die Zwischenablage legen. Im Klinikbetrieb wird sie
    // meist am Stationstelefon gewaehlt - tel:-Links helfen dort nicht.
    function copyPhoneNumber(tel) {
        if (!tel) return;

        var done = function() {
            App.haptic('light');
            App.toast(tel + ' kopiert', 'fa-copy');
        };
        var failed = function() {
            App.toast(tel, 'fa-phone');
        };

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(tel).then(done, failed);
            return;
        }

        try {
            var ta = document.createElement('textarea');
            ta.value = tel;
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

    App.openDir = function() {
        if (!E.dirOverlay || E.dirOverlay.classList.contains('show')) return;

        pushOverlay(E.dirOverlay, E.dirOverlay.querySelector('.dir-modal'));
        App.rDir(E.dirInput ? E.dirInput.value : '');
        E.dirOverlay.classList.add('show');
        App.haptic('light');

        setTimeout(function() {
            if (E.dirInput && window.innerWidth >= 900) E.dirInput.focus();
        }, 250);
    };

    App.closeDir = function() {
        if (!E.dirOverlay || !E.dirOverlay.classList.contains('show')) return;
        E.dirOverlay.classList.remove('show');
        popOverlay(E.dirOverlay);
    };

})(window.SOPApp);
