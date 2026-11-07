import { ScrollReveal, SectionAura } from "@/components/ScrollReveal";
import { ArrowUpRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden pb-10 pt-16 sm:pb-14 sm:pt-24">
      <SectionAura />
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-[#e8e1f1]/65 blur-3xl" />
      <div className="container-pad relative">
        <div className="mb-10 flex items-center justify-between border-y border-black/10 py-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#dcece4] text-[#5f9388]">
              <Sparkles size={15} />
            </span>
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#6f7a7d]">
              Available for thoughtful work
            </span>
          </div>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-[#8b9291] sm:block">Let&apos;s connect · 2026</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="mb-5 flex items-center gap-4">
                <span aria-hidden="true" className="h-px w-14 bg-[#24323a] sm:w-20" />
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#7d7198]">Contact</p>
              </div>
              <h2 className="font-display text-4xl font-normal leading-[1.05] tracking-[-0.05em] text-[#24323a] sm:text-6xl">
                Let&apos;s build something useful and polished.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#6f7a7d] sm:text-lg">
                Open to software engineering roles, collaborations, and product work through LKNEX Studio.
              </p>
              <a
                href="mailto:bagyasadumina@gmail.com"
                className="mt-8 inline-flex items-center gap-3 border-b border-[#7d7198]/50 pb-2 text-sm font-semibold text-[#24323a] transition hover:border-[#24323a]"
              >
                Start a conversation <ArrowUpRight size={17} />
              </a>
              <a
                href="/Sadumina-Rathnayaka-Resume.pdf"
                download="Sadumina-Rathnayaka-Resume.pdf"
                className="ml-5 inline-flex items-center gap-3 text-sm font-semibold text-[#6f7a7d] transition hover:text-[#24323a]"
              >
                Download résumé <ArrowUpRight size={17} />
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal className="border border-black/10 bg-white/65 p-5 shadow-[0_18px_45px_rgba(70,58,86,0.07)] sm:p-7">
            <a href="mailto:bagyasadumina@gmail.com" className="group flex items-center justify-between gap-4 border-b border-black/10 pb-5">
              <span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-[#7d7198]">Email</span>
                <span className="mt-2 block font-display text-lg font-semibold text-[#24323a] sm:text-xl">bagyasadumina@gmail.com</span>
              </span>
              <Mail className="text-[#7d7198] transition group-hover:-translate-y-1 group-hover:translate-x-1" size={22} />
            </a>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <a
                href="https://github.com/sadumina"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 border border-black/10 bg-[#eeeaf3]/60 px-5 py-4 text-sm font-semibold text-[#6f7a7d] transition hover:-translate-y-1 hover:border-[#9b90b6] hover:text-[#24323a]"
              >
                <Github size={18} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sadumina-rathnayaka-744792278/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 border border-black/10 bg-[#e7eef5]/60 px-5 py-4 text-sm font-semibold text-[#6f7a7d] transition hover:-translate-y-1 hover:border-[#7898ad] hover:text-[#24323a]"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
            <a
              href="https://www.lknexstudio.tech/"
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex items-center justify-between border border-[#afd0bf] bg-[#dcece4]/65 px-5 py-4 text-sm font-semibold text-[#24323a] transition hover:-translate-y-1 hover:bg-[#c7ddd4]"
            >
              <span>LKNEX Studio</span>
              <span aria-hidden="true">Visit company site ↗</span>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
