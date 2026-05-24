import type { Metadata } from 'next'
import { getTodosArtigos } from '@/lib/blog'
import { FiltroBlog } from '@/components/blog/FiltroBlog'
import { SectionTitle } from '@/components/ui/SectionTitle'
import type { Artigo } from '@/types'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Dicas, tendências e inspirações sobre móveis planejados, marcenaria de alto padrão e design de interiores em Belo Horizonte.',
}

export default function BlogPage() {
  const artigos = getTodosArtigos() as Artigo[]

  return (
    <>
      <section className="section section--dark">
        <div className="container text-center">
          <SectionTitle label="Conteúdo e inspiração" title="Blog Prime Line" center light />
          <p className="font-body font-light text-base text-brand-300 mt-6 max-w-xl mx-auto leading-relaxed">
            Dicas, tendências e inspirações para quem quer transformar seus ambientes com qualidade e estilo.
          </p>
        </div>
      </section>

      <section className="section bg-brand-50">
        <div className="container">
          {artigos.length === 0 ? (
            <p className="font-body text-center text-brand-400 py-20">Em breve novos artigos.</p>
          ) : (
            <FiltroBlog artigos={artigos} />
          )}
        </div>
      </section>
    </>
  )
}
