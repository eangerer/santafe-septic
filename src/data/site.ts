export const site = {
  name: 'Santa Fe Septic',
  domain: 'santafeseptic.com',
  url: 'https://santafeseptic.com',
  email: 'hello@santafeseptic.com',
  contactHref: '/contact/',
  city: 'Santa Fe',
  state: 'NM',
  region: 'Santa Fe County',
  tagline: 'Local Care ◆ Clean Solutions',
  brandLine: 'Septic care you can count on.',
  /** Replace with CallRail / network tracking number before launch */
  hours: 'Open 7 days · Emergency response available',
};

export const navLinks = [
  {
    href: '/#services',
    label: 'Services',
    children: [
      { href: '/septic-pumping/', label: 'Pumping' },
      { href: '/septic-repair/', label: 'Repair' },
      { href: '/septic-installation/', label: 'Installation' },
      { href: '/drainfield-repair/', label: 'Drainfield' },
      { href: '/septic-inspection/', label: 'Inspection' },
      { href: '/emergency-septic/', label: 'Emergency' },
    ],
  },
  { href: '/about/', label: 'About' },
  { href: '/#reviews', label: 'Reviews' },
  { href: '/#faqs', label: 'FAQs' },
];

export const services = [
  {
    slug: 'septic-pumping',
    title: 'Septic Pumping',
    short: 'Scheduled and same-week tank pump-outs to keep your system healthy.',
    href: '/septic-pumping/',
    icon: 'pumping' as const,
  },
  {
    slug: 'septic-repair',
    title: 'Septic Repair',
    short: 'Alarms, backups, baffles, pumps, and line issues fixed fast.',
    href: '/septic-repair/',
    icon: 'repair' as const,
  },
  {
    slug: 'septic-installation',
    title: 'Septic Installation',
    short: 'New systems and full replacements with local permitting support.',
    href: '/septic-installation/',
    icon: 'local' as const,
  },
  {
    slug: 'drainfield-repair',
    title: 'Drainfield Repair',
    short: 'Leach field diagnosis and repair when the yard is wet or foul.',
    href: '/drainfield-repair/',
    icon: 'leaf' as const,
  },
  {
    slug: 'septic-inspection',
    title: 'Septic Inspection',
    short: 'Home sale, refinance, and troubleshooting inspections with clear reports.',
    href: '/septic-inspection/',
    icon: 'inspection' as const,
  },
  {
    slug: 'emergency-septic',
    title: 'Emergency Septic',
    short: 'Backed-up toilets, alarms, and overflow — call for priority dispatch.',
    href: '/emergency-septic/',
    icon: 'safety' as const,
  },
];

export const areas = [
  {
    slug: 'eldorado',
    name: 'Eldorado',
    href: '/service-areas/eldorado/',
    blurb:
      'Many Eldorado homes sit on septic. We handle pumping, repairs, and system replacements across the subdivision and nearby county roads.',
  },
  {
    slug: 'tesuque',
    name: 'Tesuque',
    href: '/service-areas/tesuque/',
    blurb:
      'Larger lots and older systems are common in Tesuque. We service residential tanks from the village through the surrounding canyons.',
  },
  {
    slug: 'agua-fria',
    name: 'Agua Fria',
    href: '/service-areas/agua-fria/',
    blurb:
      'Serving Agua Fria and the southwest Santa Fe corridor with scheduled pump-outs and emergency repair.',
  },
  {
    slug: 'santa-fe-county',
    name: 'Santa Fe County',
    href: '/service-areas/santa-fe-county/',
    blurb:
      'County properties off municipal sewer — from rural lanes to new builds needing permitted installs.',
  },
];

export type FaqItem = { q: string; a: string };

export const homeFaqs: FaqItem[] = [
  {
    q: 'How often should I pump my septic tank in Santa Fe?',
    a: 'Most households need a pump-out every 3–5 years, depending on tank size, occupancy, and water use. Second homes and guest-heavy properties may need a different schedule — we can recommend one after looking at your tank.',
  },
  {
    q: 'Do you handle permits for new septic systems?',
    a: 'Yes. New installs and major replacements in Santa Fe County typically involve NMED and local requirements. We coordinate design, soil considerations, and the paperwork so the job is code-compliant.',
  },
  {
    q: 'What are signs my drainfield is failing?',
    a: 'Soggy or unusually green spots over the leach field, sewage odors outdoors, slow drains throughout the house, or sewage backing up are common red flags. Call before a small issue becomes a full replacement.',
  },
  {
    q: 'Can you inspect a septic system for a home sale?',
    a: 'Absolutely. We provide clear inspection findings that buyers, sellers, and realtors can use during due diligence in Santa Fe and the surrounding county.',
  },
];

export const trustPoints = [
  { icon: 'schedule' as const, label: 'Same-day options when available' },
  { icon: 'safety' as const, label: 'Honest pricing — no surprises' },
  { icon: 'heart' as const, label: 'Local team that cares' },
];
