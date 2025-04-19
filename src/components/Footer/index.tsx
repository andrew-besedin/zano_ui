'use client';
import styles from "./styles.module.scss";
import Link from 'next/link';
import BlankIcon from "../../assets/blank.svg";
import CopyIcon from "../../assets/copy.svg";
import ZanoIcon from "../../assets/zano_ico.svg";
import BTCIcon from "../../assets/bitcoin_ico.svg";
import BCHIcon from "../../assets/bch_ico.svg";
import ETHIcon from "../../assets/ethereum_ico.svg";
import XMRIcon from "../../assets/monero_ico.svg";
import BlogIcon from "../../assets/blog_ico.svg";
import DiscordIcon from "../../assets/discord_ico.svg";
import TwitterIcon from "../../assets/twitter_ico.svg";
import TelegramIcon from "../../assets/telegram_ico.svg";
import YoutubeIcon from "../../assets/youtube_ico.svg";
import RedditIcon from "../../assets/reddit_ico.svg";
import { DonationItem, FooterSection } from "./types";
import { classes } from "../../utils";
import CheckedIcon from "../../assets/checked.svg";
import { useRef, useState } from "react";

const footerLinks: FooterSection[] = [
    {
        title: "Zano Trade",
        links: [
            { label: "Exchange", href: "#" },
            { label: "Easy Swap", href: "#" },
            { label: "P2P Trading", href: "#" },
            { label: "Docs", href: "#" }
        ]
    },
    {
        title: "Ecosystem",
        links: [
            { label: "Zano.org", href: "https://zano.org/", external: true },
            { label: "Explorer", href: "https://explorer.zano.org/", external: true },
            { label: "Wrapped Zano", href: "https://wrapped.zano.org/", external: true },
            { label: "Messanger", href: "#", external: true },
            { label: "Exchanges", href: "#", external: true },
            { label: "Wallets", href: "#", external: true },
            { label: "Projects", href: "https://github.com/hyle-team/zano", external: true }
        ],
        grid: true,
    }
];

const donationData: DonationItem[] = [
    {
        name: "ZANO",
        icon: <ZanoIcon />,
        address: "@dev"
    },
    {
        name: "BTC",
        icon: <BTCIcon />,
        address: "bc1qpa8w8eaehlplfepmnzpd7v9j046899nktxnkxp"
    },
    {
        name: "BCH",
        icon: <BCHIcon />,
        address: "qqgq078vww5exd9kt3frx6krdyznmp80hcygzlgqzd"
    },
    {
        name: "ETH",
        icon: <ETHIcon />,
        address: "0x206c52b78141498e74FF074301ea90888C40c178"
    },
    {
        name: "XMR",
        icon: <XMRIcon />,
        address: "45gp9WTobeB5Km3kLQgVmPJkvm9rSmg4gdyHheXqXijXYMjUY48kLgL7QEz5Ar8z9vQioQ68WYDKsQsjAEonSeFX4UeLSiX"
    }
];

function Footer() {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const onHandleCopy = (address: string, index: number) => {
        try {
            window.navigator.clipboard.writeText(address);
            setCopiedIndex(index);

            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            timeoutRef.current = setTimeout(() => {
                setCopiedIndex(null);
                timeoutRef.current = null;
            }, 2000);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.footer__wrapper}>
                <div className={styles.footer__content}>
                    <div className={styles.footer__links}>
                        {footerLinks.map((section, i) => (
                            <div className={styles.footer__links_item} key={i}>
                                <h5 className={styles.title}>{section.title}</h5>
                                <div className={classes(styles.footer__links_item__links, section.grid && styles.grid)}>
                                    {section.links.map((link, j) => (
                                        <Link className={styles.link} key={j} href={link.href} target={link.external ? "_blank" : "_self"}>
                                            {link.label} {link.external && <BlankIcon />}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.footer__donation}>
                        <h5 className={styles.title}>Donation 💙</h5>
                        <div className={styles.footer__donation_content}>
                            {donationData.map((donation, i) => (
                                <div className={styles.donation} key={i}>
                                    <div className={styles.donation__info}>
                                        {donation.icon}
                                        <p className={styles.name}>{donation.name}</p>
                                    </div>
                                    <div className={styles.donation__address}>
                                        <span className={styles.donation__address_item}>{donation.address}</span>
                                        <button onClick={() => onHandleCopy(donation.address, i)} className={styles.copy}>
                                            {copiedIndex === i ? <CheckedIcon /> : <CopyIcon />}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.footer__bottom}>
                    <p className={styles.copyright}>Copyright © {(new Date()).getFullYear()} ZANO.org</p>

                    <div className={styles.socials}>
                        <Link className={styles.socials__item} href="https://blog.zano.org/" target="_blank">
                            <BlogIcon />
                        </Link>
                        <Link className={styles.socials__item} href="https://discord.com/invite/zano" target="_blank">
                            <DiscordIcon />
                        </Link>
                        <Link className={styles.socials__item} href="https://twitter.com/zano_project" target="_blank">
                            <TwitterIcon />
                        </Link>
                        <Link className={styles.socials__item} href="https://t.me/zanocoin" target="_blank">
                            <TelegramIcon />
                        </Link>
                        <Link className={styles.socials__item} href="https://www.youtube.com/@zanoproject" target="_blank">
                            <YoutubeIcon />
                        </Link>
                        <Link className={styles.socials__item} href="https://www.reddit.com/r/Zano" target="_blank">
                            <RedditIcon />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
