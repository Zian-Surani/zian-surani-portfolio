
import { useState, useEffect } from 'react';

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const loadingWords = [
    'INITIALIZING',
    'AI SYSTEMS',
    'NEURAL NETWORKS',
    'CODE SAMURAI',
    'DIGITAL NINJA',
    'STARTUP SENSEI',
    'INNOVATION',
    'READY'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWordIndex((prev) => {
        if (prev < loadingWords.length - 1) {
          return prev + 1;
        } else {
          clearInterval(timer);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onLoadingComplete, 500);
          }, 1000);
          return prev;
        }
      });
    }, 400);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-500 ${
      isComplete ? 'loading-fade-out' : ''
    }`}>
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full floating-circle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 3}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="text-center">
        {/* Logo */}
        <div className="font-display text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-8 loading-pulse">
          ZS
        </div>

        {/* Loading words */}
        <div className="h-16 flex items-center justify-center">
          {loadingWords.map((word, index) => (
            <div
              key={word}
              className={`absolute font-mono text-xl text-cyan-400 transition-all duration-300 ${
                index === currentWordIndex 
                  ? 'opacity-100 transform scale-100 loading-word' 
                  : index < currentWordIndex 
                    ? 'opacity-0 transform scale-95' 
                    : 'opacity-0 transform scale-105'
              }`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {word}
            </div>
          ))}
        </div>

        {/* Loading bar */}
        <div className="w-64 h-1 bg-gray-800 rounded-full mt-8 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-300"
            style={{
              width: `${((currentWordIndex + 1) / loadingWords.length) * 100}%`
            }}
          />
        </div>

        <div className="mt-4 text-gray-500 text-sm font-mono">
          Loading... {Math.round(((currentWordIndex + 1) / loadingWords.length) * 100)}%
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
