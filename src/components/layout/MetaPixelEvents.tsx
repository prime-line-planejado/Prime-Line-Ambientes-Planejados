'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Dispara eventos do Meta Pixel sem bloquear nada:
// - PageView em cada navegação SPA (o 1º PageView é disparado no CookieBanner ao consentir)
// - Contact em qualquer clique num link de WhatsApp (wa.me / whatsapp)
// fbq só existe após o consentimento de cookies → se não houver, os eventos são no-op.
export function MetaPixelEvents() {
  const pathname = usePathname()

  useEffect(() => {
    ;(window as any).fbq?.('track', 'PageView')
  }, [pathname])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest('a[href*="wa.me"], a[href*="whatsapp"]')
      if (!el) return
      ;(window as any).fbq?.('track', 'Contact', { content_name: 'WhatsApp' })
      ;(window as any).gtag?.('event', 'contact_whatsapp')
    }
    document.addEventListener('click', handler, { capture: true })
    return () => document.removeEventListener('click', handler, { capture: true })
  }, [])

  return null
}
