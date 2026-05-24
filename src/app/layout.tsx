import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://primelineplanejados.com.br'

export const metadata: Metadata = {
  title: 'Prime Line Ambientes Planejados | Móveis Planejados em Belo Horizonte',
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
    <html lang="pt-BR">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
