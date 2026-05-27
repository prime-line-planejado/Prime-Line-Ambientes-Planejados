import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { GaleriaGrid } from '@/components/galeria/GaleriaGrid'
import { galeria } from '@/data/galeria'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://primelineplanejados.com.br'

export const metadata: Metadata = {
  title: 'Galeria de Projetos | Móveis Planejados em BH — Prime Line',
  description:
    'Galeria completa com mais de 80 projetos reais de móveis planejados em Belo Horizonte. Cozinhas, dormitórios, closets, home office, banheiros e salas sob medida. Veja nossos trabalhos.',
  alternates: { canonical: '/galeria' },
  openGraph: {
    title: 'Galeria | Projetos de Móveis Planejados em Belo Horizonte — Prime Line',
    description:
      'Mais de 80 projetos reais: cozinhas gourmet, dormitórios de luxo, closets, home offices e banheiros planejados em BH. Inspire-se!',
    type: 'website',
    url: `${siteUrl}/galeria`,
    locale: 'pt_BR',
    siteName: 'Prime Line Ambientes Planejados',
    images: [{ url: `${siteUrl}/images/raw/hero-bg.jpg`, width: 1200, height: 630, alt: 'Galeria Prime Line — Projetos de Móveis Planejados em Belo Horizonte' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Galeria de Projetos | Prime Line BH',
    description: 'Mais de 80 projetos reais de móveis planejados em Belo Horizonte.',
    images: [`${siteUrl}/images/raw/hero-bg.jpg`],
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Galeria', item: `${siteUrl}/galeria` },
  ],
}

const imageGalleryJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'Galeria de Projetos — Prime Line Ambientes Planejados',
  description: 'Galeria de projetos reais de móveis planejados em Belo Horizonte.',
  url: `${siteUrl}/galeria`,
  numberOfItems: galeria.length,
  author: {
    '@type': 'HomeAndConstructionBusiness',
    name: 'Prime Line Ambientes Planejados',
    url: siteUrl,
  },
}

export default function GaleriaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGalleryJsonLd) }} />

      {/* Header */}
      <section className="section section--dark">
        <div className="container text-center">
          <nav aria-label="Breadcrumb" className="flex justify-center mb-8">
            <ol className="flex items-center gap-2 font-body text-xs text-brand-500">
              <li><Link href="/" className="hover:text-gold-light transition-colors">Home</Link></li>
              <li aria-hidden="true">
                <svg viewBox="0 0 6 10" className="w-1.5 h-2.5 text-brand-700" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 1l4 4-4 4"/></svg>
              </li>
              <li className="text-brand-400" aria-current="page">Galeria</li>
            </ol>
          </nav>

          <SectionTitle
            as="h1"
            label="Nossos projetos"
            title="Galeria de Móveis Planejados em BH"
            center
            light
          />
          <p className="font-body font-light text-base text-brand-300 mt-6 max-w-xl mx-auto leading-relaxed">
            {galeria.length} projetos reais executados em Belo Horizonte — filtre por ambiente e inspire-se para o seu.
          </p>
        </div>
      </section>

      {/* Galeria */}
      <section className="section section--cream">
        <div className="container">
          <GaleriaGrid />
        </div>
      </section>
    </>
  )
}
