import type { Metadata, Viewport } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import { siteConfig } from '@/config/site'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  preload: true, // font tajuk hero — preload supaya tiada lompatan teks
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: false,
})

const siteUrl = siteConfig.url

// ── Viewport Optimization for all Devices, OS & Screens (iPhone, iPad, Android, Desktop) ──
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#000000' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  // ── Clean, authoritative title without keyword stuffing ───────────────────
  title: {
    default: 'Steel Duct Environmental | Commercial Ventilation & HVAC Contractor Malaysia',
    template: '%s | Steel Duct Environmental',
  },

  // ── Natural, engaging meta description (human-first, concise) ─────────────
  description: siteConfig.description,

  // ── Comprehensive Search Engine & Crawler Keywords (EN & BM) ───────────────
  keywords: [
    'Steel Duct Environmental',
    'NFPA 96 kitchen hood installation Malaysia',
    'certified HVAC kitchen hood contractor',
    'commercial kitchen ventilation Malaysia',
    'kitchen hood ductwork',
    'exhaust fan installation Malaysia',
    'commercial HVAC contractor',
    'steel ductwork installation Malaysia',
    'galvanised iron duct',
    'stainless steel ducting Selangor',
    'commercial air cooler',
    'grease duct cleaning',
    'kitchen exhaust hood repair',
    'CIDB M01 contractor',
    'DOSH IAQ compliance Malaysia',
    'pemasangan ducting dapur',
    'servis cuci kitchen hood',
    'kontraktor HVAC Kuala Lumpur',
    'ekzos fan industri',
    'mechanical ventilation air conditioning MVAC',
    'Selangor ventilation specialist',
  ],

  // ── Canonical & Alternates ─────────────────────────────────────────────────
  alternates: {
    canonical: siteUrl,
  },

  applicationName: 'Steel Duct Environmental',
  authors: [{ name: 'Steel Duct Environmental Sdn Bhd', url: siteUrl }],
  creator: 'Steel Duct Environmental Sdn Bhd',
  publisher: 'Steel Duct Environmental Sdn Bhd',
  category: 'HVAC & Mechanical Engineering',
  classification: 'Commercial Kitchen Ventilation & Mechanical Engineering Contractor',

  // ── Mobile, iPad & Tablet OS Web App Config ───────────────────────────────
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Steel Duct',
  },
  formatDetection: {
    telephone: true,
    date: false,
    address: true,
    email: true,
    url: true,
  },

  // ── Search Engine Crawlers & Bot Directives ────────────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ── Open Graph ─────────────────────────────────────────────────────────────
  openGraph: {
    type: 'website',
    locale: 'en_MY',
    url: siteUrl,
    siteName: 'Steel Duct Environmental Sdn Bhd',
    title: 'Steel Duct Environmental | Commercial Ventilation & HVAC Contractor',
    description:
      'Custom kitchen hood ductwork, industrial exhaust fans, evaporative coolers, and commercial HVAC solutions in Malaysia. Certified CIDB M01 engineering team.',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Steel Duct Environmental – Commercial Ventilation & HVAC Solutions',
      },
    ],
  },

  // ── Twitter Card ───────────────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Steel Duct Environmental | Commercial Ventilation & HVAC Contractor',
    description:
      'Custom kitchen hood ductwork, industrial exhaust fans, evaporative coolers, and commercial HVAC solutions in Malaysia. Certified CIDB M01 engineering team.',
    images: [siteConfig.ogImage],
  },

  // ── Google Search Console Verification ────────────────────────────────────
  verification: {
    google: 'yUIUlkpau6Qr1hvAPmbm8nyA-1EA3cQoIP-UH-isbTU',
  },

  // ── Favicon & App Icons (Steel Duct Logo) ────────────────────────────────
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon-32x32.png',
  },

  other: {
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#000000',
    'msapplication-TileImage': '/icon-192.png',
  },
}

// ── Google Schema Graph (Compliant LocalBusiness, WebSite & FAQPage) ────────
const jsonLdGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['HVACBusiness', 'LocalBusiness'],
      '@id': `${siteUrl}/#organization`,
      name: siteConfig.name,
      alternateName: siteConfig.alternateName,
      description:
        'Commercial kitchen ventilation, custom steel ductwork, industrial exhaust fans, and HVAC contracting services in Malaysia.',
      url: siteUrl,
      logo: `${siteUrl}/icon-512.png`,
      image: siteConfig.ogImage,
      telephone: siteConfig.contact.phoneRaw,
      email: siteConfig.contact.email,
      priceRange: '$$',
      currenciesAccepted: 'MYR',
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.locality,
        postalCode: siteConfig.address.postalCode,
        addressRegion: siteConfig.address.region,
        addressCountry: siteConfig.address.country,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: siteConfig.address.geo.latitude,
        longitude: siteConfig.address.geo.longitude,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ],
          opens: '08:00',
          closes: '18:00',
        },
      ],
      areaServed: [
        { '@type': 'Country', name: 'Malaysia' },
        ...siteConfig.areaServed.map((name) => ({ '@type': 'State', name })),
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Ventilation & Air Conditioning Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Kitchen Hood Installation (NFPA 96 & Certified HVAC)',
              description:
                'Supply and installation of NFPA 96 compliant kitchen hood duct systems by certified HVAC engineers, ensuring liquid-tight grease extraction, fire safety, and clean indoor air.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Exhaust Fan Installation',
              description:
                'Supply and installation of industrial and residential exhaust fans for bathrooms, kitchens, and commercial spaces.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Air Cooler Installation',
              description:
                'Installation and servicing of evaporative and mechanical air cooling units for commercial areas.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Air Fresher Systems',
              description:
                'Integrated air freshening and deodorizing systems that reduce odours and improve indoor air quality.',
            },
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the difference between a standard air conditioner and a commercial HVAC system?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A standard residential unit only cools a single room, whereas a commercial HVAC system coordinates building-wide temperature, fresh air intake, humidity control, and exhaust ventilation to ensure safety and comfort.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Steel Duct certified by CIDB in Malaysia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Steel Duct is registered under CIDB M01 for Air Conditioning and Mechanical Ventilation systems, with all installations meeting local electrical and safety codes.',
          },
        },
        {
          '@type': 'Question',
          name: 'What materials are used for commercial kitchen exhaust ductwork?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We supply and install grease ducts using heavy-gauge stainless steel (Grade 304) and galvanised iron with liquid-tight welded seams to prevent oil leakage and minimise fire risk.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does a typical kitchen hood installation take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most commercial kitchen installations take 1 to 2 working days. Larger multi-level routing may require additional time for installation and airflow balancing.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer routine maintenance for exhaust systems?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We provide scheduled servicing that includes fan impeller cleaning, motor inspections, belt adjustments, duct checks, and airflow testing.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do air cooling and freshening systems improve workplace comfort?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Evaporative coolers lower ambient temperatures cost-effectively in open kitchens and workshops, while integrated deodorising systems effectively reduce persistent cooking odours.',
          },
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: siteConfig.name,
      alternateName: [siteConfig.shortName, siteConfig.alternateName],
      description:
        'Commercial kitchen ventilation, custom steel ductwork, industrial exhaust fans, and HVAC contracting services in Malaysia.',
      inLanguage: 'en-MY',
      publisher: {
        '@id': `${siteUrl}/#organization`,
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en-MY"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body
        className="min-h-full bg-black text-white"
        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
      >
        {children}
      </body>
    </html>
  )
}
