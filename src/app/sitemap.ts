import type { MetadataRoute } from 'next'
import { getTodosArtigos } from '@/lib/blog'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://primelineplanejados.com.br'

export default function sitemap(): MetadataRoute.Sitemap {
  const artigos = getTodosArtigos()

  const pages: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/portfolio`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteUrl}/servicos`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/sobre`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/contato`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
  ]

  const artigosMap: MetadataRoute.Sitemap = (artigos as any[]).map((artigo: any) => ({
    url: `${siteUrl}/blog/${artigo.slug}`,
    lastModified: new Date(artigo.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...pages, ...artigosMap]
}
