import { Award, TrendingUp, Target } from "lucide-react";

const SummarySection = () => {
  const certifications = [
    {
      title: "Marine Operations Engineer",
      icon: TrendingUp,
      description: "4+ years at Maersk, experienced in running BIG SHIPS"
    },
    {
      title: "PMP® Certified",
      icon: Award,
      description: "Project Management Professional"
    },
    {
      title: "Strategy-Driven Transition",
      icon: Target,
      description: "Actively pivoting into strategy and operations roles—leveraging PMP certification, Power BI, and consulting frameworks to solve complex business problems."
    }
  ];

  return (
    <section id="summary" className="section-base min-h-screen flex items-center relative">
      {/* Wave overlay */}
      <div className="wave-overlay"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Bio */}
          <div className="slide-in-view">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              About Me
            </h2>
            <div className="card-marine">
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                Hey, I'm Pranjal. I've spent the last few years working as a Marine Operations Engineer with Maersk — think massive ships, complex systems, and making sure everything keeps running no matter what.
              </p>
              <p className="text-white/80 text-base leading-relaxed mb-6">
                I'm PMP® certified, deep into data and automation, and always looking for ways to make things smoother, smarter, and faster. Lately, I've been building with AI tools, optimizing workflows, and learning everything that catches my curiosity.
              </p>
              <p className="text-white/80 text-base leading-relaxed">
                Outside of work, I'm into sim racing (built my own cockpit), making music, and tennis. Basically, if it involves building, experimenting, or leveling up — I'm in.
              </p>
            </div>
          </div>

          {/* Right column - Certifications */}
          <div className="slide-in-view" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold text-white mb-8">Professional Snapshot</h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={cert.title}
                  className="card-marine flex items-center space-x-4"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <cert.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{cert.title}</h4>
                    <p className="text-white/70 text-sm">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummarySection;