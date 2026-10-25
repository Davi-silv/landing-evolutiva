import { Handshake, Puzzle, SearchCheck, Smartphone, Target, Workflow } from "lucide-react";
import { differentials } from "../content/site.js";

const icons = {
  resultados: Target,
  personalizado: Puzzle,
  responsivo: Smartphone,
  automacao: Workflow,
  seo: SearchCheck,
  atendimento: Handshake,
};

export function Differentials() {
  return (
    <section className="band-dark" id="diferenciais" aria-labelledby="titulo-diferenciais">
      <div className="wrap">
        <div className="section-head">
          <h2 id="titulo-diferenciais">Como a Evolutiva Tech trabalha</h2>
          <p>Seis compromissos práticos do projeto. Nenhum deles depende de um número de clientes que não está publicado.</p>
        </div>
        <div className="grid-3">
          {differentials.map((item) => {
            const Icon = icons[item.id];
            return (
              <article className="card card-dark" key={item.id}>
                <div className="icon-badge">
                  <Icon aria-hidden="true" size={22} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
