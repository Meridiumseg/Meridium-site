import type { ServiceTier, LegislationItem } from "@/lib/types";

export default function Services({
  services,
  legislation,
}: {
  services: ServiceTier[];
  legislation: LegislationItem[];
}) {
  return (
    <section id="servicos" className="py-20 border-b" style={{ borderColor: "var(--line)", background: "var(--bg-2)" }}>
      <div className="max-w-[1180px] mx-auto px-[5vw]">
        <div className="max-w-[620px] mb-10">
          <div className="eyebrow">Serviços</div>
          <h2 className="font-display font-semibold" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)" }}>
            Modelos de atendimento sob medida para cada estágio de maturidade.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {services.map((s) => (
            <div
              key={s.id}
              className="card p-7 flex flex-col gap-4"
              style={
                s.featured
                  ? { borderColor: "var(--accent)", background: "linear-gradient(160deg, rgba(59,74,52,.16), rgba(14,39,51,.24))" }
                  : undefined
              }
            >
              <span className="font-mono text-[0.66rem] tracking-widest" style={{ color: "var(--accent)" }}>
                {s.tier}
              </span>
              <h3 className="font-display font-semibold text-[1.2rem]">{s.title}</h3>
              <ul className="flex flex-col gap-2">
                {s.items.split("\n").filter(Boolean).map((it, idx) => (
                  <li key={idx} className="text-[0.84rem] pl-4 relative" style={{ color: "var(--fg-dim)" }}>
                    <span className="absolute left-0" style={{ color: "var(--accent)" }}>
                      —
                    </span>
                    {it}
                  </li>
                ))}
              </ul>
              <a href="#contato" className={"btn mt-auto self-start" + (s.featured ? " btn-solid" : "")}>
                Solicitar proposta
              </a>
            </div>
          ))}
        </div>

        <div className="eyebrow">Normas atendidas</div>
        <div className="flex flex-wrap gap-2 mt-2">
          {legislation.map((l) => (
            <span key={l.id} className="chip">
              {l.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
