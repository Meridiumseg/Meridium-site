export default function CTABanner() {
  return (
    <section
      className="py-20 border-b text-center"
      style={{
        borderColor: "var(--line)",
        background: "linear-gradient(160deg, rgba(59,74,52,.2), rgba(14,39,51,.4))",
      }}
    >
      <div className="max-w-[680px] mx-auto px-[6vw]">
        <h2 className="font-display font-semibold mb-4" style={{ fontSize: "clamp(1.5rem, 2.6vw, 2.1rem)" }}>
          Vamos construir um ambiente de trabalho mais seguro, eficiente e inteligente?
        </h2>
        <p className="mb-7" style={{ color: "var(--fg-dim)" }}>
          Agende uma conversa técnica com nossa equipe e descubra como a MERIDIUM pode apoiar a
          evolução da sua empresa.
        </p>
        <a href="#contato" className="btn btn-solid">Solicitar Diagnóstico Técnico</a>
      </div>
    </section>
  );
}
