import { useEffect, useId, useState } from "react";
import { leadEndpoint, services } from "../content/site.js";

const empty = {
  nome: "",
  empresa: "",
  whatsapp: "",
  email: "",
  servico: "",
  descricao: "",
  privacidade: false,
  empresa_site: "",
};

function validate(values) {
  const errors = {};
  if (values.nome.trim().length < 2) errors.nome = "Informe seu nome.";
  if (values.empresa.trim() && values.empresa.trim().length < 2) {
    errors.empresa = "Informe o nome da empresa ou deixe o campo em branco.";
  }
  const digits = values.whatsapp.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 13) errors.whatsapp = "Informe um WhatsApp com DDD.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "Informe um e-mail válido.";
  if (!services.some((service) => service.id === values.servico)) errors.servico = "Selecione o serviço desejado.";
  if (values.descricao.trim().length < 20) errors.descricao = "Descreva o projeto com pelo menos 20 caracteres.";
  if (!values.privacidade) errors.privacidade = "É preciso aceitar a política de privacidade para enviar.";
  return errors;
}

export function LeadForm({ heading = "Conte o projeto" }) {
  const baseId = useId();
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");
  const configured = Boolean(leadEndpoint);

  useEffect(() => {
    const selected = new URLSearchParams(window.location.search).get("servico");
    if (selected && services.some((service) => service.id === selected)) {
      setValues((current) => ({ ...current, servico: selected }));
    }
  }, []);

  function update(event) {
    const { name, value, type, checked } = event.target;
    setValues((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }));
  }

  async function onSubmit(event) {
    event.preventDefault();
    setFeedback("");

    if (values.empresa_site) {
      setStatus("error");
      setFeedback("Não foi possível enviar a mensagem.");
      return;
    }

    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus("error");
      setFeedback("Revise os campos destacados antes de enviar.");
      return;
    }

    if (!configured) {
      setStatus("error");
      setFeedback("O formulário ainda não tem um destino de envio. Nenhuma mensagem foi transmitida.");
      return;
    }

    const service = services.find((item) => item.id === values.servico);
    const body = new FormData();
    body.set("nome", values.nome.trim());
    body.set("empresa", values.empresa.trim());
    body.set("whatsapp", values.whatsapp.trim());
    body.set("email", values.email.trim());
    body.set("servico", values.servico);
    body.set("servico_nome", service ? service.name : values.servico);
    body.set("descricao", values.descricao.trim());
    body.set("privacidade", "sim");
    body.set("origem", window.location.href);

    setStatus("sending");
    try {
      const response = await fetch(leadEndpoint, {
        method: "POST",
        body,
      });
      if (!response.ok) throw new Error("failed");
      const type = response.headers.get("content-type") || "";
      if (type.includes("json")) {
        const payload = await response.json();
        if (payload && (payload.ok === false || payload.success === false || payload.error)) {
          throw new Error("rejected");
        }
      }
      setStatus("success");
      setFeedback("Mensagem enviada. Os dados chegaram ao canal configurado. O retorno usa o WhatsApp ou o e-mail informados.");
      setValues(empty);
      setErrors({});
    } catch {
      setStatus("error");
      setFeedback("Não foi possível confirmar o envio. Nada foi registrado como recebido. Tente de novo em alguns minutos.");
    }
  }

  return (
    <section id="contato" aria-labelledby={`${baseId}-titulo`}>
      <div className="wrap split">
        <div className="section-head">
          <h2 id={`${baseId}-titulo`}>{heading}</h2>
          <p>
            Nome, empresa, WhatsApp, e-mail, serviço e uma descrição do projeto. A empresa pode ficar em branco se você ainda não tiver razão social.
          </p>
          {configured ? null : (
            <p className="form-error" role="status">
              Este formulário ainda não está ligado a um canal de recebimento. O botão fica desativado e nenhuma mensagem é transmitida.
            </p>
          )}
        </div>
        <form className="form-card" method="post" action={configured ? leadEndpoint : undefined} onSubmit={onSubmit}>
          <div className="form-grid">
            <Field id={`${baseId}-nome`} name="nome" label="Nome" value={values.nome} error={errors.nome} onChange={update} autoComplete="name" required minLength={2} maxLength={80} />
            <Field id={`${baseId}-empresa`} name="empresa" label="Empresa" value={values.empresa} error={errors.empresa} onChange={update} autoComplete="organization" />
            <Field id={`${baseId}-whatsapp`} name="whatsapp" label="WhatsApp" value={values.whatsapp} error={errors.whatsapp} onChange={update} autoComplete="tel" inputMode="tel" required pattern="[0-9()+\-\s]{10,20}" />
            <Field id={`${baseId}-email`} name="email" label="E-mail" type="email" value={values.email} error={errors.email} onChange={update} autoComplete="email" required />
            <div className="field form-wide">
              <label htmlFor={`${baseId}-servico`}><span>Serviço desejado</span></label>
              <select id={`${baseId}-servico`} name="servico" value={values.servico} onChange={update} required aria-invalid={Boolean(errors.servico)} aria-describedby={errors.servico ? `${baseId}-servico-erro` : undefined}>
                <option value="">Selecione</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>{service.name}</option>
                ))}
              </select>
              {errors.servico ? <small className="field-error" id={`${baseId}-servico-erro`}>{errors.servico}</small> : null}
            </div>
            <div className="field form-wide">
              <label htmlFor={`${baseId}-descricao`}><span>Descrição do projeto</span></label>
              <textarea id={`${baseId}-descricao`} name="descricao" value={values.descricao} onChange={update} required minLength={20} maxLength={4000} aria-invalid={Boolean(errors.descricao)} aria-describedby={errors.descricao ? `${baseId}-descricao-erro` : undefined} />
              {errors.descricao ? <small className="field-error" id={`${baseId}-descricao-erro`}>{errors.descricao}</small> : null}
            </div>
          </div>
          <div className="hp" aria-hidden="true">
            <label htmlFor={`${baseId}-site`}>Site</label>
            <input id={`${baseId}-site`} name="empresa_site" tabIndex={-1} autoComplete="off" value={values.empresa_site} onChange={update} />
          </div>
          <label className="check" htmlFor={`${baseId}-privacidade`}>
            <input id={`${baseId}-privacidade`} name="privacidade" type="checkbox" checked={values.privacidade} onChange={update} required aria-invalid={Boolean(errors.privacidade)} />
            <span>
              Li a <a href="/politica-de-privacidade">política de privacidade</a> e autorizo o uso destes dados para responder ao pedido de orçamento.
            </span>
          </label>
          {errors.privacidade ? <small className="field-error">{errors.privacidade}</small> : null}
          {feedback ? (
            <p className={status === "success" ? "form-success" : "form-error"} role="alert">{feedback}</p>
          ) : null}
          <button className="btn btn-primary" type="submit" disabled={!configured || status === "sending"}>
            {status === "sending" ? "Enviando..." : "Enviar pedido"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ id, label, error, ...props }) {
  return (
    <div className="field">
      <label htmlFor={id}><span>{label}</span></label>
      <input id={id} aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-erro` : undefined} {...props} />
      {error ? <small className="field-error" id={`${id}-erro`}>{error}</small> : null}
    </div>
  );
}
