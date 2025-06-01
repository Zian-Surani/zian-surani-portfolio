
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
    <section id="about" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'stagger-in animate' : 'stagger-in'}`}>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            The Neural Core
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            At the intersection of artificial intelligence and human ingenuity, I build systems that learn, adapt, and transform industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`${isVisible ? 'slide-in-left animate' : 'slide-in-left'}`}>
            <div className="glass p-8 rounded-2xl">
              <h3 className="font-display text-2xl font-bold mb-6 text-white">About Me</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a passionate AI researcher and entrepreneur with deep expertise in machine learning, 
                computer vision, and automation systems. My work spans from academic research to 
                real-world applications, always with a focus on creating meaningful impact.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                As President of the Entrepreneurship Development Cell at SRM IST, I lead teams in developing 
                innovative solutions that bridge the gap between cutting-edge research and practical applications. 
                My approach combines rigorous scientific methodology with entrepreneurial thinking.
              </p>
              <div className="flex flex-wrap gap-2">
                {['AI Researcher', 'EDC President', 'Gold Medalist', 'Tech Innovator'].map((tag, index) => (
                  <span key={index} className="glass px-3 py-1 rounded-full text-sm text-blue-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className={`${isVisible ? 'slide-in-right animate' : 'slide-in-right'}`}>
            <div className="glass p-8 rounded-2xl">
              <h3 className="font-display text-2xl font-bold mb-8 text-center text-white">Core Expertise</h3>
              <div className="space-y-6">
                {expertiseAreas.map((area, index) => (
                  <div
                    key={area.name}
                    className={`relative p-6 rounded-xl bg-gradient-to-r ${area.color} bg-opacity-10 border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer group backdrop-blur-sm`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${area.color} flex items-center justify-center mr-4 shadow-lg`}>
                          <area.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-lg">{area.name}</h4>
                          <p className="text-gray-300 text-sm leading-relaxed mt-1">
                            {area.description}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white mb-1">{area.level}%</div>
                        <div className="text-xs text-gray-400">Proficiency</div>
                      </div>
                    </div>
                    
                    <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${area.color} transition-all duration-1000 ${isVisible ? 'shadow-lg' : ''}`}
                        style={{ 
                          width: isVisible ? `${area.level}%` : '0%',
                          boxShadow: `0 0 20px rgba(${area.color.includes('blue') ? '59, 130, 246' : area.color.includes('purple') ? '147, 51, 234' : area.color.includes('cyan') ? '6, 182, 212' : area.color.includes('green') ? '34, 197, 94' : area.color.includes('orange') ? '251, 146, 60' : '236, 72, 153'}, 0.5)`
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
