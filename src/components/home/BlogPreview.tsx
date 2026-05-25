import Link from 'next/link'
import Image from 'next/image'
import { getTodosArtigos } from '@/lib/blog'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { Badge } from '@/components/ui/Badge'
import { formatarData } from '@/lib/utils'

export function BlogPreview() {
  const artigos = getTodosArtigos().slice(0, 3) as any[]

  if (artigos.length === 0) return null

  return (
    <section className="section section--cream">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <SectionTitle label="Conteúdo e inspiração" title="Do nosso Blog" />
          <Link href="/blog" className="btn-outline self-start md:self-auto">Ver todos os artigos</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artigos.map((artigo: any) => (
            <Link key={artigo.slug} href={`/blog/${artigo.slug}`} className="group flex flex-col gap-4">
              <div className="relative aspect-[16/9] bg-brand-200 overflow-hidden">
                {artigo.imagem && (
                  <Image
                    src={artigo.imagem}
                    alt={artigo.title}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Badge>{artigo.categoria}</Badge>
                  <span className="font-body text-xs text-brand-400">{artigo.tempoLeitura}</span>
                </div>
                <h3 className="font-display font-light text-xl text-brand-900 group-hover:text-brand-500 transition-colors leading-snug mb-2">
                  {artigo.title}
                </h3>
                <p className="font-body font-light text-sm text-brand-600 leading-relaxed line-clamp-2">
                  {artigo.description}
                </p>
                <p className="font-body text-xs text-brand-400 mt-3">{formatarData(artigo.date)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
