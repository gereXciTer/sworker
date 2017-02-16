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
