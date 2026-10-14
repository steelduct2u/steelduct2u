import type { Metadata, Viewport } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import { siteConfig } from '@/config/site'
import { jsonLdGraph, toJsonLd } from '@/config/schema'
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
    default: 'Kitchen Hood Installation Malaysia | Steel Duct HVAC Contractor',
    template: '%s | Steel Duct Environmental',
  },

  // ── Natural, engaging meta description (human-first, concise) ─────────────
  description: siteConfig.description,

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
    title: 'Kitchen Hood Installation Malaysia | Steel Duct HVAC Contractor',
    description: siteConfig.description,
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
    title: 'Kitchen Hood Installation Malaysia | Steel Duct HVAC Contractor',
    description: siteConfig.description,
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
          dangerouslySetInnerHTML={{ __html: toJsonLd(jsonLdGraph) }}
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
