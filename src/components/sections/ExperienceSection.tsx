import { MapPin, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Marine Operations Engineer (IV)",
      company: "Maersk A/S",
      location: "Copenhagen, Denmark",
      period: "2023 - Present",
      achievements: [
        "Led high-impact engineering projects, including fuel-saving retrofits and in-house oil blending systems — saving over $940K annually and reducing emissions by 15%",
        "Oversaw critical shipboard operations like $1.7M bunkering and emergency drill leadership for 20+ crew — maintaining zero safety incidents and full regulatory compliance",
        "Mentored cadets and improved safety culture as engine department Safety Rep and cadet-in-charge, contributing to a 100% issue resolution rate and producing future officers"
      ]
    },
    {
      title: "Junior Marine Engineer",
      company: "Maersk A/S",
      location: "Copenhagen, Denmark",
      period: "2021 - 2023",
      achievements: [
        "Prevented critical stockouts by managing 400+ spare parts through accurate consumption forecasting and ERP-driven inventory planning",
        "Improved performance tracking by creating Excel-based dashboards to analyze fuel efficiency, oil usage, and machinery trends across voyages",
        "Ensured dry dock readiness by forecasting resource needs and coordinating with vendors and contractors during pre-docking phases"
      ]
    }
  ];

  return (
    <section id="experience" className="section-mid min-h-screen flex items-center relative">
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience
          </h2>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">
            Navigating complex challenges across international maritime operations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-white/30"></div>

            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-blue-400 z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} ml-10 md:ml-0`}>
                  <div className="card-marine slide-in-view" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-white/80 font-medium">{exp.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 mb-4 text-white/70 text-sm">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-white/90 text-sm leading-relaxed flex">
                          <span className="text-cyan-300 mr-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;