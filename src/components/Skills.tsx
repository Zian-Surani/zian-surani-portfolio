
import { useEffect, useRef, useState } from 'react';
import { Brain, Code, Database, Cloud, Cpu, Zap } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      skills: [
        { name: "TensorFlow", level: 95 },
        { name: "PyTorch", level: 90 },
        { name: "Scikit-learn", level: 88 },
        { name: "OpenCV", level: 92 },
        { name: "Keras", level: 85 }
      ],
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 98 },
        { name: "JavaScript", level: 92 },
        { name: "TypeScript", level: 88 },
        { name: "C++", level: 85 },
        { name: "Java", level: 80 }
      ],
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Web Development",
      icon: Zap,
      skills: [
        { name: "React", level: 94 },
        { name: "Next.js", level: 90 },
        { name: "Node.js", level: 88 },
        { name: "FastAPI", level: 92 },
        { name: "GraphQL", level: 85 }
      ],
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "PostgreSQL", level: 88 },
        { name: "Redis", level: 85 },
        { name: "Elasticsearch", level: 82 },
        { name: "Neo4j", level: 78 }
      ],
      color: "from-orange-400 to-red-500"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "AWS", level: 92 },
        { name: "Docker", level: 90 },
        { name: "Kubernetes", level: 85 },
        { name: "CI/CD", level: 88 },
        { name: "Terraform", level: 80 }
      ],
      color: "from-blue-400 to-indigo-500"
    },
    {
      title: "Hardware & IoT",
      icon: Cpu,
      skills: [
        { name: "Arduino", level: 88 },
        { name: "Raspberry Pi", level: 85 },
        { name: "CUDA", level: 82 },
        { name: "Edge Computing", level: 80 },
        { name: "Embedded Systems", level: 78 }
      ],
      color: "from-yellow-400 to-orange-500"
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
    <section id="skills" ref={sectionRef} className="py-20 px-6 bg-black/40">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'stagger-in animate' : 'stagger-in'}`}>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Digital Arsenal
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Mastery forged through countless hours of practice, each skill honed to precision like a ninja's blade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`glass p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 group ${
                isVisible ? 'slide-in-left animate' : 'slide-in-left'
              }`}
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                      <span className="text-cyan-400 text-sm font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.1)}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
