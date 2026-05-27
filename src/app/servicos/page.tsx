import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { CtaContato } from '@/components/home/CtaContato'
import { ServicosGrid } from '@/components/servicos/ServicosGrid'
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

const priceRanges: Record<string, string> = {
  sr1: 'R$6.000 – R$60.000',
  sr2: 'R$4.000 – R$30.000',
  sr3: 'R$3.000 – R$25.000',
  sr4: 'R$1.500 – R$12.000',
  sc1: 'R$5.000 – R$40.000',
  sc2: 'R$4.000 – R$35.000',
  sc3: 'R$2.500 – R$20.000',
  sc4: 'R$4.000 – R$30.000',
}

const makeServiceItem = (s: { id: string; titulo: string; descricao: string }, position: number) => ({
  '@type': 'ListItem',
  position,
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
    offers: {
      '@type': 'Offer',
      priceCurrency: 'BRL',
      priceRange: priceRanges[s.id] ?? 'Sob consulta',
      availability: 'https://schema.org/InStock',
      areaServed: { '@type': 'City', name: 'Belo Horizonte' },
    },
  },
})

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Serviços de Móveis Planejados — Prime Line Ambientes Planejados',
  itemListElement: [
    ...servicosResidenciais.map((s, i) => makeServiceItem(s, i + 1)),
    ...servicosCorporativos.map((s, i) => makeServiceItem(s, servicosResidenciais.length + i + 1)),
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
    {
      '@type': 'Question',
      name: 'Vocês atendem qual região de Belo Horizonte?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Atendemos toda a cidade de Belo Horizonte e a Região Metropolitana, incluindo bairros como Savassi, Belvedere, Lourdes, Funcionários, Buritis, Sion, Carmo, Mangabeiras, Alphaville Lagoa dos Ingleses, Contagem, Nova Lima e Betim.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quais materiais vocês utilizam na fabricação?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trabalhamos exclusivamente com painéis MDF de alta resistência, com acabamentos em laca, fórmica, madeirado e espelhado. Utilizamos ferragens importadas de marcas como Blum e Grass, vidros, mármores e aços inox conforme o projeto.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como solicitar um orçamento gratuito?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Entre em contato pelo WhatsApp (31) 9 9815-6666 ou preencha o formulário na página de Contato. Agendaremos uma visita técnica gratuita no seu imóvel para medir os espaços e apresentar uma proposta personalizada.',
      },
    },
    {
      '@type': 'Question',
      name: 'Vocês oferecem garantia nos projetos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. Todos os projetos têm garantia formal contra defeitos de fabricação e instalação. Trabalhamos com materiais e ferragens de marcas reconhecidas, o que assegura durabilidade e qualidade ao longo dos anos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual o valor médio de uma cozinha planejada em BH?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O investimento em cozinha planejada varia conforme metragem, materiais e acabamentos. Projetos de cozinhas menores partem de R$ 6.000, enquanto cozinhas gourmet com ilha e acabamentos premium chegam a R$ 60.000 ou mais. Oferecemos orçamento detalhado e gratuito após a visita técnica.',
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
          <SectionTitle as="h1" label="O que fazemos" title="Serviços de Móveis Planejados em BH" center light />
          <p className="font-body font-light text-base text-brand-300 mt-6 max-w-xl mx-auto leading-relaxed">
            Da cozinha ao escritório — criamos ambientes planejados completos, com projeto exclusivo e materiais de primeira linha.
          </p>
        </div>
      </section>

      <ServicosGrid />

      {/* Processo */}
      <section className="section section--dark">
        <div className="container">
          <div className="mb-16 text-center">
            <SectionTitle label="Como trabalhamos" title="Nosso processo" center light />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {etapasProcesso.map(({ numero, titulo, descricao, imagem, altText }, i) => (
              <div key={numero} data-animate data-delay={String(Math.min(i + 1, 4)) as '1'|'2'|'3'|'4'} className="flex flex-col border border-brand-800 hover:border-gold-dark transition-colors duration-300">
                {/* Imagem */}
                {imagem && (
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={imagem}
                      alt={altText ?? titulo}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Número sobreposto */}
                    <div className="absolute top-3 left-3 w-8 h-8 flex items-center justify-center bg-brand-950/80 backdrop-blur-sm border border-gold-main">
                      <span className="font-display font-light text-sm text-gold-light">{numero}</span>
                    </div>
                  </div>
                )}
                {/* Texto */}
                <div className="flex flex-col gap-2 p-5 flex-1">
                  <h3 className="label-caps text-gold-light">{titulo}</h3>
                  <p className="font-body font-light text-xs text-brand-400 leading-relaxed">{descricao}</p>
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
              {
                q: 'Vocês atendem qual região de Belo Horizonte?',
                r: 'Atendemos toda a cidade de Belo Horizonte e a Região Metropolitana, incluindo Savassi, Belvedere, Lourdes, Funcionários, Buritis, Sion, Carmo, Mangabeiras, Alphaville Lagoa dos Ingleses, Contagem, Nova Lima e Betim.',
              },
              {
                q: 'Quais materiais vocês utilizam na fabricação?',
                r: 'Trabalhamos exclusivamente com painéis MDF de alta resistência, com acabamentos em laca, fórmica, madeirado e espelhado. Utilizamos ferragens importadas de marcas como Blum e Grass, vidros, mármores e aços inox conforme o projeto.',
              },
              {
                q: 'Como solicitar um orçamento gratuito?',
                r: 'Entre em contato pelo WhatsApp (31) 9 9815-6666 ou preencha o formulário na página de Contato. Agendaremos uma visita técnica gratuita para medir os espaços e apresentar uma proposta personalizada.',
              },
              {
                q: 'Vocês oferecem garantia nos projetos?',
                r: 'Sim. Todos os projetos têm garantia formal contra defeitos de fabricação e instalação, com materiais e ferragens de marcas reconhecidas no mercado.',
              },
              {
                q: 'Qual o valor médio de uma cozinha planejada em BH?',
                r: 'Projetos de cozinhas menores partem de R$ 6.000, enquanto cozinhas gourmet com ilha e acabamentos premium chegam a R$ 60.000 ou mais. Oferecemos orçamento detalhado e gratuito após a visita técnica.',
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

      <CtaContato origem="servicos" />
    </>
  )
}
