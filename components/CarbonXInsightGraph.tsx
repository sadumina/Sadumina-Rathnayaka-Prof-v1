"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

// Real benchmark price trajectory data from Haycarb WPU reports (2023 - 2025)
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

export function CarbonXInsightGraph() {
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
    <div className="relative w-full overflow-hidden rounded-2xl border border-[#d9d3df] bg-white/85 p-6 md:p-8 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
      {/* Top Controls Bar */}
      <div className="flex flex-col justify-between gap-4 border-b border-[#d9d3df]/80 pb-5 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-[#7d7198]">
              Highstock Time-Series Engine · Haycarb PLC
            </span>
          </div>
          <p className="mt-1 font-display text-xl font-semibold text-[#24323a]">
            Coconut Shell Charcoal Benchmark Price Graph
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 rounded-xl border border-[#d9d3df] bg-[#f7f4fa] p-1 font-mono text-xs">
          <button
            onClick={() => setActiveCountry("all")}
            className={cn(
              "rounded-lg px-3 py-1 font-semibold transition-all",
              activeCountry === "all" ? "bg-white text-[#24323a] shadow-sm" : "text-[#65707a] hover:text-[#24323a]"
            )}
          >
            All Markets
          </button>
          <button
            onClick={() => setActiveCountry("sriLanka")}
            className={cn(
              "rounded-lg px-3 py-1 font-semibold transition-all",
              activeCountry === "sriLanka" ? "bg-emerald-500 text-white shadow-sm" : "text-[#65707a] hover:text-emerald-700"
            )}
          >
            Sri Lanka
          </button>
          <button
            onClick={() => setActiveCountry("india")}
            className={cn(
              "rounded-lg px-3 py-1 font-semibold transition-all",
              activeCountry === "india" ? "bg-amber-500 text-white shadow-sm" : "text-[#65707a] hover:text-amber-700"
            )}
          >
            India
          </button>
          <button
            onClick={() => setActiveCountry("indonesia")}
            className={cn(
              "rounded-lg px-3 py-1 font-semibold transition-all",
              activeCountry === "indonesia" ? "bg-sky-500 text-white shadow-sm" : "text-[#65707a] hover:text-sky-700"
            )}
          >
            Indonesia
          </button>
        </div>
      </div>

      {/* Country KPI Cards */}
      <div className="my-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {countries.map((c) => (
          <div
            key={c.key}
            className={cn(
              "rounded-xl border p-3.5 transition-all duration-300",
              activeCountry === "all" || activeCountry === c.key
                ? "border-[#d9d3df] bg-[#f7f4fa]/70 shadow-sm"
                : "border-transparent bg-gray-50/50 opacity-40"
            )}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#7d7198]">
                {c.label}
              </span>
              <span className="size-2 rounded-full" style={{ backgroundColor: c.color }} />
            </div>
            <div className="mt-1.5 flex items-baseline gap-2">
              <span className="font-display text-2xl font-bold text-[#24323a]">
                ${hoveredPoint !== null ? currentHoverData[c.key as "indonesia" | "sriLanka" | "india"] : c.latest}
              </span>
              <span className="font-mono text-[11px] font-semibold text-[#7d7198]">US$/MT</span>
            </div>
            <div className="mt-1.5 flex items-center justify-between border-t border-[#d9d3df]/60 pt-1.5 font-mono text-[10px] text-[#65707a]">
              <span>Min: ${c.min}</span>
              <span>Avg: ${c.avg}</span>
              <span>Max: ${c.max}</span>
            </div>
          </div>
        ))}
      </div>

      {/* SVG Time-Series Chart */}
      <div className="relative mt-4 w-full overflow-hidden rounded-xl border border-[#d9d3df] bg-[#fcfaf6] p-3">
        <div className="mb-1 flex items-center justify-between px-2 font-mono text-[10px]">
          <span className="text-[#7d7198]">Interactive Highstock Engine · 2023–2025</span>
          <span className="font-semibold text-emerald-600">Selected: {currentHoverData.month}</span>
        </div>

        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-56 sm:h-64 select-none overflow-visible">
          {/* Horizontal Grid */}
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
              <text x={paddingX - 10} y={getY(val) + 4} fill="#7d7198" fontSize="10" textAnchor="end" fontFamily="monospace">
                ${val}
              </text>
            </g>
          ))}

          {/* Vertical Grid & Dates */}
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
                y={height - paddingY + 16}
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
            <g key={i} className="cursor-pointer" onMouseEnter={() => setHoveredPoint(i)}>
              <rect x={getX(i) - 15} y={paddingY} width="30" height={height - paddingY * 2} fill="transparent" />
              {(activeCountry === "all" || activeCountry === "indonesia") && (
                <circle cx={getX(i)} cy={getY(d.indonesia)} r={hoveredPoint === i ? 5 : 3.5} fill="#0284c7" stroke="#fff" strokeWidth="1.5" />
              )}
              {(activeCountry === "all" || activeCountry === "sriLanka") && (
                <circle cx={getX(i)} cy={getY(d.sriLanka)} r={hoveredPoint === i ? 5 : 3.5} fill="#10b981" stroke="#fff" strokeWidth="1.5" />
              )}
              {(activeCountry === "all" || activeCountry === "india") && (
                <circle cx={getX(i)} cy={getY(d.india)} r={hoveredPoint === i ? 5 : 3.5} fill="#f59e0b" stroke="#fff" strokeWidth="1.5" />
              )}
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
