interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'light'
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  return (
    <span className={`label-caps inline-block px-3 py-1 text-[10px] ${
      variant === 'light'
        ? 'text-gold-light border border-gold-light/30'
        : 'text-brand-500 border border-brand-200'
    }`}>
      {children}
    </span>
  )
}
