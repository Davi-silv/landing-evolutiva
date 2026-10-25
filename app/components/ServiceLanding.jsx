import { getPage } from "../content/site.js";
import { Breadcrumbs } from "./Breadcrumbs.jsx";
import { PriceNotice } from "./PriceNotice.jsx";

export function ServiceLanding({ page }) {
  const related = page.related.map((path) => getPage(path)).filter(Boolean);

  return (
    <main id="conteudo" tabIndex={-1}>
      <header className="page-hero">
        <div className="wrap">
          <Breadcrumbs current={page.navLabel} />
          <h1>{page.h1}</h1>
          <p>{page.lead}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={page.cta.href}>{page.cta.label}</a>
            <a className="btn btn-navy" href="/portfolio">Conhecer nossos projetos</a>
          </div>
        </div>
      </header>
      {page.sections.map((section, index) => (
        <section className={index % 2 === 0 ? "band" : undefined} key={section.heading} aria-labelledby={`secao-${index}`}>
          <div className="wrap prose">
            <h2 id={`secao-${index}`}>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.items ? (
              <ul>
                {section.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            ) : null}
          </div>
        </section>
      ))}
      <section aria-labelledby="continuar">
        <div className="wrap">
          <h2 id="continuar">Continue por aqui</h2>
          <ul className="related-list">
            {related.map((item) => (
              <li key={item.path}>
                <a href={item.path}>{item.navLabel}</a>
                {item.description ? <p>{item.description}</p> : null}
              </li>
            ))}
          </ul>
          <PriceNotice />
        </div>
      </section>
    </main>
  );
}
