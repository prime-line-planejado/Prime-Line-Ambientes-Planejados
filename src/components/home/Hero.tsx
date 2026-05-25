import Image from 'next/image'

const WA_URL = 'https://wa.me/5531998156666?text=Ol%C3%A1!%20Vi%20o%20trabalho%20de%20voc%C3%AAs%20%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.%20Pode%20me%20contar%20como%20funciona%20o%20processo%3F'

export function Hero() {
  return (
    <section className="relative min-h-screen bg-brand-900 flex items-center justify-center overflow-hidden pt-16">
      {/* Background image (hero-bg.webp quando disponível) */}
      <Image
        src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1920&q=85"
        alt="Cozinha planejada de alto padrão com iluminação LED — Prime Line Ambientes Planejados Belo Horizonte"
        fill priority quality={90}
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
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-main/30 to-transparent" />
    </section>
  )
}
