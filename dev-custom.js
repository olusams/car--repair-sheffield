import { createServer } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function startDevServer() {
  try {
    console.log('🚀 Starting custom development server...')
    
    const server = await createServer({
      root: __dirname,
      configFile: false,
      plugins: [react()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
        },
      },
      server: {
        port: 4000,
        host: true,
      },
    })
    
    await server.listen()
    
    console.log('✅ Development server running at:')
    console.log(`   Local: http://localhost:4000/`)
    console.log(`   Network: http://${server.config.server.host}:4000/`)
    console.log('\n📝 Press Ctrl+C to stop the server')
    
  } catch (error) {
    console.error('❌ Failed to start development server:', error.message)
    process.exit(1)
  }
}

startDevServer() 