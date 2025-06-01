
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    let trailId = 0;

    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add trail point
      setTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: trailId++ }];
        return newTrail.slice(-15); // Keep only last 15 points
      });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Trail effect */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-[9999] rounded-full"
          style={{
            left: point.x - 2,
            top: point.y - 2,
            width: '4px',
            height: '4px',
            backgroundColor: `rgba(156, 163, 175, ${(index + 1) / trail.length * 0.6})`,
            transform: `scale(${(index + 1) / trail.length})`,
            transition: 'opacity 0.3s ease-out',
          }}
        />
      ))}
      
      {/* Main cursor */}
      <div
        className={`fixed pointer-events-none z-[9999] rounded-full border-2 border-gray-400 transition-all duration-200 ${
          isClicking ? 'scale-75' : 'scale-100'
        }`}
        style={{
          left: position.x - 10,
          top: position.y - 10,
          width: '20px',
          height: '20px',
          backgroundColor: 'rgba(156, 163, 175, 0.2)',
          backdropFilter: 'blur(4px)',
          boxShadow: '0 0 20px rgba(156, 163, 175, 0.3)',
        }}
      />
      
      {/* Center dot */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full bg-gray-400"
        style={{
          left: position.x - 2,
          top: position.y - 2,
          width: '4px',
          height: '4px',
          opacity: 0.8,
        }}
      />
    </>
  );
};

export default CustomCursor;
