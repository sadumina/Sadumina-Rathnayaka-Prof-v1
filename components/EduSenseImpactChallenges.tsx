"use client";

import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import {
  Zap,
  Database,
  Bot,
  CheckCircle2,
  Lightbulb,
  ShieldAlert,
  ArrowRight,
  TrendingUp,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Spotlight card without dotted background
function SpotlightChallengeCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-[#d9d3df] bg-white/90 p-6 md:p-8 backdrop-blur-sm shadow-[0_8px_24px_rgba(36,50,58,0.04)] transition-all duration-300 hover:border-[#7d7198] hover:shadow-[0_16px_36px_rgba(125,113,152,0.12)]",
        className
      )}
    >
      {/* Radial soft cursor light */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(450px circle at ${position.x}px ${position.y}px, rgba(125, 113, 152, 0.1), transparent 70%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function EduSenseImpactChallenges() {
  const metrics = [
    {
      value: "10+",
      label: "Micro-Services Orchestrated",
      subtext: "FastAPI modular router architecture",
      icon: Cpu,
      color: "text-violet-600",
      border: "border-violet-200",
      bg: "bg-violet-50/70",
    },
    {
      value: "13",
      label: "Async ODM Data Models",
      subtext: "MongoDB with Motor & Beanie ODM",
      icon: Database,
      color: "text-emerald-600",
      border: "border-emerald-200",
      bg: "bg-emerald-50/70",
    },
    {
      value: "2",
      label: "Dual AI Engines",
      subtext: "Google Gemini + Groq LPU pipeline",
      icon: Bot,
      color: "text-purple-600",
      border: "border-purple-200",
      bg: "bg-purple-50/70",
    },
    {
      value: "100%",
      label: "Cross-Browser Test Suite",
      subtext: "Playwright (Chromium, Firefox, WebKit)",
      icon: CheckCircle2,
      color: "text-sky-600",
      border: "border-sky-200",
      bg: "bg-sky-50/70",
    },
  ];

  const challenges = [
    {
      id: "01",
      domain: "AI Latency & Precision",
      challenge: "Low-latency AI responses with high structured accuracy.",
      solution:
        "Orchestrated Groq for instant, sub-second token streaming alongside Google Gemini for deep concept extraction, semantic summarization, and smart quiz generation.",
      icon: Zap,
      accent: "border-purple-300 text-purple-700 bg-purple-50",
      tagColor: "bg-purple-100/70 text-purple-800",
    },
    {
      id: "02",
      domain: "Database & Session Scale",
      challenge: "Scalable session and document vectors.",
      solution:
        "Engineered an asynchronous MongoDB data layer leveraging Motor and the Beanie ODM, ensuring non-blocking vector searches, real-time chat history, and high-throughput student study plans.",
      icon: Database,
      accent: "border-emerald-300 text-emerald-700 bg-emerald-50",
      tagColor: "bg-emerald-100/70 text-emerald-800",
    },
    {
      id: "03",
      domain: "Cross-Browser Reliability",
      challenge: "Flawless multi-user sync and workflow consistency.",
      solution:
        "Implemented end-to-end automated testing pipelines with Playwright across Chromium, Firefox, and WebKit engines to validate critical authentication, real-time study sessions, and responsive UI flows.",
      icon: CheckCircle2,
      accent: "border-sky-300 text-sky-700 bg-sky-50",
      tagColor: "bg-sky-100/70 text-sky-800",
    },
  ];

  return (
    <section className="section-pad relative overflow-hidden bg-[#fcfaf6] pt-4">
      <div className="container-pad relative z-10">
        {/* =========================================================================
            SECTION 1: IMPACT & METRICS HIGHLIGHT RIBBON
           ========================================================================= */}
        <div className="mb-20">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-12 bg-[#24323a]" />
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-[#7d7198]">
              Scale & System Metrics
            </p>
          </div>

          {/* Clean Horizontal Metrics Strip */}
          <div className="grid grid-cols-1 divide-y divide-[#d9d3df] rounded-2xl border border-[#d9d3df] bg-white/90 shadow-[0_10px_30px_rgba(70,58,86,0.05)] backdrop-blur-sm sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {metrics.map((m, index) => {
              const Icon = m.icon;
              return (
                <div
                  key={index}
                  className="group relative flex flex-col justify-between p-6 transition-all duration-300 hover:bg-[#f7f4fa]/60 sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-medium uppercase tracking-wider text-[#7d7198]">
                      Metric {index + 1}
                    </span>
                    <div
                      className={cn(
                        "flex size-8 items-center justify-center rounded-lg border transition-transform duration-300 group-hover:scale-110",
                        m.border,
                        m.bg,
                        m.color
                      )}
                    >
                      <Icon className="size-4" />
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="font-display text-4xl font-bold tracking-tight text-[#24323a] sm:text-5xl">
                      {m.value}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-[#24323a]">
                      {m.label}
                    </p>
                    <p className="mt-1 font-mono text-[11px] text-[#65707a]">
                      {m.subtext}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            SECTION 2: KEY ENGINEERING CHALLENGES & SOLUTIONS
           ========================================================================= */}
        <div>
          <div className="mb-8">
            <div className="mb-2 flex items-center gap-3">
              <span className="h-px w-12 bg-[#24323a]" />
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-[#7d7198]">
                Engineering Insights
              </p>
            </div>
            <h3 className="font-display text-3xl font-semibold tracking-[-0.025em] text-[#24323a] sm:text-4xl">
              Key Engineering Challenges & Solutions
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#65707a] sm:text-base">
              A transparent look at the architectural bottlenecks encountered during development and the engineering decisions used to solve them.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {challenges.map((item) => {
              const Icon = item.icon;
              return (
                <SpotlightChallengeCard key={item.id} className="flex flex-col justify-between">
                  <div>
                    {/* Header with pill */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#7d7198]">
                        {item.id}
                      </span>
                      <span
                        className={cn(
                          "rounded-full px-2.5 py-0.5 font-mono text-[10px] font-semibold",
                          item.tagColor
                        )}
                      >
                        {item.domain}
                      </span>
                    </div>

                    {/* Challenge Block */}
                    <div className="mt-5">
                      <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-rose-600">
                        <ShieldAlert className="size-3.5" />
                        <span>The Challenge</span>
                      </div>
                      <p className="text-base font-semibold leading-snug text-[#24323a]">
                        "{item.challenge}"
                      </p>
                    </div>
                  </div>

                  {/* Solution Block */}
                  <div className="mt-6 rounded-xl border border-[#d9d3df] bg-[#fcfaf6] p-4">
                    <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700">
                      <Lightbulb className="size-3.5 text-emerald-600" />
                      <span>Architectural Solution</span>
                    </div>
                    <p className="text-xs leading-5 text-[#65707a] sm:text-sm sm:leading-6">
                      {item.solution}
                    </p>
                  </div>
                </SpotlightChallengeCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
