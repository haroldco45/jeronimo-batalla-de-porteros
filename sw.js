// Service worker — Jerónimo · Batalla de Porteros 2026 (Vibras Positivas HM)
const CACHE = 'jeronimo-v1';
const SHELL = [
  './', 'index.html', 'manifest.json',
  'img/icon-192.png', 'img/icon-512.png', 'img/apple-touch-icon.png',
  'img/cuadro-batalla-de-porteros.jpg', 'img/poster-video.jpg',
  'img/poster-lenta-1.jpg', 'img/poster-lenta-2.jpg',
  'img/atajada-14-2.jpg', 'img/atajada-1-8.jpg', 'img/atajada-19-3.jpg', 'img/atajada-13-8.jpg',
  'fonts/barlow-latin-400-normal.woff2', 'fonts/barlow-latin-500-normal.woff2', 'fonts/barlow-latin-600-normal.woff2', 'fonts/barlow-latin-700-normal.woff2',
  'fonts/barlow-condensed-latin-600-normal.woff2', 'fonts/barlow-condensed-latin-800-normal.woff2', 'fonts/barlow-condensed-latin-900-normal.woff2', 'fonts/barlow-condensed-latin-800-italic.woff2'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Los videos van directo a la red (el navegador los pide por partes)
  if (url.pathname.endsWith('.mp4')) return;
  // Página: primero red, si no hay señal, la copia guardada
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(CACHE).then(ca => ca.put('index.html', c)); return r; }).catch(() => caches.match('index.html')));
    return;
  }
  // Fotos y demás: la copia guardada y se refresca por detrás
  e.respondWith(caches.match(req).then(hit => {
    const net = fetch(req).then(r => { if (r.ok && url.origin === location.origin) { const c = r.clone(); caches.open(CACHE).then(ca => ca.put(req, c)); } return r; }).catch(() => hit);
    return hit || net;
  }));
});
