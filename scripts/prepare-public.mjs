import { existsSync } from "node:fs";
import { loadEnvFile } from "node:process";
import { writeSeoFiles } from "./seo-files.mjs";

if (existsSync(".env")) loadEnvFile(".env");

const { siteUrl, indexablePaths } = await import("../app/content/site.js");
writeSeoFiles("public", siteUrl, indexablePaths);
console.log(`SEO público gerado para ${siteUrl}`);
