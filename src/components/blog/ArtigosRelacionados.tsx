import { CardArtigo } from '@/components/blog/CardArtigo'
import type { Artigo } from '@/types'

interface Props {
  artigos: Artigo[]
}

export function ArtigosRelacionados({ artigos }: Props) {
  if (artigos.length === 0) return null

  return (
    <section className="section section--cream">
      <div className="container max-w-4xl mx-auto">
        <h2 className="font-display font-light text-3xl text-brand-900 mb-10">
          Artigos relacionados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artigos.map(artigo => (
            <CardArtigo key={artigo.slug} artigo={artigo} />
          ))}
        </div>
      </div>
    </section>
  )
}
