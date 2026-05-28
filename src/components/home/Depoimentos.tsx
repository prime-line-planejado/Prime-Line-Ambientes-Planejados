import { depoimentos } from '@/data/depoimentos'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { GOOGLE_MAPS_PROFILE, GOOGLE_REVIEW_URL } from '@/lib/google'

function GoogleLogo() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  )
}

function Estrelas({ nota }: { nota: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${nota} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill={i < nota ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="1"
          className={`w-4 h-4 ${i < nota ? 'text-gold-main' : 'text-brand-700'}`}
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function Iniciais({ nome }: { nome: string }) {
  const partes = nome.trim().split(' ')
  const iniciais = partes.length >= 2
    ? `${partes[0][0]}${partes[partes.length - 1][0]}`
    : partes[0].slice(0, 2)
  return iniciais.toUpperCase()
}

export function Depoimentos() {
  return (
    <section className="section section--dark">
      <div className="container">
        <div className="mb-16 text-center" data-animate>
          <SectionTitle label="O que dizem nossos clientes" title="Histórias reais" center light />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {depoimentos.map(({ id, nome, local, texto, projeto, nota }, i) => (
            <div key={id} data-animate data-delay={String(Math.min((i % 3) + 1, 3)) as '1' | '2' | '3'} className="flex flex-col gap-6 p-8 border border-brand-800 hover:border-gold-dark transition-colors duration-300">

              {/* Topo: estrelas + logo Google */}
              <div className="flex items-center justify-between">
                {nota && <Estrelas nota={nota} />}
                <div className="flex items-center gap-1.5 opacity-60">
                  <GoogleLogo />
                  <span className="font-body text-xs text-brand-500">Google</span>
                </div>
              </div>

              {/* Texto */}
              <p className="font-body font-light text-sm text-brand-300 leading-relaxed flex-1">{texto}</p>

              {/* Rodapé */}
              <div className="border-t border-brand-800 pt-5 flex items-center gap-4">
                {/* Avatar com iniciais */}
                <div
                  className="w-10 h-10 rounded-full bg-brand-800 border border-brand-700 flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <span className="font-display font-light text-xs text-gold-main tracking-widest">
                    <Iniciais nome={nome} />
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-display text-base text-brand-100">{nome}</p>
                  <p className="label-caps text-brand-600 mt-0.5">{local}</p>
                  {projeto && <p className="font-body text-xs text-gold-dark mt-1 italic">{projeto}</p>}
                </div>

                {/* Badge verificado */}
                <div className="flex-shrink-0" title="Cliente verificado">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gold-main" aria-label="Cliente verificado">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Google Reviews */}
        <div className="mt-12 flex flex-col items-center gap-3">
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 border border-brand-700 hover:border-gold-dark bg-brand-900 hover:bg-brand-800 transition-colors duration-300"
            aria-label="Avaliar a Prime Line no Google"
          >
            <GoogleLogo />
            <span className="font-body text-sm text-brand-200">Avaliar no Google</span>
          </a>
          <a
            href={GOOGLE_MAPS_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body font-light text-xs text-brand-600 hover:text-gold-dark transition-colors"
          >
            Ver todas as avaliações no Google Maps →
          </a>
        </div>
      </div>
    </section>
  )
}
