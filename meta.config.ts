function metaBuilder(record: Record<string, string | string[]>): string {
  let content = "";

  for (const [key, value] of Object.entries(record)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        content += `// @${key} ${item}\n`;
      }
    } else {
      content += `// @${key} ${value}\n`;
    }
  }

  return "// ==UserScript==\n" + content + "// ==/UserScript==\n";
}

export const meta = metaBuilder({
  name: "instagram-scraper",
  match: ["https://socialblade.com/instagram/user/*"],
});
