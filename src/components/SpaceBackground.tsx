
import { useEffect, useState } from 'react';

const SpaceBackground = () => {
  const [stars, setStars] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    speed: number;
  }>>([]);

  const [planets, setPlanets] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
    rotationSpeed: number;
  }>>([]);

  useEffect(() => {
    // Generate stars
    const newStars = Array.from({ length: 200 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 0.5 + 0.1
    }));
    setStars(newStars);

    // Generate planets
    const newPlanets = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 80 + 40,
      color: ['#4F46E5', '#7C3AED', '#EC4899', '#EF4444', '#F59E0B'][i],
      rotationSpeed: Math.random() * 20 + 10
    }));
    setPlanets(newPlanets);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Space gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black opacity-90" />
      
      {/* Nebula effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      {/* Animated stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: `twinkle ${3 + Math.random() * 2}s ease-in-out infinite alternate`,
            animationDelay: `${Math.random() * 3}s`
          }}
        />
      ))}

      {/* Floating planets */}
      {planets.map((planet) => (
        <div
          key={planet.id}
          className="absolute rounded-full opacity-30"
          style={{
            left: `${planet.x}%`,
            top: `${planet.y}%`,
            width: `${planet.size}px`,
            height: `${planet.size}px`,
            background: `radial-gradient(circle at 30% 30%, ${planet.color}aa, ${planet.color}22)`,
            animation: `float ${planet.rotationSpeed}s ease-in-out infinite alternate`,
            filter: 'blur(1px)'
          }}
        />
      ))}

      {/* Shooting stars */}
      <div className="shooting-star" />
      <div className="shooting-star" style={{ animationDelay: '3s', top: '20%' }} />
      <div className="shooting-star" style={{ animationDelay: '6s', top: '60%' }} />
    </div>
  );
};

export default SpaceBackground;
