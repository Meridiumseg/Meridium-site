const PHASES = [
  {
    n: "01",
    name: "Fundação",
    current: true,
    items: ["Segurança do Trabalho", "Engenharia · Eletrotécnica", "Perícias Técnicas", "Bombeiro Civil", "Business Intelligence", "Educação Corporativa"],
  },
  {
    n: "02",
    name: "Consolidação",
    current: false,
    items: ["Assistência Técnica Judicial", "Auditorias especializadas", "Expansão de equipe multidisciplinar", "Certificações setoriais"],
  },
  {
    n: "03",
    name: "Expansão",
    current: false,
    items: ["Plataforma digital própria", "Academia MERIDIUM", "Biblioteca Técnica", "Inteligência Artificial aplicada", "Monitoramento remoto"],
  },
  {
    n: "04",
    name: "Referência Nacional",
    current: false,
    items: ["Centro de Pesquisa", "Laboratório de Inovação", "Certificações próprias", "Software de gestão", "Ecossistema de soluções técnicas"],
  },
];

export default function Roadmap() {
  return (
    <section id="futuro" className="py-20 border-b" style={{ borderColor: "var(--line)", background: "var(--bg-2)" }}>
      <div className="max-w-[1180px] mx-auto px-[5vw]">
        <div className="max-w-[680px] mb-10">
          <div className="eyebrow">O futuro da MERIDIUM</div>
          <h2 className="font-display font-semibold" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)" }}>
            Um ecossistema de inteligência técnica, construído em fases.
          </h2>
          <p className="mt-3" style={{ color: "var(--fg-dim)" }}>
            Estamos na Fase 1, com as seis frentes já em operação. As fases seguintes representam
            nossa visão de longo prazo.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {PHASES.map((p) => (
            <div
              key={p.n}
              className="card p-5"
              style={
                p.current
                  ? { borderColor: "var(--accent)", background: "linear-gradient(160deg, rgba(59,74,52,.16), rgba(14,39,51,.24))" }
                  : undefined
              }
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[0.66rem] tracking-widest" style={{ color: "var(--accent)" }}>
                  FASE {p.n}
                </span>
                {p.current && (
                  <span className="chip" style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>
                    Atual
                  </span>
                )}
              </div>
              <h5 className="font-display font-semibold text-[1rem] mb-3">{p.name}</h5>
              <ul className="flex flex-col gap-1.5">
                {p.items.map((it) => (
                  <li key={it} className="text-[0.8rem] pl-3 relative" style={{ color: "var(--fg-dim)" }}>
                    <span className="absolute left-0" style={{ color: "var(--accent)" }}>—</span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
