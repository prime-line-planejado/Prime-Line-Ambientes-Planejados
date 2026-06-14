import type { Metadata } from 'next'
import Link from 'next/link'
import { cidades } from '@/data/cidades'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { waUrl } from '@/lib/whatsapp'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://primelineplanejados.com.br'
const WA_URL = waUrl('cidades')

export const metadata: Metadata = {
  title: 'Cidades Atendidas na Grande BH | Móveis Planejados — Prime Line',
  description: 'A Prime Line atende toda a Região Metropolitana de Belo Horizonte com móveis planejados sob medida: Nova Lima, Contagem, Betim, Lagoa Santa, Sabará e mais. Visita técnica gratuita.',
  alternates: { canonical: '/cidades' },
  openGraph: {
    title: 'Cidades Atendidas na Grande BH — Prime Line Móveis Planejados',
    description: 'Móveis planejados sob medida em Nova Lima, Contagem, Betim, Lagoa Santa e toda a Região Metropolitana de BH. Visita técnica gratuita.',
    type: 'website',
    url: `${siteUrl}/cidades`,
    locale: 'pt_BR',
    siteName: 'Prime Line Ambientes Planejados',
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',    item: siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Cidades', item: `${siteUrl}/cidades` },
  ],
}

export default function CidadesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <section className="section section--dark">
        <div className="container text-center">
          <span className="label-caps text-gold-main mb-4 block">Região Metropolitana de BH</span>
          <h1 className="font-display font-light text-4xl md:text-5xl text-white leading-tight mb-6">
            Cidades Atendidas<br className="hidden md:block" /> na Grande BH
          </h1>
          <p className="font-body font-light text-base text-brand-300 max-w-2xl mx-auto leading-relaxed">
            Além de Belo Horizonte, a Prime Line atende toda a Região Metropolitana com móveis
            planejados sob medida — de condomínios de alto padrão a bairros residenciais e populares,
            com a mesma qualidade e visita técnica gratuita em todas as cidades.
          </p>
        </div>
      </section>

      {/* Lista de cidades */}
      <section className="section section--cream">
        <div className="container">
          <p className="label-caps text-gold-main mb-8">Cidades da Grande BH</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cidades.map(c => (
              <Link
                key={c.slug}
                href={`/cidades/${c.slug}`}
                className="group flex flex-col gap-2 p-6 border border-brand-200 hover:border-gold-main bg-white transition-colors duration-200"
              >
                <span className="font-display text-xl text-brand-900 group-hover:text-gold-main transition-colors">{c.nome}</span>
                <span className="font-body font-light text-sm text-brand-500 leading-relaxed">{c.destaque}</span>
                <span className="font-body text-xs text-gold-dark group-hover:text-gold-main transition-colors mt-2">Móveis planejados em {c.nome} →</span>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3 items-center">
            <span className="font-body font-light text-sm text-brand-600">Procura por bairro de BH?</span>
            <Link
              href="/bairros"
              className="font-body text-sm text-brand-700 hover:text-gold-main border border-brand-300 hover:border-gold-main px-4 py-2 transition-colors duration-200"
            >
              Ver bairros atendidos em Belo Horizonte →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--dark">
        <div className="container text-center">
          <SectionTitle
            label="Não encontrou sua cidade?"
            title="Atendemos toda a Região Metropolitana"
            center
            light
          />
          <p className="font-body font-light text-base text-brand-300 mt-6 mb-10 max-w-lg mx-auto leading-relaxed">
            Se a sua cidade não está na lista, fale com a gente. Atendemos toda a Grande BH com a
            mesma qualidade e visita técnica gratuita.
          </p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid inline-flex items-center gap-3"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.527 5.855L0 24l6.318-1.498A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.007-1.37l-.36-.213-3.75.889.934-3.638-.236-.374A9.762 9.762 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
            </svg>
            Falar pelo WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
