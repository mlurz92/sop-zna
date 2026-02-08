const CACHE_NAME = 'sop-notaufnahme-v20260208';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './sop-data-1.js',
  './sop-data-2.js',
  './sop-data-3.js',
  './sop-data-4.js'
];

// Install Event: Cache core assets immediately
self.addEventListener('install', (event) => {
  self.skipWaiting(); // Force activation immediately
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Activate Event: Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim()) // Take control of all clients immediately
  );
});

// Fetch Event: Stale-While-Revalidate Strategy
// This serves content from cache for speed, but updates cache from network in background
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests and cross-origin requests (like FontAwesome for now, unless configured)
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        
        // Fetch from network to update the cache for next time
        const networkFetch = fetch(event.request).then((networkResponse) => {
          // Check if we received a valid response
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }

          // IMPORTANT: Clone the response. A response is a stream
          // and because we want the browser to consume the response
          // as well as the cache consuming the response, we need
          // to clone it so we have two streams.
          const responseToCache = networkResponse.clone();

          cache.put(event.request, responseToCache);
          return networkResponse;
        }).catch(() => {
          // Network failed, nothing to do here (we rely on cache)
        });

        // Return cached response if available, otherwise wait for network
        return cachedResponse || networkFetch;
      });
    })
  );
});