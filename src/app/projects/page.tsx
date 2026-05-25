import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section className="page-section">
      <SectionTitle
        title="Proyectos"
        description="Seleccion de laboratorios y proyectos del curso Sistemas y Tecnologias Web."
      />
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
