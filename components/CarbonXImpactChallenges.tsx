"use client";

import React, { useRef, useState } from "react";
import {
  FileText,
  Globe,
  Database,
  TrendingUp,
  ShieldAlert,
  Lightbulb,
  CheckCircle2,
  BarChart3,
  Cpu,
} from "lucide-react";
import { cn } from "@/lib/utils";

function SpotlightChallengeCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-[#d9d3df] bg-white/90 p-6 md:p-8 backdrop-blur-sm shadow-[0_8px_24px_rgba(36,50,58,0.04)] transition-all duration-300 hover:border-[#7d7198] hover:shadow-[0_16px_36px_rgba(125,113,152,0.12)]",
        className
      )}
    >
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

export function CarbonXImpactChallenges() {
  const metrics = [
    {
      value: "35+",
      label: "Monthly WPU Reports Ingested",
      subtext: "Jan 2023 – Nov 2025 archive parsed",
      icon: FileText,
      color: "text-purple-600",
      border: "border-purple-200",
      bg: "bg-purple-50/70",
    },
    {
      value: "3",
      label: "Key Global Sourcing Markets",
      subtext: "Sri Lanka, India, and Indonesia",
      icon: Globe,
      color: "text-emerald-600",
      border: "border-emerald-200",
      bg: "bg-emerald-50/70",
    },
    {
      value: "100%",
      label: "Automated Tabular Extraction",
      subtext: "pdfplumber + pandas data pipelines",
      icon: Cpu,
      color: "text-sky-600",
      border: "border-sky-200",
      bg: "bg-sky-50/70",
    },
    {
      value: "US$/MT",
      label: "Benchmark Trajectory Tracking",
      subtext: "Highstock time-series price curves",
      icon: TrendingUp,
      color: "text-amber-600",
      border: "border-amber-200",
      bg: "bg-amber-50/70",
    },
  ];

  const challenges = [
    {
      id: "01",
      domain: "PDF Parsing & Normalization",
      challenge: "Unstructured monthly PDF tables from CDA, CDB & UCAP.",
      solution:
        "Engineered a heuristic pdfplumber extraction pipeline that identifies date-header rows (dd/mm/yyyy), isolates target coconut shell charcoal rows, splits country/market strings, and eliminates missing quote tokens ('n.q.').",
      icon: FileText,
      tagColor: "bg-purple-100/70 text-purple-800",
    },
    {
      id: "02",
      domain: "Statistical Aggregation",
      challenge: "Multi-market aggregation and weighted country price distortion.",
      solution:
        "Designed MongoDB aggregation pipelines calculating true country-level averages rather than inflated sums, harmonizing domestic and export market quotations into uniform weekly and monthly series.",
      icon: Database,
      tagColor: "bg-emerald-100/70 text-emerald-800",
    },
    {
      id: "03",
      domain: "Enterprise Data Export",
      challenge: "High-frequency comparison and client-side executive reporting.",
      solution:
        "Combined Highcharts Highstock export modules with jsPDF AutoTable and SheetJS (XLSX) to deliver one-click executive PDF report generation and CSV dataset downloads directly from browser memory.",
      icon: CheckCircle2,
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
              Technical obstacles solved while automating commodity price extraction, handling multi-market statistical normalization, and delivering enterprise analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {challenges.map((item) => {
              const Icon = item.icon;
              return (
                <SpotlightChallengeCard key={item.id} className="flex flex-col justify-between">
                  <div>
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
