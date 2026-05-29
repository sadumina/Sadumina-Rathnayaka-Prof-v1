import { SectionHeader } from "@/components/SectionHeader";
import { ScrollReveal, SectionAura } from "@/components/ScrollReveal";
import { experiences } from "@/lib/data";
import { BriefcaseBusiness } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-pad relative overflow-hidden bg-black/20">
      <SectionAura />
      <div className="container-pad">
        <ScrollReveal>
          <SectionHeader eyebrow="Experience" title="Enterprise experience across real internal systems.">
            Hands-on internship work spanning APIs, dashboards, database integration, containerized workflows, and delivery automation.
          </SectionHeader>
        </ScrollReveal>

        <div className="space-y-5">
          {experiences.map((item) => (
            <ScrollReveal
              as="article"
              key={item.company}
              className="glass-line relative overflow-hidden rounded-2xl p-6 shadow-panel sm:p-8"
            >
              <div aria-hidden="true" className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-purple-200/60 via-purple-200/10 to-transparent" />
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-300/[0.12] text-purple-100">
                    <BriefcaseBusiness size={22} />
                  </div>
                  <p className="text-sm uppercase tracking-[0.22em] text-purple-200/75">{item.period}</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-white">{item.role}</h3>
                  <p className="mt-2 text-white/[0.58]">{item.company}</p>
                </div>
                <p className="max-w-xl text-sm leading-7 text-white/[0.62]">{item.description}</p>
              </div>

              <div className="mt-8 grid gap-3 md:grid-cols-2">
                {item.highlights.map((highlight) => (
                  <div key={highlight} className="rounded-xl border border-white/[0.09] bg-white/[0.035] px-4 py-3 text-sm text-white/[0.66]">
                    {highlight}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
