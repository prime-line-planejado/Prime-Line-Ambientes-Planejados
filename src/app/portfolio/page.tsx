import type { Metadata } from 'next'
import { FiltroPortfolio } from '@/components/portfolio/FiltroPortfolio'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { CtaContato } from '@/components/home/CtaContato'

export const metadata: Metadata = {
  title: 'Portfólio',
  description: 'Conheça nossos projetos de móveis planejados residenciais e corporativos em Belo Horizonte. Cozinhas, closets, escritórios e muito mais.',
}

export default function PortfolioPage() {
  return (
    <>
      {/* Header da página */}
      <section className="section section--dark pb-16">
        <div className="container text-center">
          <SectionTitle
            label="Nosso trabalho"
            title="Portfólio de Projetos"
            center
            light
          />
          <p className="font-body font-light text-base text-brand-300 mt-6 max-w-xl mx-auto leading-relaxed">
            Cada projeto é único — desenvolvido sob medida para o espaço e estilo de vida de cada cliente.
          </p>
        </div>
      </section>

      {/* Grid com filtro */}
      <section className="section bg-brand-50">
        <div className="container">
          <FiltroPortfolio />
        </div>
      </section>

      <CtaContato />
    </>
  )
}
