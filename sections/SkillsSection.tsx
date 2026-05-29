"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { skillGroups } from "@/lib/data";
import { motion } from "framer-motion";
import {
  Atom,
  Bot,
  Braces,
  Cloud,
  Code2,
  Container,
  Database,
  Flame,
  GitBranch,
  Layers3,
  Leaf,
  Network,
  Server,
  Sparkles,
  Wind,
  type LucideIcon,
} from "lucide-react";

type SkillMeta = {
  icon: LucideIcon;
  mark: string;
  color: string;
};

const skillMeta: Record<string, SkillMeta> = {
  React: { icon: Atom, mark: "R", color: "#61dafb" },
  "Next.js": { icon: Layers3, mark: "N", color: "#f8f7ff" },
  "Tailwind CSS": { icon: Wind, mark: "T", color: "#38bdf8" },
  TypeScript: { icon: Braces, mark: "TS", color: "#60a5fa" },
  FastAPI: { icon: Sparkles, mark: "F", color: "#22c55e" },
  "Node.js": { icon: Server, mark: "N", color: "#84cc16" },
  "Express.js": { icon: Network, mark: "E", color: "#e5e7eb" },
  Java: { icon: Code2, mark: "J", color: "#f97316" },
  "Spring Boot": { icon: Leaf, mark: "S", color: "#6ee7b7" },
  MongoDB: { icon: Leaf, mark: "M", color: "#4ade80" },
  MySQL: { icon: Database, mark: "MY", color: "#38bdf8" },
  PostgreSQL: { icon: Database, mark: "PG", color: "#93c5fd" },
  Firebase: { icon: Flame, mark: "FB", color: "#facc15" },
  Docker: { icon: Container, mark: "D", color: "#60a5fa" },
  "GitHub Actions": { icon: GitBranch, mark: "GH", color: "#c4b5fd" },
  AWS: { icon: Cloud, mark: "AWS", color: "#fbbf24" },
  "OpenAI API": { icon: Bot, mark: "AI", color: "#a7f3d0" },
  "REST APIs": { icon: Network, mark: "API", color: "#f0abfc" },
  "API Design": { icon: Braces, mark: "API", color: "#ddd6fe" },
};

function SkillChip({ skill, index }: { skill: string; index: number }) {
  const meta = skillMeta[skill] ?? { icon: Code2, mark: skill.slice(0, 2).toUpperCase(), color: "#c4b5fd" };
  const Icon = meta.icon;

  return (
    <motion.span
      initial={{ opacity: 0, y: 12, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.35, delay: index * 0.035 }}
      whileHover={{ y: -4, scale: 1.03 }}
      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/[0.045] px-3 py-2 text-xs font-medium text-white/[0.82] transition hover:border-white/20"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 opacity-0 blur-xl transition group-hover:opacity-100"
        style={{ background: `radial-gradient(circle at 24px center, ${meta.color}40, transparent 58%)` }}
      />
      <span
        className="relative inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/40"
        style={{ color: meta.color, boxShadow: `0 0 18px ${meta.color}24` }}
      >
        <Icon size={14} strokeWidth={2.2} />
      </span>
      <span className="relative">{skill}</span>
      <span
        aria-hidden="true"
        className="relative hidden rounded-full bg-white/[0.06] px-1.5 py-0.5 font-mono text-[9px] text-white/45 sm:inline"
      >
        {meta.mark}
      </span>
    </motion.span>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="container-pad">
        <SectionHeader eyebrow="Skills" title="A modern stack for product-grade engineering.">
          Technologies grouped by where they create value: interfaces, services, databases, delivery, and AI-enabled systems.
        </SectionHeader>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {skillGroups.map((group, groupIndex) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: groupIndex * 0.06 }}
              className="glass-line relative overflow-hidden rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-purple-200/[0.28]"
            >
              <div aria-hidden="true" className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-purple-300/[0.08] blur-2xl" />
              <h3 className="relative font-display text-lg font-semibold text-white">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <SkillChip key={skill} skill={skill} index={groupIndex + skillIndex} />
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
