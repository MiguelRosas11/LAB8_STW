import { SectionTitle } from "@/components/SectionTitle";
import { TechBadge } from "@/components/TechBadge";

const languages = ["Python", "Java", "JavaScript", "C++", "SQL", "Assembler"];
const tools = [
  "HTML",
  "CSS",
  "React",
  "Vite",
  "Next.js",
  "Node.js",
  "Express",
  "APIs REST",
  "Git",
  "GitHub",
  "GitHub Pages",
  "Vercel"
];

export default function AboutPage() {
  return (
    <section className="page-section narrow">
      <SectionTitle
        title="Sobre mi"
        description="Perfil academico, aprendizajes del curso e intereses dentro del desarrollo web."
      />
      <div className="text-panel">
        <p>
          Soy estudiante de Ingenieria en Ciencias de la Computacion y Tecnologias de la Informacion en la Universidad
          del Valle de Guatemala. Durante Sistemas y Tecnologias Web he trabajado desde las bases de HTML, CSS y
          JavaScript hasta herramientas modernas como React, Vite y Next.js.
        </p>
        <p>
          El curso me ayudo a fortalecer mi criterio para construir interfaces, consumir APIs, manejar estados de
          interfaz y organizar proyectos con Git y GitHub. Tambien explore servidores locales con NGINX, rutas,
          formularios, manipulacion del DOM y despliegues web.
        </p>
        <p>
          Uno de los temas que mas me intereso fue el trabajo con APIs: entender metodos HTTP, construir y consumir
          endpoints, manejar errores e integrar datos externos en experiencias web claras. Me gusto bastante el curso y
          quiero seguir aprendiendo frameworks, mejorar mis habilidades de frontend y crear mejores experiencias web.
        </p>
      </div>

      <div className="split-panels">
        <div className="info-panel">
          <h2>Lenguajes</h2>
          <div className="tech-list">
            {languages.map((language) => (
              <TechBadge key={language} name={language} />
            ))}
          </div>
        </div>
        <div className="info-panel">
          <h2>Tecnologias</h2>
          <div className="tech-list">
            {tools.map((tool) => (
              <TechBadge key={tool} name={tool} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
