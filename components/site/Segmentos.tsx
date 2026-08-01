const SEGMENTS = [
  { emoji: "🏭", name: "Indústrias" },
  { emoji: "🏗", name: "Construção Civil" },
  { emoji: "⚡", name: "Setor Elétrico" },
  { emoji: "🌾", name: "Agronegócio" },
  { emoji: "🏢", name: "Comércio" },
  { emoji: "🏥", name: "Saúde" },
  { emoji: "🏫", name: "Educação" },
  { emoji: "🏛", name: "Órgãos Públicos" },
];

export default function Segmentos() {
  return (
    <section className="py-20 border-b" style={{ borderColor: "var(--line)" }}>
      <div className="max-w-[1180px] mx-auto px-[5vw]">
        <div className="max-w-[680px] mb-10">
          <div className="eyebrow">Segmentos atendidos</div>
          <h2 className="font-display font-semibold" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)" }}>
            Soluções técnicas para diferentes realidades operacionais.
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SEGMENTS.map((s) => (
            <div key={s.name} className="card p-5 text-center">
              <span style={{ fontSize: "1.8rem" }}>{s.emoji}</span>
              <h5 className="font-display font-semibold text-[0.9rem] mt-2">{s.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
