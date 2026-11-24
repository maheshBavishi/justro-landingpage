'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import styles from './themselves.module.scss';

// 6 Verified Metric Items from Screenshot
const metricItems = [
    {
        id: 'cases',
        number: '50000+',
        label: 'Cases Analyzed',
        note: 'And growing every day',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
            </svg>
        )
    },
    {
        id: 'accuracy',
        number: '98%',
        label: 'Accuracy Rate',
        note: 'Independently verified',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
            </svg>
        )
    },
    {
        id: 'firms',
        number: '500+',
        label: 'Law Firms',
        note: 'From solo to AmLaw 100',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="7" />
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
            </svg>
        )
    },
    {
        id: 'speed',
        number: '10×',
        label: 'Faster Research',
        note: 'vs. traditional methods',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
        )
    },
    {
        id: 'rating',
        number: '4.9★',
        label: 'User Rating',
        note: '2,500+ verified reviews',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
        )
    },
    {
        id: 'uptime',
        number: '99.9%',
        label: 'Uptime SLA',
        note: 'Enterprise reliability',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        )
    }
];

// Counting number animation with Framer Motion
function AnimatedNumber({ value }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-40px' });
    const [renderedText, setRenderedText] = useState('0');

    useEffect(() => {
        if (!isInView) return;

        const match = value.match(/([\d.]+)(.*)/);
        if (!match) {
            setRenderedText(value);
            return;
        }

        const targetNum = parseFloat(match[1]);
        const suffix = match[2] || '';
        const isDecimal = match[1].includes('.');
        const decimalPlaces = isDecimal ? match[1].split('.')[1].length : 0;

        const controls = animate(0, targetNum, {
            duration: 2.2,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (latest) => {
                if (isDecimal) {
                    setRenderedText(`${latest.toFixed(decimalPlaces)}${suffix}`);
                } else {
                    const formatted = Math.round(latest).toLocaleString();
                    setRenderedText(`${formatted}${suffix}`);
                }
            }
        });

        return () => controls.stop();
    }, [isInView, value]);

    return <span ref={ref}>{renderedText}</span>;
}

export default function Themselves() {
    return (
        <section className={styles.themselves}>
            {/* Ambient Lighting & Subtle Glow */}
            <div className={styles.sectionGlow} />

            <div className="container">
                {/* Header Section */}
                <motion.div
                    className={styles.sectionHeader}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className={styles.topBadge}>
                        <span className={styles.badgePulse} />
                        <span>PROVEN IMPACT & METRICS</span>
                    </div>

                    <h2>
                        Numbers That Speak for <span className={styles.goldText}>Themselves</span>
                    </h2>

                    <p>
                        Results achieved by legal professionals using LegalAI daily.
                    </p>
                </motion.div>

                {/* 3x2 Metrics Cards Grid */}
                <motion.div
                    className={styles.metricsGrid}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                >
                    {metricItems.map((item) => (
                        <motion.div
                            key={item.id}
                            className={styles.metricCard}
                            variants={{
                                hidden: { opacity: 0, y: 30, scale: 0.95 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                        duration: 0.6,
                                        ease: [0.16, 1, 0.3, 1]
                                    }
                                }
                            }}
                            whileHover={{
                                y: -6,
                                transition: { duration: 0.25, ease: 'easeOut' }
                            }}
                        >
                            {/* Card Top Row: Icon + Verified Metric Tag */}
                            <div className={styles.cardTopRow}>
                                <div className={styles.iconBox}>
                                    {item.icon}
                                </div>
                                <span className={styles.verifiedBadge}>
                                    VERIFIED METRIC
                                </span>
                            </div>

                            {/* Middle: Big Stat Number + Title */}
                            <div className={styles.cardMiddle}>
                                <div className={styles.statNumber}>
                                    <AnimatedNumber value={item.number} />
                                </div>
                                <h3 className={styles.statLabel}>
                                    {item.label}
                                </h3>
                            </div>

                            {/* Divider Line */}
                            <div className={styles.cardDivider} />

                            {/* Bottom Note */}
                            <p className={styles.bottomNote}>
                                {item.note}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
