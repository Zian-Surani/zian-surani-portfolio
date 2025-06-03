
import { useEffect, useState } from 'react';

interface VectorProps {
  className?: string;
  delay?: number;
}

export const RocketVector = ({ className = "", delay = 0 }: VectorProps) => (
  <div className={`relative ${className}`} style={{ animationDelay: `${delay}s` }}>
    <svg width="60" height="60" viewBox="0 0 100 100" className="animate-bounce">
      <defs>
        <linearGradient id="rocketGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#60A5FA', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path d="M50 10 L35 70 L50 65 L65 70 Z" fill="url(#rocketGradient)" />
      <circle cx="50" cy="35" r="8" fill="#EF4444" />
      <path d="M35 70 L25 85 L35 80 Z" fill="#F59E0B" />
      <path d="M65 70 L75 85 L65 80 Z" fill="#F59E0B" />
      <circle cx="45" cy="25" r="2" fill="#FFF" opacity="0.8" />
      <circle cx="55" cy="30" r="1.5" fill="#FFF" opacity="0.6" />
    </svg>
  </div>
);

export const SatelliteVector = ({ className = "", delay = 0 }: VectorProps) => (
  <div className={`relative ${className}`} style={{ animationDelay: `${delay}s` }}>
    <svg width="50" height="50" viewBox="0 0 100 100" className="animate-spin">
      <defs>
        <linearGradient id="satelliteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#A78BFA', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#7C3AED', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect x="40" y="40" width="20" height="20" fill="url(#satelliteGradient)" rx="2" />
      <rect x="15" y="47" width="25" height="6" fill="#60A5FA" rx="3" />
      <rect x="60" y="47" width="25" height="6" fill="#60A5FA" rx="3" />
      <circle cx="50" cy="50" r="3" fill="#EF4444" />
      <rect x="48" y="25" width="4" height="15" fill="#F59E0B" />
    </svg>
  </div>
);

export const PlanetVector = ({ className = "", delay = 0 }: VectorProps) => (
  <div className={`relative ${className}`} style={{ animationDelay: `${delay}s` }}>
    <svg width="40" height="40" viewBox="0 0 100 100" className="animate-pulse">
      <defs>
        <radialGradient id="planetGradient" cx="30%" cy="30%">
          <stop offset="0%" style={{ stopColor: '#34D399', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#059669', stopOpacity: 1 }} />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="25" fill="url(#planetGradient)" />
      <ellipse cx="50" cy="50" rx="35" ry="8" fill="none" stroke="#60A5FA" strokeWidth="2" opacity="0.7" />
      <circle cx="40" cy="45" r="3" fill="#065F46" opacity="0.6" />
      <circle cx="60" cy="55" r="2" fill="#065F46" opacity="0.4" />
    </svg>
  </div>
);

export const FloatingVectors = () => {
  const [vectors, setVectors] = useState<Array<{
    id: number;
    component: React.ReactNode;
    x: number;
    y: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    const vectorComponents = [RocketVector, SatelliteVector, PlanetVector];
    const newVectors = Array.from({ length: 8 }, (_, i) => {
      const Component = vectorComponents[i % vectorComponents.length];
      return {
        id: i,
        component: <Component delay={i * 0.5} />,
        x: Math.random() * 90 + 5,
        y: Math.random() * 90 + 5,
        delay: i * 0.5
      };
    });
    setVectors(newVectors);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-5">
      {vectors.map((vector) => (
        <div
          key={vector.id}
          className="absolute opacity-20 hover:opacity-40 transition-opacity duration-500"
          style={{
            left: `${vector.x}%`,
            top: `${vector.y}%`,
            animation: `float ${8 + Math.random() * 4}s ease-in-out infinite alternate`,
            animationDelay: `${vector.delay}s`
          }}
        >
          {vector.component}
        </div>
      ))}
    </div>
  );
};
