import Image from "next/image";
import Link from "next/link";
import type { ContactInfo } from "@/lib/types";

const DIVISIONS = [
  ["MERIDIUM Safety", "/safety"],
  ["MERIDIUM Engineering", "/engineering"],
  ["MERIDIUM Expert", "/expert"],
  ["MERIDIUM Analytics", "/analytics"],
  ["MERIDIUM Academy", "/academy"],
];

export default function Header({ contact }: { contact: ContactInfo }) {
  const wppLink = "https://wa.me/55" + (contact.phone || "").replace(/\D/g, "");

  return (
    <header className="sticky top-0 z-50 border-b" style={{ borderColor: "var(--line)", background: "rgba(10,17,16,0.9)", backdropFilter: "blur(10px)" }}>
      <div className="max-w-[1180px] mx-auto px-[5vw] h-[74px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Símbolo MERIDIUM" width={34} height={34} />
          <div>
            <span className="font-display font-semibold text-[1.15rem] tracking-wide block">MERIDIUM</span>
            <span className="font-mono text-[0.6rem] tracking-widest block" style={{ color: "var(--fg-dim)" }}>
              INTELIGÊNCIA TÉCNICA APLICADA
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-5">
          <a href="/#sobre" className="text-[0.79rem] hover:text-white whitespace-nowrap" style={{ color: "var(--fg-dim)" }}>Sobre</a>
          <a href="/#manifesto" className="text-[0.79rem] hover:text-white whitespace-nowrap" style={{ color: "var(--fg-dim)" }}>Manifesto</a>
          <a href="/#metodo" className="text-[0.79rem] hover:text-white whitespace-nowrap" style={{ color: "var(--fg-dim)" }}>Método</a>
          <a href="/#atuacao" className="text-[0.79rem] hover:text-white whitespace-nowrap" style={{ color: "var(--fg-dim)" }}>Soluções</a>

          <details className="relative">
            <summary
              className="text-[0.79rem] cursor-pointer list-none whitespace-nowrap"
              style={{ color: "var(--fg-dim)" }}
            >
              Unidades ▾
            </summary>
            <div
              className="absolute top-6 left-0 flex flex-col card py-2 min-w-[210px]"
              style={{ background: "var(--bg)" }}
            >
              {DIVISIONS.map(([label, href]) => (
                <Link key={href} href={href} className="text-[0.82rem] px-4 py-2 hover:text-white" style={{ color: "var(--fg-dim)" }}>
                  {label}
                </Link>
              ))}
            </div>
          </details>

          <a href="/#portfolio" className="text-[0.79rem] hover:text-white whitespace-nowrap" style={{ color: "var(--fg-dim)" }}>Portfólio</a>
          <a href="/#equipe" className="text-[0.79rem] hover:text-white whitespace-nowrap" style={{ color: "var(--fg-dim)" }}>Equipe</a>
          <a href="/#contato" className="text-[0.79rem] hover:text-white whitespace-nowrap" style={{ color: "var(--fg-dim)" }}>Contato</a>
        </nav>

        <div className="flex items-center gap-2">
          <a href="/#contato" className="btn hidden md:inline-flex">Contato</a>
          <a href={wppLink} target="_blank" rel="noreferrer" className="btn btn-wpp">
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
