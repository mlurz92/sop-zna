var CACHE_NAME = 'sop-notaufnahme-v20260208d';

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
                cacheNames.filter(function(key) {
                    return key !== CACHE_NAME;
                }).map(function(key) {
                    return caches.delete(key);
                })
            );
        }).then(function() {
            return self.clients.claim();
        })
    );
});

self.addEventListener('fetch', function(event) {
    var url = event.request.url;

    if (event.request.method !== 'GET') return;
    if (url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0) return;
    if (url.indexOf('chrome-extension') !== -1) return;
    if (url.indexOf('extensions') !== -1) return;

    event.respondWith(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.match(event.request).then(function(cachedResponse) {
                var networkFetch = fetch(event.request).then(function(networkResponse) {
                    if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
                        try {
                            cache.put(event.request, networkResponse.clone());
                        } catch (e) {}
                    }
                    return networkResponse;
                }).catch(function() {
                    return cachedResponse;
                });
                return cachedResponse || networkFetch;
            });
        }).catch(function() {
            return fetch(event.request);
        })
    );
});