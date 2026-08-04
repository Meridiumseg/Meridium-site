"use client";

import { motion } from "framer-motion";

interface Props {
  step: any;
  reverse?: boolean;
}

export default function StepCard({
  step,
  reverse = false,
}: Props) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: .55,
      }}
      className={`grid items-center gap-16 lg:grid-cols-2 ${
        reverse
          ? "lg:[&>*:first-child]:order-2"
          : ""
      }`}
    >
      <div
        className={
          reverse
            ? "lg:pl-20"
            : "lg:pr-20"
        }
      >
        <span className="text-sm uppercase tracking-[0.35em] text-green-500">

          Etapa {step.number}

        </span>

        <h3 className="mt-4 text-4xl font-black text-white">

          {step.title}

        </h3>

        <h4 className="mt-2 text-xl text-green-400">

          {step.subtitle}

        </h4>

        <p className="mt-6 text-lg leading-9 text-zinc-400">

          {step.description}

        </p>
      </div>

      <div>

        <motion.div
          whileHover={{
            scale: 1.05,
            rotate: 2,
          }}
          transition={{
            duration: .3,
          }}
          className="mx-auto flex h-44 w-44 items-center justify-center rounded-full border border-green-800/40 bg-gradient-to-br from-[#0F5C3A30] to-zinc-900 shadow-[0_0_60px_rgba(15,92,58,.25)]"
        >
          <Icon className="h-20 w-20 text-green-400" />
        </motion.div>

      </div>
    </motion.div>
  );
}
