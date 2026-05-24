import Image from 'next/image'

const whatsapp    = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '5531998156666'
const whatsappUrl = `https://wa.me/5531998156666?text=Ol%C3%A1!%20Vi%20o%20trabalho%20de%20voc%C3%AAs%20%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.%20Pode%20me%20contar%20como%20funciona%20o%20processo%3F`

/* ─── Diferenciais ─────────────────────────────────────────────────── */
const diferenciais = [
  {
    label: 'Projeto Exclusivo',
    desc: 'Cada ambiente é projetado do zero, desenvolvido para o seu espaço e estilo de vida.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    label: 'Materiais Premium',
    desc: 'Painéis, ferragens e acabamentos selecionados entre os melhores fornecedores do mercado.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    label: 'Entrega e Montagem',
    desc: 'Instalação realizada pela nossa equipe técnica, com prazo cumprido e acabamento impecável.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    label: 'Garantia Completa',
    desc: 'Confiança respaldada por garantia formal em todos os produtos e serviços entregues.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
]

/* ─── Portfólio ────────────────────────────────────────────────────── */
const portfolio = [
  {
    src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80',
    alt: 'Cozinha planejada moderna',
    label: 'Cozinha Moderna',
    cat: 'Cozinha',
  },
  {
    src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80',
    alt: 'Cozinha com bancada em ilha',
    label: 'Cozinha com Ilha',
    cat: 'Cozinha',
  },
  {
    src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
    alt: 'Sala de estar planejada',
    label: 'Sala Integrada',
    cat: 'Sala',
  },
  {
    src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80',
    alt: 'Quarto com closet planejado',
    label: 'Suíte Master',
    cat: 'Quarto',
  },
  {
    src: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=800&q=80',
    alt: 'Home office planejado',
    label: 'Home Office',
    cat: 'Escritório',
  },
  {
    src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
    alt: 'Cozinha clássica planejada',
    label: 'Cozinha Clássica',
    cat: 'Cozinha',
  },
]

/* ─── Depoimentos ──────────────────────────────────────────────────── */
const depoimentos = [
  {
    quote: 'A Prime Line transformou completamente nossa cozinha. Cada detalhe foi pensado para o nosso jeito de viver. Qualidade impecável e equipe atenciosa do início ao fim.',
    name: 'Fernanda Alvarenga',
    city: 'Lourdes, BH',
  },
  {
    quote: 'Finalmente um projeto que realmente ouviu o que queríamos. O closet ficou além do que imaginávamos. Recomendo sem hesitar.',
    name: 'Rodrigo e Camila Sousa',
    city: 'Buritis, BH',
  },
  {
    quote: 'Profissionalismo em cada etapa. O prazo foi cumprido, a montagem foi limpa e o resultado é deslumbrante. Já indicamos para três amigos.',
    name: 'Marcela Drummond',
    city: 'Savassi, BH',
  },
]

/* ─── Page ─────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-screen bg-brand-900 flex items-center justify-center overflow-hidden pt-16">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/60 via-transparent to-brand-950/40 pointer-events-none" />

        <div className="relative z-10 container-xl section-pad text-center">
          <p className="label-caps text-gold-500 mb-6 tracking-caps">
            Ambientes Planejados de Alto Padrão
          </p>

          <h1 className="heading-serif text-5xl md:text-7xl text-brand-50 mb-8 max-w-3xl mx-auto">
            Espaços que revelam{' '}
            <em className="text-gold-400 not-italic">a essência de você</em>
          </h1>

          <p className="font-sans font-light text-lg text-brand-300 max-w-xl mx-auto mb-12 leading-relaxed">
            Projetos exclusivos em marcenaria planejada, concebidos para transformar ambientes em experiências únicas de bem-viver.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-solid">
              Solicitar Orçamento
            </a>
            <a href="#portfolio" className="btn-outline">
              Ver Portfólio
            </a>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
      </section>

      {/* ── DIFERENCIAIS ──────────────────────────────────────────── */}
      <section id="diferenciais" className="bg-brand-100">
        <div className="container-xl section-pad px-6">
          <div className="text-center mb-16">
            <p className="label-caps text-gold-600 mb-4">Por que nos escolher</p>
            <h2 className="heading-serif text-4xl md:text-5xl text-brand-900">
              Compromisso com cada detalhe
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {diferenciais.map(({ label, desc, icon }) => (
              <div
                key={label}
                className="flex flex-col items-start gap-5 p-8 bg-brand-50 border border-brand-200 hover:border-gold-400 transition-colors duration-300"
              >
                <span className="text-gold-500">{icon}</span>
                <div>
                  <p className="label-caps text-brand-900 mb-3">{label}</p>
                  <p className="font-sans font-light text-sm text-brand-600 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFÓLIO ─────────────────────────────────────────────── */}
      <section id="portfolio" className="bg-brand-50">
        <div className="container-xl section-pad px-6">
          <div className="text-center mb-16">
            <p className="label-caps text-gold-600 mb-4">Nosso trabalho</p>
            <h2 className="heading-serif text-4xl md:text-5xl text-brand-900">
              Portfólio
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolio.map(({ src, alt, label, cat }) => (
              <div key={label} className="group relative overflow-hidden aspect-[4/3] bg-brand-200">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/60 transition-colors duration-300" />
                <div className="absolute bottom-0 inset-x-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="label-caps text-gold-400 mb-1">{cat}</p>
                  <p className="font-serif font-light text-xl text-brand-50">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ───────────────────────────────────────────── */}
      <section id="depoimentos" className="bg-brand-900">
        <div className="container-xl section-pad px-6">
          <div className="text-center mb-16">
            <p className="label-caps text-gold-500 mb-4">O que dizem nossos clientes</p>
            <h2 className="heading-serif text-4xl md:text-5xl text-brand-50">
              Histórias reais
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {depoimentos.map(({ quote, name, city }) => (
              <div
                key={name}
                className="flex flex-col gap-6 p-8 border border-brand-800 hover:border-gold-600 transition-colors duration-300"
              >
                {/* Aspas em dourado */}
                <svg viewBox="0 0 32 24" fill="none" className="w-8 h-6 text-gold-500" aria-hidden="true">
                  <path d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0l1.6 2.4C10.4 3.6 7.6 6.4 7.2 10.4H12V24H0zm18 0V14.4C18 6.4 22.8 1.6 32.4 0L34 2.4C28.4 3.6 25.6 6.4 25.2 10.4H30V24H18z" fill="currentColor"/>
                </svg>

                <p className="font-sans font-light text-sm text-brand-300 leading-relaxed flex-1">
                  {quote}
                </p>

                <div className="border-t border-brand-800 pt-5">
                  <p className="font-serif text-base text-brand-100">{name}</p>
                  <p className="label-caps text-brand-600 mt-1">{city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────────────── */}
      <section id="contato" className="bg-brand-800">
        <div className="container-xl section-pad px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="label-caps text-gold-400 mb-6">Dê o primeiro passo</p>
            <h2 className="heading-serif text-4xl md:text-6xl text-brand-50 mb-6">
              Transforme seu espaço<br />
              <em className="text-gold-400 not-italic">com quem entende de beleza</em>
            </h2>
            <p className="font-sans font-light text-base text-brand-300 mb-10 leading-relaxed">
              Agende uma visita técnica gratuita e receba um projeto personalizado sem compromisso.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-solid inline-flex gap-3"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.527 5.855L0 24l6.318-1.498A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.007-1.37l-.36-.213-3.75.889.934-3.638-.236-.374A9.762 9.762 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
              </svg>
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
