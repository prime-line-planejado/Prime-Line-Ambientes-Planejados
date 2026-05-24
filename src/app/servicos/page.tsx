import type { Metadata } from 'next'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { CtaContato } from '@/components/home/CtaContato'
import { servicosResidenciais, servicosCorporativos, etapasProcesso } from '@/data/servicos'

export const metadata: Metadata = {
  title: 'Serviços',
  description: 'Conheça todos os serviços da Prime Line: cozinhas, closets, quartos, salas, home offices e ambientes corporativos sob medida em Belo Horizonte.',
}

export default function ServicosPage() {
  return (
    <>
      {/* Header */}
      <section className="section section--dark">
        <div className="container text-center">
          <SectionTitle label="O que fazemos" title="Serviços" center light />
          <p className="font-body font-light text-base text-brand-300 mt-6 max-w-xl mx-auto leading-relaxed">
            Da cozinha ao escritório — criamos ambientes planejados completos, com projeto exclusivo e materiais de primeira linha.
          </p>
        </div>
      </section>

      {/* Residencial */}
      <section className="section section--cream">
        <div className="container">
          <div className="mb-16">
            <SectionTitle label="Para o seu lar" title="Residencial" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {servicosResidenciais.map(({ id, titulo, descricao }) => (
              <div key={id} className="flex flex-col gap-4 p-8 bg-brand-50 border border-brand-200 hover:border-gold-main transition-colors duration-300">
                <span className="block gold-line" />
                <p className="label-caps text-brand-900 mt-2">{titulo}</p>
                <p className="font-body font-light text-sm text-brand-600 leading-relaxed">{descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporativo */}
      <section className="section bg-brand-50">
        <div className="container">
          <div className="mb-16">
            <SectionTitle label="Para o seu negócio" title="Corporativo" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {servicosCorporativos.map(({ id, titulo, descricao }) => (
              <div key={id} className="flex flex-col gap-4 p-8 bg-brand-100 border border-brand-200 hover:border-gold-main transition-colors duration-300">
                <span className="block gold-line" />
                <p className="label-caps text-brand-900 mt-2">{titulo}</p>
                <p className="font-body font-light text-sm text-brand-600 leading-relaxed">{descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="section section--dark">
        <div className="container">
          <div className="mb-16 text-center">
            <SectionTitle label="Como trabalhamos" title="Nosso processo" center light />
          </div>
          <div className="max-w-3xl mx-auto">
            {etapasProcesso.map(({ numero, titulo, descricao }, i) => (
              <div key={numero} className="flex gap-8 pb-12 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 flex items-center justify-center border border-gold-main text-gold-light font-display font-light text-lg flex-shrink-0">
                    {numero}
                  </div>
                  {i < etapasProcesso.length - 1 && (
                    <div className="w-px flex-1 bg-brand-800 mt-3" />
                  )}
                </div>
                <div className="pb-2">
                  <p className="label-caps text-gold-light mb-3">{titulo}</p>
                  <p className="font-body font-light text-sm text-brand-300 leading-relaxed">{descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaContato />
    </>
  )
}
