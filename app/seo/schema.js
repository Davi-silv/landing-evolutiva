import { faqs, getService, projects, site } from "../content/site.js";

function absolute(path) {
  return new URL(path, `${site.url}/`).href;
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: absolute("/logo.png"),
    description: site.description,
    telephone: site.phoneE164,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phoneE164,
      contactType: "sales",
      areaServed: "BR",
      availableLanguage: "Portuguese",
    },
    areaServed: [
      { "@type": "City", name: "Cabo Frio" },
      { "@type": "AdministrativeArea", name: "Região dos Lagos" },
    ],
    knowsLanguage: "pt-BR",
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: "pt-BR",
    description: site.description,
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  };
}

export function serviceSchema(service, path) {
  const offer = {
    "@type": "Offer",
    url: absolute(path),
    priceCurrency: "BRL",
    description: service.price
      ? "Valor inicial sugerido, sujeito a confirmação de escopo pelo responsável."
      : "Valor definido sob orçamento, depois do diagnóstico.",
  };

  if (service.price) {
    offer.price = service.price;
  }

  if (service.unit) {
    offer.priceSpecification = {
      "@type": "UnitPriceSpecification",
      price: service.price,
      priceCurrency: "BRL",
      unitText: service.unit,
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: service.summary,
    url: absolute(path),
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    areaServed: "Cabo Frio e Região dos Lagos, Brasil",
    offers: offer,
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function portfolioSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Demonstrações públicas da Evolutiva Tech",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": project.kind === "website" ? "WebSite" : "SoftwareApplication",
        name: project.name,
        url: project.url,
        ...(project.kind === "website"
          ? {}
          : { applicationCategory: "BusinessApplication", operatingSystem: "Web" }),
        description: project.summary,
        publisher: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
      },
    })),
  };
}

export function schemasFor(page) {
  if (!page || page.kind === "notfound") return [];

  if (page.kind === "home") {
    return [organizationSchema(), websiteSchema(), faqSchema()];
  }

  const crumbs = [
    { name: "Início", path: "/" },
    { name: page.navLabel, path: page.path },
  ];
  const schemas = [breadcrumbSchema(crumbs)];

  if (page.kind === "service") {
    schemas.push(serviceSchema(getService(page.serviceId), page.path));
  }

  if (page.kind === "portfolio") {
    schemas.push(portfolioSchema());
  }

  return schemas;
}
