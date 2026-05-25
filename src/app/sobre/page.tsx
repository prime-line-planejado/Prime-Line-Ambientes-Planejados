import type { Metadata } from 'next'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { CtaContato } from '@/components/home/CtaContato'

export const metadata: Metadata = {
  title: 'Sobre Nós',
  description: 'Conheça a Prime Line Ambientes Planejados — marcenaria de alto padrão em Belo Horizonte com foco em exclusividade, qualidade e atendimento personalizado.',
  alternates: { canonical: '/sobre' },
}

const valores = [
  {
    titulo: 'Excelência',
    descricao: 'Cada projeto é tratado com o mesmo cuidado e atenção que dedicamos ao primeiro. Não existe projeto pequeno quando o resultado precisa ser impecável.',
  },
  {
    titulo: 'Exclusividade',
    descricao: 'Não trabalhamos com soluções prontas. Cada ambiente é projetado do zero, pensado para o espaço, o gosto e o ritmo de vida de cada cliente.',
  },
  {
    titulo: 'Transparência',
    descricao: 'Do orçamento à entrega, mantemos o cliente informado em cada etapa. Sem surpresas no prazo, no projeto ou no valor.',
  },
  {
    titulo: 'Comprometimento',
    descricao: 'Cumprimos o que prometemos. O prazo é respeitado, a montagem é limpa e o pós-venda existe de verdade.',
  },
]

export default function SobrePage() {
  return (
    <>
      {/* Hero sobre */}
      <section className="section section--dark">
        <div className="container max-w-4xl mx-auto">
          <p className="label-caps text-gold-light mb-6">Quem somos</p>
          <h1 className="font-display font-light text-5xl md:text-7xl text-brand-50 leading-tight mb-8">
            Criamos ambientes que<br />
            <em className="text-gold-light not-italic">refletem quem você é</em>
          </h1>
          <p className="font-body font-light text-lg text-brand-300 leading-relaxed max-w-2xl">
            A Prime Line nasceu da convicção de que um ambiente bem projetado transforma não apenas o espaço, mas a experiência de viver. Com anos de atuação em Belo Horizonte, reunimos uma equipe apaixonada por marcenaria de alto padrão, dedicada a transformar cada metro quadrado em algo único.
          </p>
        </div>
      </section>

      {/* Nossa história */}
      <section className="section section--cream">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle label="Nossa história" title="De Belo Horizonte para o seu lar" />
              <div className="mt-8 space-y-5 font-body font-light text-base text-brand-700 leading-relaxed">
                <p>
                  Fundada por profissionais com profunda experiência em design de interiores e marcenaria de precisão, a Prime Line se estabeleceu como referência em móveis planejados premium na capital mineira.
                </p>
                <p>
                  Trabalhamos com os melhores fornecedores de MDF, ferragens e acabamentos do país. Cada material é selecionado com rigor para garantir durabilidade, beleza e funcionalidade ao longo dos anos.
                </p>
                <p>
                  Nossa equipe de designers e marceneiros trabalha de forma integrada, do primeiro esboço à instalação final, garantindo que o resultado corresponda exatamente ao que foi projetado.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] bg-brand-200 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80"
                alt="Ateliê Prime Line — detalhes de marcenaria planejada"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section bg-brand-50">
        <div className="container">
          <div className="mb-16 text-center">
            <SectionTitle label="O que nos guia" title="Nossos valores" center />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {valores.map(({ titulo, descricao }) => (
              <div key={titulo} className="p-8 border border-brand-200 hover:border-gold-main transition-colors duration-300">
                <span className="block gold-line mb-6" />
                <p className="label-caps text-brand-900 mb-4">{titulo}</p>
                <p className="font-body font-light text-sm text-brand-600 leading-relaxed">{descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="section section--dark">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { numero: '500+', label: 'Projetos entregues' },
              { numero: '12', label: 'Anos de experiência' },
              { numero: '98%', label: 'Clientes satisfeitos' },
              { numero: 'BH', label: 'e região metropolitana' },
            ].map(({ numero, label }) => (
              <div key={label}>
                <p className="font-display font-light text-5xl text-gold-light mb-3">{numero}</p>
                <p className="label-caps text-brand-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaContato />
    </>
  )
}
