self.addEventListener("fetch", (event) => {
    if (event.request.url.includes("manifest.json")) {
        event.respondWith(
            fetch("/manifest.json").then((response) => response)
        );
    }
});
