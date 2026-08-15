// Minimal service worker: enables "Install App" on desktop/mobile without
// caching anything, so the no-cache headers on index.html keep working.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => { e.respondWith(fetch(e.request)); });
