import Script from 'next/script'
import { siteConfig } from '@/config/site'
import WhatsAppTracking from '@/components/analytics/WhatsAppTracking'

// Google Analytics 4 — dimuat selepas halaman interaktif supaya tidak menjejaskan kelajuan.
// Hanya aktif pada build production (tiada data tercemar semasa `npm run dev`).
export default function GoogleAnalytics() {
  const id = siteConfig.analytics.measurementId
  if (process.env.NODE_ENV !== 'production' || !id) return null

  return (
    <>
      <WhatsAppTracking />
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${id}');`}
      </Script>
    </>
  )
}
