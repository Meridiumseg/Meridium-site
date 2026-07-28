"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { href: "/admin/servicos", label: "Serviços" },
  { href: "/admin/portfolio", label: "Portfólio" },
  { href: "/admin/noticias", label: "Notícias" },
  { href: "/admin/equipe", label: "Equipe" },
  { href: "/admin/legislacao", label: "Legislação" },
  { href: "/admin/contato", label: "Contato" },
];

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <div className="flex gap-1 px-[5vw] pt-4 flex-wrap">
      {TABS.map((t) => (
        <Link
          key={t.href}
          href={t.href}
          className="px-4 py-2 text-[0.8rem] border"
          style={{
            borderColor: pathname === t.href ? "var(--accent)" : "var(--card-line)",
            color: pathname === t.href ? "var(--accent)" : "var(--fg-dim)",
          }}
        >
          {t.label}
        </Link>
      ))}
    </div>
  );
}
