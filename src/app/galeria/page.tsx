import { permanentRedirect } from 'next/navigation'

export default function GaleriaPage() {
  permanentRedirect('/portfolio?aba=galeria')
}
