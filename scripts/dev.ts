import { meta } from "../meta.config";
import { Writable } from "node:stream";

const build = Bun.spawn([
  "bun",
  "build",
  "src/main.ts",
  "--watch",
  "--outfile=./dist/instagram-scraper.user.js",
  "--target=browser",
  "--sourcemap=inline",
  `--banner=${meta}`,
]);
const server = Bun.spawn(["bun", "run", "serve"]);

build.stdout.pipeTo(Writable.toWeb(process.stdout));
server.stdout.pipeTo(Writable.toWeb(process.stdout));

await Promise.all([build.exited, server.exited]);
