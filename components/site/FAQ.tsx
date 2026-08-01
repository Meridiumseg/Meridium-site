"use client";

import { useState } from "react";

const QUESTIONS = [
  {
    q: "A MERIDIUM atende empresas de qualquer porte?",
    a: "Sim. Trabalhamos com modelos de atendimento sob medida — desde diagnósticos pontuais até presença técnica contínua — adaptados ao porte e à realidade de cada operação.",
  },
  {
    q: "Como funciona o Diagnóstico Técnico inicial?",
    a: "É o primeiro contato entre a MERIDIUM e sua empresa: entendemos sua operação, mapeamos riscos e oportunidades, e indicamos qual combinação de soluções integradas faz mais sentido para o seu caso.",
  },
  {
    q: "A MERIDIUM substitui a necessidade de outros fornecedores técnicos?",
    a: "Em muitos casos, sim. Nossa proposta é justamente reunir engenharia, segurança do trabalho, eletrotécnica, perícias, BI e educação corporativa em um único ecossistema, evitando o retrabalho de contratar fornecedores isolados.",
  },
  {
    q: "Vocês atendem fora de Rondônia?",
    a: "Nossa base está em Ji-Paraná/RO, com atuação em Rondônia e Mato Grosso. Para operações em outras regiões, entre em contato para avaliarmos viabilidade.",
  },
  {
    q: "Como funciona a gestão de documentação e compliance?",
    a: "Aplicamos o Método MERIDIUM® para padronizar processos, documentação e indicadores — garantindo rastreabilidade e conformidade contínua, não apenas no momento da entrega.",
  },
  {
    q: "É possível contratar apenas uma das soluções, sem pacote completo?",
    a: "Sim. Cada uma das seis frentes — Segurança do Trabalho, Engenharia, Perícias, Bombeiro Civil, BI e Educação Corporativa — pode ser contratada de forma independente ou combinada, conforme a necessidade.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 border-b" style={{ borderColor: "var(--line)" }}>
      <div className="max-w-[820px] mx-auto px-[6vw]">
        <div className="mb-10">
          <div className="eyebrow">Perguntas frequentes</div>
          <h2 className="font-display font-semibold" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)" }}>
            Dúvidas comuns antes de começar.
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          {QUESTIONS.map((item, i) => (
            <div key={i} className="card overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-4"
                style={{ background: "transparent", border: "none", color: "var(--fg)", cursor: "pointer" }}
              >
                <span className="font-display font-semibold text-[0.96rem]">{item.q}</span>
                <span style={{ color: "var(--accent)", fontSize: "1.1rem" }}>{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-[0.88rem]" style={{ color: "var(--fg-dim)" }}>
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
