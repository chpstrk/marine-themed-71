import { Target, Users, TrendingUp } from "lucide-react";

const VisionSection = () => {
  const pillars = [
    {
      icon: Users,
      title: "Leadership Excellence",
      description: "Developing transformational leadership skills to guide diverse, international teams toward shared maritime objectives."
    },
    {
      icon: TrendingUp,
      title: "Strategic Innovation",
      description: "Bridging technology and business strategy to drive sustainable growth in the evolving maritime landscape."
    },
    {
      icon: Target,
      title: "Social Impact",
      description: "Leveraging maritime expertise to create solutions that benefit global trade while protecting our oceans."
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
              The ocean connects all continents and economies. Through strategic leadership 
              and innovative thinking, I aim to shape a maritime future that's both 
              profitable and sustainable.
            </blockquote>
            <cite className="text-cyan-300 text-lg">— Your Name, MBA Candidate</cite>
          </div>

          {/* Vision title */}
          <div className="mb-16 slide-in-view" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              MBA Vision
            </h2>
            <p className="text-white/80 text-xl max-w-2xl mx-auto">
              Three pillars guiding my journey toward maritime leadership
            </p>
          </div>

          {/* Pillars */}
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="card-depth text-center slide-in-view"
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
          <div className="mt-16 slide-in-view" style={{ animationDelay: "1s" }}>
            <p className="text-white/70 text-lg">
              Ready to dive deeper into collaboration?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;