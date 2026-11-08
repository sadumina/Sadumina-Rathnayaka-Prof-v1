"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";
import {
  ArrowDownUp,
  ArrowRight,
  ChartNoAxesCombined,
  Layers3,
  Network,
  ScanLine,
} from "lucide-react";
import { motion } from "motion/react";
import { useState, type ReactNode } from "react";

const modelCards = [
  {
    number: "01",
    name: "Custom CNN",
    eyebrow: "Baseline · Trained from scratch",
    summary: "A from-scratch convolutional model establishes a baseline for comparing the value of transfer learning.",
    icon: ScanLine,
    accent: "bg-[#f0eaf5] text-[#7d7198]",
    pill: "No pretrained weights",
    detailTitle: "Baseline role",
    detail: "Shows how a model trained from scratch compares with ImageNet-initialized architectures.",
    layout: "lg:col-span-5",
  },
  {
    number: "02",
    name: "DenseNet121",
    eyebrow: "Transfer learning · ImageNet",
    summary: "Dense connectivity reuses earlier feature maps and supports gradient flow through the network.",
    icon: Network,
    accent: "bg-[#e8e1f1] text-[#7d7198]",
    pill: "Study spotlight",
    detailTitle: "Why DenseNet?",
    detail: "Each layer receives feature maps from preceding layers, preserving useful features as the network learns.",
    layout: "lg:col-span-7",
    featured: true,
  },
  {
    number: "03",
    name: "EfficientNetB0",
    eyebrow: "Transfer learning · ImageNet",
    summary: "Compound scaling balances model depth, width, and input resolution.",
    icon: ArrowDownUp,
    accent: "bg-[#e8f1ed] text-[#527c69]",
    pill: "Compound scaling",
    detailTitle: "Scaling strategy",
    detail: "Considers depth, width, and resolution together for an accuracy-to-computation comparison.",
    layout: "lg:col-span-6",
  },
  {
    number: "04",
    name: "ResNet50",
    eyebrow: "Transfer learning · ImageNet",
    summary: "Residual connections create shortcut paths through a deeper network.",
    icon: Layers3,
    accent: "bg-[#eef2f8] text-[#59739b]",
    pill: "Residual learning",
    detailTitle: "Skip connections",
    detail: "Shortcut paths help information and gradients travel through deeper layers.",
    layout: "lg:col-span-6",
  },
];

function SpotlightCard({
  children,
  className,
  featured = false,
}: {
  children: ReactNode;
  className?: string;
  featured?: boolean;
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <motion.article
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        setPosition({ x: event.clientX - bounds.left, y: event.clientY - bounds.top });
      }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className={cn(
        "group relative isolate h-full overflow-hidden rounded-2xl border bg-white/90 p-6 shadow-[0_8px_24px_rgba(36,50,58,0.045)] transition-[border-color,box-shadow] duration-300 hover:border-[#b8aaca] hover:shadow-[0_16px_34px_rgba(125,113,152,0.12)] focus-within:border-[#7d7198] focus-within:ring-2 focus-within:ring-[#7d7198]/20 sm:p-7",
        featured
          ? "border-[#cfc2dd] bg-gradient-to-br from-white via-white to-[#f3eef8] shadow-[0_12px_30px_rgba(125,113,152,0.09)]"
          : "border-[#d9d3df]",
        className
      )}
      tabIndex={0}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
        style={{
          background: `radial-gradient(420px circle at ${position.x}px ${position.y}px, rgba(125,113,152,0.11), transparent 68%)`,
        }}
      />
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </motion.article>
  );
}

function DenseConnectivityDiagram() {
  const layers = [
    { x: 12, y: 18 }, { x: 12, y: 50 }, { x: 12, y: 82 },
    { x: 64, y: 18 }, { x: 64, y: 50 }, { x: 64, y: 82 },
    { x: 116, y: 18 }, { x: 116, y: 50 }, { x: 116, y: 82 },
  ];
  const links = [
    [0, 3], [0, 4], [0, 5], [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5],
    [0, 6], [0, 7], [0, 8], [1, 6], [1, 7], [1, 8], [2, 6], [2, 7], [2, 8],
    [3, 6], [3, 7], [3, 8], [4, 6], [4, 7], [4, 8], [5, 6], [5, 7], [5, 8],
  ];

  return (
    <svg
      viewBox="0 0 128 100"
      className="h-24 w-32 shrink-0"
      role="img"
      aria-label="DenseNet diagram showing feature connections between layers"
    >
      {links.map(([from, to], index) => (
        <line
          key={index}
          x1={layers[from].x}
          y1={layers[from].y}
          x2={layers[to].x}
          y2={layers[to].y}
          stroke="#b8aaca"
          strokeOpacity="0.58"
          strokeWidth="1.2"
        />
      ))}
      {layers.map((layer, index) => (
        <circle
          key={index}
          cx={layer.x}
          cy={layer.y}
          r="5"
          fill={index < 3 ? "#7d7198" : index < 6 ? "#c7ddd4" : "#c88769"}
          stroke="white"
          strokeWidth="2"
        />
      ))}
    </svg>
  );
}

function ModelCard({
  model,
  index,
}: {
  model: (typeof modelCards)[number];
  index: number;
}) {
  const Icon = model.icon;

  return (
    <ScrollReveal delay={0.06 + index * 0.07} y={0} className={cn("h-full", model.layout)}>
      <SpotlightCard featured={model.featured}>
        <div className="flex h-full flex-col">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className={cn("flex size-10 shrink-0 items-center justify-center rounded-xl", model.accent)}>
                <Icon className="size-5" />
              </span>
              <div>
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.17em] text-[#7d7198] sm:text-[10px]">
                  {model.number} · {model.eyebrow}
                </p>
                <h3 className="mt-1 font-display text-lg font-semibold text-[#24323a] sm:text-xl">{model.name}</h3>
              </div>
            </div>
            <span className="hidden rounded-full border border-[#d9d3df] bg-white/90 px-2.5 py-1 font-mono text-[9px] text-[#65707a] sm:inline-flex">
              {model.pill}
            </span>
          </div>

          <div className="mt-5 flex flex-1 flex-col justify-between gap-5">
            <p className="max-w-xl text-sm leading-6 text-[#65707a]">{model.summary}</p>

            {model.featured ? (
              <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#e7e0ed] bg-white/75 px-4 py-3">
                <div>
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-wider text-[#7d7198]">
                    Dense connectivity
                  </p>
                  <p className="mt-1 text-[11px] leading-4 text-[#65707a]">Earlier feature maps are reused</p>
                </div>
                <DenseConnectivityDiagram />
              </div>
            ) : (
              <div className="flex items-center justify-between gap-3 border-t border-[#eeeaf2] pt-4">
                <div>
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-wider text-[#7d7198]">
                    {model.detailTitle}
                  </p>
                  <p className="mt-1 max-w-md text-[11px] leading-5 text-[#65707a]">{model.detail}</p>
                </div>
                <ArrowRight className="size-4 shrink-0 text-[#b8aaca] transition-transform group-hover:translate-x-1" />
              </div>
            )}
          </div>
        </div>
      </SpotlightCard>
    </ScrollReveal>
  );
}

export function RetinopathyModelBento() {
  return (
    <div className="rounded-3xl border border-[#d9d3df] bg-white/55 p-4 shadow-[0_14px_42px_rgba(36,50,58,0.045)] sm:p-6 lg:p-8">
      {[0, 2].map((startIndex) => (
        <div key={startIndex} className="mb-4 grid gap-4 md:grid-cols-2 lg:grid-cols-12">
          {modelCards.slice(startIndex, startIndex + 2).map((model, offset) => {
            const index = startIndex + offset;
            return (
              <ModelCard
                key={model.name}
                model={model}
                index={index}
              />
            );
          })}
        </div>
      ))}

      <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-[#cfc2dd] bg-gradient-to-r from-[#f7f4fa] via-white to-[#f7f4fa] p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#7d7198] shadow-sm">
            <ChartNoAxesCombined className="size-5" />
          </span>
          <div>
            <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#7d7198]">
              Common evaluation
            </p>
            <h3 className="mt-1 font-display text-base font-semibold text-[#24323a] sm:text-lg">
              Compare performance & efficiency
            </h3>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {["Quadratic Weighted Kappa", "Macro F1", "ROC-AUC", "Training time"].map((metric) => (
            <span key={metric} className="rounded-full border border-[#d9d3df] bg-white px-3 py-1.5 font-mono text-[9px] text-[#65707a]">
              {metric}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
