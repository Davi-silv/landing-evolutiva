import { processSteps } from "../content/site.js";

export function Process() {
  return (
    <section className="band" id="processo" aria-labelledby="titulo-processo">
      <div className="wrap">
        <div className="section-head">
          <h2 id="titulo-processo">Processo de desenvolvimento</h2>
          <p>Quatro etapas, da conversa inicial até a publicação. O prazo de cada uma fica na proposta.</p>
        </div>
        <ol className="steps">
          {processSteps.map((step) => (
            <li key={step.title}>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
