import http from "node:http";
import { spawn } from "node:child_process";
import puppeteer from "puppeteer-core";

const received = [];
const sink = http.createServer((request, response) => {
  const origin = request.headers.origin || "*";
  if (request.method === "OPTIONS") {
    response.writeHead(204, {
      "access-control-allow-origin": origin,
      "access-control-allow-methods": "POST, OPTIONS",
      "access-control-allow-headers": "content-type",
    });
    response.end();
    return;
  }
  const chunks = [];
  request.on("data", (chunk) => chunks.push(chunk));
  request.on("end", () => {
    const body = Buffer.concat(chunks).toString("utf8");
    received.push(body);
    const fail = body.includes("name=\"nome\"\r\n\r\nFalha") || body.includes("Falha");
    response.writeHead(fail ? 500 : 200, {
      "access-control-allow-origin": origin,
      "content-type": "application/json",
    });
    response.end(fail ? JSON.stringify({ ok: false }) : JSON.stringify({ ok: true }));
  });
});

await new Promise((resolve) => sink.listen(8787, "127.0.0.1", resolve));

const dev = spawn("npx", ["react-router", "dev", "--port", "5173", "--host", "127.0.0.1"], {
  env: { ...process.env, VITE_LEAD_ENDPOINT: "http://127.0.0.1:8787/lead" },
  stdio: ["ignore", "pipe", "pipe"],
});

let devLog = "";
await new Promise((resolve, reject) => {
  const timer = setTimeout(() => reject(new Error(`dev não subiu\n${devLog}`)), 40000);
  const onData = (chunk) => {
    devLog += chunk.toString();
    if (devLog.includes("5173")) {
      clearTimeout(timer);
      resolve();
    }
  };
  dev.stdout.on("data", onData);
  dev.stderr.on("data", onData);
});

const preview = spawn("node", ["scripts/preview-static.mjs"], {
  env: { ...process.env, PORT: "4173" },
  stdio: ["ignore", "pipe", "pipe"],
});
await new Promise((resolve) => {
  preview.stdout.on("data", (chunk) => {
    if (String(chunk).includes("http://")) resolve();
  });
});

const browser = await puppeteer.launch({
  executablePath: "/usr/bin/google-chrome",
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

const problems = [];
function problem(message) {
  problems.push(message);
}

async function overflow(page) {
  return page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
}

const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 800 });
await page.goto("http://127.0.0.1:5173/", { waitUntil: "networkidle0" });
const h1 = await page.$eval("h1", (element) => element.textContent);
if (!h1.includes("Transformamos tecnologia")) problem("h1 da home ausente");
await page.evaluate(() => document.querySelector("a.header-cta").click());
await page.waitForFunction(() => location.pathname === "/contato" && Boolean(window.__reactRouterRouteModules));

const invalidForm = await page.evaluate(() => document.querySelector("form").checkValidity());
if (invalidForm) problem("formulário vazio passou na validação nativa");

await page.locator("#conteudo input[name='nome']").fill("Ana Souza");
await page.locator("#conteudo input[name='empresa']").fill("x");
await page.locator("#conteudo input[name='whatsapp']").fill("22999998888");
await page.locator("#conteudo input[name='email']").fill("ana@oficina.example");
await page.select("#conteudo select[name='servico']", "landing-page");
await page.locator("#conteudo textarea[name='descricao']").fill("Preciso de uma landing page para a temporada de verão da oficina.");
await page.locator("#conteudo input[name='privacidade']").click();
await page.evaluate(() => document.querySelector("button[type='submit']").click());
await page.waitForSelector(".field-error");
const companyError = await page.$eval(".field-error", (element) => element.textContent);
if (!companyError.includes("deixe o campo em branco")) problem(`validação da empresa: ${companyError}`);

await page.locator("#conteudo input[name='empresa']").fill("Oficina Lagoa");
await page.evaluate(() => document.querySelector("button[type='submit']").click());
await page.waitForSelector(".form-success", { timeout: 8000 });
const success = await page.$eval(".form-success", (element) => element.textContent);
if (!success.includes("Mensagem enviada")) problem(`sucesso inesperado: ${success}`);
if (!received.some((body) => body.includes("Ana Souza") && body.includes("landing-page"))) {
  problem("o destino não recebeu os campos do formulário");
}

await page.locator("#conteudo input[name='nome']").fill("Falha");
await page.locator("#conteudo input[name='whatsapp']").fill("22999998888");
await page.locator("#conteudo input[name='email']").fill("ana@oficina.example");
await page.select("#conteudo select[name='servico']", "crm");
await page.locator("#conteudo textarea[name='descricao']").fill("Quero um CRM simples para orçamentos da equipe comercial.");
await page.locator("#conteudo input[name='privacidade']").click();
await page.evaluate(() => document.querySelector("button[type='submit']").click());
await page.waitForFunction(() => {
  const alert = document.querySelector("[role='alert']");
  return alert && alert.textContent.includes("Não foi possível confirmar");
});

await page.setViewport({ width: 390, height: 844 });
await page.goto("http://127.0.0.1:5173/criacao-de-sites", { waitUntil: "networkidle0" });
await page.waitForFunction(() => Boolean(window.__reactRouterRouteModules));
if (await overflow(page)) problem("overflow horizontal em criação de sites no celular");
await page.evaluate(() => document.querySelector("button[aria-label='Abrir menu']").click());
const expanded = await page.$eval("button[aria-controls='menu-principal']", (element) => element.getAttribute("aria-expanded"));
if (expanded !== "true") problem("menu móvel não abriu");
await page.evaluate(() => document.querySelector("#menu-principal a[href='/portfolio']").click());
await page.waitForFunction(() => location.pathname === "/portfolio");
await page.waitForSelector("img[alt*='Nexus']");
const imageOk = await page.$eval("img[alt*='Nexus ERP']", (image) => image.naturalWidth > 0);
if (!imageOk) problem("captura do portfólio não carregou");
if (await overflow(page)) problem("overflow horizontal no portfólio");

await page.setViewport({ width: 1280, height: 900 });
await page.goto("http://127.0.0.1:4173/", { waitUntil: "networkidle0" });
await page.screenshot({ path: "/tmp/evolutiva-home.png", fullPage: false });
await page.setViewport({ width: 390, height: 844 });
await page.screenshot({ path: "/tmp/evolutiva-mobile.png", fullPage: false });
await page.goto("http://127.0.0.1:4173/contato", { waitUntil: "networkidle0" });
await page.screenshot({ path: "/tmp/evolutiva-contato.png", fullPage: false });

await page.setViewport({ width: 1280, height: 800 });
await page.goto("http://127.0.0.1:4173/esta-pagina-nao-existe", { waitUntil: "networkidle0" });
const missing = await fetch("http://127.0.0.1:4173/esta-pagina-nao-existe");
if (missing.status !== 404) problem(`preview retornou ${missing.status}`);
const missingTitle = await page.$eval("h1", (element) => element.textContent);
if (!missingTitle.includes("Página não encontrada")) problem("404 visual incorreto");
const homeStatic = await fetch("http://127.0.0.1:4173/");
const homeHtml = await homeStatic.text();
if (homeHtml.includes("<script type=\"application/ld+json\">") === false) problem("JSON-LD ausente na home servida");

await browser.close();
dev.kill("SIGTERM");
preview.kill("SIGTERM");
sink.close();

if (problems.length) {
  console.error(problems.map((item) => `- ${item}`).join("\n"));
  process.exit(1);
}
console.log("Fluxos de navegação, formulário e 404 conferidos no navegador.");
process.exit(0);
