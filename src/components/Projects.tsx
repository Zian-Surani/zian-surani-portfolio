
import { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink, Code, Smartphone, Globe, Calculator, Timer, Hash, Gamepad2, Building, ChefHat, MessageSquare, Leaf } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "Calculator",
      description: "A sleek and functional calculator with modern UI design",
      icon: Calculator,
      preview: "https://calcu-z.vercel.app/",
      github: "https://github.com/Zian-Surani/Calculator",
      tags: ["JavaScript", "CSS", "HTML", "Responsive Design"],
      details: "A fully functional calculator built with vanilla JavaScript featuring a clean, modern interface. Includes basic arithmetic operations, decimal support, and keyboard input functionality."
    },
    {
      title: "Animated Login Page",
      description: "Beautiful animated login interface with smooth transitions",
      icon: Smartphone,
      preview: "https://a-opal-mu.vercel.app/",
      github: "https://github.com/Zian-Surani/Animated-Login",
      tags: ["CSS Animations", "JavaScript", "UI/UX", "Frontend"],
      details: "An interactive login page featuring smooth CSS animations and transitions. Demonstrates advanced frontend skills with focus on user experience and visual appeal."
    },
    {
      title: "The Atom Table",
      description: "Interactive periodic table with detailed element information",
      icon: Hash,
      preview: "#",
      github: "https://github.com/Zian-Surani/Periodic-Table",
      tags: ["React", "Chemistry", "Educational", "Interactive"],
      details: "A comprehensive periodic table application providing detailed information about chemical elements. Features interactive element selection and educational content."
    },
    {
      title: "Matte Black Stopwatch",
      description: "Minimalist stopwatch with elegant dark design",
      icon: Timer,
      preview: "https://b-iota-neon.vercel.app/",
      github: "https://github.com/Zian-Surani/Stopwatch",
      tags: ["JavaScript", "CSS", "Time Management", "Minimalist Design"],
      details: "A precision stopwatch application with matte black aesthetic. Features start, stop, reset functionality with millisecond accuracy and clean user interface."
    },
    {
      title: "Tic Tac Toe Game",
      description: "Classic game with full black theme and smooth gameplay",
      icon: Gamepad2,
      preview: "https://c-eta-six.vercel.app/",
      github: "https://github.com/Zian-Surani/TicTacToe",
      tags: ["JavaScript", "Game Development", "Logic", "Interactive"],
      details: "A classic Tic Tac Toe game featuring elegant black theme design. Includes win detection, game reset functionality, and responsive design for all devices."
    },
    {
      title: "Construction Hub AI",
      description: "AI-powered platform for construction project management",
      icon: Building,
      preview: "#",
      github: "https://github.com/Zian-Surani/constructhub-ai",
      tags: ["AI", "Construction", "Management", "React", "Node.js"],
      details: "An intelligent construction management platform leveraging AI for project planning, resource optimization, and progress tracking. Features real-time collaboration tools and predictive analytics."
    },
    {
      title: "Recipe Website",
      description: "Comprehensive recipe collection with search and filtering",
      icon: ChefHat,
      preview: "#",
      github: "https://github.com/Zian-Surani/Recipe-website",
      tags: ["React", "Database", "Search", "Responsive"],
      details: "A full-featured recipe website with extensive search capabilities, ingredient filtering, and user-friendly recipe management. Includes nutritional information and cooking time estimates."
    },
    {
      title: "Wardrobe ChatBot",
      description: "AI-powered fashion assistant for outfit recommendations",
      icon: MessageSquare,
      preview: "#",
      github: "https://github.com/Zian-Surani/Wadrobe-Synthetic-ChatBot",
      tags: ["AI", "Fashion", "ChatBot", "Machine Learning"],
      details: "An intelligent fashion chatbot that provides personalized outfit recommendations based on user preferences, weather conditions, and occasion requirements using advanced AI algorithms."
    },
    {
      title: "Soil Monitor",
      description: "IoT-based soil monitoring system for agriculture",
      icon: Leaf,
      preview: "#",
      github: "https://github.com/Zian-Surani/Nasscom",
      tags: ["IoT", "Agriculture", "Sensors", "Data Analytics"],
      details: "A comprehensive soil monitoring solution using IoT sensors to track moisture, pH levels, and nutrient content. Features real-time data visualization and automated irrigation recommendations."
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
    <section id="projects" ref={sectionRef} className="py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 md:mb-16 ${isVisible ? 'stagger-in animate' : 'stagger-in'}`}>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Projects & Code
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            From research prototypes to production systems, here's a showcase of my technical work and innovations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={index}
                className={`glass rounded-xl overflow-hidden hover:glow transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                  isVisible ? 'stagger-in animate' : 'stagger-in'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProject(index)}
              >
                <div className="h-32 md:h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <IconComponent className="w-12 h-12 md:w-16 md:h-16 text-blue-400" />
                </div>
                
                <div className="p-4 md:p-6">
                  <h3 className="font-display text-lg md:text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm md:text-base">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
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
                      {project.preview !== "#" && (
                        <button className="flex items-center space-x-1 text-gray-400 hover:text-blue-400 transition-colors">
                          <ExternalLink className="w-4 h-4" />
                          <span className="text-sm">Live</span>
                        </button>
                      )}
                    </div>
                    <span className="text-sm text-blue-400 font-medium">View Details →</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Modal */}
        {selectedProject !== null && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6">
            <div className="glass max-w-2xl w-full max-h-[80vh] overflow-y-auto rounded-2xl">
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white">
                    {projects[selectedProject].title}
                  </h3>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white text-2xl"
                  >
                    ×
                  </button>
                </div>
                
                <div className="h-48 md:h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                  {React.createElement(projects[selectedProject].icon, { 
                    className: "w-16 h-16 md:w-20 md:h-20 text-blue-400" 
                  })}
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
                  {projects[selectedProject].details}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[selectedProject].tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="glass px-3 py-1 rounded-full text-sm text-blue-400">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <a 
                    href={projects[selectedProject].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 glass px-4 py-2 rounded-lg hover:glow transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </a>
                  {projects[selectedProject].preview !== "#" && (
                    <a 
                      href={projects[selectedProject].preview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
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
