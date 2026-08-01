const PILLARS = [
  { name: "Inteligência Técnica", desc: "Transformamos dados em decisões." },
  { name: "Engenharia Aplicada", desc: "Soluções fundamentadas em conhecimento técnico." },
  { name: "Segurança Estratégica", desc: "Proteção de pessoas, processos e patrimônio." },
  { name: "Business Intelligence", desc: "Indicadores para decisões mais rápidas e assertivas." },
  { name: "Atendimento Consultivo", desc: "Cada cliente possui uma realidade única." },
  { name: "Melhoria Contínua", desc: "Acompanhamento permanente da evolução." },
];

export default function Diferencial() {
  return (
    <section className="py-20 border-b" style={{ borderColor: "var(--line)", background: "var(--bg-2)" }}>
      <div className="max-w-[1180px] mx-auto px-[5vw]">
        <div className="max-w-[680px] mb-10">
          <div className="eyebrow">Nosso diferencial</div>
          <h2 className="font-display font-semibold" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)" }}>
            Seis pilares sustentam tudo o que entregamos.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PILLARS.map((p) => (
            <div key={p.name} className="card p-6">
              <h5 className="font-display font-semibold text-[1rem] mb-2">{p.name}</h5>
              <p className="text-[0.86rem]" style={{ color: "var(--fg-dim)" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
