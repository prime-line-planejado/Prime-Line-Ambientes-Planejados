import { depoimentos } from '@/data/depoimentos'
import { SectionTitle } from '@/components/ui/SectionTitle'

export function Depoimentos() {
  return (
    <section className="section section--dark">
      <div className="container">
        <div className="mb-16 text-center">
          <SectionTitle label="O que dizem nossos clientes" title="Histórias reais" center light />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {depoimentos.map(({ id, nome, local, texto, projeto }) => (
            <div key={id} className="flex flex-col gap-6 p-8 border border-brand-800 hover:border-gold-dark transition-colors duration-300">
              {/* Aspas douradas */}
              <svg viewBox="0 0 32 24" className="w-8 h-6 text-gold-main flex-shrink-0" fill="currentColor" aria-hidden="true">
                <path d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0l1.6 2.4C10.4 3.6 7.6 6.4 7.2 10.4H12V24H0zm18 0V14.4C18 6.4 22.8 1.6 32.4 0L34 2.4C28.4 3.6 25.6 6.4 25.2 10.4H30V24H18z"/>
              </svg>
              <p className="font-body font-light text-sm text-brand-300 leading-relaxed flex-1">{texto}</p>
              <div className="border-t border-brand-800 pt-5">
                <p className="font-display text-base text-brand-100">{nome}</p>
                <p className="label-caps text-brand-600 mt-1">{local}</p>
                {projeto && <p className="font-body text-xs text-gold-dark mt-1 italic">{projeto}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
