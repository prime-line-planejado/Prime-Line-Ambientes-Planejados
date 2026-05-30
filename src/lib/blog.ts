import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog')

export function getTodosArtigos({ incluirFuturos = false } = {}) {
  if (!fs.existsSync(BLOG_DIR)) return []
  const hoje = new Date()
  hoje.setHours(23, 59, 59, 999)
  const arquivos = fs.readdirSync(BLOG_DIR)
  return arquivos
    .filter(f => f.endsWith('.mdx'))
    .map(nome => {
      const conteudo = fs.readFileSync(path.join(BLOG_DIR, nome), 'utf8')
      const { data, content } = matter(conteudo)
      return {
        ...data,
        slug: nome.replace('.mdx', ''),
        tempoLeitura: (data.tempoLeitura as string) ?? readingTime(content).text,
      }
    })
    .filter((a: any) => incluirFuturos || new Date(a.date) <= hoje)
    .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getArtigoPorSlug(slug: string) {
  const caminho = path.join(BLOG_DIR, `${slug}.mdx`)
  if (!fs.existsSync(caminho)) return null
  const conteudo = fs.readFileSync(caminho, 'utf8')
  const { data, content } = matter(conteudo)
  return {
    ...data,
    slug,
    content,
    tempoLeitura: (data.tempoLeitura as string) ?? readingTime(content).text,
  }
}

export function getArtigosRelacionados(slugAtual: string, categoria: string, limite = 3) {
  const todos = getTodosArtigos().filter((a: any) => a.slug !== slugAtual)
  const mesmaCategoria = todos.filter((a: any) => a.categoria === categoria)
  if (mesmaCategoria.length >= limite) return mesmaCategoria.slice(0, limite)
  const outros = todos.filter((a: any) => a.categoria !== categoria)
  return [...mesmaCategoria, ...outros].slice(0, limite)
}
