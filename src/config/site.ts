// Domain dibaca dari environment variable — set dalam Cloudflare Pages dashboard:
// Cloudflare Pages → Settings → Environment Variables → NEXT_PUBLIC_SITE_URL (cth. https://domain-anda.com)
// Fallback localhost hanya untuk pembangunan; production MESTI set pemboleh ubah ini.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export const siteConfig = {
  name: 'Steel Duct Environmental Sdn Bhd',
  shortName: 'Steel Duct',
  alternateName: 'Still Duct Technical Engineering',
  description:
    'NFPA 96 kitchen hood installation, steel ductwork, exhaust fans and air coolers nationwide in Malaysia. CIDB M01 contractor. Free site inspection.',
  url: siteUrl,
  ogImage: `${siteUrl}/og-image.jpg`,

  // Contact details
  contact: {
    phone: '+60 3-8957 5808',
    phoneRaw: '+60389575808',
    email: 'sdtechnic@gmail.com',
    whatsappUrl: 'https://wa.me/60389575808',
  },

  // Address
  address: {
    street: 'Block A-G-01, Jalan LP 7/3, Taman Lestari Perdana',
    locality: 'Seri Kembangan',
    postalCode: '43300',
    region: 'Selangor',
    country: 'MY',
    full: 'Block A-G-01, Jalan LP 7/3, Taman Lestari Perdana, 43300 Seri Kembangan, Selangor, Malaysia',
    geo: {
      latitude: 3.0319,
      longitude: 101.7097,
    },
  },

  // Operating Hours
  hours: {
    days: 'Monday – Saturday',
    time: '8:00 AM – 6:00 PM',
  },

  // Kawasan servis: seluruh Malaysia — dipaparkan dalam footer & schema (areaServed)
  areaServed: [
    'Kuala Lumpur',
    'Selangor',
    'Putrajaya',
    'Negeri Sembilan',
    'Melaka',
    'Johor',
    'Pahang',
    'Perak',
    'Penang',
    'Kedah',
    'Perlis',
    'Kelantan',
    'Terengganu',
    'Sabah',
    'Sarawak',
    'Labuan',
  ],
  // Navigation Links
  navLinks: [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Process', href: '#expertise' },
    { label: 'Sectors', href: '#sectors' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
} as const

// Pautan WhatsApp dengan mesej siap diisi — guna ini, jangan tulis URL wa.me secara manual.
export function whatsappLink(message: string) {
  return `${siteConfig.contact.whatsappUrl}?text=${encodeURIComponent(message)}`
}
