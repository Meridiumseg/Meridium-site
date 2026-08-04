"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Briefcase,
  Building2,
  Check,
  X,
} from "lucide-react";

import { ConsultingPackage } from "./types";

const icons = {
  Shield,
  Briefcase,
  Building2,
};

interface Props {
  item: ConsultingPackage;
}

export default function PackageCard({ item }: Props) {
  const Icon =
    icons[item.icon as keyof typeof icons] ?? Shield;

  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: .35,
      }}
      className={`relative rounded-3xl border p-8 transition-all duration-500 ${
        item.highlight
          ? "border-green-600 bg-gradient-to-b from-green-950 to-zinc-900 shadow-[0_0_80px_rgba(15,92,58,.25)]"
          : "border-white/10 bg-zinc-900"
      }`}
    >
      <div
        className="flex h-16 w-16 items-center justify-center rounded-2xl"
        style={{
          background: item.color,
        }}
      >
        <Icon className="text-white" />
      </div>

      <span className="mt-6 inline-flex rounded-full bg-green-900/30 px-4 py-2 text-xs uppercase tracking-[0.25em] text-green-400">
        {item.badge}
      </span>

      <h3 className="mt-5 text-3xl font-black text-white">
        {item.name}
      </h3>

      <p className="mt-5 leading-8 text-zinc-400">
        {item.description}
      </p>

      <div className="mt-10 space-y-4">
        {item.features.map((feature) => (
          <div
            key={feature.title}
            className="flex items-center gap-3"
          >
            {feature.included ? (
              <Check className="text-green-500" size={18} />
            ) : (
              <X className="text-zinc-600" size={18} />
            )}

            <span
              className={
                feature.included
                  ? "text-zinc-200"
                  : "text-zinc-500"
              }
            >
              {feature.title}
            </span>
          </div>
        ))}
      </div>

      <button className="mt-10 w-full rounded-xl bg-green-700 py-4 font-semibold text-white transition hover:bg-green-600">
        Solicitar Avaliação Técnica
      </button>
    </motion.div>
  );
}
