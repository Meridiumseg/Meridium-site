import Image from "next/image";
import Link from "next/link";
import type { ContactInfo } from "@/lib/types";

export default function Footer({ contact }: { contact: ContactInfo }) {
  const wppLink = "https://wa.me/55" + (contact.phone || "").replace(/\D/g, "");

  return (
    <>
      <footer className="pt-14 pb-8">
        <div className="max-w-[1180px] mx-auto px-[5vw]">
          <div className="grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr] gap-8 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image src="/logo.png" alt="" width={26} height={26} />
                <span className="font-display font-semibold text-[1.15rem]">MERIDIUM</span>
              </div>
              <p className="max-w-[32ch] text-[0.85rem]" style={{ color: "var(--fg-dim)" }}>
                Inteligência Técnica Aplicada — integrando engenharia, segurança do trabalho,
                eletrotécnica, perícias, BI e educação corporativa em Rondônia e Mato Grosso.
              </p>
            </div>
            <div>
              <h5 className="font-mono text-[0.68rem] tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
                Empresa
              </h5>
              <a href="#sobre" className="block text-[0.85rem] mb-2" style={{ color: "var(--fg-dim)" }}>Sobre nós</a>
              <a href="#atuacao" className="block text-[0.85rem] mb-2" style={{ color: "var(--fg-dim)" }}>Soluções</a>
              <a href="#portfolio" className="block text-[0.85rem] mb-2" style={{ color: "var(--fg-dim)" }}>Portfólio</a>
              <a href="#equipe" className="block text-[0.85rem] mb-2" style={{ color: "var(--fg-dim)" }}>Equipe</a>
            </div>
            <div>
              <h5 className="font-mono text-[0.68rem] tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
                Contato
              </h5>
              <a href={`mailto:${contact.email}`} className="block text-[0.85rem] mb-2" style={{ color: "var(--fg-dim)" }}>
                {contact.email}
              </a>
              <a href={wppLink} target="_blank" rel="noreferrer" className="block text-[0.85rem] mb-2" style={{ color: "var(--fg-dim)" }}>
                {contact.phone}
              </a>
              <Link href="/admin/login" className="block text-[0.85rem]" style={{ color: "var(--fg-dim)" }}>
                Área administrativa
              </Link>
            </div>
          </div>
          <div className="border-t pt-5 flex justify-between flex-wrap gap-3 text-[0.76rem]" style={{ borderColor: "var(--line)", color: "var(--fg-dim)" }}>
            <span>© {new Date().getFullYear()} MERIDIUM. Todos os direitos reservados.</span>
            <span className="font-mono">MRD—SITE—2026</span>
          </div>
        </div>
      </footer>

      <a
        href={wppLink}
        target="_blank"
        rel="noreferrer"
        title="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-[60] w-[52px] h-[52px] rounded-full flex items-center justify-center"
        style={{ background: "#1c3b2c", border: "1px solid #2c4d3a", color: "#e8f0e4", boxShadow: "0 8px 20px rgba(0,0,0,.35)" }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.9 9.9 0 0 0 4.76 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.83 14.08c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.79-4.17-4.94-4.36-.14-.2-1.18-1.57-1.18-3 0-1.42.75-2.12 1.01-2.41.27-.29.58-.36.78-.36.2 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.82 2 .89 2.15.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.16-.29.36-.42.48-.14.13-.28.28-.12.55.16.27.71 1.17 1.53 1.9 1.05.93 1.94 1.22 2.21 1.36.27.14.43.12.59-.07.16-.19.68-.79.87-1.06.18-.27.36-.22.6-.13.24.09 1.53.72 1.79.85.27.13.45.2.51.31.07.11.07.63-.17 1.31z" />
        </svg>
      </a>
    </>
  );
}
