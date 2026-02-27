const CACHE_NAME = "calculadora-cache-v2";

const urlsToCache = [
  "/calculadora/",
  "/calculadora/index.html",
  "/calculadora/manifest.json",
  "/calculadora/icone.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});