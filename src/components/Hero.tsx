
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
      {/* Neon Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(cyan 1px, transparent 1px),
            linear-gradient(90deg, cyan 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          opacity: 0.1
        }} />
      </div>

      {/* Animated Circuit Lines */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40"
            style={{
              top: `${20 + i * 10}%`,
              left: '0%',
              right: '0%',
              animationDelay: `${i * 0.5}s`,
              animation: 'pulse 4s ease-in-out infinite'
            }}
          />
        ))}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-blue-400 to-transparent opacity-30"
            style={{
              left: `${15 + i * 15}%`,
              top: '0%',
              bottom: '0%',
              animationDelay: `${i * 0.7}s`,
              animation: 'pulse 3s ease-in-out infinite'
            }}
          />
        ))}
      </div>

      {/* Floating Energy Orbs */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              boxShadow: '0 0 20px cyan'
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="text-center z-10 max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent leading-tight">
            Zian Rajeshkumar Surani
          </h1>
          <div className="text-2xl md:text-3xl text-gray-300 h-12 font-mono mb-6">
            {text}
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity text-cyan-400`}>|</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['AI Ninja', 'Code Samurai', 'Startup Sensei', 'ML Master'].map((tag, index) => (
              <span 
                key={tag}
                className="glass px-4 py-2 rounded-full text-cyan-400 border border-cyan-500/30 text-sm font-medium"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Digital warrior crafting intelligent systems • Research samurai exploring AI frontiers • 
          Entrepreneurial ninja building tomorrow's solutions
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-4 rounded-xl text-lg font-medium hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
          >
            Enter the Dojo
          </button>
          <button 
            onClick={() => document.getElementById('startup')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-cyan-400 px-10 py-4 rounded-xl text-lg font-medium hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105"
          >
            View Ventures
          </button>
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
