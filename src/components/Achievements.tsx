
import { useEffect, useRef, useState } from 'react';
import { Trophy, Medal, Star, Award, Crown, Target } from 'lucide-react';

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const achievements = [
    {
      title: "Gold Medal - Research Day 2025",
      category: "Research Excellence",
      description: "Gold Medal in Computing and Technology at SRM IST for the paper 'Bitwise Parsing for Precision in 1-Bit LLM'.",
      date: "2025",
      icon: Trophy,
      color: "from-yellow-400 to-orange-500",
      level: "University"
    },
    {
      title: "Best Paper Award",
      category: "Research Recognition",
      description: "Best Paper Award for research on neuromorphic computing and SNNs for AI energy-efficient computation.",
      date: "2025",
      icon: Crown,
      color: "from-purple-400 to-pink-500",
      level: "Academic"
    },
    {
      title: "Top 5000 Finalist - Build with India",
      category: "Hackathon Achievement",
      description: "Top 5000 finalist in 'Build with India' hackathon organized by Google, showcasing innovative solutions.",
      date: "2024",
      icon: Award,
      color: "from-green-400 to-emerald-500",
      level: "National"
    },
    {
      title: "100+ Professional Certifications",
      category: "Professional Development",
      description: "Completed over 100 professional certifications in AI, ML, cloud computing, and software development across various platforms.",
      date: "2022 - Present",
      icon: Medal,
      color: "from-blue-400 to-indigo-500",
      level: "Professional"
    },
    {
      title: "EDC President",
      category: "Leadership Excellence",
      description: "President of Entrepreneurship Development Cell at SRM IST, leading strategic initiatives and mentoring startups.",
      date: "2023 - Present",
      icon: Target,
      color: "from-cyan-400 to-blue-500",
      level: "Leadership"
    },
    {
      title: "Academic Excellence",
      category: "Academic Achievement",
      description: "Maintaining CGPA of 9.7 in B.Tech Computer Science and Engineering (AI & ML) at SRM IST.",
      date: "2023 - Present",
      icon: Star,
      color: "from-orange-400 to-red-500",
      level: "Academic"
    }
  ];

  const stats = [
    { label: "CGPA", value: "9.7", description: "Academic excellence" },
    { label: "Publications", value: "6+", description: "Research papers" },
    { label: "Certifications", value: "100+", description: "Professional credentials" },
    { label: "Leadership", value: "2+", description: "Years as EDC President" }
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
    <section id="achievements" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'stagger-in animate' : 'stagger-in'}`}>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Achievements
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Recognition earned through dedication to AI research, academic excellence, and leadership in innovation.
          </p>
        </div>

        {/* Stats Overview */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 ${isVisible ? 'slide-in-left animate' : 'slide-in-left'}`}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="glass p-6 rounded-xl text-center border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-white font-medium text-sm mb-1">{stat.label}</div>
              <div className="text-gray-400 text-xs">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`glass p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 group hover:scale-105 ${
                isVisible ? 'stagger-in animate' : 'stagger-in'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${achievement.color} text-white`}>
                    {achievement.level}
                  </span>
                  <div className="text-gray-400 text-sm mt-1">{achievement.date}</div>
                </div>
              </div>
              
              <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {achievement.title}
              </h3>
              
              <div className="text-cyan-400 text-sm font-medium mb-3">
                {achievement.category}
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {achievement.description}
              </p>
              
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-xs">Achievement Unlocked</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3 h-3 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
