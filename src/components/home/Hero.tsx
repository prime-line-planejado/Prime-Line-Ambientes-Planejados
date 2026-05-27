import Image from 'next/image'
import { waUrl } from '@/lib/whatsapp'

export function Hero() {
  const WA_URL = waUrl('home')
  return (
    <section className="relative min-h-screen bg-brand-900 flex items-center justify-center overflow-hidden pt-16">
      {/* Background image (hero-bg.webp quando disponível) */}
      <Image
        src="/images/raw/hero-bg.jpg"
        alt="Cozinha planejada de alto padrão com iluminação LED — Prime Line Ambientes Planejados Belo Horizonte"
        fill priority loading="eager" quality={90}
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-brand-950/70 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-950/40 via-transparent to-brand-950/60 pointer-events-none" />

      <div className="relative z-10 container section text-center">
        <p className="label-caps text-gold-light mb-6 animate-fade-up">
          Ambientes Planejados de Alto Padrão — Belo Horizonte
        </p>

        <h1 className="font-display font-light text-5xl md:text-7xl text-brand-50 leading-tight mb-8 max-w-4xl mx-auto animate-fade-up animate-delay-1">
          Móveis Planejados em Belo Horizonte{' '}
          <em className="text-gold-light not-italic">que revelam quem você é</em>
        </h1>

        <p className="font-body font-light text-lg text-brand-300 max-w-xl mx-auto mb-12 leading-relaxed animate-fade-up animate-delay-2">
          Projetos exclusivos em marcenaria planejada residencial e corporativa. Da visita técnica à entrega, cada detalhe cuidado para você.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animate-delay-3">
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-solid">
            Solicitar Orçamento Gratuito
          </a>
          <a href="/portfolio" className="btn-outline">
            Ver Portfólio
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mt-10 animate-fade-up animate-delay-3">
          {[
            {
              icon: <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />,
              label: 'Entrega em 45–60 dias',
            },
            {
              icon: <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />,
              label: 'Parcelamos em até 24x',
            },
            {
              icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />,
              label: 'Garantia em todos os projetos',
            },
            {
              icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />,
              label: 'Visita técnica gratuita em BH',
            },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-brand-400">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-gold-main flex-shrink-0" aria-hidden="true">
                {icon}
              </svg>
              <span className="font-body font-light text-xs text-brand-300 whitespace-nowrap">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-main/30 to-transparent" />
    </section>
  )
}
