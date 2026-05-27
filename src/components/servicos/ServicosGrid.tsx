'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { servicosResidenciais, servicosCorporativos } from '@/data/servicos'

type Tab = 'residencial' | 'corporativo'

const tabs: { value: Tab; label: string; sublabel: string }[] = [
  { value: 'residencial', label: 'Residencial', sublabel: 'Para o seu lar' },
  { value: 'corporativo', label: 'Corporativo', sublabel: 'Para o seu negócio' },
]

export function ServicosGrid() {
  const [ativa, setAtiva] = useState<Tab>('residencial')

  const itens = ativa === 'residencial' ? servicosResidenciais : servicosCorporativos
  const rodape = ativa === 'residencial'
    ? { texto: 'Veja projetos residenciais executados no nosso', linkHref: '/portfolio', linkTexto: 'portfólio →' }
    : { texto: 'Saiba mais no nosso', linkHref: '/blog/cozinha-planejada-mdf-ou-mdp', linkTexto: 'guia completo: MDF ou MDP para móveis planejados em BH →' }

  return (
    <section className="section section--cream">
      <div className="container">

        {/* Tabs */}
        <div className="flex gap-0 mb-16 border-b border-brand-200">
          {tabs.map(({ value, label, sublabel }) => (
            <button
              key={value}
              onClick={() => setAtiva(value)}
              className={`group flex flex-col items-start px-8 py-5 border-b-2 transition-colors duration-200 -mb-px ${
                ativa === value
                  ? 'border-gold-main text-brand-900'
                  : 'border-transparent text-brand-500 hover:text-brand-800 hover:border-brand-300'
              }`}
            >
              <span className={`label-caps mb-1 transition-colors duration-200 ${
                ativa === value ? 'text-gold-main' : 'text-brand-400 group-hover:text-brand-500'
              }`}>
                {sublabel}
              </span>
              <span className="font-display font-light text-2xl md:text-3xl leading-none">
                {label}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {itens.map(({ id, titulo, descricao, imagem, altText }) => (
            <div
              key={id}
              className="flex flex-col bg-brand-50 border border-brand-200 hover:border-gold-main transition-colors duration-300 overflow-hidden group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={imagem}
                  alt={altText}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-3 p-8">
                <span className="block gold-line" />
                <h3 className="label-caps text-brand-900 mt-2">{titulo}</h3>
                <p className="font-body font-light text-sm text-brand-600 leading-relaxed">{descricao}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 font-body font-light text-sm text-brand-500">
          {rodape.texto}{' '}
          <Link href={rodape.linkHref} className="text-gold-main hover:text-brand-900 transition-colors">
            {rodape.linkTexto}
          </Link>
        </p>

      </div>
    </section>
  )
}
