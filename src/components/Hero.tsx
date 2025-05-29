
import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Forging the Future with AI, Code, and Digital Mastery.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setInterval(() => {
          setShowCursor(prev => !prev);
        }, 500);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Smooth animated background with floating circles */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/50 to-black" />
        
        {/* Floating circles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              width: `${20 + Math.random() * 100}px`,
              height: `${20 + Math.random() * 100}px`,
              left: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                Math.random() > 0.5 ? '#00ffff' : '#0066ff'
              }40, transparent)`,
              animation: `floatCircle ${8 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}

        {/* Smooth flowing lines */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            {[...Array(8)].map((_, i) => (
              <path
                key={i}
                d={`M0,${200 + i * 80} Q600,${100 + Math.random() * 200} 1200,${200 + i * 80}`}
                stroke={`url(#gradient${i})`}
                strokeWidth="2"
                fill="none"
                opacity="0.4"
                style={{
                  animation: `float ${6 + Math.random() * 4}s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`
                }}
              />
            ))}
            <defs>
              {[...Array(8)].map((_, i) => (
                <linearGradient key={i} id={`gradient${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(0, 255, 255, 0)" />
                  <stop offset="50%" stopColor="rgba(0, 255, 255, 0.6)" />
                  <stop offset="100%" stopColor="rgba(0, 102, 255, 0)" />
                </linearGradient>
              ))}
            </defs>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center z-10 max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Photo Section */}
        <div className="flex-shrink-0">
          <div className="relative">
            <div className="w-80 h-80 rounded-full glass p-4 glow-pulse">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center border-2 border-cyan-400/30">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-4xl font-bold text-black">
                    ZS
                  </div>
                  <p className="text-cyan-400 text-sm">Photo placeholder</p>
                </div>
              </div>
            </div>
            {/* Floating elements around photo */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400/20 rounded-full float-animation" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400/20 rounded-full float-animation" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 text-left lg:text-left">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent leading-tight">
            Zian Rajeshkumar Surani
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 h-12 font-mono mb-6">
            {text}
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity text-cyan-400`}>|</span>
          </div>
          <div className="flex flex-wrap gap-3 mb-8">
            {['AI Ninja', 'Code Samurai', 'Startup Sensei', 'ML Master'].map((tag, index) => (
              <span 
                key={tag}
                className="glass px-4 py-2 rounded-full text-cyan-400 border border-cyan-500/30 text-sm font-medium hover:glow transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {tag}
              </span>
            ))}
          </div>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
            Digital warrior crafting intelligent systems • Research samurai exploring AI frontiers • 
            Entrepreneurial ninja building tomorrow's solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <button 
              onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-xl text-lg font-medium hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
            >
              Enter the Dojo
            </button>
            <button 
              onClick={() => document.getElementById('startup')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-cyan-400 px-8 py-4 rounded-xl text-lg font-medium hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105"
            >
              View Ventures
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-cyan-400" />
      </div>
    </section>
  );
};

export default Hero;
