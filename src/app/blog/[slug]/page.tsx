import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getArtigoPorSlug, getTodosArtigos, getArtigosRelacionados } from '@/lib/blog'
import { HeaderArtigo } from '@/components/blog/HeaderArtigo'
import { ConteudoMDX } from '@/components/blog/ConteudoMDX'
import { CtaBlogWhatsApp } from '@/components/blog/CtaBlogWhatsApp'
import { ArtigosRelacionados } from '@/components/blog/ArtigosRelacionados'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://primelineplanejados.com.br'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getTodosArtigos().map((a: any) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const artigo = getArtigoPorSlug(slug) as any
  if (!artigo) return {}

  return {
    title: artigo.title,
    description: artigo.description,
    authors: artigo.autor ? [{ name: artigo.autor }] : [{ name: 'Prime Line Ambientes Planejados' }],
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: artigo.title,
      description: artigo.description,
      type: 'article',
      url: `${siteUrl}/blog/${slug}`,
      publishedTime: artigo.date,
      section: artigo.categoria,
      tags: artigo.tags ?? [],
      locale: 'pt_BR',
      siteName: 'Prime Line Ambientes Planejados',
      ...(artigo.imagem ? { images: [{ url: artigo.imagem, width: 1200, height: 630, alt: artigo.title }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: artigo.title,
      description: artigo.description,
      ...(artigo.imagem ? { images: [artigo.imagem] } : {}),
    },
  }
}

export default async function BlogArtigoPage({ params }: Props) {
  const { slug } = await params
  const artigo = getArtigoPorSlug(slug) as any
  if (!artigo) notFound()

  const relacionados = getArtigosRelacionados(artigo.slug, artigo.categoria, 3) as any[]

  const blogPostingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: artigo.title,
    description: artigo.description,
    datePublished: artigo.date,
    dateModified: artigo.date,
    author: {
      '@type': 'Organization',
      name: artigo.autor ?? 'Prime Line Ambientes Planejados',
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Prime Line Ambientes Planejados',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${slug}`,
    },
    ...(artigo.imagem ? { image: { '@type': 'ImageObject', url: artigo.imagem, width: 1200, height: 630 } } : {}),
    ...(artigo.tags?.length ? { keywords: artigo.tags.join(', ') } : {}),
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: artigo.title, item: `${siteUrl}/blog/${slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <HeaderArtigo
        title={artigo.title}
        description={artigo.description}
        categoria={artigo.categoria}
        date={artigo.date}
        tempoLeitura={artigo.tempoLeitura}
        imagem={artigo.imagem}
      />

      <article className="section bg-brand-50">
        <div className="container max-w-3xl mx-auto">
          <CtaBlogWhatsApp variant="mid" />
          <ConteudoMDX source={artigo.content} />
        </div>
      </article>

      <CtaBlogWhatsApp variant="end" />
      <ArtigosRelacionados artigos={relacionados} />
    </>
  )
}
