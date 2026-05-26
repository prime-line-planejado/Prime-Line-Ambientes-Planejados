'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { projetos } from '@/data/projetos'
import type { Categoria } from '@/types'

const categorias: Array<{ label: string; value: Categoria | 'Todos' }> = [
  { label: 'Todos', value: 'Todos' },
  { label: 'Residencial', value: 'Residencial' },
  { label: 'Corporativo', value: 'Corporativo' },
]

export function FiltroPortfolio() {
  const [ativo, setAtivo] = useState<Categoria | 'Todos'>('Todos')

  const filtrados = ativo === 'Todos' ? projetos : projetos.filter(p => p.categoria === ativo)

  return (
    <div>
      {/* Filtros */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categorias.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setAtivo(value)}
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

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtrados.map(projeto => (
          <Link
            key={projeto.id}
            href={`/portfolio/${projeto.id}`}
            aria-label={`Ver detalhes do projeto: ${projeto.titulo}`}
            className="project-card group"
          >
            <Image
              src={projeto.imagem}
              alt={projeto.altText}
              fill
              sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/60 transition-colors duration-300" />
            <div className="absolute bottom-0 inset-x-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="label-caps text-gold-light mb-1">{projeto.categoria}</p>
              <h3 className="font-display font-light text-xl text-brand-50">{projeto.titulo}</h3>
              {projeto.local && <p className="font-body text-xs text-brand-300 mt-1">{projeto.local}</p>}
              {projeto.ano && <p className="font-body text-xs text-brand-400 mt-0.5">{projeto.ano}</p>}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
