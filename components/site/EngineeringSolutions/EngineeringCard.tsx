"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Home,
  Building2,
  Factory,
  Cpu,
  Shield,
  Zap,
} from "lucide-react";

import { EngineeringCategory } from "./types";

const icons = {
  Home,
  Building2,
  Factory,
  Cpu,
  Shield,
  Zap,
};

interface Props {
  item: EngineeringCategory;
  index: number;
}

export default function EngineeringCard({
  item,
  index,
}: Props) {
  const Icon =
    icons[item.icon as keyof typeof icons] ?? Home;

  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.08,
        duration: 0.55,
      }}
      whileHover={{
        y: -10,
      }}
      className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-900"
    >
      <div className="relative h-60">

        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition duration-700 hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

        <div
          className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl"
          style={{
            background: item.color,
          }}
        >
          <Icon className="text-white" />
        </div>

      </div>

      <div className="p-8">

        <span className="text-xs uppercase tracking-[0.35em] text-green-500">

          {item.subtitle}

        </span>

        <h3 className="mt-4 text-3xl font-black text-white">

          {item.title}

        </h3>

        <p className="mt-6 leading-8 text-zinc-400">

          {item.description}

        </p>

        <div className="mt-8 space-y-3">

          {item.services.map(service => (

            <div
              key={service}
              className="flex gap-3"
            >
              <span className="mt-2 h-2 w-2 rounded-full bg-green-500" />

              <span className="text-zinc-300">

                {service}

              </span>

            </div>

          ))}

        </div>

      </div>
    </motion.article>
  );
}
