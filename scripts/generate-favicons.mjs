import sharp from 'sharp'
import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const svgPath = resolve(root, 'public', 'icon.svg')

// Fundo para o ícone (cor de fundo creme/brand da empresa)
const BG = { r: 250, g: 247, b: 242, alpha: 1 } // brand-50 equivalente

async function gerarPNG(tamanho, destino) {
  const svgBuf = readFileSync(svgPath)
  await sharp({
    create: { width: tamanho, height: tamanho, channels: 4, background: BG },
  })
    .composite([{
      input: await sharp(svgBuf)
        .resize(Math.round(tamanho * 0.7), Math.round(tamanho * 0.7), { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toBuffer(),
      gravity: 'centre',
    }])
    .png()
    .toFile(destino)
  const kb = ((await import('fs')).statSync(destino).size / 1024).toFixed(1)
  console.log(`OK  ${destino.split(/[\\/]/).slice(-2).join('/')}  (${kb} KB)`)
}

async function pngParaIco(pngPath, icoDest) {
  const pngBuf = readFileSync(pngPath)
  // ICO header: ICONDIR (6 bytes) + ICONDIRENTRY (16 bytes) + PNG data
  const ICONDIR = Buffer.alloc(6)
  ICONDIR.writeUInt16LE(0, 0)   // reserved
  ICONDIR.writeUInt16LE(1, 2)   // type: icon
  ICONDIR.writeUInt16LE(1, 4)   // count: 1 image

  const ENTRY = Buffer.alloc(16)
  ENTRY.writeUInt8(32, 0)       // width
  ENTRY.writeUInt8(32, 1)       // height
  ENTRY.writeUInt8(0, 2)        // color count
  ENTRY.writeUInt8(0, 3)        // reserved
  ENTRY.writeUInt16LE(1, 4)     // planes
  ENTRY.writeUInt16LE(32, 6)    // bit count
  ENTRY.writeUInt32LE(pngBuf.length, 8)  // size
  ENTRY.writeUInt32LE(22, 12)   // offset (6 + 16 = 22)

  writeFileSync(icoDest, Buffer.concat([ICONDIR, ENTRY, pngBuf]))
  const kb = (readFileSync(icoDest).length / 1024).toFixed(1)
  console.log(`OK  ${icoDest.split(/[\\/]/).slice(-1)[0]}  (${kb} KB)`)
}

const pub = resolve(root, 'public')

await gerarPNG(32,  resolve(pub, 'favicon-32x32.png'))
await gerarPNG(180, resolve(pub, 'apple-touch-icon.png'))
await pngParaIco(resolve(pub, 'favicon-32x32.png'), resolve(pub, 'favicon.ico'))

console.log('\nFavicons gerados com sucesso.')
