import { Award, TrendingUp, Target } from "lucide-react";

const SummarySection = () => {
  const certifications = [
    {
      title: "PMP Certified",
      icon: Award,
      description: "Project Management Professional"
    },
    {
      title: "Data Analyst",
      icon: TrendingUp,
      description: "Advanced Analytics & Insights"
    },
    {
      title: "Lean Six Sigma",
      icon: Target,
      description: "Green Belt Certification"
    }
  ];

  return (
    <section id="summary" className="section-surface min-h-screen flex items-center relative">
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
                Experienced maritime operations engineer with a passion for optimizing complex systems 
                and driving operational excellence. Currently pursuing an MBA to expand my strategic 
                leadership capabilities and make a greater impact in the maritime industry.
              </p>
              <p className="text-white/80 text-base leading-relaxed">
                With expertise spanning project management, data analysis, and process improvement, 
                I bridge the gap between technical excellence and business strategy to deliver 
                measurable results in challenging marine environments.
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