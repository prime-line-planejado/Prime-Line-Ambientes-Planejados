'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

interface Props {
  imagens: string[]
  titulo: string
}

export function GaleriaProjetoLightbox({ imagens, titulo }: Props) {
  const [idx, setIdx] = useState<number | null>(null)

  const fechar = useCallback(() => setIdx(null), [])
  const anterior = useCallback(() => setIdx(i => (i === null ? null : (i - 1 + imagens.length) % imagens.length)), [imagens.length])
  const proximo = useCallback(() => setIdx(i => (i === null ? null : (i + 1) % imagens.length)), [imagens.length])

  useEffect(() => {
    if (idx === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') fechar()
      if (e.key === 'ArrowLeft') anterior()
      if (e.key === 'ArrowRight') proximo()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [idx, fechar, anterior, proximo])

  const primeiras = imagens.slice(0, 2)
  const resto = imagens.slice(2)

  return (
    <section className="section section--cream">
      <div className="container">
        <p className="label-caps text-brand-500 mb-8">Mais fotos do projeto</p>

        {/* Linha destaque: primeiras 2 fotos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {primeiras.map((src, i) => (
            <button
              key={src}
              onClick={() => setIdx(i)}
              className="group relative aspect-[4/3] bg-brand-200 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-main"
              aria-label={`Ver foto ${i + 2} de ${titulo} em tamanho maior`}
            >
              <Image
                src={src}
                alt={`${titulo} — foto ${i + 2}`}
                fill
                sizes="(max-width:640px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/20 transition-colors duration-300 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg">
                  <path d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                  <path d="M11 8v6M8 11h6" />
                </svg>
              </span>
            </button>
          ))}
        </div>

        {/* Linha adicional: fotos 3 em diante */}
        {resto.length > 0 && (
          <div className={`grid gap-4 ${
            resto.length === 1 ? 'grid-cols-1' :
            resto.length === 2 ? 'grid-cols-2' :
            'grid-cols-2 sm:grid-cols-3'
          }`}>
            {resto.map((src, i) => (
              <button
                key={src}
                onClick={() => setIdx(i + 2)}
                className="group relative aspect-[4/3] bg-brand-200 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-main"
                aria-label={`Ver foto ${i + 4} de ${titulo} em tamanho maior`}
              >
                <Image
                  src={src}
                  alt={`${titulo} — foto ${i + 4}`}
                  fill
                  sizes="(max-width:640px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/20 transition-colors duration-300 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg">
                    <path d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                    <path d="M11 8v6M8 11h6" />
                  </svg>
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {idx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Foto ${idx + 1} de ${imagens.length} — ${titulo}`}
          className="fixed inset-0 z-[300] flex items-center justify-center bg-brand-950/95"
          onClick={fechar}
        >
          {/* Imagem */}
          <div
            className="relative w-full max-w-5xl max-h-[85vh] mx-4"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={imagens[idx]}
                alt={`${titulo} — foto ${idx + 1}`}
                fill
                sizes="(max-width:1024px) 100vw, 80vw"
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Fechar */}
          <button
            onClick={fechar}
            aria-label="Fechar lightbox"
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-brand-400 hover:text-brand-50 transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Anterior */}
          {imagens.length > 1 && (
            <button
              onClick={e => { e.stopPropagation(); anterior() }}
              aria-label="Foto anterior"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center border border-brand-700 text-brand-400 hover:border-brand-400 hover:text-brand-50 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          )}

          {/* Próximo */}
          {imagens.length > 1 && (
            <button
              onClick={e => { e.stopPropagation(); proximo() }}
              aria-label="Próxima foto"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center border border-brand-700 text-brand-400 hover:border-brand-400 hover:text-brand-50 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          )}

          {/* Contador */}
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 font-body text-xs text-brand-500">
            {idx + 1} / {imagens.length}
          </p>
        </div>
      )}
    </section>
  )
}
