import { ArrowLeft, Code2, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { ProjectGallery } from "@/components/ProjectGallery";
import { TechBadge } from "@/components/TechBadge";
import { getProjectBySlug, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Proyecto no encontrado | Jose Miguel Rosas Guerra"
    };
  }

  return {
    title: `${project.name} | Jose Miguel Rosas Guerra`,
    description: project.shortDescription
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="page-section">
      <Button href="/projects" variant="ghost" className="back-link">
        <ArrowLeft size={18} aria-hidden />
        Volver a proyectos
      </Button>
      <div className="project-detail-head">
        <div>
          <span className="detail-type">{project.type}</span>
          <h1>{project.name}</h1>
          <p>{project.fullDescription}</p>
        </div>
        <div className="detail-actions">
          <Button href={project.repoUrl} variant="secondary">
            <Code2 size={18} aria-hidden />
            Repositorio
          </Button>
          {project.liveUrl ? (
            <Button href={project.liveUrl}>
              <ExternalLink size={18} aria-hidden />
              Sitio desplegado
            </Button>
          ) : null}
        </div>
      </div>

      <div className="detail-layout">
        <div className="info-panel">
          <h2>Tecnologias</h2>
          <div className="tech-list">
            {project.technologies.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
        </div>
        <div className="info-panel">
          <h2>Puntos destacados</h2>
          <ul className="clean-list">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
      </div>

      <section className="gallery-section">
        <h2>Galeria</h2>
        <ProjectGallery project={project} />
      </section>
    </section>
  );
}
