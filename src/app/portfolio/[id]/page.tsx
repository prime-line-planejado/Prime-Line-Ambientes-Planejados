import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projetos } from '@/data/projetos'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { CtaContato } from '@/components/home/CtaContato'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://primelineplanejados.com.br'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return projetos.map(p => ({ id: p.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const projeto = projetos.find(p => p.id === id)
  if (!projeto) return {}

  const title = `${projeto.titulo} — Projeto em ${projeto.local ?? 'Belo Horizonte'}`
  const description = projeto.descricao

  return {
    title,
    description,
    alternates: { canonical: `/portfolio/${id}` },
    openGraph: {
      title,
      description,
      type: 'website',
      url: `${siteUrl}/portfolio/${id}`,
      locale: 'pt_BR',
      siteName: 'Prime Line Ambientes Planejados',
      images: [{ url: `${siteUrl}${projeto.imagem}`, width: 1200, height: 800, alt: projeto.altText }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${siteUrl}${projeto.imagem}`],
    },
  }
}

function waUrl(titulo: string, local?: string) {
  const texto = encodeURIComponent(
    `Olá! Vi o projeto "${titulo}"${local ? ` (${local})` : ''} no portfólio de vocês e gostaria de um orçamento para algo similar.`
  )
  return `https://wa.me/5531998156666?text=${texto}`
}

export default async function ProjetoPage({ params }: Props) {
  const { id } = await params
  const projeto = projetos.find(p => p.id === id)
  if (!projeto) notFound()

  const idx = projetos.findIndex(p => p.id === id)
  const anterior = projetos[idx - 1] ?? null
  const proximo = projetos[idx + 1] ?? null

  const todasImagens = [projeto.imagem, ...(projeto.imagens ?? [])]

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: projeto.titulo,
    description: projeto.descricao,
    dateCreated: projeto.ano ? String(projeto.ano) : undefined,
    locationCreated: {
      '@type': 'Place',
      name: projeto.local ?? 'Belo Horizonte, MG',
      addressLocality: 'Belo Horizonte',
      addressRegion: 'MG',
      addressCountry: 'BR',
    },
    creator: {
      '@type': 'LocalBusiness',
      name: 'Prime Line Ambientes Planejados',
      url: siteUrl,
    },
    image: todasImagens.map((src, i) => ({
      '@type': 'ImageObject',
      url: `${siteUrl}${src}`,
      name: i === 0 ? projeto.titulo : `${projeto.titulo} — foto ${i + 1}`,
      description: projeto.altText,
      representativeOfPage: i === 0,
    })),
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Portfólio', item: `${siteUrl}/portfolio` },
      { '@type': 'ListItem', position: 3, name: projeto.titulo, item: `${siteUrl}/portfolio/${id}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <section className="section section--dark pb-16">
        <div className="container">
          <nav aria-label="Breadcrumb" className="flex mb-8">
            <ol className="flex items-center gap-2 font-body text-xs text-brand-500">
              <li><Link href="/" className="hover:text-gold-light transition-colors">Home</Link></li>
              <li aria-hidden="true">
                <svg viewBox="0 0 6 10" className="w-1.5 h-2.5 text-brand-700" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 1l4 4-4 4"/></svg>
              </li>
              <li><Link href="/portfolio" className="hover:text-gold-light transition-colors">Portfólio</Link></li>
              <li aria-hidden="true">
                <svg viewBox="0 0 6 10" className="w-1.5 h-2.5 text-brand-700" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 1l4 4-4 4"/></svg>
              </li>
              <li className="text-brand-400 truncate max-w-[200px]" aria-current="page">{projeto.titulo}</li>
            </ol>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="label-caps text-gold-main mb-3">{projeto.categoria}</p>
              <h1 className="font-display font-light text-3xl md:text-5xl text-brand-50 leading-tight max-w-2xl">
                {projeto.titulo}
              </h1>
            </div>
            <div className="flex flex-col gap-1 text-right">
              {projeto.local && <p className="font-body text-sm text-brand-400">{projeto.local}</p>}
              {projeto.ano && <p className="font-body text-sm text-brand-500">{projeto.ano}</p>}
              {projeto.area && <p className="font-body text-sm text-brand-500">{projeto.area}</p>}
            </div>
          </div>
        </div>
      </section>

      {/* Imagem principal */}
      <div className="relative w-full aspect-[16/7] bg-brand-200">
        <Image
          src={projeto.imagem}
          alt={projeto.altText}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Descrição + Materiais */}
      <section className="section bg-brand-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Texto */}
            <div className="md:col-span-2">
              <SectionTitle label="Sobre o projeto" title={projeto.titulo} />
              <p className="font-body font-light text-base text-brand-600 leading-relaxed mt-6 max-w-prose">
                {projeto.descricao}
              </p>
              <a
                href={waUrl(projeto.titulo, projeto.local)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-solid mt-8 inline-flex"
              >
                Quero um projeto similar
              </a>
            </div>

            {/* Materiais */}
            {projeto.materiais && projeto.materiais.length > 0 && (
              <div>
                <p className="label-caps text-brand-700 mb-4">Materiais utilizados</p>
                <ul className="flex flex-col gap-3">
                  {projeto.materiais.map(mat => (
                    <li key={mat} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-main flex-shrink-0" />
                      <span className="font-body font-light text-sm text-brand-600">{mat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Galeria adicional */}
      {projeto.imagens && projeto.imagens.length > 0 && (
        <section className="section section--cream">
          <div className="container">
            <p className="label-caps text-brand-500 mb-8">Mais fotos do projeto</p>

            {/* Linha destaque: primeiras 2 fotos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {projeto.imagens.slice(0, 2).map((src, i) => (
                <div key={src} className="relative aspect-[4/3] bg-brand-200 overflow-hidden">
                  <Image
                    src={src}
                    alt={`${projeto.titulo} — foto ${i + 2}`}
                    fill
                    sizes="(max-width:640px) 100vw, 50vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>

            {/* Linha adicional: fotos 3 em diante */}
            {projeto.imagens.length > 2 && (
              <div className={`grid gap-4 ${
                projeto.imagens.slice(2).length === 1
                  ? 'grid-cols-1'
                  : projeto.imagens.slice(2).length === 2
                  ? 'grid-cols-2'
                  : 'grid-cols-2 sm:grid-cols-3'
              }`}>
                {projeto.imagens.slice(2).map((src, i) => (
                  <div key={src} className="relative aspect-[4/3] bg-brand-200 overflow-hidden">
                    <Image
                      src={src}
                      alt={`${projeto.titulo} — foto ${i + 4}`}
                      fill
                      sizes="(max-width:640px) 50vw, 33vw"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Navegação anterior / próximo */}
      <section className="section bg-brand-50 py-12">
        <div className="container">
          <div className="flex justify-between items-center gap-4">
            {anterior ? (
              <Link
                href={`/portfolio/${anterior.id}`}
                className="group flex items-center gap-3 text-brand-600 hover:text-brand-900 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 group-hover:-translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                <div>
                  <p className="label-caps text-brand-400 mb-0.5">Projeto anterior</p>
                  <p className="font-body text-sm">{anterior.titulo}</p>
                </div>
              </Link>
            ) : <div />}

            <Link href="/portfolio" className="btn-outline flex-shrink-0">
              Ver todos
            </Link>

            {proximo ? (
              <Link
                href={`/portfolio/${proximo.id}`}
                className="group flex items-center gap-3 text-right text-brand-600 hover:text-brand-900 transition-colors"
              >
                <div>
                  <p className="label-caps text-brand-400 mb-0.5">Próximo projeto</p>
                  <p className="font-body text-sm">{proximo.titulo}</p>
                </div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      <CtaContato origem="portfolio" />
    </>
  )
}
