import { SectionTitle } from '@/components/ui/SectionTitle'

const itens = [
  {
    titulo: 'Projeto Exclusivo',
    descricao: 'Cada ambiente é projetado do zero, desenvolvido para o seu espaço e estilo de vida.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    titulo: 'Materiais Premium',
    descricao: 'Painéis, ferragens e acabamentos selecionados entre os melhores do mercado.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    titulo: 'Entrega e Montagem',
    descricao: 'Instalação técnica com prazo cumprido, acabamento impecável e zero sujeira.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    titulo: 'Garantia Completa',
    descricao: 'Confiança respaldada por garantia formal em todos os produtos e serviços.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
]

export function Diferenciais() {
  return (
    <section className="section section--cream">
      <div className="container">
        <div className="mb-16 text-center" data-animate>
          <SectionTitle label="Por que nos escolher" title="Compromisso com cada detalhe" center />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {itens.map(({ titulo, descricao, icon }, i) => (
            <div
              key={titulo}
              data-animate
              data-delay={String(i + 1) as '1' | '2' | '3' | '4'}
              className="flex flex-col gap-5 p-8 bg-brand-50 border border-brand-200 hover:border-gold-main transition-colors duration-300"
            >
              <span className="text-gold-main">{icon}</span>
              <div>
                <h3 className="label-caps text-brand-900 mb-3">{titulo}</h3>
                <p className="font-body font-light text-sm text-brand-600 leading-relaxed">{descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
