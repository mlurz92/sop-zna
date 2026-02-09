var CACHE_NAME = 'sop-notaufnahme-v20260209c';

var ASSETS_TO_CACHE = [
    './',
    './index.html',
    './styles.css',
    './app.js',
    './sops/abdominelle-schmerzen.js',
    './sops/aecopd.js',
    './sops/akute-alkoholintoxikation.js',
    './sops/akute-divertikulitis.js',
    './sops/akute-gastroenteritis.js',
    './sops/akute-herzinsuffizienz.js',
    './sops/akute-intoxikation.js',
    './sops/akute-mesenterialischaemie.js',
    './sops/akute-nebenniereninsuffizienz.js',
    './sops/akute-nierenschaedigung.js',
    './sops/akute-pankreatitis.js',
    './sops/akuter-gichtanfall.js',
    './sops/akuter-harnverhalt.js',
    './sops/akutes-aortensyndrom.js',
    './sops/anaemie.js',
    './sops/anaphylaxie.js',
    './sops/asthmaexazerbation.js',
    './sops/bakterielle-meningitis.js',
    './sops/bradykarde-hrst.js',
    './sops/cannabinoid-hyperemesis-syndrom.js',
    './sops/delir.js',
    './sops/diabetische-ketoazidose.js',
    './sops/dyspnoe.js',
    './sops/erbrechen.js',
    './sops/erysipel.js',
    './sops/fieber-in-der-neutropenie.js',
    './sops/fremdkoerperingestion.js',
    './sops/harnwegsinfektion.js',
    './sops/heparininduzierte-thrombozytopenie.js',
    './sops/hepatische-enzephalopathie.js',
    './sops/herz-kreislauf-stillstand.js',
    './sops/hitzschlag.js',
    './sops/hyperkaliaemie.js',
    './sops/hyperkalzaemie.js',
    './sops/hypernatriaemie.js',
    './sops/hyperosmolares-hyperglykaemisches-syndrom.js',
    './sops/hypertensiver-notfall.js',
    './sops/hypoglykaemie.js',
    './sops/hypokaliaemie.js',
    './sops/hypokalzaemie.js',
    './sops/hyponatriaemie.js',
    './sops/ikterus.js',
    './sops/kohlenmonoxidintoxikation.js',
    './sops/kopfschmerzen.js',
    './sops/lungenarterienembolie.js',
    './sops/myxoedemkoma.js',
    './sops/nicht-st-hebungsinfarkt.js',
    './sops/nierenkolik.js',
    './sops/obere-gastrointestinale-blutung.js',
    './sops/oesophageale-bolusimpaktion.js',
    './sops/pleuraerguss.js',
    './sops/pneumonie.js',
    './sops/schock.js',
    './sops/sepsis.js',
    './sops/spontan-bakterielle-peritonitis.js',
    './sops/st-hebungsinfarkt.js',
    './sops/status-epilepticus.js',
    './sops/sterbephase-palliativ.js',
    './sops/stromunfall.js',
    './sops/synkope.js',
    './sops/tachykarde-hrst.js',
    './sops/thoraxschmerzen.js',
    './sops/thrombozytopenie.js',
    './sops/tiefe-venenthrombose.js',
    './sops/tonsillitis.js',
    './sops/transiente-globale-amnesie.js',
    './sops/tumorlysesyndrom.js',
    './sops/unklare-vigilanzminderung.js',
    './sops/untere-gastrointestinale-blutung.js',
    './sops/vena-cava-superior-syndrom.js',
    './sops/vorhofflimmern.js',
    './sops/zerebrale-metastasen.js',
    './sops/zerebrale-venen-sinusthrombose.js'
];

// Install-Event: Cache befüllen und sofort aktivieren
self.addEventListener('install', function(event) {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// Activate-Event: Alte Caches löschen und sofort übernehmen
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(function(key) {
                    return key !== CACHE_NAME;
                }).map(function(key) {
                    console.log('[Service Worker] Lösche alten Cache:', key);
                    return caches.delete(key);
                })
            );
        }).then(function() {
            console.log('[Service Worker] Aktiviert und übernimmt Kontrolle');
            return self.clients.claim();
        })
    );
});

// Fetch-Event: Network-First Strategie
self.addEventListener('fetch', function(event) {
    var url = event.request.url;

    // Nur GET-Requests behandeln
    if (event.request.method !== 'GET') return;
    // Nur http/https Requests
    if (url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0) return;
    // Chrome-Extensions ignorieren
    if (url.indexOf('chrome-extension') !== -1) return;
    if (url.indexOf('extensions') !== -1) return;

    event.respondWith(
        // NETWORK-FIRST: Erst versuchen, vom Netzwerk zu laden
        fetch(event.request)
            .then(function(networkResponse) {
                // Bei erfolgreichem Netzwerk-Request: Cache aktualisieren
                if (networkResponse && networkResponse.status === 200) {
                    var responseClone = networkResponse.clone();
                    caches.open(CACHE_NAME).then(function(cache) {
                        cache.put(event.request, responseClone);
                    });
                }
                return networkResponse;
            })
            .catch(function(error) {
                // NETZWERK-FEHLER: Fallback auf Cache
                console.log('[Service Worker] Netzwerk nicht verfügbar, nutze Cache:', event.request.url);
                return caches.match(event.request).then(function(cachedResponse) {
                    if (cachedResponse) {
                        return cachedResponse;
                    }
                    // Wenn auch kein Cache-Eintrag existiert, Fehler zurückgeben
                    return new Response('Offline und nicht im Cache verfügbar', {
                        status: 503,
                        statusText: 'Service Unavailable'
                    });
                });
            })
    );
});

// Automatische Update-Prüfung bei Online-Verbindung
self.addEventListener('message', function(event) {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

// Periodische Update-Prüfung (wenn Browser es unterstützt)
self.addEventListener('sync', function(event) {
    if (event.tag === 'check-updates') {
        event.waitUntil(checkForUpdates());
    }
});

// Hilfsfunktion: Auf Updates prüfen
function checkForUpdates() {
    return fetch('./sw.js', { cache: 'no-store' })
        .then(function(response) {
            if (response.ok) {
                console.log('[Service Worker] Update-Prüfung durchgeführt');
            }
        })
        .catch(function() {
            console.log('[Service Worker] Update-Prüfung fehlgeschlagen (offline)');
        });
}
