"use client";

import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import {
  Layers,
  Server,
  Database,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Cpu,
  Code2,
  FileText,
  Lock,
  Boxes,
  Zap,
  Globe,
  Flame,
  Bot,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Spotlight Card component inspired by Magic UI
function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-[#d9d3df] bg-white/85 p-6 backdrop-blur-md transition-all duration-300 hover:border-[#7d7198] hover:shadow-[0_12px_30px_rgba(125,113,152,0.12)]",
        className
      )}
    >
      {/* Radial spotlight overlay */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(125, 113, 152, 0.12), transparent 70%)`,
        }}
      />
      <div className="relative z-10 flex h-full flex-col justify-between">{children}</div>
    </div>
  );
}

export function EduSenseBentoStack() {
  const routers = [
    { method: "POST", name: "/auth" },
    { method: "GET", name: "/users" },
    { method: "POST", name: "/tasks" },
    { method: "GET", name: "/schedules" },
    { method: "POST", name: "/documents" },
    { method: "POST", name: "/chat" },
    { method: "GET", name: "/groups" },
    { method: "POST", name: "/meetings" },
    { method: "GET", name: "/quiz-scores" },
  ];

  const dbModels = [
    "Users",
    "Tasks",
    "Study Schedules",
    "Study Materials",
    "Extracted Concepts",
    "PDF Vectors",
    "Study Groups",
    "Invitations",
    "Meetings",
    "Chat History",
    "Study Plans",
    "Sessions",
    "Quiz Scores",
  ];

  return (
    <div className="mt-14 w-full">
      {/* Subheading */}
      <div className="mb-8">
        <div className="mb-2 flex items-center gap-3">
          <span className="h-px w-10 bg-[#7d7198]" />
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-[#7d7198]">
            Full Architecture Breakdown
          </p>
        </div>
        <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-[#24323a] sm:text-3xl">
          Engineered for scale, speed & intelligence.
        </h3>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
        {/* Card 1: Frontend Ecosystem (Span 7) */}
        <SpotlightCard className="lg:col-span-7">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex size-9 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
                  <Layers className="size-4.5" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-[#24323a]">
                    Frontend Architecture
                  </h4>
                  <p className="font-mono text-[11px] text-[#7d7198]">
                    Next.js 16 (App Router) · React 19 · TypeScript
                  </p>
                </div>
              </div>
              <span className="rounded-full border border-violet-200 bg-violet-50 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-violet-700">
                Client Layer
              </span>
            </div>

            <p className="mt-4 text-sm leading-6 text-[#65707a]">
              Modular, component-driven client architecture optimized for high interactivity, streaming markdown rendering, and reactive dashboards with zero-layout-shift UI.
            </p>

            {/* Feature Modules Grid */}
            <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              <div className="rounded-xl border border-[#d9d3df] bg-[#f7f4fa]/70 p-2.5 transition-colors hover:border-violet-300">
                <p className="font-mono text-[11px] font-semibold text-[#24323a]">Tailwind CSS</p>
                <p className="text-[10px] text-[#7d7198]">Design system & tokens</p>
              </div>
              <div className="rounded-xl border border-[#d9d3df] bg-[#f7f4fa]/70 p-2.5 transition-colors hover:border-violet-300">
                <p className="font-mono text-[11px] font-semibold text-[#24323a]">Recharts</p>
                <p className="text-[10px] text-[#7d7198]">Progress & score charts</p>
              </div>
              <div className="rounded-xl border border-[#d9d3df] bg-[#f7f4fa]/70 p-2.5 transition-colors hover:border-violet-300">
                <p className="font-mono text-[11px] font-semibold text-[#24323a]">Framer Motion</p>
                <p className="text-[10px] text-[#7d7198]">Smooth layout transitions</p>
              </div>
              <div className="rounded-xl border border-[#d9d3df] bg-[#f7f4fa]/70 p-2.5 transition-colors hover:border-violet-300">
                <p className="font-mono text-[11px] font-semibold text-[#24323a]">React Markdown</p>
                <p className="text-[10px] text-[#7d7198]">AI response formatting</p>
              </div>
              <div className="rounded-xl border border-[#d9d3df] bg-[#f7f4fa]/70 p-2.5 transition-colors hover:border-violet-300">
                <p className="font-mono text-[11px] font-semibold text-[#24323a]">Lucide Icons</p>
                <p className="text-[10px] text-[#7d7198]">Vector glyph library</p>
              </div>
              <div className="rounded-xl border border-[#d9d3df] bg-[#f7f4fa]/70 p-2.5 transition-colors hover:border-violet-300">
                <p className="font-mono text-[11px] font-semibold text-[#24323a]">SSR / Streaming</p>
                <p className="text-[10px] text-[#7d7198]">Instant route prefetching</p>
              </div>
            </div>
          </div>
        </SpotlightCard>

        {/* Card 2: Backend REST Engine (Span 5) */}
        <SpotlightCard className="lg:col-span-5">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex size-9 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                  <Server className="size-4.5" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-[#24323a]">
                    FastAPI REST Engine
                  </h4>
                  <p className="font-mono text-[11px] text-[#7d7198]">Python 3.11 · Modular Routers</p>
                </div>
              </div>
              <span className="rounded-full border border-sky-200 bg-sky-50 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-sky-700">
                API Service
              </span>
            </div>

            <p className="mt-3 text-sm leading-6 text-[#65707a]">
              Asynchronous endpoint orchestration with Pydantic validation, structured exception boundaries, and automatic interactive documentation.
            </p>

            {/* Modular Routers Matrix */}
            <div className="mt-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#7d7198]">
                  Modular Router Endpoints
                </span>
                <span className="font-mono text-[10px] font-medium text-emerald-600">
                  Swagger & ReDoc active
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {routers.map((r, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#e2d9ec] bg-white px-2 py-1 font-mono text-[10px] text-[#24323a] shadow-sm transition hover:border-sky-300 hover:bg-sky-50/50"
                  >
                    <span
                      className={cn(
                        "rounded px-1 py-0.2 font-mono text-[9px] font-bold",
                        r.method === "POST" ? "bg-amber-100 text-amber-700" : "bg-sky-100 text-sky-700"
                      )}
                    >
                      {r.method}
                    </span>
                    {r.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </SpotlightCard>

        {/* Card 3: AI Intelligence Pipeline (Span 4) */}
        <SpotlightCard className="lg:col-span-4">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex size-9 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                  <Sparkles className="size-4.5" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-[#24323a]">AI Engine</h4>
                  <p className="font-mono text-[11px] text-[#7d7198]">Gemini + Groq LPU</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 rounded-full border border-purple-200 bg-purple-50 px-2 py-0.5">
                <span className="size-1.5 animate-ping rounded-full bg-purple-500" />
                <span className="font-mono text-[10px] font-semibold text-purple-700">Live AI</span>
              </div>
            </div>

            <p className="mt-3 text-sm leading-6 text-[#65707a]">
              Dual-engine AI pipeline: ultra-low latency interactive generation via Groq alongside comprehensive concept analysis via Google Gemini.
            </p>

            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 rounded-xl border border-purple-100 bg-purple-50/50 p-2 text-xs text-[#24323a]">
                <Bot className="size-4 shrink-0 text-purple-600" />
                <span>Smart study schedule & quiz generation</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-purple-100 bg-purple-50/50 p-2 text-xs text-[#24323a]">
                <FileText className="size-4 shrink-0 text-purple-600" />
                <span>Automated document summary & concept extraction</span>
              </div>
            </div>
          </div>
        </SpotlightCard>

        {/* Card 4: Database & Domain Models (Span 4) */}
        <SpotlightCard className="lg:col-span-4">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex size-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Database className="size-4.5" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-[#24323a]">
                    MongoDB & Beanie ODM
                  </h4>
                  <p className="font-mono text-[11px] text-[#7d7198]">Motor (Async) · 13 Models</p>
                </div>
              </div>
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-emerald-700">
                Data Layer
              </span>
            </div>

            <p className="mt-3 text-sm leading-6 text-[#65707a]">
              Asynchronous NoSQL data models with strict schema typing via Beanie ODM and high-throughput vector queries.
            </p>

            {/* Model Badges */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {dbModels.map((m, i) => (
                <span
                  key={i}
                  className="rounded-md border border-emerald-200/80 bg-emerald-50/60 px-2 py-0.5 font-mono text-[10px] text-emerald-800 transition hover:bg-emerald-100"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </SpotlightCard>

        {/* Card 5: Auth & Testing (Span 4) */}
        <SpotlightCard className="lg:col-span-4">
          <div className="flex h-full flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                    <ShieldCheck className="size-4.5" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-[#24323a]">
                      Auth & Verification
                    </h4>
                    <p className="font-mono text-[11px] text-[#7d7198]">Firebase + Playwright</p>
                  </div>
                </div>
                <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-amber-700">
                  Security & QA
                </span>
              </div>

              {/* Security & Testing Details */}
              <div className="mt-4 space-y-2.5">
                <div className="rounded-xl border border-[#d9d3df] bg-[#f7f4fa]/70 p-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#24323a]">
                    <Lock className="size-3.5 text-amber-600" />
                    Authentication Layer
                  </div>
                  <p className="mt-1 text-[11px] leading-5 text-[#65707a]">
                    JWT cookie sessions paired with Firebase Authentication and Firebase Admin SDK token validation.
                  </p>
                </div>

                <div className="rounded-xl border border-[#d9d3df] bg-[#f7f4fa]/70 p-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#24323a]">
                    <CheckCircle2 className="size-3.5 text-emerald-600" />
                    Playwright E2E Testing
                  </div>
                  <p className="mt-1 text-[11px] leading-5 text-[#65707a]">
                    End-to-end automated test suites running across Chromium, Firefox, and WebKit browsers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
}
