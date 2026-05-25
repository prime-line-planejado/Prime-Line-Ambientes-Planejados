import Image from 'next/image'
import { Badge } from '@/components/ui/Badge'
import { formatarData } from '@/lib/utils'

interface Props {
  title: string
  description: string
  categoria: string
  date: string
  tempoLeitura: string
  imagem?: string
}

export function HeaderArtigo({ title, description, categoria, date, tempoLeitura, imagem }: Props) {
  return (
    <header className="section section--dark pb-0">
      <div className="container max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Badge variant="light">{categoria}</Badge>
          <span className="font-body text-xs text-brand-400">{tempoLeitura}</span>
          <span className="text-brand-700">·</span>
          <span className="font-body text-xs text-brand-400">{formatarData(date)}</span>
        </div>
        <h1 className="font-display font-light text-4xl md:text-6xl text-brand-50 leading-tight mb-6">
          {title}
        </h1>
        <p className="font-body font-light text-lg text-brand-300 leading-relaxed mb-12 max-w-2xl">
          {description}
        </p>
        {imagem && (
          <div className="relative aspect-[16/7] overflow-hidden -mx-6 md:mx-0 md:rounded-none">
            <Image
              src={imagem}
              alt={title}
              fill
              priority
              sizes="(max-width:768px) 100vw, 896px"
              className="object-cover"
            />
          </div>
        )}
      </div>
    </header>
  )
}
