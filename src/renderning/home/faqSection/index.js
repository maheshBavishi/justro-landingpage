'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './faqSection.module.scss';

// 8 In-Depth Legal AI FAQs for Balanced 2-Column Layout
const faqListCol1 = [
    {
        id: 'hallucinations',
        question: 'How does LegalAI guarantee zero hallucinations in citations and case briefs?',
        answer: 'LegalAI operates on a deterministic, multi-tier legal verification pipeline. Every case precedent, citation volume, statutory section, and local court rule is verified against official primary law reporters, PACER, and state bar databases. If an assertion lacks verified primary precedent, the system refuses to speculate and explicitly flags evidentiary boundaries.',
    },
    {
        id: 'confidentiality',
        question: 'Is client work product or uploaded case files ever used to train AI models?',
        answer: 'Never. We enforce a strict Zero-Data-Retention and isolated tenant policy. All briefs, pleadings, discovery documents, and deposition transcripts are encrypted using AES-256 in transit and at rest inside dedicated SOC-2 Type II and HIPAA-compliant enclaves. Your proprietary attorney work product is never shared, cached, or fed into foundation models.',
    },
    {
        id: 'integrations',
        question: 'Which legal practice management and document tools does LegalAI integrate with?',
        answer: 'LegalAI offers native, turn-key integrations with Clio, iManage, NetDocuments, Relativity, MyCase, and Microsoft 365 / Word. You can draft motions, cross-reference exhibits, and verify table of authorities without ever leaving your active workspace.',
    },
    {
        id: 'jurisdictions',
        question: 'Which jurisdictions, federal circuits, and practice areas are supported?',
        answer: 'LegalAI covers all 50 U.S. states, all 13 Federal Circuit Courts of Appeals, the U.S. Supreme Court, and specialized regulatory agencies including the USPTO, TTAB, SEC, IRS, and DOL. We also provide dedicated cross-border modules for UK, EU, and Canadian regulatory compliance.',
    }
];

const faqListCol2 = [
    {
        id: 'comparison',
        question: 'What makes LegalAI fundamentally different from generic LLMs like ChatGPT?',
        answer: 'Generic LLMs lack official court reporter grounding, have static knowledge cutoff dates, and invent fictional citations. LegalAI is built exclusively on official state and federal reporter corpora, real-time Shepard’s-style negative treatment algorithms, and statutory rule matrices developed by veteran litigators.',
    },
    {
        id: 'collaboration',
        question: 'Can multiple attorneys, partners, and paralegals collaborate in real-time?',
        answer: 'Yes. LegalAI supports role-based team collaboration. Attorneys, paralegals, and partners can share workspace threads, leave internal evidentiary notes, and export version-tracked drafts with granular access controls and audit logs.',
    },
    {
        id: 'onboarding',
        question: 'What is the firm-wide onboarding timeline and learning curve for attorneys?',
        answer: 'Most litigation teams and partners become fully productive within 15 minutes. We assign a dedicated Legal AI Solutions Specialist (a former practicing attorney) to customize your firm’s prompt libraries, document intake taxonomy, and role-based permissions.',
    },
    {
        id: 'pilots',
        question: 'Can our firm test LegalAI on active or benchmark files before enterprise rollout?',
        answer: 'Yes. We offer a 14-day fully featured Enterprise Pilot for qualifying law firms and in-house legal departments. You can run side-by-side benchmark audits on historical briefs to objectively evaluate our 10× research speedup and accuracy before committing.',
    }
];

export default function FaqSection() {
    const [openId, setOpenId] = useState('hallucinations'); // First question open by default

    const toggleFaq = (id) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    const renderFaqCard = (faq, index) => {
        const isOpen = openId === faq.id;

        return (
            <motion.div
                id="faq"
                key={faq.id}
                className={`${styles.faqCard} ${isOpen ? styles.openCard : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
            >
                {/* Question Header Button */}
                <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className={styles.questionButton}
                    aria-expanded={isOpen}
                >
                    <div className={styles.questionLeft}>
                        <span className={styles.questionTag}>{faq.tag}</span>
                        <h3 className={styles.questionTitle}>{faq.question}</h3>
                    </div>

                    <div className={`${styles.iconWrap} ${isOpen ? styles.iconOpen : ''}`}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </div>
                </button>

                {/* Expandable Answer Content */}
                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className={styles.answerWrapper}
                        >
                            <div className={styles.answerContent}>
                                <div className={styles.answerDivider} />
                                <p>{faq.answer}</p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        );
    };

    return (
        <section className={styles.faqSection}>
            {/* Ambient Warm Gold Glow Dome */}
            <div className={styles.sectionGlow} />

            <div className="container">
                {/* Section Header (No tabs) */}
                <motion.div
                    className={styles.sectionHeader}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className={styles.topBadge}>
                        <span className={styles.badgePulse} />
                        <span>FREQUENTLY ASKED QUESTIONS</span>
                    </div>

                    <h2>
                        Answers to Your <span className={styles.goldText}>Questions</span>
                    </h2>

                    <p>
                        Clear answers on accuracy, data privacy, state bar compliance, and enterprise deployment.
                    </p>
                </motion.div>

                {/* 2-COLUMN BALANCED FAQ GRID */}
                <div className={styles.faqTwoColumnGrid}>
                    {/* Left Column */}
                    <div className={styles.faqColumn}>
                        {faqListCol1.map((faq, index) => renderFaqCard(faq, index))}
                    </div>

                    {/* Right Column */}
                    <div className={styles.faqColumn}>
                        {faqListCol2.map((faq, index) => renderFaqCard(faq, index))}
                    </div>
                </div>

                {/* Bottom Support Callout Card */}
                <motion.div
                    className={styles.supportBox}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className={styles.supportLeft}>
                        <div className={styles.supportIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            </svg>
                        </div>
                        <div className={styles.supportText}>
                            <h4>Have a specific compliance or jurisdictional inquiry?</h4>
                            <p>Our solutions team includes licensed attorneys ready to answer technical and ethical compliance questions.</p>
                        </div>
                    </div>

                    <button type="button" className={styles.supportBtn}>
                        <span>Speak With a Specialist</span>
                        <span className={styles.btnArrow}>→</span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
