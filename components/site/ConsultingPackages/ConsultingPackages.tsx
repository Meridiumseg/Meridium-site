"use client";

import { motion } from "framer-motion";
import { consultingPackages } from "./data";
import PackageCard from "./PackageCard";

export default function ConsultingPackages() {
  return (
    <section
      id="consultoria"
      className="relative overflow-hidden bg-[#06110B] py-28"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0F5C3A25,transparent_60%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex rounded-full border border-green-700/40 bg-green-900/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-green-400">
            Consultoria Empresarial
          </span>

          <h2 className="mt-8 text-5xl font-black text-white md:text-6xl">
            Planos Desenvolvidos para a
            <span className="block text-green-500">
              Realidade da Sua Empresa
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-zinc-400">
            A MERIDIUM oferece planos de consultoria escaláveis,
            permitindo que pequenas empresas iniciem sua jornada
            de conformidade e grandes organizações desenvolvam
            uma gestão estratégica baseada em indicadores,
            inteligência operacional e melhoria contínua.
          </p>

        </motion.div>

        <div className="mt-24 grid gap-8 lg:grid-cols-3">

          {consultingPackages.map((item) => (
            <PackageCard
              key={item.id}
              item={item}
            />
          ))}

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          className="mt-24 rounded-3xl border border-green-900/40 bg-gradient-to-r from-[#0A1C13] via-[#0D2418] to-[#0A1C13] p-12"
        >
          <div className="grid gap-12 lg:grid-cols-2">

            <div>

              <h3 className="text-4xl font-black text-white">
                Todos os contratos são personalizados.
              </h3>

              <p className="mt-6 text-lg leading-8 text-zinc-400">
                Antes de qualquer proposta comercial realizamos
                uma avaliação técnica para compreender o cenário,
                os riscos existentes e as necessidades específicas
                da organização.
              </p>

            </div>

            <div className="space-y-5">

              <div className="rounded-2xl bg-white/5 p-5">
                ✔ Avaliação Técnica Inicial
              </div>

              <div className="rounded-2xl bg-white/5 p-5">
                ✔ Diagnóstico Operacional
              </div>

              <div className="rounded-2xl bg-white/5 p-5">
                ✔ Proposta Personalizada
              </div>

              <div className="rounded-2xl bg-white/5 p-5">
                ✔ Implantação Assistida
              </div>

              <div className="rounded-2xl bg-white/5 p-5">
                ✔ Acompanhamento Contínuo
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
