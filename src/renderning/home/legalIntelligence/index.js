'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import styles from './legalIntelligence.module.scss';

// Exact Content from the user's screenshot
const stepsData = [
    {
        step: 1,
        watermark: '01',
        tag: 'Instant OCR Intake',
        title: 'Upload Your Documents',
        description: 'Drag and drop contracts, case files, briefs, or any legal documents. Supports PDF, DOCX, images, and scanned files up to 500MB.',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
        ),
        features: [
            'Smart OCR extraction',
            'Multi-format support',
            'Batch processing'
        ]
    },
    {
        step: 2,
        watermark: '02',
        tag: 'Neural Analysis Engine',
        title: 'AI Processes & Analyzes',
        description: 'Our fine-tuned legal AI models read, understand, and cross-reference your documents against a vast legal knowledge base.',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="3" />
                <rect x="9" y="9" width="6" height="6" />
                <line x1="9" y1="1" x2="9" y2="4" />
                <line x1="15" y1="1" x2="15" y2="4" />
                <line x1="9" y1="20" x2="9" y2="23" />
                <line x1="15" y1="20" x2="15" y2="23" />
                <line x1="20" y1="9" x2="23" y2="9" />
                <line x1="20" y1="15" x2="23" y2="15" />
                <line x1="1" y1="9" x2="4" y2="9" />
                <line x1="1" y1="15" x2="4" y2="15" />
            </svg>
        ),
        features: [
            'GPT-4 legal fine-tune',
            'Real-time processing',
            'Jurisdiction-aware'
        ]
    },
    {
        step: 3,
        watermark: '03',
        tag: 'Court-Ready Output',
        title: 'Receive Expert Insights',
        description: 'Get clear, actionable summaries, risk assessments, cited precedents, and draft language ready for immediate use.',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <path d="M9 15l2 2 4-4" />
            </svg>
        ),
        features: [
            'Cited sources',
            'Confidence scores',
            'One-click export'
        ]
    }
];

export default function LegalIntelligence() {
    const sectionRef = useRef(null);
    const [currentStep, setCurrentStep] = useState(1);

    // Track scroll position inside the sticky container
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end']
    });

    // Detect active step dynamically on scroll
    useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (progress) => {
            if (progress < 0.28) {
                setCurrentStep(1);
            } else if (progress < 0.62) {
                setCurrentStep(2);
            } else {
                setCurrentStep(3);
            }
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    // Cards visible based on current step
    // Step 1 -> Shows Card 1 (centered)
    // Step 2 -> Card 1 glides left, Card 2 enters from bottom beside it
    // Step 3 -> Cards glide, Card 3 enters from bottom beside Card 2 (3 side-by-side)
    const visibleCards = stepsData.slice(0, currentStep);

    return (
        <section ref={sectionRef} className={styles.stickyScrollSection}>
            {/* Pinned Viewport Stage */}
            <div className={styles.stickyViewport}>
                {/* Background Ambient Glow */}
                <div className={styles.ambientGlow} />

                <div className="container">
                    {/* Header Section */}
                    <div className={styles.sectionHeader}>
                        <div className={styles.topBadge}>
                            <span className={styles.badgeStar}>✦</span>
                            <span>Automated Workflow</span>
                        </div>

                        <h2>
                            Three Steps to <span className={styles.goldText}>Legal Intelligence</span>
                        </h2>

                        <p>
                            From document intake to verified court-ready insights in under 60 seconds.
                        </p>

                        {/* Interactive Step Progress Pills */}
                        <div className={styles.stepPillsRow}>
                            {stepsData.map((s) => {
                                const isActive = currentStep >= s.step;
                                const isCurrent = currentStep === s.step;
                                return (
                                    <React.Fragment key={s.step}>
                                        <button
                                            type="button"
                                            className={`${styles.stepPill} ${isActive ? styles.activePill : ''} ${isCurrent ? styles.currentPill : ''}`}
                                            onClick={() => setCurrentStep(s.step)}
                                        >
                                            <span className={styles.pillNumber}>{s.step}</span>
                                            <span>{s.step === 1 ? 'Intake' : s.step === 2 ? 'Analysis' : 'Insights'}</span>
                                        </button>
                                        {s.step < 3 && <div className={`${styles.pillConnector} ${currentStep > s.step ? styles.activeConnector : ''}`} />}
                                    </React.Fragment>
                                );
                            })}
                        </div>
                    </div>

                    {/* Cards Stage: Cards dynamically Show & Move Side-by-Side */}
                    <div className={styles.cardsRowWrapper}>
                        <motion.div layout className={styles.cardsRow}>
                            <AnimatePresence mode="popLayout">
                                {visibleCards.map((card, index) => (
                                    <React.Fragment key={card.step}>
                                        {/* Connecting Line between cards */}
                                        {index > 0 && (
                                            <motion.div
                                                className={styles.cardConnectionBridge}
                                                initial={{ scaleX: 0, opacity: 0 }}
                                                animate={{ scaleX: 1, opacity: 1 }}
                                                exit={{ scaleX: 0, opacity: 0 }}
                                                transition={{ duration: 0.45, ease: 'easeOut' }}
                                            >
                                                <div className={styles.bridgeTrack} />
                                                <div className={styles.bridgeGlow} />
                                                <span className={styles.bridgeArrow}>→</span>
                                            </motion.div>
                                        )}

                                        {/* Step Card with Bottom-to-Top entrance and Layout Move */}
                                        <motion.div
                                            layout
                                            className={`${styles.stepCard} ${currentStep === card.step ? styles.highlightedCard : ''}`}
                                            initial={{ opacity: 0, y: 90, scale: 0.92 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 70, scale: 0.92 }}
                                            transition={{
                                                layout: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                                                opacity: { duration: 0.45 },
                                                y: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                                                scale: { duration: 0.45 }
                                            }}
                                        >
                                            {/* Background Watermark 01, 02, 03 */}
                                            <div className={styles.watermarkNumber}>{card.watermark}</div>

                                            {/* Top Row: Icon with Step Number badge + Tag Pill */}
                                            <div className={styles.cardTopRow}>
                                                <div className={styles.iconBox}>
                                                    <span className={styles.stepBadge}>{card.step}</span>
                                                    <div className={styles.iconElement}>{card.icon}</div>
                                                </div>

                                                <div className={styles.tagPill}>
                                                    <span className={styles.tagStar}>✦</span>
                                                    <span>{card.tag}</span>
                                                </div>
                                            </div>

                                            {/* Card Heading & Description */}
                                            <h3>{card.title}</h3>
                                            <p>{card.description}</p>

                                            {/* 3 Checklist Feature Items */}
                                            <div className={styles.featureItemsList}>
                                                {card.features.map((feat, fIdx) => (
                                                    <div key={fIdx} className={styles.featureItem}>
                                                        <span className={styles.checkCircle}>✓</span>
                                                        <span>{feat}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </React.Fragment>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
