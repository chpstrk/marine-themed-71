import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  size: number;
  opacity: number;
  speed: number;
}

const FluidParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.min(15, Math.floor(window.innerWidth / 100)); // Adaptive count
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          targetX: 0,
          targetY: 0,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.3 + 0.1,
          speed: Math.random() * 0.02 + 0.01
        });
      }
    };
    initParticles();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Scroll handler for contrast adjustment
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollY / documentHeight, 1);
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Calculate adaptive opacity based on scroll progress
      const baseOpacity = 0.15 + (scrollProgress * 0.25); // Lighter at top, more visible as we scroll down

      particlesRef.current.forEach((particle, index) => {
        // Create attraction to mouse with some randomness
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Add some offset so particles don't all converge to the same point
        const offsetX = Math.sin(Date.now() * 0.001 + index) * 50;
        const offsetY = Math.cos(Date.now() * 0.001 + index) * 50;
        
        particle.targetX = mouseRef.current.x + offsetX;
        particle.targetY = mouseRef.current.y + offsetY;

        // Smooth movement toward target
        particle.x += (particle.targetX - particle.x) * particle.speed;
        particle.y += (particle.targetY - particle.y) * particle.speed;

        // Calculate dynamic opacity based on distance from mouse and scroll
        const maxDistance = 200;
        const distanceOpacity = Math.max(0, 1 - distance / maxDistance);
        const finalOpacity = (particle.opacity + distanceOpacity * 0.3) * baseOpacity;

        // Draw particle with adaptive color based on scroll progress
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        // Color transitions from light blue to deep blue/white based on scroll
        const lightness = scrollProgress < 0.5 ? 70 - (scrollProgress * 30) : 40 + (scrollProgress * 60);
        const saturation = 60 - (scrollProgress * 20);
        
        ctx.fillStyle = `hsla(200, ${saturation}%, ${lightness}%, ${finalOpacity})`;
        ctx.fill();

        // Add subtle glow effect
        if (distance < 100) {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(200, ${saturation}%, ${lightness}%, ${finalOpacity * 0.1})`;
          ctx.fill();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [scrollProgress]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default FluidParticles;