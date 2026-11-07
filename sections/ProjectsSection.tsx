import { ScrollReveal, SectionAura } from "@/components/ScrollReveal";
import ParticleText from "@/components/ParticleText";
import GridScan from "@/components/GridScan";
import { projects } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-pad relative overflow-hidden bg-[#fcfaf6]">
      <SectionAura side="left" />
      <div aria-hidden="true" className="absolute inset-0 opacity-20">
        <GridScan
          linesColor="#000000"
          scanColor="#f43f5e"
          cells={8}
          depth={3}
          scanDuration={2.4}
          scanDelay={1.6}
          clickEffect="ping"
          lineThickness={1}
          lineStyle="solid"
          depthFade={0.6}
          shading={0.7}
          reflection={0.35}
          points
          scanDirection="forward"
          scanWidth={1}
          trail={0.5}
          glow={0.6}
          parallax={1}
          autoScan
          interactive
          enableWebcam={false}
          showPreview
          intro
          lightMode={false}
        />
      </div>
      <div className="container-pad relative z-10">
        <ScrollReveal>
          <div className="mb-12">
            <div className="mb-5 flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-14 bg-[#24323a] sm:w-20" />
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#7d7198]">Projects</p>
            </div>
            <div className="relative -mx-4 h-[190px] w-[calc(100%+2rem)] sm:h-[230px] md:-mx-8 md:w-[calc(100%+4rem)]">
              <ParticleText
                text="Selected systems with practical product intent."
                particleSize={3.2}
                density={2.8}
                color="#24323a"
                highlightColor="#7d7198"
                highlightMode="motion"
                shape="circle"
                intro="gather"
                scatter={190}
                gatherDuration={1600}
                stagger={420}
                clickBurst
                burstStrength={1}
                pointerRepel={42}
                repelRadius={120}
                idleDrift={0.8}
                trigger="mount"
                fontSize="clamp(2.5rem, 8vw, 6rem)"
                fontWeight={800}
                fontFamily="inherit"
                glow
              />
            </div>
            <p className="mt-2 max-w-3xl text-base leading-8 text-[#6f7a7d] sm:text-lg">
              A focused collection of software projects across AI, analytics, business operations, computer vision, and management systems.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.title}
              delay={index * 0.06}
              className="h-full"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group glass-line relative block h-full overflow-hidden rounded-2xl p-6 shadow-panel transition duration-300 hover:-translate-y-1 hover:border-purple-200/[0.28]"
              >
                <div className="absolute right-0 top-0 h-36 w-36 translate-x-12 -translate-y-12 rounded-full bg-purple-400/[0.12] blur-2xl transition group-hover:bg-purple-300/20" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-200/45 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.22em] text-purple-200/70">
                        0{index + 1} / {project.category}
                      </p>
                      <h3 className="mt-4 font-display text-2xl font-semibold text-white">{project.title}</h3>
                    </div>
                    <span
                      aria-label={`Open ${project.title}`}
                      className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.045] text-white/[0.78] transition group-hover:border-purple-200/[0.45] group-hover:text-white"
                    >
                      <ArrowUpRight size={18} />
                    </span>
                  </div>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-white/60">{project.description}</p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-full bg-white/[0.06] px-3 py-2 text-xs text-white/[0.62]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
