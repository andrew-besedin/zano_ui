'use client';

import React, { useEffect } from 'react';
import CrossIcon from '../../assets/cross.svg';
import ArrowRightIcon from '../../assets/arrow-right.svg';
import { ALL_LINKS_HREF, SOCIAL_LINKS } from '../../data/socials';
import { SocialsPopupProps } from './types';
import styles from './styles.module.scss';

const SocialsPopup = ({
    close,
    links = SOCIAL_LINKS,
    labels,
    allLinksHref = ALL_LINKS_HREF,
    onSocialClick,
}: SocialsPopupProps) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') close();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [close]);

    return (
        <div className={styles.wrapper}>
            <div
                className={styles.popup}
                role="dialog"
                aria-modal="true"
                aria-label={labels?.title ?? 'Socials'}
            >
                <button
                    onClick={close}
                    className={styles.popup__close}
                    aria-label={labels?.close ?? 'Close'}
                >
                    <CrossIcon />
                </button>

                <h5 className={styles.popup__title}>{labels?.title ?? 'Socials'}</h5>

                <div className={styles.popup__socials}>
                    {links.map((link) => (
                        <a
                            key={link.id}
                            className={styles.popup__socials_item}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => onSocialClick?.(link.id)}
                        >
                            <div className={styles.icon}>{link.icon}</div>
                            <span className={styles.text}>{link.name}</span>
                        </a>
                    ))}
                </div>

                {allLinksHref && (
                    <a
                        href={allLinksHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.popup__allLinks}
                        onClick={() => onSocialClick?.('all_links')}
                    >
                        {labels?.allLinks ?? 'All links'} <ArrowRightIcon />
                    </a>
                )}
            </div>
        </div>
    );
};

export default SocialsPopup;
