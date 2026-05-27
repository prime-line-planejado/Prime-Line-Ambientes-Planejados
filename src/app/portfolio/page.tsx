import type { Metadata } from 'next'
import Link from 'next/link'
import { FiltroPortfolio } from '@/components/portfolio/FiltroPortfolio'
import { GaleriaGrid } from '@/components/galeria/GaleriaGrid'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { CtaContato } from '@/components/home/CtaContato'
import { projetos } from '@/data/projetos'
import { galeria } from '@/data/galeria'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://primelineplanejados.com.br'

export const metadata: Metadata = {
  title: 'Portfólio e Galeria | Móveis Planejados em BH — Prime Line',
  description:
    'Veja projetos completos e galeria com mais de 80 fotos de móveis planejados em Belo Horizonte. Cozinhas, closets, dormitórios, home offices e ambientes corporativos sob medida.',
  alternates: { canonical: '/portfolio' },
  openGraph: {
    title: 'Portfólio de Móveis Planejados em BH | Prime Line Ambientes Planejados',
    description:
      'Projetos exclusivos de marcenaria planejada de alto padrão em Belo Horizonte. Cozinhas, closets, ambientes corporativos e galeria completa com mais de 80 fotos.',
    type: 'website',
    url: `${siteUrl}/portfolio`,
    locale: 'pt_BR',
    siteName: 'Prime Line Ambientes Planejados',
    images: [
      {
        url: `${siteUrl}/images/raw/hero-bg.jpg`,
        width: 1200,
        height: 630,
        alt: 'Portfólio de Móveis Planejados em Belo Horizonte — Prime Line',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfólio e Galeria | Prime Line BH',
    description: 'Projetos executados e galeria de móveis planejados de alto padrão em Belo Horizonte.',
    images: [`${siteUrl}/images/raw/hero-bg.jpg`],
  },
}

const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Portfólio de Projetos — Prime Line Ambientes Planejados',
  description: 'Projetos de móveis planejados residenciais e corporativos executados em Belo Horizonte.',
  itemListElement: projetos.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'CreativeWork',
      name: p.titulo,
      description: p.descricao,
      image: `${siteUrl}${p.imagem}`,
      locationCreated: {
        '@type': 'Place',
        name: p.local ?? 'Belo Horizonte, MG',
      },
      creator: {
        '@type': 'LocalBusiness',
        name: 'Prime Line Ambientes Planejados',
        url: siteUrl,
      },
    },
  })),
}

const imageGalleryJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'Galeria de Projetos — Prime Line Ambientes Planejados',
  description: 'Galeria de projetos reais de móveis planejados em Belo Horizonte.',
  url: `${siteUrl}/portfolio`,
  numberOfItems: galeria.length,
  author: {
    '@type': 'HomeAndConstructionBusiness',
    name: 'Prime Line Ambientes Planejados',
    url: siteUrl,
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Portfólio', item: `${siteUrl}/portfolio` },
  ],
}

export default async function PortfolioPage({
  searchParams,
}: {
  searchParams: Promise<{ aba?: string }>
}) {
  const { aba } = await searchParams
  const abaAtiva = aba === 'galeria' ? 'galeria' : 'projetos'

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGalleryJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header da página */}
      <section className="section section--dark pb-16">
        <div className="container text-center">

          {/* Breadcrumb visual */}
          <nav aria-label="Breadcrumb" className="flex justify-center mb-8">
            <ol className="flex items-center gap-2 font-body text-xs text-brand-500">
              <li><Link href="/" className="hover:text-gold-light transition-colors">Home</Link></li>
              <li aria-hidden="true">
                <svg viewBox="0 0 6 10" className="w-1.5 h-2.5 text-brand-700" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 1l4 4-4 4"/></svg>
              </li>
              <li className="text-brand-400" aria-current="page">Portfólio</li>
            </ol>
          </nav>

          <SectionTitle
            as="h1"
            label="Nosso trabalho"
            title="Portfólio de Móveis Planejados em BH"
            center
            light
          />
          <p className="font-body font-light text-base text-brand-300 mt-6 max-w-xl mx-auto leading-relaxed">
            {projetos.length} projetos completos e {galeria.length} fotos — cada ambiente desenvolvido sob medida em Belo Horizonte.
          </p>
        </div>
      </section>

      {/* Abas + conteúdo */}
      <section className="section bg-brand-50">
        <div className="container">

          {/* Tab nav */}
          <div className="flex gap-0 mb-12 border-b border-brand-200">
            <Link
              href="/portfolio"
              className={`px-6 py-3 font-body text-sm transition-colors duration-200 border-b-2 -mb-px ${
                abaAtiva === 'projetos'
                  ? 'border-gold-main text-brand-900 font-semibold'
                  : 'border-transparent text-brand-500 hover:text-brand-800'
              }`}
            >
              Projetos
              <span className={`ml-2 font-body font-light text-xs ${abaAtiva === 'projetos' ? 'text-brand-500' : 'text-brand-400'}`}>
                ({projetos.length})
              </span>
            </Link>
            <Link
              href="/portfolio?aba=galeria"
              className={`px-6 py-3 font-body text-sm transition-colors duration-200 border-b-2 -mb-px ${
                abaAtiva === 'galeria'
                  ? 'border-gold-main text-brand-900 font-semibold'
                  : 'border-transparent text-brand-500 hover:text-brand-800'
              }`}
            >
              Galeria de Fotos
              <span className={`ml-2 font-body font-light text-xs ${abaAtiva === 'galeria' ? 'text-brand-500' : 'text-brand-400'}`}>
                ({galeria.length})
              </span>
            </Link>
          </div>

          {abaAtiva === 'projetos' ? <FiltroPortfolio /> : <GaleriaGrid />}

        </div>
      </section>

      <CtaContato origem="portfolio" />
    </>
  )
}
