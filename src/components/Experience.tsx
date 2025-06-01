
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, TrendingUp, ExternalLink, Briefcase, Rocket } from 'lucide-react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTab, setSelectedTab] = useState('work');
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const workExperiences = [
    {
      id: 'nit-intern',
      title: "AI and Automation Intern",
      company: "National Institute of Technology, Tiruchirappalli",
      period: "Jun 2025 – Jul 2025",
      location: "Tiruchirappalli, India",
      type: "Internship",
      description: "Contributed to AI and robotics research in industrial automation. Developed simulation tools and automation logic for testbeds.",
      achievements: [
        "Contributed to AI and robotics research in industrial automation",
        "Developed simulation tools and automation logic for testbeds",
        "Engaged in collaborative research on reinforcement learning and control systems"
      ],
      technologies: ["Python", "TensorFlow", "Robotics", "AI", "Automation"],
      color: "from-cyan-400 to-blue-500"
    },
    {
      id: 'remote-cto',
      title: "AI Research Engineer Intern",
      company: "Remote CTO",
      period: "Dec 2024 – Jan 2025",
      location: "Remote",
      type: "Internship",
      description: "Conducted research on emerging AI technologies and optimized machine learning models for improved performance.",
      achievements: [
        "Conducted research on emerging AI technologies",
        "Optimized machine learning models for improved performance",
        "Collaborated with cross-functional teams to integrate AI innovations into products"
      ],
      technologies: ["Python", "Machine Learning", "AI Research", "Model Optimization"],
      color: "from-green-400 to-emerald-500"
    },
    {
      id: 'palo-alto',
      title: "Cybersecurity Virtual Intern",
      company: "Palo Alto Networks (AICTE & EduSkills)",
      period: "Jan 2025 – Mar 2025",
      location: "Virtual",
      type: "Virtual Internship",
      description: "Completed a 10-week virtual internship focusing on cybersecurity concepts and network defense strategies.",
      achievements: [
        "Completed 10-week virtual internship in cybersecurity",
        "Gained hands-on experience with real-world applications of cybersecurity practices",
        "Applied cybersecurity practices to real-world scenarios"
      ],
      technologies: ["Network Security", "Cybersecurity", "Defense Strategies"],
      color: "from-purple-400 to-pink-500"
    },
    {
      id: 'google-android',
      title: "Android Developer Virtual Intern",
      company: "Google for Developers (AICTE & EduSkills)",
      period: "Oct 2024 – Dec 2024",
      location: "Virtual",
      type: "Virtual Internship",
      description: "Completed a 10-week virtual internship in Android development with outstanding performance.",
      achievements: [
        "Achieved Grade 'O' (Outstanding) with 90-100% performance",
        "Enhanced knowledge and skills in mobile app development",
        "Completed comprehensive Android development curriculum"
      ],
      technologies: ["Android Studio", "Java", "Kotlin", "Mobile Development"],
      color: "from-orange-400 to-red-500"
    }
  ];

  const entrepreneurialVentures = [
    {
      id: 'flabebe',
      title: "Co-founder & CEO",
      company: "Flabebe Designs Pvt. Ltd.",
      period: "Mar 2024 – Present",
      location: "Gujarat, India",
      type: "Entrepreneurship",
      description: "Built Flabebe into a digital solutions company offering services in branding, design, media production, and strategic communications.",
      achievements: [
        "Launched over 20 client projects across fashion, education, and technology sectors",
        "Established strong market presence in Gujarat and South India",
        "Led operations, client acquisition, and creative direction",
        "Coordinated design teams and streamlined client workflows"
      ],
      technologies: ["Design Systems", "Branding", "Media Production", "Strategic Communications"],
      color: "from-pink-400 to-rose-500"
    },
    {
      id: 'xiogonal',
      title: "CTO & Co-founder",
      company: "Xiogonal Pvt. Ltd.",
      period: "Mar 2024 – Present",
      location: "India",
      type: "Entrepreneurship",
      description: "Shaping the company's technological backbone with focus on smart infrastructure solutions and data-driven automation.",
      achievements: [
        "Oversaw architecture of digital tools for smart infrastructure solutions",
        "Built scalable backend systems and managed cloud deployments",
        "Led R&D in smart city technologies",
        "Bridged data-driven automation with real-world applications"
      ],
      technologies: ["Cloud Architecture", "IoT", "Smart City Tech", "Backend Systems"],
      color: "from-blue-400 to-indigo-500"
    },
    {
      id: 'reliarch',
      title: "Founder & Sustainability Technologist",
      company: "Reliarch",
      period: "Apr 2024 – Present",
      location: "India",
      type: "Entrepreneurship",
      description: "Forward-thinking venture championing sustainable architectural practices and promoting bio-conservation through intelligent design.",
      achievements: [
        "Leading multidisciplinary teams in designing green buildings and energy-efficient habitats",
        "Integrating AI and IoT to model energy usage and optimize water harvesting systems",
        "Collaborating with architects, civil engineers, and environmentalists",
        "Redefining sustainability benchmarks in residential and institutional infrastructure"
      ],
      technologies: ["AI", "IoT", "Sustainable Design", "Energy Modeling", "Green Architecture"],
      color: "from-green-400 to-teal-500"
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

  const currentExperiences = selectedTab === 'work' ? workExperiences : entrepreneurialVentures;

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'stagger-in animate' : 'stagger-in'}`}>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            From research and development to entrepreneurial ventures, building the future through AI, innovation, and sustainable technology.
          </p>
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="glass p-2 rounded-xl border border-cyan-500/20">
              <button
                onClick={() => setSelectedTab('work')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedTab === 'work'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'text-gray-400 hover:text-cyan-400'
                }`}
              >
                <Briefcase className="w-5 h-5" />
                <span>Work Experience</span>
              </button>
              <button
                onClick={() => setSelectedTab('entrepreneurship')}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedTab === 'entrepreneurship'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'text-gray-400 hover:text-cyan-400'
                }`}
              >
                <Rocket className="w-5 h-5" />
                <span>Entrepreneurial Ventures</span>
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500" />
          
          <div className="space-y-12">
            {currentExperiences.map((exp, index) => (
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
