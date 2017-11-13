const { assets } = global.serviceWorkerOption;
const CACHE_NAME = new Date().toISOString();
const DEBUG = true;

let assetsToCache = [...assets, './']

assetsToCache = assetsToCache.map(path => {
  return new URL(path, global.location).toString()
});

self.addEventListener('install', event => {
  // Perform install steps.
  if (DEBUG) {
    console.log('[SW] Install event')
  }

  // Add core website files to cache during serviceworker installation.
  event.waitUntil(
    global.caches
      .open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(assetsToCache)
      })
      .then(() => {
        if (DEBUG) {
          console.log('Cached assets: main', assetsToCache)
        }
      })
      .catch(error => {
        console.error(error)
        throw error
      })
  )
});

// After the install event.
self.addEventListener('activate', event => {
  if (DEBUG) {
    console.log('[SW] Activate event')
  }

  // Clean the caches
  event.waitUntil(
    global.caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // Delete the caches that are not the current one.
          if (cacheName.indexOf(CACHE_NAME) === 0) {
            return null
          }

          return global.caches.delete(cacheName)
        })
      )
    })
  )
})

self.addEventListener('message', event => {
  switch (event.data.action) {
    case 'skipWaiting':
      if (self.skipWaiting) {
        self.skipWaiting()
        self.clients.claim()
      }
      break
    default:
      break
  }
})
