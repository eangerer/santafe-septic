import { site } from './site';

/** Home page SEO — pattern: [trade] near me / near you, blended with brand voice */
export const homeSeo = {
  primaryKeyword: 'Santa Fe Septic Services',
  /** Under 62 chars; brand once + clear service intent */
  title: `Santa Fe Septic Services | Pumping & Repair`,
  description:
    'Santa Fe septic pumping, repair, inspection, and installs for Eldorado, Tesuque, and Santa Fe County. Request service online—we follow up fast.',
  kicker: 'Local Care ◆ Clean Solutions',
  /** Single H1 — brand + trust promise */
  h1: 'Santa Fe Septic Services You Can Count On',
  /** Brand-style supporting line */
  subhead: 'Pumping, repair, inspection & new systems for Santa Fe County.',
  body: 'Tell us the problem and your address. We confirm coverage and get a licensed septic tech on the way for pumping, repair, or emergency backup.',
  secondaryCta: { href: '/contact/', label: 'Request a Callback' },
  secondaryH2: 'When people call about septic near them',
};
