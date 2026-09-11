import { JSX } from "react";

export type FooterLinkItem = {
  label: string;
  href: string;
  disabled?: boolean;
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
};
