import { faqs } from "../content/site.js";

export function FaqList() {
  return (
    <section id="faq" aria-labelledby="titulo-faq">
      <div className="wrap">
        <div className="section-head">
          <h2 id="titulo-faq">Perguntas frequentes</h2>
          <p>Respostas diretas sobre preço, prazo, celular, personalização, manutenção e WhatsApp.</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details className="faq-item" key={faq.question}>
              <summary>
                <h3>{faq.question}</h3>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
