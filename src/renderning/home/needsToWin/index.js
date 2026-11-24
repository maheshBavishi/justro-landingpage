'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './needsToWin.module.scss';
import Button from '@/components/button';
import NeedsToWin3D from './needsToWin3D';

// Custom Modern Visual Illustrations for Each Feature
// Note: To prevent CSS transforms from overriding SVG coordinates,
// outer <g transform="..."> handles permanent positioning,
// and inner <g className="..."> handles isolated keyframe animations.

// 1. Deep Precedent & Judicial Research: Tilting Scales of Justice & Orbital Aura
const PrecedentIllustration = () => (
    <svg viewBox="0 0 340 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.cardSvg}>
        <defs>
            <linearGradient id="goldGrad1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fef3c7" />
                <stop offset="50%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
            <radialGradient id="glowRad1" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
            </radialGradient>
        </defs>

        {/* Ambient Pulsing Glow */}
        <circle cx="170" cy="90" r="75" fill="url(#glowRad1)" className={styles.animGlowPulse} />

        {/* Case Law Open Tome Base */}
        <ellipse cx="170" cy="132" rx="95" ry="24" fill="#f1f5f9" />
        <path d="M90 120 L170 138 L250 120 L250 108 L170 126 L90 108 Z" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1" />
        <path d="M90 108 L170 126 L250 108 L250 92 L170 110 L90 92 Z" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.2" />
        <path d="M95 90 Q170 105 170 110 Q170 105 245 90 L250 64 Q170 78 170 82 Q170 78 90 64 Z" fill="#fffdfa" stroke="#fcd34d" strokeWidth="1.5" />

        {/* Rotating Orbital Dashed Ring */}
        <ellipse cx="170" cy="85" rx="85" ry="26" stroke="rgba(245, 158, 11, 0.45)" strokeWidth="1.5" strokeDasharray="6 4" className={styles.animDashOrbit} />
        <circle cx="255" cy="85" r="4" fill="#d97706" />
        <circle cx="85" cy="85" r="3.5" fill="#fbbf24" />

        {/* Dynamic Tilting Scales of Justice */}
        <g transform="translate(170, 58)">
            {/* Center Pillar */}
            <line x1="0" y1="-28" x2="0" y2="24" stroke="#b45309" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="0" cy="-30" r="4.5" fill="#f59e0b" />

            {/* Tilting Balance Beam & Pans */}
            <g className={styles.animBalanceBeam}>
                <line x1="-36" y1="-16" x2="36" y2="-16" stroke="url(#goldGrad1)" strokeWidth="3" strokeLinecap="round" />

                {/* Left Pan */}
                <g>
                    <line x1="-36" y1="-16" x2="-46" y2="4" stroke="#d97706" strokeWidth="1.2" />
                    <line x1="-36" y1="-16" x2="-26" y2="4" stroke="#d97706" strokeWidth="1.2" />
                    <path d="M-50 4 Q-36 15 -22 4 Z" fill="url(#goldGrad1)" />
                </g>

                {/* Right Pan */}
                <g>
                    <line x1="36" y1="-16" x2="26" y2="-2" stroke="#d97706" strokeWidth="1.2" />
                    <line x1="36" y1="-16" x2="46" y2="-2" stroke="#d97706" strokeWidth="1.2" />
                    <path d="M22 -2 Q36 9 50 -2 Z" fill="url(#goldGrad1)" />
                </g>
            </g>
        </g>
    </svg>
);

// 2. Instant Transcript & Deposition Matrix: Live Animated Audio Equalizer Bars & Floating Speed Chip
const DepositionIllustration = () => (
    <svg viewBox="0 0 340 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.cardSvg}>
        <defs>
            <radialGradient id="glowRad2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="barGrad" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#d97706" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#fde68a" />
            </linearGradient>
        </defs>

        <circle cx="170" cy="90" r="75" fill="url(#glowRad2)" className={styles.animGlowPulse} />

        {/* Deposition Capsule Base */}
        <rect x="48" y="58" width="244" height="64" rx="32" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />

        {/* 11 Oscillating Soundwave Bars with Individual Keyframe Stagger */}
        {[-72, -58, -44, -30, -16, 0, 16, 30, 44, 58, 72].map((offset, i) => {
            const h = [16, 26, 42, 30, 48, 38, 46, 26, 38, 22, 14][i];
            return (
                <rect
                    key={i}
                    x={170 + offset - 3.5}
                    y={90 - h / 2}
                    width="7"
                    height={h}
                    rx="3.5"
                    fill="url(#barGrad)"
                    className={`${styles.waveBar} ${styles[`waveBar${i + 1}`]}`}
                />
            );
        })}

        {/* Floating Speed Chip: Locked at (186, 42) with inner floating animation */}
        <g transform="translate(186, 42)">
            <g className={styles.animFloatFast}>
                <rect x="-60" y="-14" width="120" height="28" rx="14" fill="#0f172a" />
                <text x="0" y="4.5" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="700" letterSpacing="0.04em" fontFamily="var(--font-inter), sans-serif">⚡ 10x SPEED</text>
                <polygon points="-5,14 5,14 0,20" fill="#0f172a" />
            </g>
        </g>

        {/* Bottom Timestamp Navigation Markers */}
        <circle cx="100" cy="142" r="3" fill="#cbd5e1" />
        <circle cx="170" cy="142" r="4.5" fill="#f59e0b" className={styles.animSpark} />
        <circle cx="240" cy="142" r="3" fill="#cbd5e1" />
        <line x1="80" y1="142" x2="260" y2="142" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="4 4" />
    </svg>
);

// 3. Contract Risk & Indemnity Analyzer: Scanning Laser Beam & Levitating Shield
const ContractIllustration = () => (
    <svg viewBox="0 0 340 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.cardSvg}>
        <defs>
            <radialGradient id="glowRad3" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
            </radialGradient>
        </defs>

        <circle cx="170" cy="90" r="75" fill="url(#glowRad3)" className={styles.animGlowPulse} />

        {/* Contract Sheet Document */}
        <g transform="translate(112, 32)">
            <rect x="0" y="0" width="116" height="116" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
            <path d="M0 12 Q0 0 12 0 L104 0 Q116 0 116 12 L116 22 L0 22 Z" fill="#f8fafc" />
            <line x1="16" y1="11" x2="52" y2="11" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
            <line x1="16" y1="38" x2="100" y2="38" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />

            {/* Redline Alert Clause */}
            <rect x="16" y="50" width="66" height="8" rx="4" fill="rgba(254, 202, 202, 0.75)" className={styles.animPulseClause} />
            <line x1="16" y1="54" x2="82" y2="54" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />

            {/* Approved Clause */}
            <rect x="16" y="66" width="88" height="8" rx="4" fill="rgba(167, 243, 208, 0.75)" className={styles.animPulseClause} />
            <line x1="16" y1="70" x2="104" y2="70" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />

            <line x1="16" y1="82" x2="60" y2="82" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />

            {/* Dynamic Laser Scanning Beam */}
            <g className={styles.animLaserScan}>
                <line x1="4" y1="34" x2="112" y2="34" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
                <line x1="4" y1="34" x2="112" y2="34" stroke="rgba(251, 191, 36, 0.45)" strokeWidth="6" strokeLinecap="round" />
            </g>
        </g>

        {/* Levitating Verified Audit Seal: Locked at (208, 106) with inner float */}
        <g transform="translate(208, 106)">
            <g className={styles.animFloatShield}>
                <circle cx="0" cy="0" r="23" fill="#ffffff" stroke="#fbbf24" strokeWidth="2" />
                <path d="M-8 -10 L8 -10 L12 0 Q12 12 0 16 Q-12 12 -12 0 Z" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" />
                <path d="M-4 0 L-1 3 L6 -4" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
        </g>
    </svg>
);

// 4. Opposition Strategy & Argument Simulator: Sweeping Radar Scanner & Ripple Ping
const CourtroomIllustration = () => (
    <svg viewBox="0 0 340 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.cardSvg}>
        <defs>
            <radialGradient id="glowRad4" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
            </radialGradient>
        </defs>

        <circle cx="170" cy="90" r="75" fill="url(#glowRad4)" className={styles.animGlowPulse} />

        {/* Radar Concentric Distance Rings */}
        <circle cx="170" cy="90" r="56" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="5 5" />
        <circle cx="170" cy="90" r="38" stroke="rgba(245, 158, 11, 0.4)" strokeWidth="1.5" className={styles.animRadarPing} />
        <circle cx="170" cy="90" r="18" fill="rgba(254, 243, 199, 0.85)" stroke="#f59e0b" strokeWidth="2" />

        {/* Coordinate Crosshairs */}
        <line x1="170" y1="26" x2="170" y2="154" stroke="#e2e8f0" strokeWidth="1.2" />
        <line x1="106" y1="90" x2="234" y2="90" stroke="#e2e8f0" strokeWidth="1.2" />

        {/* 360-Degree Continuous Rotating Radar Sweep Beam: Locked at (170, 90) */}
        <g transform="translate(170, 90)">
            <g className={styles.animRadarSweep}>
                <line x1="0" y1="0" x2="52" y2="-32" stroke="#d97706" strokeWidth="2.2" strokeLinecap="round" />
                <polygon points="0,0 52,-32 44,-46" fill="rgba(245, 158, 11, 0.22)" />
            </g>
        </g>

        {/* Target Blip / Anticipated Motion Beacon */}
        <circle cx="206" cy="54" r="5.5" fill="#f59e0b" className={styles.animSpark} />
        <circle cx="206" cy="54" r="11" stroke="#f59e0b" strokeWidth="1.2" strokeOpacity="0.5" className={styles.animRadarPing} />
        <circle cx="170" cy="90" r="6" fill="#b45309" />

        {/* Floating Predictive Victory Badge: Locked at (108, 50) */}
        <g transform="translate(108, 50)">
            <g className={styles.animFloatSlow}>
                <rect x="-44" y="-13" width="88" height="26" rx="13" fill="#ecfdf5" stroke="#a7f3d0" strokeWidth="1.2" />
                <text x="0" y="4" textAnchor="middle" fill="#059669" fontSize="11" fontWeight="700" fontFamily="var(--font-inter), sans-serif">✦ 94% WIN</text>
            </g>
        </g>
    </svg>
);

// 5. Pleadings & Motion Auto-Drafting: Laser Quill Pen Writing & Wax Court Seal
const DraftingIllustration = () => (
    <svg viewBox="0 0 340 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.cardSvg}>
        <defs>
            <radialGradient id="glowRad5" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="quillGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#d97706" />
                <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
        </defs>

        <circle cx="170" cy="90" r="75" fill="url(#glowRad5)" className={styles.animGlowPulse} />

        {/* Legal Pleading Sheet */}
        <g transform="translate(112, 32)">
            <path d="M10 0 L106 0 Q116 0 116 10 L116 106 Q116 116 106 116 L10 116 Q0 116 0 106 L0 10 Q0 0 10 0 Z" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
            <path d="M16 0 L16 32 L24 26 L32 32 L32 0 Z" fill="#f59e0b" />
            <line x1="42" y1="16" x2="92" y2="16" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" />
            <line x1="18" y1="46" x2="98" y2="46" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="18" y1="60" x2="98" y2="60" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="18" y1="74" x2="82" y2="74" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" />

            {/* Golden Jurisdiction Court Seal */}
            <circle cx="82" cy="94" r="13" fill="#fef3c7" stroke="#d97706" strokeWidth="1.5" className={styles.animSealPulse} />
            <text x="82" y="98" textAnchor="middle" fill="#b45309" fontSize="11" fontWeight="800" fontFamily="serif">§</text>
        </g>

        {/* Dynamic Writing Laser Quill Pen: Locked at (216, 52) */}
        <g transform="translate(216, 52)">
            <g className={styles.animQuill}>
                <path d="M0 42 L34 0 C37 8, 37 17, 29 24 L8 45 Z" fill="url(#quillGrad)" />
                <line x1="0" y1="42" x2="-7" y2="49" stroke="#b45309" strokeWidth="2" strokeLinecap="round" />
                <circle cx="-7" cy="49" r="3" fill="#f59e0b" className={styles.animSpark} />
            </g>
        </g>
    </svg>
);

// 6. Bank-Grade Attorney-Client Privilege Shield: Floating Vault & Orbiting Badges
const SecurityIllustration = () => (
    <svg viewBox="0 0 340 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.cardSvg}>
        <defs>
            <radialGradient id="glowRad6" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="shieldGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#fef3c7" />
            </linearGradient>
        </defs>

        <circle cx="170" cy="90" r="75" fill="url(#glowRad6)" className={styles.animGlowPulse} />

        {/* Orbiting Security Boundary Ring */}
        <ellipse cx="170" cy="96" rx="90" ry="30" stroke="rgba(245, 158, 11, 0.35)" strokeWidth="1.5" strokeDasharray="6 4" className={styles.animDashOrbit} />

        {/* Central Floating Vault Shield with Padlock: Locked at (170, 85) */}
        <g transform="translate(170, 85)">
            <g className={styles.animVaultShield}>
                <path d="M0 -40 L34 -24 C34 14, 19 38, 0 48 C-19 38, -34 14, -34 -24 Z" fill="url(#shieldGrad)" stroke="#f59e0b" strokeWidth="2.5" />
                <rect x="-13" y="-5" width="26" height="22" rx="5" fill="#d97706" />
                <path d="M-7 -5 L-7 -13 C-7 -19, 7 -19, 7 -13 L7 -5" stroke="#b45309" strokeWidth="2.8" fill="none" strokeLinecap="round" />
                <circle cx="0" cy="4" r="2.8" fill="#ffffff" />
                <line x1="0" y1="7" x2="0" y2="12" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            </g>
        </g>

        {/* Counter-Floating Security Certification Chips: Locked at (95, 82) and (245, 98) */}
        <g transform="translate(95, 82)">
            <g className={styles.animFloatLeft}>
                <rect x="-38" y="-13" width="76" height="26" rx="13" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.2" />
                <text x="0" y="4" textAnchor="middle" fill="#0f172a" fontSize="11" fontWeight="700" fontFamily="var(--font-inter), sans-serif">AES-256</text>
            </g>
        </g>
        <g transform="translate(245, 98)">
            <g className={styles.animFloatRight}>
                <rect x="-44" y="-13" width="88" height="26" rx="13" fill="#ecfdf5" stroke="#a7f3d0" strokeWidth="1.2" />
                <text x="0" y="4" textAnchor="middle" fill="#059669" fontSize="11" fontWeight="700" fontFamily="var(--font-inter), sans-serif">SOC-2 ✓</text>
            </g>
        </g>
    </svg>
);

// Feature Cards Data: Original Clean Content
const features = [
    {
        id: 1,
        title: 'Deep Precedent & Judicial Research',
        description: 'Scan 50+ million federal and state judicial opinions in 2.4 seconds with auto-verified Bluebook citations and Shepardizing.',
        stat: '50M+ Opinions Scanned',
        illustration: <PrecedentIllustration />
    },
    {
        id: 2,
        title: 'Instant Transcript & Deposition Matrix',
        description: 'Convert 300-page deposition transcripts into executive chronologies, impeachment indexes, and key admission summaries.',
        stat: '10x Faster Prep',
        illustration: <DepositionIllustration />
    },
    {
        id: 3,
        title: 'Contract Risk & Indemnity Analyzer',
        description: 'Instantly pinpoint non-standard liabilities, missing carve-outs, unfavorable termination clauses, and rogue indemnity terms.',
        stat: 'Zero Blind Spots',
        illustration: <ContractIllustration />
    },
    {
        id: 4,
        title: 'Opposition Strategy & Argument Simulator',
        description: 'Stress-test trial arguments against AI simulated opposing counsel tendencies, anticipated objections, and judge proclivities.',
        stat: '94% Prediction Accuracy',
        illustration: <CourtroomIllustration />
    },
    {
        id: 5,
        title: 'Pleadings & Motion Auto-Drafting',
        description: 'Generate jurisdiction-formatted motions, discovery demands, interrogatories, and notices aligned with local court rules.',
        stat: '100% Local Rule Compliant',
        illustration: <DraftingIllustration />
    },
    {
        id: 6,
        title: 'Bank-Grade Attorney-Client Privilege Shield',
        description: 'Zero data retention on LLM foundational models. SOC 2 Type II, HIPAA, and ABA Model Rule 1.6 strict confidentiality adherence.',
        stat: 'Zero LLM Training on Data',
        illustration: <SecurityIllustration />
    }
];

export default function NeedsToWin() {
    return (
        <section className={styles.needsToWin}>
            {/* Top & Bottom Golden Horizon Divider Lines */}
            <div className={styles.topDividerLine} />
            <div className={styles.bottomDividerLine} />

            {/* Infinite 3D Background Canvas */}
            <NeedsToWin3D />

            {/* Ambient Lighting Dome */}
            <div className={styles.sectionGlow} />

            <div className="container">
                {/* Header Section */}
                <motion.div
                    className={styles.sectionHeader}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className={styles.topBadge}>
                        <span className={styles.badgePulse} />
                        <span>Core Litigation Intelligence</span>
                    </div>

                    <h2>
                        Everything Your Practice Needs to <span className={styles.goldText}>Win More Cases</span>
                    </h2>

                    <p>
                        Engineered specifically for complex disputes, commercial litigation, and high-stakes advisory.
                        Out-read, out-draft, and out-prepare opposing counsel.
                    </p>
                </motion.div>

                {/* 6 Modern Feature Cards Grid */}
                <div className={styles.featuresGrid}>
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            className={styles.featureCard}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {/* Visual Animated Illustration Area */}
                            <div className={styles.cardImageWrapper}>
                                {feature.illustration}
                            </div>

                            {/* Card Content Area: Clean Original Data */}
                            <div className={styles.cardContent}>
                                <div className={styles.cardStatBadge}>
                                    <span>{feature.stat}</span>
                                </div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>

                                <div className={styles.cardAction}>
                                    <span>Explore capability</span>
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
