import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { cidades, type Cidade } from '@/data/cidades'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { waUrl } from '@/lib/whatsapp'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://primelineplanejados.com.br'

export function generateStaticParams() {
  return cidades.map(c => ({ slug: c.slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const cidade = cidades.find(c => c.slug === slug)
  if (!cidade) return {}
  return {
    title: `Móveis Planejados em ${cidade.nome} | Prime Line — Orçamento Grátis`,
    description: `Móveis planejados sob medida em ${cidade.nome} e região. Visita técnica gratuita, projeto 3D e orçamento sem compromisso. Cozinhas, quartos, closets e salas. Ligue: (31) 9 9815-6666.`,
    alternates: { canonical: `/cidades/${slug}` },
    openGraph: {
      title: `Móveis Planejados em ${cidade.nome} — Prime Line`,
      description: `Atendemos ${cidade.nome} com visita técnica gratuita e projeto 3D. Cozinhas, quartos e closets planejados sob medida na Grande BH.`,
      type: 'website',
      url: `${siteUrl}/cidades/${slug}`,
      locale: 'pt_BR',
      siteName: 'Prime Line Ambientes Planejados',
    },
  }
}

const heroImages = [
  { src: '/images/galeria/cozinha-gourmet-planejada-ilha-cooktop-coifa-teto-inox-bh.jpg',                   alt: 'Cozinha gourmet planejada de alto padrão — Prime Line' },
  { src: '/images/galeria/sala-painel-tv-luxo-ripado-champanhe-branco-lacado-cristaleira-preta-led-bh.jpg', alt: 'Sala planejada com ripado e cristaleira — Prime Line' },
  { src: '/images/galeria/dormitorio-casal-luxo-cabeceira-acolchoada-guarda-roupa-fullwall-bege-led-bh.jpg', alt: 'Dormitório casal planejado de luxo — Prime Line' },
  { src: '/images/galeria/home-office-escritorio-bancada-amadeirada-dupla-armarios-ripado-bh.jpg',          alt: 'Home office planejado com bancada amadeirada — Prime Line' },
]

const servicosLinks = [
  { label: 'Cozinha Planejada',  href: '/servicos/cozinha-planejada-belo-horizonte',   desc: 'Projetos sob medida com aproveitamento máximo de espaço e acabamentos premium.' },
  { label: 'Quarto e Closet',    href: '/servicos/quarto-planejado-belo-horizonte',    desc: 'Dormitórios completos com cabeceira, guarda-roupa e criados-mudos integrados.' },
  { label: 'Sala Planejada',     href: '/servicos/sala-planejada-belo-horizonte',      desc: 'Painéis de TV, estantes e cristaleiras que transformam qualquer sala.' },
  { label: 'Banheiro Planejado', href: '/servicos/banheiro-planejado-belo-horizonte',  desc: 'Gabinetes e nichos em MDF resistente à umidade com acabamento refinado.' },
]

const features = [
  { titulo: 'Visita técnica gratuita', descricao: 'Nossa equipe vai até o seu endereço em %nome% sem custo e sem compromisso.' },
  { titulo: 'Projeto 3D incluído',     descricao: 'Veja seus móveis prontos em render fotorrealista antes de assinar o contrato.' },
  { titulo: 'Fabricação própria',      descricao: 'Produzimos internamente com MDF premium e ferragens importadas Blum e Grass.' },
  { titulo: 'Entrega em 45–60 dias',   descricao: 'Prazo médio da aprovação do projeto à montagem técnica completa no local.' },
  { titulo: 'Garantia formal',         descricao: 'Garantia contra defeitos de fabricação e instalação em todos os projetos.' },
  { titulo: 'Atende a Grande BH',      descricao: 'Belo Horizonte e Região Metropolitana — com a mesma qualidade em toda a região.' },
]

function listaPorExtenso(itens: string[]) {
  if (itens.length === 0) return ''
  if (itens.length === 1) return itens[0]
  return `${itens.slice(0, -1).join(', ')} e ${itens[itens.length - 1]}`
}

function getTexto(cidade: Cidade) {
  const areas = listaPorExtenso(cidade.areas)
  const p1 = cidade.intro // parágrafo único por cidade
  let p2: string
  if (cidade.tier === 'premium') {
    p2 = `Em ${cidade.nome}, a Prime Line entrega marcenaria planejada de altíssimo padrão — cozinhas gourmet, closets amplos, home offices e ambientes integrados — com fabricação própria, ferragens importadas e projeto 3D fotorrealista. Atendemos ${areas} e toda a cidade com visita técnica gratuita e montagem por equipe técnica própria.`
  } else if (cidade.tier === 'alto') {
    p2 = `A Prime Line atende ${cidade.nome} com projetos de marcenaria planejada sob medida, do quarto à cozinha, do closet ao home office — com acabamentos premium e o mesmo cuidado dos projetos de alto padrão. Cobrimos ${areas} e região, com visita técnica gratuita, projeto 3D e orçamento sem compromisso.`
  } else {
    p2 = `A Prime Line atende ${cidade.nome} com móveis planejados sob medida e custo-benefício — cozinhas, quartos, closets e salas com o mesmo acabamento dos projetos de alto padrão, dentro de um orçamento bem planejado. Atendemos ${areas} e toda a cidade, com fabricação própria, garantia formal e prazo médio de 45 a 60 dias.`
  }
  return { p1, p2 }
}

function getFaq(cidade: Cidade) {
  const precoMin = cidade.tier === 'medio' ? 'R$ 1.500' : 'R$ 3.000'
  return [
    {
      pergunta: `A Prime Line atende ${cidade.nome}?`,
      resposta: `Sim. Atendemos ${cidade.nome} e toda a Região Metropolitana de Belo Horizonte com visita técnica gratuita. Nossa equipe vai até o seu imóvel, mede o ambiente com precisão e apresenta projeto 3D e orçamento sem compromisso. Basta entrar em contato pelo WhatsApp para agendar.`,
    },
    {
      pergunta: `Qual o valor de móveis planejados em ${cidade.nome}?`,
      resposta: `O investimento varia conforme o tipo de ambiente, metragem e acabamentos. Projetos em ${cidade.nome} partem de ${precoMin} para peças avulsas como gabinetes e nichos, chegando a valores maiores em projetos completos de cozinha, quarto e sala. Oferecemos orçamento gratuito e detalhado após a visita técnica.`,
    },
    {
      pergunta: `Tem custo a mais para entregar em ${cidade.nome}?`,
      resposta: `A visita técnica e o projeto 3D são gratuitos em ${cidade.nome}. Eventuais custos de frete e montagem para a Região Metropolitana são informados de forma transparente no orçamento, sem surpresas. A maior parte dos nossos projetos já contempla a entrega e montagem na Grande BH.`,
    },
    {
      pergunta: `A Prime Line atende condomínios em ${cidade.nome}?`,
      resposta: `Sim. Atendemos imóveis residenciais de todos os tipos em ${cidade.nome} — apartamentos em condomínios verticais e horizontais, casas e sobrados. Nossa equipe segue as normas de horário e acesso dos condomínios, com montagem limpa e organizada.`,
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

export default async function CidadePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const cidade = cidades.find(c => c.slug === slug)
  if (!cidade) notFound()

  const idx = cidades.indexOf(cidade)
  const hero = heroImages[idx % heroImages.length]
  const { p1, p2 } = getTexto(cidade)
  const faq = getFaq(cidade)
  const WA_URL = waUrl('cidades', cidade.nome)

  const relacionadas = cidades.filter(c => c.slug !== slug).slice(0, 6)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/cidades/${slug}`,
    name: 'Prime Line Ambientes Planejados',
    description: `Móveis planejados sob medida em ${cidade.nome}, Região Metropolitana de Belo Horizonte. Cozinhas, quartos, closets e salas com visita técnica gratuita.`,
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
      { '@type': 'City', name: `${cidade.nome}, MG` },
      ...cidade.areas.map(a => ({ '@type': 'Place', name: a })),
    ],
    hasMap: 'https://www.google.com/maps/place/Prime+Line+Ambientes+Planejados/data=!4m2!3m1!1s0x0:0x15e7086bbff5046b',
    priceRange: cidade.tier === 'medio' ? '$$' : '$$-$$$',
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',    item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Cidades', item: `${siteUrl}/cidades` },
      { '@type': 'ListItem', position: 3, name: cidade.nome, item: `${siteUrl}/cidades/${slug}` },
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
              <li><Link href="/cidades" className="hover:text-gold-light transition-colors">Cidades</Link></li>
              <li><ChevronIcon /></li>
              <li className="text-brand-400" aria-current="page">{cidade.nome}</li>
            </ol>
          </nav>

          <span className="label-caps text-gold-main mb-4 block">Móveis Planejados — {cidade.nome}</span>
          <h1 className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            Móveis Planejados<br className="hidden md:block" /> em {cidade.nome}
          </h1>
          <p className="font-body font-light text-base md:text-lg text-brand-300 max-w-xl mx-auto leading-relaxed mb-10">
            Visita técnica gratuita em {cidade.nome} — {cidade.destaque}. Projeto 3D, fabricação própria e montagem pela Prime Line.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid inline-flex items-center gap-3"
          >
            <WaIcon />
            Solicitar visita em {cidade.nome}
          </a>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="section section--cream">
        <div className="container">
          <div className="mb-12" data-animate>
            <SectionTitle
              label={`Atendimento em ${cidade.nome}`}
              title={`Por que escolher a Prime Line em ${cidade.nome}?`}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ titulo, descricao }, i) => (
              <div key={titulo} data-animate data-delay={String(Math.min((i % 3) + 1, 3)) as '1' | '2' | '3'} className="p-6 border border-brand-200 bg-white">
                <span className="block gold-line mb-4" />
                <h3 className="font-body font-semibold text-sm text-brand-900 mb-2">{titulo}</h3>
                <p className="font-body font-light text-sm text-brand-500 leading-relaxed">
                  {descricao.replace('%nome%', cidade.nome)}
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
              title={`Serviços de marcenaria planejada em ${cidade.nome}`}
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
              title={`Perguntas sobre móveis planejados em ${cidade.nome}`}
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

      {/* Outras cidades */}
      {relacionadas.length > 0 && (
        <section className="section section--cream">
          <div className="container">
            <p className="label-caps text-brand-600 mb-6">Outras cidades atendidas</p>
            <div className="flex flex-wrap gap-3">
              {relacionadas.map(c => (
                <Link
                  key={c.slug}
                  href={`/cidades/${c.slug}`}
                  className="font-body text-sm text-brand-700 hover:text-gold-main border border-brand-300 hover:border-gold-main px-4 py-2 transition-colors duration-200"
                >
                  {c.nome}
                </Link>
              ))}
              <Link
                href="/bairros"
                className="font-body text-sm text-brand-500 hover:text-gold-main border border-brand-200 hover:border-gold-main px-4 py-2 transition-colors duration-200"
              >
                Bairros de BH →
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
            title={`Solicite sua visita técnica gratuita em ${cidade.nome}`}
            center
            light
          />
          <p className="font-body font-light text-base text-brand-300 mt-6 mb-10 max-w-lg mx-auto leading-relaxed">
            Nossa equipe vai até o seu imóvel em {cidade.nome}, mede o ambiente, apresenta o projeto 3D e o orçamento — sem custo e sem compromisso.
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
