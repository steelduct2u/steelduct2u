import { Phone, ClipboardCheck, MapPin, FileText } from 'lucide-react'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'
import LazySection from '@/components/ui/LazySection'
import { siteConfig, whatsappLink } from '@/config/site'

const steps = [
  { Icon: MapPin, title: 'Send your location', text: 'WhatsApp us your site address and a few photos.' },
  { Icon: ClipboardCheck, title: 'Free site inspection', text: 'Our team visits to measure and assess the space.' },
  { Icon: FileText, title: 'Itemised quotation', text: 'You receive a clear, itemised quote — no obligation.' },
]

export default function QuoteCta() {
  return (
    <section aria-labelledby="quote-cta-title" className="relative bg-zinc-950 py-16 sm:py-20 px-4 sm:px-6">
      <LazySection minHeight="400px">
        <div className="max-w-6xl mx-auto rounded-3xl border border-orange-500/40 bg-gradient-to-br from-orange-500/15 via-zinc-950 to-black p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="max-w-2xl">
            <h2
              id="quote-cta-title"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              Need a kitchen hood, ducting or exhaust system{' '}
              <span className="text-gradient-orange">installed?</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-300 leading-relaxed">
              Getting a quote takes three simple steps.
            </p>
          </div>

          <ol className="stagger mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {steps.map(({ Icon, title, text }, i) => (
              <li key={title} className="card-lift flex items-start gap-4 p-4 sm:p-5 rounded-2xl">
                <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-xl bg-orange-500/15 border border-orange-500/40 text-orange-400">
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <div>
                  <p
                    className="text-xs font-bold tracking-widest uppercase text-orange-400"
                    style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                  >
                    Step {i + 1}
                  </p>
                  <p className="mt-0.5 text-base font-bold text-white">{title}</p>
                  <p className="mt-1 text-sm text-zinc-400 leading-relaxed">{text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={whatsappLink('Hello Steel Duct, I would like to request a free site inspection and quotation.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 h-12 px-7 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-zinc-950 font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-[#25D366]/25 transition-colors"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              <WhatsAppIcon size={20} />
              <span>Get a Free Quote</span>
            </a>
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2.5 h-12 px-7 rounded-lg border border-zinc-700 hover:border-orange-500 text-white font-bold text-sm uppercase tracking-wider transition-colors"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              <Phone size={18} />
              <span>Call {siteConfig.contact.phone}</span>
            </a>
          </div>
        </div>
      </LazySection>
    </section>
  )
}
