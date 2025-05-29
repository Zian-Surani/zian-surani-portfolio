
import { useEffect, useRef, useState } from 'react';

const TechStack = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const techCategories = [
    {
      title: "AI & ML Frameworks",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Keras"],
      color: "from-blue-400 to-blue-600",
      delay: "0s"
    },
    {
      title: "Web Development",
      skills: ["React", "Next.js", "TypeScript", "Node.js", "FastAPI"],
      color: "from-green-400 to-green-600",
      delay: "0.2s"
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "MLOps", "CI/CD"],
      color: "from-purple-400 to-purple-600",
      delay: "0.4s"
    },
    {
      title: "Data & Analytics",
      skills: ["MongoDB", "PostgreSQL", "Apache Spark", "Elasticsearch", "Redis"],
      color: "from-orange-400 to-orange-600",
      delay: "0.6s"
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
    <section ref={sectionRef} className="py-20 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'stagger-in animate' : 'stagger-in'}`}>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The tools and technologies I leverage to build intelligent systems and scalable solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`${isVisible ? 'slide-in-left animate' : 'slide-in-left'}`}
              style={{ animationDelay: category.delay }}
            >
              <div className="glass p-6 rounded-xl hover:glow transition-all duration-500">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                  <div className="w-6 h-6 bg-white rounded" />
                </div>
                
                <h3 className="font-display text-lg font-bold text-white mb-4 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center justify-between p-2 glass rounded-lg hover:bg-white/10 transition-all duration-300"
                    >
                      <span className="text-gray-300 text-sm">{skill}</span>
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
