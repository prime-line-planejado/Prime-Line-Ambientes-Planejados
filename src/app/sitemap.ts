import type { MetadataRoute } from 'next'
import { getTodosArtigos } from '@/lib/blog'
import { projetos } from '@/data/projetos'
import { servicosPaginas } from '@/data/servicosPaginas'
import { bairros } from '@/data/bairros'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://primelineplanejados.com.br'

export default function sitemap(): MetadataRoute.Sitemap {
  const artigos = getTodosArtigos()

  const pages: MetadataRoute.Sitemap = [
    { url: siteUrl,                   lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${siteUrl}/portfolio`,    lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${siteUrl}/servicos`,     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/contato`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/sobre`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/blog`,         lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.7 },
  ]

  const servicosMap: MetadataRoute.Sitemap = servicosPaginas.map(s => ({
    url: `${siteUrl}/servicos/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  const projetosMap: MetadataRoute.Sitemap = projetos.map(p => ({
    url: `${siteUrl}/portfolio/${p.id}`,
    lastModified: new Date(`${p.ano ?? 2024}-01-01`),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const artigosMap: MetadataRoute.Sitemap = (artigos as any[]).map((artigo: any) => ({
    url: `${siteUrl}/blog/${artigo.slug}`,
    lastModified: new Date(artigo.updatedAt ?? artigo.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const bairrosIndexMap: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/bairros`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]

  const bairrosMap: MetadataRoute.Sitemap = bairros.map(b => ({
    url: `${siteUrl}/bairros/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  }))

  return [...pages, ...servicosMap, ...projetosMap, ...artigosMap, ...bairrosIndexMap, ...bairrosMap]
}
