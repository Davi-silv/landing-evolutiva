import { spawn } from "node:child_process";
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";

const root = path.resolve("build/client");
const failures = [];

function fail(message) {
  failures.push(message);
}

function read(file) {
  return readFileSync(file, "utf8");
}

function findHtml(routePath) {
  if (routePath === "/") return path.join(root, "index.html");
  const name = routePath.replace(/^\//, "");
  const nested = path.join(root, name, "index.html");
  const flat = path.join(root, `${name}.html`);
  if (existsSync(nested)) return nested;
  if (existsSync(flat)) return flat;
  return null;
}

function textOf(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function attr(html, pattern) {
  const match = html.match(pattern);
  return match ? match[1] : "";
}

const pages = [
  ["/", "Transformamos tecnologia em crescimento para o seu negócio.", "Evolutiva Tech | Sites e sistemas em Cabo Frio", true],
  ["/criacao-de-sites", "Criação de sites em Cabo Frio e na Região dos Lagos", "Criação de sites em Cabo Frio | Evolutiva Tech", true],
  ["/landing-pages", "Landing pages para campanhas e captação de clientes", "Landing pages em Cabo Frio | Evolutiva Tech", true],
  ["/sistemas-erp", "Sistemas ERP personalizados para a operação da empresa", "Sistema ERP personalizado | Evolutiva Tech", true],
  ["/sistemas-crm", "Sistemas CRM para organizar vendas e relacionamento", "Sistema CRM personalizado | Evolutiva Tech", true],
  ["/automacoes", "Automações para empresas que querem ganhar tempo", "Automação para empresas | Evolutiva Tech", true],
  ["/portfolio", "Projetos em demonstração pública", "Portfólio de sites e sistemas | Evolutiva Tech", true],
  ["/contato", "Solicite um orçamento", "Solicitar orçamento | Evolutiva Tech", true],
  ["/politica-de-privacidade", "Política de privacidade", "Política de privacidade | Evolutiva Tech", true],
  ["/404", "Página não encontrada", "Página não encontrada | Evolutiva Tech", false],
];

for (const [routePath, h1, title, indexable] of pages) {
  const file = findHtml(routePath);
  if (!file) {
    fail(`HTML ausente: ${routePath}`);
    continue;
  }
  const html = read(file);
  const visible = textOf(html);
  if (!html.includes("<html lang=\"pt-BR\">") && !html.includes("<html lang=\"pt-BR\" ")) {
    fail(`${routePath} sem lang pt-BR`);
  }
  if (!visible.includes(h1)) fail(`${routePath} não traz o h1 no HTML estático`);
  if ((html.match(/<h1[\s>]/g) || []).length !== 1) fail(`${routePath} deve ter um único h1`);
  if (attr(html, /<title>([^<]*)<\/title>/) !== title) fail(`${routePath} title divergente`);
  const description = attr(html, /<meta name="description" content="([^"]*)"/);
  if (!description) fail(`${routePath} sem meta description`);
  if (description.length > 170) fail(`${routePath} description longa (${description.length})`);
  const canonical = attr(html, /<link rel="canonical" href="([^"]*)"/);
  if (!canonical.startsWith("https://evolutivatech.com.br")) fail(`${routePath} canonical inválido: ${canonical}`);
  for (const property of ["og:title", "og:description", "og:url", "og:image", "og:locale", "og:type"]) {
    if (!html.includes(`property="${property}"`)) fail(`${routePath} sem ${property}`);
  }
  if (!html.includes('name="twitter:card" content="summary_large_image"')) fail(`${routePath} sem Twitter Card`);
  if (!html.includes('name="robots"')) fail(`${routePath} sem robots`);
  if (html.includes('name="keywords"')) fail(`${routePath} contém meta keywords`);
  if (!html.includes("<header") || !html.includes("<main") || !html.includes("<footer") || !html.includes("<nav")) {
    fail(`${routePath} sem estrutura semântica completa`);
  }
  if (indexable && !html.includes("application/ld+json")) fail(`${routePath} sem JSON-LD`);
  if (!indexable && !html.includes("noindex")) fail(`${routePath} deveria ser noindex`);
}

const sitemap = read(path.join(root, "sitemap.xml"));
const robots = read(path.join(root, "robots.txt"));
if (!robots.includes("Sitemap: https://evolutivatech.com.br/sitemap.xml")) fail("robots sem sitemap absoluto");
if (sitemap.includes("/404")) fail("sitemap contém a página 404");
for (const [routePath, , , indexable] of pages) {
  if (!indexable) continue;
  const loc = new URL(routePath, "https://evolutivatech.com.br/").href;
  if (!sitemap.includes(`<loc>${loc}</loc>`)) fail(`sitemap sem ${loc}`);
}

if (!existsSync(path.join(root, "favicon.svg"))) fail("favicon ausente");
if (!existsSync(path.join(root, "og.png"))) fail("og.png ausente");
if (!existsSync(path.join(root, "404.html"))) fail("404.html ausente");
if (existsSync(path.join(root, "__spa-fallback.html"))) fail("SPA fallback ainda presente");

const port = 4173;
const server = spawn("node", ["scripts/preview-static.mjs"], {
  env: { ...process.env, PORT: String(port) },
  stdio: ["ignore", "pipe", "pipe"],
});

await new Promise((resolve, reject) => {
  const timer = setTimeout(() => reject(new Error("preview não subiu")), 8000);
  server.stdout.on("data", (chunk) => {
    if (String(chunk).includes("http://")) {
      clearTimeout(timer);
      resolve();
    }
  });
  server.on("exit", (code) => reject(new Error(`preview encerrou com ${code}`)));
});

async function request(urlPath) {
  const response = await fetch(`http://127.0.0.1:${port}${urlPath}`);
  const body = await response.text();
  return { status: response.status, body };
}

const home = await request("/");
const missing = await request("/rota-que-nao-existe");
const contact = await request("/contato");
if (home.status !== 200) fail(`home status ${home.status}`);
if (!textOf(home.body).includes("Transformamos tecnologia em crescimento para o seu negócio.")) {
  fail("resposta da home sem conteúdo principal");
}
if (contact.status !== 200) fail(`contato status ${contact.status}`);
if (missing.status !== 404) fail(`rota inexistente retornou ${missing.status}`);
if (textOf(missing.body).includes("Transformamos tecnologia em crescimento para o seu negócio.")) {
  fail("404 devolveu o conteúdo da home");
}
if (!textOf(missing.body).includes("Página não encontrada")) fail("404 sem a página de erro");

if (failures.length) {
  console.error(failures.map((item) => `- ${item}`).join("\n"));
} else {
  console.log("HTML estático, metadados, sitemap e status 404 conferidos.");
}

try {
  server.kill();
} catch {
  // O processo do preview pode estar fora do alcance deste sandbox.
}

process.exit(failures.length ? 1 : 0);
