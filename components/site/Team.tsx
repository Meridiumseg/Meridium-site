import Image from "next/image";
import type { TeamMember } from "@/lib/types";

export default function Team({ team }: { team: TeamMember[] }) {
  return (
    <section id="equipe" className="py-20 border-b" style={{ borderColor: "var(--line)", background: "var(--bg-2)" }}>
      <div className="max-w-[1180px] mx-auto px-[5vw]">
        <div className="max-w-[620px] mb-10">
          <div className="eyebrow">Nossa equipe</div>
          <h2 className="font-display font-semibold" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)" }}>
            Profissionais técnicos por trás de cada projeto.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {team.map((t) => (
            <div key={t.id} className="card">
              <div className="relative w-full aspect-[3/4]" style={{ background: "linear-gradient(160deg, var(--graphite), var(--navy))" }}>
                {t.photo_url && <Image src={t.photo_url} alt={t.name} fill style={{ objectFit: "cover" }} />}
              </div>
              <div className="p-5">
                <h4 className="font-display font-semibold text-[1rem] mb-1">{t.name}</h4>
                <span className="font-mono text-[0.66rem] block mb-2" style={{ color: "var(--accent)" }}>
                  {t.role}
                </span>
                <p className="text-[0.83rem]" style={{ color: "var(--fg-dim)" }}>
                  {t.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
