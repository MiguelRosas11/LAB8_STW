import { Send } from "lucide-react";
import { ContactCard } from "@/components/ContactCard";
import { SectionTitle } from "@/components/SectionTitle";

export default function ContactPage() {
  return (
    <section className="page-section contact-layout">
      <div>
        <SectionTitle
          title="Contacto"
          description="Canales para conversar sobre proyectos, repositorios o trabajo academico."
        />
        <ContactCard />
      </div>

      <form className="contact-form">
        <label>
          Nombre
          <input type="text" name="name" placeholder="Tu nombre" />
        </label>
        <label>
          Correo
          <input type="email" name="email" placeholder="correo@ejemplo.com" />
        </label>
        <label>
          Mensaje
          <textarea name="message" rows={6} placeholder="Escribe tu mensaje" />
        </label>
        <button type="button">
          <Send size={18} aria-hidden />
          Enviar
        </button>
      </form>
    </section>
  );
}
