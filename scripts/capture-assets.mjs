import { readFileSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath: "/usr/bin/google-chrome",
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

async function shot(html, file, width, height) {
  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor: 1 });
  await page.setContent(html, { waitUntil: "load" });
  await page.screenshot({
    path: file,
    type: "png",
    clip: { x: 0, y: 0, width, height },
  });
  await page.close();
}

await mkdir("public/portfolio", { recursive: true });

const logoSrc = `data:image/png;base64,${readFileSync("public/logo.png").toString("base64")}`;
const og = `<!doctype html>
<html><head><style>
  html,body{margin:0;width:1200px;height:630px;background:#071624;color:#fff;font-family:Arial,sans-serif}
  .card{box-sizing:border-box;height:630px;padding:72px;display:flex;flex-direction:column;justify-content:space-between;background:
    radial-gradient(circle at 90% 10%, rgba(23,223,181,.28), transparent 36%), #071624}
  img{width:780px;height:auto;display:block}
  p{margin:28px 0 0;color:#A9BDCD;font-size:28px}
  strong{color:#17DFB5;font-weight:700}
</style></head><body><div class="card">
  <img src="${logoSrc}" alt="">
  <p>Sites, sistemas e automações para empresas de <strong>Cabo Frio</strong> e da Região dos Lagos.</p>
</div></body></html>`;
await shot(og, "public/og.png", 1200, 630);

async function captureSite(url, file) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1100, height: 688, deviceScaleFactor: 1 });
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForSelector("body", { timeout: 20000 });
  await new Promise((resolve) => setTimeout(resolve, 1800));
  await page.evaluate(() => {
    const sensitive = /senha|password|@nexusfood|@evolutivatech|admin@|estoque@|super@|local\s*\/\s*/i;
    document.querySelectorAll("li, p, small, code, pre, div, span").forEach((element) => {
      const text = element.innerText || "";
      if (text.length > 0 && text.length < 280 && sensitive.test(text)) element.remove();
    });
  });
  await page.screenshot({
    path: file,
    type: "webp",
    quality: 70,
    clip: { x: 0, y: 0, width: 1100, height: 688 },
  });
  await page.close();
}

const sites = [
  ["https://brigadeirice.vercel.app/", "public/portfolio/brigadeirice.webp"],
  ["https://cardapio-digital-xi-blue.vercel.app/", "public/portfolio/pastel-da-casa.webp"],
  ["https://loja-perfumes-red.vercel.app/", "public/portfolio/essencia-perfumada.webp"],
  ["https://restaurante-landing-page-ten.vercel.app/", "public/portfolio/sabor-e-arte.webp"],
  ["https://imobiliaria-mauve.vercel.app/", "public/portfolio/premium-imoveis.webp"],
  ["https://nexus-erp-theta-teal.vercel.app/", "public/portfolio/nexus-erp.webp"],
  ["https://nexus-food.vercel.app/", "public/portfolio/nexus-food.webp"],
];

for (const [url, file] of sites) {
  await captureSite(url, file);
}
await browser.close();
console.log("Imagens gravadas em public/");
