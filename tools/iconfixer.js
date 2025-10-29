// process-icons.mjs
import * as fs from 'fs'
import { readdir, mkdir, writeFile } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import dedent from 'dedent'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const config = {
  sourceDir: path.join(__dirname, '../assets/icons'),
  targetDir: path.join(__dirname, '../assets/icons'),
  spriteDir: path.join(__dirname, '../assets/sprites'),
  resultFile: path.join(__dirname, '../enums/common/iconList.ts'),
  allowedExtensions: ['.svg']
}

const formatIconName = (filename) => {
  //const baseName = path.basename(filename, path.extname(filename))
  return filename
    .replace(/\s+/g, '-')
    .replace(/[^a-zA-Z0-9_.-]+/g, '-')
    .toLowerCase()
}

const findFilesRecursively = async (dir) => {
  const entries = await readdir(dir, { withFileTypes: true })
  let collections

  entries[0].isDirectory() ? (collections = {}) : (collections = [])

  for (const entry of entries) {
    if (entry.isDirectory() && !entry.name.startsWith('_')) {
      collections[entry.name] = await findFilesRecursively(path.join(dir, entry.name))
    } else if (config.allowedExtensions.includes(path.extname(entry.name).toLowerCase())) {
      collections.push(path.parse(entry.name).name)
      changeFill(path.join(dir, entry.name))

      fs.rename(path.join(dir, entry.name), path.join(dir, formatIconName(entry.name)), (err) => {
        if (err) console.error(err)
      })
    }
  }

  return collections
}

const changeFill = (path) => {
  console.log(path)

  let content = fs.readFileSync(path, 'utf-8')
  content = content
    .replace(/fill="(?!none)([^"]+)"/g, 'fill="currentColor"')
    .replace(/stroke="(?!none)([^"]+)"/g, 'stroke="currentColor"')
  fs.writeFileSync(path, content, 'utf-8')
}

const ensureDirExists = async (dir) => {
  try {
    await mkdir(dir, { recursive: true })
  } catch (err) {
    if (err.code !== 'EEXIST') throw err
  }
}

const processIcons = async () => {
  try {
    await ensureDirExists(config.targetDir)

    const icons = await findFilesRecursively(config.sourceDir)

    if (icons.length === 0) {
      console.warn('⚠️ В исходной директории не найдено подходящих файлов')
      return []
    }

    const collections = Object.keys(icons)
    const templateCollections = dedent`
      export const IconCollections = ${JSON.stringify(icons)} as const\n\nexport type TIconCollections = (typeof IconCollections)`

    // TODO: написать цикл для учета as const вместо строки выше

    let iconTypes = 'export type TIcon = '

    collections.forEach((collection) => {
      if (Array.isArray(icons[collection])) {
        iconTypes += ` | {
          collection: '${collection}'
          variant?: never
          name: ${icons[collection].map((name) => `'${name}'`).join(' | ')}
        }`
      } else {
        Object.keys(icons[collection]).forEach((variant) => {
          iconTypes += ` | {
            collection: '${collection}'
            variant: '${variant}'
            name: ${icons[collection][variant].map((name) => `'${name}'`).join(' | ')}
          }`
        })
      }
    })

    const templateResult = dedent`${templateCollections}\n\n${iconTypes}`

    await writeFile(config.resultFile, templateResult, 'utf-8')

    // return icons
  } catch (error) {
    console.error('❌ Критическая ошибка:', error.message)
    process.exit(1)
  }
}

process.on('unhandledRejection', (err) => {
  console.error('⚠️ Необработанное исключение:', err)
  process.exit(1)
})

await processIcons()
