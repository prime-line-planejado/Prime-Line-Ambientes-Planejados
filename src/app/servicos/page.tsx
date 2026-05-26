import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { CtaContato } from '@/components/home/CtaContato'
import { servicosResidenciais, servicosCorporativos, etapasProcesso } from '@/data/servicos'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://primelineplanejados.com.br'

export const metadata: Metadata = {
  title: 'Serviços de Móveis Planejados em Belo Horizonte | Cozinhas, Closets e Corporativo',
  description:
    'Cozinhas planejadas, closets, dormitórios, home offices, escritórios e salas corporativas sob medida em Belo Horizonte. Projeto exclusivo, materiais premium e garantia formal. Visita técnica gratuita.',
  alternates: { canonical: '/servicos' },
  openGraph: {
    title: 'Serviços de Móveis Planejados em BH | Prime Line Ambientes Planejados',
    description:
      'Do projeto ao acabamento — cozinhas, closets, dormitórios e ambientes corporativos planejados sob medida em Belo Horizonte. Visita técnica gratuita e orçamento sem compromisso.',
    type: 'website',
    url: `${siteUrl}/servicos`,
    locale: 'pt_BR',
    siteName: 'Prime Line Ambientes Planejados',
    images: [
      {
        url: `${siteUrl}/images/raw/hero-bg.jpg`,
        width: 1200,
        height: 630,
        alt: 'Serviços de Móveis Planejados em Belo Horizonte — Prime Line',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serviços de Móveis Planejados em BH | Prime Line',
    description: 'Cozinhas, closets, dormitórios e ambientes corporativos sob medida em Belo Horizonte.',
    images: [`${siteUrl}/images/raw/hero-bg.jpg`],
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Serviços de Móveis Planejados — Prime Line Ambientes Planejados',
  itemListElement: [
    ...servicosResidenciais.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: s.titulo,
        description: s.descricao,
        provider: {
          '@type': 'LocalBusiness',
          name: 'Prime Line Ambientes Planejados',
          url: 'https://primelineplanejados.com.br',
          areaServed: { '@type': 'City', name: 'Belo Horizonte' },
        },
      },
    })),
    ...servicosCorporativos.map((s, i) => ({
      '@type': 'ListItem',
      position: servicosResidenciais.length + i + 1,
      item: {
        '@type': 'Service',
        name: s.titulo,
        description: s.descricao,
        provider: {
          '@type': 'LocalBusiness',
          name: 'Prime Line Ambientes Planejados',
          url: 'https://primelineplanejados.com.br',
          areaServed: { '@type': 'City', name: 'Belo Horizonte' },
        },
      },
    })),
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Serviços', item: `${siteUrl}/servicos` },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quais serviços de móveis planejados a Prime Line oferece em BH?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oferecemos cozinhas planejadas, quartos e closets, salas e home offices, banheiros, escritórios executivos, recepções corporativas, estações de trabalho e salas de reunião. Todos os projetos são sob medida em Belo Horizonte.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como funciona o processo de projeto da Prime Line?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O processo tem 5 etapas: visita técnica gratuita, desenvolvimento do projeto 3D, aprovação com ajustes, produção com materiais premium e entrega com montagem técnica. Do primeiro contato à entrega, nossa equipe acompanha cada detalhe.',
      },
    },
    {
      '@type': 'Question',
      name: 'A visita técnica tem algum custo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. A visita técnica é totalmente gratuita e sem compromisso. Nosso consultor visita o seu espaço, tira as medidas e apresenta as possibilidades de projeto.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual é o prazo de entrega dos móveis planejados?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O prazo médio é de 45 a 60 dias após a aprovação do projeto, incluindo fabricação, transporte e montagem técnica no local.',
      },
    },
  ],
}

export default function ServicosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Header */}
      <section className="section section--dark">
        <div className="container text-center">
          {/* Breadcrumb — item 4 */}
          <nav aria-label="Breadcrumb" className="flex justify-center mb-8">
            <ol className="flex items-center gap-2 font-body text-xs text-brand-500">
              <li><Link href="/" className="hover:text-gold-light transition-colors">Home</Link></li>
              <li aria-hidden="true">
                <svg viewBox="0 0 6 10" className="w-1.5 h-2.5 text-brand-700" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 1l4 4-4 4"/></svg>
              </li>
              <li className="text-brand-400" aria-current="page">Serviços</li>
            </ol>
          </nav>
          <SectionTitle label="O que fazemos" title="Serviços de Móveis Planejados em BH" center light />
          <p className="font-body font-light text-base text-brand-300 mt-6 max-w-xl mx-auto leading-relaxed">
            Da cozinha ao escritório — criamos ambientes planejados completos, com projeto exclusivo e materiais de primeira linha.
          </p>
        </div>
      </section>

      {/* Residencial */}
      <section className="section section--cream">
        <div className="container">
          <div className="mb-16">
            <SectionTitle label="Para o seu lar" title="Residencial" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {servicosResidenciais.map(({ id, titulo, descricao }) => (
              <div key={id} className="flex flex-col gap-4 p-8 bg-brand-50 border border-brand-200 hover:border-gold-main transition-colors duration-300">
                <span className="block gold-line" />
                <h3 className="label-caps text-brand-900 mt-2">{titulo}</h3>
                <p className="font-body font-light text-sm text-brand-600 leading-relaxed">{descricao}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 font-body font-light text-sm text-brand-500">
            Veja projetos residenciais executados no nosso{' '}
            <Link href="/portfolio" className="text-gold-main hover:text-brand-900 transition-colors">portfólio →</Link>
          </p>
        </div>
      </section>

      {/* Corporativo */}
      <section className="section bg-brand-50">
        <div className="container">
          <div className="mb-16">
            <SectionTitle label="Para o seu negócio" title="Corporativo" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {servicosCorporativos.map(({ id, titulo, descricao }) => (
              <div key={id} className="flex flex-col gap-4 p-8 bg-brand-100 border border-brand-200 hover:border-gold-main transition-colors duration-300">
                <span className="block gold-line" />
                <h3 className="label-caps text-brand-900 mt-2">{titulo}</h3>
                <p className="font-body font-light text-sm text-brand-600 leading-relaxed">{descricao}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 font-body font-light text-sm text-brand-500">
            Saiba mais sobre materiais no nosso{' '}
            <Link href="/blog/cozinha-planejada-mdf-ou-mdp" className="text-gold-main hover:text-brand-900 transition-colors">guia de MDF e MDP →</Link>
          </p>
        </div>
      </section>

      {/* Processo */}
      <section className="section section--dark">
        <div className="container">
          <div className="mb-16 text-center">
            <SectionTitle label="Como trabalhamos" title="Nosso processo" center light />
          </div>
          <div className="max-w-3xl mx-auto">
            {etapasProcesso.map(({ numero, titulo, descricao }, i) => (
              <div key={numero} className="flex gap-8 pb-12 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 flex items-center justify-center border border-gold-main text-gold-light font-display font-light text-lg flex-shrink-0">
                    {numero}
                  </div>
                  {i < etapasProcesso.length - 1 && (
                    <div className="w-px flex-1 bg-brand-800 mt-3" />
                  )}
                </div>
                <div className="pb-2">
                  <h3 className="label-caps text-gold-light mb-3">{titulo}</h3>
                  <p className="font-body font-light text-sm text-brand-300 leading-relaxed">{descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--cream">
        <div className="container max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <SectionTitle label="Tire suas dúvidas" title="Perguntas Frequentes" center />
          </div>
          <div className="divide-y divide-brand-200">
            {[
              {
                q: 'Quais serviços de móveis planejados vocês oferecem em BH?',
                r: 'Oferecemos cozinhas planejadas, quartos e closets, salas e home offices, banheiros, escritórios executivos, recepções corporativas, estações de trabalho e salas de reunião. Todos os projetos são sob medida em Belo Horizonte.',
              },
              {
                q: 'Como funciona o processo de projeto?',
                r: 'São 5 etapas: visita técnica gratuita, desenvolvimento do projeto 3D, aprovação com ajustes, produção com materiais premium e entrega com montagem técnica. Nossa equipe acompanha cada detalhe do início ao fim.',
              },
              {
                q: 'A visita técnica tem algum custo?',
                r: 'Não. A visita técnica é totalmente gratuita e sem compromisso. Nosso consultor visita o seu espaço, tira as medidas e apresenta as possibilidades de projeto.',
              },
              {
                q: 'Qual é o prazo de entrega dos móveis planejados?',
                r: 'O prazo médio é de 45 a 60 dias após a aprovação do projeto, incluindo fabricação, transporte e montagem técnica no local.',
              },
            ].map(({ q, r }) => (
              <div key={q} className="py-6">
                <h3 className="font-body font-light text-base text-brand-900 mb-3">{q}</h3>
                <p className="font-body font-light text-sm text-brand-600 leading-relaxed">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaContato />
    </>
  )
}
