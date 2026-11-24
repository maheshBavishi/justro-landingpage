'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            {/* Ambient Lighting Domes */}
            <div className={styles.topGlow} />

            {/* PRE-FOOTER CTA CARD */}
            <div className="container">
                <motion.div
                    className={styles.ctaBox}
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className={styles.ctaCardGlow} />

                    <div className={styles.ctaTopBadge}>
                        <span className={styles.badgePulse} />
                        <span>ELEVATE YOUR LEGAL PRACTICE</span>
                    </div>

                    <h2>
                        Ready to Transform Your <span className={styles.goldText}>Casework?</span>
                    </h2>

                    <p>
                        Join over 500+ litigation firms, boutique partnerships, and in-house teams who research 10× faster with zero hallucinations.
                    </p>

                    <div className={styles.ctaActions}>
                        <a href="#pilot" className={styles.primaryBtn}>
                            <span>Start 14-Day Free Pilot</span>
                            <span className={styles.btnArrow}>→</span>
                        </a>

                        <a href="#demo" className={styles.secondaryBtn}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <polygon points="10 8 16 12 10 16 10 8" />
                            </svg>
                            <span>Schedule Private Demo</span>
                        </a>
                    </div>

                    {/* Trust Badges Row */}
                    <div className={styles.trustBadgesRow}>
                        <div className={styles.trustItem}>
                            <span className={styles.checkIcon}>✓</span>
                            <span>SOC-2 Type II Certified</span>
                        </div>
                        <div className={styles.trustItem}>
                            <span className={styles.checkIcon}>✓</span>
                            <span>Zero-Data-Retention Guarantee</span>
                        </div>
                        <div className={styles.trustItem}>
                            <span className={styles.checkIcon}>✓</span>
                            <span>HIPAA Enclave Compliant</span>
                        </div>
                        <div className={styles.trustItem}>
                            <span className={styles.checkIcon}>✓</span>
                            <span>15-Minute Firm Setup</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* MAIN FOOTER NAVIGATION (Exact Header Menu Links) */}
            <div className="container">
                <div className={styles.footerMainRow}>
                    {/* Logo */}
                    <div className={styles.logo}>
                        <h2>
                            Legal <span>AI</span>
                        </h2>
                    </div>

                    {/* Header Menu Links */}
                    <nav className={styles.footerMenu}>
                        <a href="#features">Features</a>
                        <a href="#how-it-works">How It Works</a>
                        <a href="#practice-areas">Practice Areas</a>
                        <a href="#testimonials">Testimonials</a>
                        <a href="#security">Security</a>
                        <a href="#faq">FAQ</a>
                        <a href="#contact">Contact</a>
                    </nav>

                    {/* Social Icons */}
                    <div className={styles.socialRow}>
                        <a href="#twitter" aria-label="X / Twitter" className={styles.socialIcon}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                        <a href="#linkedin" aria-label="LinkedIn" className={styles.socialIcon}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                            </svg>
                        </a>
                        <a href="#github" aria-label="GitHub" className={styles.socialIcon}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* BOTTOM COMPLIANCE & COPYRIGHT BAR */}
                <div className={styles.bottomBar}>
                    <div className={styles.copyright}>
                        <p>© 2026 LegalAI Technologies Inc. All rights reserved.</p>
                        <span className={styles.disclaimer}>
                            LegalAI is an artificial intelligence research platform for licensed legal professionals. It does not provide legal advice or form an attorney-client relationship.
                        </span>
                    </div>

                    <div className={styles.systemStatus}>
                        <span className={styles.statusPulse} />
                        <span>All Systems Operational (99.99% Uptime)</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
