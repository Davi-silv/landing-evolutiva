import { ExternalLink } from "lucide-react";
import { projects } from "../content/site.js";

export function PortfolioGrid({ heading = "Projetos em demonstração", intro, eagerImages = false }) {
  return (
    <section id="portfolio" aria-labelledby="titulo-portfolio">
      <div className="wrap">
        <div className="section-head">
          <h2 id="titulo-portfolio">{heading}</h2>
          <p>
            {intro || "Sites e sistemas com página pública. A descrição acompanha o que está no ar, sem resultado comercial atribuído."}
          </p>
        </div>
        <div className="grid-2">
          {projects.map((project, index) => (
            <article className="project-card" key={project.id}>
              <img
                src={project.image}
                alt={project.alt}
                width={project.width}
                height={project.height}
                loading={eagerImages && index === 0 ? "eager" : "lazy"}
                decoding="async"
              />
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <h4>O que está publicado</h4>
              <ul>
                {project.details.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <a className="btn btn-navy" href={project.url} target="_blank" rel="noopener noreferrer">
                {project.kind === "website" ? "Abrir site" : "Abrir demonstração"}
                <ExternalLink aria-hidden="true" size={18} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
