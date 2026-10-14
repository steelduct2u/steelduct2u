// Structured data (JSON-LD) laman utama: HVACBusiness/LocalBusiness, FAQPage dan WebSite.
import { siteConfig } from '@/config/site'
import { faqs } from '@/config/faq'

const siteUrl = siteConfig.url

export const jsonLdGraph = {
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
      mainEntity: faqs.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
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

/** Serialisasi selamat untuk <script type="application/ld+json"> (elak penutup </script>). */
export const toJsonLd = (data: unknown) => JSON.stringify(data).replace(/</g, '\\u003c')
