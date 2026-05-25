import { ArrowRight, Code2, Link2, Mail } from "lucide-react";
import { Button } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { TechBadge } from "@/components/TechBadge";
import { featuredProjects } from "@/data/projects";

const coreTech = ["React", "Vite", "Next.js", "JavaScript", "TypeScript", "APIs REST", "Git", "GitHub"];

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <h1>Jose Miguel Rosas Guerra</h1>
          <p className="hero-lead">
            Estudiante de Ingenieria en Ciencias de la Computacion y Tecnologias de la Informacion en la Universidad
            del Valle de Guatemala.
          </p>
          <p>
            Me interesa el desarrollo web moderno, el consumo de APIs, la creacion de interfaces limpias y el
            aprendizaje constante de nuevas tecnologias.
          </p>
          <div className="hero-actions">
            <Button href="/projects">
              Ver proyectos
              <ArrowRight size={18} aria-hidden />
            </Button>
            <Button href="/contact" variant="secondary">
              <Mail size={18} aria-hidden />
              Contacto
            </Button>
          </div>
          <div className="tech-list">
            {coreTech.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
          <div className="social-row">
            <a href="https://github.com/MiguelRosas11" target="_blank" rel="noreferrer">
              <Code2 size={18} aria-hidden />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/miguel-rosas-502489380/?skipRedirect=true"
              target="_blank"
              rel="noreferrer"
            >
              <Link2 size={18} aria-hidden />
              LinkedIn
            </a>
          </div>
        </div>
        <div className="api-panel" aria-label="Resumen visual de habilidades">
          <div className="api-tabs">
            <span>student.profile</span>
            <span>course.lab8</span>
          </div>
          <pre>{`name:        Jose Miguel Rosas Guerra
student_id:  241274
university:  Universidad del Valle de Guatemala
career:      Ingenieria en Ciencias de la Computacion
focus:       Desarrollo web, APIs e interfaces limpias
tools:       React, Vite, Next.js, JavaScript, Git
contact:     roguemijose@gmail.com
github:      MiguelRosas11`}</pre>
          <div className="api-status">
            <span>Perfil academico</span>
            <span>Laboratorio 8</span>
          </div>
        </div>
      </section>

      <section className="content-section">
        <SectionTitle
          title="Proyectos destacados"
          description="Trabajos seleccionados del curso, con repositorios, tecnologias y capturas preparadas."
        />
        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
