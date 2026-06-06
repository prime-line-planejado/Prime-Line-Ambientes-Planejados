'use server'

import { randomUUID } from 'crypto'
import { headers, cookies } from 'next/headers'
import { supabaseAdmin } from '@/lib/supabase-server'
import { WA_NUMBER } from '@/lib/whatsapp'
import { sendCapiEvent } from '@/lib/meta-capi'

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? ''
const WA_FALLBACK   = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Olá, vim pelo site e gostaria de um orçamento.')}`

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
  const email    = (formData.get('email')    as string | null)?.trim() ?? ''
  const ambiente = (formData.get('ambiente') as string | null)?.trim()
  const mensagem = (formData.get('mensagem') as string | null)?.trim() ?? ''
  const eventId  = (formData.get('fb_event_id') as string | null)?.trim() || randomUUID()

  if (!nome || !telefone || !ambiente) {
    return { status: 'error', message: 'Preencha todos os campos obrigatórios.' }
  }

  // Salva no Supabase (origem = 'formulario-contato')
  try {
    await supabaseAdmin.from('leads').insert({
      nome,
      email: email || telefone,
      origem: `formulario-contato — ${ambiente}`,
    })
  } catch (err) {
    console.error('[contato] Supabase error:', err)
  }

  if (!WEB3FORMS_KEY) {
    return { status: 'error', message: 'no_api_key' }
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
        email:       email || '—',
        ambiente,
        message:     mensagem || '—',
        botcheck:    '',
      }),
    })

    const data = await res.json()
    if (data.success) {
      // Conversão Lead server-side (CAPI) — mesmo event_id do pixel → deduplicação.
      try {
        const h = await headers()
        const c = await cookies()
        const ip = h.get('x-forwarded-for')?.split(',')[0]?.trim() || h.get('x-real-ip')
        await sendCapiEvent({
          eventName: 'Lead',
          eventId,
          eventSourceUrl: h.get('referer') || undefined,
          email: email || null,
          phone: telefone,
          name: nome,
          clientIp: ip,
          userAgent: h.get('user-agent'),
          fbp: c.get('_fbp')?.value,
          fbc: c.get('_fbc')?.value,
          customData: { content_name: 'Formulário de Orçamento', ambiente },
        })
      } catch (err) {
        console.error('[contato] CAPI Lead falhou:', err)
      }
      return { status: 'ok' }
    }

    return { status: 'error', message: 'Erro ao enviar. Tente pelo WhatsApp.' }
  } catch {
    return { status: 'error', message: 'Erro ao enviar. Tente pelo WhatsApp.' }
  }
}

export { WA_FALLBACK }
