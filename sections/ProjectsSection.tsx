import { SectionHeader } from "@/components/SectionHeader";
import { ScrollReveal, SectionAura } from "@/components/ScrollReveal";
import { projects } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-pad relative overflow-hidden bg-black/20">
      <SectionAura side="left" />
      <div className="container-pad">
        <ScrollReveal>
          <SectionHeader eyebrow="Projects" title="Selected systems with practical product intent.">
            A focused collection of software projects across AI, analytics, business operations, computer vision, and management systems.
          </SectionHeader>
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
