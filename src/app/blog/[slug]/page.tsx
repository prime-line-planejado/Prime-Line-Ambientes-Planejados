import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getArtigoPorSlug, getTodosArtigos, getArtigosRelacionados } from '@/lib/blog'
import { HeaderArtigo } from '@/components/blog/HeaderArtigo'
import { ConteudoMDX } from '@/components/blog/ConteudoMDX'
import { CtaBlogWhatsApp } from '@/components/blog/CtaBlogWhatsApp'
import { ArtigosRelacionados } from '@/components/blog/ArtigosRelacionados'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getTodosArtigos().map((a: any) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const artigo = getArtigoPorSlug(slug) as any
  if (!artigo) return {}

  return {
    title: artigo.title,
    description: artigo.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: artigo.title,
      description: artigo.description,
      type: 'article',
      publishedTime: artigo.date,
      ...(artigo.imagem ? { images: [artigo.imagem] } : {}),
    },
  }
}

export default async function BlogArtigoPage({ params }: Props) {
  const { slug } = await params
  const artigo = getArtigoPorSlug(slug) as any
  if (!artigo) notFound()

  const relacionados = getArtigosRelacionados(artigo.slug, artigo.categoria, 3) as any[]

  return (
    <>
      <HeaderArtigo
        title={artigo.title}
        description={artigo.description}
        categoria={artigo.categoria}
        date={artigo.date}
        tempoLeitura={artigo.tempoLeitura}
        imagem={artigo.imagem}
      />

      <article className="section bg-brand-50">
        <div className="container max-w-3xl mx-auto">
          <CtaBlogWhatsApp variant="mid" />
          <ConteudoMDX source={artigo.content} />
        </div>
      </article>

      <CtaBlogWhatsApp variant="end" />
      <ArtigosRelacionados artigos={relacionados} />
    </>
  )
}
