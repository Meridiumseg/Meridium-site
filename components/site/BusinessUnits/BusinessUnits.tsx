"use client";

import { motion } from "framer-motion";
import { businessUnits } from "./data";
import BusinessCard from "./BusinessCard";

export default function BusinessUnits() {
  return (
    <section
      id="business-units"
      className="relative overflow-hidden bg-[#07130d] py-24"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0f5c3a15,transparent_55%)]" />

      <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:45px_45px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >
          <span className="inline-flex rounded-full border border-green-700/40 bg-green-900/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-green-400">
            Ecossistema MERIDIUM
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl">
            Soluções Integradas
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-zinc-400">
            Da conformidade legal à inteligência operacional,
            reunimos engenharia, segurança, tecnologia,
            consultoria especializada e análise estratégica
            em um único ecossistema de soluções empresariais.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">

          {businessUnits.map((unit, index) => (
            <BusinessCard
              key={unit.id}
              unit={unit}
              index={index}
            />
          ))}

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .25 }}
          viewport={{ once: true }}
          className="mt-24 overflow-hidden rounded-[36px] border border-green-900/40 bg-gradient-to-r from-[#0b1b14] via-[#10251c] to-[#0b1b14] p-12"
        >
          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>

              <span className="text-sm font-semibold uppercase tracking-[0.35em] text-green-400">
                MERIDIUM®
              </span>

              <h3 className="mt-5 text-4xl font-black text-white">
                Inteligência Técnica Aplicada
              </h3>

              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
                Atuamos de forma integrada para reduzir riscos,
                aumentar a eficiência operacional, fortalecer a
                conformidade legal e apoiar decisões estratégicas
                com base em dados e conhecimento técnico.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-5">

              <div className="rounded-2xl bg-white/5 p-6">
                <h4 className="text-4xl font-black text-green-400">
                  8
                </h4>

                <p className="mt-3 text-zinc-300">
                  Unidades de Negócio
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-6">
                <h4 className="text-4xl font-black text-green-400">
                  120+
                </h4>

                <p className="mt-3 text-zinc-300">
                  Soluções Técnicas
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-6">
                <h4 className="text-4xl font-black text-green-400">
                  BI
                </h4>

                <p className="mt-3 text-zinc-300">
                  Inteligência de Dados
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-6">
                <h4 className="text-4xl font-black text-green-400">
                  360°
                </h4>

                <p className="mt-3 text-zinc-300">
                  Visão Integrada
                </p>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
