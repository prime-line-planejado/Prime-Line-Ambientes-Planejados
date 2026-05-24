/**
 * Comprime e renomeia imagens do portfólio para SEO.
 * Uso: node scripts/optimize-images.mjs
 *
 * Coloque as imagens brutas em: public/images/raw/
 * Saída otimizada em:           public/images/
 */

import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT      = path.resolve(__dirname, '..')
const RAW_DIR   = path.join(ROOT, 'public', 'images', 'raw')
const OUT_DIR   = path.join(ROOT, 'public', 'images')

// ── Mapeamento: nome do arquivo bruto → slug SEO ───────────────────────────
// Edite aqui se renomear seus arquivos de entrada.
// Chave: nome (sem extensão) do arquivo que você jogou em /raw
// Valor: slug de saída (sem extensão) — será salvo como .webp
const SLUG_MAP = {
  // Portfólio
  'cozinha-1':    'cozinha-planejada-moderna-belo-horizonte',
  'cozinha-2':    'cozinha-planejada-ilha-central-belo-horizonte',
  'sala':         'sala-planejada-integrada-belo-horizonte',
  'suite':        'suite-master-planejada-belo-horizonte',
  'home-office':  'home-office-planejado-belo-horizonte',
  'closet':       'closet-planejado-belo-horizonte',
  // Hero / banner
  'hero':         'ambientes-planejados-prime-line-belo-horizonte',
  // Genérico: se não estiver no mapa, usa o nome original
}

const EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.avif', '.tif', '.tiff']

// ── Configurações de saída ────────────────────────────────────────────────
const CONFIG = {
  portfolio: { width: 1200, height: 900,  quality: 82, fit: 'cover'   },
  hero:      { width: 1920, height: 1080, quality: 85, fit: 'cover'   },
  default:   { width: 1200, height: 900,  quality: 82, fit: 'inside'  },
}

function getConfig(slug) {
  if (slug.startsWith('hero') || slug.startsWith('banner')) return CONFIG.hero
  return CONFIG.portfolio
}

async function run() {
  if (!fs.existsSync(RAW_DIR)) {
    console.error(`\n❌ Pasta não encontrada: ${RAW_DIR}`)
    console.info('   Crie a pasta e coloque suas imagens lá.\n')
    process.exit(1)
  }

  const files = fs.readdirSync(RAW_DIR).filter(f =>
    EXTENSIONS.includes(path.extname(f).toLowerCase())
  )

  if (files.length === 0) {
    console.info('\n⚠️  Nenhuma imagem encontrada em public/images/raw/\n')
    process.exit(0)
  }

  console.info(`\n🔧 Otimizando ${files.length} imagem(ns)...\n`)

  const results = []

  for (const file of files) {
    const nameNoExt = path.basename(file, path.extname(file))
    const slug      = SLUG_MAP[nameNoExt] ?? nameNoExt
    const cfg       = getConfig(slug)
    const inputPath = path.join(RAW_DIR, file)
    const outPath   = path.join(OUT_DIR, `${slug}.webp`)

    const before = fs.statSync(inputPath).size

    await sharp(inputPath)
      .resize(cfg.width, cfg.height, { fit: cfg.fit, withoutEnlargement: true })
      .webp({ quality: cfg.quality, effort: 5 })
      .toFile(outPath)

    const after = fs.statSync(outPath).size
    const saved = (((before - after) / before) * 100).toFixed(1)

    results.push({ input: file, output: `${slug}.webp`, before, after, saved })
    console.info(`  ✅ ${file}`)
    console.info(`     → ${slug}.webp`)
    console.info(`     ${(before / 1024).toFixed(0)} KB → ${(after / 1024).toFixed(0)} KB  (${saved}% menor)\n`)
  }

  console.info('─'.repeat(60))
  const totalBefore = results.reduce((s, r) => s + r.before, 0)
  const totalAfter  = results.reduce((s, r) => s + r.after,  0)
  const totalSaved  = (((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1)
  console.info(`📦 Total: ${(totalBefore / 1024).toFixed(0)} KB → ${(totalAfter / 1024).toFixed(0)} KB  (${totalSaved}% menor)`)
  console.info(`📁 Saída: public/images/\n`)
}

run().catch(err => {
  console.error('\n❌ Erro:', err.message)
  process.exit(1)
})
