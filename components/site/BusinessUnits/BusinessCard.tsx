"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Bolt,
  Wrench,
  Cpu,
  Search,
  Flame,
  LineChart,
  GraduationCap,
} from "lucide-react";

import { BusinessUnit } from "./types";

const icons = {
  ShieldCheck,
  Bolt,
  Wrench,
  Cpu,
  Search,
  Flame,
  LineChart,
  GraduationCap,
};

interface Props {
  unit: BusinessUnit;
  index: number;
}

export default function BusinessCard({ unit, index }: Props) {
  const Icon =
    icons[unit.icon as keyof typeof icons] ?? ShieldCheck;

  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -10,
      }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 transition-all duration-500 hover:border-green-700/60 hover:shadow-[0_0_60px_rgba(20,90,50,.18)]"
    >
      <div className="relative h-60 overflow-hidden">

        <Image
          src={unit.image}
          alt={unit.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />

        <div
          className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl shadow-xl"
          style={{ backgroundColor: unit.color }}
        >
          <Icon className="h-7 w-7 text-white" />
        </div>

      </div>

      <div className="space-y-5 p-7">

        <div>

          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-green-500">
            {unit.subtitle}
          </p>

          <h3 className="text-2xl font-bold text-white">
            {unit.title}
          </h3>

        </div>

        <p className="leading-7 text-zinc-400">
          {unit.description}
        </p>

        <ul className="space-y-2">

          {unit.services.slice(0, 6).map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm text-zinc-300"
            >
              <span className="mt-2 h-2 w-2 rounded-full bg-green-500" />

              <span>{item}</span>
            </li>
          ))}

        </ul>

        <Link
          href={unit.href}
          className="mt-6 inline-flex items-center gap-2 font-semibold text-green-400 transition group-hover:gap-3"
        >
          Conhecer soluções

          <ArrowRight className="h-5 w-5" />
        </Link>

      </div>
    </motion.article>
  );
}
