import { useState } from "react";
import { Play, Pause, FileText, ArrowLeft, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MusicPage = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(null);
  const [showLyrics, setShowLyrics] = useState<number | null>(null);

  const compositions = [
    {
      title: "That Guy in the Glass",
      description: "A haunting reflection on aging and identity, the song captures a moment of confronting one's changed self in the face of time.",
      duration: "3:42",
      audioUrl: "/audio/that-guy-in-the-glass.mp3", // Update this with your Supabase storage URL
      lyrics: `(Verse 1)
Dark phone screen on a Friday night
Standing in the hard porch light
Waited for the car to show
Then saw a man I didn't know

(Chorus)
And I thought, who is that man?
Staring back at me again
A face I don't quite understand
Who is that man?

(Verse 2)
He's got some lines around his eyes
From a few too many fast goodbyes
And my father's stubborn chin
And the shape of the trouble I'm in

(Chorus)
And I thought, who is that man?
Staring back at me again
A face I don't quite understand
Who is that man?

(Bridge)
You think you'll stay forever young
A song forever halfway sung
But the years just show up on your face
And put you in a different place

(Outro)
That guy just stares me in the eye
We don't even say goodbye
A push of a button, a flash of light...
And he's gone back into the night.`
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

  const toggleLyrics = (index: number) => {
    setShowLyrics(showLyrics === index ? null : index);
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
                When I'm not busy working, I write music. Here's a collection of songs I wrote (turned to songs using AI).
              </p>
            </div>

            {/* Music List */}
            <div className="space-y-6">
              {compositions.map((composition, index) => (
                <div key={composition.title}>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
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
                        {composition.lyrics && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-white/70 hover:text-white hover:bg-white/10"
                            onClick={() => toggleLyrics(index)}
                          >
                            <FileText size={16} />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Lyrics Display */}
                  {showLyrics === index && composition.lyrics && (
                    <div className="mt-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 relative">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-4 right-4 text-white/70 hover:text-white hover:bg-white/10"
                        onClick={() => toggleLyrics(index)}
                      >
                        <X size={16} />
                      </Button>
                      <h4 className="text-white font-semibold text-lg mb-4">
                        {composition.title} - Lyrics
                      </h4>
                      <pre className="text-white/80 text-sm leading-relaxed whitespace-pre-wrap font-mono">
                        {composition.lyrics}
                      </pre>
                    </div>
                  )}
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