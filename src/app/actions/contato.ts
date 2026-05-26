'use server'

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? ''
const WA_FALLBACK   = 'https://wa.me/5531998156666?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento.'

export type ContatoState =
  | { status: 'idle' }
  | { status: 'ok' }
  | { status: 'error'; message: string }

export async function enviarContato(
  _prev: ContatoState,
  formData: FormData,
): Promise<ContatoState> {
  const nome     = (formData.get('nome')     as string | null)?.trim()
  const telefone = (formData.get('telefone') as string | null)?.trim()
  const ambiente = (formData.get('ambiente') as string | null)?.trim()
  const mensagem = (formData.get('mensagem') as string | null)?.trim() ?? ''

  if (!nome || !telefone || !ambiente) {
    return { status: 'error', message: 'Preencha todos os campos obrigatórios.' }
  }

  if (!WEB3FORMS_KEY) {
    return { status: 'error', message: 'no_key' }
  }

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key:  WEB3FORMS_KEY,
        subject:     `Novo contato — ${ambiente} | ${nome}`,
        from_name:   'Prime Line Site',
        name:        nome,
        phone:       telefone,
        ambiente,
        message:     mensagem || '—',
        botcheck:    '',
      }),
    })

    const data = await res.json()
    if (data.success) return { status: 'ok' }

    return { status: 'error', message: 'Erro ao enviar. Tente pelo WhatsApp.' }
  } catch {
    return { status: 'error', message: 'Erro ao enviar. Tente pelo WhatsApp.' }
  }
}

export { WA_FALLBACK }
