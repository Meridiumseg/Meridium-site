import type { NewsPost } from "@/lib/types";

export default function News({ news }: { news: NewsPost[] }) {
  return (
    <section id="noticias" className="py-20 border-b" style={{ borderColor: "var(--line)", background: "var(--bg-2)" }}>
      <div className="max-w-[1180px] mx-auto px-[5vw]">
        <div className="max-w-[620px] mb-10">
          <div className="eyebrow">Notícias e atualizações</div>
          <h2 className="font-display font-semibold" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)" }}>
            O que está em movimento na MERIDIUM.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {news.map((n) => (
            <div key={n.id} className="border-t pt-5" style={{ borderColor: "var(--line)" }}>
              <span className="font-mono text-[0.7rem]" style={{ color: "var(--fg-dim)" }}>
                {n.published_date}
              </span>
              <h4 className="font-display font-semibold text-[1.05rem] my-2">{n.title}</h4>
              <p className="text-[0.86rem]" style={{ color: "var(--fg-dim)" }}>
                {n.description}
              </p>
            </div>
          ))}
          {news.length === 0 && <p style={{ color: "var(--fg-dim)" }}>Nenhuma notícia publicada ainda.</p>}
        </div>
      </div>
    </section>
  );
}
