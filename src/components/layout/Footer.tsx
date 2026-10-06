import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, ShieldCheck, Flame, ArrowRight } from 'lucide-react'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'
import { siteConfig, whatsappLink } from '@/config/site'

// Teks pautan kaya kata kunci — membantu Google memahami servis utama
const footerServices = [
  'Kitchen Hood Installation',
  'Kitchen Exhaust Ductwork',
  'GI & Stainless Steel Duct Fabrication',
  'Industrial Exhaust Fans',
  'Commercial Air Coolers',
  'ESP Smoke & Odour Control',
]

const headingClass = 'text-sm font-bold tracking-widest uppercase text-white mb-5'
const montserrat = { fontFamily: 'var(--font-montserrat), sans-serif' }

export default function Footer() {
  const { contact, address, hours } = siteConfig

  return (
    <footer className="relative bg-gradient-to-b from-gray-950 to-black border-t border-gray-900">
      {/* Garis oren atas */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 pt-14 sm:pt-16 pb-40 lg:pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* ── Jenama ── */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col gap-5">
            <a href="#home" className="inline-flex items-center gap-3 w-fit" aria-label={`${siteConfig.name} – back to top`}>
              <Image src="/logo.webp" alt="" width={44} height={44} className="w-11 h-11 object-contain" />
              <span className="text-xl font-extrabold tracking-widest uppercase leading-none" style={montserrat}>
                <span className="text-white">Steel</span> <span className="text-orange-500">Duct</span>
              </span>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              {siteConfig.name} supplies and installs commercial kitchen exhaust hoods, steel ductwork,
              exhaust fans and air coolers for restaurants, factories and commercial buildings across
              Malaysia — from our base in Seri Kembangan, Selangor.
            </p>
            <ul className="flex flex-wrap gap-2" aria-label="Accreditations">
              <li className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-800 bg-gray-900/60 text-xs font-semibold text-gray-300">
                <ShieldCheck size={14} className="text-orange-500" /> CIDB M01 Registered
              </li>
              <li className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-800 bg-gray-900/60 text-xs font-semibold text-gray-300">
                <Flame size={14} className="text-orange-500" /> NFPA 96 Compliant
              </li>
            </ul>
            <a
              href={whatsappLink('Hello Steel Duct, I would like to request a free site inspection and quotation.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-fit h-11 px-5 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-gray-950 text-sm font-extrabold uppercase tracking-wider transition-colors"
              style={montserrat}
            >
              <WhatsAppIcon size={18} />
              Get a Free Quote
            </a>
          </div>

          {/* ── Servis ── */}
          <nav aria-labelledby="footer-services" className="lg:col-span-3">
            <h2 id="footer-services" className={headingClass} style={montserrat}>Our Services</h2>
            <ul className="flex flex-col gap-3">
              {footerServices.map((service) => (
                <li key={service}>
                  <a href="#services" className="group inline-flex items-center gap-2 text-sm text-gray-400 hover:text-orange-400 transition-colors">
                    <ArrowRight size={14} className="text-gray-600 group-hover:text-orange-500 transition-colors" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Pautan pantas ── */}
          <nav aria-labelledby="footer-links" className="lg:col-span-2">
            <h2 id="footer-links" className={headingClass} style={montserrat}>Quick Links</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-3">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-orange-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Hubungi (NAP — sama seperti schema LocalBusiness) ── */}
          <div className="lg:col-span-3">
            <h2 className={headingClass} style={montserrat}>Contact Us</h2>
            <address className="not-italic flex flex-col gap-4 text-sm text-gray-400">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-orange-400 transition-colors"
              >
                <MapPin size={18} className="text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {address.street},<br />
                  {address.postalCode} {address.locality}, {address.region}, Malaysia
                </span>
              </a>
              <a href={`tel:${contact.phoneRaw}`} className="flex items-center gap-3 hover:text-orange-400 transition-colors">
                <Phone size={18} className="text-orange-500 flex-shrink-0" />
                {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-3 hover:text-orange-400 transition-colors break-all">
                <Mail size={18} className="text-orange-500 flex-shrink-0" />
                {contact.email}
              </a>
              <p className="flex items-start gap-3">
                <Clock size={18} className="text-orange-500 flex-shrink-0 mt-0.5" />
                <span>
                  {hours.days}
                  <br />
                  {hours.time}
                </span>
              </p>
            </address>
          </div>
        </div>

        {/* ── Kawasan servis (SEO tempatan) ── */}
        <div className="mt-12 pt-8 border-t border-gray-900">
          <h2 className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-3" style={montserrat}>
            Areas We Serve — Nationwide
          </h2>
          <ul className="flex flex-wrap gap-x-2 gap-y-2">
            {siteConfig.areaServed.map((area) => (
              <li key={area} className="px-3 py-1 rounded-full bg-gray-900/70 border border-gray-800 text-xs text-gray-400">
                {area}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Bar bawah ── */}
        {/* lg:pr-24: ruang untuk butang terapung (WhatsApp & Back to top) di kanan */}
        <div className="mt-8 pt-6 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between gap-2 lg:pr-24 text-xs text-gray-500 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Commercial Kitchen Ventilation &amp; HVAC Contractor — Serving All of Malaysia</p>
        </div>
      </div>
    </footer>
  )
}
