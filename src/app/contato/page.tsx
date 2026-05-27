import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { waUrl } from '@/lib/whatsapp'
import { FormularioContato } from '@/components/contato/FormularioContato'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://primelineplanejados.com.br'
const WA_URL = waUrl('contato')
const MAPS_URL = 'https://maps.google.com/?q=Rua+David+Maurilio+Mourão,+113,+Palmeiras,+Belo+Horizonte+MG+30575-340'

export const metadata: Metadata = {
  title: 'Contato e Orçamento Gratuito | Móveis Planejados em Belo Horizonte — Prime Line',
  description:
    'Solicite seu orçamento gratuito de móveis planejados em Belo Horizonte. Visita técnica sem compromisso, projeto 3D personalizado e atendimento pelo WhatsApp. Ligue: (31) 9 9815-6666.',
  alternates: { canonical: '/contato' },
  openGraph: {
    title: 'Contato | Orçamento Gratuito de Móveis Planejados em BH — Prime Line',
    description:
      'Agende sua visita técnica gratuita. Atendemos em Belo Horizonte e região. Fale pelo WhatsApp (31) 9 9815-6666.',
    type: 'website',
    url: `${siteUrl}/contato`,
    locale: 'pt_BR',
    siteName: 'Prime Line Ambientes Planejados',
    images: [
      {
        url: `${siteUrl}/images/raw/hero-bg.jpg`,
        width: 1200,
        height: 630,
        alt: 'Entre em contato com a Prime Line — Móveis Planejados em Belo Horizonte',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contato | Orçamento Gratuito — Prime Line BH',
    description: 'Visita técnica gratuita e orçamento sem compromisso. WhatsApp: (31) 9 9815-6666.',
    images: [`${siteUrl}/images/raw/hero-bg.jpg`],
  },
}

const contactPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contato — Prime Line Ambientes Planejados',
  description: 'Entre em contato para agendar visita técnica gratuita e receber orçamento de móveis planejados em Belo Horizonte.',
  url: `${siteUrl}/contato`,
  mainEntity: {
    '@type': 'HomeAndConstructionBusiness',
    name: 'Prime Line Ambientes Planejados',
    url: siteUrl,
    telephone: '+5531998156666',
    email: 'contato@primelineplanejados.com.br',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua David Maurílio Mourão, 113',
      addressLocality: 'Belo Horizonte',
      addressRegion: 'MG',
      postalCode: '30575-340',
      addressCountry: 'BR',
      addressNeighborhood: 'Palmeiras',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -19.9543,
      longitude: -43.9777,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '13:00',
      },
    ],
    areaServed: { '@type': 'City', name: 'Belo Horizonte' },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+5531998156666',
      contactType: 'customer service',
      availableLanguage: 'Portuguese',
    },
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Contato', item: `${siteUrl}/contato` },
  ],
}

const etapas = [
  { n: '01', t: 'Você entra em contato', d: 'Pelo WhatsApp — sem compromisso.' },
  { n: '02', t: 'Visita técnica gratuita', d: 'Nossa equipe vai até você medir e entender o espaço.' },
  { n: '03', t: 'Projeto personalizado', d: 'Recebe o projeto 3D e o orçamento detalhado.' },
  { n: '04', t: 'Aprovação e produção', d: 'Com sua aprovação, iniciamos a fabricação sob medida.' },
  { n: '05', t: 'Entrega e montagem', d: 'Instalação pela nossa equipe técnica, sem sujeira.' },
]

export default function ContatoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Header */}
      <section className="section section--dark">
        <div className="container text-center">

          {/* Breadcrumb visual */}
          <nav aria-label="Breadcrumb" className="flex justify-center mb-8">
            <ol className="flex items-center gap-2 font-body text-xs text-brand-500">
              <li><Link href="/" className="hover:text-gold-light transition-colors">Home</Link></li>
              <li aria-hidden="true">
                <svg viewBox="0 0 6 10" className="w-1.5 h-2.5 text-brand-700" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 1l4 4-4 4"/></svg>
              </li>
              <li className="text-brand-400" aria-current="page">Contato</li>
            </ol>
          </nav>

          <SectionTitle as="h1" label="Fale conosco" title="Orçamento Gratuito de Móveis Planejados em BH" center light />
          <p className="font-body font-light text-base text-brand-300 mt-6 max-w-xl mx-auto leading-relaxed">
            Visita técnica gratuita, projeto 3D personalizado e orçamento sem compromisso em Belo Horizonte.
          </p>
        </div>
      </section>

      {/* Contato grid */}
      <section className="section section--cream">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Informações */}
            <div>
              <SectionTitle label="Informações" title="Como nos encontrar em BH" />
              <address className="mt-8 space-y-8 not-italic">

                <div>
                  <p className="label-caps text-brand-700 mb-2">WhatsApp</p>
                  <div className="flex flex-col gap-1">
                    <a
                      href={WA_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display font-light text-2xl text-brand-900 hover:text-gold-main transition-colors"
                    >
                      (31) 9 9815-6666
                    </a>
                    <a
                      href="tel:+5531998156666"
                      className="font-body text-xs text-brand-500 hover:text-gold-main transition-colors"
                    >
                      Toque para ligar
                    </a>
                  </div>
                </div>

                <div>
                  <p className="label-caps text-brand-700 mb-2">Endereço</p>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body font-light text-base text-brand-700 leading-relaxed hover:text-gold-main transition-colors block"
                  >
                    Rua David Maurílio Mourão, 113<br />
                    Palmeiras — Belo Horizonte, MG<br />
                    CEP 30575-340
                  </a>
                </div>

                <div>
                  <p className="label-caps text-brand-700 mb-2">Horário de atendimento</p>
                  <p className="font-body font-light text-base text-brand-700 leading-relaxed">
                    Segunda a sexta: <strong className="font-normal">8h às 18h</strong><br />
                    Sábados: <strong className="font-normal">9h às 13h</strong>
                  </p>
                </div>

              </address>

              <div className="mt-10">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-solid inline-flex gap-3"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.527 5.855L0 24l6.318-1.498A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.007-1.37l-.36-.213-3.75.889.934-3.638-.236-.374A9.762 9.762 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
                  </svg>
                  Iniciar conversa no WhatsApp
                </a>
              </div>
            </div>

            {/* Formulário */}
            <div>
              <SectionTitle label="Formulário" title="Envie uma mensagem" />
              <div className="mt-8">
                <FormularioContato />
              </div>
            </div>

            {/* Processo resumido */}
            <div className="bg-brand-50 p-8 border border-brand-200">
              <p className="label-caps text-brand-700 mb-6">O que acontece depois</p>
              <div className="space-y-6">
                {etapas.map(({ n, t, d }) => (
                  <div key={n} className="flex gap-4">
                    <span className="font-display font-light text-gold-main text-xl w-8 flex-shrink-0">{n}</span>
                    <div>
                      <h3 className="font-body font-semibold text-xs text-brand-800 mb-1">{t}</h3>
                      <p className="font-body font-light text-xs text-brand-500 leading-relaxed">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
