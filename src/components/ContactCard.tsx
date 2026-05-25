import { Code2, Link2, Mail } from "lucide-react";

const links = [
  { label: "roguemijose@gmail.com", href: "mailto:roguemijose@gmail.com", icon: Mail },
  { label: "GitHub", href: "https://github.com/MiguelRosas11", icon: Code2 },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/miguel-rosas-502489380/?skipRedirect=true",
    icon: Link2
  }
];

export function ContactCard() {
  return (
    <div className="contact-card">
      {links.map(({ label, href, icon: Icon }) => (
        <a href={href} key={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer">
          <Icon size={20} aria-hidden />
          {label}
        </a>
      ))}
    </div>
  );
}
