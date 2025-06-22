import { createServer } from 'http'
import { readFileSync, existsSync } from 'fs'
import { extname, join } from 'path'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// MIME types
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
}

function serveFile(pathname, res) {
  let filePath = ''
  
  if (pathname === '/') {
    filePath = join(__dirname, 'dist', 'index.html')
  } else {
    filePath = join(__dirname, 'dist', pathname)
  }
  
  // Check if file exists
  if (!existsSync(filePath)) {
    res.writeHead(404, { 'Content-Type': 'text/html' })
    res.end('<h1>404 - File Not Found</h1>')
    return
  }
  
  // Get file extension
  const ext = extname(filePath)
  const contentType = mimeTypes[ext] || 'application/octet-stream'
  
  try {
    const content = readFileSync(filePath)
    res.writeHead(200, { 'Content-Type': contentType })
    res.end(content)
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/html' })
    res.end('<h1>500 - Internal Server Error</h1>')
  }
}

const server = createServer((req, res) => {
  const pathname = req.url
  
  console.log(`${new Date().toISOString()} - ${req.method} ${pathname}`)
  
  serveFile(pathname, res)
})

const PORT = 4000

server.listen(PORT, () => {
  console.log('🚀 Static development server running at:')
  console.log(`   Local: http://localhost:${PORT}/`)
  console.log('\n📝 Press Ctrl+C to stop the server')
  console.log('\n⚠️  Note: This serves the built files from dist/. Run "npm run build" to rebuild after changes.')
})

server.on('error', (error) => {
  console.error('❌ Server error:', error.message)
  process.exit(1)
})

process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down server...')
  server.close()
  process.exit(0)
}) 