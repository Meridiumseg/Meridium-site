import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="pt-20 pb-16"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 15% 20%, rgba(59,74,52,0.3), transparent 60%), radial-gradient(ellipse 70% 60% at 85% 80%, rgba(22,63,69,0.4), transparent 60%)",
      }}
    >
      <div className="max-w-[1180px] mx-auto px-[5vw] grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <Image src="/logo.png" alt="" width={56} height={56} className="mb-6" />
          <div className="eyebrow">Segurança · Engenharia · Inteligência · Tecnologia</div>
          <h1 className="font-display font-semibold leading-tight mb-5" style={{ fontSize: "clamp(2.1rem, 4.4vw, 3.4rem)" }}>
            Inteligência Técnica para{" "}
            <em className="not-italic italic" style={{ color: "var(--accent)" }}>
              empresas que buscam excelência
            </em>
            .
          </h1>
          <p className="max-w-[46ch] mb-8" style={{ color: "var(--fg-dim)" }}>
            A MERIDIUM integra consultoria, engenharia, gestão de riscos, perícias e
            inteligência de dados para transformar desafios técnicos em decisões estratégicas.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#contato" className="btn btn-solid">Solicite um Diagnóstico Técnico</a>
            <a href="#metodo" className="btn">Conheça nosso método</a>
          </div>
        </div>
        <div
          className="card aspect-[4/5] flex items-center justify-center"
          style={{ background: "linear-gradient(160deg, rgba(59,74,52,.25), rgba(14,39,51,.5))" }}
        >
          <Image src="/logo.png" alt="" width={140} height={140} style={{ opacity: 0.9 }} />
        </div>
      </div>
    </section>
  );
}
