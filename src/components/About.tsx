
import { useEffect, useRef, useState } from 'react';
import { Brain, Code, Rocket, Zap, Eye, Cpu } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const expertiseAreas = [
    { 
      name: 'Machine Learning', 
      icon: Brain, 
      color: 'from-blue-400 to-blue-600',
      description: 'Deep learning, neural networks, and advanced ML algorithms',
      level: 95
    },
    { 
      name: 'Computer Vision', 
      icon: Eye, 
      color: 'from-purple-400 to-purple-600',
      description: 'Object detection, image classification, and visual AI',
      level: 90
    },
    { 
      name: 'AI Research', 
      icon: Cpu, 
      color: 'from-cyan-400 to-cyan-600',
      description: 'Publishing papers, novel architectures, and innovation',
      level: 88
    },
    { 
      name: 'Full-Stack Dev', 
      icon: Code, 
      color: 'from-green-400 to-green-600',
      description: 'React, Node.js, cloud architecture, and scalable systems',
      level: 85
    },
    { 
      name: 'Startup Building', 
      icon: Rocket, 
      color: 'from-orange-400 to-orange-600',
      description: 'Product development, team leadership, and fundraising',
      level: 82
    },
    { 
      name: 'Innovation', 
      icon: Zap, 
      color: 'from-pink-400 to-pink-600',
      description: 'Creative problem solving and breakthrough thinking',
      level: 92
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
    <section id="about" ref={sectionRef} className="py-12 md:py-20 px-4 md:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 md:mb-16 ${isVisible ? 'stagger-in animate' : 'stagger-in'}`}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            The Neural Core
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            At the intersection of artificial intelligence and human ingenuity, I build systems that learn, adapt, and transform industries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className={`${isVisible ? 'slide-in-left animate' : 'slide-in-left'}`}>
            <div className="glass p-6 md:p-8 rounded-2xl border border-white/20">
              <h3 className="font-display text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white">About Me</h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                I'm a passionate AI researcher and entrepreneur with deep expertise in machine learning, 
                computer vision, and automation systems. My work spans from academic research to 
                real-world applications, always with a focus on creating meaningful impact.
              </p>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                As President of the Entrepreneurship Development Cell at SRM IST, I lead teams in developing 
                innovative solutions that bridge the gap between cutting-edge research and practical applications. 
                My approach combines rigorous scientific methodology with entrepreneurial thinking.
              </p>
              <div className="flex flex-wrap gap-2">
                {['AI Researcher', 'EDC President', 'Gold Medalist', 'Tech Innovator'].map((tag, index) => (
                  <span key={index} className="glass px-3 py-1 rounded-full text-xs md:text-sm text-blue-400 border border-blue-400/30">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className={`${isVisible ? 'slide-in-right animate' : 'slide-in-right'}`}>
            <div className="glass p-6 md:p-8 rounded-2xl border border-white/20">
              <h3 className="font-display text-xl md:text-2xl font-bold mb-6 md:mb-8 text-center text-white">Core Expertise</h3>
              <div className="space-y-4 md:space-y-6">
                {expertiseAreas.map((area, index) => (
                  <div
                    key={area.name}
                    className={`relative p-4 md:p-6 rounded-xl bg-gradient-to-r ${area.color} bg-opacity-10 border border-white/30 hover:border-white/50 transition-all duration-300 cursor-pointer group backdrop-blur-sm`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start justify-between mb-3 md:mb-4">
                      <div className="flex items-center flex-1">
                        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-r ${area.color} flex items-center justify-center mr-3 md:mr-4 shadow-lg flex-shrink-0`}>
                          <area.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-bold text-base md:text-lg">{area.name}</h4>
                          <p className="text-gray-300 text-xs md:text-sm leading-relaxed mt-1">
                            {area.description}
                          </p>
                        </div>
                      </div>
                      <div className="text-right ml-2 flex-shrink-0">
                        <div className="text-lg md:text-2xl font-bold text-white mb-1">{area.level}%</div>
                        <div className="text-xs text-gray-400">Proficiency</div>
                      </div>
                    </div>
                    
                    <div className="w-full bg-gray-700/50 rounded-full h-2 md:h-3 overflow-hidden">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${area.color} transition-all duration-1000 ${isVisible ? 'shadow-lg' : ''}`}
                        style={{ 
                          width: isVisible ? `${area.level}%` : '0%',
                          boxShadow: isVisible ? `0 0 20px rgba(${area.color.includes('blue') ? '59, 130, 246' : area.color.includes('purple') ? '147, 51, 234' : area.color.includes('cyan') ? '6, 182, 212' : area.color.includes('green') ? '34, 197, 94' : area.color.includes('orange') ? '251, 146, 60' : '236, 72, 153'}, 0.5)` : 'none'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
