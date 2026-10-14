import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Check } from 'lucide-react'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'
import { siteConfig, whatsappLink } from '@/config/site'
import { getServicePage, servicePages } from '@/config/services'

export const dynamicParams = false

export function generateStaticParams() {
  return servicePages.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const page = getServicePage(slug)
  if (!page) return {}
  const url = `${siteConfig.url}/services/${page.slug}`
  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: { canonical: url },
    openGraph: { type: 'website', locale: 'en_MY', url, title: page.metaTitle, description: page.metaDescription, siteName: siteConfig.name, images: [siteConfig.ogImage] },
    twitter: { card: 'summary_large_image', title: page.metaTitle, description: page.metaDescription, images: [siteConfig.ogImage] },
  }
}

const montserrat = { fontFamily: 'var(--font-montserrat), sans-serif' }

export default async function ServicePageRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = getServicePage(slug)
  if (!page) notFound()

  const url = `${siteConfig.url}/services/${page.slug}`
  const others = servicePages.filter((s) => s.slug !== page.slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: page.h1,
        serviceType: page.keyword,
        description: page.metaDescription,
        url,
        provider: { '@id': `${siteConfig.url}/#organization` },
        areaServed: { '@type': 'Country', name: 'Malaysia' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteConfig.url}/#services` },
          { '@type': 'ListItem', position: 3, name: page.label, item: url },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: page.faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="border-b border-white/10 bg-black/60 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 font-extrabold tracking-wide" style={montserrat}>
            <Image src="/logo.webp" alt="Steel Duct Environmental logo" width={36} height={36} className="w-9 h-9 object-contain" />
            <span>STEEL <span className="text-orange-500">DUCT</span></span>
          </Link>
          <Link href="/#services" className="text-sm text-zinc-400 hover:text-orange-400 transition-colors">
            All services
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-5 sm:px-6 py-12 sm:py-16">
        <nav aria-label="Breadcrumb" className="text-xs text-zinc-500 mb-6">
          <Link href="/" className="hover:text-orange-400">Home</Link> /{' '}
          <Link href="/#services" className="hover:text-orange-400">Services</Link> / <span className="text-zinc-300">{page.label}</span>
        </nav>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-[1.15] mb-5" style={montserrat}>
          {page.h1}
        </h1>
        <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl mb-8">{page.intro}</p>

        <a
          href={whatsappLink(`Hello Steel Duct, I would like to request a quote for ${page.whatsappTopic}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-zinc-950 font-extrabold text-sm uppercase tracking-wider transition-all duration-500 mb-14"
          style={montserrat}
        >
          <WhatsAppIcon size={18} /> Get a Free Quote
        </a>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14 items-stretch">
          <section className="card-lift rounded-2xl p-6 sm:p-7">
            <h2 className="text-xl font-bold tracking-tight mb-4" style={montserrat}>What&apos;s included</h2>
            <ul className="space-y-3">
              {page.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed">
                  <Check size={16} className="text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className="card-lift rounded-2xl p-6 sm:p-7">
            <h2 className="text-xl font-bold tracking-tight mb-4" style={montserrat}>Suitable for</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {page.suitableFor.map((s) => (
                <span key={s} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-zinc-300">{s}</span>
              ))}
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Serving all states in Malaysia. CIDB M01 registered. Free site inspection and itemised quotation.
            </p>
          </section>
        </div>

        <section className="mb-14">
          <h2 className="text-2xl font-bold tracking-tight mb-6" style={montserrat}>Frequently asked questions</h2>
          <div className="space-y-4">
            {page.faq.map((f) => (
              <div key={f.q} className="card-lift rounded-2xl p-5 sm:p-6">
                <h3 className="font-semibold text-white mb-2">{f.q}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold tracking-tight mb-6" style={montserrat}>Other services</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {others.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="group flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-zinc-900/40 px-5 py-4 text-sm text-zinc-300 hover:border-orange-500/40 hover:text-orange-400 transition-all duration-500">
                  {s.label}
                  <ArrowRight size={16} className="text-zinc-600 group-hover:text-orange-500" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-xs text-zinc-500">
        <p>{siteConfig.name} · {siteConfig.address.full}</p>
        <p className="mt-1">
          <a href={`tel:${siteConfig.contact.phoneRaw}`} className="hover:text-orange-400">{siteConfig.contact.phone}</a> ·{' '}
          <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-orange-400">{siteConfig.contact.email}</a>
        </p>
      </footer>
    </div>
  )
}
