import type { Metadata } from 'next'
import { getTodosArtigos } from '@/lib/blog'
import { FiltroBlog } from '@/components/blog/FiltroBlog'
import { SectionTitle } from '@/components/ui/SectionTitle'
import type { Artigo } from '@/types'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://primelineplanejados.com.br'

export const metadata: Metadata = {
  title: 'Blog de Móveis Planejados em BH | Dicas, Tendências e Projetos',
  description:
    'Conteúdo especializado sobre móveis planejados, marcenaria de alto padrão e design de interiores em Belo Horizonte. Dicas de projeto, tendências de 2025 e inspirações para transformar seu ambiente.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog Prime Line | Móveis Planejados em Belo Horizonte',
    description:
      'Dicas, tendências e inspirações sobre marcenaria planejada de alto padrão. Conteúdo especializado para quem quer transformar seus ambientes em BH.',
    type: 'website',
    url: `${siteUrl}/blog`,
    locale: 'pt_BR',
    siteName: 'Prime Line Ambientes Planejados',
    images: [
      {
        url: `${siteUrl}/images/raw/hero-bg.jpg`,
        width: 1200,
        height: 630,
        alt: 'Blog Prime Line — Móveis Planejados em Belo Horizonte',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Prime Line | Móveis Planejados em BH',
    description: 'Dicas, tendências e inspirações sobre marcenaria planejada de alto padrão em Belo Horizonte.',
    images: [`${siteUrl}/images/raw/hero-bg.jpg`],
  },
}

export default function BlogPage() {
  const artigos = getTodosArtigos() as Artigo[]

  return (
    <>
      <section className="section section--dark">
        <div className="container text-center">
          <SectionTitle label="Conteúdo e inspiração" title="Blog Prime Line" center light />
          <p className="font-body font-light text-base text-brand-300 mt-6 max-w-xl mx-auto leading-relaxed">
            Dicas, tendências e inspirações para quem quer transformar seus ambientes com qualidade e estilo.
          </p>
        </div>
      </section>

      <section className="section bg-brand-50">
        <div className="container">
          {artigos.length === 0 ? (
            <p className="font-body text-center text-brand-400 py-20">Em breve novos artigos.</p>
          ) : (
            <FiltroBlog artigos={artigos} />
          )}
        </div>
      </section>
    </>
  )
}
