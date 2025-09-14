Bun.serve({
  port: 4117,
  fetch(req) {
    const url = new URL(req.url);
    
    switch (url.pathname) {
      case "/":
      case "/index":
      case "/index.html":
        return new Response(Bun.file("./index.html"));
      case "/light":
        return new Response(Bun.file("./index-light.html"));
      case "/blog":
      case "/blog.html":
        return new Response(Bun.file("./blog.html"));
      case "/dist/main.css":
        return new Response(Bun.file("../dist/main.css"), {
          headers: { "Content-Type": "text/css" }
        });
      default:
        return new Response("Not Found", { status: 404 });
    }
  },
});

console.log("Server running at http://localhost:4117");
