"use client";

import TechText from "@/components/TechText";
import LogoLoop from "@/components/LogoLoop";
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Eye,
} from "lucide-react";
import { FaAws } from "react-icons/fa6";
import {
  SiFastapi,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiOpenjdk,
  SiPython,
  SiPytorch,
  SiReact,
  SiTensorflow,
  SiTypescript,
} from "react-icons/si";
import Link from "next/link";

const techLogos = [
  { node: <SiReact aria-hidden="true" />, title: "React", href: "https://react.dev", hoverColor: "#61dafb" },
  { node: <SiNextdotjs aria-hidden="true" />, title: "Next.js", href: "https://nextjs.org", hoverColor: "#24323a" },
  { node: <SiTypescript aria-hidden="true" />, title: "TypeScript", href: "https://www.typescriptlang.org", hoverColor: "#3178c6" },
  { node: <SiJavascript aria-hidden="true" />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", hoverColor: "#b08d1a" },
  { node: <SiFastapi aria-hidden="true" />, title: "FastAPI", href: "https://fastapi.tiangolo.com", hoverColor: "#05998b" },
  { node: <SiOpenjdk aria-hidden="true" />, title: "Java", href: "https://www.java.com", hoverColor: "#c74634" },
  { node: <SiPython aria-hidden="true" />, title: "Python", href: "https://www.python.org", hoverColor: "#3776ab" },
  { node: <SiMongodb aria-hidden="true" />, title: "MongoDB", href: "https://www.mongodb.com", hoverColor: "#47a248" },
  { node: <FaAws aria-hidden="true" />, title: "AWS", href: "https://aws.amazon.com", hoverColor: "#c47f18" },
  { node: <SiTensorflow aria-hidden="true" />, title: "Machine Learning", href: "#skills", hoverColor: "#e88a24" },
  { node: <SiPytorch aria-hidden="true" />, title: "Deep Learning", href: "#skills", hoverColor: "#ee4c2c" },
];

const featuredProjects = [
  {
    title: "EduSense",
    cluster: "App Development",
    description: "An AI-supported learning platform for academic workflows, dashboards, and personalized insights.",
    stack: ["Next.js", "FastAPI", "AI APIs"],
    href: "/projects/edusense",
    external: false,
  },
  {
    title: "Diabetic Retinopathy Screening",
    cluster: "Deep Learning",
    description: "A screening system that compares four CNN models for diabetic retinopathy detection from retinal images.",
    stack: ["Python", "CNN", "PyTorch"],
    href: "/projects/diabetic-retinopathy-screening",
    external: false,
  },
  {
    title: "Predictive Risk Map",
    cluster: "Research Project",
    description: "A highly interactive map demo for visualizing predicted landslide and flood-prone areas.",
    stack: ["JavaScript", "Maps", "Research"],
    href: "https://github.com/sadumina/Map_cmp.git",
    external: true,
  },
];

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#fcfaf6] pt-24 sm:pt-28">
      <div className="relative z-10 flex min-h-[calc(100vh-96px)] w-full flex-col px-3 sm:px-5 lg:px-7">
        <div className="mx-auto w-full text-center">
          <motion.p
            className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#17212b]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
          >
            Full stack software engineer · LKNEX Studio
          </motion.p>
          <div className="mx-auto mt-5 w-full text-[#24323a]">
            <h1 className="sr-only">Thoughtful software. Useful by design.</h1>
            <div className="h-[118px] sm:h-[150px]">
              <TechText
                text="Thoughtful software."
                fontWeight={600}
                fontSize={124}
                reveal="letter"
                dashLength={4}
                dashGap={2}
                specks={15}
                intro="none"
                introDuration={2}
                clickKick
                guides={false}
                fontFamily=""
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
                color="currentColor"
                align="center"
                draggable
                sweep
              />
            </div>
            <div className="h-[118px] sm:h-[150px]">
              <TechText
                text="Useful by design."
                fontWeight={600}
                fontSize={124}
                reveal="letter"
                dashLength={4}
                dashGap={2}
                specks={15}
                intro="none"
                introDuration={2}
                clickKick
                guides={false}
                fontFamily=""
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
                color="currentColor"
                align="center"
                draggable
                sweep
              />
            </div>
          </div>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#65707a] sm:text-base sm:leading-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.7 }}
          >
            I design and ship dependable interfaces, APIs, and cloud-ready systems for teams that want their ideas to work in the real world.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.35, duration: 0.65 }}
          >
            <a href="#projects" className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#c7ddd4] px-6 py-3 text-sm font-semibold text-[#24323a] transition hover:bg-[#b5d1c5]">
              <Eye size={16} /> View selected work
            </a>
            <a href="https://www.lknexstudio.tech/" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#17212b]/25 px-6 py-3 text-sm font-semibold text-[#17212b] transition hover:bg-[#17212b]/[0.06]">
              Visit LKNEX Studio <ArrowUpRight size={16} />
            </a>
            <a href="/Sadumina-Rathnayaka-Resume.pdf" className="inline-flex min-h-12 items-center justify-center gap-2 border border-black/10 px-6 py-3 text-sm font-semibold text-[#65707a] transition hover:border-[#17212b]/30 hover:text-[#17212b]">
              <Download size={16} /> Resume
            </a>
          </motion.div>
        </div>

        <div className="mt-10 flex-1 sm:mt-14">
          <div className="border-t border-black/10 pt-5">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-[#7d7198]">Selected work</p>
                <h2 className="mt-2 font-display text-2xl font-semibold tracking-[-0.04em] text-[#24323a] sm:text-3xl">
                  Built for useful outcomes.
                </h2>
              </div>
              <Link href="#projects" className="hidden items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6f7a7d] transition hover:text-[#24323a] sm:inline-flex">
                View all <ArrowUpRight size={13} />
              </Link>
            </div>

            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 1.45 + index * 0.1 }}
                >
                  <a
                    href={project.href}
                    target={project.external ? "_blank" : undefined}
                    rel={project.external ? "noreferrer" : undefined}
                    className="group flex min-h-[142px] h-full flex-col justify-between border border-black/10 bg-white/45 p-5 text-left transition hover:-translate-y-1 hover:border-[#7d7198]/40 hover:bg-[#e8e1f1]/45"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#6f7a7d]">
                          0{index + 1} / {project.cluster}
                        </span>
                        <ArrowUpRight size={15} className="text-[#7d7198] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                      <h3 className="mt-4 font-display text-lg font-semibold tracking-[-0.03em] text-[#24323a]">
                        {project.title}
                      </h3>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.stack.map((technology) => (
                        <span key={technology} className="bg-[#e7eef5] px-2 py-1 text-[9px] font-medium text-[#6f7a7d]">
                          {technology}
                        </span>
                      ))}
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 w-full border-y border-black/10 bg-[#e7eef5]/35 py-3">
          <p className="mb-2 text-center font-mono text-[9px] uppercase tracking-[0.28em] text-[#6f7a7d]">
            Technologies I work with
          </p>
          <div className="h-[68px]">
            <LogoLoop
              logos={techLogos}
              speed={70}
              direction="left"
              logoHeight={26}
              gap={42}
              hoverSpeed={0}
              scaleOnHover
              ariaLabel="Technologies I work with"
            />
          </div>
        </div>

      </div>

      
    </section>
  );
}
