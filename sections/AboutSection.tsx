import Lanyard from "@/components/Lanyard";
import { ScrollReveal, SectionAura } from "@/components/ScrollReveal";
import TextType from "@/components/TextType";

export function AboutSection() {
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <SectionAura side="left" />
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(320px,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <ScrollReveal className="relative h-[520px] overflow-hidden border border-black/10 bg-[#e7eef5]/35 sm:h-[600px]">
            <Lanyard
              frontImage="/sadumina-card-front.svg"
              backImage="/sadumina-card-back.svg"
              strapImage="/lknex-card-strap.svg"
              imageFit="cover"
              cardColor="#ffffff"
              orientation="portrait"
              finish="glossy"
              cornerRadius={0.3}
              size={0.6}
              anchor="center"
              strapLength={0.5}
              strapColor="#24323a"
              strapWidth={0.65}
              metal="silver"
              gravity={1}
              damping={0.5}
              elasticity={0.5}
              breeze={0.5}
              interactive
              intro
              style={{ width: "100%", height: "100%" }}
            />
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div className="mb-12 max-w-3xl">
              <div className="mb-5 flex items-center gap-4">
                <span aria-hidden="true" className="h-px w-14 bg-[#7d7198] sm:w-20" />
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#7d7198]">About me</p>
              </div>
              <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.045em] text-[#24323a] sm:text-6xl">
                <TextType
                  as="span"
                  className="font-display"
                  text="Hello, I am Sadumina Rathnayaka."
                  typingSpeed={75}
                  pauseDuration={1500}
                  deletingSpeed={50}
                  deleteMode="backspace"
                  typeEffect="none"
                  mistakes={0}
                  cursorStyle="underscore"
                  cursorGlide
                  showCursor
                  cursorColor="#7d7198"
                  prefixColor="currentColor"
                  cursorBlinkDuration={0.5}
                  cursorCharacter="_"
                  prefix=""
                />
              </h2>
              <p className="mt-5 text-base leading-8 text-[#6f7a7d] sm:text-lg">
                I am a final-year BSc (Hons) Information Technology undergraduate at the Sri Lanka Institute of Information Technology (SLIIT), set to graduate in May 2027. I am a full-stack developer who enjoys turning complex problems into clean, reliable, and well-designed digital products.
              </p>
            </div>

            <div className="space-y-5 text-sm leading-7 text-[#6f7a7d] sm:text-base">
              <p>
                My technical foundation is built around React.js, Next.js, TypeScript, Node.js, FastAPI, Python, MongoDB, and Docker. During my software engineering internship at Hayleys PLC / Haycarb PLC, I worked on real-world enterprise systems, building backend services, developing modern front-end interfaces, and automating delivery through CI/CD pipelines with GitHub Actions and Docker.
              </p>
              <p>
                Beyond my studies, I run <strong className="font-semibold text-[#24323a]">LKNEX Studio</strong>, a tech studio where I design and build websites and web applications for clients. I also work as a freelancer on Upwork and Fiverr, which has taught me how to communicate clearly, manage deadlines, and deliver work that meets both business goals and user needs.
              </p>
              <p>
                I care about both engineering quality and visual craft, and I believe good software should be dependable under the hood and thoughtful on the surface. I am currently seeking opportunities where I can contribute as a software engineer, keep learning from experienced teams, and help build products that make a real difference.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
              <a href="mailto:bagyasadumina@gmail.com" className="border-b border-[#7d7198]/50 pb-1 font-semibold text-[#24323a] transition hover:border-[#24323a]">
                Let’s connect
              </a>
              <a href="https://linkedin.com/in/sadumina-rathnayaka-0721908494/" target="_blank" rel="noreferrer" className="text-[#6f7a7d] transition hover:text-[#24323a]">
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
              <a href="https://www.lknexstudio.tech/" target="_blank" rel="noreferrer" className="text-[#6f7a7d] transition hover:text-[#24323a]">
                LKNEX Studio <span aria-hidden="true">↗</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
