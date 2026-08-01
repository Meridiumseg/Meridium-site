const CHALLENGES = [
  "Redução de riscos operacionais",
  "Atendimento às normas regulamentadoras",
  "Gestão eficiente da segurança",
  "Controle documental",
  "Eficiência energética",
  "Inteligência para tomada de decisões",
  "Cultura organizacional",
  "Business Intelligence",
];

export default function ImpactSection() {
  return (
    <section className="py-20 border-b" style={{ borderColor: "var(--line)", background: "var(--bg-2)" }}>
      <div className="max-w-[1180px] mx-auto px-[5vw]">
        <div className="max-w-[680px] mb-10">
          <div className="eyebrow">Um convite à reflexão</div>
          <h2 className="font-display font-semibold" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)" }}>
            Sua empresa está preparada para os desafios atuais?
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {CHALLENGES.map((c) => (
            <div key={c} className="chip text-left px-4 py-3 leading-snug" style={{ fontFamily: "inherit", fontSize: "0.86rem" }}>
              {c}
            </div>
          ))}
        </div>
        <p className="max-w-[680px]" style={{ color: "var(--fg-dim)" }}>
          A MERIDIUM conecta todas essas soluções em um único ecossistema — para que sua empresa
          pare de resolver problemas isolados e passe a tomar decisões estratégicas.
        </p>
      </div>
    </section>
  );
}
