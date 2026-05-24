'use client'

import { useState } from 'react'
import { CardArtigo } from '@/components/blog/CardArtigo'
import type { Artigo, CategoriaBlog } from '@/types'

const categorias: Array<{ label: string; value: CategoriaBlog | 'Todos' }> = [
  { label: 'Todos', value: 'Todos' },
  { label: 'Dicas', value: 'Dicas' },
  { label: 'Tendências', value: 'Tendências' },
  { label: 'Materiais', value: 'Materiais' },
  { label: 'Projetos', value: 'Projetos' },
]

interface Props {
  artigos: Artigo[]
}

export function FiltroBlog({ artigos }: Props) {
  const [ativo, setAtivo] = useState<CategoriaBlog | 'Todos'>('Todos')

  const filtrados = ativo === 'Todos' ? artigos : artigos.filter(a => a.categoria === ativo)

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-12">
        {categorias.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setAtivo(value as CategoriaBlog | 'Todos')}
            className={`font-body font-semibold text-xs tracking-widest uppercase px-6 py-3 border transition-colors duration-200 ${
              ativo === value
                ? 'bg-brand-800 text-brand-50 border-brand-800'
                : 'border-brand-300 text-brand-600 hover:border-brand-600 hover:text-brand-800'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtrados.map(artigo => (
          <CardArtigo key={artigo.slug} artigo={artigo} />
        ))}
      </div>
    </div>
  )
}
