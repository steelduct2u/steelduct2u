'use client'

import { useEffect } from 'react'
import { GA_EVENTS, trackEvent } from '@/lib/analytics'

// Satu pendengar klik untuk SEMUA pautan WhatsApp (butang terapung, Hero, Services, Footer, halaman servis).
// Pautan WhatsApp baharu dijejak secara automatik tanpa perubahan kod.
export default function WhatsAppTracking() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.('a[href*="wa.me"]')
      if (!link) return

      trackEvent(GA_EVENTS.whatsappClick, {
        link_text: (link.textContent ?? '').trim().slice(0, 60) || 'icon',
        section: link.closest('section[id]')?.id ?? (link.closest('footer') ? 'footer' : 'other'),
        page_path: window.location.pathname,
      })
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return null
}
