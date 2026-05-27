'use client'

import { useActionState } from 'react'
import { enviarContato, type ContatoState } from '@/app/actions/contato'
import { waUrl } from '@/lib/whatsapp'

const ambientes = [
  'Cozinha Planejada',
  'Closet',
  'Quarto / Dormitório',
  'Sala / Home Office',
  'Corporativo',
  'Projeto Completo',
  'Outro',
]

const initial: ContatoState = { status: 'idle' }

export function FormularioContato() {
  const [state, action, pending] = useActionState(enviarContato, initial)

  if (state.status === 'ok') {
    return (
      <div className="p-10 bg-brand-900 text-center" role="status" aria-live="polite">
        <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center border border-gold-main">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-gold-main">
            <path d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <p className="label-caps text-gold-main mb-3">Mensagem recebida</p>
        <p className="font-display font-light text-2xl text-brand-50 mb-3">
          Entraremos em contato em breve!
        </p>
        <p className="font-body font-light text-sm text-brand-400 leading-relaxed mb-8 max-w-xs mx-auto">
          Nossa equipe analisará seu projeto e retornará pelo WhatsApp ou e-mail em até 1 dia útil.
        </p>
        <a
          href={waUrl('contato')}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-solid inline-flex gap-2"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.527 5.855L0 24l6.318-1.498A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.007-1.37l-.36-.213-3.75.889.934-3.638-.236-.374A9.762 9.762 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
          </svg>
          Falar agora pelo WhatsApp
        </a>
      </div>
    )
  }

  const noApiKey = state.status === 'error' && state.message === 'no_api_key'

  return (
    <form action={action} className="space-y-5">

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="nome" className="label-caps text-brand-700 mb-2 block">
            Nome completo <span className="text-gold-main">*</span>
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            autoComplete="name"
            placeholder="Seu nome"
            className="w-full border border-brand-200 bg-white px-4 py-3 font-body font-light text-sm text-brand-900 placeholder-brand-400 focus:outline-none focus:border-gold-main transition-colors"
          />
        </div>

        <div>
          <label htmlFor="telefone" className="label-caps text-brand-700 mb-2 block">
            Telefone / WhatsApp <span className="text-gold-main">*</span>
          </label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(31) 9 0000-0000"
            className="w-full border border-brand-200 bg-white px-4 py-3 font-body font-light text-sm text-brand-900 placeholder-brand-400 focus:outline-none focus:border-gold-main transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="label-caps text-brand-700 mb-2 block">
            E-mail <span className="font-body font-light text-xs text-brand-500 normal-case tracking-normal">(opcional)</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="seu@email.com"
            className="w-full border border-brand-200 bg-white px-4 py-3 font-body font-light text-sm text-brand-900 placeholder-brand-400 focus:outline-none focus:border-gold-main transition-colors"
          />
        </div>

        <div>
          <label htmlFor="ambiente" className="label-caps text-brand-700 mb-2 block">
            Tipo de ambiente <span className="text-gold-main">*</span>
          </label>
          <select
            id="ambiente"
            name="ambiente"
            required
            defaultValue=""
            className="w-full border border-brand-200 bg-white px-4 py-3 font-body font-light text-sm text-brand-900 focus:outline-none focus:border-gold-main transition-colors appearance-none"
          >
            <option value="" disabled>Selecione o ambiente</option>
            {ambientes.map(a => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="mensagem" className="label-caps text-brand-700 mb-2 block">
          Mensagem <span className="font-body font-light text-xs text-brand-500 normal-case tracking-normal">(opcional)</span>
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={4}
          placeholder="Conte um pouco sobre o seu projeto — metragem, estilo, prazo..."
          className="w-full border border-brand-200 bg-white px-4 py-3 font-body font-light text-sm text-brand-900 placeholder-brand-400 focus:outline-none focus:border-gold-main transition-colors resize-none"
        />
      </div>

      {state.status === 'error' && !noApiKey && (
        <p className="font-body text-xs text-red-600">{state.message}</p>
      )}

      {noApiKey ? (
        <div className="p-4 bg-brand-100 border border-brand-200 text-center">
          <p className="font-body font-light text-sm text-brand-700 mb-3">
            Formulário temporariamente indisponível. Fale diretamente pelo WhatsApp:
          </p>
          <a
            href={waUrl('contato')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid inline-flex gap-2 text-sm"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      ) : (
        <button
          type="submit"
          disabled={pending}
          className="btn-solid w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {pending ? 'Enviando...' : 'Enviar mensagem'}
        </button>
      )}

    </form>
  )
}
