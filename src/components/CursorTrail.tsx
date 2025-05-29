
import { useEffect, useRef } from 'react';

const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailRef = useRef<{ x: number; y: number; life: number }[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      
      // Add new trail point
      trailRef.current.push({
        x: e.clientX,
        y: e.clientY,
        life: 1
      });

      // Limit trail length
      if (trailRef.current.length > 20) {
        trailRef.current.shift();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw trail
      trailRef.current = trailRef.current.filter(point => {
        point.life -= 0.05;
        
        if (point.life > 0) {
          const alpha = point.life * 0.5;
          const size = point.life * 15;
          
          const gradient = ctx.createRadialGradient(
            point.x, point.y, 0,
            point.x, point.y, size
          );
          
          gradient.addColorStop(0, `rgba(156, 163, 175, ${alpha})`);
          gradient.addColorStop(1, 'rgba(156, 163, 175, 0)');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
          ctx.fill();
          
          return true;
        }
        return false;
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default CursorTrail;
