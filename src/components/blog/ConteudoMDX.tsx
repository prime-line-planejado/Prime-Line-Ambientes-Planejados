import { MDXRemote } from 'next-mdx-remote/rsc'

interface Props {
  source: string
}

export function ConteudoMDX({ source }: Props) {
  return (
    <div className="prose-prime">
      <MDXRemote source={source} />
    </div>
  )
}
