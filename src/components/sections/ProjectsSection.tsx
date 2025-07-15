import { ExternalLink, Github, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Project B.O.B.",
      description: "Enabled in-house cylinder oil blending on vessels, reducing procurement costs by $260K+ annually and improving engine efficiency.",
      tech: ["Marine Engineering", "Cost Optimization", "Vendor Coordination", "Operational Training"],
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
            Building things that work — at sea and at home
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
                {project.title === "Project B.O.B." ? (
                  <>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white"
                        >
                          <ExternalLink size={14} className="mr-2" />
                          Project Summary (PDF)
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle>Project Summary</DialogTitle>
                        </DialogHeader>
                        <div className="p-4 text-center">
                          <p className="text-muted-foreground">Coming soon...</p>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-white/70 hover:text-white hover:bg-white/10"
                        >
                          <Github size={14} className="mr-2" />
                          Read More
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>Project B.O.B.</DialogTitle>
                        </DialogHeader>
                        <div className="p-4 text-sm leading-relaxed">
                          <p className="mb-4">
                            Project BOB aimed to install and commission an onboard oil blending system that enabled vessels to produce their own cylinder lubrication oil by blending system oil with additives. This initiative was designed to reduce operational costs, minimize waste, and enhance engine performance. I played a key role in overseeing the installation, commissioning, and validation of the BOB system while ensuring its seamless integration with vessel operations.
                          </p>
                          <p className="mb-4">
                            <strong>My key responsibilities included:</strong>
                          </p>
                          <p className="mb-4">
                            <strong>Project Planning & Coordination:</strong> Collaborated with Marine Fluid Technology A/S (MFT), ship's technical team, and fleet superintendents to define project execution steps, review equipment manuals, and ensure all pre-installation requirements were met.
                          </p>
                          <p className="mb-4">
                            <strong>Installation Oversight:</strong> Supervised the electrical and mechanical installation of the BOB unit, ensuring correct integration with existing lubrication systems and conducting initial system tests.
                          </p>
                          <p className="mb-4">
                            <strong>Commissioning & Testing:</strong> Facilitated system trials, monitored initial blending operations, and ensured compliance with baseline laboratory analyses for oil quality and viscosity consistency.
                          </p>
                          <p className="mb-4">
                            <strong>Crew Training & Knowledge Transfer:</strong> Conducted training sessions for onboard engineers on BOB operation, troubleshooting, and maintenance, including the use of the SEA-Mate B3000 blender and XRF analyzer.
                          </p>
                          <p className="mb-4">
                            <strong>Risk Management & Contingency Planning:</strong> Identified potential operational risks such as oil contamination, incorrect additive mixing, and system malfunctions, and developed mitigation strategies.
                          </p>
                          <p>
                            The project was successfully completed within the planned timeframe, ensuring full operational readiness of the BOB system. The implementation resulted in cost savings through less expensive fuel bunkers and in-house system to mix the oil, reduced waste disposal, and improved engine efficiency, reinforcing Maersk's sustainability and fuel efficiency goals.
                          </p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;