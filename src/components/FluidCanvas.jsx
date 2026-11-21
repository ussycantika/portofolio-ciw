import React, { useEffect, useRef } from "react";

export function FluidCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking
    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };
    let particles = [];
    const numParticles = 32;

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 80 + 40,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        alpha: Math.random() * 0.15 + 0.05,
      });
    }

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    const render = () => {
      // Smooth lerp for cursor
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Check current theme mode from document
      const isDark = document.documentElement.classList.contains("dark");
      const baseRgb = isDark ? "242, 142, 142" : "224, 114, 134";


      // Render interactive cursor glow
      const cursorGradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        280
      );
      cursorGradient.addColorStop(0, `rgba(${baseRgb}, ${isDark ? "0.12" : "0.08"})`);
      cursorGradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = cursorGradient;
      ctx.fillRect(0, 0, width, height);

      // Render ambient fluid particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -p.radius) p.x = width + p.radius;
        if (p.x > width + p.radius) p.x = -p.radius;
        if (p.y < -p.radius) p.y = height + p.radius;
        if (p.y > height + p.radius) p.y = -p.radius;

        const particleGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        particleGrad.addColorStop(0, `rgba(${baseRgb}, ${p.alpha})`);
        particleGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = particleGrad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-80"
    />
  );
}
