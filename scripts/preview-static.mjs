import { createReadStream, existsSync, statSync } from "node:fs";
import http from "node:http";
import path from "node:path";

const root = path.resolve("build/client");
const port = Number(process.env.PORT || 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".json": "application/json; charset=utf-8",
  ".data": "text/plain; charset=utf-8",
  ".ico": "image/x-icon",
};

function resolveFile(urlPath) {
  let decoded = "/";
  try {
    decoded = decodeURIComponent(urlPath);
  } catch {
    return null;
  }
  const relativePath = decoded.replace(/^\/+/, "");
  const base = path.resolve(root, relativePath);
  if (base !== root && !base.startsWith(`${root}${path.sep}`)) return null;

  const candidates = [base];
  if (!path.extname(base)) {
    candidates.push(`${base}.html`, path.join(base, "index.html"));
  }

  for (const candidate of candidates) {
    if (existsSync(candidate) && statSync(candidate).isFile()) return candidate;
  }
  return null;
}

const server = http.createServer((request, response) => {
  const url = new URL(request.url || "/", "http://127.0.0.1");
  const file = resolveFile(url.pathname);
  if (!file) {
    const notFound = path.join(root, "404.html");
    response.writeHead(404, { "content-type": "text/html; charset=utf-8" });
    if (existsSync(notFound)) {
      createReadStream(notFound).pipe(response);
    } else {
      response.end("Página não encontrada");
    }
    return;
  }

  const type = types[path.extname(file)] || "application/octet-stream";
  response.writeHead(200, { "content-type": type });
  if (request.method === "HEAD") {
    response.end();
    return;
  }
  createReadStream(file).pipe(response);
});

server.listen(port, "127.0.0.1", () => {
  console.log(`http://127.0.0.1:${port}`);
});
