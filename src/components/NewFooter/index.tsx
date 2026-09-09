'use client';

import React, { useRef, useState } from 'react';
import Logo from '../Logo';
import ZanoBigIcon from '../../assets/zano_big.svg';
import styles from './styles.module.scss';
import DonationPopup from './components/DonationPopup';
import NewsletterForm from './components/NewsletterForm';
import Popup from '../Popup';
import { classes } from '../../utils';
import Link from 'next/link';

const NewFooter = () => {
    const [donation, setDonation] = useState(false);
    const logoRef = useRef<HTMLDivElement>(null);

    const openDonationPopup = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        setDonation(true);
    };

    const handleFooterMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const el = logoRef.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const isOverLogo =
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom;

        el.style.setProperty('--x', `${((e.clientX - rect.left) / rect.width) * 100}%`);
        el.style.setProperty('--y', `${((e.clientY - rect.top) / rect.height) * 100}%`);
        el.style.setProperty('--glow-opacity', isOverLogo ? '1' : '0');
    };

    return (
        <>
            <footer
                className={classes(styles.footer, 'container')}
                onMouseMove={handleFooterMouseMove}
            >
                <div className={styles.footer__top}>
                    <Logo />

                    <h6 className={styles.footer__top_text}>Your privacy matters. Choose Zano, the leading blockchain platform that prioritises confidentiality and security.</h6>
                </div>

                <div className={styles.footer__newsletter}>
                    <p className={styles.footer__newsletter_title}>
                       Subscribe to Our Newsletter
                    </p>
                    <p className={styles.footer__newsletter_desc}>
                       And be among the first to know about updates
                    </p>

                    <NewsletterForm />
                </div>

                <div className={styles.footer__links}>
                    <div className={styles.footer__links_item}>
                        <p className={styles.title}>Zano</p>
                        <Link target='_blank' href="https://zano.org/team">Team</Link>
                        <Link target='_blank' href="https://zano.org/roadmap">Roadmap</Link>
                        <Link target='_blank' href="https://zano.org/wallets">Downloads</Link>
                        <Link target='_blank' href="#" onClick={openDonationPopup}>
                           💙 Support Zano
                        </Link>
                    </div>

                    <div className={styles.footer__links_item}>
                        <p className={styles.title}>Resources</p>
                        <Link target='_blank' href="https://blog.zano.org/">
                            Blog
                        </Link>
                        <Link target='_blank' href="https://forum.zano.org/">
                          Forum
                        </Link>
                        <Link target='_blank' href="https://docs.zano.org/">
                        Docs
                        </Link>
                        <Link target='_blank' href="https://github.com/hyle-team/zano">
                           GitHub
                        </Link>
                        <Link target='_blank' href="https://explorer.zano.org/">
                           Explorer
                        </Link>
                        <Link target='_blank' href="https://zano.org/media-kit">Media Kit</Link>
                    </div>

                    <div className={styles.footer__links_item}>
                        <p className={styles.title}>Support</p>
                        <Link target='_blank' href="https://zano.org/support">Contact Us</Link>
                        <Link target='_blank' href="https://zano.org/terms">Terms of Use</Link>
                        <Link target='_blank' href="https://zano.org/privacy-policy">Privacy Policy</Link>
                    </div>
                </div>

                <p className={styles.footer__bottom}>
                    Copyright © {new Date().getFullYear()} ZANO.org
                </p>

                <div ref={logoRef} className={styles.footer__logo}>
                    <ZanoBigIcon width={'100%'} height={'100%'} className={styles.logoBase} />
                    <ZanoBigIcon width={'100%'} height={'100%'} className={styles.logoGlow} />
                </div>
            </footer>

            {donation && (
                <Popup
                    Content={DonationPopup}
                    close={() => setDonation(false)}
                    settings={{}}
                    blur
                />
            )}
        </>
    );
};

export default NewFooter;
