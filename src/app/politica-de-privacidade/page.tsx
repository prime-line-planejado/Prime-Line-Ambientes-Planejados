import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Privacidade | Prime Line Ambientes Planejados',
  description: 'Saiba como a Prime Line Ambientes Planejados coleta, usa e protege seus dados pessoais, em conformidade com a LGPD (Lei nº 13.709/2018).',
  alternates: { canonical: '/politica-de-privacidade' },
  robots: { index: false },
}

export default function PoliticaDePrivacidadePage() {
  const dataAtualizacao = '27 de maio de 2025'

  return (
    <main className="section bg-brand-50">
      <div className="container max-w-3xl mx-auto">

        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex items-center gap-2 font-body text-xs text-brand-500">
            <li><Link href="/" className="hover:text-gold-main transition-colors">Home</Link></li>
            <li aria-hidden="true">
              <svg viewBox="0 0 6 10" className="w-1.5 h-2.5 text-brand-400" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 1l4 4-4 4"/></svg>
            </li>
            <li className="text-brand-400" aria-current="page">Política de Privacidade</li>
          </ol>
        </nav>

        <p className="label-caps text-gold-main mb-4">LGPD — Lei nº 13.709/2018</p>
        <h1 className="font-display font-light text-4xl text-brand-900 mb-3 leading-tight">
          Política de Privacidade
        </h1>
        <p className="font-body text-xs text-brand-500 mb-12">Última atualização: {dataAtualizacao}</p>

        <div className="prose-prime space-y-10 font-body font-light text-base text-brand-700 leading-relaxed">

          <section>
            <h2 className="font-display font-light text-xl text-brand-900 mb-4">1. Quem somos</h2>
            <p>
              <strong className="font-semibold">Prime Line Ambientes Planejados</strong>, inscrita no CNPJ sob consulta, com sede na Rua David Maurílio Mourão, 113, Palmeiras, Belo Horizonte — MG, CEP 30575-340, é a controladora dos dados pessoais coletados por meio deste site (<strong>primelineplanejados.com.br</strong>).
            </p>
            <p className="mt-3">
              Dúvidas sobre esta política podem ser enviadas para <a href="mailto:contato@primelineplanejados.com.br" className="text-gold-main hover:text-brand-900 transition-colors">contato@primelineplanejados.com.br</a>.
            </p>
          </section>

          <section>
            <h2 className="font-display font-light text-xl text-brand-900 mb-4">2. Quais dados coletamos</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="font-semibold">Formulário de contato:</strong> nome, telefone/WhatsApp, e-mail (opcional), tipo de ambiente e mensagem.</li>
              <li><strong className="font-semibold">Newsletter:</strong> endereço de e-mail.</li>
              <li><strong className="font-semibold">Dados de navegação:</strong> endereço IP, tipo de navegador, páginas acessadas e duração da visita — coletados automaticamente via Google Analytics (quando consentido).</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-light text-xl text-brand-900 mb-4">3. Para que usamos seus dados</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Responder solicitações de orçamento e visita técnica.</li>
              <li>Enviar informações sobre projetos, tendências e novidades da Prime Line (somente para assinantes da newsletter).</li>
              <li>Melhorar a experiência de navegação no site.</li>
              <li>Cumprir obrigações legais e regulatórias.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-light text-xl text-brand-900 mb-4">4. Base legal (LGPD)</h2>
            <p>O tratamento dos seus dados é fundamentado em:</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li><strong className="font-semibold">Consentimento</strong> (art. 7º, I) — para envio de newsletter e uso de cookies analytics.</li>
              <li><strong className="font-semibold">Legítimo interesse</strong> (art. 7º, IX) — para resposta a contatos e solicitações de orçamento.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-light text-xl text-brand-900 mb-4">5. Compartilhamento de dados</h2>
            <p>
              Não vendemos nem compartilhamos seus dados com terceiros para fins comerciais. Podemos compartilhá-los apenas com prestadores de serviços essenciais ao funcionamento do site (ex: plataformas de e-mail transacional), sob obrigação contratual de confidencialidade.
            </p>
          </section>

          <section>
            <h2 className="font-display font-light text-xl text-brand-900 mb-4">6. Por quanto tempo guardamos seus dados</h2>
            <p>
              Dados de contato são mantidos pelo período necessário para atender à sua solicitação e, após, por até 5 anos para fins de registro e cumprimento de obrigações legais. Dados de newsletter são mantidos enquanto você permanecer inscrito.
            </p>
          </section>

          <section>
            <h2 className="font-display font-light text-xl text-brand-900 mb-4">7. Seus direitos</h2>
            <p>Conforme a LGPD, você tem direito a:</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Confirmar a existência de tratamento dos seus dados.</li>
              <li>Acessar, corrigir ou atualizar seus dados.</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação dos dados desnecessários.</li>
              <li>Revogar o consentimento a qualquer momento.</li>
              <li>Se opor ao tratamento realizado com base em legítimo interesse.</li>
            </ul>
            <p className="mt-3">
              Para exercer qualquer direito, envie um e-mail para <a href="mailto:contato@primelineplanejados.com.br" className="text-gold-main hover:text-brand-900 transition-colors">contato@primelineplanejados.com.br</a>.
            </p>
          </section>

          <section>
            <h2 className="font-display font-light text-xl text-brand-900 mb-4">8. Cookies</h2>
            <p>
              Utilizamos cookies essenciais para o funcionamento do site e cookies analíticos (Google Analytics) para entender como os visitantes interagem com nossas páginas. Você pode gerenciar suas preferências de cookies no banner exibido no primeiro acesso.
            </p>
          </section>

          <section>
            <h2 className="font-display font-light text-xl text-brand-900 mb-4">9. Segurança</h2>
            <p>
              Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, perda ou destruição, incluindo transmissão via HTTPS e armazenamento em servidores seguros.
            </p>
          </section>

          <section>
            <h2 className="font-display font-light text-xl text-brand-900 mb-4">10. Alterações nesta política</h2>
            <p>
              Esta política pode ser atualizada periodicamente. A data de "Última atualização" no topo da página indica a versão vigente. O uso continuado do site após alterações implica aceitação da nova versão.
            </p>
          </section>

        </div>

        <div className="mt-16 pt-8 border-t border-brand-200">
          <Link href="/contato" className="font-body text-sm text-gold-main hover:text-brand-900 transition-colors">
            ← Voltar para o Contato
          </Link>
        </div>
      </div>
    </main>
  )
}
