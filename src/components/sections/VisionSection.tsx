import { Target, Users, TrendingUp, ArrowDown } from "lucide-react";

const VisionSection = () => {
  const pillars = [
    {
      icon: Users,
      title: "Leadership Excellence",
      description: "I've led crews during emergencies and tight turnarounds. Now, I want to grow into the kind of leader who can do that at scale — with clarity, empathy, and direction."
    },
    {
      icon: TrendingUp,
      title: "Smarter Thinking",
      description: "I like understanding how systems work — engines, workflows, teams. I want to get better at solving complex problems that actually matter, not just fixing what's broken."
    },
    {
      icon: Target,
      title: "Wider Impact",
      description: "The work I've done has always mattered — to my team, my ship, and the mission. Now, I'm looking to bring that same energy to challenges that reach across industries, borders, and systems."
    }
  ];

  return (
    <section id="vision" className="section-abyss min-h-screen flex items-center relative">
      {/* Particle animation */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Quote */}
          <div className="mb-16 slide-in-view">
            <div className="text-6xl md:text-8xl text-cyan-300/20 font-serif mb-4">"</div>
            <blockquote className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-8">
              The sea taught me resilience, structure, and clarity under pressure. Now I look toward a broader horizon, one where strategy drives impact, and systems shape the future.
            </blockquote>
            <cite className="text-cyan-300 text-lg">— Pranjal Shah</cite>
          </div>

          {/* Vision title */}
          <div className="mb-16 slide-in-view" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              MBA Vision
            </h2>
            <p className="text-white/80 text-xl max-w-2xl mx-auto">
              Three pillars guiding my journey toward broader leadership
            </p>
          </div>

          {/* Pillars */}
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="card-marine text-center slide-in-view cursor-pointer"
                style={{ animationDelay: `${0.4 + index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <pillar.icon className="w-8 h-8 text-cyan-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{pillar.title}</h3>
                <p className="text-white/80 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="mt-16 slide-in-view flex flex-col items-center space-y-4" style={{ animationDelay: "1s" }}>
            <p className="text-white/70 text-lg">
              Ready to dive deeper into collaboration?
            </p>
            <div className="animate-bounce">
              <ArrowDown className="w-8 h-8 text-cyan-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;