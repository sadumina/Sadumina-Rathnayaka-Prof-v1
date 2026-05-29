"use client";

import { useMouseParallax } from "@/hooks/useMouseParallax";
import { stats } from "@/lib/data";
import {
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, Bot, Code2, Download, Eye, Server, Sparkles } from "lucide-react";
import { MouseEvent, ReactNode, useEffect, useRef, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function MagneticLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18 });
  const springY = useSpring(y, { stiffness: 220, damping: 18 });

  const onMouseMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;

    x.set((event.clientX - bounds.left - bounds.width / 2) * 0.22);
    y.set((event.clientY - bounds.top - bounds.height / 2) * 0.32);
  };

  const baseClass =
    "group relative inline-flex min-h-[52px] w-full items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-4 text-sm font-semibold transition sm:w-auto";
  const variantClass =
    variant === "primary"
      ? "bg-white text-black hover:bg-purple-100"
      : "border border-white/[0.14] bg-white/[0.045] text-white hover:border-purple-200/60 hover:bg-purple-300/10";

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClass} ${variantClass}`}
    >
      <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-purple-200/35 to-transparent transition duration-700 group-hover:translate-x-[120%]" />
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </motion.a>
  );
}

function CountUpStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const numericValue = Number.parseInt(value, 10);
  const suffix = value.replace(String(numericValue), "");
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView || Number.isNaN(numericValue)) return;

    let frame = 0;
    const duration = 950;
    const startedAt = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(eased * numericValue));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, numericValue]);

  return (
    <div ref={ref} className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4 sm:border-y-0 sm:border-r-0 sm:border-l sm:bg-transparent sm:py-0 sm:pl-4">
      <div className="font-display text-2xl font-semibold leading-none text-white">
        {displayValue}
        {suffix}
      </div>
      <div className="mt-2 text-[10px] uppercase leading-4 tracking-[0.16em] text-white/[0.45] sm:text-xs">
        {label}
      </div>
    </div>
  );
}

const floatingBadges = [
  { label: "Next.js", icon: Code2, className: "-left-5 top-[12%]" },
  { label: "FastAPI", icon: Server, className: "-right-4 top-[24%]" },
  { label: "AI Systems", icon: Bot, className: "-left-7 bottom-[28%]" },
  { label: "Cloud", icon: Sparkles, className: "right-2 bottom-[10%]" },
];

function FloatingTechBadges() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-30 hidden lg:block">
      {floatingBadges.map((badge, index) => {
        const Icon = badge.icon;

        return (
          <motion.div
            key={badge.label}
            className={`absolute ${badge.className} inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/45 px-3 py-2 text-xs font-semibold text-white/78 shadow-neon backdrop-blur-xl`}
            initial={{ opacity: 0, y: 18, scale: 0.9 }}
            animate={{ opacity: 1, y: [0, -8, 0], scale: 1 }}
            transition={{
              opacity: { duration: 0.5, delay: 0.85 + index * 0.12 },
              scale: { duration: 0.5, delay: 0.85 + index * 0.12 },
              y: {
                duration: 4.8 + index * 0.4,
                delay: 1 + index * 0.15,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-purple-200/10 text-purple-100">
              <Icon size={14} />
            </span>
            {badge.label}
          </motion.div>
        );
      })}
    </div>
  );
}

function FrameCorners() {
  const cornerClass = "absolute h-8 w-8 border-purple-200/55 sm:h-10 sm:w-10";

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-4 z-30">
      <span className={`${cornerClass} left-0 top-0 border-l border-t`} />
      <span className={`${cornerClass} right-0 top-0 border-r border-t`} />
      <span className={`${cornerClass} bottom-0 left-0 border-b border-l`} />
      <span className={`${cornerClass} bottom-0 right-0 border-b border-r`} />
      <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/45 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-purple-100/70 backdrop-blur sm:left-5 sm:top-5 sm:px-3 sm:text-[10px]">
        System Active
      </div>
      <div className="absolute bottom-5 right-5 hidden rounded-full border border-white/10 bg-black/45 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.24em] text-white/50 backdrop-blur sm:block">
        Build Mode
      </div>
    </div>
  );
}

export function HeroSection() {
  const rootRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const spotlightX = useMotionValue(-420);
  const spotlightY = useMotionValue(-420);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);

  const { x, y } = useMouseParallax(34);
  const smoothRotateX = useSpring(rotateX, { stiffness: 110, damping: 18 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 110, damping: 18 });
  const smoothGlowX = useSpring(glowX, { stiffness: 90, damping: 24 });
  const smoothGlowY = useSpring(glowY, { stiffness: 90, damping: 24 });
  const spotlightLeft = useSpring(spotlightX, { stiffness: 70, damping: 24 });
  const spotlightTop = useSpring(spotlightY, { stiffness: 70, damping: 24 });
  const backgroundX = useTransform(x, [-17, 17], [-8, 8]);
  const glowLeft = useTransform(smoothGlowX, (value) => `${value}%`);
  const glowTop = useTransform(smoothGlowY, (value) => `${value}%`);

  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.35]);

  const onHeroMouseMove = (event: MouseEvent<HTMLElement>) => {
    const bounds = rootRef.current?.getBoundingClientRect();
    if (!bounds) return;

    spotlightX.set(event.clientX - bounds.left - 240);
    spotlightY.set(event.clientY - bounds.top - 240);
  };

  const onVideoMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;

    rotateY.set(horizontal * 10);
    rotateX.set(vertical * -8);
    glowX.set((horizontal + 0.5) * 100);
    glowY.set((vertical + 0.5) * 100);
  };

  useEffect(() => {
    if (!videoRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.to(videoRef.current, {
        rotate: 3,
        yPercent: 7,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, rootRef);

    return () => context.revert();
  }, []);

  return (
    <section
      id="home"
      ref={rootRef}
      onMouseMove={onHeroMouseMove}
      className="relative flex min-h-screen overflow-hidden pt-24 sm:pt-28"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute z-[1] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.16),rgba(255,255,255,0.04)_34%,transparent_68%)] blur-sm sm:h-[480px] sm:w-[480px]"
        style={{ x: spotlightLeft, y: spotlightTop }}
      />

      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 top-28 z-0 select-none text-center font-display text-[26vw] font-bold uppercase leading-none text-white/[0.045] sm:top-24 sm:text-[20vw] sm:text-white/[0.055] lg:text-[18vw]"
        style={{ x: backgroundX, y: backgroundY }}
      >
        ENGINEER
      </motion.div>

      <div aria-hidden="true" className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_68%_45%,rgba(168,85,247,0.22),transparent_34%),radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.09),transparent_30%)]" />
      <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 z-0 h-44 bg-gradient-to-t from-void to-transparent" />

      <div className="container-pad relative z-10 grid min-h-[calc(100vh-6rem)] items-center gap-10 py-8 sm:py-12 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12, delayChildren: 0.15 }}
          className="max-w-3xl text-center sm:text-left"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-[10px] font-bold uppercase leading-5 tracking-[0.26em] text-purple-200/[0.85] sm:mb-5 sm:text-xs sm:tracking-[0.34em]"
          >
            SOFTWARE ENGINEER &bull; FULL STACK DEVELOPER
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex max-w-full items-center gap-3 rounded-full border border-white/10 bg-white/[0.045] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/70 backdrop-blur sm:px-4 sm:text-xs sm:tracking-[0.18em]"
          >
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-300 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-purple-200" />
            </span>
            <span className="leading-5">Available for internships / full-time roles</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-balance font-display text-[clamp(2.35rem,12vw,4.25rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl"
          >
            {[
              "Turning Complex Ideas",
              "into Intelligent Software",
              "that Businesses Can Trust.",
            ].map((line, index) => (
              <span key={line} className={index === 1 ? "block overflow-hidden text-purple-100" : "block overflow-hidden"}>
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.25 + index * 0.12 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/[0.65] sm:mx-0 sm:mt-7 sm:text-lg sm:leading-8"
          >
            I craft reliable full stack products, AI-enabled workflows, and enterprise dashboards using FastAPI, Next.js, React, Java, and cloud-ready engineering.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mx-auto mt-6 max-w-xl border-l border-purple-200/35 bg-white/[0.035] px-4 py-4 text-left backdrop-blur sm:mx-0 sm:mt-7 sm:px-5"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-purple-200/70">Current Focus</p>
            <p className="mt-2 text-sm leading-6 text-white/62">
              AI dashboards, enterprise APIs, automation systems, and scalable full stack products.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="mx-auto mt-8 flex w-full max-w-sm flex-col gap-3 sm:mx-0 sm:mt-9 sm:max-w-none sm:flex-row sm:gap-4">
            <MagneticLink href="#projects">
              <Eye size={17} />
              View Projects
            </MagneticLink>
            <MagneticLink href="/Sadumina-Rathnayaka-Resume.pdf" variant="secondary">
              <Download size={17} />
              Download Resume
            </MagneticLink>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 grid grid-cols-2 gap-3 sm:mt-11 sm:grid-cols-4"
          >
            {stats.map((item) => (
              <CountUpStat key={item.label} value={item.value} label={item.label} />
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto aspect-[0.86] w-full max-w-[335px] sm:max-w-[440px] lg:ml-auto lg:max-w-[560px]"
          initial={{ opacity: 0, scale: 0.92, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          style={{
            x,
            y,
            scale: videoScale,
            opacity: videoOpacity,
            perspective: 1100,
          }}
          onMouseMove={onVideoMouseMove}
          onMouseLeave={() => {
            rotateX.set(0);
            rotateY.set(0);
            glowX.set(50);
            glowY.set(50);
          }}
        >
          <div className="absolute -inset-5 rounded-full bg-radial-purple blur-2xl sm:-inset-8" />
          <FloatingTechBadges />
          <motion.div
            ref={videoRef}
            className="neon-ring relative h-full overflow-hidden rounded-[1.5rem] bg-black/40 sm:rounded-[2rem]"
            style={{
              rotateX: smoothRotateX,
              rotateY: smoothRotateY,
              transformStyle: "preserve-3d",
            }}
          >
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute z-20 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-200/20 blur-3xl sm:h-56 sm:w-56"
              style={{ left: glowLeft, top: glowTop }}
            />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-20 translate-x-[-130%] bg-gradient-to-r from-transparent via-white/[0.16] to-transparent mix-blend-screen animate-[heroSweep_4.8s_ease-in-out_1.1s_infinite]" />
            <FrameCorners />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:100%_9px] opacity-20" />
            <video
              className="h-full w-full object-cover"
              src="/hero-neon-character.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-white/[0.03]" />
          </motion.div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 animate-bounce rounded-full border border-white/[0.15] bg-white/[0.035] p-3 text-white/70 backdrop-blur transition hover:text-white md:inline-flex"
      >
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
