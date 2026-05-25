import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Jose Miguel Rosas Guerra | Web Portfolio",
  description:
    "Portafolio web de Jose Miguel Rosas Guerra, estudiante de Ciencias de la Computacion en UVG.",
  authors: [{ name: "Jose Miguel Rosas Guerra" }]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className} suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
