'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { galeria, categoriasGaleria, type CategoriaGaleria } from '@/data/galeria'
import { projetos } from '@/data/projetos'

// Mapa reverso: arquivo da galeria → id do projeto que o usa em imagens[]
function buildProjetoMap(): Map<string, string> {
  const map = new Map<string, string>()
  for (const projeto of projetos) {
    for (const img of projeto.imagens ?? []) {
      const arquivo = img.split('/').pop()
      if (arquivo) map.set(arquivo, projeto.id)
    }
  }
  return map
}

const projetoMap = buildProjetoMap()

function Lightbox({
  itens,
  indice,
  onClose,
  onPrev,
  onNext,
}: {
  itens: typeof galeria
  indice: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  const item = itens[indice]
  const projetoId = projetoMap.get(item.arquivo)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, onPrev, onNext])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.titulo}
      className="fixed inset-0 z-[300] flex items-center justify-center bg-brand-950/95 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Fechar */}
      <button
        onClick={onClose}
        aria-label="Fechar"
        className="absolute top-4 right-4 text-brand-400 hover:text-brand-50 transition-colors z-10"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Contador */}
      <p className="absolute top-5 left-1/2 -translate-x-1/2 font-body text-xs text-brand-500 tracking-widest">
        {indice + 1} / {itens.length}
      </p>

      {/* Prev */}
      {indice > 0 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          aria-label="Imagem anterior"
          className="absolute left-3 md:left-6 text-brand-400 hover:text-brand-50 transition-colors z-10 p-2"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
      )}

      {/* Next */}
      {indice < itens.length - 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext() }}
          aria-label="Próxima imagem"
          className="absolute right-3 md:right-6 text-brand-400 hover:text-brand-50 transition-colors z-10 p-2"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      )}

      {/* Imagem */}
      <div
        className="relative w-full h-full max-w-5xl max-h-[85vh] mx-auto px-14 md:px-20 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full">
          <Image
            key={item.arquivo}
            src={`/images/galeria/${item.arquivo}`}
            alt={`${item.titulo} — Prime Line Ambientes Planejados`}
            fill
            sizes="(max-width: 768px) 100vw, 90vw"
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Legenda + link para projeto */}
      <div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="font-body font-light text-sm text-brand-300">{item.titulo}</p>
        <p className="font-body text-xs text-brand-600 mt-0.5">{item.categoria}</p>
        {projetoId && (
          <Link
            href={`/portfolio/${projetoId}`}
            onClick={onClose}
            className="inline-block mt-2 font-body text-xs text-gold-main hover:text-gold-light transition-colors"
          >
            Ver projeto completo →
          </Link>
        )}
      </div>
    </div>
  )
}

export function GaleriaGrid() {
  const [ativa, setAtiva] = useState<CategoriaGaleria>('Todos')
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)

  const itens = useMemo(
    () => ativa === 'Todos' ? galeria : galeria.filter(i => i.categoria === ativa),
    [ativa],
  )

  const contagem: Record<string, number> = { Todos: galeria.length }
  for (const cat of categoriasGaleria.slice(1)) {
    contagem[cat] = galeria.filter(i => i.categoria === cat).length
  }

  const handlePrev = useCallback(() => {
    setLightboxIdx(i => (i !== null && i > 0 ? i - 1 : i))
  }, [])

  const handleNext = useCallback(() => {
    setLightboxIdx(i => (i !== null && i < itens.length - 1 ? i + 1 : i))
  }, [itens.length])

  const handleClose = useCallback(() => setLightboxIdx(null), [])

  return (
    <>
      <div>
        {/* Filtros */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categoriasGaleria.map(cat => (
            <button
              key={cat}
              onClick={() => { setAtiva(cat); setLightboxIdx(null) }}
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
          {itens.map((item, i) => {
            const temProjeto = projetoMap.has(item.arquivo)
            return (
              <button
                key={item.arquivo}
                onClick={() => setLightboxIdx(i)}
                aria-label={`Ampliar: ${item.titulo}`}
                className="group relative aspect-[4/3] overflow-hidden bg-brand-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-main"
              >
                <Image
                  src={`/images/galeria/${item.arquivo}`}
                  alt={`${item.titulo} — Prime Line Ambientes Planejados, Belo Horizonte`}
                  fill
                  priority={i < 4}
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-950/0 group-hover:bg-brand-950/60 transition-colors duration-300 flex items-end p-3">
                  <p className="font-body font-light text-xs text-white leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.titulo}
                  </p>
                </div>
                {/* Ícone de lupa */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-end gap-1">
                  {temProjeto && (
                    <span className="font-body text-[9px] font-semibold tracking-wider uppercase bg-gold-main/90 text-brand-950 px-1.5 py-0.5">
                      ver projeto
                    </span>
                  )}
                  <div className="bg-brand-950/70 backdrop-blur-sm p-1.5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-brand-100">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                    </svg>
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {/* Contador */}
        <p className="mt-6 font-body font-light text-xs text-brand-400 text-center">
          {itens.length} {itens.length === 1 ? 'projeto' : 'projetos'} exibidos
        </p>
      </div>

      {lightboxIdx !== null && (
        <Lightbox
          itens={itens}
          indice={lightboxIdx}
          onClose={handleClose}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </>
  )
}
