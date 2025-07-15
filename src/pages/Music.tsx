import { useState } from "react";
import { Play, Pause, Download, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MusicPage = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(null);

  const compositions = [
    {
      title: "Ocean Depths",
      description: "A haunting melody inspired by the deep sea voyages",
      duration: "4:32",
      audioUrl: "/audio/ocean-depths.mp3" // Placeholder
    },
    {
      title: "Harbor Lights",
      description: "Uplifting composition capturing the hope of returning to port",
      duration: "3:45",
      audioUrl: "/audio/harbor-lights.mp3" // Placeholder
    },
    {
      title: "Maritime Dreams",
      description: "Electronic fusion blending maritime sounds with modern beats",
      duration: "5:18",
      audioUrl: "/audio/maritime-dreams.mp3" // Placeholder
    }
  ];

  const togglePlay = (index: number) => {
    setCurrentlyPlaying(currentlyPlaying === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative">
        {/* Spotlight effect */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
        
        {/* Subtle particle animation */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Chill Zone
              </h1>
              <p className="text-white/80 text-xl max-w-2xl mx-auto leading-relaxed">
                When I'm not navigating ships or analyzing data, I create music. 
                Here's a collection of compositions that help me unwind and express creativity 
                beyond the maritime world.
              </p>
            </div>

            {/* Music List */}
            <div className="space-y-6">
              {compositions.map((composition, index) => (
                <div
                  key={composition.title}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Button
                        onClick={() => togglePlay(index)}
                        className="w-12 h-12 rounded-full bg-cyan-400/20 hover:bg-cyan-400/30 border border-cyan-400/30"
                        size="icon"
                      >
                        {currentlyPlaying === index ? (
                          <Pause className="w-5 h-5 text-cyan-300" />
                        ) : (
                          <Play className="w-5 h-5 text-cyan-300 ml-0.5" />
                        )}
                      </Button>
                      
                      <div>
                        <h3 className="text-white font-semibold text-lg">
                          {composition.title}
                        </h3>
                        <p className="text-white/70 text-sm">
                          {composition.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <span className="text-white/50 text-sm">
                        {composition.duration}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-white/70 hover:text-white hover:bg-white/10"
                      >
                        <Download size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom text */}
            <div className="text-center mt-16">
              <p className="text-white/60 leading-relaxed">
                Music has always been my way of processing the world around me. 
                Whether it's the rhythm of waves against a hull or the complexity 
                of a well-orchestrated project, there's always a melody waiting to be discovered.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MusicPage;