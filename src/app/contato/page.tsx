import type { Metadata } from 'next'
import { SectionTitle } from '@/components/ui/SectionTitle'

const WA_URL = 'https://wa.me/5531998156666?text=Ol%C3%A1!%20Vi%20o%20trabalho%20de%20voc%C3%AAs%20%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.%20Pode%20me%20contar%20como%20funciona%20o%20processo%3F'

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com a Prime Line Ambientes Planejados. Agende uma visita técnica gratuita e receba um projeto personalizado em Belo Horizonte.',
}

export default function ContatoPage() {
  return (
    <>
      {/* Header */}
      <section className="section section--dark">
        <div className="container text-center">
          <SectionTitle label="Fale conosco" title="Vamos criar algo incrível juntos" center light />
          <p className="font-body font-light text-base text-brand-300 mt-6 max-w-xl mx-auto leading-relaxed">
            Entre em contato para agendar sua visita técnica gratuita. Sem compromisso, sem burocracia.
          </p>
        </div>
      </section>

      {/* Contato grid */}
      <section className="section section--cream">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            {/* Informações */}
            <div>
              <SectionTitle label="Informações" title="Como nos encontrar" />
              <div className="mt-8 space-y-8">
                <div>
                  <p className="label-caps text-brand-700 mb-2">WhatsApp</p>
                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display font-light text-2xl text-brand-900 hover:text-gold-main transition-colors"
                  >
                    (31) 9 9815-6666
                  </a>
                </div>
                <div>
                  <p className="label-caps text-brand-700 mb-2">Localização</p>
                  <p className="font-body font-light text-base text-brand-700 leading-relaxed">
                    Belo Horizonte, MG<br />
                    Atendemos toda a região metropolitana
                  </p>
                </div>
                <div>
                  <p className="label-caps text-brand-700 mb-2">Horário de atendimento</p>
                  <p className="font-body font-light text-base text-brand-700 leading-relaxed">
                    Segunda a sexta: 8h às 18h<br />
                    Sábados: 9h às 13h
                  </p>
                </div>
              </div>

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

            {/* Processo resumido */}
            <div className="bg-brand-50 p-8 border border-brand-200">
              <p className="label-caps text-brand-700 mb-6">O que acontece depois</p>
              <div className="space-y-6">
                {[
                  { n: '01', t: 'Você entra em contato', d: 'Pelo WhatsApp ou formulário — sem compromisso.' },
                  { n: '02', t: 'Visita técnica gratuita', d: 'Nossa equipe vai até você medir e entender o espaço.' },
                  { n: '03', t: 'Projeto personalizado', d: 'Recebe o projeto 3D e o orçamento detalhado.' },
                  { n: '04', t: 'Aprovação e produção', d: 'Com sua aprovação, iniciamos a fabricação sob medida.' },
                  { n: '05', t: 'Entrega e montagem', d: 'Instalação pela nossa equipe técnica, sem sujeira.' },
                ].map(({ n, t, d }) => (
                  <div key={n} className="flex gap-4">
                    <span className="font-display font-light text-gold-main text-xl w-8 flex-shrink-0">{n}</span>
                    <div>
                      <p className="font-body font-semibold text-xs text-brand-800 mb-1">{t}</p>
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
