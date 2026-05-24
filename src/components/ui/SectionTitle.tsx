interface SectionTitleProps {
  label: string
  title: string
  center?: boolean
  light?: boolean
}

export function SectionTitle({ label, title, center = false, light = false }: SectionTitleProps) {
  return (
    <div className={center ? 'text-center' : ''}>
      <p className={`label-caps mb-3 ${light ? 'text-gold-light' : 'text-brand-500'}`}>{label}</p>
      <h2 className={`font-display font-light text-4xl md:text-5xl leading-tight ${light ? 'text-brand-50' : 'text-brand-900'}`}>
        {title}
      </h2>
      <span className={`gold-line mt-4 ${center ? 'gold-line--center' : ''}`} />
    </div>
  )
}
