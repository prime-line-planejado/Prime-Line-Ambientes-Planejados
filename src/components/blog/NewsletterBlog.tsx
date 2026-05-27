'use client'

import { useState } from 'react'

export function NewsletterBlog() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="bg-brand-900 px-8 py-10 my-12">
      <div className="max-w-lg">
        <p className="label-caps text-gold-main mb-3">Newsletter</p>
        <h2 className="font-display font-light text-2xl text-brand-50 mb-2 leading-snug">
          Receba dicas e inspirações de design no seu e-mail
        </h2>
        <p className="font-body font-light text-sm text-brand-400 mb-6 leading-relaxed">
          Tendências de marcenaria, projetos do portfólio e conteúdo exclusivo — sem spam.
        </p>

        {status === 'success' ? (
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-gold-main flex-shrink-0">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <p className="font-body text-sm text-brand-200">
              Cadastro confirmado! Em breve você receberá novidades da Prime Line.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-0">
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
              disabled={status === 'loading'}
              className="flex-1 px-4 py-3 bg-brand-800 border border-brand-700 border-r-0 font-body text-sm text-brand-100 placeholder:text-brand-600 focus:outline-none focus:border-brand-500 transition-colors disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-6 py-3 bg-gold-main hover:bg-gold-light text-brand-900 font-body font-semibold text-xs tracking-widest uppercase transition-colors duration-200 whitespace-nowrap disabled:opacity-60"
            >
              {status === 'loading' ? '…' : 'Quero receber'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="font-body text-xs text-red-400 mt-2">
            Erro ao cadastrar. Tente novamente.
          </p>
        )}
      </div>
    </div>
  )
}
