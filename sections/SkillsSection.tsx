"use client";

import Shuffle from "@/components/Shuffle";
import ShapeGrid from "@/components/ShapeGrid";
import { skillGroups } from "@/lib/data";
import { motion } from "motion/react";
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
  BrainCircuit,
  Layers3,
  Leaf,
  Network,
  Server,
  ScanLine,
  Sparkles,
  Wind,
  type LucideIcon,
} from "lucide-react";

type SkillMeta = {
  icon: LucideIcon;
  mark: string;
};

const skillMeta: Record<string, SkillMeta> = {
  React: { icon: Atom, mark: "R" },
  "Next.js": { icon: Layers3, mark: "N" },
  "Tailwind CSS": { icon: Wind, mark: "T" },
  TypeScript: { icon: Braces, mark: "TS" },
  FastAPI: { icon: Sparkles, mark: "F" },
  "Node.js": { icon: Server, mark: "N" },
  "Express.js": { icon: Network, mark: "E" },
  Java: { icon: Code2, mark: "J" },
  "Spring Boot": { icon: Leaf, mark: "S" },
  MongoDB: { icon: Leaf, mark: "M" },
  MySQL: { icon: Database, mark: "MY" },
  PostgreSQL: { icon: Database, mark: "PG" },
  Firebase: { icon: Flame, mark: "FB" },
  Docker: { icon: Container, mark: "D" },
  "GitHub Actions": { icon: GitBranch, mark: "GH" },
  AWS: { icon: Cloud, mark: "AWS" },
  "OpenAI API": { icon: Bot, mark: "AI" },
  "REST APIs": { icon: Network, mark: "API" },
  "API Design": { icon: Braces, mark: "API" },
  Python: { icon: Code2, mark: "PY" },
  TensorFlow: { icon: BrainCircuit, mark: "TF" },
  PyTorch: { icon: BrainCircuit, mark: "PT" },
  OpenCV: { icon: ScanLine, mark: "CV" },
  CNN: { icon: Network, mark: "CNN" },
  "AI APIs": { icon: Bot, mark: "AI" },
};

const groupMeta: Record<string, { number: string; label: string; surface: string; accent: string; dot: string }> = {
  Frontend: { number: "01", label: "Interfaces & experience", surface: "bg-[#f0edf7]/90", accent: "bg-[#8d80aa]", dot: "bg-[#b8acd0]" },
  Backend: { number: "02", label: "Services & logic", surface: "bg-[#eaf1f6]/90", accent: "bg-[#7898ad]", dot: "bg-[#a9c5d5]" },
  Databases: { number: "03", label: "Data foundations", surface: "bg-[#f7efe8]/90", accent: "bg-[#b18d73]", dot: "bg-[#dbc1aa]" },
  DevOps: { number: "04", label: "Delivery & cloud", surface: "bg-[#eaf3ef]/90", accent: "bg-[#739b8a]", dot: "bg-[#afd0bf]" },
  "Systems & APIs": { number: "05", label: "Integration layer", surface: "bg-[#f1eef5]/90", accent: "bg-[#9a87af]", dot: "bg-[#c6b5d4]" },
  "AI / ML": { number: "06", label: "Models & computer vision", surface: "bg-[#edf4f2]/90", accent: "bg-[#5f9388]", dot: "bg-[#a7cfc5]" },
};

function SkillChip({ skill, index }: { skill: string; index: number }) {
  const meta = skillMeta[skill] ?? { icon: Code2, mark: skill.slice(0, 2).toUpperCase() };
  const Icon = meta.icon;

  return (
    <motion.span
      initial={{ opacity: 0, y: 12, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.35, delay: index * 0.035 }}
      whileHover={{ y: -4, scale: 1.03 }}
      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-[#d9d3df] bg-[#fcfaf6]/80 px-3 py-2 text-xs font-medium text-[#6f7a7d] transition hover:border-[#9b90b6] hover:bg-white"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-[#e8e1f1] opacity-0 transition group-hover:opacity-100"
      />
      <span
        className="relative inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#d9d3df] bg-[#f7f4fa] text-[#7d7198]"
      >
        <Icon size={14} strokeWidth={2.2} />
      </span>
      <span className="relative">{skill}</span>
      <span
        aria-hidden="true"
        className="relative hidden rounded-full bg-[#eeeaf3] px-1.5 py-0.5 font-mono text-[9px] text-[#8b9291] sm:inline"
      >
        {meta.mark}
      </span>
    </motion.span>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="section-pad relative">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden opacity-60">
        <ShapeGrid
          shape="square"
          direction="diagonal"
          lineColor="#d8d1e4"
          hoverColor="#7d7198"
          hoverFillColor="#c7ddd4"
          fillOpacity={0.12}
          cellSize={32}
          speed={0.35}
          tiltX={0}
          tiltY={0}
          rainbow={false}
          lineWidth={1}
          radius={1.5}
          trail={0.6}
          glow={0.18}
          twinkle={0}
          fade={1}
          clickCascade
          intro
        />
      </div>
      <div className="container-pad relative z-10">
        <div className="mb-12">
          <div className="mb-5 flex items-center gap-4">
            <span aria-hidden="true" className="h-px w-14 bg-[#24323a] sm:w-20" />
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#7d7198]">Tech Stack</p>
          </div>
          <div className="w-full overflow-hidden">
            <Shuffle
              text="A modern stack for product-grade engineering."
              effect="slide"
              shuffleDirection="right"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={1}
              ease="power3.out"
              stagger={0.03}
              threshold={0.1}
              triggerOnce
              triggerOnHover
              hoverRadius={0}
              motionBlur={false}
              respectReducedMotion
              maxDelay={0}
              scrambleCharset=""
              loop={false}
              loopDelay={0}
              tag="h2"
              textAlign="left"
              className="skills-shuffle font-display text-4xl font-normal tracking-[-0.035em] text-[#24323a] sm:text-6xl"
            />
          </div>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#6f7a7d] sm:text-lg">
            Technologies grouped by where they create value: interfaces, services, databases, delivery, and AI-enabled systems.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: groupIndex * 0.06 }}
              className={`group relative overflow-hidden border border-[#cfc8dd] ${groupMeta[group.title]?.surface ?? "bg-[#fcfaf6]/85"} p-5 shadow-[0_12px_30px_rgba(70,58,86,0.04)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(70,58,86,0.11)] sm:p-6`}
            >
              <div aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 ${groupMeta[group.title]?.accent ?? "bg-[#7d7198]"} transition-transform duration-300 group-hover:scale-x-100`} />
              <div className="relative flex items-start justify-between gap-3 border-b border-[#d9d3df] pb-5">
                <div>
                  <p className="font-mono text-[10px] font-semibold tracking-[0.22em] text-[#7d7198]">{groupMeta[group.title]?.number}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold tracking-[-0.04em] text-[#24323a]">{group.title}</h3>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-[#8b9291]">{groupMeta[group.title]?.label}</p>
                </div>
                <span className={`mt-1 h-2 w-2 rounded-full ${groupMeta[group.title]?.dot ?? "bg-[#c7ddd4]"} ring-4 ring-[#c7ddd4]/30`} />
              </div>
              <div className="relative mt-5 flex flex-wrap gap-2">
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
