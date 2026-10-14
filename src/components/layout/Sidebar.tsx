'use client'

import Image from 'next/image'
import { X } from 'lucide-react'
import WhatsAppIcon from '@/components/ui/WhatsAppIcon'
import { siteConfig, whatsappLink } from '@/config/site'

const navLinks = siteConfig.navLinks

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Backdrop overlay */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={[
          'fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        ].join(' ')}
      />

      {/* Sidebar panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={[
          'fixed top-0 left-0 z-50 h-full w-72 bg-zinc-900 border-r border-white/10',
          'flex flex-col shadow-2xl transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        ].join(' ')}
      >
        {/* Header – Logo + Brand */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <a
            href="#home"
            onClick={onClose}
            aria-label="Steel Duct – Home"
            className="flex items-center gap-3 select-none group"
          >
            <Image
              src="/logo.webp"
              alt="Steel Duct Logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain drop-shadow-[0_2px_8px_rgba(249,115,22,0.4)]"
            />
            {/* Brand text */}
            <span
              className="text-lg font-extrabold tracking-widest uppercase leading-none"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              <span className="text-white">Steel</span>
              <span className="text-orange-500"> Duct</span>
            </span>
          </a>

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close navigation menu"
            className="p-2 rounded-md text-zinc-400 hover:text-orange-500 hover:bg-zinc-800 transition-colors duration-200"
          >
            <X size={22} strokeWidth={2.5} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1 px-4 pt-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="relative px-4 py-3 rounded-md text-sm font-semibold tracking-wide uppercase text-zinc-300 hover:text-orange-500 hover:bg-zinc-800 transition-all duration-200 group"
              style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
            >
              <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-0.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              {link.label}
            </a>
          ))}
        </nav>

        {/* Footer CTA */}
        <div className="mt-auto px-6 py-6 border-t border-white/10">
          <a
            href={whatsappLink('Hello Steel Duct, I would like to request a quote.')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            aria-label="Chat with Steel Duct on WhatsApp"
            className="flex items-center justify-center gap-2.5 w-full text-center py-3.5 px-4 rounded-md bg-[#25D366] hover:bg-[#20ba5a] text-zinc-950 font-extrabold text-sm uppercase tracking-wider transition-colors duration-200 shadow-lg shadow-[#25D366]/25"
            style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
          >
            <WhatsAppIcon size={18} />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </>
  )
}
