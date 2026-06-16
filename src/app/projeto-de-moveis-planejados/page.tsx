import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { waUrl } from '@/lib/whatsapp'
import { CalcProjeto, PRECO_M2 } from '@/components/projeto/CalcProjeto'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://primelineplanejados.com.br'
const WA_URL = waUrl('projeto')
const brl = (v: number) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

// Exemplos-âncora — preço calculado pela ÁREA DO AMBIENTE (m²) × PRECO_M2.
const exemplos = [
  { amb: 'Cozinha', m2: 9 },
  { amb: 'Quarto + closet', m2: 12 },
  { amb: 'Sala de estar', m2: 18 },
  { amb: 'Apartamento completo', m2: 50 },
]

export const metadata: Metadata = {
  title: 'Projeto de Móveis Planejados 3D — Compre Só o Projeto | Prime Line',
  description:
    'Compre o projeto completo dos seus móveis planejados (3D + plano de corte + lista de materiais + medidas técnicas) por R$80/m² e execute com qualquer marceneiro. Economize até 50% cortando loja e intermediário. Atendimento em todo o Brasil.',
  alternates: { canonical: '/projeto-de-moveis-planejados' },
  openGraph: {
    title: 'Projeto de Móveis Planejados — Compre Só o Projeto e Economize até 50%',
    description:
      'Projeto 3D + plano de corte + lista de materiais + medidas por R$80/m². Execute com qualquer marceneiro e economize cortando a loja. Prime Line.',
    type: 'website',
    url: `${siteUrl}/projeto-de-moveis-planejados`,
    locale: 'pt_BR',
    siteName: 'Prime Line Ambientes Planejados',
    images: [{ url: `${siteUrl}/images/raw/hero-bg.jpg`, width: 1200, height: 630, alt: 'Projeto de móveis planejados 3D — Prime Line' }],
  },
}

const entregas = [
  { titulo: 'Projeto 3D realista', desc: 'Render fotorrealista de cada ambiente, com cores, texturas e iluminação reais — você vê o resultado antes de fabricar.' },
  { titulo: 'Plano de corte completo', desc: 'Todas as peças com dimensões exatas para o marceneiro cortar o MDF sem desperdício e sem erro.' },
  { titulo: 'Lista completa de materiais', desc: 'Chapas, ferragens, corrediças, dobradiças e acessórios — tudo especificado para você orçar e comprar certo.' },
  { titulo: 'Medidas técnicas detalhadas', desc: 'Cada módulo cotado milimetricamente, com vistas e detalhes construtivos para execução precisa.' },
  { titulo: 'Orientação para execução', desc: 'Instruções e suporte para o marceneiro montar exatamente como projetado — sem improviso.' },
]

const passos = [
  { n: '01', t: 'Você fala com a gente', d: 'Manda as medidas e fotos do ambiente pelo WhatsApp. Sem visita obrigatória — atendemos o Brasil todo.' },
  { n: '02', t: 'Desenvolvemos o projeto', d: 'Criamos o projeto 3D, o plano de corte, a lista de materiais e as medidas técnicas.' },
  { n: '03', t: 'Você aprova', d: 'Revisamos juntos até ficar do seu jeito. Só fecha quando estiver 100%.' },
  { n: '04', t: 'Você executa onde quiser', d: 'Recebe os arquivos e leva pra qualquer marceneiro de confiança — pelo preço real, sem comissão de loja.' },
]

const paraQuem = [
  'Quem quer móvel planejado pagando até 50% menos',
  'Quem já tem um marceneiro de confiança',
  'Arquitetos e designers que precisam do detalhamento técnico',
  'Quem está fora de Belo Horizonte (atendemos o Brasil todo)',
]

const faq = [
  { pergunta: 'O que exatamente eu recebo no projeto?', resposta: 'Você recebe o projeto 3D realista, o plano de corte completo, a lista completa de materiais, as medidas técnicas detalhadas e a orientação para execução. Tudo o que o seu marceneiro precisa para fabricar os móveis exatamente como projetado.' },
  { pergunta: 'Por que sai até 50% mais barato?', resposta: 'Uma loja de planejados cobra o projeto, o móvel, a comissão do vendedor e a margem da loja em um pacote só. Comprando apenas o projeto profissional com a Prime Line e contratando a execução direto com um marceneiro, você paga o preço real do móvel — sem os intermediários.' },
  { pergunta: `Quanto custa o projeto?`, resposta: `O projeto custa ${brl(PRECO_M2)} por metro quadrado de área do ambiente. Ou seja, multiplique a metragem do cômodo por ${PRECO_M2}: uma cozinha de 9 m², por exemplo, fica em torno de ${brl(9 * PRECO_M2)}. Use a calculadora nesta página para estimar, e o valor final é confirmado após entendermos o escopo.` },
  { pergunta: 'Vocês atendem fora de Belo Horizonte?', resposta: 'Sim. Como vendemos o projeto (e não o móvel físico), atendemos clientes em todo o Brasil. Todo o processo é feito à distância pelo WhatsApp, com base nas medidas e fotos do seu ambiente.' },
  { pergunta: 'Eu preciso ter um marceneiro?', resposta: 'O ideal é ter um marceneiro de confiança para executar. Se não tiver, podemos orientar sobre o que procurar e como avaliar orçamentos de execução. O projeto é feito para que qualquer marceneiro qualificado consiga fabricar.' },
  { pergunta: 'E se eu quiser que a Prime Line faça e instale o móvel?', resposta: 'Em Belo Horizonte e Região Metropolitana, a Prime Line também fabrica e instala com equipe própria. Conheça o serviço completo na nossa página de serviços.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Projeto de móveis planejados (3D, plano de corte e lista de materiais)',
  name: 'Projeto de Móveis Planejados — Prime Line',
  description: 'Projeto completo de móveis planejados para execução: projeto 3D, plano de corte, lista de materiais, medidas técnicas e orientação para execução. Compre só o projeto e execute com qualquer marceneiro.',
  url: `${siteUrl}/projeto-de-moveis-planejados`,
  provider: {
    '@type': 'HomeAndConstructionBusiness',
    name: 'Prime Line Ambientes Planejados',
    url: siteUrl,
    telephone: '+5531998156666',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua David Maurílio Mourão, 113',
      addressLocality: 'Belo Horizonte', addressRegion: 'MG', postalCode: '30575-340', addressCountry: 'BR',
    },
  },
  areaServed: { '@type': 'Country', name: 'Brasil' },
  offers: {
    '@type': 'Offer',
    price: String(PRECO_M2),
    priceCurrency: 'BRL',
    description: 'Valor por metro quadrado de móvel projetado',
    availability: 'https://schema.org/InStock',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(({ pergunta, resposta }) => ({
    '@type': 'Question', name: pergunta, acceptedAnswer: { '@type': 'Answer', text: resposta },
  })),
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Projeto de Móveis Planejados', item: `${siteUrl}/projeto-de-moveis-planejados` },
  ],
}

const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.527 5.855L0 24l6.318-1.498A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.007-1.37l-.36-.213-3.75.889.934-3.638-.236-.374A9.762 9.762 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
  </svg>
)

export default function ProjetoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="section section--dark">
        <div className="container text-center">
          <span className="label-caps text-gold-main mb-4 block">Compre só o projeto</span>
          <h1 className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
            Projeto de Móveis Planejados<br className="hidden md:block" /> — economize até 50%
          </h1>
          <p className="font-body font-light text-base md:text-lg text-brand-300 max-w-2xl mx-auto leading-relaxed mb-4">
            Você compra o <strong className="text-white">projeto completo</strong> (3D + plano de corte + lista de materiais + medidas)
            e executa com <strong className="text-white">qualquer marceneiro</strong>. Sem loja, sem comissão, sem intermediário.
          </p>
          <p className="font-display font-light text-3xl text-gold-main mb-10">
            R${PRECO_M2}/m² de área do ambiente
          </p>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-solid inline-flex items-center gap-3">
            <WaIcon /> Pedir meu projeto
          </a>
        </div>
      </section>

      {/* O que você recebe */}
      <section className="section section--cream">
        <div className="container">
          <div className="mb-12 text-center" data-animate>
            <SectionTitle label="O que você recebe" title="Tudo pronto para fabricar" center />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {entregas.map(({ titulo, desc }, i) => (
              <div key={titulo} data-animate data-delay={String(Math.min((i % 3) + 1, 3)) as '1' | '2' | '3'} className="p-6 border border-brand-200 bg-white">
                <span className="block gold-line mb-4" />
                <h3 className="font-body font-semibold text-sm text-brand-900 mb-2">{titulo}</h3>
                <p className="font-body font-light text-sm text-brand-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="section section--dark">
        <div className="container">
          <div className="mb-12 text-center" data-animate>
            <SectionTitle label="Como funciona" title="Do contato à execução em 4 passos" center light />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {passos.map(({ n, t, d }) => (
              <div key={n} className="p-6 border border-brand-800">
                <span className="font-display font-light text-gold-main text-3xl block mb-3">{n}</span>
                <h3 className="font-body font-semibold text-sm text-brand-100 mb-2">{t}</h3>
                <p className="font-body font-light text-sm text-brand-400 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que economiza */}
      <section className="section section--cream">
        <div className="container max-w-3xl text-center">
          <SectionTitle label="Por que sai mais barato" title="Você corta a loja, não a qualidade" center />
          <p className="font-body font-light text-base text-brand-700 leading-relaxed mt-8">
            Uma loja de planejados cobra o <strong>projeto + o móvel + a comissão do vendedor + a margem da loja</strong> em
            um pacote só. Comprando apenas o <strong>projeto profissional</strong> com a Prime Line e contratando a execução
            direto com um marceneiro, você paga o <strong>preço real do móvel</strong> — e fica com o controle total da obra.
            É a mesma engenharia de projeto dos móveis de alto padrão, por uma fração do custo.
          </p>
        </div>
      </section>

      {/* Calculadora */}
      <section className="section section--dark">
        <div className="container">
          <div className="mb-10 text-center" data-animate>
            <SectionTitle label="Simule agora" title="Quanto custa o seu projeto?" center light />
          </div>
          <CalcProjeto />

          <div className="max-w-md mx-auto mt-10 border-t border-brand-800 pt-8">
            <p className="label-caps text-brand-500 mb-5 text-center">Exemplos por área do ambiente</p>
            <ul className="space-y-3">
              {exemplos.map(({ amb, m2 }) => (
                <li key={amb} className="flex items-center justify-between font-body text-sm">
                  <span className="text-brand-300">{amb} <span className="text-brand-500">· ~{m2} m²</span></span>
                  <span className="text-gold-main font-semibold">{brl(m2 * PRECO_M2)}</span>
                </li>
              ))}
            </ul>
            <p className="font-body text-[11px] text-brand-500 text-center mt-5">
              Valores de referência do projeto. O final depende do escopo de cada ambiente.
            </p>
          </div>
        </div>
      </section>

      {/* Pra quem é */}
      <section className="section section--cream">
        <div className="container max-w-3xl">
          <div className="mb-8" data-animate>
            <SectionTitle label="Para quem é" title="Esse modelo é ideal se você é..." />
          </div>
          <ul className="space-y-4">
            {paraQuem.map((item) => (
              <li key={item} className="flex items-start gap-3 font-body font-light text-base text-brand-700">
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gold-main flex-shrink-0 mt-0.5" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--dark">
        <div className="container max-w-3xl">
          <div className="mb-12 text-center" data-animate>
            <SectionTitle label="Dúvidas frequentes" title="Perguntas sobre o projeto" light center />
          </div>
          <div className="space-y-4">
            {faq.map(({ pergunta, resposta }, i) => (
              <div key={i} className="border border-brand-800 p-6">
                <h3 className="font-body font-semibold text-sm text-brand-100 mb-3">{pergunta}</h3>
                <p className="font-body font-light text-sm text-brand-400 leading-relaxed">{resposta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--cream">
        <div className="container text-center">
          <SectionTitle label="Pronto para economizar?" title="Peça o projeto dos seus móveis planejados" center />
          <p className="font-body font-light text-base text-brand-600 mt-6 mb-10 max-w-lg mx-auto leading-relaxed">
            Fale com a gente pelo WhatsApp, mande as medidas do ambiente e receba o projeto completo para executar onde quiser.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-solid inline-flex items-center gap-3 justify-center">
              <WaIcon /> Pedir meu projeto
            </a>
            <Link href="/servicos" className="btn-outline inline-flex items-center justify-center">
              Ver serviço completo (BH)
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
