'use client';

import React, { useEffect, useRef } from 'react';
import styles from './herobanner.module.scss';

export default function Legal3DCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let width = (canvas.width = canvas.parentElement.offsetWidth || window.innerWidth);
        let height = (canvas.height = canvas.parentElement.offsetHeight || window.innerHeight);

        const handleResize = () => {
            if (!canvas.parentElement) return;
            width = canvas.width = canvas.parentElement.offsetWidth;
            height = canvas.height = canvas.parentElement.offsetHeight;
        };

        window.addEventListener('resize', handleResize);

        // 3D Neural Nodes - Uniform Fibonacci Sphere distribution
        const numPoints = 70;
        const points = [];
        const getRadius = () => Math.min(width, height) * 0.42;
        let radius = getRadius();

        for (let i = 0; i < numPoints; i++) {
            const phi = Math.acos(-1 + (2 * i) / numPoints);
            const theta = Math.sqrt(numPoints * Math.PI) * phi;

            points.push({
                baseX: Math.cos(theta) * Math.sin(phi),
                baseY: Math.sin(theta) * Math.sin(phi),
                baseZ: Math.cos(phi),
                baseRadius: Math.random() * 2.2 + 2,
                colorPrefix: i % 3 === 0 ? '217, 119, 6' : (i % 2 === 0 ? '245, 158, 11' : '251, 191, 36')
            });
        }

        let rotX = 0.25;
        let rotY = 0.35;
        let targetRotX = 0.25;
        let targetRotY = 0.35;

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            const mouseX = (e.clientX - rect.left) / width - 0.5;
            const mouseY = (e.clientY - rect.top) / height - 0.5;
            targetRotY = mouseX * 0.7;
            targetRotX = -mouseY * 0.7;
        };

        window.addEventListener('mousemove', handleMouseMove);

        const fov = 650;

        const render = () => {
            ctx.clearRect(0, 0, width, height);
            radius = getRadius();

            // Smooth interpolation towards mouse target + continuous slow 3D rotation
            rotX += (targetRotX - rotX) * 0.04 + 0.0012;
            rotY += (targetRotY - rotY) * 0.04 + 0.0018;

            const cosX = Math.cos(rotX);
            const sinX = Math.sin(rotX);
            const cosY = Math.cos(rotY);
            const sinY = Math.sin(rotY);

            // Project 3D points to 2D screen
            const projected = [];

            for (let i = 0; i < points.length; i++) {
                const p = points[i];
                const px = p.baseX * radius;
                const py = p.baseY * radius;
                const pz = p.baseZ * radius;

                // Rotation around Y
                const x1 = px * cosY - pz * sinY;
                const z1 = pz * cosY + px * sinY;

                // Rotation around X
                const y2 = py * cosX - z1 * sinX;
                const z2 = z1 * cosX + py * sinX;

                // 3D Perspective Projection
                const scale = fov / (fov + z2 + 350);
                const x2d = x1 * scale + width / 2;
                const y2d = y2 * scale + height / 2;

                // Depth-based opacity and sizing
                const depthRatio = (z2 + radius) / (2 * radius);
                const alpha = Math.max(0.12, Math.min(0.85, depthRatio));

                projected.push({
                    x: x2d,
                    y: y2d,
                    z: z2,
                    scale,
                    alpha,
                    radius: p.baseRadius * scale,
                    colorPrefix: p.colorPrefix
                });
            }

            // Draw interconnected neural legal network lines
            const maxDist = Math.min(width, height) * 0.22;

            for (let i = 0; i < projected.length; i++) {
                for (let j = i + 1; j < projected.length; j++) {
                    const dx = projected[i].x - projected[j].x;
                    const dy = projected[i].y - projected[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < maxDist) {
                        const lineAlpha = (1 - dist / maxDist) * Math.min(projected[i].alpha, projected[j].alpha) * 0.28;
                        ctx.strokeStyle = `rgba(245, 158, 11, ${lineAlpha})`;
                        ctx.lineWidth = 0.9 * Math.min(projected[i].scale, projected[j].scale);
                        ctx.beginPath();
                        ctx.moveTo(projected[i].x, projected[i].y);
                        ctx.lineTo(projected[j].x, projected[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Draw glowing 3D nodes
            for (let i = 0; i < projected.length; i++) {
                const p = projected[i];

                // Core node
                ctx.fillStyle = `rgba(${p.colorPrefix}, ${p.alpha})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, Math.max(1.2, p.radius), 0, Math.PI * 2);
                ctx.fill();

                // Subtle halo for front-facing nodes
                if (p.z > 0) {
                    ctx.fillStyle = `rgba(251, 191, 36, ${p.alpha * 0.22})`;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.radius * 2.8, 0, Math.PI * 2);
                    ctx.fill();
                }
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
