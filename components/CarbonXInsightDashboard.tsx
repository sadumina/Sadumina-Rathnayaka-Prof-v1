"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  TrendingUp,
  FileSpreadsheet,
  FileText,
  Database,
  Server,
  Code2,
  Calendar,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  BarChart3,
  ExternalLink,
  Github,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Market price datasets (based on actual Haycarb WPU reports 2023 - 2025)
const priceData = [
  { month: "Jan 23", indonesia: 840, sriLanka: 865, india: 890 },
  { month: "May 23", indonesia: 855, sriLanka: 880, india: 905 },
  { month: "Sep 23", indonesia: 870, sriLanka: 895, india: 920 },
  { month: "Jan 24", indonesia: 880, sriLanka: 905, india: 935 },
  { month: "May 24", indonesia: 890, sriLanka: 915, india: 945 },
  { month: "Sep 24", indonesia: 895, sriLanka: 920, india: 950 },
  { month: "Jan 25", indonesia: 898, sriLanka: 924, india: 955 },
  { month: "Jun 25", indonesia: 900, sriLanka: 926, india: 956 },
  { month: "Nov 25", indonesia: 901, sriLanka: 928, india: 958 },
];

export function CarbonXInsightDashboard() {
  const [activeCountry, setActiveCountry] = useState<"all" | "indonesia" | "sriLanka" | "india">("all");
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(priceData.length - 1);

  // SVG dimensions
  const width = 800;
  const height = 300;
  const paddingX = 50;
  const paddingY = 40;

  const minPrice = 800;
  const maxPrice = 1000;

  const getX = (index: number) => paddingX + (index / (priceData.length - 1)) * (width - paddingX * 2);
  const getY = (price: number) => height - paddingY - ((price - minPrice) / (maxPrice - minPrice)) * (height - paddingY * 2);

  // Generate SVG path curves
  const makePath = (key: "indonesia" | "sriLanka" | "india") => {
    return priceData
      .map((d, i) => `${i === 0 ? "M" : "L"} ${getX(i)} ${getY(d[key])}`)
      .join(" ");
  };

  const countries = [
    { key: "indonesia", label: "Indonesia", color: "#0284c7", stroke: "#0284c7", latest: 901, min: 840, avg: 876, max: 901 },
    { key: "sriLanka", label: "Sri Lanka", color: "#10b981", stroke: "#10b981", latest: 928, min: 865, avg: 906, max: 928 },
    { key: "india", label: "India", color: "#f59e0b", stroke: "#f59e0b", latest: 958, min: 890, avg: 934, max: 958 },
  ];

  const currentHoverData = hoveredPoint !== null ? priceData[hoveredPoint] : priceData[priceData.length - 1];

  return (
    <div className="w-full space-y-16">
      {/* =========================================================================
          SECTION 1: INTERACTIVE MARKET PRICE GRAPH (Replaces Animated Beams)
         ========================================================================= */}
      <div className="relative overflow-hidden rounded-2xl border border-[#d9d3df] bg-white p-6 shadow-[0_12px_36px_rgba(36,50,58,0.06)] backdrop-blur-md md:p-10">
        {/* Subtle accent background glow */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

        {/* Dashboard Header Bar */}
        <div className="relative z-10 flex flex-col justify-between gap-6 border-b border-[#d9d3df] pb-6 sm:flex-row sm:items-center">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-[#7d7198]">
                Haycarb PLC · Market Analytics Dashboard
              </p>
            </div>
            <h3 className="mt-1 font-display text-2xl font-semibold text-[#24323a] sm:text-3xl">
              Coconut Shell Charcoal Price Analytics
            </h3>
            <p className="mt-1 font-mono text-xs text-[#65707a]">
              Benchmark Quotes in US$ per Metric Ton (MT) · CDA / CDB / UCAP Ingestion
            </p>
          </div>

          {/* Interactive Country Filter Tabs */}
          <div className="flex items-center gap-1.5 rounded-xl border border-[#d9d3df] bg-[#f7f4fa] p-1.5 font-mono text-xs">
            <button
              onClick={() => setActiveCountry("all")}
              className={cn(
                "rounded-lg px-3 py-1.5 font-semibold transition-all",
                activeCountry === "all" ? "bg-white text-[#24323a] shadow-sm" : "text-[#65707a] hover:text-[#24323a]"
              )}
            >
              All Markets
            </button>
            <button
              onClick={() => setActiveCountry("sriLanka")}
              className={cn(
                "rounded-lg px-3 py-1.5 font-semibold transition-all",
                activeCountry === "sriLanka" ? "bg-emerald-500 text-white shadow-sm" : "text-[#65707a] hover:text-emerald-700"
              )}
            >
              Sri Lanka
            </button>
            <button
              onClick={() => setActiveCountry("india")}
              className={cn(
                "rounded-lg px-3 py-1.5 font-semibold transition-all",
                activeCountry === "india" ? "bg-amber-500 text-white shadow-sm" : "text-[#65707a] hover:text-amber-700"
              )}
            >
              India
            </button>
            <button
              onClick={() => setActiveCountry("indonesia")}
              className={cn(
                "rounded-lg px-3 py-1.5 font-semibold transition-all",
                activeCountry === "indonesia" ? "bg-sky-500 text-white shadow-sm" : "text-[#65707a] hover:text-sky-700"
              )}
            >
              Indonesia
            </button>
          </div>
        </div>

        {/* Live Market KPI Cards */}
        <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {countries.map((c) => (
            <div
              key={c.key}
              className={cn(
                "rounded-xl border p-4 transition-all duration-300",
                activeCountry === "all" || activeCountry === c.key
                  ? "border-[#d9d3df] bg-[#f7f4fa]/70 shadow-sm"
                  : "border-transparent bg-gray-50/50 opacity-40"
              )}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#7d7198]">
                  {c.label}
                </span>
                <span
                  className="size-2.5 rounded-full"
                  style={{ backgroundColor: c.color }}
                />
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-display text-3xl font-bold text-[#24323a]">
                  ${hoveredPoint !== null ? currentHoverData[c.key as "indonesia" | "sriLanka" | "india"] : c.latest}
                </span>
                <span className="font-mono text-xs font-semibold text-[#7d7198]">US$/MT</span>
              </div>
              <div className="mt-2 flex items-center justify-between border-t border-[#d9d3df]/60 pt-2 font-mono text-[11px] text-[#65707a]">
                <span>Min: ${c.min}</span>
                <span>Avg: ${c.avg}</span>
                <span>Max: ${c.max}</span>
              </div>
            </div>
          ))}
        </div>

        {/* The Interactive SVG Time-Series Chart */}
        <div className="relative mt-6 w-full overflow-hidden rounded-xl border border-[#d9d3df] bg-[#fcfaf6] p-4">
          <div className="mb-2 flex items-center justify-between px-2">
            <span className="font-mono text-[11px] font-semibold text-[#7d7198]">
              Highstock Time-Series Engine · 2023 – 2025 Price Trajectory
            </span>
            <span className="font-mono text-[11px] text-emerald-600 font-semibold">
              Selected: {currentHoverData.month}
            </span>
          </div>

          <svg
            viewBox={`0 0 ${width} ${height}`}
            className="w-full h-64 sm:h-72 select-none overflow-visible"
          >
            {/* Grid horizontal lines */}
            {[800, 850, 900, 950, 1000].map((val) => (
              <g key={val}>
                <line
                  x1={paddingX}
                  y1={getY(val)}
                  x2={width - paddingX}
                  y2={getY(val)}
                  stroke="#e2d9ec"
                  strokeDasharray="4 4"
                  strokeWidth="1"
                />
                <text
                  x={paddingX - 10}
                  y={getY(val) + 4}
                  fill="#7d7198"
                  fontSize="10"
                  textAnchor="end"
                  fontFamily="monospace"
                >
                  ${val}
                </text>
              </g>
            ))}

            {/* Vertical grid lines & month labels */}
            {priceData.map((d, i) => (
              <g key={i}>
                <line
                  x1={getX(i)}
                  y1={paddingY}
                  x2={getX(i)}
                  y2={height - paddingY}
                  stroke="#e2d9ec"
                  strokeWidth={hoveredPoint === i ? "1.5" : "0.5"}
                  strokeDasharray={hoveredPoint === i ? "0" : "3 3"}
                />
                <text
                  x={getX(i)}
                  y={height - paddingY + 18}
                  fill={hoveredPoint === i ? "#24323a" : "#7d7198"}
                  fontWeight={hoveredPoint === i ? "bold" : "normal"}
                  fontSize="10"
                  textAnchor="middle"
                  fontFamily="monospace"
                >
                  {d.month}
                </text>
              </g>
            ))}

            {/* Indonesia Line (Sky Blue) */}
            {(activeCountry === "all" || activeCountry === "indonesia") && (
              <path
                d={makePath("indonesia")}
                fill="none"
                stroke="#0284c7"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="transition-all duration-300"
              />
            )}

            {/* Sri Lanka Line (Emerald Green) */}
            {(activeCountry === "all" || activeCountry === "sriLanka") && (
              <path
                d={makePath("sriLanka")}
                fill="none"
                stroke="#10b981"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="transition-all duration-300"
              />
            )}

            {/* India Line (Amber) */}
            {(activeCountry === "all" || activeCountry === "india") && (
              <path
                d={makePath("india")}
                fill="none"
                stroke="#f59e0b"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="transition-all duration-300"
              />
            )}

            {/* Interactive Data Point Dots */}
            {priceData.map((d, i) => (
              <g
                key={i}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredPoint(i)}
              >
                {/* Hit area */}
                <rect
                  x={getX(i) - 15}
                  y={paddingY}
                  width="30"
                  height={height - paddingY * 2}
                  fill="transparent"
                />

                {(activeCountry === "all" || activeCountry === "indonesia") && (
                  <circle
                    cx={getX(i)}
                    cy={getY(d.indonesia)}
                    r={hoveredPoint === i ? 5 : 3.5}
                    fill="#0284c7"
                    stroke="#fff"
                    strokeWidth="1.5"
                  />
                )}
                {(activeCountry === "all" || activeCountry === "sriLanka") && (
                  <circle
                    cx={getX(i)}
                    cy={getY(d.sriLanka)}
                    r={hoveredPoint === i ? 5 : 3.5}
                    fill="#10b981"
                    stroke="#fff"
                    strokeWidth="1.5"
                  />
                )}
                {(activeCountry === "all" || activeCountry === "india") && (
                  <circle
                    cx={getX(i)}
                    cy={getY(d.india)}
                    r={hoveredPoint === i ? 5 : 3.5}
                    fill="#f59e0b"
                    stroke="#fff"
                    strokeWidth="1.5"
                  />
                )}
              </g>
            ))}
          </svg>
        </div>
      </div>

      {/* =========================================================================
          SECTION 2: DATA INGESTION & PIPELINE ARCHITECTURE
         ========================================================================= */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-[#7d7198]" />
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.28em] text-[#7d7198]">
            Ingestion & Extraction Pipeline
          </p>
        </div>
        <h3 className="font-display text-2xl font-semibold text-[#24323a] sm:text-3xl">
          Automating 35+ monthly PDF reports & Excel matrices.
        </h3>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
          <div className="rounded-2xl border border-[#d9d3df] bg-white p-6 shadow-sm">
            <div className="flex size-10 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
              <FileText className="size-5" />
            </div>
            <h4 className="mt-4 font-display text-base font-semibold text-[#24323a]">
              1. Multi-PDF Ingestion
            </h4>
            <p className="mt-2 text-xs leading-5 text-[#65707a]">
              Ingests monthly "Prices of Coconut Products" WPU reports (Jan 2023 – Nov 2025) plus Excel sheets via drag-and-drop.
            </p>
          </div>

          <div className="rounded-2xl border border-[#d9d3df] bg-white p-6 shadow-sm">
            <div className="flex size-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
              <Cpu className="size-5" />
            </div>
            <h4 className="mt-4 font-display text-base font-semibold text-[#24323a]">
              2. pdfplumber Extraction
            </h4>
            <p className="mt-2 text-xs leading-5 text-[#65707a]">
              Heuristic tabular parser detects date-header rows (dd/mm/yyyy), parses countries and regional markets, skipping non-quoted tokens.
            </p>
          </div>

          <div className="rounded-2xl border border-[#d9d3df] bg-white p-6 shadow-sm">
            <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
              <Database className="size-5" />
            </div>
            <h4 className="mt-4 font-display text-base font-semibold text-[#24323a]">
              3. MongoDB Storage
            </h4>
            <p className="mt-2 text-xs leading-5 text-[#65707a]">
              Normalizes quotes into <code className="rounded bg-emerald-50 px-1 text-emerald-700 font-mono text-[10px]">charcoal_prices</code> collection with indexed temporal coordinates.
            </p>
          </div>

          <div className="rounded-2xl border border-[#d9d3df] bg-white p-6 shadow-sm">
            <div className="flex size-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
              <BarChart3 className="size-5" />
            </div>
            <h4 className="mt-4 font-display text-base font-semibold text-[#24323a]">
              4. Highstock Analytics
            </h4>
            <p className="mt-2 text-xs leading-5 text-[#65707a]">
              Serves aggregated time series via FastAPI REST endpoints to interactive Highcharts charts and instant PNG/CSV export.
            </p>
          </div>
        </div>
      </div>

      {/* =========================================================================
          SECTION 3: CARBONXINSIGHT TECH STACK BENTO
         ========================================================================= */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
        <div className="rounded-2xl border border-[#d9d3df] bg-white p-6 shadow-sm lg:col-span-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Server className="size-5 text-sky-600" />
              <h4 className="font-display text-lg font-semibold text-[#24323a]">Backend & Ingestion Layer</h4>
            </div>
            <span className="rounded-full bg-sky-50 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-sky-700 border border-sky-200">
              Python 3.10
            </span>
          </div>
          <p className="mt-3 text-sm leading-6 text-[#65707a]">
            FastAPI application with automated PDF/Excel parsing, CORS configuration, and asynchronous MongoDB connectivity via PyMongo.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["FastAPI", "Uvicorn", "pdfplumber", "pandas", "openpyxl", "PyMongo", "Pydantic"].map((tech) => (
              <span key={tech} className="rounded-md border border-[#d9d3df] bg-[#f7f4fa] px-2.5 py-1 font-mono text-xs text-[#24323a]">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-[#d9d3df] bg-white p-6 shadow-sm lg:col-span-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Layers className="size-5 text-emerald-600" />
              <h4 className="font-display text-lg font-semibold text-[#24323a]">Frontend & Visualizations</h4>
            </div>
            <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-emerald-700 border border-emerald-200">
              React 19 + Vite 7
            </span>
          </div>
          <p className="mt-3 text-sm leading-6 text-[#65707a]">
            Responsive market analytics portal powered by Highcharts Highstock, Recharts, and automated client-side jsPDF/Excel report exports.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["React 19", "Vite 7", "Highcharts", "Highstock", "Recharts", "Axios", "jsPDF", "xlsx"].map((tech) => (
              <span key={tech} className="rounded-md border border-[#d9d3df] bg-[#f7f4fa] px-2.5 py-1 font-mono text-xs text-[#24323a]">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
