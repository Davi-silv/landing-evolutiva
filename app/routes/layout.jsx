import { Outlet } from "react-router";
import { Footer } from "../components/Footer.jsx";
import { Header } from "../components/Header.jsx";
import { WhatsAppLink } from "../components/WhatsAppLink.jsx";

export default function MarketingLayout() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <Header />
      <Outlet />
      <Footer />
      <WhatsAppLink className="whatsapp-float" />
    </>
  );
}
