import { pages } from "../content/site.js";
import { pageMeta } from "../seo/meta.js";

const page = pages["404"];

export function meta() {
  return pageMeta(page);
}

export default function NotFound() {
  return (
    <main id="conteudo" tabIndex={-1} className="page-hero">
      <div className="wrap prose">
        <h1>{page.h1}</h1>
        <p>Esse endereço não faz parte do site da Evolutiva Tech. Use um dos links abaixo para continuar.</p>
        <ul className="local-links">
          <li><a href="/">Página inicial</a></li>
          <li><a href="/criacao-de-sites">Criação de sites</a></li>
          <li><a href="/portfolio">Portfólio</a></li>
          <li><a href="/contato">Contato</a></li>
        </ul>
      </div>
    </main>
  );
}
