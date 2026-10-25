import { WhatsAppLink } from "./WhatsAppLink.jsx";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="titulo-principal">
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow">Software house em Cabo Frio</p>
          <h1 id="titulo-principal">Transformamos tecnologia em crescimento para o seu negócio.</h1>
          <p>
            Desenvolvemos sites, sistemas inteligentes e automações para empresas que querem vender mais, organizar processos e crescer com tecnologia.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="/contato">Solicitar orçamento</a>
            <WhatsAppLink />
            <a className="btn btn-ghost" href="/portfolio">Conhecer nossos projetos</a>
          </div>
          <ul className="hero-points">
            <li>Cabo Frio e Região dos Lagos</li>
            <li>Sites, sistemas e automações</li>
            <li>Proposta com escopo e valor</li>
          </ul>
        </div>
        <figure className="brand-panel">
          <img
            src="/logo.webp"
            alt="Logotipo da Evolutiva Tech, com o símbolo ET e a frase transformando ideias em soluções digitais."
            width="960"
            height="256"
          />
          <ul>
            <li>
              <strong>Sites</strong>
              <span>Landing pages, sites institucionais e lojas com contato claro.</span>
            </li>
            <li>
              <strong>Sistemas</strong>
              <span>ERP e CRM desenhados em cima da rotina da empresa.</span>
            </li>
            <li>
              <strong>Automações</strong>
              <span>WhatsApp e tarefas repetidas, dentro das regras da plataforma.</span>
            </li>
          </ul>
        </figure>
      </div>
    </section>
  );
}
