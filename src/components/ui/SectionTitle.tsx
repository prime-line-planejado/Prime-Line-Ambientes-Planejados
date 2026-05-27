interface SectionTitleProps {
  label: string
  title: string
  center?: boolean
  light?: boolean
  as?: 'h1' | 'h2'
}

export function SectionTitle({ label, title, center = false, light = false, as: Tag = 'h2' }: SectionTitleProps) {
  return (
    <div className={center ? 'text-center' : ''}>
      <p className={`label-caps mb-3 ${light ? 'text-gold-light' : 'text-brand-500'}`}>{label}</p>
      <Tag className={`font-display font-light text-4xl md:text-5xl leading-tight ${light ? 'text-brand-50' : 'text-brand-900'}`}>
        {title}
      </Tag>
      <span className={`gold-line mt-4 ${center ? 'gold-line--center' : ''}`} />
    </div>
  )
}
