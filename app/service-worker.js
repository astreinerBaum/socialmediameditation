// Installing service worker
const CACHE_NAME = "Social-Media-Meditation";

/* Add relative URL of all the static content you want to store in
 * cache storage (this will help us use our app offline)*/
let resourcesToCache = [
  "./index.html",
  "./scroll.js",
  "./audio/SMMLesson1.m4a",
  "./audio/SMMLesson1.ogg",
  "./css/normalize.css",
  "./css/style.css",
  "./video/scrolling_loop_HQ.mp4",
  "./video/smm-preview.jpg",
  "./font/style.css",
  "./font/WorkSans-Medium.ttf",
  "./font/WorkSans-Medium.woff",
  "./font/WorkSans-Medium.woff2",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(resourcesToCache);
    })
  );
});

// Cache and return requests
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});

// Update a service worker
const cacheWhitelist = ["Social-Media-Meditation"];
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
