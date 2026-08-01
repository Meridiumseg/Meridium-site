export type DivisionCategory = {
  name: string;
  items: string[];
};

export type DivisionFlagship = {
  serviceName: string;
  solutionName: string;
  tagline: string;
  deliverables: string[];
};

export default function DivisionTemplate({
  eyebrow,
  title,
  intro,
  categories,
  flagship,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  categories: DivisionCategory[];
  flagship: DivisionFlagship;
}) {
  return (
    <main className="pt-20">
      <section
        className="py-20 border-b"
        style={{
          borderColor: "var(--line)",
          background:
            "radial-gradient(ellipse 80% 60% at 15% 20%, rgba(59,74,52,0.3), transparent 60%), radial-gradient(ellipse 70% 60% at 85% 80%, rgba(22,63,69,0.4), transparent 60%)",
        }}
      >
        <div className="max-w-[820px] mx-auto px-[6vw]">
          <div className="eyebrow">{eyebrow}</div>
          <h1 className="font-display font-semibold mb-4" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)" }}>
            {title}
          </h1>
          <p style={{ color: "var(--fg-dim)", fontSize: "1.02rem" }}>{intro}</p>
          <div className="mt-7">
            <a href="/#contato" className="btn btn-solid">Solicitar Diagnóstico Técnico</a>
          </div>
        </div>
      </section>

      <section className="py-20 border-b" style={{ borderColor: "var(--line)", background: "var(--bg-2)" }}>
        <div className="max-w-[1180px] mx-auto px-[5vw]">
          <div className="max-w-[680px] mb-10">
            <div className="eyebrow">Especialidades técnicas</div>
            <h2 className="font-display font-semibold" style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)" }}>
              Onde atuamos dentro desta divisão.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {categories.map((c) => (
              <div key={c.name} className="card p-6">
                <h5 className="font-display font-semibold text-[1rem] mb-3">{c.name}</h5>
                <div className="flex flex-wrap gap-2">
                  {c.items.map((it) => (
                    <span key={it} className="chip">{it}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-b" style={{ borderColor: "var(--line)" }}>
        <div className="max-w-[820px] mx-auto px-[6vw]">
          <div className="eyebrow">Solução em destaque</div>
          <p className="text-[0.85rem] mb-1" style={{ color: "var(--fg-dim)" }}>
            Em vez de {flagship.serviceName}, entregamos:
          </p>
          <h2 className="font-display font-semibold mb-2" style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.1rem)" }}>
            {flagship.solutionName}
          </h2>
          <p className="italic mb-6" style={{ color: "var(--accent)" }}>{flagship.tagline}</p>
          <div className="card p-6">
            <p className="font-mono text-[0.68rem] tracking-widest mb-4" style={{ color: "var(--accent)" }}>
              O QUE VOCÊ RECEBE
            </p>
            <ul className="flex flex-col gap-2">
              {flagship.deliverables.map((d) => (
                <li key={d} className="text-[0.9rem] pl-5 relative">
                  <span className="absolute left-0" style={{ color: "var(--accent)" }}>✓</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        className="py-20 text-center"
        style={{ background: "linear-gradient(160deg, rgba(59,74,52,.2), rgba(14,39,51,.4))" }}
      >
        <div className="max-w-[600px] mx-auto px-[6vw]">
          <h2 className="font-display font-semibold mb-4" style={{ fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)" }}>
            Vamos conversar sobre a sua operação?
          </h2>
          <a href="/#contato" className="btn btn-solid">Solicitar Diagnóstico Técnico</a>
        </div>
      </section>
    </main>
  );
}
