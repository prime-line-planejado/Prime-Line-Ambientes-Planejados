import Link from 'next/link'

interface Props {
  autor?: string
}

const autores: Record<string, { nome: string; cargo: string; bio: string; iniciais: string }> = {
  'Guilherme Souza': {
    nome: 'Guilherme Souza',
    cargo: 'SEO Marketing & Comunicação — Prime Line Ambientes Planejados',
    bio: 'Especialista em SEO e marketing de conteúdo para o mercado de móveis planejados e design de interiores em Belo Horizonte. Produz conteúdo técnico e informativo para ajudar você a tomar as melhores decisões na hora de planejar seus ambientes.',
    iniciais: 'GS',
  },
}

const autorPadrao = autores['Guilherme Souza']

export function AutorArtigo({ autor }: Props) {
  const dados = (autor && autores[autor]) ? autores[autor] : autorPadrao

  return (
    <div className="flex gap-5 py-8 border-t border-brand-200 mt-2">
      {/* Avatar com iniciais */}
      <div className="flex-shrink-0 w-14 h-14 bg-brand-900 border border-brand-700 flex items-center justify-center">
        <span className="font-display font-light text-lg text-gold-main select-none">
          {dados.iniciais}
        </span>
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
          Conheça a Prime Line →
        </Link>
      </div>
    </div>
  )
}
