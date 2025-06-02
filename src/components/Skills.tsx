
import { useState, useEffect, useRef } from 'react';
import { Brain, Code, Database, Cloud, Cpu, Zap } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      skills: [
        { name: "Deep Learning", level: 95 },
        { name: "Neural Networks", level: 92 },
        { name: "Computer Vision", level: 88 },
        { name: "NLP", level: 85 },
        { name: "Reinforcement Learning", level: 80 }
      ]
    },
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 88 },
        { name: "C++", level: 85 },
        { name: "Java", level: 82 },
        { name: "R", level: 78 }
      ]
    },
    {
      icon: Database,
      title: "Data & Analytics",
      skills: [
        { name: "Data Science", level: 90 },
        { name: "Statistical Analysis", level: 88 },
        { name: "Big Data", level: 85 },
        { name: "Data Visualization", level: 87 },
        { name: "ETL Processes", level: 83 }
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 88 },
        { name: "Kubernetes", level: 82 },
        { name: "CI/CD", level: 85 },
        { name: "MLOps", level: 87 }
      ]
    },
    {
      icon: Cpu,
      title: "Specialized AI",
      skills: [
        { name: "Neuromorphic Computing", level: 90 },
        { name: "Edge AI", level: 85 },
        { name: "Quantum ML", level: 75 },
        { name: "Federated Learning", level: 80 },
        { name: "AutoML", level: 88 }
      ]
    },
    {
      icon: Zap,
      title: "Innovation & Research",
      skills: [
        { name: "Research Methodology", level: 92 },
        { name: "Technical Writing", level: 88 },
        { name: "Innovation Strategy", level: 90 },
        { name: "Project Management", level: 85 },
        { name: "Team Leadership", level: 87 }
      ]
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
    <section id="skills" ref={sectionRef} className="py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 md:mb-16 ${isVisible ? 'stagger-in animate' : 'stagger-in'}`}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Core Expertise
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Technical competencies spanning AI research, software development, and innovation leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div
                key={categoryIndex}
                className={`glass rounded-xl p-6 md:p-8 ${
                  isVisible ? 'stagger-in animate' : 'stagger-in'
                }`}
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4 md:space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium text-sm md:text-base">{skill.name}</span>
                        <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2 md:h-2.5 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
