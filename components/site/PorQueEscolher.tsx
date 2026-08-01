const REASONS = [
  "Atendimento consultivo",
  "Equipe multidisciplinar",
  "Soluções integradas",
  "Inteligência de dados",
  "Atendimento personalizado",
  "Foco em resultados",
  "Visão estratégica",
  "Atualização técnica constante",
];

export default function PorQueEscolher() {
  return (
    <section className="py-20 border-b" style={{ borderColor: "var(--line)", background: "var(--bg-2)" }}>
      <div className="max-w-[1180px] mx-auto px-[5vw]">
        <div className="max-w-[680px] mb-10">
          <div className="eyebrow">Por que escolher a MERIDIUM?</div>
          <h2 className="font-display font-semibold" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)" }}>
            Oito razões que fazem a diferença na prática.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {REASONS.map((r) => (
            <div key={r} className="flex items-center gap-3 card px-5 py-4">
              <span style={{ color: "var(--accent)" }}>✓</span>
              <span className="text-[0.92rem]">{r}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
