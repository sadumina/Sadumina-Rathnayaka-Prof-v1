"use client";

import React, { useRef, useState } from "react";
import {
  Layers,
  Server,
  Database,
  FileSpreadsheet,
  CheckCircle2,
  FileText,
  BarChart3,
  Cpu,
  GitBranch,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

function SpotlightCard({
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
        "group relative overflow-hidden rounded-2xl border border-[#d9d3df] bg-white/85 p-6 backdrop-blur-md transition-all duration-300 hover:border-[#7d7198] hover:shadow-[0_12px_30px_rgba(125,113,152,0.12)]",
        className
      )}
    >
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

export function CarbonXBentoStack() {
  const endpoints = [
    { method: "GET", name: "/series" },
    { method: "GET", name: "/series/aggregated" },
    { method: "GET", name: "/compare/summary" },
    { method: "GET", name: "/data/monthly" },
    { method: "GET", name: "/countries" },
    { method: "POST", name: "/upload" },
    { method: "POST", name: "/upload-excel" },
  ];

  const dbSchema = [
    "Product",
    "Country",
    "Market",
    "Prices (Date, Price)",
    "Source PDF",
    "Uploaded At",
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
          Industrial analytics, automated extraction & clean time series.
        </h3>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
        {/* Card 1: Frontend & Highstock (Span 7) */}
        <SpotlightCard className="lg:col-span-7">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex size-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <BarChart3 className="size-4.5" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-[#24323a]">
                    Frontend & Analytics UI
                  </h4>
                  <p className="font-mono text-[11px] text-[#7d7198]">
                    React 19 · Vite 7 · Highstock · Recharts
                  </p>
                </div>
              </div>
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-emerald-700">
                Dashboard Layer
              </span>
            </div>

            <p className="mt-4 text-sm leading-6 text-[#65707a]">
              Interactive market dashboard engineered with Highcharts Highstock for multi-year price trajectory tracking, dynamic country comparison drawers, and client-side PDF/CSV report generation.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              <div className="rounded-xl border border-[#d9d3df] bg-[#f7f4fa]/70 p-2.5 transition-colors hover:border-emerald-300">
                <p className="font-mono text-[11px] font-semibold text-[#24323a]">Highstock</p>
                <p className="text-[10px] text-[#7d7198]">Stock-chart timeline engine</p>
              </div>
              <div className="rounded-xl border border-[#d9d3df] bg-[#f7f4fa]/70 p-2.5 transition-colors hover:border-emerald-300">
                <p className="font-mono text-[11px] font-semibold text-[#24323a]">Recharts</p>
                <p className="text-[10px] text-[#7d7198]">Secondary comparison charts</p>
              </div>
              <div className="rounded-xl border border-[#d9d3df] bg-[#f7f4fa]/70 p-2.5 transition-colors hover:border-emerald-300">
                <p className="font-mono text-[11px] font-semibold text-[#24323a]">React Router 7</p>
                <p className="text-[10px] text-[#7d7198]">Client-side routing</p>
              </div>
              <div className="rounded-xl border border-[#d9d3df] bg-[#f7f4fa]/70 p-2.5 transition-colors hover:border-emerald-300">
                <p className="font-mono text-[11px] font-semibold text-[#24323a]">jsPDF & AutoTable</p>
                <p className="text-[10px] text-[#7d7198]">Executive PDF reporting</p>
              </div>
              <div className="rounded-xl border border-[#d9d3df] bg-[#f7f4fa]/70 p-2.5 transition-colors hover:border-emerald-300">
                <p className="font-mono text-[11px] font-semibold text-[#24323a]">XLSX</p>
                <p className="text-[10px] text-[#7d7198]">Excel export & templates</p>
              </div>
              <div className="rounded-xl border border-[#d9d3df] bg-[#f7f4fa]/70 p-2.5 transition-colors hover:border-emerald-300">
                <p className="font-mono text-[11px] font-semibold text-[#24323a]">Axios</p>
                <p className="text-[10px] text-[#7d7198]">REST API integration</p>
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
                    FastAPI Analytics API
                  </h4>
                  <p className="font-mono text-[11px] text-[#7d7198]">Python 3.10 · Uvicorn</p>
                </div>
              </div>
              <span className="rounded-full border border-sky-200 bg-sky-50 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-sky-700">
                REST Backend
              </span>
            </div>

            <p className="mt-3 text-sm leading-6 text-[#65707a]">
              High-performance asynchronous Python backend with Pydantic schemas, multipart file handling, and cross-origin aggregation pipelines.
            </p>

            <div className="mt-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#7d7198]">
                  Available Endpoints
                </span>
                <span className="font-mono text-[10px] font-medium text-emerald-600">
                  Automated Swagger Docs
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {endpoints.map((e, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#e2d9ec] bg-white px-2 py-1 font-mono text-[10px] text-[#24323a] shadow-sm transition hover:border-sky-300 hover:bg-sky-50/50"
                  >
                    <span
                      className={cn(
                        "rounded px-1 py-0.2 font-mono text-[9px] font-bold",
                        e.method === "POST" ? "bg-amber-100 text-amber-700" : "bg-sky-100 text-sky-700"
                      )}
                    >
                      {e.method}
                    </span>
                    {e.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </SpotlightCard>

        {/* Card 3: Ingestion Pipeline (Span 4) */}
        <SpotlightCard className="lg:col-span-4">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex size-9 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                  <FileText className="size-4.5" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-[#24323a]">
                    PDF & Excel Ingestion
                  </h4>
                  <p className="font-mono text-[11px] text-[#7d7198]">pdfplumber + pandas</p>
                </div>
              </div>
              <span className="rounded-full border border-purple-200 bg-purple-50 px-2 py-0.5 font-mono text-[10px] font-semibold text-purple-700">
                Pipeline
              </span>
            </div>

            <p className="mt-3 text-sm leading-6 text-[#65707a]">
              Automates extraction from 35+ monthly WPU reports (2023–2025) across international boards (CDA Sri Lanka, CDB India, UCAP, PCA).
            </p>

            <div className="mt-4 space-y-2 font-mono text-xs text-[#24323a]">
              <div className="rounded-xl border border-purple-100 bg-purple-50/50 p-2.5">
                <p className="font-semibold text-purple-800">Table Heuristic Filter</p>
                <p className="text-[11px] text-[#65707a]">Validates 2+ date columns (dd/mm/yyyy)</p>
              </div>
              <div className="rounded-xl border border-purple-100 bg-purple-50/50 p-2.5">
                <p className="font-semibold text-purple-800">Target Product Filter</p>
                <p className="text-[11px] text-[#65707a]">Filters "coconut shell charcoal" and strips "n.q."</p>
              </div>
            </div>
          </div>
        </SpotlightCard>

        {/* Card 4: Database & Storage (Span 4) */}
        <SpotlightCard className="lg:col-span-4">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex size-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Database className="size-4.5" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-[#24323a]">
                    MongoDB Database
                  </h4>
                  <p className="font-mono text-[11px] text-[#7d7198]">PyMongo · coconut_analytics</p>
                </div>
              </div>
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-emerald-700">
                NoSQL
              </span>
            </div>

            <p className="mt-3 text-sm leading-6 text-[#65707a]">
              Stores structured time-series quotes under <code className="rounded bg-emerald-50 px-1 text-emerald-800 font-mono text-[11px]">charcoal_prices</code> with temporal date coordinates.
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {dbSchema.map((field, i) => (
                <span
                  key={i}
                  className="rounded-md border border-emerald-200/80 bg-emerald-50/60 px-2 py-0.5 font-mono text-[10px] text-emerald-800"
                >
                  {field}
                </span>
              ))}
            </div>
          </div>
        </SpotlightCard>

        {/* Card 5: CI & Enterprise Delivery (Span 4) */}
        <SpotlightCard className="lg:col-span-4">
          <div className="flex h-full flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                    <GitBranch className="size-4.5" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-[#24323a]">
                      CI & Enterprise Delivery
                    </h4>
                    <p className="font-mono text-[11px] text-[#7d7198]">GitHub Actions · Conda</p>
                  </div>
                </div>
                <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-amber-700">
                  Automation
                </span>
              </div>

              <div className="mt-4 space-y-2.5">
                <div className="rounded-xl border border-[#d9d3df] bg-[#f7f4fa]/70 p-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#24323a]">
                    <CheckCircle2 className="size-3.5 text-emerald-600" />
                    GitHub Actions Conda CI
                  </div>
                  <p className="mt-1 text-[11px] leading-5 text-[#65707a]">
                    Automated Python 3.10 linting with flake8 and unit testing on every push.
                  </p>
                </div>

                <div className="rounded-xl border border-[#d9d3df] bg-[#f7f4fa]/70 p-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#24323a]">
                    <ShieldCheck className="size-3.5 text-amber-600" />
                    Haycarb Enterprise Analytics
                  </div>
                  <p className="mt-1 text-[11px] leading-5 text-[#65707a]">
                    Built for corporate sourcing & market procurement intelligence.
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
