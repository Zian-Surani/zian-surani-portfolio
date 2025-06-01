
import { useEffect, useRef, useState } from 'react';
import { FileText, Star, ExternalLink } from 'lucide-react';

const Research = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const sectionRef = useRef<HTMLDivElement>(null);

  const filters = ['All', 'AI/ML', 'Blockchain', 'Neuromorphic', 'Web Development', 'SDG'];

  const papers = [
    {
      title: "Neuromorphic Computing – AI Models Using Spiking Neural Networks (SNNs) for Energy-Efficient Computation",
      category: "Neuromorphic",
      abstract: "Explores energy-efficient AI computation using spiking neural networks, mimicking biological neural processes for sustainable AI applications.",
      status: "Published",
      venue: "IEEE Conference 2024",
      citations: 67,
      award: "Best Paper Award"
    },
    {
      title: "Bitwise Parsing Using 1-bit LLM",
      category: "AI/ML",
      abstract: "Novel approach to large language model optimization using 1-bit parsing techniques for improved computational efficiency.",
      status: "Published",
      venue: "Research Day 2025, SRM IST",
      citations: 34,
      award: "Gold Medal Winner"
    },
    {
      title: "Decentralized Data Validation for Ethical AI Training",
      category: "AI/ML",
      abstract: "Framework for ensuring ethical AI training through decentralized validation mechanisms and transparent data governance.",
      status: "Published",
      venue: "AI Ethics Journal 2024",
      citations: 45
    },
    {
      title: "Blockchain-enabled Markov Decision Processes for Decentralized Supply Chains",
      category: "Blockchain",
      abstract: "Integration of blockchain technology with MDP for optimizing decentralized supply chain management and decision-making.",
      status: "Published",
      venue: "Blockchain Research 2024",
      citations: 28
    },
    {
      title: "SDG 4 Implementation: A Comprehensive Review of Progress, Challenges, and Strategies (2015–2025)",
      category: "SDG",
      abstract: "Comprehensive analysis of Sustainable Development Goal 4 implementation, examining educational progress and strategic recommendations.",
      status: "Published",
      venue: "Sustainability Journal 2024",
      citations: 52
    },
    {
      title: "Integrating Multi-Sensor Data with Layering Methods for Robust Autonomous Vehicle Navigation",
      category: "AI/ML",
      abstract: "Advanced sensor fusion techniques for improving autonomous vehicle navigation reliability and safety.",
      status: "Published",
      venue: "IEEE Xplore 2024",
      citations: 39
    },
    {
      title: "ConstructionHub.ai: DBMS-Based 2D Floorplan Generation Platform",
      category: "Web Development",
      abstract: "Web-based platform providing automated 2D floorplan generation and project management tools for the construction industry.",
      status: "Published",
      venue: "Tech Innovation 2024",
      citations: 23
    },
    {
      title: "SmartPaint & Home Management Platform for Architects",
      category: "Web Development",
      abstract: "Comprehensive digital platform for architects to manage paint selections, design planning, and property overviews.",
      status: "Published",
      venue: "Architecture Tech 2024",
      citations: 18
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
            Research & Publications
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Advancing the frontiers of AI, blockchain, and sustainable technology through rigorous research and innovative solutions.
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPapers.map((paper, index) => (
            <div
              key={index}
              className={`glass p-6 rounded-xl hover:glow transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                isVisible ? 'stagger-in animate' : 'stagger-in'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
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
              
              {paper.award && (
                <div className="mb-3">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-2 py-1 rounded-full text-xs font-bold">
                    🏆 {paper.award}
                  </span>
                </div>
              )}
              
              <h3 className="font-display text-lg font-bold text-white mb-3 leading-tight">
                {paper.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{paper.abstract}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-blue-400 text-sm font-medium">{paper.venue}</span>
                <div className="flex items-center space-x-2">
                  <span className="glass px-2 py-1 rounded text-xs text-gray-300">
                    {paper.category}
                  </span>
                  <ExternalLink className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
