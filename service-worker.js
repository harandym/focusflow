const CACHE_NAME = 'focusflow-v3';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './tailwind.min.js',
  './alpine.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[Service Worker] Caching core assets');
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      // Return cached version if found
      if (cached) return cached;
      
      // Otherwise fetch from network
      return fetch(event.request).then(response => {
        // Optionally cache new successful GET responses
        if (event.request.method === 'GET' && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(error => {
        // Fallback for page navigations when offline
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
        throw error;
      });
    })
  );
});
