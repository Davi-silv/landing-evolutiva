import { ServiceLanding } from "../components/ServiceLanding.jsx";
import { pages } from "../content/site.js";
import { pageMeta } from "../seo/meta.js";

const page = pages["criacao-de-sites"];

export function meta() {
  return pageMeta(page);
}

export default function CriacaoDeSites() {
  return <ServiceLanding page={page} />;
}
