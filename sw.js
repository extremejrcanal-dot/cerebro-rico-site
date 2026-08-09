/* Cérebro Rico — service worker
   Estratégia: network-first com cache de reserva.
   Isso garante que suas edições em conteudo.js apareçam
   sem o usuário precisar limpar nada, e que o app abra
   mesmo sem internet. */

const CACHE = "cerebro-rico-v3";
const ESSENCIAIS = [
  "/app/",
  "/conteudo.js",
  "/config.js",
  "/manifest.json"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ESSENCIAIS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  if (!req.url.startsWith(self.location.origin)) return; // não intercepta Supabase/fontes

  e.respondWith(
    fetch(req)
      .then(resp => {
        const copia = resp.clone();
        caches.open(CACHE).then(c => c.put(req, copia));
        return resp;
      })
      .catch(() => caches.match(req).then(r => r || caches.match("/app/")))
  );
});
