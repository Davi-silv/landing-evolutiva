import { Breadcrumbs } from "../components/Breadcrumbs.jsx";
import { pages } from "../content/site.js";
import { pageMeta } from "../seo/meta.js";

const page = pages["politica-de-privacidade"];

export function meta() {
  return pageMeta(page);
}

export default function PoliticaDePrivacidade() {
  return (
    <main id="conteudo" className="privacy" tabIndex={-1}>
      <article className="wrap page-hero prose">
        <Breadcrumbs current={page.navLabel} />
        <h1>{page.h1}</h1>
        <p>{page.lead}</p>
        <h2>Quem trata os dados</h2>
        <p>
          A controladora é a Evolutiva Tech. O contato público é o WhatsApp (22) 99751-8427. Este site não publica e-mail ou endereço físico.
        </p>
        <h2>Quais dados são coletados</h2>
        <p>
          O formulário de orçamento pede nome, empresa, WhatsApp, e-mail, serviço desejado e descrição do projeto. A empresa pode ficar em branco. Há também um campo oculto, sem uso para pessoas, usado apenas para reduzir envio automático.
        </p>
        <h2>Para que os dados são usados</h2>
        <p>
          Os dados servem para responder ao pedido de orçamento e elaborar uma proposta. A base é o procedimento preliminar à contratação e o consentimento marcado no formulário. Eles não são vendidos.
        </p>
        <h2>Para onde os dados vão</h2>
        <p>
          Sem um destino técnico configurado, o pedido abre o WhatsApp (22) 99751-8427 com os dados preenchidos. A mensagem chega à Evolutiva Tech quando a pessoa confirma o envio na conversa. Se houver um destino técnico configurado, o mesmo pedido também segue para essa ferramenta.
        </p>
        <h2>Por quanto tempo ficam guardados</h2>
        <p>
          Pelo tempo necessário para responder à solicitação, cumprir a proposta e atender obrigações legais. Depois disso, a orientação é eliminar ou anonimizar o que não precisar ser mantido.
        </p>
        <h2>Direitos de quem enviou</h2>
        <p>
          Você pode pedir confirmação, acesso, correção ou exclusão. Enquanto o formulário estiver ativo, use-o de novo, identifique o pedido anterior e descreva o direito que quer exercer. O mesmo pedido pode ser feito pelo WhatsApp (22) 99751-8427.
        </p>
        <h2>Cookies e menores</h2>
        <p>
          O site institucional não instala cookies de publicidade nem de análise. A ferramenta que recebe o formulário pode tratar a requisição no ambiente dela. O formulário não é destinado a crianças.
        </p>
        <p>
          <a href="/contato">Voltar ao formulário de contato</a>
        </p>
      </article>
    </main>
  );
}
