"use client";

import { ImageIcon } from "lucide-react";
import { useState } from "react";

type ProjectImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
};

export function ProjectImage({ src, alt, priority = false }: ProjectImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="image-placeholder" role="img" aria-label={alt}>
        <ImageIcon size={28} aria-hidden />
      </div>
    );
  }

  return (
    <img
      className="project-image"
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      onError={() => setFailed(true)}
    />
  );
}
