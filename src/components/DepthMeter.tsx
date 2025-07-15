import { useState, useEffect } from "react";

const DepthMeter = () => {
  const [depth, setDepth] = useState(100);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate progress through the page (0 to 1)
      const scrollProgress = scrollTop / (documentHeight - windowHeight);
      
      // Map scroll progress to depth values
      // Start at +100m (sky), go to -3000m (abyss)
      const maxDepth = 3100; // Total range from +100 to -3000
      const calculatedDepth = 100 - (scrollProgress * maxDepth);
      
      setDepth(Math.round(calculatedDepth));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const formatDepth = (depth: number) => {
    if (depth > 0) {
      return `+${depth} m`;
    } else if (depth === 0) {
      return "0 m";
    } else {
      return `${depth} m`;
    }
  };

  const getDepthColor = (depth: number) => {
    if (depth > 50) return "text-blue-100"; // Sky
    if (depth > 0) return "text-blue-200";  // Near surface
    if (depth > -200) return "text-cyan-200"; // Surface
    if (depth > -500) return "text-teal-200"; // Mid depth
    if (depth > -1000) return "text-blue-300"; // Deep
    return "text-indigo-200"; // Abyss
  };

  return (
    <div className="depth-meter hidden md:block">
      <div className="text-center">
        <div className="text-xs text-white/60 mb-1">DEPTH</div>
        <div className={`text-lg font-mono font-bold ${getDepthColor(depth)}`}>
          {formatDepth(depth)}
        </div>
      </div>
    </div>
  );
};

export default DepthMeter;