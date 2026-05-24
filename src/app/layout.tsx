import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/layout/WhatsAppButton'
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
    title: 'Prime Line Ambientes Planejados',
    description: 'Projetos exclusivos em marcenaria planejada de alto padrão em Belo Horizonte.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Prime Line Ambientes Planejados',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
