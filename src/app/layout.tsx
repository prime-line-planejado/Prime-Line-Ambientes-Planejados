import type { Metadata } from 'next'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://primelineplanejados.com.br'

export const metadata: Metadata = {
  title: 'Prime Line Ambientes Planejados | Móveis Planejados em Belo Horizonte',
  description: 'Transformamos espaços com móveis planejados de alto padrão. Cozinhas, quartos, escritórios e salas sob medida. Solicite um orçamento gratuito.',
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: 'Prime Line Ambientes Planejados',
    description: 'Móveis planejados de alto padrão em Belo Horizonte.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Prime Line Ambientes Planejados',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
