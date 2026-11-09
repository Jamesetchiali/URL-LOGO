import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://v0-phoeber.vercel.app'
  const lastModified = new Date()

  return [{
    url: baseUrl,
    lastModified,
    changeFrequency: 'monthly',
    priority: 1,
  }]
}
