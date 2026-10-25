import { Breadcrumbs } from "../components/Breadcrumbs.jsx";
import { LeadForm } from "../components/LeadForm.jsx";
import { PriceNotice } from "../components/PriceNotice.jsx";
import { WhatsAppLink } from "../components/WhatsAppLink.jsx";
import { pages } from "../content/site.js";
import { pageMeta } from "../seo/meta.js";

const page = pages.contato;

export function meta() {
  return pageMeta(page);
}

export default function Contato() {
  return (
    <main id="conteudo" tabIndex={-1}>
      <header className="page-hero">
        <div className="wrap">
          <Breadcrumbs current={page.navLabel} />
          <h1>{page.h1}</h1>
          <p>{page.lead}</p>
          <div className="hero-actions">
            <WhatsAppLink />
          </div>
          <PriceNotice />
        </div>
      </header>
      <LeadForm heading="Dados para o orçamento" />
    </main>
  );
}
