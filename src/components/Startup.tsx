
import { useEffect, useRef, useState } from 'react';
import { Rocket, Users, TrendingUp, Globe, Award, DollarSign } from 'lucide-react';

const Startup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const startups = [
    {
      name: "Kisan Mithran",
      tagline: "AI-Powered Agricultural Revolution",
      description: "Transforming farming through intelligent automation, computer vision crop monitoring, and predictive analytics to help farmers increase yields and reduce costs.",
      stage: "Series A",
      founded: "2022",
      funding: "$1.2M",
      employees: "15+",
      users: "10K+",
      impact: "40% yield increase",
      technologies: ["Computer Vision", "IoT", "Machine Learning", "React Native", "AWS"],
      achievements: [
        "Deployed across 500+ farms in rural India",
        "Featured in TechCrunch and AgTech Magazine",
        "Winner of Global AgTech Innovation Award 2023",
        "Partnership with major agricultural cooperatives"
      ],
      metrics: [
        { label: "Active Farms", value: "500+", icon: Globe },
        { label: "Farmers Helped", value: "10K+", icon: Users },
        { label: "Yield Increase", value: "40%", icon: TrendingUp },
        { label: "Funding Raised", value: "$1.2M", icon: DollarSign }
      ],
      color: "from-green-400 to-emerald-500"
    },
    {
      name: "NeuralEdge Labs",
      tagline: "Edge AI for Everyone",
      description: "Democratizing edge AI deployment with our no-code platform that enables businesses to deploy machine learning models on edge devices without technical expertise.",
      stage: "Seed",
      founded: "2023",
      funding: "$500K",
      employees: "8",
      users: "2K+",
      impact: "80% faster deployment",
      technologies: ["TensorFlow Lite", "Edge Computing", "React", "Python", "Docker"],
      achievements: [
        "Reduced AI deployment time from weeks to hours",
        "Selected for Y Combinator W24 batch",
        "Partnerships with 3 major hardware manufacturers",
        "Published open-source edge AI framework"
      ],
      metrics: [
        { label: "Edge Devices", value: "5K+", icon: Globe },
        { label: "Developer Users", value: "2K+", icon: Users },
        { label: "Faster Deployment", value: "80%", icon: TrendingUp },
        { label: "Seed Funding", value: "$500K", icon: DollarSign }
      ],
      color: "from-purple-400 to-blue-500"
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
                  
                  <button className={`w-full bg-gradient-to-r ${startup.color} text-white font-medium py-3 rounded-xl hover:scale-105 transition-all duration-300`}>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Startup;
