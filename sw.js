const CACHE = "tqs-v1";
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(["/tqs-log/", "/tqs-log/index.html", "/tqs-log/manifest.json"])));
  self.skipWaiting();
});
self.addEventListener("activate", () => self.clients.claim());
self.addEventListener("fetch", (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
