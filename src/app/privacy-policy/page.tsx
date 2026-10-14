import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/config/site'

const url = `${siteConfig.url}/privacy-policy`
const lastUpdated = '15 October 2026'

export const metadata: Metadata = {
  title: { absolute: 'Privacy Policy | Steel Duct Environmental' },
  description:
    'How Steel Duct Environmental Sdn Bhd collects, uses and protects personal data from enquiries and website visits, in line with the Personal Data Protection Act 2010 (Malaysia).',
  alternates: { canonical: url },
}

const montserrat = { fontFamily: 'var(--font-montserrat), sans-serif' }
const h2 = 'text-xl font-bold tracking-tight text-white mt-10 mb-3'
const p = 'text-sm leading-relaxed text-zinc-400 mb-3'

export default function PrivacyPolicyPage() {
  const { name, contact, address } = siteConfig

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <header className="border-b border-white/10 bg-black/60 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 font-extrabold tracking-wide" style={montserrat}>
            <Image src="/logo.webp" alt="Steel Duct Environmental logo" width={36} height={36} className="w-9 h-9 object-contain" />
            <span>STEEL <span className="text-orange-500">DUCT</span></span>
          </Link>
          <Link href="/" className="text-sm text-zinc-400 hover:text-orange-400 transition-colors">Back to home</Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-5 sm:px-6 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2" style={montserrat}>Privacy Policy</h1>
        <p className="text-xs text-zinc-500 mb-8">Last updated: {lastUpdated}</p>

        <p className={p}>
          {name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy. This policy explains what personal data we collect through
          this website, why we collect it and how we handle it, in line with the Personal Data Protection Act 2010 of Malaysia (PDPA).
        </p>

        <h2 className={h2}>1. Who we are</h2>
        <p className={p}>
          {name}, {address.full}. Email: <a className="text-orange-400 hover:text-orange-300" href={`mailto:${contact.email}`}>{contact.email}</a>. Phone:{' '}
          <a className="text-orange-400 hover:text-orange-300" href={`tel:${contact.phoneRaw}`}>{contact.phone}</a>.
        </p>

        <h2 className={h2}>2. What data we collect</h2>
        <p className={p}><strong className="text-zinc-300">Enquiry form.</strong> Name, phone or WhatsApp number, email address (optional), the service you need, project location (optional) and the project details you write.</p>
        <p className={p}><strong className="text-zinc-300">WhatsApp and phone.</strong> Information you share when you message or call us.</p>
        <p className={p}><strong className="text-zinc-300">Analytics.</strong> We use Google Analytics to collect anonymous usage data such as pages viewed, approximate location, device and browser type, and clicks on our WhatsApp buttons. This uses cookies or similar technologies.</p>

        <h2 className={h2}>3. Why we use your data</h2>
        <p className={p}>To respond to your enquiry, arrange site inspections, prepare quotations, provide our services, and to understand and improve how this website performs. We do not sell your personal data.</p>

        <h2 className={h2}>4. How the enquiry form works</h2>
        <p className={p}>
          When you click &ldquo;Send Now&rdquo;, the form opens WhatsApp with your message prepared. The message is sent to us through WhatsApp
          (a service of Meta Platforms) only when you press send in WhatsApp. We do not store form entries on this website&rsquo;s server.
        </p>

        <h2 className={h2}>5. Cookies and advertising</h2>
        <p className={p}>
          Google Analytics uses cookies to measure traffic. We may also use advertising tools from Google or Meta to measure and show ads;
          these may use cookies or pixels to recognise visitors. You can block or delete cookies in your browser settings and opt out of
          Google Analytics with the Google Analytics Opt-out Browser Add-on. Blocking cookies will not stop you from using this website.
        </p>

        <h2 className={h2}>6. Who we share data with</h2>
        <p className={p}>Only service providers needed to operate the website and communicate with you, such as Google (analytics), Meta (WhatsApp) and Cloudflare (website hosting and security). We may also disclose data where the law requires it.</p>

        <h2 className={h2}>7. How long we keep data</h2>
        <p className={p}>We keep enquiry details only as long as needed to handle your request and meet our legal and business record requirements, then delete or anonymise them. Analytics data is retained according to our Google Analytics settings.</p>

        <h2 className={h2}>8. Your rights</h2>
        <p className={p}>
          Under the PDPA you may request access to, or correction of, your personal data, and may withdraw consent for its use. Email us at{' '}
          <a className="text-orange-400 hover:text-orange-300" href={`mailto:${contact.email}`}>{contact.email}</a> and we will respond within a reasonable time.
        </p>

        <h2 className={h2}>9. Security and children</h2>
        <p className={p}>We take reasonable steps to protect your data, but no internet transmission is completely secure. This website is not directed at children under 18.</p>

        <h2 className={h2}>10. Changes to this policy</h2>
        <p className={p}>We may update this policy from time to time. The date above shows the latest version.</p>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-xs text-zinc-500">
        <p>&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
      </footer>
    </div>
  )
}
