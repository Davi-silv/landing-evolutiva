import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

export function writeSeoFiles(directory, siteUrl, paths) {
  mkdirSync(directory, { recursive: true });
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = paths.map((routePath) => {
    const loc = new URL(routePath, `${siteUrl}/`).href;
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
  });
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;
  const robots = `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`;
  writeFileSync(path.join(directory, "sitemap.xml"), sitemap);
  writeFileSync(path.join(directory, "robots.txt"), robots);
}
