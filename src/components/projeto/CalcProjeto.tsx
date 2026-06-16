'use client'

import { useState } from 'react'
import { WA_NUMBER } from '@/lib/whatsapp'

// Preço do PROJETO por m² (não do móvel). Centralizado p/ ajuste fácil.
export const PRECO_M2 = 80

const fmt = (v: number) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

export function CalcProjeto() {
  const [m2, setM2] = useState('')
  const n = parseFloat(m2.replace(',', '.'))
  const valido = !isNaN(n) && n > 0
  const total = valido ? n * PRECO_M2 : 0

  const msg = valido
    ? `Olá! Quero um projeto de móveis planejados de aproximadamente ${n} m² (estimativa de ${fmt(total)} no site). Podem me explicar como funciona?`
    : 'Olá! Quero saber sobre o projeto de móveis planejados (3D + plano de corte + lista de materiais). Como funciona?'
  const wa = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`

  return (
    <div className="bg-brand-50 border border-brand-200 p-8 max-w-md mx-auto">
      <p className="label-caps text-brand-700 mb-2">Calculadora</p>
      <h3 className="font-display font-light text-2xl text-brand-900 mb-6">
        Estime o seu projeto
      </h3>

      <label className="block font-body text-sm text-brand-600 mb-2" htmlFor="m2">
        Quantos m² de móveis você quer projetar?
      </label>
      <div className="flex items-center gap-2 mb-6">
        <input
          id="m2"
          type="number"
          inputMode="decimal"
          min="0"
          step="0.5"
          value={m2}
          onChange={(e) => setM2(e.target.value)}
          placeholder="ex: 12"
          className="flex-1 px-4 py-3 bg-white border border-brand-300 text-brand-900 text-lg focus:outline-none focus:border-gold-main"
        />
        <span className="font-body text-sm text-brand-500">m²</span>
      </div>

      <div className="border-t border-brand-200 pt-6">
        <p className="font-body text-xs text-brand-500 mb-1">Estimativa do projeto completo</p>
        <p className="font-display font-light text-4xl text-brand-900">
          {valido ? fmt(total) : '—'}
        </p>
        <p className="font-body text-xs text-brand-500 mt-2 leading-relaxed">
          {fmt(PRECO_M2)}/m² — valor do <strong className="font-semibold text-brand-700">projeto</strong> (3D,
          plano de corte, lista de materiais, medidas e orientação). Não inclui a fabricação do móvel.
        </p>
      </div>

      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-solid w-full inline-flex items-center justify-center gap-3 mt-6"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.527 5.855L0 24l6.318-1.498A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-5.007-1.37l-.36-.213-3.75.889.934-3.638-.236-.374A9.762 9.762 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
        </svg>
        Pedir meu projeto no WhatsApp
      </a>
      <p className="font-body text-[11px] text-brand-400 text-center mt-3">
        Estimativa. O valor final é confirmado após entendermos o seu projeto.
      </p>
    </div>
  )
}
