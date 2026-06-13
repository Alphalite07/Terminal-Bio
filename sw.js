self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('asciify-store').then((cache) => cache.addAll([
      './index.html',
      'https://cdn.jsdelivr.net/npm/gifuct-js@2.1.2/dist/gifuct-js.min.js'
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((response) => response || fetch(e.request)));
});
