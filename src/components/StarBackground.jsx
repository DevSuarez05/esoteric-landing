import { useEffect, useRef } from 'react';

export default function StarBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse tracker for celestial interaction
    const mouse = { x: -1000, y: -1000, radius: 140 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Star generation
    const starCount = Math.min(Math.floor((width * height) / 8000), 160);
    const stars = [];

    const colors = [
      '#D4AF37', // gold-accent
      '#00E5FF', // astral-cyan
      '#F4E8C1', // soft gold
      '#9D4EDD', // mystic purple
      '#FFFFFF', // white twinkle
    ];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.8 + 0.5,
        baseAlpha: Math.random() * 0.7 + 0.3,
        alpha: Math.random() * 0.7 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        isSparkle: Math.random() < 0.15,
      });
    }

    const drawSparkle = (x, y, size, color, alpha) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.strokeStyle = color;
      ctx.lineWidth = 0.75;
      ctx.globalAlpha = alpha;

      const arm = size * 3;
      ctx.beginPath();
      ctx.moveTo(-arm, 0);
      ctx.lineTo(arm, 0);
      ctx.moveTo(0, -arm);
      ctx.lineTo(0, arm);
      ctx.stroke();

      // Soft circular glow in center
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, arm);
      gradient.addColorStop(0, color);
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(0, 0, arm, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint nebular ambient tint
      const centerGrad = ctx.createRadialGradient(
        width / 2,
        height * 0.4,
        100,
        width / 2,
        height * 0.4,
        Math.max(width, height) * 0.8
      );
      centerGrad.addColorStop(0, 'rgba(30, 16, 53, 0.4)');
      centerGrad.addColorStop(0.5, 'rgba(11, 9, 20, 0.2)');
      centerGrad.addColorStop(1, 'rgba(11, 9, 20, 0)');
      ctx.fillStyle = centerGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw constellation connections between nearby stars
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 85) {
            const lineAlpha = (1 - dist / 85) * 0.12;
            ctx.strokeStyle = '#00E5FF';
            ctx.lineWidth = 0.5;
            ctx.globalAlpha = lineAlpha;
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.stroke();
          }
        }

        // Connect star to mouse if near
        const dmx = stars[i].x - mouse.x;
        const dmy = stars[i].y - mouse.y;
        const distMouse = Math.sqrt(dmx * dmx + dmy * dmy);
        if (distMouse < mouse.radius) {
          const mouseAlpha = (1 - distMouse / mouse.radius) * 0.28;
          ctx.strokeStyle = '#D4AF37';
          ctx.lineWidth = 0.75;
          ctx.globalAlpha = mouseAlpha;
          ctx.beginPath();
          ctx.moveTo(stars[i].x, stars[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      // Update and draw stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        star.twinklePhase += star.twinkleSpeed;
        const currentAlpha =
          star.baseAlpha + Math.sin(star.twinklePhase) * 0.3;
        const clampedAlpha = Math.max(0.1, Math.min(1, currentAlpha));

        // Subtle position drift
        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        if (star.isSparkle) {
          drawSparkle(star.x, star.y, star.size, star.color, clampedAlpha);
        } else {
          ctx.save();
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fillStyle = star.color;
          ctx.globalAlpha = clampedAlpha;
          ctx.shadowBlur = star.size > 1.2 ? 6 : 2;
          ctx.shadowColor = star.color;
          ctx.fill();
          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
