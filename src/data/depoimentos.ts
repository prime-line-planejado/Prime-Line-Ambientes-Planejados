import type { Depoimento } from '@/types'

// Avaliações REAIS do Google Meu Negócio (perfil Prime Line Ambientes Planejados).
// NÃO inventar depoimentos: o markup de review do schema reflete estas avaliações
// genuínas. Ao conquistar novas avaliações no Google, adicione aqui e atualize o
// aggregateRating/review[] em src/app/page.tsx (reviewCount = total real).
export const depoimentos: Depoimento[] = [
  {
    id: 'd1',
    nome: 'Joacmedeiros Medeiros',
    local: 'Avaliação no Google',
    texto: 'Desde o atendimento até o término. Super recomendo.',
    nota: 5,
  },
  {
    id: 'd2',
    nome: 'Fanny Santana',
    local: 'Avaliação no Google',
    texto:
      'Empresa maravilhosa, quando fui atendida eles foram bem receptivos e me mostraram um projeto maravilhoso, mas quando entregaram, eu fiquei abismada, parabéns pela equipe, obrigado Prime Line, sucesso! 🤍🌿',
    nota: 5,
  },
]
