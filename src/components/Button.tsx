import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ href, children, variant = "primary", className = "", ...props }: ButtonProps) {
  const classes = `button button-${variant} ${className}`.trim();
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a className={classes} href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} {...props}>
      {children}
    </Link>
  );
}
