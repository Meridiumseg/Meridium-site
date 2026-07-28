import type { LegislationItem } from "@/lib/types";

export default function Legislation({ legislation }: { legislation: LegislationItem[] }) {
  return (
    <section id="legislacao" className="py-20 border-b" style={{ borderColor: "var(--line)" }}>
      <div className="max-w-[1180px] mx-auto px-[5vw]">
        <div className="max-w-[620px] mb-10">
          <div className="eyebrow">Legislação e informações técnicas</div>
          <h2 className="font-display font-semibold" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)" }}>
            Normas, atos e publicações organizados por categoria.
          </h2>
        </div>
        <div className="card p-6">
          <div className="flex flex-wrap gap-2">
            {legislation.map((l) => (
              <span key={l.id} className="chip">
                {l.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
