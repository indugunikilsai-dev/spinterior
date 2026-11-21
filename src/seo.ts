import { CONTACT, faqs, homeServices, projects, services } from './data'

export const SITE_URL = 'https://www.sp-interior.in'
export const BUSINESS_NAME = 'SP Interior Design and Studio'
const DEFAULT_IMAGE = '/images/hero.jpg'
const BUSINESS_ID = `${SITE_URL}/#business`

export const AREAS = [
  'Patancheru',
  'Kistareddypet',
  'Ameenpur',
  'Bachupally',
  'Miyapur',
  'Chandanagar',
  'BHEL',
  'Lingampally',
  'Kukatpally',
  'Nizampet',
  'Kondapur',
  'Gachibowli',
  'Hitech City',
  'Madhapur',
  'Kokapet',
  'Narsingi',
  'Manikonda',
  'Jubilee Hills',
  'Banjara Hills',
  'Sangareddy',
]

export interface Seo {
  title: string
  description: string
  path: string
  image?: string
  noindex?: boolean
  jsonLd?: object[]
}

const crumbs = (items: [string, string][]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [['Home', '/'], ...items].map(([name, path], i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name,
    item: SITE_URL + path,
  })),
})

const business = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': BUSINESS_ID,
  name: BUSINESS_NAME,
  alternateName: 'SP Interior',
  description:
    'Interior designers and home service experts in Hyderabad: home interiors, modular kitchens, wardrobes, commercial interiors, carpentry, electrical, plumbing, painting and renovation.',
  url: SITE_URL + '/',
  logo: SITE_URL + '/images/5%20%C2%B7%20Signature%20Script@1x.png',
  image: [SITE_URL + '/images/hero.jpg', SITE_URL + '/images/kitchen-1.jpg', SITE_URL + '/images/banjara-1.jpg'],
  telephone: CONTACT.phoneHref.replace('tel:', ''),
  email: CONTACT.email,
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Nethaji Nagar, Kistareddypet',
    addressLocality: 'Patancheru, Hyderabad',
    addressRegion: 'Telangana',
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 17.5481769, longitude: 78.2898931 },
  hasMap: CONTACT.mapLink,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '19:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Hyderabad' },
    ...AREAS.map((name) => ({ '@type': 'Place', name: `${name}, Hyderabad` })),
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Interior & Home Services',
    itemListElement: [...services, ...homeServices].map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.title, description: s.text },
    })),
  },
}

const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: BUSINESS_NAME,
  alternateName: 'SP Interior',
  url: SITE_URL + '/',
  publisher: { '@id': BUSINESS_ID },
}

export const ROUTES = ['/', '/services', '/projects', '/process', '/contact', ...projects.map((p) => `/projects/${p.id}`)]

export function getSeo(pathname: string): Seo {
  const path = pathname.replace(/\/+$/, '') || '/'

  switch (path) {
    case '/':
      return {
        path,
        title: 'SP Interior | Best Interior Designers & Home Services in Hyderabad',
        description:
          'SP Interior Design and Studio: interior designers in Hyderabad for homes, modular kitchens, wardrobes and offices, plus carpentry, electrical, plumbing and painting. Free consultation.',
        jsonLd: [business, website],
      }
    case '/services':
      return {
        path,
        title: 'Interior Design & Home Services in Hyderabad | SP Interior',
        description:
          'Modular kitchens, wardrobes, full home interiors, commercial fit-outs and 3D design, plus carpenters, electricians, plumbers, painters and waterproofing in Hyderabad.',
        image: '/images/kitchen-1.jpg',
        jsonLd: [
          crumbs([['Services', '/services']]),
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'SP Interior services',
            itemListElement: [...services, ...homeServices].map((s, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              item: {
                '@type': 'Service',
                name: s.title,
                description: s.text,
                areaServed: { '@type': 'City', name: 'Hyderabad' },
                provider: { '@id': BUSINESS_ID },
              },
            })),
          },
        ],
      }
    case '/projects':
      return {
        path,
        title: 'Interior Design Projects in Hyderabad | Portfolio | SP Interior',
        description:
          'See completed homes, villas, modular kitchens, bathrooms and offices designed and built by SP Interior across Hyderabad.',
        image: '/images/banjara-1.jpg',
        jsonLd: [crumbs([['Projects', '/projects']])],
      }
    case '/process':
      return {
        path,
        title: 'Our Interior Design Process, Pricing & FAQs | SP Interior',
        description:
          'How SP Interior works: free consultation, 3D design, transparent quotes, in-house execution and on-time handover. Answers to common questions on cost, timelines and warranty.',
        image: '/images/apartment-1.jpg',
        jsonLd: [
          crumbs([['Process', '/process']]),
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          },
        ],
      }
    case '/contact':
      return {
        path,
        title: 'Contact SP Interior | Interior Designers in Patancheru, Hyderabad',
        description: `Book a free interior design consultation. Call ${CONTACT.phone} or WhatsApp us. Studio at Kistareddypet, Patancheru, Hyderabad. Open Mon–Sat, 10am–7pm.`,
        image: '/images/villa-1.jpg',
        jsonLd: [crumbs([['Contact', '/contact']]), business],
      }
  }

  const project = projects.find((p) => `/projects/${p.id}` === path)
  if (project) {
    return {
      path,
      title: `${project.title}, ${project.location.split(',')[0]} | ${project.style} Interior | SP Interior`,
      description: `${project.summary} ${project.area}, completed ${project.year}.`.slice(0, 300),
      image: project.images[0].replace('.webp', '.jpg'),
      jsonLd: [
        crumbs([
          ['Projects', '/projects'],
          [project.title, path],
        ]),
      ],
    }
  }

  return {
    path,
    title: 'Page not found | SP Interior',
    description: 'The page you are looking for does not exist.',
    noindex: true,
  }
}

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/** All per-page head tags. Each carries data-seo so the client can swap them on navigation. */
export function headTags(seo: Seo): string {
  const url = SITE_URL + (seo.path === '/' ? '/' : seo.path)
  const image = SITE_URL + (seo.image ?? DEFAULT_IMAGE)
  const tags = [
    `<title data-seo>${esc(seo.title)}</title>`,
    `<meta data-seo name="description" content="${esc(seo.description)}" />`,
    seo.noindex
      ? `<meta data-seo name="robots" content="noindex, follow" />`
      : `<meta data-seo name="robots" content="index, follow, max-image-preview:large" />`,
    seo.noindex ? '' : `<link data-seo rel="canonical" href="${url}" />`,
    `<meta data-seo property="og:type" content="website" />`,
    `<meta data-seo property="og:site_name" content="${BUSINESS_NAME}" />`,
    `<meta data-seo property="og:locale" content="en_IN" />`,
    `<meta data-seo property="og:title" content="${esc(seo.title)}" />`,
    `<meta data-seo property="og:description" content="${esc(seo.description)}" />`,
    `<meta data-seo property="og:url" content="${url}" />`,
    `<meta data-seo property="og:image" content="${image}" />`,
    `<meta data-seo name="twitter:card" content="summary_large_image" />`,
    `<meta data-seo name="twitter:title" content="${esc(seo.title)}" />`,
    `<meta data-seo name="twitter:description" content="${esc(seo.description)}" />`,
    `<meta data-seo name="twitter:image" content="${image}" />`,
    ...(seo.jsonLd ?? []).map(
      (d) => `<script data-seo type="application/ld+json">${JSON.stringify(d).replace(/</g, '\\u003c')}</script>`,
    ),
  ]
  return tags.filter(Boolean).join('\n    ')
}
