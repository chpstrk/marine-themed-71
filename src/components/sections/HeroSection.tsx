import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate dynamic styling based on scroll position - faster response
  const scrollProgress = Math.min(scrollY / 200, 1); // Normalize to 0-1 over 200px (faster)
  const glowIntensity = scrollProgress * 1.5; // Stronger glow
  const textShadowIntensity = scrollProgress * 40; // More intense shadow
  const scaleEffect = 1 + scrollProgress * 0.05; // Subtle scale increase

  return (
    <section id="hero" className="section-base min-h-screen flex items-center justify-center relative">
      {/* Sun glow effect */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl"></div>
      
      {/* Main content */}
      <div className={`text-center z-10 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}>
        {/* Profile Image Section */}
        <div className="mb-8 relative">
          {/* Cool dynamic background behind photo area */}
          <div className="absolute inset-0 w-56 h-56 mx-auto">
            {/* Animated gradient background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-blue-500/30 blur-2xl animate-pulse"></div>
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-indigo-500/20 via-cyan-400/20 to-purple-600/20 blur-xl animate-bounce" style={{ animationDuration: '4s' }}></div>
            {/* Floating particles effect */}
            <div className="absolute top-4 left-8 w-2 h-2 bg-cyan-400/60 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
            <div className="absolute top-12 right-6 w-1 h-1 bg-purple-400/60 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-8 left-12 w-1.5 h-1.5 bg-blue-400/60 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-12 right-8 w-1 h-1 bg-cyan-300/60 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          </div>
          
          <div className="relative w-48 h-48 mx-auto z-10">
            {/* Rotating outer frame only */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-1 animate-spin" style={{ animationDuration: '3s' }}>
              <div className="w-full h-full rounded-full bg-gradient-to-b from-slate-900 to-slate-800"></div>
            </div>
            
            {/* Static inner content - your photo */}
            <div className="absolute inset-1 rounded-full overflow-hidden bg-slate-700 flex items-center justify-center">
              <img 
                src="/lovable-uploads/e8c65934-66b4-4680-b507-71fd8e14be7e.png" 
                alt="Pranjal Shah" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Pulsing outer glow */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20 blur-xl animate-pulse"></div>
          </div>
          
        </div>

        <h1 
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight px-4 transition-all duration-300"
          style={{
            textShadow: `0 0 ${textShadowIntensity}px rgba(59, 130, 246, ${glowIntensity}), 0 0 ${textShadowIntensity * 2}px rgba(147, 51, 234, ${glowIntensity * 0.8}), 0 0 ${textShadowIntensity * 3}px rgba(6, 182, 212, ${glowIntensity * 0.6})`,
            filter: `saturate(${1 + scrollProgress * 0.5}) contrast(${1 + scrollProgress * 0.3})`,
            transform: `scale(${scaleEffect})`,
          }}
        >
          Pranjal Shah
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light max-w-4xl mx-auto px-6">
          Maritime Operations Engineer • PMP® Certified • Data & AI Enthusiast
        </p>
      </div>
      
      {/* Scroll indicator repositioned closer to bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
          <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;