'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './trustedAnimation.module.scss';

const trustedPartners = [
    {
        name: "AmLaw 100 Firms",
        category: "Enterprise Practice",
        stat: "99.4% Adoption",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 2l10 8H2z" />
            </svg>
        )
    },
    {
        name: "Fortune 500 Legal",
        category: "Corporate Teams",
        stat: "120+ In-House",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
        )
    },
    {
        name: "State Bar Certified",
        category: "Verified Practice",
        stat: "50 States",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                <path d="M7 21h10M12 3v18M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
            </svg>
        )
    },
    {
        name: "Top Litigation Firms",
        category: "Trial Counsel",
        stat: "10,000+ Briefs",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <path d="M15 18a3 3 0 1 0-6 0" />
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
            </svg>
        )
    },
    {
        name: "Corporate Counsel",
        category: "Risk & Compliance",
        stat: "SOC-2 Ready",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            </svg>
        )
    },
    {
        name: "IP Law Specialists",
        category: "Patent & Tech",
        stat: "35k+ Filings",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                <path d="M9 18h6M10 22h4" />
            </svg>
        )
    },
    {
        name: "Appellate Practice",
        category: "Supreme Court",
        stat: "Top Tier",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="m10 15 5-3-5-3v6Z" />
            </svg>
        )
    },
    {
        name: "Global Arbitration",
        category: "Cross-Border",
        stat: "42 Countries",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20" />
            </svg>
        )
    }
];

export default function TrustedAnimation() {
    // Duplicate the partner list for a perfectly seamless 100% infinite marquee loop
    const marqueeList = [...trustedPartners, ...trustedPartners];

    return (
        <section className={styles.trustedAnimation}>
            <div className='container'>
                <div className={styles.title}>
                    <motion.div
                        className={styles.titleBadge}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span>BENCHMARK OF LEGAL EXCELLENCE</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Trusted by legal professionals at
                    </motion.h2>
                </div>
            </div>

            {/* Infinite Marquee Track with Edge Fade Masks */}
            <div className={styles.marqueeOuter}>
                <div className={styles.marqueeFadeLeft} />
                <div className={styles.marqueeFadeRight} />

                <motion.div
                    className={styles.marqueeTrack}
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30
                    }}
                >
                    {marqueeList.map((item, index) => (
                        <div key={index} className={styles.box}>
                            <div className={styles.iconWrapper}>
                                {item.icon}
                            </div>
                            <div className={styles.textGroup}>
                                <span className={styles.boxTitle}>{item.name}</span>
                                <span className={styles.boxSubtitle}>{item.category}</span>
                            </div>
                            <div className={styles.statTag}>
                                {item.stat}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
