
import { useEffect, useRef } from 'react';

const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailRef = useRef<{ x: number; y: number; life: number; angle: number }[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, prevX: 0, prevY: 0 });

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
      const prevX = mouseRef.current.x;
      const prevY = mouseRef.current.y;
      
      mouseRef.current = { 
        x: e.clientX, 
        y: e.clientY,
        prevX: prevX,
        prevY: prevY
      };
      
      // Calculate movement angle for blade direction
      const angle = Math.atan2(e.clientY - prevY, e.clientX - prevX);
      
      // Add new trail point with blade properties
      trailRef.current.push({
        x: e.clientX,
        y: e.clientY,
        life: 1,
        angle: angle
      });

      // Limit trail length for performance
      if (trailRef.current.length > 15) {
        trailRef.current.shift();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw ninja blade trail
      trailRef.current = trailRef.current.filter(point => {
        point.life -= 0.08;
        
        if (point.life > 0) {
          const alpha = point.life * 0.8;
          const bladeLength = point.life * 40;
          const bladeWidth = point.life * 8;
          
          ctx.save();
          ctx.translate(point.x, point.y);
          ctx.rotate(point.angle);
          
          // Create ninja blade gradient
          const gradient = ctx.createLinearGradient(-bladeLength/2, 0, bladeLength/2, 0);
          gradient.addColorStop(0, `rgba(0, 255, 255, 0)`);
          gradient.addColorStop(0.3, `rgba(0, 255, 255, ${alpha * 0.8})`);
          gradient.addColorStop(0.7, `rgba(255, 255, 255, ${alpha})`);
          gradient.addColorStop(1, `rgba(0, 255, 255, 0)`);
          
          // Draw blade shape
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.ellipse(0, 0, bladeLength/2, bladeWidth/2, 0, 0, Math.PI * 2);
          ctx.fill();
          
          // Add blade edge glow
          ctx.strokeStyle = `rgba(0, 255, 255, ${alpha * 0.6})`;
          ctx.lineWidth = 1;
          ctx.stroke();
          
          ctx.restore();
          
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
      className="fixed inset-0 pointer-events-none z-[60]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default CursorTrail;
