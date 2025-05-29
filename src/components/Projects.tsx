
import { useEffect, useRef, useState } from 'react';
import { Github, Star, Code } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Kisan Mithran",
      description: "AI-powered agricultural platform for crop monitoring and yield optimization",
      image: "/placeholder.svg",
      tags: ["React", "Python", "TensorFlow", "Computer Vision"],
      github: "https://github.com",
      demo: "https://demo.com",
      details: "Complete agricultural automation platform using computer vision for crop health monitoring, predictive analytics for yield optimization, and IoT integration for real-time field data collection."
    },
    {
      title: "Neural Vision API",
      description: "High-performance computer vision API for real-time image processing",
      image: "/placeholder.svg",
      tags: ["FastAPI", "PyTorch", "Docker", "AWS"],
      github: "https://github.com",
      demo: "https://demo.com",
      details: "Scalable computer vision API serving thousands of requests per second, featuring real-time object detection, image classification, and custom model deployment capabilities."
    },
    {
      title: "AutoML Pipeline",
      description: "Automated machine learning pipeline for rapid model deployment",
      image: "/placeholder.svg",
      tags: ["Python", "MLOps", "Kubernetes", "MongoDB"],
      github: "https://github.com",
      demo: "https://demo.com",
      details: "End-to-end automated machine learning pipeline that handles data preprocessing, model selection, hyperparameter tuning, and deployment with minimal human intervention."
    },
    {
      title: "Smart IoT Dashboard",
      description: "Real-time analytics dashboard for IoT sensor networks",
      image: "/placeholder.svg",
      tags: ["Next.js", "WebSocket", "InfluxDB", "Grafana"],
      github: "https://github.com",
      demo: "https://demo.com",
      details: "Real-time monitoring and analytics platform for IoT networks, featuring live data visualization, anomaly detection, and predictive maintenance algorithms."
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
    <section id="projects" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'stagger-in animate' : 'stagger-in'}`}>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Projects & Code
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From research prototypes to production systems, here's a showcase of my technical work and innovations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`glass rounded-xl overflow-hidden hover:glow transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                isVisible ? 'stagger-in animate' : 'stagger-in'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => setSelectedProject(index)}
            >
              <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <Code className="w-16 h-16 text-blue-400" />
              </div>
              
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="glass px-2 py-1 rounded text-xs text-blue-400">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    <button className="flex items-center space-x-1 text-gray-400 hover:text-blue-400 transition-colors">
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-400 hover:text-blue-400 transition-colors">
                      <Star className="w-4 h-4" />
                      <span className="text-sm">Demo</span>
                    </button>
                  </div>
                  <span className="text-sm text-blue-400 font-medium">View Details →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject !== null && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6">
            <div className="glass max-w-2xl w-full max-h-[80vh] overflow-y-auto rounded-2xl">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display text-2xl font-bold text-white">
                    {projects[selectedProject].title}
                  </h3>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white text-2xl"
                  >
                    ×
                  </button>
                </div>
                
                <div className="h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Code className="w-20 h-20 text-blue-400" />
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {projects[selectedProject].details}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[selectedProject].tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="glass px-3 py-1 rounded-full text-sm text-blue-400">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 glass px-4 py-2 rounded-lg hover:glow transition-all">
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </button>
                  <button className="flex items-center space-x-2 bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
                    <Star className="w-4 h-4" />
                    <span>Live Demo</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
