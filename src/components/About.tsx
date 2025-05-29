
import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'AI', color: 'from-blue-400 to-blue-600', delay: '0s' },
    { name: 'ML', color: 'from-purple-400 to-purple-600', delay: '0.2s' },
    { name: 'Automation', color: 'from-green-400 to-green-600', delay: '0.4s' },
    { name: 'Startups', color: 'from-orange-400 to-orange-600', delay: '0.6s' },
    { name: 'Research', color: 'from-pink-400 to-pink-600', delay: '0.8s' },
    { name: 'Computer Vision', color: 'from-cyan-400 to-cyan-600', delay: '1s' }
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
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <h3 className="font-display text-2xl font-bold mb-8 text-center text-white">Core Expertise</h3>
                <div className="relative w-80 h-80 mx-auto">
                  {skills.map((skill, index) => {
                    const angle = (index * 60) * (Math.PI / 180);
                    const radius = 120;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    
                    return (
                      <div
                        key={skill.name}
                        className={`absolute w-20 h-20 rounded-full bg-gradient-to-r ${skill.color} 
                          flex items-center justify-center text-white font-medium text-sm 
                          hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg
                          ${isVisible ? 'animate-pulse' : ''}`}
                        style={{
                          left: `calc(50% + ${x}px - 40px)`,
                          top: `calc(50% + ${y}px - 40px)`,
                          animationDelay: skill.delay,
                        }}
                      >
                        <span className="text-center leading-tight">{skill.name}</span>
                      </div>
                    );
                  })}
                  
                  {/* Center node */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center rotate-animation">
                    <div className="w-8 h-8 bg-white rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
