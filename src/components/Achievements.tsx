
import { useState, useEffect, useRef } from 'react';
import { Trophy, Award, Star, Target, Users, BookOpen } from 'lucide-react';

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const achievements = [
    {
      icon: Trophy,
      title: "100+ Professional Certifications",
      description: "Comprehensive certification portfolio covering AI, ML, cloud computing, and emerging technologies",
      category: "Certifications"
    },
    {
      icon: Award,
      title: "Research Excellence Award",
      description: "Recognition for outstanding contributions to neuromorphic computing research",
      category: "Academic"
    },
    {
      icon: Star,
      title: "Innovation Leadership",
      description: "Led 15+ successful innovation projects in AI and sustainable technology",
      category: "Leadership"
    },
    {
      icon: Target,
      title: "Startup Success",
      description: "Co-founded and scaled 3 successful ventures in technology and sustainability",
      category: "Entrepreneurship"
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Mentored 100+ students and professionals in AI/ML technologies",
      category: "Mentorship"
    },
    {
      icon: BookOpen,
      title: "Published Research",
      description: "Authored multiple papers in top-tier conferences and journals",
      category: "Publications"
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
    <section id="achievements" ref={sectionRef} className="py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 md:mb-16 ${isVisible ? 'stagger-in animate' : 'stagger-in'}`}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Milestones that reflect my commitment to excellence in AI research, innovation, and community impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={index}
                className={`glass rounded-xl p-6 md:p-8 hover:glow transition-all duration-500 transform hover:scale-105 ${
                  isVisible ? 'stagger-in animate' : 'stagger-in'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div>
                    <span className="glass px-3 py-1 rounded-full text-xs md:text-sm text-blue-400">
                      {achievement.category}
                    </span>
                  </div>
                </div>
                
                <h3 className="font-display text-lg md:text-xl font-bold text-white mb-3 md:mb-4">
                  {achievement.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
