import { ExternalLink, Github, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Fleet Optimization Platform",
      description: "AI-powered route optimization system that reduced fuel costs by 18% across a fleet of 50+ vessels.",
      tech: ["Python", "TensorFlow", "React", "PostgreSQL"],
      link: "#",
      github: "#",
      featured: true
    },
    {
      title: "Predictive Maintenance System",
      description: "IoT-based monitoring solution preventing critical equipment failures and reducing downtime by 35%.",
      tech: ["IoT", "Machine Learning", "Azure", "Power BI"],
      link: "#",
      github: "#",
      featured: true
    },
    {
      title: "Maritime Safety Dashboard",
      description: "Real-time safety monitoring system with automated alerts and comprehensive reporting capabilities.",
      tech: ["React", "Node.js", "MongoDB", "WebSocket"],
      link: "#",
      github: "#",
      featured: false
    },
    {
      title: "Supply Chain Tracker",
      description: "Blockchain-based tracking system ensuring transparency and efficiency in maritime supply chains.",
      tech: ["Blockchain", "Ethereum", "React", "Web3"],
      link: "#",
      github: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="section-deep min-h-screen flex items-center relative">
      {/* Bioluminescent dots effect */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Projects
          </h2>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">
            Innovative solutions that transform maritime operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`card-depth slide-in-view group cursor-pointer ${
                project.featured ? "md:col-span-1" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-cyan-400/20 rounded-lg flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-cyan-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                </div>
                {project.featured && (
                  <span className="px-2 py-1 bg-cyan-400/20 text-cyan-300 text-xs rounded-full">
                    Featured
                  </span>
                )}
              </div>

              <p className="text-white/80 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/10 text-white/70 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white"
                >
                  <ExternalLink size={14} className="mr-2" />
                  Live Demo
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white/70 hover:text-white hover:bg-white/10"
                >
                  <Github size={14} className="mr-2" />
                  Code
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;