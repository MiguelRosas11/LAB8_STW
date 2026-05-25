import { ArrowUpRight, Code2 } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { ProjectImage } from "./ProjectImage";
import { TechBadge } from "./TechBadge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="card-image-wrap">
        <ProjectImage src={project.images[0]} alt={`Captura de ${project.name}`} />
      </div>
      <div className="card-body">
        <div className="card-meta">
          <span>{project.type}</span>
          <a href={project.repoUrl} target="_blank" rel="noreferrer" aria-label={`Repositorio de ${project.name}`}>
            <Code2 size={16} aria-hidden />
          </a>
        </div>
        <h3>{project.name}</h3>
        <p>{project.shortDescription}</p>
        <div className="tech-list compact">
          {project.technologies.slice(0, 4).map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>
        <div className="card-actions">
          <Link href={`/projects/${project.slug}`}>
            Ver detalles
            <ArrowUpRight size={16} aria-hidden />
          </Link>
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              Sitio
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
