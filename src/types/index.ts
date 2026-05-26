export type Categoria = 'Todos' | 'Residencial' | 'Corporativo'

export type CategoriaBlog = 'Todos' | 'Dicas' | 'Tendências' | 'Materiais' | 'Projetos' | 'Residencial' | 'Corporativo'

export interface Projeto {
  id: string
  titulo: string
  descricao: string
  categoria: Exclude<Categoria, 'Todos'>
  imagem: string
  altText: string
  local?: string
  ano?: number
  destaque?: boolean
}

export interface Depoimento {
  id: string
  nome: string
  local: string
  texto: string
  projeto?: string
  nota?: 1 | 2 | 3 | 4 | 5
}

export interface Servico {
  id: string
  titulo: string
  descricao: string
  categoria: 'Residencial' | 'Corporativo'
  icon: React.ReactNode
}

export interface Artigo {
  title: string
  slug: string
  description: string
  date: string
  categoria: string
  tags?: string[]
  imagem?: string
  autor?: string
  tempoLeitura: string
  content?: string
}

export interface EtapaProcesso {
  numero: string
  titulo: string
  descricao: string
}
