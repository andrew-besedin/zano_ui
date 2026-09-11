import ForumIcon from '../assets/socials/forum.svg';
import DiscordIcon from '../assets/socials/discord.svg';
import XIcon from '../assets/socials/twitter.svg';
import TelegramIcon from '../assets/socials/telegram.svg';
import YoutubeIcon from '../assets/socials/youtube.svg';
import RedditIcon from '../assets/socials/reddit.svg';
import FacebookIcon from '../assets/socials/facebook.svg';
import InstagramIcon from '../assets/socials/instagram.svg';
import LinkedinIcon from '../assets/socials/linkedin.svg';
import { SocialLink } from '../components/SocialsPopup/types';

export const ALL_LINKS_HREF = 'https://links.zano.org';

export const SOCIAL_LINKS: SocialLink[] = [
    { id: 'forum', name: 'Forum', href: 'https://forum.zano.org/', icon: <ForumIcon /> },
    { id: 'discord', name: 'Discord', href: 'https://discord.gg/wE3rmYY', icon: <DiscordIcon /> },
    {
        id: 'twitter',
        name: 'X (Twitter)',
        href: 'https://twitter.com/zano_project',
        icon: <XIcon />,
    },
    { id: 'telegram', name: 'Telegram', href: 'https://t.me/zanocoin', icon: <TelegramIcon /> },
    {
        id: 'youtube',
        name: 'Youtube',
        href: 'https://www.youtube.com/@zanoproject',
        icon: <YoutubeIcon />,
    },
    { id: 'reddit', name: 'Reddit', href: 'https://www.reddit.com/r/Zano/', icon: <RedditIcon /> },
    {
        id: 'facebook',
        name: 'Facebook',
        href: 'https://www.facebook.com/profile.php?id=61580561440622',
        icon: <FacebookIcon />,
    },
    {
        id: 'instagram',
        name: 'Instagram',
        href: 'https://www.instagram.com/zano_project/',
        icon: <InstagramIcon />,
    },
    {
        id: 'linkedin',
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/company/zano-project',
        icon: <LinkedinIcon />,
    },
];
