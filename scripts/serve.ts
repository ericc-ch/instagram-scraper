import path from "node:path";

const userScript = Bun.file(
  path.join(import.meta.dir, "../dist/instagram-scraper.user.js"),
);

Bun.serve({
  routes: {
    "/": new Response("", {
      status: 302,
      headers: { Location: "/instagram-scraper.user.js" },
    }),
    "/instagram-scraper.user.js": new Response(userScript),
  },
});
