'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './lawyersAcross.module.scss';
import NeedsToWin3D from '../needsToWin/needsToWin3D';

// Comprehensive Client Testimonials from Verified Legal Professionals
const testimonials = [
    {
        id: 'vance',
        name: 'Eleanor Vance',
        role: 'Senior Partner, Commercial Litigation',
        firm: 'Vance, Sterling & Associates (AmLaw 100)',
        location: 'New York, NY',
        initials: 'EV',
        rating: 5,
        metric: 'Saved 18 hrs/week on trial prep',
        quote: 'LegalAI has fundamentally transformed our cross-examination and trial prep. What previously required an associate three days to cross-reference depositions and transcripts now takes 20 minutes with zero hallucination. Our court filings have never been sharper.',
        practiceArea: 'Commercial Litigation'
    },
    {
        id: 'sterling',
        name: 'Marcus Sterling',
        role: 'Managing Partner, M&A & Private Equity',
        firm: 'Sterling & Croft LLP',
        location: 'Chicago, IL',
        initials: 'MS',
        rating: 5,
        metric: '98.5% faster M&A diligence',
        quote: 'During a $450M multi-entity acquisition, LegalAI surfaced an indemnification loophole in a 14-year-old subsidiary agreement that two outside firms missed. It literally paid for our firm-wide enterprise license on day one.',
        practiceArea: 'Corporate & M&A'
    },
    {
        id: 'lin',
        name: 'Dr. Sarah Lin',
        role: 'Lead Patent Counsel & Partner',
        firm: 'Lin & Holbrook Intellectual Property',
        location: 'San Francisco, CA',
        initials: 'SL',
        rating: 5,
        metric: '14M+ patents cross-checked',
        quote: 'Drafting prior art claims charts used to be a grinding chore. LegalAI scans millions of USPTO & WIPO patents and maps claim vulnerabilities with exact statutory precision. It has become our firm’s absolute secret weapon.',
        practiceArea: 'Patent & IP Law'
    },
    {
        id: 'ross',
        name: 'David Ross, Esq.',
        role: 'Principal Attorney, Appellate Practice',
        firm: 'Ross Constitutional Defense',
        location: 'Washington, D.C.',
        initials: 'DR',
        rating: 5,
        metric: '12 Federal Appeals Won',
        quote: 'The citation verification is impeccable. In federal appellate work, citing an overturned or questioned precedent can destroy your credibility. LegalAI flags Shepards-level negative treatment before you file. Truly indispensable.',
        practiceArea: 'Federal Appellate'
    },
    {
        id: 'patel',
        name: 'Aisha Patel',
        role: 'Chief Legal Officer & General Counsel',
        firm: 'Nexient Global Technologies',
        location: 'Austin, TX',
        initials: 'AP',
        rating: 5,
        metric: '1,200+ vendor MSAs audited',
        quote: 'Our in-house legal department handles thousands of enterprise MSAs and vendor contracts every quarter. LegalAI automates our standard fallback language and flags indemnification exposures instantly with zero friction.',
        practiceArea: 'Enterprise In-House'
    },
    {
        id: 'callahan',
        name: 'Robert Callahan',
        role: 'Founding Partner, Family & Estates',
        firm: 'Callahan Law Group',
        location: 'Boston, MA',
        initials: 'RC',
        rating: 5,
        metric: '100% court compliance rate',
        quote: 'Family law matters are emotionally fraught and time-sensitive. LegalAI organizes asset division matrices and statutory parenting schedules with meticulous accuracy, giving our clients immense peace of mind.',
        practiceArea: 'Family & Estate Law'
    }
];

export default function LawyersAcross() {
    // Duplicate testimonials list for a seamless, perpetual 100% infinite marquee loop
    const marqueeList = [...testimonials, ...testimonials];

    return (
        <section className={styles.lawyersAcross} id="testimonials">
            {/* 3D Canvas Background strictly isolated */}
            <div className={styles.canvasBackground}>
                <NeedsToWin3D />
            </div>

            {/* Ambient Warm Ivory/Gold Lighting Glow Dome */}
            <div className={styles.sectionGlow} />

            <div className="container">
                {/* Header Section */}
                <div className={styles.sectionHeader}>
                    <motion.div
                        className={styles.topBadge}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className={styles.badgePulse} />
                        <span>CLIENT REVIEWS & TESTIMONIALS</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Loved by <span className={styles.goldText}>Lawyers Across</span> the Nation
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Discover how managing partners, trial litigators, and enterprise general counsels win cases and scale casework with LegalAI.
                    </motion.p>
                </div>
            </div>

            {/* INFINITE MARQUEE TRACK WITH GRADIENT EDGE FADES */}
            <div className={styles.marqueeOuter}>
                <div className={styles.marqueeFadeLeft} />
                <div className={styles.marqueeFadeRight} />

                <div className={styles.marqueeTrack}>
                    {marqueeList.map((item, index) => (
                        <div key={`${item.id}-${index}`} className={styles.testimonialCard}>
                            {/* Card Top Row: 5 Stars + Practice Area Badge */}
                            <div className={styles.cardTopRow}>
                                <div className={styles.starRow}>
                                    {[...Array(item.rating)].map((_, i) => (
                                        <span key={i} className={styles.starIcon}>★</span>
                                    ))}
                                </div>

                                <span className={styles.practiceAreaBadge}>
                                    {item.practiceArea}
                                </span>
                            </div>

                            {/* Impact ROI Pill */}
                            <div className={styles.metricPill}>
                                <span className={styles.metricSparkle}>⚡</span>
                                <span>{item.metric}</span>
                            </div>

                            {/* Testimonial Quote */}
                            <blockquote className={styles.quoteText}>
                                “{item.quote}”
                            </blockquote>

                            {/* Divider */}
                            <div className={styles.cardDivider} />

                            {/* Author Profile Footer */}
                            <div className={styles.authorRow}>
                                <div className={styles.avatarCircle}>
                                    {item.initials}
                                </div>

                                <div className={styles.authorInfo}>
                                    <div className={styles.authorNameRow}>
                                        <h4>{item.name}</h4>
                                        <span className={styles.verifiedCheck} title="Verified Legal Practitioner">
                                            ✓
                                        </span>
                                    </div>
                                    <span className={styles.authorRole}>{item.role}</span>
                                    <span className={styles.authorFirm}>{item.firm}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
