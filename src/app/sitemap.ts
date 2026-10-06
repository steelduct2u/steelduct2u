import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

export const dynamic = 'force-static'

// Satu halaman sahaja — Google abaikan URL dengan #anchor, jadi jangan senaraikan seksyen.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ]
}
