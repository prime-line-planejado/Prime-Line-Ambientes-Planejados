import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/layout/WhatsAppButton'
import { CookieBanner } from '@/components/layout/CookieBanner'
import { ExitIntent } from '@/components/layout/ExitIntent'
import { ScrollAnimations } from '@/components/ui/ScrollAnimations'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://primelineplanejados.com.br'

export const metadata: Metadata = {
  title: {
    default: 'Prime Line Ambientes Planejados | Móveis Planejados em Belo Horizonte',
    template: '%s | Prime Line Planejados',
  },
  description:
    'Projetos exclusivos em marcenaria planejada de alto padrão. Cozinhas, quartos, closets, escritórios e salas sob medida em Belo Horizonte. Orçamento gratuito.',
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: 'Prime Line Ambientes Planejados | Móveis Planejados em Belo Horizonte',
    description: 'Projetos exclusivos em marcenaria planejada de alto padrão em Belo Horizonte. Cozinhas, closets, quartos e escritórios sob medida. Orçamento gratuito.',
    type: 'website',
    url: siteUrl,
    locale: 'pt_BR',
    siteName: 'Prime Line Ambientes Planejados',
    images: [
      {
        url: `${siteUrl}/images/raw/hero-bg.jpg`,
        width: 1200,
        height: 630,
        alt: 'Prime Line Ambientes Planejados — Móveis Planejados de Alto Padrão em Belo Horizonte',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prime Line Ambientes Planejados | Móveis Planejados em BH',
    description: 'Marcenaria planejada de alto padrão em Belo Horizonte. Cozinhas, closets e ambientes sob medida.',
    images: [`${siteUrl}/images/raw/hero-bg.jpg`],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.ico',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="antialiased">
        <ScrollAnimations />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
        <ExitIntent />
      </body>
    </html>
  )
}
