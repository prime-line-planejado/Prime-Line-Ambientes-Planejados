'use client'

import { useState, useEffect, useRef } from 'react'

const CONSENT_KEY = 'pl_cookie_consent'
const GA_ID = process.env.NEXT_PUBLIC_GA_ID
// Pixel ID é público (aparece em toda requisição do site) — hardcode com fallback
// pro env, pra funcionar em qualquer projeto Vercel que buildar o repo.
const PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || '3194399230742680'

function injectGA() {
  if (!GA_ID || document.getElementById('ga4-script')) return

  const s = document.createElement('script')
  s.id    = 'ga4-script'
  s.src   = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  s.async = true
  document.head.appendChild(s)

  ;(window as any).dataLayer = (window as any).dataLayer || []
  function gtag(...args: any[]) { (window as any).dataLayer.push(args) }
  ;(window as any).gtag = gtag
  gtag('js', new Date())
  gtag('config', GA_ID, { page_path: window.location.pathname })
}

// Meta (Facebook) Pixel — carregado após consentimento (explícito ou por navegação).
function injectPixel() {
  if (!PIXEL_ID || (window as any).fbq) return
  /* eslint-disable */
  ;(function (f: any, b, e, v, n?: any, t?: any, s?: any) {
    if (f.fbq) return
    n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments) }
    if (!f._fbq) f._fbq = n
    n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []
    t = b.createElement(e); t.async = !0; t.src = v
    s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s)
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')
  /* eslint-enable */
  ;(window as any).fbq('init', PIXEL_ID)
  ;(window as any).fbq('track', 'PageView')
}

function injectTrackers() { injectGA(); injectPixel() }

export function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const bannerRef = useRef<HTMLDivElement>(null)
  const decidedRef = useRef(false)

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY)
    if (consent === 'accepted') { injectTrackers(); return }
    if (consent === 'rejected') return

    // Sem decisão ainda: mostra o aviso e trata "continuar navegando"
    // (rolar a página ou clicar em qualquer lugar fora do banner) como consentimento.
    setVisible(true)

    const grantImplied = (e: Event) => {
      if (decidedRef.current) return
      // Cliques dentro do banner (Aceitar/Recusar) têm handler próprio — ignora aqui.
      if (e.type === 'click' && bannerRef.current && e.target instanceof Node && bannerRef.current.contains(e.target)) return
      decidedRef.current = true
      localStorage.setItem(CONSENT_KEY, 'accepted')
      injectTrackers()
      setVisible(false)
      cleanup()
    }
    function cleanup() {
      window.removeEventListener('scroll', grantImplied, true)
      window.removeEventListener('click', grantImplied, true)
    }
    window.addEventListener('scroll', grantImplied, { capture: true, passive: true })
    window.addEventListener('click', grantImplied, true)
    return cleanup
  }, [])

  function accept() {
    decidedRef.current = true
    localStorage.setItem(CONSENT_KEY, 'accepted')
    injectTrackers()
    setVisible(false)
  }

  function reject() {
    decidedRef.current = true
    localStorage.setItem(CONSENT_KEY, 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      ref={bannerRef}
      role="dialog"
      aria-label="Consentimento de cookies"
      className="fixed bottom-0 inset-x-0 z-[200] bg-brand-900 border-t border-brand-700 px-6 py-5 md:py-4 shadow-2xl"
    >
      <div className="container flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        <p className="font-body font-light text-xs text-brand-300 leading-relaxed flex-1">
          Usamos cookies para analisar o tráfego do site e melhorar sua experiência, em conformidade com a{' '}
          <strong className="font-normal text-brand-200">LGPD</strong>.
          Ao continuar navegando, você concorda com o uso de cookies analíticos e de
          publicidade (Google Analytics e Meta Pixel). Você pode recusar a qualquer momento.
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={reject}
            className="font-body font-light text-xs text-brand-400 hover:text-brand-200 transition-colors px-4 py-2 border border-brand-700 hover:border-brand-500"
          >
            Recusar
          </button>
          <button
            onClick={accept}
            className="font-body font-semibold text-xs text-brand-950 bg-gold-main hover:bg-gold-light transition-colors px-5 py-2"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  )
}
