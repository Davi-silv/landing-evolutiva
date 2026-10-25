import { site } from "../content/site.js";
import { schemasFor } from "./schema.js";

export function pageMeta(page) {
  const url = new URL(page.path, `${site.url}/`).href;
  const image = new URL("/og.png", `${site.url}/`).href;
  const robots = page.robots || "index, follow";

  return [
    { title: page.title },
    { name: "description", content: page.description },
    { name: "robots", content: robots },
    { name: "theme-color", content: "#010005" },
    { tagName: "link", rel: "canonical", href: url },
    { property: "og:locale", content: site.ogLocale },
    { property: "og:site_name", content: site.name },
    { property: "og:type", content: "website" },
    { property: "og:title", content: page.title },
    { property: "og:description", content: page.description },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: "Evolutiva Tech, software house em Cabo Frio" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: page.title },
    { name: "twitter:description", content: page.description },
    { name: "twitter:image", content: image },
    { name: "twitter:image:alt", content: "Evolutiva Tech, software house em Cabo Frio" },
    ...schemasFor(page).map((schema) => ({ "script:ld+json": schema })),
  ];
}
