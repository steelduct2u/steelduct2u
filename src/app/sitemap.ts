import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'
import { servicePages } from '@/config/services'

export const dynamic = 'force-static'

// Laman utama + halaman servis. Google abaikan URL dengan #anchor, jadi jangan senaraikan seksyen.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...servicePages.map((s) => ({
      url: `${siteConfig.url}/services/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ]
}
