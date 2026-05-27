import { ContadorAnimado } from '@/components/ui/ContadorAnimado'

const stats: { valor: number | null; sufixo?: string; texto?: string; label: string }[] = [
  { valor: 500,  sufixo: '+',  label: 'Projetos entregues'     },
  { valor: 12,               label: 'Anos de experiência'    },
  { valor: 98,   sufixo: '%', label: 'Clientes satisfeitos'   },
  { valor: null, texto: 'BH', label: 'e região metropolitana' },
]

export function Numeros() {
  return (
    <section className="section--dark py-16">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(({ valor, sufixo, texto, label }, i) => (
            <div key={label} data-animate data-delay={String(i + 1) as '1'|'2'|'3'|'4'}>
              <p className="font-display font-light text-5xl md:text-6xl text-gold-light mb-3">
                {valor !== null
                  ? <ContadorAnimado valor={valor} sufixo={sufixo} />
                  : texto
                }
              </p>
              <p className="label-caps text-brand-400">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
