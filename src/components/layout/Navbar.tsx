'use client'

import Image from 'next/image'
import { Menu } from 'lucide-react'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'
import { siteConfig, whatsappLink } from '@/config/site'

const navLinks = siteConfig.navLinks

interface NavbarProps {
  onMenuOpen: () => void
}

export default function Navbar({ onMenuOpen }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      {/* ── Desktop top bar (hidden below lg) ── */}
      <div className="hidden lg:block bg-black/85 backdrop-blur-md border-b border-gray-800/60">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo + Brand Name */}
          <a
            href="#home"
            aria-label="Steel Duct – Home"
            className="flex items-center gap-3 select-none group"
          >
              <Image
                src="/logo.webp"
                alt="Steel Duct Logo"
                width={40}
                height={40}
                priority
                className="w-10 h-10 object-contain drop-shadow-[0_2px_8px_rgba(249,115,22,0.4)]"
              />
            <span
              className="text-xl font-extrabold tracking-widest uppercase leading-none"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              <span className="text-white">Steel</span>
              <span className="text-orange-500"> Duct</span>
            </span>
          </a>

          {/* Nav links */}
          <nav aria-label="Primary navigation" className="flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-xs xl:text-sm font-semibold tracking-widest uppercase text-gray-300 hover:text-orange-500 transition-colors duration-200 group"
                style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
              >
                {link.label}
                {/* Animated underline */}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-orange-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}

            {/* WhatsApp CTA */}
            <a
              href={whatsappLink('Hello Steel Duct, I would like to request a quote.')}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Steel Duct on WhatsApp"
              className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#25D366] hover:bg-[#20ba5a] text-gray-950 text-xs xl:text-sm font-extrabold tracking-wider uppercase transition-all duration-200 shadow-lg shadow-[#25D366]/25 hover:shadow-[#25D366]/40 hover:-translate-y-0.5"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              <WhatsAppIcon size={16} />
              <span>WhatsApp</span>
            </a>
          </nav>
        </div>
      </div>

      {/* ── Mobile & Tablet header (hidden on lg and above) ── */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-black/85 backdrop-blur-md border-b border-gray-800/60">
        <a
          href="#home"
          aria-label="Steel Duct – Home"
          className="flex items-center gap-2.5 select-none group"
        >
          <Image
            src="/logo.webp"
            alt="Steel Duct Logo"
            width={36}
            height={36}
            priority
            className="w-9 h-9 object-contain drop-shadow-[0_2px_8px_rgba(249,115,22,0.4)]"
          />
          <span
            className="text-lg font-extrabold tracking-widest uppercase leading-none"
            style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
          >
            <span className="text-white">Steel</span>
            <span className="text-orange-500"> Duct</span>
          </span>
        </a>

        {/* WhatsApp & Call ada dalam bar tindakan bawah (FloatingWhatsApp) */}
        <div className="flex items-center gap-2.5">
          <button
            id="mobile-menu-toggle"
            onClick={onMenuOpen}
            aria-label="Open navigation menu"
            aria-expanded={false}
            className="p-2 rounded-md bg-gray-900 border border-gray-700/60 text-gray-300 hover:text-orange-500 hover:border-orange-500/50 transition-all duration-200"
          >
            <Menu size={22} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </header>
  )
}
