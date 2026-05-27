import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { CtaContato } from '@/components/home/CtaContato'
import { ContadorAnimado } from '@/components/ui/ContadorAnimado'
import { Depoimentos } from '@/components/home/Depoimentos'

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

// Substituir foto (src) e dados quando as fotos reais da equipe estiverem disponíveis
const equipe = [
  {
    nome: 'Carlos Eduardo Mourão',
    cargo: 'Fundador & Diretor',
    bio: 'Mais de 15 anos de experiência em marcenaria planejada de alto padrão. Fundou a Prime Line com a missão de transformar ambientes com exclusividade e qualidade.',
    foto: null as string | null,
  },
  {
    nome: 'Patrícia Drummond',
    cargo: 'Coordenadora de Projetos',
    bio: 'Especialista em design de interiores com foco em funcionalidade e estética. Responsável por transformar cada necessidade do cliente em projetos 3D detalhados.',
    foto: null as string | null,
  },
  {
    nome: 'André Figueiredo',
    cargo: 'Responsável Técnico',
    bio: 'Marceneiro master com 12 anos na Prime Line. Garante que cada peça fabricada atenda aos padrões rigorosos de qualidade e precisão milimétrica da empresa.',
    foto: null as string | null,
  },
]

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
            Marcenaria Planejada de Alto Padrão{' '}<br />
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
                src="/images/sobre/nossa-historia.jpg"
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

      {/* Nossa estrutura — substituir imagens por fotos reais do showroom/fábrica/equipe */}
      <section className="section section--cream">
        <div className="container">
          <div className="mb-16 text-center" data-animate>
            <SectionTitle label="Onde tudo acontece" title="Nossa estrutura em BH" center />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {([
              {
                src: '/images/galeria/cozinha-gourmet-planejada-ilha-cooktop-coifa-teto-inox-bh.jpg',
                alt: 'Showroom Prime Line — Belo Horizonte, MG',
                legenda: 'Showroom',
                desc: 'Rua David Maurílio Mourão, 113 — Palmeiras, BH',
              },
              {
                src: '/images/galeria/guarda-roupa-deslizante-champanhe-interior-branco-nichos-gavetas-bh.jpg',
                alt: 'Fábrica Prime Line — produção de móveis planejados em Belo Horizonte',
                legenda: 'Fábrica',
                desc: 'Produção própria com materiais e ferragens premium',
              },
              {
                src: '/images/galeria/home-office-escritorio-bancada-amadeirada-dupla-armarios-ripado-bh.jpg',
                alt: 'Equipe Prime Line em ação — montagem de móveis planejados em BH',
                legenda: 'Equipe em ação',
                desc: 'Instalação técnica com precisão e zero sujeira',
              },
            ] as const).map(({ src, alt, legenda, desc }, i) => (
              <div key={legenda} data-animate data-delay={String(i + 1) as '1'|'2'|'3'} className="group overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-200">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="pt-4 pb-2">
                  <p className="label-caps text-gold-main mb-1">{legenda}</p>
                  <p className="font-body font-light text-sm text-brand-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="section section--dark">
        <div className="container">
          <div className="mb-16 text-center">
            <SectionTitle label="As pessoas por trás dos projetos" title="Nossa equipe" center light />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            {equipe.map(({ nome, cargo, bio, foto }) => {
              const iniciais = nome.split(' ').filter((_, i, a) => i === 0 || i === a.length - 1).map(p => p[0]).join('')
              return (
                <div key={nome} className="flex flex-col items-center text-center" data-animate>
                  {/* Foto ou placeholder */}
                  <div className="relative w-40 h-48 mb-6 overflow-hidden border border-brand-700 bg-brand-800 flex-shrink-0">
                    {foto ? (
                      <Image
                        src={foto}
                        alt={`${nome} — ${cargo}, Prime Line Ambientes Planejados`}
                        fill
                        sizes="160px"
                        className="object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="font-display font-light text-4xl text-brand-600 select-none">{iniciais}</span>
                      </div>
                    )}
                  </div>
                  <h3 className="font-display font-light text-xl text-brand-50 mb-1">{nome}</h3>
                  <p className="label-caps text-gold-main mb-4">{cargo}</p>
                  <p className="font-body font-light text-sm text-brand-400 leading-relaxed max-w-xs">{bio}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="section section--dark border-t border-brand-800">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {([
              { valor: 500,  sufixo: '+',  texto: null, label: 'Projetos entregues'     },
              { valor: 12,   sufixo: '',   texto: null, label: 'Anos de experiência'    },
              { valor: 98,   sufixo: '%',  texto: null, label: 'Clientes satisfeitos'   },
              { valor: null, sufixo: '',   texto: 'BH', label: 'e região metropolitana' },
            ] as const).map(({ valor, sufixo, texto, label }, i) => (
              <div key={label} data-animate data-delay={String(Math.min(i + 1, 4)) as '1'|'2'|'3'|'4'}>
                <p className="font-display font-light text-5xl text-gold-light mb-3">
                  {valor !== null
                    ? <ContadorAnimado valor={valor} sufixo={sufixo} />
                    : texto
                  }
                </p>
                <p className="label-caps text-brand-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Depoimentos />

      <CtaContato origem="contato" />
    </>
  )
}
