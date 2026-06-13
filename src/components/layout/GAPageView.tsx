'use client'

import { Suspense, useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-DGV7F4DP29'

// Dispara um page_view a cada navegação client-side do App Router.
// O page_view inicial já é enviado pelo gtag('config', ...) no CookieBanner,
// então o primeiro disparo deste efeito é ignorado para não duplicar.
function Tracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const first = useRef(true)

  useEffect(() => {
    if (first.current) {
      first.current = false
      return
    }
    if (!GA_ID) return
    const gtag = (window as any).gtag
    if (typeof gtag !== 'function') return // consentimento ainda não dado / GA não carregado

    const qs = searchParams.toString()
    const page_path = qs ? `${pathname}?${qs}` : pathname
    gtag('event', 'page_view', {
      page_path,
      page_location: window.location.href,
      page_title: document.title,
    })
  }, [pathname, searchParams])

  return null
}

// useSearchParams exige Suspense no App Router.
export function GAPageView() {
  return (
    <Suspense fallback={null}>
      <Tracker />
    </Suspense>
  )
}
