self.addEventListener("fetch", function (event) {
  if (
    event.request.url.includes("/api") &&
    (event.request.url.endsWith(".png") || event.request.url.endsWith(".svg"))
  ) {
    event.respondWith(
      caches.match(event.request).then(function (response) {
        return (
          response ||
          fetch(event.request).then(function (fetchResponse) {
            return caches.open("emoji-kitchen-cache").then(function (cache) {
              cache.put(event.request, fetchResponse.clone());
              return fetchResponse;
            });
          })
        );
      })
    );
  }
});
