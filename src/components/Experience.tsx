
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, TrendingUp, ExternalLink } from 'lucide-react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const experiences = [
    {
      id: 'ai-research-scientist',
      title: "AI Research Scientist",
      company: "TechVanguard Labs",
      period: "2023 - Present",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Leading cutting-edge research in computer vision and deep learning architectures. Published 12+ papers in top-tier conferences.",
      achievements: [
        "Developed novel neural architecture achieving 15% improvement in image classification",
        "Led team of 8 researchers on autonomous vehicle perception systems",
        "Secured $2.5M in research funding from NSF and industry partners"
      ],
      technologies: ["PyTorch", "TensorFlow", "CUDA", "OpenCV", "Python"],
      color: "from-cyan-400 to-blue-500"
    },
    {
      id: 'founder-cto',
      title: "Founder & CTO",
      company: "Kisan Mithran",
      period: "2022 - Present",
      location: "Remote",
      type: "Startup",
      description: "Building AI-powered agricultural solutions to revolutionize farming practices and increase crop yields through intelligent automation.",
      achievements: [
        "Raised $1.2M seed funding from prominent VCs",
        "Deployed solutions across 500+ farms in rural India",
        "Achieved 40% increase in crop yield for partner farmers"
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS", "IoT"],
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Senior ML Engineer",
      company: "DataFlow Dynamics",
      period: "2021 - 2023",
      location: "Boston, MA",
      type: "Full-time",
      description: "Architected and deployed large-scale machine learning systems processing 10M+ daily transactions for financial services.",
      achievements: [
        "Built real-time fraud detection system with 99.7% accuracy",
        "Reduced model inference time by 60% through optimization",
        "Mentored 5 junior engineers and established ML best practices"
      ],
      technologies: ["Scikit-learn", "Apache Spark", "Docker", "Kubernetes", "PostgreSQL"],
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Research Assistant",
      company: "MIT Computer Science Lab",
      period: "2020 - 2021",
      location: "Cambridge, MA",
      type: "Research",
      description: "Conducted research in reinforcement learning and robotics under Prof. Jane Smith. Focus on autonomous navigation systems.",
      achievements: [
        "Co-authored 4 papers in ICRA and NeurIPS conferences",
        "Developed robot navigation algorithm with 95% success rate",
        "Won Best Paper Award at ICRA 2021"
      ],
      technologies: ["ROS", "Python", "C++", "Gazebo", "TensorFlow"],
      color: "from-orange-400 to-red-500"
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

  const handleExperienceClick = (id: string) => {
    navigate(`/experience/${id}`);
  };

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'stagger-in animate' : 'stagger-in'}`}>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Battle History
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Each mission completed, each challenge conquered. A timeline of digital warfare and innovation mastery.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-start cursor-pointer ${
                  isVisible ? 'slide-in-right animate' : 'slide-in-right'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => handleExperienceClick(exp.id)}
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 bg-gradient-to-r ${exp.color} rounded-full border-4 border-black z-10`} />
                
                {/* Experience card */}
                <div className="ml-20 glass p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 w-full group hover:scale-105">
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {exp.title}
                      </h3>
                      <h4 className="text-xl text-cyan-400 font-semibold mb-2">{exp.company}</h4>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <div className="flex items-center space-x-2 text-gray-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-400 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exp.color} text-white`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                  
                  <div className="mb-6">
                    <h5 className="text-white font-semibold mb-3 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2 text-cyan-400" />
                      Key Achievements
                    </h5>
                    <ul className="space-y-2">
                      {exp.achievements.slice(0, 2).map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-400 text-sm flex items-start">
                          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="glass px-3 py-1 rounded-full text-xs text-cyan-400 border border-cyan-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {exp.technologies.length > 3 && (
                        <span className="text-xs text-gray-500">+{exp.technologies.length - 3} more</span>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 text-cyan-400 group-hover:text-blue-400 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">View Details</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
