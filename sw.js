const CACHE_NAME = "calculadora-v2";

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  // NÃO intercepta requisições externas (API)
  if (!event.request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
