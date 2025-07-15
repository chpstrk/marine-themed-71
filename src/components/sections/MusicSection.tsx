import { Play, Pause, Music, Download } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const MusicSection = () => {
  const [currentPlaying, setCurrentPlaying] = useState<number | null>(null);
  
  const compositions = [
    {
      title: "Ocean Depths",
      description: "A contemplative piece inspired by the mysteries of deep-sea exploration",
      duration: "4:32",
      audioUrl: "#" // Placeholder
    },
    {
      title: "Harbor Lights",
      description: "Ambient soundscape capturing the serenity of maritime evenings",
      duration: "6:18",
      audioUrl: "#" // Placeholder
    },
    {
      title: "Storm Passage",
      description: "Dynamic composition reflecting the power and beauty of ocean storms",
      duration: "5:45",
      audioUrl: "#" // Placeholder
    }
  ];

  const togglePlay = (index: number) => {
    if (currentPlaying === index) {
      setCurrentPlaying(null);
    } else {
      setCurrentPlaying(index);
    }
  };

  return (
    <section id="music" className="min-h-screen bg-gray-900 flex items-center relative overflow-hidden">
      {/* Spotlight effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      
      {/* Subtle particles */}
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
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16 slide-in-view">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Music className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Musical Compositions
            </h2>
            <p className="text-white/80 text-xl max-w-2xl mx-auto">
              Capturing the rhythm and beauty of maritime life through sound
            </p>
          </div>

          <div className="space-y-8">
            {compositions.map((composition, index) => (
              <div
                key={composition.title}
                className="card-depth flex items-center justify-between slide-in-view"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center space-x-6 flex-1">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white rounded-full w-16 h-16 p-0"
                    onClick={() => togglePlay(index)}
                  >
                    {currentPlaying === index ? (
                      <Pause className="w-6 h-6" />
                    ) : (
                      <Play className="w-6 h-6 ml-1" />
                    )}
                  </Button>
                  
                  <div className="text-left flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {composition.title}
                    </h3>
                    <p className="text-white/70 mb-2">
                      {composition.description}
                    </p>
                    <span className="text-white/50 text-sm">
                      {composition.duration}
                    </span>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white/70 hover:text-white hover:bg-white/10"
                >
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-12 slide-in-view" style={{ animationDelay: "0.6s" }}>
            <p className="text-white/60 text-center max-w-2xl mx-auto">
              Music serves as my creative outlet, allowing me to process the complex emotions 
              and experiences that come with life at sea. Each composition tells a story of 
              maritime adventure and introspection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;