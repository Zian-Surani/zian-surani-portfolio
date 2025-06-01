
import { useEffect, useRef, useState } from 'react';
import { Rocket, Users, TrendingUp, Globe, Award, Building } from 'lucide-react';

const Startup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedVenture, setSelectedVenture] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const startups = [
    {
      name: "Flabebe Designs Pvt. Ltd.",
      tagline: "Digital Solutions & Creative Excellence",
      description: "Built Flabebe into a comprehensive digital solutions company offering services in branding, design, media production, and strategic communications across multiple industry sectors.",
      stage: "Active",
      founded: "2024",
      employees: "15+",
      projects: "20+",
      impact: "Multi-sector presence",
      technologies: ["Design Systems", "Branding", "Media Production", "Strategic Communications"],
      achievements: [
        "Launched over 20 client projects across fashion, education, and technology sectors",
        "Established strong market presence in Gujarat and South India",
        "Led operations, client acquisition, and creative direction",
        "Coordinated design teams and streamlined client workflows"
      ],
      metrics: [
        { label: "Client Projects", value: "20+", icon: Globe },
        { label: "Team Members", value: "15+", icon: Users },
        { label: "Market Regions", value: "2", icon: Building },
        { label: "Industry Sectors", value: "3+", icon: TrendingUp }
      ],
      color: "from-pink-400 to-rose-500",
      detailedContent: "As Co-founder and CEO of Flabebe Designs, I transformed a creative vision into a thriving digital solutions company. We specialize in comprehensive branding strategies, cutting-edge design solutions, multimedia production, and strategic communications. Our work spans across fashion brands seeking distinctive visual identities, educational institutions requiring modern digital presence, and technology companies needing sophisticated brand positioning. I personally led the development of our proprietary design methodology that reduces project timelines by 40% while maintaining premium quality standards. The company has successfully established partnerships with major clients across Gujarat and South India, with our creative solutions being featured in multiple industry publications."
    },
    {
      name: "Xiogonal Pvt. Ltd.",
      tagline: "Smart Infrastructure Solutions",
      description: "Shaping technological backbone with focus on smart infrastructure solutions, scalable backend systems, and data-driven automation for modern urban challenges.",
      stage: "Growth",
      founded: "2024",
      employees: "12",
      projects: "8+",
      impact: "Smart city integration",
      technologies: ["Cloud Architecture", "IoT", "Smart City Tech", "Backend Systems", "Data Analytics"],
      achievements: [
        "Oversaw architecture of digital tools for smart infrastructure solutions",
        "Built scalable backend systems and managed cloud deployments",
        "Led R&D in smart city technologies",
        "Bridged data-driven automation with real-world applications"
      ],
      metrics: [
        { label: "Infrastructure Projects", value: "8+", icon: Building },
        { label: "Tech Team", value: "12", icon: Users },
        { label: "Smart Solutions", value: "5", icon: Globe },
        { label: "Automation Rate", value: "75%", icon: TrendingUp }
      ],
      color: "from-blue-400 to-indigo-500",
      detailedContent: "As CTO and Co-founder of Xiogonal, I'm pioneering the next generation of smart infrastructure solutions. Our platform integrates IoT sensors, machine learning algorithms, and cloud computing to create intelligent urban ecosystems. We've developed proprietary algorithms for traffic optimization that have reduced congestion by 30% in pilot implementations. Our smart waste management system uses predictive analytics to optimize collection routes, reducing operational costs by 45%. The company's flagship product, the Urban Intelligence Platform, provides real-time insights for city planners and municipal authorities, enabling data-driven decision making for sustainable urban development."
    },
    {
      name: "Reliarch",
      tagline: "Sustainable Architecture & Bio-Conservation",
      description: "Forward-thinking venture championing sustainable architectural practices and promoting bio-conservation through intelligent design and green technology integration.",
      stage: "Innovation",
      founded: "2024",
      employees: "10",
      projects: "6+",
      impact: "Eco-friendly design",
      technologies: ["AI", "IoT", "Sustainable Design", "Energy Modeling", "Green Architecture", "Bio-Conservation"],
      achievements: [
        "Leading multidisciplinary teams in designing green buildings and energy-efficient habitats",
        "Integrating AI and IoT to model energy usage and optimize water harvesting systems",
        "Collaborating with architects, civil engineers, and environmentalists",
        "Redefining sustainability benchmarks in residential and institutional infrastructure"
      ],
      metrics: [
        { label: "Green Projects", value: "6+", icon: Building },
        { label: "Expert Team", value: "10", icon: Users },
        { label: "Energy Efficiency", value: "60%", icon: TrendingUp },
        { label: "Carbon Reduction", value: "40%", icon: Globe }
      ],
      color: "from-green-400 to-teal-500",
      detailedContent: "Reliarch represents my vision for the future of sustainable architecture. As Founder and Sustainability Technologist, I've assembled a multidisciplinary team of architects, environmental engineers, and AI specialists to revolutionize how we design and construct buildings. Our AI-powered energy modeling system predicts and optimizes building performance before construction begins, resulting in 60% greater energy efficiency compared to traditional designs. We've pioneered the integration of vernacular architecture principles with modern smart building technologies, creating structures that are both culturally authentic and environmentally responsible. Our water harvesting optimization algorithms have helped reduce water consumption by 50% in pilot residential complexes, while our bio-conservation planning tools ensure minimal ecological disruption during construction."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="startup" ref={sectionRef} className="py-20 px-6 bg-black/40">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'stagger-in animate' : 'stagger-in'}`}>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Venture Forge
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Building tomorrow's solutions today. Each startup is a weapon forged in the fires of innovation, 
            designed to solve real-world problems with cutting-edge technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {startups.map((startup, index) => (
            <div
              key={index}
              className={`glass p-8 rounded-3xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 group ${
                isVisible ? 'slide-in-left animate' : 'slide-in-left'
              }`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <Rocket className={`w-8 h-8 bg-gradient-to-r ${startup.color} p-1.5 rounded-lg text-white`} />
                        <h3 className="font-display text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {startup.name}
                        </h3>
                      </div>
                      <p className="text-cyan-400 text-lg font-semibold mb-4">{startup.tagline}</p>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <span className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${startup.color} text-white`}>
                        {startup.stage}
                      </span>
                      <span className="text-gray-400 text-sm">Founded {startup.founded}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed mb-6">{startup.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <Award className="w-4 h-4 mr-2 text-cyan-400" />
                      Key Achievements
                    </h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {startup.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="text-gray-400 text-sm flex items-start">
                          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {startup.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="glass px-3 py-1 rounded-full text-xs text-cyan-400 border border-cyan-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Metrics */}
                <div className="space-y-6">
                  <h4 className="text-white font-semibold text-lg">Impact Metrics</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {startup.metrics.map((metric, metricIndex) => (
                      <div 
                        key={metricIndex}
                        className="glass p-4 rounded-xl text-center border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300"
                      >
                        <metric.icon className={`w-6 h-6 mx-auto mb-2 text-transparent bg-gradient-to-r ${startup.color} bg-clip-text`} />
                        <div className={`text-2xl font-bold bg-gradient-to-r ${startup.color} bg-clip-text text-transparent`}>
                          {metric.value}
                        </div>
                        <div className="text-gray-400 text-xs">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="glass p-4 rounded-xl border border-cyan-500/20">
                    <div className="text-center">
                      <div className="text-gray-400 text-sm mb-1">Team Size</div>
                      <div className="text-xl font-bold text-white">{startup.employees}</div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setSelectedVenture(index)}
                    className={`w-full bg-gradient-to-r ${startup.color} text-white font-medium py-3 rounded-xl hover:scale-105 transition-all duration-300`}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Venture Details Modal */}
        {selectedVenture !== null && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6">
            <div className="glass max-w-4xl w-full max-h-[80vh] overflow-y-auto rounded-2xl">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display text-3xl font-bold text-white">
                    {startups[selectedVenture].name}
                  </h3>
                  <button 
                    onClick={() => setSelectedVenture(null)}
                    className="text-gray-400 hover:text-white text-3xl font-bold"
                  >
                    ×
                  </button>
                </div>
                
                <div className={`h-4 bg-gradient-to-r ${startups[selectedVenture].color} rounded-full mb-6`} />
                
                <p className="text-gray-300 leading-relaxed text-lg mb-8">
                  {startups[selectedVenture].detailedContent}
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {startups[selectedVenture].technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="glass px-3 py-2 rounded-full text-sm text-cyan-400">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-3">Key Metrics</h4>
                    <div className="space-y-2">
                      {startups[selectedVenture].metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="flex justify-between">
                          <span className="text-gray-400">{metric.label}:</span>
                          <span className="text-cyan-400 font-medium">{metric.value}</span>
                        </div>
                      ))}
                    </div>
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
