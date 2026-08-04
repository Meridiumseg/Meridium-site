"use client";

import { motion } from "framer-motion";
import { engineeringSolutions } from "./data";
import EngineeringCard from "./EngineeringCard";

export default function EngineeringSolutions() {
  return (
    <section
      id="engineering"
      className="relative overflow-hidden bg-[#07130D] py-28"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0F5C3A20,transparent_65%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex rounded-full border border-green-700/30 bg-green-900/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-green-400">
            Engenharia & Eletrotécnica
          </span>

          <h2 className="mt-8 text-5xl font-black text-white md:text-6xl">
            Soluções Técnicas
            <span className="block text-green-500">
              para Infraestrutura Elétrica
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-zinc-400">
            Atuamos desde instalações residenciais até soluções
            industriais complexas, integrando engenharia,
            eletrotécnica, automação, manutenção, inspeções e
            projetos técnicos para aumentar a confiabilidade,
            segurança e eficiência dos sistemas elétricos.
          </p>

        </motion.div>

        <div className="mt-24 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">

          {engineeringSolutions.map((item, index) => (
            <EngineeringCard
              key={item.id}
              item={item}
              index={index}
            />
          ))}

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          className="mt-24 rounded-[36px] border border-green-900/30 bg-gradient-to-r from-[#0B1C13] via-[#10271B] to-[#0B1C13] p-12"
        >
          <div className="grid gap-12 lg:grid-cols-2">

            <div>

              <span className="text-sm font-semibold uppercase tracking-[0.35em] text-green-400">
                Engenharia Aplicada
              </span>

              <h3 className="mt-5 text-4xl font-black text-white">
                Soluções completas para instalações elétricas.
              </h3>

              <p className="mt-6 text-lg leading-8 text-zinc-400">
                Cada projeto é desenvolvido considerando
                desempenho operacional, segurança, conformidade
                normativa e facilidade de manutenção futura,
                garantindo maior vida útil aos ativos elétricos.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-5">

              <div className="rounded-2xl bg-white/5 p-6">
                <h4 className="text-4xl font-black text-green-400">
                  500
                </h4>

                <p className="mt-3 text-zinc-300">
                  Projetos até 500 kVA
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-6">
                <h4 className="text-4xl font-black text-green-400">
                  NR-10
                </h4>

                <p className="mt-3 text-zinc-300">
                  Conformidade Técnica
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-6">
                <h4 className="text-4xl font-black text-green-400">
                  SPDA
                </h4>

                <p className="mt-3 text-zinc-300">
                  Proteção Contra Descargas
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-6">
                <h4 className="text-4xl font-black text-green-400">
                  BI
                </h4>

                <p className="mt-3 text-zinc-300">
                  Engenharia Baseada em Dados
                </p>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
