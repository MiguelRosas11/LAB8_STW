import type { Project } from "@/data/projects";
import { ProjectImage } from "./ProjectImage";

export function ProjectGallery({ project }: { project: Project }) {
  return (
    <div className="gallery-grid">
      {project.images.map((image, index) => (
        <figure className="gallery-item" key={image}>
          <ProjectImage src={image} alt={`${project.name} captura ${index + 1}`} />
          <figcaption>{project.recommendedScreenshots[index]}</figcaption>
        </figure>
      ))}
    </div>
  );
}
