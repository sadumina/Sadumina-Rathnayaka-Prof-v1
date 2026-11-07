import { ScrollReveal, SectionAura } from "@/components/ScrollReveal";
import DecryptedText from "@/components/DecryptedText";
import { experiences, stats } from "@/lib/data";
import { ArrowUpRight, BriefcaseBusiness, FlaskConical } from "lucide-react";

const currentFocus = [
  { index: "01", label: "Research", detail: "Deep-learning systems for practical health and environmental problems." },
  { index: "02", label: "Geospatial AI", detail: "Interactive maps that turn predictive models into useful visual stories." },
  { index: "03", label: "LKNEX Studio", detail: "Thoughtful websites and web applications for real client needs." },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="relative overflow-hidden pb-16 pt-8 sm:pb-24 sm:pt-12">
      <SectionAura />
      <div className="container-pad">
        <ScrollReveal>
          <div className="mb-12 max-w-none">
            <div className="mb-5 flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-14 bg-[#24323a] sm:w-20" />
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#7d7198]">Experience</p>
            </div>
            <h2 className="font-display text-4xl font-normal tracking-[-0.035em] text-[#24323a] sm:text-6xl lg:whitespace-nowrap">
              <DecryptedText
                text="From enterprise systems to ongoing research."
                animateOn="inViewHover"
                effect="scramble"
                sequential
                revealDirection="start"
                speed={60}
                maxIterations={10}
                hoverRadius={100}
                scrambleColor="#7d7198"
                loop={false}
                loopDelay={2000}
                useOriginalCharsOnly={false}
                characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
                className="revealed"
                encryptedClassName="encrypted"
                clickMode="once"
              />
            </h2>
            <p className="mt-5 text-base leading-8 text-[#6f7a7d] sm:text-lg">
              A timeline of practical engineering experience, followed by the research and product work I am continuing today.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="mb-16 grid grid-cols-2 border-y border-black/10 bg-white/35 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`group px-4 py-5 transition duration-200 hover:-translate-y-1 hover:bg-[#e7eef5]/60 sm:px-6 sm:py-6 ${index < stats.length - 1 ? "border-r border-black/10" : ""} ${index > 1 ? "border-t border-black/10 sm:border-t-0" : ""}`}
              >
                <p className="font-display text-3xl tracking-[-0.06em] text-[#24323a] sm:text-4xl">{stat.value}</p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7d7198]">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="relative ml-2 border-l border-[#7d7198]/35 pl-8 sm:ml-8 sm:pl-12">
          <ScrollReveal as="article" className="relative pb-12">
            <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-4 border-[#fcfaf6] bg-[#7d7198] sm:-left-[61px]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#fcfaf6]" />
            </span>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#7d7198]">Completed internship</span>
              <span className="bg-[#e7eef5] px-2 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-[#6f7a7d]">Start → End</span>
            </div>
            <div className="border border-black/10 bg-white/45 p-6 transition-shadow duration-300 hover:shadow-[12px_12px_0_rgba(125,113,152,0.12)] sm:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center bg-[#e8e1f1] text-[#7d7198]">
                    <BriefcaseBusiness size={20} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.035em] text-[#24323a]">Software Engineering Intern</h3>
                  <p className="mt-2 text-sm text-[#6f7a7d]">Hayleys PLC / Haycarb PLC</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#7d7198]">Enterprise systems</p>
                </div>
                <p className="max-w-xl text-sm leading-7 text-[#6f7a7d]">{experiences[0].description}</p>
              </div>
              <div className="mt-7 grid gap-3 md:grid-cols-2">
                {experiences[0].highlights.map((highlight) => (
                  <div key={highlight} className="border border-black/10 bg-[#e7eef5]/45 px-4 py-3 text-sm leading-6 text-[#6f7a7d]">
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal as="article" delay={0.12} className="relative">
            <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-4 border-[#fcfaf6] bg-[#c7ddd4] sm:-left-[61px]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#24323a]" />
            </span>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#6f7a7d]">Now · ongoing</span>
              <span className="bg-[#dcece4] px-2 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-[#6f7a7d]">Research + products</span>
            </div>
            <div className="border border-black/10 bg-[#dcece4]/35 p-6 transition-shadow duration-300 hover:shadow-[12px_12px_0_rgba(90,133,117,0.14)] sm:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center bg-[#c7ddd4] text-[#24323a]">
                    <FlaskConical size={20} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.035em] text-[#24323a]">Independent research & product building</h3>
                  <p className="mt-2 text-sm text-[#6f7a7d]">nexs.tudio · Current focus</p>
                </div>
                <p className="max-w-xl text-sm leading-7 text-[#6f7a7d]">
                  Continuing to explore deep-learning systems, predictive mapping, and practical web products while building LKNEX Studio for client and founder-led work.
                </p>
              </div>
              <div className="mt-7 flex flex-wrap gap-2">
                {["Deep Learning", "Research Projects", "App Development", "AI Systems", "LKNEX Studio"].map((item) => (
                  <span key={item} className="bg-white/60 px-3 py-2 text-xs text-[#6f7a7d]">{item}</span>
                ))}
              </div>
              <div className="mt-8 grid gap-3 md:grid-cols-3">
                {currentFocus.map((focus) => (
                  <div
                    key={focus.index}
                    className="border border-black/10 bg-white/45 p-4 transition duration-200 hover:-translate-y-1 hover:bg-white/70"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-[#7d7198]">{focus.index}</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7d7198]" />
                    </div>
                    <h4 className="mt-5 font-display text-base text-[#24323a]">{focus.label}</h4>
                    <p className="mt-2 text-xs leading-5 text-[#6f7a7d]">{focus.detail}</p>
                  </div>
                ))}
              </div>
              <a href="#projects" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#24323a] transition hover:text-[#7d7198]">
                Explore current projects <ArrowUpRight size={16} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
