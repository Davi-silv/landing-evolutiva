import { Differentials } from "../components/Differentials.jsx";
import { FaqList } from "../components/FaqList.jsx";
import { Hero } from "../components/Hero.jsx";
import { LeadForm } from "../components/LeadForm.jsx";
import { PortfolioGrid } from "../components/PortfolioGrid.jsx";
import { Process } from "../components/Process.jsx";
import { ServiceGrid } from "../components/ServiceGrid.jsx";
import { homeSeo, pages } from "../content/site.js";
import { pageMeta } from "../seo/meta.js";

const localPages = [
  pages["criacao-de-sites"],
  pages["landing-pages"],
  pages["sistemas-erp"],
  pages["sistemas-crm"],
  pages.automacoes,
];

export function meta() {
  return pageMeta(homeSeo);
}

export default function Home() {
  return (
    <main id="conteudo" tabIndex={-1}>
      <Hero />
      <ServiceGrid />
      <section className="band" id="cabo-frio" aria-labelledby="titulo-local">
        <div className="wrap prose">
          <h2 id="titulo-local">Software house em Cabo Frio</h2>
          <p>
            A Evolutiva Tech desenvolve sites, sistemas e automações para empresas de Cabo Frio e da Região dos Lagos. O trabalho começa pela rotina do negócio — atendimento, vendas e operação — e só então vira página, painel ou fluxo.
          </p>
          <p>
            Muita empresa da região ainda divide o dia entre WhatsApp, planilha e a temporada. O projeto precisa caber nessa realidade: site encontrável, pedido organizado e processo que a equipe pequena consegue usar.
          </p>
          <p>
            Também atendemos projetos à distância. O contexto local continua na conversa, sem transformar cidade em lista de palavras repetidas.
          </p>
          <ul className="local-links">
            {localPages.map((page) => (
              <li key={page.path}>
                <a href={page.path}>{page.navLabel}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Differentials />
      <PortfolioGrid />
      <Process />
      <FaqList />
      <LeadForm heading="Peça um orçamento" />
    </main>
  );
}
