import Navigation from "@/components/Navigation";
import DepthMeter from "@/components/DepthMeter";
import FloatingMusicDisc from "@/components/FloatingMusicDisc";
import HeroSection from "@/components/sections/HeroSection";
import SummarySection from "@/components/sections/SummarySection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import VisionSection from "@/components/sections/VisionSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scrollbar-hide">
      <Navigation />
      <DepthMeter />
      <FloatingMusicDisc />
      
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
