'use client'

import { useState, useMemo, useEffect } from 'react'
import { CardArtigo } from '@/components/blog/CardArtigo'
import type { Artigo, CategoriaBlog } from '@/types'

const POR_PAGINA = 6

interface Props {
  artigos: Artigo[]
}

export function FiltroBlog({ artigos }: Props) {
  const [ativo, setAtivo] = useState<CategoriaBlog | 'Todos'>('Todos')
  const [busca, setBusca] = useState('')
  const [pagina, setPagina] = useState(1)

  // Reset página ao mudar filtro ou busca
  useEffect(() => { setPagina(1) }, [ativo, busca])

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

  const filtrados = useMemo(() => {
    const termo = busca.toLowerCase().trim()
    return artigos.filter(a => {
      const passaCategoria = ativo === 'Todos' || a.categoria === ativo
      if (!passaCategoria) return false
      if (!termo) return true
      return (
        a.title.toLowerCase().includes(termo) ||
        a.description.toLowerCase().includes(termo) ||
        (a.tags ?? []).some(t => t.toLowerCase().includes(termo))
      )
    })
  }, [artigos, ativo, busca])

  const totalPaginas = Math.ceil(filtrados.length / POR_PAGINA)
  const paginaAtual = Math.min(pagina, totalPaginas || 1)
  const visiveis = filtrados.slice((paginaAtual - 1) * POR_PAGINA, paginaAtual * POR_PAGINA)

  return (
    <div>
      {/* Busca */}
      <div className="relative mb-8 max-w-lg">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-400 pointer-events-none"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          type="search"
          value={busca}
          onChange={e => setBusca(e.target.value)}
          placeholder="Buscar artigos…"
          className="w-full pl-11 pr-4 py-3 border border-brand-200 bg-white font-body text-sm text-brand-900 placeholder:text-brand-400 focus:outline-none focus:border-brand-600 transition-colors duration-200"
        />
        {busca && (
          <button
            onClick={() => setBusca('')}
            aria-label="Limpar busca"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-400 hover:text-brand-700 transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Filtros por categoria */}
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

      {/* Grid */}
      {filtrados.length === 0 ? (
        <div className="text-center py-20">
          <p className="font-body text-brand-400 mb-2">Nenhum artigo encontrado para &ldquo;{busca}&rdquo;.</p>
          <button
            onClick={() => { setBusca(''); setAtivo('Todos') }}
            className="font-body text-sm text-gold-main hover:text-brand-900 transition-colors"
          >
            Limpar filtros
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visiveis.map(artigo => (
              <CardArtigo key={artigo.slug} artigo={artigo} />
            ))}
          </div>

          {/* Paginação */}
          {totalPaginas > 1 && (
            <div className="flex items-center justify-center gap-2 mt-14">
              <button
                onClick={() => setPagina(p => Math.max(1, p - 1))}
                disabled={paginaAtual === 1}
                aria-label="Página anterior"
                className="flex items-center justify-center w-10 h-10 border border-brand-200 text-brand-500 hover:border-brand-600 hover:text-brand-800 disabled:opacity-30 disabled:pointer-events-none transition-colors duration-200"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              {Array.from({ length: totalPaginas }, (_, i) => i + 1).map(num => (
                <button
                  key={num}
                  onClick={() => setPagina(num)}
                  aria-label={`Ir para página ${num}`}
                  aria-current={num === paginaAtual ? 'page' : undefined}
                  className={`flex items-center justify-center w-10 h-10 border font-body text-sm transition-colors duration-200 ${
                    num === paginaAtual
                      ? 'bg-brand-800 border-brand-800 text-brand-50'
                      : 'border-brand-200 text-brand-500 hover:border-brand-600 hover:text-brand-800'
                  }`}
                >
                  {num}
                </button>
              ))}

              <button
                onClick={() => setPagina(p => Math.min(totalPaginas, p + 1))}
                disabled={paginaAtual === totalPaginas}
                aria-label="Próxima página"
                className="flex items-center justify-center w-10 h-10 border border-brand-200 text-brand-500 hover:border-brand-600 hover:text-brand-800 disabled:opacity-30 disabled:pointer-events-none transition-colors duration-200"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          )}

          {/* Contador */}
          {filtrados.length > POR_PAGINA && (
            <p className="font-body text-xs text-brand-400 text-center mt-4">
              Exibindo {Math.min(paginaAtual * POR_PAGINA, filtrados.length)} de {filtrados.length} artigos
            </p>
          )}
        </>
      )}
    </div>
  )
}
