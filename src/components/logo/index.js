'use client';

import React, { useId } from 'react';
import classNames from 'classnames';
import styles from './logo.module.scss';

export default function Logo({
    theme = 'dark', // 'dark' for light background (header), 'light' for dark background (footer)
    showTag = true,
    size = 38,
    className = ''
}) {
    const rawId = useId();
    const idPrefix = 'logo-' + rawId.replace(/[^a-zA-Z0-9-_]/g, '');

    return (
        <a
            href="/"
            aria-label="Justro Legal AI - Home"
            className={classNames(
                styles.logoLink,
                theme === 'light' ? styles.themeLight : styles.themeDark,
                className
            )}
        >
            {/* Theme-Matching Vector Emblem */}
            <div className={styles.iconBadge} style={{ width: size, height: size }}>
                <svg
                    width={size}
                    height={size}
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.emblemSvg}
                >
                    <defs>
                        <linearGradient id={`${idPrefix}-bg`} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#090d16" />
                            <stop offset="100%" stopColor="#1e293b" />
                        </linearGradient>
                        <linearGradient id={`${idPrefix}-border`} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#fbbf24" />
                            <stop offset="50%" stopColor="#f59e0b" />
                            <stop offset="100%" stopColor="#d97706" />
                        </linearGradient>
                        <linearGradient id={`${idPrefix}-gold`} x1="0" y1="8" x2="40" y2="32" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#fef08a" />
                            <stop offset="50%" stopColor="#fbbf24" />
                            <stop offset="100%" stopColor="#d97706" />
                        </linearGradient>
                        <filter id={`${idPrefix}-glow`} x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="1.5" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                    </defs>

                    {/* Shield / Badge Background with Gold Gradient Rim */}
                    <rect
                        x="1"
                        y="1"
                        width="38"
                        height="38"
                        rx="10"
                        fill={`url(#${idPrefix}-bg)`}
                        stroke={`url(#${idPrefix}-border)`}
                        strokeWidth="1.5"
                    />

                    {/* Corner Ambient Gold Glow */}
                    <circle cx="30" cy="10" r="10" fill="#f59e0b" opacity="0.16" />

                    {/* Central Balance Pillar */}
                    <line
                        x1="20"
                        y1="10"
                        x2="20"
                        y2="29"
                        stroke={`url(#${idPrefix}-gold)`}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />

                    {/* Apex Neural Finial (Diamond) */}
                    <path d="M20 7.5L22.2 9.7L20 11.9L17.8 9.7Z" fill="#fbbf24" />

                    {/* Base Pedestal Steps */}
                    <path
                        d="M14.5 29H25.5"
                        stroke={`url(#${idPrefix}-gold)`}
                        strokeWidth="2.2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M16.5 31.5H23.5"
                        stroke={`url(#${idPrefix}-gold)`}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        opacity="0.75"
                    />

                    {/* Curved Balance Crossbar */}
                    <path
                        d="M9.5 15C14 13.8 26 13.8 30.5 15"
                        stroke={`url(#${idPrefix}-gold)`}
                        strokeWidth="2"
                        strokeLinecap="round"
                    />

                    {/* Left Scale Pan & Suspension Cords */}
                    <line x1="9.5" y1="15" x2="7" y2="21" stroke="#fbbf24" strokeWidth="1.2" strokeOpacity="0.85" />
                    <line x1="9.5" y1="15" x2="12" y2="21" stroke="#fbbf24" strokeWidth="1.2" strokeOpacity="0.85" />
                    <path d="M6 21C6 23.5 13 23.5 13 21Z" fill={`url(#${idPrefix}-gold)`} />

                    {/* Right Scale Pan & Suspension Cords */}
                    <line x1="30.5" y1="15" x2="28" y2="21" stroke="#fbbf24" strokeWidth="1.2" strokeOpacity="0.85" />
                    <line x1="30.5" y1="15" x2="33" y2="21" stroke="#fbbf24" strokeWidth="1.2" strokeOpacity="0.85" />
                    <path d="M27 21C27 23.5 34 23.5 34 21Z" fill={`url(#${idPrefix}-gold)`} />

                    {/* Central AI Neural Core (Glowing Node) */}
                    <circle cx="20" cy="14.4" r="2.8" fill="#ffffff" filter={`url(#${idPrefix}-glow)`} />
                    <circle cx="20" cy="14.4" r="1.6" fill="#f59e0b" />
                </svg>
            </div>

            {/* Typography Wordmark */}
            <div className={styles.textWrapper}>
                <div className={styles.brandRow}>
                    <span className={styles.brandName}>
                        Just<span className={styles.goldSpan}>ro</span>
                    </span>
                    <span className={styles.aiBadge}>AI</span>
                </div>
                {showTag && (
                    <span className={styles.subTag}>LEGAL INTELLIGENCE</span>
                )}
            </div>
        </a>
    );
}
