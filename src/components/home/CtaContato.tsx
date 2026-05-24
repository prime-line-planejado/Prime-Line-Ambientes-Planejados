const WA_URL = 'https://wa.me/5531998156666?text=Ol%C3%A1!%20Vi%20o%20trabalho%20de%20voc%C3%AAs%20%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.%20Pode%20me%20contar%20como%20funciona%20o%20processo%3F'

export function CtaContato() {
  return (
    <section className="section section--dark">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <p className="label-caps text-gold-light mb-6">Dê o primeiro passo</p>
          <h2 className="font-display font-light text-4xl md:text-6xl text-brand-50 mb-6 leading-tight">
            Transforme seu espaço<br />
            <em className="text-gold-light not-italic">com quem entende de beleza</em>
          </h2>
          <p className="font-body font-light text-base text-brand-300 mb-10 leading-relaxed">
            Agende uma visita técnica gratuita e receba um projeto personalizado sem compromisso.
          </p>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-solid inline-flex gap-3">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.527 5.855L0 24l6.318-1.498A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.007-1.37l-.36-.213-3.75.889.934-3.638-.236-.374A9.762 9.762 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
            </svg>
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
