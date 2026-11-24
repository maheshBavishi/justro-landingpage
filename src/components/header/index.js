import React from 'react'
import styles from './header.module.scss';
import Button from '../button';
export default function Header() {
    return (
        <header className={styles.header}>
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
                        <a href="#security" data-text="Security"><span>Security</span></a>
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
