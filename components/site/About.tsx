import Image from "next/image";
import type { TeamMember } from "@/lib/types";

const VALUES = [
  { name: "Excelência Técnica", desc: "Rigor metodológico, atualização constante e alto padrão em cada entrega." },
  { name: "Ética", desc: "Transparência, imparcialidade e respeito à legislação em toda relação." },
  { name: "Segurança", desc: "A proteção da vida e do patrimônio é prioridade em cada decisão." },
  { name: "Inteligência", desc: "Decisões baseadas em dados, evidências e análise crítica." },
  { name: "Inovação", desc: "Melhoria contínua por meio de tecnologia, pesquisa e criatividade." },
  { name: "Comprometimento", desc: "Cada projeto é um compromisso com o sucesso do cliente." },
  { name: "Precisão", desc: "Processos organizados e informações confiáveis e verificáveis." },
  { name: "Sustentabilidade", desc: "Soluções com benefícios econômicos, sociais e ambientais duradouros." },
];

export default function About({ lead }: { lead: TeamMember | null }) {
  return (
    <section id="sobre" className="py-20 border-b" style={{ borderColor: "var(--line)" }}>
      <div className="max-w-[1180px] mx-auto px-[5vw]">
        <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-12 mb-16">
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
              <h3 className="font-display font-semibold text-[1.3rem] mb-3">
                Construindo um novo padrão em Inteligência Técnica.
              </h3>
              <p style={{ fontSize: "1rem" }}>
                A MERIDIUM nasceu da união entre conhecimento técnico, visão estratégica e
                compromisso com a excelência. Nossa atuação integra Segurança do Trabalho,
                Engenharia, Gestão de Riscos, Inteligência de Dados, Perícias Técnicas e Soluções
                Corporativas, oferecendo uma abordagem moderna e orientada por resultados.
              </p>
              <p className="mt-3" style={{ fontSize: "1rem", color: "var(--fg-dim)" }}>
                Mais do que atender exigências legais, ajudamos empresas a desenvolver processos
                mais seguros, eficientes e sustentáveis — porque acreditamos que prevenção baseada
                em inteligência gera crescimento.
              </p>
            </div>
            <div className="border-t pt-4" style={{ borderColor: "var(--line)" }}>
              <h4 className="font-display font-semibold text-[1.05rem] mb-1">Missão</h4>
              <p style={{ color: "var(--fg-dim)", fontSize: "0.9rem" }}>
                Desenvolver soluções integradas em engenharia, segurança, inteligência técnica e
                tecnologia que promovam conformidade, eficiência operacional e redução de riscos,
                contribuindo para o crescimento sustentável de nossos clientes.
              </p>
            </div>
            <div className="border-t pt-4" style={{ borderColor: "var(--line)" }}>
              <h4 className="font-display font-semibold text-[1.05rem] mb-1">Visão</h4>
              <p style={{ color: "var(--fg-dim)", fontSize: "0.9rem" }}>
                Ser reconhecida nacionalmente como a principal referência brasileira em
                Inteligência Técnica Aplicada, integrando engenharia, segurança, tecnologia e
                gestão para transformar a forma como organizações tomam decisões estratégicas.
              </p>
            </div>
          </div>
        </div>

        <div className="eyebrow">Valores</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {VALUES.map((v) => (
            <div key={v.name} className="card p-4">
              <h5 className="font-display font-semibold text-[0.92rem] mb-1">{v.name}</h5>
              <p className="text-[0.8rem]" style={{ color: "var(--fg-dim)" }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
