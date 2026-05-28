import type { Metadata } from 'next'
import Link from 'next/link'
import { bairros, regiaoLabel, type RegiaoTipo } from '@/data/bairros'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { waUrl } from '@/lib/whatsapp'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://primelineplanejados.com.br'
const WA_URL = waUrl('bairros')

export const metadata: Metadata = {
  title: 'Bairros Atendidos em BH | Móveis Planejados — Prime Line',
  description: 'A Prime Line atende toda Belo Horizonte com móveis planejados sob medida: Savassi, Belvedere, Buritis, Pampulha e mais de 35 bairros. Visita técnica gratuita.',
  alternates: { canonical: '/bairros' },
  openGraph: {
    title: 'Bairros Atendidos em BH — Prime Line Móveis Planejados',
    description: 'Móveis planejados sob medida em mais de 35 bairros de Belo Horizonte. Visita técnica gratuita, projeto 3D e orçamento sem compromisso.',
    type: 'website',
    url: `${siteUrl}/bairros`,
    locale: 'pt_BR',
    siteName: 'Prime Line Ambientes Planejados',
  },
}

const regioes: RegiaoTipo[] = ['alto', 'medio-alto', 'classe-media']

export default function BairrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="section section--dark">
        <div className="container text-center">
          <span className="label-caps text-gold-main mb-4 block">Atendimento em BH</span>
          <h1 className="font-display font-light text-4xl md:text-5xl text-white leading-tight mb-6">
            Bairros Atendidos<br className="hidden md:block" /> em Belo Horizonte
          </h1>
          <p className="font-body font-light text-base text-brand-300 max-w-xl mx-auto leading-relaxed">
            A Prime Line realiza visita técnica gratuita em toda Belo Horizonte e Região Metropolitana — desde Belvedere até Itapoã, do Buritis à Serra.
          </p>
        </div>
      </section>

      {/* Lista por região */}
      <section className="section section--cream">
        <div className="container">
          {regioes.map(regiao => {
            const lista = bairros.filter(b => b.regiao === regiao)
            return (
              <div key={regiao} className="mb-16 last:mb-0">
                <p className="label-caps text-gold-main mb-8">{regiaoLabel[regiao]}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {lista.map(b => (
                    <Link
                      key={b.slug}
                      href={`/bairros/${b.slug}`}
                      className="font-body text-sm text-brand-700 hover:text-gold-main border border-brand-200 hover:border-gold-main px-4 py-3 transition-colors duration-200 text-center"
                    >
                      {b.nome}
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="section section--dark">
        <div className="container text-center">
          <SectionTitle
            label="Não encontrou seu bairro?"
            title="Atendemos toda BH e Região Metropolitana"
            center
            light
          />
          <p className="font-body font-light text-base text-brand-300 mt-6 mb-10 max-w-lg mx-auto leading-relaxed">
            Se o seu bairro não está na lista, entre em contato. Atendemos toda a Grande BH com a mesma qualidade e visita técnica gratuita.
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
