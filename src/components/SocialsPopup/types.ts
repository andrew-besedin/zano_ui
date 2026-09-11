import { ReactNode } from 'react';

export interface SocialLink {
    id: string;
    name: string;
    href: string;
    icon: ReactNode;
}

export interface SocialsLabels {
    title?: string;
    close?: string;
    allLinks?: string;
}

export interface SocialsContentProps {
    links?: SocialLink[];
    labels?: SocialsLabels;
    allLinksHref?: string | null;
    onSocialClick?: (id: string) => void;
}

export interface SocialsPopupProps extends SocialsContentProps {
    close: () => void;
}
