const SOLUTIONS = [
  {
    name: "Segurança do Trabalho",
    quote: "Muito além da conformidade legal.",
    items: ["Consultorias", "Auditorias", "Fiscalizações", "Inspeções", "Indicadores", "Gestão"],
  },
  {
    name: "Engenharia",
    quote: "Projetos desenvolvidos com precisão técnica.",
    items: ["Projetos elétricos", "SPDA", "Automação", "Manutenção", "Eletrotécnica"],
  },
  {
    name: "Perícias Técnicas",
    quote: "Análises fundamentadas em evidências.",
    items: ["Perícias", "Assistência Técnica", "Pareceres", "Investigação"],
  },
  {
    name: "Bombeiro Civil",
    quote: "Prevenção e resposta para proteção de vidas e patrimônio.",
    items: ["Brigadas", "Emergências", "Planos", "Treinamentos"],
  },
  {
    name: "Business Intelligence",
    quote: "Transformando informações em vantagem competitiva.",
    items: ["Power BI", "Dashboards", "Indicadores", "IA", "Analytics"],
  },
  {
    name: "Educação Corporativa",
    quote: "Capacitando pessoas para transformar organizações.",
    items: ["Treinamentos", "Cursos", "Workshops", "Palestras"],
  },
];

export default function AreasAtuacao() {
  return (
    <section id="atuacao" className="py-20 border-b" style={{ borderColor: "var(--line)" }}>
      <div className="max-w-[1180px] mx-auto px-[5vw]">
        <div className="max-w-[680px] mb-10">
          <div className="eyebrow">Soluções integradas</div>
          <h2 className="font-display font-semibold" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)" }}>
            Seis frentes. Um único ecossistema de inteligência técnica.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SOLUTIONS.map((s) => (
            <div key={s.name} className="card p-6 flex flex-col gap-3">
              <h5 className="font-display font-semibold text-[1.05rem]">{s.name}</h5>
              <p className="italic text-[0.86rem]" style={{ color: "var(--accent)" }}>
                {s.quote}
              </p>
              <div className="flex flex-wrap gap-2 mt-1">
                {s.items.map((it) => (
                  <span key={it} className="chip">{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
