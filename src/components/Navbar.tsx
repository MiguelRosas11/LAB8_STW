import { Code2 } from "lucide-react";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/about", label: "Sobre mi" },
  { href: "/projects", label: "Proyectos" },
  { href: "/contact", label: "Contacto" }
];

export function Navbar() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Inicio">
        JM<span>RG</span>
      </Link>
      <nav className="nav-links" aria-label="Navegacion principal">
        {navItems.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <a className="github-link" href="https://github.com/MiguelRosas11" target="_blank" rel="noreferrer">
        <Code2 size={18} aria-hidden />
        GitHub
      </a>
    </header>
  );
}
