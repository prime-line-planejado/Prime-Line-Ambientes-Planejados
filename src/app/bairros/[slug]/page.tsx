import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { bairros, type RegiaoTipo } from '@/data/bairros'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { waUrl } from '@/lib/whatsapp'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://primelineplanejados.com.br'

export function generateStaticParams() {
  return bairros.map(b => ({ slug: b.slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const bairro = bairros.find(b => b.slug === slug)
  if (!bairro) return {}
  return {
    title: `Móveis Planejados no ${bairro.nome} | Prime Line BH — Orçamento Grátis`,
    description: `Móveis planejados sob medida no ${bairro.nome}, Belo Horizonte. Visita técnica gratuita, projeto 3D e orçamento sem compromisso. Cozinhas, quartos, closets e salas. Ligue: (31) 9 9815-6666.`,
    alternates: { canonical: `/bairros/${slug}` },
    openGraph: {
      title: `Móveis Planejados no ${bairro.nome} — Prime Line BH`,
      description: `Atendemos o ${bairro.nome} com visita técnica gratuita e projeto 3D. Cozinhas, quartos e closets planejados sob medida em BH.`,
      type: 'website',
      url: `${siteUrl}/bairros/${slug}`,
      locale: 'pt_BR',
      siteName: 'Prime Line Ambientes Planejados',
    },
  }
}

const heroImages = [
  { src: '/images/galeria/cozinha-gourmet-planejada-ilha-cooktop-coifa-teto-inox-bh.jpg',                   alt: 'Cozinha gourmet planejada de alto padrão — Prime Line BH' },
  { src: '/images/galeria/sala-painel-tv-luxo-ripado-champanhe-branco-lacado-cristaleira-preta-led-bh.jpg', alt: 'Sala planejada com ripado e cristaleira — Prime Line BH' },
  { src: '/images/galeria/dormitorio-casal-luxo-cabeceira-acolchoada-guarda-roupa-fullwall-bege-led-bh.jpg', alt: 'Dormitório casal planejado de luxo — Prime Line BH' },
  { src: '/images/galeria/home-office-escritorio-bancada-amadeirada-dupla-armarios-ripado-bh.jpg',          alt: 'Home office planejado com bancada amadeirada — Prime Line BH' },
]

const servicosLinks = [
  { label: 'Cozinha Planejada',  href: '/servicos/cozinha-planejada-belo-horizonte',   desc: 'Projetos sob medida com aproveitamento máximo de espaço e acabamentos premium.' },
  { label: 'Quarto e Closet',    href: '/servicos/quarto-planejado-belo-horizonte',    desc: 'Dormitórios completos com cabeceira, guarda-roupa e criados-mudos integrados.' },
  { label: 'Sala Planejada',     href: '/servicos/sala-planejada-belo-horizonte',      desc: 'Painéis de TV, estantes e cristaleiras que transformam qualquer sala.' },
  { label: 'Banheiro Planejado', href: '/servicos/banheiro-planejado-belo-horizonte',  desc: 'Gabinetes e nichos em MDF resistente à umidade com acabamento refinado.' },
]

const features = [
  { titulo: 'Visita técnica gratuita', descricao: 'Nossa equipe vai até o seu endereço no %nome% sem custo e sem compromisso.' },
  { titulo: 'Projeto 3D incluído',     descricao: 'Veja seus móveis prontos em render fotorrealista antes de assinar o contrato.' },
  { titulo: 'Fabricação própria',      descricao: 'Produzimos internamente com MDF premium e ferragens importadas Blum e Grass.' },
  { titulo: 'Entrega em 45–60 dias',   descricao: 'Prazo médio da aprovação do projeto à montagem técnica completa no local.' },
  { titulo: 'Garantia formal',         descricao: 'Garantia contra defeitos de fabricação e instalação em todos os projetos.' },
  { titulo: 'Zero sujeira na obra',    descricao: 'Instalação técnica com proteção total do ambiente — entregamos tudo limpo.' },
]

function getTexto(regiao: RegiaoTipo, nome: string) {
  if (regiao === 'alto') return {
    p1: `O ${nome} é conhecido por suas residências sofisticadas, apartamentos de alto padrão e moradores exigentes — e é exatamente esse público que a Prime Line atende com excelência. Desenvolvemos projetos de marcenaria planejada que combinam funcionalidade, design refinado e materiais de primeira linha, entregando ambientes que valorizam ainda mais os imóveis do ${nome}.`,
    p2: `Atendemos toda a região do ${nome} e bairros vizinhos com visita técnica gratuita, projeto 3D fotorrealista e orçamento sem compromisso. Nossa equipe vai até o seu imóvel, mede o espaço com precisão, entende suas necessidades e apresenta uma proposta personalizada — do projeto à entrega e montagem com equipe técnica própria.`,
  }
  if (regiao === 'medio-alto') return {
    p1: `O ${nome} tem crescido como um dos bairros mais procurados de Belo Horizonte — com boa infraestrutura, localização estratégica e moradores que valorizam qualidade de vida. A Prime Line atende o ${nome} com projetos de marcenaria planejada sob medida: do quarto à cozinha, do closet ao home office, com o mesmo padrão de execução dos projetos premium.`,
    p2: `Realizamos visita técnica gratuita no ${nome} e apresentamos projeto 3D e orçamento detalhado sem compromisso. Com fabricação própria e prazo médio de 45 a 60 dias, entregamos móveis que se encaixam perfeitamente ao seu espaço e ao seu estilo de vida — com garantia formal em todos os projetos.`,
  }
  return {
    p1: `O ${nome} é um bairro com perfil residencial consolidado e moradores que buscam qualidade e custo-benefício nos seus projetos. A Prime Line atende o ${nome} com móveis planejados sob medida — cozinhas, quartos, closets e salas — com o mesmo cuidado e acabamento dos projetos de alto padrão, dentro de um orçamento bem planejado.`,
    p2: `Fazemos visita técnica gratuita no ${nome}, apresentamos projeto 3D sem custo e elaboramos orçamento detalhado antes de qualquer compromisso. Nossa fabricação própria garante controle de qualidade em cada etapa, com entrega e montagem pela equipe técnica da Prime Line — prazo médio de 45 a 60 dias.`,
  }
}

function getFaq(nome: string, regiao: RegiaoTipo) {
  const precoMin = regiao === 'classe-media' ? 'R$ 1.500' : 'R$ 3.000'
  return [
    {
      pergunta: `A Prime Line faz visita técnica no ${nome}?`,
      resposta: `Sim, realizamos visita técnica gratuita no ${nome} e em toda Belo Horizonte e Região Metropolitana. Nossa equipe vai até o seu imóvel, mede o ambiente com precisão e apresenta projeto 3D e orçamento sem compromisso. Basta entrar em contato pelo WhatsApp para agendar.`,
    },
    {
      pergunta: `Qual o valor de móveis planejados no ${nome}?`,
      resposta: `O investimento varia conforme o tipo de ambiente, metragem e acabamentos escolhidos. Projetos no ${nome} partem de ${precoMin} para peças avulsas como gabinetes e nichos, chegando a valores maiores em projetos completos de cozinha, quarto e sala integrados. Oferecemos orçamento gratuito e detalhado após a visita técnica.`,
    },
    {
      pergunta: `Qual o prazo para entrega de móveis planejados no ${nome}?`,
      resposta: `O prazo médio é de 45 a 60 dias da aprovação do projeto até a montagem técnica completa no seu imóvel no ${nome}. Trabalhamos com fabricação própria, o que nos permite cumprir prazos com previsibilidade e qualidade garantida.`,
    },
    {
      pergunta: `A Prime Line atende condomínios no ${nome}?`,
      resposta: `Sim. Atendemos imóveis residenciais de todos os tipos no ${nome} — apartamentos em condomínios verticais e horizontais, casas e sobrados. Nossa equipe segue as normas de horário e acesso dos condomínios da região, com montagem limpa e organizada.`,
    },
  ]
}

const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.527 5.855L0 24l6.318-1.498A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.007-1.37l-.36-.213-3.75.889.934-3.638-.236-.374A9.762 9.762 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
  </svg>
)

const ChevronIcon = () => (
  <svg viewBox="0 0 6 10" className="w-1.5 h-2.5 text-brand-700" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M1 1l4 4-4 4"/>
  </svg>
)

export default async function BairroPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const bairro = bairros.find(b => b.slug === slug)
  if (!bairro) notFound()

  const idx = bairros.indexOf(bairro)
  const hero = heroImages[idx % heroImages.length]
  const { p1, p2 } = getTexto(bairro.regiao, bairro.nome)
  const faq = getFaq(bairro.nome, bairro.regiao)
  const WA_URL = waUrl('bairros', bairro.nome)

  const relacionados = bairros
    .filter(b => b.regiao === bairro.regiao && b.slug !== slug)
    .slice(0, 5)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/bairros/${slug}`,
    name: 'Prime Line Ambientes Planejados',
    description: `Móveis planejados sob medida no ${bairro.nome}, Belo Horizonte. Cozinhas, quartos, closets e salas com visita técnica gratuita.`,
    url: siteUrl,
    telephone: '+5531998156666',
    image: `${siteUrl}${hero.src}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua David Maurílio Mourão, 113',
      addressLocality: 'Belo Horizonte',
      addressRegion: 'MG',
      postalCode: '30575-340',
      addressCountry: 'BR',
    },
    geo: { '@type': 'GeoCoordinates', latitude: -19.9543, longitude: -43.9777 },
    areaServed: [
      { '@type': 'City', name: 'Belo Horizonte' },
      { '@type': 'Place', name: bairro.nome },
    ],
    hasMap: 'https://www.google.com/maps/place/Prime+Line+Ambientes+Planejados/data=!4m2!3m1!1s0x0:0x15e7086bbff5046b',
    priceRange: '$$',
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',   item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Bairros', item: `${siteUrl}/bairros` },
      { '@type': 'ListItem', position: 3, name: bairro.nome, item: `${siteUrl}/bairros/${slug}` },
    ],
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(({ pergunta, resposta }) => ({
      '@type': 'Question',
      name: pergunta,
      acceptedAnswer: { '@type': 'Answer', text: resposta },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="relative section section--dark overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <Image src={hero.src} alt={hero.alt} fill className="object-cover opacity-15" priority sizes="100vw" />
        </div>
        <div className="relative container text-center">
          <nav aria-label="Breadcrumb" className="flex justify-center mb-8">
            <ol className="flex items-center gap-2 font-body text-xs text-brand-500">
              <li><Link href="/" className="hover:text-gold-light transition-colors">Home</Link></li>
              <li><ChevronIcon /></li>
              <li><Link href="/bairros" className="hover:text-gold-light transition-colors">Bairros</Link></li>
              <li><ChevronIcon /></li>
              <li className="text-brand-400" aria-current="page">{bairro.nome}</li>
            </ol>
          </nav>

          <span className="label-caps text-gold-main mb-4 block">Móveis Planejados — {bairro.nome}</span>
          <h1 className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            Móveis Planejados<br className="hidden md:block" /> no {bairro.nome}
          </h1>
          <p className="font-body font-light text-base md:text-lg text-brand-300 max-w-xl mx-auto leading-relaxed mb-10">
            Visita técnica gratuita no {bairro.nome}. Projeto 3D, fabricação própria e montagem — tudo pela Prime Line.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid inline-flex items-center gap-3"
          >
            <WaIcon />
            Solicitar visita no {bairro.nome}
          </a>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="section section--cream">
        <div className="container">
          <div className="mb-12" data-animate>
            <SectionTitle
              label={`Atendimento no ${bairro.nome}`}
              title={`Por que escolher a Prime Line no ${bairro.nome}?`}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ titulo, descricao }, i) => (
              <div key={titulo} data-animate data-delay={String(Math.min((i % 3) + 1, 3)) as '1' | '2' | '3'} className="p-6 border border-brand-200 bg-white">
                <span className="block gold-line mb-4" />
                <h3 className="font-body font-semibold text-sm text-brand-900 mb-2">{titulo}</h3>
                <p className="font-body font-light text-sm text-brand-500 leading-relaxed">
                  {descricao.replace('%nome%', bairro.nome)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="section section--dark">
        <div className="container">
          <div className="mb-12" data-animate>
            <SectionTitle
              label="O que fazemos"
              title={`Serviços de marcenaria planejada no ${bairro.nome}`}
              light
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {servicosLinks.map(({ label, href, desc }, i) => (
              <Link
                key={href}
                href={href}
                data-animate
                data-delay={String(Math.min((i % 2) + 1, 3)) as '1' | '2' | '3'}
                className="group flex flex-col gap-3 p-8 border border-brand-800 hover:border-gold-dark transition-colors duration-300"
              >
                <span className="block gold-line" />
                <h3 className="label-caps text-brand-100 mt-2 group-hover:text-gold-main transition-colors">{label}</h3>
                <p className="font-body font-light text-sm text-brand-400 leading-relaxed flex-1">{desc}</p>
                <span className="font-body text-xs text-gold-dark group-hover:text-gold-main transition-colors mt-auto">Saiba mais →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Texto SEO */}
      <section className="section section--cream">
        <div className="container max-w-3xl">
          <p className="font-body font-light text-base text-brand-700 leading-relaxed mb-6">{p1}</p>
          <p className="font-body font-light text-base text-brand-700 leading-relaxed">{p2}</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--dark">
        <div className="container max-w-3xl">
          <div className="mb-12 text-center" data-animate>
            <SectionTitle
              label="Dúvidas frequentes"
              title={`Perguntas sobre móveis planejados no ${bairro.nome}`}
              light
              center
            />
          </div>
          <div className="space-y-4">
            {faq.map(({ pergunta, resposta }, i) => (
              <div key={i} className="border border-brand-800 p-6">
                <h3 className="font-body font-semibold text-sm text-brand-100 mb-3">{pergunta}</h3>
                <p className="font-body font-light text-sm text-brand-400 leading-relaxed">{resposta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outros bairros */}
      {relacionados.length > 0 && (
        <section className="section section--cream">
          <div className="container">
            <p className="label-caps text-brand-600 mb-6">Outros bairros atendidos</p>
            <div className="flex flex-wrap gap-3">
              {relacionados.map(b => (
                <Link
                  key={b.slug}
                  href={`/bairros/${b.slug}`}
                  className="font-body text-sm text-brand-700 hover:text-gold-main border border-brand-300 hover:border-gold-main px-4 py-2 transition-colors duration-200"
                >
                  {b.nome}
                </Link>
              ))}
              <Link
                href="/bairros"
                className="font-body text-sm text-brand-500 hover:text-gold-main border border-brand-200 hover:border-gold-main px-4 py-2 transition-colors duration-200"
              >
                Ver todos os bairros →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA final */}
      <section className="section section--dark">
        <div className="container text-center">
          <SectionTitle
            label="Pronto para começar?"
            title={`Solicite sua visita técnica gratuita no ${bairro.nome}`}
            center
            light
          />
          <p className="font-body font-light text-base text-brand-300 mt-6 mb-10 max-w-lg mx-auto leading-relaxed">
            Nossa equipe vai até o seu imóvel no {bairro.nome}, mede o ambiente, apresenta o projeto 3D e o orçamento — sem custo e sem compromisso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-solid inline-flex items-center gap-3 justify-center"
            >
              <WaIcon />
              WhatsApp — Agendar visita
            </a>
            <Link href="/contato" className="btn-outline inline-flex items-center justify-center">
              Formulário de contato
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
