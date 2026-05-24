import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog')

export function getTodosArtigos() {
  if (!fs.existsSync(BLOG_DIR)) return []
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
  return getTodosArtigos()
    .filter((a: any) => a.slug !== slugAtual && a.categoria === categoria)
    .slice(0, limite)
}
