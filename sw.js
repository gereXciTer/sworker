self.addEventListener('install', function(event) {
console.log('installed');
//  event.waitUntil(
//    fetchStuffAndInitDatabases()
//  );
});

self.addEventListener('activate', function(event) {
console.log('activated');
  // You're good to go!
});

self.addEventListener('fetch', function(event) {
  console.log('fetch intercepted');
  event.respondWith(
    fetch(event.request).catch(function() {
      return new Response("Request failed!");
    })
  );
});
