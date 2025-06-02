
import { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-6 pt-20 relative overflow-hidden">
      {/* Content */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Profile Image */}
          <div className="mb-6 md:mb-8">
            <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 p-1 glow-pulse">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <span className="text-2xl md:text-3xl font-bold text-white">ZS</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-white via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Zian Rajeshkumar Surani
            </span>
          </h1>
          
          <div className="mb-6 md:mb-8">
            <p className="text-xl md:text-2xl lg:text-3xl text-cyan-400 font-semibold mb-2 md:mb-3">
              AI & ML Student • Research Scholar • Entrepreneur
            </p>
            <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed px-4">
              Pioneering the future of artificial intelligence through cutting-edge research in neuromorphic computing, 
              sustainable AI systems, and innovative solutions for real-world challenges. Currently pursuing B.Tech in AI & ML 
              while building the next generation of intelligent systems.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-8 md:mb-12 px-4">
            <a
              href="https://drive.google.com/file/d/1ovF3P2v4ZQRXVYqiLW-P28Mwl9HsiwS1/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              <span>Download CV</span>
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-cyan-400 text-cyan-400 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5" />
              <span>Get In Touch</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8 md:mb-12">
            <a 
              href="https://github.com/Zian-Surani" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Github className="w-6 h-6 md:w-8 md:h-8" />
            </a>
            <a 
              href="https://linkedin.com/in/zian-rajeshkumar-surani-125215195" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6 md:w-8 md:h-8" />
            </a>
            <a 
              href="mailto:zian.surani@gmail.com"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Mail className="w-6 h-6 md:w-8 md:h-8" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-cyan-400 hover:text-white transition-colors duration-300"
          >
            <ChevronDown className="w-8 h-8 md:w-10 md:h-10 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
