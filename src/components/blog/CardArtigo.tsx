import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/Badge'
import { formatarData } from '@/lib/utils'
import type { Artigo } from '@/types'

interface Props {
  artigo: Artigo
}

export function CardArtigo({ artigo }: Props) {
  return (
    <Link href={`/blog/${artigo.slug}`} className="group flex flex-col gap-4">
      <div className="relative aspect-[16/9] bg-brand-200 overflow-hidden">
        {artigo.imagem && (
          <Image
            src={artigo.imagem}
            alt={artigo.title}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
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
  )
}
