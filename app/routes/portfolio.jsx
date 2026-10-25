import { Breadcrumbs } from "../components/Breadcrumbs.jsx";
import { PortfolioGrid } from "../components/PortfolioGrid.jsx";
import { pages } from "../content/site.js";
import { pageMeta } from "../seo/meta.js";

const page = pages.portfolio;

export function meta() {
  return pageMeta(page);
}

export default function Portfolio() {
  return (
    <main id="conteudo" tabIndex={-1}>
      <header className="page-hero">
        <div className="wrap">
          <Breadcrumbs current={page.navLabel} />
          <h1>{page.h1}</h1>
          <p>{page.lead}</p>
        </div>
      </header>
      <PortfolioGrid
        eagerImages
        heading="Sites e sistemas publicados"
        intro="Abra cada projeto no endereço público. As capturas são das páginas no estado em que o visitante as encontra."
      />
    </main>
  );
}
