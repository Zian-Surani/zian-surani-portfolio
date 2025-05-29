
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, TrendingUp, ExternalLink } from 'lucide-react';

const ExperienceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const experiences = {
    'ai-research-scientist': {
      title: "AI Research Scientist",
      company: "TechVanguard Labs",
      period: "2023 - Present",
      location: "San Francisco, CA",
      type: "Full-time",
      color: "from-cyan-400 to-blue-500",
      description: "Leading cutting-edge research in computer vision and deep learning architectures. Published 12+ papers in top-tier conferences including CVPR, ICCV, and NeurIPS.",
      detailedDescription: `As an AI Research Scientist at TechVanguard Labs, I spearhead innovative research projects that push the boundaries of artificial intelligence and computer vision. My work focuses on developing novel neural architectures and optimization techniques that achieve state-of-the-art performance on challenging real-world problems.

      My research contributions span multiple domains including autonomous vehicle perception, medical image analysis, and robotic vision systems. I lead a diverse team of researchers and collaborate with industry partners to translate cutting-edge research into practical applications.`,
      responsibilities: [
        "Design and implement novel deep learning architectures for computer vision tasks",
        "Lead research projects from conception to publication in top-tier conferences",
        "Collaborate with engineering teams to deploy research prototypes into production",
        "Mentor junior researchers and PhD students on advanced ML techniques",
        "Secure research funding through grant proposals and industry partnerships",
        "Present research findings at international conferences and workshops"
      ],
      achievements: [
        "Developed novel neural architecture achieving 15% improvement in image classification accuracy",
        "Led team of 8 researchers on autonomous vehicle perception systems",
        "Secured $2.5M in research funding from NSF and industry partners",
        "Published 12+ papers in CVPR, ICCV, NeurIPS with 500+ citations",
        "Won Best Paper Award at CVPR 2023 for work on efficient neural architectures",
        "Filed 8 patents for novel computer vision algorithms"
      ],
      technologies: ["PyTorch", "TensorFlow", "CUDA", "OpenCV", "Python", "C++", "Docker", "Kubernetes"],
      publications: [
        "EfficientVision: Lightweight Neural Architectures for Real-time Object Detection (CVPR 2023)",
        "Adaptive Learning Rates for Vision Transformers (NeurIPS 2023)",
        "Multi-Modal Fusion for Autonomous Driving (ICCV 2023)"
      ]
    },
    'founder-cto': {
      title: "Founder & CTO",
      company: "Kisan Mithran",
      period: "2022 - Present",
      location: "Remote",
      type: "Startup",
      color: "from-green-400 to-emerald-500",
      description: "Building AI-powered agricultural solutions to revolutionize farming practices and increase crop yields through intelligent automation.",
      detailedDescription: `As Founder and CTO of Kisan Mithran, I'm building the future of agriculture through AI-powered solutions. Our platform combines computer vision, IoT sensors, and predictive analytics to help farmers optimize crop yields, reduce resource consumption, and make data-driven decisions.

      The journey began with recognizing the massive potential for technology to transform traditional farming practices. I've built a team of engineers, data scientists, and agricultural experts to create solutions that are both technologically advanced and practically applicable for farmers across different scales of operation.`,
      responsibilities: [
        "Define technical vision and product roadmap for AI-agricultural platform",
        "Lead engineering team of 15+ developers and data scientists",
        "Design scalable cloud infrastructure handling 1M+ daily IoT sensor readings",
        "Develop computer vision models for crop health monitoring and pest detection",
        "Manage partnerships with agricultural universities and government agencies",
        "Oversee fundraising efforts and investor relations"
      ],
      achievements: [
        "Raised $1.2M seed funding from prominent VCs including AgTech Ventures",
        "Deployed solutions across 500+ farms in rural India covering 10,000+ acres",
        "Achieved 40% average increase in crop yield for partner farmers",
        "Built IoT network processing 1M+ sensor readings daily",
        "Developed mobile app with 5,000+ active farmer users",
        "Established partnerships with 3 major seed companies"
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS", "IoT", "TensorFlow", "OpenCV", "GraphQL"],
      impact: [
        "500+ farms using our technology",
        "40% average yield increase",
        "30% reduction in water usage",
        "50% decrease in pesticide usage",
        "$2M+ additional income generated for farmers"
      ]
    }
    // Add more experiences here...
  };

  const experience = experiences[id as keyof typeof experiences];

  if (!experience) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Experience Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="glass px-6 py-3 rounded-lg text-cyan-400 hover:glow transition-all"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Header */}
      <div className="sticky top-0 z-40 glass border-b border-cyan-500/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </button>
          <div className="font-display text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            ZS
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Experience Header */}
        <div className="mb-12">
          <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${experience.color} text-white text-sm font-medium mb-4`}>
            {experience.type}
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            {experience.title}
          </h1>
          <h2 className="text-2xl text-cyan-400 font-semibold mb-6">{experience.company}</h2>
          
          <div className="flex flex-wrap gap-6 text-gray-400">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>{experience.period}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="glass p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">About This Role</h3>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {experience.detailedDescription}
              </p>
            </div>

            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 mr-3 text-cyan-400" />
                Key Responsibilities
              </h3>
              <ul className="space-y-3">
                {experience.responsibilities.map((responsibility, index) => (
                  <li key={index} className="text-gray-300 flex items-start">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-4 flex-shrink-0" />
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            {/* Achievements */}
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4">Key Achievements</h3>
              <ul className="space-y-3">
                {experience.achievements.map((achievement, index) => (
                  <li key={index} className="text-gray-400 text-sm flex items-start">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="glass px-3 py-1 rounded-full text-xs text-cyan-400 border border-cyan-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Publications/Impact */}
            {experience.publications && (
              <div className="glass p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Key Publications</h3>
                <ul className="space-y-2">
                  {experience.publications.map((pub, index) => (
                    <li key={index} className="text-gray-400 text-sm flex items-start">
                      <ExternalLink className="w-3 h-3 mt-1 mr-2 flex-shrink-0 text-cyan-400" />
                      {pub}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {experience.impact && (
              <div className="glass p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-white mb-4">Impact & Results</h3>
                <ul className="space-y-2">
                  {experience.impact.map((item, index) => (
                    <li key={index} className="text-gray-400 text-sm flex items-start">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetail;
