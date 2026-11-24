'use client';

import React, { useEffect, useRef } from 'react';
import styles from './needsToWin.module.scss';

export default function NeedsToWin3D() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let width = 0;
        let height = 0;
        let dpr = 1;

        const handleResize = () => {
            if (!canvas.parentElement) return;
            const parent = canvas.parentElement;
            width = parent.offsetWidth || window.innerWidth;
            height = parent.offsetHeight || window.innerHeight;
            dpr = Math.min(window.devicePixelRatio || 1, 2);

            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(dpr, dpr);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        // Smooth mouse parallax
        let mouseX = 0;
        let mouseY = 0;
        let targetMouseX = 0;
        let targetMouseY = 0;

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            targetMouseX = ((e.clientX - rect.left) / width - 0.5) * 45;
            targetMouseY = ((e.clientY - rect.top) / height - 0.5) * 30;
        };

        window.addEventListener('mousemove', handleMouseMove);

        // ============================================================
        // Clean, Subtle, Minimal Legal AI Particles & Constellation
        // (Replaced busy wave lines with a calm, elegant ambient field)
        // ============================================================
        const numParticles = 42;
        const particles = [];
        const fov = 480;

        // Theme palette: subtle warm gold and amber accents
        const colors = [
            'rgba(245, 158, 11, ',   // Amber
            'rgba(217, 119, 6, ',    // Warm Gold
            'rgba(251, 191, 36, ',   // Soft Amber
        ];

        for (let i = 0; i < numParticles; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                z: Math.random() * 300 - 150,
                vx: (Math.random() - 0.5) * 0.32,
                vy: (Math.random() - 0.5) * 0.28,
                radius: Math.random() * 1.8 + 1.2,
                isAnchor: i % 7 === 0, // A few special glowing anchor nodes
                color: colors[i % colors.length],
                pulseOffset: Math.random() * Math.PI * 2,
                connectMax: 110
            });
        }

        let time = 0;

        const render = () => {
            ctx.clearRect(0, 0, width, height);
            time += 0.012;

            // Interpolate mouse smoothly
            mouseX += (targetMouseX - mouseX) * 0.04;
            mouseY += (targetMouseY - mouseY) * 0.04;

            // Update & project 3D particles
            const projected = [];

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                // Gentle drift
                p.x += p.vx;
                p.y += p.vy;

                // Screen bounds wrapping
                if (p.x < -30) p.x = width + 30;
                if (p.x > width + 30) p.x = -30;
                if (p.y < -30) p.y = height + 30;
                if (p.y > height + 30) p.y = -30;

                // 3D Perspective scale
                const scale = fov / (fov + p.z + 200);
                const screenX = p.x + mouseX * scale;
                const screenY = p.y + mouseY * scale;

                // Gentle breathing opacity
                const pulse = Math.sin(time * 1.5 + p.pulseOffset) * 0.2 + 0.8;
                const alpha = Math.max(0.12, Math.min(0.65, (1 - p.z / 350) * pulse));

                projected[i] = { screenX, screenY, scale, alpha, p };
            }

            // 1. Draw delicate, subtle connection lines between nearby nodes
            for (let i = 0; i < projected.length; i++) {
                const p1 = projected[i];

                for (let j = i + 1; j < projected.length; j++) {
                    const p2 = projected[j];

                    const dx = p1.p.x - p2.p.x;
                    const dy = p1.p.y - p2.p.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < p1.p.connectMax) {
                        // Very subtle, non-distracting opacity
                        const lineAlpha = (1 - dist / p1.p.connectMax) * Math.min(p1.alpha, p2.alpha) * 0.28;
                        ctx.strokeStyle = `rgba(245, 158, 11, ${lineAlpha})`;
                        ctx.lineWidth = 0.8;
                        ctx.beginPath();
                        ctx.moveTo(p1.screenX, p1.screenY);
                        ctx.lineTo(p2.screenX, p2.screenY);
                        ctx.stroke();
                    }
                }
            }

            // 2. Draw particle nodes
            for (let i = 0; i < projected.length; i++) {
                const { screenX, screenY, scale, alpha, p } = projected[i];
                const nodeSize = p.radius * scale;

                // Anchor nodes have a soft, calm glow
                if (p.isAnchor) {
                    ctx.fillStyle = `${p.color}${alpha * 0.18})`;
                    ctx.beginPath();
                    ctx.arc(screenX, screenY, nodeSize * 3, 0, Math.PI * 2);
                    ctx.fill();
                }

                // Node core
                ctx.fillStyle = `${p.color}${alpha * 0.85})`;
                ctx.beginPath();
                ctx.arc(screenX, screenY, nodeSize, 0, Math.PI * 2);
                ctx.fill();
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className={styles.canvas3D} />;
}
