import { ExternalLink, Github, Lightbulb, FileText, Book, Camera } from "lucide-react";
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
      featured: "M/V Santa Ines",
      type: "bob"
    },
    {
      title: "V.I.T. Retrofit",
      description: "Retrofitted auxiliary engines with pneumatic VIT systems, reducing NOx emissions by 15%, improving fuel efficiency, and ensuring IMO compliance.",
      tech: ["Emission Compliance", "System Retrofit", "Risk Management", "Stakeholder Management"],
      link: "#",
      github: "#",
      featured: "M/V Monte Olivia",
      type: "vit"
    },
    {
      title: "AI Vocab Coach – Telegram-Based Assistant",
      description: "Built a Telegram bot using no-code tools and GPT-4.1-nano to deliver daily vocabulary, track custom word lists, and generate real-time examples.",
      tech: ["AI Integration", "No-Code Automation", "Telegram Bot", "Language Learning"],
      link: "#",
      github: "#",
      featured: false,
      type: "ai"
    },
    {
      title: "DIY Sim Racing Cockpit",
      description: "Built a full-featured sim racing cockpit from scratch using wood — complete with a custom monitor mount, pedal base, and racing seat for full immersion.",
      tech: ["DIY Engineering", "Woodworking", "Sim Racing"],
      link: "#",
      github: "#",
      featured: false,
      type: "diy"
    }
  ];

  return (
    <section id="projects" className="section-base min-h-screen flex items-center relative">
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

      <div className="container mx-auto px-6 py-6 relative z-10">
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
                    {project.featured}
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
                {/* Coming Soon Dialog Component */}
                {(project.type === "bob" || project.type === "vit" || project.type === "ai") && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white"
                      >
                        <ExternalLink size={14} className="mr-2" />
                        {project.type === "ai" ? "Live Demo" : "Project Summary (PDF)"}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                            <ExternalLink className="w-4 h-4 text-white" />
                          </div>
                          <span>{project.type === "ai" ? "Live Demo" : "Project Summary"}</span>
                        </DialogTitle>
                      </DialogHeader>
                      <div className="p-6 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FileText className="w-8 h-8 text-cyan-400" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Coming Soon</h3>
                        <p className="text-muted-foreground text-sm">
                          This {project.type === "ai" ? "demo" : "document"} is currently being prepared and will be available shortly.
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                )}

                {/* Pictures Dialog for DIY project */}
                {project.type === "diy" && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white"
                      >
                        <Camera size={14} className="mr-2" />
                        Pictures
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                            <Camera className="w-4 h-4 text-white" />
                          </div>
                          <span>Project Gallery</span>
                        </DialogTitle>
                      </DialogHeader>
                      <div className="p-6 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Camera className="w-8 h-8 text-cyan-400" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Coming Soon</h3>
                        <p className="text-muted-foreground text-sm">
                          Project pictures are being curated and will be available shortly.
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                )}

                {/* Read More for BOB and VIT */}
                {(project.type === "bob" || project.type === "vit") && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-white/70 hover:text-white hover:bg-white/10"
                      >
                        <FileText size={14} className="mr-2" />
                        Read More
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>{project.title}</DialogTitle>
                      </DialogHeader>
                      <div className="p-4 text-sm leading-relaxed">
                        {project.type === "bob" ? (
                          <>
                            <p className="mb-4">
                              Project BOB aimed to install and commission an onboard oil blending system that enabled vessels to produce their own cylinder lubrication oil by blending system oil with additives. This initiative was designed to reduce operational costs, minimize waste, and enhance engine performance. I played a key role in overseeing the installation, commissioning, and validation of the BOB system while ensuring its seamless integration with vessel operations. My key responsibilities included:
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
                          </>
                        ) : (
                          <>
                            <p className="mb-4">
                              The VIT Retrofit project focused on upgrading the Variable Injection Timing (VIT) system on auxiliary engines to enhance operational efficiency, ensure compliance with IMO NOx emission regulations, and extend the lifecycle of key components. The existing electric VIT system was replaced with a pneumatic VIT system, mitigating risks associated with system obsolescence and improving overall engine performance.
                            </p>
                            <p className="mb-4">
                              As an Operations Engineer, I was responsible for overseeing the planning, execution, and coordination of the retrofit across two diesel auxiliary engines while ensuring minimal disruption to vessel operations.
                            </p>
                            <p className="mb-4"><strong>My key responsibilities included:</strong></p>
                            <p className="mb-4">
                              <strong>Stakeholder Coordination:</strong><br />
                              Collaborated with Di Tech ApS, Maersk Fleet Management, and onboard engineers to align schedules, secure approvals, and ensure smooth execution.
                            </p>
                            <p className="mb-4">
                              <strong>Risk Management & Contingency Planning:</strong><br />
                              Identified and mitigated operational risks, ensuring auxiliary engines were available in standby mode to prevent blackouts and delays.
                            </p>
                            <p className="mb-4">
                              <strong>Project Execution & Monitoring:</strong><br />
                              Supervised the installation of pneumatic VIT components, including cabling, air supply retrofits, and system integration with SaCoS engine control. Ensured performance validation through pre and post-installation tests.
                            </p>
                            <p className="mb-4">
                              <strong>Compliance & Documentation:</strong><br />
                              Verified adherence to IMO NOx emission standards and MARPOL Annex VI regulations. Maintained detailed records of installation, testing, and performance benchmarks.
                            </p>
                            <p>
                              The project successfully retrofitted VIT systems on the auxiliary engines within the planned timeframe, reducing fuel consumption, optimizing injection timing, and enhancing engine reliability. The retrofit also ensured compliance with emission standards, mitigating the risks of regulatory non-compliance and excessive engine wear.
                            </p>
                          </>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
                )}

                {/* Documentation for AI project */}
                {project.type === "ai" && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-white/70 hover:text-white hover:bg-white/10"
                      >
                        <Book size={14} className="mr-2" />
                        Documentation
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                            <Book className="w-4 h-4 text-white" />
                          </div>
                          <span>Documentation</span>
                        </DialogTitle>
                      </DialogHeader>
                      <div className="p-6 text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Book className="w-8 h-8 text-cyan-400" />
                        </div>
                        <h3 className="text-lg font-semibold mb-2">Coming Soon</h3>
                        <p className="text-muted-foreground text-sm">
                          This documentation is currently being prepared and will be available shortly.
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
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