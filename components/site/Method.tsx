const PHASES = [
  "Imersão",
  "Diagnóstico",
  "Análise",
  "Planejamento",
  "Implementação",
  "Monitoramento",
  "Otimização",
  "Excelência",
];

export default function Method() {
  return (
    <section id="metodo" className="py-20 border-b" style={{ borderColor: "var(--line)", background: "var(--bg-2)" }}>
      <div className="max-w-[1180px] mx-auto px-[5vw] grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 items-center">
        <div>
          <div className="eyebrow">Nosso método</div>
          <h2 className="font-display font-semibold mb-4" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)" }}>
            Método MERIDIUM®
          </h2>
          <p style={{ color: "var(--fg-dim)" }}>
            Todas as soluções da MERIDIUM seguem uma metodologia estruturada que integra
            conhecimento técnico, gestão, tecnologia e melhoria contínua para entregar resultados
            consistentes — do primeiro contato até a excelência operacional.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {PHASES.map((p, i) => (
            <div key={p} className="card p-4 flex items-center gap-3">
              <span
                className="font-display font-semibold flex items-center justify-center flex-shrink-0"
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  border: "1px solid var(--accent)",
                  color: "var(--accent)",
                  fontSize: "0.9rem",
                }}
              >
                {i + 1}
              </span>
              <span className="font-display font-semibold text-[0.92rem]">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
