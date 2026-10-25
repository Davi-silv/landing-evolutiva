# Evolutiva Tech

Site institucional em React, Vite e React Router, com as páginas públicas pré-renderizadas em HTML.

## Estrutura

- `app/` — páginas, componentes, conteúdo e estilos
- `app/content/site.js` — textos, serviços, preços e portfólio
- `app/seo/` — título, descrição, canonical e dados estruturados
- `public/` — logo, favicon, Open Graph e capturas do portfólio
- `scripts/` — build estático, verificação de SEO e capturas

## Scripts

- `npm run dev` sobe o ambiente local.
- `npm run capture` gera favicon, Open Graph e as capturas públicas do portfólio.
- `npm run build` gera `build/client`.
- `npm run preview` serve esse build sem transformar rota desconhecida em página válida.
- `npm run verify` confere o HTML estático, os metadados e o status 404.

## Antes de publicar

1. Confirme o domínio em `VITE_SITE_URL` (padrão `https://evolutivatech.com.br`) e rode o build de novo.
2. Defina `VITE_LEAD_ENDPOINT` com um endereço que aceite `POST` e responda sucesso apenas quando gravar os dados. Sem isso, o formulário permanece desativado.
3. Revise os preços sugeridos com o responsável. Eles estão marcados no site como valores a confirmar.

Copie `.env.example` para `.env` antes do build de publicação.
