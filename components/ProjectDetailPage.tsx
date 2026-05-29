import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import type { ProjectItem } from "@/types/portfolio";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export function ProjectDetailPage({ project }: { project: ProjectItem }) {
  return (
    <SmoothScrollProvider>
      <ScrollProgress />
      <Navbar />
      <main className="min-h-screen overflow-hidden pt-28">
        <section className="relative pb-20 pt-10">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_68%_18%,rgba(168,85,247,0.22),transparent_34%),radial-gradient(circle_at_10%_18%,rgba(255,255,255,0.08),transparent_24%)]" />
          <div className="container-pad relative z-10">
            <Link href="/#projects" className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-white/62 transition hover:text-white">
              <ArrowLeft size={17} />
              Back to Projects
            </Link>

            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-purple-200/[0.82]">{project.category}</p>
                <h1 className="font-display text-4xl font-semibold tracking-[-0.045em] text-white sm:text-6xl">{project.title}</h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/[0.64]">{project.description}</p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href={project.demoUrl} className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition hover:bg-purple-100">
                    <ExternalLink size={17} />
                    Live Demo
                  </a>
                  <a href={project.githubUrl} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.045] px-6 py-4 text-sm font-semibold text-white transition hover:border-purple-200/60 hover:bg-purple-300/10">
                    <Github size={17} />
                    GitHub
                  </a>
                </div>
              </div>

              <div className="glass-line relative overflow-hidden rounded-2xl p-5 shadow-panel">
                <div className="absolute right-0 top-0 h-48 w-48 translate-x-12 -translate-y-12 rounded-full bg-purple-400/[0.14] blur-3xl" />
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-black/40">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(168,85,247,0.22),transparent_42%),radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.18),transparent_18%)]" />
                  <div className="absolute inset-x-6 top-6 flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-purple-200/70" />
                    <span className="h-3 w-3 rounded-full bg-white/25" />
                    <span className="h-3 w-3 rounded-full bg-white/12" />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-purple-100/70">Case Study Preview</p>
                    <p className="mt-3 font-display text-2xl font-semibold text-white">{project.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad bg-black/20">
          <div className="container-pad grid gap-5 lg:grid-cols-3">
            <article className="glass-line rounded-2xl p-6">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-purple-200/75">Problem</p>
              <p className="mt-5 text-sm leading-7 text-white/[0.64]">{project.problem}</p>
            </article>
            <article className="glass-line rounded-2xl p-6">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-purple-200/75">Solution</p>
              <p className="mt-5 text-sm leading-7 text-white/[0.64]">{project.solution}</p>
            </article>
            <article className="glass-line rounded-2xl p-6">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-purple-200/75">Tech Stack</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full bg-white/[0.06] px-3 py-2 text-xs text-white/[0.66]">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="section-pad">
          <div className="container-pad grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.34em] text-purple-200/[0.78]">Impact</p>
              <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">What this project delivers.</h2>
            </div>
            <div className="grid gap-4">
              {project.impact.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 text-white/[0.68]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-black/20">
          <div className="container-pad">
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.34em] text-purple-200/[0.78]">Screens</p>
                <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">Interface moments.</h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-white/[0.56]">Replace these placeholder panels with real screenshots when your project images are ready.</p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {project.screenshots.map((screen) => (
                <article key={screen.title} className="glass-line overflow-hidden rounded-2xl p-4">
                  <div className="aspect-[16/10] rounded-xl border border-white/10 bg-[radial-gradient(circle_at_70%_20%,rgba(168,85,247,0.24),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.1),rgba(255,255,255,0.02))]" />
                  <div className="p-3">
                    <h3 className="font-display text-xl font-semibold text-white">{screen.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/[0.58]">{screen.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="container-pad">
            <div className="glass-line flex flex-col gap-6 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-purple-200/75">Next Project</p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-white">Explore more selected work.</h2>
              </div>
              <Link href="/#projects" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition hover:bg-purple-100">
                View All Projects
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SmoothScrollProvider>
  );
}
