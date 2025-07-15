import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="section-sky min-h-screen flex items-center justify-center relative">
      {/* Sun glow effect */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl"></div>
      
      {/* Main content */}
      <div className={`text-center z-10 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Your Name
        </h1>
        <p className="text-xl md:text-2xl text-white/90 font-light max-w-4xl mx-auto px-6">
          Maritime Operations Engineer • Project Manager • Aspiring MBA
        </p>
        
        {/* Subtle scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;