import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MERIDIUM — Engenharia e Segurança do Trabalho",
  description:
    "Engenharia, consultoria, perícias e tecnologia aplicadas à segurança do trabalho. Inteligência técnica para operações que não podem parar.",
  metadataBase: new URL("https://www.meridium.com.br"),
  openGraph: {
    title: "MERIDIUM — Inteligência Técnica",
    description:
      "Engenharia, consultoria, perícias e tecnologia aplicadas à segurança do trabalho.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
