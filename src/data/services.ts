import type { FaqItem } from './site';
import { site } from './site';

export type ServicePage = {
  slug: string;
  path: string;
  title: string;
  /** Under 62 chars — [Service] in Santa Fe | Brand */
  metaTitle: string;
  /** 70–165 chars — Santa Fe service + what happens next */
  description: string;
  /** HOME SERVICE | EMERGENCY SERVICE */
  intentTier: 'HOME SERVICE' | 'EMERGENCY SERVICE';
  /** H1: Santa Fe–specific service headline */
  h1: string;
  /** Primary keyword phrase used once in intro */
  primaryKeyword: string;
  /** Secondary keyword for H2 */
  secondaryH2: string;
  /** 2–3 sentences: problem + next step; keyword once; Santa Fe grounded */
  intro: string[];
  bullets: string[];
  process: { title: string; body: string }[];
  callCardHeading: string;
  faqs: FaqItem[];
};

export const servicePages: ServicePage[] = [
  {
    slug: 'septic-pumping',
    path: '/septic-pumping/',
    title: 'Septic Pumping',
    metaTitle: `Septic Pumping in Santa Fe | ${site.name}`,
    description:
      'Septic pumping in Santa Fe and Santa Fe County. Request service with your address—we schedule a local pump-out and help protect your drainfield.',
    intentTier: 'HOME SERVICE',
    h1: 'Septic Pumping in Santa Fe',
    primaryKeyword: 'septic pumping in Santa Fe',
    secondaryH2: 'Signs you need septic pumping in Santa Fe',
    intro: [
      'If you need septic pumping in Santa Fe, you’re usually overdue for a pump-out or planning ahead before guests arrive. Solids left in the tank migrate to the drainfield and turn a routine job into a five-figure repair.',
      'Send your address and tank access notes. We confirm coverage across Santa Fe County, book a window, pump the tank, and tell you when to schedule the next visit.',
    ],
    bullets: [
      'Locate lids and pump the tank clean',
      'Check visible baffles and filters when accessible',
      'Note tank condition for your records',
      'Recommend your next pump interval',
    ],
    process: [
      {
        title: 'Share your Santa Fe address',
        body: 'Include ZIP, gate codes, and whether lids are buried. We confirm a same-week or same-day window when available.',
      },
      {
        title: 'Tech arrives and pumps',
        body: 'We open access, pump solids and scum, and flag anything that looks wrong before it becomes an emergency.',
      },
      {
        title: 'You get a clear next step',
        body: 'Leave with a simple timeline—usually every 3–5 years, adjusted for occupancy and tank size.',
      },
      {
        title: 'Optional add-ons',
        body: 'Ask about filter cleaning or a quick inspection if you’re selling or refinancing in Santa Fe.',
      },
    ],
    callCardHeading: 'Request service · Santa Fe pumping desk',
    faqs: [
      {
        q: 'How long does a pump-out take?',
        a: 'Most residential jobs finish in under two hours once lids are accessible. Buried lids add time.',
      },
      {
        q: 'Do you pump aerobic systems?',
        a: 'Yes—tell us the system type when you request service so we send the right setup.',
      },
    ],
  },
  {
    slug: 'septic-repair',
    path: '/septic-repair/',
    title: 'Septic Repair',
    metaTitle: `Septic Repair in Santa Fe | ${site.name}`,
    description:
      'Septic repair in Santa Fe for alarms, backups, and failed pumps. Request service—we diagnose the problem and connect a local tech.',
    intentTier: 'EMERGENCY SERVICE',
    h1: 'Septic Repair in Santa Fe',
    primaryKeyword: 'septic repair in Santa Fe',
    secondaryH2: 'Signs you need septic repair in Santa Fe',
    intro: [
      'Need septic repair in Santa Fe? That usually means an alarm, slow drains house-wide, or sewage where it shouldn’t be. Waiting makes drainfield damage more likely.',
      'Describe the symptoms and your ZIP. We triage urgency, walk you through what water to shut off, and connect a tech to diagnose and fix pumps, floats, baffles, or lines.',
    ],
    bullets: [
      'High-water alarm and float repair',
      'Effluent pump replacement',
      'Baffle and tank component fixes',
      'Broken line location and repair',
    ],
    process: [
      {
        title: 'Triage your symptoms',
        body: 'Alarm, backup, or odor? We prioritize emergency vs. next-available and tell you what to stop using.',
      },
      {
        title: 'On-site diagnosis',
        body: 'Tank levels, pumps, and distribution checked so you pay for the real fix—not a guess.',
      },
      {
        title: 'Repair and verify',
        body: 'Parts and labor to restore flow, with a straight answer if the drainfield is failing too.',
      },
      {
        title: 'Prevent the repeat',
        body: 'You’ll know whether pumping, usage changes, or further work should come next.',
      },
    ],
    callCardHeading: 'Request service · Santa Fe repair desk',
    faqs: [
      {
        q: 'Is a backed-up toilet always the septic?',
        a: 'Not always. If multiple fixtures are slow or the alarm is on, treat it as a system issue and request help.',
      },
      {
        q: 'Can you repair instead of replace?',
        a: 'Often yes. We recommend replacement only when the tank or field is truly finished.',
      },
    ],
  },
  {
    slug: 'septic-installation',
    path: '/septic-installation/',
    title: 'Septic Installation',
    metaTitle: `Septic Installation in Santa Fe | ${site.name}`,
    description:
      'Septic installation in Santa Fe County for new builds and replacements. Request a quote—we scope soil, NMED permits, and a local install path.',
    intentTier: 'HOME SERVICE',
    h1: 'Septic Installation in Santa Fe',
    primaryKeyword: 'septic installation in Santa Fe',
    secondaryH2: 'When Santa Fe homes need a new septic system',
    intro: [
      'Septic installation in Santa Fe matters when you’re building off city sewer or replacing a failed system. In Santa Fe County that means soil, design, and NMED paperwork—not just a tank in the ground.',
      'Share your parcel details. We outline conventional vs. advanced options, coordinate permitting, and schedule installation so inspection isn’t a surprise.',
    ],
    bullets: [
      'New construction septic systems',
      'Full replacements for failed tanks/fields',
      'Conventional and advanced designs',
      'Permit and inspection coordination',
    ],
    process: [
      {
        title: 'Share the lot',
        body: 'Santa Fe County address, bedrooms, and whether this is new build or replacement—so we size the conversation correctly.',
      },
      {
        title: 'Site and design path',
        body: 'Local soil and layout constraints drive the system type the county will accept.',
      },
      {
        title: 'Permits before digging',
        body: 'NMED and county paperwork lined up so the install isn’t stalled at inspection.',
      },
      {
        title: 'Install and handoff',
        body: 'Tank and field installed, then clear owner guidance for long-term care.',
      },
    ],
    callCardHeading: 'Request service · Santa Fe install quotes',
    faqs: [
      {
        q: 'How much does a new septic cost in Santa Fe County?',
        a: 'It varies with soil, system type, and access—often five figures. Request a quote with parcel details for a scoped estimate.',
      },
      {
        q: 'How long does permitting take?',
        a: 'Depends on design completeness and agency workload. Starting soil and paperwork early avoids build delays.',
      },
    ],
  },
  {
    slug: 'drainfield-repair',
    path: '/drainfield-repair/',
    title: 'Drainfield Repair',
    metaTitle: `Drainfield Repair in Santa Fe | ${site.name}`,
    description:
      'Drainfield and leach field repair in Santa Fe for soggy yards and failing systems. Request service—we diagnose first, then repair or replace.',
    intentTier: 'EMERGENCY SERVICE',
    h1: 'Drainfield Repair in Santa Fe',
    primaryKeyword: 'drainfield repair in Santa Fe',
    secondaryH2: 'Signs your Santa Fe leach field is failing',
    intro: [
      'Need drainfield repair in Santa Fe? The yard is probably wet, smelly, or the tank won’t accept water even after pumping. The leach field is where effluent returns to soil—and when it fails, pumping alone won’t fix it.',
      'Share symptoms and your address. We rule out tank and pump issues first, then map repair vs. replace options for Santa Fe County soils.',
    ],
    bullets: [
      'Confirm field failure before excavation',
      'Partial repairs when they’re viable',
      'Full field replacement planning',
      'Usage guidance to extend field life',
    ],
    process: [
      {
        title: 'Describe the yard and fixtures',
        body: 'Soggy spots, odors, backups after pumping—these clues tell us where to start on your Santa Fe property.',
      },
      {
        title: 'Rule out the easy fixes',
        body: 'Pumps, baffles, and tank issues checked before anyone digs up the field.',
      },
      {
        title: 'Repair or replace plan',
        body: 'Honest options with cost and timeline expectations for your lot.',
      },
      {
        title: 'Field work and inspection',
        body: 'Work completed with any required permits so the system is usable again.',
      },
    ],
    callCardHeading: 'Request service · Santa Fe field issues',
    faqs: [
      {
        q: 'Can a drainfield be repaired without full replacement?',
        a: 'Sometimes. Age, soil, and how far failure has gone decide it—diagnosis first.',
      },
      {
        q: 'Should I keep using water if the yard is wet?',
        a: 'Cut water use hard and request help. Heavy use on a failing field can force a larger replacement.',
      },
    ],
  },
  {
    slug: 'septic-inspection',
    path: '/septic-inspection/',
    title: 'Septic Inspection',
    metaTitle: `Septic Inspection in Santa Fe | ${site.name}`,
    description:
      'Septic inspections in Santa Fe for home sales and refinances. Request an inspection—we deliver a clear, shareable report.',
    intentTier: 'HOME SERVICE',
    h1: 'Septic Inspection in Santa Fe',
    primaryKeyword: 'septic inspection in Santa Fe',
    secondaryH2: 'When Santa Fe buyers need a septic inspection',
    intro: [
      'A septic inspection in Santa Fe is common before closing. You need plain findings: tank condition, levels, and whether the field is accepting water—not jargon.',
      'Share the property address and closing date. We schedule the visit, document what we see, and flag repairs that belong in negotiations.',
    ],
    bullets: [
      'Buyer and seller due diligence',
      'Refinance documentation support',
      'Owner troubleshooting inspections',
      'Clear, shareable findings',
    ],
    process: [
      {
        title: 'Book around the deal',
        body: 'Share access and timeline so the report lands when Santa Fe escrow needs it.',
      },
      {
        title: 'On-site evaluation',
        body: 'Tank, components, and field indicators reviewed with photos when useful.',
      },
      {
        title: 'Plain-language report',
        body: 'Findings you can send to a realtor, lender, or contractor.',
      },
      {
        title: 'Repair path if needed',
        body: 'If something fails, we’ll outline fix vs. negotiate options next.',
      },
    ],
    callCardHeading: 'Request service · Santa Fe inspections',
    faqs: [
      {
        q: 'Is inspection the same as pumping?',
        a: 'No. Inspection evaluates condition; pumping removes solids. Many Santa Fe sales need both—ask when you book.',
      },
      {
        q: 'Do you inspect aerobic systems?',
        a: 'Yes. Tell us the system type so we bring the right checklist.',
      },
    ],
  },
  {
    slug: 'emergency-septic',
    path: '/emergency-septic/',
    title: 'Emergency Septic Service',
    metaTitle: `Emergency Septic in Santa Fe | ${site.name}`,
    description:
      'Emergency septic service in Santa Fe for backups and alarms. Request help—we triage, tell you what to shut off, and connect local response.',
    intentTier: 'EMERGENCY SERVICE',
    h1: 'Emergency Septic Service in Santa Fe',
    primaryKeyword: 'emergency septic in Santa Fe',
    secondaryH2: 'What to do during a Santa Fe septic emergency',
    intro: [
      'Emergency septic service in Santa Fe is for sewage backups or a high-water alarm that won’t quit. Every flush can make the mess—and the repair bill—worse.',
      'Request help immediately. We triage your situation, tell you which water to stop, and connect the next available tech for Santa Fe County properties.',
    ],
    bullets: [
      'Fast request triage',
      'Backup and overflow response',
      'Alarm and pump emergencies',
      'Stabilize now, repair plan next',
    ],
    process: [
      {
        title: 'Describe the mess',
        body: 'Sewage location, alarm status, and how many fixtures are affected on your Santa Fe property.',
      },
      {
        title: 'Stop further damage',
        body: 'We’ll tell you what not to run while help is arranged.',
      },
      {
        title: 'Stabilize the system',
        body: 'Pump, repair, or temporary measures to get toilets usable again.',
      },
      {
        title: 'Root-cause next step',
        body: 'A clear plan so you’re not dealing with the same failure next weekend.',
      },
    ],
    callCardHeading: 'Request service · Santa Fe emergencies',
    faqs: [
      {
        q: 'What should I do right now if sewage is backing up?',
        a: 'Stop all water use, don’t pour chemicals into the system, keep kids and pets away, and request emergency help.',
      },
      {
        q: 'Do you handle after-hours emergencies?',
        a: 'Yes—submit a request anytime. Response time depends on call volume and road conditions around Santa Fe.',
      },
    ],
  },
];

export function getService(slug: string) {
  return servicePages.find((s) => s.slug === slug);
}
