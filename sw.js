/**
 * Service Worker für SOP-Notaufnahme
 * 
 * PRIORITÄT: SOFORTIGE UPDATES > OFFLINE-FUNKTIONALITÄT
 * 
 * Strategie:
 * - Bilder: Network-Only (niemals cachen)
 * - HTML/JS/CSS: Network-First mit sofortigem Cache-Update
 * - Nur bei Offline: Fallback auf Cache
 */

var CACHE_NAME = 'sop-notaufnahme-v20260209f';

// Dateien für Offline-Fallback (nur essentielle Dateien, keine Bilder!)
var OFFLINE_FALLBACK = [
    './',
    './index.html',
    './styles.css',
    './app.js'
];

// Dateitypen die NIEMALS gecached werden sollen
var NEVER_CACHE_PATTERNS = [
    /\.(png|jpg|jpeg|svg|gif|webp|ico|bmp|tiff?|avif)$/i,
    /\.(mp4|webm|ogg|mp3|wav|flac)$/i,
    /\.(woff2?|ttf|otf|eot)$/i
];

// Prüfen ob URL niemals gecached werden soll
function shouldNeverCache(url) {
    for (var i = 0; i < NEVER_CACHE_PATTERNS.length; i++) {
        if (NEVER_CACHE_PATTERNS[i].test(url)) {
            return true;
        }
    }
    return false;
}

// Install-Event: Sofort aktivieren ohne auf Cache zu warten
self.addEventListener('install', function(event) {
    // SOFORT skipWaiting - keine Wartezeit
    self.skipWaiting();
    
    // Cache im Hintergrund befüllen (non-blocking)
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            // Fallback-Dateien vor-cachen, aber nicht blockieren
            return Promise.allSettled(
                OFFLINE_FALLBACK.map(function(url) {
                    return cache.add(url).catch(function(err) {
                        console.log('[SW] Konnte nicht cachen:', url, err);
                    });
                })
            );
        })
    );
});

// Activate-Event: ALTE CACHES SOFORT LÖSCHEN
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            var deletePromises = cacheNames.map(function(key) {
                if (key !== CACHE_NAME) {
                    console.log('[SW] Lösche veralteten Cache:', key);
                    return caches.delete(key);
                }
                return Promise.resolve();
            });
            
            return Promise.all(deletePromises);
        }).then(function() {
            console.log('[SW] Aktiviert - Cache:', CACHE_NAME);
            // SOFORT alle Clients übernehmen
            return self.clients.claim();
        }).then(function() {
            // Alle Clients benachrichtigen, dass neuer SW aktiv ist
            return self.clients.matchAll().then(function(clients) {
                clients.forEach(function(client) {
                    client.postMessage({
                        type: 'SW_ACTIVATED',
                        cacheVersion: CACHE_NAME
                    });
                });
            });
        })
    );
});

// Fetch-Event: Network-First mit intelligenter Caching-Strategie
self.addEventListener('fetch', function(event) {
    var request = event.request;
    var url = request.url;

    // Nur GET-Requests behandeln
    if (request.method !== 'GET') return;
    
    // Nur http/https Requests
    if (url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0) return;
    
    // Chrome-Extensions und andere nicht-HTTP(S) Requests ignorieren
    if (url.indexOf('chrome-extension') !== -1) return;
    if (url.indexOf('extensions') !== -1) return;
    if (url.indexOf('about:') === 0) return;

    // BILDER und andere Medien: Network-Only (niemals cachen)
    if (shouldNeverCache(url)) {
        event.respondWith(
            fetch(request, { 
                cache: 'no-store',
                mode: 'cors'
            }).catch(function() {
                // Bei Offline: 404 zurückgeben statt Cache
                return new Response('Offline - Ressource nicht verfügbar', {
                    status: 503,
                    statusText: 'Service Unavailable',
                    headers: { 'Content-Type': 'text/plain' }
                });
            })
        );
        return;
    }

    // HTML/JS/CSS: NETWORK-FIRST mit sofortigem Cache-Update
    event.respondWith(
        // Erst vom Netzwerk laden
        fetch(request, { cache: 'no-store' })
            .then(function(networkResponse) {
                // Bei erfolgreichem Response: Cache aktualisieren
                if (networkResponse && (networkResponse.status === 200 || networkResponse.status === 0)) {
                    var responseClone = networkResponse.clone();
                    caches.open(CACHE_NAME).then(function(cache) {
                        cache.put(request, responseClone);
                    });
                }
                return networkResponse;
            })
            .catch(function(error) {
                // NETZWERK-FEHLER: Fallback auf Cache
                console.log('[SW] Netzwerk nicht verfügbar, nutze Cache:', url);
                
                return caches.match(request).then(function(cachedResponse) {
                    if (cachedResponse) {
                        return cachedResponse;
                    }
                    
                    // Wenn auch kein Cache-Eintrag: Offline-Seite oder Fehler
                    return new Response('Offline und nicht im Cache verfügbar', {
                        status: 503,
                        statusText: 'Service Unavailable',
                        headers: { 'Content-Type': 'text/plain' }
                    });
                });
            })
    );
});

// Message-Handler für manuelle Updates
self.addEventListener('message', function(event) {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        console.log('[SW] SKIP_WAITING empfangen');
        self.skipWaiting();
    }
    
    if (event.data && event.data.type === 'CHECK_UPDATE') {
        // Prüfen ob neuer SW verfügbar
        self.registration.update().catch(function() {
            // Ignorieren wenn offline
        });
    }
    
    if (event.data && event.data.type === 'GET_VERSION') {
        event.ports[0].postMessage({
            version: CACHE_NAME
        });
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
                console.log('[SW] Update-Prüfung durchgeführt');
            }
        })
        .catch(function() {
            console.log('[SW] Update-Prüfung fehlgeschlagen (offline)');
        });
}
