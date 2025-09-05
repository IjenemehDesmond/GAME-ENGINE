self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("click-game-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "style.css",
        "game.js",
        "manifest.json",
        "C:\Users\hp\Desktop\SIMPLE--GAME\image-192.png/icon-192.png",
        "C:\Users\hp\Desktop\SIMPLE--GAME\image-512.png/icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

