import { useState, useEffect, useRef } from 'react';
import { Rocket, Users, TrendingUp, ExternalLink, Building, Cpu, Leaf } from 'lucide-react';

const Startup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedVenture, setSelectedVenture] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const ventures = [
    {
      name: "Flabebe Designs Pvt. Ltd.",
      role: "Co-founder & CEO",
      period: "March 2024 – Present",
      icon: Building,
      description: "Digital solutions company specializing in branding, design, media production, and strategic communications",
      details: "As Co-founder and CEO of Flabebe Designs, I built a comprehensive digital solutions company that serves clients across fashion, education, and technology sectors. Under my leadership, we have successfully launched over 20 client projects, establishing a strong market presence in Gujarat and South India. I spearheaded the development of our service portfolio, coordinated multidisciplinary design teams, and implemented streamlined client workflows that improved project delivery times by 40%. My focus on sustainable growth using cost-effective strategies has enabled Flabebe to achieve consistent profitability while maintaining high-quality standards.",
      impact: [
        "Launched 20+ successful client projects",
        "Established market presence across Gujarat and South India",
        "Built and led multidisciplinary design teams",
        "Implemented efficient client workflow systems",
        "Achieved sustainable growth with cost-effective strategies"
      ],
      technologies: ["Design Systems", "Brand Strategy", "Digital Marketing", "Project Management"],
      status: "Active"
    },
    {
      name: "Xiogonal Pvt. Ltd.",
      role: "CTO & Co-founder",
      period: "March 2024 – Present",
      icon: Cpu,
      description: "Technology company developing smart infrastructure solutions and data-driven automation platforms",
      details: "At Xiogonal, I serve as CTO and Co-founder, responsible for shaping the company's technological backbone and driving innovation in smart infrastructure solutions. My work encompasses overseeing the architecture of digital tools that serve smart city technologies, building scalable backend systems, and managing cloud deployments. I lead R&D initiatives in smart city technologies, logistics automation, civic utilities optimization, and home automation systems. Xiogonal aims to bridge the gap between data-driven automation and real-world applications, creating intelligent systems that improve urban living and operational efficiency.",
      impact: [
        "Designed scalable backend systems for smart infrastructure",
        "Led R&D in smart city and IoT technologies",
        "Developed automation solutions for logistics and civic utilities",
        "Managed cloud deployments and system architecture",
        "Established technological frameworks for smart home solutions"
      ],
      technologies: ["IoT", "Cloud Computing", "Smart Cities", "Automation", "Data Analytics"],
      status: "Active"
    },
    {
      name: "Reliarch",
      role: "Founder & Sustainability Technologist",
      period: "April 2024 – Present",
      icon: Leaf,
      description: "Sustainable architecture venture promoting bio-conservation through intelligent design and green building solutions",
      details: "Reliarch represents my commitment to sustainable development and environmental conservation through innovative architectural practices. As Founder and Sustainability Technologist, I lead multidisciplinary teams in designing green buildings, energy-efficient habitats, and digital platforms for ecological planning. We integrate AI and IoT technologies to model energy usage, optimize water harvesting systems, and minimize material waste in construction projects. Our approach emphasizes eco-sensitive site planning and the integration of vernacular architecture with modern efficiency tools. Under my leadership, Reliarch collaborates with architects, civil engineers, and environmentalists to redefine sustainability benchmarks in residential and institutional infrastructure.",
      impact: [
        "Developed AI-powered energy modeling systems",
        "Created IoT-based water harvesting optimization",
        "Designed sustainable building solutions reducing waste by 30%",
        "Established partnerships with architects and environmental experts",
        "Pioneered integration of vernacular and modern architecture"
      ],
      technologies: ["AI/ML", "IoT", "Sustainable Design", "Energy Modeling", "Environmental Analytics"],
      status: "Active"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="startup" ref={sectionRef} className="py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 md:mb-16 ${isVisible ? 'stagger-in animate' : 'stagger-in'}`}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white px-4">
            Venture Forge
          </h2>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto px-4">
            Building the future through innovative ventures that bridge technology, sustainability, and human-centered design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {ventures.map((venture, index) => {
            const IconComponent = venture.icon;
            return (
              <div
                key={index}
                className={`glass rounded-xl p-6 md:p-8 hover:glow transition-all duration-500 cursor-pointer transform hover:scale-105 border-2 border-white/30 ${
                  isVisible ? 'stagger-in animate' : 'stagger-in'
                }`}
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  background: 'rgba(0, 0, 0, 0.8)',
                  backdropFilter: 'blur(20px)'
                }}
                onClick={() => setSelectedVenture(index)}
              >
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div>
                    <span className={`glass px-3 py-1 rounded-full text-xs md:text-sm border border-green-400/30 ${
                      venture.status === 'Active' ? 'text-green-300' : 'text-yellow-400'
                    }`}>
                      {venture.status}
                    </span>
                  </div>
                </div>
                
                <h3 className="font-display text-lg md:text-xl font-bold text-white mb-2">
                  {venture.name}
                </h3>
                
                <p className="text-blue-300 font-semibold mb-2 text-sm md:text-base">{venture.role}</p>
                <p className="text-white text-sm mb-4">{venture.period}</p>
                
                <p className="text-white leading-relaxed mb-6 text-sm md:text-base">
                  {venture.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Rocket className="w-4 h-4 text-blue-400" />
                    <span className="text-blue-300 text-sm font-medium">Venture Details</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white hover:text-blue-400 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Venture Modal */}
        {selectedVenture !== null && (
          <div className="fixed inset-0 modal-backdrop z-50 flex items-center justify-center p-4 md:p-6"
               style={{ background: 'rgba(0, 0, 0, 0.95)', backdropFilter: 'blur(15px)' }}>
            <div className="modal-content max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border-2 border-white/30"
                 style={{ background: 'rgba(0, 0, 0, 0.9)', backdropFilter: 'blur(25px)' }}>
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2 modal-text">
                      {ventures[selectedVenture].name}
                    </h3>
                    <p className="text-blue-300 font-semibold text-lg modal-text">
                      {ventures[selectedVenture].role}
                    </p>
                    <p className="text-white modal-text">{ventures[selectedVenture].period}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedVenture(null)}
                    className="text-white hover:text-gray-300 text-2xl z-50"
                  >
                    ×
                  </button>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-white mb-4 modal-text">About the Venture</h4>
                  <p className="text-white leading-relaxed text-sm md:text-base modal-text">
                    {ventures[selectedVenture].details}
                  </p>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-white mb-4 modal-text">Key Impact & Achievements</h4>
                  <ul className="space-y-3">
                    {ventures[selectedVenture].impact.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-white text-sm md:text-base modal-text">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-white mb-4 modal-text">Technologies & Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {ventures[selectedVenture].technologies.map((tech, idx) => (
                      <span key={idx} className="glass px-3 py-1 rounded-full text-sm text-blue-300 border border-blue-300/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Startup;
