export type Project = {
  id: string;
  slug: string;
  name: string;
  type: "Laboratorio" | "Proyecto" | "Laboratorio de reposicion";
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  repoUrl: string;
  liveUrl?: string | null;
  imageFolder: string;
  images: string[];
  highlights: string[];
  recommendedScreenshots: string[];
};

const assetPath = (folder: string, file: string) => `/assets/${folder}/${file}`;

export const projects: Project[] = [
  {
    id: "lab2-stw",
    slug: "lab2-stw",
    name: "LAB2_STW",
    type: "Laboratorio",
    shortDescription:
      "Historia interactiva mejorada visualmente con CSS, enfocada en una experiencia mas clara, consistente y atractiva.",
    fullDescription:
      "LAB2_STW continuo una historia interactiva tipo Choose Your Own Adventure creada con paginas HTML enlazadas. El trabajo se enfoco en la parte visual: aplicar CSS, crear una identidad grafica consistente y mejorar la lectura de las decisiones, pantallas intermedias y finales. Para este portafolio se destaca la seccion Styling my story, centrada en el diseno de la experiencia.",
    technologies: ["HTML", "CSS", "NGINX", "Git", "GitHub"],
    repoUrl: "https://github.com/MiguelRosas11/Lab_2_STW",
    liveUrl: null,
    imageFolder: "LAB2_STW",
    images: [
      assetPath("LAB2_STW", "LAB2_STW1.png"),
      assetPath("LAB2_STW", "LAB2_STW2.png")
    ],
    highlights: [
      "Historia interactiva basada en decisiones",
      "Navegacion entre paginas HTML",
      "Estilo visual consistente",
      "Botones de decision mas claros",
      "Uso de imagenes dentro de marcos",
      "Ejecucion local con NGINX"
    ],
    recommendedScreenshots: [
      "Pantalla de inicio de la historia",
      "Pantalla de una decision intermedia o final"
    ]
  },
  {
    id: "lab4-stw",
    slug: "lab4-stw",
    name: "LAB4_STW",
    type: "Laboratorio",
    shortDescription:
      "Aplicacion para registrar misiones o habitos, asignar experiencia y mostrar el avance del usuario.",
    fullDescription:
      "LAB4_STW consistio en crear disci-app, una aplicacion pensada para organizar habitos y tareas como misiones. Permite crear actividades con nombre, descripcion y dificultad, marcarlas como completadas, acumular XP global y mostrar una categoria segun el progreso del usuario.",
    technologies: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
    repoUrl: "https://github.com/MiguelRosas11/LAB4_STW",
    liveUrl: null,
    imageFolder: "LAB4_STW",
    images: [
      assetPath("LAB4_STW", "LAB4_STW1.png"),
      assetPath("LAB4_STW", "LAB4_STW2.png")
    ],
    highlights: [
      "Creacion de misiones o habitos",
      "Asignacion de XP segun dificultad",
      "XP global acumulado",
      "Categorias o rangos por progreso",
      "Renderizado dinamico",
      "Manipulacion del DOM y eventos"
    ],
    recommendedScreenshots: [
      "Vista principal con formulario y lista de misiones",
      "Vista con misiones completadas, XP global y rango"
    ]
  },
  {
    id: "proyecto1-stw",
    slug: "proyecto1-stw",
    name: "Proyecto1_STW",
    type: "Proyecto",
    shortDescription:
      "Aplicacion web tipo blog con API, busqueda, filtros, detalle de publicaciones y creacion de contenido.",
    fullDescription:
      "Proyecto1_STW tomo como punto de partida una practica previa de mini blog con APIs y la amplio hacia una version mas completa. La aplicacion permite consultar publicaciones, revisar detalles, buscar y filtrar contenido, crear publicaciones con POST y mostrar respuestas claras cuando la API no guarda cambios de forma permanente.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "DummyJSON API",
      "REST API",
      "Git",
      "GitHub",
      "GitHub Pages"
    ],
    repoUrl: "https://github.com/MiguelRosas11/Proyecto1_STW",
    liveUrl: null,
    imageFolder: "Proyecto1_STW",
    images: [
      assetPath("Proyecto1_STW", "Proyecto1_STW1.png"),
      assetPath("Proyecto1_STW", "Proyecto1_STW2.png"),
      assetPath("Proyecto1_STW", "Proyecto1_STW3.png"),
      assetPath("Proyecto1_STW", "Proyecto1_STW4.png")
    ],
    highlights: [
      "Listado de publicaciones desde una API",
      "Vista de detalle por publicacion",
      "Busqueda y filtros por criterios",
      "Formulario para crear publicaciones",
      "Solicitudes GET y POST",
      "Estados de carga, error y exito",
      "Codigo modular y diseno responsive"
    ],
    recommendedScreenshots: [
      "Home o listado principal de publicaciones",
      "Vista de detalle de una publicacion",
      "Vista de busqueda o filtros",
      "Formulario de creacion o edicion"
    ]
  },
  {
    id: "lab-reposicion-stw",
    slug: "lab-reposicion-stw",
    name: "LAB_REPOSICION_STW",
    type: "Laboratorio de reposicion",
    shortDescription:
      "Tienda web simulada con catalogo, carrito, filtros, checkout y landing secundaria en Next.js.",
    fullDescription:
      "LAB_REPOSICION_STW fue una tienda web de practica. La aplicacion principal se construyo con Vite y React, incluyendo catalogo de productos, carrito de compras, busqueda, filtros, ordenamiento por precio, checkout simulado y persistencia con localStorage. Tambien incluyo una mini app secundaria en Next.js como landing informativa para MiniMarket Web.",
    technologies: [
      "React",
      "Vite",
      "Next.js",
      "CSS",
      "JavaScript",
      "localStorage",
      "Git",
      "GitHub",
      "GitHub Pages"
    ],
    repoUrl: "https://github.com/MiguelRosas11/LAB_REPOSICION_STW",
    liveUrl: null,
    imageFolder: "LAB_REPOSICION_STW",
    images: [
      assetPath("LAB_REPOSICION_STW", "LAB_REPOSICION_STW1.png"),
      assetPath("LAB_REPOSICION_STW", "LAB_REPOSICION_STW2.png"),
      assetPath("LAB_REPOSICION_STW", "LAB_REPOSICION_STW3.png"),
      assetPath("LAB_REPOSICION_STW", "LAB_REPOSICION_STW4.png"),
      assetPath("LAB_REPOSICION_STW", "LAB_REPOSICION_STW5.png")
    ],
    highlights: [
      "Catalogo con productos",
      "Carrito visible y persistente",
      "Agregar, eliminar y modificar cantidades",
      "Busqueda, filtro por categoria y etiquetas",
      "Ordenamiento por precio",
      "Checkout simulado con validacion",
      "Landing secundaria en Next.js"
    ],
    recommendedScreenshots: [
      "Catalogo principal de productos",
      "Carrito con productos agregados",
      "Filtros, busqueda u ordenamiento aplicados",
      "Formulario de checkout o resumen de compra",
      "Landing secundaria en Next.js"
    ]
  },
  {
    id: "not-balatro",
    slug: "not-balatro",
    name: "Not-Balatro",
    type: "Proyecto",
    shortDescription:
      "Proyecto web interactivo inspirado en un juego de cartas, centrado en logica, componentes e interfaz.",
    fullDescription:
      "Not-Balatro se presenta como un proyecto web interactivo inspirado en una experiencia de juego. El enfoque principal es mostrar practica de desarrollo frontend moderno, logica de interaccion, diseno de interfaz, organizacion de componentes y experiencia de usuario sin inventar funcionalidades no verificadas.",
    technologies: ["JavaScript", "React", "Vite", "CSS", "Git", "GitHub"],
    repoUrl: "https://github.com/MiguelRosas11/Not-Balatro",
    liveUrl: null,
    imageFolder: "Not-Balatro",
    images: [
      assetPath("Not-Balatro", "Not-Balatro1.png"),
      assetPath("Not-Balatro", "Not-Balatro2.png"),
      assetPath("Not-Balatro", "Not-Balatro3.png")
    ],
    highlights: [
      "Proyecto interactivo",
      "Logica de juego o simulacion",
      "Interfaz visual personalizada",
      "Organizacion de componentes",
      "Practica de frontend moderno"
    ],
    recommendedScreenshots: [
      "Pantalla principal",
      "Vista de interaccion o partida",
      "Vista de resultado o estado avanzado"
    ]
  }
];

export const featuredProjects = projects.slice(0, 5);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
