
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
                As a startup founder, I've led teams in developing innovative solutions that bridge 
                the gap between cutting-edge research and practical applications. My approach combines 
                rigorous scientific methodology with entrepreneurial thinking.
              </p>
              <div className="flex flex-wrap gap-2">
                {['PhD Candidate', 'Startup Founder', 'AI Researcher', 'Tech Lead'].map((tag, index) => (
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
              <div className="grid grid-cols-2 gap-6">
                {expertiseAreas.map((area, index) => (
                  <div
                    key={area.name}
                    className={`relative p-4 rounded-xl bg-gradient-to-br ${area.color} bg-opacity-10 border border-white/10 hover:scale-105 transition-all duration-300 cursor-pointer group`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center mb-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${area.color} flex items-center justify-center mr-3`}>
                        <area.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm">{area.name}</h4>
                        <div className="w-full bg-gray-700 rounded-full h-1.5 mt-1">
                          <div 
                            className={`h-1.5 rounded-full bg-gradient-to-r ${area.color} transition-all duration-1000 ${isVisible ? 'animate-pulse' : ''}`}
                            style={{ width: isVisible ? `${area.level}%` : '0%' }}
                          />
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-300 transition-colors">
                      {area.description}
                    </p>
                    <div className="absolute top-2 right-2 text-xs text-gray-500 font-mono">
                      {area.level}%
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
