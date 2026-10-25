import { pages, services } from "../content/site.js";
import { Logo } from "./Logo.jsx";
import { WhatsAppLink } from "./WhatsAppLink.jsx";

const pageLinks = [
  pages["criacao-de-sites"],
  pages["landing-pages"],
  pages["sistemas-erp"],
  pages["sistemas-crm"],
  pages.automacoes,
  pages.portfolio,
  pages.contato,
  pages["politica-de-privacidade"],
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <Logo />
          <p>
            Software house em Cabo Frio. Sites, sistemas e automações para empresas da Região dos Lagos e projetos à distância.
          </p>
          <WhatsAppLink />
        </div>
        <nav aria-label="Páginas do site">
          <h2>Páginas</h2>
          <ul>
            <li><a href="/">Início</a></li>
            {pageLinks.map((page) => (
              <li key={page.path}>
                <a href={page.path}>{page.navLabel}</a>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Serviços e valores">
          <h2>Serviços</h2>
          <ul>
            {services.map((service) => (
              <li key={service.id}>
                <a href={`/#${service.id}`}>{service.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="wrap legal">
        <p>
          Os preços publicados são valores comerciais sugeridos e precisam ser confirmados pelo responsável antes da publicação comercial e do fechamento de qualquer proposta.
        </p>
        <p>© Evolutiva Tech. Atendimento a empresas de Cabo Frio e da Região dos Lagos.</p>
      </div>
    </footer>
  );
}
