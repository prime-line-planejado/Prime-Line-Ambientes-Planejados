import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { CtaContato } from '@/components/home/CtaContato'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://primelineplanejados.com.br'

export const metadata: Metadata = {
  title: 'Sobre a Prime Line | Marcenaria Planejada de Alto Padrão em Belo Horizonte',
  description:
    'Conheça a Prime Line Ambientes Planejados — 12 anos de experiência em marcenaria planejada de alto padrão em Belo Horizonte. Mais de 500 projetos entregues com exclusividade, qualidade e garantia.',
  alternates: { canonical: '/sobre' },
  openGraph: {
    title: 'Sobre a Prime Line | Marcenaria Planejada em Belo Horizonte',
    description:
      '12 anos criando ambientes planejados exclusivos em Belo Horizonte. Mais de 500 projetos residenciais e corporativos entregues com qualidade, prazo e garantia.',
    type: 'website',
    url: `${siteUrl}/sobre`,
    locale: 'pt_BR',
    siteName: 'Prime Line Ambientes Planejados',
    images: [
      {
        url: `${siteUrl}/images/raw/hero-bg.jpg`,
        width: 1200,
        height: 630,
        alt: 'Prime Line Ambientes Planejados — Marcenaria de Alto Padrão em Belo Horizonte',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre a Prime Line | Marcenaria Planejada em BH',
    description: '12 anos de experiência em móveis planejados de alto padrão em Belo Horizonte.',
    images: [`${siteUrl}/images/raw/hero-bg.jpg`],
  },
}

const aboutPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Sobre a Prime Line Ambientes Planejados',
  description:
    'Empresa especializada em marcenaria planejada de alto padrão em Belo Horizonte, com 12 anos de experiência e mais de 500 projetos entregues.',
  url: `${siteUrl}/sobre`,
  mainEntity: {
    '@type': 'HomeAndConstructionBusiness',
    name: 'Prime Line Ambientes Planejados',
    description:
      'Marcenaria planejada de alto padrão em Belo Horizonte. Projetos exclusivos residenciais e corporativos sob medida.',
    url: siteUrl,
    telephone: '+5531998156666',
    foundingDate: '2014',
    numberOfEmployees: { '@type': 'QuantitativeValue', value: 10 },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Belo Horizonte',
      addressRegion: 'MG',
      addressCountry: 'BR',
    },
    areaServed: { '@type': 'City', name: 'Belo Horizonte' },
    slogan: 'Ambientes que revelam a essência de quem você é',
    knowsAbout: [
      'Marcenaria planejada',
      'Móveis sob medida',
      'Cozinhas planejadas',
      'Closets planejados',
      'Design de interiores',
      'Ambientes corporativos',
    ],
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Sobre', item: `${siteUrl}/sobre` },
  ],
}

const valores = [
  {
    titulo: 'Excelência',
    descricao: 'Cada projeto é tratado com o mesmo cuidado e atenção que dedicamos ao primeiro. Não existe projeto pequeno quando o resultado precisa ser impecável.',
  },
  {
    titulo: 'Exclusividade',
    descricao: 'Não trabalhamos com soluções prontas. Cada ambiente é projetado do zero, pensado para o espaço, o gosto e o ritmo de vida de cada cliente.',
  },
  {
    titulo: 'Transparência',
    descricao: 'Do orçamento à entrega, mantemos o cliente informado em cada etapa. Sem surpresas no prazo, no projeto ou no valor.',
  },
  {
    titulo: 'Comprometimento',
    descricao: 'Cumprimos o que prometemos. O prazo é respeitado, a montagem é limpa e o pós-venda existe de verdade.',
  },
]

export default function SobrePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero sobre */}
      <section className="section section--dark">
        <div className="container max-w-4xl mx-auto">

          {/* Breadcrumb visual */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 font-body text-xs text-brand-500">
              <li><Link href="/" className="hover:text-gold-light transition-colors">Home</Link></li>
              <li aria-hidden="true">
                <svg viewBox="0 0 6 10" className="w-1.5 h-2.5 text-brand-700" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 1l4 4-4 4"/></svg>
              </li>
              <li className="text-brand-400" aria-current="page">Sobre</li>
            </ol>
          </nav>

          <p className="label-caps text-gold-light mb-6">Quem somos</p>
          <h1 className="font-display font-light text-5xl md:text-7xl text-brand-50 leading-tight mb-8">
            Marcenaria Planejada de Alto Padrão<br />
            <em className="text-gold-light not-italic">em Belo Horizonte</em>
          </h1>
          <p className="font-body font-light text-lg text-brand-300 leading-relaxed max-w-2xl">
            A Prime Line nasceu da convicção de que um ambiente bem projetado transforma não apenas o espaço, mas a experiência de viver. Com 12 anos de atuação em Belo Horizonte, reunimos uma equipe apaixonada por marcenaria de alto padrão, dedicada a transformar cada metro quadrado em algo único.
          </p>
        </div>
      </section>

      {/* Nossa história */}
      <section className="section section--cream">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle label="Nossa história" title="De Belo Horizonte para o seu lar" />
              <div className="mt-8 space-y-5 font-body font-light text-base text-brand-700 leading-relaxed">
                <p>
                  Fundada por profissionais com profunda experiência em design de interiores e marcenaria de precisão, a Prime Line se estabeleceu como referência em móveis planejados premium na capital mineira.
                </p>
                <p>
                  Trabalhamos com os melhores fornecedores de MDF, ferragens e acabamentos do país. Cada material é selecionado com rigor para garantir durabilidade, beleza e funcionalidade ao longo dos anos.
                </p>
                <p>
                  Nossa equipe de designers e marceneiros trabalha de forma integrada, do primeiro esboço à instalação final, garantindo que o resultado corresponda exatamente ao que foi projetado.
                </p>
              </div>
              <div className="mt-10 flex gap-6">
                <Link href="/portfolio" className="font-body text-sm text-gold-main hover:text-brand-900 transition-colors">
                  Ver portfólio →
                </Link>
                <Link href="/servicos" className="font-body text-sm text-gold-main hover:text-brand-900 transition-colors">
                  Nossos serviços →
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] bg-brand-200 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80"
                alt="Detalhe de marcenaria planejada de alto padrão executada pela Prime Line em Belo Horizonte"
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section bg-brand-50">
        <div className="container">
          <div className="mb-16 text-center">
            <SectionTitle label="O que nos guia" title="Nossos valores" center />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {valores.map(({ titulo, descricao }) => (
              <div key={titulo} className="p-8 border border-brand-200 hover:border-gold-main transition-colors duration-300">
                <span className="block gold-line mb-6" />
                <h3 className="label-caps text-brand-900 mb-4">{titulo}</h3>
                <p className="font-body font-light text-sm text-brand-600 leading-relaxed">{descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="section section--dark">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { numero: '500+', label: 'Projetos entregues' },
              { numero: '12', label: 'Anos de experiência' },
              { numero: '98%', label: 'Clientes satisfeitos' },
              { numero: 'BH', label: 'e região metropolitana' },
            ].map(({ numero, label }) => (
              <div key={label}>
                <p className="font-display font-light text-5xl text-gold-light mb-3">{numero}</p>
                <p className="label-caps text-brand-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaContato />
    </>
  )
}
