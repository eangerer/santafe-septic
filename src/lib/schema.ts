import { site } from '../data/site';

export function localBusinessSchema(extra: Record<string, unknown> = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${site.url}/#business`,
    name: site.name,
    url: site.url,
    email: site.email,
    image: `${site.url}/og.jpg`,
    description: site.tagline,
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.city,
      addressRegion: site.state,
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'City', name: 'Santa Fe' },
      { '@type': 'AdministrativeArea', name: 'Santa Fe County' },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '07:00',
      closes: '19:00',
    },
    ...extra,
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: `${site.url}${opts.path}`,
    provider: { '@id': `${site.url}/#business` },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Santa Fe County',
    },
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${site.url}${c.path}`,
    })),
  };
}
