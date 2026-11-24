'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import styles from './areaofLaw.module.scss';
import NeedsToWin3D from '../needsToWin/needsToWin3D';

// 8 Complete Practice Areas with domain-expert legal AI intelligence
const practiceAreas = [
    {
        id: 'corporate',
        title: 'Corporate Law',
        precedents: '12K+ Precedents',
        tagline: 'Dedicated M&A & Governance Engine',
        description: 'M&A due diligence, shareholder disputes, governance bylaws, and cap table audits.',
        workflows: [
            { name: 'Review Shareholder Agreements', stat: '40-sec audit', detail: 'Detects drag-along & veto anomalies' },
            { name: 'Cap Table Due Diligence', stat: 'Instant scan', detail: 'Cross-verifies dilution & liquidation rights' },
            { name: '409A Valuation Compliance', stat: 'Audit-ready', detail: 'Validates IRS §409A safe harbor criteria' }
        ],
        model: 'Model: Fine-Tuned Legal AI v4.2',
        confidence: '99.1% Confidence',
        ctaText: 'Explore Corporate Law Solutions',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
            </svg>
        )
    },
    {
        id: 'family',
        title: 'Family Law',
        precedents: '8K+ Precedents',
        tagline: 'Domestic Relations & Estates Engine',
        description: 'Divorce decrees, child custody matrices, prenuptial agreements, and asset settlements.',
        workflows: [
            { name: 'Marital Asset Division Matrix', stat: 'Real-time', detail: 'Categorizes separate vs community property' },
            { name: 'Parenting Plan Schedule Validator', stat: 'Court-ready', detail: 'Cross-checks statutory custody guidelines' },
            { name: 'Prenuptial Agreement Risk Audit', stat: 'Full scan', detail: 'Flags unconscionability & disclosure gaps' }
        ],
        model: 'Model: Fine-Tuned Legal AI v4.1',
        confidence: '98.9% Confidence',
        ctaText: 'Explore Family Law Solutions',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        )
    },
    {
        id: 'immigration',
        title: 'Immigration Law',
        precedents: '15K+ Precedents',
        tagline: 'Visa & Federal Appeals Engine',
        description: 'Employment petitions, PERM audits, asylum documentation, and USCIS appeals.',
        workflows: [
            { name: 'H-1B & O-1 Petition Auto-Drafting', stat: '60-sec draft', detail: 'USCIS policy manual pattern alignment' },
            { name: 'PERM Labor Audit & Evidence Sourcing', stat: 'DOL verify', detail: 'Cross-references DOL wage indices' },
            { name: 'Asylum Appeal Index & Country Reports', stat: 'State Dept', detail: 'Compiles cited human rights precedents' }
        ],
        model: 'Model: Fine-Tuned Legal AI v4.3',
        confidence: '99.4% Confidence',
        ctaText: 'Explore Immigration Law Solutions',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
        )
    },
    {
        id: 'criminal',
        title: 'Criminal Defense',
        precedents: '10K+ Precedents',
        tagline: 'Constitutional Defense Matrix',
        description: 'Suppression motions, Brady evidentiary review, trial exhibits, and sentencing guidelines.',
        workflows: [
            { name: '4th Amendment Suppression Motions', stat: 'Case-matched', detail: 'Identifies unlawful search & seizure gaps' },
            { name: 'Brady Evidence Disclosure Cross-Check', stat: 'Evidentiary', detail: 'Flags withheld exculpatory records' },
            { name: 'Federal Sentencing Guidelines Matrix', stat: 'USSC matrix', detail: 'Calculates base offense & departure levels' }
        ],
        model: 'Model: Fine-Tuned Legal AI v4.2',
        confidence: '98.6% Confidence',
        ctaText: 'Explore Criminal Defense Solutions',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m14 13-7.5 7.5c-.8.8-2 .8-2.8 0s-.8-2 0-2.8L11 10" />
                <path d="m16 16 6-6" />
                <path d="m8 8 6-6" />
                <path d="m9 7 8 8" />
                <path d="m21 11-8-8" />
            </svg>
        )
    },
    {
        id: 'ip',
        title: 'IP & Patents',
        precedents: '6K+ Precedents',
        tagline: 'Patent & Brand Defense Engine',
        description: 'Patent claims chart analysis, prior art freedom-to-operate, trademarks, and licensing.',
        workflows: [
            { name: 'Prior Art & Freedom-to-Operate Scan', stat: 'USPTO + WIPO', detail: 'Scans 14M+ active global patents' },
            { name: 'Patent Claim Chart Comparison Matrix', stat: 'Side-by-side', detail: 'Maps independent & dependent claim claims' },
            { name: 'USPTO Trademark Clearance Audit', stat: 'TTAB rules', detail: 'Detects confusing similarity & refusal risks' }
        ],
        model: 'Model: Fine-Tuned Legal AI v4.4',
        confidence: '99.2% Confidence',
        ctaText: 'Explore IP & Patent Solutions',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="9" y1="18" x2="15" y2="18" />
                <line x1="10" y1="22" x2="14" y2="22" />
                <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
            </svg>
        )
    },
    {
        id: 'tax',
        title: 'Tax Law',
        precedents: '9K+ Precedents',
        tagline: 'Federal IRC & Cross-Border Engine',
        description: 'Federal IRC code compliance, multi-state tax nexus, 1031 exchanges, and transfer pricing.',
        workflows: [
            { name: 'IRC Section 1031 Exchange Verification', stat: 'Safe-harbor', detail: 'Validates 45-day & 180-day statutory dates' },
            { name: 'Cross-Border Transfer Pricing Audit', stat: 'OECD BEPS', detail: 'Tests arm’s-length transaction compliance' },
            { name: 'Multi-State Nexus Exposure Analysis', stat: 'Wayfair rules', detail: 'Evaluates economic sales thresholds' }
        ],
        model: 'Model: Fine-Tuned Legal AI v4.2',
        confidence: '99.5% Confidence',
        ctaText: 'Explore Tax Law Solutions',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
        )
    },
    {
        id: 'employment',
        title: 'Employment Law',
        precedents: '11K+ Precedents',
        tagline: 'Labor Relations & FLSA Engine',
        description: 'Employment agreements, non-compete enforceability, severance packages, and HR audits.',
        workflows: [
            { name: 'Non-Compete Enforceability Scan', stat: 'FTC + State', detail: 'Audits geographic & temporal reasonableness' },
            { name: 'Severance Agreement & Release Check', stat: 'ADEA / OWBPA', detail: 'Ensures 21/45 day consideration rules' },
            { name: 'FLSA Exemption Classification Audit', stat: 'DOL salary', detail: 'Tests duties & salary threshold tests' }
        ],
        model: 'Model: Fine-Tuned Legal AI v4.1',
        confidence: '99.0% Confidence',
        ctaText: 'Explore Employment Law Solutions',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
        )
    },
    {
        id: 'compliance',
        title: 'Regulatory Compliance',
        precedents: '7K+ Precedents',
        tagline: 'SEC & Global Mandates Engine',
        description: 'SEC disclosures, FDA filings, HIPAA/HITECH security rules, and EU AI Act mandates.',
        workflows: [
            { name: 'SEC 10-K & 10-Q Mandate Validation', stat: 'EDGAR scan', detail: 'Verifies Item 1A risk disclosure language' },
            { name: 'HIPAA / HITECH Privacy Gap Analysis', stat: 'HHS OCR rules', detail: 'Audits BAA agreements & ePHI controls' },
            { name: 'EU AI Act & Global Data Compliance', stat: 'EU Tier 1-4', detail: 'Classifies high-risk algorithmic models' }
        ],
        model: 'Model: Fine-Tuned Legal AI v4.3',
        confidence: '99.7% Confidence',
        ctaText: 'Explore Compliance Solutions',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
            </svg>
        )
    }
];

export default function AreaofLaw() {
    const sectionRef = useRef(null);
    const viewportRef = useRef(null);
    const firstCardRef = useRef(null);

    const [activeIndex, setActiveIndex] = useState(0);
    const activeIndexRef = useRef(0);
    activeIndexRef.current = activeIndex;

    const isAnimatingRef = useRef(false);
    const isDraggingRef = useRef(false);

    const [metrics, setMetrics] = useState({
        centerOffset: 370,
        stride: 488,
    });

    // Pinned scroll progression across the sticky section
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end end']
    });

    // Dynamically calculate exact pixel center offset so active card is ALWAYS DEAD CENTER
    useEffect(() => {
        const updateMetrics = () => {
            if (viewportRef.current && firstCardRef.current) {
                const viewportWidth = viewportRef.current.offsetWidth || window.innerWidth;
                const cardWidth = firstCardRef.current.offsetWidth || 460;
                const gap = 28;
                const stride = cardWidth + gap;
                const offset = (viewportWidth - cardWidth) / 2;

                setMetrics({
                    centerOffset: offset,
                    stride: stride
                });
            }
        };

        updateMetrics();
        window.addEventListener('resize', updateMetrics);
        return () => window.removeEventListener('resize', updateMetrics);
    }, []);

    // Smooth navigation to a specific card index
    const goToCard = (index) => {
        const safeIdx = Math.max(0, Math.min(index, practiceAreas.length - 1));
        isAnimatingRef.current = true;
        setActiveIndex(safeIdx);

        if (sectionRef.current) {
            const sectionTop = sectionRef.current.offsetTop;
            const sectionHeight = sectionRef.current.offsetHeight;
            const viewportHeight = window.innerHeight;
            const maxScroll = sectionHeight - viewportHeight;
            const targetScroll = sectionTop + (safeIdx / (practiceAreas.length - 1)) * maxScroll;

            window.scrollTo({
                top: targetScroll,
                behavior: 'smooth'
            });
        }

        setTimeout(() => {
            isAnimatingRef.current = false;
        }, 480);
    };

    // SWIPE / DRAG GESTURE HANDLER (Touch & Mouse Drag)
    const handleDragEnd = (event, info) => {
        setTimeout(() => {
            isDraggingRef.current = false;
        }, 50);

        const { offset, velocity } = info;
        const swipeThreshold = 45; // Minimum px to trigger card change
        const velocityThreshold = 250; // Minimum velocity to trigger card change

        // Dragged Left -> Next Card
        if ((offset.x < -swipeThreshold || velocity.x < -velocityThreshold) && activeIndexRef.current < practiceAreas.length - 1) {
            goToCard(activeIndexRef.current + 1);
        }
        // Dragged Right -> Previous Card
        else if ((offset.x > swipeThreshold || velocity.x > velocityThreshold) && activeIndexRef.current > 0) {
            goToCard(activeIndexRef.current - 1);
        }
        // Small drag -> Snap back to current card center
        else {
            goToCard(activeIndexRef.current);
        }
    };

    // ONE-SCROLL-ONE-CARD LOCK: Prevents single scroll from jumping 2 cards
    useEffect(() => {
        const handleWheel = (e) => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();

            // Check if section stage is currently pinned in viewport
            const isPinned = rect.top <= 5 && rect.bottom >= window.innerHeight - 5;
            if (!isPinned) return;

            const delta = e.deltaY;
            if (Math.abs(delta) < 20) return;

            // Scroll Down: advance by EXACTLY 1 card
            if (delta > 0 && activeIndexRef.current < practiceAreas.length - 1) {
                e.preventDefault();
                if (isAnimatingRef.current) return;
                goToCard(activeIndexRef.current + 1);
                return;
            }

            // Scroll Up: move back by EXACTLY 1 card
            if (delta < 0 && activeIndexRef.current > 0) {
                e.preventDefault();
                if (isAnimatingRef.current) return;
                goToCard(activeIndexRef.current - 1);
                return;
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        return () => window.removeEventListener('wheel', handleWheel);
    }, []);

    // Fallback sync for scrollbar dragging
    useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (progress) => {
            if (isAnimatingRef.current || isDraggingRef.current) return;
            const total = practiceAreas.length;
            const nextIdx = Math.min(Math.floor(progress * total), total - 1);
            setActiveIndex(nextIdx);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    // Click on any card in the slider to bring it directly to center
    const handleCardClick = (index) => {
        if (isDraggingRef.current) return;
        goToCard(index);
    };

    // Calculate exact X position: puts the active card at exactly 50% of screen width
    const targetX = metrics.centerOffset - activeIndex * metrics.stride;

    return (
        <section ref={sectionRef} className={styles.areaofLawStickyWrapper}>
            <div className={styles.topDividerLine} />
            <div className={styles.bottomDividerLine} />
            {/* Pinned Sticky Stage (100vh) */}
            <div className={styles.stickyStage}>
                {/* 3D Canvas Background strictly isolated in absolute positioning */}
                <div className={styles.canvasBackground}>
                    <NeedsToWin3D />
                </div>

                {/* Ambient Warm Ivory/Gold Lighting Glow Dome from NeedsToWin */}
                <div className={styles.sectionGlow} />

                {/* Section Header */}
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <div className={styles.topBadge}>
                            <span className={styles.badgePulse} />
                            <span>Core Litigation & Advisory Areas</span>
                        </div>

                        <h2>
                            Expert AI for Every <span className={styles.goldText}>Area of Law</span>
                        </h2>

                        <p>
                            LegalAI is trained on specialized legal databases for each practice area, giving you domain-expert accuracy rather than generic AI output.
                        </p>
                    </div>
                </div>

                {/* FULL-WIDTH CONTINUOUS HORIZONTAL SLIDER VIEWPORT (Drag & Swipe enabled) */}
                <div ref={viewportRef} className={styles.sliderViewport}>
                    <motion.div
                        drag="x"
                        dragConstraints={{ left: targetX, right: targetX }}
                        dragElastic={0.22}
                        onDragStart={() => {
                            isDraggingRef.current = true;
                        }}
                        onDragEnd={handleDragEnd}
                        animate={{ x: targetX }}
                        transition={{
                            type: 'spring',
                            stiffness: 240,
                            damping: 26,
                            mass: 0.6
                        }}
                        className={styles.sliderTrack}
                    >
                        {practiceAreas.map((area, index) => {
                            const isActive = index === activeIndex;

                            return (
                                <div
                                    key={area.id}
                                    ref={index === 0 ? firstCardRef : null}
                                    onClick={() => handleCardClick(index)}
                                    className={`${styles.practiceCard} ${isActive ? styles.activeCard : ''}`}
                                >
                                    {/* Card Top Row: Icon + Title info + Precedents Badge */}
                                    <div className={styles.cardTopRow}>
                                        <div className={styles.iconBoxCluster}>
                                            <div className={styles.practiceIconBox}>
                                                {area.icon}
                                            </div>
                                            <div className={styles.cardTitleInfo}>
                                                <h4>{area.title}</h4>
                                                <span className={styles.taglineText}>{area.tagline}</span>
                                            </div>
                                        </div>

                                        <div className={styles.badgeCluster}>
                                            <span className={styles.precedentsPill}>
                                                {area.precedents}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className={styles.cardDesc}>
                                        {area.description}
                                    </p>

                                    {/* Specialized AI Workflows List */}
                                    <div className={styles.workflowsSection}>
                                        <div className={styles.workflowsHeader}>
                                            <span className={styles.workflowSparkle}>✦</span>
                                            <span>SPECIALIZED AI WORKFLOWS:</span>
                                        </div>

                                        <div className={styles.workflowsList}>
                                            {area.workflows.map((wf, idx) => (
                                                <div key={idx} className={styles.workflowPill}>
                                                    <div className={styles.checkIcon}>
                                                        ✓
                                                    </div>
                                                    <div className={styles.workflowPillContent}>
                                                        <span className={styles.wfName}>{wf.name}</span>
                                                        <span className={styles.wfDetail}>{wf.detail}</span>
                                                    </div>
                                                    <span className={styles.wfStat}>{wf.stat}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Specs Row */}
                                    <div className={styles.specsRow}>
                                        <span className={styles.modelTag}>{area.model}</span>
                                        <span className={styles.confidenceTag}>
                                            <span className={styles.confidenceDot} />
                                            {area.confidence}
                                        </span>
                                    </div>

                                    {/* Explore CTA Button */}
                                    <button type="button" className={styles.exploreButton}>
                                        <span>{area.ctaText}</span>
                                        <span className={styles.buttonArrow}>→</span>
                                    </button>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
