import { Award, Code, Database, TrendingUp, Users, Settings, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const SkillsSection = () => {
  const certifications = [
    { name: "PMP® - Project Management Professional", icon: Award, source: null },
    { name: "Management Consulting Specialization – Emory University", icon: TrendingUp, source: "Coursera" },
    { name: "Microsoft Power BI Data Analyst", icon: Database, source: "Coursera" },
    { name: "Google Project Management Specialization", icon: Users, source: "Coursera" },
    { name: "Business Strategy Specialization - University of Virginia", icon: Code, source: "Coursera" },
    { name: "Six Sigma Green Belt Specialization - Kennesaw State University", icon: Settings, source: "Coursera" },
    { name: "Fundamentals of AI Agents – HuggingFace", icon: TrendingUp, source: null },
    { name: "Fundamentals of Digital Marketing - Google", icon: Database, source: null },
    { name: "Proficiency in Advanced Fire Fighting", icon: Award, source: null },
    { name: "Proficiency in Medical First Aid", icon: Users, source: null }
  ];

  const skills = [
    { name: "Project Management", level: 95 },
    { name: "Data Analysis", level: 90 },
    { name: "Maritime Operations", level: 98 },
    { name: "Process Optimization", level: 88 },
    { name: "Team Leadership", level: 92 },
    { name: "Risk Management", level: 85 }
  ];

  return (
    <section id="skills" className="section-base min-h-screen flex items-center relative">
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & Certifications
          </h2>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">
            Practical. Proven. Always evolving.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Certifications Section */}
          <div className="slide-in-view mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={cert.name}
                  className="card-depth flex items-center justify-between space-x-4 hover:bg-white/5 transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-cyan-400/20 rounded-lg flex items-center justify-center">
                        <cert.icon className="w-5 h-5 text-cyan-300" />
                      </div>
                    </div>
                    <span className="text-white/90 font-medium text-sm">{cert.name}</span>
                  </div>
                  {cert.source && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-cyan-400/10 border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/20 text-xs px-3 py-1 h-auto flex-shrink-0"
                    >
                      {cert.source}
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="slide-in-view" style={{ animationDelay: "0.5s" }}>
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Core Skills</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="space-y-2 hover:transform hover:scale-105 transition-all duration-300 p-4 rounded-lg hover:bg-white/5 cursor-pointer"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <div className="flex justify-between">
                    <span className="text-white/90 font-medium">{skill.name}</span>
                    <span className="text-cyan-300 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div
                      className="h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        animation: `skillFill 1.5s ease-out ${0.7 + index * 0.1}s both`
                      }}
                    ></div>
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

export default SkillsSection;