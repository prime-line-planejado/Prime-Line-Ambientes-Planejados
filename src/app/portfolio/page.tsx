import type { Metadata } from 'next'
import Link from 'next/link'
import { FiltroPortfolio } from '@/components/portfolio/FiltroPortfolio'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { CtaContato } from '@/components/home/CtaContato'
import { projetos } from '@/data/projetos'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://primelineplanejados.com.br'

export const metadata: Metadata = {
  title: 'Portfólio de Móveis Planejados em Belo Horizonte | Cozinhas, Closets e Corporativo',
  description:
    'Veja projetos executados de móveis planejados residenciais e corporativos em Belo Horizonte. Cozinhas, closets, suítes, home offices, escritórios e recepções sob medida.',
  alternates: { canonical: '/portfolio' },
  openGraph: {
    title: 'Portfólio de Móveis Planejados em BH | Prime Line Ambientes Planejados',
    description:
      'Projetos exclusivos de marcenaria planejada de alto padrão em Belo Horizonte. Cozinhas, closets, ambientes corporativos e muito mais — cada ambiente sob medida.',
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
    title: 'Portfólio de Móveis Planejados em BH | Prime Line',
    description: 'Projetos executados de marcenaria planejada de alto padrão em Belo Horizonte.',
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

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Portfólio', item: `${siteUrl}/portfolio` },
  ],
}

export default function PortfolioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
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
            Cada projeto é único — desenvolvido sob medida para o espaço e estilo de vida de cada cliente em Belo Horizonte.
          </p>
        </div>
      </section>

      {/* Grid com filtro */}
      <section className="section bg-brand-50">
        <div className="container">
          <FiltroPortfolio />
        </div>
      </section>

      <CtaContato origem="portfolio" />
    </>
  )
}
