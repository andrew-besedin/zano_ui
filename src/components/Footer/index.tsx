'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import { classes } from '../../utils';
import styles from "./styles.module.scss";
import Link from 'next/link';

type SelectedLink =
    "home" |
    "explorer" |
    "trade" |
    "auction" |
    "messenger" |
    "wrapped-zano";

const links: {
    title: string;
    type: SelectedLink;
    link: string;
    disabled?: boolean;
}[] = [
        {
            title: "Zano Website",
            type: "home",
            link: "https://zano.org"
        },
        {
            title: "Explorer",
            type: "explorer",
            link: "https://explorer.zano.org"
        },
        {
            title: "Trade",
            type: "trade",
            link: "https://trade.zano.org"
        },
        {
            title: "Auction",
            type: "auction",
            link: "https://auction.zano.org",
            disabled: true
        },
        {
            title: "Messenger",
            type: "messenger",
            link: "https://messenger.zano.org"
        },
        {
            title: "Wrapped Zano",
            type: "wrapped-zano",
            link: "https://wrapped.zano.org"
        }
    ];

function Footer() {


    const [selectedLink, setRecognizedLink] = useState<SelectedLink | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const currentDomain = window.location.hostname;
            const match = links.find(link => link.link.includes(currentDomain));
            setRecognizedLink(match ? match.type : null);
        }
    }, []);


    return (
        <footer className={styles.footer}>
            <div className={styles.footer__refs}>
                {links.map(e => (
                    <Link
                        className={
                            classes(
                                (e.type === selectedLink) && styles.footer__ref_selected,
                                e.disabled && styles.footer__ref_disabled
                            )
                        }
                        key={e.type}
                        href={e.link}
                        rel="noopener noreferrer"
                    >
                        {e.title}
                    </Link>
                ))}
            </div>
            <div className={styles.footer__copyright}>
                <p>Copyright © {(new Date()).getFullYear()} ZANO.org</p>
            </div>
        </footer>
    );

}

export default Footer;