import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, useLocation } from "react-router";
import { nav } from "../content/site.js";
import { Logo } from "./Logo.jsx";

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    function onKey(event) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={open ? "site-header is-open" : "site-header"}>
      <div className="header-inner">
        <Logo />
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="menu-principal"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav id="menu-principal" className="nav" aria-label="Principal">
          {nav.map((item) =>
            item.href.startsWith("/#") ? (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ) : (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) => (isActive ? "is-active" : undefined)}
              >
                {item.label}
              </NavLink>
            ),
          )}
          <a className="btn btn-primary nav-cta" href="/contato">Solicitar orçamento</a>
        </nav>
        <a className="btn btn-primary header-cta" href="/contato">
          Solicitar orçamento
        </a>
      </div>
    </header>
  );
}
