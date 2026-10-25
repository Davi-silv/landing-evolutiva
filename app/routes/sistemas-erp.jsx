import { ServiceLanding } from "../components/ServiceLanding.jsx";
import { pages } from "../content/site.js";
import { pageMeta } from "../seo/meta.js";

const page = pages["sistemas-erp"];

export function meta() {
  return pageMeta(page);
}

export default function SistemasErp() {
  return <ServiceLanding page={page} />;
}
