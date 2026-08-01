export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="py-24 border-b"
      style={{
        borderColor: "var(--line)",
        background: "linear-gradient(160deg, rgba(59,74,52,.14), rgba(14,39,51,.3))",
      }}
    >
      <div className="max-w-[820px] mx-auto px-[6vw] text-center">
        <div className="eyebrow justify-center">Manifesto</div>
        <p
          className="font-display leading-snug"
          style={{ fontSize: "clamp(1.3rem, 2.4vw, 1.9rem)" }}
        >
          Toda empresa possui riscos. Alguns podem ser vistos. Outros permanecem invisíveis até
          que se transformem em perdas financeiras, acidentes ou interrupções operacionais.
        </p>
        <p className="mt-6 text-[1rem]" style={{ color: "var(--fg-dim)" }}>
          A MERIDIUM nasceu da convicção de que prevenir é muito mais do que cumprir normas.
          Prevenir significa compreender sistemas, entender processos, antecipar cenários e
          transformar informações em decisões. Reunimos engenharia, segurança do trabalho,
          eletrotécnica, tecnologia, inteligência de dados e gestão para construir soluções
          completas — porque acreditamos que proteger pessoas também significa fortalecer
          empresas, e fortalecer empresas é contribuir para o desenvolvimento da sociedade.
        </p>
      </div>
    </section>
  );
}
