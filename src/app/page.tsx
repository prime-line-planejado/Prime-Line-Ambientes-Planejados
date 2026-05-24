import { Hero } from '@/components/home/Hero'
import { Diferenciais } from '@/components/home/Diferenciais'
import { PortfolioHome } from '@/components/home/PortfolioHome'
import { Depoimentos } from '@/components/home/Depoimentos'
import { BlogPreview } from '@/components/home/BlogPreview'
import { CtaContato } from '@/components/home/CtaContato'

export default function Home() {
  return (
    <>
      <Hero />
      <Diferenciais />
      <PortfolioHome />
      <Depoimentos />
      <BlogPreview />
      <CtaContato />
    </>
  )
}
