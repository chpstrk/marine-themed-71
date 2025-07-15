import { Music } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const FloatingMusicDisc = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        to="/music"
        className="relative block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Tooltip */}
        {isHovered && (
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-black/80 text-white text-sm rounded-lg whitespace-nowrap">
            Chill Zone
          </div>
        )}
        
        {/* Disc */}
        <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-cyan-400/30 transition-all duration-300 animate-spin hover:animate-none hover:scale-110">
          <Music className="w-6 h-6 text-white" />
        </div>
      </Link>
    </div>
  );
};

export default FloatingMusicDisc;