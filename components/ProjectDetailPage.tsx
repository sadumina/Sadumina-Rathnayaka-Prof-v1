"use client";

import React, { forwardRef, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import TechText from "@/components/TechText";
import TrueFocus from "@/components/TrueFocus";
import DotField from "@/components/DotField"; // Adjust path if DotField is located elsewhere
import { ScrollReveal, SectionAura } from "@/components/ScrollReveal";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { cn } from "@/lib/utils";
import type { ProjectItem } from "@/types/portfolio";
import {
  ArrowLeft,
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

// Circle component for AnimatedBeam nodes - Light Themed
const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode; label?: string }
>(({ className, children, label }, ref) => {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div
        ref={ref}
        className={cn(
          "z-10 flex size-12 items-center justify-center rounded-full border border-[#d9d3df] bg-white p-3 text-[#24323a] shadow-[0_4px_16px_rgba(125,113,152,0.12)] transition-all duration-300 hover:scale-110 hover:border-[#7d7198] hover:text-[#7d7198]",
          className
        )}
      >
        {children}
      </div>
      {label && (
        <span className="max-w-[110px] font-mono text-[10px] uppercase tracking-wider text-[#7d7198]">
          {label}
        </span>
      )}
    </div>
  );
});

Circle.displayName = "Circle";

export function ProjectDetailPage({ project }: { project: ProjectItem }) {
  const containerRef = useRef<HTMLDivElement>(null);

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

            {project.slug === "edusense" ? (
              <div className="flex flex-col items-center justify-center pt-2">
                <div className="h-28 w-full max-w-4xl sm:h-36 lg:h-44">
                  <h1 className="sr-only">{project.title}</h1>
                  <TechText
                    text="EduSense"
                    fontWeight={600}
                    fontSize={88}
                    reveal="letter"
                    dashLength={4}
                    dashGap={2}
                    specks={15}
                    intro="none"
                    introDuration={2}
                    clickKick
                    guides={false}
                    letterSpacing={-0.05}
                    accentColor="#7d7198"
                    reach={200}
                    softness={0.7}
                    lineStyle="dashed"
                    strokeWidth={1.5}
                    speed={1}
                    bounce={0.4}
                    selection
                    labels
                    color="#24323a"
                    align="center"
                    draggable
                    sweep
                  />
                </div>
                <p className="mt-1 text-center text-sm font-semibold uppercase tracking-[0.24em] text-[#65707a]">
                  AI-powered student productivity platform
                </p>
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
                    A full-stack platform that helps students manage tasks, generate smart study schedules, summarize study materials, take AI-generated quizzes and collaborate in study groups. Built with Next.js, FastAPI and MongoDB, with Gemini and Groq powering the AI features.
                  </p>
                </motion.article>
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

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={project.demoUrl}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#e8e1f1] px-6 py-4 text-sm font-semibold text-[#24323a] transition hover:bg-[#d9d0e7]"
                    >
                      <ExternalLink size={17} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-[#cfc8dd] bg-white px-6 py-4 text-sm font-semibold text-[#24323a] transition hover:border-[#9b90b6] hover:bg-[#f7f4fa]"
                    >
                      <Github size={17} />
                      GitHub
                    </a>
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

        {/* System Component Architecture Visualizer Section — EduSense only */}
        {project.slug === "edusense" && (
        <section id="architecture" className="section-pad relative overflow-hidden bg-[#fcfaf6]">
          <SectionAura side="left" />

          {/* Dotted Background Field */}
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
                    sentence="System Component Architecture"
                    manualMode={false}
                    focusStyle="brackets"
                    easing="smooth"
                    order="sequential"
                    blurAmount={5}
                    focusScale={1}
                    unfocusedOpacity={1}
                    borderColor="#5227FF"
                    cornerSize={16}
                    borderWidth={3}
                    animationDuration={0.5}
                    pauseBetweenAnimations={1}
                    highlightColor="#5227FF"
                  />
                </h2>
                
              </div>
            </ScrollReveal>

            {/* Light-Themed Animated Beam Network */}
            <ScrollReveal>
              <div
                ref={containerRef}
                className="relative flex w-full items-center justify-center overflow-hidden rounded-2xl border border-[#d9d3df] bg-white/80 backdrop-blur-md p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] md:p-12"
              >
                <div className="flex size-full max-w-5xl flex-col items-center justify-center gap-10 md:flex-row md:justify-between">
                  {/* Left Column — 5 Nodes */}
                  <div className="flex flex-row flex-wrap justify-center gap-4 md:flex-col md:items-center md:gap-5">
                    <Circle ref={taskRef} label="Tasks">
                      <CheckSquare className="size-5" />
                    </Circle>
                    <Circle ref={scheduleRef} label="Schedules">
                      <Calendar className="size-5" />
                    </Circle>
                    <Circle ref={materialRef} label="Materials">
                      <FileText className="size-5" />
                    </Circle>
                    <Circle ref={assistantRef} label="Assistant">
                      <Bot className="size-5" />
                    </Circle>
                    <Circle ref={searchRef} label="Search">
                      <Search className="size-5" />
                    </Circle>
                  </div>

                  {/* Central Architecture Hub */}
                  <div className="my-4 flex flex-col items-center md:my-0">
                    <Circle
                      ref={centerCoreRef}
                      className="size-20 border-[#7d7198]/40 bg-[#f7f4fa] text-[#7d7198] shadow-[0_0_30px_rgba(125,113,152,0.25)]"
                      label="EduSense Core"
                    >
                      <Cpu className="size-8 animate-pulse text-[#7d7198]" />
                    </Circle>
                  </div>

                  {/* Right Column — 5 Nodes */}
                  <div className="flex flex-row flex-wrap justify-center gap-4 md:flex-col md:items-center md:gap-5">
                    <Circle ref={quizRef} label="Quizzes">
                      <HelpCircle className="size-5" />
                    </Circle>
                    <Circle ref={analyticsRef} label="Analytics">
                      <TrendingUp className="size-5" />
                    </Circle>
                    <Circle ref={groupRef} label="Groups">
                      <Users className="size-5" />
                    </Circle>
                    <Circle ref={authRef} label="Auth">
                      <ShieldCheck className="size-5" />
                    </Circle>
                    <Circle ref={notifRef} label="Notifications">
                      <Bell className="size-5" />
                    </Circle>
                  </div>
                </div>

                {/* Curved Animated Beams — Left to Core */}
                <AnimatedBeam duration={3} curvature={75} pathColor="#c4b8d6" pathOpacity={0.35} pathWidth={2} gradientStartColor="#7d7198" gradientStopColor="#a855f7" containerRef={containerRef} fromRef={taskRef} toRef={centerCoreRef} />
                <AnimatedBeam duration={3.4} curvature={40} pathColor="#c4b8d6" pathOpacity={0.35} pathWidth={2} gradientStartColor="#7d7198" gradientStopColor="#a855f7" containerRef={containerRef} fromRef={scheduleRef} toRef={centerCoreRef} />
                <AnimatedBeam duration={3.8} curvature={0} pathColor="#c4b8d6" pathOpacity={0.35} pathWidth={2} gradientStartColor="#7d7198" gradientStopColor="#a855f7" containerRef={containerRef} fromRef={materialRef} toRef={centerCoreRef} />
                <AnimatedBeam duration={3.2} curvature={-40} pathColor="#c4b8d6" pathOpacity={0.35} pathWidth={2} gradientStartColor="#7d7198" gradientStopColor="#a855f7" containerRef={containerRef} fromRef={assistantRef} toRef={centerCoreRef} />
                <AnimatedBeam duration={4.2} curvature={-75} pathColor="#c4b8d6" pathOpacity={0.35} pathWidth={2} gradientStartColor="#7d7198" gradientStopColor="#a855f7" containerRef={containerRef} fromRef={searchRef} toRef={centerCoreRef} />

                {/* Curved Animated Beams — Core to Right */}
                <AnimatedBeam duration={3.6} curvature={75} pathColor="#c4b8d6" pathOpacity={0.35} pathWidth={2} gradientStartColor="#7d7198" gradientStopColor="#a855f7" containerRef={containerRef} fromRef={centerCoreRef} toRef={quizRef} />
                <AnimatedBeam duration={4} curvature={40} pathColor="#c4b8d6" pathOpacity={0.35} pathWidth={2} gradientStartColor="#7d7198" gradientStopColor="#a855f7" containerRef={containerRef} fromRef={centerCoreRef} toRef={analyticsRef} />
                <AnimatedBeam duration={3.3} curvature={0} pathColor="#c4b8d6" pathOpacity={0.35} pathWidth={2} gradientStartColor="#7d7198" gradientStopColor="#a855f7" containerRef={containerRef} fromRef={centerCoreRef} toRef={groupRef} />
                <AnimatedBeam duration={3.7} curvature={-40} pathColor="#c4b8d6" pathOpacity={0.35} pathWidth={2} gradientStartColor="#7d7198" gradientStopColor="#a855f7" containerRef={containerRef} fromRef={centerCoreRef} toRef={authRef} />
                <AnimatedBeam duration={4.4} curvature={-75} pathColor="#c4b8d6" pathOpacity={0.35} pathWidth={2} gradientStartColor="#7d7198" gradientStopColor="#a855f7" containerRef={containerRef} fromRef={centerCoreRef} toRef={notifRef} />
              </div>
            </ScrollReveal>
          </div>
        </section>
        )}

        {/* Back to Projects CTA */}
        <section className="section-pad">
          <div className="container-pad">
            <div className="flex flex-col gap-6 rounded-2xl border border-[#d9d3df] bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#7d7198]">
                  Next Project
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-[#24323a]">
                  Explore more selected work.
                </h2>
              </div>
              <Link
                href="/#projects"
                className="inline-flex items-center justify-center rounded-full bg-[#e8e1f1] px-6 py-4 text-sm font-semibold text-[#24323a] transition hover:bg-[#d9d0e7]"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SmoothScrollProvider>
  );
}