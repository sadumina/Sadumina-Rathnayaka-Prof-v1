import { SectionHeader } from "@/components/SectionHeader";
import { ScrollReveal, SectionAura } from "@/components/ScrollReveal";
import { Github, Linkedin, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      <SectionAura />
      <div className="container-pad">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <ScrollReveal>
            <SectionHeader eyebrow="Contact" title="Let's build something useful and polished.">
              Open to software engineering roles, internships, collaborations, and full stack product opportunities.
            </SectionHeader>
          </ScrollReveal>

          <ScrollReveal className="glass-line rounded-2xl p-6 sm:p-8">
            <a
              href="mailto:bagyasadumina@gmail.com"
              className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-purple-200/[0.35] hover:bg-purple-300/[0.08]"
            >
              <span>
                <span className="block text-sm uppercase tracking-[0.22em] text-purple-200/70">Email</span>
                <span className="mt-2 block font-display text-xl font-semibold text-white">bagyasadumina@gmail.com</span>
              </span>
              <Mail className="text-white/60 transition group-hover:text-white" size={22} />
            </a>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <a
                href="https://github.com/sadumina"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 text-sm font-semibold text-white/[0.76] transition hover:border-purple-200/[0.35] hover:bg-purple-300/[0.08] hover:text-white"
              >
                <Github size={18} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sadumina-rathnayaka-744792278/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 text-sm font-semibold text-white/[0.76] transition hover:border-purple-200/[0.35] hover:bg-purple-300/[0.08] hover:text-white"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
