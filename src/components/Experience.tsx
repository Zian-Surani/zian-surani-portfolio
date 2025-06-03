
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
      { threshold: 0.3 }
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
    <section id="experience" ref={sectionRef} className="py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 md:mb-16 ${isVisible ? 'stagger-in animate' : 'stagger-in'}`}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            From academic excellence to industry experience, my journey spans diverse domains in AI, cybersecurity, and entrepreneurship.
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {experiences.map((exp, index) => {
            const IconComponent = getIconForType(exp.type);
            return (
              <div
                key={index}
                className={`glass rounded-xl p-6 md:p-8 hover:glow transition-all duration-500 cursor-pointer ${
                  isVisible ? 'stagger-in animate' : 'stagger-in'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => setSelectedExperience(index)}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-blue-400 font-semibold text-lg mb-2">{exp.company}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        {exp.cgpa && (
                          <div className="flex items-center space-x-1">
                            <span className="text-green-400 font-semibold">CGPA: {exp.cgpa}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="glass px-3 py-1 rounded-full text-sm text-blue-400">
                      {exp.type}
                    </span>
                    <span className="text-blue-400 font-medium flex items-center space-x-1 hover:text-blue-300 transition-colors">
                      <span>View Details</span>
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {exp.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Experience Modal */}
        {selectedExperience !== null && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6">
            <div className="glass max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl">
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                      {experiences[selectedExperience].title}
                    </h3>
                    <p className="text-blue-400 font-semibold text-lg">
                      {experiences[selectedExperience].company}
                    </p>
                  </div>
                  <button 
                    onClick={() => setSelectedExperience(null)}
                    className="text-gray-400 hover:text-white text-2xl"
                  >
                    ×
                  </button>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-6 text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>{experiences[selectedExperience].duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5" />
                    <span>{experiences[selectedExperience].location}</span>
                  </div>
                  <span className="glass px-3 py-1 rounded-full text-sm text-blue-400 w-fit">
                    {experiences[selectedExperience].type}
                  </span>
                  {experiences[selectedExperience].cgpa && (
                    <span className="text-green-400 font-semibold">
                      CGPA: {experiences[selectedExperience].cgpa}
                    </span>
                  )}
                </div>
                
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-white mb-4">Overview</h4>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    {experiences[selectedExperience].details}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Key Achievements</h4>
                  <ul className="space-y-3">
                    {experiences[selectedExperience].achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm md:text-base">{achievement}</span>
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
