import { useEffect, useRef } from 'react';

export default function StarBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId;
    let isVisible = true;
    let isMounted = true;

    // Detect mobile touch devices
    const isMobile =
      typeof window !== 'undefined' &&
      (window.innerWidth < 768 ||
        ('ontouchstart' in window && window.innerWidth < 1024));

    let width = (canvas.width = canvas.parentElement ? canvas.parentElement.clientWidth : window.innerWidth);
    let height = (canvas.height = canvas.parentElement ? canvas.parentElement.clientHeight : window.innerHeight);

    const handleResize = () => {
      if (!canvas || !isMounted) return;
      const parent = canvas.parentElement;
      width = canvas.width = parent ? parent.clientWidth : window.innerWidth;
      height = canvas.height = parent ? parent.clientHeight : window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Mouse tracker for desktop only
    const mouse = { x: -1000, y: -1000, radius: 120, radiusSq: 120 * 120 };
    let handleMouseMove;
    let handleMouseLeave;

    if (!isMobile) {
      handleMouseMove = (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      };
      handleMouseLeave = () => {
        mouse.x = -1000;
        mouse.y = -1000;
      };

      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      window.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    }

    // Star generation - optimized density
    const starCount = isMobile ? 24 : Math.min(Math.floor((width * height) / 11000), 75);
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
        size: Math.random() * (isMobile ? 1.3 : 1.6) + 0.5,
        baseAlpha: Math.random() * 0.5 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        twinkleSpeed: Math.random() * 0.02 + 0.006,
        twinklePhase: Math.random() * Math.PI * 2,
        vx: (Math.random() - 0.5) * (isMobile ? 0.12 : 0.18),
        vy: (Math.random() - 0.5) * (isMobile ? 0.12 : 0.18),
      });
    }

    const maxLineDist = 70;
    const maxLineDistSq = maxLineDist * maxLineDist;

    const render = () => {
      if (!isVisible || !isMounted) return;

      ctx.clearRect(0, 0, width, height);

      // Constellation lines ONLY on desktop
      if (!isMobile) {
        for (let i = 0; i < stars.length; i++) {
          const s1 = stars[i];

          for (let j = i + 1; j < stars.length; j++) {
            const s2 = stars[j];
            const dx = s1.x - s2.x;
            const dy = s1.y - s2.y;
            const distSq = dx * dx + dy * dy;

            if (distSq < maxLineDistSq) {
              const dist = Math.sqrt(distSq);
              const lineAlpha = (1 - dist / maxLineDist) * 0.1;
              ctx.strokeStyle = '#00E5FF';
              ctx.lineWidth = 0.5;
              ctx.globalAlpha = lineAlpha;
              ctx.beginPath();
              ctx.moveTo(s1.x, s1.y);
              ctx.lineTo(s2.x, s2.y);
              ctx.stroke();
            }
          }

          // Connect star to mouse if near
          const dmx = s1.x - mouse.x;
          const dmy = s1.y - mouse.y;
          const mouseDistSq = dmx * dmx + dmy * dmy;
          if (mouseDistSq < mouse.radiusSq) {
            const distMouse = Math.sqrt(mouseDistSq);
            const mouseAlpha = (1 - distMouse / mouse.radius) * 0.22;
            ctx.strokeStyle = '#D4AF37';
            ctx.lineWidth = 0.75;
            ctx.globalAlpha = mouseAlpha;
            ctx.beginPath();
            ctx.moveTo(s1.x, s1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      // Draw stars (ultra-fast rendering)
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        star.twinklePhase += star.twinkleSpeed;
        const currentAlpha = star.baseAlpha + Math.sin(star.twinklePhase) * 0.25;
        const clampedAlpha = Math.max(0.1, Math.min(1, currentAlpha));

        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        // Subtle glow for larger stars on desktop
        if (!isMobile && star.size > 1.2) {
          ctx.fillStyle = star.color;
          ctx.globalAlpha = clampedAlpha * 0.2;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = star.color;
        ctx.globalAlpha = clampedAlpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // Pause animation when tab or section is not visible
    const handleVisibilityChange = () => {
      if (document.hidden) {
        isVisible = false;
        cancelAnimationFrame(animationFrameId);
      } else {
        isVisible = true;
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // IntersectionObserver to pause loop when scrolled past Hero
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          if (!isVisible) {
            isVisible = true;
            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(render);
          }
        } else {
          isVisible = false;
          cancelAnimationFrame(animationFrameId);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    animationFrameId = requestAnimationFrame(render);

    return () => {
      isMounted = false;
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('resize', handleResize);
      if (handleMouseMove) window.removeEventListener('mousemove', handleMouseMove);
      if (handleMouseLeave) window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
