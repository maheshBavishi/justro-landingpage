'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './herobanner.module.scss';
import Button from '@/components/button';
import CheckIcon from '@/icon/checkIcon';
import NeedsToWin3D from '../needsToWin/needsToWin3D';

const rotatingPhrases = [
    "Case Research",
    "Contract Analysis",
    "Litigation Prep",
    "Deposition Review",
    "Precedent Search"
];

const trustBadges = [
    "SOC 2 Type II Certified",
    "GDPR Compliant",
    "AES-256 Encrypted",
    "Bar Association Approved"
];

export default function Herobanner() {
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [activeCardIndex, setActiveCardIndex] = useState(0);
    const [isCardHovered, setIsCardHovered] = useState(false);
    const [activeBadgeIndex, setActiveBadgeIndex] = useState(0);

    // 1. Rotating Dynamic Headline Phrases (every 3s)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // 2. User-Friendly Auto-Highlight for Floating Info Cards (every 3.5s, pauses on hover)
    useEffect(() => {
        if (isCardHovered) return;
        const interval = setInterval(() => {
            setActiveCardIndex((prev) => (prev === 0 ? 1 : 0));
        }, 3500);
        return () => clearInterval(interval);
    }, [isCardHovered]);

    // 3. Sequential Auto-Highlight for Trust Badges (every 2.5s)
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveBadgeIndex((prev) => (prev + 1) % trustBadges.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className={styles.herobanner}>
            {/* 3D Theme Canvas Background strictly isolated */}
            <div className={styles.canvasBackground}>
                <NeedsToWin3D />
            </div>

            {/* Ambient Lighting & Floating Gradient Matrix */}
            <div className={styles.ambientBackground}>
                {/* Ambient Warm Gold Glow Dome */}
                <div className={styles.sectionGlow} />

                {/* 3D Holographic Orbital Gyro Rings with Orbiting Satellites */}
                <div className={styles.gyroContainer}>
                    <div className={`${styles.gyroRing} ${styles.ring1}`} />
                    <div className={`${styles.gyroRing} ${styles.ring2}`} />
                    <div className={`${styles.gyroRing} ${styles.ring3}`} />
                </div>

                {/* Infinite Ambient Gradient Orbs */}
                <motion.div
                    className={styles.orbGold}
                    animate={{
                        x: [-25, 30, -20, -25],
                        y: [-20, 20, -15, -20],
                        scale: [1, 1.2, 0.95, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className={styles.orbAmber}
                    animate={{
                        x: [30, -25, 20, 30],
                        y: [20, -25, 25, 20],
                        scale: [1.1, 0.9, 1.15, 1.1],
                    }}
                    transition={{
                        duration: 14,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className={styles.orbSlate}
                    animate={{
                        x: [15, -20, 25, 15],
                        y: [-15, 25, -20, -15],
                        scale: [0.95, 1.12, 0.9, 0.95],
                    }}
                    transition={{
                        duration: 16,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <div className={styles.gridOverlay} />
            </div>

            {/* Floating 3D Info Card 1: 10x Faster Briefs (Desktop / Tablet) */}
            <motion.div
                className={`${styles.floatingCard} ${styles.cardLeft} ${activeCardIndex === 0 ? styles.activeCardHighlight : ''}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{
                    opacity: 1,
                    x: 0,
                    y: activeCardIndex === 0 ? [-14, -2, -14] : [-10, 10, -10],
                    rotateZ: [-2, 2, -2],
                    rotateY: [-6, 6, -6],
                    scale: activeCardIndex === 0 ? 1.05 : 1
                }}
                transition={{
                    opacity: { duration: 0.8, delay: 0.3 },
                    x: { duration: 0.8, delay: 0.3 },
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                    rotateZ: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                    rotateY: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 0.4, ease: "easeOut" }
                }}
                onMouseEnter={() => {
                    setIsCardHovered(true);
                    setActiveCardIndex(0);
                }}
                onMouseLeave={() => setIsCardHovered(false)}
            >
                {/* Auto-Highlight Luminous Light Sweep */}
                <div className={styles.cardShimmerOverlay} />

                <div className={styles.cardContent}>
                    <div className={styles.cardIconWrapper}>
                        <span className={styles.cardEmoji}>⚡</span>
                    </div>
                    <div>
                        <div className={styles.cardTitleRow}>
                            <span className={styles.cardTitle}>10x Faster Briefs</span>
                            {activeCardIndex === 0 && (
                                <span className={styles.liveIndicator}>
                                    <span className={styles.livePing} />
                                    <span className={styles.liveDot} />
                                </span>
                            )}
                        </div>
                        <div className={styles.cardSubtitle}>50+ pages processed in 4s</div>
                    </div>
                </div>
            </motion.div>

            {/* Floating 3D Info Card 2: 99.8% Precision (Desktop / Tablet) */}
            <motion.div
                className={`${styles.floatingCard} ${styles.cardRight} ${activeCardIndex === 1 ? styles.activeCardHighlight : ''}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{
                    opacity: 1,
                    x: 0,
                    y: activeCardIndex === 1 ? [-14, -2, -14] : [10, -10, 10],
                    rotateZ: [2, -2, 2],
                    rotateY: [6, -6, 6],
                    scale: activeCardIndex === 1 ? 1.05 : 1
                }}
                transition={{
                    opacity: { duration: 0.8, delay: 0.4 },
                    x: { duration: 0.8, delay: 0.4 },
                    y: { duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                    rotateZ: { duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                    rotateY: { duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                    scale: { duration: 0.4, ease: "easeOut" }
                }}
                onMouseEnter={() => {
                    setIsCardHovered(true);
                    setActiveCardIndex(1);
                }}
                onMouseLeave={() => setIsCardHovered(false)}
            >
                {/* Auto-Highlight Luminous Light Sweep */}
                <div className={styles.cardShimmerOverlay} />

                <div className={styles.cardContent}>
                    <div className={styles.cardIconWrapper}>
                        <span className={styles.cardEmoji}>⚖️</span>
                    </div>
                    <div>
                        <div className={styles.cardTitleRow}>
                            <span className={styles.cardTitle}>99.8% Precision</span>
                            {activeCardIndex === 1 && (
                                <span className={styles.liveIndicator}>
                                    <span className={styles.livePing} />
                                    <span className={styles.liveDot} />
                                </span>
                            )}
                        </div>
                        <div className={styles.cardSubtitle}>Verified citation database</div>
                    </div>
                </div>
            </motion.div>

            <div className='container'>
                <div className={styles.heroContent}>
                    {/* Top Pill / Badge */}
                    <motion.div
                        className={styles.pillBadge}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <span className={styles.pulseDotWrapper}>
                            <motion.span
                                className={styles.pulsePing}
                                animate={{ scale: [1, 2.2], opacity: [0.8, 0] }}
                                transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                            />
                            <span className={styles.pulseDot} />
                        </span>
                        <span className={styles.pillText}>Next-Gen Legal Intelligence Platform</span>
                        <motion.span
                            className={styles.sparkle}
                            animate={{ rotate: [0, 180, 360] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                            ✦
                        </motion.span>
                    </motion.div>

                    {/* Main H1 */}
                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                    >
                        AI That Thinks <br />
                        <span className={styles.gradientText}>Like a Lawyer</span>
                    </motion.h1>

                    {/* Animated 3D Rotating Subheading */}
                    <motion.div
                        className={styles.dynamicSubhead}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.28, ease: "easeOut" }}
                    >
                        <span className={styles.staticWord}>Instant</span>
                        <motion.span layout className={styles.rotatingWrapper}>
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={rotatingPhrases[currentPhraseIndex]}
                                    initial={{ y: 28, opacity: 0, rotateX: 60, filter: 'blur(4px)' }}
                                    animate={{ y: 0, opacity: 1, rotateX: 0, filter: 'blur(0px)' }}
                                    exit={{ y: -28, opacity: 0, rotateX: -60, filter: 'blur(4px)' }}
                                    transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
                                    className={styles.activeWord}
                                >
                                    {rotatingPhrases[currentPhraseIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </motion.span>
                        <span className={styles.blinkingCursor}>
                            |
                        </span>
                    </motion.div>

                    {/* Description Paragraph */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.38, ease: "easeOut" }}
                    >
                        From complex litigation to routine contracts — LegalAI gives your team superhuman speed with attorney-grade precision. Trusted by top firms across the US.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        className={styles.actionButtons}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.48, ease: "easeOut" }}
                    >
                        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                            <Button text="Start Free Trial" />
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                            <Button white text="Interactive Platform Tour" />
                        </motion.div>
                    </motion.div>

                    {/* Mobile Floating Boxes Row */}
                    <div className={styles.mobileCardsRow}>
                        <div className={`${styles.mobileCardItem} ${activeCardIndex === 0 ? styles.activeMobileCard : ''}`} onClick={() => setActiveCardIndex(0)}>
                            <span className={styles.mobileCardEmoji}>⚡</span>
                            <div>
                                <div className={styles.mobileCardTitle}>10x Faster Briefs</div>
                                <div className={styles.mobileCardSub}>50+ pages in 4s</div>
                            </div>
                        </div>
                        <div className={`${styles.mobileCardItem} ${activeCardIndex === 1 ? styles.activeMobileCard : ''}`} onClick={() => setActiveCardIndex(1)}>
                            <span className={styles.mobileCardEmoji}>⚖️</span>
                            <div>
                                <div className={styles.mobileCardTitle}>99.8% Precision</div>
                                <div className={styles.mobileCardSub}>Verified citations</div>
                            </div>
                        </div>
                    </div>

                    {/* Trust Badges with Sequential Auto-Highlight */}
                    <motion.div
                        className={styles.trustBadgesRow}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.58, ease: "easeOut" }}
                    >
                        {trustBadges.map((badge, idx) => (
                            <motion.div
                                key={idx}
                                className={`${styles.badgeItem} ${activeBadgeIndex === idx ? styles.activeBadgeHighlight : ''}`}
                                whileHover={{ y: -3, scale: 1.03 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className={styles.checkWrapper}>
                                    <CheckIcon />
                                </div>
                                <span>{badge}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
