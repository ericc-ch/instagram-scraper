import { meta } from "../meta.config";

await Bun.build({
  entrypoints: ["src/main.ts"],
  outdir: "dist",
  target: "browser",
  sourcemap: "inline",
  naming: {
    entry: "instagram-scraper.user.js",
  },
  banner: meta,
});
