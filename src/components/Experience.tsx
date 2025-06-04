import { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, ExternalLink, Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      title: "B.Tech in Computer Science and Engineering (AI & ML)",
      company: "SRM Institute of Science and Technology, Tiruchirappalli",
      location: "Tiruchirappalli, Tamil Nadu",
      duration: "Aug 2023 – Present",
      type: "Education",
      cgpa: "9.7",
      description: "Pursuing Bachelor of Technology in Computer Science and Engineering with specialization in Artificial Intelligence and Machine Learning. Maintaining exceptional academic performance with CGPA 9.7.",
      details: "Currently pursuing B.Tech in Computer Science and Engineering with specialization in AI & ML at SRM Institute of Science and Technology, Tiruchirappalli. The program focuses on advanced topics in artificial intelligence, machine learning, deep learning, neural networks, and their practical applications. Maintaining an outstanding CGPA of 9.7, demonstrating consistent academic excellence and deep understanding of complex AI/ML concepts. The curriculum includes hands-on experience with cutting-edge technologies, research methodologies, and industry-relevant projects that prepare students for leadership roles in the AI revolution.",
      achievements: [
        "Maintaining exceptional CGPA of 9.7",
        "Specializing in AI & ML technologies",
        "Active participation in research projects",
        "Leadership roles in student organizations"
      ]
    },
    {
      title: "AI and Automation Intern",
      company: "National Institute of Technology, Tiruchirappalli",
      location: "Tiruchirappalli, Tamil Nadu",
      duration: "Jun 2025 – Jul 2025",
      type: "Research Internship",
      description: "Contributing to AI and robotics research in industrial automation, developing simulation tools and automation logic for testbeds.",
      details: "Engaged in cutting-edge research at NIT Tiruchirappalli, focusing on AI and robotics applications in industrial automation. Contributed to the development of sophisticated simulation tools and automation logic for experimental testbeds. Actively participated in collaborative research projects exploring reinforcement learning algorithms and advanced control systems. This experience provided deep insights into the practical applications of AI in industrial settings and the development of intelligent automation solutions that can revolutionize manufacturing and production processes.",
      achievements: [
        "Contributed to AI and robotics research in industrial automation",
        "Developed simulation tools and automation logic for testbeds",
        "Engaged in collaborative research on reinforcement learning",
        "Worked on advanced control systems development"
      ]
    },
    {
      title: "AI Research Engineer Intern",
      company: "Remote CTO",
      location: "Remote",
      duration: "Dec 2024 – Jan 2025",
      type: "Industry Research",
      description: "Conducted research on emerging AI technologies and optimized machine learning models for improved performance.",
      details: "Worked as an AI Research Engineer Intern at Remote CTO, focusing on cutting-edge research in emerging AI technologies. Conducted comprehensive studies on the latest developments in artificial intelligence and their potential applications. Optimized machine learning models to achieve improved performance metrics and efficiency. Collaborated with cross-functional teams to integrate AI innovations into existing products and develop new AI-powered solutions. This role provided valuable experience in translating research findings into practical applications and working in a fast-paced, innovation-driven environment.",
      achievements: [
        "Conducted research on emerging AI technologies",
        "Optimized machine learning models for improved performance",
        "Collaborated with cross-functional teams on AI integration",
        "Contributed to AI innovation and product development"
      ]
    },
    {
      title: "Cybersecurity Virtual Intern",
      company: "Palo Alto Networks (AICTE & EduSkills)",
      location: "Virtual",
      duration: "Jan 2025 – Mar 2025",
      type: "Virtual Internship",
      description: "Completed a 10-week virtual internship focusing on cybersecurity concepts and network defense strategies.",
      details: "Successfully completed a comprehensive 10-week virtual internship program with Palo Alto Networks through AICTE & EduSkills partnership. The program focused intensively on cybersecurity concepts, network defense strategies, and modern security frameworks. Gained hands-on experience with real-world applications of cybersecurity practices, including threat detection, incident response, and security architecture design. The internship provided deep insights into enterprise-level security solutions and the latest trends in cybersecurity, preparing for the growing intersection of AI and cybersecurity.",
      achievements: [
        "Completed 10-week intensive cybersecurity program",
        "Gained expertise in network defense strategies",
        "Hands-on experience with real-world security applications",
        "Understanding of enterprise security frameworks"
      ]
    },
    {
      title: "Android Developer Virtual Intern",
      company: "Google for Developers (AICTE & EduSkills)",
      location: "Virtual",
      duration: "Oct 2024 – Dec 2024",
      type: "Virtual Internship",
      description: "Completed a 10-week virtual internship in Android development, achieving Grade 'O' (Outstanding) with 90-100% performance.",
      details: "Successfully completed a rigorous 10-week virtual internship program in Android development through Google for Developers in partnership with AICTE & EduSkills. Achieved an Outstanding Grade 'O', reflecting exceptional performance in the 90-100% range. The program covered comprehensive Android development concepts, including modern Android architecture, Kotlin programming, UI/UX design principles, and mobile app optimization. Enhanced practical skills in mobile app development through hands-on projects and real-world application scenarios, gaining expertise that bridges mobile development with AI/ML applications.",
      achievements: [
        "Achieved Grade 'O' (Outstanding) - 90-100% performance",
        "Completed comprehensive 10-week Android development program",
        "Enhanced mobile app development skills",
        "Gained expertise in modern Android architecture and Kotlin"
      ]
    },
    {
      title: "President",
      company: "Entrepreneurship Development Cell, SRM IST",
      location: "Tiruchirappalli, Tamil Nadu",
      duration: "Jul 2023 – Present",
      type: "Leadership Role",
      description: "Spearheading strategic direction and institutional entrepreneurship policy, organizing high-impact events and mentoring student startups.",
      details: "Leading the Entrepreneurship Development Cell at SRM Institute of Science and Technology as President, responsible for spearheading strategic direction and shaping institutional entrepreneurship policy. Organized numerous high-impact events, boot camps, and investor/startup meetups that have significantly enhanced the entrepreneurial ecosystem on campus. Actively mentor budding student-led startups, providing guidance on business development, strategy, and growth. Established valuable connections with incubators and accelerators, creating pathways for student ventures to access funding and mentorship. This leadership role has developed strong organizational, strategic planning, and team management skills while fostering innovation and entrepreneurship among peers.",
      achievements: [
        "Spearheaded strategic direction and entrepreneurship policy",
        "Organized high-impact events, boot camps, and investor meetups",
        "Mentored multiple student-led startups",
        "Established connections with incubators and accelerators"
      ]
    },
    {
      title: "NGO Volunteer – Elderly Digital Inclusion Program",
      company: "Independent NGO Work",
      location: "Ahmedabad, Gujarat",
      duration: "Jan 2022 – Present",
      type: "Volunteer Work",
      description: "Developing innovative gamified tools and mobile apps to improve cognitive engagement for the elderly.",
      details: "Actively volunteering in the Elderly Digital Inclusion Program, focusing on bridging the digital divide for senior citizens. Developed innovative gamified tools and mobile applications specifically designed to improve cognitive engagement and mental wellness for elderly individuals. Worked closely with various NGOs to design interactive platforms that promote mental health and cognitive stimulation through technology. Conducted numerous workshops to teach digital literacy to seniors, using specially designed user-friendly interfaces that accommodate age-related accessibility needs. This volunteer work combines technical skills with social impact, demonstrating commitment to using technology for positive social change and community development.",
      achievements: [
        "Developed gamified tools for elderly cognitive engagement",
        "Created mobile apps promoting mental wellness",
        "Designed interactive platforms for NGO partnerships",
        "Conducted digital literacy workshops for seniors"
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getIconForType = (type: string) => {
    switch (type) {
      case 'Education':
        return GraduationCap;
      default:
        return Briefcase;
    }
  };

  return (
    <section id="experience" ref={sectionRef} className="py-8 md:py-20 px-3 md:px-6 relative z-10 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-8 md:mb-16 ${isVisible ? 'stagger-in animate' : 'stagger-in'}`}>
          <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6 text-white px-2">
            Professional Journey
          </h2>
          <p className="text-base md:text-xl text-white max-w-3xl mx-auto px-2">
            From academic excellence to industry experience, my journey spans diverse domains in AI, cybersecurity, and entrepreneurship.
          </p>
        </div>

        <div className="space-y-4 md:space-y-8">
          {experiences.map((exp, index) => {
            const IconComponent = getIconForType(exp.type);
            return (
              <div
                key={index}
                className={`glass rounded-lg md:rounded-xl p-3 md:p-8 hover:glow transition-all duration-500 cursor-pointer border-2 border-white/30 ${
                  isVisible ? 'stagger-in animate' : 'stagger-in'
                }`}
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  background: 'rgba(0, 0, 0, 0.8)',
                  backdropFilter: 'blur(20px)'
                }}
                onClick={() => setSelectedExperience(index)}
              >
                <div className="flex flex-col space-y-3 md:space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-4 h-4 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-base md:text-2xl font-bold text-white mb-1 break-words leading-tight">
                        {exp.title}
                      </h3>
                      <p className="text-blue-300 font-semibold text-sm md:text-lg mb-2 break-words">{exp.company}</p>
                      <div className="flex flex-col space-y-1 md:space-y-2 text-xs md:text-sm text-white">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                          <span className="break-words">{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                          <span className="break-words">{exp.location}</span>
                        </div>
                        {exp.cgpa && (
                          <div className="flex items-center space-x-1">
                            <span className="text-green-300 font-semibold">CGPA: {exp.cgpa}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-3">
                    <p className="text-white leading-relaxed text-sm md:text-base">
                      {exp.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="glass px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm text-blue-300 border border-blue-300/30">
                        {exp.type}
                      </span>
                      <span className="text-blue-300 font-medium flex items-center space-x-1 hover:text-blue-200 transition-colors text-xs md:text-sm">
                        <span>View Details</span>
                        <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Experience Modal */}
        {selectedExperience !== null && (
          <div className="fixed inset-0 modal-backdrop z-50 flex items-center justify-center p-2 md:p-6"
               style={{ background: 'rgba(0, 0, 0, 0.95)', backdropFilter: 'blur(15px)' }}>
            <div className="modal-content max-w-4xl w-full max-h-[95vh] md:max-h-[90vh] overflow-y-auto rounded-xl md:rounded-2xl border-2 border-white/30"
                 style={{ background: 'rgba(0, 0, 0, 0.9)', backdropFilter: 'blur(25px)' }}>
              <div className="p-4 md:p-8">
                <div className="flex items-start justify-between mb-4 md:mb-6">
                  <div className="flex-1 pr-2 md:pr-4">
                    <h3 className="font-display text-lg md:text-3xl font-bold text-white mb-2 break-words leading-tight modal-text">
                      {experiences[selectedExperience].title}
                    </h3>
                    <p className="text-blue-300 font-semibold text-sm md:text-lg break-words modal-text">
                      {experiences[selectedExperience].company}
                    </p>
                  </div>
                  <button 
                    onClick={() => setSelectedExperience(null)}
                    className="text-white hover:text-gray-300 text-xl md:text-2xl flex-shrink-0 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center z-50"
                  >
                    ×
                  </button>
                </div>
                
                <div className="flex flex-col space-y-1 md:space-y-2 mb-4 md:mb-6 text-white text-sm md:text-base">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                    <span className="break-words modal-text">{experiences[selectedExperience].duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                    <span className="break-words modal-text">{experiences[selectedExperience].location}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="glass px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm text-blue-300 border border-blue-300/30">
                      {experiences[selectedExperience].type}
                    </span>
                    {experiences[selectedExperience].cgpa && (
                      <span className="text-green-300 font-semibold text-xs md:text-sm modal-text">
                        CGPA: {experiences[selectedExperience].cgpa}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="mb-6 md:mb-8">
                  <h4 className="text-base md:text-xl font-bold text-white mb-3 md:mb-4 modal-text">Overview</h4>
                  <p className="text-white leading-relaxed text-sm md:text-base modal-text">
                    {experiences[selectedExperience].details}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-base md:text-xl font-bold text-white mb-3 md:mb-4 modal-text">Key Achievements</h4>
                  <ul className="space-y-2 md:space-y-3">
                    {experiences[selectedExperience].achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start space-x-2 md:space-x-3">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-400 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
                        <span className="text-white text-sm md:text-base break-words modal-text">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
