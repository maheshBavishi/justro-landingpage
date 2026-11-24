'use client';

import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import styles from './header.module.scss';
import Button from '../button';

export default function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [isSticky, setIsSticky] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        lastScrollY.current = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = Math.max(0, window.scrollY);

            // When at or near the very top of the page
            if (currentScrollY <= 60) {
                setIsVisible(true);
                setIsSticky(false);
                lastScrollY.current = currentScrollY;
                return;
            }

            const diff = currentScrollY - lastScrollY.current;

            // Threshold to prevent minor jitter
            if (Math.abs(diff) > 5) {
                if (diff > 0) {
                    // Scrolling DOWN -> hide header
                    setIsVisible(false);
                } else {
                    // Scrolling UP -> show header as sticky
                    setIsVisible(true);
                    setIsSticky(true);
                }
                lastScrollY.current = currentScrollY;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={classNames(
                styles.header,
                isSticky && styles.sticky,
                !isVisible && styles.hidden
            )}
        >
            <div className='container'>
                <div className={styles.headerAlignment}>
                    <div className={styles.logo}>
                        <h2>
                            Justro
                        </h2>
                    </div>
                    <div className={styles.menu}>
                        <a href="#features" data-text="Features"><span>Features</span></a>
                        <a href="#how-it-works" data-text="How It Works"><span>How It Works</span></a>
                        <a href="#practice-areas" data-text="Practice Areas"><span>Practice Areas</span></a>
                        <a href="#testimonials" data-text="Testimonials"><span>Testimonials</span></a>
                        <a href="#faq" data-text="FAQ"><span>FAQ</span></a>
                        <a href="#contact" data-text="Contact"><span>Contact</span></a>
                    </div>
                    <div>
                        <Button text="Start Free Trial" />
                    </div>
                </div>
            </div>
        </header>
    )
}
