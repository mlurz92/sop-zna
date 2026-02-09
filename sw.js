var CACHE_NAME = 'sop-notaufnahme-v20260209a';

var ASSETS_TO_CACHE = [
    './',
    './index.html',
    './styles.css',
    './app.js',
    './sop-data-1.js',
    './sop-data-2.js',
    './sop-data-3.js',
    './sop-data-4.js'
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
