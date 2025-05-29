
import { useEffect, useState } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Building the Future with AI, Code, and Purpose.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        // Blink cursor
        setInterval(() => {
          setShowCursor(prev => !prev);
        }, 500);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative neural-bg overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      
      {/* Floating particles */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-blue-500/10 rounded-full blur-xl float-animation" />
      <div className="absolute bottom-32 right-32 w-32 h-32 bg-purple-500/10 rounded-full blur-xl float-animation" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-400/10 rounded-full blur-lg float-animation" style={{ animationDelay: '4s' }} />

      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
            Zian Rajeshkumar Surani
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 h-8 font-mono">
            {text}
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
          </div>
        </div>
        
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          AI Researcher • Machine Learning Engineer • Startup Founder • Computer Vision Specialist
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="glass px-8 py-4 rounded-lg text-lg font-medium hover:glow glow-pulse transition-all duration-300 transform hover:scale-105"
          >
            Explore My Work
          </button>
          <button className="border border-blue-400 px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-400/10 transition-all duration-300 transform hover:scale-105">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
