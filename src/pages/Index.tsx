import Navigation from "@/components/Navigation";
import DepthMeter from "@/components/DepthMeter";
import FloatingMusicDisc from "@/components/FloatingMusicDisc";
import FluidParticles from "@/components/FluidParticles";
import HeroSection from "@/components/sections/HeroSection";
import SummarySection from "@/components/sections/SummarySection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import VisionSection from "@/components/sections/VisionSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen scrollbar-hide relative" style={{
      background: `linear-gradient(180deg, 
        hsl(196 100% 85%) 0%,
        hsl(196 100% 70%) 8%,
        hsl(195 85% 55%) 20%,
        hsl(200 70% 45%) 35%,
        hsl(210 85% 25%) 55%,
        hsl(220 90% 10%) 75%,
        hsl(220 95% 8%) 90%,
        hsl(220 95% 3%) 100%
      )`
    }}>
      <Navigation />
      <DepthMeter />
      <FloatingMusicDisc />
      <FluidParticles />
      
      <main className="relative">
        <HeroSection />
        <SummarySection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <VisionSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
