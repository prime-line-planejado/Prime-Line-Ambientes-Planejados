'use client'

import { Fragment, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { projetos } from '@/data/projetos'
import { waUrl } from '@/lib/whatsapp'
import type { Categoria } from '@/types'

const CTA_INTERVAL = 6

function CtaBanner() {
  return (
    <div
      data-animate
      className="col-span-1 sm:col-span-2 lg:col-span-3 bg-brand-900 border border-brand-700 px-8 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
    >
      <div>
        <p className="label-caps text-gold-main mb-2">Gostou do que viu?</p>
        <p className="font-display font-light text-2xl md:text-3xl text-brand-50 leading-snug">
          Quer um projeto assim?{' '}
          <em className="text-gold-light not-italic">Fale conosco.</em>
        </p>
        <p className="font-body font-light text-sm text-brand-400 mt-2">
          Visita técnica gratuita · Projeto 3D · Orçamento sem compromisso
        </p>
      </div>
      <a
        href={waUrl('portfolio')}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-solid flex-shrink-0 inline-flex gap-2 items-center"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.527 5.855L0 24l6.318-1.498A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.007-1.37l-.36-.213-3.75.889.934-3.638-.236-.374A9.762 9.762 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
        </svg>
        Solicitar orçamento
      </a>
    </div>
  )
}

const counts = {
  Todos:       projetos.length,
  Residencial: projetos.filter(p => p.categoria === 'Residencial').length,
  Corporativo: projetos.filter(p => p.categoria === 'Corporativo').length,
}

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
            className={`group font-body font-semibold text-xs tracking-widest uppercase px-6 py-3 border transition-colors duration-200 ${
              ativo === value
                ? 'bg-brand-800 text-brand-50 border-brand-800'
                : 'border-brand-300 text-brand-600 hover:border-brand-600 hover:text-brand-800'
            }`}
          >
            {label}
            <span className={`ml-2 font-body font-light text-xs ${
              ativo === value ? 'text-brand-300' : 'text-brand-400 group-hover:text-brand-500'
            }`}>
              {counts[value]}
            </span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtrados.map((projeto, i) => (
          <Fragment key={projeto.id}>
            <Link
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

              {/* Badges sempre visíveis */}
              {(projeto.ano || projeto.area) && (
                <div className="absolute top-3 right-3 flex flex-col items-end gap-1.5">
                  {projeto.area && (
                    <span className="font-body text-[10px] font-semibold tracking-wider uppercase bg-brand-950/70 text-brand-100 px-2 py-0.5 backdrop-blur-sm">
                      {projeto.area}
                    </span>
                  )}
                  {projeto.ano && (
                    <span className="font-body text-[10px] font-semibold tracking-wider uppercase bg-gold-main/90 text-brand-950 px-2 py-0.5">
                      {projeto.ano}
                    </span>
                  )}
                </div>
              )}

              <div className="absolute bottom-0 inset-x-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="label-caps text-gold-light mb-1">{projeto.categoria}</p>
                <h3 className="font-display font-light text-xl text-brand-50">{projeto.titulo}</h3>
                {projeto.local && <p className="font-body text-xs text-brand-300 mt-1">{projeto.local}</p>}
              </div>
            </Link>

            {(i + 1) % CTA_INTERVAL === 0 && i + 1 < filtrados.length && (
              <CtaBanner />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  )
}
