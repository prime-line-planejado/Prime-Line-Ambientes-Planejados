'use client'

import { useState } from 'react'

interface Props {
  title: string
}

export function CompartilharArtigo({ title }: Props) {
  const [copiado, setCopiado] = useState(false)
  const [nativeError, setNativeError] = useState(false)

  const url = typeof window !== 'undefined' ? window.location.href : ''
  const texto = encodeURIComponent(`${title} — Prime Line Ambientes Planejados`)
  const urlEncoded = encodeURIComponent(url)

  function copiarLink() {
    navigator.clipboard.writeText(url).then(() => {
      setCopiado(true)
      setTimeout(() => setCopiado(false), 2000)
    })
  }

  // Web Share API — abre o share nativo do dispositivo (Instagram, WhatsApp, etc.)
  async function compartilharNativo() {
    if (!navigator.share) { setNativeError(true); return }
    try {
      await navigator.share({ title, url })
    } catch {
      // usuário cancelou — não é erro
    }
  }

  const hasNativeShare = typeof navigator !== 'undefined' && !!navigator.share

  return (
    <div className="flex flex-wrap items-center gap-3 py-8 border-t border-brand-200">
      <span className="font-body text-xs tracking-widest uppercase text-brand-500 mr-1">
        Compartilhar
      </span>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/?text=${texto}%20${urlEncoded}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Compartilhar no WhatsApp"
        className="flex items-center gap-2 px-4 py-2 border border-brand-200 text-brand-500 hover:border-green-500 hover:text-green-600 transition-colors duration-200"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.527 5.855L0 24l6.318-1.498A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.007-1.37l-.36-.213-3.75.889.934-3.638-.236-.374A9.762 9.762 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
        </svg>
        <span className="font-body text-xs font-semibold tracking-wide uppercase">WhatsApp</span>
      </a>

      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${urlEncoded}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Compartilhar no Facebook"
        className="flex items-center gap-2 px-4 py-2 border border-brand-200 text-brand-500 hover:border-blue-600 hover:text-blue-600 transition-colors duration-200"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
        <span className="font-body text-xs font-semibold tracking-wide uppercase">Facebook</span>
      </a>

      {/* Instagram — Web Share API (abre o share nativo no mobile, inclui Instagram) */}
      {hasNativeShare && (
        <button
          onClick={compartilharNativo}
          aria-label="Compartilhar no Instagram ou outros apps"
          className="flex items-center gap-2 px-4 py-2 border border-brand-200 text-brand-500 hover:border-pink-500 hover:text-pink-500 transition-colors duration-200"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
          <span className="font-body text-xs font-semibold tracking-wide uppercase">Instagram</span>
        </button>
      )}

      {/* Copiar link */}
      <button
        onClick={copiarLink}
        aria-label="Copiar link do artigo"
        className="flex items-center gap-2 px-4 py-2 border border-brand-200 text-brand-500 hover:border-gold-main hover:text-gold-main transition-colors duration-200"
      >
        {copiado ? (
          <>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gold-main flex-shrink-0">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <span className="font-body text-xs font-semibold tracking-wide uppercase text-gold-main">Copiado!</span>
          </>
        ) : (
          <>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 flex-shrink-0">
              <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
              <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
            </svg>
            <span className="font-body text-xs font-semibold tracking-wide uppercase">Copiar link</span>
          </>
        )}
      </button>
    </div>
  )
}
