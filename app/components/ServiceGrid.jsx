import {
  Building2,
  LayoutDashboard,
  LifeBuoy,
  MessageCircle,
  Palette,
  PanelsTopLeft,
  ShoppingBag,
  Users,
} from "lucide-react";
import { services } from "../content/site.js";
import { PriceNotice } from "./PriceNotice.jsx";

const icons = {
  "landing-page": PanelsTopLeft,
  "site-institucional": Building2,
  "loja-virtual": ShoppingBag,
  "identidade-visual": Palette,
  "automacao-whatsapp": MessageCircle,
  crm: Users,
  erp: LayoutDashboard,
  suporte: LifeBuoy,
};

export function ServiceGrid() {
  return (
    <section id="servicos" aria-labelledby="titulo-servicos">
      <div className="wrap">
        <div className="section-head">
          <h2 id="titulo-servicos">Serviços e valores iniciais</h2>
          <p>
            Cada card mostra o que o serviço entrega e o valor de partida. O escopo fechado, com prazo e preço, sai na proposta.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => {
            const Icon = icons[service.id];
            return (
              <article className="service-card" id={service.id} key={service.id}>
                <div className="icon-badge">
                  <Icon aria-hidden="true" size={22} />
                </div>
                <h3>{service.name}</h3>
                <p>{service.summary}</p>
                <p className="price">{service.priceLabel}</p>
                <h4>Benefícios</h4>
                <ul>
                  {service.benefits.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <h4>Funcionalidades</h4>
                <ul>
                  {service.features.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <a className="btn btn-navy" href={`/contato?servico=${service.id}`}>
                  Solicitar orçamento
                </a>
              </article>
            );
          })}
        </div>
        <PriceNotice />
      </div>
    </section>
  );
}
