'use client'

import { useState } from 'react'
import { SectionTitle } from '@/components/ui/SectionTitle'

const faqs = [
  {
    pergunta: 'Quanto tempo leva para entregar móveis planejados?',
    resposta:
      'O prazo médio é de 45 a 60 dias após a aprovação do projeto e assinatura do contrato. Esse tempo inclui a fabricação sob medida, transporte e montagem técnica no local. Para projetos maiores, como apartamentos completos, o prazo pode ser ajustado conforme o escopo.',
  },
  {
    pergunta: 'Como funciona a visita técnica?',
    resposta:
      'A visita técnica é gratuita e sem compromisso. Um de nossos especialistas vai até o seu imóvel, mede os ambientes, entende o seu estilo de vida e apresenta as possibilidades de projeto. Após a visita, desenvolvemos uma proposta personalizada.',
  },
  {
    pergunta: 'Qual é a área de atendimento da Prime Line?',
    resposta:
      'Atendemos toda a região de Belo Horizonte e municípios da Grande BH, incluindo bairros como Savassi, Belvedere, Lourdes, Funcionários, Buritis, Sion, Carmo, Mangabeiras, Alphaville Lagoa dos Ingleses e região.',
  },
  {
    pergunta: 'Quais ambientes vocês projetam?',
    resposta:
      'Projetamos todos os ambientes residenciais e corporativos: cozinhas planejadas, closets, dormitórios, home offices, salas integradas, banheiros, lavanderias, áreas de serviço e escritórios completos.',
  },
  {
    pergunta: 'Os móveis têm garantia?',
    resposta:
      'Sim. Todos os projetos da Prime Line têm garantia formal contra defeitos de fabricação e instalação. Trabalhamos com marcas reconhecidas no mercado de ferragens, painéis e acabamentos, o que assegura durabilidade e qualidade ao longo dos anos.',
  },
  {
    pergunta: 'Qual é o investimento em móveis planejados?',
    resposta:
      'O investimento varia conforme o ambiente, a metragem e os materiais escolhidos. Projetos residenciais partem de R$ 12.000 para ambientes menores, como dormitórios e home offices, e chegam a valores maiores em projetos completos com cozinha, closet e sala integrada. Oferecemos orçamento detalhado e gratuito após a visita técnica — sem surpresas no valor final.',
  },
  {
    pergunta: 'Vocês trabalham com financiamento?',
    resposta:
      'Sim, oferecemos condições de parcelamento. Entre em contato pelo WhatsApp para conhecer as opções disponíveis e encontrar a que melhor se encaixa no seu planejamento.',
  },
  {
    pergunta: 'Quais materiais vocês utilizam na fabricação dos móveis?',
    resposta:
      'Trabalhamos exclusivamente com painéis MDF de alta resistência, com acabamentos em laca, fórmica, madeirado e espelhado. Utilizamos ferragens importadas de marcas reconhecidas como Blum e Grass, além de vidros, mármores e aços inox conforme o projeto. Todos os materiais são selecionados para garantir durabilidade e acabamento premium.',
  },
]

export function FAQ() {
  const [aberto, setAberto] = useState<number | null>(null)

  return (
    <section className="section section--cream">
      <div className="container">
        <div className="mb-16 text-center" data-animate>
          <SectionTitle label="Tire suas dúvidas" title="Perguntas Frequentes" center />
        </div>
        <div className="max-w-3xl mx-auto divide-y divide-brand-200" data-animate data-delay="1">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setAberto(aberto === i ? null : i)}
                className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                aria-expanded={aberto === i}
              >
                <span className="font-body font-light text-base text-brand-900 group-hover:text-brand-600 transition-colors leading-snug">
                  {faq.pergunta}
                </span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className={`w-5 h-5 flex-shrink-0 text-gold-main transition-transform duration-300 ${aberto === i ? 'rotate-45' : ''}`}
                >
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                </svg>
              </button>
              {aberto === i && (
                <p className="pb-6 font-body font-light text-sm text-brand-600 leading-relaxed">
                  {faq.resposta}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
