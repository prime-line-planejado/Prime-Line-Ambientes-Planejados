import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { CtaContato } from '@/components/home/CtaContato'
import { waUrl } from '@/lib/whatsapp'
import { servicosPaginas } from '@/data/servicosPaginas'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://primelineplanejados.com.br'

const iconPaths: Record<string, React.ReactNode> = {
  ruler:   <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v15m6-15v15M9 9h6m-6 6h6M4.5 4.5h15a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75h-15a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75Z" />,
  palette: <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />,
  cube:    <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />,
  shield:  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />,
  clock:   <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  star:    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />,
}

export function generateStaticParams() {
  return servicosPaginas.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const servico = servicosPaginas.find(s => s.slug === slug)
  if (!servico) return {}

  return {
    title: servico.metaTitle,
    description: servico.metaDescription,
    alternates: { canonical: `/servicos/${servico.slug}` },
    openGraph: {
      title: servico.metaTitle,
      description: servico.metaDescription,
      type: 'website',
      url: `${siteUrl}/servicos/${servico.slug}`,
      locale: 'pt_BR',
      siteName: 'Prime Line Ambientes Planejados',
      images: [{ url: `${siteUrl}${servico.heroImagem}`, width: 1200, height: 630, alt: servico.heroAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: servico.metaTitle,
      description: servico.metaDescription,
      images: [`${siteUrl}${servico.heroImagem}`],
    },
  }
}

export default async function ServicoPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const servico = servicosPaginas.find(s => s.slug === slug)
  if (!servico) notFound()

  const waURL = waUrl('servicos', servico.titulo)

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: servico.titulo,
    description: servico.metaDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Prime Line Ambientes Planejados',
      url: siteUrl,
      telephone: '+5531998156666',
      areaServed: { '@type': 'City', name: 'Belo Horizonte' },
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'BRL',
      priceRange: servico.priceRange,
      availability: 'https://schema.org/InStock',
      areaServed: { '@type': 'City', name: 'Belo Horizonte' },
    },
    image: `${siteUrl}${servico.heroImagem}`,
    url: `${siteUrl}/servicos/${servico.slug}`,
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: servico.faq.map(({ pergunta, resposta }) => ({
      '@type': 'Question',
      name: pergunta,
      acceptedAnswer: { '@type': 'Answer', text: resposta },
    })),
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Serviços', item: `${siteUrl}/servicos` },
      { '@type': 'ListItem', position: 3, name: servico.titulo, item: `${siteUrl}/servicos/${servico.slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="section--dark relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={servico.heroImagem}
            alt={servico.heroAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative container px-6 py-20 md:py-28">

          <nav aria-label="Breadcrumb" className="flex mb-8">
            <ol className="flex items-center gap-2 font-body text-xs text-brand-500">
              <li><Link href="/" className="hover:text-gold-light transition-colors">Home</Link></li>
              <li aria-hidden="true">
                <svg viewBox="0 0 6 10" className="w-1.5 h-2.5 text-brand-700" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 1l4 4-4 4"/></svg>
              </li>
              <li><Link href="/servicos" className="hover:text-gold-light transition-colors">Serviços</Link></li>
              <li aria-hidden="true">
                <svg viewBox="0 0 6 10" className="w-1.5 h-2.5 text-brand-700" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 1l4 4-4 4"/></svg>
              </li>
              <li className="text-brand-400" aria-current="page">{servico.titulo}</li>
            </ol>
          </nav>

          <p className="label-caps text-gold-main mb-4">{servico.label}</p>
          <h1 className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-brand-50 leading-tight mb-6 max-w-3xl">
            {servico.titulo}
          </h1>
          <p className="font-body font-light text-base text-brand-300 mb-8 max-w-xl leading-relaxed">
            {servico.subtitulo}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={waURL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-solid inline-flex gap-2"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.527 5.855L0 24l6.318-1.498A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.007-1.37l-.36-.213-3.75.889.934-3.638-.236-.374A9.762 9.762 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
              </svg>
              Solicitar orçamento grátis
            </a>
            <span className="font-body font-light text-xs text-brand-500">{servico.priceRange}</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section section--cream">
        <div className="container">
          <div className="mb-12 text-center" data-animate>
            <SectionTitle label="Por que escolher a Prime Line" title="O que está incluído no projeto" center />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-animate data-delay="1">
            {servico.features.map(({ icon, titulo, descricao }) => (
              <div key={titulo} className="flex gap-4 p-6 bg-brand-50 border border-brand-200">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-brand-200">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-gold-main" aria-hidden="true">
                    {iconPaths[icon] ?? iconPaths.star}
                  </svg>
                </div>
                <div>
                  <p className="font-body font-semibold text-sm text-brand-900 mb-1">{titulo}</p>
                  <p className="font-body font-light text-sm text-brand-600 leading-relaxed">{descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="section bg-brand-50">
        <div className="container">
          <div className="mb-10 text-center" data-animate>
            <SectionTitle label="Projetos executados" title="Galeria de trabalhos" center />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" data-animate data-delay="1">
            {servico.imagens.map(({ src, alt }) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden bg-brand-200">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/portfolio?aba=galeria" className="font-body text-sm text-gold-main hover:text-brand-900 transition-colors">
              Ver galeria completa com mais de 80 projetos →
            </Link>
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="section section--cream">
        <div className="container max-w-3xl mx-auto" data-animate>
          <div className="space-y-6">
            {servico.paragrafos.map((p, i) => (
              <p key={i} className="font-body font-light text-base text-brand-700 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-brand-50">
        <div className="container max-w-3xl mx-auto">
          <div className="mb-12 text-center" data-animate>
            <SectionTitle label="Tire suas dúvidas" title="Perguntas Frequentes" center />
          </div>
          <div className="divide-y divide-brand-200" data-animate data-delay="1">
            {servico.faq.map(({ pergunta, resposta }) => (
              <div key={pergunta} className="py-6">
                <h3 className="font-body font-semibold text-base text-brand-900 mb-3">{pergunta}</h3>
                <p className="font-body font-light text-sm text-brand-600 leading-relaxed">{resposta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços relacionados */}
      <section className="section section--dark">
        <div className="container">
          <div className="mb-10 text-center">
            <SectionTitle label="Conheça também" title="Outros serviços" center light />
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {servico.relacionados.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="btn-outline py-3 px-8 font-body text-sm"
              >
                {label}
              </Link>
            ))}
            <Link href="/servicos" className="btn-outline py-3 px-8 font-body text-sm">
              Ver todos os serviços
            </Link>
          </div>
        </div>
      </section>

      <CtaContato origem="servicos" />
    </>
  )
}
