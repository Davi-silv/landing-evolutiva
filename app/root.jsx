import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
} from "react-router";
import "@fontsource/outfit/latin-400.css";
import "@fontsource/outfit/latin-600.css";
import "@fontsource/outfit/latin-700.css";
import "./styles/global.css";

export function Layout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="content-language" content="pt-BR" />
        <link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }) {
  const message = isRouteErrorResponse(error)
    ? "Não foi possível abrir esta página."
    : "Ocorreu um erro ao carregar a página.";

  return (
    <main id="conteudo" className="page-hero">
      <div className="wrap prose">
        <h1>Algo saiu do esperado</h1>
        <p>{message}</p>
        <p><a href="/">Voltar à página inicial</a></p>
      </div>
    </main>
  );
}
