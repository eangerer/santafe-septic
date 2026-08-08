import { site } from './site';

/** Home page SEO — pattern: [trade] near me / near you, blended with brand voice */
export const homeSeo = {
  primaryKeyword: 'Septic Near Me',
  title: `Septic Near Me | ${site.name}`,
  description:
    'Need septic near me in Santa Fe County? Call for pumping, repair, and installs in Eldorado, Tesuque, and nearby. We answer and send a local pro.',
  kicker: 'Local Care ◆ Clean Solutions',
  /** Single H1 — keyword + brand promise */
  h1: 'Septic Pros Near You, Care You Can Count On',
  /** Brand-style supporting line (under ~12 words for layout) */
  subhead: 'Pumping, repair, inspection & new systems for Santa Fe.',
  body: 'Tell us the problem and your address. We confirm coverage and get a licensed septic tech on the way for pumping, repair, or emergency backup.',
  secondaryCta: { href: '/contact/', label: 'Request a Callback' },
  secondaryH2: 'When people call about septic near them',
};
