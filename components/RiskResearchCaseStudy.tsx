"use client";

import { ScrollReveal, SectionAura } from "@/components/ScrollReveal";
import type { ProjectItem } from "@/types/portfolio";
import Image from "next/image";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  Circle,
  CloudRain,
  Database,
  GitBranch,
  Lightbulb,
  MapPinned,
  ShieldAlert,
  RadioTower,
  Route,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import DotGrid from "@/components/DotGrid";
import DotField from "@/components/DotField";
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/reui/timeline";

const milestones = [
  {
    number: "01",
    title: "Proposal & literature review",
    description: "Define the research problem, review related systems, and establish objectives and research questions.",
    status: "Completed",
    state: "complete",
  },
  {
    number: "02",
    title: "Data acquisition",
    description: "Gather and prepare NBRO, DMC, Census, OpenStreetMap, and historical disaster data.",
    status: "Partly completed · continuing",
    state: "active",
  },
  {
    number: "03",
    title: "Landslide data preprocessing",
    description: "Prepare an event and control dataset with rainfall, soil, elevation, and slope attributes.",
    status: "Completed",
    state: "complete",
  },
  {
    number: "04",
    title: "Model development & comparison",
    description: "Compare logistic regression, XGBoost, and LightGBM for landslide prediction.",
    status: "In progress",
    state: "active",
  },
  {
    number: "05",
    title: "Explainability layers",
    description: "Develop SHAP and LIME explanations for landslide and impact decision support.",
    status: "In progress",
    state: "active",
  },
  {
    number: "06",
    title: "Inter-component interface contracts",
    description: "Define versioned interfaces and structured payloads exchanged between the four components.",
    status: "In progress",
    state: "active",
  },
  {
    number: "07",
    title: "Prototype dashboards",
    description: "Demonstrate the Risk Atlas and integrated user experience with illustrative data.",
    status: "Static prototype available",
    state: "active",
  },
  {
    number: "08",
    title: "Integration with live component outputs",
    description: "Connect the prototype experience to outputs produced by the research components.",
    status: "Planned",
    state: "planned",
  },
  {
    number: "09",
    title: "Evaluation, backtesting & usability",
    description: "Validate against historical events and conduct planned usability evaluation.",
    status: "Planned",
    state: "planned",
  },
  {
    number: "10",
    title: "Final report & viva",
    description: "Consolidate findings and present the completed research.",
    status: "Planned",
    state: "planned",
  },
];

const components = [
  {
    number: "01",
    title: "Flood impact assessment",
    description: "Fuse rainfall, river-level, terrain, and historical flood data for severity assessment and dynamic mapping.",
    area: "Kalu Ganga · Kelani Ganga",
    focus: "Flood severity assessment using rainfall, river-level, terrain, and historical flood information.",
    output: "A severity view and map layer intended to inform downstream impact analysis.",
    category: "Hazard assessment",
    details: [
      { title: "Rainfall & river levels", detail: "Hydrometeorological signals" },
      { title: "Terrain context", detail: "Catchment and elevation layers" },
      { title: "Flood history", detail: "Past events for context" },
    ],
    icon: CloudRain,
    accent: "bg-sky-50 text-sky-700",
  },
  {
    number: "02",
    title: "Landslide prediction",
    description: "Estimate occurrence probability and use SHAP/LIME to explain environmental and human-influenced factors.",
    area: "Nuwara Eliya District",
    focus: "Compare Logistic Regression, XGBoost, and LightGBM using rainfall, soil, elevation, and slope attributes.",
    output: "A landslide likelihood estimate with SHAP/LIME explanations under development.",
    category: "Prediction & explainability",
    details: [
      { title: "Model comparison", detail: "Logistic Regression · XGBoost · LightGBM" },
      { title: "Environmental data", detail: "Rainfall · soil · elevation · slope" },
      { title: "Interpretability", detail: "SHAP & LIME under development" },
    ],
    icon: MapPinned,
    accent: "bg-emerald-50 text-emerald-700",
  },
  {
    number: "03",
    title: "Human impact & decisions",
    description: "Combine hazard severity with exposure, sensitivity, and capacity to prioritize GN-division alerts.",
    area: "GN-division level",
    focus: "Bring hazard severity together with exposure, sensitivity, and capacity at GN-division level.",
    output: "Prioritized local impact information for decision support.",
    category: "Impact & decision support",
    details: [
      { title: "Hazard severity", detail: "Flood and landslide context" },
      { title: "Community exposure", detail: "People and assets at risk" },
      { title: "Vulnerability factors", detail: "Sensitivity · response capacity" },
    ],
    icon: UsersRound,
    accent: "bg-violet-50 text-violet-700",
  },
  {
    number: "04",
    title: "Emergency response",
    description: "Coordinate resources, allocate under constraints, and plan routes that account for hazard-blocked roads.",
    area: "Multi-district pilot",
    focus: "Consider response resources and routes while accounting for roads affected by hazards.",
    output: "A proposed response plan to support coordinated action.",
    category: "Operations & response",
    details: [
      { title: "Resource coordination", detail: "Plan allocation under constraints" },
      { title: "Route planning", detail: "Consider hazard-affected roads" },
      { title: "Response support", detail: "Proposed coordinated actions" },
    ],
    icon: Route,
    accent: "bg-amber-50 text-amber-700",
  },
];

const illustrativeScenario = [
  {
    title: "Hazard signals",
    description:
      "Illustrative rainfall and river-level information enters the flood assessment; terrain and rainfall attributes support landslide analysis.",
    label: "Inputs · illustrative only",
    signals: ["Rainfall", "River levels", "Terrain attributes"],
    icon: CloudRain,
  },
  {
    title: "Assess local impact",
    description:
      "The concept combines hazard severity with exposure, sensitivity, and capacity to organize impact information by GN division.",
    label: "Analysis · under research",
    signals: ["Hazard severity", "Exposure", "Sensitivity & capacity"],
    icon: BarChart3,
  },
  {
    title: "Prioritize response",
    description:
      "Decision support is intended to help teams consider where resources may be needed first, subject to human review.",
    label: "Decision support · proposed",
    signals: ["Local priorities", "Human review", "Decision support"],
    icon: UsersRound,
  },
  {
    title: "Plan routes",
    description:
      "The response component is designed to consider road access and hazard-blocked routes when coordinating response.",
    label: "Response · proposed",
    signals: ["Road access", "Hazard-affected routes", "Response planning"],
    icon: Route,
  },
];

const researchMethods = [
  {
    title: "Landslide model comparison",
    eyebrow: "Three approaches · no scores published",
    description:
      "Logistic Regression, XGBoost, and LightGBM are being compared using the prepared landslide event/control data.",
    methods: ["Logistic Regression", "XGBoost", "LightGBM"],
    icon: Activity,
    accent: "bg-[#f0ebf5] text-[#75658f]",
  },
  {
    title: "Explainability",
    eyebrow: "Interpretability layer · in progress",
    description:
      "SHAP and LIME are being developed to help explain how environmental and human-impact factors influence model outputs.",
    methods: ["SHAP", "LIME"],
    icon: Lightbulb,
    accent: "bg-[#e8f1ed] text-[#527c69]",
  },
  {
    title: "Data preparation",
    eyebrow: "Landslide component",
    description:
      "The event/control dataset includes rainfall, soil, elevation, and slope attributes for model development.",
    methods: ["Rainfall", "Soil", "Elevation", "Slope"],
    icon: Database,
    accent: "bg-[#f8eee8] text-[#a66e4d]",
  },
];

const statusStyles = {
  complete: {
    marker: "border-[#a9cbb9] bg-[#e8f1ed] text-[#527c69]",
    line: "bg-[#b7d4c8]",
    badge: "bg-[#e8f1ed] text-[#527c69]",
  },
  active: {
    marker: "border-[#b8aaca] bg-[#7d7198] text-white",
    line: "bg-[#cfc2dd]",
    badge: "bg-[#f0ebf5] text-[#75658f]",
  },
  planned: {
    marker: "border-[#d9d3df] bg-white text-[#9a929f]",
    line: "bg-[#e8e3eb]",
    badge: "bg-[#f4f2f5] text-[#7f888c]",
  },
};

export function RiskResearchCaseStudy({ project }: { project: ProjectItem }) {
  const [scenarioStep, setScenarioStep] = useState(0);
  const architectureRef = useRef<HTMLDivElement>(null);
  const floodNodeRef = useRef<HTMLDivElement>(null);
  const landslideNodeRef = useRef<HTMLDivElement>(null);
  const impactNodeRef = useRef<HTMLDivElement>(null);
  const responseNodeRef = useRef<HTMLDivElement>(null);
  const activeScenario = illustrativeScenario[scenarioStep];
  const ActiveScenarioIcon = activeScenario.icon;

  return (
    <>
      <section id="research-timeline" className="section-pad relative overflow-hidden bg-[#fcfaf6]">
        <SectionAura side="left" />
        <div className="container-pad relative z-10">
          <ScrollReveal>
            <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="mb-4 flex items-center gap-4">
                  <span aria-hidden="true" className="h-px w-14 bg-[#24323a] sm:w-20" />
                  <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#7d7198]">
                    Research Journey
                  </p>
                </div>
                <h2 className="font-display text-3xl font-semibold tracking-[-0.035em] text-[#24323a] sm:text-4xl md:text-5xl">
                  From research question to response system.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#65707a] sm:text-base">
                  A progress timeline for Project J26-IT-334. The project began in July 2025; the source summary
                  records milestone status, but does not assign individual dates.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 self-start rounded-xl border border-[#d9d3df] bg-white px-4 py-3 shadow-sm lg:self-auto">
                <span className="flex size-10 items-center justify-center bg-[#e8f1ed] text-[#527c69]">
                  <RadioTower className="size-5" />
                </span>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#7d7198]">Project started</p>
                  <p className="mt-1 font-display text-lg font-semibold text-[#24323a]">July 2025</p>
                </div>
                <span className="basis-full border-t border-[#eeeaf2] pt-2 font-mono text-[8px] uppercase tracking-[0.14em] text-[#8b9291]">
                  Progress status · project README
                </span>
              </div>
            </div>
          </ScrollReveal>

          <div className="mb-5 grid gap-3 sm:grid-cols-3">
            {[
              {
                label: "Completed",
                count: milestones.filter((item) => item.state === "complete").length,
                detail: "milestones",
                color: "text-[#527c69]",
                bg: "bg-[#e8f1ed]",
              },
              {
                label: "In progress",
                count: milestones.filter((item) => item.state === "active").length,
                detail: "milestones",
                color: "text-[#75658f]",
                bg: "bg-[#f0ebf5]",
              },
              {
                label: "Planned",
                count: milestones.filter((item) => item.state === "planned").length,
                detail: "milestones",
                color: "text-[#7f888c]",
                bg: "bg-[#f4f2f5]",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-2xl border border-[#e8e3eb] bg-white/80 px-4 py-3"
              >
                <span className={`flex size-10 items-center justify-center rounded-xl font-display text-lg font-semibold ${item.bg} ${item.color}`}>
                  {item.count}
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#24323a]">{item.label}</p>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-[#8b9291]">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-[#d9d3df] bg-white/75 p-5 shadow-[0_14px_42px_rgba(36,50,58,0.055)] sm:p-8 lg:p-10">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 opacity-35">
              <DotField
                className="h-full w-full"
                dotRadius={1}
                dotSpacing={18}
                pattern="grid"
                gradientFrom="#91b9a7"
                gradientTo="#b8aaca"
                gradientAngle={135}
                baseOpacity={0.45}
                speed={0}
                interactive={false}
                holdToZoom={false}
                intro={false}
                lightMode
                opacity={0.65}
                maxDevicePixelRatio={1.5}
              />
            </div>
            <div className="relative z-10">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-[#eeeaf2] pb-5">
              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#7d7198]">
                  Project milestones
                </p>
                <p className="mt-1 text-xs text-[#65707a]">Ordered by progress · undated stages remain undated</p>
              </div>
              <span className="inline-flex items-center gap-2 border border-[#d9d3df] bg-[#f7f4fa] px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-[#7d7198]">
                <GitBranch className="size-3.5" />
                Active research prototype
              </span>
            </div>

            <Timeline
              defaultValue={0}
              className="w-full"
            >
              <TimelineItem step={0} className="sm:group-data-[orientation=vertical]/timeline:ms-32">
                <TimelineHeader className="relative flex flex-col gap-1 sm:min-h-8 sm:flex-row sm:items-center sm:gap-3">
                  <TimelineSeparator className="bg-gradient-to-b from-[#91b9a7] to-[#cfc2dd]" />
                  <TimelineDate className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#527c69] sm:absolute sm:-left-32 sm:mb-0 sm:w-20 sm:text-right">
                    July 2025
                  </TimelineDate>
                  <TimelineTitle className="font-display text-base font-semibold text-[#24323a] sm:text-lg">
                    Research project begins
                  </TimelineTitle>
                  <span className="inline-flex w-fit items-center rounded-full bg-[#e8f1ed] px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-[#527c69] sm:ms-auto">
                    Project start
                  </span>
                  <TimelineIndicator className="flex size-8 items-center justify-center border-[#a9cbb9] bg-[#e8f1ed] text-[#527c69] shadow-[0_0_0_4px_#f4faf6]">
                    <RadioTower className="size-3.5" />
                  </TimelineIndicator>
                </TimelineHeader>
                <TimelineContent className="pb-1 text-xs leading-6 text-[#65707a] sm:text-sm">
                  Kick-off for the integrated flood and landslide risk assessment and emergency response research.
                </TimelineContent>
              </TimelineItem>

              {milestones.map((milestone, index) => {
                const style = statusStyles[milestone.state as keyof typeof statusStyles];
                const Icon =
                  milestone.state === "complete"
                    ? Check
                    : milestone.state === "active"
                      ? Circle
                      : ArrowDown;

                return (
                  <TimelineItem
                    key={milestone.number}
                    step={index + 1}
                    className="sm:group-data-[orientation=vertical]/timeline:ms-32"
                  >
                    <TimelineHeader className="relative flex flex-col gap-1 sm:min-h-8 sm:flex-row sm:items-center sm:gap-3">
                      <TimelineSeparator className={style.line} />
                      <span className="mb-1 block font-mono text-[9px] uppercase tracking-[0.14em] text-[#9a929f] sm:absolute sm:-left-32 sm:mb-0 sm:w-20 sm:text-right">
                        Date not specified
                      </span>
                      <TimelineTitle className="font-display text-base font-semibold text-[#24323a] sm:text-lg">
                        {milestone.title}
                      </TimelineTitle>
                      <span
                        className={`inline-flex w-fit items-center rounded-full px-3 py-1 font-mono text-[9px] uppercase tracking-wider ${style.badge} sm:ms-auto`}
                      >
                        {milestone.status}
                      </span>
                      <TimelineIndicator
                        className={`flex size-8 items-center justify-center shadow-[0_0_0_4px_#fcfaf6] ${style.marker}`}
                      >
                        <Icon className={milestone.state === "active" ? "size-3 fill-current" : "size-3.5"} />
                      </TimelineIndicator>
                    </TimelineHeader>
                    <TimelineContent className="pb-1 text-xs leading-6 text-[#65707a] sm:text-sm">
                      {milestone.description}
                    </TimelineContent>
                  </TimelineItem>
                );
              })}
            </Timeline>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad relative isolate overflow-hidden bg-[#f7f4fa]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 opacity-55">
          <DotGrid
            className="h-full w-full"
            baseColor="#a79fb1"
            activeColor="#527c69"
            shape="circle"
            dotSize={3.5}
            gap={20}
            proximity={135}
            strength={0.5}
            bounce={0.35}
            tension={0.3}
            returnDuration={0.8}
            shockRadius={240}
            shockStrength={2}
            swell={0.35}
            stretch={0.25}
            glow={0.3}
            fade={0.2}
            intro
            opacity={0.7}
            mouseInteraction
            clickShock
          />
        </div>
        <div className="container-pad relative z-10">
          <ScrollReveal>
            <div className="mb-9 max-w-3xl">
              <div className="mb-4 flex items-center gap-4">
                <span aria-hidden="true" className="h-px w-14 bg-[#24323a] sm:w-20" />
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#7d7198]">
                  Integrated Research System
                </p>
              </div>
              <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-[#24323a] sm:text-4xl">
                Four components. One response chain.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#65707a]">
                The research connects hazard assessment to local impact priorities and response decisions through
                structured component interfaces.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mb-4 flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8 bg-[#7d7198]/50" />
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7d7198]">
                Four-component architecture
              </p>
            </div>
            <div
              ref={architectureRef}
              role="img"
              aria-label="Proposed architecture: flood assessment and landslide prediction inform human impact and decision support, which informs emergency response."
              className="relative mb-10 overflow-hidden rounded-3xl border border-[#d9d3df] bg-white/80 p-4 shadow-[0_12px_36px_rgba(36,50,58,0.045)] sm:p-6 lg:p-8"
            >
              <div className="pointer-events-none absolute inset-0 hidden lg:block">
                <AnimatedBeam
                  containerRef={architectureRef}
                  fromRef={floodNodeRef}
                  toRef={impactNodeRef}
                  pathColor="#9889aa"
                  pathWidth={2.5}
                  pathOpacity={0.72}
                  gradientStartColor="#7d7198"
                  gradientStopColor="#91b9a7"
                  duration={3.5}
                  delay={0.2}
                  animatedPulse
                  className="z-0"
                />
                <AnimatedBeam
                  containerRef={architectureRef}
                  fromRef={landslideNodeRef}
                  toRef={impactNodeRef}
                  pathColor="#9889aa"
                  pathWidth={2.5}
                  pathOpacity={0.72}
                  gradientStartColor="#7d7198"
                  gradientStopColor="#91b9a7"
                  duration={3.5}
                  delay={1}
                  animatedPulse
                  className="z-0"
                />
                <AnimatedBeam
                  containerRef={architectureRef}
                  fromRef={impactNodeRef}
                  toRef={responseNodeRef}
                  pathColor="#9889aa"
                  pathWidth={2.5}
                  pathOpacity={0.72}
                  gradientStartColor="#7d7198"
                  gradientStopColor="#91b9a7"
                  duration={3.5}
                  delay={1.8}
                  animatedPulse
                  className="z-0"
                />
              </div>

              <div className="relative z-10 grid gap-3 lg:grid-cols-[1fr_1.15fr_1.15fr] lg:items-center lg:gap-8">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {[components[0], components[1]].map((component, index) => {
                    const Icon = component.icon;
                    const nodeRef = index === 0 ? floodNodeRef : landslideNodeRef;
                    return (
                      <div
                        key={component.number}
                        ref={nodeRef}
                        className="border border-[#d9d3df] bg-white p-4 shadow-[0_6px_18px_rgba(36,50,58,0.045)] sm:p-5"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#7d7198]">
                            Hazard input · {component.number}
                          </span>
                          <span className={`flex size-9 shrink-0 items-center justify-center ${component.accent}`}>
                            <Icon className="size-4" />
                          </span>
                        </div>
                        <h3 className="mt-3 font-display text-base font-semibold text-[#24323a]">
                          {component.title}
                        </h3>
                        <p className="mt-1 text-xs leading-5 text-[#65707a]">{component.area}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="flex justify-center text-[#9a929f] lg:hidden" aria-hidden="true">
                  <ArrowDown className="size-5" />
                </div>

                <div
                  ref={impactNodeRef}
                  className="border border-[#b8aaca] bg-[#f7f4fa] p-5 shadow-[0_8px_24px_rgba(125,113,152,0.08)] sm:p-6"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#7d7198]">
                      Decision layer · 03
                    </span>
                    <span className={`flex size-9 shrink-0 items-center justify-center ${components[2].accent}`}>
                      <UsersRound className="size-4" />
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-base font-semibold text-[#24323a]">
                    {components[2].title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-[#65707a]">
                    Combines hazard severity with exposure, sensitivity, and capacity to prioritize local alerts.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 border-t border-[#d9d3df] pt-3 font-mono text-[9px] uppercase tracking-wider text-[#7d7198]">
                    GN-division priorities
                  </span>
                </div>

                <div className="flex justify-center text-[#9a929f] lg:hidden" aria-hidden="true">
                  <ArrowDown className="size-5" />
                </div>

                <div
                  ref={responseNodeRef}
                  className="border border-[#c7ddd4] bg-[#f4faf6] p-5 shadow-[0_8px_24px_rgba(82,124,105,0.07)] sm:p-6"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#527c69]">
                      Response layer · 04
                    </span>
                    <span className={`flex size-9 shrink-0 items-center justify-center ${components[3].accent}`}>
                      <Route className="size-4" />
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-base font-semibold text-[#24323a]">
                    {components[3].title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-[#65707a]">
                    Supports resource allocation and route planning that accounts for hazard-blocked roads.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 border-t border-[#c7ddd4] pt-3 font-mono text-[9px] uppercase tracking-wider text-[#527c69]">
                    Coordinated action <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </div>

              <p className="mt-5 border-t border-[#eeeaf2] pt-4 text-xs leading-5 text-[#7f888c]">
                Intended information flow only. Live integration between components is still in development.
              </p>
            </div>
          </ScrollReveal>

          <div className="mb-5 flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-[#7d7198]/50" />
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7d7198]">
              Component breakdown
            </p>
          </div>
          <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-12">
            {components.map((component, index) => {
              const Icon = component.icon;
              const layout =
                index === 0
                  ? "lg:col-span-7"
                  : index === 1
                    ? "lg:col-span-5"
                    : index === 2
                      ? "lg:col-span-5"
                      : "lg:col-span-7";
              const badgeTone =
                index === 0
                  ? "border-sky-200 bg-sky-50 text-sky-700"
                  : index === 1
                    ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                    : index === 2
                      ? "border-violet-200 bg-violet-50 text-violet-700"
                      : "border-amber-200 bg-amber-50 text-amber-700";
              return (
                <ScrollReveal
                  key={component.number}
                  delay={index * 0.06}
                  className={`h-full ${layout}`}
                >
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#d9d3df] bg-white/90 p-5 shadow-[0_8px_24px_rgba(36,50,58,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#cfc2dd] hover:shadow-[0_16px_34px_rgba(36,50,58,0.08)] sm:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-3">
                        <span className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${component.accent}`}>
                          <Icon className="size-5" />
                        </span>
                        <div className="min-w-0">
                          <h3 className="font-display text-base font-semibold tracking-tight text-[#24323a] sm:text-lg">
                            {component.title}
                          </h3>
                          <p className="mt-0.5 font-mono text-[9px] text-[#7d7198]">{component.area}</p>
                        </div>
                      </div>
                      <span className={`shrink-0 rounded-full border px-2.5 py-1 font-mono text-[9px] font-medium ${badgeTone}`}>
                        {component.category}
                      </span>
                    </div>

                    <p className="mt-4 min-h-12 text-xs leading-5 text-[#65707a] sm:text-sm sm:leading-6">
                      {component.focus}
                    </p>

                    <div className="mt-4 grid flex-1 gap-2 sm:grid-cols-2">
                      {component.details.map((detail) => (
                        <div
                          key={detail.title}
                          className="rounded-xl border border-[#e5dfea] bg-[#faf8fb] px-3 py-2.5"
                        >
                          <p className="text-[11px] font-semibold text-[#24323a]">{detail.title}</p>
                          <p className="mt-0.5 text-[10px] leading-4 text-[#7d7198]">{detail.detail}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 border-t border-[#eeeaf2] pt-3">
                      <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-[#527c69]">
                        Intended contribution
                      </p>
                      <p className="mt-1 text-xs leading-5 text-[#65707a]">{component.output}</p>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
          <p className="mt-4 text-[10px] leading-5 text-[#8b9291]">
            These cards describe the research design; they do not represent live, operational hazard services.
          </p>

          <div className="mt-12 rounded-3xl border border-[#d9d3df] bg-[#fcfaf6] p-5 shadow-[0_12px_36px_rgba(36,50,58,0.04)] sm:p-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span aria-hidden="true" className="h-px w-8 bg-[#7d7198]/50" />
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7d7198]">
                    Illustrative scenario
                  </p>
                </div>
                <h3 className="font-display text-2xl font-semibold text-[#24323a] sm:text-3xl">
                  How the response chain is intended to work.
                </h3>
              </div>
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#f8eee8] px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-[#a66e4d]">
                <ShieldAlert className="size-3.5" />
                Fictional example · not an alert
              </span>
            </div>

            <div className="mt-6 grid gap-2 sm:grid-cols-4">
              {illustrativeScenario.map((step, index) => {
                const Icon = step.icon;
                const isCurrent = scenarioStep === index;
                return (
                  <button
                    key={step.title}
                    type="button"
                    onClick={() => setScenarioStep(index)}
                    aria-pressed={isCurrent}
                    className={`group relative flex min-h-28 items-start gap-3 rounded-2xl border p-4 text-left transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7d7198] focus-visible:ring-offset-2 sm:min-h-32 sm:flex-col sm:justify-between ${
                      isCurrent
                        ? "border-[#b8aaca] bg-gradient-to-br from-white to-[#f7f4fa] shadow-[0_10px_26px_rgba(125,113,152,0.12)]"
                        : "border-[#e8e3eb] bg-white/65 hover:-translate-y-0.5 hover:border-[#cfc2dd] hover:bg-white"
                    }`}
                  >
                    <span className="flex w-full items-center justify-between">
                      <span className={`flex size-10 shrink-0 items-center justify-center rounded-xl transition-colors ${isCurrent ? "bg-[#eee9f3] text-[#75658f]" : "bg-[#f5f2f6] text-[#8b8494] group-hover:bg-[#f0ebf5] group-hover:text-[#75658f]"}`}>
                        <Icon className="size-4" />
                      </span>
                      <span className={`font-mono text-[9px] font-semibold tracking-[0.14em] ${isCurrent ? "text-[#7d7198]" : "text-[#a2a3a0]"}`}>
                        0{index + 1}
                      </span>
                    </span>
                    <span className="mt-3 block text-sm font-semibold leading-5 text-[#24323a] sm:mt-4">{step.title}</span>
                    <span className={`mt-2 hidden h-1 w-full overflow-hidden rounded-full bg-[#eeeaf2] sm:block ${isCurrent ? "opacity-100" : "opacity-0"}`}>
                      <motion.span
                        layoutId="scenario-progress"
                        className="block h-full w-full origin-left rounded-full bg-gradient-to-r from-[#91b9a7] to-[#a79fb1]"
                      />
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 overflow-hidden rounded-2xl border border-[#eeeaf2] bg-white/85 shadow-[0_8px_24px_rgba(36,50,58,0.035)]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={scenarioStep}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  aria-live="polite"
                  className="grid gap-5 p-5 sm:p-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center"
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#e8f1ed] text-[#527c69] ring-4 ring-[#f5f8f5]">
                      <ActiveScenarioIcon className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-[#7d7198]">
                          {activeScenario.label}
                        </p>
                        <span className="text-[10px] text-[#a2a3a0]">Stage 0{scenarioStep + 1} of 04</span>
                      </div>
                      <p className="mt-2 max-w-4xl text-sm leading-6 text-[#65707a]">
                        {activeScenario.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {activeScenario.signals.map((signal) => (
                          <span key={signal} className="border border-[#e8e3eb] bg-[#faf8fb] px-2.5 py-1 font-mono text-[9px] uppercase tracking-wide text-[#727b7d]">
                            {signal}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-3 border-t border-[#eeeaf2] pt-4 md:flex-col md:items-stretch md:border-l md:border-t-0 md:pl-5 md:pt-0">
                    <button
                      type="button"
                      onClick={() => setScenarioStep((step) => Math.max(0, step - 1))}
                      disabled={scenarioStep === 0}
                      className="border border-[#e8e3eb] px-3 py-2 text-xs font-medium text-[#65707a] transition hover:border-[#b8aaca] hover:text-[#75658f] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      onClick={() => setScenarioStep((step) => Math.min(illustrativeScenario.length - 1, step + 1))}
                      disabled={scenarioStep === illustrativeScenario.length - 1}
                      className="inline-flex items-center justify-center gap-2 bg-[#c7ddd4] px-3 py-2 text-xs font-semibold text-[#24323a] transition hover:bg-[#b5d1c5] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      {scenarioStep === illustrativeScenario.length - 1 ? "End of flow" : "Next step"}
                      {scenarioStep < illustrativeScenario.length - 1 && <ArrowRight className="size-3.5" />}
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <p className="mt-4 flex items-start gap-2 text-[10px] leading-5 text-[#8b9291]">
              <ShieldAlert className="mt-0.5 size-3.5 shrink-0" />
              This walkthrough describes a proposed workflow only. It does not show real-time weather, validated risk scores, or operational instructions.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad relative overflow-hidden bg-[#fcfaf6]">
        <SectionAura side="left" />
        <div className="container-pad relative z-10">
          <ScrollReveal>
            <div className="mb-9 max-w-3xl">
              <div className="mb-4 flex items-center gap-4">
                <span aria-hidden="true" className="h-px w-14 bg-[#24323a] sm:w-20" />
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#7d7198]">
                  Research Methods
                </p>
              </div>
              <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-[#24323a] sm:text-4xl">
                Compare carefully. Explain clearly.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#65707a]">
                The landslide component combines structured data preparation, model comparison, and explainability.
                Performance results are not shown here because verified final results were not included in the project summary.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 lg:grid-cols-3">
            {researchMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <ScrollReveal key={method.title} delay={index * 0.07} className="h-full">
                  <article className="h-full rounded-2xl border border-[#d9d3df] bg-white/90 p-5 shadow-[0_8px_24px_rgba(36,50,58,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#b8aaca] hover:shadow-[0_14px_30px_rgba(125,113,152,0.09)] sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <span className={`flex size-11 items-center justify-center rounded-xl ${method.accent}`}>
                        <Icon className="size-5" />
                      </span>
                      <Sparkles className="size-4 text-[#b8aaca]" />
                    </div>
                    <p className="mt-5 font-mono text-[9px] uppercase tracking-[0.15em] text-[#7d7198]">
                      {method.eyebrow}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-semibold text-[#24323a]">{method.title}</h3>
                    <p className="mt-2 min-h-20 text-sm leading-6 text-[#65707a]">{method.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2 border-t border-[#eeeaf2] pt-4">
                      {method.methods.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#f7f4fa] px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-[#75658f]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad relative overflow-hidden bg-[#fcfaf6]">
        <div className="container-pad relative z-10">
          <ScrollReveal>
            <div className="mb-8 max-w-3xl">
                <div className="mb-4 flex items-center gap-4">
                  <span aria-hidden="true" className="h-px w-12 bg-[#24323a]" />
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#7d7198]">
                    Research Prototype
                  </p>
                </div>
                <h2 className="font-display text-2xl font-semibold text-[#24323a] sm:text-3xl">
                  Explore the research prototypes.
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#65707a]">
                  Open the prototypes to see how the ideas are presented. Both demonstrate intended interfaces and data flow;
                  they are not operational hazard systems.
                </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 lg:grid-cols-2">
            <ScrollReveal className="h-full">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="group block h-full overflow-hidden rounded-3xl border border-[#d9d3df] bg-white shadow-[0_12px_36px_rgba(36,50,58,0.045)] transition duration-300 hover:-translate-y-1 hover:border-[#b8aaca] hover:shadow-[0_18px_42px_rgba(36,50,58,0.09)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7d7198] focus-visible:ring-offset-2"
              >
                <div className="relative aspect-[16/8] overflow-hidden bg-[#e8f1ed]">
                  <Image
                    src="/project-risk-map.svg"
                    alt="Conceptual risk atlas map illustration"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-[#527c69]">
                    Prototype preview · illustrative
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4 p-5 sm:p-6">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#7d7198]">Map experience</p>
                    <h3 className="mt-1 font-display text-xl font-semibold text-[#24323a]">Risk Atlas</h3>
                    <p className="mt-2 text-sm leading-6 text-[#65707a]">
                      A demonstration map interface for exploring hazard information.
                    </p>
                  </div>
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#c7ddd4] text-[#24323a] transition group-hover:translate-x-1">
                    <ArrowUpRight className="size-5" />
                  </span>
                </div>
              </a>
            </ScrollReveal>

            <ScrollReveal delay={0.08} className="h-full">
              <a
                href="https://sri-lanka-3-d-map.vercel.app/"
                target="_blank"
                rel="noreferrer noopener"
                className="group block h-full overflow-hidden rounded-3xl border border-[#d9d3df] bg-white shadow-[0_12px_36px_rgba(36,50,58,0.045)] transition duration-300 hover:-translate-y-1 hover:border-[#b8aaca] hover:shadow-[0_18px_42px_rgba(36,50,58,0.09)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7d7198] focus-visible:ring-offset-2"
              >
                <div className="relative flex aspect-[16/8] items-center justify-center overflow-hidden bg-gradient-to-br from-[#eef4f1] via-[#f7f4fa] to-[#f8eee8] p-6">
                  <div aria-hidden="true" className="absolute inset-0 opacity-40 [background-image:radial-gradient(#9c91aa_1px,transparent_1px)] [background-size:18px_18px]" />
                  <div className="relative grid w-full max-w-md grid-cols-[1fr_auto_1fr] items-center gap-3">
                    <div className="rounded-2xl border border-[#c7ddd4] bg-white/90 p-4 text-center shadow-sm">
                      <CloudRain className="mx-auto size-5 text-sky-700" />
                      <p className="mt-2 font-mono text-[8px] uppercase tracking-wider text-[#65707a]">Hazards</p>
                    </div>
                    <ArrowRight className="size-5 text-[#9a929f]" />
                    <div className="rounded-2xl border border-[#b8aaca] bg-white/90 p-4 text-center shadow-sm">
                      <Route className="mx-auto size-5 text-[#75658f]" />
                      <p className="mt-2 font-mono text-[8px] uppercase tracking-wider text-[#65707a]">Response</p>
                    </div>
                  </div>
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-[#75658f]">
                    Interface concept · mock data
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4 p-5 sm:p-6">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#7d7198]">Integrated experience</p>
                    <h3 className="mt-1 font-display text-xl font-semibold text-[#24323a]">Response prototype</h3>
                    <p className="mt-2 text-sm leading-6 text-[#65707a]">
                      A prototype journey linking map context to decision and response interfaces.
                    </p>
                  </div>
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#f0ebf5] text-[#75658f] transition group-hover:translate-x-1">
                    <ArrowUpRight className="size-5" />
                  </span>
                </div>
              </a>
            </ScrollReveal>
          </div>
          <p className="mt-5 flex items-start gap-2 rounded-2xl border border-[#eadfd7] bg-[#fbf6f1] p-4 text-xs leading-5 text-[#8b6a53]">
            <ShieldAlert className="mt-0.5 size-4 shrink-0" />
            Prototype interfaces use illustrative/mock data. They do not provide live hazard predictions, validated risk scores, or emergency instructions; live integration and evaluation remain planned research work.
          </p>
        </div>
      </section>
    </>
  );
}
