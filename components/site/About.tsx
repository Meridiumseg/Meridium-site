import Image from "next/image";
import type { TeamMember } from "@/lib/types";

export default function About({ lead }: { lead: TeamMember | null }) {
  return (
    <section id="sobre" className="py-20 border-b" style={{ borderColor: "var(--line)" }}>
      <div className="max-w-[1180px] mx-auto px-[5vw] grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-12">
        <div>
          <div className="relative w-full aspect-[3/4] card overflow-hidden" style={{ filter: "grayscale(.15)" }}>
            {lead?.photo_url && (
              <Image src={lead.photo_url} alt={lead.name} fill style={{ objectFit: "cover" }} />
            )}
          </div>
          <div className="mt-4">
            <div className="font-display font-semibold text-[1.1rem]">{lead?.name ?? "Douglas de Paula"}</div>
            <div className="font-mono text-[0.68rem]" style={{ color: "var(--accent)" }}>
              {lead?.role ?? "Diretor Executivo"}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-7">
          <div>
            <div className="eyebrow">Quem somos</div>
            <p style={{ fontSize: "1rem" }}>
              A MERIDIUM nasce da experiência técnica em segurança do trabalho aplicada à realidade
              de pequenas e médias indústrias — traduzindo exigências normativas em processos
              claros, executáveis e sustentáveis.
            </p>
          </div>
          <div className="border-t pt-4" style={{ borderColor: "var(--line)" }}>
            <h4 className="font-display font-semibold text-[1.05rem] mb-1">O que fazemos</h4>
            <p style={{ color: "var(--fg-dim)", fontSize: "0.9rem" }}>
              Engenharia, consultoria, perícias e tecnologia aplicadas à segurança do trabalho,
              unindo diagnóstico técnico, documentação legal e acompanhamento de campo.
            </p>
          </div>
          <div className="border-t pt-4" style={{ borderColor: "var(--line)" }}>
            <h4 className="font-display font-semibold text-[1.05rem] mb-1">Missão</h4>
            <p style={{ color: "var(--fg-dim)", fontSize: "0.9rem" }}>
              Reduzir risco operacional e passivo trabalhista por meio de soluções técnicas
              objetivas, sem burocracia desnecessária.
            </p>
          </div>
          <div className="border-t pt-4" style={{ borderColor: "var(--line)" }}>
            <h4 className="font-display font-semibold text-[1.05rem] mb-1">Visão</h4>
            <p style={{ color: "var(--fg-dim)", fontSize: "0.9rem" }}>
              Ser referência regional em inteligência técnica para o setor industrial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
