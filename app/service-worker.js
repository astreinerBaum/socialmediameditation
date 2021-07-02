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
  "./video/scrolling_loop.webm",
  "./video/scrolling_loop.mp4",
  "./video/smm-preview.jpg",
  "./font/style.css",
  "./font/WorkSans-Medium.ttf",
  "./font/WorkSans-Medium.woff",
  "./font/WorkSans-Medium.woff2",
  "./assets/apple-icon-180.png",
  "./assets/apple-splash-1125-2436.jpg",
  "./assets/apple-splash-1136-640.jpg",
  "./assets/apple-splash-1170-2532.jpg",
  "./assets/apple-splash-1242-2208.jpg",
  "./assets/apple-splash-1242-2688.jpg",
  "./assets/apple-splash-1284-2778.jpg",
  "./assets/apple-splash-1334-750.jpg",
  "./assets/apple-splash-1536-2048.jpg",
  "./assets/apple-splash-1620-2160.jpg",
  "./assets/apple-splash-1668-2224.jpg",
  "./assets/apple-splash-1668-2388.jpg",
  "./assets/apple-splash-1792-828.jpg",
  "./assets/apple-splash-2048-1536.jpg",
  "./assets/apple-splash-2048-2732.jpg",
  "./assets/apple-splash-2160-1620.jpg",
  "./assets/apple-splash-2208-1242.jpg",
  "./assets/apple-splash-2224-1668.jpg",
  "./assets/apple-splash-2388-1668.jpg",
  "./assets/apple-splash-2436-1125.jpg",
  "./assets/apple-splash-2532-1170.jpg",
  "./assets/apple-splash-2688-1242.jpg",
  "./assets/apple-splash-2732-2048.jpg",
  "./assets/apple-splash-2778-1284.jpg",
  "./assets/apple-splash-640-1136.jpg",
  "./assets/apple-splash-750-1334.jpg",
  "./assets/apple-splash-828-1792.jpg",
  "./assets/manifest-icon-192.png",
  "./assets/manifest-icon-512.png",
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
