export type FooterLinkItem = {
    label: string;
    href: string;
    external?: boolean;
};

export type FooterSection = {
    title: string;
    links: FooterLinkItem[];
    grid?: boolean;
};


export type DonationItem = {
    name: string;
    icon: JSX.Element;
    address: string;
}