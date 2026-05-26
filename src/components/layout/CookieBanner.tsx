'use client'

import { useState, useEffect } from 'react'

const CONSENT_KEY = 'pl_cookie_consent'
const GA_ID = process.env.NEXT_PUBLIC_GA_ID

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

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY)
    if (!consent) {
      setVisible(true)
    } else if (consent === 'accepted') {
      injectGA()
    }
  }, [])

  function accept() {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    injectGA()
    setVisible(false)
  }

  function reject() {
    localStorage.setItem(CONSENT_KEY, 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Consentimento de cookies"
      className="fixed bottom-0 inset-x-0 z-50 bg-brand-900 border-t border-brand-700 px-6 py-5 md:py-4"
    >
      <div className="container flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
        <p className="font-body font-light text-xs text-brand-300 leading-relaxed flex-1">
          Usamos cookies para analisar o tráfego do site e melhorar sua experiência, em conformidade com a{' '}
          <strong className="font-normal text-brand-200">LGPD</strong>.
          Ao clicar em <em className="not-italic font-normal text-brand-200">"Aceitar"</em>, você
          concorda com o uso de cookies analíticos (Google Analytics).
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={reject}
            className="font-body font-light text-xs text-brand-400 hover:text-brand-200 transition-colors px-4 py-2 border border-brand-700 hover:border-brand-500"
          >
            Somente necessários
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
