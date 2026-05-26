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
      <div className="p-8 bg-brand-50 border border-brand-200 text-center">
        <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center border border-gold-main">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-gold-main">
            <path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="font-display font-light text-2xl text-brand-900 mb-2">Mensagem enviada!</p>
        <p className="font-body font-light text-sm text-brand-600">
          Nossa equipe entrará em contato em breve. Se preferir resposta imediata, fale pelo WhatsApp.
        </p>
        <a
          href={waUrl('contato')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 font-body text-sm text-gold-main hover:text-brand-900 transition-colors"
        >
          Falar agora pelo WhatsApp →
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
