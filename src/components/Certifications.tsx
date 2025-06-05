
import { useState, useEffect, useRef } from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const certifications = [
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      logo: "🔶",
      category: "Cloud Computing",
      description: "Foundational understanding of AWS Cloud services and architecture",
      link: "https://www.credly.com/users/zian-rajeshkumar-surani"
    },
    {
      name: "Google Cloud Digital Leader",
      issuer: "Google Cloud",
      date: "2024",
      logo: "🌐",
      category: "Cloud Computing",
      description: "Digital transformation with Google Cloud technologies",
      link: "https://www.credly.com/users/zian-rajeshkumar-surani"
    },
    {
      name: "Google Developer Profile",
      issuer: "Google",
      date: "2024",
      logo: "🎯",
      category: "Development",
      description: "Google Developer certification and profile verification",
      link: "https://g.dev/ZianSurani_SRM_Trichy"
    },
    {
      name: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      date: "2024",
      logo: "☁️",
      category: "Cloud Computing",
      description: "Core Azure services, solutions, and management tools",
      link: "https://www.credly.com/users/zian-rajeshkumar-surani"
    },
    {
      name: "Machine Learning Specialization",
      issuer: "Coursera",
      date: "2024",
      logo: "🧠",
      category: "AI & ML",
      description: "Comprehensive machine learning algorithms and applications",
      link: "https://www.linkedin.com/in/zian-surani/"
    },
    {
      name: "Deep Learning Specialization",
      issuer: "DeepLearning.AI",
      date: "2024",
      logo: "🤖",
      category: "AI & ML",
      description: "Neural networks, CNNs, RNNs, and deep learning frameworks",
      link: "https://www.linkedin.com/in/zian-surani/"
    },
    {
      name: "TensorFlow Developer Certificate",
      issuer: "TensorFlow",
      date: "2024",
      logo: "⚡",
      category: "AI & ML",
      description: "Building and training neural networks using TensorFlow",
      link: "https://www.credly.com/users/zian-rajeshkumar-surani"
    },
    {
      name: "Python for Data Science",
      issuer: "IBM",
      date: "2024",
      logo: "🐍",
      category: "Programming",
      description: "Data analysis and visualization using Python libraries",
      link: "https://www.credly.com/users/zian-rajeshkumar-surani"
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2024",
      logo: "⚛️",
      category: "Web Development",
      description: "Building modern web applications with React",
      link: "https://www.linkedin.com/in/zian-surani/"
    },
    {
      name: "Cybersecurity Fundamentals",
      issuer: "Cisco",
      date: "2024",
      logo: "🔐",
      category: "Security",
      description: "Network security principles and threat management",
      link: "https://www.credly.com/users/zian-rajeshkumar-surani"
    },
    {
      name: "Data Structures & Algorithms",
      issuer: "Stanford Online",
      date: "2024",
      logo: "📊",
      category: "Computer Science",
      description: "Advanced algorithms and data structure optimization",
      link: "https://www.linkedin.com/in/zian-surani/"
    },
    {
      name: "DevOps Foundation",
      issuer: "Linux Foundation",
      date: "2024",
      logo: "🔧",
      category: "DevOps",
      description: "CI/CD pipelines and containerization technologies",
      link: "https://www.linkedin.com/in/zian-surani/"
    },
    {
      name: "Blockchain Fundamentals",
      issuer: "University of Berkeley",
      date: "2024",
      logo: "⛓️",
      category: "Blockchain",
      description: "Distributed systems and cryptocurrency technologies",
      link: "https://www.linkedin.com/in/zian-surani/"
    }
  ];

  const categories = [...new Set(certifications.map(cert => cert.category))];

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

  const handleCertificateClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="certifications" ref={sectionRef} className="py-12 md:py-20 px-4 md:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 md:mb-16 ${isVisible ? 'stagger-in animate' : 'stagger-in'}`}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Professional Certifications
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            100+ certifications across AI, cloud computing, cybersecurity, and emerging technologies - 
            demonstrating continuous learning and expertise validation.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 md:mb-12">
          {categories.map((category, index) => (
            <span
              key={category}
              className={`glass px-4 py-2 rounded-full text-sm font-medium text-cyan-400 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 ${
                isVisible ? 'stagger-in animate' : 'stagger-in'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {category}
            </span>
          ))}
        </div>

        {/* Certifications grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              onClick={() => handleCertificateClick(cert.link)}
              className={`glass rounded-xl p-6 hover:glow transition-all duration-500 transform hover:scale-105 border border-white/10 hover:border-cyan-500/50 group cursor-pointer ${
                isVisible ? 'stagger-in animate' : 'stagger-in'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {cert.logo}
                </div>
                <div className="flex items-center text-xs text-gray-500 bg-gray-800/50 px-2 py-1 rounded-full">
                  <Calendar className="w-3 h-3 mr-1" />
                  {cert.date}
                </div>
              </div>

              <h3 className="font-bold text-white text-lg mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {cert.name}
              </h3>

              <p className="text-cyan-400 text-sm font-medium mb-2">
                {cert.issuer}
              </p>

              <span className="inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-medium mb-3">
                {cert.category}
              </span>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {cert.description}
              </p>

              <div className="flex items-center text-cyan-400 text-sm group-hover:text-white transition-colors duration-300">
                <Award className="w-4 h-4 mr-2" />
                <span className="font-medium">View Certificate</span>
                <ExternalLink className="w-3 h-3 ml-auto opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Summary stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 md:mt-16 ${isVisible ? 'stagger-in animate' : 'stagger-in'}`} style={{ animationDelay: '0.8s' }}>
          <div className="text-center glass rounded-xl p-6">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">100+</div>
            <div className="text-gray-400 text-sm">Total Certifications</div>
          </div>
          <div className="text-center glass rounded-xl p-6">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">{categories.length}</div>
            <div className="text-gray-400 text-sm">Technology Areas</div>
          </div>
          <div className="text-center glass rounded-xl p-6">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">2024</div>
            <div className="text-gray-400 text-sm">Latest Year</div>
          </div>
          <div className="text-center glass rounded-xl p-6">
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">Active</div>
            <div className="text-gray-400 text-sm">Learning Status</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
