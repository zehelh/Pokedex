self.addEventListener('install', e => {

  e.waitUntil(
      caches.open('pwa')
      .then(cache => {
          return cache.addAll([
              '/',
              '/serviceWorker.js',
              '/manifest.json',
              '/pokedex.png',
              '/index.html'
          ])
          .then(() =>self.skipWaiting())
      })
  )
})

self.addEventListener('activate', event => {

  event.waitUntil(self.clients.claim())

})

self.addEventListener('fetch', event => {

  event.respondWith(
      caches.match(event.request)
      .then(response => {
          return response || fetch(event.request)
      })
  )

})