import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { supabaseAdmin } from '@/lib/supabase-server'

const resend = new Resend(process.env.RESEND_API_KEY)
const EMPRESA_EMAIL = 'primelineambientesplanejados@gmail.com'

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()

    if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json({ error: 'E-mail inválido' }, { status: 400 })
    }

    const emailNormalizado = email.trim().toLowerCase()

    const { error: dbError } = await supabaseAdmin
      .from('leads')
      .insert({ nome: emailNormalizado, email: emailNormalizado, origem: 'newsletter-blog' })

    if (dbError && dbError.code !== '23505') {
      // 23505 = unique violation (e-mail já cadastrado) — tratamos como sucesso
      console.error('[newsletter] Supabase error:', dbError.message)
    }

    const dataHora = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })

    await resend.emails.send({
      from: 'Prime Line Site <onboarding@resend.dev>',
      to: EMPRESA_EMAIL,
      subject: `📬 Nova assinatura de newsletter: ${emailNormalizado}`,
      html: `
        <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:24px;background:#f9f9f7;border:1px solid #e5e3dc">
          <h2 style="margin:0 0 16px;font-size:20px;color:#1a1a18">Nova assinatura de newsletter</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:8px 0;color:#6b6b5a;font-size:14px;width:80px">E-mail</td>
              <td style="padding:8px 0;font-size:14px"><a href="mailto:${emailNormalizado}" style="color:#b8924a">${emailNormalizado}</a></td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#6b6b5a;font-size:14px">Origem</td>
              <td style="padding:8px 0;color:#1a1a18;font-size:14px">newsletter-blog</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#6b6b5a;font-size:14px">Data</td>
              <td style="padding:8px 0;color:#1a1a18;font-size:14px">${dataHora}</td>
            </tr>
          </table>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[newsletter] Erro interno:', err)
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
  }
}
