import Image from 'next/image'
import Link from 'next/link'

interface Props {
  autor?: string
}

const autores: Record<string, { nome: string; bio: string; cargo: string }> = {}

const autorPadrao = {
  nome: 'Equipe Prime Line',
  cargo: 'Especialistas em Ambientes Planejados · Belo Horizonte',
  bio: 'A Prime Line Ambientes Planejados atua há anos no mercado de marcenaria planejada de alto padrão em Belo Horizonte. Nossa equipe combina experiência técnica em projetos residenciais e corporativos com compromisso com materiais premium e acabamento impecável.',
}

export function AutorArtigo({ autor }: Props) {
  const dados = (autor && autores[autor]) ? autores[autor] : autorPadrao

  return (
    <div className="flex gap-5 py-8 border-t border-brand-200 mt-2">
      <div className="flex-shrink-0">
        <div className="w-14 h-14 bg-brand-900 flex items-center justify-center overflow-hidden">
          <Image
            src="/logo.svg"
            alt={dados.nome}
            width={36}
            height={36}
            className="invert opacity-80"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <div>
          <p className="font-display font-light text-base text-brand-900 leading-tight">
            {dados.nome}
          </p>
          <p className="font-body text-xs text-brand-500 mt-0.5">
            {dados.cargo}
          </p>
        </div>
        <p className="font-body font-light text-sm text-brand-600 leading-relaxed">
          {dados.bio}
        </p>
        <Link
          href="/sobre"
          className="font-body text-xs text-gold-main hover:text-brand-900 transition-colors duration-200 mt-1 self-start"
        >
          Conheça nossa história →
        </Link>
      </div>
    </div>
  )
}
