'use client'

import { useState, useEffect, useRef } from 'react'

const STORAGE_KEY = 'pl_exit_intent_shown'
const DELAY_MS = 20_000
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY

type Status = 'idle' | 'sending' | 'success' | 'error'

export function ExitIntent() {
  const [open, setOpen] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const firedRef = useRef(false)

  function show() {
    if (firedRef.current) return
    if (sessionStorage.getItem(STORAGE_KEY)) return
    firedRef.current = true
    sessionStorage.setItem(STORAGE_KEY, '1')
    setOpen(true)
  }

  useEffect(() => {
    // Trigger 1: mouse leaves viewport toward top
    function onMouseLeave(e: MouseEvent) {
      if (e.clientY <= 5) show()
    }

    // Trigger 2: time-based fallback
    const timer = setTimeout(show, DELAY_MS)

    document.addEventListener('mouseleave', onMouseLeave)
    return () => {
      document.removeEventListener('mouseleave', onMouseLeave)
      clearTimeout(timer)
    }
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `[Prime Line] Lead via exit-intent — ${nome}`,
          from_name: nome,
          email,
          message: `Lead capturado pelo popup de exit-intent. Nome: ${nome} | E-mail: ${email}`,
        }),
      })
      const data = await res.json()
      setStatus(data.success ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Oferta especial"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-950/80 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}
    >
      <div className="relative w-full max-w-md bg-brand-900 border border-brand-700 p-8 md:p-10 shadow-2xl">
        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-brand-500 hover:text-brand-200 transition-colors"
          aria-label="Fechar"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {status === 'success' ? (
          <div className="text-center py-4">
            <div className="w-12 h-12 rounded-full bg-gold-main/10 flex items-center justify-center mx-auto mb-4">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-gold-main">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-display font-light text-2xl text-brand-50 mb-2">Recebemos seu contato!</h3>
            <p className="font-body font-light text-sm text-brand-400 leading-relaxed">
              Nossa equipe entrará em contato em até 24 horas para agendar sua visita técnica.
            </p>
            <button
              onClick={() => setOpen(false)}
              className="mt-6 btn-primary w-full justify-center"
            >
              Fechar
            </button>
          </div>
        ) : (
          <>
            {/* Label */}
            <p className="label-caps text-gold-main mb-3">Oferta exclusiva</p>

            {/* Headline */}
            <h2 className="font-display font-light text-2xl md:text-3xl text-brand-50 leading-snug mb-3">
              Visita técnica gratuita + orçamento sem compromisso
            </h2>
            <p className="font-body font-light text-sm text-brand-400 leading-relaxed mb-6">
              Deixe seu contato e nossa equipe agenda a visita no horário mais conveniente para você — em qualquer bairro de BH.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Seu nome"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full bg-brand-800 border border-brand-700 focus:border-gold-main outline-none px-4 py-3 font-body font-light text-sm text-brand-100 placeholder:text-brand-600 transition-colors"
              />
              <input
                type="email"
                placeholder="Seu e-mail"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-brand-800 border border-brand-700 focus:border-gold-main outline-none px-4 py-3 font-body font-light text-sm text-brand-100 placeholder:text-brand-600 transition-colors"
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary justify-center mt-1 disabled:opacity-60"
              >
                {status === 'sending' ? 'Enviando…' : 'Quero agendar minha visita gratuita'}
              </button>
            </form>

            {status === 'error' && (
              <p className="mt-3 font-body text-xs text-red-400 text-center">
                Erro ao enviar. Tente pelo{' '}
                <a
                  href="https://wa.me/5531971916235"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-gold-dark"
                >
                  WhatsApp
                </a>
                .
              </p>
            )}

            <p className="mt-4 font-body text-xs text-brand-600 text-center">
              Sem spam. Só entraremos em contato para agendar sua visita.
            </p>
          </>
        )}
      </div>
    </div>
  )
}
