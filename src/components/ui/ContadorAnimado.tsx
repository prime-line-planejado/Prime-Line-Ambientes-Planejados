'use client'

import { useEffect, useRef, useState } from 'react'

interface Props {
  valor: number
  sufixo?: string
  prefixo?: string
  duracao?: number
  className?: string
}

function easeOut(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

export function ContadorAnimado({ valor, sufixo = '', prefixo = '', duracao = 1800, className }: Props) {
  const [atual, setAtual] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const iniciado = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || iniciado.current) return
        iniciado.current = true
        observer.disconnect()

        const inicio = performance.now()

        function tick(agora: number) {
          const elapsed = agora - inicio
          const progress = Math.min(elapsed / duracao, 1)
          setAtual(Math.round(easeOut(progress) * valor))
          if (progress < 1) requestAnimationFrame(tick)
        }

        requestAnimationFrame(tick)
      },
      { threshold: 0.3 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [valor, duracao])

  return (
    <span ref={ref} className={className}>
      {prefixo}{atual}{sufixo}
    </span>
  )
}
