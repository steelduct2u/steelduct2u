// Penjejakan acara Google Analytics 4. Selamat dipanggil walaupun GA tidak dimuat (dev / diblok).

type EventParams = Record<string, string | number | boolean>

declare global {
  interface Window {
    gtag?: (command: 'event', name: string, params?: EventParams) => void
  }
}

export function trackEvent(name: string, params: EventParams = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', name, params)
}

/** Nama acara — tandakan kedua-duanya sebagai "Key event" dalam GA4. */
export const GA_EVENTS = {
  whatsappClick: 'whatsapp_click',
  whatsappFormSubmit: 'whatsapp_form_submit',
} as const
