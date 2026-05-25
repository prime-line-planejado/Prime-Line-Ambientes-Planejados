import Image from 'next/image'
import Link from 'next/link'
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

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 font-body text-xs text-brand-500">
            <li>
              <Link href="/" className="hover:text-gold-light transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <svg viewBox="0 0 6 10" className="w-1.5 h-2.5 text-brand-700" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 1l4 4-4 4" />
              </svg>
            </li>
            <li>
              <Link href="/blog" className="hover:text-gold-light transition-colors">
                Blog
              </Link>
            </li>
            <li aria-hidden="true">
              <svg viewBox="0 0 6 10" className="w-1.5 h-2.5 text-brand-700" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 1l4 4-4 4" />
              </svg>
            </li>
            <li className="text-brand-400 truncate max-w-[200px] md:max-w-xs" aria-current="page">
              {title}
            </li>
          </ol>
        </nav>

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
