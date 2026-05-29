import { AnimatedCursor } from "@/components/AnimatedCursor";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { AboutSection } from "@/sections/AboutSection";
import { ContactSection } from "@/sections/ContactSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { Footer } from "@/sections/Footer";
import { HeroSection } from "@/sections/HeroSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { SkillsSection } from "@/sections/SkillsSection";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <ScrollProgress />
      <AnimatedCursor />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
