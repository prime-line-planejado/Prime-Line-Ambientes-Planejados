import Link from 'next/link'
import { CardArtigo } from '@/components/blog/CardArtigo'
import type { Artigo } from '@/types'

interface Props {
  artigos: Artigo[]
}

export function ArtigosRelacionados({ artigos }: Props) {
  if (artigos.length === 0) return null

  return (
    <section className="section section--cream">
      <div className="container max-w-5xl mx-auto">
        <div className="flex items-end justify-between mb-10 gap-4">
          <div>
            <p className="label-caps text-gold-main mb-2">Continue lendo</p>
            <h2 className="font-display font-light text-3xl text-brand-900">
              Artigos relacionados
            </h2>
          </div>
          <Link
            href="/blog"
            className="font-body text-sm text-gold-main hover:text-brand-900 transition-colors whitespace-nowrap"
          >
            Ver todos →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artigos.map(artigo => (
            <CardArtigo key={artigo.slug} artigo={artigo} />
          ))}
        </div>
      </div>
    </section>
  )
}
