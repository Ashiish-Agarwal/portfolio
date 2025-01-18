import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/', // Allow the root URL
      
    },
    sitemap: ['https://drono.site/sitemap.xml','https://drono.site','web devlopers'],
  }
}