import { depoimentos } from '@/data/depoimentos'
import { SectionTitle } from '@/components/ui/SectionTitle'

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
        <div className="mb-16 text-center">
          <SectionTitle label="O que dizem nossos clientes" title="Histórias reais" center light />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {depoimentos.map(({ id, nome, local, texto, projeto, nota }) => (
            <div key={id} className="flex flex-col gap-6 p-8 border border-brand-800 hover:border-gold-dark transition-colors duration-300">

              {/* Estrelas */}
              {nota && <Estrelas nota={nota} />}

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

        {/* Link Google Reviews */}
        <p className="mt-10 text-center font-body font-light text-xs text-brand-600">
          Veja mais avaliações no{' '}
          <a
            href="https://www.google.com/maps/search/Prime+Line+Ambientes+Planejados+Belo+Horizonte"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-dark hover:text-gold-main transition-colors"
          >
            Google Maps →
          </a>
        </p>
      </div>
    </section>
  )
}
