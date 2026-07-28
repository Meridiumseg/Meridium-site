import Image from "next/image";
import Link from "next/link";
import type { ContactInfo } from "@/lib/types";

export default function Header({ contact }: { contact: ContactInfo }) {
  const wppLink = "https://wa.me/55" + (contact.phone || "").replace(/\D/g, "");

  return (
    <header className="sticky top-0 z-50 border-b" style={{ borderColor: "var(--line)", background: "rgba(10,17,16,0.9)", backdropFilter: "blur(10px)" }}>
      <div className="max-w-[1180px] mx-auto px-[5vw] h-[74px] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Símbolo MERIDIUM" width={34} height={34} />
          <div>
            <span className="font-display font-semibold text-[1.15rem] tracking-wide block">MERIDIUM</span>
            <span className="font-mono text-[0.6rem] tracking-widest block" style={{ color: "var(--fg-dim)" }}>
              INTELIGÊNCIA TÉCNICA
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-7">
          {[
            ["Sobre", "#sobre"],
            ["Serviços", "#servicos"],
            ["Portfólio", "#portfolio"],
            ["Notícias", "#noticias"],
            ["Legislação", "#legislacao"],
            ["Equipe", "#equipe"],
            ["Contato", "#contato"],
          ].map(([label, href]) => (
            <a key={href} href={href} className="text-[0.83rem] hover:text-white" style={{ color: "var(--fg-dim)" }}>
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contato" className="btn hidden md:inline-flex">Contato</a>
          <a href={wppLink} target="_blank" rel="noreferrer" className="btn btn-wpp">
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
