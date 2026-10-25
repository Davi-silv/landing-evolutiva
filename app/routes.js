import { index, layout, route } from "@react-router/dev/routes";

export default [
  layout("./routes/layout.jsx", [
    index("./routes/home.jsx"),
    route("criacao-de-sites", "./routes/criacao-de-sites.jsx"),
    route("landing-pages", "./routes/landing-pages.jsx"),
    route("sistemas-erp", "./routes/sistemas-erp.jsx"),
    route("sistemas-crm", "./routes/sistemas-crm.jsx"),
    route("automacoes", "./routes/automacoes.jsx"),
    route("portfolio", "./routes/portfolio.jsx"),
    route("contato", "./routes/contato.jsx"),
    route("politica-de-privacidade", "./routes/politica-de-privacidade.jsx"),
    route("404", "./routes/not-found.jsx"),
    route("*", "./routes/splat.jsx"),
  ]),
];
