"use client";

import { motion } from "framer-motion";
import {
  Search,
  ClipboardCheck,
  Wrench,
  ShieldCheck,
  BarChart3,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Diagnóstico",
    description:
      "Realizamos uma análise técnica completa da empresa, identificando riscos, oportunidades de melhoria, conformidade legal e necessidades operacionais.",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "Planejamento Estratégico",
    description:
      "Estruturamos um plano técnico personalizado com cronograma, prioridades, indicadores de desempenho e objetivos claros.",
  },
  {
    icon: Wrench,
    number: "03",
    title: "Execução",
    description:
      "Implementamos as soluções definidas utilizando metodologias padronizadas, garantindo qualidade, rastreabilidade e segurança.",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Auditoria e Conformidade",
    description:
      "Verificamos continuamente a aderência às Normas Regulamentadoras, procedimentos internos e requisitos legais.",
  },
  {
    icon: BarChart3,
    number: "05",
    title: "Business Intelligence",
    description:
      "Transformamos informações operacionais em indicadores estratégicos através de dashboards e análise de dados.",
  },
  {
    icon: TrendingUp,
    number: "06",
    title: "Melhoria Contínua",
    description:
      "Acompanhamos os resultados para promover evolução permanente da segurança, produtividade e eficiência operacional.",
  },
];

export default function MethodMeridium() {
  return (
    <section
      id="metodo"
      className="relative overflow-hidden bg-zinc-950 py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0F5C3A20,transparent_65%)]" />

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex rounded-full border border-green-700/30 bg-green-900/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-green-400">
            Método Exclusivo
          </span>

          <h2 className="mt-8 text-5xl font-black text-white md:text-6xl">
            Método MERIDIUM®
          </h2>

          <p className="mt-8 text-lg leading-9 text-zinc-400">
            Um processo estruturado que integra engenharia,
            segurança, inteligência de dados e melhoria contínua,
            garantindo decisões técnicas mais assertivas e resultados
            sustentáveis para nossos clientes.
          </p>

        </motion.div>

        <div className="relative mt-24">

          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-green-700 via-green-500 to-transparent lg:block" />

          <div className="grid gap-12">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * .08,
                    duration: .6,
                  }}
                  viewport={{ once: true }}
                  className={`grid items-center gap-12 lg:grid-cols-2 ${
                    index % 2 === 0 ? "" : "lg:[&>*:first-child]:order-2"
                  }`}
                >
                  <div
                    className={`${
                      index % 2 === 0 ? "lg:pr-20" : "lg:pl-20"
                    }`}
                  >
                    <span className="text-sm font-semibold tracking-[0.3em] uppercase text-green-500">
                      Etapa {step.number}
                    </span>

                    <h3 className="mt-4 text-4xl font-black text-white">
                      {step.title}
                    </h3>

                    <p className="mt-6 text-lg leading-9 text-zinc-400">
                      {step.description}
                    </p>
                  </div>

                  <div className="relative">

                    <div className="mx-auto flex h-44 w-44 items-center justify-center rounded-full border border-green-700/40 bg-gradient-to-br from-green-900/30 to-zinc-900 shadow-[0_0_60px_rgba(15,92,58,.25)]">

                      <Icon className="h-16 w-16 text-green-400" />

                    </div>

                  </div>
                </motion.div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}
