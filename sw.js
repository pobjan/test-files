self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    
    if (url.pathname.startsWith('/random/')) {
        event.respondWith(generateRandomData(url.pathname));
    }
});

function generateRandomData(path) {
    const sizeMatch = path.match(/random\/(\d+)KB/i);
    if (!sizeMatch) return new Response("Nieprawidłowy format URL", { status: 400 });

    const size = parseInt(sizeMatch[1]) * 1024;
    const buffer = new Uint8Array(size);
    crypto.getRandomValues(buffer);

    return new Response(buffer, {
        headers: { "Content-Type": "application/octet-stream" }
    });
}
