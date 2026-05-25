import { MDXRemote } from 'next-mdx-remote/rsc'
import { slugify } from '@/lib/utils'

interface Props {
  source: string
}

const components = {
  h2: ({ children }: { children?: React.ReactNode }) => (
    <h2 id={slugify(String(children))}>{children}</h2>
  ),
  h3: ({ children }: { children?: React.ReactNode }) => (
    <h3 id={slugify(String(children))}>{children}</h3>
  ),
}

export function ConteudoMDX({ source }: Props) {
  return (
    <div className="prose-prime">
      <MDXRemote source={source} components={components} />
    </div>
  )
}
