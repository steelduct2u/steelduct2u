import { Phone } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'
import { siteConfig, whatsappLink } from '@/config/site'

const quoteUrl = whatsappLink(
  'Hello Steel Duct, I would like to request a free site inspection and quotation.',
)

export default function FloatingWhatsApp() {
  return (
    <>
      {/* Mobile & tablet: bar tindakan bawah — mudah dicapai ibu jari, tidak menutup kandungan */}
      <nav
        aria-label="Quick contact"
        className="lg:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-[auto_1fr] gap-2.5 px-3 pt-2.5 bg-black/90 backdrop-blur-md border-t border-gray-800"
        style={{ paddingBottom: 'calc(0.625rem + env(safe-area-inset-bottom))' }}
      >
        <a
          href={`tel:${siteConfig.contact.phoneRaw}`}
          aria-label={`Call Steel Duct at ${siteConfig.contact.phone}`}
          className="inline-flex items-center justify-center gap-2 h-12 px-5 rounded-lg bg-gray-900 border border-gray-700 text-white text-sm font-bold uppercase tracking-wider"
          style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
        >
          <Phone size={18} />
          <span>Call</span>
        </a>
        <a
          href={quoteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 h-12 px-4 rounded-lg bg-[#25D366] active:bg-[#20ba5a] text-gray-950 text-sm font-extrabold uppercase tracking-wider shadow-lg shadow-[#25D366]/20"
          style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
        >
          <WhatsAppIcon size={20} />
          <span>Free Quote</span>
        </a>
      </nav>

      {/* Desktop: butang terapung kecil */}
      <a
        href={quoteUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Request a free quote on WhatsApp (${siteConfig.contact.phone})`}
        className="hidden lg:flex fixed bottom-6 right-6 z-40 items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-gray-950 shadow-2xl shadow-[#25D366]/40 hover:scale-105 transition-all duration-200"
      >
        <WhatsAppIcon size={28} />
      </a>
    </>
  )
}
