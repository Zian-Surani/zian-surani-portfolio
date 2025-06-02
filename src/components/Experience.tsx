
import { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, ExternalLink, Briefcase } from 'lucide-react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      title: "Research Scholar",
      company: "Nirma University",
      location: "Ahmedabad, Gujarat",
      duration: "2023 - Present",
      type: "Academic Research",
      description: "Leading cutting-edge research in AI and machine learning with focus on neuromorphic computing and sustainable AI systems.",
      details: "As a Research Scholar at Nirma University, I have been at the forefront of artificial intelligence research, specializing in neuromorphic computing and energy-efficient AI systems. My research work includes developing novel spiking neural networks for low-power computation, investigating blockchain-based decentralized AI training methods, and advancing sustainable machine learning practices. I have collaborated with international research teams, published multiple papers in peer-reviewed journals, and presented findings at prestigious conferences. My work contributes to the development of next-generation AI systems that are both powerful and environmentally responsible.",
      achievements: [
        "Published research on Neuromorphic Computing using SNNs",
        "Developed energy-efficient AI computation models",
        "Collaborated on blockchain-enabled AI training systems",
        "Presented research at international conferences"
      ]
    },
    {
      title: "AI/ML Engineering Intern",
      company: "TechVantage Solutions",
      location: "Remote",
      duration: "2023 - 2024",
      type: "Industry Experience",
      description: "Developed and deployed machine learning models for enterprise clients, focusing on computer vision and natural language processing applications.",
      details: "During my internship at TechVantage Solutions, I gained hands-on experience in deploying AI solutions for real-world business challenges. I worked on developing computer vision systems for quality control in manufacturing, implemented natural language processing models for customer service automation, and optimized existing ML pipelines for better performance. My role involved collaborating with cross-functional teams, conducting data analysis, and ensuring the scalability and reliability of AI systems in production environments.",
      achievements: [
        "Developed CV systems improving quality control by 35%",
        "Implemented NLP models for automated customer service",
        "Optimized ML pipelines reducing inference time by 40%",
        "Contributed to 5+ client projects across different industries"
      ]
    },
    {
      title: "Technical Lead",
      company: "University Innovation Cell",
      location: "Nirma University",
      duration: "2022 - 2023",
      type: "Leadership Role",
      description: "Led technical initiatives and innovation projects, mentoring students in emerging technologies and research methodologies.",
      details: "As Technical Lead at the University Innovation Cell, I spearheaded multiple innovation initiatives and mentored fellow students in cutting-edge technologies. I organized technical workshops, hackathons, and research seminars, fostering a culture of innovation within the university. My responsibilities included evaluating project proposals, providing technical guidance for student-led research projects, and establishing partnerships with industry professionals. I also coordinated with faculty members to bridge the gap between academic learning and practical implementation.",
      achievements: [
        "Led 10+ innovation projects and workshops",
        "Mentored 50+ students in AI/ML technologies",
        "Organized university's first AI research symposium",
        "Established industry partnerships for student projects"
      ]
    },
    {
      title: "Freelance AI Developer",
      company: "Independent",
      location: "Remote",
      duration: "2022 - Present",
      type: "Freelance",
      description: "Providing AI consulting and development services to startups and enterprises, specializing in custom ML solutions.",
      details: "As a Freelance AI Developer, I have worked with diverse clients ranging from early-stage startups to established enterprises, delivering custom artificial intelligence solutions tailored to their specific needs. My services include developing machine learning models, implementing computer vision systems, creating chatbots and conversational AI, and providing AI strategy consulting. I have successfully completed projects in healthcare, e-commerce, agriculture, and fintech sectors, consistently delivering high-quality solutions that drive business value and innovation.",
      achievements: [
        "Completed 20+ successful AI projects",
        "Worked with clients across 5 different industries",
        "Delivered solutions improving efficiency by 50%+",
        "Maintained 100% client satisfaction rate"
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
    <section id="experience" ref={sectionRef} className="py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 md:mb-16 ${isVisible ? 'stagger-in animate' : 'stagger-in'}`}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            From academic research to industry applications, my journey spans diverse domains in AI and machine learning.
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {experiences.map((exp, index) => (
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
                    <Briefcase className="w-6 h-6 text-white" />
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
          ))}
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
