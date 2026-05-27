'use client'

import { useState, useMemo } from 'react'
import { CardArtigo } from '@/components/blog/CardArtigo'
import type { Artigo, CategoriaBlog } from '@/types'

interface Props {
  artigos: Artigo[]
}

export function FiltroBlog({ artigos }: Props) {
  const [ativo, setAtivo] = useState<CategoriaBlog | 'Todos'>('Todos')

  const categorias = useMemo(() => {
    const counts = artigos.reduce<Record<string, number>>((acc, a) => {
      acc[a.categoria] = (acc[a.categoria] ?? 0) + 1
      return acc
    }, {})

    const unique = Array.from(new Set(artigos.map(a => a.categoria))).sort()

    return [
      { label: 'Todos', value: 'Todos' as const, count: artigos.length },
      ...unique.map(cat => ({ label: cat, value: cat as CategoriaBlog, count: counts[cat] ?? 0 })),
    ]
  }, [artigos])

  const filtrados = ativo === 'Todos' ? artigos : artigos.filter(a => a.categoria === ativo)

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-12">
        {categorias.map(({ label, value, count }) => (
          <button
            key={value}
            onClick={() => setAtivo(value)}
            className={`group font-body font-semibold text-xs tracking-widest uppercase px-6 py-3 border transition-colors duration-200 ${
              ativo === value
                ? 'bg-brand-800 text-brand-50 border-brand-800'
                : 'border-brand-300 text-brand-600 hover:border-brand-600 hover:text-brand-800'
            }`}
          >
            {label}
            <span className={`ml-2 font-body font-light text-xs not-uppercase ${
              ativo === value ? 'text-brand-300' : 'text-brand-400 group-hover:text-brand-500'
            }`}>
              {count}
            </span>
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
