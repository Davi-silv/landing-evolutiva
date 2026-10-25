import { ServiceLanding } from "../components/ServiceLanding.jsx";
import { pages } from "../content/site.js";
import { pageMeta } from "../seo/meta.js";

const page = pages.automacoes;

export function meta() {
  return pageMeta(page);
}

export default function Automacoes() {
  return <ServiceLanding page={page} />;
}
