import type { FaqItem } from './site';
import { site } from './site';

export type ServicePage = {
  slug: string;
  path: string;
  title: string;
  /** Under 62 chars — [Service] Near Me… | Brand */
  metaTitle: string;
  /** 70–165 chars — service + near-me keyword + what happens on the call */
  description: string;
  /** HOME SERVICE | EMERGENCY SERVICE */
  intentTier: 'HOME SERVICE' | 'EMERGENCY SERVICE';
  /** H1: [Service] Near You, [Modifier] */
  h1: string;
  /** Primary keyword phrase used once in intro */
  primaryKeyword: string;
  /** Secondary keyword for H2 */
  secondaryH2: string;
  /** 2–3 sentences: problem + what happens on the call; keyword once; Santa Fe OK (city site) */
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
    metaTitle: `Septic Pumping Near Me | ${site.name}`,
    description:
      'Septic pumping near me in Santa Fe County. Call with your address—we schedule a local pump-out and protect your drainfield.',
    intentTier: 'HOME SERVICE',
    h1: 'Septic Pumping Near You, Same-Day Windows',
    primaryKeyword: 'septic pumping near me',
    secondaryH2: 'Signs you need septic pumping',
    intro: [
      'If you’re searching for septic pumping near me, you’re usually overdue for a pump-out or planning ahead before guests arrive. Solids left in the tank migrate to the drainfield and turn a routine job into a five-figure repair.',
      'Call with your address and tank access notes. We confirm coverage in Santa Fe County, book a window, pump the tank, and tell you when to schedule the next visit.',
    ],
    bullets: [
      'Locate lids and pump the tank clean',
      'Check visible baffles and filters when accessible',
      'Note tank condition for your records',
      'Recommend your next pump interval',
    ],
    process: [
      {
        title: 'You call with the address',
        body: 'Share ZIP, gate codes, and whether lids are buried. We confirm a same-week or same-day window when available.',
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
        body: 'Ask about filter cleaning or a quick inspection if you’re selling or refinancing soon.',
      },
    ],
    callCardHeading: 'Request service · Pumping desk open daily',
    faqs: [
      {
        q: 'How long does a pump-out take?',
        a: 'Most residential jobs finish in under two hours once lids are accessible. Buried lids add time.',
      },
      {
        q: 'Do you pump aerobic systems?',
        a: 'Yes—tell us the system type when you call so we send the right setup.',
      },
    ],
  },
  {
    slug: 'septic-repair',
    path: '/septic-repair/',
    title: 'Septic Repair',
    metaTitle: `Septic Repair Near Me | ${site.name}`,
    description:
      'Septic repair near me for alarms, backups, and failed pumps. Call now—we diagnose the problem and dispatch a local tech.',
    intentTier: 'EMERGENCY SERVICE',
    h1: 'Septic Repair Near You, Priority Dispatch',
    primaryKeyword: 'septic repair near me',
    secondaryH2: 'Signs you need septic repair now',
    intro: [
      'Searching septic repair near me usually means an alarm, slow drains house-wide, or sewage where it shouldn’t be. Waiting makes drainfield damage more likely.',
      'Call, describe the symptoms and your ZIP. We triage urgency, walk you through what water to shut off, and send a tech to diagnose and fix pumps, floats, baffles, or lines.',
    ],
    bullets: [
      'High-water alarm and float repair',
      'Effluent pump replacement',
      'Baffle and tank component fixes',
      'Broken line location and repair',
    ],
    process: [
      {
        title: 'Triage on the phone',
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
    callCardHeading: 'Request service · Repair desk open daily',
    faqs: [
      {
        q: 'Is a backed-up toilet always the septic?',
        a: 'Not always. If multiple fixtures are slow or the alarm is on, treat it as a system issue and call.',
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
    metaTitle: `Septic Installation Near Me | ${site.name}`,
    description:
      'Septic installation near me for new builds and replacements in Santa Fe County. Call—we scope soil, permits, and a local install crew.',
    intentTier: 'HOME SERVICE',
    h1: 'Septic Installation Near You, Permitted Right',
    primaryKeyword: 'septic installation near me',
    secondaryH2: 'When you need a new septic system',
    intro: [
      'People look up septic installation near me when they’re building off city sewer or replacing a failed system. In Santa Fe County that means soil, design, and NMED paperwork—not just a tank in the ground.',
      'Call with your parcel details. We outline conventional vs. advanced options, coordinate permitting, and schedule installation so inspection isn’t a surprise.',
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
        body: 'Address, bedrooms, and whether this is new build or replacement—so we size the conversation correctly.',
      },
      {
        title: 'Site and design path',
        body: 'Soil and layout constraints drive the system type the county will accept.',
      },
      {
        title: 'Permits before digging',
        body: 'Paperwork lined up so the install isn’t stalled at inspection.',
      },
      {
        title: 'Install and handoff',
        body: 'Tank and field installed, then clear owner guidance for long-term care.',
      },
    ],
    callCardHeading: 'Request service · Install quotes online',
    faqs: [
      {
        q: 'How much does a new septic cost here?',
        a: 'It varies with soil, system type, and access—often five figures. Call with parcel details for a scoped quote.',
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
    metaTitle: `Drainfield Repair Near Me | ${site.name}`,
    description:
      'Drainfield repair near me for soggy yards and failing leach fields. Call—we diagnose first, then repair or replace locally.',
    intentTier: 'EMERGENCY SERVICE',
    h1: 'Drainfield Repair Near You, Diagnosed First',
    primaryKeyword: 'drainfield repair near me',
    secondaryH2: 'Signs your leach field is failing',
    intro: [
      'If you’re searching drainfield repair near me, the yard is probably wet, smelly, or the tank won’t accept water even after pumping. The leach field is where effluent returns to soil—and when it fails, pumping alone won’t fix it.',
      'Call with symptoms and your address. We rule out tank and pump issues first, then map repair vs. replace options for Santa Fe County soils.',
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
        body: 'Soggy spots, odors, backups after pumping—these clues tell us where to start.',
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
    callCardHeading: 'Request service · Field issues triaged daily',
    faqs: [
      {
        q: 'Can a drainfield be repaired without full replacement?',
        a: 'Sometimes. Age, soil, and how far failure has gone decide it—diagnosis first.',
      },
      {
        q: 'Should I keep using water if the yard is wet?',
        a: 'Cut water use hard and call. Heavy use on a failing field can force a larger replacement.',
      },
    ],
  },
  {
    slug: 'septic-inspection',
    path: '/septic-inspection/',
    title: 'Septic Inspection',
    metaTitle: `Septic Inspection Near Me | ${site.name}`,
    description:
      'Septic inspection near me for home sales and refinances. Call—we schedule a local inspector and deliver a clear report.',
    intentTier: 'HOME SERVICE',
    h1: 'Septic Inspection Near You, Report-Ready',
    primaryKeyword: 'septic inspection near me',
    secondaryH2: 'When you need a septic inspection',
    intro: [
      'Buyers and sellers search septic inspection near me before closing. You need plain findings: tank condition, levels, and whether the field is accepting water—not jargon.',
      'Call with the property address and closing date. We schedule the visit, document what we see, and flag repairs that belong in negotiations.',
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
        body: 'Share access and timeline so the report lands when escrow needs it.',
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
    callCardHeading: 'Request service · Inspections booked online',
    faqs: [
      {
        q: 'Is inspection the same as pumping?',
        a: 'No. Inspection evaluates condition; pumping removes solids. Many sales need both—ask when you book.',
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
    metaTitle: `Emergency Septic Near Me | ${site.name}`,
    description:
      'Emergency septic near me for backups and alarms. Call now—we triage, tell you what to shut off, and dispatch local help.',
    intentTier: 'EMERGENCY SERVICE',
    h1: 'Emergency Septic Near You, 24/7 Triage',
    primaryKeyword: 'emergency septic near me',
    secondaryH2: 'What to do during a septic emergency',
    intro: [
      'Emergency septic near me searches spike when sewage backs up or the high-water alarm won’t quit. Every flush can make the mess—and the repair bill—worse.',
      'Call immediately. We triage on the line, tell you which water to stop, and dispatch the next available tech for Santa Fe County properties.',
    ],
    bullets: [
      'Live phone triage',
      'Backup and overflow response',
      'Alarm and pump emergencies',
      'Stabilize now, repair plan next',
    ],
    process: [
      {
        title: 'Call and describe the mess',
        body: 'Sewage location, alarm status, and how many fixtures are affected.',
      },
      {
        title: 'Stop further damage',
        body: 'We’ll tell you what not to run while help is en route.',
      },
      {
        title: 'Dispatch and stabilize',
        body: 'Pump, repair, or temporary measures to get toilets usable again.',
      },
      {
        title: 'Root-cause next step',
        body: 'A clear plan so you’re not calling again next weekend for the same failure.',
      },
    ],
    callCardHeading: 'Request service · Emergency requests open now',
    faqs: [
      {
        q: 'What should I do right now if sewage is backing up?',
        a: 'Stop all water use, don’t pour chemicals into the system, keep kids and pets away, and call.',
      },
      {
        q: 'Do you answer after hours?',
        a: 'Yes—call the main number. Response time depends on call volume and road conditions.',
      },
    ],
  },
];

export function getService(slug: string) {
  return servicePages.find((s) => s.slug === slug);
}
