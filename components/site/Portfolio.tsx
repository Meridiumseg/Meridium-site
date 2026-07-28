"use client";

import { useState } from "react";
import type { Project } from "@/lib/types";

const CATS = ["Todos", "Engenharia", "Consultoria", "Segurança", "Tecnologia"];

export default function Portfolio({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState("Todos");
  const filtered = filter === "Todos" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-20 border-b" style={{ borderColor: "var(--line)" }}>
      <div className="max-w-[1180px] mx-auto px-[5vw]">
        <div className="max-w-[620px] mb-10">
          <div className="eyebrow">Portfólio corporativo</div>
          <h2 className="font-display font-semibold" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)" }}>
            Projetos executados em operações reais.
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className="font-mono text-[0.7rem] px-4 py-2 border"
              style={{
                borderColor: filter === c ? "var(--accent)" : "var(--card-line)",
                color: filter === c ? "var(--accent)" : "var(--fg-dim)",
                background: "transparent",
              }}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {filtered.map((p) => (
            <div key={p.id} className="card overflow-hidden">
              <div
                className="aspect-[4/3] flex items-end p-4"
                style={{ background: "linear-gradient(135deg, var(--olive-deep), var(--petrol))" }}
              >
                <span className="font-mono text-[0.62rem]" style={{ color: "rgba(243,245,240,.8)" }}>
                  {p.code}
                </span>
              </div>
              <div className="p-5">
                <span className="font-mono text-[0.64rem] tracking-widest block mb-2" style={{ color: "var(--accent)" }}>
                  {p.category.toUpperCase()}
                </span>
                <h4 className="font-display font-semibold text-[1rem] mb-1">{p.title}</h4>
                <p className="text-[0.84rem]" style={{ color: "var(--fg-dim)" }}>
                  {p.description}
                </p>
              </div>
            </div>
          ))}
          {filtered.length === 0 && (
            <p style={{ color: "var(--fg-dim)" }}>Nenhum projeto nesta categoria ainda.</p>
          )}
        </div>
      </div>
    </section>
  );
}
