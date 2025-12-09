import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Galaxy = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      const { devicePixelRatio: ratio = 1 } = window;
      const { clientWidth, clientHeight } = canvas.parentElement;
      canvas.width = clientWidth * ratio;
      canvas.height = clientHeight * ratio;
      canvas.style.width = `${clientWidth}px`;
      canvas.style.height = `${clientHeight}px`;
      ctx.scale(ratio, ratio);
    };

    const width = () => canvas.parentElement.clientWidth;
    const height = () => canvas.parentElement.clientHeight;
    
    let rotation = 0;
    const particles = [];
    const numParticles = 2000;
    const numArms = 5;
    const armSpread = 0.5;

    const createParticles = () => {
        particles.length = 0;
        const centerX = width() / 2;
        const centerY = height() / 2;
        const galaxyRadius = Math.min(width(), height()) * 0.4;

        for (let i = 0; i < numParticles; i++) {
            const armIndex = i % numArms;
            const angle = (i / numParticles) * Math.PI * 2 * numArms;
            const distance = Math.random() * galaxyRadius;
            
            const armAngle = (armIndex / numArms) * Math.PI * 2;
            const spiralAngle = distance * armSpread / 50;

            const x = centerX + Math.cos(angle + armAngle + spiralAngle) * distance + (Math.random() - 0.5) * 60;
            const y = centerY + Math.sin(angle + armAngle + spiralAngle) * distance + (Math.random() - 0.5) * 60;
            
            const size = Math.random() * 1.5 + 0.5;
            const opacity = Math.random() * 0.5 + 0.2;
            
            particles.push({ x, y, size, opacity });
        }
    }


    const drawGalaxy = () => {
      const w = width();
      const h = height();
      const centerX = w / 2;
      const centerY = h / 2;
      const coreRadius = Math.min(w,h) * 0.1;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotation);
      ctx.translate(-centerX, -centerY);

      // Core glow
      const coreGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, coreRadius);
      coreGradient.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
      coreGradient.addColorStop(0.2, 'rgba(126, 75, 162, 0.2)');
      coreGradient.addColorStop(1, 'rgba(102, 126, 234, 0)');
      ctx.fillStyle = coreGradient;
      ctx.fillRect(0, 0, w, h);

      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 200, 255, ${p.opacity})`;
        ctx.fill();
      });

      ctx.restore();

      rotation += 0.0005;
      animationFrameId = requestAnimationFrame(drawGalaxy);
    };

    const handleResize = () => {
        cancelAnimationFrame(animationFrameId);
        resizeCanvas();
        createParticles();
        drawGalaxy();
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
    };

  }, []);

  return (
    <motion.div
      className="absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
    </motion.div>
  );
};

export default Galaxy;