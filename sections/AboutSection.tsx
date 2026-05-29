import { SectionHeader } from "@/components/SectionHeader";
import { ScrollReveal, SectionAura } from "@/components/ScrollReveal";

export function AboutSection() {
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <SectionAura side="left" />
      <div className="container-pad">
        <ScrollReveal>
          <SectionHeader eyebrow="About" title="Engineering useful products with clarity and momentum.">
            I am a full stack software engineer focused on building practical systems that feel polished, reliable, and ready for real business use.
          </SectionHeader>
        </ScrollReveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {[
            "I work across frontend interfaces, backend APIs, databases, automation, and cloud-ready deployment workflows.",
            "My strongest projects combine product thinking with engineering execution: clean dashboards, scalable services, and AI-enhanced workflows.",
            "I enjoy turning ambiguous business needs into structured software that teams can understand, maintain, and extend.",
          ].map((text, index) => (
            <ScrollReveal
              key={text}
              delay={index * 0.08}
              className="glass-line rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-purple-200/[0.26]"
            >
              <p className="text-sm leading-7 text-white/[0.62]">{text}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
