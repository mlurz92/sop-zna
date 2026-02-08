var CACHE_NAME = 'sop-notaufnahme-v20260208b';

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

self.addEventListener('install', function(event) {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(key) {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        }).then(function() {
            return self.clients.claim();
        })
    );
});

self.addEventListener('fetch', function(event) {
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.match(event.request).then(function(cachedResponse) {
                var networkFetch = fetch(event.request).then(function(networkResponse) {
                    if (networkResponse && networkResponse.status === 200) {
                        if (networkResponse.type === 'basic') {
                            cache.put(event.request, networkResponse.clone());
                        }
                    }
                    return networkResponse;
                }).catch(function() {
                    return cachedResponse;
                });
                return cachedResponse || networkFetch;
            });
        })
    );
});