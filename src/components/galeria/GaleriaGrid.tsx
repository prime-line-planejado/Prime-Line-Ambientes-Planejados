'use client'

import { useState } from 'react'
import Image from 'next/image'
import { galeria, categoriasGaleria, type CategoriaGaleria } from '@/data/galeria'

export function GaleriaGrid() {
  const [ativa, setAtiva] = useState<CategoriaGaleria>('Todos')

  const itens = ativa === 'Todos' ? galeria : galeria.filter(i => i.categoria === ativa)

  const contagem: Record<string, number> = { Todos: galeria.length }
  for (const cat of categoriasGaleria.slice(1)) {
    contagem[cat] = galeria.filter(i => i.categoria === cat).length
  }

  return (
    <div>
      {/* Filtros */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categoriasGaleria.map(cat => (
          <button
            key={cat}
            onClick={() => setAtiva(cat)}
            className={`font-body text-xs px-4 py-2 border transition-colors duration-200 ${
              ativa === cat
                ? 'bg-gold-main text-brand-950 border-gold-main font-semibold'
                : 'text-brand-500 border-brand-300 hover:border-brand-500 hover:text-brand-800'
            }`}
          >
            {cat}
            <span className={`ml-1.5 ${ativa === cat ? 'text-brand-800' : 'text-brand-400'}`}>
              ({contagem[cat]})
            </span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {itens.map(item => (
          <div
            key={item.arquivo}
            className="group relative aspect-[4/3] overflow-hidden bg-brand-100"
          >
            <Image
              src={`/images/galeria/${item.arquivo}`}
              alt={`${item.titulo} — Prime Line Ambientes Planejados, Belo Horizonte`}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-brand-950/0 group-hover:bg-brand-950/60 transition-colors duration-300 flex items-end p-3">
              <p className="font-body font-light text-xs text-white leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.titulo}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Contador */}
      <p className="mt-6 font-body font-light text-xs text-brand-400 text-center">
        {itens.length} {itens.length === 1 ? 'projeto' : 'projetos'} exibidos
      </p>
    </div>
  )
}
