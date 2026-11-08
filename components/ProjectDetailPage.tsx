"use client";

import React, { forwardRef, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import TechText from "@/components/TechText";
import DecryptedText from "@/components/DecryptedText";
import TrueFocus from "@/components/TrueFocus";
import DotField from "@/components/DotField";
import { ScrollReveal, SectionAura } from "@/components/ScrollReveal";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { EduSenseBentoStack } from "@/components/EduSenseBentoStack";
import { EduSenseImpactChallenges } from "@/components/EduSenseImpactChallenges";
import { CarbonXInsightGraph } from "@/components/CarbonXInsightGraph";
import { CarbonXBentoStack } from "@/components/CarbonXBentoStack";
import { CarbonXImpactChallenges } from "@/components/CarbonXImpactChallenges";
import { CarbonXInsightDashboard } from "@/components/CarbonXInsightDashboard";
import { cn } from "@/lib/utils";
import type { ProjectItem } from "@/types/portfolio";
import { projects } from "@/lib/data";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  CheckSquare,
  Calendar,
  FileText,
  Bot,
  HelpCircle,
  TrendingUp,
  Users,
  ShieldCheck,
  Search,
  Cpu,
  Bell,
} from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

// Circle component for AnimatedBeam nodes - Light Themed with vibrant support
const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; label?: string; labelClassName?: string }
>(({ className, children, label, labelClassName }, ref) => {
  return (
    <div className="group flex flex-col items-center gap-2 text-center">
      <div
        ref={ref}
        className={cn(
          "z-10 flex size-12 items-center justify-center rounded-full border border-[#d9d3df] bg-white p-3 text-[#24323a] shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300 hover:scale-110",
          className
        )}
      >
        {children}
      </div>
      {label && (
        <span
          className={cn(
            "max-w-[110px] font-mono text-[10px] uppercase tracking-wider text-[#7d7198] transition-colors duration-200 group-hover:text-[#24323a]",
            labelClassName
          )}
        >
          {label}
        </span>
      )}
    </div>
  );
});

Circle.displayName = "Circle";

export function ProjectDetailPage({ project }: { project: ProjectItem }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  // AnimatedBeam node references
  const centerCoreRef = useRef<HTMLDivElement>(null);
  const taskRef = useRef<HTMLDivElement>(null);
  const scheduleRef = useRef<HTMLDivElement>(null);
  const materialRef = useRef<HTMLDivElement>(null);
  const assistantRef = useRef<HTMLDivElement>(null);
  const quizRef = useRef<HTMLDivElement>(null);
  const analyticsRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const authRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);

  return (
    <SmoothScrollProvider>
      <ScrollProgress />
      <Navbar />
      <main className="min-h-screen overflow-hidden bg-[#fcfaf6] pt-28 text-[#24323a]">
        {/* Header Hero Section */}
        <section className="relative pb-16 pt-10">
          <div className="container-pad relative z-10">
            <Link
              href="/#projects"
              className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-[#65707a] transition hover:text-[#24323a]"
            >
              <ArrowLeft size={17} />
              Back to Projects
            </Link>

            {project.slug === "edusense" || project.slug === "carbonxinsight" ? (
              <div className="flex flex-col items-center justify-center pt-2 text-center">
                {/* Category & Status Pill */}
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d9d3df] bg-white/90 px-3.5 py-1 shadow-sm backdrop-blur-sm"
                >
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-[#7d7198]">
                    {project.category} · Case Study
                  </span>
                </motion.div>

                {/* Formal Decrypted Title */}
                <h1 className="font-display text-5xl font-bold tracking-[-0.04em] text-[#24323a] sm:text-7xl lg:text-8xl">
                  <DecryptedText
                    text={project.title}
                    speed={60}
                    maxIterations={10}
                    sequential={true}
                    animateOn="view"
                    parentClassName="inline-block"
                    className="text-[#24323a]"
                    encryptedClassName="text-[#7d7198] opacity-75"
                  />
                </h1>

                {/* Subtitle with subtle accent rules */}
                <div className="mt-3 flex items-center justify-center gap-3">
                  <span className="h-px w-8 bg-[#7d7198]/40 sm:w-12" />
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.26em] text-[#65707a]">
                    {project.slug === "carbonxinsight"
                      ? "Coconut shell charcoal market price analytics"
                      : "AI-powered student productivity platform"}
                  </p>
                  <span className="h-px w-8 bg-[#7d7198]/40 sm:w-12" />
                </div>

                {/* Formal Quick-Specs Strip */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="mt-6 flex flex-wrap items-center justify-center divide-y divide-[#d9d3df] rounded-xl border border-[#d9d3df] bg-white/80 shadow-[0_4px_16px_rgba(36,50,58,0.04)] backdrop-blur-sm sm:divide-x sm:divide-y-0"
                >
                  <div className="px-4 py-2 text-center">
                    <p className="font-mono text-[9px] font-semibold uppercase tracking-wider text-[#7d7198]">Role</p>
                    <p className="text-xs font-semibold text-[#24323a]">
                      {project.slug === "carbonxinsight" ? "Software Engineering Intern" : "Full-Stack & AI"}
                    </p>
                  </div>
                  <div className="px-4 py-2 text-center">
                    <p className="font-mono text-[9px] font-semibold uppercase tracking-wider text-[#7d7198]">Core Stack</p>
                    <p className="text-xs font-semibold text-[#24323a]">
                      {project.slug === "carbonxinsight" ? "FastAPI · React 19 · MongoDB" : "Next.js 16 · FastAPI · MongoDB"}
                    </p>
                  </div>
                  <div className="px-4 py-2 text-center">
                    <p className="font-mono text-[9px] font-semibold uppercase tracking-wider text-[#7d7198]">
                      {project.slug === "carbonxinsight" ? "Analytics Engine" : "AI Pipeline"}
                    </p>
                    <p className="text-xs font-semibold text-[#24323a]">
                      {project.slug === "carbonxinsight" ? "Highstock · pdfplumber" : "Gemini + Groq LPU"}
                    </p>
                  </div>
                  <div className="px-4 py-2 text-center">
                    <p className="font-mono text-[9px] font-semibold uppercase tracking-wider text-[#7d7198]">
                      {project.slug === "carbonxinsight" ? "Client" : "Status"}
                    </p>
                    <p className="text-xs font-semibold text-emerald-600">
                      {project.slug === "carbonxinsight" ? "Haycarb PLC" : "Production Ready"}
                    </p>
                  </div>
                </motion.div>

                {/* Introduction Article */}
                <motion.article
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -5 }}
                  className="relative mt-10 w-full max-w-3xl overflow-hidden rounded-2xl border border-[#d9d3df] bg-[#f7f4fa] p-6 text-left shadow-[8px_8px_0_rgba(70,58,86,0.07)] transition-shadow duration-300 hover:shadow-[12px_12px_0_rgba(70,58,86,0.1)] sm:p-8"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-[#c7ddd4]" />
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7d7198]">
                    Introduction
                  </p>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[#65707a] sm:text-base sm:leading-8">
                    {project.description}
                  </p>
                </motion.article>

                {/* Actions: GitHub Repo & Quick Links */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="mt-8 flex flex-wrap items-center justify-center gap-4"
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 bg-[#c7ddd4] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#24323a] shadow-sm transition-all duration-200 hover:bg-[#b5d1c5]"
                  >
                    <Github size={15} />
                    <span>GitHub Repository</span>
                    <ExternalLink size={13} className="opacity-70" />
                  </a>
                  <a
                    href="#architecture"
                    className="inline-flex items-center justify-center gap-2 border border-[#7d7198]/40 bg-white px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7d7198] transition-all duration-200 hover:border-[#24323a] hover:text-[#24323a]"
                  >
                    <Cpu size={15} />
                    <span>Architecture</span>
                  </a>
                </motion.div>
              </div>
            ) : (
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                <div>
                  <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-[#7d7198]">
                    {project.category}
                  </p>
                  <h1 className="font-display text-4xl font-semibold tracking-[-0.045em] text-[#24323a] sm:text-6xl">
                    {project.title}
                  </h1>
                  <p className="mt-6 max-w-2xl text-base leading-8 text-[#65707a]">
                    {project.description}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 bg-[#c7ddd4] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#24323a] shadow-sm transition hover:bg-[#b5d1c5]"
                    >
                      <Github size={16} />
                      <span>View GitHub Repository</span>
                      <ExternalLink size={13} className="opacity-70" />
                    </a>
                    {project.demoUrl && project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 border border-[#7d7198]/40 bg-white px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#7d7198] transition hover:border-[#24323a] hover:text-[#24323a]"
                      >
                        <ExternalLink size={15} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-[#d9d3df] bg-white p-5 shadow-[10px_10px_0_rgba(70,58,86,0.08)]">
                  <div className="absolute right-0 top-0 h-48 w-48 translate-x-12 -translate-y-12 rounded-full bg-[#e8e1f1] blur-3xl" />
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-[#d9d3df] bg-[#f7f4fa]">
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(232,225,241,0.72),transparent_42%),radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.9),transparent_18%)]" />
                    <div className="absolute inset-x-6 top-6 flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-[#c7ddd4]" />
                      <span className="h-3 w-3 rounded-full bg-[#d9d3df]" />
                      <span className="h-3 w-3 rounded-full bg-[#e8e1f1]" />
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#7d7198]">
                        Case Study Preview
                      </p>
                      <p className="mt-3 font-display text-2xl font-semibold text-[#24323a]">
                        {project.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* System Component Architecture Visualizer Section — EduSense & CarbonXInsight */}
        {(project.slug === "edusense" || project.slug === "carbonxinsight") && (
          <section id="architecture" className="section-pad relative overflow-hidden bg-[#fcfaf6]">
            <SectionAura side="left" />

            {/* Dotted Background Field ONLY for EduSense */}
            {project.slug === "edusense" && (
              <div aria-hidden="true" className="absolute inset-0 z-0 opacity-70">
                <div className="h-full w-full relative">
                  <DotField
                    gradientFrom="#5227FF"
                    gradientTo="#FF9FFC"
                    dotRadius={1.5}
                    dotSpacing={14}
                    cursorRadius={240}
                    bulgeStrength={0.6}
                    glowRadius={160}
                    pattern="grid"
                    glowColor="#ffffff"
                    gradientAngle={135}
                    twist={0}
                    glowIntensity={0.8}
                    baseOpacity={0.55}
                    waveAmplitude={0}
                    speed={1}
                    sparkle={false}
                    interactive
                    holdToZoom
                    intro
                    lightMode={true}
                  />
                </div>
              </div>
            )}

            <div className="container-pad relative z-10">
              {/* Header */}
              <ScrollReveal>
                <div className="mb-6">
                  <div className="mb-3 flex items-center gap-4">
                    <span aria-hidden="true" className="h-px w-14 bg-[#24323a] sm:w-20" />
                    <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#7d7198]">
                      Architecture Overview
                    </p>
                  </div>
                  <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-[#24323a] sm:text-4xl md:text-5xl">
                    <TrueFocus
                      sentence={project.slug === "carbonxinsight" ? "Market Analytics Architecture" : "System Component Architecture"}
                      manualMode={false}
                      focusStyle="brackets"
                      easing="smooth"
                      order="sequential"
                      blurAmount={5}
                      focusScale={1}
                      unfocusedOpacity={1}
                      borderColor={project.slug === "carbonxinsight" ? "#10b981" : "#5227FF"}
                      cornerSize={16}
                      borderWidth={3}
                      animationDuration={0.5}
                      pauseBetweenAnimations={1}
                      highlightColor={project.slug === "carbonxinsight" ? "#10b981" : "#5227FF"}
                    />
                  </h2>
                </div>
              </ScrollReveal>

              {/* Visualizer: Animated Beam Network ONLY for EduSense */}
              {project.slug === "edusense" && (
                <ScrollReveal>
                  <div
                    ref={containerRef}
                    className="relative flex w-full items-center justify-center overflow-hidden rounded-2xl border border-[#d9d3df] bg-white/80 backdrop-blur-md p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] md:p-12"
                  >
                    <div className="flex size-full max-w-5xl flex-col items-center justify-center gap-10 md:flex-row md:justify-between">
                      {/* Left Column — 5 Nodes */}
                      <div className="flex flex-row flex-wrap justify-center gap-4 md:flex-col md:items-center md:gap-5">
                        <Circle
                          ref={taskRef}
                          label="Tasks"
                          labelClassName="text-emerald-700/80 group-hover:text-emerald-700 font-semibold"
                          className="border-emerald-200 bg-emerald-50 text-emerald-600 shadow-[0_4px_16px_rgba(16,185,129,0.18)] hover:border-emerald-400 hover:bg-emerald-100 hover:shadow-[0_6px_20px_rgba(16,185,129,0.28)]"
                        >
                          <CheckSquare className="size-5" />
                        </Circle>
                        <Circle
                          ref={scheduleRef}
                          label="Schedules"
                          labelClassName="text-sky-700/80 group-hover:text-sky-700 font-semibold"
                          className="border-sky-200 bg-sky-50 text-sky-600 shadow-[0_4px_16px_rgba(14,165,233,0.18)] hover:border-sky-400 hover:bg-sky-100 hover:shadow-[0_6px_20px_rgba(14,165,233,0.28)]"
                        >
                          <Calendar className="size-5" />
                        </Circle>
                        <Circle
                          ref={materialRef}
                          label="Materials"
                          labelClassName="text-amber-700/80 group-hover:text-amber-700 font-semibold"
                          className="border-amber-200 bg-amber-50 text-amber-600 shadow-[0_4px_16px_rgba(245,158,11,0.18)] hover:border-amber-400 hover:bg-amber-100 hover:shadow-[0_6px_20px_rgba(245,158,11,0.28)]"
                        >
                          <FileText className="size-5" />
                        </Circle>
                        <Circle
                          ref={assistantRef}
                          label="Assistant"
                          labelClassName="text-indigo-700/80 group-hover:text-indigo-700 font-semibold"
                          className="border-indigo-200 bg-indigo-50 text-indigo-600 shadow-[0_4px_16px_rgba(99,102,241,0.18)] hover:border-indigo-400 hover:bg-indigo-100 hover:shadow-[0_6px_20px_rgba(99,102,241,0.28)]"
                        >
                          <Bot className="size-5" />
                        </Circle>
                        <Circle
                          ref={searchRef}
                          label="Search"
                          labelClassName="text-teal-700/80 group-hover:text-teal-700 font-semibold"
                          className="border-teal-200 bg-teal-50 text-teal-600 shadow-[0_4px_16px_rgba(20,184,166,0.18)] hover:border-teal-400 hover:bg-teal-100 hover:shadow-[0_6px_20px_rgba(20,184,166,0.28)]"
                        >
                          <Search className="size-5" />
                        </Circle>
                      </div>

                      {/* Central Architecture Hub */}
                      <div className="my-4 flex flex-col items-center md:my-0">
                        <Circle
                          ref={centerCoreRef}
                          className="size-20 border-violet-300 bg-gradient-to-tr from-violet-100 via-purple-50 to-pink-50 text-violet-600 shadow-[0_0_35px_rgba(139,92,246,0.35)] hover:border-violet-400 hover:shadow-[0_0_45px_rgba(139,92,246,0.5)]"
                          label="EduSense Core"
                          labelClassName="font-semibold text-violet-700"
                        >
                          <Cpu className="size-8 animate-pulse text-violet-600" />
                        </Circle>
                      </div>

                      {/* Right Column — 5 Nodes */}
                      <div className="flex flex-row flex-wrap justify-center gap-4 md:flex-col md:items-center md:gap-5">
                        <Circle
                          ref={quizRef}
                          label="Quizzes"
                          labelClassName="text-rose-700/80 group-hover:text-rose-700 font-semibold"
                          className="border-rose-200 bg-rose-50 text-rose-600 shadow-[0_4px_16px_rgba(244,63,94,0.18)] hover:border-rose-400 hover:bg-rose-100 hover:shadow-[0_6px_20px_rgba(244,63,94,0.28)]"
                        >
                          <HelpCircle className="size-5" />
                        </Circle>
                        <Circle
                          ref={analyticsRef}
                          label="Analytics"
                          labelClassName="text-blue-700/80 group-hover:text-blue-700 font-semibold"
                          className="border-blue-200 bg-blue-50 text-blue-600 shadow-[0_4px_16px_rgba(59,130,246,0.18)] hover:border-blue-400 hover:bg-blue-100 hover:shadow-[0_6px_20px_rgba(59,130,246,0.28)]"
                        >
                          <TrendingUp className="size-5" />
                        </Circle>
                        <Circle
                          ref={groupRef}
                          label="Groups"
                          labelClassName="text-purple-700/80 group-hover:text-purple-700 font-semibold"
                          className="border-purple-200 bg-purple-50 text-purple-600 shadow-[0_4px_16px_rgba(168,85,247,0.18)] hover:border-purple-400 hover:bg-purple-100 hover:shadow-[0_6px_20px_rgba(168,85,247,0.28)]"
                        >
                          <Users className="size-5" />
                        </Circle>
                        <Circle
                          ref={authRef}
                          label="Auth"
                          labelClassName="text-emerald-700/80 group-hover:text-emerald-700 font-semibold"
                          className="border-emerald-200 bg-emerald-50 text-emerald-600 shadow-[0_4px_16px_rgba(16,185,129,0.18)] hover:border-emerald-400 hover:bg-emerald-100 hover:shadow-[0_6px_20px_rgba(16,185,129,0.28)]"
                        >
                          <ShieldCheck className="size-5" />
                        </Circle>
                        <Circle
                          ref={notifRef}
                          label="Notifications"
                          labelClassName="text-orange-700/80 group-hover:text-orange-700 font-semibold"
                          className="border-orange-200 bg-orange-50 text-orange-600 shadow-[0_4px_16px_rgba(249,115,22,0.18)] hover:border-orange-400 hover:bg-orange-100 hover:shadow-[0_6px_20px_rgba(249,115,22,0.28)]"
                        >
                          <Bell className="size-5" />
                        </Circle>
                      </div>
                    </div>

                    {/* Colorful Curved Animated Beams — Left to Core */}
                    <AnimatedBeam duration={3} curvature={75} pathColor="#6ee7b7" pathOpacity={0.45} pathWidth={2} gradientStartColor="#10b981" gradientStopColor="#059669" containerRef={containerRef} fromRef={taskRef} toRef={centerCoreRef} />
                    <AnimatedBeam duration={3.4} curvature={40} pathColor="#7dd3fc" pathOpacity={0.45} pathWidth={2} gradientStartColor="#0284c7" gradientStopColor="#38bdf8" containerRef={containerRef} fromRef={scheduleRef} toRef={centerCoreRef} />
                    <AnimatedBeam duration={3.8} curvature={0} pathColor="#fcd34d" pathOpacity={0.45} pathWidth={2} gradientStartColor="#f59e0b" gradientStopColor="#fbbf24" containerRef={containerRef} fromRef={materialRef} toRef={centerCoreRef} />
                    <AnimatedBeam duration={3.2} curvature={-40} pathColor="#a5b4fc" pathOpacity={0.45} pathWidth={2} gradientStartColor="#6366f1" gradientStopColor="#818cf8" containerRef={containerRef} fromRef={assistantRef} toRef={centerCoreRef} />
                    <AnimatedBeam duration={4.2} curvature={-75} pathColor="#5eead4" pathOpacity={0.45} pathWidth={2} gradientStartColor="#0d9488" gradientStopColor="#2dd4bf" containerRef={containerRef} fromRef={searchRef} toRef={centerCoreRef} />

                    {/* Colorful Curved Animated Beams — Core to Right */}
                    <AnimatedBeam duration={3.6} curvature={75} pathColor="#fda4af" pathOpacity={0.45} pathWidth={2} gradientStartColor="#f43f5e" gradientStopColor="#fb7185" containerRef={containerRef} fromRef={centerCoreRef} toRef={quizRef} />
                    <AnimatedBeam duration={4} curvature={40} pathColor="#93c5fd" pathOpacity={0.45} pathWidth={2} gradientStartColor="#2563eb" gradientStopColor="#60a5fa" containerRef={containerRef} fromRef={centerCoreRef} toRef={analyticsRef} />
                    <AnimatedBeam duration={3.3} curvature={0} pathColor="#d8b4fe" pathOpacity={0.45} pathWidth={2} gradientStartColor="#9333ea" gradientStopColor="#c084fc" containerRef={containerRef} fromRef={centerCoreRef} toRef={groupRef} />
                    <AnimatedBeam duration={3.7} curvature={-40} pathColor="#86efac" pathOpacity={0.45} pathWidth={2} gradientStartColor="#16a34a" gradientStopColor="#4ade80" containerRef={containerRef} fromRef={centerCoreRef} toRef={authRef} />
                    <AnimatedBeam duration={4.4} curvature={-75} pathColor="#fdba74" pathOpacity={0.45} pathWidth={2} gradientStartColor="#ea580c" gradientStopColor="#fb923c" containerRef={containerRef} fromRef={centerCoreRef} toRef={notifRef} />
                  </div>
                </ScrollReveal>
              )}

              {/* Spotlight Bento Grid Architecture Breakdown */}
              <ScrollReveal>
                <EduSenseBentoStack />
              </ScrollReveal>
            </div>
          </section>
        )}

        {/* Impact Metrics & Engineering Challenges — EduSense Only */}
        {project.slug === "edusense" && <EduSenseImpactChallenges />}

        {/* CarbonXInsight Section — Market Analytics Graph & Ingestion */}
        {project.slug === "carbonxinsight" && (
          <section id="analytics" className="section-pad relative overflow-hidden bg-[#fcfaf6] pt-6 pb-12">
            <div className="container-pad relative z-10">
              <ScrollReveal>
                <CarbonXInsightDashboard />
              </ScrollReveal>
            </div>
          </section>
        )}

        {/* Dynamic Next Project Feature Card */}
        <section className="section-pad pt-4 pb-20">
          <div className="container-pad">
            <div className="group relative overflow-hidden rounded-2xl border border-[#d9d3df] bg-white/90 p-8 shadow-[0_12px_36px_rgba(36,50,58,0.06)] backdrop-blur-sm transition-all duration-300 hover:border-[#7d7198] hover:shadow-[0_20px_48px_rgba(125,113,152,0.14)] md:p-10">
              <div className="absolute right-0 top-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-[#c7ddd4]/40 blur-3xl transition-opacity duration-300 group-hover:opacity-80" />

              <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
                <div className="max-w-2xl">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="h-px w-8 bg-[#7d7198]" />
                    <p className="font-mono text-[11px] font-bold uppercase tracking-[0.26em] text-[#7d7198]">
                      Up Next in Portfolio · {nextProject.category}
                    </p>
                  </div>

                  <Link href={`/projects/${nextProject.slug}`} className="group/title inline-block">
                    <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-[#24323a] transition-colors group-hover/title:text-[#7d7198] sm:text-4xl md:text-5xl">
                      {nextProject.title}
                      <span className="ml-3 inline-block transition-transform duration-300 group-hover/title:translate-x-2">
                        →
                      </span>
                    </h2>
                  </Link>

                  <p className="mt-4 text-sm leading-7 text-[#65707a] sm:text-base">
                    {nextProject.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {nextProject.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-[#d9d3df] bg-[#f7f4fa] px-2.5 py-1 font-mono text-[11px] text-[#65707a]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
                  <Link
                    href={`/projects/${nextProject.slug}`}
                    className="inline-flex items-center justify-center gap-2.5 bg-[#c7ddd4] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#24323a] shadow-sm transition-all duration-200 hover:bg-[#b5d1c5]"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    href="/#projects"
                    className="inline-flex items-center justify-center gap-2 border border-[#7d7198]/40 bg-white px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#7d7198] transition-all duration-200 hover:border-[#24323a] hover:text-[#24323a]"
                  >
                    <span>All Projects</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SmoothScrollProvider>
  );
}