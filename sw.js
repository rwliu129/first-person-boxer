// Pass-through service worker: it makes the game installable but caches nothing, so every visit gets the latest upload.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{ e.respondWith(fetch(e.request)); });
