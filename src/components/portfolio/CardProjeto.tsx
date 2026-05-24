import Image from 'next/image'
import Link from 'next/link'
import type { Projeto } from '@/types'

interface Props {
  projeto: Projeto
}

export function CardProjeto({ projeto }: Props) {
  return (
    <Link href={`/portfolio/${projeto.id}`} className="project-card group block">
      <Image
        src={projeto.imagem}
        alt={`${projeto.titulo} — Prime Line Planejados`}
        fill
        sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/60 transition-colors duration-300" />
      <div className="absolute bottom-0 inset-x-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="label-caps text-gold-light mb-1">{projeto.categoria}</p>
        <p className="font-display font-light text-xl text-brand-50">{projeto.titulo}</p>
        {projeto.local && <p className="font-body text-xs text-brand-300 mt-1">{projeto.local}</p>}
      </div>
    </Link>
  )
}
