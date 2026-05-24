import Link from 'next/link'

interface ButtonProps {
  href: string
  variant?: 'outline' | 'solid'
  external?: boolean
  children: React.ReactNode
  className?: string
}

export function Button({ href, variant = 'outline', external = false, children, className = '' }: ButtonProps) {
  const cls = `${variant === 'solid' ? 'btn-solid' : 'btn-outline'} ${className}`
  if (external) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>
  }
  return <Link href={href} className={cls}>{children}</Link>
}
