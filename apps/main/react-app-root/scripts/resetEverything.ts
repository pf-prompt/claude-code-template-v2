import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Helper function to extract content between markers
function extractKeptContent(content: string): string {
  const startMarker = '/* KEEP_AFTER_RESET_BEGIN */'
  const endMarker = '/* KEEP_AFTER_RESET_END */'

  let workingContent = content
  let keptContent = ''

  // Keep extracting content between markers until no more pairs are found
  while (true) {
    const startIndex = workingContent.indexOf(startMarker)
    const endIndex = workingContent.indexOf(endMarker)

    if (startIndex !== -1 && endIndex !== -1 && startIndex < endIndex) {
      // Extract content between markers (excluding the markers themselves)
      const startOfContent = startIndex + startMarker.length
      const contentBetweenMarkers = workingContent.substring(
        startOfContent,
        endIndex
      )

      // Add to kept content (with newline separator if there's already content)
      if (keptContent && contentBetweenMarkers.trim()) {
        keptContent += '\n' + contentBetweenMarkers
      } else if (contentBetweenMarkers.trim()) {
        keptContent += contentBetweenMarkers
      }

      // Remove this marker pair from content to search for more
      const beforeMarker = workingContent.substring(0, startIndex)
      const afterMarker = workingContent.substring(
        endIndex + endMarker.length
      )
      workingContent = beforeMarker + afterMarker
    } else {
      break
    }
  }

  return keptContent
}

function resetDirectory(relativePath: string, appendContent?: string, ensureIndexTs = true) {
  const dirPath = path.join(__dirname, '..', relativePath)
  const displayName = relativePath
  const indexTsPath = path.join(dirPath, 'index.ts')
  const indexCssPath = path.join(dirPath, 'index.css')

  console.log(`Starting to reset ${displayName} directory...`)

  // Save existing index.ts and index.css content if they exist
  let existingIndexTsContent: string | null = null
  let existingIndexCssContent: string | null = null

  if (fs.existsSync(indexTsPath)) {
    existingIndexTsContent = fs.readFileSync(indexTsPath, 'utf-8')
  }

  if (fs.existsSync(indexCssPath)) {
    existingIndexCssContent = fs.readFileSync(indexCssPath, 'utf-8')
  }

  // Remove entire directory recursively
  fs.rmSync(dirPath, { recursive: true, force: true })
  console.log(`Deleted ${displayName} directory`)

  // Recreate directory
  fs.mkdirSync(dirPath, { recursive: true })
  console.log(`Recreated ${displayName} directory`)

  // Handle index.ts file
  let finalTsContent = ''
  if (existingIndexTsContent !== null) {
    finalTsContent = extractKeptContent(existingIndexTsContent)
  }

  // Append additional content if provided
  if (appendContent) {
    finalTsContent += (finalTsContent ? '\n' : '') + appendContent
  }

  if (finalTsContent || ensureIndexTs) {
    fs.writeFileSync(indexTsPath, finalTsContent, 'utf-8')
    console.log(`Created ${displayName}/index.ts file`)
  }

  // Handle index.css file
  if (existingIndexCssContent !== null) {
    let finalCssContent = extractKeptContent(existingIndexCssContent)

    if (appendContent) {
      finalCssContent += (finalCssContent ? '\n' : '') + appendContent
    }
    fs.writeFileSync(indexCssPath, finalCssContent, 'utf-8')
    console.log(`Created ${displayName}/index.css file`)
  }
}

function appendFile(
  relativePath: string,
  filename: string,
  content: string
) {
  const dirPath = path.join(__dirname, '..', relativePath)
  const filePath = path.join(dirPath, filename)
  fs.appendFileSync(filePath, content, 'utf-8')
  console.log(`Appended ${relativePath}/${filename} file`)
}

function rmIfExists(filePath: string) {
  fs.rmSync(filePath, { force: true })
}

function scanDirectorySync(dir: string, callback: (p: string) => void) {
  if (!fs.existsSync(dir)) return

  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      scanDirectorySync(fullPath, callback)
    } else if (entry.isFile()) {
      callback(fullPath)
    }
  }
}

interface ToRetainItem {
    p: string,
    useKeepMarker: boolean
}

function getToRetainContent(r: ToRetainItem) {
  let v = fs.readFileSync(r.p, 'utf-8')
  if (r.useKeepMarker) {
    v = extractKeptContent(v)
  }
  return v
}

async function main() {
  const TO_RETAIN: Array<string | ToRetainItem> = [
    path.join(__dirname, '../frontend/state/sharedLocationState.ts'),
    path.join(__dirname, '../frontend/themes/theme-default'),
    {
      p: path.join(__dirname, '../frontend/infra/theme/config.ts'),
      useKeepMarker: true,
    },
    {
      p: path.join(__dirname, '../frontend/infra/router/RoutePath.ts'),
      useKeepMarker: true,
    }
  ]

  const toRetainFiles: Array<[string, string]> = []
  for (const _r of TO_RETAIN) {
    const r = typeof _r !== 'string' ? _r : {
      p: _r,
      useKeepMarker: false,
    }

    if (fs.statSync(r.p).isDirectory()) {
      scanDirectorySync(r.p, (p) => {
        toRetainFiles.push([p, getToRetainContent({ p, useKeepMarker: r.useKeepMarker })])
      })
    } else {
      toRetainFiles.push([r.p, getToRetainContent(r)])
    }
  }

  rmIfExists(path.join(__dirname, 'tryBackend.ts'))
  rmIfExists(path.join(__dirname, '../.env'))
  fs.writeFileSync(path.join(__dirname, '../.env'), '')
  fs.writeFileSync(path.join(__dirname, '../frontend/stateTreeRoot.ts'), "export * from './state'")
  resetDirectory('backend/apiImpl')
  resetDirectory('frontend/tests/prototypeTests')
  resetDirectory('frontend/tests/backendTests')
  resetDirectory('frontend/state')
  resetDirectory('frontend/pages')
  resetDirectory('frontend/components')
  resetDirectory('frontend/commands')
  resetDirectory('frontend/prototype/apiImpl')
  resetDirectory('frontend/prototype/mem')
  resetDirectory('frontend/themes')
  resetDirectory('common/backendApi', 'export type AllApiTypes = object')
  resetDirectory('common/schema', '', false)
  appendFile('common/schema', 'schema.ts', '')

  for (const [p, data] of toRetainFiles) {
    const dir = path.dirname(p)
    fs.mkdirSync(dir, { recursive: true })
    fs.writeFileSync(p, data)
  }

  console.log('Reset completed successfully!')
}

main().catch(e => {
  console.error(e)
  throw e
})
