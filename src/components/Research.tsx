
import { useEffect, useRef, useState } from 'react';
import { FileText, Star } from 'lucide-react';

const Research = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const sectionRef = useRef<HTMLDivElement>(null);

  const filters = ['All', 'Computer Vision', 'NLP', 'Robotics', 'ML'];

  const papers = [
    {
      title: "Deep Learning Approaches for Agricultural Automation",
      category: "Computer Vision",
      abstract: "Novel computer vision techniques for crop monitoring and yield prediction using deep neural networks.",
      status: "Published",
      venue: "ICML 2024",
      citations: 45
    },
    {
      title: "Reinforcement Learning in Autonomous Systems",
      category: "Robotics",
      abstract: "Advanced RL algorithms for decision-making in complex autonomous environments.",
      status: "Under Review",
      venue: "NeurIPS 2024",
      citations: 12
    },
    {
      title: "Natural Language Processing for Healthcare",
      category: "NLP",
      abstract: "Transformer-based models for medical text analysis and patient outcome prediction.",
      status: "Published",
      venue: "EMNLP 2023",
      citations: 78
    },
    {
      title: "Federated Learning in Edge Computing",
      category: "ML",
      abstract: "Distributed machine learning frameworks for privacy-preserving edge deployments.",
      status: "Published",
      venue: "ICLR 2024",
      citations: 34
    }
  ];

  const filteredPapers = selectedFilter === 'All' 
    ? papers 
    : papers.filter(paper => paper.category === selectedFilter);

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
    <section id="research" ref={sectionRef} className="py-20 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${isVisible ? 'stagger-in animate' : 'stagger-in'}`}>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Research Hub
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Exploring the frontiers of artificial intelligence through rigorous research and innovative applications.
          </p>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedFilter === filter
                    ? 'bg-blue-500 text-white'
                    : 'glass text-gray-300 hover:text-blue-400'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredPapers.map((paper, index) => (
            <div
              key={index}
              className={`glass p-6 rounded-xl hover:glow transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                isVisible ? 'stagger-in animate' : 'stagger-in'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <FileText className="w-6 h-6 text-blue-400" />
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    paper.status === 'Published' ? 'bg-green-500/20 text-green-400' : 'bg-orange-500/20 text-orange-400'
                  }`}>
                    {paper.status}
                  </span>
                </div>
                <div className="flex items-center space-x-1 text-yellow-400">
                  <Star className="w-4 h-4" />
                  <span className="text-sm">{paper.citations}</span>
                </div>
              </div>
              
              <h3 className="font-display text-xl font-bold text-white mb-2">
                {paper.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-3">{paper.abstract}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-blue-400 text-sm font-medium">{paper.venue}</span>
                <span className="glass px-2 py-1 rounded text-xs text-gray-300">
                  {paper.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
