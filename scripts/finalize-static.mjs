import { copyFileSync, existsSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { loadEnvFile } from "node:process";
import { writeSeoFiles } from "./seo-files.mjs";

if (existsSync(".env")) loadEnvFile(".env");

const { siteUrl, indexablePaths } = await import("../app/content/site.js");
const client = path.resolve("build/client");

writeSeoFiles(client, siteUrl, indexablePaths);
writeSeoFiles("public", siteUrl, indexablePaths);

function findHtml(routePath) {
  if (routePath === "/") return path.join(client, "index.html");
  const name = routePath.replace(/^\//, "");
  const nested = path.join(client, name, "index.html");
  const flat = path.join(client, `${name}.html`);
  if (existsSync(nested)) return nested;
  if (existsSync(flat)) return flat;
  return null;
}

const notFound = findHtml("/404");
if (!notFound) {
  throw new Error("A pré-renderização não gerou o HTML de /404.");
}
copyFileSync(notFound, path.join(client, "404.html"));

for (const stale of ["__spa-fallback.html"]) {
  const target = path.join(client, stale);
  if (existsSync(target)) rmSync(target);
}

const lines = ["# Rotas pré-renderizadas. Qualquer outro caminho responde 404."];
for (const routePath of indexablePaths) {
  if (routePath === "/") continue;
  const file = findHtml(routePath);
  if (!file) throw new Error(`HTML ausente para ${routePath}`);
  const rel = `/${path.relative(client, file).split(path.sep).join("/")}`;
  const slug = routePath.replace(/^\//, "");
  lines.push(`/${slug}/  /${slug}  301`);
  lines.push(`/${slug}  ${rel}  200`);
}
lines.push("/*  /404.html  404");
writeFileSync(path.join(client, "_redirects"), `${lines.join("\n")}\n`);

console.log(`Arquivos estáticos finalizados em ${client}`);
